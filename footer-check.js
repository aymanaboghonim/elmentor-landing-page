const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://aymanaboghonim.github.io/elmentor-landing-page/');
  await page.waitForSelector('.elmentor-footer');
  
  // Scroll to footer
  await page.evaluate(() => {
    document.querySelector('.elmentor-footer').scrollIntoView();
  });
  
  // Take a screenshot of the footer
  await page.screenshot({ path: 'footer-screenshot.png', clip: {
    x: 0,
    y: page.viewportSize().height - 500,
    width: page.viewportSize().width,
    height: 500
  }});
  
  await browser.close();
  console.log('Screenshot taken: footer-screenshot.png');
})();
