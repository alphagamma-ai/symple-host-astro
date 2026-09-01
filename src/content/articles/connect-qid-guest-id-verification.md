---
title: "Connect QID for Guest ID Verification"
description: "Connect QID with SympleHost so guests can complete web check-in and ID verification using the correct national and international guest templates."
category: platform-guides
section: Integrations
sectionOrder: 1
tags:
  - QID
  - Guest ID Verification
  - KYC
  - Web Check-in
  - Integrations
date: '2026-09-01'
draft: false
---

Use the QID integration when you need guests to complete identity verification or web check-in before arrival. SympleHost connects to the QID forms you already created in your QID dashboard, then uses those form templates for guest verification flows.

## Before You Start

Make sure you have:

1. A QID account.
2. Access to your QID dashboard.
3. A QID API key for your organisation.
4. A national ID template form ID.
5. An international guest template form ID.
6. Admin access in SympleHost so you can open **Settings -> Integrations**.

Create or confirm your QID templates in QID first. SympleHost does not create the QID forms for you; it stores the form IDs so the correct check-in forms can be used from SympleHost.

For the operational reasons behind guest ID checks, see [Guest ID Verification for Short-Term Rentals](https://www.symplehost.ai/en/blog/guest-id-verification-short-term-rentals).

## Open the QID Integration

1. Log in to SympleHost.
2. Click your profile photo or name in the top-right corner.
3. Open **Settings**.
4. Go to **Integrations**.
5. Find **QID** under **KYC & verification**.
6. Click **Manage**.

![SympleHost Integrations page showing the QID card under KYC and verification, alongside Xero, PriceLabs, and Webhooks](/screenshots/qid-integration/integrations-qid-card.png)

## Connect or Update QID

In the **Manage QID** modal, add or confirm the template IDs from your QID dashboard.

1. Confirm the QID organisation is connected.
2. Check that the API key is present.
3. Enter the **National ID template (form ID)**.
4. Enter the **International guest template (form ID)**.
5. Click **Save**.

![Manage QID modal showing connected organisation, masked API key, national ID template form ID, and international guest template form ID](/screenshots/qid-integration/manage-qid.png)

Use the national ID template for local guests where national identity collection is required. Use the international guest template for overseas guests who need passport or international traveller details.

## What Happens After QID Is Connected

Once QID is active, SympleHost can use your configured QID templates in the guest check-in flow. This helps your team:

- Collect the right ID details before arrival.
- Keep national and international guest flows separate.
- Reduce manual follow-up for missing guest information.
- Support smoother web check-in for direct and managed reservations.

## Troubleshooting

If QID does not work as expected, check these first:

- The API key is still valid in QID.
- The national and international form IDs are copied exactly from QID.
- The QID templates are active in your QID dashboard.
- The guest is using the correct check-in link.
- Your SympleHost user has permission to manage integrations.

If you change a template in QID, return to **Settings -> Integrations -> QID -> Manage** and confirm the form ID still matches the version you want guests to use.
