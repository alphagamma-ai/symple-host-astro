---
title: Take Multi-Day, Multi-Service Requests and Charge Once
description: Let guests ask for several services across several days, confirm your team is free, then send one quote and take one payment, online or by bank transfer.
category: platform-guides
section: Services
sectionOrder: 2
tags:
  - Services
  - Quotes
  - Payments
  - Workforce
  - Direct Bookings
date: '2026-10-06'
draft: false
---

## Who This Is For

Use this guide if you run a services business, such as lessons, guiding, tours, or rentals, and guests often ask for **several services over several days** in one go. For example, a family might want three days of lessons for two children and a private session for a parent on the fourth day.

You usually want to:

1. receive the request
2. check that an instructor or guide is free for every session
3. send the guest one price for everything
4. take one payment, then treat the bookings as confirmed

SympleHost supports this with your guest contact channels, the services calendar, quotes that hold several services, and recorded payments.

---

## Pick the Right Workflow

| Situation | Use |
| --- | --- |
| Guests can book straight away, and you are happy for them to pay online | The **Shopping cart** on your website. Guests add several services and pay in one checkout. |
| You need to confirm staff first, and the guest pays online | **Guest contact** for the request, then **one quote with several services**. The guest pays the quote once. |
| You need to confirm staff first, and the guest pays by bank transfer or cash | **Guest contact** for the request, then create the service bookings yourself and **record the payment** when it arrives. |

You can use more than one workflow. Many businesses let simple bookings go through the cart and handle complex requests by quote.

⚠️ **Good to know:** SympleHost does not currently have a website setting that switches every service to request-only booking. If you remove online payment entirely, guests can't pay on your website and are asked to contact you. You also can't send quotes that guests pay online. Keep your payment provider connected if you want guests to pay quotes online.

---

## Before You Start

Make sure you have:

- **Published services** with active rates. See [Creating & Managing Services](/platform-guides/creating-and-managing-services/).
- **Workforce or resources assigned** to each service if availability depends on a person, vehicle, or piece of equipment.
- **A payment provider connected** if guests will pay online. See [How to Set Up Payments](/getting-started/set-up-payments-stripe/).
- **Bank transfer instructions** if guests will pay offline (see [Taking Payment by Bank Transfer or Cash](#taking-payment-by-bank-transfer-or-cash) below).

---

## Step 1: Let Guests Send You Their Request

Guests need an easy way to reach you from your website and checkout pages.

1. Open the top-right profile menu, then go to **Settings**.
2. Under **Direct Bookings**, open **Guest Contact**.
3. Choose which channels to show: **WhatsApp**, **Email**, and **Phone**. At least one must be on.
4. Save your changes.

These defaults apply to every property and service. To change them for a single service, open that service's settings, find **Guest Contact Channels**, and choose **Customize for this listing**.

On a service page, guests see a **Contact host** section with the channels you turned on. WhatsApp opens a chat that already mentions the service they were looking at.

💡 **Tip:** In the service description, tell guests what to send you for multi-day requests, such as dates, the number of people, ages or levels, and which sessions they want.

---

## Step 2: Check Staff Availability for Every Session

Before you price anything, make sure each session can actually be delivered.

1. Go to **Calendars → Services**.
2. Use the **By service** view to check capacity on each requested date.
3. Switch to **By workforce** to see whether an instructor or guide is already booked, off shift, or blocked at that time.

If a date is full or nobody is free, offer the guest an alternative before you build the quote.

See [Creating & Managing Services](/platform-guides/creating-and-managing-services/) for more on the services calendar, workforce, and resources.

---

## Step 3: Build One Quote with Several Services

Use one quote for the whole request. Each service is its own item with its own date, time, rate, and number of guests.

1. Click **Quotes** in the sidebar.
2. Click **New quote**.
3. Select or create the customer, then click **Start quote**.
4. Under **Add to this quote**, click **Service**.
5. Choose the service.
6. Pick the **Date** and the **Start time** and **End time**. For departure-style services, choose the **Departure** instead.
7. Choose the **Rate** and set the number of **Guests**.
8. Click **Add to quote**.
9. Repeat steps 4–8 for every session in the request, including sessions on other days.

As you add items, the **Trip timeline** shows every service in date order, and the **Quote total** updates.

You can also:

- add a **Custom line**, such as equipment hire, and attach it to one of the services
- use **Adjust price** on an item, or **Add quote discount** to discount the whole quote
- add a stay with **Property** if the guest is also staying with you

⚠️ **Important:** A quote does not hold seats or block your calendar. Availability is checked again when the guest pays. If a session sells out first, the guest sees which item changed and you can revise the quote. For high-demand dates, use a short validity period.

### Don't see New quote?

Quotes that hold several items use the multi-item quote builder, which is switched on per account. If **Quotes** only offers **Property Quote** and **Service Quote**, your account uses single-item quotes, where one service quote covers one service. Contact SympleHost support to ask about multi-item quotes, or use the bank transfer workflow below.

---

## Step 4: Review and Send the Quote

1. Click **Review & send**.
2. Under **Payment terms**, choose **Pay in full** or **Deposit + balance**. With a deposit, set the deposit amount and, if you want, a **Balance due** date.
3. Under **Validity**, choose when the quote expires: **In 24 hours**, **In 3 days**, **In 7 days**, or **On a date…**
4. Under **Send to**, choose **Email**, **WhatsApp**, or both. You can also choose **Copy link only** and share the link yourself.
5. Add an optional message for the guest.
6. Click **Send quote**.

If your account requires approval before quotes go out, click **Submit for approval** instead. A manager can then approve it, and you can send it.

Sending a quote needs a connected payment provider. If you see **Connect a payment provider in Settings → Payments before sending quotes**, connect one first.

---

## Step 5: The Guest Pays Once

The guest opens the quote link, reviews every service, and pays the total, or the deposit, in one payment. The quote then shows as **Paid**.

Open the quote and click **View order** to see what was paid for. Each service becomes its own service booking, so you can still assign staff, reschedule, or cancel one session without touching the others. Find them under **Bookings → Services** and on **Calendars → Services**.

After payment, assign an instructor or guide to each booking from the services calendar if you haven't already.

---

## Taking Payment by Bank Transfer or Cash

Use this workflow when guests pay outside SympleHost, or when you don't use a payment provider.

### Set Up Your Payment Instructions

1. Open the top-right profile menu, then go to **Settings**.
2. Under **Direct Bookings**, open **Payment Methods**.
3. Select the **Manual** tile, then open **Bank transfer or other**.
4. Add a **Payment link** (optional), such as a Wise or PayPal.me link, and **Payment instructions**, such as your bank details and the reference guests should use.
5. Click **Save**.

When no payment gateway is connected, these instructions are shown to guests on their quote and on the quote PDF. While a gateway is connected, they stay hidden and guests pay through the gateway.

⚠️ **Manual payments are not confirmed automatically.** Check your own bank account for each payment and confirm the booking yourself once the money has arrived.

### Create the Bookings and Hold the Sessions

Creating the service bookings yourself is how you hold an instructor's time while you wait for payment.

1. Go to **Calendars → Services**.
2. On the first requested date, create a **New service booking** for the service.
3. Select the guest, date and time, rate, guest count, any add-ons or discount, notes, and the assignee.
4. Save the booking. The slot is reserved immediately.
5. Repeat for every session in the request, using the same customer each time.

Tell the guest the total and send your payment instructions. If you want to send a written price, create a **Service Quote** for a single service and use **Print PDF** or **Copy Link**. Your payment instructions appear on it.

### Record the Payment

When the money arrives, record it on each booking it covers:

- On a **service booking**, open it from **Bookings → Services** and use **Mark as Paid**. This records the payment.
- On a **reservation** with a stay, use **Record payment…** and enter the amount, method, the date you received it, and an optional note.

Then use **Confirm Booking** on any service booking that is still pending.

---

## Let Guests Book Several Services Themselves

If a request doesn't need staff confirmation, the website cart is the fastest option. Guests add several properties and services to a cart and pay for them in one checkout.

1. Go to **Websites** and open your website.
2. Open **Website Settings**.
3. In the **Booking** section, turn on **Shopping cart**.
4. Click **Save**.

The cart needs a connected payment provider. When the cart is off, guests book each property or service on its own.

See [Create and Publish a Direct Booking Website](/platform-guides/create-and-publish-a-direct-booking-website/) for website setup.

---

## Troubleshooting

### "Connect a payment provider in Settings → Payments before sending quotes"
Quotes from the multi-item builder are paid online, so they need an active payment provider. Connect one from **Settings → Payment Methods**, or use the bank transfer workflow.

### A service shows as unavailable in the quote
The date may be full, blocked, or outside the service's schedule, or no assigned staff member or resource is free. Check **Calendars → Services** and pick another date or time.

### The guest has no email address
Send the quote by **WhatsApp**, or use **Copy link only** and share the link in your chat.

### The guest says something changed when they tried to pay
Availability and prices are checked again at payment. Open the quote and click **Edit** to create a new revision with an available date or time, then send it again.

### I can only add one service to a quote
Your account uses single-item quotes. Contact support to ask about multi-item quotes, or create the service bookings yourself and record the payment.

---

## Key Takeaways

- Turn on **Guest Contact** channels so guests can send multi-day, multi-service requests
- Check **Calendars → Services**, including **By workforce**, before you price the request
- Put every session in **one quote**: each service is its own item with its own date
- Quotes don't hold seats. Create the bookings yourself if you need to hold an instructor's time before payment
- Guests pay a quote online in one go; offline payments are recorded with **Mark as Paid** or **Record payment…**
- There is no request-only website switch; keep your payment provider connected if guests pay quotes online

---

## Related Articles

- [How to Create and Manage Quotes](/platform-guides/how-to-create-and-manage-quotations/)
- [Creating & Managing Services](/platform-guides/creating-and-managing-services/)
- [Managing Partial Payments and Deposits](/platform-guides/partial-payments-and-deposits/)
- [Set Up Checkout Pages and Direct Booking Links](/platform-guides/set-up-checkout-pages-and-direct-booking-links/)
- [How to Set Up Payments](/getting-started/set-up-payments-stripe/)
