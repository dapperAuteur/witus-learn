// Authored "L3: AI Ethics, Bias & Society" — the third rung of the AI literacy ladder
// on Learn.WitUS (after F1 "AI Literacy" and L2). Literacy-level: written for everyone,
// not code-heavy. Carries the platform's trust DNA: AI is powerful leverage, but it can
// encode bias, concentrate power, and cause real harm — so a responsible user understands
// where bias comes from, that "fairness" has no single definition, who's accountable, and
// how to use these systems without being fooled or doing harm.
//
// Every claim ties to a REAL, verified source: NIST AI RMF 1.0 (2023); NIST SP 1270 (2022,
// bias categories); UNESCO Recommendation on the Ethics of AI (2021); the EU AI Act risk
// tiers; Barocas, Hardt & Narayanan, "Fairness and Machine Learning" (fairmlbook.org / MIT
// Press 2023); the ACM Code of Ethics & Professional Conduct (2018). No fabricated sources.
//
// Exercises + a final quiz whose every question carries an explanation and links to the
// lesson that teaches the answer (sourceLessonSlug). Suggested category: "AI & Technology".

import type { AuthoredCourse } from "./authored-course";

export const AI_L3_ETHICS_COURSE: AuthoredCourse = {
  title: "L3: AI Ethics, Bias & Society",
  description:
    "AI systems now help decide who gets a loan, a job interview, or a longer prison sentence — and they can quietly encode human bias while sounding neutral. This literacy-level course (no coding required) explains what \"AI ethics\" actually means, where bias comes from, why there is no single definition of \"fair,\" who is accountable when AI causes harm, and how AI reshapes work, democracy, and the planet. You leave able to use and question these systems responsibly. Cited throughout (NIST, UNESCO, the EU AI Act, the ACM Code of Ethics, and the open Fairness and Machine Learning textbook).",
  lessons: [
    // ── Part 1: What AI ethics is ──────────────────────────────────────────
    {
      slug: "what-is-ai-ethics",
      title: "1 · What \"AI ethics\" actually means",
      section: "Part 1 · Foundations",
      body: `"AI ethics" is not a vibe or a PR department. It's the practical question: **when an AI system affects people, how do we make sure it helps more than it harms — and who decides?**

These systems increasingly sit inside decisions that change lives: who gets a loan, a job interview, an apartment, a medical flag, or a longer sentence. When a decision moves from a human to a model, the stakes don't shrink — they often scale up, because one model can touch millions of people at once.

A useful way in is to treat AI as a **socio-technical system** — not just code, but code plus the data, the people, the institutions, and the incentives around it (NIST, 2022). Harm rarely comes from "the algorithm" alone; it comes from the whole system.

Major bodies have converged on a shared set of principles. The **UNESCO Recommendation on the Ethics of Artificial Intelligence** — the first global standard on AI ethics, adopted by all 193 UNESCO member states in November 2021 — anchors them in **human rights and human dignity**, with values like proportionality and do-no-harm, fairness and non-discrimination, transparency and explainability, human oversight, and environmental sustainability (UNESCO, 2021).

You'll meet each of those in this course. The point isn't to memorize a list — it's to be able to look at a real AI system and ask the right questions.

**Check yourself.** Why does treating AI as a "socio-technical system" matter when you're trying to find the source of a harm?

## Sources
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence.* https://www.unesco.org/en/artificial-intelligence/recommendation-ethics
- National Institute of Standards and Technology. (2022). *Towards a Standard for Identifying and Managing Bias in Artificial Intelligence* (NIST SP 1270). https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf`,
    },

    // ── Part 2: Bias ───────────────────────────────────────────────────────
    {
      slug: "where-bias-comes-from",
      title: "2 · Where bias comes from",
      section: "Part 2 · Bias & fairness",
      body: `A common myth is that machines are objective because they're "just math." In reality, AI systems learn from human-made data and human-made choices, so they can **absorb and amplify human bias** — while sounding perfectly neutral.

NIST sorts the sources of AI bias into three broad categories (Schwartz et al., 2022):

- **Systemic bias** — bias baked into the institutions and historical data the system learns from. If past lending or policing was discriminatory, a model trained on that history learns to repeat it, even with no "race" or "gender" field anywhere in the data.
- **Statistical / computational bias** — bias from the data and the model itself: a training set that under-represents some group, a sample that isn't representative, or labels that systematically err. A face-recognition system trained mostly on light-skinned faces will perform worse on dark-skinned faces.
- **Human / cognitive bias** — bias from the people who design, build, deploy, and interpret the system: which problem they chose to solve, which "ground truth" labels they trusted, and how they read the output.

Three specific entry points are worth naming, because you can look for them:

- **The data** — who and what is over- or under-represented; whose reality got recorded.
- **The labels** — someone decided what counts as a "good employee," a "risky borrower," or "toxic" speech. Those judgments are subjective and they carry bias.
- **Feedback loops** — when a model's output shapes the next batch of data. Predict more crime in a neighborhood → send more police there → record more arrests there → "confirm" the prediction. The loop can manufacture the very pattern it claims to find.

**Check yourself.** A model has no "race" field at all. Explain how it can still produce racially biased outcomes.

## Sources
- Schwartz, R., Vassilev, A., Greene, K., Perine, L., Burt, A., & Hall, P. (2022). *Towards a Standard for Identifying and Managing Bias in Artificial Intelligence* (NIST SP 1270). National Institute of Standards and Technology. https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf
- Barocas, S., Hardt, M., & Narayanan, A. (2023). *Fairness and Machine Learning: Limitations and Opportunities.* MIT Press. https://fairmlbook.org`,
    },
    {
      slug: "fairness-tradeoffs",
      title: "3 · \"Fair\" has no single definition",
      section: "Part 2 · Bias & fairness",
      body: `Here's the uncomfortable heart of the field: **there is no single, universal definition of "fair."** Reasonable people define it in incompatible ways, and you often cannot satisfy all of them at once.

Consider a tool that scores loan applicants. "Fair" could mean any of these:

- **Equal treatment** — ignore group membership entirely; treat everyone by the same rule.
- **Equal accuracy across groups** — the model should be just as correct for women as for men.
- **Equal error rates across groups** — e.g. the same false-positive rate (wrongly denied) and false-negative rate (wrongly approved) for every group.
- **Equal outcomes** — similar approval rates across groups.

These sound reasonable individually. The problem: researchers have shown that some of these definitions are **mathematically impossible to satisfy simultaneously** when base rates differ between groups. Improving one kind of fairness can worsen another. There is no free lunch and no purely technical answer (Barocas, Hardt & Narayanan, 2023).

That means "is this AI fair?" is the wrong question. The right questions are: **Fair according to which definition? Chosen by whom? Who bears the cost of the tradeoff we picked?** Those are value judgments — they belong to people and institutions, not to the algorithm.

Fairness is also context-specific: what's acceptable for a movie recommender is not acceptable for a sentencing tool. Higher stakes demand more scrutiny.

**Check yourself.** Two engineers both say their model is "fair" and both are telling the truth. How is that possible?

## Sources
- Barocas, S., Hardt, M., & Narayanan, A. (2023). *Fairness and Machine Learning: Limitations and Opportunities.* MIT Press. https://fairmlbook.org
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Fair – with Harmful Bias Managed." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "representational-allocational-harms",
      title: "4 · Two kinds of harm: representational and allocational",
      section: "Part 2 · Bias & fairness",
      body: `When an AI system causes harm, it usually falls into one of two families. Naming them helps you spot harm you might otherwise miss.

**Allocational harm** — the system **withholds or grants a resource or opportunity** unfairly. Someone is denied a loan, screened out of a job, flagged as high-risk, or shown worse options because of who they are. These harms are concrete and often measurable: a person didn't get a thing they should have had a fair shot at.

**Representational harm** — the system **shapes how a group is seen**, reinforcing stereotypes or erasing people, even when no resource changes hands directly. An image generator that depicts "a CEO" as always a man, or "a criminal" with a particular skin tone, or a search that returns demeaning results for a group's name — these injure dignity and entrench bias, and they're easy to dismiss because "nobody was denied anything." They still matter, and they often feed the allocational harms downstream.

Two reasons to keep both in view:

- Allocational harms get attention because they're measurable; representational harms get **overlooked** because they're harder to quantify — but they're real, and UNESCO's framing of AI ethics around human **dignity** (not just resources) exists precisely to capture them (UNESCO, 2021).
- A single system can do both: a biased hiring tool denies interviews (allocational) *and* teaches the company that "the ideal candidate looks like our past hires" (representational).

**Check yourself.** Give one example of a representational harm that involves no one being denied a resource.

## Sources
- Barocas, S., Hardt, M., & Narayanan, A. (2023). *Fairness and Machine Learning: Limitations and Opportunities.* MIT Press. https://fairmlbook.org
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence.* https://www.unesco.org/en/artificial-intelligence/recommendation-ethics`,
    },
    {
      slug: "practice-bias",
      title: "5 · Practice: name the bias and the harm",
      section: "Part 2 · Bias & fairness",
      exercise: {
        instructions:
          "Fill in the blank for each scenario, drawing on lessons 2–4. Spelling is forgiving; one or two words is enough.",
        items: [
          {
            prompt:
              "A hiring model trained on a company's past hires keeps favoring the same kind of candidate it always hired. Bias baked into historical/institutional data is called ___ bias.",
            answer: "systemic",
            accept: ["historical", "structural"],
            explanation:
              "NIST SP 1270 calls bias inherited from institutions and historical data 'systemic' bias.",
          },
          {
            prompt:
              "A face-recognition tool works worse on dark-skinned faces because its training photos were mostly light-skinned. Bias from an unrepresentative dataset is ___ (or computational) bias.",
            answer: "statistical",
            accept: ["computational", "data"],
            explanation:
              "Unrepresentative or skewed data produces statistical/computational bias.",
          },
          {
            prompt:
              "Predict crime in an area → send more police → record more arrests → 'confirm' the prediction. This self-reinforcing cycle is a ___ loop.",
            answer: "feedback",
            explanation:
              "Feedback loops let a model manufacture the very pattern it claims to detect.",
          },
          {
            prompt:
              "Two valid fairness definitions can't both hold when group base rates differ — there is no single definition of ___.",
            answer: "fair",
            accept: ["fairness"],
            explanation:
              "Fairness is plural and context-dependent; some definitions are mathematically incompatible.",
          },
          {
            prompt:
              "A loan model wrongly denies qualified applicants from one group. Denying an opportunity or resource is an ___ harm.",
            answer: "allocational",
            accept: ["allocative"],
            explanation:
              "Allocational harm = a resource or opportunity is unfairly withheld or granted.",
          },
          {
            prompt:
              "An image generator always pictures 'a nurse' as a woman and 'a CEO' as a man. Shaping how a group is seen is a ___ harm.",
            answer: "representational",
            accept: ["representation", "dignitary"],
            explanation:
              "Representational harm reinforces stereotypes or erases people, even with no resource denied.",
          },
        ],
      },
    },

    // ── Part 3: Accountability & power ─────────────────────────────────────
    {
      slug: "transparency-explainability",
      title: "6 · Transparency and explainability",
      section: "Part 3 · Accountability & power",
      body: `If an AI denies you a loan, you'd reasonably want to know **why** — and to challenge it. That demand has two distinct parts that people often blur:

- **Transparency** is about the *system*: Is it disclosed that an AI is involved at all? What is it for, what data does it use, what are its known limits and error rates? You can't question a decision you don't know was made by a machine. (The **EU AI Act** makes some transparency mandatory — for example, people must be told when they're interacting with an AI like a chatbot, and certain synthetic media must be labeled.)
- **Explainability** is about a *specific decision*: Can the system give a reason a human can understand for *this* outcome? "Denied because your debt-to-income ratio exceeded X" is an explanation; "the model said so" is not.

This is hard for a real reason. Many powerful models are **"black boxes"** — even their builders can't fully trace why a particular output came out. There's often a tension: the most accurate models can be the least explainable. UNESCO names transparency and explainability as core ethical principles precisely because **the right to an explanation underpins the ability to contest a decision and seek redress** (UNESCO, 2021).

Transparency isn't all-or-nothing, and it isn't free: full model disclosure can expose private data or invite gaming. The ethical target is **enough transparency, to the right people, for the stakes involved** — more for a sentencing tool, less for a spam filter (NIST, 2023).

**Check yourself.** What's the difference between a system being *transparent* and a single decision being *explainable*?

## Sources
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence* — transparency & explainability principles. https://www.unesco.org/en/artificial-intelligence/recommendation-ethics
- European Commission. *Regulatory framework on AI* (the EU AI Act) — transparency obligations. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — "Explainable and Interpretable." https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "accountability-who-is-responsible",
      title: "7 · Accountability: who is responsible?",
      section: "Part 3 · Accountability & power",
      body: `When an AI system harms someone, a tempting answer is "the algorithm did it." That's an accountability **dodge** — algorithms aren't moral agents, and "the computer decided" cannot be where responsibility stops.

Ethics frameworks insist that **a human or organization remains accountable** for what an AI system does. UNESCO states that responsibility and accountability for AI decisions should always be attributable to people or organizations — AI systems should not displace ultimate human responsibility (UNESCO, 2021). NIST's framework is organized around a **Govern** function that puts accountability structures at the center of trustworthy AI (NIST, 2023). The EU AI Act assigns concrete legal duties to providers and deployers of high-risk systems.

A key safeguard is **meaningful human oversight** — a real person, with real authority and real information, able to review, override, and stop the system. Beware "**rubber-stamp**" oversight, where a human is nominally in the loop but in practice just clicks "approve" on whatever the model says. **Automation bias** — our tendency to over-trust a confident machine — makes this failure common.

For professionals who build these systems, the **ACM Code of Ethics and Professional Conduct (2018)** is explicit: computing professionals should contribute to human well-being, **avoid harm**, be honest and trustworthy, be fair and **take action not to discriminate**, and respect privacy. Accountability isn't only a legal question; it's a professional duty.

**Check yourself.** What makes human oversight "meaningful" rather than a rubber stamp?

## Sources
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence* — responsibility, accountability, human oversight. https://www.unesco.org/en/artificial-intelligence/recommendation-ethics
- Association for Computing Machinery. (2018). *ACM Code of Ethics and Professional Conduct.* https://www.acm.org/code-of-ethics
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0)* — Govern function. https://www.nist.gov/itl/ai-risk-management-framework`,
    },
    {
      slug: "surveillance-and-power",
      title: "8 · Surveillance, power, and who holds it",
      section: "Part 3 · Accountability & power",
      body: `AI ethics isn't only about individual unfair decisions — it's also about **power**: who can watch, predict, and influence whom, at scale.

Modern AI makes mass surveillance cheap and automatic. Face recognition can identify people in a crowd; behavior models can profile, score, and sort populations. The risk isn't just error — it's the **chilling effect** of being constantly watched, and the concentration of that capability in a few governments and companies.

Lawmakers have drawn hard lines here. The **EU AI Act** places some uses in an **"unacceptable risk"** tier and *bans* them outright — for example, government **social scoring** of citizens and (with narrow exceptions) **real-time remote biometric identification** in public spaces. Naming certain uses as off-limits is itself an ethical stance: some things shouldn't be built, however accurate they are.

There's also a **power-asymmetry** problem that runs through the whole field:

- The organizations that build large AI systems hold the data, the compute, and the expertise; the people affected usually hold none of it.
- Those most likely to be harmed — surveilled, mis-scored, denied — are often those with the least power to contest the system or even know it exists.

This is why UNESCO frames AI ethics around **human rights and dignity** and calls for proportionality (don't use more surveillance power than the legitimate aim requires) and for protecting the vulnerable (UNESCO, 2021). Asking "who gains power here, and who loses it?" is a core ethics question, not a political aside.

**Check yourself.** Name one AI use the EU AI Act treats as "unacceptable risk," and say why a ban (not just regulation) might be the ethical response.

## Sources
- European Commission. *Regulatory framework on AI* (the EU AI Act) — unacceptable-risk / prohibited practices. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence* — proportionality, human rights, vulnerable groups. https://www.unesco.org/en/artificial-intelligence/recommendation-ethics`,
    },

    // ── Part 4: AI & society ───────────────────────────────────────────────
    {
      slug: "environmental-and-labor-costs",
      title: "9 · The hidden bill: environmental and labor costs",
      section: "Part 4 · AI & society",
      body: `AI can feel weightless — just text on a screen. It isn't. Training and running large models has a **physical and human footprint** that ethics has to account for.

**Environmental cost.** Large models are trained and served in data centers that consume substantial **electricity and water** (for cooling), with a corresponding carbon impact that depends on the energy grid behind them. UNESCO names **environmental sustainability** as a core ethical value and asks that AI's full lifecycle footprint be assessed and minimized — the planet is a stakeholder (UNESCO, 2021). A responsible question is whether the benefit of a given AI use justifies its resource cost.

**Labor cost.** Today's AI is built on a lot of **human labor that is easy to overlook**:

- **Data workers** who label training data and review content — including moderators who screen disturbing material — often for low pay and under difficult conditions. The polished model rests on their work.
- **Creators** whose writing, art, code, and voices were used as training data, frequently without consent, credit, or compensation — raising live questions of fairness and ownership.

Ethics asks us to see this hidden supply chain, not just the magic at the end of it. "Free" or "automatic" usually means **someone, somewhere, paid a cost** — and fairness includes them.

**Check yourself.** Name one environmental cost and one labor cost behind a large AI model.

## Sources
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence* — environmental sustainability; labour. https://www.unesco.org/en/artificial-intelligence/recommendation-ethics`,
    },
    {
      slug: "ai-and-society",
      title: "10 · AI and society: jobs, democracy, misinformation",
      section: "Part 4 · AI & society",
      body: `Beyond any single decision, AI reshapes the systems we all live inside. Three deserve special attention.

**Jobs and work.** AI automates and augments tasks, shifting which skills are valued, displacing some roles while creating others, and changing the balance of power between workers and employers. The ethical issues are *distribution* (who gains, who's left behind) and *transition* (retraining, safety nets). UNESCO devotes attention to AI's impact on **labour markets** and calls for protecting workers through the change (UNESCO, 2021).

**Democracy and discourse.** Recommendation and ranking systems decide what billions of people see. Optimizing purely for **engagement** can amplify outrage, deepen polarization, and trap people in narrow feedback loops — a representational and societal harm operating at population scale. Who sees what, chosen by an optimization target nobody voted on, is a democratic question.

**Misinformation at scale.** Generative AI makes convincing fake text, images, voice, and video **cheap and abundant**. That threatens shared reality: deepfakes can defame or defraud, and the mere *possibility* of fakes lets bad actors dismiss real evidence ("that video is probably AI"). This connects straight back to your literacy training — provenance, sourcing, and "verify before you share" — but now as a **civic** responsibility, not just a personal one. The EU AI Act's transparency rules (labeling AI-generated content) are one societal response.

None of this is destiny. These are **design and policy choices**, which means they can be made differently. That's exactly why an informed, questioning public matters.

**Check yourself.** How can a recommender system harm democracy even if every individual recommendation seems harmless?

## Sources
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence* — labour markets, information, democracy. https://www.unesco.org/en/artificial-intelligence/recommendation-ethics
- European Commission. *Regulatory framework on AI* (the EU AI Act) — transparency for AI-generated content. https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai`,
    },
    {
      slug: "being-a-responsible-user",
      title: "11 · Being a responsible user",
      section: "Part 4 · AI & society",
      body: `You don't have to build AI to act ethically with it. Most of us are **users and citizens**, and that role carries real responsibility. A practical checklist drawn from everything above:

1. **Stay accountable for what you do with AI output.** "The AI said so" is never an excuse. You are responsible for what you publish, decide, or act on (ACM, 2018; UNESCO, 2021).
2. **Watch for bias in decisions about people.** If AI touches hiring, grading, lending, housing, or discipline, ask: *trained on what data? fair by which definition? who checked? can it be appealed?* Push for human review.
3. **Ask "fair according to whom?"** Treat "the algorithm is objective" as a red flag, not a reassurance. Objectivity is a claim to interrogate.
4. **Demand transparency and explanation** when a decision affects you or others — and support rules (like the EU AI Act) that require it for high-stakes uses.
5. **Don't use AI to deceive or harm.** No impersonation, fake people, fake reviews, non-consensual or deceptive synthetic media, harassment, or passing AI work off dishonestly where it matters.
6. **Mind the footprint.** Use the powerful, costly tools where they add real value — and remember the environmental and human labor behind "free."
7. **Protect privacy — yours and others'.** Don't feed personal or confidential data into systems that may store or train on it.
8. **Keep verifying, and help others do the same.** In an age of cheap fakes, sourcing and provenance are civic skills.

The goal isn't fear or refusal — it's **responsible leverage**: use AI's power while protecting people's rights, dignity, and shared reality. An informed, questioning user is the most important safeguard there is.

**Check yourself.** A manager says "the hiring AI is objective, so it's fair." Give two questions you'd ask in response.

## Sources
- Association for Computing Machinery. (2018). *ACM Code of Ethics and Professional Conduct.* https://www.acm.org/code-of-ethics
- UNESCO. (2021). *Recommendation on the Ethics of Artificial Intelligence.* https://www.unesco.org/en/artificial-intelligence/recommendation-ethics
- National Institute of Standards and Technology. (2023). *AI Risk Management Framework (AI RMF 1.0).* https://www.nist.gov/itl/ai-risk-management-framework`,
    },

    // ── Final quiz ─────────────────────────────────────────────────────────
    {
      slug: "ai-l3-ethics-quiz",
      title: "12 · Check your understanding",
      section: "Part 4 · AI & society",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt:
              "Treating AI as a \"socio-technical system\" means an AI harm is best understood as coming from…",
            options: [
              "The math alone — algorithms are objective",
              "The whole system: data, people, institutions, and incentives, not just the code",
              "Bad luck that can't be predicted",
              "The user, every time",
            ],
            correctIndex: 1,
            explanation:
              "Harm rarely comes from 'the algorithm' alone; it comes from the data, people, and institutions around it.",
            sourceLessonSlug: "what-is-ai-ethics",
          },
          {
            prompt:
              "A model with no \"race\" field still produces racially biased outcomes. The most likely reason is…",
            options: [
              "The math is broken",
              "It learned from historical/institutional data that already encoded discrimination (systemic bias)",
              "Someone hacked it",
              "AI can't be biased without that field",
            ],
            correctIndex: 1,
            explanation:
              "Systemic bias is inherited from biased history and institutions, even with no explicit group field.",
            sourceLessonSlug: "where-bias-comes-from",
          },
          {
            prompt:
              "A self-reinforcing cycle where a model's output shapes the next batch of training data is called a…",
            options: ["Hallucination", "Feedback loop", "Black box", "Conformity assessment"],
            correctIndex: 1,
            explanation:
              "Feedback loops (e.g. predictive policing) can manufacture the very pattern the model claims to find.",
            sourceLessonSlug: "where-bias-comes-from",
          },
          {
            prompt:
              "Two engineers each call their model \"fair\" and both are telling the truth. How?",
            options: [
              "One of them is lying",
              "\"Fair\" has multiple valid, sometimes mathematically incompatible definitions",
              "Fairness is impossible to define at all",
              "They used different programming languages",
            ],
            correctIndex: 1,
            explanation:
              "There's no single definition of fair; some definitions can't be satisfied at once when base rates differ.",
            sourceLessonSlug: "fairness-tradeoffs",
          },
          {
            prompt:
              "An image generator that always depicts \"a CEO\" as a man, with no one denied a resource, is an example of…",
            options: [
              "Allocational harm",
              "Representational harm",
              "No harm at all",
              "A hallucination",
            ],
            correctIndex: 1,
            explanation:
              "Representational harm shapes how a group is seen (stereotyping/erasure) even when no resource changes hands.",
            sourceLessonSlug: "representational-allocational-harms",
          },
          {
            prompt:
              "What's the difference between transparency and explainability?",
            options: [
              "They're the same thing",
              "Transparency is about disclosing the system; explainability is giving a human-understandable reason for a specific decision",
              "Transparency is for engineers; explainability is for lawyers",
              "Explainability means the model is open-source",
            ],
            correctIndex: 1,
            explanation:
              "Transparency = the system is disclosed and described; explainability = a contestable reason for a particular outcome.",
            sourceLessonSlug: "transparency-explainability",
          },
          {
            prompt:
              "When an AI system causes harm, ethics frameworks say accountability should rest with…",
            options: [
              "The algorithm itself",
              "No one — it's automated",
              "A human or organization; ultimate responsibility stays with people",
              "The end user only",
            ],
            correctIndex: 2,
            explanation:
              "UNESCO and the ACM Code keep responsibility attributable to people/organizations; 'the computer decided' is a dodge.",
            sourceLessonSlug: "accountability-who-is-responsible",
          },
          {
            prompt:
              "The EU AI Act places government social scoring and (mostly) real-time public biometric ID in which tier?",
            options: [
              "Minimal risk",
              "Limited risk",
              "High risk",
              "Unacceptable risk (banned)",
            ],
            correctIndex: 3,
            explanation:
              "These are 'unacceptable risk' practices the EU AI Act prohibits — some uses shouldn't be built, however accurate.",
            sourceLessonSlug: "surveillance-and-power",
          },
          {
            prompt:
              "Which is a real, often-overlooked cost behind large AI models?",
            options: [
              "Nothing — AI is weightless",
              "Significant electricity/water use and low-paid human data/labeling work",
              "Only the price of the subscription",
              "Just slower internet",
            ],
            correctIndex: 1,
            explanation:
              "AI has an environmental footprint (energy/water) and rests on human labor (labelers, moderators, uncredited creators).",
            sourceLessonSlug: "environmental-and-labor-costs",
          },
          {
            prompt:
              "A manager says \"the hiring AI is objective, so it's fair.\" The best response is to…",
            options: [
              "Agree — machines are neutral",
              "Treat \"objective\" as a red flag and ask: trained on what data, fair by which definition, who checked, can it be appealed?",
              "Refuse to use any AI ever",
              "Ask for a faster computer",
            ],
            correctIndex: 1,
            explanation:
              "Responsible use means questioning the 'objectivity' claim and demanding bias checks, a fairness definition, and human review.",
            sourceLessonSlug: "being-a-responsible-user",
          },
        ],
      },
    },
  ],
};
