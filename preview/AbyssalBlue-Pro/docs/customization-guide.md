# Customization Guide

## Brand Identity

Update these items first to make the template feel like your own:

- Site name and footer copy
- Page headlines and CTA labels
- Contact details and address
- Dive package names and pricing
- Wildlife, FAQ, and service descriptions

## Colors

Global color variables are defined near the top of `css/styles.css` under `:root`.

Key variables include:

- `--bg-deep`
- `--bg-mid`
- `--bg-blue`
- `--accent`
- `--accent-2`
- `--white`
- `--text-soft`

If you want a different look, change the variables first instead of editing colors throughout the file.

## Typography

The template currently uses `Segoe UI, Arial, sans-serif`. If you want a more branded feel:

1. Add your chosen web font to each page head.
2. Replace the `font-family` on the `body` rule in `css/styles.css`.
3. Check heading spacing and line wrapping after the font swap.

## Page Content

Each page is self-contained. You can edit copy directly in the corresponding HTML file:

- Homepage: `index.html`
- Company story: `about.html`
- Wildlife content: `wildlife.html`
- Gallery content: `gallery.html`
- Booking page: `booking.html`
- Contact page: `contact.html`
- Pricing page: `pricing.html`
- FAQ page: `faq.html`

## Reusable Sections

The template uses repeatable components such as:

- `.feature-card`
- `.pricing-card`
- `.pricing-page-card`
- `.process-card`
- `.wildlife-card`
- `.gallery-card`
- `.testimonial-card`

Duplicate an existing card block when you want to add more content while keeping the styling consistent.

## Navigation

The primary page set is:

- `index.html`
- `about.html`
- `wildlife.html`
- `gallery.html`
- `booking.html`
- `contact.html`
- `pricing.html`
- `faq.html`

If you rename or remove a page, update the navigation on every HTML file.

## JavaScript Features

`js/main.js` controls:

- Mobile menu behavior
- Active nav state
- Animated bubbles and fish
- Hero slider behavior
- Ocean particle canvas
- Booking package auto-select
- Gallery filters
- Form redirect flow

If you disable a feature, remove both the markup and the related JavaScript hook so the template stays clean.

## SEO and Social Metadata

Each page contains:

- Title
- Description
- Canonical URL
- Open Graph metadata
- Theme color
- Manifest reference

Replace the placeholder `https://example.com/...` values with your live domain before launch.
