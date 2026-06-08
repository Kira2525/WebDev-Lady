# Cosmic Orbit Pro Hosting Guide

## Overview

Cosmic Orbit Pro is a fully static HTML, CSS, and JavaScript website template.

No build process, package manager, database, or server-side software is required.

The template can be hosted on virtually any modern web hosting platform.

Recommended providers:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Shared Hosting (cPanel)
* VPS Hosting

---

# Before Deployment

Before publishing your website:

✓ Replace placeholder content

✓ Update branding

✓ Replace logo and favicon

✓ Configure contact and booking forms

✓ Update social links

✓ Update sitemap.xml

✓ Update robots.txt

✓ Update site.webmanifest

✓ Test desktop, tablet, and mobile layouts

---

# Netlify

Netlify is one of the easiest deployment options.

## Manual Deployment

1. Create a Netlify account.
2. Click **Add New Site**.
3. Select **Deploy Manually**.
4. Drag the entire project folder into Netlify.
5. Wait for deployment to finish.

## Git Deployment

1. Upload the template to GitHub.
2. Connect GitHub to Netlify.
3. Select your repository.
4. Leave build settings empty.
5. Deploy.

## Forms

Netlify supports built-in form handling.

Review:

```text
docs/form-setup-guide.md
```

for setup instructions.

## Custom Domains

1. Open Site Settings.
2. Select Domain Management.
3. Add your domain.
4. Follow the DNS instructions.

Netlify automatically provides SSL certificates.

---

# Vercel

Vercel works well for static websites.

## Deployment

1. Create a Vercel account.
2. Import your Git repository.
3. Leave framework settings disabled if prompted.
4. Deploy.

## Notes

* SSL included
* Global CDN included
* Custom domains supported

For form handling use:

* Formspree
* Getform
* EmailJS
* Custom APIs

---

# Cloudflare Pages

Cloudflare Pages offers excellent performance and security.

## Deployment

1. Create a Cloudflare account.
2. Open Pages.
3. Create a new project.
4. Connect GitHub or upload files.
5. Deploy.

## Benefits

* Global CDN
* Free SSL
* DDoS protection
* Fast worldwide delivery

---

# GitHub Pages

GitHub Pages is ideal for portfolios and simple business websites.

## Deployment

1. Create a GitHub repository.
2. Upload the template files.
3. Open Repository Settings.
4. Select Pages.
5. Choose the deployment branch.
6. Save changes.

GitHub will generate a public URL.

## Important

GitHub Pages does not process forms.

Use:

* Formspree
* Getform
* EmailJS
* Custom backend

for form submissions.

---

# Shared Hosting (cPanel)

Most traditional hosts support Cosmic Orbit Pro.

Examples:

* Hostinger
* Bluehost
* SiteGround
* Namecheap
* InMotion Hosting

## Deployment

1. Log into cPanel.
2. Open File Manager.
3. Navigate to:

```text
public_html
```

4. Upload the project files.
5. Extract the ZIP archive if necessary.
6. Confirm all folders remain intact.

---

# Folder Structure

Keep the folder structure unchanged.

Required folders:

```text
css/
js/
images/
```

Required files:

```text
index.html
robots.txt
sitemap.xml
site.webmanifest
```

Moving files without updating paths may break the site.

---

# Custom Domains

After deployment:

1. Purchase a domain.
2. Add the domain to your hosting provider.
3. Update DNS records.
4. Wait for propagation.

DNS changes can take up to 48 hours to fully propagate.

---

# SSL Certificates

SSL enables secure HTTPS connections.

Always verify:

```text
https://yourdomain.com
```

loads correctly.

Most modern hosts provide SSL automatically.

---

# SEO Setup

Before launch:

### Update Sitemap

Replace:

```text
https://example.com
```

with your live domain.

### Update Robots

Replace:

```text
Sitemap: https://example.com/sitemap.xml
```

with your actual sitemap URL.

### Update Metadata

Review:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph URLs

---

# Final Launch Checklist

Before publishing:

✓ Logo updated

✓ Favicon updated

✓ Contact information updated

✓ Social links updated

✓ Booking form tested

✓ Contact form tested

✓ Sitemap updated

✓ Robots.txt updated

✓ Manifest updated

✓ Desktop layout tested

✓ Tablet layout tested

✓ Mobile layout tested

✓ Domain connected

✓ SSL active

✓ All navigation links verified

✓ Thank-you page verified

✓ 404 page verified

---

# Troubleshooting

## Styles Are Missing

Verify:

```text
css/styles.css
css/tablet.css
css/mobile.css
```

were uploaded correctly.

---

## Images Are Missing

Verify:

```text
images/
```

was uploaded and image filenames match exactly.

---

## Forms Do Not Work

Check:

* Provider configuration
* Form action URL
* JavaScript console errors
* Success redirect settings

---

## Navigation Links Fail

Verify:

* Page filenames
* href values
* Folder structure

---

# Additional Documentation

Included guides:

```text
docs/setup-guide.md
docs/customization-guide.md
docs/form-setup-guide.md
docs/image-replacement-guide.md
```

Review those documents before launching your website.
