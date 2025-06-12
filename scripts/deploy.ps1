# El Mentor Landing Page Deployment Script
# Created: May 30, 2025

# Stop execution if any command fails
$ErrorActionPreference = "Stop"

Write-Host "===== El Mentor Landing Page Deployment =====" -ForegroundColor Cyan
Write-Host "Starting deployment process..." -ForegroundColor Cyan

# Make sure we're on the main branch
Write-Host "Checking out main branch..." -ForegroundColor Green
git checkout main

# Pull latest changes
Write-Host "Pulling latest changes..." -ForegroundColor Green
git pull origin main

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

# Run build
Write-Host "Building project..." -ForegroundColor Green
npm run build

# Copy files for Arabic version
Write-Host "Preparing Arabic version..." -ForegroundColor Green
Copy-Item -Path "arabic.html" -Destination "dist/arabic.html" -Force

# Verify build files
Write-Host "Verifying build files..." -ForegroundColor Green
if (-not (Test-Path "dist/index.html")) {
    Write-Host "ERROR: dist/index.html not found!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/arabic.html")) {
    Write-Host "ERROR: dist/arabic.html not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Build verification completed successfully." -ForegroundColor Green

# Deploy to GitHub Pages or your hosting provider
# Uncomment and modify as needed:
# Write-Host "Deploying to GitHub Pages..." -ForegroundColor Green
# gh pages deploy dist/

Write-Host "===== Deployment completed successfully! =====" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Test the deployed site" -ForegroundColor Yellow
Write-Host "2. Verify all links work correctly" -ForegroundColor Yellow
Write-Host "3. Check mobile responsiveness" -ForegroundColor Yellow
Write-Host "4. Ensure language switching works" -ForegroundColor Yellow

exit 0
