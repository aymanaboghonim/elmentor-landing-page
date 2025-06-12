# Deployment Testing Script for GitHub Pages
# This script helps verify GitHub Pages deployment issues and asset loading

param (
    [switch]$VerifyAssets,
    [switch]$BuildTest,
    [switch]$ClearCache
)

$ErrorActionPreference = "Stop"
$repoName = "elmentor-landing-page"
$basePath = "/elmentor-landing-page/"
$deploymentUrl = "https://aymanaboghonim.github.io$basePath"

Write-Host "===== GitHub Pages Deployment Test =====" -ForegroundColor Cyan

# Clear build cache if requested
if ($ClearCache) {
    Write-Host "Clearing build cache..." -ForegroundColor Yellow
    if (Test-Path "dist") {
        Remove-Item -Recurse -Force "dist"
    }
    if (Test-Path "node_modules/.vite") {
        Remove-Item -Recurse -Force "node_modules/.vite"
    }
    Write-Host "Build cache cleared." -ForegroundColor Green
}

# Run a test build if requested
if ($BuildTest) {
    Write-Host "Testing build process..." -ForegroundColor Yellow
    npm run build
    
    Write-Host "Verifying built files..." -ForegroundColor Yellow
    if (-not (Test-Path "dist/index.html")) {
        Write-Host "ERROR: dist/index.html not found!" -ForegroundColor Red
        exit 1
    }
    
    Write-Host "Checking for critical assets..." -ForegroundColor Yellow
    $cssFiles = Get-ChildItem -Path "dist/assets" -Filter "*.css" -Recurse
    $jsFiles = Get-ChildItem -Path "dist/assets" -Filter "*.js" -Recurse
    
    Write-Host "Found $($cssFiles.Count) CSS files and $($jsFiles.Count) JavaScript files." -ForegroundColor Green
}

# Verify assets on live site if requested
if ($VerifyAssets) {
    Write-Host "Verifying assets on live deployment: $deploymentUrl" -ForegroundColor Yellow
    
    # Check main HTML
    try {
        $indexRequest = Invoke-WebRequest -Uri $deploymentUrl -UseBasicParsing
        Write-Host "✅ Main HTML page loaded successfully (Status: $($indexRequest.StatusCode))" -ForegroundColor Green
        
        # Extract and check asset URLs
        $htmlContent = $indexRequest.Content
        
        # Check for common asset patterns
        $cssPattern = "href=['\"]($basePath)assets/[^'\"]+\.css['\"]"
        $jsPattern = "src=['\"]($basePath)assets/[^'\"]+\.js['\"]"
        
        $cssMatches = [regex]::Matches($htmlContent, $cssPattern)
        $jsMatches = [regex]::Matches($htmlContent, $jsPattern)
        
        Write-Host "Found $($cssMatches.Count) CSS and $($jsMatches.Count) JS references in HTML." -ForegroundColor Yellow
        
        # Check a sample of assets
        if ($cssMatches.Count -gt 0) {
            $sampleCss = $cssMatches[0].Groups[1].Value + $cssMatches[0].Value.Substring(6).TrimEnd('"').TrimEnd("'")
            $cssUrl = "https://aymanaboghonim.github.io$sampleCss"
            try {
                $cssRequest = Invoke-WebRequest -Uri $cssUrl -UseBasicParsing
                Write-Host "✅ Sample CSS loads successfully: $cssUrl" -ForegroundColor Green
            } catch {
                Write-Host "❌ Failed to load CSS: $cssUrl - $($_.Exception.Message)" -ForegroundColor Red
            }
        }
        
        if ($jsMatches.Count -gt 0) {
            $sampleJs = $jsMatches[0].Groups[1].Value + $jsMatches[0].Value.Substring(5).TrimEnd('"').TrimEnd("'")
            $jsUrl = "https://aymanaboghonim.github.io$sampleJs"
            try {
                $jsRequest = Invoke-WebRequest -Uri $jsUrl -UseBasicParsing
                Write-Host "✅ Sample JS loads successfully: $jsUrl" -ForegroundColor Green
            } catch {
                Write-Host "❌ Failed to load JS: $jsUrl - $($_.Exception.Message)" -ForegroundColor Red
            }
        }
        
    } catch {
        Write-Host "❌ Failed to load main page: $($_.Exception.Message)" -ForegroundColor Red
    }
}

# If no params specified, show help
if (-not ($VerifyAssets -or $BuildTest -or $ClearCache)) {
    Write-Host @"
    Usage:
        ./test-deployment.ps1 -BuildTest           # Test the build process locally
        ./test-deployment.ps1 -VerifyAssets        # Check assets on live deployment
        ./test-deployment.ps1 -ClearCache          # Clear build cache before testing
        ./test-deployment.ps1 -BuildTest -ClearCache  # Clear cache and test build
"@ -ForegroundColor Yellow
}

Write-Host "===== Deployment Test Complete =====" -ForegroundColor Cyan
