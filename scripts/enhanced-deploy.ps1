# Enhanced GitHub Pages Deployment Script
# This script provides better visibility into the GitHub Pages deployment process

param (
    [switch]$Verbose
)

$ErrorActionPreference = "Stop"

function Write-Status {
    param (
        [string]$Message,
        [string]$Status = "INFO"
    )

    switch ($Status) {
        "INFO" { $color = "Cyan" }
        "SUCCESS" { $color = "Green" }
        "ERROR" { $color = "Red" }
        "WARNING" { $color = "Yellow" }
        default { $color = "White" }
    }

    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$timestamp] [$Status] $Message" -ForegroundColor $color
}

function Test-GitHubAuth {
    try {
        Write-Status "Checking GitHub authentication status"
        $authStatus = gh auth status
        if ($authStatus -match "Logged in to") {
            Write-Status "GitHub authentication confirmed" "SUCCESS"
            return $true
        } else {
            Write-Status "Not authenticated with GitHub" "ERROR"
            return $false
        }
    } catch {
        Write-Status "Error checking GitHub authentication: $_" "ERROR"
        return $false
    }
}

function Build-Project {
    Write-Status "Building the project"
    npm run build
    
    if (-not (Test-Path "dist/index.html")) {
        Write-Status "Build failed - index.html not found in dist directory" "ERROR"
        return $false
    }
    
    Write-Status "Build completed successfully" "SUCCESS"
    return $true
}

function Deploy-ToGitHubPages {
    Write-Status "Deploying to GitHub Pages"
    
    # Capture current branch
    $currentBranch = git rev-parse --abbrev-ref HEAD
    Write-Status "Current branch: $currentBranch"
    
    # Create a temporary clean gh-pages branch
    Write-Status "Checking out gh-pages branch"
    
    # If the local gh-pages branch already exists, delete it
    $ghPagesExists = git show-ref --verify --quiet refs/heads/gh-pages
    if ($LASTEXITCODE -eq 0) {
        Write-Status "Removing old local gh-pages branch" "WARNING"
        git branch -D gh-pages
    }
    
    # Create a clean gh-pages branch
    git checkout --orphan gh-pages
    git reset --hard
    
    # Copy all content from dist to root of gh-pages branch
    Write-Status "Copying dist content to gh-pages branch"
    Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
    
    # Add all files and commit
    git add .
    git commit -m "Deploy to GitHub Pages: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    
    # Push to gh-pages branch with force
    Write-Status "Pushing to remote gh-pages branch"
    git push origin gh-pages --force
    
    if ($LASTEXITCODE -ne 0) {
        Write-Status "Failed to push to gh-pages branch" "ERROR"
        return $false
    }
    
    # Switch back to original branch
    git checkout $currentBranch
    
    Write-Status "Deployment completed successfully" "SUCCESS"
    return $true
}

function Verify-Deployment {
    Write-Status "Waiting for GitHub Pages to update (this may take a few minutes)"
    Start-Sleep -Seconds 10
    
    Write-Status "Deployment verification completed" "SUCCESS"
    Write-Status "Visit https://aymanaboghonim.github.io/elmentor-landing-page/ to verify the site"
}

# Main execution flow
if (-not (Test-GitHubAuth)) {
    Write-Status "GitHub authentication failed. Please run 'gh auth login' first" "ERROR"
    exit 1
}

if (-not (Build-Project)) {
    Write-Status "Build failed. Aborting deployment" "ERROR"
    exit 1
}

if (-not (Deploy-ToGitHubPages)) {
    Write-Status "Deployment failed" "ERROR"
    exit 1
}

Verify-Deployment
