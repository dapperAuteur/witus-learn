import type { AuthoredCourse } from "./authored-course";

// WELL-07 · Movement, Intensity, and Learning New Things (plans/67, added after dossier 08).
// The course BAM's ninth research prompt earned: it separates three questions WELL-02 treated
// as one, and its verified core (VILPA, the Verghese contrast, perturbation training, and
// activity variety independent of volume) is distinct from anything else in the program.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 08-movement-longevity/08-movement-longevity.md §3-4). Notable verification outcomes:
// - The export UNDER-reported VILPA: its frequency figures (38-40% and 48-49%) are larger than
//   the duration figures it quoted, and both are taught.
// - Verghese's abstract-level contrast (cognitive-activity HR 0.93 per point versus physical-
//   activity HR 1.00) is stronger teaching than the famous dance number, which lives in the
//   tables, rests on about 25 dancers, and is taught only with those caveats.
// - Roughly half the export's effect sizes could not be located and are excluded, including the
//   entire intensity dose-response meta and every dance-trial number.
export const WELL_MOVEMENT_LONGEVITY_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 07: Movement, Intensity, and Learning New Things",
  description:
    "Three questions WELL-02 treated as one: how much movement, how hard, and how new. The four minutes a day of incidental vigorous activity that track a third of mortality risk, what your wearable's intensity number actually measures, and the evidence on learning novel movement across cognition, falls, and lifespan, graded separately because the answers differ.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "three-questions",
      title: "1 · Three questions, not one",
      section: "Section 1 · The three questions",
      body: `WELL-02 answered how much a person should move. This course exists because that is only the first of three questions, and the other two have different answers.

**The three.** **Dose:** how much movement, which the step and minute literatures answer well. **Intensity:** how hard, which turns out to matter in a specific and surprising way once you look at very short bursts. **Novelty:** how new, meaning whether learning unfamiliar movement does something that repeating familiar movement does not.

**Why separating them matters.** They get bundled in practice, and bundling hides the interesting parts. A client walking 8,000 steps a day has a good answer to the first question and possibly no answer at all to the second or third. Another client has been running the same route for eleven years: excellent dose, moderate intensity, zero novelty. The bundled question ("do you exercise?") returns yes for both and tells you nothing about what either is missing.

**A warning about the evidence, up front.** This course refused more claims than any other in the program. Roughly half the effect sizes in the research export could not be located against primary sources, including an entire dose-response meta-analysis and every number from the dance-intervention literature. What survived is a smaller, sturdier set, and where a lesson describes evidence without quoting figures, that is why.

**What survived is still worth a course.** Four verified findings, each of which changes something a coach would otherwise do: four minutes a day of a particular kind of activity, a fifty-year-old cohort finding about which kind of activity predicts dementia, a falls intervention most trainers have never programmed, and a variety effect that persists after adjusting for how much people move.

:::reveal Name the three questions and give an example of someone who answers one well and the others badly. ||| Dose, intensity, and novelty. A client running the same route for eleven years has excellent dose, moderate intensity, and no novelty. Asking "do you exercise?" returns yes and hides which of the three is missing.

:::reveal Why does this course quote fewer numbers than the others in the program? ||| Because roughly half the effect sizes in its research export could not be located against primary sources, including an entire dose-response meta-analysis and every dance-trial figure. Where a lesson describes direction without numbers, that is the reason.

## Vocabulary
- **Dose**: how much movement, measured in steps, minutes, or energy expenditure; the question WELL-02 answered.
- **Intensity**: how hard the movement is, which this course examines at the scale of one-minute bursts rather than sessions.
- **Novelty**: whether the movement is being learned rather than repeated, the question with the most contested evidence.
- **Bundling**: collapsing the three questions into one, which hides what a client is actually missing.`,
    },
    {
      slug: "what-well02-left-open",
      title: "2 · What WELL-02 settled, and what it left open",
      section: "Section 1 · The three questions",
      body: `Before adding anything, it is worth being precise about what you already know, because this course only earns its place where WELL-02 stopped.

**Settled there, and still settled.** Steps carry a graded dose-response: each additional thousand a day is worth 12 to 15 percent of all-cause mortality risk, benefits are detectable from around 2,600 steps, and the curve flattens somewhere between six and ten thousand depending on age. Seven thousand steps against two thousand tracks lower mortality, dementia, cardiovascular disease, diabetes, depression, and falls. Sitting is a risk exposure with no clean threshold. Everyday movement outside exercise is the largest untouched lever for most people.

**Also settled, and relevant here.** The WHO guidelines already contain an intensity statement: 150 to 300 minutes of moderate activity, **or** 75 to 150 of vigorous, or an equivalent combination. That "or" encodes a trade of roughly two moderate minutes for one vigorous, which is the guideline's own position on intensity and a reasonable default.

**What none of that answers.** Whether very short bursts of vigorous activity, too brief to count as a workout and often not even perceived as exercise, do anything. Whether the intensity numbers on a client's watch correspond to any of this. And whether the newness of a movement matters separately from how much or how hard it is.

**Which is the shape of the rest of the course.** One lesson on the short-burst evidence, one on wearable metrics, and a section on novelty split into three parts, because the answer for cognition, the answer for falls, and the answer for lifespan are genuinely different and deserve separate verdicts.

**And the standing scope note.** Everything here is education and behaviour, which is coaching. Programming the resulting sessions is your CPT hat, exactly as WELL-02 established, and the division has not moved.

:::reveal What does the WHO guideline's 'or' already tell you about intensity? ||| That moderate and vigorous minutes trade at roughly two to one: 150 to 300 moderate minutes, or 75 to 150 vigorous, or an equivalent mix. Intensity buys you the same target in less time, which is the guideline's own position.

:::reveal Which three questions does WELL-02 leave unanswered? ||| Whether very short vigorous bursts that nobody would call a workout do anything, whether a wearable's intensity metric corresponds to the research measures behind the mortality curves, and whether the newness of a movement matters separately from its amount and difficulty.

## Vocabulary
- **Moderate-to-vigorous trade**: the guideline's roughly two-to-one exchange rate between moderate and vigorous minutes.
- **Graded dose-response**: risk falling steadily with more exposure, the pattern the step literature shows.
- **Untouched lever**: everyday non-exercise movement, which most clients have never been coached on.
- **Separate verdicts**: this course's approach to novelty, grading cognition, falls, and lifespan independently because the evidence differs.`,
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "vilpa",
      title: "3 · VILPA: the four minutes that matter",
      section: "Section 2 · Intensity",
      body: `This is the most striking finding in the course, and it concerns people who do not exercise at all.

**The study.** Researchers took **25,241 UK Biobank participants who were non-exercisers**, mean age 61.8, fitted them with wrist accelerometers, and used machine learning to identify **vigorous intermittent lifestyle physical activity**: brief bursts of vigorous movement embedded in ordinary life, lasting one or two minutes. Hurrying up a staircase. Carrying shopping uphill. Rushing for a bus. Over an average 6.9 years, 852 deaths occurred (Stamatakis et al., 2022).

**The numbers, both sets.** The associations were near-linear. At the sample **median frequency of three bouts per day**, participants had **38 to 40 percent lower all-cause and cancer mortality** and **48 to 49 percent lower cardiovascular mortality** than those doing none. At the sample **median duration of 4.4 minutes per day**, the reductions were **26 to 30 percent** for all-cause and cancer mortality and **32 to 34 percent** for cardiovascular mortality.

**Read the amounts again.** Three bouts. Four and a half minutes. Not a programme, not a session, not something the participants would have described as exercise if asked.

**And the comparison that gives it weight.** The researchers repeated the analysis for structured vigorous activity in 62,344 participants who did exercise, and found similar effects at comparable amounts. So the incidental version appears to behave like the deliberate version. Their conclusion is the coaching headline: VILPA "may be a suitable physical activity target, especially in people not able or willing to exercise."

**Why this is such useful coaching material.** The population that benefits most from movement is the one least willing to adopt an exercise identity. This finding offers them something that requires no gym, no clothing change, no schedule, and no self-description as an exerciser: take the stairs faster, and mean it, three times a day.

:::reveal Give both VILPA figure sets, with the amounts they correspond to. ||| At the median frequency of three one-to-two-minute bouts per day: 38 to 40 percent lower all-cause and cancer mortality, 48 to 49 percent lower cardiovascular mortality. At the median duration of 4.4 minutes per day: 26 to 30 percent and 32 to 34 percent respectively, compared with people doing none.

:::reveal Why does the parallel analysis in exercisers matter to the interpretation? ||| Because repeating the analysis for structured vigorous activity in 62,344 exercisers gave similar effects at comparable amounts. The incidental version appears to behave like the deliberate one, which is what supports treating VILPA as a genuine target rather than a curiosity.

## Vocabulary
- **VILPA**: vigorous intermittent lifestyle physical activity, brief vigorous bursts embedded in daily tasks rather than performed as exercise.
- **Bout**: a single continuous episode, here lasting one or two minutes, counted by frequency as well as total duration.
- **Non-exerciser**: a participant reporting no structured exercise, the population in which VILPA was measured.
- **Near-linear association**: risk falling steadily across the observed range without a clear threshold or plateau.

## Sources
Stamatakis, E., Ahmadi, M. N., Gill, J. M. R., Thøgersen-Ntoumani, C., Gibala, M. J., Doherty, A., & Hamer, M. (2022). Association of wearable device-measured vigorous intermittent lifestyle physical activity with mortality. *Nature Medicine, 28*(12), 2521-2529. https://pubmed.ncbi.nlm.nih.gov/36482104/`,
    },
    {
      slug: "what-vilpa-licenses",
      title: "4 · What VILPA does and does not license",
      section: "Section 2 · Intensity",
      body: `A finding that good invites overreach, so here is the boundary around it.

**What it supports.** That brief, vigorous, incidental activity is associated with substantially lower mortality in people who do not exercise, in a near-linear pattern, at amounts almost anyone can produce. And that this is worth coaching directly, as its own target, rather than as a consolation for people who will not train.

**What it does not support.** That four minutes a day replaces guideline-level activity. This is observational, in a specific cohort, with **mortality as the endpoint**. It says nothing about strength, function, mood, metabolic health, bone density, or any of the other reasons movement is prescribed. A client who does their three bursts and nothing else has bought an association with lower mortality and has not built a body that can carry shopping at eighty.

**The confounding question, asked honestly.** People capable of hurrying upstairs three times a day differ from people who are not, and some of that difference is health rather than behaviour. Adjustment reduces this and cannot eliminate it. The near-linear dose-response and the parallel finding in exercisers both argue against reverse causation being the whole story, and the honest verb remains "associated with."

**How to coach it.** As an addition, never a substitution. Identify the vigorous opportunities already in the client's day, which is usually stairs, hills, carrying, and hurrying, and coach the decision to take them at intensity rather than avoid them. That is a habit with a natural cue, so the WELL-01 rig applies directly: anchor, minimum version, miss rule.

**And the population to prioritise.** People who have declined structured exercise repeatedly. For them this is not a lesser option; it is the option the evidence was actually generated in.

:::reveal What did the VILPA study measure, and what did it therefore say nothing about? ||| It measured mortality, all-cause, cancer, and cardiovascular. It says nothing about strength, function, mood, metabolic health, or bone density, so a client doing only their bursts has an association with lower mortality and not a body built to carry shopping at eighty.

:::reveal How should VILPA be positioned relative to guideline activity? ||| As an addition, never a substitution, and as the priority option for people who have repeatedly declined structured exercise, since that is the population the evidence was generated in.

## Vocabulary
- **Addition, not substitution**: the rule governing how VILPA enters a plan alongside guideline activity.
- **Endpoint specificity**: the principle that a study licenses claims only about what it measured, here mortality alone.
- **Reverse causation**: the possibility that health drives the exposure rather than the other way round, reduced but not eliminated by adjustment.
- **Natural cue**: an existing daily trigger such as a staircase, which makes VILPA unusually easy to anchor as a habit.`,
      recallContent: [
        {
          prompt: "A client says they will do their four minutes of stair-hurrying and skip the rest of their program. Answer them.",
          answer:
            "The VILPA evidence is about mortality only, in an observational cohort. It says nothing about strength, function, mood, or metabolic health, so those four minutes buy an association with living longer and not the capacity to live well while doing it. Add the bursts, keep the rest.",
        },
      ],
    },
    {
      slug: "quiz-intensity",
      title: "5 · Knowledge check: intensity",
      section: "Section 2 · Intensity",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "This course separates which three questions about movement?",
            options: [
              "Dose, intensity, and novelty",
              "Frequency, duration, and the equipment a client has available",
              "Cardio, strength, and flexibility",
              "Volume, recovery, and periodisation",
            ],
            correctIndex: 0,
            explanation:
              "How much, how hard, and how new. Bundling them into 'do you exercise?' returns a yes that hides which of the three a client is missing.",
            sourceLessonSlug: "three-questions",
          },
          {
            prompt: "The WHO guideline's moderate-to-vigorous trade is approximately:",
            options: [
              "Two moderate minutes for one vigorous minute",
              "Five moderate minutes traded for each single vigorous minute",
              "One moderate minute for one vigorous minute",
              "No trade is specified in the guidelines",
            ],
            correctIndex: 0,
            explanation:
              "150 to 300 moderate minutes or 75 to 150 vigorous, or an equivalent mix, which encodes roughly a two-to-one exchange. Intensity buys the same target in less time.",
            sourceLessonSlug: "what-well02-left-open",
          },
          {
            prompt: "VILPA was measured in which population?",
            options: [
              "25,241 UK Biobank participants who were non-exercisers, mean age 61.8",
              "Elite endurance athletes measured during structured interval training sessions",
              "Hospital inpatients recovering from cardiac events",
              "Adolescents enrolled in school physical education programmes",
            ],
            correctIndex: 0,
            explanation:
              "Non-exercisers wearing wrist accelerometers, with machine learning identifying one-to-two-minute vigorous bursts embedded in ordinary tasks. 852 deaths occurred over an average 6.9 years.",
            sourceLessonSlug: "vilpa",
          },
          {
            prompt: "At the median VILPA duration of 4.4 minutes per day, participants had:",
            options: [
              "26 to 30 percent lower all-cause and cancer mortality versus those doing none",
              "No measurable mortality difference at all versus participants doing none",
              "About 5 percent lower mortality, a marginal association",
              "Higher mortality, attributed to cardiovascular strain",
            ],
            correctIndex: 0,
            explanation:
              "26 to 30 percent for all-cause and cancer mortality and 32 to 34 percent for cardiovascular mortality. At the median frequency of three bouts per day the figures were larger still: 38 to 40 and 48 to 49 percent.",
            sourceLessonSlug: "vilpa",
          },
          {
            prompt: "Why does the parallel analysis in 62,344 exercisers strengthen the VILPA finding?",
            options: [
              "Structured vigorous activity produced similar effects at comparable amounts",
              "It showed that exercisers gained nothing measurable from their structured training",
              "It demonstrated that VILPA is superior to structured exercise",
              "It established causation through random assignment",
            ],
            correctIndex: 0,
            explanation:
              "The incidental version appears to behave like the deliberate version, which supports treating VILPA as a real target. It remains observational and establishes no causation.",
            sourceLessonSlug: "vilpa",
          },
          {
            prompt: "The VILPA study's endpoint was mortality. What does that mean for coaching claims?",
            options: [
              "It licenses nothing about strength, function, mood, metabolic health, or bone density",
              "It licenses claims about all health outcomes, since mortality is comprehensive",
              "It means the findings apply only to people who were already in relatively poor health",
              "It means the findings cannot be used in coaching at all",
            ],
            correctIndex: 0,
            explanation:
              "A study licenses claims about what it measured. Four minutes a day buys an association with lower mortality and not a body that can carry shopping at eighty, which is why VILPA is positioned as an addition.",
            sourceLessonSlug: "what-vilpa-licenses",
          },
          {
            prompt: "Which client should a coach prioritise VILPA for?",
            options: [
              "Someone who has repeatedly declined structured exercise",
              "A competitive athlete seeking marginal gains in competitive performance",
              "Someone already meeting guideline activity levels comfortably",
              "A client in the first week of a supervised rehabilitation programme",
            ],
            correctIndex: 0,
            explanation:
              "The evidence was generated in non-exercisers, and it offers movement that requires no gym, clothing change, schedule, or exerciser identity. For that population it is the option the data actually covers.",
            sourceLessonSlug: "what-vilpa-licenses",
          },
          {
            prompt: "What remains the honest verb for the VILPA findings?",
            options: [
              "Associated with, since the design is observational despite the near-linear dose-response",
              "Causes, since the dose-response pattern establishes causation",
              "Prevents, given that cardiovascular mortality fell by nearly half in the analysis",
              "Unrelated to, since confounding cannot be excluded at all",
            ],
            correctIndex: 0,
            explanation:
              "People capable of hurrying upstairs differ from those who are not, and adjustment reduces without eliminating that. The near-linear curve and the exerciser comparison argue against reverse causation explaining everything, but the design stays observational.",
            sourceLessonSlug: "what-vilpa-licenses",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "wearable-intensity-metrics",
      title: "6 · What your watch's intensity number actually is",
      section: "Section 3 · The wearable layer",
      body: `Your client's device reports something called intensity minutes, active zone minutes, or an exercise ring. None of those is the measure the mortality curves were built from, and knowing the difference prevents a specific kind of confident error.

**What the research uses.** The dose-response literature is built on either accelerometry, where a device records acceleration and researchers apply a published algorithm to classify intensity, or validated self-report questionnaires. Both are imperfect and both are documented: you can read exactly how a study decided what counted as vigorous.

**What consumer devices use.** Proprietary algorithms, differing by manufacturer, typically blending heart rate against an estimated personal maximum with movement data, and reported through branded metrics that each vendor computes its own way. The formulas are not fully published, they change with firmware, and they are not standardised between brands.

**Which produces three practical consequences.** Two clients with identical activity can post different intensity numbers on different watches. The same client's numbers can shift after an update without their behaviour changing. And a client's weekly intensity total cannot be read directly against a guideline or a mortality curve, because it is not the same quantity.

**What the metrics are still good for.** Trends within one person on one device. Motivation, since a closing ring genuinely changes behaviour for many people. And approximate consistency checks across weeks. That is not nothing; it is simply narrower than clients assume.

**The coaching translation.** Treat the device metric as a personal, relative signal, and treat guideline minutes as a separate accounting a client estimates honestly. When someone says their watch gave them 200 intensity minutes, the useful response is interest in the trend rather than arithmetic against the guideline. And note the connection to the previous section: a one-minute vigorous burst may not register meaningfully on any of these metrics at all, which is one more reason not to let the device define what counted.

:::reveal Why can a client's weekly intensity-minute total not be read against the guideline? ||| Because it is a different quantity: consumer metrics use proprietary, unpublished, vendor-specific algorithms blending heart rate and movement, while the guidelines and mortality curves rest on accelerometry with published classification algorithms or validated questionnaires.

:::reveal What are wearable intensity metrics genuinely good for? ||| Trends within one person on one device, motivation, and rough week-to-week consistency checks. Not cross-person comparison, not cross-device comparison, and not direct comparison against guideline or research thresholds.

## Vocabulary
- **Accelerometry**: research-grade movement measurement with published algorithms for classifying intensity, the basis of the dose-response literature.
- **Proprietary metric**: a vendor-computed number such as active zone or intensity minutes, whose formula is not fully published and varies by brand.
- **Cross-device incomparability**: the fact that identical behaviour yields different numbers on different watches, which forbids comparing them.
- **Relative signal**: a number useful for tracking one person's trend rather than for measuring against an external standard.`,
      recallContent: [
        {
          prompt: "A client reports 210 intensity minutes this week and asks if they hit the guideline. What do you say?",
          answer:
            "That the watch's number is not the guideline's quantity: it comes from a proprietary vendor algorithm, not the accelerometry or validated questionnaires the guidelines rest on, so it cannot be read across. Use it as a personal trend, and estimate guideline minutes separately and honestly.",
        },
      ],
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-verghese-contrast",
      title: "7 · The contrast that started the question",
      section: "Section 4 · Learning new movements",
      body: `A cohort study from 2003 contains the finding that motivates this entire section, and the interesting part is not the one that became famous.

**The study.** 469 community-dwelling adults over 75, free of dementia at baseline, followed a median of 5.1 years, during which 124 developed dementia. Participants reported their leisure activities, from which the researchers built two scales: a **cognitive-activity score** covering things like reading, board games, playing musical instruments, and dancing, and a **physical-activity score** covering walking, swimming, cycling, and housework (Verghese et al., 2003).

**The contrast.** Each one-point increase in the **cognitive**-activity score carried a dementia hazard ratio of **0.93 (0.90 to 0.97)**. Each one-point increase in the **physical**-activity score carried a hazard ratio of **1.00**, no association at all. The cognitive association persisted after excluding participants who might already have had preclinical dementia, which addresses the obvious objection that early dementia reduces activity rather than the reverse.

**And notice where dance sits.** It is on the cognitive scale, alongside reading and music, not on the physical one alongside walking and cycling. Dance is movement that requires learning, sequencing, and remembering, which is exactly why it was categorised that way, and it is the cleanest illustration available of the difference this section is about.

**The famous number, with its caveats.** This paper is usually cited for a dramatic dance-specific finding, a roughly 76 percent lower dementia risk. That figure lives in the paper's tables rather than its abstract, rests on approximately 25 frequent dancers, and has a confidence interval whose upper bound very nearly touches one. The export this course was built from flagged it as hypothesis-generating rather than a true effect size, and that is exactly how to hold it: interesting enough to have launched a research programme, not solid enough to quote at a client.

**What the contrast licenses.** A genuine question, which the next three lessons pursue: whether the cognitive demand inside a movement matters separately from the movement itself.

:::reveal State the Verghese contrast precisely. ||| Each one-point increase in the cognitive-activity score carried a dementia hazard ratio of 0.93 (0.90 to 0.97). Each one-point increase in the physical-activity score carried 1.00, no association. The cognitive finding held after excluding possible preclinical dementia.

:::reveal Why is the famous 76 percent dance figure not quoted as an effect size here? ||| Because it lives in the tables rather than the abstract, rests on roughly 25 frequent dancers, and has a confidence interval whose upper bound nearly touches one. It is hypothesis-generating, which is how the research export itself flagged it.

## Vocabulary
- **Cognitive-activity score**: Verghese's scale covering reading, games, music, and dancing, which predicted dementia risk.
- **Physical-activity score**: the parallel scale covering walking, swimming, cycling, and housework, which did not.
- **Preclinical dementia**: the period before diagnosis when symptoms may already reduce activity, the confound the authors addressed by exclusion.
- **Hypothesis-generating**: a finding interesting enough to motivate research and too fragile to quote as an effect size.

## Sources
Verghese, J., Lipton, R. B., Katz, M. J., et al. (2003). Leisure activities and the risk of dementia in the elderly. *New England Journal of Medicine, 348*(25), 2508-2516. https://pubmed.ncbi.nlm.nih.gov/12815136/`,
    },
    {
      slug: "dance-and-cognition",
      title: "8 · Dance and cognition, described honestly",
      section: "Section 4 · Learning new movements",
      body: `Verghese's contrast launched a trial literature. This lesson describes what that literature looks like and, deliberately, does not quote its numbers.

**Why no numbers.** Every effect size from the dance-intervention meta-analyses in this course's research export failed verification: the sources could not be located against primary records. Rather than repeat figures this program cannot stand behind, the lesson describes direction and shape, and says plainly that the precise magnitudes are not established here.

**What the literature looks like.** Multiple randomized trials and pooled analyses have tested dance programmes in older adults, typically one to three sessions a week over months, against controls that are sometimes passive and sometimes another form of exercise. The general direction reported is favourable for global cognition and for some memory and executive-function measures, with the interesting comparisons being those against active controls such as walking, where results are more mixed and any advantage narrower.

**The mechanism that makes it plausible.** Dance combines aerobic load, balance demand, sequence learning, spatial navigation, social interaction, and music, which is a genuinely unusual bundle. The candidate explanation for any advantage is not the dancing but the **combined motor and cognitive load**, which would predict that other complex, social, learning-heavy activities behave similarly.

**And that is the live question, honestly framed.** Nobody has established that dance is special. It may simply be the best-studied instance of complex, socially embedded, cognitively demanding movement. WELL-06's evidence on the social pillar and WELL-04's on the control-group problem both suggest caution about attributing a bundle's effect to its most photogenic component.

**How to coach it.** Recommend it as an enjoyable, plausible, low-risk activity that stacks several evidenced pillars at once: it is movement, it is social, and it requires learning. Do not promise cognitive protection with a number attached, because this program cannot verify one.

:::reveal Why does this lesson describe the dance literature without quoting effect sizes? ||| Because every dance-intervention figure in the research export failed verification against primary sources. The program's rule is not to repeat numbers it cannot stand behind, so the lesson gives direction and shape and says the magnitudes are not established here.

:::reveal What is the candidate explanation for any dance advantage, and what does it predict? ||| Combined motor and cognitive load, plus social and musical elements, rather than dancing specifically. It predicts that other complex, social, learning-heavy activities would behave similarly, which means dance may be the best-studied instance rather than a unique intervention.

## Vocabulary
- **Motor-cognitive load**: simultaneous physical and mental demand, the candidate mechanism behind complex-movement benefits.
- **Active control**: a comparison group doing another real activity such as walking, against which any dance advantage narrows.
- **Bundle attribution**: the error of crediting a multi-component activity's effect to its most visible ingredient.
- **Direction without magnitude**: describing which way evidence points when the effect sizes cannot be verified.`,
    },
    {
      slug: "balance-and-falls",
      title: "9 · The novel-skill training most trainers never program",
      section: "Section 4 · Learning new movements",
      body: `Of everything in this section, the falls evidence is the most actionable, because it concerns a specific trainable skill that almost nobody trains.

**The intervention.** Perturbation-based balance training deliberately destabilises a person, through slips, trips, pushes, or moving platforms, so that they practise the rapid reactive responses that prevent a fall. This is not standing on one leg. It is repeatedly experiencing a loss of balance and learning to recover, which is a genuinely novel motor skill for most adults.

**The evidence.** A meta-analysis pooled **8 randomized trials with 404 participants** in older adults and people with neurological conditions. Participants who completed perturbation-based training were **less likely to report a fall (risk ratio 0.71, 0.52 to 0.96)** and **reported fewer falls overall (rate ratio 0.54, 0.34 to 0.85)** than controls (Mansfield et al., 2015).

**Read that second number.** Roughly half the falls. In a domain where falls are the event that most often ends independent living, an intervention that halves their rate is a serious finding, and it comes from training a reaction rather than building strength.

**The honest limits, which the authors state.** Eight small trials. Heterogeneous designs that prevented subgroup analysis. And a literature where perturbation components are often not identified as such, so relevant studies may have been missed. This course also does not quote the larger reactive-balance meta-analyses circulating in its research export, because those sources could not be located.

**Where the hats divide, and where the referral is.** Delivering perturbation training is a programming and supervision task, and for frail or high-risk clients it belongs with a physiotherapist rather than a trainer, because the intervention deliberately induces falls in a controlled setting. What is squarely coaching is knowing this exists, raising it with clients whose goal is independent aging, and getting them to the professional who delivers it.

:::reveal Give the perturbation-training numbers and what makes them notable. ||| Across 8 RCTs and 404 participants: fallers risk ratio 0.71 (0.52 to 0.96) and falls rate ratio 0.54 (0.34 to 0.85), roughly halving the rate. Notable because it comes from training a reactive skill rather than building strength, in the domain where falls most often end independent living.

:::reveal Who should deliver perturbation training, and what is the coach's role? ||| Delivery is a programming and supervision task, and for frail or higher-risk clients it belongs with a physiotherapist, since the intervention deliberately induces controlled falls. The coach's role is knowing it exists, raising it with clients whose goal is independent aging, and routing them to the professional who delivers it.

## Vocabulary
- **Perturbation-based balance training**: repeated controlled destabilisation to train rapid reactive balance responses.
- **Reactive balance**: the automatic response that recovers a lost balance, as distinct from the static balance most training targets.
- **Faller versus fall rate**: whether a person fell at all versus how many falls occurred, reported separately because interventions can move them differently.
- **Controlled induction**: deliberately provoking the event being trained against, which is why supervision and client selection matter.

## Sources
Mansfield, A., Wong, J. S., Bryce, J., Knorr, S., & Patterson, K. K. (2015). Does perturbation-based balance training prevent falls? Systematic review and meta-analysis of preliminary randomized controlled trials. *Physical Therapy, 95*(5), 700-709. https://pubmed.ncbi.nlm.nih.gov/25524873/`,
    },
    {
      slug: "variety-versus-volume",
      title: "10 · Variety, independent of volume",
      section: "Section 4 · Learning new movements",
      body: `The third novelty question was the one this course's research prompt asked most directly: does doing more KINDS of activity matter beyond doing more activity? For once, there is a clean answer.

**The study.** Two long-running cohorts, the Nurses' Health Study and the Health Professionals Follow-Up Study, covering **70,725 women and 40,742 men** with activity reported biennially over three decades. Across **2,431,318 person-years, 38,847 deaths** occurred (Han et al., 2026).

**Individual activities first.** Most were associated with lower mortality: walking 0.83, running 0.87, tennis or squash 0.85, rowing or callisthenics 0.86, weight training 0.87, jogging 0.89, stair climbing 0.90, bicycling 0.96. **Swimming came in at 1.01**, the one null, which is a useful reminder that these are observational patterns rather than a ranking of exercise quality.

**Then the finding that matters.** The researchers built a **variety score**, counting how many distinct activities a person consistently engaged in. After **adjusting for total physical activity**, participants in the highest variety group had **19 percent lower all-cause mortality** than the lowest, with 13 to 41 percent lower mortality across cardiovascular, cancer, respiratory, and other causes, all with P for trend below 0.001.

**Why the adjustment is the whole point.** Doing five activities usually means doing more activity, and that would explain a variety association trivially. Holding total volume constant and still finding a 19 percent difference is what makes this a finding about variety rather than about volume.

**And the limits, which are real.** Observational, with broad activity categories rather than any measure of motor complexity or novelty. People who do varied sports differ in income, health literacy, and comorbidity in ways adjustment cannot fully capture. And no trial has assigned people to varied versus monotonous activity at matched volume, so nothing here shows that adding a new sport to a fixed routine causes anything.

**The coaching translation.** Variety is a defensible target on its own terms, alongside dose and intensity, and it is easy to sell because it is the opposite of restrictive. The honest framing: people who do several kinds of movement over decades die less, and we cannot yet prove the variety is what does it.

:::reveal What makes the variety finding a finding about variety rather than about volume? ||| The adjustment. Doing more kinds of activity usually means doing more activity, which would explain the association trivially. Holding total physical activity constant and still finding 19 percent lower mortality in the highest variety group is what isolates variety.

:::reveal Which single activity showed no mortality association, and what does that illustrate? ||| Swimming, at a hazard ratio of 1.01. It illustrates that these are observational patterns shaped by who does each activity, not a ranking of exercise quality, and it is a useful caution against reading the per-activity list as a recommendation order.

## Vocabulary
- **Variety score**: a count of the distinct activities a person consistently engages in, the exposure this study isolated.
- **Adjusted for total volume**: the analytical step that separates a variety effect from simply doing more.
- **Person-years**: participants multiplied by years of follow-up, here over 2.4 million, which is what makes the estimates precise.
- **Broad activity categories**: the study's unit of measurement, which captures variety but not motor complexity or genuine novelty.

## Sources
Han, H., Hu, J., Lee, D. H., Zhang, Y., Giovannucci, E., Stampfer, M. J., Hu, F. B., Hu, Y., & Sun, Q. (2026). Physical activity types, variety, and mortality: Results from two prospective cohort studies. *BMJ Medicine, 5*(1), e001513. https://pubmed.ncbi.nlm.nih.gov/41574252/`,
      recallContent: [
        {
          prompt: "A client has run the same route four times a week for eleven years. What does this section suggest, and how strongly?",
          answer:
            "Suggest adding a different kind of activity, ideally one with balance or learning demand, since the variety score predicted 19 percent lower mortality independent of total volume. State it honestly: this is observational with broad categories, and no trial has tested adding variety at matched volume, so it is a defensible target rather than a proven one.",
        },
      ],
    },
    {
      slug: "quiz-novelty",
      title: "11 · Knowledge check: learning new movements",
      section: "Section 4 · Learning new movements",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "In the Verghese cohort, the cognitive-activity and physical-activity scores carried dementia hazard ratios of:",
            options: [
              "0.93 per point for cognitive activity and 1.00 for physical activity",
              "1.00 for cognitive activity and 0.93 per point for physical activity",
              "0.50 for both scores, showing equivalent protection",
              "Neither score reached statistical significance",
            ],
            correctIndex: 0,
            explanation:
              "Each point of cognitive activity carried HR 0.93 (0.90 to 0.97); physical activity carried 1.00, no association. The cognitive finding survived excluding participants with possible preclinical dementia.",
            sourceLessonSlug: "the-verghese-contrast",
          },
          {
            prompt: "Why is dance on Verghese's cognitive-activity scale rather than the physical one?",
            options: [
              "Because it requires learning, sequencing, and remembering, not just movement",
              "Because the researchers considered it too low in intensity to count as exercise",
              "Because participants reported it alongside reading in the same questionnaire item",
              "It was actually on the physical scale, which is why that scale showed an association",
            ],
            correctIndex: 0,
            explanation:
              "Dance is movement with cognitive demand built in, which is exactly why its categorisation illustrates this section's question. The physical scale, containing walking, swimming, cycling, and housework, showed no association.",
            sourceLessonSlug: "the-verghese-contrast",
          },
          {
            prompt: "How should the famous 76 percent dance-dementia figure be treated?",
            options: [
              "As hypothesis-generating: it rests on about 25 dancers with a CI nearly touching one",
              "As a reliable effect size to quote to clients considering dance classes",
              "As definitive proof that dance prevents dementia in community-dwelling older adults",
              "As refuted, since the cognitive-activity score showed no association",
            ],
            correctIndex: 0,
            explanation:
              "It lives in the paper's tables, rests on roughly 25 frequent dancers, and its confidence interval nearly touches 1. The research export itself flagged it as hypothesis-generating.",
            sourceLessonSlug: "the-verghese-contrast",
          },
          {
            prompt: "Why does this course avoid quoting dance-intervention effect sizes?",
            options: [
              "Every figure from that literature failed verification against primary sources",
              "Because dance trials have consistently shown no cognitive benefit",
              "Because effect sizes from trials are less reliable than cohort data",
              "Because recommending dance falls outside a wellness coach's published scope of practice",
            ],
            correctIndex: 0,
            explanation:
              "The sources could not be located, so the lesson gives direction and shape and states plainly that magnitudes are not established here rather than repeating unverifiable numbers.",
            sourceLessonSlug: "dance-and-cognition",
          },
          {
            prompt: "Perturbation-based balance training reduced the RATE of falls by approximately:",
            options: [
              "Half, at a rate ratio of 0.54",
              "Ten percent, at a rate ratio of 0.90",
              "Nothing measurable at all in the pooled analysis of trials",
              "Ninety percent, at a rate ratio of 0.10",
            ],
            correctIndex: 0,
            explanation:
              "Rate ratio 0.54 (0.34 to 0.85) for falls, alongside risk ratio 0.71 (0.52 to 0.96) for being a faller, across 8 RCTs and 404 participants.",
            sourceLessonSlug: "balance-and-falls",
          },
          {
            prompt: "What distinguishes perturbation-based training from ordinary balance work?",
            options: [
              "It deliberately destabilises the person so they practise reactive recovery",
              "It uses heavier external loads than standard balance exercises",
              "It is performed exclusively in water to reduce injury risk",
              "It requires no supervision at all, unlike conventional balance training methods",
            ],
            correctIndex: 0,
            explanation:
              "Slips, trips, pushes, or moving platforms train the rapid reactive response rather than static holding. Because it induces controlled falls, supervision and client selection matter, and higher-risk clients belong with a physiotherapist.",
            sourceLessonSlug: "balance-and-falls",
          },
          {
            prompt: "The activity-variety finding showed 19 percent lower all-cause mortality in the highest variety group:",
            options: [
              "After adjustment for total physical activity, which is what isolates variety from volume",
              "Before any adjustment, with the effect disappearing once volume was controlled",
              "Only among participants who also met guideline activity levels",
              "Only within the male cohort, with no comparable association observed in women",
            ],
            correctIndex: 0,
            explanation:
              "Doing more kinds usually means doing more, so the adjustment is the whole point. The finding held across 2.4 million person-years and 38,847 deaths, with 13 to 41 percent lower cause-specific mortality.",
            sourceLessonSlug: "variety-versus-volume",
          },
          {
            prompt: "Swimming's hazard ratio of 1.01 in that cohort best illustrates that:",
            options: [
              "These are observational patterns shaped by who does each activity, not a quality ranking",
              "Swimming is actively harmful and should be discouraged in all older clients",
              "Water-based exercise provides no cardiovascular benefit of any kind",
              "The study's methods were flawed and its findings unusable",
            ],
            correctIndex: 0,
            explanation:
              "Most activities showed inverse associations; swimming did not. That is a caution against reading the per-activity list as a recommendation order rather than a verdict on swimming.",
            sourceLessonSlug: "variety-versus-volume",
          },
          {
            prompt: "What has NOT been established about movement variety?",
            options: [
              "That adding variety at matched total volume causes lower mortality",
              "That people doing several activity types have lower mortality",
              "That the association survives adjustment for total physical activity",
              "That the association appears across multiple causes of death",
            ],
            correctIndex: 0,
            explanation:
              "No trial has assigned people to varied versus monotonous activity at matched volume. The observational association, its survival of adjustment, and its breadth across causes are all established.",
            sourceLessonSlug: "variety-versus-volume",
          },
        ],
      },
    },

    // ── Section 5 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "coaching-all-three",
      title: "12 · Coaching dose, intensity, and novelty together",
      section: "Section 5 · Coaching it",
      body: `Three questions, one client, one week. Here is how they fit without becoming three programmes.

**Audit before adding.** For a client already moving, ask the three questions separately. How much, roughly, in steps or minutes. How hard, meaning does anything in a normal week actually get them breathing hard. And how new, meaning when did they last learn a movement rather than repeat one. Most people are strong on one, adequate on a second, and blank on the third, and the blank is usually the cheapest thing to fix.

**Add intensity through opportunities, not sessions.** The VILPA evidence points at bursts already available in a client's day: stairs, hills, carrying, hurrying. Coaching the decision to take those at intensity costs no time and needs no schedule, which is why it is often the first thing to add for someone who has refused structured exercise for years.

**Add novelty through variety, cheaply.** The verified finding is about doing several kinds of activity rather than about any specific novel skill. So the practical version is one additional activity type, chosen by the client, ideally with balance or learning demand. Chosen by the client matters: WELL-02's habit evidence found self-selected behaviours build more habit strength than assigned ones.

**Route the falls work rather than delivering it.** Perturbation training is the highest-value item in this course for anyone whose goal is independent aging, and it is also the one that needs a qualified deliverer. Knowing it exists and referring well is the coaching contribution, and it is a real one.

**And keep the honesty proportionate.** Of the four findings in this course, one is an unusually strong observational signal in non-exercisers, one is a small trial meta-analysis with real limits, one is a large cohort variety finding that no trial has tested, and one is a fifty-year-old contrast that launched a literature this program could not verify. Coach all four. Describe each at its own strength.

:::reveal Give the three-question audit and say which answer is usually blank. ||| How much, roughly in steps or minutes; how hard, meaning whether anything makes them breathe hard in a normal week; and how new, meaning when they last learned rather than repeated a movement. Novelty is usually the blank one, and usually the cheapest to fix.

:::reveal Why should the added activity type be chosen by the client? ||| Because the habit evidence from WELL-02 found self-selected behaviours build more habit strength than assigned ones. The variety finding is about doing several kinds, not about any particular kind, so there is no evidence-based reason to override the client's choice.

## Vocabulary
- **The three-question audit**: assessing dose, intensity, and novelty separately before adding anything.
- **Opportunity intensity**: adding vigorous bursts to activities already in the day rather than scheduling sessions.
- **Client-selected variety**: letting the client pick the additional activity type, which the habit evidence favours.
- **Proportionate description**: presenting each finding at the strength its evidence actually has.`,
    },
    {
      slug: "final-movement-longevity",
      title: "13 · Final: movement, intensity, and learning",
      section: "Section 5 · Coaching it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "This course exists because WELL-02 answered which question, leaving two open?",
            options: [
              "Dose, leaving intensity and novelty",
              "Intensity, leaving dose and novelty",
              "Novelty, leaving dose and intensity",
              "None; it repeats WELL-02 with newer sources",
            ],
            correctIndex: 0,
            explanation:
              "WELL-02 settled how much: steps, sitting, everyday movement, and adherence. How hard and how new are separate questions with different answers, which is what this course adds.",
            sourceLessonSlug: "three-questions",
          },
          {
            prompt: "VILPA refers to:",
            options: [
              "Brief vigorous bursts embedded in daily tasks rather than performed as exercise",
              "A structured high-intensity interval protocol performed three times weekly",
              "Any physical activity performed at over 85 percent of maximum heart rate",
              "Vigorous activity undertaken specifically in leisure time",
            ],
            correctIndex: 0,
            explanation:
              "Vigorous intermittent lifestyle physical activity: one-to-two-minute bursts inside ordinary life, such as hurrying upstairs, measured by wrist accelerometry in non-exercisers.",
            sourceLessonSlug: "vilpa",
          },
          {
            prompt: "At the median VILPA FREQUENCY of three bouts per day, cardiovascular mortality was:",
            options: [
              "48 to 49 percent lower than in participants doing no VILPA",
              "About 5 percent lower, which is a marginal difference",
              "Unchanged relative to participants doing no VILPA",
              "Higher, reflecting cardiovascular strain from vigorous bursts",
            ],
            correctIndex: 0,
            explanation:
              "Three bouts per day: 48 to 49 percent lower cardiovascular mortality and 38 to 40 percent lower all-cause and cancer mortality. The 4.4-minute duration measure gave 32 to 34 and 26 to 30 percent.",
            sourceLessonSlug: "vilpa",
          },
          {
            prompt: "The VILPA study licenses claims about which outcome only?",
            options: [
              "Mortality, since that is what it measured",
              "All aspects of physical function and health",
              "Strength and muscle mass in older adults",
              "Metabolic health and insulin sensitivity",
            ],
            correctIndex: 0,
            explanation:
              "All-cause, cancer, and cardiovascular mortality. It says nothing about strength, function, mood, metabolic health, or bone density, which is why VILPA is coached as an addition rather than a substitution.",
            sourceLessonSlug: "what-vilpa-licenses",
          },
          {
            prompt: "A client's weekly wearable intensity minutes cannot be compared against guideline minutes because:",
            options: [
              "They come from proprietary vendor algorithms, not the accelerometry or questionnaires the guidelines rest on",
              "Wearables systematically undercount activity by a known and easily correctable factor",
              "The guidelines are expressed in steps rather than in minutes",
              "Intensity minutes measure only vigorous activity and exclude moderate",
            ],
            correctIndex: 0,
            explanation:
              "Vendor formulas are unpublished, differ between brands, and change with firmware. The metric is useful as a personal trend and not as a measurement against an external standard.",
            sourceLessonSlug: "wearable-intensity-metrics",
          },
          {
            prompt: "In the Verghese cohort, the physical-activity score's dementia hazard ratio was:",
            options: [
              "1.00, showing no association",
              "0.93, exactly matching the cognitive-activity score result",
              "0.24, the strongest association measured",
              "1.45, indicating increased risk",
            ],
            correctIndex: 0,
            explanation:
              "No association, against 0.93 per point for the cognitive-activity score. That contrast, not the famous dance figure, is the finding that motivates the novelty question.",
            sourceLessonSlug: "the-verghese-contrast",
          },
          {
            prompt: "The candidate explanation for dance's cognitive benefits is:",
            options: [
              "Combined motor and cognitive load, plus social and musical elements, rather than dance specifically",
              "A dance-specific neurological pathway not activated by other activities",
              "The aerobic component alone, which walking would match exactly",
              "Nothing; the trial literature shows no direction of benefit",
            ],
            correctIndex: 0,
            explanation:
              "Which predicts that other complex, social, learning-heavy activities behave similarly. Dance may be the best-studied instance rather than a unique intervention.",
            sourceLessonSlug: "dance-and-cognition",
          },
          {
            prompt: "Perturbation-based balance training produced which pooled results?",
            options: [
              "Fallers risk ratio 0.71 and falls rate ratio 0.54 across 8 RCTs and 404 participants",
              "No statistically significant effect on either the number of fallers or the fall rate",
              "A 90 percent reduction in falls across 40 large trials",
              "Improvements in strength but no change in falls",
            ],
            correctIndex: 0,
            explanation:
              "Roughly a quarter fewer fallers and roughly half the fall rate, from training reactive recovery rather than building strength, in a small and heterogeneous literature the authors flag as preliminary.",
            sourceLessonSlug: "balance-and-falls",
          },
          {
            prompt: "The coach's role regarding perturbation training is to:",
            options: [
              "Know it exists, raise it with independence-focused clients, and refer to a qualified deliverer",
              "Deliver it directly using controlled pushes during coaching sessions",
              "Discourage it, since inducing falls carries unacceptable risk",
              "Wait until a client has already fallen before mentioning it",
            ],
            correctIndex: 0,
            explanation:
              "Delivery is a programming and supervision task, and higher-risk clients belong with a physiotherapist because the intervention deliberately induces controlled falls. Knowing and referring well is a real contribution.",
            sourceLessonSlug: "balance-and-falls",
          },
          {
            prompt: "The activity-variety study's key analytical step was:",
            options: [
              "Adjusting for total physical activity, isolating variety from volume",
              "Restricting analysis to participants meeting guideline activity levels",
              "Randomising participants to varied or monotonous activity programmes",
              "Measuring motor complexity directly for each activity type",
            ],
            correctIndex: 0,
            explanation:
              "Doing more kinds usually means doing more, so adjustment is what makes it a variety finding: 19 percent lower all-cause mortality in the highest variety group after controlling for total activity.",
            sourceLessonSlug: "variety-versus-volume",
          },
          {
            prompt: "The three-question audit this course prescribes asks about:",
            options: [
              "How much, how hard, and how new",
              "How often, how long, and how heavy the training load is",
              "What equipment, what schedule, and what goal",
              "Which sport, which coach, and which season",
            ],
            correctIndex: 0,
            explanation:
              "Dose, intensity, and novelty assessed separately. Most clients are strong on one, adequate on a second, and blank on the third, and novelty is usually the blank.",
            sourceLessonSlug: "coaching-all-three",
          },
          {
            prompt: "Why should the client choose the additional activity type themselves?",
            options: [
              "Self-selected behaviours build more habit strength, and the evidence is about variety rather than any specific kind",
              "Because coaches may not recommend specific activities under any scope",
              "Because client-chosen activities have larger measured mortality benefits",
              "Because assigned activities are prohibited in behaviour-change practice",
            ],
            correctIndex: 0,
            explanation:
              "WELL-02's habit evidence favours self-selection, and the variety finding concerns doing several kinds rather than doing particular ones, so there is no evidence-based reason to override the choice.",
            sourceLessonSlug: "coaching-all-three",
          },
          {
            prompt: "Which statement about this course's evidence base is accurate?",
            options: [
              "Roughly half the export's effect sizes failed verification and were excluded",
              "Every claim in the research export was verified against a primary source",
              "All findings here come from randomized controlled trials",
              "No findings here reached statistical significance",
            ],
            correctIndex: 0,
            explanation:
              "An entire intensity dose-response meta-analysis, every dance-trial figure, and several balance meta-analyses could not be located and were excluded. What remains is smaller and sturdier, and the lessons say where numbers are missing and why.",
            sourceLessonSlug: "three-questions",
          },
          {
            prompt: "The four surviving findings in this course should be described:",
            options: [
              "Each at its own strength, since they range from a strong cohort signal to a fragile fifty-year-old contrast",
              "As uniformly strong, since all were verified against primary sources",
              "As uniformly weak, given that none of them comes from a randomized controlled trial",
              "Without reference to their evidence quality, which clients find confusing",
            ],
            correctIndex: 0,
            explanation:
              "One unusually strong observational signal in non-exercisers, one small trial meta-analysis with real limits, one large cohort variety finding no trial has tested, and one fragile contrast that launched a literature. Coach all four, describe each accurately.",
            sourceLessonSlug: "coaching-all-three",
          },
        ],
      },
    },
  ],
};
