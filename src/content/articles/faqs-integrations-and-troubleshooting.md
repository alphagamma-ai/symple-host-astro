---
title: Integrations, Channels, Reviews & Troubleshooting FAQs
description: Connecting Airbnb and Booking.com, managing reviews, and common troubleshooting — empty dashboards, missing menu items, sync issues, and more.
category: faqs
tags:
  - Integrations
  - Channels
  - OTA
  - Reviews
  - Troubleshooting
date: '2026-04-10'
draft: false
---

## Integrations & Channels

### Which OTA platforms does SympleHost connect to?
SympleHost connects to major OTAs including **Airbnb** and **Booking.com**. Check **Settings → Integrations → OTA** for the full list of available connections.

### How do I connect my Airbnb account?
Go to **Settings → Integrations → OTA**, select Airbnb, and authorize the connection. Once linked, your Airbnb bookings will sync into SympleHost automatically.

### How do I connect my Booking.com account?
Go to **Settings → Integrations → OTA**, select Booking.com, and follow the authorization steps. For multi-unit properties, make sure your listing is set up as multi-unit in SympleHost first.

### Will bookings from Airbnb and Booking.com show up automatically?
Yes. Once an OTA is connected, new bookings sync into SympleHost automatically. They'll appear in your **Reservations** and on your calendar.

### Can SympleHost prevent double bookings across platforms?
Yes. When your calendar is synced across connected OTAs, SympleHost updates availability in real time. If a guest books on Airbnb, those dates are blocked on Booking.com and vice versa.

### How do I disconnect an integration?
Go to **Settings → Integrations**, find the platform card, and click **Disconnect**. For OTA channels (Airbnb, Booking.com), see the dedicated disconnect FAQs below — there's an OTA-side step that catches a lot of hosts out.

### How do I disconnect Airbnb?
Airbnb connects directly to SympleHost via OAuth, so disconnecting is a two-side process:

1. **In SympleHost:** Go to **Settings → Integrations → OTA**, find the **Airbnb** card, and click **Disconnect**.
2. **In Airbnb (recommended):** Log in to Airbnb, click your profile picture (top right), go to **Account → Privacy and Sharing**, scroll to **Connected Apps**, find **SympleHost**, and click **Remove access**. This revokes the access token at Airbnb's end.

If you skip step 2, the token stays issued at Airbnb until it naturally expires — harmless, but tidier to revoke it.

### How do I disconnect Booking.com? (Important: two places to remove it)
Booking.com syncs through **Channex** (our connectivity partner). That means there are two places where the connection lives, and **you must remove it from both**, otherwise Booking.com will keep treating Channex as your active channel manager and your rates/availability will get stuck:

1. **In SympleHost:** Go to **Settings → Integrations → OTA**, find the **Booking.com** card, and click **Disconnect**. This stops SympleHost ↔ Channex sync.

2. **In the Booking.com Extranet (do not skip this):**
   - Log in at [admin.booking.com](https://admin.booking.com).
   - Click the **Account** icon (top right).
   - Select **Connectivity Provider** (sometimes shown as **Connectivity Providers**) from the menu.
   - Find **Channex** in the list and click **Disconnect**.
   - Confirm the disconnection. Note: this is per-listing on Booking.com, so if you have multiple properties, you'll need to repeat this for each.

[Screenshot: Booking.com Extranet — Account menu → Connectivity Provider with Channex listed and "Disconnect" button visible]

⚠️ **Until you complete step 2**, Booking.com keeps allowing Channex to control your rates and availability — meaning rates may not update, and you may not be able to manually edit them in the extranet either. This is a Booking.com behaviour, not a SympleHost one.

After both steps are complete, all your previous Booking.com settings (rates, availability, restrictions) reset to manual control, and you can either run them by hand from the extranet or connect a different channel manager.

### Will my existing Booking.com reservations disappear if I disconnect?
No. Past and confirmed reservations stay in Booking.com and in your SympleHost reservation history. Only *new* bookings stop syncing into SympleHost after you disconnect.

---

## Messaging Integrations (WhatsApp, Instagram, Messenger)

For the full step-by-step walkthrough of connecting WhatsApp, Instagram, or Facebook Messenger — including every Meta popup screen — see **Connecting WhatsApp, Instagram & Facebook Messenger**. The most-asked questions:

### Do I need a WhatsApp Business account to connect WhatsApp?
You need a phone number that is **not** currently registered with WhatsApp consumer or WhatsApp Business mobile app. The Embedded Signup flow creates a new WhatsApp Business Platform account on Meta's side using that number. If the number is already in use in either app, delete it from there first (**WhatsApp → Settings → Account → Delete my account**) and retry.

### My Instagram account doesn't show up when I try to connect.
Instagram only works for **Business** or **Creator** accounts that are linked to a Facebook Page. Convert it in the Instagram app: **Settings → Account type and tools → Switch to Professional → Business**, then link it to your Facebook Page from **Settings → Accounts Center**.

### I changed my Facebook password and now Messenger / Instagram stopped working.
Meta invalidates integration tokens when you change your password. Go to **Settings → Integrations**, find the Facebook Integrations card, and click **Reconnect** — you'll only have to re-authorize, not redo the whole setup.

### Why can't I send the first Instagram message to a guest?
Instagram's API does not allow you to start a conversation with a user — they must DM you first. Once they do, you have a 24-hour window to reply through SympleHost. After 24 hours of silence the conversation closes again until they message you next.

---

## Reviews

### Where do I see my guest reviews?
Go to **Reviews** in the sidebar to see reviews from connected OTA channels. You can view individual reviews and respond from within SympleHost.

### Can I respond to reviews from SympleHost?
Yes. Open a review and write your response directly — it'll be posted back to the OTA platform where the review was left.

---

## Troubleshooting

### The dashboard shows all zeros.
This is normal for new accounts. Data appears once you've added listings and created bookings.

### I can't see a menu item that should be there.
Your visibility depends on your **role and permissions**. If you're not an Account Admin, some sections may be hidden. Ask your account admin to adjust your permissions in **Settings → Team → Members**.

### Something isn't working and I need help.
Contact SympleHost support. To help the team diagnose faster, go to **Settings → General** and enable **Support Access** — this lets the team view your account to troubleshoot.

### My bookings from [OTA] aren't syncing.
Check that the integration is still connected in **Settings → Integrations → OTA**. If it shows as disconnected, try reconnecting. If it's connected but bookings aren't appearing, there may be a mapping issue — verify your listing/room type mappings.

### I'm seeing an error I don't understand.
Take a screenshot of the error and contact support. Most errors include a message that helps the team identify the issue quickly.
