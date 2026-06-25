# Rain Blossom Lite

# Image & Video Replacement Guide

This guide explains how to replace the demo images and videos included with the **Rain Blossom Lite** website template.

---

# Images Folder

All website images are located in:

```text
assets/images/
```

Simply replace the existing files with your own.

You can:

* Keep the same filenames (recommended)

or

* Rename the files and update the image paths inside **index.html**, **thank-you.html**, or **404.html**.

---

# Current Image List

Replace the following demo images:

```text
logo.jpg
favicon.png
social-preview.jpg

hero-poster.jpg

ceremony-garden.jpg
reception-hall.jpg
garden-lounge.jpg

gallery-01.jpg
gallery-02.jpg
gallery-03.jpg
gallery-04.jpg
gallery-05.jpg
gallery-06.jpg
```

---

# Recommended Image Sizes

## Logo

```text
300 × 300 px
PNG with transparent background (recommended)
```

---

## Favicon

```text
32 × 32 px
192 × 192 px
512 × 512 px
```

---

## Social Preview Image

```text
1200 × 630 px
```

---

## Hero Poster

```text
1920 × 1080 px
```

---

## Gallery Images

```text
1200 × 800 px

or

1600 × 1000 px
```

---

## Feature Images

```text
1200 × 800 px
```

---

# Recommended Image Formats

### Photos

```text
JPG
```

### Logos

```text
PNG
```

### Favicons

```text
PNG
```

### Modern Websites

```text
WEBP
```

---

# Replacing Images

Example:

Current:

```text
assets/images/gallery-01.jpg
```

Replace it with your own image while keeping the same filename.

No HTML changes are required.

---

# Hero Video

The homepage uses a full-screen background video.

Location:

```text
assets/videos/
```

Current file:

```text
rain-blossom-hero.mp4
```

Replace this file with your own.

Keeping the same filename means no HTML changes are necessary.

---

# Recommended Video Settings

### Format

```text
MP4
```

### Resolution

```text
1920 × 1080
```

### Length

```text
10–30 seconds
```

### Frame Rate

```text
24–30 FPS
```

### Audio

```text
Muted
```

### Loop

```text
Seamless looping recommended
```

---

# Recommended Video Size

Keep the hero video under:

```text
20 MB
```

Smaller videos load faster and improve website performance.

---

# Hero Poster Image

The poster image is displayed while the video is loading.

Current file:

```text
assets/images/hero-poster.jpg
```

For the best appearance, use a still frame from your hero video.

---

# Updating Image Paths

If you rename an image, update the HTML.

Example:

Current:

```html
<img src="assets/images/gallery-01.jpg" alt="Gallery Image">
```

New:

```html
<img src="assets/images/my-photo.jpg" alt="Gallery Image">
```

---

# Updating the Hero Video

Current:

```html
<source
src="assets/videos/rain-blossom-hero.mp4"
type="video/mp4">
```

New:

```html
<source
src="assets/videos/my-hero-video.mp4"
type="video/mp4">
```

---

# Image Optimization Tips

Before uploading images:

✓ Resize large photos

✓ Compress images

✓ Use WEBP when appropriate

✓ Keep image dimensions reasonable

✓ Avoid uploading large images directly from a phone

---

# Free Image Compression

**TinyPNG**

https://tinypng.com

**Squoosh**

https://squoosh.app

---

# Free Video Compression

**HandBrake**

https://handbrake.fr

---

# Before Publishing

✔ Replace the logo

✔ Replace the favicon

✔ Replace all demo images

✔ Replace the hero video

✔ Replace the hero poster

✔ Update the social preview image

✔ Test image loading on desktop, tablet, and mobile

✔ Verify all image and video paths are correct

---

# Need Help?

For customization or support, please contact:

**Web Dev Lady**

Website:

https://webdevlady.netlify.app
