---
title: How to Check a Listing's Settings for Each OTA
description: See a listing's booking window, sync switch, markup, and minimum and maximum nights for each OTA in Channel Manager, and open the per-OTA Settings panel to check price settings.
category: platform-guides
section: Listings & pricing
sectionOrder: 4
tags:
  - Channel Manager
  - Listings
  - Pricing
  - Airbnb
  - Markups
date: '2026-10-07'
draft: false
---

## Where to Find a Listing's OTA Settings

Each listing has settings that apply to one OTA (online travel agency) at a time, such as its markup or minimum nights on that OTA. You can check them in two places in **Channel Manager**:

- **Listing mapping tab:** one panel per listing, with a card for each OTA the listing is mapped to.
- **Channels tab:** one panel per OTA connection, with a **Settings** view for each mapped listing.

This guide uses Airbnb as the example. Use the same steps for the other OTAs your listing is mapped to.

## Open Channel Manager

1. Click **Listings** in the sidebar.
2. Click **Channel Manager** at the top right of the page.

![Listings Properties page with an arrow pointing to the Channel Manager button, next to Linked Calendars and New Property](/screenshots/check-listing-settings-per-ota/01-listings-channel-manager-button.png)

Channel Manager has two tabs: **Channels** and **Listing mapping**.

## Option 1: Check Settings from the Listing Mapping Tab

### Open the Listing

1. Click the **Listing mapping** tab.
2. Find the listing. You can use **Search by title** or **Filter**.
3. Click the listing's row. The arrow at the end of the row opens it.

The table shows each listing's **Title**, its **Channels**, and its **Booking window**. A listing that is not on any OTA shows **Not mapped**. The legend at the top right explains the status colours: **Syncing**, **Mapped, not syncing**, and **Needs attention**.

![Channel Manager Listing mapping tab with columns Title, Channels, and Booking window, and an arrow pointing to the chevron at the end of the Airbnb flat row](/screenshots/check-listing-settings-per-ota/02-listing-mapping-tab.png)

### Read the Listing Panel

The panel opens with the listing name and location at the top.

![Listing panel for Airbnb flat showing the summary bar, the BOOKING WINDOW card set to 30 days, the Airbnb card with Re-sync, Listing ID, the Syncing to Airbnb switch, Markup, Minimum nights and Maximum nights fields, "Not on Booking.com yet." with Map in Channels, and the Close and Save changes buttons](/screenshots/check-listing-settings-per-ota/03-listing-panel.png)

**Summary bar.** Shows how many channels the listing is syncing to, for example **Syncing to 1 of 1 channels**. It also shows the listing's base rate and default stay, for example **Base rate £600 / night · Listing default stay 30–1125 nights**.

**BOOKING WINDOW.** Use the **Limit how far ahead guests can book** switch to cap how far ahead guests can book. The card notes that it **Applies to every channel below.** Choose the period in the **Number of months** dropdown, for example **30 days**. The card then tells you the last open date, for example **Calendar open until Nov 6, 2026. Later dates are closed on every channel.**

**CHANNELS.** Each OTA the listing is mapped to has its own card. The Airbnb card shows:

- A status badge, such as **Live**, and when it last synced, such as **Synced about 6 hours ago**.
- A **Re-sync** button.
- The **Listing ID** on that OTA, with a copy icon.
- The **Syncing to Airbnb** switch.
- **Markup** (%), **Minimum nights**, and **Maximum nights** for this OTA.
- A preview line, such as **£600 base → £1,380 per night on Airbnb** and **50–60 nights**.

### About the Syncing Switch

The panel describes what turning the switch off does:

> Off stops syncing rates and availability to Airbnb. The listing on Airbnb stays open with the last values sent — close it or block dates on Airbnb to stop bookings.

So turning sync off does not close the listing on the OTA. Guests can still book it there. To stop bookings, close the listing or block the dates on the OTA itself.

### Markup and Minimum and Maximum Nights

- **Markup** is the percentage added to the rate for this OTA only. For how to set it, see [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/).
- **Minimum nights** and **Maximum nights** apply to this OTA only. If you leave them blank, the listing default is used. The panel footer says: **Blank minimum / maximum nights use the listing default.**

Check the preview line after you change a value. In the example, a **£600** base with a **130%** markup gives **£1,380 per night on Airbnb**, with a stay of **50–60 nights**.

### OTAs the Listing Is Not On

If the listing is not mapped to an OTA, the panel shows a line such as **Not on Booking.com yet.** with a **Map in Channels** button.

### Save Your Changes

Click **Save changes** to save, or **Close** to leave the panel.

## Option 2: Check Settings from the Channels Tab

### Open the OTA Connection

1. Click the **Channels** tab.
2. Find the OTA in the Channels table and open its connection. Each row has an **Edit** button.

![Channel Manager Channels tab with the summary bar, Connect OTA button, and the Channels table listing two Airbnb connections and a Booking.com connection with their Structure, Covers, and Sync status, and an arrow pointing to the Listing mapping tab](/screenshots/check-listing-settings-per-ota/04-channels-tab.png)

The table shows each connection's **OTA account**, **Structure** (for example **UNIT** or **HOTEL**), what it **Covers**, and its **Sync** status, such as **Live**, **Not connected**, or **Mapping**. The bar above the table shows an overall summary, such as **Connected**, the number of properties, rooms, and rate plans, when it last synced, and **All in sync**.

### Open the Listing's Settings

The connection panel shows the OTA's status, for example **Live via channex**. Use **Mapped**, **Not mapped**, **Ignored**, and **All** to filter the listings, or **Search listings**.

Each row under **Mapped listings** shows the listing name, its listing ID on the OTA, its sync status (such as **In sync**), and its markup (such as **+130.0%**).

1. Find the listing under **Mapped listings**.
2. Click **Settings** on that row.

![Airbnb connection panel showing Live via channex, the Mapped, Not mapped, Ignored, and All filters, and the mapped listing Airbnb flat with a +130.0% markup and Pricing, Settings, and Disconnect buttons, with an arrow pointing to Settings](/screenshots/check-listing-settings-per-ota/05-connection-panel-settings.png)

### Check the Price Tab

The Settings view shows the listing name, its listing ID and sync status, and three tabs: **Price**, **Availability**, and **Booking**. Click **Back to listings** to return to the list.

![Airbnb listing Settings view showing Back to listings, the Price, Availability, and Booking tabs with an arrow pointing to them, the CURRENCY & BASE PRICES fields, and the LENGTH-OF-STAY DISCOUNTS section with Add discount rule](/screenshots/check-listing-settings-per-ota/06-listing-settings-price-tab.png)

The **Price** tab has these sections:

**CURRENCY & BASE PRICES**

- **Currency**
- **Default daily price**. The hint says: **Your SympleHost calendar prices override this on Airbnb day by day.**
- **Weekend price**
- **Guests included**
- **Price per extra guest**. The hint says: **Per guest per night beyond the included count. 0 = no extra charge.**

**LENGTH-OF-STAY DISCOUNTS**

- Click **+ Add discount rule** to add a discount rule.

A **STANDARD FEES** section follows below.

The **Availability** and **Booking** tabs hold more settings for the listing on this OTA. They are not covered in this guide yet.

## Discounts You Set in Airbnb

Discounts and promotions you set up inside Airbnb itself, such as Airbnb's **Top-rated guests discount**, are not affected by SympleHost. Keep managing them in Airbnb. See [How to Manage Airbnb-Specific Discounts](/platform-guides/manage-airbnb-specific-discounts/).

## Related Articles

- [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/)
- [How to Manage Airbnb-Specific Discounts](/platform-guides/manage-airbnb-specific-discounts/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Import or Connect Listings from an OTA](/getting-started/import-listings-from-ota/)
