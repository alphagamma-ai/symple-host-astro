---
title: How to Invite a Property Owner to Connect Their Airbnb Account
description: Send a homeowner a secure link so they can connect their own Airbnb account and choose which listings to share with you, without a SympleHost login. Includes the Airbnb privacy setting that can block the connection.
category: getting-started
section: Connect your listings
sectionOrder: 3
tags:
  - Airbnb
  - Owners
  - Channel Manager
  - OTA
  - Troubleshooting
date: '2026-11-27'
draft: false
---

If you manage homes for owners, the Airbnb account often belongs to the owner, not to you. Instead of asking for their Airbnb password, send them an invite link. The owner signs in to Airbnb themselves, approves the connection, and picks which listings to share with you.

---

## What Is an Owner Invite?

An owner invite is a private link you create in SympleHost and send to the person who owns the Airbnb account. Think of it like handing the owner a key to your front door: they let themselves in, and you never need their password.

When the owner opens the link, they:

- Sign in to Airbnb with their own account
- Approve the connection on Airbnb's own page
- Tick only the listings they want to share with you

The owner **does not need a SympleHost account**. The listings arrive in your SympleHost account, ready to manage.

## When to Use It

- You are a property manager and the homeowner keeps their own Airbnb account
- The owner does not want to share their Airbnb password with you
- The owner has several listings on Airbnb but only some of them are managed by you

If the Airbnb account is yours, you don't need an invite. Connect it yourself from **Channel Manager**. See [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/).

---

## Part 1: Send the Invite (You)

1. Go to **Channel Manager** and click **Connect OTA**.
2. Select **Airbnb**.
3. On the connect screen, find the card **Not the account owner?** and click **Create invite link**.
4. In **Who is this for?**, type a name you'll recognise later, for example *Maria — Bali villas*.
5. Click **Generate link**.
6. Click **Copy** and send the link to the owner by WhatsApp or email.

⚠️ **Important:** The link is shown only once. Copy it before you leave the page. If you lose it, generate a new one.

💡 **Tip:** Each link expires after 7 days. If the owner doesn't use it in time, create a fresh one.

### Track the Invite

Your invites are listed under the same **Invite the property owner** screen, with a status for each:

| Status | What it means |
|---|---|
| **Waiting for owner** | The owner hasn't opened the link or finished signing in yet |
| **Connected, choosing listings** | The owner approved on Airbnb and is picking listings |
| **Listings imported** | Done. The listings are now in your account |
| **Expired** | The 7 days passed. Create a new link |
| **Revoked** | You cancelled the link |

To cancel a link you no longer want used, click **Revoke** next to it.

---

## Part 2: What the Owner Does

Send these steps to the owner along with the link.

<div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;padding:12px;margin:16px 0;border:1px solid #e5e7eb;border-radius:12px;">
  <video controls preload="metadata" poster="/screenshots/invite-owner-connect-airbnb/poster.png" style="width:280px;max-width:100%;border-radius:8px;">
    <source src="/videos/invite-owner-connect-airbnb.mp4" type="video/mp4" />
  </video>
  <div style="flex:1;min-width:200px;">
    <strong>Prefer to watch? (about 1 minute)</strong><br />
    See the owner's side end to end: checking the Airbnb privacy setting, opening the invite link, approving on Airbnb, choosing listings, and setup finishing. You can send this video to the owner too.
  </div>
</div>

1. **Before you start, check your Airbnb privacy setting.** In Airbnb, go to **Profile** → **Account settings** → **Privacy**. Scroll to **Data privacy** and make sure **Help improve AI-powered features** is turned on. If it's off, Airbnb can block the connection. (More on this in [Troubleshooting](#the-owner-cant-finish-connecting-on-airbnb) below.)
2. Open the invite link. You'll see a page that says *[Your company] would like to connect your Airbnb listings*.
3. Click **Connect Airbnb**.
4. Sign in to Airbnb if asked. Airbnb shows the permissions the connection needs, such as reservations, calendars, prices and messages. Click **Allow**.
5. Back on the invite page, under **Choose the listings to share**, tick only the listings managed by your property manager.
6. Click **Share selected listings**.

The page then shows **Setting things up** with a checklist for each listing:

- Airbnb account connected
- Listing details copied
- Guest messaging on
- Calendar linked
- Prices and blocked dates

This can take a few minutes. The owner can watch, or close the page — setup carries on either way. When it's done, the page says *All done* and the listings appear in your SympleHost account.

---

## Troubleshooting

### The owner can't finish connecting on Airbnb

This is the most common blocker, and it's frustrating because nothing on the invite page tells you why. Airbnb's privacy settings can stop a third-party app (a tool outside Airbnb, like SympleHost) from connecting.

Ask the owner to:

1. Open Airbnb and go to **Profile** → **Account settings** → **Privacy**.
2. Scroll to **Data privacy**.
3. Make sure **Help improve AI-powered features** is turned on.
4. Open the invite link again and click **Connect Airbnb**.

If the link has expired by then, send a new one.

### The owner says the link doesn't work

Check the invite's status. If it shows **Expired** or **Revoked**, generate a new link. Also check the owner copied the whole link — links cut off in a message won't open.

### Some listings show "Couldn't be set up"

Some listings may fail while others succeed. You'll be notified, and you can finish those listings from your side in **Channel Manager**. The owner doesn't need to do anything else.

### The owner can't see a listing in the list

The list shows the listings on the Airbnb account they signed in with. If a listing is missing, the owner may have signed in with a different Airbnb account. Ask them to sign out of Airbnb and open the link again with the right account.

---

## Related Articles

- [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/)
- [Airbnb and SympleHost Integration Overview](/getting-started/airbnb-integration-overview/)
- [How to Set Up the Owner Portal for Managed Properties](/platform-guides/set-up-owner-portal-for-managed-properties/)
