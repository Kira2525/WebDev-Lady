# Rain Blossom Pro

# Contact Form Setup Guide

Rain Blossom Pro includes a styled contact form on the **Contact** page.

By default, the form is set up as a front-end demo form. This means it displays correctly, but it will not send emails until you connect it to a form processing service.

This guide explains how to connect the form using **Formspree**, Netlify Forms, or another form service.

---

# Form Location

The main contact form is located in:

```text
contact.html
```

The form redirects visitors to:

```text
thank-you.html
```

after submission.

---

# Recommended Option: Formspree

Formspree is one of the easiest ways to make an HTML contact form send emails.

---

# Step 1 — Create a Formspree Account

Go to:

```text
https://formspree.io
```

Create a free account or sign in.

---

# Step 2 — Create a New Form

Inside your Formspree dashboard:

1. Click **New Form**.
2. Name your form.

Example:

```text
Rain Blossom Contact Form
```

3. Choose the email address where you want inquiries sent.
4. Click **Create Form**.

---

# Step 3 — Copy Your Form Endpoint

Formspree will give you a form endpoint that looks similar to this:

```text
https://formspree.io/f/abcxyzde
```

Copy your own endpoint.

Do not use the example endpoint above.

---

# Step 4 — Open contact.html

Open:

```text
contact.html
```

Find the contact form.

It may look similar to this:

```html
<form class="contact-form" action="thank-you.html" method="get">
```

---

# Step 5 — Replace the Form Tag

Replace the opening form tag with your Formspree endpoint:

```html
<form
  class="contact-form"
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

Replace:

```text
YOUR_FORM_ID
```

with your real Formspree form ID.

Example:

```html
<form
  class="contact-form"
  action="https://formspree.io/f/abcxyzde"
  method="POST"
>
```

---

# Step 6 — Confirm Field Names

Each form field must include a `name` attribute.

Example:

```html
<input id="name" name="name" type="text" required>
```

Required field names usually include:

```text
name
email
phone
event
date
guest-count
message
```

If a field does not have a `name` attribute, that field may not appear in your email notification.

---

# Step 7 — Add a Subject Line

Inside the form, you may add:

```html
<input type="hidden" name="_subject" value="New Rain Blossom Inquiry">
```

This makes email notifications easier to identify.

---

# Step 8 — Redirect to the Thank You Page

If your form service supports redirects, add this hidden input inside the form:

```html
<input type="hidden" name="_redirect" value="thank-you.html">
```

If your form service uses a dashboard setting for redirects, set the redirect URL there instead.

---

# Step 9 — Save and Upload

Save:

```text
contact.html
```

Then upload the updated file to your hosting account.

---

# Step 10 — Test the Form

Open your live website.

Go to the Contact page.

Submit a test inquiry.

Check that:

* The form submits successfully.
* You receive the inquiry by email.
* The visitor is redirected to `thank-you.html`.
* All form fields appear in the email.

---

# Netlify Forms Option

If your website is hosted on Netlify, you can use Netlify Forms instead of Formspree.

Change your opening form tag to:

```html
<form
  class="contact-form"
  name="contact"
  method="POST"
  data-netlify="true"
  action="thank-you.html"
>
```

Add this hidden input inside the form:

```html
<input type="hidden" name="form-name" value="contact">
```

Then deploy your website to Netlify.

Netlify will detect the form automatically.

---

# Other Form Services

You can also connect the form to:

* Basin
* Getform
* Web3Forms
* FormSubmit
* Your own backend

Most form services work the same way:

1. Create a form.
2. Copy the endpoint URL.
3. Paste it into the form `action`.
4. Use `method="POST"`.
5. Test the form after publishing.

---

# Troubleshooting

## The form does not send.

Check that:

* The form `action` uses your real form endpoint.
* The form uses `method="POST"`.
* Your website is uploaded to a live server.
* Each field has a `name` attribute.

---

## I am not receiving emails.

Check:

* Spam or junk folder.
* The email address connected to your form service.
* Your form service dashboard.
* Whether you need to confirm your email address.

---

## Some fields are missing from the email.

Make sure every input, select, and textarea has a `name` attribute.

Example:

```html
<input name="phone">
```

---

## The Thank You page does not open.

Make sure this file exists:

```text
thank-you.html
```

Also confirm the redirect path is correct.

---

# Important Notes

Do not leave demo contact information on your live website.

Before publishing, replace:

```text
(555) 019-2840
hello@rainblossom.com
Meadowbrook Valley
```

with your own contact details.

---

# Need Help?

For support or customization services, please contact:

**Web Dev Lady**

Website:

https://webdevlady.netlify.app
