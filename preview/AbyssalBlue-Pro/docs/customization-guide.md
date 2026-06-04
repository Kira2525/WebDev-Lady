# Customization Guide

## Quick Start

1. Replace your logo in `images/logo.svg`.
2. Replace demo images in `images/`.
3. Update business name, contact details, hours, and address.
4. Update pricing and package details.
5. Replace placeholder URLs such as `https://example.com`.
6. Connect forms to your preferred form service.
7. Test the site on desktop, tablet, and mobile.
8. Upload the template to your hosting provider.

## Template Pages

The template uses root-level HTML files:

- `index.html`
- `about.html`
- `wildlife.html`
- `gallery.html`
- `booking.html`
- `contact.html`
- `pricing.html`
- `faq.html`
- `thank-you.html`
- `404.html`

If you rename or remove a page, update the navigation on every HTML file.

## CSS Files

- `css/styles.css` for shared styling and desktop-first layout
- `css/tablet.css` for tablet layout overrides
- `css/mobile.css` for mobile layout overrides

## JavaScript File

- `js/main.js` for the mobile menu, active nav state, animated background, hero slider, gallery filtering, gallery lightbox, booking package selection, and form behavior

## Colors

Change the theme colors in the `:root` section near the top of `css/styles.css`.

Key variables include:

- `--bg-deep`
- `--bg-mid`
- `--bg-blue`
- `--accent`
- `--accent-2`
- `--white`
- `--text-soft`
- `--text-muted`

Start with the variables before changing individual component rules.

## Navigation

The main navigation is hard-coded in each HTML file. When you update menu labels or links, repeat the same change on every page so the site stays consistent.

## Footer

Footer content appears on every page.

Update:

- Business name
- Footer description
- Copyright text
- Social media links
- Footer navigation links
- Contact details, if shown

Make the same footer changes across all HTML files so the site stays consistent.

## Social Media Links

Footer social media links use Font Awesome icons.

Replace the placeholder `#` values with your real social media URLs.

Supported icons include:

- Facebook
- Instagram
- TikTok
- YouTube
- X (Twitter)

The social icon HTML is located in the footer section of each HTML page.

Social icon styling is controlled in:

`css/styles.css`

Look for:

`/* Footer Social Media */`

## Pricing And Packages

Package content appears in two places:

- `pricing.html`
- `booking.html`

Keep the package names identical in both files. If you add, remove, or rename a package, update:

- Pricing cards
- Booking package cards
- The booking form `<select name="package">`
- Any package-specific CTA link text

## SEO Placeholder URLs

Each page includes placeholder values like `https://example.com/...`.

Before launch, update:

- `<title>`
- `meta name="description"`
- `link rel="canonical"`
- Open Graph tags
- Twitter tags
- `robots.txt`
- `sitemap.xml`

## Images And Branding

- Replace images in `images/`
- Update the business name in headers and footers
- Replace `images/logo.svg` if needed
- Keep `images/favicon.svg` unless you intentionally replace it

## Forms

The booking and contact forms currently redirect to `thank-you.html` for demo purposes. Review [Form Setup Guide](form-setup-guide.md) before launch if you want real submissions.

## JavaScript Features

The following features depend on `js/main.js`:

- Mobile menu
- Active navigation state
- Animated bubbles
- Animated fish
- Ocean particle background
- Hero slider
- Gallery filters
- Gallery lightbox
- Booking package selection
- Thank-you page behavior

If you remove a feature from the HTML, also remove or update the related JavaScript selectors so the file stays clean.
