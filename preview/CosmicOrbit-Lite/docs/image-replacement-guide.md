# Cosmic Orbit Lite Image Replacement Guide

## Overview

Cosmic Orbit Lite includes a small collection of brand assets that can be replaced with your own content.

Most images are stored in:

```text
images/
```

The easiest way to replace assets is to keep the existing filenames.

Doing so avoids the need to update image paths throughout the template.

---

# Included Images

Current image files:

```text
images/logo.svg
images/favicon.svg
images/planet.png
```

Notes:

* `logo.svg`, `favicon.svg`, and `planet.png` are used by default.

---

# Replace The Logo

Current logo:

```text
images/logo.svg
```

## Recommended Format

* SVG (recommended)
* PNG

## Easiest Method

Replace:

```text
logo.svg
```

with your own logo while keeping the filename unchanged.

No code edits required.

## Using A Different Filename

Update every logo reference inside:

```text
index.html
404.html
```

Example:

```html
<img src="images/new-logo.svg" alt="Company Logo">
```

---

# Replace The Favicon

Current favicon:

```text
images/favicon.svg
```

## Recommended Formats

* SVG
* PNG
* ICO

If the filename changes, update:

```text
index.html
404.html
site.webmanifest
```

to match the new file.

---

# Replace The Planet Graphic

Current file:

```text
images/planet.png
```

This graphic is used throughout the Cosmic Orbit Lite visual design.

## Recommended Specs

* PNG
* Transparent background preferred
* Square dimensions
* 1500px-3000px wide

Keeping the filename unchanged is recommended.

---

# Optional Supporting Images

This Lite package ships only the images used by the live website. If you add new supporting images for future sections, place them in the `images/` folder and update the related HTML paths.

## Recommended Sizes

* Hero-style images: 1920 x 1080
* Social sharing images: 1200 x 630

## Recommended Formats

* WebP
* JPG

For best performance, keep large images under 500 KB whenever possible.

---

# Open Graph Images

Social platforms use Open Graph images when links are shared.

Typical example:

```html
<meta property="og:image" content="https://example.com/images/social-preview.jpg">
```

Recommended size:

```text
1200 x 630
```

Update this image whenever your branding changes.

Platforms affected:

* Facebook
* LinkedIn
* X (Twitter)
* Discord
* Slack

---

# Image Optimization

Recommended formats:

### SVG

Best for:

* Logos
* Icons

### WebP

Best for:

* Hero images
* Section images
* Photography

### JPG

Best for:

* Large photographs

### PNG

Best for:

* Transparent graphics

---

# Compression Tools

Recommended tools:

* TinyPNG
* Squoosh
* ImageOptim

Avoid uploading unnecessarily large images.

---

# Alt Text Best Practices

Good example:

```html
<img src="images/stargazing-event.jpg"
     alt="Visitors enjoying a guided stargazing experience">
```

Poor example:

```html
<img src="images/image1.jpg"
     alt="image">
```

Use meaningful descriptions whenever an image communicates information.

Decorative images may use:

```html
alt=""
```

---

# Responsive Testing

After replacing images, test:

### Desktop

* Alignment
* Scaling
* Spacing

### Tablet

* Cropping
* Layout balance

### Mobile

* Image sizing
* Text overlap
* Loading speed

---

# Troubleshooting

## Image Does Not Appear

Verify:

* Filename matches exactly
* File exists in the images folder
* Path is correct
* Upload completed successfully

## Image Appears Distorted

Check:

* Width and height settings
* CSS object-fit rules
* Container dimensions

## Image Appears Blurry

Use a higher-resolution source image.

Recommended:

```text
Minimum 1920px width
```

for large hero graphics.

---

# Final Checklist

Before launch:

[ ] Logo replaced
[ ] Favicon replaced
[ ] Planet graphic replaced if needed
[ ] Open Graph image updated
[ ] Images optimized
[ ] Desktop layout tested
[ ] Tablet layout tested
[ ] Mobile layout tested
[ ] No broken image paths
[ ] Performance remains fast
