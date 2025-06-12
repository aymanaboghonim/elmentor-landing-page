# Build Configuration Script for Elmentor Landing Page
# This script provides a simplified interface to configure build settings

param (
    [switch]$Production,
    [switch]$Development,
    [switch]$Debug
)

$configPath = "../vite.config.js"
Write-Host "Using configuration from $configPath"

if ($Production) {
    Write-Host "Building for production..."
    npm run build
}
elseif ($Development) {
    Write-Host "Starting development server..."
    npm run dev
}
elseif ($Debug) {
    Write-Host "Building with debug settings..."
    # Add custom debug build commands here
    npm run build -- --debug
}
else {
    Write-Host "Please specify a build mode: -Production, -Development, or -Debug"
}
