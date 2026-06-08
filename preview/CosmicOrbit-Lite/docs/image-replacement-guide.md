# Cosmic Orbit Lite Image Replacement Guide

## Overview

Cosmic Orbit Lite includes a small collection of brand assets, hero artwork, and section imagery that can be replaced with your own content.

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
images/hero-image.jpg
images/section-image-1.jpg
images/section-image-2.jpg
images/section-image-3.jpg
images/section-image-4.jpg
```

Depending on future updates, additional images may be included.

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
* 1500px–3000px wide

Keeping the filename unchanged is recommended.

---

# Replace The Hero Image

Current file:

```text
images/hero-image.jpg
```

Recommended size:

```text
1920 × 1080
```

Recommended formats:

* WebP
* JPG

For best performance:

```text
Under 500 KB
```

whenever possible.

---

# Replace Section Images

Current files:

```text
images/section-image-1.jpg
images/section-image-2.jpg
images/section-image-3.jpg
images/section-image-4.jpg
```

These images support the content sections throughout the homepage.

## Best Practices

* Maintain similar aspect ratios
* Use high-quality photography
* Compress files before publishing
* Keep visual style consistent

---

# Open Graph Images

Social platforms use Open Graph images when links are shared.

Typical example:

```html
<meta property="og:image" content="https://yourdomain.com/images/social-preview.jpg">
```

Recommended size:

```text
1200 × 630
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
<img src="images/hero-image.jpg"
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

---

## Image Appears Distorted

Check:

* Width and height settings
* CSS object-fit rules
* Container dimensions

---

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

✓ Logo replaced

✓ Favicon replaced

✓ Hero image replaced

✓ Section images replaced

✓ Open Graph image updated

✓ Images optimized

✓ Desktop layout tested

✓ Tablet layout tested

✓ Mobile layout tested

✓ No broken image paths

✓ Performance remains fast
