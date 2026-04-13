---
title: Creating a Reservation Manually
description: Learn how to create a booking by hand, understand the reservation statuses, and see how bookings appear on your calendar.
category: platform-guides
section: Bookings & reservations
sectionOrder: 2
tags:
  - Reservations
  - Bookings
  - Calendar
date: '2026-04-13'
draft: false
---

## What Is a Manual Booking?

A manual booking is a reservation you create yourself in SympleHost — as opposed to one that comes in automatically from an OTA (an Online Travel Agency, like Airbnb or Booking.com) or your direct booking website.

You'd create a manual booking when:

- A guest books with you directly (via phone, email, or in person)
- You want to block dates for personal use or maintenance
- You're testing how bookings work before going live

---

## Before You Start

Make sure you've already:

- **Added at least one listing** — you need a property to attach the booking to. See: *Adding a Listing Manually* or *How to Import Listings from an OTA*
- **Set up pricing** — so the booking amount is calculated correctly. See: *How to Set Up Your Pricing & Rate Rules*

---

## How to Create a Property Booking

1. Go to **Bookings** in the sidebar.
2. Click the **Properties** tab at the top.
3. You'll see a calendar view showing your listings. Click on the **date** you want the booking to start.
4. A side panel will open with the booking form.
5. Fill in the following details:

| Field | What to Enter |
|-------|--------------|
| **Listing** | Select the property from the dropdown (may be pre-filled if you clicked from a specific listing's calendar) |
| **Guest Name** | The guest's full name |
| **Guest Email** | Their email address |
| **Guest Phone** | Their phone number |
| **Check-in Date** | The arrival date (pre-filled from where you clicked) |
| **Check-out Date** | The departure date |

6. Click **Save** to create the booking.

[Screenshot: The booking side panel open over the calendar, showing the guest details form with all fields filled in]

The booking will now appear on your calendar as a colored block spanning the check-in to check-out dates.

💡 **Tip:** You can also create a booking by going to **Properties → Calendar** and clicking directly on a date for a specific listing.

---

## How to Create a Service Booking

If you offer services (tours, airport transfers, cleaning, etc.), the process is similar but with a few different fields:

1. Go to **Bookings** in the sidebar.
2. Click the **Services** tab.
3. Click on a **date** in the service calendar.
4. A side panel will open. Fill in:

| Field | What to Enter |
|-------|--------------|
| **Guest Name** | The guest's full name |
| **Guest Email** | Their email address |
| **Guest Phone** | Their phone number |
| **Guest Count** | Number of people |
| **Booking Date** | The date of the service |
| **Start Time** | When the service begins |
| **End Time** | When the service ends |
| **Special Requests** | Any notes from the guest (optional) |

5. Click **Save** to create the service booking.

---

## Understanding Booking Statuses

Every booking in SympleHost has a status that tells you where it is in its lifecycle:

| Status | What It Means | Color |
|--------|-------------- |-------|
| **Pending** | Booking created but not yet confirmed | Yellow |
| **Confirmed** | Booking is confirmed and locked in | Blue |
| **Checked In** | Guest has arrived | Green |
| **Checked Out** | Guest has departed | Gray |
| **Cancelled** | Booking was cancelled | Red |

You can update a booking's status at any time by opening the booking and clicking the appropriate action button (e.g., **Confirm Booking** or **Cancel Booking**).

[Screenshot: A booking detail panel showing the status badge and action buttons — Confirm Booking and Cancel Booking]

---

## Viewing Your Bookings

There are several ways to see your bookings:

- **Bookings page** — Go to **Bookings** for a combined view with stats at the top (Total Bookings, Confirmed, Pending, Active Properties, Active Services)
- **Properties → Calendar** — See bookings visually on the calendar. Available dates show in purple, blocked dates in gray, and booked dates in green
- **Reservations** — A list view of all reservations with filters for date range and listing
- **Overview dashboard** — The Check-In/Check-Out Timeline shows today's arrivals and departures

---

## Troubleshooting

### I can't see the booking I just created
Check which tab you're on — **Properties** vs. **Services**. Property bookings and service bookings appear on separate tabs. Also make sure the calendar is showing the correct date range.

### The booking shows the wrong price
Verify that your listing's pricing is set up correctly in **Properties → [Your Listing] → Price Settings**. If you created custom pricing for specific date ranges, make sure the booking dates fall within the correct range. See: *How to Set Up Your Pricing & Rate Rules*.

### I want to edit a booking after creating it
Click on the booking in the calendar or bookings list to open its details. From there you can update guest information, change dates, or update the status.

### I accidentally created a booking on the wrong dates
Open the booking and either update the dates or cancel it and create a new one with the correct dates.

---

## Key Takeaways

- Manual bookings are for direct reservations, personal blocks, or testing
- Click a date on the calendar to open the booking form — it's the quickest way
- Every booking moves through a lifecycle: Pending → Confirmed → Checked In → Checked Out
- The Bookings page gives you a stats overview; the Calendar gives you a visual view

---

## Related Articles

- Viewing Your First Reservation
- How to Manage Bookings & Your Calendar
- Adding a Listing Manually
- How to Set Up Your Pricing & Rate Rules
- How to Set Up Payments (Stripe Integration)
