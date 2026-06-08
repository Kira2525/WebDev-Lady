# Abyssal Blue Lite Hosting Guide

## Overview

Abyssal Blue Lite is a lightweight one-page HTML website template built with standard HTML, CSS, and JavaScript.

No frameworks, build tools, package managers, databases, or installation steps are required.

The template can be deployed directly to virtually any static hosting provider.

## Requirements

Abyssal Blue Lite requires only a hosting provider capable of serving:

* HTML files
* CSS files
* JavaScript files
* Images and media assets

No compilation or build process is necessary.

## Before Publishing

Before launching your website:

1. Replace all placeholder domains such as:

```txt
https://yourdomain.com
```

2. Update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

3. Update page metadata.
4. Replace demo branding and content.
5. Replace social media links.
6. Test the website locally.

## Domain Setup

Before publishing:

* Point your domain to your hosting provider.
* Enable HTTPS / SSL.
* Verify both www and non-www versions load correctly.
* Choose your preferred domain version.
* Update canonical URLs to match your final domain.

Example:

```txt
https://yourdomain.com
```

or

```txt
https://www.yourdomain.com
```

Use only one version throughout the site.

## Netlify

### Deployment

1. Create a Netlify account.
2. Create a new site.
3. Upload the project folder or connect a repository.
4. Use the project root as the publish directory.
5. Deploy the site.

### After Deployment

Verify:

* Navigation links
* Images
* Social links
* CTA buttons
* Mobile navigation

## Vercel

### Deployment

1. Create a Vercel account.
2. Import the project folder or repository.
3. Leave the framework preset as:

```txt
Other
```

4. Leave build settings empty.
5. Deploy.

### After Deployment

Verify all assets and links load correctly.

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
2. Upload all template files.
3. Place the files inside:

```txt
public_html
```

or your preferred web root.

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
5. Monitor crawl activity after launch.

## Custom 404 Page

Abyssal Blue Lite includes:

```txt
404.html
```

Many hosting providers automatically use this page as the site's custom error page.

After publishing:

1. Visit a non-existent URL.
2. Confirm the custom 404 page appears correctly.

## Post-Launch Checklist

Verify:

* Homepage loads correctly
* Navigation links function properly
* Images load correctly
* CTA buttons work correctly
* Social media links are updated
* Contact information is accurate
* Favicon loads correctly
* Manifest loads correctly
* robots.txt uses the final domain
* sitemap.xml uses the final domain
* Mobile navigation works correctly
* Desktop, tablet, and mobile layouts display properly

## Final Review

Before considering the website complete:

* Replace all demo content
* Replace all placeholder domains
* Update metadata
* Verify branding assets
* Test all links
* Test all buttons
* Check for missing images
* Review responsiveness on multiple devices

Once these steps are complete, Abyssal Blue Lite is ready for production deployment on any modern static hosting platform.
