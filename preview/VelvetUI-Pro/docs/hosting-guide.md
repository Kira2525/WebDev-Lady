# Velvet Studio Hosting Guide

VELVET STUDIO is a static website. It can be hosted anywhere that serves HTML, CSS, JavaScript, and image files.

## Files To Upload

Upload the full project folder, including:

* HTML pages
* `css/`
* `js/`
* `assets/`
* `robots.txt`
* `sitemap.xml`
* `site.webmanifest`

## Domain

The current fictional domain is:

```text
https://velvetstudio.example
```

When assigning a real domain, update canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml`.

## Static Hosts

The site works on Netlify, Vercel, GitHub Pages, Cloudflare Pages, and traditional shared hosting. No package install or build command is required.

## Error Page

Keep `404.html` in the web root. Some hosts need an explicit setting for the custom 404 page.

## Launch Checklist

* Home page loads at the final domain.
* Every navigation item works.
* Images and logo files load.
* Contact form delivery is tested.
* `thank-you.html` works.
* `404.html` works.
* Mobile and tablet navigation use the diamond menu button.

