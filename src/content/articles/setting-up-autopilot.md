---
title: 'Autopilot, Automated Messages, and Concierge: What Each One Does'
description: 'Understand the difference between Autopilot settings, automated scheduled messages, and Concierge before turning on AI guest messaging.'
category: platform-guides
section: Messaging & guest communication
sectionOrder: 3
tags:
  - Autopilot
  - AI
  - Messaging
  - Automation
  - Concierge
date: '2026-08-10'
draft: false
---

**SympleHost has three different messaging tools that work together: Autopilot, Automated Messages, and Concierge. They are related, but they do different jobs.**

---

> **TL;DR:** **Autopilot** is the account-level control for whether AI is off, suggesting replies, or allowed to auto-reply. **Automated Messages** are planned messages that go out when a reservation or service reaches a specific trigger. **Concierge** is the AI guest assistant that answers real guest questions using your property data, past chats, notes, uploaded documents, brand voice, and rules.

## The Simple Difference

| Tool | Best way to think about it | Use it for |
| --- | --- | --- |
| **Autopilot** | The switch that controls AI participation | Choosing Off, Suggestion, or On and setting the response delay |
| **Automated Messages** | Scheduled SOP messages | Booking confirmations, check-in instructions, checkout reminders, review requests |
| **Concierge** | The always-learning guest assistant | Answering guest questions, using property context, handling common requests, surfacing upsells |

Use **Automated Messages** for communication you already know should happen. Use **Concierge** for guest questions you cannot fully predict.

## What Autopilot Controls

Autopilot controls the default behavior for AI replies in **Messages**.

Open **Messages → Autopilot** to choose one of three modes:

| Mode | What happens |
| --- | --- |
| **Off** | AI does not reply. Your team handles messages manually. |
| **Suggestion** | AI drafts replies for your team to review and send. |
| **On** | AI can send replies automatically after the response delay. |

If you choose **On**, set the response delay. The platform enforces a minimum delay of **20 seconds**. A delay gives your team time to jump in manually and keeps replies from feeling unnaturally instant.

## When to Use Automated Messages

Automated Messages are structured, repeatable workflows. They are closest to the scheduled messages many hosts already set up in OTAs or in internal SOPs.

Use them when the message is mostly static and the timing is predictable:

- A booking confirmation after a new reservation
- Check-in instructions 24 hours before arrival
- A welcome message after check-in
- A checkout reminder before departure
- A review request after checkout
- Service booking confirmation or service reminders

Automated Messages are configured in **Messages → Message Automation**. The **Scheduled Messages** tab is where you can review generated upcoming messages, pause or resume them, cancel them, send now, regenerate content, or check message status.

For the full setup guide, see [Set Up Automated Messages](/platform-guides/set-up-automated-messages/).

## When to Use Concierge

Concierge is for live guest questions and situations where the guest may ask the same thing in different ways.

It can answer questions while your team is asleep because it uses context from:

- Property and listing details
- Guest and reservation context
- Past guest conversations
- Uploaded documents
- Notes you add directly
- Property-level and account-level rules
- Brand voice and behavioral settings
- Upsell configuration, when enabled

Concierge gets better when you teach it. Add property notes, upload documents, import past messages, review unanswered questions, and test replies before letting it answer guests automatically.

For the full setup guide, see [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/).

## How They Work Together

Here is the recommended mental model:

1. **Messages** is where conversations arrive.
2. **Autopilot** decides whether AI can suggest or send replies.
3. **Automated Messages** send planned communication at the right time.
4. **Concierge** answers guest questions using your knowledge base and rules.
5. Your team can still assign, escalate, or reply manually from any conversation.

The strongest setup usually combines all three: automated messages for predictable guest touchpoints, Concierge for live questions, and human escalation for sensitive or unusual cases.

## Recommended Rollout

1. Connect your messaging channels first.
2. Turn **Autopilot** to **Suggestion** so your team can review AI replies.
3. Add core **Automated Messages** for check-in, checkout, and review requests.
4. Teach **Concierge** with property facts, notes, documents, and rules.
5. Test Concierge replies from the practice area.
6. Turn **Autopilot** to **On** only once your content and rules are clean.

## Common Mistakes to Avoid

- Do not use Automated Messages for questions that need live context or judgment.
- Do not turn Concierge live before adding accurate check-in, house rules, contact, and emergency information.
- Do not assume Gmail is part of automation yet. Gmail can be filtered and replied to from Messages, but Gmail automation is not supported yet.
- Do not leave sensitive topics fully automated. Use escalation rules and manual handling for complaints, refunds, safety issues, owner-sensitive stays, and VIP guests.

---

## Related Articles

- [Using Messages: the unified guest inbox](/platform-guides/inbox-communicate-with-guests/)
- [Connecting Messaging Integrations](/platform-guides/connecting-messaging-integrations/)
- [Set Up Automated Messages](/platform-guides/set-up-automated-messages/)
- [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/)
