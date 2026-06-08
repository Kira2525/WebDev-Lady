# VelvetUI Pro Customization Guide

Thank you for purchasing VelvetUI Pro.

This guide explains how to customize the template for your own business, creative studio, agency, portfolio, or client project.

## File Structure

```txt
/
├── 404.html
├── about.html
├── contact.html
├── faq.html
├── features.html
├── index.html
├── LICENSE.txt
├── portfolio.html
├── pricing.html
├── README.md
├── robots.txt
├── script.js
├── services.html
├── site.webmanifest
├── sitemap.xml
└── thank-you.html
```

## Customizing Colors

Primary design settings are located in the CSS section of each page or in the main stylesheet area used by the template.

Look for the `:root` section.

Example:

```css
:root {
  --color-primary: #8f5cff;
  --color-secondary: #141414;
  --color-surface: #ffffff;
}
```

Updating these variables will update the main colors used throughout VelvetUI Pro.

## Customizing Typography

Font imports are located in the `<head>` section of each HTML page.

To change fonts:

1. Replace the existing font import.
2. Update the font-family values in the CSS.
3. Test the layout on desktop, tablet, and mobile.

## Replacing the Logo and Favicon

Default brand assets may be referenced in the HTML, manifest, and metadata.

Check and update:

```txt
site.webmanifest
index.html
about.html
services.html
features.html
pricing.html
portfolio.html
faq.html
contact.html
404.html
thank-you.html
```

After replacing the logo or favicon, verify:

* Header logo
* Footer logo
* Browser favicon
* Open Graph image
* Social sharing preview

## Editing Content

VelvetUI Pro includes these HTML pages:

```txt
index.html
about.html
services.html
features.html
pricing.html
portfolio.html
faq.html
contact.html
404.html
thank-you.html
```

Replace the demo content with your own:

* Brand name
* Tagline
* Services
* Features
* Portfolio projects
* Pricing details
* FAQ answers
* Contact information
* Footer text

## Navigation Updates

The navigation is hard-coded into the HTML pages for simple static hosting.

If you rename, remove, or add a page, update the navigation across every HTML file.

Update navigation links in:

```txt
index.html
about.html
services.html
features.html
pricing.html
portfolio.html
faq.html
contact.html
404.html
thank-you.html
```

## Footer Updates

The footer appears across the site and should stay consistent on every page.

Update:

* Brand name
* Footer description
* Social media links
* Copyright text

The default footer social links are:

```txt
Instagram
Pinterest
Facebook
TikTok
LinkedIn
```

Remove any platforms you do not use.

## Interactive Features

Shared JavaScript is located in:

```txt
script.js
```

This file controls:

* Mobile navigation
* Header behavior
* Scroll animations
* FAQ accordion behavior
* Reduced-motion support
* Background effects

Do not remove this file unless you also remove the features that depend on it.

## Responsive Design

VelvetUI Pro includes responsive styling for desktop, tablet, and mobile.

Before launch, test:

* Header layout
* Mobile menu
* Hero section
* Cards and grids
* Pricing section
* Contact form
* Footer layout

## SEO Setup

Before publishing, update:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph titles
* Open Graph descriptions
* Open Graph images
* Twitter card content

Also update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

Replace all example URLs with your real domain.

## Contact Form

The contact form is located in:

```txt
contact.html
```

Before launch:

* Test the form
* Update the form action if using a form provider
* Confirm the thank-you page works
* Replace placeholder contact details

See:

```txt
docs/form-setup-guide.md
```

if included with your package.

## Pre-Launch Checklist

Before publishing:

* Replace all demo content
* Replace logo and favicon
* Replace placeholder images
* Update all social media links
* Update contact details
* Test every navigation link
* Test every CTA button
* Test the contact form
* Check desktop layout
* Check tablet layout
* Check mobile layout
* Update SEO metadata
* Update `robots.txt`
* Update `sitemap.xml`
* Update `site.webmanifest`
* Check for broken links
* Check for missing images
* Remove unused demo content

VelvetUI Pro is ready for static hosting once all branding, content, links, and SEO details have been updated.
