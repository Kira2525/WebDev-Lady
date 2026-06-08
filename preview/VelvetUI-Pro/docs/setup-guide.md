# VelvetUI Pro Setup Guide

This guide walks through the initial setup process for VelvetUI Pro before customizing the template for a client project, business, agency, portfolio, or production website.

## 1. Review the Template Files

VelvetUI Pro includes the following pages:

```txt
index.html
about.html
services.html
features.html
portfolio.html
pricing.html
faq.html
contact.html
404.html
thank-you.html
```

Before making changes, open the template locally and review every page to understand the structure and content.

## 2. Replace Demo Branding

VelvetUI Pro ships with a fictional demonstration brand.

Before launch:

* Replace the demo business name
* Replace the logo
* Replace the favicon
* Replace footer branding
* Replace contact information
* Replace social media links

Search the project for the demo brand name to locate all branding references.

## 3. Update Images

The template includes demonstration imagery for presentation purposes.

Before launching a real website:

* Replace logo assets
* Replace Open Graph images
* Replace portfolio images
* Replace showcase imagery
* Replace any remaining placeholder graphics

For detailed instructions, see:

```txt
docs/image-replacement-guide.md
```

## 4. Update Content

Review and update content across:

```txt
index.html
about.html
services.html
features.html
portfolio.html
pricing.html
faq.html
contact.html
```

Recommended updates:

* Company information
* Services
* Portfolio projects
* Pricing information
* Testimonials
* FAQ content
* Contact details

## 5. Configure the Contact Form

The contact form is located in:

```txt
contact.html
```

By default, submissions redirect to:

```txt
thank-you.html
```

Before launching a production website, decide whether to:

* Use Netlify Forms
* Use Formspree
* Use Getform
* Use a custom backend
* Keep the existing static thank-you page

For setup instructions, see:

```txt
docs/form-setup-guide.md
```

## 6. Update SEO Settings

Before publishing, update:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph titles
* Open Graph descriptions
* Open Graph images
* Twitter card metadata

Also update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

Replace all example domains with the final production domain.

## 7. Verify Navigation

The navigation is duplicated across multiple pages for static-hosting compatibility.

If you:

* Add pages
* Remove pages
* Rename pages

Update navigation links on all HTML files.

Also verify footer navigation links remain consistent.

## 8. Test Responsive Layouts

Before launch, test:

* Desktop
* Tablet
* Mobile

Verify:

* Navigation behavior
* Hero sections
* Content spacing
* Portfolio layouts
* Pricing cards
* FAQ accordion
* Contact form layout
* Footer layout

## 9. Test Site Functionality

Review every page and verify:

* Navigation links work correctly
* CTA buttons work correctly
* Images load correctly
* Icons display correctly
* Contact forms function correctly
* Thank-you page loads correctly
* 404 page functions correctly

## 10. Final Launch Checklist

Before publishing:

* Replace all demo branding
* Replace placeholder imagery
* Update social media links
* Update contact information
* Configure the contact form
* Update SEO metadata
* Update robots.txt
* Update sitemap.xml
* Update site.webmanifest
* Test all pages
* Test all links
* Test mobile responsiveness
* Check for broken images
* Check for broken links

Once these steps are complete, VelvetUI Pro is ready for deployment on any static hosting platform.
