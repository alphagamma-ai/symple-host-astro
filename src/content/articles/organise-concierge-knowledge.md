---
title: How to Organise Concierge Knowledge
description: 'Where each kind of information goes so Concierge answers guests correctly — rules for how it behaves, one document per listing, and a General document for facts every listing shares.'
category: platform-guides
section: Messaging & guest communication
sectionOrder: 5
tags:
  - Concierge
  - AI
  - Knowledge Base
  - Guest Messaging
date: '2026-11-11'
draft: false
---

**Concierge answers guests from what you teach it. When you put each kind of information in the right place, it finds the right answer more often and follows your instructions every time.**

---

> **TL;DR:** Put instructions (how Concierge should write and behave) in **Rules**. Put facts about a listing in **one document on that listing**. Put facts that are the same for every listing in **one document on General**. Then test your setup in the **Test** tab.

---

## The Three Places Information Goes

Think of Concierge like a new team member. You give them a short list of house rules for how to talk to guests, a binder for each villa, and one shared binder for things that apply everywhere.

| What it is | Where it goes | Example |
| --- | --- | --- |
| **How Concierge should behave** | **Rules** | "Write short, friendly replies. Never confirm a price that isn't in our documents." |
| **Facts about one listing** | A document on **that listing** | Room layout, event fees, pool rules, check-in steps for Ocean Villa |
| **Facts that are the same everywhere** | A document on **General** | Airport transfers, emergency contacts, safety tips, current promotions |

⚠️ **Important:** Concierge reads documents as information to answer from, not as instructions. If you write "always reply in a formal tone" inside a document, Concierge won't apply it as a rule. Instructions only work when you add them as **Rules**.

---

## Where to Find It

1. Go to **Messages** in the sidebar.
2. Click the **Concierge** tab at the top.
3. In the left menu, click **Knowledge Base**.
4. You'll see a **General** card at the top, followed by one card for each listing.

<!-- Screenshot: The Concierge **Properties & services** page, with the **General** card at the top and listing cards below it, each showing its sources and rules count -->

Each card opens a page with three tabs: **Knowledge**, **Rules** and **Test**.

💡 **Tip:** A listing card that says **Inherits from General** has no knowledge of its own yet. Concierge will only use what's in General for it. General knowledge is always used alongside each listing's own knowledge, so you never need to copy it onto listings.

---

## Step 1: Write Your Rules

Rules tell Concierge how to write and what it may or may not do: tone, style, pricing approvals and when to pass a question to your team.

1. Open the **General** card if the rule should apply to every listing. Open a listing's card if it applies to that listing only.
2. Click the **Rules** tab.
3. Click **Add topic**, give the rule a short name (for example "Writing style" or "Prices"), and save it.
4. Choose how Concierge handles it: **Answers freely**, **Asks you first** (it comes to you) or **Never** (Concierge doesn't answer and hands the guest to you).
5. Click the rule's name and write your instructions in **Guidance — how the concierge should behave**, in plain sentences.
6. Click **Update rule**.

<!-- Screenshot: The Rules zone on General, showing a short rule with the **Answers freely / Asks you first / Never** options and the character counter -->

**Keep each rule short.** Concierge reads only the first **4,000 characters** of a rule. A counter appears as you get close, and you can't save a rule that's over the limit. You can add as many rules as you need, and all of them apply, so split long instructions into several focused rules. For example:

- One rule for writing style
- One rule for tone and persona
- One rule for prices and approvals
- One rule for when to hand a question to your team

❌ Don't paste a whole manual into a rule. Facts belong in a document (see Step 2).

---

## Step 2: Upload One Document per Listing

Each listing's facts go in its own document, uploaded on that listing.

1. Open the listing's card.
2. Click the **Knowledge** tab.
3. Drag your file into the upload box, or click it to choose a file. Concierge accepts **DOCX, TXT or CSV** files up to **25MB**. PDFs aren't supported yet, so save a PDF as DOCX or TXT first.
4. Wait until the status shows **Ready**. While it's **Processing** or **Learning…**, Concierge can't use it yet.

<!-- Screenshot: A listing's Knowledge zone with one uploaded document showing the green **Ready** status -->

Documents can be as long as you need. Concierge searches them section by section, so:

- **Use clear headings**, for example "Events and weddings", "Fees" and "Pool and spa". Headings help Concierge find the right section.
- **Write prices and numbers exactly** as you want them quoted.

### If several listings share the same building or facts

Concierge only reads a listing's document when the guest is asking about that listing. If three villas share one complex, upload the same document on **each** listing guests can book, including any whole-complex listing.

---

## Step 3: Add a General Document for Shared Facts

Facts that are the same for every listing go in **one** document on **General**:

- Getting around, airport transfers, transport
- Safety tips and emergency contacts
- Promotions and offers that apply everywhere
- Company-wide policies

**Add a short overview for guests who haven't picked a listing yet.** In some chats, especially on WhatsApp, a guest asks a question before saying which listing they mean. In that case Concierge only has your General document. Add a few lines there such as "Ocean Villa and Garden Villa both host weddings. Ask which one the guest is interested in."

---

## Step 4: Test It

1. Open a listing's card and click the **Test** tab. It unlocks once at least one document or note shows **Ready**.
2. Ask a question the way a guest would, for example "Are there extra charges for a wedding?"
3. Check the answer and the **Sources** it used.
4. If it's wrong or missing, fix the document or rule, then ask again.

<!-- Screenshot: The Practice panel with a guest question, Concierge's reply, and the Sources list showing the listing's document -->

Nothing in the Test tab is sent to real guests.

---

## Good Habits

- **Keep each fact in one place.** If a rule and a document say different things, the rule wins. Duplicates are how outdated answers creep in.
- **Upload each document once per place it belongs.** The same rules document uploaded on General *and* on several listings doesn't help and makes things harder to update.
- **Clean up after reorganising.** Once your new rules and documents are in, delete old uploads and any long rules that contain a whole pasted document.
- **Fill in property details first.** Concierge already knows your listing's address, capacity, check-in and check-out times and amenities from the listing itself. You don't need to repeat them in a document.

---

## Troubleshooting

### Concierge ignores how I asked it to write

Your instructions are probably inside a document. Move them into **Rules**. Documents are only used as facts.

### Part of a long rule isn't followed

Concierge reads only the first 4,000 characters of a rule. Split it into several shorter rules.

### Concierge answers for one villa but not another

The document is only on one listing. Upload it on every listing it applies to.

### Concierge says it will check with the team for a question my document answers

The guest may not have said which listing they mean, so Concierge only had General. Add a short line about that topic to your General document.

---

## Related Articles

- [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/)
- [Autopilot, Automated Messages, and Concierge: What Each One Does](/platform-guides/setting-up-autopilot/)
- [Using Messages: the unified guest inbox](/platform-guides/inbox-communicate-with-guests/)
