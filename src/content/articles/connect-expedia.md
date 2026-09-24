---
title: How to Connect Expedia to SympleHost
description: Add Channex.io as your Expedia connectivity provider, enter your Hotel ID, and map your property in SympleHost.
category: getting-started
section: Connect your listings
sectionOrder: 4
tags:
  - Expedia
  - OTA
  - Channel Manager
date: '2026-09-24'
draft: false
---

Connect an existing Expedia property to SympleHost by approving **Channex.io** as its connectivity provider, copying its **Hotel ID**, and completing the connection and mapping flow in **Channel Manager**.

## Before You Start

Have the following ready:

- Access to the property in **Expedia Partner Central**, with permission to manage its connectivity provider.
- The matching property in SympleHost, with its units or room types and pricing set up.
- The Expedia rooms and rate plans you want to connect.

If the property does not exist in SympleHost yet, [add it manually](/getting-started/adding-a-listing-manually/) or [import it from Airbnb](/getting-started/import-listings-from-ota/). For a property with several room types, see [Adding a MultiUnit Listing Manually](/platform-guides/add-multi-unit-listing-for-bookingcom/).

## Step 1: Add Channex.io as Your Connectivity Provider

1. Sign in to **Expedia Partner Central** and select your property.
2. Open **Rooms and rates → Connectivity settings**.

![Expedia Partner Central menu showing Connectivity settings under Rooms and rates](/screenshots/connect-otas/expedia-connectivity-menu.png)

3. Complete Expedia's two-factor verification if prompted.
4. Click **Edit** in the selected-provider section.
5. Select **Channex.io / Channex** for both **updating rates and availability** and **receiving reservations**, then confirm the connection.

![Expedia Connectivity settings showing separate providers for rates and availability and for reservations, with an Edit control](/screenshots/connect-otas/expedia-connectivity-settings.png)

Screenshots and setup reference: [Channex's Expedia guide](https://help.channex.io/en/articles/8229536-expedia). These are reference screenshots; Expedia may update its page layout.

## Step 2: Copy Your Hotel ID

Copy the Expedia hotel ID (also called the EQC ID) from the property settings, or ask your Expedia account manager.

Use the identifier issued by **Expedia** for this property. A SympleHost listing ID, room ID, or reservation number will not identify the OTA property for this connection.

## Step 3: Connect the Property in SympleHost

1. Open **Listings → Channel Managers**.
2. Click **Connect OTA** and choose **Expedia**.
3. On **Connect account**, paste the value you copied into **Hotel ID**.
4. Click **Request connection**.

![SympleHost Expedia Connect account screen showing the Hotel ID field and Request connection button](/screenshots/connect-otas/expedia-request-connection.png)

SympleHost will notify you once the connection is approved. After approval, open the connection and continue to **Map rooms**. Submitting the request does not mean your rooms are already mapped or syncing.

## Step 4: Map Rooms and Rate Plans

Once the connection is approved, review the rooms and rate plans loaded from Expedia.

1. Match each room you want to sell to the corresponding SympleHost unit or listing.
2. Select the appropriate SympleHost rate plan for each channel rate you are mapping.
3. Review room names, occupancy, and rate-plan choices so each channel rate points to the intended accommodation and pricing.
4. Save the mappings and complete the remaining setup prompts.

If the flow shows occupancy-based rates, review each occupancy and the primary selection used for restrictions. Avoid mapping different room types to the same unit unless that matches your actual inventory setup.

## Step 5: Complete Sync and Check the Connection

1. Complete the remaining sync setup for the mapped inventory.
2. Return to **Channel Manager** and open the Expedia connection.
3. Check its status and resolve any sync errors.
4. Compare availability and rates for a sample date and room in SympleHost and Expedia, using the same guest count and rate plan.

An approved connection still needs correct mappings and a successful sync. Check all three before relying on the channel's availability and prices.

## Set a Markup for Expedia

Open the connection in **Channel Manager**, find the mapped listing or room, and click **Set markup** or the existing percentage. Enter your percentage and click **Save**.

This markup applies to the selected channel mapping. Review each mapped room or listing separately.

See [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/) for screenshots, calculations, and instructions for changing or resetting a markup.

## Troubleshooting

### The Connection Is Pending or Cannot Be Approved

Confirm that Channex.io is approved for the correct property in Expedia Partner Central. Recheck the **Hotel ID** and make sure any previous provider change is complete.

### No Rooms or Rate Plans Appear

Confirm that the identifier belongs to the intended property and that its rooms and rate plans exist in Expedia. Check provider approval, then retry loading the connection.

### I Cannot Find the Matching SympleHost Unit

Check that the property and its units have been created in SympleHost. Finish their pricing setup before returning to the mapping step.

### Prices or Availability Do Not Match

Check room and rate-plan mappings, the applicable calendar pricing, channel markup, and sync status. Compare the same dates and guest count, accounting for channel promotions, fees, and taxes.

## Related Articles

- [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/)

