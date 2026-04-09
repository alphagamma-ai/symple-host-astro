---
title: 'How to Set Up Recurring Task Reminders'
description: 'Automate repeat tasks like post-checkout cleanings or monthly inspections, and configure WhatsApp reminders so nothing falls through the cracks.'
category: platform-guides
tags:
  - Tasks
  - Automations
  - Reminders
  - WhatsApp
date: '2026-04-09'
draft: false
---

## What Are Automations and Task Reminders?

SympleHost has two features that work together to keep your operations running on autopilot:

1. **Automations** — automatically create tasks or send notifications when something happens (like a guest checking out) or on a recurring schedule (like every Monday)
2. **Task Reminders** — send WhatsApp notifications to your staff when tasks are approaching their due date or overdue

Think of automations as the thing that creates the work, and task reminders as the nudge that makes sure the work gets done on time.

---

## How to Create an Automation

1. Click **Operations** in the sidebar to expand it.

2. Click **Automations**.

3. Click **New Automation**.

4. Choose the trigger type:

   - **When something happens** — triggered by booking events (e.g., a checkout or new booking)
   - **On a schedule** — runs at regular intervals (daily, weekly, or monthly)

---

### Event-Based Automations

If you chose **"When something happens"**, select the trigger event:

- **booking checks out** — fires when a guest checks out
- **booking checks in** — fires when a guest checks in
- **booking is created** — fires when a new reservation is made
- **booking is cancelled** — fires when a booking is cancelled

Then configure the action:

- **Action type** — choose **assign task** or **send notification**
- **Select job** — pick a job template (e.g., Checkout Cleaning)
- **Assignee** — choose a specific person, **Anyone available**, or a team (Cleaning team, Maintenance team, Operations team)
- **Priority** — Low, Medium, or High
- **Set due date** — e.g., "2 hours after trigger"
- **Message** — add instructions for the assignee (placeholder: "Message to send to the staff member...")
- **Send WhatsApp reminders** — toggle on to send reminders:
  - **1 hour before due**
  - **1 day before due**
  - **When task is overdue**

Click **Create Automation** to save.

---

### Schedule-Based (Recurring) Automations

If you chose **"On a schedule"**, set the frequency:

- Every **X days** — runs on a regular daily cycle
- Every **X weeks** — runs on a weekly cycle
- Every **X months** — runs on a monthly cycle

Then configure the same action fields as above (job template, assignee, priority, message).

💡 **Tip:** For weekly tasks, pick a schedule that gives your team enough lead time. For example, if you want a deep clean done by Friday, schedule the automation to create the task on Wednesday.

---

## Managing Your Automations

Your automations appear in a list showing their status, last run time, and total runs. Use the filter tabs to view:

- **All** — every automation
- **Event-based** — automations triggered by booking events
- **Recurring** — automations on a schedule

### Automation Actions

Each automation has these options in its menu:

- **Edit** — update the trigger, frequency, assignee, or other settings
- **Duplicate** — copy an existing automation as a starting point
- **Delete** — permanently remove the automation

From the detail panel, you also have:

- **Pause** / **Activate** — temporarily stop or restart an automation
- **Test Run** — simulate the trigger to verify it works correctly. You'll see results showing the task created, assignee, priority, and property.
- **Execution History** — view past runs with success/failure details

---

## Setting Up Task Reminders (WhatsApp Notifications)

Task Reminders are a separate setting that controls when staff receive WhatsApp notifications about their upcoming or overdue tasks.

1. Go to **Settings** → **Task Reminders** (under the **Automation** section).

2. Toggle **Enable Task Reminders** on to activate the system.

3. Configure which reminders to send:

   **Before Due:**
   - **1 Day Before** — "Remind staff when a task is due within the next 24 hours"
   - **1 Hour Before** — "Remind staff when a task is due within the next hour"

   **Overdue:**
   - **1 Hour Overdue** — "Alert staff when a task is 1 hour past due"
   - **4 Hours Overdue** — "Alert staff when a task is 4 hours past due"
   - **1 Day Overdue** — "Alert staff when a task is 1 day past due"

Toggle on the reminders you want. Changes are saved automatically.

---

## Quick Start Templates

When creating your first automations, SympleHost offers pre-built templates to get you started quickly:

- **Post-checkout cleaning** — "Assign a cleaning job after each checkout"
- **Pre-checkin preparation** — "Prepare the property before guest arrival"
- **Monthly maintenance** — "Schedule regular property inspections"
- **Checkout notification** — "Notify staff before checkout happens"

---

## Troubleshooting

### My automation isn't triggering
Check that the automation shows **Active** status (not **Paused**). For event-based automations, make sure the triggering event actually happened — for example, a checkout trigger only fires when a booking status changes to completed.

### Tasks are being created at the wrong time
For recurring automations, double-check the frequency and schedule settings. Also verify your account's timezone under **Settings** → **General** — automations run based on your account timezone.

### Staff aren't receiving WhatsApp reminders
Check two things: (1) **Task Reminders** is enabled under **Settings** → **Task Reminders**, and (2) the specific reminder toggles are turned on. Also make sure the staff member has WhatsApp connected and their phone number is correct in their profile.

### The wrong person is getting assigned
Open the automation and check the assignee setting. If the team member has been removed from your account, the automation may fail — update the assignee to a current team member.

---

Related Articles
- How to Create & Assign Tasks to Your Team
- How to Track Task Progress & Completion
- How to Add Team Members & Assign Roles
