---
title: Setting Up Autopilot — Automate Guest Messaging
description: Configure SympleHost's AI-powered Autopilot to handle common guest questions automatically, so you're not glued to your phone 24/7.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 3
tags:
  - Autopilot
  - AI
  - Messaging
  - Automation
date: '2026-04-13'
draft: false
---

## What Is Autopilot?

Autopilot is SympleHost's automated messaging system. When a guest sends you a message — say, asking about check-in time or Wi-Fi details — Autopilot uses AI to recognize the type of question and send an appropriate response on your behalf.

Think of it like hiring a virtual front desk agent. You write the answers once, and Autopilot delivers them whenever a guest asks — day or night, even while you're asleep.

---

## When to Use Autopilot

Autopilot is ideal when:

- You receive the same guest questions over and over (check-in instructions, parking, house rules)
- You want to respond to guests instantly, even outside business hours
- You manage multiple listings and can't reply to every message manually
- You want AI to draft responses for your review before sending

---

## Before You Start

Make sure you've completed these steps first:

- **Connected at least one messaging integration** (WhatsApp, Instagram, or Facebook) — Autopilot needs a message channel to work with. See: *Connecting WhatsApp, Instagram & Facebook Messenger*
- **Added at least one listing** — Autopilot uses listing details to provide accurate responses

---

## How to Turn On Autopilot

### Step 1: Choose Your Autopilot Mode

1. Go to **Settings** in the sidebar.
2. Click **Autopilot**.
3. You'll see three mode options:

| Mode | What It Does |
|------|-------------|
| **Off** | Autopilot is disabled. All messages require manual responses. |
| **Suggestion Mode** | AI drafts a suggested response for each guest message, but waits for you to review and send it. Great for getting comfortable with Autopilot before going fully automatic. |
| **On** | AI automatically sends responses to guests without waiting for your approval. The fastest option for experienced hosts. |

4. Select your preferred mode.

[Screenshot: The Autopilot settings page showing the three mode options — Off, Suggestion Mode, and On]

💡 **Tip:** If you're new to Autopilot, start with **Suggestion Mode**. This lets you see what AI would send before it goes out, so you can build confidence in the responses. Switch to **On** once you're happy with the quality.

---

### Step 2: Set Your Response Delay (Full Autopilot Only)

If you chose **On** (fully automatic), you can set a delay before Autopilot sends each response. This makes the reply feel more natural — like a real person typing — rather than an instant robotic response.

1. In the Autopilot settings, find the **Response Delay** field (it appears when you select **On**).
2. Enter the number of seconds to wait before sending (minimum 20 seconds, default is 60).
3. Click **Save Changes**.

⚠️ **Important:** Even with Autopilot on, you can always jump into a conversation and reply manually. Your manual response takes priority over any pending Autopilot reply.

---

### Step 3: Configure Message Categories

Message categories are the types of guest questions Autopilot can handle. Each category has a response template that Autopilot uses to craft its replies.

SympleHost comes with pre-built categories for the most common guest inquiries:

- **General courtesy** — Greetings and general conversation
- **Property questions** — Details about the listing (amenities, layout, etc.)
- **Booking inquiries** — Availability, pricing, and booking process
- **Check-in / check-out procedures** — Arrival instructions, key handover, departure rules
- **Booking changes & cancellations** — Modification and cancellation requests
- **Local recommendations** — Restaurant, activity, and transport suggestions
- **Maintenance requests** — Reporting issues during a stay
- **Billing questions** — Payment, deposits, and refund inquiries
- **Guest support** — General help during the stay

For each category:

1. On the Autopilot settings page, scroll to the **Category Behaviors** section.
2. You'll see a list of categories with toggles showing which are **active** and which are **disabled**.
3. Click a category to view or edit its **response template** — this is the base answer Autopilot uses when a guest asks a question in that category.
4. Toggle a category **on** to let Autopilot handle it, or **off** to require manual responses for that type of question.

[Screenshot: The Category Behaviors section showing a list of categories with on/off toggles and the counter showing "X/Y categories active"]

💡 **Tip:** Start by enabling just 2–3 categories you're most confident about — like **Check-in / check-out** and **Property questions** — and expand from there as you see how Autopilot performs.

---

## How Autopilot Works in Practice

Here's what happens when a guest sends a message with Autopilot active:

1. The guest's message arrives in your **Messages** inbox.
2. Autopilot analyzes the message and matches it to a **message category**.
3. Using the category's response template and your listing details, Autopilot crafts a personalized reply.
4. **If Suggestion Mode:** The draft appears in the conversation for you to review, edit, and send.
5. **If On:** The reply is sent automatically after the response delay.

If Autopilot can't confidently categorize a message, it leaves it for you to handle manually. You'll see it as an unanswered message in your inbox.

---

## Troubleshooting

### Autopilot isn't responding to messages
Check three things: (1) Is Autopilot set to **Suggestion Mode** or **On** (not **Off**)? (2) Is the relevant message category toggled **on**? (3) Is a messaging integration connected and working? Go to **Settings → Integrations** to verify.

### Responses don't match what I want Autopilot to say
Edit the response template for the relevant category. The template is the foundation of what Autopilot sends — the more detailed and accurate your template, the better the AI's responses will be.

### Autopilot is responding to messages I want to handle personally
Toggle off the categories you want to handle manually. You can also switch to **Suggestion Mode** so you approve every response before it's sent.

### The category counter shows "0/9 categories active"
This means no categories are enabled. Autopilot won't respond to any messages until you toggle at least one category on. Also, categories can't be toggled when Autopilot mode is set to **Off**.

---

## Key Takeaways

- Start with **Suggestion Mode** to review AI responses before they're sent
- Enable categories one at a time and refine your response templates as you go
- A response delay of 60 seconds makes automatic replies feel more natural
- You can always override Autopilot by replying to a conversation manually

---

## Related Articles

- Connecting WhatsApp, Instagram & Facebook Messenger
- How to Use the Inbox to Communicate with Guests
- Welcome to SympleHost — Your First 15 Minutes
