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
          {
            prompt: "What does this course say most clients who hire trainers actually need?",
            options: [
              "To MOVE daily for decades, which is a behavioral problem rather than a programming one",
              "A better-designed program, matched to their stated goals and their current training age",
              "More accountability, delivered through more frequent supervised sessions",
              "Correction of movement faults before any volume is added",
            ],
            correctIndex: 0,
            explanation:
              "Programming is not the problem this pillar has. What decides decades of movement is behavioral: honest dose targets, everyday activity, and adherence.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "What does the course call 'the layer between a plan and a life'?",
            options: [
              "Dose evidence for honest targets, the everyday movement programs ignore, and adherence science",
              "Motivational interviewing, goal setting, and accountability structures",
              "Assessment, programming, and progression, planned across a full training block",
              "Education, demonstration, and supervised practice of each movement",
            ],
            correctIndex: 0,
            explanation:
              "Three components, none of which a CPT or CES carries. That gap is the course's whole justification for existing beside those credentials.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "What is 'movement behavior' as this course defines it?",
            options: [
              "The daily pattern of activity and sitting a person actually lives, as distinct from the workouts they plan",
              "The quality of a person's movement patterns under load",
              "The client's stated intentions about exercise, recorded before any behavior actually occurs",
              "The frequency and duration of a client's structured training sessions",
            ],
            correctIndex: 0,
            explanation:
              "Lived pattern versus planned workouts. The distinction is the course's subject, and sitting is inside the definition rather than merely the absence of activity.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "Under the two-hats rule, when may you write a program for a coaching client?",
            options: [
              "As a trainer, with the roles visibly separate; when they need to actually do it, you coach",
              "Never, since holding a coaching relationship precludes prescribing for the same person",
              "Whenever the client requests it during a session, since the request itself preserves their autonomy",
              "Only after the client's physician has cleared them for structured exercise",
            ],
            correctIndex: 0,
            explanation:
              "The same person may hold both credentials; what matters is which hat is on. WELL-00 established that prescription is inside the CPT scope and outside the coaching scope.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "What does the course ask a trainer to un-learn about how movement is measured?",
            options: [
              "Fitness culture measures movement in workouts; the mortality evidence mostly counts steps, sitting hours, and everyday activity",
              "Fitness culture measures intensity; the mortality evidence measures only total weekly volume",
              "Fitness culture measures outcomes; the mortality evidence measures only behavior the participant reported themselves",
              "Fitness culture measures weekly frequency; the mortality evidence measures session duration",
            ],
            correctIndex: 0,
            explanation:
              "The unit of measurement differs, and so does the intensity range. The epidemiology's strongest findings live far below where a certification optimizes.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "What does a coach miss by only respecting training-shaped movement?",
            options: [
              "The levers that move the most sedentary clients the furthest",
              "The opportunity to build early rapport around the habits the client already has",
              "The chance to demonstrate technical expertise early in the relationship",
              "The intensity thresholds that produce cardiovascular adaptation",
            ],
            correctIndex: 0,
            explanation:
              "Steps, sitting, and everyday activity are where a sedentary client's opportunity concentrates, and they are precisely what a workout-shaped view discounts.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "What is 'everyday movement'?",
            options: [
              "The steps, chores, and postures outside structured exercise, where most of a sedentary client's opportunity lives",
              "Movement performed every day, as opposed to on a structured training schedule",
              "Low-intensity activity prescribed on recovery days between training sessions",
              "The functional patterns a client repeats in ordinary life, assessed for quality",
            ],
            correctIndex: 0,
            explanation:
              "It is defined by being outside structured exercise, not by frequency or intensity. Its coaching value is where the opportunity concentrates for the least active clients.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "State the WHO 2020 muscle-strengthening recommendation for adults 18 to 64.",
            options: [
              "Moderate or greater intensity, involving all major muscle groups, on two or more days a week",
              "Moderate or greater intensity, involving the major lower-body groups, on three or more days a week",
              "Vigorous intensity only, involving all of the major muscle groups, on two or more days each week",
              "Any intensity, involving all major muscle groups, on one or more days a week",
            ],
            correctIndex: 0,
            explanation:
              "Moderate or greater, all major muscle groups, two or more days. It sits alongside the aerobic range rather than substituting for any part of it.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What is the character of the WHO aerobic numbers, and why does the course stress it?",
            options: [
              "They are ranges with a floor and a soft ceiling, not a single pass-fail bar",
              "They are minimum thresholds below which no measurable health benefit accrues",
              "They are population averages that do not apply to individual clients",
              "They are targets set for public-health messaging rather than clinical use",
            ],
            correctIndex: 0,
            explanation:
              "150 to 300 moderate, 75 to 150 vigorous. Reading them as a bar is what turns a guideline into a report card, which the course explicitly forbids.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "Why does the course say the 65-plus recommendation is 'not a footnote' for the centenarian frame?",
            options: [
              "Falls and lost function, not missed workouts, are what end independent decades",
              "Older adults form the majority of the client base in most coaching practices",
              "The 65-plus guidance carries stronger evidence than the adult guidance",
              "Balance training is the only recommendation with mortality data behind it",
            ],
            correctIndex: 0,
            explanation:
              "The frame is about who you get to be at ninety. Functional balance and strength are what protect independence, which makes them the recommendation your future self depends on most.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What is 'multicomponent activity' in the WHO guidelines?",
            options: [
              "Varied work combining functional balance and strength, three or more days a week, for adults 65 and older",
              "Any combination of aerobic and strength work performed within a single training session",
              "Activity that trains more than one energy system within a week",
              "The mix of moderate and vigorous activity that satisfies the aerobic range",
            ],
            correctIndex: 0,
            explanation:
              "It is the 65-plus addition specifically: varied, functional balance plus strength, at moderate or greater intensity, three or more days a week.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What does 'light-intensity activity' earn under the WHO guidelines?",
            options: [
              "Credit as a replacement for sitting, since replacing sedentary time with any intensity provides benefits",
              "No credit at all, since only moderate and vigorous activity count toward the published guidelines",
              "Partial credit at half the rate of moderate activity",
              "Credit only for adults 65 and older, as part of multicomponent activity",
            ],
            correctIndex: 0,
            explanation:
              "The guideline sentence is explicit that replacing sitting with activity of ANY intensity, including light, provides benefits. It does not count toward the aerobic minutes, but it is not uncredited.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What are the four directions on the guidelines menu a client can pick from?",
            options: [
              "More minutes, more intensity, more strength days, less sitting, or better balance work",
              "More frequency, more duration, more load, or more variety in the training week",
              "More cardio, more strength, more mobility, or more recovery",
              "More steps, more workouts, more consistency, or more supervision",
            ],
            correctIndex: 0,
            explanation:
              "Each direction corresponds to something the guidelines actually address. The client picks the direction; WELL-01's tools carry it.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What does 'MVPA' abbreviate, and what is notable about the vigorous band?",
            options: [
              "Moderate-to-vigorous physical activity; the vigorous band earns credit at half the minutes",
              "Maximal voluntary physical activity; the vigorous band is capped for safety in older adults",
              "Measured vigorous physical activity; the vigorous band requires device confirmation",
              "Moderate-to-vigorous physical activity; the vigorous band counts double toward strength days",
            ],
            correctIndex: 0,
            explanation:
              "150 to 300 moderate minutes or 75 to 150 vigorous, which is the half-minutes exchange rate. Vigorous work does not substitute for the strength recommendation.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "Why does the course say WHO's refusal to set a sitting threshold is 'what honesty looks like'?",
            options: [
              "The evidence was insufficient to quantify one, and saying so beats inventing a number",
              "Setting a numeric threshold would have implied that sitting below it is safe",
              "Thresholds are outside the WHO's remit for behavioral recommendations",
              "The available studies disagreed too sharply to permit any recommendation",
            ],
            correctIndex: 0,
            explanation:
              "They recommend limiting sedentary time AND state the evidence could not support a threshold. The course treats that refusal as a model rather than a weakness.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "How large was the sitting-and-mortality meta-regression, and what shape did it find?",
            options: [
              "19 studies, over a million participants; a log-linear association with no cliff",
              "10 cohorts, 647,475 participants; a J-shaped association with a clear inflection",
              "19 studies, 226,889 participants; a threshold effect beginning at 8 hours",
              "57 studies across 35 cohorts; a linear association flattening above 9 hours",
            ],
            correctIndex: 0,
            explanation:
              "19 studies, over a million people, log-linear. The 647,475 figure belongs to the TV-time meta-analysis, and 57 studies across 35 cohorts is the 2025 step analysis.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "Why does the self-reported sitting cut-off read LOWER than the device-measured one?",
            options: [
              "People underestimate their own sitting, so the self-report scale reads lower at the same true exposure",
              "Self-report studies enrolled more sedentary populations on average",
              "Devices capture standing and fidgeting time that self-report classifies as sitting",
              "Self-report studies had shorter follow-up, detecting risk earlier",
            ],
            correctIndex: 0,
            explanation:
              "Underestimation shifts the whole scale. Seven hours of reported sitting corresponds to more actual sitting, which is why the apparent threshold appears earlier.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What is the verification note attached to the '8 hours of sitting' figure?",
            options: [
              "It traces to a conference abstract; the published paper reports method-dependent cut-offs of about 7 and 9 hours",
              "It comes from an older guideline superseded by the 2020 WHO recommendations",
              "It is a rounding of the device-measured 9-hour figure, widely repeated",
              "It applies only to adults over 60, though it circulates as a general rule",
            ],
            correctIndex: 0,
            explanation:
              "A conference abstract versus the published meta-regression. The course teaches what the primary says, and flags the drift rather than quietly correcting it.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What is a 'method-dependent cut-off'?",
            options: [
              "A threshold that moves with how the exposure was measured, like sitting's 7-versus-9-hour split",
              "A threshold that applies only within the specific population a given study measured",
              "A cut-off chosen by the analysts rather than emerging from the data",
              "A threshold that differs between self-selected and randomized samples",
            ],
            correctIndex: 0,
            explanation:
              "The measurement instrument moves the number. The course calls it a lesson in reading rules skeptically, and it is the reflex the sit-less lesson reinforces later.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "Why is TV sitting the worst-behaving flavor of sitting?",
            options: [
              "It is long, unbroken, evening-loaded, and snack-adjacent",
              "It is the only sitting flavor measured by device rather than self-report",
              "It replaces sleep more often than other sedentary activities",
              "It correlates most strongly with total occupational sitting hours across the week",
            ],
            correctIndex: 0,
            explanation:
              "Four features, each of which a client can see. That visibility is what makes it the single most coachable sitting target they own.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What is a 'J-shaped dose-response'?",
            options: [
              "Roughly flat risk at low doses that bends upward as dose grows",
              "Risk falling steeply and then plateauing, with no harm detected at the top of the range",
              "Risk rising steadily with dose, with no inflection anywhere",
              "Risk highest at both extremes and lowest in the middle of the range",
            ],
            correctIndex: 0,
            explanation:
              "Flat then bending upward, which is the shape of the TV-time association. Risk highest at both extremes would be U-shaped, and steady rise is the log-linear sitting shape.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "How should sit-less be taught to a client?",
            options: [
              "As a direction: no safe number to hide under and no doom number to panic over",
              "As a daily ceiling the client tracks and deliberately stays beneath",
              "As a ratio of sitting to standing hours across the working day",
              "As a target derived from the client's measured baseline plus a reduction",
            ],
            correctIndex: 0,
            explanation:
              "Direction, not threshold. The log-linear shape means every hour moved is worth something and no number confers safety, which is what a ceiling would falsely imply.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What is 'sedentary behavior' as this course defines it?",
            options: [
              "Waking time spent sitting or reclining at low energy expenditure; a risk exposure in its own right",
              "Any waking time not spent in moderate-intensity or vigorous-intensity activity",
              "The absence of structured exercise across a day or week",
              "Time spent below the light-intensity threshold, including sleep",
            ],
            correctIndex: 0,
            explanation:
              "Waking, sitting or reclining, low expenditure. The crucial half is 'in its own right': sitting is an exposure, not merely the absence of exercise.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "A client meets the 150-minute aerobic guideline and sits eleven hours a day. What does the evidence say?",
            options: [
              "Sitting is an exposure in its own right, so the guideline minutes do not neutralize it",
              "The guideline aerobic minutes offset sedentary risk entirely once they are met",
              "Sitting only carries risk in adults not meeting the aerobic guideline",
              "Nothing; the sitting evidence applies only to device-measured populations",
            ],
            correctIndex: 0,
            explanation:
              "WHO recommends limiting sedentary time as a separate recommendation, and the sitting associations persist after adjusting for exercise in the cited analyses.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "A client says 'I only have twenty minutes three times a week, so it's pointless.' Which guideline sentence answers them?",
            options: [
              "Some physical activity is better than none, and people not meeting the recommendations gain health benefits from doing SOME",
              "Adults should accumulate 150 to 300 minutes of moderate activity weekly",
              "Adults should limit sedentary time and replace it with activity of any intensity",
              "Muscle-strengthening activity should involve all major muscle groups twice weekly",
            ],
            correctIndex: 0,
            explanation:
              "That sentence exists precisely for below-guideline clients. The sitting sentence is the second authorization, but it answers a different objection.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What is 'dose evidence,' and what does it let a coach do?",
            options: [
              "The epidemiology linking amounts of movement to health outcomes; it lets a coach set targets honestly instead of by convention",
              "The trial evidence for how much exercise produces a given adaptation",
              "The measured relationship between training load and injury risk",
              "The guideline minimums published by recognized authorities",
            ],
            correctIndex: 0,
            explanation:
              "Outcome epidemiology, and the alternative it displaces is convention. The 10,000-step target is exactly the convention the dose evidence replaces.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "Which is a 'thin bridge' design decision in this course?",
            options: [
              "Refusing to teach programming, because the CPT and CES already carry it",
              "Teaching published guidelines rather than individualized targets, because targets would require assessment",
              "Covering steps and sitting rather than strength, because the evidence is stronger",
              "Deferring the clinical populations to the capstone, because scope questions come first",
            ],
            correctIndex: 0,
            explanation:
              "Nothing twice. The design rule is to teach only the coaching layer over content another credential already covers, which is why programming is absent by intention.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "How does the centenarian frame appear in this course?",
            options: [
              "Every dose curve is one you are personally on for the next several decades, and the capstone asks what you did about it",
              "Every lesson includes its own section on coaching adults over the age of 65",
              "Every recommendation is adjusted for expected age-related decline",
              "Every claim is evaluated for its evidence over multi-decade follow-up",
            ],
            correctIndex: 0,
            explanation:
              "You are the first client. The frame is personal application rather than an age-specific content adjustment, which is why the capstone can build on it.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "A client asks how many hours of sitting is 'safe.' What is the honest answer?",
            options: [
              "There is no threshold; the association is log-linear, so every hour reduced is worth something",
              "About 8 hours a day, per the widely cited meta-analysis of sitting time",
              "About 7 hours if self-tracked, since that matches the self-report evidence",
              "About 9 hours, per the device-measured evidence, which is the more accurate ruler",
            ],
            correctIndex: 0,
            explanation:
              "The two figures describe where risk becomes clearly detectable under different measurement methods, not a safe allowance. The shape has no cliff, so no number confers safety.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "Which is the strongest reason the WHO guidelines fit inside coaching scope as education?",
            options: [
              "They are evidence-based resources from a nationally recognized authority, which the scope explicitly permits sharing",
              "They are population-level rather than individualized, so they cannot constitute prescription",
              "They are published freely, so no professional interpretation is required",
              "They concern behavior rather than treatment, which places them outside any practice act",
            ],
            correctIndex: 0,
            explanation:
              "That phrasing is the scope document's own permission, taught in WELL-00. The other reasons are plausible but not the ground the scope actually gives.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "Why does the course insist guidelines are never a report card?",
            options: [
              "Grading a client against a range they cannot yet reach converts education into judgment",
              "The guidelines lack the individual precision that grading would require",
              "Grading falls outside the coach's scope, which excludes assessment",
              "Clients who fail a standard disengage from the measurement rather than the behavior",
            ],
            correctIndex: 0,
            explanation:
              "The lesson pairs 'never as a report card' with using them as education and a menu of directions. Judgment is the failure mode; the guideline's own 'some is better than none' sentence is the antidote.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "A colleague cites 'the 8-hour sitting rule' in a client handout. What should you say?",
            options: [
              "The published meta-regression reports method-dependent cut-offs of about 7 and 9 hours, and the flat 8 traces to a conference abstract",
              "The rule is correct but applies only to device-measured sitting",
              "The rule is correct for adults under 60 and should be lowered for older clients",
              "The rule is superseded by the WHO guidelines, which set a 6-hour limit",
            ],
            correctIndex: 0,
            explanation:
              "WHO set no numeric limit at all, and the published paper's cut-offs move with the measurement method. Correcting a circulated number to its primary is the habit this course drills.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "What does 'log-linear association' mean for how a coach talks about sitting?",
            options: [
              "Risk rises steadily with dose without a cliff, so reduction at any level is worthwhile and no level is safe",
              "Risk rises sharply after a threshold, so the goal is staying under it",
              "Risk rises proportionally to the logarithm of exposure, so the first hours matter most",
              "Risk is unrelated to dose below a floor, so only extreme sitting is coachable",
            ],
            correctIndex: 0,
            explanation:
              "Steady rise, no cliff. That shape is exactly what licenses teaching sit-less as a direction rather than as a threshold to stay under.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
          },
          {
            prompt: "Which two things does the course say survive when the gym does not?",
            options: [
              "Everyday movement and the sit-less day, since they need no facility or schedule",
              "Strength work and mobility work, since both of them can be done at home",
              "Steps and structured cardio, since both are measurable",
              "The client's motivation and the coach's accountability structure",
            ],
            correctIndex: 0,
            explanation:
              "The everyday-movement lever survives injuries, travel, and every season in which structured training does not, which is what makes it the durable half of this pillar.",
            sourceLessonSlug: "coaching-movement-not-prescribing",
          },
          {
            prompt: "A client meets the aerobic guideline but does no strength work. Under the guidelines, what is missing?",
            options: [
              "Muscle-strengthening at moderate or greater intensity, all major muscle groups, two or more days a week",
              "Nothing; the aerobic guideline is the primary recommendation and strength is optional",
              "Multicomponent balance work, which applies at all adult ages",
              "Vigorous-intensity work, which the aerobic range requires alongside moderate activity",
            ],
            correctIndex: 0,
            explanation:
              "Strength is a separate recommendation, not a substitute or an option. Multicomponent balance work is the 65-plus addition, and vigorous activity is an alternative to moderate rather than a requirement.",
            sourceLessonSlug: "who-numbers-as-a-coach",
          },
          {
            prompt: "What is the coaching consequence of sitting being 'a risk exposure in its own right'?",
            options: [
              "It becomes a target to coach directly, separate from and alongside the activity conversation",
              "It becomes the primary target, replacing activity for sedentary clients",
              "It becomes relevant only once the client meets the activity guideline",
              "It becomes a measurement problem rather than a behavioral one",
            ],
            correctIndex: 0,
            explanation:
              "Two conversations, not one. If sitting were merely absent activity, coaching activity would handle it; because it is its own exposure, it earns its own coaching target.",
            sourceLessonSlug: "sitting-the-threshold-that-isnt",
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

    {
      slug: "quiz-steps",
      title: "7 · Knowledge check: steps",
      section: "Section 2 · Steps",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does this course call steps 'the most coachable dose in health'?",
            options: [
              "Universally understood, passively counted, and mapped against mortality by multiple large meta-analyses that agree",
              "Because step targets are published in the WHO 2020 guidelines alongside the weekly aerobic minutes",
              "Because steps correlate more strongly with fitness than any other field measure",
              "Because step counting requires no equipment a client does not already own",
            ],
            correctIndex: 0,
            explanation:
              "Three properties plus the agreement between analyses. Note that steps are NOT a WHO metric, which is one reason the 10,000 figure had to come from somewhere else.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What did Jayedi et al. find per additional 1,000 daily steps, and across how many cohorts?",
            options: [
              "12 percent lower all-cause mortality (HR 0.88), across 7 cohorts",
              "15 percent lower all-cause mortality (HR 0.85), across 7 cohorts",
              "12 percent lower all-cause mortality (HR 0.88), across 17 cohorts",
              "7 percent lower cardiovascular mortality (HR 0.93), across 7 cohorts",
            ],
            correctIndex: 0,
            explanation:
              "Twelve percent across 7 cohorts. The 15 percent figure and the 17-cohort count belong to Banach, and the 7 percent figure is Banach's per-500-step cardiovascular result.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "Over what step range did Jayedi et al. find risk falling linearly, and what was the hazard ratio at 10,000?",
            options: [
              "About 2,700 to 17,000 steps a day, with HR 0.44 at 10,000",
              "About 2,000 to 12,000 steps a day, with a hazard ratio of 0.53 at the 10,000-step mark",
              "About 4,000 to 20,000 steps a day, with HR 0.44 at 10,000",
              "About 2,700 to 17,000 steps a day, with HR 0.60 at 10,000",
            ],
            correctIndex: 0,
            explanation:
              "2,700 to 17,000, HR 0.44 at ten thousand. The evidence was graded strong for its effect size and dose-response gradient.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "How large was the Banach pooled analysis, and what did it price a 500-step increment at?",
            options: [
              "17 cohorts and 226,889 people; a 500-step increment bought 7 percent lower cardiovascular mortality",
              "17 cohorts and 226,889 people; a 500-step increment bought 15 percent lower all-cause mortality",
              "15 cohorts and 47,471 people; a 500-step increment bought 7 percent lower cardiovascular mortality",
              "7 cohorts and 226,889 people; a 500-step increment bought 12 percent lower all-cause mortality",
            ],
            correctIndex: 0,
            explanation:
              "The largest pooled analysis: 15 percent per 1,000 steps for all-cause mortality, and 7 percent per 500 steps for cardiovascular mortality. The 15-cohort figure belongs to Paluch.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "Against a reference of 1,895 steps, what did Liu et al. associate with roughly 4,000 steps a day?",
            options: [
              "37 percent lower mortality risk",
              "60 percent lower mortality risk",
              "75 percent lower mortality risk",
              "12 percent lower mortality risk",
            ],
            correctIndex: 0,
            explanation:
              "37 percent at about 4,000. The 60 percent figure is 6,388 steps and 75 percent is roughly 10,000, against the same 1,895-step reference.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What minimal significant doses did the cardiology meta-analysis identify, and against what reference?",
            options: [
              "About 2,600 steps for mortality and 2,800 for cardiovascular disease, against a 2,000-step reference",
              "About 4,000 steps for mortality and 4,400 for cardiovascular disease, against a 2,000-step reference",
              "About 2,600 steps for mortality and 2,800 for cardiovascular disease, against a 1,895-step reference",
              "About 5,000 steps for both outcomes, against a 2,000-step reference",
            ],
            correctIndex: 0,
            explanation:
              "2,600 and 2,800 against a 2,000-step reference. The 1,895-step reference belongs to Liu, and the numbers are not interchangeable between analyses.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What optimal doses did Stens et al. report, and what additional finding accompanied them?",
            options: [
              "About 8,800 for mortality and 7,200 for cardiovascular disease, with independent benefit from brisker cadence",
              "About 7,000 for both outcomes, with independent benefit from morning stepping",
              "About 10,000 for mortality and 8,000 for cardiovascular disease, with no cadence effect detected",
              "About 8,800 for mortality and 7,200 for cardiovascular disease, with benefit confined to under-60s",
            ],
            correctIndex: 0,
            explanation:
              "8,800 and 7,200, plus cadence carrying mortality benefit independent of total steps. That last finding is what makes 'walk a bit brisker' a legitimate separate target.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What is 'cadence,' and why does it matter here?",
            options: [
              "Stepping rate; brisker cadence carried mortality benefit independent of total steps",
              "The regularity of a client's stepping across the week, independent of daily totals",
              "The ratio of walking to running steps within a day's total",
              "The consistency of step count between weekdays and weekends",
            ],
            correctIndex: 0,
            explanation:
              "Rate, not regularity or composition. Its independence from total steps is the point: a client at their plateau can still gain from stepping faster.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What does 'hazard ratio 0.88' mean?",
            options: [
              "12 percent lower risk in one group than the reference group over time",
              "An 88 percent lower risk in one group than in the reference group, measured over time",
              "An 88 percent chance of the outcome in the exposed group",
              "A risk 0.88 times the absolute rate in the general population",
            ],
            correctIndex: 0,
            explanation:
              "One minus 0.88. Reading a hazard ratio as a percentage of the outcome rather than a ratio of risks is the commonest error with this statistic.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What is a 'dose-response gradient,' and why does the course call it strong evidence?",
            options: [
              "Risk changing steadily with dose; it is one of the strongest signals observational evidence can show",
              "The steepness of the risk curve at its lowest doses, where confounding is least likely",
              "The consistency of an effect across a range of different populations and study designs",
              "The presence of a threshold below which no association is detectable",
            ],
            correctIndex: 0,
            explanation:
              "A graded relationship is much harder to produce by confounding than a single contrast, which is why it strengthens a causal reading of observational data.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What does the agreement of five independent teams establish, per this lesson?",
            options: [
              "One shape: steep gains from a very low floor, continuing gains through the middle thousands, flattening near five digits",
              "That the step-and-mortality relationship is genuinely causal rather than merely associational",
              "That 7,000 steps is the correct universal target for all adults",
              "That step counting is more reliable than device-measured activity minutes",
            ],
            correctIndex: 0,
            explanation:
              "Convergent shape across overlapping but distinct cohorts. Convergence strengthens the finding; it does not by itself convert observational data into causal proof.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What do the step analyses NOT find?",
            options: [
              "A minimum you must clear before benefits begin, or harm at the top of the range",
              "Any benefit below 4,000 steps a day",
              "Any consistency between self-reported step counts and device-measured ones",
              "Any difference in the curve between men and women",
            ],
            correctIndex: 0,
            explanation:
              "No entry threshold and no harm at high counts. Both absences matter for coaching: the first authorizes starting anywhere, the second removes a reason to cap.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "What is this course's default step prescription?",
            options: [
              "The client's measured baseline plus roughly a thousand, renegotiated as the curve flattens",
              "Seven thousand steps a day for every adult client",
              "The age-appropriate plateau: 6,000 to 8,000 over 60, 8,000 to 10,000 under 60",
              "Ten thousand steps a day, retained because it is a simple and memorable standard",
            ],
            correctIndex: 0,
            explanation:
              "Baseline first (most phones already know it), then the next thousand. A universal number, even a well-evidenced one, ignores where the individual client sits on the curve.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Where does the 10,000-step target actually come from?",
            options: [
              "Pedometer marketing, not epidemiology",
              "An early WHO recommendation later withdrawn",
              "A Japanese public-health campaign that was based on national cohort data",
              "The upper bound of the Jayedi linear range, rounded",
            ],
            correctIndex: 0,
            explanation:
              "Marketing. The course's instruction is to retire it as a moral standard and keep it as one option on a shelf, since the evidence does support it as a reasonable target for the already active.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "How large was the 2025 multi-outcome analysis, and what did it compare?",
            options: [
              "57 studies across 35 cohorts, comparing 7,000 steps a day against 2,000 across nine outcomes",
              "35 studies across 57 cohorts, comparing 10,000 steps against 4,000 across nine outcomes",
              "17 cohorts and 226,889 people, comparing 7,000 steps against 2,000 across four outcomes",
              "57 studies across 35 cohorts, comparing 7,000 steps against a 1,895-step reference",
            ],
            correctIndex: 0,
            explanation:
              "The broadest analysis yet: 57 studies, 35 cohorts, 7,000 versus 2,000 steps, nine outcomes priced separately.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "In the 2025 analysis, what did 7,000 steps buy for all-cause mortality against 2,000?",
            options: [
              "47 percent lower risk (hazard ratio 0.53)",
              "37 percent lower risk (hazard ratio 0.63)",
              "60 percent lower risk (hazard ratio 0.40)",
              "25 percent lower risk (hazard ratio 0.75)",
            ],
            correctIndex: 0,
            explanation:
              "HR 0.53, a 47 percent reduction. The 37 percent figure is cancer mortality in the same analysis, and 25 percent is cardiovascular disease incidence.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What did 7,000 steps versus 2,000 buy for dementia risk and fall risk?",
            options: [
              "38 percent lower dementia risk and 28 percent lower fall risk",
              "A 22 percent lower dementia risk and a 38 percent lower risk of falling",
              "38 percent lower dementia risk and 14 percent lower fall risk",
              "28 percent lower dementia risk and 38 percent lower fall risk",
            ],
            correctIndex: 0,
            explanation:
              "38 percent dementia, 28 percent falls. The 22 percent figure is depressive symptoms and 14 percent is type 2 diabetes incidence.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Which outcome carried the WEAKEST evidence certainty in the 2025 analysis?",
            options: [
              "Falls",
              "Dementia",
              "All-cause mortality",
              "Cardiovascular disease incidence, across the pooled cohorts",
            ],
            correctIndex: 0,
            explanation:
              "Certainty was moderate for most outcomes, lower for some, with falls the weakest. Naming which column is softest is part of quoting the analysis honestly.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What was the authors' own interpretation of the 7,000-step finding?",
            options: [
              "10,000 remains a fine target for the already active, and 7,000 is clinically meaningful and more achievable for many",
              "10,000 should be abandoned as a target, since 7,000 captures nearly all the benefit",
              "7,000 should replace the WHO aerobic guidelines as the primary public recommendation",
              "Both figures are arbitrary, and only the individual's baseline should guide targets",
            ],
            correctIndex: 0,
            explanation:
              "Both-and, not either-or. The course adopts it directly as the coaching translation, which is why 10,000 stays on the shelf rather than being discarded.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Where do inflection points fall for most outcomes in the 2025 analysis?",
            options: [
              "Around 5,000 to 7,000 steps a day",
              "Around 7,000 to 9,000 steps a day, across most outcomes",
              "Around 2,600 to 2,800 steps a day",
              "Around 8,800 to 10,000 steps a day",
            ],
            correctIndex: 0,
            explanation:
              "5,000 to 7,000 for most outcomes. The 2,600-to-2,800 range is where benefit first becomes detectable, which is a different question from where gains begin flattening.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What did Paluch et al. find about age and the mortality plateau?",
            options: [
              "Risk fell until about 6,000 to 8,000 steps for adults 60 and older, and about 8,000 to 10,000 for adults under 60",
              "Risk fell until about 7,000 steps in both age groups, with no age difference detected",
              "Risk fell until about 8,000 to 10,000 steps for adults 60 and older, and 6,000 to 8,000 for under 60",
              "Risk fell continuously in both age groups with no plateau below 12,000 steps",
            ],
            correctIndex: 0,
            explanation:
              "Older adults plateau earlier. That is the finding that lets an older client own the fact that their optimal is nearer than they feared.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What hazard ratios did the higher step quartiles carry in Paluch, and what was the lowest quartile's median?",
            options: [
              "0.60, 0.55, and 0.47 against a lowest quartile whose median was 3,553 steps",
              "0.88, 0.76, and 0.44 against a lowest quartile whose median was 1,895 steps",
              "0.53, 0.47, and 0.40 against a lowest quartile whose median was 2,000 steps",
              "0.60, 0.55, and 0.47 against a lowest quartile whose median was 2,700 steps",
            ],
            correctIndex: 0,
            explanation:
              "0.60, 0.55, 0.47 against a 3,553-step median. The 1,895 reference belongs to Liu and 2,000 to Stens; each analysis has its own baseline.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "How should a coach answer a 68-year-old asking whether 7,200 daily steps is 'enough'?",
            options: [
              "For their age group the curve plateaus around 6,000 to 8,000, so 7,200 sits at their own optimum; next gains likely come from balance, strength, and cadence",
              "It falls short of the 10,000-step standard, so a gradual increase is warranted",
              "It exceeds the 7,000-step threshold, so no further movement work is needed",
              "Step counts are unreliable at that age, so a different metric should be used",
            ],
            correctIndex: 0,
            explanation:
              "They are at their curve's plateau, not short of a younger person's number. The redirect to balance, strength, and cadence is where their remaining gains actually sit.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Why does the course say the dementia, depression, and falls columns 'matter most here'?",
            options: [
              "They are arguments about who you get to BE at ninety, for clients who stopped caring about their cardiovascular system years ago",
              "They carry the strongest evidence certainty in the 2025 analysis",
              "They are the outcomes a CPT is not already equipped to discuss",
              "They respond faster to increased steps than cardiovascular outcomes do",
            ],
            correctIndex: 0,
            explanation:
              "Your CPT already argued for steps via the heart. What the newest data adds is the identity-and-independence argument, which reaches clients the cardiovascular pitch does not.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What is an 'inflection point' on a dose-response curve?",
            options: [
              "Where steep gains begin flattening",
              "Where benefit first becomes statistically detectable",
              "Where the curve reverses and additional dose becomes harmful",
              "Where the majority of the study population's exposure sits",
            ],
            correctIndex: 0,
            explanation:
              "Flattening, not first detection and not reversal. The step curves have an inflection and no reversal, which is why no harm is found at the top.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What is a 'minimal effective dose' in this course's step vocabulary?",
            options: [
              "The lowest amount at which benefit is statistically detectable, about 2,600 steps against a 2,000-step reference",
              "The dose at which the curve's gains begin flattening, around 5,000 to 7,000 steps",
              "The dose required to meet the WHO aerobic guideline through walking alone",
              "The dose below which a client is classified as sedentary",
            ],
            correctIndex: 0,
            explanation:
              "Detectability, not flattening or classification. It is the number that proves there is no entry threshold a client must clear before starting to benefit.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "A sedentary client walks 2,400 steps a day and asks whether it is worth increasing. What does the evidence support?",
            options: [
              "The first thousand steps a sedentary client adds are the most valuable thousand anyone can buy",
              "They should reach 7,000 before the increase becomes clinically meaningful",
              "Benefit begins around 4,000 steps, so the first 1,600 are preparatory",
              "Steps below 5,000 carry no detectable mortality association",
            ],
            correctIndex: 0,
            explanation:
              "The curve is steepest at the bottom, and benefit is detectable from around 2,600 steps. A client at 2,400 is standing at the most valuable part of the whole curve.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "How does the course tell a coach to establish a client's step baseline?",
            options: [
              "Measure it first, since most phones already know it, then set the next-1,000 target",
              "Ask the client to estimate their typical day, then round down for accuracy",
              "Use the population median for their age group as a starting assumption",
              "Set a standard 7,000-step target and adjust after two weeks of data",
            ],
            correctIndex: 0,
            explanation:
              "Baseline first, from data the client already has. Estimation is exactly the self-report problem the sitting lesson warned about, and a standard target ignores the individual's position on the curve.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Which claim about steps would the course NOT permit?",
            options: [
              "'Walking 10,000 steps a day will add years to your life'",
              "'Each additional thousand steps is associated with 12 to 15 percent lower mortality risk'",
              "'Benefit is detectable from around 2,600 steps a day against a 2,000-step reference'",
              "'Your age group's mortality curve plateaus around 6,000 to 8,000 steps'",
            ],
            correctIndex: 0,
            explanation:
              "It converts observational association into a personal causal promise, and it treats 10,000 as the operative number. The other three are the findings quoted at their actual precision.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What does 'the 10,000-step myth' name, and what is the honest status of the number?",
            options: [
              "A marketing artifact treated as a health law; the evidence supports it as one reasonable target among several, not a threshold",
              "A discredited figure with no support in any analysis",
              "A guideline superseded by the WHO's 2020 recommendations",
              "A target valid only for adults under 60, misapplied to older adults",
            ],
            correctIndex: 0,
            explanation:
              "The myth is the threshold status, not the number itself. Ten thousand remains a fine target for the already active; what fails is treating it as a bar everyone must clear.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What is an 'age-dependent plateau'?",
            options: [
              "Older adults' mortality curve flattening around 6,000 to 8,000 steps while younger adults' continues to about 8,000 to 10,000",
              "The decline in achievable step counts with age, requiring targets to be lowered",
              "The age at which additional steps stop producing any mortality benefit",
              "The point where an older client's curve begins to rise again with excessive steps",
            ],
            correctIndex: 0,
            explanation:
              "Where each age group's curve flattens, not a decline in capacity and not a reversal. No analysis finds harm at higher counts in any age group.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Two step analyses report different per-1,000-step figures (12 and 15 percent). How should a coach handle that?",
            options: [
              "Carry both as a range, since they come from overlapping but distinct cohort sets and agree on the shape",
              "Use the higher figure, since it came from the larger pooled analysis",
              "Use the lower figure, since conservative estimates protect against overclaiming",
              "Average them and quote a single 13.5 percent figure",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes '12 to 15 percent' precisely because two large analyses landed close but not identical. Averaging invents a number neither paper reports.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "A client at 9,000 daily steps asks how to get more out of walking without adding time. What does the evidence offer?",
            options: [
              "Brisker cadence, which carried mortality benefit independent of total steps",
              "Nothing; they are past the plateau and further gains are unavailable",
              "Splitting the same number of steps across a greater number of separate bouts",
              "Walking in the morning, which the step analyses found more beneficial",
            ],
            correctIndex: 0,
            explanation:
              "Cadence is the one step variable with an independent association in the cardiology analysis. Morning bias is a habit-formation finding, not a step-outcome one.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "The 2025 analysis priced nine outcomes. Which pairing is correct?",
            options: [
              "25 percent lower cardiovascular disease incidence and 14 percent lower type 2 diabetes incidence",
              "47 percent lower cardiovascular disease incidence and 25 percent lower type 2 diabetes incidence",
              "37 percent lower cardiovascular disease incidence and 22 percent lower type 2 diabetes incidence",
              "14 percent lower cardiovascular disease incidence and 25 percent lower type 2 diabetes incidence",
            ],
            correctIndex: 0,
            explanation:
              "CVD incidence 25 percent, type 2 diabetes 14 percent. The 47 percent figure is all-cause mortality, 37 is cancer mortality, and 22 is depressive symptoms.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Why does the course tell coaches to 'name the plateau honestly' when a client reaches it?",
            options: [
              "Because pretending gains continue linearly sets up a client to feel they are failing at a curve that has flattened",
              "Because reaching the plateau marks the point at which movement coaching should conclude",
              "Because exceeding the plateau carries a documented risk of overuse injury",
              "Because the client's tracker will otherwise show diminishing returns and undermine trust",
            ],
            correctIndex: 0,
            explanation:
              "The same honesty logic as telling clients the habit-formation range: an accurate expectation converts 'I am not improving' into 'I am where the curve flattens', and redirects effort to cadence, balance, and strength.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "Why is the client's phone the recommended source for a step baseline?",
            options: [
              "Most phones already know it, so the baseline costs the client nothing to produce",
              "Phone counts are more accurate than wrist-worn trackers",
              "Phone data can be shared directly with the coach for verification",
              "Phone counts match the measurement method used in the cohort studies",
            ],
            correctIndex: 0,
            explanation:
              "Zero-effort retrieval of existing data. It is the same passive-measurement logic that makes steps the pillar's natural self-monitoring instrument.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "What does 'evidence graded strong' mean in the Jayedi analysis?",
            options: [
              "The grading reflected the effect's size and its dose-response gradient",
              "The included studies were randomized rather than observational",
              "The finding replicated in every included cohort without exception",
              "The confidence interval excluded the null across all subgroups",
            ],
            correctIndex: 0,
            explanation:
              "Size plus gradient. Both are features that make confounding a less comfortable explanation, which is how observational evidence earns a strong grade.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "Which two things make steps 'client-owned' in a way most fitness metrics are not?",
            options: [
              "The client already carries the counter, and the number belongs to them rather than to a coach's assessment",
              "The client chooses the target, and the coach never sees the raw data",
              "The client can verify the count independently, and the device is inexpensive",
              "The client sets the measurement window, and the count resets daily",
            ],
            correctIndex: 0,
            explanation:
              "Ownership is what preserves autonomy, which SDT names as the need driving maintained behavior. A metric the coach administers is a different psychological object.",
            sourceLessonSlug: "the-7000-step-day",
          },
          {
            prompt: "A client hits 7,000 steps and asks what to add. What does the evidence suggest, in order?",
            options: [
              "Cadence, then strength and balance work, since the step curve is flattening",
              "More steps, since no harm is found at higher counts",
              "Structured cardio, since steps alone cannot meet the aerobic guideline",
              "Sitting reduction, since it is independent of step count",
            ],
            correctIndex: 0,
            explanation:
              "Cadence carried independent mortality benefit, and the WHO guidelines add strength and, at 65-plus, balance. More steps is not wrong, but it is the flattest part of the curve.",
            sourceLessonSlug: "step-dose-response",
          },
          {
            prompt: "Why does the course quote three different reference baselines across the step analyses?",
            options: [
              "Each meta-analysis chose its own, so a figure only means something against the baseline its paper used",
              "The baselines correspond to different age groups within the same pooled data",
              "Later analyses raised the baseline as population activity levels rose",
              "The baselines reflect self-reported versus device-measured step counts",
            ],
            correctIndex: 0,
            explanation:
              "1,895 in Liu, 2,000 in Stens, a 3,553 median in Paluch's lowest quartile. Quoting a percentage without its baseline is how step findings get inflated in circulation.",
            sourceLessonSlug: "step-dose-response",
          },
        ],
      },
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

**The finding that complicates the arithmetic.** There is a second honest limit, and it is the one most likely to make a coach overpromise. The intuitive model says daily energy expenditure is additive: add movement, add burn, subtract fat. Pontzer and colleagues measured total energy expenditure in 332 adults across five populations and found the relationship is **not** additive at the top. Expenditure rose with physical activity in the lower range and then **plateaued**, so that the most active people spent little more than the moderately active ones. The proposed explanation is metabolic compensation: the body absorbs added activity by trimming expenditure elsewhere rather than letting the daily total climb indefinitely (Pontzer et al., 2016).

Two things follow, and a coach should hold both. First, the plateau sits at the HIGH end, so it does not touch the sedentary client whose next thousand steps are the most valuable thousand anyone can buy; the steep part of the curve is exactly where the constrained model still behaves additively. Second, it does undercut calorie arithmetic as a selling tool: telling an already-active client that a daily walk simply adds 300 kilocalories to their ledger promises something the constrained model says may not arrive. Coach movement for the mortality, dementia, and falls curves from sections 2 and 3, which are outcome evidence, rather than for an energy-balance sum the physiology may quietly cancel.

**Now the honest limit.** From these findings it is tempting to prescribe NEAT as an obesity treatment. The review literature itself flags the gap: there is a lack of randomized controlled trials testing whether NEAT-promotion strategies actually treat obesity (Chung et al., 2018). The observational and physiological case is strong; the intervention case is unproven.

**How to coach it anyway.** NEAT-building is high-plausibility, near-zero-risk, fully in-scope behavior change: more standing, more walking errands, movement snacks between blocks of sitting. Coach it as exactly that, a well-grounded bet rather than a proven therapy, and you stay on the right side of both the evidence and the honesty standard this program runs on.

:::reveal Give the two Levine numbers a coach should carry, precisely. ||| Overfeeding: two-thirds of the rise in daily energy expenditure was NEAT, and NEAT activation predicted resistance to fat gain (ten-fold differences in fat storage). Posture: obese participants sat two hours longer per day than lean, worth roughly 350 kilocalories a day if the pattern flipped.

:::reveal What is the NEAT evidence gap, and how does a coach frame NEAT because of it? ||| No randomized trials yet show NEAT-promotion treats obesity. So the coach frames NEAT-building as a high-plausibility, near-zero-risk, in-scope bet, never a proven therapy, which keeps the coaching honest and the expectations survivable.

## Vocabulary
- **Overfeeding study**: Levine's 1999 experiment: 1,000 surplus kilocalories daily for eight weeks; NEAT activation explained who stayed lean.
- **Posture allocation**: how a day divides among sitting, standing, and moving; measured every half-second in the 2005 study and stable across weight change.
- **NEAT activation**: the unconscious increase in everyday movement some bodies produce under caloric surplus; the difference between banking a surplus and spending it.
- **Evidence gap**: a claim's missing piece, here the absence of randomized trials for NEAT-promotion as treatment; naming gaps is a feature of this program, not hedging.
- **Constrained total energy expenditure**: Pontzer's model in which daily expenditure rises with activity then plateaus, because the body compensates elsewhere rather than letting the total climb without limit.
- **Metabolic compensation**: the trimming of other expenditure that absorbs added activity; the proposed mechanism behind the plateau, and the reason calorie arithmetic overpromises in active people.
- **Additive model**: the intuitive assumption that every added minute of movement adds proportionally to the daily energy total; accurate at the low end of the activity range, unreliable at the high end.

## Sources
Chung, N., Park, M. Y., Kim, J., et al. (2018). Non-exercise activity thermogenesis (NEAT): A component of total daily energy expenditure. *Journal of Exercise Nutrition & Biochemistry, 22*(2), 23-30. https://pmc.ncbi.nlm.nih.gov/articles/PMC6058072/

Levine, J. A., Eberhardt, N. L., & Jensen, M. D. (1999). Role of nonexercise activity thermogenesis in resistance to fat gain in humans. *Science, 283*(5399), 212-214. https://pubmed.ncbi.nlm.nih.gov/9880251/

Levine, J. A., Lanningham-Foster, L. M., McCrady, S. K., et al. (2005). Interindividual variation in posture allocation: Possible role in human obesity. *Science, 307*(5709), 584-586. https://pubmed.ncbi.nlm.nih.gov/15681386/

Pontzer, H., Durazo-Arvizu, R., Dugas, L. R., et al. (2016). Constrained total energy expenditure and metabolic adaptation to physical activity in adult humans. *Current Biology, 26*(3), 410-417. https://pubmed.ncbi.nlm.nih.gov/26832439/`,
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
          {
            prompt: "What three things does NEAT's definition exclude?",
            options: [
              "Sleeping, eating, sports-like exercise",
              "Sleeping, sitting, and structured training",
              "Resting metabolism, digestion, and exercise",
              "Sleeping, eating, and occupational activity",
            ],
            correctIndex: 0,
            explanation:
              "Levine's definition: energy expended for everything that is NOT sleeping, eating, or sports-like exercise. Occupational activity is squarely inside NEAT and is in fact its largest driver.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "Why does NEAT dwarf workouts for most people?",
            options: [
              "Structured exercise is three or four hours a week; NEAT spans the rest of waking life",
              "NEAT burns energy at a higher rate per minute than moderate exercise",
              "Most clients skip more workouts than they complete",
              "NEAT includes the recovery cost of training, which exceeds the session itself",
            ],
            correctIndex: 0,
            explanation:
              "Arithmetic of exposure, not intensity. NEAT is also the main variable component of daily energy expenditure BETWEEN people, which is why two same-sized clients on the same gym schedule can live in very different energy budgets.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What is 'total daily energy expenditure,' and what is NEAT's place in it?",
            options: [
              "Everything a body spends in a day; NEAT is its main variable component between people",
              "The sum of resting metabolism and exercise; NEAT is a third category added to both",
              "The energy spent on movement only; NEAT accounts for roughly half of it",
              "The daily calorie target a coach calculates; NEAT is the adjustable portion",
            ],
            correctIndex: 0,
            explanation:
              "Everything spent in a day, with NEAT the main source of BETWEEN-person variability. That between-person framing is what makes it a coaching target rather than a physiological footnote.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What does NEAT reframe about the movement conversation?",
            options: [
              "It moves off the binary of trained-or-skipped: a collapsed week still owns a hundred waking hours",
              "It shifts the target from behavior to metabolism, which responds faster",
              "It replaces the guideline minutes with a total-expenditure target",
              "It makes step counting unnecessary, since NEAT captures more of the day",
            ],
            correctIndex: 0,
            explanation:
              "The binary is what makes a missed week feel like a failed week. NEAT coaching is behavior, environment, and habit, fully inside scope, and it survives injuries, travel, and every season the gym does not.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "Which is the single largest NEAT driver?",
            options: [
              "Occupation: a standing or walking job versus a seated one outweighs most training plans",
              "Transportation: whether a person drives, walks, or takes public transit",
              "Household chores, which accumulate across every day of the week",
              "Fidgeting, which the overfeeding data showed dominates the variance",
            ],
            correctIndex: 0,
            explanation:
              "Occupation is the giant. Transportation, stairs, chores, standing on calls, and fidget-level movement follow, and each is a smaller but genuine layer.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What does this lesson deliberately NOT claim about NEAT?",
            options: [
              "Precise individual prescriptions: exact standing hours, exact calorie promises",
              "That NEAT is the main variable component of daily energy expenditure",
              "That occupation is the largest driver of between-person differences",
              "That NEAT-building is inside the coaching scope of practice",
            ],
            correctIndex: 0,
            explanation:
              "Magnitude and variability are well established; precise individual prescriptions are not. The lesson names the restraint explicitly rather than letting a confident number slip in.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What is 'fidget-level movement,' and what does the evidence say about it?",
            options: [
              "The smallest NEAT layer, posture shifts and restlessness; the overfeeding data shows it is not trivial",
              "Involuntary movement during sleep, excluded from NEAT by definition",
              "Movement below the light-intensity threshold, which the guidelines do not credit",
              "The tremor and micro-movement that accounts for most resting expenditure",
            ],
            correctIndex: 0,
            explanation:
              "Smallest layer, non-trivial magnitude. Levine's overfeeding participants ramped it unconsciously, and how much they ramped it predicted how much fat they did not gain.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "Describe the overfeeding experiment's design.",
            options: [
              "Sixteen non-obese adults, 1,000 kcal daily above maintenance, eight weeks",
              "Sixteen obese adults fed 1,000 kcal a day above maintenance for four weeks",
              "Thirty-two non-obese adults fed 500 kcal a day above maintenance for twelve weeks",
              "Sixteen non-obese adults randomized to overfeeding or maintenance for eight weeks",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen non-obese adults, 1,000 surplus kilocalories daily, eight weeks. It was an overfeeding protocol applied to all participants rather than a randomized comparison.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What fraction of the rise in total daily energy expenditure came from NEAT in the overfeeding study?",
            options: [
              "Two-thirds",
              "One-third",
              "About half",
              "Roughly ninety percent",
            ],
            correctIndex: 0,
            explanation:
              "Two-thirds, from the unconscious ramp-up of fidgeting, posture, and daily movement. The body's answer to surplus was largely to move more, in some people.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What did NEAT activation predict in the overfeeding study, and how large was the variation?",
            options: [
              "Resistance to fat gain (r = 0.77), with fat storage varying ten-fold across participants",
              "Total weight gain (correlation 0.44), with weight varying three-fold across participants",
              "Resistance to fat gain (correlation 0.44), with fat storage varying three-fold across participants",
              "Change in resting metabolic rate (correlation 0.77), with no variation in fat storage",
            ],
            correctIndex: 0,
            explanation:
              "Correlation 0.77 with resistance to fat gain, and ten-fold variation in fat storage. The lesson's summary: some bodies answer surplus by moving more, others bank it.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "How was posture measured in the 2005 study, and for how long?",
            options: [
              "Motion-sensing underwear sampling position every half-second, ten days",
              "Accelerometers worn at the hip sampling every minute, for two weeks",
              "Direct observation in a metabolic ward, for ten days",
              "Self-reported posture diaries completed hourly, for ten days",
            ],
            correctIndex: 0,
            explanation:
              "Every half-second for ten days, via motion-sensing undergarments. The sampling density is what allowed posture ALLOCATION to be characterized rather than merely total activity.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "How much longer did mildly obese participants sit per day, and what expenditure did the paper attach to the difference?",
            options: [
              "Two hours longer, worth roughly 350 kcal a day if the pattern flipped",
              "Two and a half hours longer, worth roughly 350 kilocalories a day",
              "Two hours longer, worth roughly 500 kilocalories a day",
              "Three hours longer, worth roughly 350 kilocalories a day",
            ],
            correctIndex: 0,
            explanation:
              "Two hours and about 350 kilocalories. The two-and-a-half-hour figure is the popular inflation the course explicitly refuses to repeat.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What did the posture study find when participants' weight changed?",
            options: [
              "It did not change when obese participants lost weight or lean ones overate: biologically patterned",
              "Posture allocation converged between groups once weight was matched",
              "Posture allocation shifted toward standing in the group that lost weight",
              "Posture allocation was not reassessed after the weight interventions",
            ],
            correctIndex: 0,
            explanation:
              "Unchanged in both directions, which is what supports the biologically-patterned reading. It is also a caution against assuming posture is purely a choice a coach can simply redirect.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What did Pontzer et al. measure, and in whom?",
            options: [
              "Total energy expenditure, 332 adults, five populations",
              "Non-exercise activity thermogenesis in 16 adults across eight weeks",
              "Posture allocation in 332 adults across ten days",
              "Resting metabolic rate in 332 adults before and after an exercise program",
            ],
            correctIndex: 0,
            explanation:
              "Total energy expenditure, 332 adults, five populations. The breadth of populations matters because it is what makes the plateau a general finding rather than a local one.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What did Pontzer et al. find about the relationship between activity and total energy expenditure?",
            options: [
              "It rose with activity in the lower range and then plateaued: the most active spent little more",
              "Expenditure rose linearly with activity across the whole range measured",
              "Expenditure rose only in the highest activity quintile, with no change below it",
              "Expenditure fell with activity, as the body became more metabolically efficient",
            ],
            correctIndex: 0,
            explanation:
              "Rise then plateau. The most active people spent little more than the moderately active ones, which is precisely what an additive model would not predict.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is the proposed mechanism behind the constrained-expenditure plateau?",
            options: [
              "Metabolic compensation: the body trims expenditure elsewhere rather than letting the total climb",
              "Reduced NEAT: the most active people sit more on their non-training days",
              "Improved movement economy: trained bodies spend less energy per unit of activity",
              "Measurement ceiling: doubly labelled water underestimates expenditure at high activity",
            ],
            correctIndex: 0,
            explanation:
              "Compensation elsewhere in the budget. Reduced NEAT is one possible route but the model is broader than that, and the finding is not a measurement artifact.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "Why does the constrained model NOT change how you coach a sedentary client?",
            options: [
              "The plateau sits at the high end; the steep part of the curve still behaves additively",
              "The model applies only to non-Western populations in the sampled cohorts",
              "The model concerns expenditure rather than behavior, which is what coaching targets",
              "The model has not been replicated, so it is taught as provisional",
            ],
            correctIndex: 0,
            explanation:
              "Where the plateau sits is the whole answer. A sedentary client's next thousand steps are still the most valuable thousand anyone can buy, and the arithmetic still holds there.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What DOES the constrained model undercut?",
            options: [
              "Calorie arithmetic as a selling tool: promising an active client that a walk adds 300 kcal to the ledger",
              "The mortality dose-response for steps, which assumes an energy mechanism",
              "The value of structured exercise for cardiovascular adaptation",
              "The claim that NEAT is the main variable component of daily expenditure",
            ],
            correctIndex: 0,
            explanation:
              "The selling tool, not the outcome evidence. The lesson's instruction is to coach the mortality, dementia, and falls curves rather than an energy sum the physiology may quietly cancel.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is the 'additive model,' and where is it reliable?",
            options: [
              "That every added minute adds proportionally to the daily total; true at the low end, not the high",
              "The assumption that energy expenditure equals resting metabolism plus exercise; reliable in all populations",
              "The assumption that NEAT and exercise are independent; reliable only in trained people",
              "The assumption that calories in minus calories out predicts weight; reliable over short periods",
            ],
            correctIndex: 0,
            explanation:
              "Its accuracy is range-dependent, which is why the coaching answer is not to discard it but to know where it stops holding.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is the NEAT evidence gap the review literature flags?",
            options: [
              "No randomized trials testing whether NEAT-promotion strategies actually treat obesity",
              "A lack of device-based measurement in the original Levine experiments",
              "A lack of replication of the overfeeding findings in obese populations",
              "A lack of agreement on how NEAT should be defined across studies",
            ],
            correctIndex: 0,
            explanation:
              "The observational and physiological case is strong; the INTERVENTION case is unproven. The gap is about treatment efficacy, not about measurement or definition.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "How should a coach frame NEAT-building, given the evidence gap?",
            options: [
              "A high-plausibility, near-zero-risk, in-scope bet, never a proven therapy",
              "A proven therapy for obesity, given the strength of the observational data",
              "An unproven approach best deferred until randomized evidence arrives",
              "A supplement to structured exercise, not a target in its own right",
            ],
            correctIndex: 0,
            explanation:
              "The framing keeps you on the right side of both the evidence and the honesty standard. Deferring entirely would waste a near-zero-cost lever; claiming therapy would outrun the data.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is an 'evidence gap,' and how does this program treat naming one?",
            options: [
              "A claim's missing piece; naming gaps is a feature of this program, not hedging",
              "A contradiction between two primary sources on the same question",
              "An area where no research has been attempted at all",
              "A finding that failed to replicate in a subsequent trial",
            ],
            correctIndex: 0,
            explanation:
              "Missing piece, named deliberately. The distinction from hedging matters: a gap is a specific identified absence, not a general reluctance to commit.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What did the pooled sit-less intervention trials require of included studies?",
            options: [
              "Free-living interventions of at least seven days that reduced sitting",
              "Laboratory-controlled interventions of at least seven days with device-measured sitting",
              "Randomized trials of at least twelve weeks with a sedentary control arm",
              "Interventions that reduced sitting without adding any activity, to isolate the effect",
            ],
            correctIndex: 0,
            explanation:
              "Free-living, seven days minimum, with or without added activity. The free-living requirement is what makes the modest results credible as real-life estimates.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What did the sit-less trials deliver, roughly?",
            options: [
              "About 0.6 kg, 0.7 cm waist, a quarter point of body fat, 1 mmHg systolic, slight insulin and HDL shifts",
              "About 2 kg weight, 3 cm waist, 5 mmHg systolic, with adverse effects in a minority",
              "About 0.6 kg weight and 0.7 cm waist, with no detectable change in any blood marker",
              "No significant change in any anthropometric or cardiometabolic outcome",
            ],
            correctIndex: 0,
            explanation:
              "Small across the board, consistently in the right direction, and with no adverse effects. The lesson's own framing: nobody's before-photo becomes an after-photo on these numbers.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "Why does the course say the sit-less menu is 'unchanged by the modest effect sizes'?",
            options: [
              "The cost is near zero and the risk is none, so a small consistent benefit clears the bar",
              "Because the effect sizes are expected to grow as measurement improves",
              "Because the trials underestimated the effect by including non-adherent participants",
              "Because the biomarker outcomes understate the mortality benefit shown in cohorts",
            ],
            correctIndex: 0,
            explanation:
              "Cost-benefit at near-zero cost. The lesson calls them direction-of-travel evidence: the physiology moves the right way, across changes a client can actually hold.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What did the self-report versus accelerometer comparison find?",
            options: [
              "Self-report associated with BMI, waist, blood pressure, and cholesterol; the device only with cholesterol",
              "Self-reported and device-measured sitting produced identical associations after adjustment",
              "Device-measured sitting associated with all four markers; self-report with none",
              "Neither measure showed any association after adjusting for exercise",
            ],
            correctIndex: 0,
            explanation:
              "Four associations from self-report, one from the device. That split is the lesson's worked example of measurement shaping findings.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What was the self-reported sitting association with BMI, per 10 extra minutes a day?",
            options: [
              "0.035 BMI units",
              "0.35 BMI units",
              "3.5 BMI units",
              "0.0035 BMI units",
            ],
            correctIndex: 0,
            explanation:
              "0.035 units per additional 10 minutes daily, after adjusting for exercise. Quoting the magnitude precisely is what keeps a small association from sounding like a large one.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What are the two readings the lesson offers for the self-report/device split?",
            options: [
              "Self-report may capture the worst flavors of sitting, and cross-sectional data cannot show cause",
              "Devices are more accurate, so the self-report associations are simply spurious",
              "Self-report is more valid for behavior, so the device associations are underpowered",
              "The two measures capture different populations, so the results are not comparable",
            ],
            correctIndex: 0,
            explanation:
              "Both readings are held open rather than resolved. The teachable content is the split itself, and the reflex it should install about asking how a behavior was measured.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What is a 'cross-sectional association'?",
            options: [
              "A one-time snapshot correlation; it cannot establish cause",
              "A correlation observed across multiple independent cohorts",
              "A comparison between two groups measured at the same timepoint in a trial",
              "An association that persists after adjustment for all measured confounders",
            ],
            correctIndex: 0,
            explanation:
              "Snapshot, no causal claim available. It is the honest label for the sitting-biomarker links, and the reason the intervention trials matter more for coaching decisions.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What is a 'movement snack'?",
            options: [
              "A brief movement break between blocks of sitting; the sit-less day's basic unit",
              "A short bout of vigorous activity performed to meet the weekly intensity target",
              "A light activity performed before eating to blunt the glucose response",
              "A ten-minute walk performed at a brisk cadence to accrue independent benefit",
            ],
            correctIndex: 0,
            explanation:
              "A break between sitting blocks, anchored to existing cues. The lesson's closing point is that sitting less is habit design, not willpower.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What is the practical menu for building a sit-less day, in the lesson's order?",
            options: [
              "Break the longest blocks first, stand for calls, walk short errands, movement snacks at boundaries",
              "Set a daily sitting ceiling, track it, then reduce it by an hour each week",
              "Replace one hour of sitting with structured exercise, then extend gradually",
              "Stand for a fixed proportion of the working day, increasing monthly",
            ],
            correctIndex: 0,
            explanation:
              "Longest blocks first, which sends you to the TV block from lesson 3. Ceilings and fixed proportions reintroduce the threshold thinking the sitting evidence does not support.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "How should each sit-less change be installed, per the lesson?",
            options: [
              "Anchored to an existing cue with the WELL-01 habit rules: sitting less is habit design, not willpower",
              "Tracked daily against a target, so progress is visible and feedback is available",
              "Scheduled into the calendar as recurring appointments the client protects",
              "Reviewed weekly with the coach, since environmental changes decay without support",
            ],
            correctIndex: 0,
            explanation:
              "Cue anchoring is the mechanism. Tracking and review are supports, but the lesson's specific claim is that the sit-less day is built by habit design.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "A client on a caloric deficit adds 6,000 daily steps and is frustrated that weight loss did not accelerate proportionally. What does this section offer?",
            options: [
              "The constrained model: expenditure plateaus as the body compensates, so the arithmetic overpromises",
              "The overfeeding data: their NEAT is probably ramping down to offset the added steps",
              "The sit-less trials: 0.6 kg is the realistic ceiling for movement-based interventions",
              "The posture data: their posture allocation is biologically fixed and will not change",
            ],
            correctIndex: 0,
            explanation:
              "The constrained model addresses exactly this. The overfeeding data concerns surplus rather than deficit, and the sit-less trials measured a different intervention entirely.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "A client's job changed from warehouse work to a desk. What does this section predict, and where is the coaching leverage?",
            options: [
              "A large drop, since occupation is NEAT's largest driver; leverage is transport, stairs, errands, standing",
              "A small drop in NEAT, since occupational activity is a minor component; leverage sits in structured exercise",
              "No change in NEAT, since posture allocation is biologically patterned and stable",
              "A drop in total expenditure that structured training can fully replace",
            ],
            correctIndex: 0,
            explanation:
              "Occupation is the giant, and a standing job versus a seated one separates people more than any training plan. The leverage list is the lesson's own inventory of where NEAT hides.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "Which claim about NEAT would this course refuse to make?",
            options: [
              "'Standing three extra hours a day will burn you an extra 350 calories'",
              "'NEAT is the main variable component of daily energy expenditure between people'",
              "'In one study, obese participants sat two hours longer per day than lean participants'",
              "'No randomized trials yet show NEAT-promotion treats obesity'",
            ],
            correctIndex: 0,
            explanation:
              "It converts a group-level estimate into an individual promise, which is exactly the precise-prescription claim the NEAT lesson says the evidence does not support.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What reflex should the measurement material in this section install?",
            options: [
              "Ask how a behavior was measured before believing what it seems to do",
              "Prefer device measurement over self-report in all circumstances",
              "Discount any finding based on cross-sectional data",
              "Require randomized evidence before coaching any behavior",
            ],
            correctIndex: 0,
            explanation:
              "The reflex is a question, not a rule. The sitting cut-offs, the self-report/device split, and the two-versus-two-and-a-half-hour drift are three worked examples of the same habit.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "Why does the course insist on 'two hours' rather than the widely repeated 'two and a half'?",
            options: [
              "This program cites what primaries say, not what gets repeated; the inflation is exactly that drift",
              "Because the larger figure came from a different study of a different population",
              "Because the difference changes the calorie estimate attached to the finding",
              "Because the original paper was later corrected downward",
            ],
            correctIndex: 0,
            explanation:
              "It is a sourcing-discipline point rather than a substantive one. The half-hour barely changes the coaching, and that is exactly why letting it slide would be corrosive.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "Where does NEAT hide in a client's day, in the lesson's own order of size?",
            options: [
              "Occupation, then transportation, stairs, chores, errands on foot, standing on calls, and fidget-level movement",
              "Transportation, then occupation, structured exercise, chores, and posture",
              "Chores, then occupation, transportation, and recreational activity",
              "Fidgeting, then posture, occupation, transportation, and chores",
            ],
            correctIndex: 0,
            explanation:
              "Occupation is the giant and fidgeting the smallest layer. Structured exercise is excluded from NEAT by definition, so it cannot appear on the list at all.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "Why does the course call NEAT 'the lever that survives'?",
            options: [
              "It survives injuries, travel, and every season in which the gym does not",
              "It survives ageing better than structured training does",
              "It survives motivation lapses, since it is largely unconscious",
              "It survives measurement error better than self-reported exercise",
            ],
            correctIndex: 0,
            explanation:
              "Durability across disrupted seasons. That is a different claim from being unconscious, and it is what makes NEAT the half of this pillar a coach can rely on year-round.",
            sourceLessonSlug: "neat-the-biggest-lever",
          },
          {
            prompt: "What does the overfeeding study's ten-fold variation in fat storage tell a coach?",
            options: [
              "Individual responses to the same surplus differ enormously, so identical inputs do not produce identical outcomes",
              "Fat storage is primarily determined by diet composition rather than surplus size",
              "Most people will resist fat gain if their NEAT is coached upward",
              "Overfeeding studies cannot be generalized to free-living conditions",
            ],
            correctIndex: 0,
            explanation:
              "Same protocol, same surplus, ten-fold different outcomes. It is a caution against promising any individual a specific result from a group-level finding.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is 'posture allocation'?",
            options: [
              "How a day divides among sitting, standing, and moving; measured every half-second and stable across weight change",
              "The distribution of postures during a single working day",
              "The proportion of waking hours spent upright, used as a NEAT proxy",
              "The client's habitual postural patterns, assessed for corrective purposes",
            ],
            correctIndex: 0,
            explanation:
              "How the day divides, and crucially its stability: it did not shift when obese participants lost weight or lean ones overate.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is 'NEAT activation'?",
            options: [
              "The unconscious increase in everyday movement some bodies produce under caloric surplus",
              "The deliberate increase in daily movement a coach and client plan together",
              "The point at which NEAT exceeds structured exercise in daily expenditure",
              "The metabolic response to standing after prolonged sitting",
            ],
            correctIndex: 0,
            explanation:
              "Unconscious and surplus-driven. The lesson's summary line depends on it: the difference between banking a surplus and spending it.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "What is a 'free-living intervention'?",
            options: [
              "A trial run in participants' ordinary lives rather than a lab",
              "An intervention delivered without cost to participants",
              "An intervention with no prescribed structure, letting participants choose",
              "A trial in which the control group receives no contact",
            ],
            correctIndex: 0,
            explanation:
              "Ordinary lives, not a lab. The sit-less pooled trials required at least seven days of it, which is what makes their modest results credible as real-world estimates.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "What did the sit-less trials find regarding adverse effects?",
            options: [
              "None",
              "Minor musculoskeletal complaints in standing-desk arms",
              "Increased fatigue in the first two weeks, resolving thereafter",
              "Adverse effects were not assessed in the pooled trials",
            ],
            correctIndex: 0,
            explanation:
              "No adverse effects, which is half the cost-benefit argument. A near-zero-cost, zero-risk intervention clears the bar on a small consistent benefit.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "A client's TV block is four unbroken evening hours. Which two lessons converge on this target?",
            options: [
              "The sitting lesson, which ranks TV worst on dose-response, and the sit-less lesson, which says break the longest blocks first",
              "The NEAT lesson, which ranks occupation largest, and the sitting lesson's log-linear finding",
              "The step lesson's cadence finding and the sit-less lesson's movement-snack unit",
              "The overfeeding lesson's posture data and the NEAT lesson's fidget layer",
            ],
            correctIndex: 0,
            explanation:
              "TV is the worst-behaving sitting flavor (RR 1.33, J-shaped) and it is also the longest unbroken block, which is where the sit-less menu says to start. Two independent reasons, same target.",
            sourceLessonSlug: "sit-less-what-trials-show",
          },
          {
            prompt: "Which claim does the Pontzer finding NOT license?",
            options: [
              "'Adding activity is pointless for weight management, since the body compensates'",
              "'Expenditure plateaus at higher activity levels rather than rising linearly'",
              "'Calorie arithmetic overpromises for already-active clients'",
              "'The steep part of the activity curve still behaves additively'",
            ],
            correctIndex: 0,
            explanation:
              "It overreads the plateau into a null. The model describes compensation at the HIGH end and says nothing that would make added activity pointless for a sedentary client.",
            sourceLessonSlug: "the-overfeeding-study",
          },
          {
            prompt: "Why does the course teach the NEAT evidence gap rather than omitting it?",
            options: [
              "Naming a gap keeps the coaching honest and the client's expectations survivable",
              "The gap is likely to close soon, so coaches should anticipate the evidence",
              "Omitting it would breach the citation requirements of the scope of practice",
              "The gap is what distinguishes NEAT from other movement targets",
            ],
            correctIndex: 0,
            explanation:
              "Honesty plus survivable expectations. A client sold NEAT as proven obesity therapy has a disappointment scheduled; a client sold a near-zero-cost bet does not.",
            sourceLessonSlug: "the-overfeeding-study",
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
      slug: "quiz-what-sustains-it",
      title: "14 · Knowledge check: what sustains it",
      section: "Section 4 · What sustains it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How much gained activity survived after interventions ended, in the maintenance meta-analysis?",
            options: [
              "60 to 80 percent, at three months or more after the intervention",
              "30 to 50 percent of it, measured at least three months after the intervention had ended",
              "60 to 80 percent, but only while booster sessions continued",
              "Nearly all of it, though only in device-measured trials",
            ],
            correctIndex: 0,
            explanation:
              "60 to 80 percent at three-plus months, without requiring ongoing support. The course calls this unusually good news for a behavior-change literature.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "In absolute terms, what did maintained activity amount to at three-plus months?",
            options: [
              "About 45 extra weekly minutes of moderate-to-vigorous activity and 945 extra daily steps",
              "About 21 to 25 extra minutes a week and a few hundred extra daily steps",
              "About 150 extra minutes of activity a week and about 2,000 extra daily steps",
              "About 45 extra minutes a week and about 300 extra daily steps",
            ],
            correctIndex: 0,
            explanation:
              "45 weekly minutes and 945 daily steps versus comparators. The 21-to-25-minute figure is the two-to-four-year result, which is smaller as you would expect.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What did adding explicit maintenance support after the initial program buy?",
            options: [
              "A further small effect, SMD 0.14",
              "A further moderate effect, at a standardized mean difference of 0.45",
              "No additional benefit beyond the initial program",
              "A doubling of the activity retained at three months",
            ],
            correctIndex: 0,
            explanation:
              "SMD 0.14, small but real. It is worth knowing precisely because it prices the value of a maintenance structure rather than assuming it.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What did the long-horizon trials show at two to four years?",
            options: [
              "Small persistent advantages, SMD 0.15 to 0.18: a few hundred extra daily steps, 21 to 25 extra weekly minutes",
              "No detectable difference at all between the intervention and comparison groups",
              "Moderate advantages, SMD roughly 0.40, translating to about 45 extra weekly minutes",
              "Advantages confined to the trials that included ongoing maintenance support",
            ],
            correctIndex: 0,
            explanation:
              "Small but present at two to four years, and the authors call the better-performing programs clinically meaningful. Persistence at that horizon is the finding the centenarian frame cares about.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What is the honest promise of movement coaching, per this lesson?",
            options: [
              "A client who years later still moves several hundred steps and twenty-odd minutes more each week",
              "A client who reaches and then sustains the WHO guideline minimums indefinitely",
              "A transformed athlete, given sufficient time and adherence support",
              "A client whose activity returns to baseline but whose habits transfer to other pillars",
            ],
            correctIndex: 0,
            explanation:
              "Small, kept, compounding. Those margins price out in mortality, dementia, and falls on the curves from sections 2 and 3, which is what makes the modest promise a serious one.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What three components did the durable programs share?",
            options: [
              "Device self-monitoring with feedback, goal setting, follow-up structure",
              "Supervised sessions, structured group support, and financial incentives for attendance",
              "Individualized programming, progressive overload, and periodic reassessment",
              "Education, accountability check-ins, and environmental modification",
            ],
            correctIndex: 0,
            explanation:
              "The course's own note is that these are WELL-01's toolkit wearing activity trackers. Nothing in the durable-program list is specific to exercise science.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What is 'device-measured activity,' and why does the lesson name it?",
            options: [
              "Steps and minutes counted by accelerometers rather than memory; the maintenance trials' standard",
              "Activity recorded by the coach during supervised sessions in person",
              "Activity estimated from heart-rate data rather than motion",
              "Any activity a client logs in an app rather than reporting verbally",
            ],
            correctIndex: 0,
            explanation:
              "Objective rather than recalled. Naming it matters because this course has already shown, in the sitting lesson, how much the measurement method can move a finding.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What does 'small-kept-compounding' name?",
            options: [
              "The honest value shape: modest effects, held for years, priced against dose-response curves",
              "The pattern of habit formation, in which small repetitions accumulate into automaticity",
              "The interest-like growth of fitness adaptations across training blocks",
              "The strategy of setting small goals that grow as confidence builds",
            ],
            correctIndex: 0,
            explanation:
              "It is a claim about how coaching creates value, and it recurs across the program: modest, real, held, and multiplied by the curves rather than by the intervention.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "How many trials of stage-based physical activity interventions did Romain et al. pool, and what did they find?",
            options: [
              "Thirty-three trials; they worked (0.23 to 0.36) whether or not strategies matched the assessed stage",
              "Thirty-three trials; stage-matched interventions outperformed non-matched ones at effect sizes 0.23 to 0.36",
              "Twelve trials; stage-matching produced no detectable effect in either direction",
              "Fifteen trials; stage-matching helped only in clients assessed as precontemplative",
            ],
            correctIndex: 0,
            explanation:
              "The interventions worked; the MATCHING did not add anything. That is the same finding WELL-01 lesson 2 taught about TTM generally, now confirmed in the movement literature specifically.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What DID moderate success in the stage-based activity trials?",
            options: [
              "The number of theoretical constructs used, self-efficacy most of all",
              "The total duration of the intervention and the number of participant contacts",
              "The accuracy of the initial stage assessment",
              "Whether the intervention was delivered in person or remotely",
            ],
            correctIndex: 0,
            explanation:
              "Construct count, with self-efficacy leading. The lesson reads it as permission and instruction: skip the stage bureaucracy, build self-efficacy deliberately.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What is 'construct count'?",
            options: [
              "How many theory pieces an intervention genuinely uses; the moderator of activity-trial success",
              "The number of distinct behaviors that an intervention targets at the same time",
              "The number of behavior-change techniques coded from the standard taxonomy",
              "The count of measurement instruments a trial administered",
            ],
            correctIndex: 0,
            explanation:
              "Theory pieces genuinely used, such as self-efficacy, processes of change, and decisional balance. Note this is a different finding from WELL-01's diabetes result, where TECHNIQUE count was unrelated to effectiveness.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What is the usual inner obstacle for movement, and what is the craft?",
            options: [
              "A belief, like 'a ten-minute walk is not worth changing shoes for'; the craft returns schedule-talk to belief-talk",
              "A recurring scheduling conflict; the craft is helping the client protect one fixed slot",
              "Low self-efficacy; the craft is building it through graded successes",
              "Fatigue; the craft is coaching recovery before adding activity",
            ],
            correctIndex: 0,
            explanation:
              "Beliefs rather than calendars, and the lesson says returning clients from schedule-talk to belief-talk is most of the craft. It is WOOP's inner-obstacle rule applied to this pillar.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Which cues does the lesson suggest anchoring movement to?",
            options: [
              "The school run, the lunch order, the kettle: things that fire daily",
              "A fixed time of day, protected in the client's calendar as a standing appointment",
              "The client's motivation peaks, identified through a week of tracking",
              "The end of the working day, when time is most reliably available",
            ],
            correctIndex: 0,
            explanation:
              "Events that reliably happen without a decision. A calendar time is a weaker anchor than an event, and 'motivation peaks' is not a cue at all.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What discipline does the self-selection finding impose on a coach with a trainer's instincts?",
            options: [
              "The optimal modality you would assign loses to the walk the client chose",
              "The client's chosen modality should be refined toward the optimal one over time",
              "Assigned behaviors become acceptable once the client's self-efficacy has been established",
              "Modality choice matters less than frequency, so either approach works",
            ],
            correctIndex: 0,
            explanation:
              "Self-selected habits built more strength than assigned ones. For someone trained to prescribe, letting the client pick is a genuine discipline rather than a courtesy.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Which two habit levers from the pooled data does this lesson apply to movement?",
            options: [
              "Bias new habits toward morning; let the client pick the behavior",
              "Bias new habits toward the evening, and assign the behavior with the strongest evidence",
              "Increase the frequency before the duration, and track every single repetition",
              "Start with the minimum version, and add a reward on completion",
            ],
            correctIndex: 0,
            explanation:
              "Morning bias and self-selection, both from the 2024 pooled habit review. The minimum version and the miss rule are habit-design rules, not the moderators from that data.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Why does the course call the step count 'this pillar's gift to coaching'?",
            options: [
              "Passively measured, client-owned, feedback-rich: it powers the self-monitoring durable programs shared",
              "It correlates more closely with mortality than any other single field measure",
              "It is the metric the WHO guidelines specify for adults",
              "It is the only movement measure a coach may discuss within scope",
            ],
            correctIndex: 0,
            explanation:
              "Three properties, each doing work: passive measurement removes effort, client ownership preserves autonomy, and feedback makes progress visible, which is competence support from SDT.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What is 'passive measurement,' and why does it matter here?",
            options: [
              "Data collected without client effort, like phone step counts; steps become the natural instrument",
              "Measurement taken by the coach rather than the client, removing self-report bias",
              "Measurement that does not itself change the behavior being measured",
              "Data collected continuously rather than at intervals",
            ],
            correctIndex: 0,
            explanation:
              "No client effort required. Self-monitoring is a component the durable programs shared, and passive measurement is what makes it survivable over years rather than weeks.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "How does the step count deliver competence support, per SDT?",
            options: [
              "It makes progress visible, which is what competence support requires",
              "It provides an external target, which raises perceived importance",
              "It allows comparison with population norms, which contextualizes achievement",
              "It removes any ambiguity about whether the client complied with the agreed plan",
            ],
            correctIndex: 0,
            explanation:
              "Visible progress is one of the two components of competence support from WELL-01 lesson 3, the other being right-sized challenge. Norm comparison can undermine competence rather than support it.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What did the cardiovascular-risk coaching trials improve, and what did they not?",
            options: [
              "Activity, diet, health responsibility, and stress management improved; smoking cessation did not",
              "Physical activity and smoking cessation both improved; dietary behavior did not",
              "All measured behaviors improved, including smoking cessation",
              "Only physical activity improved; the other behavioral outcomes were null",
            ],
            correctIndex: 0,
            explanation:
              "Four wins and one null across fifteen trials. Teaching the null beside the wins is what the course means by making the wins credible.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What did the hypertension meta-analysis report for blood pressure?",
            options: [
              "SMD 0.26 systolic and 0.13 diastolic, across 12 trials and 2,497 participants",
              "A reduction of 3 mmHg systolic and 1.5 mmHg diastolic, pooled across the 12 trials",
              "Standardized mean difference 0.76 systolic, across 12 trials and 2,497 participants",
              "No significant change in blood pressure, though dietary behavior improved",
            ],
            correctIndex: 0,
            explanation:
              "SMDs of 0.26 and 0.13. The 0.76 figure is dietary behavior in the same analysis, and the 3 mmHg figure belongs to the kidney-disease meta-analysis.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What else did the hypertension trials improve, and which delivery format was most common and effective?",
            options: [
              "Dietary behavior (SMD 0.76) and self-efficacy (0.39); phone delivery",
              "Medication adherence (SMD 0.76) and self-efficacy (0.39); in-person coaching",
              "Dietary behavior (SMD 0.39) and physical activity (0.76); group-delivered coaching",
              "Self-efficacy (SMD 0.76) and stress management (0.39); app-delivered coaching",
            ],
            correctIndex: 0,
            explanation:
              "Diet 0.76, self-efficacy 0.39, phone delivery. The phone finding matters practically: the most effective format was also the cheapest and most scalable.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Why does this lesson refuse to convert the hypertension SMDs into millimeters of mercury?",
            options: [
              "That is what the source reports; converting SMDs into clinical units would outrun it",
              "SMDs and clinical units measure two entirely different underlying constructs",
              "The conversion requires a standard deviation the paper did not publish",
              "Clinical units would overstate the effect for a coaching audience",
            ],
            correctIndex: 0,
            explanation:
              "The source-precision rule: quote effects in the units the primary reports. Note the same lesson DOES quote raw units for kidney disease, because that meta-analysis published them.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What did the chronic kidney disease meta-analysis report, and how did its authors characterize it?",
            options: [
              "About 1.5 kg and 3 mmHg systolic plus quality-of-life gains; the authors call them small and uncertain",
              "About 4 kg and 8 mmHg systolic with quality-of-life gains; the authors call the effects clinically meaningful",
              "About 1.5 kg and 3 mmHg systolic with no quality-of-life change; the authors call the effects promising",
              "No significant anthropometric change, though depression and self-efficacy improved",
            ],
            correctIndex: 0,
            explanation:
              "Small, in raw units, with the authors' own hedge quoted. Depression and self-efficacy were the honest NULLS, not the wins.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Which outcomes were null in the kidney-disease trials?",
            options: [
              "Depression, and self-efficacy",
              "Weight and systolic blood pressure, both unchanged",
              "Quality of life and physical activity",
              "Dietary behavior and stress management",
            ],
            correctIndex: 0,
            explanation:
              "Depression and self-efficacy. The lesson's instruction is to teach the nulls with the wins, since that is what makes the wins credible.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What are 'honest nulls,' and what is this course's example?",
            options: [
              "The outcomes a trial did not move, reported beside the wins; CKD's depression and self-efficacy",
              "Findings that a trial failed to detect simply because it was underpowered",
              "Outcomes excluded from a meta-analysis for insufficient data",
              "Results that contradicted the trial's stated hypothesis",
            ],
            correctIndex: 0,
            explanation:
              "Reported beside the wins, deliberately. It is a disclosure practice rather than a statistical category, and it recurs across the program.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What is the 'source-precision rule'?",
            options: [
              "Quote effects in the units the primary reports; never convert them for rhetorical effect",
              "Cite the most precise estimate available whenever two sources disagree",
              "Report confidence intervals alongside every point estimate",
              "Prefer meta-analyses over single trials whenever both exist",
            ],
            correctIndex: 0,
            explanation:
              "It governs UNITS specifically. The rhetorical-effect clause is the point: conversion is usually done to make a number sound more impressive than the source made it.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "In cardiometabolic populations, what stays inside the coaching lane?",
            options: [
              "The movement plan, sit-less day, self-monitoring, adherence, and the behavior-change conversation",
              "The movement plan, plus any adjustments to it that the client's own data suggests",
              "Everything except medication questions, which route to the prescriber",
              "Only education, since individualized work requires clinical oversight",
            ],
            correctIndex: 0,
            explanation:
              "Five items, all behavioral. What leaves the lane is symptoms, medications, treatment adjustments, and anything diagnostic.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What is 'implementation support' as this lesson defines it?",
            options: [
              "The role beside licensed care: help the client carry out the clinician's plan, never modify it",
              "The coach's practical assistance in setting up tracking devices and reminder systems",
              "The structured follow-up that maintains gains after an intervention ends",
              "The coach's coordination with the client's other providers on their behalf",
            ],
            correctIndex: 0,
            explanation:
              "Carry out, never modify. It is the same phrase WELL-00 drew from the NBHWC scope, applied here where the temptation to adjust is strongest.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "How does the referral discipline change in cardiometabolic populations?",
            options: [
              "The WELL-00 triggers apply with the volume up: symptoms, medications, and red flags go to medicine",
              "The triggers relax somewhat, since the client is already under active clinical care",
              "The triggers are replaced by a standing communication protocol with the treating clinician",
              "The triggers apply only where the coach lacks a relevant additional credential",
            ],
            correctIndex: 0,
            explanation:
              "Same triggers, higher stakes. Being under clinical care raises rather than lowers the frequency of questions that belong to medicine.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What does the course describe as 'the exact job this program exists to train'?",
            options: [
              "Moving a hypertensive client from 3,000 to 5,000 honest daily steps, keeping two-thirds through winter",
              "Delivering a structured exercise program to a clinical population under physician supervision",
              "Achieving guideline-level activity in a client who has never exercised",
              "Coordinating a client's care between their physician, dietitian, and trainer",
            ],
            correctIndex: 0,
            explanation:
              "Three parts: a modest measurable gain, its maintenance through a hard season, and clean scope discipline. Every number in it is drawn from evidence taught earlier in the course.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Why is 'a few hundred steps and twenty minutes a week' worth years of coaching structure?",
            options: [
              "Sections 2 and 3 price those margins, and the curves are steepest where sedentary clients live",
              "Because those margins accumulate into guideline-level activity within three years",
              "Because maintained small gains predict later larger gains in most trials",
              "Because the alternative is steady decline, which makes holding position itself a win",
            ],
            correctIndex: 0,
            explanation:
              "The dose-response curves convert the margin into value: each thousand steps buys 12 to 15 percent of mortality risk, and the curve is steepest at the bottom.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "A client's assessed stage suggests they are 'not ready' for action strategies. What does this course's evidence support?",
            options: [
              "Proceed: trials worked with or without stage-matching, so build self-efficacy rather than withhold",
              "Wait: stage-matched interventions clearly outperformed non-matched ones in the pooled trials",
              "Reassess: the stage assessment is likely inaccurate and should be repeated",
              "Refer: clients in precontemplation are outside the coaching scope",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-three trials found matching added nothing while construct count, especially self-efficacy, moderated success. Withholding tools by stage is the overreach WELL-01 lesson 5 named as lore.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "A client says 'meetings eat my lunch walk.' What is the WOOP correction for this pillar?",
            options: [
              "Return the obstacle inward to the belief, then build the if-then plan on that belief",
              "Accept the schedule constraint and plan the walk for a different time of day",
              "Build an if-then on the calendar: if a meeting is scheduled, then walk after work",
              "Renegotiate the wish, since the schedule makes the original plan infeasible",
            ],
            correctIndex: 0,
            explanation:
              "The calendar is weather. Building the plan on the outer obstacle gives it nothing to fire against, which is why schedule-talk has to be returned to belief-talk first.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Which finding would justify a coach recommending phone-delivered rather than in-person coaching to a hypertensive client?",
            options: [
              "Phone delivery was the most common and effective format in the hypertension meta-analysis",
              "Device-measured trials showed better maintenance than the in-person ones did",
              "The cardiovascular-risk trials found remote delivery superior for behavioral outcomes",
              "The kidney-disease trials reported raw units only for remotely delivered coaching",
            ],
            correctIndex: 0,
            explanation:
              "Only the hypertension analysis reports on delivery format. The other three options attach a format claim to analyses that did not make one.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What is a 'belief obstacle,' and where does it hide?",
            options: [
              "The usual inner obstacle for movement, like 'short walks are not worth the setup'; it hides under schedule-talk",
              "A client's doubt about whether the evidence supports the behavior; it hides under questions about research",
              "A client's low self-efficacy for the specific behavior; it hides under stated preferences",
              "A cultural belief about exercise; it hides underneath reports of family resistance",
            ],
            correctIndex: 0,
            explanation:
              "Beliefs about the behavior's worth, hiding under calendar complaints. Naming where it hides is what makes the craft teachable rather than intuitive.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "Which statement about maintenance would this course endorse?",
            options: [
              "Maintenance is real and not automatic: most gains survive, and support adds a small further effect",
              "Maintenance becomes automatic once a behavior has reached full automaticity",
              "Maintenance fails in most trials, which is why ongoing coaching is required indefinitely",
              "Maintenance has not been measured with device-based outcomes",
            ],
            correctIndex: 0,
            explanation:
              "Both halves. Sixty to eighty percent survives without support, and adding support buys SMD 0.14 more, which is why the structure is worth building but not the only thing holding the behavior up.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "Which comparison correctly distinguishes two 'count' findings this program teaches?",
            options: [
              "Construct count moderated activity-trial success; technique count was unrelated in the diabetes trials",
              "Both construct count and technique count moderated success across their respective literatures",
              "Neither count mattered at all; only self-efficacy predicted success in either literature",
              "Technique count moderated activity-trial success; construct count was unrelated in the diabetes trials",
            ],
            correctIndex: 0,
            explanation:
              "They point in opposite directions and are easy to conflate. Using more THEORY genuinely helped in the activity trials; adding more TECHNIQUES did not help in the diabetes ones.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What is a 'maintenance phase' in this course's vocabulary?",
            options: [
              "The years after an intervention ends, where 60 to 80 percent of gained activity survives",
              "The period after a behavior reaches automaticity and requires no further support",
              "The stage of TTM following six months of sustained action",
              "The phase in which a coach reduces contact frequency gradually",
            ],
            correctIndex: 0,
            explanation:
              "Defined by what happens to the gains, not by a time marker or a model stage. The rest is what coaching brings back.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What is a 'maintenance intervention'?",
            options: [
              "Explicit post-program support: boosters, ongoing self-monitoring, relapse planning",
              "The final phase of an initial program, tapering toward independence",
              "A separate program delivered after the client returns to baseline",
              "Ongoing coaching at reduced frequency for an indefinite period",
            ],
            correctIndex: 0,
            explanation:
              "Support added after the initial program, worth a further SMD 0.14. Naming its components matters: boosters, self-monitoring, and relapse planning are what the trials actually delivered.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "How does the maintenance conversation reuse WELL-01 lesson 20?",
            options: [
              "Re-anchored cues after schedule changes, minimum versions for sideways seasons, and the review cadence",
              "Renewed evoking, a fresh collecting summary, and a restated commitment",
              "Stage reassessment, decisional balance review, and updated goal setting",
              "Increased contact frequency, added tracking, and external accountability",
            ],
            correctIndex: 0,
            explanation:
              "Three structures, each transferring unchanged from the psychology course. Movement maintenance is not a separate skill; it is that lesson applied to steps and sitting.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "What does the course mean by 'WELL-01's toolkit wearing activity trackers'?",
            options: [
              "The durable programs' components, self-monitoring, goal setting, and follow-up, are behavior-change tools rather than exercise-science ones",
              "Activity trackers are the delivery mechanism the psychology course recommends",
              "Movement coaching requires devices, whereas other pillars do not",
              "The toolkit must be adapted before it transfers to the movement pillar",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the durable-program list is specific to exercise. That is the observation, and it is why this course is a thin bridge rather than a full curriculum.",
            sourceLessonSlug: "what-maintains-movement",
          },
          {
            prompt: "In the stage-based activity trials, which construct mattered most?",
            options: [
              "Self-efficacy",
              "Decisional balance",
              "Processes of change",
              "Stage of readiness",
            ],
            correctIndex: 0,
            explanation:
              "Self-efficacy above all. Stage of readiness is precisely what did NOT moderate success, which is the finding's whole point.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "How does this lesson tell you to run the evoking half of a movement session?",
            options: [
              "What did moving used to give you; when did you last like who you were on a moving day",
              "What is stopping you from moving more; what would need to change",
              "How important is movement to you, and how confident are you",
              "What has worked before, and what has not",
            ],
            correctIndex: 0,
            explanation:
              "Both questions ask what movement GAVE them, which evokes the client's own reasons. Asking what stops them invites sustain talk, and rating scales are an instrument rather than evocation.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What transfers 'without modification' from WELL-01 to this pillar?",
            options: [
              "The if-then and WOOP machinery",
              "The session anatomy, though the opening differs",
              "The OARS skills, adapted for movement vocabulary",
              "The stage-matching logic, applied to activity readiness",
            ],
            correctIndex: 0,
            explanation:
              "The planning machinery transfers unchanged; what is pillar-specific is that the inner obstacle for movement is usually a belief rather than a schedule.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "What is a 'self-selected behavior,' and what does it outrank?",
            options: [
              "The movement habit the client picked; it outranks technical optimality",
              "A behavior the client performs without prompting; it outranks scheduled activity",
              "A behavior chosen from the coach's shortlist; it outranks a fully assigned one",
              "The behavior a client already does; it outranks any new behavior",
            ],
            correctIndex: 0,
            explanation:
              "Self-selected habits built more strength than assigned ones in the pooled data. Choosing from the coach's shortlist is a partial version, and the finding concerns new habits rather than existing ones.",
            sourceLessonSlug: "tools-on-the-field",
          },
          {
            prompt: "How many trials and participants were in the hypertension coaching meta-analysis?",
            options: [
              "Twelve trials, 2,497 participants",
              "Fifteen trials, 2,497 participants",
              "Eight trials, 738 participants",
              "Twelve trials, 3,222 participants",
            ],
            correctIndex: 0,
            explanation:
              "Twelve and 2,497. Fifteen trials is the cardiovascular-risk review, eight trials and 738 patients is the kidney-disease one, and 3,222 belongs to the WELL-01 diabetes review.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What typically constituted the cardiovascular-risk coaching interventions?",
            options: [
              "Motivational interviewing plus education",
              "Supervised exercise plus dietary counselling",
              "Digital self-monitoring plus periodic clinician review",
              "Group education plus peer support",
            ],
            correctIndex: 0,
            explanation:
              "MI plus education across the fifteen trials. Knowing the ingredient matters because it is the same method WELL-01 taught, tested in the population where movement matters most.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "What are 'cardiometabolic populations' as this lesson uses the term?",
            options: [
              "Clients with cardiovascular risk factors, hypertension, diabetes, or kidney disease",
              "Clients whose primary goal is weight loss or body composition change",
              "Clients under active clinical management for any chronic condition",
              "Clients whose movement is limited by cardiovascular or metabolic symptoms",
            ],
            correctIndex: 0,
            explanation:
              "Four named conditions, and the lesson's point is that this is where movement coaching's evidence is deepest AND where its scope rails matter most.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Why does the course say the wins become credible when the nulls are taught beside them?",
            options: [
              "A source that reports only its positive findings gives you no way to judge the positive ones",
              "Nulls indicate the trial was adequately powered to detect differences",
              "Reporting nulls is required by the ethics code's disclosure duties",
              "Nulls identify the outcomes a coach should avoid promising to clients",
            ],
            correctIndex: 0,
            explanation:
              "Selective reporting destroys the informational value of what is reported. That is why the CKD depression and self-efficacy nulls appear beside its weight and blood-pressure wins.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Which of these leaves the coaching lane in a cardiometabolic client?",
            options: [
              "Interpreting a change in the client's home blood-pressure readings",
              "Coaching adherence to the medication schedule the clinician set",
              "Building a sit-less day around the client's working pattern",
              "Reviewing the client's step data and negotiating a next target",
            ],
            correctIndex: 0,
            explanation:
              "Interpreting medical data is on the NBHWC exclusion list from WELL-00. Supporting adherence, sit-less design, and step targets are all behavior, squarely inside.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "Why does this lesson close the course's content?",
            options: [
              "It is the hardest application: the population that needs movement most, worked with the tightest scope discipline",
              "It is the most recent evidence and therefore the most provisional",
              "It requires every earlier lesson as a prerequisite",
              "It is the only lesson that addresses clinical rather than general populations",
            ],
            correctIndex: 0,
            explanation:
              "Hardest application, tightest rails. The lesson describes the composite job, a modest maintained gain plus clean referral discipline, as exactly what the program exists to train.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
          {
            prompt: "A coach quotes 'coaching lowers blood pressure by 0.26 points.' What is wrong?",
            options: [
              "0.26 is a standardized mean difference, not a blood-pressure unit, and converting it invents a clinical claim",
              "The correct figure is 0.13, which is the systolic result",
              "The figure applies to dietary behavior rather than blood pressure",
              "The figure comes from the kidney-disease trials rather than the hypertension ones",
            ],
            correctIndex: 0,
            explanation:
              "The source-precision rule catches exactly this. SMD 0.26 IS the systolic result, but reading it as points of pressure turns a standardized effect into a number no paper reported.",
            sourceLessonSlug: "movement-coaching-in-the-clinic",
          },
        ],
      },
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
