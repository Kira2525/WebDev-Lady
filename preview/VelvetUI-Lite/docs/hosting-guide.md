# VelvetUI Lite Hosting Guide

VelvetUI Lite is a lightweight static website template that can be hosted on virtually any platform capable of serving HTML, CSS, JavaScript, and image files.

No build tools, package managers, frameworks, or server-side software are required.

## Included Files

```txt
404.html
index.html
LICENSE.txt
README.md
robots.txt
site.webmanifest
sitemap.xml
thank-you.html
```

## Recommended Hosting Providers

VelvetUI Lite works well with:

* Netlify
* Vercel
* Cloudflare Pages
* GitHub Pages
* Shared Hosting
* cPanel Hosting
* Traditional FTP Hosting

## Before Uploading

Before publishing your website:

1. Replace the demo business name.
2. Replace contact information.
3. Replace social media links.
4. Update page metadata.
5. Update favicon and branding assets.
6. Update the domain references in:

```txt
robots.txt
sitemap.xml
site.webmanifest
```

7. Test the inquiry form locally.

## Netlify Deployment

### Option 1: Drag and Drop

1. Create a Netlify account.
2. Open the Sites dashboard.
3. Drag the VelvetUI Lite project folder into Netlify.
4. Wait for deployment to complete.

### Option 2: GitHub

1. Upload the template to GitHub.
2. Connect the repository to Netlify.
3. Deploy using the repository root.

No build settings are required.

## Vercel Deployment

1. Create a Vercel account.
2. Import the project folder or repository.
3. Select **Other** when prompted for a framework.
4. Leave build settings empty.
5. Deploy the website.

No build command is required.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Upload the VelvetUI Lite files.
3. Open Repository Settings.
4. Navigate to Pages.
5. Deploy from the main branch.

GitHub Pages will generate a public URL automatically.

## Shared Hosting or cPanel

1. Upload all template files.
2. Place the files inside:

```txt
public_html
```

or your preferred web root.

3. Confirm:

```txt
index.html
```

is located at the website root.

4. Verify that all assets load correctly.

## Custom 404 Page

VelvetUI Lite includes:

```txt
404.html
```

Many hosting providers automatically use this page when a visitor reaches a missing URL.

After publishing:

1. Visit a fake URL such as:

```txt
yourdomain.com/missing-page
```

2. Verify the custom 404 page appears correctly.

## Post-Launch Checklist

After deployment:

* Test desktop layout
* Test tablet layout
* Test mobile layout
* Verify navigation links
* Verify contact information
* Verify social media links
* Verify the inquiry form
* Verify the thank-you page
* Verify the custom 404 page
* Verify favicon loading
* Verify manifest loading
* Verify sitemap accessibility
* Verify robots.txt accessibility

## Final Launch Review

Before considering the website complete:

* Replace all demo content
* Replace all placeholder branding
* Update SEO metadata
* Update sitemap.xml
* Update robots.txt
* Update site.webmanifest
* Test all links
* Test all buttons
* Check for broken images

Once these steps are complete, VelvetUI Lite is ready for production deployment.
