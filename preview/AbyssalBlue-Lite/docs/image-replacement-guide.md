# Abyssal Blue Lite Image Replacement Guide

This guide explains how to replace the included photography, logo, and favicon used throughout Abyssal Blue Lite.

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
* PNG for transparent graphics
* SVG for logos and icons
* WebP for improved performance when supported

Avoid excessively large image files, as they can slow page loading.

## Included Image Assets

### Hero Shark

```txt
images/hero-shark.jpg
```

Used in:

* Homepage hero section
* Featured imagery

Recommended size:

```txt
1800 × 1200 px
```

### Coral Background

```txt
images/coral-placeholder.jpg
```

Used in:

* Background imagery
* Decorative ocean sections

Recommended size:

```txt
1800 × 1200 px
```

### Diver Image

```txt
images/diver-placeholder.jpg
```

Used in:

* About section
* Supporting content sections

Recommended size:

```txt
1800 × 1200 px
```

### Shipwreck Image

```txt
images/shipwreck-placeholder.jpg
```

Used in:

* Alternate featured imagery
* Showcase content

Recommended size:

```txt
1800 × 1200 px
```

### Tropical Fish

```txt
images/tropical-fish.jpg
```

Used in:

* Supporting content
* Featured imagery

Recommended size:

```txt
1800 × 1200 px
```

### Turtle Image

```txt
images/turtle-placeholder.jpg
```

Used in:

* Supporting content
* Featured imagery

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
* Branding elements

Recommended format:

```txt
SVG
```

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

## Performance Recommendations

For best performance:

* Compress images before deployment
* Keep most images under 500 KB where possible
* Use SVG for logos and icons
* Test image quality on desktop and mobile devices
* Remove unused image assets

## Important

If you rename any image file, you must also update every reference throughout:

* HTML
* CSS
* JavaScript
* Metadata
* Manifest files

Keeping the original filenames is the recommended workflow.

## Before Launch

Before publishing:

* Replace demo photography
* Replace the logo
* Replace the favicon
* Verify image paths
* Verify image quality
* Test desktop layouts
* Test tablet layouts
* Test mobile layouts
* Check loading performance

Following these recommendations will help maintain the design quality and performance of Abyssal Blue Lite after customization.
