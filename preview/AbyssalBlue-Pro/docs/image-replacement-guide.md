# Abyssal Blue Pro Image Replacement Guide

This guide explains how to replace the included photography, branding assets, and icons used throughout Abyssal Blue Pro.

## Fastest Replacement Method

The easiest way to update the template is to keep the existing filenames.

Example:

Replace:

```txt
images/hero-shark.jpg
```

with your own image using the exact same filename.

This allows all existing HTML, CSS, and JavaScript references to continue working without modification.

## Image Directory

All image assets are stored in:

```txt
images/
```

## Recommended File Formats

Use:

* JPG for photography
* PNG for graphics requiring transparency
* SVG for logos and icons
* WebP for improved performance where supported

Avoid excessively large image files, as they may slow page loading.

## Included Image Assets

### Hero Shark

```txt
images/hero-shark.jpg
```

Used in:

* Homepage hero slider
* Gallery sections
* Wildlife content

Recommended size:

```txt
1800 × 1200 px
```

### Coral Image

```txt
images/coral-placeholder.jpg
```

Used in:

* Background sections
* Gallery content
* Pricing page
* Wildlife page

Recommended size:

```txt
1800 × 1200 px
```

### Diver Image

```txt
images/diver-placeholder.jpg
```

Used in:

* About page
* Booking page
* Gallery content
* Contact page previews

Recommended size:

```txt
1800 × 1200 px
```

### Turtle Image

```txt
images/turtle-placeholder.jpg
```

Used in:

* Homepage slider
* Wildlife content
* Gallery content
* FAQ sections

Recommended size:

```txt
1800 × 1200 px
```

### Shipwreck Image

```txt
images/shipwreck-placeholder.jpg
```

Used in:

* Homepage slider
* Booking page
* Wildlife content
* Gallery content

Recommended size:

```txt
1800 × 1200 px
```

### Tropical Fish Image

```txt
images/tropical-fish.jpg
```

Used in:

* Homepage slider
* Wildlife content

Recommended size:

```txt
1800 × 1200 px
```

## Branding Assets

### Logo

```txt
images/logo.svg
```

Used in:

* Header
* Footer
* Branding references

Recommended format:

```txt
SVG
```

For best results, use a square or horizontal vector logo.

### Favicon

```txt
images/favicon.svg
```

Used in:

* Browser tabs
* Bookmarks
* Web app manifest

Recommended format:

```txt
SVG
```

Keep the design simple and readable at small sizes.

## Image Replacement Tips

### Photography

When replacing photos:

* Use similar aspect ratios
* Use high-quality images
* Compress files before uploading
* Test image cropping on mobile devices

### Logos

When replacing logos:

* Prefer SVG format
* Avoid unnecessary detail
* Test visibility on dark backgrounds

### Favicons

When replacing favicons:

* Use simple shapes
* Avoid small text
* Verify visibility in browser tabs

## Performance Recommendations

For best performance:

* Compress images before deployment
* Keep most images under 500 KB where possible
* Use SVG for logos and icons
* Remove unused image assets
* Test loading speed after replacement

## Important

If you rename any image file, you must also update every reference to that file throughout:

* HTML
* CSS
* JavaScript

Keeping the original filenames is the recommended workflow.

## Before Launch

Before publishing:

* Replace all demo photography
* Replace the logo
* Replace the favicon
* Verify image paths
* Verify image alt text
* Test desktop layouts
* Test tablet layouts
* Test mobile layouts
* Check page loading performance

Following these recommendations will ensure Abyssal Blue Pro remains visually consistent and optimized after customization.
