=========================================================
APEX MOBILE DETAILING
FORM SETUP GUIDE
Version 1.0
=========================================================

The contact form included with this template is HTML only.

To receive customer inquiries, connect the form to a form
processing service.

No server or database is included.

=========================================================
OPTION 1 (RECOMMENDED)
FORMSUBMIT
FREE
=========================================================

Website

https://formsubmit.co/

Advantages

✔ Free
✔ No coding
✔ Unlimited forms
✔ Email notifications
✔ Works with any web host

---------------------------------------------------------
STEP 1
---------------------------------------------------------

Go to

https://formsubmit.co/

---------------------------------------------------------
STEP 2
---------------------------------------------------------

Replace the opening form tag

<form>

with

<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">

Replace

YOUR_EMAIL@example.com

with your email address.

---------------------------------------------------------
STEP 3
---------------------------------------------------------

Add the following hidden fields inside the form.

<input type="hidden" name="_subject" value="New Booking Request">

<input type="hidden" name="_captcha" value="false">

<input type="hidden" name="_next" value="thank-you.html">

---------------------------------------------------------
STEP 4
---------------------------------------------------------

Upload your website.

---------------------------------------------------------
STEP 5
---------------------------------------------------------

Submit the contact form once.

---------------------------------------------------------
STEP 6
---------------------------------------------------------

Check your email.

FormSubmit will send a verification email.

Click Verify.

Your form is now live.

=========================================================
OPTION 2
NETLIFY FORMS
FREE
=========================================================

If your website is hosted on Netlify:

Replace

<form>

with

<form
name="Booking Form"
method="POST"
data-netlify="true">

Add

<input type="hidden" name="form-name" value="Booking Form">

Deploy your website.

Netlify will automatically collect submissions.

=========================================================
OPTION 3
FORMSPREE
FREE & PAID
=========================================================

Website

https://formspree.io/

Create an account.

Create a new form.

Replace

<form>

with

<form action="YOUR_FORMSPREE_URL" method="POST">

Save.

Upload your website.

=========================================================
OPTION 4
GETFORM
FREE & PAID
=========================================================

Website

https://getform.io/

Create a form.

Copy your endpoint.

Replace

<form>

with

<form action="YOUR_GETFORM_ENDPOINT" method="POST">

Done.

=========================================================
FORM FIELDS
=========================================================

The template already includes:

✔ Name

✔ Email

✔ Phone

✔ Package

✔ Vehicle Information

You can add more fields if desired.

Examples

Vehicle Make

Vehicle Model

Vehicle Year

Address

Preferred Date

Preferred Time

Special Requests

=========================================================
REDIRECT AFTER SUBMITTING
=========================================================

To send customers to the Thank You page after submitting,
use

thank-you.html

Most form services support automatic redirects.

=========================================================
SPAM PROTECTION
=========================================================

Most form providers include spam protection.

Additional options include

Google reCAPTCHA

Cloudflare Turnstile

Honeypot fields

=========================================================
TESTING YOUR FORM
=========================================================

Before publishing your website:

✓ Submit a test form

✓ Check that emails arrive

✓ Verify all fields are included

✓ Verify the Thank You page opens

✓ Test on desktop

✓ Test on tablet

✓ Test on mobile

=========================================================
COMMON ISSUES
=========================================================

Problem

No email received

Solution

Verify your email with the form provider.

---------------------------------------------------------

Problem

Thank You page does not open

Solution

Check the redirect URL.

---------------------------------------------------------

Problem

Form submits but no data arrives

Solution

Verify the form action URL.

---------------------------------------------------------

Problem

Form won't submit

Solution

Make sure every required field has a name attribute.

=========================================================
RECOMMENDED FOR MOST USERS
=========================================================

★★★★★ FormSubmit

Requires no programming.

Works on nearly every web host.

Can be set up in less than five minutes.

=========================================================
SUPPORT
=========================================================

This template includes only the HTML contact form.

Support for third-party services such as FormSubmit,
Formspree, Netlify Forms, or Getform is provided by their
respective websites and documentation.