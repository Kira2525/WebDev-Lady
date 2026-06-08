# WorldView Global Pro Image Replacement Guide

## Overview

WorldView Global Pro is designed so that images can be replaced without modifying large portions of the code.

Most visual assets are stored inside the:

```text
assets/
```

folder.

Keeping filenames the same is the easiest way to swap assets without updating HTML or CSS.

---

# Current Assets

Primary assets included with the template:

```text
assets/logo-worldview.svg
assets/favicon.svg
assets/earth-realistic.png
```

Depending on your version of the template, additional media files may also exist inside the assets folder.

---

# Recommended Folder Structure

For larger projects, consider organizing images into folders:

```text
assets/
├── logos/
├── icons/
├── backgrounds/
├── photos/
├── social/
└── earth-realistic.png
```

If you reorganize files, remember to update all corresponding paths in HTML and CSS.

---

# Replace The Logo

### Recommended Format

SVG is recommended for the best scaling quality.

Alternative formats:

* SVG
* PNG

### Replace Method

1. Create or export your logo.
2. Save it into the assets folder.
3. Reuse the existing filename:

```text
logo-worldview.svg
```

4. Refresh the website.

No code changes are usually required when reusing the filename.

### Using A Different Filename

If you use another filename:

```html
<img src="assets/new-logo.svg" alt="Company Logo">
```

Update every logo reference across all HTML pages.

---

# Replace The Favicon

Current favicon:

```text
assets/favicon.svg
```

### Recommended Formats

* SVG
* PNG
* ICO

### Replace Method

The simplest approach is to reuse:

```text
favicon.svg
```

If using another filename, update:

```html
<link rel="icon" href="assets/favicon.svg">
```

on every page.

Also update:

```text
site.webmanifest
```

if icon filenames change.

---

# Replace The Earth Background

The rotating Earth uses:

```text
assets/earth-realistic.png
```

and is referenced by shared CSS.

### Simplest Method

Replace the file and keep the same name:

```text
earth-realistic.png
```

No code changes required.

### Using Another Filename

Update the background image path inside:

```text
css/styles.css
```

Look for:

```css
.earth-image
```

and replace the image URL.

### Recommended Earth Image Specs

* Square image
* 1500px–3000px
* Transparent background preferred
* PNG format

---

# Add New Images

### Step 1

Place the image into:

```text
assets/
```

or one of your image subfolders.

### Step 2

Reference the image:

```html
<img src="assets/my-image.webp" alt="Description">
```

### Step 3

Save and refresh the browser.

---

# Replace Hero Images

If you add hero section photography:

Recommended size:

```text
1920 × 1080
```

Formats:

* WebP (recommended)
* JPG
* PNG

Try to keep hero images under:

```text
500 KB
```

for faster loading.

---

# Replace Card Images

For service cards, feature cards, or content blocks:

Recommended size:

```text
1200 × 800
```

Formats:

* WebP
* JPG

Try to keep files below:

```text
250 KB
```

when possible.

---

# Social Sharing Images

Social platforms use Open Graph images.

Typical location:

```html
<meta property="og:image" content="https://yourdomain.com/assets/social-preview.jpg">
```

Recommended size:

```text
1200 × 630
```

Update these tags on every page if you use custom branding.

Platforms affected:

* Facebook
* LinkedIn
* X (Twitter)
* Discord
* Slack

---

# Image Optimization

For best performance:

### Use WebP When Possible

Recommended:

```text
.webp
```

Benefits:

* Smaller file sizes
* Faster loading
* Better performance scores

### Compress Large Images

Tools:

* TinyPNG
* Squoosh
* ImageOptim

Avoid uploading multi-megabyte images unless necessary.

---

# Alt Text Best Practices

Use meaningful alt text for content images.

Good Example:

```html
<img src="assets/global-intelligence-dashboard.webp"
     alt="Analysts reviewing global intelligence data">
```

Poor Example:

```html
<img src="assets/image1.webp"
     alt="image">
```

### Decorative Images

If an image is purely decorative:

```html
alt=""
```

is acceptable.

---

# Responsive Image Checks

After replacing any image:

### Desktop

Check:

* Alignment
* Cropping
* Scaling

### Tablet

Check:

* Spacing
* Overflow
* Readability

### Mobile

Check:

* Loading speed
* Image sizing
* Text overlap

---

# Troubleshooting

### Image Doesn't Appear

Verify:

* Filename matches exactly
* File exists in the correct folder
* Path is correct
* Upload completed successfully

### Image Appears Stretched

Check:

* Width and height settings
* Object-fit rules
* Container dimensions

### Background Looks Pixelated

Use a larger source image.

Recommended:

```text
Minimum 1920px width
```

for full-width backgrounds.

---

# Final Checklist

Before publishing:

✓ Logo replaced

✓ Favicon replaced

✓ Earth image replaced (if desired)

✓ Open Graph image updated

✓ Hero images optimized

✓ Alt text reviewed

✓ Mobile layout tested

✓ Tablet layout tested

✓ Desktop layout tested

✓ No broken image links

✓ Performance remains fast
