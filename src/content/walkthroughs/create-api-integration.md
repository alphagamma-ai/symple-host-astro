---
title: "How to Create an API Integration and Generate API Keys"
description: "Create an API integration from Settings → Integrations, choose an access level and scopes, and generate your live Key ID, Secret, and Signing secret."
videoFile: "/videos/symplehost-walkthrough-create-api-integration.mp4"
poster: "/screenshots/videos/walkthrough-create-api-integration.png"
duration: "1 min 4 sec"
order: 82
draft: false
---

Use this walkthrough when you want to connect a PMS, channel manager, or your own server to SympleHost. It shows how to create an API integration, choose what it can access, and generate the API keys your tool will use.

## What You’ll Do

1. Open **Settings → Integrations** and choose **API & webhooks**.
2. Click **Add API Integration**.
3. Pick the tool you are connecting.
4. Choose an access level: **Read only**, **Sync** (recommended), or **Full**. Open **Fine-tune scopes** if you need to switch individual scopes on or off.
5. Click **Continue**, choose the environment, and give the integration a name.
6. Create the integration and copy your **Key ID**, **Secret**, and **Signing secret**.
7. Tick the box confirming you stored the secrets safely, then click **Done**.

## Good To Know

Only Account Owners and Account Admins can create API integrations. The Secret and Signing secret are **shown once**. SympleHost keeps only a hash, so store them somewhere safe right away. If you lose them, rotate the integration to get new ones. Scopes marked **Signs** touch guest data or change your account, so every request using them must be signed. To get events pushed to your server, see [Set Up Webhooks for Real-Time SympleHost Events](/platform-guides/set-up-webhooks/).
