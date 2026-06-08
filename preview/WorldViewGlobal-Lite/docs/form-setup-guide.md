# WorldView Global Lite Form Setup Guide

## Overview

WorldView Global Lite includes a ready-to-customize contact form located in the contact section of:

```text
index.html
```

The form is designed to work with:

* Netlify Forms
* Formspree
* Getform
* Custom backend endpoints

The included setup uses a local redirect to:

```text
thank-you.html
```

This allows the form to work during local testing before connecting a real form provider.

---

# Current Form Configuration

Current form basics:

```html
<form
  method="POST"
  action="thank-you.html"
>
```

### Current Settings

| Setting                 | Value          |
| ----------------------- | -------------- |
| Method                  | POST           |
| Action                  | thank-you.html |
| Redirect Page           | thank-you.html |
| JavaScript Support      | Yes            |
| Query Parameter Support | Yes            |

---

# Included Form Fields

### Visible Fields

```text
name
email
service
message
```

### Hidden Fields

```text
form-name
intent
topic
```

The hidden fields are automatically managed by the site's JavaScript and should generally be left unchanged.

---

# Change The Form Action

If you want form submissions sent somewhere else:

### Step 1

Open:

```text
index.html
```

### Step 2

Locate the form element.

Example:

```html
<form
  method="POST"
  action="thank-you.html"
>
```

### Step 3

Replace the action value.

Example:

```html
<form
  method="POST"
  action="https://formspree.io/f/your-id"
>
```

### Step 4

Submit a test message.

Verify:

* Submission succeeds
* Data is received
* Redirect still works

---

# Keep The Thank-You Redirect

The site is designed to finish at:

```text
thank-you.html
```

To keep this behavior:

### Option 1

Use:

```html
action="thank-you.html"
```

for local previews.

### Option 2

Configure your form provider to redirect users to:

```text
/thank-you.html
```

after a successful submission.

---

# Netlify Forms Setup

Netlify can capture form submissions without any backend code.

### Example Form

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  action="thank-you.html"
>
```

### Requirements

Keep:

```html
<input
  type="hidden"
  name="form-name"
  value="contact"
>
```

The form name and hidden field value must match.

### Deployment Steps

1. Create a Netlify account.
2. Upload or connect the project.
3. Deploy the site.
4. Submit a test message.
5. Confirm submissions appear in the Netlify dashboard.

---

# Formspree Setup

Formspree is one of the easiest options.

### Step 1

Create a form at:

```text
https://formspree.io
```

### Step 2

Copy your endpoint URL.

Example:

```text
https://formspree.io/f/abcd1234
```

### Step 3

Update your form:

```html
<form
  method="POST"
  action="https://formspree.io/f/abcd1234"
>
```

### Step 4

Configure the success redirect.

Redirect to:

```text
/thank-you.html
```

### Step 5

Publish and test.

---

# Getform Setup

### Step 1

Create a form at:

```text
https://getform.io
```

### Step 2

Copy the endpoint URL.

Example:

```text
https://getform.io/f/your-form-id
```

### Step 3

Update:

```html
<form
  method="POST"
  action="https://getform.io/f/your-form-id"
>
```

### Step 4

Configure the success page:

```text
/thank-you.html
```

### Step 5

Submit a test message.

Verify all fields are received correctly.

---

# Custom Backend Setup

If you use your own backend:

### Example

```html
<form
  method="POST"
  action="https://yourdomain.com/api/contact"
>
```

### Recommendations

Keep these field names:

```text
name
email
service
message
intent
topic
```

unless your backend expects different values.

After a successful submission:

1. Return a redirect.
2. Send the user to:

```text
thank-you.html
```

3. Test both locally and on the live site.

---

# JavaScript Support

The form includes helper functionality inside:

```text
js/script.js
```

Features include:

* CTA-based inquiry routing
* Intent detection
* Topic assignment
* Thank-you page messaging
* Local preview redirects

If you remove or heavily modify the form, review:

```text
js/script.js
```

to ensure functionality still works.

---

# Common Problems

### Form Does Nothing

Check:

```html
action=""
```

or missing action URLs.

### Redirect Does Not Work

Verify:

```text
thank-you.html
```

exists in the project root.

### Form Provider Receives No Data

Confirm:

```html
method="POST"
```

is still present.

### Netlify Form Not Detected

Confirm:

```html
data-netlify="true"
```

exists on the form element.

---

# Testing Checklist

After connecting the form:

✓ Form submits successfully

✓ Name field is received

✓ Email field is received

✓ Service field is received

✓ Message field is received

✓ Thank-you page opens

✓ Hidden fields still populate

✓ Mobile layout looks correct

✓ Tablet layout looks correct

✓ Desktop layout looks correct

✓ No console errors appear

---

# Recommended Providers

For most buyers:

### Easiest

```text
Formspree
```

### Best Static Hosting Integration

```text
Netlify Forms
```

### Alternative

```text
Getform
```

### Most Flexible

```text
Custom Backend
```
