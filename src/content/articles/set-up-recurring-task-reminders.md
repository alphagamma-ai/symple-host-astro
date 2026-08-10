---
title: 'Operations Automations: Set Up Recurring Task Reminders'
description: 'Use Operations automations to create repeat tasks and Task Reminders to notify staff before work is due or when it becomes overdue.'
category: platform-guides
section: Tasks & operations
sectionOrder: 2
tags:
  - Tasks
  - Automations
  - Reminders
  - WhatsApp
date: '2026-08-10'
draft: false
---

**This guide is for Operations task automations and staff reminders. These automations create or remind people about operational work; they do not send guest messages.**

If you are setting up guest-message automation, AI replies, Autopilot, or Concierge, start with [Get Started with Messages, AI, and Automation](/platform-guides/get-started-with-messages-ai-and-automation/) instead.

---

## Operations Automations vs Task Reminders

SympleHost separates the work into two parts:

- **Automations** create work automatically, such as a checkout cleaning after every departure.
- **Task Reminders** notify staff when assigned work is due soon or overdue.

Use both together for repeatable operations: the automation creates the task, and reminders help the assignee complete it on time.

## How This Differs From Messages Automation

Operations automations are not the same as guest messaging automations.

| Area | What it controls | Example |
| --- | --- | --- |
| **Operations Automations** | Tasks and operational work | Create a checkout cleaning task after every departure |
| **Task Reminders** | Staff notifications for due or overdue tasks | Remind the assigned cleaner 1 hour before a task is due |
| **Messages Automated Messages** | Scheduled guest messages | Send check-in instructions 24 hours before arrival |
| **Concierge** | AI answers to live guest questions | Answer "What is the Wi-Fi password?" while the team is offline |

Use this article when the outcome should be a task, checklist, assignment, or staff reminder. Use the Messages guides when the outcome should be a guest message or AI reply.

---

## Create an Automation

1. Click **Operations** in the sidebar.
2. Open **Automations**.
3. Click **New Automation**.
4. Choose the trigger type.
5. Select the job template or action.
6. Choose the assignee, team, provider, or fallback owner where available.
7. Set priority and due timing.
8. Save the automation.

Event-based automations can run from booking events such as reservation created, check-in, checkout, or cancellation. Scheduled automations can run daily, weekly, or monthly.

---

## Use Job Templates with Automations

Automations work best when they create tasks from **Job Templates**.

Example:

1. Create a **Checkout Cleaning** job template in **Operations → Job Templates**.
2. Add checklist items for linen, bathrooms, restocking, photos, and damage checks.
3. Create an automation in **Operations → Automations**.
4. Set it to run after checkout.
5. Attach the Checkout Cleaning template.
6. Assign it to the cleaner or cleaning team.

Every checkout can now create the same structured task automatically.

---

## Manage Existing Automations

From **Operations → Automations**, you can:

- search automations
- filter active or paused automations
- edit trigger, schedule, assignee, and job template
- duplicate an automation
- pause or reactivate an automation
- review scheduled upcoming runs
- check execution history

Pause an automation instead of deleting it when the workflow is seasonal or temporarily not needed.

---

## Set Up Task Reminders

1. Open the top-right profile menu.
2. Click **Settings**.
3. Open **Task Reminders**.
4. Turn on **Enable Task Reminders**.
5. Choose which reminders to send.

Reminder options include:

- 1 day before due
- 1 hour before due
- 1 hour overdue
- 4 hours overdue
- 1 day overdue

Reminders are sent to the assigned staff member or team contact based on the notification setup available for that account.

---

## Good First Automations

Start with:

- checkout cleaning after every checkout
- pre-arrival inspection before check-in
- monthly maintenance inspection
- owner-stay preparation
- follow-up task when a guest reports an issue

Keep the first version simple. Add more conditions once your team trusts the workflow.

---

## Troubleshooting

### My automation did not run
Check that the automation is active, the trigger event happened, and the related reservation or schedule matches the rule.

### Tasks are created at the wrong time
Check the automation schedule and your workspace timezone in **Settings → General**.

### Staff are not receiving reminders
Check **Settings → Task Reminders**, then confirm the assignee has the right phone number or notification details in their profile.

### The wrong person was assigned
Edit the automation and update the assignee. If a team member, provider, or team was removed, choose an active replacement.

---

## Related Articles

- [Get Started with Messages, AI, and Automation](/platform-guides/get-started-with-messages-ai-and-automation/)
- [Autopilot, Automated Messages, and Concierge: What Each One Does](/platform-guides/setting-up-autopilot/)
- [How to Create & Assign Tasks to Your Team](/platform-guides/create-and-assign-tasks/)
- [How to Track Task Progress & Completion](/platform-guides/track-task-progress/)
- [How to Add Team Members & Assign Roles](/getting-started/add-team-members-and-roles/)
