# GitHub Pages Deployment Instructions

## Overview
This document explains how to deploy updates to the Elmentor Landing Page on GitHub Pages.

## Deployment Process

### Method 1: Using the Enhanced Deployment Script (Recommended)
The enhanced deployment script automates the entire process:

1. **Run the deployment script**:
   ```powershell
   pwsh -File scripts/enhanced-deploy.ps1
   ```

2. **Verify the deployment** by visiting:
   - Main site (English): https://aymanaboghonim.github.io/elmentor-landing-page/
   - Arabic version: https://aymanaboghonim.github.io/elmentor-landing-page/arabic.html

### Method 2: Manual Deployment

1. **Build the project**:
   ```powershell
   npm run build
   ```

2. **Verify the build output** in the `dist` directory.

3. **Deploy to GitHub Pages** using the gh-pages package:
   ```powershell
   npm run deploy
   ```

4. **Verify the deployment** by checking that the `gh-pages` branch on GitHub has been updated and that the site is accessible.

## Important Notes

- The deployment uses the `gh-pages` branch which is separate from the main development branches.
- Always build and test locally before deploying.
- If you encounter issues, refer to `scripts/enhanced-deploy.ps1` which contains detailed deployment logic.
- Update this document if deployment procedures change.

Last updated: June 13, 2025
