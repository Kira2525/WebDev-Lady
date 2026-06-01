# WorldView Pro Setup Guide

## Local Setup

1. Download the full template folder.
2. Keep the folder structure intact so the HTML files can find `assets/`, `css/`, `docs/`, and `js/`.
3. Open `index.html` directly in a browser for a quick preview.
4. For a smoother editing workflow, run the folder through a simple local static server if you prefer live refresh.

## Hosting Instructions

WorldView Pro is a static template, so it can be deployed on common static platforms such as:

- Netlify
- Vercel static hosting
- Cloudflare Pages
- GitHub Pages
- Any cPanel or shared hosting account that serves HTML files

Upload the entire folder contents, not just the homepage file.

## Editing Pages

Each page is a standalone HTML file:

- `index.html` for the homepage
- `about.html` for package and brand context
- `features.html` for product detail
- `showcase.html` for examples and inspiration
- `faq.html` for buyer questions
- `pricing.html` for purchase and service options
- `contact.html` for inquiries
- `thank-you.html` for post-submit confirmation
- `404.html` for missing routes

Edit text directly inside the HTML sections. Shared styling lives in `css/styles.css` with breakpoint overrides in `css/tablet.css` and `css/mobile.css`.

## Publishing Guide

1. Replace the placeholder branding with your own logo and favicon if needed.
2. Update page titles and descriptions to fit your product or business.
3. Connect the contact form in `contact.html` to your preferred form handler.
4. Test every page locally before publishing.
5. Upload the site to your chosen host.
6. Re-check links, forms, and responsive behavior after deployment.

## Contact Form Notes

The contact form is structured for static-friendly integrations. You can:

- Keep the `data-netlify="true"` setup for Netlify Forms
- Replace the form action with a third-party endpoint
- Integrate a JavaScript form service if preferred

If you change the form strategy, make sure the thank-you flow still ends on `thank-you.html`.
