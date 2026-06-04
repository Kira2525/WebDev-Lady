# Form Setup Guide

## Important

The included forms are demonstration forms intended for template previews.

No submissions will be sent unless a form service or backend is connected.

## Current Form Behavior

The included forms are demo-only by default.

- `booking.html` contains the booking form
- `contact.html` contains the contact form

Both currently redirect to `thank-you.html` for preview purposes.

## Connecting A Live Form Service

Update the `action` attribute on each form when you connect a live service or backend.

Current demo form files:

- `booking.html`
- `contact.html`

## Recommended Form Services

Popular options include:

- Formspree
- Netlify Forms
- EmailJS
- Custom backend solutions

Choose the option that best fits your hosting environment and technical requirements.

## How The Thank-You Flow Works

`js/main.js` looks for forms with `data-form-type`.

When the form action points to `thank-you.html`, the script:

1. Validates the form.
2. Stores the form type in session storage.
3. Redirects to `thank-you.html?form=booking` or `thank-you.html?form=contact`.
4. Updates the thank-you page copy based on the form type.

## Formspree

1. Create a form endpoint in Formspree.
2. Replace the form `action` with your Formspree URL.
3. Set `method="POST"` on the form if needed.
4. Remove or update any demo disclaimer text.
5. Submit a test entry.

## Netlify Forms

1. Add `name` and `data-netlify="true"` to the form.
2. Add a hidden input like `form-name` if Netlify requires it.
3. Deploy the site to Netlify.
4. Replace the demo `action` if you prefer a custom success page setup.
5. Test a live submission from the deployed site.

## EmailJS

1. Create an EmailJS service, template, and public key.
2. Replace the demo redirect logic with EmailJS submission logic in `js/main.js`.
3. Keep validation in place.
4. Show a success message or redirect only after EmailJS confirms success.
5. Test successful and failed requests.

## Custom Backend

1. Point the form `action` to your backend route.
2. Add the correct `method`.
3. Make sure field names match your server-side handler.
4. Update success and error behavior in `js/main.js` if needed.
5. Test validation, success, and failure responses.
6. Verify CSRF protection, spam prevention, and server-side validation where appropriate.

## Final Checklist

Before launching:

- Verify form actions.
- Verify field names.
- Verify email delivery.
- Verify success page behavior.
- Verify mobile form usability.
- Verify spam protection.
- Test multiple submissions.
