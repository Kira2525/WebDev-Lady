# WorldView Pro Customization Guide

## Logo Replacement

1. Replace `assets/logo-worldview.svg` with your own logo asset.
2. Keep the same filename if you want to avoid editing every page reference.
3. If you change the filename, update the `<img src="...">` path in all HTML pages.

## Color Changes

Primary color tokens live in `css/styles.css` inside the `:root` block.

Key values to adjust:

- `--blue-1`
- `--blue-2`
- `--cyan`
- `--lime`
- `--bg`
- `--bg-panel`

Adjust those variables first before editing individual components.

## Text Editing

All copy is written directly into the HTML page files. Open the page you want to change and edit:

- Headlines
- Paragraphs
- CTA labels
- FAQ answers
- Pricing details

## Image Replacement

WorldView Pro uses CSS-driven visuals for most atmospheric effects, so there are very few image dependencies.

For brand assets:

- Replace `assets/logo-worldview.svg`
- Replace `assets/favicon.svg`

If you add screenshots or photography later, place them inside `assets/` and reference them from the HTML.

## Navigation Editing

The navigation appears in both the desktop and mobile menu blocks on every page.

If you add or remove a page:

1. Update the desktop navigation links.
2. Update the mobile navigation links.
3. Add the matching `data-page-link` value for active-page highlighting if needed.

## Contact Form Editing

The form lives in `contact.html`.

Common changes:

- Update the topic options in the `<select>`
- Change the form action or integration provider
- Add extra fields for budget, timeline, or project type
- Rewrite the helper text below the form

If you add new routing logic, update `js/script.js` where contact intent is handled.

## Button Editing

Buttons are standard anchor links or the main form submit button.

Common updates:

- Change button text directly in the HTML
- Update the destination `href`
- Use `button--primary` for main CTAs
- Use `button--secondary` for secondary actions

## Adding Pages

1. Duplicate an existing page with a similar layout.
2. Update the `<title>`, meta description, and `body data-page` value.
3. Keep the shared asset, CSS, and script references.
4. Add the new page to both desktop and mobile navigation across the site.
5. Add footer links if the page should be globally discoverable.
