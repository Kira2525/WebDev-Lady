# VelvetUI Pro Form Setup Guide

VelvetUI Pro includes a fully designed contact form and thank-you page that work immediately on static hosting.

By default, the contact form redirects visitors to:

```txt
thank-you.html
```

This allows the template to function without requiring a backend, database, or third-party service.

## Contact Form Location

The contact form is located in:

```txt
contact.html
```

The confirmation page is located in:

```txt
thank-you.html
```

## Default Configuration

Current setup:

```html
<form method="GET" action="thank-you.html">
```

Default behavior:

* No server required
* No coding required
* Works on any static host
* Redirects visitors to the included thank-you page

This configuration is intended for demonstration purposes and should be connected to a live form service before launching a production website.

## Included Form Fields

VelvetUI Pro ships with the following fields:

```txt
name
company
email
project-type
timeline
budget
project-brief
```

You may add, remove, or rename fields as needed.

## Option 1: Netlify Forms

Netlify Forms allows you to collect submissions without building a backend.

### Update the Form

Replace the existing form tag with:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
>
```

Add the following hidden field directly inside the form:

```html
<input
  type="hidden"
  name="form-name"
  value="contact"
/>
```

### Deploy

Upload the site to Netlify.

Form submissions will automatically appear in your Netlify dashboard.

## Option 2: Formspree

Create a Formspree account and generate a form endpoint.

Replace the form action with:

```html
<form
  action="https://formspree.io/f/your-id"
  method="POST"
>
```

Submissions will be delivered directly to your email inbox.

## Option 3: Getform

Create a Getform endpoint and replace the form action:

```html
<form
  action="https://getform.io/f/your-endpoint"
  method="POST"
>
```

Submissions can then be managed from your Getform dashboard.

## Option 4: Custom Backend

If you maintain your own server or API:

```html
<form
  action="/api/contact"
  method="POST"
>
```

Your backend should:

* Validate submissions
* Process form data
* Send email notifications
* Store records if required
* Return a success response

## Thank-You Page

VelvetUI Pro includes a dedicated confirmation page:

```txt
thank-you.html
```

You may:

* Keep the existing page
* Customize the messaging
* Replace it with your own success page
* Redirect users elsewhere after submission

## Spam Protection

For production websites, consider adding:

* Netlify Spam Protection
* Google reCAPTCHA
* hCaptcha
* Honeypot fields

Always test spam protection before launch.

## Testing Checklist

Before publishing:

* Submit a real test inquiry
* Verify email notifications
* Verify submission storage
* Test all required fields
* Test mobile usability
* Verify validation messages
* Confirm thank-you page redirects correctly
* Test the form on the live domain

## Supported Providers

VelvetUI Pro is compatible with:

* Netlify Forms
* Formspree
* Getform
* Basin
* Custom PHP Backends
* Node.js Applications
* Serverless Functions

No structural changes to the template are required when using any of the above services.

## Launch Reminder

Before delivering a finished website:

* Replace placeholder contact information
* Update social media links
* Test every form field
* Verify notifications are working
* Verify the thank-you page experience

A contact form should always be tested on the live website before launch.
