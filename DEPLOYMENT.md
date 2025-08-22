# GitHub Pages Deployment with Custom Domain

This guide will help you deploy your React + Vite application to GitHub Pages with a custom domain.

## Prerequisites

1. A GitHub repository with your project
2. A custom domain name
3. Access to your domain's DNS settings

## Step 1: Repository Setup

1. Push your code to GitHub if you haven't already:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we created in `.github/workflows/deploy.yml`

## Step 3: Configure Custom Domain

1. In the same "Pages" settings section:
   - Enter your custom domain in the "Custom domain" field
   - Check "Enforce HTTPS" (recommended)
   - Click "Save"

2. Update the following files with your actual domain:
   - `.github/workflows/deploy.yml` - Replace `your-domain.com` with your actual domain
   - `public/CNAME` - Replace `your-domain.com` with your actual domain

## Step 4: DNS Configuration

Configure your domain's DNS settings with your DNS provider:

### Option A: Using A Records (Recommended)
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Option B: Using CNAME Record
```
Type: CNAME
Name: @
Value: yourusername.github.io
TTL: 3600
```

## Step 5: Deploy

1. **Automatic Deployment**: Every push to the `main` branch will automatically trigger deployment via GitHub Actions.

2. **Manual Deployment**: If you prefer manual deployment:
   ```bash
   npm run deploy
   ```

## Step 6: Verify Deployment

1. Wait a few minutes for DNS propagation
2. Visit your custom domain
3. Check that all routes work correctly (since this is a SPA)

## Troubleshooting

### Common Issues

1. **404 Errors on Routes**: The 404.html and routing scripts should handle this. Make sure they're in place.

2. **DNS Not Working**: DNS changes can take up to 48 hours to propagate globally.

3. **HTTPS Issues**: GitHub Pages automatically provides SSL certificates for custom domains.

4. **Build Failures**: Check the GitHub Actions tab for build logs.

### Testing Locally

Test your build locally before deploying:
```bash
npm run build
npm run preview
```

## File Structure

The following files were added/modified for deployment:

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration
- `public/404.html` - SPA routing support
- `index.html` - Added routing script
- `vite.config.ts` - Build configuration
- `package.json` - Deployment scripts

## Security Notes

- Never commit sensitive information like API keys
- Use environment variables for configuration
- The `GITHUB_TOKEN` is automatically provided by GitHub Actions

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify DNS configuration
3. Ensure all deployment files are in place
4. Check GitHub Pages settings in your repository
