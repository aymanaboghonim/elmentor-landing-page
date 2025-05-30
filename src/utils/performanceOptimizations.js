/**
 * Performance Monitoring and Optimization Utilities
 * Implements Web Vitals tracking and performance optimizations
 */

// Track Core Web Vitals
export const trackWebVitals = () => {
  if ('web-vital' in window) {
    // Track Cumulative Layout Shift (CLS)
    new PerformanceObserver((list) => {
      let cls = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
      console.log('CLS:', cls);
    }).observe({type: 'layout-shift', buffered: true});

    // Track First Input Delay (FID)
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', entry.processingStart - entry.startTime);
      }
    }).observe({type: 'first-input', buffered: true});

    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    }).observe({type: 'largest-contentful-paint', buffered: true});
  }
};

// Optimize images with Intersection Observer
export const optimizeImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image and critical fonts
  const criticalResources = [
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    Object.assign(link, resource);
    document.head.appendChild(link);
  });
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    setInterval(() => {
      const memory = performance.memory;
      console.log('Memory Usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }, 30000); // Check every 30 seconds
  }
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run only in production or when performance monitoring is enabled
  if (process.env.NODE_ENV === 'production' || window.location.search.includes('perf=1')) {
    trackWebVitals();
    monitorMemoryUsage();
  }
  
  optimizeImages();
  preloadCriticalResources();
  
  // Add passive event listeners for better scroll performance
  document.addEventListener('scroll', () => {}, { passive: true });
  document.addEventListener('touchstart', () => {}, { passive: true });
  document.addEventListener('touchmove', () => {}, { passive: true });
};
