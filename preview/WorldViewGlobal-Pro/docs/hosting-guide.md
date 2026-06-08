# WorldView Global Pro Hosting Guide

## Overview

WorldView Global Pro is a fully static website built with HTML, CSS, JavaScript, SVG assets, and optional third-party form providers.

No server-side software is required.

You can host the template on virtually any hosting provider that supports static websites.

Recommended platforms:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Traditional cPanel Hosting

---

# Before Uploading

Before publishing your website:

✓ Replace placeholder content

✓ Replace logos and brand assets

✓ Configure your contact form

✓ Update SEO settings

✓ Update sitemap.xml

✓ Update robots.txt

✓ Replace example URLs with your domain

✓ Test desktop, tablet, and mobile layouts

---

# Netlify (Recommended)

Netlify is one of the easiest ways to host WorldView Global Pro.

### Option 1: Drag & Drop Deployment

1. Create a Netlify account.
2. Click **Add New Site**.
3. Choose **Deploy Manually**.
4. Drag the entire project folder into Netlify.
5. Wait for deployment to complete.

### Option 2: Git Deployment

1. Upload the project to GitHub.
2. Connect the repository to Netlify.
3. Select the repository.
4. Leave build settings empty for a static site.
5. Deploy.

### Netlify Forms

If using Netlify Forms:

* Keep `data-netlify="true"` on the form.
* Keep the hidden `form-name` field.
* Submit a test form after deployment.
* Verify submissions appear in the Netlify dashboard.

### Custom Domain

1. Open Site Settings.
2. Select Domain Management.
3. Add your domain.
4. Follow Netlify DNS instructions.
5. Wait for DNS propagation.

Netlify automatically provides SSL certificates.

---

# Vercel

Vercel provides fast static hosting with global CDN delivery.

### Deploy

1. Create a Vercel account.
2. Import your GitHub repository.
3. Leave framework detection disabled if prompted.
4. Deploy.

### Notes

* Works perfectly for static websites.
* SSL certificates are automatic.
* Custom domains are supported.

### Contact Forms

Vercel does not provide built-in form processing.

Use:

* Formspree
* Getform
* Basin
* Custom API endpoint

---

# Cloudflare Pages

Cloudflare Pages offers excellent performance and security.

### Deploy

1. Create a Cloudflare account.
2. Open Pages.
3. Create a new project.
4. Connect GitHub or upload your files.
5. Deploy.

### Benefits

* Global CDN
* DDoS protection
* Free SSL
* Fast loading times

### Contact Forms

Use:

* Formspree
* Getform
* Cloudflare Workers
* Custom backend

---

# GitHub Pages

GitHub Pages is ideal for portfolios, demos, and simple deployments.

### Deploy

1. Create a GitHub repository.
2. Upload the template files.
3. Open Repository Settings.
4. Select Pages.
5. Choose the deployment branch.
6. Save changes.

GitHub will generate a public URL.

### Important

GitHub Pages does not process forms.

You must use:

* Formspree
* Getform
* Custom backend

for contact form submissions.

---

# cPanel / Shared Hosting

Most traditional hosting providers support WorldView Global Pro.

Examples:

* Bluehost
* Hostinger
* SiteGround
* Namecheap
* InMotion Hosting

### Deploy

1. Log into your hosting account.
2. Open File Manager.
3. Navigate to:

```text
public_html
```

4. Upload the entire project.
5. Extract the ZIP file if needed.
6. Verify all folders remain intact.

### Alternative FTP Method

You may also upload using:

* FileZilla
* Cyberduck
* WinSCP

---

# Connect A Custom Domain

Most hosting providers follow a similar process:

1. Purchase a domain.
2. Add the domain to your hosting provider.
3. Update DNS records.
4. Wait for propagation.

DNS updates can take anywhere from a few minutes to 48 hours.

---

# SSL Certificates

SSL enables secure HTTPS connections.

Most modern hosts provide SSL automatically.

Always confirm your site loads using:

```text
https://yourdomain.com
```

and not only:

```text
http://yourdomain.com
```

---

# SEO Checklist

Before launch:

✓ Update page titles

✓ Update meta descriptions

✓ Update Open Graph tags

✓ Update canonical URLs

✓ Replace example.com references

✓ Update sitemap.xml

✓ Update robots.txt

✓ Submit sitemap.xml to Google Search Console

✓ Verify mobile responsiveness

---

# Final Launch Checklist

Before going live, test:

✓ Navigation links

✓ Mobile navigation menu

✓ Tablet layout

✓ Contact form

✓ Thank-you page

✓ Images

✓ Buttons

✓ Pricing page

✓ FAQ section

✓ Footer links

✓ Social media links

✓ Sitemap.xml

✓ Robots.txt

✓ SSL certificate

✓ Custom domain

---

# Troubleshooting

### CSS Is Missing

Check that:

* css/styles.css exists
* css/tablet.css exists
* css/mobile.css exists

Verify file paths were not changed.

### Images Are Missing

Confirm:

* Images were uploaded
* Asset filenames match the HTML references
* Folder structure remains intact

### Contact Form Doesn't Work

Verify:

* Provider is configured
* Form action is correct
* Form fields still have name attributes
* Redirect URL is configured correctly

### Navigation Links Fail

Check all href values and confirm page filenames have not changed.

---

# Support

WorldView Global Pro is built as a static website template and is compatible with virtually all modern hosting providers.

For best results, test every page and form workflow before launching to the public.
