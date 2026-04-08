# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SympleHost Knowledge Base — a static documentation site built with Astro 6 and TinaCMS. Part of the SympleHost platform ecosystem (property management with multi-channel messaging and AI).

## Commands

```bash
pnpm run dev          # Start TinaCMS + Astro dev server (localhost:4321)
pnpm run build        # Production build: tinacms build && astro build → dist/
pnpm run preview      # Preview production build locally
```

TinaCMS admin: `http://localhost:4321/admin/index.html` (local dev)

## Architecture

**Static site generation** — all pages pre-rendered at build time via `getStaticPaths()`. No API routes or SSR.

**Build pipeline**: TinaCMS build (generates admin UI + connects to TinaCloud) → Astro build (generates static HTML to `dist/`).

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
- `tinacms` / `@tinacms/cli` — CMS admin and build tooling (connects to TinaCloud in production)
- `@astrojs/react` — React integration (used by TinaCMS admin)
- `@astrojs/markdoc` — Markdoc content format support
