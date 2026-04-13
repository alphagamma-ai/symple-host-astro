---
title: 'How to Manage Bookings & Your Calendar'
description: 'View all your reservations in one calendar, create manual bookings, and update reservation statuses as guests check in and out.'
category: platform-guides
section: Bookings & reservations
sectionOrder: 1
tags:
  - Bookings
  - Calendar
  - Reservations
date: '2026-04-09'
draft: false
---

## What Is the Calendar?

The calendar is your central view of all upcoming, current, and past reservations across your listings. Each booking shows as a color-coded bar spanning from check-in to checkout, so you can see at a glance which listings are occupied, which are available, and where gaps exist.

---

## How to View the Calendar

1. Click **Properties** in the sidebar to expand it.

   ![Properties page showing listings](/uploads/manage-bookings-and-calendar/01-properties-listings.png)

2. Click **Calendar**.

   ![Property Calendar Overview with color-coded bookings](/uploads/manage-bookings-and-calendar/02-calendar-overview.png)

You'll see the **Property Bookings** page with the heading "Manage availability and reservations for all your properties." The **Property Calendar Overview** shows your listings along the left side and dates across the top. Bookings appear as color-coded horizontal bars.

### Navigating the Calendar

Use the shortcuts above the calendar to jump through dates:

- **< >** arrows to move forward or backward
- **-1M** / **+1M** to jump one month back or forward
- **-3M** / **+3M** to jump three months
- **+6M** to jump six months forward

The current date range is shown in the center (e.g., "Apr 8 - May 7, 2026").

💡 **Tip:** Bookings are color-coded by platform and status — so you can tell at a glance which bookings are from Airbnb, Booking.com, or direct bookings.

---

## How to View Booking Details

1. Click on any booking bar in the calendar.

   ![Calendar with booking detail popup](/uploads/manage-bookings-and-calendar/03-booking-detail-popup.png)

   This opens the **Reservation Details** page.

   ![Reservation details page](/uploads/manage-bookings-and-calendar/04-reservation-details.png) The page shows a status badge (e.g., "Confirmed") and the booking platform (e.g., "booking.com") at the top, along with the booking reference number (e.g., #RES-202603-2F92).

The page is organized into these sections:

- **Customer Information** — guest name (linked to their profile), email (with copy button), and phone number
- **Listing Details** — property name, check-in/check-out dates, duration (in nights), and guest count
- **Reservation Source** — which platform the booking came from (e.g., "Booked via online platform"), with a **"View on booking.com"** button to see the original listing, plus OTA Commission, OTA Reservation number, and Reservation Reference
- **Price Breakdown** — nightly rate breakdown, fees, taxes, discounts, and total amount
- **Booking Notes** — add internal notes about the reservation
- **Guest Book** — guest book details linked to this stay
- **Booking Tasks** — tasks associated with this reservation

---

## How to Create a Manual Booking

For direct bookings (guests who contact you outside of an OTA), you can create a reservation manually.

1. On the **Property Calendar Overview**, click on the listing row where you want to add a booking. The **Add New Booking** panel opens on the right side.

2. The **Property** is pre-selected based on the listing you clicked. You'll see it displayed at the top of the panel.

3. Choose the **Booking Platform** — select **Direct Booking** from the dropdown (or another platform if applicable).

4. In the **Guest** field, search for an existing customer or create a new one by typing their name into the **"Search or create a customer"** field.

5. Under **Booking Details**, set the **Check-in** and **Check-out** dates. SympleHost automatically calculates the number of nights (e.g., "1 night").

6. Under **Guest Details**, enter the number of **Adults** and **Kids**. The maximum allowed is shown based on your listing's capacity (e.g., "Max: 2 total").

7. Click **Save** to confirm the booking.

The new booking will appear on the calendar immediately as a bar on the listing's row.

---

## Booking Statuses

Every reservation in SympleHost has a status that tracks where it is in its lifecycle:

- **Pending** — awaiting confirmation
- **Confirmed** — booking is confirmed and ready for guests
- **Completed** — guest stay is finished
- **Cancelled** — reservation was cancelled
- **Draft** — booking is in draft state
- **Expired** — reservation has expired

The status badge is color-coded on the Reservation Details page — green for Confirmed, yellow for Pending, red for Cancelled, purple for Completed.

---

## How to Modify a Booking

1. Click on the booking in the calendar to open the **Reservation Details** page.

2. Click the **Edit Reservation** button (purple) in the top right.

3. A side panel opens where you can update the guest details, check-in/check-out dates, number of guests, listing, and platform.

4. Review your changes — SympleHost shows a modification preview with a price comparison if the dates or guest count changed.

5. Click **Save** to apply the changes.

⚠️ **Important:** If the booking came from an OTA (like Airbnb), changes made in SympleHost won't automatically sync back to the OTA. You'll need to update the booking on both platforms.

💡 **Tip:** For pending bookings, you'll see a **Confirm Booking** button instead, with a dropdown menu that includes **"Mark as Paid"** and **"Send a payment link"** options (for direct bookings).

---

## How to Cancel a Booking

1. Open the booking from the calendar to go to the **Reservation Details** page.

2. Click the **Cancel Reservation** button (red) in the top right.

3. A cancellation panel opens in two steps:
   - **Step 1 — Review:** You'll see the booking details, the applicable cancellation policy (Flexible, Moderate, or Strict), the refund calculation, and a field to enter a **cancellation reason**. Click **Continue**.
   - **Step 2 — Confirm:** Review the cancellation summary including any refund amount. Click **Cancel Booking** to confirm.

The booking will remain visible on the calendar (marked as cancelled) so you have a record of it, but the dates will be freed up for new bookings.

---

## Filtering the Calendar

If you manage multiple listings, the calendar can get busy. Click the **filter icon** (funnel) in the top right of the calendar to narrow down what's shown:

- **Filter by listing** — show only specific listings
- **Filter by date range** — use the **-3M, -1M, +1M, +3M, +6M** shortcuts to zoom into a specific period

---

## Troubleshooting

### I can't create a manual booking
You need the **can_manage_bookings** permission. Ask your account owner to grant it under **Settings** → **Team Members**.

### A booking isn't showing on the calendar
Check the date range — you may need to navigate forward or backward. Also confirm the booking status isn't set to **Cancelled**, which may be filtered out depending on your view settings.

### The calendar is loading slowly
If you have many listings and a wide date range visible, the calendar can take a moment to load. Try narrowing the view to fewer months or filtering to specific listings.

---

Related Articles
- How to Set Up Your Pricing & Rate Rules
- How to Use the Inbox to Communicate with Guests
- How to Create & Assign Tasks to Your Team
