// Authored "AI Operations & Automation for Small Business" — E2, the entrepreneurship-track
// operations course on the ElementaryMBA school (teen + young-adult founders). Sibling to
// F4 ("AI for Entrepreneurs"); F1 (AI Literacy) and F2 (Building with AI) are recommended
// prerequisites. Practical and ethical: how to spot the repetitive tasks worth automating
// (and which to leave alone), map a simple workflow before touching a tool, use no-code/
// low-code automation and AI assistants for everyday ops (scheduling, invoices, FAQs, inbox),
// run AI-assisted customer support that knows when to hand off to a human, get help with
// inventory/data/admin, weigh the real cost of tools (subscriptions + tokens) against time
// saved, build in reliability and a fallback for when AI is wrong, handle customer data
// responsibly, and keep a human accountable. Ends with an automation-plan capstone.
//
// Carries the platform's trust DNA: AI drafts and assists, a human decides and is accountable;
// verify before it reaches a customer; never deceive. Grouped into four sections (Spot the
// Work · Build the Automation · Trust, Cost & Safety · Decide & Plan). Cited with real,
// verifiable sources: the U.S. SBA ("Manage your business"; "Write your business plan");
// the FTC ("Keep your AI claims in check"; "Protecting Personal Information: A Guide for
// Business"); NIST's AI RMF 1.0 and its Generative AI Profile (reliability, accountability,
// human oversight, cost/resource considerations); and SCORE's Management & Operations
// resources (a reputable small-business mentoring nonprofit). Two fill-in exercises + a final
// quiz whose every question links to the lesson that teaches it. No invented ROI statistics.

import type { AuthoredCourse } from "./authored-course";

export const AI_E2_OPERATIONS_COURSE: AuthoredCourse = {
  title: "AI Operations & Automation for Small Business",
  description:
    "Run the boring, repetitive parts of a small business with AI and automation — the honest way. Learn how to spot which tasks are actually worth automating (and which to leave to a human), how to map a simple workflow before you touch a tool, and how to use no-code/low-code automation and AI assistants for scheduling, invoices, FAQs, and your inbox. You'll set up AI-assisted customer support that knows when to hand off to a person, get help with inventory, data, and admin, weigh what tools really cost (subscriptions and tokens) against the time they save, build in reliability and a fallback for when AI is wrong, handle customer data responsibly, and keep a human accountable. Ends with an automation plan you can actually run. F1 (AI Literacy), F2 (Building with AI), and F4 (AI for Entrepreneurs) are recommended first.",
  lessons: [
    // ── Section 1 · Spot the Work ─────────────────────────────────────────────
    {
      slug: "spot-tasks-worth-automating",
      title: "1 · Spotting the tasks actually worth automating",
      section: "Spot the Work",
      body: `Automation isn't about replacing yourself — it's about giving the boring, repeated parts of your day to a tool so you can spend your time on the things only you can do: talking to customers, making the product better, deciding what's next. But automating the wrong thing wastes money and creates messes you have to clean up. The first skill is **knowing what to automate.**

**A task is a good automation candidate when it is:**

- **Repetitive** — you do it the same way over and over (sending the same reminder, copying numbers from one place to another, answering the same five questions).
- **Rule-based** — there's a clear "if this, then that" with few surprises.
- **Boring and low-stakes** — a small mistake is easy to catch and cheap to fix.
- **Eating real time** — it actually adds up to hours, not two minutes a week.

**Leave it to a human (for now) when the task is:**

- **High-stakes** — money decisions, legal stuff, anything where a mistake is expensive or hard to undo.
- **Full of judgment** — an upset customer, a weird edge case, a sensitive message. People can tell when they've been handed to a machine on something that mattered.
- **Rare or always different** — automating something you do twice a year usually costs more than it saves.
- **About relationships** — the personal touch *is* the value; don't automate it away.

This is exactly the discipline the U.S. Small Business Administration points small owners toward: master your **day-to-day operations** deliberately, choosing where technology helps you run leaner (SBA, n.d.). SCORE — a nonprofit that mentors small businesses — frames automation the same way: automate repetitive tasks so you can focus on the work that grows the business, not so you can take humans out of the parts that need them (SCORE, n.d.).

**Check yourself.** Name two traits that make a task a *good* automation candidate, and one kind of task you should keep a human on even if you could automate it.

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your business* — master day-to-day operations and use technology to run leaner. https://www.sba.gov/business-guide/manage-your-business
- SCORE. (n.d.). *Management & Operations* — automate repetitive tasks to focus on higher-value work. https://www.score.org/operations-resources`,
    },
    {
      slug: "map-a-workflow",
      title: "2 · Mapping a simple workflow before you automate it",
      section: "Spot the Work",
      body: `Here's the mistake almost everyone makes: they buy an automation tool and *then* try to figure out what to do with it. Backwards. **You can't automate a process you can't describe.** Before you touch a tool, you map the workflow — on paper, in a doc, anywhere — step by step.

**Mapping a workflow means writing down, in order:**

1. **The trigger** — what starts it? ("A customer fills out the order form.")
2. **Each step** — what happens next, one box at a time. ("I get an email → I add them to the list → I send an invoice → I mark it paid → I ship.")
3. **The decisions** — the "if/then" forks. ("If they paid, ship. If not, send a reminder after 3 days.")
4. **Who/what does each step** — you, a teammate, or a tool.
5. **The end** — what "done" looks like.

**Why this map is worth the ten minutes it takes:**

- **You see what's actually repetitive** — the steps that are the same every time are your automation targets (Lesson 1).
- **You spot the judgment steps** — the forks where a human should decide get marked "keep a human here."
- **You catch broken logic before a tool does** — fixing a fuzzy process is free on paper and expensive once it's wired up.
- **You can hand it off** — a clear map is something a tool (or a person) can actually follow.

A good rule: **fix the process first, then automate it.** Automating a messy workflow just gives you a faster mess. The SBA's whole "manage your business" guidance is about understanding your operations *before* you optimize them (SBA, n.d.).

**Check yourself.** Why is "buy the tool first, figure out the workflow later" backwards — and what's the very first thing you write down when you map a workflow?

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your business* — understand your day-to-day operations before optimizing them. https://www.sba.gov/business-guide/manage-your-business`,
    },

    // ── Section 2 · Build the Automation ──────────────────────────────────────
    {
      slug: "no-code-automation-and-assistants",
      title: "3 · No-code automation and AI assistants for everyday ops",
      section: "Build the Automation",
      body: `You don't need to be a programmer to automate a small business. **No-code** tools let you connect apps with clicks instead of code; **low-code** tools add a little scripting when you outgrow clicks. Paired with an AI assistant, they can take a real bite out of the repetitive ops that eat your week.

**The everyday ops worth a first look:**

- **Scheduling.** A booking tool that lets customers pick a time, syncs to your calendar, and sends reminders — no more back-and-forth emails to find a slot.
- **Invoices and payments.** Software that generates an invoice from an order, emails it, and flags the unpaid ones. AI can draft the polite "your invoice is due" follow-up; you approve it.
- **FAQs.** Turn the same five questions customers always ask into a saved set of answers — or a simple AI helper trained on *your* real answers — so you're not retyping them.
- **Inbox.** AI can sort, label, and draft replies for routine messages so you skim and approve instead of starting from scratch. (It drafts; you send.)

**How the pieces fit:** a no-code tool handles the *plumbing* ("when X happens, do Y"); an AI assistant handles the *language* ("write a friendly reply / summarize this / pull the key info"). Together: a customer books → the tool logs it and sends a confirmation → AI drafts a personalized welcome → you glance and hit send.

**Two rules that keep this honest:**

- **Start with one workflow you mapped (Lesson 2), not ten.** Automate the single most annoying repetitive task, make it reliable, *then* add the next.
- **AI drafts, you approve — especially at first.** Watch what it produces before you let anything go out on its own. SCORE's guidance is to automate repetitive tasks to free up time, not to fire-and-forget customer-facing work (SCORE, n.d.).

**Check yourself.** In an automated workflow, what's the difference between what a no-code tool does and what an AI assistant does? Give one example of each.

## Sources
- SCORE. (n.d.). *Management & Operations* — using productivity and automation tools to streamline repetitive work. https://www.score.org/operations-resources
- U.S. Small Business Administration. (n.d.). *Manage your business* — technology to handle scheduling, invoicing, and day-to-day operations. https://www.sba.gov/business-guide/manage-your-business`,
    },
    {
      slug: "ai-customer-support-and-handoff",
      title: "4 · AI customer support — and when a human must step in",
      section: "Build the Automation",
      body: `Customer support is where AI tempts you most — and where it can hurt you fastest. A good AI helper can answer common questions instantly, day or night. A bad one invents a refund policy you now have to honor, or traps an upset customer in a loop with no way to reach a person. The skill is designing the **handoff**: AI takes the easy, factual stuff; a human takes anything that needs judgment.

**What AI support is genuinely good at:**

- Answering FAQs from *your* real, verified answers (hours, shipping times, how-to steps).
- Pointing customers to the right page, form, or person.
- Drafting a reply for you to approve on routine messages.
- Handling the 2 a.m. "where's my order?" when no human is awake.

**When a human MUST step in — build these as automatic handoffs:**

- **Anyone who's upset, confused, or asks twice.** Frustration is a hard stop. Escalate, don't loop.
- **Money and promises** — refunds, billing disputes, "can you make an exception?" A bot shouldn't be inventing answers that cost you money.
- **Anything sensitive or unusual** — complaints, safety issues, edge cases the bot wasn't built for.
- **Whenever the customer asks for a person.** Always give a clear, easy path to a human.

**Two non-negotiables, straight from the trustworthy-AI playbook:**

1. **Be honest it's a bot.** NIST's AI Risk Management Framework treats transparency and human oversight as core to trustworthy AI — people should know when they're dealing with AI and be able to reach a human (NIST, 2023). Hiding the bot and ghosting people who need help destroys trust.
2. **Verify what it says.** Every price, policy, and promise an AI states on your behalf is *your* promise. If it can confidently make things up (it can — see F1), then an unverified support bot is a liability. Feed it only answers you've checked, and review its behavior.

**Check yourself.** Give two kinds of support messages an AI helper can handle, and two situations where it must automatically hand off to a human.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — transparency and human oversight as traits of trustworthy AI. https://www.nist.gov/itl/ai-risk-management-framework
- SCORE. (n.d.). *Management & Operations* — automating customer service without losing the human touch. https://www.score.org/operations-resources`,
    },
    {
      slug: "inventory-data-and-admin",
      title: "5 · AI help with inventory, data, and admin",
      section: "Build the Automation",
      body: `Behind every product business is a pile of unglamorous work: tracking what you have, keeping numbers tidy, and the admin that never ends. AI and automation can lighten all three — as long as you stay the one who checks the results.

**Inventory and ops:**

- **Tracking stock** — a simple system (even a smart spreadsheet) that counts what you have and flags when you're running low so you reorder *before* you run out.
- **Spotting patterns** — AI can summarize which items sell when, so you stock smarter. Treat its "insights" as leads to confirm against your real sales, not gospel.
- **Restock reminders** — an automation that pings you (or drafts a supplier order) at a threshold you set.

**Data and numbers:**

- **Cleaning messy data** — AI is great at turning a chaotic spreadsheet into a clean one, standardizing formats, and catching obvious duplicates. Always spot-check; it can "fix" things wrong.
- **Summarizing** — boil a month of sales or a stack of reviews down to the key points to act on.
- **Light bookkeeping support** — categorizing expenses, drafting summaries. The SBA stresses that good **bookkeeping keeps a business running smoothly** — AI can assist, but you're responsible for the numbers being right (SBA, n.d.).

**Admin:**

- Drafting routine docs, filling repetitive forms, organizing files and notes, turning a meeting into a to-do list.

**The thread running through all of it:** AI is a fast assistant for the tedious middle of the work, but **the output is only as trustworthy as your check on it.** A wrong inventory count means a missed sale or a stockout; a wrong number in your books is a real problem. Use AI to go faster, then verify what matters before you rely on it.

**Check yourself.** Name one inventory task and one data task AI can help with — and say why you'd still spot-check each one.

## Sources
- U.S. Small Business Administration. (n.d.). *Manage your business* — bookkeeping and managing assets keep a business running smoothly. https://www.sba.gov/business-guide/manage-your-business
- SCORE. (n.d.). *Management & Operations* — using tools to streamline workflows and admin. https://www.score.org/operations-resources`,
    },
    {
      slug: "practice-spot-and-build",
      title: "6 · Practice: spot it, map it, build it",
      section: "Build the Automation",
      exercise: {
        instructions:
          "Fill in the missing operations term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "Before you touch any tool, you should ___ the workflow — write down the trigger, each step, and the decision forks.",
            answer: "map",
            accept: ["mapping", "diagram"],
            explanation: "You can't automate a process you can't describe. Map it on paper first; fix the process, then automate.",
          },
          {
            prompt: "Tools that let you connect apps with clicks instead of writing software are called ___-code tools.",
            answer: "no",
            accept: ["no-code", "nocode", "low", "low-code"],
            explanation: "No-code (clicks) and low-code (a little scripting) let non-programmers automate the plumbing of a workflow.",
          },
          {
            prompt: "A task that's repetitive, rule-based, and low-stakes is a good ___ candidate.",
            answer: "automation",
            accept: ["automate"],
            explanation: "Repetitive + rule-based + low-stakes + time-eating = automate it. High-judgment, high-stakes work stays human.",
          },
          {
            prompt: "When a customer is upset or asks for a person, the support bot should automatically ___ to a human.",
            answer: "handoff",
            accept: ["hand off", "hand-off", "escalate", "escalation"],
            explanation: "Frustration, money, and 'can I talk to a person?' are hard stops — escalate, never loop.",
          },
          {
            prompt: "AI can clean a messy spreadsheet fast, but you must still ___ the result before you rely on it.",
            answer: "verify",
            accept: ["check", "spot-check", "spot check", "review"],
            explanation: "The output is only as trustworthy as your check on it — a wrong number in your books is a real problem.",
          },
        ],
      },
    },

    // ── Section 3 · Trust, Cost & Safety ──────────────────────────────────────
    {
      slug: "cost-of-tools-vs-time-saved",
      title: "7 · The real cost of tools — subscriptions, tokens, and time saved",
      section: "Trust, Cost & Safety",
      body: `Every automation tool promises to save you time. Some do. But each one also costs money — and a stack of "cheap" tools quietly adds up to a bill that eats your profit. A founder's job is to compare what a tool *costs* against the time it actually *saves*, in real numbers.

**The ways automation and AI tools charge you:**

- **Subscriptions (flat monthly).** A scheduling app, an invoicing tool, an AI writing assistant, the "AI add-on" upsell inside software you already pay for. Predictable per tool — but they stack fast, and it's easy to forget the ones you stopped using.
- **Usage / pay-per-token (AI APIs).** If a workflow calls an AI model's API, you pay per **token** — the chunk a model reads and writes, roughly ¾ of a word (see F2). **Both your input and the model's output cost tokens,** so a busy automation that runs hundreds of times a day can quietly run up a real bill. NIST's Generative AI Profile flags exactly this: the cost and resource demands of running generative AI are a real consideration, not an afterthought (NIST, 2024).
- **Per-seat or per-action.** Some tools bill per teammate or per task performed.

**Do the math before you commit — and again later:**

> (hours a task takes now − hours after automating) × what an hour is worth to you, compared against the tool's monthly cost (plus any per-token usage if it calls an AI API).

A $20/month tool that saves you 5 hours is a bargain. Five $15 tools you barely touch is a silent leak. The SBA's "write your business plan" guidance is blunt about this: account for your tools and operating costs in your real financials (SBA, n.d.).

**Control the spend like an owner:**

- **Audit your subscriptions** every quarter and cancel what you stopped using.
- For AI-API workflows: **keep prompts lean, cap output length** (you pay for both), and use a **cheaper/smaller model** for easy tasks.
- **Compare total cost to value** — does this tool earn its place, or just feel productive?

**Check yourself.** When an automation calls an AI model's API, what unit do you pay for — and what two numbers do you compare to decide whether a tool is worth keeping?

## Sources
- National Institute of Standards and Technology. (2024). *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1)* — cost and resource considerations of generative AI. https://doi.org/10.6028/NIST.AI.600-1
- U.S. Small Business Administration. (n.d.). *Write your business plan* — account for tool and operating costs in your financials. https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan`,
    },
    {
      slug: "reliability-and-fallback",
      title: "8 · Reliability and a fallback for when AI is wrong",
      section: "Trust, Cost & Safety",
      body: `Here's the rule that separates safe automation from a disaster: **AI will sometimes be wrong, so you design for that *before* it happens — not after.** A model can confidently invent an answer, mis-read a form, or break when something unexpected shows up. An automation that assumes AI is always right is a trap waiting to spring on a customer.

**Build reliability in from the start:**

- **Keep AI out of the high-stakes path on its own.** Anything involving money, legal commitments, or a promise to a customer gets a human check before it goes out. NIST's framework calls trustworthy AI **"valid and reliable,"** and you get there by putting human oversight *around* the model, not by trusting it (NIST, 2023).
- **Set confidence limits.** When a tool isn't sure — an unusual question, a low-confidence match — route it to a human instead of guessing.
- **Test on real cases before going live.** Run your automation against real (or realistic) examples and watch where it stumbles.

**Always have a fallback — a plan B for when the automation fails:**

- **A human handoff path** that actually works (Lesson 4), not a dead end.
- **A manual version of the process** you can run if the tool goes down. If your whole ops grind to a halt because one app is offline, that's a fragile business.
- **Monitoring** — check your automations regularly. "Set it and forget it" becomes "set it and it's been emailing customers garbage for a week and nobody noticed."

**The accountability part:** NIST is explicit that trustworthy AI is **accountable and transparent** — a *person* is answerable for what the system does (NIST, 2023). "The automation did it" is never an excuse a customer (or a regulator) accepts. You own the output, so you build the safety net.

**Check yourself.** What does "design for AI being wrong before it happens" look like in practice? Name one reliability check and one fallback you'd put on a customer-facing automation.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "valid and reliable" and "accountable and transparent" as traits of trustworthy AI; human oversight. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "customer-data-responsibly",
      title: "9 · Handling customer data responsibly",
      section: "Trust, Cost & Safety",
      body: `The moment you automate, customer data starts flowing through your tools — names, emails, addresses, payment details, order history. That data is a responsibility, not just a resource. Mishandle it and you can lose customers' trust, break the law, or both. Handling it well is a core operations skill, not an afterthought.

**The basics the FTC asks every business to follow:**

The FTC's *Protecting Personal Information: A Guide for Business* lays out a plan any small owner can run (FTC, n.d.):

- **Take stock** — know exactly what personal data you collect and where it lives (which app, which spreadsheet, whose laptop).
- **Scale down** — keep only what you actually need. Don't collect or hold data "just in case"; less data is less risk.
- **Lock it** — protect what you keep with strong passwords, limited access, and secure tools.
- **Pitch it** — properly delete data you no longer need.
- **Plan ahead** — have a plan for what you'll do if there's a breach.

**AI-and-automation-specific cautions:**

- **Don't paste customer personal data into public AI tools.** It may be stored or used to train the model — meaning you've leaked your customers' info into a system you don't control. Use tools and settings built for business data, and strip out personal details when you can.
- **Mind your contractors and tools.** The FTC notes your responsibility extends to the **service providers** who touch your data (FTC, n.d.). Every automation tool in your stack that sees customer data is part of your security picture — pick ones that take it seriously.
- **Be honest about how you use data.** Tell customers plainly what you collect and why. Don't surprise them.

**The trust connection:** customers hand you their data because they trust you with it. An automation that quietly funnels their personal info somewhere unsafe breaks that trust the moment they find out. Treat their data the way you'd want yours treated.

**Check yourself.** Name two of the FTC's data-protection steps, and explain why pasting customer personal data into a public AI tool is risky.

## Sources
- Federal Trade Commission. (n.d.). *Protecting Personal Information: A Guide for Business* — take stock, scale down, lock it, pitch it, plan ahead; and the security practices of service providers. https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business`,
    },

    // ── Section 4 · Decide & Plan ─────────────────────────────────────────────
    {
      slug: "keep-a-human-accountable",
      title: "10 · Keeping a human accountable",
      section: "Decide & Plan",
      body: `As you automate more, it gets dangerously easy to let the system run and stop paying attention — until something goes wrong and everyone points at the tool. The final operations discipline ties the whole course together: **a human is always accountable for what your automation does.** A machine can act, but it can't be answerable. You can.

**What "keeping a human accountable" actually means:**

- **Name the owner.** For every important automation, one person is responsible for it working right and for fixing it when it doesn't. "It's automated" is not an owner.
- **Keep a human on the decisions that matter.** Money, customer promises, anything sensitive or hard to undo — a person approves or decides, the automation just assists (Lessons 4 and 8). NIST's framework is built on this: trustworthy AI is **accountable**, with human oversight designed in (NIST, 2023).
- **Check the work.** Review what your automations are doing on a regular schedule, not just when a customer complains. Catch the drift early.
- **Don't hide behind the bot.** If your automation makes a mistake — a wrong charge, a bad reply, a leaked detail — you own it, you fix it, and you make it right with the customer. The FTC has been clear that "the AI did it" is not a defense for misleading customers (FTC, 2023).

**Why this protects your business, not just your customers:**

- It keeps your **brand trustworthy** — people forgive an honest small business that owns its mistakes; they don't forgive being deceived or ignored.
- It keeps you **legal** — you, not the tool, are responsible for truthful claims and for protecting data.
- It keeps you **in control** — you're running the automation, not the other way around.

**The whole course in one line:** automate the boring, repetitive work so you have more time for what matters — but keep a human mapping it, checking it, and answerable for it. AI assists; you decide.

**Check yourself.** What does it mean to "name the owner" of an automation, and why is "the AI did it" never a valid excuse to a customer?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — accountability and human oversight as traits of trustworthy AI. https://www.nist.gov/itl/ai-risk-management-framework
- Federal Trade Commission. (2023). *Keep your AI claims in check* — businesses remain responsible for what their AI does; "the AI did it" is not a defense. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },
    {
      slug: "capstone-automation-plan",
      title: "11 · Capstone: your automation plan",
      section: "Decide & Plan",
      exercise: {
        instructions:
          "Build a real, honest automation plan for YOUR own business idea (or one you're imagining) — using everything in this course. Work through all six pieces below, writing each out somewhere real: a doc, a notebook, or by drafting with an AI tool and then verifying and rewriting in your own words. Each item names a piece and asks you to type the ONE KEYWORD shown in bold to confirm you've drafted it; the explanation then shows what a strong version of that piece does. The real work is your written plan — this just walks you through the checklist.",
        items: [
          {
            prompt: "PIECE 1 — Pick the ONE repetitive task in your business most worth automating, and say why it qualifies (repetitive, rule-based, low-stakes, time-eating). Done? Type the keyword: task",
            answer: "task",
            accept: ["pick"],
            hint: "Choose the single most annoying repeated task — not the flashiest one. Keep high-judgment work human.",
            explanation: "A strong answer names a task that's repetitive AND rule-based AND low-stakes AND actually eats time (Lesson 1).",
          },
          {
            prompt: "PIECE 2 — MAP that task as a workflow: the trigger, each step, the decision forks, and who/what does each step. Done? Type the keyword: map",
            answer: "map",
            accept: ["workflow"],
            hint: "Trigger → steps → if/then forks → who does each → what 'done' looks like. On paper first.",
            explanation: "You can't automate a process you can't describe. Fix the process on paper, then automate it (Lesson 2).",
          },
          {
            prompt: "PIECE 3 — Name the no-code/low-code tool or AI assistant you'd use, and which part it handles (plumbing vs. language). Done? Type the keyword: tool",
            answer: "tool",
            accept: ["tools"],
            hint: "A no-code tool does the 'when X, do Y' plumbing; an AI assistant does the writing/summarizing.",
            explanation: "Start with one mapped workflow, let AI draft while you approve, and make it reliable before adding more (Lesson 3).",
          },
          {
            prompt: "PIECE 4 — Decide where a HUMAN must stay in the loop (the handoff points) for this automation. Done? Type the keyword: human",
            answer: "human",
            accept: ["handoff", "hand off"],
            hint: "Upset customers, money, sensitive cases, 'can I talk to a person?' — and a named owner for the automation.",
            explanation: "Build automatic handoffs for judgment and money, name an accountable owner, and never hide the bot (Lessons 4 & 10).",
          },
          {
            prompt: "PIECE 5 — Estimate the COST (subscription and/or per-token) and compare it to the time saved. Done? Type the keyword: cost",
            answer: "cost",
            accept: ["money"],
            hint: "(hours saved × what an hour is worth) vs. the tool's monthly cost plus any AI-API token usage.",
            explanation: "Compare real cost to real time saved, and audit subscriptions so a tool earns its place (Lesson 7).",
          },
          {
            prompt: "PIECE 6 — Write your RELIABILITY plan: a fallback for when it fails, and how you'll handle customer data responsibly. Done? Type the keyword: reliability",
            answer: "reliability",
            accept: ["fallback", "safety"],
            hint: "A working human-handoff path, a manual backup, monitoring — plus: don't paste customer data into public AI tools.",
            explanation: "Design for AI being wrong (fallback + monitoring) and protect customer data: take stock, scale down, lock it (Lessons 8 & 9).",
          },
        ],
      },
    },
    {
      slug: "ai-operations-quiz",
      title: "12 · Check your understanding",
      section: "Decide & Plan",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which task is the BEST candidate to automate in a small business?",
            options: [
              "Deciding whether to give an angry customer a refund",
              "Sending the same order-confirmation reminder you send for every order",
              "Signing a legal contract",
              "Handling a sensitive customer complaint",
            ],
            correctIndex: 1,
            explanation:
              "Good candidates are repetitive, rule-based, and low-stakes. High-judgment, high-stakes, or sensitive tasks stay with a human (SBA; SCORE).",
            sourceLessonSlug: "spot-tasks-worth-automating",
          },
          {
            prompt: "Why should you map a workflow before buying an automation tool?",
            options: [
              "Because tools are cheaper on weekends",
              "Because you can't automate a process you can't describe — and automating a messy process just gives you a faster mess",
              "Because mapping replaces the need for any tool",
              "You shouldn't; buy the tool first",
            ],
            correctIndex: 1,
            explanation:
              "Map the trigger, steps, and decision forks first. Fix the process on paper, then automate it (SBA).",
            sourceLessonSlug: "map-a-workflow",
          },
          {
            prompt: "In an automated workflow, what's the division of labor between a no-code tool and an AI assistant?",
            options: [
              "They do the exact same thing",
              "The no-code tool handles the 'when X, do Y' plumbing; the AI assistant handles language (writing, summarizing)",
              "The AI assistant does the plumbing; the tool writes the emails",
              "Neither needs a human to approve anything",
            ],
            correctIndex: 1,
            explanation:
              "No-code = plumbing; AI = language. Start with one mapped workflow, and let AI draft while you approve (SCORE).",
            sourceLessonSlug: "no-code-automation-and-assistants",
          },
          {
            prompt: "When should an AI support bot automatically hand off to a human?",
            options: [
              "Never — that's the point of a bot",
              "Only after midnight",
              "When the customer is upset, asks twice, asks for a person, or the issue involves money or something sensitive",
              "Only for questions about store hours",
            ],
            correctIndex: 2,
            explanation:
              "Frustration, money, sensitive cases, and 'can I talk to a person?' are hard stops. Be honest it's a bot and give a human path (NIST).",
            sourceLessonSlug: "ai-customer-support-and-handoff",
          },
          {
            prompt: "AI cleaned up your inventory spreadsheet in seconds. What should you do before relying on it?",
            options: [
              "Nothing — AI doesn't make mistakes on data",
              "Spot-check the result, because a wrong count means a missed sale or a stockout and a wrong number in your books is a real problem",
              "Delete your original data immediately",
              "Publish it as your official records unread",
            ],
            correctIndex: 1,
            explanation:
              "AI is a fast assistant for tedious data work, but the output is only as trustworthy as your check on it (SBA).",
            sourceLessonSlug: "inventory-data-and-admin",
          },
          {
            prompt: "When an automation calls an AI model's API, what do you actually pay for?",
            options: [
              "A one-time flat fee forever",
              "Per token — both your input and the model's output — so a busy automation can run up a real bill",
              "Per customer only",
              "Nothing; AI APIs are free",
            ],
            correctIndex: 1,
            explanation:
              "Compare (hours saved × hourly value) against the tool's monthly cost plus token usage. NIST flags generative-AI cost as a real consideration.",
            sourceLessonSlug: "cost-of-tools-vs-time-saved",
          },
          {
            prompt: "What does it mean to design an automation for the fact that AI will sometimes be wrong?",
            options: [
              "Assume AI is always right and skip checks",
              "Keep AI off the high-stakes path alone, route low-confidence cases to a human, test on real cases, and build a working fallback",
              "Turn off all monitoring once it works once",
              "Let the bot decide refunds without review",
            ],
            correctIndex: 1,
            explanation:
              "Trustworthy AI is 'valid and reliable' with human oversight around it, plus a fallback and monitoring (NIST).",
            sourceLessonSlug: "reliability-and-fallback",
          },
          {
            prompt: "Which is a responsible way to handle customer data, per the FTC?",
            options: [
              "Collect everything 'just in case' and keep it forever",
              "Take stock of what you collect, keep only what you need, lock it down, delete what you don't need, and don't paste it into public AI tools",
              "Paste customer details into any free AI tool to save time",
              "Assume your automation tools handle security so you don't have to think about it",
            ],
            correctIndex: 1,
            explanation:
              "The FTC's plan: take stock, scale down, lock it, pitch it, plan ahead — and your responsibility extends to your service providers.",
            sourceLessonSlug: "customer-data-responsibly",
          },
          {
            prompt: "Your automation sent a customer a wrong charge. Who is accountable?",
            options: [
              "The tool — 'the AI did it' settles it",
              "Nobody, because it was automated",
              "You — a named human owns the automation, fixes the mistake, and makes it right; 'the AI did it' is not a defense",
              "The customer, for trusting a bot",
            ],
            correctIndex: 2,
            explanation:
              "Trustworthy AI is accountable, with human oversight designed in (NIST); the FTC is clear 'the AI did it' is not a defense.",
            sourceLessonSlug: "keep-a-human-accountable",
          },
          {
            prompt: "What's the honest one-line goal of automating your operations?",
            options: [
              "Remove every human from the business",
              "Automate the boring, repetitive work so you have more time for what matters — while a human maps, checks, and stays accountable for it",
              "Use as many AI tools as possible",
              "Hide that you use AI from customers",
            ],
            correctIndex: 1,
            explanation:
              "Automate the repetitive parts to free your time; keep a human mapping, checking, and answerable. AI assists; you decide (NIST; SCORE).",
            sourceLessonSlug: "keep-a-human-accountable",
          },
        ],
      },
    },
  ],
};
