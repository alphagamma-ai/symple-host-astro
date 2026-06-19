---
title: SympleHost Partner API Reference
description: Learn what the SympleHost Partner API is for, which data it exposes, how authentication works, and where developers can open the full API reference.
category: ai-and-api
section: Developer API
sectionOrder: 2
tags:
  - API
  - Partner API
  - Integrations
  - Developers
date: '2026-06-19'
draft: false
---

**The SympleHost Partner API gives approved technical partners a controlled way to connect external systems to SympleHost data — including properties, reservations, transactions, conversations, and messages.**

---

> **TL;DR:** Use the Partner API when an approved third-party system needs structured access to SympleHost account data. The API is scoped per account, uses API keys, and separates low-risk read access from sensitive access with stronger HMAC signing. Hosts should not use this for day-to-day setup; this is for developers and integration partners.

---

## Who This Is For

This guide is for:

- PMS partners integrating with SympleHost
- Revenue management or operations tools that need structured account data
- Internal developers testing partner-facing API access
- Technical teams building approved integrations for SympleHost customers

If you are a host trying to connect WhatsApp, Instagram, Facebook Messenger, PriceLabs, or an AI assistant, this is probably not the guide you need. Start with one of these instead:

- [Connecting WhatsApp, Instagram & Facebook Messenger](/platform-guides/connecting-messaging-integrations)
- [SympleHost + PriceLabs: Revenue Management Integration](/integrations/pricelabs-integration)
- [Connect SympleHost to Claude & Other AI Assistants (MCP)](/ai-and-api/connect-symplehost-to-ai-assistants)

---

## What the Partner API Covers

The Partner API currently documents endpoints for these areas:

| Area | What developers can work with |
|---|---|
| Reservations | Pull reservation feeds, retrieve individual reservations, and filter by status, dates, or source platform |
| Transactions | Read financial transaction records when the API key has the right financial scope |
| Properties | List and retrieve SympleHost properties, including parent listings and unit relationships |
| Property linking | Store an external partner reference against a SympleHost listing |
| Conversations | Read unified inbox conversations from connected channels |
| Messages | Read messages inside a conversation, subject to message-content permissions |

The API is designed as a partner integration surface, not a replacement for the SympleHost web app. It returns a stable, scoped subset of account data that external systems can safely consume.

---

## Authentication Model

Partner API access is controlled with per-account API keys. Each key has explicit scopes that decide what it can read or write.

There are two authentication modes:

| Mode | When to use it |
|---|---|
| HTTP Basic | Read-only, non-sensitive scopes |
| HMAC-SHA256 | Sensitive scopes, write actions, guest contact data, message content, transactions, pricing, availability, and property linking |

For Basic auth, the request uses:

```txt
Authorization: Basic base64(key_id:secret)
```

For HMAC auth, developers sign the request with the key's signing secret and send these headers:

```txt
X-SH-Key-Id
X-SH-Timestamp
X-SH-Signature
X-SH-Nonce
```

The signature is built from the request method, full path, timestamp, and body hash. This prevents sensitive requests from being replayed or modified in transit.

---

## Sensitive Data and Scopes

The API is intentionally strict about guest and financial data.

Sensitive scopes include:

- `guest_name:read`
- `guest_contact:read`
- `message_content:read`
- `transactions:read`
- `reservations:write`
- `pricing:write`
- `availability:write`
- `properties:link`
- `messaging:send`

If a key does not have permission for a field, the response masks that field instead of silently exposing it. This is important for partner apps because the same API can support different permission levels without changing the endpoint shape.

---

## API Conventions

Developers should expect these conventions:

- **Base path:** `/api/v1/partner`
- **Media type:** `application/vnd.symplehost.partner.v1+json`
- **Pagination:** keyset cursor pagination using `meta.next_cursor`
- **Versioning:** responses include `meta.payload_version`
- **Errors:** JSON API-style `errors` envelope with stable machine-readable codes
- **PII masking:** restricted fields return masked values and are listed in response metadata

For sync workflows, seed the first request with `updated_since`, then follow the cursor returned by `meta.next_cursor`. Feeds are designed to be at-least-once, so partner systems should deduplicate by record ID.

---

## Open the Full API Reference

The full interactive reference is maintained from the platform app's OpenAPI spec:

- [Open the Partner API reference](https://platform.symplehost.ai/partner-api-scalar.html)
- [Open the standalone Partner API reference](https://platform.symplehost.ai/partner-api.html)
- [Download the OpenAPI spec](https://platform.symplehost.ai/partner-api/openapi.yaml)

Use the full reference for endpoint details, request parameters, response schemas, and code samples.

> **Note:** HMAC-protected endpoints may not work directly from an interactive "try it" console unless the client can generate the correct request signature. For sensitive endpoints, use the code samples or your own API client.

---

## Related Articles

- [Connect SympleHost to Claude & Other AI Assistants (MCP)](/ai-and-api/connect-symplehost-to-ai-assistants)
- [Connecting WhatsApp, Instagram & Facebook Messenger](/platform-guides/connecting-messaging-integrations)
- [SympleHost + PriceLabs: Revenue Management Integration](/integrations/pricelabs-integration)
