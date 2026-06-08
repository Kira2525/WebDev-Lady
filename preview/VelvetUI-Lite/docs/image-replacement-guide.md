# VelvetUI Lite Image Replacement Guide

VelvetUI Lite is primarily a code-driven website template with a minimal asset structure, making it fast and easy to customize.

This guide explains how to replace logos, favicons, social sharing images, and any additional imagery you choose to add.

## Included Brand Assets

VelvetUI Lite includes the following branding files:

```txt
assets/velvetui-mark.svg
assets/velvetui-favicon.svg
assets/velvetui-og.svg
```

These files are used throughout the template for:

* Header branding
* Footer branding
* Browser favicon
* Social sharing previews
* Open Graph metadata
* Mobile app icons

## Replacing the Brand Mark

To replace the logo:

1. Add your new logo file to:

```txt
assets/
```

2. Update the image references in:

```txt
index.html
thank-you.html
404.html
```

3. Verify the logo displays correctly on desktop and mobile devices.

For best results, use:

```txt
SVG
```

for logos and icons.

## Replacing the Favicon

Replace:

```txt
assets/velvetui-favicon.svg
```

or update the favicon references in the HTML files.

After replacement, verify:

* Browser tab icon
* Bookmarks icon
* Mobile shortcut icon

## Replacing the Social Sharing Image

Replace:

```txt
assets/velvetui-og.svg
```

or update the Open Graph image references.

Check the following pages:

```txt
index.html
thank-you.html
404.html
```

Update:

```txt
og:image
twitter:image
```

to point to your new image.

## Recommended Social Preview Size

For best social sharing results:

```txt
1200 × 630 pixels
```

This size works well for:

* Facebook
* LinkedIn
* X
* Discord

## Adding Your Own Images

VelvetUI Lite does not require photography to function.

If you choose to add custom images:

1. Place them in:

```txt
assets/
```

or a custom image folder of your choice.

2. Update the image paths in:

```txt
index.html
```

3. Keep existing layout containers and CSS classes intact to preserve spacing and responsiveness.

## Recommended Formats

### Logos & Icons

```txt
SVG
```

### Photography

```txt
WebP
JPG
```

### Social Sharing Images

```txt
PNG
WebP
JPG
```

## Image Optimization Tips

Before uploading images:

* Compress large files
* Use modern formats when possible
* Avoid excessively large dimensions
* Test loading speed on mobile devices

Optimized images improve:

* Performance
* SEO
* Mobile experience
* Core Web Vitals

## Before Launch

Before publishing:

* Replace the logo
* Replace the favicon
* Replace the Open Graph image
* Verify image paths
* Test social sharing previews
* Check mobile responsiveness
* Check for missing images

Once complete, VelvetUI Lite is ready for deployment with your own branding and media assets.
