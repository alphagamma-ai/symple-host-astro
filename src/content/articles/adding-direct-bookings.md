---
title: How to Add a Direct Booking
description: Add direct bookings (off-platform reservations from your website, repeat guests, or word-of-mouth) into SympleHost so they show up on your calendar alongside Airbnb and Booking.com reservations.
category: platform-guides
section: Bookings & reservations
sectionOrder: 2
tags:
  - Direct Bookings
  - Bookings
  - Calendar
  - Payments
date: '2026-05-04'
draft: false
---

**Direct bookings — guests who book outside Airbnb and Booking.com — go on the same calendar as your OTA reservations, with no commission and full control over the payment.**

---

> **TL;DR:** Direct bookings are reservations you take outside an OTA — repeat guests, your direct booking website, walk-ins, WhatsApp enquiries. To add one, open **Properties → Calendar**, click an empty cell on the listing's row, choose **Direct Booking** as the booking platform, fill in guest and date details, and save. The reservation appears on the calendar instantly, blocks the dates across your synced OTAs (so no double-booking), and you can send the guest a Stripe payment link from inside SympleHost. No commission, no OTA cut — but you handle the cancellation policy and payment yourself.

---

## What Counts as a Direct Booking?

Anything that didn't come through an OTA. Common sources:

- A **repeat guest** who messages or emails you to rebook.
- A booking taken on **your direct booking website**.
- A **walk-in or phone enquiry**.
- A **WhatsApp / Instagram / Messenger** conversation that ends in a confirmed stay.
- A guest who heard about you from a friend.

Direct bookings sit on the same calendar as Airbnb and Booking.com reservations — they're tagged as **Direct Booking** so you can tell them apart at a glance, but they share the same availability calendar, so SympleHost auto-blocks the dates on your connected OTAs to prevent double-bookings.

---

## Yes — Direct Bookings Appear on the Calendar

Every reservation in SympleHost — direct bookings, Airbnb, Booking.com, manual entries — lives in one calendar at **Properties → Calendar**. Direct bookings show as color-coded bars on the listing row, just like OTA bookings. The colour-code lets you see at a glance which channel each booking came from.

[Screenshot: Property Calendar Overview with a mix of Airbnb, Booking.com, and Direct Booking bars showing the colour-coding]

---

## How to Add a Direct Booking from the Calendar

This is the fastest way — useful when a guest messages you and you want to lock in the dates immediately.

### Step 1: Open the Calendar

1. Click **Properties** in the sidebar to expand it.
2. Click **Calendar**.

You'll land on the **Property Calendar Overview** with all your listings down the left and dates across the top.

### Step 2: Click on the listing row where you want to add the booking

Click on an empty cell on the listing's row, for the date range the guest wants.

The **Add New Booking** panel slides in from the right. The **Property** is pre-selected based on the row you clicked.

[Screenshot: Add New Booking side panel with Property pre-selected at the top]

### Step 3: Choose "Direct Booking" as the Booking Platform

In the **Booking Platform** dropdown, select **Direct Booking**.

> 💡 **Tip:** If you collected the booking off a specific channel that isn't an OTA — e.g., your own website, a phone call, WhatsApp — you can still log it as Direct Booking. Add detail in the **Booking Notes** later if you want to track which off-platform source it came from.

### Step 4: Add the guest

In the **Guest** field:
- Search for an existing customer by name or email — useful for repeat guests, so their stay history stays linked to one profile.
- Or type a new name in the **Search or create a customer** field to create a fresh guest record.

You'll be able to add or edit their email and phone after the booking is saved.

### Step 5: Set check-in, check-out, and guest count

- Pick **Check-in** and **Check-out** dates. SympleHost shows the night count automatically (e.g. "3 nights").
- Enter **Adults** and **Kids**. The maximum is shown next to each based on the listing's capacity.

### Step 6: Save

Click **Save**. The new booking immediately appears as a bar on the calendar, in the colour-code reserved for direct bookings.

[Screenshot: Calendar after saving a new direct booking — the new bar visible on the listing row]

---

## After You Save: Confirming and Taking Payment

A new direct booking lands in **Pending** status. From the **Reservation Details** page (click the bar on the calendar), you have two follow-on actions:

### Confirm the booking

Click **Confirm Booking** in the top right. The status changes to **Confirmed** (green badge) — the dates are locked and synced out to your connected OTAs as blocked.

### Send a payment link

Direct bookings don't go through an OTA, so there's no automatic charge — you collect payment yourself. SympleHost integrates with Stripe (see *Setting Up Payments with Stripe* if you haven't connected Stripe yet) so you can send a hosted payment link straight from the reservation:

1. On the **Reservation Details** page, open the dropdown next to **Confirm Booking**.
2. Click **Send a payment link**.
3. SympleHost generates a Stripe-hosted checkout URL and sends it to the guest's email (and copies it to your clipboard so you can paste it into WhatsApp / Messenger / wherever you're talking to the guest).
4. When the guest pays, the reservation auto-updates to **Mark as Paid**.

If you've already taken payment by another method (bank transfer, cash on arrival, etc.), pick **Mark as Paid** from the same dropdown to record it manually.

[Screenshot: Reservation Details page showing the "Confirm Booking" button with the dropdown open — "Mark as Paid" and "Send a payment link" visible]

---

## Editing or Cancelling a Direct Booking

Same flow as any other reservation:

- **Edit:** Click the booking on the calendar → **Edit Reservation** (purple button, top right) → update dates / guest count / listing → **Save**. SympleHost shows a price-comparison preview if you change dates or guest count.
- **Cancel:** Click the booking → **Cancel Reservation** (red, top right) → review the cancellation policy and refund calculation → **Cancel Booking** to confirm.

Because direct bookings aren't held by an OTA, you decide the cancellation policy. The default is whatever you set on the listing — see *How to Set Up Your Pricing & Rate Rules* for changing per-listing policies.

---

## Direct Bookings vs OTA Bookings — at a Glance

| | Direct Booking | Airbnb / Booking.com |
|---|---|---|
| **Commission** | None | 15–20% |
| **Payment** | You collect (Stripe link or off-platform) | OTA collects, payouts to you |
| **Cancellation policy** | Yours | OTA's |
| **Guest contact details** | Full email + phone right away | Often masked or delayed |
| **Calendar sync** | Yes — blocks OTA availability | Yes — blocks SympleHost availability |
| **Shows on calendar** | Yes (own colour-code) | Yes (own colour-code) |
| **Appears in Reports** | Yes — counted in revenue | Yes — net of OTA commission |

---

## Troubleshooting

### I can't see the "+ Add Booking" or the side panel won't open
The **+ Add Booking** button is only available to roles that can manage bookings — **Account Owner**, **Account Admin**, **Account Manager**, or **Booking Coordinator**. If your role is **Staff**, ask your account admin to update your role in **Settings → Team → Members**.

### I picked the wrong listing
Click the booking → **Edit Reservation** → change the **Property** dropdown → **Save**. SympleHost will move the booking to the correct listing's row.

### My direct booking website pushed a reservation but it's not on the calendar
Direct booking website reservations should land on the calendar within seconds. If one's missing, check **Reservations** in the sidebar (full list view) — it may already be there but outside the calendar's current date window. Use the **+1M / +3M / +6M** shortcuts to jump forward.

### Stripe payment link option is greyed out
You haven't connected Stripe yet, or the Stripe connection has lapsed. Go to **Settings → Integrations → Payments** and connect/reconnect Stripe. See *Setting Up Payments with Stripe*.

---

## Key Takeaways

- Direct bookings are any reservation that didn't come from an OTA — repeat guests, walk-ins, your website, social DMs.
- Add them straight from **Properties → Calendar** by clicking the listing row and selecting **Direct Booking** as the platform.
- They appear on the same unified calendar with their own colour-code, and they auto-block availability on your connected OTAs.
- Use **Send a payment link** to collect payment via Stripe, or **Mark as Paid** if you took payment off-platform.
- No OTA commission — you keep 100% of the rate.

---

## Related Articles

- How to Manage Bookings & Your Calendar
- Setting Up Payments with Stripe
- How to Get More Direct Bookings for Your Vacation Rental (strategy guide)
- How to Set Up Your Pricing & Rate Rules
