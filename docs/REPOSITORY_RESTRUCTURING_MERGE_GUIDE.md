# Repository Restructuring Merge Guide

This guide provides step-by-step instructions for safely merging the repository restructuring changes from the `repo-restructure` branch to `master`.

## 🔍 Pre-Merge Verification

Before merging, perform the following checks:

1. **Build Verification**
```powershell
# Switch to repo-restructure branch
git checkout repo-restructure

# Clean build and verify
npm run build:clean

# Check if build was successful
ls dist/index.html
ls dist/assets/*.js
ls dist/assets/*.css
```

2. **Deployment Dry-Run Verification**
```powershell
# Test deployment process
npm run deploy -- --dry-run
```

3. **Script Path Verification**
```powershell
# Test various scripts to ensure they work with new paths
npm run lint
npm run test:quick
```

## 🔄 Merge Process

### Option 1: GitHub Pull Request (Recommended)
1. Push your branch to GitHub:
```powershell
git push origin repo-restructure
```

2. Create a pull request on GitHub:
   - Navigate to: `https://github.com/[your-username]/elmentor-landing-page/pulls`
   - Click "New pull request"
   - Base: `master` ← Compare: `repo-restructure`
   - Use the PR template: "Repository Restructuring"
   - Request reviews from team members

3. After approval, merge using GitHub's UI:
   - Consider "Squash and merge" to keep history clean
   - Add a detailed commit message about the restructuring

### Option 2: Local Merge
If you prefer to merge locally:

```powershell
# Ensure master is up to date
git checkout master
git pull origin master

# Merge the restructuring branch
git merge --no-ff repo-restructure -m "Restructure repository for better organization and maintainability"

# Push the merged changes
git push origin master
```

## 🚀 Post-Merge Verification

After merging to master, verify that the live site deploys correctly:

1. **Trigger a deployment to the gh-pages branch**:
```powershell
npm run deploy
```

2. **Verify the live site**:
   - Wait 5-10 minutes for GitHub Pages to update
   - Visit: `https://[your-username].github.io/elmentor-landing-page/`
   - Check asset loading in browser developer tools
   - Verify site functionality
   - Confirm the site is being served from the gh-pages branch

3. **Run deployment verification**:
```powershell
npm run deploy:verify
```

## 🔄 Rollback Plan (If Needed)

If issues occur post-merge:

```powershell
# Revert the merge commit
git revert -m 1 [merge-commit-hash]

# OR restore from backup
git checkout [commit-before-merge]
git checkout -b recovery-branch
git push -f origin recovery-branch:master
```

## 📋 Next Steps After Successful Merge

- [ ] Update project documentation with new file locations
- [ ] Share the new structure with all team members
- [ ] Consider implementing similar organization in related projects
