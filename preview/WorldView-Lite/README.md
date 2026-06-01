# WorldView Lite

WorldView Lite is a premium one-page HTML website template built around a cinematic animated Earth scene. It is designed for quick launches, simpler customization, and a lower price point than WorldView Pro while still feeling polished and marketplace-ready.

## Overview

WorldView Lite is a good fit for:

- Startups
- SaaS products
- Agencies
- Travel brands
- Education teams
- Consultants
- Global businesses

The package keeps the design premium but reduces complexity by using a single homepage plus optional `thank-you.html` and `404.html` support pages.

## Included Files

```text
WorldView-Lite/
  assets/
    favicon.svg
    logo-worldview.svg
  css/
    styles.css
    tablet.css
    mobile.css
  docs/
    setup-guide.md
  js/
    script.js
  404.html
  index.html
  LICENSE.txt
  README.md
  thank-you.html
```

## Customization

Open `index.html` and replace:

- headline copy
- section text
- testimonial content
- CTA labels and destinations

The layout is one-page by design, so most text changes happen in one main file.

## Color Editing

Global colors live near the top of `css/styles.css` inside the `:root` block.

Useful variables include:

- `--bg`
- `--bg-panel`
- `--line`
- `--text`
- `--blue-1`
- `--blue-2`
- `--cyan`

Update those variables to shift the look of the whole site quickly.

## Logo Replacement

Replace these files if you want to use your own branding:

- `assets/logo-worldview.svg`
- `assets/favicon.svg`

If your replacement logo has different proportions, you may also want to adjust the `.brand img` and `.footer-brand img` rules in `css/styles.css`.

## Publishing Instructions

1. Edit content in `index.html`.
2. Update branding assets if needed.
3. Review responsive spacing in a browser.
4. Upload the folder to your web host or static site platform.
5. Set `index.html` as the homepage.
6. If your host supports it, point missing routes to `404.html`.

No build tools or framework setup are required.

## License Summary

WorldView Lite includes a commercial-use license.

You may:

- use it for your own website
- use it for client projects
- customize it freely

You may not:

- resell or redistribute the template files as a competing template package
- claim the unmodified template as your own product

Read `LICENSE.txt` for the full terms.
