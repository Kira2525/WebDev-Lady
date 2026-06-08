# VelvetUI Lite Customization Guide

VelvetUI Lite is built to stay simple, lightweight, and easy to customize.

Use this guide to update the most common customer-facing parts of the template.

## File Structure

```txt
/
├── 404.html
├── index.html
├── LICENSE.txt
├── README.md
├── robots.txt
├── site.webmanifest
├── sitemap.xml
└── thank-you.html
```

## Change the Business Name

Update the demo business name in:

```txt
index.html
thank-you.html
404.html
site.webmanifest
```

Also check each page’s `<head>` section for:

```txt
<title>
meta description
canonical URL
Open Graph tags
Twitter tags
```

## Change Colors

Open each HTML file and look for the main CSS variables in the style section.

Update variables such as:

```css
--bg
--bg-soft
--bg-deep
--primary
--primary-soft
--secondary-soft
--text
--muted
```

These control the main color system for the template.

## Change Fonts

Update the font import in the `<head>` section of each HTML file.

Then update the font variables in the CSS:

```css
--font-body
--font-display
```

## Change Content

Most of the website content is located in:

```txt
index.html
```

Edit the page sections directly, including:

```txt
#home
#about
#services
#features
#showcase
#pricing
#faq
#contact
```

Update:

* Business name
* Tagline
* About text
* Services
* Features
* Showcase content
* Pricing
* FAQ answers
* Contact details

## Change Social Links

Update the footer social links in:

```txt
index.html
thank-you.html
404.html
```

The default footer social links are:

```txt
Instagram
Pinterest
Facebook
TikTok
LinkedIn
```

Remove any platforms you do not use.

## Change Metadata

Update the `<head>` content in:

```txt
index.html
thank-you.html
404.html
```

Check:

```txt
<title>
meta description
canonical URL
Open Graph tags
Twitter card tags
favicon links
manifest link
```

Also update:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

## Change the Form Behavior

The contact form is located in:

```txt
index.html
```

By default, it redirects to:

```txt
thank-you.html
```

To connect the form to a real service, update the form tag in `index.html`.

Common options include:

* Netlify Forms
* Formspree
* Getform
* Custom backend

## Before Launch

Before publishing:

* Replace all demo text
* Replace the business name
* Update contact details
* Update social links
* Update SEO metadata
* Update `robots.txt`
* Update `sitemap.xml`
* Update `site.webmanifest`
* Test the form
* Test the thank-you page
* Test the 404 page
* Check mobile layout
* Check all links

VelvetUI Lite is ready for launch once the demo branding, links, form behavior, and metadata are updated.
