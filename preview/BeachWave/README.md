````md
# BeachWave Resort Website Template

BeachWave is a static animated beach resort website template for resorts, vacation rentals, beach clubs, travel agencies, spas, cruises, retreats, and tropical service brands.

The demo content uses a fictional business called **BeachWave Resort**. Replace the demo text, images, contact details, pricing, and policies before using it for a real business.

## Included Files

- `index.html`
- `about.html`
- `services.html`
- `gallery.html`
- `pricing.html`
- `faq.html`
- `contact.html`
- `thank-you.html`
- `404.html`
- `css/style.css`
- `css/tablet.css`
- `css/mobile.css`
- `js/script.js`
- `images/beachwave-logo.png`
- `images/beachwave-icon.png`
- `images/oceanfront-suites.jpg`
- `images/private-beach.jpg`
- `images/dining.jpg`
- `images/activities.jpg`
- `images/spa.jpg`
- `images/attractions.jpg`

## How To Preview

Open `index.html` in a browser.

For the most reliable preview, run a local static server from the project folder:

```bash
python -m http.server 8080
````

Then visit:

```text
http://localhost:8080
```

## Customization

### Text

Edit the page content directly inside the HTML files.

Common places to update:

* Business name
* Page headings
* Service descriptions
* Package names
* Prices
* FAQ answers
* Contact details
* Footer copyright

### Colors

Change the main brand colors in:

```text
css/style.css
```

Look for the `:root` section near the top of the file.

### Logo and Icon

Replace these files with your own:

```text
images/beachwave-logo.png
images/beachwave-icon.png
```

Use the same file names if you do not want to update the HTML.

### Gallery Images

Replace the included demo images in the `images` folder:

```text
images/oceanfront-suites.jpg
images/private-beach.jpg
images/dining.jpg
images/activities.jpg
images/spa.jpg
images/attractions.jpg
```

Use licensed images only.

### Contact Form

The contact form currently submits to:

```text
thank-you.html
```

Before launching a real website, connect the form to a form provider, booking system, CRM, email service, or backend.

Examples:

* Formspree
* Netlify Forms
* Getform
* Basin
* Custom backend
* Booking platform

## CSS Files

The CSS is split into three files:

```text
css/style.css    = desktop and base styles
css/tablet.css   = tablet layout adjustments
css/mobile.css   = mobile layout adjustments
```

Keep them linked in this order:

```html
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/tablet.css" />
<link rel="stylesheet" href="css/mobile.css" />
```

## JavaScript

The JavaScript file is located at:

```text
js/script.js
```

It controls:

* Mobile navigation
* Animated beach background
* Ocean waves
* Clouds
* Birds
* Sun reflection
* Mouse and touch parallax

You can adjust animation settings near the top of `js/script.js`.

## Deployment

This template can be hosted on static hosting platforms such as:

* Netlify
* Vercel
* GitHub Pages
* Cloudflare Pages
* Traditional web hosting

No build step is required.

## Important Notes

* All demo business details are fictional.
* Replace demo prices before launch.
* Replace demo contact details before launch.
* Replace demo images if needed.
* Test all links before publishing.
* Test the contact form after connecting it.
* Compress images before shipping or uploading the final site.

## License

Add your own license terms here before selling or distributing this template.

```
```
