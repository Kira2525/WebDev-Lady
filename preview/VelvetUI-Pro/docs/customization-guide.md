# Customization Guide

## Update the animated hero words

Open `js/script.js` and edit the shared array:

```js
const words = ["CREATE", "BUILD", "DESIGN", "LAUNCH", "GROW"];
```

These words are used by the animated diamond text system on pages that include the hero canvas.

## Change global styling

Open `css/styles.css` and start with the variables in `:root`:

- `--bg`
- `--primary`
- `--primary-soft`
- `--secondary-soft`
- `--text`
- `--muted`

These variables control most of the template color system.

## Edit shared navigation

Each HTML page contains the same header and footer navigation.
If you rename a page or remove one, update the nav links everywhere so they stay consistent.

## Customize the page types

- `index.html`: homepage and section previews
- `about.html`: mission, audience, design approach, and stat cards
- `features.html`: detailed feature explanations
- `pricing.html`: demo pricing tiers and comparison notes
- `showcase.html`: use-case and demo cards
- `faq.html`: reusable customer questions
- `contact.html`: inquiry form and contact sidebar
- `thank-you.html`: confirmation page
- `404.html`: not-found page

## Replace placeholder content

The template ships with demo copy for:

- pricing values
- testimonials
- FAQ answers
- contact details
- showcase descriptions

Update these before launch so the template matches the final brand or offer.

## Optional cleanup

If your final site does not need all pages, you can remove them. Just make sure to:

1. remove the matching nav links
2. update footer navigation
3. confirm no remaining buttons point to deleted pages
