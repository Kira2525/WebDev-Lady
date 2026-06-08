# VelvetUI Lite Setup Guide

VelvetUI Lite is the streamlined one-page version of the VelvetUI template family.

This guide covers the initial setup process and the most important changes to make before publishing a live website.

## Included Files

```txt
404.html
index.html
LICENSE.txt
README.md
robots.txt
site.webmanifest
sitemap.xml
thank-you.html
```

## First Launch

### Step 1

Open:

```txt
index.html
```

in your browser.

Review the entire one-page layout and familiarize yourself with the included sections.

### Step 2

Test the navigation menu.

Verify that each navigation link scrolls correctly to its matching section.

### Step 3

Submit the inquiry form.

Confirm that it redirects to:

```txt
thank-you.html
```

### Step 4

Open:

```txt
404.html
```

to review the custom error page.

## First Changes to Make

### Branding

Replace:

* Business name
* Logo
* Favicon
* Tagline

Check:

```txt
index.html
thank-you.html
404.html
site.webmanifest
```

### Contact Information

Update:

* Email address
* Phone number (if used)
* Address (if used)

### Social Links

Replace all placeholder social media URLs with your own profiles.

### Domain References

Replace:

```txt
https://yourdomain.com
```

wherever it appears.

Check:

```txt
index.html
thank-you.html
404.html
robots.txt
sitemap.xml
site.webmanifest
```

### SEO Metadata

Update:

* Page title
* Meta description
* Canonical URL
* Open Graph tags
* Twitter card tags

## Contact Form

The inquiry form is front-end only by default.

Current behavior:

```txt
Form → thank-you.html
```

No submissions are stored until you connect a form service.

Supported options:

* Netlify Forms
* Formspree
* Getform
* Custom Backend

See:

```txt
docs/form-setup-guide.md
```

for configuration instructions.

## Before Publishing

Verify the following:

* Branding has been replaced
* Contact details are correct
* Social links are updated
* Domain references are updated
* SEO metadata is updated
* Inquiry form is tested
* Thank-you page works correctly
* 404 page works correctly
* Mobile layout is functioning properly
* All links work correctly

## Recommended Launch Order

1. Replace branding
2. Replace contact information
3. Update social links
4. Update metadata
5. Configure the form
6. Test all pages
7. Deploy to hosting
8. Perform final live testing

Once these steps are complete, VelvetUI Lite is ready for production deployment.
