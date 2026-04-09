---
title: Importing a Listing from Booking.com
description: Connect your Booking.com account to SympleHost through the Channel Manager so your listings, availability, and bookings stay in sync.
category: getting-started
tags:
  - Listings
  - Booking.com
  - Import
  - OTA
  - Channel Manager
date: '2026-04-09'
draft: false
---

## What Is the Booking.com Integration?

Unlike Airbnb (where you can paste a URL to import), Booking.com listings connect through SympleHost's **Channel Manager** — a tool that keeps your property details, availability, and bookings synchronized between SympleHost and Booking.com in real time.

Think of it like linking two calendars together — when a guest books on Booking.com, the dates are automatically blocked in SympleHost (and vice versa), so you never get double-booked.

**Important:** To connect Booking.com, you'll need to create your listing in SympleHost first (either manually or by importing from Airbnb). The Channel Manager then links your SympleHost listing to your existing Booking.com property.

---

## Before You Start

- You need an **existing listing in SympleHost** — create one manually if you haven't yet (see: Adding a Listing Manually)
- You need an **active Booking.com property** with extranet access
- You need **Account Admin** permissions in SympleHost

---

## How to Connect Booking.com

1. Go to **Settings** in the sidebar.

2. Click **Integrations**, then select **OTA**.

   You'll see platform cards for each supported channel — Airbnb, Booking.com, and others.

3. Click on the **Booking.com** card.

4. Click **+ Connect** in the top right.

5. Follow the on-screen authorization steps to link your Booking.com account.

6. Once connected, you'll see a **"Connected"** status badge on the Booking.com card, along with the number of properties linked.

---

## Managing Your Booking.com Connection

Once connected, go to **Settings** → **Integrations** → **OTA** → **Booking.com** to manage your linked properties.

### What You'll See

Each connected property shows:
- **Property name** and thumbnail image
- **Status** — "Connected" (green) or "Disconnected"
- **Channel ID** — the Booking.com property identifier
- **Last Sync** — when data was last synchronized
- **Connection date** — when the link was established

### Syncing a Property

Click the **sync button** (circular arrows icon) on any property card to force a manual sync. This pulls the latest availability and booking data from Booking.com.

**Tip:** Syncing happens automatically in the background, but a manual sync is useful if you've just made changes on Booking.com and want them reflected immediately.

### Switching Views

Use the **Card view** and **List view** toggle buttons at the top to switch between a visual card layout and a compact table view.

### Disconnecting a Property

To unlink a single property, click the **trash icon** on its card. To disconnect all properties at once, click **Disconnect All** (the red button at the top).

**Important:** Disconnecting stops the sync — it doesn't delete your listing from either platform. Your Booking.com listing will continue to exist independently.

---

## What Gets Synced

| Detail | Synced? |
|--------|---------|
| Availability / calendar | Yes — real-time |
| New bookings | Yes — appear automatically in SympleHost |
| Booking cancellations | Yes |
| Pricing updates | Yes |
| Property details (name, description) | Initial sync only — edit in each platform separately |
| Guest reviews | No |
| Photos | No — manage separately |

---

## Troubleshooting

### I don't see Booking.com on the Integrations page
Make sure you're on **Settings** → **Integrations** → **OTA**. If you still don't see it, check that you have **Account Admin** permissions.

### My properties aren't showing as connected
After authorizing, it can take a minute for properties to appear. Refresh the page. If they still don't show, try clicking **+ Connect** again — the initial authorization may not have completed.

### Bookings aren't syncing
Check the **Last Sync** timestamp on the property card. If it's outdated, click the **sync button** to force a refresh. If syncing continues to fail, disconnect and reconnect the property.

### I see "Disconnecting Booking.com" but it's stuck
Refresh the page. If the status persists, wait a few minutes — the disconnection process can sometimes take time to complete on Booking.com's end.

---

Related Articles
- Adding a Listing Manually
- Importing a Listing from Airbnb
- How to Set Up Your Pricing & Rate Rules
