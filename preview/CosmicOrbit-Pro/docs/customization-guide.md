# Cosmic Orbit Pro Customization Guide

## Overview

Cosmic Orbit Pro is a static HTML, CSS, and JavaScript website template. All content can be edited directly in the HTML files, and all styling can be adjusted through the CSS files.

There is no build process, no framework dependency, and no package installation required.

## Included Pages

The template includes:

- `index.html`
- `about.html`
- `services.html`
- `events.html`
- `pricing.html`
- `booking.html`
- `contact.html`
- `faq.html`
- `thank-you.html`
- `404.html`

## Brand Updates

To rename or rebrand the website:

1. Open each HTML file.
2. Search for the current business name.
3. Replace it with your new business name.
4. Update page titles and meta descriptions in each `<head>` section.
5. Update the header and footer branding across all pages.

If the template includes a logo file, replace it with your new logo and keep the same filename to avoid changing code paths.

## Page Copy

Each HTML file contains editable website content.

You can update:

- Headlines
- Body text
- Button text
- Service descriptions
- Event details
- Pricing plans
- FAQ questions and answers
- Contact information
- Footer text

Edit the text directly inside the matching HTML sections.

## Navigation

The navigation appears across the site header and footer.

If you rename, remove, or add a page, update:

1. Header navigation links
2. Mobile navigation links
3. Footer links
4. `body data-nav-page` values
5. Sitemap entries
6. Canonical URLs
7. Open Graph URLs

Active navigation is handled by `js/main.js` using the `data-nav-page` value on each page’s `<body>` tag.

Example:

```html
<body data-nav-page="pricing">