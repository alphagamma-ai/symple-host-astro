---
title: How to Set Up Payments (Stripe Integration)
description: Connect Stripe to your SympleHost account so you can collect payments for direct bookings, services, and store items.
category: getting-started
tags:
  - Payments
  - Stripe
  - Setup
  - Integration
date: '2026-04-09'
draft: false
---

## What Is the Stripe Integration?

Stripe is a payment processing service that lets you accept credit cards, debit cards, and other payment methods from guests. When you connect Stripe to SympleHost, guests can pay for direct bookings (reservations made outside of OTAs like Airbnb), services, and store items — all without you having to handle payment details manually.

Think of it like adding a cash register to your SympleHost account — Stripe handles the money securely, and you see the payments in your Stripe dashboard.

---

## When to Use This

- You accept **direct bookings** (guests booking directly with you, not through Airbnb or Booking.com)
- You sell **services** or **store items** through your guest book
- You want to send **payment links** to guests for additional charges

---

## How to Connect Stripe

1. Click **Settings** in the sidebar.

2. Under the **Direct Bookings** section, click **Payment Gateway**.

3. You'll see the **Payment Gateway** page with the heading "Connect a payment gateway to accept payments from guests securely." Find the **Stripe Connect** card.

   ![Payment Gateway page with Stripe Connect card](/uploads/set-up-payments-stripe/01.png)

The Settings sidebar is organized into sections: **Account** (Profile, Team Members), **Workspace** (General, Company, Channel Manager, Billing, Transactions, Financial Report, Profit & Loss), **Direct Bookings** (Host Description, Payment Gateway), **Automation** (Integrations, Autopilot, AI Memories, Task Reminders), and **Preferences** (Notifications, Security, Legal).

4. Click **Connect with Stripe** (blue button with the Stripe icon).

5. You'll be redirected to Stripe's website in a new window. If you already have a Stripe account, log in. If not, Stripe will walk you through creating one (this takes about 5 minutes — you'll need your business details and bank account information).

6. After completing the Stripe setup, the window shows **"Connected Successfully"** with the message "Your Stripe account has been connected. This window will close automatically."

7. Back on the Payment Gateway page, your Stripe card now shows two **Active** badges (a green checkmark "Active" and a purple lightning bolt "Active") and the message: **"Your Stripe account is connected. You can accept payments from your guests."**

   Below that, you'll see the connection details:
   - **Account Status:** Active
   - **Charges Enabled:** Yes (green)
   - **Payouts Enabled:** Yes (green)
   - **Connected:** [date, e.g., Mar 6, 2026]

   ![Stripe connected with Active status](/uploads/set-up-payments-stripe/03.png)

---

## Managing Your Stripe Connection

Once connected, you'll see two buttons below the status details:

- **Open Stripe Dashboard** (purple button with external link icon) — takes you to your Stripe account where you can view transactions, manage payouts, and configure settings
- **Disconnect** (gray button) — removes the Stripe connection (you'll be asked to confirm before disconnecting)

**Tip:** Your Stripe account is independent of SympleHost. You can log into Stripe directly at any time to view detailed transaction reports, manage disputes, or update your banking details.

### If Your Account Shows "Restricted" or "Pending"

- **Restricted** — Your Stripe account has restrictions. You'll see a warning: "Your Stripe account has restrictions. Open the Stripe Dashboard to view and resolve any outstanding requirements."
- **Pending** — Your setup isn't complete. You'll see: "Open the Stripe Dashboard to complete your account setup and start accepting payments."

   ![Stripe pending setup state](/uploads/set-up-payments-stripe/02.png)

In either case, click **Open Stripe Dashboard** and follow Stripe's instructions to finish your verification.

---

## Alternative: HitPay

SympleHost also supports **HitPay** as a payment gateway. HitPay may be available depending on your country.

To connect HitPay:

1. Go to **Settings** → **Payment Gateway**.
2. Find the **HitPay** card.
3. Enter your **API Key** and **Webhook Salt** (you can find these in the HitPay developer dashboard — click **"Where do I find these credentials?"** for a direct link).
4. Click **Connect HitPay**.

Once connected, click **Set as Active** to start processing payments through HitPay. If you see a **"Sandbox"** badge (yellow), your connection is in test mode — reconnect with live credentials to accept real payments.

**Important:** Only one payment gateway can be active at a time. If no gateway is set as active, you'll see an alert: **"No Active Gateway Selected"** — "You have connected payment gateway(s), but none is set as active. Guests will not be able to complete payments until you select an active gateway."

---

## About Payment Gateways

The bottom of the Payment Gateway page explains key features:

- **Secure Payment Processing** — all gateways are PCI DSS compliant with end-to-end encryption
- **Multiple Gateway Support** — connect multiple gateways and switch between them anytime
- **Automatic Payment Confirmation** — webhooks automatically update booking status when payments complete

---

## Troubleshooting

### I don't see the Payment Gateway option in Settings
This setting is under **Direct Bookings** in the Settings sidebar. If you still don't see it, check that you have the **can_manage_finances** permission — ask your account owner to grant it under **Settings** → **Team Members**.

### Stripe says "Charges Enabled: No"
This usually means your Stripe account setup isn't complete. Click **Open Stripe Dashboard** and check for any pending verification steps — Stripe sometimes needs additional identity or banking documents.

### Payouts aren't arriving in my bank account
Stripe typically takes 2–7 business days for the first payout. After that, payouts happen on a rolling schedule. Check your Stripe dashboard for payout status and any holds.

### The "Set as Active" button is grayed out
This happens when **Charges Enabled** is showing "No" on your Stripe account. Complete your Stripe setup first — the button becomes clickable once charges are enabled.

### No payment gateways are available
You'll see: "No payment gateways are currently available for your country." Contact SympleHost support if you believe this is an error.

---

Related Articles
- How to Manage Bookings & Your Calendar
- How to Set Up Your Pricing & Rate Rules
- Adding a Listing Manually
