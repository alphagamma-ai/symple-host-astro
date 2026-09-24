---
title: How to Connect Agoda to SympleHost
description: Add Channex.io as your Agoda connectivity provider, enter your Property ID, and map your property in SympleHost.
category: getting-started
section: Connect your listings
sectionOrder: 6
tags:
  - Agoda
  - OTA
  - Channel Manager
date: '2026-09-24'
draft: false
---

Connect an existing Agoda property to SympleHost by approving **Channex.io** as its connectivity provider, copying its **Property ID**, and completing the connection and mapping flow in **Channel Manager**.

## Before You Start

Have the following ready:

- Access to the property in **Agoda YCS**, with permission to manage its connectivity provider.
- The matching property in SympleHost, with its units or room types and pricing set up.
- The Agoda rooms and rate plans you want to connect.

If the property does not exist in SympleHost yet, [add it manually](/getting-started/adding-a-listing-manually/) or [import it from Airbnb](/getting-started/import-listings-from-ota/). For a property with several room types, see [Adding a MultiUnit Listing Manually](/platform-guides/add-multi-unit-listing-for-bookingcom/).

## Step 1: Add Channex.io as Your Connectivity Provider

Sign in to **Agoda Partner Portal (formerly YCS)** and select your property. The menu depends on the property type.

### Hotels and Multi-Unit Homes

1. Open **Property → Property settings**. Older YCS screens use **Settings → Property Settings**.
2. Open **Optional Settings**.
3. Enable **Channel manager mode**.
4. Choose **Channex** in the provider dropdown and click **Save**.

![Older Agoda YCS screen highlighting Property Settings, Optional settings, Enable channel manager mode, the provider dropdown, and Save](/screenshots/connect-otas/agoda-channel-manager-settings.png)

This reference screenshot shows the older YCS layout and an example provider. Select **Channex**, not the provider shown in the image. Screenshot: [Channex's Agoda guide](https://help.channex.io/en/articles/13780884-agoda).

### Single-Unit Homes

1. Open **Rates and availability → Connectivity settings**.
2. Select **Channel manager**.
3. Choose **Channex** and click **Save**.

Menu paths: [Agoda's official channel-manager instructions](https://www.partnerhub.agoda.com/how-do-i-manage-my-channel-manager-connection/). If Channex is unavailable, ask Agoda support through the portal to help connect your property.

## Step 2: Copy Your Property ID

Copy the **Property ID** displayed beside your property name at the top of Agoda Partner Portal or on **Listings**. Older YCS views may also display it in the property dropdown or URL. Copy the ID itself, not the full URL. See [Agoda’s ID-finding instructions](https://www.partnerhub.agoda.com/how-do-i-manage-my-channel-manager-connection/).

Use the identifier issued by **Agoda** for this property. A SympleHost listing ID, room ID, or reservation number will not identify the OTA property for this connection.

## Step 3: Connect the Property in SympleHost

1. Open **Listings → Channel Managers**.
2. Click **Connect OTA** and choose **Agoda**.
3. On **Connect account**, paste the value you copied into **Property ID**.
4. Click **Request connection**.

![SympleHost Agoda Connect account screen showing the Property ID field and Request connection button](/screenshots/connect-otas/agoda-request-connection.png)

SympleHost will notify you once the connection is approved. After approval, open the connection and continue to **Map rooms**. Submitting the request does not mean your rooms are already mapped or syncing.

## Step 4: Map Rooms and Rate Plans

Once the connection is approved, review the rooms and rate plans loaded from Agoda.

1. Match each room you want to sell to the corresponding SympleHost unit or listing.
2. Select the appropriate SympleHost rate plan for each channel rate you are mapping.
3. Review room names, occupancy, and rate-plan choices so each channel rate points to the intended accommodation and pricing.
4. Save the mappings and complete the remaining setup prompts.

If the flow shows occupancy-based rates, review each occupancy and the primary selection used for restrictions. Avoid mapping different room types to the same unit unless that matches your actual inventory setup.

## Step 5: Complete Sync and Check the Connection

1. Complete the remaining sync setup for the mapped inventory.
2. Return to **Channel Manager** and open the Agoda connection.
3. Check its status and resolve any sync errors.
4. Compare availability and rates for a sample date and room in SympleHost and Agoda, using the same guest count and rate plan.

An approved connection still needs correct mappings and a successful sync. Check all three before relying on the channel's availability and prices.

## Set a Markup for Agoda

Open the connection in **Channel Manager**, find the mapped listing or room, and click **Set markup** or the existing percentage. Enter your percentage and click **Save**.

This markup applies to the selected channel mapping. Review each mapped room or listing separately.

See [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/) for screenshots, calculations, and instructions for changing or resetting a markup.

## Troubleshooting

### The Connection Is Pending or Cannot Be Approved

Confirm that Channex.io is approved for the correct property in Agoda YCS. Recheck the **Property ID** and make sure any previous provider change is complete.

### No Rooms or Rate Plans Appear

Confirm that the identifier belongs to the intended property and that its rooms and rate plans exist in Agoda. Check provider approval, then retry loading the connection.

### I Cannot Find the Matching SympleHost Unit

Check that the property and its units have been created in SympleHost. Finish their pricing setup before returning to the mapping step.

### Prices or Availability Do Not Match

Check room and rate-plan mappings, the applicable calendar pricing, channel markup, and sync status. Compare the same dates and guest count, accounting for channel promotions, fees, and taxes.

## Related Articles

- [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Set Markups for All OTAs](/platform-guides/set-channel-markups/)

