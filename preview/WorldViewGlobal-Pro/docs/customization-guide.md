# WorldView Global Pro Customization Guide

## Introduction

Thank you for purchasing WorldView Global Pro.

This template is built with clean, organized HTML, CSS, and JavaScript so it can be customized without advanced coding knowledge.

Project Structure:

```text
/
├── index.html
├── solutions.html
├── pricing.html
├── about.html
├── contact.html
├── thank-you.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
│
├── css/
│   ├── styles.css
│   ├── tablet.css
│   └── mobile.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── logo-worldview.svg
│   ├── favicon.svg
│   ├── earth-realistic.png
│   └── other media files
│
└── docs/
    ├── customization-guide.md
    ├── hosting-guide.md
    └── form-setup-guide.md
```

---

# Rename The Business

To rebrand the template:

1. Replace the business name throughout all HTML pages.
2. Replace the logo file inside the assets folder.
3. Update page titles.
4. Update meta descriptions.
5. Update Open Graph tags.
6. Update footer branding.

Quick method:

Search the project for:

```text
WorldView Global
```

and replace every occurrence.

---

# Edit Website Content

All website content is written directly inside the HTML files.

You can customize:

* Headlines
* Subheadings
* Body text
* Feature sections
* Pricing information
* CTA buttons
* FAQ content
* Contact information

Recommended pages to review first:

* index.html
* solutions.html
* pricing.html
* about.html
* contact.html

---

# Edit Navigation

Navigation appears in multiple locations:

### Header Navigation

Desktop navigation:

```html
<nav class="desktop-nav">
```

Mobile navigation:

```html
<nav class="mobile-nav">
```

### Footer Navigation

Located inside each page footer.

When adding or removing pages:

1. Update desktop navigation.
2. Update mobile navigation.
3. Update footer links.
4. Verify all href values.
5. Keep data-page-link values synchronized with body data-page values.

Example:

```html
<body data-page="pricing">
```

```html
<a data-page-link="pricing">
```

---

# Edit Buttons And Links

Buttons use standard anchor tags.

Primary Button:

```html
button--primary
```

Secondary Button:

```html
button--secondary
```

Ghost Button:

```html
button--ghost
```

Common edits:

* Change text labels
* Update destination URLs
* Change email addresses
* Change phone numbers
* Update booking links

---

# Replace Logo, Favicon & Images

Current assets:

```text
assets/logo-worldview.svg
assets/favicon.svg
assets/earth-realistic.png
```

Recommended replacement formats:

* Logo: SVG
* Favicon: SVG or PNG
* Photography: JPG
* Graphics: PNG

If you keep the same filenames, no code updates are usually required.

---

# Customize Colors

Global colors are controlled through CSS variables located near the top of:

```text
css/styles.css
```

Variables:

```css
--bg
--bg-deep
--bg-panel
--line
--text
--blue-1
--blue-2
--cyan
--lime
```

Most visual branding changes can be completed by modifying only these variables.

---

# Responsive Layout Files

Desktop / Shared Styles:

```text
css/styles.css
```

Tablet Styles:

```text
css/tablet.css
```

Mobile Styles:

```text
css/mobile.css
```

Recommended workflow:

1. Edit styles.css first.
2. Check tablet.css.
3. Check mobile.css.
4. Test all pages on desktop, tablet, and mobile devices.

---

# Edit The Earth Background

The animated Earth scene is controlled by:

```text
css/styles.css
css/tablet.css
css/mobile.css
```

Primary classes:

```css
.earth-stage
.earth
.earth-image
```

You can adjust:

* Size
* Position
* Rotation speed
* Opacity
* Blur effects

The Earth image itself can be replaced by swapping:

```text
assets/earth-realistic.png
```

---

# Contact Form Customization

The contact form is located in:

```text
contact.html
```

Editable items:

* Form labels
* Dropdown options
* Placeholder text
* Button text
* Form destination
* Success messaging

If changing form behavior, review:

```text
js/script.js
```

---

# JavaScript Features

The template includes JavaScript for:

* Mobile menu
* Active navigation highlighting
* Accessibility improvements
* Form routing logic
* Reduced motion support
* Dynamic copyright year

File location:

```text
js/script.js
```

---

# SEO Files

The project includes:

### robots.txt

Controls search-engine crawling.

```text
robots.txt
```

### sitemap.xml

Helps search engines index pages.

```text
sitemap.xml
```

Replace:

```text
https://example.com
```

with your actual domain.

### site.webmanifest

Controls installable website settings.

```text
site.webmanifest
```

Update:

* Name
* Short Name
* Theme Color
* Description
* Icons

---

# Font Awesome Icons

Font Awesome is loaded globally.

You can replace icons using:

```html
<i class="fa-solid fa-globe"></i>
```

Browse available icons at:

https://fontawesome.com/icons

---

# Deployment Checklist

Before launching:

✓ Replace placeholder content

✓ Replace logo and favicon

✓ Update contact details

✓ Configure form handling

✓ Update sitemap.xml URLs

✓ Update canonical URLs

✓ Update Open Graph images

✓ Test mobile layout

✓ Test tablet layout

✓ Verify all navigation links

✓ Verify thank-you page

✓ Test contact form

✓ Upload to hosting

---

# Support

This template was designed for easy customization and deployment.

For major visual changes, begin with CSS variables and assets before modifying component-level styles.
