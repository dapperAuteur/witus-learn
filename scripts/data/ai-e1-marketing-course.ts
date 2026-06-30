// Authored "AI Marketing & Content (Authentic, Cited)" — E1, the entrepreneur-track
// marketing-and-content course on the ElementaryMBA school (teen + young-adult
// founders), category "Entrepreneurship". Sibling to F4 ("AI for Entrepreneurs"),
// which carries ONE marketing lesson; E1 goes much deeper and does not repeat it:
// finding your audience + message (AI for research, never for faking it), content
// that keeps YOUR voice, AI-assisted drafts for social/email/blog/SEO (always edit +
// fact-check), brand consistency, the LAW + ethics of marketing with AI (FTC
// disclosure of AI and endorsements, the fake-reviews rule, truthful/substantiated
// claims, copyright of AI output), avoiding "AI slop" that erodes trust, measuring
// what works (not vanity metrics), and a content-system capstone. Carries the
// platform's trust DNA: authentic + disclosed + cited — never fabricate. Grouped into
// four sections (Audience & Message · Make the Content · Law, Ethics & Trust · Measure
// & Systematize). Cited with real, verifiable sources: the FTC ("Keep your AI claims
// in check," the final Rule on the Use of Consumer Reviews and Testimonials / fake-
// reviews rule 16 CFR Part 465, and "Disclosures 101 for Social Media Influencers");
// the U.S. Copyright Office's "Copyright and Artificial Intelligence, Part 2:
// Copyrightability"; the U.S. SBA's "Market research and competitive analysis"; and
// Google's "Search Essentials" + "Creating helpful, reliable, people-first content."
// Two fill-in exercises + a final quiz whose every question links to the lesson that
// teaches it (passingScore 70).

import type { AuthoredCourse } from "./authored-course";

export const AI_E1_MARKETING_COURSE: AuthoredCourse = {
  title: "AI Marketing & Content (Authentic, Cited)",
  description:
    "Market an honest business with AI — without the slop. Learn to use AI to research your real audience and find a message that's true (never to fake demand), to draft social, email, blog, and SEO content while keeping YOUR voice, to stay brand-consistent, and to obey the law: FTC rules on AI claims, paid-endorsement disclosure, and fake reviews, plus what you can (and can't) copyright when AI helped. You'll learn why generic, unedited \"AI slop\" quietly erodes trust, how to measure what actually works instead of vanity metrics, and you'll end by building a small, repeatable content system you'd be proud to put your name on. F1 (AI Literacy) and F4 (AI for Entrepreneurs) pair well with this.",
  lessons: [
    // ── Section 1 · Audience & Message ────────────────────────────────────────
    {
      slug: "audience-and-message",
      title: "1 · Find your real audience and a true message",
      section: "Audience & Message",
      body: `Marketing isn't shouting at everyone. It's saying one true, useful thing to the specific people who need it. Before you write a single post, you need two answers: **who** is this for, and **what true message** will make them care. AI can speed up *both* — as a research and thinking partner. It cannot hand you a real audience, and it must never invent one.

**Use AI to investigate your audience (then verify):**

- **Sketch who has the problem.** Ask AI to list the kinds of people who'd want what you offer, what they struggle with, and the words they actually use. Treat every line as a *lead to check*, not a fact.
- **Do the real research the SBA recommends.** Combine that AI sketch with **secondary research** (industry trends, who's already serving these customers, what competitors charge) and **direct research** — actually talking to real people about what they do today (SBA, n.d.).
- **Turn your message into a sentence.** "For [who], we help [do what], so they [get what benefit]." If you can't fill that in honestly, you're not ready to market yet — and AI padding won't hide it.

**The line you must not cross: research vs. faking it.**

- ✅ Allowed: AI helps you *find, understand, and reach* real people.
- ❌ Not allowed: AI *invents* the audience's approval. Asking a model to "pretend to be my happy customer" can help you rehearse questions, but its answer is fiction. Never treat a synthetic persona's praise as evidence that real people want this.

> **Trust DNA:** AI can help you discover the truth about your audience. It can never *manufacture* it. Validation comes from real humans, not a convincing simulation.

**Check yourself.** Write your one-sentence message ("For ___, we help ___ so they ___"). Then name one way AI helped you research it — and one thing only a real person can confirm.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — secondary and direct research to know your market and customers. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "research-not-fabrication",
      title: "2 · AI for research, never for faking it",
      section: "Audience & Message",
      body: `This lesson draws the brightest line in the whole course, because crossing it is where young founders get into legal *and* moral trouble. **AI is a microscope, not a magic wand.** It helps you see your market more clearly. The moment you use it to *fabricate* evidence — fake demand, fake reviews, fake numbers — you've stopped marketing and started lying.

**Honest, powerful ways to use AI in marketing research:**

- **Summarize real feedback.** Paste anonymized reviews, survey answers, or support messages and ask AI to cluster the common themes and complaints. You still read the raw ones.
- **Draft better questions.** Turn "do you love my idea?" (leading, useless) into open questions about what people actually do and pay for now.
- **Map the competition.** Ask AI to list competitors and what they emphasize, then go *verify each one yourself* — models get details wrong and miss new players.
- **Spot your own blind spots.** "What objections might a skeptical customer raise?" is a great prompt because the answer is *yours to address*, not to publish as fact.

**The fabrication traps — all of these are off-limits:**

- **Fake reviews or testimonials.** Generating a glowing "customer" review and posting it. (It's also illegal — Lesson 6.)
- **Made-up statistics.** "73% of users prefer us" when you never measured it. A confident AI number is not a real number.
- **Misquoted or invented studies.** Citing "research shows…" for research that doesn't exist, or that you never read.
- **Synthetic demand.** Faking waitlist counts, follower numbers, or "sold out" urgency that isn't true.

**A one-question gut check before anything goes public:** *"Is this true, and can I show why?"* If the honest answer is "the AI said so" — stop. Verify it, or cut it. Real evidence is the only kind that builds a business that lasts.

**Check yourself.** Give one example of using AI for legitimate research and one example of using it to fabricate — and explain the single difference that separates them.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — base decisions on real market and competitor research. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- Federal Trade Commission. (2023). *Keep your AI claims in check* — marketing claims must be truthful and substantiated, not invented. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },

    // ── Section 2 · Make the Content ──────────────────────────────────────────
    {
      slug: "content-with-your-voice",
      title: "3 · Content that keeps YOUR voice",
      section: "Make the Content",
      body: `Your voice — the specific, human way *you* talk about what you do — is one of the few advantages a small business has over a giant one. AI's default voice is the opposite: smooth, generic, forgettable, the average of the whole internet. If you publish that raw, you've handed away your only edge. The skill here is using AI to write *faster* without writing *like everyone else*.

**Make AI sound like you, not like a robot:**

- **Feed it your voice.** Paste two or three things you actually wrote or said and tell it: "Match this tone — same rhythm, same words I use." A default prompt gives you a default voice.
- **Treat the draft as raw clay.** The first output is a starting point, never the finished post. Rewrite the opening line and the ending in your own words — those carry the most personality.
- **Add what only you know.** Swap vague filler ("we offer best-in-class solutions") for concrete, verified specifics: your real story, a real example, a number you actually measured.
- **Cut the AI tells.** Over-polished symmetry, "in today's fast-paced world," "unlock," "elevate," "delve," empty hype — strike them. They signal "nobody really wrote this."

**A simple publishing bar:** *Would I be embarrassed if a customer knew AI wrote this and I didn't improve it?* If yes, don't ship it. Using AI to draft faster is fine. Using AI to publish *worse* and calling it done is how you become invisible.

> **Trust DNA:** AI is a drafting partner, not a ghostwriter that replaces you. The value you add — your voice, your specifics, your judgment — is the whole point of you doing the marketing.

**Check yourself.** Take an AI-drafted sentence and rewrite it in your own voice with one specific, true detail only you would know. What changed?

## Sources
- Google. (n.d.). *Creating helpful, reliable, people-first content* — demonstrate first-hand experience and expertise; create content for people, not to manipulate rankings. https://developers.google.com/search/docs/fundamentals/creating-helpful-content`,
    },
    {
      slug: "drafting-social-email-blog-seo",
      title: "4 · AI drafts for social, email, blog, and SEO (edit + fact-check every time)",
      section: "Make the Content",
      body: `Here's where AI saves the most time: the blank page. A draft of a post, an email, a blog outline, an FAQ — in seconds. The non-negotiable rule that comes with that speed: **you edit it into your voice and you fact-check every claim before it's public.** Speed without that step just helps you publish mistakes faster.

**By channel — what AI is good for, and the catch:**

- **Social posts.** AI is great for *options* — ten hooks, three angles, a caption draft. Catch: pick and rewrite; don't post the generic one. Disclose if a post is a paid endorsement (Lesson 7).
- **Email.** AI drafts subject lines, a newsletter skeleton, a polite reply. Catch: every promise, price, and date is something you must honor — verify before you hit send to a real list.
- **Blog / articles.** AI builds outlines and first drafts fast. Catch: it invents facts, stats, and "sources." Replace them with real ones you've read, and add genuine first-hand experience — which is exactly what Google's people-first guidance rewards (Google, n.d.).
- **SEO.** AI helps you find the words people actually search and place them in titles and headings — Google's own best practice (Google, n.d.). Catch: write for *people first*. Mass-producing AI pages **to manipulate rankings is against Google's spam policies** and can sink your whole site (Google, n.d.).

**The fact-check pass — run it on everything before publishing:**

1. **Every number, date, price, and quote** — confirm against a real source. AI "hallucinates" confidently (see F1).
2. **Every named "study," law, or statistic** — find the actual source or delete the claim.
3. **Every promise to a customer** — make sure you can actually keep it.
4. **Every "fact" about a competitor** — verify; getting it wrong can be defamation, not just embarrassing.

**Check yourself.** Pick one channel above. Name the best way AI helps there *and* the one thing you must do before that content reaches a real person.

## Sources
- Google. (n.d.). *Search Essentials* — key best practices: helpful people-first content, useful keywords in prominent places; spam policies cover scaled content abuse. https://developers.google.com/search/docs/essentials
- Google. (n.d.). *Creating helpful, reliable, people-first content* — automation/AI used mainly to manipulate rankings violates Google's spam policies. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Federal Trade Commission. (2023). *Keep your AI claims in check* — substantiate claims before you publish them. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },
    {
      slug: "brand-consistency",
      title: "5 · Brand consistency across everything you publish",
      section: "Make the Content",
      body: `A **brand** is a promise people recognize and trust — the same voice, look, and values whether they meet you on Instagram, in an email, or on your homepage. When AI generates each piece independently, the natural result is *drift*: every post sounds a little different, and the whole thing feels like a stranger wrote it. Consistency is what turns scattered content into a brand people remember.

**Build a one-page "brand kit" — then make AI follow it.** Write down, once:

- **Voice** — three words for how you sound (e.g. "warm, plain-spoken, a little funny") plus two phrases you *do* use and two you *never* use.
- **Audience and message** — your one-sentence message from Lesson 1.
- **Visual basics** — your colors, fonts, and logo rules, so AI-generated images don't clash with your real look.
- **Promises and no-go's** — claims you can stand behind, and lines you won't cross (no fake urgency, no exaggeration).

**Then put the brand kit at the top of every prompt.** "Write in this voice, for this audience, following these rules" turns the generic default into something that sounds like *you* every time. Reuse the same kit for social, email, and blog so they match.

**Consistency does NOT mean robotic sameness.** The goal is a recognizable *person*, not a copy-paste template across every post — that sameness is its own kind of slop (Lesson 8). Same voice and values; fresh, specific content each time.

**A consistency catch on AI images and logos:** a logo or design you got from a single AI prompt may not be something you can legally own or stop others from copying (Lesson 7) — another reason your brand's recognizable elements should carry real human creative choices, not just one prompt.

**Check yourself.** List the three voice words and two "never" phrases for your brand. How would pasting those at the top of a prompt change what AI gives you back?

## Sources
- Google. (n.d.). *Creating helpful, reliable, people-first content* — a consistent, trustworthy brand voice supports experience and trust (E-E-A-T). https://developers.google.com/search/docs/fundamentals/creating-helpful-content`,
    },
    {
      slug: "practice-make-the-content",
      title: "6 · Practice: drafting and brand basics",
      section: "Make the Content",
      exercise: {
        instructions:
          "Fill in the missing marketing term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "The specific, human way YOU talk about what you do — your biggest edge over big competitors — is your ___.",
            answer: "voice",
            accept: ["brand voice", "tone"],
            explanation: "AI's default voice is generic. Feed it yours, then rewrite the draft so it actually sounds like you.",
          },
          {
            prompt: "Before any AI-drafted content reaches a real customer, you must edit it and ___ every claim.",
            answer: "fact-check",
            accept: ["fact check", "verify", "check"],
            explanation: "AI invents facts, stats, and 'sources' confidently. Confirm every number, date, price, and quote first.",
          },
          {
            prompt: "Generic, soulless, unedited AI content that any business could have published is called ___.",
            answer: "slop",
            accept: ["ai slop"],
            explanation: "Slop builds no brand and no trust. Add your voice and specific, verified details.",
          },
          {
            prompt: "A promise people recognize and trust — the same voice and values everywhere you publish — is your ___.",
            answer: "brand",
            accept: ["brand consistency"],
            explanation: "Write a one-page brand kit and paste it atop every prompt so AI stays on-brand instead of drifting.",
          },
          {
            prompt: "Mass-producing AI pages mainly to manipulate Google rankings violates Google's ___ policies.",
            answer: "spam",
            accept: ["spam policy", "spam policies"],
            explanation: "Google's Search Essentials reward helpful, people-first content; scaled content abuse can sink your whole site.",
          },
        ],
      },
    },

    // ── Section 3 · Law, Ethics & Trust ───────────────────────────────────────
    {
      slug: "the-law-and-ethics",
      title: "7 · The law and ethics of marketing with AI",
      section: "Law, Ethics & Trust",
      body: `Marketing is one of the most *regulated* things a business does, and using AI does not lower the bar — in places it raises it. You don't need a law degree, but you must know these four rules cold, because breaking them can mean fines, lawsuits, or a dead brand. (This is general education, not legal advice — for your situation, ask a real lawyer.)

**1 · Claims must be truthful and substantiated.** You can't say things that aren't true or that you can't back up. The FTC is explicit that **AI-related performance claims must be substantiated** — don't say your product "uses AI" if it doesn't, and don't exaggerate what it does (FTC, 2023). "The AI wrote it" is not a defense for a false claim.

**2 · No fake reviews or fake testimonials — it's now illegal.** Under the FTC's **Rule on the Use of Consumer Reviews and Testimonials** (16 CFR Part 465, effective Oct. 21, 2024), it is illegal to write, buy, sell, or distribute **fake or false reviews and testimonials — including AI-generated ones from people with no real experience** — and to buy or sell **fake indicators of social-media influence** like bogus followers. The rule also bars certain undisclosed insider reviews and company-controlled "independent" review sites. Violations can carry **civil penalties up to $51,744 per violation** (FTC, 2024). AI makes faking reviews easy; that does not make it legal.

**3 · Disclose paid endorsements and material connections — clearly.** If someone endorses your product and has a **material connection** to you — you paid them, gave free product, or they're family or staff — that connection must be disclosed **clearly and conspicuously**, in each post, placed where people will actually see it (FTC, n.d.). The same applies when *you* endorse something. Burying "#ad" where no one notices doesn't count, and a platform's built-in tool alone isn't enough.

**4 · Know the copyright limits on AI output.** The U.S. Copyright Office concluded that **purely AI-generated material isn't protected by copyright, and prompting alone is not enough** to make an AI's output yours — copyright requires human authorship (U.S. Copyright Office, 2025). Practical meaning: a logo, jingle, or post you got from a single prompt may be something you can't legally *own or stop others from copying*. Your *human* creative contributions — your edits, arrangement, and original writing — are what's protectable. Also respect others' copyrights and your tools' terms of use.

**Check yourself.** A friend will post a glowing 5-star review of your product if you send them a free unit. Name two distinct FTC problems with treating that as an ordinary, independent review.

## Sources
- Federal Trade Commission. (2023). *Keep your AI claims in check* — AI claims must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check
- Federal Trade Commission. (2024). *Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials* (Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465). https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
- Federal Trade Commission. (n.d.). *Disclosures 101 for Social Media Influencers* — disclose material connections clearly and conspicuously, in every post. https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- U.S. Copyright Office. (2025). *Copyright and Artificial Intelligence, Part 2: Copyrightability* — human authorship required; prompting alone is insufficient. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`,
    },
    {
      slug: "avoiding-ai-slop",
      title: "8 · Avoiding AI slop that erodes trust",
      section: "Law, Ethics & Trust",
      body: `"AI slop" is the flood of low-effort, generic, often-wrong content that AI makes it cheap to produce. It's not illegal like a fake review — it's quieter and, over time, just as damaging. Slop tells your audience *you didn't care enough to do this yourself*, and trust leaks out one mediocre post at a time. In a young business, trust is your most valuable and most fragile asset.

**How to recognize the slop you're about to publish:**

- **Could-be-anyone content.** A post with no specific detail, no real example, nothing only your business could have said. Interchangeable = invisible.
- **Confident wrongness.** A made-up statistic, a misquoted study, an invented "fact" — published because it sounded authoritative and you didn't check.
- **Sameness at scale.** Twenty posts that all sound like the same default chatbot. Volume without voice isn't a content strategy; it's noise.
- **Hollow hype.** "Revolutionary," "game-changing," "unlock your potential" with nothing concrete behind it. Customers tune it out instantly.
- **Obvious automation where a human was implied.** A "personal" note that's clearly a template; a "support" reply that ignores what was actually asked.

**The anti-slop habits:**

- **Specific beats generic, every time.** One true, concrete detail (a real result, a real customer story you have permission to share) is worth a paragraph of AI filler.
- **Edit and verify before publishing** — voice in, false claims out (Lessons 3–4).
- **Quality over volume.** Better to post three things you're proud of than thirty you're not. Google's people-first guidance rewards genuine experience and depth, not output for output's sake (Google, n.d.).
- **Disclose honestly.** If customers are interacting with an AI bot, tell them and offer a path to a human. Pretending a bot is a person breaks trust the instant someone notices.

> **Trust DNA:** customers forgive a small business that's clearly *trying*. They don't forgive being fed lazy, fake, or deceptive content. Use AI to be *better and faster* — never to be hollow.

**Check yourself.** Spot two signs of AI slop in a piece of marketing, and name the single habit that fixes the "could-be-anyone" problem.

## Sources
- Google. (n.d.). *Creating helpful, reliable, people-first content* — first-hand experience, depth, and trust over content made to game rankings. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Federal Trade Commission. (2024). *Final Rule Banning Fake Reviews and Testimonials* — deceptive, fabricated content can be illegal, not just low-quality. https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials`,
    },

    // ── Section 4 · Measure & Systematize ─────────────────────────────────────
    {
      slug: "measure-what-works",
      title: "9 · Measure what works (not vanity metrics)",
      section: "Measure & Systematize",
      body: `It's easy to feel like your marketing is "working" because a post got likes. But likes don't pay rent. The founder's job is to know — with honest numbers — whether your content actually moves the business. That means telling **vanity metrics** apart from metrics that matter.

**Vanity metrics** look impressive and tell you little on their own:

- Follower count, likes, and view counts in isolation.
- Impressions and "reach" with no action attached.
- "AI generated 50 posts this week" — that's *activity*, not *results*.

**Metrics that actually tell you something** connect content to a real outcome:

- **Action taken** — sign-ups, replies, clicks to your site, messages, pre-orders. Did the content *cause a next step*?
- **Conversion** — of the people who saw it, how many did the thing you wanted?
- **Customers and revenue** — the truest test. Did this channel bring real, paying people?
- **Retention / repeat** — do people stick around and come back? That's a sign your message is true and your product delivers.

**Measure like an owner — a small, honest test:**

1. **Decide the metric *before* you publish.** "Worth it" only has an answer if you defined it in advance.
2. **Pick ONE thing to change** (a headline, a channel, a message) so you can tell what caused the result.
3. **Give it a fair window, then compare** to your baseline. Better *and* worth the effort? Keep it. If not, change it — without sentiment.

**Where AI helps here, and where it fools you:** AI can summarize your analytics and spot patterns to *investigate*. It can't decide what "success" means for your business — that's your call — and a tool that generates a *lot* of content is not proof that the content *worked*. Don't confuse motion with progress.

**Check yourself.** Name one vanity metric and one metric that actually matters for your business — and explain why the second one is more honest.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — measure real customer response, not surface numbers, to guide decisions. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "capstone-content-system",
      title: "10 · Capstone: build your authentic content system",
      section: "Measure & Systematize",
      exercise: {
        instructions:
          "Build a small, repeatable, honest content system for YOUR business — AI assists, you decide and verify. Work through all six pieces below for your own idea (write them out: a doc, a notebook, or by asking an AI tool to help you draft, then verifying and rewriting in your own words). Each item names a piece and asks you to type the ONE KEYWORD shown in bold to confirm you've drafted it — the explanation then shows what a strong version does. The real work is your written system; this walks you through the checklist.",
        items: [
          {
            prompt: "PIECE 1 — Write your one-sentence MESSAGE: 'For ___, we help ___ so they ___.' Done? Type the keyword: message",
            answer: "message",
            accept: ["audience"],
            hint: "Name a specific audience and a true benefit you can actually deliver (Lesson 1).",
            explanation: "A strong message names a real audience and a benefit you can prove — researched with AI, confirmed with real people.",
          },
          {
            prompt: "PIECE 2 — Write a one-page BRAND kit: three voice words, two 'never' phrases, your colors/look, and your no-go claims. Done? Type the keyword: brand",
            answer: "brand",
            accept: ["brand kit", "voice"],
            hint: "You'll paste this atop every prompt so AI stays on-brand (Lessons 3 & 5).",
            explanation: "A brand kit turns AI's generic default into your recognizable voice and keeps every channel consistent.",
          },
          {
            prompt: "PIECE 3 — Pick your CHANNELS (e.g. social + email, or blog/SEO) and name how AI will draft for each. Done? Type the keyword: channels",
            answer: "channels",
            accept: ["channel"],
            hint: "Start with one or two you can do well, not all of them (Lesson 4).",
            explanation: "AI drafts options per channel; you pick, rewrite in your voice, and write for people first — not to game rankings.",
          },
          {
            prompt: "PIECE 4 — Write your FACT-CHECK rule: what you verify before anything goes public (numbers, claims, sources, promises). Done? Type the keyword: factcheck",
            answer: "factcheck",
            accept: ["fact-check", "fact check", "verify"],
            hint: "Every number, date, price, quote, study, and competitor 'fact' (Lesson 4).",
            explanation: "The fact-check pass is non-negotiable: AI hallucinates confidently, and false marketing claims can be illegal.",
          },
          {
            prompt: "PIECE 5 — Write your LAW/ethics rules: truthful claims, no fake reviews, disclose paid endorsements, mind AI copyright. Done? Type the keyword: legal",
            answer: "legal",
            accept: ["law", "ethics", "ethical"],
            hint: "Substantiate claims; no fake/AI-faked reviews; disclose material connections clearly; know what you can't own (Lesson 7).",
            explanation: "These are FTC rules and Copyright Office guidance, not suggestions — breaking them risks fines and a dead brand.",
          },
          {
            prompt: "PIECE 6 — Pick the ONE real METRIC (not a vanity metric) that tells you this is working. Done? Type the keyword: metric",
            answer: "metric",
            accept: ["measure", "metrics"],
            hint: "Sign-ups, replies, conversions, paying customers, repeat — not just likes or follower count (Lesson 9).",
            explanation: "Define success before you publish, change one thing at a time, and compare to a baseline — drop what doesn't earn its place.",
          },
        ],
      },
    },
    {
      slug: "ai-marketing-quiz",
      title: "11 · Check your understanding",
      section: "Measure & Systematize",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the honest role of AI in finding your audience and message?",
            options: [
              "It hands you a guaranteed audience that already loves your product",
              "It helps you research and reach real people — but never manufactures their approval",
              "Its made-up customer personas count as real market validation",
              "It removes the need to talk to anyone",
            ],
            correctIndex: 1,
            explanation:
              "AI is a research partner: it helps you find and understand real people (SBA). A synthetic persona's praise is fiction, not validation.",
            sourceLessonSlug: "audience-and-message",
          },
          {
            prompt: "Which use of AI crosses the line from research into fabrication?",
            options: [
              "Clustering real, anonymized customer feedback into themes",
              "Drafting neutral survey questions to ask real people",
              "Generating a glowing 'customer' review to post, or a statistic you never measured",
              "Listing competitors so you can go verify each one",
            ],
            correctIndex: 2,
            explanation:
              "Inventing reviews, stats, studies, or demand is fabrication — and illegal in the case of fake reviews. The test is: is it true and can you show why?",
            sourceLessonSlug: "research-not-fabrication",
          },
          {
            prompt: "What's the fix for AI's generic, forgettable default voice?",
            options: [
              "Publish the raw draft faster",
              "Feed AI your own voice and rewrite the draft with specific, true details only you know",
              "Add more buzzwords like 'revolutionary' and 'unlock'",
              "Use a longer prompt and ship it unedited",
            ],
            correctIndex: 1,
            explanation:
              "Your voice is your edge. Treat AI output as raw clay; rewrite the opening and ending and add verified specifics (Google rewards real first-hand experience).",
            sourceLessonSlug: "content-with-your-voice",
          },
          {
            prompt: "What must you ALWAYS do with AI-drafted social, email, blog, or SEO content before it reaches a real person?",
            options: [
              "Nothing — AI output is ready to publish",
              "Edit it into your voice and fact-check every claim, number, and source",
              "Translate it into more formal language",
              "Make it as long as possible",
            ],
            correctIndex: 1,
            explanation:
              "AI hallucinates confidently. Verify every number, date, price, quote, and 'study,' and write for people — mass AI pages to game rankings violate Google's spam policies.",
            sourceLessonSlug: "drafting-social-email-blog-seo",
          },
          {
            prompt: "Why keep a written one-page 'brand kit' and paste it atop your prompts?",
            options: [
              "It makes content longer",
              "It keeps voice, message, and look consistent so AI doesn't drift into a different style each time",
              "It guarantees you can copyright everything AI makes",
              "It replaces the need to edit",
            ],
            correctIndex: 1,
            explanation:
              "Generated independently, each piece drifts. A brand kit keeps a recognizable voice and values across every channel — while staying specific, not robotic.",
            sourceLessonSlug: "brand-consistency",
          },
          {
            prompt: "Your friend will post a 5-star review if you send a free product. What does FTC guidance say?",
            options: [
              "It's fine — they're a real person, so no rules apply",
              "The free product is a material connection you must disclose clearly and conspicuously; and fabricated/undisclosed reviews can be illegal",
              "You can present it as an independent review as long as it's positive",
              "Only large companies have to disclose anything",
            ],
            correctIndex: 1,
            explanation:
              "A free product is a material connection requiring clear disclosure (FTC, Disclosures 101), and fake or undisclosed reviews fall under the FTC's fake-reviews rule (16 CFR Part 465).",
            sourceLessonSlug: "the-law-and-ethics",
          },
          {
            prompt: "According to the U.S. Copyright Office, can you copyright a logo made from a single AI prompt?",
            options: [
              "Yes — whatever AI generates for you is automatically yours",
              "No — purely AI-generated output isn't protected; copyright needs human authorship, and prompting alone isn't enough",
              "Yes, if your prompt was detailed enough",
              "Only if you paid for the AI tool",
            ],
            correctIndex: 1,
            explanation:
              "The Copyright Office (2025) requires human authorship; prompting alone is insufficient. Your human edits, arrangement, and original writing are what's protectable.",
            sourceLessonSlug: "the-law-and-ethics",
          },
          {
            prompt: "Which is a sign of 'AI slop' that erodes trust?",
            options: [
              "A post with a specific, true customer result you have permission to share",
              "Generic, could-be-anyone content with a confident made-up statistic and hollow hype",
              "Three carefully edited posts you're proud of",
              "Disclosing clearly that customers are chatting with a bot",
            ],
            correctIndex: 1,
            explanation:
              "Slop is interchangeable, often-wrong, hype-filled content published without care. The fix is specific, verified detail and quality over volume.",
            sourceLessonSlug: "avoiding-ai-slop",
          },
          {
            prompt: "Which of these is a VANITY metric rather than a metric that actually matters?",
            options: [
              "Sign-ups and replies your content caused",
              "Paying customers and revenue from a channel",
              "Raw follower count and likes in isolation",
              "Conversion rate from people who saw the content",
            ],
            correctIndex: 2,
            explanation:
              "Likes and follower counts look impressive but don't show real outcomes. Measure action, conversion, customers, and retention against a baseline.",
            sourceLessonSlug: "measure-what-works",
          },
          {
            prompt: "What's the trust-DNA bottom line for marketing with AI in this course?",
            options: [
              "Use AI to fake demand and reviews so you grow faster",
              "Use AI to be better and faster — authentic, disclosed, and cited — never to be fake or hollow",
              "Publish as much AI content as possible to win on volume",
              "Hide that AI was involved at all costs",
            ],
            correctIndex: 1,
            explanation:
              "Authentic + disclosed + cited: AI helps you research and draft, but you keep your voice, verify claims, disclose connections, and never fabricate.",
            sourceLessonSlug: "avoiding-ai-slop",
          },
        ],
      },
    },
  ],
};
