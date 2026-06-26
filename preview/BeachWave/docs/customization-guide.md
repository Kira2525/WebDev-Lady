````md
# BeachWave Resort Customization Guide

This guide explains how to customize the BeachWave Resort website template.

## 1. Edit The Business Name

Search for:

```text
BeachWave Resort
````

Replace it with your business name.

Example:

```text
Sunset Cove Resort
```

## 2. Update Page Titles And Descriptions

Each HTML file has a `<title>` and `<meta name="description">` inside the `<head>`.

Update these for your business and each page.

Example:

```html
<title>About | Sunset Cove Resort</title>
<meta name="description" content="Learn about Sunset Cove Resort, a relaxing oceanfront destination." />
```

## 3. Replace The Logo And Icon

Replace these files:

```text
images/beachwave-logo.png
images/beachwave-icon.png
```

Keep the same file names if you do not want to edit the HTML.

## 4. Change Colors

Open:

```text
css/style.css
```

Find the `:root` section.

Update the color variables:

```css
--deep: #04131a;
--cyan: #7df8ff;
--gold: #ffd36e;
--white: #ffffff;
```

## 5. Replace Gallery Images

Replace these demo images:

```text
images/oceanfront-suites.jpg
images/private-beach.jpg
images/dining.jpg
images/activities.jpg
images/spa.jpg
images/attractions.jpg
```

Use images with the same file names to avoid editing the HTML.

## 6. Update Packages And Prices

Open:

```text
pricing.html
```

Update:

* Package names
* Prices
* Included features
* Booking notes
* Call-to-action buttons

Make sure all prices are real before publishing.

## 7. Update Contact Information

Open:

```text
contact.html
```

Replace the demo information:

```text
reservations@beachwave-demo.com
(305) 555-0187
125 Ocean View Drive
Sunset Bay, FL 33100
```

## 8. Connect The Contact Form

The form currently sends users to:

```text
thank-you.html
```

Before launch, connect it to:

* Formspree
* Netlify Forms
* Getform
* Basin
* Your CRM
* Your booking system
* A custom backend

## 9. Update The FAQ Page

Open:

```text
faq.html
```

Replace the demo questions with your real policies:

* Check-in time
* Check-out time
* Cancellation policy
* Parking
* Pets
* Breakfast
* Activities
* Refunds

## 10. Update The Manifest

Open:

```text
site.webmanifest
```

Update:

* Business name
* Short name
* Description
* Theme color
* Icon paths

## 11. Update Robots.txt

Open:

```text
robots.txt
```

Replace:

```text
https://www.example.com/sitemap.xml
```

with your real sitemap URL.

## 12. Test Before Launch

Before publishing, test:

* Every navigation link
* Mobile menu
* Contact form
* Images
* Footer links
* 404 page
* Tablet layout
* Mobile layout
* Browser console errors

## 13. Recommended File Order

Keep CSS files linked in this order:

```html
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/tablet.css" />
<link rel="stylesheet" href="css/mobile.css" />
```

## 14. Deployment Options

This template works on:

* Netlify
* Vercel
* GitHub Pages
* Cloudflare Pages
* Traditional web hosting

No build step is required.

```
```
