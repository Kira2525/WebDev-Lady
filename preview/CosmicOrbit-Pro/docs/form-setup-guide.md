# Cosmic Orbit Pro Form Setup Guide

## Overview

Cosmic Orbit Pro includes two forms:

* Booking Form (`booking.html`)
* Contact Form (`contact.html`)

By default, both forms operate in demo mode for local previews and template demonstrations.

Demo submissions are handled through:

```text
js/main.js
```

and redirect users to:

```text
thank-you.html
```

No form data is stored or transmitted until a live form provider is connected.

---

## Included Form Fields

### Booking Form

Typical fields include:

* Name
* Email
* Phone
* Booking Type
* Event Date
* Guest Count
* Message

### Contact Form

Typical fields include:

* Name
* Email
* Phone
* Inquiry Type
* Message

Field names can be customized as needed.

---

## Supported Providers

Cosmic Orbit Pro can be connected to:

* Netlify Forms
* Formspree
* Getform
* EmailJS
* Basin
* Custom Backend APIs

---

# Demo Mode

The template ships with demo form behavior.

This allows buyers to preview form submissions without configuring a provider.

Demo logic is handled by:

```text
js/main.js
```

Look for:

```javascript
data-demo-form
```

if you want to remove or modify the demo functionality.

---

# Netlify Forms

Netlify Forms is one of the easiest options.

### Form Requirements

Keep:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true">
```

Include:

```html
<input type="hidden"
       name="form-name"
       value="contact">
```

### Deployment

1. Upload the site to Netlify.
2. Publish the site.
3. Submit a test form.
4. Verify submissions appear in the Netlify dashboard.

### Redirects

You may:

* Keep `thank-you.html`
* Use Netlify success redirects
* Use custom confirmation pages

---

# Formspree

### Setup

1. Create a Formspree account.
2. Create a new form.
3. Copy the endpoint URL.
4. Replace the form action.

Example:

```html
<form
  action="https://formspree.io/f/your-id"
  method="POST">
```

### Testing

After deployment:

* Submit a test message
* Verify delivery
* Verify redirects

---

# Getform

### Setup

1. Create a Getform account.
2. Create a form endpoint.
3. Copy the endpoint URL.
4. Replace the form action.

Example:

```html
<form
  action="https://getform.io/f/your-id"
  method="POST">
```

---

# EmailJS

EmailJS allows forms to send emails directly from the browser.

### Setup

1. Create an EmailJS account.
2. Create an email service.
3. Create an email template.
4. Add EmailJS credentials to the JavaScript.
5. Replace demo form handling.

### Notes

EmailJS does not require a backend server.

---

# Custom Backend

You can connect the forms to your own API.

Example:

```html
<form
  action="https://yourdomain.com/api/contact"
  method="POST">
```

Make sure your backend:

* Accepts POST requests
* Validates data
* Protects against spam
* Redirects users after submission

---

# Spam Protection

Recommended options:

### Netlify

Use:

```html
netlify-honeypot="bot-field"
```

### Formspree

Enable spam filtering in the dashboard.

### Getform

Enable built-in spam protection.

### Custom APIs

Implement:

* Honeypot fields
* CAPTCHA
* Rate limiting
* Server-side validation

---

# Thank You Page

Default success page:

```text
thank-you.html
```

You may:

* Keep the existing page
* Replace it with a custom page
* Use provider-specific success URLs

Always test the final user flow after setup.

---

# Troubleshooting

## Form Submits But No Email Arrives

Check:

* Provider dashboard
* Spam folder
* Endpoint URL
* Form field names

---

## Redirect Does Not Work

Verify:

* Success URL settings
* Redirect configuration
* JavaScript interception logic

---

## Form Does Nothing

Check:

* JavaScript errors
* Removed form attributes
* Invalid action URLs

---

## Provider Doesn't Detect Form

Verify:

* Form markup is correct
* Hidden fields are present
* Required attributes remain intact

---

# Final Testing Checklist

Before launch:

✓ Booking form submits successfully

✓ Contact form submits successfully

✓ Confirmation page loads

✓ Mobile form layout works

✓ Tablet form layout works

✓ Email notifications arrive

✓ Spam protection is enabled

✓ Required fields validate correctly

✓ Success redirects work properly

✓ No JavaScript errors appear in the browser console
