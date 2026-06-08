# VelvetUI Pro Image Replacement Guide

VelvetUI Pro includes professionally optimized demo imagery and branding assets to help showcase the template immediately after installation.

This guide explains how to replace images, logos, favicons, and social preview graphics when customizing the template.

## Brand Assets

The following files control the template branding:

```txt
assets/img/velvetui-mark.svg
assets/img/velvetui-favicon.svg
assets/img/velvetui-og.svg
```

These files are used throughout the template for:

* Header branding
* Footer branding
* Browser favicon
* Social sharing previews
* Open Graph metadata
* Apple touch icons

For the fastest rebranding workflow, replace these files while keeping the same filenames.

After replacing them, verify:

* Browser tab icon
* Mobile home screen icon
* Social media previews
* Footer logo
* Header logo

## Demo Editorial Photography

VelvetUI Pro includes a complete set of editorial images used throughout the Velvet Studio demonstration website.

Current image files:

```txt
assets/img/editorial/palisade-residence-hero.jpg
assets/img/editorial/juniper-row-lounge.jpg
assets/img/editorial/marlowe-suite.jpg
assets/img/editorial/casa-verde-kitchen.jpg
assets/img/editorial/atlas-house-dining.jpg
```

These images appear throughout:

* Home page sections
* Portfolio page
* Feature sections
* Storytelling content blocks

The easiest replacement method is to keep the existing filenames and overwrite the files with your own images.

No HTML edits are required when using this approach.

## Included SVG Alternatives

Original concept artwork is also included as SVG files:

```txt
assets/img/editorial/palisade-residence-hero.svg
assets/img/editorial/juniper-row-lounge.svg
assets/img/editorial/marlowe-suite.svg
assets/img/editorial/casa-verde-kitchen.svg
assets/img/editorial/atlas-house-dining.svg
```

You may switch between JPG and SVG versions depending on your project requirements.

## Recommended Image Formats

### Photography

Recommended formats:

```txt
WebP
JPG
```

Best for:

* Portfolio images
* Hero photography
* Interior photography
* Product photography

### Logos & Graphics

Recommended format:

```txt
SVG
```

Best for:

* Logos
* Icons
* Illustrations
* Branding graphics

## Best Practices

When replacing images:

* Keep the original filenames whenever possible.
* Use similar aspect ratios.
* Compress images before uploading.
* Avoid excessively large file sizes.
* Verify images display correctly on mobile devices.
* Update image alt text when image subjects change.

## Recommended Export Sizes

### Hero Images

```txt
1600 × 1900
```

Suitable for:

* Main hero sections
* Featured portfolio content

### Wide Project Images

```txt
1600 × 1100
```

Suitable for:

* Portfolio galleries
* Showcase sections
* Case studies

### Portrait Images

```txt
1200 × 1500
```

Suitable for:

* Team photos
* Studio photography
* Editorial content

### Social Sharing Images

```txt
1200 × 630
```

Suitable for:

* Open Graph previews
* Facebook shares
* LinkedIn shares
* X previews

## Updating Alt Text

Whenever you replace an image, update the corresponding HTML alt text.

Example:

```html
<img
  src="assets/img/editorial/project.jpg"
  alt="Luxury interior design project"
/>
```

Accurate alt text improves:

* Accessibility
* SEO
* Screen reader support

## Before Launch

Before publishing your website:

* Replace any demo photography you do not have permission to use.
* Verify all images load correctly.
* Check desktop, tablet, and mobile layouts.
* Verify Open Graph images display correctly.
* Confirm logos and favicons have been updated.
* Check for broken image paths.
* Optimize image sizes for performance.

Following these recommendations will help maintain the visual quality and performance of VelvetUI Pro after customization.
