# WorldView Lite Setup Guide

## Quick Start

1. Open the `WorldView-Lite` folder.
2. Edit `index.html` in your code editor.
3. Replace the default text with your own brand content.
4. Swap `assets/logo-worldview.svg` and `assets/favicon.svg` if needed.
5. Preview the site in a browser.

## Main Editing Areas

The homepage is organized into these sections:

1. Hero
2. Feature Highlights
3. What's Included
4. Who It's For
5. Lite vs Pro Comparison
6. Documentation Included
7. Testimonials
8. Final CTA

Because Lite is a single-page template, most edits happen in one place.

## Styling

Primary design variables live at the top of `css/styles.css`.

Common edits:

- update colors in `:root`
- change glass panel opacity in the shared panel rules
- adjust section spacing in `.section`
- change button styles in `.button`, `.button--primary`, and `.button--secondary`

## Navigation

The header uses anchor links that scroll to sections on the same page.

If you rename section IDs, update the matching `href` values in the header and mobile menu.

## Optional Pages

`thank-you.html` and `404.html` are included so the package still feels complete, but you can remove them if your use case does not need them.

If you remove them, update any links that point to those files.

## Deployment

You can publish WorldView Lite to:

- Netlify
- Vercel
- GitHub Pages
- shared hosting
- most static site platforms

Upload the folder contents and make sure `index.html` is served as the main page.
