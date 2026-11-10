---
title: 'Scheduled Messages and Variables: Send the Right Message at the Right Time'
description: 'Set up automation templates for booking confirmations, check-in details, checkout reminders and review requests, use variables so each message fills itself in, and check every message in Outgoing before it goes out.'
category: platform-guides
section: Messaging & guest communication
sectionOrder: 3
tags:
  - Scheduled Messages
  - Automated Messages
  - Variables
  - Messaging
date: '2026-11-11'
draft: false
---

> 📘 **Step 3 of 5** in [Set Up Guest Messaging: The Complete Guide](/platform-guides/get-started-with-messages-ai-and-automation/)

**Scheduled messages go out on their own at set moments in a guest's stay, like a booking confirmation, check-in details the day before arrival, or a review request after checkout. You write each one once, and SympleHost fills in the guest's details and sends it for every booking.**

---

> **TL;DR:** Create messages in **Messages → Scheduled messages → Automation templates**. Use **Insert variables** for anything that changes per guest or property, like the guest's name or the check-in time. Check what's about to go out in **Outgoing messages**.

---

## Scheduled Messages vs Concierge

| Scheduled messages | Concierge |
| --- | --- |
| Go out at a set time, like "24 hours before check-in" | Reply when a guest asks something |
| You write the message once | Concierge writes each answer from your knowledge |
| Best for confirmations, check-in details, reminders, review requests | Best for questions you can't predict |

If you know exactly when a message should go out, use a scheduled message. If the guest is asking a question, Concierge answers it. See [Set Up Your Concierge](/platform-guides/organise-concierge-knowledge/).

---

## Where to Find It

1. Go to **Messages** in the sidebar.
2. Click the **Scheduled messages** tab at the top.
3. In the left menu you'll see:
   - **Automation templates**: the messages you set up, grouped by when they send.
   - **Outgoing messages**: every message waiting to go out, sent, or stuck.

Use the **Properties** and **Services** buttons to switch between messages for stays and messages for services you sell, like tours or transfers.

![Automation templates grouped into New Reservation, Check-in and Checkout, each with an on/off switch and the Create New button](/screenshots/scheduled-messages-and-variables/automation-templates.png)

💡 **Tip:** New here? Click **▶ Take the tour** for a 4-step walkthrough of the page.

---

## Start With the Recommended Starter Pack

If you have no automations yet, SympleHost offers a **Recommended starter pack** with four messages:

| Message | When it sends |
| --- | --- |
| **Welcome message** | When a booking is confirmed |
| **Arrival details** | 24 hours before check-in |
| **Checkout reminder** | 12 hours before checkout |
| **Review request** | 1 day after checkout |

They're added switched off, so nothing sends until you've read each one and switched it on.

---

## Create a Scheduled Message

1. In **Automation templates**, click **+ Create New**. Or click **+ Add** inside a group, for example **Check-in**, to start with that timing already chosen.
2. **When**: choose the moment it relates to, then how long before or after.
   - **New Reservation**: when a booking is confirmed. Send **Immediately**, **15 min after**, **1 hour after** or a custom time.
   - **Check-in**: the guest's arrival date, for example "24 hours before".
   - **Checkout**: the guest's departure date, for example "24 hours before" or "1 day after".
3. **Where**: choose how it's sent, for example **Email**, or **OTA** to send it through the booking site's own messages (Airbnb, Booking.com).
4. **What**: write the message. Use **Insert variables** to add details that change for each guest (see below). For emails, add a **Subject**, or leave it blank to use the automation's name.
5. **Which properties**: choose **All properties** or **Only some**.
6. Save, then switch the automation on.

### Only send in some cases

Under **Send only when**, add conditions such as:

- **Stay length (nights)**: for example, only send for stays of 2 nights or more.
- **Booking lead time (days)**: how far ahead the guest booked. This counts from when they booked, not from today.

Every condition must be true, or the message isn't sent. The template list shows the condition under the message name, for example "Only when stay length in nights ≥ 5".

### Approve messages before they send

Switch on **Review before sending** if you want to check each message first. Each one waits in **Outgoing messages → Awaiting approval** until you click **Approve**.

### AI-written messages

A message marked **AI-written** has no fixed template yet. SympleHost writes it from your instructions and your Concierge knowledge, about 24 hours before it sends. Check a few in **Outgoing messages** before relying on them.

### Example: Arrival details

```text
Hi {guest first name},

We're looking forward to welcoming you to {property name} on {check-in date}.

Check-in is from {check-in time}. The address is {property address}.
Your door code and Wi-Fi details are in your guidebook link.

If you need anything before you arrive, just reply to this message.

See you soon,
The Ocean Stays team
```

The parts in curly brackets show where variables go. Add each one with **Insert variables** rather than typing it yourself, so SympleHost recognises it.

---

## Use Variables

Variables are the details that change from guest to guest or property to property. You write `guest first name` once, and each guest sees their own name.

Find them in **Messages → Concierge → Variables**.

![The Variables page listing a custom property_address variable and built-in variables like Guest name and Check-in date marked Filled automatically](/screenshots/scheduled-messages-and-variables/variables.png)

### Built-in variables

These say **Filled automatically** and come straight from the reservation: guest name, first name and last name, guest phone, number of guests and adults, property name, check-in and check-out date and time, number of nights, total booking amount, reservation number and OTA confirmation code. You don't need to set them up.

### Create your own variable

Use your own variables for things like a property address, a parking note or a WhatsApp number for your team.

1. Click **+ New variable**.
2. In **What it's called**, give it a clear name, for example "Parking instructions".
3. Choose the type: **Text**, **Money**, **Phone** or **Link**.
4. In **Value everywhere**, enter the value most properties use.
5. If one property is different, click **+ Add exception**, pick the property, and enter its own value.

Set it once for everything, and change it only where it differs.

⚠️ **Important:** If a variable is empty for a property, messages that use it wait in **Outgoing messages** instead of sending with a blank. Fill in the value and they go out.

---

## Check Messages in Outgoing

**Outgoing messages** shows every message your automations create, so you can catch problems before guests do.

![Outgoing messages with filters and the Upcoming, Awaiting approval, Sent, Failed, Cancelled and All tabs, listing messages with their status and send time](/screenshots/scheduled-messages-and-variables/outgoing-messages.png)

Use the tabs to filter: **Upcoming**, **Awaiting approval**, **Sent**, **Failed**, **Cancelled** or **All**. You can also filter by automation, property or guest.

For each message you can:

- **Send now**: send it straight away.
- **Pause** / **Resume**: hold it, then let it continue.
- **Edit**: change the wording for this guest only.
- **Approve**: for messages that need review.
- **Cancel message**: stop it. You can restore it later from the message's page.

If messages didn't send, you'll see a banner at the top of **Messages**, such as "92 automated messages to guests weren't sent". Click **Review** to see them.

---

## Troubleshooting

### A message failed

Open it in **Outgoing messages → Failed** to see why. Common reasons:

- **This guest has no email address on file.** Add the guest's email to the reservation.
- **A detail isn't set for this property.** Click **Fill it in** and add the missing value, often a variable.
- **This booking has no guest conversation to reply on.** OTA messages need an existing conversation on the booking site.
- **Messages about a service can only be sent by email.**

### A message was cancelled

The message page says why: you cancelled it, the automation was switched off, the booking was cancelled, it didn't match the **Send only when** conditions, or another message in the same trip already covers it.

### Nothing is sending at all

Check that the automation is switched on, and that **Pause all automated guest messages** is off in **Messages → Settings → Current Autopilot**. Automated messages also stop if your subscription or trial has ended.

### The timing looks wrong

Check **before** vs **after** in the **When** step. "24 hours before check-in" and "24 hours after check-in" are very different. Also check your account's time zone.

---

**Next step:** [Step 4 — Choose your Autopilot mode](/platform-guides/autopilot-off-suggestion-on/) · [Back to the complete guide](/platform-guides/get-started-with-messages-ai-and-automation/)

---

## Related Articles

- [Set Up Your Concierge: Knowledge Base, Documents, Rules and Testing](/platform-guides/organise-concierge-knowledge/)
- [Autopilot, Automated Messages, and Concierge: What Each One Does](/platform-guides/setting-up-autopilot/)
- [Connecting Messaging Integrations](/platform-guides/connecting-messaging-integrations/)
- [Why Airbnb Shows the Listing Owner's Name on Replies Sent from SympleHost](/platform-guides/airbnb-replies-show-listing-owner-name/)
