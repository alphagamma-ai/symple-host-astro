---
title: How to Set Up Payments (Stripe, HitPay, Xendit, DOKU & Razorpay)
description: Connect a payment gateway to your SympleHost account so you can collect payments for direct bookings, services, and store items.
category: getting-started
tags:
  - Payments
  - Stripe
  - HitPay
  - Xendit
  - DOKU
  - Razorpay
  - Setup
  - Integration
date: '2026-07-25'
draft: false
---

## What Is a Payment Gateway?

A payment gateway is the service that actually takes money from your guest. When you connect one to SympleHost, guests can pay for direct bookings (reservations made outside of OTAs like Airbnb), services, and store items — all without you handling card details manually.

Think of it like adding a cash register to your SympleHost account. SympleHost creates the checkout, the gateway handles the money securely, and the funds settle into your own gateway account. **SympleHost never touches the money and takes no commission on payments.**

---

## When to Use This

- You accept **direct bookings** (guests booking directly with you, not through Airbnb or Booking.com)
- You sell **services** or **store items** through your guest book
- You want to send **payment links** or **quotations** to guests for additional charges

---

## Which Gateways Are Available

SympleHost supports five payment gateways. Which ones you see depends on **your business country**, set under **Settings → Company**.

| Gateway | Best for | How you connect | What guests can pay with |
|---|---|---|---|
| **Stripe** | Global (40+ countries) | One-click, no keys to copy | Cards, 135+ currencies |
| **HitPay** | Southeast Asia | API key + webhook salt | Cards, PayNow, e-wallets |
| **Xendit** | Southeast Asia | Secret key + callback token | Virtual Account, e-wallets, QRIS, cards |
| **DOKU** | Indonesia | Client ID + secret key | Virtual Account, e-wallets, QRIS, cards, OTC retail |
| **Razorpay** | India | Key ID + secret + webhook secret | UPI, cards, netbanking, wallets |

Countries currently configured:

- **Stripe** — Australia, Austria, Belgium, Brazil, Bulgaria, Canada, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hong Kong, Hungary, Ireland, Italy, Japan, Latvia, Liechtenstein, Lithuania, Luxembourg, Malaysia, Malta, Mexico, Netherlands, New Zealand, Norway, Poland, Portugal, Romania, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland, Thailand, UAE, United Kingdom, United States
- **HitPay** — Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam
- **Xendit** — Southeast Asia (enabled per country by SympleHost)
- **DOKU** — Indonesia
- **Razorpay** — India

If a gateway isn't showing for your country and you think it should be, contact SympleHost support.

---

## Before You Start

- **A subscription is required.** Without one you'll see **"Subscription Required"** — "A subscription is required to access payment gateways. Please subscribe to continue." Click **View Billing** to fix this.
- **You need to be an Account Owner or Account Admin.** Payment settings are only visible to those roles.
- **Only one gateway at a time.** SympleHost enforces a single connected gateway per account. If you try to connect a second one you'll see: **"Another gateway is connected"** — "You can only have one payment gateway connected at a time. Disconnect [gateway] first to connect this one instead."

---

## Finding the Page

1. Click **Settings** in the sidebar.

2. Under the **Direct Bookings** section, click **Payment Gateway**.

3. The page is titled **Payment Methods**: "Connect a payment gateway, or share offline payment instructions, so guests can pay you for direct bookings."

   ![Payment Gateway page with Stripe Connect card](/uploads/set-up-payments-stripe/01.png)

At the top you'll see **"Choose your payment provider"** — a grid of tiles, one per gateway. Click a tile to open that provider's setup card below. Each tile shows a status:

- **Active** — this is the gateway guests currently pay through
- **Connected** — set up, but not yet the active gateway
- **Not connected** — available in your country, not set up yet
- **Not available** — not offered in your country
- **Manual option** — the offline/bank-transfer option (if enabled for your account)

The Settings sidebar is organized into sections: **Account** (Profile, Team Members), **Workspace** (General, Company, Billing, Transactions, Tax Configuration), **Direct Bookings** (Host Profile & Contact, Guest Contact, Deposits, Payment Gateway), **Automation** (Integrations, Task Reminders), and **Preferences** (Notifications).

---

## Stripe

**Best for:** most countries outside Southeast Asia and India. Stripe is the easiest to set up because there are no API keys to copy — you authorize SympleHost directly from Stripe.

### How to connect

1. Select the **Stripe** tile, then click **Connect with Stripe**.

2. A Stripe window opens. If you already have a Stripe account, log in. If not, Stripe walks you through creating one (about 5 minutes — you'll need your business details and bank account information).

3. When it's done the window shows **"Connected Successfully"** — "Your Stripe account has been connected. This window will close automatically."

4. Back on the page, the Stripe card shows **Active** and: **"Your Stripe account is connected. You can accept payments from your guests."**

   Below that you'll see:
   - **Account Status:** Active
   - **Charges Enabled:** Yes
   - **Payouts Enabled:** Yes
   - **Connected:** [date]

   ![Stripe connected with Active status](/uploads/set-up-payments-stripe/03.png)

### Managing it

- **Open Stripe Dashboard** — view transactions, manage payouts, handle disputes
- **Set as Active** — make Stripe the gateway guests pay through
- **Disconnect** — removes the connection (you'll be asked to confirm)

### If your account shows "Restricted" or "Pending"

- **Restricted** — "Your Stripe account has restrictions. Open the Stripe Dashboard to view and resolve any outstanding requirements."
- **Pending** — "Open the Stripe Dashboard to complete your account setup and start accepting payments."

  ![Stripe pending setup state](/uploads/set-up-payments-stripe/02.png)

In either case, click **Open Stripe Dashboard** and follow Stripe's instructions to finish verification.

---

## HitPay

**Best for:** Singapore, Malaysia, Indonesia, Philippines, Thailand, Vietnam.

### How to connect

1. Select the **HitPay** tile.

2. Enter your **API Key** and **Webhook Salt**. Both come from the HitPay dashboard — click **"Where do I find these credentials?"** on the card for a direct link, or go to [hitpayapp.com/developers](https://www.hitpayapp.com/developers). The webhook salt is what SympleHost uses to verify that payment confirmations really came from HitPay.

   Don't have an account yet? The card links to HitPay sign-up.

3. Click **Connect HitPay**.

4. Click **Set as Active** to start processing payments through HitPay.

### Sandbox mode

If the card shows a **Sandbox** badge, you connected with test credentials and no real money will move. Disconnect and reconnect with your live API key and salt to accept real payments.

---

## Xendit

**Best for:** Southeast Asia — Virtual Account, e-wallets, QRIS, and cards. Funds settle directly to your Xendit balance.

### How to connect

1. Select the **Xendit** tile.

2. Enter your **Secret API Key** (starts with `xnd_production_…` or `xnd_development_…`).

3. Enter your **Callback Verification Token** — from your Xendit dashboard under **Settings → Developers → Webhooks**. (The Public Key is not needed.)

4. Tick **Sandbox / test mode** only if you're testing with development keys.

5. Click **Connect Xendit**.

### Then finish the webhook setup

Xendit will show **Pending webhook** until you complete this step:

> **One more step — set your webhook URL.** In your Xendit dashboard (**Settings → Developers → Webhooks**), add a webhook for the **Payment Sessions** events — `payment_session.completed` and `payment_session.expired` — pointing at the URL shown on the card.

Copy the URL from the card, paste it into Xendit, then click **"I've set the webhook URL — activate"**. Once the first webhook arrives, **Set as active** becomes available.

The card shows **Mode** (Sandbox/Production), **Last webhook**, and **Connected** date so you can confirm it's working.

---

## DOKU

**Best for:** Indonesia. All Indonesian payment methods on one checkout page — Virtual Account (BCA, BRI, Mandiri…), e-wallets (OVO, DANA, GoPay, ShopeePay, LinkAja), QRIS, credit cards, and over-the-counter retail. DOKU is your merchant of record and settles in IDR straight to your registered Indonesian bank account.

### How to connect

1. Select the **DOKU** tile.

2. Enter your **Client ID** (looks like `MCH-0001-10791114622547`) and **Secret Key**. Your secret key is stored encrypted and is never shown again after saving.

3. Tick **Sandbox mode** only if you're testing.

4. Click **Connect DOKU**.

### Then finish the webhook setup

DOKU shows **Setup incomplete** until you do this:

> **One more step in DOKU Back Office.** DOKU doesn't offer an API for setting notification URLs, so you have to paste the URL shown on the card into **each enabled payment method** (VA, e-wallet, QRIS, cards, OTC) under **Settings → Payment Settings** in your DOKU Back Office.

Then click **"I've pasted the URL — activate"**, and once confirmed, **Set as active gateway**. There's also an **Open DOKU Back Office** button on the card.

---

## Razorpay

**Best for:** India — UPI, cards, netbanking, and wallets. Funds settle directly to your own Razorpay account.

Razorpay is enabled per-account. If you're in India and don't see the tile, contact SympleHost support.

### How to connect

1. Select the **Razorpay** tile.

2. Enter your **Key ID**, **Key Secret**, and **Webhook Secret**. The webhook secret comes from your Razorpay dashboard under **Settings → Webhooks** — it's the secret you set when creating the webhook.

3. Tick **Test mode keys (rzp_test_…)** only if you're testing.

4. Click **Connect Razorpay**.

### Then finish the webhook setup

Razorpay shows **Pending webhook** until this is done:

> **One more step — set your webhook URL.** In your Razorpay dashboard (**Settings → Webhooks**), add a webhook for the `payment_link.paid` and `payment.failed` events pointing at the URL shown on the card, using the webhook secret you entered in SympleHost.

Click **"I've set the webhook URL — activate"**, then **Set as active**.

---

## Bank Transfer & Other Manual Payments

If you'd rather not use a gateway at all — or your country isn't covered — you can give guests written payment instructions instead. Look for the **Manual** tile ("Bank transfer or other"). If you don't see it, ask SympleHost support to enable it for your account.

You can fill in either or both:

- **Payment link (optional)** — any URL where guests can pay you: a Stripe Payment Link, Wise, PayPal.me, or your own checkout page
- **Payment instructions (optional)** — free-form text (bank name, account holder, IBAN, reference), shown exactly as you type it on the quote and PDF

Click **Save** when done.

**Important — no automatic reconciliation.** Manual payments are *not* confirmed automatically. You have to check your own bank account for each payment and confirm the booking yourself once you've verified the money arrived.

Manual instructions are shown to guests on their quote **only while no payment gateway is connected**. Connect a gateway and they're hidden, because guests pay through the gateway by default.

---

## Payment Terms

Separate from the gateway, the **Payment terms** card lets you save a free-form policy that appears on the public quote and PDF you send to customers — regardless of which gateway is connected. For example:

> Payment due 7 days before check-in. Late payments incur a 5% fee. Cancellations within 14 days of arrival are non-refundable.

---

## Choosing Your Active Gateway

Connecting a gateway isn't enough — one gateway must be marked **active** before guests can pay.

If you've connected a gateway but haven't activated it, you'll see: **"No Active Gateway Selected"** — "You have connected payment gateway(s), but none is set as active. Guests will not be able to complete payments until you select an active gateway."

Click **Set as Active** on the gateway's card to fix it.

For Xendit, DOKU, and Razorpay, **Set as active** stays greyed out until SympleHost has received its first webhook from that provider — that's the system confirming the connection actually works end to end.

---

## Troubleshooting

### I don't see the Payment Gateway option in Settings
It lives under **Direct Bookings** in the Settings sidebar. If it's still missing, it's a role issue — finance settings are only visible to the **Account Owner** and **Account Admins**. Ask your account owner to update your role under **Settings → Team Members**.

### "No Payment Gateways Available"
"No payment gateways are currently available for your country." Check that your country is set correctly under **Settings → Company**, then contact support if it still looks wrong.

### I want to switch gateways
Only one gateway can be connected at a time. **Disconnect** your current one first, then connect the new one. Disconnecting doesn't affect payments you've already taken — those stay in the gateway's own dashboard.

### Stripe says "Charges Enabled: No"
Your Stripe account setup isn't complete. Click **Open Stripe Dashboard** and check for pending verification steps — Stripe sometimes needs extra identity or banking documents.

### The "Set as Active" button is greyed out
For **Stripe**, this happens when **Charges Enabled** shows "No" — finish your Stripe setup first. For **Xendit**, **DOKU**, and **Razorpay**, it means the webhook hasn't been received yet — check that you pasted the notification URL into the provider's dashboard for every enabled payment method.

### Payments succeed but the booking doesn't update
That's a webhook problem. Check the **Last webhook** row on the gateway card. If it says "Never" or the date is old, re-check the webhook URL and events in your provider's dashboard.

### Payouts aren't arriving in my bank account
Payouts are handled entirely by your gateway, not by SympleHost. Stripe typically takes 2–7 business days for the first payout, then moves to a rolling schedule. Check your provider's dashboard for payout status and holds.

### My gateway shows a "Sandbox" or "Test" badge
You connected with test credentials, so no real money will move. Disconnect and reconnect using your live credentials.

---

## Related Articles

- [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules)
- [Adding Direct Bookings](/platform-guides/adding-direct-bookings)
- [How to Create and Manage Quotations](/platform-guides/how-to-create-and-manage-quotations)
