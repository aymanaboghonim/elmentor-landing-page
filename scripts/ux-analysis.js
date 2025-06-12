// ux-analysis.js
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {  // Create reports directory if it doesn't exist
  const reportsDir = path.join(__dirname, 'ux-reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Function to analyze page for UX issues
  async function analyzeUx(url, prefix) {
    console.log(`Analyzing UX for ${url}...`);
    
    // Navigate to the URL
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    // Get all issues
    const issues = [];
    
    // Check for contrast issues
    const contrastIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, span, li');
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const color = style.color;
        const bgColor = style.backgroundColor;
        
        // Simple contrast check (this is very basic, WCAG would need more complex evaluation)
        if (bgColor !== 'rgba(0, 0, 0, 0)' && color && bgColor) {
          // Convert colors to grayscale to check contrast
          const textRgb = color.match(/\d+/g);
          const bgRgb = bgColor.match(/\d+/g);
          
          if (textRgb && bgRgb) {
            const textGray = 0.299 * textRgb[0] + 0.587 * textRgb[1] + 0.114 * textRgb[2];
            const bgGray = 0.299 * bgRgb[0] + 0.587 * bgRgb[1] + 0.114 * bgRgb[2];
            const contrastRatio = Math.abs(textGray - bgGray);
            
            if (contrastRatio < 50) { // Arbitrary threshold for demonstration
              const text = el.textContent.substring(0, 50).trim();
              issues.push({
                type: 'contrast',
                element: el.tagName,
                text: text,
                textColor: color,
                bgColor: bgColor,
                contrastRatio
              });
            }
          }
        }
      });
      
      return issues;
    });
    
    issues.push(...contrastIssues);
    
    // Check for small text
    const smallTextIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('p, span, a, button, li');
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const fontSize = parseFloat(style.fontSize);
        
        if (fontSize < 12) {
          const text = el.textContent.substring(0, 50).trim();
          issues.push({
            type: 'small-text',
            element: el.tagName,
            text: text,
            fontSize: fontSize
          });
        }
      });
      
      return issues;
    });
    
    issues.push(...smallTextIssues);
    
    // Check for missing alt text
    const missingAltIssues = await page.evaluate(() => {
      const issues = [];
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          issues.push({
            type: 'missing-alt',
            element: 'img',
            src: img.src
          });
        }
      });
      
      return issues;
    });
    
    issues.push(...missingAltIssues);
    
    // Check for interactive elements with small touch targets
    const touchTargetIssues = await page.evaluate(() => {
      const issues = [];
      const elements = document.querySelectorAll('button, a, [role="button"], input[type="checkbox"], input[type="radio"]');
      
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        
        if (rect.width < 44 || rect.height < 44) {
          issues.push({
            type: 'small-touch-target',
            element: el.tagName,
            text: el.textContent.substring(0, 50).trim(),
            width: rect.width,
            height: rect.height
          });
        }
      });
      
      return issues;
    });
    
    issues.push(...touchTargetIssues);
    
    // Save the report
    const report = {
      url,
      timestamp: new Date().toISOString(),
      totalIssues: issues.length,
      issues
    };
    
    fs.writeFileSync(
      path.join(reportsDir, `${prefix}-ux-report.json`), 
      JSON.stringify(report, null, 2)
    );
    
    // Generate HTML report
    const htmlReport = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>UX Analysis Report - ${prefix}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; color: #333; }
        h1 { color: #2c3e50; }
        .issue { border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 5px; }
        .contrast { background-color: #fff3cd; }
        .small-text { background-color: #d1ecf1; }
        .missing-alt { background-color: #f8d7da; }
        .small-touch-target { background-color: #e2e3e5; }
        .summary { background-color: #eef2f7; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <h1>UX Analysis Report</h1>
      <div class="summary">
        <p><strong>URL:</strong> ${url}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Total Issues Found:</strong> ${issues.length}</p>
        <p><strong>Issues by Type:</strong></p>
        <ul>
          <li>Contrast Issues: ${issues.filter(i => i.type === 'contrast').length}</li>
          <li>Small Text: ${issues.filter(i => i.type === 'small-text').length}</li>
          <li>Missing Alt Text: ${issues.filter(i => i.type === 'missing-alt').length}</li>
          <li>Small Touch Targets: ${issues.filter(i => i.type === 'small-touch-target').length}</li>
        </ul>
      </div>
      
      <h2>Detailed Issues</h2>
      ${issues.map(issue => {
        let details = '';
        
        if (issue.type === 'contrast') {
          details = `
            <p><strong>Element:</strong> ${issue.element}</p>
            <p><strong>Text:</strong> "${issue.text}"</p>
            <p><strong>Text Color:</strong> ${issue.textColor}</p>
            <p><strong>Background Color:</strong> ${issue.bgColor}</p>
            <p><strong>Contrast Ratio:</strong> ${issue.contrastRatio.toFixed(2)}</p>
          `;
        } else if (issue.type === 'small-text') {
          details = `
            <p><strong>Element:</strong> ${issue.element}</p>
            <p><strong>Text:</strong> "${issue.text}"</p>
            <p><strong>Font Size:</strong> ${issue.fontSize}px</p>
          `;
        } else if (issue.type === 'missing-alt') {
          details = `
            <p><strong>Image Source:</strong> ${issue.src}</p>
          `;
        } else if (issue.type === 'small-touch-target') {
          details = `
            <p><strong>Element:</strong> ${issue.element}</p>
            <p><strong>Text:</strong> "${issue.text}"</p>
            <p><strong>Width:</strong> ${issue.width.toFixed(2)}px</p>
            <p><strong>Height:</strong> ${issue.height.toFixed(2)}px</p>
          `;
        }
        
        return `
          <div class="issue ${issue.type}">
            <h3>${issue.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Issue</h3>
            ${details}
          </div>
        `;
      }).join('')}
    </body>
    </html>
    `;
    
    fs.writeFileSync(
      path.join(reportsDir, `${prefix}-ux-report.html`), 
      htmlReport
    );
    
    return issues;
  }
    // Analyze English version
  await analyzeUx('http://localhost:5181/elmentor-landing-page/', 'en');
  
  // Analyze Arabic version
  await analyzeUx('http://localhost:5181/elmentor-landing-page/arabic.html', 'ar');
  
  await browser.close();
  console.log(`All UX reports saved to ${reportsDir}`);
})();
