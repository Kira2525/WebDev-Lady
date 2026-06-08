# VelvetUI Lite Form Setup Guide

VelvetUI Lite includes a built-in inquiry form and a dedicated thank-you page.

By default, the form redirects visitors to:

```txt
thank-you.html
```

This allows the template to work immediately on any static host without requiring a backend or database.

## Contact Form Location

The contact form is located in:

```txt
index.html
```

The confirmation page is located in:

```txt
thank-you.html
```

## Default Configuration

Current setup:

```html
<form method="get" action="thank-you.html">
```

Default behavior:

* No server required
* No setup required
* Works on any static host
* Redirects visitors to the included thank-you page
* Does not store submissions

This setup is intended for demonstration purposes and should be connected to a real form service before launching a production website.

## Included Form Fields

VelvetUI Lite includes the following fields:

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

## Option 1: Formspree

Formspree is one of the easiest ways to collect form submissions.

### Step 1

Create a Formspree account and generate a form endpoint.

### Step 2

Replace:

```html
<form method="get" action="thank-you.html">
```

with:

```html
<form
  action="https://formspree.io/f/your-id"
  method="post"
>
```

### Step 3

Submit a test message and verify delivery.

## Option 2: Netlify Forms

If hosting on Netlify, you can use Netlify Forms without creating a backend.

### Update the Form

Replace the existing form tag with:

```html
<form
  name="design-inquiry"
  method="post"
  data-netlify="true"
>
```

Add the following hidden field inside the form:

```html
<input
  type="hidden"
  name="form-name"
  value="design-inquiry"
/>
```

### Deploy

Upload the site to Netlify.

Form submissions will automatically appear in the Netlify dashboard.

## Option 3: Getform

Create a Getform endpoint and update the form action:

```html
<form
  action="https://getform.io/f/your-endpoint"
  method="post"
>
```

Submissions will be collected through the Getform dashboard.

## Option 4: Custom Backend

If you maintain your own server:

```html
<form
  action="/api/contact"
  method="post"
>
```

Your backend should:

* Validate submissions
* Process form data
* Send notifications
* Store records if required
* Return a success response

## Thank-You Page

VelvetUI Lite includes:

```txt
thank-you.html
```

You may:

* Keep the existing page
* Customize the messaging
* Redirect visitors elsewhere after submission

## Accessibility Recommendations

For best accessibility:

* Keep all labels visible
* Maintain proper label-to-input associations
* Keep required fields marked as required
* Test keyboard navigation
* Test screen reader compatibility

If adding custom fields, always include a matching label element.

## Testing Checklist

Before publishing:

* Submit a real test inquiry
* Verify notifications arrive
* Verify submissions are stored correctly
* Test required fields
* Test mobile usability
* Verify validation messages
* Confirm the thank-you page loads correctly

## Supported Services

VelvetUI Lite works with:

* Formspree
* Netlify Forms
* Getform
* Basin
* Custom PHP Backends
* Node.js Applications
* Serverless Functions

No structural changes to the template are required when using any of these services.

## Launch Reminder

Before going live:

* Update contact information
* Update social links
* Test every form field
* Verify email notifications
* Verify the thank-you page experience

A contact form should always be tested on the live website before launch.
