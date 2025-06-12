# Repository Structure Guide

This document outlines the restructured organization of the Elmentor Landing Page repository.

## Directory Structure

```
elmentor-landing-page/
├── config/               # Configuration files
│   ├── eslint.config.js  # ESLint configuration
│   └── build-config.ps1  # Build configuration script
├── docs/                 # Documentation files
│   ├── DEPLOYMENT_PLAN.md
│   └── ... (other documentation)
├── scripts/              # Scripts for build, deployment, and utilities
│   ├── deploy.ps1        # PowerShell deployment script
│   ├── copy-arabic.ps1   # Script to copy Arabic HTML file
│   └── ... (other scripts)
├── public/               # Static assets to be copied to dist
├── src/                  # Source code
│   ├── assets/           # Images, fonts, and other assets
│   ├── components/       # Reusable components
│   ├── sections/         # Page sections
│   ├── styles/           # CSS files
│   └── utils/            # Utility functions
├── dist/                 # Build output (generated)
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## Key Files

### Configuration

- **vite.config.js** - Central build configuration for the project
- **config/eslint.config.js** - ESLint linting rules
- **config/build-config.ps1** - Build configuration script

### Scripts

- **scripts/deploy.ps1** - PowerShell deployment script
- **scripts/deploy.sh** - Shell deployment script
- **scripts/copy-arabic.ps1** - Script to copy Arabic HTML file
- **scripts/copy-arabic.sh** - Shell script to copy Arabic HTML file
- **scripts/playwright-screenshot.js** - Screenshot testing script
- **scripts/ux-analysis.js** - UX analysis tools
- **scripts/enhanced-elmentor-automation.ps1** - Enhanced automation script

### Documentation

Various documentation files moved to the docs/ directory:
- Deployment guides
- Testing documentation
- Architecture documentation
- QA reports
- Future plans

## Updated NPM Scripts

The package.json has been updated to reference scripts in their new locations:
- `npm run build` - Runs build with relocated scripts
- `npm run lint` - Uses the config from the new location
- `npm run screenshots` - Uses script from scripts/ directory
- `npm run test:quick` - Uses enhanced automation script from new location

## Note on GitHub Pages Deployment

The GitHub Pages deployment continues to work with this new structure because:
1. The vite.config.js file remains in the root
2. The scripts referenced in package.json have been updated to point to their new locations
3. All paths in deployment scripts have been properly maintained
