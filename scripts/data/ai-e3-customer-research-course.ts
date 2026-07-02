// Authored "AI Customer Research & Validation": E3, the entrepreneur-track course on the
// ElementaryMBA school (teen + young-adult founders). Sibling/sequel to F4 (AI for
// Entrepreneurs), which introduces "AI drafts, you decide" and finding a real problem.
// This course goes deep on the single hardest founder skill: validating that a real need
// exists, with REAL people and reality, not with an agreeable chatbot that tells you what
// you want to hear. Covers: a real problem vs a guess; why AI can prep and summarize but
// can never BE a customer ("get out of the building"); designing unbiased interview
// questions and surveys; synthesizing research without inventing findings; the danger of
// confirmation bias and a sycophantic AI agreeing with you; honest market sizing (TAM/SAM/SOM);
// building and testing an MVP / landing page; reading the real signal (sign-ups and payments
// vs likes); when to pivot vs persevere; and a validation-plan capstone. Carries the platform's
// trust DNA: validate with REALITY, not a chatbot that mirrors you. Grouped into four sections
// (Is It a Real Problem? · Talk to Real People · Read the Signal · Decide). Cited with real,
// verifiable sources: the U.S. SBA (market research & competitive analysis: secondary/direct
// research, market sizing, competitor analysis); Steve Blank's customer-development /
// customer-discovery work ("there are no facts inside the building, get out of the building");
// the FTC ("Keep your AI claims in check": truthful, substantiated claims, incl. on a landing
// page); and NIST on bias (the AI RMF 1.0 trustworthy-AI characteristics, and SP 1270 on
// human/cognitive biases such as confirmation and automation bias). Two fill-in exercises +
// a final quiz whose every question links to the lesson that teaches it.

import type { AuthoredCourse } from "./authored-course";

export const AI_E3_CUSTOMER_RESEARCH_COURSE: AuthoredCourse = {
  title: "AI Customer Research & Validation",
  description:
    "The #1 way startups die is building something nobody wants. This course teaches you to validate a real need with REAL people and reality, not by asking an agreeable AI that mirrors your hopes back to you. Learn the difference between a real problem and a guess; why AI can prep your questions and summarize answers but can never BE a customer; how to design unbiased interviews and surveys; how to synthesize research without inventing findings; how to spot confirmation bias and a sycophantic chatbot agreeing with you; how to size a market honestly; how to build and test an MVP and a landing page; how to read the real signal (sign-ups and payments, not likes); and when to pivot or persevere. Ends with a validation plan you can run this week. F4 (AI for Entrepreneurs) is the recommended prerequisite.",
  lessons: [
    // ── Section 1 · Is It a Real Problem? ─────────────────────────────────────
    {
      slug: "real-problem-vs-a-guess",
      title: "1 · A real problem vs. a guess you fell in love with",
      section: "Is It a Real Problem?",
      body: `Most startups don't fail because the product was buggy. They fail because they built something **nobody actually wanted**. That risk (building the wrong thing) is the single biggest danger in any new venture, bigger than any technical problem (Blank, 2013). Customer research exists to kill that risk early, while it's still cheap.

The trap is that a guess feels exactly like the truth from inside your own head. You imagine a customer, imagine their pain, imagine them paying, and your brain rewards you for the daydream. Steve Blank put the cure bluntly: **"There are no facts inside your building, so get outside"** (Blank, 2013). The facts live with real people, not in your imagination, and not inside an AI chatbot, which is also "inside the building."

**A guess vs. a validated need:**

| A guess (feels true) | A validated need (is true) |
| --- | --- |
| "People would *probably* love this." | Real people described this exact pain, unprompted. |
| "I'd use it, so others will." | Strangers (not just friends) feel the pain too. |
| "AI agreed it's a great idea." | People changed behavior or paid to solve it. |
| Built on imagination | Built on evidence from outside your head |

**Where AI fits, and where it fools you:** AI is genuinely useful for *mapping* a problem space, listing who might have a pain, and organizing your thinking. But asking an AI "is this a good idea?" is just a fancy way of talking to yourself. It wasn't there. It can't feel the pain. And (as you'll see in Lesson 6) it has a habit of agreeing with you. **AI helps you investigate a problem; it cannot validate one.**

> **Trust DNA:** validation comes from *reality* (what real people say and do), not from a confident summary, and never from a chatbot telling you you're right.

**Check yourself.** What does "there are no facts inside your building" mean for a founder who keeps refining their idea by chatting with an AI instead of talking to people?

## Sources
- Blank, S. (2013). *The Customer Development Manifesto* / "There are no facts inside your building, so get outside." The core risk is building something nobody wants; facts live with customers, not in the building. https://steveblank.com/category/customer-development-manifesto/
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Market research lowers your risk by confirming (or correcting) your idea before you build. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "ai-prepares-not-replaces",
      title: "2 · What AI can and can't do in customer research",
      section: "Is It a Real Problem?",
      recallContent: [
        {
          prompt: "Where do the facts about your idea live, according to Steve Blank?",
          answer: "Outside the building, with real people, not in your imagination and not inside an AI chatbot. As Blank put it, there are no facts inside your building, so get outside.",
        },
        {
          prompt: "Can AI validate whether your idea solves a real problem?",
          answer: "No. AI can help you investigate and map a problem, but it cannot validate one. Validation comes from real people describing the pain and then changing behavior or paying.",
        },
      ],
      body: `AI is a powerful research *assistant* and a terrible research *substitute*. Knowing exactly which is which is the whole skill. Get it wrong and you'll mistake a rehearsal for the real thing.

**What AI is genuinely good for (the "prep and digest" jobs):**

- **Drafting better questions.** Turn a leading question like "do you like my idea?" into open, neutral ones about what people *actually do* today (Lesson 4).
- **Designing a first-draft survey** that you then send to real people.
- **Summarizing and clustering** anonymized answers into themes after you've collected them, a real time-saver.
- **Mapping the landscape:** who might have this problem, what alternatives exist, what to go investigate. The SBA calls this **secondary research**: fast, general, and a starting point, not an answer (SBA, n.d.).

**What AI can NEVER do (the "be the customer" jobs):**

- **Be a real customer.** A model can imagine a buyer; it cannot *be* one. Its made-up answer is not market evidence.
- **Tell you if people will pay.** Only a real person reaching for their wallet (or refusing to) answers that.
- **Replace the conversation.** The most valuable thing in a young business is a real exchange with a real person. Don't automate it away.

**The line that keeps you honest:** AI handles the work *before* the conversation (prep) and *after* it (digest). The conversation itself (the only part that produces facts) is yours, with real humans. This is exactly the difference between **secondary** research (existing sources) and **direct** research (surveys, interviews, focus groups with your actual customers) that the SBA draws (SBA, n.d.). You need both, and AI only helps with one side of it.

> **Trust DNA:** AI prepares you for reality and helps you digest it. It is never a stand-in for reality.

**Check yourself.** Name one research job you'd happily hand AI and one you must never let it do, and say why the second one can't be faked.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Secondary research (existing sources) vs. direct research (surveys, interviews, focus groups with your customers). https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- Blank, S. (2013). *Customer Development Manifesto*. Customer discovery is a series of real conversations to learn who the customer is and what the problem really is. https://steveblank.com/category/customer-development-manifesto/`,
    },

    // ── Section 2 · Talk to Real People ───────────────────────────────────────
    {
      slug: "unbiased-interview-questions",
      title: "3 · Designing interview questions that get the truth",
      section: "Talk to Real People",
      recallContent: [
        {
          prompt: "Which research jobs is AI genuinely good for?",
          answer: "The prep and digest jobs: drafting better questions, designing a first-draft survey, summarizing or clustering answers after you collect them, and mapping the landscape (secondary research).",
        },
        {
          prompt: "What can AI never do in customer research?",
          answer: "Be a real customer, tell you whether people will actually pay, or replace the real conversation. Those produce the facts, and they have to come from real humans.",
        },
      ],
      body: `The fastest way to fool yourself is to ask questions that beg for a yes. People are polite (especially to a friendly founder), so a leading question harvests flattery, not facts. Good customer research is mostly the discipline of **not** asking for the answer you want.

**The cardinal rule: ask about the past and present, not the hypothetical future.** "Would you use an app that does X?" gets a cheap, meaningless "sure!" People are terrible at predicting their own future behavior. "Tell me about the last time you dealt with X. What did you do?" gets a true story you can learn from.

**Bad question → better question:**

| Leading / hypothetical (avoid) | Open / behavioral (use) |
| --- | --- |
| "Don't you hate how slow X is?" | "Walk me through how you handle X today." |
| "Would you pay for a tool that fixes this?" | "What have you tried to fix this? What did it cost you?" |
| "Do you like my idea?" | "What's the most frustrating part of X for you?" |
| "Would you use this?" | "When did you last run into this problem?" |

**Principles for honest interviews:**

- **Ask open, not yes/no.** Open questions surface what you didn't think to ask.
- **Dig into real stories, not opinions.** "What did you actually do?" beats "what do you think?"
- **Don't pitch.** The second you sell your idea, the conversation is about being nice to you, not about the truth. Listen first.
- **Stay neutral.** Don't telegraph the answer you're hoping for in your tone or wording.

**Where AI helps:** paste your draft questions and ask it to flag which ones are leading, hypothetical, or double-barreled, and to rewrite them as open and neutral. AI is good at *spotting bias in wording*. Just remember the SBA frames interviews and surveys as **direct research** with real people. AI tightens the questions; the answers must come from outside the building (SBA, n.d.).

**Check yourself.** Why is "would you use this?" a weak question, and what kind of question gets you a more honest answer?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Direct research methods (interviews, surveys, focus groups, questionnaires) with your real customers. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- Blank, S. (2013). *Customer Development Manifesto*. Get outside the building and let customers, not your pitch, drive the conversation. https://steveblank.com/category/customer-development-manifesto/`,
    },
    {
      slug: "surveys-that-dont-lie",
      title: "4 · Surveys and samples that don't lie to you",
      section: "Talk to Real People",
      recallContent: [
        {
          prompt: "Why ask 'tell me about the last time you dealt with X' instead of 'would you use this?'",
          answer: "Questions about the past and present get a true story you can learn from. Hypothetical future questions get a cheap, polite 'sure!' because people are bad at predicting their own behavior.",
        },
        {
          prompt: "What are the rules for an honest interview?",
          answer: "Ask open questions, not yes/no; dig into real stories, not opinions; don't pitch your idea; and stay neutral so you don't telegraph the answer you're hoping for.",
        },
      ],
      body: `Surveys scale your research beyond the people you can interview, but a sloppy survey produces confident garbage, and a chart makes garbage look like proof. Two things separate a useful survey from a misleading one: **unbiased questions** and an **honest sample**.

**1 · Unbiased questions (same rules as interviews).**

- **No leading wording.** "How much do you love…" assumes the answer. Ask neutrally.
- **One thing per question.** "Is it fast and affordable?" is two questions wearing one coat. Split them.
- **Balanced options.** Don't stack the scale toward the answer you want.
- **Behavior over hypotheticals where you can.** "Have you paid for a solution to X?" beats "would you pay?"

**2 · An honest sample (who you ask).** This is where most founder surveys quietly break:

- **Don't only ask people who'll agree.** Your friends, your followers, and people who already like you aren't your market: they're your fan club. The SBA's whole point is to study your **actual** target market, not a convenient one (SBA, n.d.).
- **Watch the size.** Five enthusiastic friends is an anecdote, not a finding. You need enough responses, from the right people, to trust a pattern.
- **Beware who didn't answer.** If only your biggest fans bothered to respond, your results are skewed before you start (a sampling bias).

**Where AI helps, and the line it must not cross:** AI can draft survey questions, suggest scales, and check your wording for bias. What it must **never** do is **invent responses or fill in "typical" answers**. A survey's value is that the data came from real people; a synthetic answer is a lie dressed as data (Lesson 5 covers this). Use AI to build the instrument, not to fake the results.

**Check yourself.** Name the two ways a survey can mislead you (one about the *questions* and one about *who you ask*) and give a fix for each.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Research your real target market and use direct-research methods like questionnaires and surveys. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "synthesize-without-inventing",
      title: "5 · Using AI to synthesize research, without inventing findings",
      section: "Talk to Real People",
      recallContent: [
        {
          prompt: "What two things separate a useful survey from a misleading one?",
          answer: "Unbiased questions (no leading wording, one idea per question, balanced options) and an honest sample (the right people, enough of them, not just your fan club).",
        },
        {
          prompt: "Why is surveying only your friends and followers a problem?",
          answer: "They're your fan club, not your real target market, so the results are skewed before you start. That is sampling bias.",
        },
      ],
      body: `Once you've collected real interviews and survey answers, you have a pile of messy, raw notes. This is where AI earns its keep: it's excellent at clustering responses into themes and surfacing the most common pains, *if* you keep it on a tight leash. The danger is that a model will smooth over, exaggerate, or outright **fabricate** a finding that sounds plausible.

**How to synthesize honestly with AI:**

- **Feed it only the real data.** Paste your actual (anonymized) responses and ask it to group them into themes and count how often each pain shows up. The output must be *grounded in what people actually said*.
- **Demand traceability.** Ask it to tie each theme back to specific quotes. If it can't point to a real response, the theme isn't real.
- **Watch for invented numbers.** If your notes never mentioned a percentage and the summary now has one, the model made it up. Delete it. A made-up statistic is a hallucination, and shipping it is the opposite of research.
- **Don't let it round up your hopes.** "A couple of people mentioned X" must not become "users overwhelmingly want X." Keep the summary as honest as the raw data.

**The hard rule: no synthetic data as evidence.** Asking AI to "imagine what 50 customers would say" or to "role-play my ideal customer" can help you *rehearse*, but its answers are fiction. Never present a synthetic persona's opinion, or AI-generated "responses," as real market validation. This is the bright line between a rehearsal and lying to yourself. NIST frames trustworthy AI as **valid and reliable** (output you can actually stand behind), which a fabricated finding never is (NIST, 2023).

> **Trust DNA:** AI may *organize* the truth you collected. It may never *invent* truth you didn't.

**Check yourself.** You ask AI to summarize 12 interviews and it reports "73% of users are frustrated by X," but you never recorded any percentages. What do you do, and why?

## Sources
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*. Trustworthy AI is "valid and reliable"; outputs you can stand behind, not fabricated. https://www.nist.gov/itl/ai-risk-management-framework
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Base findings on your real direct-research data, not invented inputs. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "confirmation-bias-and-agreeable-ai",
      title: "6 · Confirmation bias and the danger of an agreeable AI",
      section: "Talk to Real People",
      recallContent: [
        {
          prompt: "When can AI safely help you synthesize research, and when can't it?",
          answer: "It can cluster and count the real, anonymized responses you actually collected, tied back to real quotes. It must never invent findings, numbers, or 'typical' answers you didn't record.",
        },
        {
          prompt: "Why can't a synthetic persona's answer count as market validation?",
          answer: "Because it's fiction, not data from real people. Trustworthy AI output is valid and reliable (NIST); a fabricated finding never is. AI may organize the truth you collected, not invent truth you didn't.",
        },
      ],
      body: `Here's the most important warning in this whole course. The biggest threat to honest validation isn't a lack of data: it's **your own brain looking for reasons to be right**, helped along by an AI that's eager to agree with you.

**Confirmation bias** is the human tendency to notice, believe, and remember evidence that supports what you already think, and to wave away evidence that doesn't. NIST lists exactly this kind of **human / cognitive bias** as a core source of bias in how people use AI systems, alongside **automation bias**, the tendency to over-trust a machine's output just because a computer produced it (NIST, 2022). For a founder, that combination is lethal: you *want* your idea to be good, and the AI *sounds* authoritative, so you believe the parts that flatter you.

**Why AI makes confirmation bias worse, not better:**

- **Models tend to be agreeable.** Many AI assistants are tuned to be helpful and pleasant, which often comes out as **telling you what you want to hear**. Ask "isn't my idea great?" and you'll usually get a yes. That yes is not validation: it's a mirror.
- **You'll cherry-pick its output.** Even a balanced AI answer gives you sentences to quote selectively. Confirmation bias does the picking.
- **Automation bias dresses up the guess.** "The AI confirmed it" *feels* like external proof. It isn't. The AI wasn't there and has no facts about your customers.

**How to fight back:**

- **Try to prove yourself WRONG.** Go looking for the people who *don't* have your problem and the reasons your idea could fail. If it survives that, you have something.
- **Ask the AI to argue against you.** "Give me the 5 strongest reasons this idea fails" beats "is this a good idea?" Use it as a red team, not a cheerleader.
- **Trust behavior over words, including the AI's words.** A stranger's sign-up or payment outweighs a thousand agreeable sentences (Lesson 8).
- **Separate the source from the truth.** A confident tone (yours or the AI's) is not evidence. Only reality is.

> **Trust DNA, the core of this course:** validate with reality, not with an agreeable chatbot. If your only "proof" is that an AI agreed with you, you have no proof.

**Check yourself.** What is confirmation bias, and why does asking an AI "isn't my idea great?" make it worse instead of better?

## Sources
- National Institute of Standards and Technology. (2022). *Towards a Standard for Identifying and Managing Bias in Artificial Intelligence (NIST SP 1270)*. Human/cognitive biases including confirmation bias and automation bias (over-reliance on automated output). https://doi.org/10.6028/NIST.SP.1270
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)*. Manage bias and keep human judgment around AI; don't over-trust the output. https://www.nist.gov/itl/ai-risk-management-framework`,
    },

    // ── Section 3 · Read the Signal ───────────────────────────────────────────
    {
      slug: "market-sizing-honestly",
      title: "7 · Sizing your market honestly (TAM, SAM, SOM)",
      section: "Read the Signal",
      recallContent: [
        {
          prompt: "What are confirmation bias and automation bias, and why are they dangerous together?",
          answer: "Confirmation bias is noticing only the evidence that says you're right; automation bias is over-trusting output just because a computer produced it. Together they make 'the AI agreed' feel like real proof when it isn't.",
        },
        {
          prompt: "How do you fight confirmation bias when you use AI?",
          answer: "Try to prove yourself WRONG, ask the AI for the strongest reasons your idea fails (use it as a red team, not a cheerleader), and trust real behavior over agreeable words.",
        },
      ],
      body: `"It's a billion-dollar market!" is the most abused sentence in startup history. Honest market sizing isn't about the biggest number you can justify: it's about a realistic estimate of how many people have your problem and could actually buy from *you*. The SBA lists the right questions directly: how much demand is there, how big is the market, where are your customers, how saturated is it, and what do competitors charge (SBA, n.d.).

**Three honest layers (a standard founder framing):**

- **TAM: Total Addressable Market.** *Everyone* who has this problem, in theory. The big, exciting number.
- **SAM: Serviceable Addressable Market.** The slice you could actually reach and serve (your geography, your segment, your channel).
- **SOM: Serviceable Obtainable Market.** The realistic share you could actually win in the near term, given competitors and your size. This is the number you plan around.

The honest move is to lead with **SOM**, not TAM. Anyone can claim a giant TAM; a credible founder shows the small, reachable beachhead they can actually win first.

**Build it from the ground up, not the sky down.** "1% of a billion-dollar market" is a fantasy. It assumes a number instead of earning it. A **bottom-up** estimate is honest: *realistic customers × what each pays × how often.* You build it from real, checkable inputs.

**Where AI helps, and where it inflates:** AI can pull together secondary-research starting points (industry size, demographics, competitor pricing) for you to **verify** against the SBA's free federal data and other primary sources (SBA, n.d.). But AI will also happily generate a confident, **made-up** market number if you let it. Treat any figure it gives as a lead to check, never a fact, and never copy a TAM you can't trace to a real source. (Inflating claims to investors or customers also runs into the truthfulness rules in Lesson 9.)

**Check yourself.** Why is leading with a giant "TAM" weaker than showing a realistic "SOM," and what makes a bottom-up estimate more honest than "1% of a huge market"?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Estimate demand and market size, know your competitors' pricing and market saturation; free federal market data. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis`,
    },
    {
      slug: "mvp-and-landing-page-test",
      title: "8 · Building and testing an MVP or landing page",
      section: "Read the Signal",
      recallContent: [
        {
          prompt: "What do TAM, SAM, and SOM mean, and which should you lead with?",
          answer: "TAM is everyone with the problem, SAM is the slice you can reach and serve, SOM is the realistic share you can win near-term. Lead with SOM, not a giant TAM.",
        },
        {
          prompt: "What makes a market estimate honest?",
          answer: "Building it bottom-up from real customers times price times frequency, not '1% of a billion.' Treat any number AI gives you as a lead to verify, never a fact.",
        },
      ],
      body: `Talking to people tells you a lot, but the strongest validation is watching what people **do** when something feels real. That's the job of an **MVP** (minimum viable product) and its smallest cousin, a **landing-page test**: put a real-looking offer in front of real people and measure whether they act, *before* you build the whole thing.

**The cheapest valid test: a landing page.** A single page that explains your offer and has one clear action ("Sign up," "Join the waitlist," "Pre-order") can test demand in days. Drive a little real traffic to it and watch what fraction of strangers take the action. This is exactly the "test your concept against real demand" discipline the SBA points to, done early and cheaply (SBA, n.d.).

**A ladder of tests, cheapest first:**

- **Landing page / waitlist:** do strangers give you their email for this?
- **Pre-sell:** will they put money down before it exists? (The strongest early signal short of a sale.)
- **Concierge MVP:** you deliver the value manually behind the scenes for a few real customers before automating anything.
- **A real, minimal product:** the smallest thing that tests your riskiest assumption.

**Where AI accelerates you:** AI can draft the landing-page copy, headline, and FAQ, and (as F4 / *Building with AI* covers) help scaffold a simple prototype, getting you to "something testable" in hours. That's a great use of AI.

**The line you can't cross: the page must be truthful.** It's tempting to overstate what your not-yet-built product does to juice sign-ups. Don't. The FTC is explicit that claims must be **truthful and substantiated**: you can't promise capabilities (including "AI-powered" features) you can't back up, even on a test page (FTC, 2023). Validate real demand with an honest offer; a sign-up you got by lying validates nothing and can get you in trouble.

**Check yourself.** Why can a simple landing page sometimes teach you more than a finished product, and what's the one rule your test page must follow no matter what?

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Test your concept against real market demand before scaling. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- Federal Trade Commission. (2023). *Keep your AI claims in check*. Product claims, including "AI" claims on your page, must be truthful and substantiated. https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check`,
    },
    {
      slug: "read-the-real-signal",
      title: "9 · Reading the real signal (sign-ups and payments, not likes)",
      section: "Read the Signal",
      recallContent: [
        {
          prompt: "What is the cheapest way to test real demand before building the whole thing?",
          answer: "A landing page with one clear action (sign up, join the waitlist, or pre-order). Drive a little real traffic and watch what fraction of strangers actually act.",
        },
        {
          prompt: "What one rule must every test page follow?",
          answer: "It must be truthful. The FTC requires claims, including 'AI-powered' ones, to be truthful and substantiated even on a test page. A sign-up you got by lying validates nothing.",
        },
      ],
      body: `Now you have data coming in: survey answers, landing-page visits, comments, sign-ups. The skill is telling a **real** signal of demand from a **vanity** one that just feels good. Founders fool themselves by celebrating the metrics that flatter them and ignoring the ones that decide whether they have a business.

**Weak signals (nice, but not proof):**

- **Likes, follows, and "great idea!" comments.** Approval is cheap and polite. It costs the person nothing, so it proves nothing about demand.
- **"I would totally use that."** A hypothetical promise (Lesson 3): words about a future that usually never happens.
- **An AI saying your numbers look promising.** Not a customer. Not evidence.

**Strong signals (cost something, so they count):**

- **Email sign-ups for a real waitlist.** A small cost (their attention + address): a real, if early, vote.
- **Pre-orders and payments.** The strongest signal short of a repeat sale. Money is the most honest survey there is. People reaching for their wallet is the willingness-to-pay that no persona can fake.
- **Repeat use and referrals.** People coming back, or bringing a friend, is demand you can build on.

**The rule of thumb: weight any signal by what it cost the person.** A like costs nothing and means little. A payment costs real money and means a lot. The further someone goes (attention → email → money → repeat → referral), the more you can trust it.

**Where AI helps (carefully):** AI can tally and chart your results and compute simple rates (e.g., sign-ups ÷ visitors). Useful, but don't let a clean dashboard launder a weak signal. **Automation bias** (Lesson 6) makes an AI-generated chart *feel* like proof; the chart is only as good as whether the underlying action cost the person anything (NIST, 2022). A beautiful graph of likes is still a graph of likes.

**Check yourself.** Rank these by how much you'd trust them as proof of demand, and say why: 100 likes, 10 email sign-ups, 3 pre-orders that paid money.

## Sources
- U.S. Small Business Administration. (n.d.). *Market research and competitive analysis*. Measure actual demand from your target market, not surface approval. https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis
- National Institute of Standards and Technology. (2022). *Towards a Standard for Identifying and Managing Bias in AI (NIST SP 1270)*. Automation bias: don't over-trust a metric just because software produced the chart. https://doi.org/10.6028/NIST.SP.1270`,
    },

    // ── Section 4 · Decide ────────────────────────────────────────────────────
    {
      slug: "practice-validation-terms",
      title: "10 · Practice: the validation vocabulary",
      section: "Decide",
      exercise: {
        instructions:
          "Fill in the missing validation term or the right choice. Spelling is forgiving; the explanation shows the rule.",
        items: [
          {
            prompt: "Steve Blank's rule ('there are no facts inside your building, so get ___') means real evidence comes from real people, not your head.",
            answer: "outside",
            accept: ["out", "out of the building", "outside the building"],
            explanation: "Facts live with customers. Refining your idea by chatting with an AI is still 'inside the building' (Lesson 1).",
          },
          {
            prompt: "The human tendency to notice only the evidence that says you're right (made worse by an agreeable AI) is ___ bias.",
            answer: "confirmation",
            accept: ["confirmation bias"],
            explanation: "Fight it by trying to prove yourself WRONG and asking the AI to argue against you (Lesson 6).",
          },
          {
            prompt: "Over-trusting a machine's output just because a computer produced it is ___ bias.",
            answer: "automation",
            accept: ["automation bias"],
            explanation: "'The AI confirmed it' feels like proof but isn't: the AI wasn't there and has no facts about your customers (Lessons 6, 9).",
          },
          {
            prompt: "The realistic share of a market you could actually win in the near term is your ___ (3 letters).",
            answer: "SOM",
            accept: ["som", "serviceable obtainable market"],
            explanation: "Lead with SOM, not a giant TAM. Build it bottom-up from real customers × price × frequency (Lesson 7).",
          },
          {
            prompt: "The strongest early signal of demand short of a repeat sale is a ___: someone putting money down before it's built.",
            answer: "pre-order",
            accept: ["preorder", "pre order", "payment", "sale"],
            explanation: "Money is the most honest survey there is. Weight every signal by what it cost the person (Lesson 9).",
          },
          {
            prompt: "Asking AI to 'imagine what 50 customers would say' produces fiction. Never present synthetic answers as real ___.",
            answer: "validation",
            accept: ["data", "evidence", "research"],
            explanation: "AI may organize the truth you collected; it may never invent truth you didn't (Lesson 5).",
          },
        ],
      },
    },
    {
      slug: "pivot-or-persevere",
      title: "11 · When to pivot, persevere, or walk away",
      section: "Decide",
      recallContent: [
        {
          prompt: "How do you tell a real demand signal from a vanity one?",
          answer: "Weight each signal by what it cost the person. Likes and 'I'd totally use that' cost nothing and prove little; email sign-ups, and especially pre-orders and payments, cost something and count.",
        },
        {
          prompt: "Why doesn't a clean AI-generated chart make a weak signal strong?",
          answer: "Automation bias makes a chart feel like proof, but the chart is only as good as whether the underlying action cost anything. A beautiful graph of likes is still just likes.",
        },
      ],
      body: `You did the research. Now you have to make the hardest founder decision: does the evidence say keep going, change direction, or stop? The point of validation was never to *feel* validated: it was to learn the truth in time to act on it. Two failure modes lurk here, and both come from the biases in Lesson 6.

**The two ways founders mishandle the decision:**

- **Stubborn persistence.** Ignoring clear "no" signals because you're in love with the idea (confirmation bias) and pushing on anyway. This is how founders burn months building something the market already told them it didn't want.
- **Panic pivoting.** Abandoning a real signal at the first hard week, chasing whatever's shiny. Constant pivots mean you never learn anything deeply enough to win.

**Persevere when** the evidence is genuinely encouraging: real people describe the pain unprompted, strangers sign up, some pay, and your honest market estimate (Lesson 7) is big enough to matter. Keep refining, but the core need is confirmed.

**Pivot when** you've found a *real* signal next to your *wrong* guess. Customer discovery often reveals that the problem you assumed is weak, but a related one you stumbled on is strong, or that a different group has the pain badly. A pivot keeps what you learned and changes what you build on top of it: it's a turn, not a restart.

**Walk away (or rethink) when** the honest signal just isn't there: people are polite but don't act, no one will pay, the market is too small or too saturated (Lesson 7). Killing a bad idea early is a *win*: it's the whole reason you validated cheaply instead of building blindly. The shame isn't in stopping; it's in ignoring the data to avoid stopping.

**How to decide honestly (don't let AI decide for you):**

- **Look at behavior, not words or your feelings.** What did people *do*? (Lesson 9.)
- **Decide your "go / pivot / stop" thresholds in advance**, before you're emotionally attached to a result.
- **Use AI as a devil's advocate, never as the judge.** Ask it to make the case *against* continuing; then *you* weigh the real evidence and decide. The AI doesn't have skin in the game or any facts about your customers. You do.

> **Trust DNA:** the bravest, most honest founders let *reality* (not their hopes and not an agreeable AI) tell them when to push, when to turn, and when to stop.

**Check yourself.** What's the difference between a pivot and stubbornly persisting, and why is killing a bad idea early actually a win?

## Sources
- Blank, S. (2013). *Customer Development Manifesto*. Customer discovery and validation tell you whether to proceed, pivot, or rethink before scaling. https://steveblank.com/category/customer-development-manifesto/
- National Institute of Standards and Technology. (2022). *Towards a Standard for Identifying and Managing Bias in AI (NIST SP 1270)*. Guard against confirmation and automation bias when interpreting your own results. https://doi.org/10.6028/NIST.SP.1270`,
    },
    {
      slug: "capstone-validation-plan",
      title: "12 · Capstone: your validation plan",
      section: "Decide",
      exercise: {
        instructions:
          "Build a real validation plan you can run THIS WEEK for YOUR own idea, using AI as a prep-and-digest assistant and reality as the judge. Work through all six pieces below (write them out somewhere: a doc, a notebook, or by asking an AI tool to help you draft and then verifying and rewriting in your own words). Each item names a piece and asks you to type the ONE KEYWORD shown to confirm you've drafted it. The explanation then shows what a strong version does. The real work is your written plan; this just walks you through the checklist.",
        items: [
          {
            prompt: "PIECE 1. Write your riskiest ASSUMPTION as one sentence: the belief that, if wrong, kills the idea (usually 'people have this pain and will pay to fix it'). Done? Type the keyword: assumption",
            answer: "assumption",
            accept: ["assumptions"],
            hint: "It's almost always about real pain + willingness to pay, not about features.",
            explanation: "Validation targets the riskiest assumption first: the one most likely to be a guess you fell in love with (Lesson 1).",
          },
          {
            prompt: "PIECE 2. Name the REAL people you'll talk to (who and how you'll reach 5 to 10 of them), NOT your friends or an AI persona. Done? Type the keyword: people",
            answer: "people",
            accept: ["interviews", "customers"],
            hint: "Get outside the building: a specific segment you can actually reach this week.",
            explanation: "Facts live with real customers, not your fan club or a chatbot. AI preps; people answer (Lessons 1 and 2).",
          },
          {
            prompt: "PIECE 3. Draft 3 open, behavioral QUESTIONS (about what people did, not 'would you use this?'). Done? Type the keyword: questions",
            answer: "questions",
            accept: ["question"],
            hint: "Ask AI to flag any leading or hypothetical wording, then rewrite them open and neutral.",
            explanation: "Ask about the past and present, don't pitch, and stay neutral: leading questions harvest flattery (Lesson 3).",
          },
          {
            prompt: "PIECE 4. Describe the cheapest TEST you'll run (landing page, waitlist, or pre-sell) and the one HONEST action you'll measure. Done? Type the keyword: test",
            answer: "test",
            accept: ["mvp", "landing page"],
            hint: "A landing page with one clear action; keep every claim on it truthful (FTC).",
            explanation: "Watch what strangers DO, not what they say, and keep the offer truthful and substantiated (Lesson 8).",
          },
          {
            prompt: "PIECE 5. Name the real SIGNAL that counts as a 'yes' (sign-ups, pre-orders, payments, not likes) and your rough honest market size. Done? Type the keyword: signal",
            answer: "signal",
            accept: ["signals"],
            hint: "Weight each signal by what it cost the person; size the market bottom-up (SOM), not '1% of a billion.'",
            explanation: "Strong signals cost something; vanity metrics don't. Size honestly, bottom-up (Lessons 7, 9).",
          },
          {
            prompt: "PIECE 6. Write your DECISION rule IN ADVANCE: what result makes you persevere, pivot, or stop, and how you'll guard against confirmation bias. Done? Type the keyword: decide",
            answer: "decide",
            accept: ["decision", "pivot"],
            hint: "Set go/pivot/stop thresholds now; ask AI to argue AGAINST you, but you judge the real evidence.",
            explanation: "Decide on behavior, not hopes or an agreeable AI; killing a bad idea early is a win (Lessons 6, 11).",
          },
        ],
      },
    },
    {
      slug: "ai-customer-research-quiz",
      title: "13 · Check your understanding",
      section: "Decide",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What does Steve Blank's 'there are no facts inside your building' mean for validating an idea?",
            options: [
              "Spend more time refining the idea in your head",
              "Real evidence comes from getting out and talking to real customers, not from your imagination or a chatbot",
              "Build the full product first, then ask people",
              "Ask an AI to confirm your idea is good",
            ],
            correctIndex: 1,
            explanation:
              "The core risk is building something nobody wants; facts live with customers outside the building. Chatting with an AI is still 'inside the building.'",
            sourceLessonSlug: "real-problem-vs-a-guess",
          },
          {
            prompt: "Which research job can AI genuinely help with, and which can it NEVER do?",
            options: [
              "It can be a real customer; it can't draft questions",
              "It can prep questions and summarize answers; it can never BE a customer or tell you who'll pay",
              "It can do everything, so you can skip interviews",
              "It can only invent personas, nothing else",
            ],
            correctIndex: 1,
            explanation:
              "AI handles prep and digest (secondary research, drafting, clustering). Only real people (direct research) prove willingness to pay.",
            sourceLessonSlug: "ai-prepares-not-replaces",
          },
          {
            prompt: "Why is 'Would you use an app that does this?' a weak interview question?",
            options: [
              "It's too long",
              "It's hypothetical: people are bad at predicting future behavior and tend to be polite; ask what they actually did instead",
              "It's illegal to ask",
              "It uses the word 'app'",
            ],
            correctIndex: 1,
            explanation:
              "Ask about the past and present ('walk me through the last time you dealt with X'), stay neutral, and don't pitch: that gets the truth.",
            sourceLessonSlug: "unbiased-interview-questions",
          },
          {
            prompt: "Your survey only got responses from your friends and followers. What's the problem?",
            options: [
              "Nothing: supportive people are the best sample",
              "Sampling bias: your fan club isn't your real target market, so the results are skewed and unreliable",
              "You should add leading questions to balance it",
              "Friends always give the most honest answers",
            ],
            correctIndex: 1,
            explanation:
              "An honest survey needs unbiased questions AND an honest sample of your actual target market, with enough of the right respondents to trust a pattern.",
            sourceLessonSlug: "surveys-that-dont-lie",
          },
          {
            prompt: "AI summarizes your 12 interviews and reports '73% of users are frustrated by X,' but you never recorded any percentages. What should you do?",
            options: [
              "Use the number: it sounds authoritative",
              "Delete the invented statistic; a number that isn't in your real data is a fabrication, not a finding",
              "Round it up to 80% to be safe",
              "Put it in your investor pitch",
            ],
            correctIndex: 1,
            explanation:
              "AI may organize the truth you collected but never invent truth you didn't. Demand traceability to real quotes; trustworthy AI is valid and reliable (NIST).",
            sourceLessonSlug: "synthesize-without-inventing",
          },
          {
            prompt: "Why does asking an AI 'isn't my idea great?' make confirmation bias WORSE?",
            options: [
              "It doesn't: AI removes bias completely",
              "Models tend to be agreeable and tell you what you want to hear, and automation bias makes 'the AI agreed' feel like real proof when it isn't",
              "Because AI always says no",
              "Because the question is too short",
            ],
            correctIndex: 1,
            explanation:
              "Confirmation bias makes you seek agreement; an agreeable AI supplies it, and automation bias dresses the guess up as evidence. Ask AI to argue against you instead.",
            sourceLessonSlug: "confirmation-bias-and-agreeable-ai",
          },
          {
            prompt: "What's the most honest way to size your market?",
            options: [
              "Claim the biggest possible TAM and say you'll get 1% of it",
              "Lead with a realistic SOM built bottom-up: real customers × price × frequency, from sources you can verify",
              "Let AI generate a confident number and use it as-is",
              "Pick whatever number impresses investors",
            ],
            correctIndex: 1,
            explanation:
              "Anyone can claim a giant TAM; a credible founder shows the reachable beachhead (SOM) and builds it from checkable inputs (SBA).",
            sourceLessonSlug: "market-sizing-honestly",
          },
          {
            prompt: "Why can a simple landing page sometimes validate demand better than a finished product, and what rule must it follow?",
            options: [
              "It's prettier; it can say anything to get sign-ups",
              "It tests whether real strangers ACT (sign up / pre-order) cheaply and early, and every claim on it must stay truthful and substantiated",
              "It doesn't need traffic to work",
              "It only works if you exaggerate the features",
            ],
            correctIndex: 1,
            explanation:
              "A landing page tests real demand in days. But product/'AI' claims must be truthful and substantiated even on a test page (FTC).",
            sourceLessonSlug: "mvp-and-landing-page-test",
          },
          {
            prompt: "Rank these as proof of demand: 100 likes, 10 email sign-ups, 3 paid pre-orders. Which is strongest and why?",
            options: [
              "100 likes: biggest number wins",
              "3 paid pre-orders: money is the most honest signal; weight each signal by what it cost the person",
              "10 email sign-ups: likes and payments don't count",
              "They're all equal proof",
            ],
            correctIndex: 1,
            explanation:
              "Likes cost nothing and prove little; payment costs real money and means a lot. The further someone goes (attention → email → money), the more you can trust it.",
            sourceLessonSlug: "read-the-real-signal",
          },
          {
            prompt: "When is killing a startup idea early actually a WIN?",
            options: [
              "Never: you should always persevere no matter what",
              "When honest signals show the need isn't there (people won't act or pay, market too small): you saved months by validating cheaply instead of building blindly",
              "Only if an AI tells you to stop",
              "Whenever the first week gets hard",
            ],
            correctIndex: 1,
            explanation:
              "Stubborn persistence ignores clear 'no' signals; panic pivoting abandons real ones. Decide on behavior using thresholds set in advance, and use AI as a devil's advocate, not the judge.",
            sourceLessonSlug: "pivot-or-persevere",
          },
        ],
      },
    },
  ],
};
