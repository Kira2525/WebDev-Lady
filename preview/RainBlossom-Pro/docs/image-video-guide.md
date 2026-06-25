# Rain Blossom
# Image & Video Replacement Guide

This guide explains how to replace the demo images and videos included with the Rain Blossom website template.

---

# Images Folder

All website images are located in:

```
assets/images/
```

Simply replace the existing files with your own images.

You can:

• Keep the same filenames (recommended)

OR

• Change the filenames and update the image paths inside the HTML files.

---

# Current Image List

Replace the following demo images:

```
logo.jpg
favicon.png
favicon.svg
social-preview.jpg

hero-poster.jpg

about-estate.jpg

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

Logo

```
300 × 300 px
PNG with transparent background
```

---

Favicon

```
32 × 32 px

192 × 192 px

512 × 512 px
```

---

Social Preview

```
1200 × 630 px
```

---

Hero Poster

```
1920 × 1080 px
```

---

Gallery Images

```
1200 × 800 px

or

1600 × 1000 px
```

---

Feature Images

```
1200 × 800 px
```

---

# Best Image Formats

Photos

```
JPG
```

Logos

```
PNG
```

Icons

```
SVG
```

Modern Websites

```
WEBP
```

---

# Replacing Images

Example

Current:

```
assets/images/gallery-01.jpg
```

Replace it with your own image while keeping the same filename.

No HTML changes are required.

---

# Hero Video

The website uses a background video.

Location:

```
assets/videos/
```

Current file:

```
rain-blossom-hero.mp4
```

Replace this file with your own.

Keeping the same filename means no HTML changes are necessary.

---

# Recommended Video Settings

Format

```
MP4
```

Resolution

```
1920 × 1080
```

Length

```
10–30 seconds
```

Frame Rate

```
24–30 FPS
```

Muted

```
Yes
```

Loop Friendly

```
Yes
```

---

# File Size Recommendation

Keep your hero video under:

```
20 MB
```

Smaller videos load much faster.

---

# Hero Poster Image

The poster image appears while the video loads.

Current file:

```
assets/images/hero-poster.jpg
```

Replace this with a still frame from your new video for the best visual experience.

---

# Updating Image Paths

If you rename an image, update the HTML.

Example:

Current:

```html
<img src="assets/images/gallery-01.jpg">
```

New:

```html
<img src="assets/images/my-wedding-photo.jpg">
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
src="assets/videos/my-video.mp4"
type="video/mp4">
```

---

# Image Optimization Tips

Before uploading images:

✓ Resize large photos

✓ Compress images

✓ Use WEBP when possible

✓ Keep image dimensions reasonable

✓ Avoid uploading images directly from a phone without resizing

---

# Free Image Compression

TinyPNG

https://tinypng.com

Squoosh

https://squoosh.app

---

# Free Video Compression

HandBrake

https://handbrake.fr

---

# Before Publishing

✔ Replace all demo images

✔ Replace the logo

✔ Replace the favicon

✔ Replace the hero video

✔ Replace the hero poster

✔ Update the social preview image

✔ Test image loading on desktop and mobile

✔ Verify all image paths are correct

---

# Need Help?

For customization or support, please contact:

**Web Dev Lady**

Website:

https://webdevlady.netlify.app