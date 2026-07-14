---
title: 'Using Messages: the unified guest inbox'
description: 'Use the main Messages inbox to search, filter, assign, escalate, translate, and reply to guest conversations across WhatsApp, Instagram, Messenger, email, Airbnb, and Booking.com.'
category: platform-guides
section: Messaging & guest communication
sectionOrder: 1
tags:
  - Inbox
  - Messages
  - Guests
  - AI
date: '2026-07-14'
draft: false
---

**Messages is the main inbox for guest communication in SympleHost. It brings conversations from connected channels into one workspace, then gives your team the context and controls needed to reply without jumping between apps.**

---

> **TL;DR:** Open **Messages** from the sidebar. Use the left conversation list to search, filter by status, switch between **All** and **Mine**, and open guest threads. The center panel is the live conversation. The guest drawer shows profile details, pending requests, quotations, and bookings. Replies are sent back through the thread's original channel, and the composer supports translation, task creation, emoji, and attachments where the channel allows them.

---

## What Messages is for

Use **Messages** when you need to handle guest communication from one place:

- WhatsApp conversations from your connected business number
- Instagram DMs from your connected business or creator account
- Facebook Messenger conversations from your connected Page
- Email conversations when Gmail is connected
- OTA guest messages such as Airbnb and Booking.com where channel messaging is available
- Direct conversations started from a customer or reservation

Messages is not just a chat screen. It is also where you can see whether a conversation is assigned, escalated, archived, starred, handled by Autopilot, linked to a booking, or tied to a quotation.

## Open Messages

1. In the SympleHost sidebar, click **Messages**.
2. The page opens at `/messages`.
3. Select a conversation from the list, or use **New message** when you need to start a new thread.

Direct links from other parts of SympleHost can also open Messages for you:

- From a reservation, SympleHost can open the related thread with the booking panel ready.
- From a customer, SympleHost can open that customer's conversation.
- If there is no existing thread, SympleHost can take you to the new-message flow with the customer or booking preselected.

## Understand the layout

Messages has three working areas.

### Conversation list

The left panel shows conversations. Each row shows the guest, channel, recent message, unread state, assignment, and status indicators.

Use this list to:

- Search guest names or message text
- Open a conversation
- Filter to **All**, **Starred**, **Escalated**, or **Archived**
- Switch scope between **All** conversations and **Mine**
- Load older conversations by scrolling

If Gmail is enabled and your search does not find a local thread, the page can offer a Gmail search/import path so older email history can be pulled into the inbox.

### Conversation thread

The center panel is the active conversation. It shows:

- The selected guest name
- The channel the conversation is using
- Assignment and escalation controls
- Channel tabs for other conversations with the same guest
- Context ribbon for guest, booking, and quotation shortcuts
- Message history with delivery/read status where available
- Translate controls on guest messages in another language
- The reply composer

### Guest drawer

The drawer opens from the thread header or context ribbon. It has three tabs:

- **Guest**: customer profile, pending requests, and guest notes/context
- **Quotations**: quotes linked to the guest or conversation
- **Bookings**: reservation details and stay context

Use the drawer before replying when you need to check the guest's stay dates, quote status, or profile details.

## Search and filter conversations

At the top of the conversation list, use the search field to find a guest or thread.

Use the filter menu to narrow the list:

- **All**: active conversations
- **Starred**: conversations you marked for quick follow-up
- **Escalated**: conversations flagged for manager or team attention
- **Archived**: closed or archived conversations
- **Mine**: conversations assigned to you

Applied filters show as removable pills so you can quickly clear them.

## Reply to a guest

1. Open **Messages**.
2. Select a conversation.
3. Review the channel badge so you know where the reply will go.
4. Type your reply in the composer.
5. Click the purple send arrow.

Keyboard behavior is intentionally conservative: **Enter creates a new line**. Use **Cmd+Enter** or **Ctrl+Enter** to send from the keyboard.

Your reply is sent through the conversation's channel. For example, a WhatsApp thread replies through WhatsApp, and an OTA thread replies through the OTA messaging connection.

## Composer tools

The composer includes a few channel-aware tools.

### Attachments

Attachments are available only on channels that support them in SympleHost. In the current product, OTA-capable threads can show the attachment button. If the current channel does not support attachments, the button is disabled.

### Emoji

Use the smile icon to insert common emoji into your reply.

### Create a task from the conversation

Use the task icon to create an operational task without leaving the thread. This is useful when a guest reports something that needs follow-up, such as a missing towel, maintenance issue, late checkout request, or cleaning note.

The task is anchored to the conversation so the team can see why it was created.

### Auto-translate your reply

When SympleHost detects that the guest's language differs from your interface language, the composer can show **Auto-translate**.

When enabled:

1. You write the reply in your language.
2. SympleHost translates it into the guest's detected or preferred language.
3. The translated message is sent, with the original included for transparency.

If translation fails, SympleHost warns you and keeps the original message available.

## Translate guest messages

Individual guest messages can show a **Translate** action when the message language differs from your current language.

Click **Translate** to view the translated text. Use **Show original** to switch back.

## Assign conversations

Use the assignment pill in the thread header to make ownership clear.

Assignments help teams answer questions like:

- Who is responsible for this guest?
- Which conversations are mine?
- Which threads are still unassigned?

After a conversation is assigned to you, use the **Mine** scope filter to focus on your own queue.

## Escalate a conversation

Use **Escalate** when a conversation needs manager review, a special decision, or urgent attention.

When escalating, add a short note explaining why. Escalated conversations:

- Show an escalation badge
- Appear in the **Escalated** filter
- Display a banner in the thread with who escalated it, when, and why

Resolve the escalation when the issue has been handled.

## Close, archive, and reopen conversations

When a thread is finished, mark it done or archive it so it no longer clutters the active list. Archived conversations can still be found through the **Archived** filter.

If a guest replies again, the conversation can re-enter the active workflow so your team does not miss the follow-up.

## Switch channels for the same guest

If the same guest has more than one conversation, the channel strip lets you switch between sibling threads. For example, a guest might have a WhatsApp thread and an email thread.

Use the strip to keep context together without mixing channel histories into one thread.

## Start a new conversation

Use **New message** when you need to contact a customer.

The flow is:

1. Choose or create the customer.
2. Choose the target: a direct channel such as WhatsApp, Messenger, Instagram, or email, or a messageable reservation/OTA thread.
3. Compose the first message.
4. Send and continue the conversation in Messages.

SympleHost only shows channel options that make sense for the customer and your connected integrations. For example, WhatsApp needs a phone number and an active WhatsApp integration.

## Autopilot inside Messages

Messages works with Autopilot in three practical ways:

- Conversation rows and headers can show whether Autopilot is active for that guest.
- Account-level Autopilot controls whether AI is off, suggesting replies, or auto-replying.
- Conversation/customer-level controls can override the account default for a specific guest.

If Autopilot is set to suggestion mode, AI drafts appear for review. If it is fully on, replies can be sent automatically after the configured delay.

## Troubleshooting

### New messages are not appearing

Check **Settings → Integrations** and confirm the channel still shows as connected. For Meta channels, reconnect if the token expired or permissions changed.

### I cannot start an Instagram conversation

Instagram does not allow businesses to initiate a DM to a user who has never messaged them. The guest must message your Instagram account first.

### Attachments are disabled

The current channel may not support attachments in SympleHost. Attachments are channel-specific.

### Auto-translate is not visible

Auto-translate appears only when SympleHost can detect a guest language that differs from your current language. Very short messages may not provide enough text for detection.

### I cannot find an older email conversation

If Gmail is connected, search in Messages. When no local thread matches, use the Gmail search/import option to bring relevant email history into the inbox.

---

## Related articles

- Connecting WhatsApp, Instagram & Facebook Messenger
- Setting Up Autopilot — Automate Guest Messaging
- Creating and Managing Quotations
- Add Team Members and Roles
