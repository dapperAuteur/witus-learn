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

    {
      slug: "quiz-the-territory",
      title: "4 · Knowledge check: the territory and its edge",
      section: "Section 1 · The territory and its edge",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does the boundary sit harder on this pillar than on movement or nutrition?",
            options: [
              "The out-of-scope act looks exactly like a good conversation",
              "The legal restrictions on mental-health practice are stricter in most states",
              "Clients on this pillar are more likely to already be receiving clinical care",
              "The consequences of an error are more severe than in the physical pillars",
            ],
            correctIndex: 0,
            explanation:
              "Writing a meal plan announces itself. A client crying while you listen well does not, and yet the difference can turn on what you do in the next ten minutes.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "Why is this pillar worth doing despite the boundary risk?",
            options: [
              "Stress, mood, and connection are where most adherence failures in other pillars originate",
              "Clients request this work more often than they request work on the physical pillars",
              "It is the pillar with the strongest randomized evidence base in the program",
              "It is the only pillar addressing outcomes that matter over a multi-decade horizon",
            ],
            correctIndex: 0,
            explanation:
              "The client who cannot sustain the walking habit is usually not short of information about walking. That is the argument for the pillar's existence.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "State the frame separating coaching from psychotherapy in this domain.",
            options: [
              "Present and future focused, aimed at goals, skills, and behavior, in people not in crisis",
              "Coaching addresses everyday stress while psychotherapy addresses diagnosed conditions only",
              "Coaching avoids emotional content while psychotherapy engages it directly",
              "Coaching is time-limited while psychotherapy continues until the condition resolves",
            ],
            correctIndex: 0,
            explanation:
              "And not being treated for a disorder by you. Psychotherapy diagnoses and treats conditions and frequently processes the past; a coach can work with emotion but cannot treat it.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is the honesty commitment specific to this course?",
            options: [
              "The mindfulness literature is the most oversold evidence a wellness coach will meet",
              "Mental-health claims carry legal exposure, so every statement must be citable",
              "Clients on this pillar are unusually vulnerable to overclaiming by practitioners",
              "The evidence here is weaker than in other pillars, so all claims are provisional",
            ],
            correctIndex: 0,
            explanation:
              "A coach who repeats inflated mindfulness claims loses the credibility they need for the parts that genuinely hold up, which on this pillar are substantial.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'scope creep,' and why is it most likely here?",
            options: [
              "Gradual drift from coaching into treatment; the transition is invisible in the moment",
              "The expansion of a coach's services beyond their original offering over time",
              "A client's gradual expectation that the coach will address more of their life",
              "The tendency of coaching sessions to run longer than scheduled as rapport builds",
            ],
            correctIndex: 0,
            explanation:
              "Invisibility is the specific risk. Nothing about a thoughtful question announces itself as treatment.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "Which of these may a coach legitimately do in the emotional domain?",
            options: [
              "Teach mindfulness, breathing, relaxation, problem-solving, communication as skills",
              "Deliver a structured cognitive-behavioral protocol adapted for a coaching format",
              "Explore the childhood origins of a client's current relationship to work",
              "Assess whether a client's low mood meets the threshold for clinical concern",
            ],
            correctIndex: 0,
            explanation:
              "Skills training to a non-clinical client is not treatment, even though the skills come from the same research lineage as clinical interventions.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What makes emotional exploration coaching rather than therapy?",
            options: [
              "The destination is the behavior and the goal, not the diagnosis and not the origin",
              "The emotion is discussed briefly rather than being the session's main focus",
              "The client raises it rather than the coach introducing it",
              "The coach reflects rather than interpreting what the emotion means",
            ],
            correctIndex: 0,
            explanation:
              "Asking what comes up when a client imagines saying no at work is emotional territory and squarely coaching, because of where it is headed.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What does values work feed into, from WELL-01?",
            options: [
              "Autonomy support: a change anchored to a real value is a change with its own engine",
              "Competence support: articulated values make progress easier to measure",
              "Relatedness support: shared values strengthen the coaching relationship",
              "The focusing task: values determine which behavior the conversation addresses",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the oldest coaching moves and one of the most durable, and it connects directly to SDT's autonomy need.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "Which therapies does the NBHWC scope list explicitly as outside coaching?",
            options: [
              "CBT, EMDR, Solution Focused Therapy, DBT, and Internal Family Systems Therapy",
              "CBT, psychoanalysis, EMDR, exposure therapy, and Acceptance and Commitment Therapy",
              "DBT, Internal Family Systems, hypnotherapy, art therapy, and narrative therapy",
              "CBT, DBT, motivational interviewing, EMDR, and Solution Focused Therapy",
            ],
            correctIndex: 0,
            explanation:
              "Five named. Motivational interviewing is conspicuously not among them, which is why WELL-01 can teach it at length.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What is 'holding a client,' and why does the course call it the quietest harm?",
            options: [
              "Retaining someone in coaching while they need clinical care nobody is arranging",
              "Keeping a client engaged past the point where the coaching work has concluded",
              "Taking on responsibility for a client's emotional state between sessions",
              "Continuing to work with a client whose goals have stopped progressing",
            ],
            correctIndex: 0,
            explanation:
              "It does not feel like a violation in the moment, because the relationship feels good to both parties. That is exactly why it goes unnoticed.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What is 'skills training' as distinct from treatment?",
            options: [
              "Teaching a self-regulation technique as a tool, not as treatment for a condition",
              "Teaching techniques that have not been validated in clinical populations",
              "Instruction delivered in a group format rather than one to one",
              "Teaching a client to apply a technique without the coach's ongoing involvement",
            ],
            correctIndex: 0,
            explanation:
              "The difference is the framing and the population, not the technique. The techniques come from the same research lineage as clinical interventions, which is why they work.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What are the two readings of 'trauma-informed coaching'?",
            options: [
              "Legitimately, understanding how trauma shapes behavior; dangerously, processing trauma with a client",
              "Legitimately, screening clients for trauma history; dangerously, ignoring it entirely",
              "Legitimately, referring clients with trauma histories; dangerously, working with them at all",
              "Legitimately, using trauma-specific techniques; dangerously, using general coaching methods",
            ],
            correctIndex: 0,
            explanation:
              "Not pressing, not re-traumatizing, recognizing when to stop is the legitimate version. Processing is treatment regardless of the adjective in front of the job title.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is wrong with marketing 'anxiety coaching'?",
            options: [
              "Naming a service by a condition implies you treat it, and attracts clients who need care",
              "The term is legally restricted to licensed practitioners in most jurisdictions",
              "Anxiety is outside the coaching scope entirely, so the service cannot be delivered",
              "Clients with anxiety require assessment before any behavioral work can begin",
            ],
            correctIndex: 0,
            explanation:
              "Even where the work stays behavioral, the framing does the damage, and it is a harm the coach then has to notice and undo.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "A client's mood lifts substantially after stress coaching. What is the trap?",
            options: [
              "Concluding that you treat mood, should market it, and may take the next diagnosis",
              "Attributing the improvement to coaching when it may have resolved on its own",
              "Failing to document the improvement in case a clinician later needs the history",
              "Continuing the work past the point where the client's goal has been achieved",
            ],
            correctIndex: 0,
            explanation:
              "Nothing improper happened, and it is genuinely common because behavior change affects mood. One person's improvement is not an indication.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "State the functional test as this pillar depends on it.",
            options: [
              "If a licensing board read a transcript of this session, what would they see me doing?",
              "Would a reasonable client understand this as coaching rather than as therapy?",
              "Does my certification's scope document explicitly permit this activity?",
              "Have I documented the client's consent to work in this territory?",
            ],
            correctIndex: 0,
            explanation:
              "Regulators evaluate what you actually did, not what you named it. Deep emotional processing labeled coaching can be assessed as psychotherapy practice.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "Give the three-question practical version of the functional test.",
            options: [
              "Client-set goal or symptom relief? Present or past? Would this appear in a psychotherapy manual?",
              "Is the client in crisis? Are they in treatment elsewhere? Have they consented to this work?",
              "Am I qualified? Is this within my certification? Would a colleague do the same?",
              "Is the emotion proportionate? Is it recurring? Is the client distressed by it?",
            ],
            correctIndex: 0,
            explanation:
              "And the decision rule: two out of three pointing the wrong way means stop and refer, whatever the service is called.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is 'symptom relief versus goal pursuit'?",
            options: [
              "The orientation difference that separates treatment from coaching in a transcript",
              "The distinction between short-term and long-term outcomes in a coaching engagement",
              "The difference between what a client asks for and what they actually need",
              "The choice between addressing a problem and building toward a positive outcome",
            ],
            correctIndex: 0,
            explanation:
              "It is the first of the three practical questions, and it is the one that shows up most clearly if someone else reads the session.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "A prospective client wants 'anxiety coaching' because their therapist has a six-week waitlist. What do you do?",
            options: [
              "Offer what is genuinely yours, say it is not treatment, keep the therapy appointment",
              "Decline entirely, since working with someone awaiting therapy risks becoming their treatment",
              "Accept the work as described, since they have already arranged appropriate clinical care",
              "Offer a reduced-scope version of anxiety coaching until the therapy begins",
            ],
            correctIndex: 0,
            explanation:
              "Do not sell a service named for their condition and do not become the substitute for the care they are queued for. Present-focused behavior, sleep, movement, connection, and skills practice are all available.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What does 'present and future focus' preserve?",
            options: [
              "The distinguishability of coaching from therapy: from where a client is toward what they want",
              "The client's motivation, which past-focused work tends to undermine",
              "The efficiency of sessions, which historical exploration would lengthen",
              "The coach's neutrality, which discussing the past would compromise",
            ],
            correctIndex: 0,
            explanation:
              "It is the temporal orientation that keeps the two distinguishable, which matters because in this domain nothing else about the conversation does.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'adherence origin'?",
            options: [
              "The observation that failures in other pillars usually begin in this one",
              "The point in an engagement where a client's adherence first declines",
              "The client's original reason for committing to a behavior change",
              "The source of a client's motivation, whether internal or external",
            ],
            correctIndex: 0,
            explanation:
              "It is why the domain earns its place in a program otherwise organized around physical pillars.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What can a coach do with connection, per lesson 2's scope note?",
            options: [
              "Coach it as behavior change like any other; it needs no clinical license",
              "Educate about its importance, but leave the behavioral work to a therapist",
              "Assess a client's social network and identify deficits requiring intervention",
              "Facilitate group sessions where clients build connections with each other",
            ],
            correctIndex: 0,
            explanation:
              "Helping someone build and maintain relationships is behavior change. Lesson 8 then makes the case for why it matters with numbers.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "Which is the clearest example of the out-of-scope act on this pillar?",
            options: [
              "Working through a client's childhood experiences to resolve their present anxiety",
              "Asking what the dread before a Monday is made of",
              "Teaching a breathing practice to a client who reports feeling wound up",
              "Helping a client articulate what matters to them and align behavior with it",
            ],
            correctIndex: 0,
            explanation:
              "Excavating the past to remediate a condition fails all three of the practical test's questions at once. The other three are present-focused and goal-directed.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is 'working with emotion versus treating it'?",
            options: [
              "Exploring feelings as they bear on goals and behavior, not remediating a condition",
              "Acknowledging emotion when it arises, as distinct from inviting it deliberately",
              "Discussing feelings at the surface, as distinct from exploring their deeper meaning",
              "Responding to emotion with reflection, as distinct from responding with technique",
            ],
            correctIndex: 0,
            explanation:
              "Depth of feeling is not the discriminator. Direction of travel is, which is why lesson 14 says the same thing about ordinary emotional moments.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is a 'condition-named service'?",
            options: [
              "Marketing coaching by a diagnosis, implying treatment and attracting clients who need care",
              "A coaching service designed for a specific clinical population under supervision",
              "A service whose name describes the outcome rather than the method",
              "A coaching offering restricted to clients with a particular diagnosis",
            ],
            correctIndex: 0,
            explanation:
              "The name does the harm before any session happens, by shaping who buys it and what they think they are buying.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is 'present and future focus' preserving?",
            options: ["The distinguishability of coaching from therapy","The client's motivation, which past-focused work undermines","Session efficiency, which historical exploration would reduce","The coach's neutrality about the client's history"],
            correctIndex: 0,
            explanation: "It is the temporal orientation that keeps the two apart, which matters because in this domain nothing else about the conversation does.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'adherence origin'?",
            options: ["Failures in other pillars usually begin in this one","The point where a client's adherence first declines","The client's original reason for committing","Whether motivation is internal or external"],
            correctIndex: 0,
            explanation: "It is why the domain earns its place in a program otherwise organized around physical pillars.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'working with emotion versus treating it'?",
            options: ["Exploring feelings as they bear on goals, not remediating a condition","Acknowledging emotion versus inviting it deliberately","Surface discussion versus exploring deeper meaning","Responding with reflection versus responding with technique"],
            correctIndex: 0,
            explanation: "Depth of feeling is not the discriminator. Direction of travel is.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'skills training' as distinct from treatment?",
            options: ["Teaching a self-regulation technique as a tool, not as treatment for a condition","Teaching techniques not validated in clinical populations","Instruction delivered in groups rather than one to one","Teaching a client to apply a technique unaided"],
            correctIndex: 0,
            explanation: "The difference is framing and population, not technique. The techniques come from the same research lineage as clinical interventions.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What is 'values clarification', and what does it feed?",
            options: ["Articulating what matters so behaviour can anchor to it; it feeds autonomy support","Identifying which values a client is failing to live by; it feeds accountability","Ranking values by importance; it feeds goal selection","Comparing stated and revealed values; it feeds insight"],
            correctIndex: 0,
            explanation: "Coaching's oldest durable move, and a change anchored to a real value is a change with its own engine.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What may a coach do with connection, per the scope note?",
            options: ["Coach it as behaviour change; it needs no clinical license","Educate about its importance, leaving behaviour to a therapist","Assess the network and identify deficits requiring intervention","Facilitate groups where clients connect with each other"],
            correctIndex: 0,
            explanation: "Building and maintaining relationships is behaviour change. Lesson 8 then makes the case with numbers.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What makes emotional exploration coaching rather than therapy?",
            options: ["The destination is the behaviour and the goal, not the diagnosis or the origin","The emotion is discussed briefly rather than centrally","The client raises it rather than the coach","The coach reflects rather than interprets"],
            correctIndex: 0,
            explanation: "Asking what comes up when a client imagines saying no at work is emotional territory and squarely coaching, because of where it is headed.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "What is 'scope creep', and why is it likely here?",
            options: ["Gradual drift from coaching into treatment; the transition is invisible in the moment","Expanding services beyond the original offering over time","A client's growing expectation the coach handles more","Sessions running longer as rapport builds"],
            correctIndex: 0,
            explanation: "Nothing about a thoughtful question announces itself as treatment, which is what makes invisibility the specific risk.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "A client's mood lifts after stress coaching. What is the trap?",
            options: ["Concluding you treat mood, should market it, and may take the next diagnosis","Attributing improvement to coaching when it may have resolved alone","Failing to document it for a clinician's later use","Continuing past the point the goal was achieved"],
            correctIndex: 0,
            explanation: "Nothing improper happened, and it is common because behaviour change affects mood. One person's improvement is not an indication.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is a 'condition-named service'?",
            options: ["Marketing coaching by a diagnosis, implying treatment and attracting clients who need care","A service designed for a clinical population under supervision","A service named for its outcome rather than its method","An offering restricted to clients with one diagnosis"],
            correctIndex: 0,
            explanation: "The name does the harm before any session happens, by shaping who buys it and what they think they are buying.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What is 'symptom relief versus goal pursuit'?",
            options: ["The orientation difference that separates treatment from coaching in a transcript","Short-term versus long-term outcomes in an engagement","What a client asks for versus what they need","Addressing a problem versus building toward a positive"],
            correctIndex: 0,
            explanation: "It is the first of the three practical questions, and the one that shows up most clearly if someone else reads the session.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "Which is the clearest out-of-scope act on this pillar?",
            options: ["Working through childhood experiences to resolve present anxiety","Asking what the dread before a Monday is made of","Teaching a breathing practice to a wound-up client","Helping a client articulate what matters and align behaviour"],
            correctIndex: 0,
            explanation: "Excavating the past to remediate a condition fails all three practical-test questions at once.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "Which named therapies does the NBHWC scope exclude?",
            options: ["CBT, EMDR, Solution Focused Therapy, DBT, Internal Family Systems","CBT, psychoanalysis, EMDR, exposure therapy, ACT","DBT, Internal Family Systems, hypnotherapy, art therapy, narrative therapy","CBT, DBT, motivational interviewing, EMDR, Solution Focused Therapy"],
            correctIndex: 0,
            explanation: "Motivational interviewing is conspicuously not among them, which is why WELL-01 can teach it at length.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "Why is this pillar worth doing despite the boundary risk?",
            options: ["Stress, mood, and connection are where most adherence failures originate","Clients request this work more than the physical pillars","It has the strongest randomized evidence in the program","It is the only pillar addressing multi-decade outcomes"],
            correctIndex: 0,
            explanation: "The client who cannot sustain the walking habit is usually not short of information about walking.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is the honesty commitment specific to this course?",
            options: ["The mindfulness literature is the most oversold evidence a wellness coach will meet","Mental-health claims carry legal exposure requiring citation","Clients here are unusually vulnerable to overclaiming","The evidence is weaker here, so claims are provisional"],
            correctIndex: 0,
            explanation: "A coach repeating inflated mindfulness claims loses the credibility they need for the parts that genuinely hold up.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "State the functional test as this pillar depends on it.",
            options: ["If a licensing board read a transcript, what would they see me doing?","Would a reasonable client understand this as coaching?","Does my certification's scope explicitly permit this?","Have I documented consent to work in this territory?"],
            correctIndex: 0,
            explanation: "Deep emotional processing labeled coaching can be assessed as psychotherapy practice. The question is never what you call it.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What may a coach share with a client about mindfulness techniques?",
            options: ["Teach them as self-regulation tools to a non-clinical client","Deliver a structured programme as treatment for a diagnosis","Adapt a clinical protocol for a coaching format","Deliver them only where a clinician has approved"],
            correctIndex: 0,
            explanation: "The technique is identical to the clinical version, which is why population, framing, and claim have to carry the distinction.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "A prospective client wants anxiety coaching while awaiting therapy. What do you do?",
            options: ["Offer what is genuinely yours, say it is not treatment, keep the appointment","Decline, since working with someone awaiting therapy risks substituting","Accept as described, since clinical care is already arranged","Offer a reduced-scope version until therapy begins"],
            correctIndex: 0,
            explanation: "Do not sell a service named for their condition and do not become the substitute for care they are queued for.",
            sourceLessonSlug: "the-gray-zones",
          },
        ],
      },
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

**First, a correction this course owes you.** An earlier draft of this lesson said mindfulness carries essentially no risk. That was too clean, and the best measurement of the question says otherwise. Britton and colleagues built a 44-item structured interview specifically to measure meditation-related side effects and had an independent assessor administer it to 96 people finishing an eight-week mindfulness-based cognitive therapy programme. **Eighty-three percent reported at least one meditation-related side effect.** Effects with negative valence occurred in **58 percent**, and effects with a negative impact on functioning in **37 percent**. **Lasting bad effects occurred in 6 to 14 percent**, and were associated with signs of dysregulated arousal, meaning hyperarousal and dissociation (Britton et al., 2021).

**Now read the authors' own closing sentence, because it is the part that prevents panic.** Meditation practice in these programmes "is associated with transient distress and negative impacts at similar rates to other psychological treatments." Not uniquely risky. Risky in the ordinary way that psychological interventions are risky, which is a category most people do not think of mindfulness as belonging to at all.

**Two qualifiers a coach must attach.** This was mindfulness-based cognitive therapy, an eight-week clinical programme, in 96 people, and the rate of anything depends enormously on being asked with a 44-item instrument rather than waiting for spontaneous report. It is not a prevalence estimate for a client doing five minutes on a phone app. What it does establish, and what the earlier draft got wrong, is that the honest floor is not zero.

**What changes in practice.** Three things, none of them "stop offering it." Say in advance that difficult experiences can come up and that stopping is always an option, which is expectation-setting exactly as WELL-01 taught it. Ask about it afterwards rather than waiting to be told, because 83 percent of a sample reported something when an interviewer asked and far fewer volunteer it unprompted. And treat hyperarousal or dissociation as the signals to stop and route to lesson 3's functional test, not as evidence that the client is practising wrong.

**The case for it survives the numbers.** It costs nothing. It requires no equipment and no appointment. Its risks are real and in the same range as other psychological interventions, which is a different sentence from the one this lesson used to carry. It has a real effect against doing nothing, established at high confidence. And it is a skill, meaning the client keeps it after your engagement ends. Judged on cost, risk, portability, and durability rather than on effect size alone, it earns its place, which is exactly the argument WELL-04 made for breathwork.

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
- **Skill versus programme**: teaching a technique to a non-clinical client, as against delivering a structured intervention as treatment for a diagnosis.
- **Meditation-related side effect (MRSE)**: any effect a participant attributes to meditation practice; reported by 83 percent of a mindfulness-based cognitive therapy sample when systematically asked.
- **Lasting bad effect**: an adverse effect that persists; 6 to 14 percent of that sample, associated with hyperarousal and dissociation.
- **Structured elicitation**: measuring adverse effects by asking every item rather than awaiting spontaneous report; the reason these rates look higher than the field assumed.

## Sources
Britton, W. B., Lindahl, J. R., Cooper, D. J., Canby, N. K., & Palitsky, R. (2021). Defining and measuring meditation-related adverse effects in mindfulness-based programs. *Clinical Psychological Science, 9*(6), 1185-1204. https://pubmed.ncbi.nlm.nih.gov/35174010/`,
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
          {
            prompt: "How large was the Galante individual-participant-data meta-analysis?",
            options: [
              "13 randomized trials, 2,371 participants across eight countries",
              "47 randomized trials, 3,515 participants restricted to active-controlled designs",
              "148 prospective studies, 308,849 participants across multiple countries",
              "13 randomized trials, 3,515 participants in clinical and non-clinical settings",
            ],
            correctIndex: 0,
            explanation:
              "Thirteen trials against passive controls in non-clinical settings. The 47-trial, 3,515-participant figure is Goyal's active-controlled review.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What did Galante find, and with what confidence rating?",
            options: [
              "Distress fell, SMD −0.32 (CI −0.41 to −0.24), with no heterogeneity, confidence rated HIGH",
              "Distress fell, SMD −0.32, with substantial heterogeneity, confidence rated moderate",
              "Distress fell, SMD −0.38 at eight weeks, declining to −0.22 at six months",
              "Distress fell only in participants with elevated baseline distress, at SMD −0.32",
            ],
            correctIndex: 0,
            explanation:
              "High confidence with no heterogeneity is unusually strong for this literature. The 0.38-declining-to-0.22 pattern is Goyal's anxiety result.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "Why does individual-participant data matter?",
            options: [
              "It re-analyses raw participant records rather than published summaries",
              "It allows larger samples than summary-level pooling can achieve",
              "It permits inclusion of unpublished trials that summary methods exclude",
              "It reduces the influence of any single trial on the pooled estimate",
            ],
            correctIndex: 0,
            explanation:
              "The strongest form the design takes. It also allows questions summary data cannot answer, which is how the effect-modification analysis became possible.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What did Galante test for effect modification, and what did it find?",
            options: [
              "Baseline distress, gender, age, education, and dispositional mindfulness; no clear modification by any",
              "Baseline distress and age only; both modified the effect substantially",
              "Programme length, instructor experience, and setting; instructor experience modified the effect",
              "Gender and education; neither modified the effect, though the others were not tested",
            ],
            correctIndex: 0,
            explanation:
              "Five variables, none clearly modifying. So the common sales line that mindfulness is especially suited to some particular kind of person has no support here.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What is a 'passive control'?",
            options: [
              "A group receiving nothing, leaving expectation and attention inside the effect",
              "A comparison group receiving a reduced dose of the same intervention",
              "A group that receives the intervention after the trial concludes",
              "A group whose outcomes are measured without any contact from researchers",
            ],
            correctIndex: 0,
            explanation:
              "Same point WELL-04's control-group lesson made: a waitlist controls for time and little else, which is why passive-controlled numbers run larger.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "How did Goyal restrict the trials included?",
            options: [
              "To randomized trials with ACTIVE controls receiving something real",
              "To randomized trials in clinical populations with diagnosed conditions",
              "To trials of programmes lasting at least eight weeks with trained instructors",
              "To trials measuring psychological outcomes with validated instruments",
            ],
            correctIndex: 0,
            explanation:
              "Health education, exercise, progressive muscle relaxation, medication, other behavioral therapies. The restriction is what makes the null meaningful.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What showed MODERATE evidence of improvement in Goyal?",
            options: [
              "Anxiety (0.38 at eight weeks, 0.22 at three to six months), depression (0.30, 0.23), and pain (0.33)",
              "Stress, distress, and mental-health-related quality of life, at similar magnitudes",
              "Positive mood, attention, and sleep, each at small but consistent effect sizes",
              "Anxiety and depression only, with pain showing insufficient evidence",
            ],
            correctIndex: 0,
            explanation:
              "Three outcomes at moderate evidence. Stress, distress, and quality of life showed LOW evidence of improvement, a separate and weaker category.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What did Goyal find for positive mood, attention, substance use, eating, sleep, and weight?",
            options: [
              "Low evidence of no effect, or insufficient evidence of any effect",
              "Moderate evidence of small improvements across all six outcomes",
              "Low evidence of improvement, at magnitudes smaller than for anxiety",
              "These outcomes were not assessed in the included trials",
            ],
            correctIndex: 0,
            explanation:
              "Two different verdicts, both negative: evidence of no effect, or not enough evidence to say. Neither supports recommending mindfulness for those outcomes.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "Quote Goyal's central finding about active comparisons.",
            options: [
              "No evidence that meditation programs were better than any active treatment",
              "Meditation programs were superior to exercise but not to other behavioral therapies",
              "Meditation programs matched drugs but underperformed against exercise",
              "Meditation programs outperformed active treatments only at longer follow-ups",
            ],
            correctIndex: 0,
            explanation:
              "Drugs, exercise, and other behavioral therapies, across 47 trials. It is the finding the mindfulness industry does not put on the poster.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "How do the two mindfulness findings fit together?",
            options: [
              "Against nothing, a real modest effect; against anything else real, no shown advantage",
              "They conflict, and the course teaches the higher-quality individual-participant-data result",
              "Galante measured distress and Goyal measured anxiety, so they address different questions",
              "Goyal is older, so Galante's finding supersedes it in current practice",
            ],
            correctIndex: 0,
            explanation:
              "Both true, not in conflict. They describe a decent psychosocial option rather than a superior one, which is the honest claim a client will keep doing.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "A client says meditation is not for them. What does the evidence let you say?",
            options: [
              "That is fine: the best option here is largely whichever one they will practise",
              "That resistance is common early and usually resolves with a shorter initial dose",
              "That the individual-participant data found no effect modification, so it should work for them",
              "That an alternative should be tried only after a fair eight-week trial of meditation",
            ],
            correctIndex: 0,
            explanation:
              "Mindfulness has not been shown to beat exercise or structured relaxation. Insisting on meditation is not evidence-based, and the effect-modification null does not obligate anyone.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What is 'strength of evidence,' as Goyal uses it?",
            options: [
              "A graded judgment separate from effect size: bias risk, precision, directness, consistency",
              "The magnitude of the pooled effect across the included trials",
              "The number of trials contributing to a given outcome's estimate",
              "The statistical significance of the pooled result for each outcome",
            ],
            correctIndex: 0,
            explanation:
              "Moderate, low, or insufficient, and independent of how big the effect is. That is why an effect size of 0.33 can carry moderate evidence and another outcome none at all.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What is 'practise-ability,' and why does it decide the choice?",
            options: [
              "The one someone sustains beats the one they abandon, when options are equivalent",
              "The ease with which a technique can be taught within a single coaching session",
              "The proportion of clients who complete a full course of an intervention",
              "The degree to which a practice can be performed without equipment or supervision",
            ],
            correctIndex: 0,
            explanation:
              "It is the deciding factor precisely because the active-controlled evidence found the options roughly equivalent. If nothing is better, sustainability decides.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What correction does lesson 6 make to an earlier draft of itself?",
            options: [
              "That mindfulness carries essentially no risk, which was too clean",
              "That mindfulness should be offered to every client, which overstated the evidence",
              "That the dose-response is established, which the literature does not support",
              "That mindfulness is superior to relaxation, which the active-controlled data contradicts",
            ],
            correctIndex: 0,
            explanation:
              "The course shows its corrections rather than quietly updating. The best measurement of the question says the honest floor is not zero.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "How did Britton and colleagues measure meditation-related side effects?",
            options: [
              "A 44-item structured interview administered by an independent assessor to 96 people",
              "A self-report questionnaire completed by 96 people at programme end",
              "Spontaneous adverse-event reports collected across 13 randomized trials",
              "A clinical interview conducted by the programme instructors themselves",
            ],
            correctIndex: 0,
            explanation:
              "The 44-item Meditation Experiences Interview, independent assessor, after an eight-week mindfulness-based cognitive therapy programme. The method matters enormously to the rates.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What proportion reported at least one meditation-related side effect?",
            options: [
              "83 percent",
              "58 percent",
              "37 percent",
              "6 to 14 percent",
            ],
            correctIndex: 0,
            explanation:
              "Eighty-three percent reported something. Fifty-eight percent had effects with negative valence, 37 percent had negative impacts on functioning, and 6 to 14 percent had lasting bad effects.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What proportion had LASTING bad effects, and what were they associated with?",
            options: [
              "6 to 14 percent, associated with signs of dysregulated arousal: hyperarousal and dissociation",
              "37 percent, associated with pre-existing anxiety and depressive symptoms",
              "58 percent, associated with longer daily practice durations",
              "83 percent, associated with the structured nature of the eight-week programme",
            ],
            correctIndex: 0,
            explanation:
              "The narrowest and most serious category. Hyperarousal and dissociation are the specific signals the lesson tells a coach to treat as stop-and-route.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the authors' own closing sentence, and why does the lesson quote it?",
            options: [
              "Rates are similar to other psychological treatments; it prevents panic without softening it",
              "Adverse effects are rare and transient; it reassures coaches the practice is safe",
              "Further research is required; it signals the finding is provisional",
              "Screening should precede any meditation instruction; it establishes a practice standard",
            ],
            correctIndex: 0,
            explanation:
              "Not uniquely risky, risky in the ordinary way psychological interventions are, which is a category most people do not think of mindfulness as belonging to at all.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What two qualifiers must a coach attach to the Britton figures?",
            options: [
              "An eight-week clinical programme in 96 people, and rates depend on a 44-item instrument",
              "It was a single-site study, and the sample was drawn from an unusually distressed population",
              "It was self-reported, and the assessment occurred only at programme end",
              "It measured side effects rather than adverse events, and the two are not comparable",
            ],
            correctIndex: 0,
            explanation:
              "Not a prevalence estimate for someone doing five minutes on a phone app. What it does establish is that the honest floor is not zero.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What three things change in practice because of the Britton finding?",
            options: [
              "Say difficult experiences can occur; ask afterwards; treat hyperarousal and dissociation as stop signals",
              "Screen clients before offering meditation; limit dose to five minutes; require clinician clearance",
              "Stop offering mindfulness to any client with a mental-health history; document all instruction",
              "Offer only guided practice; avoid silent meditation entirely; refer at any sign of distress",
            ],
            correctIndex: 0,
            explanation:
              "None of them is 'stop offering it'. Asking afterwards matters because 83 percent reported something when an interviewer asked and far fewer volunteer it unprompted.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is 'structured elicitation'?",
            options: [
              "Measuring adverse effects by asking every item rather than awaiting spontaneous report",
              "Delivering an intervention according to a fixed protocol across participants",
              "Interviewing participants at predetermined intervals throughout a trial",
              "Using validated instruments rather than open-ended questions to assess outcomes",
            ],
            correctIndex: 0,
            explanation:
              "It is the reason these rates look higher than the field assumed, and it is also why the coaching instruction is to ask rather than wait.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the case for offering mindfulness despite the modest effect sizes?",
            options: [
              "Zero cost, no equipment, a real effect against nothing at high confidence, and a durable skill",
              "Its effect size exceeds that of other psychosocial options once adherence is accounted for",
              "It is the intervention clients request most often, so uptake is high",
              "It has the broadest evidence base of any technique taught in this program",
            ],
            correctIndex: 0,
            explanation:
              "Cost, portability, and durability rather than effect size alone, which is exactly the argument WELL-04 made for breathwork.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "How should mindfulness be introduced, per this lesson?",
            options: [
              "As one option among several, with the honest size named, and the client choosing",
              "As the first-line recommendation, with alternatives offered if it does not suit",
              "With emphasis on the high-confidence distress finding to build the client's expectation",
              "After a trial period, so the client's own experience informs the framing",
            ],
            correctIndex: 0,
            explanation:
              "Understating an intervention is a strange sales technique and an excellent retention technique, because nobody quits over an expectation you never set.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What does the course say about mindfulness dose?",
            options: [
              "Dose-response evidence is mixed, so no minute-count is given; use the habit rules",
              "Ten minutes daily is the minimum effective dose established across trials",
              "Longer practice reliably buys more benefit, so dose should increase over time",
              "Dose is irrelevant provided the practice occurs at a consistent time each day",
            ],
            correctIndex: 0,
            explanation:
              "Pick a dose the client will repeat, anchor it to an existing cue, define the minimum that counts, and pre-negotiate the miss. Inventing a minute-count is what the dossier rule forbids.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the single most useful sentence for a beginner, and what does it prevent?",
            options: [
              "That a wandering attention IS the practice, not a failure of it; it prevents the week-two quit",
              "That benefits accumulate slowly; it prevents disappointment at the first month",
              "That difficult experiences can occur; it prevents alarm if they do",
              "That mindfulness is no better than exercise; it prevents unrealistic expectations",
            ],
            correctIndex: 0,
            explanation:
              "Clients frequently conclude they are 'bad at meditating' because attention wanders. Saying it in advance heads off the commonest reason people stop.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What separates teaching mindfulness as a skill from delivering it as treatment?",
            options: [
              "The population, the framing, and the claim; not the technique",
              "The duration of instruction and whether it follows a manualized protocol",
              "Whether the coach has completed formal mindfulness teacher training",
              "Whether the client has a diagnosed condition at the time of instruction",
            ],
            correctIndex: 0,
            explanation:
              "The technique is identical, which is precisely why the other three factors have to carry the distinction.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is 'expectation setting' in this lesson's sense?",
            options: [
              "Stating an honest effect size in advance, which protects retention better than enthusiasm",
              "Agreeing measurable outcomes with the client before the practice begins",
              "Describing what the client should notice during a session of practice",
              "Establishing how long the client will trial the practice before reviewing it",
            ],
            correctIndex: 0,
            explanation:
              "Nobody quits over an expectation you never set. It is the same mechanism WELL-01 used for habit-formation timelines and WELL-04 used for breathwork.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "Reconcile 'SMD −0.32 with high confidence' and 'no better than any active treatment'.",
            options: [
              "They measure different comparisons: against passive controls, and against other real interventions",
              "The first is more recent and higher quality, so it supersedes the second",
              "The first measured distress and the second measured anxiety, so they do not overlap",
              "The first included non-clinical settings only, so it does not generalize",
            ],
            correctIndex: 0,
            explanation:
              "Neither is wrong. Together they describe a decent option among several, which is the honest claim and the one clients keep doing.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "A client reports feeling agitated and detached after two weeks of daily meditation. What does lesson 6 direct?",
            options: [
              "Treat hyperarousal and dissociation as stop signals, and route to lesson 3's functional test",
              "Reassure them that difficult experiences are a normal part of deepening practice",
              "Reduce the daily dose and continue, monitoring whether the symptoms resolve",
              "Switch them to a guided rather than silent practice to reduce the intensity",
            ],
            correctIndex: 0,
            explanation:
              "Those two signs specifically were associated with lasting bad effects in Britton's data. The lesson is explicit that they are not evidence the client is practising wrong.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "Which claim about mindfulness would this course refuse?",
            options: [
              "'Mindfulness is especially effective for people with high baseline stress'",
              "'Against passive controls, distress fell at SMD −0.32 with high confidence'",
              "'No evidence shows meditation programs beat drugs, exercise, or other behavioral therapies'",
              "'Eighty-three percent of one clinical sample reported at least one side effect when asked'",
            ],
            correctIndex: 0,
            explanation:
              "The individual-participant data specifically tested baseline distress as an effect modifier and found no clear indication. It is the common sales line the analysis was designed to check.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What is a 'passive control'?",
            options: ["A group receiving nothing, leaving expectation and attention inside the effect","A group receiving a reduced dose of the intervention","A group receiving the intervention after the trial","A group measured without researcher contact"],
            correctIndex: 0,
            explanation: "The same point WELL-04's control-group lesson made: a waitlist controls for time and little else.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What is 'effect modification', and what happened when Galante tested it?",
            options: ["Whether an intervention works differently for different people; no clear modification found","Whether an effect changes over time; it decayed by six months","Whether the effect differs by trial quality; higher-quality trials showed more","Whether the outcome measure changes the estimate; it did substantially"],
            correctIndex: 0,
            explanation: "Baseline distress, gender, age, education, and dispositional mindfulness were all tested.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What is 'psychological distress' as the primary outcome?",
            options: ["The composite of unpleasant mental and emotional experience, including anxiety and depression","A validated diagnostic threshold for common mental disorders","Self-reported stress specifically, excluding mood symptoms","The clinician-rated severity of a presenting complaint"],
            correctIndex: 0,
            explanation: "A composite, which is why it can move in a non-clinical population without anyone having a diagnosis.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What did Goyal find at moderate evidence, and at what magnitudes?",
            options: ["Anxiety 0.38 falling to 0.22, depression 0.30 falling to 0.23, pain 0.33","Anxiety 0.30, depression 0.38, pain 0.22, all sustained","Stress 0.38, distress 0.30, quality of life 0.33","Anxiety and depression only, both at 0.33"],
            correctIndex: 0,
            explanation: "Stress, distress, and mental-health-related quality of life showed LOW evidence of improvement, a separate and weaker category.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "How did Goyal restrict the included trials?",
            options: ["To randomized trials with ACTIVE controls receiving something real","To trials in clinical populations with diagnosed conditions","To programmes of at least eight weeks with trained instructors","To trials using validated outcome instruments"],
            correctIndex: 0,
            explanation: "Health education, exercise, progressive muscle relaxation, medication, other behavioral therapies. The restriction is what makes the null meaningful.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What did Goyal find for positive mood, attention, substance use, eating, sleep, and weight?",
            options: ["Low evidence of no effect, or insufficient evidence of any effect","Moderate evidence of small improvements across all six","Low evidence of improvement at magnitudes below anxiety","These outcomes were not assessed"],
            correctIndex: 0,
            explanation: "Two different verdicts, both negative. Neither supports recommending mindfulness for those outcomes.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What is 'strength of evidence' as distinct from effect size?",
            options: ["A graded judgment on bias risk, precision, directness, and consistency","The magnitude of the pooled effect","The number of trials contributing an estimate","The statistical significance of the result"],
            correctIndex: 0,
            explanation: "Independent of how big the effect is, which is why 0.33 can carry moderate evidence while another outcome carries none.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What is 'practise-ability', and why does it decide?",
            options: ["The one someone sustains beats the one they abandon, when options are equivalent","How easily a technique can be taught in one session","The proportion of clients completing a full course","Whether a practice needs equipment or supervision"],
            correctIndex: 0,
            explanation: "It decides precisely because the active-controlled evidence found the options roughly equivalent. If nothing is better, sustainability decides.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "How did Britton's team measure side effects?",
            options: ["A 44-item structured interview by an independent assessor, in 96 people","A self-report questionnaire at programme end","Spontaneous adverse-event reports across 13 trials","A clinical interview by the programme instructors"],
            correctIndex: 0,
            explanation: "The Meditation Experiences Interview, after an eight-week MBCT programme. The method matters enormously to the rates.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What proportion had lasting bad effects, and what were they tied to?",
            options: ["6 to 14 percent, tied to hyperarousal and dissociation","37 percent, tied to pre-existing anxiety","58 percent, tied to longer daily practice","83 percent, tied to the programme's structure"],
            correctIndex: 0,
            explanation: "The narrowest and most serious category, and those two signs are what the lesson names as stop-and-route signals.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What two qualifiers must attach to the Britton figures?",
            options: ["An eight-week clinical programme in 96 people, and rates depend on a 44-item instrument","A single site, and an unusually distressed sample","Self-report only, and assessment at programme end alone","Side effects rather than adverse events, which differ"],
            correctIndex: 0,
            explanation: "Not a prevalence estimate for someone doing five minutes on a phone app. What it establishes is that the honest floor is not zero.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is 'structured elicitation'?",
            options: ["Measuring adverse effects by asking every item rather than awaiting spontaneous report","Delivering an intervention to a fixed protocol","Interviewing at predetermined intervals","Using validated instruments rather than open questions"],
            correctIndex: 0,
            explanation: "It is why these rates look higher than the field assumed, and why the coaching instruction is to ask rather than wait.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "How should mindfulness be introduced?",
            options: ["As one option among several, honest size named, client choosing","As first-line, with alternatives if it does not suit","Emphasising the high-confidence distress finding to build expectation","After a trial period, so their experience informs the framing"],
            correctIndex: 0,
            explanation: "Understating an intervention is a strange sales technique and an excellent retention technique, because nobody quits over an expectation you never set.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What does the course say about mindfulness dose?",
            options: ["Evidence is mixed, so no minute-count is given; use the habit rules","Ten minutes daily is the established minimum effective dose","Longer practice reliably buys more, so dose should rise","Dose is irrelevant if timing is consistent"],
            correctIndex: 0,
            explanation: "Pick a dose the client will repeat, anchor it, define the minimum, pre-negotiate the miss. Inventing a minute-count is what the dossier rule forbids.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What separates teaching mindfulness as a skill from delivering it as treatment?",
            options: ["The population, the framing, and the claim; not the technique","The duration and whether it follows a manual","Whether the coach has teacher training","Whether the client has a diagnosed condition"],
            correctIndex: 0,
            explanation: "The technique is identical, which is precisely why the other three factors have to carry the distinction.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "A client reports agitation and detachment after two weeks of daily meditation.",
            options: ["Treat hyperarousal and dissociation as stop signals; route to the functional test","Reassure them difficult experiences accompany deepening practice","Reduce the dose and continue, monitoring for resolution","Switch to guided rather than silent practice"],
            correctIndex: 0,
            explanation: "Those two signs were specifically associated with lasting bad effects, and they are not evidence the client is practising wrong.",
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
          {
            prompt: "How large was the Holt-Lunstad 2010 review, and what was the headline finding?",
            options: [
              "148 prospective studies, 308,849 participants; odds ratio 1.50 (1.42 to 1.59) for survival",
              "70 studies, 3,407,134 participants; odds ratio 1.29 for mortality after confound adjustment",
              "148 prospective studies, 308,849 participants; odds ratio 1.91 for survival across all measures",
              "13 randomized trials, 2,371 participants; odds ratio 1.50 for survival at follow-up",
            ],
            correctIndex: 0,
            explanation:
              "A 50 percent greater likelihood of being alive at follow-up, holding across age, sex, initial health status, cause of death, and follow-up period. The 1.91 figure is one measure type within it.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "Which measure of social connection showed the STRONGEST association?",
            options: [
              "Complex measures of social integration, at odds ratio 1.91 (1.63 to 2.23)",
              "Living alone versus with others, at odds ratio 1.19 (0.99 to 1.44)",
              "Self-reported loneliness, at odds ratio 1.50 (1.42 to 1.59)",
              "Frequency of contact with family members, at odds ratio 1.91",
            ],
            correctIndex: 0,
            explanation:
              "Multiple roles, group memberships, and varied contact. Living alone was the weakest and did not reach statistical significance.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What did the weakest measure show, and what does that contrast instruct?",
            options: [
              "Living alone, 1.19 (0.99 to 1.44), not significant; ask about texture, not living arrangement",
              "Living alone, 1.32, significant; living arrangement is the first thing to ask about",
              "Loneliness, 1.26, not significant; subjective reports should be discounted",
              "Group membership, 1.19, not significant; formal groups matter less than informal contact",
            ],
            correctIndex: 0,
            explanation:
              "The coaching question is never 'do you live alone' but closer to 'who do you see in a normal week, and in what capacities'.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "How does this course state the magnitude of the social-connection finding?",
            options: [
              "Comparable with well-established risk factors, which is the authors' own framing",
              "Greater than smoking fifteen cigarettes a day, per the authors' comparison",
              "Greater than obesity and physical inactivity combined",
              "The single largest modifiable risk factor identified in the literature",
            ],
            correctIndex: 0,
            explanation:
              "Confident rankings against smoking or obesity go beyond what the papers say. Overstating the strongest finding in your field is the least necessary credibility risk available.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "Why does this finding belong in a health-coaching program?",
            options: [
              "Entirely coachable, no license needed, costs nothing, and outside what a trainer would ever address",
              "It is the only mortality finding with randomized evidence behind it",
              "Clients raise it more often than any other concern in coaching sessions",
              "It is the finding certifying bodies weight most heavily in their content outlines",
            ],
            correctIndex: 0,
            explanation:
              "Your certifications have nothing to say about it, and it may be the largest lever in the room. That combination is what earns it a section.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is 'social integration' as this course defines it?",
            options: [
              "The complexity of a social life across roles, memberships, and contact types",
              "The degree to which a person feels they belong in their community",
              "The number of people a person has regular contact with",
              "The extent to which a person's relationships overlap with each other",
            ],
            correctIndex: 0,
            explanation:
              "Complexity, not quantity or feeling. It is the measure most strongly associated with survival, at 1.91.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What are the three 2015 confound-adjusted odds ratios?",
            options: [
              "Social isolation 1.29, loneliness 1.26, living alone 1.32",
              "Social isolation 1.50, loneliness 1.29, living alone 1.19",
              "Social isolation 1.26, loneliness 1.32, living alone 1.29",
              "Social isolation 1.91, loneliness 1.50, living alone 1.19",
            ],
            correctIndex: 0,
            explanation:
              "29, 26, and 32 percent increased likelihood of mortality respectively, after statistical control for confounds.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What did the 2015 analysis find about objective versus subjective measures?",
            options: [
              "No difference: being isolated and feeling lonely carried comparable risk",
              "Objective isolation carried substantially higher risk than subjective loneliness",
              "Subjective loneliness carried higher risk, since it captures the psychological mechanism",
              "The comparison could not be made, since the measures were not directly comparable",
            ],
            correctIndex: 0,
            explanation:
              "A coach who treats loneliness as a softer version of isolation has the evidence backwards. A client with a full calendar who feels unseen is not reporting a lesser problem.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What did the age finding show, and why does it matter here?",
            options: [
              "Social deficits were MORE predictive in samples averaging under 65; mid-life is where coaching lands hardest",
              "Social deficits were more predictive in older samples, confirming this is an ageing concern",
              "Age did not modify the association, so the finding applies equally across the lifespan",
              "The association strengthened progressively with age across all included samples",
            ],
            correctIndex: 0,
            explanation:
              "The intuition that this is an old-age problem to worry about later is exactly wrong, which matters for a program organized around a decades-long horizon.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is coachable in the connection domain?",
            options: [
              "Frequency and variety of contact, group membership, depth work, and the practical logistics",
              "Loneliness itself, treated as a psychological state responsive to reframing",
              "The client's social skills, taught through structured practice and role-play",
              "The client's living arrangements, which the evidence identifies as the key variable",
            ],
            correctIndex: 0,
            explanation:
              "Four targets, all behavioral. The lesson adds a memorable line about the last: adult friendships mostly die of scheduling rather than of conflict.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "Why is group membership described as conveniently actionable?",
            options: [
              "It is the strongest measure in the 2010 data and is simply a recurring thing with the same people",
              "It requires no initiative from the client beyond attending",
              "It produces contact of higher quality than one-to-one relationships",
              "It substitutes for close relationships when those are unavailable",
            ],
            correctIndex: 0,
            explanation:
              "Strongest evidence and simplest implementation is a rare combination, which is why it is the first place a coach usually goes.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is NOT coachable in this domain?",
            options: [
              "Loneliness with hopelessness, worthlessness, or withdrawal from previously valued activity",
              "Loneliness that has persisted for more than six months without improvement",
              "Loneliness in clients who live alone and have no local family",
              "Loneliness reported by clients currently in psychotherapy elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "That combination is a mental-health referral, not a social-calendar project. The overlap between loneliness and depression is substantial and the coach's job is noticing which is driving.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "A client has a packed social calendar and feels profoundly unseen. Is that a smaller problem than isolation?",
            options: [
              "No; objective and subjective measures carried comparable risk in the 2015 analysis",
              "Yes; objective isolation carries measurably higher mortality risk",
              "It cannot be judged without assessing the quality of their relationships",
              "Yes, unless the feeling persists for more than three months",
            ],
            correctIndex: 0,
            explanation:
              "Loneliness at 1.26 and social isolation at 1.29, with no difference found between objective and subjective measures. The full calendar does not discount the report.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is 'confound-adjusted'?",
            options: [
              "Effect estimates calculated after statistically controlling for baseline health, age, and socioeconomic status",
              "Estimates from studies that randomized participants, removing confounding by design",
              "Estimates restricted to studies where confounders were measured but not adjusted",
              "Estimates recalculated after excluding participants with pre-existing conditions",
            ],
            correctIndex: 0,
            explanation:
              "Statistical control rather than randomization. The 2015 pooling used studies where those controls had been applied, which is why the figures are lower than the 2010 headline.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What do PERMA's five elements stand for?",
            options: [
              "Positive emotion, Engagement, Relationships, Meaning, Accomplishment",
              "Purpose, Engagement, Resilience, Meaning, Autonomy",
              "Positive emotion, Enjoyment, Relationships, Mindfulness, Achievement",
              "Purpose, Emotion, Relationships, Mastery, Attainment",
            ],
            correctIndex: 0,
            explanation:
              "Seligman's framework, operationalised as a questionnaire and adapted across many countries and populations.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "Where does PERMA genuinely hold up?",
            options: [
              "As a descriptive vocabulary that gives shared language and surfaces neglected domains",
              "As a validated architecture whose five elements are independently manipulable",
              "As a measurement instrument that reveals what a conversation would miss",
              "As a causal model explaining how well-being is produced",
            ],
            correctIndex: 0,
            explanation:
              "Someone whose accomplishment is high and whose relationships are thin recognises that picture immediately, and the recognition is often the intervention.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "What does factor-analytic work on the PERMA questionnaire find?",
            options: [
              "The elements are heavily inter-correlated and load substantially on a single general well-being factor",
              "The five elements separate cleanly, supporting the model's structure",
              "Three of the five elements are distinguishable and two are not",
              "The factor structure varies by country, preventing any general conclusion",
            ],
            correctIndex: 0,
            explanation:
              "Some analyses favour a model where the five sit beneath one overarching factor. The five-independent-pillars claim is not well supported psychometrically.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "What is the honest verdict on PERMA?",
            options: [
              "A good map and a contested theory: use it as conversational structure, not as validated architecture",
              "A validated framework whose questionnaire should be administered at intake",
              "A discredited model that should be replaced by better-evidenced alternatives",
              "A theoretical framework with no practical application in coaching contexts",
            ],
            correctIndex: 0,
            explanation:
              "Three specific prohibitions follow: do not present it as validated architecture, do not imply independent manipulability, and do not treat the questionnaire as revealing more than a conversation would.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "What is the additional weakness in PERMA's supporting literature?",
            options: [
              "Much of it is cross-sectional, correlational, and self-reported",
              "Most of it was conducted by the model's original authors",
              "It has been tested only in Western, educated populations",
              "It relies on samples too small to support factor analysis",
            ],
            correctIndex: 0,
            explanation:
              "Three design limitations at once, which is separate from and additional to the factor-structure problem.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "How does PERMA earn its place despite the verdict?",
            options: [
              "It prompts the question a client has not asked themselves",
              "It provides a scoring system that tracks progress over time",
              "It covers domains that other frameworks omit entirely",
              "It is widely recognised, so clients arrive already familiar with it",
            ],
            correctIndex: 0,
            explanation:
              "The map is the useful part. And one of its five elements, relationships, carries evidence far stronger than the framework as a whole.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "What is a 'general factor' in this context?",
            options: [
              "A single underlying dimension explaining much of the shared variance across subscales",
              "The average score across all five PERMA subscales combined",
              "A factor common to all well-being questionnaires regardless of model",
              "The proportion of variance a model explains in an outcome measure",
            ],
            correctIndex: 0,
            explanation:
              "It is what PERMA's subscales largely reflect, which is the psychometric finding that qualifies the five-pillars claim.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "What is 'descriptive vocabulary versus causal model'?",
            options: [
              "Language that helps a conversation, versus a validated account of how parts produce the whole",
              "Terminology used with clients, versus terminology used between professionals",
              "A framework's observable elements, versus the mechanisms connecting them",
              "Qualitative description of a client's state, versus quantitative measurement of it",
            ],
            correctIndex: 0,
            explanation:
              "PERMA succeeds as the first and is contested as the second. Keeping the two apart is what lets a coach use it without overclaiming.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "Which claim about social connection would this course refuse?",
            options: [
              "'Loneliness is worse for you than smoking fifteen cigarettes a day'",
              "'Stronger social relationships carried odds ratio 1.50 for survival across 148 studies'",
              "'Complex social integration showed the strongest association, at 1.91'",
              "'Social deficits were more predictive of mortality in samples averaging under 65'",
            ],
            correctIndex: 0,
            explanation:
              "The authors say the influence is comparable with well-established risk factors. Specific rankings go beyond the papers, and this is the finding a coach least needs to overstate.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "Why does the course say adult friendships mostly die of scheduling?",
            options: [
              "The practical logistics quietly decide the frequency and variety of contact",
              "Conflict is rare among adults, so attrition has no other explanation",
              "Scheduling difficulties are the most commonly reported barrier in the literature",
              "Adults have fewer opportunities for spontaneous contact than younger people",
            ],
            correctIndex: 0,
            explanation:
              "It reframes connection as a logistics problem, which is coachable in exactly the way habit and environment design are, rather than as a relational or emotional problem.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "A client asks whether they should worry about connection now or later in life. What does the evidence support?",
            options: [
              "Now: social deficits were more predictive of death in samples averaging under 65",
              "Later: the association strengthens with age as networks naturally contract",
              "Neither; the association was constant across age groups studied",
              "Now, but only for clients who already live alone",
            ],
            correctIndex: 0,
            explanation:
              "The intuition inverts the finding. For a program organized around a decades-long horizon, mid-life is where this coaching has the most to work with.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is an 'odds ratio for survival' of 1.50?",
            options: [
              "A 50 percent greater likelihood of being alive at follow-up",
              "A 50 percent lower risk of death during the follow-up period",
              "A one-and-a-half-fold increase in expected lifespan",
              "A 50 percent chance of survival relative to the reference group",
            ],
            correctIndex: 0,
            explanation:
              "Greater odds of being alive, not a lifespan multiplier and not an absolute probability. Precision here is what keeps the claim defensible.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is a 'binary indicator,' and how did it perform?",
            options: [
              "A crude yes-or-no measure such as living alone; weakest and not statistically significant",
              "A measure combining two related constructs into one score; strongest of the measures",
              "A threshold applied to a continuous measure; performed comparably to the continuous version",
              "A yes-or-no measure of loneliness; performed comparably to objective isolation",
            ],
            correctIndex: 0,
            explanation:
              "1.19 with a confidence interval crossing 1. It is the contrast with complex integration at 1.91 that carries the coaching instruction.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is 'loneliness' as distinct from 'social isolation'?",
            options: [
              "The subjective experience of unwanted disconnection, carrying risk comparable to objective isolation",
              "A milder form of social isolation, carrying proportionally lower risk",
              "Isolation accompanied by distress, which is what makes it clinically relevant",
              "The absence of close relationships, as distinct from the absence of contact",
            ],
            correctIndex: 0,
            explanation:
              "Subjective versus objective, with comparable risk. Reading it as a milder form is the specific error the 2015 finding corrects.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "Which is the better opening question about a client's social life?",
            options: [
              "'Who do you see in a normal week, and in what capacities?'",
              "'Do you live alone, or with other people?'",
              "'How often do you feel lonely?'",
              "'How many close friends would you say you have?'",
            ],
            correctIndex: 0,
            explanation:
              "It asks about texture: roles, memberships, and variety, which is the measure that carried 1.91. Living arrangement carried 1.19 and did not reach significance.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is 'social integration' as this course defines it?",
            options: ["The complexity of a social life across roles, memberships, and contact types","How strongly a person feels they belong in their community","The number of people someone has regular contact with","How much a person's relationships overlap"],
            correctIndex: 0,
            explanation: "Complexity, not quantity or feeling. It is the measure most strongly associated with survival, at 1.91.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is a 'binary indicator', and how did it perform?",
            options: ["A crude yes-or-no measure such as living alone; weakest and not significant","Two related constructs combined into one score; strongest of the measures","A threshold on a continuous measure; comparable to the continuous version","A yes-or-no loneliness measure; comparable to objective isolation"],
            correctIndex: 0,
            explanation: "1.19 with a confidence interval crossing 1. The contrast with complex integration at 1.91 carries the coaching instruction.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What is 'confound-adjusted'?",
            options: ["Estimates calculated after statistically controlling for baseline health, age, and status","Estimates from randomized studies where design removes confounding","Estimates from studies measuring but not adjusting for confounders","Estimates excluding participants with pre-existing conditions"],
            correctIndex: 0,
            explanation: "Statistical control rather than randomization, which is why the 2015 figures are lower than the 2010 headline.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is a 'general factor' in the PERMA critique?",
            options: ["A single underlying dimension explaining much of the shared variance across subscales","The average score across all five subscales","A factor common to all well-being questionnaires","The variance a model explains in an outcome"],
            correctIndex: 0,
            explanation: "It is what PERMA's subscales largely reflect, which is the psychometric finding qualifying the five-pillars claim.",
            sourceLessonSlug: "perma-as-vocabulary",
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
      slug: "quiz-crisis-and-craft",
      title: "15 · Knowledge check: crisis and craft",
      section: "Section 4 · Crisis and craft",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How does this lesson define readiness for a crisis disclosure?",
            options: [
              "A protocol you rehearsed, not a feeling you summon",
              "A set of credentials establishing competence to respond",
              "A written policy the client has agreed to at intake",
              "An established relationship with a clinician who can accept referrals",
            ],
            correctIndex: 0,
            explanation:
              "Rehearsal rather than disposition. It is why the lesson exists as a protocol rather than as guidance about being caring.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "How should a coach raise the question of suicide?",
            options: [
              "Ask plainly whether the person is having thoughts of suicide",
              "Ask indirectly first, and escalate to a direct question if the answer is unclear",
              "Wait for the client to raise it, since asking may plant the idea",
              "Ask at the end of the session, so there is time to prepare the question",
            ],
            correctIndex: 0,
            explanation:
              "Do not hint, do not euphemise, do not wait for a better moment. Crisis-support practice is built on asking clearly.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What does the lesson say about the fear that asking plants the idea?",
            options: [
              "It is not a reason to avoid the question; crisis-support practice is built on asking clearly",
              "It is well founded, which is why the question should be asked only by clinicians",
              "It applies to indirect questions but not to direct ones",
              "It is why the question should be asked only when other signs are present",
            ],
            correctIndex: 0,
            explanation:
              "And a direct question communicates something a careful one does not: that you can hear the answer.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What is the immediate goal after a disclosure?",
            options: [
              "Connection and understanding, not assessment",
              "Risk assessment, so the appropriate level of response can be determined",
              "Safety planning, agreed and documented before the session ends",
              "Contacting emergency services while the client remains on the call",
            ],
            correctIndex: 0,
            explanation:
              "You are not diagnosing; you are understanding enough to help them get to the right place. Assessment is what the crisis line and clinicians do.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What does the coach seek to understand?",
            options: [
              "What is happening, how long, are they thinking about acting, is there a plan, is there access to means",
              "Whether the client has a psychiatric diagnosis and is currently in treatment",
              "What triggered the current episode and how it relates to their coaching goals",
              "Whether the client has disclosed this to anyone else previously",
            ],
            correctIndex: 0,
            explanation:
              "Five things, all about the present situation. None of them is diagnostic, and all of them help route the person correctly.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What is the 988 Suicide and Crisis Lifeline, and what does it offer?",
            options: [
              "The US crisis resource by call, text, or chat, with Deaf and Hard of Hearing and Spanish-language services",
              "A US referral line that connects callers to local mental-health providers during business hours",
              "A national helpline available by telephone only, with 24-hour clinician staffing",
              "An emergency dispatch service that sends responders to the caller's location",
            ],
            correctIndex: 0,
            explanation:
              "Three contact modes plus dedicated services. Knowing the modes matters because a client who will not call may text.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What should a coach practising outside the United States do?",
            options: [
              "Look up their jurisdiction's line now, before it is needed, and publish it in their materials",
              "Use 988 as a fallback, since it accepts international contacts",
              "Direct clients to emergency services, since crisis lines vary by country",
              "Ask the client to identify their local resource during the conversation",
            ],
            correctIndex: 0,
            explanation:
              "Before you need it, and do not rely on a number recited in a course. Looking it up mid-crisis is the failure this instruction prevents.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What does 'least invasive first' mean here, and what overrides it?",
            options: [
              "Support the person to secure their own safety; emergency services escalate when risk is imminent and they cannot act",
              "Try the crisis line before contacting anyone else; emergency services follow if the line is unavailable",
              "Avoid involving others without consent; consent is overridden only by a clinician's instruction",
              "Begin with the least alarming intervention; escalate only if the client requests it",
            ],
            correctIndex: 0,
            explanation:
              "The ordering respects autonomy. It does not override the obligation to act when risk is immediate and the person cannot or will not act to stay safe.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "How does a coach connect a client to the crisis line?",
            options: [
              "Offer to contact it together and stay on the line while they connect",
              "Provide the number and confirm at the next session that they used it",
              "Contact it on the client's behalf and relay the guidance received",
              "Send the number by message so the client has it in writing",
            ],
            correctIndex: 0,
            explanation:
              "Together, and staying through the connection. Handing over a number is the version that most often results in nothing happening.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What belongs in intake materials, and why?",
            options: [
              "That you are not an emergency service and what to do in crisis; it makes the later conversation possible",
              "A list of local mental-health providers the client can contact independently",
              "A clause requiring disclosure of any psychiatric history before coaching begins",
              "A waiver limiting the coach's liability in the event of a crisis",
            ],
            correctIndex: 0,
            explanation:
              "One paragraph, set at the start. Establishing the frame before a crisis is what lets the conversation happen at all.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What goes into the record after a crisis disclosure?",
            options: [
              "What you observed, the client's own words as closely as recalled, what you did, who you contacted, what was agreed",
              "Your assessment of the client's risk level and the reasoning behind it",
              "A summary of the session with the disclosure noted as a significant event",
              "The client's account of events, reviewed and approved by them afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Five factual elements, written immediately. It protects the client's continuity of care and it protects you.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What stays OUT of that record?",
            options: [
              "Interpretation, diagnosis, and speculation about causes",
              "The client's exact words, which should be paraphrased for privacy",
              "The names of anyone contacted, which require the client's consent",
              "Any reference to the crisis resource used during the session",
            ],
            correctIndex: 0,
            explanation:
              "None of the three is yours to record. Documenting a diagnosis you are not qualified to make creates a false record that follows the client.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "When should the record be written?",
            options: [
              "Immediately, while it is fresh",
              "Within seven days, per standard documentation practice",
              "After the client has been connected to ongoing care",
              "At the next session, so the client can confirm the account",
            ],
            correctIndex: 0,
            explanation:
              "Not next week. Recall of a client's own words degrades quickly, and those words are the most valuable part of the record.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "Why should ordinary coaching not simply resume?",
            options: [
              "It treats the disclosure as an interruption rather than as information",
              "The client will be too distressed to engage with behavioral goals",
              "Resuming implies the coach has assessed the situation as resolved",
              "Continuity of care requires the treating clinician's approval first",
            ],
            correctIndex: 0,
            explanation:
              "Pause the usual work, be explicit that you are pausing it and why, and make resumption conditional on the client being connected to appropriate care.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What are the two failure modes after a disclosure?",
            options: [
              "Abandonment and over-involvement",
              "Under-documentation and over-documentation",
              "Escalating too quickly and escalating too slowly",
              "Referring without follow-up and following up without referring",
            ],
            correctIndex: 0,
            explanation:
              "Dropping the client because it became uncomfortable, or staying warmly in a role that has become clinical. Warmth is not a substitute for the referral.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'hold the relationship without holding the case'?",
            options: [
              "Be clear they have not damaged the relationship, and equally clear the clinical work belongs elsewhere",
              "Maintain contact while declining to discuss the disclosure further",
              "Continue coaching while the clinician manages the clinical presentation",
              "Keep the client engaged until a clinician has formally accepted the referral",
            ],
            correctIndex: 0,
            explanation:
              "Both halves matter. The client may feel embarrassed and expect to be dropped, and the balance is saying neither of the two failure modes out loud.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "Where a client in treatment wants coaching to continue, who decides whether it should?",
            options: [
              "The treating professional, not the coach alone",
              "The client, whose autonomy governs the decision",
              "The coach, who is best placed to judge the coaching relationship",
              "Both coach and client jointly, documented in writing",
            ],
            correctIndex: 0,
            explanation:
              "The WELL-03 model applies: the clinical plan belongs to the clinician, the behavior work can be yours, and the should-this-continue question belongs to them.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'professional infrastructure' on this pillar?",
            options: [
              "Supervision, peer consultation, or your own therapy, which let a coach keep doing this work well",
              "The referral network and documentation systems a coaching practice requires",
              "The insurance and legal protections appropriate to emotional-domain work",
              "The written policies governing crisis response and client communication",
            ],
            correctIndex: 0,
            explanation:
              "Not indulgences. The coach who does not process these conversations is the coach who starts avoiding the question in lesson 12.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is the commonest mistake when emotion appears in an ordinary session?",
            options: [
              "Flinching: rushing to reassure, solve, or change the subject",
              "Overstepping: following the emotion further than the coaching frame allows",
              "Ignoring it: continuing with the agenda as though nothing had happened",
              "Interpreting it: telling the client what their reaction means",
            ],
            correctIndex: 0,
            explanation:
              "Not overstepping. It is the fixing reflex from WELL-01 wearing a kinder costume, and it teaches a client that this room is not for that.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What is usually the whole intervention when emotion appears?",
            options: [
              "Silence, a reflection, and a willingness to wait",
              "A validating statement followed by a return to the session's goal",
              "A question about what the client needs in that moment",
              "An offer to pause the session and continue another time",
            ],
            correctIndex: 0,
            explanation:
              "Three things, none of them a technique. Letting it happen is the skill, and it is harder than it sounds for someone trained to be useful.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What distinguishes coaching from therapy in an emotional moment?",
            options: [
              "Direction of travel, not depth of feeling",
              "Depth of feeling, since therapy engages emotion more deeply",
              "Duration, since coaching addresses emotion briefly and moves on",
              "Whether the coach has been trained to work with that emotion",
            ],
            correctIndex: 0,
            explanation:
              "'What is that about, for you, in terms of what you want?' keeps a moment connected to the goal. 'Tell me more about your father' does not. Both are caring; only one is yours.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What is 'name it and check'?",
            options: [
              "Saying plainly that something shifted, then asking what happened",
              "Naming the emotion you observed and confirming you identified it correctly",
              "Noting the moment in your records and reviewing it at the next session",
              "Naming the pattern across sessions and asking whether the client recognises it",
            ],
            correctIndex: 0,
            explanation:
              "A client who did not notice their own reaction now has it, and you have not interpreted anything on their behalf. It is the coaching-safe version of a move a therapist would take further.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Which signals mark the moment it stops being coaching?",
            options: [
              "The same material returning unresolved, feeling disproportionate to the goal, a client asking for treatment",
              "Any display of strong emotion during a session, regardless of context",
              "The client's reluctance to return to the session's original agenda",
              "The coach's own discomfort with the direction the conversation is taking",
            ],
            correctIndex: 0,
            explanation:
              "Three signals, all from lesson 3. Say what you notice, name your limits, and refer.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Why is it easier to have the referral conversation mid-engagement than in a crisis?",
            options: [
              "It is often the same conversation arriving earlier, with the client calm",
              "A calm client is more likely to accept a referral without feeling rejected",
              "There is more time to identify an appropriate provider",
              "It avoids the documentation requirements a crisis disclosure triggers",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's framing exactly. Doing it while a client is calm and mid-engagement is far easier, and it is the same conversation you would otherwise have under pressure.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What is emotional competence in a wellness coach FOR?",
            options: [
              "The movement, eating, and sleep plans all run through a person, and a coach who cannot be present is coaching a spreadsheet",
              "It allows a coach to work with clients who have mental-health histories",
              "It is what distinguishes a wellness coach from a personal trainer professionally",
              "It enables the coach to identify clients requiring referral more accurately",
            ],
            correctIndex: 0,
            explanation:
              "Not therapy-adjacent work. The point is that every other pillar's plan is executed by a person, and presence is the prerequisite.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "A client discloses suicidal thoughts, connects with 988 in session, and emails two days later asking to resume nutrition goals. What do you do?",
            options: [
              "Confirm they are connected to ongoing care, not just that one call, and make resumption conditional on it",
              "Resume as requested, since the crisis was handled and the client is asking",
              "Decline to continue, since the disclosure has moved the work outside your scope",
              "Resume, but shift the focus to stress and sleep rather than nutrition",
            ],
            correctIndex: 0,
            explanation:
              "Acknowledge warmly that the relationship is intact, then coordinate. One crisis call is not ongoing care, and whether coaching should continue is a question for the treating professional.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'conditional resumption'?",
            options: [
              "Restarting ordinary coaching only once the client is connected to appropriate care, and saying so explicitly",
              "Resuming coaching with a reduced scope until the clinician confirms it is appropriate",
              "Restarting after a fixed interval agreed with the client at the time of disclosure",
              "Resuming only those goals the client raises themselves after the episode",
            ],
            correctIndex: 0,
            explanation:
              "The 'saying so explicitly' half matters as much as the condition. A silent pause reads as withdrawal, which is the abandonment failure mode.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'factual documentation'?",
            options: [
              "An objective record of observations, statements, actions, and referrals, excluding interpretation or diagnosis",
              "A record signed by both coach and client confirming the account is accurate",
              "Documentation using only the client's own words, without the coach's observations",
              "A structured record following a standard clinical documentation format",
            ],
            correctIndex: 0,
            explanation:
              "What you saw, what they said, what you did, who you contacted, what was agreed. The exclusions are what make it safe for the client as well as for you.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "A client's voice changes describing an ordinary work situation. What does lesson 14 direct?",
            options: [
              "Let it happen: silence, a reflection, a willingness to wait",
              "Acknowledge it briefly and return to the session's agreed focus",
              "Ask what the reaction reminds them of, to understand its origin",
              "Note it and raise it at a later point when the client is less activated",
            ],
            correctIndex: 0,
            explanation:
              "Rushing to reassure, solve, or change the subject is the commonest mistake, and it teaches a client that this room is not for that.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Which question keeps an emotional moment inside coaching?",
            options: [
              "'What is that about, for you, in terms of what you want?'",
              "'Tell me more about your father'",
              "'When did you first start feeling this way?'",
              "'What do you think is underneath that feeling?'",
            ],
            correctIndex: 0,
            explanation:
              "It keeps the moment connected to the client's goal. The other three all travel toward origin and meaning, which is the direction that leaves the lane.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What does 'asking directly' communicate beyond the question itself?",
            options: [
              "That you are able to hear the answer",
              "That you have been trained to handle the disclosure",
              "That the topic is a normal part of coaching conversations",
              "That you have noticed signs the client may not have mentioned",
            ],
            correctIndex: 0,
            explanation:
              "A careful, hedged question communicates the opposite, and a person deciding whether to disclose is reading exactly that signal.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "How does the lesson define readiness for a crisis disclosure?",
            options: ["A protocol you rehearsed, not a feeling you summon","Credentials establishing competence to respond","A written policy the client agreed at intake","A relationship with a clinician who accepts referrals"],
            correctIndex: 0,
            explanation: "Rehearsal rather than disposition, which is why the lesson is a protocol rather than guidance about being caring.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What does the coach seek to understand after a disclosure?",
            options: ["What is happening, how long, thinking about acting, a plan, access to means","Whether they have a diagnosis and are in treatment","What triggered it and how it relates to coaching goals","Whether they have told anyone else"],
            correctIndex: 0,
            explanation: "Five things, all about the present situation. None is diagnostic, and all help route the person correctly.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What does the 988 Lifeline offer?",
            options: ["Call, text, or chat, with Deaf and Hard of Hearing and Spanish-language services","Telephone contact only, staffed by clinicians 24 hours","Referral to local providers during business hours","Emergency dispatch to the caller's location"],
            correctIndex: 0,
            explanation: "Knowing the modes matters because a client who will not call may text.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What should a coach outside the United States do?",
            options: ["Look up their jurisdiction's line before it is needed and publish it","Use 988, which accepts international contacts","Direct clients to emergency services, since lines vary","Ask the client to find their local resource"],
            correctIndex: 0,
            explanation: "Do not rely on a number recited in a course. Looking it up mid-crisis is the failure this prevents.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "How does a coach connect a client to the crisis line?",
            options: ["Offer to contact it together and stay while they connect","Provide the number and confirm next session they used it","Contact it on their behalf and relay the guidance","Send the number in writing so they have it"],
            correctIndex: 0,
            explanation: "Handing over a number is the version that most often results in nothing happening.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What belongs in intake materials, and why?",
            options: ["That you are not an emergency service and what to do in crisis; it makes the later conversation possible","A list of local providers the client can contact","A clause requiring disclosure of psychiatric history","A waiver limiting liability in a crisis"],
            correctIndex: 0,
            explanation: "One paragraph, set at the start. Establishing the frame before a crisis is what lets the conversation happen at all.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "When should the post-crisis record be written?",
            options: ["Immediately, while it is fresh","Within seven days, per standard practice","After the client is connected to ongoing care","At the next session, so they can confirm it"],
            correctIndex: 0,
            explanation: "Recall of a client's own words degrades quickly, and those words are the most valuable part of the record.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'conditional resumption'?",
            options: ["Restarting coaching only once the client is connected to care, and saying so explicitly","Resuming with reduced scope until a clinician confirms","Restarting after a fixed agreed interval","Resuming only the goals the client raises themselves"],
            correctIndex: 0,
            explanation: "The 'saying so explicitly' half matters as much as the condition. A silent pause reads as withdrawal, which is the abandonment failure.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is 'professional infrastructure' on this pillar?",
            options: ["Supervision, peer consultation, or your own therapy","The referral network and documentation systems","Insurance and legal protections for emotional-domain work","Written policies governing crisis response"],
            correctIndex: 0,
            explanation: "Not indulgences. The coach who does not process these conversations is the one who starts avoiding the question.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is usually the whole intervention when emotion appears?",
            options: ["Silence, a reflection, and a willingness to wait","A validating statement then a return to the goal","A question about what the client needs","An offer to pause and continue another time"],
            correctIndex: 0,
            explanation: "Three things, none of them a technique. Letting it happen is the skill, and it is harder than it sounds for someone trained to be useful.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What is 'name it and check'?",
            options: ["Saying plainly that something shifted, then asking what happened","Naming the emotion and confirming you identified it","Noting the moment and reviewing it next session","Naming the pattern across sessions and asking if they recognise it"],
            correctIndex: 0,
            explanation: "The client who did not notice their own reaction now has it, and you have not interpreted anything on their behalf.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Why is the referral conversation easier mid-engagement than in a crisis?",
            options: ["It is often the same conversation arriving earlier, with the client calm","A calm client accepts referral without feeling rejected","There is more time to find an appropriate provider","It avoids the documentation a crisis triggers"],
            correctIndex: 0,
            explanation: "Doing it while a client is calm and mid-engagement is far easier, and it is the same conversation you would otherwise have under pressure.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What is emotional competence in a wellness coach FOR?",
            options: ["Every other pillar's plan is executed by a person, and presence is the prerequisite","It allows work with clients who have mental-health histories","It distinguishes a wellness coach from a personal trainer","It improves the accuracy of referral decisions"],
            correctIndex: 0,
            explanation: "Not therapy-adjacent work. A coach who cannot be present when the person shows up is coaching a spreadsheet.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
        ],
      },
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
              "Flinching: rushing to reassure, solve, or change subject",
              "Interpreting the emotion in terms of the client's early relationships",
              "Continuing to ask questions long past the client's comfort",
              "Immediately ending the session and issuing a referral",
            ],
            correctIndex: 0,
            explanation:
              "Overstepping is the rarer error. Flinching is the common one, and it is the fixing reflex in a kinder costume: it teaches a client that this room is not for that.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "Why is the boundary harder on this pillar than on movement or nutrition?",
            options: [
              "The out-of-scope act looks like a good conversation",
              "The legal restrictions on mental-health practice are stricter",
              "Clients here are more likely to be under clinical care already",
              "The consequences of error are more severe than in physical pillars",
            ],
            correctIndex: 0,
            explanation: "Writing a meal plan announces itself. A client crying while you listen well does not, and the difference can turn on the next ten minutes.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "State the frame separating coaching from psychotherapy here.",
            options: [
              "Present and future focused, on goals, skills, and behaviour, in people not in crisis",
              "Coaching addresses everyday stress; psychotherapy addresses diagnosed conditions",
              "Coaching avoids emotional content; psychotherapy engages it directly",
              "Coaching is time-limited; psychotherapy continues until resolution",
            ],
            correctIndex: 0,
            explanation: "And not being treated for a disorder by you. A coach can work with emotion but cannot treat it.",
            sourceLessonSlug: "the-hardest-boundary",
          },
          {
            prompt: "What is 'holding a client', and why is it the quietest harm?",
            options: [
              "Retaining someone needing clinical care nobody is arranging; it feels good to both",
              "Keeping a client past the point where coaching work has concluded",
              "Taking responsibility for a client's emotional state between sessions",
              "Continuing with a client whose goals have stopped progressing",
            ],
            correctIndex: 0,
            explanation: "It does not feel like a violation in the moment, which is exactly why it goes unnoticed.",
            sourceLessonSlug: "what-a-coach-may-do",
          },
          {
            prompt: "Give the three-question practical version of the functional test.",
            options: [
              "Client goal or symptom relief? Present or past? Would it appear in a therapy manual?",
              "Is the client in crisis? In treatment elsewhere? Have they consented?",
              "Am I qualified? Is this in my certification? Would a colleague do the same?",
              "Is the emotion proportionate? Recurring? Distressing to the client?",
            ],
            correctIndex: 0,
            explanation: "Two answers pointing the wrong way means stop and refer, whatever the service is called.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "Give the two readings of 'trauma-informed coaching'.",
            options: [
              "Legitimately, understanding how trauma shapes behaviour; dangerously, processing it",
              "Legitimately, screening for trauma history; dangerously, ignoring it",
              "Legitimately, referring clients with trauma; dangerously, working with them at all",
              "Legitimately, using trauma-specific techniques; dangerously, using general methods",
            ],
            correctIndex: 0,
            explanation: "Not pressing, not re-traumatizing, recognizing when to stop is the legitimate version. Processing is treatment regardless of the adjective.",
            sourceLessonSlug: "the-gray-zones",
          },
          {
            prompt: "What did Galante's individual-participant-data analysis find?",
            options: [
              "Distress fell, SMD -0.32, no heterogeneity, confidence rated HIGH",
              "Distress fell, SMD -0.32, with substantial heterogeneity and moderate confidence",
              "Distress fell only in participants with elevated baseline distress",
              "Distress fell, SMD -0.38 at eight weeks, declining to -0.22 by six months",
            ],
            correctIndex: 0,
            explanation: "13 trials, 2,371 participants, against PASSIVE controls in non-clinical settings. High confidence with no heterogeneity is unusually strong here.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "What did Galante test for effect modification, and find?",
            options: [
              "Baseline distress, gender, age, education, dispositional mindfulness; none modified it",
              "Baseline distress and age; both modified the effect substantially",
              "Programme length and instructor experience; instructor experience modified it",
              "Gender and education only; neither modified the effect",
            ],
            correctIndex: 0,
            explanation: "So the common sales line that mindfulness suits some particular kind of person has no support here.",
            sourceLessonSlug: "mindfulness-vs-passive",
          },
          {
            prompt: "Quote Goyal's central finding about active comparisons.",
            options: [
              "No evidence meditation programmes were better than any active treatment",
              "Meditation beat exercise but not other behavioral therapies",
              "Meditation matched drugs but underperformed against exercise",
              "Meditation outperformed active treatments only at longer follow-up",
            ],
            correctIndex: 0,
            explanation: "Drugs, exercise, and other behavioral therapies, across 47 trials and 3,515 participants restricted to active-controlled designs.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "How do the two mindfulness findings fit together?",
            options: [
              "Against nothing, a real modest effect; against anything else real, no shown advantage",
              "They conflict, and the higher-quality IPD result supersedes the other",
              "They address different outcomes, so they do not overlap",
              "The older one is superseded by the newer in current practice",
            ],
            correctIndex: 0,
            explanation: "Both true, not in conflict. They describe a decent psychosocial option rather than a superior one, which is the claim clients keep doing.",
            sourceLessonSlug: "mindfulness-vs-active",
          },
          {
            prompt: "What did Britton's structured interview find?",
            options: [
              "83 percent a side effect; 58 percent negative valence; 37 percent functional; 6-14 percent lasting",
              "58 percent reported a side effect; 37 percent negative valence; 8-25 percent lasting",
              "37 percent reported a side effect, with none lasting beyond a month",
              "83 percent reported benefit, with 6-14 percent reporting no change",
            ],
            correctIndex: 0,
            explanation: "44-item interview, independent assessor, 96 people after an eight-week MBCT programme. Lasting bad effects were tied to hyperarousal and dissociation.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the authors' closing sentence, and why quote it?",
            options: [
              "Rates are similar to other psychological treatments; it prevents panic without softening",
              "Adverse effects are rare and transient; it reassures coaches the practice is safe",
              "Screening should precede meditation instruction; it sets a practice standard",
              "Further research is needed; it marks the finding as provisional",
            ],
            correctIndex: 0,
            explanation: "Not uniquely risky. Risky in the ordinary way psychological interventions are, which is a category most people do not place mindfulness in.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What three things change in practice because of Britton?",
            options: [
              "Say difficult experiences can occur; ask afterwards; treat hyperarousal as a stop signal",
              "Screen before offering; limit dose to five minutes; require clinician clearance",
              "Stop offering it to anyone with a mental-health history; document instruction",
              "Offer only guided practice; avoid silent meditation; refer at any distress",
            ],
            correctIndex: 0,
            explanation: "None is 'stop offering it'. Asking afterwards matters because 83 percent reported something when asked and far fewer volunteer it.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the case for offering mindfulness anyway?",
            options: [
              "Zero cost, no equipment, a real effect against nothing, and a durable skill",
              "Its effect exceeds other psychosocial options once adherence is accounted for",
              "It is the intervention clients request most often, so uptake is high",
              "It has the broadest evidence base of any technique in the program",
            ],
            correctIndex: 0,
            explanation: "Cost, portability, and durability rather than effect size alone, which is the same argument WELL-04 made for breathwork.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "What is the most useful sentence for a beginner?",
            options: [
              "That a wandering attention IS the practice, not a failure of it",
              "That benefits accumulate slowly over several months",
              "That difficult experiences can occur and stopping is always an option",
              "That mindfulness is no better than exercise for most outcomes",
            ],
            correctIndex: 0,
            explanation: "It prevents the commonest week-two quit, where a client decides they are simply bad at meditating and stops.",
            sourceLessonSlug: "offering-it-anyway",
          },
          {
            prompt: "Give the headline social-connection numbers, including both extremes by measure type.",
            options: [
              "Survival OR 1.50; strongest 1.91 for complex integration; weakest 1.19 for living alone",
              "Survival OR 1.91; strongest for living alone at 1.50; weakest for integration at 1.19",
              "Survival OR 1.50; all measure types produced comparable estimates",
              "Survival OR 1.29; strongest for loneliness at 1.26",
            ],
            correctIndex: 0,
            explanation: "308,849 participants. The contrast is the coaching instruction: ask about texture, not living arrangement.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "How does this course state the magnitude, and why?",
            options: [
              "Comparable with well-established risk factors, which is the authors' own framing",
              "Greater than smoking fifteen cigarettes a day, per the authors' comparison",
              "Greater than obesity and inactivity combined",
              "The largest modifiable risk factor identified in the literature",
            ],
            correctIndex: 0,
            explanation: "Rankings against smoking go beyond what the papers say, and overstating the strongest finding in your field is the least necessary credibility risk available.",
            sourceLessonSlug: "social-relationships-and-survival",
          },
          {
            prompt: "What did the 2015 analysis find about objective versus subjective measures?",
            options: [
              "No difference: isolation 1.29, loneliness 1.26, living alone 1.32",
              "Objective isolation carried substantially higher risk than loneliness",
              "Subjective loneliness carried higher risk, capturing the mechanism",
              "The comparison could not be made from the available measures",
            ],
            correctIndex: 0,
            explanation: "A client with a full calendar who feels unseen is not reporting a lesser problem. A coach who treats loneliness as a softer version has it backwards.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What did the age finding show, and why does it matter here?",
            options: [
              "Social deficits were MORE predictive under 65; mid-life is where coaching lands",
              "Deficits were more predictive in older samples, confirming an ageing concern",
              "Age did not modify the association across the lifespan",
              "The association strengthened progressively with age",
            ],
            correctIndex: 0,
            explanation: "The intuition that this is an old-age problem to worry about later is exactly wrong, which matters for a decades-long program.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is NOT coachable in the connection domain?",
            options: [
              "Loneliness with hopelessness, worthlessness, or withdrawal",
              "Loneliness persisting more than six months without improvement",
              "Loneliness in clients who live alone with no local family",
              "Loneliness reported by clients already in psychotherapy",
            ],
            correctIndex: 0,
            explanation: "A mental-health referral, not a social-calendar project. The overlap between loneliness and depression is substantial and noticing which drives is the job.",
            sourceLessonSlug: "isolation-and-loneliness",
          },
          {
            prompt: "What is the honest verdict on PERMA?",
            options: [
              "A good map and a contested theory: structure, not validated architecture",
              "A validated framework whose questionnaire should be administered at intake",
              "A discredited model to be replaced by better-evidenced alternatives",
              "A theoretical framework with no practical coaching application",
            ],
            correctIndex: 0,
            explanation: "Factor-analytic work finds the five elements heavily inter-correlated, loading on a single general well-being factor.",
            sourceLessonSlug: "perma-as-vocabulary",
          },
          {
            prompt: "How should a coach raise suicide, and what does asking directly communicate?",
            options: [
              "Ask plainly; a direct question says you can hear the answer",
              "Ask indirectly first, escalating if the answer is unclear",
              "Wait for the client to raise it, since asking may plant the idea",
              "Ask at session end, so there is time to prepare the question",
            ],
            correctIndex: 0,
            explanation: "The fear that asking plants the idea is not a reason to avoid it; crisis-support practice is built on asking clearly.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What is the immediate goal after a disclosure, and what is the ordering of responses?",
            options: [
              "Connection and understanding, not assessment; least invasive first, escalating on imminent risk",
              "Risk assessment first, then the least invasive appropriate response",
              "Safety planning documented before the session ends",
              "Contacting emergency services while the client remains present",
            ],
            correctIndex: 0,
            explanation: "You are not diagnosing; you are understanding enough to help them get to the right place. The ordering respects autonomy without overriding the obligation to act.",
            sourceLessonSlug: "the-crisis-conversation",
          },
          {
            prompt: "What goes into the record after a crisis disclosure, and what stays out?",
            options: [
              "In: observations, their words, actions, contacts, agreements. Out: interpretation, diagnosis",
              "In: your risk assessment and reasoning. Out: the client's own words, for privacy",
              "In: a session summary noting the disclosure. Out: names of anyone contacted",
              "In: the client's account, reviewed by them. Out: your own observations",
            ],
            correctIndex: 0,
            explanation: "Written immediately, while it is fresh. Documenting a diagnosis you are not qualified to make creates a false record that follows the client.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "Name the two failure modes after a disclosure.",
            options: [
              "Abandonment and over-involvement",
              "Under-documentation and over-documentation",
              "Escalating too quickly and too slowly",
              "Referring without follow-up and following up without referring",
            ],
            correctIndex: 0,
            explanation: "Dropping the client because it became uncomfortable, or staying warmly in a role that has become clinical. Warmth is not a substitute for the referral.",
            sourceLessonSlug: "after-the-crisis",
          },
          {
            prompt: "What is the commonest mistake when emotion appears in an ordinary session?",
            options: [
              "Flinching: rushing to reassure, solve, or change the subject",
              "Overstepping: following the emotion beyond the coaching frame",
              "Ignoring it and continuing with the agreed agenda",
              "Interpreting it and telling the client what it means",
            ],
            correctIndex: 0,
            explanation: "Not overstepping. It is the fixing reflex in a kinder costume, and it teaches a client that this room is not for that.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
          {
            prompt: "What distinguishes coaching from therapy in an emotional moment?",
            options: [
              "Direction of travel, not depth of feeling",
              "Depth of feeling, since therapy engages emotion more deeply",
              "Duration, since coaching addresses emotion briefly",
              "Whether the coach was trained to work with that emotion",
            ],
            correctIndex: 0,
            explanation: "'What is that about, in terms of what you want?' keeps a moment connected to the goal. 'Tell me more about your father' does not. Both are caring; only one is yours.",
            sourceLessonSlug: "emotion-in-ordinary-sessions",
          },
        ],
      },
    },
  ],
};
