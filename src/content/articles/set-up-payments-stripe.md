---
title: How to Set Up Payments
description: Connect the payment gateway available for your country so you can collect payments for direct bookings, services, store items, and payment links.
category: getting-started
tags:
  - Payments
  - Payment Gateway
  - Setup
  - Integration
date: '2026-08-08'
draft: false
---

## What Is the Payment Gateway?

Your payment gateway is the processor SympleHost uses to collect money from guests for direct bookings, services, store items, deposits, and payment links.

Depending on your country and account access, you may see options such as **Stripe**, **Razorpay**, **HitPay**, **Doku**, **Xendit**, or **Manual Payments**. Only connect the gateway you are ready to use for real guest payments.

---

## When to Use This

- You accept **direct bookings** (guests booking directly with you, not through Airbnb or Booking.com)
- You sell **services** or **store items** through your guest book
- You want to send **payment links** to guests for additional charges

---

## How to Choose and Connect a Gateway

1. Click your **profile photo or name** in the top right, then choose **Settings**.

2. Under the **Direct Bookings** section, click **Payment Gateway**.

3. You'll see the **Payment Gateway** page with a picker showing the available gateway options for your account and country.

4. Select the gateway you want to connect.

5. Follow the setup instructions shown for that gateway:
   - **Stripe** and **Razorpay** use a hosted connection flow.
   - **HitPay**, **Doku**, and **Xendit** may ask for API or webhook credentials from the provider dashboard.
   - **Manual Payments** appears only when enabled for your account.

6. Complete any provider verification steps.

7. Return to SympleHost and confirm the gateway shows as connected and active.

Only one payment gateway can be connected in the active gateway slot at a time. If another gateway is already connected, SympleHost locks the other connection buttons until you disconnect the current provider.

---

## If You Connect Stripe

1. Select **Stripe** from the gateway picker.
2. Click **Connect with Stripe**.
3. Complete Stripe's hosted setup. You may need your business details and bank account information.
4. Return to SympleHost and confirm Stripe shows as connected.
5. If Stripe shows **Charges Enabled** or **Payouts Enabled** as incomplete, open Stripe and finish the required verification.

## If You Use an API-Key Gateway

Gateways such as **HitPay**, **Doku**, or **Xendit** may require credentials from the provider dashboard.

1. Open the payment provider dashboard in another tab.
2. Copy the required API key, client ID, webhook secret, or salt.
3. Paste the credentials into SympleHost.
4. Save and confirm the provider shows as connected.
5. Make sure the provider is in live mode before accepting real payments.

If you see a sandbox or test-mode badge, reconnect with live credentials before guests pay.

---

## What to Configure After Payments

Payments are only one part of direct booking readiness. Also review:

- **Settings → Direct Bookings → Deposits**
- **Settings → Direct Bookings → Cancellation Policy**
- **Settings → Direct Bookings → Fees & Taxes**
- **Settings → Direct Bookings → Guest Contact**
- **Settings → Direct Bookings → Host Profile & Contact**

Do this before you publish a direct booking website or send payment links to guests.

## About Payment Gateway Status

The bottom of the Payment Gateway page explains key features:

- **Secure Payment Processing** — all gateways are PCI DSS compliant with end-to-end encryption
- **Gateway Availability** — available gateways depend on your country and account access
- **Automatic Payment Confirmation** — webhooks automatically update booking status when payments complete

---

## Troubleshooting

### I don't see the Payment Gateway option in Settings
This setting is under **Direct Bookings** inside Settings. If you still don't see it, it's a role issue — finance and billing settings are only visible to the **Account Owner** and **Account Admins**. Ask your account owner to update your role under **Settings → Team Members**.

### Stripe says "Charges Enabled: No" or "Payouts Enabled: No"
This usually means your Stripe account setup isn't complete. Click **Open Stripe Dashboard** and check for any pending verification steps — Stripe sometimes needs additional identity or banking documents.

### Payouts aren't arriving in my bank account
Stripe typically takes 2–7 business days for the first payout. After that, payouts happen on a rolling schedule. Check your Stripe dashboard for payout status and any holds.

### Another gateway is locked
Only one gateway can be connected in the active gateway slot at a time. Disconnect the current gateway before connecting another one.

### No payment gateways are available
You'll see: "No payment gateways are currently available for your country." Contact SympleHost support if you believe this is an error.

---

## Related Articles

- [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar/)
- [Managing Partial Payments and Deposits](/platform-guides/partial-payments-and-deposits/)
- [How to Set Up Your Pricing & Rate Rules](/platform-guides/set-up-pricing-and-rate-rules/)
- [Adding a Listing Manually](/getting-started/adding-a-listing-manually/)
