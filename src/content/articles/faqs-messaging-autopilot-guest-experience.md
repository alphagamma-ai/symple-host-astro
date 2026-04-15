---
title: Messaging, Autopilot & Guest Experience FAQs
description: Connecting WhatsApp, Instagram, and Facebook, using Autopilot AI responses, and configuring guest books, Amy, and recommendations.
category: faqs
tags:
  - Messaging
  - Autopilot
  - Guest Experience
  - WhatsApp
date: '2026-04-12'
draft: false
---

## Messaging & Inbox

### Where do I see my guest messages?
Click **Messages** in the sidebar. This is your unified inbox — messages from WhatsApp, Instagram, and Facebook Messenger all appear here.
→ See: *How to Use the Inbox to Communicate with Guests*

### Can I reply to WhatsApp messages from SympleHost?
Yes. Once WhatsApp is connected, you can read and reply to all WhatsApp messages directly from your SympleHost **Messages** inbox. The guest sees your reply in their WhatsApp conversation.

### Do I need separate inboxes for each messaging platform?
No. SympleHost combines all your messaging channels into one inbox. You see which platform each message came from, but you manage everything in one place.

### Can I see the full conversation history with a guest?
Yes. Click on a conversation in the **Messages** inbox to see the entire thread, including messages sent by you, your team, and Autopilot.

### How do I connect WhatsApp to SympleHost?
Go to **Settings → Integrations**, find the **WhatsApp** card, and click **Connect**. Follow the authorization steps to link your WhatsApp Business account.
→ See: *Connecting Your First Messaging Integration*

### How do I connect Instagram or Facebook Messenger?
Go to **Settings → Integrations**, find the **Facebook Integrations** card, and click **Connect**. After authorizing, toggle on **Instagram** and/or **Messenger**.

### Messages aren't showing up in my inbox. What's wrong?
Check that the integration is still connected in **Settings → Integrations**. If the status changed, try disconnecting and reconnecting. For WhatsApp, the webhook (the real-time connection) may need to be reconfigured.

---

## Autopilot (Automated Messaging)

### What is Autopilot?
Autopilot is SympleHost's AI-powered messaging system. It reads incoming guest messages, identifies the type of question, and sends an appropriate response automatically — or drafts one for you to review.
→ See: *Setting Up Autopilot — Automate Guest Messaging*

### How do I turn on Autopilot?
Go to **Settings → Autopilot** and select a mode: **Suggestion Mode** (AI drafts responses for you to review) or **On** (AI sends responses automatically).

### What's the difference between Suggestion Mode and fully automatic?
In **Suggestion Mode**, Autopilot drafts a response and shows it to you — you review, edit if needed, and send it manually. In **On** mode, Autopilot sends the response automatically after a configurable delay.

### Can I control which types of questions Autopilot answers?
Yes. Autopilot uses **message categories** (check-in info, property questions, billing, etc.). You can toggle each category on or off individually. Only enabled categories get automatic responses.

### How do I edit what Autopilot says in its responses?
Each message category has a **response template** — this is the base answer Autopilot uses. Edit the template in **Settings → Autopilot → Category Behaviors** to change what Autopilot says for that type of question.

### What happens if Autopilot can't understand a guest's message?
If Autopilot can't confidently categorize a message, it leaves it unanswered in your inbox for you to handle manually.

### Can I override Autopilot and reply manually?
Yes, always. If you reply to a conversation yourself, your manual response takes priority. Autopilot won't send a competing reply.

### What is the response delay?
When Autopilot is set to **On**, the response delay is the number of seconds it waits before sending a reply (minimum 20, default 60). This makes the response feel more natural — like a real person replying rather than an instant bot.

### I turned on Autopilot but it's not responding to any messages.
Check three things: (1) Is the mode set to **Suggestion Mode** or **On** (not Off)? (2) Are any message categories toggled on? (3) Is at least one messaging integration connected and working?

---

## Guest Experience

### What is a Guest Book?
A guest book is a digital welcome guide you create for each property. It gives guests everything they need for their stay — property details, check-in instructions, local recommendations, emergency contacts, and access to Amy (your AI assistant).

### How do I create a guest book?
Go to **Guest Experience → Guest Books** in the sidebar. Select a property and configure the sections you want to include.

### What is Amy?
Amy is SympleHost's AI guest assistant. Guests can interact with Amy through the guest book to ask questions about the property, local area, or their stay. Configure Amy in **Guest Experience → Amy Settings** or **Settings → Amy**.

### How do I add local recommendations for guests?
Go to **Guest Experience → Recommendations** to add restaurants, activities, attractions, and tips. These appear in your guest book.

### What is the Guest Store?
The guest store lets you offer extras to guests — like late checkout, welcome packs, or experience add-ons. Set up items in **Guest Experience → Store Items** and view orders in **Store Transactions**.

### How do guests access their guest book?
Guests receive a unique link (via their booking confirmation or a message you send). The link opens a mobile-friendly page with all their stay information.
