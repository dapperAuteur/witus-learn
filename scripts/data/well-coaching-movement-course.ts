import type { AuthoredCourse } from "./authored-course";

// WELL-02 · Coaching Movement (plans/67). A THIN BRIDGE by design: coaching movement BEHAVIOR
// for a student who already holds CPT and CES. It never re-teaches exercise science.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 02-movement/02-movement.md §3, §3b, §4). Notable verification outcomes baked in:
// - The "8 hours of sitting" threshold traced to a CONFERENCE ABSTRACT, not a paper; the
//   peer-reviewed Ku 2018 gives METHOD-DEPENDENT cut-offs (7 h self-report vs 9 h device),
//   and that correction is taught as a lesson beat.
// - Step evidence spans five verified meta-analyses (Jayedi, Liu, Banach, Stens, Paluch)
//   plus Ding 2025's multi-outcome 7,000-step analysis.
// - Levine 2005: obese participants sat 2 HOURS longer than lean (not the oft-quoted 2.5).
// - NEAT-promotion has NO RCTs proving it treats obesity (Chung 2018); taught honestly.
// - Hypertension coaching effects are SMDs (Meng 2023), never re-stated as mmHg.
export const WELL_COACHING_MOVEMENT_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 02: Coaching Movement",
  description:
    "The first thin-bridge course of the WELL program: coaching movement behavior rather than prescribing exercise. The honest dose-response evidence for steps and sitting, NEAT as the biggest lever most clients never touch, what actually sustains activity for years, and the WELL-01 toolkit applied to the pillar you know best. Assumes a CPT and CES; teaches only what they do not.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "coaching-movement-not-prescribing",
      title: "1 · Coaching movement, not prescribing it",
      section: "Section 1 · What counts as movement",
      body: `You can already program training. This course deliberately does not touch that skill, because programming is not the problem this pillar has.

The problem is that most people, including most clients who hire trainers, do not need a better program. They need to MOVE, daily, for decades, and the evidence for what produces that is behavioral, not mechanical. Sets and progressions live in your CPT. Corrective strategy lives in your CES. What lives here is the layer between a plan and a life: the dose evidence a coach can set honest targets from, the everyday movement most programs ignore, and the adherence science that decides whether anything survives past March.

**The two-hats rule, applied to this pillar.** WELL-00 taught that exercise prescription sits inside your CPT scope and outside the coaching scope. This course works entirely on the coaching side of that line: guidelines and public evidence shared as education, behavior facilitated with the WELL-01 toolkit, and individual programming left to the credential that authorizes it. When a client of yours needs a program, you may write one, as a trainer. When they need to actually do it, you coach.

**What this course asks you to un-learn.** Fitness culture measures movement in workouts. The mortality evidence mostly does not: it counts steps, sitting hours, and everyday activity, and its strongest findings live far below the intensity range your certifications optimize. A coach who only respects training-shaped movement will miss the levers that move the most sedentary clients the furthest.

**The centenarian frame.** You are again the first client. Every dose curve in this course is a curve you are personally on for the next several decades, and the capstone will ask what you did about it.

:::reveal Why does a movement course for a certified trainer refuse to teach programming? ||| Because programming is already yours, as a CPT and CES, and it is not the missing layer. What decides decades of movement is behavioral: honest dose targets, everyday activity, and adherence, which is what this course adds.

:::reveal A client asks you to adjust their squat depth mid-coaching-session. Which hat answers, and why does it matter? ||| The trainer hat: movement mechanics are CPT and CES content, not coaching. It matters because the roles must stay visibly separate, per the scope training in WELL-00; the coach facilitates behavior, the trainer prescribes content.

## Vocabulary
- **Movement behavior**: the daily pattern of activity and sitting a person actually lives, as distinct from the workouts they plan; this course's whole subject.
- **Thin bridge**: this course's design: teach only the coaching layer over content the CPT and CES already carry, and nothing twice.
- **Dose evidence**: the epidemiology linking amounts of movement to health outcomes, which lets a coach set targets honestly instead of by convention.
- **Everyday movement**: the steps, chores, and postures outside structured exercise, where most of a sedentary client's opportunity lives.`,
    },
    {
      slug: "who-numbers-as-a-coach",
      title: "2 · The WHO numbers, read as a coach",
      section: "Section 1 · What counts as movement",
      body: `The World Health Organization's 2020 guidelines are the reference frame for this pillar, and they are more coach-friendly than most people who cite them realize (Bull et al., 2020).

**The adult numbers.** Adults 18 to 64 should accumulate 150 to 300 minutes a week of moderate-intensity aerobic activity, or 75 to 150 minutes of vigorous activity, or an equivalent mix, plus muscle-strengthening work at moderate or greater intensity involving all major muscle groups on two or more days a week. Notice they are RANGES with a floor and a soft ceiling, not a single pass-fail bar.

**The older-adult addition.** For adults 65 and over, the guidelines add varied, multicomponent activity that emphasizes functional balance and strength training at moderate or greater intensity on three or more days a week, to enhance functional capacity and to prevent falls. For the centenarian frame this is not a footnote; it is the recommendation your future self depends on most.

**The two sentences that matter most to a coach.** First: some physical activity is better than none, and people not meeting the recommendations gain health benefits from doing SOME. Second: adults should limit sedentary time, and replacing sitting with activity of ANY intensity, including light intensity, provides benefits. Together they authorize the coaching conversation at every fitness level, because there is no client too inactive for the first sentence and no day too busy for the second.

**How a coach uses guidelines.** Never as a report card. As education (evidence-based resources from a nationally recognized authority, squarely inside scope), and as a menu of directions: more minutes, more intensity, more strength days, less sitting, better balance work. The client picks the direction; WELL-01's tools carry it.

:::reveal Recite the WHO 18-to-64 aerobic and strength numbers, with their character. ||| 150 to 300 minutes a week moderate, or 75 to 150 vigorous, or an equivalent combination, plus muscle-strengthening for all major muscle groups on two or more days. They are ranges with a floor, not a single pass-fail bar.

:::reveal What does WHO add at 65 plus, and why does the centenarian frame care most about it? ||| Varied multicomponent activity emphasizing functional balance and strength at moderate or greater intensity on three or more days a week, to enhance functional capacity and prevent falls. The frame cares because falls and lost function, not missed workouts, are what end independent decades.

## Vocabulary
- **Moderate and vigorous intensity (MVPA)**: the two effort bands the aerobic guideline counts; the vigorous band earns credit at half the minutes.
- **Multicomponent activity**: the 65-plus prescription: varied work combining functional balance and strength, three or more days a week.
- **"Some is better than none"**: the guideline sentence that authorizes coaching at every fitness level; below-guideline activity still buys health.
- **Light-intensity activity**: movement below the moderate band, like easy walking and standing tasks; the guidelines credit it as a replacement for sitting.

## Sources
Bull, F. C., Al-Ansari, S. S., Biddle, S., et al. (2020). World Health Organization 2020 guidelines on physical activity and sedentary behaviour. *British Journal of Sports Medicine, 54*(24), 1451-1462. https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/`,
      recallContent: [
        {
          prompt: "A client says 'I can't do 150 minutes, so why bother?' What in the WHO guidelines answers them, verbatim in spirit?",
          answer:
            "Some physical activity is better than none: people below the recommendations still gain health benefits from doing some, and replacing sitting with activity of any intensity, including light, provides benefits. The guideline itself authorizes starting anywhere.",
        },
      ],
    },
    {
      slug: "sitting-the-threshold-that-isnt",
      title: "3 · Sitting: the threshold that isn't",
      section: "Section 1 · What counts as movement",
      body: `Ask the internet how much sitting is dangerous and you will get a confident number. Ask the evidence and you get something more interesting, and more teachable.

**WHO declined to set a limit.** The 2020 guidelines recommend limiting sedentary time but state plainly that evidence was insufficient to quantify a threshold (Bull et al., 2020). That refusal is not weakness; it is what honesty looks like when the data does not cooperate.

**The cut-off depends on the ruler.** The peer-reviewed meta-regression on daily sitting and mortality, pooling 19 studies with over a million participants, found a log-linear association: more sitting, more risk, no cliff. And when it looked for the point where risk clearly rises, the answer split by MEASUREMENT METHOD: about 7 hours a day in studies using self-reported sitting, about 9 hours a day in studies using device-based measures (Ku et al., 2018). People underestimate their own sitting, so the self-report scale reads lower at the same true exposure. One verification note this program owes you: a widely circulated version of this analysis puts the threshold at a flat 8 hours; that figure traces to a conference abstract, and the published paper says what this paragraph says.

**Television is its own exposure.** Across 10 cohorts and 647,475 people, the highest category of TV time carried a relative risk of 1.33 for all-cause mortality versus the lowest, in a J-shaped dose-response (Sun et al., 2015). TV sitting is the worst-behaving flavor of sitting in the data, likely because it is long, unbroken, evening-loaded, and snack-adjacent, which makes it the single most coachable sitting target a client owns.

**Coaching translation.** Teach sit-less as a direction, not a threshold: there is no safe number to hide under and no doom number to panic over. Break up the long unbroken blocks, target the TV block first, and treat any replacement, standing, light walking, chores, as credit, because the guidelines do.

:::reveal Why does the sitting 'threshold' come out as 7 hours in some studies and 9 in others? ||| Measurement method: about 7 hours a day where sitting was self-reported, about 9 where it was device-measured, because people underestimate their own sitting. The association itself is log-linear, with no cliff; the ruler moves the number.

:::reveal Why is TV time the most coachable sitting target? ||| It carries the worst dose-response of any sitting flavor (highest-versus-lowest relative risk 1.33, J-shaped), and it arrives in long, unbroken, evening, snack-adjacent blocks that a client can actually see and break up.

## Vocabulary
- **Sedentary behavior**: waking time spent sitting or reclining at low energy expenditure; a risk exposure in its own right, not just absent exercise.
- **Log-linear association**: risk rising steadily with dose, without a cliff; the shape the sitting-mortality data actually has.
- **Method-dependent cut-off**: a threshold that moves with how the exposure was measured, like sitting's 7-versus-9-hour split; a lesson in reading rules skeptically.
- **J-shaped dose-response**: roughly flat risk at low doses that bends upward as dose grows, the shape of the TV-time association.

## Sources
Bull, F. C., et al. (2020). World Health Organization 2020 guidelines on physical activity and sedentary behaviour. *British Journal of Sports Medicine, 54*(24), 1451-1462. https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/

Ku, P. W., Steptoe, A., Liao, Y., Hsueh, M. C., & Chen, L. J. (2018). A cut-off of daily sedentary time and all-cause mortality in adults: A meta-regression analysis involving more than 1 million participants. *BMC Medicine, 16*, 74. https://pubmed.ncbi.nlm.nih.gov/29793552/

Sun, J. W., Zhao, L. G., Yang, Y., Ma, X., Wang, Y. Y., & Xiang, Y. B. (2015). Association between television viewing time and all-cause mortality: A meta-analysis of cohort studies. *American Journal of Epidemiology, 182*(11), 908-916. https://pubmed.ncbi.nlm.nih.gov/26568572/`,
      recallContent: [
        {
          prompt: "Why does this program refuse to teach '8 hours of sitting is the danger line'?",
          answer:
            "Because that flat number traces to a conference abstract. The published meta-regression shows a log-linear association with method-dependent cut-offs: about 7 hours for self-reported sitting, about 9 for device-measured. Teach sit-less as a direction, not a threshold.",
        },
      ],
    },
    {
      slug: "quiz-what-counts",
      title: "4 · Knowledge check: what counts",
      section: "Section 1 · What counts as movement",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "What does this course teach about movement, given that you already hold a CPT and CES?",
            options: [
              "The coaching layer only: dose evidence, everyday movement, and adherence",
              "A condensed review of program design and periodization for coaches",
              "Corrective exercise strategy adapted for wellness-coaching sessions",
              "Advanced programming techniques your certifications left for later courses",
            ],
            correctIndex: 0,
            explanation:
              "The thin-bridge design: programming and corrective strategy stay with the CPT and CES; this course adds the behavioral layer those credentials do not carry, which is what decides decades of movement.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "The WHO 2020 aerobic recommendation for adults 18 to 64 is:",
            options: [
              "150 to 300 minutes moderate, or 75 to 150 vigorous, or an equivalent combination, weekly",
              "A fixed 10,000 steps per day for every adult regardless of fitness",
              "Exactly 150 minutes of vigorous activity, measured in bouts of at least 10 minutes",
              "300 to 450 minutes of moderate activity, with vigorous work discouraged after 40",
            ],
            correctIndex: 0,
            explanation:
              "Ranges, not a bar: 150 to 300 moderate minutes or 75 to 150 vigorous, or a mix, plus strength work two or more days a week. The 10-minute-bout requirement is gone, steps are not the WHO metric, and vigorous work is not discouraged.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What does WHO recommend specifically for adults 65 and older?",
            options: [
              "Varied multicomponent activity emphasizing balance and strength, three or more days a week",
              "Replacing all vigorous activity with light walking to protect the joints",
              "The same guidelines as younger adults, with no age-specific additions of any kind",
              "Supervised exercise only, following a physician-approved written program",
            ],
            correctIndex: 0,
            explanation:
              "The 65-plus addition: varied multicomponent activity emphasizing functional balance and strength at moderate or greater intensity on three or more days a week, to enhance functional capacity and prevent falls.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "Why did the WHO 2020 guidelines set no numeric sitting limit?",
            options: [
              "The evidence was insufficient to quantify a threshold, so they recommend limiting sitting without one",
              "Because sitting was shown to be metabolically harmless for adults once the weekly moderate-activity targets are met",
              "Because the 8-hour threshold was already established by earlier guidelines",
              "Because sedentary behavior falls outside the WHO's public-health mandate",
            ],
            correctIndex: 0,
            explanation:
              "WHO recommends limiting sedentary time and replacing it with activity of any intensity, but states the evidence could not support a specific threshold. Sitting is not harmless, and no 8-hour rule exists in the guidelines.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "The Ku meta-regression of sitting and mortality found the risk cut-off:",
            options: [
              "Differs by measurement: about 7 hours self-reported, about 9 hours device-measured",
              "Sits at a flat 8 hours a day across every measurement method and population subgroup studied",
              "Occurs only in adults over 60, with no association at younger ages",
              "Disappears entirely once weekly exercise minutes are adjusted for",
            ],
            correctIndex: 0,
            explanation:
              "The association is log-linear, and the apparent threshold moves with the ruler: roughly 7 hours where sitting was self-reported, roughly 9 where it was device-measured. The flat 8-hour figure traces to a conference abstract, not the paper.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What did the TV-viewing meta-analysis (10 cohorts, 647,475 people) find?",
            options: [
              "Highest-versus-lowest TV time carried a relative risk of 1.33 for mortality, J-shaped",
              "TV time was protective at low doses because it reflects household recovery time",
              "No association survived adjustment for occupation and total sitting hours",
              "A linear risk increase beginning precisely at two hours of daily viewing",
            ],
            correctIndex: 0,
            explanation:
              "RR 1.33 for the highest versus lowest viewing category, with a J-shaped dose-response. TV is the worst-behaving flavor of sitting, and the precise two-hour cliff belongs to the rejected conference-abstract numbers.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "Which two WHO sentences most directly authorize coaching at every fitness level?",
            options: [
              "'Some activity is better than none' and 'replacing sitting with any intensity provides benefits'",
              "'Adults must reach 150 minutes weekly' and 'vigorous activity requires medical clearance'",
              "'Exercise prescriptions belong to professionals' and 'guidelines are population targets only'",
              "'Strength training is optional' and 'light activity does not count toward the guidelines'",
            ],
            correctIndex: 0,
            explanation:
              "Together they mean no client is too inactive to start and no day too busy to count: below-guideline activity still buys health, and any-intensity replacement of sitting is credited by the guideline itself.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "How does this course tell you to use guidelines with a client?",
            options: [
              "As education and a menu of directions the client picks from, never as a report card",
              "As a compliance standard the client reviews and signs off on during the onboarding session",
              "As a private benchmark the coach tracks without telling the client",
              "As a replacement for the individualized program a trainer would write",
            ],
            correctIndex: 0,
            explanation:
              "Guidelines are evidence-based resources from a nationally recognized authority, squarely inside coaching scope as education. The client chooses the direction (minutes, intensity, strength days, less sitting); WELL-01's tools carry the change.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "A client's movement conversation drifts to 'should I switch to sumo deadlifts?' What does the two-hats rule say?",
            options: [
              "That is trainer-hat content: answer it as a CPT, visibly separate from the coaching work",
              "Refuse to answer, since coaches may never discuss exercises by name with clients",
              "Answer it inside the coaching session, since movement is this course's pillar",
              "Refer the question to a physical therapist, since technique questions are clinical",
            ],
            correctIndex: 0,
            explanation:
              "Exercise selection is prescription, inside your CPT scope and outside coaching scope. The same person may do both, with the hats visibly separate; refusing entirely or referring out would misread both scopes.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "Why does the mortality evidence ask trainers to 'un-learn' workout-shaped movement?",
            options: [
              "Its strongest findings count steps, sitting, and everyday activity below training intensities",
              "Because structured workouts were shown to provide no measurable health benefit",
              "Because the guidelines exclude gym-based training from their definitions",
              "Because clients report their workouts far less accurately than they report their daily step counts",
            ],
            correctIndex: 0,
            explanation:
              "Workouts remain valuable; the point is that the epidemiology's biggest levers (steps, sitting, everyday movement) sit below the intensity range trainers optimize, and a coach who only respects training-shaped movement misses them.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "step-dose-response",
      title: "5 · The dose-response: what each thousand steps buys",
      section: "Section 2 · Steps",
      body: `Steps are the most coachable dose in health: universally understood, passively counted, and now mapped against mortality by multiple large meta-analyses that agree with each other to a remarkable degree.

**The per-thousand price list.** Across 7 cohorts, each additional 1,000 steps a day was associated with a 12 percent lower all-cause mortality risk (hazard ratio 0.88), with risk falling linearly from about 2,700 to 17,000 steps a day and a hazard ratio of 0.44 at 10,000; the evidence was graded strong for its effect size and dose-response gradient (Jayedi et al., 2022). The largest pooled analysis, 17 cohorts and 226,889 people, priced it at 15 percent per 1,000 steps for all-cause mortality, and found even a 500-step increment bought a 7 percent reduction in cardiovascular mortality (Banach et al., 2023).

**How low the benefits start.** Compared with a reference of 1,895 steps, about 4,000 steps a day was associated with 37 percent lower mortality risk, 6,388 with 60 percent, and roughly 10,000 with 75 percent (Liu et al., 2022). The cardiology meta-analysis put the minimal significant doses lower still: benefit detectable from about 2,600 steps a day for mortality and about 2,800 for cardiovascular disease, against a 2,000-step reference, with optimal doses around 8,800 and 7,200 respectively, and independent benefit from walking at a brisker cadence (Stens et al., 2023).

**What the agreement means.** Five independent teams, overlapping but distinct cohorts, one shape: steep gains from a very low floor, continuing gains through the middle thousands, flattening somewhere near five digits. No study finds a minimum you must clear before benefits begin, and none finds harm at the top.

**Coaching translation.** The first thousand steps a sedentary client adds are the most valuable thousand anyone can buy, and the price list is worth showing them. Baseline first (most phones already know it), then the next-1,000 target, not a universal number.

:::reveal Quote the two per-increment findings a coach should carry. ||| Each additional 1,000 daily steps: 12 to 15 percent lower all-cause mortality risk across the two largest analyses. Each additional 500 steps: 7 percent lower cardiovascular mortality. The cheapest units of risk reduction in the catalog.

:::reveal Where do step benefits begin, and where do they plateau? ||| Benefits are detectable from roughly 2,600 steps a day against a 2,000-step reference, with steep gains through the low thousands; optimal doses land around 7,200 to 8,800 steps in the cardiology analysis, with no harm found at higher counts.

## Vocabulary
- **Hazard ratio (HR)**: the risk in one group divided by the risk in a reference group over time; HR 0.88 means 12 percent lower risk.
- **Dose-response gradient**: risk changing steadily with dose, one of the strongest signals observational evidence can show; steps have it in every analysis.
- **Minimal effective dose**: the lowest amount at which benefit is statistically detectable, about 2,600 steps a day against a 2,000-step reference.
- **Cadence**: stepping rate; brisker cadence carried mortality benefit independent of total steps in the cardiology meta-analysis.

## Sources
Banach, M., Lewek, J., Surma, S., et al. (2023). The association between daily step count and all-cause and cardiovascular mortality: A meta-analysis. *European Journal of Preventive Cardiology, 30*(18), 1975-1985. https://pubmed.ncbi.nlm.nih.gov/37555441/

Jayedi, A., Gohari, A., & Shab-Bidar, S. (2022). Daily step count and all-cause mortality: A dose-response meta-analysis of prospective cohort studies. *Sports Medicine, 52*(1), 89-99. https://pubmed.ncbi.nlm.nih.gov/34417979/

Liu, Y., Sun, Z., Wang, X., Chen, T., & Yang, C. (2022). Dose-response association between the daily step count and all-cause mortality: A systematic review and meta-analysis. *Journal of Sports Sciences, 40*(15), 1678-1687. https://pubmed.ncbi.nlm.nih.gov/35819337/

Stens, N. A., Bakker, E. A., Mañas, A., et al. (2023). Relationship of daily step counts to all-cause mortality and cardiovascular events. *Journal of the American College of Cardiology, 82*(15), 1483-1494. https://pubmed.ncbi.nlm.nih.gov/37676198/`,
    },
    {
      slug: "the-7000-step-day",
      title: "6 · 7,000 steps, and the myth of 10,000",
      section: "Section 2 · Steps",
      body: `The most famous number in fitness was never a finding. The 10,000-step target traces to pedometer marketing, not epidemiology, and the modern evidence says something both kinder and more precise.

**The multi-outcome case for 7,000.** The broadest analysis yet, 57 studies across 35 cohorts, compared 7,000 steps a day against 2,000 and priced the difference across nine outcomes: 47 percent lower all-cause mortality (hazard ratio 0.53), 25 percent lower cardiovascular disease incidence, 37 percent lower cancer mortality, 14 percent lower type 2 diabetes incidence, 38 percent lower dementia risk, 22 percent lower depressive symptoms, and 28 percent lower fall risk, with inflection points for most outcomes around 5,000 to 7,000 steps and evidence certainty moderate for most of them, lower for some, falls the weakest (Ding et al., 2025). The authors' own interpretation is the coaching translation: 10,000 remains a fine target for the already active, and 7,000 is clinically meaningful and more achievable for many.

**Age moves the plateau.** In the pooled 15-cohort analysis, mortality risk fell progressively until about 6,000 to 8,000 steps a day for adults 60 and older, and about 8,000 to 10,000 for adults under 60; higher quartiles of steps carried hazard ratios of 0.60, 0.55, and 0.47 against the lowest quartile, whose median was 3,553 steps (Paluch et al., 2022). An older client at 7,000 steps is not falling short of a younger person's number; they are at their own curve's plateau.

**The dementia, depression, and falls columns matter most here.** Your CPT already argued for steps via the heart. The centenarian frame adds what the newest data prices directly: a 38 percent lower dementia risk and 28 percent fewer falls at 7,000 versus 2,000 are arguments about who you get to BE at ninety, and they belong in coaching conversations with clients who stopped caring about their cardiovascular system years ago.

**Coaching translation.** Retire 10,000 as a moral standard and keep it as one option on a shelf. Set targets from the client's baseline plus the next thousand, name the plateau honestly when they reach it, and let older clients own the fact that their optimal is nearer than they feared.

:::reveal A 68-year-old client asks whether their 7,200 daily steps are 'enough.' Answer as this lesson would. ||| For their age group the mortality curve plateaus around 6,000 to 8,000 steps, so 7,200 sits at their own curve's optimum, not short of a younger person's 10,000. The next gains for them likely come from balance, strength, and cadence, not more steps.

:::reveal What did 7,000 steps a day buy against 2,000 in the multi-outcome analysis, beyond mortality? ||| A 25 percent lower cardiovascular incidence, 37 percent lower cancer mortality, 14 percent lower type 2 diabetes risk, 38 percent lower dementia risk, 22 percent lower depressive symptoms, and 28 percent fewer falls, with moderate certainty for most outcomes and falls the weakest evidence.

## Vocabulary
- **The 10,000-step myth**: a marketing artifact treated as a health law; the evidence supports it only as one reasonable target among several, not a threshold.
- **Inflection point**: where a dose-response curve's steep gains begin flattening; around 5,000 to 7,000 daily steps for most outcomes in the broadest analysis.
- **Age-dependent plateau**: the finding that older adults' mortality curve flattens around 6,000 to 8,000 steps while younger adults' continues to about 8,000 to 10,000.
- **Next-1,000 target**: this course's default step prescription: the client's measured baseline plus roughly a thousand, renegotiated as the curve flattens.

## Sources
Ding, D., Nguyen, B., Nau, T., et al. (2025). Daily steps and health outcomes in adults: A systematic review and dose-response meta-analysis. *The Lancet Public Health, 10*(8), e668-e681. https://pubmed.ncbi.nlm.nih.gov/40713949/

Paluch, A. E., Bajpai, S., Bassett, D. R., et al. (2022). Daily steps and all-cause mortality: A meta-analysis of 15 international cohorts. *The Lancet Public Health, 7*(3), e219-e228. https://pubmed.ncbi.nlm.nih.gov/35247352/`,
      recallContent: [
        {
          prompt: "Where does the 10,000-step figure come from, and what do the curves actually show?",
          answer:
            "Pedometer marketing, not research. The curves show steep gains from a very low floor, inflections around 5,000 to 7,000 steps for most outcomes, and age-dependent mortality plateaus: about 6,000 to 8,000 steps for 60 plus, 8,000 to 10,000 under 60.",
        },
      ],
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "neat-the-biggest-lever",
      title: "7 · NEAT: the biggest lever most clients never touch",
      section: "Section 3 · NEAT and the sit-less day",
      body: `Non-exercise activity thermogenesis, NEAT, is the energy expended for everything that is not sleeping, eating, or sports-like exercise: walking to work, typing, yard work, household tasks, fidgeting (Levine, 2002, 2004). It is an awkward name for the largest movement lever most clients have never been shown.

**Why it dwarfs workouts for most people.** For a typical client, structured exercise is a small fraction of total daily energy expenditure, three or four hours a WEEK against a hundred-plus waking hours. NEAT is the main variable component of daily energy expenditure between people, driven by occupation, transportation, home life, and a thousand small choices, which is exactly why two same-sized people with the same gym schedule can live in very different energy budgets (Chung et al., 2018; Levine, 2004).

**The coaching significance.** NEAT reframes the movement conversation away from the binary of trained-or-skipped. A client whose week collapsed still owns a hundred waking hours of postures and errands, and coaching those hours is fully inside scope: it is behavior, environment, and habit, never prescription. It is also the lever that survives injuries, travel, and every season in which the gym does not.

**Where NEAT hides in a client's day.** Occupation is the giant (a standing or walking job versus a seated one can separate people more than any training plan). Then transportation, stairs, chores, errands on foot, standing while on calls, and the fidget-level movement that turns out to matter in the overfeeding data you will meet next lesson.

**What this lesson deliberately does not claim.** You will find confident NEAT prescriptions online, exact standing hours, exact calorie promises. The honest version: NEAT's magnitude and variability are well established; precise individual prescriptions are not, and the next lesson includes the evidence gap on purpose.

:::reveal Define NEAT and name the three exclusions in its definition. ||| The energy expended for everything that is not sleeping, eating, or sports-like exercise: occupational movement, transportation, chores, posture, fidgeting. The definition is Levine's, and the exclusions are what make it a distinct coaching target from training.

:::reveal Why is NEAT called the biggest lever most clients never touch? ||| Because structured exercise occupies a few hours a week while NEAT spans the rest of waking life, and NEAT is the main variable component of daily energy expenditure between people. Nobody markets it, so clients rarely see it as coachable.

## Vocabulary
- **NEAT (non-exercise activity thermogenesis)**: energy expended on all movement that is not sleeping, eating, or sports-like exercise; Levine's term and this section's subject.
- **Total daily energy expenditure**: everything a body spends in a day; NEAT is its main variable component between individuals.
- **Occupational activity**: the job's built-in movement, the single largest NEAT driver; a standing or walking job separates energy budgets more than most training plans.
- **Fidget-level movement**: the smallest NEAT layer, posture shifts and restlessness, which the overfeeding evidence shows is not trivial.

## Sources
Chung, N., Park, M. Y., Kim, J., et al. (2018). Non-exercise activity thermogenesis (NEAT): A component of total daily energy expenditure. *Journal of Exercise Nutrition & Biochemistry, 22*(2), 23-30. https://pmc.ncbi.nlm.nih.gov/articles/PMC6058072/

Levine, J. A. (2002). Non-exercise activity thermogenesis (NEAT). *Best Practice & Research Clinical Endocrinology & Metabolism, 16*(4), 679-702. https://pubmed.ncbi.nlm.nih.gov/12468415/

Levine, J. A. (2004). Nonexercise activity thermogenesis (NEAT): Environment and biology. *American Journal of Physiology-Endocrinology and Metabolism, 286*(5), E675-E685. https://pubmed.ncbi.nlm.nih.gov/15102614/`,
    },
    {
      slug: "the-overfeeding-study",
      title: "8 · The overfeeding study, and the honest limits of NEAT",
      section: "Section 3 · NEAT and the sit-less day",
      body: `Two experiments made NEAT famous, and both are worth knowing exactly, along with the gap the field still has not closed.

**The overfeeding experiment.** Sixteen non-obese adults were fed 1,000 kilocalories a day above maintenance for eight weeks. Two-thirds of the increase in their total daily energy expenditure came from NEAT, the unconscious ramp-up of fidgeting, posture, and daily movement, and how much a given person's NEAT rose predicted how much fat they did NOT gain: fat storage varied ten-fold across participants, tracking NEAT activation (correlation 0.77 with resistance to fat gain) (Levine, Eberhardt, & Jensen, 1999). Some bodies answer surplus by moving more; others bank it.

**The posture experiment.** With motion-sensing underwear sampling body position every half-second for ten days, mildly obese participants sat on average two hours longer per day than lean sedentary participants. Posture allocation did not change when the obese participants lost weight or the lean ones overate, suggesting it is biologically patterned, and the paper estimated that adopting the lean group's standing and walking pattern would spend roughly 350 additional kilocalories a day (Levine et al., 2005). Note the number this program does NOT repeat: popular versions say two and a half hours; the paper says two.

**Now the honest limit.** From these findings it is tempting to prescribe NEAT as an obesity treatment. The review literature itself flags the gap: there is a lack of randomized controlled trials testing whether NEAT-promotion strategies actually treat obesity (Chung et al., 2018). The observational and physiological case is strong; the intervention case is unproven.

**How to coach it anyway.** NEAT-building is high-plausibility, near-zero-risk, fully in-scope behavior change: more standing, more walking errands, movement snacks between blocks of sitting. Coach it as exactly that, a well-grounded bet rather than a proven therapy, and you stay on the right side of both the evidence and the honesty standard this program runs on.

:::reveal Give the two Levine numbers a coach should carry, precisely. ||| Overfeeding: two-thirds of the rise in daily energy expenditure was NEAT, and NEAT activation predicted resistance to fat gain (ten-fold differences in fat storage). Posture: obese participants sat two hours longer per day than lean, worth roughly 350 kilocalories a day if the pattern flipped.

:::reveal What is the NEAT evidence gap, and how does a coach frame NEAT because of it? ||| No randomized trials yet show NEAT-promotion treats obesity. So the coach frames NEAT-building as a high-plausibility, near-zero-risk, in-scope bet, never a proven therapy, which keeps the coaching honest and the expectations survivable.

## Vocabulary
- **Overfeeding study**: Levine's 1999 experiment: 1,000 surplus kilocalories daily for eight weeks; NEAT activation explained who stayed lean.
- **Posture allocation**: how a day divides among sitting, standing, and moving; measured every half-second in the 2005 study and stable across weight change.
- **NEAT activation**: the unconscious increase in everyday movement some bodies produce under caloric surplus; the difference between banking a surplus and spending it.
- **Evidence gap**: a claim's missing piece, here the absence of randomized trials for NEAT-promotion as treatment; naming gaps is a feature of this program, not hedging.

## Sources
Chung, N., Park, M. Y., Kim, J., et al. (2018). Non-exercise activity thermogenesis (NEAT): A component of total daily energy expenditure. *Journal of Exercise Nutrition & Biochemistry, 22*(2), 23-30. https://pmc.ncbi.nlm.nih.gov/articles/PMC6058072/

Levine, J. A., Eberhardt, N. L., & Jensen, M. D. (1999). Role of nonexercise activity thermogenesis in resistance to fat gain in humans. *Science, 283*(5399), 212-214. https://pubmed.ncbi.nlm.nih.gov/9880251/

Levine, J. A., Lanningham-Foster, L. M., McCrady, S. K., et al. (2005). Interindividual variation in posture allocation: Possible role in human obesity. *Science, 307*(5709), 584-586. https://pubmed.ncbi.nlm.nih.gov/15681386/`,
      recallContent: [
        {
          prompt: "Popular articles say obese people sit 2.5 hours longer than lean people. What does the primary source say, and why does the difference matter here?",
          answer:
            "The Science 2005 paper says two hours, and estimated about 350 kilocalories a day in the posture difference. It matters because this program cites what primaries say, not what gets repeated, and the inflation is exactly the kind of drift verification exists to catch.",
        },
      ],
    },
    {
      slug: "sit-less-what-trials-show",
      title: "9 · Sit less: what the trials actually deliver",
      section: "Section 3 · NEAT and the sit-less day",
      body: `Sitting-reduction has been tested in real randomized interventions, and the results are worth knowing at their true size, which is small, real, and honest about its measurement problems.

**What the intervention trials show.** Pooling free-living interventions of at least seven days that reduced sitting, with or without adding activity: weight fell by about 0.6 kilograms, waist circumference by 0.7 centimeters, body fat by about a quarter of a percentage point, systolic blood pressure by about 1 mmHg, fasting insulin slightly, and HDL cholesterol rose slightly, with no adverse effects (Hadgraft et al., 2021). Nobody's before-photo becomes an after-photo on these numbers. They are direction-of-travel evidence: the physiology moves the right way when sitting falls, across cheap, low-risk changes a client can hold.

**The measurement caveat that keeps you honest.** In a large cross-sectional analysis, SELF-REPORTED sitting was associated with body mass index (0.035 units per extra 10 minutes a day), waist circumference, blood pressure, and total cholesterol after adjusting for exercise, while ACCELEROMETER-measured sitting was associated only with total cholesterol (Stamatakis et al., 2012). Two readings of that split: self-report may capture the worst flavors of sitting (TV) rather than sitting itself, and cross-sectional associations cannot say what causes what. This lesson teaches the split itself: how you measure a behavior changes what it appears to do, and a coach who reads studies needs that reflex.

**Building the sit-less day.** The practical menu is unchanged by the modest effect sizes, because the cost is near zero: break the longest unbroken blocks first (the TV block from lesson 3), stand for calls, walk the short errands, movement snacks at natural boundaries between tasks. Anchor each to an existing cue using the WELL-01 habit rules; sitting less is habit design, not willpower.

:::reveal Quote the sit-less trial numbers honestly, then defend coaching them anyway. ||| Roughly minus 0.6 kilograms, minus 0.7 centimeters of waist, minus 1 mmHg systolic, small insulin and HDL shifts. Worth coaching because the cost is near zero, the risk is none, the direction is consistently right, and the changes hold in ordinary life where big interventions fail.

:::reveal What did the self-report versus accelerometer comparison find, and what reflex should it install? ||| Self-reported sitting associated with BMI, waist, blood pressure, and cholesterol; device-measured sitting associated only with cholesterol. The reflex: ask how a behavior was measured before believing what it appears to do, and hold cross-sectional findings as associations, not causes.

## Vocabulary
- **Free-living intervention**: a trial run in participants' ordinary lives rather than a lab; the sit-less pooled trials required at least seven days of it.
- **Cross-sectional association**: a one-time-snapshot correlation that cannot establish cause; the honest label for the sitting-biomarker links.
- **Self-report versus device measurement**: the two rulers for sitting, which produce different associations; a worked example of measurement shaping findings.
- **Movement snack**: a brief movement break wedged between blocks of sitting; the sit-less day's basic unit, anchored to existing cues.

## Sources
Hadgraft, N. T., Winkler, E., Climie, R. E., et al. (2021). Effects of sedentary behaviour interventions on biomarkers of cardiometabolic risk in adults: Systematic review with meta-analyses. *British Journal of Sports Medicine, 55*(3), 144-154. https://pmc.ncbi.nlm.nih.gov/articles/PMC7841485/

Stamatakis, E., Hamer, M., Tilling, K., & Lawlor, D. A. (2012). Sedentary time in relation to cardio-metabolic risk factors: Differential associations for self-report vs accelerometry in working age adults. *International Journal of Epidemiology, 41*(5), 1328-1337. https://pubmed.ncbi.nlm.nih.gov/22634868/`,
    },
    {
      slug: "quiz-steps-and-neat",
      title: "10 · Knowledge check: steps, NEAT, and the sit-less day",
      section: "Section 3 · NEAT and the sit-less day",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Each additional 1,000 daily steps was associated with what mortality change in the two largest meta-analyses?",
            options: [
              "12 to 15 percent lower all-cause mortality risk",
              "A 3 percent reduction, visible only above 8,000 steps",
              "No change until the full 10,000-step target was reached",
              "A 40 percent reduction, but only in adults under fifty",
            ],
            correctIndex: 0,
            explanation:
              "Jayedi: HR 0.88 (12 percent) per 1,000 steps; Banach: 15 percent, with even 500 steps buying 7 percent lower cardiovascular mortality. Benefits begin far below 8,000 and are not confined to the young.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "The minimal step doses with detectable benefit in the cardiology meta-analysis were approximately:",
            options: [
              "2,600 steps a day for mortality and 2,800 for cardiovascular disease",
              "5,000 steps a day for both outcomes, against a sedentary reference",
              "7,500 steps a day, below which associations reversed direction",
              "1,000 steps a day, with benefits plateauing by 3,000",
            ],
            correctIndex: 0,
            explanation:
              "Stens: significant risk reductions from about 2,517 steps (mortality) and 2,735 (CVD) against a 2,000-step reference, with optimal doses near 8,800 and 7,200 and independent benefit from brisker cadence.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "In the 2025 multi-outcome analysis, 7,000 steps a day versus 2,000 was associated with:",
            options: [
              "47 percent lower mortality, 38 percent lower dementia risk, and 28 percent fewer falls",
              "Statistically significant benefits for mortality only, with cognitive outcomes left unmeasured",
              "A uniform 10 percent reduction across every outcome studied",
              "Improvements that vanished after adjusting for total exercise minutes",
            ],
            correctIndex: 0,
            explanation:
              "Ding: HR 0.53 mortality, 0.62 dementia, 0.72 falls, plus lower CVD incidence (0.75), cancer mortality (0.63), type 2 diabetes (0.86), and depressive symptoms (0.78), mostly at moderate certainty, falls weakest.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Where does the mortality curve plateau by age, per the 15-cohort pooled analysis?",
            options: [
              "About 6,000 to 8,000 steps for adults 60 plus; 8,000 to 10,000 under 60",
              "About 12,000 steps regardless of age, with no flattening below that",
              "About 4,000 steps for all adults, beyond which no benefit accrued",
              "The analysis found no plateau at any step count in either age group",
            ],
            correctIndex: 0,
            explanation:
              "Paluch: progressive risk reduction until roughly 6,000 to 8,000 daily steps at 60 and older, and 8,000 to 10,000 below 60. An older client at 7,000 is at their own curve's plateau, not short of a younger one's target.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "NEAT is defined as:",
            options: [
              "Energy expended on everything that is not sleeping, eating, or sports-like exercise",
              "The thermic effect of food combined with resting metabolic rate and sleep expenditure",
              "Energy expended during structured workouts below moderate intensity",
              "The calories a wearable estimates from heart-rate variability overnight",
            ],
            correctIndex: 0,
            explanation:
              "Levine's definition: occupational movement, transportation, chores, posture, fidgeting. It is the main variable component of daily energy expenditure between people, which is why it dwarfs workout hours for most clients.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "In the overfeeding study, what distinguished participants who resisted fat gain?",
            options: [
              "Their NEAT rose the most; two-thirds of increased expenditure was NEAT",
              "They unconsciously ate less of the prescribed surplus than others",
              "Their resting metabolic rate doubled within the first two weeks",
              "They added structured cardio sessions without being instructed to",
            ],
            correctIndex: 0,
            explanation:
              "Two-thirds of the rise in total daily energy expenditure was NEAT, and NEAT activation predicted resistance to fat gain across ten-fold differences in fat storage. Intake was controlled; no workouts were added.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "The posture study found obese participants sat how much longer than lean ones, worth what expenditure?",
            options: [
              "Two hours a day, roughly 350 kilocalories if the pattern flipped",
              "Four hours a day, roughly 700 kilocalories if the pattern flipped",
              "Thirty minutes a day, an energetically trivial difference",
              "The study found no measurable difference in daily sitting time",
            ],
            correctIndex: 0,
            explanation:
              "Two hours (the popular 2.5 figure is drift from the primary), with about 350 kilocalories a day estimated in the difference, and posture allocation stable across weight change, suggesting biological patterning.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is the honest status of NEAT-promotion as an obesity treatment?",
            options: [
              "Plausible and low-risk, but unproven: randomized trials are lacking",
              "Proven equivalent to structured exercise in head-to-head trials",
              "Disproven by the overfeeding experiments and abandoned by the field",
              "Established as first-line treatment in current clinical guidelines",
            ],
            correctIndex: 0,
            explanation:
              "The review literature itself flags the gap: no RCTs yet test NEAT-promotion strategies for obesity treatment. Coach it as a high-plausibility, near-zero-risk bet, never as proven therapy.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "The pooled sit-less intervention trials produced roughly:",
            options: [
              "Minus 0.6 kg weight, minus 0.7 cm waist, minus 1 mmHg systolic, small insulin and HDL shifts",
              "Minus 5 kilograms of weight and minus 10 mmHg of systolic pressure within the first eight weeks of intervention",
              "No measurable biomarker changes in free-living conditions",
              "Improvements only when sitting fell below four hours a day",
            ],
            correctIndex: 0,
            explanation:
              "Hadgraft: small, significant, consistently right-direction changes with no adverse effects. Direction-of-travel evidence for near-zero-cost changes, not transformation numbers, and honest coaching says so.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "Self-reported and device-measured sitting showed different biomarker associations. What should a coach take from that?",
            options: [
              "Measurement method shapes findings; ask how a behavior was measured before trusting what it appears to do",
              "Self-report is always the superior measurement because it captures the contexts that wearable devices miss entirely",
              "Devices are always superior, so self-reported evidence should be discarded",
              "The difference proves sitting has no real relationship to health markers",
            ],
            correctIndex: 0,
            explanation:
              "Self-reported sitting associated with BMI, waist, blood pressure, and cholesterol; device-measured sitting only with cholesterol, in cross-sectional data. The reflex to install is measurement skepticism, not a winner-take-all verdict.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "This course's default step prescription is:",
            options: [
              "The client's measured baseline plus roughly a thousand, renegotiated at the plateau",
              "A universal 10,000 steps daily, the standard the epidemiological evidence established",
              "Whatever the client's wearable sets as its automatic daily goal",
              "No numeric targets, since step counts are marketing artifacts",
            ],
            correctIndex: 0,
            explanation:
              "Baseline first, then the next-1,000 target: the steepest part of every curve belongs to the least active, and the plateau gets named honestly when reached. The 10,000 figure is marketing history, kept only as one shelf option.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Why does the TV block rank first among sitting targets?",
            options: [
              "It carries the worst dose-response of any sitting flavor and arrives in long, breakable evening blocks",
              "Because television viewing is the only category of sitting the epidemiological evidence links to measurable harm",
              "Because clients always under-report every other kind of sitting",
              "Because reducing it requires no habit design or environmental change",
            ],
            correctIndex: 0,
            explanation:
              "TV time showed the strongest association (RR 1.33 highest versus lowest, J-shaped), and its long unbroken evening blocks are visible and breakable, which makes it the most coachable target, not the only harmful one.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-maintains-movement",
      title: "11 · What maintains movement, at honest sizes",
      section: "Section 4 · What sustains it",
      body: `Starting is a season; the centenarian frame cares about the years after. The maintenance evidence for physical activity is unusually good news, provided you read it at its true size.

**Most gains survive the program's end.** Across randomized trials where adults successfully increased device-measured activity, 60 to 80 percent of the gained activity was maintained at least three months after the intervention ended, roughly 45 extra minutes of moderate-to-vigorous activity a week and about 945 extra daily steps versus comparators. Trials that added explicit maintenance support after the initial program bought a further small effect (standardized mean difference 0.14) (Madigan et al., 2021).

**And some survive for years.** At two to four years of follow-up, the long-horizon trials still showed higher steps and activity in intervention groups, at small effect sizes (SMD roughly 0.15 to 0.18), which the authors translate to a few hundred extra daily steps and about 21 to 25 extra weekly minutes, clinically meaningful in the better-performing programs (Gasana et al., 2023).

**Set expectations from those numbers.** The honest promise of movement coaching is not a transformed athlete; it is a client who, years later, still moves several hundred steps and twenty-odd minutes more per week than they otherwise would, on curves from sections 2 and 3 where exactly those margins price out in mortality, dementia, and falls. Small, kept, compounding: the same shape as every honest claim in this program.

**What the durable programs shared.** Self-monitoring with devices and feedback, goal setting, and follow-up structure, the components you now recognize as WELL-01's toolkit wearing activity trackers. The maintenance conversation itself reuses lesson 20 of that course: re-anchored cues after schedule changes, minimum versions for sideways seasons, and the review cadence that converts lapses into revisions.

:::reveal Quote the maintenance numbers a coach should carry. ||| 60 to 80 percent of gained activity maintained at three-plus months (about 45 extra weekly minutes, 945 extra daily steps); at two to four years, small but persistent advantages of a few hundred daily steps and 21 to 25 weekly minutes; explicit maintenance support adds SMD 0.14.

:::reveal Why are 'a few hundred steps, twenty minutes a week' worth years of coaching structure? ||| Because sections 2 and 3 price exactly those margins: each thousand steps buys 12 to 15 percent mortality risk, and the curves are steepest where sedentary clients live. Small kept gains compound across decades, which is the program's entire theory of value.

## Vocabulary
- **Maintenance phase**: the years after an intervention ends, where 60 to 80 percent of gained activity survives and the rest is coached back.
- **Device-measured activity**: steps and minutes counted by accelerometers or trackers rather than memory; the measurement standard of the maintenance trials.
- **Maintenance intervention**: explicit post-program support (boosters, ongoing self-monitoring, relapse planning), worth a further small effect beyond the initial program.
- **Small-kept-compounding**: this program's shorthand for the honest value shape: modest effects, held for years, priced against dose-response curves.

## Sources
Gasana, J., O'Keeffe, T., Withers, T. M., & Greaves, C. J. (2023). A systematic review and meta-analysis of the long-term effects of physical activity interventions on objectively measured outcomes. *BMC Public Health, 23*, 1697. https://pmc.ncbi.nlm.nih.gov/articles/PMC10474717/

Madigan, C. D., Fong, M., Howick, J., et al. (2021). Effectiveness of interventions to maintain physical activity behavior (device-measured): Systematic review and meta-analysis of randomized controlled trials. *Obesity Reviews, 22*(10), e13304. https://pubmed.ncbi.nlm.nih.gov/34129276/`,
    },
    {
      slug: "tools-on-the-field",
      title: "12 · The WELL-01 toolkit, applied to movement",
      section: "Section 4 · What sustains it",
      body: `Everything WELL-01 taught was rehearsed on generic examples. This lesson runs the toolkit on this pillar, with one more piece of evidence about what actually powers behavior-change interventions.

**Constructs beat stages, here too.** Thirty-three randomized trials of stage-based physical activity interventions found they worked (effect sizes 0.23 to 0.36) whether or not they matched strategies to the client's assessed stage; what moderated success was the number of theoretical constructs used, self-efficacy above all (Romain et al., 2018). Read that as permission and as instruction: skip the stage bureaucracy, build self-efficacy deliberately, and use readiness as a conversation guide exactly as lesson 2 of WELL-01 taught.

**The session, movement edition.** Evoke before planning: what did moving used to give you, when did you last like who you were on a moving day. Then one commitment, made contingent. The if-then and WOOP machinery transfers without modification: the inner obstacle for movement is usually a belief ("a ten-minute walk is not worth changing shoes for") rather than a schedule, and returning clients from schedule-talk to belief-talk is most of the craft.

**Habit rules, movement edition.** Anchor movement to cues that already fire daily: the school run, the lunch order, the kettle. Define the minimum that counts (ten minutes, one loop) for sideways days. Pre-negotiate the miss. And use the two levers the pooled habit data added: bias new movement habits toward the MORNING, where habits formed faster, and let the client PICK the behavior, because self-selected habits built more strength than assigned ones (Singh et al., 2024). For a coach with a trainer's instincts, that last finding is the discipline: the technically optimal modality you would assign loses to the walk the client actually chose.

**Steps as the shared instrument.** The step count is this pillar's gift to coaching: passively measured, client-owned, feedback-rich. It powers the self-monitoring that the durable interventions shared, it gives the next-1,000 target a dashboard, and it makes progress visible, which is competence support straight from lesson 3 of WELL-01.

:::reveal What moderated the success of the stage-based activity trials, and what did not? ||| The number of theoretical constructs used, especially self-efficacy, moderated success. Matching strategies to the client's assessed stage did not: interventions worked with or without stage-matching (d 0.23 to 0.36). Build self-efficacy; hold the stages loosely.

:::reveal Name the two habit levers from the pooled data, and the discipline the second imposes on a trainer. ||| Morning bias: habits practiced earlier formed faster. Self-selection: chosen behaviors built more habit strength than assigned ones. The discipline: the walk the client chose beats the technically optimal modality you would have assigned.

## Vocabulary
- **Construct count**: how many theory pieces (self-efficacy, processes, decisional balance) an intervention genuinely uses; the moderator that predicted activity-trial success.
- **Belief obstacle**: the usual inner obstacle for movement, like "short walks are not worth the setup"; the WOOP target hiding under schedule-talk.
- **Self-selected behavior**: the movement habit the client picked; it builds more habit strength than an assigned one, and outranks technical optimality here.
- **Passive measurement**: data collected without client effort, like phone step counts; what makes steps the pillar's natural self-monitoring instrument.

## Sources
Romain, A. J., Bortolon, C., Gourlan, M., et al. (2018). Matched or nonmatched interventions based on the transtheoretical model to promote physical activity. A meta-analysis of randomized controlled trials. *Journal of Sport and Health Science, 7*(1), 50-57. https://pubmed.ncbi.nlm.nih.gov/30356472/

Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. *Healthcare, 12*(23), 2488. https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/`,
      recallContent: [
        {
          prompt: "A client's obstacle is 'meetings eat my lunch walk.' Run the WOOP correction from this lesson.",
          answer:
            "Schedule-talk hides a belief obstacle: something like 'a walk is indefensible next to a meeting.' Return the obstacle inward, then build the if-then on it: if a request lands on the lunch block, then I propose 1 p.m. before accepting. The calendar was weather; the belief is coachable.",
        },
      ],
    },
    {
      slug: "movement-coaching-in-the-clinic",
      title: "13 · Movement coaching where it is hardest: the cardiometabolic client",
      section: "Section 4 · What sustains it",
      body: `The clients who need movement most arrive carrying diagnoses, and the coaching evidence in those populations is worth knowing both for its content and for its boundaries.

**Cardiovascular risk.** Across fifteen randomized trials in adults with cardiovascular risk factors, health-coaching interventions (typically motivational interviewing plus education) produced small but significant improvements in physical activity, dietary behavior, health responsibility, and stress management, though not smoking cessation (Hsieh et al., 2020). Movement responds to coaching in exactly the population where it matters most.

**Hypertension.** Twelve trials, 2,497 participants: coaching reduced systolic blood pressure with a standardized mean difference of 0.26 and diastolic 0.13, improved dietary behavior substantially (SMD 0.76) and self-efficacy (0.39), with phone-delivered coaching the most common and effective format (Meng et al., 2023). Note the units this lesson refuses to convert: those are standardized differences, not millimeters of mercury, and quoting them as blood-pressure points would outrun the source.

**Chronic kidney disease.** Eight trials, 738 patients: about 1.5 kilograms of weight and 3 mmHg of systolic pressure (this meta DID report raw units), with quality-of-life gains, and honest nulls on depression and self-efficacy; the authors themselves call the effects small and of uncertain clinical significance (Yu et al., 2026). Teach the nulls with the wins; that is what makes the wins credible.

**The scope rail, one more time.** In every one of these populations, the coach works alongside licensed care, supporting implementation of the clinician's plan and coaching the behavior around it, never adjusting treatment. The referral triggers from WELL-00 apply with the volume turned up: symptoms, medication questions, and red flags go to the professionals who own them, while the walking plan, the sit-less day, and the self-monitoring stay squarely yours.

**Why this lesson closes the content.** A coach who can move a hypertensive sixty-year-old from 3,000 to 5,000 honest daily steps, keep two-thirds of it through next winter, and hand the medical questions to medicine is doing the exact job this program exists to train. The final is next; the capstone will ask for the decades version.

:::reveal Why does this lesson quote hypertension effects as SMDs but kidney-disease effects in kilograms and mmHg? ||| Because that is what each source reports: the hypertension meta-analysis published standardized mean differences (0.26 systolic), while the CKD meta-analysis reported raw units (1.5 kg, 3 mmHg systolic). Converting SMDs into clinical units would outrun the source, and this program quotes primaries at their own precision.

:::reveal In cardiometabolic populations, what stays inside the coaching lane and what leaves it? ||| Inside: the movement plan, sit-less day, self-monitoring, adherence to the clinician's prescriptions, and the behavior-change conversation. Outside: symptoms, medications, treatment adjustments, and anything diagnostic, which route to licensed care under WELL-00's referral discipline.

## Vocabulary
- **Cardiometabolic populations**: clients with cardiovascular risk factors, hypertension, diabetes, or kidney disease; where movement coaching's evidence is deepest and its scope rails matter most.
- **Honest nulls**: the outcomes a trial did not move, reported beside the wins; the CKD meta's depression and self-efficacy nulls are this course's example.
- **Source-precision rule**: quote effects in the units the primary reports, SMDs as SMDs and raw units as raw units, never converting for rhetorical effect.
- **Implementation support**: the coach's defined role beside licensed care: helping the client carry out the clinician's plan, never modifying it.

## Sources
Hsieh, H. Y., Chen, Y. C., Wang, C. H., et al. (2020). Effects of health coaching on behavioral modification among adults with cardiovascular risk factors. *Patient Education and Counseling, 103*(10), 2029-2038. https://pubmed.ncbi.nlm.nih.gov/32448627/

Meng, F., Jiang, Y., Yu, P., et al. (2023). Effect of health coaching on blood pressure control and behavioral modification among patients with hypertension: A systematic review and meta-analysis of randomized controlled trials. *International Journal of Nursing Studies, 138*, 104406. https://pubmed.ncbi.nlm.nih.gov/36473304/

Yu, L., Yang, Y., Chen, Y., & Wang, Q. (2026). Do health coaching interventions have effects in patients with chronic kidney disease? A systematic review and meta-analysis of randomized controlled trials. *International Urology and Nephrology, 58*(5), 1827-1838. https://pubmed.ncbi.nlm.nih.gov/41139749/`,
    },
    {
      slug: "final-coaching-movement",
      title: "14 · Final: coaching movement",
      section: "Section 4 · What sustains it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is the WELL-02 division of labor between your credentials and your coaching?",
            options: [
              "CPT and CES own prescription and correction; coaching owns dose targets, everyday movement, and adherence",
              "Coaching replaces programming entirely once a client has mastered the fundamental movement patterns safely",
              "The CPT owns everything about movement; coaching handles only nutrition and sleep",
              "Coaching and training are legally interchangeable once both credentials are held",
            ],
            correctIndex: 0,
            explanation:
              "The thin-bridge premise: programming stays with the credentials that authorize it, while the coaching layer carries the behavioral evidence and tools. The roles remain visibly separate even in one person.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "The WHO 2020 sentence 'replacing sedentary time with activity of any intensity provides benefits' matters to coaching because:",
            options: [
              "It credits light activity, authorizing sit-less coaching on days when nothing workout-shaped is possible",
              "It removes the need for any moderate or vigorous aerobic activity anywhere in the adult guidelines' recommendations",
              "It applies only to adults over 65 with mobility limitations",
              "It requires clients to log every replacement bout for guideline credit",
            ],
            correctIndex: 0,
            explanation:
              "Light-intensity replacement counts, by the guideline's own text. Combined with 'some is better than none', it opens a coachable direction at every fitness level; it does not repeal the MVPA recommendations.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "The corrected teaching on sitting thresholds is:",
            options: [
              "A log-linear association with method-dependent cut-offs: about 7 hours self-reported, 9 device-measured",
              "A hard risk cliff at 8 hours of daily sitting, established consistently across all measurement types and cohorts",
              "No association between sitting and mortality after exercise adjustment",
              "A protective effect of sitting below 5 hours a day",
            ],
            correctIndex: 0,
            explanation:
              "Ku 2018: log-linear, with the apparent threshold moving by measurement method. The flat 8-hour figure traces to a conference abstract; WHO itself declined to quantify a threshold. Direction, not cliff.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "A sedentary client at 2,500 daily steps asks what one more thousand is worth. Per the meta-analyses:",
            options: [
              "Roughly 12 to 15 percent lower all-cause mortality risk, the steepest part of the whole curve",
              "Little benefit until 7,000 daily steps, the point where measurable mortality benefits first begin",
              "About 2 percent, since benefits concentrate above 10,000 steps",
              "Nothing durable, because step benefits decay within months",
            ],
            correctIndex: 0,
            explanation:
              "The per-1,000-step price is 12 to 15 percent, benefits are detectable from about 2,600 steps, and the curve is steepest exactly where this client lives. The first added thousand is the most valuable thousand.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "The 2025 multi-outcome analysis reframes step targets how?",
            options: [
              "7,000 steps a day captures clinically meaningful benefit across nine outcomes and is more achievable than 10,000",
              "12,000 steps a day is the new evidence-based minimum recommendation for all adults regardless of baseline activity",
              "Step counts predict mortality but nothing else measured",
              "Targets below 10,000 are now considered clinically meaningless",
            ],
            correctIndex: 0,
            explanation:
              "Ding: at 7,000 versus 2,000, mortality HR 0.53, dementia 0.62, falls 0.72, depression 0.78, T2D 0.86, among others; 10,000 stays viable for the already active, and 7,000 is the realistic clinically meaningful target for many.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Which claim about NEAT is supported by the verified evidence?",
            options: [
              "It is the main variable component of daily energy expenditure between individuals",
              "It contributes at most 5 percent of daily energy expenditure in all adults",
              "Randomized trials prove NEAT-promotion treats obesity effectively",
              "It includes structured exercise performed below moderate intensity",
            ],
            correctIndex: 0,
            explanation:
              "NEAT's magnitude and variability are established (Levine, Chung); the RCT case for NEAT-promotion as treatment is explicitly lacking, and structured exercise is excluded from NEAT by definition.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "In Levine's overfeeding experiment, resistance to fat gain was predicted by:",
            options: [
              "How much each participant's NEAT rose under the caloric surplus",
              "Baseline aerobic fitness measured before the surplus began",
              "Participants secretly discarding portions of the surplus food",
              "Genetic differences in resting metabolic rate alone",
            ],
            correctIndex: 0,
            explanation:
              "NEAT activation carried two-thirds of the expenditure increase and predicted who stayed lean across ten-fold fat-storage differences. Intake was controlled; fitness and resting rate were not the story.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "The honest way to present the sit-less trial results to a client is:",
            options: [
              "Small consistent biomarker improvements at near-zero cost and risk, worth stacking rather than selling as transformation",
              "Clinically dramatic cardiometabolic changes rivaling those of fully structured, gym-based supervised exercise programs",
              "Evidence that standing desks alone resolve metabolic risk",
              "Proof that sitting reduction only works inside supervised trials",
            ],
            correctIndex: 0,
            explanation:
              "Hadgraft's pooled effects are modest (minus 0.6 kg, minus 1 mmHg systolic) and consistently right-direction with no adverse effects. The pitch is cost-benefit honesty, the same shape as every claim this program makes.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What proportion of gained activity typically survives at least three months after successful interventions end?",
            options: [
              "60 to 80 percent, about 45 weekly MVPA minutes and 945 daily steps versus comparators",
              "Under 10 percent of the gained activity, which is exactly why maintenance coaching exists",
              "Essentially all of it, making maintenance support unnecessary",
              "None that is measurable with devices rather than self-report",
            ],
            correctIndex: 0,
            explanation:
              "Madigan: 60 to 80 percent maintained at three-plus months, with explicit maintenance interventions adding a further small effect (SMD 0.14). At two to four years, small advantages persist (Gasana).",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "The stage-based activity trials teach which lesson about intervention design?",
            options: [
              "Construct count and self-efficacy moderated success; stage-matching did not",
              "Stage-matched interventions roughly doubled the effect of unmatched ones",
              "Stage-based interventions failed entirely in physical activity",
              "Readiness assessment is prohibited in evidence-based coaching",
            ],
            correctIndex: 0,
            explanation:
              "Romain: d 0.23 to 0.36 with or without stage-matching; what moderated success was the number of constructs used, self-efficacy above all. Readiness stays useful as a conversation guide, per WELL-01.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "The two habit levers the pooled habit data adds to movement coaching are:",
            options: [
              "Morning bias and client self-selection of the behavior",
              "Higher intensity and public commitment contracts",
              "Financial incentives and streak-based tracking apps",
              "Evening practice and coach-assigned optimal modalities",
            ],
            correctIndex: 0,
            explanation:
              "Singh: habits practiced in the morning formed faster, and self-selected behaviors built more strength than assigned ones. For trainers, the second is the discipline: the client's chosen walk beats your optimal assignment.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Why does this course refuse to quote the hypertension coaching effect as 'about 3 mmHg'?",
            options: [
              "The source reports standardized mean differences, and converting them to clinical units would outrun the source",
              "Because the actual measured effect in the pooled hypertension trials was closer to 10 mmHg of systolic pressure",
              "Because blood pressure is outside a wellness coach's conversational scope",
              "Because standardized differences and millimeters are interchangeable anyway",
            ],
            correctIndex: 0,
            explanation:
              "Meng reports SMDs (0.26 systolic); the 3 mmHg figure belongs to the CKD meta, which did report raw units. Source-precision is the rule: quote each primary at its own precision.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "A hypertensive client on new medication asks whether to keep their walking plan during a dizzy spell. The coaching move is:",
            options: [
              "Route the symptom and medication question to their clinician now; resume coaching the plan once licensed care has answered",
              "Adjust the walking plan's intensity and duration downward yourself, since movement behavior is this course's own pillar of expertise",
              "Reassure them that dizziness is a normal adaptation to exercise",
              "Pause all coaching permanently, since medicated clients are out of scope",
            ],
            correctIndex: 0,
            explanation:
              "Symptoms and medications belong to licensed care; the movement plan and adherence conversation remain yours once the clinician has answered. Neither playing clinician nor abandoning the client is the coaching lane.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "The 'small, kept, compounding' value argument for movement coaching holds that:",
            options: [
              "Maintained modest gains, priced against the dose-response curves, accumulate into meaningful risk differences over decades",
              "Only large, client-visible transformations can justify the time and financial cost of long-running coaching relationships",
              "Effects too small to feel are by definition too small to matter",
              "Compounding applies to finances but has no biological analog",
            ],
            correctIndex: 0,
            explanation:
              "A few hundred kept daily steps sit exactly where each thousand prices at 12 to 15 percent mortality risk, and the maintenance data shows such gains persisting for years. Decades multiply what months cannot feel.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "Which sequence correctly runs the WELL-01 session loop on this pillar?",
            options: [
              "Evoke what movement used to give the client, return the obstacle inward, then one contingent commitment with an anchor and minimum version",
              "Present the full step-count evidence, assign the technically optimal training modality, and schedule a compliance check for the following session",
              "Assess the client's stage, forbid action strategies until contemplation resolves, then reassess",
              "Set a 10,000-step requirement and attach a streak-tracking penalty for missed days",
            ],
            correctIndex: 0,
            explanation:
              "Evoking precedes planning; the obstacle is usually a belief hiding under schedule-talk; and the commitment gets WELL-01's full habit rig (anchor, minimum that counts, miss rule). Assignment, stage-gating, and streak penalties each contradict the evidence taught here.",
            sourceLessonSlug: "tools-on-the-field",
          },
        ],
      },
    },
  ],
};
