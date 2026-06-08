# Abyssal Blue Lite Customization Guide

Abyssal Blue Lite is designed to be easy to customize without any build tools or frameworks.

This guide covers the most common changes customers make before launching a live website.

## Main Editing Areas

### Content

Edit the HTML files to update:

* Business name
* Hero headlines
* Call-to-action text
* Service descriptions
* About content
* Feature sections
* Gallery content
* FAQ answers
* Contact information
* Footer content
* Social media links

Primary content files:

```txt
index.html
thank-you.html
404.html
```

## Styles

### Global Styling

Edit:

```txt
css/styles.css
```

for:

* Colors
* Typography
* Buttons
* Forms
* Shadows
* Border radius
* Section spacing
* Card styling
* Footer styling

### Tablet Layout

Edit:

```txt
css/tablet.css
```

for:

* Tablet layouts
* Medium-screen spacing
* Two-column section behavior
* Tablet-specific adjustments

### Mobile Layout

Edit:

```txt
css/mobile.css
```

for:

* Mobile navigation
* Stacked layouts
* Mobile spacing
* Small-screen adjustments

## JavaScript

Edit:

```txt
js/main.js
```

if you want to customize:

* Ocean particle effects
* Bubble animations
* Fish animations
* Hero slider timing
* Mobile menu behavior
* Smooth scrolling behavior
* FAQ interactions
* Thank-you page behavior

## Branding

Replace:

```txt
images/logo.svg
images/favicon.svg
```

Update branding references in:

```txt
index.html
thank-you.html
404.html
site.webmanifest
```

## Images

Replace images stored in:

```txt
images/
```

For the fastest workflow:

* Keep the existing filenames
* Replace the image files directly
* Avoid changing image paths unless necessary

## Metadata & SEO

Before launch, update:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph tags
* Twitter card tags

Also update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

Replace all placeholder domains with your live domain.

## Recommended Customization Workflow

### Step 1

Replace:

* Business name
* Phone number
* Email address
* Location information

### Step 2

Replace:

* Logo
* Favicon
* Photography
* Gallery images

### Step 3

Update:

* Hero content
* Service descriptions
* Pricing information
* FAQ content

### Step 4

Customize:

* Colors
* Typography
* Button styles
* Layout spacing

### Step 5

Update:

* Social media links
* Metadata
* Placeholder URLs

### Step 6

Test:

* Desktop layout
* Tablet layout
* Mobile layout
* Navigation links
* Contact forms
* Thank-you page
* 404 page

### Step 7

Deploy to your preferred hosting provider.

## Before Launch

Verify:

* Branding has been replaced
* Images load correctly
* Social links work
* Contact details are correct
* Metadata is updated
* Forms behave correctly
* Navigation links work
* Mobile navigation functions properly
* robots.txt uses the live domain
* sitemap.xml uses the live domain

Once these steps are complete, Abyssal Blue Lite is ready for production deployment.
