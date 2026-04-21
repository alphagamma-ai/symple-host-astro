# Webinars and Videos Section — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a new `/webinars-and-videos/` section with a section index and per-event landing pages driven by a new Astro `events` content collection, editable in TinaCMS.

**Architecture:** A dedicated `events` content collection (separate from `articles`) holds one markdown file per event. Event state (upcoming vs on-demand) is derived at build time from `eventDate` and `youtubeId`. Static routes under `src/pages/webinars-and-videos/` render the section index and per-event landing pages, taking precedence over the existing `[category]` dynamic route. The homepage gets a fourth hardcoded card pointing to the new section.

**Tech Stack:** Astro 6 (content collections + glob loader + `getStaticPaths`), TinaCMS (content editing), plain CSS with existing design tokens (`--primary`, `--heading-color`, `--border`). YouTube iframe embeds for on-demand videos. No new runtime dependencies.

**Testing approach:** This project has no test framework. Verification is (1) `pnpm run build` success and (2) manual dev-server walkthrough of every event state. Four sample event fixtures exercise every branch of the rendering logic (upcoming webinar, past webinar, past customer-success-hour, past meet-up).

**Spec:** `docs/superpowers/specs/2026-04-21-webinars-and-videos-section-design.md`

---

## File Structure

**Create:**
- `src/content.config.ts` — add `events` collection alongside existing `categories` + `articles`
- `src/content/events/sample-scaling-webinar.md` — upcoming webinar fixture
- `src/content/events/past-automated-messaging.md` — past webinar fixture (on-demand)
- `src/content/events/past-cs-hour-april.md` — past customer-success-hour fixture
- `src/content/events/past-meetup-lisbon.md` — past meet-up fixture
- `src/components/YouTubeEmbed.astro` — responsive YouTube iframe component
- `src/components/SpeakerCard.astro` — speaker avatar + name + role card
- `src/components/EventCard.astro` — card used in both Upcoming and Past grids on section index
- `src/pages/webinars-and-videos/index.astro` — section index page
- `src/pages/webinars-and-videos/[slug].astro` — per-event landing page
- `src/lib/events.ts` — small helpers: event-type label lookup, thumbnail URL resolver, upcoming/past partition
- `public/speakers/.gitkeep` — so the directory exists for avatar uploads
- `public/screenshots/events/.gitkeep` — so the directory exists for custom thumbnails

**Modify:**
- `tina/config.ts` — add `event` collection and the `webinars-and-videos` option
- `src/pages/index.astro` — add 4th hardcoded card for Webinars & Videos and count logic

---

## Task 1: Add events collection schema

**Files:**
- Modify: `src/content.config.ts`

- [ ] **Step 1: Add `events` collection to Astro content config**

Replace the contents of `src/content.config.ts` with:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    emoji: z.string().optional(),
    order: z.number().optional().default(0),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    section: z.string().optional(),
    sectionOrder: z.number().optional(),
    tags: z.array(z.string()).optional().default([]),
    date: z.union([z.string(), z.date()]).optional().transform(val =>
      val instanceof Date ? val.toISOString().split('T')[0] : val
    ),
    draft: z.boolean().optional().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eventType: z.enum(['webinar', 'customer-success-hour', 'meet-up']),
    eventDate: z.coerce.date(),
    duration: z.number().optional(),
    youtubeId: z.string().optional(),
    registerUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),
    speakers: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
    })).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { categories, articles, events };
```

- [ ] **Step 2: Verify build succeeds with empty collection**

Create the directory so the glob has something to scan (even if empty):

```bash
mkdir -p src/content/events
```

Run: `pnpm run build`
Expected: build completes with no errors. Astro will note zero events but that's fine.

- [ ] **Step 3: Commit**

```bash
git add src/content.config.ts src/content/events
git commit -m "Add events content collection schema"
```

---

## Task 2: Create the events helper module

**Files:**
- Create: `src/lib/events.ts`

- [ ] **Step 1: Create the helpers file**

```bash
mkdir -p src/lib
```

Create `src/lib/events.ts` with:

```ts
import type { CollectionEntry } from 'astro:content';

export type Event = CollectionEntry<'events'>;
export type EventType = Event['data']['eventType'];

export const EVENT_TYPE_LABEL: Record<EventType, string> = {
  'webinar': 'Webinar',
  'customer-success-hour': 'Customer Success Hour',
  'meet-up': 'Meet-up',
};

export const EVENT_TYPE_PLURAL: Record<EventType, string> = {
  'webinar': 'Webinars',
  'customer-success-hour': 'Customer Success Hours',
  'meet-up': 'Meet-ups',
};

export function isUpcoming(event: Event, now: Date = new Date()): boolean {
  return event.data.eventDate.getTime() > now.getTime();
}

export function hasRecording(event: Event): boolean {
  return Boolean(event.data.youtubeId);
}

/**
 * Returns the thumbnail URL for an event.
 * Prefers the custom thumbnail; falls back to YouTube's hqdefault; else null.
 */
export function thumbnailUrl(event: Event): string | null {
  if (event.data.thumbnail) return event.data.thumbnail;
  if (event.data.youtubeId) {
    return `https://i.ytimg.com/vi/${event.data.youtubeId}/hqdefault.jpg`;
  }
  return null;
}

export function partitionEvents(events: Event[], now: Date = new Date()) {
  const upcoming: Event[] = [];
  const past: Event[] = [];
  for (const ev of events) {
    if (isUpcoming(ev, now)) upcoming.push(ev);
    else if (hasRecording(ev)) past.push(ev); // archived (past, no video) hidden
  }
  upcoming.sort((a, b) => a.data.eventDate.getTime() - b.data.eventDate.getTime());
  past.sort((a, b) => b.data.eventDate.getTime() - a.data.eventDate.getTime());
  return { upcoming, past };
}

export function formatEventDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatEventTime(d: Date): string {
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}
```

- [ ] **Step 2: Verify TypeScript compiles via build**

Run: `pnpm run build`
Expected: build completes without TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/events.ts
git commit -m "Add events helpers: type labels, partition, thumbnail resolver"
```

---

## Task 3: Create sample event fixtures

**Files:**
- Create: `src/content/events/sample-scaling-webinar.md`
- Create: `src/content/events/past-automated-messaging.md`
- Create: `src/content/events/past-cs-hour-april.md`
- Create: `src/content/events/past-meetup-lisbon.md`

These fixtures exist so every rendering branch has a live example during dev. They can be deleted once real events are authored — see Task 11.

- [ ] **Step 1: Create upcoming webinar fixture**

Create `src/content/events/sample-scaling-webinar.md`. The date below (2026-05-15) is already in the future relative to the plan creation date (2026-04-21); if today's date is past that, change `eventDate` to any date 2-4 weeks out:

```markdown
---
title: "How to Scale Your Vacation Rental Business"
description: "Learn proven strategies from top SympleHost hosts for growing from one property to a portfolio."
eventType: webinar
eventDate: "2026-05-15T15:00:00Z"
duration: 45
registerUrl: "https://zoom.us/webinar/register/placeholder"
speakers:
  - name: "Jane Doe"
    role: "Head of Customer Success, SympleHost"
tags:
  - growth
  - operations
draft: false
---

## What you'll learn

- How top hosts structure their operations for scale
- Automation playbooks that save 10+ hours per week
- Pricing and channel strategy as you grow

## Agenda

1. Welcome & intros (5 min)
2. Case study: 1 → 50 properties (20 min)
3. Live Q&A (20 min)
```

- [ ] **Step 2: Create past webinar fixture**

Create `src/content/events/past-automated-messaging.md`:

```markdown
---
title: "Mastering Automated Guest Messaging"
description: "A deep dive into SympleHost's AI-powered guest messaging and how to set it up for your properties."
eventType: webinar
eventDate: "2026-03-10T15:00:00Z"
duration: 40
youtubeId: "dQw4w9WgXcQ"
speakers:
  - name: "Alex Rivera"
    role: "Product Lead, Messaging"
tags:
  - messaging
  - ai
draft: false
---

## Recap

In this session we walked through the end-to-end setup of SympleHost's automated messaging — from connecting your first channel to writing guest-facing templates with the AI copilot.

Timestamps: intro (0:00), channel setup (04:30), template authoring (12:15), live Q&A (28:00).
```

- [ ] **Step 3: Create past customer-success-hour fixture**

Create `src/content/events/past-cs-hour-april.md`:

```markdown
---
title: "Customer Success Hour — April Edition"
description: "Monthly open office hours with the SympleHost CS team. Ask us anything."
eventType: customer-success-hour
eventDate: "2026-04-02T16:00:00Z"
duration: 60
youtubeId: "dQw4w9WgXcQ"
speakers:
  - name: "Priya Patel"
    role: "Customer Success Manager"
  - name: "Marco Silva"
    role: "Customer Success Manager"
tags:
  - office-hours
draft: false
---

## What was covered

Community questions about onboarding, channel connections, pricing, and reporting — all answered live.
```

- [ ] **Step 4: Create past meet-up fixture**

Create `src/content/events/past-meetup-lisbon.md`:

```markdown
---
title: "SympleHost Meet-up — Lisbon"
description: "In-person meet-up with local hosts, networking, and a live product roadmap session."
eventType: meet-up
eventDate: "2026-02-20T18:00:00Z"
duration: 120
youtubeId: "dQw4w9WgXcQ"
speakers:
  - name: "SympleHost Team"
    role: "Product & Community"
tags:
  - in-person
  - community
draft: false
---

## Highlights

Recording from our first Lisbon meet-up. 40+ hosts joined for networking, the roadmap preview, and a panel on scaling short-term rentals in Portugal.
```

- [ ] **Step 5: Verify the fixtures parse**

Run: `pnpm run build`
Expected: build completes; no Zod validation errors. If a date fails to parse, check the ISO format.

- [ ] **Step 6: Commit**

```bash
git add src/content/events
git commit -m "Add sample event fixtures covering every render state"
```

---

## Task 4: Create YouTubeEmbed component

**Files:**
- Create: `src/components/YouTubeEmbed.astro`

- [ ] **Step 1: Write the component**

Create `src/components/YouTubeEmbed.astro`:

```astro
---
interface Props {
  videoId: string;
  title: string;
}

const { videoId, title } = Astro.props;
const src = `https://www.youtube-nocookie.com/embed/${videoId}`;
---

<div class="yt-embed">
  <iframe
    src={src}
    title={title}
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

<style>
  .yt-embed {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 10px;
    overflow: hidden;
  }
  .yt-embed iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
```

Uses `youtube-nocookie.com` (Enhanced Privacy Mode) to avoid setting YouTube cookies until the user clicks play — better for GDPR.

- [ ] **Step 2: Commit**

```bash
git add src/components/YouTubeEmbed.astro
git commit -m "Add YouTubeEmbed component with privacy-enhanced embed"
```

---

## Task 5: Create SpeakerCard component

**Files:**
- Create: `src/components/SpeakerCard.astro`

- [ ] **Step 1: Write the component**

Create `src/components/SpeakerCard.astro`:

```astro
---
interface Props {
  name: string;
  role?: string;
  avatar?: string;
}

const { name, role, avatar } = Astro.props;
const initials = name
  .split(' ')
  .map((part) => part[0]?.toUpperCase() ?? '')
  .slice(0, 2)
  .join('');
---

<div class="speaker">
  {avatar ? (
    <img class="speaker-avatar" src={avatar} alt={name} loading="lazy" width="48" height="48" />
  ) : (
    <div class="speaker-avatar speaker-avatar-fallback" aria-hidden="true">{initials}</div>
  )}
  <div class="speaker-text">
    <div class="speaker-name">{name}</div>
    {role && <div class="speaker-role">{role}</div>}
  </div>
</div>

<style>
  .speaker {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .speaker-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--primary-50);
    border: 1px solid var(--border);
    flex-shrink: 0;
  }
  .speaker-avatar-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary);
    letter-spacing: 0.02em;
  }
  .speaker-name {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--foreground);
    line-height: 1.3;
  }
  .speaker-role {
    font-size: 0.8rem;
    color: var(--muted-foreground);
    line-height: 1.3;
  }
</style>
```

Fallback renders initials when no avatar image is provided.

- [ ] **Step 2: Commit**

```bash
git add src/components/SpeakerCard.astro
git commit -m "Add SpeakerCard component with initials fallback"
```

---

## Task 6: Create EventCard component

**Files:**
- Create: `src/components/EventCard.astro`

- [ ] **Step 1: Write the component**

Create `src/components/EventCard.astro`:

```astro
---
import type { Event } from '../lib/events';
import { EVENT_TYPE_LABEL, thumbnailUrl, formatEventDate, formatEventTime, isUpcoming } from '../lib/events';

interface Props {
  event: Event;
}

const { event } = Astro.props;
const upcoming = isUpcoming(event);
const thumb = thumbnailUrl(event);
const href = `/webinars-and-videos/${event.id}`;
const typeLabel = EVENT_TYPE_LABEL[event.data.eventType];
const dateLabel = formatEventDate(event.data.eventDate);
const timeLabel = upcoming ? formatEventTime(event.data.eventDate) : null;
const durationLabel = event.data.duration ? `${event.data.duration} min` : null;
const speakerNames = event.data.speakers.map((s) => s.name).join(', ');
---

<a href={href} class={`event-card ${upcoming ? 'is-upcoming' : 'is-past'}`} data-event-type={event.data.eventType}>
  {thumb && !upcoming && (
    <div class="event-thumb">
      <img src={thumb} alt="" loading="lazy" />
      {durationLabel && <span class="event-duration">{durationLabel}</span>}
    </div>
  )}
  <div class="event-body">
    <div class="event-meta">
      <span class="event-type">{typeLabel}</span>
      <span class="event-date">{dateLabel}{timeLabel ? ` · ${timeLabel}` : ''}</span>
    </div>
    <h3 class="event-title">{event.data.title}</h3>
    {event.data.description && <p class="event-desc">{event.data.description}</p>}
    {speakerNames && <p class="event-speakers">{speakerNames}</p>}
    {upcoming && (
      <span class="event-cta">Register →</span>
    )}
  </div>
</a>

<style>
  .event-card {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    color: var(--foreground);
    transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  }
  .event-card:hover {
    border-color: var(--primary-300);
    box-shadow: 0 2px 8px rgba(127, 86, 217, 0.1);
  }

  .event-thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    background: var(--primary-50);
  }
  .event-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .event-duration {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.15rem 0.45rem;
    border-radius: 3px;
  }

  .event-body {
    padding: 1rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
  }
  .event-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .event-type {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--primary);
    background: var(--primary-50);
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
  }
  .event-date {
    font-size: 0.8rem;
    color: var(--muted-foreground);
  }
  .event-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--heading-color);
    line-height: 1.35;
    margin: 0.1rem 0 0;
  }
  .event-desc {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .event-speakers {
    font-size: 0.8rem;
    color: var(--muted-light);
    margin: 0.25rem 0 0;
  }
  .event-cta {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary);
  }

  .is-upcoming {
    border-left: 3px solid var(--primary);
  }
</style>
```

Upcoming cards don't show a thumbnail (the event hasn't happened yet); past cards lead with the thumbnail. Upcoming cards get a subtle left-border accent and a "Register →" affordance.

- [ ] **Step 2: Commit**

```bash
git add src/components/EventCard.astro
git commit -m "Add EventCard component for section index grids"
```

---

## Task 7: Create the section index page

**Files:**
- Create: `src/pages/webinars-and-videos/index.astro`

- [ ] **Step 1: Write the page**

Create the directory and file:

```bash
mkdir -p src/pages/webinars-and-videos
```

Create `src/pages/webinars-and-videos/index.astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection } from 'astro:content';
import EventCard from '../../components/EventCard.astro';
import { partitionEvents, EVENT_TYPE_PLURAL, type EventType } from '../../lib/events';

const allEvents = await getCollection('events', ({ data }) => !data.draft);
const { upcoming, past } = partitionEvents(allEvents);

const typesPresent = Array.from(new Set(past.map((e) => e.data.eventType))) as EventType[];
---

<Base title="Webinars & Videos" description="Live sessions, customer success hours, and on-demand recordings from the SympleHost team.">
  <nav class="breadcrumb">
    <a href="/">All Topics</a>
    <span class="sep">/</span>
    <span>Webinars &amp; Videos</span>
  </nav>

  <header class="page-header">
    <h1 class="page-title">Webinars &amp; Videos</h1>
    <p class="page-desc">Live sessions, customer success hours, and on-demand recordings from the SympleHost team.</p>
  </header>

  {upcoming.length > 0 && (
    <section class="upcoming">
      <h2 class="section-heading">Upcoming</h2>
      <div class="grid grid-upcoming">
        {upcoming.map((ev) => <EventCard event={ev} />)}
      </div>
    </section>
  )}

  {past.length > 0 ? (
    <section class="past">
      <div class="past-header">
        <h2 class="section-heading">On-demand recordings</h2>
        {typesPresent.length > 1 && (
          <div class="filter-tabs" role="tablist" aria-label="Filter by event type">
            <button class="filter-tab is-active" data-filter="all" role="tab" aria-selected="true">All</button>
            {typesPresent.map((t) => (
              <button class="filter-tab" data-filter={t} role="tab" aria-selected="false">{EVENT_TYPE_PLURAL[t]}</button>
            ))}
          </div>
        )}
      </div>
      <div class="grid grid-past" id="past-grid">
        {past.map((ev) => <EventCard event={ev} />)}
      </div>
      <p class="empty" id="past-empty" hidden>No recordings in this category yet.</p>
    </section>
  ) : (
    upcoming.length === 0 && (
      <p class="empty">No events scheduled yet. Check back soon.</p>
    )
  )}

  <style>
    .breadcrumb {
      font-size: 0.85rem;
      color: var(--muted-foreground);
      margin-bottom: 1rem;
    }
    .breadcrumb a { color: var(--muted-foreground); }
    .breadcrumb a:hover { color: var(--heading-color); }
    .sep { margin: 0 0.4rem; }

    .page-header {
      margin-bottom: 2.5rem;
    }
    .page-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--heading-color);
      letter-spacing: -0.01em;
      margin-bottom: 0.5rem;
    }
    .page-desc {
      color: var(--muted-foreground);
      font-size: 1rem;
      max-width: 42rem;
    }

    .upcoming {
      margin-bottom: 3rem;
    }

    .section-heading {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted-foreground);
      margin: 0 0 1rem;
    }

    .grid {
      display: grid;
      gap: 1.25rem;
    }
    .grid-upcoming {
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    }
    .grid-past {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .past-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .past-header .section-heading { margin: 0; }

    .filter-tabs {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    .filter-tab {
      font-family: inherit;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--muted-foreground);
      background: transparent;
      border: 1px solid var(--border);
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      cursor: pointer;
      transition: color 0.15s, background 0.15s, border-color 0.15s;
    }
    .filter-tab:hover {
      color: var(--foreground);
      border-color: var(--primary-300);
    }
    .filter-tab.is-active {
      color: #ffffff;
      background: var(--primary);
      border-color: var(--primary);
    }

    .empty {
      color: var(--muted-foreground);
      font-size: 0.95rem;
      padding: 2rem 0;
    }
  </style>

  <script is:inline>
    (function () {
      const tabs = document.querySelectorAll('.filter-tab');
      if (!tabs.length) return;
      const grid = document.getElementById('past-grid');
      const empty = document.getElementById('past-empty');
      if (!grid || !empty) return;
      const cards = Array.from(grid.querySelectorAll('[data-event-type]'));

      tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          const filter = tab.getAttribute('data-filter');
          tabs.forEach((t) => {
            const active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active ? 'true' : 'false');
          });
          let visible = 0;
          cards.forEach((el) => {
            const match = filter === 'all' || el.getAttribute('data-event-type') === filter;
            el.style.display = match ? '' : 'none';
            if (match) visible++;
          });
          empty.hidden = visible > 0;
        });
      });
    })();
  </script>
</Base>
```

- [ ] **Step 2: Verify the page builds and renders**

Run: `pnpm run build`
Expected: build completes with a new route `/webinars-and-videos/` in the output.

Run: `pnpm run dev`
In another terminal, open http://localhost:4321/webinars-and-videos/
Expected: page shows "Upcoming" section with the one upcoming webinar fixture, and "On-demand recordings" with 3 past events. Filter tabs visible (All / Webinars / Customer Success Hours / Meet-ups). Clicking tabs filters the grid.

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/webinars-and-videos/index.astro
git commit -m "Add Webinars & Videos section index with filter tabs"
```

---

## Task 8: Create per-event landing page

**Files:**
- Create: `src/pages/webinars-and-videos/[slug].astro`

- [ ] **Step 1: Write the page**

Create `src/pages/webinars-and-videos/[slug].astro`:

```astro
---
import Base from '../../layouts/Base.astro';
import { getCollection, render } from 'astro:content';
import YouTubeEmbed from '../../components/YouTubeEmbed.astro';
import SpeakerCard from '../../components/SpeakerCard.astro';
import { EVENT_TYPE_LABEL, isUpcoming, formatEventDate, formatEventTime } from '../../lib/events';

export async function getStaticPaths() {
  const events = await getCollection('events', ({ data }) => !data.draft);
  return events.map((event) => ({
    params: { slug: event.id },
    props: { event },
  }));
}

const { event } = Astro.props;
const { Content } = await render(event);
const upcoming = isUpcoming(event);
const typeLabel = EVENT_TYPE_LABEL[event.data.eventType];
const dateLabel = formatEventDate(event.data.eventDate);
const timeLabel = formatEventTime(event.data.eventDate);
const durationLabel = event.data.duration ? `${event.data.duration} minutes` : null;
---

<Base title={event.data.title} description={event.data.description}>
  <nav class="breadcrumb">
    <a href="/">All Topics</a>
    <span class="sep">/</span>
    <a href="/webinars-and-videos/">Webinars &amp; Videos</a>
    <span class="sep">/</span>
    <span>{event.data.title}</span>
  </nav>

  <article class="event">
    <header class="event-header">
      <div class="event-meta">
        <span class="event-type">{typeLabel}</span>
        <span class="event-date">{dateLabel} · {timeLabel}{durationLabel ? ` · ${durationLabel}` : ''}</span>
      </div>
      <h1 class="event-title">{event.data.title}</h1>
      {event.data.description && <p class="event-desc">{event.data.description}</p>}
    </header>

    <div class="event-media">
      {upcoming ? (
        <div class="register-card">
          <h2 class="register-title">Reserve your spot</h2>
          <p class="register-meta">{dateLabel} at {timeLabel}{durationLabel ? ` · ${durationLabel}` : ''}</p>
          {event.data.registerUrl ? (
            <a class="register-btn" href={event.data.registerUrl} target="_blank" rel="noopener">Register on Zoom</a>
          ) : (
            <p class="register-note">Registration opens soon.</p>
          )}
        </div>
      ) : event.data.youtubeId ? (
        <YouTubeEmbed videoId={event.data.youtubeId} title={event.data.title} />
      ) : (
        <p class="register-note">Recording coming soon.</p>
      )}
    </div>

    {event.data.speakers.length > 0 && (
      <section class="speakers">
        <h2 class="section-heading">{event.data.speakers.length === 1 ? 'Speaker' : 'Speakers'}</h2>
        <div class="speaker-grid">
          {event.data.speakers.map((s) => (
            <SpeakerCard name={s.name} role={s.role} avatar={s.avatar} />
          ))}
        </div>
      </section>
    )}

    <div class="event-content">
      <Content />
    </div>
  </article>

  <style>
    .breadcrumb {
      font-size: 0.85rem;
      color: var(--muted-foreground);
      margin-bottom: 1.5rem;
    }
    .breadcrumb a { color: var(--muted-foreground); }
    .breadcrumb a:hover { color: var(--primary); }
    .sep { margin: 0 0.4rem; }

    .event-header {
      margin-bottom: 1.75rem;
    }
    .event-meta {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
      margin-bottom: 0.75rem;
    }
    .event-type {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--primary);
      background: var(--primary-50);
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
    }
    .event-date {
      font-size: 0.85rem;
      color: var(--muted-foreground);
    }
    .event-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--heading-color);
      letter-spacing: -0.01em;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }
    .event-desc {
      color: var(--muted-foreground);
      font-size: 1.05rem;
      line-height: 1.5;
      max-width: 48rem;
    }

    .event-media {
      margin-bottom: 2rem;
    }

    .register-card {
      background: linear-gradient(135deg, var(--primary-50), #ffffff);
      border: 1px solid var(--primary-300);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
    }
    .register-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--heading-color);
      margin: 0 0 0.4rem;
    }
    .register-meta {
      color: var(--muted-foreground);
      font-size: 0.95rem;
      margin: 0 0 1.25rem;
    }
    .register-btn {
      display: inline-block;
      background: var(--primary);
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.15s, transform 0.15s;
    }
    .register-btn:hover {
      background: var(--heading-color);
    }
    .register-note {
      color: var(--muted-foreground);
      font-size: 0.95rem;
      margin: 0;
    }

    .speakers {
      margin: 2.5rem 0;
    }
    .section-heading {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted-foreground);
      margin-bottom: 1rem;
    }
    .speaker-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }

    .event-content {
      font-size: 0.95rem;
      line-height: 1.75;
      color: var(--muted-foreground);
    }
    .event-content :global(h2) {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--heading-color);
      margin: 2rem 0 0.75rem;
    }
    .event-content :global(h3) {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--heading-color);
      margin: 1.5rem 0 0.5rem;
    }
    .event-content :global(p) { margin-bottom: 1rem; }
    .event-content :global(ul),
    .event-content :global(ol) { margin: 0.5rem 0 1rem 1.5rem; }
    .event-content :global(li) { margin-bottom: 0.35rem; }
    .event-content :global(strong) {
      color: var(--foreground);
      font-weight: 600;
    }
    .event-content :global(a) {
      color: var(--primary);
      text-decoration: underline;
    }
  </style>
</Base>
```

- [ ] **Step 2: Verify per-event pages render**

Run: `pnpm run dev`

Visit each of these URLs and confirm behavior:
- `/webinars-and-videos/sample-scaling-webinar` → shows register card with "Register on Zoom" button (upcoming)
- `/webinars-and-videos/past-automated-messaging` → shows YouTube embed (past + has `youtubeId`)
- `/webinars-and-videos/past-cs-hour-april` → shows YouTube embed
- `/webinars-and-videos/past-meetup-lisbon` → shows YouTube embed

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/webinars-and-videos/[slug].astro
git commit -m "Add per-event landing page with register card and video embed"
```

---

## Task 9: Add homepage card for the new section

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Add Webinars & Videos card to the homepage grid**

Open `src/pages/index.astro`. Find the frontmatter block (lines 1-17) and replace it with:

```astro
---
import Base from '../layouts/Base.astro';
import { getCollection } from 'astro:content';
import { partitionEvents, isUpcoming } from '../lib/events';

const categories = await getCollection('categories');
const articles = await getCollection('articles', ({ data }) => !data.draft);
const events = await getCollection('events', ({ data }) => !data.draft);

// Count articles per category
const articleCounts = new Map<string, number>();
for (const article of articles) {
  const cat = article.data.category;
  articleCounts.set(cat, (articleCounts.get(cat) || 0) + 1);
}

// Sort categories by order
const sortedCategories = categories.sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));

// Events card stats
const { past: pastEvents } = partitionEvents(events);
const recordingsCount = pastEvents.length;
const upcomingCount = events.filter((e) => isUpcoming(e)).length;
---
```

Then find the `<section class="categories">` block (lines 25-37) and replace with:

```astro
  <section class="categories">
    {sortedCategories.map((cat) => {
      const count = articleCounts.get(cat.id) || 0;
      return (
        <a href={`/${cat.id}`} class="category-card">
          {cat.data.emoji && <span class="category-emoji">{cat.data.emoji}</span>}
          <h2 class="category-title">{cat.data.title}</h2>
          {cat.data.description && <p class="category-desc">{cat.data.description}</p>}
          <span class="category-count">{count} {count === 1 ? 'article' : 'articles'}</span>
        </a>
      );
    })}
    <a href="/webinars-and-videos/" class="category-card">
      <span class="category-emoji">🎥</span>
      <h2 class="category-title">Webinars &amp; Videos</h2>
      <p class="category-desc">Live sessions, customer success hours, and on-demand recordings.</p>
      <span class="category-count">
        {upcomingCount > 0
          ? `${upcomingCount} upcoming · ${recordingsCount} ${recordingsCount === 1 ? 'recording' : 'recordings'}`
          : `${recordingsCount} ${recordingsCount === 1 ? 'recording' : 'recordings'}`}
      </span>
    </a>
  </section>
```

No CSS changes — the new card reuses the existing `.category-card` styles.

- [ ] **Step 2: Verify the homepage shows the new card**

Run: `pnpm run dev`

Open http://localhost:4321/
Expected: 4 cards total. The 4th card shows 🎥 emoji, "Webinars & Videos" title, description, and a count like "1 upcoming · 3 recordings". Clicking the card navigates to `/webinars-and-videos/`.

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "Add Webinars & Videos card to homepage grid"
```

---

## Task 10: Wire up TinaCMS event collection

**Files:**
- Modify: `tina/config.ts`

- [ ] **Step 1: Add the event collection to Tina config**

Open `tina/config.ts`. Inside the `collections` array, **after** the `article` collection object, add the new `event` collection. The updated file should read:

```ts
import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'category',
        label: 'Categories',
        path: 'src/content/categories',
        format: 'yaml',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'emoji',
            label: 'Emoji Icon',
            description: 'Single emoji for the category card (e.g. 🚀)',
          },
          {
            type: 'number',
            name: 'order',
            label: 'Sort Order',
          },
        ],
      },
      {
        name: 'article',
        label: 'Articles',
        path: 'src/content/articles',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            description: 'Must match a category slug (e.g. platform-guides)',
            required: true,
            options: [
              { value: 'getting-started', label: 'Getting Started' },
              { value: 'platform-guides', label: 'Platform Guides' },
              { value: 'faqs', label: 'FAQs' },
              { value: 'messaging', label: 'Messaging' },
            ],
          },
          {
            type: 'string',
            name: 'section',
            label: 'Section (sub-group within category)',
            description: 'Optional sub-heading to group articles under on the category page (e.g. "Start here", "Set up your account")',
          },
          {
            type: 'number',
            name: 'sectionOrder',
            label: 'Order within section',
            description: 'Lower numbers appear first within the same section',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Last Updated',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
      {
        name: 'event',
        label: 'Webinars & Events',
        path: 'src/content/events',
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: { component: 'textarea' },
          },
          {
            type: 'string',
            name: 'eventType',
            label: 'Event Type',
            required: true,
            options: [
              { value: 'webinar', label: 'Webinar' },
              { value: 'customer-success-hour', label: 'Customer Success Hour' },
              { value: 'meet-up', label: 'Meet-up' },
            ],
          },
          {
            type: 'datetime',
            name: 'eventDate',
            label: 'Event Date & Time',
            required: true,
          },
          {
            type: 'number',
            name: 'duration',
            label: 'Duration (minutes)',
          },
          {
            type: 'string',
            name: 'youtubeId',
            label: 'YouTube Video ID',
            description: 'The part after v= in a YouTube URL. Leave empty for upcoming events with no recording yet.',
          },
          {
            type: 'string',
            name: 'registerUrl',
            label: 'Registration URL',
            description: 'Zoom registration link for upcoming events. Zoom auto-generates this per webinar.',
          },
          {
            type: 'image',
            name: 'thumbnail',
            label: 'Custom Thumbnail',
            description: 'Optional. If empty, the YouTube video thumbnail is used.',
          },
          {
            type: 'object',
            name: 'speakers',
            label: 'Speakers',
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || 'Speaker' }),
            },
            fields: [
              { type: 'string', name: 'name', label: 'Name', required: true },
              { type: 'string', name: 'role', label: 'Role / Title' },
              { type: 'image', name: 'avatar', label: 'Avatar' },
            ],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

- [ ] **Step 2: Verify TinaCMS picks up the new collection**

Run: `pnpm run dev`

Open http://localhost:4321/admin/index.html
Expected: left sidebar shows "Categories", "Articles", and new "Webinars & Events" sections. Clicking "Webinars & Events" lists the 4 sample fixtures. Opening one shows the full field set (eventType dropdown, eventDate picker, speakers list, etc.).

Stop the dev server.

- [ ] **Step 3: Commit**

```bash
git add tina/config.ts
git commit -m "Add Webinars & Events collection to TinaCMS schema"
```

---

## Task 11: Create public asset directories and final verification

**Files:**
- Create: `public/speakers/.gitkeep`
- Create: `public/screenshots/events/.gitkeep`

- [ ] **Step 1: Create directories**

```bash
mkdir -p public/speakers public/screenshots/events
touch public/speakers/.gitkeep public/screenshots/events/.gitkeep
```

These exist so TinaCMS image uploads have a target folder for speaker avatars and custom event thumbnails.

- [ ] **Step 2: Full build verification**

Run: `pnpm run build`
Expected: build succeeds with zero errors. The output should include:
- `/webinars-and-videos/index.html`
- `/webinars-and-videos/sample-scaling-webinar/index.html`
- `/webinars-and-videos/past-automated-messaging/index.html`
- `/webinars-and-videos/past-cs-hour-april/index.html`
- `/webinars-and-videos/past-meetup-lisbon/index.html`

Verify:

```bash
ls dist/webinars-and-videos/
```

Expected output includes `index.html` and one directory per event slug.

- [ ] **Step 3: Full manual walkthrough**

Run: `pnpm run dev`

Walk through every page:

1. **Homepage** (`/`) — 4 cards, 4th is Webinars & Videos with "1 upcoming · 3 recordings"
2. **Section index** (`/webinars-and-videos/`):
   - Upcoming section shows 1 card ("How to Scale…")
   - On-demand shows 3 cards
   - Filter tabs: click "Webinars" → 1 visible; click "Customer Success Hours" → 1 visible; click "Meet-ups" → 1 visible; click "All" → 3 visible
3. **Upcoming landing page** (`/webinars-and-videos/sample-scaling-webinar`) — register card with "Register on Zoom" button linking to `https://zoom.us/webinar/register/placeholder`
4. **Past webinar landing page** (`/webinars-and-videos/past-automated-messaging`) — YouTube embed plays
5. **Past CS hour** (`/webinars-and-videos/past-cs-hour-april`) — YouTube embed + 2 speakers
6. **Past meet-up** (`/webinars-and-videos/past-meetup-lisbon`) — YouTube embed + 1 speaker
7. **Breadcrumbs** on all landing pages link back to `/webinars-and-videos/` and `/`
8. **Mobile check** — resize to 375px wide; cards stack, filter tabs wrap, register card stays readable

Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add public/speakers/.gitkeep public/screenshots/events/.gitkeep
git commit -m "Create public folders for speaker avatars and event thumbnails"
```

- [ ] **Step 5: Push**

```bash
git push
```

---

## Deferred / Follow-up

These are explicitly out of scope for this plan (see spec Non-Goals) but flagged for future iterations:

- **First real webinar content** — the user has source material at `~/Desktop/Webinar SHXBVRMA` with Zoom link + assets. After this plan lands, author the first real event from that folder and delete the 4 sample fixtures created in Task 3.
- Add-to-calendar (.ics) download on upcoming event pages
- Featured/hero event slot on the section index
- Archived view for past events without a recording
- Transcripts, slides, resource downloads
