# Webinars and Videos Section — Design Spec

**Date:** 2026-04-21
**Status:** Draft
**Reference:** Hostaway's `/hc/en-us/categories/.../Webinars-and-Videos`

## Overview

Add a new top-level section to the SympleHost Knowledge Base dedicated to video content — webinars, customer success hours, and meet-ups. Each event gets its own landing page with either a YouTube recording (past events) or a registration CTA (upcoming events). The section index shows upcoming events prominently and past recordings in a browsable grid.

## Goals

- Host rich landing pages for SympleHost live and recorded video content.
- Cleanly distinguish upcoming events (promote registration) from past recordings (promote viewing).
- Support three event types out of the gate: **webinars**, **customer success hours**, **meet-ups**.
- Keep the editing experience in TinaCMS intuitive — events are a distinct content type from articles.

## Non-Goals

- Gated content / email capture (registration handled by external tool like Luma/Zoom).
- Self-hosted video upload (YouTube only for now).
- Event reminders / email notifications.
- Comments / discussion threads on event pages.
- Transcripts, slides, or multi-language support (can be added later without schema breakage).

## Architecture

A new Astro content collection `events` sits alongside the existing `articles` and `categories` collections. New static routes under `/webinars-and-videos/` render the section index and per-event landing pages. The homepage gets a fourth card pointing to the new section.

## Content Model

New collection: `src/content/events/<slug>.md`

```yaml
---
title: "How to Scale Your Vacation Rental Business"
description: "Learn proven strategies from top SympleHost hosts."
eventType: webinar                    # webinar | customer-success-hour | meet-up
eventDate: "2026-05-15T15:00:00Z"     # ISO datetime — drives upcoming vs past
duration: 45                          # minutes
youtubeId: "dQw4w9WgXcQ"              # optional — present = recording/stream exists
registerUrl: "https://luma.co/e/..."  # optional — present = registration is open
thumbnail: "/screenshots/events/scale-business.jpg"  # optional; falls back to YouTube thumbnail
speakers:
  - name: "Jane Doe"
    role: "Head of Customer Success, SympleHost"
    avatar: "/speakers/jane.jpg"
tags: [growth, operations]
draft: false
---

Markdown body: agenda, what you'll learn, related resources, etc.
```

### Derived State

State is computed at build time from `eventDate` + `youtubeId`:

| `eventDate` vs now | `youtubeId` | State | CTA |
|---|---|---|---|
| Future | any | **Upcoming** | "Register" button (if `registerUrl` present) |
| Past | present | **On-demand** | YouTube player |
| Past | absent | **Archived** | Hidden from default views |

Because Astro is statically generated, state transitions (upcoming → on-demand) only happen on the next build. Acceptable trade-off; nightly Render rebuild or manual deploy on event day covers it.

## Routing

| Route | File | Description |
|---|---|---|
| `/webinars-and-videos/` | `src/pages/webinars-and-videos/index.astro` | Section index — upcoming events + past recordings grid |
| `/webinars-and-videos/[slug]` | `src/pages/webinars-and-videos/[slug].astro` | Per-event landing page |

Static routes take precedence over the `[category]/index.astro` dynamic route, so no conflict with the existing category routing.

## Page Layouts

### Section Index (`/webinars-and-videos/`)

- **Hero:** "Webinars & Videos" heading + short intro paragraph.
- **Upcoming Events** section (only rendered if any upcoming events exist):
  - Card list, sorted by `eventDate` ascending.
  - Each card: event-type badge, date + time, title, speakers, "Register" button.
- **Filter tabs:** All / Webinars / Customer Success Hours / Meet-ups. Client-side filter (no page reload).
- **Past Recordings** grid:
  - Card per event: thumbnail (custom or YouTube-derived), title, duration, date, speakers.
  - Sorted by `eventDate` descending.

### Per-Event Landing Page (`/webinars-and-videos/[slug]`)

- **Hero:** event-type badge, title, date/time, duration.
- **Primary media:**
  - If on-demand → embedded YouTube player (`https://www.youtube.com/embed/<id>`).
  - If upcoming → registration card with big "Register" CTA, date/time, "Add to calendar" link (optional v2).
- **Speakers section:** avatar + name + role cards.
- **Description:** markdown body (agenda, what you'll learn, related resources).

## Homepage Integration

`src/pages/index.astro` currently renders cards from the `categories` collection. Add a hardcoded fourth card for "Webinars & Videos" pointing to `/webinars-and-videos/`. The count shown will be "N recordings" (past events with a `youtubeId`), computed from the `events` collection.

Rationale for hardcoding instead of adding a category YAML: events are structurally a different content type, not a doc category. Mixing them into the `categories` loop would require special-casing the href and count logic anyway.

## TinaCMS Configuration

Add an `event` collection to `tina/config.ts` mirroring the Astro schema:

- `title`, `description`, `eventType` (dropdown with 3 options), `eventDate` (datetime), `duration` (number), `youtubeId`, `registerUrl`, `thumbnail` (image), `speakers` (object list with name/role/avatar), `tags` (string list), `draft` (boolean), `body` (rich-text).

Editors will see a new "Events" section in the TinaCMS sidebar, separate from Articles.

## Assets

New public-folder conventions:
- `public/speakers/` — speaker avatar images.
- `public/screenshots/events/` — custom event thumbnails (optional; YouTube thumbnail is the fallback).

## Styling

Reuse existing CSS variables (`--heading-color`, `--primary`, `--background`, `--border`). New components (event card, speaker card, video embed) follow the existing Merriweather/Inter typography and purple heading color. No new global styles needed.

## Testing

- `pnpm run build` succeeds with zero events (graceful empty state).
- Sample event fixtures: one upcoming webinar, one past on-demand webinar, one past customer-success-hour, one past meet-up — exercise every state and filter.
- Homepage shows 4 cards, new one links correctly.
- Section index: upcoming section hidden when no upcoming events; filter tabs update grid correctly.
- Per-event page: upcoming shows registration card, past shows YouTube embed.

## Open Questions (deferred)

- Do we want "Add to calendar" (.ics download) on upcoming event pages? *Deferred to v2.*
- Do we want a featured/hero event on the section index? *Start without; revisit when we have volume.*
- Should past events without a recording be fully hidden or shown as archived? *Hidden by default; can add an "Archive" view later.*
