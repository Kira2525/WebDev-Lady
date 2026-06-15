# Velvet Studio Inquiry Form Guide

The contact form is located in `contact.html` and sends visitors to `thank-you.html` after submission.

## Current Behavior

The form uses:

```html
action="thank-you.html"
method="get"
data-static-form="true"
```

The JavaScript intercepts this local static flow so inquiry details are not appended to the URL. This keeps local review clean while the confirmation page remains available.

## Live Collection

To collect real inquiries, connect the form to a service or backend endpoint:

1. Update the `action` value.
2. Update the `method` if the provider requires it.
3. Remove `data-static-form="true"` when the provider handles submission.
4. Keep the `name` attributes on all fields.
5. Submit a test inquiry and confirm delivery.

## Confirmation Page

`thank-you.html` is the confirmation page. Keep its copy short, reassuring, and aligned with VELVET STUDIO's voice.

## Fields

The form collects name, email, project type, timeline, budget, and project notes. Keep labels plain and readable so clients can complete the form quickly.

