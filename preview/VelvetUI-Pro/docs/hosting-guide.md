# VelvetUI Pro Hosting Guide

VelvetUI Pro is a fully static HTML, CSS, and JavaScript website template.

No build tools, package managers, frameworks, or server-side processing are required.

The template can be deployed to virtually any hosting provider that supports static websites.

## Included Files

The root directory contains:

```txt
404.html
about.html
contact.html
faq.html
features.html
index.html
portfolio.html
pricing.html
robots.txt
script.js
services.html
site.webmanifest
sitemap.xml
thank-you.html
```

Before deployment, make sure all files remain in their original locations and the folder structure is preserved.

## Option 1: Netlify

Netlify is one of the easiest ways to host VelvetUI Pro.

### Deploy by Drag & Drop

1. Create a Netlify account.
2. Open the Sites dashboard.
3. Drag the entire VelvetUI Pro project folder into Netlify.
4. Wait for deployment to complete.

### Deploy from GitHub

1. Push the template to a GitHub repository.
2. Connect the repository to Netlify.
3. Use the repository root as the publish directory.
4. Deploy the site.

### After Deployment

Update:

* Canonical URLs
* Open Graph URLs
* Sitemap URLs
* robots.txt URLs

to match your live domain.

## Option 2: Vercel

VelvetUI Pro can be deployed directly to Vercel.

### Deployment Steps

1. Create a Vercel account.
2. Import the project folder or GitHub repository.
3. Select **Other** when prompted for a framework.
4. Leave build settings empty.
5. Deploy the site.

No build command is required.

## Option 3: GitHub Pages

GitHub Pages is suitable for personal projects and portfolio websites.

### Deployment Steps

1. Create a GitHub repository.
2. Upload the VelvetUI Pro files.
3. Open Repository Settings.
4. Navigate to Pages.
5. Deploy from the main branch.

GitHub will provide a public URL for the site.

If using a custom domain, update all SEO-related URLs after deployment.

## Option 4: Shared Hosting or cPanel

VelvetUI Pro works with traditional web hosting providers.

### Deployment Steps

1. Open File Manager or connect via FTP.
2. Upload the entire template.
3. Place all files inside:

```txt
public_html
```

or your chosen web root.

4. Confirm:

```txt
index.html
```

is located at the root of the website.

5. Verify that all CSS, JavaScript, and image assets load correctly.

## Custom Domains

After connecting a custom domain:

Update the following files:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

Also update:

* Canonical URLs
* Open Graph URLs
* Social sharing images
* Contact information

## SSL Certificates

Most modern hosting providers automatically provide SSL certificates.

Verify that your website loads correctly using:

```txt
https://yourdomain.com
```

All internal links should use HTTPS.

## Performance Recommendations

Before launch:

* Compress large images
* Use WebP images where possible
* Remove unused assets
* Test page speed
* Verify mobile responsiveness

## Launch Checklist

Before publishing:

* Replace all demo content
* Replace placeholder images
* Replace logo and favicon
* Update social media links
* Update contact information
* Test navigation links
* Test CTA buttons
* Test the contact form
* Verify thank-you page functionality
* Test the custom 404 page
* Update robots.txt
* Update sitemap.xml
* Update site.webmanifest
* Verify SEO metadata
* Check mobile and tablet layouts
* Check for broken links

Once these items are complete, VelvetUI Pro is ready for production deployment.
