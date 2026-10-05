---
title: Listings, Pricing & Number of Units FAQs
description: How to add, edit, and price your listings — plus how to set Number of units for a guesthouse or boutique hotel.
category: platform-guides
section: FAQs
tags:
  - Listings
  - Pricing
  - Number of units
  - Properties
date: '2026-04-14'
draft: false
---

## Listings & Properties

### How do I add a new listing?
Go to **Listings** and click **+ New Property**. If you already have Airbnb, use **Import** to pull in that listing first. Choose **Manual** only if you are starting from scratch or running a fully direct-booking business. Booking.com and other OTAs connect through Channel Manager after the property exists.
→ See: *Adding a Listing Manually*

### I have a guesthouse or boutique hotel with several rooms. Should I create separate listings for each room?
No. Create the property once as a **Standalone** listing and set **Number of units** — identical rooms sold under that listing. The calendar handles that inventory, so each booking uses one unit and the date stays bookable until every unit is taken.
→ See: *Setting Up a Guesthouse or Boutique Hotel with Several Rooms*

### Can I import my listings from Airbnb?
Yes. Go to **Listings → + New Property → Import**, select Airbnb, and authorize the connection. You'll be able to choose which listings to import. Your listing details, photos, and settings will transfer over.
→ See: *How to Import Listings from an OTA*

### Can I import my listings from Booking.com?
Booking.com is connected through **Channel Manager**, not the Airbnb import flow. First make sure the property exists in SympleHost. Then open **Channel Manager**, choose **Booking.com**, approve **Channex.io** as the connectivity provider in the Booking.com Extranet, enter the Hotel ID, and map Booking.com rooms to the correct SympleHost listing.

### How do I edit a listing after creating it?
Go to **Listings**, click on the listing you want to change, then click **Edit**. You can update the name, description, photos, amenities, house rules, and other details.

### How do I delete a listing?
Open the listing and look for the delete option. If the listing has active bookings, you'll need to cancel or complete those bookings before you can delete it.

### How do I deactivate a listing without deleting it?
Open the listing and toggle the **Active** switch off. This hides the listing from booking channels without removing it from your account. You can reactivate it at any time.

### How do I add or change photos on my listing?
Open the listing, go to the images section, and drag-and-drop new photos or click to browse. The first photo is your **Primary** image (the main thumbnail). You can remove or reorder photos as needed. Supported formats: JPEG, PNG, WebP. Max 10MB per image.

### How do I set check-in and check-out times?
These can be set at the property level when creating or editing a listing. The default is check-in at 3:00 PM and check-out at 11:00 AM.

### What amenities can I add to my listing?
SympleHost provides a categorized list of amenities (Wi-Fi, parking, pool, kitchen, air conditioning, etc.). Select the ones that apply when creating or editing a listing.

### How do I add house rules to my listing?
When creating or editing a listing, scroll to the **House Rules** section. Toggle on/off standard rules (Smoking, Pets, Parties, Children), and add any custom rules in the **Additional Rules** text area.

---

## Pricing

### How do I set my nightly rate?
Go to **Listings → [Your Listing] → Price Settings** and set the **Base Nightly Rate**. This is the default rate used when no seasonal or custom pricing applies.
→ See: *How to Set Up Your Pricing & Rate Rules*

### Can I set different prices for weekdays and weekends?
Yes. In your listing's **Price Settings**, you can configure separate weekday and weekend rates.

### How do I set seasonal pricing (e.g., higher rates in summer)?
Create a **Rate Plan** with specific date ranges. Go to your listing's **Price Settings**, click **+ Add Rate Plan**, name it (e.g. "Summer"), set the date range and price. The seasonal rate will override the base rate during those dates.

### Can I charge extra for additional guests?
Yes. In your listing's pricing settings, you can configure guest-count pricing — set a base price "up to X guests" and an extra charge per additional guest.

### What happens if two rate plans overlap the same dates?
SympleHost prevents overlapping date ranges automatically. If you try to create a rate plan that conflicts with an existing one, you'll see an error. Adjust the dates to avoid the overlap.

---

## Guesthouses & Boutique Hotels

### How do I add more rooms to an existing guesthouse or boutique hotel listing?
Open the listing, click **Edit**, and increase **Number of units**. The calendar immediately uses the new total when it works out how many units are available each night.
→ See: *Setting Up a Guesthouse or Boutique Hotel with Several Rooms*

### How do I take one room out of rotation for maintenance?
Open **Calendars → Properties**, select the dates, and use **Block day** to block one room. The other rooms stay bookable.

### How does Booking.com sync work for a property with several rooms?
Map the Booking.com room and rate plan to your SympleHost listing during the Booking.com connection flow. **Number of units** on the listing is the inventory Booking.com sees, and the calendar adjusts the available count as rooms are booked or blocked. Availability, rates, and bookings sync through Channex.io after setup.

### My Booking.com sync failed. What should I check?
The most common cause is missing **bed configuration**. Open the listing and make sure specific bed types are selected (e.g. "1 Queen bed") — a generic bed count isn't enough for Booking.com.
