---
title: How to Set Markups for All OTAs
description: Set and update percentage markups for each connected OTA in Channel Manager, check mapped listings and rooms, and verify your channel prices.
category: platform-guides
section: Listings & pricing
sectionOrder: 3
tags:
  - Pricing
  - Channel Manager
  - Markups
  - Booking.com
date: '2026-09-24'
draft: false
---

## What Is a Channel Markup?

A channel markup is a percentage increase applied to the rate sent to a connected booking channel. Use it when you want to allow for channel costs or charge a higher rate on an OTA (online travel agency).

This guide covers markups for all connected OTAs in Channel Manager. The screenshot uses Airbnb as an example; choose the OTA connection you want to update and follow the same process for its mapped listings or rooms.

For example, if the rate for a night is **100** and you set a **20% markup**, the marked-up rate is **120**, before any other applicable adjustments, fees, or taxes.

The markup belongs to the selected listing's channel connection. Changing an Airbnb markup, for example, does not change that listing's Booking.com markup. To set markups across all your OTAs, repeat the steps for each connection and each mapped listing or room.

## Before You Start

- Set your listing's pricing and check the dates in **Pricing Calendar**. See [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/).
- Connect the booking channel. The markup control is available for connected channels.
- For Booking.com, confirm that the rooms are mapped to the correct SympleHost units. See [Adding a MultiUnit Listing Manually](/platform-guides/add-multi-unit-listing-for-bookingcom/).

## Set a Markup for a Connected Channel

1. Open **Channel Manager** and select the **Properties** tab.
2. Under **Channels**, open the OTA connection you want to update. If you have several connections for the same OTA, check the account or property details before choosing one.
3. In the side panel, find the correct listing under **Mapped listings**, or find the mapped room for a hotel-style connection. Click **Set markup**, or click the existing percentage, such as **+10%**.
4. Enter the percentage you want to apply. For a 20% increase, enter **20**.
5. Click **Save**.
6. Check that the control displays the percentage you saved.

![Channel Manager with the Airbnb connection panel open and an arrow pointing to Set markup beside a mapped listing](/screenshots/set-channel-markups/channel-manager-set-markup.png)

In this example, **Set markup** is beside the mapped Airbnb listing. Repeat the process for your other OTA connections. You can also access a connected channel's markup from a property's **Channels** tab.

The percentage control accepts values from **0 to 500**. Negative values are not supported in this control; use your pricing and discount settings when you want to lower prices.

## Set Markups for Booking.com Rooms

For hotel-style Booking.com connections, markups are managed at the **mapped room/listing level**.

1. Open the Booking.com connection in **Channel Manager**.
2. Find the mapped room you want to update and check that it belongs to the intended SympleHost unit.
3. Click **Set** or the existing markup percentage on that room's row.
4. Enter the percentage and click **Save**.
5. Repeat for the other mapped rooms that need a markup.

Do not assume that changing one room updates the whole property. Review each mapped room. If a room has no markup control, check its listing mapping first.

## Understand the Percentage

The basic calculation is:

**Marked-up rate = rate × (1 + markup ÷ 100)**

| Rate before markup | Markup | Rate after markup |
| --- | --- | --- |
| 100 | 0% | 100 |
| 100 | 10% | 110 |
| 100 | 20% | 120 |
| 150 | 20% | 180 |

These examples use a single nightly rate without other adjustments. Use the rate that applies to the dates you are checking, which may differ from your default base rate.

### Is Markup the Same as Commission?

No. A markup increases a price, while a percentage commission is deducted from the amount on which the channel charges it.

For a simplified example, a rate of **100** with a **20% markup** becomes **120**. If a hypothetical **20% commission** is then deducted from 120, the amount remaining is **96**. A 20% markup therefore does not cancel out a 20% commission.

Check the actual charges and calculation basis for your channel before choosing a markup. The examples here are arithmetic illustrations, not channel fee quotes.

## Change or Reset a Markup

To change an existing markup, click the displayed percentage, enter the new value, and click **Save**.

To stop adding an increase through this control, enter **0** and save. The control should display **+0%**. Other pricing rules, fees, taxes, or channel promotions may still affect the guest's final price.

## Check the Result

After saving:

1. Confirm the saved percentage on the correct listing or room row.
2. Check the channel's sync status and investigate any reported errors.
3. Compare a specific date and room in SympleHost with the corresponding rate on the channel.
4. Use the same dates, guest count, and rate plan for the comparison. Account for any channel promotions, fees, and taxes before comparing final totals.

Saving the percentage confirms the setting was updated. Also verify the channel rate before relying on it for future bookings.

## Troubleshooting

### The Markup Control Is Disabled

Check whether the channel is connected. Complete the channel connection before trying to set its markup.

### A Booking.com Room Has No Markup Control

Check that the room is mapped to a SympleHost listing or unit. The room-level control is only shown where that mapping is available.

### The Percentage Will Not Save

Enter a number between **0 and 500**. If a save error appears, retry and check that the saved percentage is displayed before leaving the page. Contact support if the error continues.

### The Channel Price Does Not Match My Calculation

Check the selected dates, the applicable rate, the saved markup, and the room and rate-plan mapping. Then check sync status and any other pricing rules or channel promotions. Compare equivalent rates before comparing the final guest total.

## Related Articles

- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Import or Connect Listings from an OTA](/getting-started/import-listings-from-ota/)
- [Adding a MultiUnit Listing Manually](/platform-guides/add-multi-unit-listing-for-bookingcom/)
