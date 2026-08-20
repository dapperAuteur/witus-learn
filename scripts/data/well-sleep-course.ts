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

**Excessive daytime sleepiness on its own.** Falling asleep unintentionally, especially while driving, is urgent regardless of what the nights look like.

**Movement and behaviour during sleep.** Acting out dreams, violent movement, or repetitive leg movements reported by a partner belong to a clinician.

**Mood and mental health.** Early-morning waking with low mood, sleep loss accompanying hopelessness, or any suicidal content routes immediately to mental-health care with the crisis-line information from WELL-00. Sleep and mood run in both directions, and the sleep complaint is often the presenting edge of something else.

**Chronic insomnia itself.** Months of difficulty falling or staying asleep, with daytime consequences, in the absence of obvious behavioural causes. Refer for CBT-I, which is the treatment that works and which lesson 5 established is not yours.

**Substances and medication.** A client using alcohol or over-the-counter sleep aids to sleep, or one whose prescribed medication timing may be involved, needs a clinician's eyes rather than a coach's suggestions.

:::reveal Name the sleep flag this course calls the most commonly missed, and why it matters so much. ||| Breathing-related signs: snoring with witnessed pauses, gasping or choking awakenings, or daytime sleepiness despite adequate time in bed. It matters because sleep apnea is common, underdiagnosed, carries cardiovascular consequences, and is completely untouched by the hygiene coaching a client might otherwise receive for months.

:::reveal Why is a sleep complaint often the presenting edge of a mood problem? ||| Because sleep and mood influence each other in both directions, so a client may bring the sleep symptom while depression or anxiety is the larger picture. Early waking with low mood, or sleep loss alongside hopelessness, routes to mental-health care rather than to a wind-down routine.

## Vocabulary
- **Sleep apnea**: repeated breathing interruptions during sleep, common and underdiagnosed; suspected from snoring with pauses, gasping, or daytime sleepiness.
- **Excessive daytime sleepiness**: falling asleep unintentionally during the day, an urgent flag when it occurs while driving.
- **Parasomnia**: abnormal behaviour during sleep such as dream enactment, which belongs to clinical assessment.
- **Bidirectional relationship**: sleep and mood each affecting the other, which is why sleep complaints are frequently the visible edge of a mental-health issue.`,
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
        ],
      },
    },
  ],
};
