---
title: 'How to Import Listings from an OTA (Airbnb, Booking.com)'
description: Pull in your existing rental listings from Airbnb or Booking.com so you don't have to recreate them from scratch in SympleHost.
category: getting-started
tags:
  - Listings
  - Airbnb
  - Booking.com
  - Import
  - OTA
  - Channel Manager
date: '2026-04-09'
draft: false
---

## What Is OTA Import?

OTA stands for Online Travel Agency — platforms like Airbnb and Booking.com where your listings are already published. SympleHost's import feature connects to these platforms and pulls in your listing details (name, description, photos, capacity) automatically, saving you from re-entering everything by hand.

---

## When to Use This

- You already have listings on Airbnb or Booking.com and want to manage them from SympleHost
- You're setting up SympleHost for the first time and want to bring over your existing portfolio
- You've added a new listing on an OTA and want to sync it into SympleHost

---

## How to Import from Airbnb

1. Click **Properties** in the sidebar to expand it, then click **Listings**.

2. Click **+ New Property** in the top right.

3. Select **Import**.

   ![New Property screen showing Manual and Import from Airbnb options](/uploads/import-listings-from-ota/01-new-property-options.png)

4. On the **Import Property** screen, click the **Airbnb** card.

5. Click **Authorize with Airbnb**. This opens a pop-up where you log in to your Airbnb account and grant SympleHost permission to access your listings.

   ![Airbnb authorization popup](/uploads/import-listings-from-ota/02-airbnb-authorization.png)

6. Once authorized, you'll see a list of your Airbnb listings. Tick the ones you want to import.

7. Click **Import**.

   SympleHost will pull in the listing details, photos, and settings. You'll see a summary showing how many were imported, how many were skipped (if already in SympleHost), and if any failed.

---

## How to Connect Booking.com

Booking.com connects through **Channex** (a connectivity partner that syncs your reservations and availability between SympleHost and Booking.com). The setup is a simple 3-step wizard.

### Step 1: Set up Channex as your connectivity partner

Before connecting in SympleHost, you need to add Channex as your connectivity partner in Booking.com:

1. Log in to your **Booking.com Extranet** at admin.booking.com.
2. Follow the Booking.com setup guide to authorize Channex as your channel manager.

**Tip:** If you're not sure how to do this, SympleHost has a built-in setup guide — you'll see it when you start the connection process.

### Step 2: Connect in SympleHost

1. Go to **Settings** → **Integrations** → **OTA Connections**.

2. Find the **Booking.com** card and toggle it on (or click connect). A wizard modal will open.

3. On **Step 1 of 3**, enter your **Hotel ID**.

   You can find your Hotel ID in the Booking.com Extranet — it's displayed next to your property name at the top of the screen. Click **"Where to find your Hotel ID"** in the wizard if you need help locating it.

4. Click **Next**.

### Step 3: Verify and sync

5. On **Step 2 of 3**, SympleHost will verify the connection with Booking.com. You'll see the status progress:
   - "Creating connection..."
   - "Verifying with Booking.com..."
   - **"Connected!"** (with a green checkmark)

6. Click **Continue**.

7. On **Step 3 of 3**, you'll see a mapping preview showing your property name and Hotel ID. Click **Start Sync** to sync your Booking.com listing data with SympleHost.

8. Wait for the sync to complete — you'll see **"Sync complete!"** with a green checkmark.

9. Click **Done**.

   Your Booking.com listing is now connected. You'll see the connection status on the OTA Platform Integration page showing how many properties are connected.

---

## Verifying Your Import

After importing, it's a good idea to check that everything came over correctly:

1. Go to **Properties** → **Listings** and open each imported listing.
2. Review the **name, description, and photos** — make sure they match what's on the OTA.
3. Check **capacity** (bedrooms, beds, bathrooms, max guests) — these sometimes need adjusting.
4. Set up **pricing** — imported listings won't have SympleHost pricing configured yet. See: How to Set Up Your Pricing & Rate Rules.

**Important:** Importing a listing does not automatically sync future changes between the OTA and SympleHost. If you update a listing on Airbnb, you'll need to update it in SympleHost too (or vice versa).

---

## Troubleshooting

### I don't see the "Import" option
The **+ New Property** button (and the **Import** option inside it) is only visible to roles that can manage listings — typically **Account Owner**, **Account Admin**, or **Account Manager**. If your role is **Booking Coordinator** or **Staff**, ask your account owner to update your role under **Settings** → **Team** → **Members**.

### Authorization failed for Airbnb
Make sure you're logging in with the correct Airbnb account — the one that owns the listings. If you manage listings on behalf of someone else, the account owner needs to authorize the connection.

### Some listings show as "skipped"
This means those listings were already imported into SympleHost. You won't have duplicate listings — SympleHost recognizes them and skips the re-import.

### Booking.com connection failed
Check that your Hotel ID is correct — it should be a numeric ID (up to 10 digits) found in your Booking.com Extranet. Also make sure you've added Channex as your connectivity partner in Booking.com first. If the connection still fails, click **Try Again** in the wizard.

### Booking.com sync failed
If the sync step fails, you can retry it later from the **Channels** tab on your listing. Click **Try Again** in the wizard, or close and re-open the connection.

### My photos didn't come through
This can happen if the OTA's image links have expired or if there's a temporary connection issue. Try re-importing the listing. If photos still don't appear, upload them manually from the listing's edit page.

---

Related Articles
- Adding a Listing Manually
- How to Set Up Your Pricing & Rate Rules
- How to Manage Bookings & Your Calendar
