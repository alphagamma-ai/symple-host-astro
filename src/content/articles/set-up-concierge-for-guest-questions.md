---
title: Set Up Concierge for Guest Questions
description: Teach Concierge your property knowledge, rules, brand voice, and escalation preferences so it can answer guest questions with the right context.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 5
tags:
  - Concierge
  - AI
  - Guest Messaging
  - Knowledge Base
  - Upsells
date: '2026-08-10'
draft: false
---

**Concierge is the AI guest assistant inside SympleHost. It helps answer guest questions using your property knowledge, rules, past chats, documents, notes, reservation context, and brand voice.**

---

> **TL;DR:** Use **Messages → Concierge** to teach the AI what it should know, how it should answer, when it should escalate, and what it can offer guests. Concierge is different from Automated Messages: it answers live guest questions, while Automated Messages send planned messages at scheduled moments.

## What Concierge Is For

Concierge is for the questions guests ask when your team is busy, offline, or asleep:

- "What is the Wi-Fi password?"
- "Can we check in early?"
- "Where do we park?"
- "How do we use the coffee machine?"
- "Can you arrange airport transfer?"
- "The air conditioning is not working. What should I do?"

Concierge can answer these questions because it has access to your SympleHost context and the knowledge you teach it.

## Concierge vs Automated Messages

| Concierge | Automated Messages |
| --- | --- |
| Answers guest questions as they come in | Sends planned messages on a schedule |
| Uses property data, reservation data, notes, documents, past chats, rules, and brand voice | Uses a trigger, timing, audience, channel, and template |
| Gets better as you teach it | Stays mostly static until you edit the rule |
| Best for guest support, FAQs, issue triage, and upsell suggestions | Best for confirmations, check-in instructions, checkout reminders, and review requests |

Use Concierge when you need an answer that adapts to the guest's question. Use Automated Messages when the message should go out at a predictable point in the stay.

## Where to Find Concierge

1. Open **Messages** from the sidebar.
2. Click **Concierge** in the top messaging tabs.
3. Open **Properties** to manage knowledge for General, each property, or supported services.
4. Open **Settings** to manage go-live, brand voice, and behavior.
5. Use **Test** or the practice area before allowing live replies.

The Concierge tab may only appear on accounts where Concierge is enabled.

## What Concierge Can Learn From

Concierge works best when you teach it in layers.

| Knowledge source | What to add |
| --- | --- |
| **Property facts** | Address, access details, check-in method, Wi-Fi, parking, amenities, house rules |
| **Notes** | Short corrections or operating details your team already knows |
| **Documents** | House manuals, welcome books, PDF guides, service menus, policies |
| **Past messages** | Real examples of how guests ask questions and how your team replies |
| **Review insights** | Guest feedback that reveals missing or unclear property information |
| **Rules** | What Concierge should always do, never do, or escalate |
| **Brand voice** | How the assistant should sound across replies |
| **Upsells** | Paid extras Concierge can mention or offer when appropriate |

Start with property facts and house rules first. Then add documents and notes for anything guests frequently ask about.

## Teach Concierge at the Right Scope

Concierge has different scopes so the right answer can be used in the right place.

| Scope | Use it for |
| --- | --- |
| **General / account-wide** | Rules and facts that apply to every property |
| **Property-level** | Access, amenities, parking, Wi-Fi, house rules, local instructions, and property-specific policies |
| **Service-level** | Service details, inclusions, timing, meeting points, and guest instructions |

Use account-wide knowledge for universal policies. Use property-level knowledge for anything that changes from one listing to another.

## Add Notes and Documents

Inside a Concierge property or General page:

1. Open the **Knowledge** zone.
2. Add a quick note for short instructions.
3. Upload documents for longer manuals or guides.
4. Wait for sources to finish processing.
5. Keep only active, accurate sources enabled.

Good notes are specific:

- "For Ocean Villa, the Wi-Fi network is OceanGuest and the password is sent in the check-in message."
- "Guests can request early check-in, but only confirm it after checking the calendar and housekeeping status."
- "If a guest reports no hot water, ask them to check the switch in the hallway first, then escalate to maintenance."

## Add Rules

Rules tell Concierge how to behave in sensitive or policy-heavy situations.

Use rules for:

- Refunds and cancellation questions
- Damage, safety, or maintenance issues
- Early check-in and late checkout
- Noise complaints
- Owner or VIP guests
- Anything that should always be escalated

Examples:

- "Never promise a refund. Escalate refund requests to the host."
- "If the guest reports a safety issue, apologize, ask for their current location, and escalate immediately."
- "For early check-in, say it may be possible but must be confirmed by the team."

## Configure Brand Voice

Open **Concierge → Settings** and use **Brand Voice** to control how Concierge sounds.

You can generate a brand voice from URLs or write one from scratch. Review and confirm the draft before making it active. Keep it practical: tone, greeting style, level of warmth, language preferences, and any phrases your team uses or avoids.

## Configure Behavior

The behavior settings control how Concierge handles live conversations.

Settings include:

- Escalation threshold
- Topics that should be escalated
- Whether early check-in can be offered
- Whether late checkout can be offered
- AI transparency behavior
- Conversation closing
- The fallback message Concierge uses when it should defer

Use the defer message for cases where Concierge should not answer directly. For example: "I am checking this with the team and will get back to you shortly."

## Test Before Going Live

Before turning Concierge live:

1. Add at least one ready knowledge source.
2. Add important rules.
3. Run practice questions for each property.
4. Check whether answers cite the right information.
5. Fix any weak answers by adding notes, documents, or rules.
6. Review the account Autopilot mode.

The go-live area links back to **Messages → Autopilot** because Autopilot controls whether AI is allowed to suggest or send replies.

## Use Concierge for Upsells

Concierge can support upsells when you configure the offer clearly.

Examples:

- Early check-in
- Late checkout
- Airport transfer
- Extra cleaning
- Local experiences
- Food, drinks, or welcome packs

For each upsell, make sure the price, availability rules, guest-facing explanation, and fulfillment process are clear. Concierge should not offer something your team cannot actually deliver.

## Keep Concierge Sharp

Concierge improves when you maintain its knowledge.

Review it regularly when:

- A property changes access codes, parking, Wi-Fi, or amenities
- A policy changes
- Guests repeatedly ask a question it cannot answer
- A team member corrects a reply
- New services or upsells become available
- Reviews mention confusing instructions

Use action items and answered-question review areas to find gaps, then teach Concierge with a note, document, or rule.

## Troubleshooting

### Concierge gives a weak or incomplete answer

Add a more specific note, upload a better source document, or create a rule for that situation. Then test the same question again.

### Concierge answers correctly for one property but not another

Check the knowledge scope. The answer may have been added to one property when it should be account-wide, or added account-wide when it should be property-specific.

### Concierge should not answer a topic

Add an escalation rule or update the behavior settings so Concierge defers and hands the topic to your team.

### Concierge is trained but not replying live

Check **Messages → Autopilot**. Concierge knowledge can be ready, but Autopilot still controls whether AI is off, suggestion-only, or allowed to auto-reply.

---

## Related Articles

- [Autopilot, Automated Messages, and Concierge: What Each One Does](/platform-guides/setting-up-autopilot/)
- [Set Up Automated Messages](/platform-guides/set-up-automated-messages/)
- [Using Messages: the unified guest inbox](/platform-guides/inbox-communicate-with-guests/)
- [Connecting Messaging Integrations](/platform-guides/connecting-messaging-integrations/)
