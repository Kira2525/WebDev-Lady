# Cosmic Orbit Pro Image Replacement Guide

## Overview

Cosmic Orbit Pro includes a lightweight starter image set that can be replaced with your own branding and media.

Most image assets are stored in:

```text
images/
```

You can replace any image without modifying the template structure.

The easiest method is to keep the existing filenames.

---

# Included Assets

The template includes:

```text
images/logo.svg
images/favicon.svg
images/planet.png
```

---

# Replace The Logo

Current logo:

```text
images/logo.svg
```

## Recommended Formats

* SVG (recommended)
* PNG

## Easiest Method

Replace:

```text
logo.svg
```

with your own file using the same filename.

No code changes are required.

## Different Filename

If you use a new filename:

```html
<img src="images/my-logo.svg" alt="Company Logo">
```

update every logo reference across all HTML pages.

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

## Easiest Method

Keep:

```text
favicon.svg
```

and replace the file.

No HTML changes required.

## Different Filename

Update:

```html
<link rel="icon" href="images/favicon.svg">
```

in every page.

Also update:

```text
site.webmanifest
```

if icon filenames change.

---

# Replace The Planet Graphic

Current file:

```text
images/planet.png
```

This graphic is used throughout the Cosmic Orbit Pro design system.

## Recommended Specs

* PNG format
* Transparent background preferred
* Square dimensions
* 1500px–3000px wide

## Easiest Method

Replace:

```text
planet.png
```

while keeping the same filename.

No code changes required.

---

# Add New Images

## Step 1

Place the image into:

```text
images/
```

## Step 2

Reference the image:

```html
<img src="images/my-image.webp" alt="Description">
```

## Step 3

Save and refresh the browser.

---

# Hero Images

If you add hero photography or background graphics:

Recommended size:

```text
1920 × 1080
```

Recommended formats:

* WebP
* JPG
* PNG

Try to keep hero images under:

```text
500 KB
```

for faster loading.

---

# Content Images

For cards, features, and content sections:

Recommended size:

```text
1200 × 800
```

Recommended formats:

* WebP
* JPG

Keep files below:

```text
250 KB
```

whenever possible.

---

# Social Sharing Images

Social platforms use Open Graph images.

Example:

```html
<meta property="og:image" content="https://yourdomain.com/images/social-preview.jpg">
```

Recommended size:

```text
1200 × 630
```

Platforms affected:

* Facebook
* LinkedIn
* X (Twitter)
* Discord
* Slack

Update Open Graph images whenever branding changes.

---

# Image Optimization

For best performance:

## Preferred Format

```text
.webp
```

Benefits:

* Smaller file sizes
* Faster loading
* Better performance scores

## Compression Tools

Recommended tools:

* TinyPNG
* Squoosh
* ImageOptim

Avoid uploading large multi-megabyte images.

---

# Alt Text Best Practices

Good Example:

```html
<img src="images/orbit-experience.webp"
     alt="Luxury space tourism experience">
```

Poor Example:

```html
<img src="images/photo1.webp"
     alt="image">
```

Use clear descriptions whenever images communicate content.

For decorative graphics:

```html
alt=""
```

is acceptable.

---

# Responsive Testing

After replacing images, test:

## Desktop

Check:

* Alignment
* Scaling
* Spacing

## Tablet

Check:

* Layout consistency
* Cropping
* Visual balance

## Mobile

Check:

* Loading speed
* Text overlap
* Image sizing

---

# Troubleshooting

## Image Does Not Appear

Verify:

* Filename matches exactly
* File was uploaded correctly
* Path is correct
* Image exists in the images folder

---

## Image Appears Distorted

Check:

* Width and height settings
* CSS object-fit rules
* Container sizing

---

## Background Looks Blurry

Use a larger source image.

Recommended:

```text
Minimum 1920px width
```

for full-width backgrounds.

---

# Final Checklist

Before launch:

✓ Logo replaced

✓ Favicon replaced

✓ Planet graphic replaced (optional)

✓ Open Graph image updated

✓ Images optimized

✓ Alt text reviewed

✓ Desktop layout tested

✓ Tablet layout tested

✓ Mobile layout tested

✓ No broken image paths

✓ Site performance remains fast
