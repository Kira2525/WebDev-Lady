# Setup Guide

## Open the template

VelvetUI Pro is a static website template. You can run it in any of these ways:

1. Open `index.html` directly in a browser.
2. Use a local static server during editing.
3. Deploy the folder to any static hosting provider.

## Recommended workflow

1. Review all included pages.
2. Decide which pages you want to keep in the final site.
3. Replace demo copy with your real brand content.
4. Update pricing, FAQ answers, showcase cards, and contact details.
5. Connect the form on `contact.html` if needed.

## Files to edit first

- Homepage: `index.html`
- Shared styling: `css/styles.css`
- Shared interactions: `js/script.js`
- Contact flow: `contact.html`

## Contact form setup

The demo form currently routes to `thank-you.html`.

To connect it to a backend later:

- Formspree: replace the form `action` with your Formspree endpoint and use `method="POST"`
- Netlify Forms: add the Netlify form attributes and keep `method="POST"`
- Custom backend: point the form `action` to your own API route

## Deployment checklist

- Confirm nav links open the intended pages
- Replace placeholder email addresses and demo pricing
- Confirm favicon and OG image paths still match your hosting structure
- Review mobile spacing after major copy changes
