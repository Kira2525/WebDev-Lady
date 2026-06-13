# Abyssal Blue Pro Form Setup Guide

## Important

The included booking and contact forms are demonstration forms intended for template previews.

By default, no form submissions are stored, emailed, or processed until you connect a form service or custom backend.

## Included Forms

Abyssal Blue Pro includes two forms:

```txt
booking.html
contact.html
```

By default, both forms redirect visitors to:

```txt
thank-you.html
```

This allows the template to function immediately on any static hosting platform.

## Current Form Behavior

The forms are configured for demonstration purposes.

The included demo forms already use:

```html
method="post"
```

so they are ready to swap over to a real form handler.

Current flow:

1. Visitor completes the form.
2. Client-side validation runs.
3. Form type is stored in session storage.
4. Visitor is redirected to:

```txt
thank-you.html?form=booking
```

or

```txt
thank-you.html?form=contact
```

5. The thank-you page displays the appropriate confirmation message.

## JavaScript Integration

Form behavior is managed by:

```txt
js/main.js
```

The script looks for forms using:

```html
data-form-type
```

If you customize the forms, ensure these attributes remain consistent unless you also update the JavaScript.

## Recommended Form Services

Abyssal Blue Pro works well with:

* Formspree
* Netlify Forms
* EmailJS
* Getform
* Basin
* Custom Backend Solutions

Choose the option that best matches your hosting environment and workflow.

## Option 1: Formspree

### Step 1

Create a Formspree form and obtain your endpoint URL.

### Step 2

Replace the form action with your endpoint:

```html
<form action="https://formspree.io/f/your-id" method="POST">
```

### Step 3

Submit a test inquiry and verify delivery.

### Step 4

Adjust the thank-you page flow if desired.

## Option 2: Netlify Forms

### Step 1

Update the form tag:

```html
<form
  name="booking"
  method="POST"
  data-netlify="true"
>
```

### Step 2

Add the hidden form-name field:

```html
<input
  type="hidden"
  name="form-name"
  value="booking"
/>
```

### Step 3

Deploy the site to Netlify.

### Step 4

Verify submissions appear in the Netlify dashboard.

## Option 3: EmailJS

### Step 1

Create:

* EmailJS Service
* Email Template
* Public Key

### Step 2

Update:

```txt
js/main.js
```

to submit through EmailJS.

### Step 3

Only display a success message or redirect after EmailJS confirms a successful submission.

### Step 4

Test successful and failed submissions.

## Option 4: Custom Backend

### Step 1

Replace the form action:

```html
<form action="/api/contact" method="POST">
```

### Step 2

Ensure field names match your backend handler.

### Step 3

Process submissions server-side.

### Step 4

Return success and error responses appropriately.

### Step 5

Implement:

* Validation
* Spam protection
* CSRF protection
* Rate limiting

where applicable.

## Updating The Thank-You Page

The included:

```txt
thank-you.html
```

page supports both booking and contact inquiries.

You may:

* Keep the existing behavior
* Customize the messaging
* Create separate success pages
* Redirect users elsewhere

## Testing Checklist

Before launching:

* Verify form actions
* Verify field names
* Verify required fields
* Verify email
