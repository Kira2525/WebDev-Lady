# WorldView Global Lite Customization Guide

## Overview

WorldView Global Lite is a fully static HTML, CSS, and JavaScript website.

No frameworks, build tools, package managers, or special software are required.

Most customizations can be completed by editing the HTML files, replacing assets in the `assets` folder, or adjusting colors inside `css/styles.css`.

---

# Project Structure

```text
WorldViewGlobal-Lite/
│
├── index.html
├── thank-you.html
├── 404.html
│
├── assets/
│   ├── earth-realistic.png
│   ├── favicon.svg
│   └── logo-worldview.svg
│
├── css/
│   ├── styles.css
│   ├── tablet.css
│   └── mobile.css
│
├── js/
│   └── script.js
│
├── docs/
│   ├── setup-guide.md
│   ├── customization-guide.md
│   ├── hosting-guide.md
│   ├── form-setup-guide.md
│   └── image-replacement-guide.md
│
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── LICENSE.txt
└── README.md
```

---

# Rename The Business

To rename WorldView Global:

1. Open:

   * `index.html`
   * `thank-you.html`
   * `404.html`

2. Replace:

   * WorldView Global
   * WORLDVIEW GLOBAL
   * WorldView Lite

3. Update:

   * Page titles
   * Meta descriptions
   * Header branding
   * Footer branding

### Quick Search Terms

Use your editor's Find In Files feature and search for:

```text
WorldView Global
WORLDVIEW GLOBAL
WorldView Lite
```

---

# Edit Text Content

All website content is written directly inside the HTML files.

You can edit:

* Headlines
* Body text
* Service descriptions
* Button text
* Section labels
* Contact instructions
* Thank-you page content
* 404 page content

Main pages:

```text
index.html
thank-you.html
404.html
```

---

# Edit Navigation

Navigation appears in all three pages:

```text
index.html
thank-you.html
404.html
```

If you rename a section:

### Example

```html
<a href="#solutions">Solutions</a>

<section id="solutions">
```

The link and section ID must match.

### After Editing

Verify:

* Desktop navigation
* Tablet navigation
* Mobile navigation
* Hamburger menu links

---

# Edit Buttons

Buttons use shared classes.

### Available Button Styles

```html
button--primary
button--secondary
button--ghost
button--sm
```

### Recommended Usage

| Class             | Purpose              |
| ----------------- | -------------------- |
| button--primary   | Main call-to-action  |
| button--secondary | Secondary action     |
| button--ghost     | Low-emphasis action  |
| button--sm        | Small header buttons |

### Example

```html
<a class="button button--primary">
  Book a Strategy Call
</a>
```

---

# Replace The Logo

Current logo:

```text
assets/logo-worldview.svg
```

### Recommended Method

Replace the file while keeping the same filename.

No HTML updates will be required.

### Alternative

Use a new filename and update all image paths manually.

Example:

```html
<img src="assets/new-logo.svg">
```

---

# Replace The Favicon

Current favicon:

```text
assets/favicon.svg
```

Recommended:

Replace the file while keeping the same filename.

If the filename changes, update all pages:

```html
<link rel="icon" href="assets/favicon.svg">
```

---

# Replace The Earth Background

Current Earth image:

```text
assets/earth-realistic.png
```

The Earth image is loaded from:

```css
.earth-image {
  background: url("../assets/earth-realistic.png")
              center center / cover no-repeat;
}
```

Location:

```text
css/styles.css
```

### Recommended Size

```text
2000px wide or larger
```

For best quality on large screens.

---

# Change Colors

Main colors are controlled in:

```text
css/styles.css
```

Inside:

```css
:root
```

### Common Variables

```css
--bg
--bg-panel
--line
--text
--muted
--blue-1
--blue-2
--cyan
```

Example:

```css
--blue-1: #81d9ff;
--blue-2: #2d8cff;
```

Change variables first before editing individual sections.

---

# Responsive Layout Files

The design uses three CSS files:

```text
css/styles.css
css/tablet.css
css/mobile.css
```

### Purpose

```text
styles.css  = desktop + shared styles
tablet.css  = tablet layouts
mobile.css  = mobile layouts
```

If desktop looks correct but mobile does not, check:

```text
tablet.css
mobile.css
```

---

# Edit The Contact Form

The contact form is located in:

```text
index.html
```

### Editable Items

* Field labels
* Placeholder text
* Dropdown options
* Fine print
* Submit button text
* Form destination

### Current Redirect

```html
action="thank-you.html"
```

For production use, connect the form to:

* Netlify Forms
* Formspree
* Getform
* Custom backend

See:

```text
docs/form-setup-guide.md
```

---

# Edit Social Links

Social links are located inside the footer.

Example:

```html
<a href="https://linkedin.com">
```

Replace URLs with real profiles.

If social links are not needed, remove the entire:

```html
<div class="social-links">
```

section.

---

# Edit The Animated Background

Most background effects are located in:

```text
css/styles.css
```

Important sections:

```css
.space-scene
.space-noise
.stars
.glow-orb--left
.earth-stage
.earth
.earth-image
.shooting-star
```

These control:

* Star field
* Glow effects
* Planet placement
* Planet size
* Shooting stars
* Background motion

---

# Update SEO Files

Before publishing, update:

```text
robots.txt
sitemap.xml
```

Replace:

```text
https://example.com
```

with your actual domain.

Example:

```text
https://yourdomain.com
```

---

# Deploying The Website

Supported hosting platforms:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Shared Hosting
* cPanel Hosting

See:

```text
docs/hosting-guide.md
```

for step-by-step instructions.

---

# Final Checklist

Before publishing:

✓ Business name updated

✓ Logo replaced

✓ Favicon replaced

✓ Navigation tested

✓ Contact form connected

✓ Social links updated

✓ robots.txt updated

✓ sitemap.xml updated

✓ Mobile menu tested

✓ Tablet layout tested

✓ Mobile layout tested

✓ Thank-you page tested

✓ 404 page tested

✓ Images loading correctly

✓ All links working

---

# Need Help?

Most customizations can be completed by editing:

```text
HTML = Content
CSS = Design
JavaScript = Interactions
Assets = Images and Branding
```

Start with the HTML files first, then adjust colors and imagery to match your brand.
