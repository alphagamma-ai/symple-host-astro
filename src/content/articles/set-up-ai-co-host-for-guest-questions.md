---
title: Set Up AI Co-Host for Guest Questions
description: Teach AI Co-Host your property knowledge, rules and brand voice so it can answer guest questions with the right context.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 8
tags:
  - AI Co-Host
  - AI
  - Guest Messaging
  - Knowledge Base
  - Upsells
date: '2026-08-10'
draft: false
---

> 📘 **Setting up your AI Co-Host for the first time?** Follow the step-by-step guide: [Set Up Your AI Co-Host: Knowledge Base, Documents, Rules and Testing](/platform-guides/organise-ai-co-host-knowledge/). This article gives a broader overview.

**AI Co-Host is the AI guest assistant inside SympleHost. It helps answer guest questions using your property knowledge, rules, past chats, documents, notes, reservation context, and brand voice.**

---

> **TL;DR:** Use **Messages → AI Co-Host** to teach the AI what it should know, how it should answer, when it should escalate, and what it can offer guests. AI Co-Host is different from Automated Messages: it answers live guest questions, while Automated Messages send planned messages at scheduled moments.

## What AI Co-Host Is For

AI Co-Host is for the questions guests ask when your team is busy, offline, or asleep:

- "What is the Wi-Fi password?"
- "Can we check in early?"
- "Where do we park?"
- "How do we use the coffee machine?"
- "Can you arrange airport transfer?"
- "The air conditioning is not working. What should I do?"

AI Co-Host can answer these questions because it has access to your SympleHost context and the knowledge you teach it.

## AI Co-Host vs Automated Messages

| AI Co-Host | Automated Messages |
| --- | --- |
| Answers guest questions as they come in | Sends planned messages on a schedule |
| Uses property data, reservation data, notes, documents, past chats, rules, and brand voice | Uses a trigger, timing, audience, channel, and template |
| Gets better as you teach it | Stays mostly static until you edit the rule |
| Best for guest support, FAQs, issue triage, and upsell suggestions | Best for confirmations, check-in instructions, checkout reminders, and review requests |

Use AI Co-Host when you need an answer that adapts to the guest's question. Use Automated Messages when the message should go out at a predictable point in the stay.

## Where to Find AI Co-Host

1. Open **Messages** from the sidebar.
2. Click **AI Co-Host** in the top messaging tabs.
3. Click **Knowledge Base** to manage knowledge for General, each listing, or services.
4. Use **Test** or the practice area before allowing live replies.

The AI Co-Host tab may only appear on accounts where it is enabled.

## What AI Co-Host Can Learn From

AI Co-Host works best when you teach it in layers.

| Knowledge source | What to add |
| --- | --- |
| **Property facts** | Address, access details, check-in method, Wi-Fi, parking, amenities, house rules |
| **Notes** | Short corrections or operating details your team already knows |
| **Documents** | House manuals, welcome books, service menus, policies, as DOCX, TXT or CSV files (PDFs aren't supported yet) |
| **Past messages** | Real examples of how guests ask questions and how your team replies |
| **Review insights** | Guest feedback that reveals missing or unclear property information |
| **Rules** | What AI Co-Host should always do, never do, or escalate |
| **Brand voice** | How the assistant should sound across replies |
| **Upsells** | Paid extras AI Co-Host can mention or offer when appropriate |

Start with property facts and house rules first. Then add documents and notes for anything guests frequently ask about.

## Teach AI Co-Host at the Right Scope

AI Co-Host has different scopes so the right answer can be used in the right place.

| Scope | Use it for |
| --- | --- |
| **General / account-wide** | Rules and facts that apply to every property |
| **Property-level** | Access, amenities, parking, Wi-Fi, house rules, local instructions, and property-specific policies |
| **Service-level** | Service details, inclusions, timing, meeting points, and guest instructions |

Use account-wide knowledge for universal policies. Use property-level knowledge for anything that changes from one listing to another.

If a listing entry and a General entry disagree, the listing entry wins.

## Add Notes and Documents

Inside an AI Co-Host property or General page:

1. Open the **Knowledge** zone.
2. Add a quick note for short instructions.
3. Upload documents for longer manuals or guides.
4. Wait for sources to finish processing.
5. Keep only active, accurate sources enabled.

Good notes are specific:

- "For Ocean Villa, guests can use the beach towels in the hallway cupboard. Pool towels are by the pool."
- "Guests can request early check-in, but only confirm it after checking the calendar and housekeeping status."
- "If a guest reports no hot water, ask them to check the switch in the hallway first, then escalate to maintenance."

⚠️ **Important:** Don't put door codes or Wi-Fi passwords in notes or documents. Use the guidebook's Wi-Fi and access code fields.

## Add Rules

Rules tell AI Co-Host how to behave in sensitive or policy-heavy situations.

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

Each rule is set to **Respond**, **Alert** or **Avoid**. See [Set Up Your AI Co-Host](/platform-guides/organise-ai-co-host-knowledge/), Step 5.

## Configure How AI Co-Host Sounds

How AI Co-Host sounds is set in the AI Co-Host voice card under **Messages → Settings**. See [Autopilot: Choose Off, Suggestion or On](/platform-guides/autopilot-off-suggestion-on/).

## Test Before Going Live

Before turning AI Co-Host live:

1. Add at least one ready knowledge source.
2. Add important rules.
3. Run practice questions for each property.
4. Check whether answers cite the right information.
5. Fix any weak answers by adding notes, documents, or rules.
6. Review the account Autopilot mode.

The go-live area links back to **Messages → Autopilot** because Autopilot controls whether AI is allowed to suggest or send replies.

## Use AI Co-Host for Upsells

AI Co-Host can support upsells when you configure the offer clearly.

Examples:

- Early check-in
- Late checkout
- Airport transfer
- Extra cleaning
- Local experiences
- Food, drinks, or welcome packs

For each upsell, make sure the price, availability rules, guest-facing explanation, and fulfillment process are clear. AI Co-Host should not offer something your team cannot actually deliver.

## Keep AI Co-Host Sharp

AI Co-Host improves when you maintain its knowledge.

Review it regularly when:

- A property changes access codes, parking, Wi-Fi, or amenities
- A policy changes
- Guests repeatedly ask a question it cannot answer
- A team member corrects a reply
- New services or upsells become available
- Reviews mention confusing instructions

Use action items and answered-question review areas to find gaps, then teach AI Co-Host with a note, document, or rule.

## Troubleshooting

### AI Co-Host gives a weak or incomplete answer

Add a more specific note, upload a better source document, or create a rule for that situation. Then test the same question again.

### AI Co-Host answers correctly for one property but not another

Check the knowledge scope. The answer may have been added to one property when it should be account-wide, or added account-wide when it should be property-specific.

### AI Co-Host should not answer a topic

Add a rule for that topic set to **Avoid**, so AI Co-Host doesn't answer and hands the guest to your team.

### AI Co-Host is trained but not replying live

Check **Messages → Autopilot**. AI Co-Host's knowledge can be ready, but Autopilot still controls whether AI is off, suggestion-only, or allowed to auto-reply.

---

## Related Articles

- [Autopilot, Automated Messages, and AI Co-Host: What Each One Does](/platform-guides/setting-up-autopilot/)
- [Set Up Automated Messages](/platform-guides/set-up-automated-messages/)
- [Using Messages: the unified guest inbox](/platform-guides/inbox-communicate-with-guests/)
- [Connecting Messaging Integrations](/platform-guides/connecting-messaging-integrations/)
