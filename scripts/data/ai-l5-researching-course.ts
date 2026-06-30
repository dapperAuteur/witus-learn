// Authored "Researching with AI (Cited & Verified)" — L5 on the AI literacy ladder
// (Learn.WitUS, category "AI & Technology"). Builds on F1 AI Literacy and L1 Advanced
// Prompting: this course is about using AI to RESEARCH without getting fooled. The
// #1 risk is the hallucinated citation — a confident, real-looking source that does
// not exist (or says something else). Every claim here ties to a verified primary
// source: NIST AI RMF 1.0 (trustworthiness/validity), Stanford Civic Online Reasoning
// (lateral reading), the official APA Style guidance (references + how-to-cite-AI,
// which itself documents a fabricated DOI), and a .edu university library research
// guide (URI's CRAAP test for evaluating sources). The course models the behavior it
// teaches: real, openable sources only — nothing fabricated. Exercises + a quiz whose
// every question carries an explanation and the lesson slug that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const AI_L5_RESEARCHING_COURSE: AuthoredCourse = {
  title: "Researching with AI (Cited & Verified)",
  description:
    "Use AI to research faster without getting fooled. Learn what AI research tools can and can't do, why the hallucinated citation is the #1 risk and how to catch it, lateral reading and going to the primary source, how to judge source quality (who, when, why, funded by whom), how to use AI to find vs. to verify, how to synthesize without plagiarizing, attribution and APA basics (including how to cite AI itself), and how to build a verifiable research workflow with a source trail. Practical, non-hype, and cited to NIST, Stanford Civic Online Reasoning, APA Style, and a university library.",
  lessons: [
    {
      slug: "what-ai-research-tools-can-do",
      title: "1 · What AI research tools can (and can't) do",
      section: "Foundations",
      body: `AI is a remarkable research **assistant** and a terrible research **authority**. Knowing which jobs to hand it — and which to keep for yourself — is the whole game.

What AI is genuinely good at in research:

- **Getting you oriented fast** — summarizing a topic, defining jargon, suggesting search terms, outlining what to look into.
- **Rephrasing and explaining** — turning a dense paragraph into plain language, or explaining a method at the level you need.
- **Brainstorming angles** — "what are the main debates here?", "what would a skeptic say?"
- **Drafting and structuring** — first-pass outlines, summaries you will then verify.

What AI is **not** reliable for, on its own:

- **Stating facts, numbers, dates, names, and quotes** — it generates plausible text, not checked truth.
- **Providing citations** — it can invent real-looking sources that don't exist (the next lesson is entirely about this).
- **Telling you what's current** — unless connected to live search, its knowledge has a cutoff and gaps.

The NIST AI Risk Management Framework names **"valid and reliable"** as the foundational property of trustworthy AI — and validity is something you confirm by **measuring against reality**, not something you assume because the answer sounds confident (NIST, 2023).

**The mental model for this whole course:** use AI to help you **find and frame**, and use **real sources** to confirm. You stay the researcher; the AI is the eager intern whose work you always check.

**Check yourself.** Name one research job AI does well and one it should never be trusted with alone.

## Sources
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0) — see "Valid and Reliable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "hallucinated-citations",
      title: "2 · Hallucinated citations: the #1 risk",
      section: "The biggest risk",
      body: `If you remember one thing from this course, make it this: **AI can fabricate citations that look completely real.** A made-up source can have a plausible author, a real-sounding journal, a properly formatted year, and even a **valid-looking DOI** — and still describe a paper that does not exist, or attach to a real paper that says something entirely different.

This isn't hypothetical. In its official guidance on citing ChatGPT, **APA Style** documents an author testing the tool: of five references it produced, one was **fabricated** — the DOI it gave belonged to a completely different article (McAdoo, 2023). APA's resulting advice is blunt: if you use AI to find sources, **"make sure the AI cites sources and that you visit and read the sources yourself to ensure that they are real."**

Why does this happen? Because a language model generates the **most plausible-looking** next text, and a citation has a very predictable *shape*. The model is excellent at producing that shape and indifferent to whether the thing it points to is real.

How fabricated citations give themselves away:

- **The link 404s, or goes to something unrelated.** Always click it.
- **The DOI doesn't resolve**, or resolves to a different title/authors than quoted.
- **A search for the exact title returns nothing** in a library database or scholar search.
- **The "quote" can't be found** anywhere in the actual source.

The rule is simple and absolute: **a citation you have not opened and read is not a citation.** It's a guess wearing a citation's clothes.

**Check yourself.** Can a fabricated citation have a real-looking DOI? What's the one action that catches it?

## Sources
- McAdoo, T. (2023). How to cite ChatGPT. APA Style Blog, American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "catching-fake-sources",
      title: "3 · How to catch a fake (or wrong) source",
      section: "The biggest risk",
      body: `Catching a bad AI source is a quick, repeatable routine — run it on **every** citation that matters before you rely on it.

1. **Open the link.** No exceptions. If there's no link, that's already a flag — ask the AI for one, then verify it.
2. **Check that it resolves to what was claimed.** Does the page/DOI actually show *that* title, *those* authors, *that* year? A real DOI pointing at a different article is the classic AI tell.
3. **Search the exact title** in a library catalog, publisher site, or scholarly search engine. A real paper is findable; a fabricated one usually isn't.
4. **Find the quote in the source.** If the AI gave you a quote or statistic, locate it **in the actual document.** "Paraphrased" facts that aren't in the source are a red flag.
5. **Confirm the source actually supports the claim.** Even a *real* source can be **misattributed** — the paper exists, but it doesn't say what the AI said it says. This is subtler than a fake and just as misleading.

A useful distinction:

| Failure | What it looks like | How to catch it |
| --- | --- | --- |
| **Fabricated source** | Doesn't exist at all | Link 404s; title returns nothing |
| **Misattributed source** | Real source, wrong claim | Open it and read — claim isn't there |
| **Outdated source** | Real, but superseded | Check the date and look for newer work |

Notice that steps 1–5 are just **going to the primary source** — the same skill careful researchers have always used. AI doesn't require a new kind of verification; it just makes the old kind non-optional.

**Check yourself.** What's the difference between a *fabricated* source and a *misattributed* one, and how do you catch each?

## Sources
- McAdoo, T. (2023). How to cite ChatGPT. APA Style Blog, American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt
- University of Rhode Island Libraries. Evaluating Information: The CRAAP Test. https://uri.libguides.com/start/craap`,
    },
    {
      slug: "practice-spot-fake-citations",
      title: "4 · Practice: spot the fake citation",
      section: "The biggest risk",
      exercise: {
        instructions:
          "Fill in each blank about catching bad AI sources, then check. Spelling and capitalization are forgiving.",
        items: [
          { prompt: "When an AI invents a source that doesn't exist, the citation is ___.", answer: "fabricated", accept: ["fake", "hallucinated", "made up", "made-up"], explanation: "Language models produce the shape of a citation without checking that it's real." },
          { prompt: "The single action that catches most fake links: ___ the link and read it.", answer: "open", accept: ["click", "click on", "visit"], explanation: "A citation you haven't opened is not a citation — APA's explicit advice." },
          { prompt: "A real-looking ___ can resolve to a totally different article — a classic AI tell. (the unique article ID)", answer: "DOI", accept: ["doi"], explanation: "APA documented a fabricated reference whose DOI belonged to another article." },
          { prompt: "A real source the AI describes wrongly — it exists but doesn't say what was claimed — is ___.", answer: "misattributed", accept: ["misattribution", "mis-attributed"], explanation: "Subtler than a fake: open it and confirm the claim is actually there." },
          { prompt: "Use AI to ___ sources, but use the real documents to confirm them. (one verb)", answer: "find", accept: ["search", "locate"], explanation: "Find with AI, verify with the primary source — the whole workflow." },
        ],
      },
    },
    {
      slug: "lateral-reading-primary-source",
      title: "5 · Lateral reading and going to the primary source",
      section: "Evaluating what you find",
      body: `When AI hands you a claim or a website, the instinct is to judge it by how *it* presents itself — polished design, confident tone, official-sounding name. That instinct is exactly what fools people. Skilled fact-checkers do the opposite.

**Lateral reading** means: instead of staying *on* a source and reading down the page, you **open new tabs and read across** — checking what **independent, reputable sources** say *about* that source before you trust it. Stanford's **Civic Online Reasoning** research found that professional fact-checkers read laterally almost reflexively, while students (and most of us) read *vertically*, staying on the page and getting taken in by surface polish (Stanford COR / Digital Inquiry Group).

Two habits to pair with it:

- **Go to the primary source.** If a claim cites "a study" or "an expert," follow it back to the *actual study or expert*, not a summary of a summary. AI output is often three layers removed from where the fact originated; each layer can distort it. The primary source tells you what was really found.
- **Practice "click restraint."** COR also teaches not clicking the first result reflexively — scan what's available and choose the most credible lead, rather than trusting whatever's on top.

This matters doubly with AI because an AI summary **is** a layer of remove. When the stakes are real, treat the AI's account as a pointer to where the truth lives — then go there.

**Check yourself.** What does "lateral reading" mean, and why is it better than judging a source by how polished it looks?

## Sources
- Stanford Civic Online Reasoning (Digital Inquiry Group). Intro to Lateral Reading. https://cor.stanford.edu/curriculum/lessons/intro-to-lateral-reading/
- Stanford Civic Online Reasoning. Curriculum. https://cor.stanford.edu/curriculum/`,
    },
    {
      slug: "evaluating-source-quality",
      title: "6 · Evaluating source quality: who, when, why, funded by whom",
      section: "Evaluating what you find",
      body: `Once you've reached a real source, you still have to judge whether it's any good. A widely used checklist from university libraries is the **CRAAP test** — five questions you can run in under a minute (University of Rhode Island Libraries):

- **C — Currency.** *When* was it published or updated? Is it current enough for your question? (Fast-moving fields go stale quickly.)
- **R — Relevance.** Does it actually address *your* question, at the right depth and for the right audience?
- **A — Authority.** *Who* wrote it, and what's their expertise? Is the author or publisher identifiable and credible?
- **A — Accuracy.** Is it supported by evidence, citations, and data you can check? Has it been reviewed?
- **P — Purpose.** *Why* does it exist — to inform, to sell, to persuade, to push an agenda? **Who funded it,** and do they benefit from a particular conclusion?

"Purpose" and funding are where a lot of motivated reasoning hides. A study can be methodologically real and still **funded by a party with a stake in the outcome** — that doesn't automatically make it wrong, but it's a fact you need on the table.

CRAAP applies to AI output too: AI-generated text often **fails Authority** (no identifiable, accountable author) and **Accuracy** (no real, checkable citations) — which is precisely why you push past the AI to the underlying sources and evaluate *those*.

**Check yourself.** What do the letters in CRAAP stand for, and which one is about who paid for the work?

## Sources
- University of Rhode Island Libraries. Evaluating Information: The CRAAP Test. https://uri.libguides.com/start/craap`,
    },
    {
      slug: "find-vs-verify",
      title: "7 · Using AI to find vs. to verify (and when summaries mislead)",
      section: "Working with AI",
      body: `The most important boundary in AI research is between two jobs:

- **Finding / framing** — *"What are the main viewpoints on X?" "Suggest search terms." "Summarize this paper I pasted."* Here AI is genuinely useful, because being approximately right is fine — you'll check anyway.
- **Verifying / deciding** — *"Is this true?" "What's the exact number?" "Did this study find that?"* Here AI is **the wrong tool**, because being approximately right isn't good enough and the model can't tell you when it's wrong.

Using an AI to *verify* its own output is circular: the thing that might have hallucinated can't reliably catch its own hallucination. Verification has to come from **outside** — a primary source, a reputable independent reference, the actual document.

**When AI summaries mislead** — even when nothing is outright fabricated:

- **Lost nuance** — "the study found a link" can quietly drop "small," "preliminary," "in mice," or "correlation, not causation."
- **False confidence** — summaries strip the hedges and caveats that the original authors put there on purpose.
- **Invented connective tissue** — to read smoothly, a summary may assert links or conclusions the source never made.
- **Stale or averaged knowledge** — a general summary can blur conflicting or updated findings into one confident-sounding take.

So: a summary is a **lead, not a finding.** Use it to know *where to look*, then read the source itself before you cite, decide, or publish.

**Check yourself.** Why can't you safely use an AI to verify its own answer?

## Sources
- McAdoo, T. (2023). How to cite ChatGPT. APA Style Blog, American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "synthesize-without-plagiarizing",
      title: "8 · Synthesizing without plagiarizing",
      section: "Writing it up",
      body: `Research isn't copying — it's **synthesis**: reading several real sources, understanding them, and writing something in **your own words** that draws on them and credits them. AI changes the speed of this, not the ethics.

What plagiarism looks like in the AI era:

- **Pasting AI text as your own** without disclosure where disclosure is required (school, work, journalism). The AI didn't do the thinking *for* you to claim — and it may have reproduced phrasing from its training data.
- **Lightly reworded copying** — swapping a few words of a source (or an AI's summary of a source) while keeping its structure and ideas. Still plagiarism.
- **Citing a source you never read** because the AI mentioned it. Beyond the fabrication risk, you can't honestly vouch for a source you haven't opened.

How to synthesize honestly:

- **Read the real sources first.** Understand the ideas well enough to explain them without the text in front of you.
- **Write from understanding, in your own structure** — then cite where each idea came from.
- **Quote sparingly and exactly**, in quotation marks, with a citation — for the rare line you must reproduce verbatim.
- **Keep AI help and source claims separate in your head:** AI can help you *outline* or *tighten* your prose, but the *claims* and their *sources* must be ones you verified.

The honest test: could you **defend every sentence** — explain where the idea came from and confirm the source really says it? If yes, you've synthesized. If you'd have to go look up what your own paragraph means, you've copied.

**Check yourself.** What's the difference between synthesizing from sources and lightly-reworded copying?

## Sources
- McAdoo, T. (2023). How to cite ChatGPT. APA Style Blog, American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt
- University of Rhode Island Libraries. Evaluating Information: The CRAAP Test. https://uri.libguides.com/start/craap`,
    },
    {
      slug: "attribution-and-apa-basics",
      title: "9 · Attribution and APA basics (including citing AI)",
      section: "Writing it up",
      body: `Attribution is how readers can **follow your trail back to the evidence** — and how you signal that you actually did the work. A citation has two parts working together:

- An **in-text citation** at the claim — in APA, author and year: *(McAdoo, 2023)*.
- A matching **reference list entry** at the end with everything needed to find the source: author, date, title, and a DOI or URL. APA notes the reference list exists precisely so "readers can identify and retrieve each work" (APA Style).

A few APA basics for research writing:

- **Every in-text citation has a reference, and every reference is cited** — no orphans on either side.
- **A reference list is not a bibliography:** the reference list contains only works you actually cited; a bibliography may list background reading you didn't cite. Know which your assignment wants.
- **Quote vs. paraphrase:** quotations need quotation marks and (for APA) a page or location; paraphrases still need the author–year citation.

**Citing AI itself.** When you use a tool like ChatGPT, APA says the **author is the company** that made it (e.g., OpenAI), with the tool named as the title and described in brackets:

> OpenAI. (2023). *ChatGPT* (version) [Large language model]. https://chat.openai.com/chat

But citing the AI **does not** substitute for citing the real sources behind a factual claim — and remember APA's own warning that AI-provided references must be opened and confirmed, because one of theirs turned out to be fabricated (McAdoo, 2023). Cite the AI for the AI's role; cite the **primary sources** for the facts.

**Check yourself.** In APA, who is listed as the *author* when you cite ChatGPT — and why doesn't citing the AI replace citing your real sources?

## Sources
- American Psychological Association. References (APA Style). https://apastyle.apa.org/style-grammar-guidelines/references
- American Psychological Association. Reference lists versus bibliographies. https://apastyle.apa.org/style-grammar-guidelines/references/lists-vs-bibliographies
- McAdoo, T. (2023). How to cite ChatGPT. APA Style Blog. https://apastyle.apa.org/blog/how-to-cite-chatgpt`,
    },
    {
      slug: "verifiable-workflow-and-source-trail",
      title: "10 · A verifiable workflow and a source trail",
      section: "Writing it up",
      body: `Put it all together into a repeatable workflow that lets anyone — including future you — **check every claim you make.**

A research workflow that doesn't get you fooled:

1. **Frame with AI.** Use it to orient, define terms, suggest search terms and angles, and draft an outline. Treat all of it as *leads*, not facts.
2. **Find candidate sources** — via AI suggestions *and* real search (library databases, scholarly search, reputable references).
3. **Verify each source.** Open the link; confirm it exists, resolves correctly, and actually says what's claimed. Drop anything you can't confirm. (Lessons 2–3.)
4. **Evaluate quality.** Run CRAAP — who, when, why, funded by whom — and read laterally on anything you're unsure of. (Lessons 5–6.)
5. **Go to the primary source** for any claim that matters; don't cite a summary of a summary.
6. **Synthesize in your own words** and **attribute** every idea and quote. (Lessons 8–9.)
7. **Keep a source trail.**

**The source trail** is the habit that makes everything above durable: for **every claim, record where it came from** — the exact URL/DOI, the date you accessed it, and a note on what it actually says. Keep AI-suggested-but-unverified items in a clearly separate "to check" list so they never sneak into your final work unconfirmed. A good trail means you can answer "how do you know that?" for any sentence — which is exactly the standard NIST's framework sets for **valid and reliable** results (NIST, 2023), and exactly the trust signal good research carries.

If you can't trace a claim back to a verified source, it isn't ready to publish. That single rule, applied consistently, is what separates research from repeating whatever sounded confident.

**Check yourself.** What goes in a "source trail," and why does keeping one let you answer "how do you know that?"

## Sources
- National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework
- Stanford Civic Online Reasoning. Curriculum. https://cor.stanford.edu/curriculum/
- American Psychological Association. References (APA Style). https://apastyle.apa.org/style-grammar-guidelines/references`,
    },
    {
      slug: "practice-research-workflow",
      title: "11 · Practice: build the workflow",
      section: "Writing it up",
      exercise: {
        instructions: "Fill in each blank about the verify-and-cite workflow, then check.",
        items: [
          { prompt: "Reading across new tabs to see what independent sources say about a source is called ___ reading.", answer: "lateral", explanation: "Stanford COR found fact-checkers do this reflexively; it beats judging a source by its own polish." },
          { prompt: "The library checklist for source quality — Currency, Relevance, Authority, Accuracy, Purpose — is the ___ test.", answer: "CRAAP", accept: ["craap"], explanation: "Run it in under a minute; 'Purpose' is where funding and agenda hide." },
          { prompt: "Following a claim back to the actual study, not a summary of it, means going to the ___ source.", answer: "primary", explanation: "Each layer of remove can distort the fact; the primary source is what was really found." },
          { prompt: "For every claim, record the URL/DOI, access date, and what it says — this record is your source ___.", answer: "trail", explanation: "A source trail lets you answer 'how do you know that?' for any sentence." },
          { prompt: "Use AI to find sources, but always confirm them against the ___ document. (one word)", answer: "real", accept: ["primary", "actual", "original"], explanation: "Verification must come from outside the AI — it can't reliably catch its own hallucinations." },
        ],
      },
    },
    {
      slug: "ai-l5-researching-quiz",
      title: "12 · Check your understanding",
      section: "Writing it up",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the single biggest risk when using AI for research?",
            options: [
              "It writes too slowly",
              "It can fabricate real-looking citations to sources that don't exist",
              "It refuses to answer questions",
              "It uses too many big words",
            ],
            correctIndex: 1,
            explanation:
              "AI generates the shape of a citation without checking it's real — APA documented a fabricated reference whose DOI pointed to a different article.",
            sourceLessonSlug: "hallucinated-citations",
          },
          {
            prompt: "Can a hallucinated citation have a valid-looking DOI?",
            options: [
              "No — a DOI proves a source is real",
              "Yes — and it may resolve to a completely different article",
              "Only for very old papers",
              "Only if the AI is offline",
            ],
            correctIndex: 1,
            explanation:
              "APA's own test found a fabricated reference whose DOI belonged to another article. Open and confirm every link.",
            sourceLessonSlug: "hallucinated-citations",
          },
          {
            prompt: "What's the one action that catches most fake AI citations?",
            options: [
              "Ask the AI if it's sure",
              "Open the link and confirm it shows the claimed title, authors, and content",
              "Count the references",
              "Reword the citation",
            ],
            correctIndex: 1,
            explanation:
              "A citation you haven't opened isn't a citation. Verification must come from the actual source, not the AI.",
            sourceLessonSlug: "catching-fake-sources",
          },
          {
            prompt: "A source the AI named is real, but it doesn't actually say what the AI claimed. This is…",
            options: ["A fabricated source", "A misattributed source", "A primary source", "A puffery source"],
            correctIndex: 1,
            explanation:
              "Misattribution is subtler than a fake — the paper exists but doesn't support the claim. Catch it by opening and reading it.",
            sourceLessonSlug: "catching-fake-sources",
          },
          {
            prompt: "What is \"lateral reading\"?",
            options: [
              "Reading a source twice",
              "Opening new tabs to see what independent sources say about a source",
              "Skimming only the abstract",
              "Reading from the bottom up",
            ],
            correctIndex: 1,
            explanation:
              "Stanford Civic Online Reasoning found fact-checkers read laterally rather than judging a source by how polished it looks.",
            sourceLessonSlug: "lateral-reading-primary-source",
          },
          {
            prompt: "In the CRAAP test, which letter is about who funded the work and why it exists?",
            options: ["Currency", "Relevance", "Authority", "Purpose"],
            correctIndex: 3,
            explanation:
              "Purpose asks why a source exists and who benefits — where motivated reasoning and funding bias often hide.",
            sourceLessonSlug: "evaluating-source-quality",
          },
          {
            prompt: "Why can't you safely use an AI to verify its own answer?",
            options: [
              "It costs extra",
              "The tool that may have hallucinated can't reliably catch its own hallucination",
              "It's against the law",
              "It always says yes",
            ],
            correctIndex: 1,
            explanation:
              "Verification has to come from outside the model — a primary source or reputable independent reference.",
            sourceLessonSlug: "find-vs-verify",
          },
          {
            prompt: "Even when nothing is fabricated, an AI summary can mislead by…",
            options: [
              "Being too short to read",
              "Dropping caveats like 'small,' 'preliminary,' or 'correlation, not causation'",
              "Using a different font",
              "Citing too many sources",
            ],
            correctIndex: 1,
            explanation:
              "Summaries strip nuance and hedges and can invent connective tissue — treat a summary as a lead, then read the source.",
            sourceLessonSlug: "find-vs-verify",
          },
          {
            prompt: "In APA Style, who is listed as the author when you cite ChatGPT?",
            options: [
              "ChatGPT",
              "The company that made it (e.g., OpenAI)",
              "Yourself",
              "No author is needed",
            ],
            correctIndex: 1,
            explanation:
              "APA lists the developing company as author. But citing the AI doesn't replace citing the real sources behind your facts.",
            sourceLessonSlug: "attribution-and-apa-basics",
          },
          {
            prompt: "What is a \"source trail,\" and why keep one?",
            options: [
              "A list of AI prompts you used",
              "A record of where each claim came from (URL/DOI, date, what it says) so you can prove how you know it",
              "The browser history",
              "A bibliography of books you own",
            ],
            correctIndex: 1,
            explanation:
              "A source trail lets you answer 'how do you know that?' for any sentence — the standard for valid, reliable, trustworthy research.",
            sourceLessonSlug: "verifiable-workflow-and-source-trail",
          },
        ],
      },
    },
  ],
};
