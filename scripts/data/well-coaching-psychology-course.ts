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
          {
            prompt: "How does the fourth edition define motivational interviewing?",
            options: [
              "A guiding style of conversation for strengthening a person's own motivation and commitment to change",
              "A directive counselling method for resolving ambivalence toward a clinically indicated behavior",
              "A client-led conversation in which the practitioner follows wherever the client's concerns lead",
              "A structured protocol of open questions and reflections delivered in a fixed sequence",
            ],
            correctIndex: 0,
            explanation:
              "Guiding, and aimed at the person's OWN motivation and commitment. Directive and following are the two poles MI deliberately sits between, and it is a style rather than a fixed protocol.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "Where does MI's 'guiding style' sit, and between what?",
            options: [
              "Between directing, where the expert supplies answers, and following, where the listener drifts with the client",
              "Between assessment, where information is gathered, and intervention, where a plan is delivered",
              "Between confrontation, which provokes defence, and reassurance, which prevents exploration",
              "Between education, which supplies content, and accountability, which supplies structure",
            ],
            correctIndex: 0,
            explanation:
              "Directing and following are the two poles. Naming both matters: MI is as distinct from passive listening as it is from expert prescription.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "Why does this program teach the fourth edition specifically?",
            options: [
              "The vocabulary changed in ways that matter, and the program verified against the fourth edition itself",
              "Earlier editions have been withdrawn from publication by the authors",
              "The fourth edition is the version the NBHWC content outline names by number",
              "Earlier editions lack the evidence base that later trials supplied",
            ],
            correctIndex: 0,
            explanation:
              "Vocabulary changes, verified against the source. Two renames in this section alone: righting reflex to fixing reflex, and processes to tasks.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What does 'partnership' mean in MI's spirit?",
            options: [
              "Coaching happens WITH a person, not ON them; the client is the expert on their own life",
              "The coach and client share responsibility for the outcome equally",
              "The coach partners with the client's other providers to coordinate care",
              "The coach and client jointly select the behavior change to pursue",
            ],
            correctIndex: 0,
            explanation:
              "With, not on, and the client as expert on their own life. Shared outcome responsibility and joint goal selection are different ideas that partnership does not assert.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What three things does 'acceptance' comprise in MI's spirit, and how are they offered?",
            options: [
              "Absolute worth, accurate empathy, and support for autonomy, offered non-contingently",
              "Unconditional regard, active listening, and non-judgment, offered where the client is engaged",
              "Absolute worth, behavioral neutrality, and confidentiality, offered throughout the engagement",
              "Empathy, patience, and tolerance of ambivalence, offered until the client commits",
            ],
            correctIndex: 0,
            explanation:
              "Absolute worth, accurate empathy, autonomy support, and crucially non-contingent: not withdrawn when the client fails to progress.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What does 'compassion' commit the coach to in MI's spirit?",
            options: [
              "The work serves the client's welfare, not the coach's agenda or metrics",
              "The coach responds to the client's distress before addressing behavior",
              "The coach withholds difficult feedback until the relationship can hold it",
              "The coach prioritizes the client's comfort over the pace of change",
            ],
            correctIndex: 0,
            explanation:
              "Whose interest the work serves. It is a commitment about purpose, not about tone, pace, or the timing of feedback.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What did the fourth edition change, and what does the change add?",
            options: [
              "Evocation broadened to empowerment, adding that the client's CAPABILITY is present too, not only their motivation",
              "Empowerment narrowed to evocation, focusing the coach on drawing out motivation specifically",
              "Compassion was added as a fourth component, replacing an earlier emphasis on collaboration",
              "Partnership replaced collaboration, emphasising the client's expertise on their own life",
            ],
            correctIndex: 0,
            explanation:
              "Evocation said the motivation is already in there. Empowerment adds that the resourcefulness is too, and that making it visible is part of the coach's job.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "The lesson says the evocation-to-empowerment change is 'not cosmetic.' Why not?",
            options: [
              "It expands the coach's job from drawing out motivation to making the client's own resources visible to them",
              "It changes the order in which the four spirit components are taught",
              "It replaces a term that had been criticised as manipulative in the literature",
              "It brings MI's vocabulary into alignment with self-determination theory's terminology",
            ],
            correctIndex: 0,
            explanation:
              "The job description grows. Motivation and capability are different things to be made visible, and the second was not explicit under 'evocation'.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What does the fourth edition say happens to MI's skills without its spirit?",
            options: [
              "They collapse into manipulation: clever questions steering a person where you already decided they should go",
              "They become ineffective, producing neither change talk nor sustain talk reliably",
              "They remain effective but require substantially more sessions to produce the same result",
              "They function as ordinary counselling skills, useful but no longer distinctively MI",
            ],
            correctIndex: 0,
            explanation:
              "Manipulation, specifically. The lesson's sharpest line follows from it: a coach who masters reflections while keeping a private agenda has learned to hide directing.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "How does the lesson relate MI to the NBHWC scope taught in WELL-00?",
            options: [
              "MI is the craft that scope was describing: client-centered, self-determined goals, coach as facilitator",
              "MI is one of several methods the scope permits, chosen here for its evidence base",
              "MI extends the scope by adding techniques the scope document does not address",
              "MI operates at the edge of the scope, which is why the spirit lesson precedes the skills",
            ],
            correctIndex: 0,
            explanation:
              "The match is treated as exact rather than permissive: the scope's abstract description of coaching and MI's concrete method describe the same thing.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "What was the fixing reflex called in earlier editions, and why does the lesson mention the old name?",
            options: [
              "The righting reflex; you will meet it in older literature",
              "The correcting reflex; the term still appears in NBHWC materials",
              "The expert reflex; the rename reflects a shift away from clinical framing",
              "The advising reflex; earlier editions distinguished it from the fixing impulse",
            ],
            correctIndex: 0,
            explanation:
              "Righting reflex. The old name is taught because the older literature uses it, which is the same reason 'evocation' is kept in the vocabulary list.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "Why does the fourth edition consider 'fixing reflex' the clearer name?",
            options: [
              "It is clearer about what the urge feels like from inside",
              "It avoids the moral connotation of 'righting' a wrong",
              "It distinguishes the coach's urge from the client's own self-correction",
              "It matches the terminology used across the broader counselling literature",
            ],
            correctIndex: 0,
            explanation:
              "The rename is about phenomenology: naming the experience so a practitioner can catch it in the moment, which is the only point at which it can be resisted.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "How does this lesson characterize ambivalence?",
            options: [
              "The normal state of a person considering change, not a defect",
              "An early-stage phenomenon that resolves once a client reaches preparation",
              "A form of resistance that signals the coaching relationship needs repair",
              "A sign that the focus has been negotiated wrongly and should be renegotiated",
            ],
            correctIndex: 0,
            explanation:
              "Normal, not defective. The lesson's closing line follows from it: a client with zero ambivalence either already changed or is not considering it.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "What replaces fixing, per this lesson?",
            options: [
              "Guiding: helping the client voice their own reasons for change and letting those reasons do the persuading",
              "Waiting: staying silent until the client resolves the ambivalence themselves",
              "Educating: supplying the information the client's decision is missing",
              "Reframing: presenting the same facts in a way that favors the change",
            ],
            correctIndex: 0,
            explanation:
              "Guiding, with the client's own reasons doing the work. Reframing and educating are both still the coach supplying the case, which is what triggers the dynamic.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "The lesson names the trainer's specific version of this trap. What is the tell that the conversation has shifted?",
            options: [
              "It moves from content ('what's a good protein target?') to change ('I know my target, I just don't hit it')",
              "It moves from the client's questions to the coach's questions",
              "It moves from measurable outcomes to feelings about the outcomes",
              "It moves from the current session's plan to the client's history",
            ],
            correctIndex: 0,
            explanation:
              "Content questions versus change statements. Expertise answers the first well and quietly worsens the second, which is why noticing the shift is the whole discipline.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "How does the lesson suggest reframing ambivalence for a client?",
            options: [
              "'Part of you wants this and part of you doesn't' is the entry ticket to real work, not a diagnosis of weakness",
              "'You're not ready yet' is honest, and readiness will come with time",
              "'Ambivalence means the goal isn't yours' invites renegotiating the focus",
              "'Everyone feels this way' normalises it without dwelling on the specifics",
            ],
            correctIndex: 0,
            explanation:
              "Entry ticket, not weakness. The alternatives either stall the work, discard the goal, or normalise so generically that the client's actual two sides never get explored.",
            sourceLessonSlug: "the-fixing-reflex",
          },
          {
            prompt: "What is conspicuously absent from OARS, and what does the lesson say about the absence?",
            options: [
              "Advice, and the absence is the method",
              "Assessment, and the absence reflects MI's non-clinical origins",
              "Goal-setting, and the absence is filled by the planning task",
              "Confrontation, and the absence distinguishes MI from earlier addiction models",
            ],
            correctIndex: 0,
            explanation:
              "Advice. Open questions, affirming, reflecting, and summarizing are all ways of not advising, which is why the omission is described as the method rather than an oversight.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What distinguishes an open question from a closed one, in the lesson's example?",
            options: [
              "'What's made you think about sleep now?' invites elaboration; 'Do you want to sleep better?' invites a yes or no",
              "'What's made you think about sleep now?' is neutral; 'Do you want to sleep better?' implies judgment",
              "Open questions are longer, giving the client time to consider before answering",
              "Open questions concern the future while closed questions concern the past",
            ],
            correctIndex: 0,
            explanation:
              "What the question invites: elaboration versus a yes, a no, or a number. Length, tense, and tone are not the discriminator.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What two craft points does the fourth edition emphasize about open questions?",
            options: [
              "Ask one at a time, and resist the interrogation rhythm, since in MI questions set up reflections",
              "Ask several in sequence to map the territory, then reflect the pattern across them",
              "Ask only questions the client can answer immediately, to build momentum",
              "Ask questions the coach does not know the answer to, to preserve genuine curiosity",
            ],
            correctIndex: 0,
            explanation:
              "One at a time, and questions as setup for reflections rather than substitutes for them. The interrogation rhythm is exactly what a question-heavy transcript reveals.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What working ratio does the lesson say almost every new practitioner has backwards?",
            options: [
              "More reflections than questions",
              "More open questions than closed ones",
              "More affirmations than reflections",
              "More summaries than affirmations",
            ],
            correctIndex: 0,
            explanation:
              "New practitioners ask more than they reflect. The reflections lesson sets the training benchmark higher still: at least two reflections per question.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What does an affirmation do?",
            options: [
              "Names a strength or genuine effort the coach observed",
              "Expresses the coach's confidence that the client will succeed",
              "Acknowledges the difficulty of what the client is attempting",
              "Confirms that the client's chosen goal is a worthwhile one",
            ],
            correctIndex: 0,
            explanation:
              "It names something observed: an effort, an action, or the strength behind it. Confidence, sympathy, and endorsement of the goal are all different moves.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "Which is a COMPLEX affirmation?",
            options: [
              "'You're someone who keeps promises to yourself once they're written down'",
              "'You tracked every day this week, which is more than most people manage'",
              "'That's a really impressive amount of effort you've put in'",
              "'You should be proud of what you accomplished this month'",
            ],
            correctIndex: 0,
            explanation:
              "It names an enduring strength of the person that the action reveals. Noticing the specific action is a SIMPLE affirmation, and the last two are praise.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "Why does MI prefer affirmation to praise, mechanically?",
            options: [
              "Praise positions the coach as judge and pays in approval; affirmation positions the client as capable and pays in evidence",
              "Praise is often insincere, while affirmation is always grounded in observation",
              "Praise creates dependency on sessions, while affirmation can be self-administered",
              "Praise focuses on outcomes, while affirmation focuses on the process that produced them",
            ],
            correctIndex: 0,
            explanation:
              "Judge versus capable, approval versus evidence. The consequence the lesson draws: approval-seeking is fragile motivation, self-perceived capability is durable.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "Which spirit component does affirmation feed?",
            options: [
              "Empowerment",
              "Partnership",
              "Compassion",
              "Acceptance",
            ],
            correctIndex: 0,
            explanation:
              "Empowerment, the fourth edition's broadening of evocation: making the client's own strengths and resourcefulness visible to them is exactly what an affirmation does.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What does the lesson say an unverifiable affirmation costs you?",
            options: [
              "The credibility every later reflection depends on",
              "The client's willingness to accept future affirmations",
              "The engagement built during the first part of the session",
              "The autonomy support the affirmation was intended to provide",
            ],
            correctIndex: 0,
            explanation:
              "Credibility, and specifically the credibility that reflections run on. An affirmation the client cannot check against their own experience is flattery, and it is priced accordingly.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "What is a reflection, structurally?",
            options: [
              "A statement, not a question, offering back your understanding of what the client means",
              "A question that checks whether the coach has understood the client correctly",
              "A restatement of the client's words, kept as close to the original as possible",
              "A summary of the main themes the client has raised across a session",
            ],
            correctIndex: 0,
            explanation:
              "A statement offering understanding for confirmation or repair. Close restatement is only the SIMPLE form, and session-scale summarizing is the S of OARS.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "The fourth edition's communication model explains why reflection matters. How many places can meaning fall apart, and between what?",
            options: [
              "Three: between what a speaker means, what they say, what the listener hears, and what the listener interprets",
              "Two: between what a speaker says and what a listener hears, and between hearing and interpretation",
              "Four: adding the listener's response and the speaker's re-interpretation of it",
              "Three: between intention, expression, and reception, each mediated by the relationship",
            ],
            correctIndex: 0,
            explanation:
              "Four points, three gaps: mean, say, hear, interpret. A reflection tests the last link out loud so the client can confirm or repair it.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "What do simple reflections buy, and at what cost?",
            options: [
              "They signal listening and keep the client talking, at the cost of adding nothing",
              "They confirm accuracy precisely, at the cost of slowing the conversation",
              "They avoid the risk of a wrong guess, at the cost of seeming mechanical",
              "They build engagement early, at the cost of delaying the focusing task",
            ],
            correctIndex: 0,
            explanation:
              "Listening signalled, conversation sustained, nothing added. That last part is why the lesson calls complex reflections the engine and simple ones the idle.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "In the lesson's example, a client says 'I can't keep doing this diet.' Which is the COMPLEX reflection?",
            options: [
              "'You're wondering whether the way you've defined this is the actual problem'",
              "'The diet's not working for you'",
              "'What is it about the diet that isn't working?'",
              "'It sounds like you've had enough of this diet'",
            ],
            correctIndex: 0,
            explanation:
              "It guesses at the unsaid next sentence: that the framing itself may be the problem. 'The diet's not working for you' is the simple version, and a question is not a reflection at all.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "What three things might a complex reflection guess at?",
            options: [
              "The feeling under the words, the value at stake, or the next sentence the client did not say",
              "The client's stage of change, their readiness level, and their confidence",
              "The client's history, their environment, and their support network",
              "What the client wants, what they fear, and what they have already tried",
            ],
            correctIndex: 0,
            explanation:
              "Feeling, value, and the unsaid next sentence. Each goes past the words to what was MEANT, which is what makes it complex rather than simple.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Why is the risk in a complex reflection described as its value?",
            options: [
              "A wrong guess, offered as a statement the client can correct, still deepens the conversation",
              "A wrong guess demonstrates the coach is not judging, which builds acceptance",
              "A wrong guess prompts the client to explain, which produces more change talk",
              "A wrong guess is rare enough that the expected value remains positive",
            ],
            correctIndex: 0,
            explanation:
              "Correction is productive. Because the reflection is a statement rather than a question, the client repairing it moves the conversation past the surface either way.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Which way should a reflection's voice turn, and what happens otherwise?",
            options: [
              "Down; turned up it becomes a question and asks the client to defend rather than explore",
              "Up; the rising intonation invites the client to confirm or correct the guess",
              "Neither; a flat delivery keeps the coach's interpretation out of the exchange",
              "Down for simple reflections and up for complex ones, which are offered tentatively",
            ],
            correctIndex: 0,
            explanation:
              "Down. Rising intonation converts a statement into a question, and the posture shifts from listening to interrogating, which is precisely what the skill exists to avoid.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Should a reflection understate or overstate a feeling, and why?",
            options: [
              "Understate: overstatement gets denial, understatement gets elaboration",
              "Overstate: overstatement gives the client room to calibrate downward accurately",
              "Match precisely: any mismatch signals the coach was not listening carefully",
              "Understate for negative feelings and overstate for positive ones",
            ],
            correctIndex: 0,
            explanation:
              "Understate. The lesson gives the mechanism in dialogue: 'furious? I'm just annoyed' shuts a line down, while an understated reflection invites the client to add to it.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "What training benchmark does the lesson give for the reflection-to-question ratio?",
            options: [
              "At least two reflections per question",
              "At least one reflection per question",
              "At least three reflections per question",
              "At least half of all coach utterances as reflections",
            ],
            correctIndex: 0,
            explanation:
              "Two to one is the common training benchmark. The lesson's test is blunter: if your transcript reads as an interview, you are interviewing, not coaching.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "What does the lesson call MI's central discovery?",
            options: [
              "The client's own speech predicts their behavior",
              "Ambivalence resolves when both sides are voiced by the client",
              "Empathy is the strongest single predictor of counselling outcome",
              "Brief interventions can match extended ones in effect size",
            ],
            correctIndex: 0,
            explanation:
              "Client speech predicting behavior is what makes change talk a target rather than a byproduct, and it is the claim the technical-hypothesis meta-analysis then tests.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "Name the five categories of change talk, with the strongest identified.",
            options: [
              "Desire, ability, reasons, need, and, strongest, commitment and taking-steps language",
              "Desire, ability, reasons, need, and, strongest, expressed confidence",
              "Wanting, planning, trying, committing, and, strongest, sustained action",
              "Desire, readiness, ability, importance, and, strongest, stated intention",
            ],
            correctIndex: 0,
            explanation:
              "Desire, ability, reasons, need, then commitment and taking-steps as the strongest. 'I've started' outranks 'I want to' precisely because it reports action rather than appetite.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "How does this course characterize sustain talk?",
            options: [
              "A normal expression of ambivalence, rather than resistance to be crushed",
              "A signal that the coaching relationship has not been adequately engaged",
              "Evidence that the client has been focused on the wrong behavior",
              "The client's attempt to test whether the coach will judge them",
            ],
            correctIndex: 0,
            explanation:
              "Normal ambivalence. Treating it as resistance is what invites arguing, which recruits the fixing-reflex dynamic and, per the evidence lesson, predicts worse outcomes.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "What is 'differential attention'?",
            options: [
              "Noticing, elaborating, and reflecting change talk while letting sustain talk rest",
              "Attending to the client's strongest concern first and returning to others later",
              "Splitting attention between the client's words and their non-verbal signals",
              "Directing the client's attention toward the discrepancy between values and behavior",
            ],
            correctIndex: 0,
            explanation:
              "It is the strategic skill of the lesson: you cannot make change talk appear on command, but you can choose what you amplify once it does.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "What does the fourth edition call the questions and reflections chosen to invite change talk, and what does the lesson say they are?",
            options: [
              "Directional questions and reflections; they are the guiding in 'guiding style'",
              "Evocative prompts; they are the technical core of the evoking task",
              "Strategic openers; they belong to the focusing task rather than evoking",
              "Change-oriented probes; they replace reflection during the planning task",
            ],
            correctIndex: 0,
            explanation:
              "Directional. The lesson uses them to cash out what 'guiding' means concretely: intentional direction inside a client-led conversation.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "How should sustain talk be handled?",
            options: [
              "Heard and reflected without amplification: acknowledged, never argued with",
              "Reflected back with added emphasis, so the client hears their own resistance",
              "Redirected immediately toward the nearest available change talk",
              "Noted silently and returned to once the client's commitment has strengthened",
            ],
            correctIndex: 0,
            explanation:
              "Acknowledge without amplifying. Arguing recruits the fixing-reflex dynamic; ignoring or redirecting it fails to let the client feel heard on the side they actually hold.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "What is a collecting summary?",
            options: [
              "A reflection at scale that gathers the conversation's scattered change talk into one bouquet and hands it back",
              "A recap of the session's decisions, confirmed with the client before closing",
              "A written record of the client's stated goals, shared after each session",
              "A summary of both sides of the ambivalence, presented in balance",
            ],
            correctIndex: 0,
            explanation:
              "Reflection at scale, selective by design. A balanced summary of both sides is a different instrument, and a decisions recap is administration rather than MI.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "The lesson says of summaries: 'What you include, you strengthen; what you leave out, you...' what?",
            options: [
              "Quietly let rest",
              "Return to in a later session",
              "Signal as unimportant to the client",
              "Reserve for the coach's own notes",
            ],
            correctIndex: 0,
            explanation:
              "Quietly let rest. The phrasing matters because it names the editorial power of a summary, which is why the lesson immediately points back at the spirit.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "Why does the lesson say the summary's 'editorial power' is exactly why the spirit lesson came first?",
            options: [
              "Selecting what to strengthen serves the client only when the spirit, not a private agenda, chooses the contents",
              "Summaries require the engagement built by the spirit before a client will accept them",
              "The spirit determines how much of a session a summary should cover",
              "Without the spirit, a summary becomes a recap rather than a strategic instrument",
            ],
            correctIndex: 0,
            explanation:
              "Because selection is power, and power exercised on a private agenda is the manipulation the spirit lesson warned about. Same technique, different master.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "What signals the conversation is ready to move from why to how?",
            options: [
              "Change talk shifting toward commitment language",
              "The client asking directly for a plan",
              "Sustain talk decreasing across the session",
              "The client's stated confidence rising above their stated importance",
            ],
            correctIndex: 0,
            explanation:
              "Commitment language. The client asking for a plan is not the same thing, and it is a common trap: an ambivalent client can request a plan to end an uncomfortable conversation.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "What did the fourth edition rename the four processes, and why does the lesson say the name matters?",
            options: [
              "Tasks; conversations loop, so the order describes dependency rather than schedule",
              "Stages; the sequence must be completed in order for MI to be delivered with fidelity",
              "Phases; each occupies a distinct portion of a session's time",
              "Components; they operate simultaneously rather than sequentially throughout",
            ],
            correctIndex: 0,
            explanation:
              "Tasks. The lesson is explicit that a plan wobbling sends you back to evoking and frayed trust sends you back to engaging, which a pipeline metaphor would forbid.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "What does 'engaging' establish, and what happens without it?",
            options: [
              "The working relationship; without it, everything downstream is technique performed at a stranger",
              "The client's readiness to change; without it, evoking produces only sustain talk",
              "The session's agenda; without it, the conversation sprawls across pillars",
              "The client's trust in the coach's expertise; without it, plans are not followed",
            ],
            correctIndex: 0,
            explanation:
              "The working relationship, and the OARS skills live here first. The phrase 'technique performed at a stranger' is the lesson's own diagnosis of skipping it.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "What question does the focusing task answer, and who holds the pen?",
            options: [
              "'Change what, exactly?' and the client holds the pen; agenda-setting is a menu, not a syllabus",
              "'Change what, exactly?' and the coach holds the pen, having assessed the priorities",
              "'How ready are you?' and the client holds the pen, self-reporting their stage",
              "'What has worked before?' and both hold the pen, reviewing history jointly",
            ],
            correctIndex: 0,
            explanation:
              "Change what, exactly, with the client choosing from a menu. The menu-not-syllabus phrasing is the practical form of the partnership component.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "Why does focusing matter especially in wellness conversations?",
            options: [
              "They sprawl: sleep, food, movement, and stress arrive tangled together",
              "Clients arrive with goals set by clinicians rather than themselves",
              "The five pillars each require a separate coaching approach",
              "Wellness goals are harder to make specific than clinical ones",
            ],
            correctIndex: 0,
            explanation:
              "Tangling. A wellness client rarely presents one clean behavior, so negotiating a shared direction is a real task rather than an administrative step.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "What is 'evoking,' and what does the lesson say it differs most sharply from?",
            options: [
              "Drawing out the client's own motivations for the focused change; it differs most from assessment-then-advice models",
              "Eliciting the client's history with the behavior; it differs most from goal-setting frameworks",
              "Surfacing the client's emotional response to change; it differs most from cognitive approaches",
              "Prompting the client to commit verbally; it differs most from written contracting",
            ],
            correctIndex: 0,
            explanation:
              "MI's heart, and the lesson names the contrast honestly: assessment-then-advice, and most certification-taught consultation scripts.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "How does MI's planning task test readiness?",
            options: [
              "With questions like 'what might you do?' rather than prescriptions",
              "With a confidence-and-importance ruler scored from one to ten",
              "By asking the client to commit to a start date before the session ends",
              "By reviewing whether the client's stated obstacles have been resolved",
            ],
            correctIndex: 0,
            explanation:
              "'What might you do?' keeps the plan client-authored. The alternatives all shift authorship toward the coach or toward an instrument.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "Which Section 3 tools does the lesson say MI planning hands off to?",
            options: [
              "Goal specificity, if-then plans, WOOP, and habit anchoring",
              "Goal specificity, decisional balance, stage-matching, and self-monitoring",
              "If-then plans, motivational rulers, habit stacking, and accountability check-ins",
              "WOOP, cognitive restructuring, environment design, and relapse contracts",
            ],
            correctIndex: 0,
            explanation:
              "Those four are Section 3's subjects. Decisional balance and stage-matching belong to TTM in Section 1, and cognitive restructuring is outside coaching scope entirely.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "What self-check does the lesson offer at any point in a session?",
            options: [
              "Which task am I in, and did the client come with me?",
              "Which OARS skill have I used least in the last ten minutes?",
              "Is the client producing more change talk than sustain talk?",
              "Have I stayed within the focus we negotiated at the start?",
            ],
            correctIndex: 0,
            explanation:
              "Two halves, and the second is the one that catches the failure mode: a coach can be correctly in the planning task while the client is still in evoking.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "How many randomized trials did Rubak et al. review, and what was MI compared against?",
            options: [
              "72 trials, against traditional advice",
              "48 trials, against usual medical care",
              "12 trials, against structured education programs",
              "72 trials, against both advice and active comparators",
            ],
            correctIndex: 0,
            explanation:
              "Seventy-two trials against traditional advice-giving. The 48-trial figure belongs to Lundahl's medical-care meta-analysis, and 12 to Magill's process studies.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "On which outcomes did Rubak et al. find significant combined effects?",
            options: [
              "Body mass index, total cholesterol, systolic blood pressure, blood alcohol concentration, and standard ethanol content",
              "Body mass index, HbA1c, cigarettes per day, and systolic blood pressure",
              "Total cholesterol, HbA1c, physical activity minutes, and self-reported diet quality",
              "Blood alcohol concentration, cigarettes per day, body mass index, and depression scores",
            ],
            correctIndex: 0,
            explanation:
              "Those five. Cigarettes per day and HbA1c are the two the review found NOT significant, which is the lesson's evidence that MI is not uniform across behaviors.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What did Rubak et al. find about brief encounters?",
            options: [
              "Even 15-minute encounters showed an effect in 64 percent of studies",
              "Encounters under 30 minutes showed no reliable effect in any behavior domain",
              "Brief encounters matched extended ones on every measured outcome",
              "Effects appeared only where total contact time exceeded two hours",
            ],
            correctIndex: 0,
            explanation:
              "Sixty-four percent of studies at 15 minutes. That finding is why the lesson calls MI 'brief-compatible', which matters for coaching formats built around short sessions.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What is the practical meaning of Lundahl's odds ratio of 1.55?",
            options: [
              "Roughly a 10 to 15 percent improvement over comparison conditions",
              "Roughly a 55 percent improvement over comparison conditions",
              "Roughly a one-and-a-half-fold increase in the size of the behavior change",
              "Roughly a 55 percent chance that any given client will improve",
            ],
            correctIndex: 0,
            explanation:
              "Ten to fifteen percent. Reading an odds ratio of 1.55 as a 55 percent improvement is the commonest misreading of the statistic and inflates the claim substantially.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What is MI's average effect across the broader literature, against weak comparators?",
            options: [
              "Small, around g of 0.2",
              "Moderate, around g of 0.5",
              "Large, around g of 0.8",
              "Variable, with no stable pooled estimate available",
            ],
            correctIndex: 0,
            explanation:
              "Around 0.2, which is small on this course's scale, and against WEAK comparators at that. It sits at the bottom of coaching's honest 0.2-to-0.6 range.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "How does the lesson state MI's honest synthesis?",
            options: [
              "It reliably beats what most practitioners do by default, and is not magic relative to other disciplined approaches",
              "It reliably beats every alternative tested, with effects that grow over longer follow-up",
              "It performs comparably to advice-giving but is preferred for its client-centered posture",
              "It outperforms structured programs in behavioral outcomes but not psychological ones",
            ],
            correctIndex: 0,
            explanation:
              "Both halves. Dropping the first half undersells it; dropping the second is the overclaim the lesson exists to prevent.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What is the 'technical hypothesis'?",
            options: [
              "MI's proposed causal chain from coach skills through client language to outcomes",
              "The claim that MI's effects depend on practitioner training and fidelity coding",
              "The proposal that brief MI encounters produce the same effect as extended ones",
              "The theory that MI works by resolving ambivalence rather than by supplying information",
            ],
            correctIndex: 0,
            explanation:
              "Skills shape language, language shapes outcomes. It is MI's own account of WHY it works, which is why testing it directly matters more than another outcome trial.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "In Magill et al.'s 2014 meta-analysis, what did MI-consistent coach skills predict?",
            options: [
              "More client change talk, at r = .26",
              "Better follow-up outcomes, at r = .26",
              "Less client sustain talk, at r = -.24",
              "Both more change talk and better outcomes, at similar magnitudes",
            ],
            correctIndex: 0,
            explanation:
              "The first link of the chain held: skills predicted change talk at r = .26. The second link is where it broke.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What did Magill et al. find about change talk and follow-up outcomes?",
            options: [
              "Change talk by itself did NOT predict outcomes (r = .06, nonsignificant)",
              "Change talk strongly predicted outcomes (r = .34), confirming the causal chain",
              "Change talk predicted outcomes only in substance-use trials, not health-behavior ones",
              "Change talk predicted outcomes at three months but not at twelve",
            ],
            correctIndex: 0,
            explanation:
              "r = .06, nonsignificant. That is the finding that breaks the folklore version of MI, in which harvesting change talk is the whole game.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What did sustain talk predict in the same meta-analysis?",
            options: [
              "Worse outcomes, at r = -.24",
              "Better outcomes, at r = .24, suggesting honest ambivalence aids change",
              "No relationship with outcomes, at r = -.04",
              "Worse outcomes, but only where the coach argued against it",
            ],
            correctIndex: 0,
            explanation:
              "Worse outcomes at r = -.24, a substantially stronger relationship than change talk's .06. The asymmetry is the practical finding.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What coaching translation does the lesson draw from the technical-hypothesis findings?",
            options: [
              "The best-evidenced language lever is NOT feeding sustain talk, rather than harvesting change talk",
              "The best-evidenced language lever is asking directly for commitment language early",
              "Client language should be disregarded, since it does not predict outcomes reliably",
              "Coaches should measure their change-talk-to-sustain-talk ratio in every session",
            ],
            correctIndex: 0,
            explanation:
              "It cuts against the folklore version. It is also why lesson 11 taught acknowledge-without-amplification, and why the fixing reflex, which provokes sustain talk, costs more than it looks.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What did the composite language measures show in Magill's analysis?",
            options: [
              "A small positive relationship with outcomes",
              "A large positive relationship, stronger than either component alone",
              "No relationship, consistent with change talk's null result",
              "A negative relationship, driven entirely by the sustain-talk component",
            ],
            correctIndex: 0,
            explanation:
              "Small and positive. The composite is the one language measure that behaved as MI's model predicts, which is why the lesson calls the support partial rather than absent.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What did Magill and colleagues' later 2019 subtype work add?",
            options: [
              "The change-talk and sustain-talk categories are not equally meaningful",
              "The 2014 findings failed to replicate in a larger sample of process studies",
              "Change talk predicts outcomes once commitment subtypes are isolated",
              "Sustain talk's negative relationship weakens when coach fidelity is controlled",
            ],
            correctIndex: 0,
            explanation:
              "That the subtypes differ in meaningfulness, which complicates the picture further rather than rescuing the simple version of the model.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What is an 'active comparator,' and why does the term matter for reading MI's evidence?",
            options: [
              "Another structured, disciplined treatment in the control arm; against these MI's advantage mostly disappears",
              "A control arm receiving no intervention, against which any effect appears larger",
              "A comparison group receiving the same intervention at a lower dose",
              "A control condition matched on contact time but not on content",
            ],
            correctIndex: 0,
            explanation:
              "The comparator determines the size of the claim. MI against usual care and MI against a well-built CBT program are two different questions with two different answers.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What four things does the lesson give as MI's actual value proposition for a coach?",
            options: [
              "Learnable, brief-compatible, spirit-aligned with coaching scope, and reliably better than the fixing reflex it replaces",
              "Evidence-backed, board-examined, widely recognized, and applicable across every wellness pillar",
              "Efficient, measurable, teachable to clients, and compatible with any theoretical orientation",
              "Low-risk, low-cost, quick to certify in, and effective across all behavior domains",
            ],
            correctIndex: 0,
            explanation:
              "Note what the list does NOT claim: that MI is the strongest tool ever tested. The lesson's closing instruction is to master it without overclaiming.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What is 'treatment integrity,' and what does it delimit?",
            options: [
              "Trained practitioners plus fidelity coding: the delivery conditions MI's evidence base actually covers",
              "The proportion of the intervention a client completes as designed",
              "The consistency of MI delivery across different practitioners in a trial",
              "The degree to which a trial's control arm avoided contamination by MI techniques",
            ],
            correctIndex: 0,
            explanation:
              "It delimits what the evidence covers. A program borrowing MI's vocabulary without training and coding is outside the conditions the meta-analyses tested, which is the lore lesson's third entry.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A coach reads that MI 'works' and adopts open questions and reflections without training or fidelity checks. Which two lessons in this course tell them what is wrong?",
            options: [
              "The evidence lesson's treatment-integrity point and the lore lesson's brand-name-MI entry",
              "The spirit lesson's manipulation warning and the reflections lesson's ratio benchmark",
              "The four-tasks lesson's failure mode and the change-talk lesson's differential attention",
              "The fixing-reflex lesson's content-versus-change tell and the evidence lesson's comparator point",
            ],
            correctIndex: 0,
            explanation:
              "Both make the same point from different directions: MI's meta-analytic support belongs to high-fidelity delivery, so borrowing the vocabulary does not borrow the evidence.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A client says: 'I know I should walk more, but honestly after work I'm done.' Which response is MI-consistent?",
            options: [
              "'By the end of the day there's nothing left, and you'd still like movement to fit somewhere.'",
              "'What if you walked at lunch instead? A lot of people find that easier.'",
              "'Even ten minutes would help, and you'd probably feel more energetic afterward.'",
              "'What's stopping you from making it a priority in the evening?'",
            ],
            correctIndex: 0,
            explanation:
              "A complex reflection holding both sides of the ambivalence. The second and third are the fixing reflex supplying solutions, and the fourth is a question that asks the client to defend themselves.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Which coach utterance is a SIMPLE affirmation?",
            options: [
              "'You logged your sleep every night for three weeks.'",
              "'You're the kind of person who finishes what they start.'",
              "'Three weeks of logging is fantastic work, well done.'",
              "'Most clients don't manage three weeks, so you should feel good.'",
            ],
            correctIndex: 0,
            explanation:
              "It names the specific action observed. Naming the enduring strength behind it would be complex, and the last two are praise, positioning the coach as judge.",
            sourceLessonSlug: "oars-questions-affirmations",
          },
          {
            prompt: "A coach's transcript shows nine questions and two reflections in ten minutes. What does the course say?",
            options: [
              "It reads as an interview, which means interviewing rather than coaching",
              "It is acceptable during the engaging task, where information gathering dominates",
              "It is acceptable if the questions were all open rather than closed",
              "It indicates strong curiosity, which is the foundation of MI's spirit",
            ],
            correctIndex: 0,
            explanation:
              "The benchmark runs the other way: at least two reflections per question. Openness of the questions does not fix the rhythm, and the interrogation pattern is what the ratio exists to detect.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "Sort this client line: 'I've told my sister I'm starting Monday.'",
            options: [
              "Commitment and taking-steps change talk, the strongest category",
              "Desire change talk, since it expresses what the client wants",
              "Ability change talk, since it asserts the client can begin",
              "Sustain talk, since a future date defers the behavior",
            ],
            correctIndex: 0,
            explanation:
              "Announcing to another person is commitment language, and it also reports a step already taken. Desire is 'I want to' and ability is 'I could'.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "Sort this client line: 'Cooking at home would probably save money too.'",
            options: [
              "Reasons change talk",
              "Need change talk",
              "Commitment change talk",
              "Sustain talk, because it changes the subject to finances",
            ],
            correctIndex: 0,
            explanation:
              "A reason favoring the change. Need language sounds like 'something has to give'; commitment sounds like 'I will'.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "A client produces a long stretch of sustain talk about why mornings will never work. What does the evidence lesson add to the craft lesson's instruction?",
            options: [
              "Sustain talk predicted worse outcomes at r = -.24, so not feeding it is the best-evidenced lever available",
              "Sustain talk is unrelated to outcomes, so it can safely be ignored and redirected",
              "Sustain talk should be countered with the client's own earlier change talk",
              "Sustain talk indicates the focus was wrong, so the agenda should be renegotiated",
            ],
            correctIndex: 0,
            explanation:
              "The craft lesson said acknowledge without amplification; the evidence lesson supplies the reason it is the highest-value move rather than merely a polite one.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A coach in session three has a clear plan the client has not asked for and keeps steering toward it with well-formed questions. What has gone wrong?",
            options: [
              "The skills are being used without the spirit, which the fourth edition calls manipulation",
              "The coach has moved to planning before focusing was complete",
              "The coach is using closed questions where open ones were needed",
              "The coach has failed to affirm the client's efforts to date",
            ],
            correctIndex: 0,
            explanation:
              "A private agenda steered by clever questions is exactly the collapse the spirit lesson describes: technique intact, posture absent, directing hidden inside listening.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "A client is still voicing both sides of the argument, and the coach opens a planning conversation. What is this called in the course?",
            options: [
              "The commonest MI failure mode: the fixing reflex wearing an MI badge",
              "Premature focusing, which the four-tasks lesson treats as a sequencing error",
              "A directional reflection applied too early in the evoking task",
              "Differential attention misapplied to sustain talk rather than change talk",
            ],
            correctIndex: 0,
            explanation:
              "Planning while the client is still ambivalent. It is named as the commonest failure and identified with the fixing reflex, because it leaps to how before the client's own why is evoked.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "Which spirit component is most directly violated when a coach withdraws warmth after a client misses two weeks?",
            options: [
              "Acceptance, which is offered non-contingently",
              "Partnership, which makes the client the expert on their own life",
              "Compassion, which serves the client's welfare over the coach's metrics",
              "Empowerment, which affirms the client's own resourcefulness",
            ],
            correctIndex: 0,
            explanation:
              "Non-contingency is written into acceptance specifically. Warmth conditional on progress is approval, which the affirmation lesson identified as fragile motivation.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "A client asks 'so what should I do?' early in a first session. What does the four-tasks logic suggest?",
            options: [
              "Check whether engaging and evoking have happened, since a request for a plan is not the same as commitment language",
              "Answer directly, since the client has explicitly invited advice and autonomy is preserved",
              "Decline to answer, since supplying a plan is outside the coach's role entirely",
              "Move to planning, since the client's question signals readiness for the how",
            ],
            correctIndex: 0,
            explanation:
              "An ambivalent client can request a plan to end an uncomfortable conversation. The signal for planning is commitment language emerging from evoking, not a direct request early on.",
            sourceLessonSlug: "the-four-tasks",
          },
          {
            prompt: "Which of these is a directional reflection rather than a neutral one?",
            options: [
              "'Part of what's pulling at you is the version of yourself you want your kids to see.'",
              "'So evenings are hard and mornings are worse.'",
              "'You've tried this several times before.'",
              "'It sounds like the whole thing feels like a lot right now.'",
            ],
            correctIndex: 0,
            explanation:
              "It selects and reflects the change side, which is what makes it directional. The others reflect neutrally or reflect the difficulty, which amplifies sustain talk.",
            sourceLessonSlug: "change-talk-and-summaries",
          },
          {
            prompt: "Why does the course say MI is 'spirit-aligned with coaching scope'?",
            options: [
              "Its partnership, acceptance, and client-authored goals match what the NBHWC scope describes",
              "Its evidence base was developed in health-coaching rather than clinical populations",
              "It avoids the psychological therapeutic interventions the scope excludes by name",
              "It is the only method the NBHWC content outline names as within scope",
            ],
            correctIndex: 0,
            explanation:
              "The alignment is structural: MI's posture IS the scope's description of coaching. Note MI's evidence base is largely clinical, and the scope names no method as required.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A client says 'I'm furious with myself.' Which reflection follows the lesson's delivery guidance?",
            options: [
              "'You're frustrated about how this has gone.'",
              "'You're absolutely enraged at yourself for letting it slip.'",
              "'Why are you so angry with yourself?'",
              "'You shouldn't be so hard on yourself about it.'",
            ],
            correctIndex: 0,
            explanation:
              "Understate rather than overstate, and keep it a statement. Overstatement invites denial, a question asks for justification, and reassurance dismisses what was said.",
            sourceLessonSlug: "reflections",
          },
          {
            prompt: "What does the empowerment component add to a coach's response when a client succeeds unexpectedly?",
            options: [
              "Making the client's own resourcefulness visible to them, not just noting the result",
              "Confirming that the coach's plan was well matched to the client's situation",
              "Encouraging the client to raise the difficulty of the next step",
              "Recording the success so it can be referenced during future setbacks",
            ],
            correctIndex: 0,
            explanation:
              "Empowerment says the capability was already there; the coach's job is making it visible. That is the difference between a complex affirmation and a progress note.",
            sourceLessonSlug: "mi-spirit",
          },
          {
            prompt: "Which finding would a coach cite to argue MI fits a 20-minute session format?",
            options: [
              "Rubak's finding that 15-minute encounters showed an effect in 64 percent of studies",
              "Lundahl's odds ratio of 1.55 across 48 medical-care trials",
              "Magill's finding that MI-consistent skills predicted change talk at r = .26",
              "The broader literature's average effect of around g = 0.2",
            ],
            correctIndex: 0,
            explanation:
              "Only the Rubak brief-encounter finding speaks to session LENGTH. The others speak to overall effect, the causal mechanism, and average magnitude respectively.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A colleague says 'MI beats CBT for health behavior change.' What does the evidence lesson say?",
            options: [
              "Against active, structured treatments MI's advantage mostly disappears; comparative effects are frequently nonsignificant",
              "MI outperforms CBT specifically, though not other structured education programs",
              "The comparison has not been made, since the two target different outcomes",
              "MI outperforms CBT on behavioral outcomes but underperforms on psychological ones",
            ],
            correctIndex: 0,
            explanation:
              "The claim overstates. MI's honest advantage is over default advice-giving; against disciplined alternatives it is generally a tie.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "What does 'usual care' mean as a comparator, and why does it matter?",
            options: [
              "The default the control arm received, typically advice-giving; it is the comparator MI reliably beats",
              "Care delivered by an untrained practitioner, which sets a floor for any intervention",
              "No intervention at all, which makes any observed effect attributable to the treatment",
              "The standard protocol for the condition, which is usually well evidenced itself",
            ],
            correctIndex: 0,
            explanation:
              "Typically advice-giving. Knowing what the control arm actually got is how you size a claim, which is why the lesson defines both this and 'active comparator'.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "A coach wants to strengthen one thing from this section with the best evidence behind it. What should they pick?",
            options: [
              "Not provoking or feeding sustain talk, including resisting MI-inconsistent moves like arguing and confronting",
              "Asking more open questions early in every session",
              "Producing at least one complex affirmation per session",
              "Delivering a collecting summary before every planning conversation",
            ],
            correctIndex: 0,
            explanation:
              "Sustain talk's r = -.24 is the strongest language-outcome relationship in the meta-analysis, and MI-inconsistent skills predicted more of it. The other three are good craft with weaker direct evidence.",
            sourceLessonSlug: "mi-evidence",
          },
          {
            prompt: "Which pair correctly matches a fourth-edition term with the earlier term it replaced?",
            options: [
              "Fixing reflex replaced righting reflex; tasks replaced processes; empowerment broadened evocation",
              "Righting reflex replaced fixing reflex; processes replaced tasks; evocation broadened empowerment",
              "Fixing reflex replaced righting reflex; stages replaced tasks; partnership broadened collaboration",
              "Guiding replaced directing; tasks replaced stages; acceptance broadened empathy",
            ],
            correctIndex: 0,
            explanation:
              "All three renames run in that direction. The course teaches the old names too, because the older literature uses them and a coach reading widely will meet both.",
            sourceLessonSlug: "the-four-tasks",
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
          {
            prompt: "Over roughly what span and scale was goal-setting theory built?",
            options: [
              "About four decades and hundreds of studies, by Locke and Latham",
              "About one decade and forty studies, by Locke and Latham",
              "About two decades and a dozen large trials, by Latham alone",
              "About four decades, but confined to laboratory tasks with student samples",
            ],
            correctIndex: 0,
            explanation:
              "Four decades, hundreds of studies. It is one of psychology's most replicated bodies of work, which is why the course cites the theory rather than the SMART acronym.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "What four mechanisms does goal-setting theory identify?",
            options: [
              "Specific challenging goals direct attention, mobilize effort, lengthen persistence, and push people to find or invent strategies",
              "Specific goals raise self-efficacy, reduce ambivalence, clarify values, and increase accountability",
              "Challenging goals increase arousal, narrow focus, shorten deliberation, and raise commitment",
              "Specific goals improve feedback quality, reduce procrastination, sharpen priorities, and build identity",
            ],
            correctIndex: 0,
            explanation:
              "Attention, effort, persistence, and strategy. The last is the one most often forgotten and the one that motivates the learning-goal refinement.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "What happens if you strip one of goal-setting theory's three conditions?",
            options: [
              "Specificity alone will not save the goal",
              "The effect halves but remains statistically detectable",
              "The goal becomes a learning goal by default",
              "Feedback compensates for the loss of the other two",
            ],
            correctIndex: 0,
            explanation:
              "Commitment, capability, and feedback are conditions, not enhancements. The lesson is explicit that specificity alone does not rescue a goal missing one of them.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "Which earlier lessons does the lesson tie goal-setting theory's conditions back to?",
            options: [
              "Commitment to autonomy support, and capability to competence, both from the SDT lesson",
              "Commitment to the transtheoretical model's action stage, and capability to habit formation",
              "Commitment to change talk, and capability to the fixing reflex",
              "Commitment to the engaging task, and capability to the focusing task",
            ],
            correctIndex: 0,
            explanation:
              "Autonomy support builds commitment and competence is capability, both from lesson 3. The course keeps pointing at SDT because it is the mechanism the other tools run on.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "Where does most goal-setting evidence come from, and what does that imply for health coaching?",
            options: [
              "Organizational and laboratory tasks; health applications adopt the principles and mostly test them inside multi-component interventions",
              "Clinical health-behavior trials, which transfer directly to coaching practice",
              "Athletic performance settings, which limits its application to physical goals",
              "Educational settings, which is why learning goals dominate the literature",
            ],
            correctIndex: 0,
            explanation:
              "Organizational and lab tasks. The honest consequence is that its health application is principled rather than directly evidenced, which is a different claim from the theory's own replication record.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "When does a learning goal outperform a performance goal, and why?",
            options: [
              "When the person lacks the strategy, because performance goals presume the how already exists",
              "When the person lacks motivation, because learning goals feel less demanding",
              "When the goal is long-term, because learning goals tolerate slower progress",
              "When feedback is unavailable, because learning goals do not require it",
            ],
            correctIndex: 0,
            explanation:
              "The presence or absence of a strategy is the discriminator. 'Be up at six every day' assumes you know how; 'find three ways to make mornings workable' is the goal when you do not.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "Which is a properly formed LEARNING goal?",
            options: [
              "'Find three ways to make mornings workable and test them'",
              "'Be up at six every day for the next month'",
              "'Learn more about sleep hygiene this quarter'",
              "'Improve my morning routine by twenty percent'",
            ],
            correctIndex: 0,
            explanation:
              "It specifies strategy discovery and testing. 'Be up at six' is a performance goal, 'learn more about sleep hygiene' is vague, and a percentage improvement is a performance target in disguise.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "What is the course's instruction about citing SMART?",
            options: [
              "Use it as a checklist mnemonic if it helps; cite Locke and Latham, not the acronym",
              "Avoid it entirely, since its letters conflict with the evidence",
              "Cite it alongside the theory, since it operationalizes the same findings",
              "Use it with clients but not with other professionals, who expect the primary theory",
            ],
            correctIndex: 0,
            explanation:
              "Its letters roughly align with the evidence, but no study validated SMART as a package. The mnemonic is allowed; the citation is not.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "What gap does a well-set goal leave open, per the lesson's closing?",
            options: [
              "It states the destination and says nothing about what fires at 6 a.m. when the alarm argues otherwise",
              "It states the outcome but not the timeline for achieving it",
              "It specifies the behavior but not how progress will be measured",
              "It sets the target but not the client's level of commitment to it",
            ],
            correctIndex: 0,
            explanation:
              "The intention-action gap. That specific gap is what implementation intentions, mental contrasting, and habit design exist to close, which is why they follow immediately.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "State the format of an implementation intention.",
            options: [
              "'If situation X arises, then I will do Y'",
              "'I intend to do Y in order to achieve X'",
              "'When I want X, I will remember to do Y'",
              "'Because X matters to me, I commit to Y'",
            ],
            correctIndex: 0,
            explanation:
              "A concrete situation linked to a specific action. The alternatives all state intention or motive without the situational contingency that does the work.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Which is a properly formed implementation intention?",
            options: [
              "'If it's a workday lunch hour, then I walk the river loop before eating'",
              "'I'll walk more during the week when I get the chance'",
              "'If I feel like walking, then I will go for a walk'",
              "'I plan to walk the river loop several times a week'",
            ],
            correctIndex: 0,
            explanation:
              "A concrete recurring situation and a verifiable action. 'If I feel like walking' fails because the if is an internal state rather than a situation a stranger could verify.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What did Gollwitzer and Sheeran's 2006 meta-analysis find, and across how many tests?",
            options: [
              "d of about 0.65 across 94 tests, over and above simply holding the goal",
              "d of about 0.36 across 94 tests, over and above simply holding the goal",
              "d of about 0.65 across 642 tests, compared with no goal at all",
              "d of about 0.20 across 94 tests, compared with a matched control task",
            ],
            correctIndex: 0,
            explanation:
              "0.65 across 94 tests. The 642-test figure and the 0.36 estimate belong to the 2024 update, and the comparison is always against holding the goal without a plan.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What did the 2024 update report, and with what confidence interval?",
            options: [
              "d = 0.36, 95 percent CI 0.33 to 0.40, across 642 tests",
              "d = 0.36, 95 percent CI 0.20 to 0.52, across 642 tests",
              "d = 0.65, 95 percent CI 0.55 to 0.75, across 642 tests",
              "d = 0.29, 95 percent CI 0.18 to 0.40, across 642 tests",
            ],
            correctIndex: 0,
            explanation:
              "0.36 with a tight interval of 0.33 to 0.40. The narrowness is itself informative: 642 tests buy precision, which is why the course calls it extraordinarily well replicated.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Why is the 2024 estimate smaller than the 2006 one?",
            options: [
              "The larger literature includes more domains and conditions, shrinking the average",
              "The later trials used weaker manipulations of the if-then format",
              "Publication bias was corrected for in the 2024 analysis and not the earlier one",
              "The 2024 analysis excluded the laboratory studies that inflated the original estimate",
            ],
            correctIndex: 0,
            explanation:
              "Breadth. A bigger literature spans more domains and conditions, so the average falls while the finding becomes better established rather than weaker.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Which three moderators did the 2024 analysis identify?",
            options: [
              "A genuinely contingent if-then format, high motivation for the underlying goal, and rehearsal of the plan",
              "Written rather than spoken plans, coach involvement, and weekly review",
              "Short time horizons, simple behaviors, and supportive environments",
              "Specific timing, public commitment, and self-monitoring of the behavior",
            ],
            correctIndex: 0,
            explanation:
              "Format, motivation, rehearsal. Each maps onto a craft rule: keep the contingency real, evoke before you plan, and rehearse aloud or in writing.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Mechanistically, why does the if-then format work?",
            options: [
              "It delegates control of the behavior to the situation; the cue becomes primed and the cue-response link strengthens",
              "It increases the person's commitment by making the goal public and specific",
              "It reduces the number of decisions required, conserving self-control for later",
              "It creates accountability by specifying a checkable outcome",
            ],
            correctIndex: 0,
            explanation:
              "Delegation to the situation. The lesson notes this is exactly the machinery habit formation runs on, recruited deliberately rather than waiting for repetition to build it.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What test does the lesson give for whether an if-then is concrete enough?",
            options: [
              "A stranger could verify both the if and the then",
              "The client can recite it from memory a week later",
              "It fits in a single sentence without qualifiers",
              "It names a time of day and a location",
            ],
            correctIndex: 0,
            explanation:
              "Third-party verifiability of both halves. It rules out internal states as cues and vague actions as responses, which are the two commonest malformations.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "The lesson says to plan for obstacles as well as opportunities. What is its example?",
            options: [
              "'If it's raining at lunch, then I do the stairwell circuit'",
              "'If I miss the lunch walk, then I add it to tomorrow'",
              "'If the weather is bad, then I skip that day without guilt'",
              "'If I feel unmotivated, then I remind myself why this matters'",
            ],
            correctIndex: 0,
            explanation:
              "An obstacle paired with a specific alternative action. Permission to skip and internal pep-talks are not contingent plans, and compensating tomorrow abandons the cue.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What is the boundary condition the implementation-intentions literature is clear about?",
            options: [
              "They amplify existing motivation; they do not create it",
              "They work only for simple behaviors with a single step",
              "They lose effect after roughly three months without renewal",
              "They require a coach to construct correctly",
            ],
            correctIndex: 0,
            explanation:
              "Amplification, not manufacture. That is exactly why MI's evoking task precedes its planning task, which the lesson states directly: a plan bolted to a goal the client does not own is machinery without fuel.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What is 'cue priming' as this lesson defines it?",
            options: [
              "The specified situation becomes highly accessible, and the cue-response link fires with little deliberation",
              "The repeated pairing of a cue with a reward, strengthening the association over time",
              "The coach's rehearsal of the cue with the client during a session",
              "The deliberate placement of physical reminders in the client's environment",
            ],
            correctIndex: 0,
            explanation:
              "Mental accessibility of the situation plus a strengthened link to the response. Environmental reminders and reward pairing are different mechanisms entirely.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "What question did lesson 5 leave open that mental contrasting answers?",
            options: [
              "If idealized fantasies sedate, what should imagining do instead?",
              "If the 21-day figure is wrong, what horizon should a coach give?",
              "If MI requires fidelity, how can a coach acquire it without formal training?",
              "If stage-matching is unsupported, how should readiness be used?",
            ],
            correctIndex: 0,
            explanation:
              "The lore lesson said a vision board without an obstacle is sedation, and explicitly did not say to ban imagining. Mental contrasting is what it said to do instead.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "State the mental-contrasting procedure in order.",
            options: [
              "Vividly imagine the desired future, THEN identify and imagine the inner obstacle standing between you and it",
              "Identify the inner obstacle, THEN imagine the desired future that overcoming it produces",
              "Imagine the desired future and the obstacle simultaneously, holding both in mind",
              "List the pros and cons of changing, then imagine the outcome of each path",
            ],
            correctIndex: 0,
            explanation:
              "Future first, obstacle second. The order is the method; reversed, you get weather-report pessimism, and alone you get the sedating fantasy.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "Where does Oettingen locate 'the magic' of mental contrasting?",
            options: [
              "In the mental elaboration: the free-associated imagery of outcome and obstacle",
              "In the written record, which makes the contrast reviewable later",
              "In the emotional contrast between hope and frustration",
              "In naming the obstacle precisely enough to plan against it",
            ],
            correctIndex: 0,
            explanation:
              "Elaboration, not naming. The lesson is explicit that merely listing a couple of words is not the technique; the free-associated imagery is what does the work.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "What happens to the obstacle when contrasting is done in the right order?",
            options: [
              "It becomes a cue that activates the goal rather than a discouragement",
              "It shrinks in perceived size relative to the desired outcome",
              "It becomes easier to eliminate from the client's environment",
              "It is reframed as an external constraint rather than a personal failing",
            ],
            correctIndex: 0,
            explanation:
              "Obstacle-as-cue. That transformation is the bridge to WOOP, where the obstacle becomes the 'if' of an implementation intention.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "What role do expectations of success play in mental contrasting?",
            options: [
              "They take command: high expectations produce harder engagement, genuinely low ones produce disengagement and redirection",
              "They must be raised before contrasting will work at all",
              "They are deliberately set aside so the imagery is not biased by them",
              "They predict the vividness of the imagined outcome but not the behavioral result",
            ],
            correctIndex: 0,
            explanation:
              "Expectations take command in both directions. Contrasting mobilizes in proportion to them rather than overriding them.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "Why does Oettingen count disengagement as a feature rather than a failure?",
            options: [
              "An honest tool helps you quit unwinnable wishes and redirect",
              "Disengagement preserves self-efficacy for goals that remain achievable",
              "Quitting early reduces the risk of the what-the-hell effect later",
              "Redirection produces higher expectations on the next attempt",
            ],
            correctIndex: 0,
            explanation:
              "Adaptive disengagement. A method that only ever pushed forward would be a motivation gimmick; one that also lets you release unwinnable wishes is a decision instrument.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "What did Oettingen's early weight-loss-program study find?",
            options: [
              "Among twenty-five women, the more idealized and positive the imagined outcomes, the WORSE the results down the line",
              "Among twenty-five women, vivid positive imagery predicted better adherence but not weight change",
              "Among a hundred women, positive fantasy improved short-term results and worsened long-term ones",
              "Among twenty-five women, imagining obstacles alone predicted the best outcomes",
            ],
            correctIndex: 0,
            explanation:
              "More idealized fantasy, worse outcomes, in twenty-five women. The lesson calls it one of the founding observations of the whole research program.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "What kind of obstacle does mental contrasting work on?",
            options: [
              "The inner obstacle: the habit, emotion, or belief of YOURS in the way",
              "The largest obstacle, whether internal or external",
              "The most likely obstacle, judged by the client's history",
              "The obstacle the client can most easily eliminate",
            ],
            correctIndex: 0,
            explanation:
              "Inner only. The lesson's test: 'my evening exhaustion and the story that I've earned the couch' is workable, while 'my job is demanding' is weather.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "Why does the lesson call external circumstances 'weather'?",
            options: [
              "They are conditions you cannot rehearse a response to, unlike an inner obstacle",
              "They change unpredictably, so planning against them is wasted effort",
              "They are outside the coach's scope of practice to address",
              "They vary by client, so no general coaching principle applies",
            ],
            correctIndex: 0,
            explanation:
              "Rehearsability is the criterion. The obstacle has to be something a contingent plan can fire against, which an inner habit, emotion, or belief is and a general life condition is not.",
            sourceLessonSlug: "mental-contrasting",
          },
          {
            prompt: "What does WOOP stand for, and what does it combine?",
            options: [
              "Wish, Outcome, Obstacle, Plan: mental contrasting plus an implementation intention",
              "Wish, Outcome, Opportunity, Plan: mental contrasting plus goal-setting theory",
              "Want, Outcome, Obstacle, Practice: implementation intentions plus habit design",
              "Wish, Objective, Obstacle, Progress: goal setting plus self-monitoring",
            ],
            correctIndex: 0,
            explanation:
              "Wish, Outcome, Obstacle, Plan. The first three are mental contrasting; the fourth is the implementation intention, which is why the two prior lessons had to come first.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "How should the wish in WOOP be characterized?",
            options: [
              "It matters and is challenging but feasible",
              "It is ambitious enough to require a year or more to achieve",
              "It is modest enough to guarantee an early success",
              "It is stated as a measurable outcome with a deadline",
            ],
            correctIndex: 0,
            explanation:
              "Meaningful, challenging, feasible. Note the echo of goal-setting theory: challenging works only where the person is capable, which is what 'feasible' preserves.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "Why does this course NOT teach WOOP in depth?",
            options: [
              "The platform already ships a full course on the science of WOOP, and this program bridges rather than duplicates",
              "WOOP's evidence base is too weak to justify extended treatment",
              "WOOP is outside the coaching scope defined in WELL-00",
              "WOOP is covered instead in the capstone's protocol-design lesson",
            ],
            correctIndex: 0,
            explanation:
              "One skill, one home. It is the same bridging rule WELL-00 described for goal-setting and wearable-metric coaching, and what this lesson adds instead is the coaching integration.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "Where does WOOP slot into the MI framework?",
            options: [
              "The planning task, with the client authoring every element and the coach facilitating the sequence",
              "The evoking task, since imagining the outcome generates change talk",
              "The focusing task, since the wish determines what the conversation is about",
              "The engaging task, since working a wish together builds the relationship",
            ],
            correctIndex: 0,
            explanation:
              "Planning. The coach's two jobs there are keeping the obstacle INNER and the plan CONTINGENT, which are exactly the two places clients go wrong.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "A client offers 'my schedule' as their WOOP obstacle. What is the coach's correction?",
            options: [
              "'What is it in you that the schedule wins against?'",
              "'Which parts of the schedule could realistically be moved?'",
              "'Let's plan around the schedule instead of against it.'",
              "'How long has the schedule been like this?'",
            ],
            correctIndex: 0,
            explanation:
              "Return the obstacle inward. The alternatives all accept the outer obstacle and start problem-solving it, which produces a plan with nothing to fire against.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "What happens when working the obstacle step dissolves the client's stated wish?",
            options: [
              "The tool worked: the real wish surfaced, and the session moved from planning back to evoking",
              "The sequence was run incorrectly and should be restarted from the wish",
              "The wish was not feasible, and adaptive disengagement has occurred",
              "The obstacle was outer rather than inner, which destabilized the wish",
            ],
            correctIndex: 0,
            explanation:
              "Oettingen's own observation, and the lesson's example is 'lose twenty pounds' turning out to be 'stop feeling alone'. The coach follows the session backward rather than defending the old plan.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "What is MCII?",
            options: [
              "Mental contrasting with implementation intentions: WOOP's name in the research literature",
              "Motivational contrasting for intrinsic improvement: an SDT-derived planning protocol",
              "Mental contrasting in isolation: the technique before the planning step was added",
              "Multi-component intervention indexing: the method used to code blended trials",
            ],
            correctIndex: 0,
            explanation:
              "The literature's name for the same protocol. Knowing both is what lets a coach find the evidence for a tool they learned by its consumer-facing acronym.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "How does the course instruct you to represent MCII's evidence status?",
            options: [
              "A well-grounded, promising protocol built on the strongest planning evidence there is, not proven-at-scale",
              "A proven protocol with randomized support equal to implementation intentions alone",
              "An unproven protocol whose components are evidenced but whose combination is not",
              "A protocol with strong short-term evidence and no long-term data",
            ],
            correctIndex: 0,
            explanation:
              "The base is smaller than the implementation-intentions literature, with possible publication bias noted, but there IS randomized support in health contexts including long-term physical-activity and weight outcomes.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "What is 'publication bias,' and why is it flagged for MCII specifically?",
            options: [
              "Positive results get published more than nulls, which can inflate a young literature's apparent effects",
              "Researchers with a stake in a method publish more studies about it than independent groups",
              "Journals prefer larger trials, so small studies of new methods are underrepresented",
              "Later replications are published less often than original findings",
            ],
            correctIndex: 0,
            explanation:
              "Positive-result preference inflating a young literature. It is flagged because MCII's base is small enough for that inflation to matter, which is the honest caveat the course attaches.",
            sourceLessonSlug: "woop-in-practice",
          },
          {
            prompt: "Recite the five habit-design rules in order.",
            options: [
              "One exact behavior; anchor to a stable existing cue; consistency over intensity; pre-negotiate the miss; set the horizon honestly",
              "Start small; stack onto an existing habit; reward completion; track daily; review weekly",
              "Choose the behavior; remove friction; add accountability; celebrate wins; scale gradually",
              "One exact behavior; schedule it; track it; reward it; review it monthly",
            ],
            correctIndex: 0,
            explanation:
              "Specification, anchoring, consistency, the miss rule, and an honest horizon. Rewards and tracking are not among them, and the course is deliberate about that: the curve grows on repetition in context, not on reinforcement schedules.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "Why can 'move more' not become automatic?",
            options: [
              "Automaticity builds on a single, concretely defined behavior, which 'move more' is not",
              "It lacks a measurable target, so progress cannot be fed back",
              "It is a performance goal rather than a learning goal",
              "It spans multiple pillars, which divides the client's attention",
            ],
            correctIndex: 0,
            explanation:
              "Lally's participants each built automaticity on ONE concretely defined daily behavior. 'Walk the river loop after lunch' can automate; a category of activity cannot.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What makes the strongest habit anchors strong?",
            options: [
              "They are events that already happen daily without fail",
              "They are events the client finds enjoyable, so the pairing is pleasant",
              "They occur at the same clock time each day regardless of circumstance",
              "They are events the client can control entirely themselves",
            ],
            correctIndex: 0,
            explanation:
              "Reliability of occurrence. After I park, after breakfast, when the kids' lunches are made: the context does the remembering, which only works if the context reliably shows up.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "How does the lesson relate habit anchoring to implementation intentions?",
            options: [
              "It is an implementation intention wearing work clothes: the if-then installs the cue-response link that repetition then automates",
              "They are competing frameworks, and the course teaches anchoring as the more practical of the two",
              "Anchoring precedes if-then planning, which is used only once the habit has stalled",
              "They address different phases: anchoring for initiation, if-then plans for maintenance",
            ],
            correctIndex: 0,
            explanation:
              "The two literatures are explicit relatives. The if-then plan installs the link deliberately; repetition in a stable context then automates it.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "Why does a five-minute daily version beat a forty-five-minute occasional one?",
            options: [
              "The curve grows on repetitions in a stable context, so frequency and consistency drive it rather than intensity",
              "Short sessions are more enjoyable, which sustains motivation over time",
              "Long sessions require more recovery, which interrupts the daily cue",
              "Short sessions are easier to fit around a client's existing commitments",
            ],
            correctIndex: 0,
            explanation:
              "The mechanism is repetition count in a stable context. Convenience and enjoyment are real but secondary; the automaticity curve is built by frequency.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What is the 'minimum that counts'?",
            options: [
              "The pre-defined smallest version of the behavior that still counts as done, protecting consistency on sideways days",
              "The threshold below which the behavior produces no physiological benefit",
              "The smallest version a client is willing to commit to at the outset",
              "The version performed during the first two weeks before difficulty is increased",
            ],
            correctIndex: 0,
            explanation:
              "Pre-defined and protective. Its whole job is keeping repetitions accruing when everything goes wrong, which is when a habit is actually lost.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What should the client be able to recite about a missed day?",
            options: [
              "Resume at the next cue, no restarting, no repenting",
              "Make up the missed repetition within forty-eight hours",
              "Review whether the cue is still appropriate before continuing",
              "Reduce the target for the following week to rebuild momentum",
            ],
            correctIndex: 0,
            explanation:
              "The miss rule, pre-negotiated and recitable by the client. Making up, re-auditing, and reducing all treat one miss as meaningful, which the Lally data says it is not.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What does telling clients the full range rather than a single number accomplish?",
            options: [
              "It converts 'this is taking too long, I'm broken' into 'this is on schedule'",
              "It lowers expectations so any result feels like a success",
              "It gives the coach room to adjust the timeline later without losing credibility",
              "It matches the honesty standard the certifying bodies require of coaches",
            ],
            correctIndex: 0,
            explanation:
              "Reframing a slow curve as a normal one. Complex or unpleasant behaviors sit later on the distribution, and knowing that in advance is what prevents the self-diagnosis of failure.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What two additional moderators does the 2024 pooled habit review supply?",
            options: [
              "Morning habits developed faster than evening ones, and self-selected behaviors built more strength than assigned ones",
              "Simple habits developed faster than complex ones, and supervised habits built more strength than unsupervised ones",
              "Morning habits developed faster than evening ones, and rewarded behaviors built more strength than unrewarded ones",
              "Daily habits developed faster than weekly ones, and public commitments built more strength than private ones",
            ],
            correctIndex: 0,
            explanation:
              "Morning timing and self-selection. The lesson calls the second one lesson 3 wearing lab clothes: autonomy is not a nicety, it is a formation-speed variable.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What is the coaching consequence of the self-selection moderator?",
            options: [
              "Offer the menu and let the client pick the behavior, because autonomy affects formation speed",
              "Assign the behavior most likely to succeed, since success builds competence",
              "Have the client choose between two behaviors the coach has pre-screened",
              "Let the client choose the cue while the coach chooses the behavior",
            ],
            correctIndex: 0,
            explanation:
              "The client picks the behavior. Pre-screening to two options and coach-chosen behaviors both reintroduce the assignment the moderator penalizes.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What early client report signals real automaticity forming?",
            options: [
              "The behavior feels strange to SKIP",
              "The behavior no longer requires a reminder to start",
              "The client reports enjoying the behavior for its own sake",
              "The client extends the behavior beyond its minimum version spontaneously",
            ],
            correctIndex: 0,
            explanation:
              "Effort has migrated from doing to not-doing, which is the automaticity curve flattening. The lesson says to name it to the client as the milestone it is.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "What does the lesson say maintenance is carried by, once novelty fades?",
            options: [
              "Identity and environment",
              "Accountability and tracking",
              "Motivation and self-efficacy",
              "Rewards and social support",
            ],
            correctIndex: 0,
            explanation:
              "Identity and environment carry what remains. It is why the maintenance questions are different questions rather than the starting questions asked again.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What are the maintenance-phase questions this lesson names?",
            options: [
              "What nearly knocked this over this month? Which cue drifted? What does the minimum version look like during travel, illness, a newborn, a deadline season?",
              "How motivated are you now? What results have you seen? What would you like to add next?",
              "Are you still committed? What obstacles remain? How can I help more?",
              "What is working? What is not? What should we change first?",
            ],
            correctIndex: 0,
            explanation:
              "Near-misses, cue drift, and the minimum version under specific named pressures. Each interrogates the STRUCTURE rather than the client's motivation.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "How does the stages model treat relapse?",
            options: [
              "As an expected part of change, with recycling through earlier stages, not an exit from it",
              "As the terminal stage, after which the process must begin again from precontemplation",
              "As evidence the client was staged incorrectly at intake",
              "As a distinct sixth stage requiring its own intervention set",
            ],
            correctIndex: 0,
            explanation:
              "Expected, with recycling. It is the part of TTM the course endorses without qualification, alongside its point that maintenance is its own phase.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What makes a relapse post-mortem coaching rather than moralizing?",
            options: [
              "It analyzes situation and obstacle, and its output is a new plan element rather than a verdict about willpower",
              "It is conducted only after the client has resumed the behavior",
              "It focuses on what went well before the relapse rather than the relapse itself",
              "It is written by the client rather than discussed with the coach",
            ],
            correctIndex: 0,
            explanation:
              "What it examines and what it produces. The analysis feeds straight into a revised WOOP obstacle, a new if-then, or a re-anchored cue.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "Why is a schedule change called the silent killer of habits?",
            options: [
              "It deletes the cues a habit was anchored to without announcing it; the behavior does not fail, its trigger vanishes",
              "It reduces the time available, so the behavior is squeezed out gradually",
              "It disrupts sleep, which lowers the self-control habit formation depends on",
              "It changes the client's environment, which weakens the behavior's associations",
            ],
            correctIndex: 0,
            explanation:
              "Cue deletion without notice. The diagnosis matters because the fix is re-anchoring rather than motivating: choose a new stable cue in the new schedule and rebuild the link deliberately.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What is 'cue drift'?",
            options: [
              "The quiet loss of a habit's anchoring cue, classically via a schedule change",
              "The gradual weakening of a cue's power as the behavior becomes automatic",
              "The client's tendency to perform the behavior at progressively later times",
              "The substitution of one cue for another as circumstances change",
            ],
            correctIndex: 0,
            explanation:
              "Loss of the anchor. It is one of the maintenance questions for exactly this reason: nobody reports it, because from the inside the habit simply stopped.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "Describe Herman and Mack's classic experiments and what they found.",
            options: [
              "Restrained eaters who believed they had blown their limit with a milkshake preload ate MORE afterward, while unrestrained eaters compensated normally",
              "Restrained eaters given a milkshake preload ate less afterward, showing successful compensation",
              "Both restrained and unrestrained eaters overate after a preload, with no group difference",
              "Restrained eaters ate more only when told the preload was high in calories",
            ],
            correctIndex: 0,
            explanation:
              "The group difference is the whole finding: unrestrained eaters compensated normally, and restrained eaters did the opposite of what physiology predicts.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What is the mechanism of the what-the-hell effect?",
            options: [
              "All-or-nothing framing: once the day feels ruined, the rules feel suspended",
              "Physiological rebound: restriction triggers compensatory hunger signalling",
              "Emotional regulation: distress after a lapse is soothed by the lapsed behavior",
              "Loss of self-efficacy: a lapse lowers belief in capability, which reduces effort",
            ],
            correctIndex: 0,
            explanation:
              "Framing, not physiology. That is why the countermeasure is a pre-negotiated rule that denies the day the status of 'ruined' in the first place.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "Why does this program treat strict streak-counting warily?",
            options: [
              "A streak converts one miss into ruin by design",
              "Streaks focus the client on the count rather than the behavior's benefit",
              "Streaks are external motivation, which the SDT evidence does not favor",
              "Streaks encourage the minimum version over the full version",
            ],
            correctIndex: 0,
            explanation:
              "It builds the what-the-hell effect into the tracking. The miss rule and a streak counter are pulling in opposite directions on the same event.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "How does the course label the two-day rule?",
            options: [
              "Consistent with Lally's missed-day finding, but coaching convention rather than tested protocol",
              "A tested protocol with randomized support in habit-formation trials",
              "Lore, contradicted by the evidence on missed days",
              "A clinical guideline adopted from relapse-prevention research",
            ],
            correctIndex: 0,
            explanation:
              "Consistent-but-untested, and the lesson says so explicitly because a program that flags lore in lesson 5 owes the same label here.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What does a monthly self-review consist of, per this lesson?",
            options: [
              "Wins, near-misses, and one plan revision",
              "Wins, obstacles, and a renewed commitment",
              "Metrics reviewed against targets, with adjustments to each",
              "A full re-run of the WOOP sequence on the original wish",
            ],
            correctIndex: 0,
            explanation:
              "Three items, and the third is what makes it a review rather than a report. The lesson calls it the single highest-leverage structure in the program for self-coaching.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What does the lesson say the review cadence converts?",
            options: [
              "Every failure into curriculum",
              "Every intention into a contingent plan",
              "Every habit into an identity",
              "Every setback into a smaller goal",
            ],
            correctIndex: 0,
            explanation:
              "Failure into curriculum. The review is itself a habit, to be designed by lesson 19's rules, which is why the lesson points back at them.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What do follow-up reviews of health-coaching trials suggest about maintenance of gains?",
            options: [
              "Roughly half to three-quarters show at least partial maintenance at six months or beyond, with many studies underpowered",
              "Nearly all show full maintenance at six months, with gains growing thereafter",
              "Fewer than a quarter show any maintenance past three months",
              "Maintenance has not been studied systematically in the coaching literature",
            ],
            correctIndex: 0,
            explanation:
              "Half to three-quarters, partial, and many studies underpowered. The lesson's summary is exact: maintenance is real and it is not automatic.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "What is 'recycling' in TTM's vocabulary?",
            options: [
              "Looping back through earlier stages on the way to durable change",
              "Reusing a previously successful plan for a new behavior",
              "Returning to a behavior after abandoning it entirely",
              "Alternating between two target behaviors to prevent fatigue",
            ],
            correctIndex: 0,
            explanation:
              "Looping back through stages. It is the model's formal way of saying relapse is inside the process rather than outside it.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "A client's habit collapsed after their team moved to a new office. Which diagnosis and fix does the course prescribe?",
            options: [
              "Cue drift, fixed by choosing a new stable cue in the new environment and rebuilding the link deliberately",
              "Lost motivation, fixed by returning to evoking to re-establish the client's why",
              "The what-the-hell effect, fixed by reciting the miss rule",
              "Insufficient minimum version, fixed by lowering the bar for busy periods",
            ],
            correctIndex: 0,
            explanation:
              "A move deletes anchors. Nothing about the client's motivation changed, which is why treating it as a motivation problem wastes the session.",
            sourceLessonSlug: "maintenance-and-relapse",
          },
          {
            prompt: "A client sets 'run three times a week' and fails for a month. Which single change does the habit-design lesson suggest first?",
            options: [
              "Anchor a specified minimum version to a stable existing cue, rather than a weekly frequency target",
              "Reduce the target to twice a week to rebuild confidence",
              "Add a tracking app so the frequency becomes visible",
              "Convert it to a learning goal about finding times that work",
            ],
            correctIndex: 0,
            explanation:
              "A weekly frequency has no cue, so nothing fires on any given day. Anchoring plus a minimum that counts is the first structural fix; reducing the target changes the number without adding a trigger.",
            sourceLessonSlug: "habit-design",
          },
          {
            prompt: "Which pairing correctly matches a technique with the problem it solves?",
            options: [
              "Goal setting names the destination; implementation intentions close the intention-action gap; mental contrasting supplies the fuel; habit design engineers the repetition",
              "Goal setting supplies the fuel; implementation intentions name the destination; habit design closes the intention-action gap; mental contrasting engineers repetition",
              "Mental contrasting names the destination; goal setting closes the intention-action gap; implementation intentions supply the fuel; habit design sets the horizon",
              "Implementation intentions name the destination; habit design supplies the fuel; goal setting engineers repetition; mental contrasting closes the gap",
            ],
            correctIndex: 0,
            explanation:
              "That is the section's architecture in one line, and it is why the lessons run in that order: destination, then the gap, then the fuel, then the engineering.",
            sourceLessonSlug: "goal-setting",
          },
          {
            prompt: "A coach writes a client's if-then plan for them because the client is short on time. Which moderator does this risk?",
            options: [
              "Motivation for the underlying goal, since a plan the client did not author may sit on a goal they do not own",
              "The contingent format, since coach-written plans tend to be less specific",
              "Rehearsal, since the client will not have said the plan aloud",
              "None; the moderators concern the plan's structure rather than its authorship",
            ],
            correctIndex: 0,
            explanation:
              "Implementation intentions amplify existing motivation and do not create it. A coach-authored plan risks being machinery bolted to a goal the client has not made theirs.",
            sourceLessonSlug: "implementation-intentions",
          },
          {
            prompt: "Which is the strongest evidence claim a coach can make about planning techniques from this section?",
            options: [
              "Implementation intentions are the best-evidenced single self-regulation technique here, at d = 0.36 across 642 tests",
              "WOOP is the best-evidenced technique here, since it combines two evidenced components",
              "Goal-setting theory is the best-evidenced, given four decades and hundreds of studies in health behavior",
              "Mental contrasting is the best-evidenced, given two decades of physiological measurement",
            ],
            correctIndex: 0,
            explanation:
              "642 tests with a tight interval. Goal-setting theory's replication record is in organizational and lab settings, and combining two components does not sum their evidence.",
            sourceLessonSlug: "implementation-intentions",
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
      slug: "quiz-the-session",
      title: "26 · Knowledge check: the session",
      section: "Section 4 · The session",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What four-part structure does the NBHWC content outline give the coaching session?",
            options: [
              "Preparation before the session, a deliberate opening, focused work, and closure with commitments",
              "Assessment of current behavior, collaborative goal setting, structured intervention, and outcome evaluation",
              "Rapport building, education, planning, and homework assignment",
              "Check-in, review of metrics, problem solving, and scheduling",
            ],
            correctIndex: 0,
            explanation:
              "Preparation, opening, focused work, closure with commitments, all inside the scope and ethics rails from WELL-00. Assessment-and-intervention is the clinical model MI deliberately departs from.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What are the outline's first competencies, before the session begins?",
            options: [
              "Review materials, eliminate distractions, become mindful and present",
              "Confirm the client's consent, review their intake form, and set an agenda",
              "Check the previous session's notes and prepare three open questions",
              "Verify scope boundaries and confirm no referral triggers are outstanding",
            ],
            correctIndex: 0,
            explanation:
              "Materials, distractions, presence. The lesson's framing matters: preparation is specified as a craft behavior, not left as a virtue.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "Why does the outline treat the coach's calm state as load-bearing?",
            options: [
              "It helps the client become calm and receptive, which fosters the self-awareness the method depends on",
              "It prevents the coach from reacting defensively when a client discloses something difficult mid-session",
              "It models the regulation skills the client is being asked to build",
              "It allows the coach to notice change talk that would otherwise be missed",
            ],
            correctIndex: 0,
            explanation:
              "State transfer, and specifically toward the client's self-awareness. That is why it appears as a competency rather than as advice about professionalism.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What do the early-session competencies center on?",
            options: [
              "Exploring the client's values, vision, purpose, and priorities, and returning to them later to elicit motivation",
              "Establishing the written coaching agreement, the fee schedule, and the session logistics for the engagement",
              "Assessing the client's readiness stage and matching the conversation to it",
              "Reviewing the client's health history and current clinical involvement",
            ],
            correctIndex: 0,
            explanation:
              "Values, vision, purpose, priorities, revisited across sessions as a motivational resource. Logistics appear in the outline too, but not as the opening's center.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What question does the lesson offer for the opening's focusing move?",
            options: [
              "'Of everything on your plate, what would make today worth it?'",
              "'What would you like to work on today?'",
              "'How did last week's commitment go?'",
              "'What is the most important change you could make right now?'",
            ],
            correctIndex: 0,
            explanation:
              "It offers the client the whole territory and asks them to choose by value. The check-in on last week's commitment happens first and separately.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "Who sets the agenda, and in what form?",
            options: [
              "The client picks; the coach may offer a menu, never a syllabus",
              "The coach proposes and the client approves before work begins",
              "The client and coach negotiate a shared agenda item by item",
              "The agenda follows the sequence established in the coaching agreement",
            ],
            correctIndex: 0,
            explanation:
              "Menu, not syllabus. It is the focusing task from lesson 12 in its concrete session form, and the phrase is worth keeping because it names exactly how much the coach may shape.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What does a workable session's middle usually complete?",
            options: [
              "One honest loop: evoke, then plan",
              "Two loops: one on the client's priority and one on the coach's observation",
              "A full pass through all four MI tasks",
              "As many loops as the session length permits",
            ],
            correctIndex: 0,
            explanation:
              "One loop, done well. The course's standard is explicit that one honest evoke-then-plan cycle beats three rushed ones.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What does the 'evoke' half of the session loop consist of?",
            options: [
              "Why this, why now, with change talk elaborated",
              "Assessment of the client's current behavior and its obstacles",
              "Review of what has and has not worked since the last session",
              "Exploration of the client's values before any behavior is named",
            ],
            correctIndex: 0,
            explanation:
              "Why this and why now, with the change talk elaborated using lesson 11's craft. Values exploration belongs to the opening; assessment is not an MI move.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What does the 'plan' half consist of?",
            options: [
              "A goal made specific, an if-then or WOOP made contingent, and a habit anchor chosen",
              "A written agreement signed by the client before the session closes",
              "A set of weekly numerical targets, with the metrics the coach will monitor between sessions",
              "A menu of options for the client to consider before the next session",
            ],
            correctIndex: 0,
            explanation:
              "Three concrete outputs, drawn from lessons 15 through 19. Monitoring targets and written agreements are administration; deferring the choice defeats the loop.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "Which session logistics does the outline name, and how does the lesson characterize them?",
            options: [
              "Expectations, responsibilities, and time management; they sound bureaucratic until they are missing",
              "Fees, scheduling, and cancellation policy; they belong to the coaching agreement rather than the session",
              "Note-taking, recording consent, and file retention; they are ethics rather than craft",
              "Session length, frequency, and duration of engagement; they are set once at intake",
            ],
            correctIndex: 0,
            explanation:
              "Expectations, responsibilities, time management. The lesson's phrasing is the point: unglamorous items whose absence is what you notice.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "How does a session close, per this lesson?",
            options: [
              "The client states what they are taking, in their own words, with its when and its minimum version",
              "The coach summarizes the plan in full and confirms that the client agrees to each element of it",
              "The coach assigns the commitment and schedules the next session",
              "The client rates their confidence in the plan on a ten-point scale",
            ],
            correctIndex: 0,
            explanation:
              "The client's own words, plus the when and the minimum version. A coach-delivered summary the client agrees to is a different and weaker thing.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What does the coach hand the client on the way out, and from which lesson?",
            options: [
              "A collecting summary, from lesson 11, handing them their own change talk",
              "A written plan document, from lesson 16, so the if-then can be rehearsed",
              "A complex affirmation, from lesson 9, naming the strength the session revealed",
              "A review schedule, from lesson 20, so the cadence is established",
            ],
            correctIndex: 0,
            explanation:
              "The collecting summary. Its selective nature is exactly what makes it a closing instrument: the client leaves carrying their own case for change.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What three things go in the coach's notes after a session?",
            options: [
              "What was committed, which obstacle the plan covers, and what to check on at the next opening",
              "The client's stated goal, their confidence rating, and the agreed review date",
              "Change talk observed, sustain talk observed, and the coach's own X-lines from the session audit",
              "The session's focus, the tools used, and the time spent on each",
            ],
            correctIndex: 0,
            explanation:
              "Commitment, obstacle coverage, and the next opening's check-in. Each note exists to make the NEXT session work, which is what distinguishes coaching notes from a session log.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "Why does skipping the opening check-in to save time cost 'exactly the thing the program is for'?",
            options: [
              "The opening check-in IS the review cadence from lesson 20, and what gets reviewed persists",
              "It is the only point at which referral triggers reliably surface",
              "It is where the client's change talk is strongest, before planning begins",
              "It is the competency the NBHWC content outline weights most heavily across its published domains",
            ],
            correctIndex: 0,
            explanation:
              "The check-in is the review structure, and the maintenance lesson called the review cadence the single highest-leverage structure in the program. Cutting it cuts maintenance.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What is a 'one-loop session' as this course defines it?",
            options: [
              "The working standard: one honest evoke-then-plan cycle done well beats three rushed ones",
              "A session deliberately confined to a single target behavior across its entire length",
              "A session in which the coach uses each OARS skill exactly once",
              "A session that returns to the same topic it opened with",
            ],
            correctIndex: 0,
            explanation:
              "It is a quality standard about the cycle, not a restriction on topics or a checklist of skills.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "What does autonomy-supportive language offer?",
            options: [
              "Choice, rationale, and acknowledgment of the client's perspective",
              "Encouragement, reassurance, and confidence in the client's ability",
              "Information, options, and the coach's professional recommendation",
              "Freedom from deadlines, targets, and external accountability",
            ],
            correctIndex: 0,
            explanation:
              "Three components. Note that offering a recommendation is not among them, and that autonomy support is not the absence of structure.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "Which is the autonomy-supportive version?",
            options: [
              "'You could anchor it to the school run or to lunch; which fits how your days actually go?'",
              "'You need to do this in the morning.'",
              "'Most people in your situation find that mornings work best, so that is where I would start.'",
              "'Would it be fair to say mornings are your best option?'",
            ],
            correctIndex: 0,
            explanation:
              "Real options plus a question with more than one right answer. The third is a recommendation dressed as data, and the fourth is a rhetorical question with one right answer, which the lesson names as a quiet controller.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "Name the four quiet controllers this lesson tells you to strip.",
            options: [
              "'Should', 'have to', 'just', and rhetorical questions with one right answer",
              "'Never', 'always', 'must', and questions beginning with 'why'",
              "'Try', 'maybe', 'a bit', and questions with implied criticism",
              "'Should', 'could', 'would', and any question the coach knows the answer to",
            ],
            correctIndex: 0,
            explanation:
              "Each converts a choice into a command while sounding conversational, which is what makes them quiet. 'Could' is the opposite: it is the word that restores the choice.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "Why does the SDT literature make autonomy support the priority target?",
            options: [
              "The intervention effects ride on autonomous motivation, and autonomy support is where autonomous motivation comes from",
              "Autonomy is the need clients most often report as unmet when they are surveyed at intake",
              "Autonomy support is the easiest of the three to train in practitioners",
              "Autonomy support is the only one of the three the coaching scope permits",
            ],
            correctIndex: 0,
            explanation:
              "It is a mediation argument: the meta-analysis found effects travelled through autonomous motivation, and autonomy-supportive language is its source.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What does competence-supportive language do?",
            options: [
              "Right-sizes challenges and reflects progress as evidence about the person",
              "Reassures the client that setbacks are normal and expected",
              "Explains the mechanism behind the behavior so the client understands why it works",
              "Compares the client's progress with typical results for similar clients",
            ],
            correctIndex: 0,
            explanation:
              "Right-sizing plus evidence. The lesson's example makes the evidence explicit: 'three weeks of the minimum version through a work crunch; that's the consistency the curve is built on.'",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "Which earlier skill does competence-supportive language overlap with, and why?",
            options: [
              "Complex affirmations from lesson 9; the skills converge because the needs do",
              "Collecting summaries from lesson 11; both gather evidence across a conversation",
              "Learning goals from lesson 15; both address missing strategy",
              "Reflections from lesson 10; both offer the coach's understanding for correction",
            ],
            correctIndex: 0,
            explanation:
              "Both name what the client's action reveals about them. The lesson's observation is that the skills converge because the underlying needs do.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What is relatedness-supportive language mostly made of?",
            options: [
              "Presence: accurate reflections, non-contingent regard, and honesty over cheerleading",
              "Warmth: encouragement, enthusiasm, and visible investment in the client's success",
              "Availability: responsiveness between sessions and flexibility about scheduling",
              "Disclosure: the coach sharing relevant personal experience to build connection",
            ],
            correctIndex: 0,
            explanation:
              "Presence rather than performance. The lesson adds the reason: clients detect performed warmth, and its detection costs more than its absence would have.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "How is the X-line audit conducted?",
            options: [
              "Mark each coach line A, C, or R when it supports a need, and X when it controls, judges, or rescues",
              "Mark each client line as change talk or sustain talk, then compute the ratio across the session",
              "Mark each coach line as a question, reflection, affirmation, or summary",
              "Mark each exchange as need-supportive or need-thwarting overall",
            ],
            correctIndex: 0,
            explanation:
              "Line by line, coded by which need it supports or by X for the three failure modes: controlling, judging, rescuing.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "Where do X-lines cluster, and what is the counter-plan?",
            options: [
              "Right after the client discloses a struggle; the counter is an if-then on the coach: 'If a client shares a failure, then my first sentence is a reflection'",
              "At the start of sessions, before engagement is established; the counter is a longer opening",
              "During planning, when the coach's expertise is most relevant; the counter is deferring plans to the client",
              "At session close, under time pressure; the counter is reserving the last five minutes for the client's commitment",
            ],
            correctIndex: 0,
            explanation:
              "The disclosure moment is where the fixing reflex fires. The counter is elegant because it uses the section's own tool on the coach rather than the client.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What are the three things an X-line does?",
            options: [
              "Controls, judges, or rescues",
              "Interrupts, advises, or reassures",
              "Prescribes, evaluates, or minimizes",
              "Directs, questions, or corrects",
            ],
            correctIndex: 0,
            explanation:
              "Controlling, judging, rescuing. Rescuing is the one coaches miss in their own transcripts, because it feels like kindness while removing the client's agency.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What is 'non-contingent regard'?",
            options: [
              "Warmth that does not depend on the client's performance; the relatedness need's daily fuel",
              "Regard offered without any expectation that the client will continue the engagement afterward",
              "Acceptance of the client's stated goals without evaluating their feasibility",
              "Consistency of tone across sessions regardless of the coach's own state",
            ],
            correctIndex: 0,
            explanation:
              "Independence from performance is the defining feature. Warmth that arrives with good weeks and departs with bad ones is approval, which the affirmation lesson identified as fragile.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What does controlling language do to motivation?",
            options: [
              "Shifts it from autonomous toward controlled forms, which the maintenance data does not favor",
              "Reduces it in the short term but can raise compliance during supervised periods",
              "Leaves it unchanged while damaging the coaching relationship",
              "Raises it briefly through pressure, then produces a rebound in the opposite direction once the pressure lifts",
            ],
            correctIndex: 0,
            explanation:
              "The shift along SDT's continuum is the mechanism, and maintained behavior is what autonomous motivation predicts. That is why the language matters beyond politeness.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "What quality-of-life effect size does the coaching-outcomes lesson report, and over what window?",
            options: [
              "SMD 0.62 in the short term, within three months",
              "SMD 0.38 in the short term, within three months",
              "SMD 0.62 sustained out to twelve months",
              "SMD 0.41 to 0.72 within three months",
            ],
            correctIndex: 0,
            explanation:
              "0.62 in the short term. The 0.38 figure is self-efficacy, and the 0.41-to-0.72 range is depression out to a year.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What did the diabetes coaching meta-analysis find for HbA1c?",
            options: [
              "A small effect, g = 0.29 (CI 0.18 to 0.40), across twenty trials and 3,222 participants",
              "A moderate effect, g = 0.55 (CI 0.40 to 0.70), across twenty trials and 3,222 participants",
              "A small effect, g = 0.29, but only in the eight trials reaching clinical significance",
              "No significant effect, consistent with Rubak's earlier null for HbA1c",
            ],
            correctIndex: 0,
            explanation:
              "g = 0.29 across all twenty trials, with a clinically significant drop of at least 5 mmol/mol in eight of them. Rubak's earlier null makes this a genuine addition rather than a repetition.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "How many behavior-change techniques did the diabetes trials use on average, and which were most common?",
            options: [
              "A mean of 4.5 techniques, with goal setting and problem solving most often",
              "A mean of 8.2 techniques, with self-monitoring and feedback most often",
              "A mean of 4.5 techniques, with credible source and social reward most often",
              "A mean of 12 techniques, with goal setting and social support most often",
            ],
            correctIndex: 0,
            explanation:
              "4.5 on average, goal setting and problem solving leading. Credible source and social reward appear in the review too, but as the techniques associated with WORSE results.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What was the relationship between the NUMBER of techniques used and effectiveness?",
            options: [
              "Unrelated",
              "Positively related, with each additional technique adding a small increment",
              "Negatively related, with more techniques diluting the intervention",
              "Positively related up to about six techniques, then flat",
            ],
            correctIndex: 0,
            explanation:
              "No relationship at all. The lesson calls this the evidence answer to the stack-more-tools instinct: do a few contingent things well.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "Which two behavior-change techniques were associated with SMALLER HbA1c reductions?",
            options: [
              "Credible source (leaning on authority) and social reward (praise)",
              "Goal setting and problem solving",
              "Self-monitoring and feedback on behavior",
              "Social support and action planning",
            ],
            correctIndex: 0,
            explanation:
              "The two non-contingent ones. The lesson's point is that this is lesson 9's praise-versus-affirmation distinction and lesson 23's autonomy support showing up in glycated hemoglobin.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "Why does the course call credible source and social reward 'the non-contingent ones'?",
            options: [
              "Neither depends on what the client actually did; authority and praise are supplied regardless",
              "Neither is contingent on the coach's fidelity to a protocol",
              "Neither was contingent on trial quality in the review's coding",
              "Neither depends on the client's assessed stage of readiness at the time it is delivered",
            ],
            correctIndex: 0,
            explanation:
              "They arrive independent of the client's own evidence. That is precisely what distinguishes praise from affirmation, and it shows up here on a clinical marker.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "Which four claims does the evidence FORBID, per this lesson?",
            options: [
              "Anxiety benefits, high certainty, persistence past twelve months, and which component carries how much of the effect",
              "Any benefit in chronic illness, self-efficacy gains, depression improvement, and short-term quality of life",
              "Effects on hard clinical markers, effects in cardiovascular populations, and any effect from brief formats",
              "Anxiety benefits, depression benefits, quality-of-life benefits, and behavioral change generally",
            ],
            correctIndex: 0,
            explanation:
              "Anxiety was null; certainty is mostly low or very low; persistence past a year is not well established; and because trials blend techniques, component attribution is genuinely unavailable.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What is 'component attribution,' and what is its status in coaching research?",
            options: [
              "Knowing which ingredient of a blended intervention carries how much of the effect; coaching trials mostly cannot say",
              "Assigning credit for an outcome between the coach and the client's own effort",
              "Determining which of the five pillars a given intervention primarily targeted",
              "Identifying which of the contributing trials carried the most weight in a pooled estimate",
            ],
            correctIndex: 0,
            explanation:
              "It is the unanswered question the blending creates. It is also why the course teaches components with their own evidence rather than relying on coaching-package trials.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What is 'heterogeneity,' and what does it forbid?",
            options: [
              "How much trial results differ from each other; high heterogeneity lowers certainty and forbids one-number summaries",
              "How much trial populations differ from the coach's own clients; it forbids generalizing across settings",
              "How many distinct behavior-change techniques a trial contained; it forbids attributing the pooled effect to any single one of them",
              "How widely effect sizes are distributed within a single trial; it forbids reporting a mean",
            ],
            correctIndex: 0,
            explanation:
              "Between-study variation. It is one of the two reasons Boehmer's certainty ratings came out low, the other being risk of bias.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "State the honest pitch this lesson permits.",
            options: [
              "Coaching reliably beats no help and default advice-giving; effects are modest, real, and compound with time and structure",
              "Coaching transforms health outcomes when delivered with fidelity over sufficient time",
              "Coaching matches clinical intervention for behavior change at a small fraction of the cost per participant",
              "Coaching produces moderate-to-large effects that persist well beyond the intervention period",
            ],
            correctIndex: 0,
            explanation:
              "Both halves again: reliably better than the default, and modest. The lesson adds that the strongest tools are exactly the ones this course drilled.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "Why is 'modest, real, compounding' sufficient for the centenarian frame?",
            options: [
              "A d of 0.3 applied across pillars and held for decades by maintenance structures is a different life",
              "The frame prioritizes safety over magnitude, so small effects are acceptable",
              "Longevity outcomes are measured over decades, where small effects become statistically detectable",
              "The frame targets self-coaching, where effect sizes from professional coaching do not apply",
            ],
            correctIndex: 0,
            explanation:
              "The horizon converts the number. The lesson's phrasing is that the frame makes d = 0.3 decisive rather than underwhelming, without inflating anything.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What is the 'closing discipline' the lesson prescribes?",
            options: [
              "Neither cynicism nor evangelism: carry the effect sizes in your pocket and build programs whose promises match them",
              "Refuse to work with any organization making transformation claims",
              "Correct colleagues who overclaim about outcomes, since the credibility of the whole field is collective",
              "Cite the meta-analyses in all client-facing marketing material",
            ],
            correctIndex: 0,
            explanation:
              "It rejects both available postures. Knowing the numbers is not an argument for dismissing coaching, and it is not permission to sell more than they support.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What is a 'null effect,' and why does the lesson insist on naming them?",
            options: [
              "An effect statistically indistinguishable from zero, like coaching's anxiety outcomes; naming nulls is part of honest claims",
              "An effect that failed to reach statistical significance only because the trial was underpowered to detect it",
              "An effect present at one timepoint and absent at another",
              "An effect that disappeared when compared against an active comparator",
            ],
            correctIndex: 0,
            explanation:
              "Indistinguishable from zero. Anxiety is the course's standing example, and the lesson treats stating it as part of the claim rather than as a caveat.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "What is HbA1c, and why does the lesson call it a hard endpoint?",
            options: [
              "Glycated hemoglobin, the standard marker of blood-glucose control over recent months; it is measured rather than self-reported",
              "A composite index of diabetes self-management behaviors, reported by the client on a validated questionnaire",
              "A measure of insulin sensitivity taken under fasting conditions",
              "A quality-of-life instrument validated in diabetes populations",
            ],
            correctIndex: 0,
            explanation:
              "A laboratory measure of glucose control. Its hardness is why a small effect on it carries more weight than a larger effect on a self-reported scale.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "In the walkthrough, what does the coach do in the five minutes of preparation?",
            options: [
              "Review last session's commitment, close distractions, take one steadying breath",
              "Review the client's full history and prepare an agenda for the session",
              "Draft three open questions and one affirmation to use during the opening",
              "Check the client's tracked data since the last session and note any changes",
            ],
            correctIndex: 0,
            explanation:
              "The outline's three preparation competencies, done in five minutes. The lesson's own label for it: craft, not ceremony.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "In the walkthrough's opening, what affirmation does the coach offer?",
            options: [
              "'Twice, during launch season': simple and true",
              "'You're someone who keeps going when it's hard': complex and generous",
              "'That's excellent progress given everything else': encouraging and warm",
              "'Most people would have stopped entirely': comparative and reassuring",
            ],
            correctIndex: 0,
            explanation:
              "A simple affirmation naming the specific observed fact. The last two are praise, and the complex version would be available but is not what the walkthrough uses here.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What three options were on the walkthrough's focusing menu?",
            options: [
              "Sleep regularity, the stalled morning walks, or the review habit itself",
              "Sleep regularity, nutrition timing, or the stalled morning walks",
              "The review habit, stress management, or the morning walks",
              "Morning walks, evening wind-down, or weekend consistency",
            ],
            correctIndex: 0,
            explanation:
              "Three genuine options including the review habit itself, which is what makes it a menu rather than a token choice between the coach's preferred item and two fillers.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What open question opened the walkthrough's evoking, and what did it produce?",
            options: [
              "'What made the walks matter when they started?': change talk about thinking time, afternoon energy, and identity",
              "'Why did the walks stop?': sustain talk about scheduling pressure, workload, and end-of-day fatigue",
              "'What would it take to restart the walks?': a plan the client had already considered",
              "'How important are the walks to you, one to ten?': a readiness rating to guide the conversation",
            ],
            correctIndex: 0,
            explanation:
              "Asking what made it matter evokes the client's own reasons. Asking why it stopped invites sustain talk, and jumping to what it would take skips evoking entirely.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What complex reflection did the walkthrough's coach offer?",
            options: [
              "'They weren't exercise; they were maintenance for the person you're trying to be'",
              "'The walks gave you energy you didn't expect'",
              "'You miss how you felt on the days you walked'",
              "'It sounds like those walks ended up mattering more to you than you had realized at the time'",
            ],
            correctIndex: 0,
            explanation:
              "It names the value at stake, going past what was said to what was meant. The others stay close to the client's own words, which makes them simple reflections.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "In the walkthrough, why was 'meetings moved into lunch' not accepted as the obstacle?",
            options: [
              "It is outer weather; returned inward it became a coachable belief about the walk being indefensible",
              "It was outside the client's control, so no plan could address it",
              "It was a symptom of the stalled walks rather than the cause of them",
              "It had already been addressed in a previous session's plan",
            ],
            correctIndex: 0,
            explanation:
              "The calendar was weather; the belief that a walk feels indefensible next to a meeting is the client's own and can anchor an if-then.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What if-then plan did the walkthrough produce?",
            options: [
              "'If a meeting request lands on the lunch block, then I propose 1 p.m. before accepting'",
              "'If I miss the lunch walk, then I walk after work instead'",
              "'If my calendar is clear at lunch, then I walk the river loop'",
              "'If I feel the walk is indefensible next to a meeting, then I remind myself why it actually matters'",
            ],
            correctIndex: 0,
            explanation:
              "It fires on the obstacle, with a verifiable action. A plan that fires on a clear calendar addresses the opportunity rather than the obstacle, and an internal reminder is not a verifiable then.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "In the walkthrough, what was the cue, the minimum that counts, and what was recited aloud?",
            options: [
              "The calendar notification; ten minutes; the miss rule",
              "The lunch hour; twenty minutes; the commitment",
              "Leaving the desk; five minutes; the wish",
              "The calendar notification; the full river loop; the if-then plan",
            ],
            correctIndex: 0,
            explanation:
              "Notification as anchor, ten minutes as the minimum version, and the miss rule recited. Note the anchor is a reliably occurring event rather than a time window.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What would Locke note about the walkthrough's plan?",
            options: [
              "The goal is specific and feedback is built in, since the calendar shows the defended block",
              "The goal is challenging rather than easy, which is the theory's core requirement for performance",
              "The goal is a learning goal, appropriate because the strategy was missing",
              "The goal lacks a deadline, which the theory identifies as a condition",
            ],
            correctIndex: 0,
            explanation:
              "Specificity plus built-in feedback, two of goal-setting theory's requirements satisfied by the plan's structure rather than by adding a tracking step.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "How long did the walkthrough session take, and what does the lesson say about it?",
            options: [
              "Under thirty minutes, with every tool from the course used once and nothing performed",
              "About sixty minutes, which the lesson gives as the standard length for a full coaching loop",
              "Under thirty minutes, though a first session would require ninety",
              "About forty-five minutes, most of it spent in the evoking task",
            ],
            correctIndex: 0,
            explanation:
              "Under thirty minutes. The 'nothing performed' clause matters: the section's claim is that the whole toolkit fits inside an ordinary session without theatre.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What is the assignment before the final?",
            options: [
              "Run the full loop on one real wish of your own, in writing",
              "Record a session with a practice client and code it line by line",
              "Complete the WOOP course on this platform before attempting the capstone",
              "Write a summary of the four sections' tools and how they connect",
            ],
            correctIndex: 0,
            explanation:
              "One real wish, in writing, self-coached. The lesson's justification is that the capstone builds on artifacts like it, and self-coaching is the practice environment that never cancels.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "Trace one tool from each section through the walkthrough. Which mapping is correct?",
            options: [
              "Section 1 habit rules; Section 2 OARS and change talk; Section 3 WOOP and the contingent if-then; Section 4 the session anatomy",
              "Section 1 the stages model; Section 2 the four tasks; Section 3 goal setting; Section 4 need-supportive language",
              "Section 1 SDT; Section 2 reflections; Section 3 mental contrasting; Section 4 the coaching agreement",
              "Section 1 effect sizes; Section 2 the fixing reflex; Section 3 habit design; Section 4 the closing summary",
            ],
            correctIndex: 0,
            explanation:
              "Minimum version and miss rule from Section 1, evoking and the collecting summary from Section 2, WOOP and the if-then from Section 3, and the session anatomy holding it together.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "What does the course mean by 'self-coaching'?",
            options: [
              "Running the full coaching loop on yourself, in writing; the practice environment that never cancels",
              "Applying the course's tools to yourself informally, without the structure of a formal session",
              "Reviewing your own coaching sessions to identify improvement areas",
              "Coaching without a client while training, using imagined scenarios",
            ],
            correctIndex: 0,
            explanation:
              "The full loop, in writing, on yourself. The phrase 'never cancels' is the practical argument: it is the only practice partner guaranteed to show up.",
            sourceLessonSlug: "putting-it-together",
          },
          {
            prompt: "A coach cuts the opening check-in and the closing commitment to fit a busy schedule. Which two structures have they removed?",
            options: [
              "The review cadence and the client's own-words commitment, which are the maintenance and ownership structures respectively",
              "The engaging task and the planning task, which are two of MI's four tasks",
              "The focusing menu and the collecting summary, which are the client's agenda controls",
              "Preparation and note-taking, which are the outline's bracketing competencies",
            ],
            correctIndex: 0,
            explanation:
              "The check-in IS the review cadence, and the closing commitment in the client's own words is what makes the plan theirs. Cutting both leaves a session that changes nothing between sessions.",
            sourceLessonSlug: "session-structure",
          },
          {
            prompt: "A coach's transcript shows encouragement after every client statement and no reflections following disclosures of struggle. What does the X-line audit reveal?",
            options: [
              "Rescuing, clustered exactly where the fixing reflex fires, with praise substituting for affirmation",
              "Controlling language, since encouragement implies an expected direction",
              "Insufficient relatedness support, since presence has been replaced by scheduling",
              "Competence support delivered without right-sized challenge",
            ],
            correctIndex: 0,
            explanation:
              "Rescuing is the X-line coaches miss in their own work because it feels like kindness. Its location, right after a disclosure, is the tell the audit is designed to surface.",
            sourceLessonSlug: "need-supportive-language",
          },
          {
            prompt: "A colleague proposes adding four more behavior-change techniques to a coaching program to improve results. What does the evidence say?",
            options: [
              "The number of techniques was unrelated to effectiveness; doing a few contingent things well is the evidenced move",
              "Adding techniques improves results up to about six, after which returns diminish",
              "Adding techniques improves results only where practitioner fidelity is high",
              "The evidence has not addressed technique count, so the proposal is untested",
            ],
            correctIndex: 0,
            explanation:
              "The diabetes review coded every trial against the taxonomy and found no relationship with count. It also found two specific techniques associated with worse results, which is a stronger reason to choose carefully than to add.",
            sourceLessonSlug: "coaching-outcomes-honest",
          },
          {
            prompt: "Which sequence correctly orders the walkthrough's session?",
            options: [
              "Preparation, opening with check-in and menu, evoking, obstacle returned inward, planning, closing commitment",
              "Preparation, evoking, opening with menu, planning, obstacle identification, closing commitment",
              "Opening with menu, preparation, planning, evoking, obstacle identification, closing summary",
              "Preparation, opening, planning, evoking, closing commitment, coach's notes",
            ],
            correctIndex: 0,
            explanation:
              "Evoking precedes planning, and the obstacle work sits inside planning after the why is established. Any order putting planning before evoking is the commonest MI failure mode.",
            sourceLessonSlug: "putting-it-together",
          },
        ],
      },
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
