# Cosmic Orbit Pro Customization Guide

## Overview

Cosmic Orbit Pro is a static HTML, CSS, and JavaScript website template.

You can edit the content directly in the HTML files and adjust styling through the CSS files.

There is no build process, no framework dependency, and no package installation required.

---

## Included Pages

The template includes:

- `index.html`
- `about.html`
- `services.html`
- `events.html`
- `pricing.html`
- `booking.html`
- `faq.html`
- `contact.html`
- `thank-you.html`
- `404.html`

---

## Brand Updates

To rename or rebrand the website:

1. Open each HTML file.
2. Search for the current business name.
3. Replace it with your new business name.
4. Update page titles and meta descriptions in each page `<head>`.
5. Update the header brand, footer brand, and any visible business references.

If you are replacing the logo, the easiest method is to keep the same filename and swap the file inside `images/`.

---

## Page Copy

Each HTML file contains editable website content.

You can update:

- Headlines
- Body copy
- Button labels
- Service descriptions
- Event details
- Pricing plans
- FAQ questions and answers
- Contact details
- Footer brand text

Edit the text directly inside the matching HTML sections.

---

## Navigation

The main navigation appears in the site header and mobile menu on every page.

If you rename, remove, or add a page, update:

1. Header navigation links
2. Mobile navigation links
3. `body data-nav-page` values
4. Sitemap entries
5. Canonical URLs
6. Open Graph URLs

Active navigation is handled by `js/main.js` using the `data-nav-page` value on each page `<body>` tag.

Example:

```html
<body data-nav-page="pricing.html">
```

Use the actual filename for each page:

- `index.html`
- `about.html`
- `services.html`
- `events.html`
- `pricing.html`
- `booking.html`
- `faq.html`
- `contact.html`

The `thank-you.html` and `404.html` utility pages do not need an active navigation state.

---

## Footer

The footer now contains:

- Brand/logo
- Brand description text
- Social icons
- Copyright line

If you update your brand or links, review the footer on every page and update:

1. Logo file reference if needed
2. Brand name text
3. Brand description text
4. Social profile URLs
5. Copyright wording

Footer navigation columns are not part of the shipped package.

---

## SEO Placeholders

The template includes starter SEO placeholders that buyers are expected to customize before launch.

Review these items across every page:

- `<title>`
- Meta description
- Canonical URL
- Open Graph title and description
- Open Graph URL and image
- Twitter image

Also update:

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

The default placeholder domain is:

```text
https://yourdomain.com
```

---

## Forms

The booking and contact forms ship in demo mode for preview purposes.

Front-end form behavior is handled in:

```text
js/main.js
```

If you want live submissions, connect the forms to your preferred form service or backend workflow.

See:

```text
docs/form-setup-guide.md
```

for the full setup process.

---

## Images And Assets

Bundled image assets live in:

```text
images/
```

Shipped assets include:

- `images/logo.svg`
- `images/favicon.svg`
- `images/planet.png`

If you replace files with different names, update the related HTML references.

See:

```text
docs/image-replacement-guide.md
```

for asset guidance.

---

## Styling

Primary styling files:

```text
css/styles.css
css/tablet.css
css/mobile.css
```

Use them for:

- Colors
- Typography
- Spacing
- Layout
- Responsive behavior
- Component styling

`css/styles.css` contains the shared base styles and most component rules.

`css/tablet.css` and `css/mobile.css` contain breakpoint-specific adjustments.

---

## Interactivity

Shared interactivity is handled in:

```text
js/main.js
```

This file controls:

- Active navigation state
- Mobile menu behavior
- Smooth scrolling for same-page links
- Demo form redirects
- Reveal animations
- Background motion helpers
- Current year updates

---

## Recommended Editing Workflow

For a clean customization process:

1. Update branding first.
2. Replace contact details and social links.
3. Edit the page copy for services, events, and pricing.
4. Replace image assets if needed.
5. Update SEO placeholders and domain references.
6. Connect forms.
7. Test desktop, tablet, and mobile layouts.

---

## Final Review Checklist

Before packaging a finished client site, confirm:

- Business name is updated across all pages
- Header navigation links are correct
- `data-nav-page` values match the real filenames
- Footer brand text and social links are updated
- Contact details are finalized
- Placeholder domain references are replaced
- Forms are connected and tested
- Images are optimized
- Desktop, tablet, and mobile layouts are reviewed

---

## Related Guides

For deeper setup help, use these files:

```text
docs/setup-guide.md
docs/form-setup-guide.md
docs/hosting-guide.md
docs/image-replacement-guide.md
```
