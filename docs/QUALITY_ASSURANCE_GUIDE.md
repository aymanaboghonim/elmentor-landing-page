# El Mentor Landing Page - Quality Assurance Guide

This document outlines the quality assurance process for the El Mentor landing page, including screenshot testing and UX analysis.

## Tools Overview

We've set up two primary QA tools:

1. **Playwright Screenshot Tool**: Takes comprehensive screenshots of the website at different viewport sizes and captures individual sections for detailed review.

2. **UX Analysis Tool**: Automatically detects potential UX/UI issues like contrast problems, small text, missing alt attributes, and small touch targets.

## Requirements

- Node.js (v16 or higher)
- NPM (included with Node.js)
- A running local development server

## Running the Tools

### Step 1: Start the development server

```powershell
cd d:\Github_personal\elmentor-landing-page
npm run dev
```

Note the local server URL (e.g., `http://localhost:5179/elmentor-landing-page/`).

### Step 2: Update the script URLs (if needed)

If your development server is running on a different port than 5179, update the URLs in both `playwright-screenshot.js` and `ux-analysis.js` to match your local server.

### Step 3: Run the QA tests

To run all QA tests at once:

```powershell
npm run qa-test
```

Or run individual tests:

```powershell
# For screenshots only
npm run screenshots

# For UX analysis only
npm run ux-analysis
```

## Output

### Screenshots

Screenshots will be saved in the `screenshots` directory with the following naming convention:

- `en-desktop-full.png` - Full page screenshot of English version on desktop
- `en-desktop-above-fold.png` - Above the fold content on desktop
- `en-tablet.png` - Full page screenshot on tablet
- `en-mobile-full.png` - Full page screenshot on mobile
- `en-section-{sectionId}.png` - Individual section screenshots
- Similar files with `ar-` prefix for Arabic version

### UX Analysis Reports

Reports will be saved in the `ux-reports` directory:

- `en-ux-report.json` - Raw JSON report for English version
- `en-ux-report.html` - Human-readable HTML report for English version
- Similar files with `ar-` prefix for Arabic version

## Interpreting the Reports

### 1. Contrast Issues

Low contrast between text and background can make content difficult to read, especially for users with visual impairments. Consider adjusting colors if contrast ratio is low.

### 2. Small Text

Text smaller than 12px can be difficult to read on many devices. Consider increasing font size for better readability.

### 3. Missing Alt Text

Images without alt text are not accessible to screen reader users. Always provide descriptive alt text for images.

### 4. Small Touch Targets

Interactive elements smaller than 44x44px may be difficult to tap on mobile devices. Consider increasing the size of buttons and links.

## Next Steps After QA

1. Review all screenshots for visual inconsistencies, alignment issues, or content problems
2. Address the issues identified in the UX analysis reports
3. Rerun the tests to verify fixes
4. Proceed to deployment when all critical issues are resolved

---

*Created on May 30, 2025 for El Mentor Landing Page*
