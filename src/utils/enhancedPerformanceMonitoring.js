/**
 * Enhanced Performance Monitoring and Web Vitals Tracking
 * Comprehensive performance analytics for Elmentor Landing Page
 */

// Web Vitals thresholds (Google recommendations)
const PERFORMANCE_THRESHOLDS = {
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 },   // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, poor: 1800 }  // Time to First Byte
};

// Performance metrics storage
let performanceMetrics = {
  timestamp: Date.now(),
  url: window.location.href,
  userAgent: navigator.userAgent,
  connectionType: navigator.connection?.effectiveType || 'unknown',
  metrics: {},
  errors: [],
  warnings: []
};

/**
 * Track Core Web Vitals
 */
export const trackWebVitals = () => {
  // Track FCP (First Contentful Paint)
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const fcp = entries[entries.length - 1];
    recordMetric('FCP', fcp.startTime, PERFORMANCE_THRESHOLDS.FCP);
  });
  
  try {
    fcpObserver.observe({ entryTypes: ['paint'] });
  } catch (error) {
    console.warn('FCP tracking not supported:', error);
  }

  // Track LCP (Largest Contentful Paint)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lcp = entries[entries.length - 1];
    recordMetric('LCP', lcp.startTime, PERFORMANCE_THRESHOLDS.LCP);
  });
  
  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (error) {
    console.warn('LCP tracking not supported:', error);
  }

  // Track FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      recordMetric('FID', entry.processingStart - entry.startTime, PERFORMANCE_THRESHOLDS.FID);
    });
  });
  
  try {
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (error) {
    console.warn('FID tracking not supported:', error);
  }

  // Track CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        recordMetric('CLS', clsValue, PERFORMANCE_THRESHOLDS.CLS);
      }
    }
  });
  
  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (error) {
    console.warn('CLS tracking not supported:', error);
  }
};

/**
 * Record performance metric with scoring
 */
const recordMetric = (name, value, thresholds) => {
  const score = value <= thresholds.good ? 'good' : 
                value <= thresholds.poor ? 'needs-improvement' : 'poor';
  
  performanceMetrics.metrics[name] = {
    value: Math.round(value * 100) / 100,
    score,
    timestamp: Date.now()
  };

  // Log performance issues
  if (score === 'poor') {
    console.warn(`🔴 Performance Issue: ${name} = ${value}ms (threshold: ${thresholds.good}ms)`);
    performanceMetrics.warnings.push({
      type: 'performance',
      metric: name,
      value,
      threshold: thresholds.good,
      timestamp: Date.now()
    });
  }

  // Dispatch custom event for real-time monitoring
  window.dispatchEvent(new CustomEvent('performance-metric', {
    detail: { name, value, score }
  }));
};

/**
 * Track Resource Loading Performance
 */
export const trackResourcePerformance = () => {
  const resourceObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    
    entries.forEach((entry) => {
      const resourceType = entry.initiatorType;
      const loadTime = entry.responseEnd - entry.requestStart;
      
      // Track slow resources
      if (loadTime > 1000) {
        performanceMetrics.warnings.push({
          type: 'slow-resource',
          url: entry.name,
          resourceType,
          loadTime,
          timestamp: Date.now()
        });
        console.warn(`🐌 Slow Resource: ${resourceType} - ${entry.name} (${loadTime}ms)`);
      }
    });
  });
  
  try {
    resourceObserver.observe({ entryTypes: ['resource'] });
  } catch (error) {
    console.warn('Resource tracking not supported:', error);
  }
};

/**
 * Memory Usage Monitoring
 */
export const monitorMemoryUsage = () => {
  if (!performance.memory) {
    console.warn('Memory monitoring not supported');
    return;
  }

  const checkMemory = () => {
    const memory = performance.memory;
    const memoryInfo = {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };

    // Alert if memory usage is high
    const memoryUsagePercent = (memoryInfo.used / memoryInfo.limit) * 100;
    if (memoryUsagePercent > 80) {
      console.warn(`🔴 High Memory Usage: ${memoryUsagePercent.toFixed(1)}%`);
      performanceMetrics.warnings.push({
        type: 'high-memory',
        usage: memoryUsagePercent,
        memoryInfo,
        timestamp: Date.now()
      });
    }

    performanceMetrics.memory = memoryInfo;
  };

  checkMemory();
  setInterval(checkMemory, 30000); // Check every 30 seconds
};

/**
 * Network Performance Monitoring
 */
export const trackNetworkPerformance = () => {
  // Monitor connection changes
  if (navigator.connection) {
    const updateConnectionInfo = () => {
      performanceMetrics.connection = {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink,
        rtt: navigator.connection.rtt,
        saveData: navigator.connection.saveData
      };
    };

    updateConnectionInfo();
    navigator.connection.addEventListener('change', updateConnectionInfo);
  }

  // Track navigation timing
  if (performance.navigation) {
    performanceMetrics.navigation = {
      type: performance.navigation.type,
      redirectCount: performance.navigation.redirectCount
    };
  }
};

/**
 * Performance Budget Monitoring
 */
export const checkPerformanceBudget = () => {
  const budget = {
    maxBundleSize: 300 * 1024, // 300KB
    maxImageSize: 100 * 1024,  // 100KB
    maxCSSSize: 50 * 1024,     // 50KB
    maxJSSize: 250 * 1024      // 250KB
  };

  const resources = performance.getEntriesByType('resource');
  const violations = [];

  resources.forEach((resource) => {
    const size = resource.transferSize || 0;
    const type = resource.initiatorType;
    
    if (type === 'img' && size > budget.maxImageSize) {
      violations.push({
        type: 'image-budget-exceeded',
        url: resource.name,
        size: size,
        limit: budget.maxImageSize
      });
    } else if (type === 'script' && size > budget.maxJSSize) {
      violations.push({
        type: 'js-budget-exceeded',
        url: resource.name,
        size: size,
        limit: budget.maxJSSize
      });
    } else if (type === 'link' && size > budget.maxCSSSize) {
      violations.push({
        type: 'css-budget-exceeded',
        url: resource.name,
        size: size,
        limit: budget.maxCSSSize
      });
    }
  });

  if (violations.length > 0) {
    console.warn('📊 Performance Budget Violations:', violations);
    performanceMetrics.budgetViolations = violations;
  }

  return violations;
};

/**
 * Generate Performance Report
 */
export const generatePerformanceReport = () => {
  const report = {
    ...performanceMetrics,
    timestamp: Date.now(),
    sessionDuration: Date.now() - performanceMetrics.timestamp,
    budgetViolations: checkPerformanceBudget()
  };

  // Calculate overall performance score
  const scores = Object.values(performanceMetrics.metrics).map(metric => {
    return metric.score === 'good' ? 100 : 
           metric.score === 'needs-improvement' ? 50 : 0;
  });
  
  report.overallScore = scores.length > 0 ? 
    Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  return report;
};

/**
 * Export Performance Data (for automation integration)
 */
export const exportPerformanceData = () => {
  const report = generatePerformanceReport();
  
  // Format for automation consumption
  const automationData = {
    timestamp: new Date().toISOString(),
    metrics: {
      fcp: report.metrics.FCP?.value || null,
      lcp: report.metrics.LCP?.value || null,
      fid: report.metrics.FID?.value || null,
      cls: report.metrics.CLS?.value || null
    },
    scores: {
      fcp: report.metrics.FCP?.score || 'unknown',
      lcp: report.metrics.LCP?.score || 'unknown',
      fid: report.metrics.FID?.score || 'unknown',
      cls: report.metrics.CLS?.score || 'unknown'
    },
    overallScore: report.overallScore,
    warningCount: report.warnings.length,
    budgetViolations: report.budgetViolations?.length || 0
  };

  // Store in localStorage for automation pickup
  localStorage.setItem('elmentor-performance-data', JSON.stringify(automationData));
  
  return automationData;
};

/**
 * Initialize all performance monitoring
 */
export const initializePerformanceMonitoring = () => {
  // Only run in production or when explicitly enabled
  if (import.meta.env.PROD || window.location.search.includes('perf=1')) {
    console.log('🚀 Initializing Performance Monitoring...');
    
    trackWebVitals();
    trackResourcePerformance();
    monitorMemoryUsage();
    trackNetworkPerformance();
    
    // Export data periodically
    setInterval(exportPerformanceData, 60000); // Every minute
    
    // Export on page unload
    window.addEventListener('beforeunload', exportPerformanceData);
    
    console.log('✅ Performance Monitoring Active');
  }
};
