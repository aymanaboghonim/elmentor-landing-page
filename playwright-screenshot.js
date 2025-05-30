// playwright-screenshot.js
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {  // Create screenshots directory if it doesn't exist
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 1.5, // Higher resolution for better quality screenshots
    colorScheme: 'light' // Ensure light mode for consistent results
  });
  
  const page = await context.newPage();
  
  // Function to take screenshots of different pages and sections
  async function captureScreenshots(url, prefix) {
    console.log(`Navigating to ${url}...`);
    
    // Navigate to the URL
    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    // Wait for fonts and images to load
    await page.waitForTimeout(2000);
    
    // Desktop full page
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.screenshot({ 
      path: path.join(screenshotsDir, `${prefix}-desktop-full.png`), 
      fullPage: true 
    });
    
    // Desktop above the fold
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.screenshot({ 
      path: path.join(screenshotsDir, `${prefix}-desktop-above-fold.png`)
    });
    
    // Tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({ 
      path: path.join(screenshotsDir, `${prefix}-tablet.png`), 
      fullPage: true 
    });
    
    // Mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: path.join(screenshotsDir, `${prefix}-mobile-full.png`), 
      fullPage: true 
    });
    
    // Capture each section individually
    const sections = ['hero', 'about', 'circles', 'activities', 'founder', 'benefits', 'news', 'contact'];
    
    // Reset to desktop size for section screenshots
    await page.setViewportSize({ width: 1280, height: 800 });
    
    for (const section of sections) {
      try {
        // Scroll to the section
        await page.evaluate((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView();
            return true;
          }
          return false;
        }, section);
        
        // Wait for animations and images to load
        await page.waitForTimeout(1000);
        
        // Take screenshot of the section
        const sectionElement = await page.$(`#${section}`);
        if (sectionElement) {
          await sectionElement.screenshot({
            path: path.join(screenshotsDir, `${prefix}-section-${section}.png`)
          });
        }
      } catch (e) {
        console.log(`Could not capture section #${section}: ${e.message}`);
      }
    }
  }  // Capture English version
  await captureScreenshots('http://localhost:4173/elmentor-landing-page/', 'en');
  
  // Capture Arabic version
  await captureScreenshots('http://localhost:4173/elmentor-landing-page/arabic.html', 'ar');
  
  await browser.close();
  console.log(`All screenshots saved to ${screenshotsDir}`);
})();
