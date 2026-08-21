import type { AuthoredCourse } from "./authored-course";

// WELL-99 · The Centenarian Capstone (plans/67). The program's final course: it synthesises the
// six pillars, grades the longevity evidence honestly, and ends in a project rather than a
// lecture. Depends on WELL-00 through WELL-06 being complete.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 07-longevity-capstone/07-longevity-capstone.md §3-4), plus claims already verified in the
// dossiers for the pillars it synthesises. Notable verification outcomes:
// - The Blue Zones scoping review EXCLUDED Loma Linda and Menorca, and found the advantage
//   eroding in BOTH Okinawa and Nicoya. The export under-reported the Nicoya half.
// - Newman's supercentenarian data-quality percentages are not PubMed-indexed and are NOT
//   taught; the fragility point is made from the scoping review's own verified findings.
// - Vitamin D and omega-3 meta-analyses could not be located; the supplement lesson rests on
//   COSMOS, verified on both arms, which makes the point more cleanly anyway.
// - Kodama's N is ~103,000 for the all-cause analysis, not the "millions" the export implied.
export const WELL_CENTENARIAN_CAPSTONE_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 99: The Centenarian Capstone",
  description:
    "The program's final course, and the one with a project instead of a lecture. What the longevity evidence actually supports once you demand primary sources, which levers are strongest, which famous claims do not survive scrutiny, and how to build and coach a protocol you can hold for decades. Assumes all six pillars, and ends by asking you to run the whole program on yourself.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-a-capstone-is-for",
      title: "1 · What this course is for",
      section: "Section 1 · The frame",
      body: `Six courses have each handed you one pillar. This one asks the question none of them could answer alone: given everything, what should a person actually do with the decades they have?

**The honest state of the field.** Longevity science is in a strange position. The biology is advancing fast, with a well-organised research framework and real drug candidates in trials. Meanwhile **no intervention has been shown in a randomized trial to extend human lifespan**. Everything with strong human evidence is behavioural, observational, or both. That gap between what the field knows mechanistically and what it has proven in people is where nearly all longevity marketing lives, and learning to see it is most of what this course teaches.

**What "capstone" means here.** Not a summary. Three things: a grading of the longevity claims you will meet for the rest of your life, a synthesis of the six pillars against those claims, and a project in which you build and coach your own protocol using every tool the program taught. The final quiz is the smallest part of it.

**The centenarian frame, stated plainly at last.** The goal was never to reach an arbitrary number. It is to arrive at eighty or ninety with the capacity to do what you want, which the evidence in this course consistently ties to fitness, strength, sleep, connection, and the ability to keep doing things for decades. Lifespan is what happens; healthspan is what you coach.

**One promise about the sourcing.** This course refuses several famous claims you would find in any longevity book, because their primary sources either could not be located or say something different from what gets repeated. Where that happens, the lesson says so and names what is taught instead. That discipline is the program's actual product, and it matters most here, in the pillar with the most money behind its overclaims.

:::reveal State the gap that defines longevity science today. ||| The biology is advancing fast with a strong research framework and real drug candidates, but no intervention has been shown in a randomized trial to extend human lifespan. Everything with strong human evidence is behavioural, observational, or both, and nearly all longevity marketing lives in that gap.

:::reveal What are the three things this capstone does? ||| Grades the longevity claims you will keep meeting, synthesises the six pillars against them, and sets a project in which you build and coach your own protocol with the program's tools. The final quiz is the smallest part.

## Vocabulary
- **Healthspan**: the years lived with the capacity to do what you want, as distinct from total years lived.
- **Lifespan**: total years lived; the outcome longevity marketing promises and no human trial has yet moved.
- **Geroscience**: the field studying the biology of aging itself, rather than individual age-related diseases.
- **The evidence gap**: the distance between mechanistic knowledge and demonstrated human outcomes, where most longevity claims are sold.`,
    },
    {
      slug: "the-twelve-hallmarks",
      title: "2 · The twelve hallmarks, and what they are not",
      section: "Section 1 · The frame",
      body: `The dominant framework in aging biology is worth knowing precisely, including its limits, because it is the vocabulary every longevity product borrows.

**The framework.** A hallmark of aging must meet three tests: it appears with normal aging, experimentally accentuating it accelerates aging, and intervening on it decelerates, stops, or reverses aging. The 2023 revision proposes **twelve**: genomic instability, telomere attrition, epigenetic alterations, loss of proteostasis, disabled macroautophagy, deregulated nutrient sensing, mitochondrial dysfunction, cellular senescence, stem cell exhaustion, altered intercellular communication, chronic inflammation, and dysbiosis (López-Otín et al., 2023). The last three, plus disabled macroautophagy, are the additions to the original nine.

**What it genuinely gives you.** A map of why aging is not one thing. It explains why single-target interventions disappoint, why the hallmarks interconnect, and why lifestyle factors that touch several at once outperform ones that touch a single pathway. It also organises the research agenda, which is why you see it cited constantly.

**And here is the limit that matters.** The hallmarks are a **research framework**, not a clinical toolkit. Manipulating them extends life in model organisms. **No hallmark-targeting drug has been shown to extend human lifespan in a randomized trial.** Senolytics, rapamycin analogues, metformin for aging, and nicotinamide-adenine-dinucleotide precursors are supported by animal work and small human pilots, and they are also medical territory that a coach has no business recommending.

**Which produces the most useful sentence in this course.** When someone sells you a compound by naming a hallmark, they are describing a mechanism, not an outcome. "It activates autophagy" is a claim about a pathway. "People who took it lived longer" is a claim about people, and almost nobody selling longevity products is making the second one, because they cannot.

:::reveal Give the three criteria a hallmark of aging must meet. ||| It appears with normal aging; experimentally accentuating it accelerates aging; and intervening on it decelerates, stops, or reverses aging. Twelve processes currently meet all three.

:::reveal Distinguish a mechanism claim from an outcome claim, using the hallmarks. ||| "It activates autophagy" or "it clears senescent cells" is a mechanism claim about a pathway. "People who took it lived longer" is an outcome claim about people. Longevity products overwhelmingly make the first kind, because no hallmark-targeting drug has been shown to extend human lifespan in a trial.

## Vocabulary
- **Hallmark of aging**: a process meeting all three criteria of age-associated appearance, acceleration when accentuated, and deceleration when treated.
- **Senescence**: the state where cells stop dividing but persist and signal, one of the twelve hallmarks and the target of senolytic drugs.
- **Inflammaging**: chronic low-grade inflammation with age, added as a hallmark in the 2023 revision.
- **Mechanism claim versus outcome claim**: an assertion about a biological pathway versus one about what happened to people; the distinction that defuses most longevity marketing.

## Sources
López-Otín, C., Blasco, M. A., Partridge, L., Serrano, M., & Kroemer, G. (2023). Hallmarks of aging: An expanding universe. *Cell, 186*(2), 243-278. https://pubmed.ncbi.nlm.nih.gov/36599349/`,
    },
    {
      slug: "what-replicates",
      title: "3 · What actually replicates",
      section: "Section 1 · The frame",
      body: `Strip out everything mechanistic, proprietary, or promising-but-unproven, and a short list remains that shows up across very different populations, methods, and decades. That list is the spine of the rest of this course.

**The convergent findings.** Higher cardiorespiratory fitness. Greater muscular strength with preserved muscle mass. Not smoking. Sleep in the seven-to-nine-hour band rather than chronically short or long. High social integration and low loneliness. Dietary patterns that are plant-forward and minimally ultra-processed, with the specifics varying between traditions. Regular everyday movement rather than only structured exercise.

**Notice what that list looks like.** It is unglamorous, unpatentable, and almost entirely behavioural. It is also, almost exactly, the six pillars of this program, arrived at from a completely different direction: the pillars were chosen from a coaching credential's structure, and the epidemiology independently points at the same targets.

**Notice what is missing.** No supplement. No fasting protocol. No branded regional lifestyle. No compound of any kind. Those appear in the next section, and they appear there because the evidence puts them there.

**And notice the limitation that applies to the whole list.** Nearly all of it is observational. People with high fitness differ from people without it in many ways, and adjustment reduces but never eliminates that. This does not make the findings useless: the effect sizes are large, the dose-responses are graded, they replicate across populations that share nothing else, and the plausible mechanisms are dense. It does mean the honest verb is "associated with," and a coach who says "will make you live longer" has overstated the single best-supported body of evidence in the field.

**Which is the whole coaching posture in one line.** Do the unglamorous things that replicate, describe them accurately, and let the modest honest claim do its work over forty years rather than the inflated one over four weeks.

:::reveal Recite the convergent list, and say what it does not contain. ||| Cardiorespiratory fitness, muscular strength with preserved mass, not smoking, seven to nine hours of sleep, social integration with low loneliness, plant-forward minimally ultra-processed eating, and everyday movement. It contains no supplement, no fasting protocol, no branded regional lifestyle, and no compound.

:::reveal Why is 'associated with' the honest verb even for the strongest findings? ||| Because nearly all of it is observational: people with high fitness differ in many ways, and adjustment reduces but never eliminates that. The findings still carry weight through large effect sizes, graded dose-responses, replication across unrelated populations, and dense mechanisms, but causal language overstates them.

## Vocabulary
- **Convergent evidence**: findings that recur across populations, methods, and eras, which is the strongest signal observational research produces.
- **Residual confounding**: the differences between groups that adjustment cannot fully remove, the reason causal language stays off the table.
- **Graded dose-response**: outcomes improving progressively with more exposure, one of the criteria that makes an association credible.
- **Unpatentable**: the shared property of nearly everything on the replicated list, and a partial explanation for why it is marketed least.`,
      recallContent: [
        {
          prompt: "Someone shows you a longevity supplement study demonstrating it activates a hallmark pathway. What is your response?",
          answer:
            "That is a mechanism claim, not an outcome claim. Ask what happened to the people who took it, over what period, compared with what. No hallmark-targeting compound has been shown to extend human lifespan in a randomized trial, and pathway activation is not the same kind of evidence as living longer.",
        },
      ],
    },

    {
      slug: "quiz-the-frame",
      title: "4 · Knowledge check: the frame",
      section: "Section 1 · The frame",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What gap defines longevity science today?",
            options: [
              "The biology advances fast; no intervention has extended human lifespan in a trial",
              "The behavioural evidence is strong, but the mechanistic understanding lags behind it",
              "Animal findings replicate reliably, but human cohort studies contradict them",
              "Interventions work in trials, but adherence collapses outside research settings",
            ],
            correctIndex: 0,
            explanation:
              "Everything with strong human evidence is behavioural, observational, or both. Nearly all longevity marketing lives in that gap.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "What three things does this capstone do?",
            options: [
              "Grades longevity claims, synthesises the six pillars, sets a protocol project",
              "Reviews the six pillars, tests retention, and issues the program's credential",
              "Summarises each course, adds new evidence, and prepares the learner for a board exam",
              "Teaches longevity biology, prescribes a protocol, and measures its effects",
            ],
            correctIndex: 0,
            explanation:
              "Not a summary. The final quiz is explicitly the smallest part of it.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "How does the course distinguish lifespan from healthspan?",
            options: [
              "Lifespan is what happens; healthspan is what you coach",
              "Lifespan is measured in years; healthspan is measured in quality-adjusted years",
              "Lifespan is genetic; healthspan is behavioural",
              "Lifespan is the population measure; healthspan is the individual one",
            ],
            correctIndex: 0,
            explanation:
              "The goal was never an arbitrary number. It is arriving at eighty or ninety with the capacity to do what you want.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "Why does this course refuse several famous longevity claims?",
            options: [
              "Their primary sources could not be located, or say something different",
              "They come from animal studies that have not been replicated in humans",
              "They rest on observational data that cannot establish causation",
              "They were retracted after publication and remain in circulation",
            ],
            correctIndex: 0,
            explanation:
              "Where that happens, the lesson says so and names what is taught instead. That discipline matters most here, in the pillar with the most money behind its overclaims.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "What three tests must a hallmark of aging meet?",
            options: [
              "It appears with aging; accentuating it accelerates aging; intervening decelerates it",
              "It appears with normal aging; it is measurable in humans; it responds to a known drug",
              "It is present across species; it correlates with lifespan; it can be reversed pharmacologically",
              "It appears before disease onset; it predicts mortality; it responds to lifestyle change",
            ],
            correctIndex: 0,
            explanation:
              "Appearance, accentuation, and intervention. Twelve processes currently meet all three in the 2023 revision.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "How many hallmarks does the 2023 revision propose, and how many were added?",
            options: [
              "Twelve, with four added: inflammation, dysbiosis, intercellular communication, macroautophagy",
              "Twelve, with three added to the original nine",
              "Nine, unchanged from the original framework",
              "Fourteen, with five added to the original nine",
            ],
            correctIndex: 0,
            explanation:
              "The last three named in the list, plus disabled macroautophagy, are the additions. Knowing the count and the additions is what lets a coach recognise the framework when a product borrows it.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What does the hallmarks framework genuinely give you?",
            options: [
              "A map of why aging is not one thing, and why single-target fixes disappoint",
              "A set of clinical targets a practitioner can measure and address in an individual",
              "A ranking of which aging processes matter most for human lifespan",
              "A validated basis for recommending compounds that act on specific pathways",
            ],
            correctIndex: 0,
            explanation:
              "It explains why the hallmarks interconnect, and why lifestyle factors touching several at once outperform ones touching a single pathway.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What is the limit that matters about the hallmarks?",
            options: [
              "A research framework, not a clinical toolkit; no such drug has extended human lifespan",
              "The framework is contested, with several proposed hallmarks failing the three criteria",
              "The hallmarks apply to model organisms and have not been observed in humans",
              "The framework describes aging but offers no candidate interventions",
            ],
            correctIndex: 0,
            explanation:
              "Senolytics, rapamycin analogues, metformin for aging, and NAD precursors rest on animal work and small human pilots, and are medical territory a coach has no business recommending.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "Distinguish a mechanism claim from an outcome claim.",
            options: [
              "'It activates autophagy' is a pathway; 'people lived longer' is people",
              "'It activates autophagy' is unproven; 'people who took it lived longer' is established",
              "A mechanism claim is made by researchers; an outcome claim is made by marketers",
              "A mechanism claim concerns animals; an outcome claim concerns humans",
            ],
            correctIndex: 0,
            explanation:
              "Almost nobody selling longevity products is making the second kind of claim, because they cannot. It is the most useful sentence in the course.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What is 'inflammaging'?",
            options: [
              "Chronic low-grade inflammation with age, added in the 2023 revision",
              "The acute inflammatory response to injury, which slows with age",
              "Inflammation caused by accumulated senescent cells specifically",
              "The inflammatory component of age-related disease, distinct from aging itself",
            ],
            correctIndex: 0,
            explanation:
              "One of the four additions. Knowing which are new is part of knowing the framework rather than reciting a list.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What is 'senescence' as a hallmark?",
            options: [
              "Cells stop dividing but persist and signal; senolytics target them",
              "The progressive loss of stem cell populations with age",
              "The accumulation of DNA damage that triggers cell death",
              "The gradual shortening of telomeres across cell divisions",
            ],
            correctIndex: 0,
            explanation:
              "Persisting and signalling is what makes senescent cells a target: they are not simply dead, they are actively contributing.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "Recite the convergent list from lesson 3.",
            options: [
              "Fitness, strength with preserved mass, not smoking, 7-9 hours sleep, social integration, plant-forward eating, everyday movement",
              "Cardiorespiratory fitness, strength, caloric restriction, sleep, social connection, and a Mediterranean dietary pattern",
              "Fitness, strength, sleep, connection, fasting, and minimally processed eating",
              "Exercise, diet, sleep, stress management, social connection, and targeted supplementation",
            ],
            correctIndex: 0,
            explanation:
              "Seven items. Caloric restriction, fasting protocols, and supplements are conspicuously absent, and they appear in the contested section for that reason.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "What is notable about the convergent list's shape?",
            options: [
              "Unglamorous, unpatentable, behavioural, and almost exactly this program's six pillars",
              "Consistent with the hallmarks framework, addressing several mechanisms at once",
              "Derived from randomized trials rather than observational cohorts",
              "Newly established, with most findings published in the last decade",
            ],
            correctIndex: 0,
            explanation:
              "The pillars were chosen from a coaching credential's structure, and the epidemiology independently points at the same targets. That convergence is the striking part.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "What is missing from the convergent list?",
            options: [
              "No supplement, no fasting protocol, no branded lifestyle, no compound",
              "No dietary specifics, since the traditions vary too widely to generalise",
              "No mental-health component, which the epidemiology has not established",
              "No measure of body composition, which cohort studies rarely capture",
            ],
            correctIndex: 0,
            explanation:
              "Those appear in the next section, and they appear there because the evidence puts them there.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "Why is 'associated with' the honest verb even for the strongest findings?",
            options: [
              "Nearly all of it is observational; adjustment never eliminates group differences",
              "The effect sizes are too small to support causal language",
              "The findings have not been replicated in independent populations",
              "The mechanisms are not yet understood well enough to claim causation",
            ],
            correctIndex: 0,
            explanation:
              "The findings still carry weight through large effects, graded dose-responses, replication across unrelated populations, and dense mechanisms. Causal language overstates them anyway.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "What is 'convergent evidence'?",
            options: [
              "Findings recurring across populations, methods, and eras",
              "Multiple studies reaching the same conclusion using identical methods",
              "Evidence from different disciplines addressing the same question",
              "Findings that agree once the analyses are adjusted for the same confounders",
            ],
            correctIndex: 0,
            explanation:
              "It is the strongest signal observational research produces, and it is why the list survives despite every individual study being confounded.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "What is 'residual confounding'?",
            options: [
              "Group differences adjustment cannot fully remove",
              "Confounding introduced by the choice of statistical model",
              "Bias remaining after randomization fails to balance the groups",
              "The proportion of an effect explained by measured confounders",
            ],
            correctIndex: 0,
            explanation:
              "It is the reason causal language stays off the table even for findings this strong, and it applies to every item on the convergent list.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "What is the coaching posture stated at the end of lesson 3?",
            options: [
              "Do the unglamorous things that replicate, describe them accurately, and wait forty years",
              "Focus on the interventions with the largest effect sizes and defer the rest",
              "Combine behavioural and pharmacological approaches as evidence permits",
              "Prioritise the pillars a client is most willing to work on",
            ],
            correctIndex: 0,
            explanation:
              "The modest honest claim over forty years rather than the inflated one over four weeks. It is the program's whole theory of value in one sentence.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "Someone shows you a supplement study demonstrating it activates a hallmark pathway. What is the response?",
            options: [
              "A mechanism claim: ask what happened to people, over what period, versus what",
              "Ask whether the pathway is one of the twelve hallmarks in the 2023 revision",
              "Ask whether the finding replicated in a second animal model",
              "Ask whether the compound is approved for the indication being claimed",
            ],
            correctIndex: 0,
            explanation:
              "No hallmark-targeting compound has been shown to extend human lifespan in a randomized trial. Pathway activation is not the same kind of evidence as living longer.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What is 'geroscience'?",
            options: [
              "The field studying the biology of aging itself, not its individual diseases",
              "The clinical specialty treating older adults across conditions",
              "The study of exceptional longevity in centenarian populations",
              "The application of aging biology to drug development specifically",
            ],
            correctIndex: 0,
            explanation:
              "Aging itself rather than its diseases. It is the framing that makes the hallmarks a research agenda rather than a list of pathologies.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "Which claim would this course refuse?",
            options: [
              "'This compound clears senescent cells, so it will extend your healthspan'",
              "'Twelve processes currently meet all three hallmark criteria'",
              "'No hallmark-targeting drug has extended human lifespan in a randomized trial'",
              "'Lifestyle factors touching several hallmarks outperform single-pathway interventions'",
            ],
            correctIndex: 0,
            explanation:
              "It converts a mechanism claim into an outcome promise, which is precisely the move lesson 2 exists to defuse.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "cardiorespiratory-fitness",
      title: "4 · Cardiorespiratory fitness: the strongest single number",
      section: "Section 2 · The strongest levers",
      body: `If you could know one physiological measurement about a person and predict how long they will live, the evidence points at this one.

**The quantification.** Pooling 33 studies (102,980 participants and 6,910 deaths for the all-cause analysis), each **1-MET higher maximal aerobic capacity** was associated with an all-cause mortality risk ratio of **0.87 (0.84 to 0.90)** and a coronary or cardiovascular event risk ratio of **0.85 (0.82 to 0.88)**. One MET corresponds roughly to a one-kilometre-per-hour higher running or jogging speed. Comparing the extremes, people with low fitness had an all-cause mortality risk ratio of **1.70 (1.51 to 1.92)** against those with high fitness (Kodama et al., 2009).

**The bands used.** Low fitness was under 7.9 METs, intermediate 7.9 to 10.8, and high 10.9 or above. The review's own conclusion picks out the first threshold: people at 7.9 METs or more had substantially lower mortality and cardiovascular event rates than those below it, which makes that boundary the most consequential one to move a client across.

**Why this matters more than a client expects.** A single MET is a small, achievable change for most untrained people, and it is worth roughly 13 percent of all-cause mortality risk in this data. The client who cannot imagine becoming an athlete does not need to; they need to move up one band.

**The honest limit.** Nobody has run a trial that raises VO2max deliberately and measures deaths. The association is graded, independent of traditional risk factors, and replicated, and it remains an association. Say "strongly associated with," and let the size of the association carry the weight.

**Your two hats, one more time.** Improving cardiorespiratory fitness is a programming task, which is your CPT. Getting someone to keep doing it for thirty years is the coaching task, and WELL-02 is where you learned that the second one is where the failures actually happen.

:::reveal Quote the per-MET figures and the extreme comparison. ||| Each 1-MET higher maximal aerobic capacity: all-cause mortality RR 0.87 (0.84 to 0.90) and coronary or cardiovascular events RR 0.85 (0.82 to 0.88). Low versus high fitness: all-cause mortality RR 1.70 (1.51 to 1.92), across 33 studies.

:::reveal Why is 'move up one band' the useful coaching target rather than 'become highly fit'? ||| Because a single MET is achievable for most untrained people and is worth roughly 13 percent of all-cause mortality risk in this data, and the review singles out the 7.9-MET threshold as the consequential one. Nobody needs to become an athlete to collect most of the available benefit.

## Vocabulary
- **Cardiorespiratory fitness (CRF)**: the capacity to sustain aerobic work, the physiological measure most strongly associated with mortality.
- **MET**: metabolic equivalent, roughly 3.5 millilitres of oxygen per kilogram per minute; one MET is about one kilometre per hour of running speed.
- **Maximal aerobic capacity**: the ceiling of aerobic work a person can sustain, expressed here in METs.
- **Risk ratio per unit**: the change in risk associated with each one-unit increase in exposure, which is what makes CRF actionable rather than merely descriptive.

## Sources
Kodama, S., Saito, K., Tanaka, S., et al. (2009). Cardiorespiratory fitness as a quantitative predictor of all-cause mortality and cardiovascular events in healthy men and women: A meta-analysis. *JAMA, 301*(19), 2024-2035. https://pubmed.ncbi.nlm.nih.gov/19454641/`,
    },
    {
      slug: "strength-and-muscle",
      title: "5 · Strength: the lever that decides the last decade",
      section: "Section 2 · The strongest levers",
      body: `Fitness predicts how long. Strength has a strong claim on predicting how the final stretch actually goes.

**The association.** Pooling 38 studies with **1,907,580 participants and 63,087 deaths**, higher handgrip strength carried an all-cause mortality hazard ratio of **0.69 (0.64 to 0.74)** against lower strength, with a somewhat stronger association in women (0.60) than in men (0.69). Lower-body strength measured by knee extension gave a hazard ratio of **0.86 (0.80 to 0.93)** (García-Hermoso et al., 2018).

**Why grip strength keeps appearing.** It is not that hands matter especially. Grip is a cheap, reliable proxy for total muscular strength, which is itself a proxy for muscle mass, neural function, nutritional status, and the accumulated effect of decades of activity. It is a summary statistic for physical robustness that takes ten seconds to measure.

**The functional argument, which the mortality data understates.** Strength and muscle mass are what stand between an older adult and the cascade that starts with a fall. WELL-02 covered the falls evidence and WHO's specific recommendation that adults over 65 do multicomponent training emphasising balance and strength three or more days a week. Put those together with this mortality data and resistance training stops being an aesthetic pursuit and becomes the thing that protects independence.

**The honest limits, stated twice because they matter.** These are observational associations: no trial has shown that deliberately increasing strength lowers mortality. And this course does not quote the resistance-training mortality meta-analyses that circulate, because they could not be verified in this program's source check. What is verified is that strength predicts survival, powerfully and across nearly two million people.

**The coaching implication for a centenarian protocol.** Whatever else changes across decades, do not let the strength work be the thing that quietly disappears. It is the most commonly abandoned component and among the most consequential to keep.

:::reveal Give the strength-mortality numbers and the sex difference. ||| Across 38 studies and 1,907,580 participants with 63,087 deaths: higher handgrip strength gave an all-cause mortality hazard ratio of 0.69 (0.64 to 0.74), somewhat stronger in women at 0.60 than men at 0.69. Knee-extension strength gave 0.86 (0.80 to 0.93).

:::reveal Why does grip strength predict mortality when hands are not the point? ||| Because it is a cheap, reliable proxy for total muscular strength, which itself summarises muscle mass, neural function, nutritional status, and decades of accumulated activity. It is a ten-second summary statistic for physical robustness.

## Vocabulary
- **Handgrip strength**: a quick dynamometer measure used across cohorts as a proxy for whole-body muscular strength.
- **Appendicular muscle mass**: the muscle of the arms and legs, the compartment most relevant to function and mortality in older adults.
- **Proxy measure**: a cheap measurement standing in for a broader construct, which is why grip appears in so much epidemiology.
- **Functional independence**: the capacity to manage daily life unaided, which strength and balance work protect more directly than mortality data conveys.

## Sources
García-Hermoso, A., Cavero-Redondo, I., Ramírez-Vélez, R., et al. (2018). Muscular strength as a predictor of all-cause mortality in an apparently healthy population: A systematic review and meta-analysis of data from approximately 2 million men and women. *Archives of Physical Medicine and Rehabilitation, 99*(10), 2100-2113. https://pubmed.ncbi.nlm.nih.gov/29425700/`,
    },
    {
      slug: "the-pillars-priced",
      title: "6 · The pillars you already hold, priced together",
      section: "Section 2 · The strongest levers",
      body: `Six courses of evidence, gathered into one view. Nothing here is new; the point is what it looks like assembled.

**Movement, from WELL-02.** Each additional 1,000 daily steps: 12 to 15 percent lower all-cause mortality. Seven thousand steps against two thousand: 47 percent lower mortality, 38 percent lower dementia risk, 28 percent fewer falls. Benefits detectable from around 2,600 steps a day, with the curve steepest where the least active live.

**Sleep, from WELL-05.** Seven or more hours, with the seven-to-nine band as the target. Short sleep carries a mortality risk ratio of 1.12, with the clearest signal below six hours. Long sleep sits at 1.39 and is a marker whose causality the authors leave open, which is why it changes nothing about a healthy long sleeper.

**Connection, from WELL-06.** Stronger social relationships: odds ratio 1.50 for survival across 308,849 people, strongest for complex social integration at 1.91. Isolation 1.29, loneliness 1.26, living alone 1.32, with no difference between objective and subjective, and larger effects under age 65.

**Fitness and strength, from the last two lessons.** Per-MET 0.87. Grip strength 0.69.

**Now look at the shape of it.** These are not competing interventions; they are the same person's week. The client who walks more sleeps better, and the client who sleeps better trains harder, and the client with people expecting them at a Tuesday session does all three. WELL-01 taught that behavioural adherence out-predicts content. This is what that looks like at the scale of a life: the pillars are not a list to optimise separately but a system that either supports itself or unravels together.

**And the practical consequence for your protocol.** Do not build six programs. Build one week, and check that it contains all six.

:::reveal Assemble the headline number from each pillar in one pass. ||| Steps: 12 to 15 percent lower mortality per extra 1,000. Sleep: seven to nine hours, short sleep 1.12 with the clearest signal under six hours. Connection: OR 1.50 for survival, 1.91 for complex integration. Fitness: 0.87 per MET. Strength: 0.69 for higher grip strength.

:::reveal Why does this course say 'build one week, not six programs'? ||| Because the pillars are one person's week rather than competing interventions: walking improves sleep, sleep improves training, and people expecting you on Tuesday drives all three. They support each other or unravel together, so the design unit is the week and the check is whether all six appear in it.

## Vocabulary
- **System versus list**: the framing that treats the pillars as mutually reinforcing rather than separately optimisable.
- **The week as design unit**: building one realistic week containing every pillar instead of six parallel programs.
- **Compounding**: the accumulation of modest maintained effects across decades, which is the program's entire theory of value.`,
    },
    {
      slug: "quiz-frame-and-levers",
      title: "7 · Knowledge check: frame and levers",
      section: "Section 2 · The strongest levers",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "The defining gap in longevity science today is that:",
            options: [
              "No intervention has been shown in a randomized trial to extend human lifespan",
              "The biological mechanisms of aging remain entirely unmapped",
              "Behavioural factors have been shown to have no measurable effect",
              "Randomized trials have shown several compounds extend human lifespan",
            ],
            correctIndex: 0,
            explanation:
              "The biology is well organised and drug candidates are in trials, but nothing has been shown to extend human lifespan in a randomized trial. Everything with strong human evidence is behavioural, observational, or both.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "The 2023 revision proposes how many hallmarks of aging?",
            options: [
              "Twelve, adding disabled macroautophagy, chronic inflammation, and dysbiosis",
              "Nine, unchanged from the original 2013 framework",
              "Five, after consolidation of overlapping mechanisms",
              "Twenty, following the addition of organ-specific hallmarks",
            ],
            correctIndex: 0,
            explanation:
              "Twelve, expanding the original nine. A hallmark must appear with aging, accelerate aging when accentuated, and decelerate it when treated.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "What is the status of hallmark-targeting drugs in humans?",
            options: [
              "None has been shown to extend human lifespan in a randomized trial",
              "Several have been shown to extend human lifespan in large trials",
              "They are approved for longevity indications in most countries",
              "They have been definitively refuted and abandoned by researchers",
            ],
            correctIndex: 0,
            explanation:
              "Senolytics, rapamycin analogues, metformin for aging, and NAD precursors rest on animal work and small human pilots. They are also medical territory, not a coach's to recommend.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "Which appears on the list of findings that replicate across cohorts?",
            options: [
              "High cardiorespiratory fitness and preserved muscular strength",
              "Daily multivitamin supplementation from middle age onward",
              "Time-restricted eating within an eight-hour daily window",
              "Residence in a region marketed as a Blue Zone",
            ],
            correctIndex: 0,
            explanation:
              "The convergent list is fitness, strength, not smoking, seven to nine hours of sleep, social integration, plant-forward minimally processed eating, and everyday movement. Supplements, fasting protocols, and branded regional lifestyles are not on it.",
            sourceLessonSlug: "what-replicates",
          },
          {
            prompt: "Each 1-MET higher cardiorespiratory fitness was associated with an all-cause mortality risk ratio of:",
            options: [
              "0.87, roughly 13 percent lower risk",
              "0.50, roughly half the risk",
              "0.98, a negligible difference",
              "1.15, indicating higher risk at greater fitness",
            ],
            correctIndex: 0,
            explanation:
              "RR 0.87 (0.84 to 0.90) per MET for all-cause mortality and 0.85 for coronary and cardiovascular events, across 33 studies. Low versus high fitness gave 1.70.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "Why does this course frame the fitness target as 'move up one band'?",
            options: [
              "One MET is achievable for most untrained people and carries about 13 percent of mortality risk",
              "Because fitness gains above the lowest band produce no further benefit",
              "Because the evidence only applies to people below 7.9 METs",
              "Because measuring METs precisely requires laboratory testing",
            ],
            correctIndex: 0,
            explanation:
              "The per-MET association is large relative to how achievable a single MET is, and the review highlights the 7.9-MET threshold as consequential. Nobody needs to become an athlete to collect most of the benefit.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "Higher handgrip strength was associated with an all-cause mortality hazard ratio of:",
            options: [
              "0.69, across nearly two million participants",
              "0.95, a marginal association in men only",
              "1.20, indicating higher risk with greater strength",
              "0.30, the largest effect in the epidemiological literature",
            ],
            correctIndex: 0,
            explanation:
              "HR 0.69 (0.64 to 0.74) across 38 studies and 1,907,580 participants, somewhat stronger in women (0.60) than men (0.69), with knee-extension strength at 0.86.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "Grip strength is used across cohorts because it:",
            options: [
              "Is a cheap, reliable proxy for total muscular strength and physical robustness",
              "Directly determines cardiovascular function independent of other factors",
              "Is the only strength measure that can be standardised across studies",
              "Predicts mortality specifically through hand and forearm health",
            ],
            correctIndex: 0,
            explanation:
              "It summarises muscle mass, neural function, nutritional status, and accumulated activity in a ten-second measurement. Knee-extension strength shows the same direction of association.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What limitation applies to both the fitness and strength findings?",
            options: [
              "They are observational: no trial shows that raising them deliberately lowers mortality",
              "They apply only to adults under the age of fifty",
              "They disappear after adjusting for smoking status",
              "They are based on fewer than a thousand participants each",
            ],
            correctIndex: 0,
            explanation:
              "Both are large, graded, replicated associations, and neither has been tested by a trial that raises the measure and counts deaths. The honest verb stays 'associated with'.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "The capstone's design instruction for a personal protocol is:",
            options: [
              "Build one realistic week and check that all six pillars appear in it",
              "Build six separate programs and optimise each independently",
              "Prioritise the single pillar with the largest effect size and ignore the rest",
              "Rotate pillars quarterly so no single one becomes stale",
            ],
            correctIndex: 0,
            explanation:
              "The pillars are one person's week and reinforce each other: walking improves sleep, sleep improves training, social commitment drives both. They support each other or unravel together.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "How large was the cardiorespiratory-fitness meta-analysis?",
            options: [
              "33 studies, 102,980 participants, 6,910 deaths in the all-cause analysis",
              "38 studies, 1,907,580 participants and 63,087 deaths",
              "148 prospective studies, 308,849 participants",
              "65 records, classified by strength of demographic evidence",
            ],
            correctIndex: 0,
            explanation:
              "The 1.9-million-participant figure is the grip-strength analysis, and 308,849 is the social-connection review.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What was each 1-MET higher aerobic capacity associated with?",
            options: [
              "All-cause mortality RR 0.87 (0.84-0.90); cardiovascular event RR 0.85 (0.82-0.88)",
              "All-cause mortality RR 0.69 (0.64 to 0.74); cardiovascular event RR 0.85",
              "All-cause mortality RR 0.85; cardiovascular event RR 0.87",
              "All-cause mortality RR 1.70 (1.51 to 1.92) comparing low with high fitness",
            ],
            correctIndex: 0,
            explanation:
              "0.87 for all-cause and 0.85 for events, per MET. The 1.70 figure is the low-versus-high extremes comparison, and 0.69 is grip strength.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What does one MET correspond to, practically?",
            options: [
              "About one kilometre per hour of running speed",
              "Roughly one thousand additional steps per day",
              "Roughly ten percent of a person's maximal aerobic capacity",
              "Roughly one additional session of vigorous training per week",
            ],
            correctIndex: 0,
            explanation:
              "That translation is what makes the finding actionable: a small, achievable change for most untrained people, worth roughly 13 percent of all-cause mortality risk.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What were the fitness bands, and which boundary did the review pick out?",
            options: [
              "Low under 7.9 METs, intermediate 7.9-10.8, high 10.9+; the 7.9 boundary matters most",
              "Low under 5.0 METs, intermediate 5.0 to 8.0, high above 8.0; the 8.0 threshold matters most",
              "Low under 7.9, intermediate 7.9 to 10.8, high 10.9 or above; the 10.9 threshold matters most",
              "The review used continuous fitness rather than bands, so no threshold was identified",
            ],
            correctIndex: 0,
            explanation:
              "People at 7.9 METs or above had substantially lower mortality and event rates than those below, which makes it the most consequential boundary to move a client across.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What was the low-versus-high fitness comparison?",
            options: [
              "All-cause mortality RR 1.70 (1.51-1.92), low fitness against high",
              "All-cause mortality RR 0.87 for high fitness against low",
              "All-cause mortality RR 1.39 for low fitness against high",
              "All-cause mortality RR 2.20 for low fitness against high",
            ],
            correctIndex: 0,
            explanation:
              "Seventy percent higher risk at the low end. Note the direction: this ratio is expressed with low fitness as the exposed group.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What is the honest limit on the fitness evidence?",
            options: [
              "No trial has raised VO2max deliberately and counted deaths",
              "The association disappears after adjusting for traditional risk factors",
              "The finding has been replicated only in male cohorts",
              "Fitness measurement methods varied too widely to pool reliably",
            ],
            correctIndex: 0,
            explanation:
              "The association is graded, independent of traditional risk factors, and replicated, and it remains an association. Say 'strongly associated with' and let the size carry the weight.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "How large was the grip-strength meta-analysis, and what did it find?",
            options: [
              "38 studies, 1,907,580 participants; all-cause mortality HR 0.69 (0.64-0.74)",
              "33 studies, 102,980 participants; all-cause mortality HR 0.87",
              "38 studies, 1,907,580 participants; all-cause mortality HR 0.86 for grip strength",
              "20 studies, 63,087 participants; all-cause mortality HR 0.69",
            ],
            correctIndex: 0,
            explanation:
              "Nearly two million people. The 0.86 figure is lower-body strength measured by knee extension, a separate result in the same analysis.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "How did the grip-strength association differ by sex?",
            options: [
              "Stronger in women (0.60) than in men (0.69)",
              "Somewhat stronger in men (0.60) than in women (0.69)",
              "Identical in both sexes at 0.69",
              "Present in men only, with no significant association in women",
            ],
            correctIndex: 0,
            explanation:
              "0.60 in women against 0.69 in men. Reporting the direction correctly matters because the intuition usually runs the other way.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "Why does grip strength keep appearing in epidemiology?",
            options: [
              "A cheap reliable proxy for total strength, muscle mass, neural function, nutrition",
              "Hand function is independently predictive of independence in older adults",
              "It is the only strength measure that can be standardised across studies",
              "Grip declines earlier than other strength measures, giving earlier warning",
            ],
            correctIndex: 0,
            explanation:
              "A summary statistic for physical robustness that takes ten seconds to measure. It is not that hands matter especially.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What is the functional argument the mortality data understates?",
            options: [
              "Strength and muscle stand between an older adult and the cascade a fall starts",
              "Strength improves quality of life independently of its effect on survival",
              "Strength training is the intervention older adults are most likely to sustain",
              "Muscle mass predicts metabolic health more strongly than it predicts mortality",
            ],
            correctIndex: 0,
            explanation:
              "Combined with WELL-02's falls evidence and WHO's 65-plus multicomponent recommendation, resistance training stops being aesthetic and becomes what protects independence.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What does this course NOT quote about resistance training, and why?",
            options: [
              "The resistance-training mortality meta-analyses, which failed the source check",
              "The strength dose-response curves, because they vary too much between populations",
              "The hypertrophy literature, because it is outside the coaching scope",
              "The sarcopenia prevalence figures, because they use inconsistent definitions",
            ],
            correctIndex: 0,
            explanation:
              "What IS verified is that strength predicts survival, powerfully, across nearly two million people. The unverifiable is left out rather than softened.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What is the coaching implication for a centenarian protocol?",
            options: [
              "Do not let the strength work quietly disappear",
              "Prioritise strength over aerobic work, given the larger hazard ratio",
              "Measure grip strength monthly to track the trend",
              "Begin strength work only after aerobic capacity has been established",
            ],
            correctIndex: 0,
            explanation:
              "It is the most commonly abandoned component and among the most consequential to keep. That combination is why it gets named explicitly.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What is a 'proxy measure'?",
            options: [
              "A cheap measurement standing in for a broader one",
              "A measure taken by a third party rather than the person themselves",
              "An indirect measure used when the direct one is unethical to collect",
              "A measure validated against a gold standard in the same population",
            ],
            correctIndex: 0,
            explanation:
              "Grip stands in for whole-body strength, which itself stands in for muscle mass, neural function, and decades of accumulated activity.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "What does lesson 6 say about the six pillars assembled?",
            options: [
              "Not competing interventions: the same person's week",
              "They should be ranked by effect size and addressed in order",
              "They are independent, so each can be optimised without affecting the others",
              "They overlap substantially, so working two of them covers most of the benefit",
            ],
            correctIndex: 0,
            explanation:
              "The client who walks more sleeps better, and the one who sleeps better trains harder. They either support themselves or unravel together.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "What is the practical consequence for protocol design?",
            options: [
              "Do not build six programs; build one week, and check that it contains all six",
              "Build six programs and rotate through them across the year",
              "Build one program targeting the two pillars with the largest effect sizes",
              "Build a program for each pillar and let the client choose which to run",
            ],
            correctIndex: 0,
            explanation:
              "Six separate programs compete for the same hours and lose. The week is the design unit.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "What is 'system versus list'?",
            options: [
              "Pillars as mutually reinforcing rather than separately optimisable",
              "Distinguishing the program's structure from its content",
              "Comparing a protocol's components against a checklist of requirements",
              "Grouping the pillars by whether they are behavioural or physiological",
            ],
            correctIndex: 0,
            explanation:
              "It is what WELL-01's finding about behavioural adherence looks like at the scale of a life.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "What is 'compounding' in this program's usage?",
            options: [
              "Modest maintained effects accumulating across decades",
              "The multiplication of effects when two interventions are combined",
              "The tendency of small habits to grow into larger ones over time",
              "The interaction between pillars that produces more than their sum",
            ],
            correctIndex: 0,
            explanation:
              "It is the program's entire theory of value, and it is why every course insists on modest honest claims rather than inflated ones.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "Which pillar figures does lesson 6 assemble for movement?",
            options: [
              "12 to 15 percent per 1,000 steps; 7,000 vs 2,000: 47 percent mortality, 38 percent dementia, 28 percent falls",
              "12 to 15 percent per 1,000 steps; 7,000 vs 2,000: 38 percent lower mortality and 47 percent lower dementia",
              "15 percent per 1,000 steps; 10,000 vs 2,000: 47 percent lower mortality",
              "12 percent per 1,000 steps, with benefits detectable only above 4,000",
            ],
            correctIndex: 0,
            explanation:
              "Benefits detectable from around 2,600 steps a day, with the curve steepest where the least active live.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "Which sleep figures does lesson 6 assemble?",
            options: [
              "Short sleep RR 1.12, clearest below six hours; long sleep 1.39, causality left open",
              "Short sleep RR 1.39; long sleep 1.12, both established as causal",
              "Short sleep RR 1.12 and long sleep 1.39, both requiring intervention",
              "Seven to nine hours as the target, with no risk ratios established",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the long-sleep figure changes nothing about a healthy long sleeper, despite being the larger number.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "Which connection figures does lesson 6 assemble?",
            options: [
              "Survival OR 1.50; strongest 1.91 for complex integration; isolation 1.29, loneliness 1.26, living alone 1.32",
              "Survival OR 1.91 across 308,849; isolation 1.50, loneliness 1.32, living alone 1.26",
              "Survival OR 1.50; isolation and loneliness both 1.29, with living alone not significant",
              "Survival OR 1.50, with the strongest association for frequency of contact",
            ],
            correctIndex: 0,
            explanation:
              "With no difference between objective and subjective measures, and larger effects under age 65.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "What are the two fitness and strength figures from lessons 4 and 5?",
            options: [
              "Per-MET 0.87; grip strength 0.69",
              "Per-MET 0.85 and grip strength 0.86",
              "Per-MET 0.69 and grip strength 0.87",
              "Per-MET 0.87 and grip strength 0.60",
            ],
            correctIndex: 0,
            explanation:
              "0.85 is the cardiovascular event figure, 0.86 is knee-extension strength, and 0.60 is the female-specific grip figure.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "A client cannot imagine becoming an athlete. What does the fitness evidence offer them?",
            options: [
              "Move up one band: a single MET is achievable and worth roughly 13 percent of risk",
              "Fitness matters less than strength, so they should focus on resistance work instead",
              "The association is observational, so the target should be behavioural rather than physiological",
              "They should aim for the high band at 10.9 METs, which is where the benefit concentrates",
            ],
            correctIndex: 0,
            explanation:
              "And the review's own conclusion picks out 7.9 METs as the boundary most worth crossing, which is nearer than the high band.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What is 'the week as design unit'?",
            options: [
              "Building one realistic week containing every pillar, not six parallel programs",
              "Reviewing progress weekly rather than monthly",
              "Planning training in weekly blocks rather than daily sessions",
              "Assigning one pillar to each day of the week",
            ],
            correctIndex: 0,
            explanation:
              "It follows from the pillars being a system rather than a list, and it is the instruction lesson 12 builds the protocol on.",
            sourceLessonSlug: "the-pillars-priced",
          },
          {
            prompt: "Which two hats apply to cardiorespiratory fitness?",
            options: [
              "Improving it is programming (CPT); keeping it going for thirty years is coaching",
              "Measuring it is coaching; improving it requires clinical supervision",
              "Both are coaching, since fitness is a behavioural outcome",
              "Both are programming, since fitness responds only to structured training",
            ],
            correctIndex: 0,
            explanation:
              "And WELL-02 is where you learned that the second one is where the failures actually happen.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "What is 'appendicular muscle mass'?",
            options: [
              "The muscle of the arms and legs, most relevant to function in older adults",
              "Total body muscle mass excluding water weight",
              "The muscle mass lost during a period of energy restriction",
              "Muscle mass expressed relative to height, as an index",
            ],
            correctIndex: 0,
            explanation:
              "Limb muscle specifically. It is the compartment that decides whether someone can stand up from a chair, which is why it appears in both this lesson and the fasting one.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "Which claim about fitness or strength would this course refuse?",
            options: [
              "'Raising your VO2max by one MET will cut your mortality risk by 13 percent'",
              "'Each 1-MET higher fitness was associated with an all-cause mortality RR of 0.87'",
              "'Higher grip strength carried a hazard ratio of 0.69 across nearly two million people'",
              "'No trial has raised VO2max deliberately and measured deaths'",
            ],
            correctIndex: 0,
            explanation:
              "It converts an observational association into a personal causal promise. The lesson's instruction is to say 'strongly associated with' and let the size carry the weight.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "blue-zones-after-scrutiny",
      title: "8 · Blue Zones, after scrutiny",
      section: "Section 3 · The contested territory",
      body: `The most famous idea in popular longevity deserves the same treatment as everything else, and it does not entirely survive it.

**What a systematic review found.** A scoping review of 65 records classified the claimed regions by the strength of their demographic evidence. **Well characterised:** Ogliastra in Sardinia, Okinawa, and Nicoya in Costa Rica. **Under investigation, with incomplete or conflicting data:** Ikaria, Cilento, a Netherlands municipality, Martinique and Guadeloupe, and Rugao in China. **Excluded for insufficient evidence: Menorca and Loma Linda** (Candal-Pedreira et al., 2025).

**That exclusion list is the first thing to absorb.** Loma Linda appears in nearly every popular account, and it did not meet the review's criteria. A coach repeating the standard list is citing at least one region the systematic evidence does not support.

**The second thing is the erosion.** The review found the longevity advantage fading in both well-characterised zones it examined closely. In Okinawa, indicators are approaching those of adjacent areas, attributed to westernisation, alongside rising mortality. In Nicoya, high longevity appears in cohorts born before 1930 and declines in recent ones, with the zone shrinking geographically. Whatever produced these advantages was not durable against changing conditions, which is fatal to any claim that a fixed traditional practice is doing the work.

**And a third caution, stated without numbers.** A separate demographic critique argues that extreme-age records are unreliable where birth registration is poor and pension incentives exist. This program could not verify that work's specific figures, so it does not quote them, but the direction of the concern is consistent with the review's own finding that these statistics are fragile.

**What survives, and it is not nothing.** The features common to the better-supported zones are real: plant-forward traditional diets, high incidental activity, strong social ties, low smoking. Every one of those is already on the replicated list from lesson 3, established in ordinary cohort studies without any regional mystique. Teach those, and skip the folklore.

:::reveal Which claimed Blue Zones did the scoping review exclude, and why does that matter? ||| Menorca and Loma Linda, for insufficient evidence. It matters because Loma Linda features in nearly every popular account, so anyone reciting the standard list is including a region the systematic evidence does not support.

:::reveal What does the erosion finding do to the 'ancient traditional practice' explanation? ||| It undermines it. The advantage is fading in Okinawa as diets westernise and in Nicoya across cohorts born after 1930, with the zone shrinking geographically. Whatever produced the advantage was not durable against changing conditions, so a fixed traditional practice cannot be what is carrying it.

## Vocabulary
- **Scoping review**: a structured survey mapping the extent and quality of evidence on a topic, used here to grade each claimed region.
- **Well characterised versus under investigation**: the review's tiers for demographic support, with a third tier for regions that did not meet criteria.
- **Cohort erosion**: an advantage present in earlier birth cohorts and absent in later ones, as found in Nicoya.
- **Generic healthy-aging factors**: the plant-forward diets, incidental activity, social ties, and low smoking that the zones share with ordinary cohort evidence.

## Sources
Candal-Pedreira, C., Rey-Brandariz, J., Martín-Gisbert, L., et al. (2025). Blue Zones, an analysis of existing evidence through a scoping review. *Aging and Disease, 17*(3), 1335-1346. https://pubmed.ncbi.nlm.nih.gov/40479568/`,
      recallContent: [
        {
          prompt: "A client wants to adopt 'the Blue Zones lifestyle'. What do you actually coach?",
          answer:
            "The generic factors the better-supported zones share, which are already on the replicated list: plant-forward minimally processed eating, high incidental daily activity, strong social ties, and not smoking. Skip the regional mystique, note that Loma Linda did not meet the review's criteria, and mention that the advantage has been eroding where it was best documented.",
        },
      ],
    },
    {
      slug: "restriction-and-fasting",
      title: "9 · Caloric restriction and fasting, in humans",
      section: "Section 3 · The contested territory",
      body: `Caloric restriction extends life in many species, which makes it the most biologically credible longevity intervention there is. What it does in people is a narrower story.

**The trial that exists.** CALERIE randomised 218 healthy adults without obesity to two years of prescribed 25 percent calorie restriction or ad libitum eating. The **achieved restriction averaged 11.9 percent**, which is itself a finding about human adherence. The restricted group showed improvements in cardiometabolic markers including apolipoprotein B, an inflammation marker, and indices of insulin resistance and diabetes risk, with larger effects in men and in higher-BMI participants (Huffman et al., 2022).

**And the limit that governs how you present it.** CALERIE measured **risk markers, not outcomes**. No cardiovascular events, no mortality. It shows that moderate restriction with adequate nutrition improves risk factors in people who are not obese, which is genuinely interesting and is not the same claim as extending life.

**Fasting, compared honestly.** The relevant question is never "does fasting work" but "does it beat an equivalent calorie deficit." The TREAT trial randomised 116 adults to sixteen-eight time-restricted eating or three structured meals a day for twelve weeks. Weight fell slightly within the time-restricted group, but the **between-group difference was 0.26 kilograms and not significant**. Estimated energy intake did not differ between groups. And in the in-person cohort, appendicular lean mass index differed significantly, favouring the control group (Lowe et al., 2020). The authors' conclusion is unusually direct: time-restricted eating, in the absence of other interventions, is not more effective for weight loss than eating throughout the day.

**What to do with that.** Fasting protocols are one behavioural method for creating an energy deficit, and for some people a genuinely convenient one. They are not a distinct longevity technology, the autophagy arguments are extrapolated from animal and cell work, and the lean-mass signal in TREAT is worth mentioning to anyone doing this alongside strength training.

**The cost of restriction that nobody markets, and the trial that priced it.** Weight loss in older adults takes muscle and bone with it, which is a serious problem in a program organised around arriving at eighty able to do things. Villareal and colleagues randomised **160 obese older adults** to a weight-management programme plus one of aerobic, resistance, or combined training, or to a control group with neither. The primary outcome was physical performance at six months (Villareal et al., 2017).

Body weight fell about **9 percent in all three exercise groups**. What separated them was everything else. Physical performance rose most in the **combined** group (21 percent, versus 14 percent in each single-mode group), and all exercise groups beat the control. Peak oxygen consumption rose most with combined and aerobic training; strength rose most with combined and resistance training. And the finding this lesson exists to carry: **lean mass fell 3 percent in the combined group and 2 percent in the resistance group, against 5 percent with aerobic training alone**, with total-hip bone mineral density falling 1 percent and 0.5 percent respectively against **3 percent** in the aerobic group.

**Read that as a coaching rule rather than a result.** A dieting older adult doing only cardio lost more than twice the bone density of one doing resistance work, on the same weight loss. So the rule is not "restriction is dangerous"; it is **never coach an energy deficit in an older adult without resistance training attached**, and combined training is what the trial actually found best. It is also the reason the strength lesson said the strength work is the most commonly abandoned component and among the most consequential to keep.

**And the honest limits.** Six months, 160 participants of whom 141 completed, obese older adults specifically, and physical function rather than mortality as the endpoint. The trial reports musculoskeletal injuries among exercise-related adverse events, which is worth stating to anyone reading this as a straightforward recommendation.

**The coaching translation.** If a client likes an eating window and it helps them eat less without misery, that is a fine tool and you should support it. If they believe it is doing something calorie restriction would not, correct that gently, because the belief is what makes them persist with a protocol that is not working for them.

:::reveal What did CALERIE achieve versus what it prescribed, and what did it measure? ||| Prescribed 25 percent restriction, achieved an average of 11.9 percent over two years in 218 healthy non-obese adults. It measured cardiometabolic risk markers, which improved, and did NOT measure cardiovascular events or mortality.

:::reveal State TREAT's between-group result and its authors' conclusion. ||| The between-group weight difference was 0.26 kilograms and not statistically significant, with no difference in estimated energy intake and a significant lean-mass difference favouring the control group in the in-person cohort. The authors concluded that time-restricted eating, absent other interventions, is not more effective for weight loss than eating throughout the day.

## Vocabulary
- **Caloric restriction (CR)**: sustained reduction in energy intake with adequate nutrition, the most biologically credible longevity intervention across species.
- **Achieved versus prescribed restriction**: the gap between what a trial asked for and what participants delivered; CALERIE's 25 percent became 11.9.
- **Time-restricted eating (TRE)**: confining intake to a daily window, tested in TREAT against structured meals with no significant weight advantage.
- **Risk markers versus outcomes**: blood measures and indices versus events and deaths; CALERIE moved the former and did not assess the latter.
- **Weight-loss-induced sarcopenia and osteopenia**: the muscle and bone lost alongside fat during an energy deficit, accelerated in older adults and attenuated by resistance training.
- **Attenuation versus prevention**: resistance work reduced lean-mass and bone loss rather than abolishing it; the combined group still lost 3 percent lean mass and 1 percent hip density.
- **Combined training**: aerobic plus resistance work together, the arm that produced the largest functional gain in Villareal's trial.

## Sources
Huffman, K. M., Parker, D. C., Bhapkar, M., et al. (2022). Calorie restriction improves lipid-related emerging cardiometabolic risk factors in healthy adults without obesity: Distinct influences of BMI and sex from CALERIE, a multicentre, phase 2, randomised controlled trial. *EClinicalMedicine, 43*, 101261. https://pubmed.ncbi.nlm.nih.gov/35028547/

Villareal, D. T., Aguirre, L., Gurney, A. B., Waters, D. L., Sinacore, D. R., Colombo, E., Armamento-Villareal, R., & Qualls, C. (2017). Aerobic or resistance exercise, or both, in dieting obese older adults. *New England Journal of Medicine, 376*(20), 1943-1955. https://pubmed.ncbi.nlm.nih.gov/28514618/

Lowe, D. A., Wu, N., Rohdin-Bibby, L., et al. (2020). Effects of time-restricted eating on weight loss and other metabolic parameters in women and men with overweight and obesity: The TREAT randomized clinical trial. *JAMA Internal Medicine, 180*(11), 1491-1499. https://pubmed.ncbi.nlm.nih.gov/32986097/`,
    },
    {
      slug: "the-supplement-autopsy",
      title: "10 · The supplement autopsy",
      section: "Section 3 · The contested territory",
      body: `One large trial does more to teach supplement evidence than a hundred product pages, because it tested two popular supplements at once, in the same population, with hard endpoints.

**The design.** COSMOS randomised older adults to cocoa extract, a daily multivitamin, both, or neither, and followed them for a median of 3.6 years for cardiovascular events and cancer.

**The multivitamin arm.** Total invasive cancer: hazard ratio **0.97 (0.86 to 1.09)**, not significant. Cardiovascular composite: **0.98**, not significant. All-cause mortality: **0.93 (0.81 to 1.08)**, not significant. Lung cancer showed a hazard ratio of 0.62, an isolated signal among many outcomes tested. The authors' conclusion: a daily multivitamin did not significantly reduce total cancer incidence (Sesso et al., 2022a).

**The cocoa arm, which is more instructive.** The **primary endpoint missed**: total cardiovascular events, hazard ratio 0.90 (0.78 to 1.02), P = 0.11. A **secondary endpoint hit**: cardiovascular death, hazard ratio **0.73 (0.54 to 0.98)**, a 27 percent reduction. All-cause mortality was 0.89 and not significant. A per-protocol analysis, restricted to adherent participants, supported a reduction in total events at 0.85 (Sesso et al., 2022b).

**Now watch what happens to that in the world.** "Cocoa flavanols cut cardiovascular death by 27 percent" is a true sentence about a secondary endpoint in a trial whose primary endpoint did not reach significance. It is the sentence that sells the product. The honest version is longer and duller: one large trial found no significant effect on its main outcome and a significant effect on one of several secondary ones, which is a result that warrants further research rather than a purchase.

**The general lesson, which outlives any specific supplement.** Ask what the primary endpoint was and whether it was met. Ask how many outcomes were tested. Ask whether the headline number is from the whole randomised group or from a subset who complied. Those three questions dispose of most supplement marketing, and they work on the next compound too, whatever it turns out to be.

**And the scope note.** Recommending supplements is outside every published coaching scope, as WELL-03 established. You can educate on what the evidence shows for a category. You cannot prescribe, dose, or manage a client's supplement regimen, and the fact that something is sold without prescription does not change that.

:::reveal Contrast COSMOS's cocoa primary and secondary results, and say why the difference matters. ||| The primary endpoint, total cardiovascular events, missed at HR 0.90 (0.78 to 1.02), P = 0.11. A secondary endpoint, cardiovascular death, hit at 0.73, a 27 percent reduction. It matters because the marketable sentence comes from the secondary endpoint of a trial whose main outcome was not significant.

:::reveal Give the three questions that dispose of most supplement marketing. ||| What was the primary endpoint and was it met? How many outcomes were tested? Is the headline number from the whole randomised group or only from the participants who complied?

## Vocabulary
- **Primary endpoint**: the outcome a trial was designed and powered to test; the one that determines whether the trial succeeded.
- **Secondary endpoint**: an additional outcome measured alongside; positive findings here generate hypotheses rather than conclusions.
- **Multiplicity**: the inflated chance of a false positive when many outcomes are tested, the reason isolated signals need caution.
- **Per-protocol analysis**: a re-analysis restricted to adherent participants, which breaks randomisation and tends to flatter the intervention.

## Sources
Sesso, H. D., Rist, P. M., Aragaki, A. K., et al. (2022a). Multivitamins in the prevention of cancer and cardiovascular disease: The COcoa Supplement and Multivitamin Outcomes Study (COSMOS) randomized clinical trial. *The American Journal of Clinical Nutrition, 115*(6), 1501-1510. https://pubmed.ncbi.nlm.nih.gov/35294969/

Sesso, H. D., Manson, J. E., Aragaki, A. K., et al. (2022b). Effect of cocoa flavanol supplementation for the prevention of cardiovascular disease events: The COcoa Supplement and Multivitamin Outcomes Study (COSMOS) randomized clinical trial. *The American Journal of Clinical Nutrition, 115*(6), 1490-1500. https://pubmed.ncbi.nlm.nih.gov/35294962/`,
      recallContent: [
        {
          prompt: "A supplement ad cites a 27 percent reduction in cardiovascular death from a large randomised trial. Everything in the ad is true. What is missing?",
          answer:
            "That it was a secondary endpoint in a trial whose primary endpoint, total cardiovascular events, did not reach significance (HR 0.90, P = 0.11), that all-cause mortality was not significantly reduced, and that several outcomes were tested. True sentences selected from a null primary result are the standard shape of supplement marketing.",
        },
      ],
    },
    {
      slug: "quiz-contested",
      title: "11 · Knowledge check: the contested territory",
      section: "Section 3 · The contested territory",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The Blue Zones scoping review classified which regions as well characterised?",
            options: [
              "Ogliastra in Sardinia, Okinawa, and Nicoya",
              "Loma Linda, Menorca, and Ikaria",
              "All eight commonly cited regions equally",
              "None; the review found no region met its criteria",
            ],
            correctIndex: 0,
            explanation:
              "Those three had demographic evidence of higher centenarian prevalence. Ikaria and others sat under investigation, and Menorca and Loma Linda were excluded for insufficient evidence.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "Which commonly cited Blue Zone did the review EXCLUDE for insufficient evidence?",
            options: [
              "Loma Linda, California",
              "Okinawa, Japan",
              "Nicoya, Costa Rica",
              "Ogliastra, Sardinia",
            ],
            correctIndex: 0,
            explanation:
              "Loma Linda and Menorca were excluded. Loma Linda appears in nearly every popular account, so the standard list includes a region the systematic evidence does not support.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "The review's erosion finding showed the longevity advantage fading in:",
            options: [
              "Both Okinawa and Nicoya",
              "Only Okinawa, with Nicoya's advantage strengthening",
              "None of the well-characterised zones",
              "Only regions that were already under investigation",
            ],
            correctIndex: 0,
            explanation:
              "Okinawa's indicators are approaching adjacent areas amid westernisation, and Nicoya's advantage appears in cohorts born before 1930 while declining since, with the zone shrinking geographically.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "In CALERIE, participants prescribed 25 percent calorie restriction actually achieved:",
            options: [
              "About 12 percent on average over two years",
              "The full 25 percent, sustained across the trial",
              "About 40 percent, exceeding the prescription",
              "No measurable restriction at any point",
            ],
            correctIndex: 0,
            explanation:
              "Achieved restriction averaged 11.9 percent, which is itself a finding about human adherence to sustained restriction. Cardiometabolic risk markers improved; events and mortality were not assessed.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "The TREAT trial's between-group weight difference for time-restricted eating was:",
            options: [
              "0.26 kg and not statistically significant",
              "4.5 kg favouring time-restricted eating",
              "2.0 kg favouring the control condition",
              "Not reported, since the trial was uncontrolled",
            ],
            correctIndex: 0,
            explanation:
              "Weight fell slightly within the TRE group but the between-group difference was 0.26 kg, P = .63, with no difference in estimated energy intake and a significant lean-mass difference favouring controls in the in-person cohort.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "How should a coach frame fasting protocols?",
            options: [
              "As one behavioural method for creating an energy deficit, not a distinct longevity technology",
              "As the most powerful longevity intervention available to non-clinicians",
              "As unsafe and inappropriate for any coaching client",
              "As equivalent to caloric restriction only in people with obesity",
            ],
            correctIndex: 0,
            explanation:
              "Human trials show no advantage over an equivalent calorie deficit, autophagy arguments are extrapolated from animal work, and TREAT raised a lean-mass concern relevant to anyone training for strength.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "In COSMOS, the daily multivitamin arm showed:",
            options: [
              "No significant effect on total cancer, cardiovascular events, or all-cause mortality",
              "A significant reduction in total invasive cancer incidence",
              "A significant reduction in all-cause mortality over 3.6 years",
              "Significant harm across cardiovascular endpoints",
            ],
            correctIndex: 0,
            explanation:
              "Cancer HR 0.97, CVD composite 0.98, all-cause mortality 0.93, none significant. An isolated lung-cancer signal appeared among many outcomes tested, which is what multiplicity produces.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "In the cocoa arm, the relationship between primary and secondary endpoints was:",
            options: [
              "The primary missed at P = 0.11 while a secondary, cardiovascular death, reached significance",
              "Both the primary and all secondary endpoints reached significance",
              "The primary reached significance and the secondaries did not",
              "Neither the primary nor any secondary endpoint moved",
            ],
            correctIndex: 0,
            explanation:
              "Total cardiovascular events gave HR 0.90 (0.78 to 1.02), P = 0.11. Cardiovascular death gave 0.73, a 27 percent reduction. That combination is the standard shape behind supplement headlines.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "Which question does NOT belong in the supplement-evidence checklist taught here?",
            options: [
              "Does the manufacturer fund independent third-party purity testing?",
              "What was the primary endpoint, and was it met?",
              "How many outcomes were tested in the trial?",
              "Is the headline from the whole randomised group or only compliant participants?",
            ],
            correctIndex: 0,
            explanation:
              "Purity testing matters for product quality but says nothing about whether the compound works. The other three questions dispose of most supplement marketing and transfer to any future compound.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "Which Blue Zones did the scoping review classify as WELL CHARACTERISED?",
            options: [
              "Ogliastra in Sardinia, Okinawa, Nicoya in Costa Rica",
              "Okinawa, Ikaria, and Loma Linda",
              "Sardinia, Okinawa, Nicoya, Ikaria, and Loma Linda",
              "Ogliastra, Nicoya, and Rugao in China",
            ],
            correctIndex: 0,
            explanation:
              "Three regions. Ikaria sits in the under-investigation tier, and Loma Linda was excluded for insufficient evidence.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "Which regions did the review EXCLUDE for insufficient evidence?",
            options: [
              "Menorca, and Loma Linda",
              "Ikaria and Cilento",
              "Martinique and Guadeloupe",
              "Rugao in China and a Netherlands municipality",
            ],
            correctIndex: 0,
            explanation:
              "Loma Linda appears in nearly every popular account and did not meet the review's criteria. A coach repeating the standard list is citing a region the systematic evidence does not support.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What is the 'erosion' finding?",
            options: [
              "The longevity advantage is fading in both zones examined closely",
              "The zones' populations are shrinking as younger residents emigrate",
              "The original data has been progressively revised downward",
              "The dietary patterns have eroded while the longevity advantage persists",
            ],
            correctIndex: 0,
            explanation:
              "In Okinawa indicators approach adjacent areas, attributed to westernisation, alongside rising mortality. In Nicoya the advantage appears in cohorts born before 1930 and declines in recent ones.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "Why is the erosion finding fatal to a particular kind of claim?",
            options: [
              "Whatever produced the advantages was not durable against changing conditions",
              "It shows the original longevity measurements were inaccurate",
              "It proves the advantage was genetic rather than environmental",
              "It demonstrates that the zones were never genuinely exceptional",
            ],
            correctIndex: 0,
            explanation:
              "Which is fatal to any claim that a fixed traditional practice is doing the work. If the practice persisted and the advantage did not, the practice was not the mechanism.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What is 'cohort erosion'?",
            options: [
              "An advantage in earlier birth cohorts, absent in later ones",
              "The loss of participants from a cohort study over long follow-up",
              "The gradual weakening of a cohort's representativeness as the population changes",
              "The decline in an exposure's prevalence across successive generations",
            ],
            correctIndex: 0,
            explanation:
              "As found in Nicoya, where high longevity appears in cohorts born before 1930 and the zone is shrinking geographically.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What third caution does the lesson state without numbers?",
            options: [
              "Extreme-age records are unreliable where registration is poor and pensions incentivise",
              "Dietary recall in these populations was collected retrospectively and may be inaccurate",
              "The zones differ in climate and altitude in ways no analysis has adjusted for",
              "Migration into and out of the zones was not tracked in the original studies",
            ],
            correctIndex: 0,
            explanation:
              "This program could not verify that work's specific figures, so it does not quote them. The direction of the concern is consistent with the review's own finding that the statistics are fragile.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What survives the Blue Zones scrutiny?",
            options: [
              "Plant-forward diets, incidental activity, social ties, low smoking: all already on the replicated list",
              "The dietary patterns specifically, which the demographic critique does not touch",
              "Nothing; the concept should be discarded entirely",
              "The social components, which are the only features common to all claimed zones",
            ],
            correctIndex: 0,
            explanation:
              "Every one of those is established in ordinary cohort studies without any regional mystique. Teach those, and skip the folklore.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What are 'generic healthy-aging factors'?",
            options: [
              "The plant-forward diets, incidental activity, social ties, and low smoking, shared with ordinary cohorts",
              "The factors that appear in every population regardless of longevity status",
              "The lifestyle features common to all claimed zones but absent elsewhere",
              "The behavioural components of longevity, as distinct from the genetic ones",
            ],
            correctIndex: 0,
            explanation:
              "The word 'generic' is doing work: they are not zone-specific, which is precisely why they can be taught without the regional framing.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What did CALERIE randomise, and what restriction was achieved?",
            options: [
              "218 healthy non-obese adults, two years of prescribed 25 percent; achieved 11.9",
              "218 adults with obesity to two years of prescribed 11.9 percent restriction; achieved 25 percent",
              "160 obese older adults to two years of restriction plus exercise; achieved 25 percent",
              "116 adults to twelve weeks of restriction; achieved 11.9 percent",
            ],
            correctIndex: 0,
            explanation:
              "The gap between 25 prescribed and 11.9 achieved is itself a finding about human adherence. The 160-participant trial is Villareal and the 116-participant one is TREAT.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What did CALERIE measure, and what did it NOT?",
            options: [
              "Risk markers, not outcomes: no cardiovascular events, no mortality",
              "Mortality over two years, with risk markers as secondary outcomes",
              "Body composition only, with cardiometabolic markers not assessed",
              "Both risk markers and events, though the event rate was too low to analyse",
            ],
            correctIndex: 0,
            explanation:
              "Improving risk factors in people who are not obese is genuinely interesting and is not the same claim as extending life.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What is the relevant question about fasting?",
            options: [
              "Not 'does fasting work' but 'does it beat an equal calorie deficit'",
              "Not 'does fasting work' but 'which fasting protocol works best'",
              "Not 'does fasting work' but 'is it safe over long periods'",
              "Not 'does fasting work' but 'which populations does it suit'",
            ],
            correctIndex: 0,
            explanation:
              "It is the comparator question from WELL-04, applied here. Against nothing, most deficits work; the question is whether the protocol adds anything.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What did the TREAT trial find?",
            options: [
              "Weight difference 0.26 kg, not significant; intake did not differ; lean mass favoured control",
              "Between-group weight difference 2.6 kg favouring time-restricted eating, significant at twelve weeks",
              "No weight change in either group, with lean mass preserved equally",
              "Weight loss favouring time-restricted eating, with lean mass also favouring it",
            ],
            correctIndex: 0,
            explanation:
              "116 adults, sixteen-eight time-restricted eating against three structured meals, twelve weeks. The appendicular lean mass index difference favoured the CONTROL group in the in-person cohort.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What was TREAT's authors' conclusion?",
            options: [
              "Time-restricted eating alone is not more effective for weight loss than eating all day",
              "Time-restricted eating produces modest additional weight loss that may accumulate over longer periods",
              "Time-restricted eating is effective but requires longer than twelve weeks to demonstrate",
              "Time-restricted eating is effective for weight but not for body composition",
            ],
            correctIndex: 0,
            explanation:
              "Unusually direct for a trial conclusion, which is why the lesson quotes the substance of it rather than paraphrasing.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What did Villareal randomise 160 obese older adults to?",
            options: [
              "Weight management plus aerobic, resistance, or combined training, or a control",
              "Caloric restriction of 25 percent or ad libitum eating for two years",
              "Time-restricted eating or three structured meals for twelve weeks",
              "Resistance training alone or combined training, both with weight management",
            ],
            correctIndex: 0,
            explanation:
              "Four arms, with physical performance at six months as the primary outcome. 141 of the 160 completed.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "How did body weight and physical performance compare across Villareal's arms?",
            options: [
              "Weight fell ~9 percent in all exercise groups; performance rose most combined, 21 percent",
              "Weight fell most in the aerobic group; performance rose most in the resistance group",
              "Weight fell equally in all four groups; performance rose only in the combined group",
              "Weight fell about 9 percent in all groups including control; performance rose 14 percent in each",
            ],
            correctIndex: 0,
            explanation:
              "21 percent combined against 14 percent in each single-mode group, and all exercise groups beat the control. Weight did not change significantly in the control group.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What happened to lean mass and bone density across Villareal's arms?",
            options: [
              "Lean mass fell 3 percent combined, 2 percent resistance, 5 percent aerobic; hip density 1, 0.5, and 3 percent",
              "Lean mass fell equally across all exercise arms; only bone density differed",
              "Lean mass fell 5 percent combined and 3 percent aerobic; bone density was preserved in all arms",
              "Lean mass and bone density were preserved in all exercise arms and fell only in the control",
            ],
            correctIndex: 0,
            explanation:
              "A dieting older adult doing only cardio lost more than twice the bone density of one doing resistance work, on the same weight loss.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What coaching rule follows from Villareal?",
            options: [
              "Never coach an energy deficit in an older adult without resistance training",
              "Never coach an energy deficit in an older adult at all, given the bone loss",
              "Coach aerobic training first, adding resistance work once weight has stabilised",
              "Coach resistance training alone, since it preserved lean mass best",
            ],
            correctIndex: 0,
            explanation:
              "Not 'restriction is dangerous'. And combined training is what the trial actually found best, which is more than resistance alone.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What is 'attenuation versus prevention' in the Villareal result?",
            options: [
              "Resistance work reduced lean-mass and bone loss rather than abolishing",
              "Resistance work prevented bone loss entirely while only attenuating lean-mass loss",
              "The attenuation was statistically significant but not clinically meaningful",
              "Prevention occurred in the combined group and attenuation in the resistance group",
            ],
            correctIndex: 0,
            explanation:
              "The combined group still lost 3 percent lean mass and 1 percent hip density. Reading it as prevention overstates a real and useful finding.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What are the honest limits of the Villareal trial?",
            options: [
              "Six months, 160 participants (141 completing), obese older adults, function not mortality",
              "Two years, 218 participants, healthy adults without obesity, risk markers rather than outcomes",
              "Twelve weeks, 116 participants, with weight as the primary outcome",
              "Six months, with no control group receiving neither weight management nor exercise",
            ],
            correctIndex: 0,
            explanation:
              "The trial also reports musculoskeletal injuries among exercise-related adverse events, worth stating to anyone reading it as a straightforward recommendation.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "How should a client's eating window be coached?",
            options: [
              "Support it if it helps them eat less without misery; correct the belief that it adds more",
              "Discourage it, since TREAT found no advantage over structured meals",
              "Support it and encourage extending the fasting window for additional benefit",
              "Support it only in clients not simultaneously doing strength training",
            ],
            correctIndex: 0,
            explanation:
              "The belief is what makes them persist with a protocol that is not working for them, which is why the correction matters even when the tool is fine.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "What did the COSMOS multivitamin arm find?",
            options: [
              "Total cancer HR 0.97, CV composite 0.98, all-cause mortality 0.93; none significant",
              "Total invasive cancer HR 0.62, significant, with cardiovascular outcomes null",
              "All outcomes significantly improved, with the largest effect on cancer incidence",
              "Total invasive cancer HR 0.97 and all-cause mortality 0.73, the latter significant",
            ],
            correctIndex: 0,
            explanation:
              "The 0.62 figure is lung cancer, an isolated signal among many outcomes tested. The 0.73 figure belongs to the cocoa arm's cardiovascular death result.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What happened in the COSMOS cocoa arm?",
            options: [
              "Primary missed (CV events HR 0.90, P = 0.11); a secondary hit (CV death 0.73)",
              "Primary endpoint hit (total CV events HR 0.73); secondary endpoints all null",
              "Both primary and secondary endpoints reached significance",
              "Primary endpoint missed and no secondary endpoint reached significance either",
            ],
            correctIndex: 0,
            explanation:
              "All-cause mortality was 0.89 and not significant. A per-protocol analysis restricted to adherent participants supported a reduction in total events at 0.85.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "Why is 'cocoa flavanols cut cardiovascular death by 27 percent' instructive?",
            options: [
              "A true sentence about a secondary endpoint in a trial whose primary missed",
              "It is a false sentence, since the 27 percent figure appears nowhere in the trial",
              "It is true but refers to the per-protocol rather than the randomised analysis",
              "It is true of the multivitamin arm rather than the cocoa arm",
            ],
            correctIndex: 0,
            explanation:
              "It is the sentence that sells the product. The honest version is longer and duller and warrants further research rather than a purchase.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What three questions dispose of most supplement marketing?",
            options: [
              "Primary endpoint and was it met; how many outcomes tested; whole group or adherent subset",
              "Who funded it; was it peer reviewed; has it replicated",
              "How large was the sample; how long the follow-up; what was the comparator",
              "Was it randomised; was it blinded; was it pre-registered",
            ],
            correctIndex: 0,
            explanation:
              "And they work on the next compound too, whatever it turns out to be, which is why the lesson calls it a general lesson outliving any specific supplement.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What is 'multiplicity'?",
            options: [
              "The inflated false-positive chance when many outcomes are tested",
              "The presence of multiple active ingredients in a single supplement",
              "The testing of one outcome across multiple subgroups",
              "The combination of several trials into a pooled analysis",
            ],
            correctIndex: 0,
            explanation:
              "It is why the lung-cancer signal at 0.62 needs caution: among many outcomes tested, some will look significant by chance.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What is a 'per-protocol analysis,' and what does it do?",
            options: [
              "A re-analysis restricted to adherent participants; it breaks randomisation and flatters",
              "An analysis following the pre-registered statistical plan exactly",
              "An analysis including all randomised participants regardless of adherence",
              "An analysis restricted to participants who completed the full follow-up",
            ],
            correctIndex: 0,
            explanation:
              "Adherent participants differ from non-adherent ones in ways beyond adherence, which is what breaking randomisation costs you.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What is the scope note on supplements?",
            options: [
              "Educate on the category; do not prescribe, dose, or manage a regimen",
              "Recommend only supplements with randomized trial support behind them",
              "Discuss supplements only when a client raises them first",
              "Refer all supplement questions to a physician without comment",
            ],
            correctIndex: 0,
            explanation:
              "And the fact that something is sold without prescription does not change that. WELL-03 established the rule; this lesson applies it where the marketing is heaviest.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "What is a 'primary endpoint'?",
            options: [
              "The outcome a trial was designed and powered to test; it decides whether the trial succeeded",
              "The outcome with the largest effect size in a trial's results",
              "The first outcome measured chronologically during follow-up",
              "The outcome most relevant to the patient's own priorities",
            ],
            correctIndex: 0,
            explanation:
              "Designed and powered for. That is why a missed primary with a hit secondary is a hypothesis rather than a conclusion.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "A client cites a supplement trial's headline result. Which question comes first?",
            options: [
              "Was that the primary endpoint, and was it met",
              "How many participants were enrolled",
              "Who funded the trial",
              "Has the finding been replicated",
            ],
            correctIndex: 0,
            explanation:
              "It is the first of the three questions, and in the COSMOS case it is the one that separates the marketing sentence from the trial's actual result.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "Which claim about Blue Zones would this course permit?",
            options: [
              "'The better-supported zones' features are already established in ordinary cohorts'",
              "'The Blue Zones prove that traditional diets extend lifespan'",
              "'Loma Linda demonstrates the longevity benefit of a plant-based diet'",
              "'The Blue Zones concept has been entirely discredited by demographic analysis'",
            ],
            correctIndex: 0,
            explanation:
              "Loma Linda was excluded for insufficient evidence, the erosion finding undermines the fixed-practice claim, and 'entirely discredited' overstates a review that classified three zones as well characterised.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What is 'achieved versus prescribed restriction'?",
            options: [
              "The gap between what a trial asked and what participants delivered: 25 became 11.9",
              "The difference between the restriction a client agrees to and what they report",
              "The variation in restriction achieved across different participants in a trial",
              "The reduction in prescribed restriction as a trial progresses and adherence falls",
            ],
            correctIndex: 0,
            explanation:
              "It is itself a finding about human adherence, and it means CALERIE's results describe roughly 12 percent restriction rather than the 25 percent its name implies.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "A client doing time-restricted eating alongside strength training asks whether to continue. What is worth mentioning?",
            options: [
              "TREAT's lean-mass signal, which favoured the control group in person",
              "That fasting blunts training adaptation, as the cold-water evidence showed",
              "That fasting is contraindicated during any strength-training block",
              "That the eating window should be extended to at least twelve hours",
            ],
            correctIndex: 0,
            explanation:
              "The appendicular lean mass index difference is the specific finding worth raising with anyone combining the two, and it converges with the Villareal result in the same lesson.",
            sourceLessonSlug: "restriction-and-fasting",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "designing-your-protocol",
      title: "12 · Designing your own protocol",
      section: "Section 4 · The protocol",
      body: `Here is the project. Build the thing you will actually run, and build it the way the evidence says rather than the way it looks impressive.

**Start from the week, not the pillars.** Lesson 6 made the case: six separate programs compete for the same hours and lose. Write one ordinary week, with its real constraints, and check it against the six. Where a pillar is missing entirely, that is the design problem. Where a pillar is present but fragile, that is the coaching problem.

**Set the doses from the evidence, at the low end.** Movement toward the next thousand steps rather than a universal target. Strength work that survives a bad month. Sleep with a fixed wake time as the anchor. One recurring social commitment involving other people expecting you. A breathing practice measured in minutes. Eating built on additions rather than restrictions. Every one of those numbers came from a course, and every one is deliberately smaller than the version you would design if you were trying to impress someone.

**Design the minimum version now, not later.** For each element, define what counts on the worst plausible day, before the worst plausible day arrives. WELL-01 established that the miss is not the danger; abandonment after the miss is. A protocol without pre-defined minimums is a protocol that ends the first hard week.

**Build in one thing that other people notice.** The single strongest lever in this course is social, and its most actionable form is a recurring commitment with the same people. It also happens to be the element that makes the other five survive, because a Tuesday session someone expects you at is more durable than any intention.

**And write down what would make you stop.** Injury, illness, a new job, a family crisis. Deciding in advance which elements pause and which hold is the difference between a protocol that bends and one that shatters. This is the adherence work from WELL-01, applied to a forty-year timeframe rather than a twelve-week one.

:::reveal Why does the protocol start from the week rather than from the six pillars? ||| Because six separate programs compete for the same hours and lose. One ordinary week with its real constraints, checked against the six, reveals which pillars are absent (a design problem) and which are present but fragile (a coaching problem).

:::reveal What must be defined before the first hard week, and why? ||| The minimum version of each element: what counts on the worst plausible day. Because the miss is not the danger, abandonment after the miss is, and a protocol without pre-defined minimums ends the first time life interferes.

## Vocabulary
- **The week as unit**: designing one realistic week containing all six pillars rather than parallel programs.
- **Minimum version**: the smallest instance of an element that still counts, defined in advance for bad days.
- **Social anchor**: a recurring commitment with other people, which both carries the strongest lever and stabilises the rest.
- **Stop conditions**: the circumstances decided in advance under which elements pause or hold, so disruption bends the protocol instead of ending it.`,
    },
    {
      slug: "what-to-measure",
      title: "13 · What to measure, and what to ignore",
      section: "Section 4 · The protocol",
      body: `A protocol you cannot see is a protocol you will drift out of. A protocol measured badly is worse, because it generates confident wrong conclusions.

**Measure the behaviour, mostly.** Sessions completed. Steps, as a weekly trend. Bedtime and wake consistency. Whether the social commitment happened. These are the things you control, they respond immediately, and WELL-03's evidence says behavioural adherence out-predicts almost everything else about outcomes.

**Measure a few capacities, rarely.** Cardiorespiratory fitness and strength are the two measurements with the strongest mortality associations in this course, and both change slowly. Testing them once or twice a year is enough to see a trend and not often enough to generate anxiety. Grip strength is genuinely worth having as a number, because it takes seconds and it summarises a great deal.

**Ignore the noise you are being sold.** Nightly sleep stage breakdowns, which WELL-05 showed are the least reliable output your tracker produces. Single-morning heart-rate-variability readings, which WELL-04 showed are noisy and can move for mathematical reasons that have nothing to do with your recovery. Daily weight, unless you already know you read it calmly.

**Watch for the failure mode both those courses named.** Orthosomnia in WELL-05 and the general pattern behind it: measurement that increases anxiety about the thing being measured, which then makes the thing worse. If a number is generating distress rather than decisions, the intervention is to stop collecting it for a fortnight.

**And keep the review, which is the actual instrument.** WELL-01 prescribed a monthly review of wins, near-misses, and one revision. Across decades that structure does more than any device, because it converts what happened into what changes next. A protocol with no review is a plan you wrote once.

:::reveal What should be measured often, and what rarely? ||| Often: behaviours you control, such as sessions completed, weekly step trend, sleep timing consistency, and whether the social commitment happened. Rarely, once or twice a year: capacities like cardiorespiratory fitness and grip strength, which change slowly and carry the strongest mortality associations.

:::reveal Give the test for whether a metric should be dropped. ||| Whether it is generating distress rather than decisions. A number that increases anxiety about the thing it measures, which then worsens that thing, should be switched off for a fortnight, exactly as WELL-05 prescribed for sleep tracking.

## Vocabulary
- **Behavioural metric**: a measure of what you did, which you control and which responds immediately.
- **Capacity metric**: a measure of what your body can do, such as fitness or grip strength, which changes slowly and is tested rarely.
- **Measurement-induced anxiety**: the pattern where tracking worsens the tracked outcome, named as orthosomnia in the sleep pillar.
- **The monthly review**: the recurring structure that turns events into revisions, and the most durable instrument in the protocol.`,
    },
    {
      slug: "the-decades-problem",
      title: "14 · The decades problem",
      section: "Section 4 · The protocol",
      body: `Everything in this program was tested over weeks, months, or occasionally a few years. You are proposing to run it for forty. That gap deserves its own lesson.

**What actually changes over that horizon.** Your body, obviously, but also your constraints: children, careers, illness, caregiving, bereavement, moving cities, losing the people who anchored your Tuesday. A protocol that assumes stable conditions will be invalidated repeatedly, and the question is never whether that happens but whether the protocol is built to be rewritten.

**Which means designing for revision rather than for optimality.** The best protocol you could construct today, tuned precisely to this year's schedule, is more fragile than a rougher one that survives being rebuilt. WELL-02's maintenance evidence showed that most of what people keep is a fraction of what they gained, and that the fraction persists for years. The goal is to keep having something to keep.

**Expect the drift, and plan the re-anchor.** WELL-01 named schedule change as the silent killer of habits, because it deletes cues without announcing it. Across decades, every cue you rely on will eventually be deleted. Noticing that a habit stopped because its trigger vanished, rather than because you failed, is the difference between rebuilding in a week and concluding you are not the kind of person who does this.

**The identity question underneath all of it.** WELL-01 taught that beliefs are more coachable than circumstances. Over forty years the operative belief is not about any pillar; it is whether you are someone who keeps returning to this after interruptions. That belief is built by returning after interruptions, which means the interruptions are not the enemy of the protocol. They are the training.

**And the honest arithmetic of the whole program.** Nearly every effect in these six courses is small. Compounded across decades and applied to curves where the steepest gains belong to the least active, small and maintained beats large and abandoned by a margin no single intervention can close. That is not a consolation. It is the finding.

:::reveal Why design for revision rather than for optimality? ||| Because a precisely tuned protocol assumes stable conditions that decades will invalidate repeatedly, while a rougher one survives being rebuilt. The maintenance evidence shows people keep a fraction of what they gain and keep it for years, so the goal is to keep having something to keep.

:::reveal What is the operative belief across a forty-year horizon, and how is it built? ||| Not a belief about any pillar, but whether you are someone who returns to this after interruptions. It is built by returning after interruptions, which makes the interruptions part of the training rather than the enemy of the protocol.

## Vocabulary
- **Design for revision**: building a protocol expected to be rewritten, rather than one optimised for current conditions.
- **Cue deletion**: the loss of a habit's trigger through changed circumstances, the usual cause of a habit stopping across long horizons.
- **Re-anchoring**: deliberately attaching a behaviour to a new stable cue after the old one disappears.
- **Small and maintained**: the program's central arithmetic, that modest effects held for decades outperform large ones abandoned.`,
      recallContent: [
        {
          prompt: "Your protocol collapses during a six-month crisis. What does this course say that means?",
          answer:
            "That a cue was deleted and conditions changed, not that you failed or that the protocol was wrong. The move is to notice which triggers vanished, re-anchor to new stable cues, and restart at the minimum version. Returning after interruptions is how the operative belief gets built, so the interruption is part of the training.",
        },
      ],
    },
    {
      slug: "scope-and-the-mock-exam",
      title: "15 · Scope, one last time, and the exam week",
      section: "Section 4 · The protocol",
      body: `The program ends where it began, and then it sets you one final task.

**The boundary, restated after everything.** You have now studied stress physiology, sleep architecture, mindfulness trials, crisis protocols, and the mortality epidemiology of six pillars. That knowledge does not extend your scope by a single inch. You still do not diagnose, do not treat, do not deliver named psychotherapies, do not prescribe diets for conditions, and do not interpret anyone's measurements clinically. Knowing more is exactly the situation in which scope discipline gets tested, because competence makes overreach feel reasonable.

**What the knowledge did buy you.** Better referrals, because you can recognise what needs one. Better collaboration, because you can talk to a clinician without wasting their time. Better claims, because you know the actual sizes. And better coaching, because you understand the systems your client's behaviour is running on.

**The affiliation statement, one final time.** This program is independent. It is not affiliated with, endorsed by, or accredited by NASM or the NBHWC, and completing it grants no credential from either. What it grants is what you can now do.

**The mock exam week.** WELL-00 promised this, and here it is. When all nine courses are complete, take every course final again, back to back in one sitting: nine finals, ten freshly drawn questions each, ninety questions across the whole program. The pools serve different subsets on retake, so this measures retention rather than memory. Treat a score below 80 on any final as an instruction about which course to reread, not as a verdict.

**And the real capstone assignment, which is not a quiz.** Write your protocol, per lesson 12. Run it for a month. Then run the WELL-01 session loop on yourself about it: evoke what it is actually for, find the inner obstacle that showed up, and revise one element into a contingent plan with an anchor and a minimum version. Keep the artefact. In a year, run it again against what you wrote, and you will have the only longitudinal data about you that will ever exist.

:::reveal Does completing this program extend your scope of practice? ||| No, not by an inch. You still do not diagnose, treat, deliver named psychotherapies, prescribe diets for conditions, or interpret measurements clinically. What the knowledge buys is better referrals, better collaboration with clinicians, more accurate claims, and better coaching.

:::reveal Describe the mock exam week and how to read a low score. ||| After all nine courses, take every course final back to back in one sitting: nine finals, ten freshly drawn questions each, ninety questions total. Because pools serve different subsets on retake, it measures retention. A score under 80 on any final is an instruction about which course to reread, not a verdict.

## Vocabulary
- **Competence-driven overreach**: the specific risk that knowing more makes stepping outside scope feel justified.
- **Mock exam week**: the program's culminating assessment, all nine finals in one sitting with freshly drawn questions.
- **Capstone artefact**: the written protocol and self-coaching session that becomes the baseline for future comparison.
- **Independent study program**: this program's honest status, granting capability rather than any external credential.`,
    },
    {
      slug: "quiz-the-protocol",
      title: "16 · Knowledge check: the protocol",
      section: "Section 4 · The protocol",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Where does protocol design start?",
            options: [
              "From the week, not the pillars: write one ordinary week, check it against six",
              "From the pillars, addressing each in turn until all six are covered",
              "From the client's weakest pillar, which offers the largest available gain",
              "From the client's strongest pillar, to build early momentum",
            ],
            correctIndex: 0,
            explanation:
              "Six separate programs compete for the same hours and lose. Where a pillar is missing entirely, that is the design problem; where it is present but fragile, that is the coaching problem.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "At what level should the doses be set?",
            options: [
              "At the low end, deliberately smaller than the version built to impress someone",
              "At the level the evidence identifies as optimal for each outcome",
              "At the highest level the client believes they can sustain",
              "At the midpoint of each guideline's recommended range",
            ],
            correctIndex: 0,
            explanation:
              "Next thousand steps rather than a universal target, strength work that survives a bad month, a breathing practice measured in minutes. Every number came from a course and every one is deliberately small.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "When should the minimum version be defined?",
            options: [
              "Now, before the worst plausible day",
              "After the first missed week, once the failure mode is known",
              "At the monthly review, once the pattern is visible",
              "Only for the elements the client finds hardest",
            ],
            correctIndex: 0,
            explanation:
              "WELL-01 established that the miss is not the danger; abandonment after the miss is. A protocol without pre-defined minimums ends the first hard week.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "What single element does the lesson say makes the other five survive?",
            options: [
              "A recurring commitment with the same people, which others notice",
              "A daily movement habit anchored to a stable cue",
              "The monthly review, which converts events into revisions",
              "A fixed wake time, which stabilises the whole week",
            ],
            correctIndex: 0,
            explanation:
              "The strongest lever in the course is social, and a Tuesday session someone expects you at is more durable than any intention.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "What are 'stop conditions'?",
            options: [
              "Circumstances decided in advance under which elements pause or hold",
              "The signs that a protocol is no longer producing benefit and should end",
              "The point at which a client should stop coaching and self-manage",
              "The safety limits beyond which an element becomes contraindicated",
            ],
            correctIndex: 0,
            explanation:
              "Injury, illness, a new job, a family crisis. Deciding in advance which elements pause and which hold is the difference between a protocol that bends and one that shatters.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "What is a 'social anchor'?",
            options: [
              "A recurring commitment with other people, carrying the strongest lever and stabilising the rest",
              "A person the client reports their progress to weekly",
              "A social group organised around the client's health goals",
              "A commitment the client makes publicly to increase accountability",
            ],
            correctIndex: 0,
            explanation:
              "It does two jobs at once: it is the pillar with the strongest evidence, and it is the structure that makes the other elements durable.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "What should be measured mostly?",
            options: [
              "Behaviour: sessions completed, step trend, sleep timing, whether the social commitment happened",
              "Capacity: fitness, strength, and body composition, tracked monthly",
              "Outcomes: weight, blood pressure, and blood markers, tracked quarterly",
              "Subjective state: energy, mood, and perceived recovery, tracked daily",
            ],
            correctIndex: 0,
            explanation:
              "These are the things you control, they respond immediately, and behavioural adherence out-predicts almost everything else about outcomes.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What should be measured rarely, and why?",
            options: [
              "Fitness and strength: the strongest mortality associations, both changing slowly",
              "Body composition and weight, since frequent measurement generates anxiety",
              "Blood markers, since they require clinical interpretation the coach cannot provide",
              "Sleep and recovery metrics, since devices measure them poorly",
            ],
            correctIndex: 0,
            explanation:
              "Once or twice a year is enough to see a trend and not often enough to generate anxiety. Grip strength is worth having because it takes seconds and summarises a great deal.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What noise should be ignored?",
            options: [
              "Nightly sleep stages, single-morning HRV, and daily weight unless read calmly",
              "All wearable data, since none of it is validated for individual use",
              "Weekly step totals, which fluctuate too much to be informative",
              "Subjective ratings, which are unreliable compared with device measurement",
            ],
            correctIndex: 0,
            explanation:
              "Stage breakdowns are the least reliable tracker output (WELL-05), and HRV can move for mathematical reasons unrelated to recovery (WELL-04).",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What is 'measurement-induced anxiety,' and what is the intervention?",
            options: [
              "Tracking worsens the tracked outcome; stop that number for a fortnight",
              "Anxiety about results delays testing; schedule it in advance and commit",
              "Frequent measurement produces noise that looks like decline; measure less often",
              "Comparison with norms produces distress; measure only against personal baselines",
            ],
            correctIndex: 0,
            explanation:
              "Named as orthosomnia in the sleep pillar. If a number is generating distress rather than decisions, the intervention is to stop collecting it.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What does the lesson call 'the actual instrument'?",
            options: [
              "The monthly review: wins, near-misses, one revision",
              "The annual capacity testing of fitness and strength",
              "The weekly behavioural tracking that responds immediately",
              "The written protocol itself, revised as circumstances change",
            ],
            correctIndex: 0,
            explanation:
              "Across decades that structure does more than any device, because it converts what happened into what changes next. A protocol with no review is a plan you wrote once.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What distinguishes a behavioural metric from a capacity metric?",
            options: [
              "Behavioural: what you did, responding immediately. Capacity: what the body can do, changing slowly",
              "Behavioural is self-reported; capacity is objectively measured",
              "Behavioural is tracked daily; capacity is tracked weekly",
              "Behavioural predicts adherence; capacity predicts outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Control and response speed are what separate them, and that is why one is tracked constantly and the other once or twice a year.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What actually changes across a multi-decade horizon?",
            options: [
              "Your body, and your constraints: children, careers, illness, caregiving, bereavement, moving",
              "Your body primarily, with constraints remaining broadly stable after mid-life",
              "Your goals, which shift as priorities change with age",
              "The evidence, which will have been substantially revised",
            ],
            correctIndex: 0,
            explanation:
              "A protocol that assumes stable conditions will be invalidated repeatedly. The question is never whether that happens but whether the protocol is built to be rewritten.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "What does 'design for revision rather than for optimality' mean?",
            options: [
              "A protocol tuned to this year is more fragile than a rougher one that survives rebuilding",
              "Protocols should be reviewed and revised on a fixed schedule regardless of circumstances",
              "Optimality should be sacrificed for simplicity so clients can follow it unaided",
              "Each revision should improve on the last, building toward an optimal version",
            ],
            correctIndex: 0,
            explanation:
              "WELL-02's maintenance evidence showed most of what people keep is a fraction of what they gained, and that fraction persists for years. The goal is to keep having something to keep.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "What is 'cue deletion,' and why does it matter across decades?",
            options: [
              "Changed circumstances remove a habit's trigger silently; every cue is eventually deleted",
              "Habits weaken as their cues become less salient with repetition",
              "Clients stop responding to cues once the behaviour becomes automatic",
              "Cues lose effectiveness when a client is under high stress",
            ],
            correctIndex: 0,
            explanation:
              "Noticing that a habit stopped because its trigger vanished, rather than because you failed, is the difference between rebuilding in a week and concluding you are not the kind of person who does this.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "What is the operative belief over forty years?",
            options: [
              "Whether you are someone who keeps returning after interruptions",
              "Whether the protocol is worth the effort it requires",
              "Whether your goals still matter to you as circumstances change",
              "Whether the evidence behind each element still holds",
            ],
            correctIndex: 0,
            explanation:
              "And it is built by returning after interruptions, which means the interruptions are not the enemy of the protocol. They are the training.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "State the honest arithmetic of the whole program.",
            options: [
              "Small and maintained beats large and abandoned, by an uncloseable margin",
              "Large effects applied briefly outperform small effects applied consistently",
              "The pillars combine multiplicatively, so six modest effects produce a large one",
              "Effects compound only where adherence exceeds eighty percent across decades",
            ],
            correctIndex: 0,
            explanation:
              "Nearly every effect in these six courses is small. Compounded across decades and applied to curves where the steepest gains belong to the least active, that is not a consolation. It is the finding.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "What is 're-anchoring'?",
            options: [
              "Attaching a behaviour to a new stable cue after the old one disappears",
              "Restarting a habit after a period of abandonment",
              "Renewing a client's commitment to a goal that has lost salience",
              "Reconnecting a behaviour to the value that originally motivated it",
            ],
            correctIndex: 0,
            explanation:
              "It is the fix for cue deletion, and it is why diagnosing a stopped habit correctly matters: motivation work aimed at a cue problem wastes the session.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "How does completing this program change your scope of practice?",
            options: [
              "Not by a single inch",
              "It extends scope in the pillars where the coach now has content knowledge",
              "It permits clinical interpretation of measurements the coach now understands",
              "It permits work with clinical populations under a clinician's direction",
            ],
            correctIndex: 0,
            explanation:
              "You still do not diagnose, treat, deliver named psychotherapies, prescribe diets for conditions, or interpret measurements clinically. Knowing more is exactly when scope discipline gets tested.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "What is 'competence-driven overreach'?",
            options: [
              "The risk that knowing more makes overstepping feel justified",
              "The tendency of experienced coaches to take on clients beyond their capacity",
              "The expansion of a practice faster than a coach's skills develop",
              "The assumption that competence in one pillar transfers to another",
            ],
            correctIndex: 0,
            explanation:
              "It is why the scope lesson comes last rather than only first: the moment of greatest risk is the moment of greatest knowledge.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "What did the knowledge buy you, per the closing lesson?",
            options: [
              "Better referrals, collaboration, claims, and coaching",
              "A credential recognised by the certifying bodies the program benchmarks against",
              "The ability to work with clinical populations that were previously out of reach",
              "Authority with clients, who respond to demonstrated expertise",
            ],
            correctIndex: 0,
            explanation:
              "Recognising what needs a referral, talking to a clinician without wasting their time, knowing the actual sizes, and understanding the systems a client's behaviour runs on.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "Describe the mock exam week.",
            options: [
              "After all nine courses, every final back to back: nine finals, ten fresh questions each",
              "After all nine courses, a separate ninety-question comprehensive exam drawn from all pools",
              "One course final per day across nine consecutive days",
              "Nine finals in one sitting, with the same questions served as on first attempt",
            ],
            correctIndex: 0,
            explanation:
              "The pools serve different subsets on retake, so this measures retention rather than memory. It reuses the existing finals rather than adding an exam.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "How should a score below 80 on any final be treated?",
            options: [
              "As an instruction about which course to reread, not a verdict",
              "As a failure requiring the course to be retaken in full",
              "As noise, since a single attempt draws a small subset",
              "As a signal to review the whole program before reattempting",
            ],
            correctIndex: 0,
            explanation:
              "Every question names the lesson that teaches its answer, so a low score resolves into a specific reading list rather than a judgment.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "What is the real capstone assignment?",
            options: [
              "Write the protocol, run it a month, then run the session loop on yourself",
              "Complete the mock exam week and record the scores as a baseline",
              "Coach another person through a month of the protocol you designed",
              "Document the evidence behind each element of your protocol with citations",
            ],
            correctIndex: 0,
            explanation:
              "Evoke what it is actually for, find the inner obstacle that showed up, revise one element into a contingent plan with an anchor and a minimum version. Keep the artefact.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "Why keep the capstone artefact?",
            options: [
              "Rerunning it in a year gives the only longitudinal data about you that will exist",
              "It documents the coaching work for professional record-keeping purposes",
              "It demonstrates competence to any future certifying body",
              "It provides a template that can be adapted for future clients",
            ],
            correctIndex: 0,
            explanation:
              "The comparison is the point. A protocol written and never revisited is a plan; one compared against itself a year later is data.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "What is the affiliation statement, one final time?",
            options: [
              "Independent, not affiliated with or accredited by NASM or NBHWC, granting no credential",
              "Independently developed but aligned with the NBHWC content outline",
              "An unaccredited program whose completion may count toward continuing education",
              "A program benchmarked against two credentials and recognised by neither",
            ],
            correctIndex: 0,
            explanation:
              "What it grants is what you can now do. The statement appears in lesson 1 of WELL-00 and again here, deliberately bracketing the program.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "A client's protocol collapsed after they changed jobs. What is the first diagnosis to consider?",
            options: [
              "Cue deletion: the trigger vanished silently, so re-anchor rather than re-motivate",
              "Lost motivation, addressed by returning to evoking",
              "Excessive dose, addressed by reducing each element",
              "Missing minimum versions, addressed by defining them now",
            ],
            correctIndex: 0,
            explanation:
              "A schedule change deletes cues silently. Treating it as a motivation problem aims at the wrong variable and teaches the client the wrong lesson about themselves.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "Which measurement would this lesson tell a client to stop collecting?",
            options: [
              "A nightly sleep-stage breakdown generating distress rather than decisions",
              "A weekly step trend that has been flat for a month",
              "An annual grip-strength measurement that has declined slightly",
              "A record of whether the weekly social commitment happened",
            ],
            correctIndex: 0,
            explanation:
              "Stage breakdowns are the least reliable output the device produces, and distress rather than decisions is the stated criterion for a fortnight's holiday from a number.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "What is the 'week as unit' instruction in protocol design?",
            options: [
              "One realistic week containing all six pillars, rather than parallel programs",
              "Review and revise the protocol weekly rather than monthly",
              "Assign each pillar to a different day of the week",
              "Measure adherence weekly rather than daily to reduce noise",
            ],
            correctIndex: 0,
            explanation:
              "It follows from lesson 6's finding that the pillars are a system rather than a list, and it is what makes the design problem visible: which pillar is missing from the week you actually live.",
            sourceLessonSlug: "designing-your-protocol",
          },
        ],
      },
    },
    {
      slug: "final-capstone",
      title: "16 · Final: the centenarian capstone",
      section: "Section 4 · The protocol",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The honest summary of longevity science's current state is that:",
            options: [
              "No intervention has been shown in a randomized trial to extend human lifespan",
              "Several supplements have been proven to extend human lifespan",
              "The biology of aging remains entirely uncharacterised",
              "Behavioural factors have been formally ruled out as meaningful contributors to human longevity",
            ],
            correctIndex: 0,
            explanation:
              "The mechanistic framework is strong and drug candidates are in trials, but nothing has demonstrated human lifespan extension. The strongest human evidence is behavioural and observational.",
            sourceLessonSlug: "what-a-capstone-is-for",
          },
          {
            prompt: "A hallmark of aging must satisfy which set of criteria?",
            options: [
              "Appears with aging, accelerates aging when accentuated, decelerates aging when treated",
              "Is measurable in blood, responds reliably to supplements, and independently predicts mortality risk",
              "Occurs in humans only and is reversible by lifestyle change alone",
              "Has an approved pharmaceutical treatment already on the market",
            ],
            correctIndex: 0,
            explanation:
              "Those three premises define the framework, and twelve processes currently meet them. None has a drug shown to extend human lifespan.",
            sourceLessonSlug: "the-twelve-hallmarks",
          },
          {
            prompt: "Each 1-MET higher cardiorespiratory fitness was associated with:",
            options: [
              "13 percent lower all-cause mortality, RR 0.87",
              "50 percent lower all-cause mortality, RR 0.50",
              "No measurable change in mortality risk",
              "A 13 percent increase in cardiovascular events",
            ],
            correctIndex: 0,
            explanation:
              "RR 0.87 (0.84 to 0.90) per MET across 33 studies, with cardiovascular events at 0.85 and low-versus-high fitness at 1.70.",
            sourceLessonSlug: "cardiorespiratory-fitness",
          },
          {
            prompt: "Across nearly two million participants, higher handgrip strength carried a mortality hazard ratio of:",
            options: [
              "0.69, with a stronger association in women than men",
              "0.98, essentially no association",
              "1.31, indicating higher mortality with more strength",
              "0.20, the largest effect size in the program",
            ],
            correctIndex: 0,
            explanation:
              "HR 0.69 (0.64 to 0.74), with women at 0.60 and men at 0.69, and knee-extension strength at 0.86, across 38 studies and 63,087 deaths.",
            sourceLessonSlug: "strength-and-muscle",
          },
          {
            prompt: "Which region did the Blue Zones scoping review exclude for insufficient evidence?",
            options: [
              "Loma Linda",
              "Okinawa",
              "Ogliastra",
              "Nicoya",
            ],
            correctIndex: 0,
            explanation:
              "Loma Linda and Menorca were excluded. The other three were the well-characterised zones, though the review found their advantage eroding in Okinawa and Nicoya.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "What does the erosion of the Blue Zones advantage imply?",
            options: [
              "A fixed traditional practice cannot be what produced the advantage",
              "The zones were entirely fabricated by researchers",
              "Genetics fully explain the remaining differences",
              "The advantage will return automatically within a generation",
            ],
            correctIndex: 0,
            explanation:
              "Okinawa's indicators approach adjacent areas as diets westernise, and Nicoya's advantage is confined to cohorts born before 1930. Something not durable against changing conditions cannot be a fixed ancestral practice.",
            sourceLessonSlug: "blue-zones-after-scrutiny",
          },
          {
            prompt: "CALERIE's participants, prescribed 25 percent restriction, achieved about 12 percent. The trial measured:",
            options: [
              "Cardiometabolic risk markers, not cardiovascular events or mortality",
              "All-cause mortality across a twenty-year follow-up",
              "Cardiovascular events in participants with existing disease",
              "Nothing measurable at all, because participant adherence to the restriction was too poor to analyse",
            ],
            correctIndex: 0,
            explanation:
              "Markers including apolipoprotein B, inflammation, and insulin-resistance indices improved. Hard outcomes were not assessed, which limits what can be claimed for restriction in humans.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "The TREAT trial concluded that time-restricted eating:",
            options: [
              "Is not more effective for weight loss than eating throughout the day, absent other interventions",
              "Produces roughly double the weight loss of structured meals",
              "Is unsafe for adults with overweight or obesity",
              "Works only when it is combined with an explicitly prescribed daily calorie deficit",
            ],
            correctIndex: 0,
            explanation:
              "The between-group difference was 0.26 kg and not significant, energy intake did not differ, and the in-person cohort showed a significant lean-mass difference favouring controls.",
            sourceLessonSlug: "restriction-and-fasting",
          },
          {
            prompt: "In COSMOS, the cocoa arm's headline 27 percent reduction in cardiovascular death was:",
            options: [
              "A secondary endpoint in a trial whose primary endpoint was not significant",
              "The trial's pre-specified primary endpoint",
              "Observed only in the per-protocol analysis",
              "Accompanied by a statistically significant reduction in all-cause mortality across the trial",
            ],
            correctIndex: 0,
            explanation:
              "Total cardiovascular events, the primary endpoint, gave HR 0.90 at P = 0.11. Cardiovascular death, a secondary, gave 0.73. All-cause mortality at 0.89 was not significant.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "The multivitamin arm of COSMOS showed:",
            options: [
              "No significant effect on total cancer, cardiovascular events, or all-cause mortality",
              "Significant reductions across all three primary outcomes",
              "Significant harm requiring the arm to be stopped early",
              "Clear benefits, but confined entirely to participants under the age of sixty at randomisation",
            ],
            correctIndex: 0,
            explanation:
              "Cancer 0.97, cardiovascular composite 0.98, all-cause mortality 0.93, none significant, with an isolated lung-cancer signal among many outcomes tested.",
            sourceLessonSlug: "the-supplement-autopsy",
          },
          {
            prompt: "The capstone's protocol-design instruction is to:",
            options: [
              "Write one realistic week, check it against all six pillars, and define minimums in advance",
              "Maximise each pillar independently and reconcile conflicts later",
              "Focus exclusively on cardiorespiratory fitness, the strongest single lever",
              "Delay designing anything until a full baseline measurement panel has been completed and reviewed",
            ],
            correctIndex: 0,
            explanation:
              "Six programs compete for the same hours. One week checked against six pillars reveals gaps and fragility, and pre-defined minimum versions are what let it survive the first hard week.",
            sourceLessonSlug: "designing-your-protocol",
          },
          {
            prompt: "Which measurement does this course tell you to ignore?",
            options: [
              "Nightly sleep-stage breakdowns from a consumer tracker",
              "Weekly step-count trends",
              "Annual grip-strength measurement",
              "Whether the recurring social commitment actually happened",
            ],
            correctIndex: 0,
            explanation:
              "Stage classification is the least reliable tracker output and degrades further on disrupted nights. Step trends, annual capacity tests, and behavioural completion are all worth tracking.",
            sourceLessonSlug: "what-to-measure",
          },
          {
            prompt: "Across a forty-year horizon, this course advises designing for:",
            options: [
              "Revision, because conditions will repeatedly invalidate any optimised plan",
              "Optimality, tuning the protocol precisely to current circumstances",
              "Intensity, front-loading effort while motivation is highest",
              "Novelty, replacing the protocol entirely each year to avoid staleness",
            ],
            correctIndex: 0,
            explanation:
              "Children, careers, illness, and bereavement will each invalidate a precisely tuned plan. A rougher protocol that survives rebuilding keeps producing the maintained fraction that matters.",
            sourceLessonSlug: "the-decades-problem",
          },
          {
            prompt: "Completing every WELL course changes your scope of practice how?",
            options: [
              "Not at all; it improves referrals, collaboration, claims, and coaching instead",
              "It permits limited diagnosis of common conditions within coaching",
              "It authorises interpreting client measurements clinically",
              "It grants provisional recognition from the NBHWC, pending a completed application",
            ],
            correctIndex: 0,
            explanation:
              "The program is independent and grants no credential. Knowing more is precisely when scope discipline is tested, because competence makes overreach feel reasonable.",
            sourceLessonSlug: "scope-and-the-mock-exam",
          },
          {
            prompt: "The program's central arithmetic is that:",
            options: [
              "Small effects maintained for decades outperform large effects abandoned",
              "Only interventions with large effect sizes are worth a client's time",
              "Effect sizes matter less than the number of interventions stacked",
              "Behavioural interventions cannot compound in the way drugs do",
            ],
            correctIndex: 0,
            explanation:
              "Nearly every effect across the six pillars is small. Compounded across decades and applied where the curves are steepest, maintained modest change beats abandoned ambition by a margin no single intervention closes.",
            sourceLessonSlug: "the-decades-problem",
          },
        ],
      },
    },
  ],
};
