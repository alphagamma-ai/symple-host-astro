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

## Before You Start: Fill In the Basics

Concierge already reads a lot from SympleHost itself. Fill these in first, and you won't need to repeat them in a document:

- **Listing details:** address, bedrooms, capacity, check-in and check-out times, amenities, and the pets, smoking, parties and children settings.
- **Guidebook** (in **Guest books**): check-in steps, Wi-Fi, laundry, amenities and house rules. Concierge reads each guidebook directly. You'll see it listed as **"[Listing name] Guidebook"** in that listing's **Knowledge** tab, and edits in Guest books update it automatically.
- **Recommendations** (in **Guest books → Recommendations**): restaurants and things to do nearby. Without them, questions like "where should we eat tonight?" go to your team.

⚠️ **Important:** Concierge repeats whatever your listing and guidebook say. Check them for typos, for example a check-out time of 22:00 instead of 10:00, and fill in empty sections before you go live.

---

## Step 1: Write Your Rules

Rules tell Concierge how to write and what it may or may not do: tone, style, pricing approvals and when to pass a question to your team.

By default, Concierge speaks as your team ("we") and keeps replies to one or two sentences. Your own style rules always take priority, so only write rules for what you want done differently.

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

### Example rules you can copy

Change the details to match your business. Each one is a separate rule.

**Topic: Writing style** · set to **Answers freely**

```text
Keep replies short: 2–4 sentences unless the guest asks for detail.
Answer the question first, then add anything useful.
Use the guest's first name once, at the start.
Use simple English. No emojis, no exclamation marks in a row.
Reply in the language the guest writes in.
```

**Topic: Tone and persona** · set to **Answers freely**

```text
You are the guest team at Ocean Stays. Sound warm, calm and helpful,
like a friendly hotel front desk. Say "we" for the team.
Never argue with a guest. If they are upset, apologise once and focus on the fix.
```

**Topic: Prices and discounts** · set to **Asks you first**

```text
Only quote prices that are written in our documents.
Never offer a discount, free night, upgrade or refund yourself.
If a guest asks for a lower price, say the team will check and reply shortly.
```

**Topic: Hand to the team** · set to **Never**

```text
Hand the conversation to the team for: refunds and cancellations,
damage or breakages, safety or medical issues, complaints about staff,
and any request to change booking dates.
```

**Topic: Pets** · set to **Answers freely**

```text
No pets, no exceptions. Politely tell the guest pets aren't allowed at any of our villas.
```

💡 **Tip:** If a guest asks for something your house rules don't allow, Concierge treats it as a possible exception and passes it to you. Add "no exceptions" to a rule, as above, when you want Concierge to give a polite no itself.

💡 **Tip:** Choose the setting to match how much you trust Concierge on that topic. **Answers freely** means it replies on its own. **Asks you first** means the conversation also comes to you. **Never** means Concierge doesn't answer and hands the guest straight to your team.

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

### Example listing document

Here's what a good listing document looks like. Save it as a DOCX or TXT file named after the listing, for example `Ocean Villa – guest info.docx`.

```text
OCEAN VILLA – GUEST INFORMATION

About the villa
3 bedrooms, each with its own bathroom. Sleeps 6 adults.
Private 10 m pool, open 7 am – 10 pm. No lifeguard; children must be supervised.
Fully equipped kitchen. Daily housekeeping 9 am – 12 pm.

Check-in and check-out
Check-in from 2 pm, check-out by 11 am.
Early check-in from 10 am: USD 50, only if the villa is free the night before.
Late check-out until 4 pm: USD 60, confirm with the team the day before.

Events and weddings
Weddings and private events are allowed for up to 60 guests.
Event fee: USD 500 for up to 30 guests, USD 900 for 31–60 guests.
Refundable security deposit: USD 300, paid before the event.
Music must stop by 10 pm.

Breakfast and extras
Breakfast: USD 12 per person, served 7:30 – 10 am. Order by 8 pm the night before.
Airport pickup: USD 35 per car (up to 4 guests).

House rules
No smoking indoors. Pets not allowed. Quiet hours 10 pm – 7 am.
```

Notice how each topic has its own heading, and every price says exactly what it covers.

⚠️ **Important:** Don't put door codes or Wi-Fi passwords in documents. Add them to the listing's guidebook instead, in the Wi-Fi and access code fields. Concierge only shares those with guests who have a confirmed, paid stay, from the day before check-in.

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

### Example General document

```text
OCEAN STAYS – INFORMATION FOR ALL VILLAS

Our villas
We have two villas in Seminyak:
- Ocean Villa: 3 bedrooms, sleeps 6, private pool, hosts weddings up to 60 guests.
- Garden Villa: 2 bedrooms, sleeps 4, shared garden, no events.
If a guest hasn't said which villa they mean, ask before giving villa-specific details.

Getting here
The airport is about 40 minutes away by car.
We can arrange airport pickup for every villa (see each villa's price).
Taxis: use Grab or Bluebird. Avoid unmarked taxis at the airport exit.

Safety and emergencies
Emergency number: 112. Ambulance: 118.
Nearest hospital: Siloam Hospital, 15 minutes by car, open 24 hours.
Our team is on call 24/7 on WhatsApp for urgent problems.

Current promotions
Stay 7 nights or more and get 10% off. Valid until 31 March.

Policies for all villas
Payment: full payment 14 days before arrival.
Cancellation: free up to 30 days before arrival; 50% after that.
```

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
- **Pause old notes instead of stacking new ones.** When you add a note that overlaps an older one, SympleHost asks whether to **Pause older note**. Say yes unless both are still true.
- **Upload each document once per place it belongs.** The same rules document uploaded on General *and* on several listings doesn't help and makes things harder to update.
- **Clean up after reorganising.** Once your new rules and documents are in, delete old uploads and any long rules that contain a whole pasted document.

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
