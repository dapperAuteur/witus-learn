// Authored "Building with AI": F2, the builder foundation on the WitUS Trade School.
// Sibling to F1 (AI Literacy), which is the recommended prerequisite. Career- and
// maker-oriented: ship real things with AI (tools, automations, a simple app/agent)
// while carrying the platform's trust DNA (verify the output, cite real sources, don't
// ship slop). Grouped into four sections (Foundations · Prompt to Product ·
// Automations & Agents · Ship & Evaluate). Cited with real, verifiable sources: NIST
// AI RMF + the GenAI Profile (NIST AI 600-1), the OWASP Top 10 for LLM Applications,
// the original RAG paper (Lewis et al., 2020), official prompting docs, Anthropic's
// "Building Effective Agents," and Google PAIR's People + AI Guidebook. Two fill-in
// exercises + a final quiz whose every question links to the lesson that teaches it.

import type { AuthoredCourse } from "./authored-course";

export const AI_BUILDING_COURSE: AuthoredCourse = {
  title: "Building with AI",
  description:
    "Go from using AI to building with it. Learn what you can (and can't) reliably ship with today's models, how to turn prompts into working code, when to reach for no-code vs. an API, and how to build a real automation and a simple assistant. We connect AI to your own data with RAG, add guardrails, evaluate the output, and deploy it, all while carrying the Learn.WitUS trust DNA: verify, cite, and never ship slop. F1 (AI Literacy) is the recommended prerequisite.",
  lessons: [
    // ── Section 1 · Foundations ───────────────────────────────────────────────
    {
      slug: "what-you-can-build",
      title: "1 · What you can (and can't) build with AI today",
      section: "Foundations",
      body: `You finished AI Literacy knowing what a large language model **is**: a next-token predictor, fluent but not a source of truth. This course is about turning that into **things you ship**. First, calibrate expectations.

**What AI is genuinely good at building right now:**

- **Drafting and transforming text**: summaries, rewrites, translations, structured extraction (turn a messy email into a clean JSON record).
- **Code assistance**: scaffolding, boilerplate, regexes, tests, explaining unfamiliar code.
- **Classification and routing**: "is this support ticket about billing or bugs?"
- **Conversational interfaces**: assistants, Q&A over a defined body of content (with retrieval, see the RAG lesson).
- **Glue between systems**: reading one app's output and writing another app's input.

**What it is still weak or unreliable at (design around these):**

- **Exact facts, fresh events, math, and counting**: unless you connect it to tools that look things up or compute.
- **Determinism**: the same prompt can give different answers. Anything that must be exact (a total, a legal clause) needs validation, not trust.
- **Long, multi-step reliability**: the more autonomous steps, the more chances to drift. Keep scope tight (the agent lesson returns to this).

The builder's mindset: **AI is a probabilistic component in an otherwise normal system.** You wrap it in validation, fallbacks, and human review, the same way you'd wrap any unreliable input. NIST's AI Risk Management Framework calls this designing for systems that are "valid and reliable", the first trait of trustworthy AI (NIST, 2023).

**Check yourself.** Name one task AI is reliable for and one it is not, and say what you'd add to make the unreliable one safe to ship.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: see "Confabulation." https://doi.org/10.6028/NIST.AI.600-1`,
    },
    {
      slug: "anatomy-of-an-ai-feature",
      title: "2 · The anatomy of an AI feature",
      section: "Foundations",
      body: `Almost every AI product you'll build is the same five-part loop. Learn it once and you'll recognize it everywhere.

1. **Input**: what the user (or another system) gives you: a question, a document, a row of data.
2. **Prompt assembly**: your code combines that input with instructions, context, and any retrieved data into the text the model sees. This is where most of your real work lives.
3. **Model call**: you send that prompt to a model, usually over an **API** (an HTTP request to a provider like OpenAI, Anthropic, or Google; or a local model). You get back generated text.
4. **Validation / parsing**: you check the output: is it the right shape (valid JSON?), within bounds, not obviously wrong? You **never** pass raw model output straight to a sensitive action.
5. **Action / output**: you show it to the user, save it, or trigger the next step.

A few terms you'll use constantly:

- **Token**: the chunk a model reads and bills by (roughly ¾ of a word). Both your input and the model's output cost tokens; long prompts and long answers cost more (the cost lesson returns to this).
- **Context window**: the maximum tokens a model can consider at once. Big documents may not fit; that's a reason RAG exists.
- **System prompt**: standing instructions that set the model's role and rules, separate from the user's message.
- **Temperature**: a knob for randomness. Low (near 0) for factual/structured tasks; higher for brainstorming.

**Check yourself.** In the five-part loop, which step is where you check that the output is the right shape before acting on it?

## Sources
- OpenAI. (2025). *Prompting* (API documentation): system messages, parameters, structure. https://platform.openai.com/docs/guides/prompting
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: see "Human-AI Configuration." https://doi.org/10.6028/NIST.AI.600-1`,
      recallContent: [
        {
          prompt: "What is the builder's mindset for an AI model inside an otherwise normal system?",
          answer: "Treat it as a probabilistic component. You wrap it in validation, fallbacks, and human review, the same way you would wrap any unreliable input.",
        },
        {
          prompt: "Name one thing today's models are still weak or unreliable at, so you must design around it.",
          answer: "Exact facts, fresh events, math, and counting (unless connected to tools); determinism, since the same prompt can give different answers; and long, multi-step reliability.",
        },
      ],
    },

    // ── Section 2 · Prompt to Product ─────────────────────────────────────────
    {
      slug: "prompt-to-code",
      title: "3 · Prompt to code",
      section: "Prompt to Product",
      body: `AI coding assistants (in your editor, in a chat, or in "agentic" coding tools) can take you from idea to working code fast, *if you drive them like a builder, not a wisher.*

**A reliable prompt-to-code workflow:**

- **Specify like a ticket, not a wish.** "Build me an app" gets slop. "Write a TypeScript function \`slugify(title: string): string\` that lowercases, trims, and replaces non-alphanumerics with single hyphens; include 3 unit tests" gets working code.
- **Give it the context it can't guess**: your language/framework versions, the file it's editing, the existing conventions. Paste the real code, don't describe it.
- **Work in small steps.** One function, one component, one fix at a time. Big-bang generations are hard to review and hide bugs.
- **Demand tests, then run them.** Generated code that passes tests *you* read beats code that merely looks right.

**The non-negotiable: you review every line.** Generated code can be subtly wrong, insecure, or pull in a package that doesn't exist (a real failure mode, models invent plausible dependency names). You are still the engineer of record. This is the same "draft with AI, verify with sources" habit from AI Literacy, applied to code: **draft with AI, verify by reading and running.**

> **Trust DNA:** code you didn't read is not code you can ship. A green checkmark on tests *you wrote or read* is verification; "it looked fine" is not.

**Check yourself.** Rewrite this weak coding prompt into a strong one: "make a login page."

## Sources
- OpenAI. (2025). *Prompting* (API documentation): writing clear instructions and giving examples. https://platform.openai.com/docs/guides/prompting
- OWASP. (2025). *Top 10 for LLM Applications 2025*: see LLM03: Supply Chain (untrusted/hallucinated dependencies). https://genai.owasp.org/llm-top-10/`,
      recallContent: [
        {
          prompt: "In the five-part anatomy of an AI feature, which step checks the output is the right shape before you act on it?",
          answer: "Validation and parsing. You never pass raw model output straight into a sensitive action.",
        },
        {
          prompt: "What is a token, and what should temperature be set to for factual or structured tasks?",
          answer: "A token is the chunk a model reads and bills by, roughly three quarters of a word. Set temperature low (near 0) for factual or structured work.",
        },
      ],
    },
    {
      slug: "nocode-lowcode-apis",
      title: "4 · No-code, low-code, and APIs: picking the right tool",
      section: "Prompt to Product",
      body: `You don't always need to write code. Choosing the right build surface saves weeks. A rough ladder, lightest to heaviest:

- **No-code AI tools** (chatbot builders, spreadsheet AI functions, form-to-email automations). Fastest to a result; limited by what the tool exposes. Great for prototypes and internal tools.
- **Low-code / automation platforms** (workflow builders that chain steps and call AI for one of them). You wire boxes together and drop in a prompt. Good when the logic is "when X happens, do Y, with an AI step in the middle."
- **APIs in your own code.** Maximum control and the only path for a real product: you call the model's HTTP **API**, handle errors, validate output, and own the data. This is where you can add real guardrails, logging, and tests.

**What an API actually is:** a defined way for your program to ask another program to do something. To call a model API you send an HTTP request, with your **API key** (a secret credential: treat it like a password; never hard-code it in client-side code or commit it), your prompt, and parameters, and you get structured output back, usually **JSON**.

**How to choose, honestly:**

| If you need… | Reach for… |
|---|---|
| A demo this afternoon | No-code |
| "On event, do steps, one uses AI" | Low-code automation |
| A product, custom logic, your own data, real guardrails | API in your own code |

Start as light as the job allows; move down the ladder only when the lighter tool stops fitting. Over-engineering is its own kind of slop.

**Check yourself.** You need a working internal demo by end of day with no custom logic. Which rung of the ladder, and why?

## Sources
- OpenAI. (2025). *Prompting* and API reference: making model calls and handling structured output. https://platform.openai.com/docs/guides/prompting
- OWASP. (2025). *Top 10 for LLM Applications 2025*: see LLM02: Sensitive Information Disclosure (protecting API keys and secrets). https://genai.owasp.org/llm-top-10/`,
      recallContent: [
        {
          prompt: "What is the non-negotiable rule when using an AI coding assistant?",
          answer: "You review every line. Code you did not read is not code you can ship; draft with AI, then verify by reading and running.",
        },
        {
          prompt: "Why specify a coding task like a ticket rather than a wish?",
          answer: "A vague wish like 'build me an app' produces slop, while a precise spec (signature, behavior, tests) gets working code. Watch for invented, hallucinated dependencies too.",
        },
      ],
    },
    {
      slug: "practice-build-surface",
      title: "5 · Practice: prompts and build surfaces",
      section: "Prompt to Product",
      exercise: {
        instructions:
          "Fill in the missing builder term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "The chunk a model reads and bills by (roughly ¾ of a word) is a ___.",
            answer: "token",
            accept: ["tokens"],
            explanation: "Both your input and the model's output cost tokens. Long prompts and answers cost more.",
          },
          {
            prompt: "The standing instructions that set the model's role and rules, separate from the user's message, are the ___ prompt.",
            answer: "system",
            explanation: "Put role/tone/rules in the system prompt; task-specific details go in the user message.",
          },
          {
            prompt: "A secret credential your code sends to call a model's API (treat it like a password) is an API ___.",
            answer: "key",
            explanation: "Never hard-code it client-side or commit it; that's OWASP LLM02 (sensitive info disclosure).",
          },
          {
            prompt: "For factual or structured tasks you set the randomness knob (temperature) ___. (high / low)",
            answer: "low",
            accept: ["low (near 0)", "near 0", "0"],
            explanation: "Low temperature for factual/structured work; raise it only for brainstorming.",
          },
          {
            prompt: "You need a working internal demo today with no custom logic. Pick the lightest rung: ___-code.",
            answer: "no",
            accept: ["no-code", "nocode"],
            explanation: "Start as light as the job allows; move to APIs only when the lighter tool stops fitting.",
          },
        ],
      },
    },

    // ── Section 3 · Automations & Agents ──────────────────────────────────────
    {
      slug: "build-an-automation",
      title: "6 · Building a simple automation",
      section: "Automations & Agents",
      body: `An **automation** is a fixed pipeline: a **trigger** fires, your code runs a **defined sequence of steps**, and one or more of those steps may call AI. The path is set in advance: you (not the model) decide the order. That predictability is a feature: automations are the most reliable way to put AI to work.

**A concrete example ("triage incoming support email"):**

1. **Trigger:** a new email lands in a shared inbox.
2. **Step (AI):** send the email body to the model with the prompt *"Classify this as billing, bug, or other. Reply with only one word."* Set temperature low.
3. **Step (validate):** check the reply is exactly one of the three allowed labels. If not, fall back to "other" and flag for a human. **Never trust the label blindly.**
4. **Step (act):** route the email to the matching queue and post a one-line summary.

Notice the shape: the AI does one **narrow, well-defined** job (classify), and your code does the routing, validating, and fallback. This is the core skill: **give the model the smallest, most checkable task in the pipeline**, and keep deterministic logic in code.

**Design rules that keep automations trustworthy:**

- **Constrain the output.** Ask for one of a fixed set of labels, or strict JSON. Then validate it.
- **Always have a fallback** for when the model returns something unexpected (it will).
- **Log inputs and outputs** so you can debug and audit later.
- **Keep a human in the loop** for anything consequential (see the guardrails lesson).

This maps to NIST's "Manage" function: you actively manage the AI component's risk with validation and fallbacks rather than assuming it behaves (NIST, 2023).

**Check yourself.** In the triage example, what does your *code* (not the model) do in steps 3 and 4, and why does that keep the automation reliable?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: see the "Manage" function. https://www.nist.gov/itl/ai-risk-management-framework
- Anthropic. (2024). *Building Effective Agents*: on preferring simple, predictable workflows over autonomy when the task allows. https://www.anthropic.com/research/building-effective-agents`,
      recallContent: [
        {
          prompt: "What are the three rungs of the build-surface ladder, lightest to heaviest?",
          answer: "No-code tools, low-code or automation platforms, then APIs in your own code. Start as light as the job allows and move heavier only when the lighter tool stops fitting.",
        },
        {
          prompt: "What is an API key, and how must you handle it?",
          answer: "A secret credential your code sends to call a model's API. Treat it like a password: never hard-code it in client-side code or commit it.",
        },
      ],
    },
    {
      slug: "build-an-agent",
      title: "7 · Building a basic agent or assistant",
      section: "Automations & Agents",
      body: `An **agent** is the step up from an automation: instead of a fixed path, the model **decides which steps to take** and **calls tools** to do them. Anthropic draws the line cleanly: *workflows* orchestrate models and tools through predefined code paths; *agents* let the model dynamically direct its own process (Anthropic, 2024).

**Tools** are functions you expose to the model: "search the database," "send an email," "look up the weather." You describe each tool (name, what it does, its inputs); the model can then choose to call one, you run it, and you feed the result back. This is how an assistant goes from "talks about things" to "does things."

**A minimal assistant loop:**

1. User asks a question.
2. Model decides: answer directly, or call a tool (e.g. "look up order #1234").
3. Your code runs the requested tool and returns the result to the model.
4. Model uses the result to answer (or calls another tool).
5. You return the final answer, after validation.

**The hard-won lesson: start as simple as the task allows.** Anthropic's guidance (and most teams' painful experience) is that **the more autonomy you grant, the more ways it can go wrong**, and the more it costs in latency and tokens. So:

- **Prefer a workflow over an agent** when the steps are knowable in advance. Reach for true agency only when the path genuinely can't be predetermined.
- **Give the agent few tools, each tightly scoped.** A tool that can "run any SQL" is a foot-gun; a tool that can "look up an order by ID" is safe.
- **Bound it.** Cap the number of steps/tool calls, set a budget, and require confirmation before any irreversible action.
- **Watch for excessive agency**. OWASP names this an LLM risk: granting a model more permission or autonomy than the task needs (OWASP, 2025, LLM06). The fix is least privilege, the same as any other system.

> **Trust DNA:** an assistant that can take actions is software with a fuzzy operator inside it. Constrain its tools, log what it does, and keep a human approving anything that's hard to undo.

**Check yourself.** Why does Anthropic recommend reaching for a fixed *workflow* before a fully autonomous *agent*, and what's one way to bound an agent that can take actions?

## Sources
- Anthropic. (2024). *Building Effective Agents*: workflows vs. agents; "find the simplest solution possible." https://www.anthropic.com/research/building-effective-agents
- OWASP. (2025). *Top 10 for LLM Applications 2025*: see LLM06: Excessive Agency. https://genai.owasp.org/llm-top-10/`,
      recallContent: [
        {
          prompt: "What is an automation, and who decides the order of its steps?",
          answer: "A fixed pipeline: a trigger fires and your code runs a defined sequence of steps, one of which may call AI. You, not the model, decide the order, which is what makes it reliable.",
        },
        {
          prompt: "In a trustworthy automation, what job should the AI do, and what should your code do around it?",
          answer: "Give the model the smallest, most checkable task, like classifying into a fixed set of labels. Your code constrains and validates the output, provides a fallback, and logs inputs and outputs.",
        },
      ],
    },
    {
      slug: "connecting-data-rag",
      title: "8 · Connecting your own data (RAG, at a high level)",
      section: "Automations & Agents",
      body: `A model only "knows" what was in its training data and what you put in the prompt. To make it answer about **your** content (your docs, your product, your policies), you don't retrain it. You **retrieve the relevant pieces and put them in the prompt.** That pattern is **Retrieval-Augmented Generation (RAG)**, introduced by Lewis et al. (2020): combine the model's general ability (parametric memory) with an external, searchable store of your text (non-parametric memory).

**The high-level recipe:**

1. **Chunk** your documents into passages.
2. **Embed** each chunk, turn it into a vector (a list of numbers capturing meaning) using an embedding model, and store the vectors in a **vector database**.
3. At question time, **embed the question** and **search** for the most similar chunks (nearest vectors).
4. **Stuff the top chunks into the prompt** as context: *"Using only the following passages, answer the question. If the answer isn't there, say so."*
5. The model answers **grounded in your retrieved text**, and you can **cite which chunks** it used.

Why builders love RAG:

- **Fresh and private**: update the data without retraining; keep proprietary content in your own store.
- **Citable**: because you know which passages went in, you can show sources. (This is exactly the Learn.WitUS trust pattern, in machine form.)
- **Cheaper than fine-tuning** for most "answer over my docs" needs.

**Watch-outs (real ones):**

- **Garbage in, garbage out**: if retrieval pulls the wrong chunks, the answer is confidently wrong. Evaluate retrieval, not just the model.
- **Tell the model to refuse when the answer isn't in the context**: otherwise it fills the gap with a hallucination.
- **Your vector store is an attack surface**: poisoned or leaky embeddings are a named LLM risk (OWASP, 2025, LLM08). Control what goes in and who can query it.

**Check yourself.** In RAG, why can you show *sources* for an answer, and what should you instruct the model to do when the retrieved passages don't contain the answer?

## Sources
- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., … Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *arXiv:2005.11401*. https://arxiv.org/abs/2005.11401
- OWASP. (2025). *Top 10 for LLM Applications 2025*: see LLM08: Vector and Embedding Weaknesses. https://genai.owasp.org/llm-top-10/`,
      recallContent: [
        {
          prompt: "What is the difference between a workflow (automation) and an agent?",
          answer: "A workflow orchestrates models and tools through predefined code paths. An agent lets the model decide which steps to take and which tools to call. Prefer a workflow when the steps are knowable in advance.",
        },
        {
          prompt: "Name one way to bound an agent that can take actions, and the OWASP risk this addresses.",
          answer: "Give it few, tightly scoped tools, cap its steps or budget, and require confirmation before irreversible actions. This applies least privilege against Excessive Agency (OWASP LLM06).",
        },
      ],
    },

    // ── Section 4 · Ship & Evaluate ───────────────────────────────────────────
    {
      slug: "evaluate-and-guardrails",
      title: "9 · Evaluating output and adding guardrails",
      section: "Ship & Evaluate",
      body: `Because models are probabilistic, "it worked when I tried it" is not evidence. Before you ship and as you change prompts, you **evaluate**, and you put **guardrails** around the model so a bad output can't do harm.

**Evaluation (make quality measurable):**

- **Build a test set** of representative inputs with known-good answers (or rubrics). Run it every time you change the prompt or model, the same discipline as unit tests for ordinary code.
- **Pick metrics that fit the task**: exact match for classification; "is it grounded in the retrieved sources?" for RAG; a human or a separate model scoring against a rubric for open-ended writing.
- **Catch regressions early.** A prompt tweak that helps one case can break five others; only a test set reveals that.

**Guardrails (limit the blast radius of a bad output):**

- **Validate structure and bounds** before acting: reject malformed JSON, out-of-range values, disallowed labels.
- **Never pass raw model output into a sensitive action** (a database write, a shell command, an email send) without checks. Treating model output as untrusted input defends against **prompt injection**, OWASP's #1 LLM risk, where attacker text in the input hijacks the model's instructions (OWASP, 2025, LLM01).
- **Constrain output handling**: escape/encode model output you render, so it can't inject markup or commands downstream (OWASP, 2025, LLM05).
- **Keep a human in the loop** for consequential or irreversible actions.
- **Filter and monitor**: block obviously unsafe content, and log inputs/outputs so you can audit and improve.

This is the "Measure" and "Manage" of NIST's framework in practice: you don't *hope* the system is reliable, you **test it and contain it** (NIST, 2023).

**Check yourself.** Name the OWASP #1 LLM risk, and the single habit ("treat model output as ___") that defends against it.

## Sources
- OWASP. (2025). *Top 10 for LLM Applications 2025*: LLM01: Prompt Injection; LLM05: Improper Output Handling. https://genai.owasp.org/llm-top-10/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: "Measure" and "Manage" functions. https://www.nist.gov/itl/ai-risk-management-framework`,
      recallContent: [
        {
          prompt: "What does RAG do, and why can you show sources for its answers?",
          answer: "It retrieves the passages relevant to a question and puts them in the prompt, so the model answers grounded in your content. Because you know which chunks went in, you can cite them.",
        },
        {
          prompt: "In RAG, what must you instruct the model to do when the retrieved passages do not contain the answer?",
          answer: "Tell it to refuse or say it does not know. Otherwise it fills the gap with a hallucination.",
        },
      ],
    },
    {
      slug: "ship-it",
      title: "10 · Shipping and deploying",
      section: "Ship & Evaluate",
      body: `An AI feature is still software, so most of shipping is ordinary engineering, plus a few AI-specific concerns. A practical checklist for going from "works on my machine" to "live":

**The normal-software parts:**

- **Secrets stay server-side.** Your API key lives in environment variables on the server, never in client code or your git history. A leaked key is someone else's bill and your data exposure (OWASP, 2025, LLM02).
- **Handle failure.** Model APIs time out, rate-limit, and occasionally return junk. Add retries with backoff, timeouts, and a graceful fallback message. Don't let a model hiccup take down your page.
- **Log and monitor.** Capture inputs, outputs, latency, and errors so you can debug, audit, and measure cost.

**The AI-specific parts:**

- **Pin the model and prompt as versioned config.** When a provider updates a model, behavior can shift; know which version you're running so you can re-evaluate before adopting a new one.
- **Run your eval set in CI**, the same way you run tests: a prompt change that regresses quality should fail the build, not surprise a user.
- **Watch cost in production** (next lesson): usage that's fine in testing can get expensive at scale.
- **Have a kill switch / fallback path** so you can disable the AI feature and degrade gracefully if it misbehaves.

Shipping is not the finish line; it's the start of the **measure → manage** loop. You watch real usage, feed surprises back into your eval set, and improve. That's how a demo becomes a dependable product instead of a liability.

**Check yourself.** Name two things that should live in versioned config so you can re-evaluate before a provider's change reaches users.

## Sources
- OWASP. (2025). *Top 10 for LLM Applications 2025*: LLM02: Sensitive Information Disclosure (keys/secrets); LLM03: Supply Chain. https://genai.owasp.org/llm-top-10/
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*: continuous "Measure/Manage." https://www.nist.gov/itl/ai-risk-management-framework`,
      recallContent: [
        {
          prompt: "What is the OWASP number one risk for LLM applications, and the single habit that defends against it?",
          answer: "Prompt injection (LLM01). Treat all model input and output as untrusted: validate it and never pass raw output into a sensitive action.",
        },
        {
          prompt: "Why build an eval (test) set for an AI feature?",
          answer: "Because output is probabilistic, 'it worked once' is not evidence. Run representative inputs every time you change the prompt or model to catch regressions, like unit tests.",
        },
      ],
    },
    {
      slug: "ethics-and-cost",
      title: "11 · Ethics, cost, and responsible shipping",
      section: "Ship & Evaluate",
      body: `Building with AI carries the same responsibility as using it, amplified because now *other people* use what you ship. Two things separate a responsible builder from a slop factory: **owning the ethics** and **owning the cost.**

**Ethics (design for the people on the other side):**

- **Set honest expectations.** Tell users they're interacting with AI, that it can be wrong, and how to reach a human. Google's People + AI Guidebook calls this onboarding users to AI's limits and giving them control, a core pattern for trustworthy AI products (PAIR, 2021).
- **Don't deceive or harm.** No fake people, fake reviews, impersonation, or manipulative dark patterns. The fact that AI makes it easy doesn't make it right.
- **Mind bias and fairness**: if your feature decides anything about people (screening, pricing, grading), it can carry the bias in its data. Test across groups and keep human judgment in charge (NIST, 2023).
- **Privacy by default**: don't send users' secrets or personal data to a third-party model without consent and need; minimize what you collect and store.
- **Cite and disclose.** If your product makes factual claims, ground them (RAG) and show sources. That's the Learn.WitUS DNA: trust is a feature, not an afterthought.

**Cost (know what you're spending):**

- **You pay per token**, input and output. Long prompts (big system prompts, large retrieved context) and long answers add up fast at scale.
- **Estimate before you scale.** Rough math: tokens per request × requests per day × the model's per-token price. A feature that's free in testing can be a real bill at 10,000 users a day.
- **Control it**: cap output length, retrieve fewer/smaller chunks, cache repeated answers, and use a smaller/cheaper model for easy tasks (reserve the big model for the hard ones). NIST's GenAI Profile even flags **environmental impact** as a real cost of large-model use (NIST, 2024).

> **Trust DNA, final form:** ship things that are *cited, validated, honest, and affordable.* Speed is easy; trustworthy is the whole job.

**Check yourself.** Name one ethical practice and one cost-control practice you'd apply before shipping an AI feature to real users.

## Sources
- Google PAIR. (2021). *People + AI Guidebook*: onboarding users to AI and giving them control. https://pair.withgoogle.com/guidebook/
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)*: Harmful Bias; Data Privacy; Environmental Impacts. https://doi.org/10.6028/NIST.AI.600-1`,
      recallContent: [
        {
          prompt: "Where should your model API key live when you deploy, and why?",
          answer: "In server-side environment variables, never in client code or git history. A leaked key is someone else's bill and your data exposure (OWASP LLM02).",
        },
        {
          prompt: "Name two things to keep in versioned config so you can re-evaluate before a provider's change reaches users.",
          answer: "The model version and the prompt. Pinning both lets you run your eval set in CI and re-check quality before adopting a change.",
        },
      ],
    },
    {
      slug: "building-with-ai-quiz",
      title: "12 · Check your understanding",
      section: "Ship & Evaluate",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What's the safest way to think of an AI model inside a system you're building?",
            options: [
              "A reliable database you can trust",
              "A probabilistic component you wrap in validation and fallbacks",
              "A source of verified facts",
              "A deterministic function",
            ],
            correctIndex: 1,
            explanation:
              "Models are probabilistic: wrap them in validation, fallbacks, and human review, like any unreliable input.",
            sourceLessonSlug: "what-you-can-build",
          },
          {
            prompt: "In the five-part anatomy of an AI feature, which step checks that the output is the right shape before you act on it?",
            options: ["Input", "Prompt assembly", "Validation / parsing", "Model call"],
            correctIndex: 2,
            explanation:
              "Validation/parsing: you never pass raw model output straight into a sensitive action.",
            sourceLessonSlug: "anatomy-of-an-ai-feature",
          },
          {
            prompt: "You need a quick internal demo today with no custom logic. Which build surface fits best?",
            options: ["A full API integration in your own code", "No-code", "A fine-tuned model", "An autonomous agent"],
            correctIndex: 1,
            explanation:
              "Start as light as the job allows; move down to APIs only when the lighter tool stops fitting.",
            sourceLessonSlug: "nocode-lowcode-apis",
          },
          {
            prompt: "What's the key difference between an automation (workflow) and an agent?",
            options: [
              "Agents are always cheaper",
              "An automation follows a fixed, predefined path; an agent lets the model decide which steps/tools to use",
              "Automations can't call AI",
              "Agents never make mistakes",
            ],
            correctIndex: 1,
            explanation:
              "Workflows orchestrate through predefined code paths; agents dynamically direct themselves, so prefer a workflow when the steps are knowable.",
            sourceLessonSlug: "build-an-agent",
          },
          {
            prompt: "Why does giving an agent more autonomy and broader tools increase risk?",
            options: [
              "It uses fewer tokens",
              "More autonomy means more ways to go wrong; OWASP names 'excessive agency' as a risk, apply least privilege",
              "It makes the model deterministic",
              "It removes the need for validation",
            ],
            correctIndex: 1,
            explanation:
              "Excessive Agency (OWASP LLM06): grant only the permissions and tools the task needs, and bound the agent's steps.",
            sourceLessonSlug: "build-an-agent",
          },
          {
            prompt: "What does RAG (Retrieval-Augmented Generation) let you do?",
            options: [
              "Retrain the model on your data each time",
              "Retrieve relevant passages and put them in the prompt so the model answers grounded in your content, citably",
              "Make the model deterministic",
              "Remove the need for evaluation",
            ],
            correctIndex: 1,
            explanation:
              "RAG (Lewis et al., 2020) grounds answers in retrieved text you control, so you can cite sources, and you must tell the model to refuse when the answer isn't there.",
            sourceLessonSlug: "connecting-data-rag",
          },
          {
            prompt: "Which is the OWASP #1 risk for LLM applications, and the habit that defends against it?",
            options: [
              "Slow responses; add caching",
              "Prompt injection; treat all model input/output as untrusted and validate it",
              "High cost; use a smaller model",
              "Bias; retrain the model",
            ],
            correctIndex: 1,
            explanation:
              "Prompt Injection (LLM01): attacker text can hijack instructions. Never pass unvalidated model output into a sensitive action.",
            sourceLessonSlug: "evaluate-and-guardrails",
          },
          {
            prompt: "Why build a test set (eval set) for an AI feature?",
            options: [
              "Models are deterministic, so one test is enough",
              "Because output is probabilistic, an eval set catches regressions when you change the prompt or model",
              "It eliminates the need for guardrails",
              "It lowers token cost",
            ],
            correctIndex: 1,
            explanation:
              "\"It worked once\" isn't evidence. Run representative inputs every time you change the prompt/model, like unit tests.",
            sourceLessonSlug: "evaluate-and-guardrails",
          },
          {
            prompt: "Where should your model API key live when you deploy?",
            options: [
              "In the client-side code",
              "Committed to git for the team",
              "In server-side environment variables, never in client code or git history",
              "In the prompt",
            ],
            correctIndex: 2,
            explanation:
              "A leaked key is someone else's bill and your data exposure (OWASP LLM02). Keep secrets server-side.",
            sourceLessonSlug: "ship-it",
          },
          {
            prompt: "You're estimating what an AI feature will cost at scale. What do you multiply?",
            options: [
              "Lines of code × developers",
              "Tokens per request × requests per day × the model's per-token price",
              "Number of users × subscription fee",
              "Prompts × temperature",
            ],
            correctIndex: 1,
            explanation:
              "You pay per token (input + output); a feature that's free in testing can be a real bill at scale: cap output, retrieve less, cache, and right-size the model.",
            sourceLessonSlug: "ethics-and-cost",
          },
        ],
      },
    },
  ],
};
