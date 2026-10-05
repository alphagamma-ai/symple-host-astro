---
title: Setting Up a Guesthouse or Boutique Hotel with Several Rooms
description: Create one standalone property, set how many rooms it has (room count or quantity), and let the SympleHost calendar manage that room inventory across your channels.
category: platform-guides
section: Listings & pricing
sectionOrder: 2
tags:
  - Listings
  - Room quantity
  - Calendar
  - Channel Manager
date: '2026-10-05'
draft: false
---

## Who This Is For

Use this guide if you run a **guesthouse** or **boutique hotel** that is **one standalone property with several rooms** — for example, a guesthouse with five bedrooms that are each rented separately.

You do not need to create a separate listing for every room. Create the property once and set its **room count (quantity)**. The SympleHost calendar then treats that number as your bookable inventory for each night.

---

## How Room Quantity Works

- **One property, one listing.** The property holds the shared details: name, address, description, photos, amenities, house rules, cancellation policy, and pricing.
- **Room count (quantity)** tells SympleHost how many rooms of this listing can be booked on the same night.
- **The calendar handles availability.** Each booking or block uses one room from that count. While at least one room is still free, the date stays bookable. When every room is booked or blocked, the date becomes unavailable.

For example, if you set the room count to **5** and three rooms are booked for 12 March, SympleHost still shows **2** rooms available for that night.

---

## Before You Start

Make sure you have:

- **Your company profile set up** — currency and timezone affect pricing and booking times. See [Setting Up Your Company Profile](/getting-started/setting-up-company-profile/).
- **Your room count** — how many rooms guests can book at this property.
- **Room capacity and bed setup** — maximum guests, bedrooms, beds, and bathrooms that match what one guest booking actually gets.
- **Photos** — the property exterior, shared spaces, and the rooms guests will stay in. Supported formats: JPEG, PNG, or WebP, up to 10MB per image.

---

## Set the Room Count When You Create the Listing

1. Click **Listings** in the sidebar.
2. Click **+ New Property** and select **Manual**.
3. Fill in the property details, location, photos, amenities, and cancellation policy as described in [Adding a Listing Manually](/getting-started/adding-a-listing-manually/).
4. Enter the **room count (quantity)** — the number of rooms guests can book at this property.
5. Set **Capacity** for what a single booking includes, such as the maximum guests and beds in one room.
6. Click **Save & Continue to Pricing** and set your nightly rate.

💡 **Tip:** Set capacity for one room, not for the whole building. If each room sleeps two guests, enter two as the maximum guests even when the property has five rooms.

---

## Check Availability on the Calendar

Open **Calendars → Properties** and find the property. The calendar shows how many rooms are still available on each date out of your total room count.

From the calendar you can:

- see the number of rooms still available on each night
- block a specific number of rooms for maintenance or owner use
- create direct reservations while rooms are still available
- update nightly pricing and stay rules for the property

See [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar/) for the full calendar guide.

---

## Connect Booking.com, Expedia, Agoda, or Trip.com

Once the property is saved, priced, and has the correct room count:

1. Open **Listings → Channel Managers**.
2. Click **Connect OTA** and choose the channel.
3. Approve **Channex.io** as the connectivity provider in the OTA's extranet, then enter the OTA property ID in SympleHost.
4. Map the OTA room and rate plan to this SympleHost listing and its rate plan.
5. Complete sync and check the connection status.

SympleHost then syncs availability, rates, restrictions, and reservations through Channex.io. The available room count the OTA sees follows your SympleHost calendar.

Channel-specific steps:

- [How to Connect Booking.com to SympleHost](/getting-started/connect-booking-com/)
- [How to Connect Expedia to SympleHost](/getting-started/connect-expedia/)
- [How to Connect Agoda to SympleHost](/getting-started/connect-agoda/)
- [How to Connect Trip.com to SympleHost](/getting-started/connect-trip-com/)

⚠️ **Important for Booking.com:** Booking.com requires specific bed types (for example "1 Queen bed"), not just a bed count. Fill in the bed setup on the listing before you connect.

---

## Troubleshooting

### An OTA shows the wrong number of available rooms
Check the **room count (quantity)** on the listing. This is the total inventory the channel sees. Actual availability is managed by the calendar, so rooms that are already booked or blocked are subtracted automatically.

### A date is unavailable even though some rooms are free
Check the calendar for blocks on that date, including blocks that came from a channel sync or a linked calendar. Also confirm the room count on the listing is correct.

### Booking.com sync failed with "Missing bed configuration"
Open the listing and make sure specific bed types are selected. A generic "2 beds" count isn't enough — Booking.com requires exact bed types.

### Booking.com says another provider is connected
Open the Booking.com Extranet and change the connectivity provider to **Channex.io**. If another channel manager is still connected, disconnect it in Booking.com before retrying in SympleHost.

---

## Key Takeaways

- A guesthouse or boutique hotel is **one standalone property** in SympleHost
- Set the **room count (quantity)** instead of creating a listing for every room
- The **calendar** tracks how many rooms are still available each night
- Set capacity and beds for **one room**, not the whole building
- Create, price, and set the room count first, then connect OTAs from Channel Manager

---

## Related Articles

- [Adding a Listing Manually](/getting-started/adding-a-listing-manually/)
- [How to Import or Connect Listings from an OTA](/getting-started/import-listings-from-ota/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar/)
