import type { AuthoredCourse } from "./authored-course";

// WELL-06 · Mental and Emotional Well-being (plans/67). Deliberately placed late in the program
// because it works closest to the therapy boundary, so it assumes WELL-00's scope training and
// re-applies it throughout.
//
// EVERY factual claim traces to the verified dossier (plans/future-courses/health/dossiers/
// 06-mental-emotional/06-mental-emotional.md §3-4). Notable verification outcomes:
// - Galante 2023 (passive controls, SMD -0.32, high confidence) and Goyal 2014 (active controls,
//   "no evidence that meditation programs were better than any active treatment") are taught as
//   a pair. This is WELL-04's control-group lesson recurring with different numbers.
// - Perplexity's occupational meta (stress SMD 0.72) was unverifiable AND roughly double every
//   verified estimate, so it is excluded rather than averaged in.
// - Gemini's ranked comparisons ("exceeds the survival impact of smoking cessation") overstate
//   Holt-Lunstad, who says "comparable with" established risk factors. Taught as comparable.
// - Crisis content is anchored on 988 as a verified live resource, with no claim to quote any
//   protocol verbatim, and instructs coaches to publish their OWN jurisdiction's line.
export const WELL_MENTAL_WELLBEING_COURSE: AuthoredCourse = {
  title: "Wellness Coaching 06: Mental and Emotional Well-being",
  description:
    "The pillar that runs closest to the therapy line, placed late on purpose. What the mindfulness evidence actually shows once you demand an active control, why social connection may be the highest-leverage target in the whole program, where coaching ends and psychotherapy begins in practice rather than in branding, and how to handle the conversation no coach wants but every coach should be ready for.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-hardest-boundary",
      title: "1 · The pillar closest to the line",
      section: "Section 1 · The territory and its edge",
      body: `This course comes sixth for a reason. Everything in it sits within arm's reach of licensed psychotherapy, and a coach who arrives here without WELL-00's scope training will cross the line while believing they are being helpful.

**Why the boundary is genuinely hard here.** In movement and nutrition, the out-of-scope acts are concrete: writing a meal plan, prescribing a program. In this pillar, the out-of-scope act looks exactly like a good conversation. A client cries. You listen well. They tell you about their childhood. You ask a thoughtful question. Nothing about that moment announces itself as treatment, and yet the difference between skilled coaching and unlicensed psychotherapy can turn on what you do in the next ten minutes.

**What makes it worth doing anyway.** Stress, mood, and connection are not optional add-ons to a health program; they are where most of the adherence failures in every other pillar actually originate. The client who cannot sustain the walking habit is often not short of information about walking. And the evidence in this course contains what may be the single highest-leverage finding in the entire program, which arrives in lesson 8.

**The frame that keeps you safe and useful.** Coaching in this domain is **present and future focused**, aimed at goals, skills, and behavior, in people who are not in crisis and not being treated for a disorder by you. Psychotherapy is oriented to diagnosing and treating conditions, and frequently to processing the past. You can work with emotion. You cannot treat it.

**And the honesty commitment specific to this course.** The mindfulness literature is the most oversold body of evidence a wellness coach will encounter. This course quotes what it actually shows, including the finding most enthusiasts never mention, because a coach who repeats inflated claims here loses the credibility they need for the parts that genuinely hold up.

:::reveal Why does this course sit sixth in the program rather than earlier? ||| Because it works closest to the therapy boundary, so it assumes and re-applies WELL-00's scope training. Everything here is within arm's reach of licensed psychotherapy, and the out-of-scope act looks like an ordinary good conversation rather than announcing itself.

:::reveal State the frame that separates coaching from psychotherapy in this domain. ||| Coaching is present and future focused, aimed at goals, skills, and behavior, with people who are not in crisis and not being treated by you for a disorder. Psychotherapy diagnoses and treats conditions and often processes the past. A coach can work with emotion but cannot treat it.

## Vocabulary
- **Present and future focus**: the temporal orientation that keeps coaching distinguishable from therapy, working from where a client is toward what they want.
- **Working with emotion versus treating it**: exploring feelings as they bear on goals and behavior, as distinct from remediating a psychological condition.
- **Scope creep**: the gradual drift from coaching into treatment, most likely here because the transition is invisible in the moment.
- **Adherence origin**: the observation that failures in other pillars usually begin in this one, which is why the domain earns its place.`,
    },
    {
      slug: "what-a-coach-may-do",
      title: "2 · What a coach may actually do with emotion",
      section: "Section 1 · The territory and its edge",
      body: `Having named the risk, here is the substantial and genuinely useful territory on your side of it.

**Skills, taught as skills.** Mindfulness and attention practices, breathing techniques, relaxation, structured problem-solving, communication strategies, and values clarification are all teachable as self-regulation tools. They come from the same research lineage as clinical interventions, which is exactly why they work, and offering them as skills training to a non-clinical client is not treatment.

**Emotion in service of goals.** You can ask what comes up when a client imagines saying no at work, what the dread before a Monday is made of, what it costs them to keep the promise they keep breaking. That is emotional territory and it is squarely coaching, because the destination is the behavior and the goal, not the diagnosis and not the origin.

**Values and meaning work.** Helping someone articulate what matters and align behavior with it is one of the oldest coaching moves and one of the most durable. It also feeds directly into WELL-01's autonomy support: a change anchored to a real value is a change with its own engine.

**Connection as a coachable target.** Lesson 8 makes the case with numbers, but note the scope point now: helping someone build and maintain relationships is behavior change like any other, and it needs no clinical license.

**What you do not do.** Diagnose anything. Deliver named psychotherapies, which the NBHWC scope lists explicitly as Cognitive Behavioral Therapy, Eye Movement Desensitization and Reprocessing, Solution Focused Therapy, Dialectical Behavioral Therapy, and Internal Family Systems Therapy. Process trauma. Treat a condition, whatever you call the service. Or hold a client in a domain that needs care you cannot provide because the relationship feels good to both of you, which is the failure mode that hurts people most quietly.

:::reveal Name four things a coach may legitimately do in the emotional domain. ||| Teach self-regulation skills such as mindfulness, breathing, relaxation, problem-solving, and communication. Explore emotions as they bear on goals and behavior. Do values and meaning work. Coach social connection as a behavior. All present-focused, none diagnostic.

:::reveal What is the quietest way a coach harms a client on this pillar? ||| By keeping them, holding a client in a coaching relationship that feels good to both parties while they need clinical care nobody is arranging. It does not feel like a violation in the moment, which is exactly why it goes unnoticed.

## Vocabulary
- **Skills training**: teaching a self-regulation technique as a tool, distinct from delivering it as treatment for a condition.
- **Values clarification**: articulating what matters to a client so behavior can be anchored to it; coaching's oldest durable move.
- **Named exclusions**: the specific therapies the NBHWC scope lists as outside coaching: CBT, EMDR, Solution Focused Therapy, DBT, and Internal Family Systems.
- **Holding a client**: retaining someone in coaching when they need clinical care, the pillar's most common quiet harm.`,
    },
    {
      slug: "the-gray-zones",
      title: "3 · The gray zones, and the test that resolves them",
      section: "Section 1 · The territory and its edge",
      body: `The clear cases are easy. Here are the ones that actually catch people, and the single question that sorts them.

**"Trauma-informed coaching."** The phrase has two legitimate meanings and one dangerous one. Legitimately, it means understanding that trauma shapes behavior and conducting yourself accordingly: not pressing, not re-traumatizing, recognizing when to stop. Dangerously, it means processing trauma with a client, which is treatment regardless of the adjective in front of your job title.

**"Anxiety coaching" and "depression coaching."** Marketing a service by a condition's name implies you treat the condition. Even where the work stays behavioral, the framing invites clients who need care to buy coaching instead, which is a harm the coach then has to notice and undo.

**The client who improves.** Someone works with you on stress and their mood lifts substantially. Nothing improper happened, and this is genuinely common, because behavior change affects mood. The trap is the conclusion: that you treat mood, that you should market it, that the next person with a diagnosis is yours to take. One person's improvement is not an indication.

**The functional test, which WELL-00 introduced and this pillar depends on.** Regulators evaluate **what you actually did**, not what you named it. Deep emotional processing labeled coaching can be assessed as the practice of psychotherapy. So the question is never "what do I call this?" but "if a licensing board read a transcript of this session, what would they see me doing?"

**A practical version of that test.** Ask yourself three things. Am I working toward a goal the client set, or toward relieving a symptom? Am I in the present and future, or excavating the past? Would this activity appear in a psychotherapy manual? Two out of three pointing the wrong way means stop and refer, whatever the service is called.

:::reveal Give the legitimate and the dangerous readings of 'trauma-informed coaching'. ||| Legitimately: understanding that trauma shapes behavior and conducting yourself accordingly, without pressing or re-traumatizing, and recognizing when to stop. Dangerously: actually processing trauma with a client, which is treatment no matter what the service is called.

:::reveal Give the three-question practical version of the functional test. ||| Am I working toward a client-set goal or toward relieving a symptom? Am I present and future focused, or excavating the past? Would this activity appear in a psychotherapy manual? Two answers pointing the wrong way means stop and refer.

## Vocabulary
- **Functional test**: the regulatory principle that what you DO determines what law applies, not what you call the service.
- **Condition-named service**: marketing coaching by a diagnosis, like anxiety coaching, which implies treatment and attracts clients who need care.
- **Trauma-informed**: conducting coaching with awareness of how trauma shapes behavior, which is legitimate; processing trauma, which is not.
- **Symptom relief versus goal pursuit**: the orientation difference that most reliably separates treatment from coaching in a transcript.`,
      recallContent: [
        {
          prompt: "A prospective client asks if you offer 'anxiety coaching' because their therapist has a six-week waitlist. What do you do?",
          answer:
            "Do not sell a service named for their condition, and do not become the substitute for the care they are already queued for. Offer what is genuinely yours (present-focused behavior, sleep, movement, connection, skills practice) while they wait, be explicit that it is not treatment for anxiety, and make sure the therapy appointment stays on the calendar.",
        },
      ],
    },

    // ── Section 2 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "mindfulness-vs-passive",
      title: "4 · Mindfulness, measured against doing nothing",
      section: "Section 2 · Mindfulness, honestly",
      body: `Mindfulness is the most-recommended intervention in wellness and the most oversold. Two studies settle what it actually does, and this lesson covers the friendlier one.

**The best-designed evidence against passive controls.** A pre-registered individual-participant-data meta-analysis pooled raw data from 13 randomized trials, 2,371 participants across eight countries, comparing in-person, expert-defined mindfulness-based programmes with **passive** control groups in non-clinical settings. Distress fell, with a standardized mean difference of **−0.32 (95 percent confidence interval −0.41 to −0.24)** at one to six months after the programme, with no heterogeneity between trials, and the authors rate confidence in that primary result as **high** (Galante et al., 2023).

**Why individual-participant data matters.** Most meta-analyses pool published summary numbers. This one obtained the raw participant records and re-analysed them, which is the strongest form the design takes: it removes a layer of reporting distortion and allows questions summary data cannot answer.

**And it answered one of those questions in a way that should change your pitch.** The analysis looked for effect modification by baseline distress, gender, age, education level, and dispositional mindfulness, and found **no clear indication that any of them modified the effect**. So the common sales line, that mindfulness is especially suited to some particular kind of person, does not have support here. It worked at roughly the same modest size across the people studied.

**What this licenses.** Group-based, teacher-led mindfulness programmes reduce distress in community adults who volunteer for them, by a small-to-moderate amount, compared with receiving nothing. That is a real finding, honestly stated. Lesson 5 asks the harder question.

:::reveal Give the Galante result with its design and its confidence rating. ||| An individual-participant-data meta-analysis of 13 trials and 2,371 participants across eight countries: mindfulness-based programmes versus passive controls reduced psychological distress by SMD −0.32 (−0.41 to −0.24) at one to six months, with no heterogeneity and high confidence in the primary result.

:::reveal What did the analysis find about who benefits most, and why does it matter commercially? ||| No clear effect modification by baseline distress, gender, age, education, or dispositional mindfulness. It matters because the common pitch that mindfulness suits a particular kind of person has no support here: it worked at about the same modest size across those studied.

## Vocabulary
- **Individual participant data (IPD) meta-analysis**: pooling raw participant records rather than published summaries; the strongest meta-analytic design.
- **Passive control**: a comparison group receiving nothing, such as a waitlist, which leaves expectation and attention inside the measured effect.
- **Effect modification**: whether an intervention works differently for different kinds of people; tested here and not found.
- **Psychological distress**: the composite of unpleasant mental and emotional experience, including anxiety and depression, used as the primary outcome.

## Sources
Galante, J., Friedrich, C., Dalgleish, T., Jones, P. B., & White, I. R. (2023). Individual participant data systematic review and meta-analysis of randomised controlled trials assessing adult mindfulness-based programmes for mental health promotion in non-clinical settings. *Nature Mental Health, 1*(7), 462-476. https://pubmed.ncbi.nlm.nih.gov/37867573/`,
    },
    {
      slug: "mindfulness-vs-active",
      title: "5 · Mindfulness, measured against something real",
      section: "Section 2 · Mindfulness, honestly",
      body: `WELL-04 taught that the comparator decides the number. This is that lesson's most consequential application, and it is the finding the mindfulness industry does not put on the poster.

**The study.** A systematic review and meta-analysis restricted itself to randomized trials with **active** controls, that is, trials where the comparison group also received something real: health education, exercise, progressive muscle relaxation, medication, other behavioral therapies. Forty-seven trials, 3,515 participants (Goyal et al., 2014).

**What survived.** Mindfulness meditation programmes showed **moderate evidence** of improvement in anxiety (effect size 0.38 at eight weeks, falling to 0.22 at three to six months), depression (0.30 at eight weeks, 0.23 at three to six months), and pain (0.33). Stress, distress, and mental-health-related quality of life showed **low** evidence of improvement. For positive mood, attention, substance use, eating habits, sleep, and weight, the review found low evidence of no effect or insufficient evidence of any effect.

**And the sentence that matters most.** "We found no evidence that meditation programs were better than any active treatment (ie, drugs, exercise, and other behavioral therapies)."

**Read the two lessons together.** Against nothing, mindfulness produces a real, modest, high-confidence reduction in distress. Against anything else real, it has not been shown to be better. Those two statements are both true and they are not in conflict; they describe a decent psychosocial option, not a superior one. A coach who understands that can recommend mindfulness honestly, which turns out to be the version clients actually keep doing.

**The practical implication for a client conversation.** If someone hates meditating, the evidence gives you no reason to insist. Exercise, structured relaxation, and other behavioral approaches have not been shown to be worse. The best intervention in this category is substantially the one the person in front of you will actually practise.

:::reveal Quote Goyal's central finding about mindfulness versus active treatments. ||| That there was no evidence meditation programmes were better than any active treatment, meaning drugs, exercise, and other behavioral therapies, across 47 trials and 3,515 participants restricted to active-controlled designs.

:::reveal A client says meditation is not for them. What does the evidence let you say? ||| That it is genuinely fine, because mindfulness has not been shown to beat other active approaches like exercise or structured relaxation. The best option in this category is largely whichever one they will actually practise, and insisting on meditation is not evidence-based.

## Vocabulary
- **Active control**: a comparison group receiving a real alternative intervention, which strips out expectation and attention effects.
- **Strength of evidence**: a graded judgment (here moderate, low, or insufficient) separate from effect size, reflecting bias risk, precision, directness, and consistency.
- **Comparable, not superior**: the honest summary of mindfulness against other active psychosocial options.
- **Practise-ability**: the deciding factor between roughly equivalent options; the intervention someone sustains beats the one they abandon.

## Sources
Goyal, M., Singh, S., Sibinga, E. M., et al. (2014). Meditation programs for psychological stress and well-being: A systematic review and meta-analysis. *JAMA Internal Medicine, 174*(3), 357-368. https://pubmed.ncbi.nlm.nih.gov/24395196/`,
      recallContent: [
        {
          prompt: "Reconcile 'SMD −0.32 with high confidence' and 'no better than any active treatment' without calling either one wrong.",
          answer:
            "They measure different comparisons. Against passive controls, mindfulness produces a real modest reduction in distress. Against other active interventions, no superiority has been shown. Together they describe a decent option among several, which is the honest claim and the one clients keep doing.",
        },
      ],
    },
    {
      slug: "offering-it-anyway",
      title: "6 · How to offer it anyway",
      section: "Section 2 · Mindfulness, honestly",
      body: `Two lessons of deflation, and the conclusion is still that you should offer mindfulness. Here is why, and how to do it without overclaiming.

**The case for it survives the numbers.** It costs nothing. It requires no equipment and no appointment. It carries essentially no risk for the population you coach. It has a real effect against doing nothing, established at high confidence. And it is a skill, meaning the client keeps it after your engagement ends. Judged on cost, risk, portability, and durability rather than on effect size alone, it earns its place, which is exactly the argument WELL-04 made for breathwork.

**How to introduce it without the usual claims.** Offer it as one option among several, name the honest size ("this reliably helps a bit, and it is not better than exercise or structured relaxation"), and let the client choose. Understating an intervention is a strange sales technique and an excellent retention technique, because nobody quits over an expectation you never set.

**Dose, honestly.** Evidence for a dose-response, meaning that more minutes reliably buy more benefit, is mixed. There is no verified minute-count this course will hand you. The practical guidance is WELL-01's: pick a dose the client will repeat, anchor it to an existing cue, define the minimum that counts, and pre-negotiate the miss.

**The failure mode to head off.** Clients frequently conclude they are "bad at meditating" because their attention wanders, which is the practice rather than a failure of it. Say that in advance. It is the single most useful sentence a coach can offer a beginner, and it prevents the most common reason people quit in week two.

**And the boundary, one more time.** Teaching mindfulness as a skill is coaching. Delivering a structured mindfulness-based programme as treatment for a diagnosed condition is not. The difference is the population, the framing, and the claim, not the technique.

:::reveal Give the case for offering mindfulness despite the modest effect sizes. ||| Zero cost, no equipment or appointment, essentially no risk in a coaching population, a real effect against doing nothing at high confidence, and it is a skill the client keeps afterwards. Judged on cost, risk, portability, and durability rather than effect size alone, it earns its place.

:::reveal What is the most useful sentence to give a beginner, and what does it prevent? ||| That a wandering attention is the practice rather than a failure of it. It prevents the commonest week-two quit, where a client decides they are simply bad at meditating and stops.

## Vocabulary
- **Cost-to-benefit framing**: judging an intervention on cost, risk, portability, and durability rather than effect size alone.
- **Expectation setting**: stating an honest effect size in advance, which protects retention better than enthusiasm does.
- **Dose-response**: whether more practice reliably buys more benefit; for mindfulness the evidence is mixed, so no minute-count is prescribed here.
- **Skill versus programme**: teaching a technique to a non-clinical client, as against delivering a structured intervention as treatment for a diagnosis.`,
    },
    {
      slug: "quiz-boundary-and-mindfulness",
      title: "7 · Knowledge check: boundary and mindfulness",
      section: "Section 2 · Mindfulness, honestly",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questions: [
          {
            prompt: "Why is the scope boundary harder in this pillar than in movement or nutrition?",
            options: [
              "The out-of-scope act looks like an ordinary good conversation rather than announcing itself",
              "Mental health coaching is prohibited outright by federal statute in the United States",
              "There are no published scope documents covering emotional work by coaches",
              "The relevant licensing boards refuse to publish any guidance for non-clinicians",
            ],
            correctIndex: 0,
            explanation:
              "In other pillars the violations are concrete acts like writing a meal plan. Here, listening well and asking a thoughtful question can slide into treatment with nothing in the moment marking the transition.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "Which activity is squarely inside coaching scope?",
            options: [
              "Exploring what a client feels when they imagine setting a boundary at work",
              "Helping a client process a childhood memory that keeps surfacing in sessions",
              "Delivering a structured CBT protocol for a client's diagnosed anxiety disorder",
              "Assessing whether a client's symptoms meet criteria for major depression",
            ],
            correctIndex: 0,
            explanation:
              "Emotion explored in service of a present goal is coaching. Processing memories, delivering named psychotherapies, and assessing diagnostic criteria are all treatment activities requiring licensure.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "The NBHWC scope document names which therapies as outside coaching?",
            options: [
              "CBT, EMDR, Solution Focused Therapy, DBT, and Internal Family Systems",
              "Motivational interviewing, goal setting, and values clarification work",
              "Mindfulness training, breathing practice, and progressive muscle relaxation",
              "Only psychoanalysis and other long-term depth-oriented treatments",
            ],
            correctIndex: 0,
            explanation:
              "Those five are named. Motivational interviewing and values work are coaching methods, and mindfulness and relaxation are teachable skills; none of those are the named exclusions.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "The functional test asks:",
            options: [
              "What a licensing board would see you doing if they read a session transcript",
              "Whether the client consented in writing to the emotional nature of the work",
              "Whether your marketing materials describe the service as coaching",
              "How many hours of training you completed in the technique being used",
            ],
            correctIndex: 0,
            explanation:
              "Regulators evaluate the activity, not the label, the consent form, or the practitioner's training hours. That is why condition-named services and relabelled therapy do not survive scrutiny.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "In the individual-participant-data meta-analysis, mindfulness programmes versus passive controls reduced distress by:",
            options: [
              "SMD −0.32, with no heterogeneity and high confidence in the result",
              "SMD −1.10, a large effect with substantial heterogeneity between trials",
              "No measurable amount once raw participant data were re-analysed",
              "SMD −0.32, but only in participants with high baseline distress",
            ],
            correctIndex: 0,
            explanation:
              "Thirteen trials, 2,371 participants, eight countries, SMD −0.32 (−0.41 to −0.24), no heterogeneity, high confidence. The analysis specifically found no clear effect modification by baseline distress.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "That analysis tested whether the effect differed by baseline distress, gender, age, education, and dispositional mindfulness. It found:",
            options: [
              "No clear indication that any of them modified the effect",
              "That women benefited roughly twice as much as men did",
              "That only highly distressed participants improved at all",
              "That prior meditation experience roughly doubled the benefit",
            ],
            correctIndex: 0,
            explanation:
              "None of the tested characteristics clearly modified the effect, which undercuts the common pitch that mindfulness particularly suits some specific kind of person.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "Restricting to trials with ACTIVE controls, Goyal and colleagues found that meditation programmes were:",
            options: [
              "Not shown to be better than any active treatment including drugs, exercise, and other behavioral therapies",
              "Superior to every active comparator tested across all measured outcomes",
              "Inferior to every active comparator, with harm signals in several trials",
              "Untestable, because too few active-controlled trials existed to pool",
            ],
            correctIndex: 0,
            explanation:
              "That is the review's own sentence, across 47 trials and 3,515 participants. Anxiety, depression, and pain showed moderate evidence of improvement; superiority over other active treatments did not appear.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "In Goyal's review, which outcomes showed low evidence of no effect or insufficient evidence?",
            options: [
              "Positive mood, attention, substance use, eating habits, sleep, and weight",
              "Anxiety and depression at both eight weeks and three to six months",
              "Pain intensity, which showed no measurable change at any time point",
              "All outcomes, since no result reached statistical significance",
            ],
            correctIndex: 0,
            explanation:
              "Anxiety (0.38 then 0.22), depression (0.30 then 0.23), and pain (0.33) carried moderate evidence of improvement. The listed six did not.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "A client dislikes meditation and asks whether they have to do it. The evidence-based answer is:",
            options: [
              "No, because other active approaches have not been shown to be worse, so pick what they will practise",
              "Yes, because mindfulness is the only intervention with high-confidence evidence",
              "Yes, but only ten minutes daily rather than the standard programme dose",
              "No, because mindfulness has been shown to be ineffective in every population",
            ],
            correctIndex: 0,
            explanation:
              "Against active comparators, mindfulness has not been shown superior, so insisting is not evidence-based. It does work against nothing, so dismissing it entirely would also misstate the evidence.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "Why does this course still recommend offering mindfulness?",
            options: [
              "Zero cost, no equipment, negligible risk, a real effect versus nothing, and it is a durable skill",
              "Because its effect size exceeds every other intervention in the program",
              "Because coaching bodies require mindfulness instruction in every engagement",
              "Because it substitutes effectively for therapy in clients awaiting treatment",
            ],
            correctIndex: 0,
            explanation:
              "The case rests on cost, risk, portability, and durability rather than effect size, the same argument WELL-04 made for breathwork. It substitutes for nothing clinical.",
            sourceLessonSlug: "offering-it-anyway",
          },
        ],
      },
    },

    // ── Section 3 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "social-relationships-and-survival",
      title: "8 · The finding that outranks most of this program",
      section: "Section 3 · Connection",
      body: `If you remember one number from the whole WELL program, there is a case for it being this one.

**The landmark.** A meta-analytic review pooled **148 prospective studies covering 308,849 participants** and found that people with stronger social relationships had an odds ratio of **1.50 (95 percent confidence interval 1.42 to 1.59)** for survival, a 50 percent greater likelihood of being alive at follow-up. The finding held across age, sex, initial health status, cause of death, and follow-up period (Holt-Lunstad et al., 2010).

**Which measure mattered most.** The association was strongest for **complex measures of social integration**, meaning multiple roles, group memberships, and varied contact, at an odds ratio of **1.91 (1.63 to 2.23)**. It was weakest, and not statistically significant, for the crude binary of **living alone versus with others, at 1.19 (0.99 to 1.44)**.

**That contrast is the coaching instruction.** Whether someone lives alone tells you almost nothing. The texture of their social life, how many roles they occupy, how many groups they belong to, how varied their contact is, tells you a great deal. So the coaching question is never "do you live alone" but something closer to "who do you see in a normal week, and in what capacities."

**How to state the magnitude responsibly.** The authors say the influence of social relationships on mortality risk is **comparable with well-established risk factors**. This course states it that way. You will see confident claims that connection outranks smoking or obesity specifically; those rankings go beyond what the papers say, and a coach who overstates the best finding in their field has damaged the one they least needed to.

**Why this belongs in a health-coaching program at all.** Because it is entirely coachable, requires no license, costs nothing, and sits almost completely outside what a personal trainer or nutrition coach would ever address. Your certifications have nothing to say about it, and it may be the largest lever in the room.

:::reveal Give the headline social-connection numbers, including the two extremes by measure type. ||| Across 148 studies and 308,849 participants, stronger social relationships gave an odds ratio of 1.50 (1.42 to 1.59) for survival. Strongest for complex social integration at 1.91 (1.63 to 2.23); weakest and not significant for the binary living-alone indicator at 1.19 (0.99 to 1.44).

:::reveal Why does this course say 'comparable with' rather than 'greater than smoking'? ||| Because that is what the authors say: the influence is comparable with well-established risk factors. Specific rankings against smoking or obesity go beyond the papers, and overstating the strongest finding in the field is the least necessary credibility risk a coach can take.

## Vocabulary
- **Social integration**: the complexity of a person's social life across roles, memberships, and contact types; the measure most strongly associated with survival.
- **Odds ratio for survival**: the relative likelihood of being alive at follow-up; 1.50 means 50 percent greater odds.
- **Binary indicator**: a crude yes-or-no measure such as living alone, which performed weakest and did not reach significance.
- **Comparable with**: the authors' own framing of the magnitude against established risk factors, deliberately not a ranking.

## Sources
Holt-Lunstad, J., Smith, T. B., & Layton, J. B. (2010). Social relationships and mortality risk: A meta-analytic review. *PLoS Medicine, 7*(7), e1000316. https://pubmed.ncbi.nlm.nih.gov/20668659/`,
    },
    {
      slug: "isolation-and-loneliness",
      title: "9 · Isolation, loneliness, and what is actually coachable",
      section: "Section 3 · Connection",
      body: `A follow-up meta-analysis separated the strands of social disconnection, and the separation has direct coaching consequences.

**The three exposures.** Pooling studies where confounds were statistically controlled, the weighted average effects were: **social isolation, odds ratio 1.29**; **loneliness, 1.26**; and **living alone, 1.32**, corresponding to 29, 26, and 32 percent increased likelihood of mortality (Holt-Lunstad et al., 2015).

**The finding that surprises people.** There was **no difference between objective and subjective** measures. Being isolated and feeling lonely carried comparable risk. So a client with a full calendar who feels unseen is not reporting a lesser problem than one with an empty one, and a coach who treats loneliness as a softer version of isolation has the evidence backwards.

**The age finding, which matters for the centenarian frame.** Social deficits were **more predictive of death in samples averaging under 65** than in older ones. The intuition that this is an old-age problem to worry about later is exactly wrong, and mid-life is where the coaching lands hardest.

**What is coachable here.** Frequency and variety of contact, treated as a behavior with cues and anchors like any other. Group membership, which is the strongest measure in the 2010 data and, conveniently, one of the most actionable: a recurring thing with the same people. Depth work: which relationships matter, which are being neglected, what maintenance they need. And the practical logistics that quietly decide all of it, since adult friendships mostly die of scheduling rather than of conflict.

**What is not.** Loneliness accompanied by hopelessness, worthlessness, or withdrawal from previously valued activity is a mental-health referral, not a social-calendar project. The overlap between loneliness and depression is substantial, and the coach's job is to notice which one is driving.

:::reveal Give the three 2015 odds ratios and the finding about objective versus subjective isolation. ||| Social isolation 1.29, loneliness 1.26, living alone 1.32, all confound-adjusted. And no difference between objective and subjective measures: feeling lonely carried risk comparable to being measurably isolated.

:::reveal Why does the age finding matter for a centenarian program specifically? ||| Because social deficits were MORE predictive of mortality in samples averaging under 65. Treating connection as an old-age concern to address later inverts the evidence; mid-life is where the coaching has the most to work with.

## Vocabulary
- **Social isolation**: an objective measure of limited contact and network size.
- **Loneliness**: the subjective experience of unwanted disconnection, carrying risk comparable to objective isolation.
- **Confound-adjusted**: effect estimates calculated after statistically controlling for factors like baseline health, age, and socioeconomic status.
- **Group membership**: recurring participation with the same people, the most actionable component of the strongest social measure.

## Sources
Holt-Lunstad, J., Smith, T. B., Baker, M., Harris, T., & Stephenson, D. (2015). Loneliness and social isolation as risk factors for mortality: A meta-analytic review. *Perspectives on Psychological Science, 10*(2), 227-237. https://pubmed.ncbi.nlm.nih.gov/25910392/`,
      recallContent: [
        {
          prompt: "A client has a packed social calendar and describes feeling profoundly unseen. Is that a smaller problem than social isolation?",
          answer:
            "No. The meta-analysis found no difference between objective and subjective measures: loneliness carried an odds ratio of 1.26 against isolation's 1.29. A full calendar with no felt connection is a comparable risk, and treating it as the lesser complaint gets the evidence backwards.",
        },
      ],
    },
    {
      slug: "perma-as-vocabulary",
      title: "10 · PERMA: useful vocabulary, contested physics",
      section: "Section 3 · Connection",
      body: `The best-known well-being framework in coaching deserves a careful verdict rather than adoption or dismissal.

**What it proposes.** Seligman's PERMA model describes well-being through five elements: **Positive emotion, Engagement, Relationships, Meaning, and Accomplishment**. It has been operationalised as a questionnaire and adapted across many countries and populations.

**Where it holds up.** As a **descriptive vocabulary** it is genuinely useful. It gives a coach and client shared language for parts of a life that otherwise get compressed into "happy" or "stressed", and it reliably surfaces neglected domains. Someone whose accomplishment is high and whose relationships are thin recognises that picture immediately, and the recognition is often the intervention.

**Where the evidence is weaker than the branding.** Factor-analytic work on the questionnaire repeatedly finds that the five elements are heavily inter-correlated and load substantially on a **single general well-being factor**, with some analyses favouring a model where the five sit beneath one overarching factor. The claim that these are five empirically independent pillars, in the way personality traits are separable, is not well supported psychometrically. Much of the supporting literature is also cross-sectional, correlational, and self-reported.

**So the honest verdict.** PERMA is a good map and a contested theory. Use it as a conversational structure for finding where a life is thin. Do not present it as a validated architecture of well-being, do not imply the five elements are independently manipulable, and do not treat the questionnaire as a measurement instrument that tells you something a conversation would not.

**Which is fine, because the map is the useful part.** In practice the framework earns its place by prompting the question a client has not asked themselves, and lesson 8 already established that one of its five elements carries evidence far stronger than the framework as a whole.

:::reveal Name PERMA's five elements and the psychometric finding that qualifies the model. ||| Positive emotion, Engagement, Relationships, Meaning, and Accomplishment. The qualification: factor-analytic work finds the elements heavily inter-correlated and loading on a single general well-being factor, so the five-independent-pillars claim is not well supported.

:::reveal How should a coach use PERMA, given that verdict? ||| As a descriptive vocabulary and conversational structure that surfaces neglected domains, not as a validated architecture. Do not imply the elements are independently manipulable or treat the questionnaire as an instrument that reveals more than a good conversation would.

## Vocabulary
- **PERMA**: Seligman's five-element well-being framework: Positive emotion, Engagement, Relationships, Meaning, Accomplishment.
- **Factor analysis**: the statistical method used to test whether proposed distinct constructs actually behave as separate dimensions.
- **General factor**: a single underlying dimension that explains much of the shared variance, which is what PERMA's subscales largely reflect.
- **Descriptive vocabulary versus causal model**: language that helps a conversation, versus a validated account of how the parts produce the whole.`,
    },
    {
      slug: "quiz-connection",
      title: "11 · Knowledge check: connection",
      section: "Section 3 · Connection",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The 2010 meta-analysis of 148 studies found that stronger social relationships carried:",
            options: [
              "An odds ratio of 1.50 for survival, consistent across age, sex, and baseline health",
              "An odds ratio of 1.05, a small effect confined to older participants",
              "A benefit that disappeared after adjusting for baseline health status",
              "An effect present only in studies with follow-up beyond twenty years",
            ],
            correctIndex: 0,
            explanation:
              "OR 1.50 (1.42 to 1.59) across 308,849 participants, holding across age, sex, initial health status, cause of death, and follow-up period.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "Which social measure showed the STRONGEST association with survival?",
            options: [
              "Complex measures of social integration, at an odds ratio of 1.91",
              "The binary indicator of living alone versus living with others",
              "Self-reported satisfaction with a single closest relationship",
              "Total number of text messages exchanged in a typical week",
            ],
            correctIndex: 0,
            explanation:
              "Complex social integration reached 1.91 (1.63 to 2.23). The living-alone binary was weakest at 1.19 and did not reach significance, which is why the coaching question is about texture rather than household composition.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "How does this course state the magnitude of the social-connection finding?",
            options: [
              "As comparable with well-established mortality risk factors, which is the authors' own framing",
              "As definitively greater than the mortality impact of smoking fifteen cigarettes daily",
              "As larger than any other modifiable risk factor yet identified in epidemiology",
              "As too small to justify addressing within a health-coaching engagement",
            ],
            correctIndex: 0,
            explanation:
              "The papers say comparable with established risk factors. Specific rankings against smoking or obesity circulate widely but go beyond what the research states.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "In the 2015 meta-analysis, the mortality odds ratios were approximately:",
            options: [
              "Social isolation 1.29, loneliness 1.26, living alone 1.32",
              "Social isolation 2.50, loneliness 1.05, living alone 1.80",
              "All three below 1.10 after adjustment for confounders",
              "Loneliness 1.26, with isolation and living alone showing no association",
            ],
            correctIndex: 0,
            explanation:
              "29, 26, and 32 percent increased mortality likelihood respectively, after statistical control for confounds, with no difference found between objective and subjective measures.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "The comparison between objective isolation and subjective loneliness showed:",
            options: [
              "No difference between them in associated mortality risk",
              "Objective isolation carrying roughly double the risk of loneliness",
              "Loneliness mattering only in participants who also lived alone",
              "Subjective measures showing no association once adjusted",
            ],
            correctIndex: 0,
            explanation:
              "The review found no difference between measures of objective and subjective social isolation. A client who feels unseen despite a full calendar is describing a comparable risk.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "Social deficits were MORE predictive of mortality in which group?",
            options: [
              "Samples with an average age younger than 65",
              "Samples with an average age older than 80",
              "Samples restricted to people with existing chronic disease",
              "Samples drawn exclusively from residential care settings",
            ],
            correctIndex: 0,
            explanation:
              "Under 65, which inverts the common intuition that connection is a late-life concern and puts mid-life at the centre of the coaching opportunity.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "Which social intervention target does the evidence most support prioritising?",
            options: [
              "Building recurring group membership and variety of social roles",
              "Moving a client out of a single-occupancy household",
              "Increasing total daily message and social media volume",
              "Focusing exclusively on the client's closest single relationship",
            ],
            correctIndex: 0,
            explanation:
              "Complex social integration, meaning multiple roles and group memberships, showed the strongest association. Household composition alone was the weakest and non-significant measure.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "The psychometric verdict on PERMA is that:",
            options: [
              "Its elements are heavily inter-correlated and largely reflect one general well-being factor",
              "Its five elements are independently validated and separately manipulable",
              "The framework has been refuted and should not be used in coaching",
              "It measures well-being more precisely than any alternative instrument",
            ],
            correctIndex: 0,
            explanation:
              "Factor-analytic work finds heavy inter-correlation and strong loading on a single general factor. That makes PERMA a useful descriptive vocabulary rather than a validated five-pillar architecture.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "A client reports loneliness alongside hopelessness and withdrawal from things they used to value. This is:",
            options: [
              "A mental-health referral rather than a social-calendar project",
              "A straightforward connection-coaching case for group membership work",
              "Evidence that their social integration score needs formal assessment",
              "Normal mid-life adjustment requiring only reassurance and monitoring",
            ],
            correctIndex: 0,
            explanation:
              "Hopelessness, worthlessness, and withdrawal from valued activity point at depression, which overlaps substantially with loneliness. Noticing which is driving is the coach's job, and this presentation routes to care.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
        ],
      },
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-crisis-conversation",
      title: "12 · The conversation no coach wants",
      section: "Section 4 · Crisis and craft",
      body: `Every coach working in this domain should be ready for a client to disclose thoughts of suicide. Readiness is a protocol you rehearsed, not a feeling you summon.

**Ask directly.** If you are concerned, ask plainly whether the person is having thoughts of suicide. Do not hint, do not euphemise, and do not wait for a better moment. The persistent fear that asking plants the idea is not a reason to avoid the question; crisis-support practice is built on asking it clearly. A direct question also communicates something a careful one does not: that you can hear the answer.

**Stay with them and listen.** The immediate goal is connection and understanding, not assessment. What is happening, how long has it been going on, are they thinking about acting, is there a plan, is there access to means. You are not diagnosing; you are understanding enough to help them get to the right place.

**Route to the crisis resource.** In the United States, that is the **988 Suicide and Crisis Lifeline**, reachable by call, text, or chat, with dedicated services for Deaf and Hard of Hearing callers and Spanish-language support. Offer to contact it together and stay on the line while they connect. If you practise outside the United States, look up your jurisdiction's line now, before you need it, and publish it in your materials. Do not rely on a number recited in a course.

**Least invasive first, but not at the cost of safety.** Support the person to secure their own safety where possible: calling the line together, contacting someone they trust, going somewhere safe. Emergency services are the escalation for imminent risk when the person cannot or will not act to stay safe. That ordering respects autonomy; it does not override the obligation to act when risk is immediate.

**Set the frame before you ever need it.** Your intake materials should state plainly that you are not an emergency service and what a client should do in crisis. Doing that at the start is what makes the conversation possible later, and it takes one paragraph.

:::reveal Why does this lesson insist on asking directly rather than gently hinting? ||| Because crisis-support practice is built on asking plainly, the fear that asking plants the idea is not a reason to avoid it, and a direct question tells the person something an indirect one does not: that you are able to hear the answer.

:::reveal Give the ordering of responses, and the condition that overrides it. ||| Least invasive first: support the person to secure their own safety, connect to the crisis line together, involve someone they trust. Emergency services are the escalation, used when risk is imminent and the person cannot or will not act to stay safe.

## Vocabulary
- **988 Suicide and Crisis Lifeline**: the United States crisis resource by call, text, or chat, with Deaf and Hard of Hearing and Spanish-language services.
- **Asking directly**: naming suicide plainly rather than hinting, the practice crisis support is built on.
- **Least-invasive-first**: preferring the option that preserves the person's agency, escalating when imminent risk makes that insufficient.
- **Not an emergency service**: the statement that belongs in intake materials, establishing the frame before a crisis makes it necessary.`,
    },
    {
      slug: "after-the-crisis",
      title: "13 · After the crisis",
      section: "Section 4 · Crisis and craft",
      body: `What happens in the hours and weeks after a disclosure decides whether the episode was handled or merely survived.

**Document while it is fresh.** Write a factual record: what you observed, what the client said in their own words as closely as you can recall, what you did, who you contacted, what was agreed. Not interpretation, not diagnosis, not speculation about causes. This protects the client's continuity of care and it protects you, and the time to write it is immediately, not next week.

**Do not resume ordinary coaching as though nothing happened.** Going straight back to step goals and habit anchors treats the disclosure as an interruption rather than as information. Pause the usual work, be explicit that you are pausing it and why, and make the resumption conditional on the client being connected to appropriate care.

**Hold the relationship without holding the case.** The client may feel embarrassed and expect to be dropped. Being clear that they have not damaged the relationship, while being equally clear that the clinical work belongs to someone qualified, is the balance. Both halves matter: abandonment and over-involvement are the two failure modes, and warmth is not a substitute for the referral.

**Coordinate rather than compete.** Where a client is in treatment and wants you to continue, the WELL-03 model applies: the clinical plan belongs to the clinician, the behavior work around it can be yours, and where there is doubt about whether coaching should continue at all, that question belongs to the treating professional and not to you.

**And attend to yourself.** These conversations are heavy, and the coach who does not process them is the coach who starts avoiding the question in lesson 12. Supervision, peer consultation, or your own therapy are professional infrastructure here, not indulgences.

:::reveal What goes into the record after a crisis disclosure, and what stays out? ||| In: what you observed, the client's own words as closely as recalled, what you did, who you contacted, what was agreed, written immediately. Out: interpretation, diagnosis, and speculation about causes, none of which are yours to record.

:::reveal Name the two failure modes after a disclosure. ||| Abandonment, dropping the client because the situation became uncomfortable, and over-involvement, staying warmly in a role that has become clinical. The balance is keeping the relationship while the clinical work goes to someone qualified.

## Vocabulary
- **Factual documentation**: an objective record of observations, statements, actions, and referrals, excluding interpretation or diagnosis.
- **Conditional resumption**: restarting ordinary coaching only once the client is connected to appropriate care, and saying so explicitly.
- **Coordination**: working alongside a treating professional, with the clinical plan theirs and the behavior work potentially yours.
- **Professional infrastructure**: supervision, peer consultation, or personal therapy that lets a coach keep doing this work well.`,
      recallContent: [
        {
          prompt: "A client discloses suicidal thoughts, connects with 988 during your session, and emails two days later asking to resume their nutrition goals. What do you do?",
          answer:
            "Do not simply resume. Acknowledge warmly that the relationship is intact, confirm they are connected to ongoing care rather than only that one call, and make resumption conditional on that. Then coordinate: the clinical work belongs to the treating professional, and whether coaching should continue is a question for them, not for you alone.",
        },
      ],
    },
    {
      slug: "emotion-in-ordinary-sessions",
      title: "14 · Emotion in ordinary sessions",
      section: "Section 4 · Crisis and craft",
      body: `Most emotional moments in coaching are not crises. They are a client's voice changing while they describe something ordinary, and how you handle those decides whether the work goes anywhere.

**Let it happen.** The commonest mistake is not overstepping but flinching: rushing to reassure, to solve, or to change the subject the moment feeling appears. That is the fixing reflex from WELL-01 wearing a kinder costume, and it teaches a client that this room is not for that. Silence, a reflection, and a willingness to wait are usually the whole intervention.

**Keep the destination in view.** The difference between coaching and therapy here is not depth of feeling; it is direction of travel. "What is that about, for you, in terms of what you want?" keeps a moment connected to the client's goal. "Tell me more about your father" does not. Both are caring; only one is yours.

**Name it and check.** When something shifts, say so plainly and ask: "something changed when you said that; what happened?" A client who did not notice their own reaction now has it, and you have not interpreted anything on their behalf. Naming and checking is the coaching-safe version of the move a therapist would take further.

**Watch for the moment it stops being coaching.** If the same material keeps returning and does not resolve, if the feeling is disproportionate to the goal it attaches to, if the client is asking you for something you can hear is treatment, that is the signal from lesson 3. Say what you notice, name your limits, and refer. Doing that while a client is calm and mid-engagement is far easier than doing it in a crisis, and it is often the same conversation arriving earlier.

**And remember what this pillar is for.** The point of emotional competence in a wellness coach is not to do therapy adjacent work. It is that the movement plan, the eating pattern, and the sleep routine all run through a person, and a coach who cannot be present when that person shows up is coaching a spreadsheet.

:::reveal What is the commonest mistake coaches make when emotion appears, and what is the alternative? ||| Flinching: rushing to reassure, solve, or change the subject, which is the fixing reflex in a kinder costume and teaches the client this room is not for that. The alternative is silence, a reflection, and a willingness to wait.

:::reveal Give the sentence pattern that keeps an emotional moment inside coaching. ||| Something that ties the feeling to the client's own goal, such as asking what that is about for them in terms of what they want. Direction of travel, not depth of feeling, is what separates coaching from therapy in these moments.

## Vocabulary
- **Flinching**: reflexively reassuring or redirecting when feeling appears, the pillar's most common coaching error.
- **Direction of travel**: whether a conversation moves toward the client's goal or into the origins of a symptom; the practical coaching-therapy distinction.
- **Name and check**: observing aloud that something shifted and asking what happened, without interpreting on the client's behalf.
- **Early referral**: raising limits while a client is calm and engaged rather than waiting for a crisis to force the same conversation.`,
    },
    {
      slug: "final-mental-wellbeing",
      title: "15 · Final: mental and emotional well-being",
      section: "Section 4 · Crisis and craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The practical coaching-versus-therapy distinction in an emotional moment is:",
            options: [
              "Direction of travel: toward the client's goal, rather than into the origins of a symptom",
              "Depth of feeling: coaching stops as soon as a client becomes tearful",
              "Session length: therapeutic work requires fifty-minute appointments",
              "Whether the coach has completed training in the technique being used",
            ],
            correctIndex: 0,
            explanation:
              "Feeling can run deep in coaching. What separates it is where the conversation is heading: a client-set goal, or the excavation and remediation of a symptom.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Against passive controls, the individual-participant-data meta-analysis found mindfulness programmes reduced distress by:",
            options: [
              "SMD −0.32, with high confidence and no heterogeneity across trials",
              "SMD −0.85, a large effect that grew at longer follow-up",
              "An amount that varied strongly by participant gender and age",
              "No detectable amount once raw data replaced published summaries",
            ],
            correctIndex: 0,
            explanation:
              "Thirteen trials, 2,371 participants, eight countries: SMD −0.32 (−0.41 to −0.24), no heterogeneity, high confidence, and no clear effect modification by the characteristics tested.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "Restricted to active-controlled trials, meditation programmes were found to be:",
            options: [
              "Not better than any active treatment, including drugs, exercise, and other behavioral therapies",
              "Superior to medication but not to exercise across the pooled outcomes",
              "Superior to all comparators for sleep, weight, and attention outcomes",
              "Harmful relative to active comparators in a minority of trials",
            ],
            correctIndex: 0,
            explanation:
              "Goyal and colleagues state exactly that across 47 trials and 3,515 participants. Anxiety, depression, and pain still showed moderate evidence of improvement; superiority over active treatments did not appear.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "Taken together, the passive-control and active-control findings mean mindfulness is best described as:",
            options: [
              "A decent option among several, with real benefit versus nothing and no demonstrated superiority",
              "The most effective psychosocial intervention currently available",
              "An intervention with no evidence base worth mentioning to clients",
              "Effective only for people with prior meditation experience",
            ],
            correctIndex: 0,
            explanation:
              "Both statements are true and compatible. That combination is what makes the honest pitch, and the honest pitch is the one clients keep practising.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "The 2010 social-relationships meta-analysis reported an odds ratio for survival of:",
            options: [
              "1.50 across 148 studies and 308,849 participants",
              "1.05, a marginal effect confined to older adults",
              "2.30, the largest effect recorded in health epidemiology",
              "1.19, driven entirely by household composition",
            ],
            correctIndex: 0,
            explanation:
              "OR 1.50 (1.42 to 1.59), holding across age, sex, initial health, cause of death, and follow-up. The 1.19 figure belongs to the weak, non-significant living-alone binary.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "Which measure of social life was weakest and NOT statistically significant?",
            options: [
              "Living alone versus living with others",
              "Complex measures of social integration across roles",
              "Number of group memberships maintained over time",
              "Frequency and variety of weekly social contact",
            ],
            correctIndex: 0,
            explanation:
              "The living-alone binary reached only 1.19 with a confidence interval crossing 1. Complex social integration was strongest at 1.91, which is why coaching targets texture rather than household composition.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "In the 2015 analysis, loneliness carried an odds ratio of 1.26 and social isolation 1.29. The interpretation is:",
            options: [
              "Feeling disconnected and being disconnected carry comparable mortality risk",
              "Objective isolation is roughly twice as dangerous as subjective loneliness",
              "Loneliness only matters when it accompanies measurable isolation",
              "Neither effect survived adjustment for baseline health status",
            ],
            correctIndex: 0,
            explanation:
              "The review found no difference between objective and subjective measures. A client with a full calendar who feels unseen is describing a risk comparable to measured isolation.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "Social deficits predicted mortality most strongly in:",
            options: [
              "Samples averaging under 65 years of age",
              "Samples averaging over 80 years of age",
              "Samples of people already living with chronic illness",
              "Samples drawn from long-term care residents",
            ],
            correctIndex: 0,
            explanation:
              "Under 65, which reverses the intuition that this is a late-life concern and makes mid-life the highest-leverage coaching window for connection.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "PERMA should be presented to a client as:",
            options: [
              "A useful vocabulary for finding neglected domains, not a validated five-pillar architecture",
              "Five empirically independent components that can each be raised separately",
              "A measurement instrument that reveals more than a conversation would",
              "A refuted framework with no remaining use in coaching practice",
            ],
            correctIndex: 0,
            explanation:
              "Factor-analytic work finds the elements heavily inter-correlated and loading on a general well-being factor. The map is useful; the five-independent-pillars claim is not supported.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "When concerned that a client may be suicidal, the coach should:",
            options: [
              "Ask directly and plainly whether they are having thoughts of suicide",
              "Hint carefully so as not to plant the idea in their mind",
              "Wait for the client to raise it themselves in their own time",
              "End the session and email a list of resources afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Crisis-support practice is built on asking plainly. Hinting, waiting, and retreating to email all withhold the thing that helps, and a direct question signals you can hear the answer.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "The escalation ordering taught in this course is:",
            options: [
              "Least invasive first, escalating to emergency services when risk is imminent and the person cannot act safely",
              "Emergency services immediately in every case where suicide is mentioned",
              "Never involve emergency services, since that would breach confidentiality",
              "Refer to the client's own therapist and take no further action",
            ],
            correctIndex: 0,
            explanation:
              "Support the person's own safety where possible, connect to 988 together, involve trusted people. Emergency services are the escalation for imminent risk when the person cannot or will not act to stay safe.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "After a crisis disclosure, the record a coach writes should contain:",
            options: [
              "Observations, the client's own words, actions taken, and referrals made",
              "The coach's assessment of which condition the client likely has",
              "Speculation about family history and probable causes of the episode",
              "Nothing, since written records create legal exposure for the coach",
            ],
            correctIndex: 0,
            explanation:
              "Factual and immediate: what was observed, said, done, and arranged. Diagnosis and speculation are not the coach's to record, and writing nothing fails both the client's continuity of care and the coach.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "The two failure modes following a client's crisis disclosure are:",
            options: [
              "Abandonment and over-involvement",
              "Documentation and coordination",
              "Referral and follow-up",
              "Pausing coaching and informing an emergency contact",
            ],
            correctIndex: 0,
            explanation:
              "Dropping a client because the situation became uncomfortable, or staying warmly in a role that has become clinical. Documentation, coordination, referral, and pausing are all parts of handling it correctly.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "The most common coaching error when a client becomes emotional in an ordinary session is:",
            options: [
              "Flinching: rushing to reassure, solve, or change the subject",
              "Interpreting the emotion in terms of the client's early relationships",
              "Continuing to ask questions long past the client's comfort",
              "Immediately ending the session and issuing a referral",
            ],
            correctIndex: 0,
            explanation:
              "Overstepping is the rarer error. Flinching is the common one, and it is the fixing reflex in a kinder costume: it teaches a client that this room is not for that.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
        ],
      },
    },
  ],
};
