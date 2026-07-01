// Authored "Building an AI-Powered Product or Service" — E4, the fourth rung of the
// ENTREPRENEUR track (builds on F4 "AI for Entrepreneurs") on the ElementaryMBA school.
// Audience: teen / young-adult founders. It deliberately BRIDGES entrepreneurship and
// building — it borrows build concepts from F2 "Building with AI" (build-vs-buy-vs-no-code,
// human-in-the-loop, tokens/cost) but stays FOUNDER-focused and lighter-tech than the
// Builder (B) track: no code is required, the lens is product/customer/money/trust, not
// engineering. Carries the platform's trust DNA: verify, cite, disclose, don't ship slop.
// Grouped into four sections (From Need to Idea · Design & Build · Money & Trust · Launch &
// Protect). Cited with real, verifiable sources: NIST AI RMF 1.0 + the GenAI Profile
// (NIST AI 600-1); the U.S. Small Business Administration ("Write your business plan,"
// "Calculate your startup costs," "Market research and competitive analysis"); the FTC
// ("Keep your AI claims in check," the fake-reviews final rule, and "Disclosures 101 for
// Social Media Influencers"); the U.S. Copyright Office's "Copyright and Artificial
// Intelligence, Part 2: Copyrightability"; and Google PAIR's People + AI Guidebook (the
// reputable product source for AI product UX, setting expectations, and human oversight).
// Two fill-in exercises + a final quiz whose every question links to the lesson that
// teaches it. F4 (AI for Entrepreneurs) is the recommended prerequisite.

import type { AuthoredCourse } from "./authored-course";

export const AI_E4_PRODUCT_SERVICE_COURSE: AuthoredCourse = {
  title: "Building an AI-Powered Product or Service",
  description:
    "You found a real problem — now turn it into an AI-powered product or service people will pay for, without becoming an engineer or shipping slop. Learn how to go from a validated need to an idea, how to choose build vs. buy vs. no-code, how to design the experience and the human-in-the-loop, what it actually costs to run (tokens and subscriptions), how to price it, how to handle wrong answers and earn trust, the legal and ethical basics (privacy, copyright, honest claims), how to launch small and learn from feedback, and how to protect your brand from AI slop. Ends with a one-page AI product plan you can actually use. This is the founder's view of building — lighter-tech than the Builder track. F4 (AI for Entrepreneurs) is the recommended prerequisite.",
  lessons: [
    // ── Section 1 · From Need to Idea ─────────────────────────────────────────
    {
      slug: "validated-need-to-idea",
      title: "1 · From a validated need to a product idea",
      section: "From Need to Idea",
      body: `By now you've done the founder's first job (F4): you found a real, painful problem that real people will pay to fix. **This course is about turning that validated need into an AI-powered product or service** — without losing your judgment to the hype.

**The order matters: need first, AI second.** "I have AI, what should I build?" produces slop. "People keep struggling with X — could an AI feature make it faster, cheaper, or easier?" produces a product. AI is the *how*, not the *why*.

**Turn a need into a candidate idea by answering three questions:**

- **What's the job?** The specific task your customer is trying to get done (e.g. "write a decent first draft of a tutoring report," "find the right grant in 500 pages").
- **Where does AI genuinely help?** AI is good at drafting, summarizing, sorting, classifying, and answering over a defined body of content. It's weak at exact facts, math, and final accountability (you saw this in F4 and F2). Point AI at the part of the job it's actually good at.
- **What's the smallest valuable version?** Not "an AI platform" — one feature that does one job well. Ambition is fine; your *first build* should be tiny.

**Product vs. service — both count here.** A **product** is something self-serve (an app, a tool, a template). A **service** is you delivering an outcome, *using* AI to do it faster (a "done-for-you" report, a consultation). Many young founders should start with an **AI-assisted service** — you keep a human firmly in the loop, learn what customers really want, and automate later. That's a legitimate AI-powered business, not a lesser one.

**Trust DNA from the start:** the need is validated by *real people* (F4), and the idea should aim AI at a job it can do reliably — with you accountable for the result. NIST frames trustworthy AI as **valid and reliable** with human oversight designed around it (NIST, 2023). Build for that, not for a demo.

**Check yourself.** Take your validated problem. Name the one *job* a customer is trying to do, and the *smallest* AI-assisted version (product OR service) you could offer to help with it.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Valid and Reliable" and human oversight. https://www.nist.gov/itl/ai-risk-management-framework
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — validate the need with real customers before building. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "build-buy-nocode",
      title: "2 · Build vs. buy vs. no-code",
      section: "From Need to Idea",
      body: `You almost never have to build AI from scratch. The founder's question isn't "how do I train a model?" — it's **"what's the lightest way to deliver this with AI?"** Picking the right approach can save you months and thousands of dollars.

**Three honest paths, lightest to heaviest:**

- **Buy / integrate an existing AI tool.** Use a product that already does the AI part (a chat tool, an AI writing or transcription app, an AI feature inside software you already pay for). Fastest, cheapest to start, least control. Great when an off-the-shelf tool already does 80% of the job.
- **No-code / low-code with an AI step.** Wire together tools you don't have to code: a form, an automation platform, a chatbot builder, with an AI step in the middle ("when a request comes in, summarize it and draft a reply"). You own the *workflow* without owning engineering. Ideal for an AI-assisted service or a first product.
- **Build with an API (or hire someone who can).** Call a model's **API** from custom code for full control, your own data, and real guardrails. This is the Builder track's home turf (F2) — powerful, but it's real software with real maintenance. As a founder, reach for it only when the lighter paths stop fitting, and know you may need to hire that skill.

**Decide with a few blunt questions:**

| Ask yourself | Lean toward |
|---|---|
| Does a tool already do most of this? | **Buy / integrate** |
| Is it "when X happens, do steps, one uses AI"? | **No-code / low-code** |
| Do I need custom logic, my own data, real control? | **Build (API) — or hire it** |

**The founder's discipline: start as light as the job allows.** Over-engineering is its own kind of slop — and the heaviest path is also the most expensive to run and maintain. You can always move down the ladder later, once customers prove the idea is worth the heavier build.

**Check yourself.** For your idea, which path fits *the first version* — buy, no-code, or build — and what's the one fact about the job that decides it?

## Sources
- U.S. Small Business Administration. (n.d.). *Calculate your startup costs* — weigh tool and build costs before committing. https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — match the approach to the risk; keep oversight regardless of build path. https://www.nist.gov/itl/ai-risk-management-framework`,
    },

    // ── Section 2 · Design & Build ────────────────────────────────────────────
    {
      slug: "design-the-experience",
      title: "3 · Designing the experience (UX) around AI",
      section: "Design & Build",
      body: `A great AI product isn't "a model with a text box." It's an **experience** that helps a real person get a job done and feel in control. Google's People + AI Guidebook — a practical playbook from a team that designs AI products — is built on one idea: **design for the human, set honest expectations, and earn trust** (PAIR, 2021).

**Founder-level UX principles for an AI feature:**

- **Set expectations up front.** Tell users what the feature can and can't do, in plain words. Over-promising ("AI does it all!") guarantees disappointment; honest framing ("AI drafts it, you review") builds trust. PAIR calls this onboarding users to AI's abilities and limits.
- **Make AI's role obvious.** The user should always know when they're getting AI output versus a fact, and that it might be wrong. Surprise AI feels like deception.
- **Keep the human in control.** Let people edit, undo, accept, or reject what the AI produces. A draft they can change beats an answer they're stuck with.
- **Show your work when it matters.** If the AI makes a claim, let the user see where it came from (a source, the document it read). That's the Learn.WitUS trust pattern in product form — and PAIR's "explainability and trust" guidance.
- **Design the failure, not just the success.** What happens when the AI is unsure or wrong? A graceful "I'm not certain — here's how to get help" beats a confident lie.

**The biggest beginner mistake: shipping the raw model.** A model behind a text box, with no expectations set, no editing, no sources, and no fallback, *feels* like magic for five minutes and like a scam by minute six. The product is everything you wrap *around* the model.

**Check yourself.** Name two things a good AI experience does for the user (besides give an answer) — and why "just a text box on a model" usually fails.

## Sources
- Google PAIR. (2021). *People + AI Guidebook* — setting expectations, user control, explainability and trust. https://pair.withgoogle.com/guidebook/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — transparency and accountability as traits of trustworthy AI. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "human-in-the-loop",
      title: "4 · The human-in-the-loop (your quality and trust engine)",
      section: "Design & Build",
      body: `**"Human-in-the-loop" means a person checks, approves, or corrects the AI before its output reaches the customer or triggers something that matters.** For a founder, this isn't red tape — it's your single most powerful tool for quality, trust, and not getting sued. AI drafts; a human decides.

**Where a human MUST stay in the loop:**

- **Anything a customer relies on** — a price, a policy, a factual claim, a medical/legal/financial statement. Models confidently make things up (a "hallucination," from F1); a person catches it before it becomes your problem.
- **Anything irreversible or sensitive** — refunds, sending money, public statements, anything affecting someone's safety, money, or rights.
- **Anything that represents your brand voice** — the final word should sound like *you*, not the average of the internet.

**Where AI can run with lighter review** — low-stakes, easily-reversible, internal drafts: a first draft you'll edit anyway, sorting your own inbox, brainstorming. Even here, *you* are accountable for what ships.

**Design the loop on purpose — three common shapes:**

1. **AI drafts → human approves → customer sees it.** Safest. Great for a young business and for anything customer-facing.
2. **AI acts → human spot-checks a sample.** For higher volume once you trust the quality — you still audit, you don't blindly trust.
3. **AI acts alone, with a hard fallback to a human.** Only for genuinely low-stakes tasks, and always with an obvious "talk to a person" escape hatch.

This is exactly NIST's **Manage** function: you actively manage the AI's risk with human oversight and fallbacks instead of assuming it behaves (NIST, 2023). The more an output can hurt a customer or your reputation, the more human stays in the loop.

> **Trust DNA:** the human-in-the-loop is the difference between "AI helped me serve customers better" and "AI embarrassed me in front of a customer." Design it before you launch, not after the first mistake.

**Check yourself.** Name one task in *your* idea where a human must approve AI output before a customer sees it — and one where lighter review is fine. What makes them different?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — the "Manage" function and human oversight. https://www.nist.gov/itl/ai-risk-management-framework
- Google PAIR. (2021). *People + AI Guidebook* — feedback, control, and graceful handling of AI errors. https://pair.withgoogle.com/guidebook/`,
    },
    {
      slug: "practice-design-build",
      title: "5 · Practice: design and build choices",
      section: "Design & Build",
      exercise: {
        instructions:
          "Fill in the missing founder term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "Pointing AI at a job it can do reliably, with a person checking the result, keeps a human ___-the-loop.",
            answer: "in",
            accept: ["in the loop", "in-the-loop"],
            explanation: "A person checks/approves AI before it reaches a customer or does something that matters. AI drafts; you decide.",
          },
          {
            prompt: "The lightest path — using a tool that already does the AI part instead of coding it — is to ___ (or integrate) it.",
            answer: "buy",
            accept: ["buy it", "integrate"],
            explanation: "Start as light as the job allows: buy/integrate, then no-code, then build with an API only when needed.",
          },
          {
            prompt: "Wiring together tools you don't have to code, with an AI step in the middle, is a ___-code approach.",
            answer: "no",
            accept: ["no-code", "nocode", "low", "low-code"],
            explanation: "You own the workflow without owning engineering — ideal for a first product or an AI-assisted service.",
          },
          {
            prompt: "Before letting AI act, telling users what it can and can't do means setting honest ___.",
            answer: "expectations",
            accept: ["expectation"],
            explanation: "PAIR's core UX rule: onboard users to AI's abilities and limits, or magic turns to disappointment.",
          },
          {
            prompt: "An AI venture you deliver by hand while AI speeds you up — keeping a human firmly in charge — is an AI-assisted ___.",
            answer: "service",
            accept: ["services"],
            explanation: "A 'done-for-you' service is a legit AI-powered business — learn what customers want, automate later.",
          },
        ],
      },
    },

    // ── Section 3 · Money & Trust ─────────────────────────────────────────────
    {
      slug: "cost-to-run",
      title: "6 · What it costs to run (tokens, subscriptions, unit economics)",
      section: "Money & Trust",
      body: `An AI product has a cost *every time someone uses it* — and founders get burned by ignoring that. Before you price anything, know what one customer actually costs you to serve. That's your **unit economics**: revenue per customer minus what it costs to serve that customer.

**How AI tools charge you (recap + the founder's lens):**

- **Subscriptions (flat monthly).** Predictable, but they stack — every "AI add-on" across your tools adds up.
- **Usage / pay-per-token (APIs).** If your product calls a model's API, you pay per **token** — the chunk a model reads and writes, roughly ¾ of a word (F2). **Both the input and the output cost tokens.** Long prompts and long answers cost more on *every single call* — and you make that call for every customer, every time.
- **Per-seat or per-action.** Some tools bill per user or per task.

**Estimate your cost-to-serve BEFORE you price:**

> cost per use ≈ tokens per request × the model's per-token price (plus any per-use tool fees)
> monthly cost ≈ cost per use × uses per customer × number of customers

A feature that's "basically free" while three friends test it can become a real monthly bill at 500 customers. The math that felt optional in testing decides whether you make money at scale.

**Control the cost like an owner:**

- **Cap output length** and keep prompts lean — you pay for both.
- **Use a cheaper/smaller model** for easy tasks; save the expensive one for the hard ones.
- **Cache or reuse** answers instead of regenerating identical work.
- **Audit subscriptions** — cancel AI tools you stopped using; "I forgot I was paying" is a silent profit leak.

The SBA's startup-cost guidance is blunt about this: list your real one-time *and* ongoing operating costs so you can estimate profit and break even (SBA, n.d.). For an AI business, your **per-use AI cost is an ongoing cost** — it belongs in that math, not as an afterthought. NIST's GenAI Profile likewise flags resource and (literal) environmental cost as a real consideration of generative-AI use (NIST, 2024).

**Check yourself.** Why can an AI feature that's "free" in testing become a real monthly bill at scale — and what two numbers do you multiply to estimate your monthly cost-to-serve?

## Sources
- U.S. Small Business Administration. (n.d.). *Calculate your startup costs* — list one-time and ongoing operating costs; estimate profit and break-even. https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)* — resource and environmental cost of generative AI. https://doi.org/10.6028/NIST.AI.600-1`,
    },
    {
      slug: "pricing-an-ai-product",
      title: "7 · Pricing an AI product or service",
      section: "Money & Trust",
      body: `Pricing is one of the highest-leverage decisions you'll make — and AI products have a twist most don't: a real, per-use cost (Lesson 6). Price too low and a busy month *loses* you money; price on cost alone and you leave value on the table. Here's how founders think about it.

**Two honest pricing approaches (and why you usually blend them):**

- **Cost-plus.** Start from what it costs you to serve a customer — including your AI cost-to-serve — and add a margin. This is your **floor**: a price below your cost-to-serve means every sale loses money. With usage-based AI costs, the floor is non-obvious, which is exactly why Lesson 6 came first.
- **Value-based.** Price on what the outcome is *worth to the customer* — the time, money, or pain you save them — not on your cost. A report that saves a customer 10 hours is worth far more than the few cents of tokens it took to draft. This is usually where the *real* price lives.

The honest rule: **your cost-to-serve sets the floor; the value you deliver sets the ceiling; your price lives in between, above the floor.** The SBA's business-plan and startup-cost guidance push the same discipline — know your costs, tie price to financial outcomes, and make sure the numbers actually work (SBA, n.d.).

**Common AI-product pricing models:**

| Model | Good when… | Watch out for… |
|---|---|---|
| **Subscription** (flat monthly) | Steady, predictable use | A heavy user whose AI cost exceeds their fee |
| **Usage-based** (pay per use/credit) | Use varies a lot per customer | Customers fearing a surprise bill |
| **Tiered** (good/better/best) | Different customer sizes | Too many confusing tiers |
| **One-time / per-project** (services) | A delivered outcome | Underpricing your own time |

**Founder cautions specific to AI:**

- **Watch the heavy user.** Flat pricing + usage-based AI cost = one power user can wipe out your margin. Cap usage, or move heavy users to a higher tier.
- **Don't race to the bottom.** "Cheaper than the big AI company" is not a strategy; *better for this specific customer* is.
- **Be honest about value.** Overstating what your AI does to justify a price isn't just bad pricing — overstated performance claims can be illegal (Lesson 8). Charge for real value, described truthfully.

**Check yourself.** What sets the *floor* on your price, what sets the *ceiling*, and why is flat-rate pricing risky when your AI cost is usage-based?

## Sources
- U.S. Small Business Administration. (n.d.). *Write your business plan* — tie pricing to costs and real financial outcomes. https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan
- U.S. Small Business Administration. (n.d.). *Calculate your startup costs* — know your cost-to-serve so your price clears it. https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs`,
    },
    {
      slug: "quality-trust-wrong-answers",
      title: "8 · Quality and trust: handling wrong answers, disclosure, and support",
      section: "Money & Trust",
      body: `Your AI *will* be wrong sometimes — that's a fact about the technology, not a bug you can fully fix. The founders who win design for that honestly. How you handle a wrong answer, whether you disclose AI, and how a customer gets help **is** your product's trustworthiness.

**Handling wrong answers — design the mistake before it happens:**

- **Catch it before the customer does.** This is the human-in-the-loop (Lesson 4) for anything that matters — verify claims, prices, and policies before they ship.
- **Make uncertainty visible.** A feature that can say "I'm not sure — here's how to check / reach a person" is more trustworthy than one that's confidently wrong. PAIR calls this designing for graceful failure and giving users control (PAIR, 2021).
- **Make it easy to fix and report.** Let customers correct or flag a bad answer. Every report is free quality data and a trust-builder.

**Disclosure — be honest that it's AI:**

- **Tell customers when they're interacting with AI**, and give a clear path to a human. Pretending a bot is a person breaks trust the instant someone notices, and transparency is core to trustworthy AI (NIST, 2023).
- **Don't overstate what the AI does.** The FTC is explicit: **AI performance claims must be truthful and substantiated** — you can't exaggerate your AI's abilities, and "the AI said so" is no defense (FTC, 2023). This is a *legal* line, not just an ethical one.

**Support — the human safety net:**

- **Always offer a way to reach a person** for problems the AI can't solve. An AI-only wall with no human exit is a trust-killer.
- **Use AI to help support, not to hide from customers.** Drafting replies for you to approve = good. A bot that stonewalls upset customers = brand damage.

> **Trust DNA:** customers forgive an honest small business that's clearly trying. They do not forgive being deceived — by a hidden bot, an overstated claim, or a wrong answer no one would fix. Handle the mistake well and you can actually *gain* trust.

**Check yourself.** Name one way to handle an AI wrong answer that builds trust, and one disclosure rule you must follow — and say why the disclosure rule is also a *legal* matter.

## Sources
- Google PAIR. (2021). *People + AI Guidebook* — designing for graceful failure, feedback, and user control. https://pair.withgoogle.com/guidebook/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — transparency and human oversight. https://www.nist.gov/itl/ai-risk-management-framework
- Federal Trade Commission. (2023). *Keep your AI claims in check* — AI performance claims must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },
    {
      slug: "legal-ethical-basics",
      title: "9 · Legal and ethical basics (privacy, copyright, honest claims)",
      section: "Money & Trust",
      body: `Building an AI product raises the legal bar, because now *other people* depend on what you ship. You don't need a law degree, but you must know these basics — getting them wrong can mean fines, lawsuits, or a dead brand. (This is general education, not legal advice — for your situation, ask a real lawyer.)

**1 · Privacy — protect your customers' data.** When customers use your AI product, you're often handling their information. Don't paste customers' personal data into public AI tools that may store or train on it; minimize what you collect; and tell customers honestly what you do with their data. "We sent your private info to a third party" is a trust-ending sentence.

**2 · Honest claims — no deceiving customers.** Marketing and product claims must be truthful and backed up. The FTC has been explicit that **AI performance claims must be substantiated** — don't say it "uses AI" if it doesn't, and don't exaggerate what it does (FTC, 2023). "The AI generated that claim" is not a defense.

**3 · No fake reviews or fake hype.** It is **illegal under an FTC rule** to create, buy, or sell fake reviews and testimonials, or fake indicators of social-media influence — with civil penalties per violation (FTC, 2024). AI makes fake reviews trivially easy to generate; that doesn't make them legal. And if someone with a **material connection** to you (paid, given free product, family, or staff) endorses your product, that connection must be disclosed **clearly and conspicuously** (FTC, n.d.).

**4 · Copyright — what you can (and can't) own.** The U.S. Copyright Office has stated that **purely AI-generated material is not protected by copyright** — copyright requires human authorship, and **prompting alone is not enough** to make an AI's output yours (U.S. Copyright Office, 2025). Practical meaning: a logo, jingle, or marketing image you got from a single prompt may not be something you can legally *own or stop others from copying*. Your *human* creative contributions are what's protectable. Also respect *others'* copyrights and your AI tools' terms of use.

**The founder's posture:** treat these as product features, not obstacles. A business that's honest about its data use, its claims, and what its AI can do earns the trust that small founders win on. NIST's framework folds privacy, fairness, and honesty into what makes AI trustworthy in the first place (NIST, 2023).

**Check yourself.** A customer's personal data, an AI-generated logo, and a friend's paid 5-star review each carry a legal/ethical rule. Name the rule for any two of them.

## Sources
- Federal Trade Commission. (2023). *Keep your AI claims in check* — AI claims must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check
- Federal Trade Commission. (2024). *Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials* (16 CFR Part 465). https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
- Federal Trade Commission. (n.d.). *Disclosures 101 for Social Media Influencers* — disclose material connections clearly and conspicuously. https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- U.S. Copyright Office. (2025). *Copyright and Artificial Intelligence, Part 2: Copyrightability* — human authorship required; prompting alone is insufficient. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`,
    },

    // ── Section 4 · Launch & Protect ──────────────────────────────────────────
    {
      slug: "launch-small-get-feedback",
      title: "10 · Launching small and getting feedback",
      section: "Launch & Protect",
      body: `The goal of your first launch is **not** to go big — it's to **learn fast and cheap with real customers.** A small, honest launch tells you whether the product actually solves the problem before you've spent your time and money scaling something nobody wants.

**Launch the smallest real thing:**

- **Start with a few real users, not the whole world.** A handful of customers who'll talk to you honestly is worth more than a viral post and silence.
- **Pick the lightest build that's still real** (Lesson 2). An AI-assisted *service* you deliver by hand, a no-code workflow, or a single feature — all let you launch in days and learn immediately.
- **Set expectations honestly** (Lesson 3) and disclose the AI (Lesson 8). Early trust is fragile; protect it from the first interaction.

**Get feedback that's actually useful:**

- **Watch what they do, not just what they say.** Do they come back? Pay? Recommend it? Behavior beats compliments.
- **Ask about the job, not your ego.** "Did this actually help you do X?" and "What almost made you stop using it?" beat "Do you like it?"
- **Track quality and trust signals** — confusion, wrong answers, "is this a bot?" frustration. Each is a fix waiting to happen.

**Then run the measure → manage loop:**

1. **Ship the small version** to real users.
2. **Measure** against what you decided "working" means — does it do the job, at a cost that works, without breaking trust?
3. **Manage** — fix what's broken, drop what's not worth it, double down on what works. NIST frames deployed AI as something you continuously *measure and manage*, not "set and forget" (NIST, 2023).

**The trap to avoid: a big, polished launch of an unvalidated idea.** Spending months building before any real customer touches it is how founders pour effort into things nobody wants. Launch small, learn, then scale what's proven.

**Check yourself.** Why is launching to a few real users better than a big public launch for a first AI product — and what kind of feedback (said vs. done) should you trust most?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — test your concept against real demand before scaling. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — the continuous "Measure" and "Manage" functions. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "protect-brand-from-slop",
      title: "11 · Protecting your brand from AI slop",
      section: "Launch & Protect",
      body: `Your brand is the promise customers feel when they meet your product. In an AI business, the fastest way to break that promise is **slop** — generic, soulless, or confidently wrong AI output shipped as-is. Bigger competitors can out-spend you; they can't out-*care* you. Your humanity and quality are the advantage. Protect them.

**How AI slop quietly damages a brand:**

- **Sameness.** When your product, emails, and replies all sound like the default chatbot, customers feel like a number. Sameness is the opposite of a brand.
- **Confident wrong answers.** A feature that invents a fact, price, or policy creates a promise you must honor — or a customer you've misled.
- **Obvious fakery.** A bot pretending to be human, an AI image presented as a real photo, padded "AI content" with nothing to say — customers can smell it, and it costs you trust.

**The founder's playbook for a slop-proof brand:**

- **Feed AI your voice; rewrite in your own words.** Treat output as raw clay, then make it specific and unmistakably *you*. Publishing it unedited means publishing the average of the internet.
- **Verify before it reaches a customer.** Every factual claim and price the AI states on your behalf is a promise — check it (Lessons 4, 8).
- **Keep a human on what represents you.** Your final word should sound like your business, not a template.
- **Own your distinctiveness.** Remember copyright reality (Lesson 9): a one-prompt logo may not even be *yours* to defend. Your real brand assets are the human craft and story behind the product.
- **Quality over volume.** Ten thoughtful, useful things beat a thousand generated ones. Slop at scale is still slop — just more of it.

> **Trust DNA, founder's edition:** use AI to be *better and faster* — never to be *fake or generic*. The brands that survive the AI flood are the ones that still feel human, accurate, and like they actually care.

**Check yourself.** Name two ways AI slop damages a brand and the single habit (about *your* voice and verification) that fixes them.

## Sources
- Federal Trade Commission. (2023). *Keep your AI claims in check* — truthful, substantiated claims protect both customers and your brand. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check
- Google PAIR. (2021). *People + AI Guidebook* — quality, expectation-setting, and trust as product design choices. https://pair.withgoogle.com/guidebook/`,
    },
    {
      slug: "capstone-product-plan",
      title: "12 · Capstone: your one-page AI product plan",
      section: "Launch & Protect",
      exercise: {
        instructions:
          "Build the spine of a real, honest plan for an AI-powered product or service — using AI as a drafting assistant and your own judgment as the decider. Work through all seven pieces below for YOUR own idea (write them out somewhere: a doc, a notebook, or by drafting with an AI tool and then verifying and rewriting in your own words). Each item names a piece and asks you to type the ONE KEYWORD shown in bold to confirm you've drafted it — the explanation then shows what a strong version of that piece does. The real work is your written plan; this just walks you through the checklist.",
        items: [
          {
            prompt: "PIECE 1 — Write one sentence: the validated NEED and the smallest AI-assisted product OR service that helps with it. Done? Type the keyword: need",
            answer: "need",
            accept: ["problem"],
            hint: "Start from a pain real people already proved they'll pay to fix (F4) — aim AI at the job it can do well.",
            explanation: "Need first, AI second. Name the job and the smallest valuable version, product or service (Lesson 1).",
          },
          {
            prompt: "PIECE 2 — Write which BUILD path the first version uses: buy/integrate, no-code, or build-with-API. Done? Type the keyword: build",
            answer: "build",
            accept: ["buy", "no-code", "nocode"],
            hint: "Start as light as the job allows; move heavier only when the lighter tool stops fitting.",
            explanation: "Buy/integrate < no-code < build-with-API. The lightest real path wins for v1 (Lesson 2).",
          },
          {
            prompt: "PIECE 3 — Describe the user EXPERIENCE: how you set expectations, show AI's role, and let users stay in control. Done? Type the keyword: experience",
            answer: "experience",
            accept: ["ux", "design"],
            hint: "Honest expectations, obvious AI role, editable output, sources when it matters, a graceful failure.",
            explanation: "The product is what you wrap around the model — not a raw text box (Lesson 3, PAIR).",
          },
          {
            prompt: "PIECE 4 — Name the one task where a HUMAN must approve AI output before a customer sees it. Done? Type the keyword: human",
            answer: "human",
            accept: ["human-in-the-loop", "loop"],
            hint: "Anything a customer relies on, anything irreversible/sensitive, anything that represents your voice.",
            explanation: "The human-in-the-loop is your quality and trust engine — design it before launch (Lesson 4).",
          },
          {
            prompt: "PIECE 5 — Estimate your COST-to-serve and the PRICE: floor (cost) and ceiling (value). Done? Type the keyword: price",
            answer: "price",
            accept: ["cost", "pricing", "money"],
            hint: "Cost per use ≈ tokens × per-token price (+ fees); price above your cost-to-serve, below the value delivered.",
            explanation: "Cost sets the floor, value sets the ceiling; beware flat pricing with usage-based AI cost (Lessons 6–7).",
          },
          {
            prompt: "PIECE 6 — Write one LEGAL/ethical rule you'll follow (privacy, honest claims, no fake reviews, or copyright). Done? Type the keyword: legal",
            answer: "legal",
            accept: ["ethics", "ethical", "privacy"],
            hint: "E.g. 'never paste customer data into public AI tools,' 'no overstated AI claims,' 'disclose paid endorsements.'",
            explanation: "Protect privacy, substantiate claims, no fake reviews, respect copyright — features, not obstacles (Lesson 9).",
          },
          {
            prompt: "PIECE 7 — Write your small LAUNCH plan and the one trust habit that keeps your brand slop-free. Done? Type the keyword: launch",
            answer: "launch",
            accept: ["feedback", "trust"],
            hint: "E.g. 'launch to 5 real users, watch what they DO; rewrite AI output in my voice and verify every claim.'",
            explanation: "Launch small to learn cheap, then measure→manage; keep it human, accurate, and yours (Lessons 10–11).",
          },
        ],
      },
    },
    {
      slug: "ai-e4-product-service-quiz",
      title: "13 · Check your understanding",
      section: "Launch & Protect",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What's the right order when turning a validated need into an AI product?",
            options: [
              "Pick a cool AI tool first, then find a use for it",
              "Need first, AI second — aim AI at the job it can do reliably, with you accountable",
              "Build the biggest version possible to look impressive",
              "Skip the customer and trust the model",
            ],
            correctIndex: 1,
            explanation:
              "AI is the how, not the why. Start from a validated need and point AI at a job it does well, keeping human oversight (NIST).",
            sourceLessonSlug: "validated-need-to-idea",
          },
          {
            prompt: "Your idea is 'when a request comes in, summarize it and draft a reply.' Which build path fits the first version best?",
            options: [
              "Build a custom model from scratch",
              "No-code / low-code with an AI step in the middle",
              "Hire an engineering team immediately",
              "Nothing — it can't be built",
            ],
            correctIndex: 1,
            explanation:
              "'On event, do steps, one uses AI' is the no-code/low-code sweet spot. Start as light as the job allows (Lesson 2).",
            sourceLessonSlug: "build-buy-nocode",
          },
          {
            prompt: "Why does 'just a text box on a model' usually fail as an AI product?",
            options: [
              "Models are too cheap to run",
              "Because the product is what you wrap around the model — expectations, control, sources, and a graceful failure",
              "Because users prefer no instructions",
              "Because AI is always right",
            ],
            correctIndex: 1,
            explanation:
              "PAIR: set honest expectations, keep users in control, show sources, design the failure. The UX around the model is the product.",
            sourceLessonSlug: "design-the-experience",
          },
          {
            prompt: "What does 'human-in-the-loop' mean, and when is it most required?",
            options: [
              "A human writes everything; AI is never used",
              "A person checks/approves AI before it ships — most required for anything a customer relies on or that's irreversible",
              "The AI supervises the human",
              "It only applies to big companies",
            ],
            correctIndex: 1,
            explanation:
              "AI drafts; a human decides. The more an output can hurt a customer or your brand, the more human stays in the loop (NIST 'Manage').",
            sourceLessonSlug: "human-in-the-loop",
          },
          {
            prompt: "Why can an AI feature that's 'free' in testing become a real bill at scale?",
            options: [
              "APIs charge a one-time fee",
              "You pay per token (input + output) on every call, for every customer — so cost grows with usage",
              "Testing always costs more than production",
              "AI tools never charge for usage",
            ],
            correctIndex: 1,
            explanation:
              "Estimate cost-per-use × uses × customers. Per-use AI cost is an ongoing cost that belongs in your unit economics (SBA; Lesson 6).",
            sourceLessonSlug: "cost-to-run",
          },
          {
            prompt: "In pricing an AI product, what sets the floor and what sets the ceiling?",
            options: [
              "The floor is whatever competitors charge; the ceiling is unlimited",
              "Your cost-to-serve sets the floor; the value you deliver to the customer sets the ceiling",
              "There is no floor; price as low as possible",
              "The model's name sets both",
            ],
            correctIndex: 1,
            explanation:
              "Price above your cost-to-serve (the floor), below the value delivered (the ceiling). Beware flat pricing with usage-based AI cost (Lesson 7).",
            sourceLessonSlug: "pricing-an-ai-product",
          },
          {
            prompt: "Which approach to a possible AI wrong answer BUILDS trust?",
            options: [
              "Always answer confidently, even when unsure",
              "Make uncertainty visible, verify what matters before it ships, and let customers correct/report it",
              "Hide that AI was involved",
              "Remove all ways to reach a human",
            ],
            correctIndex: 1,
            explanation:
              "Design for graceful failure and user control (PAIR); verify claims before a customer relies on them. Handled well, mistakes can build trust.",
            sourceLessonSlug: "quality-trust-wrong-answers",
          },
          {
            prompt: "What does the FTC say about claims that your product 'uses AI' or about what your AI can do?",
            options: [
              "You can say anything as long as it sounds impressive",
              "AI performance claims must be truthful and substantiated; 'the AI said so' is not a defense",
              "Only claims about price are regulated",
              "Claims don't matter for small businesses",
            ],
            correctIndex: 1,
            explanation:
              "The FTC is explicit that AI claims must be substantiated — overstating what your AI does is a legal line, not just an ethical one (FTC, 2023).",
            sourceLessonSlug: "quality-trust-wrong-answers",
          },
          {
            prompt: "Can you copyright a logo you got from a single AI prompt, according to the U.S. Copyright Office?",
            options: [
              "Yes — anything AI makes for you is automatically yours",
              "Purely AI-generated output isn't protected; copyright needs human authorship, and prompting alone isn't enough",
              "Yes, if the prompt was detailed",
              "Only if you paid for the AI tool",
            ],
            correctIndex: 1,
            explanation:
              "The Copyright Office (2025) requires human authorship; prompting alone is insufficient. Your human creative contributions are what's protectable (Lesson 9).",
            sourceLessonSlug: "legal-ethical-basics",
          },
          {
            prompt: "What's the goal of a small first launch of an AI product?",
            options: [
              "To go viral immediately",
              "To learn fast and cheap with real users whether it solves the problem — then scale what's proven",
              "To avoid ever talking to customers",
              "To ship the most polished version possible before anyone uses it",
            ],
            correctIndex: 1,
            explanation:
              "Launch small, measure against what 'working' means, then manage — fix, drop, or double down (NIST 'Measure/Manage'; Lesson 10).",
            sourceLessonSlug: "launch-small-get-feedback",
          },
        ],
      },
    },
  ],
};
