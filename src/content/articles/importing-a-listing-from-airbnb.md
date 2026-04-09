---
title: Importing a Listing from Airbnb
description: Pull in your existing Airbnb listing — including photos, amenities, and property details — so you don't have to re-enter everything from scratch.
category: getting-started
tags:
  - Listings
  - Airbnb
  - Import
  - OTA
date: '2026-04-09'
draft: false
---

## What Is Airbnb Import?

Instead of manually typing out all your property details, you can paste your Airbnb listing URL and SympleHost will pull in the key information automatically — your property name, description, photos, amenities, capacity, and location.

Think of it like copying your listing from one platform to another in a few clicks, instead of starting from a blank page.

---

## Before You Start

- You'll need the **URL of your Airbnb listing** (the link you'd share with a guest — something like `https://www.airbnb.com/rooms/123456`)
- You must be the **owner or authorized manager** of the listing

---

## How to Import from Airbnb

1. Click **Properties** in the sidebar, then click **Listings**.

2. Click **+ New Property** in the top right.

3. Select **Import from Airbnb**.

4. On the **Import Your Listing** page, paste your Airbnb listing URL into the **Listing URL** field.

   Supported formats:
   - `https://www.airbnb.com/rooms/123456`
   - International URLs like `https://www.airbnb.com.sg/rooms/123456`

5. Check the **ownership confirmation** box — this confirms you own or are authorized to manage the property.

6. Click **Continue to Data Retrieval**.

7. SympleHost will now extract your listing data. You'll see progress updates as it works:
   - Connecting to listing
   - Extracting property details
   - Gathering images
   - Processing amenities
   - Finalizing data

   **Tip:** This can take up to 30 seconds depending on the size of your listing.

8. Review the **Data Preview** — you'll see your property name, type, location, capacity, images, and amenities. Check that everything looks correct.

9. Click **Import Listing** to save.

Your imported listing will now appear on the **Properties** page. From here, you can edit any details, adjust pricing, and activate it when you're ready.

---

## What Gets Imported

| Detail | Imported? |
|--------|-----------|
| Property name | Yes |
| Description | Yes |
| Location / address | Yes |
| Property type | Yes |
| Capacity (guests, bedrooms, beds, bathrooms) | Yes |
| Photos | Yes |
| Amenities | Yes |
| Pricing | No — set this up separately |
| Calendar / availability | No — sync via Channel Manager |
| Guest reviews | No |

---

## After Importing

Once your listing is imported, you'll want to:

1. **Review and edit** any details that didn't import perfectly
2. **Set up pricing** — base rates, seasonal pricing, and fees (see: How to Set Up Your Pricing & Rate Rules)
3. **Connect via Channel Manager** — if you want to keep your SympleHost and Airbnb calendars in sync, connect Airbnb through **Settings** → **Integrations** → **OTA** (see: How to Connect Your OTA Channels)

---

## Troubleshooting

### The import says "temporarily unavailable"
The import feature occasionally goes through maintenance. If you see this message, try again later — or create your listing manually and add the details yourself.

### My URL isn't being accepted
Make sure you're using the full listing URL, not a shortened or shared link. It should start with `https://www.airbnb.com/rooms/` followed by a number.

### Some photos or amenities are missing
The import captures what's publicly visible on your Airbnb page. If certain details are hidden or formatted differently, they may not transfer. You can add missing photos and amenities manually after import.

### I imported the wrong listing
Delete the imported listing from your **Properties** page and start the import again with the correct URL.

---

Related Articles
- Adding a Listing Manually
- How to Connect Your OTA Channels
- How to Set Up Your Pricing & Rate Rules
