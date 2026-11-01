import type { AuthoredCourse } from "./authored-course";

// "Work.WitUS Settings and Billing" (WORK-06, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-settings-and-billing`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/settings/`
// (gitignored there; backup ~/Downloads/workwitus-tutorials-2026-10-31.tar.gz), read 2026-11-01. Each
// lesson keeps its narrator script and key takeaways. The screen-recording notes, audio-chapter JSON and
// teacher setup checklist were production notes, not learner text, and were left out. Edits to the text:
// em dashes replaced; routes checked against contractor-os main (f8a2bfa8, 2026-11-01) and kept only
// where the route exists; references to screens Work.WitUS no longer has removed (Travel moved to
// RideWitUS, the Academy moved to Learn.WitUS, and the CentenarianOS modules this text was first written
// for were never part of Work.WitUS). The source names no screenshots that exist, so no lesson shows one.
//
// BRIEF. None was written: BAM's decisions in contractor-os plans/user-tasks/25 (2026-11-01) stand in for
// it. Every guide, one course per guide, published as one series, public, BAM as instructor, and the
// travel guide left out (it goes to RideWitUS's curriculum). RESEARCH TIER 1: product documentation,
// ours. Nothing outside Work.WitUS is cited, so there is no ## Sources list and no citation staging.
//
// NO QUIZZES YET. The source had none, and BAM asked for the guides as written. A quiz pass, sized like
// the Using Learn.WitUS exception in scripts/audit-course.ts, is a follow-up, not part of the move.
//
// COURSE-SPECIFIC EDITS. Lesson 2 of the source (Wearable Connections) is left out: Work.WitUS has no
// wearables page (no /dashboard/settings/wearables on main). The billing text was checked against
// app/dashboard/billing/page.tsx and app/pricing/page.tsx on main: the free plan is "Blog access only",
// the shirt is a Work.WitUS shirt, Lifetime is sold only while a founders' offer or a Lifetime promotion
// runs, the card button reads "Pay with Card" and a CashApp option exists, and the Monthly button reads
// "Subscribe". Prices are not stated as fact: the billing page and the pricing page disagree on main
// ($10/month on one, $10.60 on the other; $100 against $103.29 for Lifetime), so the lessons send the
// learner to /pricing. The CentenarianOS support address became the Feedback page. The tour list is
// lib/onboarding/tour-steps.ts on main.
export const WORK_WITUS_SETTINGS_AND_BILLING_COURSE: AuthoredCourse = {
  title: "Work.WitUS Settings and Billing",
  description:
    "Learn how to manage your Work.WitUS account: read the Billing page, open the Stripe Customer Portal, upgrade to Lifetime while it is offered, cancel or come back, and restart the guided module tours.",
  lessons: [
    {
      slug: "your-subscription",
      title: "Your Subscription",
      section: "Section 1 · Billing",
      body: `The Billing page is where you see your current plan, your next renewal date, and access the Stripe Customer Portal for payment management. This lesson walks through everything on the page.

## Navigating to Billing

Click **Billing** in your account menu. The page is at \`/dashboard/billing\`. Billing is one of the free-access routes: you can reach it regardless of your subscription status.

## The Current Plan Section

A card at the top of the page shows your current plan. There are four possible states:

**Free**
You have an account but no active subscription. Access is limited to the blog (the card says "Blog access only."). An **Upgrade** button links to \`/pricing\`.

**Monthly**
Active monthly subscriber. Shows:
- The plan name, **Monthly**, with its monthly price
- Your **renewal date**: "Renews on [date]" in gray, or "Cancels on [date]" in amber if you've canceled and are in the wind-down period
- **Manage Subscription** button (CreditCard icon): opens the Stripe Customer Portal

**Lifetime Member**
Paid once for permanent access. Shows:
- **"Lifetime Member"** in lime green
- **"Full access forever. No recurring charges."**
- No manage button: there's nothing to manage for a one-time purchase

**Admin**
Full access without a subscription. Shows a shield icon and an Admin, Full Access label.

## The Manage Subscription Button

Click **Manage Subscription**. This calls the platform's Stripe portal API, which returns a secure Stripe-hosted URL and redirects you there.

In the Stripe Customer Portal you can:
- **Update your payment method**: change the card on file
- **View invoice history**: download past receipts
- **Cancel your subscription**: sets a cancellation date at the end of the current billing period

After taking action in the portal, Stripe redirects you back to \`/dashboard/billing\`. Your subscription status updates automatically.

## Renewal Date

For monthly subscribers, the page shows your next renewal date: **"Renews on [date]."**

If you've canceled through the Stripe portal but your period hasn't ended yet, it shows: **"Cancels on [date]"** in amber. You keep full access until that date.

## The Lifetime Upgrade CTA

If you're on a monthly plan, a dark card below the current plan section shows:

> **Upgrade to Lifetime**, with a line about paying once and getting a free Work.WitUS shirt from AwesomeWebStore.com.

The card names a price. Check \`/pricing\` for the price checkout will charge before you buy.

Click **View Lifetime Plan** to go to \`/pricing\` and start the Lifetime checkout.

## The Shirt Promo Code (Lifetime Members)

If you're a Lifetime member, a lime-green card shows your unique shirt promo code, a discount code for a free Work.WitUS shirt from AwesomeWebStore.com.

- The code appears in a bold monospace box
- **Copy** button: copies the code to your clipboard; the button text briefly changes to "Copied!"

If the card shows **"Shirt Promo Code Pending"** instead of the actual code, the code is still being generated. Wait a moment and refresh the page.

## After Checkout: Payment Confirmation

When you complete checkout on \`/pricing\` and Stripe redirects you back to \`/dashboard/billing\`, the page briefly shows: **"Confirming your payment…"** while it verifies your transaction with Stripe. After confirmation:
- A green banner saying the payment succeeded and welcoming you to Work.WitUS
- Your plan badge updates to Monthly or Lifetime

## Key Takeaways

- Billing at /dashboard/billing: four plan states: Free, Monthly, Lifetime, Admin
- Monthly: shows renewal date ("Renews on") or cancellation date ("Cancels on [date]" in amber)
- Manage Subscription → Stripe Customer Portal: update payment, view invoices, cancel
- Cancellation takes effect at period end: you keep access until then
- Lifetime: lime "Lifetime Member" badge, no manage button, shirt promo code card with Copy button
- After Stripe checkout redirect: page confirms payment automatically then shows success banner`,
    },
    {
      slug: "upgrading-and-canceling",
      title: "Upgrading and Canceling",
      section: "Section 1 · Billing",
      body: `This lesson covers two billing transitions: upgrading from Monthly to Lifetime, and canceling a Monthly subscription. Both are handled through Stripe: either the checkout flow or the Customer Portal.

## Upgrading to Lifetime

Lifetime membership is a one-time payment that replaces your monthly subscription permanently. The Lifetime card appears on \`/pricing\` only while a founders' offer or a Lifetime promotion is running; when it is not there, Lifetime is not on sale.

**How to upgrade:**

1. Navigate to \`/dashboard/billing\`
2. In the dark **Upgrade to Lifetime** card, click **View Lifetime Plan**
3. You're taken to \`/pricing\`
4. Click **Pay with Card** on the Lifetime plan (the button shows the price)
5. Stripe Checkout opens; pay the one-time price
6. After payment, Stripe redirects you to \`/dashboard/billing?success=true\`
7. The page confirms the payment ("Confirming your payment…") and your plan badge updates to **"Lifetime Member"** (lime green)

Your monthly subscription ends immediately when the Lifetime payment is processed. You won't be charged again for the monthly plan.

**What you get with Lifetime:**
- Everything included in Monthly
- No recurring fees: ever
- All future features as they're added
- A unique free shirt promo code for AwesomeWebStore.com (appears on the Billing page after payment; it may take a moment to generate)

The Lifetime card also offers **Pay with CashApp**. A CashApp payment is checked by hand, and the Billing page shows "CashApp payment pending verification" until your Lifetime membership is turned on.

## Using the Shirt Promo Code

After upgrading to Lifetime, a lime-green card appears on your Billing page with a unique code. Copy it and use it at checkout on AwesomeWebStore.com to claim your free Work.WitUS shirt.

The code is generated once and stored permanently on your account; it won't expire. If you see "Shirt Promo Code Pending," refresh the page after a few seconds.

## Canceling a Monthly Subscription

You can cancel at any time. Cancellations are processed through the Stripe Customer Portal.

**How to cancel:**

1. Navigate to \`/dashboard/billing\`
2. Click **Manage Subscription**
3. In the Stripe Customer Portal, find the cancellation option
4. Confirm cancellation

After canceling:
- Your plan status on the Billing page changes from "Renews on [date]" to **"Cancels on [date]"** (shown in amber)
- You keep **full access** to all features until the end of your current billing period
- On the cancellation date, your account downgrades to free: blog access only

**You won't be charged again** once you cancel. The final charge was the last monthly payment you already made.

## Resubscribing After Cancellation

If you cancel and later want to come back:
- Navigate to \`/pricing\` and click **Subscribe** on the Monthly card (an Annual plan is offered there too)
- Complete the Stripe Checkout flow
- Access is restored immediately upon payment

Your data (jobs, time entries, invoices, transactions, equipment, etc.) is preserved; canceling doesn't delete anything. Your history is waiting when you return.

## What Happens to Your Data on Downgrade?

When your subscription ends and you downgrade to free:
- All your logged data remains in your account
- You lose access to paid dashboard routes (Jobs, Finance, Equipment, etc.)
- Your data is still there: it's just inaccessible until you resubscribe

Nothing is deleted. Work.WitUS doesn't purge data on downgrade.

## Refund Policy

The platform's policy is **no refunds**. Monthly fees are not transferable to Lifetime membership. This is shown in the policy line on the Billing page.

If you have a billing issue not covered by self-service (duplicate charges, technical errors), send it through **Feedback** in the dashboard (\`/dashboard/feedback\`).

## Key Takeaways

- Upgrade to Lifetime: Billing page → "View Lifetime Plan" → Pricing → Pay with Card (while Lifetime is offered) → Stripe checkout → lifetime badge + shirt promo code
- Monthly ends immediately when Lifetime payment processes: no prorated refund
- Cancel monthly: Billing → Manage Subscription → Stripe Customer Portal → cancel; access continues until period-end date
- After cancellation: "Cancels on [date]" in amber on billing page; full access until that date, then downgrade to free
- Resubscribing after cancellation: /pricing → Subscribe → immediate access restoration
- Data is never deleted on downgrade: history preserved, just inaccessible until resubscription
- No refunds: report billing errors through Feedback`,
    },
    {
      slug: "module-tours",
      title: "Module Tours",
      section: "Section 2 · Settings",
      body: `Every major module in Work.WitUS has an interactive walkthrough: a guided tour that highlights key UI elements and explains how to use the feature step by step. If you dismissed a tour or want to re-take one, the Module Tours section in Settings is where you manage them.

## Where to Find Module Tours

Go to **Dashboard → Settings** (\`/dashboard/settings\`) and scroll down to the **Module Tours** section. On the contractor dashboard, Module Tours also appears on the contractor settings page (\`/dashboard/contractor/settings\`).

You will see a list of every available tour with a status badge:

- **Completed**: you finished all steps
- **In Progress**: you started but didn't finish
- **Not Started**: you haven't taken this tour yet

## Re-Taking a Tour

Click the **Restart** button next to any tour to reset it and start from step 1. The tour overlay opens immediately, highlighting the first UI element with a tooltip card showing a title, description, and progress bar.

Each step, you can:

- **Next**: advance to the next step
- **Skip**: skip the current step and move on
- **Exit**: close the tour and save your progress

Your progress is persisted server-side, so if you exit mid-tour, you can resume later from where you left off.

## First-Time Module Picker

When you first log in, a Module Picker modal appears offering to start a guided tour of whichever module you choose. You can select any module to begin its tour immediately, or dismiss the modal to explore on your own. The picker only appears once; after that, manage tours from Settings.

## What Tours Cover

Contractor tours cover Job Tracking, Job Offers, Rate Cards, Rate Comparison, Reports & Analytics, Venue Management, City Guides, Union Hub, Invoicing, Finance Tracking, Equipment Tracker, Document Scanner, and Contractor Board. Lister tours cover the Lister Dashboard, Job Creation, Crew Roster, Job Assignment, Availability Calendar, Crew Messaging, Message Groups, and Reports. Each tour walks through the module's key screens: creating items, viewing dashboards, using filters, and understanding the data.

## Feature Pages

You can also explore modules before taking a tour by visiting the public feature pages at **/features/contractor** (Work.WitUS) or **/features/lister** (CrewOps). These pages describe each module in detail and offer a **Try Demo Login** button to explore with pre-loaded sample data.`,
    },
  ],
};
