---
title: Messaging, Autopilot & Guest Experience FAQs
description: Answers about the Messages inbox, connected channels, Autopilot modes, translation, assignment, escalation, and guest-facing experience tools.
category: faqs
tags:
  - Messaging
  - Autopilot
  - Guest Experience
  - WhatsApp
date: '2026-07-14'
draft: false
---

## Messages Inbox

### Where do I see my guest messages?

Click **Messages** in the sidebar. This is the main guest inbox. It shows conversations from connected channels such as WhatsApp, Instagram, Facebook Messenger, Gmail, and supported OTA messaging channels.

→ See: *Using Messages: the unified guest inbox*

### Is Messages the same as Inbox?

Messages is the current main user-facing inbox experience. Some older links or internal components may still use the word "inbox", but hosts should use **Messages** from the sidebar.

### What can I do from a conversation?

You can read and reply, translate guest messages, auto-translate your replies, assign the conversation, escalate it, create an operational task, inspect guest details, review bookings, and open related quotations.

### Can I reply to WhatsApp messages from SympleHost?

Yes. Once WhatsApp is connected, replies sent from the WhatsApp conversation in **Messages** go back to the guest through WhatsApp.

### Can I reply to Instagram DMs from SympleHost?

Yes, after Instagram is connected and the guest has messaged your business or creator account first. Meta does not allow a business to initiate a new Instagram DM to a user who has never messaged it.

### Do I need separate inboxes for each messaging platform?

No. SympleHost combines supported channels into **Messages**. You can still see the channel for each thread, and a guest may have separate sibling conversations for different channels.

### Why does one guest have more than one thread?

The same guest can contact you through more than one channel, such as WhatsApp and email. Messages can show a channel strip so you can switch between sibling conversations without mixing channel histories.

### Can I search old email conversations?

If Gmail is enabled, search in **Messages**. When no local thread matches, SympleHost can offer a Gmail search/import option so older email history can be pulled into the inbox.

### Messages are not showing up. What should I check?

Check:

1. The channel is still connected in **Settings → Integrations**.
2. You are not filtering only to **Mine**, **Archived**, or **Escalated**.
3. For Instagram, the guest started the conversation.
4. For Meta channels, reconnect if the Facebook password, Page permissions, or token changed.

## Assignment, Escalation, and Status

### How do I focus only on conversations assigned to me?

Open the filter menu in **Messages** and switch the scope from **All** to **Mine**.

### What is escalation for?

Use escalation when a conversation needs manager review, a special decision, or urgent attention. Add a short note when escalating so the next person knows why it was flagged.

### Where do escalated conversations appear?

Use the **Escalated** filter in Messages. Escalated threads also show a banner in the conversation with who escalated it, when, and why.

### What happens when I archive a conversation?

Archived conversations leave the active list but can still be found with the **Archived** filter. If a guest follows up, the thread can return to the active workflow.

## Translation

### Can I translate a guest message?

Yes. If SympleHost detects a guest message in another language, the message bubble can show **Translate**. Click it to view the translation, then use **Show original** to switch back.

### Can SympleHost translate my reply before sending?

Yes. If the guest language differs from your interface language, the composer can show **Auto-translate**. When enabled, you write in your language and SympleHost sends the translated reply to the guest.

### Why is Auto-translate not showing?

It appears only when SympleHost can detect a guest language that differs from your current language. Very short messages may not be enough for detection.

## Autopilot

### What is Autopilot?

Autopilot is SympleHost's AI guest messaging layer. It can be off, suggest replies for review, or send replies automatically after a delay.

→ See: *Setting Up Autopilot for Guest Messaging*

### How do I turn on Autopilot?

Go to **Messages → Autopilot** and choose **Suggestion** or **On**. Save the change.

### What is the difference between Suggestion and On?

In **Suggestion** mode, AI drafts replies for a human to review. In **On** mode, AI can send replies automatically after the response delay.

### What is the response delay?

The response delay is how long SympleHost waits before sending an automatic reply when Autopilot is **On**. The minimum is 20 seconds; the default is 60 seconds.

### Can I turn Autopilot off for one guest?

Yes. Individual guest/conversation Autopilot controls can override the account default. Use this for VIPs, complaints, owner-sensitive stays, or any thread you want handled manually.

### What are message automation rules?

Message automation rules are repeatable workflows under **Messages → Message automation**. They include:

- **Time-based** rules, such as pre-arrival or checkout messages
- **Response-based** rules, where AI responds based on guest message context or guidance

### Autopilot is not responding. What should I check?

Check:

1. Account mode is **Suggestion** or **On**.
2. The guest/conversation override is not **Off**.
3. The messaging integration is connected.
4. Any relevant message automation rule is active.
5. The account has access to the feature if subscription gating applies.

## Guest Experience

### What is a guest book?

A guest book is a digital guide for a property. It can include check-in instructions, house rules, local recommendations, emergency contacts, and stay information.

### How do I create a guest book?

Open the guest book area in SympleHost, create or edit the guide, add sections, attach it to a listing, and share the generated URL with guests.

### How do guests access their guest book?

Guests receive a shareable link. If you edit the guide later, the link reflects the updated content.

### Can guest questions become tasks?

Yes. In **Messages**, use the task icon in the composer to create a task from the conversation. This is useful for maintenance requests, cleaning notes, missing items, or anything your team needs to complete.
