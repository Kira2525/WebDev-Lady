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

No form data is stored or transmitted until a live form workflow is connected.

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

## Connection Options

Cosmic Orbit Pro can be connected to:

* Your preferred hosted form service
* A custom backend or API route
* A server-side submission workflow

---

# Demo Mode

The template ships with demo form behavior.

This allows buyers to preview form submissions without configuring a live form workflow.

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

# Hosted Form Service Setup

If you use a hosted form service:

1. Create your form inside the service dashboard.
2. Copy the submission endpoint or embed instructions.
3. Replace the demo submission behavior with the service-specific form action or script.
4. Submit a test entry and confirm delivery.

Example form markup:

```html
<form
  action="https://your-form-service.example/submit"
  method="POST">
```

After deployment:

* Submit a test message
* Confirm successful delivery
* Verify the success redirect

---

# Custom Backend Setup

You can connect the forms to your own API.

Example:

```html
<form
  action="https://yourdomain.com/api/contact"
  method="POST">
```

Make sure your backend:

* Accepts `POST` requests
* Validates incoming data
* Protects against spam
* Redirects users after submission

---

# Spam Protection

Recommended options:

* Honeypot fields
* CAPTCHA or challenge verification
* Rate limiting
* Server-side validation

If you use a hosted form service, enable the spam controls available in that dashboard.

---

# Thank You Page

Default success page:

```text
thank-you.html
```

You may:

* Keep the existing page
* Replace it with a custom page
* Configure a custom success URL

Always test the final user flow after setup.

---

# Troubleshooting

## Form Submits But No Message Arrives

Check:

* The provider or backend logs
* Spam or junk folders
* The endpoint URL
* The form field names

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

## Provider or Backend Does Not Detect The Form

Verify:

* Form markup is correct
* Required hidden fields are present when your workflow needs them
* Required attributes remain intact

---

# Final Testing Checklist

Before launch:

- Booking form submits successfully
- Contact form submits successfully
- Confirmation page loads
- Mobile form layout works
- Tablet form layout works
- Desktop form layout works
