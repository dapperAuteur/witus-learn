// Authored "AI Literacy: Use It Well & Wisely", F1, the flagship AI foundation on
// Learn.WitUS. Carries the platform's trust DNA: use AI to learn/work faster, but
// verify the output, spot fakes, and use it ethically. Cited (NIST AI RMF; the
// transformer paper; C2PA; CISA deepfake guidance; NIST Privacy Framework). Exercises
// + a quiz whose every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_LITERACY_COURSE: AuthoredCourse = {
  title: "AI Literacy: Use It Well & Wisely",
  description:
    "Get more out of AI without being fooled by it. Learn what tools like ChatGPT and Claude actually do, how to prompt them well, how to verify what they tell you, how to spot deepfakes and synthetic media, and how to use AI ethically and privately. Practical, cited, and non-hype: the trust foundation for everything else.",
  lessons: [
    {
      slug: "how-ai-works",
      title: "1 · What AI really is (and isn't)",
      body: `Today's popular AI (chat assistants like ChatGPT, Claude, and Gemini) are **large language models (LLMs)**. At their core they **predict the next most-likely chunk of text** based on patterns learned from huge amounts of writing. They are extraordinary pattern-matchers, not knowers of truth.

That one fact explains almost everything you need to be careful about:

- They sound **fluent and confident even when they are wrong**: fluency is what they optimize for, not accuracy.
- They are strong at **drafting, summarizing, rephrasing, brainstorming, translating, and explaining**.
- They are weak at **exact facts, fresh/current events, math, counting, and anything needing a verified source**, unless connected to tools that look things up.

Modern LLMs are built on the **transformer** architecture (Vaswani et al., 2017). They don't "look things up" in a database by default; they generate the most plausible-sounding answer. Plausible is not the same as correct.

**Mindset for this course:** AI is a powerful **assistant**, not an oracle. You stay the editor, the fact-checker, and the person responsible for the result.

:::reveal In one sentence, what is an LLM actually doing when it answers you? ||| Predicting the next most likely chunk of text from patterns it learned, not looking up verified facts.

## Sources
- Vaswani, A., et al. (2017). Attention is all you need. arXiv:1706.03762. https://arxiv.org/abs/1706.03762
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "prompting",
      title: "2 · Prompting well",
      recallContent: [
        { prompt: "What is an LLM fundamentally doing when it answers you?", answer: "Predicting the next most likely chunk of text from patterns it learned, not looking up verified facts." },
        { prompt: "Why can an AI sound convincing yet still be wrong?", answer: "It optimizes for fluency, not accuracy, so confident wording does not mean the content is correct." },
      ],
      body: `A vague prompt gets a vague answer. The fix is to give the model what a smart human helper would need. A reliable recipe:

- **Role**: who it should act as ("You are a patient biology tutor").
- **Task**: exactly what you want ("Explain photosynthesis to a 7th grader").
- **Context**: the situation, audience, and any source text to use.
- **Format**: length, structure, tone ("5 bullet points, plain English").
- **Examples**: show one good answer when the format matters.

Then **iterate**: treat the first answer as a draft. Ask it to be shorter, cite its claims, try a different angle, or fix what's off. Good prompting is a conversation, not a one-shot.

Two habits that save you:

- **Ask for its reasoning or sources** so you can check them.
- **Give it the material** (paste the article/data) instead of trusting its memory, when accuracy matters.

:::reveal Name three of the five things a strong prompt usually includes. ||| Any three of: Role (who the AI should act as), Task (exactly what you want), Context (the situation, audience, and any source text), Format (length, structure, tone), and Examples (a sample answer when the format matters).

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
          { prompt: "\"Write about dogs.\" It never says how long or in what shape. What's missing? (one word)", answer: "format", explanation: "Specify length, structure, and tone (e.g. '5 short bullets')." },
          { prompt: "\"Explain this.\" with nothing pasted, the model can't see what 'this' is. What's missing?", answer: "context", accept: ["the context", "source"], explanation: "Give it the material/situation; don't rely on its memory." },
          { prompt: "To make it answer like a kind coach instead of a generic bot, set its ___.", answer: "role", explanation: "A role ('You are a patient coach') shapes voice and depth." },
          { prompt: "Treat the first answer as a draft and ask for changes. This habit is called ___.", answer: "iterating", accept: ["iteration", "iterate"], explanation: "Good prompting is a conversation, not one shot." },
          { prompt: "To check whether a claim is true, ask the model to show its ___.", answer: "sources", accept: ["source", "reasoning"], explanation: "Then verify those sources yourself (see the next lesson)." },
        ],
      },
    },
    {
      slug: "verify",
      title: "4 · Verify the output (hallucinations)",
      recallContent: [
        { prompt: "Name three of the five parts of a strong prompt.", answer: "Any three of: role, task, context, format, examples." },
        { prompt: "Why treat the model's first answer as a draft?", answer: "Good prompting is a conversation, so you iterate, asking it to shorten, cite claims, or fix what is off." },
      ],
      body: `When an AI states something false as if it were true, that's called a **hallucination**, and it happens often, because the model is generating plausible text, not checking facts. Hallucinations are dangerous precisely because they are **confident and well-written**.

Build a verify habit:

- **Treat every fact, quote, statistic, name, and citation as unconfirmed** until you check it.
- **Ask for sources, then open them.** Models can invent real-looking citations (fake DOIs, fake URLs, fake court cases). A source you didn't open is not a source.
- **Cross-check** important claims against a primary or reputable source.
- **Be extra skeptical** of recent events, numbers, legal/medical/financial advice, and anything you'd act on.

This is the heart of Learn.WitUS: every claim ties to a source you can verify. Use AI to **draft and explain**, and use real sources to **confirm**. "Trust, but verify" becomes "draft with AI, verify with sources."

:::reveal Why is a hallucination more dangerous than an obvious error? ||| Because a hallucination is confident and fluent, so it looks right. An obvious error you catch immediately; a plausible, well-worded false claim slips past you and gets trusted and shared.

## Sources
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0), see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "spot-fakes",
      title: "5 · Spotting deepfakes and synthetic media",
      recallContent: [
        { prompt: "What is a hallucination in AI output?", answer: "When the model states something false as if it were true, because it generates plausible text rather than checking facts." },
        { prompt: "Why is an AI citation you never opened worthless as proof?", answer: "Models can invent real-looking citations with fake DOIs or URLs, so a source you did not open is not a source." },
      ],
      body: `AI can now generate realistic **images, video, and voice**. "Deepfakes" can put words in someone's mouth or fabricate events. Treat surprising media as **unverified until confirmed**.

Practical defenses:

- **Consider the source and motive.** Who posted it, and what do they want you to feel or do? Strong emotional content spreads before it's checked.
- **Look for tells**: odd hands/teeth/ears, warped text or backgrounds, mismatched lighting, unnatural blinking or lip-sync. (Tells fade as tech improves, so don't rely on them alone.)
- **Check provenance.** **Content Credentials (C2PA)** attach a tamper-evident history to media: who made it and whether AI was involved. Look for that "CR" / Content Credentials marker.
- **Trace it.** Reverse-image-search; find the original; see if reputable outlets report it.
- **Slow down.** The single most effective habit is to **not share until you've confirmed**.

Government agencies now warn that synthetic media is a real threat for fraud and disinformation (CISA et al., 2023). Healthy skepticism is a skill, not cynicism.

:::reveal Name two ways to check whether a shocking video is real. ||| Any two: check its provenance and original source (who first posted it, and where); look for the same event covered by independent, credible outlets; and read laterally instead of trusting the clip itself. Be extra skeptical of anything designed to shock or enrage you.

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
          { prompt: "When an AI states something false with total confidence, that's called a ___.", answer: "hallucination", explanation: "Plausible-sounding but untrue. Always verify." },
          { prompt: "A citation the model gives but you never opened counts as ___ proof. (zero / strong)", answer: "zero", accept: ["no", "none"], explanation: "Models invent real-looking sources; open and confirm them." },
          { prompt: "Tamper-evident media history showing who made an image and if AI was used: Content ___.", answer: "Credentials", explanation: "C2PA Content Credentials: provenance you can inspect." },
          { prompt: "Best single habit before resharing a shocking clip: do not ___ until confirmed.", answer: "share", accept: ["post", "repost"], explanation: "Slowing down stops most misinformation." },
          { prompt: "To find where an image really came from, do a reverse ___ search.", answer: "image", explanation: "Trace it to the original and check reputable coverage." },
        ],
      },
    },
    {
      slug: "ethics-bias",
      title: "7 · Bias, ethics, and honesty",
      recallContent: [
        { prompt: "What are Content Credentials (C2PA) and why do they help?", answer: "A tamper-evident history attached to media showing who made it and whether AI was involved, so you can check provenance." },
        { prompt: "What is the single most effective habit before sharing shocking media?", answer: "Slow down and do not share until you have confirmed it, for example by reverse image searching for the original." },
      ],
      body: `Because models learn from human-made data, they can **absorb and repeat bias**: stereotypes, skewed assumptions, gaps for less-represented groups (NIST, 2023). Treat AI output as a draft from a flawed assistant, not a neutral authority.

Use it honestly:

- **Disclose** AI help when it matters (school, work, journalism) per the rules you're under. Passing AI work off as fully your own can be plagiarism or academic dishonesty.
- **Don't use it to deceive or harm**: no fake reviews, fake people, impersonation, harassment, or cheating.
- **Keep humans accountable.** You are responsible for what you publish or act on, even if AI wrote it.
- **Watch for bias** in hiring, grading, lending, or any decision about people; AI should support human judgment, not replace it.

The goal isn't fear, it's **responsible use**: get the speed of AI while keeping your integrity.

:::reveal Why can an AI's answer be biased even when it sounds neutral? ||| It learns from human-made data that contains stereotypes and gaps, so it can absorb and repeat that bias.

## Sources
- National Institute of Standards and Technology. (2023). AI RMF 1.0, "Fair: with Harmful Bias Managed." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "privacy-and-using-well",
      title: "8 · Privacy, security, and putting it together",
      recallContent: [
        { prompt: "Why can an AI's answer carry bias even when it sounds neutral?", answer: "It learns from human-made data that contains stereotypes and gaps, so it can absorb and repeat that bias." },
        { prompt: "Who is accountable for AI-assisted work you publish or act on?", answer: "You are, so disclose AI help when it matters and keep human judgment in charge, especially for decisions about people." },
      ],
      body: `**Privacy first.** Assume anything you type into a public AI tool **may be stored and used to improve the model** unless the settings say otherwise. So:

- **Never paste secrets**: passwords, financial/health records, other people's personal data, confidential work files.
- **Strip identifying details** when you can; ask in the abstract.
- **Check the tool's data settings** (history off, "don't train on my data") and your workplace/school policy (NIST Privacy Framework).

**Putting it all together, a healthy workflow:**

1. **Draft with AI**: outlines, explanations, first passes, code, brainstorms.
2. **Verify with sources**: confirm every fact, quote, and citation that matters.
3. **Spot fakes**: pause on surprising media; check provenance and origin.
4. **Stay private and ethical**: share no secrets, disclose AI help, keep human judgment in charge.

Do that and AI makes you faster *and* harder to fool. That's the whole point: **use it well, and use it wisely.**

:::reveal Name one thing you should never paste into a public AI tool, and the two-step "draft / ___" habit. ||| Never paste secrets: passwords, financial or health records, other people's personal data, or confidential work files. The habit is "draft with AI, then verify with sources", confirm every fact, quote, and citation that matters.

## Sources
- National Institute of Standards and Technology. (2020). NIST Privacy Framework 1.0. https://www.nist.gov/privacy-framework
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "ai-literacy-quiz",
      title: "9 · Check your understanding",
      // This course has NO sections: eight short lessons that build one continuous argument, so a
      // single final is the right shape and splitting it into section quizzes would invent seams
      // the content does not have. Sized at density (1330 words / 35 = 38), rounded to 40.
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
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
            explanation: "LLMs predict plausible text from learned patterns: fluent, but not fact-checked.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "When an AI confidently states something false, it's called a…",
            options: ["Glitch", "Hallucination", "Bug", "Syntax error"],
            correctIndex: 1,
            explanation: "A hallucination: dangerous because it's confident and well-written. Verify everything.",
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
            explanation: "Assume inputs may be stored or used for training. Never share secrets or others' personal data.",
            sourceLessonSlug: "privacy-and-using-well",
          },
          {
            prompt: "Which task is an LLM strongest at, according to this course?",
            options: [
              "Counting the exact number of items in a long list",
              "Rephrasing a draft",
              "Reporting what happened in the news earlier this week",
              "Confirming a statistic against a verified source",
            ],
            correctIndex: 1,
            explanation:
              "Drafting, summarizing, rephrasing, brainstorming, translating and explaining are the strengths. Exact facts, current events, math and counting are the weaknesses, unless the model is connected to tools that look things up.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "Why does fluent writing tell you nothing about whether an answer is accurate?",
            options: [
              "Accuracy is measured only after a model is connected to a search tool",
              "The model checks its wording twice but its facts only once",
              "Fluency is what it optimizes for",
              "Fluent writing costs more computation, leaving less for fact checking",
            ],
            correctIndex: 2,
            explanation:
              "The model is trained to produce plausible-sounding text, so confidence and polish are the things it is best at. Neither is evidence about the content.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "What architecture are modern large language models built on?",
            options: [
              "The transformer",
              "A verified reference database queried at the moment of answering",
              "A rules engine written and maintained by subject-matter experts",
              "A search index refreshed every time the model is asked a question",
            ],
            correctIndex: 0,
            explanation:
              "Vaswani et al. (2017) introduced the transformer. The thing to remember is what it does not do: it generates the most plausible answer rather than looking one up.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "What role does this course ask you to keep, whatever the AI produces?",
            options: [
              "Prompt author, since the wording decides whether the output is correct",
              "Observer, stepping in only when an answer looks obviously wrong",
              "Editor and fact-checker",
              "Reviewer of the model's sources, though not of its reasoning",
            ],
            correctIndex: 2,
            explanation:
              "AI is an assistant, not an oracle. You stay the editor, the fact-checker, and the person responsible for the result.",
            sourceLessonSlug: "how-ai-works",
          },
          {
            prompt: "In the prompt recipe, what does Format specify?",
            options: [
              "The file type you want the answer delivered in for later editing",
              "Length, structure, and tone",
              "Which version of the model should handle the request",
              "The order the model should work through the steps in",
            ],
            correctIndex: 1,
            explanation:
              "Format is the shape of the answer: five bullet points, plain English, under 200 words. Saying it up front saves an entire round of iteration.",
            sourceLessonSlug: "prompting",
          },
          {
            prompt: "You need an answer grounded in one specific article. What does the lesson tell you to do?",
            options: [
              "Name the article and let the model recall what is in it",
              "Ask the model to search its training data for that article",
              "Ask the model how confident it is about the article's contents",
              "Paste the article in",
            ],
            correctIndex: 3,
            explanation:
              "Give it the material rather than trusting its memory, whenever accuracy matters. A model asked to recall a document will produce something plausible about it either way.",
            sourceLessonSlug: "prompting",
          },
          {
            prompt: "What does the lesson mean by iterating on a prompt?",
            options: [
              "Sending the same prompt several times and keeping the best reply",
              "Treating the first answer as a draft",
              "Rewriting the prompt from scratch whenever an answer disappoints",
              "Splitting one request into several smaller requests sent in order",
            ],
            correctIndex: 1,
            explanation:
              "Good prompting is a conversation, not one shot. Ask it to be shorter, to cite its claims, to try another angle, or to fix what is off.",
            sourceLessonSlug: "prompting",
          },
          {
            prompt: "Which part of the recipe does \"You are a patient biology tutor\" set?",
            options: [
              "Context, because it describes the situation the answer is for",
              "Task, because it says what the model is being asked to produce",
              "Role",
              "Examples, because it shows the model a sample of what to copy",
            ],
            correctIndex: 2,
            explanation:
              "Role is who the model should act as. It shapes voice and depth before you have said a word about the topic.",
            sourceLessonSlug: "prompting",
          },
          {
            prompt: "Why does the lesson tell you to ask a model for its reasoning or its sources?",
            options: [
              "So you can check them",
              "Because a model that explains itself makes fewer mistakes overall",
              "Because reasoning shown in an answer is drawn from verified records",
              "Because the extra text gives the model more room to be accurate",
            ],
            correctIndex: 0,
            explanation:
              "The point is not that the reasoning is trustworthy. It is that reasoning and sources are checkable, and an answer with neither gives you nothing to check.",
            sourceLessonSlug: "prompting",
          },
          {
            prompt: "A prompt reads \"Write about dogs\" and never says how long or in what shape. Which piece is missing?",
            options: [
              "Context, since the model has not been told who will read it",
              "Role, since no voice has been chosen for the answer",
              "Examples, since no sample answer has been supplied",
              "Format",
            ],
            correctIndex: 3,
            explanation:
              "Format is length, structure and tone. Something like five short bullets turns an unbounded request into an answerable one.",
            sourceLessonSlug: "practice-prompting",
          },
          {
            prompt: "A prompt says \"Explain this\" with nothing pasted in. Which piece is missing?",
            options: [
              "Context",
              "Format, since no length or structure has been requested",
              "Role, since the model has not been told who to act as",
              "Task, since the word explain does not name a deliverable",
            ],
            correctIndex: 0,
            explanation:
              "The model cannot see what \"this\" is. Give it the material or the situation instead of relying on its memory.",
            sourceLessonSlug: "practice-prompting",
          },
          {
            prompt: "Which piece of the recipe makes a model answer like a kind coach rather than a generic bot?",
            options: [
              "Examples, by showing one sample answer written in that voice",
              "Context, by describing the reader the answer is aimed at",
              "Task, by naming the coaching outcome you want",
              "Role",
            ],
            correctIndex: 3,
            explanation:
              "A role such as \"You are a patient coach\" shapes voice and depth. It is the cheapest single change you can make to a weak prompt.",
            sourceLessonSlug: "practice-prompting",
          },
          {
            prompt: "The drill asks what to request from a model when you want to check whether a claim is true. What is it?",
            options: [
              "A confidence score for each sentence in the answer",
              "Its sources",
              "A shorter version with the uncertain parts removed",
              "A list of the subjects the model was trained on",
            ],
            correctIndex: 1,
            explanation:
              "Ask for sources or reasoning, then verify them yourself. Asking is only half the habit, and the half that does nothing on its own.",
            sourceLessonSlug: "practice-prompting",
          },
          {
            prompt: "Why does this course call a hallucination dangerous rather than merely wrong?",
            options: [
              "It appears only in answers about specialized technical subjects",
              "It clusters at the end of a long answer, where attention drops off",
              "It is confident and well written",
              "It is produced when a model runs short of training examples",
            ],
            correctIndex: 2,
            explanation:
              "An obvious error you catch immediately. A fluent, confident false claim reads exactly like a true one, so it slips past you and gets repeated.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "Which claims does the lesson say deserve extra skepticism?",
            options: [
              "Claims the model repeats in more than one paragraph of its answer",
              "Claims written in the passive voice, which hides who did what",
              "Claims about subjects widely written about before 2017",
              "Anything you would act on",
            ],
            correctIndex: 3,
            explanation:
              "Recent events, numbers, and legal, medical or financial advice all sit in this category, because the cost of a wrong answer lands on you.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "What does the lesson say a model can invent that looks completely real?",
            options: [
              "DOIs and court cases",
              "A record of the exact date on which it learned a fact",
              "The name of the outside tool it used to look a claim up",
              "A warning attached to any answer it could not verify",
            ],
            correctIndex: 0,
            explanation:
              "Real-looking citations are the hardest kind of hallucination to catch, because checking them feels like it has already been done for you.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "How does the lesson restate \"trust, but verify\" for AI work?",
            options: [
              "Ask twice, and keep the version the model produced both times",
              "Prompt carefully first, so there is less to check afterwards",
              "Draft with AI, verify with sources",
              "Trust short factual answers and check only the long ones",
            ],
            correctIndex: 2,
            explanation:
              "The division of labor is the point. Use the model for the thing it is good at, and use real sources for the thing it cannot do.",
            sourceLessonSlug: "verify",
          },
          {
            prompt: "Why does the lesson say visual tells are not enough on their own?",
            options: [
              "They appear in video only, never in a still image or a voice clip",
              "They fade as the technology improves",
              "They show up only when a file is viewed at its full resolution",
              "They are inserted deliberately by tools that watermark their output",
            ],
            correctIndex: 1,
            explanation:
              "Odd hands, warped text and bad lip-sync are worth noticing, but a generator that fixes them next year does not make the media true.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "What do Content Credentials attach to a piece of media?",
            options: [
              "A score estimating how likely the media is to be synthetic",
              "A tamper-evident history",
              "A list of every account that has reshared the file so far",
              "A lock that prevents the file being edited after publication",
            ],
            correctIndex: 1,
            explanation:
              "The C2PA standard records who made it and whether AI was involved, in a form that shows if it has been altered. Look for the CR marker.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "Which habit does the lesson call the single most effective defense against synthetic media?",
            options: [
              "Reading the replies to see whether anyone has debunked it yet",
              "Checking the poster's follower count and the account's age",
              "Not sharing until you have confirmed",
              "Saving a copy so the original can be compared against it later",
            ],
            correctIndex: 2,
            explanation:
              "Slowing down costs nothing and stops most of the spread. Strong emotional content travels before anyone checks it, which is what makes it effective.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "What does the lesson tell you to ask about whoever posted a surprising clip?",
            options: [
              "Whether their account carries a paid verification badge",
              "How many other clips they have posted on the same subject",
              "Whether they were physically present when it was recorded",
              "What they want you to feel",
            ],
            correctIndex: 3,
            explanation:
              "Source and motive come before pixel-level analysis. Content built to make you feel something strongly is content built to move before it is checked.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "What is a reverse image search for, in this lesson's workflow?",
            options: [
              "Finding the original",
              "Detecting which model generated a picture from its pixel pattern",
              "Measuring how many times a picture has been edited since capture",
              "Reading the Content Credentials embedded inside the image file",
            ],
            correctIndex: 0,
            explanation:
              "Trace it back to where it first appeared, then see whether reputable outlets report the event at all. Both steps are about origin, not appearance.",
            sourceLessonSlug: "spot-fakes",
          },
          {
            prompt: "The drill's one-word name for an AI stating something false with total confidence is…",
            options: [
              "A rounding error, since the model approximated a real value",
              "A retrieval failure, since it could not reach the right record",
              "Hallucination",
              "A bias artifact, since the training data skewed the answer",
            ],
            correctIndex: 2,
            explanation:
              "Plausible-sounding but untrue. Naming it matters because it is a normal mode of operation for these models, not a malfunction to be reported.",
            sourceLessonSlug: "practice-spot-fakes",
          },
          {
            prompt: "How much proof does a citation you never opened give you?",
            options: [
              "Some, because a model rarely fabricates a complete reference entry",
              "None",
              "Strong, provided the reference carries a DOI or a publisher name",
              "Enough for a first draft, if you flag it to be checked later",
            ],
            correctIndex: 1,
            explanation:
              "Models invent real-looking sources, so the reference itself is the claim under test. Open it and confirm it says what is claimed.",
            sourceLessonSlug: "practice-spot-fakes",
          },
          {
            prompt: "The drill asks for the tamper-evident record of who made an image and whether AI was used. What is it?",
            options: [
              "The file's original capture timestamp and camera settings",
              "A published hash of the image held by the hosting platform",
              "The account history of whoever first uploaded the file",
              "Content Credentials",
            ],
            correctIndex: 3,
            explanation:
              "C2PA Content Credentials: provenance you can inspect rather than infer. It is the one check on the list that does not depend on your eyes.",
            sourceLessonSlug: "practice-spot-fakes",
          },
          {
            prompt: "According to the drill, what should you not do with a shocking clip until it is confirmed?",
            options: [
              "Watch it a second time before deciding what to do about it",
              "Read the replies underneath it before forming a view",
              "Save a copy of it to your own device for later",
              "Share it",
            ],
            correctIndex: 3,
            explanation:
              "Resharing is the step that does the damage, and it is the one step entirely under your control. Slowing down stops most misinformation.",
            sourceLessonSlug: "practice-spot-fakes",
          },
          {
            prompt: "Where does the lesson say to watch hardest for bias in AI output?",
            options: [
              "In answers written in a confident and authoritative tone",
              "Decisions about people",
              "In requests that ask the model to summarize a long document",
              "In topics the model was trained on before its cutoff date",
            ],
            correctIndex: 1,
            explanation:
              "Hiring, grading and lending are the named examples. The common thread is that a person bears the cost of the model repeating a pattern from its data.",
            sourceLessonSlug: "ethics-bias",
          },
          {
            prompt: "What does the lesson say passing AI work off as fully your own can amount to?",
            options: [
              "A licensing breach, since the output belongs to the tool's maker",
              "A privacy violation, since the prompt was stored by the provider",
              "A factual error, since the model's claims were never verified",
              "Plagiarism",
            ],
            correctIndex: 3,
            explanation:
              "Disclose AI help where the rules you are under call for it, which in practice means school, work and journalism.",
            sourceLessonSlug: "ethics-bias",
          },
          {
            prompt: "What relationship between AI and human judgment does the lesson argue for?",
            options: [
              "AI supports it",
              "AI replaces it wherever the decision already follows a written rule",
              "AI overrides it whenever the two disagree on a matter of fact",
              "AI is neutral, so it corrects for the biases a person brings",
            ],
            correctIndex: 0,
            explanation:
              "The model is a draft from a flawed assistant, not a neutral authority. Support means a human still decides and can say why.",
            sourceLessonSlug: "ethics-bias",
          },
          {
            prompt: "Who is accountable for AI-assisted work that you publish or act on?",
            options: [
              "The tool's provider, under the terms you agreed to at signup",
              "You are",
              "Whoever wrote the prompt, if that was somebody other than you",
              "Nobody, until a specific harm can be traced back to the output",
            ],
            correctIndex: 1,
            explanation:
              "Even if AI wrote it. That is why disclosure and verification are obligations rather than courtesies.",
            sourceLessonSlug: "ethics-bias",
          },
          {
            prompt: "What should you assume about anything you type into a public AI tool?",
            options: [
              "It is deleted as soon as the conversation window is closed",
              "It is encrypted, so no employee of the provider is able to read it",
              "It may be stored and used for training",
              "It is kept only long enough to generate the reply",
            ],
            correctIndex: 2,
            explanation:
              "Unless the settings say otherwise. Assuming the worst costs you nothing and is the only assumption that stays safe when a policy changes.",
            sourceLessonSlug: "privacy-and-using-well",
          },
          {
            prompt: "You want help with a sensitive situation. What does the lesson suggest?",
            options: [
              "Send the details and delete the conversation afterwards",
              "Ask in the abstract",
              "Split the details across several separate conversations",
              "Include the details but ask the model not to remember them",
            ],
            correctIndex: 1,
            explanation:
              "Strip the identifying details where you can. The advice is usually just as good, and nothing you never typed can be stored.",
            sourceLessonSlug: "privacy-and-using-well",
          },
          {
            prompt: "Which data setting does the lesson tell you to look for in an AI tool?",
            options: [
              "A stricter content filter for sensitive subject matter",
              "An option to cite a source for every factual claim made",
              "A limit on how long each generated answer is allowed to be",
              "Do not train on my data",
            ],
            correctIndex: 3,
            explanation:
              "That one and history off, alongside whatever your workplace or school policy requires. The tool's default is rarely the private option.",
            sourceLessonSlug: "privacy-and-using-well",
          },
          {
            prompt: "What is step two of the lesson's healthy workflow?",
            options: [
              "Verify with sources",
              "Rewrite the draft in your own words before you use any of it",
              "Ask a second model whether the first model got it right",
              "Check whether the tool has stored your conversation",
            ],
            correctIndex: 0,
            explanation:
              "Draft with AI, verify with sources, spot fakes, stay private and ethical. Step two is the one that turns speed into something you can stand behind.",
            sourceLessonSlug: "privacy-and-using-well",
          },
        ],
      },
    },
  ],
};
