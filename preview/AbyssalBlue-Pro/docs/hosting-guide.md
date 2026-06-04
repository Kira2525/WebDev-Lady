# Hosting Guide

## Overview

Abyssal Blue Pro is a static HTML, CSS, and JavaScript website template that can be deployed to virtually any hosting provider.

## Requirements

No build tools, frameworks, package managers, or installations are required.

The template runs as a standard static HTML, CSS, and JavaScript website.

You can deploy it directly to most hosting providers without modification.

## Before You Publish

1. Replace `https://example.com/` placeholder URLs with your real domain.
2. Update `robots.txt`.
3. Update `sitemap.xml`.
4. Connect the forms to a live service or backend.
5. Test the full site locally one more time.

## Domain Setup

Before publishing:

- Point your domain to your hosting provider.
- Enable HTTPS/SSL.
- Verify the site loads correctly on both www and non-www versions.
- Choose your preferred domain version.
- Update canonical URLs to match your final domain.

## Netlify

1. Create a new site in Netlify.
2. Upload the project folder or connect your repository.
3. Set the publish directory to the project root.
4. Deploy the site.
5. Test navigation, forms, and image loading on the live URL.

## Vercel

1. Create a new Vercel project.
2. Import the project folder or repository.
3. Keep the output as a static site with no build command.
4. Deploy.
5. Test all public pages after deployment.

## GitHub Pages

1. Push the project to a GitHub repository.
2. Enable GitHub Pages from the branch and root folder you want to publish.
3. Wait for the site URL to become available.
4. Update canonical URLs and sitemap entries if the final domain differs.
5. Test all internal links and assets.

## cPanel / Shared Hosting

1. Open File Manager or connect through FTP.
2. Upload the full project contents to `public_html` or your chosen web root.
3. Confirm that `index.html` is in the site root.
4. Visit the live domain and test images, CSS, JS, and forms.

## Search Engine Setup

After deployment:

1. Update `robots.txt` with your final domain.
2. Update `sitemap.xml` with your final domain.
3. Submit your sitemap to Google Search Console.
4. Verify indexing and crawl status.
5. Monitor search visibility after launch.

## After Deployment

- Verify the homepage loads correctly
- Verify every internal link works
- Verify the favicon loads from `images/favicon.svg`
- Verify the manifest is reachable
- Verify `robots.txt` and `sitemap.xml` use the final domain
- Verify form submissions or demo redirects work as expected
- Verify social sharing previews display correctly
- Verify Open Graph images load properly
- Verify mobile navigation functions correctly
- Verify footer social media links work
- Verify all contact details are accurate
