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
              "An expectation is a judgment of likelihood; a fantasy is an enjoyed image with no judgment of likelihood",
              "An expectation is about other people; a fantasy is about yourself",
              "They are two words for the same mental act",
              "An expectation is emotional; a fantasy is rational",
            ],
            correctIndex: 0,
            explanation:
              "Expectations are judgments grounded in a track record. Fantasies are experiences of a desired future enjoyed in the present. They predict opposite outcomes.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "Which four populations were studied in Oettingen and Mayer (2002)?",
            options: [
              "Athletes, musicians, chess players, and soldiers",
              "Job-seeking graduates, students with a crush, undergraduates facing an exam, and hip-replacement patients",
              "Only undergraduate psychology students, in four separate semesters",
              "Executives, teachers, nurses, and retirees",
            ],
            correctIndex: 1,
            explanation:
              "Four different life domains (work, love, school, the body), with outcomes measured from weeks up to two years later.",
            sourceLessonSlug: "mcii-fantasy-is-not-expectation",
          },
          {
            prompt: "What is the honest limitation of the four Oettingen and Mayer (2002) studies?",
            options: [
              "They had no control groups at all",
              "They were correlational, so on their own they cannot show the fantasy CAUSED the worse outcome",
              "They were never peer-reviewed",
              "They measured only feelings, never behavior",
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
              "It had a much larger sample",
              "It INDUCED the fantasy experimentally rather than merely measuring it, which speaks to cause rather than correlation",
              "It was published in a more prestigious journal",
              "It followed participants for two years",
            ],
            correctIndex: 1,
            explanation:
              "The 2002 studies were correlational. The 2011 experiments manipulated fantasizing and observed energy drop, which addresses the causal objection.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Fantasy realization theory says a vivid positive daydream does what?",
            options: [
              "Rehearses the skills needed to succeed",
              "Delivers a sample of the feeling you wanted, partly satisfying you and lowering your mobilization to go get the rest",
              "Increases your expectation of success, which then increases effort",
              "Has no effect unless you also write it down",
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
              "Nothing, that is exactly what the research recommends",
              "That is DWELLING, which produces just as little commitment as indulging",
              "It works, but only for people with high expectations",
              "It works, but only for health goals",
            ],
            correctIndex: 1,
            explanation:
              "Dwelling on present reality alone fails for the same reason indulging does: it never puts the future and the obstacle side by side.",
            sourceLessonSlug: "mcii-why-fantasy-saps-energy",
          },
          {
            prompt: "Does mental contrasting ask you to give up the vivid positive image of the future?",
            options: [
              "Yes, that is the whole point of the method",
              "No. It KEEPS the vivid positive future and adds the obstacle immediately afterward, in that order",
              "Yes, but only when your expectations are low",
              "It makes no difference either way",
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
              "Advice that tries to make you WANT the goal more is pushing on the weakest link",
              "Nobody who fails at a goal ever really intended to do it",
              "Intentions are irrelevant and should be ignored",
              "Only people with low intentions ever fail",
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
              "Because Oettingen and Gollwitzer are co-authors",
              "Because each tool fails without the other: a plan for a goal you never committed to will not run, and a commitment with no plan hits the intention-behavior gap",
              "Because the app requires both",
              "Because the two were invented at the same time",
            ],
            correctIndex: 1,
            explanation:
              "The combined protocol (MCII) is what nearly all of the intervention research actually tests, and each half addresses a different failure point.",
            sourceLessonSlug: "mcii-the-intention-behavior-gap",
          },
          {
            prompt: "What relationship does this course claim to Gabriele Oettingen's team and woopmylife.org?",
            options: [
              "It is the official course of the WOOP app",
              "None: it teaches and cites the published science, uses original exercises, and is not affiliated with, endorsed by, or licensed by them",
              "It licenses their worksheets under an agreement",
              "It is a competitor product that disputes their findings",
            ],
            correctIndex: 1,
            explanation:
              "The course teaches the peer-reviewed method (MCII), writes its own exercises, reproduces none of their materials, and points learners to their free official tool.",
            sourceLessonSlug: "mcii-what-this-course-is",
          },
        ],
      },
    },
  ],
};
