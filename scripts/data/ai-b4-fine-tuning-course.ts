// Authored "Fine-tuning & Model Basics" — B4 on the Learn.WitUS builder track (AI ladder).
// Sits after B1 (Prompt Engineering) and B2 (Agents & Automations): the builder who can
// prompt, retrieve, and orchestrate now asks the harder question — "should I change the
// MODEL?" This course teaches how models learn (pretraining → post-training/RLHF, useful
// not deep), what fine-tuning actually is, and — the load-bearing skill — when it beats
// prompting or RAG and when it's a costly mistake. It covers the method families (full FT,
// LoRA/PEFT, instruction tuning, preference/DPO), building a real dataset (quality > size),
// the training loop (epochs, overfitting, eval), evaluating a fine-tuned model, the
// cost/latency/hosting tradeoff (API fine-tune vs open weights), open vs closed models and
// licenses, the real risks (catastrophic forgetting, data leakage, bias amplification), and
// a "should I fine-tune?" decision framework. Trust DNA: evaluate honestly — fine-tuning is
// not magic; most teams who reach for it should have improved their prompt or retrieval first.
//
// Cited with real, verifiable sources only: OpenAI's model-optimization (fine-tuning) guide,
// Anthropic's Claude fine-tuning on Amazon Bedrock, the Hugging Face PEFT docs, the LoRA
// paper (Hu et al., 2021), the InstructGPT/RLHF paper (Ouyang et al., 2022), and the NIST AI
// Risk Management Framework. Two fill-in exercises + a final quiz whose every question links
// to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_B4_FINE_TUNING_COURSE: AuthoredCourse = {
  title: "Fine-tuning & Model Basics",
  description:
    "You can prompt, retrieve, and orchestrate — now learn when to change the model itself. This builder course demystifies how models learn (pretraining → post-training and RLHF), what fine-tuning really is, and the decision that matters most: when fine-tuning beats prompting or RAG, and when it's an expensive mistake. We cover the method families (full fine-tuning, LoRA/PEFT, instruction and preference tuning), how to build a real training dataset where quality beats quantity, the training loop and how to avoid overfitting, how to evaluate a fine-tuned model honestly, the cost/latency/hosting tradeoffs of API fine-tuning vs open weights, open vs closed models and their licenses, and the real risks — catastrophic forgetting, data leakage, and bias amplification. You leave with a 'should I fine-tune?' framework and the trust DNA to use it: evaluate honestly — fine-tuning isn't magic. B1 (Prompt Engineering) is the recommended prerequisite.",
  lessons: [
    // ── Section 1 · How models learn ──────────────────────────────────────────
    {
      slug: "how-models-learn",
      title: "1 · How a model learns (pretraining → post-training)",
      section: "How models learn",
      body: `Before you change a model, understand how it got the way it is. A modern chat model is built in two big stages — and fine-tuning is just *one more, smaller* version of the second stage.

**Stage 1 — Pretraining.** The model reads an enormous pile of text and learns to predict the next token over and over. This is where it absorbs grammar, facts, reasoning patterns, and style. It is hugely expensive (lots of data, lots of compute) and produces a **base model**: fluent, knowledgeable, but not yet helpful — it will happily continue your text instead of answering you.

**Stage 2 — Post-training.** The base model is then shaped to be a useful *assistant*. Two key moves:

- **Instruction tuning (supervised fine-tuning):** train on many *(instruction, good response)* pairs so the model learns to follow instructions instead of just continuing text.
- **Preference tuning / RLHF (Reinforcement Learning from Human Feedback):** humans rank competing responses; the model is trained to prefer the kind of answers people rated higher. Ouyang et al. (2022) showed this is what turned GPT-3 into the far more helpful, instruction-following **InstructGPT** — a 1.3B-parameter aligned model that human raters *preferred* over the 175B base model.

**Why this matters for you as a builder:** the helpful behavior you take for granted from a chat API is *learned*, not inherent. Fine-tuning is you running a tiny, targeted version of Stage 2 on **your** data — nudging an already-capable model toward your task, tone, or format. You are not teaching it to think; you're adjusting an expert that already can.

> **Trust DNA:** "the model learned it" is not magic — it's statistics over examples. Whatever you fine-tune on, the model will imitate, flaws and all. Garbage examples teach garbage.

**Check yourself.** In one sentence, what is the difference between a *base* model and an *instruction-tuned* model — and which stage does your own fine-tuning resemble?

## Sources
- Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., … Lowe, R. (2022). Training language models to follow instructions with human feedback. *arXiv:2203.02155*. https://arxiv.org/abs/2203.02155
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "what-fine-tuning-is",
      title: "2 · What fine-tuning actually is",
      section: "How models learn",
      body: `**Fine-tuning** is continuing to train an already-trained model on a smaller, focused dataset so its weights shift toward your specific task, format, or style. You start from a capable model and end with a **customized version** of it.

What changes, concretely: the model's internal numbers (**weights**) are updated by showing it your examples — *(input, ideal output)* pairs — and nudging it, example by example, to produce outputs more like yours. Anthropic describes its Claude fine-tuning the same way: you provide "high quality prompt-completion pairs — the ideal outputs that you want Claude to provide for a given task," and get back a customized model (Anthropic, 2024).

**What fine-tuning is good at:**

- **Format and style consistency** — always answer in your house JSON shape, brand voice, or report template.
- **A narrow, well-defined skill** — a specialized classifier, a domain-specific translator, a tone the base model keeps missing.
- **Shorter prompts at scale** — bake repeated instructions into the model so you stop paying for a giant system prompt on every call (OpenAI, 2025).

**What fine-tuning is *not* good for (a common, expensive misunderstanding):**

- **It is not how you add fresh facts or private knowledge.** For "answer questions about *my* documents," reach for **retrieval (RAG)**, not fine-tuning — RAG keeps the data current and *citable*, which fine-tuning can't (you covered this in the builder foundation). Fine-tuning teaches *behavior and form*, not a reliable, updatable knowledge base.
- **It is not a fix for a bad prompt.** Try a better prompt and a few examples first; it's faster, cheaper, and reversible.

The mental model: **prompting and RAG change what you put *into* the model; fine-tuning changes the model itself.** Changing the model is heavier, slower to iterate, and harder to undo — so you reach for it only when the lighter tools genuinely can't get there. The next section is that decision.

**Check yourself.** A teammate wants to "fine-tune the model on our help-center articles so it can answer support questions." Why is that often the wrong tool, and what would you suggest instead?

## Sources
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — fine-tuning on high-quality prompt-completion pairs. https://www.anthropic.com/news/fine-tune-claude-3-haiku
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — using shorter prompts and proprietary data via fine-tuning. https://platform.openai.com/docs/guides/fine-tuning`,
    },

    // ── Section 2 · The decision ──────────────────────────────────────────────
    {
      slug: "fine-tune-vs-prompt-vs-rag",
      title: "3 · The decision: fine-tune vs. prompt vs. RAG",
      section: "The decision",
      body: `This is the most important lesson in the course. Most teams who *think* they need fine-tuning should fix their prompt or add retrieval first. The honest order of operations, cheapest and most reversible to heaviest:

1. **Prompt engineering first.** Clear instructions, a few in-context examples (few-shot), the right structure. OpenAI's own guidance is that prompt engineering and prompt chaining are faster feedback loops and often enough on their own — try them *before* fine-tuning (OpenAI, 2025). Free to change, instant to test.
2. **Retrieval (RAG) when the problem is *knowledge*.** If the model needs facts it doesn't have — your docs, your policies, anything that changes — retrieve the relevant text and put it in the prompt. Keeps data fresh and citable. Use this when the gap is "it doesn't *know* X."
3. **Fine-tuning when the problem is *behavior* the first two can't reach.** Reach for it when, *after* a serious prompting and retrieval effort, you still have a persistent gap in **form, style, or a narrow skill** — or when your prompts have grown so long (to encode behavior) that cost and latency hurt at scale.

**Match the tool to the gap:**

| Your real problem is… | Reach for… |
|---|---|
| "It doesn't follow my instructions well enough" | Better prompt + few-shot examples |
| "It doesn't *know* my facts / they change" | RAG (retrieval) |
| "It won't reliably match my format / tone / narrow skill" | Fine-tuning |
| "My prompt is huge and expensive at scale" | Fine-tuning (bake in the behavior) |

**Why this order is the trustworthy one:** prompting and RAG are cheap, fast to iterate, and easy to undo. Fine-tuning costs money and engineering time, locks in behavior, must be *re-done* when the base model updates, and can introduce new risks (later lesson). Spending that only after the cheap options are exhausted is the honest engineering call — not reaching for the most impressive-sounding tool first.

> **Trust DNA:** "we fine-tuned it" sounds advanced; "we wrote a better prompt and it worked" *is* advanced — it shipped the result for a tenth of the cost. Evaluate honestly.

**Check yourself.** For each, name the right tool: (a) the model keeps inventing product details that change weekly; (b) the model's answers are correct but never in your required JSON shape; (c) the model ignores half your formatting instructions in a short prompt.

## Sources
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — try prompt engineering and chaining first; fine-tune when those plateau. https://platform.openai.com/docs/guides/fine-tuning
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see the "Map" function (frame the problem before choosing a solution). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "types-of-fine-tuning",
      title: "4 · Types of fine-tuning (full FT, LoRA/PEFT, instruction, preference)",
      section: "The decision",
      body: `"Fine-tuning" isn't one thing. Knowing the families lets you pick the cheapest method that fits — and read the docs without getting lost.

**By *how much* of the model you change:**

- **Full fine-tuning** — update *every* weight in the model. Most powerful and most expensive: you need serious GPU memory and you produce a full-size copy of the model to host. Rarely the right first choice.
- **Parameter-Efficient Fine-Tuning (PEFT)** — freeze the original weights and train only a small number of *extra* parameters. Hugging Face's PEFT library exists precisely for this: it "only fine-tune[s] a small number of (extra) model parameters — significantly decreasing computational and storage costs — while yielding performance comparable to a fully fine-tuned model," making it feasible "on consumer hardware" (Hugging Face, 2024).
  - **LoRA (Low-Rank Adaptation)** is the best-known PEFT method. Hu et al. (2021) freeze the pretrained weights and inject small trainable **low-rank** matrices into each layer — cutting trainable parameters by orders of magnitude while keeping quality, and adding **no extra inference latency** once merged. This is why a hobbyist can fine-tune a large open model on a single GPU.

**By *what behavior* you're shaping (same vocabulary as how the model was built):**

- **Instruction tuning (supervised fine-tuning, SFT):** train on *(prompt, ideal response)* pairs so the model produces the outputs you want. This is the workhorse — most API fine-tuning is SFT.
- **Preference tuning:** show the model *(prompt, better response, worse response)* triples so it learns which style/tone/judgment you prefer. OpenAI exposes this as **DPO (Direct Preference Optimization)** — give "both a correct and incorrect example response for a prompt" — useful for tone, summarizing the right things, and chat style (OpenAI, 2025). It's a lightweight cousin of the RLHF used in post-training (Ouyang et al., 2022).

**The practical takeaway:** for most builders, **LoRA/PEFT + supervised instruction tuning** is the default — it's cheap, fast, and quality-competitive. Reach for full fine-tuning or preference tuning only when you have evidence the simpler method fell short.

**Check yourself.** Why can a solo builder LoRA-fine-tune a large open model on one GPU, when full fine-tuning the same model would be out of reach — and which family (SFT or preference) would you use to fix "answers are right but the tone is wrong"?

## Sources
- Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., … Chen, W. (2021). LoRA: Low-rank adaptation of large language models. *arXiv:2106.09685*. https://arxiv.org/abs/2106.09685
- Hugging Face. (2024). *PEFT (Parameter-Efficient Fine-Tuning) documentation.* https://huggingface.co/docs/peft/index`,
    },

    // ── Section 3 · Build & train ─────────────────────────────────────────────
    {
      slug: "building-a-dataset",
      title: "5 · Building a training dataset (quality > quantity)",
      section: "Build & train",
      body: `Your fine-tuned model is only as good as the examples you feed it. The dataset is the job — far more than the training settings. The single most repeated lesson from practitioners: **quality beats quantity.**

**The data is *(input, ideal output)* pairs.** Each example shows the model exactly what you want it to do for a given input. The model imitates these — so every example is a vote for some behavior. A few hundred excellent, consistent examples beat tens of thousands of sloppy ones.

**Start small, then grow with evidence.** Anthropic's Bedrock guidance is to begin with as few as **50–100 rows of high-quality data**, fine-tune, and *evaluate* — then add data only where the evaluation shows weakness (Anthropic, 2024). OpenAI similarly frames fine-tuning data as a curated set of correct example responses (OpenAI, 2025). Don't bulk-collect first; curate, test, and target the gaps.

**Quality rules that matter most:**

- **Consistency.** If two near-identical inputs have contradictory outputs, you're teaching the model to be inconsistent. Pick one right answer and apply it everywhere.
- **Representativeness.** Your examples must look like real production inputs — same phrasing, same messiness, same edge cases. Train on clean toy data and it breaks on the real thing.
- **Correctness.** Every "ideal output" is literally the target. A wrong label or a sloppy answer in the data becomes a wrong behavior in the model.
- **Format the way the provider expects.** API fine-tuning wants a specific structure — typically **JSONL**, one example per line, often as a system/user/assistant message sequence (OpenAI, 2025; Anthropic, 2024). Malformed data fails the job before it starts.

**Split your data — non-negotiable.** Hold out a **validation/test set** the model never trains on, so you can measure real performance instead of memorization (next lesson). A typical split keeps most data for training and reserves a meaningful slice for evaluation.

> **Trust DNA:** label your own data honestly. The temptation is to wave through "close enough" examples to hit a row count. Don't — you're not padding a spreadsheet, you're defining the model's behavior.

**Check yourself.** You have 5,000 scraped examples of uneven quality, or you could hand-curate 200 excellent ones. Which produces the better fine-tune, and why — and what must you reserve from *either* set before training?

## Sources
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — start with ~50–100 high-quality rows; quality of data matters more than size; JSONL message format. https://www.anthropic.com/news/fine-tune-claude-3-haiku
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — supervised examples of correct responses; dataset preparation. https://platform.openai.com/docs/guides/fine-tuning`,
    },
    {
      slug: "the-training-loop",
      title: "6 · The training loop (epochs, overfitting, eval)",
      section: "Build & train",
      body: `You don't need to write the training code to fine-tune (API services run the loop for you), but you must understand what's happening to read the results and avoid the classic mistakes.

**Core vocabulary:**

- **Epoch** — one full pass over your training data. Training usually runs for several epochs; each pass nudges the weights a little more toward your examples.
- **Loss** — a number measuring how wrong the model's predictions are on your data. Training tries to push it down. *Falling training loss is not the goal* — generalizing is.
- **Learning rate** — how big each adjustment step is. Too high and training is unstable; too low and it barely moves. Defaults are usually a fine starting point.

**The mistake to design against: overfitting.** If you train too long (too many epochs) on too little data, the model stops *learning the pattern* and starts *memorizing your examples*. It looks brilliant on training data and falls apart on anything new. The tells:

- **Training loss keeps dropping but validation performance stalls or gets worse** — the gap is overfitting. This is exactly why you held out a validation set in the last lesson: it's your only honest signal.
- The model parrots training examples verbatim, or becomes weirdly rigid and worse at general tasks (a cousin of *catastrophic forgetting* — see the risks lesson).

**How to fight it:** use *enough varied* data, train for *fewer* epochs rather than more, and **watch validation metrics, not training loss** — stop when validation stops improving. With API fine-tuning you control epoch count and a few other knobs; with open-weights/LoRA you control more. Either way the discipline is the same: **change one thing, measure on held-out data, keep it only if validation improves.**

> **Trust DNA:** a model that aces the data it trained on has proven nothing. "It works" means it works on inputs it has *never seen.* Trust the validation set, not the training curve.

**Check yourself.** Training loss is still dropping nicely, but your validation accuracy peaked two epochs ago and is now declining. What's happening, and what should you do?

## Sources
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — epochs and tuning hyperparameters; evaluating results. https://platform.openai.com/docs/guides/fine-tuning
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see the "Measure" function (measure performance on held-out, representative data). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "evaluating-a-fine-tune",
      title: "7 · Evaluating a fine-tuned model honestly",
      section: "Build & train",
      body: `A fine-tune that you haven't evaluated against the *original* model is a claim, not a result. The whole point of this course's trust DNA: prove it helped, or don't ship it.

**The only honest test: a held-out eval set + a baseline comparison.**

1. **Build an eval set** of representative inputs with known-good answers or a clear rubric — inputs the model never saw in training.
2. **Always compare to a baseline.** Run the *same* eval on (a) the base model with your best prompt, and (b) your fine-tuned model. If the fine-tune doesn't clearly beat your best prompt, **the prompt wins** — it's cheaper and more flexible. This single comparison kills most unnecessary fine-tunes.
3. **Pick metrics that fit the task.** Exact match or accuracy for classification; format-validity for structured output; a human or a separate "judge" model scoring against a rubric for open-ended writing. Anthropic's case showed fine-tuning lifting a moderation task from 81.5% to 99.6% accuracy — *because they measured it* (Anthropic, 2024).
4. **Test for regressions and side effects.** A fine-tune that nails your task can quietly get *worse* at adjacent tasks (catastrophic forgetting — next lesson). Include some "general capability" checks, not just your narrow target.

This is NIST's **"Measure"** function in practice: you don't assert the system is better, you *measure* it on representative data, against a baseline, before trusting it (NIST, 2023).

**Wire it into your process:** keep the eval set in version control and re-run it every time you change the data, the epochs, or the base model — the same way you'd re-run unit tests. A fine-tune is config that can regress; treat it like code.

> **Trust DNA:** "it feels better" is not evaluation. A number on a held-out set, next to the baseline's number, is. If you can't show the lift, you don't have one.

**Check yourself.** Your fine-tuned model scores 88% on your eval set. Why is that number *meaningless* until you also run one more thing — and what is it?

## Sources
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — measured accuracy lift (81.5% → 99.6%) via evaluation. https://www.anthropic.com/news/fine-tune-claude-3-haiku
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Measure" function. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "practice-fine-tuning-basics",
      title: "8 · Practice: fine-tuning vocabulary and the decision",
      section: "Build & train",
      exercise: {
        instructions:
          "Fill in the missing term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt:
              "Before fine-tuning, you should try a better ___ first — it's cheaper, instant to test, and reversible.",
            answer: "prompt",
            accept: ["prompt engineering", "prompting"],
            explanation:
              "Prompt engineering is the cheapest, most reversible tool — OpenAI's guidance is to try it (and chaining) before fine-tuning.",
          },
          {
            prompt:
              "When the model needs FACTS it doesn't have (and that change over time), the right tool is retrieval, also called ___.",
            answer: "RAG",
            accept: ["rag", "retrieval-augmented generation", "retrieval augmented generation"],
            explanation:
              "RAG keeps knowledge fresh and citable. Fine-tuning teaches behavior/form, not an updatable knowledge base.",
          },
          {
            prompt:
              "The PEFT method that freezes the original weights and injects small trainable low-rank matrices is ___.",
            answer: "LoRA",
            accept: ["lora", "low-rank adaptation"],
            explanation:
              "LoRA (Hu et al., 2021) trains a tiny fraction of parameters — quality-competitive, no added inference latency, runs on one GPU.",
          },
          {
            prompt:
              "When a model memorizes your training examples and gets worse on new inputs, it is ___.",
            answer: "overfitting",
            accept: ["overfit", "over-fitting"],
            explanation:
              "Tell-tale sign: training loss keeps dropping while validation performance stalls or declines. Train fewer epochs; watch validation.",
          },
          {
            prompt:
              "The data you hold out and never train on, used to measure real performance, is the ___ set.",
            answer: "validation",
            accept: ["validation/test", "test", "validation set", "test set", "eval", "holdout", "held-out"],
            explanation:
              "Acing training data proves nothing. Only held-out data shows whether the model generalizes.",
          },
          {
            prompt:
              "For 'answers are correct but never in our required JSON format,' the right tool is fine-___ (not RAG).",
            answer: "tuning",
            accept: ["fine-tuning", "finetuning", "fine tuning"],
            explanation:
              "Format/style/narrow-skill gaps that survive good prompting are the fine-tuning case; missing facts are the RAG case.",
          },
        ],
      },
    },

    // ── Section 4 · Ship & decide ─────────────────────────────────────────────
    {
      slug: "cost-latency-hosting",
      title: "9 · Cost, latency, and hosting (API fine-tune vs. open weights)",
      section: "Ship & decide",
      body: `Fine-tuning isn't done when training finishes — you still have to *run* the model in production, and that's where the real tradeoffs live. Two broad paths:

**Path A — API fine-tuning (managed).** You upload your dataset to a provider (OpenAI, or Anthropic's Claude via Amazon Bedrock), they run the training and host the customized model behind an API.
- **Pros:** no GPU ops, no infra to maintain, scales for you, your data stays in your account/environment (Anthropic, 2024).
- **Cons / costs:** you pay to *train*, and you typically pay a **higher per-token price to *use*** a fine-tuned model than the base model — plus you're locked to that vendor's models and pricing. Your fine-tune is tied to a specific base version: when the provider retires or updates it, you re-train.

**Path B — open-weights fine-tuning (self-managed).** You download an open model (e.g. a Llama- or Mistral-family model), LoRA/PEFT-fine-tune it yourself, and host it.
- **Pros:** full control, no per-token vendor fee, data never leaves your infra, you can run it anywhere — and LoRA makes the *training* cheap (Hugging Face, 2024; Hu et al., 2021).
- **Cons:** *you* own hosting — GPUs, autoscaling, uptime, latency tuning, security. That operational cost is real and easy to underestimate.

**Latency and cost intuitions that hold either way:**

- **Fine-tuning can *lower* per-request cost** by letting you drop a giant system prompt (fewer input tokens every call) — sometimes that alone justifies it at high volume (OpenAI, 2025).
- **A smaller fine-tuned model can beat a bigger general one** on a narrow task — cheaper and faster per call, often *more* accurate at the one thing. This is a frequent, legitimate reason to fine-tune.
- **But the fixed costs are real:** training spend, eval effort, and (Path B) hosting. Do the math: *(tokens × price × volume) + training + ops*, compared honestly against "just use a great prompt on the base model."

**The honest decision:** managed API when you want speed-to-ship and no ops and accept vendor lock-in and usage premiums; open-weights when volume, data control, or cost-at-scale justify owning the stack. Neither is "more advanced" — pick the one your constraints actually point to.

**Check yourself.** Give one scenario where API fine-tuning is the right call and one where open-weights fine-tuning is — and name the dominant *cost* you're trading in each.

## Sources
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — shorter prompts / token savings; fine-tuned model usage. https://platform.openai.com/docs/guides/fine-tuning
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — managed fine-tuning; data stays in the customer's AWS environment. https://www.anthropic.com/news/fine-tune-claude-3-haiku`,
    },
    {
      slug: "open-vs-closed-licenses",
      title: "10 · Open vs. closed models, and licenses",
      section: "Ship & decide",
      body: `Whether you *can* fine-tune (and what you may legally do with the result) depends on the model you start from. This is a real decision with legal weight, not a vibe.

**Closed (proprietary) models** — e.g. OpenAI's GPT family, Anthropic's Claude. You never see or hold the weights; you fine-tune *through the provider's service* and use the result *through their API* under their terms. You get managed convenience and safety guarantees; you give up portability and accept usage-based pricing and vendor lock-in (OpenAI, 2025; Anthropic, 2024).

**Open-weights models** — e.g. Llama-, Mistral-, or Qwen-family models. You download the actual weights, fine-tune them yourself (LoRA/PEFT makes it cheap), and host the result wherever you want (Hugging Face, 2024). Maximum control and portability — but you own the operations *and* the responsibility to read the license.

**Read the license — "open" is not one thing:**

- **"Open weights" is not automatically "open source," and not automatically "do anything."** Some open models ship under permissive licenses (e.g. Apache 2.0); others ship under *custom community licenses* with real conditions — acceptable-use restrictions, attribution/naming requirements, or thresholds (for example, extra terms above a certain user scale). The presence of downloadable weights does **not** by itself grant unlimited commercial rights.
- **Check, specifically:** Is commercial use permitted? Are there restrictions on what you may build? Can you redistribute the fine-tuned weights? Are there attribution or naming obligations? Who owns the fine-tuned result?
- **This is an authoritative-value question, not a guess:** read the model's *actual license file* for the specific model and version you're using. Don't assume "it's on Hugging Face, so it's free to do anything." When unsure, flag it for legal review rather than asserting it's fine.

**The builder's rule:** pick the model that fits your task *and* your legal/ops constraints, and verify the license before you build a product on it. A great fine-tune you're not licensed to ship is a liability, not an asset.

> **Trust DNA:** "open" is a spectrum with fine print. Verify the license against the source — don't repeat a forum claim that "it's basically MIT." NIST's framework treats this kind of legal/governance check as part of responsibly governing an AI system (NIST, 2023).

**Check yourself.** Why is "the weights are downloadable" *not* enough to conclude you can ship a commercial product built on a model — and where do you find the authoritative answer?

## Sources
- Hugging Face. (2024). *PEFT (Parameter-Efficient Fine-Tuning) documentation* — fine-tuning open models efficiently. https://huggingface.co/docs/peft/index
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see the "Govern" function (policies, legal, and accountability). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "risks-of-fine-tuning",
      title: "11 · The risks (forgetting, data leakage, bias amplification)",
      section: "Ship & decide",
      body: `Fine-tuning doesn't just add a skill — it can *subtract* capabilities and *introduce* harms. Knowing the failure modes is what separates a responsible fine-tune from a reckless one.

**1 · Catastrophic forgetting.** When you train hard on a narrow task, the model can get *worse* at things it used to do well — its general ability degrades as the weights specialize. The defenses: use PEFT/LoRA (you're changing far fewer weights, so there's less to forget), don't over-train, and **include general-capability checks in your eval** so you *catch* the regression instead of shipping it.

**2 · Data leakage / privacy.** Your fine-tuning data becomes part of the model's behavior — and a fine-tuned model can sometimes **reproduce its training examples verbatim**. If you trained on customer PII, secrets, or proprietary data, the model may emit them to other users. Defenses: **minimize and sanitize** training data (strip secrets and PII you don't need), control who can query the model, and prefer providers/architectures where your data stays in your environment (Anthropic, 2024). Treat the training set as sensitive, because it is.

**3 · Bias amplification.** The model imitates your data — so any bias in your examples gets *learned and amplified*, then applied at scale to everyone the model touches. A skewed or unrepresentative dataset produces a skewed model. NIST flags managing **harmful bias** and protecting **data privacy** as core to trustworthy AI, and stresses **measuring** these effects across affected groups rather than assuming fairness (NIST, 2023). Defenses: audit your data for representativeness, evaluate outcomes across groups, and keep a human in the loop for anything consequential.

**The throughline:** every one of these traces back to the **data and the over-training**. Curate honestly, train no harder than you must, evaluate for side effects (not just your target metric), and protect the training set. A fine-tune you didn't stress-test for these is a risk you're shipping to your users.

> **Trust DNA:** fine-tuning can quietly make a model *less* trustworthy — more biased, more leaky, narrower — while looking better on your one metric. Evaluate honestly means evaluating for the harms too, not just the win.

**Check yourself.** Name the three risks in this lesson and the single root cause they share — then give one defense that helps with all three.

## Sources
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — data stays in the customer's environment; safety preserved. https://www.anthropic.com/news/fine-tune-claude-3-haiku
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — Harmful Bias Managed; Privacy-Enhanced; "Measure"/"Manage." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "should-i-fine-tune-framework",
      title: "12 · The 'should I fine-tune?' framework",
      section: "Ship & decide",
      body: `Pulling it together into a checklist you can run before spending a dollar on training. Work top to bottom; **stop at the first 'no.'**

**Step 1 — Have you genuinely exhausted prompting?** A clear, structured prompt with a few good examples (few-shot)? Prompt chaining? If not, do that first — it's free and instant (OpenAI, 2025). *Most candidates stop here.*

**Step 2 — Is the gap *knowledge* or *behavior*?** If the model is missing **facts** (especially ones that change), that's **RAG**, not fine-tuning. Only continue if the gap is **form, style, or a narrow skill** that survives good prompting. *Many of the rest stop here.*

**Step 3 — Can you produce a real, honest dataset?** Can you write/curate enough **high-quality, consistent, representative** *(input, ideal output)* pairs (start ~50–100 and grow), correctly formatted, with a **held-out eval set**? If you can't build clean data, you can't fine-tune well — fix that before training (Anthropic, 2024).

**Step 4 — Can you measure the lift against a baseline?** Will you compare the fine-tune to your *best prompt on the base model* on held-out data? If you can't prove it beats the prompt, don't ship it (NIST, 2023).

**Step 5 — Do the economics and ops work?** Training cost, possible higher per-token usage price (API) or hosting/ops burden (open weights), and re-training when the base model updates — does the math beat "great prompt on the base model" at your volume? (OpenAI, 2025.)

**Step 6 — Have you accounted for the risks?** Catastrophic forgetting, data leakage, bias amplification — do you have evals and data hygiene to catch them? If not, you're shipping unmanaged risk.

**If you reach the bottom with all 'yes,' fine-tune — and even then, start small (LoRA/PEFT, supervised, ~100 examples), measure, and grow only where the eval says to.** That's the disciplined path.

> **Trust DNA, final form:** the goal was never "fine-tune a model." It was "solve the problem with the cheapest, most honest, most maintainable tool that works." Often that's a better prompt. Sometimes it's RAG. Occasionally it's a small, well-evaluated fine-tune. Knowing *which* — and being able to prove it — is the whole skill.

**Check yourself.** Of the six steps, which one stops the *most* would-be fine-tunes — and why is stopping there a *win*, not a failure?

## Sources
- OpenAI. (2025). *Model optimization (fine-tuning) guide* — prompt-engineer first; fine-tune for token savings and narrow tasks. https://platform.openai.com/docs/guides/fine-tuning
- Anthropic. (2024). *Fine-tune Claude 3 Haiku in Amazon Bedrock* — start small with high-quality data; evaluate. https://www.anthropic.com/news/fine-tune-claude-3-haiku
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — Map/Measure/Manage/Govern. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "fine-tuning-quiz",
      title: "13 · Check your understanding",
      section: "Ship & decide",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What does fine-tuning actually change, compared to prompting and RAG?",
            options: [
              "It changes only the text you put into the model",
              "It updates the model's own weights, producing a customized version of it",
              "It retrains the model from scratch on your data",
              "It makes the model deterministic",
            ],
            correctIndex: 1,
            explanation:
              "Prompting and RAG change the input; fine-tuning continues training the model so its weights shift toward your task — a customized model.",
            sourceLessonSlug: "what-fine-tuning-is",
          },
          {
            prompt:
              "Your model needs to answer questions about your help-center docs, which change weekly. Best tool?",
            options: [
              "Fine-tuning on the docs",
              "RAG (retrieval) — fresh, citable knowledge",
              "Full fine-tuning every week",
              "A higher temperature",
            ],
            correctIndex: 1,
            explanation:
              "Missing/changing FACTS is a retrieval problem. Fine-tuning teaches behavior/form, not an updatable, citable knowledge base.",
            sourceLessonSlug: "fine-tune-vs-prompt-vs-rag",
          },
          {
            prompt:
              "In the honest order of operations, what should you try BEFORE fine-tuning?",
            options: [
              "Full fine-tuning, then LoRA",
              "Nothing — fine-tuning is always the first step",
              "A better prompt (few-shot, structure), and RAG if the gap is knowledge",
              "Buy more GPUs",
            ],
            correctIndex: 2,
            explanation:
              "OpenAI's guidance: prompt-engineer (and chain) first; add RAG for knowledge gaps; fine-tune only when those plateau on a behavior gap.",
            sourceLessonSlug: "fine-tune-vs-prompt-vs-rag",
          },
          {
            prompt: "What does LoRA (a PEFT method) do?",
            options: [
              "Updates every weight in the model",
              "Freezes the pretrained weights and trains small low-rank matrices, cutting trainable parameters",
              "Retrieves documents at query time",
              "Increases the context window",
            ],
            correctIndex: 1,
            explanation:
              "LoRA (Hu et al., 2021) freezes original weights and injects trainable low-rank matrices — quality-competitive, runs on a single GPU, no added inference latency.",
            sourceLessonSlug: "types-of-fine-tuning",
          },
          {
            prompt: "For a fine-tuning dataset, which matters most?",
            options: [
              "The largest possible row count",
              "High-quality, consistent, representative examples — quality over quantity",
              "Using only synthetic data",
              "The fastest learning rate",
            ],
            correctIndex: 1,
            explanation:
              "Quality beats quantity. Anthropic's guidance: start with ~50–100 high-quality rows, evaluate, then grow where the eval shows weakness.",
            sourceLessonSlug: "building-a-dataset",
          },
          {
            prompt:
              "Training loss keeps dropping but validation performance is stalling and declining. What's happening?",
            options: [
              "The model is generalizing well",
              "Overfitting — the model is memorizing training data instead of learning the pattern",
              "The learning rate is too low",
              "The dataset is too large",
            ],
            correctIndex: 1,
            explanation:
              "That gap is overfitting. Train fewer epochs, use more varied data, and stop when validation (not training loss) stops improving.",
            sourceLessonSlug: "the-training-loop",
          },
          {
            prompt: "Your fine-tune scores 88% on your eval set. Why isn't that enough to ship?",
            options: [
              "88% is always too low",
              "You must compare it to a baseline — your best prompt on the base model on the same eval",
              "You need a bigger model",
              "Eval sets are unreliable",
            ],
            correctIndex: 1,
            explanation:
              "Without a baseline comparison, the number is meaningless. If the fine-tune doesn't beat your best prompt, the prompt wins (cheaper, more flexible).",
            sourceLessonSlug: "evaluating-a-fine-tune",
          },
          {
            prompt:
              "When does open-weights fine-tuning make more sense than managed API fine-tuning?",
            options: [
              "When you want zero operations work",
              "When data control, high volume, or cost-at-scale justify owning hosting — you trade convenience for ops",
              "Always — open is strictly better",
              "Only for tiny models",
            ],
            correctIndex: 1,
            explanation:
              "Open weights give control, portability, and no per-token vendor fee, but you own GPUs and uptime. API gives speed-to-ship at the cost of lock-in and usage premiums.",
            sourceLessonSlug: "cost-latency-hosting",
          },
          {
            prompt:
              "The weights for an open model are downloadable. Can you ship a commercial product on it?",
            options: [
              "Yes — downloadable weights mean unlimited use",
              "Not necessarily — you must read that model's actual license; 'open weights' isn't automatically 'do anything'",
              "Never — open models can't be used commercially",
              "Only with a fine-tune",
            ],
            correctIndex: 1,
            explanation:
              "Open weights span permissive (e.g. Apache 2.0) to custom community licenses with restrictions. Read the actual license for that model/version; flag for legal if unsure.",
            sourceLessonSlug: "open-vs-closed-licenses",
          },
          {
            prompt:
              "Catastrophic forgetting, data leakage, and bias amplification mostly trace back to what shared root cause?",
            options: [
              "Using too small a context window",
              "The training data and over-training — curate honestly, train no harder than needed, and evaluate for side effects",
              "Low temperature",
              "Hosting on the wrong cloud",
            ],
            correctIndex: 1,
            explanation:
              "All three come from the data you feed and how hard you train. Sanitize/curate data, use PEFT, don't over-train, and eval across groups and general capability.",
            sourceLessonSlug: "risks-of-fine-tuning",
          },
        ],
      },
    },
  ],
};
