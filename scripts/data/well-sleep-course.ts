import type { AuthoredCourse } from "./authored-course";

// WELL-05 · Sleep (plans/67). A content pillar like WELL-04: no certification BAM holds teaches
// sleep science, and this is the pillar where the effective treatment (CBT-I) is explicitly
// OUTSIDE coaching scope while the thing coaches can deliver (sleep hygiene) is the one the
// AASM guideline recommends against as a standalone. That tension is the course's spine.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 05-sleep/05-sleep.md §3-4). Notable verification outcomes:
// - Gemini attributed an orthosomnia "screening algorithm" with score cut-offs to Baron 2017,
//   which contains no such thing. Orthosomnia is taught as the described phenomenon only.
// - The caffeine cut-off hours (8.8 h etc.) could not be sourced; the verified Chang effects
//   are taught instead, with no invented precision.
// - Trauer's total-sleep-time result was NOT significant: CBT-I consolidates sleep rather than
//   lengthening it, which is a better teaching point than the version usually repeated.
// - Long sleep is taught as a marker whose causality the meta-analysis authors leave open.
export const WELL_SLEEP_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 05: Sleep",
  description:
    "The pillar with the sharpest scope line in the program: the treatment that works for chronic insomnia is explicitly clinician territory, and the thing coaches are most often asked to deliver is the one sleep medicine recommends against using alone. What sleep is, what the duration evidence actually shows, which levers have data behind them, what consumer trackers can and cannot see, and how to coach someone whose sleep app has become the problem.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-sleep-pillar",
      title: "1 · The pillar with the sharpest boundary",
      section: "Section 1 · What sleep is",
      body: `Every pillar in this program has a scope line. Sleep has the sharpest one, and knowing exactly where it falls is most of what makes a coach useful here rather than dangerous.

**The shape of the problem.** Chronic insomnia has a first-line treatment that works: cognitive behavioral therapy for insomnia, which sleep medicine designates as the primary intervention ahead of medication. It is a structured psychotherapy, and delivering it requires clinical licensure. Meanwhile the intervention coaches are constantly asked for, sleep hygiene education, is the one the American Academy of Sleep Medicine specifically recommends **against** using as a standalone therapy for chronic insomnia (Edinger et al., 2021). Sit with that for a second: the effective thing is not yours, and the available thing is not recommended alone for the clinical population.

**Why that is not a reason to skip the pillar.** Most people with bad sleep do not have chronic insomnia disorder. They have late caffeine, an unstable schedule, a phone in a dark room, a shift pattern nobody planned around, and a belief that they are simply a bad sleeper. Those are behavior and environment, which is your entire jurisdiction. The skill this course builds is telling the two populations apart, quickly and without diagnosing.

**What you are actually offering.** Sleep-supportive behavior change in people whose sleep is disrupted rather than disordered. Education from published guidelines. Reinforcement of a clinician's plan when one exists. And, more often than you would expect, the referral that gets someone to the treatment that will actually work, which is a genuine contribution and not a consolation prize.

**A note on your own data.** You will read your own tracker through this course, and lesson 12 will show you what it can and cannot see. Lesson 13 covers what happens when the tracking itself becomes the problem, which is common enough in the quantified-self population that sleep medicine has a name for it.

:::reveal State the central tension of this pillar in two sentences. ||| The treatment that works for chronic insomnia, CBT-I, is a structured psychotherapy requiring clinical licensure, so it is not yours to deliver. The intervention coaches are usually asked for, sleep hygiene alone, is the one the AASM guideline recommends against as a standalone therapy for chronic insomnia.

:::reveal If both of those are true, what is a sleep coach actually for? ||| For the much larger population whose sleep is disrupted rather than disordered: late caffeine, unstable schedules, light exposure, unplanned shift patterns, and beliefs about being a bad sleeper. That is behavior and environment, plus knowing when to refer the person who needs the treatment you cannot give.

## Vocabulary
- **Chronic insomnia disorder**: a clinical diagnosis involving persistent difficulty falling or staying asleep with daytime consequences; the population CBT-I is designed for.
- **Disrupted versus disordered sleep**: the distinction this course teaches you to make, because one is a coaching problem and the other is a referral.
- **CBT-I**: cognitive behavioral therapy for insomnia, the guideline-designated first-line treatment and a structured psychotherapy.
- **Sleep hygiene**: general education about sleep-supportive habits; useful context, and specifically not recommended alone as a treatment for chronic insomnia.`,
    },
    {
      slug: "architecture-and-processes",
      title: "2 · How sleep is built",
      section: "Section 1 · What sleep is",
      body: `You cannot coach what you cannot picture, so here is the architecture, at the level of detail a coach actually uses.

**Two processes decide when you sleep.** Process S is homeostatic pressure: the longer you are awake, the more sleep pressure builds, and sleep discharges it. Process C is the circadian rhythm, an internal roughly-24-hour clock run by the suprachiasmatic nucleus in the hypothalamus, which sets when your body expects to be asleep regardless of how tired you are. Good sleep happens when the two align. Most sleep complaints in healthy people are an alignment failure, not a pressure failure, which is why "just go to bed earlier" so often does nothing.

**Sleep is cyclical, not a block.** Sleep proceeds in cycles of roughly 90 to 120 minutes through non-REM stages N1 (the transition), N2 (the bulk of the night), and N3 (slow-wave, the deep restorative stage), then into REM. The proportions vary between people and nights, with N2 typically taking the largest share and N3 and REM each a smaller one. What matters more than the percentages is the **distribution**: slow-wave sleep dominates the first third of the night and REM lengthens across the final third.

**Which explains two things clients ask about.** Cutting sleep short at the end of the night preferentially costs REM, not deep sleep, because REM is back-loaded. And an early bedtime followed by a 3 a.m. waking still delivers most of the slow-wave sleep, which is why that pattern can feel less catastrophic than it sounds. Neither observation is a licence to shorten sleep; both help a client understand their own night.

**Melatonin, correctly understood.** Melatonin is a timing signal, not a sedative. It rises in dim light a couple of hours before habitual sleep onset and tells the body that biological night has begun. Light, especially in the evening, suppresses it and pushes the clock later. That is the mechanism behind everything in lesson 8.

:::reveal Name the two processes governing sleep and say which one 'go to bed earlier' fails to address. ||| Process S, homeostatic sleep pressure that builds with time awake, and Process C, the circadian rhythm set by the suprachiasmatic nucleus. Going to bed earlier adds nothing if the problem is circadian alignment: the body is not expecting sleep yet, whatever the pressure.

:::reveal Why does cutting the last ninety minutes of sleep cost REM rather than deep sleep? ||| Because the stages are unevenly distributed across the night: slow-wave sleep dominates the first third and REM lengthens through the final third. Trimming the end of the night trims mostly REM.

## Vocabulary
- **Process S**: homeostatic sleep pressure, accumulating with time awake and discharged by sleep.
- **Process C**: the circadian process, an internal clock setting when the body expects sleep regardless of accumulated pressure.
- **Suprachiasmatic nucleus (SCN)**: the hypothalamic master clock that runs Process C and is entrained primarily by light.
- **Slow-wave sleep (N3)**: the deepest non-REM stage, concentrated in the first third of the night.
- **REM sleep**: the stage of vivid dreaming and muscle atonia, lengthening across the final third of the night.
- **Melatonin**: a hormone signalling biological night, suppressed by light; a timing signal rather than a sedative.`,
    },
    {
      slug: "how-much-sleep",
      title: "3 · How much sleep, and what the numbers rest on",
      section: "Section 1 · What sleep is",
      body: `The duration recommendations are among the most-quoted numbers in health, and the evidence under them is more interesting than the headline.

**What the bodies recommend.** The American Academy of Sleep Medicine and the Sleep Research Society, using a modified RAND appropriateness method, concluded that **adults should sleep 7 or more hours per night on a regular basis to promote optimal health** (Watson et al., 2015). The National Sleep Foundation, working through a separate expert panel, published age-banded ranges: **7 to 9 hours for young adults and adults, 7 to 8 hours for older adults**, with 8 to 10 for teenagers and 9 to 11 for school-age children (Hirshkowitz et al., 2015).

**The short-sleep evidence.** Pooling 153 studies covering 5,172,710 participants, short sleep was associated with higher mortality (risk ratio 1.12), and with incident diabetes (1.37), obesity (1.38), coronary heart disease (1.26), hypertension (1.17), and cardiovascular disease (1.16). The meta-regression found a linear mortality association **below six hours**, with no clean dose-response for the other outcomes (Itani et al., 2017).

**The long-sleep evidence, and the trap in it.** Pooling 137 cohorts and 5,134,036 participants, long sleep was associated with mortality at a risk ratio of **1.39**, higher than the short-sleep figure, plus stroke (1.46), diabetes (1.26), and cardiovascular disease (1.25), though not hypertension (Jike et al., 2018). Here is the trap: the same authors close by saying future work "should address whether the relationship between long sleep and health outcomes is causal and modifiable." Long sleep is a **marker**, and reverse causation is entirely live, since illness, depression, and undiagnosed sleep disorders all lengthen sleep. Nobody has shown that a healthy nine-hour sleeper improves anything by setting an alarm.

**The coaching translation.** Aim the conversation at the 7-to-9 band, treat under six hours as the region where the mortality signal is clearest, and do **not** tell a well-functioning long sleeper to sleep less. If a client's sleep need has recently grown, that is a referral question, not a hygiene question.

:::reveal Give the short-sleep and long-sleep mortality risk ratios, and the reason they are not read the same way. ||| Short sleep 1.12, long sleep 1.39. They are not read the same way because the long-sleep authors explicitly leave causality open: illness, depression, and undiagnosed sleep disorders lengthen sleep, so long sleep is plausibly a marker of a problem rather than its cause.

:::reveal A healthy client sleeps nine hours and feels great. What does this lesson say to do? ||| Leave it alone. The long-sleep association has not been shown to be causal or modifiable, and no evidence supports shortening a well-functioning sleeper's night. A recent INCREASE in sleep need is a different matter and goes to a clinician.

## Vocabulary
- **Consensus statement**: a recommendation produced by structured expert agreement over evidence, as with the AASM and Sleep Research Society's 7-hour statement.
- **Risk ratio (RR)**: the risk in the exposed group divided by risk in the reference group; 1.39 means 39 percent higher.
- **Reverse causation**: when the outcome causes the exposure rather than the other way round, the leading explanation for the long-sleep association.
- **Marker versus cause**: a variable that travels with a problem versus one that creates it; long sleep is established as the first and not the second.

## Sources
Hirshkowitz, M., Whiton, K., Albert, S. M., et al. (2015). National Sleep Foundation's updated sleep duration recommendations: Final report. *Sleep Health, 1*(4), 233-243. https://pubmed.ncbi.nlm.nih.gov/29073398/

Itani, O., Jike, M., Watanabe, N., & Kaneita, Y. (2017). Short sleep duration and health outcomes: A systematic review, meta-analysis, and meta-regression. *Sleep Medicine, 32*, 246-256. https://pubmed.ncbi.nlm.nih.gov/27743803/

Jike, M., Itani, O., Watanabe, N., Buysse, D. J., & Kaneita, Y. (2018). Long sleep duration and health outcomes: A systematic review, meta-analysis and meta-regression. *Sleep Medicine Reviews, 39*, 25-36. https://pubmed.ncbi.nlm.nih.gov/28890167/

Watson, N. F., Badr, M. S., Belenky, G., et al. (2015). Recommended amount of sleep for a healthy adult: A joint consensus statement of the American Academy of Sleep Medicine and Sleep Research Society. *Sleep, 38*(6), 843-844. https://pubmed.ncbi.nlm.nih.gov/26039963/`,
      recallContent: [
        {
          prompt: "Why is the long-sleep mortality risk ratio higher than the short-sleep one, and why does that NOT mean long sleep is more dangerous?",
          answer:
            "Long sleep RR is 1.39 versus 1.12 for short sleep, but the long-sleep authors explicitly leave causality open. Illness, depression, and undiagnosed sleep disorders all lengthen sleep, so the association plausibly runs backwards: sickness causes the long sleep rather than long sleep causing the death.",
        },
      ],
    },

    {
      slug: "quiz-what-sleep-is",
      title: "4 · Knowledge check: what sleep is",
      section: "Section 1 · What sleep is",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "State this pillar's central tension.",
            options: [
              "The treatment that works is not yours to deliver; the thing you can deliver is recommended against alone",
              "The treatment that works is unavailable to most clients; the alternatives have no evidence behind them",
              "The evidence base is strong, but clients rarely comply with the behaviors it recommends",
              "Sleep problems are common, but distinguishing their causes requires diagnostic tools a coach lacks",
            ],
            correctIndex: 0,
            explanation:
              "CBT-I requires clinical licensure. Sleep hygiene alone is the AASM's only recommendation AGAINST anything, for chronic insomnia. Both halves are true at once.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "Why is that tension not a reason to skip the pillar?",
            options: [
              "Most people with bad sleep do not have chronic insomnia disorder",
              "Sleep hygiene works well despite the guideline, which addresses only severe cases",
              "Coaches can deliver CBT-I components individually without clinical licensure",
              "The guideline applies only in the United States, so scope varies by jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "Late caffeine, unstable schedules, a phone in a dark room, an unplanned shift pattern, and a belief about being a bad sleeper are behavior and environment, which is the coach's jurisdiction.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What is the distinction this course teaches you to make?",
            options: [
              "Disrupted versus disordered sleep",
              "Acute versus chronic sleep complaints, measured by duration",
              "Primary versus secondary insomnia, based on whether another condition is present",
              "Subjective versus objective sleep quality, measured against tracker data",
            ],
            correctIndex: 0,
            explanation:
              "One is a coaching problem and the other is a referral. The whole skill of this pillar is telling them apart quickly and without diagnosing.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What does the course say the referral is, on this pillar?",
            options: [
              "A genuine contribution, not a consolation prize",
              "The last resort, once behavioral approaches have been given a fair trial",
              "A formality, since most clients will not follow through on it",
              "The point at which the coaching relationship should be concluded",
            ],
            correctIndex: 0,
            explanation:
              "Getting someone to the treatment that will actually work is real value. It is also, on this pillar, often the highest-value thing a coach does.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What is Process S?",
            options: [
              "Homeostatic sleep pressure, building with time awake and discharged by sleep",
              "The circadian process setting when the body expects sleep, regardless of tiredness",
              "The progression through sleep stages across a single night's cycles",
              "The rate at which sleep debt accumulates across consecutive short nights",
            ],
            correctIndex: 0,
            explanation:
              "Pressure, not timing. Process C is the clock, and confusing the two is what makes 'just go to bed earlier' fail so often.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What runs Process C, and where is it?",
            options: [
              "The suprachiasmatic nucleus, in the hypothalamus",
              "The pineal gland, which releases melatonin directly into circulation",
              "The reticular activating system, in the brainstem",
              "The pituitary gland, which coordinates the hormonal timing signals",
            ],
            correctIndex: 0,
            explanation:
              "The SCN is the master clock, entrained primarily by light. The pineal gland produces melatonin but does not set the timing.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Why does 'just go to bed earlier' so often do nothing?",
            options: [
              "Most sleep complaints in healthy people are an alignment failure, not a pressure failure",
              "Most clients lack the discipline to maintain an earlier bedtime consistently",
              "Earlier bedtimes reduce sleep pressure, which delays sleep onset further",
              "Bedtime has less effect on total sleep than wake time does in most people",
            ],
            correctIndex: 0,
            explanation:
              "If the body is not expecting sleep yet, adding pressure does not help. That is the practical payoff of separating Process S from Process C.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "How long is a sleep cycle, and what stages does it pass through?",
            options: [
              "Roughly 90 to 120 minutes, through N1, N2, and N3, then into REM",
              "Roughly 60 minutes, through N1 and N2, then alternating N3 and REM",
              "Roughly 90 minutes, through REM first and then progressively deeper non-REM stages",
              "Roughly 120 minutes, with the stages occurring in a different order each cycle",
            ],
            correctIndex: 0,
            explanation:
              "N1 the transition, N2 the bulk, N3 slow-wave, then REM. The order is consistent; the proportions vary between people and nights.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What matters more than the stage percentages?",
            options: [
              "The distribution: slow-wave dominates the first third, REM lengthens across the final third",
              "The total number of cycles completed, which determines overall restorative value",
              "The consistency of the proportions from one night to the next in the same person",
              "The time spent in N2, which occupies the largest share of the night",
            ],
            correctIndex: 0,
            explanation:
              "Distribution across the night. It is what explains both of the client questions the lesson goes on to answer.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Why does cutting the last ninety minutes of sleep cost REM rather than deep sleep?",
            options: [
              "REM is back-loaded, lengthening through the final third of the night",
              "REM requires a longer continuous period to initiate than slow-wave sleep does",
              "Deep sleep is prioritized by the body when total sleep time is reduced",
              "REM is more easily disrupted by the alarm than slow-wave sleep is",
            ],
            correctIndex: 0,
            explanation:
              "Simple distribution. The mirror observation also follows: an early bedtime with a 3 a.m. waking still delivers most of the slow-wave sleep.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What is melatonin, correctly understood?",
            options: [
              "A timing signal, not a sedative",
              "A sedative hormone that induces sleep onset when concentrations rise",
              "A hormone that regulates sleep depth rather than sleep timing",
              "A marker of accumulated sleep pressure across the waking day",
            ],
            correctIndex: 0,
            explanation:
              "It rises in dim light a couple of hours before habitual sleep onset and tells the body biological night has begun. Light suppresses it and pushes the clock later.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What did the AASM and Sleep Research Society conclude about adult sleep duration?",
            options: [
              "Adults should sleep 7 or more hours per night on a regular basis to promote optimal health",
              "Adults should sleep between 7 and 9 hours per night, with 8 hours the optimal target",
              "Adults should sleep at least 8 hours per night, with less than 7 carrying measurable risk",
              "Adults should sleep 7 to 8 hours, with older adults requiring an additional hour",
            ],
            correctIndex: 0,
            explanation:
              "Seven or more, from a modified RAND appropriateness method. The 7-to-9 band is the National Sleep Foundation's separate age-banded recommendation.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What are the National Sleep Foundation's age-banded ranges?",
            options: [
              "7 to 9 hours for young adults and adults, 7 to 8 for older adults",
              "7 to 9 hours for all adults regardless of age, with no upper-age adjustment",
              "8 to 10 hours for young adults, 7 to 9 for adults, 7 to 8 for older adults",
              "7 to 8 hours for young adults and 7 to 9 for older adults, reversing with age",
            ],
            correctIndex: 0,
            explanation:
              "Plus 8 to 10 for teenagers and 9 to 11 for school-age children. Older adults' range narrows at the top, not the bottom.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "How large was the short-sleep meta-analysis, and what was the mortality risk ratio?",
            options: [
              "153 studies, 5,172,710 participants; RR 1.12",
              "137 cohorts, 5,134,036 participants; RR 1.12",
              "153 studies, 5,172,710 participants; RR 1.39",
              "21 studies, 173,010 participants; RR 1.17",
            ],
            correctIndex: 0,
            explanation:
              "153 studies and RR 1.12. The 137-cohort figure is the long-sleep analysis, and 21 studies with 173,010 participants is the shift-work meta-analysis.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What did short sleep associate with beyond mortality?",
            options: [
              "Diabetes 1.37, obesity 1.38, coronary heart disease 1.26, hypertension 1.17, cardiovascular disease 1.16",
              "Stroke 1.46, diabetes 1.26, and cardiovascular disease 1.25, though not hypertension",
              "Obesity and diabetes only, with cardiovascular outcomes showing no significant association",
              "Diabetes 1.37 and obesity 1.38, with a clean dose-response gradient for each outcome",
            ],
            correctIndex: 0,
            explanation:
              "Five outcomes. The stroke-1.46 set belongs to the LONG-sleep analysis, and there was no clean dose-response for outcomes other than mortality.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Where did the short-sleep meta-regression find a linear mortality association?",
            options: [
              "Below six hours",
              "Below seven hours, matching the consensus recommendation threshold",
              "Across the whole range studied, with no inflection point identified",
              "Below five hours only, with no association between five and seven",
            ],
            correctIndex: 0,
            explanation:
              "Below six hours is where the mortality signal is clearest, which is why the course treats that as the region to name rather than the 7-hour recommendation.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What was the long-sleep mortality risk ratio, and how does it compare with short sleep?",
            options: [
              "1.39, higher than short sleep's 1.12",
              "1.12, lower than short sleep's 1.39",
              "1.26, roughly equal to short sleep's 1.25",
              "1.46, more than double short sleep's figure",
            ],
            correctIndex: 0,
            explanation:
              "Higher, which is exactly why the trap in it matters. The 1.46 figure is the long-sleep stroke association, a different outcome.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What did long sleep associate with, and what did it NOT?",
            options: [
              "Stroke 1.46, diabetes 1.26, cardiovascular disease 1.25; not hypertension",
              "Stroke 1.46 and hypertension 1.17; not diabetes or cardiovascular disease",
              "Obesity 1.38 and coronary heart disease 1.26; not stroke",
              "All four outcomes measured, at magnitudes exceeding the short-sleep associations",
            ],
            correctIndex: 0,
            explanation:
              "Three associations and one null. Naming the null is part of quoting the analysis rather than summarizing it.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What did the long-sleep authors themselves say?",
            options: [
              "Future work should address whether the relationship is causal and modifiable",
              "The association is causal and should inform public-health sleep recommendations",
              "The association is entirely explained by reverse causation from existing illness",
              "The finding requires replication before it can be considered established",
            ],
            correctIndex: 0,
            explanation:
              "They leave causality open. That is why long sleep is taught as a marker, and why nobody has shown that a healthy nine-hour sleeper improves anything by setting an alarm.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is 'reverse causation' in the long-sleep context?",
            options: [
              "Illness, depression, and undiagnosed sleep disorders lengthen sleep, rather than long sleep causing harm",
              "Long sleep causes daytime inactivity, which then produces the health outcomes observed",
              "The measurement of sleep duration is affected by the health outcome being studied",
              "Short and long sleep share a common cause that produces both patterns",
            ],
            correctIndex: 0,
            explanation:
              "The outcome causing the exposure. It is entirely live here, which is what separates a marker from a cause.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "A healthy client sleeps nine hours and feels great. What does the lesson say?",
            options: [
              "Leave it alone",
              "Gradually reduce toward the 7-to-9 band, since nine sits at the upper limit",
              "Investigate for an undiagnosed sleep disorder, since long sleep is a marker",
              "Recommend a sleep study, since nine hours exceeds the consensus recommendation",
            ],
            correctIndex: 0,
            explanation:
              "No evidence supports shortening a well-functioning sleeper's night. A recent INCREASE in sleep need is a different matter and goes to a clinician.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is a 'consensus statement'?",
            options: [
              "A recommendation produced by structured expert agreement over evidence",
              "A recommendation issued jointly by two or more professional organizations",
              "A summary of the evidence that all reviewed studies agreed upon",
              "A guideline graded using the GRADE methodology for recommendation strength",
            ],
            correctIndex: 0,
            explanation:
              "Structured expert agreement, as with the modified RAND appropriateness method behind the 7-hour statement. GRADE is what the AASM behavioral-treatment guideline used, which is a different document.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is a 'zeitgeber'?",
            options: [
              "A time-giver: an external cue that entrains the circadian system",
              "The internal oscillator that generates the roughly 24-hour rhythm",
              "The point in the circadian cycle at which melatonin secretion begins",
              "The delay between a light exposure and the resulting clock shift",
            ],
            correctIndex: 0,
            explanation:
              "External cue. Light is the dominant one, with meals, activity, and temperature acting as weaker signals.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What is 'sleep hygiene' in this course's vocabulary?",
            options: [
              "General education about sleep-supportive habits; not recommended alone as treatment for chronic insomnia",
              "The set of behavioral techniques that constitute the core of CBT-I delivery",
              "The environmental component of sleep coaching, distinct from behavioral change",
              "A discredited approach that the AASM guideline recommends against in all contexts",
            ],
            correctIndex: 0,
            explanation:
              "Both halves. It is useful context for healthy clients, and specifically not a treatment for a diagnosed disorder, which is a narrower claim than 'discredited'.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "A client's sleep need has recently grown by two hours. What is this?",
            options: [
              "A referral question, not a hygiene question",
              "A normal seasonal variation requiring no action",
              "A sign of accumulated sleep debt, addressed by extending sleep opportunity",
              "An indication that their previous sleep duration was inadequate",
            ],
            correctIndex: 0,
            explanation:
              "A recent increase in sleep need is exactly what the long-sleep marker literature points at: illness, depression, and undiagnosed sleep disorders all lengthen sleep.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is 'chronic insomnia disorder'?",
            options: ["A clinical diagnosis: persistent difficulty falling or staying asleep with daytime consequences","Any sleep difficulty lasting more than two weeks","Difficulty sleeping that persists after hygiene changes","Sleep dissatisfaction reported over several months"],
            correctIndex: 0,
            explanation: "It is the population CBT-I is designed for, and the reason the pillar has the sharpest scope line in the program.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What causes 'disrupted' rather than 'disordered' sleep?",
            options: ["Late caffeine, unstable schedules, light exposure, shift patterns, bad-sleeper beliefs","An undiagnosed clinical condition not yet assessed","A short-term stressor resolving within two weeks","Poor sleep hygiene practices specifically"],
            correctIndex: 0,
            explanation: "Behaviour and environment, which is the coach's entire jurisdiction. It is also the much larger population.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "Where does biological night begin, physiologically?",
            options: ["With melatonin rising in dim light a couple of hours before habitual sleep","At the moment of sleep onset","When core body temperature reaches its nadir","When sleep pressure exceeds the circadian alerting signal"],
            correctIndex: 0,
            explanation: "Melatonin is a timing signal, not a sedative. Light suppresses it and pushes the clock later.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Which stage occupies the largest share of a typical night?",
            options: ["N2","N3 slow-wave sleep","REM","N1, the transition stage"],
            correctIndex: 0,
            explanation: "N2 is the bulk, with N3 and REM each a smaller share. What matters more than the percentages is the distribution across the night.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Why can an early bedtime with a 3 a.m. waking feel less catastrophic than it sounds?",
            options: ["Slow-wave sleep dominates the first third, so most of it is already delivered","Sleep pressure discharges fastest in the first two hours","The circadian nadir has passed by 3 a.m.","REM is front-loaded and therefore preserved"],
            correctIndex: 0,
            explanation: "Neither observation licenses shortening sleep; both help a client understand their own night.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What is the suprachiasmatic nucleus, and what entrains it?",
            options: ["The hypothalamic master clock, entrained primarily by light","The pineal structure releasing melatonin on a fixed schedule","The brainstem centre generating sleep pressure","The thalamic relay gating sensory input during sleep"],
            correctIndex: 0,
            explanation: "It runs Process C, setting when the body expects sleep regardless of accumulated pressure.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What method produced the AASM/SRS 7-hour statement?",
            options: ["A modified RAND appropriateness method","A GRADE-graded systematic review","A pooled meta-analysis of cohort data","A Delphi survey of sleep clinicians"],
            correctIndex: 0,
            explanation: "Structured expert agreement over evidence. GRADE is what the behavioural-treatment guideline used, a different document.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What are the NSF ranges for teenagers and school-age children?",
            options: ["8 to 10 hours for teenagers, 9 to 11 for school-age children","9 to 11 for teenagers, 8 to 10 for school-age children","7 to 9 for both groups","10 to 12 for teenagers, 11 to 13 for school-age children"],
            correctIndex: 0,
            explanation: "Alongside 7 to 9 for young adults and adults and 7 to 8 for older adults.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What did short sleep associate with beyond mortality?",
            options: ["Diabetes 1.37, obesity 1.38, CHD 1.26, hypertension 1.17, cardiovascular disease 1.16","Stroke 1.46, diabetes 1.26, cardiovascular disease 1.25","Obesity and diabetes only","Diabetes 1.37 and obesity 1.38 with clean dose-response for each"],
            correctIndex: 0,
            explanation: "Five outcomes. The stroke-1.46 set belongs to the LONG-sleep analysis, and there was no clean dose-response beyond mortality.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Where did the short-sleep meta-regression find a linear mortality association?",
            options: ["Below six hours","Below seven hours, matching the recommendation","Across the whole range with no inflection","Below five hours only"],
            correctIndex: 0,
            explanation: "That is the region to name, rather than the 7-hour recommendation, when describing where the signal is clearest.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What did long sleep associate with, and what did it NOT?",
            options: ["Stroke 1.46, diabetes 1.26, CVD 1.25; not hypertension","Stroke 1.46 and hypertension 1.17; not diabetes","Obesity 1.38 and CHD 1.26; not stroke","All four outcomes at magnitudes exceeding short sleep"],
            correctIndex: 0,
            explanation: "Three associations and one null. Naming the null is part of quoting the analysis rather than summarizing it.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is a 'risk ratio' of 1.39?",
            options: ["Risk 39 percent higher than the reference group","Risk 139 percent higher than the reference","A 39 percent chance of the outcome","Risk 1.39 times the absolute population rate"],
            correctIndex: 0,
            explanation: "Exposed risk divided by reference risk. Precision here is what keeps a claim defensible.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is 'marker versus cause'?",
            options: ["A variable travelling with a problem versus one creating it","A variable measured early versus one measured late","A biomarker versus a behavioural measure","A proxy measure versus a direct one"],
            correctIndex: 0,
            explanation: "Long sleep is established as the first and not the second, which is why it changes nothing about a healthy long sleeper.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is a sleep coach actually FOR, given the pillar's tension?",
            options: ["The larger population whose sleep is disrupted rather than disordered, plus knowing when to refer","Delivering the behavioural components of CBT-I between clinical sessions","Screening clients for insomnia before referring them onward","Managing sleep for clients whose clinicians lack the time"],
            correctIndex: 0,
            explanation: "Behaviour and environment, plus the referral that gets someone to the treatment you cannot give.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What does 'some is better than none' authorize on this pillar's equivalent?",
            options: ["Nothing; that sentence is from the movement guidelines, not the sleep ones","Coaching sleep in clients with diagnosed insomnia","Recommending partial-night sleep extension","Treating short sleep as always modifiable"],
            correctIndex: 0,
            explanation: "The WHO 'some is better than none' sentence belongs to WELL-02's physical-activity guidelines. Importing it here would misattribute a source.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What is 'sleep hygiene' in this course's vocabulary?",
            options: ["General education about sleep-supportive habits; not recommended alone as insomnia treatment","The behavioural core of CBT-I delivery","The environmental component of sleep coaching","A discredited approach recommended against in all contexts"],
            correctIndex: 0,
            explanation: "Both halves. Useful context for healthy clients, and specifically not a treatment for a diagnosed disorder.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "A client's sleep need has recently grown by two hours. What is this?",
            options: ["A referral question, not a hygiene question","Normal seasonal variation requiring no action","Accumulated sleep debt, addressed by extending opportunity","Evidence their previous duration was inadequate"],
            correctIndex: 0,
            explanation: "A recent increase is exactly what the long-sleep marker literature points at: illness, depression, and undiagnosed disorders all lengthen sleep.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Which claim about long sleep would this course refuse?",
            options: ["'Sleeping over nine hours raises your mortality risk by 39 percent'","'Long sleep carried a mortality risk ratio of 1.39 across 137 cohorts'","'The authors leave causality open, so long sleep is a marker'","'Illness and depression both lengthen sleep, which makes reverse causation live'"],
            correctIndex: 0,
            explanation: "It converts an observational association into a personal causal claim on a finding the authors themselves left open.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is a 'consensus statement'?",
            options: ["A recommendation produced by structured expert agreement over evidence","A recommendation issued jointly by two or more bodies","A summary of findings all reviewed studies agreed on","A guideline graded using GRADE methodology"],
            correctIndex: 0,
            explanation: "Joint issuance and agreement are incidental; the structured method is what defines it.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Why does this course call sleep the pillar with the sharpest boundary?",
            options: ["The effective treatment requires licensure and the available one is advised against alone","The legal restrictions on sleep advice are stricter than other pillars","Sleep complaints conceal more medical conditions than any other pillar","Sleep is the only pillar with a designated first-line treatment"],
            correctIndex: 0,
            explanation: "The referral count is high too, but the sharpness comes from the two-sided tension in the treatment landscape.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "What does 'Process C' set, regardless of tiredness?",
            options: ["When the body expects to be asleep","How deeply the body will sleep once asleep","How quickly sleep pressure accumulates","How long each sleep cycle lasts"],
            correctIndex: 0,
            explanation: "Good sleep happens when Process S and Process C align, and most complaints in healthy people are alignment failures.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "How long does a sleep cycle run, and in what order?",
            options: ["Roughly 90 to 120 minutes: N1, N2, N3, then REM","Roughly 60 minutes: N1, N2, then alternating N3 and REM","Roughly 90 minutes: REM first, then deeper non-REM","Roughly 120 minutes, with the order varying by cycle"],
            correctIndex: 0,
            explanation: "The order is consistent; the proportions vary between people and nights.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What is 'reverse causation' in the long-sleep context?",
            options: ["Illness, depression, and undiagnosed disorders lengthen sleep, rather than long sleep causing harm","Long sleep causes inactivity, which produces the outcomes","Measurement of duration is affected by the outcome studied","Short and long sleep share a common upstream cause"],
            correctIndex: 0,
            explanation: "The outcome causing the exposure. It is entirely live here, which is what separates a marker from a cause.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "What is melatonin, correctly understood?",
            options: ["A timing signal, not a sedative","A sedative hormone inducing sleep onset","A hormone regulating sleep depth rather than timing","A marker of accumulated sleep pressure"],
            correctIndex: 0,
            explanation: "It rises in dim light before habitual sleep and tells the body biological night has begun. Light suppresses it and delays the clock.",
            sourceLessonSlug: "architecture-and-processes",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-cbt-i-is",
      title: "4 · CBT-I: what it is and what it does",
      section: "Section 2 · The scope line",
      body: `You need to understand the treatment you are not allowed to deliver, because half of your usefulness on this pillar is recognising who needs it and being able to describe it credibly.

**Its components.** CBT-I is multicomponent and structured, delivered over several sessions. **Stimulus control** reconditions the bed as a cue for sleep alone, which in practice means getting out of bed when wakefulness persists. **Sleep restriction** deliberately compresses time in bed toward actual sleep time, using mild, temporary sleep deprivation to consolidate sleep and rebuild pressure. **Cognitive restructuring** targets the catastrophic beliefs about sleep loss that keep people awake worrying about being awake. Relaxation training and sleep-hygiene education usually ride along as supporting components.

**What it delivers.** Pooling 20 randomized trials with 1,162 participants against inactive comparators: sleep onset latency improved by **19.03 minutes**, wake after sleep onset by **26.00 minutes**, and sleep efficiency by **9.91 percentage points**, with changes sustained at later follow-ups and no adverse outcomes reported (Trauer et al., 2015).

**And the result people skip.** Total sleep time improved by 7.61 minutes with a confidence interval crossing zero, meaning **not statistically significant**. Read that carefully, because it reframes the whole treatment: CBT-I does not primarily make people sleep more. It makes the sleep they get faster to arrive, less broken, and less frightening. For a client convinced that treatment means more hours, that is the expectation to reset before they start.

**Why sleep restriction is the sharp edge.** Deliberately inducing sleep deprivation is a real intervention with real risks, which is precisely why the delivery of CBT-I sits with trained clinicians. It is also why a coach improvising "just spend less time in bed" with an unscreened client is not delivering a lite version of a good treatment; it is delivering the risky component without the assessment that makes it safe.

:::reveal Name CBT-I's three core components and what each targets. ||| Stimulus control, reconditioning the bed as a cue for sleep alone. Sleep restriction, compressing time in bed toward actual sleep time to consolidate sleep. Cognitive restructuring, dismantling the catastrophic beliefs about sleep loss that sustain the wakefulness.

:::reveal What did CBT-I NOT significantly improve, and why does that matter to a client? ||| Total sleep time: 7.61 minutes with a confidence interval crossing zero. It matters because clients expect treatment to mean more hours. CBT-I mainly makes sleep arrive faster, break less, and frighten less; setting that expectation early prevents a client abandoning an effective treatment for missing a target it was never hitting.

## Vocabulary
- **Stimulus control**: rebuilding the bed-equals-sleep association, most visibly by leaving the bed during prolonged wakefulness.
- **Sleep restriction therapy**: deliberately limiting time in bed toward actual sleep time to consolidate sleep; effective, and the component carrying real risk.
- **Cognitive restructuring**: working on catastrophic beliefs about sleep loss that keep a person awake.
- **Sleep efficiency**: time asleep as a percentage of time in bed; the measure CBT-I moves most clearly, by about ten points.
- **Sleep onset latency**: how long it takes to fall asleep; improved by roughly 19 minutes.

## Sources
Trauer, J. M., Qian, M. Y., Doyle, J. S., Rajaratnam, S. M., & Cunnington, D. (2015). Cognitive behavioral therapy for chronic insomnia: A systematic review and meta-analysis. *Annals of Internal Medicine, 163*(3), 191-204. https://pubmed.ncbi.nlm.nih.gov/26054060/`,
    },
    {
      slug: "the-guideline-and-the-line",
      title: "5 · What the guideline says, including about you",
      section: "Section 2 · The scope line",
      body: `The American Academy of Sleep Medicine's clinical practice guideline for behavioral treatment of chronic insomnia is short, graded, and unusually blunt. It is worth knowing its recommendations verbatim, because two of them define this pillar's boundary.

**The recommendations.** Using GRADE methodology, the task force recommended that clinicians use **multicomponent CBT-I** for chronic insomnia disorder in adults, and marked it **STRONG**, the level meaning clinicians should follow it under most circumstances. Four further recommendations are conditional: multicomponent brief therapies, and stimulus control, sleep restriction, and relaxation each as single-component therapies. Then the sixth: **"We suggest that clinicians not use sleep hygiene as a single-component therapy for the treatment of chronic insomnia disorder in adults"** (Edinger et al., 2021).

**Read the two ends together.** The strongest recommendation is for the multicomponent package that requires clinical delivery. The only recommendation AGAINST anything is aimed at the single component most freely available to non-clinicians. That is not an accident of drafting; it reflects a consistent finding that generic sleep-hygiene advice underperforms structured behavioral treatment in the clinical population.

**What that does and does not mean for a coach.** It does **not** mean sleep hygiene is useless. The guideline addresses treatment of a diagnosed disorder, and most of your clients do not have one. It does mean two things, firmly. First, if a client has chronic insomnia, handing them a sleep-hygiene checklist is not treatment and should not be presented as one; they need referral. Second, when you do teach sleep-supportive habits to a healthy client, you should know you are teaching general education rather than an intervention with treatment-grade evidence behind it.

**The honest sentence to a client.** "There is a treatment for what you are describing, it works, and it is not something I can deliver. What I can do is help you get to it, and work on everything around it." That sentence keeps the relationship, respects the evidence, and gets the person to the thing that will actually help.

:::reveal Quote the guideline's only recommendation against a therapy, and say why it matters here. ||| That clinicians not use sleep hygiene as a single-component therapy for chronic insomnia disorder in adults. It matters because sleep hygiene is exactly the component most available to non-clinicians, so the guideline's one negative recommendation lands directly on the coach's default offering for the clinical population.

:::reveal Does that finding make sleep hygiene worthless for coaching? ||| No. The guideline concerns treatment of diagnosed chronic insomnia, and most coaching clients do not have it. It means never presenting hygiene advice as treatment to someone with insomnia, and knowing that with healthy clients you are delivering general education rather than a treatment-grade intervention.

## Vocabulary
- **GRADE**: the standard system for rating evidence quality and recommendation strength that the AASM task force used.
- **Strong recommendation**: one clinicians should follow in most circumstances; multicomponent CBT-I holds it.
- **Conditional recommendation**: one requiring clinical judgment and patient preference; the single-component therapies hold these.
- **Single-component therapy**: one element of CBT-I delivered alone, such as stimulus control or, in the negative recommendation, sleep hygiene.

## Sources
Edinger, J. D., Arnedt, J. T., Bertisch, S. M., et al. (2021). Behavioral and psychological treatments for chronic insomnia disorder in adults: An American Academy of Sleep Medicine clinical practice guideline. *Journal of Clinical Sleep Medicine, 17*(2), 255-262. https://pubmed.ncbi.nlm.nih.gov/33164742/`,
      recallContent: [
        {
          prompt: "Write the sentence you would say to a client describing three months of chronic insomnia.",
          answer:
            "Something like: there is a treatment for what you are describing, it works, and it is not something I can deliver; what I can do is help you get to it and work on everything around it. It refers without abandoning, and it does not dress hygiene advice up as treatment.",
        },
      ],
    },
    {
      slug: "what-a-coach-can-do",
      title: "6 · What a coach can actually do here",
      section: "Section 2 · The scope line",
      body: `Having drawn a hard line, here is the substantial territory on your side of it.

**Sort the population first.** The question is not "does this person sleep badly" but "is this disrupted or disordered." Disrupted sleep has visible causes: a schedule that changes daily, caffeine at four in the afternoon, a bedroom with a television in it, a newborn, a night shift. Disordered sleep persists in the absence of those, over months, with daytime consequences, and often with a client who has already tried the obvious. The first is coachable. The second is a referral, which does not stop you coaching everything else about their life.

**Work the causes you can reach.** Wake-time consistency, which anchors the circadian system more reliably than bedtime does. Light exposure at both ends of the day. Caffeine timing. Alcohol, which is the most underestimated sleep disruptor most clients have. Wind-down as a designed routine rather than an intention. The sleep environment as an environment-design problem, exactly like the food environment in WELL-03.

**Reinforce a clinician's plan when one exists.** If a client is doing CBT-I, the behaviors it prescribes are behaviors, and supporting adherence to them is squarely coaching. This is the same implementation-support role WELL-03 described for a dietitian's plan: the plan stays theirs, the adherence craft is yours.

**Coach the belief, not just the behavior.** "I am a terrible sleeper" is an identity claim, and it does real work in keeping people awake. WELL-01's tools apply directly: the belief is the inner obstacle, and it is more coachable than the pillow.

**And keep your own expectations honest.** These levers are worth real minutes and real consistency for a person whose sleep is disrupted. None of them is a treatment for a disorder, and saying so plainly is what makes the rest of your advice credible.

:::reveal How do you tell disrupted sleep from disordered sleep in a first conversation? ||| Disrupted sleep has visible causes: shifting schedules, late caffeine, alcohol, a chaotic environment, a newborn, shift work. Disordered sleep persists for months WITHOUT those explanations, carries daytime consequences, and usually the client has already tried the obvious fixes. The first is coaching, the second is referral.

:::reveal Which sleep behaviour anchors the circadian system most reliably, and why is it the usual first target? ||| A consistent WAKE time, because it entrains the clock more dependably than bedtime, which a person cannot force. It is the first target because it is controllable, measurable, and it stabilises the system that most sleep complaints are actually about.

## Vocabulary
- **Wake-time anchor**: holding a consistent rise time to entrain the circadian clock; more controllable and more effective than a fixed bedtime.
- **Wind-down routine**: a designed pre-sleep sequence, coached as a habit with a cue rather than left as an intention.
- **Sleep environment design**: treating the bedroom as an environment problem, the same discipline WELL-03 applied to food.
- **Identity belief**: a self-description like "I am a terrible sleeper" that sustains the problem; the coachable inner obstacle behind many sleep complaints.`,
    },
    {
      slug: "quiz-sleep-and-scope",
      title: "7 · Knowledge check: sleep and scope",
      section: "Section 2 · The scope line",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "The AASM and Sleep Research Society consensus recommends that adults sleep:",
            options: [
              "Seven or more hours per night on a regular basis",
              "Exactly eight hours per night, measured from lights out",
              "Six to eight hours, with anything above eight discouraged",
              "As much as the individual feels they need, with no numeric guidance",
            ],
            correctIndex: 0,
            explanation:
              "Watson and colleagues, by modified RAND appropriateness method: seven or more hours regularly, to promote optimal health. The NSF's parallel ranges give 7 to 9 for adults and 7 to 8 for older adults.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Process C refers to:",
            options: [
              "The circadian rhythm, an internal clock setting when the body expects sleep",
              "The homeostatic pressure that accumulates the longer a person stays awake",
              "The consolidation of memory that occurs during slow-wave sleep",
              "The cortisol awakening response that occurs shortly after rising",
            ],
            correctIndex: 0,
            explanation:
              "Process C is circadian, run by the suprachiasmatic nucleus. Accumulating pressure is Process S. Good sleep requires the two to align, which is why an early bedtime alone often fails.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Cutting sleep short at the end of the night preferentially costs:",
            options: [
              "REM sleep, because it lengthens across the final third of the night",
              "Slow-wave sleep, because the deepest stages occur just before waking",
              "N1 sleep, because transitional stages cluster at the end of the night",
              "All stages equally, since the cycles repeat identically through the night",
            ],
            correctIndex: 0,
            explanation:
              "Stage distribution is uneven: slow-wave sleep dominates the first third, REM lengthens through the last. Trimming the end of the night trims mostly REM.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "The long-sleep meta-analysis found a mortality risk ratio of 1.39. The correct reading is:",
            options: [
              "Long sleep is a marker whose causality the authors explicitly left open",
              "Long sleep causes 39 percent more deaths and should be actively shortened",
              "The finding was not statistically significant and can be disregarded",
              "Long sleep is protective once illness is properly adjusted for",
            ],
            correctIndex: 0,
            explanation:
              "The authors close by asking whether the relationship is causal and modifiable at all. Illness, depression, and undiagnosed sleep disorders lengthen sleep, so reverse causation is live and no evidence supports shortening a healthy long sleeper's night.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "In the CBT-I meta-analysis, which outcome did NOT reach statistical significance?",
            options: [
              "Total sleep time",
              "Sleep onset latency",
              "Wake after sleep onset",
              "Sleep efficiency",
            ],
            correctIndex: 0,
            explanation:
              "Total sleep time improved by 7.61 minutes with a confidence interval crossing zero. Latency improved about 19 minutes, wake after sleep onset about 26, and efficiency about 10 points. CBT-I consolidates sleep rather than lengthening it.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Sleep restriction therapy works by:",
            options: [
              "Compressing time in bed toward actual sleep time to consolidate sleep",
              "Extending time in bed so more opportunities for sleep are available",
              "Restricting daytime naps while leaving night-time schedules untouched",
              "Limiting screen exposure in the two hours before the client's bedtime",
            ],
            correctIndex: 0,
            explanation:
              "It uses mild, temporary sleep deprivation to build pressure and consolidate sleep. That deliberate deprivation is exactly why delivering CBT-I requires clinical training and screening.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "The AASM behavioral-treatment guideline's only recommendation AGAINST a therapy concerns:",
            options: [
              "Sleep hygiene used as a single-component therapy for chronic insomnia",
              "Stimulus control used without accompanying cognitive restructuring",
              "Relaxation training in adults over the age of sixty-five",
              "Multicomponent brief therapies delivered in fewer than four sessions",
            ],
            correctIndex: 0,
            explanation:
              "The guideline suggests clinicians not use sleep hygiene alone for chronic insomnia disorder. Stimulus control, sleep restriction, relaxation, and brief therapies all carry conditional recommendations FOR their use.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Does that guideline finding mean sleep hygiene has no place in coaching?",
            options: [
              "No: it addresses treatment of diagnosed insomnia, while most coaching clients are disrupted rather than disordered",
              "Yes: sleep hygiene should never be discussed with any coaching client under any circumstances at all",
              "Yes, unless the coach holds an additional certification in sleep science",
              "No, because the guideline applies only to children and adolescents",
            ],
            correctIndex: 0,
            explanation:
              "The guideline concerns treating a diagnosed disorder. With healthy clients, hygiene education is legitimate general education; what it must never be is presented as treatment to someone with chronic insomnia.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Which presentation should a coach refer rather than coach?",
            options: [
              "Months of persistent sleep difficulty with daytime consequences and no obvious cause",
              "A client whose sleep worsened after starting rotating night shifts last month",
              "A client drinking coffee at 4 p.m. and struggling to fall asleep at 10",
              "A new parent sleeping badly since their baby arrived eight weeks ago",
            ],
            correctIndex: 0,
            explanation:
              "Persistence without an explanation, plus daytime consequences, is the disordered pattern needing clinical assessment. The other three have visible causes, which makes them coaching problems.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "Why does this course make wake time rather than bedtime the usual first target?",
            options: [
              "It entrains the circadian clock more reliably and the client can actually control it",
              "Because bedtime has no measurable influence on sleep quality in adults",
              "Because guidelines specify wake time and are silent on bedtime",
              "Because wake time determines total sleep duration independently of when sleep begins",
            ],
            correctIndex: 0,
            explanation:
              "A person cannot force sleep onset, but they can control when they get up, and a consistent rise time anchors the circadian system. Bedtime still matters; it is simply the less controllable lever.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What does stimulus control target?",
            options: [
              "Reconditioning the bed as a cue for sleep alone",
              "Reducing the stimulation a person receives in the hours before bed",
              "Controlling the light and noise entering the bedroom during the night",
              "Limiting the number of times a person checks the clock while awake",
            ],
            correctIndex: 0,
            explanation:
              "The bed-equals-sleep association, most visibly by getting out of bed when wakefulness persists. Environmental control is a different thing entirely.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What does sleep restriction do, and why?",
            options: [
              "Compresses time in bed toward actual sleep time, using mild deprivation to consolidate sleep",
              "Limits sleep to a fixed duration so the circadian clock can stabilize around it",
              "Restricts naps and early bedtimes so sleep pressure accumulates across the day",
              "Reduces total sleep gradually until the client's minimum requirement is identified",
            ],
            correctIndex: 0,
            explanation:
              "Deliberate, temporary sleep deprivation to consolidate sleep and rebuild pressure. It is effective and it is the component carrying real risk.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What does cognitive restructuring target in CBT-I?",
            options: [
              "The catastrophic beliefs about sleep loss that keep people awake worrying about being awake",
              "The client's expectations about how much sleep they need each night",
              "The negative thoughts that arise during the day as a result of poor sleep",
              "The client's beliefs about whether treatment will work for them",
            ],
            correctIndex: 0,
            explanation:
              "Worrying about being awake is the specific loop. It is also why a tracker that grades the attempt every morning is a problem, per lesson 13.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What did CBT-I deliver in the pooled trials against inactive comparators?",
            options: [
              "Sleep onset latency −19.03 min, wake after sleep onset −26.00 min, sleep efficiency +9.91 points",
              "Sleep onset latency −26.00 min, wake after sleep onset −19.03 min, sleep efficiency +7.61 points",
              "Total sleep time +19.03 min, sleep efficiency +9.91 points, with latency unchanged",
              "Sleep onset latency −19.03 min and total sleep time +26.00 min, both sustained at follow-up",
            ],
            correctIndex: 0,
            explanation:
              "Twenty trials, 1,162 participants, changes sustained at later follow-ups, and no adverse outcomes reported. The 7.61-minute figure is total sleep time, which was not significant.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What did CBT-I NOT significantly improve?",
            options: [
              "Total sleep time (+7.61 minutes, confidence interval crossing zero)",
              "Sleep efficiency, which improved but not to statistical significance",
              "Wake after sleep onset, which improved only in the shorter trials",
              "Sleep onset latency, which was unchanged relative to inactive comparators",
            ],
            correctIndex: 0,
            explanation:
              "The result people skip. CBT-I does not primarily make people sleep more; it makes sleep faster to arrive, less broken, and less frightening.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Why does the total-sleep-time null matter to a client?",
            options: [
              "Clients expect treatment to mean more hours, and may abandon it for missing a target it never hit",
              "It suggests CBT-I is less effective than the other outcomes imply",
              "It means CBT-I should be combined with sleep-extension strategies to be worthwhile",
              "It indicates the trials were too short to detect changes in total sleep duration",
            ],
            correctIndex: 0,
            explanation:
              "Expectation-setting before treatment starts is the coaching contribution here, and it protects a client from quitting something that works.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Why does CBT-I delivery sit with trained clinicians?",
            options: [
              "Deliberately inducing sleep deprivation is a real intervention with real risks",
              "The cognitive components require training in psychotherapeutic technique",
              "The multicomponent structure demands more sessions than coaching typically provides",
              "Diagnosing chronic insomnia is a prerequisite, and only clinicians may diagnose",
            ],
            correctIndex: 0,
            explanation:
              "Sleep restriction is the sharp edge. A coach improvising 'just spend less time in bed' with an unscreened client delivers the risky component without the assessment that makes it safe.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What is 'sleep efficiency'?",
            options: [
              "Time asleep as a percentage of time in bed",
              "The proportion of the night spent in slow-wave and REM sleep combined",
              "How quickly a person falls asleep relative to their usual latency",
              "The ratio of restorative sleep to total sleep across a night",
            ],
            correctIndex: 0,
            explanation:
              "Asleep over in-bed. It is the measure CBT-I moves most clearly, by about ten percentage points, and it is why sleep restriction works by shrinking the denominator.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Which recommendation in the AASM guideline is marked STRONG?",
            options: [
              "That clinicians use multicomponent CBT-I for chronic insomnia disorder in adults",
              "That clinicians use stimulus control as a single-component therapy",
              "That clinicians use multicomponent brief therapies for chronic insomnia disorder",
              "That clinicians not use sleep hygiene as a single-component therapy",
            ],
            correctIndex: 0,
            explanation:
              "Only multicomponent CBT-I is strong. The single-component therapies and brief therapies are conditional, and the hygiene recommendation is a suggestion against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What does a STRONG recommendation mean in GRADE?",
            options: [
              "Clinicians should follow it under most circumstances",
              "The evidence supporting it is of high quality with no serious limitations",
              "It applies to all patients regardless of preference or clinical judgment",
              "It has been endorsed by more than one professional organization",
            ],
            correctIndex: 0,
            explanation:
              "It is about how firmly to act, not about evidence quality alone. Conditional recommendations require clinical judgment and patient preference.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Which four therapies carry CONDITIONAL recommendations?",
            options: [
              "Multicomponent brief therapies, stimulus control, sleep restriction, and relaxation",
              "Sleep hygiene, stimulus control, sleep restriction, and cognitive restructuring",
              "Multicomponent CBT-I, brief therapies, stimulus control, and relaxation",
              "Stimulus control, sleep restriction, relaxation, and pharmacotherapy",
            ],
            correctIndex: 0,
            explanation:
              "Brief therapies plus the three single components. Sleep hygiene as a single component gets the one recommendation against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Quote the guideline's only recommendation AGAINST a therapy.",
            options: [
              "That clinicians not use sleep hygiene as a single-component therapy for chronic insomnia in adults",
              "That clinicians not use relaxation training without accompanying cognitive components",
              "That clinicians not use sleep restriction in patients who have not been screened",
              "That clinicians not use brief therapies where full multicomponent CBT-I is available",
            ],
            correctIndex: 0,
            explanation:
              "It lands directly on the component most available to non-clinicians, which the lesson calls no accident of drafting.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What does the guideline's structure reveal when you read both ends together?",
            options: [
              "The strongest recommendation needs clinical delivery; the only negative one targets the coach's default offering",
              "The strongest recommendations are all for single-component therapies a coach could deliver",
              "The guideline was written without considering non-clinical practitioners at all",
              "The evidence for behavioral treatment is weaker than for pharmacological treatment",
            ],
            correctIndex: 0,
            explanation:
              "It reflects a consistent finding that generic hygiene advice underperforms structured behavioral treatment in the clinical population.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Does the guideline make sleep hygiene worthless for coaching?",
            options: [
              "No; it addresses treatment of a diagnosed disorder, and most coaching clients do not have one",
              "Yes; the recommendation against it applies to all populations and contexts",
              "Yes for chronic insomnia and for disrupted sleep alike, since the evidence is the same",
              "No; the recommendation was downgraded in subsequent guideline revisions",
            ],
            correctIndex: 0,
            explanation:
              "Two firm consequences follow instead: never present hygiene advice as treatment to someone with insomnia, and know you are teaching general education rather than a treatment-grade intervention.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What is the honest sentence to say to a client with chronic insomnia?",
            options: [
              "There is a treatment for this, it works, it is not mine to deliver, and I can help you get to it",
              "Let us try sleep hygiene first, and refer you if it does not work within a month",
              "I cannot help with this, so you should see a clinician before we continue working together",
              "Insomnia usually resolves with consistent habits, so let us start with your wake time",
            ],
            correctIndex: 0,
            explanation:
              "It keeps the relationship, respects the evidence, and gets the person to the thing that will actually help. The trial-first option is exactly what the guideline recommends against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "How do you tell disrupted from disordered sleep in a first conversation?",
            options: [
              "Disrupted sleep has visible causes; disordered sleep persists without them, over months, with daytime consequences",
              "Disrupted sleep resolves within two weeks; disordered sleep persists beyond that",
              "Disrupted sleep affects onset; disordered sleep affects maintenance through the night",
              "Disrupted sleep responds to hygiene advice; disordered sleep does not, which is the test",
            ],
            correctIndex: 0,
            explanation:
              "Visible causes, duration, daytime consequences, and usually a client who has already tried the obvious. Testing hygiene first is what the guideline recommends against.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "Which sleep behavior does the course name as the usual first target?",
            options: [
              "Wake-time consistency",
              "Bedtime consistency, which sets the boundary for total sleep opportunity",
              "Evening screen reduction, which has the largest measured effect on onset",
              "Caffeine cut-off timing, which is the most modifiable of the levers",
            ],
            correctIndex: 0,
            explanation:
              "It anchors the circadian system more reliably than bedtime, it is controllable, it is measurable, and it survives a bad night: get up at the usual time anyway.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "Which substance does the course call the most underestimated sleep disruptor?",
            options: [
              "Alcohol",
              "Caffeine, whose half-life clients consistently underestimate",
              "Nicotine, which fragments sleep in the second half of the night",
              "Over-the-counter antihistamine sleep aids",
            ],
            correctIndex: 0,
            explanation:
              "Because it shortens sleep onset, which is why people believe it helps, and then fragments the second half of the night as it clears.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What is the coach's role when a client is doing CBT-I?",
            options: [
              "Supporting adherence to the behaviors it prescribes, since behaviors are coaching",
              "Delivering the components between the clinician's sessions to reinforce them",
              "Monitoring progress and reporting it back to the treating clinician",
              "Pausing coaching until the treatment course has concluded",
            ],
            correctIndex: 0,
            explanation:
              "The same implementation-support role WELL-03 described for a dietitian's plan: the plan stays theirs, the adherence craft is yours.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What does 'coach the belief, not just the behavior' mean here?",
            options: [
              "'I am a terrible sleeper' is an identity claim that keeps people awake, and it is more coachable than the pillow",
              "Clients must believe the advice will work before they will implement it consistently",
              "Beliefs about sleep need should be corrected against the published duration recommendations",
              "The client's confidence in their coach predicts adherence to sleep recommendations",
            ],
            correctIndex: 0,
            explanation:
              "It is the WELL-01 inner obstacle applied to this pillar, and the lesson says it does real work in keeping people awake.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What keeps a coach's sleep advice credible, per this lesson?",
            options: [
              "Saying plainly that none of these levers is a treatment for a disorder",
              "Citing the published evidence for each recommendation the coach makes",
              "Limiting advice to the behaviors with randomized trial support behind them",
              "Deferring to the client's clinician on any question touching sleep quality",
            ],
            correctIndex: 0,
            explanation:
              "The levers are worth real minutes and real consistency for disrupted sleep. Saying what they are not is what makes the claim about what they are believable.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What is a 'single-component therapy'?",
            options: [
              "One element of CBT-I delivered alone, such as stimulus control or sleep hygiene",
              "A therapy addressing a single sleep symptom rather than the whole presentation",
              "A treatment delivered in a single session rather than across several",
              "A behavioral treatment used without accompanying pharmacotherapy",
            ],
            correctIndex: 0,
            explanation:
              "One element alone. Three of them carry conditional recommendations, and sleep hygiene carries the recommendation against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "A client with three months of insomnia asks for a sleep-hygiene checklist. What is the error in providing it as the plan?",
            options: [
              "Handing over a checklist is not treatment and should not be presented as one; they need referral",
              "Sleep hygiene is contraindicated in chronic insomnia and may worsen the condition",
              "Checklists are ineffective as a delivery format regardless of the content",
              "The client should complete a validated insomnia questionnaire before any intervention",
            ],
            correctIndex: 0,
            explanation:
              "It is the guideline's only negative recommendation, aimed at exactly this. Note the lesson does not say hygiene harms them; it says it is not treatment and must not be presented as one.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What is a 'wake-time anchor'?",
            options: [
              "Holding a consistent rise time to entrain the circadian clock",
              "The earliest time a client is willing to wake on any given day",
              "The point in the sleep cycle at which waking feels least disruptive",
              "A fixed alarm used to prevent oversleeping on rest days",
            ],
            correctIndex: 0,
            explanation:
              "More controllable and more effective than a fixed bedtime, because a person can control when they get up and cannot force sleep onset.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What is 'sleep onset latency', and how much did CBT-I move it?",
            options: ["How long it takes to fall asleep; improved by roughly 19 minutes","Time from lights out to the first REM period; improved by 26 minutes","Time awake after first falling asleep; improved by 19 minutes","The delay before sleep pressure exceeds alerting; unchanged"],
            correctIndex: 0,
            explanation: "The 26-minute figure is wake after sleep onset, a different measure in the same analysis.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "How was the CBT-I evidence pooled?",
            options: ["20 randomized trials, 1,162 participants, against inactive comparators","47 randomized trials, 3,515 participants, against active comparators","13 trials, 2,371 participants, individual participant data","12 trials, 785 adults, against non-breathwork controls"],
            correctIndex: 0,
            explanation: "Changes were sustained at later follow-ups with no adverse outcomes reported.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Why is sleep restriction the component carrying real risk?",
            options: ["It deliberately induces sleep deprivation, which is a real intervention","It requires clients to leave the bed repeatedly at night","It conflicts with the circadian anchor a coach would set","It reduces total sleep time, which the trials show does not improve"],
            correctIndex: 0,
            explanation: "A coach improvising 'just spend less time in bed' with an unscreened client delivers the risky component without the assessment that makes it safe.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What does a CONDITIONAL recommendation mean in GRADE?",
            options: ["It requires clinical judgment and patient preference","The evidence is of low quality","It applies only in specialist settings","It is expected to be upgraded in future revisions"],
            correctIndex: 0,
            explanation: "The single-component therapies and brief therapies hold conditional recommendations; only multicomponent CBT-I is strong.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Which four therapies carry conditional recommendations?",
            options: ["Multicomponent brief therapies, stimulus control, sleep restriction, relaxation","Sleep hygiene, stimulus control, sleep restriction, cognitive restructuring","Multicomponent CBT-I, brief therapies, stimulus control, relaxation","Stimulus control, sleep restriction, relaxation, pharmacotherapy"],
            correctIndex: 0,
            explanation: "Sleep hygiene as a single component gets the one recommendation against, not a conditional one.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What is a 'single-component therapy'?",
            options: ["One element of CBT-I delivered alone, such as stimulus control or sleep hygiene","A therapy addressing one symptom rather than the presentation","A treatment delivered in a single session","A behavioural treatment used without medication"],
            correctIndex: 0,
            explanation: "Three carry conditional recommendations, and sleep hygiene carries the recommendation against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "What is the coach's role when a client is doing CBT-I?",
            options: ["Supporting adherence to the behaviours it prescribes","Delivering components between the clinician's sessions","Monitoring progress and reporting back to the clinician","Pausing coaching until the course concludes"],
            correctIndex: 0,
            explanation: "The same implementation-support role WELL-03 described for a dietitian's plan: the plan stays theirs, the adherence craft is yours.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "Which substance does the course call the most underestimated sleep disruptor?",
            options: ["Alcohol","Caffeine, whose half-life clients underestimate","Nicotine, which fragments the second half","Over-the-counter antihistamine sleep aids"],
            correctIndex: 0,
            explanation: "Because it shortens onset, which is why people believe it helps, and then fragments the second half as it clears.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What is a 'wake-time anchor'?",
            options: ["Holding a consistent rise time to entrain the circadian clock","The earliest time a client will wake on any day","The point in the cycle where waking feels least disruptive","A fixed alarm preventing oversleep on rest days"],
            correctIndex: 0,
            explanation: "More controllable and more effective than a fixed bedtime, because a person can control when they get up and cannot force sleep onset.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What does 'coach the belief, not just the behaviour' mean here?",
            options: ["'I am a terrible sleeper' is an identity claim that keeps people awake","Clients must believe advice will work before implementing it","Beliefs about sleep need should be corrected against guidelines","Confidence in the coach predicts adherence to sleep advice"],
            correctIndex: 0,
            explanation: "It is the WELL-01 inner obstacle applied to this pillar, and it is more coachable than the pillow.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What keeps a coach's sleep advice credible?",
            options: ["Saying plainly that none of these levers treats a disorder","Citing published evidence for each recommendation","Limiting advice to behaviours with randomized support","Deferring to the client's clinician on sleep quality"],
            correctIndex: 0,
            explanation: "Saying what the levers are not is what makes the claim about what they are believable.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What is 'sleep environment design'?",
            options: ["Treating the bedroom as an environment problem, as WELL-03 did with food","Optimising light, temperature, and noise to published thresholds","Removing all electronic devices from the bedroom","Designing a room used exclusively for sleep"],
            correctIndex: 0,
            explanation: "It is the same discipline, which is why the food-environment lessons transfer directly here.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "timing-and-light",
      title: "8 · Timing and light",
      section: "Section 3 · The levers with evidence",
      body: `If a client changes one thing about their sleep, the highest-yield candidate is usually not what happens in the bedroom. It is when they are exposed to light.

**The mechanism.** The circadian clock is entrained mainly by light reaching specialised retinal cells and signalling to the suprachiasmatic nucleus, which suppresses melatonin release. Melatonin normally rises in dim conditions a couple of hours before habitual sleep onset, marking biological night. Evening light delays that rise and pushes the whole system later; morning light does the reverse.

**Which gives two coachable instructions.** Get bright light early, ideally outdoors, because outdoor light is dramatically brighter than indoor lighting even on an overcast day. Reduce bright and screen-based light in the couple of hours before bed. The direction of the effect is well established; the precise magnitude from any given intervention, including blue-blocking glasses, comes from small trials this course does not quote numbers from.

**The anchor that holds it together.** A consistent wake time is the most reliable entrainment signal a client controls, and it stabilises Process S as a side effect by keeping the wake period constant. Bedtime follows; it cannot be forced. When a client asks where to start, this is nearly always the answer, and it is the one that survives a bad night: get up at the usual time anyway.

**Other time cues matter too.** Meal timing, physical activity, and temperature all act as weaker entrainment signals. For most clients they are refinements, worth reaching for after the wake-time anchor and light exposure are actually in place rather than instead of them.

:::reveal Give the two light instructions and the mechanism they rest on. ||| Bright light early, ideally outdoors, and reduced bright or screen light in the couple of hours before bed. The mechanism: light reaching specialised retinal cells signals the suprachiasmatic nucleus and suppresses melatonin, so evening light delays the clock while morning light advances it.

:::reveal Why is a consistent wake time the anchor rather than a consistent bedtime? ||| Because a client can control when they get up and cannot force sleep onset. A fixed rise time entrains the clock, stabilises sleep pressure by keeping the wake period constant, and survives a bad night, since getting up anyway is what pulls the system back into line.

## Vocabulary
- **Entrainment**: the synchronising of the internal clock to external cues, principally light.
- **Zeitgeber**: a time-giver, an external cue that entrains the circadian system; light is the dominant one, with meals, activity, and temperature weaker.
- **Dim-light melatonin onset**: the rise of melatonin under low light a couple of hours before habitual sleep, marking biological night.
- **Phase delay and phase advance**: shifting the clock later or earlier; evening light delays, morning light advances.`,
    },
    {
      slug: "caffeine-and-alcohol",
      title: "9 · Caffeine and alcohol",
      section: "Section 3 · The levers with evidence",
      body: `Two substances account for an enormous share of the sleep complaints a coach will hear, and clients systematically misjudge both.

**Caffeine, measured properly.** Pooling 22 controlled crossover trials with polysomnography in 956 healthy adults, acute caffeine **reduced total sleep time by about 35 minutes, cut sleep efficiency by 4.74 percent, reduced the proportion of slow-wave sleep by about one percentage point, and lengthened sleep onset latency by about 8 minutes**. REM proportion was unaffected, and both high and low doses reduced total sleep time and efficiency (Chang et al., 2025).

**Note what that list contains.** Not just "harder to fall asleep," which is the effect clients expect and think they have beaten, but less total sleep, worse efficiency, and less deep sleep. A client who falls asleep fine after an evening coffee has not escaped the effect; they have escaped the only part of it they can perceive.

**The timing point, made honestly.** Caffeine's half-life sits in the range of several hours, so a substantial fraction of an afternoon dose is still circulating at bedtime. That is the reason to move the last dose earlier. This course deliberately does not quote a precise cut-off hour, because the specific figures in circulation trace to a source this program could not verify. "Earlier than you think, and test it for two weeks" is both honest and sufficient.

**Alcohol, the underestimated one.** Alcohol shortens sleep onset, which is exactly why people believe it helps, and then fragments the second half of the night as it clears, with autonomic activation and suppressed REM. The subjective experience is falling asleep easily and waking at 3 a.m. feeling wrecked. For a client convinced alcohol is their sleep aid, the coaching move is not argument but a two-week comparison they run themselves.

:::reveal List what caffeine did to sleep in the pooled trials, beyond making sleep harder to start. ||| Reduced total sleep time by about 35 minutes, cut sleep efficiency by about 4.7 percent, and reduced the proportion of slow-wave sleep by about a percentage point, alongside roughly 8 minutes longer to fall asleep. REM proportion was unaffected.

:::reveal Why does this course avoid quoting a precise caffeine cut-off time? ||| Because the specific cut-off hours in circulation trace to a source this program could not verify, and inventing precision is exactly what the dossier rule forbids. The verified effects plus caffeine's half-life justify "move it earlier and test it" without a fabricated number.

## Vocabulary
- **Crossover trial**: a design where each participant receives both conditions, making them their own control; the design behind the caffeine evidence.
- **Polysomnography**: full laboratory sleep measurement with brain, eye, and muscle recording; the gold standard the caffeine trials used.
- **Half-life**: the time for half a dose to clear, the reason an afternoon coffee is still present at bedtime.
- **Sleep fragmentation**: repeated brief awakenings breaking sleep into pieces, alcohol's characteristic second-half effect.

## Sources
Chang, Y. H., Cheng, Y. C., & Cheng, W. J. (2025). Age- and dose-specific effects of caffeine on sleep: A meta-analysis of controlled crossover trials. *Sleep Medicine, 136*, 106874. https://pubmed.ncbi.nlm.nih.gov/41124973/`,
      recallContent: [
        {
          prompt: "A client says evening coffee does not affect them because they fall asleep fine. What does the evidence say?",
          answer:
            "That they are judging by the only effect they can perceive. The pooled trials show reduced total sleep time, worse sleep efficiency, and less slow-wave sleep, not merely longer to fall asleep, and both high and low doses cut total sleep time and efficiency.",
        },
      ],
    },
    {
      slug: "shift-work",
      title: "10 · Shift work",
      section: "Section 3 · The levers with evidence",
      body: `Shift workers are the population where sleep coaching matters most and generic advice helps least, because the standard playbook assumes a schedule they do not have.

**The risk, quantified.** Pooling 21 studies with 173,010 participants, shift workers had a **17 percent higher risk of any cardiovascular event** and a **26 percent higher risk of coronary heart disease morbidity** (1.26, 1.10 to 1.43) than day workers, with cardiovascular and coronary mortality about 20 percent higher (Torquati et al., 2018).

**The dose-response has a shape worth teaching.** The increase appeared **after the first five years** of shift work, with each additional five years adding about 7.1 percent to cardiovascular risk. The authors describe the association as non-linear and note it "seems to appear only after the first five years of exposure." For a client two years into night shifts, that is neither an alarm nor an all-clear; it is a reason to build the habits now that make a longer exposure survivable.

**What coaching can offer.** Anchor sleep: a protected core sleep period held consistently, even when the full schedule cannot be. Light management in both directions, bright during the shift, blocked on the commute home so morning light does not drag the clock the wrong way. A genuinely dark, cool, quiet daytime sleep environment, which usually needs equipment rather than intention. Strategic naps. Caffeine timed to the shift rather than the clock. And planned transitions on days off, since swinging fully back to a day schedule and then back again is its own repeated insult.

**And the honest boundary.** The elevated cardiometabolic risk is a medical matter. Coaching the sleep and the habits is yours; screening and managing that risk belongs with a physician, and a shift worker with years of exposure should have that conversation regardless of how well their sleep is going.

:::reveal Give the shift-work cardiovascular numbers and the timing nuance. ||| 17 percent higher risk of any cardiovascular event and 26 percent higher coronary heart disease morbidity across 21 studies and 173,010 participants, with mortality about 20 percent higher. The nuance: the risk appears only after the first five years, then rises about 7.1 percent per additional five years.

:::reveal What is 'anchor sleep' and why does it suit shift workers? ||| A protected core sleep period held at the same time across different shifts, even when the whole schedule cannot be consistent. It suits shift work because full circadian consistency is impossible, so the aim becomes preserving one stable block rather than chasing an alignment the roster forbids.

## Vocabulary
- **Circadian misalignment**: a mismatch between the internal clock and the imposed sleep-wake schedule; the defining problem of shift work.
- **Anchor sleep**: a consistently timed core sleep period retained across varying shifts.
- **Strategic nap**: a planned short sleep used to offset accumulated pressure before or during a shift.
- **Non-linear dose-response**: risk that does not rise steadily from the first exposure; here, appearing only after five years and then accumulating.

## Sources
Torquati, L., Mielke, G. I., Brown, W. J., & Kolbe-Alexander, T. (2018). Shift work and the risk of cardiovascular disease: A systematic review and meta-analysis including dose-response relationship. *Scandinavian Journal of Work, Environment & Health, 44*(3), 229-238. https://pubmed.ncbi.nlm.nih.gov/29247501/`,
    },
    {
      slug: "quiz-the-levers",
      title: "11 · Knowledge check: the levers",
      section: "Section 3 · The levers with evidence",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Evening light affects sleep primarily by:",
            options: [
              "Suppressing melatonin and delaying the circadian clock",
              "Raising core body temperature above the threshold for sleep onset",
              "Increasing homeostatic sleep pressure faster than darkness does",
              "Directly reducing the proportion of slow-wave sleep obtained",
            ],
            correctIndex: 0,
            explanation:
              "Light reaches specialised retinal cells, signals the suprachiasmatic nucleus, and suppresses melatonin, pushing the clock later. Morning light does the reverse.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "In the pooled caffeine trials, caffeine reduced total sleep time by approximately:",
            options: [
              "35 minutes",
              "5 minutes",
              "90 minutes",
              "Three hours in high-dose conditions only",
            ],
            correctIndex: 0,
            explanation:
              "About 34.7 minutes, alongside a 4.74 percent drop in sleep efficiency, roughly one percentage point less slow-wave sleep, and about 8 minutes longer to fall asleep, across 22 crossover trials with polysomnography.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "A client falls asleep easily after evening coffee and concludes it does not affect them. The evidence says:",
            options: [
              "They are judging by the one effect they can perceive; duration, efficiency, and deep sleep all still suffer",
              "They are correct, since sleep onset latency is the only properly validated caffeine outcome in the literature",
              "Caffeine affects only people who consume more than 400 mg daily",
              "The effects reverse in habitual consumers, who sleep better with caffeine",
            ],
            correctIndex: 0,
            explanation:
              "The pooled trials show reduced total sleep time, reduced efficiency, and less slow-wave sleep, not merely delayed onset. Both high and low doses cut sleep time and efficiency.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Alcohol's characteristic effect on sleep is:",
            options: [
              "Faster sleep onset followed by fragmentation of the second half of the night",
              "Delayed sleep onset, followed by unusually consolidated and uninterrupted sleep for the rest of the night",
              "Increased REM sleep throughout the night with no other effects",
              "No measurable effect on architecture at any dose in healthy adults",
            ],
            correctIndex: 0,
            explanation:
              "It shortens onset, which is why people believe it helps, then fragments the back half with autonomic activation and suppressed REM as it clears. Hence falling asleep easily and waking at 3 a.m. feeling terrible.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "The shift-work meta-analysis found that cardiovascular risk:",
            options: [
              "Appeared after the first five years, then rose about 7.1 percent per additional five years",
              "Rose steadily and linearly from the very first month of shift work, with no threshold effect observed",
              "Was elevated only in workers over the age of fifty at hire",
              "Showed no dose-response relationship with duration of exposure",
            ],
            correctIndex: 0,
            explanation:
              "The association is non-linear and, per the authors, seems to appear only after the first five years. Overall figures were 17 percent higher for any CVD event and 26 percent for coronary heart disease morbidity.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "For a rotating shift worker, the primary sleep-scheduling strategy is:",
            options: [
              "Anchor sleep: protect one consistently timed core sleep block across differing shifts",
              "Full circadian realignment back to a standard day schedule on every single off day between shifts",
              "Eliminating naps entirely so night sleep consolidates properly",
              "Matching sleep timing exactly to whatever the roster dictates each week",
            ],
            correctIndex: 0,
            explanation:
              "Full consistency is impossible on a rotating roster, so the goal shifts to preserving a stable core block. Swinging fully back to days and out again repeats the insult rather than reducing it.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "Why does this course refuse to give a precise caffeine cut-off hour?",
            options: [
              "The circulating cut-off figures trace to a source this program could not verify",
              "Because caffeine timing has been shown to have no effect on sleep",
              "Because cut-off times are considered medical advice under state law",
              "Because the effect varies so much between individuals that no general timing guidance is possible at all",
            ],
            correctIndex: 0,
            explanation:
              "The verified meta-analysis quantifies caffeine's effects but the specific hour figures came from an unlocated source. Inventing precision is exactly what the program's verification rule forbids, so the guidance stays directional.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Which is the strongest entrainment cue a client actually controls?",
            options: [
              "Timing of light exposure, especially bright light early in the day",
              "Bedroom temperature maintained precisely through the night",
              "The exact hour they get into bed each evening",
              "Total daily step count accumulated before sunset",
            ],
            correctIndex: 0,
            explanation:
              "Light is the dominant zeitgeber, with meals, activity, and temperature acting as weaker cues. Bedtime cannot be forced, which is why the wake-time anchor plus light exposure lead the intervention list.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "A shift worker with eight years of nights asks about their heart risk. The coach should:",
            options: [
              "Coach the sleep and habits while routing the cardiometabolic risk to a physician",
              "Reassure them that the risk only applies to workers over sixty",
              "Calculate their excess risk from the meta-analysis and present the number",
              "Advise them to leave shift work immediately on health grounds",
            ],
            correctIndex: 0,
            explanation:
              "Elevated cardiometabolic risk is a medical matter needing screening and management. The sleep scheduling, light management, and habit work remain the coach's; computing personal risk or issuing career-ending advice does not.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What entrains the circadian clock, and by what route?",
            options: [
              "Light reaching specialised retinal cells, signalling the suprachiasmatic nucleus",
              "Melatonin release from the pineal gland, which resets the master clock directly",
              "Body temperature fluctuations detected by hypothalamic thermoreceptors",
              "Meal timing, which signals the clock through peripheral metabolic oscillators",
            ],
            correctIndex: 0,
            explanation:
              "Light is the dominant zeitgeber. Melatonin is downstream of the signal rather than the signal, and meals and temperature are weaker cues.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What do evening and morning light each do to the clock?",
            options: [
              "Evening light delays it; morning light advances it",
              "Evening light advances it; morning light delays it",
              "Both delay it, with evening light producing the larger shift",
              "Neither shifts the clock directly; both act by suppressing melatonin only",
            ],
            correctIndex: 0,
            explanation:
              "Phase delay and phase advance. It is the mechanism behind both coachable light instructions.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "Why does the lesson specify outdoor light in the morning?",
            options: [
              "Outdoor light is dramatically brighter than indoor lighting even on an overcast day",
              "Outdoor light contains wavelengths that indoor lighting filters out entirely",
              "Outdoor exposure is easier to build into a habit than indoor light therapy",
              "Outdoor light arrives at an angle that better reaches the relevant retinal cells",
            ],
            correctIndex: 0,
            explanation:
              "Intensity, and by a large margin. That is why 'go outside' outperforms 'turn on more lights' as an instruction.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "Why does this course avoid quoting magnitudes for light interventions?",
            options: [
              "The direction is well established; the precise magnitude comes from small trials the course does not quote",
              "Light interventions have not been tested in randomized designs",
              "The magnitude varies too much between individuals to be meaningful",
              "The measurements depend on equipment most clients do not have access to",
            ],
            correctIndex: 0,
            explanation:
              "Including blue-blocking glasses. Direction without magnitude is an honest position, and inventing precision is what the dossier rule forbids.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What does a consistent wake time do beyond entraining the clock?",
            options: [
              "It stabilises Process S by keeping the wake period constant",
              "It reduces the total sleep opportunity, which consolidates sleep",
              "It shifts melatonin onset earlier by a predictable amount each day",
              "It removes the need for a consistent bedtime entirely",
            ],
            correctIndex: 0,
            explanation:
              "Constant wake period means constant pressure accumulation. Bedtime follows from that; it cannot be forced.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What does the wake-time anchor tell a client to do after a bad night?",
            options: [
              "Get up at the usual time anyway",
              "Sleep in to recover the lost hours, then resume the schedule",
              "Nap in the early afternoon to offset the accumulated pressure",
              "Move the following night's bedtime earlier by the amount lost",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes the anchor an anchor: it survives the bad night, and getting up anyway is what pulls the system back into line.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "Where do meal timing, activity, and temperature sit as time cues?",
            options: [
              "Weaker entrainment signals, worth reaching for after wake time and light are in place",
              "Equal to light in entrainment strength, but harder for clients to control",
              "Ineffective as entrainment signals in humans, though present in animal models",
              "The primary signals for peripheral clocks, with light governing only the SCN",
            ],
            correctIndex: 0,
            explanation:
              "Refinements, not substitutes. The lesson is explicit that they come after the anchor and light exposure are actually in place rather than instead of them.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What is 'dim-light melatonin onset'?",
            options: [
              "The rise of melatonin under low light a couple of hours before habitual sleep",
              "The point at which ambient light falls below the threshold for melatonin suppression",
              "The delay between switching off lights and the onset of melatonin secretion",
              "The lowest light level at which melatonin production can still be measured",
            ],
            correctIndex: 0,
            explanation:
              "It marks biological night, which is why evening light that delays it delays everything downstream.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "How large was the caffeine meta-analysis, and what design did it pool?",
            options: [
              "22 controlled crossover trials with polysomnography, in 956 healthy adults",
              "22 observational cohort studies with actigraphy, in 956 healthy adults",
              "12 crossover trials with self-reported sleep diaries, in 785 adults",
              "153 studies of mixed design with polysomnography, in over five million participants",
            ],
            correctIndex: 0,
            explanation:
              "Crossover with polysomnography is a strong combination: each participant is their own control, measured by the gold standard.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What did acute caffeine do to sleep in those trials?",
            options: [
              "Cut total sleep by ~35 min, efficiency by 4.74%, slow-wave proportion by ~1 point, latency +~8 min",
              "Cut total sleep by ~8 min and lengthened latency by ~35 min, with efficiency unchanged",
              "Lengthened latency by ~8 minutes only, with no effect on duration, efficiency, or stages",
              "Cut total sleep by ~35 minutes and reduced REM proportion, with slow-wave sleep preserved",
            ],
            correctIndex: 0,
            explanation:
              "Four effects. REM proportion specifically was unaffected, which is the one stage that did NOT change.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Which sleep stage proportion did caffeine NOT affect?",
            options: [
              "REM",
              "Slow-wave sleep, which was preserved despite the reduction in total sleep",
              "N2, which absorbed the entire reduction in total sleep time",
              "N1, the transition stage, which is too brief to measure reliably",
            ],
            correctIndex: 0,
            explanation:
              "REM proportion was unaffected; slow-wave proportion fell by about a percentage point. That asymmetry is worth carrying precisely.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What did the trials find about high versus low caffeine doses?",
            options: [
              "Both reduced total sleep time and efficiency",
              "Only high doses reduced total sleep time; low doses affected latency only",
              "High doses reduced sleep; low doses improved efficiency slightly",
              "The dose-response was linear, with each increment producing proportional effects",
            ],
            correctIndex: 0,
            explanation:
              "Both. That removes the 'I only had one' defense as an escape from the effect.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "A client says evening coffee does not affect them because they fall asleep fine. What does the evidence say?",
            options: [
              "They have escaped the only part of the effect they can perceive",
              "Individual caffeine metabolism varies enough that they may be genuinely unaffected",
              "Falling asleep quickly after caffeine indicates unusually rapid clearance",
              "Their tolerance has reduced the effect to a level that no longer matters",
            ],
            correctIndex: 0,
            explanation:
              "Less total sleep, worse efficiency, and less deep sleep are not perceptible at the moment of falling asleep. Sleep onset is the one visible effect and the smallest of the four.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Why does this course refuse to give a precise caffeine cut-off hour?",
            options: [
              "The specific cut-offs in circulation trace to a source the program could not verify",
              "Individual variation makes any single cut-off inaccurate for most clients",
              "The trials measured acute dosing rather than habitual timing patterns",
              "Cut-off recommendations fall outside coaching scope as dietary prescription",
            ],
            correctIndex: 0,
            explanation:
              "Inventing precision is exactly what the dossier rule forbids. The verified effects plus caffeine's half-life justify 'move it earlier and test it' without a fabricated number.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What does alcohol do to sleep, and why do people misread it?",
            options: [
              "Shortens onset, then fragments the second half as it clears; the shortened onset is the visible part",
              "Deepens early sleep and lightens later sleep, with the net effect neutral",
              "Suppresses slow-wave sleep throughout the night without affecting onset",
              "Delays onset but consolidates the second half, producing a net improvement",
            ],
            correctIndex: 0,
            explanation:
              "The subjective experience is falling asleep easily and waking at 3 a.m. feeling wrecked, with autonomic activation and suppressed REM in between.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "For a client convinced alcohol is their sleep aid, what is the coaching move?",
            options: [
              "A two-week comparison they run themselves, rather than an argument",
              "Education about alcohol's effect on sleep architecture and REM suppression",
              "A gradual reduction plan, since abrupt cessation worsens sleep initially",
              "Referral, since alcohol use for sleep is a clinical rather than coaching matter",
            ],
            correctIndex: 0,
            explanation:
              "Not argument but a self-run experiment. It is the same move the tracking-holiday lesson uses, for the same reason: the result persuades better than the explanation.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What is a 'crossover trial'?",
            options: [
              "A design where each participant receives both conditions, serving as their own control",
              "A design in which participants switch groups partway through the study period",
              "A trial comparing two active treatments without a placebo arm",
              "A trial in which the intervention is withdrawn to test whether effects reverse",
            ],
            correctIndex: 0,
            explanation:
              "Own control, which removes between-person variation. It is why the caffeine evidence is unusually clean for this pillar.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What did the shift-work meta-analysis find for cardiovascular risk?",
            options: [
              "17 percent higher risk of any cardiovascular event, 26 percent higher coronary heart disease morbidity",
              "26 percent higher risk of any cardiovascular event, 17 percent higher coronary heart disease morbidity",
              "17 percent higher risk of any cardiovascular event, with coronary morbidity unchanged",
              "20 percent higher risk of any cardiovascular event and of cardiovascular mortality alike",
            ],
            correctIndex: 0,
            explanation:
              "17 percent for any event, 26 percent for coronary heart disease morbidity (1.26, 1.10 to 1.43). Mortality was about 20 percent higher, a third figure.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What shape does the shift-work dose-response take?",
            options: [
              "Non-linear: the increase appears only after the first five years, then adds ~7.1 percent per five years",
              "Linear from the first year of exposure, accumulating steadily thereafter",
              "Front-loaded: the largest increase occurs in the first two years and then plateaus",
              "U-shaped: risk rises early, falls with adaptation, then rises again after ten years",
            ],
            correctIndex: 0,
            explanation:
              "The authors say it 'seems to appear only after the first five years of exposure.' For a client two years in, that is neither an alarm nor an all-clear.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "How large was the shift-work meta-analysis?",
            options: [
              "21 studies, 173,010 participants",
              "153 studies, 5,172,710 participants",
              "22 trials, 956 participants",
              "137 cohorts, 5,134,036 participants",
            ],
            correctIndex: 0,
            explanation:
              "21 studies and 173,010 participants. The five-million figures belong to the short- and long-sleep duration meta-analyses.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What is 'anchor sleep,' and why does it suit shift workers?",
            options: [
              "A protected core sleep period held consistently, because full circadian consistency is impossible",
              "The longest sleep period in a rotating schedule, whenever it happens to fall",
              "Sleep taken immediately after a night shift, before daylight exposure",
              "A fixed eight-hour block scheduled around the most common shift pattern",
            ],
            correctIndex: 0,
            explanation:
              "The aim becomes preserving one stable block rather than chasing an alignment the roster forbids.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "How should light be managed around a night shift?",
            options: [
              "Bright during the shift, blocked on the commute home",
              "Blocked during the shift, bright on the commute home to signal wake time",
              "Bright at both ends, to maximize total exposure and stabilize the clock",
              "Blocked at both ends, to minimize circadian disruption from irregular timing",
            ],
            correctIndex: 0,
            explanation:
              "Blocking morning light on the commute prevents it dragging the clock the wrong way just as the worker is about to sleep.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What does the shift worker's daytime sleep environment usually require?",
            options: [
              "Equipment rather than intention",
              "A separate room used only for daytime sleep",
              "A shorter sleep period than a night sleeper would need",
              "Ambient noise to mask unpredictable daytime interruptions",
            ],
            correctIndex: 0,
            explanation:
              "Genuinely dark, cool, and quiet during daylight is an equipment problem: blackout, earplugs, cooling. Intention does not darken a room.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "Why are planned transitions on days off part of the shift-work plan?",
            options: [
              "Swinging fully back to a day schedule and back again is its own repeated insult",
              "Days off are when sleep debt is repaid, so they must be scheduled deliberately",
              "Transitions allow the circadian clock to reset fully before the next rotation",
              "Social obligations on days off would otherwise displace the anchor sleep period",
            ],
            correctIndex: 0,
            explanation:
              "The full swing and return is an additional circadian disruption on top of the shift itself, which is what planning it partially avoids.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "Where is the boundary in shift-work coaching?",
            options: [
              "Coaching the sleep and habits is yours; screening and managing cardiometabolic risk is medical",
              "Shift workers should be referred before any coaching begins, given the elevated risk",
              "Coaching is limited to education, since shift-work interventions require clinical oversight",
              "The boundary is the same as any other client, since shift work is a schedule rather than a condition",
            ],
            correctIndex: 0,
            explanation:
              "And the lesson adds that a shift worker with years of exposure should have that medical conversation regardless of how well their sleep is going.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "A client two years into night shifts asks whether they should be worried. What does the evidence support saying?",
            options: [
              "Neither an alarm nor an all-clear: a reason to build the habits now that make longer exposure survivable",
              "Their risk is already elevated by 17 percent and rising, so a schedule change is warranted",
              "There is no risk below five years, so the question can be revisited later",
              "Risk accumulates linearly, so two years carries roughly 40 percent of the five-year increase",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's exact framing. Reading 'appears after five years' as 'no risk below five' overstates a non-linear observational finding in the other direction.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What is 'circadian misalignment'?",
            options: [
              "A mismatch between the internal clock and the imposed sleep-wake schedule",
              "A drift of the internal clock away from a 24-hour period",
              "A discrepancy between homeostatic pressure and circadian timing on a given night",
              "A difference between a person's natural chronotype and their preferred schedule",
            ],
            correctIndex: 0,
            explanation:
              "The internal clock against the imposed schedule. It is the defining problem of shift work, which is why generic advice assuming a stable schedule helps least there.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What is 'phase delay'?",
            options: [
              "Shifting the clock later, which evening light produces",
              "Shifting the clock earlier, which evening light produces",
              "The lag between a zeitgeber and the clock's response to it",
              "The period during which the clock is unresponsive to light input",
            ],
            correctIndex: 0,
            explanation:
              "Later, from evening light. Morning light produces the opposite, a phase advance.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What is 'sleep fragmentation,' and which substance is characteristically associated with it?",
            options: [
              "Repeated brief awakenings breaking sleep into pieces; alcohol's second-half effect",
              "Repeated brief awakenings breaking sleep into pieces; caffeine's dominant effect",
              "Reduced time in deep sleep stages; alcohol's characteristic signature",
              "Difficulty initiating sleep after waking; caffeine's second-half effect",
            ],
            correctIndex: 0,
            explanation:
              "Alcohol, as it clears. Caffeine's measured effects were on total time, efficiency, slow-wave proportion, and latency rather than on fragmentation specifically.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Which claim about caffeine would this course refuse?",
            options: [
              "'Stop caffeine after 2 p.m. and your sleep will improve measurably'",
              "'Caffeine reduced total sleep by about 35 minutes in pooled crossover trials'",
              "'Both high and low doses cut total sleep time and efficiency'",
              "'Move your last dose earlier than you think, and test it for two weeks'",
            ],
            correctIndex: 0,
            explanation:
              "It invents a cut-off hour the program could not verify and promises a measurable individual result from a group finding. The other three are the verified position.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What is 'entrainment'?",
            options: ["The synchronising of the internal clock to external cues, principally light","The gradual drift of the clock without external cues","The alignment of sleep pressure with circadian timing","The training of a consistent sleep schedule over weeks"],
            correctIndex: 0,
            explanation: "Light is the dominant zeitgeber, with meals, activity, and temperature weaker.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What is 'phase advance'?",
            options: ["Shifting the clock earlier, which morning light produces","Shifting the clock later, which morning light produces","The speed at which the clock responds to a cue","Advancing bedtime ahead of the circadian signal"],
            correctIndex: 0,
            explanation: "Evening light produces the opposite, a phase delay.",
            sourceLessonSlug: "timing-and-light",
          },
          {
            prompt: "What is 'polysomnography'?",
            options: ["Laboratory sleep measurement with brain, eye, and muscle recording","Movement-based sleep estimation worn on the wrist","Sleep estimation from heart-rate variability","Self-reported sleep logging validated against devices"],
            correctIndex: 0,
            explanation: "The gold standard the caffeine crossover trials used and the reference trackers are judged against.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What is 'circadian misalignment'?",
            options: ["A mismatch between the internal clock and the imposed sleep-wake schedule","Drift of the clock away from a 24-hour period","A discrepancy between pressure and circadian timing on one night","A difference between chronotype and preferred schedule"],
            correctIndex: 0,
            explanation: "The defining problem of shift work, which is why generic advice assuming a stable schedule helps least there.",
            sourceLessonSlug: "shift-work",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-trackers-see",
      title: "12 · What your tracker can and cannot see",
      section: "Section 4 · Trackers and craft",
      body: `Almost every client with a sleep question arrives holding data. Knowing what that data is worth is a coaching skill in itself.

**The validation study to know.** Seven consumer sleep-tracking devices were tested against polysomnography. Epoch by epoch, **sensitivity for detecting sleep was high across all of them, at or above 0.93**. **Specificity for detecting wake was low to medium, between 0.18 and 0.54.** Sleep-stage comparisons were mixed and inconsistent, and, importantly, devices performed **worse on nights with poorer or more disrupted sleep** (Chinoy et al., 2021).

**Translate those two numbers.** High sensitivity for sleep means that when you are asleep, the device usually knows. Low specificity for wake means that when you are awake, it often thinks you are asleep, because lying still reads as sleeping. So devices systematically **overestimate how much you slept** and underestimate how long you were awake, and they do it worst on exactly the nights a struggling sleeper cares most about.

**And the stages are the weakest part.** The light, deep, and REM breakdown that clients screenshot and ask about is the least reliable output on the device. That is not a reason to throw the thing away; it is a reason to read the trend in total sleep and timing across weeks, and to ignore the nightly stage pie chart entirely.

**What to say to a client.** Your tracker is decent at telling roughly when you slept and for how long, across weeks. It is poor at telling you when you were awake, and its stage breakdown is not a measurement in the sense you are imagining. Use it as a diary that fills itself in, not as a verdict on the night.

:::reveal Give the two performance numbers for consumer trackers and translate each. ||| Sensitivity for sleep at or above 0.93, meaning when you are asleep the device usually knows. Specificity for wake between 0.18 and 0.54, meaning when you are awake it often scores you as asleep, because lying still looks like sleeping. The result is systematic overestimation of sleep.

:::reveal Which tracker output should a client ignore, and which should they watch? ||| Ignore the nightly stage breakdown, which is the least reliable output and gets worse on disrupted nights. Watch the multi-week trend in total sleep and in timing, which is what these devices are genuinely adequate for.

## Vocabulary
- **Polysomnography (PSG)**: laboratory sleep measurement with brain, eye, and muscle recording; the reference standard trackers are judged against.
- **Sensitivity**: the ability to correctly identify sleep when sleep is occurring; consumer devices score high.
- **Specificity**: the ability to correctly identify wake when awake; consumer devices score low, which is why they overestimate sleep.
- **Actigraphy**: movement-based sleep estimation, the research-grade method most consumer devices are built on and compared to.

## Sources
Chinoy, E. D., Cuellar, J. A., Huwa, K. E., et al. (2021). Performance of seven consumer sleep-tracking devices compared with polysomnography. *Sleep, 44*(5), zsaa291. https://pubmed.ncbi.nlm.nih.gov/33378539/`,
    },
    {
      slug: "orthosomnia",
      title: "13 · When the tracker becomes the problem",
      section: "Section 4 · Trackers and craft",
      body: `Sleep medicine has a name for a problem this program's own audience is unusually exposed to.

**Orthosomnia.** Clinicians described a pattern of patients seeking treatment for self-diagnosed sleep problems based on wearable data: people whose sleep was not obviously disordered, who had become preoccupied with achieving ideal tracker numbers, and for whom the pursuit itself was doing damage. The clinicians noted that patients often trusted the device's account of their night over validated measurement, and that the perfectionistic quest for optimal sleep can make sleep worse (Baron et al., 2017).

**Why it happens, mechanically.** Sleep is uniquely vulnerable to effort. Trying hard to sleep is anti-correlated with sleeping, which is the reason cognitive restructuring is part of CBT-I in the first place. A device that grades the attempt every morning supplies a fresh reason to worry about tonight, and lesson 12 already established that the grade is partly wrong, especially on bad nights.

**One caution about this evidence.** The source is a clinical perspective built on cases, not a validated instrument. There is no screening questionnaire with published cut-offs for orthosomnia, and any coach presenting one would be inventing a diagnostic tool. The concept is useful; the label is not yours to apply to anyone.

**Coaching it.** Notice the signals: distress that tracks the score rather than the night, a client who feels fine but reports sleeping badly "according to the app," bedtime behaviour organised around the metric. Then offer the experiment rather than the argument: two weeks with the sleep tracking turned off, judging sleep by how the days feel. Most people find that easier to hear as a test than as advice, and the result is usually its own persuasion.

:::reveal What is orthosomnia, and what is the honest limit of the evidence for it? ||| A described pattern of preoccupation with achieving perfect sleep-tracker numbers, where the pursuit itself worsens sleep and people trust the device over validated measurement. The limit: it comes from a clinical perspective piece built on cases, with no validated instrument and no published cut-offs, so it is a concept to recognise rather than a label to apply.

:::reveal Give the coaching move for a client whose sleep anxiety tracks their app score. ||| Offer an experiment rather than an argument: two weeks with tracking off, judging sleep by how the days actually feel. It lands as a test rather than as advice, and the result usually persuades better than any explanation of device error rates.

## Vocabulary
- **Orthosomnia**: preoccupation with achieving ideal sleep-tracker metrics, where the pursuit worsens the sleep it measures.
- **Perfectionistic sleep effort**: trying hard to sleep, which reliably interferes with sleeping and is a target of cognitive work in CBT-I.
- **Concept versus instrument**: the distinction that keeps this teachable; orthosomnia is a described phenomenon, not a scored diagnosis.
- **Tracking holiday**: the coaching experiment of switching the device off for a defined period and judging sleep subjectively.

## Sources
Baron, K. G., Abbott, S., Jao, N., Manalo, N., & Mullen, R. (2017). Orthosomnia: Are some patients taking the quantified self too far? *Journal of Clinical Sleep Medicine, 13*(2), 351-354. https://pubmed.ncbi.nlm.nih.gov/27855740/`,
      recallContent: [
        {
          prompt: "A client feels rested but is upset their app shows only 45 minutes of deep sleep. Answer using two lessons.",
          answer:
            "From lesson 12: the stage breakdown is the least reliable output the device produces, and it degrades further on disrupted nights, so that number is not a measurement in the sense they imagine. From lesson 13: distress tracking the score rather than the day is the orthosomnia pattern, and the move is a two-week tracking holiday judged by how the days feel.",
        },
      ],
    },
    {
      slug: "referral-on-sleep",
      title: "14 · Referral: the flags sleep produces",
      section: "Section 4 · Trackers and craft",
      body: `Sleep complaints conceal more medical conditions than any other pillar's, and several of them are dangerous while being easy to mistake for a habit problem.

**Breathing-related flags, which are the most commonly missed.** Reported snoring with witnessed pauses in breathing, gasping or choking awakenings, or persistent daytime sleepiness despite adequate time in bed. These raise the question of sleep apnea, which is common, underdiagnosed, and carries genuine cardiovascular consequences. No amount of sleep hygiene treats it, and coaching a client patiently through wind-down routines while this goes unassessed is a real failure. Refer for assessment.

**How common is it, actually?** Common enough that "underdiagnosed" understates it. Peppard and colleagues re-estimated prevalence in adults aged 30 to 70 using the Wisconsin Sleep Cohort, and found that **roughly 26 percent of adults in that age band have at least mild sleep-disordered breathing** (an apnea-hypopnea index of 5 or more with daytime sleepiness, or 15 or more regardless of symptoms), with prevalence having risen substantially over the two preceding decades alongside increasing obesity (Peppard et al., 2013).

Sit with the arithmetic. Roughly one in four adults in the age band that fills most coaching practices. If you coach sleep and have never referred anyone for a breathing assessment, that is not evidence your clients are unusual.

**The screening question, and its limit.** The instrument clinicians use for this is **STOP-BANG**: Snoring, Tiredness, Observed apneas, Pressure (hypertension), BMI, Age, Neck circumference, Gender. It is deliberately simple, and a coach can absolutely know it exists and know what it asks about, because that knowledge is what makes the referral specific rather than vague: "there is a short screening questionnaire your doctor can run" is more useful to a client than "you should probably get that looked at."

What a coach does NOT do is administer it and hand back a risk category. Scoring a validated clinical screening instrument and interpreting the result is assessment, which WELL-00 put outside the lane without qualification. The distinction is narrow and it is real: knowing the tool exists is education, running it is clinical work.

**Excessive daytime sleepiness on its own.** Falling asleep unintentionally, especially while driving, is urgent regardless of what the nights look like.

**Movement and behaviour during sleep.** Acting out dreams, violent movement, or repetitive leg movements reported by a partner belong to a clinician.

**Mood and mental health.** Early-morning waking with low mood, sleep loss accompanying hopelessness, or any suicidal content routes immediately to mental-health care with the crisis-line information from WELL-00. Sleep and mood run in both directions, and the sleep complaint is often the presenting edge of something else.

**Chronic insomnia itself.** Months of difficulty falling or staying asleep, with daytime consequences, in the absence of obvious behavioural causes. Refer for CBT-I, which is the treatment that works and which lesson 5 established is not yours.

**Substances and medication.** A client using alcohol or over-the-counter sleep aids to sleep, or one whose prescribed medication timing may be involved, needs a clinician's eyes rather than a coach's suggestions.

:::reveal Name the sleep flag this course calls the most commonly missed, and why it matters so much. ||| Breathing-related signs: snoring with witnessed pauses, gasping or choking awakenings, or daytime sleepiness despite adequate time in bed. It matters because sleep apnea is common, underdiagnosed, carries cardiovascular consequences, and is completely untouched by the hygiene coaching a client might otherwise receive for months.

:::reveal Why is a sleep complaint often the presenting edge of a mood problem? ||| Because sleep and mood influence each other in both directions, so a client may bring the sleep symptom while depression or anxiety is the larger picture. Early waking with low mood, or sleep loss alongside hopelessness, routes to mental-health care rather than to a wind-down routine.

## Vocabulary
- **Sleep apnea**: repeated breathing interruptions during sleep, common and underdiagnosed; suspected from snoring with pauses, gasping, or daytime sleepiness.
- **Sleep-disordered breathing prevalence**: roughly 26 percent of adults aged 30 to 70 have at least mild sleep-disordered breathing, which is why this flag is the one a coach meets most often.
- **Apnea-hypopnea index (AHI)**: events of stopped or reduced breathing per hour of sleep; the measure the prevalence thresholds of 5 and 15 refer to.
- **STOP-BANG**: the eight-item clinical screening instrument for sleep apnea (snoring, tiredness, observed apneas, pressure, BMI, age, neck, gender); a coach may know it exists and must not score it.
- **Excessive daytime sleepiness**: falling asleep unintentionally during the day, an urgent flag when it occurs while driving.
- **Parasomnia**: abnormal behaviour during sleep such as dream enactment, which belongs to clinical assessment.
- **Bidirectional relationship**: sleep and mood each affecting the other, which is why sleep complaints are frequently the visible edge of a mental-health issue.

## Sources
Peppard, P. E., Young, T., Barnet, J. H., Palta, M., Hagen, E. W., & Hla, K. M. (2013). Increased prevalence of sleep-disordered breathing in adults. *American Journal of Epidemiology, 177*(9), 1006-1014. https://pubmed.ncbi.nlm.nih.gov/23589584/`,
    },
    {
      slug: "quiz-trackers-and-craft",
      title: "15 · Knowledge check: trackers and craft",
      section: "Section 4 · Trackers and craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What were the two headline performance figures for consumer sleep trackers?",
            options: [
              "Sensitivity for sleep at or above 0.93; specificity for wake between 0.18 and 0.54",
              "Sensitivity for sleep between 0.18 and 0.54; specificity for wake at or above 0.93",
              "Sensitivity and specificity both above 0.90 for sleep-wake, with stages unreliable",
              "Sensitivity for sleep at 0.93 and specificity for wake at 0.85, both adequate for tracking",
            ],
            correctIndex: 0,
            explanation:
              "High sensitivity, low-to-medium specificity, across seven devices tested against polysomnography. The asymmetry is the whole finding.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Translate the low specificity for wake.",
            options: [
              "When you are awake it often scores you as asleep, because lying still reads as sleeping",
              "When you are asleep it often scores you as awake, because movement reads as waking",
              "It cannot distinguish wake from light sleep, so both are recorded as wake",
              "It underestimates total sleep, since brief awakenings are counted as full wake periods",
            ],
            correctIndex: 0,
            explanation:
              "Which means devices systematically OVERESTIMATE how much you slept and underestimate how long you were awake.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "On which nights do consumer trackers perform worst?",
            options: [
              "Nights with poorer or more disrupted sleep",
              "Nights with unusually long sleep duration, where drift accumulates",
              "Nights following alcohol, which alters the movement signature",
              "Nights when the device is worn on the non-dominant wrist",
            ],
            correctIndex: 0,
            explanation:
              "Exactly the nights a struggling sleeper cares most about, which is what makes the limitation practically significant rather than academic.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Which tracker output is the weakest?",
            options: [
              "The light, deep, and REM stage breakdown",
              "Total sleep duration, which drifts by more than an hour on some nights",
              "Sleep timing, which depends on the device correctly identifying onset",
              "Resting heart rate during sleep, which motion artifacts corrupt",
            ],
            correctIndex: 0,
            explanation:
              "Stage comparisons were mixed and inconsistent. It is the output clients most often screenshot and ask about, and the least reliable one on the device.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What should a client watch, and what should they ignore?",
            options: [
              "Watch the multi-week trend in total sleep and timing; ignore the nightly stage breakdown",
              "Watch the nightly stage breakdown for patterns; ignore single-night total sleep figures",
              "Watch the sleep-efficiency score; ignore both duration and stages",
              "Watch nothing, since the device is unreliable across every output it produces",
            ],
            correctIndex: 0,
            explanation:
              "Multi-week trend in duration and timing is what these devices are genuinely adequate for. That is not the same as throwing the thing away.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "How does the lesson tell a client to think of their tracker?",
            options: [
              "As a diary that fills itself in, not as a verdict on the night",
              "As a screening tool that flags nights worth discussing with a clinician",
              "As a measurement instrument whose accuracy improves with consistent wear",
              "As a motivational aid rather than a source of information about sleep",
            ],
            correctIndex: 0,
            explanation:
              "Diary rather than verdict. It preserves the useful function while removing the authority the device has not earned.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is 'sensitivity' in this validation context?",
            options: [
              "The ability to correctly identify sleep when sleep is occurring",
              "The ability to correctly identify wake when the person is awake",
              "The smallest change in sleep the device can reliably detect",
              "The device's responsiveness to movement during the night",
            ],
            correctIndex: 0,
            explanation:
              "Sleep detection when asleep, and consumer devices score high on it. Specificity is the wake-detection half, and it is where they fail.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is 'actigraphy'?",
            options: [
              "Movement-based sleep estimation, the research-grade method most consumer devices are built on",
              "Laboratory sleep measurement with brain, eye, and muscle recording",
              "Sleep estimation from heart-rate variability during the night",
              "Self-reported sleep logging validated against objective measurement",
            ],
            correctIndex: 0,
            explanation:
              "Movement-based, and the method consumer devices descend from. Brain, eye, and muscle recording is polysomnography, the reference standard.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is orthosomnia?",
            options: [
              "Preoccupation with achieving ideal sleep-tracker metrics, where the pursuit worsens the sleep",
              "A sleep disorder caused by excessive nighttime device use before bed",
              "Anxiety about sleep that develops independently of any tracking behavior",
              "The tendency of tracker users to sleep more than their bodies require",
            ],
            correctIndex: 0,
            explanation:
              "The pursuit itself doing damage is the defining feature, and clinicians noted patients often trusted the device over validated measurement.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "Why is sleep uniquely vulnerable to this pattern?",
            options: [
              "Trying hard to sleep is anti-correlated with sleeping",
              "Sleep is the only health behavior a device can measure while it happens",
              "Sleep quality varies more night to night than other behaviors, inviting overinterpretation",
              "Sleep cannot be verified subjectively, so device data has no competitor",
            ],
            correctIndex: 0,
            explanation:
              "Which is why cognitive restructuring is part of CBT-I in the first place. A device that grades the attempt every morning supplies a fresh reason to worry about tonight.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is the honest limit of the orthosomnia evidence?",
            options: [
              "It is a clinical perspective built on cases, with no validated instrument or published cut-offs",
              "It is a large cohort study whose findings have not been replicated",
              "It is a randomized trial of tracking versus no tracking with a small sample",
              "It is a consensus statement that has since been superseded",
            ],
            correctIndex: 0,
            explanation:
              "Concept useful, label not yours to apply. Any coach presenting a screening questionnaire for it would be inventing a diagnostic tool.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "Which signals suggest the orthosomnia pattern?",
            options: [
              "Distress tracking the score rather than the night; feeling fine but sleeping badly 'per the app'",
              "Consistently poor tracker scores despite good sleep hygiene practices",
              "Reluctance to discuss tracker data with the coach during sessions",
              "Frequent changes between different tracking devices and applications",
            ],
            correctIndex: 0,
            explanation:
              "Plus bedtime behavior organised around the metric. All three are observations about the relationship to the number rather than about the sleep.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is the coaching move for a client whose sleep anxiety tracks their app score?",
            options: [
              "Offer a two-week tracking holiday, judged by how the days feel",
              "Explain the device's error rates so the client discounts the score appropriately",
              "Set a target score the client can realistically achieve, to rebuild confidence",
              "Refer to a clinician, since the anxiety is now the primary presenting problem",
            ],
            correctIndex: 0,
            explanation:
              "Experiment rather than argument. Most people find that easier to hear as a test than as advice, and the result is usually its own persuasion.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'perfectionistic sleep effort'?",
            options: [
              "Trying hard to sleep, which reliably interferes with sleeping",
              "Maintaining an unusually strict sleep schedule regardless of circumstances",
              "Optimizing every environmental variable in the bedroom",
              "Pursuing the highest possible sleep score on a tracking device",
            ],
            correctIndex: 0,
            explanation:
              "Effort applied to sleep is counterproductive in a way effort applied to other health behaviors is not. It is a target of the cognitive work in CBT-I.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "Which flags does this course call the most commonly missed?",
            options: [
              "Snoring with witnessed pauses, gasping or choking awakenings, daytime sleepiness despite adequate time in bed",
              "Early-morning waking with low mood, which is mistaken for a circadian problem",
              "Repetitive leg movements reported by a partner, which are rarely volunteered",
              "Use of over-the-counter sleep aids, which clients do not consider medication",
            ],
            correctIndex: 0,
            explanation:
              "Breathing-related. No amount of sleep hygiene treats apnea, and coaching a client patiently through wind-down routines while it goes unassessed is a real failure.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What proportion of adults aged 30 to 70 have at least mild sleep-disordered breathing?",
            options: [
              "Roughly 26 percent",
              "Roughly 5 percent",
              "Roughly 12 percent",
              "Roughly 45 percent",
            ],
            correctIndex: 0,
            explanation:
              "Roughly one in four adults in the age band that fills most coaching practices. If you coach sleep and have never referred anyone for a breathing assessment, that is not evidence your clients are unusual.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What thresholds did the prevalence estimate use?",
            options: [
              "An apnea-hypopnea index of 5 or more with daytime sleepiness, or 15 or more regardless of symptoms",
              "An apnea-hypopnea index of 15 or more with daytime sleepiness, or 30 or more regardless",
              "An apnea-hypopnea index of 5 or more, with symptoms not considered",
              "Any witnessed apnea reported by a partner, confirmed by overnight recording",
            ],
            correctIndex: 0,
            explanation:
              "Two routes to the threshold: a lower index with symptoms, or a higher index without. Prevalence had also risen substantially over the two preceding decades alongside increasing obesity.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What does STOP-BANG stand for?",
            options: [
              "Snoring, Tiredness, Observed apneas, Pressure, BMI, Age, Neck circumference, Gender",
              "Snoring, Timing, Onset, Position, Breathing, Apnea, Nocturia, Gasping",
              "Sleepiness, Tiredness, Obesity, Pressure, Breathing, Awakenings, Nocturia, Gender",
              "Snoring, Tiredness, Obstruction, Pauses, BMI, Airway, Neck, Gasping",
            ],
            correctIndex: 0,
            explanation:
              "Eight items, deliberately simple. Knowing what it asks about is what makes a referral specific rather than vague.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What may a coach do with STOP-BANG, and what may they not?",
            options: [
              "Know it exists and what it asks; not administer it and hand back a risk category",
              "Administer it and refer based on the score; not interpret the result clinically",
              "Neither know nor mention it, since clinical instruments are outside coaching entirely",
              "Administer it with the client's consent, provided the score is shared with their physician",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the tool exists is education; running it is clinical work. Scoring a validated screening instrument and interpreting the result is assessment, which WELL-00 put outside the lane without qualification.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why is knowing STOP-BANG exists useful to a coach at all?",
            options: [
              "'There is a short screening questionnaire your doctor can run' beats 'you should get that looked at'",
              "It allows the coach to judge whether a referral is likely to be productive",
              "It gives the coach a structured way to document their observations",
              "It demonstrates clinical literacy, which increases the client's trust in the referral",
            ],
            correctIndex: 0,
            explanation:
              "Specificity in the referral is the value. The client arrives at the appointment knowing what to ask for, which materially raises the chance the assessment happens.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Which sleep flag is urgent regardless of what the nights look like?",
            options: [
              "Falling asleep unintentionally, especially while driving",
              "Snoring with witnessed pauses in breathing",
              "Difficulty falling asleep persisting for more than three months",
              "Waking repeatedly through the night without an identifiable cause",
            ],
            correctIndex: 0,
            explanation:
              "Excessive daytime sleepiness on its own, and driving makes it urgent. The others are genuine flags without the same immediacy.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Which findings belong to a clinician under 'movement and behaviour during sleep'?",
            options: [
              "Acting out dreams, violent movement, or repetitive leg movements reported by a partner",
              "Restlessness in the first hour of sleep, reported by the client on waking",
              "Sleep talking and occasional teeth grinding, both common and benign",
              "Difficulty finding a comfortable position, which suggests an environment problem",
            ],
            correctIndex: 0,
            explanation:
              "Three parasomnia-type observations. Note that all three are typically reported by a partner rather than by the client.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why is a sleep complaint often the presenting edge of a mood problem?",
            options: [
              "Sleep and mood run in both directions, so the client brings the sleep symptom",
              "Mood problems always disrupt sleep, while sleep problems rarely affect mood",
              "Clients find sleep complaints easier to raise than mood complaints",
              "Sleep is measurable and mood is not, so the sleep symptom is what gets noticed",
            ],
            correctIndex: 0,
            explanation:
              "Bidirectional. Early-morning waking with low mood, or sleep loss alongside hopelessness, routes to mental-health care rather than to a wind-down routine.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What defines chronic insomnia as a referral trigger?",
            options: [
              "Months of difficulty falling or staying asleep, with daytime consequences, absent obvious behavioural causes",
              "Any difficulty sleeping that persists after a month of consistent hygiene practice",
              "Difficulty falling asleep on more than half of nights over a two-week period",
              "Sleep dissatisfaction reported by the client regardless of measured duration",
            ],
            correctIndex: 0,
            explanation:
              "Three components: duration, daytime consequences, and the absence of behavioural explanations. Refer for CBT-I, the treatment that works and that lesson 5 established is not yours.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "A client using over-the-counter sleep aids to sleep needs what?",
            options: [
              "A clinician's eyes rather than a coach's suggestions",
              "Education about the tolerance and rebound effects of those medications",
              "A tapering plan the coach designs and monitors over several weeks",
              "Substitution with a behavioral wind-down routine before any referral",
            ],
            correctIndex: 0,
            explanation:
              "Same for alcohol used to sleep, and for prescribed medication whose timing may be involved. Suggesting substitutions is the coaching instinct this flag exists to interrupt.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "A client feels rested but is upset their app shows 45 minutes of deep sleep. Which two lessons answer?",
            options: [
              "Lesson 12: stages are the least reliable output. Lesson 13: distress tracking the score is the orthosomnia pattern",
              "Lesson 12: trackers underestimate deep sleep specifically. Lesson 13: the client should stop tracking permanently",
              "Lesson 5: only a clinician can interpret sleep architecture. Lesson 13: the app should be recalibrated",
              "Lesson 2: deep sleep is front-loaded so 45 minutes is normal. Lesson 12: the device is accurate",
            ],
            correctIndex: 0,
            explanation:
              "The stage breakdown is not a measurement in the sense they imagine, and it degrades further on disrupted nights. The move is a two-week tracking holiday judged by how the days feel.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "A client reports loud snoring, witnessed pauses, and daytime sleepiness despite eight hours in bed. What do you do?",
            options: [
              "Refer for breathing assessment, naming that a short screening questionnaire exists",
              "Coach wind-down and sleep-environment improvements first, and refer if they do not help",
              "Advise weight loss, since BMI is a component of the screening instrument",
              "Track the pattern for four weeks to establish whether it is consistent before referring",
            ],
            correctIndex: 0,
            explanation:
              "The most commonly missed flag, in a condition affecting roughly a quarter of adults in this age band. Coaching hygiene while it goes unassessed is the failure the lesson names.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What is a 'tracking holiday'?",
            options: [
              "Switching the device off for a defined period and judging sleep subjectively",
              "Pausing tracking during travel or unusual schedules to avoid misleading data",
              "Reviewing accumulated data without collecting new readings for a period",
              "Alternating tracked and untracked weeks to compare the two",
            ],
            correctIndex: 0,
            explanation:
              "Defined period, subjective judgment. It is offered as an experiment the client runs, which is what makes it land as a test rather than as advice.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'concept versus instrument,' and why does it keep orthosomnia teachable?",
            options: [
              "Orthosomnia is a described phenomenon, not a scored diagnosis, so it is recognised rather than applied",
              "The concept is validated even though no instrument exists to measure it",
              "Instruments require clinical training, while concepts can be taught to any client",
              "The concept came first and the instrument is currently under development",
            ],
            correctIndex: 0,
            explanation:
              "Recognise, do not label. It is the same discipline as 'describe, do not label' from WELL-04, applied to a phenomenon with no validated measure behind it.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'sensitivity' in the tracker validation?",
            options: ["Correctly identifying sleep when sleep is occurring","Correctly identifying wake when the person is awake","The smallest detectable change in sleep","The device's responsiveness to movement"],
            correctIndex: 0,
            explanation: "Consumer devices score high on it. Specificity is the wake-detection half, and it is where they fail.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is 'actigraphy'?",
            options: ["Movement-based sleep estimation, the method most consumer devices descend from","Laboratory recording of brain, eye, and muscle activity","Sleep estimation from heart-rate variability overnight","Self-reported logging validated against objective measures"],
            correctIndex: 0,
            explanation: "Research-grade movement estimation, distinct from polysomnography, which is the reference standard.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "How should a client think of their tracker?",
            options: ["As a diary that fills itself in, not as a verdict on the night","As a screening tool flagging nights to discuss clinically","As a measurement instrument improving with consistent wear","As a motivational aid rather than a data source"],
            correctIndex: 0,
            explanation: "It preserves the useful function while removing the authority the device has not earned.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "How many devices were tested against polysomnography?",
            options: ["Seven","Three","Twelve","Twenty"],
            correctIndex: 0,
            explanation: "Seven consumer sleep-tracking devices, epoch by epoch.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Which signals suggest the orthosomnia pattern?",
            options: ["Distress tracking the score; feeling fine but sleeping badly 'per the app'; bedtime organised around the metric","Consistently poor scores despite good hygiene","Reluctance to discuss tracker data in session","Frequent switching between tracking devices"],
            correctIndex: 0,
            explanation: "All are observations about the relationship to the number rather than about the sleep.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'perfectionistic sleep effort'?",
            options: ["Trying hard to sleep, which reliably interferes with sleeping","Maintaining a strict schedule regardless of circumstances","Optimising every bedroom variable","Pursuing the highest possible tracker score"],
            correctIndex: 0,
            explanation: "Effort applied to sleep is counterproductive in a way effort applied to other behaviours is not, which is why cognitive work targets it.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'concept versus instrument', and why does it keep orthosomnia teachable?",
            options: ["It is a described phenomenon, not a scored diagnosis, so it is recognised rather than applied","The concept is validated even without an instrument","Instruments need training; concepts can be taught to clients","The concept came first and an instrument is in development"],
            correctIndex: 0,
            explanation: "The same discipline as 'describe, do not label' from WELL-04, applied to a phenomenon with no validated measure behind it.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is a 'tracking holiday'?",
            options: ["Switching the device off for a defined period and judging sleep subjectively","Pausing tracking during travel to avoid misleading data","Reviewing accumulated data without collecting more","Alternating tracked and untracked weeks to compare"],
            correctIndex: 0,
            explanation: "Offered as an experiment the client runs, which is what makes it land as a test rather than as advice.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What thresholds did the sleep-disordered-breathing prevalence estimate use?",
            options: ["AHI of 5 or more with daytime sleepiness, or 15 or more regardless of symptoms","AHI of 15 or more with sleepiness, or 30 or more regardless","AHI of 5 or more, with symptoms not considered","Any partner-witnessed apnea confirmed by recording"],
            correctIndex: 0,
            explanation: "Two routes to the threshold. Prevalence had also risen substantially over the preceding two decades alongside increasing obesity.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What does STOP-BANG stand for?",
            options: ["Snoring, Tiredness, Observed apneas, Pressure, BMI, Age, Neck, Gender","Snoring, Timing, Onset, Position, Breathing, Apnea, Nocturia, Gasping","Sleepiness, Tiredness, Obesity, Pressure, Breathing, Awakenings, Nocturia, Gender","Snoring, Tiredness, Obstruction, Pauses, BMI, Airway, Neck, Gasping"],
            correctIndex: 0,
            explanation: "Eight items, deliberately simple. Knowing what it asks about is what makes a referral specific rather than vague.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why is knowing STOP-BANG exists useful to a coach?",
            options: ["'There is a short questionnaire your doctor can run' beats 'you should get that looked at'","It lets the coach judge whether referral is likely to be productive","It gives a structured way to document observations","It demonstrates clinical literacy, raising client trust"],
            correctIndex: 0,
            explanation: "The client arrives at the appointment knowing what to ask for, which materially raises the chance the assessment happens.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Which findings belong to a clinician under movement during sleep?",
            options: ["Acting out dreams, violent movement, repetitive leg movements reported by a partner","Restlessness in the first hour, reported on waking","Sleep talking and occasional teeth grinding","Difficulty finding a comfortable position"],
            correctIndex: 0,
            explanation: "All three are typically reported by a partner rather than by the client.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What defines chronic insomnia as a referral trigger?",
            options: ["Months of difficulty, daytime consequences, absent obvious behavioural causes","Any difficulty persisting after a month of hygiene practice","Difficulty on more than half of nights over two weeks","Sleep dissatisfaction regardless of measured duration"],
            correctIndex: 0,
            explanation: "Three components. Refer for CBT-I, the treatment that works and that lesson 5 established is not yours.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "A client uses over-the-counter sleep aids nightly. What do they need?",
            options: ["A clinician's eyes rather than a coach's suggestions","Education about tolerance and rebound effects","A tapering plan the coach designs and monitors","Substitution with a wind-down routine before referral"],
            correctIndex: 0,
            explanation: "Same for alcohol used to sleep and for prescribed medication timing. Suggesting substitutions is the instinct this flag interrupts.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why is a sleep complaint often the presenting edge of a mood problem?",
            options: ["Sleep and mood run in both directions, so the client brings the sleep symptom","Mood problems always disrupt sleep while sleep rarely affects mood","Clients find sleep easier to raise than mood","Sleep is measurable and mood is not"],
            correctIndex: 0,
            explanation: "Early waking with low mood, or sleep loss alongside hopelessness, routes to mental-health care rather than a wind-down routine.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "On which nights do trackers perform worst?",
            options: ["Nights with poorer or more disrupted sleep","Nights with unusually long duration","Nights following alcohol","Nights worn on the non-dominant wrist"],
            correctIndex: 0,
            explanation: "Exactly the nights a struggling sleeper cares most about, which makes the limitation practically significant rather than academic.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Why is the honest reading of orthosomnia's evidence a narrow one?",
            options: ["A clinical perspective built on cases, with no instrument and no published cut-offs","A single trial too small to establish prevalence","An observational study without a comparison group","A survey with self-selected respondents"],
            correctIndex: 0,
            explanation: "The concept is useful; the label is not yours to apply to anyone.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "A client feels rested but is upset about 45 minutes of deep sleep. Which two lessons answer?",
            options: ["Stages are the least reliable output; distress tracking the score is the orthosomnia pattern","Trackers underestimate deep sleep; they should stop tracking permanently","Only a clinician can interpret architecture; the app needs recalibration","Deep sleep is front-loaded so 45 minutes is normal; the device is accurate"],
            correctIndex: 0,
            explanation: "The stage breakdown is not a measurement in the sense they imagine, and it degrades on disrupted nights. The move is a two-week tracking holiday.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What is 'excessive daytime sleepiness' as a flag?",
            options: ["Falling asleep unintentionally during the day; urgent when it occurs while driving","Feeling tired despite adequate sleep opportunity","Needing a nap most afternoons","Waking unrefreshed more than three days weekly"],
            correctIndex: 0,
            explanation: "Unintentional sleep onset is the defining feature, and driving is what makes it urgent regardless of what the nights look like.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What is 'specificity' in the tracker validation, and why does it matter most?",
            options: ["Correctly identifying wake; low scores mean devices overestimate sleep","Correctly identifying sleep; low scores mean devices underestimate sleep","The proportion of nights scored accurately overall","The device's precision in timing sleep onset"],
            correctIndex: 0,
            explanation: "Between 0.18 and 0.54, because lying still reads as sleeping. That asymmetry is the whole finding.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is 'parasomnia'?",
            options: ["Abnormal behaviour during sleep, such as dream enactment","Difficulty initiating or maintaining sleep","Excessive sleepiness despite adequate opportunity","Breathing interruption during sleep"],
            correctIndex: 0,
            explanation: "It belongs to clinical assessment, and it is typically reported by a partner rather than noticed by the client.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What is the 'apnea-hypopnea index'?",
            options: ["Events of stopped or reduced breathing per hour of sleep","The proportion of the night spent with reduced oxygen saturation","A composite score from the STOP-BANG items","The ratio of apneas to hypopneas across a night"],
            correctIndex: 0,
            explanation: "The measure the prevalence thresholds of 5 and 15 refer to.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why does the mental-health flag list include early-morning waking specifically?",
            options: ["Early waking with low mood is a recognised presenting pattern routing to mental-health care","Early waking indicates a circadian phase advance requiring light therapy","Early waking is the most common insomnia subtype","Early waking predicts sleep apnea more strongly than other patterns"],
            correctIndex: 0,
            explanation: "Sleep and mood run in both directions, and the sleep complaint is often the visible edge of something larger.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Why does the course pair the tracker lesson with the orthosomnia lesson?",
            options: ["The device's grade is partly wrong AND the grading itself can worsen sleep","Both concern devices, so they belong in the same section",
             "Orthosomnia is caused by inaccurate devices specifically","The tracker lesson establishes the error rates orthosomnia depends on"],
            correctIndex: 0,
            explanation: "Lesson 12 establishes the number is unreliable, especially on bad nights; lesson 13 establishes that attending to it can make the thing worse.",
            sourceLessonSlug: "orthosomnia",
          },
        ],
      },
    },
    {
      slug: "final-sleep",
      title: "15 · Final: sleep",
      section: "Section 4 · Trackers and craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The central scope tension of this pillar is that:",
            options: [
              "The effective treatment requires clinical licensure while the available one is not recommended alone for insomnia",
              "Sleep coaching by non-clinicians is prohibited outright in most United States jurisdictions by statute",
              "Sleep hygiene works better than CBT-I but is harder for coaches to deliver",
              "No behavioral treatment for insomnia has been shown to work at all",
            ],
            correctIndex: 0,
            explanation:
              "CBT-I holds a STRONG recommendation and requires clinical delivery; sleep hygiene as a single component holds the guideline's only recommendation AGAINST, and it is the piece most available to coaches.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "Good sleep requires alignment between:",
            options: [
              "Homeostatic sleep pressure and the circadian rhythm",
              "Slow-wave sleep duration and total REM percentage",
              "Melatonin concentration and core body temperature maxima",
              "Bedtime consistency and total weekly sleep debt repayment",
            ],
            correctIndex: 0,
            explanation:
              "Process S, the pressure building with time awake, and Process C, the internal clock. Most sleep complaints in healthy people are alignment failures, which is why an early bedtime alone often changes nothing.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Short sleep carried a mortality risk ratio of 1.12; long sleep carried 1.39. The course teaches that:",
            options: [
              "Long sleep is a marker with causality left open, so a healthy long sleeper is left alone",
              "Long sleep is more dangerous and should be actively shortened in clients",
              "Both associations are equally causal and equally actionable in an individual coaching client",
              "Neither association reached statistical significance in the meta-analyses",
            ],
            correctIndex: 0,
            explanation:
              "The long-sleep authors explicitly ask whether the relationship is causal and modifiable. Illness and undiagnosed disorders lengthen sleep, so reverse causation is live and shortening a well-functioning long sleeper has no support.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "CBT-I's meta-analysis showed clear improvements in latency, wake after sleep onset, and efficiency, but not in:",
            options: [
              "Total sleep time",
              "Sleep onset latency at follow-up",
              "Adverse event rates",
              "Sleep efficiency beyond three months",
            ],
            correctIndex: 0,
            explanation:
              "Total sleep time improved 7.61 minutes with a CI crossing zero. The treatment consolidates sleep rather than lengthening it, which is the expectation to set with a client before they start.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "The AASM guideline recommendation with STRONG strength is for:",
            options: [
              "Multicomponent cognitive behavioral therapy for insomnia",
              "Sleep hygiene education delivered as a standalone intervention",
              "Relaxation therapy used as a single-component treatment",
              "Pharmacological treatment ahead of behavioral approaches",
            ],
            correctIndex: 0,
            explanation:
              "Multicomponent CBT-I holds the strong recommendation. Brief therapies, stimulus control, sleep restriction, and relaxation are conditional; sleep hygiene alone carries the one recommendation against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Which client is a coaching case rather than a referral?",
            options: [
              "Someone sleeping badly since starting a rotating roster six weeks ago",
              "Someone with four months of unexplained sleep difficulty and daytime consequences",
              "Someone whose partner reports gasping awakenings and loud snoring",
              "Someone falling asleep unintentionally while driving home from work",
            ],
            correctIndex: 0,
            explanation:
              "The roster explains the disruption, making it behavioural and coachable. Unexplained persistence is chronic insomnia territory, gasping and snoring raise sleep apnea, and unintentional sleep while driving is urgent.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Consumer trackers systematically overestimate sleep because:",
            options: [
              "Specificity for wake is low, so lying still awake is scored as sleeping",
              "Sensitivity for sleep is low, so real sleep goes undetected",
              "They round total sleep time upward by design for user satisfaction",
              "Their heart-rate sensors cannot function during periods of wakefulness",
            ],
            correctIndex: 0,
            explanation:
              "Sensitivity for sleep is at or above 0.93 while specificity for wake sits between 0.18 and 0.54, so quiet wakefulness gets scored as sleep. Devices also degrade further on disrupted nights.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Which tracker output does this course tell clients to disregard?",
            options: [
              "The nightly light, deep, and REM stage breakdown",
              "The multi-week trend in total sleep time",
              "The recorded time of sleep onset across weeks",
              "The consistency of the wake time from day to day",
            ],
            correctIndex: 0,
            explanation:
              "Stage classification is the least reliable output and the one clients fixate on. Trends in duration and timing across weeks are what these devices do adequately.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Orthosomnia should be treated by a coach as:",
            options: [
              "A described phenomenon worth recognising, not a diagnosis to apply or score",
              "A validated diagnosis with published screening cut-offs to administer",
              "Proof that sleep trackers should never be used by any client",
              "A subtype of chronic insomnia disorder listed in clinical criteria",
            ],
            correctIndex: 0,
            explanation:
              "It comes from a clinical perspective built on cases. There is no validated instrument or published cut-off, so a coach recognising the pattern and offering a tracking holiday is appropriate; labelling or scoring anyone is not.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "The verified caffeine effects include all of the following EXCEPT:",
            options: [
              "A significant reduction in the proportion of REM sleep",
              "A reduction of about 35 minutes in total sleep time",
              "A 4.74 percent reduction in sleep efficiency",
              "About 8 minutes longer to fall asleep",
            ],
            correctIndex: 0,
            explanation:
              "REM proportion was unaffected in the pooled crossover trials. Total sleep time, efficiency, slow-wave proportion, and onset latency all moved.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Shift-work cardiovascular risk in the meta-analysis:",
            options: [
              "Appeared only after five years, then rose about 7.1 percent per further five years",
              "Was present immediately on starting shift work and rose linearly with every additional month worked",
              "Applied only to permanent night workers, not rotating shifts",
              "Disappeared after adjustment for sleep duration and diet quality",
            ],
            correctIndex: 0,
            explanation:
              "The authors describe a non-linear association appearing after the first five years of exposure, with 17 percent higher risk of any CVD event and 26 percent higher coronary heart disease morbidity overall.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "A client insists alcohol helps them sleep. The best coaching response is:",
            options: [
              "Offer a two-week self-run comparison rather than an argument about the evidence",
              "Tell them the belief is simply wrong and cite the fragmentation research",
              "Agree, since alcohol does shorten sleep onset latency measurably",
              "Refer them immediately for substance-use assessment",
            ],
            correctIndex: 0,
            explanation:
              "Alcohol genuinely shortens onset, which is why the belief forms, then fragments the second half of the night. A self-run comparison persuades where contradiction does not, and referral is for dependence rather than for a belief about sleep aid.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Why does this course anchor on wake time rather than bedtime?",
            options: [
              "It is controllable and entrains the clock, whereas sleep onset cannot be forced",
              "Because bedtime consistency has no measurable relationship with sleep quality in healthy adults",
              "Because wake time determines total sleep duration on its own",
              "Because guidelines prohibit coaches from advising on bedtimes",
            ],
            correctIndex: 0,
            explanation:
              "A client can decide when to get up; nobody can decide when to fall asleep. A fixed rise time entrains the circadian system, stabilises sleep pressure, and survives a bad night.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "A client reports loud snoring, witnessed breathing pauses, and daytime sleepiness despite eight hours in bed. The coach should:",
            options: [
              "Refer for assessment, because no amount of hygiene coaching treats this",
              "Coach a stricter wind-down routine and reassess how it is going in about six weeks",
              "Recommend a tracking holiday to reduce sleep-related anxiety",
              "Advise reducing time in bed to consolidate the sleep they get",
            ],
            correctIndex: 0,
            explanation:
              "That triad raises sleep apnea, which is common, underdiagnosed, carries cardiovascular consequences, and is untouched by behavioural coaching. Sleep restriction in particular would be improvising the risky component of a treatment the coach cannot deliver.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "State this pillar's central tension.",
            options: [
              "The treatment that works is not yours; what you can deliver is advised against alone",
              "The treatment that works is unavailable; the alternatives have no evidence",
              "The evidence is strong but clients rarely comply with the behaviours",
              "Sleep problems are common but their causes require diagnostic tools",
            ],
            correctIndex: 0,
            explanation: "CBT-I requires clinical licensure. Sleep hygiene alone is the AASM's only recommendation AGAINST anything for chronic insomnia.",
            sourceLessonSlug: "the-sleep-pillar",
          },
          {
            prompt: "Name the two processes governing sleep, and which one 'go to bed earlier' fails to address.",
            options: [
              "Process S (pressure) and Process C (circadian); earlier bedtime misses alignment",
              "Process S and Process C; earlier bedtime does not address accumulated pressure",
              "Sleep pressure and sleep drive; earlier bedtime addresses neither",
              "Circadian and ultradian rhythms; earlier bedtime disrupts the ultradian cycle",
            ],
            correctIndex: 0,
            explanation: "Most sleep complaints in healthy people are an alignment failure, not a pressure failure, which is why adding pressure does nothing.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "Why does cutting the last ninety minutes cost REM rather than deep sleep?",
            options: [
              "REM is back-loaded, lengthening across the final third",
              "REM requires a longer continuous period to initiate",
              "Deep sleep is prioritised when total sleep is reduced",
              "REM is more easily disrupted by an alarm",
            ],
            correctIndex: 0,
            explanation: "Slow-wave sleep dominates the first third. The mirror observation follows: an early bedtime with a 3 a.m. waking still delivers most of the deep sleep.",
            sourceLessonSlug: "architecture-and-processes",
          },
          {
            prompt: "What are the short-sleep and long-sleep mortality risk ratios, and why are they read differently?",
            options: [
              "1.12 and 1.39; long sleep is a marker whose causality is left open",
              "1.39 and 1.12; short sleep is the marker and long sleep the cause",
              "Both 1.12, with the difference lying in the other outcomes measured",
              "1.12 and 1.39, both established as causal in the meta-regressions",
            ],
            correctIndex: 0,
            explanation: "Illness, depression, and undiagnosed sleep disorders all lengthen sleep. Nobody has shown a healthy nine-hour sleeper improves anything by setting an alarm.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "A healthy client sleeps nine hours and feels great. What does the course say?",
            options: [
              "Leave it alone; a recent INCREASE in sleep need goes to a clinician",
              "Reduce gradually toward the 7-to-9 band, since nine is at the limit",
              "Investigate for an undiagnosed sleep disorder, since long sleep is a marker",
              "Recommend a sleep study, since nine exceeds the consensus recommendation",
            ],
            correctIndex: 0,
            explanation: "No evidence supports shortening a well-functioning sleeper's night, and the long-sleep association has not been shown causal or modifiable.",
            sourceLessonSlug: "how-much-sleep",
          },
          {
            prompt: "Name CBT-I's three core components and what each targets.",
            options: [
              "Stimulus control (bed as cue), sleep restriction (compress time), cognitive restructuring (beliefs)",
              "Sleep hygiene (habits), relaxation (arousal), stimulus control (environment)",
              "Sleep restriction (duration), light therapy (circadian), cognitive work (beliefs)",
              "Stimulus control (environment), relaxation (arousal), education (knowledge)",
            ],
            correctIndex: 0,
            explanation: "Relaxation training and hygiene education ride along as supporting components. Sleep restriction is the sharp edge and the reason delivery sits with clinicians.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "What did CBT-I deliver, and what did it NOT?",
            options: [
              "Latency -19 min, WASO -26 min, efficiency +9.91; total sleep time not significant",
              "Total sleep time +26 min; efficiency and latency both non-significant",
              "All four outcomes improved significantly and were sustained",
              "Efficiency improved only; latency and WASO were unchanged",
            ],
            correctIndex: 0,
            explanation: "It does not primarily make people sleep more. It makes sleep faster to arrive, less broken, and less frightening.",
            sourceLessonSlug: "what-cbt-i-is",
          },
          {
            prompt: "Which AASM recommendation is STRONG, and which is the only one against anything?",
            options: [
              "Strong: multicomponent CBT-I. Against: sleep hygiene as a single component",
              "Strong: stimulus control. Against: multicomponent brief therapies",
              "Strong: sleep restriction. Against: relaxation training alone",
              "Strong: multicomponent CBT-I. Against: pharmacotherapy as first line",
            ],
            correctIndex: 0,
            explanation: "The strongest recommendation needs clinical delivery; the only negative one targets the component most available to non-clinicians. Not an accident of drafting.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Does the guideline make sleep hygiene worthless for coaching?",
            options: [
              "No; it addresses treatment of a diagnosed disorder, and most coaching clients do not have one",
              "Yes; the recommendation against applies in all populations",
              "Yes for insomnia and for disrupted sleep alike",
              "No; the recommendation was downgraded in later revisions",
            ],
            correctIndex: 0,
            explanation: "Two firm consequences: never present hygiene as treatment to someone with insomnia, and know you are delivering general education rather than a treatment-grade intervention.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "How do you tell disrupted sleep from disordered sleep?",
            options: [
              "Disrupted has visible causes; disordered persists without them, with daytime consequences",
              "Disrupted resolves within two weeks; disordered persists beyond",
              "Disrupted affects onset; disordered affects maintenance",
              "Disrupted responds to hygiene advice; disordered does not, which is the test",
            ],
            correctIndex: 0,
            explanation: "Testing hygiene first is exactly what the guideline recommends against, so it cannot be the diagnostic move.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "Which behaviour is the usual first target, and why?",
            options: [
              "Wake-time consistency: it anchors the clock and survives a bad night",
              "Bedtime consistency: it sets the boundary for total sleep opportunity",
              "Evening screen reduction: it has the largest measured effect on onset",
              "Caffeine timing: it is the most easily modified of the levers",
            ],
            correctIndex: 0,
            explanation: "A client can control when they get up and cannot force sleep onset. After a bad night, the instruction is to get up at the usual time anyway.",
            sourceLessonSlug: "what-a-coach-can-do",
          },
          {
            prompt: "What did the pooled caffeine trials find beyond longer sleep onset?",
            options: [
              "Total sleep -35 min, efficiency -4.74 percent, slow-wave -1 point; REM unaffected",
              "Total sleep -35 min and REM proportion reduced; efficiency unchanged",
              "Only latency lengthened; duration, efficiency, and stages were unchanged",
              "Total sleep -8 min and latency +35 min, the reverse of the usual assumption",
            ],
            correctIndex: 0,
            explanation: "A client who falls asleep fine after evening coffee has escaped the only part of the effect they can perceive.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "Why does this course avoid a precise caffeine cut-off hour?",
            options: [
              "The circulating cut-offs trace to an unverifiable source",
              "Individual metabolism varies too much for any single cut-off",
              "The trials measured acute rather than habitual dosing",
              "Cut-off advice falls outside coaching scope as dietary prescription",
            ],
            correctIndex: 0,
            explanation: "Inventing precision is what the dossier rule forbids. The verified effects plus the half-life justify 'move it earlier and test it'.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What does alcohol do, and why do clients misread it?",
            options: [
              "Shortens onset then fragments the second half; the onset is the visible part",
              "Deepens early sleep and lightens later sleep, netting out neutral",
              "Suppresses slow-wave sleep throughout without affecting onset",
              "Delays onset but consolidates the second half",
            ],
            correctIndex: 0,
            explanation: "Falling asleep easily and waking at 3 a.m. feeling wrecked. For a client convinced it helps, the move is a two-week comparison they run themselves.",
            sourceLessonSlug: "caffeine-and-alcohol",
          },
          {
            prompt: "What did the shift-work meta-analysis find, and what is the timing nuance?",
            options: [
              "17 percent higher CV events, 26 percent higher CHD morbidity; risk appears after five years",
              "26 percent higher CV event risk from the first year, rising linearly",
              "17 percent higher risk, front-loaded in the first two years then plateauing",
              "20 percent higher mortality with no dose-response detectable",
            ],
            correctIndex: 0,
            explanation: "For a client two years in, that is neither an alarm nor an all-clear; it is a reason to build the habits now.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What is anchor sleep, and how should light be managed on nights?",
            options: [
              "A protected core sleep period; bright during the shift, blocked on the commute",
              "The longest sleep in a rotating roster; bright at both ends of the shift",
              "Sleep immediately after the shift; blocked during work, bright on the commute",
              "A fixed eight-hour block; light management is not part of the plan",
            ],
            correctIndex: 0,
            explanation: "Blocking morning light on the commute prevents it dragging the clock the wrong way just as the worker is about to sleep.",
            sourceLessonSlug: "shift-work",
          },
          {
            prompt: "What are the two consumer-tracker performance figures, and what do they mean?",
            options: [
              "Sensitivity for sleep 0.93+, specificity for wake 0.18-0.54; devices OVERESTIMATE sleep",
              "Sensitivity 0.18-0.54, specificity above 0.93; devices UNDERESTIMATE sleep",
              "Both above 0.90 for sleep-wake, with only staging unreliable",
              "Sensitivity 0.93 and specificity 0.85, both adequate for tracking",
            ],
            correctIndex: 0,
            explanation: "Lying still reads as sleeping. And devices perform worst on nights with poorer or more disrupted sleep, which is exactly when a struggling sleeper cares most.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "Which tracker output should a client ignore, and which should they watch?",
            options: [
              "Ignore the nightly stage breakdown; watch the multi-week trend in sleep and timing",
              "Ignore total sleep; watch the stage breakdown for patterns",
              "Ignore everything; the device is unreliable across all outputs",
              "Ignore the weekly trend; watch nightly efficiency scores",
            ],
            correctIndex: 0,
            explanation: "Stage comparisons were mixed and inconsistent and degrade further on disrupted nights. Treat the device as a diary that fills itself in, not a verdict.",
            sourceLessonSlug: "what-trackers-see",
          },
          {
            prompt: "What is orthosomnia, and what is the evidence's honest limit?",
            options: [
              "Preoccupation with tracker metrics that worsens sleep; a case perspective, no instrument",
              "A recognised sleep disorder with published diagnostic criteria and cut-offs",
              "Anxiety about sleep unrelated to tracking, described in cohort studies",
              "A randomized finding that tracking worsens sleep in most users",
            ],
            correctIndex: 0,
            explanation: "The concept is useful; the label is not yours to apply. Any coach presenting a screening questionnaire for it would be inventing a diagnostic tool.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "Why is sleep uniquely vulnerable to this pattern?",
            options: [
              "Trying hard to sleep is anti-correlated with sleeping",
              "Sleep is the only behaviour a device measures while it happens",
              "Sleep varies more night to night than other behaviours",
              "Sleep cannot be verified subjectively, so device data has no competitor",
            ],
            correctIndex: 0,
            explanation: "Which is why cognitive restructuring is part of CBT-I. A device that grades the attempt every morning supplies a fresh reason to worry about tonight.",
            sourceLessonSlug: "orthosomnia",
          },
          {
            prompt: "What proportion of adults aged 30 to 70 have at least mild sleep-disordered breathing?",
            options: [
              "Roughly 26 percent",
              "Roughly 5 percent",
              "Roughly 12 percent",
              "Roughly 45 percent",
            ],
            correctIndex: 0,
            explanation: "If you coach sleep and have never referred anyone for a breathing assessment, that is not evidence your clients are unusual.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What may a coach do with STOP-BANG, and what may they not?",
            options: [
              "Know it exists and what it asks; never administer it and return a category",
              "Administer it and refer on the score; not interpret it clinically",
              "Neither know nor mention it, since clinical instruments are out of scope",
              "Administer it with consent, provided the score goes to their physician",
            ],
            correctIndex: 0,
            explanation: "Knowing the tool exists is education; running it is clinical work. 'There is a short screening questionnaire your doctor can run' is what makes a referral specific.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "Which sleep flag is urgent regardless of what the nights look like?",
            options: [
              "Falling asleep unintentionally, especially while driving",
              "Snoring with witnessed breathing pauses",
              "Difficulty falling asleep persisting beyond three months",
              "Repeated night waking without an identifiable cause",
            ],
            correctIndex: 0,
            explanation: "Excessive daytime sleepiness on its own, and driving makes it urgent. The others are genuine flags without the same immediacy.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "A client reports loud snoring, witnessed pauses, and daytime sleepiness despite eight hours in bed.",
            options: [
              "Refer for breathing assessment, naming that a short screening questionnaire exists",
              "Coach wind-down and environment first, referring if that does not help",
              "Advise weight loss, since BMI is a component of the screening instrument",
              "Track the pattern four weeks to establish consistency before referring",
            ],
            correctIndex: 0,
            explanation: "The most commonly missed flag, in a condition affecting roughly a quarter of adults in this band. Coaching hygiene while it goes unassessed is a real failure.",
            sourceLessonSlug: "referral-on-sleep",
          },
          {
            prompt: "What is the honest sentence to a client with chronic insomnia?",
            options: [
              "There is a treatment for this, it works, it is not mine to deliver, and I can help you get to it",
              "Let us try sleep hygiene first and refer you if it does not work within a month",
              "I cannot help with this, so see a clinician before we continue",
              "Insomnia usually resolves with consistent habits, so let us start with wake time",
            ],
            correctIndex: 0,
            explanation: "It keeps the relationship, respects the evidence, and gets the person to the thing that will actually help. The trial-first option is what the guideline recommends against.",
            sourceLessonSlug: "the-guideline-and-the-line",
          },
          {
            prompt: "Give the coaching move for a client whose sleep anxiety tracks their app score.",
            options: [
              "Offer a two-week tracking holiday, judged by how the days feel",
              "Explain the device's error rates so they discount the score",
              "Set an achievable target score to rebuild their confidence",
              "Refer, since the anxiety is now the primary presenting problem",
            ],
            correctIndex: 0,
            explanation: "Experiment rather than argument. Most people find that easier to hear as a test than as advice, and the result is usually its own persuasion.",
            sourceLessonSlug: "orthosomnia",
          },
        ],
      },
    },
  ],
};
