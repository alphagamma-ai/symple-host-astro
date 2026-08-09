---
title: 'How to Import Airbnb and Connect OTA Channels'
description: Import Airbnb listings, then connect Booking.com, Expedia, Agoda, VRBO, and other OTAs through Channel Manager.
category: getting-started
tags:
  - Listings
  - Airbnb
  - Booking.com
  - Import
  - OTA
  - Channel Manager
date: '2026-08-08'
draft: false
---

## What Is OTA Import?

OTA stands for Online Travel Agency — platforms like Airbnb, Booking.com, Expedia, Agoda, VRBO, MakeMyTrip, and Trip.com where your listings may already be published. SympleHost supports two related workflows:

- **Importing from Airbnb** to pull an existing Airbnb listing into SympleHost.
- **Connecting channels through Channel Manager** after the property exists in SympleHost.

For most hosts, the best first step is **Airbnb Import**. Once that property is in SympleHost, you can connect the same property to Booking.com, Expedia, Agoda, VRBO, MakeMyTrip, Trip.com, and other enabled channels through Channel Manager.

---

## When to Use This

- You already have listings on Airbnb and want to bring them into SympleHost
- You want to connect Booking.com, Expedia, Agoda, VRBO, MakeMyTrip, Trip.com, or another supported OTA through Channel Manager
- You're setting up SympleHost for the first time and want to bring over your existing portfolio
- You've added a new listing on an OTA and want to sync it into SympleHost

---

## Which Setup Path Should I Use?

### If you already have Airbnb
Use **Airbnb Import** first. This creates the property in SympleHost using the Airbnb listing as the source. After that, connect other OTAs through **Channel Manager**.

### If you run a direct-booking business
Create the property manually in **Listings → + New Property → Manual**. Then set up direct booking settings, payments, calendar, and pricing.

### If you want to start from Booking.com
Start in **Channel Manager**, choose **Booking.com**, and follow the Booking.com connection flow. You will still need the property to exist in SympleHost so you can map Booking.com rooms or room types to the correct SympleHost listing or units.

Before SympleHost can verify the connection, Booking.com must be set to use **Channex.io** as the connectivity provider in the Booking.com Extranet.

---

## How to Import from Airbnb

1. Click **Listings** in the sidebar.

2. Click **+ New Property** in the top right.

3. Select **Import**.

4. On the **Import Property** screen, click the **Airbnb** card or continue through the Airbnb authorization popup.

5. Click **Authorize with Airbnb**. This opens a pop-up where you log in to your Airbnb account and grant SympleHost permission to access your listings.

6. Once authorized, you'll see a list of your Airbnb listings. Tick the ones you want to import.

7. Click **Import**.

SympleHost will pull in the listing details, photos, and settings. You'll see a summary showing how many were imported, how many were skipped if already in SympleHost, and if any failed.

---

## How to Connect Booking.com

Booking.com connects through **Channex.io** (the connectivity provider that syncs your reservations, availability, rates, and room mapping between SympleHost and Booking.com). Booking.com only allows one connectivity provider at a time, so this step matters.

The SympleHost flow has four stages:

1. **Pre-flight** — confirm the property exists in SympleHost, Booking.com is open and bookable, no other PMS or channel manager is connected, and Channex.io is approved as the connectivity provider.
2. **Connect** — enter the Booking.com Hotel ID.
3. **Map rooms** — map Booking.com rooms to the correct SympleHost listing, unit, and rate plan.
4. **Sync** — push rates, calendar, and room mappings to Booking.com through Channex.io.

### Step 1: Set up Channex.io as your connectivity provider

Before connecting in SympleHost, update the connectivity provider in the Booking.com Extranet:

1. Log in to your **Booking.com Extranet** at admin.booking.com.
2. Open the account menu and go to **Connectivity provider**.
3. If another PMS or channel manager is connected, disconnect it first. Booking.com only allows one connectivity provider at a time.
4. Search for **Channex.io**.
5. Confirm **Channex.io** as the connectivity provider.

**Tip:** If you're not sure how to do this, SympleHost has a built-in setup guide — you'll see it when you start the connection process.

### Step 2: Connect in SympleHost

1. Make sure the property already exists in SympleHost. If it started on Airbnb, import it first. If it is direct-only, create it manually.

2. Open **Channel Manager**.

3. Find **Booking.com** and click **Connect**. A wizard will open.

4. Enter your **Hotel ID**.

   Your Hotel ID is the numeric code in the Booking.com Extranet URL, for example `admin.booking.com/hotel/1234567`. Click **Where to find your Hotel ID** in the wizard if you need help locating it.

5. Click **Connect & verify**.

### Step 3: Verify and sync

6. SympleHost verifies the Booking.com connection through Channex.io. You'll see the status progress:
   - "Creating connection..."
   - "Verifying with Booking.com..."
   - **"Connected!"** (with a green checkmark)

7. Click **Continue**.

8. Map each Booking.com room or room type to the correct SympleHost listing, unit, and rate plan.

9. Click **Save & continue**, then start the sync.

10. Wait for the sync to queue. First sync usually takes a few minutes.

Your Booking.com listing is now connected. You can review the connection later from **Channel Manager**, where connected properties, sync health, price rules, and last sync status are shown.

---

## Connecting Expedia, Agoda, VRBO, MakeMyTrip, and Trip.com

After the property exists in SympleHost, connect additional OTAs from **Channel Manager**:

1. Open **Channel Manager**.
2. Choose the OTA you want to connect.
3. Follow the pre-flight checklist for that OTA.
4. Approve **Channex.io** as the connectivity provider in the OTA's extranet or partner portal when the flow asks for it.
5. Enter the required hotel ID, hotel code, account details, or verification details.
6. Map the OTA's rooms or rate plans to the correct SympleHost listing or units.
7. Start sync.

Each OTA has slightly different requirements, but the pattern is the same: property in SympleHost first, connectivity provider approved on the OTA side, then mapping and sync in Channel Manager.

---

## Verifying Your Import

After importing, it's a good idea to check that everything came over correctly:

1. Go to **Listings** and open each imported listing.
2. Review the **name, description, and photos** — make sure they match what's on the OTA.
3. Check **capacity** (bedrooms, beds, bathrooms, max guests) — these sometimes need adjusting.
4. Set up **pricing** and review the **Pricing Calendar** — imported listings may still need SympleHost pricing and availability checks. See: How to Set Up Your Pricing & Rate Rules.

**Important:** Importing a listing does not automatically sync future changes between the OTA and SympleHost. If you update a listing on Airbnb, you'll need to update it in SympleHost too (or vice versa).

---

## Troubleshooting

### I don't see the "Import" option
The **+ New Property** button and import options are only visible to roles that can manage listings — typically **Account Owner**, **Account Admin**, or **Account Manager**. If your role is **Booking Coordinator** or **Staff**, ask your account owner to update your role under **Settings** → **Team Members**.

### Authorization failed for Airbnb
Make sure you're logging in with the correct Airbnb account — the one that owns the listings. If you manage listings on behalf of someone else, the account owner needs to authorize the connection.

### Some listings show as "skipped"
This means those listings were already imported into SympleHost. You won't have duplicate listings — SympleHost recognizes them and skips the re-import.

### Booking.com connection failed
Check that your Hotel ID is correct — it should be a numeric ID up to 10 digits from the Booking.com Extranet URL. Also make sure you've approved **Channex.io** as your connectivity provider in Booking.com first. If the connection still fails, click **Try Again** in the wizard.

### Booking.com sync failed
If the sync step fails, click **Try Again** in the wizard, or return to **Channel Manager → Booking.com** and re-open the connection.

### My photos didn't come through
This can happen if the OTA's image links have expired or if there's a temporary connection issue. Try re-importing the listing. If photos still don't appear, upload them manually from the listing's edit page.

---

## Related Articles

- [Adding a Listing Manually](/getting-started/adding-a-listing-manually/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar/)
