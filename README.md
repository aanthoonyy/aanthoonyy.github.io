# anthonydevito.dev

My personal site — plain HTML and CSS, no build step. Solarized Light, terminal vibe.

## Structure

```
index.html          landing page (ascii banner + menu)
projects.html       projects list  -> projects/*.html detail pages
education.html      education
experience.html     experience
open-source.html    open source contributions -> blog/*.html writeups
styles.css          all styles
projects/           project detail pages + media
blog/               long-form writeups
```

## Running locally

It's static, so just serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

Pushing to `main` deploys to GitHub Pages via `.github/workflows/deploy.yml`,
which uploads the repo as-is (no build). Custom domain is set in `CNAME`.
