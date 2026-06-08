# WorldView Global Lite Hosting Guide

## Overview

WorldView Global Lite is a fully static website built with HTML, CSS, JavaScript, and image assets.

No build tools, frameworks, databases, or server-side software are required.

Simply upload the files to a hosting provider and connect the contact form before going live.

---

# Project Requirements

Before publishing:

✓ Full project folder uploaded

✓ Contact form configured

✓ Images loading correctly

✓ robots.txt updated

✓ sitemap.xml updated

✓ Custom domain connected (optional)

---

# Recommended Hosting Providers

WorldView Global Lite works with:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Shared Hosting
* cPanel Hosting
* VPS Hosting

For most buyers:

### Easiest Option

```text
Netlify
```

### Best Performance

```text
Cloudflare Pages
```

### Best For Developers

```text
Vercel
```

### Traditional Hosting

```text
cPanel Hosting
```

---

# Netlify Deployment

Netlify is one of the easiest ways to host this website.

## Step 1

Create an account:

```text
https://netlify.com
```

## Step 2

Click:

```text
Add New Site
```

## Step 3

Choose one of:

```text
Drag and Drop
Import From Git
```

## Step 4

Upload the complete project folder.

## Step 5

Wait for deployment.

Netlify will provide a temporary URL.

Example:

```text
https://your-site.netlify.app
```

## Step 6

Test:

* Homepage
* Navigation
* Mobile menu
* Contact form
* Thank-you page
* 404 page

## Optional: Netlify Forms

If using Netlify Forms:

1. Enable `data-netlify="true"`
2. Deploy the site
3. Submit a test message
4. Verify submissions appear inside Netlify

---

# Vercel Deployment

## Step 1

Create an account:

```text
https://vercel.com
```

## Step 2

Create a new project.

## Step 3

Upload the repository or project files.

## Step 4

Use default settings.

No framework preset is required.

## Step 5

Deploy.

Vercel will generate a URL such as:

```text
https://project-name.vercel.app
```

## Step 6

Verify:

* Navigation links
* Contact form
* Thank-you page
* 404 page
* Mobile menu

---

# Cloudflare Pages Deployment

## Step 1

Create a Cloudflare account.

## Step 2

Open:

```text
Workers & Pages
```

## Step 3

Create a new Pages project.

## Step 4

Upload files or connect GitHub.

## Step 5

Deploy.

Cloudflare will generate a Pages URL.

## Step 6

Verify:

* Images load correctly
* Navigation works
* Contact form functions correctly

Cloudflare Pages is one of the fastest hosting options available.

---

# GitHub Pages Deployment

## Step 1

Create a GitHub repository.

## Step 2

Upload the project.

## Step 3

Open:

```text
Settings → Pages
```

## Step 4

Select:

```text
Deploy From Branch
```

## Step 5

Choose:

```text
main
/root
```

## Step 6

Save.

GitHub Pages will generate a public URL.

Example:

```text
https://username.github.io/project-name
```

## Important

GitHub Pages does NOT process forms.

Use:

* Formspree
* Getform
* Netlify Forms
* Custom backend

for contact form functionality.

---

# cPanel / Shared Hosting

Most traditional hosting companies provide cPanel.

Examples:

* Hostinger
* Namecheap
* Bluehost
* SiteGround
* A2 Hosting

## Step 1

Log in to cPanel.

## Step 2

Open:

```text
File Manager
```

## Step 3

Navigate to:

```text
public_html
```

## Step 4

Upload all project files.

Keep the folder structure exactly as provided.

## Step 5

Verify:

```text
index.html
assets/
css/
js/
```

are all present.

## Step 6

Visit your domain.

Example:

```text
https://yourdomain.com
```

and verify the site loads correctly.

---

# Connecting A Custom Domain

Most hosting providers allow custom domains.

Example:

```text
worldviewglobal.com
```

## Typical Process

1. Purchase a domain.
2. Open your hosting dashboard.
3. Connect the domain.
4. Update DNS records.
5. Wait for DNS propagation.

DNS updates may take:

```text
5 minutes to 48 hours
```

depending on the provider.

---

# Update SEO Files

Before publishing:

## robots.txt

Replace:

```text
https://example.com
```

with:

```text
https://yourdomain.com
```

## sitemap.xml

Replace:

```text
https://example.com
```

with:

```text
https://yourdomain.com
```

Example:

```xml
<loc>https://yourdomain.com/</loc>
```

This helps search engines properly index the website.

---

# Testing Checklist

After deployment verify:

✓ Homepage loads

✓ Navigation links work

✓ Mobile menu opens

✓ Mobile menu closes

✓ Contact form submits

✓ Thank-you page loads

✓ 404 page loads

✓ Images display correctly

✓ Earth background loads

✓ CSS loads

✓ JavaScript loads

✓ Social links work

✓ robots.txt updated

✓ sitemap.xml updated

✓ Domain connected

✓ SSL certificate active

---

# Troubleshooting

## Images Not Loading

Verify:

```text
assets/
```

was uploaded correctly.

## Styles Missing

Verify:

```text
css/styles.css
css/tablet.css
css/mobile.css
```

exist on the server.

## JavaScript Not Working

Verify:

```text
js/script.js
```

was uploaded.

## Contact Form Not Working

Review:

```text
docs/form-setup-guide.md
```

and verify your provider settings.

## 404 Page Not Showing

Some hosting providers require manual 404 page configuration.

Consult your hosting provider's documentation if needed.

---

# Final Launch Checklist

Before announcing your site:

✓ Replace logo

✓ Replace favicon

✓ Update company information

✓ Connect contact form

✓ Connect custom domain

✓ Update sitemap.xml

✓ Update robots.txt

✓ Test desktop layout

✓ Test tablet layout

✓ Test mobile layout

✓ Verify all links

✓ Verify SSL is active

✓ Verify forms are working

✓ Verify search engines can access the site

Your website is now ready for production deployment.

