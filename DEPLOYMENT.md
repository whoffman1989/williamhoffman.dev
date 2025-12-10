# Deploying to Vercel - Step-by-Step Guide

This guide will walk you through deploying your personal website to Vercel.

## Prerequisites

- A Vercel account (free tier works great)
- Git installed on your computer
- Your code in a Git repository (GitHub, GitLab, or Bitbucket)

---

## Step 1: Create a Git Repository

If you haven't already initialized Git for this project:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Personal website"
```

---

## Step 2: Push to GitHub

### Option A: Using GitHub CLI (Recommended)

```bash
# Install GitHub CLI if you don't have it
# macOS: brew install gh
# Then authenticate
gh auth login

# Create a new repository and push
gh repo create whoffmandev --public --source=. --push
```

### Option B: Using GitHub Web Interface

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `whoffmandev`
3. Don't initialize with README (you already have files)
4. Copy the commands shown and run them:

```bash
git remote add origin https://github.com/YOUR_USERNAME/whoffmandev.git
git branch -M main
git push -u origin main
```

---

## Step 3: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or Log In if you have an account)
3. Choose **Continue with GitHub** (recommended for easiest setup)
4. Authorize Vercel to access your GitHub account

---

## Step 4: Import Your Project

### Method 1: From Vercel Dashboard

1. Click **Add New...** → **Project**
2. Find your `whoffmandev` repository in the list
3. Click **Import**

### Method 2: Direct Link

Visit: `https://vercel.com/new` and select your repository

---

## Step 5: Configure Project Settings

Vercel should auto-detect Next.js. Verify these settings:

**Framework Preset:** Next.js
**Root Directory:** ./
**Build Command:** `npm run build` (auto-detected)
**Output Directory:** .next (auto-detected)
**Install Command:** `npm install` (auto-detected)

**Environment Variables:** None needed for this project

Click **Deploy**

---

## Step 6: Wait for Deployment

- First deployment takes 1-2 minutes
- You'll see a live build log
- Once complete, you'll get a URL like: `whoffmandev.vercel.app`

---

## Step 7: Set Up Custom Domain (williamhoffman.dev)

### Add Domain to Vercel

1. Go to your project dashboard on Vercel
2. Click **Settings** → **Domains**
3. Enter `williamhoffman.dev` and click **Add**
4. Vercel will show you DNS records to add

### Configure DNS

You need to add these records to your domain provider (where you bought williamhoffman.dev):

**For Root Domain (williamhoffman.dev):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (www.williamhoffman.dev):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**DNS Provider Instructions:**

<details>
<summary><b>Namecheap</b></summary>

1. Go to Domain List → Manage → Advanced DNS
2. Add A Record: Host `@`, Value `76.76.21.21`
3. Add CNAME Record: Host `www`, Value `cname.vercel-dns.com`
4. Save changes
</details>

<details>
<summary><b>GoDaddy</b></summary>

1. Go to DNS Management
2. Add A Record: Name `@`, Value `76.76.21.21`
3. Add CNAME Record: Name `www`, Value `cname.vercel-dns.com`
4. Save
</details>

<details>
<summary><b>Cloudflare</b></summary>

1. Go to DNS settings
2. Add A Record: Name `@`, IPv4 `76.76.21.21`, Proxy status: DNS only
3. Add CNAME Record: Name `www`, Target `cname.vercel-dns.com`, Proxy status: DNS only
4. Save
</details>

### Verify Domain

- DNS propagation can take 5 minutes to 48 hours (usually < 1 hour)
- Vercel will automatically issue an SSL certificate
- Once verified, your site will be live at `https://williamhoffman.dev`

---

## Step 8: Enable Auto-Deployment

Already configured! Now whenever you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically:
- Detect the push
- Build your site
- Deploy to production
- Update your live site in ~1 minute

---

## Useful Vercel Commands

### Deploy from CLI (Optional)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### Preview Deployments

Every branch and pull request gets its own preview URL automatically!

---

## Troubleshooting

### Build Fails

Check the build logs on Vercel dashboard. Common issues:
- Missing dependencies: Make sure `package.json` is committed
- TypeScript errors: Run `npm run build` locally first

### Domain Not Working

- Wait 15-30 minutes for DNS propagation
- Verify DNS records are correct using: `dig williamhoffman.dev`
- Check Vercel domain settings show "Valid Configuration"

### Site Not Updating

- Check GitHub - make sure your commits are pushed
- Vercel shows all deployments - check if new build triggered
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

---

## Production Checklist

Before going live, verify:

- [ ] Custom domain is configured and working
- [ ] SSL certificate is active (https:// works)
- [ ] All content is updated (no placeholder text)
- [ ] Test on mobile device
- [ ] Check all links work
- [ ] Verify social links go to correct profiles
- [ ] Update email link if needed
- [ ] Test contact form/email link

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Custom Domains on Vercel](https://vercel.com/docs/concepts/projects/custom-domains)

---

## Quick Reference

**Live Site:** `https://williamhoffman.dev`
**Vercel Dashboard:** `https://vercel.com/dashboard`
**GitHub Repo:** `https://github.com/YOUR_USERNAME/whoffmandev`

**Deploy Command:**
```bash
git add .
git commit -m "Your message"
git push
```

That's it! Your site will be live and automatically deployed on every push to GitHub.
