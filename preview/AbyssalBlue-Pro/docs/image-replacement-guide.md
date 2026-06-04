# Image Replacement Guide

## Fastest Replacement Method

The easiest way to replace images is to keep the same filenames.

Example:

Replace:

`images/hero-shark.jpg`

with your own file named:

`hero-shark.jpg`

This allows the template to continue working without editing any HTML.

## Where Images Are Stored

All current image assets live in the `images/` folder.

## Recommended Image Formats

Use:

- JPG for photographs
- PNG for transparent graphics
- SVG for logos and icons

Avoid uploading extremely large images unless required for quality.

## Current Included Files

- `hero-shark.jpg`
  Use: homepage hero slider, gallery, wildlife content
  Recommended replacement size: 1800 x 1200 px

- `coral-placeholder.jpg`
  Use: fixed background image, gallery, pricing split section, wildlife content
  Recommended replacement size: 1800 x 1200 px

- `diver-placeholder.jpg`
  Use: about page image, booking page split section, gallery, contact metadata image
  Recommended replacement size: 1800 x 1200 px

- `turtle-placeholder.jpg`
  Use: homepage slider, gallery, wildlife content, FAQ split section
  Recommended replacement size: 1800 x 1200 px

- `shipwreck-placeholder.jpg`
  Use: homepage slider, booking and gallery sections, wildlife content
  Recommended replacement size: 1800 x 1200 px

- `tropical-fish.jpg`
  Use: homepage hero slider and wildlife content
  Recommended replacement size: 1800 x 1200 px

- `logo.svg`
  Use: brand asset file included for logo replacement
  Recommended replacement size: vector SVG, square artboard

- `favicon.svg`
  Use: browser tab icon and manifest icon
  Recommended replacement size: vector SVG, simple readable shape

## Replacement Tips

### How to replace `hero-shark.jpg`

Save your new hero image as `images/hero-shark.jpg` to avoid editing the HTML.

### How to replace `coral-placeholder.jpg`

Replace the file directly if you want to preserve all existing references in the background and content sections.

### How to replace `diver-placeholder.jpg`

Use a high-resolution diver photo with space for cropping, since the image appears in multiple aspect ratios.

### How to replace `turtle-placeholder.jpg`

Choose an image with the subject clearly visible near the center so it crops well in cards and sliders.

### How to replace `shipwreck-placeholder.jpg`

Use a wide image with strong contrast so the shipwreck remains clear under overlays and dark gradients.

### How to replace `tropical-fish.jpg`

Use a colorful, well-lit reef image that still looks strong when cropped in the hero slider and wildlife cards.

### How to replace `logo.svg`

Replace the file with your own SVG logo. If you also want the inline SVG logo in the HTML changed, update the logo markup in each page header and footer.

### How to replace `favicon.svg`

Replace `images/favicon.svg` with a new SVG icon and keep the same filename unless you also update every HTML reference and the manifest entry.

## Performance Tips

For best loading speed:

- Compress images before uploading.
- Keep most images under 500 KB when possible.
- Use SVG for logos and icons.
- Test page speed after replacing images.

## Important

If you rename an image file, you must also update every HTML, CSS, and JavaScript reference that uses that file.

Keeping the original filenames is recommended.

## Best Practices

- Keep file sizes compressed for fast loading
- Export JPG photos at web-friendly quality
- Use SVG for logos and favicons when possible
- Test image crops on desktop and mobile
- Keep filenames the same unless you also update every related HTML reference
