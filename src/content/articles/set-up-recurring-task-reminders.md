---
title: 'Set Up Operations Automations and Task Reminders'
description: 'Use Operations automations to create repeat tasks from booking events or schedules, then use Task Reminders to notify staff before work is due or overdue.'
category: platform-guides
section: Tasks & operations
sectionOrder: 3
tags:
  - Tasks
  - Automations
  - Reminders
  - Operations
date: '2026-08-17'
draft: false
---

This guide is for **Operations automations and staff task reminders**. These tools create or remind people about operational work. They do not send guest messages.

If you are setting up guest-message automation, AI replies, Autopilot, or Concierge, start with [Get Started with Messages, AI, and Automation](/platform-guides/get-started-with-messages-ai-and-automation/) instead.

![Operations sidebar expanded showing Automations in the Operations module](/uploads/create-and-assign-tasks/01-sidebar-operations.png)

## Automations vs Task Reminders

SympleHost separates the workflow into two parts:

| Tool | What It Does | Example |
| --- | --- | --- |
| **Operations Automations** | Creates operational work automatically. | Create a checkout cleaning task after every checkout. |
| **Task Reminders** | Notifies staff about assigned work. | Remind the cleaner 1 hour before the task is due. |

Use them together when the same task should happen reliably:

1. The automation creates the task.
2. The assigned person receives reminders.
3. The manager tracks progress from **Operations → Tasks**.

## Common Automation Examples

Start with simple, high-value automations:

- checkout cleaning after every departure
- pre-arrival inspection before check-in
- monthly maintenance inspection
- owner-stay preparation
- follow-up task when a guest reports an issue
- restocking task after checkout
- provider task for scheduled maintenance

Do not automate a workflow until the manual version is clear. Create the task manually a few times first, then automate once the team knows what should happen.

## Create an Operations Automation

1. Click **Operations** in the left sidebar.
2. Open **Automations**.
3. Click **New Automation**.
4. Choose the trigger type.
5. Select the job template or task action.
6. Choose the assignee, team, provider, or fallback owner where available.
7. Set priority and due timing.
8. Save the automation.

Automation triggers can be based on booking events, service events, or schedules. Depending on your setup, this may include check-in, checkout, new booking, cancellation, daily, weekly, or monthly schedules.

## Use Job Templates With Automations

Automations work best when they create tasks from [Job Templates](/platform-guides/create-task-templates-and-checklists/).

Example checkout workflow:

1. Create a **Checkout Turnover** template in **Operations → Job Templates**.
2. Add checklist items for linen, bathrooms, restocking, photos, and damage checks.
3. Create an automation in **Operations → Automations**.
4. Set the trigger to run after checkout.
5. Attach the Checkout Turnover template.
6. Assign it to the cleaner or cleaning team.

Every checkout can now create the same structured task automatically.

## Manage Existing Automations

From **Operations → Automations**, review automations regularly.

You may be able to:

- search automations
- filter active or paused automations
- edit trigger, schedule, assignee, and template
- duplicate an automation
- pause or reactivate an automation
- review upcoming runs
- check execution history

Pause an automation instead of deleting it when the workflow is seasonal or temporarily not needed.

## Set Up Task Reminders

Task reminders are configured from Settings because they control account-level notification behavior.

1. Open the top-right profile menu.
2. Click **Settings**.
3. Open **Task Reminders**.
4. Turn on **Enable Task Reminders**.
5. Choose which reminders to send.

Common reminder options include:

- 1 day before due
- 1 hour before due
- 1 hour overdue
- 4 hours overdue
- 1 day overdue

Reminders are sent to the assigned staff member or team contact based on the notification setup available for the account.

## Good Habits

- Start with checkout cleaning and pre-arrival inspection.
- Attach templates so automated tasks include a checklist.
- Use one automation per workflow.
- Give automations clear names, such as **Checkout cleaning after departure**.
- Check overdue tasks daily after launching a new automation.
- Pause automations when a property is closed, seasonal, or under renovation.
- Review timezone settings if reminders or due times look wrong.

## Troubleshooting

### My automation did not run

Check that the automation is active, the trigger event happened, and the related reservation or schedule matches the rule.

### Tasks are created at the wrong time

Check the automation timing and your workspace timezone in **Settings → General**.

### Staff are not receiving reminders

Check **Settings → Task Reminders**, then confirm the assignee has the right phone number or notification details in their profile.

### The wrong person was assigned

Edit the automation and update the assignee. If a team member, provider, or team was removed, choose an active replacement.

### Guest messages are not being sent

This article is for Operations tasks. For guest messages, use [Set Up Automated Messages](/platform-guides/set-up-automated-messages/) or [Set Up Concierge for Guest Questions](/platform-guides/set-up-concierge-for-guest-questions/).

## Related Articles

- [Operations Module Overview](/platform-guides/operations-module-overview/)
- [Create and Assign Tasks in Operations](/platform-guides/create-and-assign-tasks/)
- [Create Task Templates and Operational Checklists](/platform-guides/create-task-templates-and-checklists/)
- [Track Task Progress and Completions](/platform-guides/track-task-progress/)
- [Get Started with Messages, AI, and Automation](/platform-guides/get-started-with-messages-ai-and-automation/)
