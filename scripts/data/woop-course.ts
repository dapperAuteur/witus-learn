// Authored "Wish, Outcome, Obstacle, Plan: The Science of Actually Doing It" — a cited course on
// MENTAL CONTRASTING WITH IMPLEMENTATION INTENTIONS (MCII), the method Gabriele Oettingen's team
// packages for the public under the name WOOP. Natural sibling of `learning-how-to-learn-course.ts`
// (that one is the cognitive science of studying; this one is the cognitive science of DOING), and
// the two cross-link.
//
// Sourcing discipline (the load-bearing part of this file):
//   * This is a course about a METHOD, backed by research. It is NOT a biography of Oettingen.
//     Biographical material is kept to the minimum needed to attribute the work.
//   * EVERY empirical claim is cited to a primary paper with a DOI, and every DOI in this file was
//     verified against the Crossref API (title, journal, volume, issue, pages) rather than recalled.
//   * The counterintuitive spine is stated plainly and never softened: positively FANTASIZING about
//     a desired future is associated with LOWER effort and WORSE attainment (Oettingen & Mayer,
//     2002). Mental contrasting is what converts a wish into action; implementation intentions
//     automate the response.
//   * THE HONESTY IS THE PRODUCT. Section 5 exists to teach the evidence as it actually stands:
//     the pooled MCII effect is SMALL-TO-MEDIUM (Hedges' g = 0.336, 95% CI [0.229, 0.443]; 24
//     effects from 21 articles, N = 15,907), the meta-analysts themselves flag possible publication
//     bias and a small number of studies, and the theory's signature boundary condition (that
//     mental contrasting only builds commitment when EXPECTATIONS of success are high) did NOT
//     emerge as a significant moderator in that meta-analysis (Wang et al., 2021) and did not
//     replicate in an independent comparison study (Abdulla & Woods, 2021), where MCII also did not
//     significantly beat solution-focused or autonomous planning. The course teaches the boundary
//     condition as THEORY, and the state of its evidence as UNSETTLED. It does not oversell.
//   * Claims resting on a SINGLE, SMALL study are labelled as such IN THE LESSON (the 100%-vs-53%
//     breast-self-examination result, the N = 66 PSAT study, the N = 51 / N = 59 snacking studies).
//   * TRADEMARK / IP: "WOOP" is the public-facing name used by Oettingen's team, which runs a free
//     app and site at woopmylife.org. Whether the name is a registered mark COULD NOT BE DETERMINED
//     from any authoritative source, and the site publishes no licensing terms, so this file asserts
//     NOTHING either way. Mitigations actually applied: the course is titled with the four ordinary
//     English words, teaches the method under its SCIENTIFIC name (MCII), prefixes every lesson slug
//     with `mcii-`, carries an explicit non-affiliation notice in Lesson 1, reproduces NO WOOP-app
//     or woopmylife.org worksheets, instrument items, or branded assets (all exercise prompts here
//     are original), and points learners to the official free tool rather than imitating it.
//     BAM operator task: `plans/user-tasks/94-seed-woop-course.md` (email info@woopmylife.org).

import type { AuthoredCourse } from "./authored-course";

export const WOOP_COURSE: AuthoredCourse = {
  title: "Wish, Outcome, Obstacle, Plan: The Science of Actually Doing It",
  description:
    "Everyone told you to visualize success. The research says that, on its own, it makes you less likely to get it. This course teaches what actually works instead: mental contrasting (imagine the outcome, then confront the obstacle inside you) combined with implementation intentions (if this happens, then I will do that). Together they are called MCII, and Gabriele Oettingen's team packages them for the public as Wish, Outcome, Obstacle, Plan. You will finish able to run the method correctly on a real goal of your own, explain why each of the four steps is there, and, just as importantly, say honestly what the evidence does and does not support. Every study is cited with a DOI. The effects are real and they are modest, and this course tells you which is which.",
  lessons: [
    // ───────────────── SECTION 1 · WHY POSITIVE THINKING BACKFIRES ─────────────────
    {
      slug: "mcii-what-this-course-is",
      title: "1 · What this course is (and the uncomfortable finding at the center of it)",
      section: "Section 1 · Why positive thinking backfires",
      body: `You have been told, probably many times, to picture the thing you want. See yourself crossing the finish line. See the acceptance letter. See the money in the account. The advice is everywhere, and it feels true, because imagining a good future feels good.

Here is the finding this course is built on: **on its own, that feels-good imagining is associated with putting in LESS effort and getting WORSE results.** Not "no effect." Worse. Across four very different groups of people (graduating students looking for work, students with a crush, undergraduates facing an exam, and patients recovering from hip-replacement surgery), the people who had the most positive fantasies about how it would turn out did *less well* weeks, months, and in one case two years later (Oettingen & Mayer, 2002).

That is not a slogan and it is not a paradox for its own sake. It has a mechanism, and it has a fix, and the fix is a method you can learn in about an hour and run in about five minutes.

**What you will be able to do at the end.** Take a real goal of your own, run the method on it correctly, and explain why each step is there. Also: read the research behind it honestly, including the parts that are weaker than the marketing suggests. Those two skills are the same skill, and this course refuses to separate them.

**The three names you need, and they are not interchangeable.**

| Name | Who | What it is |
| --- | --- | --- |
| **Mental contrasting** | Gabriele Oettingen | Imagine the desired outcome vividly, then immediately confront the obstacle *inside you* that stands in the way. It is a way of *setting* a goal. |
| **Implementation intentions** | Peter Gollwitzer | An "if [situation], then I will [action]" plan formed in advance. It is a way of *striving for* a goal you have already set. |
| **MCII** | Both, together | Mental Contrasting with Implementation Intentions. The two combined into one protocol, which is what almost all of the intervention research actually tests. |

Oettingen is a professor of psychology at New York University and the University of Hamburg; Gollwitzer is her frequent co-author. That is roughly all the biography this course needs, because **the research is the content.** You are not here to admire a scientist. You are here to run her method on your own life.

**A note on the name, and why this course does not use it as a brand.** Oettingen's team packages the four steps for the public as **Wish, Outcome, Obstacle, Plan**, under the short name WOOP, with a free app and website at woopmylife.org (WOOP my life, n.d.). That tool is free and it is good, and you should go use it. But **this course is not affiliated with, endorsed by, licensed by, or connected to Oettingen, her team, or woopmylife.org.** We teach the published science, we cite it, and we wrote our own exercises from scratch. We do not reproduce their worksheets, their app, or their materials. Throughout this course the method is called by its scientific name, **MCII**, and the four steps are called by their four ordinary English words.

**Set your goal now, before Lesson 2.** Pick one thing you actually want in the next four weeks. Not your life's purpose. Something with a deadline you can see: finish the application, run three times a week, send the invoices, learn the first fifty words of a language. Write it on paper. You will use it in every section, and in Section 4 you will run the full method on it.

:::reveal Mental contrasting, implementation intentions, and MCII are three different things. Which one is a way of SETTING a goal, which one is a way of STRIVING for a goal, and which one is both? ||| Mental contrasting (Oettingen) is for **setting** a goal: it decides whether you commit. Implementation intentions (Gollwitzer) are for **striving**: they automate what you do once you have committed. **MCII** is the two combined, and it is the combination that nearly all of the intervention research actually tests.

## Sources
- Oettingen, G., & Mayer, D. (2002). The motivating function of thinking about the future: Expectations versus fantasies. *Journal of Personality and Social Psychology, 83*(5), 1198-1212. https://doi.org/10.1037/0022-3514.83.5.1198
- WOOP my life. (n.d.). *WOOP* [Website]. https://woopmylife.org/`,
    },
    {
      slug: "mcii-fantasy-is-not-expectation",
      title: "2 · A fantasy is not an expectation (and only one of them helps)",
      section: "Section 1 · Why positive thinking backfires",
      recallContent: [
        {
          prompt: "What are the three names in this course, and how do they differ?",
          answer:
            "Mental contrasting (Oettingen) is a way of setting a goal. Implementation intentions (Gollwitzer) are if-then plans for striving toward a goal you already set. MCII is the two combined, and it is what most of the intervention research tests.",
        },
        {
          prompt: "Does this course claim any affiliation with Oettingen's team or woopmylife.org?",
          answer:
            "No. It teaches the published science, cites it, and uses original exercises. It is not affiliated with, endorsed by, or licensed by Oettingen, her team, or woopmylife.org, and it reproduces none of their materials.",
        },
      ],
      body: `Almost everybody, including most people who write about motivation, collapses two completely different mental acts into the phrase "positive thinking." Oettingen and Mayer (2002) pulled them apart, and once you see the difference you cannot unsee it.

**An expectation** is a *judgment*: how likely do I think this is, based on what I have actually done before? "I have hit this kind of deadline four times out of five, so I will probably hit this one."

**A fantasy** is an *experience*: images and thoughts about a desired future, enjoyed in the present, free of any judgment about whether they are likely. "I can see myself accepting the offer. It feels great."

They point in opposite directions.

| | What it is | What it predicted |
| --- | --- | --- |
| **Positive expectations** | Judging a desired future as *likely* | **More** effort, **better** performance |
| **Positive fantasies** | *Enjoying* images of a desired future | **Less** effort, **worse** performance |

That table is the finding, and it held across four studies with four different populations, with outcomes measured from weeks to two years later (Oettingen & Mayer, 2002):

- **Graduates looking for work.** Those with the most positive *fantasies* about their professional future went on to send out fewer applications, get fewer offers, and earn less. Those with high *expectations* did better.
- **Students with a crush.** More positive fantasies about the relationship, less likely to actually be in one months later.
- **Undergraduates facing an exam.** More positive fantasies, lower effort and worse grades.
- **Patients recovering from hip-replacement surgery.** More positive fantasies about recovery, worse recovery.

Read those four again. They are not four versions of the same study, and they are not all self-report. They are four different life domains (work, love, school, the body), and the pattern is the same in all of them.

**Why this matters more than a usual research finding.** The advice industry has spent decades telling you to do the thing in the right-hand column. Vision boards, "see it and be it," guided visualizations of the outcome. Every one of those is a fantasy exercise. None of them is an expectation exercise, because you cannot *decide* to expect something; expectations come from evidence about your own track record.

**One caution about what kind of evidence this is.** These four studies are *correlational*: they measured people's spontaneous fantasies and then followed them. Correlation does not, by itself, prove that the fantasy *caused* the worse outcome. That objection is fair and it is exactly the right objection to make. Lesson 3 is about the experiments that were run to answer it.

:::reveal Someone tells you they are "really visualizing" getting the job. Which of the two mental acts is that, and what would the other one sound like? ||| That is a **fantasy**: enjoying images of the desired outcome in the present, with no judgment of likelihood. An **expectation** would sound like a judgment grounded in a track record: "I have made it to the final round in three of my last four applications, so I think I have a real chance at this one." Positive expectations predicted *more* effort and better performance; positive fantasies predicted *less* (Oettingen & Mayer, 2002).

## Sources
- Oettingen, G., & Mayer, D. (2002). The motivating function of thinking about the future: Expectations versus fantasies. *Journal of Personality and Social Psychology, 83*(5), 1198-1212. https://doi.org/10.1037/0022-3514.83.5.1198`,
    },
    {
      slug: "mcii-why-fantasy-saps-energy",
      title: "3 · Why the daydream drains you: fantasy realization theory",
      section: "Section 1 · Why positive thinking backfires",
      recallContent: [
        {
          prompt: "What is the difference between a positive expectation and a positive fantasy, and which one predicts success?",
          answer:
            "An expectation is a judgment of likelihood based on your track record, and it predicted MORE effort and better performance. A fantasy is enjoying images of the desired future with no judgment of likelihood, and it predicted LESS effort and worse performance (Oettingen & Mayer, 2002).",
        },
        {
          prompt: "Name the four populations in Oettingen and Mayer (2002), and the honest limitation of those four studies.",
          answer:
            "Graduates seeking jobs, students with a crush, undergraduates facing an exam, and hip-replacement patients. The limitation: those studies were correlational, so on their own they cannot prove the fantasy caused the worse outcome.",
        },
      ],
      body: `If positive fantasies really do hurt, something has to explain *how*. Oettingen's answer is called **fantasy realization theory** (Oettingen, 2012), and the short version is this: **a vivid enough daydream is consumed as if it were a small helping of the real thing.**

You wanted the feeling that comes with the outcome. The fantasy hands you a sample of that feeling now, for free, with no work. Having been partly satisfied, you are less mobilized to go get the rest. The daydream does not motivate you toward the goal. It *substitutes* for it.

**The experiment that put a number on it.** Kappes and Oettingen (2011) ran experiments in which participants were induced to fantasize positively about a desired future, or not. Then the researchers measured **energization**: in one study physiologically, via **systolic blood pressure** (a standard proxy for how mobilized the body is for effort), and in others via how energized people reported feeling. Participants who had fantasized positively came out **lower** on that energy measure. A further experiment tested whether the de-energizing effect was strongest when the fantasy was about a currently pressing need. This matters because it moves the claim out of correlation and into cause: **inducing** the fantasy *lowered* the mobilization for effort.

**The three ways people think about the future.** Fantasy realization theory names three, and only one of them works (Oettingen, 2012; Oettingen, Pak, & Schnetter, 2001):

| Mode | What you do | What it produces |
| --- | --- | --- |
| **Indulging** | Dwell only on the lovely future | Feels great, energy drops, weak commitment |
| **Dwelling** | Dwell only on the grim present reality | Feels bad, no direction, weak commitment |
| **Mental contrasting** | The future first, *then* the obstacle, in that order | Commitment that tracks how likely success actually is |

Notice that **dwelling is not the answer either.** This course is not telling you to be a pessimist. Ruminating about how bad things are produces exactly as little commitment as daydreaming does. Both of them fail for the same underlying reason: neither one puts the future and the obstacle **next to each other**, and it is the collision between the two that does the work.

**So the daydream is not the enemy. The daydream on its own is.** Mental contrasting *keeps* the vivid positive future. It is step two of four, and the method does not work without it. What it adds is the thing that turns the future from a place you visit into a place you are being kept out of, by something specific, that you could go and deal with.

:::reveal Your friend says the answer to this research must be "stop imagining good outcomes and be realistic about how bad things are." Why is that wrong? ||| Because that is **dwelling**, and dwelling produces just as little commitment as indulging does (Oettingen, 2012). Neither one works, and they fail for the same reason: neither puts the desired future and the obstacle **side by side**. Mental contrasting keeps the vivid positive future and *adds* the obstacle, in that order. The collision between the two is the mechanism.

## Sources
- Kappes, H. B., & Oettingen, G. (2011). Positive fantasies about idealized futures sap energy. *Journal of Experimental Social Psychology, 47*(4), 719-729. https://doi.org/10.1016/j.jesp.2011.02.003
- Oettingen, G. (2012). Future thought and behaviour change. *European Review of Social Psychology, 23*(1), 1-63. https://doi.org/10.1080/10463283.2011.643698
- Oettingen, G., Pak, H., & Schnetter, K. (2001). Self-regulation of goal setting: Turning free fantasies about the future into binding goals. *Journal of Personality and Social Psychology, 80*(5), 736-753. https://doi.org/10.1037/0022-3514.80.5.736`,
    },
    {
      slug: "mcii-the-intention-behavior-gap",
      title: "4 · The intention-behavior gap: wanting it is not the hard part",
      section: "Section 1 · Why positive thinking backfires",
      recallContent: [
        {
          prompt: "What does fantasy realization theory say a vivid daydream does to your energy, and what was the physiological measure?",
          answer:
            "The daydream is consumed as a small helping of the real thing, so it partly satisfies you and lowers your mobilization for effort. Kappes and Oettingen (2011) measured energization with systolic blood pressure, and positive fantasizing lowered it.",
        },
        {
          prompt: "Name the three modes of thinking about the future in fantasy realization theory.",
          answer:
            "Indulging (the lovely future only), dwelling (the grim present only), and mental contrasting (the future and then the obstacle, in that order). Only mental contrasting produces commitment that tracks the real odds of success.",
        },
      ],
      body: `Now the second half of the problem, and it is the half that everyone underestimates.

Suppose you fix the fantasy problem. You have a genuine, well-formed intention. You *mean* it. How much of the way to the finish line does meaning it get you?

**Not far.** Webb and Sheeran (2006) meta-analyzed the experimental evidence: across the studies, a **medium-to-large change in people's intentions (d = 0.66) produced only a small-to-medium change in their actual behavior (d = 0.36)**. Move someone's intentions a long way and their behavior moves about half as far. Sheeran and Webb (2016) later gave the phenomenon its name: the **intention-behavior gap**.

Sit with the shape of that. It means that the interventions most of us reach for (persuade people, inspire them, remind them why it matters, get them to *want* it more) are working on the variable that is only loosely attached to the outcome. **The people who fail at their goals are, overwhelmingly, people who intended to do them.** New Year's resolutions are not a failure of desire.

**So there are two separate problems, and they need two separate tools.**

1. **The goal-setting problem.** Do you actually commit, with real energy, to the goal, or do you just enjoy the idea of it? Mental contrasting is the tool. That is Section 2.
2. **The goal-striving problem.** Having committed, do you actually act in the moment, when you are tired, distracted, and it would be so easy not to? Implementation intentions are the tool. That is Section 3.

MCII is the two tools bolted together, and the reason it is taught as one method is that **each tool fails without the other**. A perfect if-then plan for a goal you were never really committed to is a plan you will not run. And a burning commitment with no plan runs straight into the intention-behavior gap, which is where most burning commitments go to die.

This is also, by the way, the honest reason that a course like this one is not a scam and not a miracle. It does not promise to make you want things more. It assumes you already do. It works on the two seams where wanting leaks out before it becomes doing.

:::reveal Webb and Sheeran (2006) found that a large change in intentions (d = 0.66) produced only a d = 0.36 change in behavior. What does that imply about advice that tries to make you "want it more"? ||| It implies that such advice is pushing on the weakest link. Intention is only loosely attached to behavior (the **intention-behavior gap**; Sheeran & Webb, 2016), so most people who fail at a goal are people who genuinely intended to do it. The leverage is not in wanting harder; it is in **setting** the goal properly (mental contrasting) and in **automating the action** (implementation intentions).

## Sources
- Sheeran, P., & Webb, T. L. (2016). The intention-behavior gap. *Social and Personality Psychology Compass, 10*(9), 503-518. https://doi.org/10.1111/spc3.12265
- Webb, T. L., & Sheeran, P. (2006). Does changing behavioral intentions engender behavior change? A meta-analysis of the experimental evidence. *Psychological Bulletin, 132*(2), 249-268. https://doi.org/10.1037/0033-2909.132.2.249`,
    },
    {
      slug: "mcii-quiz-why-positive-thinking-backfires",
      title: "5 · Quiz: why positive thinking backfires",
      section: "Section 1 · Why positive thinking backfires",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "According to Oettingen and Mayer (2002), what did positive FANTASIES about a desired future predict?",
            options: [
              "More effort and better performance",
              "Less effort and worse performance",
              "No relationship with effort or performance",
              "Better performance only in the short term",
            ],
            correctIndex: 1,
            explanation:
              "Positive fantasies predicted lower effort and worse attainment across four populations. Positive EXPECTATIONS predicted the opposite.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "What is the difference between a positive expectation and a positive fantasy?",
            options: [
              "An expectation judges likelihood; a fantasy just enjoys the image",
              "An expectation is about other people; a fantasy is about yourself",
              "Both are judgments of likelihood aimed at different future goals",
              "An expectation is emotional, while a fantasy stays coldly rational",
            ],
            correctIndex: 0,
            explanation:
              "Expectations are judgments grounded in a track record. Fantasies are experiences of a desired future enjoyed in the present. They predict opposite outcomes.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "Which four populations were studied in Oettingen and Mayer (2002)?",
            options: [
              "Pro athletes, concert musicians, chess masters, and soldiers",
              "Job-seekers, people with a crush, exam-takers, hip-surgery patients",
              "Only undergraduate psychology students, in four separate semesters",
              "Executives, schoolteachers, ER nurses, and retired veterans",
            ],
            correctIndex: 1,
            explanation:
              "Four different life domains (work, love, school, the body), with outcomes measured from weeks up to two years later.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "What is the honest limitation of the four Oettingen and Mayer (2002) studies?",
            options: [
              "They used no control group or comparison condition at all",
              "They were correlational, so alone they cannot prove causation",
              "They were never peer-reviewed prior to their publication",
              "They measured only feelings and never any actual behavior",
            ],
            correctIndex: 1,
            explanation:
              "They measured spontaneous fantasies and followed people over time. The causal case comes from later experiments that INDUCED fantasies.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "In Kappes and Oettingen (2011), what physiological measure was used as a proxy for energization, and what happened to it after positive fantasizing?",
            options: [
              "Heart-rate variability, which increased",
              "Systolic blood pressure, which went down",
              "Cortisol, which went up",
              "Pupil dilation, which was unchanged",
            ],
            correctIndex: 1,
            explanation:
              "Systolic blood pressure is a standard proxy for mobilization for effort. Inducing positive fantasies lowered it, which is why the paper is titled 'sap energy'.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Why is the Kappes and Oettingen (2011) result more probative than the 2002 studies?",
            options: [
              "It recruited a much larger and more representative sample",
              "It INDUCED the fantasy rather than merely measuring it",
              "It was published in a more prestigious peer-reviewed journal",
              "It followed the participants for two full years afterward",
            ],
            correctIndex: 1,
            explanation:
              "The 2002 studies were correlational. The 2011 experiments manipulated fantasizing and observed energy drop, which addresses the causal objection.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Fantasy realization theory says a vivid positive daydream does what?",
            options: [
              "Rehearses the concrete real-world skills you need to succeed",
              "Gives a sample of the feeling, lowering your drive to get the rest",
              "Increases your expectation of success, which then increases effort",
              "Has no measurable effect unless you also write it down first",
            ],
            correctIndex: 1,
            explanation:
              "Indulging in the outcome partly SUBSTITUTES for achieving it. The daydream is consumed as a small helping of the real thing (Oettingen, 2012).",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "What are the three modes of future thought in fantasy realization theory?",
            options: [
              "Planning, rehearsing, and reviewing",
              "Indulging, dwelling, and mental contrasting",
              "Wishing, hoping, and doing",
              "Optimism, pessimism, and realism",
            ],
            correctIndex: 1,
            explanation:
              "Indulging is the future only; dwelling is the grim present only; mental contrasting is the future and THEN the obstacle, in that order.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Someone concludes from this research that the fix is to think realistically about how bad things currently are. What is wrong with that?",
            options: [
              "Nothing, that is precisely what the research recommends doing",
              "That is DWELLING, and it builds as little commitment as indulging",
              "It works, but only for people who already hold high expectations",
              "It works, but only for physical-health and fitness goals",
            ],
            correctIndex: 1,
            explanation:
              "Dwelling on present reality alone fails for the same reason indulging does: it never puts the future and the obstacle side by side.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Does mental contrasting ask you to give up the vivid positive image of the future?",
            options: [
              "Yes, giving up that image is the whole point of the method",
              "No. It KEEPS the positive future and adds the obstacle right after",
              "Yes, you must abandon it whenever your expectations are low",
              "It makes no measurable difference to the final outcome either way",
            ],
            correctIndex: 1,
            explanation:
              "The positive future is step two of four and the method does not work without it. What is added is the obstacle, and the ORDER matters.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "In Webb and Sheeran's (2006) meta-analysis, a medium-to-large change in intention (d = 0.66) produced what size change in behavior?",
            options: [
              "An equally large change (d = 0.66)",
              "A small-to-medium change (d = 0.36)",
              "No change at all (d = 0.00)",
              "A larger change (d = 0.90)",
            ],
            correctIndex: 1,
            explanation:
              "Behavior moved about half as far as intention did. This is the intention-behavior gap.",
            sourceLessonSlug: "mcii-the-intention-behavior-gap",
          },
          {
            prompt: "What is the practical implication of the intention-behavior gap for motivational advice?",
            options: [
              "Advice to make you WANT the goal more pushes on the weakest link",
              "Nobody who fails at a goal ever really intended to do it",
              "Intentions are irrelevant to outcomes and should be ignored",
              "Only people with weak initial intentions ever end up failing",
            ],
            correctIndex: 0,
            explanation:
              "Most people who fail at a goal genuinely intended to achieve it. The leverage is in goal SETTING and goal STRIVING, not in wanting harder.",
            sourceLessonSlug: "mcii-the-intention-behavior-gap",
          },
          {
            prompt: "Which tool addresses the goal-SETTING problem, and which addresses the goal-STRIVING problem?",
            options: [
              "Implementation intentions set the goal; mental contrasting drives the striving",
              "Mental contrasting sets the goal; implementation intentions drive the striving",
              "Both do both, which is why they are redundant",
              "Neither: MCII is a single indivisible step",
            ],
            correctIndex: 1,
            explanation:
              "Mental contrasting decides whether you commit. Implementation intentions automate the action once you have committed. MCII is the two combined.",
            sourceLessonSlug: "mcii-the-intention-behavior-gap",
          },
          {
            prompt: "Why does the course insist that mental contrasting and implementation intentions are taught together?",
            options: [
              "Because Oettingen and Gollwitzer personally co-authored the studies",
              "Because each fails without the other: no commitment, no plan works",
              "Because the official WOOP smartphone app happens to require both",
              "Because the two methods were both invented in the very same year",
            ],
            correctIndex: 1,
            explanation:
              "The combined protocol (MCII) is what nearly all of the intervention research actually tests, and each half addresses a different failure point.",
            sourceLessonSlug: "mcii-the-intention-behavior-gap",
          },
          {
            prompt: "What relationship does this course claim to Gabriele Oettingen's team and woopmylife.org?",
            options: [
              "It is the officially licensed companion course of the WOOP app",
              "None: it teaches the cited science and is unaffiliated with them",
              "It licenses their official worksheets under a written agreement",
              "It is a rival product that publicly disputes their findings",
            ],
            correctIndex: 1,
            explanation:
              "The course teaches the peer-reviewed method (MCII), writes its own exercises, reproduces none of their materials, and points learners to their free official tool.",
            sourceLessonSlug: "mcii-what-this-course-is",
          },
        ],
      },
    },

    // ───────────────── SECTION 2 · MENTAL CONTRASTING: THE ENGINE ─────────────────
    {
      slug: "mcii-how-mental-contrasting-works",
      title: "6 · Mental contrasting: putting the future and the obstacle side by side",
      section: "Section 2 · Mental contrasting: the engine",
      recallContent: [
        {
          prompt: "What is the intention-behavior gap, and how big is it?",
          answer:
            "Intentions are only loosely attached to behavior. Webb and Sheeran (2006) found a medium-to-large change in intention (d = 0.66) produced only a small-to-medium change in behavior (d = 0.36).",
        },
        {
          prompt: "Which two problems does MCII solve, and with which tool each?",
          answer:
            "The goal-setting problem (do you really commit?), solved by mental contrasting. And the goal-striving problem (do you act in the moment?), solved by implementation intentions.",
        },
      ],
      body: `Mental contrasting is two mental acts, performed in one sitting, **in a fixed order**:

1. **Imagine the desired future.** Not the steps, not the plan. The *outcome*, and specifically the best thing about it. Make it vivid. Let yourself feel it.
2. **Immediately confront the obstacle inside you that stands in the way.** Also vivid, also concrete, also felt.

That is it. No affirmations, no journaling ritual, no hour. Two elaborations, in that order, done properly.

**Why the order is load-bearing.** Reverse it (obstacle first, then future) and the effect weakens or disappears in the experimental work: contrasting the *reality* with the future is not the same operation as contrasting the *future* with the reality (Oettingen, 2012). The reason is directional. When the future comes first, the obstacle arrives as *the thing standing between you and something you can already taste*, and it acquires urgency from the future you just built. When the obstacle comes first, the lovely future arrives afterward as consolation, an escape from the grim present, which is just indulging with extra steps.

**What the collision actually does.** Oettingen, Pak, and Schnetter (2001) ran the study that made this a theory rather than a technique. Participants were led into mental contrasting, or into indulging (future only), or into dwelling (reality only). Then the researchers measured how committed they were to the goal. And the finding was not "mental contrasting produces more commitment." It was stranger and much more useful than that:

- People who **mentally contrasted** ended up with commitment that **tracked their expectations of success**. High expectations, strong commitment. Low expectations, weak commitment.
- People who **indulged** or **dwelled** ended up with **middling commitment either way**, largely disconnected from whether they were actually likely to succeed.

Read that twice, because most summaries of this research get it wrong. **Mental contrasting is not a commitment amplifier. It is a commitment *selector*.** It does not make you want everything more. It makes you want the reachable things more and the unreachable things less, by forcing you to consult the one thing indulging lets you skip: your actual track record.

That is why the method is *honest*, and it is also why some people find it uncomfortable. Run it on a goal you secretly know you are not going to do, and it will not manufacture enthusiasm for you. It will tell you.

**The mechanism, in one sentence.** Contrasting the vivid future against the vivid obstacle activates your expectations, and the activated expectations then do the deciding (Oettingen, 2012; Oettingen et al., 2001). Lesson 8 is about what happens when those expectations come back low, which is the most misunderstood part of this entire method.

:::reveal Mental contrasting is often sold as a way to boost motivation. Based on Oettingen, Pak, and Schnetter (2001), what is it actually doing? ||| It is **selecting**, not amplifying. Mental contrasting makes commitment **track your expectations of success**: strong when expectations are high, weak when they are low. Indulging and dwelling produce middling commitment either way, disconnected from your real odds. So it does not make you want everything more; it makes you want the *reachable* things more, by forcing you to consult a track record that indulging lets you skip.

## Sources
- Oettingen, G. (2012). Future thought and behaviour change. *European Review of Social Psychology, 23*(1), 1-63. https://doi.org/10.1080/10463283.2011.643698
- Oettingen, G., Pak, H., & Schnetter, K. (2001). Self-regulation of goal setting: Turning free fantasies about the future into binding goals. *Journal of Personality and Social Psychology, 80*(5), 736-753. https://doi.org/10.1037/0022-3514.80.5.736`,
    },
    {
      slug: "mcii-the-inner-obstacle",
      title: "7 · The obstacle is inside you (this is where most people fail)",
      section: "Section 2 · Mental contrasting: the engine",
      recallContent: [
        {
          prompt: "What are the two acts of mental contrasting, and why does the order matter?",
          answer:
            "First elaborate the desired future vividly, then immediately elaborate the inner obstacle. Reversed, the effect weakens: the future must come first so the obstacle arrives as the thing standing between you and something you can already taste.",
        },
        {
          prompt: "Is mental contrasting a commitment amplifier or a commitment selector?",
          answer:
            "A selector. It makes commitment track your expectations of success (strong when high, weak when low), rather than raising commitment across the board (Oettingen, Pak, & Schnetter, 2001).",
        },
      ],
      body: `If you take one practical thing from this course, take this one. **The obstacle step asks for an obstacle *in you*, and almost everybody, on their first try, names something else.**

Watch what people produce when you ask them what stands between them and their goal:

| What they say | What it actually is |
| --- | --- |
| "I don't have enough time" | A circumstance, and usually a fiction |
| "The job market is terrible" | A condition of the world |
| "My manager never gives me the good projects" | Another person |
| "I need a better laptop first" | A purchase |
| "I get home and I am so tired that I open my phone instead" | **An obstacle** |

Only the last one qualifies. The test is simple and it is unforgiving: **an inner obstacle is a thought, feeling, habit, or behavior of yours that you could, in principle, do something about.** It lives on your side of the line.

**Why the method insists on this.** Because of what happens next. Section 3 will have you build an if-then plan whose trigger is the obstacle, and **you cannot build a trigger out of the job market.** A trigger has to be something you will actually detect, in the moment, in your own body or your own behavior. "If the economy is bad, then I will..." is not a plan. "If I get home and reach for my phone, then I will put it in the drawer and open the application instead" is.

The obstacle step is not a complaint box. It is a **specification for a trigger**, and it will be worthless to you if you fill it with things you cannot act on.

**How to find the real one.** Ask, in this order:

1. What actually happened the last few times I did not do this? Not why in the abstract. What *happened*, in the last concrete instance.
2. Where exactly did it break down? Be embarrassingly specific: the time of day, the room, the feeling, the thing you did instead.
3. Ask "and what is stopping me from doing that?" repeatedly, and **keep going until the answer is about you.** If the answer names the world, you have not arrived yet.

Most inner obstacles turn out to be one of a small handful: **a feeling** (dread, boredom, anxiety, resentment, the fear it will be bad), **a habit** (opening the app, going to the fridge, saying yes), or **a state** (tired, hungry, distracted, overwhelmed). If your obstacle does not reduce to something in that family, keep digging.

**One caution.** "I am lazy" and "I lack discipline" are not inner obstacles. They are insults, and they are useless, because they are not detectable in the moment and you cannot build a trigger from them. Laziness is not a thing that happens to you at 6:40 pm in the kitchen. Reaching for your phone is.

:::reveal "The market is bad and I don't have time" is not an inner obstacle. What is wrong with it, in terms of what happens in Section 3? ||| It names the world, not you, and the obstacle step exists to **specify a trigger** for an if-then plan. You cannot detect "the market" in the moment, so you cannot build a plan on it. An inner obstacle is a thought, feeling, habit, or behavior of yours that you could act on, and it must be concrete enough to notice when it shows up ("I get home and reach for my phone"). Note also that "I am lazy" fails the same test: it is an insult, not a detectable event.

## Sources
- Oettingen, G. (2012). Future thought and behaviour change. *European Review of Social Psychology, 23*(1), 1-63. https://doi.org/10.1080/10463283.2011.643698
- Oettingen, G., Pak, H., & Schnetter, K. (2001). Self-regulation of goal setting: Turning free fantasies about the future into binding goals. *Journal of Personality and Social Psychology, 80*(5), 736-753. https://doi.org/10.1037/0022-3514.80.5.736`,
    },
    {
      slug: "mcii-expectations-and-letting-go",
      title: "8 · The boundary condition: when the method tells you to quit",
      section: "Section 2 · Mental contrasting: the engine",
      recallContent: [
        {
          prompt: "What is the test for whether something counts as an inner obstacle?",
          answer:
            "It must be a thought, feeling, habit, or behavior of YOURS that you could in principle act on, and it must be concrete enough to detect in the moment. Circumstances, other people, and insults like 'I am lazy' all fail.",
        },
        {
          prompt: "Why must the obstacle be inner, in terms of what comes next in the method?",
          answer:
            "Because the obstacle becomes the TRIGGER of an if-then plan. A trigger has to be something you can actually detect in the moment, so it cannot be the economy or another person.",
        },
      ],
      body: `Here is the part of the method that self-help books quietly delete, and it is the part that makes it a science rather than a pep talk.

**When your expectations of success are LOW, mental contrasting leads you to let the goal go. That is not a malfunction. It is the intended behavior of the tool.**

Recall the finding from Lesson 6: after mental contrasting, commitment *tracks expectations* (Oettingen, Pak, & Schnetter, 2001). High expectations produce strong commitment and energized action. Low expectations produce **weak** commitment, disengagement, and a turn toward something else.

Most people, hearing this, think the method has failed them. It has done the opposite. Consider what the alternative actually is:

- **Indulging** in a goal you cannot reach keeps you attached to it, feeling good about it, and doing nothing about it. Forever. That is not motivation, that is a trap with a nice view.
- **Mental contrasting** on a goal you cannot reach frees the effort, attention, and time that goal was quietly consuming, and lets you spend them somewhere they will actually convert.

Your finite resource is not enthusiasm. It is effort. A tool that helps you *withdraw* effort from a lost cause is doing exactly as much for you as a tool that helps you pour effort into a live one. **Letting go is a feature.**

**What this means when you run the method.** If you contrast honestly and you find your commitment draining away rather than sharpening, do not force it. Ask the diagnostic question: **is this goal genuinely out of reach, or is my expectation low for a bad reason?** Expectations are judgments from a track record, and track records can be short, unrepresentative, or poisoned by one bad experience. Two very different situations produce the same low number:

| Low expectation because... | What to do |
| --- | --- |
| I have tried this five times and it has never worked | Believe it. Let it go, or change the goal to one you can reach. |
| I have never tried, and I am guessing from fear | Get a real data point first. Shrink the goal until it is small enough to attempt, then re-run. |

**Now the honesty, and it is not optional.** The expectation boundary condition is a **central theoretical claim** of this method, and **its evidence is currently weaker than the theory needs it to be.**

- The largest meta-analysis of MCII (Wang, Wang, & Gai, 2021) tested expectation level as a moderator across the pooled studies and **did not find a significant moderating effect**. The only moderator that reached significance was how the intervention was delivered.
- An independent comparison study (Abdulla & Woods, 2021) also found that **expectancy did not moderate** the effect of condition on commitment. The authors offered a plausible explanation: **84.7% of their participants had moderate-to-high expectancy**, so there may not have been enough genuinely low-expectancy people in the sample for the predicted negative effect to show up.

So where does that leave you? With an honest three-part answer, which is the correct answer and not a dodge:

1. The **original experiments** did show expectancy-dependent commitment, and they are good experiments.
2. The **pooled and independent evidence** has not yet confirmed that the moderation holds in general, and one plausible reason is that low-expectancy people are rare in the samples that have been studied.
3. Therefore: **treat "let it go when it is truly out of reach" as good judgment that this theory supports, not as a proven mechanism you should bet a life decision on.** Section 5 goes further into how to read evidence in exactly this state.

A course that told you the boundary condition was settled science would be lying to you, and a course that dropped it because the evidence is untidy would be teaching you a method with its safety catch removed. This is what the middle looks like.

:::reveal You run the method on a goal and feel your commitment DRAIN rather than sharpen. The method "failed." Did it? ||| No. When expectations of success are low, mental contrasting is *supposed* to produce disengagement, and that frees the effort a lost cause was quietly consuming (Oettingen, Pak, & Schnetter, 2001). **Letting go is a feature.** But run the diagnostic first: is the expectation low because your track record honestly says so (believe it), or because you are guessing from fear without ever having tried (shrink the goal, get a real data point, re-run)? And note the honest caveat: this expectancy boundary condition did **not** show up as a significant moderator in the main MCII meta-analysis (Wang et al., 2021) or in Abdulla and Woods (2021), so treat it as supported judgment, not settled mechanism.

## Sources
- Abdulla, A., & Woods, R. (2021). Comparing mental contrasting with implementation intentions against solution-focused and autonomous planning. *School Psychology International, 42*(4), 398-421. https://doi.org/10.1177/01430343211000399
- Oettingen, G., Pak, H., & Schnetter, K. (2001). Self-regulation of goal setting: Turning free fantasies about the future into binding goals. *Journal of Personality and Social Psychology, 80*(5), 736-753. https://doi.org/10.1037/0022-3514.80.5.736
- Wang, G., Wang, Y., & Gai, X. (2021). A meta-analysis of the effects of mental contrasting with implementation intentions on goal attainment. *Frontiers in Psychology, 12*, Article 565202. https://doi.org/10.3389/fpsyg.2021.565202`,
    },
    {
      slug: "mcii-exercise-inner-or-outer",
      title: "9 · Practice: inner obstacle, or something else?",
      section: "Section 2 · Mental contrasting: the engine",
      body: `The obstacle step is where the method usually breaks, so drill it before you use it. For each statement below, decide what it really is. Then, in the last few items, name the mode of future thought being described.

Answer with one word. Spelling is forgiving. When you are done, look at the obstacle you wrote for your own goal and run the same test on it.`,
      exercise: {
        instructions:
          "For items 1-8, answer INNER if it is a genuine inner obstacle (a thought, feeling, habit, or behavior of yours that you could act on and could detect in the moment), or OUTER if it is a circumstance, another person, or an insult. For items 9-12, name the mode of future thought.",
        items: [
          {
            prompt: "\"When I sit down to write, I open a new tab and read the news instead.\" Inner or outer?",
            answer: "inner",
            explanation:
              "A behavior of yours, detectable in the moment. It can become the trigger of an if-then plan, which is exactly what the obstacle step is for.",
          },
          {
            prompt: "\"The hiring market in my field is brutal right now.\" Inner or outer?",
            answer: "outer",
            explanation:
              "A condition of the world. It may well be true, and it is still useless as an obstacle, because you cannot build a detectable trigger out of it.",
          },
          {
            prompt: "\"I'm just lazy.\" Inner or outer?",
            answer: "outer",
            explanation:
              "This one fools people. It sounds internal, but it is an insult, not an event: laziness does not happen at a specific moment you could notice. Dig until you find the behavior underneath it.",
          },
          {
            prompt: "\"Around 4pm I get a wave of dread about the phone call, and I decide to do it tomorrow.\" Inner or outer?",
            answer: "inner",
            explanation:
              "A feeling plus a behavior, with a time attached. This is close to an ideal obstacle: vivid, specific, and detectable.",
          },
          {
            prompt: "\"My manager keeps assigning me the boring projects.\" Inner or outer?",
            answer: "outer",
            explanation:
              "Another person. Your REACTION to it could be an inner obstacle (for example, going quiet in the meeting instead of asking), but the manager is not.",
          },
          {
            prompt: "\"I can't start until I buy a proper desk.\" Inner or outer?",
            answer: "outer",
            explanation:
              "A purchase, and usually a stalling tactic. The inner obstacle hiding behind it is more often a feeling about starting than a missing piece of furniture.",
          },
          {
            prompt: "\"I say yes to every request, and then there is no time left for my own work.\" Inner or outer?",
            answer: "inner",
            explanation:
              "A habit of yours. 'If someone asks me for something before noon, then I will say I'll get back to them tomorrow' is a plan you can actually run.",
          },
          {
            prompt: "\"I get home tired, and the moment I sit on the sofa the evening is gone.\" Inner or outer?",
            answer: "inner",
            explanation:
              "A state (tired) and a behavior (sitting down), both detectable. Note that the trigger is the sofa, not the tiredness, because the sofa is easier to notice.",
          },
          {
            prompt: "Picturing only the promotion, the office, and how good it will feel, and nothing else. This mode is called ___.",
            answer: "indulging",
            accept: ["indulge", "indulgence"],
            explanation:
              "Indulging: the desired future only. It feels good, drains energy, and produces middling commitment disconnected from your real odds (Oettingen, 2012).",
          },
          {
            prompt: "Ruminating only on how bad your current job is, with no picture of anything better. This mode is called ___.",
            answer: "dwelling",
            accept: ["dwell"],
            explanation:
              "Dwelling: the grim present only. It fails for the same reason indulging does. Neither one puts the future and the obstacle side by side.",
          },
          {
            prompt: "Vividly imagining the promotion, and then immediately vividly confronting the fact that you go silent whenever it is time to ask for more. This is ___ contrasting.",
            answer: "mental",
            accept: ["mental contrasting"],
            explanation:
              "Mental contrasting: the future FIRST, then the inner obstacle. The order is load-bearing; reversed, the effect weakens.",
          },
          {
            prompt: "After contrasting honestly, your commitment to a goal drops and you disengage. In this method, that outcome is treated as a ___ (bug or feature?).",
            answer: "feature",
            explanation:
              "When expectations are genuinely low, disengagement frees effort a lost cause was consuming. Note the caveat from Lesson 8: the expectancy moderation is not yet confirmed in the pooled evidence.",
          },
        ],
      },
    },
    {
      slug: "mcii-quiz-mental-contrasting",
      title: "10 · Quiz: mental contrasting",
      section: "Section 2 · Mental contrasting: the engine",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the two acts of mental contrasting, in order?",
            options: [
              "Elaborate the obstacle, then elaborate the desired future",
              "Elaborate the desired future, then the inner obstacle",
              "Write out a full plan, then visualize it succeeding",
              "List your strengths first, then list your weaknesses",
            ],
            correctIndex: 1,
            explanation:
              "Future first, obstacle second. Both vivid, both concrete, one sitting.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "Why does the ORDER of the two elaborations matter?",
            options: [
              "It does not matter; the research shows either order works fine",
              "Future-first makes the obstacle block what you can already taste",
              "Obstacle-first is in fact the officially recommended order",
              "Because the official WOOP app simply enforces that order",
            ],
            correctIndex: 1,
            explanation:
              "Reversing the order weakens or eliminates the effect in the experimental work. The operation is directional (Oettingen, 2012).",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "In Oettingen, Pak, and Schnetter (2001), what happened to the commitment of participants who mentally contrasted?",
            options: [
              "It rose uniformly, regardless of their expectations",
              "It TRACKED expectations: strong when high, weak when low",
              "It fell uniformly, regardless of their expectations",
              "It was statistically identical to the indulging group",
            ],
            correctIndex: 1,
            explanation:
              "This is the central result. Indulging and dwelling produced middling commitment disconnected from real odds; mental contrasting made commitment track expectations.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "Is mental contrasting best described as a commitment amplifier or a commitment selector?",
            options: [
              "An amplifier: it simply makes you want everything more",
              "A selector: reachable things more, unreachable things less",
              "Neither: it has no measurable effect on commitment",
              "An amplifier, but only for health and fitness goals",
            ],
            correctIndex: 1,
            explanation:
              "It forces you to consult your actual track record, which indulging lets you skip. It will not manufacture enthusiasm for a goal you know you will not pursue.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "What is the test for a genuine INNER obstacle?",
            options: [
              "It must be the single biggest problem that you currently face",
              "A thought, feeling, or habit of yours you can detect in the moment",
              "It must be something most other people also struggle with",
              "It must be completely solvable within a single week's time",
            ],
            correctIndex: 1,
            explanation:
              "It has to live on your side of the line, and it has to be concrete enough to notice when it shows up.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "Why does the method insist the obstacle be internal rather than a circumstance?",
            options: [
              "To encourage you to take personal responsibility for everything",
              "Because the obstacle becomes the TRIGGER of an if-then plan",
              "Because external obstacles are essentially never truly real",
              "Because keeping it internal makes the exercise run faster",
            ],
            correctIndex: 1,
            explanation:
              "The obstacle step is a specification for a trigger, not a complaint box. External conditions may be entirely real and still be useless here.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "Why is \"I'm just lazy\" a bad obstacle even though it sounds internal?",
            options: [
              "Because the label is simply far too harsh on yourself",
              "Because it is an insult, not a detectable event you can catch",
              "Because laziness is not a genuinely real personal trait",
              "Because it is really an external circumstance, not internal",
            ],
            correctIndex: 1,
            explanation:
              "You cannot build an if-then trigger from a character judgment. Dig until you find the behavior underneath it.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "Which of these is the best-formed inner obstacle?",
            options: [
              "\"The national economy is really quite bad right now.\"",
              "\"I get home, sit on the sofa, and the evening disappears.\"",
              "\"I honestly need a far better laptop before I start.\"",
              "\"My manager plainly does not respect me one bit.\"",
            ],
            correctIndex: 1,
            explanation:
              "A state plus a behavior, both detectable in the moment, which is exactly what an if-then plan needs.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "When your expectations of success are LOW, what does mental contrasting lead to, and how should you read that?",
            options: [
              "Stronger commitment, which is the entire point of the method",
              "Weak commitment and disengagement, treated as a FEATURE not a bug",
              "No measurable change in your goal commitment level at all",
              "An error that means you performed the method incorrectly",
            ],
            correctIndex: 1,
            explanation:
              "Disengaging from a goal you cannot reach frees the effort that goal was quietly consuming. Indulging, by contrast, keeps you attached and inactive.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Your expectation is low. What is the diagnostic question before you let the goal go?",
            options: [
              "Do most other people around me think that I can do it?",
              "Is it low from my real track record, or from untested fear?",
              "How badly do I truly want to reach this particular goal?",
              "Would repeating a positive affirmation change my mind?",
            ],
            correctIndex: 1,
            explanation:
              "Two very different situations produce the same low number. If you have never tried, shrink the goal until it is attemptable, get a real data point, and re-run.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "What did the Wang, Wang, and Gai (2021) meta-analysis find when it tested EXPECTATION LEVEL as a moderator of the MCII effect?",
            options: [
              "It confirmed the expectancy boundary condition strongly",
              "It did NOT find a significant moderation by expectation level",
              "It found the whole effect reversed at high expectations",
              "It never actually tested expectation level as a moderator",
            ],
            correctIndex: 1,
            explanation:
              "This is the honest caveat. The only moderator that reached significance was how the intervention was delivered (face-to-face vs document).",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Abdulla and Woods (2021) also found no expectancy moderation. What explanation did the authors offer?",
            options: [
              "That mental contrasting simply does not ever work at all",
              "That 84.7% had moderate-to-high expectancy, too few low ones",
              "That their whole measure of commitment was simply invalid",
              "That a number of the participants had simply cheated",
            ],
            correctIndex: 1,
            explanation:
              "A restricted range on the moderator is a real and specific limitation, and naming it is more useful than either dismissing or ignoring the null result.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Given that the original experiments supported the expectancy boundary but the pooled evidence has not confirmed it, how should you hold the idea?",
            options: [
              "As settled science you can bet a life decision on",
              "As good judgment the theory supports, but not proven",
              "As definitively refuted, and therefore safe to ignore",
              "As reliably true only for people over the age of 30",
            ],
            correctIndex: 1,
            explanation:
              "The honest middle. Presenting it as settled would be a lie; dropping it would remove the method's safety catch.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Why is indulging in an unreachable goal described as \"a trap with a nice view\"?",
            options: [
              "Because it just makes you feel quite bad about yourself",
              "Because it keeps you attached, feeling good, and doing nothing",
              "Because it always makes you quit the goal far too early",
              "Because it raises your expectations unrealistically high",
            ],
            correctIndex: 1,
            explanation:
              "Your finite resource is effort, not enthusiasm. A tool that helps you withdraw effort from a lost cause is doing real work for you.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Which of these correctly describes what dwelling produces?",
            options: [
              "Strong commitment, because facing reality is motivating",
              "Middling commitment, disconnected from your real odds",
              "The exact same result you get from mental contrasting",
              "Clearly higher expectations of your future success",
            ],
            correctIndex: 1,
            explanation:
              "Dwelling on the grim present alone fails for the same reason indulging does: neither puts the future and the obstacle side by side.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
        ],
      },
    },

    // ─────────────── SECTION 3 · IMPLEMENTATION INTENTIONS: THE TRIGGER ───────────────
    {
      slug: "mcii-goal-vs-implementation-intention",
      title: "11 · Two kinds of intention, and only one of them survives contact with Tuesday",
      section: "Section 3 · Implementation intentions: the trigger",
      recallContent: [
        {
          prompt: "What does mental contrasting do to commitment when expectations are low, and is that a bug?",
          answer:
            "It produces weak commitment and disengagement. That is a feature: it frees the effort a lost cause was consuming. But the expectancy moderation is not confirmed in the pooled evidence, so treat it as supported judgment, not settled mechanism.",
        },
        {
          prompt: "Give an example of a well-formed inner obstacle and a badly-formed one.",
          answer:
            "Well-formed: 'I get home, sit on the sofa, and the evening disappears' (a detectable state plus behavior). Badly-formed: 'the job market is brutal' (a condition of the world) or 'I'm lazy' (an insult, not an event).",
        },
      ],
      body: `Peter Gollwitzer drew a distinction in 1993 that turns out to explain most of why people do not do what they said they would. It is a distinction between **two kinds of intention**, and they are not the same object at all (Gollwitzer, 1999).

**A goal intention** has the structure: **"I intend to reach x!"** It names an end point, a performance or an outcome. "I intend to get fit." "I intend to finish the application." Forming one turns a vague desire into a binding goal, and it produces a genuine sense of commitment. Every goal theory you have ever met, including the theory of planned behavior, is about this kind of intention.

**An implementation intention** has the structure: **"When situation x arises, I will perform response y!"** It is *subordinate* to a goal intention and it specifies the **when, where, and how** of the actions that lead to the goal (Gollwitzer, 1999). It does not link *you* to a desired end state. It links **a specific situation** to **a specific response**.

That structural difference is the whole trick. A goal intention commits your *self* to an outcome. An implementation intention **delegates control of the action to a situational cue**, so that when the cue shows up, the response is triggered without you having to relitigate the decision while tired.

**What it buys you, in numbers.**

- **Students writing a report over Christmas.** Half were asked to specify exactly when and where they would write it during a 48-hour window; half were not. When the reports came back in the mail, **three quarters** of the implementation-intention students had written theirs in the required period, against **one third** of the controls (Gollwitzer & Brandstätter, 1997, as reported in Gollwitzer, 1999).
- **Women who had already resolved to do a breast self-examination in the next month.** Among those with strong goal intentions, **100% did so if they had also been induced to form an implementation intention** (writing down where and when). Among those with the same strong goal intention and no implementation intention, **only 53% did** (Orbell, Hodgkins, & Sheeran, 1997, as reported in Gollwitzer, 1999).

Look hard at that second one. **Every woman in it already intended to do the thing.** The intention was held constant. All that changed was whether they had specified a when and a where, and the completion rate nearly doubled. This is the intention-behavior gap from Lesson 4, being closed by one sentence written on a piece of paper.

**And now the discipline this course promised you.** That 100% figure is arresting, and you should be suspicious of arresting figures. **It comes from a single study, from 1997, with a modest sample, and 100% is the kind of clean number that rarely survives replication at the same magnitude.** Do not go and repeat "it doubles your follow-through" as though it were a law. The *direction* of the effect is supported by a large body of later work, which you will meet in Lesson 12 and weigh properly in Section 5. The *size* of the effect in any one striking study is almost always the least reliable thing about it.

:::reveal Write the two intention structures, and explain why the second one works when you are tired. ||| Goal intention: **"I intend to reach x!"** It links your SELF to an end state. Implementation intention: **"When situation x arises, I will perform response y!"** It links a SITUATION to a RESPONSE (Gollwitzer, 1999). The second survives Tuesday because it **delegates control of the action to a situational cue**: when the cue appears, the response fires without you having to re-make the decision at the exact moment you have the least willpower to make it.

## Sources
- Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. *American Psychologist, 54*(7), 493-503. https://doi.org/10.1037/0003-066X.54.7.493
- Gollwitzer, P. M., & Brandstätter, V. (1997). Implementation intentions and effective goal pursuit. *Journal of Personality and Social Psychology, 73*(1), 186-199. https://doi.org/10.1037/0022-3514.73.1.186
- Orbell, S., Hodgkins, S., & Sheeran, P. (1997). Implementation intentions and the theory of planned behavior. *Personality and Social Psychology Bulletin, 23*(9), 945-954. https://doi.org/10.1177/0146167297239004`,
    },
    {
      slug: "mcii-how-if-then-works",
      title: "12 · Why a sentence works: delegation, not willpower",
      section: "Section 3 · Implementation intentions: the trigger",
      recallContent: [
        {
          prompt: "What are the structures of a goal intention and an implementation intention?",
          answer:
            "Goal intention: 'I intend to reach x!' (links your self to an end state). Implementation intention: 'When situation x arises, I will perform response y!' (links a situation to a response) (Gollwitzer, 1999).",
        },
        {
          prompt: "In Orbell, Hodgkins, and Sheeran (1997), what were the two completion rates, and what is the honest caveat?",
          answer:
            "Among women with strong goal intentions, 100% did the breast self-examination with an implementation intention versus 53% without. The caveat: a single 1997 study with a modest sample. Trust the direction, not that exact magnitude.",
        },
      ],
      body: `The reason an if-then plan works is not that it makes you try harder. It is that **it moves the decision out of the moment when you are least able to make it.**

Gollwitzer's account is that implementation intentions **delegate the control of goal-directed responses to anticipated situational cues, which, when actually encountered, elicit those responses automatically** (Gollwitzer, 1999). Two things follow, and they are the two things you actually feel:

1. **The cue gets easier to notice.** Having named "when I sit down at my desk after dinner" in advance, you become primed to detect that moment. It stops being invisible.
2. **The response gets easier to launch.** The link between cue and action has been pre-built, so at the moment of truth you are not weighing options, negotiating with yourself, or generating an action from scratch. You are executing one you already chose.

Compare the two experiences honestly, because you have had both:

| | Goal intention only | With an implementation intention |
| --- | --- | --- |
| At the moment of truth | You must notice it is the moment, decide, generate an action, and overcome the pull of the easier thing | The cue fires, the response is already chosen |
| What it costs | Willpower, at the exact time of day you have the least | Almost nothing |
| What it depends on | How you happen to feel | That you set it up in advance, when you were calm |

**Note what this implies about willpower.** The method is not asking you to have more of it. It is a **design pattern for a person who runs out of willpower**, which is every person. That is the whole point, and it is why "just be more disciplined" is not competing advice, it is a description of the problem.

**How strong is the effect, across everything?** Gollwitzer and Sheeran (2006) meta-analyzed **94 independent tests** of implementation intentions and found a positive effect on goal attainment of **medium-to-large magnitude, d = 0.65**. That is a real effect and, by the standards of behavior-change interventions, a good one.

**Two honest qualifications, and they matter.**

- **That 2006 figure is for implementation intentions on their own, not for MCII.** They are different interventions, tested in different literatures. Do not import d = 0.65 into a claim about the four-step method. The MCII-specific number is smaller, and you will meet it in Section 5.
- **A 2006 meta-analysis of this kind reflects the publication practices of its era.** Psychology's reckoning with publication bias, small samples, and unreplicated results largely postdates it. That does not make it wrong. It does mean you should treat d = 0.65 as **the best summary available from that body of work**, not as a physical constant.

:::reveal Someone says an if-then plan is "just a fancy way of telling yourself to have more willpower." Why is that exactly backwards? ||| Because the plan is a **design pattern for a person who runs out of willpower**, which is everyone. It **delegates control of the action to a situational cue** (Gollwitzer, 1999), so the decision gets made in advance, while you are calm, instead of at 9 pm when you are depleted. The cue becomes easier to notice, and the response becomes easier to launch, because it is already chosen. It removes the need for willpower at the moment of truth rather than demanding more of it.

## Sources
- Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. *American Psychologist, 54*(7), 493-503. https://doi.org/10.1037/0003-066X.54.7.493
- Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology, 38*, 69-119. https://doi.org/10.1016/S0065-2601(06)38002-1`,
    },
    {
      slug: "mcii-writing-a-good-if-then",
      title: "13 · How to write an if-then that actually fires",
      section: "Section 3 · Implementation intentions: the trigger",
      recallContent: [
        {
          prompt: "How does an implementation intention work, mechanically?",
          answer:
            "It delegates control of the response to an anticipated situational cue. The cue becomes easier to notice, and the response is pre-chosen, so no decision has to be made at the moment of truth (Gollwitzer, 1999).",
        },
        {
          prompt: "What did Gollwitzer and Sheeran (2006) find, and what are the two caveats on using that number?",
          answer:
            "Across 94 independent tests, implementation intentions had a medium-to-large effect on goal attainment (d = 0.65). Caveats: it is for implementation intentions ALONE, not MCII, and it predates psychology's reckoning with publication bias.",
        },
      ],
      body: `Most if-then plans fail because they are not if-then plans. They are wishes with the word "if" in front of them. Here is the craft.

**Rule 1: the IF must be detectable.** You have to be able to *notice* it happening, in the moment, without effort. Detectable cues are times, places, objects, actions, and bodily states.

| Bad IF | Why it fails | Good IF |
| --- | --- | --- |
| "If I have time..." | You will never detect this. Nobody has ever noticed the arrival of "time." | "If it is 7:30 am and I am in the kitchen..." |
| "If I feel motivated..." | Motivation is precisely what will be missing | "If I finish brushing my teeth..." |
| "If work is not too busy..." | Vague, and it is a permission slip | "If I close my laptop at the end of the day..." |

**Rule 2: the THEN must be an action you can start immediately.** Not a result, not a quantity, not a mood. Something your hands can begin doing within about five seconds of the cue.

| Bad THEN | Why it fails | Good THEN |
| --- | --- | --- |
| "...then I will be more focused." | Not an action. You cannot start "being focused." | "...then I will put my phone in the drawer and open the document." |
| "...then I will do two hours of study." | A quantity, so it is a negotiation, and you will lose | "...then I will open the book and read one page." |
| "...then I will eat healthier." | A direction, not a move | "...then I will fill a glass of water and take the fruit from the top shelf." |

**Rule 3: build the IF out of the obstacle you found in Section 2.** This is where the two halves of the method fuse, and it is the single most important sentence in this course. **The obstacle IS the trigger.**

Go and look at your obstacle. If you did the work in Lesson 7, it is a thought, a feeling, a habit, or a state, and it is concrete. Now write:

> **If [my obstacle happens], then I will [the specific action that defeats it].**

That sentence is the fourth step of the method, and it is why the obstacle step is not a therapy exercise. You were not identifying your obstacle in order to understand yourself. You were **harvesting a trigger.**

**Rule 4: two flavors, and you want both eventually.** An if-then can be *obstacle-triggered* ("If I reach for my phone on the sofa, then I will stand up and go to the desk") or *opportunity-triggered* ("If I sit down on the train, then I will open the flashcards"). The obstacle-triggered one is the heart of the method, because it is what mental contrasting hands you. The opportunity-triggered one is a good second plan, because it catches the moments when the obstacle never even shows up.

**Rule 5: say it, and mean it, as a commitment, not a hypothesis.** Gollwitzer's phrasing carries an exclamation mark for a reason. "When situation x arises, I will perform response y!" You are not predicting your future behavior. You are deciding it, now, in advance.

**Rule 6: keep it small enough to be embarrassing.** If your THEN feels too easy, it is probably correct. The plan's job is to get you *started*, and the research on the Christmas reports found exactly that: implementation intentions promote goal attainment by **helping people get started** (Gollwitzer, 1999). Nobody has ever failed at a goal because their first action was too small.

:::reveal What is wrong with "If I have time this week, then I will work on my portfolio," and how would you fix it? ||| Both halves are broken. The IF is **not detectable**: nobody ever notices "time" arriving, so the cue will never fire. The THEN is **not an immediately startable action**: "work on my portfolio" is a project, not a move your hands can begin in five seconds. A fixed version builds the IF out of your actual obstacle and shrinks the THEN until it is almost embarrassing: **"If I sit down on the sofa after dinner, then I will stand up, go to the desk, and open the portfolio file."**

## Sources
- Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. *American Psychologist, 54*(7), 493-503. https://doi.org/10.1037/0003-066X.54.7.493
- Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology, 38*, 69-119. https://doi.org/10.1016/S0065-2601(06)38002-1`,
    },
    {
      slug: "mcii-exercise-fix-the-plan",
      title: "14 · Practice: fix the broken if-then",
      section: "Section 3 · Implementation intentions: the trigger",
      body: `Every plan below is broken. For each one, name the single word that describes what is wrong with it, or supply the missing piece.

Answer with one word unless the item says otherwise. Spelling is forgiving. When you are finished, go and apply the same test to the plan you are about to write for your own goal.`,
      exercise: {
        instructions:
          "Diagnose each broken if-then plan. Answer with one word. Use IF when the problem is the trigger (not detectable), THEN when the problem is the action (not immediately startable), or BOTH when neither half works.",
        items: [
          {
            prompt: "\"If I have some free time, then I will study.\" Which half is broken: if, then, or both?",
            answer: "both",
            explanation:
              "The IF is undetectable (nobody notices 'free time' arriving) and the THEN is a project, not a move you can start in five seconds.",
          },
          {
            prompt: "\"If I sit down at my desk after breakfast, then I will be more productive.\" Which half is broken?",
            answer: "then",
            explanation:
              "The IF is excellent: a place plus a time, fully detectable. The THEN is not an action. You cannot start 'being productive'. Replace it with the first physical move.",
          },
          {
            prompt: "\"If I feel motivated, then I will open the running app and put my shoes on.\" Which half is broken?",
            answer: "if",
            explanation:
              "The THEN is fine (two concrete moves). The IF fails badly: motivation is precisely the thing that will be missing, so the cue will never fire.",
          },
          {
            prompt: "\"If work isn't too crazy, then I will get healthier.\" Which half is broken?",
            answer: "both",
            explanation:
              "The IF is a vague permission slip and the THEN is a direction rather than a move. This is a wish with the word 'if' in front of it.",
          },
          {
            prompt: "\"If I close my laptop at 6pm, then I will do three hours of guitar practice.\" Which half is broken?",
            answer: "then",
            explanation:
              "A quantity turns the THEN into a negotiation, and at 6pm you will lose it. Shrink it: 'then I will take the guitar off the wall and play one scale.'",
          },
          {
            prompt: "In Section 2 you found your inner obstacle. In an if-then plan, that obstacle becomes the ___.",
            answer: "trigger",
            accept: ["if", "cue"],
            explanation:
              "The obstacle IS the trigger. That is why the obstacle step is a specification, not a therapy exercise: you were harvesting a cue.",
          },
          {
            prompt: "A good THEN should be small enough to feel almost ___.",
            answer: "embarrassing",
            accept: ["easy", "too easy", "silly"],
            explanation:
              "The plan's job is to get you STARTED. Gollwitzer (1999) reports that implementation intentions work largely by helping people get started.",
          },
          {
            prompt: "A cue you can actually notice in the moment (a time, a place, an object, an action, a bodily state) is called a ___ cue.",
            answer: "detectable",
            accept: ["concrete", "specific"],
            explanation:
              "Rule 1. If you cannot notice it happening without effort, the plan will never fire, no matter how good the intention behind it.",
          },
          {
            prompt: "\"If I reach for my phone on the sofa, then I will stand up and go to the desk\" is an obstacle-triggered plan. \"If I sit down on the train, then I will open my flashcards\" is an ___-triggered plan.",
            answer: "opportunity",
            explanation:
              "Both are useful. Obstacle-triggered plans are the heart of MCII, because mental contrasting hands you the obstacle. Opportunity-triggered plans catch moments the obstacle never reaches.",
          },
          {
            prompt: "\"I intend to get fit.\" What kind of intention is that (one word: goal or implementation)?",
            answer: "goal",
            explanation:
              "Goal intentions have the structure 'I intend to reach x!' and link your self to an end state. They are necessary and, on their own, insufficient (Gollwitzer, 1999).",
          },
          {
            prompt: "\"When I get off the bus at my stop, I will walk the last mile home!\" What kind of intention is that?",
            answer: "implementation",
            accept: ["implementation intention", "if-then"],
            explanation:
              "It links a specific SITUATION to a specific RESPONSE, which is the structure Gollwitzer (1999) defines.",
          },
          {
            prompt: "Gollwitzer and Sheeran (2006) pooled 94 independent tests. Was their d = 0.65 an effect for implementation intentions alone, or for the full four-step method? (one word: alone, or four-step)",
            answer: "alone",
            accept: ["implementation intentions alone", "alone."],
            explanation:
              "It is for implementation intentions ALONE. Do not import it into a claim about MCII, whose pooled effect is smaller (Section 5).",
          },
        ],
      },
    },
    {
      slug: "mcii-quiz-implementation-intentions",
      title: "15 · Quiz: implementation intentions",
      section: "Section 3 · Implementation intentions: the trigger",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the structure of a GOAL intention?",
            options: [
              "\"When situation x arises, I will perform response y!\"",
              "\"I intend to reach x!\"",
              "\"If I fail, then I will try again.\"",
              "\"I wish I could reach x.\"",
            ],
            correctIndex: 1,
            explanation:
              "A goal intention names an end point and links your SELF to it (Gollwitzer, 1999). It produces commitment, and on its own it is not enough.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "What is the structure of an IMPLEMENTATION intention?",
            options: [
              "\"I intend to finally reach my goal x this year!\"",
              "\"When situation x arises, I will perform response y!\"",
              "\"I really hope that situation x does not ever arise.\"",
              "\"I will honestly try my very best at reaching x!\"",
            ],
            correctIndex: 1,
            explanation:
              "It is subordinate to a goal intention and specifies the when, where, and how, linking a SITUATION to a RESPONSE (Gollwitzer, 1999).",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "In the Christmas-report study, what proportion of implementation-intention students completed the report on time, versus controls?",
            options: [
              "Half, versus a quarter",
              "Three quarters, versus one third",
              "Everyone, versus half",
              "One third, versus three quarters",
            ],
            correctIndex: 1,
            explanation:
              "Three quarters versus one third (Gollwitzer & Brandstätter, 1997, as reported in Gollwitzer, 1999). The only difference was specifying a when and a where.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "In Orbell, Hodgkins, and Sheeran (1997), what made the breast-self-examination result so striking?",
            options: [
              "The implementation-intention group wanted it more than the controls",
              "Same strong intent in both; only the plan differed (100% vs 53%)",
              "The control group reportedly had no intention to do it whatsoever",
              "The striking effect only appeared after two full years had passed",
            ],
            correctIndex: 1,
            explanation:
              "It isolates the intention-behavior gap: same intention, different follow-through, closed by one written sentence.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "How should you treat that 100%-versus-53% figure?",
            options: [
              "As a firm law: if-then plans reliably double your follow-through",
              "With care: one modest 1997 study; trust direction, not size",
              "As obviously fabricated, since a clean 100% is impossible",
              "As entirely irrelevant now, since the study is quite old",
            ],
            correctIndex: 1,
            explanation:
              "The direction of the effect is supported by a large later literature. The magnitude in any single striking study is usually its least reliable feature.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "Mechanically, why does an if-then plan work?",
            options: [
              "It simply increases your raw motivation to reach the goal",
              "It hands the response to a preset cue, decided in advance",
              "It makes the underlying goal seem much more important to you",
              "It creates a sense of guilt, which then drives your action",
            ],
            correctIndex: 1,
            explanation:
              "The cue becomes easier to notice and the response is pre-chosen, so no willpower is required at the moment you have least of it (Gollwitzer, 1999).",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "\"Just have more discipline\" is not competing advice against implementation intentions. Why not?",
            options: [
              "Because willpower and self-discipline simply do not exist at all",
              "Because it just describes the PROBLEM the method is built to solve",
              "Because plain old self-discipline actually works far better",
              "Because implementation intentions require even more discipline",
            ],
            correctIndex: 1,
            explanation:
              "The method removes the need for willpower at the moment of truth rather than demanding more of it.",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "Gollwitzer and Sheeran (2006) meta-analyzed how many independent tests, and found what effect size?",
            options: [
              "24 tests, g = 0.34 (small effect)",
              "94 tests, d = 0.65 (medium-to-large)",
              "317 tests, d = 0.36 (small-to-medium)",
              "12 tests, d = 1.20 (very large)",
            ],
            correctIndex: 1,
            explanation:
              "A real, and by behavior-change standards good, effect for implementation intentions on goal attainment.",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "What is the most important caveat about applying d = 0.65 to the four-step method?",
            options: [
              "There is really none at all: it applies to MCII directly",
              "It is the effect of implementation intentions ALONE, not MCII",
              "It only ever applies to college and university students",
              "It was quietly retracted by its authors several years later",
            ],
            correctIndex: 1,
            explanation:
              "Two different literatures. Importing the implementation-intention number into an MCII claim would overstate the evidence.",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "Which of these is a properly detectable IF?",
            options: [
              "\"If I somehow manage to have some free time...\"",
              "\"If it is 7:30 am and I am in the kitchen...\"",
              "\"If I happen to feel really motivated that day...\"",
              "\"If my work schedule is not too terribly busy...\"",
            ],
            correctIndex: 1,
            explanation:
              "A time plus a place. Detectable cues are times, places, objects, actions, and bodily states. The other three cannot be noticed in the moment.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Which of these is a properly formed THEN?",
            options: [
              "\"...then I will somehow be far more focused and productive.\"",
              "\"...then I will put my phone in the drawer and open the document.\"",
              "\"...then I will do two full hours of really hard study work.\"",
              "\"...then I will start eating a good deal more healthily.\"",
            ],
            correctIndex: 1,
            explanation:
              "An action your hands can begin within seconds. A mood is not an action, a quantity is a negotiation, and a direction is not a move.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "How do the two halves of MCII fuse together?",
            options: [
              "The original wish itself simply becomes the THEN part",
              "The obstacle BECOMES the trigger (the IF) of the plan",
              "The desired outcome itself instead becomes the IF cue",
              "They never fuse; they are run separately on different goals",
            ],
            correctIndex: 1,
            explanation:
              "This is why the obstacle must be inner and detectable. You were not identifying it to understand yourself. You were harvesting a trigger.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "What is the difference between an obstacle-triggered and an opportunity-triggered if-then plan?",
            options: [
              "Obstacle plans fire on the obstacle; opportunity plans on a cue",
              "Opportunity-triggered plans are always clearly the superior ones",
              "They are really just two different names for the same one thing",
              "Obstacle-triggered plans are meant only for health-type goals",
            ],
            correctIndex: 0,
            explanation:
              "Obstacle-triggered plans are the heart of MCII because contrasting hands you the obstacle. Opportunity-triggered plans are a good second plan.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Why should the THEN be small enough to feel almost embarrassing?",
            options: [
              "To deliberately lower your own expectations of success",
              "Because the plan's whole job is just to get you STARTED",
              "Because small goals always matter far more than big ones",
              "Because it makes the whole plan much easier to memorize",
            ],
            correctIndex: 1,
            explanation:
              "Gollwitzer (1999) reports that implementation intentions promote goal attainment by helping people get started. Nobody ever failed because their first action was too small.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Rewrite: \"If I have time this week, then I will work on my portfolio.\" Which is the best fix?",
            options: [
              "\"If I really want it, then I will find time for the portfolio.\"",
              "\"If I sit on the sofa after dinner, then I go open the file.\"",
              "\"If this week is not busy, then I will do four hours of work.\"",
              "\"I fully intend to completely finish the portfolio this week!\"",
            ],
            correctIndex: 1,
            explanation:
              "It builds the IF out of the actual obstacle (the sofa) and shrinks the THEN to a move you can start in seconds. The last option is a goal intention, not an implementation intention.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
        ],
      },
    },

    // ─────────────── SECTION 4 · THE FOUR STEPS, DONE PROPERLY ───────────────
    {
      slug: "mcii-the-four-steps",
      title: "16 · The four steps: wish, outcome, obstacle, plan",
      section: "Section 4 · The four steps, done properly",
      recallContent: [
        {
          prompt: "State the two rules for writing an if-then that fires.",
          answer:
            "The IF must be detectable (a time, place, object, action, or bodily state you can notice without effort). The THEN must be an action you can start within seconds, not a mood, a quantity, or a direction.",
        },
        {
          prompt: "Where does the IF of your plan come from?",
          answer:
            "From the inner obstacle you found by mental contrasting. The obstacle IS the trigger, which is why it has to be inner and detectable.",
        },
      ],
      body: `You now have both halves. Here is the assembled protocol, which is what the intervention studies actually administer.

The clearest published description of the procedure is in the methods of the exercise trial: participants **named their most important wish** in the target domain, **mentally elaborated the most positive aspect** they associated with realising it, then **named and elaborated the most critical obstacle**, and finally **formed three implementation intentions** (Stadler, Oettingen, & Gollwitzer, 2009). That is the four-step protocol, and Oettingen's team teaches the same four steps to the public under the four ordinary words **wish, outcome, obstacle, plan**.

| Step | What you produce | Why it is there |
| --- | --- | --- |
| **1. Wish** | One meaningful wish, challenging but feasible, with a time frame you can see | A wish that is impossible produces nothing; a wish that is trivial produces nothing. The method needs a real one. |
| **2. Outcome** | The single **best** thing about that wish coming true, elaborated vividly | This is the fuel. It is also the step everyone else stops at, which is why everyone else fails. |
| **3. Obstacle** | The single most critical **inner** obstacle, elaborated vividly | This is the collision. It is also where you harvest your trigger. |
| **4. Plan** | An if-then plan: **if [obstacle], then I will [action]** | This is the automation. It is what fires on Tuesday when you feel nothing. |

**Four things that are easy to get wrong, and are the difference between running the method and performing a ritual.**

1. **The order is not decorative.** Outcome before obstacle. Reverse it and the effect weakens (Lesson 6). Skip the outcome entirely and you are dwelling. Skip the obstacle and you are indulging, which is worse than doing nothing.
2. **One wish. One outcome. One obstacle.** Not a list. The method asks for *the most important* and *the most critical*, singular, because the point is to force a choice, and a list is how you avoid one.
3. **Elaborate, do not label.** "Obstacle: procrastination" is a label. Elaboration means actually going there in your head: seeing the sofa, feeling the specific slump at 6:40 pm, watching your hand reach for the phone. The vividness is not garnish. It is the mechanism.
4. **The plan is built FROM the obstacle.** If your plan would still make sense without your obstacle, you have not run the method, you have just written a to-do item next to a daydream.

**A worked example, and it is a small ugly one on purpose.** Big inspiring goals make bad demonstrations, because you cannot check them. Here is a freelancer who is not getting paid on time:

- **Wish:** Get paid on time, every month.
- **Outcome:** The relief of an account that does not dip in the third week. No more chasing.
- **Obstacle:** I never log my hours as I go, so when invoicing day comes I cannot face reconstructing the month, and I put it off.
- **Plan:** If I close my laptop at the end of a working day, then I will log that day's hours before I stand up.

Notice what that plan is *not*. It is not "invoice on time." It is not "be more organised." It attacks the **obstacle**, which was never the invoicing at all. It was the logging. That is what the obstacle step is for: it moves the intervention from the place where the pain shows up to the place where the failure actually happens.

(This mapping of the four steps onto getting paid as a freelancer is BAM's, from the *She Clocked In* series, and it is a correct and non-trivial application of the method.)

**How long should this take?** Minutes. The exercise trial's whole self-regulation component was taught in a single session, and the adolescent study's intervention was a **30-minute written exercise** (Duckworth, Grant, Loew, Oettingen, & Gollwitzer, 2011). Once you know the four steps, a single run on a single wish takes about five minutes. It is not a retreat. It is a tool you use on a Tuesday.

:::reveal In the freelancer example, why is the plan about LOGGING HOURS rather than about invoicing, when the wish was to get paid? ||| Because the plan is built from the **obstacle**, not from the wish. The pain showed up at invoicing, but the failure actually happened weeks earlier, at the point where the hours never got logged. The obstacle step is what moves the intervention from where it hurts to where it breaks. A plan that would still make sense without your obstacle ("invoice on time!") is not an MCII plan at all, it is a to-do item written next to a daydream.

## Sources
- Duckworth, A. L., Grant, H., Loew, B., Oettingen, G., & Gollwitzer, P. M. (2011). Self-regulation strategies improve self-discipline in adolescents: Benefits of mental contrasting and implementation intentions. *Educational Psychology, 31*(1), 17-26. https://doi.org/10.1080/01443410.2010.506003
- Stadler, G., Oettingen, G., & Gollwitzer, P. M. (2009). Physical activity in women: Effects of a self-regulation intervention. *American Journal of Preventive Medicine, 36*(1), 29-34. https://doi.org/10.1016/j.amepre.2008.09.021`,
    },
    {
      slug: "mcii-run-it-on-your-goal",
      title: "17 · Your turn: run it, now, on the goal you wrote down in Lesson 1",
      section: "Section 4 · The four steps, done properly",
      recallContent: [
        {
          prompt: "Name the four steps and what each one produces.",
          answer:
            "Wish (one meaningful, challenging but feasible wish with a visible time frame), Outcome (the single best thing about it, elaborated vividly), Obstacle (the single most critical inner obstacle, elaborated vividly), Plan (if [obstacle], then I will [action]).",
        },
        {
          prompt: "What is the difference between labelling an obstacle and elaborating one?",
          answer:
            "A label is a word ('procrastination'). Elaboration is actually going there: the room, the time of day, the feeling, the hand reaching for the phone. The vividness is the mechanism, not decoration.",
        },
      ],
      body: `This lesson is not reading. **Get a piece of paper or open a note. You will need about five minutes and you will need to actually write.** The research administers this as a written exercise, and the writing is doing work.

**Step 1. The wish.** Look at the goal you wrote down in Lesson 1. Now sharpen it against two tests:

- **Is it challenging?** If you would achieve it anyway, without any of this, pick a harder one.
- **Is it feasible?** Could a version of you actually do this in the next four weeks? If genuinely not, shrink it until it is, or pick another one. (If you cannot make it feasible, re-read Lesson 8. That is information, not failure.)

Write it in a handful of words. Not a paragraph. If you cannot say it in one line, you do not have one wish, you have three.

**Step 2. The outcome.** Ask yourself: **what is the single best thing about this wish coming true?** Not a list of benefits. The best one.

Write it down. Then close your eyes and actually go there for thirty seconds or so. What does it look like? What are you doing? Who says what to you? What does your chest feel like? Do not rush this and do not skip it out of embarrassment. This step is the fuel, and if you have ever been told visualization is powerful, this is the grain of truth inside that advice. **The error was never the visualizing. The error was stopping here.**

**Step 3. The obstacle.** Now ask the question that everything turns on: **what is it, in ME, that stops this from happening?**

Apply the Lesson 7 test ruthlessly. Not the world. Not other people. Not a missing purchase. Not an insult like "I'm lazy." A thought, a feeling, a habit, or a state, and concrete enough that you could notice it happening.

Write it down. Then elaborate it for thirty seconds the same way you elaborated the outcome: the room, the hour, the feeling, the exact thing your hands do instead.

If nothing comes, ask "and what stops me from doing that?" over and over until the answer is finally about you. It usually takes three or four rounds, and the last one is usually uncomfortable. That is the one.

**Step 4. The plan.** Write, in this exact shape:

> **If [my obstacle happens], then I will [specific action I can start in five seconds].**

Say it to yourself once, as a decision, not a prediction.

Then, if you want to follow the exercise trial (Stadler, Oettingen, & Gollwitzer, 2009), **write two more**: one more obstacle-triggered plan for the same obstacle in a different situation, and one opportunity-triggered plan for a moment when the obstacle does not even arise. Three plans total. That is what the participants who doubled their physical activity actually wrote.

**What good output looks like.** You should now be holding five short lines: a wish, an outcome, an obstacle, and one to three if-then plans. It should feel slightly deflating rather than inspiring. **That deflation is the method working.** The energy you would have got from the daydream has been converted into an accurate picture of a specific thing you have to walk through this week. That is a worse feeling and a better position.

**Then go and use the free tool.** Oettingen's team maintains a free app and website (WOOP my life, n.d.) that walks you through these four steps and stores them. It is theirs, it is free, and it is better at reminding you than this page is. This course taught you the science and the craft. Their tool is a good place to keep running it. (As Lesson 1 said, we are not affiliated with them in any way.)

:::reveal You finish your first run and feel slightly deflated rather than fired up. Is something wrong? ||| No. **The deflation is the method working.** Indulging in the outcome hands you a hit of the feeling you were after and drains the energy to pursue it (Kappes & Oettingen, 2011). Mental contrasting takes that hit away and hands you something better: an accurate picture of one specific thing you have to walk through this week, and a pre-made decision about what you will do when it shows up. It is a worse feeling and a much better position.

## Sources
- Kappes, H. B., & Oettingen, G. (2011). Positive fantasies about idealized futures sap energy. *Journal of Experimental Social Psychology, 47*(4), 719-729. https://doi.org/10.1016/j.jesp.2011.02.003
- Stadler, G., Oettingen, G., & Gollwitzer, P. M. (2009). Physical activity in women: Effects of a self-regulation intervention. *American Journal of Preventive Medicine, 36*(1), 29-34. https://doi.org/10.1016/j.amepre.2008.09.021
- WOOP my life. (n.d.). *WOOP* [Website]. https://woopmylife.org/`,
    },
    {
      slug: "mcii-when-it-goes-wrong",
      title: "18 · The six ways people run it wrong",
      section: "Section 4 · The four steps, done properly",
      recallContent: [
        {
          prompt: "What does the exercise-trial protocol have participants produce at the plan step?",
          answer:
            "Three implementation intentions, not one (Stadler, Oettingen, & Gollwitzer, 2009). Those are the participants who ended up twice as physically active as the information-only group.",
        },
        {
          prompt: "You finish a run and feel deflated rather than inspired. What does that mean?",
          answer:
            "That it worked. The daydream's hit of borrowed feeling has been replaced by an accurate picture of a specific obstacle and a pre-made decision. Worse feeling, better position.",
        },
      ],
      body: `Almost every failure of this method is one of six things, and five of them happen at the obstacle step.

**1. The obstacle is an excuse wearing an obstacle's coat.** "I don't have time." "The market is bad." "My kids need me." Some of these are entirely true. None of them is usable, because you cannot build a trigger from them (Lesson 7). If your obstacle absolves you, it is the wrong obstacle. **A real inner obstacle is mildly unpleasant to admit.** That discomfort is the signal you have found it.

**2. The obstacle is an insult.** "I'm lazy." "I have no discipline." "I'm just not a morning person." These feel like brutal honesty and they are actually a way of *not* looking. A character judgment cannot be detected at 6:40 pm. A hand reaching for a phone can.

**3. The wish is too big.** "Change careers." "Get healthy." "Be a better person." A wish this size has no single most-critical obstacle, because it has forty, and so the obstacle step produces mush. Shrink the wish until it has a visible time frame and one honest obstacle. You can always run the method again on the next piece.

**4. The plan is not a plan.** Re-read Lesson 13 and check both halves. "If I get the chance, then I will try harder" contains no detectable cue and no startable action. It is a wish with punctuation.

**5. The outcome step gets skipped, or gets skimped.** People rush it because it feels indulgent, or because they have absorbed the message of Lesson 3 as "daydreaming is bad." It is not. **Mental contrasting requires the vivid positive future.** Without it there is no contrast, and you are just dwelling on your own inadequacy, which produces nothing (Oettingen, 2012). Give the outcome its thirty seconds and let yourself enjoy them.

**6. The method is used as a mood-booster.** This is the subtlest failure and it is the one that turns the method against itself. If you run the four steps in order to *feel motivated*, you will unconsciously pick a flattering obstacle, write an easy plan, and finish the exercise with a pleasant glow and no changed behavior. **You will have found a way to indulge in the method itself.** The tell is that it felt good. Run it correctly and it mostly does not.

**And the seventh thing, which is not a mistake.** Sometimes you run it honestly and the goal dies. You look at the obstacle, you consult your actual track record, and the commitment drains out. As Lesson 8 argued, that is the tool doing its job, with the caveat that the expectancy mechanism is less well evidenced than the theory would like (Wang, Wang, & Gai, 2021). Either way the practical advice is the same and it is not mystical: **do not force a goal you have no intention of pursuing. Free the effort and go put it somewhere it will convert.**

:::reveal What is the single best tell that you have found your REAL inner obstacle, and the single best tell that you have run the whole method as a mood-booster? ||| The real obstacle is **mildly unpleasant to admit**. If your obstacle absolves you ("no time", "bad market"), it is an excuse wearing an obstacle's coat; if it insults you ("I'm lazy"), it is a character judgment you cannot detect in the moment. And the tell for the mood-booster failure is that **the exercise felt good**: you picked a flattering obstacle, wrote an easy plan, and got a pleasant glow with no changed behavior, which is indulging in the method itself. Run correctly, it mostly does not feel good.

## Sources
- Oettingen, G. (2012). Future thought and behaviour change. *European Review of Social Psychology, 23*(1), 1-63. https://doi.org/10.1080/10463283.2011.643698
- Wang, G., Wang, Y., & Gai, X. (2021). A meta-analysis of the effects of mental contrasting with implementation intentions on goal attainment. *Frontiers in Psychology, 12*, Article 565202. https://doi.org/10.3389/fpsyg.2021.565202`,
    },
    {
      slug: "mcii-exercise-diagnose-the-run",
      title: "19 · Practice: diagnose the broken run",
      section: "Section 4 · The four steps, done properly",
      body: `Below are fragments of real-looking attempts at the method. Each one is broken in exactly one way, and every fault is on the list from Lesson 18. Name the step that is at fault, or the fault itself.

Answer with one word. Spelling is forgiving.`,
      exercise: {
        instructions:
          "For each broken run, answer with the name of the STEP that is at fault (wish, outcome, obstacle, or plan), unless the item asks for something else.",
        items: [
          {
            prompt: "\"Wish: pass the exam. Outcome: relief, and my mum's face. Obstacle: the syllabus is enormous and the lecturer is bad. Plan: if I fall behind, then I will catch up.\" Which step is most at fault?",
            answer: "obstacle",
            explanation:
              "The obstacle names the world (the syllabus, the lecturer), so it produces no trigger. The plan is broken too, but it is broken BECAUSE the obstacle was.",
          },
          {
            prompt: "\"Wish: become a better person. Outcome: everything improves. Obstacle: ...\" Which step is at fault?",
            answer: "wish",
            explanation:
              "A wish this size has forty obstacles, so the obstacle step produces mush. Shrink the wish until it has a visible time frame and one honest obstacle.",
          },
          {
            prompt: "\"Wish: run three times a week. Outcome: I skipped this, it felt silly. Obstacle: I hit snooze and roll over. Plan: if the alarm goes, then I will put my feet on the floor.\" Which step is at fault?",
            answer: "outcome",
            explanation:
              "Without the vivid positive future there is no CONTRAST, and you are just dwelling on your own inadequacy, which produces nothing (Oettingen, 2012).",
          },
          {
            prompt: "\"Wish: write the novel. Outcome: seeing it on a shelf. Obstacle: at 9pm I feel a wave of dread that it will be bad, and I clean the kitchen instead. Plan: if I get a chance, then I will try harder.\" Which step is at fault?",
            answer: "plan",
            explanation:
              "The obstacle is excellent. The plan wastes it: 'if I get a chance' is undetectable and 'try harder' is not a startable action. It is a wish with punctuation.",
          },
          {
            prompt: "\"Obstacle: I'm just not a disciplined person.\" This obstacle is a character judgment rather than a detectable event. In one word, what is it?",
            answer: "insult",
            accept: ["an insult", "insulting"],
            explanation:
              "It feels like brutal honesty and is actually a way of not looking. 'I'm undisciplined' does not happen at 6:40 pm. Reaching for the phone does.",
          },
          {
            prompt: "\"Obstacle: I genuinely have no time, I work two jobs.\" It may be completely true, and it is still unusable here. In one word, what is it functionally?",
            answer: "excuse",
            accept: ["an excuse", "outer", "external"],
            explanation:
              "It absolves you, and you cannot build a trigger from it. A real inner obstacle is mildly unpleasant to admit; that discomfort is the signal.",
          },
          {
            prompt: "Someone runs all four steps, finishes feeling great and motivated, and changes nothing. They picked a flattering obstacle and an easy plan. They used the method as a ___ booster.",
            answer: "mood",
            explanation:
              "The subtlest failure: indulging in the method itself. The tell is that it felt good. Run correctly, it mostly does not.",
          },
          {
            prompt: "In a correct run, the IF of the plan must be built out of which earlier step?",
            answer: "obstacle",
            explanation:
              "If your plan would still make sense without your obstacle, you did not run the method. You wrote a to-do item next to a daydream.",
          },
          {
            prompt: "Which step comes second, immediately before the obstacle?",
            answer: "outcome",
            explanation:
              "Wish, outcome, obstacle, plan. Outcome before obstacle: reversing them weakens the effect, and skipping the outcome turns the exercise into dwelling.",
          },
          {
            prompt: "The exercise trial (Stadler et al., 2009) had participants form how many implementation intentions? (a number)",
            answer: "three",
            accept: ["3"],
            explanation:
              "Three. Those participants ended up roughly twice as physically active as the information-only group over four months.",
          },
          {
            prompt: "\"Obstacle: procrastination.\" This is a label, not an elaboration. Elaborating means making it ___ (one word: what quality does the research require of the mental imagery?).",
            answer: "vivid",
            accept: ["concrete", "specific", "detailed"],
            explanation:
              "Vividness is the mechanism, not decoration. Go there: the room, the hour, the feeling, the exact thing your hands do instead.",
          },
          {
            prompt: "You run the method honestly and your commitment drains away, because your track record genuinely says this is out of reach. According to Lesson 8, is that a bug or a feature?",
            answer: "feature",
            explanation:
              "It frees effort a lost cause was consuming. Caveat from Section 2: the expectancy mechanism behind this is not confirmed in the pooled evidence (Wang et al., 2021).",
          },
        ],
      },
    },
    {
      slug: "mcii-quiz-the-four-steps",
      title: "20 · Quiz: the four steps",
      section: "Section 4 · The four steps, done properly",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the four steps, in order?",
            options: [
              "Wish, obstacle, outcome, plan",
              "Wish, outcome, obstacle, plan",
              "Outcome, wish, plan, obstacle",
              "Plan, wish, outcome, obstacle",
            ],
            correctIndex: 1,
            explanation:
              "Outcome before obstacle. This mirrors mental contrasting (future first, then obstacle), and the plan is the implementation intention.",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "What did participants in the exercise trial actually do at the plan step?",
            options: [
              "Wrote one implementation intention",
              "Formed THREE implementation intentions",
              "Wrote a weekly schedule",
              "Signed a contract with the experimenter",
            ],
            correctIndex: 1,
            explanation:
              "Named the wish, elaborated the best aspect, named and elaborated the critical obstacle, then formed three implementation intentions (Stadler et al., 2009).",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "Why does the method ask for ONE wish, ONE outcome, and ONE obstacle rather than lists?",
            options: [
              "Purely to save you a little bit of time in the moment",
              "Because the point is to force a choice, not avoid one",
              "Because more than one of each confuses the WOOP app",
              "Because the original research only ever tested one of each",
            ],
            correctIndex: 1,
            explanation:
              "The protocol asks for the MOST important wish and the MOST critical obstacle, singular. Lists produce mush at the obstacle step.",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "What is the difference between labelling and elaborating an obstacle?",
            options: [
              "There is honestly no real difference between the two at all",
              "A label is a word; elaboration is the vivid room, hour, and feeling",
              "Labelling is the research-backed method; elaboration is folk advice",
              "Elaboration means writing out at least 500 full words on it",
            ],
            correctIndex: 1,
            explanation:
              "The vividness is the mechanism, not garnish. A label gives you nothing to detect in the moment.",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "In the freelancer example, the wish was to get paid on time. Why was the PLAN about logging hours?",
            options: [
              "Because logging hours is more important than invoicing",
              "Because the plan is built from the OBSTACLE, which was logging",
              "Because the original stated wish itself was simply wrong",
              "Because the invoicing step itself cannot be automated",
            ],
            correctIndex: 1,
            explanation:
              "The obstacle step moves the intervention from where it hurts to where it breaks. That is the whole value of the step.",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "How long does a single run of the method take once you know the four steps?",
            options: [
              "A full weekend-long silent meditation retreat at the least",
              "About five minutes; the teen study used a 30-minute exercise",
              "At the very least a good two or three uninterrupted hours",
              "It must be repeated daily for a month before it counts",
            ],
            correctIndex: 1,
            explanation:
              "Duckworth et al. (2011) delivered it as a single 30-minute written exercise. It is a tool you use on a Tuesday, not a retreat.",
            sourceLessonSlug: "mcii-the-four-steps",
          },
          {
            prompt: "Your wish should be...",
            options: [
              "As ambitious as possible, since aiming high raises performance",
              "Challenging BUT feasible, with a time frame you can see",
              "Easy, so that you definitely achieve it",
              "Vague, so it can adapt as circumstances change",
            ],
            correctIndex: 1,
            explanation:
              "A wish you would achieve anyway produces nothing; a wish that is impossible produces nothing. If it is not feasible, shrink it or re-read the boundary-condition lesson.",
            sourceLessonSlug: "mcii-run-it-on-your-goal",
          },
          {
            prompt: "Why should you NOT skip or skimp the outcome step, even after learning that positive fantasies sap energy?",
            options: [
              "Because it simply makes the whole exercise more enjoyable",
              "Because mental contrasting REQUIRES the vivid positive future",
              "Because the WOOP app will not otherwise let you continue",
              "You should skip it: the research says fantasies are harmful",
            ],
            correctIndex: 1,
            explanation:
              "The error was never the visualizing. The error was STOPPING there. Remove the future and you get dwelling, which produces nothing.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "You finish a run and feel deflated rather than inspired. What does that indicate?",
            options: [
              "You clearly did it quite wrong and really should try again",
              "It worked: the daydream glow is replaced by an accurate picture",
              "Your expectations are too low and the goal should be abandoned",
              "You most probably skipped over the whole plan step here",
            ],
            correctIndex: 1,
            explanation:
              "A worse feeling and a better position. Indulging hands you a hit of the outcome and drains the energy to pursue it (Kappes & Oettingen, 2011).",
            sourceLessonSlug: "mcii-run-it-on-your-goal",
          },
          {
            prompt: "What is the tell that you have found your REAL inner obstacle?",
            options: [
              "It is the first thing that came to mind",
              "It is mildly unpleasant to admit",
              "It makes you feel better about yourself",
              "Other people agree with it",
            ],
            correctIndex: 1,
            explanation:
              "If your obstacle absolves you, it is an excuse wearing an obstacle's coat. The discomfort is the signal you have arrived.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "Why is \"I'm lazy\" specifically called out as a failure mode?",
            options: [
              "Because the label is really just too unkind to yourself",
              "Because a character judgment cannot be detected in the moment",
              "Because laziness itself has been fully disproven by science",
              "Because it is really an external circumstance obstacle",
            ],
            correctIndex: 1,
            explanation:
              "The obstacle must be a detectable event, because it has to serve as a trigger.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "What is the subtlest failure mode, in which the method turns against itself?",
            options: [
              "Writing out the whole plan step before the obstacle step",
              "Using it as a mood-booster: flattering obstacle, easy plan",
              "Doing the whole thing in the morning rather than the evening",
              "Running it on a work goal instead of on a health goal",
            ],
            correctIndex: 1,
            explanation:
              "You will have found a way to indulge in the method itself. The tell is that it felt good.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "\"Wish: become a better person.\" What is wrong with it?",
            options: [
              "Nothing at all: broad and big wishes work the best",
              "It is too big: a wish that size has forty obstacles",
              "It is honestly a far too easy and simple wish",
              "It is simply not nearly positive or upbeat enough",
            ],
            correctIndex: 1,
            explanation:
              "Shrink the wish until it has a visible time frame and one honest obstacle. You can always re-run the method on the next piece.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "\"If I get a chance, then I will try harder.\" Why is this not a plan?",
            options: [
              "It is honestly a perfectly fine and quite complete plan",
              "Neither half works: \"a chance\" and \"try harder\" are both vague",
              "Because it should instead be phrased as a goal intention",
              "Because it does not once mention the desired end outcome",
            ],
            correctIndex: 1,
            explanation:
              "It is a wish with punctuation. Build the IF from your actual obstacle and shrink the THEN to a physical move.",
            sourceLessonSlug: "mcii-when-it-goes-wrong",
          },
          {
            prompt: "This course tells you to go and use the free WOOP app and website. What is the accompanying disclosure?",
            options: [
              "That the whole course earns a sales commission from it",
              "That it has no affiliation with or licence from Oettingen's team",
              "That the official WOOP app is often really quite unreliable",
              "That using the WOOP app is required to pass the course",
            ],
            correctIndex: 1,
            explanation:
              "The tool is theirs and it is free and good. The science is public and citable. This course teaches the second and points you at the first.",
            sourceLessonSlug: "mcii-run-it-on-your-goal",
          },
        ],
      },
    },

    // ─────────────── SECTION 5 · READING THE EVIDENCE HONESTLY ───────────────
    {
      slug: "mcii-what-the-trials-show",
      title: "21 · What the trials actually found (and how big each one was)",
      section: "Section 5 · Reading the evidence honestly",
      recallContent: [
        {
          prompt: "Name three of the six failure modes.",
          answer:
            "The obstacle is an excuse; the obstacle is an insult; the wish is too big; the plan is not a plan; the outcome step is skipped; the method is used as a mood-booster.",
        },
        {
          prompt: "Which step must the IF of the plan be built from, and why?",
          answer:
            "The obstacle. A plan that would still make sense without your obstacle is not an MCII plan, it is a to-do item written next to a daydream.",
        },
      ],
      body: `You have the method. Now earn the right to believe in it, by looking at the actual studies with their actual sample sizes. This section is the reason this course exists, and it is the part that separates a cited course from a motivational blog post.

**Here is the evidence, laid out honestly, biggest first.**

| Study | What it tested | N | What it found |
| --- | --- | --- | --- |
| Stadler, Oettingen, & Gollwitzer (2009) | Physical activity in women aged 30-50, Germany, 4-month RCT | **256** | The MCII group was **twice as physically active** (nearly **1 hour more per week**) as the information-only group. The gap appeared in the **first week** and held for 4 months. |
| Stadler, Oettingen, & Gollwitzer (2010) | Fruit and vegetable intake in women, **24-month** RCT | **255** | Both groups ate more (0.47 to 1.00 extra daily servings) in the first 4 months. **Two years later**, only the MCII group had maintained it. The information-only group returned to baseline. |
| Duckworth, Kirby, Gollwitzer, & Oettingen (2013) | 5th graders, MCII vs a Positive Thinking control | **77** | Improved report-card grades, attendance, and conduct. |
| Duckworth, Grant, Loew, Oettingen, & Gollwitzer (2011) | High schoolers preparing for a high-stakes exam; a **30-minute written** intervention | **66** | The MCII group completed **more than 60% more** practice questions. |
| Adriaanse et al. (2010) | Unhealthy snacking, two experiments | **51** and **59** | MCII reduced unhealthy snacking, and beat mental contrasting alone and implementation intentions alone. |

**Now read that table like a scientist rather than a customer.**

**The good news is real.** The exercise study (2009) and the diet study (2010) are the strongest things here, and they are strong for specific, nameable reasons: they are **randomized**, they have **respectable samples** (over 250 each), they measure **actual behavior over months and years** rather than intentions on a questionnaire, and the diet study's headline finding is about **maintenance**, which is the thing almost every behavior-change intervention fails at. A two-year effect on real eating behavior is a serious result and you should update on it.

**The academic results are more fragile, and the course is not going to pretend otherwise.** The PSAT study has **66 participants**. The 5th-grade study has **77**. Those are small samples, and small samples produce estimates that bounce around a lot. Two more things you should know about the 2011 study specifically, both of which are in the paper: the effect on practice questions was **statistically significant but modest** once the authors controlled for gender and prep-course attendance, and the finding is about **practice questions completed**, which is effort, **not about the exam score**. "More than 60% more practice questions" is a true and useful sentence. "MCII raises your test scores" is a sentence that study does not support.

**The snacking studies are smaller still.** N = 51 and N = 59. They are informative about *mechanism* (Study 2 is genuinely valuable, because it is one of the few places where MCII is compared against each of its own two halves, and beats both). They are not, on their own, a basis for a confident claim about how much anyone's diet will change.

**The rule you should take away, and use for the rest of your life.** When someone quotes a striking psychological finding at you, ask **"how many people?"** before you ask anything else. Not because small studies are worthless, but because the *size* of an effect in a small study is the least trustworthy number in the room, and the size is exactly the part that gets quoted.

:::reveal The 2011 PSAT study found the MCII group completed "more than 60% more practice questions." Write the sentence that study supports, and the sentence it does not. ||| Supported: **"In a study of 66 high-school students, a 30-minute written MCII exercise led to more than 60% more practice questions completed"** (effort, small sample, modest effect once covariates were controlled). Not supported: **"MCII raises your test scores"** (the study measured practice questions completed, not exam performance). And the first question to ask about any striking finding is **"how many people?"**, because the effect SIZE in a small study is the least trustworthy number in the room, and it is exactly the number that gets quoted.

## Sources
- Adriaanse, M. A., Oettingen, G., Gollwitzer, P. M., Hennes, E. P., de Ridder, D. T. D., & de Wit, J. B. F. (2010). When planning is not enough: Fighting unhealthy snacking habits by mental contrasting with implementation intentions (MCII). *European Journal of Social Psychology, 40*(7), 1277-1293. https://doi.org/10.1002/ejsp.730
- Duckworth, A. L., Grant, H., Loew, B., Oettingen, G., & Gollwitzer, P. M. (2011). Self-regulation strategies improve self-discipline in adolescents: Benefits of mental contrasting and implementation intentions. *Educational Psychology, 31*(1), 17-26. https://doi.org/10.1080/01443410.2010.506003
- Duckworth, A. L., Kirby, T. A., Gollwitzer, A., & Oettingen, G. (2013). From fantasy to action: Mental contrasting with implementation intentions (MCII) improves academic performance in children. *Social Psychological and Personality Science, 4*(6), 745-753. https://doi.org/10.1177/1948550613476307
- Stadler, G., Oettingen, G., & Gollwitzer, P. M. (2009). Physical activity in women: Effects of a self-regulation intervention. *American Journal of Preventive Medicine, 36*(1), 29-34. https://doi.org/10.1016/j.amepre.2008.09.021
- Stadler, G., Oettingen, G., & Gollwitzer, P. M. (2010). Intervention effects of information and self-regulation on eating fruits and vegetables over two years. *Health Psychology, 29*(3), 274-283. https://doi.org/10.1037/a0018644`,
    },
    {
      slug: "mcii-effect-sizes-and-publication-bias",
      title: "22 · The number that matters: g = 0.34, and what it does and does not mean",
      section: "Section 5 · Reading the evidence honestly",
      recallContent: [
        {
          prompt: "What are the two strongest MCII trials, and why are they the strongest?",
          answer:
            "Stadler et al. (2009), N = 256, physical activity doubled over 4 months, and Stadler et al. (2010), N = 255, fruit and vegetable intake maintained at TWO YEARS while the control group returned to baseline. Both are randomized, over 250 people, and measure real behavior over time.",
        },
        {
          prompt: "What claim does the N = 66 PSAT study support, and what claim does it NOT support?",
          answer:
            "It supports 'more than 60% more practice questions completed' (effort). It does not support 'MCII raises your test scores', because it never measured exam performance.",
        },
      ],
      body: `Individual studies are anecdotes with statistics attached. The honest question is what happens when you pool them, and somebody has done exactly that.

**Wang, Wang, and Gai (2021)** meta-analyzed the MCII literature: **24 independent effect sizes drawn from 21 articles, with a combined N of 15,907**. The pooled effect on goal attainment was:

> **Hedges' g = 0.336, 95% CI [0.229, 0.443]**

That is the single most important number in this course, and it deserves to be understood rather than repeated.

**What "g = 0.34" means, in plain language.** It is a *standardized* effect size: how far the average treated person moved, measured in standard deviations. By Cohen's rules of thumb (0.2 small, 0.5 medium, 0.8 large, and those are conventions, not laws of nature), **0.34 is small-to-medium**.

Here is a more useful way to feel it. A standard way to translate an effect size of about 0.34 is: **the average person who did MCII ends up doing better than roughly 63% of the people who did not.** If the method did nothing at all, that number would be 50%. So it is a real, meaningful shift, and it is nothing like "everyone who does this succeeds."

**Sit with both halves of that.** Sixty-three versus fifty is a genuine edge, of a size that behavior-change researchers are pleased to find, obtained from a written exercise that takes five minutes and costs nothing. It is also *nowhere near* the transformation implied by the way this method gets marketed. **Both of those sentences are true, and a course that gives you only one of them is selling you something.**

**The confidence interval is doing work too.** The interval runs from 0.229 to 0.443, which means the data are consistent with the true effect being distinctly smaller than the headline (about 0.23) or somewhat bigger (about 0.44). It does **not** include zero, so the effect is unlikely to be nothing. It also does not reach 0.5, so it is unlikely to be large.

**The meta-analysts' own warnings, which you should read before anyone else's enthusiasm.**

- **They flag publication bias.** Their analyses indicated the meta-analysis **might have some publication bias**, while arguing that the main conclusion was nonetheless relatively reliable. Publication bias means that studies which found nothing are less likely to have been published, so the pooled estimate is probably **an over-estimate of the truth**. When authors flag it themselves, believe them.
- **They flag that the number of studies was small.** Twenty-four effects is not many. It limits what can be concluded about moderators, and they say so explicitly.

**The one moderator that did reach significance is worth your attention, because it is actionable.** How the intervention was *delivered* mattered: **face-to-face with an experimenter, g = 0.465; delivered by document, g = 0.277.** Doing it with a person appears to work better than doing it alone with a worksheet. (Note that this is a comparison *across* studies, not a randomized test of delivery method, so treat it as a strong hint rather than a proof.) If you can run the method with a coach, a teacher, or a friend who will ask you the obstacle question and not accept "no time" as an answer, do that.

**A second, independent meta-analysis agrees on the order of magnitude.** Cross and Sheffield (2019), reviewing mental contrasting for health behavior change, found an adjusted **g = 0.28** at up to 4 weeks and **g = 0.38** at up to 3 months. Different reviewers, different inclusion criteria, same neighbourhood. That convergence is genuinely reassuring, and it is one of the better reasons to take the method seriously.

**So: is it real?** Yes, and the honest sentence is this one. **MCII is a free, five-minute, self-administered intervention with a small-to-medium effect on goal attainment that has been found by two independent meta-analytic teams, in a literature whose own meta-analysts flag probable publication bias and a small number of studies.** That is a good thing to have in your life. It is not a superpower, and anyone who sells it to you as one has stopped reporting the research and started marketing it.

:::reveal Translate "g = 0.34, 95% CI [0.229, 0.443], possible publication bias" into a sentence you would say to a friend. ||| Something like: **"On average, someone who does this ends up doing better than about 63% of people who don't, where 50% would mean it did nothing. That's a real edge from a free five-minute exercise, and it's a long way from a transformation. The pooled estimate is probably a bit generous, because the people who ran the meta-analysis found signs that studies finding nothing were less likely to get published."** Both halves matter: it works, and it works modestly.

## Sources
- Cross, A., & Sheffield, D. (2019). Mental contrasting for health behaviour change: A systematic review and meta-analysis of effects and moderator variables. *Health Psychology Review, 13*(2), 209-225. https://doi.org/10.1080/17437199.2019.1594332
- Wang, G., Wang, Y., & Gai, X. (2021). A meta-analysis of the effects of mental contrasting with implementation intentions on goal attainment. *Frontiers in Psychology, 12*, Article 565202. https://doi.org/10.3389/fpsyg.2021.565202`,
    },
    {
      slug: "mcii-the-open-questions",
      title: "23 · The open questions, and what would change our minds",
      section: "Section 5 · Reading the evidence honestly",
      recallContent: [
        {
          prompt: "What is the pooled MCII effect, and what did the meta-analysts warn about it?",
          answer:
            "Hedges' g = 0.336, 95% CI [0.229, 0.443], from 24 effects across 21 articles, N = 15,907 (Wang et al., 2021). The authors flagged possible publication bias (so the true effect may be smaller) and a small number of studies.",
        },
        {
          prompt: "Which delivery method worked better, and how confident should you be in that?",
          answer:
            "Face-to-face with an experimenter (g = 0.465) beat document-based delivery (g = 0.277). It is a comparison across studies rather than a randomized test, so treat it as a strong hint, not a proof.",
        },
      ],
      body: `A method is not a religion, and the most useful thing a course can hand you is not certainty. It is **the list of things that are not yet settled, and what evidence would settle them.** Here is that list.

**Open question 1: Does the expectancy boundary condition actually hold?**

This is the big one, because it is the theory's signature prediction (Lesson 8): mental contrasting is supposed to build commitment **only when expectations are high**, and to produce letting-go when they are low.

- The **original experiments** found exactly that (Oettingen, Pak, & Schnetter, 2001).
- The **meta-analysis did not find expectation level to be a significant moderator** across the pooled studies (Wang, Wang, & Gai, 2021).
- An **independent comparison study found no expectancy moderation either** (Abdulla & Woods, 2021), with the authors noting a plausible reason: **84.7% of their participants had moderate-to-high expectancy**, so there may simply not have been enough low-expectancy people for the predicted effect to appear.

**What would settle it:** a large, pre-registered study that deliberately **recruits people with genuinely low expectations** for their goal, and tests whether mental contrasting makes them disengage. Until someone runs it, the boundary condition is a well-motivated theoretical claim with mixed empirical support. Not a fact.

**Open question 2: Is MCII actually better than other ways of planning?**

Almost every study you met in Lesson 21 compares MCII against a **passive control** (information only, or a placebo writing exercise). That answers "is it better than nothing?" It does not answer the question you probably care about, which is **"is it better than the other things I could do with those five minutes?"**

Abdulla and Woods (2021) is one of the few studies to ask directly. They compared MCII against **solution-focused planning** and **autonomous planning** (letting students plan however they liked). The result: commitment was **marginally higher in the MCII group, but the differences were small and not statistically significant.**

That is a genuinely important null result and this course is not going to bury it. One study does not overturn a literature, and a null result with a modest sample is weak evidence of absence. But **the honest position today is that MCII beating "nothing" is well supported, while MCII beating "some other sensible way of planning" is not yet established.**

**What would settle it:** more head-to-head trials against active comparison conditions, with adequate samples.

**Open question 3: How much of this has been shown outside the lab that invented it?**

Look at the author lists in Lesson 21's table. Notice how often the same two names appear. That is not a scandal and it is not an accusation. It is normal in a young research programme: the people who develop a method are the people who first test it, and they are usually the ones who care enough to run the studies.

But it does mean you should ask the standard question, and keep asking it: **has this been replicated by researchers with no stake in the theory?** The best available answers are encouraging rather than conclusive: **Cross and Sheffield (2019)** is an independent meta-analytic team who found effects in the same range, and **Abdulla and Woods (2021)** is an independent group who found the basic effect to be unimpressive against active alternatives. Independent work exists, it does not all point the same way, and that is exactly what a live scientific question looks like from the inside.

**How to hold all of this at once, which is the actual skill.**

You have just learned a method with a **real but modest** pooled effect, **probable publication bias** in its literature, an **unconfirmed signature boundary condition**, and **no established advantage over other planning methods**. And the correct response to that is *not* to throw it away, because look at what it costs you: **five minutes, no money, and no risk.** For an intervention that cheap, an expected effect of g = 0.34 is an outstanding deal. You do not need certainty to justify a five-minute experiment. You would need certainty to justify betting your career on it, and nobody is asking you to.

**That asymmetry is the lesson, and it is worth more than the method.** Match the strength of your commitment to the strength of the evidence, and match the size of your bet to the cost of being wrong. That sentence will serve you long after you have forgotten what Hedges' g is.

:::reveal Someone shows you a study proving a psychological technique "works." Name the three questions this section says to ask. ||| **(1) Compared to what?** Beating a passive control ("nothing") is a much weaker claim than beating an active, sensible alternative, and most of this literature only does the former (Abdulla & Woods, 2021, found MCII was not significantly better than solution-focused or autonomous planning). **(2) How many people, and who ran it?** Small samples give untrustworthy effect sizes, and you should ask whether anyone with no stake in the theory has replicated it. **(3) What would change your mind?** If nothing would, you are not doing science, you are doing loyalty.

## Sources
- Abdulla, A., & Woods, R. (2021). Comparing mental contrasting with implementation intentions against solution-focused and autonomous planning. *School Psychology International, 42*(4), 398-421. https://doi.org/10.1177/01430343211000399
- Cross, A., & Sheffield, D. (2019). Mental contrasting for health behaviour change: A systematic review and meta-analysis of effects and moderator variables. *Health Psychology Review, 13*(2), 209-225. https://doi.org/10.1080/17437199.2019.1594332
- Oettingen, G., Pak, H., & Schnetter, K. (2001). Self-regulation of goal setting: Turning free fantasies about the future into binding goals. *Journal of Personality and Social Psychology, 80*(5), 736-753. https://doi.org/10.1037/0022-3514.80.5.736
- Wang, G., Wang, Y., & Gai, X. (2021). A meta-analysis of the effects of mental contrasting with implementation intentions on goal attainment. *Frontiers in Psychology, 12*, Article 565202. https://doi.org/10.3389/fpsyg.2021.565202`,
    },
    {
      slug: "mcii-quiz-reading-the-evidence",
      title: "24 · Quiz: reading the evidence honestly",
      section: "Section 5 · Reading the evidence honestly",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Stadler, Oettingen, and Gollwitzer (2009) find, and with how many participants?",
            options: [
              "With 66 total participants, distinctly better exam scores",
              "With 256 women, the MCII group was twice as active over 4 months",
              "With 15,907 participants, a small effect on goal attainment",
              "With just 51 participants, noticeably less evening snacking",
            ],
            correctIndex: 1,
            explanation:
              "A randomized trial with a respectable sample, measuring real behavior over months. It is one of the two strongest results in the literature.",
            sourceLessonSlug: "mcii-what-the-trials-show",
          },
          {
            prompt: "What makes the Stadler et al. (2010) fruit-and-vegetable study especially notable?",
            options: [
              "It had by far the single largest sample of any MCII study",
              "At TWO YEARS, only the MCII group maintained the increase",
              "It proved that MCII clearly beats every other planning method",
              "It was the very first study that Oettingen herself ever ran",
            ],
            correctIndex: 1,
            explanation:
              "Maintenance is the thing almost every behavior-change intervention fails at, which is why a two-year effect on real eating behavior is a serious result.",
            sourceLessonSlug: "mcii-what-the-trials-show",
          },
          {
            prompt: "The PSAT study (Duckworth et al., 2011) found the MCII group completed more than 60% more practice questions. Which claim does it support?",
            options: [
              "MCII directly raises students' actual final exam scores",
              "In 66 students, a 30-minute MCII exercise raised practice effort",
              "MCII clearly works better than any other study technique",
              "MCII permanently changes a student's core academic ability",
            ],
            correctIndex: 1,
            explanation:
              "It measured practice questions completed, not exam performance, in a small sample, with a modest effect once covariates were controlled.",
            sourceLessonSlug: "mcii-what-the-trials-show",
          },
          {
            prompt: "What is the first question you should ask when someone quotes a striking psychological finding?",
            options: [
              "Who published it?",
              "How many people?",
              "Was it in a famous journal?",
              "Does it match my experience?",
            ],
            correctIndex: 1,
            explanation:
              "The SIZE of an effect in a small study is the least trustworthy number in the room, and the size is exactly what gets quoted.",
            sourceLessonSlug: "mcii-what-the-trials-show",
          },
          {
            prompt: "What is the pooled effect of MCII on goal attainment, per Wang, Wang, and Gai (2021)?",
            options: [
              "Hedges' g = 0.336, 95% CI [0.229, 0.443], N = 15,907",
              "d = 0.65, drawn from 94 separate independent tests",
              "d = 1.2, which counts as a genuinely large effect",
              "No statistically significant effect on it at all",
            ],
            correctIndex: 0,
            explanation:
              "Small-to-medium. The d = 0.65 figure belongs to implementation intentions ALONE (Gollwitzer & Sheeran, 2006), a different intervention.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "In plain language, what does an effect of about g = 0.34 mean?",
            options: [
              "That roughly 34% of all people who try it will succeed",
              "The average MCII person beats about 63% of those who did not",
              "That the method reliably works about 34% of the time",
              "It is a large effect, comparable to a medical breakthrough",
            ],
            correctIndex: 1,
            explanation:
              "A real edge, and nowhere near the transformation the method's marketing implies. Both halves of that sentence are true.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "The 95% confidence interval was [0.229, 0.443]. What does that tell you?",
            options: [
              "That the single true effect is definitely exactly 0.336",
              "Consistent with a smaller-or-bigger effect, but excludes zero",
              "That the whole underlying study must have been badly designed",
              "That a full 95% of all the study participants improved",
            ],
            correctIndex: 1,
            explanation:
              "Reading the interval, not just the point estimate, is the difference between understanding a result and repeating it.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "What did the meta-analysts say about publication bias in their own MCII meta-analysis?",
            options: [
              "That there was honestly none of it present at all",
              "That there was SOME bias, but the conclusion still holds",
              "That it made the effect look smaller than it really is",
              "That they simply did not bother to test for it at all",
            ],
            correctIndex: 1,
            explanation:
              "Publication bias means null studies are less likely to be published, so the pooled estimate is probably an OVER-estimate. When authors flag it themselves, believe them.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "Which moderator DID reach significance in Wang et al. (2021), and what did it show?",
            options: [
              "Age: the whole method works only for grown adults over 18",
              "Delivery: face-to-face (g = 0.465) beat document (g = 0.277)",
              "Goal domain: health goals clearly beat academic goals",
              "Expectation level: high expectations clearly beat low ones",
            ],
            correctIndex: 1,
            explanation:
              "Actionable: run the method with someone who will ask you the obstacle question. But it is a comparison across studies, not a randomized test, so treat it as a strong hint.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "Cross and Sheffield (2019) independently reviewed mental contrasting for health behavior. What did they find?",
            options: [
              "Essentially no real measurable effect on behavior at all here",
              "Similar effects: g = 0.28 at 4 weeks, g = 0.38 at 3 months",
              "A very much larger effect, up around roughly g = 0.9",
              "That the method is actively quite harmful to health behavior",
            ],
            correctIndex: 1,
            explanation:
              "Different reviewers, different inclusion criteria, same order of magnitude. Convergence across independent teams is one of the better reasons to take the method seriously.",
            sourceLessonSlug: "mcii-effect-sizes-and-publication-bias",
          },
          {
            prompt: "What is the current status of the expectancy boundary condition?",
            options: [
              "Settled: it is firmly confirmed by the big meta-analysis",
              "Mixed: early experiments backed it, but the meta-analysis did not",
              "Definitively and completely refuted by every later study",
              "It has honestly never once been properly tested by anyone",
            ],
            correctIndex: 1,
            explanation:
              "A well-motivated theoretical claim with mixed empirical support. It would be settled by a large pre-registered study that deliberately recruits genuinely low-expectancy participants.",
            sourceLessonSlug: "mcii-the-open-questions",
          },
          {
            prompt: "What did Abdulla and Woods (2021) find when they compared MCII against solution-focused and autonomous planning?",
            options: [
              "MCII came out dramatically and decisively better",
              "Commitment was marginally higher, but NOT significant",
              "MCII came out significantly and measurably worse",
              "They did not ever actually measure commitment at all",
            ],
            correctIndex: 1,
            explanation:
              "An important null result. MCII beating 'nothing' is well supported; MCII beating another sensible planning method is not yet established.",
            sourceLessonSlug: "mcii-the-open-questions",
          },
          {
            prompt: "Why does it matter that most MCII studies used a PASSIVE control (information only, or a placebo writing exercise)?",
            options: [
              "It does not really matter at all; a control is a control",
              "Because it only answers whether it beats doing nothing",
              "Because passive controls always inflate the p-values",
              "Because it means the underlying studies were unethical",
            ],
            correctIndex: 1,
            explanation:
              "Comparing against nothing is a much weaker test than comparing against an active, sensible alternative. Always ask: compared to what?",
            sourceLessonSlug: "mcii-the-open-questions",
          },
          {
            prompt: "Much of the MCII literature involves the researchers who developed the method. How should you read that?",
            options: [
              "As a genuine scandal that fully invalidates the findings",
              "As normal for a young field, but a reason to seek replication",
              "As clear proof that the whole effect must be fabricated",
              "As entirely irrelevant to how much you should believe it",
            ],
            correctIndex: 1,
            explanation:
              "Independent work exists (Cross & Sheffield, 2019; Abdulla & Woods, 2021) and it does not all point the same way, which is what a live scientific question looks like from the inside.",
            sourceLessonSlug: "mcii-the-open-questions",
          },
          {
            prompt: "Given a modest effect, probable publication bias, and no established advantage over other planning methods, why is running MCII still rational?",
            options: [
              "Because your sheer belief in it makes it actually work",
              "Because it costs five minutes, no money, and no real risk",
              "Because the effect is actually large once you account for bias",
              "It is not rational; the course concludes you should not use it",
            ],
            correctIndex: 1,
            explanation:
              "The asymmetry is the lesson and it outlives the method. You do not need certainty to justify a five-minute experiment; you would need it to bet your career.",
            sourceLessonSlug: "mcii-the-open-questions",
          },
        ],
      },
    },
  ],
};
