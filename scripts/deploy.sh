#!/bin/bash

# El Mentor Landing Page Deployment Script
# Created: May 30, 2025

# Stop execution if any command fails
set -e

echo "===== El Mentor Landing Page Deployment ====="
echo "Starting deployment process..."

# Make sure we're on the main branch
echo "Checking out main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Run build
echo "Building project..."
npm run build

# Copy files for Arabic version
echo "Preparing Arabic version..."
cp -f arabic.html dist/arabic.html

# Verify build files
echo "Verifying build files..."
if [ ! -f "dist/index.html" ]; then
    echo "ERROR: dist/index.html not found!"
    exit 1
fi

if [ ! -f "dist/arabic.html" ]; then
    echo "ERROR: dist/arabic.html not found!"
    exit 1
fi

echo "Build verification completed successfully."

# Deploy to GitHub Pages or your hosting provider
# Uncomment and modify as needed:
# echo "Deploying to GitHub Pages..."
# gh pages deploy dist/

echo "===== Deployment completed successfully! ====="
echo "Next steps:"
echo "1. Test the deployed site"
echo "2. Verify all links work correctly"
echo "3. Check mobile responsiveness"
echo "4. Ensure language switching works"

exit 0
