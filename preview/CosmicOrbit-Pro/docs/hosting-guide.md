# Cosmic Orbit Pro Hosting Guide

## Overview

Cosmic Orbit Pro is a fully static HTML, CSS, and JavaScript website template.

No build process, package manager, database, or server-side software is required.

The template can be deployed with virtually any modern web host that serves static files.

Recommended deployment paths:

* Drag-and-drop static site hosting
* Git-connected static site hosting
* Traditional hosting control panels
* Custom server environments

---

# Before Deployment

Before publishing your website:

- Replace placeholder content
- Update branding
- Replace logo and favicon
- Configure contact and booking forms
- Update social links
- Update `sitemap.xml`
- Update `robots.txt`
- Update `site.webmanifest`
- Test desktop, tablet, and mobile layouts

---

# Deployment Options

## Option 1: Drag-and-Drop Static Hosting

1. Create an account with your preferred static host.
2. Open the new-site or upload area in that dashboard.
3. Upload the full project folder or the extracted site files.
4. Publish the site.
5. Review the generated preview URL before connecting your final domain.

## Option 2: Git-Connected Static Hosting

1. Create a repository for the template files.
2. Push the project to your preferred Git host.
3. Connect the repository to your preferred static hosting platform.
4. Confirm the site is configured as a plain static website.
5. Publish and review the preview URL.

## Option 3: Traditional Hosting Control Panel

1. Sign in to your hosting control panel.
2. Open the file manager for the website root directory.
3. Upload the project files or a ZIP archive.
4. Extract the archive if needed.
5. Confirm the `css`, `js`, and `images` folders remain intact.

## Option 4: Custom Server Environment

1. Copy the template files to the public web directory.
2. Preserve the existing file and folder structure.
3. Confirm the server is set to serve `index.html` as the default document.
4. Test asset paths and page links after deployment.

---

# Form Handling

Cosmic Orbit Pro does not require a specific form vendor.

Connect the booking and contact forms to:

* Your preferred form service
* A custom API endpoint
* A server-side submission workflow

Review:

```text
docs/form-setup-guide.md
```

for setup instructions.

---

# Folder Structure

Keep the folder structure unchanged.

Required folders:

```text
css/
js/
images/
```

Required files:

```text
index.html
robots.txt
sitemap.xml
site.webmanifest
```

Moving files without updating paths may break the site.

---

# Custom Domains

After deployment:

1. Purchase or choose your domain.
2. Add the domain in your hosting dashboard.
3. Update the required DNS records.
4. Wait for DNS propagation to complete.

DNS changes can take up to 48 hours to fully propagate.

---

# SSL Certificates

SSL enables secure HTTPS connections.

Always verify:

```text
https://yourdomain.com
```

loads correctly after launch.

Most modern hosts provide SSL automatically or through a simple dashboard setup.

---

# SEO Setup

Before launch:

### Update Sitemap

Replace:

```text
https://yourdomain.com
```

with your live domain.

### Update Robots

Replace:

```text
Sitemap: https://yourdomain.com/sitemap.xml
```

with your final sitemap URL.

### Update Metadata

Review:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph URLs

---

# Final Launch Checklist

Before publishing:

- Logo updated
- Favicon updated
- Contact information updated
- Social links updated
- Booking form tested
- Contact form tested
- `sitemap.xml` updated
- `robots.txt` updated
- `site.webmanifest` updated
- Desktop layout tested
- Tablet layout tested
- Mobile layout tested
- Domain connected
- SSL active
- Navigation verified
- Thank-you page verified
- `404.html` verified
