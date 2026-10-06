---
title: Why Airbnb Shows the Listing Owner's Name on Replies Sent from SympleHost
description: Airbnb shows messages sent from SympleHost under the account that owns the listing, not the co-host who wrote them. Learn why, and how to sign replies so guests know who is writing.
category: platform-guides
section: Messaging & guest communication
sectionOrder: 6
tags:
  - Airbnb
  - Messages
  - Co-hosts
  - Automation
date: '2026-10-06'
draft: false
---

## What You'll See

If you co-host on Airbnb, replies you send from SympleHost may appear in the Airbnb thread under **someone else's name**: the person whose Airbnb account owns the listing. Airbnb labels these messages **Sent via hosting software**.

For example, Alex owns the listings on Airbnb and Maya is a co-host who is shown to guests as the host. When Maya replies on Airbnb directly, guests see her name. When she replies from SympleHost, guests see Alex's name, often with a **Co-host** label.

Your messages still reach the guest normally. Only the name shown on them is different.

---

## Why This Happens

Airbnb decides who appears as the sender, not SympleHost.

- Airbnb shows every message sent through connected hosting software under the **Airbnb account the listings belong to**.
- SympleHost sends only the message text to Airbnb. There is no option to choose which host or co-host it appears from.
- Who is set as the main host shown to guests doesn't change this. That setting only affects messages typed directly in Airbnb.

This applies to every message SympleHost sends to Airbnb guests, including:

- replies you send from **Messages**
- **Message Automation** rules that send on the **OTA** channel
- **Autopilot** replies
- messages sent through the SympleHost API

---

## What Not to Do

It can be tempting to change the connection or the profile to fix the name. Don't:

- **Don't reconnect Airbnb under the co-host's account.** The co-host doesn't own the listings. Reconnecting can break calendar, pricing, and reservation sync for every listing on that connection.
- **Don't rename the listing owner's Airbnb profile.** It's the owner's real host profile, and the new name would show across all of their listings.

---

## Workaround: Sign Your Messages

The simplest fix is to tell guests who is writing. Add your name at the end of messages, for example **– Maya**.

### Replies You Send from Messages

When you reply to an Airbnb guest in **Messages**, end the message with your name. If several people on your team reply to guests, ask each person to sign their own replies.

### Automated Messages

Add a sign-off to each rule that sends to Airbnb guests:

1. Go to **Messages → Message Automation**.
2. Open a rule that uses the **OTA** channel, such as booking confirmation, check-in instructions, or a checkout reminder.
3. At the end of the message content, add your sign-off, for example "Warm regards, Maya".
4. Save the rule.
5. Repeat for your other rules that send to Airbnb guests.

Use a name, or a team name such as "The Villa Team", that matches the person guests expect to hear from.

See [Set Up Automated Messages](/platform-guides/set-up-automated-messages/) for more on rules.

### AI Replies from Autopilot and Concierge

If Autopilot replies to guests for you, describe your preferred sign-off in Concierge:

1. Open **Concierge → Settings**.
2. In **Brand Voice**, add how replies should end, for example "Always sign off as Maya."
3. Review and confirm the brand voice.

Test it with **Autopilot** in **Suggestion** mode first, and check a few drafts before you let it send on its own. See [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/).

💡 **Tip:** You can also mention it in your first message to new guests, for example: "You'll sometimes see Alex's name on our messages. That's how Airbnb shows replies from our booking system. It's still me, Maya, looking after your stay."

---

## Frequently Asked Questions

### Are my messages still delivered?
Yes. The guest receives every message as usual. Only the name Airbnb shows next to it is different.

### Does this affect other channels?
No. This is how Airbnb handles messages from connected software. Messages on WhatsApp, Instagram, Messenger, and email are sent from the account you connected for that channel.

### Can SympleHost show the co-host's name instead?
Not today. SympleHost can't choose the sender name on Airbnb. Signing your messages is the best workaround for now.

### Why do messages I type in the Airbnb app show my own name?
Those are sent from your own Airbnb account. Only messages sent through hosting software, like SympleHost, use the listing owner's account.

---

## Key Takeaways

- Airbnb shows messages sent from SympleHost under the account that **owns the listing**
- SympleHost can't change the sender name, and messages still reach guests normally
- Don't reconnect Airbnb under a co-host's account or rename the owner's profile
- Sign your replies, and add a sign-off to **Message Automation** rules and your Concierge **Brand Voice**

---

## Related Articles

- [Unified Inbox for Guest Messages in SympleHost](/platform-guides/inbox-communicate-with-guests/)
- [Set Up Automated Messages](/platform-guides/set-up-automated-messages/)
- [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/)
- [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/)
