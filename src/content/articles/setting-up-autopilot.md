---
title: Setting Up Autopilot for Guest Messaging
description: Configure account-level Autopilot, response delay, and message automation rules so AI can suggest or send guest replies from the Messages inbox.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 3
tags:
  - Autopilot
  - AI
  - Messaging
  - Automation
date: '2026-07-14'
draft: false
---

**Autopilot controls how AI participates in guest conversations. You can keep it off, ask it to draft suggestions, or allow it to auto-reply after a delay. Message automation rules add scheduled and response-based workflows on top of that.**

---

> **TL;DR:** Open **Messages → Autopilot** to choose the account mode: **Off**, **Suggestion**, or **On**. If you choose **On**, set a response delay of at least 20 seconds. Then use **Messages → Message automation** to manage time-based and response-based rules. In the Messages inbox, individual guests or conversations can inherit the account default or be adjusted separately.

---

## What Autopilot does

Autopilot is SympleHost's AI layer for guest messaging. It works with the **Messages** inbox and your connected channels.

Depending on your settings, Autopilot can:

- Draft replies for your team to review
- Send replies automatically after a configured delay
- Help with common guest questions
- Work alongside scheduled and response-based message automation rules
- Flag or leave sensitive conversations for human review

Autopilot is not a replacement for checking guest context. It works best when your listings, guest information, bookings, and operating rules are up to date.

## Open Autopilot settings

1. In the sidebar, open **Messages**.
2. Go to **Autopilot**.
3. Choose your account-level mode.
4. Set the response delay if you use full auto-reply.
5. Save your changes.

## Choose an account mode

Autopilot has three account-level modes.

| Mode | What happens |
| --- | --- |
| **Off** | AI does not respond. Your team handles all messages manually. |
| **Suggestion** | AI drafts suggested replies, but a human reviews and sends them. |
| **On** | AI can automatically reply after the configured response delay. |

If you are starting out, use **Suggestion** first. It lets you see what Autopilot would say before you trust it to respond automatically.

## Set the response delay

When Autopilot is **On**, set how long SympleHost waits before sending an automatic reply.

- Minimum: **20 seconds**
- Default: **60 seconds**

The delay gives your team a short window to jump in manually and prevents replies from feeling unnaturally instant.

## Understand account default vs guest override

The account Autopilot setting is the default. Individual guests or conversations in **Messages** can still show their own Autopilot mode:

- **Default**: use the account setting
- **Off**: handle this guest manually
- **Suggestion**: draft only for this guest
- **On**: allow auto-replies for this guest

Use guest-level overrides for VIPs, sensitive stays, complaints, owner contacts, or any conversation where you want a different level of automation.

## Use message automation rules

Autopilot settings control AI behavior. **Message automation** controls repeatable messaging workflows.

Open **Messages → Message automation** to manage two rule types:

### Time-based rules

Time-based rules are useful for scheduled guest communication, such as:

- Pre-arrival instructions
- Check-in reminders
- Mid-stay check-ins
- Checkout instructions
- Post-stay review requests

### Response-based rules

Response-based rules react to guest messages. They are useful when you want AI to respond to a category of inquiry or follow a specific guidance prompt.

The automation screen shows rules in a timeline, lets you toggle rules on/off, and separates time-based rules from response-based rules.

## How Autopilot works in Messages

When a guest message arrives:

1. The message appears in **Messages**.
2. SympleHost checks the account and guest Autopilot mode.
3. If Autopilot is off, the message waits for a human reply.
4. If Autopilot is in suggestion mode, a draft can appear for review.
5. If Autopilot is on, SympleHost can send the AI reply after the delay.
6. If the conversation needs attention, your team can assign or escalate it.

Manual replies always matter. If a team member responds, they can take over the conversation.

## Recommended rollout

1. Start with **Off** while you connect channels and clean up listing details.
2. Move to **Suggestion** for common questions.
3. Review suggested replies for a few days.
4. Create or adjust message automation rules.
5. Turn **On** only for flows you trust.
6. Keep sensitive guests or escalated conversations on manual handling.

## Troubleshooting

### Autopilot is not replying

Check:

- Account mode is **Suggestion** or **On**
- The guest/conversation override is not set to **Off**
- The channel integration is connected
- The relevant message automation rule is active if you expect a rule-driven reply
- The account has access to the feature if subscription gating applies

### Autopilot replied too quickly or too slowly

Adjust the **Response delay** in **Messages → Autopilot**. Use at least 20 seconds.

### I want to approve every reply first

Use **Suggestion** mode instead of **On**.

### I want one guest handled manually

Open the guest's conversation in **Messages** and set their Autopilot mode to **Off** instead of using the account default.

### I need scheduled messages, not AI replies

Use **Messages → Message automation** and create a time-based rule.

---

## Related articles

- Using Messages: the unified guest inbox
- Connecting WhatsApp, Instagram & Facebook Messenger
- Create and Assign Tasks
