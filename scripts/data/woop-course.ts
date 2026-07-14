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
              "Elaborate the desired future, then immediately elaborate the inner obstacle",
              "Write a plan, then visualize it succeeding",
              "List your strengths, then list your weaknesses",
            ],
            correctIndex: 1,
            explanation:
              "Future first, obstacle second. Both vivid, both concrete, one sitting.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "Why does the ORDER of the two elaborations matter?",
            options: [
              "It does not; the research shows either order works",
              "Future-first makes the obstacle arrive as the thing blocking something you can already taste; obstacle-first turns the future into consolation, which is indulging with extra steps",
              "Obstacle-first is actually the recommended order",
              "Because the app enforces that order",
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
              "It TRACKED their expectations: strong when expectations were high, weak when low",
              "It fell uniformly, regardless of their expectations",
              "It was identical to the indulging group",
            ],
            correctIndex: 1,
            explanation:
              "This is the central result. Indulging and dwelling produced middling commitment disconnected from real odds; mental contrasting made commitment track expectations.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "Is mental contrasting best described as a commitment amplifier or a commitment selector?",
            options: [
              "An amplifier: it makes you want everything more",
              "A selector: it makes you want the reachable things more and the unreachable things less",
              "Neither: it has no effect on commitment",
              "An amplifier, but only for health goals",
            ],
            correctIndex: 1,
            explanation:
              "It forces you to consult your actual track record, which indulging lets you skip. It will not manufacture enthusiasm for a goal you know you will not pursue.",
            sourceLessonSlug: "mcii-how-mental-contrasting-works",
          },
          {
            prompt: "What is the test for a genuine INNER obstacle?",
            options: [
              "It must be the biggest problem you face",
              "It must be a thought, feeling, habit, or behavior of yours that you could act on and could detect in the moment",
              "It must be something other people also struggle with",
              "It must be solvable within one week",
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
              "Because the obstacle becomes the TRIGGER of an if-then plan, and you cannot build a detectable trigger out of the job market",
              "Because external obstacles are never real",
              "Because it makes the exercise faster",
            ],
            correctIndex: 1,
            explanation:
              "The obstacle step is a specification for a trigger, not a complaint box. External conditions may be entirely real and still be useless here.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "Why is \"I'm just lazy\" a bad obstacle even though it sounds internal?",
            options: [
              "Because it is too harsh on yourself",
              "Because it is an insult, not a detectable event: laziness does not happen at 6:40 pm in the kitchen, but reaching for your phone does",
              "Because laziness is not real",
              "Because it is external",
            ],
            correctIndex: 1,
            explanation:
              "You cannot build an if-then trigger from a character judgment. Dig until you find the behavior underneath it.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "Which of these is the best-formed inner obstacle?",
            options: [
              "\"The economy is bad.\"",
              "\"I get home, sit on the sofa, and the evening disappears.\"",
              "\"I need a better laptop first.\"",
              "\"My manager doesn't respect me.\"",
            ],
            correctIndex: 1,
            explanation:
              "A state plus a behavior, both detectable in the moment, which is exactly what an if-then plan needs.",
            sourceLessonSlug: "mcii-the-inner-obstacle",
          },
          {
            prompt: "When your expectations of success are LOW, what does mental contrasting lead to, and how should you read that?",
            options: [
              "Stronger commitment, which is the point of the method",
              "Weak commitment and disengagement, which the theory treats as a FEATURE, not a malfunction",
              "No change in commitment at all",
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
              "Do other people think I can do it?",
              "Is my expectation low because my track record honestly says so, or because I am guessing from fear without ever having tried?",
              "How much do I want it?",
              "Would a positive affirmation change my mind?",
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
              "It did NOT find a significant moderating effect of expectation level",
              "It found the effect reversed at high expectations",
              "It did not test expectation level",
            ],
            correctIndex: 1,
            explanation:
              "This is the honest caveat. The only moderator that reached significance was how the intervention was delivered (face-to-face vs document).",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Abdulla and Woods (2021) also found no expectancy moderation. What explanation did the authors offer?",
            options: [
              "That mental contrasting does not work at all",
              "That 84.7% of their participants had moderate-to-high expectancy, so there may not have been enough genuinely low-expectancy people for the predicted effect to appear",
              "That their measure of commitment was invalid",
              "That the participants cheated",
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
              "As good judgment that the theory supports, but not as a proven mechanism",
              "As definitively refuted, and therefore ignorable",
              "As true only for people over 30",
            ],
            correctIndex: 1,
            explanation:
              "The honest middle. Presenting it as settled would be a lie; dropping it would remove the method's safety catch.",
            sourceLessonSlug: "mcii-expectations-and-letting-go",
          },
          {
            prompt: "Why is indulging in an unreachable goal described as \"a trap with a nice view\"?",
            options: [
              "Because it makes you feel bad about yourself",
              "Because it keeps you attached to the goal, feeling good about it, and doing nothing about it, indefinitely",
              "Because it makes you quit too early",
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
              "Middling commitment, largely disconnected from whether you are actually likely to succeed",
              "Exactly the same result as mental contrasting",
              "Higher expectations of success",
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
              "\"I intend to reach x!\"",
              "\"When situation x arises, I will perform response y!\"",
              "\"I hope situation x does not arise.\"",
              "\"I will try my best at x.\"",
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
              "The implementation-intention group wanted it more than the control group",
              "Goal intention was held constant: all the women already strongly intended to do it, and only the presence of a when-and-where plan differed (100% vs 53%)",
              "The control group had no intention to do it at all",
              "The effect only appeared after two years",
            ],
            correctIndex: 1,
            explanation:
              "It isolates the intention-behavior gap: same intention, different follow-through, closed by one written sentence.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "How should you treat that 100%-versus-53% figure?",
            options: [
              "As a law you can quote confidently: if-then plans double your follow-through",
              "With care: it is a SINGLE 1997 study with a modest sample, and clean numbers like 100% rarely survive replication at that magnitude. Trust the direction, not the size",
              "As fabricated, since 100% is impossible",
              "As irrelevant, since it is old",
            ],
            correctIndex: 1,
            explanation:
              "The direction of the effect is supported by a large later literature. The magnitude in any single striking study is usually its least reliable feature.",
            sourceLessonSlug: "mcii-goal-vs-implementation-intention",
          },
          {
            prompt: "Mechanically, why does an if-then plan work?",
            options: [
              "It increases your motivation to reach the goal",
              "It delegates control of the response to an anticipated situational cue, so the decision is made in advance rather than at the moment of truth",
              "It makes the goal seem more important",
              "It creates guilt, which drives action",
            ],
            correctIndex: 1,
            explanation:
              "The cue becomes easier to notice and the response is pre-chosen, so no willpower is required at the moment you have least of it (Gollwitzer, 1999).",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "\"Just have more discipline\" is not competing advice against implementation intentions. Why not?",
            options: [
              "Because discipline does not exist",
              "Because it is a description of the PROBLEM. The method is a design pattern for a person who runs out of willpower, which is everyone",
              "Because discipline works better",
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
              "24 tests, g = 0.34",
              "94 tests, d = 0.65 (medium-to-large)",
              "317 tests, d = 0.36",
              "12 tests, d = 1.20",
            ],
            correctIndex: 1,
            explanation:
              "A real, and by behavior-change standards good, effect for implementation intentions on goal attainment.",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "What is the most important caveat about applying d = 0.65 to the four-step method?",
            options: [
              "There is none: it applies directly",
              "It is the effect of implementation intentions ALONE, a different intervention from MCII, whose pooled effect is smaller",
              "It only applies to students",
              "It was later retracted",
            ],
            correctIndex: 1,
            explanation:
              "Two different literatures. Importing the implementation-intention number into an MCII claim would overstate the evidence.",
            sourceLessonSlug: "mcii-how-if-then-works",
          },
          {
            prompt: "Which of these is a properly detectable IF?",
            options: [
              "\"If I have time...\"",
              "\"If it is 7:30 am and I am in the kitchen...\"",
              "\"If I feel motivated...\"",
              "\"If work is not too busy...\"",
            ],
            correctIndex: 1,
            explanation:
              "A time plus a place. Detectable cues are times, places, objects, actions, and bodily states. The other three cannot be noticed in the moment.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Which of these is a properly formed THEN?",
            options: [
              "\"...then I will be more focused.\"",
              "\"...then I will put my phone in the drawer and open the document.\"",
              "\"...then I will do two hours of study.\"",
              "\"...then I will eat healthier.\"",
            ],
            correctIndex: 1,
            explanation:
              "An action your hands can begin within seconds. A mood is not an action, a quantity is a negotiation, and a direction is not a move.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "How do the two halves of MCII fuse together?",
            options: [
              "The wish becomes the THEN",
              "The obstacle found by mental contrasting BECOMES the trigger (the IF) of the implementation intention",
              "The outcome becomes the IF",
              "They do not fuse; they are run separately on different goals",
            ],
            correctIndex: 1,
            explanation:
              "This is why the obstacle must be inner and detectable. You were not identifying it to understand yourself. You were harvesting a trigger.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "What is the difference between an obstacle-triggered and an opportunity-triggered if-then plan?",
            options: [
              "Obstacle-triggered plans fire when your obstacle shows up; opportunity-triggered plans fire on a good moment for the action, even when the obstacle never appears",
              "Opportunity-triggered plans are always superior",
              "They are two names for the same thing",
              "Obstacle-triggered plans are for health goals only",
            ],
            correctIndex: 0,
            explanation:
              "Obstacle-triggered plans are the heart of MCII because contrasting hands you the obstacle. Opportunity-triggered plans are a good second plan.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Why should the THEN be small enough to feel almost embarrassing?",
            options: [
              "To lower your expectations of success",
              "Because the plan's job is to get you STARTED, and implementation intentions work largely by helping people get started",
              "Because small goals matter more than big ones",
              "Because it makes the plan easier to memorize",
            ],
            correctIndex: 1,
            explanation:
              "Gollwitzer (1999) reports that implementation intentions promote goal attainment by helping people get started. Nobody ever failed because their first action was too small.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
          {
            prompt: "Rewrite: \"If I have time this week, then I will work on my portfolio.\" Which is the best fix?",
            options: [
              "\"If I really want it, then I will find the time for my portfolio.\"",
              "\"If I sit down on the sofa after dinner, then I will stand up, go to the desk, and open the portfolio file.\"",
              "\"If this week is not too busy, then I will do four hours on my portfolio.\"",
              "\"I intend to finish my portfolio this week!\"",
            ],
            correctIndex: 1,
            explanation:
              "It builds the IF out of the actual obstacle (the sofa) and shrinks the THEN to a move you can start in seconds. The last option is a goal intention, not an implementation intention.",
            sourceLessonSlug: "mcii-writing-a-good-if-then",
          },
        ],
      },
    },
  ],
};
