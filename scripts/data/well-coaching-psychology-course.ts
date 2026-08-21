import type { AuthoredCourse } from "./authored-course";

// WELL-01 · Coaching Psychology (plans/67). The program's core: behavior-change science and the
// coaching craft, the material a CPT/CNC/CES does not carry.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 01-coaching-psychology.md §3-4). Notable verification outcomes baked in here:
// - MI vocabulary is the FOURTH edition's (Miller & Rollnick, 2023, verified from the book):
//   spirit = partnership/acceptance/compassion/EMPOWERMENT; four TASKS; the FIXING reflex.
// - Lally 2010: MEDIAN 66 days (not "average"), range 18-254, one missed day immaterial.
// - Implementation intentions: d ~= .65 (Gollwitzer & Sheeran 2006, 94 tests) and d = .36
//   (Sheeran, Listrom & Gollwitzer 2024, 642 tests), both verified.
// - The coaching-outcomes meta is BOEHMER et al. 2023 (the exports said "Zeng"); OR 1.55 is
//   LUNDAHL et al. 2013 (one export misattributed it). Corrections applied.
// - Mental contrasting/WOOP claims verified against Oettingen's own book (2014).
export const WELL_COACHING_PSYCHOLOGY_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 01: Coaching Psychology",
  description:
    "The craft your certifications assume but never teach: how behavior actually changes, motivational interviewing in its current fourth-edition form, plans that fire when willpower does not, and the honest evidence for what coaching can and cannot deliver. The largest course in the WELL program, and the one every later pillar applies.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "why-knowledge-fails",
      title: "1 · Why knowledge does not change behavior",
      section: "Section 1 · How change works",
      body: `You already know what your clients should do. So, mostly, do they. A CPT can program training, a CNC can explain protein, a CES can correct a squat, and none of that moves a client who is ambivalent, overwhelmed, or organized around habits that fire before deliberation gets a vote.

This course is about the gap between knowing and doing, and the evidence for what actually closes it.

The honest headline, up front: behavior-change coaching works, and its effects are mostly SMALL. A 2023 meta-analysis of thirty randomized trials of health and wellness coaching in chronic illness found improved quality of life within three months (standardized mean difference 0.62), improved self-efficacy, and improved depression scores out to twelve months, with no effect on anxiety, and graded the certainty of most of that evidence low or very low (Boehmer et al., 2023). That is the field's own report card, and this program quotes it rather than the brochure version.

Small does not mean unimportant. Small, reliable effects compound across months the way training adaptations do, and the techniques in this course are the ones whose effects have REPLICATED: motivational interviewing across hundreds of trials, if-then planning across 642 tests, need-supportive coaching across dozens of interventions, habit formation with real-world time courses. What did not replicate is also taught here, by name, in the lore lesson, because a coach who cannot tell evidence from folklore sells folklore eventually.

**How to read effect sizes in this course.** A standardized mean difference (d or SMD) near 0.2 is small, near 0.5 moderate, near 0.8 large. Coaching's honest range is mostly 0.2 to 0.6. Keep that scale in mind every time a later lesson quotes a number.

:::reveal What did the 2023 meta-analysis of health and wellness coaching find, in one honest sentence? ||| Across thirty randomized trials in chronic illness: small-to-moderate improvements in quality of life, self-efficacy, and depression over three to twelve months, no effect on anxiety, with mostly low or very low certainty. Real, modest, and worth compounding.

:::reveal Why does a course for a certified trainer open by saying knowledge does not change behavior? ||| Because the trainer's knowledge is already in the room and the client still is not changing. The missing layer is the change craft itself, which is what this course teaches and what the certifications assume.

## Vocabulary
- **Standardized mean difference (SMD, d)**: an effect expressed in standard-deviation units so studies can be compared; near 0.2 small, near 0.5 moderate, near 0.8 large.
- **Meta-analysis**: a study of studies that pools trial results into one weighted estimate; this course quotes them in preference to single trials wherever they exist.
- **Evidence certainty**: a separate judgment from effect size: how much the estimate can be trusted, downgraded for bias risk and inconsistency; coaching's is mostly low.
- **Self-efficacy**: a person's belief they can execute the behavior in question; one of coaching's most reliably moved outcomes.

## Sources
Boehmer, K. R., et al. (2023). The impact of health and wellness coaching on patient-important outcomes in chronic illness care: A systematic review and meta-analysis. *Patient Education and Counseling, 117*, 107975. https://pmc.ncbi.nlm.nih.gov/articles/PMC10964774/`,
    },
    {
      slug: "readiness-and-stages",
      title: "2 · Readiness: the stages model, used honestly",
      section: "Section 1 · How change works",
      body: `The transtheoretical model (TTM), from Prochaska and colleagues, describes change as movement through stages: precontemplation, contemplation, preparation, action, and maintenance, driven by processes of change, decisional balance, and self-efficacy (Prochaska & Velicer, 1997).

**What the model is good for.** Reading readiness. A client who has not considered changing (precontemplation) and a client three weeks into changing (action) need different conversations, and the model gives coaches a shared language for that difference. It is widely used across chronic-disease prevention exactly because staging a population is quick and cheap.

**What the evidence does not support, taught plainly.** Two parts of TTM are contested. First, whether the stages are truly discrete categories rather than convenient cut-points on a continuous readiness dial. Second, and more practically: reviews find only mixed and modest evidence that STAGE-MATCHED interventions beat good interventions delivered without staging. So this program teaches TTM as a readiness heuristic for choosing a conversation, never as a rulebook that forbids action strategies with a contemplator.

**How a coach actually uses it.** Ask where the client is, in their words. Match the conversation's center of gravity: exploring ambivalence early, planning and environment design late, relapse-proofing in maintenance. Then hold the model loosely, because clients are not obligated to move through your diagram.

:::reveal Name the five TTM stages and the model's honest job in this program. ||| Precontemplation, contemplation, preparation, action, maintenance. Its job here is a readiness heuristic for choosing the right conversation, not a validated rulebook, because stage-matched superiority has only mixed evidence.

:::reveal What are the two contested parts of TTM this lesson names? ||| Whether stages are truly discrete rather than cut-points on continuous readiness, and whether stage-matched interventions actually outperform good non-staged interventions, where reviews find modest, inconsistent advantages.

## Vocabulary
- **Transtheoretical model (TTM)**: Prochaska and colleagues' account of change as movement through stages, driven by processes of change, decisional balance, and self-efficacy.
- **Stages of change**: precontemplation, contemplation, preparation, action, maintenance; useful as a readiness read, contested as discrete categories.
- **Decisional balance**: the client's running ledger of pros and cons of changing, which shifts across the stages.
- **Stage-matching**: tailoring the intervention to the assessed stage; its claimed superiority over good unstaged work is the model's weakest evidence.
- **Readiness heuristic**: this program's honest job description for TTM: a quick read of where the client is that shapes the conversation without forbidding tools.

## Sources
Prochaska, J. O., & Velicer, W. F. (1997). The transtheoretical model of health behavior change. *American Journal of Health Promotion, 12*(1), 38-48. https://pubmed.ncbi.nlm.nih.gov/10170434/`,
      recallContent: [
        {
          prompt: "A review says stage-matched interventions 'show mixed results.' What does this program tell you to do with TTM, then?",
          answer:
            "Keep it as a readiness heuristic: read where the client is and center the conversation accordingly, but never treat staging as a rulebook that forbids strategies out of stage.",
        },
      ],
    },
    {
      slug: "self-determination-theory",
      title: "3 · Self-determination theory: the three needs that carry motivation",
      section: "Section 1 · How change works",
      body: `Self-determination theory (SDT) holds that people sustain behavior when three psychological needs are supported: **autonomy** (the change is genuinely theirs), **competence** (they can see themselves succeeding at it), and **relatedness** (they are connected to people who matter in it). Support those needs and motivation shifts from external pressure toward autonomous forms, intrinsic and identified regulation, which predict maintained health behavior.

**The evidence, at honest size.** Meta-analyses of SDT-informed health interventions, most comprehensively by Ntoumanis and colleagues, find small but reliable effects on health behaviors and psychological outcomes, on the order of d around 0.2 to 0.3, mediated by autonomous motivation and perceived competence (Ntoumanis et al., 2020). Small, reliable, mechanism-consistent: the SDT trifecta shows up again and again across physical activity, diet, and smoking work. And the same literature carries a warning: programs that CLAIM the SDT label without rigorously operationalizing need support can show null effects. The theory is a mechanism, not a magic word.

**What need support sounds like.** Autonomy: offering choices and rationale instead of prescriptions ("here are three ways people handle this; which fits your life?"). Competence: right-sized challenges and progress made visible. Relatedness: the coach's genuine, non-contingent regard, and recruiting the client's actual relationships into the change.

**Why this sits in lesson 3.** Every tool later in this course, motivational interviewing especially, is need support with better tooling. When lesson 23 drills autonomy-supportive language, this is the theory underneath it.

:::reveal Name the three SDT needs and give one coaching behavior that supports each. ||| Autonomy: offer real choices with rationale rather than prescriptions. Competence: right-size the challenge and make progress visible. Relatedness: genuine non-contingent regard, plus recruiting the client's real relationships into the change.

:::reveal SDT intervention effects run around d = 0.2 to 0.3. Is that an argument against using it? ||| No. Small, reliable, mechanism-consistent effects compound over months, and SDT describes the mechanism most other effective techniques run on. The argument it DOES support: operationalize need support rigorously, because label-only SDT programs show null effects.

## Vocabulary
- **Autonomy**: the need for the change to be genuinely one's own choice; supported with options and rationale, thwarted by prescriptions and pressure.
- **Competence**: the need to see oneself succeeding at the behavior; supported by right-sized challenges and visible progress.
- **Relatedness**: the need to be connected to people who matter in the change, the coach's genuine regard included.
- **Autonomous motivation**: intrinsic and identified regulation, acting from choice and personal value; the form of motivation that predicts maintained behavior.
- **Need support**: coaching behavior that feeds the three needs; the active ingredient SDT interventions run on, and the thing label-only programs skip.

## Sources
Ntoumanis, N., et al. (2020). A meta-analysis of self-determination theory-informed intervention studies in the health domain: Effects on motivation, health behavior, physical, and psychological health. *Health Psychology Review, 15*(2), 214-244. https://pubmed.ncbi.nlm.nih.gov/31983293/`,
    },
    {
      slug: "how-habits-form",
      title: "4 · How habits actually form",
      section: "Section 1 · How change works",
      body: `The best real-world data on habit formation is still Lally and colleagues' 2010 study, and its numbers are worth knowing exactly, because the popular versions get them wrong.

**The study.** Ninety-six volunteers each chose one new eating, drinking, or activity behavior and tied it to a daily cue ("after breakfast, I will..."), then tracked automaticity daily for twelve weeks. Automaticity rose along an asymptotic curve: fast gains early, flattening as the behavior became second nature (Lally et al., 2010).

**The numbers.** Modeled time to reach 95 percent of each person's automaticity plateau ranged from **18 to 254 days**, with a **median of 66 days**. Not 21 days; that figure traces to a 1960s self-help observation and has no support in this data. And one more finding coaches should tattoo somewhere visible: **missing a single opportunity did not materially affect habit formation.** One skipped day is noise. Abandoning after one skipped day is the actual failure mode.

**The replication check.** A 2024 systematic review pooled the habit-formation studies that followed Lally and landed in the same place: study medians of 59 to 66 days, means of 106 to 154 days, and individual times ranging from 4 to 335 days, with habit-building interventions reliably increasing habit strength (Singh et al., 2024). Fourteen years of further data moved the honest answer not at all: about two months typically, enormous variation always, never 21 days.

**The trial that tested the cue itself.** If the cue carries the habit, does the KIND of cue matter? Keller and colleagues ran the experiment: 192 adults aged 18 to 77 picked an everyday nutrition behavior and were randomly assigned to anchor it either to a daily routine ("after I brush my teeth") or to a clock time ("at 7 p.m."), then answered daily questionnaires for 84 days. Two findings, one reassuring and one instructive. The median time to peak automaticity among those who formed habits was **59 days**, independently landing where Lally did. And routine-based and time-based cues produced **no difference** in automaticity or plan enactment. What predicted automaticity was **repeated plan enactment** itself (Keller et al., 2021).

Read the coaching instruction off that: stop optimizing the cue and protect the enactment streak. A coach can burn three sessions helping a client find the perfect anchor, and the trial says those sessions bought nothing that showing up eighty times would not have.

**Why two clients on the same plan diverge.** A 12-week longitudinal study of physical-activity habit formation found habit strength rose overall but with substantial individual variability, so much that neither a linear nor a logarithmic growth model fit well at the group level. What did predict faster formation was **trait self-control** (McAlpine et al., 2026). The honest reading is narrow: this is one small study of 41 people, and it says individual self-regulatory capacity moderates the RATE of formation. It does not say clients low in self-control cannot form habits, and a coach who uses it that way has turned a moderator into a verdict.

**What builds automaticity.** Consistent repetition of the same behavior in the same stable context. The cue does the heavy lifting: behaviors anchored to something that reliably happens ("after I park at work") outperform behaviors anchored to intentions ("in the afternoon sometime").

**Coaching translation.** Help clients pick ONE behavior, anchor it to a stable daily cue, expect two to eight-plus months rather than three magic weeks, and pre-negotiate the missed day: "when you miss one, and you will, the plan is to resume at the next cue, not to restart or repent."

:::reveal Quote the three Lally numbers a coach should know exactly. ||| Time to 95 percent of the automaticity plateau ranged from 18 to 254 days with a median of 66; and missing one opportunity did not materially affect formation. The famous 21 days appears nowhere in the data.

:::reveal Why does anchoring a habit to "after I park at work" beat "in the afternoon sometime"? ||| Automaticity grows from repetition in a stable context, and the cue carries the behavior. A reliable event is a stable cue; a vague time window forces deliberation every day, which is exactly what habit formation is supposed to retire.

## Vocabulary
- **Automaticity**: the quality of a behavior firing with little deliberation once its cue appears; what habit formation builds and the Self-Report Habit Index measures.
- **Context cue**: the stable, reliably occurring event a habit is anchored to; the cue, not willpower, carries a formed habit.
- **Asymptotic curve**: fast early gains that flatten toward a plateau; the shape automaticity followed in Lally's data.
- **Median**: the middle value of a distribution; the 66 days is a median, which matters because the 18-to-254-day range makes any single average misleading.
- **Plan enactment**: actually performing the planned behavior at its cue; in Keller's trial the repeated enactment, not the type of cue, predicted automaticity.
- **Routine-based versus time-based cue**: anchoring to an event that reliably happens versus to a clock time; randomized head to head, they performed the same.
- **Moderator**: a variable that changes how fast or strongly an effect occurs without deciding whether it occurs; trait self-control moderates habit-formation rate.

## Sources
Keller, J., Kwasnicka, D., Klaiber, P., Sichert, L., Lally, P., & Fleig, L. (2021). Habit formation following routine-based versus time-based cue planning: A randomized controlled trial. *British Journal of Health Psychology, 26*(3), 807-824. https://pubmed.ncbi.nlm.nih.gov/33405284/

Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998-1009. https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674

McAlpine, T., Liddelow, C., Charlesworth, J., Mergelsberg, E., Green, A., Novoradovskaya, E., Franz, T., Haywood, D., Baughman, F. D., Breare, H., & Mullan, B. (2026). A longitudinal study examining physical activity habit formation. *Behavioral Sciences, 16*(4), 535. https://doi.org/10.3390/bs16040535

Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. *Healthcare, 12*(23), 2488. https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/`,
      recallContent: [
        {
          prompt: "A client misses two days of their new habit and wants to restart the whole program. What does the data say, and what do you coach?",
          answer:
            "Lally's data shows a single missed opportunity does not materially affect habit formation; the danger is abandonment, not the miss. Coach the pre-negotiated rule: resume at the next cue, no restarting, no repenting.",
        },
        {
          prompt: "Where does the '21 days to form a habit' figure come from, and what replaced it?",
          answer:
            "A 1960s self-help observation, not data. Lally's real-world numbers: median 66 days to near-plateau automaticity, with an 18-to-254-day range across people and behaviors.",
        },
      ],
    },
    {
      slug: "the-lore-lesson",
      title: "5 · The lore lesson: popular techniques the evidence does not support",
      section: "Section 1 · How change works",
      body: `Every field carries folklore. A coach who cannot name theirs will teach it by accident. Four entries, each contrasted with what holds up.

**"It takes 21 days to form a habit."** Contradicted directly by the best real-world data: median 66 days, range 18 to 254 (Lally et al., 2010). Why it persists: 21 days is a promise, 66-with-a-huge-range is a forecast. Coaches sell forecasts.

**Visualization and affirmation, by themselves.** Vividly imagining the desired future, without confronting what stands in the way, is not just weak; Oettingen's research program found idealized positive fantasies can REDUCE the energy available for pursuit, measurable as dampened systolic blood pressure responses, the body's energization signal (Oettingen, 2014). The fix is not to ban imagining but to pair it with obstacles, which is lesson 17's whole subject. Until then: a vision board without an obstacle is sedation.

**Brand-name motivational interviewing without fidelity.** MI's meta-analytic support comes from trials with treatment integrity: trained practitioners, fidelity coding. Programs that borrow the vocabulary ("we use MI!") without the discipline are not covered by that evidence, and the reviews say so. Using two open questions is not MI, any more than owning a barbell is periodization.

**Rigid stage-matching.** "Never use action strategies with a contemplator" outruns the TTM evidence, which supports reading readiness, not forbidding tools by stage (lesson 2).

The pattern across all four: the lore versions promise certainty and speed; the evidence offers ranges, conditions, and fidelity requirements. When a technique's pitch has no conditions attached, that is the tell.

:::reveal What did Oettingen's research find about idealized positive fantasies on their own? ||| They can reduce the energy available for pursuit, measurable as dampened systolic blood pressure, the energization signal. Imagining the wish without its obstacles can sedate rather than mobilize, which is why mental contrasting pairs the two.

:::reveal What is the general tell that a technique's pitch is lore rather than evidence? ||| No conditions attached. Evidence-backed techniques come with ranges, moderators, and fidelity requirements; lore promises certainty and speed with none.

## Vocabulary
- **Practitioner lore**: technique folklore that travels on promise rather than data; every field has it, and a coach who cannot name theirs teaches it by accident.
- **Fidelity**: how faithfully an intervention is delivered as tested; MI's evidence belongs to high-fidelity delivery, not to anything wearing the label.
- **Energization**: the body's mobilized readiness to act, measurable via systolic blood pressure; idealized fantasy alone dampens it.
- **Positive fantasy**: vivid imagining of the desired future without its obstacles; pleasant, and capable of substituting for pursuit rather than fueling it.

## Sources
Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998-1009. https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674

Oettingen, G. (2014). *Rethinking positive thinking: Inside the new science of motivation*. Penguin Random House.`,
    },
    {
      slug: "quiz-how-change-works",
      title: "6 · Knowledge check: how change works",
      section: "Section 1 · How change works",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "In Lally et al.'s habit study, the median time to reach 95 percent of automaticity was:",
            options: [
              "21 days, confirming the popular rule",
              "66 days, within a range of 18 to 254",
              "254 days for every behavior studied",
              "12 weeks, the length of the study itself",
            ],
            correctIndex: 1,
            explanation:
              "Median 66 days, range 18 to 254 across people and behaviors. The 21-day figure is folklore, and the study window (12 weeks) is not the answer; times to plateau were modeled per participant.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What did missing a single opportunity do to habit formation in Lally's data?",
            options: [
              "It reset the automaticity curve to baseline",
              "Nothing material; the danger is abandonment, not the miss",
              "It cut final automaticity roughly in half",
              "It mattered only for exercise habits, not eating habits",
            ],
            correctIndex: 1,
            explanation:
              "Missing one opportunity did not materially affect the habit's development. Coaching translation: pre-negotiate the missed day so a skip never becomes a quit.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "The three needs of self-determination theory are:",
            options: [
              "Autonomy, competence, and relatedness",
              "Mastery, purpose, and accountability",
              "Motivation, discipline, and environment",
              "Safety, esteem, and self-actualization",
            ],
            correctIndex: 0,
            explanation:
              "Autonomy (the change is theirs), competence (they can see themselves succeeding), relatedness (connected to people who matter in it). Supporting all three shifts motivation toward autonomous forms that sustain behavior.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "SDT-informed health interventions show effects around what size, per the Ntoumanis meta-analyses?",
            options: [
              "Large effects, d near 0.8",
              "No reliable effects at all",
              "Small effects, d around 0.2 to 0.3, mediated by autonomous motivation",
              "Reliable effects only in adolescent populations, where school-based delivery enforces intervention fidelity",
            ],
            correctIndex: 2,
            explanation:
              "Small but reliable effects (d roughly 0.2 to 0.3) on behaviors and psychological outcomes, mediated by autonomous motivation and perceived competence, with a warning that label-only SDT programs can show nulls.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What is the honest status of TTM stage-matching?",
            options: [
              "Stage-matched interventions consistently outperform all alternatives",
              "The stages have been shown not to exist",
              "Reading readiness is useful, but evidence for stage-matched superiority is mixed and modest",
              "Stage-matching works only in substance-use populations, where the model was first derived from smoking-cessation cohorts",
            ],
            correctIndex: 2,
            explanation:
              "TTM earns its keep as a readiness heuristic and shared language. The contested parts: whether stages are discrete, and whether stage-matched interventions beat good unstaged ones, where reviews find modest, inconsistent advantages.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "The 2023 Boehmer meta-analysis of health and wellness coaching found:",
            options: [
              "Large effects on all outcomes with high certainty",
              "QoL, self-efficacy, and depression improvements at small-to-moderate sizes, no anxiety effect, low certainty",
              "No effects on any patient-important outcome",
              "Improvements only when coaching exceeded twelve months of continuous sessions, with earlier measurement points showing nothing",
            ],
            correctIndex: 1,
            explanation:
              "Thirty RCTs: quality of life SMD 0.62 within 3 months, self-efficacy 0.38, depression 0.41 to 0.72 across 3 to 12 months, anxiety null, certainty mostly low or very low. The field's honest report card.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Why can vision-boarding by itself backfire, per Oettingen's research?",
            options: [
              "Idealized positive fantasies can dampen energization, measured via systolic blood pressure",
              "Visualization only works for athletes",
              "Imagining success violates SDT's competence need",
              "It cannot backfire; the research concern is only the session time it consumes without adding measurable benefit",
            ],
            correctIndex: 0,
            explanation:
              "Enjoying the imagined future without confronting obstacles can reduce the energy available for pursuit, which shows up physiologically as dampened systolic blood pressure. Mental contrasting exists to fix exactly this.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "A program advertises 'MI-based coaching' with no practitioner training or fidelity checks. What does the MI evidence say about it?",
            options: [
              "The meta-analytic support transfers automatically to anything labeled MI, since the label itself tracks the training behind it",
              "Nothing; that program is outside the trials' conditions, and reviews flag exactly this gap",
              "It will show larger effects because it is less rigid",
              "The label is legally protected, so the program cannot exist",
            ],
            correctIndex: 1,
            explanation:
              "MI's evidence comes from trials with treatment integrity. Borrowing the vocabulary without the discipline exits that evidence base; the reviews name low-fidelity 'brand MI' as a known problem.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "On the effect-size scale this course uses, coaching's honest range mostly sits:",
            options: [
              "Between 0.2 and 0.6, small to moderate",
              "Above 0.8, large",
              "At exactly 0.5 across studies",
              "Below 0.05, indistinguishable from zero",
            ],
            correctIndex: 0,
            explanation:
              "Most replicated coaching effects land between d 0.2 and 0.6. Small-to-moderate, reliable, and compounding, which is a different claim from either 'transformative' or 'useless'.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Which coaching behavior supports the autonomy need, as taught here?",
            options: [
              "Prescribing the plan the evidence says is optimal",
              "Offering choices with rationale: 'here are three ways people handle this; which fits your life?'",
              "Setting consequences for missed sessions",
              "Repeating the client's stated goal back to them at the start of every weekly session until it is achieved",
            ],
            correctIndex: 1,
            explanation:
              "Autonomy support means real choices plus rationale, so the change stays the client's. Prescription, pressure, and consequences push toward controlled motivation, which the maintenance data does not favor.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What is this course's stated subject, in its own words?",
            options: [
              "The gap between knowing and doing, and the evidence for what actually closes it",
              "The application of exercise science and nutrition knowledge to chronic-disease populations",
              "The scope boundaries separating coaching from licensed clinical practice",
              "The five wellness pillars, taught at the depth a board examination requires",
            ],
            correctIndex: 0,
            explanation:
              "The knowing-doing gap. Scope is WELL-00's subject and the pillars belong to the later courses; this one is about the change craft itself.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Why does a course written for a certified trainer open by saying knowledge does not change behavior?",
            options: [
              "Because the trainer's knowledge is already in the room and the client still is not changing",
              "Because trainers systematically overestimate how much their clients understand",
              "Because behavior-change science contradicts much of what certifications teach",
              "Because clients rarely retain technical explanations delivered during sessions",
            ],
            correctIndex: 0,
            explanation:
              "The premise is not that the knowledge is wrong or unretained. It is that the knowledge is present and insufficient, which is what identifies the missing layer.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "How many randomized trials did the 2023 Boehmer meta-analysis pool, and in what population?",
            options: [
              "Thirty trials, in chronic illness care",
              "Three hundred trials, across general adult populations",
              "Fifteen trials, in adults with obesity specifically",
              "Sixty trials, across both clinical and workplace wellness settings",
            ],
            correctIndex: 0,
            explanation:
              "Thirty randomized trials of health and wellness coaching in chronic illness. The population matters when reading the result across to a general coaching practice.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "What standardized mean difference did Boehmer et al. report for quality of life within three months?",
            options: [
              "0.62",
              "0.22",
              "1.05",
              "0.38",
            ],
            correctIndex: 0,
            explanation:
              "SMD 0.62, which sits between moderate and large on this course's scale, and is the single largest number the meta-analysis produced.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Which outcome showed NO effect in the Boehmer meta-analysis?",
            options: [
              "Anxiety",
              "Depression, which failed to separate from control at any timepoint",
              "Self-efficacy, which moved only in the trials with the longest follow-up",
              "Quality of life, which regressed to control by twelve months",
            ],
            correctIndex: 0,
            explanation:
              "Anxiety showed no effect. Quality of life, self-efficacy, and depression all improved, depression out to twelve months.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "How did Boehmer et al. grade the certainty of most of their evidence?",
            options: [
              "Low or very low",
              "Moderate, with high certainty for the quality-of-life outcome",
              "High for behavioral outcomes and low for psychological ones",
              "Not graded, since certainty assessment applies only to clinical endpoints",
            ],
            correctIndex: 0,
            explanation:
              "Mostly low or very low. The course quotes this alongside the effect sizes deliberately: an effect size without its certainty rating is half a finding.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Why does the course quote the meta-analysis rather than 'the brochure version'?",
            options: [
              "Because it is the field's own report card, and honesty about size is the program's posture",
              "Because marketing claims are legally actionable if repeated by a coach",
              "Because brochures omit the chronic-illness population the trials were run in",
              "Because certification bodies require citation of primary literature in curricula",
            ],
            correctIndex: 0,
            explanation:
              "It is the field's own report card. The program's stated posture is quoting it rather than the flattering version, which is the same rule WELL-00 set for every claim.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "The course says small effects are not unimportant. What is its argument?",
            options: [
              "Small, reliable effects compound across months the way training adaptations do",
              "Small effects in trials typically understate what happens in individual practice",
              "Small effects are the largest achievable in any behavioral intervention",
              "Small effects become large when several techniques are combined in one program",
            ],
            correctIndex: 0,
            explanation:
              "Compounding over time, by analogy to training adaptations. The course does not claim trials understate reality or that stacking techniques multiplies effects.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Across how many tests has if-then planning replicated, per this lesson?",
            options: [
              "642",
              "200",
              "94",
              "1,340",
            ],
            correctIndex: 0,
            explanation:
              "642 tests. The course names replication counts because replication, not plausibility, is what separates the techniques it teaches from the ones in the lore lesson.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Which four bodies of evidence does the lesson name as having replicated?",
            options: [
              "Motivational interviewing, if-then planning, need-supportive coaching, and habit formation",
              "Motivational interviewing, stage-matching, visualization, and habit formation",
              "Goal-setting theory, if-then planning, decisional balance, and self-monitoring",
              "Need-supportive coaching, cognitive restructuring, if-then planning, and mental contrasting",
            ],
            correctIndex: 0,
            explanation:
              "MI across hundreds of trials, if-then planning across 642 tests, need-supportive coaching across dozens of interventions, and habit formation with real-world time courses. Stage-matching and visualization appear in the lore lesson instead.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Why does the course teach the techniques that did NOT replicate, by name?",
            options: [
              "Because a coach who cannot tell evidence from folklore sells folklore eventually",
              "Because clients frequently arrive having tried them and need them debunked",
              "Because certification examinations still test several of them",
              "Because they remain useful when applied with sufficient fidelity",
            ],
            correctIndex: 0,
            explanation:
              "The stated reason is self-protective: unnamed folklore gets taught by accident. The lore lesson exists so the coach can recognize their own.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "On this course's scale, what does a standardized mean difference near 0.8 represent?",
            options: [
              "A large effect",
              "A moderate effect",
              "A small effect",
              "An effect too large to be credible in behavioral research",
            ],
            correctIndex: 0,
            explanation:
              "Near 0.2 small, near 0.5 moderate, near 0.8 large. Coaching's honest range mostly sits between 0.2 and 0.6, so 0.8 would be unusual rather than incredible.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "What is 'evidence certainty,' and how does it differ from effect size?",
            options: [
              "How much the estimate can be trusted, downgraded for bias risk and inconsistency; a separate judgment from how big the effect is",
              "The statistical significance of the effect, expressed as a confidence interval around the estimate",
              "The number of trials contributing to a pooled estimate, which determines its precision",
              "The proportion of trials showing an effect in the same direction as the pooled result",
            ],
            correctIndex: 0,
            explanation:
              "Size and certainty are independent judgments. A large effect graded very low certainty and a small effect graded high certainty are different findings, and reporting one without the other misleads.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "What is 'self-efficacy' as this course defines it?",
            options: [
              "A person's belief they can execute the behavior in question",
              "A person's confidence that the behavior will produce the outcome they want",
              "A person's history of successfully completing similar behaviors before",
              "A person's stated commitment to a behavior at the end of a session",
            ],
            correctIndex: 0,
            explanation:
              "Belief in one's own capability to execute. Belief that the behavior WORKS is outcome expectancy, a different construct, and past history and stated commitment are neither.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Why does this course prefer meta-analyses to single trials wherever they exist?",
            options: [
              "They pool trial results into one weighted estimate rather than resting on a single study's result",
              "They are published in higher-impact journals and therefore reviewed more rigorously",
              "They are more recent than the individual trials they summarize",
              "They report effects in standardized units, which single trials do not",
            ],
            correctIndex: 0,
            explanation:
              "Pooling into a weighted estimate is the reason. Journal prestige, recency, and unit reporting are not what gives a meta-analysis its authority.",
            sourceLessonSlug: "why-knowledge-fails",
          },
          {
            prompt: "Name the five stages of the transtheoretical model in order.",
            options: [
              "Precontemplation, contemplation, preparation, action, maintenance",
              "Precontemplation, contemplation, commitment, action, maintenance",
              "Awareness, contemplation, preparation, action, consolidation",
              "Contemplation, preparation, initiation, action, maintenance",
            ],
            correctIndex: 0,
            explanation:
              "Precontemplation, contemplation, preparation, action, maintenance. Commitment, awareness, initiation, and consolidation are not TTM stages.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "Which three constructs does TTM name as driving movement through the stages?",
            options: [
              "Processes of change, decisional balance, and self-efficacy",
              "Autonomy, competence, and relatedness",
              "Readiness, capability, and opportunity",
              "Intention, planning, and environmental support",
            ],
            correctIndex: 0,
            explanation:
              "Processes of change, decisional balance, and self-efficacy. Autonomy, competence, and relatedness belong to self-determination theory, a different model taught in the next lesson.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "What is TTM genuinely good for, per this lesson?",
            options: [
              "Reading readiness, and giving coaches a shared language for the difference between clients",
              "Predicting which clients will succeed, so coaching effort can be allocated efficiently",
              "Determining which techniques are forbidden at each point in the change process",
              "Measuring how far a client has progressed toward a behavioral outcome",
            ],
            correctIndex: 0,
            explanation:
              "Readiness reading and shared language. It is explicitly not a rulebook forbidding tools, and it stages readiness rather than measuring progress or predicting success.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "Why is TTM widely used across chronic-disease prevention?",
            options: [
              "Staging a population is quick and cheap",
              "Its predictive validity outperforms competing behavioral models",
              "It is the only model with an accompanying validated assessment instrument",
              "Public-health funding requires a staged framework for intervention design",
            ],
            correctIndex: 0,
            explanation:
              "Practical economics: staging a population is quick and cheap. Popularity here reflects operational convenience rather than superior predictive performance.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "What is the FIRST of the two contested parts of TTM this lesson names?",
            options: [
              "Whether the stages are truly discrete categories rather than cut-points on a continuous readiness dial",
              "Whether the five stages appear in the same order across different health behaviors",
              "Whether precontemplation can be reliably distinguished from active resistance",
              "Whether maintenance is a stage at all or simply the absence of relapse",
            ],
            correctIndex: 0,
            explanation:
              "Discreteness. The second contested part is whether stage-MATCHED interventions actually beat good unstaged ones.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "How does this program instruct you to use TTM?",
            options: [
              "As a readiness heuristic for choosing a conversation, never as a rulebook forbidding action strategies with a contemplator",
              "As a staging instrument administered at intake and re-administered monthly",
              "As a sequence the client must complete in order before action strategies begin",
              "As a diagnostic that determines whether a client is suitable for coaching at all",
            ],
            correctIndex: 0,
            explanation:
              "Heuristic, held loosely. The explicit prohibition is on treating it as a rulebook, since forbidding tools by stage outruns the evidence.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "How should a coach determine where a client sits, per this lesson?",
            options: [
              "Ask, in the client's own words",
              "Administer the stages-of-change algorithm at the first session",
              "Infer it from the client's behavior over the preceding month",
              "Assess it against the decisional-balance ledger the client completes",
            ],
            correctIndex: 0,
            explanation:
              "Ask, in their words. That keeps the read client-centered and avoids the false precision an instrument would imply for a construct the lesson has just called contested.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "Where does the lesson say a conversation's center of gravity should sit at each point?",
            options: [
              "Exploring ambivalence early, planning and environment design late, relapse-proofing in maintenance",
              "Planning early, exploring ambivalence in the middle, and goal review in maintenance",
              "Education early, planning in the middle, and accountability throughout",
              "Assessment early, prescription in the middle, and monitoring in maintenance",
            ],
            correctIndex: 0,
            explanation:
              "Ambivalence, then planning and environment, then relapse-proofing. Note it shifts the conversation's CENTER of gravity rather than forbidding anything outside it.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "What is 'decisional balance'?",
            options: [
              "The client's running ledger of pros and cons of changing, which shifts across the stages",
              "The equilibrium between a client's stated goals and their available time and resources",
              "The coach's judgment about whether a client is ready to commit to action",
              "The trade-off between speed of change and likelihood of maintaining it",
            ],
            correctIndex: 0,
            explanation:
              "The pros-and-cons ledger, one of the three constructs TTM says drives stage movement. It belongs to the client, not the coach.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "The lesson closes by saying clients are not obligated to do what?",
            options: [
              "Move through your diagram",
              "Disclose their true stage when asked directly",
              "Sustain change past the maintenance stage",
              "Accept the conversation the model recommends for their stage",
            ],
            correctIndex: 0,
            explanation:
              "Move through the diagram. It is the instruction to hold the model loosely, stated as a reminder about whose process it actually is.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "State the three psychological needs of self-determination theory with what each means.",
            options: [
              "Autonomy (the change is genuinely theirs), competence (they can see themselves succeeding), relatedness (they are connected to people who matter in it)",
              "Autonomy (they work without supervision), competence (they have the necessary skills), relatedness (they have a supportive coach)",
              "Agency (they choose the goal), mastery (they perform it well), belonging (they join a community around it)",
              "Autonomy (they set their own schedule), confidence (they expect to succeed), connection (they report to someone regularly)",
            ],
            correctIndex: 0,
            explanation:
              "Autonomy is ownership of the change, not independence from supervision. Competence is seeing oneself succeeding, not possessing skills. Relatedness is connection to people who matter in the change, not accountability check-ins.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "Which two forms of motivation does SDT call autonomous, and what do they predict?",
            options: [
              "Intrinsic and identified regulation, which predict maintained health behavior",
              "Intrinsic and introjected regulation, which predict short-term adherence",
              "Identified and external regulation, which predict initial behavior change",
              "Intrinsic and extrinsic regulation, which predict effort during supervised sessions",
            ],
            correctIndex: 0,
            explanation:
              "Intrinsic and identified regulation are the autonomous forms, and maintenance is what they predict. Introjected and external regulation sit on the controlled side.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What mediated the effects in the Ntoumanis meta-analysis of SDT-informed health interventions?",
            options: [
              "Autonomous motivation and perceived competence",
              "Relatedness to the coach and session frequency",
              "Baseline readiness and self-reported goal importance",
              "Intervention duration and practitioner training level",
            ],
            correctIndex: 0,
            explanation:
              "Autonomous motivation and perceived competence, which is what makes the finding mechanism-consistent rather than merely positive: the theory's proposed pathway is the one that carried the effect.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What warning does the SDT literature carry about programs using the label?",
            options: [
              "Programs claiming SDT without rigorously operationalizing need support can show null effects",
              "Programs using SDT with clinical populations show effects opposite to those intended",
              "Programs combining SDT with other frameworks dilute the effect below detectability",
              "Programs applying SDT without a validated motivation questionnaire cannot demonstrate effects",
            ],
            correctIndex: 0,
            explanation:
              "Null effects when need support is not rigorously operationalized. The lesson's phrasing is worth keeping: the theory is a mechanism, not a magic word.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What does competence support sound like in practice?",
            options: [
              "Right-sized challenges and progress made visible",
              "Detailed technical explanation of why the protocol works",
              "Reassurance that the client is capable of anything they commit to",
              "Comparison of the client's results against population benchmarks",
            ],
            correctIndex: 0,
            explanation:
              "Right-sized challenge plus visible progress. Reassurance is not evidence of capability, and benchmark comparison can undermine competence rather than support it.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What does relatedness support include, beyond the coach's own regard?",
            options: [
              "Recruiting the client's actual relationships into the change",
              "Enrolling the client in a group program alongside similar clients",
              "Increasing session frequency so contact is more regular",
              "Connecting the client with a peer who has completed the same change",
            ],
            correctIndex: 0,
            explanation:
              "The client's real relationships, not manufactured ones. The coach's genuine, non-contingent regard is the other half.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "The lesson says every later tool in the course is what?",
            options: [
              "Need support with better tooling, motivational interviewing especially",
              "A structured application of the transtheoretical model's stage logic",
              "A behavior-change technique drawn from the same taxonomy",
              "A method for increasing self-efficacy through graded mastery experience",
            ],
            correctIndex: 0,
            explanation:
              "That framing is why SDT sits in lesson 3: it supplies the mechanism the later techniques, MI above all, are running on.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "What is 'need support' as a defined term?",
            options: [
              "Coaching behavior that feeds the three needs; the active ingredient SDT interventions run on",
              "The provision of resources a client requires to perform the behavior",
              "The coach's assessment of which of the three needs is most deficient",
              "The social support a client receives from people outside the coaching relationship",
            ],
            correctIndex: 0,
            explanation:
              "It names the coach's behavior, and it is the thing label-only programs skip. Resources, assessment, and outside support are all different things.",
            sourceLessonSlug: "self-determination-theory",
          },
          {
            prompt: "How was Lally et al.'s 2010 habit study conducted?",
            options: [
              "Ninety-six volunteers each tied one new behavior to a daily cue and tracked automaticity daily for twelve weeks",
              "Ninety-six volunteers were randomized to habit training or education and assessed at three and six months",
              "Two hundred volunteers logged three new behaviors each over a six-month observation period",
              "Ninety-six volunteers self-reported habit strength retrospectively after one year of practice",
            ],
            correctIndex: 0,
            explanation:
              "One behavior each, anchored to a daily cue, with daily automaticity tracking over twelve weeks. The daily measurement is what allowed per-person curves to be modeled.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What shape did automaticity follow in Lally's data?",
            options: [
              "An asymptotic curve: fast gains early, flattening toward a plateau",
              "A linear increase sustained evenly across the twelve weeks",
              "A step function, with automaticity jumping once a threshold of repetitions was passed",
              "An S-shaped curve, slow at first and accelerating after several weeks",
            ],
            correctIndex: 0,
            explanation:
              "Asymptotic: the early repetitions buy the most, and returns diminish as the behavior approaches second nature. That shape is why the plateau is defined at 95 percent rather than at a fixed day count.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What was the RANGE of modeled times to 95 percent of automaticity plateau in Lally's data?",
            options: [
              "18 to 254 days",
              "21 to 66 days",
              "30 to 120 days",
              "59 to 335 days",
            ],
            correctIndex: 0,
            explanation:
              "18 to 254 days around a median of 66. The range is the number that matters in a coaching conversation, because it is what makes any single average misleading.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "Where does the '21 days' figure actually come from?",
            options: [
              "A 1960s self-help observation, with no support in this data",
              "An early Lally pilot study later superseded by the twelve-week trial",
              "A military training protocol adopted into behavioral literature",
              "A misreading of the 18-day low end of Lally's observed range",
            ],
            correctIndex: 0,
            explanation:
              "A 1960s self-help observation. It is not a misread data point or an early study; it never had the evidence behind it that its ubiquity implies.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What did the 2024 Singh systematic review find for individual habit-formation times?",
            options: [
              "4 to 335 days, with study medians of 59 to 66 and means of 106 to 154",
              "18 to 254 days, with study medians of 59 to 66 and means of 84 to 120",
              "21 to 200 days, with study medians of 45 to 60 and means of 90 to 130",
              "4 to 335 days, with study medians of 21 to 66 and means of 66 to 154",
            ],
            correctIndex: 0,
            explanation:
              "Individual times 4 to 335 days, medians 59 to 66, means 106 to 154. Fourteen years past Lally, the honest answer barely moved: about two months typically, enormous variation always.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "Keller and colleagues randomized participants to two kinds of cue. Which two?",
            options: [
              "A daily routine versus a clock time",
              "A location versus a preceding behavior",
              "A self-chosen cue versus an assigned cue",
              "A morning cue versus an evening cue",
            ],
            correctIndex: 0,
            explanation:
              "Routine-based ('after I brush my teeth') against time-based ('at 7 p.m.'). It is the experiment that tests whether cue TYPE matters, given that the cue is known to carry the habit.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What did Keller et al. find when routine-based and time-based cues were compared head to head?",
            options: [
              "No difference in automaticity or plan enactment between the two cue types",
              "Routine-based cues produced substantially faster automaticity than time-based cues",
              "Time-based cues produced faster automaticity but lower long-term maintenance",
              "Routine-based cues worked better for morning behaviors and time-based for evening ones",
            ],
            correctIndex: 0,
            explanation:
              "No difference. The trial was designed to detect an advantage and did not find one, which is why the coaching instruction is to stop optimizing the cue.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What DID predict automaticity in Keller's trial?",
            options: [
              "Repeated plan enactment",
              "The stability of the chosen cue across the 84 days",
              "Participants' baseline motivation for the chosen behavior",
              "The simplicity of the behavior participants selected",
            ],
            correctIndex: 0,
            explanation:
              "Repeated plan enactment: actually doing the thing at its cue, over and over. That is the finding the coaching translation rests on.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What median time to peak automaticity did Keller's trial produce, and why does the course highlight it?",
            options: [
              "59 days, independently landing where Lally did",
              "66 days, exactly replicating Lally's median in a different behavior domain",
              "84 days, matching the trial's full observation window",
              "42 days, notably faster than Lally's median in a nutrition-specific sample",
            ],
            correctIndex: 0,
            explanation:
              "Fifty-nine days, from a different sample and a different behavior domain than Lally's, which is what makes it an independent landing rather than a repetition.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What coaching instruction does the course read off Keller's result?",
            options: [
              "Stop optimizing the cue and protect the enactment streak",
              "Assign a routine-based cue by default, since it generalizes better across clients",
              "Choose the cue collaboratively over several sessions, since ownership drives enactment",
              "Switch cue types if automaticity has not risen within the first month",
            ],
            correctIndex: 0,
            explanation:
              "If cue type does not matter and enactment does, sessions spent hunting the perfect anchor buy nothing that showing up eighty times would not have.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What did the 12-week longitudinal study of physical-activity habit formation find about growth models?",
            options: [
              "Neither a linear nor a logarithmic model fit well at the group level, given substantial individual variability",
              "A logarithmic model fit well, confirming the asymptotic shape at the group level",
              "A linear model fit best, contradicting the asymptotic curve Lally described",
              "Growth models were not tested, since the sample was too small to support them",
            ],
            correctIndex: 0,
            explanation:
              "Neither fit at the group level. Individual variability was large enough that the average curve described nobody well, which is itself the finding.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What predicted faster habit-strength formation in the McAlpine study?",
            options: [
              "Higher trait self-control",
              "Higher baseline physical-activity history",
              "Greater cue exposure across the twelve weeks",
              "Stronger reported intention at baseline",
            ],
            correctIndex: 0,
            explanation:
              "Trait self-control. Behavior history and demographics were collected too, but self-control is the variable that came out significantly related to formation rate.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "The course gives a narrow reading of the self-control finding. What is the misuse it warns against?",
            options: [
              "Treating a moderator of formation RATE as a verdict that low-self-control clients cannot form habits",
              "Treating a single small study as sufficient basis for any coaching decision",
              "Treating trait self-control as modifiable when the evidence shows it is fixed",
              "Treating self-control as interchangeable with self-efficacy in coaching conversations",
            ],
            correctIndex: 0,
            explanation:
              "A moderator changes how fast or strongly an effect occurs; it does not decide whether it occurs. Reading it as a verdict converts a rate finding into a exclusion criterion the data does not support.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "How large was the McAlpine sample, and why does the course say so?",
            options: [
              "Forty-one participants, stated because the honest reading of a small study is a narrow one",
              "Four hundred and one participants, stated to establish the finding's precision",
              "Ninety-six participants, matching Lally's sample for comparability",
              "One hundred and ninety-two participants, matching Keller's trial",
            ],
            correctIndex: 0,
            explanation:
              "Forty-one. The course states sample sizes so the weight a finding carries is visible, which is the same reason it prints certainty ratings beside effect sizes.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What is a 'moderator' as this lesson defines it?",
            options: [
              "A variable that changes how fast or strongly an effect occurs, without deciding whether it occurs",
              "A variable through which an effect travels, explaining why it happens",
              "A variable controlled for in analysis to remove confounding",
              "A variable measured at baseline to establish group equivalence",
            ],
            correctIndex: 0,
            explanation:
              "Moderators change the size or speed of an effect. A variable an effect travels THROUGH is a mediator, which is what autonomous motivation was in the SDT lesson.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What is 'plan enactment'?",
            options: [
              "Actually performing the planned behavior at its cue",
              "Committing to a written plan at the end of a coaching session",
              "The moment a plan becomes automatic and no longer requires deliberation",
              "Revising a plan after an obstacle interrupts it",
            ],
            correctIndex: 0,
            explanation:
              "Doing the thing, at the cue, on the day. Keller's finding is that the repetition of this, rather than the cue's design, is what builds automaticity.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What does the course say builds automaticity?",
            options: [
              "Consistent repetition of the same behavior in the same stable context",
              "Sustained motivation across the formation period, refreshed at each session",
              "Progressive increase in the behavior's difficulty as capability grows",
              "Frequent variation of the context, so the behavior generalizes across settings",
            ],
            correctIndex: 0,
            explanation:
              "Same behavior, same stable context, repeatedly. Varying the context is the opposite of the mechanism, and difficulty progression belongs to training design rather than habit formation.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "Why does 'after I park at work' outperform 'in the afternoon sometime'?",
            options: [
              "A reliable event is a stable cue, while a vague window forces deliberation every day",
              "Location-based cues are more salient than time-based cues in general",
              "Morning and midday cues consistently outperform afternoon cues",
              "Workplace cues carry more social accountability than home cues",
            ],
            correctIndex: 0,
            explanation:
              "Stability versus vagueness, not location versus time. Keller's trial showed a SPECIFIC clock time performs as well as a routine; it is the vagueness of 'sometime' that defeats the mechanism.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What four things does the lesson's coaching translation prescribe?",
            options: [
              "One behavior, a stable daily cue, an expectation of two to eight-plus months, and a pre-negotiated missed day",
              "Three behaviors, varied cues, an expectation of two months, and weekly progress review",
              "One behavior, a self-chosen cue, an expectation of 66 days, and a restart rule after any lapse",
              "Two behaviors, stable cues, an expectation of twelve weeks, and daily self-monitoring",
            ],
            correctIndex: 0,
            explanation:
              "One behavior, stable cue, honest time horizon, and the missed day negotiated in advance. A restart rule is exactly what the Lally finding argues against.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "How should the missed day be pre-negotiated, in the lesson's own words?",
            options: [
              "When you miss one, and you will, resume at the next cue, not restart or repent",
              "When you miss one, add an extra repetition the following day to compensate",
              "When you miss one, review whether the cue is still the right anchor",
              "When you miss two in a row, restart the count from the beginning",
            ],
            correctIndex: 0,
            explanation:
              "Resume at the next cue. Compensating, re-auditing the cue, and restarting all treat a single miss as meaningful, which the data says it is not. Abandonment is the actual failure mode.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "What instrument does the lesson name as measuring automaticity?",
            options: [
              "The Self-Report Habit Index",
              "The Behavioral Automaticity Scale",
              "The Habit Strength Questionnaire",
              "The Routine Formation Inventory",
            ],
            correctIndex: 0,
            explanation:
              "The Self-Report Habit Index. It appears in the automaticity vocabulary entry and is the family of measure the pooled habit reviews draw on.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "How many entries does the lore lesson contain, and what is each contrasted with?",
            options: [
              "Four, each contrasted with what holds up",
              "Three, each contrasted with a superior technique from the same tradition",
              "Five, each contrasted with the certification that still teaches it",
              "Four, each contrasted with the trial that first tested it",
            ],
            correctIndex: 0,
            explanation:
              "Four entries: the 21-day claim, standalone visualization, brand-name MI without fidelity, and rigid stage-matching. Each is set against what the evidence does support.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "Why does the lore lesson say the 21-day claim persists?",
            options: [
              "21 days is a promise and 66-with-a-huge-range is a forecast, and coaches sell forecasts",
              "It appears in several widely used certification textbooks",
              "It is close enough to the observed lower bound to seem defensible",
              "Clients prefer it and coaches avoid contradicting client expectations",
            ],
            correctIndex: 0,
            explanation:
              "The promise-versus-forecast framing. The lesson's point is about the market pressure on claims, which is why it treats naming your own folklore as a professional duty.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What physiological signal did Oettingen's research use to detect the effect of idealized positive fantasy?",
            options: [
              "Dampened systolic blood pressure responses, the body's energization signal",
              "Reduced heart-rate variability, indicating parasympathetic withdrawal",
              "Elevated salivary cortisol, indicating an anticipatory stress response",
              "Slowed reaction time on a subsequent behavioral task",
            ],
            correctIndex: 0,
            explanation:
              "Systolic blood pressure as an energization index. Positive fantasy without obstacles dampened it, which is the physiological form of the claim that fantasy can substitute for pursuit.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What is the lesson's fix for visualization, and where is it taught?",
            options: [
              "Pair the imagining with obstacles, which is mental contrasting, the subject of lesson 17",
              "Replace imagining with written goal-setting, taught in lesson 16",
              "Limit imagining to outcomes already achieved once, taught in the habit lesson",
              "Ban imagining entirely, since it competes with planning for the same resources",
            ],
            correctIndex: 0,
            explanation:
              "Pair wish with obstacle. The lesson is explicit that the fix is not to ban imagining, and its memorable line is that a vision board without an obstacle is sedation.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What does 'fidelity' mean in the context of MI's evidence?",
            options: [
              "How faithfully an intervention is delivered as tested, with trained practitioners and fidelity coding",
              "How consistently a coach applies the same technique across different clients",
              "How closely a client follows the plan agreed in session",
              "How well an intervention's results replicate in a new population",
            ],
            correctIndex: 0,
            explanation:
              "Delivery as tested. MI's meta-analytic support belongs to high-fidelity delivery, so a program borrowing the vocabulary without the discipline is not covered by that evidence.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "Which analogy does the lore lesson use for borrowing MI's vocabulary without its discipline?",
            options: [
              "Using two open questions is not MI, any more than owning a barbell is periodization",
              "Using two open questions is not MI, any more than reading a recipe is cooking",
              "Claiming MI without fidelity is like claiming a certification you never sat",
              "Claiming MI without fidelity is like prescribing a drug without knowing the dose",
            ],
            correctIndex: 0,
            explanation:
              "The barbell-and-periodization analogy, chosen because it lands for a reader who already holds a CPT: owning the equipment is not the method.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What does the lore lesson identify as overreaching about rigid stage-matching?",
            options: [
              "'Never use action strategies with a contemplator' outruns evidence that supports reading readiness, not forbidding tools",
              "It assumes clients can be staged accurately, which no instrument reliably achieves",
              "It applies a population-level model to individual clients, which the model was never built for",
              "It treats maintenance as an endpoint rather than an ongoing process",
            ],
            correctIndex: 0,
            explanation:
              "The overreach is the prohibition. TTM's evidence supports reading readiness; it does not support banning strategies by stage, which is the rulebook use lesson 2 rejected.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What is the pattern the lore lesson finds across all four entries?",
            options: [
              "The lore versions promise certainty and speed; the evidence offers ranges, conditions, and fidelity requirements",
              "The lore versions are older; the evidence-backed versions emerged in the last decade",
              "The lore versions are simpler to teach; the evidence-backed versions require formal training",
              "The lore versions were tested and failed; the evidence-backed versions were never challenged",
            ],
            correctIndex: 0,
            explanation:
              "Certainty and speed versus ranges, conditions, and fidelity. Age and teachability are not the discriminator, and several lore items were never rigorously tested at all.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What is 'practitioner lore'?",
            options: [
              "Technique folklore that travels on promise rather than data; a coach who cannot name theirs teaches it by accident",
              "Knowledge passed between practitioners that has not yet been formally studied",
              "Techniques that worked in early trials but failed to replicate later",
              "Client-facing simplifications of findings too technical to state precisely",
            ],
            correctIndex: 0,
            explanation:
              "Folklore travelling on promise. The definition's second half is the operational point: naming your own is what stops you teaching it unawares.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "What is a 'positive fantasy' as this lesson defines it?",
            options: [
              "Vivid imagining of the desired future without its obstacles; pleasant, and capable of substituting for pursuit",
              "Optimistic expectation that a goal will be achieved, which predicts persistence",
              "A visualization rehearsing the steps of a behavior before performing it",
              "A reframing technique replacing negative self-talk with encouraging statements",
            ],
            correctIndex: 0,
            explanation:
              "The defining feature is the absence of obstacles. Rehearsing steps and reframing self-talk are different techniques, and optimistic expectancy is a distinct construct that behaves differently.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "A colleague pitches a technique as working for everyone, quickly, with no conditions. What does the lore lesson tell you?",
            options: [
              "The absence of conditions is itself the tell that it is lore rather than evidence",
              "Ask which trials support it before accepting or rejecting the pitch",
              "Test it with a single client before deciding whether to adopt it",
              "Accept it provisionally, since absence of evidence is not evidence of absence",
            ],
            correctIndex: 0,
            explanation:
              "The lesson gives you a heuristic that works before you have read anything: evidence-backed techniques arrive with ranges, moderators, and fidelity requirements attached. A pitch with none is the pattern.",
            sourceLessonSlug: "the-lore-lesson",
          },
        ],
      },
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "mi-spirit",
      title: "7 · Motivational interviewing: the spirit, fourth edition",
      section: "Section 2 · Motivational interviewing",
      body: `Motivational interviewing (MI) is a guiding style of conversation, sitting deliberately between directing and following, for strengthening a person's own motivation and commitment to change. Miller and Rollnick have revised the method across four editions, and this program teaches the CURRENT one, verified against the fourth edition itself, because the vocabulary changed in ways that matter (Miller & Rollnick, 2023).

**The spirit, four components.** Underneath every technique sits an attitude the authors call the spirit of MI:

- **Partnership.** Coaching happens WITH a person, not ON them. The client is the expert on their own life.
- **Acceptance.** Absolute worth, accurate empathy, and support for autonomy, offered non-contingently.
- **Compassion.** The work serves the client's welfare, not the coach's agenda or metrics.
- **Empowerment.** The fourth edition's revision: what earlier editions called "evocation" (drawing out the client's own motivations) has been broadened to empowerment, affirming clients' own strengths, motivations, resourcefulness, and autonomy.

That last change is not cosmetic. Evocation said "the motivation is already in there; draw it out." Empowerment adds: the CAPABILITY is already in there too, and the coach's job includes making the client's own resources visible to them.

**Why spirit precedes technique.** The fourth edition is blunt that MI's skills without its spirit collapse into manipulation: clever questions steering a person where you already decided they should go. Every OARS skill in the next lessons assumes this posture. A coach who masters reflections while keeping a private agenda has not learned MI; they have learned to hide directing.

Notice how precisely this spirit matches the NBHWC scope you learned in WELL-00: client-centered, self-determined goals, the coach as facilitator. MI is the craft that scope was describing.

:::reveal Name the four components of MI's spirit in the fourth edition, and the one that changed. ||| Partnership, acceptance, compassion, and empowerment. Empowerment is the change: earlier editions said "evocation" (draw out the client's motivations); the fourth edition broadens it to affirming the client's strengths, resourcefulness, and autonomy.

:::reveal What happens to MI's techniques when the spirit is missing? ||| They collapse into manipulation: steering dressed as listening. The fourth edition is explicit that skills without the underlying posture of partnership and acceptance are not MI.

## Vocabulary
- **Motivational interviewing (MI)**: a guiding style of conversation for strengthening a person's own motivation and commitment to change, developed by Miller and Rollnick.
- **Guiding style**: the posture between directing (expert supplies answers) and following (listener drifts with the client); MI's deliberate home.
- **Spirit of MI**: the underlying attitude the techniques require: partnership, acceptance, compassion, and empowerment in the fourth edition.
- **Empowerment**: the fourth edition's broadening of evocation: the client's capability, not just their motivation, is already present, and the coach makes it visible.
- **Evocation**: the third edition's term for drawing out the client's own motivations; still accurate, now folded inside empowerment. Cite the current vocabulary.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
    },
    {
      slug: "the-fixing-reflex",
      title: "8 · The fixing reflex, and why ambivalence is normal",
      section: "Section 2 · Motivational interviewing",
      body: `The single most useful thing MI names is a reflex you have felt in every session: the urge, on hearing a problem, to fix it. Supply the plan, correct the misconception, argue for change. Earlier editions called it the righting reflex; the fourth edition renames it the **fixing reflex**, which is clearer about what it feels like from inside (Miller & Rollnick, 2023).

**Why fixing backfires with ambivalent people.** Ambivalence, wanting to change and wanting not to, at the same time, is the normal state of a person considering change, not a defect. An ambivalent person carries both sides of the argument. When the coach takes the change side out loud, the client is left holding the other side, and hears themselves defend staying the same. People are persuaded by what they hear themselves say. Argue for change and you can literally strengthen the case against it.

**What replaces fixing.** Guiding: helping the client voice their OWN reasons for change, which MI calls change talk, and letting those reasons do the persuading. The next four lessons build that skill set.

**The trainer's version of this trap.** Your certifications trained you to be the expert who supplies answers, and in content domains you are. The discipline is noticing the moment the conversation shifts from content ("what's a good protein target?") to change ("I know my target, I just don't hit it"), because expertise answers the first and quietly worsens the second.

**Ambivalence, reframed for clients.** "Part of you wants this and part of you doesn't" is not a diagnosis of weakness; it is the entry ticket to real work. A client with zero ambivalence either already changed or is not considering it.

:::reveal What is the fixing reflex, and what was it called before the fourth edition? ||| The helper's urge, on hearing a problem, to supply the fix: the plan, the correction, the argument for change. Earlier editions called it the righting reflex; the fourth edition renamed it for clarity.

:::reveal Mechanically, why does arguing for change often strengthen an ambivalent person's case against it? ||| An ambivalent person holds both sides. When you voice the change side, they are left voicing the stay-the-same side, and people are persuaded by what they hear themselves say.

## Vocabulary
- **Fixing reflex**: the helper's urge, on hearing a problem, to supply the fix: the plan, the correction, the argument for change. The fourth edition's rename of the righting reflex.
- **Ambivalence**: wanting to change and wanting not to at the same time; the normal state of a person considering change, not a defect to be argued away.
- **Righting reflex**: the earlier editions' name for the fixing reflex; you will meet it in older literature.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
      recallContent: [
        {
          prompt: "A client says 'I know exactly what to eat, I just don't do it.' Why is supplying a meal framework the wrong move here?",
          answer:
            "The conversation has shifted from content to change. The client has the knowledge; the gap is ambivalence or self-regulation, and expert-supplied answers to a change problem trigger the fixing reflex dynamic: the client defends not changing.",
        },
      ],
    },
    {
      slug: "oars-questions-affirmations",
      title: "9 · OARS I: open questions and affirmations",
      section: "Section 2 · Motivational interviewing",
      body: `MI's engaging skills travel under the acronym **OARS**: Open questions, Affirming, Reflecting, Summarizing (Miller & Rollnick, 2023). Two per lesson, starting with the O and the A.

**Open questions** invite elaboration rather than a yes, a no, or a number. "What's made you think about sleep now?" opens; "Do you want to sleep better?" closes. The craft points the fourth edition emphasizes: ask one question at a time, and resist the interrogation rhythm of question after question; in MI, questions set up reflections rather than replace them. A useful working ratio in training is more reflections than questions, which almost every new practitioner has backwards.

**Affirmations** name a strength or genuine effort you observed: "You rebuilt your whole morning around this twice already; that's persistence." The fourth edition adopts a distinction worth keeping: **simple affirmations** notice a specific action or effort, while **complex affirmations** name an enduring strength of the person that the action reveals. Both are different from praise. Praise ("good job!") positions the coach as judge and pays in approval; affirmation positions the client as capable and pays in evidence. The distinction matters because approval-seeking is a fragile motivation, while self-perceived capability, the empowerment component of the spirit, is a durable one.

**What affirmation is not.** Not flattery, not cheerleading, and never invented. An affirmation the client cannot verify against their own experience costs you the credibility every later reflection depends on.

Practice both against your own program this week: one open question you ask yourself at the start of a study session, one honest affirmation you can write at the end of it.

:::reveal What distinguishes a complex affirmation from a simple one? ||| A simple affirmation notices a specific action or effort ("you tracked every day this week"). A complex affirmation names the enduring strength that action reveals ("you're someone who keeps promises to yourself once they're written down").

:::reveal Why does MI prefer affirmation to praise? ||| Praise makes the coach the judge and pays in approval, a fragile external motivator. Affirmation makes the client capable and pays in evidence about themselves, feeding the empowerment component of the spirit.

## Vocabulary
- **OARS**: MI's four engaging skills: Open questions, Affirming, Reflecting, Summarizing. Advice is conspicuously absent, and the absence is the method.
- **Open question**: a question inviting elaboration rather than a yes, a no, or a number; in MI it sets up reflections rather than replacing them.
- **Simple affirmation**: naming a specific action or genuine effort the coach observed.
- **Complex affirmation**: naming the enduring strength the action reveals about the person.
- **Praise**: the judge's version of affirmation, paying in approval rather than evidence; fragile as motivation and avoided here.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
    },
    {
      slug: "reflections",
      title: "10 · OARS II: reflective listening",
      section: "Section 2 · Motivational interviewing",
      body: `Reflection is MI's engine room, and the skill new coaches underuse most. A reflection is a statement, not a question, that offers back your understanding of what the client means. The fourth edition's model of communication explains why it matters: between what a speaker means, what they say, what the listener hears, and what the listener interprets, there are three places for meaning to fall apart. A reflection tests your interpretation out loud, so the client can confirm or repair it (Miller & Rollnick, 2023).

**Simple reflections** stay close to what was said: repeat or slightly rephrase. They signal listening and keep the client talking, at the cost of adding nothing.

**Complex reflections** make an educated guess at what was MEANT: the feeling under the words, the value at stake, the next sentence the client did not say. "I can't keep doing this diet" reflected simply: "The diet's not working for you." Reflected complexly: "You're wondering whether the way you've defined this is the actual problem." Complex reflections carry risk, and that is their value: a wrong guess, offered as a statement the client can correct, still deepens the conversation.

**Delivery details that matter.** A reflection ends with the voice turning DOWN, not up; turned up it becomes a question and asks the client to defend rather than explore. Understate rather than overstate feelings; overstatement gets denial ("furious? I'm just annoyed"), understatement gets elaboration.

**The working rhythm.** In skilled MI the reflection-to-question ratio runs high; a common training benchmark is at least two reflections per question. If your transcript reads as an interview, you are interviewing, not coaching.

:::reveal Why is a reflection a statement rather than a question, down to the intonation? ||| A statement offers your understanding for the client to confirm or repair, keeping them exploring. Rising intonation turns it into a question, which asks the client to justify themselves and shifts the posture from listening to interrogating.

:::reveal Give the risk-and-reward logic of a complex reflection. ||| It guesses at meaning beyond the words: the feeling, the value, the unsaid next sentence. The risk is guessing wrong; the reward is depth either way, because even a corrected guess moves the conversation past the surface.

## Vocabulary
- **Reflection**: a statement, not a question, offering back your understanding of what the client means, for them to confirm or repair.
- **Simple reflection**: staying close to what was said: repeat or slight rephrase; signals listening, adds nothing.
- **Complex reflection**: an educated guess at what was MEANT: the feeling, value, or unsaid next sentence beneath the words.
- **Reflection-to-question ratio**: the working rhythm of skilled MI; a common training benchmark is at least two reflections per question.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
      recallContent: [
        {
          prompt: "A client says: 'My family thinks this health kick is another phase.' Write one simple and one complex reflection.",
          answer:
            "Simple: 'Your family isn't taking it seriously yet.' Complex: 'You want the people closest to you to believe this one is different, and that's part of why it matters to prove it.' The simple stays with the words; the complex names the stake underneath.",
        },
      ],
    },
    {
      slug: "change-talk-and-summaries",
      title: "11 · OARS III: change talk, sustain talk, and the strategic summary",
      section: "Section 2 · Motivational interviewing",
      body: `MI's central discovery is that the client's own speech predicts their behavior. **Change talk** is any client speech that favors movement: desire ("I want to sleep more"), ability ("I could walk at lunch"), reasons ("my kids"), need ("something has to give"), and, strongest, commitment and taking-steps language ("I will", "I've started"). **Sustain talk** is the mirror image, speech favoring the status quo, and it is a normal expression of ambivalence rather than resistance to be crushed (Miller & Rollnick, 2023).

**The strategic skill** is differential attention. You cannot make change talk appear on command, but you can notice it, ask for elaboration ("what would that look like?"), reflect it, and let the client hear their own case grow. The fourth edition describes directional questions and reflections chosen intentionally to invite and strengthen change talk; that is the guiding in "guiding style." Sustain talk gets heard and reflected without amplification: acknowledged, never argued with, because arguing recruits the fixing-reflex dynamic from lesson 8.

**Summaries** are reflections at scale, and in MI they are strategic instruments. A collecting summary gathers the change talk scattered across a conversation into one bouquet and hands it back: "So: the mornings feel wasted, you've done hard resets before and kept them, and the version of you at seventy matters enough to plan for. Where does that leave you?" What you include, you strengthen; what you leave out, you quietly let rest. That editorial power is exactly why the spirit lesson came first.

**The bridge to action.** When change talk shifts toward commitment language, the conversation is asking to move from why to how, which is Section 3's territory: goals, plans, and habits that hold.

:::reveal Sort these client lines: 'I could probably manage mornings' / 'I've told my partner we're starting Sunday' / 'but evenings are my only downtime.' ||| Ability change talk; commitment/taking-steps change talk (the strongest kind); sustain talk. The first two get elaboration and reflection; the third gets acknowledged without amplification.

:::reveal What makes a collecting summary a strategic instrument rather than a recap? ||| Selection. Gathering the conversation's change talk into one reflected bouquet strengthens it, while what is left out rests. That editorial power serves the client only when the spirit, not a private agenda, chooses the contents.

## Vocabulary
- **Change talk**: client speech favoring movement: desire, ability, reasons, need, and, strongest, commitment and taking-steps language.
- **Sustain talk**: client speech favoring the status quo; a normal voice of ambivalence, acknowledged without amplification, never argued with.
- **Differential attention**: the strategic skill of noticing, elaborating, and reflecting change talk while letting sustain talk rest.
- **Collecting summary**: a reflection at scale that gathers the conversation's scattered change talk into one bouquet and hands it back.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
    },
    {
      slug: "the-four-tasks",
      title: "12 · The four tasks: engaging, focusing, evoking, planning",
      section: "Section 2 · Motivational interviewing",
      body: `The fourth edition organizes MI as four component **tasks**, its simplified rename of what earlier editions called processes: **engaging, focusing, evoking, and planning** (Miller & Rollnick, 2023).

**Engaging** builds the working relationship. The OARS skills live here first: without engagement, everything downstream is technique performed at a stranger.

**Focusing** answers "change what, exactly?" Wellness conversations sprawl; sleep, food, movement, stress arrive tangled. Focusing negotiates a shared direction, and the client holds the pen: agenda-setting in MI is offered as a menu, not a syllabus.

**Evoking** is the heart: drawing out the client's own motivations for the focused change, using the change-talk craft of lesson 11. This is where MI most differs from assessment-then-advice models, and, honestly, from most certification-taught consultation scripts.

**Planning** happens when the client's language turns toward commitment: negotiating a concrete plan the client authors, testing readiness with questions like "what might you do?" rather than prescriptions. MI planning hands off beautifully to the tools in Section 3: goal specificity, if-then plans, WOOP, habit anchoring.

**Tasks, not stages.** They are called tasks rather than a pipeline because conversations loop: a plan wobbles and you return to evoking; trust frays and you return to engaging. The order describes dependency, not schedule. A useful self-check at any point in a session: which task am I in, and did the client come with me? The commonest MI failure is planning while the client is still ambivalent, which is fixing-reflex behavior wearing an MI badge.

:::reveal Name the four tasks and the dependency logic that orders them. ||| Engaging, focusing, evoking, planning. Each depends on the ones before: no honest planning without evoked motivation, no evoking without a negotiated focus, nothing at all without engagement. Conversations loop back as needed; it is a dependency order, not a schedule.

:::reveal What is the commonest MI failure mode this lesson names, and which reflex is it? ||| Planning while the client is still ambivalent: leaping to how before the client's own why has been evoked. It is the fixing reflex wearing an MI badge.

## Vocabulary
- **The four tasks**: engaging, focusing, evoking, planning: the fourth edition's simplified rename of the four processes, ordered by dependency, not schedule.
- **Engaging**: building the working relationship; where the OARS skills live first.
- **Focusing**: negotiating what, exactly, the change conversation is about, with the client holding the pen.
- **Evoking**: drawing out the client's own motivations for the focused change; MI's heart and its sharpest difference from advice models.
- **Planning**: negotiating a concrete, client-authored plan once the client's language turns toward commitment.

## Sources
Miller, W. R., & Rollnick, S. (2023). *Motivational interviewing: Helping people change and grow* (4th ed.). Guilford Press.`,
      recallContent: [
        {
          prompt: "The fourth edition renamed two things this section relies on. Name both renames.",
          answer:
            "The righting reflex became the fixing reflex, and the four processes (engaging, focusing, evoking, planning) are now called the four tasks. Same substance, clearer names; cite the current vocabulary.",
        },
      ],
    },
    {
      slug: "mi-evidence",
      title: "13 · What the MI evidence actually shows",
      section: "Section 2 · Motivational interviewing",
      body: `MI is among the most-studied counseling styles in existence. Here is its evidence, sized honestly.

**Against usual care and advice-giving, MI wins consistently.** Rubak and colleagues' systematic review of 72 randomized trials found MI outperformed traditional advice in 74 percent of studies (53 of 72), with significant combined effects on body mass index, total cholesterol, systolic blood pressure, blood alcohol concentration, and standard ethanol content, and equal effectiveness across physiological and psychological problems. Notably for coaching formats: even brief 15-minute encounters showed an effect in 64 percent of studies, and effects were NOT significant for cigarettes per day or HbA1c, a reminder that MI is not uniform across behaviors (Rubak et al., 2005).

**In medical-care settings, the effect is real and modest.** Lundahl and colleagues' meta-analysis of 48 randomized trials with roughly 9,600 participants found an odds ratio of 1.55 (95 percent confidence interval 1.40 to 1.71), which translates to something like a 10 to 15 percent improvement over comparison conditions (Lundahl et al., 2013). Across the broader literature, average effects run small, around g of 0.2 against weak comparators.

**Against other ACTIVE treatments, the advantage mostly disappears.** Compared with structured alternatives like CBT-based programs or well-built education, MI's comparative effects are frequently nonsignificant. The honest synthesis: MI reliably beats doing what most practitioners do by default (advise, warn, prescribe), and it is not magic relative to other disciplined approaches.

**Does the change-talk machinery itself hold up?** MI's proposed causal chain, coach skills shape client language, client language shapes outcomes, has been meta-analyzed directly, and the result is worth knowing precisely because it is only PARTIAL support. Magill and colleagues pooled 12 process studies: MI-consistent coach skills did predict more client change talk (r = .26), and MI-INconsistent skills predicted more sustain talk. But change talk by itself did not predict follow-up outcomes (r = .06, nonsignificant), while sustain talk predicted WORSE outcomes (r = −.24); composite language measures showed a small positive relationship (Magill et al., 2014). Later subtype work found the categories are not equally meaningful either (Magill et al., 2019). The honest coaching translation cuts against the folklore version: the best-evidenced lever in the client-language data is not harvesting change talk, it is NOT feeding sustain talk, which is exactly why lesson 11 taught acknowledge-without-amplification and why the fixing reflex, which provokes sustain talk, costs more than it looks.

**What this means for a coach.** The value proposition is not that MI is the strongest tool ever tested; it is that MI is learnable, brief-compatible, spirit-aligned with coaching scope, and reliably better than the fixing reflex it replaces. That is worth mastering without overclaiming.

:::reveal Give the Rubak numbers a coach should carry: trials, hit rate, and the brief-encounter finding. ||| 72 randomized trials; MI showed an effect in 74 percent (53 of 72), outperforming traditional advice; and even brief 15-minute encounters showed an effect in 64 percent of studies. Effects were not significant for cigarettes per day or HbA1c.

:::reveal What happens to MI's advantage when the comparator is another active, structured treatment? ||| It mostly disappears; comparative effects are frequently nonsignificant. MI's honest claim is beating default advice-giving reliably, not beating every disciplined alternative.

:::reveal The technical-hypothesis meta-analysis found change talk did not predict outcomes, but sustain talk did. What does a coach do with that? ||| Stop treating change talk as a harvest and sustain talk as noise. The best-evidenced language lever is not amplifying sustain talk: acknowledge it without feeding it, and avoid the MI-inconsistent moves (arguing, confronting) that provoke it. Lesson 11's craft, evidenced.

## Vocabulary
- **Odds ratio (OR)**: the odds of a good outcome with the intervention divided by the odds without; Lundahl's 1.55 translates to roughly a 10 to 15 percent improvement over comparators.
- **Usual care**: the default the trial's control arm received, typically advice-giving; the comparator MI reliably beats.
- **Active comparator**: another structured, disciplined treatment in the control arm; against these, MI's advantage mostly disappears.
- **Treatment integrity**: trained practitioners plus fidelity coding: the delivery conditions MI's evidence base actually covers.
- **Technical hypothesis**: MI's proposed causal chain from coach skills through client language to outcomes; meta-analysis grants it partial support, with sustain talk the stronger outcome predictor.

## Sources
Lundahl, B., et al. (2013). Motivational interviewing in medical care settings: A systematic review and meta-analysis of randomized controlled trials. *Patient Education and Counseling, 93*(2), 157-168.

Magill, M., Gaume, J., Apodaca, T. R., Walthers, J., Mastroleo, N. R., Borsari, B., & Longabaugh, R. (2014). The technical hypothesis of motivational interviewing: A meta-analysis of MI's key causal model. *Journal of Consulting and Clinical Psychology, 82*(6), 973-983. https://pubmed.ncbi.nlm.nih.gov/24841862/

Magill, M., Bernstein, M. H., Hoadley, A., Borsari, B., Apodaca, T. R., Gaume, J., & Tonigan, J. S. (2019). Do what you say and say what you are going to do: A preliminary meta-analysis of client change and sustain talk subtypes in motivational interviewing. *Psychotherapy Research, 29*(7), 860-869. https://pubmed.ncbi.nlm.nih.gov/29954290/

Rubak, S., Sandbaek, A., Lauritzen, T., & Christensen, B. (2005). Motivational interviewing: A systematic review and meta-analysis. *British Journal of General Practice, 55*(513), 305-312. https://pmc.ncbi.nlm.nih.gov/articles/PMC1463134/`,
    },
    {
      slug: "quiz-motivational-interviewing",
      title: "14 · Knowledge check: motivational interviewing",
      section: "Section 2 · Motivational interviewing",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The fourth edition's spirit of MI comprises:",
            options: [
              "Partnership, acceptance, compassion, and empowerment",
              "Partnership, acceptance, compassion, and evocation",
              "Autonomy, competence, relatedness, and purpose",
              "Engagement, focus, evocation, and planning",
            ],
            correctIndex: 0,
            explanation:
              "The fourth edition retains partnership, acceptance, and compassion, and broadens evocation into empowerment: affirming the client's own strengths, motivations, resourcefulness, and autonomy. Autonomy-competence-relatedness is SDT's needs, and engaging-focusing-evoking-planning is the task list, not the spirit.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What does OARS stand for?",
            options: [
              "Open questions, Affirming, Reflecting, Summarizing",
              "Observe, Ask, Respond, Support",
              "Openness, Acceptance, Rapport, Structure",
              "Open questions, Advice, Reframing, Solutions",
            ],
            correctIndex: 0,
            explanation:
              "The four engaging skills: Open questions, Affirming, Reflecting, Summarizing. Advice and solutions are conspicuously absent; that absence is the method.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "The fixing reflex is:",
            options: [
              "The client's impulse to abandon newly formed plans at the first sign of stress or schedule disruption",
              "A required correction step after each reflection",
              "The helper's urge to supply solutions and argue for change on hearing a problem",
              "The fourth edition's name for relapse",
            ],
            correctIndex: 2,
            explanation:
              "The helper's urge to fix: supply the plan, correct, argue for change. Renamed from the righting reflex in the fourth edition. With ambivalent people it backfires by pushing them to voice the other side.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "Why does arguing for change often backfire with an ambivalent client?",
            options: [
              "Clients resent expertise on principle",
              "The client is left voicing the stay-the-same side, and people are persuaded by what they hear themselves say",
              "Arguments violate confidentiality norms",
              "It does not backfire; the persuasion evidence favors the practitioner voicing the strongest case for change early in the session",
            ],
            correctIndex: 1,
            explanation:
              "Ambivalence holds both sides. Take the change side out loud and the client defends the status quo, strengthening it in their own ears. MI's alternative is evoking the client's own change talk.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "A complex reflection differs from a simple one by:",
            options: [
              "Being longer and more detailed than the client's own statement, which signals deeper clinical engagement",
              "Ending with rising intonation to invite correction",
              "Quoting the client verbatim for accuracy",
              "Guessing at unspoken meaning: the feeling, value, or next sentence beneath the words",
            ],
            correctIndex: 3,
            explanation:
              "Simple reflections stay close to what was said; complex reflections venture what was meant. Reflections of both kinds end with the voice turning down: a statement to confirm or repair, not a question to defend against.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Which client statement is commitment-strength change talk?",
            options: [
              "'I could probably fit a walk in at lunch'",
              "'My doctor thinks I should move more'",
              "'I've started prepping lunches on Sundays'",
              "'Evenings are the only time I get to myself'",
            ],
            correctIndex: 2,
            explanation:
              "Taking-steps and commitment language ('I've started', 'I will') is the strongest change talk. 'Could' is ability talk, the doctor line is an external reason at best, and the evenings line is sustain talk.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "The four tasks of MI, in dependency order, are:",
            options: [
              "Assess, advise, agree, arrange",
              "Engaging, focusing, evoking, planning",
              "Precontemplation, contemplation, action, maintenance",
              "Open, affirm, reflect, summarize",
            ],
            correctIndex: 1,
            explanation:
              "Engaging, focusing, evoking, planning: the fourth edition's simplified rename of the four processes. Assess-advise-agree-arrange is a different consultation model, precontemplation-to-maintenance is TTM's stages, and open-affirm-reflect-summarize is OARS.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "The commonest MI failure mode named in this course is:",
            options: [
              "Reflecting too often instead of asking questions",
              "Spending too long on engagement",
              "Planning while the client is still ambivalent",
              "Letting the client set the session agenda",
            ],
            correctIndex: 2,
            explanation:
              "Leaping to how before the client's why has been evoked is the fixing reflex wearing an MI badge. High reflection ratios and client-held agendas are features of the method, not failures.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "Rubak et al. (2005) found MI outperformed traditional advice in what share of 72 trials?",
            options: [
              "Roughly one quarter",
              "74 percent, including effects in 64 percent of brief 15-minute-encounter studies",
              "Every trial included",
              "Only in the subset of trials whose interventions ran longer than a year with repeated encounters",
            ],
            correctIndex: 1,
            explanation:
              "53 of 72 trials (74 percent) showed an effect, with significant combined effects on BMI, cholesterol, systolic BP, and alcohol measures, and brief encounters worked in 64 percent. Cigarettes per day and HbA1c were not significant.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "Lundahl et al.'s medical-care meta-analysis (48 RCTs) reported:",
            options: [
              "An odds ratio of 1.55 favoring MI, roughly a 10 to 15 percent improvement over comparators",
              "No measurable effect of MI in medical settings",
              "A large effect, d = 0.85",
              "Significant effects only when MI was delivered by physicians rather than nurses or allied staff",
            ],
            correctIndex: 0,
            explanation:
              "OR 1.55 (95 percent CI 1.40 to 1.71) across about 9,600 participants: a real, modest advantage. The attribution matters: this number belongs to Lundahl 2013, a correction this program's verification made to its own research exports.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "Against other active, structured treatments, MI's comparative advantage is:",
            options: [
              "Consistently large",
              "Frequently nonsignificant; MI's reliable win is over default advice-giving",
              "Negative; MI reliably underperforms structured alternatives such as CBT-based programs",
              "Untested in the literature",
            ],
            correctIndex: 1,
            explanation:
              "The honest synthesis: MI reliably beats the fixing-reflex default (advise, warn, prescribe) and shows little or no advantage over other disciplined approaches. Worth mastering, without overclaiming.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What makes a collecting summary strategic?",
            options: [
              "It proves to the client that the coach was listening closely through the whole session",
              "It selects and gathers the client's change talk, strengthening what it includes",
              "It ends the session on schedule",
              "It documents the session for compliance purposes",
            ],
            correctIndex: 1,
            explanation:
              "Selection is the instrument: gathering scattered change talk into one reflected bouquet strengthens it, while what is omitted rests. The spirit governs the selection, which is why spirit was taught first.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "goal-setting",
      title: "15 · Goal setting: what Locke and Latham actually established",
      section: "Section 3 · Plans that fire",
      body: `Goal-setting theory is one of psychology's most replicated bodies of work, built by Locke and Latham across roughly four decades and hundreds of studies. Its core finding: **specific, challenging goals produce higher performance than vague or easy ones**, provided the person accepts the goal and gets feedback on progress. The mechanisms are mundane and powerful: specific challenging goals direct attention, mobilize effort, lengthen persistence, and push people to find or invent strategies (Locke & Latham, 2002).

**The conditions matter as much as the finding.** The effect assumes commitment to the goal (which autonomy support builds; lesson 3), the ability to attain it (competence, again), and feedback (progress made visible). Strip any of these and specificity alone will not save the goal. And most of this evidence comes from organizational and laboratory tasks; health-behavior applications adopt the principles and mostly test them inside multi-component interventions.

**Learning goals versus performance goals.** One refinement with coaching value: when the person lacks the strategy, a LEARNING goal ("find three ways to make mornings workable and test them") outperforms a performance goal ("be up at six every day"), because performance goals presume the how already exists.

**About SMART.** The acronym is a training convention, not a tested construct: its letters roughly align with the evidence (specific, measurable, feedback-compatible), but no study validated "SMART" as a package, and this program will not pretend one did. Use it as a checklist mnemonic if it helps; cite Locke and Latham, not the acronym.

**Where goals hand off.** A well-set goal states the destination. It says nothing about what fires at 6 a.m. when the alarm argues otherwise. That gap between intention and action is exactly what the next three lessons close.

:::reveal State the core Locke-and-Latham finding with its three conditions. ||| Specific, challenging goals outperform vague or easy ones, provided the person is committed to the goal, capable of attaining it, and receiving feedback on progress. Remove a condition and specificity alone does not rescue the goal.

:::reveal When does a learning goal beat a performance goal? ||| When the strategy does not exist yet. 'Find and test three ways to make mornings workable' outperforms 'be up at six daily' for someone who has not solved the how, because performance goals presume an existing strategy.

## Vocabulary
- **Goal-setting theory**: Locke and Latham's replicated finding that specific, challenging goals beat vague or easy ones, given commitment, capability, and feedback.
- **Performance goal**: a goal stating the outcome to hit ("up at six daily"); presumes the strategy already exists.
- **Learning goal**: a goal to find and test strategies ("three ways to make mornings workable"); outperforms performance goals when the how is unsolved.
- **SMART**: a training mnemonic roughly aligned with the evidence, never itself validated as a package; use the checklist, cite the theory.

## Sources
Locke, E. A., & Latham, G. P. (2002). Building a practically useful theory of goal setting and task motivation: A 35-year odyssey. *American Psychologist, 57*(9), 705-717. https://pubmed.ncbi.nlm.nih.gov/12237980/`,
    },
    {
      slug: "implementation-intentions",
      title: "16 · Implementation intentions: the if-then plan",
      section: "Section 3 · Plans that fire",
      body: `An implementation intention is a plan with the format: **"If situation X arises, then I will do Y."** Not "I'll walk more" but "If it's a workday lunch hour, then I walk the river loop before eating." The form was introduced by Gollwitzer, and it is the single best-evidenced self-regulation technique in this course.

**The evidence, two generations of it.** Gollwitzer and Sheeran's 2006 meta-analysis across 94 tests found that forming an implementation intention improved goal attainment by around d of 0.65, a medium-to-large effect over and above simply holding the goal (Gollwitzer & Sheeran, 2006). The 2024 update by Sheeran, Listrom, and Gollwitzer, spanning **642 tests**, found a sample-weighted average of d = 0.36 (95 percent confidence interval 0.33 to 0.40), smaller with the larger literature but extraordinarily well replicated, and it identified the moderators that matter: effects are larger when the plan keeps a genuinely contingent if-then format, when motivation for the underlying goal is high, and when the plan is rehearsed (Sheeran et al., 2024).

**Why it works.** The if-then format delegates control of the behavior to the situation. The cue becomes mentally primed, and the cue-response link strengthens until encountering X triggers Y with little deliberation, exactly the machinery habit formation runs on, recruited on purpose.

**Craft rules from the moderators.** Keep the contingent format: a real if and a real then, concrete enough that a stranger could verify both. Plan for obstacles, not just opportunities ("If it's raining at lunch, then I do the stairwell circuit"). Rehearse the plan aloud or in writing. And remember the boundary condition the literature is clear about: implementation intentions amplify existing motivation; they do not create it. A plan bolted to a goal the client does not own is machinery without fuel, which is why the evoking task precedes the planning task.

:::reveal Give both meta-analytic effect sizes for implementation intentions and why they differ. ||| d around 0.65 across 94 tests (Gollwitzer & Sheeran, 2006) and d = 0.36 across 642 tests (Sheeran, Listrom & Gollwitzer, 2024). The larger literature includes more domains and conditions, shrinking the average while making it one of the best-replicated effects in behavior change.

:::reveal What three moderators make an if-then plan stronger? ||| A genuinely contingent if-then format, high motivation for the underlying goal, and rehearsal of the plan. The technique amplifies motivation it is given; it does not manufacture any.

## Vocabulary
- **Implementation intention**: a plan in the form "If situation X arises, then I will do Y"; the best-evidenced single self-regulation technique in this course.
- **Contingency**: the genuine if-then linkage between a concrete situation and a verifiable action; the format's active ingredient and first moderator.
- **Moderator**: a condition that changes an effect's size; for if-then plans: contingent format, motivation for the goal, and rehearsal.
- **Cue priming**: the mental mechanism: the specified situation becomes highly accessible, and the cue-response link fires with little deliberation.

## Sources
Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology, 38*, 69-119.

Sheeran, P., Listrom, O., & Gollwitzer, P. M. (2024). The when and how of planning: Meta-analysis of the scope and components of implementation intentions in 642 tests. *European Review of Social Psychology*. https://doi.org/10.1080/10463283.2024.2334563`,
      recallContent: [
        {
          prompt: "Rewrite 'I'll eat better this month' as a proper implementation intention, then say what makes it proper.",
          answer:
            "Example: 'If I'm making the kids' lunches, then I assemble mine at the same time.' Proper because both the if (a concrete recurring situation) and the then (a specific verifiable action) are real, contingent, and rehearsable.",
        },
      ],
    },
    {
      slug: "mental-contrasting",
      title: "17 · Mental contrasting: the future, then the obstacle",
      section: "Section 3 · Plans that fire",
      body: `Lesson 5 left a question open: if idealized fantasies sedate, what should imagining do instead? Oettingen's answer, built over two decades of research, is **mental contrasting**: first vividly imagine the desired future, THEN identify and imagine the inner obstacle standing between you and it, in that order (Oettingen, 2014).

**Why the order matters.** Fantasy first creates the pull; the obstacle immediately after connects the pull to reality. In Oettingen's account the magic is in the mental elaboration, the free-associated imagery of outcome and obstacle, not in merely naming a couple of words. Done in sequence, the obstacle becomes a cue that activates the goal rather than a discouragement, and expectations of success take command: people with high expectations engage harder, and people with genuinely low expectations disengage and redirect, which she counts as a feature. An honest tool helps you quit unwinnable wishes.

**The energization evidence.** Her lab measured energization physiologically, using systolic blood pressure, building on established work linking it to mobilized effort. Idealized fantasy alone dampened it; contrasting restored it in proportion to expectations of success. In one early study she followed twenty-five obese women through a weight-loss program after measuring their fantasies about success: the more idealized and positive the imagined outcomes, the WORSE the results down the line, one of the founding observations of the whole program (Oettingen, 2014).

**Obstacle means inner obstacle.** The instruction is precise: the obstacle that is yours, the habit, emotion, or belief in the way, not the external circumstances you cannot rehearse a response to. "My evening exhaustion and the story that I've earned the couch" is workable; "my job is demanding" is weather.

Mental contrasting alone is useful. Bolted to an if-then plan it becomes WOOP, the next lesson, and the bridge into a tool you already teach.

:::reveal Why must the fantasy come BEFORE the obstacle in mental contrasting? ||| The imagined future creates the pull; the obstacle straight after binds that pull to reality, turning the obstacle into a cue that activates the goal. Reversed or done alone, you get either weather-report pessimism or the sedating fantasy the energization data warns about.

:::reveal What did Oettingen find in the weight-loss-program study, and what founding lesson did it teach? ||| Among women in a weight-loss program, more idealized positive fantasies about success predicted worse outcomes. Founding lesson: positive imagining alone is not motivation; it can substitute for it.

## Vocabulary
- **Mental contrasting**: imagining the desired future vividly, THEN the inner obstacle in its way, in that order; the sequence that turns imagining into fuel.
- **Inner obstacle**: the habit, emotion, or belief of YOURS standing between you and the wish; the only kind of obstacle the method works on.
- **Expectations of success**: the person's judgment of whether the wish is attainable; contrasting mobilizes in proportion to it.
- **Adaptive disengagement**: the feature, not bug, of honest contrasting: genuinely low expectations lead to letting go of unwinnable wishes and redirecting.

## Sources
Oettingen, G. (2014). *Rethinking positive thinking: Inside the new science of motivation*. Penguin Random House.`,
    },
    {
      slug: "woop-in-practice",
      title: "18 · WOOP in practice",
      section: "Section 3 · Plans that fire",
      body: `WOOP is Oettingen's four-step packaging of mental contrasting plus implementation intentions, and the letters are the procedure: **Wish, Outcome, Obstacle, Plan** (Oettingen, 2014).

**Wish:** name a wish that matters and is challenging but feasible. **Outcome:** imagine the best result of fulfilling it, vividly, letting the imagery elaborate. **Obstacle:** find the inner obstacle, YOUR habit, emotion, or belief in the way, and imagine it just as vividly. **Plan:** form the if-then: "If [obstacle shows up], then I will [effective action]."

You already teach this. This platform ships a full course on the science of WOOP, and this program deliberately does not re-teach what it covers; go there for the deep treatment and the practice reps. What THIS lesson adds is the coaching integration:

**WOOP as a coaching instrument.** It slots exactly into MI's planning task: the client authors every element, the coach facilitates the sequence and keeps the obstacle INNER and the plan CONTINGENT. The commonest client errors are outer obstacles ("my schedule") and vague plans ("I'll try harder"); the coach's craft is returning them gently to form: "what is it in you that the schedule wins against?"

**WOOP as a diagnosis.** Oettingen notes that working the obstacle step sometimes dissolves the wish itself: the client discovers the real wish underneath ("lose twenty pounds" turns out to be "stop feeling alone"). That is not the tool failing; that is the tool working. In MI language, WOOP can drop a session back from planning into evoking, and the coach should follow it there.

**The evidence status, honestly.** Mental contrasting with implementation intentions has randomized-trial support in health contexts, including long-term physical-activity and weight outcomes, and the base is smaller than the enormous implementation-intentions literature, with possible publication bias noted in the exports this program verified. Teach it as a well-grounded, promising protocol built on the strongest planning evidence there is, not as proven-at-scale.

:::reveal What are the two commonest client errors in WOOP, and the coach's correction for each? ||| Outer obstacles ('my schedule') and vague plans ('try harder'). Corrections: return the obstacle inward ('what in you does the schedule win against?') and return the plan to contingent if-then form with a verifiable action.

:::reveal A client's obstacle step dissolves their stated wish and reveals a different one underneath. What happened, in MI terms? ||| The tool worked: WOOP surfaced the real wish. The session just moved from planning back to evoking, and the coach follows it there rather than defending the old plan.

## Vocabulary
- **WOOP**: Wish, Outcome, Obstacle, Plan: Oettingen's four-step packaging of mental contrasting plus an implementation intention.
- **MCII**: mental contrasting with implementation intentions, WOOP's name in the research literature.
- **Publication bias**: the tendency of positive results to get published more than nulls, which can inflate a young literature's apparent effects; noted honestly for MCII.

## Sources
Oettingen, G. (2014). *Rethinking positive thinking: Inside the new science of motivation*. Penguin Random House.`,
    },
    {
      slug: "habit-design",
      title: "19 · Habit design: engineering the repetition",
      section: "Section 3 · Plans that fire",
      body: `Section 1 gave you the science of habit formation; this lesson turns it into design rules a coach can apply in one session.

**Rule 1: one behavior, exactly specified.** Lally's participants built automaticity on a single, concretely defined daily behavior. "Move more" cannot become automatic; "walk the river loop after lunch" can (Lally et al., 2010).

**Rule 2: anchor to a stable, existing cue.** The context does the remembering. The strongest anchors are events that already happen daily without fail: after I park, after breakfast, when the kids' lunches are made. This is an implementation intention wearing work clothes, and the two literatures are explicit relatives: the if-then plan installs the cue-response link that repetition then automates.

**Rule 3: protect consistency over intensity.** The curve grows on repetitions in a stable context. A five-minute version done daily beats a forty-five-minute version done when life allows. Coach clients to define the MINIMUM version that still counts, for days when everything goes sideways.

**Rule 4: pre-negotiate the miss.** One missed day is statistically immaterial; the abandonment reflex after a miss is the killer. The client should be able to recite their own rule: resume at the next cue, no restarting, no repenting.

**Rule 5: set the horizon honestly.** Median 66 days to near-automaticity, and a range from 18 to 254. Tell clients the range, not a promise. Complex or unpleasant behaviors sit later on that curve, and knowing that in advance converts "this is taking too long, I'm broken" into "this is on schedule."

**Two more levers, from the pooled data.** The 2024 review of habit-formation studies adds two moderators a coach can actually use: habits practiced in the MORNING developed faster than evening ones, and SELF-SELECTED behaviors built more strength than assigned ones (Singh et al., 2024). The second is lesson 3 wearing lab clothes: autonomy is not a nicety, it is a formation-speed variable. Offer the menu, let the client pick the behavior, and when the schedule allows it, bias new habits toward the front of the day.

**What to watch as a coach.** The early sign of forming automaticity is the client reporting the behavior feels strange to SKIP. That reversal, effort migrating from doing to not-doing, is the curve flattening, and it is worth naming to the client as the milestone it is.

:::reveal Why does a five-minute daily version beat a forty-five-minute occasional version, mechanistically? ||| Automaticity grows on repetitions in a stable context; frequency and consistency drive the curve, not intensity. The minimum-that-counts version keeps repetitions accruing on sideways days.

:::reveal What early report from a client signals real automaticity forming? ||| The behavior feels strange to skip. Effort has migrated from doing the behavior to not doing it, which is the automaticity curve flattening, and worth naming as a milestone.

## Vocabulary
- **Anchor**: the stable, already-daily event a habit is tied to; the strongest anchors happen without fail, like parking at work or finishing breakfast.
- **Minimum that counts**: the pre-defined smallest version of the behavior that still counts as done, protecting consistency on sideways days.
- **Miss rule**: the pre-negotiated response to a missed day: resume at the next cue, no restarting, no repenting.
- **Strange-to-skip milestone**: the early sign of automaticity: effort migrating from doing the behavior to NOT doing it.

## Sources
Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology, 40*(6), 998-1009. https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674

Singh, B., Murphy, A., Maher, C., & Smith, A. E. (2024). Time to form a habit: A systematic review and meta-analysis of health behaviour habit formation and its determinants. *Healthcare, 12*(23), 2488. https://pmc.ncbi.nlm.nih.gov/articles/PMC11641623/`,
      recallContent: [
        {
          prompt: "Recite the five habit-design rules in shorthand.",
          answer:
            "One exact behavior; anchor to a stable existing cue; consistency over intensity (define the minimum that counts); pre-negotiate the miss (resume at next cue); set the horizon honestly (median 66 days, range 18 to 254).",
        },
      ],
    },
    {
      slug: "maintenance-and-relapse",
      title: "20 · Maintenance, relapse, and the long game",
      section: "Section 3 · Plans that fire",
      body: `Most coaching literature is about starting. The centenarian frame cares mostly about continuing, so this lesson is about the two seasons after the start.

**Maintenance is its own phase with its own physics.** TTM was right about this much: the conversation that starts a behavior is not the conversation that keeps it (Prochaska & Velicer, 1997). Novelty and early wins fade; identity and environment carry what remains. The maintenance questions are different questions: what nearly knocked this over this month? Which cue drifted? What does the minimum-that-counts version look like during travel, illness, a newborn, a deadline season?

**Relapse is data, not verdict.** In the stages model, relapse and recycling through earlier stages is an expected part of change, not an exit from it. The coaching craft is running the honest post-mortem without the morality play: what was the situation? Which obstacle showed up that the plan did not cover? That analysis feeds straight back into the tools you now hold: a revised WOOP obstacle, a new if-then for the uncovered situation, a re-anchored cue if the old one dissolved (a schedule change is the classic silent killer of habits, because it deletes cues without telling anyone).

**The collapse after a lapse has a name.** Dieting research calls it the what-the-hell effect: in Herman and Mack's classic experiments, restrained eaters who believed they had already blown their limit with a milkshake preload ate MORE afterward, not less, while unrestrained eaters compensated normally (Herman & Mack, 1975). The mechanism is all-or-nothing framing: once the day feels ruined, the rules feel suspended. It is the same reflex the miss rule pre-negotiates, and it is why this program treats strict streak-counting warily: a streak converts one miss into ruin by design. Popular recovery heuristics like the two-day rule, one miss is data, two consecutive misses trigger a plan review, are CONSISTENT with Lally's missed-day finding, but they are coaching convention rather than tested protocol, and a program that flags lore in lesson 5 owes you that label here too.

**The review cadence.** What gets reviewed persists. A monthly self-review, wins, near-misses, one plan revision, is itself a habit to design by the rules of lesson 19, and for self-coaching it is the single highest-leverage structure in this program: it converts every failure into curriculum.

**The honest long-term evidence.** Follow-up reviews of health-coaching trials suggest roughly half to three-quarters show at least partial maintenance of gains at six months or beyond, with many studies underpowered; maintenance is real and it is not automatic. Build the review structure like it matters, because it is what stands between a good quarter and a changed life.

:::reveal Why is a schedule change called the silent killer of habits, and what is the fix? ||| It deletes the cues a habit was anchored to without announcing it; the behavior does not fail, its trigger vanishes. The fix is re-anchoring: choose a new stable cue in the new schedule and rebuild the link deliberately.

:::reveal What makes a relapse post-mortem coaching rather than moralizing? ||| It analyzes situation and obstacle, not character: what happened, which obstacle the plan did not cover, what revision follows. The output is a new plan element, not a verdict about willpower.

:::reveal What is the what-the-hell effect, and which habit-design rule already counters it? ||| The all-or-nothing collapse after a perceived lapse: in Herman and Mack's preload experiments, restrained eaters who believed they had blown their limit ate more, not less. The miss rule counters it: one miss is pre-negotiated as noise, resumed at the next cue.

## Vocabulary
- **Maintenance**: the phase after starting, with its own physics: identity and environment carry what novelty started; its questions differ from the starting questions.
- **Relapse**: return of the old pattern; in the stages model an expected part of change to be analyzed, not a verdict to be pronounced.
- **Recycling**: TTM's term for looping back through earlier stages on the way to durable change.
- **What-the-hell effect**: the all-or-nothing collapse after a perceived lapse, named in dieting research; the miss rule exists to defuse it.
- **Cue drift**: the quiet loss of a habit's anchoring cue, classically via a schedule change; fixed by deliberate re-anchoring.
- **Review cadence**: the recurring self-review of wins, near-misses, and one revision; what gets reviewed persists.

## Sources
Herman, C. P., & Mack, D. (1975). Restrained and unrestrained eating. *Journal of Personality, 43*(4), 647-660.

Prochaska, J. O., & Velicer, W. F. (1997). The transtheoretical model of health behavior change. *American Journal of Health Promotion, 12*(1), 38-48. https://pubmed.ncbi.nlm.nih.gov/10170434/`,
    },
    {
      slug: "quiz-plans-that-fire",
      title: "21 · Knowledge check: plans that fire",
      section: "Section 3 · Plans that fire",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Locke and Latham's core, replicated finding is that performance improves with:",
            options: [
              "Specific, challenging goals, given commitment, capability, and feedback",
              "Easy early goals that build confidence",
              "Publicly announced goals, regardless of their content, because social accountability carries the whole effect",
              "Vague directional goals that reduce pressure",
            ],
            correctIndex: 0,
            explanation:
              "Specific, challenging goals beat vague or easy ones through attention, effort, persistence, and strategy, conditional on goal commitment, attainability, and feedback. Strip a condition and specificity alone does not save the goal.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "What is the honest status of the SMART acronym?",
            options: [
              "A construct Locke and Latham validated directly, as a package, in their organizational goal-setting trials",
              "A training convention roughly aligned with the evidence, never itself tested as a package",
              "A legal requirement for coaching contracts",
              "A construct the evidence has refuted outright",
            ],
            correctIndex: 1,
            explanation:
              "SMART's letters roughly track the evidence (specificity, measurability, feedback), but no study validated the acronym as a package. Use it as a mnemonic; cite the theory, not the acronym.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "The 2024 meta-analysis of implementation intentions (642 tests) found:",
            options: [
              "d = 0.36, with contingent format, motivation, and rehearsal as moderators",
              "d = 0.65, larger than the 2006 estimate",
              "No reliable effect remaining once publication bias across the 642 tests was statistically modeled",
              "Effects only in laboratory tasks",
            ],
            correctIndex: 0,
            explanation:
              "Sheeran, Listrom, and Gollwitzer: sample-weighted d = 0.36 (CI 0.33 to 0.40) across 642 tests, one of the best-replicated effects in behavior change, strongest with a real if-then format, high motivation, and rehearsal. The 2006 estimate (d about 0.65) came from 94 tests.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Why does an implementation intention work, mechanistically?",
            options: [
              "It increases deliberation at the moment of action",
              "It creates public accountability pressure once the plan has been spoken aloud or written where other people can see it",
              "It raises the underlying goal's importance",
              "It delegates control to the situation: the cue primes and triggers the response with little deliberation",
            ],
            correctIndex: 3,
            explanation:
              "The if-then format hands action control to the specified cue; the cue-response link strengthens until X triggers Y nearly automatically. It is habit machinery recruited on purpose, the opposite of added deliberation.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "In mental contrasting, the required order is:",
            options: [
              "Obstacle first, to establish realism, then the desired future",
              "Desired future first, then the inner obstacle",
              "Plan first, then future, then obstacle",
              "Order does not matter if both elements appear",
            ],
            correctIndex: 1,
            explanation:
              "Fantasy first creates the pull; the obstacle immediately after binds it to reality and becomes a goal-activating cue. Oettingen's work treats the sequence and the elaborated imagery as where the effect lives.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "In WOOP, the obstacle must be:",
            options: [
              "The largest external barrier in the client's life, named precisely enough to plan a response around",
              "A hypothetical worst-case scenario",
              "An inner obstacle: the client's own habit, emotion, or belief in the way",
              "Assigned by the coach based on observed patterns",
            ],
            correctIndex: 2,
            explanation:
              "The obstacle is YOURS: inner, specific, and rehearsable. External circumstances are weather; the client cannot form an if-then response to 'the economy'. The coach's craft is returning outer obstacles inward.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "Which habit-design rule addresses days when everything goes sideways?",
            options: [
              "Anchor to a stable cue",
              "Define the minimum version that still counts, protecting consistency over intensity",
              "Set the automaticity horizon honestly, so a sideways week reads as on-schedule rather than as personal failure",
              "One behavior, exactly specified",
            ],
            correctIndex: 1,
            explanation:
              "The minimum-that-counts version keeps repetitions accruing when the full version is impossible, protecting the consistency the automaticity curve grows on. The other rules are real but answer different failure modes.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "A client relapses after a schedule change. The most likely mechanical cause taught here is:",
            options: [
              "Willpower depletion, because the new schedule consumes the self-control the habit had been drawing on",
              "The habit's cues were deleted by the schedule change, so the trigger vanished",
              "The goal was insufficiently challenging",
              "The client's stage regressed to precontemplation",
            ],
            correctIndex: 1,
            explanation:
              "Schedule changes silently delete anchoring cues; the behavior does not fail so much as lose its trigger. The fix is deliberate re-anchoring to a stable cue in the new schedule, plus an if-then for the transition.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "The energization finding behind mental contrasting is:",
            options: [
              "Idealized fantasy alone dampened systolic-blood-pressure energization; contrasting restored it in line with expectations",
              "All imagery raises energization equally",
              "Obstacle-focus alone maximizes energization, because confronting difficulty mobilizes effort without the distraction of imagined success",
              "Energization cannot be measured physiologically",
            ],
            correctIndex: 0,
            explanation:
              "Oettingen measured energization via systolic blood pressure, building on established work: fantasy alone sedated; contrasting mobilized in proportion to success expectations, including adaptive disengagement when expectations were genuinely low.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "How should a coach represent MCII/WOOP's evidence status?",
            options: [
              "Already proven at the same scale as the implementation-intentions literature, with hundreds of tests across health domains behind it",
              "Well-grounded and promising, with RCT support in health contexts and a smaller base than implementation intentions alone",
              "Anecdotal only",
              "Refuted by the 2024 meta-analysis",
            ],
            correctIndex: 1,
            explanation:
              "MCII has randomized support including long-term activity and weight outcomes, sits on the very strong implementation-intentions foundation, and has a smaller literature with possible publication bias. Promising and honest is the pitch.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "What is the single highest-leverage maintenance structure this course prescribes for self-coaching?",
            options: [
              "Daily morning weigh-ins recorded in a log the client shares publicly, converting accountability pressure into adherence",
              "Quarterly program restarts to renew novelty",
              "A monthly self-review of wins, near-misses, and one plan revision, itself designed as a habit",
              "Doubling goal difficulty each month",
            ],
            correctIndex: 2,
            explanation:
              "What gets reviewed persists: the monthly review converts failures into curriculum and feeds revisions back into WOOP obstacles, if-then plans, and cue re-anchoring. It is a habit, so design it by the habit rules.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "session-structure",
      title: "22 · The coaching session, structured",
      section: "Section 4 · The session",
      body: `The NBHWC content outline, the closest thing this field has to a published anatomy of the craft, structures coaching the way this lesson does: preparation before the session, a deliberate opening, focused work, and closure with commitments, all inside the scope and ethics rails from WELL-00 (National Board for Health & Wellness Coaching, 2022).

**Before the session.** The outline's first competencies are unglamorous and load-bearing: review materials, eliminate distractions, become mindful and present. The coach's calm state helps the client become calm and receptive, which fosters the self-awareness the whole method depends on. Preparation is a craft behavior, not a virtue.

**Opening: agenda with the client's pen.** Early-session competencies center on exploring the client's values, vision, purpose, and priorities, and returning to them in later sessions to elicit motivation. Practically: a brief check-in on the previous session's commitments, then the focusing task from lesson 12: "of everything on your plate, what would make today worth it?" The client picks; the coach may offer a menu, never a syllabus.

**The middle: one loop, done well.** A workable session usually completes one honest loop: evoke (why this, why now, change talk elaborated), then plan (a goal made specific, an if-then or WOOP made contingent, a habit anchor chosen). Session logistics the outline names, expectations, responsibilities, time management, sound bureaucratic until they are missing.

**Closing: commitment in the client's words.** The client states what they are taking, in their own words, with its when and its minimum version. A collecting summary (lesson 11) hands them their own change talk on the way out. Then the coach's notes: what was committed, which obstacle the plan covers, and what to check on at the next opening.

**Cadence.** Review structures from lesson 20 apply across sessions: the opening check-in IS the review cadence, which is why skipping it to save time costs exactly the thing the program is for.

:::reveal What does the NBHWC outline put BEFORE the session, and why does it count as craft? ||| Review materials, eliminate distractions, become mindful and present. The coach's state transfers: a calm, present coach helps the client become calm and receptive, which the method's self-awareness work depends on. It is specified as competency, not left as virtue.

:::reveal What single loop should a session complete, and from which lessons does it borrow? ||| Evoke then plan: elaborate the client's own why (change talk, lesson 11), then make one commitment specific and contingent (goal, if-then or WOOP, habit anchor; lessons 15 to 19), closed with the client stating it in their own words.

## Vocabulary
- **Session anatomy**: preparation, opening, one working loop, closing with commitment: the structure the NBHWC outline specifies as competencies.
- **Agenda menu**: the focusing offer: options presented for the client to choose from, never a syllabus imposed on them.
- **One-loop session**: the working standard here: one honest evoke-then-plan cycle done well beats three rushed ones.
- **Closing commitment**: the client stating what they are taking, in their own words, with its when and its minimum version.

## Sources
National Board for Health & Wellness Coaching. (2022). *Content outline*. https://www.nbme.org/wp-content/uploads/2022/05/NBHWC_Content_Outline-2ca.pdf`,
    },
    {
      slug: "need-supportive-language",
      title: "23 · Need-supportive language: SDT applied line by line",
      section: "Section 4 · The session",
      body: `Lesson 3 gave the theory; this lesson gives the sentences. Every line a coach says either supports or thwarts the three needs, and the differences are learnable.

**Autonomy-supportive language** offers choice, rationale, and acknowledgment of the client's perspective. "You could anchor it to the school run or to lunch; which fits how your days actually go?" versus the controlling version: "You need to do this in the morning." Watch for the quiet controllers: "should," "have to," "just," and rhetorical questions with one right answer. The SDT intervention literature's effects ride on autonomous motivation, and autonomy support is where autonomous motivation comes from (Ntoumanis et al., 2020).

**Competence-supportive language** right-sizes and evidences. It sets challenges at the edge of current ability (lesson 15's learning goals when strategy is missing), and it reflects progress as evidence about the person: "Three weeks of the minimum version through a work crunch; that's the consistency the curve is built on." Note the overlap with complex affirmations from lesson 9; the skills converge because the needs do.

**Relatedness-supportive language** is mostly presence: accurate reflections, non-contingent regard, and honesty over cheerleading. Clients detect performed warmth, and its detection costs more than its absence.

**The audit.** Record a session (with consent) or a self-coaching session, and mark each coach line A, C, or R when it supports a need, and X when it controls, judges, or rescues. The X-lines cluster where the fixing reflex lives: right after the client discloses a struggle. That is the minute to rehearse, and an if-then works on coaches too: "If a client shares a failure, then my first sentence is a reflection."

:::reveal Rewrite the controlling line 'You need to stop skipping breakfast' in autonomy-supportive form. ||| Example: 'Mornings keep coming up. Some people anchor eating to an existing routine, some shift calories later in the day; is either worth an experiment, or is something else the real lever here?' Choice, rationale, and the client's perspective, instead of a prescription.

:::reveal Where do controlling X-lines statistically cluster in a session, and what is the coach's counter-plan? ||| Right after a client discloses a struggle, where the fixing reflex fires. The counter is an if-then on the coach: if a client shares a failure, then my first sentence is a reflection.

## Vocabulary
- **Autonomy-supportive language**: choice, rationale, and acknowledgment of the client's perspective, offered in place of prescriptions.
- **Controlling language**: prescriptions, pressure, and judgment; shifts motivation from autonomous toward controlled forms the maintenance data does not favor.
- **Quiet controllers**: 'should', 'have to', 'just', and rhetorical questions with one right answer: commands wearing conversational clothes.
- **Non-contingent regard**: warmth that does not depend on the client's performance; the relatedness need's daily fuel.
- **X-line audit**: reviewing a recorded session line by line, marking need-supporting lines A, C, or R and controlling or rescuing lines X.

## Sources
Ntoumanis, N., et al. (2020). A meta-analysis of self-determination theory-informed intervention studies in the health domain. *Health Psychology Review, 15*(2), 214-244. https://pubmed.ncbi.nlm.nih.gov/31983293/`,
      recallContent: [
        {
          prompt: "Name the four quiet controllers to strip from coaching language.",
          answer:
            "'Should', 'have to', 'just', and rhetorical questions with one right answer. Each converts a choice into a command and shifts motivation from autonomous toward controlled.",
        },
      ],
    },
    {
      slug: "coaching-outcomes-honest",
      title: "24 · What coaching can honestly claim",
      section: "Section 4 · The session",
      body: `The last content lesson of this course is the one a marketer would cut: what the coaching-outcome evidence permits you to say.

**What holds up.** Health and wellness coaching, in randomized trials against real comparators, improves quality of life in the short term (SMD 0.62 within three months), self-efficacy (SMD 0.38), and depression outcomes out to a year (SMD 0.41 to 0.72), across thirty trials in chronic-illness care (Boehmer et al., 2023). In cardiovascular-risk populations, coaching blends built on MI improve physical activity, diet, and stress-management behaviors. Component techniques carry their own replicated bases from the earlier sections: MI, implementation intentions, need support, habit protocols. And on a hard clinical marker: across twenty randomized trials in type 2 diabetes (3,222 participants), health coaching lowered HbA1c with a small effect (g = 0.29, confidence interval 0.18 to 0.40), with a clinically significant drop of at least 5 mmol/mol in eight of the twenty studies (Almulhim et al., 2023).

**More techniques is not more effect.** The same diabetes review coded every intervention against the behavior-change-technique taxonomy: trials used a mean of 4.5 distinct techniques, goal setting and problem solving most often, and the NUMBER of techniques used was unrelated to effectiveness. Sharper still: two techniques, the non-contingent ones, "credible source" (leaning on authority) and "social reward" (praise), were associated with SMALLER HbA1c reductions (Almulhim et al., 2023). That is lesson 9's praise-versus-affirmation distinction and lesson 23's autonomy support showing up in glycated hemoglobin, and it is the evidence answer to the stack-more-tools instinct: do a few contingent things well.

**What the same evidence forbids claiming.** Anxiety outcomes: null in the meta-analysis. Certainty: mostly low or very low, on heterogeneity and bias risk. Persistence past twelve months: not well established. Effect sizes: small to moderate, never transformative-on-average. And because trials blend techniques, the field genuinely cannot say which component carries how much of the freight.

**The honest pitch, then.** Coaching reliably beats no help and beats default advice-giving; its effects are modest, real, and compound with time and structure; and its strongest tools are exactly the ones this course drilled. For the centenarian journey that is enough: a d of 0.3 applied to sleep, movement, and connection, held for decades by maintenance structures, is a different life. That claim needs no inflation.

**A closing discipline.** You will meet products and certifications claiming coaching "transforms" outcomes. You now know the actual numbers. The professional move is neither cynicism nor evangelism; it is carrying the effect sizes in your pocket and building programs whose promises match them.

:::reveal List three claims the Boehmer meta-analysis SUPPORTS and three it FORBIDS. ||| Supports: short-term quality-of-life gains (SMD 0.62), self-efficacy gains (0.38), depression improvements to twelve months (0.41 to 0.72). Forbids: anxiety benefits (null), high-certainty claims (mostly low/very low), and confident claims of persistence past a year.

:::reveal Why is 'modest, real, compounding' a sufficient pitch for the centenarian frame? ||| Because small reliable effects applied across pillars and held for decades by maintenance structures accumulate into a different life. The frame's horizon converts d = 0.3 from underwhelming to decisive, without inflating a single number.

:::reveal In the diabetes coaching trials, which two behavior-change techniques were associated with SMALLER HbA1c reductions, and why does that fit this course? ||| Credible source (leaning on authority) and social reward (praise): the non-contingent techniques. It fits because this course taught affirmation over praise and autonomy support over lecturing; the coded trial data shows the same distinction on a hard clinical marker.

## Vocabulary
- **Null effect**: a measured effect statistically indistinguishable from zero, like coaching's anxiety outcomes; naming nulls is part of honest claims.
- **Heterogeneity**: how much trial results differ from each other; high heterogeneity lowers certainty and forbids one-number summaries.
- **Component attribution**: knowing which ingredient of a blended intervention carries how much of the effect; coaching trials mostly cannot say.
- **Behavior-change technique (BCT)**: a labeled active ingredient from the standard taxonomy (goal setting, problem solving, self-monitoring, and so on) used to code what interventions actually contain.
- **HbA1c**: glycated hemoglobin, the standard marker of blood-glucose control over recent months; the hard endpoint of the diabetes coaching trials.
- **Honest pitch**: the claim the evidence permits: modest, real, compounding effects, strongest exactly where this course drilled.

## Sources
Almulhim, A. N., Hartley, H., Norman, P., Caton, S. J., Doğru, O. C., & Goyder, E. (2023). Behavioural change techniques in health coaching-based interventions for type 2 diabetes: A systematic review and meta-analysis. *BMC Public Health, 23*, 95. https://pmc.ncbi.nlm.nih.gov/articles/PMC9837922/

Boehmer, K. R., et al. (2023). The impact of health and wellness coaching on patient-important outcomes in chronic illness care: A systematic review and meta-analysis. *Patient Education and Counseling, 117*, 107975. https://pmc.ncbi.nlm.nih.gov/articles/PMC10964774/`,
    },
    {
      slug: "putting-it-together",
      title: "25 · Putting it together: one session, start to finish",
      section: "Section 4 · The session",
      body: `A composite walkthrough, tool by tool. The client is you, because the capstone will ask exactly this.

**Preparation.** Five minutes: last session's commitment (the monthly review habit), distractions closed, one steadying breath. Craft, not ceremony.

**Opening.** Check-in: the review happened twice in four weeks. Affirmation, simple and true: "Twice, during launch season." Focusing menu: sleep regularity, the stalled morning walks, or the review habit itself. You pick the walks.

**Evoking.** Open question: "What made the walks matter when they started?" The answers arrive as change talk: thinking time, the surprising afternoon energy, "I liked who I was on those days." A complex reflection: "They weren't exercise; they were maintenance for the person you're trying to be." More change talk. A collecting summary hands it back.

**The obstacle, honestly.** WOOP on the wish. Outcome imagined: October you, walking, clearer. Obstacle, first pass: "meetings moved into lunch." Returned inward: "I don't defend the slot because a walk feels indefensible next to a meeting." That is the real obstacle, and notice it is a belief, coachable, whereas the calendar was weather.

**Planning.** If-then, contingent and rehearsed: "If a meeting request lands on the lunch block, then I propose 1 p.m. before accepting." Habit rules applied: the cue is the calendar notification itself; the minimum that counts is ten minutes; the miss rule is recited aloud. Locke would note the goal is specific and feedback is built in (the calendar shows the defended block).

**Closing.** Commitment in your own words. A note for next session's opening. Total elapsed: under thirty minutes, every tool from this course used once, nothing performed.

**Your assignment before the final:** run this loop on one real wish of yours, in writing. The capstone will build on artifacts like this one, and self-coaching is the practice environment that never cancels.

:::reveal In the walkthrough, why was 'meetings moved into lunch' not accepted as the obstacle? ||| It is outer weather. Returned inward it became 'I don't defend the slot because a walk feels indefensible next to a meeting', a belief, which is coachable and can anchor an if-then plan. WOOP's obstacle must be the client's own.

:::reveal Trace one tool from each course section through the walkthrough. ||| Section 1: habit rules (minimum version, miss rule). Section 2: OARS and change talk through evoking and the collecting summary. Section 3: WOOP and the contingent if-then. Section 4: the session anatomy holding it all, closed by commitment in the client's own words.

## Vocabulary
- **Self-coaching**: running the full coaching loop on yourself, in writing; this program's practice environment that never cancels.
- **Session artifact**: the written record a self-coaching loop produces: the evoked why, the inner obstacle, the contingent plan; the capstone builds on these.
- **Weather**: this course's shorthand for outer circumstances a plan cannot rehearse against, as opposed to the inner obstacles it can.`,
      recallContent: [
        {
          prompt: "What is the assignment before the final, and why does it exist?",
          answer:
            "Run the full session loop on one real personal wish, in writing. It produces the first artifact the capstone builds on, and it trains the self-coaching practice the whole program assumes.",
        },
      ],
    },
    {
      slug: "final-coaching-psychology",
      title: "26 · Final: coaching psychology",
      section: "Section 4 · The session",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "Match the concept to its source: median 66 days to near-automaticity.",
            options: [
              "Lally et al., 2010, the real-world habit-formation study",
              "Locke and Latham, 2002, goal-setting theory",
              "Miller and Rollnick, 2023, motivational interviewing",
              "Boehmer et al., 2023, the coaching meta-analysis",
            ],
            correctIndex: 0,
            explanation:
              "Lally's 96-volunteer, 12-week study modeled time to 95 percent of automaticity: median 66 days, range 18 to 254, with a single missed day immaterial.",
            sourceLessonSlug: "how-habits-form",
          },
          {
            prompt: "The fourth edition of MI broadened 'evocation' into:",
            options: [
              "Engagement, the working relationship the other three spirit components depend on",
              "Empowerment: affirming the client's strengths, resourcefulness, and autonomy",
              "Education, the structured delivery of change-relevant health knowledge",
              "Empathy, defined as accurate understanding of the client's inner frame of reference",
            ],
            correctIndex: 1,
            explanation:
              "The spirit's fourth component became empowerment: not only is the motivation already in the client (evocation), the capability is too, and the coach makes it visible.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "Which pair correctly matches technique to strongest-evidence status?",
            options: [
              "Implementation intentions: hundreds of tests, d = 0.36 to 0.65 across two meta-analytic generations",
              "Vision boards: medium-to-large effects across the 94 tests of the 2006 Gollwitzer and Sheeran meta-analysis",
              "Rigid stage-matching: large effects in chronic disease",
              "The 21-day habit rule: replicated in Lally's data",
            ],
            correctIndex: 0,
            explanation:
              "If-then planning is the best-evidenced single technique in this course (94 tests d ~0.65; 642 tests d = 0.36). The other three are the lore lesson's inventory.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "A client says 'I want to change, but honestly the current routine mostly works.' Your first move, per this course:",
            options: [
              "Present the strongest evidence against the current routine while the client's attention is engaged",
              "Reflect both sides of the ambivalence and explore, resisting the fixing reflex",
              "Move to planning while motivation is visible",
              "Assign the client a readiness questionnaire",
            ],
            correctIndex: 1,
            explanation:
              "Ambivalence is the normal state; both sides get heard. Arguing the change side hands the client the other one, and planning before evoking is the course's named failure mode.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "The mental-contrasting order, and what each half does:",
            options: [
              "Future first (creates the pull), inner obstacle second (binds pull to reality and becomes a goal cue)",
              "Inner obstacle first (builds the realism), desired future second (restores the optimism the obstacle work costs)",
              "Either order, provided both are written down",
              "Future only; obstacles are handled in the plan step",
            ],
            correctIndex: 0,
            explanation:
              "The sequence is the mechanism: elaborated fantasy creates pull, the immediately-following inner obstacle connects it to reality. Fantasy alone sedates, per the energization findings.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "Which line is autonomy-supportive?",
            options: [
              "'You just need to make mornings non-negotiable'",
              "'Should you really be skipping the review?'",
              "'Anchor it to the school run or to lunch; which fits how your days actually run?'",
              "'Most of my successful clients have chosen mornings, and their adherence data backs that choice up'",
            ],
            correctIndex: 2,
            explanation:
              "Choice plus rationale plus the client's perspective. 'Just', 'should', and normative pressure are the quiet controllers this course tells you to strip.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "The reflection-to-question rhythm skilled MI aims for is:",
            options: [
              "More reflections than questions, with reflections ending on a downward intonation",
              "Alternating one-for-one",
              "Mostly questions early in a session, since thorough data gathering has to precede any reflective work",
              "No questions at all after engagement",
            ],
            correctIndex: 0,
            explanation:
              "A common training benchmark is at least two reflections per question, delivered as statements. A transcript that reads as an interview is interviewing.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Which claim about coaching outcomes is permitted by the evidence taught here?",
            options: [
              "Coaching transforms anxiety outcomes",
              "Coaching produces modest, real improvements in quality of life, self-efficacy, and depression, at mostly low certainty",
              "Coaching's measured effects reliably persist for years after the sessions end, even without any maintenance structure in place",
              "Component techniques' individual contributions are precisely known",
            ],
            correctIndex: 1,
            explanation:
              "Boehmer et al.: QoL 0.62 short-term, self-efficacy 0.38, depression 0.41 to 0.72 to twelve months, anxiety null, low certainty, persistence and component attribution unestablished. The pitch is modest, real, compounding.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "A client's obstacle 'my job is demanding' should be:",
            options: [
              "Accepted; external obstacles are the most honest",
              "Returned inward: what in the client does the demanding job win against?",
              "Escalated to the client's manager",
              "Replaced by the coach with a more workable obstacle drawn from patterns observed across earlier sessions",
            ],
            correctIndex: 1,
            explanation:
              "WOOP's obstacle is the client's own habit, emotion, or belief. The job is weather; 'I don't defend the slot because it feels indefensible' is coachable. The client, not the coach, finds it.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "TTM's honest role in a modern coaching curriculum is:",
            options: [
              "The primary causal engine of behavior change, validated by stage-matched trials across chronic-disease populations",
              "Obsolete and untaught",
              "A readiness heuristic and shared vocabulary, with stage-matched superiority left as contested",
              "A legal requirement of the NBHWC outline",
            ],
            correctIndex: 2,
            explanation:
              "Read readiness, choose the conversation's center of gravity, hold the model loosely. The contested parts (discrete stages, stage-matched superiority) are taught as contested.",
            sourceLessonSlug: "readiness-and-stages",
          },
          {
            prompt: "The strongest single predictor-category of actual behavior change in a client's speech is:",
            options: [
              "Detailed sustain talk, showing engagement",
              "Commitment and taking-steps change talk",
              "Questions about the evidence",
              "Agreement with the coach's suggestions",
            ],
            correctIndex: 1,
            explanation:
              "Desire, ability, reasons, and need matter; commitment and taking-steps language ('I will', 'I've started') is the strongest. The craft is noticing, elaborating, and reflecting it.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "Why does this program pair every effect-size claim with its conditions?",
            options: [
              "Because unconditioned certainty is the signature of lore, and the evidence's conditions are where the coaching craft lives",
              "To satisfy citation formatting rules",
              "Because conditions and moderators make claims sound more scientific, and therefore more persuasive to prospective clients in marketing materials",
              "To discourage clients from asking questions",
            ],
            correctIndex: 0,
            explanation:
              "The lore lesson's tell: pitches without conditions. Real findings come with moderators (fidelity, contingent format, feedback, need support), and those moderators are precisely what a skilled coach manipulates.",
            sourceLessonSlug: "the-lore-lesson",
          },
          {
            prompt: "The session walkthrough's whole loop, compressed:",
            options: [
              "Assess, prescribe, schedule, bill",
              "Prepare and open with the client's agenda; evoke change talk; return the obstacle inward; plan contingently with habit rules; close with commitment in the client's words",
              "Weigh the client in, review their compliance against last session's assignments, assign the coming week's homework, and warn about the consequences of another missed target, closing with a scheduled follow-up",
              "Educate, motivate, celebrate",
            ],
            correctIndex: 1,
            explanation:
              "One honest loop: preparation, client-held focusing, evoking before planning, WOOP-shaped obstacle work, an if-then with the minimum-that-counts and the miss rule, and the client stating the commitment. Under thirty minutes, nothing performed.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "Learning goals beat performance goals when:",
            options: [
              "The client is highly experienced",
              "The strategy for the how does not exist yet",
              "Feedback on progress is unavailable or delayed",
              "The goal is public",
            ],
            correctIndex: 1,
            explanation:
              "Performance goals presume an existing strategy; when the how is unsolved, a learning goal ('find and test three ways...') outperforms, per the goal-setting refinements this course teaches.",
            sourceLessonSlug: "goal-setting",
          },
        ],
      },
    },
  ],
};
