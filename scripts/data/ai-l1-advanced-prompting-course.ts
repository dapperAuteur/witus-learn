// Authored "Advanced Prompting & Reasoning": L1 on the AI mastery LADDER (literacy
// track). Builds on F1 (AI Literacy), the recommended prerequisite. This is for
// EVERYONE (learners, writers, knowledge workers), not just developers: it deepens
// prompting and reasoning skill WITHOUT getting code-heavy (that depth lives in the
// Builder track's B1). Tool-agnostic and practical: structure, role/context/task/
// format framing, few-shot examples, chain-of-thought / "show your reasoning,"
// asking for sources & self-checks, the iterate/prompt-debug loop, constraints &
// guardrails, when NOT to trust the answer (reasoning ≠ truth), and reusable prompt
// patterns for learning, work, and writing. Carries the platform trust DNA: verify,
// cite, reasoning can still be wrong. Cited with real, verifiable sources: OpenAI's
// prompting guide, Anthropic's prompt-engineering docs, Google PAIR's People + AI
// Guidebook, the chain-of-thought paper (Wei et al., 2022, arXiv:2201.11903), and the
// NIST AI RMF for the "verify" framing. Two fill-in exercises + a final quiz whose
// every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_L1_ADVANCED_PROMPTING_COURSE: AuthoredCourse = {
  title: "Advanced Prompting & Reasoning",
  description:
    "Go from getting answers out of AI to getting reliably good ones. This is the next step after AI Literacy (F1), for everyone, not just developers. You'll learn what a prompt really is and why structure matters, how to frame role/context/task/format, give examples (few-shot), ask the model to show its reasoning step by step, request sources and self-checks, and run the iterate-and-refine loop that turns a mediocre first answer into a strong one. Tool-agnostic and practical, with reusable prompt patterns for learning, work, and writing, and the trust DNA throughout: verify, cite, and remember that good reasoning can still reach a wrong answer. AI Literacy (F1) is the recommended prerequisite.",
  lessons: [
    // ── Section 1 · Why structure beats wording ───────────────────────────────
    {
      slug: "what-a-prompt-really-is",
      title: "1 · What a prompt really is (and why structure matters)",
      section: "Why structure beats wording",
      body: `In AI Literacy you learned what a model **is**: a next-token predictor that produces the most plausible-sounding continuation of your text, fluent but not fact-checked. A **prompt** is simply the text you give it to steer that prediction. So a prompt isn't a magic incantation, it's **the context the model reasons from**. Change the context and you change the answer.

That reframing is the whole game. People hunt for "magic words," but the biggest gains come from **structure**, not clever phrasing:

- A short, vague prompt leaves the model to guess your audience, goal, length, and format, and it will guess plausibly, not correctly.
- A structured prompt that states those things removes the guessing. The model now has what a competent human helper would need.

OpenAI's and Anthropic's own prompting guides say the same thing in different words: **be clear and specific, give the model the context and constraints, and show it what good looks like.** That's it. Everything else in this course is a way to do those three things well.

A quick before/after:

| Weak | Strong |
| --- | --- |
| "Write about climate change." | "Write a 150-word explainer on why ocean heat matters, for a general adult reader, in plain language, ending with one takeaway sentence." |
| "Give me feedback." | "You're an editor. Point out the 3 weakest sentences in the paragraph below and explain why each is weak. Don't rewrite them yet." |

Both "strong" prompts win not because of fancy words, but because they supply **structure**: audience, length, format, role, and a precise task.

**Check yourself.** In one sentence, why does structure usually matter more than clever wording?

## Sources
- OpenAI. (2025). Prompting (API guide). https://platform.openai.com/docs/guides/prompting
- Anthropic. Prompt engineering overview. https://docs.anthropic.com/en/docs/prompt-engineering`,
    },
    {
      slug: "role-context-task-format",
      recallContent: [
        { prompt: "What is a prompt, in one line?", answer: "The text you give a model to steer its prediction: the context it reasons from, not a magic incantation." },
        { prompt: "Why does structure usually beat clever wording?", answer: "A structured prompt states the audience, goal, length, and format, so the model stops guessing; magic words add no context." },
      ],
      title: "2 · The frame: role, context, task, format",
      section: "Why structure beats wording",
      body: `F1 gave you a starter recipe (Role · Task · Context · Format · Examples). L1 makes you fluent in it, because a reliable frame is what separates "I got an answer" from "I got the answer I needed."

Four pieces carry most of the weight:

- **Role**: who the model should act as. "You are a patient statistics tutor" pulls different vocabulary, depth, and tone than "You are a skeptical peer reviewer." Role sets the *voice and the bar*.
- **Context**: the situation, the audience, and any **source material** the answer should be based on. Pasting the actual article, email, or data is far stronger than trusting the model's memory of it. Context is where accuracy is won or lost.
- **Task**: the single, precise thing you want done. "Summarize," "compare," "critique," "rewrite for a 9th-grader," "list the risks." One clear verb beats a pile of vague hopes.
- **Format**: the shape of the output: length, structure, tone. "Five bullets, plain English, no jargon" or "a table with columns Claim / Evidence / Confidence."

A field-tested order that works for most tasks:

> **Role → Context (incl. any pasted material) → Task → Format → (Examples, if the shape is finicky).**

You don't need all five every time. But when an answer disappoints, the fix is almost always **a missing piece of the frame**, not a missing magic word. Google's People + AI Guidebook frames this as designing the *handoff* between the person and the system: the clearer you are about goal, inputs, and the form of a good result, the better the collaboration.

**Check yourself.** Name the four core pieces of the frame, and say which one is where accuracy is usually won or lost.

## Sources
- Anthropic. Prompt engineering overview (clarity, role prompting, providing context). https://docs.anthropic.com/en/docs/prompt-engineering
- Google PAIR. People + AI Guidebook. https://pair.withgoogle.com/guidebook/`,
    },
    {
      slug: "practice-the-frame",
      title: "3 · Practice: complete the frame",
      section: "Why structure beats wording",
      exercise: {
        instructions:
          "Each item describes a prompt that's missing one piece of the Role / Context / Task / Format frame. Type the missing piece. Spelling is forgiving.",
        items: [
          { prompt: "\"Make this better.\" with nothing pasted, the model can't see what 'this' is. What's missing?", answer: "context", accept: ["the context", "source", "source material"], explanation: "Give it the actual material and situation; don't rely on its memory of your document." },
          { prompt: "You want the reply to sound like a kind, patient tutor instead of a generic bot. Set its ___.", answer: "role", explanation: "A role ('You are a patient tutor') sets the voice, depth, and bar of the answer." },
          { prompt: "\"Tell me about this report.\" is too open, it never names the one action. Replace it with a single, precise ___.", answer: "task", explanation: "One clear verb (summarize, compare, critique) beats a vague hope." },
          { prompt: "You need exactly five plain-English bullets, no jargon. That instruction sets the ___.", answer: "format", explanation: "Format is the shape of the output: length, structure, and tone." },
          { prompt: "A field-tested order is Role, then Context, then Task, then ___.", answer: "format", explanation: "Role → Context → Task → Format → (Examples if the shape is finicky)." },
        ],
      },
    },

    // ── Section 2 · Showing the model what good looks like ────────────────────
    {
      slug: "examples-few-shot",
      recallContent: [
        { prompt: "Name the four core pieces of the prompt frame.", answer: "Role, Context, Task, and Format (add Examples if the shape is finicky)." },
        { prompt: "Which piece of the frame is where accuracy is usually won or lost, and why?", answer: "Context: pasting the actual source material grounds the answer, while trusting the model's memory is where facts go wrong." },
      ],
      title: "4 · Show, don't just tell: examples (few-shot)",
      section: "Showing the model what good looks like",
      body: `Sometimes the fastest way to get the output you want is to **show one or two examples of it** inside the prompt. In the technical literature this is called **few-shot prompting** (one example = "one-shot"; a few = "few-shot"; none = "zero-shot"). You don't need the jargon to use it, you just need the instinct: *when the shape of a good answer is hard to describe, demonstrate it.*

Why it works: the model is a pattern-matcher. A clear example is a pattern it can lock onto, often more precisely than a paragraph of instructions.

When examples earn their keep:

- **Finicky formats**: "Turn each note into 'Name, one-line summary, next step.'" Show one done correctly and the rest follow.
- **A specific voice or style**: paste a sentence in the tone you want ("write the rest like this").
- **Edge-case handling**: show how you want an unusual input treated, e.g. "if a date is missing, write 'date: unknown', like this example."
- **Classification**: give two or three labeled examples so "what counts as urgent" is concrete, not guessed.

A practical pattern, plain and tool-agnostic:

> Here's the format I want, with one example:
> Input: "Call the dentist sometime"
> Output: "Call the dentist, schedule a cleaning, by Friday"
> Now do the same for these five notes: …

Two cautions that keep examples honest:

- **Your examples teach the pattern, including their mistakes.** A sloppy or biased example produces sloppy, biased output. Pick examples you'd be proud of.
- **Examples don't make facts true.** Demonstrating a *format* is great; demonstrating a *claim* doesn't verify it. Sourcing and verification (next section) are still your job.

**Check yourself.** Give one situation where showing an example beats describing what you want, and one thing an example still can't do for you.

## Sources
- OpenAI. (2025). Prompting (API guide): few-shot examples. https://platform.openai.com/docs/guides/prompting
- Anthropic. Prompt engineering overview: using examples (multishot prompting). https://docs.anthropic.com/en/docs/prompt-engineering`,
    },
    {
      slug: "chain-of-thought",
      recallContent: [
        { prompt: "What is few-shot prompting, and why does it work?", answer: "Putting one or two example answers in the prompt; the model is a pattern-matcher that locks onto a clear example better than onto a paragraph of instructions." },
        { prompt: "Name one thing a good example still cannot do for you.", answer: "It cannot make a claim true: showing a format does not verify facts, so sourcing and verification stay your job." },
      ],
      title: "5 · Ask it to show its reasoning (step by step)",
      section: "Showing the model what good looks like",
      body: `For anything with steps (a math or logic problem, a multi-part decision, a "compare these options" question), you'll get better, checkable answers when you ask the model to **work through it step by step** instead of blurting a final answer. Researchers call this **chain-of-thought prompting**, and a landmark 2022 study (Wei et al.) showed that prompting a model to generate intermediate reasoning steps substantially improves its performance on arithmetic, commonsense, and logic tasks.

You don't need to be technical to use it. Plain phrasings that trigger it:

- "Think it through step by step before giving the final answer."
- "Show your reasoning, then state the conclusion on its own line."
- "List the options, weigh the pros and cons of each, then recommend one and say why."

Two big payoffs for a non-developer:

1. **Better answers on multi-step problems.** Forcing the steps reduces careless leaps.
2. **A checkable trail.** When the reasoning is visible, *you can audit it.* You can spot the exact step where it went wrong, which you can never do with a bare answer.

That second point is the one this course cares about most. Showing the work is what makes the answer **inspectable**, and inspectable is what makes it trustworthy.

**One honest caveat (we'll hammer this in lesson 9):** the written steps are *also* generated text. A model can produce a tidy, confident chain of reasoning that still reaches a wrong answer, or that doesn't actually reflect how it got there. "Show your reasoning" makes answers easier to check, it does **not** make them automatically correct. Reasoning is a tool for *you* to verify, not a guarantee.

**Check yourself.** What are the two reasons to ask a model to "show its reasoning", and why is visible reasoning still not proof the answer is right?

## Sources
- Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. arXiv:2201.11903. https://arxiv.org/abs/2201.11903
- OpenAI. (2025). Prompting (API guide): instruct the model to reason step by step. https://platform.openai.com/docs/guides/prompting`,
    },
    {
      slug: "ask-for-sources-and-self-checks",
      recallContent: [
        { prompt: "What are the two payoffs of asking a model to show its reasoning step by step?", answer: "Better answers on multi-step problems, and a visible trail you can audit to find the exact step that went wrong." },
        { prompt: "Why is visible step-by-step reasoning still not proof the answer is right?", answer: "The steps are also generated text; a tidy, confident chain can reach a wrong answer or not reflect how the model got there." },
      ],
      title: "6 · Ask for sources, and ask it to check itself",
      section: "Showing the model what good looks like",
      body: `F1's core habit was *verify the output*. L1 turns that into prompting moves you can use every time.

**Ask for sources, and then open them.** Add to your prompt: "For each factual claim, name the source you'd check." This does two useful things: it nudges the model toward claims it can ground, and it gives **you** a list to verify. But hold the line from F1: **a model can invent real-looking citations**: fake URLs, fake DOIs, fake case names. A source you didn't open is not a source. The prompt produces *leads*; you do the confirming.

**Ask it to check its own work.** Models are often better at *critiquing* an answer than producing a perfect one first try. Useful self-check prompts:

- "Before you answer, list what could make this wrong."
- "Now review your answer for errors, unsupported claims, or missing steps, and fix them."
- "Rate your confidence in each claim (high, medium, or low) and flag anything you're unsure about."
- "What would I need to check independently before trusting this?"

This is sometimes called **self-critique** or asking the model to **reflect**. It genuinely catches some mistakes, but with the same caveat as reasoning: a model can also *confidently bless its own wrong answer*. Self-checking raises the floor; it doesn't replace **you** as the verifier.

A reliable pattern that stacks these moves:

> Answer the question. Then, in a separate section: (1) list the sources I should check for each claim, (2) flag anything you're unsure about, and (3) note what could make this answer wrong.

**Check yourself.** Why is "ask for sources" only half the job, and what's the other half that's on you?

## Sources
- Anthropic. Prompt engineering overview: let the model say "I don't know"; ask for grounded claims. https://docs.anthropic.com/en/docs/prompt-engineering
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0): "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },

    // ── Section 3 · Iterating, constraining, and knowing the limits ───────────
    {
      slug: "iterate-the-prompt-debug-loop",
      recallContent: [
        { prompt: "Why is asking the AI for sources only half the job?", answer: "Models can invent real-looking URLs, DOIs, and case names; the other half is on you: open each source and confirm it says what is claimed." },
        { prompt: "What can asking a model to self-check do, and what can it not do?", answer: "It catches some mistakes and raises the floor, but it can also confidently defend a wrong answer, so it does not replace you as the verifier." },
      ],
      title: "7 · Iterate: the prompt-debug loop",
      section: "Iterating, constraining, and knowing the limits",
      body: `Almost nobody gets the perfect output on the first try, and you shouldn't expect to. Treat the first answer as a **draft** and run a short loop, the same way a good writer or a good coder debugs.

**The prompt-debug loop:**

1. **Read the gap.** What's actually wrong? Too long? Wrong audience? Missed the point? Made a claim you can't verify? Name it specifically.
2. **Trace it to a missing piece of the frame.** A too-long answer = no length **format**. Wrong tone = no **role/audience**. Made-up facts = no pasted **context** to ground it. Off-topic = a fuzzy **task**.
3. **Change one thing.** Add that one piece, or give a counter-example, or tighten the task. Changing *one* variable tells you what worked.
4. **Re-run and compare.** Keep what improved; revert what didn't.

Two moves that make iteration much faster:

- **Tell it precisely what to change, not just "make it better."** "Cut it to 120 words and remove the jargon" beats "improve this." Specific feedback is itself a prompt.
- **Keep the good, fix the rest.** "This intro is perfect, keep it. Rewrite only the second paragraph to be more concrete." You're steering, not regenerating from scratch.

OpenAI's and Anthropic's guides both describe prompting as **iterative and empirical**: you test, observe, and refine against what a good result actually looks like. That's not a sign you're bad at it, iteration *is* the skill.

**Check yourself.** When an answer is too long and too generic, which two pieces of the frame are probably missing, and what's the one-variable rule for fixing it?

## Sources
- OpenAI. (2025). Prompting (API guide): iterate and refine prompts. https://platform.openai.com/docs/guides/prompting
- Anthropic. Prompt engineering overview: prompt iteration is empirical. https://docs.anthropic.com/en/docs/prompt-engineering`,
    },
    {
      slug: "constraints-and-guardrails",
      recallContent: [
        { prompt: "What are the four steps of the prompt-debug loop?", answer: "Read the gap, trace it to a missing piece of the frame, change one thing, then re-run and compare." },
        { prompt: "An answer is too long and too generic. Which frame pieces are probably missing?", answer: "A length format and an audience; add those and change only one variable at a time so you know what worked." },
      ],
      title: "8 · Constraints & guardrails (tone, length, audience, scope)",
      section: "Iterating, constraining, and knowing the limits",
      body: `Good prompts don't just say what to do, they say **what to stay inside of**. Constraints turn a sprawling, generic answer into a tight, usable one, and they're the easiest lever most people forget.

Useful constraints to make explicit:

- **Length**: "in 100 words," "exactly 3 bullets," "one sentence." Without a limit, models tend to over-explain.
- **Audience**: "for a 7th-grader," "for a busy executive who hates jargon," "for someone new to the topic." Audience controls vocabulary and depth.
- **Tone**: "warm and encouraging," "neutral and factual," "direct, no hedging."
- **Scope**: "only cover the EU rules," "don't include code," "stick to what's in the pasted text and say 'not stated' if it isn't there." Scope is a powerful anti-hallucination guardrail.
- **What NOT to do**: "don't invent statistics," "don't recommend a specific product," "if you're unsure, say so instead of guessing."

That last category is a real **guardrail**: explicitly permitting "I don't know" and forbidding invention measurably reduces confident nonsense. Anthropic's guidance is to give the model an out (let it say it doesn't know) rather than forcing an answer it has to fabricate.

A grounding constraint worth memorizing, for any "answer from this document" task:

> Answer **only** from the text I pasted. If the text doesn't say, write "not stated in the source." Do not add outside facts.

It won't make the model perfect, but it sharply cuts the made-up-facts problem, and it keeps you in the driver's seat on what counts as evidence.

**Check yourself.** Name three constraints you can add to almost any prompt, and the one "out" you should give the model to cut down on invented answers.

## Sources
- Anthropic. Prompt engineering overview: give Claude a way to say it doesn't know; constrain scope. https://docs.anthropic.com/en/docs/prompt-engineering
- Google PAIR. People + AI Guidebook: set expectations and communicate limits. https://pair.withgoogle.com/guidebook/`,
    },
    {
      slug: "when-not-to-trust",
      recallContent: [
        { prompt: "Name three constraints you can add to almost any prompt.", answer: "Length, audience, and tone (scope and a list of what not to do also help)." },
        { prompt: "What grounding constraint cuts made-up facts on an answer-from-this-document task?", answer: "Answer only from the pasted text and write 'not stated in the source' if it is not there; give the model an out so it does not fabricate." },
      ],
      title: "9 · When NOT to trust the answer (reasoning ≠ truth)",
      section: "Iterating, constraining, and knowing the limits",
      body: `This is the spine of the whole course, and the one place where "advanced" means **more skeptical, not less.** Everything you just learned (examples, step-by-step reasoning, self-checks, sources-on-request) makes answers **better and easier to inspect**. None of it makes them **automatically true.**

Why a polished, well-reasoned answer can still be wrong:

- **The reasoning is also generated text.** A chain-of-thought is the model predicting plausible *reasoning-shaped* text. It can be neat, confident, and still land on a wrong answer, or not even reflect how the model actually got there.
- **Fluency is not accuracy.** From F1: models optimize for plausible-sounding output. A confident tone is *evidence of nothing.*
- **Self-checks can rubber-stamp errors.** Asking "are you sure?" sometimes fixes a mistake, and sometimes produces a confident defense of the same mistake.
- **Sources can be fabricated.** Real-looking, entirely invented. Always open them.

So when should your guard go all the way up? Raise scrutiny when the answer involves:

- **Facts, numbers, names, dates, quotes, or citations**: anything you'd state as true.
- **Anything recent or fast-changing**: the model's knowledge has a cutoff.
- **High-stakes decisions**: legal, medical, financial, safety, or anything you'll act on or publish.
- **Things you *want* to be true**: your own bias makes a wrong answer feel right.

The NIST AI Risk Management Framework names "Valid and Reliable" as a core trustworthiness property precisely because plausible output isn't a guarantee of either. So keep the human in charge:

> **Use AI to draft, reason, and explain. Use real sources to confirm. You are the editor, the fact-checker, and the one accountable for the result.**

That's not a limitation to apologize for, it's the skill that makes you genuinely good with these tools while everyone else gets fooled.

**Check yourself.** Step-by-step reasoning and a self-check both *look* convincing. Give the one reason neither one proves the answer is true.

## Sources
- Wei, J., et al. (2022). Chain-of-thought prompting elicits reasoning in large language models. arXiv:2201.11903. https://arxiv.org/abs/2201.11903
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0): "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "prompt-patterns-learn-work-write",
      recallContent: [
        { prompt: "Why can a polished, well-reasoned, self-checked answer still be wrong?", answer: "The reasoning and the self-check are also generated text; fluency is not accuracy, self-checks can rubber-stamp errors, and sources can be fabricated." },
        { prompt: "Name two situations that should push your skepticism the highest.", answer: "High-stakes legal, medical, or financial claims you will act on, and anything with facts, numbers, dates, or citations." },
      ],
      title: "10 · Reusable prompt patterns for learning, work & writing",
      section: "Iterating, constraining, and knowing the limits",
      body: `You now have all the moves. This lesson hands you **reusable patterns**: fill-in templates that bundle the frame, examples, reasoning, constraints, and verification so you don't rebuild them each time. Steal these, adapt them, keep what works.

**For learning (the "tutor" pattern):**

> You are a patient tutor for someone new to [topic]. Explain [concept] in plain language for a [grade/level] reader, in under [N] words. Then give one everyday analogy, one common misconception, and one quick question to check my understanding. If any part is genuinely uncertain or debated, say so.

**For learning (the "Socratic / quiz me" pattern):**

> Quiz me on [topic], one question at a time. Wait for my answer before the next. After each, tell me if I'm right, explain why in one or two sentences, and point me to what I'd check to confirm it.

**For work (the "decision brief" pattern):**

> You are a careful analyst. Here is the situation and the material: [paste]. List the realistic options, then for each give pros, cons, and the biggest risk. Reason step by step. Recommend one and say why. Flag anything you're unsure about, and note what I should verify independently before deciding.

**For work (the "turn mess into structure" pattern):**

> Turn the notes below into [format, e.g. "a table: Task / Owner / Due / Status"]. Use only what's in the notes; if a field is missing, write "unknown." Here's one example row: [example]. Notes: [paste].

**For writing (the "editor" pattern):**

> You are a sharp editor. Don't rewrite yet. Point out the 3 weakest spots in the draft below and explain why each is weak, for a [audience] reader. Then suggest one concrete fix for each. Draft: [paste].

**For writing (the "match my voice" pattern):**

> Continue this in the same voice and tone as the sample. Keep sentences short, no jargon, [N] words. Sample: [paste]. Now write about: [topic].

Notice what every pattern shares: a **role**, **pasted context** when accuracy matters, a **precise task**, an explicit **format/constraint**, and a built-in **verify/uncertainty** step. That's not a coincidence, it's this whole course, compressed into templates you can reuse for the rest of your life.

**Check yourself.** Pick the pattern closest to something you do weekly. Which piece of the frame would you customize first to make it yours?

## Sources
- OpenAI. (2025). Prompting (API guide). https://platform.openai.com/docs/guides/prompting
- Anthropic. Prompt engineering overview. https://docs.anthropic.com/en/docs/prompt-engineering
- Google PAIR. People + AI Guidebook. https://pair.withgoogle.com/guidebook/`,
    },
    {
      slug: "practice-patterns",
      title: "11 · Practice: pick the right move",
      section: "Iterating, constraining, and knowing the limits",
      exercise: {
        instructions:
          "Each item describes a situation. Type the prompting move or term that fits best. Spelling is forgiving.",
        items: [
          { prompt: "The output format is hard to describe in words, so you paste one done-right example to copy. This is called ___ prompting.", answer: "few-shot", accept: ["few shot", "fewshot", "example", "multishot", "one-shot"], explanation: "Showing one or a few examples (few-shot) often beats describing the format in prose." },
          { prompt: "For a multi-step problem, you ask the model to 'work through it step by step.' This is called ___ prompting.", answer: "chain-of-thought", accept: ["chain of thought", "cot", "step-by-step", "step by step", "reasoning"], explanation: "Chain-of-thought (Wei et al., 2022) improves multi-step answers and makes them checkable." },
          { prompt: "First answer is too long and too generic. You add a length limit and an audience. You're tightening the ___.", answer: "format", accept: ["constraints", "constraint", "frame"], explanation: "Length + audience are format constraints, the easiest fix people forget." },
          { prompt: "To cut made-up facts on a 'use this document' task, you add: answer only from the pasted text and write '___' if it isn't there.", answer: "not stated", accept: ["not stated in the source", "unknown", "i don't know", "i dont know", "not stated in source"], explanation: "A grounding constraint with an explicit 'out' sharply reduces invented facts." },
          { prompt: "Treating the first answer as a draft and changing one variable at a time until it's right is the prompt-___ loop.", answer: "debug", accept: ["debugging", "iterate", "iteration", "refine"], explanation: "Iteration IS the skill: read the gap, trace it to the frame, change one thing, re-run." },
          { prompt: "A step-by-step answer with cited-looking sources still might be false, because the reasoning and the citations are also ___ text.", answer: "generated", accept: ["predicted", "plausible", "ai", "ai-generated", "model-generated"], explanation: "Reasoning ≠ truth: it's all generated text. Open the sources and verify yourself." },
        ],
      },
    },
    {
      slug: "advanced-prompting-quiz",
      title: "12 · Check your understanding",
      section: "Iterating, constraining, and knowing the limits",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What gives you the biggest improvement in AI answers?",
            options: [
              "Finding the right 'magic words'",
              "Giving the prompt clear structure: role, context, task, format",
              "Using a longer, more elaborate vocabulary",
              "Being polite to the model",
            ],
            correctIndex: 1,
            explanation: "Structure beats clever wording: state the audience, goal, length, and format so the model isn't guessing.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "In the role/context/task/format frame, which piece is usually where accuracy is won or lost?",
            options: [
              "Role",
              "Context, including the source material you paste in",
              "Format",
              "Tone",
            ],
            correctIndex: 1,
            explanation: "Pasting the actual material grounds the answer; trusting the model's memory is where facts go wrong.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "When is showing one or two examples (few-shot) most worth it?",
            options: [
              "When you want to make a claim true",
              "When the shape or style of a good answer is hard to describe in words",
              "Only when writing code",
              "Never: examples confuse the model",
            ],
            correctIndex: 1,
            explanation: "Demonstrate finicky formats, a specific voice, or edge cases. Examples teach the pattern, but don't verify facts.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "Why ask a model to 'show its reasoning step by step'?",
            options: [
              "It guarantees the answer is correct",
              "It improves multi-step answers AND gives you a trail you can audit",
              "It makes the answer shorter",
              "It hides the model's mistakes",
            ],
            correctIndex: 1,
            explanation: "Chain-of-thought (Wei et al., 2022) improves stepwise problems and makes the answer inspectable, but isn't proof it's right.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "You ask the AI for sources and it gives you three. What makes them trustworthy?",
            options: [
              "They have official-looking URLs",
              "The model sounded confident",
              "You opened each one and confirmed it says what's claimed",
              "There are three of them",
            ],
            correctIndex: 2,
            explanation: "Models can invent real-looking citations. Asking for sources is only half the job, opening and confirming them is on you.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "An answer comes back too long and too generic. What's the fastest fix?",
            options: [
              "Start over with a brand-new tool",
              "Add the missing frame pieces (a length format + an audience) and change one thing at a time",
              "Tell it 'make it better' and re-run",
              "Accept it, that's just how AI writes",
            ],
            correctIndex: 1,
            explanation: "The prompt-debug loop: trace the gap to a missing piece of the frame, change one variable, re-run, and compare.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "Which constraint best reduces made-up facts on an 'answer from this document' task?",
            options: [
              "Ask for a longer answer",
              "Ask it to be more confident",
              "\"Answer only from the pasted text; write 'not stated' if it isn't there\"",
              "Ask it to add extra background it knows",
            ],
            correctIndex: 2,
            explanation: "A grounding constraint plus an explicit 'out' (let it say it doesn't know) sharply cuts invented facts.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "A step-by-step answer that also passed its own self-check, what does that prove?",
            options: [
              "That the answer is definitely true",
              "Nothing on its own; the reasoning and the self-check are also generated text and can be confidently wrong",
              "That you don't need to verify it",
              "That the sources must be real",
            ],
            correctIndex: 1,
            explanation: "Reasoning ≠ truth. Visible reasoning and self-checks make answers easier to inspect, not automatically correct, you still verify.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "Which situation should push your skepticism the HIGHEST?",
            options: [
              "Brainstorming names for a party",
              "A high-stakes legal, medical, or financial claim you plan to act on",
              "Rewriting a sentence to be friendlier",
              "Asking for a fictional story",
            ],
            correctIndex: 1,
            explanation: "Raise scrutiny on facts, recent events, high-stakes decisions, and anything you want to be true.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "What do the reusable patterns (tutor, decision brief, editor) all share?",
            options: [
              "They're only useful for developers",
              "A role, pasted context when accuracy matters, a precise task, a format/constraint, and a built-in verify step",
              "They avoid giving the model any instructions",
              "They rely on secret magic words",
            ],
            correctIndex: 1,
            explanation: "Every good pattern is the whole course compressed: frame + examples/reasoning + constraints + verification.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
        ],
      },
    },
  ],
};
