# GitHub Pages Modern Site

This is a separate project outside website-bouwer, built with a modern stack:

- Astro
- React islands
- TypeScript (strict)
- MDX content
- GitHub Pages deployment with GitHub Actions

## Project path

`C:/Users/Robert/Documents/Workspaces/github-pages-modern-site`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

Deployment workflow is included at:

`.github/workflows/deploy.yml`

It deploys automatically on push to `main`.

One-time GitHub setup:

1. Push this directory to its own GitHub repository.
2. Open repository Settings > Pages.
3. Set Source to GitHub Actions.

## Base URL behavior

`astro.config.mjs` auto-computes `site` and `base` from `GITHUB_REPOSITORY` in CI:

- User/org pages repo (`<owner>.github.io`) -> `base: /`
- Project repo -> `base: /<repo>`

This avoids manual base path edits for standard GitHub Pages setups.
