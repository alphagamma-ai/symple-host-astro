---
title: Connect SympleHost to Claude & Other AI Assistants (MCP)
description: Connect your SympleHost account to Claude (and any MCP-capable AI tool) so you can ask about your properties, bookings, and guests in plain language — and let your assistant draft replies, manage tasks, and update your calendar with your permission. Step-by-step setup for Claude on the web and Claude Desktop, what the assistant can see and do, and how your data stays safe.
category: platform-guides
section: AI & integrations
sectionOrder: 1
tags:
  - AI
  - MCP
  - Claude
  - Integrations
  - Automation
date: '2026-06-18'
draft: false
---

<!--
AUTHOR NOTE (remove before publishing):
This article is a DRAFT (draft: true) pending the production rollout.
Before flipping draft: false, confirm:
  1. The custom domain https://mcp.symplehost.ai is attached and serving the MCP.
  2. The MCP server is pointed at PRODUCTION Rails (not staging) so real hosts can log in.
Screenshots to capture (place in /public/screenshots/connect-symplehost-to-ai-assistants/):
  - connectors-add-custom-connector.png  → Claude Settings → Connectors → Add custom connector dialog with the URL pasted
  - symplehost-login-page.png            → the SympleHost-hosted sign-in page that opens during Connect
  - consent-permissions-screen.png       → the permission/consent screen showing read + optional "take actions" access
  - connected-confirmation.png           → the connector showing as Connected in Claude
-->

**Connect your SympleHost account to Claude — or any AI assistant that supports MCP — and just ask about your properties in plain language. "Which guests check in this weekend?" "Draft a reply to the guest asking about late check-out." "Block June 20–22 on the Bali villa." Your assistant reads your real SympleHost data and, with your permission, takes action on it.**

---

> **TL;DR:** SympleHost offers a secure connector (built on the open **MCP** standard) that links your account to AI assistants like Claude. To set it up, open your AI app's connector settings, paste **`https://mcp.symplehost.ai/mcp`**, and sign in with your SympleHost email and password. The whole thing takes about two minutes. By default the assistant gets **read-only** access — it can look things up but can't change anything. You can also grant **action** access (reply to guests, manage tasks, update calendar and pricing) on the permission screen. Your password is entered on SympleHost's own login page — the AI never sees or stores it — and the assistant can only ever see what your own role lets you see in the web app. Remove the connector any time to cut off access instantly.

---

## What Is MCP, in Plain Terms?

**MCP** (Model Context Protocol) is an open standard that lets an AI assistant talk to an outside service — securely and only with your permission. Think of it as a **universal adapter** between your AI app and SympleHost.

Without MCP, an AI assistant has no idea what's in your SympleHost account. With the SympleHost connector switched on, your assistant can look up your listings, bookings, guests, conversations, and tasks — and, if you allow it, do things like reply to a guest or block a date.

A few things worth knowing up front:

- **It's the same data you already see.** The assistant connects *as you*. It can only see and do what your SympleHost role allows — the same listings, the same guest details (with the same privacy masking) you'd see if you logged in to the web app yourself.
- **You're always in control.** Read-only is the default. Anything that *changes* your account requires you to grant permission first, and you can revoke the whole connection in one click.
- **It works with more than just Claude.** This guide focuses on Claude (the most common choice), but the same connector works with any AI tool that supports remote MCP — see [Using Other AI Tools](#using-other-ai-tools-advanced) near the end.

---

## What You Can Do With It

Once connected, you talk to your account in normal language. Here are real examples of what to ask.

### Ask about your business (read-only — always available)

- "How many properties do I have, and what are they?"
- "Which guests check in this weekend?"
- "Show me all bookings for the Seminyak villa next month."
- "Is the beach house available July 10–14, and what's the nightly rate?"
- "What's the latest unanswered message in my inbox?"
- "List my open tasks by priority."
- "Summarise this guest's conversation history before they arrive."

### Take action (requires "action" permission — you approve this during setup)

- "Draft a friendly reply to the guest asking about early check-in." *(then: "Send it.")*
- "Create a cleaning task for the Bali villa on Friday and mark it high priority."
- "Block June 20–22 on the mountain cabin — I'm using it personally."
- "Set the nightly price to $180 for the long weekend on the lake house."

Here's the full picture of what the assistant can access:

**What it can look up (read)**

| Area | What the assistant can see |
|---|---|
| Account | Your profile, account, subscription, and what your role allows |
| Listings | Your properties — search, list, and full details |
| Bookings & reservations | Bookings and OTA reservations, filtered by property, status, or dates — **read-only by design** |
| Availability & calendar | Per-day availability, nightly rates, blocked dates, and "is X–Y free?" checks |
| Inbox | Your unified conversations across WhatsApp, email, SMS, Instagram, Facebook, and OTAs |
| Guests | Your guest list and profiles (personal details masked according to your role) |
| Tasks | Operational tasks, filtered by status and priority |

**What it can do (action — only if you grant permission)**

| Action | What it does |
|---|---|
| Reply to a guest | Sends a message in an existing conversation, on that guest's channel |
| Manage tasks | Creates tasks; updates status, priority, or assignee; marks them complete |
| Block / unblock dates | Blocks or frees a calendar date |
| Update pricing | Sets the nightly price for specific dates |

> 💡 **Bookings are read-only on purpose.** Your assistant can look at bookings and reservations all day long, but it can never create, change, or cancel one. That's a deliberate safety decision — booking changes always go through SympleHost or your channel.

---

## What You'll Need Before You Start

- **A SympleHost account with a password.** You'll sign in with your SympleHost email and password during setup.
  - **Signed in with Google?** Set a password first: **SympleHost → Settings → Security**. Connecting with Google sign-in directly is on our roadmap, but for now the connector needs an email + password login. (You can keep using Google to log in to the web app — this is just for the AI connector.)
- **An AI app that supports MCP connectors.** This guide covers **Claude on the web** (`claude.ai`) and **Claude Desktop**. Other MCP-capable tools work too — see [the advanced section](#using-other-ai-tools-advanced).
- **Two minutes.** That's genuinely all the setup takes.

> 💡 **Your role decides what the assistant sees.** The connector respects your SympleHost permissions exactly. If your role hides certain listings or masks guest contact details in the web app, the assistant sees the same restricted view. Connecting an AI assistant never gives it more access than you already have.

---

## How to Connect (Claude on the Web)

### Step 1: Open Claude's connector settings

1. Go to **[claude.ai](https://claude.ai)** and sign in.
2. Open **Settings**, then go to **Connectors**. In the current Claude interface, connectors live under **Customize → Connectors** — if Settings shows a *"Connectors have moved to Customize"* note, click through to get there.
3. Click the **+** button at the top of the connectors list and choose **Add custom connector**.

![Claude's Settings → Connectors screen with the "Add custom connector" dialog open and the SympleHost MCP URL pasted into the URL field](/screenshots/connect-symplehost-to-ai-assistants/connectors-add-custom-connector.png)

### Step 2: Paste the SympleHost connector URL

In the dialog, give it a **Name** (e.g. "SympleHost") and paste this into the **Remote MCP server URL** field:

```
https://mcp.symplehost.ai/mcp
```

You can leave **Advanced settings** (the optional OAuth client ID/secret) empty. Click **Add**.

> ⚠️ **Use the exact URL,** including the `/mcp` at the end. If you leave it off or mistype it, the connection won't complete.

### Step 3: Sign in with your SympleHost account

A SympleHost sign-in page opens. Enter your **SympleHost email and password** — the same ones you use for the web app — and continue.

![The SympleHost-hosted sign-in page that opens during the connect flow, asking for email and password](/screenshots/connect-symplehost-to-ai-assistants/symplehost-login-page.png)

> 🔒 **You're typing your password into SympleHost, not into Claude.** This login page is served by SympleHost itself. The AI app never sees, receives, or stores your password — it only receives a secure, revocable access token after you sign in. More on this in [Is My Data Safe?](#is-my-data-safe)

### Step 4: Choose what the assistant is allowed to do

After signing in, you'll see a **permission screen**. This is where you decide how much the assistant can do:

- **Read access** is always included — looking up listings, bookings, guests, the inbox, and tasks.
- **Action access** is optional — replying to guests, managing tasks, and updating your calendar and pricing. Approve this only if you want the assistant to make changes on your behalf.

Pick what you're comfortable with and confirm.

![The permission/consent screen showing read access plus the optional "take actions" permission, with an approve button](/screenshots/connect-symplehost-to-ai-assistants/consent-permissions-screen.png)

> 💡 **Not sure?** Start with read-only. You can always reconnect later and grant action access once you've seen how it works.

### Step 5: You're connected

You'll land back in Claude with **SympleHost** listed as a connected connector. That's it — start a new chat and ask it something.

![The Claude connectors list showing SympleHost as "Connected"](/screenshots/connect-symplehost-to-ai-assistants/connected-confirmation.png)

---

## How to Connect (Claude Desktop)

Claude Desktop uses the same connector flow:

1. Open **Claude Desktop**.
2. Go to **Settings → Connectors**.
3. Click **Add custom connector**.
4. Paste **`https://mcp.symplehost.ai/mcp`** and confirm.
5. Sign in with your SympleHost email and password, then choose read-only or read + action access on the permission screen.

Once it shows as connected, you can use it in any conversation.

---

## Read vs. Action: Choosing What It Can Do

It helps to think of the connection in two levels:

- **Read-only** — the assistant can answer questions and summarise, but it cannot change anything in your account. This is the default and a great way to start.
- **Read + action** — the assistant can also reply to guests, manage tasks, and update your calendar and pricing — but only when you ask it to, and (for messages) only after you confirm.

A few guardrails worth repeating:

- **You set the level during setup.** If you only granted read access and later want the assistant to take action, just remove the connector and reconnect, this time approving action access.
- **Bookings are always read-only**, regardless of what you grant.
- **Pricing and date changes are explicit.** The assistant updates a date or price only when you tell it to, for the specific dates you name.

---

## Your First Conversation

To confirm everything works, start a new chat in Claude and try a simple read request:

> *"Using SympleHost, how many properties do I have and what are their names?"*

Claude will ask to use the SympleHost connector the first time (approve it), then answer with your real listings. Once that works, try a more useful one:

> *"Which of my properties have guests checking in within the next 7 days?"*

If you granted action access, test a safe write:

> *"Create a task to restock toiletries at [your property] tomorrow, low priority."*

…then check **Tasks** in SympleHost — the task should be there.

> 💡 **Mention "SympleHost" in your prompt** when you want the assistant to use your account data, especially in the first few messages. Once it's in the flow of the conversation, it'll keep using the connector naturally.

---

## Is My Data Safe?

Short answer: yes — the connector was designed so that linking an AI assistant never weakens your account security. Here's how, in plain terms:

- **Your password is never shared with the AI.** You type it into SympleHost's own sign-in page. The AI app only ever receives a temporary, revocable access token — never your password, and never your underlying SympleHost login.
- **The assistant only sees what *you* can see.** It connects as you, so your existing permissions, the listings you can access, and the privacy masking on guest details all apply exactly as they do in the web app.
- **Actions need your permission.** Read-only is the default. Anything that changes your account requires you to grant action access during setup — and sending a guest message is something you confirm.
- **Disconnecting cuts access immediately.** Remove the connector in your AI app and the connection is revoked on SympleHost's side right away. No lingering access.
- **Bank-grade handling under the hood.** Access tokens are encrypted at rest, and connections use modern OAuth 2.1 security (the same family of standards behind "Sign in with…" buttons across the web).

> 🔒 **Rule of thumb:** the connector can never do more than *you* can do in SympleHost, and you can pull the plug any time.

---

## Using Other AI Tools (Advanced)

The SympleHost connector is built on the open MCP standard, so it isn't limited to Claude. Any AI tool that supports **remote MCP connectors with sign-in** can use the same URL:

```
https://mcp.symplehost.ai/mcp
```

- **Claude Code** (command line) — add it in one line:
  ```bash
  claude mcp add --transport http symplehost https://mcp.symplehost.ai/mcp
  ```
  The first tool call opens the SympleHost sign-in flow in your browser.
- **ChatGPT** (developer-mode connectors), **Cursor**, and other MCP-capable clients — add the same URL as a custom/remote MCP connector and sign in when prompted. The exact menu names differ per app, but the flow is the same: paste the URL → sign in with your SympleHost email and password → approve access.

The security model is identical no matter which tool you use: SympleHost handles the login, the tool gets a revocable token, and you can disconnect any time.

---

## How to Disconnect

To stop an AI assistant from accessing your SympleHost account:

1. Open the connector settings in your AI app (e.g. **Claude → Settings → Connectors**).
2. Find **SympleHost** and **remove / delete** the connector.

That immediately revokes access on SympleHost's side — the token stops working at once. To use the assistant with your account again later, just reconnect with the steps above.

---

## Troubleshooting

### "Invalid email or password" when signing in
- Double-check you're using your **SympleHost** email and password (not your AI app's login).
- **Sign in with Google for SympleHost?** You need to set a password first: **SympleHost → Settings → Security**. Then retry the connection.
- Too many failed attempts in a row will pause logins briefly for security — wait a few minutes and try again.

### The connection won't add / "couldn't connect"
- Make sure the URL is exactly **`https://mcp.symplehost.ai/mcp`**, including the `/mcp` ending and `https://`.
- Try again in a few moments — a momentary network hiccup can interrupt the sign-in popup.

### The assistant says it can't do something / "doesn't have permission"
- That action probably needs **action access**, which you may not have granted. Remove the connector and reconnect, approving action access on the permission screen.
- Remember **bookings are read-only** — the assistant can read them but never change them, by design.

### The assistant can't see a property or a guest's contact details
- The connector respects your SympleHost role. If your role can't see that listing, or masks guest contact info in the web app, the assistant sees the same limited view. Ask an Account Admin if you think your permissions need adjusting.

### It answers from general knowledge instead of my account
- Mention **"SympleHost"** in your prompt (e.g. *"Using SympleHost, list my…"*) so it knows to use your connected account, and approve the connector if it asks.

---

## Key Takeaways

- The SympleHost connector links your account to Claude (and other MCP-capable AI tools) using the open **MCP** standard.
- Setup is one URL — **`https://mcp.symplehost.ai/mcp`** — plus your SympleHost email and password, in about two minutes.
- **Read-only by default;** grant **action access** during setup if you want the assistant to reply to guests, manage tasks, and update your calendar and pricing.
- Your **password is never shared with the AI**, the assistant only sees **what your role allows**, and **bookings stay read-only**.
- **Disconnect any time** by removing the connector — access is revoked instantly.

---

## Related Articles

- [Connecting WhatsApp, Instagram & Facebook Messenger](/platform-guides/connecting-messaging-integrations)
- [Setting Up Autopilot — Automate Guest Messaging](/platform-guides/setting-up-autopilot)
- [How to Use the Inbox to Communicate with Guests](/platform-guides/inbox-communicate-with-guests)
- [Navigating SympleHost](/getting-started/navigating-symplehost)
