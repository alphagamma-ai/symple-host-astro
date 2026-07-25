# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SympleHost Knowledge Base — a static documentation site built with Astro 6 and TinaCMS. Part of the SympleHost platform ecosystem (property management with multi-channel messaging and AI).

## Commands

```bash
pnpm run dev          # Astro dev server (localhost:4321)
pnpm run build        # Production build: astro build && pagefind --site dist → dist/
pnpm run preview      # Preview production build locally
pnpm run verify:build # Post-build smoke checks against dist/ (search index, .md endpoints)
```

## Architecture

**Static site generation** — all pages pre-rendered at build time via `getStaticPaths()`. No API routes or SSR.

**Build pipeline**: Astro build (static HTML → `dist/`) → Pagefind (crawls `dist/` and writes the search index + search UI bundle to `dist/pagefind/`).

### Content Model

Two Astro content collections defined in `src/content.config.ts`:

- **Categories** (`src/content/categories/*.yaml`) — title, description, emoji, order
- **Articles** (`src/content/articles/*.md`) — title, description, category (slug reference), tags, date, draft, markdown body

Articles reference categories by slug string (e.g. `category: platform-guides`). The TinaCMS schema in `tina/config.ts` mirrors this with a dropdown selector.

### Page Routing

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/pages/index.astro` | Category cards grid with article counts |
| `/{category}` | `src/pages/[category]/index.astro` | Article list for a category |
| `/{category}/{slug}` | `src/pages/[category]/[slug].astro` | Article detail with rendered markdown |

All pages use `src/layouts/Base.astro` which provides the header (logo, nav, auth buttons), footer, and global styles.

### Adding Content

Create markdown files directly in `src/content/articles/`:

```yaml
---
title: Article Title
description: Short description for listings
category: platform-guides  # must match a category filename
tags:
  - Tag1
  - Tag2
date: '2026-04-08'
draft: false
---

Markdown content here...
```

New categories go in `src/content/categories/` as YAML files. When adding a new category, also update the `options` array in `tina/config.ts` under the article's `category` field.

## Search

Site search is [Pagefind](https://pagefind.app) — a static index built from `dist/` after the Astro build, queried in the browser. No search service, no API keys, no runtime cost.

- **UI**: `src/components/Search.astro` renders Pagefind's Component UI (`<pagefind-*>` custom elements). `variant="header"` is the ⌘K/Ctrl-K modal mounted in `Base.astro`; `variant="hero"` is the inline searchbox on the homepage. The bundle (`/pagefind/pagefind-component-ui.{css,js}`) is emitted by the Pagefind build, so `Base.astro` references it with plain `<link>`/`<script is:inline>` tags rather than importing it.
- **Theming**: Pagefind's `--pf-*` custom properties are mapped to the site palette in the `:root` block of `Base.astro`. Rules targeting generated `.pf-*` elements must be global (`<style is:global>`) and often need `!important` — Pagefind's own stylesheet resets those elements at ID-level specificity.
- **Localization**: Pagefind splits the index by `<html lang>`, so `/`, `/jp/` and `/id/` each search only their own locale, and the component UI's own labels follow suit. Placeholder copy lives in `uiCopy` in `src/lib/locales.ts`.
- **Dev mode**: `/pagefind/` only exists after a build. `astro.config.mjs` has a `pagefind-dev-server` integration that serves `dist/pagefind/` in `astro dev` — run `pnpm run build` once first, and re-run it to pick up new content.

### What gets indexed

Pages opt in via the `searchable` prop on `Base.astro`, which puts `data-pagefind-body` on `<main>`. Anything that does not opt in is excluded, including the header, footer, listing pages and redirect stubs. Currently indexed: article detail pages (all three locales), video/webinar detail pages, and `/videos/walkthroughs/`.

When adding a page type, decide deliberately:

- **Content page** → pass `searchable` and a `searchCategory` (the value behind the modal's category filter, and shown as result metadata).
- **Listing page** → leave it out; its entries are indexed on their own pages.
- **Duplicate route** → index only the canonical URL. Events render at both `/videos/…`|`/webinars/…` and the legacy `/webinars-and-videos/…`; the legacy route passes `searchable={false}` so each event appears once.

Use `data-pagefind-ignore` for in-content chrome that pollutes excerpts (breadcrumbs, tag chips). `pnpm run verify:build` asserts all of the above after a build.

## Styling

- **Fonts**: Merriweather (headings), Inter (body text)
- **Colors**: Deep purple headings (`--heading-color: #581c87`), softer primary (`--primary: #7F56D9`), light gray background (`--background: #fafafa`)
- **CSS**: Scoped styles in each `.astro` file + global CSS variables in `Base.astro`
- **No Tailwind** — plain CSS with custom properties

## Deployment

Deployed to **Render** as a static site. Config in `render.yaml`.

- Build command: `pnpm install && pnpm run build`
- Publish directory: `./dist`
- Node version: 22.12.0
- Required env vars: `TINA_CLIENT_ID`, `TINA_TOKEN` (set in Render dashboard, not committed)

## Key Dependencies

- `astro` — static site framework
- `pagefind` — static search index + search UI, run over `dist/` after the Astro build
- `@astrojs/react` — React integration
- `@astrojs/markdoc` — Markdoc content format support
