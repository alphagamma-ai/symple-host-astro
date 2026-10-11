---
title: How to Set Up Fees and Taxes for Direct Bookings
description: Use the Fees & taxes library to start from your country's tax presets, manage fees and taxes, choose a tax treatment, and apply taxes to existing direct reservations.
category: platform-guides
section: Listings & pricing
sectionOrder: 6
tags:
  - Fees
  - Taxes
  - Direct Bookings
  - Pricing
date: '2026-10-11'
draft: false
---

## What Is the Fees & Taxes Library?

The Fees & taxes library is where you define a fee or tax once and then apply it to any of your properties.

It applies to **direct bookings only**. OTAs (online travel agencies) such as Airbnb and Booking.com manage their own fees and taxes. To review what an OTA holds for a listing, see [How to Check a Listing's Settings for Each OTA](/platform-guides/check-listing-settings-per-ota/).

SympleHost does not give tax advice. The page itself says: **Confirm with your tax adviser before charging guests.**

## Before You Start

- Know which fees and taxes apply to your properties. Check with your tax adviser if you are unsure.
- Set up your nightly rates first. See [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/).
- To take payment for direct bookings, connect a payment gateway. See [How to Set Up Payments](/getting-started/set-up-payments-stripe/).

## Step 1: Open Fees & Taxes

Go to **Settings**. In the left menu, under **DIRECT BOOKINGS**, click **Fees & Taxes**.

The **Fees & taxes library** page opens.

![Settings page with Fees & Taxes selected under DIRECT BOOKINGS in the left menu, showing the Fees & taxes library with the Tax presets card for Indonesia and the start of the Fees card](/screenshots/set-up-fees-and-taxes/01-fees-taxes-library.png)

## Step 2: Start from a Tax Preset (Optional)

The **Tax presets** card lets you start from the tax rules for your country, then apply them to properties. Linked taxes are managed together.

1. Select your country in the dropdown at the top right of the card.
2. Read each preset. Each one shows its name, its rate, a short description, the date the rates were checked (for example, **Rates checked Oct 1, 2026**), and an **Official source** link.
3. Click **Enable** on each preset you want to use.

The presets you see depend on the country you select. For example, with **Indonesia** selected, the presets are **Hotel tax (PBJT)** and **Service charge**.

Open the **Official source** link to check the rules yourself, and confirm with your tax adviser before charging guests.

## Step 3: Manage Your Fees

The **Fees** card lists every fee in your library. Each row shows:

- The fee name, such as **Platform fee**
- How often it is charged, such as **per stay**
- The amount, such as **IDR Rp 20**
- How many properties it is applied to, such as **1 property**, or **Not applied yet**
- An edit (pencil) icon and a delete (bin) icon

To create a new fee, click **+ Add fee**. To change or remove a fee, use the edit or delete icon on its row.

![Fees & taxes library showing the Tax presets card, the Fees card with Platform fee and GST Fees rows, and the Taxes card with the bulk selection bar and a test tax row set to Add on top](/screenshots/set-up-fees-and-taxes/02-fees-and-taxes-sections.png)

## Step 4: Manage Your Taxes

The **Taxes** card lists every tax in your library. Each row shows:

- A checkbox to select the tax
- The tax name, such as **test tax**
- A **Tax treatment** dropdown, such as **Add on top**, with what the tax is charged on, such as **of Accommodation**
- The rate, such as **5%**
- How many properties it is applied to
- An edit (pencil) icon and a delete (bin) icon

To create a new tax, click **+ Add tax**.

### Included in Price or Add on Top

The tax treatment decides how a tax relates to the price:

- **Included in price**: the tax is part of the price shown.
- **Add on top**: the tax is added to the price.

### Change the Treatment for Several Taxes at Once

1. Tick the checkbox next to each tax you want to change, or tick **Select all eligible taxes**. The bar shows how many tax groups are selected.
2. Click **Set selected: Included in price** or **Set selected: Add on top**.

Keep in mind:

- **Select all** covers the full tax library.
- Linked taxes are updated together.
- Fixed taxes and fees are excluded.
- This changes your tax configuration, **not past reservations**. To update existing reservations, use the next step.

## Step 5: Apply Taxes to Existing Reservations

Use the **Apply taxes to existing reservations** card to add taxes to direct reservations you already have.

![Apply taxes to existing reservations card with the Check-in month field, the How should tax affect the saved price? dropdown showing Choose tax treatment, and the Preview reservations button](/screenshots/set-up-fees-and-taxes/03-apply-taxes-existing-reservations.png)

1. Choose a **Check-in month**.
2. In **How should tax affect the saved price?**, choose a tax treatment.
3. Click **Preview reservations**.
4. Review the breakdown.
5. Select the eligible direct reservations to update.

The reservations are updated using the taxes assigned to each property.

Which reservations are included:

- Direct reservations checking in during the selected month.
- The whole stay is included, even when checkout is in another month.
- Reservations with existing taxes are skipped.

## Troubleshooting

### My OTA Bookings Do Not Show These Fees or Taxes

The Fees & taxes library applies to direct bookings only. OTAs manage their own fees and taxes.

### I Changed the Tax Treatment but Old Reservations Did Not Change

Changing the treatment in the **Taxes** card changes your tax configuration, not past reservations. Use **Apply taxes to existing reservations** to update existing direct reservations.

### A Reservation Was Not Updated

Reservations that already have taxes are skipped. Also check that the reservation is a direct booking and that its check-in date falls in the month you selected.

### A Fee Shows Not Applied Yet

The fee is in your library but is not applied to any property yet.

## Related Articles

- [How to Set Up Payments](/getting-started/set-up-payments-stripe/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Check a Listing's Settings for Each OTA](/platform-guides/check-listing-settings-per-ota/)
