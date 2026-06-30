// Authored "AI Literacy: Use It Well & Wisely" — F1, the flagship AI foundation on
// Learn.WitUS. Carries the platform's trust DNA: use AI to learn/work faster, but
// verify the output, spot fakes, and use it ethically. Cited (NIST AI RMF; the
// transformer paper; C2PA; CISA deepfake guidance; NIST Privacy Framework). Exercises
// + a quiz whose every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_LITERACY_COURSE: AuthoredCourse = {
  title: "AI Literacy: Use It Well & Wisely",
  description:
    "Get more out of AI without being fooled by it. Learn what tools like ChatGPT and Claude actually do, how to prompt them well, how to verify what they tell you, how to spot deepfakes and synthetic media, and how to use AI ethically and privately. Practical, cited, and non-hype — the trust foundation for everything else.",
  lessons: [
    {
      slug: "how-ai-works",
      title: "1 · What AI really is (and isn't)",
      body: `Today's popular AI — chat assistants like ChatGPT, Claude, and Gemini — are **large language models (LLMs)**. At their core they **predict the next most-likely chunk of text** based on patterns learned from huge amounts of writing. They are extraordinary pattern-matchers, not knowers of truth.

That one fact explains almost everything you need to be careful about:

- They sound **fluent and confident even when they are wrong** — fluency is what they optimize for, not accuracy.
- They are strong at **drafting, summarizing, rephrasing, brainstorming, translating, and explaining**.
- They are weak at **exact facts, fresh/current events, math, counting, and anything needing a verified source** — unless connected to tools that look things up.

Modern LLMs are built on the **transformer** architecture (Vaswani et al., 2017). They don't "look things up" in a database by default; they generate the most plausible-sounding answer. Plausible is not the same as correct.

**Mindset for this course:** AI is a powerful **assistant**, not an oracle. You stay the editor, the fact-checker, and the person responsible for the result.

**Check yourself.** In one sentence, what is an LLM actually doing when it answers you?

## Sources
- Vaswani, A., et al. (2017). Attention is all you need. arXiv:1706.03762. https://arxiv.org/abs/1706.03762
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "prompting",
      title: "2 · Prompting well",
      body: `A vague prompt gets a vague answer. The fix is to give the model what a smart human helper would need. A reliable recipe:

- **Role** — who it should act as ("You are a patient biology tutor").
- **Task** — exactly what you want ("Explain photosynthesis to a 7th grader").
- **Context** — the situation, audience, and any source text to use.
- **Format** — length, structure, tone ("5 bullet points, plain English").
- **Examples** — show one good answer when the format matters.

Then **iterate**: treat the first answer as a draft. Ask it to be shorter, cite its claims, try a different angle, or fix what's off. Good prompting is a conversation, not a one-shot.

Two habits that save you:

- **Ask for its reasoning or sources** so you can check them.
- **Give it the material** (paste the article/data) instead of trusting its memory, when accuracy matters.

**Check yourself.** Name three of the five things a strong prompt usually includes.

## Sources
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "practice-prompting",
      title: "3 · Practice: fix the weak prompt",
      exercise: {
        instructions:
          "Each item names what a weak prompt is missing from the Role / Task / Context / Format / Examples recipe. Type the missing piece. Spelling is forgiving.",
        items: [
          { prompt: "\"Write about dogs.\" — it never says how long or in what shape. What's missing? (one word)", answer: "format", explanation: "Specify length, structure, and tone — e.g. '5 short bullets'." },
          { prompt: "\"Explain this.\" with nothing pasted — the model can't see what 'this' is. What's missing?", answer: "context", accept: ["the context", "source"], explanation: "Give it the material/situation; don't rely on its memory." },
          { prompt: "To make it answer like a kind coach instead of a generic bot, set its ___.", answer: "role", explanation: "A role ('You are a patient coach') shapes voice and depth." },
          { prompt: "Treat the first answer as a draft and ask for changes — this habit is called ___.", answer: "iterating", accept: ["iteration", "iterate"], explanation: "Good prompting is a conversation, not one shot." },
          { prompt: "To check whether a claim is true, ask the model to show its ___.", answer: "sources", accept: ["source", "reasoning"], explanation: "Then verify those sources yourself — see the next lesson." },
        ],
      },
    },
    {
      slug: "verify",
      title: "4 · Verify the output (hallucinations)",
      body: `When an AI states something false as if it were true, that's called a **hallucination** — and it happens often, because the model is generating plausible text, not checking facts. Hallucinations are dangerous precisely because they are **confident and well-written**.

Build a verify habit:

- **Treat every fact, quote, statistic, name, and citation as unconfirmed** until you check it.
- **Ask for sources — then open them.** Models can invent real-looking citations (fake DOIs, fake URLs, fake court cases). A source you didn't open is not a source.
- **Cross-check** important claims against a primary or reputable source.
- **Be extra skeptical** of recent events, numbers, legal/medical/financial advice, and anything you'd act on.

This is the heart of Learn.WitUS: every claim ties to a source you can verify. Use AI to **draft and explain**, and use real sources to **confirm**. "Trust, but verify" becomes "draft with AI, verify with sources."

**Check yourself.** Why is a hallucination more dangerous than an obvious error?

## Sources
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0) — see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "spot-fakes",
      title: "5 · Spotting deepfakes and synthetic media",
      body: `AI can now generate realistic **images, video, and voice**. "Deepfakes" can put words in someone's mouth or fabricate events. Treat surprising media as **unverified until confirmed**.

Practical defenses:

- **Consider the source and motive.** Who posted it, and what do they want you to feel or do? Strong emotional content spreads before it's checked.
- **Look for tells** — odd hands/teeth/ears, warped text or backgrounds, mismatched lighting, unnatural blinking or lip-sync. (Tells fade as tech improves, so don't rely on them alone.)
- **Check provenance.** **Content Credentials (C2PA)** attach a tamper-evident history to media — who made it and whether AI was involved. Look for that "CR" / Content Credentials marker.
- **Trace it.** Reverse-image-search; find the original; see if reputable outlets report it.
- **Slow down.** The single most effective habit is to **not share until you've confirmed**.

Government agencies now warn that synthetic media is a real threat for fraud and disinformation (CISA et al., 2023). Healthy skepticism is a skill, not cynicism.

**Check yourself.** Name two ways to check whether a shocking video is real.

## Sources
- Coalition for Content Provenance and Authenticity (C2PA). Content Credentials specification. https://c2pa.org
- CISA, NSA, FBI. (2023). Contextualizing Deepfake Threats to Organizations. https://www.cisa.gov/resources-tools/resources/contextualizing-deepfake-threats-organizations`,
    },
    {
      slug: "practice-spot-fakes",
      title: "6 · Practice: spot the red flags",
      exercise: {
        instructions: "Short answers about verifying AI output and media. Type your answer, then check.",
        items: [
          { prompt: "When an AI states something false with total confidence, that's called a ___.", answer: "hallucination", explanation: "Plausible-sounding but untrue — always verify." },
          { prompt: "A citation the model gives but you never opened counts as ___ proof. (zero / strong)", answer: "zero", accept: ["no", "none"], explanation: "Models invent real-looking sources; open and confirm them." },
          { prompt: "Tamper-evident media history showing who made an image and if AI was used: Content ___.", answer: "Credentials", explanation: "C2PA Content Credentials — provenance you can inspect." },
          { prompt: "Best single habit before resharing a shocking clip: do not ___ until confirmed.", answer: "share", accept: ["post", "repost"], explanation: "Slowing down stops most misinformation." },
          { prompt: "To find where an image really came from, do a reverse ___ search.", answer: "image", explanation: "Trace it to the original and check reputable coverage." },
        ],
      },
    },
    {
      slug: "ethics-bias",
      title: "7 · Bias, ethics, and honesty",
      body: `Because models learn from human-made data, they can **absorb and repeat bias** — stereotypes, skewed assumptions, gaps for less-represented groups (NIST, 2023). Treat AI output as a draft from a flawed assistant, not a neutral authority.

Use it honestly:

- **Disclose** AI help when it matters (school, work, journalism) per the rules you're under. Passing AI work off as fully your own can be plagiarism or academic dishonesty.
- **Don't use it to deceive or harm** — no fake reviews, fake people, impersonation, harassment, or cheating.
- **Keep humans accountable.** You are responsible for what you publish or act on, even if AI wrote it.
- **Watch for bias** in hiring, grading, lending, or any decision about people; AI should support human judgment, not replace it.

The goal isn't fear — it's **responsible leverage**: get the speed of AI while keeping your integrity.

**Check yourself.** Why can an AI's answer be biased even when it sounds neutral?

## Sources
- National Institute of Standards and Technology. (2023). AI RMF 1.0 — "Fair – with Harmful Bias Managed." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "privacy-and-using-well",
      title: "8 · Privacy, security, and putting it together",
      body: `**Privacy first.** Assume anything you type into a public AI tool **may be stored and used to improve the model** unless the settings say otherwise. So:

- **Never paste secrets** — passwords, financial/health records, other people's personal data, confidential work files.
- **Strip identifying details** when you can; ask in the abstract.
- **Check the tool's data settings** (history off, "don't train on my data") and your workplace/school policy (NIST Privacy Framework).

**Putting it all together — a healthy workflow:**

1. **Draft with AI** — outlines, explanations, first passes, code, brainstorms.
2. **Verify with sources** — confirm every fact, quote, and citation that matters.
3. **Spot fakes** — pause on surprising media; check provenance and origin.
4. **Stay private and ethical** — share no secrets, disclose AI help, keep human judgment in charge.

Do that and AI makes you faster *and* harder to fool. That's the whole point: **use it well, and use it wisely.**

**Check yourself.** Name one thing you should never paste into a public AI tool, and the two-step "draft / ___" habit.

## Sources
- National Institute of Standards and Technology. (2020). NIST Privacy Framework 1.0. https://www.nist.gov/privacy-framework
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "ai-literacy-quiz",
      title: "9 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "At its core, what is a large language model (LLM) doing when it answers?",
            options: [
              "Looking the answer up in a verified database",
              "Predicting the most likely next chunk of text from patterns",
              "Reasoning like a human expert",
              "Searching the live web every time",
            ],
            correctIndex: 1,
            explanation: "LLMs predict plausible text from learned patterns — fluent, but not fact-checked.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "When an AI confidently states something false, it's called a…",
            options: ["Glitch", "Hallucination", "Bug", "Syntax error"],
            correctIndex: 1,
            explanation: "A hallucination — dangerous because it's confident and well-written. Verify everything.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "An AI gives you a citation. What makes it trustworthy?",
            options: [
              "It looks official",
              "It has a DOI",
              "You opened it and confirmed it says what's claimed",
              "The AI sounded sure",
            ],
            correctIndex: 2,
            explanation: "Models invent real-looking sources. A source you didn't open is not proof.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "Which best helps you check whether a shocking video is real?",
            options: [
              "It has lots of views",
              "Check provenance (Content Credentials) and trace it to the original",
              "It made you feel strongly",
              "A friend shared it",
            ],
            correctIndex: 1,
            explanation: "Check C2PA Content Credentials, reverse-search, and reputable coverage before believing or sharing.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "Why can an AI answer be biased even when it sounds neutral?",
            options: [
              "It has opinions",
              "It learned from human-made data that contains bias",
              "It prefers certain users",
              "It is broken",
            ],
            correctIndex: 1,
            explanation: "Models absorb bias from their training data; keep human judgment in charge of decisions about people.",
            sourceLessonSlug: "ethics-bias",
          },
          {
            prompt: "Which should you NOT paste into a public AI tool?",
            options: [
              "A made-up example",
              "A passage from a public article",
              "Passwords or someone's personal data",
              "A general question",
            ],
            correctIndex: 2,
            explanation: "Assume inputs may be stored or used for training — never share secrets or others' personal data.",
            sourceLessonSlug: "privacy-and-using-well",
          },
        ],
      },
    },
  ],
};
