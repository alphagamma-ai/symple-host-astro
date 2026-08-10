---
title: Managing Partial Payments and Deposits
description: Set up deposit rules for direct bookings so guests can pay part now, pay the balance later, and keep payment status clear on each reservation.
category: platform-guides
section: Quotes & payments
sectionOrder: 2
tags:
  - Payments
  - Deposits
  - Direct Bookings
  - Reservations
date: '2026-08-10'
draft: false
---

## What Are Partial Payments?

Partial payments let guests confirm a direct booking by paying a deposit at checkout instead of paying the full amount upfront. SympleHost then tracks the remaining balance so your team can follow up before check-in.

Use this when you want to:

- Make direct bookings easier for guests to confirm
- Collect a booking deposit upfront
- Set a clear balance due date before check-in
- Manage payment status from the reservation instead of a spreadsheet

Partial payments apply to **direct bookings**. OTA bookings such as Airbnb or Booking.com usually follow the payment rules of that OTA.

---

## Before You Start

Make sure you have:

1. Connected a payment gateway from the top-right profile menu under **Settings → Payment Gateway**.
2. Reviewed your cancellation policy, fees, taxes, and direct booking settings.
3. Confirmed the listing is ready for direct bookings.

If no payment gateway is active, guests will not be able to complete online payment through SympleHost.

---

## Set the Account Deposit Rule

The account deposit rule is the default for direct bookings across your account.

1. Click your **profile photo or name** in the top right.
2. Choose **Settings**.
3. Under **Direct Bookings**, open **Deposits**.
4. Click **Edit** on **Deposit & Payment Schedule**.
5. Turn on **Offer a deposit at checkout**.
6. Choose the **Deposit type**:
   - **Percentage of total** — guests pay a percentage of the booking total at checkout.
   - **Fixed amount** — guests pay a fixed amount in your account currency.
7. Enter the deposit value.
8. Enter **Balance due (days)** — how many days before check-in the remaining balance is due.
9. Click **Save**.

For percentage deposits, the value must be between **1% and 99%**. For fixed deposits, the amount must be greater than zero. The balance due setting can be **0–365 days** before check-in.

---

## Override Deposits for One Listing

Some properties may need a different payment schedule. For example, a high-value villa may need a larger upfront deposit, while a last-minute city apartment may require full payment.

1. Open **Listings**.
2. Select the property you want to update.
3. Open the **Property Settings** tab.
4. Find **Deposit & Payment Schedule**.
5. Choose one of the available options:
   - **Inherit account default** — use the account-wide deposit rule.
   - **Custom rule for this listing** — set a different deposit type, value, and balance due date.
   - **No deposit for this listing** — guests pay the full amount at checkout.
6. Click **Save Changes**.

Use listing overrides when one property has different risk, seasonality, booking value, or owner requirements from the rest of your portfolio.

---

## What Guests See at Checkout

When a valid deposit rule applies, the checkout page shows payment options:

- **Pay in full** — the guest pays the total amount now.
- **Pay deposit now** — the guest pays the deposit today, and SympleHost shows the remaining balance and due date.

For example, if the booking total is $1,000 and the deposit rule is 30%, the guest can pay $300 now. The remaining $700 is shown as the balance due by the configured date.

If the deposit rule would not create a valid split, SympleHost hides the deposit option and asks the guest to pay in full. This can happen if a fixed deposit is greater than or too close to the booking total.

---

## How to Manage the Remaining Balance

After a guest pays a deposit, review the reservation payment status.

1. Open **Reservations** or the booking from **Calendars**.
2. Open the reservation detail page.
3. Check the **Payment Summary**.
4. If there is a balance due, use the reservation actions to collect the remaining payment or send a payment link.
5. If the guest pays outside SympleHost, record the payment manually so the reservation status stays accurate.

Payment status may show as **Paid**, **Partially Paid**, **Pending**, or **Failed** depending on what has been received.

Do not treat a partially paid booking as fully paid until the remaining balance has been collected or recorded.

---

## Best Practices

- Keep the default account rule simple, then override only the listings that need special handling.
- Use a percentage deposit for most stays so the deposit scales with booking value.
- Use a fixed deposit only when you have a clear minimum amount you always want upfront.
- Set the balance due date early enough for your team to follow up before check-in.
- Test the guest checkout flow after changing deposit rules.
- Make sure your cancellation policy explains what happens to deposits if a guest cancels.

---

## Troubleshooting

### Guests only see "Pay in full"

Check that deposits are enabled, the listing is inheriting or using an active deposit rule, and the deposit amount is lower than the booking total.

### The balance due date is today

If the configured due date would be in the past, SympleHost shows the due date as today. For last-minute bookings, consider requiring full payment.

### A listing should not offer deposits

Open the listing's **Deposit & Payment Schedule** and choose **No deposit for this listing**.

### The guest says they paid but the reservation still shows pending

Check the payment provider dashboard and the reservation activity. If the guest paid outside SympleHost, record the payment manually.

---

## Related Articles

- [How to Set Up Payments](/getting-started/set-up-payments-stripe/)
- [How to Add a Direct Booking](/platform-guides/adding-direct-bookings/)
- [Viewing Your First Reservation](/getting-started/viewing-your-first-reservation/)
- [How to Create and Manage Quotations](/platform-guides/how-to-create-and-manage-quotations/)
