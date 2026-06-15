# Velvet Studio Content Guide

This file notes the main places to maintain VELVET STUDIO content.

## Brand Text

Primary brand text appears in the page headers, footers, metadata, and structured data. Keep the name as `VELVET STUDIO` in navigation and footer contexts unless the fictional brand changes.

## Page Copy

Edit page copy directly in the matching HTML file:

* Homepage story: `index.html`
* Studio story: `about.html`
* Services: `services.html`
* Process: `features.html`
* Pricing: `pricing.html`
* Portfolio entries: `portfolio.html`
* FAQs: `faq.html`
* Contact flow: `contact.html` and `thank-you.html`

## Visual Settings

Global colors, fonts, card styles, buttons, image treatments, footer styling, and layout primitives live in `css/styles.css`. Tablet and phone refinements live in `css/tablet.css` and `css/mobile.css`.

## Navigation

Navigation labels are repeated across the HTML pages. When changing a label or URL, update each page header and test the active state on the matching page.

## Metadata

Each HTML file includes a title, description, canonical URL, Open Graph data, and X card data. Keep these descriptions concise and specific to the page.

## Quality Review

Before handoff, search the project for outdated names, old domains, unused notes, and broken links. Then open the site at desktop, tablet, and phone widths.

