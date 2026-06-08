# WorldView Global Lite Image Replacement Guide

## Overview

WorldView Global Lite stores all visual assets inside the:

```text
assets/
```

folder.

Replacing images is simple:

1. Add your new image to the `assets` folder.
2. Keep the existing filename for the easiest replacement.
3. Or update the file path wherever the image is referenced.

---

# Asset Folder Structure

Current assets:

```text
assets/
├── logo-worldview.svg
├── favicon.svg
├── earth-realistic.png
```

You may add additional files as needed.

Example:

```text
assets/
├── team-photo.webp
├── office-image.webp
├── service-image.webp
├── hero-image.webp
```

---

# Replace The Logo

Current logo:

```text
assets/logo-worldview.svg
```

## Recommended Method

Replace the existing file while keeping the same filename:

```text
logo-worldview.svg
```

No HTML changes are required.

## Alternative Method

Use a different filename and update the HTML.

Example:

```html
<img src="assets/new-logo.svg" alt="Company Logo">
```

Update the logo reference in:

```text
index.html
thank-you.html
404.html
```

---

# Replace The Favicon

Current favicon:

```text
assets/favicon.svg
```

## Recommended Method

Replace the file while keeping the filename:

```text
favicon.svg
```

No code changes required.

## Alternative Method

If using a new filename:

```html
<link rel="icon" href="assets/new-favicon.svg">
```

Update every HTML page.

Also review:

```text
site.webmanifest
```

if custom icons are listed there.

---

# Replace The Earth Background

The Earth image is used by the animated background.

Current image:

```text
assets/earth-realistic.png
```

Current CSS:

```css
.earth-image {
  background: url("../assets/earth-realistic.png")
              center center / cover no-repeat;
}
```

Located in:

```text
css/styles.css
```

## Recommended Size

```text
2000px – 4000px wide
```

Large images prevent blurriness on high-resolution displays.

## Recommended Format

```text
WebP
PNG
```

Example:

```css
.earth-image {
  background: url("../assets/earth.webp")
              center center / cover no-repeat;
}
```

---

# Add New Content Images

You can add additional images anywhere in the site.

## Step 1

Add the image:

```text
assets/team-photo.webp
```

## Step 2

Reference it in HTML:

```html
<img
  src="assets/team-photo.webp"
  alt="Global consulting team meeting">
```

## Step 3

Verify:

* Image loads correctly
* Layout remains intact
* Mobile layout still works

---

# Recommended Image Sizes

## Logos

```text
SVG preferred
```

Benefits:

* Sharp at all sizes
* Small file size
* Scales perfectly

---

## Favicons

```text
SVG
512×512 PNG
```

---

## Hero Images

```text
1920px to 2560px wide
```

Recommended format:

```text
WebP
```

---

## Content Images

```text
1200px to 1600px wide
```

Recommended format:

```text
WebP
```

---

## Background Images

```text
2000px to 4000px wide
```

Recommended format:

```text
WebP
PNG
```

---

# Recommended File Formats

## SVG

Best for:

* Logos
* Icons
* Simple graphics

Advantages:

* Infinite scaling
* Tiny file sizes
* Crisp rendering

---

## WebP

Best for:

* Most website images
* Photos
* Hero images

Advantages:

* Excellent compression
* Small file sizes
* Fast loading

---

## PNG

Best for:

* Transparent graphics
* Detailed illustrations

Advantages:

* Transparency support
* High quality

Disadvantages:

* Larger file sizes

---

## JPG

Best for:

* Large photographs

Advantages:

* Widely supported

Disadvantages:

* Larger than WebP
* No transparency

---

# Image Optimization Tips

Before uploading:

### Resize Images

Avoid uploading:

```text
8000px images
```

when:

```text
1600px images
```

are sufficient.

### Compress Images

Recommended tools:

* TinyPNG
* Squoosh
* ImageOptim

### Prefer WebP

WebP often reduces file size by:

```text
25% to 80%
```

compared to JPG or PNG.

---

# Alt Text Guidelines

Use meaningful alt text when an image communicates information.

Good example:

```html
<img
  src="assets/team-photo.webp"
  alt="International consulting team meeting">
```

Poor example:

```html
<img
  src="assets/team-photo.webp"
  alt="image">
```

For decorative images:

```html
<img
  src="assets/decoration.webp"
  alt="">
```

---

# Naming Recommendations

Use simple filenames.

Good:

```text
team-photo.webp
hero-image.webp
office-interior.webp
earth.webp
```

Avoid:

```text
IMG_847583_FINAL_FINAL_v2.png
```

Simple names are easier to maintain.

---

# Troubleshooting

## Image Not Showing

Check:

```text
File exists
Path is correct
Filename matches exactly
```

Remember:

```text
earth.webp
```

and

```text
Earth.webp
```

are different filenames on many servers.

---

## Image Looks Blurry

Use:

```text
Larger image
Higher resolution
WebP format
```

---

## Image Breaks Layout

Try:

```css
img {
  max-width: 100%;
  height: auto;
}
```

or reduce image dimensions.

---

## Image Loads Slowly

Use:

```text
WebP
Compression
Smaller dimensions
```

before uploading.

---

# Final Checklist

After replacing images:

✓ Images load correctly

✓ Paths are correct

✓ Desktop layout looks good

✓ Tablet layout looks good

✓ Mobile layout looks good

✓ No stretching or distortion

✓ File sizes are optimized

✓ Alt text added where needed

✓ Logo displays correctly

✓ Favicon displays correctly

✓ Earth background displays correctly

✓ Page performance remains fast

Your new images are now ready for production use.
