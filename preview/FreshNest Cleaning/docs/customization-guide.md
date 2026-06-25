# FreshNest Cleaning Co. Customization Guide

Welcome! Thank you for purchasing the **FreshNest Cleaning Co. Website Template**.

This guide will help you customize your website quickly without needing advanced coding knowledge.

---

# Folder Structure

```text
FreshNest/

│── index.html
│── thank-you.html
│── 404.html
│── LICENSE.md
│── README.md
│── CUSTOMIZATION_GUIDE.md
│── robots.txt
│── site.webmanifest

├── css/
│   ├── styles.css
│   ├── tablet.css
│   └── mobile.css

├── js/
│   └── script.js

└── assets/
    ├── favicon.png
    ├── freshnest-hero.png
    └── (other images)
```

---

# Change Your Business Name

Open:

```text
index.html
```

Search for:

```html
FreshNest
```

Replace every occurrence with your business name.

Example:

```text
FreshNest Cleaning Co.

↓

Sparkle House Cleaning
```

---

# Change the Logo

Replace the text logo:

```html
<a class="logo">FreshNest</a>
```

Or replace it with an image:

```html
<img src="assets/logo.png" alt="Company Logo">
```

---

# Change the Hero Image

Replace:

```text
assets/freshnest-hero.png
```

With your own image.

Recommended size:

```text
1920 × 1080 pixels
```

Supported formats:

* JPG
* PNG
* WebP

---

# Change Colors

Open:

```text
css/styles.css
```

Go to:

```css
01. ROOT VARIABLES
```

Example:

```css
--mint: #2f8f83;
```

Replace with your own brand color.

---

# Change Navigation

Open:

```text
index.html
```

Edit:

```html
<nav class="site-nav">
```

Add or remove links as needed.

---

# Change Services

Search for:

```html
<section id="services">
```

Replace:

* Service titles
* Descriptions
* Icons

---

# Change Pricing

Search for:

```html
<section id="pricing">
```

Edit:

* Package names
* Prices
* Features
* Badges

---

# Change Reviews

Search for:

```html
<section id="reviews">
```

Replace:

* Customer names
* Testimonials
* Ratings

---

# Change FAQ

Search for:

```html
<section id="faq">
```

Replace each question and answer with your own.

---

# Change Contact Information

Search for:

```text
(555) 123-4567
```

Replace with your phone number.

Search for:

```text
hello@freshnestcleaning.com
```

Replace with your email address.

---

# Contact Form

The included form is a demo.

You can connect it to:

* Formspree
* Netlify Forms
* Getform
* Basin
* Your hosting provider
* PHP mail
* Your CRM

---

# Change Images

Replace images inside:

```text
assets/
```

Keep the same filenames,

or update the filenames inside the HTML.

---

# Favicon

Replace:

```text
assets/favicon.png
```

You may also replace:

```text
favicon-192.png
favicon-512.png
```

For best browser and mobile support.

---

# Responsive Design

Desktop styles:

```text
css/styles.css
```

Tablet styles:

```text
css/tablet.css
```

Mobile styles:

```text
css/mobile.css
```

Each file is organized with section headings for easier editing.

---

# JavaScript

The JavaScript file controls:

* Mobile hamburger menu
* Opening and closing the navigation
* Closing the menu after selecting a link

File location:

```text
js/script.js
```

---

# Browser Support

Compatible with:

* Google Chrome
* Microsoft Edge
* Firefox
* Safari
* Opera
* Brave

---

# Uploading Your Website

Upload every file and folder exactly as included.

Your final folder structure should remain:

```text
css/
js/
assets/
index.html
thank-you.html
404.html
robots.txt
site.webmanifest
```

---

# Need Help?

If you have questions about installing or using this template, please contact the original seller.

**Web Dev Lady**
