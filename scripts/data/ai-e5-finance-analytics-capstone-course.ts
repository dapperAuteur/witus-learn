// Authored "AI Finance & Analytics for Founders (Capstone)", E5, the CAPSTONE of the
// ElementaryMBA entrepreneurship ladder for teen / young-adult founders. It synthesizes
// F4 (AI for Entrepreneurs) and E1 to E4 into one end-to-end, AI-assisted business + finance
// plan. Plain-language business-finance basics (revenue, costs, profit, cash flow); using
// AI to DRAFT bookkeeping and forecasts (always verify the math); the numbers that matter
// at a teen-appropriate level (unit economics, CAC/LTV); building a simple budget +
// projection (and why AI projections can be confidently wrong); pricing + break-even;
// honest analytics (vanity vs. real metrics); the big money risks: never trust AI with
// money blindly, taxes/compliance need a human, fraud/scams; then a guided end-to-end
// capstone that ties the whole track together. Carries the platform's trust DNA in a
// finance key: VERIFY EVERY NUMBER. AI math can be confidently wrong. Grouped into four
// sections (Money Basics · Read the Numbers · Plan & Price · Risk, Honesty & Capstone).
// Cited with real, verifiable sources: the U.S. SBA (Manage your finances; Calculate your
// startup costs / break-even; Write your business plan); the IRS Small Business and
// Self-Employed Tax Center (taxes/compliance need a human); the FTC ("Scams and Your Small
// Business"); the NIST AI Risk Management Framework (AI RMF 1.0); and the CFPB's youth
// financial-education resources (finance literacy). Two offline-build keyword-confirm
// exercises + a final ≤10-question quiz whose every question links to its source lesson.
//
// CAPSTONE-EXERCISE UX NOTE: the exercise checker does LITERAL string matching, so the
// capstone drills are written as "build X offline (a real budget / projection / plan),
// THEN type the one bold keyword shown to confirm." The graded answer is just the keyword;
// the real work is the learner's own spreadsheet/plan, and the explanation shows what a
// strong version looks like.

import type { AuthoredCourse } from "./authored-course";

export const AI_E5_FINANCE_ANALYTICS_CAPSTONE_COURSE: AuthoredCourse = {
  title: "AI Finance & Analytics for Founders (Capstone)",
  description:
    "The capstone of the entrepreneurship track: turn everything you've learned into one honest, AI-assisted business and finance plan. In plain language, learn the money basics every founder needs (revenue, costs, profit, and cash flow), then use AI to DRAFT bookkeeping and forecasts while you verify every number yourself. Read the numbers that actually matter (unit economics, CAC, and LTV) at a level that makes sense, build a simple budget and projection (and understand why an AI's projection can be confidently wrong), set a price and find your break-even, and tell honest analytics from vanity metrics. Face the real money risks head-on: never trust AI with money blindly, taxes and compliance need a human, and watch for fraud and scams. You finish by assembling a complete AI-assisted business + finance plan that ties the whole track together. F4 (AI for Entrepreneurs) and E1 to E4 are the recommended prerequisites. This is general education, not financial, tax, or legal advice.",
  lessons: [
    // ── Section 1 · Money Basics ──────────────────────────────────────────────
    {
      slug: "finance-basics-in-plain-terms",
      title: "1 · The four money words every founder needs (in plain terms)",
      section: "Money Basics",
      body: `Welcome to the capstone. You've learned how to find a problem, talk to customers, build an MVP, and use AI honestly. Now we make the part that scares a lot of founders simple: **the money.** You don't need to be a math whiz. You need four plain words and the discipline to **check every number**, because, as you'll see all course, **AI can be confidently wrong about math.**

**The four words:**

- **Revenue**: the money that comes *in* from selling your product or service. ("We sold 20 candles at $15 = $300 in revenue.") Revenue is *not* profit; it's just the top line.
- **Costs (expenses)**: the money that goes *out* to run the business: supplies, tools, fees, shipping, ads. Some are **one-time** (a logo), some are **recurring** (a $20/month tool).
- **Profit**: what's left after costs: **Profit = Revenue − Costs.** If you made $300 and spent $180, your profit is $120. Negative profit (a loss) means you spent more than you earned.
- **Cash flow**: the *timing* of money in and out. You can be "profitable on paper" and still run out of cash if you pay for supplies in March but customers don't pay you until May. The SBA puts it plainly: accounting for revenue and expenses is what "keep[s] your business running smoothly" (SBA, n.d.).

**Why timing (cash flow) trips people up:** profit is a *score*; cash is *oxygen*. A business that's profitable over the year can still die in a single month if the cash to pay a bill isn't there *when the bill is due*. Founders track both.

> **Trust DNA, finance edition:** every number in your business is a claim. Revenue, a cost, a forecast. Treat each one the way you treat anything an AI tells you: **verify it.** A wrong number you believed is more dangerous than one you knew you had to check.

**Check yourself.** In one sentence each, say the difference between *revenue* and *profit*, and why a *profitable* business can still run out of *cash*.

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your finances*: accounting for revenue and expenses; balance sheets; cash vs. accrual. https://www.sba.gov/business-guide/manage-your-business/manage-your-finances`,
    },
    {
      slug: "ai-for-bookkeeping-drafts",
      recallContent: [
        { prompt: "What are the four money words every founder needs, and how do you find profit?", answer: "Revenue (money in), costs (money out), profit, and cash flow. Profit equals revenue minus costs." },
        { prompt: "Why can a business that is profitable on paper still run out of cash?", answer: "Cash flow is about timing. If a bill is due before your customers pay you, you can be profitable over the year yet run out of cash in a single month." },
      ],
      title: "2 · Using AI to DRAFT your bookkeeping (then verify the math)",
      section: "Money Basics",
      body: `**Bookkeeping** is just keeping an organized record of money in and money out. It's how you know whether you're actually making money instead of guessing. AI can make the boring parts faster, but here's the rule that will save you: **AI drafts the record; you verify the math.**

**Where AI genuinely helps with the books:**

- **Tidying a messy list.** Paste a jumble of sales and expenses and ask it to sort them into a clean table with dates, descriptions, and amounts.
- **Categorizing.** "Group these expenses into supplies, tools, shipping, and fees." A useful first pass you then check.
- **Explaining a term.** "What's the difference between cash and accrual accounting?" The SBA covers both; AI can explain them in plain words (SBA, n.d.).
- **Drafting a simple monthly summary** from your raw numbers, so you can *see* the month at a glance.

**Why you must check every total, every time:**

Large language models are *text* predictors, not calculators. They can add a column and get it **confidently, specifically wrong**: a clean-looking total that's just incorrect. The danger isn't a number that *looks* wrong; it's the wrong number that looks perfectly right.

**The founder's bookkeeping discipline:**

1. **Re-add the totals yourself** (a calculator or a spreadsheet's \`SUM\`; let the *spreadsheet* do the arithmetic, not the chatbot).
2. **Spot-check categories**: did it file your ad spend under "supplies"? Fix it.
3. **Keep your receipts and records.** The IRS expects businesses to keep records that support their income and expenses; "the AI organized it" is not a record (IRS, n.d.).
4. **Never paste sensitive data** (full account numbers, customers' personal info) into a public AI tool.

> **Trust DNA:** a spreadsheet's \`SUM\` is trustworthy; a chatbot's mental math is not. Use AI to *organize*, use a calculator to *compute*, and use your own eyes to *verify*.

**Check yourself.** Why should the *spreadsheet* (not the chatbot) be the thing that actually adds up your totals?

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your finances*: bookkeeping, accounting methods (cash vs. accrual), and recordkeeping. https://www.sba.gov/business-guide/manage-your-business/manage-your-finances
- Internal Revenue Service. (n.d.). *Small Business and Self-Employed Tax Center*: recordkeeping and the records that support income and expenses. https://www.irs.gov/businesses/small-businesses-self-employed`,
    },

    // ── Section 2 · Read the Numbers ──────────────────────────────────────────
    {
      slug: "unit-economics-cac-ltv",
      recallContent: [
        { prompt: "When you use AI for bookkeeping, what is AI's job and what is yours?", answer: "AI drafts and organizes the record by tidying a messy list, categorizing, and summarizing. You verify every total, keep the records, and never paste sensitive data into a public tool." },
        { prompt: "Why should a spreadsheet's SUM, not a chatbot, add up your totals?", answer: "Language models predict text rather than compute, so they can be confidently wrong on arithmetic. A spreadsheet actually calculates, so let it do the math and check it yourself." },
      ],
      title: "3 · The numbers that matter: unit economics, CAC, and LTV",
      section: "Read the Numbers",
      body: `Big totals can hide the truth. The question that actually tells you if a business *works* is small: **does one sale, to one customer, make money?** That's **unit economics**: the profit (or loss) on a single unit or a single customer. Get this right and scaling makes you richer; get it wrong and scaling just makes you lose money *faster*.

**Three founder numbers, in plain terms:**

- **Unit margin**: profit on **one** sale. If a candle sells for $15 and costs you $6 to make and ship, your unit margin is **$9**. If it costs you $16 to make, you *lose* a dollar on every sale, and selling more makes it *worse*.
- **CAC (Customer Acquisition Cost)**: what it costs, on average, to *get* one new customer. Spent $50 on ads and got 10 customers? Your CAC is **$5** ($50 ÷ 10).
- **LTV (Lifetime Value)**: the total profit one customer brings over the whole time they buy from you. A customer who buys 4 candles a year for 2 years, at $9 margin each, has an LTV around **$72**.

**The one comparison that matters:** is **LTV bigger than CAC**? If a customer is worth $72 to you and costs $5 to get, that's a healthy business. If they cost $80 to get and are worth $72, you lose money on every customer you "win." A common rough rule of thumb founders use is wanting LTV to be *several times* CAC, but the exact ratio matters less than the direction: **value in must beat cost to acquire.**

**Where AI helps vs. fools you here:** AI is great at *explaining* these terms and *setting up* the formula in a spreadsheet. It is *bad* at giving you the actual numbers: your real costs, your real ad spend, your real repeat rate come from **your** records, not from a model's guess. And if you ask AI to *calculate* a ratio, **verify it**: a wrong CAC tells you to scale a business that's secretly losing money.

> **Trust DNA:** AI can teach you *what* CAC and LTV mean and *how* to compute them. The actual inputs must be your real, verified numbers, and you re-check the arithmetic.

**Check yourself.** Why is "we're selling a lot" not enough on its own, and which two numbers do you compare to know if getting customers is actually worth it?

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your finances*: cost-benefit analysis and accounting for revenue vs. expenses behind each sale. https://www.sba.gov/business-guide/manage-your-business/manage-your-finances`,
    },
    {
      slug: "honest-vs-vanity-metrics",
      recallContent: [
        { prompt: "What do CAC and LTV mean, and which way should the comparison go?", answer: "CAC is customer acquisition cost, what it costs to get one customer. LTV is a customer's lifetime value. A healthy business has LTV bigger than CAC." },
        { prompt: "What is unit margin, and why does selling more of a negative margin hurt?", answer: "Unit margin is price minus cost per unit, the profit on one sale. If it is negative you lose money on every sale, so selling more only grows the loss." },
      ],
      title: "4 · Honest analytics: real metrics vs. vanity metrics",
      section: "Read the Numbers",
      body: `Analytics is just *measuring what's happening* so you can make better decisions. But not every number that goes up means your business is healthier. The trap is the **vanity metric**: a number that *feels* great and *looks* impressive but doesn't tell you whether you're building a real business.

**Vanity metrics vs. real metrics:**

| Vanity (feels good, decides nothing) | Real (tells you something you can act on) |
| --- | --- |
| Total followers / likes | Customers who actually paid |
| Page views | Conversion rate (visitors → buyers) |
| "Total users ever signed up" | Active / repeat customers |
| Number of posts you made | Revenue, profit, and cash on hand |

The difference: a **real metric changes a decision.** If a number goes up but you'd do nothing differently, it's probably vanity. If it tells you to keep, fix, or kill something, it's real.

**Use analytics *honestly*, including with yourself:**

- **Don't cherry-pick.** Reporting only the metric that looks good (to yourself, a teammate, or an investor) is lying with numbers. Show the ones that matter even when they're ugly.
- **Watch the denominator.** "1,000 visitors!" means little without "…and 3 bought." A small honest conversion number beats a huge meaningless one.
- **Never fake the numbers.** Bought followers and fake engagement aren't just vanity: they can be *illegal* (you saw the FTC's fake-reviews rule in F4). And they fool *you* most of all.

**Where AI helps vs. fools you:** AI can *summarize* analytics, spot patterns, and explain a metric (useful). But it can also generate a *confident, wrong* interpretation, or dress up a vanity metric as if it were meaningful. NIST's framework calls for continuously **measuring and managing** what AI tells you rather than trusting it (NIST, 2023). Ask "would this number change what I do?" before you celebrate it.

**Check yourself.** Give one vanity metric and the real metric you'd track instead, and state the test that tells them apart.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: the "Measure" and "Manage" functions; valid and reliable measurement. https://www.nist.gov/itl/ai-risk-management-framework
- Consumer Financial Protection Bureau. (n.d.). *Youth financial education*: building the habits and judgment behind sound money decisions. https://www.consumerfinance.gov/consumer-tools/educator-tools/youth-financial-education/`,
    },

    // ── Section 3 · Plan & Price ──────────────────────────────────────────────
    {
      slug: "budget-and-projection",
      recallContent: [
        { prompt: "What separates a vanity metric from a real metric?", answer: "A vanity metric like follower count or page views feels good but changes no decision. A real metric like paying customers, conversion rate, or cash on hand tells you to keep, fix, or kill something." },
        { prompt: "What one question tells a real metric from a vanity one?", answer: "Ask whether the number would change what you do. If it would, it is real; if you would act no differently, it is probably vanity." },
      ],
      title: "5 · Building a simple budget and projection (and why AI projections can be wrong)",
      section: "Plan & Price",
      body: `A **budget** is your plan for money in and money out over a period, usually a month. A **projection (forecast)** is your best guess at what *future* months will look like. Together they answer: "If I keep going, will I run out of money, and when?" Every real business plan has them, and the SBA expects financials in a business plan (SBA, n.d.).

**Build a simple monthly budget (you can do this on paper or a spreadsheet):**

1. **List money IN**: expected revenue (be conservative; guess low).
2. **List money OUT**: every cost: supplies, tools/subscriptions, shipping, ads, fees.
3. **Subtract:** In − Out = your **net** for the month. Negative? You're burning cash. For how many months can you?
4. **Carry the balance forward** so you can see *cash flow* over time, not just one month.

**Make a projection, then distrust it appropriately:**

A projection is a *story about the future*, and the future doesn't read your spreadsheet. Sales may come in lower and costs higher than you hoped. That's why founders build a **conservative** case (and often a "what if it's worse?" case too).

**Why an AI's projection can be confidently wrong, and dangerously so:**

- **It can do the arithmetic wrong.** A model can produce a clean, professional-looking forecast with a math error baked in. Re-check every formula in the actual spreadsheet.
- **It invents optimistic assumptions.** Ask AI to "project my first year" and it may assume a growth rate or a conversion rate *out of thin air*. Those guesses, not the math, drive the whole forecast, and they're often rosy.
- **It doesn't know YOUR reality.** It has never met your customers or seen your real costs. A forecast built on made-up inputs is fiction with decimal points.

**The discipline:** let AI *draft the structure* of a budget or projection (the rows, the formulas, the layout). Then replace every assumption with *your* real, verified numbers, do the math in the *spreadsheet*, and label your guesses as guesses. NIST's whole point is keeping human judgment around the model, not handing it the wheel (NIST, 2023).

> **Trust DNA:** an AI projection is a *first draft of a guess.* Its confidence is not evidence. Your verified numbers and honest, conservative assumptions are what make it useful.

**Check yourself.** Name two different reasons an AI-generated projection can be wrong: one about the *math*, one about the *assumptions*.

## Sources
- U.S. Small Business Administration. (n.d.). *Write your business plan*: the financial plan: budget, projections, and conservative assumptions. https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: keep human oversight and validation around AI outputs. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "pricing-and-break-even",
      recallContent: [
        { prompt: "What is the difference between a budget and a projection?", answer: "A budget is your plan for money in and money out over a period, usually a month. A projection, or forecast, is your best guess at what future months will look like." },
        { prompt: "Name two different reasons an AI-generated projection can be wrong.", answer: "It can do the arithmetic wrong, producing a clean forecast with a hidden math error, and it can invent optimistic assumptions such as a growth or conversion rate not based on your real numbers." },
      ],
      title: "6 · Pricing and break-even: how many do you have to sell?",
      section: "Plan & Price",
      body: `Two of the most important decisions a founder makes are **what to charge** and **how many you must sell to stop losing money.** Get the price too low and you work hard to go broke; price with a plan and the rest of your finances start to make sense.

**Pricing, in plain terms:**

- **Cover your costs first.** If a unit costs you $6 to make and deliver, a $5 price guarantees a loss on every sale, no matter how many you sell.
- **Price for the *value* and the *market*, not just cost.** What is it worth to the customer? What do alternatives cost? (That's the market research from F4.)
- **Leave room for margin.** Price − cost-per-unit = your **unit margin** (Lesson 3). That margin is what eventually pays for your tools, your time, and your profit.

**Break-even: the number that tells you if your plan is realistic.** Your **break-even point** is how many units you must sell to cover your **fixed costs**, the costs you pay no matter what (tools, a stall fee, software). The SBA's startup-costs and break-even guidance is exactly this calculation (SBA, n.d.).

> **Break-even (units) = Fixed costs ÷ Unit margin**

**Worked example (verify it yourself):** fixed costs of **$120/month** (a $20 tool + a $100 craft-fair table), and a unit margin of **$9** per candle ($15 price − $6 cost). Break-even = $120 ÷ $9 ≈ **13.3**, so you must sell **14 candles** that month just to get to zero. Candle #15 is your first real profit. *(Did you re-check 120 ÷ 9? Good, that's the habit.)*

**Where AI helps vs. fools you:** AI can *explain* break-even, *set up* the formula in a sheet, and *list* cost categories you forgot. But if you ask it to *calculate* your break-even, **re-do the division yourself**: a wrong break-even tells you a doomed price is fine. And only *you* know your real fixed costs and real unit margin; a model's guesses aren't your business.

**Check yourself.** With **$200** in fixed costs and a **$10** unit margin, what's your break-even in units, and how did you check the number yourself?

## Sources
- U.S. Small Business Administration. (n.d.). *Calculate your startup costs*: fixed vs. recurring costs and break-even analysis. https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs
- U.S. Small Business Administration. (n.d.). *Manage your finances*: cost-benefit analysis behind pricing decisions. https://www.sba.gov/business-guide/manage-your-business/manage-your-finances`,
    },

    // ── Section 4 · Risk, Honesty & Capstone ──────────────────────────────────
    {
      slug: "big-money-risks",
      recallContent: [
        { prompt: "What is the break-even formula, and what does it tell you?", answer: "Break-even in units equals fixed costs divided by unit margin. It tells you how many units you must sell to cover your fixed costs before you earn any profit." },
        { prompt: "With $120 in fixed costs and a $9 unit margin, what is your break-even?", answer: "$120 divided by $9 is about 13.3, so you must sell 14 units to reach zero, and unit 15 is your first profit. Re-check the division yourself instead of trusting an AI's total." },
      ],
      title: "7 · The big money risks: AI, taxes, and scams",
      section: "Risk, Honesty & Capstone",
      body: `Money is where mistakes get expensive fast. Three risks deserve their own lesson, because each one can sink a young business, and AI changes the shape of all three. (This is general education, not financial, tax, or legal advice; for your situation, ask a qualified human.)

**Risk 1 · Never trust AI with money *blindly*.** Everything in this course points here: AI math can be **confidently wrong**, and a confident wrong number about money costs you real dollars. A made-up total, a forecast built on invented assumptions, a break-even it divided incorrectly: believe one and you make a real decision on a fake fact. **AI drafts; you verify the numbers; you decide.** NIST's framework is built on exactly this human-oversight principle (NIST, 2023).

**Risk 2 · Taxes and compliance need a human.** As soon as you earn money, taxes can apply, and the rules depend on your situation. The IRS runs a whole Small Business and Self-Employed Tax Center precisely because this isn't something to guess (IRS, n.d.). The trap with AI: it will *confidently* answer a tax question and may be **wrong or out of date**, and "the chatbot told me" is not a defense to the IRS. Keep good records, set money aside, and for anything real, **talk to a parent/guardian and a qualified tax professional.** Use AI to *understand vocabulary*, never as your accountant.

**Risk 3 · Fraud and scams target small businesses.** Scammers send fake invoices, pose as a company or agency you trust, create false urgency, and demand payment by wire, gift card, or crypto, and the FTC documents these patterns aimed straight at small businesses (FTC, n.d.). AI makes scams *more convincing* (cleaner fake emails, even voice imitations). Your defenses:

- **Slow down.** Urgency is the scammer's tool. Verify any payment request through a *known* channel, not the one in the message.
- **Never pay an unexpected bill or "fee" without checking** that you actually ordered it.
- **Guard your accounts and data;** don't click links or open attachments in unexpected messages.
- **Report scams** to the FTC at ReportFraud.ftc.gov.

> **Trust DNA, capstone form:** the most expensive AI mistakes are the ones about money. Verify every number, keep a human on taxes and compliance, and treat urgency around payment as a red flag, not a deadline.

**Check yourself.** For each of the three risks, name the human-in-the-loop move that protects you (one sentence each).

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: human oversight; valid and reliable AI; accountability. https://www.nist.gov/itl/ai-risk-management-framework
- Internal Revenue Service. (n.d.). *Small Business and Self-Employed Tax Center*: recordkeeping, estimated taxes, and small-business obligations. https://www.irs.gov/businesses/small-businesses-self-employed
- Federal Trade Commission. (n.d.). *Scams and Your Small Business: A Guide for Business*: fake invoices, imposters, urgency, and how to spot/stop/report scams. https://www.ftc.gov/business-guidance/resources/scams-your-small-business-guide-business`,
    },
    {
      slug: "capstone-build-your-finance-plan",
      title: "8 · Capstone, Part 1: build your AI-assisted finance plan (offline)",
      section: "Risk, Honesty & Capstone",
      exercise: {
        instructions:
          "This is the heart of the capstone, and the real work happens OFFLINE. For YOUR own business idea, actually build the three finance pieces below (in a spreadsheet, a doc, or on paper). You may use AI to DRAFT the structure, but you must put in your own real numbers and VERIFY every total and formula yourself (let a spreadsheet do the arithmetic, never a chatbot). Each item names one piece to build, then asks you to type the ONE BOLD KEYWORD shown to confirm you've actually built and checked it. The graded answer is just the keyword; the explanation shows what a strong, verified version looks like.",
        items: [
          {
            prompt:
              "PIECE 1. Build a one-month BUDGET for your idea: list money IN (expected revenue, guessed low) and money OUT (every cost), then subtract to get your net, and re-add both columns yourself. Built and verified it? Type the keyword: budget",
            answer: "budget",
            accept: ["budgeted"],
            hint: "Money IN − Money OUT = net for the month. Let the spreadsheet's SUM do the math, then sanity-check it.",
            explanation:
              "A strong budget guesses revenue low, lists EVERY cost, and shows whether the month makes or loses money, with totals you re-checked, not numbers a chatbot asserted (Lessons 1, 2, 5).",
          },
          {
            prompt:
              "PIECE 2. Compute your UNIT economics: your unit margin (price − cost per unit), and a rough CAC and LTV for one customer. Verify each calculation yourself. Done and checked? Type the keyword: margin",
            answer: "margin",
            accept: ["unit margin", "unit economics"],
            hint: "Unit margin = price − cost per unit. CAC = ad spend ÷ customers gained. Ask: is LTV bigger than CAC?",
            explanation:
              "A strong answer shows that ONE sale makes money and that LTV beats CAC, using your real numbers, with the arithmetic re-checked, not an AI's guess (Lesson 3).",
          },
          {
            prompt:
              "PIECE 3. Set a PRICE and calculate your BREAK-EVEN in units (fixed costs ÷ unit margin), then re-do that division by hand or in the spreadsheet to confirm it. Done? Type the keyword: breakeven",
            answer: "breakeven",
            accept: ["break-even", "break even"],
            hint: "Break-even units = fixed costs ÷ unit margin. If it says 14, candle #15 is your first profit. Re-check the division.",
            explanation:
              "A strong answer states a price that covers cost and value, and a break-even number you computed AND verified, because a wrong break-even hides a losing plan (Lesson 6).",
          },
        ],
      },
    },
    {
      slug: "capstone-assemble-the-whole-plan",
      title: "9 · Capstone, Part 2: assemble the whole AI-assisted business + finance plan",
      section: "Risk, Honesty & Capstone",
      exercise: {
        instructions:
          "Now tie the WHOLE track together. Using your finance pieces from Part 1 plus what you built across F4 and E1 to E4, assemble ONE complete AI-assisted business + finance plan OFFLINE (a doc or slides). AI may help you draft and organize; YOUR judgment and YOUR verified numbers decide. Each item below names one section of the finished plan and asks you to type the ONE BOLD KEYWORD to confirm you've written it. The real deliverable is your plan; the explanation shows what a strong, honest version includes.",
        items: [
          {
            prompt:
              "SECTION A. PROBLEM & CUSTOMERS: name the real, painful problem you solve, for whom, and your proof from REAL people (not an AI persona). Written? Type the keyword: problem",
            answer: "problem",
            accept: ["customers"],
            hint: "A specific person, a frequent or expensive pain, and real customer evidence (interviews, a survey, pre-orders).",
            explanation:
              "A strong plan starts from a pain real people pay to remove and shows validation from real humans. AI helps prepare and digest research, never replace it (F4).",
          },
          {
            prompt:
              "SECTION B. THE FINANCE PLAN: fold in your verified budget, unit economics, pricing, and break-even from Part 1. Folded in? Type the keyword: finance",
            answer: "finance",
            accept: ["money", "budget"],
            hint: "Budget (in − out), unit margin, CAC vs. LTV, price, and break-even units, all with numbers YOU verified.",
            explanation:
              "A strong finance plan shows one sale makes money, that you know your break-even, and that every figure was checked by you, not asserted by AI (Lessons 1 to 6).",
          },
          {
            prompt:
              "SECTION C. RISKS & HONESTY: write your rules for the three big money risks (verify AI's math; humans for taxes/compliance; guard against scams) and one honest metric you'll track. Written? Type the keyword: verify",
            answer: "verify",
            accept: ["risks", "honesty"],
            hint: "E.g. 'I re-check every total; a human handles taxes; I slow down on urgent payment requests; I track paying customers, not followers.'",
            explanation:
              "A strong plan commits to verifying every number, keeping a human on taxes/compliance, defending against scams, and measuring REAL metrics over vanity ones (Lessons 4, 7).",
          },
          {
            prompt:
              "SECTION D. AI & TRUST: state where AI drafts in your business, where a human always decides, and how you'll stay honest with customers. Written? Type the keyword: trust",
            answer: "trust",
            accept: ["ai"],
            hint: "AI drafts; you decide on money, law, and facts. Be honest when customers talk to a bot; never ship slop or fake numbers.",
            explanation:
              "A strong plan names AI as a drafting assistant under human oversight (NIST), protects customer trust, and never trades long-term trust for short-term speed (F4; Lessons 5, 7).",
          },
        ],
      },
    },
    {
      slug: "ai-finance-analytics-capstone-quiz",
      title: "10 · Capstone check: prove you can read the numbers",
      section: "Risk, Honesty & Capstone",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A business made $300 in revenue and spent $180. What's its profit, and what does revenue NOT tell you?",
            options: [
              "Profit is $300; revenue already includes costs",
              "Profit is $120 (revenue − costs); revenue alone doesn't tell you what's left after expenses",
              "Profit is $480; you add revenue and costs",
              "There's no way to know without AI",
            ],
            correctIndex: 1,
            explanation:
              "Profit = Revenue − Costs = $300 − $180 = $120. Revenue is just the top line; profit is what's left after costs (Lesson 1).",
            sourceLessonSlug: "finance-basics-in-plain-terms",
          },
          {
            prompt: "Why can a profitable business still run out of money?",
            options: [
              "Profit and cash are the same thing",
              "Because cash flow is about TIMING: money can be owed to you later than your bills are due",
              "Because profit isn't real",
              "It can't; profit guarantees cash",
            ],
            correctIndex: 1,
            explanation:
              "Profit is a score over time; cash is oxygen in the moment. If a bill is due before customers pay you, you can be profitable yet out of cash (Lesson 1).",
            sourceLessonSlug: "finance-basics-in-plain-terms",
          },
          {
            prompt: "An AI tidies your expenses and reports a monthly total. What should you do?",
            options: [
              "Trust it. AI is good at math",
              "Re-add the totals yourself (or in the spreadsheet); AI text predictors can be confidently wrong on arithmetic",
              "Delete your receipts since the AI organized it",
              "Paste in your full bank account number so it can double-check",
            ],
            correctIndex: 1,
            explanation:
              "Models predict text, not compute reliably. Verify every total, keep your records, and never paste sensitive data into public AI tools (Lesson 2).",
            sourceLessonSlug: "ai-for-bookkeeping-drafts",
          },
          {
            prompt: "You spent $50 on ads and got 10 new customers. What is your CAC, and what should you compare it to?",
            options: [
              "CAC is $50; compare it to your follower count",
              "CAC is $5 ($50 ÷ 10); compare it to LTV: the value of a customer must beat the cost to get one",
              "CAC is $500; compare it to revenue only",
              "CAC can't be calculated without AI",
            ],
            correctIndex: 1,
            explanation:
              "CAC = $50 ÷ 10 = $5. A business is healthy when LTV (a customer's lifetime value) is bigger than CAC (Lesson 3).",
            sourceLessonSlug: "unit-economics-cac-ltv",
          },
          {
            prompt: "Which is a VANITY metric rather than a real one?",
            options: [
              "Customers who actually paid",
              "Conversion rate (visitors who became buyers)",
              "Total follower count",
              "Cash on hand",
            ],
            correctIndex: 2,
            explanation:
              "A real metric changes a decision. Followers feel good but usually don't; paying customers, conversion, and cash do (Lesson 4).",
            sourceLessonSlug: "honest-vs-vanity-metrics",
          },
          {
            prompt: "You ask AI to 'project my first year' and it gives a polished forecast. What's the main danger?",
            options: [
              "It's always too pessimistic",
              "It can invent optimistic assumptions and make math errors: the made-up inputs, not reality, drive the forecast",
              "Projections are illegal",
              "Nothing; AI knows your customers",
            ],
            correctIndex: 1,
            explanation:
              "AI doesn't know your real costs or customers; it can guess rosy assumptions and miscalculate. Replace its inputs with your verified numbers and re-check the math (Lesson 5).",
            sourceLessonSlug: "budget-and-projection",
          },
          {
            prompt: "Fixed costs are $120/month and your unit margin is $9. What's your break-even in units?",
            options: [
              "About 14 units ($120 ÷ $9 ≈ 13.3, so you must sell 14 to cover costs)",
              "About 9 units",
              "About 120 units",
              "You can't break even with those numbers",
            ],
            correctIndex: 0,
            explanation:
              "Break-even units = fixed costs ÷ unit margin = $120 ÷ $9 ≈ 13.3 → 14 units. Unit #15 is your first profit (Lesson 6).",
            sourceLessonSlug: "pricing-and-break-even",
          },
          {
            prompt: "If your unit costs $6 to make and you price it at $5, what happens as you sell more?",
            options: [
              "You make more profit the more you sell",
              "You lose money on every sale, and selling more makes the loss bigger",
              "You break even instantly",
              "Volume fixes a negative margin",
            ],
            correctIndex: 1,
            explanation:
              "A negative unit margin (price below cost) means each sale loses money; scaling multiplies the loss. Price must cover cost first (Lessons 3, 6).",
            sourceLessonSlug: "pricing-and-break-even",
          },
          {
            prompt: "You get an urgent invoice demanding payment by gift card for something you don't remember ordering. What's the right move?",
            options: [
              "Pay immediately so you don't miss the deadline",
              "Slow down, verify through a known channel that you actually ordered it, don't pay, and report the scam to the FTC",
              "Click the link to see the details",
              "Ask the AI in the email to confirm it's legitimate",
            ],
            correctIndex: 1,
            explanation:
              "Urgency, unexpected invoices, and gift-card/wire/crypto demands are classic scam signs. Verify independently, don't pay, and report at ReportFraud.ftc.gov (Lesson 7).",
            sourceLessonSlug: "big-money-risks",
          },
          {
            prompt: "A chatbot confidently answers your business-tax question. How should you treat it?",
            options: [
              "As final: 'the chatbot told me' is a valid defense to the IRS",
              "As possibly wrong or out of date; use AI to learn vocabulary, but keep good records and rely on a qualified human for real tax decisions",
              "Ignore taxes until you're big",
              "Trust it because it sounded sure",
            ],
            correctIndex: 1,
            explanation:
              "AI can be confidently wrong on taxes, and 'the AI said so' isn't a defense. Taxes and compliance need a human; the IRS center exists for a reason (Lesson 7).",
            sourceLessonSlug: "big-money-risks",
          },
        ],
      },
    },
  ],
};
