---
title: "Connect Xero for Accounting Sync"
description: "Connect Xero with SympleHost so invoices, payments, expenses, and payouts can sync into your Xero organisation."
category: platform-guides
section: Integrations
sectionOrder: 2
tags:
  - Xero
  - Accounting
  - Payments
  - Invoices
  - Expenses
  - Integrations
date: '2026-09-01'
draft: false
---

Use the Xero integration when your finance workflow needs SympleHost booking and payment records to flow into Xero. The integration is designed to push invoices, payments, expenses, and payouts to your connected Xero organisation.

## Before You Start

Make sure you have:

1. A Xero account.
2. Access to the correct Xero organisation.
3. Permission in Xero to authorise connected apps.
4. Admin access in SympleHost so you can open **Settings -> Integrations**.
5. Your reservation, payment, expense, and payout workflows set up in SympleHost.

If you manage multiple companies or accounting entities, confirm which Xero organisation should receive the SympleHost records before connecting.

## Open the Xero Integration

1. Log in to SympleHost.
2. Click your profile photo or name in the top-right corner.
3. Open **Settings**.
4. Go to **Integrations**.
5. Find **Xero** under **Accounting**.
6. Click **Manage** or **Connect Xero**.

![SympleHost Integrations page showing the Xero card under Accounting, with a Manage button once connected](/screenshots/xero-integration/integrations-xero-card.png)

## Connect Xero

When you connect Xero, SympleHost opens the Xero authorisation flow.

1. Choose the Xero organisation you want to connect.
2. Approve the requested permissions.
3. Return to SympleHost after authorisation.
4. Confirm the Xero card shows the connected organisation.
5. Turn on **Enable sync** when you are ready for records to start syncing.

## Review Sync Status

After Xero is connected, open **Manage** on the Xero card to review the sync page.

The sync page shows:

- **Pending** records waiting to be sent.
- **Synced** records that successfully reached Xero.
- **Errors** that need attention.
- **Skipped** records that were not sent.
- The last sync time.
- A manual **Sync now** button.
- A **Disconnect** option if you need to remove the connection.

![Xero sync status page showing pending, synced, error, and skipped records, plus Enable sync, Sync now, and Disconnect actions](/screenshots/xero-integration/xero-sync-status.png)

## Records That May Need Attention

If SympleHost cannot send a record to Xero, it appears under **Records needing attention**. For example, a reservation invoice may show an error if Xero OAuth credentials are missing or expired.

When you see errors:

1. Open the Xero integration page.
2. Check whether the account is still connected.
3. Reconnect Xero if credentials have expired.
4. Confirm **Enable sync** is turned on.
5. Click **Sync now** after fixing the issue.

## Best Practices

- Connect Xero before you rely on month-end reporting.
- Review errors regularly so finance records do not pile up.
- Use **Sync now** after resolving connection or data issues.
- Disconnect only if you are intentionally changing Xero organisations or stopping the accounting sync.
- Keep reservation and payment records clean in SympleHost before syncing them into Xero.
