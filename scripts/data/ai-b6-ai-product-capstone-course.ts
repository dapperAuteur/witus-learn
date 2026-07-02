// Authored "AI Product: Idea to Shipped Tool (Capstone)", B6, the CAPSTONE of the
// Builder track on Learn.WitUS. It synthesizes F2 (Building with AI) and B1 to B5 (prompt
// engineering, agents & automations, RAG/context, fine-tuning, production engineering)
// into one end-to-end project: take a REAL problem and ship a REAL tool. The course walks
// the whole arc: scope the problem + a success metric; choose the approach (prompt vs RAG
// vs agent vs fine-tune); design the UX + human-in-the-loop; build the MVP; add guardrails
// + evals; do the cost/latency/security review; ship + monitor; document + iterate; and
// write a final capstone brief.
//
// Cited with real, verifiable sources only (each URL checked): Anthropic's "Building
// Effective Agents," the NIST AI Risk Management Framework (AI RMF 1.0) + the Generative AI
// Profile (NIST AI 600-1), the OWASP Top 10 for LLM Applications 2025, Google PAIR's
// People + AI Guidebook, and official OpenAI/Anthropic production documentation. No
// fabricated sources or claims.
//
// CAPSTONE-EXERCISE UX NOTE: the exercise checker does LITERAL string matching (no
// wildcards/regex) and a learner's real capstone artifacts (a problem statement, a metric,
// a chosen approach) are free-form and un-gradeable that way. So the drills here are written
// as "do the real work OFFLINE on your own project, then type the one guided keyword to
// confirm you did it." The keyword is always reachable and stated in the prompt; the actual
// teaching lives in the always-shown `explanation`. This is intentional, not a placeholder.

import type { AuthoredCourse } from "./authored-course";

export const AI_B6_AI_PRODUCT_CAPSTONE_COURSE: AuthoredCourse = {
  title: "AI Product: Idea to Shipped Tool (Capstone)",
  description:
    "The Builder-track capstone: take one real problem and ship one real AI tool, end to end. You'll scope the problem and pin a success metric, choose the right approach (prompt vs. RAG vs. agent vs. fine-tune), design the UX and human-in-the-loop, build a thin MVP, add guardrails and an eval set, run a cost/latency/security review, ship with monitoring, then document and iterate, finishing with a capstone brief you could hand to a teammate. It synthesizes F2 (Building with AI) and B1 to B5 of the Builder track and carries the Learn.WitUS trust DNA throughout: cited, validated, honest, affordable. F2 and B1 to B5 are the recommended prerequisites.",
  lessons: [
    // ── Section 1 · Scope & Approach ──────────────────────────────────────────
    {
      slug: "capstone-scope-the-problem",
      title: "1 · Scope a real problem and pin a success metric",
      section: "Scope & Approach",
      body: `Welcome to the capstone. Everything you learned across the Builder track converges here into one deliverable: **a real tool, for a real problem, that you actually ship.** This is not a toy. Pick a problem you (or someone you can talk to) genuinely have.

The single most common reason AI projects fail is **building before scoping**: shipping a clever demo that solves nothing measurable. So we start the way every durable product does: with the problem and the bar for success.

**Write a one-sentence problem statement.** Use this shape:

> *"\[User] struggles to \[do task] because \[friction], and today they cope by \[current workaround]."*

If you can't name the user, the task, the friction, and the current workaround, you don't understand the problem yet. Go talk to the user before you write any code. Google's People + AI Guidebook puts this first too: start from a real **user need** and define what success looks like *for the person*, not for the model (PAIR, 2021).

**Pin a success metric: one number, measurable before and after.** "It feels better" is not a metric. Good capstone metrics look like:

- Time to complete the task (minutes → minutes).
- Error/rework rate (% of outputs that need fixing).
- Throughput (items handled per hour).
- A quality score against a rubric (graded sample).

**Set a baseline.** Measure the current (non-AI) workaround first. Without a baseline you can't prove the tool helped, and "we can't tell if it worked" is how good projects quietly die.

**Scope down to a thin slice.** A capstone is one workflow done well, not a platform. Cut until you have the smallest version that, if it works, *proves the value*. Everything else is a later phase.

**Check yourself.** Write your problem statement in the \[user]/\[task]/\[friction]/\[workaround] shape, then name the one number you'll move and how you'll measure its baseline.

## Sources
- Google PAIR. (2021). *People + AI Guidebook*: see "User Needs + Defining Success." https://pair.withgoogle.com/chapter/userneeds/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: the "Map" function (establish context and intended purpose before building). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "capstone-choose-the-approach",
      title: "2 · Choose the approach: prompt vs. RAG vs. agent vs. fine-tune",
      section: "Scope & Approach",
      body: `You have a scoped problem and a metric. Now pick the **lightest approach that can hit the metric**, and no heavier. Anthropic's core guidance applies to the whole product, not just agents: *"find the simplest solution possible, and only increasing complexity when needed"* (Anthropic, 2024). Over-engineering is its own kind of slop: more cost, more latency, more ways to break.

Walk the ladder top to bottom and stop at the first rung that fits:

| Approach | Use it when… | Cost / risk |
|---|---|---|
| **Single prompt** (well-engineered, structured output) | The task is self-contained and the model already "knows" enough: summarize, classify, rewrite, extract. | Lowest. Start here by default. |
| **RAG** (retrieve your docs, then prompt) | The answer must be grounded in **your** content (policies, docs, a product corpus) and be **citable**. | Moderate; retrieval quality is the new failure surface. |
| **Agent** (model chooses steps + calls tools) | The path genuinely **can't be predetermined**: the model must decide which tools to call to reach a goal. | Higher latency/cost; more failure modes; needs least-privilege tools. |
| **Fine-tune** | You need a consistent **style/format/behavior** at scale that prompting can't reliably get, and you have quality training data. | Highest effort; data + retraining pipeline; usually a *last* resort. |

**The honest defaults:**

- **Prefer a workflow over an agent** when the steps are knowable in advance. Anthropic draws this line explicitly: workflows orchestrate through predefined code paths; agents let the model direct itself (Anthropic, 2024). Most "AI products" are workflows wearing an agent costume.
- **Reach for RAG before fine-tuning** for "answer over my documents." RAG is cheaper, updatable without retraining, and citable, which is exactly the Learn.WitUS trust pattern in machine form.
- **Fine-tune for form, retrieve for facts.** Fine-tuning teaches *how* to respond; it does not reliably add fresh, factual *knowledge*.

Most capstones land on **a single prompt or a RAG workflow.** That's not a failure of ambition, it's good engineering. Write down *why* you chose your rung; you'll defend it in the capstone brief.

**Check yourself.** For your scoped problem, which rung fits, and what's the one sentence justifying why the lighter rung above it would not?

## Sources
- Anthropic. (2024). *Building Effective Agents*: "find the simplest solution possible"; workflows vs. agents. https://www.anthropic.com/research/building-effective-agents
- OpenAI. (2025). *Optimizing LLM Accuracy*: when to use prompting, RAG, and fine-tuning (and combinations). https://platform.openai.com/docs/guides/optimizing-llm-accuracy`,
      recallContent: [
        {
          prompt: "What is the single most common reason AI projects fail, and what should you do instead?",
          answer:
            "Building before scoping: shipping a clever demo that solves nothing measurable. Start with the real problem and a bar for success first.",
        },
        {
          prompt: "What shape should your one-sentence problem statement take, and what makes a good success metric?",
          answer:
            "[user] struggles to [task] because [friction], and copes by [workaround]. The metric is one measurable number, with a baseline taken on the current (non-AI) workaround.",
        },
      ],
    },
    {
      slug: "capstone-design-ux-hitl",
      title: "3 · Design the UX and the human-in-the-loop",
      section: "Scope & Approach",
      body: `Your tool is a product, not a prompt. Before building, design **how a person experiences it**, especially how it behaves when the model is wrong, because it *will* be wrong sometimes. Google's People + AI Guidebook is the field guide here; four patterns map directly onto a capstone:

- **Set the right mental model.** Tell users plainly that this is AI, what it's good at, and where it can fail. Calibrated expectations are the difference between "useful assistant" and "betrayed trust" (PAIR, 2021, *Mental Models*).
- **Design for graceful failure.** A wrong, malformed, or low-confidence answer needs a *path forward*: a fallback, a retry, an "I'm not sure, here's how to reach a human." Don't dead-end the user (PAIR, 2021, *Errors + Graceful Failure*).
- **Give feedback and control.** Let the user correct, undo, or steer the output. Capture that feedback, it's free eval data and the start of your iteration loop (PAIR, 2021, *Feedback + Control*).
- **Earn trust by showing your work.** Where you can, show *why*: the retrieved sources (RAG), the confidence, the reasoning summary. Explainability is a trust feature, not a nicety (PAIR, 2021, *Explainability + Trust*).

**Human-in-the-loop (HITL): decide where a person must approve.** Plot each action your tool can take on two axes (**how reversible** and **how consequential**) and gate accordingly:

| Action | Reversible? | Gate |
|---|---|---|
| Draft text for the user to read | Yes | None: show it |
| Save a record / update a field | Mostly | Show a diff, let them confirm |
| Send an email, charge a card, delete data | No | **Require explicit human approval** |

This is NIST's "Human-AI configuration" made concrete: keep a person in charge of anything consequential or hard to undo (NIST, 2024). It's also your strongest guardrail, covered next.

**Check yourself.** Sketch the unhappy path: what does your tool show the user when the model returns a wrong or low-confidence answer, and which single action (if any) will you gate behind explicit human approval?

## Sources
- Google PAIR. (2021). *People + AI Guidebook*: "Mental Models," "Errors + Graceful Failure," "Feedback + Control," "Explainability + Trust." https://pair.withgoogle.com/guidebook/
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: "Human-AI Configuration." https://doi.org/10.6028/NIST.AI.600-1`,
      recallContent: [
        {
          prompt: "What is Anthropic's core guidance for how complex to build, and which rung should you start on?",
          answer:
            "Find the simplest solution possible and only add complexity when needed. Start on the lightest rung (a single well-engineered prompt) and stop at the first one that hits the metric.",
        },
        {
          prompt: "For answering over your own documents, should you reach for RAG or fine-tuning, and why?",
          answer:
            "Reach for RAG first: it is cheaper, updatable without retraining, and citable. Fine-tune for form (style and format), retrieve for facts.",
        },
      ],
    },
    {
      slug: "capstone-practice-scope-brief",
      title: "4 · Practice: lock your scope, metric, and approach",
      section: "Scope & Approach",
      body: `Time to commit your project on paper before you build. **Do the real thinking offline** (on your own problem, in your own notes) then type the one guided keyword to confirm each step. The keyword just records that you did the work; the *value* is in the artifact you wrote and in each explanation below.`,
      exercise: {
        instructions:
          "Each item asks you to produce a real piece of your capstone plan OFFLINE first, then type the exact keyword shown in the prompt to confirm. Spelling is forgiving; the explanation states the rule that makes a good answer.",
        items: [
          {
            prompt:
              "Write your problem statement in the shape \"[user] struggles to [task] because [friction], and copes by [workaround].\" When it names all four parts, type: scoped",
            answer: "scoped",
            explanation:
              "If you can't fill all four slots (user, task, friction, current workaround) you don't understand the problem yet. Go talk to the user before writing code. A real, named user is the foundation of the whole capstone.",
          },
          {
            prompt:
              "Pick the ONE number your tool will move (time, error rate, throughput, or a rubric score) and write down how you'll measure its baseline today. When you have a number and a baseline plan, type: metric",
            answer: "metric",
            explanation:
              "\"It feels better\" can't be defended. One measurable number, with a baseline measured on the current workaround, is how you prove the tool helped, and avoid the \"we can't tell if it worked\" death.",
          },
          {
            prompt:
              "Choose your approach rung (prompt, RAG, agent, or fine-tune) and write one sentence on why the lighter rung above it doesn't fit. When done, type: approach",
            answer: "approach",
            explanation:
              "Pick the lightest approach that can hit the metric. Prefer prompt over RAG over agent over fine-tune; reach for RAG before fine-tuning for \"answer over my docs.\" Anthropic: find the simplest solution and only add complexity when needed.",
          },
          {
            prompt:
              "Name the single action in your tool that is irreversible OR consequential, and decide it must be gated behind explicit human approval. When you've identified it, type: gate",
            answer: "gate",
            explanation:
              "Plot actions on reversible × consequential. Anything hard to undo (send email, charge a card, delete data) gets an explicit human-approval gate, NIST's Human-AI configuration and your strongest guardrail.",
          },
        ],
      },
    },

    // ── Section 2 · Build & Harden ────────────────────────────────────────────
    {
      slug: "capstone-build-the-mvp",
      title: "5 · Build the thin MVP",
      section: "Build & Harden",
      body: `Now build, but build the **thinnest version that exercises the whole loop end to end.** A capstone MVP is one slice that goes input → prompt assembly → model call → validation → action, on real data, for one real user. Resist breadth; depth on one path beats a wide surface that half-works.

**Build order that keeps you honest:**

1. **Hard-wire the happy path first.** Get one real input all the way to one real, useful output. No settings, no edge cases, just proof the core works.
2. **Make the prompt a versioned artifact, not a string buried in code.** You'll change it constantly; treat the prompt and the model name as configuration you can diff and roll back (this matters in the cost/eval lessons).
3. **Constrain the output to a checkable shape.** Ask for strict JSON or a fixed set of labels so your code can validate it. Free-form text you can't validate is free-form text you can't trust.
4. **Parse and validate before you act.** Reject malformed output; never pass raw model text into a save, send, or delete. (The guardrails lesson hardens this.)
5. **Log every call** (input, output, latency, token counts, errors) from day one. You cannot evaluate, cost, or debug what you didn't log.

**Capstone-scale engineering rules:**

- **Secrets server-side, always.** Your API key lives in server environment variables, never in client code or git history. A leaked key is someone else's bill and your data exposure (OWASP, 2025, LLM02).
- **Small, checkable model tasks.** Give the model the narrowest job in the pipeline and keep deterministic logic in your code, the same pattern whether you're building a prompt, a workflow, or an agent.
- **Stub what you can't build yet.** A fake "send email" that just logs lets you test the whole loop safely before wiring the real, irreversible action.

By the end of this stage you should be able to demo: *real input in, useful output out, logged, with secrets safe.* That's a spine you can harden, not a pile of features that don't connect.

**Check yourself.** Name two things from this lesson you'd do on the very first day of building, before adding any second feature.

## Sources
- OpenAI. (2025). *Production best practices*: managing latency, secrets, and operational concerns when moving from prototype to production. https://platform.openai.com/docs/guides/production-best-practices
- OWASP. (2025). *Top 10 for LLM Applications 2025*. LLM02: Sensitive Information Disclosure (protecting keys and secrets). https://genai.owasp.org/llm-top-10/`,
      recallContent: [
        {
          prompt: "How should your tool behave when the model returns a wrong or low-confidence answer?",
          answer:
            "Design for graceful failure: give a path forward (a fallback, a retry, or a way to reach a human) and never dead-end the user. Set a calibrated mental model up front too.",
        },
        {
          prompt: "How do you decide which actions need a human-in-the-loop approval gate?",
          answer:
            "Plot each action on how reversible and how consequential it is. Gate anything irreversible or consequential (send an email, charge a card, delete data) behind explicit human approval.",
        },
      ],
    },
    {
      slug: "capstone-guardrails-and-evals",
      title: "6 · Add guardrails and an eval set",
      section: "Build & Harden",
      body: `A working demo is not a shippable tool. Because models are probabilistic, *"it worked when I tried it"* is not evidence. Two disciplines turn a demo into something trustworthy: **an eval set** (so you can *measure* quality and catch regressions) and **guardrails** (so a bad output can't *do harm*).

**Evals: make quality measurable.**

- **Build a test set** of representative inputs paired with known-good answers or rubrics (pull real examples from your day-one logs).
- **Pick a metric that fits the task**: exact match for classification; "is it grounded in the retrieved sources?" for RAG; a rubric scored by a human or a separate "LLM-as-judge" model for open-ended writing.
- **Run it every time you change the prompt or model.** A tweak that helps one case can silently break five others; only the eval set reveals that. This is NIST's **Measure** function: don't *hope* it's reliable, *test* it (NIST, 2023).

**Guardrails: limit the blast radius of a bad output.**

- **Validate structure and bounds before acting**: reject malformed JSON, out-of-range values, disallowed labels; fall back safely when validation fails.
- **Treat all model input AND output as untrusted.** Attacker text in your inputs (or in retrieved/RAG content) can hijack the model's instructions: **prompt injection, OWASP's #1 LLM risk** (OWASP, 2025, LLM01). The defense is to never let unvalidated model output drive a sensitive action.
- **Encode/escape output you render** so it can't inject markup or commands downstream: improper output handling (OWASP, 2025, LLM05).
- **Apply least privilege** if your tool can act: give it the fewest, narrowest tools the task needs. A tool that "looks up an order by ID" is safe; one that "runs any SQL" is a foot-gun (OWASP, 2025, LLM06, Excessive Agency).
- **Bound consumption.** Cap output length, tool calls, and request volume so a loop or an abuse spike can't run up an unbounded bill (OWASP, 2025, LLM10).
- **Keep the human gate** you designed in Lesson 3 on anything consequential.

This is NIST's **Manage** function in practice: you actively contain the AI component's risk rather than assuming it behaves (NIST, 2023).

**Check yourself.** Name the OWASP #1 LLM risk and the single habit ("treat all model input and output as ___") that defends against it, then name one item that belongs in your capstone eval set.

## Sources
- OWASP. (2025). *Top 10 for LLM Applications 2025*: LLM01 Prompt Injection; LLM05 Improper Output Handling; LLM06 Excessive Agency; LLM10 Unbounded Consumption. https://genai.owasp.org/llm-top-10/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: the "Measure" and "Manage" functions. https://www.nist.gov/itl/ai-risk-management-framework`,
      recallContent: [
        {
          prompt: "What is a capstone MVP, and what should you do on the very first day of building?",
          answer:
            "The thinnest slice that runs the whole loop end to end (input, prompt assembly, model call, validation, action). On day one, hard-wire one real input to one useful output, log every call, and keep secrets server-side.",
        },
        {
          prompt: "Why constrain the model's output to a checkable shape, and what must you do before acting on it?",
          answer:
            "Ask for strict JSON or a fixed set of labels so your code can validate it; text you cannot validate you cannot trust. Parse and validate before any save, send, or delete, never passing raw model text straight into an action.",
        },
      ],
    },
    {
      slug: "capstone-cost-latency-security",
      title: "7 · Cost, latency, and security review",
      section: "Build & Harden",
      body: `Before you ship, do the review that separates a responsible tool from a liability. Three lenses: **cost**, **latency**, and **security**, each with concrete questions and fixes at capstone scale.

**Cost: know what you're spending.**

- **You pay per token**, input *and* output. Estimate before scaling: \`tokens per request × requests per day × the model's per-token price\`. A feature that's free in testing can be a real bill at 10,000 uses a day.
- **Levers:** cap output length; retrieve fewer/smaller chunks; cache repeated answers; and **right-size the model**: use a smaller/cheaper model for easy tasks and reserve the big one for the hard ones. NIST's GenAI Profile flags large-model **environmental impact** as a real cost too (NIST, 2024).

**Latency: design for the wait.**

- Model calls take time; long prompts, big retrieved context, and multi-step agents add up. Each extra autonomous step is more latency *and* more cost (Anthropic, 2024).
- **Levers:** stream output so the user sees progress; trim the prompt and context; parallelize independent calls; cache; and show honest "working…" states so the wait feels intentional, not broken (OpenAI, 2025).

**Security: assume hostile input.**

- **Prompt injection** is the headline risk again here: any text that reaches the model (user input *and* retrieved/RAG documents) can carry an attack (OWASP, 2025, LLM01). Never let unvalidated model output trigger a sensitive action.
- **Secrets:** keys in server env vars only; never in client code, logs, or git history (OWASP, 2025, LLM02).
- **Privacy / data minimization:** don't send users' personal or secret data to a third-party model without need and consent; minimize what you collect and retain (NIST, 2024).
- **Supply chain:** pin your model versions and dependencies; a provider model update can shift behavior, and models sometimes invent plausible-but-fake package names (OWASP, 2025, LLM03).

Write the answers down, this review *is* a section of your capstone brief, and it's how you ship something **cited, validated, honest, and affordable** rather than just fast.

**Check yourself.** Write the token-cost formula, name one latency lever you'll use, and name the security risk that applies to *both* user input and retrieved RAG content.

## Sources
- OpenAI. (2025). *Production best practices / Latency optimization*: streaming, prompt size, and operational cost/latency tradeoffs. https://platform.openai.com/docs/guides/production-best-practices
- OWASP. (2025). *Top 10 for LLM Applications 2025*: LLM01 Prompt Injection; LLM02 Sensitive Information Disclosure; LLM03 Supply Chain. https://genai.owasp.org/llm-top-10/
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: Data Privacy; Environmental Impacts. https://doi.org/10.6028/NIST.AI.600-1`,
      recallContent: [
        {
          prompt: "What two disciplines turn a working demo into a trustworthy tool, and what does each do?",
          answer:
            "An eval set (a test set of inputs with known-good answers so you can measure quality and catch regressions) and guardrails (so a bad output cannot do harm). Run the eval every time you change the prompt or model.",
        },
        {
          prompt: "What is the OWASP #1 LLM risk, and the single habit that defends against it?",
          answer:
            "Prompt injection (LLM01): attacker text in user input or retrieved RAG content can hijack instructions. Treat all model input and output as untrusted, and never let unvalidated output drive a sensitive action.",
        },
      ],
    },

    // ── Section 3 · Ship, Iterate & Defend ────────────────────────────────────
    {
      slug: "capstone-ship-and-monitor",
      title: "8 · Ship it, and monitor",
      section: "Ship, Iterate & Defend",
      body: `Shipping is not the finish line; it's the start of the **measure → manage** loop. An AI tool is still software, so most of going live is ordinary engineering, plus a few AI-specific musts.

**The launch checklist:**

- **Pin the model and prompt as versioned config.** Know exactly which model version and prompt are live, so when a provider updates a model (and behavior shifts) you can re-run evals *before* adopting the change, not after a user finds the regression.
- **Run your eval set in CI.** A prompt or model change that regresses quality should fail the build, the same way a failing unit test does, not surprise a user in production.
- **Handle failure gracefully.** Model APIs time out, rate-limit, and occasionally return junk. Add timeouts, retries with backoff, and the user-facing fallback you designed in Lesson 3. A model hiccup must not take down the page.
- **Have a kill switch.** A flag that disables the AI feature and degrades to the non-AI fallback lets you stop the bleeding instantly if it misbehaves.
- **Monitor in production:** track latency, error rate, **token cost**, refusal/fallback rate, and your **success metric** from Lesson 1. Watch real usage for surprises and feed them back into the eval set.

This is NIST's framework as an operating rhythm: you don't ship-and-forget, you **continuously Measure and Manage** the deployed system (NIST, 2023). Anthropic makes the same point for agentic systems specifically: test in sandboxed environments and keep appropriate guardrails because autonomous steps compound errors (Anthropic, 2024).

> **Trust DNA:** a shipped AI tool you don't monitor is a liability you haven't noticed yet. Watch the metric, watch the cost, keep the kill switch in reach.

**Check yourself.** Name two things that belong in versioned config so you can re-evaluate before a provider's change reaches users, and one signal you'll watch in production.

## Sources
- OpenAI. (2025). *Production best practices*: versioning, error handling, retries, and monitoring for live LLM features. https://platform.openai.com/docs/guides/production-best-practices
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: continuous "Measure" / "Manage." https://www.nist.gov/itl/ai-risk-management-framework
- Anthropic. (2024). *Building Effective Agents*: sandboxed testing and guardrails for autonomous systems. https://www.anthropic.com/research/building-effective-agents`,
      recallContent: [
        {
          prompt: "How do you estimate what an AI tool will cost at scale, and name two levers to lower it.",
          answer:
            "Tokens per request times requests per day times the model's per-token price (you pay for input and output). Levers: cap output length, retrieve fewer or smaller chunks, cache repeated answers, and right-size the model.",
        },
        {
          prompt: "Name one latency lever, and the security risk that applies to both user input and retrieved RAG content.",
          answer:
            "Latency lever: stream output (or trim the prompt and context, parallelize independent calls, or cache). The shared risk is prompt injection: any text reaching the model, user input or RAG documents, can carry an attack.",
        },
      ],
    },
    {
      slug: "capstone-document-and-iterate",
      title: "9 · Document, iterate, and own the ethics",
      section: "Ship, Iterate & Defend",
      body: `A capstone isn't done when it runs; it's done when someone else could **run it, trust it, and improve it.** That takes documentation and a deliberate iteration loop, and, because real people now use what you shipped, owning the ethics.

**Document so it survives you.** A short README/runbook that covers:

- **What it does and for whom**: the problem statement and success metric from Lesson 1.
- **How it works**: the approach you chose and *why* (the justification from Lesson 2).
- **The prompt + model version**, where config lives, and how to change them.
- **The eval set**: how to run it and what "passing" means.
- **Guardrails and the human gate**: what's validated, what requires approval, where the kill switch is.
- **Cost + monitoring**: what it costs per use and which signals to watch.

This is also the **Govern** function of NIST's framework: documented accountability so the system can be operated and audited by people who aren't you (NIST, 2023).

**Iterate from evidence, not vibes.** The loop: watch production → collect failures and user feedback (Lesson 3's Feedback + Control) → add them to the eval set → change the prompt/approach → confirm the eval *improves* and doesn't regress → re-ship. Every change is justified by a number, not a hunch.

**Own the ethics (you ship to real people now):**

- **Be honest about AI.** Disclose that it's AI, that it can be wrong, and how to reach a human (PAIR, 2021).
- **Don't deceive or harm.** No fake people, fake reviews, impersonation, or manipulative dark patterns. Easy to do with AI doesn't make it right.
- **Mind bias and fairness.** If your tool decides anything about people, test across groups and keep human judgment in charge (NIST, 2024).
- **Cite and disclose.** If it makes factual claims, ground them (RAG) and show sources, the Learn.WitUS DNA: trust is a feature, not an afterthought.

**Check yourself.** Name two sections your capstone README must contain, and one ethical practice you'll apply before real users touch the tool.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: the "Govern" function (documentation and accountability). https://www.nist.gov/itl/ai-risk-management-framework
- Google PAIR. (2021). *People + AI Guidebook*: "Feedback + Control" (collecting feedback to improve) and onboarding users to AI's limits. https://pair.withgoogle.com/guidebook/
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: Harmful Bias; Human-AI Configuration. https://doi.org/10.6028/NIST.AI.600-1`,
      recallContent: [
        {
          prompt: "Why pin the model version and prompt as versioned config before you ship?",
          answer:
            "So when a provider updates a model and behavior shifts, you can re-run your evals before adopting the change instead of after a user finds the regression. Pair it with running the eval set in CI so a quality regression fails the build.",
        },
        {
          prompt: "What is a kill switch, and name two signals to monitor in production.",
          answer:
            "A flag that disables the AI feature and degrades to the non-AI fallback so you can stop the bleeding instantly. Monitor latency, error rate, token cost, refusal or fallback rate, and your success metric.",
        },
      ],
    },
    {
      slug: "capstone-final-brief",
      title: "10 · Capstone: write the brief",
      section: "Ship, Iterate & Defend",
      body: `This is the capstone deliverable. You've scoped, chosen, designed, built, hardened, reviewed, shipped, and documented. Now **assemble it into one brief** you could hand to a teammate, a hiring manager, or your future self, proof you can take an AI tool from idea to shipped.

**The brief: produce it OFFLINE on your real project, then confirm below.** It should fit on a page or two and contain:

1. **Problem + metric.** The \[user]/\[task]/\[friction]/\[workaround] statement, the one number you moved, its baseline, and the result.
2. **Approach + justification.** Prompt / RAG / agent / fine-tune, and one sentence on why the lighter rung didn't fit.
3. **UX + human-in-the-loop.** The happy path, the unhappy path (graceful failure), and which action you gated behind human approval.
4. **What you built.** The MVP loop (input → prompt → model → validate → act), with the prompt + model version pinned as config.
5. **Guardrails + evals.** What you validate, your eval set and metric, and the OWASP risks you defended against.
6. **Cost / latency / security.** Your token-cost estimate, latency levers, and security/privacy review.
7. **Ship + monitor.** What's in CI, the kill switch, and the production signals you watch.
8. **Iterate + ethics.** Your feedback-to-eval loop and the ethical commitments you made.

> **Trust DNA, final form:** ship things that are *cited, validated, honest, and affordable.* Speed is easy; trustworthy is the whole job, and now you've proven you can do it end to end.

Do the writing offline, then run the confirmation drill below, and finish with the quiz to lock the whole arc.

**Check yourself.** Could a teammate read only your brief and (a) understand what problem it solves, and (b) run and re-evaluate the tool without you? If not, which section is missing?`,
      exercise: {
        instructions:
          "Assemble your capstone brief OFFLINE first (all eight parts above), then type each guided keyword to confirm. The keyword records completion; the explanation states what makes that part defensible.",
        items: [
          {
            prompt:
              "Confirm your brief states the problem, the success metric, the baseline, AND the actual result (the number after shipping). When it does, type: results",
            answer: "results",
            explanation:
              "A capstone proves impact. Without the before-number (baseline) and the after-number (result), you've built a demo, not a tool that demonstrably helped. The metric closing the loop is the heart of the brief.",
          },
          {
            prompt:
              "Confirm your brief names the OWASP risks you defended against and how (validation, least privilege, secrets, bounded consumption). When it does, type: hardened",
            answer: "hardened",
            explanation:
              "Treat all model input and output as untrusted (prompt injection, LLM01); keep secrets server-side (LLM02); least-privilege tools (LLM06); cap consumption (LLM10). Naming the risks and your defenses is what makes the tool shippable, not just runnable.",
          },
          {
            prompt:
              "Confirm a teammate could read ONLY your brief and run + re-evaluate the tool without you: prompt/model version pinned, eval set documented, kill switch noted. When true, type: handoff",
            answer: "handoff",
            explanation:
              "Documented accountability is NIST's Govern function: the tool must be operable and auditable by someone who isn't you. If the brief can't be handed off, the capstone isn't done.",
          },
        ],
      },
    },
    {
      slug: "capstone-quiz",
      title: "11 · Check your understanding",
      section: "Ship, Iterate & Defend",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What's the most common reason AI capstone projects fail, and the first thing you should do instead?",
            options: [
              "Choosing the wrong model; pick the biggest one available",
              "Building before scoping; start from a real user need and a measurable success metric",
              "Writing too few prompts; write more prompts",
              "Using RAG; avoid retrieval entirely",
            ],
            correctIndex: 1,
            explanation:
              "Building a clever demo that solves nothing measurable is the classic failure. Start from a named user need and pin one number you'll move, with a baseline, PAIR's 'User Needs + Defining Success.'",
            sourceLessonSlug: "capstone-scope-the-problem",
          },
          {
            prompt: "Why must you measure a baseline of the current (non-AI) workaround before building?",
            options: [
              "To make the project take longer",
              "So you can prove the tool actually helped: without a before-number you can't tell if it worked",
              "Baselines are only needed for fine-tuning",
              "To choose the temperature setting",
            ],
            correctIndex: 1,
            explanation:
              "No baseline means 'we can't tell if it worked', which is how good projects quietly die. The before/after on one metric is what proves impact.",
            sourceLessonSlug: "capstone-scope-the-problem",
          },
          {
            prompt: "You need answers grounded in your own documents, kept fresh, and citable. Which approach fits best, before reaching for anything heavier?",
            options: [
              "Fine-tune a model on the documents",
              "RAG: retrieve the relevant passages and put them in the prompt",
              "An autonomous multi-tool agent",
              "A larger context window only",
            ],
            correctIndex: 1,
            explanation:
              "Reach for RAG before fine-tuning for 'answer over my docs': it's cheaper, updatable without retraining, and citable. Fine-tune for form, retrieve for facts.",
            sourceLessonSlug: "capstone-choose-the-approach",
          },
          {
            prompt: "Anthropic's core guidance for choosing how complex to build is:",
            options: [
              "Always build a full agent for maximum capability",
              "Find the simplest solution possible, and only increase complexity when needed",
              "Fine-tune first, then simplify",
              "Add as many tools as possible up front",
            ],
            correctIndex: 1,
            explanation:
              "Prefer a workflow over an agent when steps are knowable; over-engineering adds cost, latency, and failure modes. Stop at the lightest rung that hits the metric.",
            sourceLessonSlug: "capstone-choose-the-approach",
          },
          {
            prompt: "When designing the UX, how should your tool behave when the model returns a wrong or low-confidence answer?",
            options: [
              "Hide the failure and show the answer anyway",
              "Design graceful failure: a fallback, retry, or path to a human; never dead-end the user",
              "Crash so the user knows something went wrong",
              "Silently retry forever",
            ],
            correctIndex: 1,
            explanation:
              "PAIR's 'Errors + Graceful Failure': a wrong or low-confidence output needs a path forward. Pair it with calibrated mental models so trust survives the occasional miss.",
            sourceLessonSlug: "capstone-design-ux-hitl",
          },
          {
            prompt: "Which action most clearly requires an explicit human-in-the-loop approval gate?",
            options: [
              "Drafting text for the user to read",
              "Sending an email, charging a card, or deleting data (irreversible/consequential)",
              "Showing a confidence score",
              "Logging the request",
            ],
            correctIndex: 1,
            explanation:
              "Gate by reversibility × consequence. Irreversible or consequential actions get explicit human approval, NIST's Human-AI configuration, and your strongest guardrail.",
            sourceLessonSlug: "capstone-design-ux-hitl",
          },
          {
            prompt: "What should you do on the very first day of building the MVP?",
            options: [
              "Add every planned feature at once",
              "Hard-wire one real input to one useful output, log every call, and keep secrets server-side",
              "Fine-tune a custom model",
              "Skip validation to move faster",
            ],
            correctIndex: 1,
            explanation:
              "Build the thin end-to-end spine first: happy path working, calls logged from day one, keys in server env vars (OWASP LLM02). Depth on one path beats a wide surface that half-works.",
            sourceLessonSlug: "capstone-build-the-mvp",
          },
          {
            prompt: "What's the OWASP #1 LLM risk, and the habit that defends against it?",
            options: [
              "Slow responses; add caching",
              "Prompt injection; treat all model input and output as untrusted and validate it before any sensitive action",
              "High cost; use a smaller model",
              "Bias; retrain the model",
            ],
            correctIndex: 1,
            explanation:
              "Prompt Injection (LLM01): attacker text in user input OR retrieved RAG content can hijack instructions. Never let unvalidated model output drive a sensitive action.",
            sourceLessonSlug: "capstone-guardrails-and-evals",
          },
          {
            prompt: "How do you estimate what your AI tool will cost at scale?",
            options: [
              "Lines of code × developers",
              "Tokens per request × requests per day × the model's per-token price",
              "Number of users × subscription fee",
              "Prompts × temperature",
            ],
            correctIndex: 1,
            explanation:
              "You pay per token, input and output. A feature that's free in testing can be a real bill at scale. Cap output, retrieve less, cache, and right-size the model.",
            sourceLessonSlug: "capstone-cost-latency-security",
          },
          {
            prompt: "Why pin the model version and prompt as versioned config before you ship?",
            options: [
              "It makes the model deterministic",
              "So when a provider updates a model and behavior shifts, you can re-run your evals before adopting the change, not after a user finds the regression",
              "It lowers the token price",
              "It removes the need for a kill switch",
            ],
            correctIndex: 1,
            explanation:
              "Pinned config + evals in CI means a model or prompt change that regresses quality fails the build instead of surprising a user. Shipping starts the continuous Measure/Manage loop (NIST).",
            sourceLessonSlug: "capstone-ship-and-monitor",
          },
        ],
      },
    },
  ],
};
