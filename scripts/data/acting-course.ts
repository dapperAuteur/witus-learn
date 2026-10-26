import type { AuthoredCourse } from "./authored-course";

// Acting: The Frame, the Stage, and the Read.
//
// Companion to scripts/data/voice-acting-course.ts. Source note:
// plans/future-courses/careers-and-media/acting/2026-08-21-acting.md (BAM asked for research FIRST), so this shipped under the
// Tier 1 method in docs/course-method/README.md: plans/future-courses/careers-and-media/acting/2026-08-22-dossier.md holds the
// five-section research record and ONLY its section 4 entered a lesson.
//
// THE DESIGN PROBLEM, AND THE ANSWER THIS COURSE GIVES.
// An asynchronous text-and-audio LMS with no upload and no reviewer cannot give feedback on a
// performance. It cannot hear you, see you, or tell you the second beat went flat. So the course
// teaches the half that survives the medium (script analysis, the vocabulary of the frame,
// medium-by-medium adjustment as RULES, genre demands, self-tape craft, a self-critique protocol,
// and the business) and says so in lesson 1 rather than implying otherwise everywhere else.
//
// RULES THIS FILE FOLLOWS AND THE NEXT AUTHOR SHOULD NOT BREAK:
//
// 1. No promised outcomes. No coaching, no cohort, no community, no auditions, no representation,
//    no work. Same discipline as the voice-acting sibling.
// 2. No rates, no day rates, no union scale figures, no "percentage of actors who work" statistics.
// 3. No anecdotes about named performers, ever. Second-person address and generic scenes only.
// 4. Contested empirical claims are taught WITH their contest: the Kuleshov effect is taught from
//    the 2016 replication and the lost-footage caveat, and deliberate practice is taught alongside
//    the 2019 replication that failed to reproduce its headline result.
// 5. SAG-AFTRA self-tape protections are described by WHAT THEY COVER and never by number. The
//    primary is unreachable to an automated fetch and the terms change every bargaining cycle; a
//    check is filed in src/lib/research-checks.ts instead.
// 6. Assessment is multiple choice plus :::reveal self-checks. A typed exercise scored by string
//    equality cannot grade a performance choice, so there are none in this course.
export const ACTING_COURSE: AuthoredCourse = {
  title: "Acting: The Frame, the Stage, and the Read",
  description:
    "A course about the half of acting that can honestly be taught at a distance: how to read a script for what a character wants, what every shot size does to a performance, how stage, film, television, commercials, vertical video, and narration each ask for something different, and how to watch your own self-tape without lying to yourself. It teaches no coaching, promises no work, and says so in the first lesson.",
  lessons: [
    // ── Section 1 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "what-this-course-can-teach",
      title: "1 · What this course can teach, and what it cannot",
      section: "Section 1 · What can be taught at a distance",
      body: `Acting is behaving truthfully inside imaginary circumstances, in front of an audience or a lens. It is a physical skill and a reading skill at the same time, and a course delivered as text can only honestly teach you one of them.

So start with the boundary, because everything after it depends on the boundary being true.

## What this course structurally cannot do

It cannot hear your voice. It cannot see your face. Nobody here watches your take and tells you the second beat went flat, that your hands are doing something your character would not do, or that you rushed the pause you needed. There is no upload, no reviewer, and no live session in this platform, so there is no feedback loop for your performance.

That absence is not a small gap. In the framework that dominates research on how skills are actually acquired, practice improves you when the task is well defined and something tells you whether the attempt got closer to the target (Ericsson et al., 1993). Strip out the part that tells you, and you are repeating rather than practicing. Your own eye is a weaker substitute than it feels: across 22 meta-analyses, the average correlation between how people rated their own ability and how they actually performed was .29 (Zell & Krizan, 2014).

There is a third honest caveat, and it applies to every acting course anywhere. Naturalistic screen acting is a historically recent style, and cognitive science has barely studied it, so almost everything taught about acting is craft tradition rather than tested evidence (Goldstein & Bloom, 2011). This course flags which is which as it goes.

## What it does teach

Seven things, all of which survive the medium:

- **Reading a script.** What a character wants, what is in the way, what they do about it, and what it costs. This is analysis, and analysis is exactly what prose teaches well. It is also the thing most untrained work is missing.
- **The vocabulary of the frame.** Shot sizes, coverage, eyeline, marks, matching. You cannot adjust to a frame you cannot name.
- **Medium by medium adjustment, as rules.** A stage, a feature, an episode, a thirty second spot, and a phone held upright each ask for different behavior, and those differences are describable in words.
- **Genre demands.** What drama asks, why comedy is played straight, what physical work adds.
- **Self-tape craft.** Framing, background, reader, slate, file names, and the protections that exist.
- **A protocol for watching yourself**, built from what the evidence says makes self-assessment less bad.
- **The business, without a sales pitch.**

## What it does not promise

No coaching. No cohort, no peer group, no assigned partners. No introductions, no auditions, no representation, no work. Finishing every lesson here puts you in front of nobody. Schools that sell those things sometimes genuinely deliver them; this course is not built to, and will not pretend it is.

What it can do is make sure that when you are in a room or in front of a lens, the reason you get passed over is not that you did not know where the camera was, not that your self-tape was unreadable, and not that you never actually read the scene.

:::reveal Why does the absence of a reviewer matter more than it sounds, in terms of how skills are learned? ||| Because feedback is a condition of practice being useful, not a bonus. Practice improves you when the task is well defined and something tells you whether the attempt got closer. Without that, repetition is just repetition.

:::reveal Name three things this course can teach and one it cannot, and say what separates them. ||| It can teach script analysis, the vocabulary of shot sizes, and self-tape craft. It cannot tell you whether your particular performance choice landed. The separator is whether the knowledge lives in words or in a judgment of a specific human performance.

## Vocabulary
- **Feedback loop**: something outside you that reports whether an attempt got closer to the target; the missing half of practice in any course with no reviewer.
- **Craft tradition**: technique passed down and refined by practitioners, believed because it works in the room rather than because it was tested.
- **Coverage**: the set of separate shots a scene is filmed in, which is why screen performance is delivered in pieces rather than continuously.
- **Scope boundary**: the explicit statement of what a course does and does not deliver, made before the learner has paid attention to anything else.

## Sources
Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review, 100*(3), 363-406.

Goldstein, T. R., & Bloom, P. (2011). The mind on stage: Why cognitive scientists should study acting. *Trends in Cognitive Sciences, 15*, 141-142. https://doi.org/10.1016/j.tics.2011.02.003

Zell, E., & Krizan, Z. (2014). Do people have insight into their abilities? A metasynthesis. *Perspectives on Psychological Science, 9*(2), 111-125. https://doi.org/10.1177/1745691613518075`,
    },
    {
      slug: "reading-a-script",
      title: "2 · Reading a script: want, obstacle, action, cost",
      section: "Section 1 · What can be taught at a distance",
      body: `Most weak performances are not performance problems. They are reading problems, made before anyone stood up. The performer knew what the scene was about and never decided what their character was doing in it.

Four questions do most of the work, and they are asked of every scene, in every medium.

**What does this character want, here, in this scene?** Not what they want in life. In this room, in these three minutes, from the person in front of them. A want has to be specific enough that you could tell whether they got it. "To be respected" fails that test. "To get my sister to admit she read my mail" passes it.

**What is in the way?** Someone else's opposing want, a fact, a rule, a fear, a closed door, the clock. If nothing is in the way, there is no scene, and if you cannot find the obstacle you have almost certainly misread who the scene belongs to.

**What do they do about it?** This is the part that is actually performed. It is a sequence of attempts: charm, then bully, then plead. Each attempt is a tactic, and the scene is the sequence.

**What does it cost if they fail?** The stakes. Two people can play the same want at wildly different temperatures depending on what failure costs, and stakes are the dial most beginners leave at the factory setting.

## Units, and where they turn

A scene is not one continuous thing. It breaks into units, usually two to six of them, and a unit ends where something changes: new information arrives, a tactic fails and is abandoned, someone new enters, the subject changes. Marking those turns on the page is the single most useful thing you can do with a pencil, because a turn you have not marked is a turn you will play through as if nothing happened.

## Subtext, without the mystique

Subtext is simply the difference between what a character says and what they are doing. "It is fine" can be forgiveness, a threat, or a request to be asked again. The line does not tell you which; the want, the obstacle, and the unit before it do. This is why analysis comes before choices: you cannot decide how to say a line whose function you have not identified.

## Do this on paper

Take any scene you have access to, including one from a show you already know. Write, in one sentence each: the want, the obstacle, the tactics in order, and the cost of failure. Then mark the unit breaks. If two of those sentences are vague, the scene will be vague. That diagnosis is available to you right now, with no camera and no coach in the room.

:::reveal What is wrong with "to be respected" as a statement of what a character wants in a scene? ||| It is not specific enough to be either achieved or refused within the scene. A usable want names a person and a concrete thing you could tell whether they got, such as getting a sister to admit she read the mail.

:::reveal What marks the end of a unit inside a scene? ||| A change: new information lands, a tactic fails and gets abandoned, someone enters or leaves, or the subject turns. Unmarked turns get played through as though nothing happened.

:::reveal Why must analysis of the scene come before decisions about how to deliver a line? ||| Because a line's meaning is set by its function. "It is fine" can forgive, threaten, or fish for another question, and only the want, the obstacle, and the preceding unit decide which.

## Vocabulary
- **Want (objective)**: what the character is trying to get in this scene, specific enough that you could tell whether they got it.
- **Obstacle**: whatever stands between the character and the want; without one there is no scene.
- **Tactic**: one attempt at the want; a scene is a sequence of tactics, and the sequence is what is performed.
- **Unit**: a segment of a scene running until something changes, such as new information, a failed tactic, or an entrance.
- **Stakes**: the cost of failing, which sets the temperature of everything else.
- **Subtext**: the gap between what is said and what is being done.`,
    },
    {
      slug: "playing-an-action",
      title: "3 · Play an action, not an emotion",
      section: "Section 1 · What can be taught at a distance",
      body: `Here is the most common single note in the craft, and the most useful thing in this section: you cannot play an emotion. You can only play an action, and the emotion is what a viewer reads off the result.

Try the alternative and you will feel the problem immediately. Told to "be sad", a performer has nothing to do. So they perform the signs of sadness: the face, the breath, the slowed voice. That is indicating, and audiences catch it instantly, because a person who is genuinely losing something is usually trying to hold on to it rather than displaying the loss.

## Direction that is playable, and direction that is not

Some notes name a result: be angrier, be more likeable, make it sadder, give me more energy. A result is a description of the finished effect, and a description is not an instruction. Other notes name a doable act: get her to leave, keep him from asking again, buy yourself ten seconds, make him laugh so he stops talking. Those you can walk into a room and do.

The translation skill is simple and worth drilling on paper. Take a result note and convert it into a verb aimed at the other person:

| Result note | A playable version |
|---|---|
| Be more upset | Make her understand what she has done |
| Be funnier | Catch him out before he finishes the sentence |
| More warmth | Get her to sit back down |
| Show that you are scared | Find out whether he is armed without asking |

Notice what every version on the right has in common: a target. The verb is done TO someone, which is why it produces behavior instead of a facial expression. A verb aimed at nobody ("relax", "believe it") is a result wearing a verb's clothing.

## Where the feeling actually comes from

Feeling is a byproduct, and this is good news, because byproducts are reliable in a way that summoned emotions are not. If you genuinely try to get someone to admit something and they genuinely will not, frustration arrives on its own, take after take, at eleven at night, on the twelfth setup. An actor who has decided to "feel frustrated" has to manufacture it fresh each time, and manufacturing gets visibly harder as the day goes on.

This is also why the analysis in the previous lesson is not academic. The want gives you the target. The obstacle guarantees you will not get it easily. The tactics give you the verbs. Do the reading and the playable instructions fall out of it.

## One caution

Not everything is an aggressive verb. Listening is an action. Waiting is an action. Deciding not to say the thing is an action, and often the strongest one in the scene. What makes something playable is that it is being done, not that it is forceful.

:::reveal What is indicating, and why do audiences catch it? ||| Performing the visible signs of an emotion instead of doing something. It reads as false because a person genuinely losing something usually fights to keep it rather than displaying the loss.

:::reveal Convert this result note into something playable: "be more likeable in this scene." ||| Aim a verb at the other person, such as getting them to invite you to stay, or making them laugh before they can ask the next question. The test is that it is done TO someone and could actually be attempted.

:::reveal Why is a played action more durable across many takes than a summoned emotion? ||| Because the feeling is a byproduct of really trying and really being blocked, which regenerates on its own every take. A manufactured emotion has to be produced fresh each time and gets harder as the day wears on.

## Vocabulary
- **Action (playable verb)**: something the character does to another person, which can be attempted directly.
- **Indicating**: performing the outward signs of an emotion instead of pursuing an action; the most commonly diagnosed fault in untrained work.
- **Result direction**: a note that describes the finished effect ("be sadder") rather than something a performer can do.
- **Target**: the person an action is aimed at; a verb with no target is a result in disguise.`,
    },
    {
      slug: "what-actors-actually-feel",
      title: "4 · What performers actually feel, and how little is known",
      section: "Section 1 · What can be taught at a distance",
      body: `Acting talk is full of confident psychology, and most of it has never been tested. Here is what has been looked at, stated at the size the evidence supports, because knowing the difference between craft tradition and a finding is itself a professional skill.

## The question everyone asks

Do performers actually feel what the character feels? The most substantial attempt to answer it empirically comes from a field study of professional stage actors, whose argument is that the emotions performers report during a show are dominated by emotions belonging to the TASK of performing, concentration, nerves, the pleasure of it going well, rather than by the character's grief or rage (Konijn, 2000). The character's emotion is being constructed and delivered, not privately suffered, and the craft consequence is direct: a performer who believes they must feel the character's feeling before they can play it has given themselves a job nobody can do eight times a week.

## What a brain scanner has shown

One study put 15 university-trained actors in a scanner and had them answer hypothetical questions either as themselves or as Romeo or Juliet. Answering in character produced global reductions in brain activity and, in particular, deactivations in the cortical midline network of the frontal lobe. The authors describe portraying a character as a deactivation-driven process, possibly amounting to a loss of self (Brown et al., 2019).

Read that carefully. It is 15 people, answering questions in a scanner, not performing a scene with a partner. It is a real and interesting result and it is not a theory of acting. Anyone who tells you neuroscience has explained what actors do is overselling a small literature.

## Why the literature is small

Naturalistic acting is a historically recent style, and cognitive science has treated it as a curiosity rather than a subject; the case for studying it seriously has had to be argued (Goldstein & Bloom, 2011). So the honest position for a working performer is this: the technique you are taught is craft that practitioners refined because it produced usable results, and it deserves respect on those grounds, not on grounds of evidence it does not have.

## What this changes about your practice

Three things.

Stop auditing your own feelings mid-scene. If the measure of a good take is how much you felt, you will spend the take watching yourself, which is the one thing guaranteed to flatten it.

Stop treating techniques as doctrine. Different traditions disagree with each other and all of them produce working performers, which tells you they are tools rather than truths. Use what makes you do something.

Stop being impressed by a scientific frame. "Studies show" attached to an acting claim is nearly always decoration. Ask which study, on how many people, doing what.

:::reveal What does the field-study evidence suggest performers are actually feeling during a show? ||| Mostly emotions belonging to the task of performing, such as concentration, nerves, and satisfaction, rather than the character's emotions. The character's emotion is constructed and delivered rather than privately suffered.

:::reveal The fMRI study found deactivations in the cortical midline network when actors answered in character. What is the honest limit of that result? ||| It rests on 15 trained actors answering hypothetical questions in a scanner, not performing scenes with a partner. It is a real finding about one task, not an explanation of acting.

:::reveal Why should a performer be suspicious of an acting claim that cites "studies"? ||| Because the scientific literature on acting is small and recent, so most claims dressed in science are craft tradition with decoration. The useful response is to ask which study, on how many people, doing what.

## Vocabulary
- **Task emotions**: the feelings that belong to the act of performing, such as concentration and nerves, as distinct from the character's emotions.
- **Cortical midline network**: the frontal-lobe regions, including dorsomedial and ventromedial prefrontal cortex, that deactivated when actors answered in character in the scanner study.
- **Naturalistic acting**: the recent, realism-oriented style that most screen work assumes and that most earlier performance did not use.
- **Self-auditing**: monitoring your own feelings during a take, which reliably flattens the take.

## Sources
Brown, S., Cockett, P., & Yuan, Y. (2019). The neuroscience of Romeo and Juliet: An fMRI study of acting. *Royal Society Open Science, 6*(3), 181908. https://doi.org/10.1098/rsos.181908

Goldstein, T. R., & Bloom, P. (2011). The mind on stage: Why cognitive scientists should study acting. *Trends in Cognitive Sciences, 15*, 141-142. https://doi.org/10.1016/j.tics.2011.02.003

Konijn, E. A. (2000). *Acting emotions* (B. Leach, Trans.). Amsterdam University Press.`,
    },

    {
      slug: "quiz-what-can-be-taught",
      title: "5 · Quiz: what can be taught at a distance",
      section: "Section 1 · What can be taught at a distance",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does this course say it structurally cannot do?",
            options: [
              "Judge your performance",
              "Explain what the different shot sizes are called on a working set",
              "Describe how a stage performance differs from a performance for a camera",
              "Set out the technical requirements of a usable self-tape recording",
            ],
            correctIndex: 0,
            explanation:
              "The platform has no upload, no reviewer, and no live session, so nothing here can hear your voice, see your face, or tell you a beat went flat. The other three are declarative knowledge that prose delivers perfectly well.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why is the absence of a reviewer treated as a serious problem rather than a minor gap?",
            options: [
              "Practice needs feedback to improve you",
              "Unwatched learners quit",
              "Courses without a grading component are not accepted for professional credentials",
              "Recorded material cannot be stored securely enough for casting use anyway",
            ],
            correctIndex: 0,
            explanation:
              "In the framework that dominates research on skill acquisition, practice improves you when the task is well defined and something reports whether the attempt got closer. Remove that and repetition stops compounding.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What was the mean correlation between how people rated their own ability and how they actually performed?",
            options: [
              "About .29, a real but weak link",
              "About .75",
              "Almost exactly zero",
              "Negative, meaning confident people reliably performed worse than modest ones",
            ],
            correctIndex: 0,
            explanation:
              "Across 22 meta-analyses the mean was .29 with a standard deviation of .11 (Zell & Krizan, 2014). That is a real relationship and a weak one, which is why the course builds a protocol rather than trusting your impression.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What does the course say about the scientific evidence behind acting technique generally?",
            options: [
              "It is thin, so most technique is craft tradition",
              "It is extensive and settled",
              "It exists only for stage work",
              "Neuroscience has replaced it",
            ],
            correctIndex: 0,
            explanation:
              "Naturalistic acting is a historically recent style and cognitive science has barely studied it, so almost everything taught anywhere is practitioner-refined craft rather than tested evidence (Goldstein & Bloom, 2011).",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Which of these does the course explicitly promise NOT to deliver?",
            options: [
              "Introductions to anyone who casts",
              "A description of what each shot size does to the scale of a performance",
              "A written protocol for reviewing your own recorded work more accurately",
              "An account of how commercial work differs from dramatic work",
            ],
            correctIndex: 0,
            explanation:
              "The refusal list is coaching, cohort, peer group, introductions, auditions, representation, and work. The other three are on the list of things the course does teach.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why is script analysis a good fit for a text-based course specifically?",
            options: [
              "It is reading, and prose teaches reading",
              "It requires the least talent",
              "It can be marked automatically by comparing a learner's answer against a stored key",
              "It is the only part of acting that professional performers do not already know",
            ],
            correctIndex: 0,
            explanation:
              "Analysis lives entirely in language and has defensible answers, which is exactly what a text medium delivers well. It is also the half most untrained work is missing.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is coverage?",
            options: [
              "The separate shots a scene is filmed in",
              "Memorized script pages",
              "Stunt injury insurance",
              "The range of accents and dialects a performer lists as available on their resume",
            ],
            correctIndex: 0,
            explanation:
              "A scene is shot several times from several positions, and those separate shots are its coverage. It is why screen performance is delivered in pieces rather than continuously.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is a feedback loop, in the sense this lesson uses?",
            options: [
              "Something outside you reporting whether an attempt improved",
              "Echo in an untreated recording room",
              "Auditioning, rejection, and repeat",
              "Watching your own reaction mid-scene",
            ],
            correctIndex: 0,
            explanation:
              "It is the external report on whether the attempt got closer to the target, and it is the half of practice a course with no reviewer cannot supply for a performance.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "The course defines acting as behaving truthfully inside imaginary circumstances. What two kinds of skill does it say that combines?",
            options: [
              "A physical skill and a reading skill",
              "A memorization skill and a networking skill, since most work comes through relationships",
              "A vocal skill and a business skill, because both are needed to sustain a career",
              "An emotional skill and a technical skill, meaning feeling deeply and operating equipment",
            ],
            correctIndex: 0,
            explanation:
              "It names the split so the boundary makes sense: a text course can teach the reading half thoroughly and cannot supervise the physical half at all.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Which claim about a course of this kind would be dishonest, by this lesson's own standard?",
            options: [
              "Finishing it makes you employable",
              "It defines an eyeline",
              "It sets out the technical minimum for a self-tape that nobody will have to apologize for",
              "It gives you a written procedure for reviewing a recorded scene more than once",
            ],
            correctIndex: 0,
            explanation:
              "Employment depends on the market, the roles open that month, and taste, none of which a course controls. The other three are descriptions of content the course actually contains.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is a scope boundary, as the course uses the term?",
            options: [
              "The stated limit of what a course delivers",
              "The most lessons per sitting",
              "The line for younger learners",
              "The set of territories in which a course is legally permitted to be sold",
            ],
            correctIndex: 0,
            explanation:
              "It is the explicit statement of what the course does and does not deliver, made in the first lesson rather than discovered later.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why does the course put the boundary statement in the first lesson rather than the last?",
            options: [
              "Everything after it depends on the boundary being true",
              "Regulations require a disclaimer",
              "Refunds peak in week one",
              "Only it is on the public page",
            ],
            correctIndex: 0,
            explanation:
              "A course that implies coaching everywhere and admits otherwise at the end has already misled the learner. Stating the limit first is what makes the rest of the claims credible.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is craft tradition?",
            options: [
              "Technique refined by practitioners because it works",
              "The set of union customs governing how a performer behaves on a professional set",
              "The historical repertoire of plays a classically trained performer is expected to know",
              "Technique that has been tested experimentally and found to produce measurable results",
            ],
            correctIndex: 0,
            explanation:
              "It is knowledge believed because it produces usable results in the room rather than because it was tested, and it deserves respect on exactly those grounds and no others.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Which of these is on the course's list of what it does teach?",
            options: [
              "Medium-by-medium adjustment, as rules",
              "Weekly live peer timing",
              "One-to-one correction of your physical habits by a trained movement teacher",
              "A guaranteed introduction to a casting director once the final assessment is passed",
            ],
            correctIndex: 0,
            explanation:
              "Stage, film, episodic, commercial, vertical, and narration differences are describable in words, so they are teachable here. The other three all require another human being.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why does knowing the vocabulary of the frame matter to a performer at all?",
            options: [
              "You cannot adjust to a frame you cannot name",
              "Crews expect you to run a camera",
              "Casting sites require the terms",
              "Union agreements are written in that vocabulary and cannot otherwise be understood",
            ],
            correctIndex: 0,
            explanation:
              "The frame decides what an audience can see, and what the audience cannot see does not exist. A performer who cannot follow the naming is guessing at their own most important variable.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "According to the lesson, what does practice become once you remove the part that tells you whether you improved?",
            options: [
              "Repetition rather than practice",
              "A rehearsal",
              "Deliberate practice",
              "Muscle memory",
            ],
            correctIndex: 0,
            explanation:
              "The lesson draws the line precisely there: without feedback you are repeating rather than practicing, which is why the self-critique protocol later in the course exists.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What does the lesson say is the honest best case for what the course can do for you?",
            options: [
              "Remove ignorance as the reason you are passed over",
              "Compress about two years of conservatory training into a self-paced format you can finish faster",
              "Replace the need for classes, since the protocol substitutes for a teacher's eye",
              "Guarantee that your recorded work will be watched all the way through by anyone casting",
            ],
            correctIndex: 0,
            explanation:
              "The stated aim is that the reason you get passed over is not that you did not know where the camera was, that your tape was unreadable, or that you never read the scene.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Which of these does the lesson treat as a research finding rather than as craft tradition?",
            options: [
              "The average accuracy of self-ratings of ability",
              "The make-it-smaller close-up rule",
              "The advice to aim an action at another person rather than describing an emotion",
              "The recommendation to mark unit breaks on a script before rehearsing it",
            ],
            correctIndex: 0,
            explanation:
              "The .29 figure comes from a published metasynthesis. The other three are craft, believed because they work, and the course labels them that way rather than dressing them in evidence.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is the lesson's stance toward schools that do sell cohorts, coaching, and industry access?",
            options: [
              "Some of them genuinely deliver those things",
              "They mislead learners",
              "They are the only legitimate way",
              "Their claims cannot be assessed, so learners should avoid all paid training entirely",
            ],
            correctIndex: 0,
            explanation:
              "The lesson makes no accusation against live schools. Its point is narrower: this course is not built to deliver those things and will not imply that it is.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why does the course flag which of its claims are craft and which are evidence?",
            options: [
              "Telling them apart is a professional skill",
              "Publishers require ratings",
              "Craft claims are unreliable",
              "Only evidence claims get assessed",
            ],
            correctIndex: 0,
            explanation:
              "Acting talk is full of confident psychology that was never tested, so knowing which is which protects a performer from being sold a technique on borrowed authority.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "The lesson lists seven things the course teaches. Which pair of them are the most procedural?",
            options: [
              "Self-tape craft and the business",
              "Reading a script and playing an action, since both come with fixed correct answers",
              "Genre demands and the vocabulary of the frame, because both are judged by an instructor",
              "The self-critique protocol and medium adjustment, because both require a partner",
            ],
            correctIndex: 0,
            explanation:
              "Framing, light, sound, slates, file naming, headshots, resumes, and how casting flows are procedural knowledge, which is why they survive a text medium without loss.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What is the correct reading of the .29 correlation for a performer working alone?",
            options: [
              "Your impression of a take is weak evidence",
              "Your impression is worthless",
              "Your impression is accurate as long as you are experienced in the medium being reviewed",
              "Your impression improves automatically with the number of takes you have recorded",
            ],
            correctIndex: 0,
            explanation:
              "A moderate correlation means self-judgment carries some signal and a lot of noise, which argues for a structured protocol rather than for either trusting or abandoning it.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "What does a usable statement of what a character wants have to be?",
            options: [
              "Specific enough to tell whether they got it",
              "Broad enough for the whole script",
              "Emotionally resonant",
              "Agreed with the other performer in the scene before either of them has read it",
            ],
            correctIndex: 0,
            explanation:
              "Getting a sister to admit she read your mail passes the test. Being respected does not, because nothing in the scene can settle whether it happened.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Why does \"to be respected\" fail as a statement of a character's want in a scene?",
            options: [
              "You could not tell whether they got it",
              "It is a negative goal",
              "It belongs to the performer",
              "Feelings are forbidden wants",
            ],
            correctIndex: 0,
            explanation:
              "A want has to be achievable or refusable inside the scene. Respect is a condition rather than an outcome, so nothing that happens can settle it.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What does the lesson say happens when you cannot find the obstacle in a scene?",
            options: [
              "You have probably misread whose scene it is",
              "The scene is a transitional one and should be played at a lower level throughout",
              "The obstacle is internal, which means the character is fighting only themselves",
              "The writer has made an error and the performer should ask for the line to be cut",
            ],
            correctIndex: 0,
            explanation:
              "If nothing is in the way there is no scene, so a missing obstacle is nearly always a sign the analysis is centered on the wrong character.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What is a tactic?",
            options: [
              "One attempt at getting the want",
              "The overall strategy",
              "The physical position a performer takes so that the camera can see them clearly",
              "A rehearsed piece of business used to fill a pause while another character speaks",
            ],
            correctIndex: 0,
            explanation:
              "A scene is a sequence of attempts, charm then bully then plead, and that sequence is the part that actually gets performed.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Which of these marks the end of a unit?",
            options: [
              "A tactic fails and is abandoned",
              "The performer runs out of breath and has to take another one mid-speech",
              "A page ends",
              "The camera moves",
            ],
            correctIndex: 0,
            explanation:
              "Units turn on change: new information, an abandoned tactic, an entrance or exit, or a change of subject. Page breaks and camera setups are production facts, not dramatic ones.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "How many units does the lesson say a scene usually breaks into?",
            options: [
              "Two to six",
              "One, because a scene is by definition a single unbroken dramatic action",
              "Roughly one for every page of script, which is how directors plan rehearsal time",
              "As many as there are lines of dialogue, since each line changes the situation",
            ],
            correctIndex: 0,
            explanation:
              "The lesson gives two to six as the usual range, and the point of marking them is that an unmarked turn gets played through as though nothing happened.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What are stakes?",
            options: [
              "What it costs if the character fails",
              "Allocated screen time",
              "A director's intensity scale",
              "Other booked productions",
            ],
            correctIndex: 0,
            explanation:
              "Stakes set the temperature. Two people can play the same want at completely different levels depending on what failing actually costs, and beginners usually leave the dial untouched.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What is subtext, stated without mystique?",
            options: [
              "The gap between what is said and what is being done",
              "The backstory a performer invents to explain a character's behavior before the script starts",
              "The writer's political intention, which sits underneath the surface events of the story",
              "The lines a character thinks but never says, written into the margin during rehearsal",
            ],
            correctIndex: 0,
            explanation:
              "The line \"it is fine\" can forgive, threaten, or ask to be asked again, and only the want, the obstacle, and the preceding unit decide which of those is happening.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Why must analysis precede a decision about how to deliver a line?",
            options: [
              "A line's meaning is set by its function",
              "Directors want fixed readings",
              "Delivery decisions are physical, and physical choices must always be made last",
              "Reading a line aloud too early makes it harder to memorize accurately later",
            ],
            correctIndex: 0,
            explanation:
              "You cannot decide how to say a line whose job you have not identified, which is why the four questions come before any choice about sound.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "The lesson gives four questions to ask of every scene. Which of these is one of them?",
            options: [
              "What is in the way of the want?",
              "What genre is this?",
              "Who has more lines?",
              "How long has this character known the other person in the room before now?",
            ],
            correctIndex: 0,
            explanation:
              "The four are the want, the obstacle, what they do about it, and the cost of failing. Genre and line counts are useful context but they are not the analysis.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What does the lesson say most weak performances actually are?",
            options: [
              "Reading problems on the page",
              "Confidence problems",
              "Gear problems",
              "Casting problems",
            ],
            correctIndex: 0,
            explanation:
              "The failure is usually made on the page, before anyone stood up: the performer knew what the scene was about and never decided what their character was doing in it.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What should you write down when analyzing a scene on paper, according to the exercise?",
            options: [
              "The want, obstacle, tactics, and cost",
              "A full biography for the character covering childhood, education, and previous relationships",
              "The emotional state you intend to be in at the start and at the end of the scene",
              "Every line you intend to stress, marked with the pitch you plan to use on each",
            ],
            correctIndex: 0,
            explanation:
              "One sentence each, plus the unit breaks marked. If two of those sentences come out vague, the scene will be vague, and that diagnosis is available with no camera and no coach.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What kind of thing counts as an obstacle?",
            options: [
              "Another person's opposing want",
              "A camera position that makes the intended blocking impossible to perform as written",
              "A hard line to say",
              "The absence of a rehearsal period, which prevents choices from being tested in advance",
            ],
            correctIndex: 0,
            explanation:
              "The lesson lists an opposing want, a fact, a rule, a fear, a closed door, or the clock. Production difficulties are real problems but they are not the character's.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Why is the part of the analysis about what a character DOES the important one for performance?",
            options: [
              "It is the part that is actually performed",
              "The part directors ask about",
              "It is the part that determines how many pages of coverage a scene will require",
              "The easiest part to change",
            ],
            correctIndex: 0,
            explanation:
              "The want and the obstacle are conditions. The sequence of attempts is behavior, and behavior is what an audience actually watches.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "The lesson says a want should be located in this scene rather than in a life. What does that rule out?",
            options: [
              "Statements about what the character wants overall",
              "Statements naming another person",
              "Statements involving objects",
              "Statements you morally reject",
            ],
            correctIndex: 0,
            explanation:
              "The question is what they want in this room, in these three minutes, from the person in front of them. Life goals are context and do not tell you what to do next.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Why does the lesson recommend marking unit turns with a pencil?",
            options: [
              "An unmarked turn gets played through",
              "Directors require annotated scripts to be submitted before the first rehearsal",
              "Written marks are the only thing a performer can legally take onto a closed set",
              "Marking is a memorization technique that makes the lines faster to learn",
            ],
            correctIndex: 0,
            explanation:
              "It is called the single most useful thing you can do with a pencil, because a turn you have not noticed is a turn you perform as though nothing changed.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Which reading of \"It is fine\" does the line itself decide?",
            options: [
              "None of them; the line is neutral",
              "Forgiveness",
              "A threat, because flat statements in dramatic writing are conventionally hostile",
              "A request to be asked again, because short lines invite a follow-up question",
            ],
            correctIndex: 0,
            explanation:
              "The line is neutral. The want, the obstacle, and the unit before it decide the function, which is precisely why analysis comes before delivery.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Which of these applies to a scene in any medium, according to this lesson?",
            options: [
              "The four questions of analysis",
              "Floor marks for focus",
              "Playing to the house",
              "The rule that lines must be delivered exactly as written for legal reasons",
            ],
            correctIndex: 0,
            explanation:
              "The want, obstacle, tactics, and stakes are asked of every scene in every medium. The other three are medium-specific constraints covered later in the course.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What happens to a scene's temperature when the stakes are left unexamined?",
            options: [
              "It sits at a default level",
              "It rises",
              "It turns erratic",
              "No effect at all",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls stakes the dial most beginners leave at the factory setting, which is why correctly identified wants still produce flat scenes.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "The lesson says a scene is not one continuous thing. What is it instead?",
            options: [
              "A series of units",
              "A single sustained emotional state that gradually intensifies from beginning to end",
              "A set of camera setups, each of which is prepared and performed independently",
              "Two halves divided by the point at which the main character speaks their longest line",
            ],
            correctIndex: 0,
            explanation:
              "Units are the working segments, and their boundaries are where something changes. Camera setups are a production division and do not align with them.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Why does the lesson say a want must name a specific person or thing?",
            options: [
              "So the scene can settle whether it happened",
              "So the partner can play against it",
              "So the director has something concrete to write in the shooting schedule",
              "So the want can be stated in a single sentence during an audition discussion",
            ],
            correctIndex: 0,
            explanation:
              "Specificity is what makes a want testable inside the scene, which is what separates a playable objective from a mood.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "According to the lesson, the diagnosis of a vague scene is available to you under what conditions?",
            options: [
              "Right now, with no camera and no coach",
              "Only after recording it",
              "Only with a scene partner",
              "Only once a director has given a note identifying which section is unclear",
            ],
            correctIndex: 0,
            explanation:
              "If two of the four written sentences are vague, the scene will be vague. That is a paper diagnosis and it is the strongest argument for the exercise.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What does the course say you cannot play?",
            options: [
              "An emotion on its own",
              "An action",
              "A tactic",
              "A want",
            ],
            correctIndex: 0,
            explanation:
              "You can play an action, and the emotion is what a viewer reads off the result. Told to be sad, a performer has nothing to do and starts performing the signs of sadness.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What is indicating?",
            options: [
              "Performing the signs of an emotion",
              "Pointing out an object or a person so that the camera knows where to look next",
              "Giving another performer a physical signal that you are about to change tactics",
              "Marking a script with symbols showing where the emphasis in each line should land",
            ],
            correctIndex: 0,
            explanation:
              "It is displaying the face, the breath, and the slowed voice of an emotion instead of doing something, and audiences catch it because a person genuinely losing something usually fights to keep it.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Why do audiences catch indicating so reliably?",
            options: [
              "Real people fight rather than display",
              "Faces are hard to control",
              "Audiences have been trained by decades of naturalistic screen work to spot technique",
              "Indicating always involves louder delivery, and volume is the easiest signal to detect",
            ],
            correctIndex: 0,
            explanation:
              "Someone genuinely losing something is usually trying to hold on to it, so a display of the loss contradicts what people actually do under pressure.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What is a result note?",
            options: [
              "A note describing the finished effect",
              "A script supervisor's log",
              "An editor's pickup request",
              "A note from a producer about how a scene tested with a preview audience",
            ],
            correctIndex: 0,
            explanation:
              "Be angrier, be more likeable, make it sadder. A description of the outcome is not an instruction, which is why it leaves a performer with nothing to do.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What do all the playable versions in the lesson's translation table have in common?",
            options: [
              "A target: someone it is aimed at",
              "A physical component",
              "A time limit",
              "A negative form",
            ],
            correctIndex: 0,
            explanation:
              "The verb is aimed at someone, which is what produces behavior rather than a facial expression. A verb aimed at nobody is a result wearing a verb's clothing.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Which of these is a result wearing a verb's clothing?",
            options: [
              "Relax",
              "Get her to sit back down before she reaches the door",
              "Find out whether he is armed without asking him directly about it",
              "Make him laugh hard enough that he loses his place in the argument",
            ],
            correctIndex: 0,
            explanation:
              "Relax has no target and describes a state. The other three are aimed at another person and could be attempted directly.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Where does the feeling come from, if it is not summoned?",
            options: [
              "It is a byproduct of really trying",
              "Recalling your own past",
              "It is supplied by the music and the editing once the footage reaches post-production",
              "It arrives from the other performer, who is responsible for provoking it in the scene",
            ],
            correctIndex: 0,
            explanation:
              "If you genuinely try to get something and are genuinely blocked, frustration arrives on its own, take after take, which is what makes it durable at eleven at night.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Why is a played action more durable across many takes than a summoned emotion?",
            options: [
              "It regenerates on its own each take",
              "It takes less energy",
              "It is in the script",
              "It is the same in every take, which means the editor can cut between takes freely",
            ],
            correctIndex: 0,
            explanation:
              "Really trying and really being blocked produces the feeling fresh every time, whereas a manufactured emotion has to be produced again from scratch and gets harder as the day wears on.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "How does the previous lesson's analysis feed directly into playable instructions?",
            options: [
              "The want gives the target and the obstacle guarantees difficulty",
              "Unit breaks set the camera's cuts",
              "Stakes set the memorizing order",
              "Subtext supplies the emotion",
            ],
            correctIndex: 0,
            explanation:
              "The want gives you someone to aim at, the obstacle ensures you will not get it easily, and the tactics are already the verbs. Do the reading and the instructions fall out.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Which of these does the lesson name as a legitimate action?",
            options: [
              "Listening",
              "Feeling deeply about the other character's situation while they are speaking",
              "Remembering the blocking so that the next move happens at the right moment",
              "Watching your own performance to check that the level is where you intended",
            ],
            correctIndex: 0,
            explanation:
              "Listening, waiting, and deciding not to say the thing are all actions, and often the strongest in the scene. What makes something playable is that it is being done, not that it is forceful.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What makes something playable, according to the lesson's own test?",
            options: [
              "It is actually being done",
              "It is forceful",
              "It can be described in a single word, so it is easy to remember during a take",
              "It matches the emotion the writer intended when the scene was first written",
            ],
            correctIndex: 0,
            explanation:
              "The lesson explicitly warns that not every action is aggressive. Waiting and deciding not to speak qualify, because the test is doing rather than intensity.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Convert \"show that you are scared\" into something playable, following the lesson's table.",
            options: [
              "Find out whether he is armed",
              "Let the fear show",
              "Raise your pitch",
              "Recall the most frightened you have ever been and hold on to that during the take",
            ],
            correctIndex: 0,
            explanation:
              "The table's version is finding out whether he is armed without asking. It has a target, it can be attempted, and the fear becomes a byproduct rather than a display.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Why does telling a performer to \"be sad\" leave them with nothing to do?",
            options: [
              "It names a state, not an act",
              "It is too general",
              "It means the role",
              "It lacks backstory",
            ],
            correctIndex: 0,
            explanation:
              "A state is a description of the finished effect. With nothing to do, the performer falls back on displaying the signs, which is the definition of indicating.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What does the lesson mean by a target?",
            options: [
              "The person an action is aimed at",
              "The exact spot on the floor where a performer must stop for the camera",
              "The emotional level a performer is trying to reach by the end of a scene",
              "The audience member a stage performer picks to play the whole speech toward",
            ],
            correctIndex: 0,
            explanation:
              "An action done TO someone produces behavior. Without a target the verb collapses back into a description of a state.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "According to the lesson, which is the single most common note in the craft?",
            options: [
              "You cannot play an emotion",
              "You move too much",
              "You are speaking too quietly for the microphone position that has been set",
              "You are not matching what you did physically in the previous take",
            ],
            correctIndex: 0,
            explanation:
              "The lesson opens by naming it as the most common single note and the most useful thing in the section, because everything else in the analysis serves it.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "A director says \"more warmth.\" What kind of note is that?",
            options: [
              "A result note, describing an effect",
              "A playable action",
              "A vocal note",
              "A note about the lighting, which affects how a performance appears on screen",
            ],
            correctIndex: 0,
            explanation:
              "It describes the finished effect. The lesson's playable translation is getting her to sit back down, which has a target and can be attempted.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Why does the lesson say the translation skill is worth drilling on paper?",
            options: [
              "It converts unplayable notes into things you can do",
              "Directors like jargon",
              "It proves preparation",
              "It can be auto-graded",
            ],
            correctIndex: 0,
            explanation:
              "Result notes arrive constantly and cannot be executed as given, so the ability to turn one into a targeted verb in the moment is the practical skill.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What happens to a manufactured emotion as a shooting day goes on?",
            options: [
              "It gets visibly harder to produce",
              "It becomes more reliable, because repetition strengthens the association over time",
              "It stays constant, which is why some performers prefer it for continuity purposes",
              "It transfers to the other performer, who begins to mirror it without meaning to",
            ],
            correctIndex: 0,
            explanation:
              "It has to be produced fresh each time and manufacturing gets harder with fatigue, which is exactly the problem a played action does not have.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Which pairing correctly matches a result note to its playable version from the lesson?",
            options: [
              "Be funnier becomes catch him out before he finishes",
              "Be more upset becomes let the tears come before the line rather than after it",
              "More warmth becomes soften the voice",
              "Be funnier becomes find the comedy in the situation and let the audience see it",
            ],
            correctIndex: 0,
            explanation:
              "Catching him out before he finishes the sentence has a target and can be attempted. The others describe effects or vocal settings rather than acts.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "The lesson calls the feeling a byproduct. Why is that framed as good news?",
            options: [
              "Byproducts recur reliably on their own",
              "Byproducts need no prep",
              "Byproducts cost nothing",
              "Byproducts can be adjusted by the director between takes without a new rehearsal",
            ],
            correctIndex: 0,
            explanation:
              "Something produced by genuinely trying and being blocked recurs by itself, which is more dependable than a feeling that must be summoned on demand.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Which of these is closest to the lesson's caution about aggressive verbs?",
            options: [
              "Not every action is forceful",
              "Avoid them entirely",
              "Only for drama",
              "Use them by default",
            ],
            correctIndex: 0,
            explanation:
              "Listening, waiting, and choosing silence are actions and are frequently the strongest choice available. Doing is the criterion, not force.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What does a performer do when handed a result note they cannot execute?",
            options: [
              "Convert it into a verb aimed at someone",
              "Ask the director to demonstrate the reading they have in mind before the next take",
              "Repeat the previous take at a higher level of energy until the note is satisfied",
              "Explain that the note is not playable and request a different one instead",
            ],
            correctIndex: 0,
            explanation:
              "The translation happens privately and immediately. Arguing about the note's form wastes time a set does not have and does not change what is being asked for.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What do performers report actually feeling during a show, according to the field-study evidence?",
            options: [
              "The emotions of performing",
              "The character's emotions, reproduced faithfully each night through recall techniques",
              "Nothing at all",
              "A blend that becomes more like the character's the longer a production runs",
            ],
            correctIndex: 0,
            explanation:
              "Konijn's argument is that task emotions, concentration, nerves, and the pleasure of it going well, dominate what performers report, while the character's emotion is constructed and delivered.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What are task emotions?",
            options: [
              "Feelings belonging to the act of performing",
              "Stored prep feelings",
              "The audience's feelings",
              "Feelings a character has about the specific job or duty the plot has assigned them",
            ],
            correctIndex: 0,
            explanation:
              "Concentration, nerves, and satisfaction belong to the performer doing the job, and the evidence suggests they dominate what performers actually report.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is the craft consequence of the task-emotions finding?",
            options: [
              "You do not have to feel it to play it",
              "Avoid demanding roles",
              "Rehearse each emotion apart",
              "Report it to the director",
            ],
            correctIndex: 0,
            explanation:
              "A performer who believes the character's feeling must arrive before the playing can start has given themselves a job nobody can do eight times a week.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "How many actors were in the fMRI study of dramatic acting?",
            options: [
              "15",
              "About 200, which is why the finding is considered statistically robust",
              "Two, one playing Romeo and one playing Juliet, scanned simultaneously",
              "None, because the study used untrained volunteers rather than trained performers",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen university-trained actors answered hypothetical questions as themselves or as Romeo or Juliet (Brown et al., 2019). The sample size is taught alongside the finding so it cannot be overclaimed.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What did answering in character produce in the fMRI study?",
            options: [
              "Reductions in activity, including cortical midline deactivations",
              "Frontal-lobe activity rose",
              "Activation of the same regions used when recalling a real autobiographical memory",
              "No measurable difference from answering as oneself, which surprised the researchers",
            ],
            correctIndex: 0,
            explanation:
              "The study reported global reductions in brain activity and deactivations in the cortical midline network, which the authors describe as possibly a loss of self.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is the honest limit of the fMRI result?",
            options: [
              "It studied questions in a scanner, not scenes",
              "It used only stage actors",
              "It is an unpublished preprint",
              "It measured blood flow rather than brain activity, so the interpretation is disputed",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen people answered hypothetical questions in a scanner rather than performing with a partner. It is a real finding about one task and not an explanation of acting.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is the cortical midline network, in this lesson's usage?",
            options: [
              "Frontal-lobe regions that deactivated in the study",
              "The fibers joining the hemispheres",
              "The memorized-text system",
              "The music-response area",
            ],
            correctIndex: 0,
            explanation:
              "It includes the dorsomedial and ventromedial prefrontal cortices, and those were the regions that deactivated when actors answered in character.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Why is the scientific literature on acting small?",
            options: [
              "Naturalistic acting is recent and was treated as a curiosity",
              "Ethics boards have historically refused to approve studies involving performers",
              "Acting cannot be measured, so no experimental design has ever been possible",
              "The findings are commercially valuable and are therefore kept unpublished",
            ],
            correctIndex: 0,
            explanation:
              "Realistic acting is a historically recent style and cognitive science has treated it as a curiosity rather than a subject, so the case for studying it had to be argued.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is the honest position the lesson recommends toward the technique you are taught?",
            options: [
              "Respect it as craft, not as evidence",
              "Reject anything untested",
              "Follow whichever method your first teacher used, because consistency matters most",
              "Wait for better research before committing to any particular approach to the work",
            ],
            correctIndex: 0,
            explanation:
              "Technique deserves respect because practitioners refined it until it produced usable results, and it should not be defended on grounds of evidence it does not have.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is self-auditing, and why is it a problem?",
            options: [
              "Monitoring your feelings mid-take, which flattens it",
              "Reviewing footage after a shoot",
              "Logging every take",
              "Comparing yourself to other performers on set, which damages working relationships",
            ],
            correctIndex: 0,
            explanation:
              "If the measure of a good take is how much you felt, you spend the take watching yourself, which is the one thing guaranteed to flatten it.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What does the fact that different acting traditions disagree tell you?",
            options: [
              "They are tools rather than truths",
              "All but one are wrong",
              "They differ in name only",
              "Train in just one",
            ],
            correctIndex: 0,
            explanation:
              "They contradict each other and all of them produce working performers, which is exactly the pattern you would expect from tools rather than doctrines. Use what makes you do something.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "How should you respond to an acting claim attached to the phrase \"studies show\"?",
            options: [
              "Ask which study, on how many people, doing what",
              "Accept it, since a claim would not be published in that form unless it were supported",
              "Reject it, because no scientific finding has ever applied usefully to performance",
              "Check whether the claim matches the tradition you were originally trained in",
            ],
            correctIndex: 0,
            explanation:
              "The literature is small and recent, so most claims dressed in science are craft with decoration. Three specific questions dismantle a decorated claim quickly.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is naturalistic acting?",
            options: [
              "The recent, realism-oriented style most screen work assumes",
              "Heightened classical delivery",
              "A rehearsal method in which performers improvise rather than working from a script",
              "The practice of performing without makeup or costume so that the work appears unmediated",
            ],
            correctIndex: 0,
            explanation:
              "The lesson notes it is historically recent and that most earlier performance did not use it, which is part of why the research literature is so thin.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What does the lesson mean when it says the character's emotion is constructed and delivered?",
            options: [
              "It is built and shown rather than privately suffered",
              "It is the writer's alone",
              "It is assembled in the edit",
              "It is produced by the audience and only appears to originate on the stage",
            ],
            correctIndex: 0,
            explanation:
              "Konijn's account has the performer constructing the character's emotion for an audience while the emotions they actually experience belong to the task of performing.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Which of the three practice changes does the lesson recommend regarding technique?",
            options: [
              "Use what makes you do something",
              "One method, always",
              "Every method in order",
              "The best-tested method",
            ],
            correctIndex: 0,
            explanation:
              "Because the traditions disagree and all produce working performers, the operative test is whether a technique gets you doing something rather than which lineage it belongs to.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Why does the lesson give the sample size of the fMRI study in the text?",
            options: [
              "So the finding cannot be overclaimed",
              "Because studies with fewer than 20 participants are automatically disregarded",
              "Because the sample size determines which brain regions can be measured",
              "Because larger studies of acting have since contradicted the original result",
            ],
            correctIndex: 0,
            explanation:
              "Teaching the number next to the finding is what stops it becoming \"neuroscience has explained acting\", which the lesson explicitly calls overselling a small literature.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "The lesson says knowing the difference between craft tradition and a finding is itself something. What?",
            options: [
              "A professional skill in its own right",
              "A union requirement",
              "An academic concern with no bearing on what happens in a rehearsal room",
              "A sign that a performer has been trained at a conservatory rather than privately",
            ],
            correctIndex: 0,
            explanation:
              "It is framed as a working competence, because acting talk is full of confident psychology and a performer who cannot sort it will be sold technique on borrowed authority.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What did the authors of the fMRI study call the pattern they observed?",
            options: [
              "A deactivation-driven process",
              "A simulation state",
              "An emotional recall",
              "A dual-attention condition, with the actor tracking both self and character at once",
            ],
            correctIndex: 0,
            explanation:
              "Their own framing is that portraying a character seems to be a deactivation-driven process, perhaps representing a loss of self.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What does the lesson say a performer should stop doing mid-scene?",
            options: [
              "Checking their own feelings",
              "Adapting to others",
              "Analyzing the want",
              "Listening for notes",
            ],
            correctIndex: 0,
            explanation:
              "Auditing your feelings during a take means watching yourself, and the lesson names that as the reliable way to flatten the take.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Which statement about acting and neuroscience would the lesson call overselling?",
            options: [
              "Neuroscience has explained what actors do",
              "One study of 15 actors found reduced frontal activity when they answered in character",
              "The scientific literature on acting is small and has only recently been argued for",
              "Findings from a scanner task may not generalize to performing a scene with a partner",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says plainly that anyone claiming neuroscience has explained acting is overselling a small literature. The other three are accurate statements of the evidence.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Why does this lesson exist in a practical acting course at all?",
            options: [
              "Sorting evidence from tradition protects you",
              "Employers want a science credential",
              "Directors give notes in neuroscientific terms, so the vocabulary is needed on set",
              "The research determines which of the competing acting methods a learner should adopt",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's own justification is that a performer who cannot tell a finding from a tradition is exposed to confident psychology dressed up as knowledge.",
            sourceLessonSlug: "what-actors-actually-feel",
          },
        ],
      },
    },
    // ── Section 2 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "shot-size-vocabulary",
      title: "6 · The shot sizes, and why their edges are fuzzy",
      section: "Section 2 · The frame decides the performance",
      body: `A shot size is a description of how much of a person the frame contains. Crews name sizes constantly, and a performer who cannot follow the naming is guessing at the most important variable in their own work.

Running from tightest to widest, with the common abbreviations:

| Name | Abbreviation | Roughly what it holds |
|---|---|---|
| Extreme close-up | ECU | A detail: eyes alone, a mouth, a hand on a glass |
| Close-up | CU | Head, and usually a little of the shoulders |
| Medium close-up | MCU | Head to mid-chest; the standard interview and dialogue size |
| Medium shot | MS | Roughly waist up |
| Medium long shot | MLS | Roughly knees up, sometimes called a cowboy or three-quarter |
| Long shot / wide shot | LS / WS | The whole body, head to feet, with some room |
| Extreme long shot | ELS | The figure small inside a landscape or a building |

A few more terms you will hear in the same sentence. A **single** holds one person; a **two shot** holds two. An **over the shoulder** frames one person past the near edge of the other's shoulder. The **establishing shot** is the wide one that tells the audience where everyone is. A **master** is a continuous take of the whole scene, usually wide, that the tighter shots are cut against.

## The edges really are fuzzy, and pretending otherwise is a trap

Where a close-up stops and a medium close-up starts is not standardized. Reference texts define the sizes and their boundaries differ; so do crews, so do countries, and so do departments on the same production (Bowen, 2017). Somebody will say "tight two" and mean something you would have called a medium.

This is not a flaw in your knowledge. The professional habit is to treat the taxonomy as a shared approximation and to confirm the specific frame rather than infer it: ask what the frame is, or watch where the operator is standing and how much lens is on the camera. The question "how wide are we?" is a normal question and asking it marks you as someone who has worked, not someone who has not.

## Why a performer needs this at all

Because the size decides what the audience can see, and what the audience cannot see does not exist. In an ECU on your eyes, your hands are doing nothing, no matter how expressively they are doing it. In a wide shot, your face is a smudge and your whole body is carrying the scene. Every adjustment in the rest of this section follows from that one fact, and none of it is available to a performer who does not know which frame they are in.

:::reveal Order these from tightest to widest: medium long shot, extreme close-up, medium close-up, long shot. ||| Extreme close-up, medium close-up, medium long shot, long shot.

:::reveal Why is it correct, not amateurish, to ask a crew how wide the frame is? ||| Because the boundaries between adjacent sizes are not standardized and vary by text, crew, and production. Confirming beats inferring, and the size decides what the audience can see at all.

:::reveal What is a master shot, and what is it for? ||| A continuous take of the whole scene, usually wide, that the tighter shots are cut against. It gives the editor a spine and defines the geography the closer coverage must match.

## Vocabulary
- **Shot size**: how much of a person the frame contains, from an extreme close-up on a detail out to an extreme long shot of a figure in a landscape.
- **Single / two shot**: a frame holding one person, or two.
- **Over the shoulder**: a frame on one person taken past the near edge of the other's shoulder.
- **Master**: a continuous, usually wide take of the whole scene that the tighter coverage is cut against.
- **Establishing shot**: the wide frame that tells the audience where everyone is.

## Sources
Bowen, C. J. (2017). *Grammar of the shot* (4th ed.). Routledge.`,
    },
    {
      slug: "scale-and-the-shot",
      title: "7 · Scale: the same choice at three different sizes",
      section: "Section 2 · The frame decides the performance",
      body: `The single most transferable rule in screen work is that the shot size sets the scale of the performance. This is the core of the screen-acting craft literature, and it is the thing stage-trained performers most often have to unlearn (Tucker, 2023).

Understand what "scale" does and does not mean, because the usual shorthand is misleading. Smaller does not mean less committed, less specific, or less alive. It means the same intention delivered through a smaller physical amplitude, because the frame magnifies you. A raised eyebrow in a close-up covers as much screen area as an arm thrown wide in a long shot.

## One moment, three sizes

Take a single moment: your character realizes the person opposite has been lying for months.

**In a long shot**, the realization has to be legible in the body. Weight shifts. The hands stop. You turn a quarter away or you do not, and that choice reads from the back of a theater. Your face is too small to carry it.

**In a medium close-up**, the body is half in frame and doing less. The realization lives in the breath, in whether you keep looking at them, and in the small stillness before you answer.

**In an extreme close-up on the eyes**, the body has no vote. What is left is where you look, when you blink, and whether the thought arrives before or after the line.

The intention did not change. What changed is which instrument delivers it, and the frame chose the instrument for you.

## What actually changes, in a checklist

- **Amplitude of movement.** Tighter frame, smaller physical range, or you leave the frame.
- **Where the thought is visible.** Wide: whole body. Medium: torso, hands, head. Tight: eyes and breath.
- **Speed.** A tight frame gives an audience time to read, so quick reactions can register that a wide shot would swallow. It also punishes hurry, because the whole audience is watching one square meter.
- **Vocal level.** Screen levels are conversational. The mic is close and it is not impressed by projection.
- **Stillness.** Stillness reads as thought at close sizes and as nothing at wide ones.

## The failure both directions

Playing too big in a close-up looks insincere, which is the classic stage-to-screen error. But playing too small in a wide shot is the equally common opposite, and it is more often fatal, because there is nothing there at all: an audience seeing a whole body doing nothing has no scene to watch. The instruction is never "be small". It is "be the right size for this frame".

:::reveal Why is "make it smaller for the close-up" a misleading way to state the rule? ||| Because it invites a performer to lower their commitment. The size that changes is physical amplitude, not intention or specificity, and the reason is that the frame magnifies whatever is inside it.

:::reveal A realization has to read in a long shot. Where does it have to live, and why not in the face? ||| In the body: weight, stillness of the hands, a turn. At that size the face occupies too little of the screen for an audience to read it.

:::reveal Which error is more often fatal, playing too big for a close-up or too small for a wide shot? ||| Too small for a wide shot. Playing too big reads as insincere, but playing too small in a wide frame leaves the audience with a whole body doing nothing and no scene to watch.

## Vocabulary
- **Scale**: the physical amplitude of a performance, set by the shot size rather than by the emotion.
- **Amplitude**: how far a movement travels; the thing that shrinks as the frame tightens.
- **Stillness**: holding physically steady, which reads as thought at close sizes and as absence at wide ones.
- **Conversational level**: the vocal level screen work assumes, because the microphone is close and projection is unnecessary.

## Sources
Tucker, P. (2023). *Secrets of screen acting* (4th ed.). Routledge.`,
    },
    {
      slug: "the-face-alone",
      title: "8 · The face alone: eyes, thought, and the reaction shot",
      section: "Section 2 · The frame decides the performance",
      body: `At the tightest sizes the frame contains a face and nothing else, and an enormous amount of screen storytelling happens there. It is also the place where the least-understood mechanism in screen acting operates, so it is worth being precise about who is doing the work.

## What a face-only frame actually shows

Three things, in order of how much they carry:

**Where you look, and when you change it.** An eye moving away from a person and back again is the most legible event available at this size. A held gaze is pressure. A drop is concession. These are not tricks; they are what people actually do, magnified.

**The timing of the thought against the line.** If the thought lands visibly before the line, the character worked it out. If it lands after, they surprised themselves. If it never lands, the line is being recited. This is the whole difference between a close-up that works and one that does not, and it is available to you in the reading long before a camera exists.

**Breath.** At this size a change in breath is visible and reads as an internal event.

Almost nothing else. Not gesture, not posture, not the excellent thing you were doing with your feet.

## The reaction shot, and the awkward evidence

Screen scenes spend a great deal of time on the person NOT speaking. So how much of what an audience reads in a listening face comes from the performer, and how much from the shot cut next to it?

The famous answer is the Kuleshov effect, usually told as a proven experiment in which the same neutral face was intercut with different subjects and audiences read a different emotion each time. The honest version is more interesting: the original footage is lost, and later replication attempts produced conflicting or unreliable results. A 2016 study built a better design, showing 36 participants 24 film sequences of neutral faces across six emotional conditions, and found that viewers did tend to pick the emotion category matching the context, with valence and arousal ratings moving in the expected direction, which the authors summarize as evidence that some sort of Kuleshov effect does exist (Barratt et al., 2016).

## What that licenses, and what it does not

It licenses this: at close sizes, context is doing part of the work, so a listening face does not need to be performing an emotion. Trust the material and simply receive what is happening.

It does not license this: "the editor will do it, so I can do nothing." The effect describes how an audience interprets an ambiguous face, not a guarantee that any face will play. A performer genuinely listening produces micro-changes in gaze and breath that a performer waiting for their cue does not, and those are what a close-up records.

:::reveal What are the three things a face-only frame actually carries? ||| Where you look and when that changes, the timing of the thought relative to the line, and the breath. Gesture and posture are not in the frame at all.

:::reveal State the honest version of the Kuleshov effect. ||| The original footage is lost and early replications conflicted, but a 2016 study of 36 participants across six emotional conditions found viewers did tend to read a neutral face as matching the context it was cut against. So context does part of the work, but the strong "it was proved" version is film mythology.

:::reveal Why is "the editor will supply the emotion, so I can do nothing" the wrong conclusion? ||| Because the effect describes how audiences interpret an ambiguous face, not a promise that any face plays. Real listening produces changes in gaze and breath that waiting for a cue does not, and a close-up records exactly those.

## Vocabulary
- **Reaction shot**: a frame on the person who is not speaking, which is where a great deal of screen storytelling happens.
- **Kuleshov effect**: the tendency of viewers to read a neutral face as expressing whatever the surrounding context implies.
- **Valence and arousal**: the two dimensions the 2016 study measured alongside emotion category, covering how positive a feeling is and how activated.
- **Thought timing**: whether a visible realization arrives before, after, or never in relation to the line, which is the main difference between a close-up that plays and one that does not.

## Sources
Barratt, D., Cabak Rédei, A., Innes-Ker, Å., & van de Weijer, J. (2016). Does the Kuleshov effect really exist? Revisiting a classic film experiment on facial expressions and emotional contexts. *Perception, 45*(8), 847-874. https://doi.org/10.1177/0301006616638595`,
    },
    {
      slug: "the-body-in-frame",
      title: "9 · The body in frame: marks, blocking, and matching",
      section: "Section 2 · The frame decides the performance",
      body: `Wide frames hand the scene back to your body, and they come with obligations no stage performance has. On a stage you move where the moment takes you. On a set you move where the focus puller and the lighting can follow, and you do it the same way every take.

## Blocking and marks

**Blocking** is the agreed pattern of movement in a scene: who goes where, when, and past whom. It is worked out in a rehearsal on set, usually with the crew watching rather than the director alone, because every department has to plan from it.

**Marks** are the physical spots you must hit, usually taped on the floor. They exist because a lens has a narrow band of sharp focus, and the focus puller has set distances for the positions you agreed. Land past your mark and you are soft. Land short and you may be out of frame or in someone's light.

Hitting a mark without looking at it is a real skill and it is learnable off camera: pick a floor position at home, walk to it while talking to an imagined partner, and use the furniture at the edge of your vision to know when you have arrived. Peripheral vision and step counting do this; looking down does not, and looking down is visible.

## Matching

Screen scenes are shot several times from several sizes, and the pieces are cut together. So the wide take and the close take have to agree. If you lift the glass on "I told you" in the master, the glass has to be at your mouth on "I told you" in the single, or the two shots cannot be joined at that moment.

What has to match: which hand, which object, when, the direction you turn, roughly where you look. What does not have to match: the exact temperature of the reading. Directors will happily cut between two takes with slightly different intensity and will not cut between two takes where a cigarette changed hands.

This makes screen acting partly a memory discipline. Note what you did physically, not just what you felt, and be able to repeat it while still doing the scene rather than performing a reconstruction of it.

## The frame line

Wide does not mean unlimited. Every frame has an edge, and gestures that leave it simply did not happen. On a set, someone will tell you your hand went out of frame. Practicing at home, the discipline is to keep the working range modest and deliberate rather than assuming the camera saw it.

:::reveal Why do marks exist, and what happens when you miss one? ||| Because a lens has a narrow band of sharp focus and the focus puller has set distances to the agreed positions. Miss it and you go soft, or you drift out of frame or out of the light.

:::reveal Which differences between takes will stop an editor cutting, and which will not? ||| Physical mismatches stop the cut: a different hand, a prop in the wrong place, a move at the wrong moment, a turn the other way. A slightly different emotional temperature does not.

:::reveal What is the practical way to hit a mark without looking down? ||| Use peripheral vision and the furniture at the edge of your sightline, plus a repeatable number of steps. Looking down is visible on camera and reads as technique showing.

## Vocabulary
- **Blocking**: the agreed pattern of movement in a scene, worked out on set because every department plans from it.
- **Mark**: a taped floor position a performer must land on so focus, framing, and lighting hold.
- **Matching**: repeating physical actions at the same moments across takes and sizes so the shots can be cut together.
- **Frame line**: the edge of the shot; anything crossing it did not happen as far as the audience is concerned.
- **Focus puller**: the crew member adjusting lens focus to the distances the blocking established.`,
    },
    {
      slug: "eyeline-lens-and-the-cut",
      title: "10 · Eyeline, the lens, and what the editor is choosing",
      section: "Section 2 · The frame decides the performance",
      body: `Three technical facts about the camera change how a performer behaves, and none of them are obvious from watching finished work.

## The camera is not the audience

On a stage, the audience is a fixed body of people in front of you, and you play outward to them. On a set, the camera is a machine standing in an arbitrary place, often uncomfortably close, often at a strange angle, and it is not where the story is happening. Playing to it, unless the piece explicitly asks for direct address, breaks the scene.

The corollary confuses newcomers constantly: your scene partner is frequently not there. In a single, the other performer may be standing beside the lens, or may have gone home and been replaced by a taped X or a crew member holding the script. You are still required to be in a conversation.

## Eyeline

An **eyeline** is the direction and height a performer looks. It has to be consistent, because the cut depends on it: if you look camera left at your partner and they also look camera left at you, the audience reads two people looking the same way rather than at each other.

Practically, someone will place your eyeline for you and it will feel wrong: slightly too close to the lens, or at a mark taped to a stand at the height of a person who is not there. The professional behavior is to accept the placement precisely and put the imaginative work into the relationship rather than into arguing with the geometry. Drifting your eyes to where the person "really" is ruins the shot.

## The lens has opinions

Tight frames are usually made with longer focal lengths from further away, which compresses depth and flattens facial features slightly; wider lenses used close exaggerate whatever is nearest. This is why a huge gesture toward the camera reads as enormous and why a small lean can read as a significant move. You do not need to run the math. You need to know that the apparent size of your movement is not something you can judge from inside it, which is another reason to ask what the frame is.

## What the editor is actually choosing

Finished screen performance is assembled from takes, and the person assembling has priorities. In the best-known account of how those priorities rank, emotion comes first, then story, then rhythm, then eye trace, with the two-dimensional and three-dimensional continuity of the space last (Murch, 2001).

Read the consequence for your work: continuity is real and it is at the bottom. A take that is alive but slightly mismatched will beat a take that matches perfectly and is dead, because the editor's first obligation is what the audience feels. So match carefully, and never let matching become the thing you are actually doing.

:::reveal Why can looking where your scene partner "really" is ruin a shot? ||| Because your eyeline is placed for the cut, not for the room. If the placement is ignored, the two shots will not read as two people looking at each other.

:::reveal Murch's ordering of what a cut should serve runs emotion, story, rhythm, eye trace, then spatial continuity. What does that imply for a performer? ||| That matching matters but is the lowest priority: an alive but slightly mismatched take beats a perfectly matched dead one. So match carefully without letting matching become the thing you are actually doing.

:::reveal Why should a performer avoid judging the size of their own movement on camera? ||| Because focal length and camera distance change apparent size. A move that feels small can read large on a wide lens up close, and the effect is not visible from inside the performance.

## Vocabulary
- **Eyeline**: the direction and height a performer looks, placed for the edit rather than for the physical room.
- **Direct address**: performance played deliberately to the lens, used in narration, presenting, and some commercials, and wrong everywhere else.
- **Focal length**: the property of a lens that decides how much depth is compressed and how much a near movement is exaggerated.
- **Eye trace**: where in the frame the audience is looking, one of the criteria an editor weighs when choosing a cut.

## Sources
Murch, W. (2001). *In the blink of an eye: A perspective on film editing* (2nd ed.). Silman-James Press.`,
    },

    {
      slug: "quiz-the-frame",
      title: "11 · Quiz: the frame decides the performance",
      section: "Section 2 · The frame decides the performance",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a shot size?",
            options: [
              "How much of a person the frame contains",
              "The physical dimensions of the sensor the camera is recording the image onto",
              "The number of seconds a single continuous take is expected to run for",
              "The distance in feet between the camera body and the performer's feet",
            ],
            correctIndex: 0,
            explanation:
              "Sizes run from an extreme close-up on a detail out to an extreme long shot of a figure in a landscape, and the naming describes framing rather than equipment or duration.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Order from tightest to widest: medium long shot, extreme close-up, medium close-up, long shot.",
            options: [
              "Extreme close-up, medium close-up, medium long shot, long shot",
              "Medium close-up, extreme close-up, long shot, medium long shot",
              "Long shot, medium long shot, medium close-up, extreme close-up",
              "Extreme close-up, medium long shot, medium close-up, long shot",
            ],
            correctIndex: 0,
            explanation:
              "Tightest to widest runs extreme close-up, close-up, medium close-up, medium shot, medium long shot, long shot, extreme long shot.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Roughly what does a medium close-up hold?",
            options: [
              "From the head down to mid-chest",
              "The whole body",
              "A single detail",
              "The figure small inside a landscape, so that the setting dominates the frame",
            ],
            correctIndex: 0,
            explanation:
              "It is the standard interview and dialogue size, which is also why it is the default recommendation for a self-tape later in the course.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What does an extreme close-up typically hold?",
            options: [
              "A detail, such as the eyes",
              "Head, shoulders",
              "Two performers",
              "Knees up",
            ],
            correctIndex: 0,
            explanation:
              "Eyes alone, a mouth, a hand on a glass. At that size the body has no vote at all, which is what the face-alone lesson builds on.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is a single?",
            options: [
              "A frame holding one person",
              "A take in which the whole scene is played through without stopping or resetting",
              "A shot that will be used only once in the finished cut of the scene",
              "The one camera position a low-budget production can afford for a given scene",
            ],
            correctIndex: 0,
            explanation:
              "A single holds one person and a two shot holds two, and both terms turn up constantly in the same sentence as a size.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is an over the shoulder?",
            options: [
              "One person framed past the other's near shoulder",
              "A raised shot looking down",
              "A move in which the camera travels around behind a performer during the take",
              "A glance a performer gives to the camera before turning back into the scene",
            ],
            correctIndex: 0,
            explanation:
              "The near person's shoulder sits in the edge of frame, which is what gives the audience the geography of the conversation.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is a master?",
            options: [
              "A continuous take of the whole scene",
              "The director's chosen take",
              "The highest-resolution copy of the footage, from which all other versions are made",
              "The lead performer",
            ],
            correctIndex: 0,
            explanation:
              "It is usually wide, runs the scene end to end, and gives the editor a spine that the tighter coverage has to match.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is an establishing shot for?",
            options: [
              "Telling the audience where everyone is",
              "Rehearsing the performers",
              "Recording room tone",
              "Checking the lighting",
            ],
            correctIndex: 0,
            explanation:
              "It is the wide frame that sets the geography, which is why the audience can follow the tighter shots that come after it.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Why are the boundaries between adjacent shot sizes described as fuzzy?",
            options: [
              "They are not standardized",
              "Digital sensors record a slightly different field of view from film, so the old names no longer apply",
              "Focus falls off gradually at the edges of a frame, so no boundary can be drawn precisely",
              "Performers move during a take, so the size changes continuously through the shot",
            ],
            correctIndex: 0,
            explanation:
              "Reference texts define the sizes and their definitions differ, and so do crews, countries, and departments on the same production (Bowen, 2017).",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is the professional habit when the frame size matters and the naming is ambiguous?",
            options: [
              "Confirm the frame rather than infer it",
              "Assume the tightest reading",
              "Watch the monitor between takes and work out the size from the recorded image",
              "Default to the size used in the previous setup, since coverage is normally consistent",
            ],
            correctIndex: 0,
            explanation:
              "Asking how wide the frame is is a normal question, and the lesson says it marks you as someone who has worked rather than someone who has not.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Why does a performer need the shot-size vocabulary at all?",
            options: [
              "What the audience cannot see does not exist",
              "Crews will not note you otherwise",
              "It sets the take count",
              "Union agreements set different rates depending on how tight the framing is",
            ],
            correctIndex: 0,
            explanation:
              "In an extreme close-up on the eyes your hands are doing nothing however expressively they do it, and in a wide shot your face is a smudge.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is another common name for a medium long shot?",
            options: [
              "A cowboy, or a three-quarter",
              "A dirty single",
              "A slate",
              "A plate",
            ],
            correctIndex: 0,
            explanation:
              "Roughly knees up, and also called a three-quarter. The alternative names are part of why the taxonomy has to be treated as an approximation.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "An extreme long shot does what to the figure?",
            options: [
              "Makes it small inside the setting",
              "Removes everything except the head and shoulders of the performer",
              "Stretches the perspective so the performer appears taller than they are",
              "Places two performers at opposite edges of the frame facing each other",
            ],
            correctIndex: 0,
            explanation:
              "The figure sits small inside a landscape or a building, so the setting carries the meaning and the performer's face carries almost none of it.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Someone on set says \"tight two.\" What should you conclude?",
            options: [
              "Two people, tighter than usual, so confirm the frame",
              "Two takes before a new setup",
              "The shot will be two seconds long, which is standard for a reaction insert",
              "Two cameras are running simultaneously on the same performer from different angles",
            ],
            correctIndex: 0,
            explanation:
              "It means two people framed tightly, and their idea of tight may be what you would call a medium, which is exactly why the lesson says to confirm rather than infer.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Which pair of terms describes how many people are in the frame rather than how tight it is?",
            options: [
              "Single and two shot, which count people",
              "Close-up and medium close-up",
              "Master and establishing shot",
              "Long shot and extreme long shot, which are defined by the number of figures present",
            ],
            correctIndex: 0,
            explanation:
              "Single and two shot count people. The size terms describe how much of a person is held, and the two kinds of term are used together in the same sentence.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is the tighter coverage cut against?",
            options: [
              "The master shot of the whole scene",
              "The establishing shot",
              "The rehearsal take",
              "The widest lens",
            ],
            correctIndex: 0,
            explanation:
              "The master runs the whole scene and defines the geography, so the tighter shots have to agree with it for the pieces to be joinable.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "In an extreme close-up on the eyes, what is your expressive hand gesture doing?",
            options: [
              "Nothing, because it is outside the frame",
              "Reinforcing the line, since audiences perceive movement at the edge of the image",
              "Distracting the operator, which is the reason gesture is discouraged at that size",
              "Changing the focus distance, which makes the shot soft for as long as it lasts",
            ],
            correctIndex: 0,
            explanation:
              "The frame contains eyes and nothing else, so anything outside it did not happen as far as the audience is concerned.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Which statement about shot-size terminology is accurate?",
            options: [
              "It is a shared approximation",
              "It is fixed by an international standards body and is identical on every production",
              "It is now obsolete",
              "It differs by genre, with drama and comedy using entirely separate sets of names",
            ],
            correctIndex: 0,
            explanation:
              "The taxonomy is standard enough to work from and its edges vary between texts and crews, which is why it is treated as a shared approximation rather than a specification.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Roughly what does a medium shot hold?",
            options: [
              "Roughly from the waist up",
              "Knees up",
              "Head and a little of the shoulders, with the eyes about a third down the frame",
              "The whole figure with generous space above and below it",
            ],
            correctIndex: 0,
            explanation:
              "Waist up. Knees up is a medium long shot, head and shoulders is a close-up, and the whole figure is a long shot.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "Why does the lesson say the fuzziness of the boundaries is not a flaw in your knowledge?",
            options: [
              "The sources themselves disagree",
              "Crews keep them secret",
              "Only crews must know",
              "Codes replace them",
            ],
            correctIndex: 0,
            explanation:
              "Reference texts define the sizes differently from one another, and so do crews and countries, so the ambiguity is in the field rather than in the learner.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What sets the scale of a screen performance?",
            options: [
              "The shot size",
              "The emotional intensity the scene calls for at that point in the story",
              "The size of the venue the finished piece is expected to be shown in",
              "The number of other performers who are present in the scene at the time",
            ],
            correctIndex: 0,
            explanation:
              "The frame magnifies you, so the same intention has to be delivered through a smaller physical amplitude as the frame tightens (Tucker, 2023).",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What does \"smaller\" NOT mean when the frame tightens?",
            options: [
              "Less committed or less specific",
              "Less range of movement",
              "Gesture kept close to the body rather than travelling away from it",
              "A vocal level closer to ordinary conversation than to projection",
            ],
            correctIndex: 0,
            explanation:
              "What shrinks is physical amplitude, not intention or specificity. The lesson warns that the usual shorthand invites exactly the wrong reduction.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "In a long shot, where does a realization have to be legible?",
            options: [
              "In the body, through weight and hands",
              "In the eyes",
              "In the voice",
              "In the pause before the next line, since visual detail is unavailable at that size",
            ],
            correctIndex: 0,
            explanation:
              "Weight shifts, hands stop, a quarter turn happens or does not. The face occupies too little of the screen for an audience to read it at that size.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "In an extreme close-up on the eyes, what is left to deliver the moment?",
            options: [
              "Where you look, when you blink, and the timing of the thought",
              "The whole upper body",
              "Vocal volume and pitch",
              "Your position in frame",
            ],
            correctIndex: 0,
            explanation:
              "The body has no vote at that size. Gaze, blink, and whether the thought arrives before or after the line are the available instruments.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "A raised eyebrow in a close-up covers roughly as much screen area as what in a long shot?",
            options: [
              "An arm thrown wide",
              "A blink, since both are small movements regardless of the size of the frame",
              "A step forward, because both change the performer's position within the image",
              "A whole line of dialogue, since screen area and duration are equivalent",
            ],
            correctIndex: 0,
            explanation:
              "The comparison is the lesson's way of making magnification concrete: the frame decides how much of the screen a given movement occupies.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "In a medium close-up, where does a realization mainly live?",
            options: [
              "In the breath and the stillness before the answer",
              "In the hands",
              "In a change of position, since the frame is wide enough to show movement clearly",
              "In the volume of the line, because the microphone is furthest away at that size",
            ],
            correctIndex: 0,
            explanation:
              "The body is half in frame and doing less, so the moment lives in the breath, in whether the gaze holds, and in the small stillness before the reply.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "How does a tighter frame change what an audience has time to read?",
            options: [
              "Quick reactions register that a wide shot would swallow",
              "Nothing changes",
              "Everything must slow down",
              "Reactions must be repeated, because a single quick change is missed at close sizes",
            ],
            correctIndex: 0,
            explanation:
              "A tight frame gives the audience time to read, so small fast events land. It also punishes hurry, because everyone is watching one square meter.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What vocal level does screen work assume?",
            options: [
              "Conversational, for a close mic",
              "Projected",
              "Slightly louder",
              "The scene's level",
            ],
            correctIndex: 0,
            explanation:
              "The microphone is close and is not impressed by projection, which is one of the concrete differences from stage work.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "How does stillness read at close sizes compared with wide ones?",
            options: [
              "As thought when close, as nothing when wide",
              "As tension when close, and as authority when wide, in both cases deliberately",
              "The same in both, because stillness is the absence of information at any size",
              "As a mistake when close, and as a considered choice when wide",
            ],
            correctIndex: 0,
            explanation:
              "Stillness is a powerful close-up choice and an empty wide-shot one, which is why the rule is never simply to be small.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Which error does the lesson call more often fatal?",
            options: [
              "Playing too small in a wide shot",
              "Playing too big in a close-up, since insincerity is the hardest fault to recover from",
              "Over-matching takes",
              "Speaking at a conversational level when the microphone has been placed far away",
            ],
            correctIndex: 0,
            explanation:
              "Playing too big reads as insincere, but playing too small in a wide frame leaves an audience watching a whole body doing nothing, with no scene at all.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What is the correct form of the instruction about scale?",
            options: [
              "Be the right size for this frame",
              "Be as small as you can",
              "Match your partner",
              "Start large and reduce with each successive take until the director stops you",
            ],
            correctIndex: 0,
            explanation:
              "The instruction is never simply to be small, because a wide shot needs a body doing something. The frame chooses the size and the performer meets it.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What is amplitude, as the lesson uses the word?",
            options: [
              "How far a movement travels",
              "Vocal loudness",
              "Intensity",
              "Gesture duration",
            ],
            correctIndex: 0,
            explanation:
              "Amplitude is the thing that shrinks as the frame tightens, which is what separates the physical adjustment from any change in intention.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Which is the group most likely to have to unlearn a scale habit for screen work?",
            options: [
              "Stage-trained performers",
              "Performers who have only ever worked in commercials, because spots are so short",
              "Performers trained in movement, because physical work is discouraged on camera",
              "Performers with narration experience, since narration has no visual component at all",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it directly: it is the thing stage-trained performers most often have to unlearn, because the stage rewards exactly the amplitude a close-up punishes.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Across the three sizes in the lesson's example, what stayed the same?",
            options: [
              "The intention behind the moment",
              "The amplitude",
              "The vocal level, which is set by the microphone rather than by the frame",
              "The timing of the realization, which has to land identically for the edit to work",
            ],
            correctIndex: 0,
            explanation:
              "The realization is the same in all three. What changed is which instrument delivers it, and the frame chose the instrument.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Why does a tight frame punish hurry?",
            options: [
              "The whole audience is watching one square meter",
              "Focus cannot follow",
              "Close mics distort",
              "Editors cut tight shots shorter, leaving less room for a quick delivery",
            ],
            correctIndex: 0,
            explanation:
              "There is nowhere else to look, so anything rushed is fully visible. The same property is what lets a quick reaction register that a wide shot would swallow.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Which of these changes as the frame tightens, according to the checklist?",
            options: [
              "Where the thought is visible",
              "The want",
              "The tactics",
              "The stakes",
            ],
            correctIndex: 0,
            explanation:
              "The checklist tracks amplitude, where the thought is visible, speed, vocal level, and stillness. The analysis of the scene is unaffected by the framing.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "In a wide shot, the audience sees a whole body doing nothing. What is the problem?",
            options: [
              "There is no scene to watch",
              "The performer will be out of focus, because wide shots have a shallow depth of field",
              "The editor will cut away, which shortens the performer's screen time",
              "The other performers cannot judge their timing without visible cues",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls this the more often fatal of the two scale errors, precisely because there is nothing on screen for an audience to read.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What does the lesson mean by the frame magnifying you?",
            options: [
              "A tighter frame makes a small movement occupy more screen",
              "Lenses enlarge faces",
              "Audiences pay more attention to close shots, so mistakes are noticed more often",
              "Tighter frames are shown larger in cinemas than in domestic viewing situations",
            ],
            correctIndex: 0,
            explanation:
              "Screen area is the operative variable, which is why the same intention needs a smaller physical range as the size tightens.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "What happens to the body's contribution as the frame goes from long shot to extreme close-up?",
            options: [
              "It falls away until it has no vote",
              "It matters more",
              "It stays constant",
              "It transfers to the voice, which takes over the work the body was doing",
            ],
            correctIndex: 0,
            explanation:
              "Wide gives the whole body, medium leaves the torso and head, and an extreme close-up on the eyes leaves the body out of the frame entirely.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Why is the shot-size rule described as the most transferable in screen work?",
            options: [
              "It applies in every screen medium",
              "It needs no camera",
              "Everyone agrees on it",
              "It replaces all others",
            ],
            correctIndex: 0,
            explanation:
              "Film, episodic, commercial, and vertical work all place a performer inside a frame, so the relationship between size and scale carries across all of them.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Which three things does a face-only frame actually carry?",
            options: [
              "Gaze, thought timing, and breath",
              "Posture, gesture, and vocal level, since those are what an audience reads from a person",
              "Blocking, matching, and continuity, because those decide whether the shot is usable",
              "Volume, pace, and emphasis, which are the three components of a spoken line",
            ],
            correctIndex: 0,
            explanation:
              "Where you look and when it changes, whether the thought lands before or after the line, and the breath. Gesture and posture are not in the frame at all.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is the most legible event available in a face-only frame?",
            options: [
              "An eye moving away and back",
              "A head tilt",
              "A swallow, because the throat is the part of the face that moves most visibly",
              "A change in skin color, which cameras record faithfully at close distances",
            ],
            correctIndex: 0,
            explanation:
              "Gaze changes are what people actually do, magnified. A held gaze is pressure and a drop is concession, and neither is a trick.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "If a visible thought lands AFTER the line, what does the audience read?",
            options: [
              "The character surprised themselves",
              "The character lied",
              "A missed cue",
              "The character was distracted by something outside the frame",
            ],
            correctIndex: 0,
            explanation:
              "Before the line means they worked it out. After means they surprised themselves. Never means the line is being recited.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What does it mean when a thought never lands visibly at all?",
            options: [
              "The line is being recited",
              "Concealment",
              "A tight frame",
              "The take works",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls thought timing the whole difference between a close-up that works and one that does not, and it is decided in the reading long before a camera exists.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is a reaction shot?",
            options: [
              "A frame on the person who is not speaking",
              "A shot recorded after the scene is finished to capture the performer's honest response",
              "The first take of a setup, before the performer has had time to plan a response",
              "A shot in which a performer responds to a stimulus that is added later in post-production",
            ],
            correctIndex: 0,
            explanation:
              "Screen scenes spend a great deal of time on the listener, which is what raises the question of how much a listening face is doing on its own.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What happened to Kuleshov's original footage?",
            options: [
              "The original footage is lost",
              "It survives in a Moscow archive and has been screened at academic conferences",
              "It was recut",
              "It was never shot, and the experiment was only ever described in writing",
            ],
            correctIndex: 0,
            explanation:
              "The 2016 paper states plainly that the original footage is lost and that recent replication attempts had produced conflicting or unreliable results.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "How many participants were in the 2016 Kuleshov replication?",
            options: [
              "36, each shown 24 sequences",
              "Several thousand, recruited online, which is what gives the result its statistical power",
              "Six",
              "None",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-six participants each saw 24 film sequences of neutral faces across six emotional conditions, in a behavioral and eye-tracking design (Barratt et al., 2016).",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What did the 2016 study conclude?",
            options: [
              "Some sort of Kuleshov effect does exist",
              "It is a myth",
              "Only in film students",
              "It beats Kuleshov's claim",
            ],
            correctIndex: 0,
            explanation:
              "Participants tended to choose the emotion category matching the context, and valence and arousal ratings moved in the expected directions.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What does the Kuleshov evidence license for a performer?",
            options: [
              "A listening face need not perform an emotion",
              "A performer can skip preparation for reaction shots, since the edit supplies the meaning",
              "A performer should choose a fixed neutral expression and hold it through every reaction",
              "A performer should signal the intended emotion clearly, since context will amplify it",
            ],
            correctIndex: 0,
            explanation:
              "Context is doing part of the work at close sizes, so the listener can trust the material and simply receive what is happening rather than displaying a response.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What does the Kuleshov evidence NOT license?",
            options: [
              "Doing nothing and relying on the editor",
              "Simply receiving",
              "Trusting that the surrounding shots will contribute to how a face is read",
              "Playing a listening beat without deciding on a specific emotional label first",
            ],
            correctIndex: 0,
            explanation:
              "The effect describes how audiences interpret an ambiguous face, not a guarantee that any face plays. Real listening produces gaze and breath changes that waiting for a cue does not.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What do valence and arousal measure?",
            options: [
              "How positive a feeling is and how activated",
              "Accuracy and speed",
              "Shot length and size",
              "How much a performer moves and how far their gaze travels during a take",
            ],
            correctIndex: 0,
            explanation:
              "They are the two dimensions the 2016 study measured alongside emotion category, and both moved in the directions the design predicted.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What did the eye-tracking data in the 2016 study NOT show?",
            options: [
              "The expected differences between emotional conditions",
              "Any consistent pattern",
              "Attention to faces",
              "Grasp of instructions",
            ],
            correctIndex: 0,
            explanation:
              "Participants attended to different regions of the face given the intermediate context, but the expected differences between the emotional conditions did not appear.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is the difference between a performer genuinely listening and one waiting for their cue?",
            options: [
              "Micro-changes in gaze and breath",
              "The number of takes required before the shot is usable in the finished edit",
              "Whether the performer is looking at the camera or slightly to one side of it",
              "Whether the performer speaks their next line on time when the moment arrives",
            ],
            correctIndex: 0,
            explanation:
              "Those small changes are what a close-up records, which is why the Kuleshov result cannot be read as permission to do nothing.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "How does the lesson describe the popular telling of the Kuleshov experiment?",
            options: [
              "Film mythology rather than proof",
              "A well-replicated result that later research has confirmed in every detail",
              "A fabrication",
              "An accurate account of a study that has never been attempted again",
            ],
            correctIndex: 0,
            explanation:
              "The popular version presents it as proven. The footage is lost and early replications conflicted, so the honest version rests on the 2016 study instead.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is a held gaze doing in a face-only frame?",
            options: [
              "Applying pressure on the other person",
              "Showing disinterest",
              "Concealing a thought",
              "Marking the end of a unit, so the audience knows the subject is about to change",
            ],
            correctIndex: 0,
            explanation:
              "A held gaze reads as pressure and a drop reads as concession. These are magnified versions of ordinary behavior rather than devices.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "Why is breath significant at the tightest sizes?",
            options: [
              "A change in it reads as an internal event",
              "It is all a camera sees",
              "It must sync with a partner",
              "It sets line length",
            ],
            correctIndex: 0,
            explanation:
              "At that size a change in breathing is visible, so the audience reads it as something happening inside the character.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "Where is the timing of a thought against the line decided?",
            options: [
              "In the reading, before a camera exists",
              "On the day, by the director, during the rehearsal that precedes the first take",
              "In the edit, where the editor can move the reaction relative to the dialogue",
              "By the operator, who chooses when to push in on the performer's face",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says it is available to you in the reading long before a camera exists, which links it directly back to the script-analysis lesson.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "Which of these is NOT carried by a face-only frame?",
            options: [
              "Posture and what your feet are doing",
              "Gaze direction",
              "Whether a visible realization precedes or follows the spoken line",
              "A change in the rhythm of the performer's breathing",
            ],
            correctIndex: 0,
            explanation:
              "The lesson lists gaze, thought timing, and breath, and says almost nothing else survives: not gesture, not posture, not what you were doing with your feet.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is the honest summary of what context does to a listening face?",
            options: [
              "It does part of the work",
              "All of it",
              "None of it",
              "It reverses the performer's intention, so a reaction should be played against the context",
            ],
            correctIndex: 0,
            explanation:
              "Part, not all. That is precisely the distinction between what the replication supports and the strong popular claim it does not.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "Why does the course teach the Kuleshov effect with its caveats rather than as a clean fact?",
            options: [
              "The strong version is not supportable",
              "Legal disclosure duties",
              "A motivational device",
              "The study is too recent",
            ],
            correctIndex: 0,
            explanation:
              "The lost footage and the conflicting earlier replications mean the proven version is mythology. Teaching the hedged version is the only accurate option.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What is blocking?",
            options: [
              "The agreed pattern of movement in a scene",
              "The practice of standing where another performer's face cannot be seen by the camera",
              "The barrier placed between the camera and a light to control where it falls",
              "The process of learning lines by associating each one with a physical action",
            ],
            correctIndex: 0,
            explanation:
              "Who goes where, when, and past whom, worked out on set with the crew watching, because every department plans from it.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Why do marks exist?",
            options: [
              "A lens has a narrow band of sharp focus",
              "To time crossings",
              "Insurance requires performers to stay within defined areas on a working set",
              "They record where the performer stood so the scene can be reshot months later",
            ],
            correctIndex: 0,
            explanation:
              "The focus puller has set distances for the agreed positions, so landing past a mark goes soft and landing short risks the frame or the light.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What happens if you land past your mark?",
            options: [
              "You go out of focus and soft",
              "You force a relight",
              "You log an error",
              "You move outside the microphone's range and the dialogue has to be re-recorded",
            ],
            correctIndex: 0,
            explanation:
              "Focus has been set for the agreed distance. Landing short is a different failure: you may be out of frame or standing in somebody's light.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "How do you hit a mark without looking at it?",
            options: [
              "Peripheral vision and step counting",
              "A partner signals you",
              "Memorizing the floor",
              "Slowing until confirmed",
            ],
            correctIndex: 0,
            explanation:
              "Furniture at the edge of your sightline plus a repeatable number of steps does it. Looking down is visible on camera and reads as technique showing.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Which difference between takes will stop an editor cutting?",
            options: [
              "A prop in the wrong hand",
              "A slightly higher emotional temperature in the second take than in the first",
              "A different pause length before the final line of the exchange",
              "A change in the performer's breathing pattern during the listening section",
            ],
            correctIndex: 0,
            explanation:
              "Physical mismatches break the join. Directors will happily cut between takes with different intensity and will not cut between takes where an object changed hands.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What has to match across takes and sizes?",
            options: [
              "Which hand, which object, when, and which way you turn",
              "Exact vocal pitch",
              "The emotional intensity, since a mismatch there is what audiences notice most quickly",
              "The number of blinks, because blink timing is used to align the two pieces of footage",
            ],
            correctIndex: 0,
            explanation:
              "The physical shape and its timing have to agree. Roughly where you look also matters, because eyeline governs whether the shots read as one conversation.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What does the matching requirement make screen acting partly?",
            options: [
              "A discipline of physical memory",
              "A technical trade",
              "A group exercise",
              "An improvisational skill, because each take has to differ from the one before it",
            ],
            correctIndex: 0,
            explanation:
              "You have to note what you did physically, not just what you felt, and repeat it while still doing the scene rather than performing a reconstruction of it.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What is the frame line?",
            options: [
              "The edge of what the shot holds",
              "Track tape",
              "The light boundary",
              "A level line",
            ],
            correctIndex: 0,
            explanation:
              "Anything crossing it did not happen as far as the audience is concerned, which is why gestures that leave the frame are simply lost.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Who is the focus puller?",
            options: [
              "The crew member adjusting lens focus to the blocking distances",
              "The person responsible for keeping performers' attention on the scene between takes",
              "The assistant who moves the camera along its track during a travelling shot",
              "The technician who chooses which lens is fitted for each setup of a scene",
            ],
            correctIndex: 0,
            explanation:
              "They set distances for the positions the blocking established, which is exactly why a missed mark produces a soft image.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "How does blocking on a set differ from movement on a stage?",
            options: [
              "You move where focus and lighting can follow",
              "You move less",
              "You move only when the director calls for it during the take itself",
              "You move faster, because screen scenes are shorter than theatrical ones",
            ],
            correctIndex: 0,
            explanation:
              "On a stage you move where the moment takes you. On a set the pattern is agreed, and it has to be repeated the same way every take.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Why is blocking worked out with the crew watching rather than with the director alone?",
            options: [
              "Every department plans from it",
              "Union rules say so",
              "Only crews judge it",
              "It saves the director from having to explain the same choices twice",
            ],
            correctIndex: 0,
            explanation:
              "Camera, lighting, sound, and props all base their preparation on the agreed pattern, which is why it is settled in front of them.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What does NOT have to match precisely between takes?",
            options: [
              "The temperature of the reading",
              "Glass-to-mouth timing",
              "The door hand",
              "The exit turn",
            ],
            correctIndex: 0,
            explanation:
              "Directors cut freely between takes of slightly different intensity. It is the physical facts that have to agree for the join to work at all.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Why is looking down at a mark a problem?",
            options: [
              "It is visible on camera",
              "It causes the performer to arrive a fraction of a second late every time",
              "It changes the eyeline, which makes the two shots impossible to cut together",
              "It puts the performer's face out of the light for the length of the movement",
            ],
            correctIndex: 0,
            explanation:
              "The audience sees a person checking the floor, which reads as technique showing. Peripheral vision and step counting achieve the same result invisibly.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What obligation do wide frames come with that a stage performance does not have?",
            options: [
              "Repeating the same movement every take",
              "Keeping the body still",
              "Playing to the widest possible audience position, as a theater performer would",
              "Staying within a fixed distance of the other performer throughout the scene",
            ],
            correctIndex: 0,
            explanation:
              "Wide shots hand the scene back to the body, and the price is that the pattern has to be reproducible for the pieces to cut together.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "How can hitting a mark be practiced without a camera?",
            options: [
              "Pick a floor position at home and walk to it while talking",
              "Copy footage of others",
              "Rehearse with a partner",
              "Measure the distance precisely and count the number of seconds the move takes",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says to use the furniture at the edge of your vision to know when you have arrived, which is exactly the skill a set requires.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What should a performer note during a take, beyond what they felt?",
            options: [
              "What they did physically",
              "Unit timings",
              "Lines that hit",
              "Camera position",
            ],
            correctIndex: 0,
            explanation:
              "Screen work is partly a memory discipline, and the thing to remember is the physical shape, because that is what has to repeat.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What is the discipline for gestures when practicing at home without a crew?",
            options: [
              "Keep the working range modest and deliberate",
              "Use the widest possible range, so that the performance reads at any distance",
              "Avoid gesture entirely, since the frame cannot be predicted in advance",
              "Repeat every gesture twice, so the editor has a second version to choose from",
            ],
            correctIndex: 0,
            explanation:
              "On a set someone tells you your hand left the frame. Alone, the substitute is not assuming the camera saw a movement you did not control.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What does landing short of your mark risk?",
            options: [
              "Being out of frame or in someone's light",
              "Losing focus",
              "Colliding with the camera, which is why marks are placed away from the lens",
              "Changing the eyeline, which stops the shot cutting against the master",
            ],
            correctIndex: 0,
            explanation:
              "The two failures are different: past the mark is soft, short of it risks the framing and the lighting.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "What does the lesson say a performer must be able to do while still doing the scene?",
            options: [
              "Repeat the same physical shape",
              "Watch the camera",
              "Raise the intensity",
              "Track how much of the scene has been covered so far in the shooting day",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is explicit that this must not become performing a reconstruction of the scene. The shape repeats while the pursuit inside it stays live.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Wide does not mean unlimited. What is the practical consequence?",
            options: [
              "Gestures that leave the frame did not happen",
              "Wide shots are shorter",
              "Wide shots are brighter",
              "Wide shots need more takes",
            ],
            correctIndex: 0,
            explanation:
              "Every frame has an edge. The audience only sees what stayed inside it, whatever the performer intended.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Why is playing to the camera usually wrong on a set?",
            options: [
              "The camera is not where the story is happening",
              "The lens cannot record a performer who is facing it directly without distortion",
              "It causes the eyeline to be too close for the shot to cut against the master",
              "It makes the performer harder to light, because the face is fully frontal",
            ],
            correctIndex: 0,
            explanation:
              "The camera is a machine in an arbitrary place, often uncomfortably close. Playing to it breaks the scene unless the piece explicitly asks for direct address.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is an eyeline?",
            options: [
              "The direction and height a performer looks",
              "The 180-degree line",
              "The level at which the camera is placed relative to the performer's eyes",
              "The mark on the floor a performer uses to judge their distance from the lens",
            ],
            correctIndex: 0,
            explanation:
              "It has to be consistent because the cut depends on it: two people both looking camera left read as looking the same way rather than at each other.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "In a single, where might your scene partner actually be?",
            options: [
              "Beside the lens, or gone entirely",
              "Behind the camera",
              "In another room",
              "Standing in the frame just out of focus, so their presence can be felt",
            ],
            correctIndex: 0,
            explanation:
              "They may be beside the lens, or replaced by a taped X or a crew member holding the script. You are still required to be in a conversation.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is the professional response when a placed eyeline feels wrong?",
            options: [
              "Accept the placement precisely",
              "Adjust it slightly",
              "Ask for the partner",
              "Close your eyes",
            ],
            correctIndex: 0,
            explanation:
              "Put the imaginative work into the relationship rather than into arguing with the geometry. Drifting your eyes to where the person really is ruins the shot.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What do longer focal lengths used from further away do to a face?",
            options: [
              "Compress depth and flatten features slightly",
              "Exaggerate whatever is nearest, which makes gestures toward the lens look enormous",
              "Increase the depth of field, so both the face and the background stay sharp",
              "Widen the visible area, which is why they are used for establishing shots",
            ],
            correctIndex: 0,
            explanation:
              "Tight frames are usually made this way. Wider lenses used close do the opposite, exaggerating whatever is nearest to them.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Why can a performer not judge the apparent size of their own movement?",
            options: [
              "It depends on lens and distance",
              "Training biases them",
              "The monitor shows a different aspect ratio from the one the audience will see",
              "The effect only becomes visible once the footage has been color graded",
            ],
            correctIndex: 0,
            explanation:
              "Focal length and camera distance change how large a movement reads, and the effect is not visible from inside the performance, which is another reason to ask about the frame.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is first in Murch's ordering of what a cut should serve?",
            options: [
              "Emotion, ahead of story",
              "Spatial continuity, because a cut that breaks the geography confuses the audience",
              "Rhythm",
              "Story",
            ],
            correctIndex: 0,
            explanation:
              "The ordering runs emotion, story, rhythm, eye trace, the two-dimensional plane of the screen, and the three-dimensional space of the action (Murch, 2001).",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Where does spatial continuity sit in Murch's ordering?",
            options: [
              "Last of the six",
              "First",
              "Second",
              "Absent",
            ],
            correctIndex: 0,
            explanation:
              "Continuity is real and it is at the bottom of the list, which is why an alive but slightly mismatched take beats a perfectly matched dead one.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What does the ordering imply about matching?",
            options: [
              "Match carefully, but do not make it the thing you are doing",
              "Stop matching, since the editor's priorities make physical consistency irrelevant",
              "Match above all else, because a mismatched take cannot be used in any circumstance",
              "Match only in the master, since the tighter coverage is cut more loosely",
            ],
            correctIndex: 0,
            explanation:
              "The editor's first obligation is what the audience feels, so matching serves the work without becoming the performance itself.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is eye trace?",
            options: [
              "Where in the frame the audience is looking",
              "A performer's gaze path",
              "The line the camera follows when it tracks a performer through a scene",
              "The record of which takes a director watched most closely during dailies",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the criteria an editor weighs, sitting after emotion, story, and rhythm in Murch's ordering.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is direct address?",
            options: [
              "Performance played deliberately to the lens",
              "A director's public note",
              "Naming the other character",
              "A speech given to the audience by a character who is otherwise unaware of them",
            ],
            correctIndex: 0,
            explanation:
              "It is used in narration, presenting, and some commercials, and it is the one context where the general rule about not playing to the camera is inverted.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Two performers in a conversation both look camera left. What does the audience read?",
            options: [
              "Two people looking the same way",
              "A reversed shot",
              "Shared attention",
              "Nothing unusual",
            ],
            correctIndex: 0,
            explanation:
              "The cut depends on opposed eyelines. Matching directions destroy the illusion that the two people are facing each other.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "How does the camera differ from a theater audience?",
            options: [
              "It is a machine in an arbitrary place",
              "It sees more detail, which is why performances have to be technically cleaner",
              "It records the performance permanently rather than experiencing it once",
              "It is always at the same distance, unlike an audience spread through a room",
            ],
            correctIndex: 0,
            explanation:
              "A stage audience is a fixed body of people in front of you and is played outward to. The camera is not where the story is happening.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What might stand in for an absent scene partner?",
            options: [
              "A taped X or a crew member holding the script",
              "A recorded playback",
              "A mirror positioned so the performer sees themselves at the correct eyeline",
              "A second camera showing the other performer on a monitor beside the lens",
            ],
            correctIndex: 0,
            explanation:
              "The other performer may have gone home. You are still required to be in a conversation, which is what makes eyeline discipline a craft skill rather than a technicality.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Why does a small lean sometimes read as a significant move?",
            options: [
              "A wide lens used close exaggerates what is nearest",
              "Frames always magnify",
              "Editors slow them",
              "The audience expects little movement in a close-up, so any move stands out",
            ],
            correctIndex: 0,
            explanation:
              "Focal length and distance decide apparent size, which is why the lesson tells performers not to judge their own movement from inside it.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is the practical consequence of an eyeline being placed slightly too close to the lens?",
            options: [
              "It feels wrong and should be accepted anyway",
              "The performer should fix it",
              "The shot is unusable",
              "It narrows depth of field",
            ],
            correctIndex: 0,
            explanation:
              "Placements often feel wrong. The professional behavior is to accept them precisely and put the effort into the relationship instead.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Which take does the ordering suggest an editor will prefer?",
            options: [
              "Alive but slightly mismatched",
              "Perfectly matched but flat, because continuity failures are the hardest to disguise",
              "The longest one, because it gives the most material to choose from",
              "The first one, because performers are freshest before repetition sets in",
            ],
            correctIndex: 0,
            explanation:
              "Emotion is first and continuity is last, so a living take with a small mismatch outranks a dead one that joins perfectly.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is focal length?",
            options: [
              "The lens property deciding depth compression and near-object exaggeration",
              "The performer-to-mark distance",
              "The length of time focus can be held on a moving performer before it drifts",
              "The measurement of how far the camera travels during a tracking shot",
            ],
            correctIndex: 0,
            explanation:
              "Longer lenses from further away compress depth and flatten features slightly; wider lenses used close exaggerate whatever is nearest to them.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "How many criteria are in the ordering the lesson attributes to Murch?",
            options: [
              "Six, starting with emotion",
              "Three",
              "Two",
              "Ten, one for each department whose work has to survive the join",
            ],
            correctIndex: 0,
            explanation:
              "Emotion, story, rhythm, eye trace, the two-dimensional plane of the screen, and the three-dimensional space of the action.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "Why does the course teach the ordering rather than the numeric weights attached to it?",
            options: [
              "The ordering is the useful part and the weights were not read at the primary",
              "The weights change by edition",
              "They suit only documentary",
              "Other editors dispute them",
            ],
            correctIndex: 0,
            explanation:
              "The dossier records that only secondary summaries of the percentages were readable, so the course teaches the uncontested ordering and quotes no numbers.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
        ],
      },
    },
    // ── Section 3 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "acting-on-stage",
      title: "12 · Stage: live, continuous, and whole-body",
      section: "Section 3 · Medium by medium",
      body: `Theater is the medium where none of the frame rules apply, because there is no frame. Four structural facts define it, and every difference from screen work follows from them.

**The audience is present and in the same room.** They breathe, cough, laugh, and go quiet, and that response feeds back into the performance in real time. A comedy plays differently on a Tuesday than on a Saturday, and adapting to that without changing what you are doing is a skill screen work never asks for.

**It is continuous.** There is no coverage, no second take, and no editor. A scene runs from its start to its end in front of people, and if something goes wrong it goes wrong in public and gets solved live.

**The whole body is always visible.** Nobody decides for the audience where to look, so composition is your responsibility along with everyone else's. Where you stand, which way you face, whether you are blocking someone: all of it is available to every viewer at once, and a hand fidgeting in a moment of stillness is visible to anyone who happens to be looking at you.

**Everything has to reach the back.** Not just volume, though that too. Gesture, timing, and the clarity of transitions all have to survive the distance to the furthest seat, and in a large house the person in the last row cannot see your eyes at all.

## What that changes

Scale goes up, and specificity must not go down. This is the whole trick. Enlarging a performance without hollowing it out means the size increases while the want, the obstacle, and the tactics stay exactly as precise as they were in the reading. Size without specificity is the classic bad-theater effect, where everything is loud and nothing is happening.

Vocally the demands are real: sustained projection over eight shows a week is athletic, and it is the same instrument the voice-acting course treats in detail. Breath support carries a long line to the back wall; throat pressure does not, and it injures.

Structurally, you learn arcs rather than fragments. You perform in order, which means you know where you are in the story at every moment, and you build the whole shape in rehearsal. Screen performers work the opposite way, and the switch is genuinely disorienting in both directions.

## The thing stage gives you that screen cannot

Repetition with an audience, night after night, on the same material. That is the closest thing in this profession to a feedback loop that runs every day, and it is a serious argument for doing theater even if screen work is the goal.

:::reveal Name the four structural facts that make theater different from screen work. ||| The audience is present and responding live, the performance is continuous with no retakes or editor, the whole body is always visible because nobody directs the audience's attention, and everything must reach the furthest seat.

:::reveal What is the failure mode of "make it bigger for the stage," and what prevents it? ||| Size without specificity, where everything is loud and nothing is happening. It is prevented by keeping the want, obstacle, and tactics exactly as precise as they were on the page while only the physical and vocal scale increases.

:::reveal Why is stage work valuable even for someone whose goal is screen work? ||| Because performing the same material in front of a live audience night after night is the closest thing the profession has to a daily feedback loop, which is exactly what solo practice lacks.

## Vocabulary
- **Projection**: carrying the voice to the furthest seat using breath support rather than throat pressure.
- **Continuous performance**: playing a piece start to finish with no coverage, retakes, or editing.
- **Composition on stage**: the arrangement of bodies in space, which every audience member sees at once and which no camera curates for them.
- **Arc**: the shape of a character's journey across the whole piece, which stage performers build in order and screen performers assemble out of order.`,
    },
    {
      slug: "acting-for-film",
      title: "13 · Film: fragments, out of order, and the long day",
      section: "Section 3 · Medium by medium",
      body: `Feature work inverts almost every structural fact of theater. The audience is absent, the performance is discontinuous, the frame decides what is visible, and the finished piece is assembled by people you may never meet.

## Out of order, in pieces

Scenes are shot in the order that is cheapest and most practical, which usually means grouped by location. You may play the end of the relationship on the first day and the beginning of it in week five. You may shoot the second half of a conversation before its first half, on a different day, in different weather.

That has one direct consequence for preparation: you have to know, cold, where every moment sits in the arc, because nothing in the day will remind you. Many performers keep a written map of the whole story marked with what the character knows, wants, and has just lost at each point, and consult it before every setup. That map is homework, and it is completely available to you without a camera.

## The unit of work is the setup, not the scene

A **setup** is one camera position. A scene gets several: a master, singles on each person, over-the-shoulders, inserts. Each new setup is a relight and a repositioning, so you may deliver the same forty seconds a dozen times across two hours, at each of several sizes.

That makes screen performance a repeatability problem. What has to be repeatable is the physical shape, per the matching lesson. What must NOT become mechanical is the pursuit inside it, which is exactly why an action is more durable than a summoned emotion: really trying to get something from someone regenerates on take nine, and a manufactured feeling does not.

## Waiting is most of the job

A shooting day is largely waiting, in a chair, in makeup, in a holding area, often for hours, and then being asked to deliver the most emotionally exposed moment in the film with ninety seconds of warning because the light is going. Managing your own readiness across that shape is a genuine professional skill, and it is a different skill from acting.

## Who finishes the performance

You do not. The editor chooses the take and the size; the composer, the sound team, and the colorist change how it reads. This is the fact that makes screen acting collaborative in a way theater is not, and the healthy conclusion is a working performer's version of humility: deliver honest, varied, matchable takes, then let go, because the version people see was assembled after you left.

:::reveal Why is a written map of the story essential on a film, and less so in a play? ||| Because film is shot out of order and grouped by location, so nothing in the day tells you where you are in the arc. A play is performed in order, so the arc is carried by the performance itself.

:::reveal What is a setup, and why does it make screen work a repeatability problem? ||| One camera position. A scene needs several, so the same short passage is delivered many times across hours, and the physical shape has to repeat while the pursuit inside it stays live.

:::reveal What is the healthy conclusion from the fact that the editor, composer, and colorist finish your performance? ||| Deliver honest, varied, matchable takes and then let go. The version an audience sees is assembled after you leave, so control ends at the takes you gave.

## Vocabulary
- **Setup**: one camera position, requiring its own lighting and framing; a scene is covered in several.
- **Insert**: a tight shot of a detail, such as a hand or an object, cut into a scene.
- **Out-of-order shooting**: filming scenes grouped by location and practicality rather than in story order.
- **Repeatability**: the ability to reproduce the physical shape of a moment take after take while the intention stays live.`,
    },
    {
      slug: "acting-for-television",
      title: "14 · Television: pace, series, and the guest performer's problem",
      section: "Section 3 · Medium by medium",
      body: `Television is film's structural cousin with three differences that change the job: speed, continuity across episodes, and the fact that most performers arrive as visitors.

## Speed

Episodic schedules are compressed. Fewer setups, fewer takes, less rehearsal, and a day's page count that a feature would spread over several days. The practical consequence is that preparation moves almost entirely off the set: nobody is going to explore the scene with you at ten in the morning. You arrive with choices made, a physical shape you can repeat immediately, and lines genuinely learned, and then adjust fast when the direction changes.

Adjusting fast is a skill worth naming, because it is where prepared performers most often fail. Preparation that is a decision can be changed in one breath. Preparation that has become a fixed performance cannot, and a director who asks for something different will simply get the same thing again slightly louder.

## Two production shapes

**Single camera** works like film: one camera, coverage in setups, shot out of order, no audience.

**Multi camera** is the older comedy shape: a set open on one side, several cameras running at once, a week of rehearsal, and often a live audience. It sits between theater and film, and the specific demands are theater-like. You play the scene continuously, you time to real laughter, and you keep yourself open to the camera side of the set rather than turning your back on it.

## Continuity you cannot see yet

A series character is written over time, often by many writers, and frequently past the point where anyone has told you where it is going. Facts about your character that have not been invented yet will be invented, and they will contradict what you assumed. So build a character on what is on the page rather than on a backstory that the show may overwrite, and hold your invented private history loosely.

## The guest performer's problem

Most television acting is done by people arriving for a day or a week into a company that has worked together for years, on a set whose rhythms and shorthand they do not know. The craft response is not to fight it. Arrive over-prepared, be easy to work with, ask the questions that are actually necessary and not the ones that just cost time, and understand that the regulars' scene is running whether you are ready or not. Being the person a busy crew is happy to see again is a professional skill and nobody teaches it as one.

:::reveal Why does television reward preparation that is a decision rather than a fixed performance? ||| Because schedules are compressed and direction arrives late, so you must be able to change in one breath. A prepared performance that has hardened cannot adjust, and repeats itself slightly louder instead.

:::reveal What makes multi-camera work sit between theater and film? ||| Several cameras run at once on a set open on one side, after a week of rehearsal and often in front of a live audience, so the scene is played continuously and timed to real laughter while staying open to the camera side.

:::reveal Why should a series performer hold an invented backstory loosely? ||| Because a series character is written over time by many writers, and facts invented later will contradict assumptions. Building on what is actually on the page survives that; a private history does not.

## Vocabulary
- **Single camera**: episodic production shot like a film, in setups, out of order, with one camera.
- **Multi camera**: production with several cameras running at once on an open set, usually rehearsed for a week and often played to a live audience.
- **Guest performer**: someone hired for one or a few episodes into an established company, with no time to learn its rhythms.
- **Adjustability**: the ability to change a prepared choice immediately, as distinct from having a prepared performance.`,
    },

    {
      slug: "quiz-medium-by-medium",
      title: "18 · Quiz: medium by medium",
      section: "Section 3 · Medium by medium",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why do none of the frame rules apply in theater?",
            options: [
              "There is no frame",
              "The audience is too far away",
              "Stage lighting replaces the frame",
              "The production is recorded from a fixed position",
            ],
            correctIndex: 0,
            explanation:
              "Nobody decides for the audience where to look, which is the structural fact that every other difference from screen work follows from.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "Which is one of the four structural facts that define theater?",
            options: [
              "The audience is present and responding live",
              "The performance is recorded for review between shows",
              "The director gives notes during the show",
              "The script may be changed by the performers",
            ],
            correctIndex: 0,
            explanation:
              "The four are a present audience, continuity with no retakes, the whole body always visible, and the requirement that everything reach the furthest seat.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What does it mean that a stage performance is continuous?",
            options: [
              "No coverage, no second take, no editor",
              "The run continues nightly without a break",
              "The performers stay in character during intervals",
              "The lighting never changes",
            ],
            correctIndex: 0,
            explanation:
              "A scene runs start to finish in front of people, so anything that goes wrong goes wrong in public and gets solved live.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "Why is composition a performer's responsibility on stage?",
            options: [
              "Nobody curates where the audience looks",
              "Stage directors hand visual design to the cast",
              "Theatrical lighting is too dim to guide attention",
              "Audience members sit at fixed distances",
            ],
            correctIndex: 0,
            explanation:
              "Everything is available to every viewer at once, so where you stand, which way you face, and whether you are blocking someone all matter.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What can the person in the last row of a large house NOT see?",
            options: [
              "Your eyes",
              "Your whole body",
              "The other performers",
              "Any part of the set",
            ],
            correctIndex: 0,
            explanation:
              "Gesture, timing, and the clarity of transitions all have to survive the distance, and eye detail simply does not reach the back.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What is the failure mode of enlarging a performance for the stage?",
            options: [
              "Size without specificity",
              "Vocal strain, the only real risk",
              "Losing the other performer's timing",
              "Being unable to reduce again on camera",
            ],
            correctIndex: 0,
            explanation:
              "The classic bad-theater effect is everything loud and nothing happening. The want, obstacle, and tactics stay exactly as precise while only the scale rises.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What carries a long line to the back wall?",
            options: [
              "Breath support",
              "Throat pressure",
              "A raised pitch",
              "Slower delivery",
            ],
            correctIndex: 0,
            explanation:
              "Breath support carries; throat pressure does not, and it injures. The same instrument is treated in detail in the voice-acting sibling course.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "How do stage performers learn a character's journey, compared with screen performers?",
            options: [
              "In order, as arcs rather than fragments",
              "From a written map prepared before rehearsal",
              "From the director's notes",
              "By reviewing recorded rehearsals",
            ],
            correctIndex: 0,
            explanation:
              "Performing in order means knowing where you are in the story at every moment. Screen performers assemble the shape out of order, and the switch is disorienting both ways.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What does stage work give a performer that screen work cannot?",
            options: [
              "Repetition with an audience, night after night",
              "A larger fee",
              "Freedom from technical constraints",
              "Certainty about the finished result",
            ],
            correctIndex: 0,
            explanation:
              "It is the closest thing in the profession to a feedback loop that runs every day, which is a serious argument for doing theater even if screen work is the goal.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "How does an audience's response change a live performance?",
            options: [
              "It feeds back in real time",
              "It does not; the show is fixed by opening night",
              "It changes only the running time",
              "It changes only for comedy",
            ],
            correctIndex: 0,
            explanation:
              "A comedy plays differently on a Tuesday than on a Saturday, and adapting to that without changing what you are doing is a skill screen work never asks for.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What happens to a fidgeting hand during a stage moment of stillness?",
            options: [
              "Anyone looking at you sees it",
              "It is absorbed by the distance, so small habits do not matter on stage",
              "It is covered by the lighting design",
              "It reads as characterization",
            ],
            correctIndex: 0,
            explanation:
              "The whole body is always visible and nobody directs the audience's attention, so a habit you would get away with in a tight screen frame is fully exposed.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What is projection, as this lesson defines it?",
            options: [
              "Carrying the voice using breath support",
              "Speaking at the maximum volume you can sustain",
              "Aiming the voice at one section at a time",
              "Using amplification to reach far seats",
            ],
            correctIndex: 0,
            explanation:
              "The definition is deliberately mechanical: it is breath support rather than throat pressure, because the second one injures.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What is an arc, in this lesson's vocabulary?",
            options: [
              "The shape of a character's journey across the whole piece",
              "The curved path walked when crossing the stage",
              "The span between one entrance and exit",
              "The rise and fall of pitch in a speech",
            ],
            correctIndex: 0,
            explanation:
              "Stage performers build it in order in rehearsal, while screen performers assemble it out of order across weeks.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "Why does something going wrong on stage get solved live?",
            options: [
              "There is no second take",
              "Union rules forbid stopping a performance",
              "The audience can demand a refund otherwise",
              "The stage manager cannot intervene until the interval",
            ],
            correctIndex: 0,
            explanation:
              "A continuous performance in front of people has no coverage and no editor, so a problem is public and has to be handled in the moment.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What has to survive the distance to the furthest seat, beyond volume?",
            options: [
              "Gesture, timing, and the clarity of transitions",
              "Facial detail",
              "The subtlety of eye contact between performers",
              "The texture of the costume",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names those three explicitly, and notes that eye detail is precisely what does not reach the back of a large house.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What must NOT go down when a performance is enlarged for a theater?",
            options: [
              "Specificity",
              "Volume, in exact proportion to the room",
              "Speed, since big movements slow a show",
              "The number of physical choices",
            ],
            correctIndex: 0,
            explanation:
              "Enlarging without hollowing out is the whole trick: the size increases while the want, obstacle, and tactics stay exactly as precise as they were on the page.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What does the lesson mean by continuous performance?",
            options: [
              "Playing a piece start to finish with no coverage or editing",
              "Keeping one interpretation across a long run",
              "Staying on stage throughout a scene, with no exits",
              "Delivering lines without pauses",
            ],
            correctIndex: 0,
            explanation:
              "It is the structural opposite of screen work, where the performance is assembled from separately recorded pieces.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "In what order are film scenes shot?",
            options: [
              "The order that is cheapest and most practical",
              "Story order, to build the arc",
              "Reverse order, with the ending captured first",
              "The order the writer numbers",
            ],
            correctIndex: 0,
            explanation:
              "Usually grouped by location. You may play the end of a relationship on day one and its beginning in week five, in different weather.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is the direct consequence of out-of-order shooting for preparation?",
            options: [
              "You must know where every moment sits in the arc",
              "You must learn the whole script before day one",
              "You must rehearse each scene twice, alone and with a partner",
              "You must keep one physical shape for every scene",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the day will remind you, which is why a written map marked with what the character knows, wants, and has lost at each point is standard.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is a setup?",
            options: [
              "One camera position",
              "The rehearsal before a first take",
              "The arrangement of props before the performers arrive",
              "A day's list of scenes",
            ],
            correctIndex: 0,
            explanation:
              "Each new setup is a relight and a repositioning, which is why the same forty seconds can be delivered a dozen times across two hours.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is the unit of work on a film, according to the lesson?",
            options: [
              "The setup",
              "The scene",
              "The shooting day",
              "The page",
            ],
            correctIndex: 0,
            explanation:
              "A scene gets several setups: a master, singles on each person, over-the-shoulders, and inserts, each requiring its own lighting and framing.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What has to be repeatable across takes, and what must not become mechanical?",
            options: [
              "The physical shape repeats; the pursuit stays live",
              "The vocal delivery repeats; the physical shape varies",
              "The emotional level repeats; the blocking changes",
              "Nothing repeats",
            ],
            correctIndex: 0,
            explanation:
              "This is exactly why a played action is more durable than a summoned emotion: really trying to get something regenerates on take nine and a manufactured feeling does not.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is an insert?",
            options: [
              "A tight shot of a detail cut into a scene",
              "A scene added after principal photography has begun",
              "A one-day cover for an absent cast member",
              "Dialogue recorded separately",
            ],
            correctIndex: 0,
            explanation:
              "A hand or an object, shot tight and cut into the scene. It is one of the setups a scene's coverage normally includes.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What does the lesson say a shooting day mostly consists of?",
            options: [
              "Waiting",
              "Rehearsal",
              "Technical work",
              "Travel",
            ],
            correctIndex: 0,
            explanation:
              "Waiting in a chair, in makeup, in a holding area, and then being asked for the most exposed moment in the film with ninety seconds of warning.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What kind of skill is managing your readiness across a shooting day?",
            options: [
              "A professional skill distinct from acting",
              "A physical skill built for stamina",
              "A social skill",
              "A technical skill learned from the camera crew",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it as genuinely professional and explicitly different from acting, because the shape of the day demands it whatever your technique is.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "Who finishes a screen performance?",
            options: [
              "The editor, composer, sound team, and colorist",
              "The director, alone with the performer",
              "The performer, in the last take",
              "The audience",
            ],
            correctIndex: 0,
            explanation:
              "The editor chooses the take and the size, and the others change how it reads. The version people see was assembled after you left.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is the healthy conclusion from the fact that others finish your performance?",
            options: [
              "Deliver honest, varied, matchable takes, then let go",
              "Push for a say in the edit",
              "Deliver the same take every time",
              "Withhold your best work until the final take",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls it a working performer's version of humility: control ends at the takes you gave.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "Why is a written story map less necessary in a play than on a film?",
            options: [
              "A play is performed in order",
              "A play is shorter",
              "A play has a director at every show",
              "A play is rehearsed longer, so the shape is memorized",
            ],
            correctIndex: 0,
            explanation:
              "Performing in sequence means the arc is carried by the performance itself. Film gives you no such reminder, because nothing in the day tells you where you are.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What should the story map record at each point?",
            options: [
              "What the character knows, wants, and has just lost",
              "The planned camera setups and their order",
              "The emotional level on a numbered scale",
              "Costume, hair, and props for continuity",
            ],
            correctIndex: 0,
            explanation:
              "It is consulted before every setup, and it is homework that is completely available to a performer without a camera.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "How does film invert theater's structural facts?",
            options: [
              "Audience absent, performance discontinuous, frame decides visibility",
              "Audience present, continuous, with a second take",
              "Audience absent, but continuous within each scene",
              "Audience present on set, assembled afterward",
            ],
            correctIndex: 0,
            explanation:
              "And the finished piece is assembled by people the performer may never meet, which is the fourth inversion.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "Which setups does the lesson list as typical coverage for a scene?",
            options: [
              "A master, singles, over-the-shoulders, and inserts",
              "A wide, a medium, and a close-up, in that fixed order",
              "One setup per performer",
              "As many as the schedule allows",
            ],
            correctIndex: 0,
            explanation:
              "Each is a separate camera position requiring its own relight, which is what turns a short passage into two hours of work.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What makes screen performance a repeatability problem?",
            options: [
              "The same passage is delivered many times across hours",
              "Performers must produce identical takes by contract",
              "The camera records distracting small variations",
              "Coverage is shot in one continuous pass",
            ],
            correctIndex: 0,
            explanation:
              "Multiple setups at multiple sizes mean the physical shape must repeat while the pursuit inside it stays alive.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "Why might a performer be asked for an exposed moment with ninety seconds of warning?",
            options: [
              "The light is going",
              "The director prefers unprepared performances",
              "The schedule is withheld to keep performers alert",
              "Union rules cap the notice required",
            ],
            correctIndex: 0,
            explanation:
              "The lesson uses the fading light as the example precisely because it is a production reality nobody can negotiate with.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is out-of-order shooting?",
            options: [
              "Filming grouped by location and practicality rather than story order",
              "Filming one scene from several positions",
              "Filming without a completed script",
              "Filming the second half before the first is written",
            ],
            correctIndex: 0,
            explanation:
              "It is the scheduling logic that makes the written story map necessary, because nothing on the day reminds you where you are.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What are the three differences that change the job in television?",
            options: [
              "Speed, continuity across episodes, and arriving as a visitor",
              "Budget, audience size, and number of cameras",
              "Rehearsal length, script quality, and director seniority",
              "Location work, studio work, and the balance",
            ],
            correctIndex: 0,
            explanation:
              "Television is film's structural cousin, and those three differences are what separate it in practice.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Where does preparation happen in episodic television?",
            options: [
              "Almost entirely off the set",
              "In a rehearsal period longer than a feature's",
              "During the first two takes",
              "In the read-through",
            ],
            correctIndex: 0,
            explanation:
              "Nobody is going to explore the scene with you at ten in the morning, so you arrive with choices made, a repeatable shape, and lines genuinely learned.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Why does television reward preparation that is a decision rather than a fixed performance?",
            options: [
              "A decision can be changed in one breath",
              "Decisions can be written down for the director",
              "Fixed performances take longer to memorize",
              "Directors prefer performers with no prior choices",
            ],
            correctIndex: 0,
            explanation:
              "A prepared performance that has hardened cannot adjust, so a director asking for something different simply gets the same thing again slightly louder.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "How does single-camera television work?",
            options: [
              "Like film, in setups, out of order",
              "Continuously, in one pass",
              "With a live audience setting the pace",
              "With one camera position for every scene, which is why it is cheaper",
            ],
            correctIndex: 0,
            explanation:
              "One camera, coverage in setups, shot out of order, no audience. It is the shape a feature uses, at a faster pace.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What defines multi-camera production?",
            options: [
              "Several cameras at once on a set open on one side",
              "Two cameras at opposite ends of the set",
              "A camera on every performer",
              "Cameras recording through rehearsals",
            ],
            correctIndex: 0,
            explanation:
              "It usually comes with a week of rehearsal and often a live audience, which is why its demands sit between theater and film.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What theater-like demands does multi-camera work impose?",
            options: [
              "Play continuously, time to real laughter, stay open to the camera side",
              "Project to the back of the studio",
              "Perform the whole episode in one pass, with no stops for technical problems",
              "Build the arc in story order",
            ],
            correctIndex: 0,
            explanation:
              "The set is open on one side, so turning your back on that side takes you away from every camera at once.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Why should a series performer hold an invented backstory loosely?",
            options: [
              "Later writers will contradict it",
              "Producers must approve every backstory",
              "Backstory is the writer's job alone",
              "It makes the performance less spontaneous",
            ],
            correctIndex: 0,
            explanation:
              "A series character is written over time by many writers, often past the point where anyone knows where it is going, so build on what is actually on the page.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What is a guest performer?",
            options: [
              "Someone hired for one or a few episodes into an established company",
              "An uncredited performer in a single scene",
              "A well-known name brought in to raise an episode's profile",
              "A cast member returning after a season away",
            ],
            correctIndex: 0,
            explanation:
              "Most television acting is done by people arriving into a company that has worked together for years, with no time to learn its rhythms.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What is the craft response to the guest performer's problem?",
            options: [
              "Arrive over-prepared and be easy to work with",
              "Ask the regulars to explain the set's conventions",
              "Request extra rehearsal time",
              "Match the regulars' style exactly so your scenes cut, whatever the director asks",
            ],
            correctIndex: 0,
            explanation:
              "Ask the questions that are actually necessary rather than the ones that cost time, and understand that the regulars' scene is running whether you are ready or not.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What does the lesson call a professional skill that nobody teaches as one?",
            options: [
              "Being someone a busy crew is glad to see again",
              "Learning a full episode's lines overnight",
              "Reading a shooting schedule accurately",
              "Judging when to challenge a director's note",
            ],
            correctIndex: 0,
            explanation:
              "It is named directly at the end of the guest-performer section, alongside the observation that most television acting is done by visitors.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What is adjustability, in this lesson's vocabulary?",
            options: [
              "Changing a prepared choice immediately",
              "Adapting your scale to the closest camera",
              "Modifying the script when a line does not work",
              "Being available at short notice",
            ],
            correctIndex: 0,
            explanation:
              "It is explicitly distinguished from having a prepared performance, and it is where prepared performers most often fail on a compressed schedule.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What is compressed in an episodic schedule?",
            options: [
              "Setups, takes, and rehearsal, with a higher daily page count",
              "The length of each scene",
              "The number of performers",
              "The shooting season",
            ],
            correctIndex: 0,
            explanation:
              "Fewer setups, fewer takes, less rehearsal, and a page count a feature would spread over several days.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What happens when a director asks a hardened prepared performance for something different?",
            options: [
              "They get the same thing again slightly louder",
              "A worse take, from lost confidence",
              "The change, after several unusable takes",
              "An improvised alternative",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names this specific failure, which is why preparation has to remain a set of decisions rather than a finished thing.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Why is a series character's future often unknown to the performer?",
            options: [
              "It has not been written yet",
              "Producers withhold it to keep performances fresh",
              "Contracts bar reading later scripts",
              "Writers change course when a performer anticipates it",
            ],
            correctIndex: 0,
            explanation:
              "Facts about your character that have not been invented yet will be invented, and they will contradict what you assumed.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Which is true of multi-camera work but not single-camera work?",
            options: [
              "A week of rehearsal and often a live audience",
              "Shooting out of order on a compressed schedule with few takes",
              "Coverage assembled from separately lit setups",
              "No audience, allowing repeated attempts",
            ],
            correctIndex: 0,
            explanation:
              "Those are exactly the features that place multi-camera between theater and film, and single-camera work has none of them.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What does a guest performer NOT know on arrival?",
            options: [
              "The set's rhythms and shorthand",
              "Their own lines",
              "Which scenes will be shot that day",
              "Their character's name",
            ],
            correctIndex: 0,
            explanation:
              "The company has worked together for years and has conventions a visitor cannot learn in a day, which is why the craft response is preparation plus ease.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What is the mistake that costs most performers a commercial job?",
            options: [
              "Treating it as a very short drama",
              "Failing to memorize the copy",
              "Playing too small",
              "Arriving without a specific idea of the character",
            ],
            correctIndex: 0,
            explanation:
              "It is a piece of persuasion with a fixed duration, a legally reviewed script, and a protagonist that is not the performer.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Why is time described as a wall in commercial work?",
            options: [
              "Spots run to fixed lengths with room for the tag",
              "Shooting days are shorter, so fewer takes",
              "Audiences stop watching after a few seconds",
              "Editors cannot trim without breaking the music",
            ],
            correctIndex: 0,
            explanation:
              "A read that is beautiful and two seconds long is unusable, which is why working to a stopwatch is part of the craft and practicable at home with a phone timer.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Why is paraphrasing advertising copy a different kind of error than paraphrasing a drama?",
            options: [
              "The wording has usually passed legal review",
              "Commercial writers charge by the word",
              "Copy is timed so a longer word overruns the frame",
              "Clients notice any deviation",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing a claim is a compliance problem rather than a creative choice, so the awkward line gets said as written.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What does \"the product is the protagonist\" ask a performer to stop doing?",
            options: [
              "Building the most interesting character in the frame",
              "Handling the product",
              "Speaking directly to the lens",
              "Making specific choices",
            ],
            correctIndex: 0,
            explanation:
              "The job is usually to be a credible person to whom the product matters, and performers trained in drama routinely play a rich interior life that is in the way.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Notes arrive from the client, the agency, and the director, and they disagree. What do you do?",
            options: [
              "Execute the last one, pleasantly",
              "Ask the three of them to agree first",
              "Combine all three into one reading",
              "Follow the director, who outranks the other two",
            ],
            correctIndex: 0,
            explanation:
              "Take them all pleasantly and do not argue about consistency. Resolving the disagreement is not the performer's job.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What is the real person read?",
            options: [
              "Conversational and unpolished, close to your own speech",
              "A read by a non-professional recruited from the public",
              "A read using the performer's own name",
              "A testimonial format",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls it the most common mode now and the hardest to fake, which is why it gets its own vocabulary entry.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What does the spokesperson mode involve?",
            options: [
              "Direct address to the lens, clear and warm",
              "A heightened figure played completely straight",
              "A silent performance carried by the face",
              "Conversation with another performer over the product",
            ],
            correctIndex: 0,
            explanation:
              "Authority without hard selling. It is one of the places where the general rule against playing to the camera is deliberately inverted.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "How should a character or comedic commercial figure be played?",
            options: [
              "Completely straight, from the inside",
              "Broadly, so the joke reads",
              "With visible awareness of the absurdity",
              "At a lower scale than drama",
            ],
            correctIndex: 0,
            explanation:
              "A heightened figure held for fifteen seconds, played straight. It is the same rule the comedy lesson states more fully later in the course.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What does a silent or reaction commercial mode put the performer squarely into?",
            options: [
              "The close-up rules",
              "The physical acting rules",
              "The narration rules",
              "The stage rules",
            ],
            correctIndex: 0,
            explanation:
              "The whole performance is what happens on your face when the product does its thing, which is exactly the material of the face-alone lesson.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What is the rule for holding a product on camera?",
            options: [
              "Label toward camera, fingers off the front, move slowly",
              "Hold it at chest height throughout",
              "Keep it moving so it is seen from several angles",
              "Hand it to the other performer",
            ],
            correctIndex: 0,
            explanation:
              "And repeat the handling identically for matching. Move slowly enough for focus to follow, and aim the label without visibly aiming it.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What is the tag in a commercial?",
            options: [
              "The short closing line or brand statement",
              "The slate at the head of an audition tape",
              "The label that lets the camera read a product",
              "The agency credit",
            ],
            correctIndex: 0,
            explanation:
              "The copy has to land inside the fixed duration with room left for it, which is part of why time is a wall.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What part of a commercial performer's body is the second most directed?",
            options: [
              "The hands",
              "The eyes",
              "The shoulders",
              "The mouth",
            ],
            correctIndex: 0,
            explanation:
              "Most people have never practiced using their hands on cue, and if you are holding the product, the product is the shot.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "How can the time constraint of commercial work be practiced at home?",
            options: [
              "With a phone timer",
              "By having a friend time several versions",
              "It cannot be, since timing is decided in the edit",
              "By memorizing the copy",
            ],
            correctIndex: 0,
            explanation:
              "Working to a stopwatch is part of the craft, and the lesson notes it is practicable at home with any phone timer.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What is copy?",
            options: [
              "The scripted words of a commercial",
              "The duplicate script each performer is issued",
              "The recorded spot sent to broadcasters",
              "A transcription of an improvised read, kept for repeating",
            ],
            correctIndex: 0,
            explanation:
              "It has usually been through legal review, which is why it is not open to paraphrase however awkward the sentence is.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Why do drama-trained performers often over-complicate commercial work?",
            options: [
              "They play an interior life that is in the way",
              "They play too small, out of trained restraint",
              "They cannot work to a fixed duration",
              "They refuse badly written copy",
            ],
            correctIndex: 0,
            explanation:
              "The job is usually to be the credible person to whom the product matters, and a rich interior life competes with the thing being sold.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Which of the four constraints does NOT exist in dramatic work?",
            options: [
              "Direction arriving from a room of people who disagree",
              "A frame deciding how large a choice can be",
              "A need to repeat actions so takes cut together",
              "An editor choosing the take",
            ],
            correctIndex: 0,
            explanation:
              "A client, an agency, and a director may each give a note and the notes may conflict. The other three apply to any screen work.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What shape is a phone held upright?",
            options: [
              "Roughly nine units wide to sixteen tall",
              "Roughly sixteen wide to nine tall, like a television",
              "Square",
              "Variable, depending on the platform",
            ],
            correctIndex: 0,
            explanation:
              "Tall and narrow. It is generous with height and stingy with width, which is what pushes vertical work toward close-up technique.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What does a vertical frame comfortably hold?",
            options: [
              "One person from the chest up",
              "Two people side by side",
              "A full figure, head to feet",
              "A wide establishing view",
            ],
            correctIndex: 0,
            explanation:
              "Two people side by side do not fit comfortably, so vertical work runs tight by default and inherits every rule from the close-up lesson.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What kind of movement does a vertical frame punish?",
            options: [
              "Lateral movement",
              "Movement toward the lens",
              "Any movement at all",
              "Vertical movement, which takes the head out of frame",
            ],
            correctIndex: 0,
            explanation:
              "A step sideways that a wide horizontal frame absorbs takes you out of a vertical one, so movement runs toward and away from the lens instead.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "How should a vertical medium shot be treated?",
            options: [
              "As though it were a close-up",
              "As though it were a wide shot",
              "As a stage performance",
              "The same as a horizontal medium shot, since the size term means the same thing",
            ],
            correctIndex: 0,
            explanation:
              "Held at arm's length, the face occupies a large part of the viewer's visual field, so the effective intimacy is higher than the shot size suggests.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What viewing condition should short-form work be planned for?",
            options: [
              "Sound off",
              "Full attention on a large screen",
              "Headphones",
              "Repeated viewing",
            ],
            correctIndex: 0,
            explanation:
              "Something has to be legible without audio, which is why captions are standard and why the face has to be doing something that reads with the voice removed.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What is the free diagnostic the lesson recommends for short-form work?",
            options: [
              "Watch it muted",
              "Watch it at double speed",
              "Show it to someone who has not read the script",
              "Compare it with a professional piece",
            ],
            correctIndex: 0,
            explanation:
              "It is called brutal and free, and it tests exactly the condition a large share of this material is actually watched in.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What job does the beginning of a short-form piece have that it never had before?",
            options: [
              "Being worth not leaving",
              "Establishing the location",
              "Introducing the performer by name",
              "Telling viewers to rotate their phones",
            ],
            correctIndex: 0,
            explanation:
              "Short-form viewing is a stream someone is scrolling. That is a structural fact rather than an invitation to shout.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What is a cold open, in this lesson's sense?",
            options: [
              "Beginning inside an unresolved situation",
              "Beginning with silence so the viewer turns the sound on",
              "Beginning with the ending",
              "Beginning without music",
            ],
            correctIndex: 0,
            explanation:
              "Starting in the middle of something already running does the work that noise cannot, which is how short form earns the next few seconds.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "How does direct address invert the rule from the eyeline lesson?",
            options: [
              "The lens is played to deliberately",
              "The eyeline moves further from the lens",
              "The performer looks away to an unseen listener",
              "The camera moves to the performer",
            ],
            correctIndex: 0,
            explanation:
              "Most short-form material is played straight to the lens, which is the one context where not playing to camera stops applying.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What does direct address demand that acting to a partner does not?",
            options: [
              "Supplying the rhythm yourself",
              "A louder delivery",
              "A fixed gaze that never moves, since any shift breaks the connection",
              "Shorter sentences",
            ],
            correctIndex: 0,
            explanation:
              "The lens does not respond, so you have to provide the rhythm a listener would normally give you, while addressing one person rather than an audience.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Why is short-form work the most accessible practice ground in the course?",
            options: [
              "It is usually made alone",
              "It requires no script",
              "Platform feedback substitutes for a coach",
              "It is shorter, so mistakes cost less",
            ],
            correctIndex: 0,
            explanation:
              "One person operating the camera, playing the scene, and cutting it. It is also where the self-critique protocol does the most work, because you are your only reader.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Why are captions standard in short-form video?",
            options: [
              "Much of the audience is watching muted",
              "Platforms require them before publishing",
              "They put more text on screen",
              "They correct misdelivered lines",
            ],
            correctIndex: 0,
            explanation:
              "Sound-off viewing is the condition to plan for, which is also why the face has to carry something that reads without the voice.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "How does gesture behave in a vertical frame?",
            options: [
              "It happens near the face or leaves the frame",
              "It can be as wide as in any frame",
              "It should be avoided entirely",
              "It has to be repeated to be understood",
            ],
            correctIndex: 0,
            explanation:
              "Vertical work inherits the close-up rules: amplitude is small, and anything that travels sideways crosses the frame line.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Why is the effective intimacy of mobile viewing higher than the shot size suggests?",
            options: [
              "The screen is held at arm's length",
              "Phone screens show higher contrast",
              "Viewers watch alone",
              "Compression flattens the image forward",
            ],
            correctIndex: 0,
            explanation:
              "At that distance the face occupies a large part of the viewer's visual field even in a modest frame, so the intimacy exceeds the nominal size.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Which of these does the course deliberately NOT teach about vertical video?",
            options: [
              "Platform pixel dimensions and maximum durations",
              "Where a tall narrow frame lets gesture happen",
              "That much viewing happens without audio",
              "How direct address changes the job",
            ],
            correctIndex: 0,
            explanation:
              "Platform specifications change without notice and are not craft claims, so the course teaches the stable 9:16 shape and names no platform numbers.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Where does movement run in a vertical frame?",
            options: [
              "Toward and away from the lens",
              "Across the frame",
              "Upward and downward",
              "Nowhere",
            ],
            correctIndex: 0,
            explanation:
              "The frame is stingy with width, so a lateral step that a horizontal frame absorbs takes a performer out of a vertical one.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "What is narration, as this lesson defines it?",
            options: [
              "Acting with the character removed",
              "Reading stage directions aloud in rehearsal",
              "Any performance recorded without a camera",
              "A summary delivered before a story begins",
            ],
            correctIndex: 0,
            explanation:
              "No scene partner, no obstacle in the room, and no pretense that you are anyone but a person telling somebody something.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What defines a narration mode?",
            options: [
              "What the listener is being promised",
              "The recording specification the client requested",
              "The length of the script",
              "Whether the piece is broadcast or internal",
            ],
            correctIndex: 0,
            explanation:
              "The contract with the listener sets everything else: pace, level, and how much personality is appropriate.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What is the failure mode of documentary or authoritative narration?",
            options: [
              "Portentousness",
              "Excessive speed",
              "Sounding uncertain",
              "Over-articulation",
            ],
            correctIndex: 0,
            explanation:
              "The mode wants steady, unhurried, and warm rather than grand, and the temptation is to be grand.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "In explainer or instructional narration, what outranks beauty?",
            options: [
              "Clarity",
              "Speed",
              "Warmth",
              "Consistency",
            ],
            correctIndex: 0,
            explanation:
              "The listener is trying to do something, so pace follows the difficulty of the idea and the emphasis lands on the word carrying the new information.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "How does the lesson describe good corporate or industrial narration?",
            options: [
              "Professional and unmemorable in the best sense",
              "Distinctive across a campaign",
              "Energetic",
              "Formal, with careful articulation and a slower than conversational pace",
            ],
            correctIndex: 0,
            explanation:
              "An even level and no personality that competes with the content. The mode's whole point is not being the thing that is noticed.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "Which narration mode treats sounding composed as a fault?",
            options: [
              "Personal or essay",
              "Documentary",
              "Explainer",
              "Corporate",
            ],
            correctIndex: 0,
            explanation:
              "It sits closer to speech and is allowed to hesitate and reconsider, which is exactly what composure removes.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What does \"emphasis is meaning\" mean in practice?",
            options: [
              "Land on the words carrying the new information",
              "Raise the volume on each key sentence",
              "Emphasize every noun",
              "Stress each word equally so the listener decides",
            ],
            correctIndex: 0,
            explanation:
              "Any sentence has one or two words carrying its actual news, and an even stress across everything reads as nobody talking to nobody.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What is the strongest punctuation available in narration?",
            options: [
              "A pause",
              "A change of volume",
              "A change of pitch",
              "A repeated word",
            ],
            correctIndex: 0,
            explanation:
              "Beginners systematically use too few, and the moment before the important word is worth more than any amount of push on it.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "Why is \"talk to one person\" the standard fix for bad narration?",
            options: [
              "Addressing an audience produces announcing",
              "One listener is easier to imagine, which calms nerves",
              "It slows the delivery",
              "It keeps the eyeline consistent",
            ],
            correctIndex: 0,
            explanation:
              "One specific person produces speech, and speech is what the listener is actually being promised. The lesson calls it the oldest note in the trade.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What should be found in narration copy before it is performed?",
            options: [
              "Where the argument turns and which sentence is the point",
              "The hardest words to pronounce",
              "The total running time",
              "The client's preferred emphasis, usually marked in the script",
            ],
            correctIndex: 0,
            explanation:
              "Narration copy has an argument in it, with turns and lists, and this is the same analysis skill from the script lesson applied to prose instead of dialogue.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What is announcing?",
            options: [
              "Flattened delivery produced by addressing an audience",
              "A formal introduction before the narration",
              "Speaking up for a distant microphone",
              "Reading copy without analyzing it",
            ],
            correctIndex: 0,
            explanation:
              "It is the generalized sound that comes from talking to a crowd rather than to one person, and it is what the standard note is aimed at.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What does presenting add to narration?",
            options: [
              "Direct address, with the face carrying what the voice carries",
              "Amplification for a live audience",
              "Improvisation, since there is no fixed script",
              "Movement through a space during delivery",
            ],
            correctIndex: 0,
            explanation:
              "Eyes on the lens as though on one person, and body still enough not to distract. The hardest part is that most people who read well flatten visually once a camera appears.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "Where does the instrument itself, breath and articulation and the mic, get treated in detail?",
            options: [
              "In this course's voice-acting sibling",
              "In the physical acting lesson",
              "In the self-tape lesson",
              "Nowhere; voice cannot be taught in text",
            ],
            correctIndex: 0,
            explanation:
              "Off camera, everything in this lesson lives in the voice alone, and the instrument is the subject of the companion course rather than this one.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What happens to most people who read well when a camera is added?",
            options: [
              "They flatten visually",
              "They speed up under time pressure",
              "They over-articulate",
              "They lower their pitch",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls this the hardest part of on-camera presenting: the face has to be doing what the voice is doing.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "How does pace work in explainer narration?",
            options: [
              "It follows the difficulty of the idea",
              "It stays constant",
              "It accelerates as the listener grows familiar",
              "It is set by the client's target duration",
            ],
            correctIndex: 0,
            explanation:
              "The listener is trying to do something, so a harder idea gets more time and an easy one gets less.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What does the lesson say about narration's share of paid work in this field?",
            options: [
              "It is a large share",
              "It is a small niche",
              "It is declining as synthesized voices take over",
              "It is seasonal",
            ],
            correctIndex: 0,
            explanation:
              "The lesson opens by naming it as a large share of the paid work in the field and a distinct craft in its own right.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What is the audience doing during a live theater performance, in the lesson's account?",
            options: [
              "Breathing, coughing, laughing, and going quiet",
              "Sitting still, as a trained audience does",
              "Reading the program",
              "Watching a fixed picture set by the lighting design",
            ],
            correctIndex: 0,
            explanation:
              "That response feeds back into the performance in real time, which is why the same show plays differently on a Tuesday than on a Saturday.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "Knowing which commercial mode a spot is in tells you what, before anyone gives a note?",
            options: [
              "The scale",
              "The running time",
              "The number of takes",
              "Whether the product is handled",
            ],
            correctIndex: 0,
            explanation:
              "Real person, spokesperson, character, and silent reaction each imply a level and a distance before a word of direction arrives.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
        ],
      },
    },
    // ── Section 4 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "commercials-and-branded-work",
      title: "15 · Commercials: the product is the protagonist",
      section: "Section 3 · Medium by medium",
      body: `Commercial work is its own discipline, and the mistake that costs most performers the job is treating it as a very short drama. It is not. It is a piece of persuasion with a fixed duration, a legally reviewed script, and a protagonist that is not you.

## Four constraints that do not exist in drama

**Time is a wall.** Spots run to fixed lengths, and the copy has to land inside them with room for the end tag. A read that is beautiful and two seconds long is unusable. Working to a stopwatch is part of the craft, and it is practicable at home with any phone timer.

**The words are not negotiable.** Advertising copy has usually passed through legal review, so paraphrasing a claim is not a creative choice, it is a compliance problem. Say the line as written, including the awkward one.

**The product is the protagonist.** Your job is usually to be the credible person to whom the product matters, not the most interesting person in the frame. Performers trained in drama routinely over-complicate this and play a rich interior life that is actively in the way.

**Direction comes from a room.** A client, an agency, and a director may each give a note, and the notes may disagree. Take them all pleasantly, execute the last one, and do not argue about consistency.

## What the reads actually ask for

Most commercial work sits in a few recognizable modes, and knowing the mode tells you the scale before anyone says a word.

- **Real person.** Conversational, unpolished, close to your own speech. The most common mode now and the hardest to fake.
- **Spokesperson.** Direct address to the lens, clear and warm, carrying authority without hard selling.
- **Character or comedic.** A heightened figure held for fifteen seconds, played completely straight from the inside.
- **Silent or reaction.** No lines. The whole performance is what happens on your face when the product does its thing, which puts you squarely in the close-up rules from section 2.

## Product handling

If you are holding the thing, the thing is the shot. Keep the label toward camera without visibly aiming it, keep your fingers off the front, move slowly enough for focus to follow, and repeat the handling identically for matching. Hands are the second most-directed part of a commercial performer's body, and most people have never practiced using them on cue.

:::reveal Why is paraphrasing a line in a commercial a different kind of error than paraphrasing in a drama? ||| Because advertising copy has usually been through legal review, so the exact wording of a claim is a compliance matter rather than a creative one.

:::reveal What does "the product is the protagonist" ask a performer to stop doing? ||| To stop building the most interesting character in the frame. The job is usually to be a credible person to whom the product matters, and a rich interior life competes with the thing being sold.

:::reveal Notes arrive from the client, the agency, and the director, and they disagree. What is the professional response? ||| Take them all pleasantly and execute the most recent one, without arguing about the inconsistency. Resolving the disagreement is not the performer's job.

## Vocabulary
- **Copy**: the scripted words of a commercial, usually legally reviewed and not open to paraphrase.
- **Tag**: the short closing line or brand statement a spot must leave room for.
- **Real person read**: the conversational, unpolished delivery mode that dominates current commercial work.
- **Product handling**: the technique of holding and presenting an object on camera, kept slow, unobstructed, and repeatable.`,
    },
    {
      slug: "vertical-mobile-and-short-form",
      title: "16 · Vertical, mobile, and short form",
      section: "Section 3 · Medium by medium",
      body: `A phone held upright gives you a tall, narrow frame, roughly nine units wide to sixteen tall, watched at arm's length on a small screen, very often with the sound off, and very often alongside something else. Every one of those facts changes the performance, and none of them are stylistic preferences.

## What the shape does

A vertical frame is generous with height and stingy with width. Two people side by side do not fit comfortably; one person from the chest up does. So vertical work runs tight by default, which means it inherits every rule from the close-up lesson: the eyes carry it, the amplitude is small, gesture happens near the face or leaves the frame entirely.

The narrowness also punishes lateral movement. A step sideways that a wide horizontal frame absorbs will take you out of a vertical one, so movement is toward and away from the lens rather than across it.

## Watched close, watched small, watched silent

Held at arm's length, the face occupies a large part of the viewer's visual field even in a modest frame, which makes the effective intimacy higher than the shot size suggests. Treat a vertical medium shot as though it were a close-up.

Sound off is the assumption you should plan for. Something has to be legible without audio, which is why captions are standard and why your face has to be doing something that reads with the voice removed. Test your own work with the sound muted; it is a brutal and free diagnostic.

## The opening, and direct address

Short-form viewing is a stream someone is scrolling, so the beginning does a job it never had to do before: it has to be worth not leaving. That is a structural fact, not an invitation to shout. Beginning in the middle of something, with an unresolved situation already running, does the work that noise cannot.

Most of this material is played straight to the lens, which is the one context where the "never play to camera" rule of section 2 is inverted. Direct address is a real technique with its own demands: hold the lens the way you would hold one person's eyes, address one person rather than an audience, and remember that the lens does not respond, so you have to supply the rhythm a listener would normally give you.

## And the honest part

Short-form performance is usually made alone. One person operating the camera, playing the scene, and cutting it. That makes it the most accessible practice ground in this whole course, and it is the format where the self-critique protocol two lessons from now does the most work, because you are your only reader.

:::reveal Why does a vertical frame push a performance toward close-up technique even at a nominally wider size? ||| Because the frame is narrow, so it holds one person from the chest up, and it is watched at arm's length, which makes the effective intimacy higher than the shot size suggests.

:::reveal What is the free diagnostic for short-form work, and what does it test? ||| Watching your own footage with the sound muted. It tests whether the performance is legible without audio, which is how a large share of this material is actually viewed.

:::reveal Direct address inverts the usual screen rule. What does it demand that acting to a partner does not? ||| Holding the lens as if it were one person's eyes, addressing one person rather than a crowd, and supplying the rhythm yourself, because the lens gives nothing back.

## Vocabulary
- **Vertical frame**: the tall, narrow shape of a phone held upright, roughly nine units wide to sixteen tall.
- **Sound-off viewing**: the common condition in which short-form video is watched with audio muted, which is why captions and legible faces matter.
- **Direct address**: performance played to the lens as though to one person, standard in short form and in spokesperson work.
- **Cold open**: beginning inside an unresolved situation rather than setting one up, which is how short form earns the next few seconds.`,
    },
    {
      slug: "narration-and-direct-address",
      title: "17 · Narration and presenting: the storyteller's contract",
      section: "Section 3 · Medium by medium",
      body: `Narration is acting with the character removed. There is no scene partner, no obstacle in the room, and no pretense that you are anyone but a person telling somebody something. It is a large share of the paid work in this field, and it is a distinct craft.

## The contract

Every narration mode is defined by what the listener is being promised, and the mode sets everything else:

- **Documentary or authoritative.** You know this material and you are guiding someone through it. Steady, unhurried, warm rather than grand. The failure mode is portentousness.
- **Explainer or instructional.** The listener is trying to do something. Clarity outranks beauty, pace follows the difficulty of the idea, and the emphasis lands on the word that carries the new information.
- **Corporate or industrial.** Professional and unmemorable in the best sense, with an even level and no personality that competes with the content.
- **Personal or essay.** Closer to speech, allowed to hesitate and reconsider, and the only mode where sounding composed is a fault.

## The mechanics that make it work

**Emphasis is meaning.** Any sentence has one or two words carrying its actual news. Mark them. A read with even stress on everything is unlistenable and reads as nobody talking to nobody.

**Punctuate with breath and pace, not with volume.** A pause is the strongest punctuation available, and beginners systematically use too few. The moment before the important word is worth more than any amount of push on it.

**Talk to one person.** "The audience" produces announcing. One specific person produces speech. This is the oldest note in the trade and it is genuinely the fix for most bad narration.

**Read for structure first.** Narration copy has an argument in it. Find where it turns, where a list begins and ends, and which sentence is the point of the paragraph, and then let the read follow that shape. This is the same analysis skill from lesson 2 applied to prose instead of dialogue.

## On camera and off

Off camera, everything above lives in the voice alone, and the instrument itself, breath, articulation, the mic, and the room, is the subject of this course's sibling on voice acting. On camera, presenting adds direct address: eyes on the lens as though on one person, and body still enough not to distract from what you are saying. The hardest part of on-camera presenting is that your face has to be doing what your voice is doing, and most people who read well flatten visually the moment a camera is added.

:::reveal Why is "talk to one person" the standard fix for bad narration? ||| Because addressing an audience produces announcing, while addressing one specific person produces speech, and speech is what the listener is actually being promised.

:::reveal What does "emphasis is meaning" mean in practical terms? ||| Every sentence has one or two words carrying its new information, and the read has to land on them. Even stress across all words reads as nobody talking to nobody.

:::reveal Why should narration copy be read for structure before it is performed? ||| Because it contains an argument, with turns, lists, and a sentence that is the point of each paragraph. Following that shape is the same analysis skill used on dialogue, applied to prose.

## Vocabulary
- **Narration mode**: the contract with the listener, such as documentary, explainer, corporate, or personal essay, which sets pace and level.
- **Emphasis**: the placement of stress on the words carrying new information, which is where a sentence's meaning actually lives.
- **Announcing**: the flattened, generalized delivery produced by addressing an audience rather than one person.
- **Presenting**: on-camera narration, which adds direct address and requires the face to carry what the voice is carrying.`,
    },

    // ── Section 4 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "playing-drama",
      title: "19 · Drama: stakes, restraint, and the thing not said",
      section: "Section 4 · Drama, comedy, and the body",
      body: `Drama is what happens when something matters and a person cannot simply have it. Everything difficult about playing it comes from one temptation: performing the size of the feeling instead of the size of the effort to contain it.

## Restraint is not smallness

Watch how people behave in a genuine crisis and the pattern is consistent. They do practical things. They handle logistics. They apologize for crying and then keep talking about paperwork. The effort of holding together is visible precisely because it is effortful, and that visible effort is what an audience reads as grief. A performer who leads with the collapse skips the part the audience actually needs.

So the operative question in a heavy scene is not "how much does this hurt?" It is "what is this person doing to stay functional, and where does that fail?" The failure point is the moment, and it lands because everything before it was holding.

## Stakes are the dial

Two performers can play the same want at completely different temperatures depending on what failure costs. Most under-powered dramatic work has correctly identified the want and left the stakes unexamined. Ask directly: if this goes wrong, what is actually lost, and when? A cost that is vague and far away produces a vague performance. A cost that is specific and soon produces urgency without anyone having to manufacture it.

## Silence, and the thing not said

Dramatic writing runs on what characters cannot bring themselves to say. That means the performable material is frequently in the pauses, the changed subject, and the answer to a different question than the one asked. Mark those places in the reading: every point where a character deflects is a point where something is being protected, and identifying what is being protected is the whole job of that beat.

## Two warnings

**Do not play the ending.** If a character does not yet know the marriage is over, they cannot be mourning it. Playing what you know rather than what they know is the most common structural error in dramatic work, and it is a direct product of having read the whole script.

**Difficult material has a safety dimension.** Scenes involving violence, intimacy, or serious distress are staged and choreographed, not improvised, and productions increasingly use specialist coordinators for exactly this. Consent, choreography, and a clear stopping mechanism are professional standards, not sensitivities. A production that treats them as optional is telling you something about itself.

:::reveal What is the operative question in a heavy dramatic scene, and why is it not "how much does this hurt"? ||| It is what the person is doing to stay functional and where that fails. The visible effort of holding together is what an audience reads as grief, and leading with collapse skips it.

:::reveal What does it mean to "play the ending," and why is it a structural error? ||| Performing what you know from having read the whole script rather than what the character knows at that moment, such as mourning a marriage the character does not yet know is over.

:::reveal Why do stakes matter more than the want when a dramatic scene feels underpowered? ||| Because the want is usually already identified; it is the unexamined cost of failure that leaves the temperature flat. A specific and imminent cost produces urgency with nothing manufactured.

## Vocabulary
- **Restraint**: the visible effort of holding together, which reads to an audience as the size of the feeling.
- **Stakes**: what is lost if the character fails, and how soon; the dial that sets a scene's temperature.
- **Deflection**: answering a different question, changing the subject, or falling silent, each marking something the character is protecting.
- **Playing the ending**: performing knowledge the character does not yet have, a direct side effect of having read the whole script.`,
    },
    {
      slug: "playing-comedy",
      title: "20 · Comedy: played straight, and built on status",
      section: "Section 4 · Drama, comedy, and the body",
      body: `Comedy is not a different kind of acting. It is the same acting inside a structure that makes the outcome funny, and the fastest way to kill it is for the performer to find it funny first.

## Play it straight

A character in a comedy is not in a comedy. They are in the worst afternoon of their life, and they are trying extremely hard to solve it. The audience laughs at the gap between how seriously the character takes the situation and how absurd it is, so a performer who signals amusement closes that gap and removes the joke.

This gives a usable test for any comic beat: does my character want this outcome as badly as a dramatic character would want theirs? If the pursuit softened, the comedy softened with it.

## Status, and why it explains most comedy

A great deal of comic structure is built on status: the relative standing two people are playing at a given moment, and how it shifts. High status behavior takes up space, holds eye contact, moves slowly and speaks with an unbroken flow. Low status behavior makes itself small, checks for reactions, and stumbles.

The comedy lives in the mismatch and the reversal. Someone playing high status while visibly failing is funny. Someone playing low status while completely in control is funny. A status flip mid-scene, where the person in charge suddenly is not, is the engine of an enormous amount of written comedy, and reading a comic scene for its status moves usually tells you more about how to play it than reading it for jokes does.

## Timing, honestly

Timing is real and it is the part of comedy least teachable in text, because it is a felt relationship with an audience. What can be said in words is structural.

The setup has to be clear before the turn arrives, so the audience needs the information the joke depends on and needs it without emphasis, because a signposted setup announces its own punchline. The turn should land on the last possible word, so a sentence whose surprise sits in the middle spends its remaining words dissipating. On stage or in front of a live audience you must let the laugh happen and come back in as it falls, which is a live skill you cannot practice alone. And the third repetition of a pattern is where breaking it pays, which is why comic writing so often builds in threes.

## Comedy is precise

Comic writing is rhythmically engineered. Adding a word, changing an emphasis, or taking an extra half second before a punchline can flatten a line that works exactly as written. Where dramatic writing usually survives paraphrase, comic writing frequently does not, so learn comic lines exactly, and treat their rhythm as part of the text.

:::reveal Why does signaling that a scene is funny destroy the joke? ||| Because the laugh comes from the gap between how seriously the character takes the situation and how absurd it is. Showing amusement closes that gap.

:::reveal What is a status flip, and why does it drive so much written comedy? ||| A mid-scene reversal in the relative standing two characters are playing, where the person in charge suddenly is not. Reading a comic scene for its status moves usually explains how to play it better than hunting for jokes.

:::reveal Why should comic lines be learned exactly rather than paraphrased? ||| Because comic writing is rhythmically engineered, and an added word or shifted emphasis can flatten a line that works as written. Dramatic writing usually survives paraphrase; comedy often does not.

## Vocabulary
- **Playing it straight**: pursuing the character's goal with full seriousness inside an absurd situation, which is what makes it funny.
- **Status**: the relative standing two characters play at a given moment, expressed through space, eye contact, pace, and fluency.
- **Status flip**: a reversal of that standing inside a scene, one of the main engines of written comedy.
- **The turn**: the point where a comic line changes direction, which plays best on the last possible word.
`,
    },
    {
      slug: "physical-acting",
      title: "21 · The body: effort, neutrality, and character from movement",
      section: "Section 4 · Drama, comedy, and the body",
      body: `Physical work is not a genre. It is the layer under every other lesson in this course, and it is the one most likely to be neglected by someone learning from text, because text is where the words live.

## Why the body is not decoration

An audience reads intention from movement before it processes a line. Weight, tempo, and where a movement starts in the body are legible at any distance, which is why physical choices carry a wide shot and a stage, and why they still register in a close-up as the difference between a still person and a tense one.

## Effort: a vocabulary for how, not what

The useful working distinction is that a movement has a WHAT and a HOW. Reaching for a glass is the what. Whether you reach quickly or slowly, directly or in a curve, with force or with lightness, and whether you sustain or cut it off, is the how, and the how is where character lives. Movement traditions differ in their terminology, but they agree on the axes: speed, weight, directness, and continuity.

The practical exercise needs no equipment. Take one simple action, opening a door, and run it through the combinations: slow and heavy and direct; fast and light and indirect; sustained; abruptly stopped. Each produces a recognizably different person, and none of it required you to decide anything about the character's biography.

## Neutral, and why it is the hard part

Before you can choose a physical life, you have to be able to notice your own. Everyone carries habits: a favored hip, a jaw that sets, hands that always find each other, a head that leads. On camera these are yours and they are visible, and they may not belong to the character.

Building a neutral baseline means learning to stand and move without your defaults, so that a choice is a choice rather than a leftover. This is a mirror exercise and a video exercise, and it is genuinely available alone, which cannot be said of much in this course.

## Two applications

**Character from the outside in.** Choosing a physical life and letting the internal life follow is a legitimate method, not a shortcut. Deciding where a person leads from, how much space they take, and at what tempo they move produces behavior a purely psychological approach often does not reach.

**Stillness as a choice.** At close sizes the most powerful physical option is doing nothing on purpose. Untrained stillness is usually frozen tension, which reads as anxiety no matter what the scene is. Trained stillness is available weight that is simply not being spent, and the difference is visible.

:::reveal What is the difference between the "what" and the "how" of a movement, and where does character live? ||| The what is the action, such as reaching for a glass. The how is speed, weight, directness, and continuity, and character lives in the how.

:::reveal Why does a performer need a neutral physical baseline before making physical choices? ||| Because personal habits are visible on camera and may not belong to the character. Without a baseline, a physical life is a leftover rather than a decision.

:::reveal What separates trained stillness from untrained stillness on camera? ||| Untrained stillness is frozen tension and reads as anxiety regardless of the scene. Trained stillness is available weight that is simply not being spent, and the two look different.

## Vocabulary
- **Effort qualities**: the axes describing how a movement is performed, including speed, weight, directness, and continuity.
- **Neutral**: a baseline of standing and moving without personal habit, so a physical choice is a decision rather than a leftover.
- **Leading**: which part of the body initiates a movement, one of the fastest ways to build a physically distinct character.
- **Available weight**: the quality of a trained stillness, holding without frozen tension.`,
    },

    {
      slug: "quiz-genre-and-body",
      title: "22 · Quiz: drama, comedy, and the body",
      section: "Section 4 · Drama, comedy, and the body",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the temptation that makes dramatic work difficult?",
            options: [
              "Performing the size of the feeling",
              "Underplaying the scene",
              "Rushing the pauses",
              "Playing the obstacle",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it precisely: performing the size of the feeling instead of the size of the effort to contain it.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "How do people actually behave in a genuine crisis, according to the lesson?",
            options: [
              "They do practical things",
              "They become still and silent",
              "They express the feeling openly",
              "They speak more quickly",
            ],
            correctIndex: 0,
            explanation:
              "They handle logistics, apologize for crying, and keep talking about paperwork. The visible effort of holding together is what an audience reads as grief.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is the operative question in a heavy scene?",
            options: [
              "What is this person doing to stay functional?",
              "How much does this hurt?",
              "Which earlier scene does this one pay off?",
              "How long can the silence be held?",
            ],
            correctIndex: 0,
            explanation:
              "And where does that fail. The failure point is the moment, and it lands because everything before it was holding.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What does a performer who leads with collapse skip?",
            options: [
              "The part the audience needs",
              "The rehearsal process",
              "The technical requirements of matching",
              "The other performer's contribution",
            ],
            correctIndex: 0,
            explanation:
              "The effort of holding together is what reads as grief. Without it there is nothing for the collapse to be a failure of.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is usually missing from under-powered dramatic work?",
            options: [
              "Examined stakes",
              "A clearly identified want",
              "Physical commitment",
              "Vocal variety",
            ],
            correctIndex: 0,
            explanation:
              "Most under-powered work has correctly identified the want and left the cost of failure unexamined, which leaves the temperature flat.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What kind of cost produces urgency without anyone manufacturing it?",
            options: [
              "Specific and soon",
              "Large and abstract",
              "Uncertain in outcome",
              "Shared with the other character",
            ],
            correctIndex: 0,
            explanation:
              "A vague and distant cost produces a vague performance. The question to ask directly is what is lost and when.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "Where is the performable material often located in dramatic writing?",
            options: [
              "In the pauses and the changed subject",
              "In the longest speeches",
              "In the stage directions",
              "In the scene's final exchange",
            ],
            correctIndex: 0,
            explanation:
              "Dramatic writing runs on what characters cannot bring themselves to say, so deflections and answers to a different question are where the work is.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is a deflection, and what does it tell you?",
            options: [
              "Avoiding the question, which marks something being protected",
              "A physical turn away from the other performer, signaling a change of tactic",
              "A line delivered to the camera instead of to the scene partner",
              "A pause held so the audience anticipates the answer",
            ],
            correctIndex: 0,
            explanation:
              "Changing the subject, answering something else, or falling silent all mark a point where something is being protected, and identifying what is the whole job of that beat.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What does it mean to play the ending?",
            options: [
              "Performing knowledge the character does not have",
              "Rushing toward the last beat of a scene",
              "Deciding how a scene ends before rehearsing its middle",
              "Giving the final line more weight than the writing supports",
            ],
            correctIndex: 0,
            explanation:
              "If a character does not yet know the marriage is over, they cannot be mourning it. It is a direct side effect of having read the whole script.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "Why is playing the ending called a structural error rather than a taste problem?",
            options: [
              "It comes from information the character does not have",
              "It always makes the performance too big for the frame",
              "It causes continuity mismatches between takes",
              "It contradicts the director's coverage plan",
            ],
            correctIndex: 0,
            explanation:
              "The performer is working from the script's future rather than the character's present, which is a fault in the reading rather than in the taste.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "How are scenes involving violence, intimacy, or serious distress handled professionally?",
            options: [
              "Staged and choreographed, not improvised",
              "Recorded in a single take, so nobody repeats it",
              "Left to the performers' own judgment",
              "Shot last, once the cast trust each other",
            ],
            correctIndex: 0,
            explanation:
              "Productions increasingly use specialist coordinators, and consent, choreography, and a clear stopping mechanism are professional standards rather than sensitivities.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What does a production that treats safety choreography as optional tell you?",
            options: [
              "Something about itself",
              "That the budget is limited",
              "That the director trusts the cast more than a coordinator",
              "That the scene is less demanding than it looked",
            ],
            correctIndex: 0,
            explanation:
              "The lesson states it flatly. Consent, choreography, and a stopping mechanism are standards, so their absence is information.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is restraint, in this lesson's vocabulary?",
            options: [
              "The visible effort of holding together",
              "A smaller physical scale for a tighter frame",
              "Underplaying so the audience leans in",
              "Suppressing all visible emotion until the end",
            ],
            correctIndex: 0,
            explanation:
              "It is not smallness. It is effortful, and that effort is what reads to an audience as the size of the feeling.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What sets a scene's temperature?",
            options: [
              "The stakes",
              "The want",
              "The genre",
              "The shot size",
            ],
            correctIndex: 0,
            explanation:
              "Two performers can play the same want at completely different temperatures depending on what failure actually costs.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "Which of these behaviors does the lesson use as an example of real crisis behavior?",
            options: [
              "Apologizing for crying and then talking about paperwork",
              "Sitting in silence until someone else breaks it, which is the most common response",
              "Repeating the last thing that was said",
              "Leaving the room immediately",
            ],
            correctIndex: 0,
            explanation:
              "It is the lesson's illustration of doing practical things under pressure, which is the pattern a performer is trying to reproduce.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What makes the failure point of a scene land?",
            options: [
              "Everything before it was holding",
              "The intensity of the collapse",
              "Its position at the end of the scene",
              "The other performer's reaction to it",
            ],
            correctIndex: 0,
            explanation:
              "Restraint is what gives a break something to break from, which is why the operative question is about staying functional rather than about how much it hurts.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is drama, as this lesson defines it?",
            options: [
              "Something matters and a person cannot simply have it",
              "A genre in which the outcome is unhappy and the stakes are life and death",
              "Any scene played without comic intent",
              "A form where characters state feelings outright",
            ],
            correctIndex: 0,
            explanation:
              "The definition is deliberately structural, which is why everything difficult about playing it follows from the single temptation to perform the feeling.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "Why does having read the whole script create a specific hazard?",
            options: [
              "It tempts you to play what you know",
              "It fixes the interpretation before rehearsal",
              "It reveals the director's private intentions",
              "It makes the earlier scenes dull to play",
            ],
            correctIndex: 0,
            explanation:
              "The character only knows what has happened to them so far, so working from the script's future is the most common structural error in dramatic work.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What is the fastest way to kill comedy?",
            options: [
              "For the performer to find it funny first",
              "To play the scene too quickly",
              "To underplay it",
              "To change the familiar wording",
            ],
            correctIndex: 0,
            explanation:
              "The audience laughs at the gap between how seriously the character takes the situation and how absurd it is, and signaling amusement closes that gap.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Where does a character in a comedy think they are?",
            options: [
              "In the worst afternoon of their life",
              "In a comedy",
              "In a scene whose outcome they already know",
              "In a heightened world without consequences",
            ],
            correctIndex: 0,
            explanation:
              "They are trying extremely hard to solve it. Playing it straight is what preserves the gap the laugh depends on.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What is the usable test for any comic beat?",
            options: [
              "Does my character want this as badly as a dramatic character would?",
              "Is the line funny when read aloud without the surrounding scene?",
              "Would the audience laugh if the same words were spoken by someone else?",
              "Does the beat resolve before the next line begins?",
            ],
            correctIndex: 0,
            explanation:
              "If the pursuit softened, the comedy softened with it, which is why the test is about the strength of the want rather than about the joke.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What is status, as this lesson uses it?",
            options: [
              "The relative standing two people are playing at a given moment",
              "The character's rank in the story, such as their job",
              "The performer's billing on the production",
              "The character's share of screen time",
            ],
            correctIndex: 0,
            explanation:
              "It is played rather than possessed, which is why it can shift inside a scene and why a mismatch between played status and reality is funny.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "How does high status behavior present?",
            options: [
              "Taking up space, holding eye contact, moving slowly",
              "Speaking loudly and quickly",
              "Standing above the other performer, so blocking decides it",
              "Refusing to answer questions",
            ],
            correctIndex: 0,
            explanation:
              "And speaking with an unbroken flow. Low status behavior makes itself small, checks for reactions, and stumbles.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Which situation does the lesson describe as funny?",
            options: [
              "Playing high status while visibly failing",
              "Playing high status successfully",
              "Playing low status while truly powerless, which the audience recognizes",
              "Playing no status at all, the neutrality comedy needs",
            ],
            correctIndex: 0,
            explanation:
              "The comedy lives in the mismatch and the reversal. Someone playing low status while completely in control is the other half of the same idea.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What is a status flip?",
            options: [
              "A mid-scene reversal of relative standing",
              "A moment when a character deliberately lowers their status to gain sympathy",
              "The point at which the audience's sympathy transfers to the other character",
              "A staging change",
            ],
            correctIndex: 0,
            explanation:
              "The person in charge suddenly is not, and the lesson calls it the engine of an enormous amount of written comedy.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What usually tells you more about how to play a comic scene?",
            options: [
              "Reading it for its status moves",
              "Reading it for its jokes",
              "Reading it aloud at speed",
              "Reading the scenes on either side of it",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says so directly: status moves explain how to play the scene better than hunting for the jokes does.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Which part of comic timing does the lesson say text cannot teach?",
            options: [
              "The felt relationship with an audience",
              "The placement of the turn within a sentence",
              "The clarity of a setup",
              "The length of a pause, which the editor decides",
            ],
            correctIndex: 0,
            explanation:
              "Timing is real and it is the part least teachable in prose. What can be said in words is structural, which is what the lesson then gives.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What does a setup need, and what must it avoid?",
            options: [
              "The needed information, delivered without emphasis",
              "Maximum clarity, by stressing the words the joke needs",
              "Brevity, so the punchline arrives quickly",
              "A pause afterward to prepare the audience",
            ],
            correctIndex: 0,
            explanation:
              "The audience needs the information the joke depends on, and a signposted setup announces its own punchline.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Where should the turn in a comic line land?",
            options: [
              "On the last possible word",
              "In the middle of the line",
              "At the very start",
              "Wherever the performer's breath falls",
            ],
            correctIndex: 0,
            explanation:
              "A sentence whose surprise sits in the middle spends its remaining words dissipating.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What does a live audience require of comic timing that a recorded medium does not?",
            options: [
              "Letting the laugh happen and returning as it falls",
              "Repeating the joke if part of the room missed it",
              "Slowing the whole scene down",
              "Pausing between every line",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it as a live skill you cannot practice alone, which is one of the honest limits of a solo course.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Where does breaking a pattern pay, in comic structure?",
            options: [
              "At the third repetition",
              "At the second repetition",
              "At the fourth repetition",
              "Whenever the audience laughs",
            ],
            correctIndex: 0,
            explanation:
              "It is why comic writing so often builds in threes, and it is a structural fact rather than a matter of taste.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Why should comic lines be learned exactly rather than paraphrased?",
            options: [
              "Comic writing is rhythmically engineered",
              "Comic writers object more to changes",
              "Comic scripts are legally reviewed like commercial copy",
              "Comic lines are shorter, so each added word costs more",
            ],
            correctIndex: 0,
            explanation:
              "Adding a word, changing an emphasis, or taking an extra half second can flatten a line that works exactly as written, and dramatic writing usually survives what comedy does not.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What should a performer treat as part of the text in comic writing?",
            options: [
              "The rhythm",
              "The stage directions",
              "The other character's reaction",
              "The pauses marked in the script",
            ],
            correctIndex: 0,
            explanation:
              "Comic writing is engineered rhythmically, so the rhythm is not an interpretive layer sitting on top of the words.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "Is comedy a different kind of acting?",
            options: [
              "No, it is the same acting inside a different structure",
              "Yes, it needs a larger scale than drama",
              "Yes, because comic characters are aware of the audience in a way dramatic ones are not",
              "Only on stage, where the live reaction changes it",
            ],
            correctIndex: 0,
            explanation:
              "The lesson opens by saying so. It is the same acting inside a structure that makes the outcome funny.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What happens to the comedy when the pursuit softens?",
            options: [
              "The comedy softens with it",
              "The comedy becomes broader, which some material requires",
              "Nothing, because the joke is in the writing",
              "The scene turns dramatic instead",
            ],
            correctIndex: 0,
            explanation:
              "That relationship is the whole reason the test asks whether the character wants it as badly as a dramatic character would want theirs.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "How does low status behavior present?",
            options: [
              "Making itself small, checking for reactions, stumbling",
              "Speaking quietly and slowly",
              "Agreeing with everything the other character says",
              "Standing further from the camera",
            ],
            correctIndex: 0,
            explanation:
              "It is the mirror of high status behavior, which takes up space, holds eye contact, moves slowly, and speaks with an unbroken flow.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What is physical work, according to this lesson?",
            options: [
              "The layer under every other lesson in the course",
              "A genre practiced by performers who specialize in movement-based theater",
              "Techniques for scenes with no dialogue",
              "A way to explore a character before adding text",
            ],
            correctIndex: 0,
            explanation:
              "It is not a genre, and it is the layer most likely to be neglected by someone learning from text, because text is where the words live.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What does an audience read from movement, and when?",
            options: [
              "Intention, before it processes the line",
              "Character history, reflecting a backstory",
              "The genre",
              "Nothing reliable",
            ],
            correctIndex: 0,
            explanation:
              "Weight, tempo, and where a movement starts in the body are legible at any distance, which is why physical choices carry a wide shot and a stage.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is the difference between the what and the how of a movement?",
            options: [
              "The what is the action; the how is speed, weight, directness, continuity",
              "The what is the intention; the how is the technique",
              "The what is visible to the audience; the how is felt only by the performer",
              "The what is scripted; the how is decided by the director during blocking",
            ],
            correctIndex: 0,
            explanation:
              "Reaching for a glass is the what. Whether you reach quickly or slowly, directly or in a curve, with force or lightness, is the how, and character lives there.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What do movement traditions agree on, despite differing terminology?",
            options: [
              "The axes: speed, weight, directness, and continuity",
              "The order in which physical training should happen",
              "That physical work must precede text analysis",
              "That the body should be trained to a neutral state and left there",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is explicit that the vocabularies differ and the axes do not, which is why it teaches the axes rather than one tradition's names for them.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What does the door-opening exercise demonstrate?",
            options: [
              "Each combination produces a recognizably different person",
              "That physical choices must fit the character's biography",
              "That some combinations are unusable",
              "That physical training needs equipment",
            ],
            correctIndex: 0,
            explanation:
              "Running one simple action through combinations of slow and heavy and direct, fast and light and indirect, sustained, and abruptly stopped, with no decision about biography required.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "Why must a performer be able to notice their own physical life?",
            options: [
              "Habits are visible on camera and may not belong to the character",
              "Habits interfere with matching, because they vary between takes",
              "Habits reveal a performer's training, which directors prefer not to see",
              "Habits change under stress, which makes a performance unpredictable",
            ],
            correctIndex: 0,
            explanation:
              "A favored hip, a jaw that sets, hands that find each other, a head that leads. On camera these are yours and they are visible.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is neutral, in this lesson's vocabulary?",
            options: [
              "A baseline of moving without personal habit",
              "An expressionless face for close-ups",
              "A standing position agreed with the director before blocking begins",
              "The absence of any physical choice",
            ],
            correctIndex: 0,
            explanation:
              "Building it means a physical choice becomes a decision rather than a leftover, which is why the lesson calls it the hard part.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "Which physical practice is genuinely available to someone working alone?",
            options: [
              "Building a neutral baseline with a mirror and a camera",
              "Timing a physical response to another performer's unpredictable choices",
              "Learning to adjust scale in response to a live audience's reaction",
              "Rehearsing choreographed contact, which requires a trained partner",
            ],
            correctIndex: 0,
            explanation:
              "The lesson notes that this is one of the few things in the course that genuinely is available alone, which is why it earns its place.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is character from the outside in?",
            options: [
              "Choosing a physical life and letting the internal life follow",
              "Designing costume and makeup before any behavior",
              "Copying the physical mannerisms of a real person the character resembles",
              "Working from the director's staging rather than from your own analysis",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls it a legitimate method rather than a shortcut, because it produces behavior a purely psychological approach often does not reach.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What does deciding where a person leads from produce?",
            options: [
              "Behavior a psychological approach often misses",
              "A consistent silhouette, which is what the audience recognizes at a distance",
              "A reliable starting position for each take",
              "A physical vocabulary that transfers between roles",
            ],
            correctIndex: 0,
            explanation:
              "Along with how much space they take and at what tempo they move, it is the outside-in route to a physically distinct character.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What separates trained stillness from untrained stillness?",
            options: [
              "Trained stillness is available weight not being spent",
              "Trained stillness lasts longer, thanks to stamina",
              "Trained stillness involves no movement at all",
              "Trained stillness is planned in rehearsal",
            ],
            correctIndex: 0,
            explanation:
              "Untrained stillness is frozen tension and reads as anxiety no matter what the scene is, and the difference is visible on camera.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What does untrained stillness read as, regardless of the scene?",
            options: [
              "Anxiety",
              "Authority",
              "Concentration",
              "Nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "It is frozen tension, and tension has a fixed reading. Trained stillness is weight that is simply not being spent.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is leading, in this lesson's vocabulary?",
            options: [
              "Which part of the body initiates a movement",
              "Taking the first line in a scene",
              "Guiding another performer in choreography",
              "Setting the pace for the rest of the cast",
            ],
            correctIndex: 0,
            explanation:
              "It is named as one of the fastest ways to build a physically distinct character, alongside how much space someone takes and at what tempo they move.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "Why is physical work the layer most likely to be neglected in a text course?",
            options: [
              "Text is where the words live",
              "Physical technique cannot be described in prose",
              "Learners assume physical work is for stage",
              "The exercises require equipment",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names the risk explicitly, which is why it gives exercises requiring nothing but a room, a mirror, and a camera.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "At close sizes, what is the most powerful physical option?",
            options: [
              "Doing nothing on purpose",
              "A small gesture near the face",
              "A change of head angle",
              "Holding the breath",
            ],
            correctIndex: 0,
            explanation:
              "Stillness, when it is trained rather than frozen. The lesson pairs it directly with the reading that untrained stillness always gives.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is available weight?",
            options: [
              "The quality of a trained stillness, holding without frozen tension",
              "The force a performer can safely apply in a staged fight",
              "How a performer's mass is spread across both feet",
              "The physical energy a performer has left at the end of a long shooting day",
            ],
            correctIndex: 0,
            explanation:
              "It is the vocabulary term for what makes trained stillness read differently from anxiety on camera.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What are effort qualities?",
            options: [
              "The axes describing how a movement is performed",
              "The physical demands of a role over a long run",
              "The degrees of exertion a director can request from a performer on a scale",
              "The muscle groups movement training develops",
            ],
            correctIndex: 0,
            explanation:
              "Speed, weight, directness, and continuity. They describe the how of a movement, which is where the lesson locates character.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "Which reading of physical choices does the lesson reject?",
            options: [
              "That they are decoration",
              "That they can be practiced without another person present in the room",
              "That they carry a wide shot better than a close-up",
              "That they can precede any backstory decision",
            ],
            correctIndex: 0,
            explanation:
              "The section is titled around the point that the body is not decoration, because an audience reads intention from movement before it processes the line.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What do weight, tempo, and the origin of a movement have in common?",
            options: [
              "They are legible at any distance",
              "Only a trained teacher can judge them",
              "They are fixed by a performer's build",
              "They vanish once a frame is introduced",
            ],
            correctIndex: 0,
            explanation:
              "That is why physical choices carry a wide shot and a stage, and still register in a close-up as the difference between a still person and a tense one.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What is the exercise's point about choosing a physical life before deciding on biography?",
            options: [
              "No biographical decision is needed for the choice to work",
              "Biography should always be decided first, since physical choices must express it",
              "Biography is the writer's job, so a performer should never invent any",
              "Biography and physical life are the same thing described from different angles",
            ],
            correctIndex: 0,
            explanation:
              "Running one action through combinations of speed, weight, directness, and continuity produces recognizably different people without any decision about the character's past.",
            sourceLessonSlug: "physical-acting",
          },
        ],
      },
    },
    // ── Section 5 ────────────────────────────────────────────────────────────────────────────────
    {
      slug: "the-self-tape",
      title: "23 · The self-tape: the part you actually control",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      body: `The self-tape is now the front door of most casting, and it is the single most controllable thing in this course. Nobody can guarantee you a callback. Everybody can guarantee that their tape is not the reason they did not get one.

## The technical minimum

**Frame.** Standard is a medium close-up: roughly chest up, eyes about a third down from the top edge, a modest gap of headroom, horizontal unless something specific was requested. Not a wide shot in a room, not a nostril-level laptop camera.

**Background.** Plain, mid-toned, and evenly lit, far enough behind you that it goes soft. A neutral wall beats a bedroom, and a bedroom beats a hung sheet with creases in it.

**Light.** The main source in front of you and slightly above, not behind you. A window at midday facing you is free and better than most fixtures. The failure mode to avoid is a bright window behind you, which turns you into a silhouette.

**Camera height and distance.** Lens at roughly eye level, and far enough away that the lens is not distorting your face. A phone on a stack of books beats a phone in a hand.

**Sound.** The most common fatal flaw, and the least noticed. Record in a soft room, kill the refrigerator and the fan, and if you have an external mic, use it. Bad sound is the fastest route to a tape nobody finishes.

**Files.** Name them exactly as asked, in the format asked, and check the whole file plays before you send it.

## The reader

Someone off camera says the other lines. A good reader keeps pace, gives you something to play, and stays well under your level. A reader who performs is a problem; a reader who reads flatly and quickly is a gift. Place them just to one side of the lens so your eyeline sits near the camera without your looking into it, unless the instructions specifically ask for something else.

## The slate

A slate is the short identification piece: usually your name, sometimes your height, location, or representation, delivered as yourself. Do it exactly as instructed, keep it brief, and do not perform it. It is often the first thing a viewer sees, and being a pleasant, unstrained human in it does more than a personality would.

## What is protected

Self-tape auditioning is now covered by negotiated protections in the United States for union work, addressing how many pages you can be asked to prepare, how much notice you must be given, whether memorization can be required, and what technical standard can be demanded of you. The specific numbers change with each bargaining cycle, so this course does not quote them; read the current terms on SAG-AFTRA's own self-tape guidelines page before you accept an unreasonable request as normal (SAG-AFTRA, n.d.).

:::reveal What are the two most common fatal technical flaws in a self-tape? ||| Bad sound, from an untreated or noisy room, and being backlit by a window so that you become a silhouette. Both are avoidable at no cost.

:::reveal What makes a good reader for a self-tape? ||| Someone who reads flatly, quickly, and well under your level, placed just to one side of the lens so your eyeline sits near the camera. A reader who performs is a problem.

:::reveal Why does this course not tell you the page limits and notice periods for union self-tapes? ||| Because those terms are renegotiated each bargaining cycle, so a quoted number ships with an expiry date. The current terms belong on SAG-AFTRA's own guidelines page.

## Vocabulary
- **Slate**: the short identification piece at the head of a tape, delivered as yourself rather than performed.
- **Reader**: the off-camera person delivering the other lines, ideally flat, prompt, and quieter than you.
- **Headroom**: the gap between the top of the head and the top of the frame, which should be modest rather than generous.
- **Backlit**: lit from behind, which renders the performer as a silhouette and is the most common lighting failure in home tapes.

## Sources
SAG-AFTRA. (n.d.). *Self-tape guidelines for members*. https://www.sagaftra.org/self-tape-guidelines-members

Tucker, P. (2023). *Secrets of screen acting* (4th ed.). Routledge.`,
    },
    {
      slug: "watching-yourself-honestly",
      title: "24 · Watching yourself without lying to yourself",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      body: `This is the lesson that does the most work in a course with no reviewer, so it is built on what is actually known about self-assessment rather than on encouragement.

## The problem, stated at its real size

People have moderate insight into their own ability. Across 22 meta-analyses, the mean correlation between how people rated their ability and how they actually performed was .29 (Zell & Krizan, 2014). That is a real relationship and a weak one, and it is not a moral failing: flawed self-assessment is a well-documented general pattern with consequences across health, education, and work (Dunning et al., 2004).

## The part that is actionable

The same analysis found that self-evaluation was more accurate when the judgment was specific to a domain rather than broad, and when the task was objective and familiar rather than complex and vague (Zell & Krizan, 2014). That is not a consolation, it is a design specification. "Was I good?" is exactly the broad, complex, vague question your judgment is worst at. "Did the realization land before the line or after it?" is specific and observable, and your judgment on it is far better.

So the protocol below converts a global verdict into a list of observable questions.

## A protocol you can actually run

**Pass 1, sound off.** Watch with the audio muted, once. Ask: is anything happening on the face? Where do the eyes go, and when? Does the body belong to this person? Sound off strips out the story you already know and shows you what a stranger sees.

**Pass 2, picture off.** Listen only. Ask: does the emphasis land on the words carrying the meaning? Are the pauses where the thought is, or where the breath ran out? Is this a person talking, or someone reciting?

**Pass 3, the checklist.** Watch normally and answer only these, in writing, yes or no:

- Did I know what I wanted in each unit?
- Did the tactic change when the previous one failed?
- Did the thought arrive before I spoke, at least once?
- Was there one moment of genuine stillness?
- Was the scale right for this frame?
- Did anything happen that I did not decide?

**Pass 4, one change.** Pick exactly one item that failed. Do the scene again changing only that. Compare the two takes on that item alone.

## Rules that keep it honest

Write the answers down before you re-watch, because memory reshapes itself to the outcome. Ask observable questions rather than evaluative ones. Never ask "am I any good", which is unanswerable and only produces mood. And separate the two jobs completely: perform, then judge, never both at once, because auditing yourself during a take is the reliable way to flatten it.

## The limit, stated plainly

This protocol makes you a better observer of yourself. It does not make you a coach, and it cannot tell you what you cannot yet perceive. A pair of trained eyes, a class, a rehearsal room, or a working set will find things this cannot, and there is no version of this course that substitutes for them.

:::reveal What does the research suggest makes self-assessment more accurate, and how does the protocol use it? ||| Judgments specific to a domain, about tasks that are objective and familiar, are more accurate than broad ones. The protocol therefore replaces "was I good" with a written list of observable yes-or-no questions.

:::reveal Why watch a take once with the sound off and once with the picture off? ||| Because each pass isolates one channel and strips away the story you already know. Sound off shows what a stranger sees on your face and body; picture off exposes emphasis, pauses, and whether it is speech or recitation.

:::reveal Why must the checklist answers be written down before re-watching? ||| Because memory reshapes itself to fit the outcome. Writing first fixes the observation before the conclusion has a chance to rewrite it.

## Vocabulary
- **Self-assessment accuracy**: how closely a person's rating of their own ability tracks their measured performance; moderate on average, and better for specific, objective judgments.
- **Observable question**: a self-critique question with a yes-or-no answer visible in the recording, as opposed to an evaluative one.
- **Sound-off pass**: watching muted to see what a viewer reads from face and body alone.
- **One-change take**: a second attempt altering exactly one thing, so the comparison isolates that variable.

## Sources
Dunning, D., Heath, C., & Suls, J. M. (2004). Flawed self-assessment: Implications for health, education, and the workplace. *Psychological Science in the Public Interest, 5*(3), 69-106.

Zell, E., & Krizan, Z. (2014). Do people have insight into their abilities? A metasynthesis. *Perspectives on Psychological Science, 9*(2), 111-125. https://doi.org/10.1177/1745691613518075`,
    },
    {
      slug: "practicing-without-a-coach",
      title: "25 · Practicing alone, and what practice can and cannot buy",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      body: `Working alone is the normal condition for most people learning this, so it deserves an honest account rather than a slogan.

## What the evidence actually supports

The influential account of expert performance holds that improvement comes from practice that is effortful, well defined, and accompanied by information about whether the attempt got closer, rather than from time spent (Ericsson et al., 1993). That much is broadly accepted and it is the basis for everything in this lesson.

The stronger version of the claim, that accumulated practice largely accounts for who ends up excellent, has not held up as cleanly. A 2019 replication of the original violinist study found the best players had accumulated LESS practice than the merely good ones, and the share of variance explained dropped from 48 percent to 26 percent; it also found no advantage for teacher-designed practice over self-directed practice (Macnamara & Maitra, 2019).

Two useful conclusions come out of that, and they point in opposite directions, which is why both are worth having. Practice hours are not a purchase order for a career, so nobody should tell you they are. And self-directed practice was not worse than teacher-designed practice in that replication, which is genuinely encouraging for anyone working alone.

## What you can practice alone, productively

- **Analysis.** Break down scenes on paper. This has an answer you can defend, so it is checkable.
- **Learning lines.** Purely mechanical, entirely solo, and the thing that most often sinks people who skipped it.
- **Physical vocabulary.** Effort combinations, neutral, leading, stillness. All available with a mirror and a camera.
- **Self-tape technique.** Framing, light, sound, slate, files. Nearly all procedural.
- **Cold reading.** Pick up unfamiliar material, take sixty seconds, and read it aloud. Repeatable forever.
- **Repertoire.** Build and maintain a small set of prepared pieces so that being asked for one is not an emergency.
- **The self-critique protocol.** The previous lesson, run regularly.

## What you cannot practice alone

Playing off another person, which is a real-time skill that requires another person. Timing to an audience, which requires an audience. And accurate diagnosis of what you cannot yet perceive in your own work, which is the definition of the thing you need someone else for.

The honest recommendation is therefore mixed, and it is not a sales pitch for anything sold here: get into rooms with other people whenever you can, in whatever form is available to you, and use solo practice for the substantial list above rather than as a substitute for the short one.

## A structure for a week

One session on analysis of new material. One on physical work. One recorded scene run through the four-pass critique with a single change take. One cold read. Keeping a written log of what you changed and what happened is the closest available substitute for a teacher's memory of you.

:::reveal Why does a 2019 replication of the deliberate practice study matter to someone practicing alone? ||| Because it found the best violinists had accumulated less practice than the merely good ones and variance explained fell from 48 percent to 26 percent, so hours are not a purchase order. It also found no advantage for teacher-designed practice over self-directed practice.

:::reveal Name three things that can be practiced alone and one that cannot. ||| Analysis, learning lines, physical vocabulary, self-tape technique, and cold reading are all solo. Playing off another person is not, because it is a real-time skill that requires another person.

:::reveal What is the closest available substitute for a teacher's memory of your work? ||| A written log of what you changed each session and what happened as a result, kept over time.

## Vocabulary
- **Deliberate practice**: effortful, well-defined practice accompanied by information about whether the attempt improved, as opposed to time spent.
- **Cold reading**: performing unfamiliar material after a very short preparation, a standard audition condition and an endlessly repeatable solo drill.
- **Repertoire**: a small maintained set of prepared pieces, so that being asked for one is routine rather than an emergency.
- **Practice log**: a written record of what was changed and what resulted, standing in for the continuity a teacher would otherwise provide.

## Sources
Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. *Psychological Review, 100*(3), 363-406.

Macnamara, B. N., & Maitra, M. (2019). The role of deliberate practice in expert performance: Revisiting Ericsson, Krampe & Tesch-Römer (1993). *Royal Society Open Science, 6*(8), 190327. https://doi.org/10.1098/rsos.190327`,
    },
    {
      slug: "the-business-honestly",
      title: "26 · The business, honestly",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      body: `A course that taught the craft and stayed silent about the industry would be leaving out the part that decides whether anyone can sustain a practice. So here it is, with the same rule the rest of the course follows: no numbers that rot, and no promises.

## The materials

**Headshot.** A current photograph that looks like you on an ordinary day, not an idealized version. The single most common complaint from people who cast is that the person who walked in does not match the picture.

**Resume.** Credits, training, and skills, honestly stated. A skill listed is a skill you may be asked to perform on the day, so listing one you cannot do is a self-inflicted disaster rather than a clever move.

**Reel.** Short, front-loaded, and made of your strongest material. Nobody watches to the end, so the first clip is doing nearly all the work.

**Self-tape setup.** Covered in this section, and the piece of the kit most in your control.

## How work is found

Casting flows through casting directors, who are hired by productions, and increasingly through online submission platforms. Representation, an agent or a manager, gets you access to some listings and negotiates on your behalf; it does not create demand for you. There is a common trap here worth naming: legitimate representation is paid from what you earn, so anyone charging you an up-front fee to be represented, or requiring you to buy their photography or their classes, has a business model that does not depend on your working.

## Unions

In the United States, SAG-AFTRA covers film, television, and much commercial and voice work, and Actors' Equity Association covers most professional theater. Membership rules, eligibility routes, and what each contract requires change over time, so read the current terms on the union's own site rather than trusting a summary, including this one. Unions are also where the enforceable protections live, including the self-tape terms discussed earlier (SAG-AFTRA, n.d.).

## What this course refuses to tell you

Any rate, day rate, or scale figure, because they change and a stale number is worse than no number. Any statistic about what proportion of performers work, because those figures depend entirely on who is counted. And any estimate of your chances, because nobody has one.

## The part that is true and unglamorous

The work is intermittent, the rejection is constant and mostly not about you, and the people who last are usually the ones who built a life that does not require the next job to arrive on schedule. That is not discouragement. It is the actual shape of the profession, and knowing it in advance is a professional advantage over finding it out later.

This course has taught you to read a scene, to know what a frame is doing to you, to adjust between mediums, to make a tape nobody has to apologize for, and to watch your own work with some discipline. It has not made you an actor, introduced you to anyone, or put you in a room. Those remain yours to go and get.

:::reveal What is the tell that a representation offer is not legitimate? ||| It asks for money up front, or requires you to buy the company's photography or classes. Legitimate representation is paid out of what you earn, so its incentive is that you work.

:::reveal Why does this course refuse to quote rates or statistics about how many performers work? ||| Because rates change and become misleading, and employment figures for performers depend entirely on who is counted. A stale or definition-dependent number is worse than none.

:::reveal What single fact should you check on a union's own site rather than trusting any summary? ||| The current membership rules, eligibility routes, and contract terms, including the self-tape protections, because all of them change over time.

## Vocabulary
- **Casting director**: the person hired by a production to find and present performers, and the main channel through which work flows.
- **Representation**: an agent or manager who provides access to listings and negotiates, paid from what the performer earns.
- **Up-front fee**: money demanded before any work, and the standard warning sign of a representation offer that does not depend on your working.
- **Reel**: a short compilation of a performer's strongest recorded work, front-loaded because it is rarely watched to the end.

## Sources
SAG-AFTRA. (n.d.). *Self-tape guidelines for members*. https://www.sagaftra.org/self-tape-guidelines-members`,
    },
    {
      slug: "quiz-the-work",
      title: "27 · Quiz: the self-tape, the self-critique, and the business",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does the lesson call the self-tape the most controllable thing in the course?",
            options: [
              "Nobody can guarantee a callback, but everybody can guarantee the tape is not the reason",
              "Casting directors weigh technical quality above performance when reviewing submissions",
              "The union guarantees that a technically compliant tape will be watched in full",
              "Tapes can be re-recorded indefinitely, so the performance can be made perfect",
            ],
            correctIndex: 0,
            explanation:
              "The self-tape is now the front door of most casting, and its technical quality is entirely within the performer's hands.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What is the standard self-tape frame?",
            options: [
              "A medium close-up, roughly chest up",
              "A wide shot showing the whole body",
              "An extreme close-up on the eyes",
              "Whatever frame suits the scene",
            ],
            correctIndex: 0,
            explanation:
              "Eyes about a third down from the top edge, a modest gap of headroom, horizontal unless something specific was requested.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Where should the eyes sit in a self-tape frame?",
            options: [
              "About a third down from the top edge",
              "Exactly in the center of the frame",
              "In the lower half of the frame",
              "Wherever they happen to fall",
            ],
            correctIndex: 0,
            explanation:
              "With a modest gap of headroom above. Generous headroom is the more common error and it wastes the frame.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What kind of background does a self-tape want?",
            options: [
              "Plain, mid-toned, evenly lit, and far enough behind you to go soft",
              "Something related to the scene, so the viewer can imagine the setting",
              "As dark as possible, so that the performer's face is the only thing visible",
              "A bright surface, which reflects light back onto the performer's face",
            ],
            correctIndex: 0,
            explanation:
              "A neutral wall beats a bedroom, and a bedroom beats a hung sheet with creases in it.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Where should the main light source be?",
            options: [
              "In front of you and slightly above",
              "Behind you, to separate you from the background",
              "To one side at floor level, for drama",
              "Directly overhead, as on a film set",
            ],
            correctIndex: 0,
            explanation:
              "A window at midday facing you is free and better than most fixtures. A bright window behind you turns you into a silhouette.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What does being backlit do to a self-tape?",
            options: [
              "Turns you into a silhouette",
              "Softens and flatters the image",
              "Overexposes only the background",
              "Shrinks the file size",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it as the most common lighting failure in home tapes, and it is avoidable at no cost by turning around.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Where should the camera sit?",
            options: [
              "At roughly eye level, far enough away not to distort",
              "Slightly below eye level, to flatter the face",
              "As close as possible, so the face fills the frame",
              "Above eye level, the angle casting prefers",
            ],
            correctIndex: 0,
            explanation:
              "A phone on a stack of books beats a phone in a hand, and a nostril-level laptop camera is the classic failure.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What does the lesson call the most common fatal flaw in a self-tape, and the least noticed?",
            options: [
              "Sound",
              "Framing",
              "Performance",
              "File naming",
            ],
            correctIndex: 0,
            explanation:
              "Record in a soft room, kill the refrigerator and the fan, and use an external mic if you have one. Bad sound is the fastest route to a tape nobody finishes.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What should you do with files before sending them?",
            options: [
              "Name them exactly as asked and check the whole file plays",
              "Compress them as far as possible, since big files get rejected",
              "Send several versions so the viewer can pick a take",
              "Rename them with your own system for easy filing",
            ],
            correctIndex: 0,
            explanation:
              "In the format asked, with the naming asked for, and checked end to end. A file that stops halfway is indistinguishable from a bad tape.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What makes a good reader?",
            options: [
              "Flat, prompt, and well under your level",
              "A full performance to play against",
              "Matching your intensity, line for line",
              "Standing directly behind the camera",
            ],
            correctIndex: 0,
            explanation:
              "A reader who performs is a problem; a reader who reads flatly and quickly is a gift, because the tape is about you.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Where should the reader be placed?",
            options: [
              "Just to one side of the lens",
              "Directly behind the camera",
              "Out of the room entirely",
              "Beside you, in frame",
            ],
            correctIndex: 0,
            explanation:
              "That puts your eyeline near the camera without your looking into it, unless the instructions specifically ask for something else.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What is a slate?",
            options: [
              "The short identification piece at the head of a tape",
              "The clapper board held up at the start of a take",
              "The list of scenes you were asked to prepare",
              "The moment you settle in before the scene begins",
            ],
            correctIndex: 0,
            explanation:
              "Usually your name, sometimes height, location, or representation, delivered as yourself rather than performed.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "How should a slate be delivered?",
            options: [
              "As yourself, briefly, exactly as instructed",
              "In character, from the very first second",
              "With as much personality as you can muster",
              "At length, covering training and credits",
            ],
            correctIndex: 0,
            explanation:
              "Being a pleasant, unstrained human in it does more than a personality would, and it is often the first thing a viewer sees.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What is headroom?",
            options: [
              "The gap between the top of the head and the top of the frame",
              "The space you can move in before leaving the shot",
              "The spare recording time at the start and end of a take",
              "The additional exposure latitude a camera has before the image clips",
            ],
            correctIndex: 0,
            explanation:
              "It should be modest rather than generous, which is one of the most commonly wasted parts of a home-recorded frame.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What four things do the negotiated self-tape protections cover?",
            options: [
              "Pages, notice, memorization, and technical standard",
              "Pay, travel, hours, and a reader supplied by production",
              "Framing, lighting, sound, and file format",
              "Casting fees, platforms, representation, and residuals",
            ],
            correctIndex: 0,
            explanation:
              "How many pages you can be asked to prepare, how much notice you get, whether memorization can be required, and what technical quality can be demanded.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Why does this course quote no numbers for the self-tape protections?",
            options: [
              "The terms change each bargaining cycle",
              "The numbers are confidential to members",
              "The protections vary by production",
              "The terms differ from country to country",
            ],
            correctIndex: 0,
            explanation:
              "A quoted number ships with an expiry date, so the lesson names what is covered and points at SAG-AFTRA's own guidelines page for the current terms.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What is the lesson's advice about an unreasonable self-tape request?",
            options: [
              "Read the current terms before accepting it as normal",
              "Refuse it, since anything over two pages breaks the rules",
              "Accept it, since declining hurts your standing with casting",
              "Negotiate it directly with the production",
            ],
            correctIndex: 0,
            explanation:
              "The protections exist precisely so that a performer who knows the terms does not treat an unreasonable ask as ordinary.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Which two technical failures does the lesson call avoidable at no cost?",
            options: [
              "Bad sound and being backlit",
              "Poor framing and a busy background",
              "Camera shake and focus drift",
              "Slate errors and misnamed files",
            ],
            correctIndex: 0,
            explanation:
              "Both are fixed by moving: record in a quieter, softer room, and turn so the window is in front of you rather than behind.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What beats a hung sheet as a self-tape background?",
            options: [
              "A bedroom",
              "A green screen",
              "A bookshelf",
              "A window",
            ],
            correctIndex: 0,
            explanation:
              "The ordering in the lesson is a neutral wall, then a bedroom, then a hung sheet with creases in it, which is the worst of the three.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What orientation should a self-tape be recorded in?",
            options: [
              "Horizontal, unless something specific was requested",
              "Vertical, since casting now watches on phones",
              "Square, which displays acceptably in both orientations",
              "Whatever the camera defaults to, since it is cropped later",
            ],
            correctIndex: 0,
            explanation:
              "Horizontal is the standard. The vertical rules elsewhere in the course apply to short-form work rather than to auditions.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What was the mean correlation between self-rated ability and actual performance across 22 meta-analyses?",
            options: [
              ".29",
              ".62",
              ".05",
              ".83",
            ],
            correctIndex: 0,
            explanation:
              "Mean .29 with a standard deviation of .11, and individual meta-analytic effects ranging from .09 to .63 (Zell & Krizan, 2014).",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "How does the lesson characterize flawed self-assessment?",
            options: [
              "A documented general pattern, not a moral failing",
              "A problem of beginners, which training resolves",
              "A symptom of anxiety, which relaxation fixes",
              "A lab artifact with no bearing on creative work",
            ],
            correctIndex: 0,
            explanation:
              "It has consequences across health, education, and work (Dunning et al., 2004), which is why the lesson builds a protocol rather than offering encouragement.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "When was self-evaluation found to be MORE accurate?",
            options: [
              "When the judgment was domain-specific and the task objective",
              "When the person had more experience in the field being judged",
              "When the judgment was made immediately rather than after a delay",
              "When the person had received formal feedback at some point previously",
            ],
            correctIndex: 0,
            explanation:
              "And when the task was familiar and low in complexity. That moderator is a design specification for the protocol rather than a consolation.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Why is \"was I good?\" the wrong question?",
            options: [
              "It is broad, complex, and vague",
              "It is negative, which saps motivation",
              "It needs someone else to compare against",
              "It can only be answered weeks later",
            ],
            correctIndex: 0,
            explanation:
              "It is exactly the kind of judgment self-assessment is worst at. \"Did the realization land before the line or after it?\" is specific and observable.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the first pass of the protocol do?",
            options: [
              "Watch with the sound off",
              "Watch it once, normally",
              "Listen without the picture",
              "Write down your expectations",
            ],
            correctIndex: 0,
            explanation:
              "Muted, once. It strips out the story you already know and shows you what a stranger sees on your face and body.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the second pass isolate?",
            options: [
              "The audio, listened to without the picture",
              "The physical performance, at reduced speed",
              "The other performer's contribution alone",
              "The framing, against the format's technical rules",
            ],
            correctIndex: 0,
            explanation:
              "It asks whether emphasis lands on the words carrying meaning, whether the pauses are where the thought is, and whether this is a person talking or someone reciting.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Which question is on the third-pass checklist?",
            options: [
              "Did the tactic change when the previous one failed?",
              "Was this take better than the one before it, on balance?",
              "Would a casting director be likely to call me in for this?",
              "Did I feel connected to the material throughout the scene?",
            ],
            correctIndex: 0,
            explanation:
              "The checklist is written as observable yes-or-no items, which is exactly what the research says makes self-judgment more accurate.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What is the fourth pass?",
            options: [
              "Redo the scene changing exactly one thing",
              "Watch a final time and write a verdict",
              "Show it to someone and note their reaction",
              "Compare it against a professional's take",
            ],
            correctIndex: 0,
            explanation:
              "Pick one failed item, change only that, and compare the two takes on that item alone, which is what isolates the variable.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Why must the checklist answers be written down before re-watching?",
            options: [
              "Memory reshapes itself to the outcome",
              "A teacher can check written answers later",
              "Writing slows you down and sharpens attention",
              "Writing turns an observation into a decision",
            ],
            correctIndex: 0,
            explanation:
              "Writing first fixes the observation before the conclusion has a chance to rewrite it.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What kind of question does the protocol require?",
            options: [
              "Observable rather than evaluative",
              "Open rather than closed, for nuance",
              "Comparative, judged against the last take",
              "Emotional, about how the scene felt",
            ],
            correctIndex: 0,
            explanation:
              "Observable questions have a yes-or-no answer visible in the recording. \"Am I any good\" is unanswerable and only produces mood.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What two jobs must be kept completely separate?",
            options: [
              "Performing and judging",
              "Analyzing and memorizing",
              "Recording and framing",
              "Choosing material and readers",
            ],
            correctIndex: 0,
            explanation:
              "Auditing yourself during a take is the reliable way to flatten it, which is the same warning the earlier lesson on what performers feel gives.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the sound-off pass show you?",
            options: [
              "What a stranger sees on your face and body",
              "Whether the picture quality is good enough to submit",
              "Whether the physical shape matches across takes",
              "Which moments an editor would pick",
            ],
            correctIndex: 0,
            explanation:
              "Muting strips out the story you already know, which is what stops you supplying meaning the footage does not contain.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What is the stated limit of the self-critique protocol?",
            options: [
              "It cannot tell you what you cannot yet perceive",
              "It only works for screen material, not stage",
              "It needs a year of experience to make sense",
              "It becomes unreliable after a few weeks of use",
            ],
            correctIndex: 0,
            explanation:
              "It makes you a better observer of yourself and does not make you a coach. Trained eyes, a class, or a working set will find things it cannot.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Which checklist item asks about something you did not control?",
            options: [
              "Did anything happen that I did not decide?",
              "Was the scale right for this frame?",
              "Was there one moment of genuine stillness?",
              "Did the thought arrive before I spoke, at least once?",
            ],
            correctIndex: 0,
            explanation:
              "It catches habits and accidents, which links directly to the neutral baseline the physical lesson builds.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What is a one-change take?",
            options: [
              "A second attempt altering exactly one thing",
              "A take where you change something without telling the reader",
              "A take made after a single outside note",
              "The final take, with every adjustment so far",
            ],
            correctIndex: 0,
            explanation:
              "Isolating the variable is what makes the comparison mean anything, which is why it is the fourth pass rather than a general instruction to try again.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the picture-off pass ask about pauses?",
            options: [
              "Whether they are where the thought is or where the breath ran out",
              "Whether they are long enough for an audience to register the moment",
              "Whether they match the pauses marked in the script by the writer",
              "Whether they are consistent across the takes, so the material can be cut",
            ],
            correctIndex: 0,
            explanation:
              "It is the same distinction the narration lesson draws between punctuating with breath and pace and simply running out of air.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Why is the lesson described as the one doing the most work in the course?",
            options: [
              "It is the closest available substitute for a reviewer",
              "It is the longest lesson and covers the most separate techniques",
              "It is the only lesson with a written exercise attached to it",
              "It is the lesson most directly connected to getting hired",
            ],
            correctIndex: 0,
            explanation:
              "In a course with no reviewer, a structured self-critique is what replaces the missing half of practice, which is why it is built on evidence rather than encouragement.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What is self-assessment accuracy, in the lesson's vocabulary?",
            options: [
              "How closely a self-rating tracks measured performance",
              "How consistently you rate the same take twice",
              "How well you predict whether you will be cast",
              "How closely your judgment matches a teacher's",
            ],
            correctIndex: 0,
            explanation:
              "It is moderate on average and better for specific, objective judgments, which is the finding the whole protocol is designed around.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What was the range of individual effects behind the .29 mean?",
            options: [
              ".09 to .63",
              ".20 to .40",
              "Zero to 1.0",
              "Not reported",
            ],
            correctIndex: 0,
            explanation:
              "The spread is what makes the moderators interesting: accuracy is much better under some conditions than others, and those conditions are designable.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Which is an evaluative question the protocol tells you never to ask?",
            options: [
              "Am I any good?",
              "Did I want something?",
              "Was the scale right?",
              "Did a thought arrive first?",
            ],
            correctIndex: 0,
            explanation:
              "It is unanswerable from the footage and only produces mood, which is exactly what the domain-specific finding predicts.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the framework say improvement comes from?",
            options: [
              "Effortful, well-defined practice with information about whether it got closer",
              "Total hours accumulated, which is the strongest single predictor of expertise",
              "Working with a teacher, since self-directed practice was found to be ineffective",
              "Performing in front of audiences, which is the only true test of a skill",
            ],
            correctIndex: 0,
            explanation:
              "That much is broadly accepted (Ericsson et al., 1993) and is the basis for everything else in the lesson.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What did the 2019 replication find about the best violinists?",
            options: [
              "They had accumulated less practice than the good ones",
              "They had roughly twice the practice of the good ones",
              "They had started younger, which explained the gap",
              "They practiced the same amount under better supervision",
            ],
            correctIndex: 0,
            explanation:
              "Macnamara and Maitra (2019) failed to replicate the headline finding, and this reversal is part of why the strong claim does not enter the course.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "How did the share of variance explained change in the 2019 replication?",
            options: [
              "It fell from 48 percent to 26 percent",
              "It rose from 26 to 48 percent",
              "It stayed level, but the effect reversed",
              "It could not be calculated",
            ],
            correctIndex: 0,
            explanation:
              "The replication reported the drop directly, which is why practice hours are not a purchase order for a career.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What did the replication find about teacher-designed practice?",
            options: [
              "No advantage over self-directed practice",
              "A substantial advantage over solo practice",
              "It could not be measured at all",
              "A clear disadvantage against solo work",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls this genuinely encouraging for anyone working alone, and pairs it with the reminder that hours guarantee nothing.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which two conclusions does the lesson draw from the replication?",
            options: [
              "Hours guarantee nothing, and solo practice was not worse",
              "Practice is ineffective, so formal training is essential",
              "The original study was fraudulent and should be discarded",
              "Practice works only with a teacher, never alone",
            ],
            correctIndex: 0,
            explanation:
              "They point in opposite directions, which is exactly why the lesson says both are worth having.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which of these can be practiced productively alone?",
            options: [
              "Cold reading unfamiliar material",
              "Playing off a partner",
              "Timing to an audience",
              "Spotting your blind spots",
            ],
            correctIndex: 0,
            explanation:
              "Pick up unfamiliar material, take sixty seconds, read it aloud. It is repeatable forever and it is a standard audition condition.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is cold reading?",
            options: [
              "Performing unfamiliar material after very short preparation",
              "Reading a script silently before making any choices",
              "Delivering lines with no emotional commitment at all",
              "Reading a scene aloud with a partner for the first time",
            ],
            correctIndex: 0,
            explanation:
              "It is a standard audition condition and an endlessly repeatable solo drill, which is why it earns a place on the practicable list.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is repertoire, as this lesson uses it?",
            options: [
              "A small maintained set of prepared pieces",
              "Every role you have played professionally",
              "The accents and physical skills you can produce",
              "The plays you studied during training",
            ],
            correctIndex: 0,
            explanation:
              "It exists so that being asked for a piece is routine rather than an emergency.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which thing does the lesson say cannot be practiced alone?",
            options: [
              "Playing off another person",
              "Learning lines, which needs a tester",
              "Physical vocabulary",
              "Self-tape technique, which needs a camera operator",
            ],
            correctIndex: 0,
            explanation:
              "It is a real-time skill that requires another person, alongside timing to an audience and accurate diagnosis of what you cannot yet perceive.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is the lesson's honest recommendation about working with others?",
            options: [
              "Get into rooms with other people whenever you can",
              "Wait until your solo work is worth someone's time",
              "Pay for coaching, the only reliable feedback",
              "Lean on online communities instead of a room",
            ],
            correctIndex: 0,
            explanation:
              "In whatever form is available to you, and use solo practice for the substantial list rather than as a substitute for the short one. It is deliberately not a pitch for anything sold here.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is the closest available substitute for a teacher's memory of your work?",
            options: [
              "A written practice log",
              "A folder of recorded takes",
              "A regular watching partner",
              "A post-session checklist",
            ],
            correctIndex: 0,
            explanation:
              "A record of what you changed and what happened, kept over time, which is what a teacher would otherwise carry for you.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What does the suggested weekly structure include?",
            options: [
              "Analysis, physical work, a recorded scene with the four-pass critique, and a cold read",
              "Daily line learning, followed by a full scene recorded and reviewed each evening",
              "Three recorded scenes a week, so that progress can be compared across takes",
              "One long session covering everything, since fragmented practice is less effective",
            ],
            correctIndex: 0,
            explanation:
              "Plus a single change take on the recorded scene, and a written log of what was changed and what happened.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which solo practice item does the lesson call purely mechanical?",
            options: [
              "Learning lines",
              "Analysis",
              "Physical vocabulary",
              "Cold reading",
            ],
            correctIndex: 0,
            explanation:
              "It is entirely solo and it is the thing that most often sinks people who skipped it.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Why is analysis described as checkable?",
            options: [
              "It has an answer you can defend",
              "It can be marked by machine",
              "It produces a document to review",
              "It yields a measurable score",
            ],
            correctIndex: 0,
            explanation:
              "A defensible answer is what makes it a genuinely productive solo activity rather than an unverifiable one.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is deliberate practice, in the lesson's definition?",
            options: [
              "Effortful, well-defined practice with information about improvement",
              "Practice designed by a qualified teacher and reviewed after each session",
              "Practice repeated until the material can be performed without conscious thought",
              "Practice logged and measured in hours toward a defined total",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to time spent. The dossier records that the exact 1993 wording was not read at the primary, so the lesson attributes the framework without quoting a definition.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which of these is on the list of things a performer can practice alone?",
            options: [
              "Self-tape technique",
              "Scaling to a live audience",
              "Taking a director's note",
              "Timing to a partner",
            ],
            correctIndex: 0,
            explanation:
              "Framing, light, sound, slate, and files are nearly all procedural, which is what makes them fully available to someone working alone.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Why does the lesson give an honest account rather than a slogan?",
            options: [
              "Working alone is the normal condition for most people learning this",
              "Learners are entitled to a legal disclaimer about the limits of a course",
              "Slogans about practice have been shown to reduce actual practice time",
              "The replication evidence makes any positive claim about practice indefensible",
            ],
            correctIndex: 0,
            explanation:
              "The lesson opens by naming that condition, which is why it treats both halves of the evidence rather than picking the encouraging one.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is a practice log for?",
            options: [
              "Recording what was changed and what resulted",
              "Proving to an agent that you train consistently",
              "Tracking hours toward an expertise target",
              "Listing covered material for a resume",
            ],
            correctIndex: 0,
            explanation:
              "It stands in for the continuity a teacher would otherwise provide, which is exactly the thing solo practice lacks.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What should a headshot look like?",
            options: [
              "Like you on an ordinary day",
              "Like your most flattering, retouched self",
              "Like the role you most want",
              "Like a character, to show range",
            ],
            correctIndex: 0,
            explanation:
              "The single most common complaint from people who cast is that the person who walked in does not match the picture.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Why is listing a skill you cannot perform a self-inflicted disaster?",
            options: [
              "You may be asked to perform it on the day",
              "Agencies verify every claim immediately",
              "Union rules penalize inaccurate claims",
              "Casting software filters out the error",
            ],
            correctIndex: 0,
            explanation:
              "The lesson states it plainly: a listed skill is a skill you may have to produce, which makes overstating one a trap rather than a clever move.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "How should a reel be built?",
            options: [
              "Short and front-loaded with your strongest material",
              "Chronologically, to show your development",
              "Comprehensively, with every credit represented",
              "Strongest material last, building to a peak",
            ],
            correctIndex: 0,
            explanation:
              "Nobody watches to the end, so the first clip is doing nearly all the work.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does representation do, and what does it not do?",
            options: [
              "It provides access and negotiates; it does not create demand for you",
              "It guarantees auditions in exchange for a share of earnings",
              "It manages every career decision, including which roles to take",
              "It replaces the need for a self-tape setup, since submissions go through the agency",
            ],
            correctIndex: 0,
            explanation:
              "An agent or manager gets you access to some listings and negotiates on your behalf, and that is the honest limit of it.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is the tell that a representation offer is not legitimate?",
            options: [
              "It asks for money up front",
              "It signs you sight unseen",
              "It represents a large roster",
              "It contacts you first",
            ],
            correctIndex: 0,
            explanation:
              "Or requires you to buy their photography or their classes. Legitimate representation is paid from what you earn, so its incentive is that you work.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is an up-front fee, and why does it matter?",
            options: [
              "Money demanded before any work, signaling a model that does not need you to work",
              "The deposit an agent requires to cover the cost of submitting you to casting",
              "The standard commission taken from a performer's first booking of the year",
              "The registration charge every casting platform makes for a professional profile",
            ],
            correctIndex: 0,
            explanation:
              "It is the standard warning sign, because a business paid before you work has no stake in whether you ever do.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Which union does the lesson name as covering most professional theater in the United States?",
            options: [
              "Actors' Equity Association",
              "SAG-AFTRA, which covers all media",
              "The Casting Society",
              "The Writers Guild",
            ],
            correctIndex: 0,
            explanation:
              "SAG-AFTRA covers film, television, and much commercial and voice work; Equity covers most professional theater.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does SAG-AFTRA cover, per the lesson?",
            options: [
              "Film, television, and much commercial and voice work",
              "Professional theater, including touring",
              "All US performance work, stage and screen",
              "Only television, with film under a separate deal",
            ],
            correctIndex: 0,
            explanation:
              "And it is where the enforceable protections live, including the self-tape terms discussed earlier in the section.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Where should you read union membership rules and contract terms?",
            options: [
              "On the union's own site",
              "In this course's summary",
              "From your agent",
              "In the trade press",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says to distrust any summary, explicitly including its own, because the terms change over time.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Why does the course refuse to quote rates?",
            options: [
              "They change, and a stale number is worse than none",
              "They are confidential, shared only through agents",
              "They vary too much between performers to mean anything",
              "Publishing them would breach union agreements",
            ],
            correctIndex: 0,
            explanation:
              "It is the same rule the voice-acting sibling course follows, and it applies to day rates and scale figures alike.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Why does the course refuse to quote statistics about how many performers work?",
            options: [
              "The figures depend entirely on who is counted",
              "The data is collected only by unions",
              "The numbers are too discouraging to publish",
              "Employment shifted, so older figures are obsolete",
            ],
            correctIndex: 0,
            explanation:
              "A definition-dependent number is worse than no number, because a learner will repeat it as though it meant something fixed.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does the course say about estimating your chances?",
            options: [
              "Nobody has one",
              "Training improves them",
              "Count the competition",
              "Agents decide them",
            ],
            correctIndex: 0,
            explanation:
              "It is listed alongside rates and employment statistics as something the course refuses to tell you, because no honest version exists.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does the lesson say about the people who last in the profession?",
            options: [
              "They built a life that does not require the next job on schedule",
              "They are the most talented, which is why persistence alone is not enough",
              "They started youngest, for the longest runway",
              "They specialized early in one medium rather than working across several",
            ],
            correctIndex: 0,
            explanation:
              "The work is intermittent and the rejection is constant and mostly not about you, and knowing that in advance is a professional advantage.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "How does the lesson frame the description of the profession's difficulty?",
            options: [
              "As the actual shape of the profession, not discouragement",
              "As a warning to filter out the uncommitted",
              "As a temporary result of new commissioning",
              "As varying enough by region to justify moving",
            ],
            correctIndex: 0,
            explanation:
              "Knowing it in advance is called a professional advantage over finding it out later, which is the opposite of a discouragement.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is a casting director?",
            options: [
              "The person hired by a production to find and present performers",
              "The producer responsible for approving the final cast of a production",
              "An agent who specializes in placing performers with particular studios",
              "The director's assistant, who runs auditions on the director's behalf",
            ],
            correctIndex: 0,
            explanation:
              "They are the main channel through which work flows, alongside online submission platforms.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does the course say it has NOT done for you, in its closing lesson?",
            options: [
              "Made you an actor, introduced you to anyone, or put you in a room",
              "Taught you to read a scene, which requires a teacher's correction",
              "Explained what a frame does to a performance, which needs a camera present",
              "Prepared you technically, since equipment choices change too quickly",
            ],
            correctIndex: 0,
            explanation:
              "It closes the same way it opened, by naming the boundary: those things remain yours to go and get.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does the course say it HAS taught, in the closing summary?",
            options: [
              "Reading a scene, the frame, medium adjustment, self-tape, and self-critique",
              "Everything required to be cast, provided the material is applied consistently",
              "The technical side only, with the performance side left to a teacher",
              "The business side only, since craft cannot be taught without feedback",
            ],
            correctIndex: 0,
            explanation:
              "Plus watching your own work with some discipline. The closing list is deliberately the same one the first lesson promised.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is a reel?",
            options: [
              "A short compilation of a performer's strongest recorded work",
              "The complete recording of a performer's most recent audition",
              "A showreel supplied by a production to publicize a forthcoming release",
              "A collection of headshots presented in sequence with credits",
            ],
            correctIndex: 0,
            explanation:
              "Front-loaded because it is rarely watched to the end, which is why the first clip does nearly all the work.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "How should a resume be written?",
            options: [
              "Credits, training, and skills, honestly stated",
              "With top credits repeated for emphasis",
              "With training dropped once you have credits",
              "With skills stated aspirationally",
            ],
            correctIndex: 0,
            explanation:
              "The honesty requirement is not moral advice: a skill listed is a skill you may be asked to perform on the day.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Where do the enforceable protections in this field live?",
            options: [
              "In the unions",
              "In platform terms",
              "In agent contracts",
              "In employment law",
            ],
            correctIndex: 0,
            explanation:
              "Including the self-tape terms discussed earlier, which is why the lesson sends a performer to the union's own site rather than to a summary.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What is the piece of a performer's kit most within their own control?",
            options: [
              "The self-tape setup",
              "The headshot",
              "The resume",
              "The reel",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names it directly in the materials list, which is consistent with the self-tape lesson calling it the most controllable thing in the course.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "Why does a self-tape reader need to stay under your level?",
            options: [
              "The tape is about you",
              "A loud reader overloads the mic",
              "Union rules limit readers",
              "A committed reader pulls focus",
            ],
            correctIndex: 0,
            explanation:
              "A reader who performs competes for attention in a recording made to show one person's work. Flat, prompt, and quiet is the useful setting.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What is the reason the self-tape is called the front door of most casting?",
            options: [
              "It is where most casting processes now begin",
              "It is the only stage with union protections",
              "It is where an agent first becomes necessary",
              "It replaced the reel as the main submission",
            ],
            correctIndex: 0,
            explanation:
              "That is why the lesson spends its length on the technical minimum: the first thing anyone sees is a file the performer made alone.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Which checklist item connects the self-critique protocol back to the frame lessons?",
            options: [
              "Was the scale right for this frame?",
              "Did I know what I wanted in each unit?",
              "Did the tactic change when the previous one failed?",
              "Was there one moment of genuine stillness?",
            ],
            correctIndex: 0,
            explanation:
              "It is the checklist's direct application of the shot-size rule, which is why the protocol is written as observable questions tied to specific teaching.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What does the protocol substitute for, and what does it not replace?",
            options: [
              "It substitutes for a structured review; it does not replace trained eyes",
              "It substitutes for rehearsal; it does not replace performance in front of people",
              "It substitutes for technical training; it does not replace analysis of the script",
              "It substitutes for a teacher entirely, if run consistently",
            ],
            correctIndex: 0,
            explanation:
              "It makes you a better observer of yourself and cannot show you what you cannot yet perceive, which is what a class or a working set would find.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Why is the replication result relevant to somebody practicing alone specifically?",
            options: [
              "Self-directed practice showed no disadvantage",
              "It proves solo practice beats working with a teacher",
              "Solo practice works only above an hours threshold",
              "Solo practice cannot reach expert level",
            ],
            correctIndex: 0,
            explanation:
              "Teacher-designed practice showed no advantage over self-directed practice in that replication, which is genuinely encouraging without licensing the stronger claim.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is the practical status of accumulated practice hours, after the replication?",
            options: [
              "Not a purchase order for a career",
              "The best predictor of a career",
              "Irrelevant, since practice has no effect",
              "Meaningful only when supervised",
            ],
            correctIndex: 0,
            explanation:
              "So nobody should tell you they are. The weaker and better-supported claim, that practice needs to be effortful and informative, is what the lesson keeps.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
        ],
      },
    },
    {
      slug: "final-acting",
      title: "28 · Final assessment",
      section: "Section 5 · The self-tape, the self-critique, and the business",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is the one thing this course states, in its first lesson, that it cannot do?",
            options: [
              "Judge your performance",
              "Explain stage versus screen",
              "Set self-tape requirements",
              "Explain how work is found",
            ],
            correctIndex: 0,
            explanation:
              "There is no upload, no reviewer, and no live session, so the feedback half of practice is absent for the performance itself. The rest of the list is content the course does deliver.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "Why does the missing reviewer matter, in terms of how skills are acquired?",
            options: [
              "Feedback is a condition of practice, not a bonus",
              "Learners without an audience lose motivation",
              "Unsupervised practice reinforces errors faster",
              "Assessment needs a second observer to be valid",
            ],
            correctIndex: 0,
            explanation:
              "Practice improves you when the task is well defined and something reports whether the attempt got closer. Without that, repetition is repetition.",
            sourceLessonSlug: "what-this-course-can-teach",
          },
          {
            prompt: "A character's want must be specific enough to do what?",
            options: [
              "Tell whether they got it",
              "Explain the whole script",
              "Be agreed with your partner",
              "Fit in a single sentence",
            ],
            correctIndex: 0,
            explanation:
              "Getting a sister to admit she read your mail passes. Being respected does not, because nothing that happens in the scene can settle it.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "What marks the end of a unit inside a scene?",
            options: [
              "Something changes",
              "The camera moves",
              "A page ends",
              "The performer breathes",
            ],
            correctIndex: 0,
            explanation:
              "New information, an abandoned tactic, an entrance or exit, or a change of subject. Production divisions do not align with dramatic ones.",
            sourceLessonSlug: "reading-a-script",
          },
          {
            prompt: "Convert this result note into something playable: \"be more upset.\"",
            options: [
              "Make her understand what she has done",
              "Let the emotion build until it shows",
              "Raise the volume and shorten the breath",
              "Recall a comparable event from your life",
            ],
            correctIndex: 0,
            explanation:
              "It has a target and can be attempted directly. The other three describe a finished effect or a private state rather than an act.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "Why is a played action more durable across many takes than a summoned emotion?",
            options: [
              "It regenerates on its own each take",
              "It uses less energy over a long day",
              "It is written in the script",
              "It produces identical takes for matching",
            ],
            correctIndex: 0,
            explanation:
              "Really trying and really being blocked produces the feeling fresh every time. A manufactured emotion gets visibly harder as the day wears on.",
            sourceLessonSlug: "playing-an-action",
          },
          {
            prompt: "What does the field-study evidence suggest performers mostly feel during a show?",
            options: [
              "The emotions of performing",
              "The character's emotions",
              "Nothing at all",
              "A drifting blend of both",
            ],
            correctIndex: 0,
            explanation:
              "Concentration, nerves, and the pleasure of it going well. The character's emotion is constructed and delivered rather than privately suffered (Konijn, 2000).",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "What is the honest limit of the fMRI study of acting?",
            options: [
              "Fifteen actors answered questions in a scanner, rather than performing scenes",
              "It was never peer reviewed, so its findings remain provisional",
              "It studied only stage performers, so it says nothing about screen work",
              "It measured blood flow rather than activity, so the interpretation is disputed",
            ],
            correctIndex: 0,
            explanation:
              "It is a real finding about one task, not an explanation of acting, and the sample size is taught alongside it so it cannot be overclaimed (Brown et al., 2019).",
            sourceLessonSlug: "what-actors-actually-feel",
          },
          {
            prompt: "Why are the boundaries between adjacent shot sizes fuzzy?",
            options: [
              "They are not standardized",
              "Sensors changed the field of view",
              "Performers move within a take",
              "Focus falls off gradually",
            ],
            correctIndex: 0,
            explanation:
              "Reference texts define them differently, and so do crews, countries, and departments on the same production, which is why confirming beats inferring (Bowen, 2017).",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What is a master shot?",
            options: [
              "A continuous take of the whole scene",
              "The take chosen for the final cut",
              "The widest lens, used to set geography",
              "The highest-resolution copy of the footage",
            ],
            correctIndex: 0,
            explanation:
              "Usually wide, and it gives the editor a spine that the tighter coverage has to match.",
            sourceLessonSlug: "shot-size-vocabulary",
          },
          {
            prompt: "What does \"smaller for the close-up\" actually mean?",
            options: [
              "Less physical amplitude, not less commitment",
              "Less energy overall, as screen work is restrained",
              "Fewer choices, since a tight frame shows less",
              "A quieter delivery for a closer microphone",
            ],
            correctIndex: 0,
            explanation:
              "The frame magnifies you, so the same intention needs a smaller physical range. Intention and specificity do not shrink (Tucker, 2023).",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "Which scale error does the course call more often fatal?",
            options: [
              "Playing too small in a wide shot",
              "Playing too big in a close-up",
              "Matching takes too precisely",
              "Speaking softly to a distant mic",
            ],
            correctIndex: 0,
            explanation:
              "Too big reads as insincere. Too small in a wide frame leaves an audience watching a whole body doing nothing, with no scene at all.",
            sourceLessonSlug: "scale-and-the-shot",
          },
          {
            prompt: "State the honest version of the Kuleshov effect.",
            options: [
              "The footage is lost, but a 2016 replication found viewers do read a face by its context",
              "It was proved by the original footage and confirmed by every study since then",
              "It has been refuted, and viewers read a neutral face as neutral regardless of context",
              "It applies only to viewers who have been trained in film editing techniques",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-six participants across six emotional conditions chose the matching category more often than the alternatives, and earlier replications had conflicted (Barratt et al., 2016).",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "What does the Kuleshov evidence NOT license a performer to do?",
            options: [
              "Do nothing and rely on the editor",
              "Receive without displaying a reaction",
              "Trust surrounding shots to shape the read",
              "Listen without labeling the emotion",
            ],
            correctIndex: 0,
            explanation:
              "The effect describes how audiences interpret an ambiguous face. Real listening produces gaze and breath changes that waiting for a cue does not.",
            sourceLessonSlug: "the-face-alone",
          },
          {
            prompt: "Which difference between takes will stop an editor cutting?",
            options: [
              "A prop in the wrong hand",
              "A stronger emotional level",
              "A longer pause before a line",
              "A change in breathing",
            ],
            correctIndex: 0,
            explanation:
              "Physical mismatches break the join. Directors cut between takes of different intensity all the time and cannot cut where an object moved.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "How do you hit a mark without looking at it?",
            options: [
              "Peripheral vision and step counting",
              "A partner's signal on arrival",
              "Slowing until focus confirms it",
              "Memorizing the floor pattern",
            ],
            correctIndex: 0,
            explanation:
              "Use the furniture at the edge of your sightline. Looking down is visible on camera and reads as technique showing.",
            sourceLessonSlug: "the-body-in-frame",
          },
          {
            prompt: "Why can drifting your eyes to where your partner really is ruin a shot?",
            options: [
              "The eyeline is placed for the cut, not for the room",
              "The focus is set on the original position",
              "It breaks the frame line, and outside the frame nothing happened",
              "It changes the light on the face, which cannot be matched",
            ],
            correctIndex: 0,
            explanation:
              "If the placement is ignored, the two shots will not read as two people looking at each other, which is the whole job an eyeline does.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "In Murch's ordering of what a cut should serve, what comes first and what comes last?",
            options: [
              "Emotion first, spatial continuity last",
              "Story first, emotion last",
              "Rhythm first, eye trace last",
              "Spatial continuity first, emotion last",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an alive but slightly mismatched take beats a perfectly matched dead one. Match carefully without letting matching become the performance.",
            sourceLessonSlug: "eyeline-lens-and-the-cut",
          },
          {
            prompt: "What is the failure mode of enlarging a performance for the stage?",
            options: [
              "Size without specificity",
              "Vocal injury from nightly scale",
              "Losing a partner's timing",
              "Being unable to scale back down",
            ],
            correctIndex: 0,
            explanation:
              "Everything loud and nothing happening. The want, obstacle, and tactics stay exactly as precise while only the physical and vocal scale rises.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "What does stage work give a performer that screen work cannot?",
            options: [
              "Repetition with an audience, night after night",
              "Freedom from all technical constraint",
              "Certainty about the result, with no edit",
              "A longer rehearsal to test every choice",
            ],
            correctIndex: 0,
            explanation:
              "It is the closest thing in the profession to a feedback loop running every day, which makes it a serious argument for theater even when screen work is the goal.",
            sourceLessonSlug: "acting-on-stage",
          },
          {
            prompt: "Why does out-of-order shooting demand a written map of the story?",
            options: [
              "Nothing in the day reminds you where you are in the arc",
              "Directors require one before a hard scene is scheduled",
              "Continuity uses it to check physical choices",
              "It is the only way to learn a script fast",
            ],
            correctIndex: 0,
            explanation:
              "Scenes are grouped by location, so you may play the end of a relationship on day one and its beginning in week five, in different weather.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "What is a setup, and why does it make screen work a repeatability problem?",
            options: [
              "One camera position; a scene needs several, so the passage repeats for hours",
              "One take of a scene; several are recorded so the editor has a choice",
              "One shooting day's schedule, which fixes how many scenes must be completed",
              "One arrangement of the set, which is rebuilt for each new scene",
            ],
            correctIndex: 0,
            explanation:
              "Each is a relight and a reposition, so the physical shape has to repeat while the pursuit inside it stays live.",
            sourceLessonSlug: "acting-for-film",
          },
          {
            prompt: "Why does television reward preparation that remains a decision?",
            options: [
              "A decision can be changed in one breath",
              "Decisions can be shown to a director early",
              "Fixed performances are harder to memorize",
              "Episodic directors prefer unprepared actors",
            ],
            correctIndex: 0,
            explanation:
              "A hardened prepared performance cannot adjust, so a director asking for something different gets the same thing again slightly louder.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "What makes multi-camera work sit between theater and film?",
            options: [
              "Several cameras on an open set, a week of rehearsal, often a live audience",
              "A single camera shooting out of order, but with rehearsal time built in",
              "A live audience watching a performance that is nevertheless edited afterward",
              "A stage set used for filming, with the audience watching on monitors",
            ],
            correctIndex: 0,
            explanation:
              "The scene is played continuously, timed to real laughter, with the performer staying open to the camera side of the set.",
            sourceLessonSlug: "acting-for-television",
          },
          {
            prompt: "Why is paraphrasing a line in a commercial a different kind of error than in a drama?",
            options: [
              "The wording has usually passed legal review",
              "Commercial writers are paid by the word",
              "The copy is timed, so extra words overrun",
              "Clients notice any deviation on the day",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing a claim is a compliance problem rather than a creative choice, which is why the awkward line gets said as written.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "Notes arrive from the client, the agency, and the director, and they contradict each other. What do you do?",
            options: [
              "Execute the last one, pleasantly",
              "Ask them to agree before the next take",
              "Blend all three into one reading",
              "Follow the director, who outranks them",
            ],
            correctIndex: 0,
            explanation:
              "Resolving the disagreement is not the performer's job, and arguing about consistency costs time a shoot does not have.",
            sourceLessonSlug: "commercials-and-branded-work",
          },
          {
            prompt: "What viewing condition should short-form vertical work be planned for?",
            options: [
              "Sound off",
              "Full attention",
              "Headphones",
              "Repeat viewing",
            ],
            correctIndex: 0,
            explanation:
              "Something has to be legible without audio, which is why captions are standard and why watching your own work muted is the free diagnostic.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Why does a vertical frame push a performance toward close-up technique?",
            options: [
              "It is narrow, holds one person, and is watched at arm's length",
              "It is taller, so more of the body shows and gesture grows",
              "Phone cameras use wide lenses that exaggerate what is near",
              "Short-form editing cuts faster, so reactions must be bigger to register",
            ],
            correctIndex: 0,
            explanation:
              "The effective intimacy is higher than the nominal shot size, so a vertical medium shot is treated as though it were a close-up.",
            sourceLessonSlug: "vertical-mobile-and-short-form",
          },
          {
            prompt: "Why is \"talk to one person\" the standard fix for bad narration?",
            options: [
              "Addressing an audience produces announcing",
              "One listener is easier to picture",
              "It slows the delivery, the common fault",
              "It keeps the eyeline consistent on camera",
            ],
            correctIndex: 0,
            explanation:
              "One specific person produces speech, and speech is what the listener is being promised. The lesson calls it the oldest note in the trade.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What does \"emphasis is meaning\" ask a narrator to do?",
            options: [
              "Land on the words carrying the new information",
              "Raise the volume on the key sentence",
              "Stress every noun, since nouns carry content",
              "Keep stress even, so the listener decides",
            ],
            correctIndex: 0,
            explanation:
              "Any sentence has one or two words carrying its news, and even stress across everything reads as nobody talking to nobody.",
            sourceLessonSlug: "narration-and-direct-address",
          },
          {
            prompt: "What is the operative question in a heavy dramatic scene?",
            options: [
              "What is this person doing to stay functional?",
              "How much does this hurt, compared with the worst?",
              "Which earlier scene does this one pay off?",
              "How long can the silence run?",
            ],
            correctIndex: 0,
            explanation:
              "And where that fails. The visible effort of holding together is what an audience reads as grief, so leading with collapse skips it.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "What does it mean to play the ending?",
            options: [
              "Performing knowledge the character does not have yet",
              "Rushing to the last beat before the earlier ones have landed",
              "Deciding the scene's conclusion before rehearsing its middle",
              "Weighting the final line more heavily than the structure supports",
            ],
            correctIndex: 0,
            explanation:
              "A character who does not yet know the marriage is over cannot be mourning it. It is a direct product of having read the whole script.",
            sourceLessonSlug: "playing-drama",
          },
          {
            prompt: "Why does signaling amusement kill a comic scene?",
            options: [
              "It closes the gap the laugh depends on",
              "It breaks the rhythm the writer built",
              "It distracts the other performer",
              "It reads as a technical fault to an editor",
            ],
            correctIndex: 0,
            explanation:
              "The audience laughs at the distance between how seriously the character takes the situation and how absurd it is.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What is a status flip, and why does it matter?",
            options: [
              "A mid-scene reversal of standing, and it drives much written comedy",
              "A moment when a character lowers their status deliberately to gain sympathy",
              "The transfer of audience sympathy from one character to another",
              "An exchange of positions on stage that signals a change of power",
            ],
            correctIndex: 0,
            explanation:
              "Reading a comic scene for its status moves usually tells you more about how to play it than reading it for jokes does.",
            sourceLessonSlug: "playing-comedy",
          },
          {
            prompt: "What separates trained stillness from untrained stillness on camera?",
            options: [
              "Available weight rather than frozen tension",
              "Duration, since trained performers hold longer",
              "Planning, since trained stillness is rehearsed",
              "Complete absence of movement",
            ],
            correctIndex: 0,
            explanation:
              "Untrained stillness reads as anxiety whatever the scene is, because it is tension. The difference is visible.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "Where does character live in a movement?",
            options: [
              "In the how: speed, weight, directness, continuity",
              "In the what, since the chosen action defines the character",
              "In the timing relative to the line",
              "In the part of the body that finishes the movement",
            ],
            correctIndex: 0,
            explanation:
              "Reaching for a glass is the what. Running one action through combinations of the how produces recognizably different people with no biographical decision.",
            sourceLessonSlug: "physical-acting",
          },
          {
            prompt: "What are the two most common fatal technical flaws in a self-tape?",
            options: [
              "Bad sound and being backlit",
              "Loose framing and a busy background",
              "Camera shake and drifting focus",
              "Misnamed files and an over-long slate",
            ],
            correctIndex: 0,
            explanation:
              "Both are avoidable at no cost: record in a quieter, softer room, and turn so the window is in front of you rather than behind.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "Why does this course quote no page limits or notice periods for union self-tapes?",
            options: [
              "Those terms are renegotiated each bargaining cycle",
              "They are confidential and disclosed only to members",
              "They vary by production, so no general figure exists",
              "They differ by country, and the audience is global",
            ],
            correctIndex: 0,
            explanation:
              "A quoted number ships with an expiry date, so the lesson names what the protections cover and sends the learner to SAG-AFTRA's own page.",
            sourceLessonSlug: "the-self-tape",
          },
          {
            prompt: "What does the evidence say makes self-assessment more accurate, and how does the protocol use it?",
            options: [
              "Specific, objective judgments, so the protocol asks observable yes-or-no questions",
              "Greater experience, so the protocol should only be used after a year of work",
              "Delay before judging, so the protocol requires a week between takes",
              "Comparison against others, so the protocol includes a professional benchmark",
            ],
            correctIndex: 0,
            explanation:
              "The mean correlation between self-rated ability and performance was .29, and it was higher when the judgment was domain-specific and the task objective (Zell & Krizan, 2014).",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "Why must the four-pass checklist answers be written down before re-watching?",
            options: [
              "Memory reshapes itself to the outcome",
              "A teacher can check written answers later",
              "Writing slows you down and sharpens attention",
              "Writing turns an observation into a decision",
            ],
            correctIndex: 0,
            explanation:
              "Writing first fixes the observation before the conclusion has a chance to rewrite it, which is what keeps a solo review honest.",
            sourceLessonSlug: "watching-yourself-honestly",
          },
          {
            prompt: "What did the 2019 replication of the deliberate practice study find?",
            options: [
              "The best violinists had accumulated less practice than the good ones",
              "The original result held, with an even larger effect than first reported",
              "Practice had no measurable relationship with skill at any level",
              "Teacher-designed practice was substantially better than self-directed practice",
            ],
            correctIndex: 0,
            explanation:
              "Variance explained fell from 48 percent to 26 percent, and teacher-designed practice showed no advantage over self-directed practice (Macnamara & Maitra, 2019).",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "Which of these cannot be practiced alone?",
            options: [
              "Playing off another person",
              "Cold reading unfamiliar material",
              "Building a neutral baseline alone",
              "Recording a clean self-tape",
            ],
            correctIndex: 0,
            explanation:
              "It is a real-time skill requiring another person, alongside timing to an audience and diagnosing what you cannot yet perceive.",
            sourceLessonSlug: "practicing-without-a-coach",
          },
          {
            prompt: "What is the tell that a representation offer is not legitimate?",
            options: [
              "It asks for money up front",
              "It approaches you first",
              "It represents many performers",
              "It signs you without seeing your work",
            ],
            correctIndex: 0,
            explanation:
              "Or requires you to buy its photography or classes. Legitimate representation is paid from what you earn, so its incentive is that you work.",
            sourceLessonSlug: "the-business-honestly",
          },
          {
            prompt: "What does the course say it has NOT done for you?",
            options: [
              "Made you an actor, introduced you to anyone, or put you in a room",
              "Taught you to read a scene, which requires a teacher's correction",
              "Prepared you technically, since equipment standards change too fast",
              "Explained the frame, which cannot be learned without a camera present",
            ],
            correctIndex: 0,
            explanation:
              "It closes the way it opened, by naming the boundary. Those things remain yours to go and get.",
            sourceLessonSlug: "the-business-honestly",
          },
        ],
      },
    },
  ],
};
