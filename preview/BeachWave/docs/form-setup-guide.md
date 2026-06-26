````md
# BeachWave Resort Form Setup Guide

The contact form included with BeachWave is a demonstration form.

By default, it submits to:

```text
thank-you.html
````

Before launching your website, connect the form to a form service or your own backend.

---

# Option 1 — Formspree (Recommended)

Website:

https://formspree.io

### Step 1

Create a free Formspree account.

### Step 2

Create a new form.

### Step 3

Copy your Form Endpoint.

Example:

```text
https://formspree.io/f/abcdefg
```

### Step 4

Open:

```text
contact.html
```

Find:

```html
<form action="thank-you.html" method="get">
```

Replace it with:

```html
<form
    action="https://formspree.io/f/abcdefg"
    method="POST">
```

Save the file.

Your form is now connected.

---

# Option 2 — Netlify Forms

If hosting on Netlify, forms work without JavaScript.

Replace:

```html
<form action="thank-you.html" method="get">
```

with:

```html
<form
    name="contact"
    method="POST"
    data-netlify="true">

<input
    type="hidden"
    name="form-name"
    value="contact">
```

Deploy your website to Netlify.

Submissions will appear inside your Netlify dashboard.

---

# Option 3 — Getform

Website:

https://getform.io

Create a form.

Replace:

```html
<form action="thank-you.html" method="get">
```

with:

```html
<form
    action="YOUR-GETFORM-ENDPOINT"
    method="POST">
```

---

# Option 4 — Basin

Website:

https://usebasin.com

Create a form.

Replace the form action with your Basin endpoint.

---

# Option 5 — Web3Forms

Website:

https://web3forms.com

Create a free account.

Follow the setup instructions provided by Web3Forms.

---

# Option 6 — Custom Backend

If you have your own backend, update the form action.

Example:

```html
<form
    action="/api/contact"
    method="POST">
```

---

# Email Address

If your form service supports email notifications, update your account settings to receive submissions at your preferred email address.

---

# After Connecting Your Form

Test the following:

✓ Name field

✓ Email field

✓ Dropdown

✓ Date picker

✓ Message

✓ Submit button

✓ Confirmation page

✓ Email delivery

---

# Spam Protection

Most form providers include spam protection.

For additional protection you can enable:

* Google reCAPTCHA
* hCaptcha
* Cloudflare Turnstile

---

# Before Publishing

✔ Test every field

✔ Verify emails are received

✔ Check mobile devices

✔ Remove any placeholder contact information

✔ Update thank-you.html if needed

✔ Test multiple submissions

---

Need Help?

Visit your chosen form provider's documentation for advanced features such as:

* File uploads
* Auto replies
* Email notifications
* CRM integrations
* Zapier
* Make.com
* Webhooks

```
```
