# Contact Form Setup Guide

Rain Blossom Lite includes a demo HTML contact form. By default, the form does **not** send emails until it is connected to a form processing service.

This guide explains how to connect the form using **Formspree**, one of the easiest free options.

---

# Step 1 — Create a Formspree Account

Visit:

**https://formspree.io**

Create a free account or sign in.

---

# Step 2 — Create a New Form

Click:

**New Form**

Give your form any name you'd like.

Example:

```
Rain Blossom Contact Form
```

Click **Create Form**.

---

# Step 3 — Copy Your Form Endpoint

After creating your form, Formspree will provide an endpoint that looks similar to:

```
https://formspree.io/f/abcxyzde
```

Copy this URL.

---

# Step 4 — Open index.html

Open:

```
index.html
```

Locate the contact form.

You'll find something similar to:

```html
<form class="contact-form">
```

---

# Step 5 — Replace the Form Action

Replace the opening form tag with:

```html
<form
    class="contact-form"
    action="https://formspree.io/f/abcxyzde"
    method="POST">
```

Replace the example URL with **your own Formspree endpoint**.

---

# Step 6 — Verify Input Names

Each field should include a **name** attribute.

Example:

```html
<input name="name">
```

```html
<input name="email">
```

```html
<select name="event">
```

```html
<textarea name="message"></textarea>
```

These names tell Formspree what information to include in each email.

---

# Step 7 — Redirect to the Thank You Page

Inside the form, add:

```html
<input
type="hidden"
name="_redirect"
value="thank-you.html">
```

After a successful submission, visitors will automatically be redirected to the Thank You page included with this template.

---

# Step 8 — Save Your Changes

Save **index.html**.

Upload the updated files to your web hosting account.

---

# Step 9 — Test Your Form

Open your website.

Fill out the contact form.

Submit a test message.

If everything is configured correctly, you should:

* Receive an email notification from Formspree.
* Be redirected to **thank-you.html**.

---

# Optional Spam Protection

Formspree includes built-in spam filtering.

For additional protection, you can enable:

* Google reCAPTCHA
* hCaptcha
* Email verification
* Submission limits

These settings are available in your Formspree dashboard.

---

# Troubleshooting

### The form doesn't send.

* Make sure the Formspree endpoint is correct.
* Verify that the form uses `method="POST"`.
* Confirm every input includes a `name` attribute.

---

### I'm not receiving emails.

Check:

* Spam or Junk folders.
* Your verified email address in Formspree.
* Formspree dashboard submissions.

---

### The Thank You page doesn't open.

Verify that:

```
thank-you.html
```

exists in your website's root folder and that the redirect path is correct.

---

# Need Help?

If you need assistance connecting your contact form or customizing the template, please contact:

**Web Dev Lady**

Website:

https://webdevlady.netlify.app
