# Form Setup Guide

## Overview

The contact form lives in `contact.html`.

Current form basics:

- Method: `POST`
- Default action: `thank-you.html`
- Static-friendly structure with `data-netlify="true"`
- Shared JavaScript support for inquiry intent and thank-you messaging

## Included Fields

Visible fields:

- `name`
- `email`
- `topic`
- `company`
- `message`

Hidden fields:

- `form-name`
- `intent`

## Change The Form Action

To point the form somewhere else:

1. Open `contact.html`.
2. Find the `<form>` tag.
3. Change the `action` value to your provider endpoint or custom URL.

If you change providers, test the redirect and field capture right away.

## Keep The Thank-You Redirect

The site is already set up to end on `thank-you.html`.

To preserve that behavior:

- Keep `action="thank-you.html"` for local previews
- Or configure your provider to redirect to `thank-you.html` after a successful submission
- If your provider uses a custom success URL, point it to `/thank-you.html`

The shared JavaScript in `js/script.js` also simulates the redirect automatically during local file or localhost previews.

## Netlify Forms

1. Keep `method="POST"` and `data-netlify="true"` on the form.
2. Keep the hidden `form-name` field.
3. Make sure the form `name` attribute matches the `form-name` value.
4. Deploy the site to Netlify.
5. Submit the form once on the live site to confirm Netlify is capturing entries.

If you want Netlify to redirect after submission, keep `action="thank-you.html"` or set a matching success path in Netlify.

## Formspree

1. Create a form in your Formspree dashboard.
2. Copy the Formspree endpoint URL.
3. Replace the `action` value in `contact.html` with that endpoint.
4. Keep `method="POST"`.
5. Configure Formspree to redirect to `thank-you.html` after a successful submission.

Test that every field is received correctly after publishing.

## Getform

1. Create a form endpoint in Getform.
2. Copy the endpoint URL.
3. Replace the form `action` in `contact.html`.
4. Keep `method="POST"`.
5. Configure the success redirect to `/thank-you.html` if needed.

Submit a test entry after publishing to confirm field names are correct.

## Custom Endpoint

If you have your own backend:

1. Replace the form `action` with your endpoint URL.
2. Keep the field `name` attributes unchanged unless your backend expects different keys.
3. Return or trigger a redirect to `thank-you.html` after a successful submission.
4. If you change the success behavior, test it locally and on the live site.

## What To Test After Setup

After connecting the form, always test:

- Form submission succeeds
- `thank-you.html` opens after submission
- `name`, `email`, `topic`, `company`, and `message` are received correctly
- Hidden `intent` values still change when CTA links use query parameters
- Mobile and tablet form layout still looks correct
