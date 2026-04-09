---
title: 'How to Set Up Your Pricing & Rate Rules'
description: 'Configure your nightly rates, create rate plans for different seasons, and set guest-based pricing so your listings are priced correctly year-round.'
category: platform-guides
tags:
  - Pricing
  - Rate Plans
  - Listings
date: '2026-04-09'
draft: false
---

## What Is Pricing in SympleHost?

Pricing in SympleHost is how you set what guests pay per night for each listing. Every listing has a **Standard Rate** (your base nightly price), and you can add additional **rate plans** for different seasons or periods — like charging more during summer or holidays.

Think of it like setting a thermostat: the Standard Rate is your default temperature, and additional rate plans are when you turn it up or down for specific times of year.

---

## How to Access Price Settings

1. Click **Properties** in the sidebar, then click **Listings**.

2. Click on the listing you want to price.

3. Click the **Price Settings** tab.

You'll see the **Rate Plans** section. This is where all your pricing lives. You'll also see the **Currency** displayed on the right (this uses your account currency, e.g., £ GBP).

---

## How to Set Your Standard Rate (Base)

Your **Standard Rate** is the default rate plan — it's created automatically and applies when no other rate plan is active.

1. On the **Price Settings** tab, click the **Standard Rate (Base)** tab if it isn't already selected.

2. Set the **Rate Plan Name** — this defaults to "Standard Rate" but you can rename it.

3. Enter your **Price per Night** — this is the nightly rate guests will pay.

4. Set **Up to # of Guests** — choose the maximum number of guests this price covers (e.g., 2 guests).

5. Save your changes.

💡 **Tip:** The "Up to # of Guests" field lets you set base pricing for a certain number of guests. If you want to charge extra for additional guests beyond this number, you can configure that separately.

---

## How to Add a Rate Plan

Rate plans let you set different prices for specific periods — summer, winter holidays, local events, or any time you want to adjust your pricing.

1. Click **+ Add Rate Plan**.

2. Enter a **Rate Plan Name** — something descriptive like "Summer", "Christmas Week", or "Off-Season".

3. Set the **Price per Night** for this plan.

4. Set **Up to # of Guests**.

5. Save the rate plan.

Your new rate plan appears as a tab alongside your Standard Rate. You can click between tabs to view and edit each plan.

---

## How to Edit or Delete a Rate Plan

1. Go to the listing's **Price Settings** tab.

2. Click the tab for the rate plan you want to change.

3. Update the name, price per night, or guest count as needed.

4. Save your changes.

To delete a rate plan, open it and click the **trash icon** (🗑️) on the right side of the rate plan name. The **Standard Rate (Base)** plan cannot be deleted — it's your fallback rate.

⚠️ **Important:** Deleting a rate plan removes it permanently. Any bookings already made at that price won't be affected, but future bookings will fall back to your Standard Rate.

---

## Using the Pricing Calendar

To see how your rate plans map to specific dates, click the **Pricing Calendar** tab (next to Price Settings). This gives you a visual calendar showing which rate plan applies on each date, so you can spot gaps or overlaps.

---

## Tips for Setting Up Pricing

- **Start with your Standard Rate.** Get your base price right first, then add seasonal rate plans as you learn your demand patterns.
- **Name rate plans clearly.** Use descriptive names like "Summer 2026" or "Holiday Week" so you can quickly identify them later.
- **Review the Pricing Calendar.** After adding rate plans, check the Pricing Calendar tab to make sure the right rates apply on the right dates.

---

## Troubleshooting

### I don't see the Price Settings tab on my listing
Make sure you've saved the listing first. The Price Settings tab only appears on listings that have been fully created (not drafts). You also need the **can_manage_listings** permission.

### I can't delete the Standard Rate
The Standard Rate (Base) is your default rate plan and can't be removed — it ensures there's always a fallback price. You can edit its price and name, but not delete it.

### Guests are seeing the wrong price
Check which rate plan is active for the dates the guest is looking at. Open the **Pricing Calendar** tab to see which plan applies on specific dates. If the wrong plan is covering those dates, adjust the date ranges on your rate plans.

---

Related Articles
- Adding a Listing Manually
- How to Import Listings from an OTA
- How to Manage Bookings & Your Calendar
