# Zachary Gould Portfolio

A dependency-free static portfolio site built with HTML, CSS, and vanilla JavaScript.

## Launch locally

From this directory, start a local HTTP server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser. Stop the server with `Ctrl+C`.

If Python is not available, and Node.js is installed, you can use:

```bash
npx serve .
```

Open the URL printed by the command, usually `http://localhost:3000`.

## Edit the site

- Update portfolio text, links, projects, workshops, and writing in `content.js`.
- Update page structure in `index.html`.
- Update visual styling in `styles.css`.
- Keep referenced files in `assets/`, including the resume, favicon, and project images.

The page has no build step and no package installation is required.

## Deploy

Deploy the whole folder to any static hosting provider such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel. The site must be served over HTTP(S) so the relative assets load correctly.

Before publishing, replace the placeholder LinkedIn URL in `content.js` and confirm that the resume and image files in `assets/` are present.
