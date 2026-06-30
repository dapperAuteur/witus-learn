// Authored "AI for Entrepreneurs" — F4, the entrepreneurship-track AI course on the
// ElementaryMBA school (older/teen + young-adult track). Sibling to F1 (AI Literacy)
// and F2 (Building with AI), which are the recommended prerequisites. Practical,
// ethical, hype-free: where AI actually helps a small business (and where it doesn't),
// finding a real problem, customer research / content / ops without losing your voice,
// prototyping an MVP, the true cost of AI tools, the legal/ethical basics (disclosure,
// copyright, privacy, no deception), protecting trust and brand from AI slop, measuring
// ROI, and a capstone AI-assisted business plan. Carries the platform's trust DNA:
// verify, cite, don't ship slop. Grouped into four sections (Where AI Helps · Build
// Something Real · Money, Law & Ethics · Trust & Decide). Cited with real, verifiable
// sources: NIST AI RMF 1.0; the FTC ("Keep your AI claims in check," the fake-reviews
// final rule, and the influencer disclosure / Endorsement Guides); the U.S. Copyright
// Office's "Copyright and AI, Part 2: Copyrightability"; and the U.S. SBA's business
// guide (market research; write your business plan). Two fill-in exercises + a final
// quiz whose every question links to the lesson that teaches it.

import type { AuthoredCourse } from "./authored-course";

export const AI_ENTREPRENEURS_COURSE: AuthoredCourse = {
  title: "AI for Entrepreneurs",
  description:
    "Use AI to build a real, honest business — without the hype. Learn where AI genuinely helps a small business (and where it doesn't), how to find a problem worth solving, how to run customer research and make content and handle ops without losing your voice, how to prototype an MVP, what AI tools actually cost, the legal and ethical basics (disclosure, copyright, privacy, never deceiving customers), how to protect your brand from AI slop, and how to measure whether it's even worth it. Ends with an AI-assisted business plan you can actually use. F1 (AI Literacy) and F2 (Building with AI) are the recommended prerequisites.",
  lessons: [
    // ── Section 1 · Where AI Helps ────────────────────────────────────────────
    {
      slug: "where-ai-helps",
      title: "1 · Where AI actually helps a business (and where it doesn't)",
      section: "Where AI Helps",
      body: `Forget the hype for a minute. AI is not a magic founder, and it will not run your business for you. It is a fast, tireless, sometimes-wrong assistant. The entrepreneurs who win with it know **exactly** which jobs to hand it and which to keep.

**Where AI genuinely earns its keep in a small business:**

- **First drafts of anything written** — emails, product descriptions, social posts, FAQs, outlines. You edit; it never starts you at a blank page.
- **Summarizing and sorting** — boil down customer reviews, survey answers, or a long supplier contract into the key points.
- **Customer-research help** — generating interview questions, clustering feedback into themes, drafting a survey (you still talk to real humans — Lesson 4).
- **Routine ops** — categorizing support messages, drafting replies for you to approve, turning a messy spreadsheet into a clean one.
- **Brainstorming and naming** — many options fast, so you can pick and refine rather than invent from zero.

**Where AI does NOT belong without a human firmly in charge:**

- **Your final say on money, law, hiring, or safety.** It can draft; it can't be accountable. You sign your name, not the model.
- **Facts, prices, stats, and quotes a customer will rely on.** Models confidently make things up (a "hallucination" — see F1). Verify before you publish.
- **Your actual relationships.** A real conversation with a real customer is the most valuable thing in a young business. Don't automate that away.

The honest framing comes straight from NIST's AI Risk Management Framework: trustworthy AI is **"valid and reliable,"** and you get there by designing the human oversight *around* the model, not by trusting it (NIST, 2023). For a founder that means: **AI drafts, you decide.**

**Check yourself.** Name one job in a business you'd happily hand AI, and one you'd never let it make the final call on — and say why.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — see "Valid and Reliable" and human oversight. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "find-a-real-problem",
      title: "2 · Finding a real problem worth solving",
      section: "Where AI Helps",
      body: `A business exists because it solves a problem someone will **pay** to make go away. AI can't tell you what that problem is — but it can help you investigate and pressure-test your idea faster.

**Start with a real, painful problem, not a cool tool.** "I have AI, what can I build?" is backwards and it's how most slop startups are born. "People near me keep complaining about X — can I solve it?" is the right direction.

**A founder's loop for finding the problem, with AI as a research assistant:**

1. **Notice a pain.** Something annoying, expensive, slow, or confusing — ideally one you or people around you actually feel.
2. **Use AI to map it.** Ask it to list who has this problem, what they do today, and what existing solutions cost. Treat every claim as a lead to verify, not a fact.
3. **Check it against reality.** Do the **secondary research** the U.S. Small Business Administration recommends — industry trends, who your customers are, what's already out there — then go talk to actual people (Lesson 4) (SBA, n.d.).
4. **Test the "worth solving" bar.** Is the pain frequent? Expensive? Felt by enough people? Are they already paying to fix it? A problem nobody pays to solve is a hobby, not a business.

**Where AI helps vs. fools you here:** it's great at *organizing* your thinking and surfacing questions you hadn't asked. It is *terrible* at telling you whether real people will pay — only customers can answer that. Don't let a confident AI summary substitute for one real conversation.

**Check yourself.** Why is "I have a cool AI tool — now what?" a worse starting point than "people keep complaining about X"?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — secondary research, knowing your market and competition. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },

    // ── Section 2 · Build Something Real ──────────────────────────────────────
    {
      slug: "customer-research",
      title: "3 · Customer research with AI (without skipping real people)",
      section: "Build Something Real",
      body: `The most dangerous mistake a founder makes is building something nobody wants. Customer research is the cure — and AI makes it faster, *if* you keep real humans in the loop.

**What AI is good for in research:**

- **Drafting better questions.** Ask it to turn "do you like my idea?" (a leading, useless question) into open, neutral questions about what people *actually do* today.
- **Designing a quick survey** you then send to real people.
- **Clustering answers.** Paste anonymized responses and ask it to group them into themes and surface the most common pain points — a huge time-saver the SBA calls part of using **direct research** about your specific customers (SBA, n.d.).

**What AI must NOT replace:**

- **The actual conversations.** A model can imagine a customer; it cannot *be* one. "Talk to 10 real people" beats "ask AI what customers think" every time.
- **The truth about willingness to pay.** Only a real person reaching for their wallet (or refusing to) tells you that.

**A trap to avoid: fake personas as evidence.** Asking AI to "role-play my ideal customer" can help you *rehearse* questions — but its answers are made up. Never present a synthetic persona's opinion as real market validation. That's the difference between a rehearsal and a lie to yourself.

> **Trust DNA:** AI can help you *prepare* for and *digest* customer research. It can never *be* the customer. Validation comes from real people, not a convincing simulation.

**Check yourself.** What's the one thing customer research must answer that no AI persona can ever answer for you?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — direct research with your real customers. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "content-without-losing-voice",
      title: "4 · Content and marketing without losing your voice",
      section: "Build Something Real",
      body: `AI can produce endless marketing copy in seconds. That's exactly the danger: endless, generic, soulless copy is **slop**, and customers can smell it. Your voice — the specific, human way you talk about what you do — is one of your few real advantages over bigger competitors. Protect it.

**Use AI as a drafting partner, not a ghost that replaces you:**

- **Feed it *your* voice.** Give it examples of how you actually write and say "match this tone," instead of accepting the default robotic register.
- **Draft, then rewrite in your own words.** Treat the output as raw clay. If you publish it unedited, you're publishing the average of the internet, not *you*.
- **Make it specific.** Replace vague AI filler ("we offer best-in-class solutions") with concrete details only you know — real examples, real numbers you've verified, your actual story.
- **Verify every claim before it goes public.** A made-up statistic or a misquoted "study" in your marketing isn't just embarrassing — depending on the claim, it can be illegal (Lesson 8).

**The two failure modes to avoid:**

1. **Generic slop** — content that could belong to any of a thousand businesses. It builds no trust and no brand.
2. **Confident falsehoods** — AI-written claims you didn't check. These destroy trust the moment a customer catches one.

**A simple rule:** if you'd be embarrassed to have customers know AI wrote it *and you didn't improve it*, don't ship it. Using AI to write faster is fine; using AI to write *worse* and call it done is not.

**Check yourself.** Name the two failure modes of AI-generated marketing content, and the one habit (about *your* writing) that fixes the first one.

## Sources
- Federal Trade Commission. (2023). *Keep your AI claims in check* — performance claims in marketing must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },
    {
      slug: "prototyping-mvp",
      title: "5 · Prototyping and building an MVP with AI",
      section: "Build Something Real",
      body: `A **minimum viable product (MVP)** is the smallest thing you can put in front of real users to learn whether your idea works. The goal is **learning fast and cheap**, not building something perfect. AI is a genuine accelerator here — it can get you to "something real to test" in days instead of months.

**Ways AI speeds up your MVP:**

- **A landing page and pitch** — draft the copy, the headline, the FAQ, so you can test demand *before* you build anything.
- **A clickable prototype or simple app** — AI coding assistants can scaffold a basic version (this is exactly what F2, *Building with AI*, teaches). For many ideas, no-code tools plus an AI step are enough to start.
- **A "concierge MVP"** — you do the work manually behind the scenes and use AI to help you keep up, before automating anything. Learn what customers actually want first.

**The founder's discipline that keeps an MVP honest:**

- **Build the *least* you can to test the *riskiest* assumption.** If you're not sure people will pay, a landing page with a "buy" button teaches you more than a finished app.
- **Verify and review what AI builds.** Generated code can be subtly wrong or insecure (F2 covers this). You're still the engineer of record, even for a prototype.
- **Don't fall in love with the build.** The MVP is a question you're asking the market, not a monument. Be ready to change it — or kill it — based on what you learn.

> **Trust DNA:** an MVP's job is to *get you real information* as cheaply as possible. AI helps you build it faster — it doesn't excuse you from testing it on real people or from reviewing what it generated.

**Check yourself.** What is the actual goal of an MVP — and why might a landing page sometimes teach you more than a finished app?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis* — test your concept against real demand before scaling. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — keep human review around AI-built components. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "practice-build-it",
      title: "6 · Practice: where AI fits in building",
      section: "Build Something Real",
      exercise: {
        instructions:
          "Fill in the missing founder term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "The smallest version of a product you put in front of real users to learn fast and cheap is an ___ (3 letters).",
            answer: "MVP",
            accept: ["mvp", "minimum viable product"],
            explanation: "An MVP's job is to learn, not to be perfect — test the riskiest assumption with the least build.",
          },
          {
            prompt: "Generic, soulless AI-written content that any business could have published is called ___.",
            answer: "slop",
            accept: ["ai slop"],
            explanation: "Slop builds no trust and no brand — feed AI your voice and rewrite the draft in your own words.",
          },
          {
            prompt: "AI can help you draft survey questions, but real ___ must come from talking to actual people.",
            answer: "validation",
            accept: ["customer validation", "research"],
            explanation: "A model can imagine a customer; only real people tell you if they'll actually pay.",
          },
          {
            prompt: "Start from a real, painful ___ people will pay to solve — not from 'I have a cool AI tool.'",
            answer: "problem",
            accept: ["pain", "pain point"],
            explanation: "A problem nobody pays to solve is a hobby, not a business.",
          },
          {
            prompt: "Before publishing any AI-drafted marketing claim, you must ___ it.",
            answer: "verify",
            accept: ["check", "fact-check", "fact check"],
            explanation: "Made-up stats or misquoted studies destroy trust — and some claims are illegal (see the FTC lesson).",
          },
        ],
      },
    },

    // ── Section 3 · Money, Law & Ethics ───────────────────────────────────────
    {
      slug: "cost-of-ai-tools",
      title: "7 · What AI tools really cost (tokens, subscriptions, and the bill)",
      section: "Money, Law & Ethics",
      body: `"Free" AI rarely stays free at business scale, and surprise bills have killed real projects. Before you build a workflow on an AI tool, understand how you actually pay for it.

**The three ways AI tools charge you:**

- **Subscriptions (flat monthly).** A set fee for a chat tool, a writing assistant, an AI feature inside software you already use. Predictable — but it adds up fast across many tools, and "AI add-on" upsells stack.
- **Usage / pay-per-token (APIs).** If you build with a model's API, you pay per **token** — the chunk a model reads and writes, roughly ¾ of a word (see F2). **Both your input and the model's output cost tokens.** Long prompts and long answers cost more, every single call.
- **Per-seat or per-action.** Some tools bill per team member or per task performed.

**Estimate before you commit.** A rough usage estimate for an API-based feature:

> tokens per request × requests per day × the model's per-token price

A feature that's "basically free" while you test it can become a real monthly bill once hundreds of customers use it. Founders get burned by skipping this math.

**Control the spend like an owner:**

- **Cap output length** and keep prompts lean — you pay for both.
- **Use a cheaper/smaller model** for easy tasks; save the expensive model for the hard ones.
- **Cache repeated answers** instead of regenerating them.
- **Audit your subscriptions quarterly.** Cancel the AI tools you stopped using. "I forgot I was paying for it" is a silent profit leak.
- **Compare total cost to value.** A $50/month tool that saves you 10 hours is a bargain; five $20 tools you barely touch is waste.

**Check yourself.** When you build with a model's API, what unit do you pay for — and name two things that make a single request cost more.

## Sources
- National Institute of Standards and Technology. (2024). *AI RMF Generative AI Profile (NIST AI 600-1)* — cost and resource considerations of generative AI use. https://doi.org/10.6028/NIST.AI.600-1
- U.S. Small Business Administration. (n.d.). *Write your business plan* — account for tool and operating costs in your financials. https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan`,
    },
    {
      slug: "legal-ethical-basics",
      title: "8 · The legal and ethical basics every founder must know",
      section: "Money, Law & Ethics",
      body: `Using AI doesn't lower the legal bar — in some areas it raises it. You don't need to be a lawyer, but you must know these four basics, because getting them wrong can mean fines, lawsuits, or a dead brand. (This is general education, not legal advice — for your specific situation, ask a real lawyer.)

**1 · Don't deceive customers about your product.** Marketing claims have to be truthful and backed up. The FTC has been explicit that **AI performance claims must be substantiated** — you can't say your product "uses AI" if it doesn't, or exaggerate what it does (FTC, 2023). "The AI said so" is not a defense.

**2 · No fake reviews, fake testimonials, or fake hype.** It is now **illegal under an FTC rule** to create, buy, or sell fake reviews and testimonials, or fake indicators of social-media influence like bought followers — with civil penalties per violation (FTC, 2024). AI makes generating fake reviews trivially easy; that doesn't make it legal. Don't.

**3 · Disclose paid endorsements and material connections.** If someone endorses your product and has a **material connection** to you (you paid them, gave free product, or they're family or staff), that connection must be disclosed **clearly and conspicuously** — "difficult to miss and easily understandable" (FTC, n.d.). The same applies to *you* endorsing things. Burying "#ad" where no one sees it doesn't count.

**4 · Know the copyright limits on AI output.** The U.S. Copyright Office has stated that **purely AI-generated material is not protected by copyright** — copyright requires human authorship, and **prompting alone is not enough** to make an AI's output yours (U.S. Copyright Office, 2025). Practical meaning for a founder: a logo or jingle you got from a single prompt may not be something you can legally *own or stop others from copying*. Your *human* creative contributions are what's protectable. Also: respect others' copyrights and your AI tools' terms of use.

**And always: privacy.** Don't paste customers' personal data into public AI tools (it may be stored or used to train the model), and tell customers honestly how you use their data.

**Check yourself.** A friend offers to post a glowing review of your product in exchange for a free unit. Name two FTC problems with treating that as an ordinary "real" review.

## Sources
- Federal Trade Commission. (2023). *Keep your AI claims in check* — AI claims must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check
- Federal Trade Commission. (2024). *Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials* (16 CFR Part 465). https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
- Federal Trade Commission. (n.d.). *Disclosures 101 for Social Media Influencers* — disclose material connections clearly and conspicuously. https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- U.S. Copyright Office. (2025). *Copyright and Artificial Intelligence, Part 2: Copyrightability* — human authorship required; prompting alone is insufficient. https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf`,
    },

    // ── Section 4 · Trust & Decide ────────────────────────────────────────────
    {
      slug: "protect-trust-and-brand",
      title: "9 · Avoiding AI slop and protecting trust and your brand",
      section: "Trust & Decide",
      body: `In a young business, **trust is your most valuable and most fragile asset.** It takes a long time to build and one bad moment to lose. AI can help you serve customers better — or it can torch your reputation faster than you can apologize. The difference is discipline.

**How AI slop quietly damages a brand:**

- **Generic everything.** When your emails, posts, and replies all sound like a default chatbot, customers feel like a number, not a person. Sameness is the opposite of a brand.
- **Confident wrong answers.** An AI chatbot that invents a return policy, a price, or a fact creates a promise *you* now have to honor — or a customer you've misled.
- **Obvious automation where humans were promised.** "Talk to us!" that's secretly a bot, with no way to reach a person, breaks trust the moment someone notices.

**The founder's playbook for trustworthy AI use:**

- **Be honest that it's AI.** If customers are talking to a bot, tell them, and give them a clear path to a human. NIST's framework treats this transparency and human-fallback as core to trustworthy AI (NIST, 2023).
- **Keep your voice and your standards.** Edit AI output to sound like you and meet your quality bar. Never ship the raw default.
- **Verify before it reaches a customer.** Every factual claim, price, and policy an AI states on your behalf is a promise. Check it.
- **Keep a human on anything that matters.** Refunds, complaints, sensitive situations, public statements — a person decides, not the model.
- **Don't trade long-term trust for short-term speed.** The fake review, the unedited slop, the bot pretending to be a person — they all buy a little speed now and cost you the relationship later.

> **Trust DNA, founder's edition:** customers will forgive a small honest business that's clearly *trying*. They will not forgive being deceived. Use AI to be *better and faster* — never to be fake.

**Check yourself.** Give one example of AI use that builds customer trust and one that destroys it — and name what separates them.

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — transparency, accountability, and human oversight as traits of trustworthy AI. https://www.nist.gov/itl/ai-risk-management-framework
- Federal Trade Commission. (2024). *Final Rule Banning Fake Reviews and Testimonials* — deceptive trust signals are illegal, not just unwise. https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials`,
    },
    {
      slug: "measure-the-roi",
      title: "10 · Measuring whether AI is actually worth it",
      section: "Trust & Decide",
      body: `It's easy to *feel* productive with AI and still lose money. A founder's job is to know — with numbers — whether a tool earns its place. This is the **measure** discipline: don't *hope* it's working, **check**.

**Pick a metric before you adopt the tool.** "Is this AI tool worth it?" only has an answer if you decided in advance what "worth it" means. Common, honest metrics:

- **Time saved** — hours per week back in your pocket (and what those hours are worth to the business).
- **Money** — does it raise revenue, cut costs, or just cost money? Compare the tool's price (Lesson 7) to the value it produces.
- **Quality** — are customers happier, or are you shipping faster *and worse*? Track complaints and rework, not just speed.
- **Trust** — any uptick in confusion, errors, or "is this a bot?" frustration is a hidden cost.

**Run a small, honest test:**

1. **Measure your baseline** before the tool — how long the task takes, what it costs, the error rate.
2. **Try the AI tool for a fixed window** on a real slice of the work.
3. **Compare.** Faster *and* at least as good *and* worth the price? Keep it. Otherwise, drop it without sentiment.

**Beware the productivity illusion.** Generating ten drafts feels busy, but if you spend longer fixing AI mistakes than you saved, you've lost. And a tool that's fast but lowers quality can cost you customers — the most expensive kind of "savings." NIST's framework frames this as continuously **measuring and managing** the AI you've deployed rather than assuming it helps (NIST, 2023).

**Check yourself.** Why isn't "I generated a lot of stuff quickly" proof that an AI tool is worth it — and what should you compare it against instead?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — the "Measure" and "Manage" functions. https://www.nist.gov/itl/ai-risk-management-framework
- U.S. Small Business Administration. (n.d.). *Write your business plan* — tie tools and spending to real financial outcomes. https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan`,
    },
    {
      slug: "capstone-business-plan",
      title: "11 · Capstone: your AI-assisted business plan",
      section: "Trust & Decide",
      exercise: {
        instructions:
          "Build the spine of a real, honest business plan — using AI as a drafting assistant and your own judgment as the decider. Work through all six pieces below for YOUR own idea (write them out somewhere: a doc, a notebook, or by asking an AI tool to help you draft and then verifying and rewriting in your own words). Each item here names a piece and asks you to type the ONE KEYWORD shown in bold to confirm you've drafted it — the explanation then shows what a strong version of that piece does. The real work is your written plan; this just walks you through the checklist.",
        items: [
          {
            prompt: "PIECE 1 — Write one sentence naming the real, painful PROBLEM your business solves and for whom. Done? Type the keyword: problem",
            answer: "problem",
            hint: "Start from a pain real people feel and would pay to remove — not from a cool tool.",
            explanation: "A strong answer names a specific person and a specific, frequent or expensive pain (Lesson 2). A problem nobody pays to solve is a hobby.",
          },
          {
            prompt: "PIECE 2 — Write down one way you'll get CUSTOMER proof from REAL people (not an AI persona). Done? Type the keyword: customers",
            answer: "customers",
            accept: ["customer"],
            hint: "Interviews, a survey to real people, a landing-page test, pre-orders.",
            explanation: "AI helps you prepare and digest research; only real people prove willingness to pay (Lessons 3–5).",
          },
          {
            prompt: "PIECE 3 — Describe the SMALLEST thing (your MVP) you could put in front of users to test your riskiest assumption. Done? Type the keyword: mvp",
            answer: "mvp",
            accept: ["minimum viable product"],
            hint: "A landing page, a clickable prototype, a manual 'concierge' version.",
            explanation: "The MVP's job is to learn fast and cheap. Build the least that tests the riskiest assumption (Lesson 5).",
          },
          {
            prompt: "PIECE 4 — Write how you'll make MONEY and estimate what your AI tools cost (subscription or per-token). Done? Type the keyword: money",
            answer: "money",
            accept: ["cost", "revenue"],
            hint: "Name your revenue model and estimate tool cost: tokens/request × requests/day × price, or monthly subscriptions.",
            explanation: "Compare what AI tools cost to the value they produce, and audit subscriptions (Lesson 7).",
          },
          {
            prompt: "PIECE 5 — Write one LEGAL/ethical rule you'll follow (disclosure, no fake reviews, copyright, or privacy). Done? Type the keyword: legal",
            answer: "legal",
            accept: ["ethics", "ethical"],
            hint: "E.g. 'disclose paid endorsements clearly,' 'no fake reviews,' 'don't paste customer data into public AI tools.'",
            explanation: "Substantiate claims, no fake reviews, disclose material connections, respect copyright and privacy (Lesson 8).",
          },
          {
            prompt: "PIECE 6 — Write how you'll protect TRUST and the one metric that tells you if AI is worth it. Done? Type the keyword: trust",
            answer: "trust",
            hint: "E.g. 'tell customers when it's a bot + offer a human; measure hours saved vs. the tool's cost.'",
            explanation: "Be honest it's AI, keep a human on what matters, and measure against a baseline — drop tools that don't earn their place (Lessons 9–10).",
          },
        ],
      },
    },
    {
      slug: "ai-for-entrepreneurs-quiz",
      title: "12 · Check your understanding",
      section: "Trust & Decide",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What's the most honest way for a founder to think about AI in their business?",
            options: [
              "A magic founder that runs the business for you",
              "A fast, sometimes-wrong assistant: AI drafts, you decide",
              "A guaranteed source of true facts and prices",
              "A replacement for talking to customers",
            ],
            correctIndex: 1,
            explanation:
              "Trustworthy AI is 'valid and reliable' with human oversight around it (NIST). AI drafts; you stay accountable for money, law, and facts.",
            sourceLessonSlug: "where-ai-helps",
          },
          {
            prompt: "Which is the right way to START looking for a business idea?",
            options: [
              "\"I have a cool AI tool — what can I build?\"",
              "Copy whatever startup is trending",
              "\"People keep complaining about X — can I solve a problem they'll pay to remove?\"",
              "Ask AI to invent a guaranteed winner",
            ],
            correctIndex: 2,
            explanation:
              "Start from a real, painful problem people pay to solve, then research it (SBA). Starting from a tool is how slop businesses are born.",
            sourceLessonSlug: "find-a-real-problem",
          },
          {
            prompt: "What's the one thing customer research must establish that no AI persona can give you?",
            options: [
              "A list of survey questions",
              "Whether real people will actually pay",
              "A summary of themes",
              "A catchy product name",
            ],
            correctIndex: 1,
            explanation:
              "AI helps you prepare and digest research, but only real people reaching for their wallet prove willingness to pay (SBA).",
            sourceLessonSlug: "customer-research",
          },
          {
            prompt: "What's the fix for generic AI marketing 'slop'?",
            options: [
              "Publish more of it, faster",
              "Feed AI your own voice and rewrite the draft in your own words, with specifics you've verified",
              "Use a longer prompt and ship it unedited",
              "Add more buzzwords",
            ],
            correctIndex: 1,
            explanation:
              "Slop builds no brand and no trust. Use AI as raw clay, then make it specific, truthful, and yours — and verify every claim.",
            sourceLessonSlug: "content-without-losing-voice",
          },
          {
            prompt: "What is the actual goal of a minimum viable product (MVP)?",
            options: [
              "To be a finished, perfect product",
              "To impress investors with polish",
              "To learn fast and cheap whether the idea works, by testing the riskiest assumption",
              "To use as much AI as possible",
            ],
            correctIndex: 2,
            explanation:
              "An MVP exists to get real information cheaply — sometimes a landing page teaches more than a finished app. Still review what AI builds.",
            sourceLessonSlug: "prototyping-mvp",
          },
          {
            prompt: "When you build with a model's API, what do you actually pay for?",
            options: [
              "A one-time flat fee forever",
              "Per token — both your input and the model's output — so long prompts and answers cost more",
              "Per user only",
              "Nothing; APIs are free",
            ],
            correctIndex: 1,
            explanation:
              "Estimate tokens/request × requests/day × per-token price. A feature that's free in testing can be a real bill at scale.",
            sourceLessonSlug: "cost-of-ai-tools",
          },
          {
            prompt: "Your friend will post a 5-star review if you give them a free product. What does FTC guidance require / prohibit?",
            options: [
              "Nothing — it's a real person, so it's fine",
              "You must disclose the material connection clearly and conspicuously; and fabricated/undisclosed reviews can be illegal",
              "You can post it as an independent review if it's positive",
              "Only big companies have to disclose",
            ],
            correctIndex: 1,
            explanation:
              "Material connections (free product, payment, family/staff) must be disclosed clearly; fake/undisclosed reviews fall under the FTC's fake-reviews rule.",
            sourceLessonSlug: "legal-ethical-basics",
          },
          {
            prompt: "According to the U.S. Copyright Office, can you copyright a logo you got from a single AI prompt?",
            options: [
              "Yes — whatever AI makes for you is automatically yours",
              "Purely AI-generated output isn't protected; copyright needs human authorship, and prompting alone isn't enough",
              "Yes, if the prompt was very detailed",
              "Only if you paid for the AI tool",
            ],
            correctIndex: 1,
            explanation:
              "The Copyright Office (2025) requires human authorship; prompting alone is insufficient. Your human creative contributions are what's protectable.",
            sourceLessonSlug: "legal-ethical-basics",
          },
          {
            prompt: "Which AI use BUILDS customer trust rather than destroying it?",
            options: [
              "A bot that pretends to be a human with no way to reach a person",
              "Telling customers when they're talking to AI and giving a clear path to a human",
              "Posting AI-written fake reviews to look popular",
              "Letting a chatbot invent your return policy",
            ],
            correctIndex: 1,
            explanation:
              "Transparency and a human fallback are core to trustworthy AI (NIST). Deception buys speed now and costs the relationship later.",
            sourceLessonSlug: "protect-trust-and-brand",
          },
          {
            prompt: "Why isn't 'I generated a lot of stuff quickly' proof that an AI tool is worth it?",
            options: [
              "Speed always equals value",
              "Because you must compare it to a baseline — time, cost, and quality — or fixing AI mistakes can cost more than you saved",
              "Because AI tools are always free",
              "Because quality never matters",
            ],
            correctIndex: 1,
            explanation:
              "Measure against a baseline (NIST 'Measure/Manage'): faster AND at least as good AND worth the price — otherwise drop it.",
            sourceLessonSlug: "measure-the-roi",
          },
        ],
      },
    },
  ],
};
