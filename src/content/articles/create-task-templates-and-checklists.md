---
title: 'Create Task Templates and Operational Checklists'
description: 'Create reusable job templates, copy a master checklist for each property, customize instructions, reorder sections, and carry the correct checklist into every task.'
category: platform-guides
section: Tasks & operations
sectionOrder: 2
tags:
  - Task Templates
  - Checklists
  - Operations
  - Turnovers
date: '2026-09-21'
draft: false
---

Use **Operations → Task Templates** to create reusable checklists for work your team repeats. Templates help every cleaner, inspector, maintenance worker, or provider follow the same standard each time.

For multiple properties, the most useful setup is to build one strong master checklist, make a copy for each property, and customize only what is different. When you later create a task, select that property's template and its saved instructions and checklist items come through automatically.

![Task Templates library showing the master Airbnb turnover checklist and its copy icon](/screenshots/task-template-workflow/template-library-copy.png)

## When to Use a Task Template

Create a template for anything that happens more than once, especially:

- checkout turnovers
- pre-arrival inspections
- linen and towel checks
- restocking
- monthly maintenance
- pool or garden checks
- owner-stay preparation
- damage inspections
- safety checks
- service setup or cleanup

Templates save time, but the bigger value is consistency. They make it clear what "done" means.

## Choose the Right Template Structure

There are two good ways to organize templates across several properties.

### Use one shared template when every property works the same way

Reuse one template when the checklist, supplies, access process, room layout, and proof requirements are genuinely identical. This works well for standardized rooms or units in the same building.

For example, one **Standard Room Turnover** template could be used for every room when they all have the same linen count, amenities, layout, and cleaning standard.

### Use one master template and create a copy for each property

Choose this approach when most of the process is shared but each property has a few important differences.

1. Build a complete master template, such as **Master Checkout Turnover**.
2. On the template card, select the **copy icon** beside the active toggle.
3. Rename the copy clearly, such as **Checkout Turnover - Turner Apartment**.
4. Add that property's access details, room-specific steps, supply locations, linen counts, reference photos, and final checks.
5. Repeat for the other properties.
6. Keep the master as the starting point for future properties.

This avoids rebuilding 40 or 70 common checklist items every time, while still giving the cleaner the exact instructions for the property they are entering.

> **Recommended naming:** use **Task type - Property name**, for example **Checkout Turnover - Turner**, **Checkout Turnover - Harbour View**, and **Monthly Inspection - Turner**.

## Create a Task Template

1. Go to **Operations → Task Templates**.
2. Click **Create Task Template** or **New Template**.
3. Add the template name, such as **Checkout Turnover**.
4. Choose a category, such as **Cleaning**, **Maintenance**, **Inspection**, or **Custom**.
5. Set the default priority.
6. Add estimated duration if you want to plan workload.
7. Add default consumable cost if the work usually uses supplies.
8. Add checklist items.
9. Save the template.

## Customize a Copied Template for One Property

Open the copied template and change only the information that is specific to that property.

Useful property-level details include:

- full address and unit number
- parking or building-entry instructions
- lockbox location and access code
- key, remote, and access-card counts
- number of beds, towels, and linen sets
- where spare supplies are stored
- appliance or equipment instructions
- rooms or areas that need a different cleaning method
- reference photos showing the expected setup
- maintenance issues the team should watch for
- who to contact if access fails

Put critical arrival information near the top of the template. Do not hide an access code or key instruction halfway through a long checklist.

## Copy, Delete, and Reorder Checklist Sections

Each checklist row has controls on the right, while the drag handle appears on the left.

![Task Template editor showing drag handles plus copy and delete controls on each checklist row](/screenshots/task-template-workflow/checklist-row-controls.png)

- **Copy:** select the copy icon to duplicate a checklist item or section. The copy is inserted directly below the original so you can edit it immediately.
- **Delete:** select the bin icon and confirm the deletion. Use this to remove rooms, steps, or proof requirements that do not apply to that property.
- **Reorder:** drag a row by its handle to move it. Keep the checklist in the same order that the worker moves through the property.

Copying is especially useful for repeated areas. For example, duplicate a **Bedroom** section for Bedroom 2 and Bedroom 3, then change the bed type, linen count, or reference photo in each copy.

Section dividers organize the checklist, but the instructions and proof items beneath them remain individual rows. After copying a section, review the rows below it and make sure the complete group is in the right place.

### A practical checklist order

1. Arrival and access
2. Initial condition and damage check
3. Kitchen
4. Living and dining areas
5. Bedrooms
6. Bathrooms
7. Restocking and inventory
8. Final presentation photos
9. Lock-up and key return

## Checklist Item Types

Use different checklist types depending on the proof or response you need.

| Checklist Type | Best Use |
| --- | --- |
| **Checkbox** | Simple steps such as empty bins or switch off AC. |
| **Text Item** | Notes, explanations, or written observations. |
| **Photo Required** | Proof of setup, damage, cleaning, or repair. |
| **Before & After Photo** | Maintenance jobs, cleaning proof, or issue resolution. |
| **Count Item** | Towels, keys, amenities, supplies, or inventory. |
| **Yes / No** | Binary checks such as **Safe locked?** or **Wi-Fi working?** |
| **Score 1-10** | Quality checks and inspection ratings. |
| **Video** | Moving proof such as appliance noise, leaks, or room walkthroughs. |
| **Reference** | Show the expected standard with photos, videos, or instructions. |
| **Section Divider** | Break long checklists into cleaning, restocking, damage, and final inspection sections. |

## Example: Checkout Turnover Template

A strong checkout turnover template might include:

- remove rubbish
- check fridge and kitchen
- count towels and linen
- replace amenities
- inspect bathrooms
- check keys, remotes, and access cards
- report damage with photos
- take final bedroom and bathroom photos
- confirm doors and windows are locked
- mark guest-ready inspection complete

For turnover work, include photo proof for the things that create disputes later: damage, missing items, room setup, and final condition.

## Attach a Template to a Task

1. Go to **Operations → Tasks**.
2. Click **New Task**.
3. Select the template from **Job Template**.
4. Fill in the task title, assignee, due date, and linked booking or listing.
5. Create the task.

The saved checklist is copied into that task so the assignee can complete it step by step.

For a property-specific workflow:

1. Select the property or related listing for the task.
2. Choose the matching template, such as **Checkout Turnover - Turner**.
3. Confirm the assignee and timing.
4. Create the task.

The property-specific access notes, checklist order, counts, and proof requirements now come through with the task. You do not need to add the same lockbox note, towel count, or room instruction again for every turnover.

![Create New Task modal showing property-specific templates in the Job Template selector](/screenshots/task-template-workflow/select-template-for-task.png)

> **Important:** the task receives a copy of the template as it exists when the task is created. Editing the template improves future tasks; it does not rewrite work that has already been created or completed.

## Use Templates With Automations

Templates become more powerful when used with [Operations Automations](/platform-guides/set-up-recurring-task-reminders/).

Example:

1. Create a **Checkout Turnover** template.
2. Create an automation that runs after checkout.
3. Attach the Checkout Turnover template.
4. Assign it to the cleaner or cleaning team.

Every checkout can then create a consistent cleaning task automatically.

## Good Habits

- Keep templates specific to one type of work.
- Use required photos only where proof matters.
- Add reference photos when the expected standard is visual.
- Keep checklist names short and action-based.
- Review templates after the first few completions.
- Split very long templates into sections.
- Use one template per operating standard, not one template for everything.
- Keep one clearly named master before making property-specific copies.
- Put the property name in every customized template title.
- Update the template, rather than repeatedly correcting individual future tasks.
- Test each property template with one real task before attaching it to an automation.
- Review copied sections for outdated access codes, counts, names, and reference photos.

## Example: From One Master to Three Properties

Start with **Master Checkout Turnover** containing the common cleaning and inspection standard.

| Template | Property-specific changes |
| --- | --- |
| **Checkout Turnover - Turner** | Garage lockbox, PIN, 2 bedrooms, 8 towels, basement linen cupboard. |
| **Checkout Turnover - Harbour View** | Reception key collection, balcony inspection, 3 bedrooms, beach-towel count. |
| **Checkout Turnover - City Studio** | Smart-lock code, sofa-bed setup, compact kitchen checklist, no outdoor section. |

When a Turner turnover is created, select **Checkout Turnover - Turner**. The cleaner sees the Turner instructions. When Harbour View needs work, select its template instead. The shared operating standard stays consistent, but each task carries the details of the correct property.

If the same task is created automatically after checkout, attach the matching property template to that property's automation. This removes the need for a manager to select or edit the checklist each time.

## Related Articles

- [Operations Module Overview](/platform-guides/operations-module-overview/)
- [Create and Assign Tasks in Operations](/platform-guides/create-and-assign-tasks/)
- [Track Task Progress and Completions](/platform-guides/track-task-progress/)
- [Set Up Operations Automations and Task Reminders](/platform-guides/set-up-recurring-task-reminders/)
