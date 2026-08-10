---
title: Set Up Automated Messages
description: Create scheduled guest messages from your operating SOPs so confirmations, check-in instructions, checkout reminders, and review requests go out at the right time.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 4
tags:
  - Automated Messages
  - Message Automation
  - Scheduled Messages
  - Messaging
  - SOP
date: '2026-08-10'
draft: false
---

**Automated Messages are planned messages that SympleHost sends when a reservation or service reaches a trigger. Use them for repeatable guest communication you already know should happen.**

---

> **TL;DR:** Go to **Messages → Message Automation** to create or edit automated message rules. Use **time-based** rules for scheduled guest touchpoints, such as booking confirmation, check-in instructions, checkout reminders, and review requests. Use **Scheduled Messages** to review the actual messages queued from those rules before or after they send.

## Automated Messages vs Concierge

Automated Messages are not the same as Concierge.

| Automated Messages | Concierge |
| --- | --- |
| Planned and rule-based | Conversational and question-based |
| Best for predictable guest touchpoints | Best for live guest questions |
| Based on triggers such as reservation created, check-in, or checkout | Based on guest message content and available knowledge |
| Usually more static | Learns from property data, notes, documents, rules, and past chats |
| Similar to scheduled messages in an OTA or an SOP checklist | Similar to an AI guest assistant that can answer while your team is offline |

If you know exactly when a message should go out, use Automated Messages. If the guest is asking a question and the answer depends on context, use Concierge.

## Where to Find Automated Messages

1. Open **Messages** from the sidebar.
2. Click **Message Automation** in the top messaging tabs.
3. Review existing rules or create a new one.
4. Use **Scheduled Messages** to review messages that have been generated from active rules.

The messaging tab bar separates these areas:

- **Autopilot**: account-level AI mode and response delay
- **Concierge**: AI knowledge, rules, training, and live behavior
- **Message Automation**: rules and SOP templates
- **Scheduled Messages**: upcoming or generated message instances

## Start With the Starter Pack

If this is your first time using Message Automation, SympleHost can help you create a starter pack. The starter pack is designed to be reviewed before you turn anything on.

Common starter automations include:

- **Welcome / booking confirmation** after a new reservation
- **Arrival instructions** before check-in
- **Checkout reminder** before departure
- **Review request** after checkout

These should be treated as drafts first. Review the timing, channels, property scope, and message content before activating them.

## Create a Time-Based Rule

Use a time-based rule when the message should be sent before or after a reservation or service event.

1. Go to **Messages → Message Automation**.
2. Click **Create new** or choose a starter automation.
3. Choose **Time-based**.
4. Name the rule clearly, such as `Check-in instructions` or `Checkout reminder`.
5. Choose the trigger event.
6. Set the timing.
7. Choose the channel.
8. Choose whether it applies to all listings or selected listings.
9. Add the message content or template instructions.
10. Save the rule, then activate it when you are ready.

For property reservations, the main triggers are:

| Trigger | Example use |
| --- | --- |
| **New reservation** | Booking confirmation or next steps |
| **Check-in** | Arrival instructions, welcome message, mid-stay check-in |
| **Checkout** | Checkout reminder or review request |

For services, automated messages can also use service booking triggers such as service booking confirmed, service start, or service end.

## Choose the Channel

Current supported automation channels are:

- **Email**
- **OTA**
- **Same channel** for response-based rules

WhatsApp, Instagram, and Messenger are not currently used for automated template sends until approved template support is in place. Gmail is available in the inbox for filtering and replies, but Gmail automation is not supported yet.

## Choose the Audience

For reservation automations, select whether the rule applies to:

- **All listings**
- **Selected listings only**

For new reservation automations, choose the reservation source scope:

- **Both** direct and OTA reservations
- **OTA only**
- **Direct only**

Use selected listings when different properties have different check-in steps, access instructions, house rules, or local contacts.

## Write the Message Like an SOP

Automated Messages work best when the content is clear, specific, and safe to send without a human rewriting it every time.

Good examples:

- "Send the guest the check-in time, smart lock instructions, parking note, Wi-Fi details, and emergency contact."
- "Remind the guest that checkout is at 10am, ask them to switch off air conditioning, and tell them where to leave the keys."
- "Thank the guest for staying and politely ask for a review after checkout."

Avoid vague instructions such as "send something nice" or "tell them everything they need." The rule should read like an operating SOP.

## Use Scheduled Messages to Review Sends

The **Scheduled Messages** tab shows messages generated by your active automations.

Use it to:

- Check what is scheduled to send
- Pause or resume a message
- Cancel a message
- Send a message now
- Regenerate content when details have changed
- Add or remove attachments when supported
- Review whether a compiled template is active

This is the best place to QA your automations after you activate them.

## Recommended Setup Order

1. Create the check-in instruction rule first.
2. Create the checkout reminder second.
3. Add a booking confirmation if your OTA or direct booking flow does not already send one.
4. Add a review request after checkout.
5. Turn rules on one at a time.
6. Check **Scheduled Messages** after each activation.
7. Keep Concierge separate for live questions and edge cases.

## Troubleshooting

### My automated message did not send

Check that the rule is active, the reservation matches the trigger and listing scope, the selected channel is supported, and the message appears in **Scheduled Messages**.

### The timing looks wrong

Check the trigger, timing value, timing unit, and direction. For example, "24 hours before check-in" is different from "24 hours after check-in." Also confirm your workspace timezone in settings.

### I need the AI to answer guest questions

Use Concierge instead. Automated Messages are for planned sends. Concierge is for guest questions and contextual replies.

### I want to approve AI replies first

Set **Messages → Autopilot** to **Suggestion**. That keeps AI drafting available without allowing automatic replies.

---

## Related Articles

- [Autopilot, Automated Messages, and Concierge: What Each One Does](/platform-guides/setting-up-autopilot/)
- [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/)
- [Using Messages: the unified guest inbox](/platform-guides/inbox-communicate-with-guests/)
- [Connecting Messaging Integrations](/platform-guides/connecting-messaging-integrations/)
