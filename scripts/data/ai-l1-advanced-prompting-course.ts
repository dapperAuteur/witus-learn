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

:::reveal In one sentence, why does structure usually matter more than clever wording? ||| A structured prompt states the audience, goal, length, and format, so the model stops guessing; magic words add no context.

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

:::reveal Name the four core pieces of the frame, and say which one is where accuracy is usually won or lost. ||| Role, Context, Task, and Format. Accuracy is usually won or lost in the Context, the pasted material and background the model needs; when an answer disappoints, the fix is almost always a missing piece of the frame (most often context), not a magic word.

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

    {
      slug: "quiz-why-structure-beats-wording",
      title: "Section 1 knowledge check · Why structure beats wording",
      section: "Why structure beats wording",
      body: `A graded check on what a prompt actually is, on the four pieces of the frame, and on diagnosing which piece a weak prompt is missing. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a prompt, in this lesson's terms?",
            options: [
              "A command the model is obliged to follow exactly as written",
              "The context the model reasons from",
              "A setting that changes how the model was originally trained",
              "A phrase whose precise wording unlocks a hidden capability",
            ],
            correctIndex: 1,
            explanation:
              "It is just text you give the model to steer its prediction. That reframing is what kills the search for magic words: change the context and you change the answer.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "Why does this lesson say hunting for magic words is wasted effort?",
            options: [
              "Models are retrained often enough that any phrase stops working",
              "Providers filter out phrases that get shared too widely online",
              "Magic words add no context",
              "A long prompt is truncated before the model ever reads all of it",
            ],
            correctIndex: 2,
            explanation:
              "The model answers from the context it was given. A clever phrase that supplies no audience, goal, length or format has changed nothing about what it knows.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "A short, vague prompt leaves the model guessing. What does the lesson say about those guesses?",
            options: [
              "They are drawn from the most common answer in its training data",
              "They default to the most cautious answer available to the model",
              "They are plausible, not correct",
              "They are flagged in the output, so you know which parts were guessed",
            ],
            correctIndex: 2,
            explanation:
              "It will guess your audience, goal, length and format, and the guess will read well. Plausible is the model's whole specialty and is not the same as right.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "What do the OpenAI and Anthropic prompting guides both come down to?",
            options: [
              "Clarity, context, and a demonstration",
              "Longer prompts, more polite phrasing, and repeated instructions",
              "A named role, a word limit, and a request for citations every time",
              "More examples, a higher setting, and a second model to review",
            ],
            correctIndex: 0,
            explanation:
              "Be clear and specific, give the model context and constraints, and show it what good looks like. Everything else in the course is a way of doing those three well.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "The strong example asks for a 150-word explainer for a general adult reader, ending on one takeaway. What makes it strong?",
            options: [
              "It uses vocabulary the model encountered often during training",
              "It asks for less work than the weak version of the same prompt",
              "It names a topic narrow enough to have only one right answer",
              "It supplies structure",
            ],
            correctIndex: 3,
            explanation:
              "Audience, length, format and a precise task, all stated. None of the words in it are clever; every one of them removes a guess.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "The editor example ends with \"Don't rewrite them yet.\" What is that instruction doing?",
            options: [
              "Bounding the task",
              "Saving the model effort, so the answer comes back more quickly",
              "Reserving the rewrite for a model better suited to editing work",
              "Signaling that the draft is already close to finished",
            ],
            correctIndex: 0,
            explanation:
              "It names one action, critique, and rules out the other, rewriting. Without it the model does both and you cannot tell which weaknesses it actually found.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "What does the lesson say happens when you change the context you give a model?",
            options: [
              "You reset the conversation the model has been tracking so far",
              "You force the model to reason step by step through the request",
              "You change the answer",
              "You override any role the model was assigned earlier on",
            ],
            correctIndex: 2,
            explanation:
              "The prompt is the context the model reasons from, so context and answer move together. That is why adding a missing piece works and rephrasing usually does not.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "What does Role set, according to this lesson?",
            options: [
              "The subject-matter knowledge the model is allowed to draw on",
              "The voice and the bar",
              "The length and the structure the finished answer will take",
              "The order in which the model works through the request",
            ],
            correctIndex: 1,
            explanation:
              "\"A patient statistics tutor\" and \"a skeptical peer reviewer\" pull different vocabulary, different depth, and a different standard for what counts as good enough.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "Why is Context the piece where accuracy is usually won or lost?",
            options: [
              "It is the only part of a prompt the model reads word for word",
              "Pasted material grounds the answer",
              "It is weighted more heavily than the other pieces of the frame",
              "It decides which of its training sources the model will consult",
            ],
            correctIndex: 1,
            explanation:
              "Pasting the actual article, email or data is far stronger than trusting the model's memory of it, and memory is exactly where facts go wrong.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "What makes a good Task?",
            options: [
              "A list of everything you would like the answer to accomplish",
              "A description of why the work matters to you personally",
              "One clear verb",
              "A restatement of the role in the form of an instruction",
            ],
            correctIndex: 2,
            explanation:
              "Summarize, compare, critique, rewrite, list the risks. One precise verb beats a pile of vague hopes, because the model can only aim at one target at a time.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "Which piece of the frame covers length, structure, and tone?",
            options: [
              "Format",
              "Context, which carries the audience the answer is written for",
              "Role, since the persona you choose decides how the answer reads",
              "Task, since the verb you choose implies how long the answer runs",
            ],
            correctIndex: 0,
            explanation:
              "Format is the shape of the output: five bullets in plain English, or a table with columns Claim, Evidence and Confidence.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "What order does the lesson recommend for the pieces of the frame?",
            options: [
              "Task first, then role, then any material the answer needs",
              "Format first, so that every later piece is written to fit it",
              "Context first, then format, then role, and the task last",
              "Role, context, task, format",
            ],
            correctIndex: 3,
            explanation:
              "Then examples, if the shape is finicky. The order puts the grounding material in front of the instruction that acts on it.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "An answer disappoints you. Where does the lesson say the fix almost always is?",
            options: [
              "A missing piece of the frame",
              "A model too small for the difficulty of what you asked",
              "A prompt long enough that the earliest instructions were lost",
              "An ambiguity in the wording that the right synonym would resolve",
            ],
            correctIndex: 0,
            explanation:
              "Most often the missing piece is context. Diagnosing which piece is absent is a faster path than rewording, and it tells you something you can reuse.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "Do you need all five pieces of the frame in every prompt?",
            options: [
              "Yes, since leaving one out makes the others harder to interpret",
              "No",
              "Yes, because the published guides describe the five as one unit",
              "Only when the answer will be published rather than kept private",
            ],
            correctIndex: 1,
            explanation:
              "The frame is a diagnostic checklist, not a form to fill in. Its value shows up when an answer is wrong and you need to know what to add.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "How does Google's People + AI Guidebook frame the work of prompting?",
            options: [
              "Training a collaborator through repeated rounds of correction",
              "Translating a human goal into the model's own internal language",
              "Constraining a system until only one possible output remains",
              "Designing a handoff",
            ],
            correctIndex: 3,
            explanation:
              "The handoff between the person and the system. The clearer you are about goal, inputs, and the form of a good result, the better the collaboration works.",
            sourceLessonSlug: "role-context-task-format",
          },
          {
            prompt: "\"Make this better\" is typed with nothing pasted in. Which piece of the frame is missing?",
            options: [
              "Format, since no length or structure has been requested",
              "Role, since no voice has been set for the reply",
              "Context",
              "Examples, since no sample of a better version was shown",
            ],
            correctIndex: 2,
            explanation:
              "The model cannot see what \"this\" is. Give it the actual material and the situation rather than relying on its memory of your document.",
            sourceLessonSlug: "practice-the-frame",
          },
          {
            prompt: "You want a reply that sounds like a kind, patient tutor rather than a generic bot. Which piece sets that?",
            options: [
              "Context, by describing the learner the answer is written for",
              "Examples, by showing a passage written in that same manner",
              "Task, by asking the model to teach rather than to summarize",
              "Role",
            ],
            correctIndex: 3,
            explanation:
              "A role such as \"You are a patient tutor\" sets the voice, the depth, and the bar of the answer, all from one clause at the top of the prompt.",
            sourceLessonSlug: "practice-the-frame",
          },
          {
            prompt: "\"Tell me about this report\" is too open. What does the drill say it needs?",
            options: [
              "A precise task",
              "A role, since no expertise has been assigned to the answer",
              "A format, since no length or structure has been requested",
              "A constraint, since nothing limits what may be included",
            ],
            correctIndex: 0,
            explanation:
              "It never names the one action. Summarize it, compare it to last quarter, critique its method: each of those is answerable and \"tell me about\" is not.",
            sourceLessonSlug: "practice-the-frame",
          },
          {
            prompt: "\"Exactly five plain-English bullets, no jargon\" sets which piece of the frame?",
            options: [
              "Task, since it says what the model is being asked to produce",
              "Context, since it describes the reader's tolerance for jargon",
              "Role, since plain English implies a non-expert speaker",
              "Format",
            ],
            correctIndex: 3,
            explanation:
              "Length, structure and tone in one clause. Format is the easiest constraint to add and the one people most often leave out.",
            sourceLessonSlug: "practice-the-frame",
          },
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

:::reveal Give one situation where showing an example beats describing what you want, and one thing an example still can't do for you. ||| It cannot make a claim true: showing a format does not verify facts, so sourcing and verification stay your job.

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

:::reveal What are the two reasons to ask a model to "show its reasoning", and why is visible reasoning still not proof the answer is right? ||| Better answers on multi-step problems, and a visible trail you can audit to find the exact step that went wrong. The steps are also generated text; a tidy, confident chain can reach a wrong answer or not reflect how the model got there.

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

:::reveal Why is "ask for sources" only half the job, and what's the other half that's on you? ||| Models can invent real-looking URLs, DOIs, and case names; the other half is on you: open each source and confirm it says what is claimed.

## Sources
- Anthropic. Prompt engineering overview: let the model say "I don't know"; ask for grounded claims. https://docs.anthropic.com/en/docs/prompt-engineering
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0): "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },

    {
      slug: "quiz-showing-what-good-looks-like",
      title: "Section 2 knowledge check · Showing the model what good looks like",
      section: "Showing the model what good looks like",
      body: `A graded check on few-shot examples, step-by-step reasoning, and the two moves that make an answer checkable: asking for sources and asking the model to critique itself. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is few-shot prompting?",
            options: [
              "Sending several short prompts instead of one long one",
              "Putting example answers in the prompt",
              "Asking the model to generate its own examples before answering",
              "Limiting the model to a few sentences of output at a time",
            ],
            correctIndex: 1,
            explanation:
              "One example is one-shot, a few are few-shot, none is zero-shot. You do not need the jargon to use it, only the instinct behind it.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "What does the lesson call a prompt that carries no examples at all?",
            options: [
              "Cold prompting, since the model has nothing to warm up on",
              "Zero-shot",
              "Direct prompting, since the instruction goes straight to the task",
              "Open prompting, since the output shape is left unconstrained",
            ],
            correctIndex: 1,
            explanation:
              "Most prompting most people do is zero-shot. The point of naming it is to notice that adding one example is a move available to you.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "Why does showing an example work so well?",
            options: [
              "An example is treated as a rule the model is not allowed to break",
              "Examples are stored separately from the rest of the prompt text",
              "The model is a pattern-matcher",
              "The model was trained mostly on question and answer pairs",
            ],
            correctIndex: 2,
            explanation:
              "A clear example is a pattern it can lock onto, often more precisely than a paragraph of instructions describing the same thing.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "When does the lesson say to reach for an example instead of a description?",
            options: [
              "When the topic falls outside the model's training data",
              "When the answer needs to run longer than a few paragraphs",
              "When you have already tried rewording the instruction twice",
              "When the shape is hard to describe",
            ],
            correctIndex: 3,
            explanation:
              "Finicky formats are the clearest case. If you would struggle to write the rule in prose, showing one done correctly is faster and more precise.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "Which job does the lesson name as one examples are good at?",
            options: [
              "Edge-case handling",
              "Making the model's factual claims more reliable overall",
              "Reducing the amount of context a prompt has to carry",
              "Getting the model to admit when it does not know something",
            ],
            correctIndex: 0,
            explanation:
              "Show how you want an unusual input treated, such as writing \"date: unknown\" when a date is missing, and the model handles the rest the same way.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "How does the lesson suggest making \"what counts as urgent\" concrete for a classification task?",
            options: [
              "Define the word urgent in a sentence at the top of the prompt",
              "Ask the model to propose a definition and then confirm it",
              "List every word that should never be classified as urgent",
              "Give labeled examples",
            ],
            correctIndex: 3,
            explanation:
              "Two or three labeled examples make the boundary concrete instead of leaving the model to guess where you would draw it.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "What does the lesson warn that your examples also teach the model?",
            options: [
              "Their mistakes",
              "The order the model should work through the inputs in",
              "The level of confidence the answer should be stated with",
              "The number of items the finished answer should contain",
            ],
            correctIndex: 0,
            explanation:
              "A sloppy or biased example produces sloppy, biased output, because the model is copying the pattern rather than judging it. Pick examples you would be proud of.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "What can a good example still not do for you?",
            options: [
              "Set the tone or the voice the answer is written in",
              "Show the model how an unusual input should be treated",
              "Make a claim true",
              "Fix the shape of an output you struggled to describe",
            ],
            correctIndex: 2,
            explanation:
              "Demonstrating a format is powerful. Demonstrating a claim verifies nothing, so sourcing and verification remain your job either way.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "The lesson turns \"Call the dentist sometime\" into \"Call the dentist, schedule a cleaning, by Friday.\" What is that example for?",
            options: [
              "Showing that short notes must be expanded into full sentences",
              "Showing the output format",
              "Showing that the model should sort the notes by urgency first",
              "Showing that a note without a verb cannot be turned into a task",
            ],
            correctIndex: 1,
            explanation:
              "One input paired with one output done right, so the remaining notes follow the same shape. Describing that shape in prose would take longer and land less precisely.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "What does a sloppy example get you?",
            options: [
              "An error message asking you to supply a cleaner sample",
              "An answer that ignores the example and follows the prose instead",
              "Sloppy output",
              "A model that averages the example against your instructions",
            ],
            correctIndex: 2,
            explanation:
              "The example is the pattern. Nothing in the system inspects it for quality first, which is why the caution is worth stating at all.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "What is chain-of-thought prompting?",
            options: [
              "Breaking one request into a series of separate messages",
              "Asking for the steps before the answer",
              "Having the model answer, then asking it to justify itself",
              "Feeding the model's own answer back in as the next prompt",
            ],
            correctIndex: 1,
            explanation:
              "Work through it step by step, then state the conclusion. The steps come first, which is what stops the model leaping to a plausible ending.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "What did Wei et al. (2022) find about generating intermediate reasoning steps?",
            options: [
              "It makes answers longer without changing how often they are right",
              "It helps with commonsense questions but not with arithmetic ones",
              "It removes the need to verify the conclusion the model reaches",
              "It substantially improves performance",
            ],
            correctIndex: 3,
            explanation:
              "The study measured gains on arithmetic, commonsense and logic tasks. The improvement is real, which is separate from whether any single answer is true.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "Which phrasing does the lesson give for triggering step-by-step reasoning?",
            options: [
              "Answer only if you are completely certain of the result",
              "Think it through step by step",
              "Consider every possible interpretation of my question first",
              "Use the most reliable method available for this kind of problem",
            ],
            correctIndex: 1,
            explanation:
              "Plain language is enough. \"Show your reasoning, then state the conclusion on its own line\" does the same job.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "What is the first payoff of asking a model to reason step by step?",
            options: [
              "The model consults outside references while it works",
              "The answer comes back in a format easier to paste elsewhere",
              "Fewer careless leaps",
              "The model reports how confident it is in each conclusion",
            ],
            correctIndex: 2,
            explanation:
              "Forcing the steps on a multi-step problem stops the model skipping from the question straight to a plausible-looking ending.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "Which of the two payoffs does this course care about most?",
            options: [
              "A checkable trail",
              "The higher accuracy that the 2022 study measured",
              "The gentler pace at which the explanation unfolds",
              "The wider range of problems the model will attempt",
            ],
            correctIndex: 0,
            explanation:
              "Showing the work is what makes an answer inspectable, and inspectable is what makes it trustworthy. The accuracy gain is a bonus on top.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "What can you do with visible reasoning that a bare answer never allows?",
            options: [
              "Confirm the model consulted more than one source",
              "Measure how long the model spent on the problem",
              "Check that the model followed your format instructions",
              "Find the step that went wrong",
            ],
            correctIndex: 3,
            explanation:
              "With a bare answer you can only judge the conclusion. With the steps you can point at the exact line where it broke and fix your prompt there.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "What word does the lesson use for what showing the work makes an answer?",
            options: [
              "Reproducible, meaning the same prompt returns the same result",
              "Attributable, meaning each claim can be traced to a source",
              "Inspectable",
              "Deterministic, meaning the reasoning follows fixed rules",
            ],
            correctIndex: 2,
            explanation:
              "Inspectable, and inspectable is what makes it trustworthy. The trust comes from your ability to look, not from the model's confidence.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "Why is a tidy chain of reasoning still not proof of the conclusion?",
            options: [
              "The steps are generated text too",
              "The model shortens the steps to fit the length you asked for",
              "The model omits any step it judges too technical to explain",
              "The model is not allowed to show more than a few steps at once",
            ],
            correctIndex: 0,
            explanation:
              "The reasoning is predicted reasoning-shaped text. It can be neat, confident, wrong, and it need not reflect how the model actually arrived anywhere.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "For which kind of task does the lesson recommend step-by-step reasoning?",
            options: [
              "Any request where the answer must be verified afterwards",
              "Any question whose answer depends on recent information",
              "Anything with steps",
              "Any task where the output format is difficult to describe",
            ],
            correctIndex: 2,
            explanation:
              "A math or logic problem, a multi-part decision, a compare-these-options question. Where there are no steps there is nothing to make visible.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "Asking for reasoning makes an answer easier to check. What does the lesson say it does not guarantee?",
            options: [
              "That the model will follow the format you requested",
              "That every step will be written in plain language",
              "That the same question will get the same steps twice",
              "That the answer is true",
            ],
            correctIndex: 3,
            explanation:
              "Easier to check is not the same as correct. The reasoning is a tool for you to verify with, never a guarantee that saves you the verifying.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "What does adding \"for each factual claim, name the source you would check\" accomplish?",
            options: [
              "It gives you a list to verify",
              "It restricts the model to claims it can prove are true",
              "It makes the model search the web before it answers",
              "It removes any claim the model cannot attach a source to",
            ],
            correctIndex: 0,
            explanation:
              "It also nudges the model toward claims it can ground. Both effects are useful and neither one confirms anything on its own.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "What does the lesson say a request for sources actually produces?",
            options: [
              "Verified references drawn from a checked bibliography",
              "A confidence estimate attached to each factual statement",
              "Leads",
              "The subset of claims the model is willing to stand behind",
            ],
            correctIndex: 2,
            explanation:
              "The prompt produces leads and you do the confirming. Treating the list as finished work is the exact mistake the habit is meant to prevent.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "What can a model invent that looks completely real?",
            options: [
              "The date on which it last updated its knowledge",
              "URLs, DOIs, and case names",
              "A record of which tool it used to check a claim",
              "A note admitting that a source could not be located",
            ],
            correctIndex: 1,
            explanation:
              "A source you did not open is not a source. The reference is itself a claim, and it is the one people are most likely to accept unchecked.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "Why is asking a model to critique its own work worth doing at all?",
            options: [
              "A second pass gives the model access to more context",
              "Reviewing text costs less computation than writing it",
              "They critique better than they draft",
              "The model compares its answer against its training data",
            ],
            correctIndex: 2,
            explanation:
              "Models are often better at finding a fault in an answer than at producing a flawless one first try, so the review pass is not wasted effort.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "Which of these is a self-check prompt the lesson gives?",
            options: [
              "Explain the answer again using simpler vocabulary",
              "Give me a second answer written from another angle",
              "Tell me which part of my question was most ambiguous",
              "List what could make this wrong",
            ],
            correctIndex: 3,
            explanation:
              "Asked before the answer, it makes the model surface the failure modes first. Rating confidence per claim and naming what to check independently do similar work.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "What does the lesson warn a self-check can also do?",
            options: [
              "Bless a wrong answer",
              "Discard a correct answer that looked uncertain to it",
              "Replace the original answer with a shorter, vaguer one",
              "Report an error rate calculated from its own past output",
            ],
            correctIndex: 0,
            explanation:
              "Asking \"are you sure?\" sometimes fixes a mistake and sometimes produces a confident defense of the same mistake, in the same tone either way.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "How does the lesson describe what self-checking achieves?",
            options: [
              "It removes the need to open the sources yourself",
              "It raises the floor",
              "It turns a draft into something ready to publish",
              "It gives you a reliable measure of the error rate",
            ],
            correctIndex: 1,
            explanation:
              "It catches some mistakes, which is worth having. It does not replace you as the verifier, which is the part no prompt can delegate.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "\"Ask for sources\" is half the job. What is the other half, the half that is on you?",
            options: [
              "Choosing which of them the model should prioritize",
              "Telling the model which sources you already trust",
              "Opening them",
              "Asking the model to rank them by how reliable they are",
            ],
            correctIndex: 2,
            explanation:
              "Open each one and confirm it says what is claimed. Every step that stays inside the conversation is a step the model could have fabricated.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "The stacking pattern asks for the answer, then a separate section with three things. What is the third?",
            options: [
              "A shorter version of the answer for quick reference",
              "The steps the model took to reach its conclusion",
              "A rating of how difficult the question was to answer",
              "What could make this wrong",
            ],
            correctIndex: 3,
            explanation:
              "Sources to check, anything it is unsure about, and what could make the answer wrong. The three together turn one reply into a to-do list for you.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "What other name does the lesson give for asking a model to review its own answer?",
            options: [
              "Self-critique",
              "Back-propagation, borrowed from how the model was trained",
              "Cross-validation, borrowed from statistical model testing",
              "Recursion, since the model is being applied to its own output",
            ],
            correctIndex: 0,
            explanation:
              "Self-critique, or asking it to reflect. The name matters less than remembering it raises the floor rather than removing the need to check.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
        ],
      },
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

:::reveal When an answer is too long and too generic, which two pieces of the frame are probably missing, and what's the one-variable rule for fixing it? ||| A length format and an audience; add those and change only one variable at a time so you know what worked.

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

:::reveal Name three constraints you can add to almost any prompt, and the one "out" you should give the model to cut down on invented answers. ||| Length, audience, and tone (scope and a list of what not to do also help).

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

:::reveal Step-by-step reasoning and a self-check both *look* convincing. Give the one reason neither one proves the answer is true. ||| The reasoning and the self-check are also generated text; fluency is not accuracy, self-checks can rubber-stamp errors, and sources can be fabricated.

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

:::reveal Pick the pattern closest to something you do weekly. Which piece of the frame would you customize first to make it yours? ||| For most weekly tasks the piece to customize first is the Context (paste your real material), and often the Format (the exact shape you want back). Every reusable pattern shares a role, pasted context when accuracy matters, a precise task, an explicit format, and a built-in verify/uncertainty step, making it yours means filling those with your specifics.

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
      // Doubles as Section 3's own quiz and as the course final, which is why it is sized to
      // Section 3's density target (1463 words / 35 = 42) rather than to the final's floor of 40.
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "What gives you the biggest improvement in AI answers?",
            options: [
              "Finding exactly the right set of 'magic words' to unlock it",
              "Giving the prompt clear structure: role, context, task, format",
              "Using a longer and more elaborate vocabulary throughout",
              "Being consistently polite to the model in every single turn",
            ],
            correctIndex: 1,
            explanation: "Structure beats clever wording: state the audience, goal, length, and format so the model isn't guessing.",
            sourceLessonSlug: "what-a-prompt-really-is",
          },
          {
            prompt: "In the role/context/task/format frame, which piece is usually where accuracy is won or lost?",
            options: [
              "Role",
              "Context",
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
              "When you want to make a shaky claim look more true",
              "When a good answer's shape is hard to describe in words",
              "Only when you are asking the model to write code",
              "Never, since examples only confuse the model more",
            ],
            correctIndex: 1,
            explanation: "Demonstrate finicky formats, a specific voice, or edge cases. Examples teach the pattern, but don't verify facts.",
            sourceLessonSlug: "examples-few-shot",
          },
          {
            prompt: "Why ask a model to 'show its reasoning step by step'?",
            options: [
              "It guarantees that the final answer will be correct",
              "It improves multi-step answers and gives you an audit trail",
              "It makes the answer shorter and much easier to read",
              "It hides the model's mistakes from the reader entirely",
            ],
            correctIndex: 1,
            explanation: "Chain-of-thought (Wei et al., 2022) improves stepwise problems and makes the answer inspectable, but isn't proof it's right.",
            sourceLessonSlug: "chain-of-thought",
          },
          {
            prompt: "You ask the AI for sources and it gives you three. What makes them trustworthy?",
            options: [
              "They all have official-looking URLs attached to them",
              "The model sounded very confident when giving them",
              "You opened each one and confirmed it says what's claimed",
              "There are three of them rather than only a single one",
            ],
            correctIndex: 2,
            explanation: "Models can invent real-looking citations. Asking for sources is only half the job, opening and confirming them is on you.",
            sourceLessonSlug: "ask-for-sources-and-self-checks",
          },
          {
            prompt: "An answer comes back too long and too generic. What's the fastest fix?",
            options: [
              "Start over again with a completely different AI tool",
              "Add the missing frame pieces and change one thing at a time",
              "Just tell it to 'make it better' and then run it again",
              "Accept it, because that is simply how AI always writes",
            ],
            correctIndex: 1,
            explanation: "The prompt-debug loop: trace the gap to a missing piece of the frame, change one variable, re-run, and compare.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "Which constraint best reduces made-up facts on an 'answer from this document' task?",
            options: [
              "Ask the model to give a considerably longer full answer",
              "Ask it to sound a great deal more confident about its answer",
              "\"Answer only from the pasted text; say 'not stated' if absent\"",
              "Ask it to add any extra background information it knows",
            ],
            correctIndex: 2,
            explanation: "A grounding constraint plus an explicit 'out' (let it say it doesn't know) sharply cuts invented facts.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "A step-by-step answer that also passed its own self-check, what does that prove?",
            options: [
              "That the final answer is definitely and reliably true",
              "Nothing on its own; both are generated text and can be wrong",
              "That you do not need to verify any of it yourself at all",
              "That the sources it cited must therefore all be real",
            ],
            correctIndex: 1,
            explanation: "Reasoning ≠ truth. Visible reasoning and self-checks make answers easier to inspect, not automatically correct, you still verify.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "Which situation should push your skepticism the HIGHEST?",
            options: [
              "Brainstorming a long list of names for a birthday party",
              "A high-stakes legal, medical or financial claim you will act on",
              "Rewriting a single sentence so that it sounds friendlier",
              "Asking the model for a short piece of fictional writing",
            ],
            correctIndex: 1,
            explanation: "Raise scrutiny on facts, recent events, high-stakes decisions, and anything you want to be true.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "What do the reusable patterns (tutor, decision brief, editor) all share?",
            options: [
              "They are only ever useful to working software developers",
              "A role, context, a precise task, a format, and a verify step",
              "They avoid giving the model any explicit instructions",
              "They all rely on secret magic words in order to work",
            ],
            correctIndex: 1,
            explanation: "Every good pattern is the whole course compressed: frame + examples/reasoning + constraints + verification.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "What is step one of the prompt-debug loop?",
            options: [
              "Rewrite the prompt from the beginning with more detail",
              "Name the gap specifically",
              "Ask the model what it thought you were asking for",
              "Run the same prompt again to see whether the answer varies",
            ],
            correctIndex: 1,
            explanation:
              "Too long, wrong audience, missed the point, made a claim you cannot verify. Naming which one is what lets step two find the missing piece.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "An answer comes back with a made-up fact. Which missing piece of the frame does the loop trace that to?",
            options: [
              "A fuzzy task, since the model was never told what to produce",
              "A missing format, since no evidence structure was requested",
              "The wrong role, since no expert persona had been assigned",
              "Missing context",
            ],
            correctIndex: 3,
            explanation:
              "With nothing pasted in to ground the answer, the model fills the gap from memory. Off-topic traces to the task, wrong tone to the role, too long to the format.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "Why does the loop insist on changing only one thing at a time?",
            options: [
              "So you learn what worked",
              "Because each extra instruction weakens the ones before it",
              "Because a prompt has a limit on how much it can carry",
              "Because the model applies changes in the order they appear",
            ],
            correctIndex: 0,
            explanation:
              "Change three things and an improvement tells you nothing reusable. Change one and you have learned something you can apply to the next prompt.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "What does the lesson offer as feedback that beats \"make it better\"?",
            options: [
              "A rating out of ten with a note on what lost the points",
              "An example of a better answer written by somebody else",
              "Cut it to 120 words",
              "A request to try again with a different approach entirely",
            ],
            correctIndex: 2,
            explanation:
              "Specific feedback is itself a prompt. \"Cut it to 120 words and remove the jargon\" names the change, so the model has something to aim at.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "\"This intro is perfect, keep it. Rewrite only the second paragraph.\" What does the lesson call that?",
            options: [
              "Freezing, since the good text is locked against further changes",
              "Keep the good, fix the rest",
              "Layering, since each pass builds on the one before it",
              "Anchoring, since the strong section sets the standard",
            ],
            correctIndex: 1,
            explanation:
              "You are steering rather than regenerating from scratch, which protects the parts that already worked from being rewritten into something worse.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "How do the OpenAI and Anthropic guides describe prompting itself?",
            options: [
              "A design skill best learned from published templates",
              "A precise craft in which the first attempt should be the best",
              "Iterative and empirical",
              "A matter of matching the prompt's style to the model in use",
            ],
            correctIndex: 2,
            explanation:
              "You test, observe and refine against what a good result actually looks like. Needing several passes is not a sign you are bad at it: iteration is the skill.",
            sourceLessonSlug: "iterate-the-prompt-debug-loop",
          },
          {
            prompt: "What do models tend to do when you give no length limit?",
            options: [
              "Over-explain",
              "Return the shortest answer that satisfies the question",
              "Match the length of whatever you pasted in as context",
              "Stop at the first natural break in the explanation",
            ],
            correctIndex: 0,
            explanation:
              "In 100 words, exactly 3 bullets, one sentence. A limit is the cheapest constraint to add and the one most often left out.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "What does an audience constraint control?",
            options: [
              "The order in which the points are presented",
              "How many sources the finished answer will name",
              "Vocabulary and depth",
              "Whether the model shows its reasoning as it goes",
            ],
            correctIndex: 2,
            explanation:
              "For a 7th-grader, for a busy executive who hates jargon, for someone new to the topic. Each pulls a different register and a different level of detail.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "Why does the lesson call scope a powerful guardrail against invented facts?",
            options: [
              "It reduces the amount of text the model has to produce",
              "It makes the model check each claim before including it",
              "It tells the model which topics it was trained well on",
              "It limits what may be used",
            ],
            correctIndex: 3,
            explanation:
              "Stick to the pasted text, only cover the EU rules, do not include code. Narrowing the permitted material narrows the room for invention.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "What is the \"out\" the lesson says to give a model?",
            options: [
              "A shorter answer option for when it runs low on material",
              "Permission to say it does not know",
              "A chance to ask you a clarifying question first",
              "A way to flag the question as outside its training",
            ],
            correctIndex: 1,
            explanation:
              "Explicitly permitting \"I don't know\" and forbidding invention cuts confident nonsense, because a model forced to answer has to fabricate something.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "What does the grounding constraint tell a model to write when the pasted text does not say?",
            options: [
              "A best estimate, clearly labeled as an inference",
              "The closest related fact the document does contain",
              "Not stated in the source",
              "A note asking you to supply the missing material",
            ],
            correctIndex: 2,
            explanation:
              "Answer only from the pasted text, and do not add outside facts. The phrase gives the model somewhere to put an absence instead of filling it.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "Which is an example of the \"what not to do\" kind of constraint?",
            options: [
              "Keep the answer under one hundred words in total",
              "Write it for a reader who is new to the topic",
              "Present the options as a table with three columns",
              "Do not invent statistics",
            ],
            correctIndex: 3,
            explanation:
              "Alongside \"do not recommend a specific product\" and \"if you are unsure, say so instead of guessing.\" These are guardrails rather than shaping instructions.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "What does the lesson claim the grounding constraint does and does not achieve?",
            options: [
              "It cuts invention but is not perfect",
              "It eliminates invented facts whenever the source is complete",
              "It works on documents but not on pasted email threads",
              "It replaces the need to check the answer against the source",
            ],
            correctIndex: 0,
            explanation:
              "It sharply reduces the made-up-facts problem and keeps you in the driver's seat on what counts as evidence. It is a guardrail, not a guarantee.",
            sourceLessonSlug: "constraints-and-guardrails",
          },
          {
            prompt: "What does \"advanced\" mean in the lesson on when not to trust an answer?",
            options: [
              "More willing to trust a model that has shown its work",
              "More able to judge an answer without having to check it",
              "More skeptical",
              "More reliant on the techniques taught earlier in the course",
            ],
            correctIndex: 2,
            explanation:
              "Examples, reasoning, self-checks and sources-on-request all make answers better and easier to inspect. Not one of them makes an answer automatically true.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "What does the lesson say a confident tone is evidence of?",
            options: [
              "A claim the model found repeated across many sources",
              "Nothing",
              "A subject the model happened to be trained on thoroughly",
              "An answer the model would produce the same way twice",
            ],
            correctIndex: 1,
            explanation:
              "Models optimize for plausible-sounding output, so confidence is the house style rather than a signal. Fluency is not accuracy.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "Which situation does the lesson flag because of your own bias rather than the model's?",
            options: [
              "A subject you have studied enough to spot an error",
              "A claim that contradicts what you expected to find",
              "A topic on which you hold no prior opinion at all",
              "Something you want to be true",
            ],
            correctIndex: 3,
            explanation:
              "A wrong answer that agrees with you feels right, so it gets less checking exactly when it deserves more. This is the failure mode you cannot outsource.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "Why does the lesson single out anything recent or fast-changing?",
            options: [
              "The knowledge has a cutoff",
              "Recent events are described in fewer words than older ones",
              "Newer sources are less likely to have been peer reviewed",
              "The model weights recent text lower than established text",
            ],
            correctIndex: 0,
            explanation:
              "The model's training stops at a date, and it will answer about events past that date in the same confident register as anything else.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "Which trustworthiness property does the lesson cite from the NIST AI Risk Management Framework?",
            options: [
              "Explainable and interpretable, since reasoning can be shown",
              "Secure and resilient, since a prompt can be manipulated",
              "Fair with harmful bias managed, since the data carries bias",
              "Valid and reliable",
            ],
            correctIndex: 3,
            explanation:
              "It is named as a core property precisely because plausible output is a guarantee of neither. The framework treats validity as something to be demonstrated.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "What does the lesson say can happen when you ask a model \"are you sure?\"",
            options: [
              "It reliably surfaces the weakest claim in the answer",
              "It may defend the same mistake",
              "It causes the model to lower its stated confidence",
              "It makes the model restate the answer more carefully",
            ],
            correctIndex: 1,
            explanation:
              "Self-checks sometimes fix an error and sometimes rubber-stamp it, in the same confident tone either way, which is why they raise the floor rather than replace you.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "How does the lesson divide the labor between AI and real sources?",
            options: [
              "AI proposes the claims and sources rank them by strength",
              "AI handles the reasoning and sources supply the numbers",
              "AI drafts, sources confirm",
              "AI writes the first pass and sources are checked only if it fails",
            ],
            correctIndex: 2,
            explanation:
              "Use AI to draft, reason and explain. Use real sources to confirm. You remain the editor, the fact-checker, and the one accountable for the result.",
            sourceLessonSlug: "when-not-to-trust",
          },
          {
            prompt: "What does the tutor pattern ask for on top of the explanation?",
            options: [
              "An analogy, a misconception, a question",
              "A reading list with a short summary of each item on it",
              "A second explanation written for a more advanced reader",
              "A breakdown of which parts of the topic are hardest",
            ],
            correctIndex: 0,
            explanation:
              "One everyday analogy, one common misconception, and one quick question to check understanding, plus a note on anything genuinely uncertain or debated.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "What does the Socratic pattern tell the model to do between questions?",
            options: [
              "Score the previous answer against a rubric it proposes",
              "Adjust the difficulty based on how the last one went",
              "Summarize what has been covered before moving on",
              "Wait for your answer",
            ],
            correctIndex: 3,
            explanation:
              "One question at a time, then feedback, then what you would check to confirm it. Waiting is what makes it practice rather than a wall of text.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "What does the decision-brief pattern ask for after the recommendation?",
            options: [
              "What to verify independently",
              "A ranked list of the options that were not chosen",
              "An estimate of how long the decision ought to take",
              "A summary of the material that was pasted in",
            ],
            correctIndex: 0,
            explanation:
              "Along with a flag on anything it is unsure about. The verify step is what stops a well-argued brief being mistaken for a checked one.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "In the turn-mess-into-structure pattern, what happens to a field the notes never mention?",
            options: [
              "It is filled with the most likely value from the context",
              "It is written as unknown",
              "It is left blank, so the gap is visible at a glance",
              "It is moved to a separate list of open questions",
            ],
            correctIndex: 1,
            explanation:
              "Use only what is in the notes. An explicit \"unknown\" is a grounding constraint doing its job inside a formatting pattern.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "What does the editor pattern explicitly forbid on the first pass?",
            options: [
              "Commenting on anything beyond the three weakest spots",
              "Considering the audience the draft was written for",
              "Rewriting",
              "Suggesting fixes before the weaknesses are explained",
            ],
            correctIndex: 2,
            explanation:
              "Point out the three weakest spots and say why each is weak, then suggest a fix. Holding off the rewrite is what makes the diagnosis visible.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "What does every one of the reusable patterns include?",
            options: [
              "A worked example showing the model the exact output shape",
              "An instruction to reason step by step before concluding",
              "A word limit that keeps the answer short enough to check",
              "A built-in verify step",
            ],
            correctIndex: 3,
            explanation:
              "Alongside a role, pasted context where accuracy matters, a precise task, and an explicit format. The patterns are this course compressed into templates.",
            sourceLessonSlug: "prompt-patterns-learn-work-write",
          },
          {
            prompt: "The drill: the output format is hard to describe, so you paste one done-right example. What is that?",
            options: [
              "Few-shot prompting",
              "Grounding, since the example anchors what the model may use",
              "Templating, since the example acts as a form to be filled",
              "Calibration, since the example sets the expected standard",
            ],
            correctIndex: 0,
            explanation:
              "Showing one or a few examples beats describing the format in prose, because the model locks onto the pattern more precisely than onto the description.",
            sourceLessonSlug: "practice-patterns",
          },
          {
            prompt: "The drill: you ask a model to work through a multi-step problem step by step. What is that?",
            options: [
              "Decomposition, since the problem is split into parts",
              "Chain-of-thought",
              "Deliberation, since the model weighs before it decides",
              "Sequencing, since the steps are produced in order",
            ],
            correctIndex: 1,
            explanation:
              "Wei et al. (2022). It improves multi-step answers and, more usefully here, makes them checkable line by line.",
            sourceLessonSlug: "practice-patterns",
          },
          {
            prompt: "The drill: a first answer is too long and too generic, so you add a length limit and an audience. What are you tightening?",
            options: [
              "The role, since an audience implies who is speaking",
              "The task, since a shorter answer is a different job",
              "The context, since the audience is part of the situation",
              "The format",
            ],
            correctIndex: 3,
            explanation:
              "Length and audience are format constraints, and they are the easiest fix people forget when an answer sprawls.",
            sourceLessonSlug: "practice-patterns",
          },
          {
            prompt: "The drill asks what a use-this-document answer should say when the text does not cover it. What is the phrase?",
            options: [
              "A flagged inference drawn from the surrounding text",
              "The words outside the source, to mark the claim as added",
              "Not stated",
              "A question back to you asking for the missing detail",
            ],
            correctIndex: 2,
            explanation:
              "A grounding constraint with an explicit out sharply reduces invented facts, because the model has somewhere to put an absence.",
            sourceLessonSlug: "practice-patterns",
          },
          {
            prompt: "The drill: treating the first answer as a draft and changing one variable at a time is the prompt-what loop?",
            options: [
              "Revision, borrowed from how editors work through a draft",
              "Feedback, since each pass responds to the one before it",
              "Convergence, since the answers narrow toward the target",
              "Debug",
            ],
            correctIndex: 3,
            explanation:
              "Read the gap, trace it to the frame, change one thing, re-run and compare. Iteration is the skill rather than a sign of failure.",
            sourceLessonSlug: "practice-patterns",
          },
          {
            prompt: "The drill: a step-by-step answer with cited-looking sources may still be false, because the reasoning and the citations are also what?",
            options: [
              "Drawn from the least reliable part of the training data",
              "Produced faster than the rest of the answer is",
              "Generated text",
              "Written to match the confidence you showed in the prompt",
            ],
            correctIndex: 2,
            explanation:
              "All of it is predicted text, the reasoning included. Open the sources and verify them yourself, which is the one step no prompt performs for you.",
            sourceLessonSlug: "practice-patterns",
          },
        ],
      },
    },
  ],
};
