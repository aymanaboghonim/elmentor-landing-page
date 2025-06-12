#!/usr/bin/env node

/**
 * Performance Budget Checker
 * Automated script to check if build meets performance budgets
 * Can be integrated into CI/CD pipeline
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance Budget Thresholds
const PERFORMANCE_BUDGET = {
  // Bundle size limits (in kB)
  BUNDLE_SIZE: {
    MAIN_JS: 200,      // Main JavaScript bundle
    MAIN_CSS: 50,      // Main CSS bundle
    TOTAL_ASSETS: 500, // Total assets including images
    VENDOR_JS: 150     // Vendor dependencies
  },
  // Runtime performance targets
  WEB_VITALS: {
    FCP: 1800,   // First Contentful Paint (ms)
    LCP: 2500,   // Largest Contentful Paint (ms)
    FID: 100,    // First Input Delay (ms)
    CLS: 0.1,    // Cumulative Layout Shift
    TTFB: 800    // Time to First Byte (ms)
  },
  // Network optimization targets
  COMPRESSION: {
    MIN_GZIP_RATIO: 0.3,  // Minimum compression ratio
    MAX_UNCOMPRESSED: 1000 // Max uncompressed asset size (kB)
  }
};

/**
 * Check bundle sizes from build output
 */
function checkBundleSizes() {
  const distPath = path.join(path.dirname(__dirname), 'dist');
  const results = {
    passed: true,
    violations: [],
    summary: {}
  };

  try {
    // Read build assets
    const assetsPath = path.join(distPath, 'assets');
    const files = fs.readdirSync(assetsPath);
    
    let totalJSSize = 0;
    let totalCSSSize = 0;
    let vendorJSSize = 0;
    let mainJSSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (file.endsWith('.js')) {
        totalJSSize += sizeKB;
        
        if (file.includes('vendor') || file.includes('react')) {
          vendorJSSize += sizeKB;
        } else if (file.includes('index')) {
          mainJSSize += sizeKB;
        }
      } else if (file.endsWith('.css')) {
        totalCSSSize += sizeKB;
      }
    });

    results.summary = {
      totalJSSize,
      totalCSSSize,
      vendorJSSize,
      mainJSSize,
      totalSize: totalJSSize + totalCSSSize
    };

    // Check budget violations
    if (mainJSSize > PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_JS) {
      results.passed = false;
      results.violations.push({
        type: 'BUNDLE_SIZE',
        metric: 'MAIN_JS',
        actual: mainJSSize,
        budget: PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_JS,
        severity: 'HIGH'
      });
    }

    if (totalCSSSize > PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_CSS) {
      results.passed = false;
      results.violations.push({
        type: 'BUNDLE_SIZE',
        metric: 'MAIN_CSS',
        actual: totalCSSSize,
        budget: PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_CSS,
        severity: 'MEDIUM'
      });
    }

    if (vendorJSSize > PERFORMANCE_BUDGET.BUNDLE_SIZE.VENDOR_JS) {
      results.passed = false;
      results.violations.push({
        type: 'BUNDLE_SIZE',
        metric: 'VENDOR_JS',
        actual: vendorJSSize,
        budget: PERFORMANCE_BUDGET.BUNDLE_SIZE.VENDOR_JS,
        severity: 'MEDIUM'
      });
    }

  } catch (error) {
    console.error('❌ Error checking bundle sizes:', error.message);
    results.passed = false;
    results.violations.push({
      type: 'BUILD_ERROR',
      metric: 'BUNDLE_ANALYSIS',
      error: error.message,
      severity: 'HIGH'
    });
  }

  return results;
}

/**
 * Check if performance data exists from monitoring
 */
function checkPerformanceData() {
  const results = {
    passed: true,
    violations: [],
    hasData: false,
    summary: {}
  };
  // Check if we have stored performance data
  const dataFile = path.join(path.dirname(__dirname), 'performance-data.json');
  
  if (fs.existsSync(dataFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
      results.hasData = true;
      results.summary = data;

      // Check Web Vitals against budget
      Object.entries(PERFORMANCE_BUDGET.WEB_VITALS).forEach(([metric, budget]) => {
        const actual = data.metrics?.[metric.toLowerCase()];
        if (actual && actual > budget) {
          results.passed = false;
          results.violations.push({
            type: 'WEB_VITALS',
            metric,
            actual,
            budget,
            severity: 'HIGH'
          });
        }
      });

    } catch (error) {
      console.warn('⚠️  Warning: Could not parse performance data');
    }
  }

  return results;
}

/**
 * Generate performance budget report
 */
function generateReport(bundleResults, performanceResults) {
  const allPassed = bundleResults.passed && performanceResults.passed;
  const allViolations = [...bundleResults.violations, ...performanceResults.violations];

  console.log('\n📊 PERFORMANCE BUDGET REPORT');
  console.log('=====================================');
  
  // Bundle Size Report
  console.log('\n📦 Bundle Analysis:');
  console.log(`   Main JS: ${bundleResults.summary.mainJSSize}kB (budget: ${PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_JS}kB)`);
  console.log(`   Main CSS: ${bundleResults.summary.totalCSSSize}kB (budget: ${PERFORMANCE_BUDGET.BUNDLE_SIZE.MAIN_CSS}kB)`);
  console.log(`   Vendor JS: ${bundleResults.summary.vendorJSSize}kB (budget: ${PERFORMANCE_BUDGET.BUNDLE_SIZE.VENDOR_JS}kB)`);
  console.log(`   Total Size: ${bundleResults.summary.totalSize}kB`);

  // Performance Data Report
  if (performanceResults.hasData) {
    console.log('\n⚡ Runtime Performance:');
    Object.entries(PERFORMANCE_BUDGET.WEB_VITALS).forEach(([metric, budget]) => {
      const actual = performanceResults.summary.metrics?.[metric.toLowerCase()];
      const status = actual ? (actual <= budget ? '✅' : '❌') : '⚪';
      console.log(`   ${metric}: ${actual || 'N/A'} (budget: ${budget}) ${status}`);
    });
  } else {
    console.log('\n⚪ Runtime Performance: No data available (run with ?perf=1)');
  }

  // Violations Report
  if (allViolations.length > 0) {
    console.log('\n❌ BUDGET VIOLATIONS:');
    allViolations.forEach((violation, index) => {
      const severity = violation.severity === 'HIGH' ? '🔴' : violation.severity === 'MEDIUM' ? '🟡' : '🟢';
      console.log(`   ${index + 1}. ${severity} ${violation.type}: ${violation.metric}`);
      console.log(`      Actual: ${violation.actual} | Budget: ${violation.budget}`);
    });
  }

  // Final Status
  console.log('\n=====================================');
  if (allPassed) {
    console.log('✅ ALL PERFORMANCE BUDGETS PASSED');
    process.exit(0);
  } else {
    console.log('❌ PERFORMANCE BUDGET VIOLATIONS DETECTED');
    console.log(`   Found ${allViolations.length} violation(s)`);
    
    // Exit with error code for CI/CD
    if (process.argv.includes('--strict')) {
      process.exit(1);
    } else {
      console.log('   Running in warning mode (use --strict for CI/CD)');
      process.exit(0);
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Running Performance Budget Check...');
  
  const bundleResults = checkBundleSizes();
  const performanceResults = checkPerformanceData();
  
  generateReport(bundleResults, performanceResults);
}

// Check if this module is being run directly
// Run the main function immediately since this is a script
main();

export {
  checkBundleSizes,
  checkPerformanceData,
  generateReport,
  PERFORMANCE_BUDGET
};
