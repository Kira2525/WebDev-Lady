# Abyssal Blue Pro Hosting Guide

## Overview

Abyssal Blue Pro is a fully static HTML, CSS, and JavaScript website template.

No build tools, frameworks, package managers, databases, or server-side software are required.

The template can be deployed directly to most modern hosting providers.

## Included Pages

```txt
index.html
about.html
wildlife.html
gallery.html
booking.html
contact.html
pricing.html
faq.html
thank-you.html
404.html
```

## Requirements

Abyssal Blue Pro only requires a hosting provider capable of serving:

* HTML files
* CSS files
* JavaScript files
* Images and media assets

No installation process is required.

## Before Publishing

Before launching your website:

1. Replace all placeholder domains such as:

```txt
https://replace-before-launch.example
```

2. Update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

3. Replace demo branding and contact details.
4. Connect booking and contact forms to a live service if required.
5. Test all pages locally.

## Domain Setup

Before publishing:

* Connect your domain to your hosting provider.
* Enable HTTPS / SSL.
* Verify both www and non-www versions load correctly.
* Choose a preferred domain version.
* Update canonical URLs to match the final domain.

Example:

```txt
https://your-live-domain.example
```

or

```txt
https://www.your-live-domain.example
```

Use only one version throughout the site.

## Netlify

### Deployment

1. Create a Netlify account.
2. Create a new site.
3. Upload the project folder or connect a Git repository.
4. Use the project root as the publish directory.
5. Deploy.

### After Deployment

Verify:

* Navigation links
* Forms
* Images
* Social previews
* Mobile navigation

## Vercel

### Deployment

1. Create a Vercel account.
2. Import the project folder or repository.
3. Leave the framework setting as:

```txt
Other
```

4. Leave the build command empty.
5. Deploy.

### After Deployment

Verify all public pages and assets load correctly.

## GitHub Pages

### Deployment

1. Create a GitHub repository.
2. Upload the template files.
3. Enable GitHub Pages.
4. Select the branch and folder to publish.
5. Wait for deployment.

### After Deployment

If using a custom domain:

* Update canonical URLs
* Update sitemap.xml
* Update robots.txt

## Shared Hosting / cPanel

### Deployment

1. Open File Manager or connect via FTP.
2. Upload the complete template.
3. Place all files inside:

```txt
public_html
```

or your chosen web root.

4. Verify:

```txt
index.html
```

is located in the root directory.

5. Visit the live website and test functionality.

## Search Engine Setup

After deployment:

1. Update robots.txt with your final domain.
2. Update sitemap.xml with your final domain.
3. Submit the sitemap to Google Search Console.
4. Verify indexing status.
5. Monitor search visibility after launch.

## Custom 404 Page

Abyssal Blue Pro includes:

```txt
404.html
```

Many hosting providers automatically use this file as the custom not-found page.

After publishing:

1. Visit a non-existent URL.
2. Confirm the custom 404 page appears correctly.

## Post-Launch Checklist

Verify:

* Homepage loads correctly
* Internal navigation works
* Images load correctly
* Gallery functions properly
* Booking page functions properly
* Contact page functions properly
* Forms behave correctly
* Thank-you page loads correctly
* Custom 404 page works
* Mobile navigation works
* Footer links work
* Social media links work
* Contact details are accurate
* Open Graph previews display correctly
* Favicon loads correctly
* Manifest loads correctly
* robots.txt uses the final domain
* sitemap.xml uses the final domain

## Performance Recommendations

Before launch:

* Compress large images
* Use optimized image formats
* Remove unused assets
* Test mobile performance
* Verify responsive layouts

## Final Review

Before considering the project complete:

* Replace all demo content
* Replace all placeholder domains
* Update SEO metadata
* Verify form functionality
* Test desktop, tablet, and mobile layouts
* Check for broken links
* Check for missing images

Once these items are complete, Abyssal Blue Pro is ready for production deployment on any modern hosting platform.
