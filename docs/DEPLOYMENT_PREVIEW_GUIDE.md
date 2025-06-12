# El Mentor Landing Page - Deployment Preview Guide

## Date: May 30, 2025

This document provides instructions for deploying a preview version of the El Mentor landing page and sharing it with stakeholders for review before final deployment.

## Option 1: GitHub Pages Deployment

The easiest way to create a sharable preview link is to deploy to GitHub Pages.

### Step 1: Push to GitHub

```powershell
# Navigate to project directory
cd d:\Github_personal\elmentor-landing-page

# Commit the latest changes
git add .
git commit -m "QA fixes: Fixed image paths and UI improvements"

# Push to GitHub
git push origin main
```

### Step 2: Deploy to GitHub Pages

```powershell
# Run the deployment script
npm run deploy
```

### Step 3: Share the Preview Link

The site will be available at:
```
https://[your-github-username].github.io/elmentor-landing-page/
```

This link can be shared with stakeholders for review.

## Option 2: Netlify Deploy Preview

Another option is to use Netlify for a quick preview deployment.

### Step 1: Install Netlify CLI

```powershell
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```powershell
netlify login
```

### Step 3: Deploy Preview

```powershell
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --dir=dist
```

### Step 4: Deploy to Production (after approval)

```powershell
netlify deploy --dir=dist --prod
```

## Option 3: Local Preview Server

For quick local testing that can be shared on a local network:

### Step 1: Build the Project

```powershell
npm run build
```

### Step 2: Start Preview Server

```powershell
npm run preview -- --host
```

### Step 3: Share Local Network Link

Share the provided network URL with users on the same network:
```
http://192.168.x.x:4173/elmentor-landing-page/
```

## Pre-Deployment Checklist

Before sharing the preview link, verify:

1. ✅ All images load correctly
2. ✅ Language switching works between English and Arabic
3. ✅ The site is fully responsive on different devices
4. ✅ All interactive elements work as expected
5. ✅ No console errors or broken links

## Collecting Feedback

Create a feedback collection form (e.g., Google Form) with the following sections:

1. **Visual Design**: Rating and comments
2. **Content Clarity**: Rating and comments
3. **Navigation Experience**: Rating and comments
4. **Mobile Experience**: Rating and comments
5. **Browser Compatibility**: Any issues noted
6. **Suggested Improvements**: Open feedback

## Timeline

1. Deploy preview: May 30, 2025
2. Collect feedback: May 30-31, 2025
3. Implement changes: June 1, 2025
4. Final deployment: June 2, 2025

## Preview Link:

```
https://your-github-username.github.io/elmentor-landing-page/
```

*Replace "your-github-username" with your actual GitHub username*

---

*Prepared by GitHub Copilot*
