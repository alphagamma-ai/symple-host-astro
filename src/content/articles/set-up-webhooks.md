---
title: "Set Up Webhooks for Real-Time SympleHost Events"
description: "Create a secure webhook endpoint in SympleHost, choose reservation, message, availability, and pricing events, verify signed deliveries, and troubleshoot failures."
category: platform-guides
section: Integrations
sectionOrder: 3
tags:
  - Webhooks
  - API
  - Integrations
  - Automation
  - Developers
date: '2026-09-18'
draft: false
---

Webhooks let SympleHost notify another system as soon as something changes. Instead of repeatedly asking SympleHost whether a reservation, guest message, price, or availability has changed, your server receives an HTTPS request when the event happens.

Common uses include:

- sending new reservations into an internal dashboard or CRM
- starting a deposit or payment workflow after a booking is created
- notifying an operations system when a booking changes or is cancelled
- routing inbound guest messages into another support tool
- reacting to availability or pricing changes in a connected system

> **Webhooks require a receiving system.** You need an HTTPS endpoint built by your developer, integration partner, or automation platform. If you do not have one yet, use [webhook.site](https://webhook.site) temporarily to inspect test payloads. Do not use a temporary inspection URL as your permanent production endpoint.

## Before You Start

Make sure you have:

1. Account owner or administrator access in SympleHost.
2. An HTTPS endpoint that accepts `POST` requests and can return a successful `2xx` response quickly.
3. A secure place to store the signing secret shown after setup.
4. A developer or integration owner who can verify signatures, prevent duplicate processing, and monitor failed deliveries.
5. A clear list of the events your receiving system actually needs.

## Open API & Webhooks

1. Click your profile in the top-right corner and open **Settings**.
2. Open **Integrations**.
3. Find **API & webhooks** under **API & automation**.
4. Click **Manage**.

![SympleHost Integrations page showing the API and webhooks card under API and automation](/screenshots/webhooks/integrations-api-webhooks-card.png)

The integration drawer explains that API keys and webhooks are managed by account owners and admins. SympleHost signs webhook deliveries, retries temporary failures, and keeps a delivery log for each endpoint.

![API and webhooks integration drawer showing permissions and supported capabilities](/screenshots/webhooks/api-webhooks-drawer.png)

## Understand API Integrations and Webhooks

The management area contains two tabs:

- **API integrations** give a PMS, channel manager, or custom server permission to read or change selected SympleHost data.
- **Webhooks** send events from SympleHost to an external HTTPS endpoint when something changes.

You can use webhooks without creating a new API integration when your system only needs to receive events. Use an API integration as well when the external system must read additional records or send changes back to SympleHost.

![API integrations and webhooks page showing the API Integrations and Webhooks tabs](/screenshots/webhooks/api-integrations-hub.png)

## Create a Webhook Endpoint

1. Open the **Webhooks** tab.
2. Click **Add endpoint**.
3. Enter the receiving **Endpoint URL**.
4. Select only the events your system needs.
5. Review the sample payloads on the right.
6. Click **Create endpoint**.
7. Copy the signing secret immediately and store it securely. SympleHost shows it only once.

![Add webhook endpoint page showing the HTTPS URL, event subscriptions, signing-secret notice, and sample payloads](/screenshots/webhooks/add-webhook-endpoint.png)

### Endpoint URL Requirements

The endpoint must:

- start with `https://`
- be publicly reachable from the internet
- accept JSON `POST` requests
- return a `2xx` response when the event is accepted
- respond quickly and move slow work into a background job

SympleHost blocks private, loopback, and cloud-metadata addresses. Do not place usernames, passwords, API keys, or other credentials in the URL.

## Choose Events

| Event | Sent when | Example use |
| --- | --- | --- |
| `reservation.created` | A direct or OTA booking is created. | Start payment, CRM, notification, or operational workflows. |
| `reservation.updated` | A reservation status changes. Date-change support may depend on the current platform workflow. | Keep an external booking record and availability workflow current. |
| `reservation.cancelled` | A stay is cancelled. | Stop scheduled workflows and reopen availability in another system. |
| `message.created` | A new inbound guest message arrives. | Route the message into a support or analytics system. |
| `availability.updated` | Availability, inventory, or restrictions pushed through SympleHost change. | Refresh inventory in a connected tool. |
| `pricing.updated` | Nightly pricing pushed through SympleHost changes. | Refresh rates in a revenue or reporting system. |

Subscribe only to events you will process. This reduces unnecessary traffic and limits the guest and financial data sent to the receiving system.

## Understand the Payload

Every event uses the same outer envelope. The event `type` and the fields inside `data.attributes` change by event.

The request also includes these headers:

| Header | Purpose |
| --- | --- |
| `X-SH-Event-Type` | Identifies the event, such as `reservation.created`. |
| `X-SH-Event-Id` | A stable identifier used to prevent duplicate processing. |
| `X-SH-Timestamp` | Unix timestamp used when calculating the signature. |
| `X-SH-Signature` | HMAC-SHA256 signature in the form `v1=...`. |

Payloads can include guest and financial information. Treat them as sensitive data: encrypt stored payloads, restrict access, avoid logging full bodies, and keep only what your integration needs.

## Verify Every Delivery

Never trust a webhook only because it reached a secret-looking URL. Verify its signature before processing it.

1. Read the raw request body without changing whitespace or parsing and re-serializing it.
2. Read `X-SH-Timestamp`.
3. Build the signed value as `<timestamp>.<raw_body>`.
4. Calculate an HMAC-SHA256 hex digest using the endpoint's signing secret.
5. Compare `v1=<digest>` with `X-SH-Signature` using a constant-time comparison.
6. Reject invalid signatures and timestamps that are outside your accepted tolerance.
7. Record `X-SH-Event-Id` and ignore any event ID you have already processed.

Your developer should keep the signing secret in a secrets manager or protected environment variable. Never put it in frontend code, source control, support messages, screenshots, or application logs.

## Test Before Going Live

For a first test:

1. Create a temporary URL at [webhook.site](https://webhook.site).
2. Add that HTTPS URL as a SympleHost endpoint.
3. Subscribe to one low-volume event, such as `reservation.created`.
4. Trigger a safe test event in SympleHost.
5. Inspect the headers and JSON payload at webhook.site.
6. Confirm your production server accepts the same shape and verifies the signature.
7. Create a new endpoint using the production URL, save its new signing secret, and disable or delete the temporary endpoint.

Do not create a real guest booking purely for testing when a controlled test property or non-commercial date is available.

## Monitor Deliveries

Open an endpoint to review its delivery history, including:

- event type and event ID
- delivery status
- HTTP response code
- number of attempts
- delivery time
- delivered and failed totals
- endpoint success rate

Delivery statuses include **pending**, **delivering**, **delivered**, **failed · retrying**, and **dead**.

Your endpoint should acknowledge a valid event with a `2xx` response as soon as it has safely queued the work. Do not wait for a long downstream workflow to finish before responding.

## Retries, Replay, and Automatic Protection

SympleHost retries temporary failures with exponential backoff. Retries cover server errors, rate limiting, timeouts, connection failures, and similar temporary problems.

Important behavior:

- A non-`429` response in the `4xx` range is treated as a permanent request problem and is not repeatedly retried.
- Deliveries are **at least once**. Your receiver must de-duplicate using `X-SH-Event-Id`.
- **Replay** sends the delivery again with the same event ID. This lets you recover after fixing your receiver without processing the event twice.
- After eight consecutive failures, SympleHost disables the endpoint and emails the team.
- Fix the receiving server before reactivating the endpoint. The consecutive-failure count resets when it is re-enabled.

When you manually disable an endpoint, new events are not sent while it is off and cannot be replayed later. Disable only when you intentionally want to pause the integration.

## Troubleshooting

### The endpoint cannot be created

Confirm the URL starts with `https://`, contains no credentials, and does not point to localhost, a private IP address, or cloud metadata. The receiving server must be publicly reachable.

### Deliveries show failed or dead

Open the endpoint and inspect the response code and attempts. Check your server logs using the event ID, fix the receiver, and use **Replay** where appropriate.

### The same event ran twice

At-least-once delivery means duplicates are possible during retries or manual replay. Store each `X-SH-Event-Id` before running business logic and return success when that ID has already been processed.

### Signature verification fails

Use the exact raw request body and calculate HMAC-SHA256 over `<X-SH-Timestamp>.<raw_body>`. Confirm you are using the signing secret for that specific endpoint and compare against the value after `v1=`.

### The endpoint was disabled automatically

Eight consecutive failures trigger automatic protection. Fix the server first, then click **Reactivate**. If the server continues failing, SympleHost can disable it again.

### An expected event never arrived

Confirm the endpoint is active and subscribed to that event type. Events generated while an endpoint is manually disabled are not queued for later delivery.

## Related Articles

- [SympleHost Partner API Reference](/ai-and-api/symplehost-partner-api-reference/)
- [Connect SympleHost to Claude & Other AI Assistants](/ai-and-api/connect-symplehost-to-ai-assistants/)
- [How to Import Airbnb and Connect OTA Channels](/getting-started/import-listings-from-ota/)
- [How to Manage Bookings & Your Calendar](/platform-guides/manage-bookings-and-calendar/)
