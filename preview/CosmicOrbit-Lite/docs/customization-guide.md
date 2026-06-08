# Cosmic Orbit Lite Customization Guide

## Overview

Thank you for purchasing Cosmic Orbit Lite.

Cosmic Orbit Lite is a premium one-page astronomy and observatory website template built with HTML, CSS, and JavaScript. The template is designed for observatories, astronomy clubs, telescope experience businesses, science centers, educational programs, and stargazing events.

The Lite version focuses on simplicity while maintaining the same visual identity as Cosmic Orbit Pro.

No frameworks, package managers, build tools, or server-side software are required.

---

# Included Files

The Lite package includes:

```text
CosmicOrbit-Lite/
│
├── index.html
├── 404.html
├── README.md
├── license.txt
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

---

# Editing Content

Most website content exists inside:

```text
index.html
```

The custom error page exists inside:

```text
404.html
```

You can edit:

* Headlines
* Paragraph text
* Button labels
* Service descriptions
* Event information
* Pricing content
* Contact details
* Footer content

---

# Website Sections

The homepage includes several sections.

Typical sections include:

## Hero

Main introduction and CTA buttons.

## About

Company overview and mission.

## Services

Featured offerings and experiences.

## Events

Upcoming astronomy events and experiences.

## Pricing

Packages and pricing options.

## Contact

Business contact information and calls to action.

## Footer

Social links and business details.

---

# Updating Branding

Before launch, update:

* Business name
* Tagline
* Contact details
* Social media links
* Copyright text

Search the project for the current business name and replace all occurrences.

---

# Updating Colors

Most colors are controlled through CSS variables.

Look for:

```css
:root
```

Common variables may include:

```css
--bg
--panel
--accent
--text
--line
--glow
```

Updating these variables is the fastest way to rebrand the template.

---

# Navigation

Cosmic Orbit Lite uses one-page navigation.

Default anchors:

```text
#home
#about
#services
#events
#pricing
#contact
```

If you rename a section ID, update the matching navigation link.

Example:

```html
<a href="#about">
```

must match:

```html
<section id="about">
```

---

# Updating Images

Replace any included logo, icon, or astronomy artwork with your own branding.

Recommended formats:

* SVG for logos
* PNG for transparent graphics
* WebP for optimized images
* JPG for photography

Try to keep images compressed for faster loading.

---

# Social Links

Replace all placeholder URLs.

Examples:

```text
Instagram
Facebook
YouTube
TikTok
LinkedIn
```

Always test every social link before publishing.

---

# Contact Information

The Lite version uses a static contact section.

Update:

* Email address
* Phone number
* Business location
* CTA links

directly inside:

```text
index.html
```

---

# SEO Updates

Before launch:

Update:

* Page title
* Meta description
* Canonical URL
* Open Graph URL

Review:

```text
robots.txt
sitemap.xml
site.webmanifest
```

Replace:

```text
https://yourdomain.com
```

with your actual domain.

---

# Mobile Testing

Before publishing:

Check:

* Navigation menu
* Buttons
* Text spacing
* Images
* Section spacing
* Footer layout

Test on:

* Desktop
* Tablet
* Mobile

---

# Launch Checklist

✓ Business name updated

✓ Content updated

✓ Images updated

✓ Contact information updated

✓ Social links updated

✓ Mobile layout tested

✓ Tablet layout tested

✓ Desktop layout tested

✓ Sitemap updated

✓ Robots.txt updated

✓ Manifest updated

✓ 404 page tested

✓ All links verified

---

# Support

Cosmic Orbit Lite is designed to be easy to customize without advanced coding knowledge.

For most changes, you only need to edit the HTML content and CSS variables.
