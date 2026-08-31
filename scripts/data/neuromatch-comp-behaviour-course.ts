import type { AuthoredCourse } from "./authored-course";

// "Computational Behaviour Foundations" (Science & Math). PRIVATE and free: BAM's own study course
// (plans/74), owner-only until a standards pass and citation staging.
//
// THE CONSTRAINT THAT SHAPED THIS FILE. Neuromatch's own Computational Behaviour course
// LAUNCHES IN JULY 2027 and has no published curriculum: neuromatch.io/courses lists its
// prerequisites as TBD. So unlike its three siblings, this course could NOT be written as a
// companion to a published coursebook, because there is not one. It is built from the general
// literature instead, and lesson 1 says so in plain words rather than implying a correspondence
// that does not exist. When the syllabus publishes, this course should be re-checked against it.
//
// House style follows deaf-america-course.ts: `section` on every lesson, flush-left single-line
// `:::reveal q ||| a`, a `## Vocabulary` block, APA 7 `## Sources`, a quiz per teaching section
// serving 5 plus a final serving 10, every question carrying `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific.
export const NEUROMATCH_COMP_BEHAVIOUR_COURSE: AuthoredCourse = {
  title: "Computational Behaviour Foundations",
  description:
    "Behaviour used to be measured by a person with a stopwatch and a checklist, deciding in the moment what counted as a rear or a groom. This course is about what changed when that job was handed to cameras and models: markerless pose estimation that tracks body parts without touching the animal, and unsupervised methods that propose the behavioural units themselves instead of scoring the ones a human wrote down in advance. It is a FOUNDATIONS course, and it is honest about one thing up front. Neuromatch's own Computational Behaviour course does not launch until July 2027 and has published no curriculum, so unlike the other courses in this private set this one is not a companion to anything: it is built from the general literature, and it will need re-checking against the official syllabus when that appears. What it teaches is the vocabulary and the judgement, including the part practitioners argue about, which is whether an unsupervised model that carves behaviour into modules has discovered something about the animal or something about the algorithm.",
  lessons: [
    {
      slug: "what-computational-behaviour-is",
      title: "1 \u00b7 What computational behaviour is, and what does not exist yet",
      section: "Section 1 · What this is, and what does not exist yet",
      body: `Two things need saying before the subject starts, and the second one is unusual.

**What the field is.** Computational behaviour is the quantitative measurement and modelling of what animals, including people, actually do. It sits between ethology, which asks what behaviour is for, and machine learning, which supplies the tools. Its recent history is a shift in who decides what counts as a behaviour: for most of the twentieth century a trained observer watched and scored against a checklist they had written in advance, and now a model can propose the categories itself from the movement data.

**What does not exist yet, and why this course says so.** Neuromatch's own Computational Behaviour course **launches in July 2027**, and its prerequisites are published as TBD. There is no coursebook. The other courses in this private set are companions to published material; **this one cannot be, and pretending otherwise would be the exact failure this catalog exists to avoid.** It is built from the general literature. When the syllabus appears, this course should be re-checked against it, and the parts that do not match should change.

**Why measurement is the whole problem.** A human scorer is not a neutral instrument. They decide, before the experiment, which behaviours are on the list; they cannot resolve events shorter than their reaction time; they get tired; and two scorers disagree in ways that are hard to audit after the fact. Every one of those is a limit on what can be discovered, because **a behaviour that is not on the list cannot be found in the data.**

**And the thing to hold onto.** Automating the measurement does not remove the judgement, it moves it. Someone still chooses which body parts to track, at what frame rate, in which lighting, and which model to fit. The choices are now in code, which makes them explicit and reproducible, and also makes them easy to inherit without examining.

:::reveal Why does this course state that Neuromatch's Computational Behaviour course has no published curriculum? ||| Because that course launches in July 2027 with prerequisites listed as TBD, so unlike its siblings this one is not a companion to a published coursebook. It is built from the general literature and should be re-checked when the syllabus appears.

:::reveal What is the central limitation of scoring behaviour by hand from a checklist? ||| The list is written in advance, so a behaviour that is not on it cannot be found in the data, and the resolution is bounded by human reaction time.

## Vocabulary
- **Ethology**: the study of behaviour, classically concerned with what a behaviour is for and how it develops.
- **Scoring**: assigning observed behaviour to predefined categories, historically by a trained human observer.
- **Markerless**: measuring the body without attaching anything to it, as opposed to reflective markers or implanted sensors.
- **Foundations course**: one that teaches the vocabulary and judgement needed to follow the primary material, not a replacement for it.

## Sources
Neuromatch. (n.d.). *Courses*. https://neuromatch.io/courses/`,
    },
    {
      slug: "why-automate-measurement",
      title: "2 \u00b7 What automation buys, and what it costs",
      section: "Section 1 · What this is, and what does not exist yet",
      body: `The case for automating behavioural measurement is usually made as speed. Speed is the least interesting part.

**Resolution.** A human scorer works at roughly the pace of conscious attention. A camera at sixty or a hundred frames a second, with a model reading each frame, resolves events far shorter than that. Structure that is invisible to a person watching in real time becomes measurable, and Section 3 is about what was found there.

**Consistency, and its cost.** A model applies the same rule to frame one and frame ten million. That is a real gain over a tiring observer, but it is consistency, not correctness: **a model that is systematically wrong is wrong in exactly the same way every time**, and a consistent error is harder to notice than a noisy one, because it never looks like disagreement.

**Scale changes which questions are askable.** When scoring an hour of video costs an hour of a trained person's time, experiments are designed around that budget. When it costs a minute of compute, the constraint moves elsewhere, and questions that need thousands of hours become possible.

**What automation does NOT buy.** It does not tell you what a behaviour is for. It does not decide which body parts matter. It does not know that the animal is a different animal today. And it does not make a category real: a model can split movement into units very confidently and still be describing its own inductive bias, which is the argument Section 3 ends on.

**A practical note on generalisation.** A model trained on one strain, in one arena, under one light, is a model of that setup. Moving it to a new setup is a research question, not a configuration change, and treating it as a configuration change is one of the commonest ways published results fail to reproduce.

:::reveal Why is a model's consistency not the same as its correctness? ||| Because a systematically wrong model is wrong identically every time, and a consistent error never looks like disagreement, so it is harder to notice than a noisy one.

:::reveal What changes about experimental design when scoring becomes cheap? ||| The budget stops being the limit, so questions that need thousands of hours of behaviour become askable, and the binding constraint moves elsewhere.

## Vocabulary
- **Frame rate**: how many images per second are captured, which bounds the shortest event that can be resolved.
- **Systematic error**: a bias that repeats identically, as opposed to noise that averages out.
- **Inductive bias**: the assumptions a model brings, which shape what structure it can find.
- **Generalisation**: whether a model trained in one setting works in another, which is an empirical question and not a setting.

## Sources
Mathis, A., Mamidanna, P., Cury, K. M., Abe, T., Murthy, V. N., Mathis, M. W., & Bethge, M. (2018). DeepLabCut: Markerless pose estimation of user-defined body parts with deep learning. *Nature Neuroscience, 21*(9), 1281-1289. https://doi.org/10.1038/s41593-018-0209-y`,
    },
    {
      slug: "pose-estimation",
      title: "3 \u00b7 Pose estimation, and what a keypoint is",
      section: "Section 2 · Measuring behaviour",
      body: `The workhorse measurement in modern behavioural work is **pose**: where the parts of a body are, frame by frame.

**What a keypoint is.** A keypoint is a labelled location on the body, chosen by the experimenter: nose, left ear, tail base. A pose is the set of keypoints for one frame. A trajectory is a keypoint through time. **The choice of keypoints is a scientific decision made before any model runs**, and it bounds everything downstream: a behaviour that does not change the tracked points is invisible no matter how good the tracker is.

**Markerless, and why it matters.** Older motion capture attached reflective markers or sensors. That works, and it changes the animal: markers can be groomed at, they constrain movement, and attaching them requires handling. **Markerless** estimation reads pose from ordinary video, so the measurement does not intervene in the behaviour being measured.

**How the deep-learning approach works, in one paragraph.** DeepLabCut, introduced by Mathis and colleagues in 2018, applies transfer learning: a network already trained on a large general image dataset is fine-tuned on a small number of hand-labelled frames from the specific setup. The reported result that made it practical is that human-level accuracy is reachable from **a few hundred labelled frames**, rather than the tens of thousands a from-scratch model would need. That is what put pose tracking within reach of an ordinary lab.

**The labour did not disappear, it changed shape.** Someone still hand-labels those frames, and the labels define what the network learns. Mislabel consistently and the network learns your mistake faithfully.

**Errors have structure worth knowing.** Occlusion, when a body part is hidden, produces confident nonsense rather than an obvious gap. Left and right limbs get swapped. A tracker can jitter between two plausible positions. **None of these announce themselves in a summary statistic**, which is why looking at the tracked video, not only the numbers, remains part of the method.

:::reveal What does the choice of keypoints determine? ||| Everything downstream. A behaviour that does not change the tracked points cannot be detected, however good the tracker is.

:::reveal Why does markerless estimation matter beyond convenience? ||| Because markers and sensors change the animal and the behaviour, so a measurement that reads ordinary video does not intervene in what it is measuring.

:::reveal What made transfer learning practical for pose tracking in an ordinary lab? ||| Fine-tuning a network already trained on a large general image dataset reaches human-level accuracy from a few hundred labelled frames instead of tens of thousands.

## Vocabulary
- **Keypoint**: a labelled body location tracked frame by frame, chosen by the experimenter.
- **Pose**: the set of keypoints for a single frame.
- **Markerless**: estimating pose from ordinary video, without attaching anything to the body.
- **Transfer learning**: fine-tuning a network trained on a large general dataset for a specific task with far less data.
- **Occlusion**: a body part hidden from the camera, which typically produces confident wrong estimates rather than missing ones.

## Sources
Mathis, A., Mamidanna, P., Cury, K. M., Abe, T., Murthy, V. N., Mathis, M. W., & Bethge, M. (2018). DeepLabCut: Markerless pose estimation of user-defined body parts with deep learning. *Nature Neuroscience, 21*(9), 1281-1289. https://doi.org/10.1038/s41593-018-0209-y
Nath, T., Mathis, A., Chen, A. C., Patel, A., Bethge, M., & Mathis, M. W. (2019). Using DeepLabCut for 3D markerless pose estimation across species and behaviors. *Nature Protocols, 14*, 2152-2176. https://doi.org/10.1038/s41596-019-0176-0`,
    },
    {
      slug: "from-pose-to-behaviour",
      title: "4 \u00b7 From pose to behaviour, which is not the same step",
      section: "Section 2 · Measuring behaviour",
      body: `Knowing where every body part is does not tell you what the animal is doing. That gap is where the interesting decisions live.

**Pose is geometry; behaviour is interpretation.** A pose sequence is a set of coordinates over time. Calling a stretch of it "grooming" is a claim, and it requires either a human definition or a model that proposes one. Section 3 is about the second option; this lesson is about what the step involves either way.

**Features, and why they are chosen not found.** Raw coordinates are rarely used directly. Practitioners compute features: distances between keypoints, angles, speeds, accelerations, and how these change over a short window. **Every feature is a hypothesis about what matters.** Speed of the nose relative to the body captures something a raw coordinate does not, and it discards something else.

**Egocentric versus allocentric.** Coordinates in the arena's frame mix up where the animal IS with what it is DOING: the same groom in two corners looks like two different things. Re-expressing pose relative to the animal's own body, its egocentric frame, removes position and heading so that posture can be compared across the arena. That transformation is routine, and it is also a choice that throws away information which may matter if location is part of the question.

**Timescale is a decision.** A behaviour is defined over a window, and the window length changes what can be seen: too short and a groom is a sequence of unrelated jerks, too long and it merges with what surrounds it. There is no neutral choice.

**Supervised and unsupervised, and what each assumes.** A supervised classifier learns human-defined categories from human-labelled examples, so it can only reproduce the ethogram it was given, faithfully and at scale. An unsupervised method proposes categories from the structure of the data, so it can surface something nobody thought to name, and it can equally surface an artefact of the method. **Neither is the honest default; they answer different questions.**

:::reveal Why is re-expressing pose in the animal's own frame routine, and what does it cost? ||| It removes position and heading so the same posture in different parts of the arena compares as the same thing. It costs the location information, which matters if where the animal is forms part of the question.

:::reveal What is the essential difference between a supervised and an unsupervised approach to behaviour? ||| A supervised classifier reproduces the human ethogram it was trained on, faithfully and at scale. An unsupervised method proposes its own categories, which can reveal something unnamed or can reflect the method itself.

## Vocabulary
- **Ethogram**: a catalogue of the behaviours a study recognises, historically written by hand in advance.
- **Feature**: a quantity computed from pose, such as a distance, angle or speed, chosen because it is thought to matter.
- **Egocentric frame**: coordinates expressed relative to the animal's own body and heading.
- **Allocentric frame**: coordinates expressed relative to the arena.
- **Supervised / unsupervised**: learning human-given categories versus proposing categories from the data.

## Sources
Wiltschko, A. B., Johnson, M. J., Iurilli, G., Peterson, R. E., Katon, J. M., Pashkovski, S. L., Abraira, V. E., Adams, R. P., & Datta, S. R. (2015). Mapping sub-second structure in mouse behavior. *Neuron, 88*(6), 1121-1135. https://doi.org/10.1016/j.neuron.2015.11.031`,
    },
    {
      slug: "behavioural-syllables",
      title: "5 \u00b7 Behavioural syllables, and the sub-second result",
      section: "Section 3 · Finding structure in behaviour",
      body: `The claim that made unsupervised behaviour analysis interesting is that behaviour has structure below the timescale a person can see.

**The finding.** Wiltschko and colleagues, in 2015, used depth imaging of freely behaving mice and reported that three-dimensional pose dynamics are structured at the **sub-second** timescale: behaviour decomposes into brief, reused, stereotyped modules, with defined probabilities of following one another. They called the modules **behavioural syllables**, and the method **Motion Sequencing**, or MoSeq.

**Why the linguistic metaphor is doing work.** A syllable in this sense is a short unit that recurs, is recognisably the same each time, and combines with others in patterned rather than arbitrary sequences. The claim is not that mouse behaviour is a language. The claim is that it has the *shape* of a sequence built from a limited set of reused parts, and that this shape can be recovered from movement data without anyone naming the parts in advance.

**What "unsupervised" bought here.** Nobody wrote down the list of syllables first. The model proposed the segmentation, which means it could surface units that no ethogram contained. That is precisely the limitation of hand scoring, from lesson 1, being lifted.

**The transition structure is half the result.** Knowing the inventory of modules is less interesting than knowing which follows which and with what probability. Behaviour becomes a sequence with statistics, and two conditions can then differ not in which modules exist but in how they are strung together. **A drug or a lesion can leave the vocabulary intact and change the grammar**, and that difference is invisible to a method that only counts occurrences.

:::reveal What did the 2015 sub-second result actually report? ||| That three-dimensional pose dynamics in freely behaving mice are structured below one second, decomposing into brief, reused, stereotyped modules with defined transition probabilities between them.

:::reveal Why does the transition structure matter as much as the inventory of modules? ||| Because a manipulation can leave the set of modules unchanged and alter only the probabilities of moving between them, which a method that merely counts occurrences cannot see.

## Vocabulary
- **Behavioural syllable**: a brief, reused, stereotyped module of movement identified from pose dynamics.
- **Motion Sequencing (MoSeq)**: the unsupervised approach introduced with the 2015 sub-second result.
- **Transition probability**: the chance that one module follows another, which carries as much information as the inventory.
- **Stereotyped**: recognisably similar on each recurrence, which is what allows a module to be counted at all.

## Sources
Wiltschko, A. B., Johnson, M. J., Iurilli, G., Peterson, R. E., Katon, J. M., Pashkovski, S. L., Abraira, V. E., Adams, R. P., & Datta, S. R. (2015). Mapping sub-second structure in mouse behavior. *Neuron, 88*(6), 1121-1135. https://doi.org/10.1016/j.neuron.2015.11.031`,
    },
    {
      slug: "is-the-structure-real",
      title: "6 \u00b7 Is the structure real, or is it the method?",
      section: "Section 3 · Finding structure in behaviour",
      body: `This is the argument the field actually has, and a foundations course that skipped it would be teaching a technique without teaching its limits.

**The problem, stated plainly.** An unsupervised method will return modules. It will return them whether or not the behaviour is genuinely modular, because segmenting a continuous signal into discrete units is what the method does. **So finding syllables is not by itself evidence that syllables exist**, and the confidence of a segmentation is not evidence either.

**What would count as evidence.** The useful question is not "did the model find units" but "do the units do work". Units earn their reality by predicting something they were not fitted to: reproducing across animals, across laboratories, and across recording setups; lining up with an independent measurement such as neural activity; responding coherently to a manipulation; or surviving a change in the model's own parameters. **A category that dissolves when you change the window length was a property of the window.**

**Both positions are held by serious people, and both are reasonable.** One view is that the modularity is a real feature of how movement is generated, and that recovering it without human labels is the point. The other is that continuous movement is being carved by a method that assumes discreteness, and that the modules are a useful description rather than a discovery about the animal. **This course does not adjudicate it.** It teaches you to notice which claim a paper is making, because papers frequently make the strong one while their evidence supports the weak one.

**The practical consequence for reading a result.** When a paper reports a number of behavioural modules, ask what fixed that number: the data, a hyperparameter, or a convention. Ask whether the same number appears in an independent dataset. Those two questions separate most of the strong claims from most of the supportable ones.

**And the honest position for a learner.** You do not have to resolve this to use the tools. You do have to know it is unresolved, because the difference between "the mouse has forty behavioural syllables" and "this model describes the data with forty modules" is the difference between a finding and a description.

:::reveal Why is finding modules not evidence that modules exist? ||| Because segmenting a continuous signal into discrete units is what the method does, so it returns modules regardless, and the model's confidence is not independent evidence either.

:::reveal What kinds of evidence would let a proposed behavioural unit earn its reality? ||| Predicting something it was not fitted to: reproducing across animals, laboratories and setups, aligning with an independent measurement such as neural activity, responding coherently to a manipulation, or surviving a change in the model's parameters.

:::reveal What two questions separate a strong claim from a supportable one when a paper reports a module count? ||| What fixed the number, the data or a hyperparameter or a convention; and whether the same number appears in an independent dataset.

## Vocabulary
- **Hyperparameter**: a value set by the practitioner rather than learned, which can silently determine how many modules a method returns.
- **Cross-validation of structure**: checking that a discovered segmentation holds on data it was not fitted to.
- **Description versus discovery**: whether a model summarises the data usefully or reveals a property of the animal.
- **Reproducibility across setups**: whether the same structure appears in another laboratory's recordings, which is the hardest and most informative test.

## Sources
Wiltschko, A. B., Johnson, M. J., Iurilli, G., Peterson, R. E., Katon, J. M., Pashkovski, S. L., Abraira, V. E., Adams, R. P., & Datta, S. R. (2015). Mapping sub-second structure in mouse behavior. *Neuron, 88*(6), 1121-1135. https://doi.org/10.1016/j.neuron.2015.11.031
Mathis, A., Mamidanna, P., Cury, K. M., Abe, T., Murthy, V. N., Mathis, M. W., & Bethge, M. (2018). DeepLabCut: Markerless pose estimation of user-defined body parts with deep learning. *Nature Neuroscience, 21*(9), 1281-1289. https://doi.org/10.1038/s41593-018-0209-y`,
    },
    {
      slug: "comp-behaviour-s1-quiz",
      title: "Section 1 quiz \u00b7 What this is, and what does not exist yet",
      section: "Section 1 · What this is, and what does not exist yet",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When does Neuromatch's own Computational Behaviour course launch?",
            options: [
              "July 2027",
              "July 2026, alongside Computational Neuroscience and Deep Learning",
              "It launched in 2007 with the first Neuromatch Academy",
              "It has no announced launch date at all",
            ],
            correctIndex: 0,
            explanation:
              "It launches in July 2027 with prerequisites published as TBD, which is why this course is built from the general literature rather than as a companion to a coursebook.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Why is this course not a companion to a published coursebook?",
            options: [
              "No curriculum has been published for it",
              "Its coursebook is paywalled rather than open",
              "Neuromatch withdrew the material after 2024",
              "The licence forbids adapting that particular course",
            ],
            correctIndex: 0,
            explanation:
              "Its three sibling courses do have coursebooks. This one does not, and saying so is preferable to implying a correspondence that does not exist.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What should happen to this course when the official syllabus appears?",
            options: [
              "It should be re-checked and changed where it does not match",
              "It should be deleted, since the official course supersedes it",
              "It should be published immediately as preparation material",
              "Nothing, because a foundations course is independent of the syllabus",
            ],
            correctIndex: 0,
            explanation:
              "The file header and lesson 1 both say so. A foundations course written before its subject publishes has a standing obligation to be re-checked.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What is the central limitation of hand-scoring behaviour from a checklist?",
            options: [
              "A behaviour not on the list cannot be found",
              "Human scorers are slower than cameras",
              "Checklists cannot record more than one animal",
              "Scoring requires the animal to be restrained",
            ],
            correctIndex: 0,
            explanation:
              "The list is written in advance, so it bounds what can be discovered, and the resolution is additionally bounded by human reaction time.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Where does computational behaviour sit between disciplines?",
            options: [
              "Between ethology and machine learning",
              "Between neuroscience and psychiatry",
              "Between genetics and evolutionary biology",
              "Between robotics and control theory",
            ],
            correctIndex: 0,
            explanation:
              "Ethology asks what behaviour is for; machine learning supplies the measurement tools.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What has recently shifted in the field?",
            options: [
              "Who decides what counts as a behaviour",
              "Which species can be studied in a laboratory",
              "Whether behaviour can be recorded on video at all",
              "The legal requirements for animal research",
            ],
            correctIndex: 0,
            explanation:
              "For most of the twentieth century a human wrote the categories in advance. A model can now propose them from the movement data.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Does automating measurement remove the experimenter's judgement?",
            options: [
              "No, it moves it into code",
              "Yes, which is the main benefit",
              "Only for unsupervised methods",
              "Only when the frame rate is high enough",
            ],
            correctIndex: 0,
            explanation:
              "Someone still chooses body parts, frame rate, lighting and model. In code those choices are explicit and reproducible, and also easy to inherit unexamined.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What bounds the shortest behavioural event a human scorer can resolve?",
            options: [
              "Their reaction time",
              "The video's storage format",
              "The number of categories on the checklist",
              "The size of the arena",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a camera at sixty or a hundred frames a second can resolve structure that is invisible to a person watching in real time.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Why is a model's consistency not the same as correctness?",
            options: [
              "A systematic error repeats identically and is hard to notice",
              "Models are less consistent than trained humans",
              "Consistency only applies to supervised methods",
              "Correctness cannot be measured in behaviour work",
            ],
            correctIndex: 0,
            explanation:
              "A consistent error never looks like disagreement, which makes it harder to catch than noise that averages out.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What changes about experimental design when scoring becomes cheap?",
            options: [
              "Questions needing thousands of hours become askable",
              "Experiments must use fewer animals",
              "Video quality becomes the limiting factor",
              "Human scorers are still required for validation",
            ],
            correctIndex: 0,
            explanation:
              "When scoring cost an hour of trained time per hour of video, experiments were designed around that budget. The binding constraint moves elsewhere.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Which of these does automation NOT provide?",
            options: [
              "What a behaviour is for",
              "Consistent application of the same rule",
              "Resolution below human reaction time",
              "Scale across many hours of recording",
            ],
            correctIndex: 0,
            explanation:
              "Purpose is an ethological question. A model can measure movement without knowing what any of it accomplishes.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "A model trained on one strain in one arena under one light is best described as what?",
            options: [
              "A model of that setup",
              "A general model of the species",
              "Invalid until externally validated",
              "Equivalent to a human scorer",
            ],
            correctIndex: 0,
            explanation:
              "Moving it elsewhere is a research question, not a configuration change, and treating it as one is a common route to irreproducible results.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is a systematic error?",
            options: [
              "A bias that repeats identically",
              "Random variation that averages out",
              "An error introduced by hardware failure",
              "A mistake in the experimental hypothesis",
            ],
            correctIndex: 0,
            explanation:
              "Its repeatability is exactly what makes it dangerous: it never presents as disagreement.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is the least interesting argument for automating behavioural measurement?",
            options: [
              "Speed",
              "Resolution below human perception",
              "Consistency across millions of frames",
              "Scale that changes which questions are askable",
            ],
            correctIndex: 0,
            explanation:
              "Speed is the obvious case and the weakest one. The others change what can be discovered rather than how fast.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What does 'markerless' mean in this context?",
            options: [
              "Measuring the body without attaching anything to it",
              "Recording without timestamps on the video",
              "Analysis that requires no human labels",
              "Tracking that does not identify individual animals",
            ],
            correctIndex: 0,
            explanation:
              "Markers and sensors change the animal: they can be groomed at, they constrain movement, and attaching them requires handling.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What are Neuromatch's published prerequisites for Computational Behaviour?",
            options: [
              "TBD",
              "The Computational Neuroscience and Deep Learning courses",
              "Python and linear algebra only",
              "No prerequisites are permitted for a launch course",
            ],
            correctIndex: 0,
            explanation:
              "Listed as TBD on neuromatch.io/courses, which is part of why no companion course can be written against it yet.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Which three sibling courses DO have published coursebooks?",
            options: [
              "Computational Neuroscience, Deep Learning, Climate Tools",
              "Computational Behaviour, NeuroAI, Climate Tools",
              "Only Computational Neuroscience",
              "All four, including Computational Behaviour",
            ],
            correctIndex: 0,
            explanation:
              "Their coursebooks are at compneuro, deeplearning and comptools domains. Computational Behaviour has none.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What does ethology classically ask?",
            options: [
              "What a behaviour is for",
              "Which model best segments movement",
              "How many frames per second are needed",
              "Whether a category is statistically significant",
            ],
            correctIndex: 0,
            explanation:
              "Function and development are its questions. Machine learning supplies the measurement tools rather than the questions.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What is a foundations course, as this one defines itself?",
            options: [
              "Vocabulary and judgement for following primary material",
              "A complete replacement for the primary material",
              "A survey of every published method",
              "A preparation programme for an application",
            ],
            correctIndex: 0,
            explanation:
              "It says so in the description, and the distinction matters because the primary material here runs weeks full time.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Why can a tired observer's scoring be hard to audit later?",
            options: [
              "Two scorers disagree in ways not recorded in the data",
              "Scoring sheets are destroyed after publication",
              "Human scoring produces no timestamps",
              "Reaction time varies between species",
            ],
            correctIndex: 0,
            explanation:
              "The disagreement is in the judgement, not in a field you can go back and inspect.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Who decided what counted as a behaviour for most of the twentieth century?",
            options: [
              "A trained observer, in advance",
              "An unsupervised model",
              "The recording equipment",
              "A consensus of the field per species",
            ],
            correctIndex: 0,
            explanation:
              "They wrote the checklist before the experiment, which is what bounds discovery to what was already imagined.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What does the course say happens to judgement under automation?",
            options: [
              "It becomes explicit and reproducible, and easy to inherit unexamined",
              "It is eliminated by the model",
              "It transfers to the reviewer",
              "It is deferred to publication",
            ],
            correctIndex: 0,
            explanation:
              "Choices encoded in code are visible, which is a gain, and are also easy to copy from one project to the next without re-examining.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What is the relationship between this course and the official syllabus?",
            options: [
              "It predates it and carries an obligation to be re-checked",
              "It is derived from a draft of it",
              "It is unrelated by design",
              "It supersedes it for private study",
            ],
            correctIndex: 0,
            explanation:
              "The header and lesson 1 both record the obligation, because a course written before its subject publishes can drift out of correspondence silently.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Is 'markerless' about labels or about hardware?",
            options: [
              "Hardware: nothing is attached to the body",
              "Labels: no human annotation is used",
              "Both equally",
              "Neither; it refers to the analysis stage",
            ],
            correctIndex: 0,
            explanation:
              "It contrasts with reflective markers and implanted sensors, not with supervised learning.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What does the course identify as the recent shift in the field?",
            options: [
              "Who decides what counts as a behaviour",
              "Which statistical tests are acceptable",
              "Whether animals may be studied unrestrained",
              "The move from film to digital video",
            ],
            correctIndex: 0,
            explanation:
              "From a human writing categories in advance to a model proposing them from movement data.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What happens to structure shorter than a human's reaction time under hand scoring?",
            options: [
              "It cannot be resolved",
              "It is recorded but unlabelled",
              "It is averaged into the nearest category",
              "It appears as scorer disagreement",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a camera reading every frame can measure things invisible to real-time observation.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Why is the checklist limitation more serious than the speed limitation?",
            options: [
              "It bounds what can be discovered at all",
              "It cannot be fixed by better equipment",
              "It produces systematically biased timings",
              "It varies between observers",
            ],
            correctIndex: 0,
            explanation:
              "Speed can be bought. A category that was never written down cannot be found however long you look.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What does a model apply identically to frame one and frame ten million?",
            options: [
              "The same rule",
              "The same confidence",
              "The same error rate",
              "The same category count",
            ],
            correctIndex: 0,
            explanation:
              "That consistency is a real gain over a tiring observer, and it is not correctness.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Which of these is a cost of automation named in the course?",
            options: [
              "Systematic errors are harder to notice than noisy ones",
              "Models require restraining the animal",
              "Automated methods cannot run in real time",
              "Video must be recorded in three dimensions",
            ],
            correctIndex: 0,
            explanation:
              "A consistent error never presents as disagreement, so nothing flags it.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is NOT bought by automating measurement?",
            options: [
              "Knowing what a behaviour is for",
              "Resolution below human perception",
              "Consistency across long recordings",
              "Scale across many hours",
            ],
            correctIndex: 0,
            explanation:
              "Function is an ethological question that no amount of measurement answers on its own.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Why does the course call generalisation a research question?",
            options: [
              "Because a model trained in one setup is a model of that setup",
              "Because models cannot be retrained",
              "Because setups are never documented",
              "Because frame rates differ between labs",
            ],
            correctIndex: 0,
            explanation:
              "Treating a move to a new strain, arena or light as a configuration change is a common route to results that do not reproduce.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What does 'noise averages out' contrast with?",
            options: [
              "A bias that repeats identically",
              "An error that grows over time",
              "A failure that stops the recording",
              "A category that was never defined",
            ],
            correctIndex: 0,
            explanation:
              "Random variation shows up as variance; a systematic bias does not.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What determines the shortest event a camera-based method can resolve?",
            options: [
              "The frame rate",
              "The number of keypoints",
              "The size of the training set",
              "The analysis window",
            ],
            correctIndex: 0,
            explanation:
              "Sixty or a hundred frames a second resolves structure a person watching in real time cannot.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is the argument the course calls least interesting?",
            options: [
              "Speed",
              "Resolution",
              "Consistency",
              "Scale",
            ],
            correctIndex: 0,
            explanation:
              "It is the obvious case for automation and the weakest, because the others change what can be discovered rather than how fast it happens.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Why does the course say choices in code are 'easy to inherit'?",
            options: [
              "They can be copied between projects without re-examination",
              "They are stored in version control",
              "They are hidden from reviewers",
              "They cannot be changed after publication",
            ],
            correctIndex: 0,
            explanation:
              "Being explicit makes them reproducible and also makes them easy to carry forward unquestioned.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is the relationship between measurement and discovery in this lesson?",
            options: [
              "Measurement bounds what can be discovered",
              "Discovery precedes measurement",
              "They are independent concerns",
              "Measurement is purely a cost question",
            ],
            correctIndex: 0,
            explanation:
              "Every limit on the instrument, human or model, is a limit on the findable.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
        ],
      },
    },
    {
      slug: "comp-behaviour-s2-quiz",
      title: "Section 2 quiz \u00b7 Measuring behaviour",
      section: "Section 2 · Measuring behaviour",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a keypoint?",
            options: [
              "A labelled body location tracked frame by frame",
              "A moment when the behaviour changes category",
              "The point at which a model's confidence drops",
              "A frame chosen for manual labelling",
            ],
            correctIndex: 0,
            explanation:
              "Nose, left ear, tail base. The set of keypoints for one frame is a pose.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does the choice of keypoints determine?",
            options: [
              "Everything downstream",
              "Only the computational cost",
              "Whether the method counts as markerless",
              "The frame rate the camera must run at",
            ],
            correctIndex: 0,
            explanation:
              "A behaviour that does not change the tracked points is invisible no matter how good the tracker is.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Why does markerless estimation matter beyond convenience?",
            options: [
              "The measurement does not intervene in the behaviour",
              "It runs faster than marker-based tracking",
              "It requires no calibration",
              "It works without any labelled frames",
            ],
            correctIndex: 0,
            explanation:
              "Markers can be groomed at, they constrain movement, and attaching them requires handling the animal.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Roughly how many hand-labelled frames did the 2018 transfer-learning approach report needing?",
            options: [
              "A few hundred",
              "Tens of thousands, which is why it needed a cluster",
              "Exactly one per behaviour of interest",
              "None, because the method is unsupervised",
            ],
            correctIndex: 0,
            explanation:
              "That is what put pose tracking within reach of an ordinary lab, rather than the tens of thousands a from-scratch model would require.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What is transfer learning, as used here?",
            options: [
              "Fine-tuning a network trained on a large general dataset",
              "Transferring a model between two animals of the same strain",
              "Moving computation from a laptop to a cluster",
              "Converting a supervised model into an unsupervised one",
            ],
            correctIndex: 0,
            explanation:
              "The general visual features are already learned; only the specific task needs the small labelled set.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What typically happens when a body part is occluded?",
            options: [
              "The estimate is confidently wrong",
              "The frame is skipped automatically",
              "The tracker reports a missing value",
              "Accuracy degrades gradually and visibly",
            ],
            correctIndex: 0,
            explanation:
              "Occlusion produces confident nonsense rather than an obvious gap, which is why looking at the tracked video remains part of the method.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Why does hand-labelling still matter after automation?",
            options: [
              "The labels define what the network learns",
              "Labels are required by publication standards",
              "The network cannot run without continuous supervision",
              "Labelling is how frame rate is calibrated",
            ],
            correctIndex: 0,
            explanation:
              "Mislabel consistently and the network learns the mistake faithfully.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Which failure mode does NOT announce itself in a summary statistic?",
            options: [
              "Left and right limbs being swapped",
              "A camera failing entirely mid-recording",
              "The animal leaving the arena",
              "A file failing to load",
            ],
            correctIndex: 0,
            explanation:
              "Swapped limbs, occlusion artefacts and jitter all produce plausible numbers, which is why the video itself has to be inspected.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What is a pose, precisely?",
            options: [
              "The set of keypoints for one frame",
              "The trajectory of one keypoint over time",
              "The behaviour a frame is assigned to",
              "The camera's position relative to the arena",
            ],
            correctIndex: 0,
            explanation:
              "A keypoint through time is a trajectory; the set across the body in one frame is a pose.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Does knowing every keypoint tell you what the animal is doing?",
            options: [
              "No, that step is interpretation",
              "Yes, if the frame rate is high enough",
              "Yes, provided the pose is egocentric",
              "Only for supervised methods",
            ],
            correctIndex: 0,
            explanation:
              "A pose sequence is geometry. Calling a stretch of it grooming is a claim requiring either a human definition or a model that proposes one.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What is a feature, in this pipeline?",
            options: [
              "A quantity computed from pose, such as a speed or angle",
              "A behaviour that appears in the ethogram",
              "A frame selected for hand labelling",
              "A parameter learned by the network",
            ],
            correctIndex: 0,
            explanation:
              "Every feature is a hypothesis about what matters: it captures something a raw coordinate does not, and discards something else.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What does re-expressing pose in the egocentric frame accomplish?",
            options: [
              "It removes position and heading so posture compares across the arena",
              "It corrects for camera lens distortion",
              "It converts two-dimensional tracking into three",
              "It removes the need for hand-labelled frames",
            ],
            correctIndex: 0,
            explanation:
              "The same groom in two corners otherwise looks like two different things.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What does the egocentric transformation cost?",
            options: [
              "The location information",
              "The temporal ordering of frames",
              "The identity of individual keypoints",
              "The ability to compute speeds",
            ],
            correctIndex: 0,
            explanation:
              "Which matters if where the animal is forms part of the question.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Why is the analysis window a decision rather than a detail?",
            options: [
              "Too short fragments a behaviour, too long merges it",
              "Longer windows always improve accuracy",
              "The window is fixed by the camera's frame rate",
              "Windows only matter for supervised methods",
            ],
            correctIndex: 0,
            explanation:
              "There is no neutral choice, and the window length can determine what structure appears.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What can a supervised classifier discover?",
            options: [
              "Only the categories it was given",
              "Categories nobody has named",
              "Whether an ethogram is correct",
              "The purpose of a behaviour",
            ],
            correctIndex: 0,
            explanation:
              "It reproduces the human ethogram faithfully and at scale, which is useful and is also its ceiling.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What is an ethogram?",
            options: [
              "A catalogue of the behaviours a study recognises",
              "A recording of an animal's movement trajectory",
              "A plot of transition probabilities between modules",
              "A measure of a model's segmentation confidence",
            ],
            correctIndex: 0,
            explanation:
              "Historically written by hand in advance, which is what bounds a supervised approach.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Which is the honest default, supervised or unsupervised?",
            options: [
              "Neither, they answer different questions",
              "Supervised, because it uses human expertise",
              "Unsupervised, because it avoids human bias",
              "Supervised for mice, unsupervised for humans",
            ],
            correctIndex: 0,
            explanation:
              "One reproduces a given ethogram at scale; the other proposes categories and can surface either something unnamed or an artefact of the method.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What is a trajectory, as distinct from a pose?",
            options: [
              "One keypoint through time",
              "All keypoints in one frame",
              "The path of the animal's centre of mass",
              "The sequence of behavioural categories",
            ],
            correctIndex: 0,
            explanation:
              "A pose is the set of keypoints for one frame; a trajectory follows a single keypoint across frames.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Which is an example of a keypoint?",
            options: [
              "Tail base",
              "Grooming",
              "A one-second window",
              "The arena centre",
            ],
            correctIndex: 0,
            explanation:
              "Keypoints are labelled body locations chosen by the experimenter, such as nose, left ear or tail base.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What did older motion capture require?",
            options: [
              "Attaching markers or sensors to the body",
              "A depth camera",
              "Hand-labelled training frames",
              "An egocentric coordinate transform",
            ],
            correctIndex: 0,
            explanation:
              "Which works, and changes the animal: markers invite grooming, constrain movement and require handling.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Who introduced the transfer-learning pose approach discussed here, and when?",
            options: [
              "Mathis and colleagues, 2018",
              "Wiltschko and colleagues, 2015",
              "Nath and colleagues, 2019",
              "Datta and colleagues, 2020",
            ],
            correctIndex: 0,
            explanation:
              "The 2019 Nature Protocols paper by Nath and colleagues extends it to three dimensions; the 2015 work is the syllable result.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does fine-tuning start from?",
            options: [
              "A network already trained on a large general image dataset",
              "A randomly initialised network",
              "An unsupervised segmentation",
              "A marker-based recording",
            ],
            correctIndex: 0,
            explanation:
              "The general visual features are already learned, so only the task-specific part needs the small labelled set.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does a tracker do when it jitters?",
            options: [
              "Alternates between two plausible positions",
              "Stops producing output",
              "Reports a confidence of zero",
              "Skips to the next labelled frame",
            ],
            correctIndex: 0,
            explanation:
              "Like occlusion and limb swaps, it produces plausible numbers rather than an obvious failure.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What is the consequence of consistently mislabelling training frames?",
            options: [
              "The network learns the mistake faithfully",
              "The network fails to converge",
              "Accuracy drops visibly on the training set",
              "The frames are automatically rejected",
            ],
            correctIndex: 0,
            explanation:
              "The labels define what is learned, which is why the labelling labour did not disappear so much as change shape.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Why is a summary statistic insufficient for validating tracking?",
            options: [
              "Failures produce plausible values",
              "Statistics cannot be computed per frame",
              "Video cannot be summarised numerically",
              "Summary statistics require ground truth",
            ],
            correctIndex: 0,
            explanation:
              "Occlusion, swaps and jitter all pass through, which is why the tracked video is watched.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does three-dimensional pose estimation across species build on?",
            options: [
              "The same transfer-learning toolbox, extended",
              "A separate marker-based system",
              "Unsupervised segmentation",
              "Depth imaging exclusively",
            ],
            correctIndex: 0,
            explanation:
              "Nath and colleagues published that extension in Nature Protocols in 2019.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What is the first thing that bounds detectable behaviour?",
            options: [
              "Which keypoints were chosen",
              "The model architecture",
              "The frame rate",
              "The size of the arena",
            ],
            correctIndex: 0,
            explanation:
              "If a behaviour does not move the tracked points, no tracker quality recovers it.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What kind of claim is calling a stretch of pose 'grooming'?",
            options: [
              "An interpretation requiring a definition or a model",
              "A direct measurement",
              "A property of the camera calibration",
              "A statistical test result",
            ],
            correctIndex: 0,
            explanation:
              "Pose is geometry; the category is added by a human definition or by a model that proposes one.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Which is a feature rather than raw pose?",
            options: [
              "Speed of the nose relative to the body",
              "The x coordinate of the nose",
              "The frame index",
              "The camera's focal length",
            ],
            correctIndex: 0,
            explanation:
              "Features are computed quantities such as distances, angles, speeds and accelerations, each encoding a hypothesis about what matters.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What problem does the allocentric frame create?",
            options: [
              "It mixes where the animal is with what it is doing",
              "It cannot represent rotation",
              "It requires depth imaging",
              "It discards speed information",
            ],
            correctIndex: 0,
            explanation:
              "The same groom in two corners looks like two different things until pose is re-expressed egocentrically.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What does a window that is too long do?",
            options: [
              "Merges a behaviour with its surroundings",
              "Fragments it into unrelated jerks",
              "Improves resolution",
              "Removes the need for features",
            ],
            correctIndex: 0,
            explanation:
              "Too short fragments it; there is no neutral window length.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What can an unsupervised method surface that a supervised one cannot?",
            options: [
              "Something nobody thought to name",
              "A more accurate ethogram",
              "Higher confidence on known categories",
              "A lower error rate on labelled data",
            ],
            correctIndex: 0,
            explanation:
              "And it can equally surface an artefact of the method, which is the subject of Section 3.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What is the ceiling of a supervised classifier?",
            options: [
              "The ethogram it was trained on",
              "The frame rate of the video",
              "The number of animals in the study",
              "The model's parameter count",
            ],
            correctIndex: 0,
            explanation:
              "It applies that ethogram faithfully and at scale, which is useful and is also its limit.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Why does the course refuse to name a default between supervised and unsupervised?",
            options: [
              "They answer different questions",
              "Both are equally accurate",
              "The choice depends on species",
              "Unsupervised methods are always preferable",
            ],
            correctIndex: 0,
            explanation:
              "One reproduces a given catalogue at scale; the other proposes categories. Neither is the honest default.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What does the egocentric transformation preserve?",
            options: [
              "Posture, comparable across the arena",
              "The animal's location",
              "The arena's coordinate system",
              "The camera angle",
            ],
            correctIndex: 0,
            explanation:
              "It removes position and heading precisely so that posture can be compared wherever it occurs.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "When does discarding location information matter?",
            options: [
              "When where the animal is forms part of the question",
              "Whenever depth imaging is used",
              "Only for multi-animal studies",
              "Only when the arena is asymmetric",
            ],
            correctIndex: 0,
            explanation:
              "The transformation is routine and it is still a choice with a cost.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
        ],
      },
    },
    {
      slug: "comp-behaviour-s3-quiz",
      title: "Section 3 quiz \u00b7 Finding structure in behaviour",
      section: "Section 3 · Finding structure in behaviour",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the 2015 sub-second result report?",
            options: [
              "Behaviour decomposes into brief reused stereotyped modules",
              "Mice groom more often than previously measured",
              "Depth cameras outperform colour cameras for tracking",
              "Behaviour is continuous with no recoverable structure",
            ],
            correctIndex: 0,
            explanation:
              "Three-dimensional pose dynamics in freely behaving mice are structured below one second, with defined transition probabilities between modules.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What are behavioural syllables?",
            options: [
              "Brief reused stereotyped modules of movement",
              "Vocalisations recorded alongside movement",
              "The categories written into an ethogram in advance",
              "Frames where two behaviours overlap",
            ],
            correctIndex: 0,
            explanation:
              "The linguistic metaphor tracks that they recur, are recognisably the same each time, and combine in patterned sequences.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Is the claim that mouse behaviour is a language?",
            options: [
              "No, only that it has the shape of a sequence of reused parts",
              "Yes, with syllables mapping to phonemes",
              "Yes, but only for grooming sequences",
              "The 2015 paper takes no position",
            ],
            correctIndex: 0,
            explanation:
              "The claim is structural: a limited set of reused parts combining in patterned rather than arbitrary sequences.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What did the unsupervised approach buy in the 2015 work?",
            options: [
              "Units nobody had written down in advance",
              "Higher accuracy on an existing ethogram",
              "Faster processing of depth video",
              "Elimination of the need for depth imaging",
            ],
            correctIndex: 0,
            explanation:
              "That is exactly the lesson-1 limitation of hand scoring being lifted: the model proposed the segmentation.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why is the transition structure half the result?",
            options: [
              "A manipulation can change the grammar while leaving the vocabulary",
              "Transitions are easier to measure than modules",
              "Module counts are unreliable across animals",
              "Transitions determine the frame rate required",
            ],
            correctIndex: 0,
            explanation:
              "Two conditions can differ not in which modules exist but in how they are strung together, which counting occurrences cannot see.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What does 'stereotyped' mean for a behavioural module?",
            options: [
              "Recognisably similar on each recurrence",
              "Common across many species",
              "Present in the ethogram already",
              "Triggered by a specific stimulus",
            ],
            correctIndex: 0,
            explanation:
              "Its similarity on each recurrence is what allows it to be counted as the same thing at all.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What imaging did the 2015 study use?",
            options: [
              "Depth imaging of freely behaving mice",
              "Two-photon calcium imaging",
              "Marker-based motion capture",
              "Overhead colour video with manual scoring",
            ],
            correctIndex: 0,
            explanation:
              "Depth imaging of animals that were not restrained, which is what made the sub-second pose dynamics measurable.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why is finding modules not evidence that modules exist?",
            options: [
              "Segmenting a continuous signal is what the method does",
              "Because the modules are never reproducible",
              "Because unsupervised methods have no statistical basis",
              "Because module counts are always arbitrary",
            ],
            correctIndex: 0,
            explanation:
              "The method returns modules whether or not behaviour is genuinely modular, and the model's confidence is not independent evidence.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Which would count as evidence that a proposed unit is real?",
            options: [
              "It predicts something it was not fitted to",
              "The model assigns it high confidence",
              "It appears in more than half the frames",
              "It matches a category in the existing ethogram",
            ],
            correctIndex: 0,
            explanation:
              "Reproducing across animals and laboratories, aligning with an independent measurement, responding coherently to a manipulation, or surviving a parameter change.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What does it mean if a category dissolves when the window length changes?",
            options: [
              "It was a property of the window",
              "The data were too noisy to segment",
              "The window was set too short",
              "The model needs more training frames",
            ],
            correctIndex: 0,
            explanation:
              "That is the cleanest negative test available, and it is cheap to run.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What position does this course take on whether behavioural modularity is real?",
            options: [
              "It does not adjudicate, and teaches the disagreement",
              "That the modules are genuine features of movement generation",
              "That the modules are always artefacts of the method",
              "That the question is unanswerable in principle",
            ],
            correctIndex: 0,
            explanation:
              "Both positions are held by serious people. What the course teaches is to notice which claim a paper is making.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What do papers frequently do, according to this lesson?",
            options: [
              "Make the strong claim while the evidence supports the weak one",
              "Understate their findings to survive peer review",
              "Omit the module count entirely",
              "Refuse to publish unsupervised results",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the reader's job is to separate 'this model describes the data with forty modules' from 'the mouse has forty behavioural syllables'.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "When a paper reports a number of behavioural modules, what should you ask first?",
            options: [
              "What fixed the number",
              "How long the recording lasted",
              "Which species was used",
              "Whether the code is open source",
            ],
            correctIndex: 0,
            explanation:
              "The data, a hyperparameter, or a convention are three very different answers, and only the first is a finding.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is a hyperparameter, in this context?",
            options: [
              "A value set by the practitioner rather than learned",
              "A parameter shared across all animals in a study",
              "A measure of a segmentation's confidence",
              "A keypoint used to align frames",
            ],
            correctIndex: 0,
            explanation:
              "It can silently determine how many modules a method returns, which is why the module count alone means little.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is the difference between description and discovery here?",
            options: [
              "Whether the model summarises data or reveals a property of the animal",
              "Whether the method is supervised or unsupervised",
              "Whether results were replicated in a second laboratory",
              "Whether the paper is peer reviewed",
            ],
            correctIndex: 0,
            explanation:
              "A useful description is a real contribution. Presenting it as a discovery about the animal is the overreach.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Which test of a discovered structure is hardest and most informative?",
            options: [
              "Whether it appears in another laboratory's recordings",
              "Whether the model converges quickly",
              "Whether the module count is a round number",
              "Whether it matches the experimenter's expectation",
            ],
            correctIndex: 0,
            explanation:
              "Reproducibility across setups is the test that most cleanly separates a property of the animal from a property of the pipeline.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Do you have to resolve the modularity debate to use these tools?",
            options: [
              "No, but you must know it is unresolved",
              "Yes, before running any unsupervised method",
              "Only if publishing in a neuroscience journal",
              "Only when working with species other than mice",
            ],
            correctIndex: 0,
            explanation:
              "The difference between a finding and a description is what the debate is about, and a learner needs to hear the claim correctly.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Whose 2015 work reported the sub-second structure?",
            options: [
              "Wiltschko and colleagues",
              "Mathis and colleagues",
              "Nath and colleagues",
              "Tinbergen and colleagues",
            ],
            correctIndex: 0,
            explanation:
              "Published in Neuron, using depth imaging of freely behaving mice.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "In which journal did the 2015 sub-second result appear?",
            options: [
              "Neuron",
              "Nature Neuroscience",
              "Nature Protocols",
              "Science",
            ],
            correctIndex: 0,
            explanation:
              "Nature Neuroscience carried the 2018 pose-estimation paper; Nature Protocols the 2019 three-dimensional extension.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What does MoSeq abbreviate?",
            options: [
              "Motion Sequencing",
              "Modular Segmentation",
              "Mouse Sequencing",
              "Movement Quantification",
            ],
            correctIndex: 0,
            explanation:
              "It is the unsupervised approach introduced with the sub-second syllable result.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What were the mice doing during the 2015 recordings?",
            options: [
              "Behaving freely",
              "Running a fixed maze task",
              "Restrained for calibration",
              "Performing a trained lever press",
            ],
            correctIndex: 0,
            explanation:
              "Freely behaving animals under depth imaging is what made the sub-second pose dynamics measurable.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What makes a module countable as the same thing across recurrences?",
            options: [
              "It is stereotyped",
              "It is frequent",
              "It is short",
              "It appears in the ethogram",
            ],
            correctIndex: 0,
            explanation:
              "Recognisable similarity on each recurrence is the precondition for treating it as a unit.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What can two conditions differ in, besides which modules exist?",
            options: [
              "The probabilities of moving between them",
              "The frame rate used",
              "The number of keypoints tracked",
              "The species studied",
            ],
            correctIndex: 0,
            explanation:
              "A drug or a lesion can leave the vocabulary intact and change the grammar, which occurrence counts cannot see.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What did nobody do in advance in the 2015 work?",
            options: [
              "Write down the list of syllables",
              "Record the video",
              "Choose the imaging modality",
              "Select the species",
            ],
            correctIndex: 0,
            explanation:
              "The model proposed the segmentation, which is the hand-scoring limitation being lifted.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "How does the course qualify the linguistic metaphor?",
            options: [
              "Behaviour has the shape of a sequence of reused parts",
              "Behaviour is literally a language",
              "The metaphor is rejected entirely",
              "It applies only to grooming",
            ],
            correctIndex: 0,
            explanation:
              "Reuse, recognisability and patterned combination are the shared structure; nothing more is claimed.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why is the inventory of modules less interesting than the transitions?",
            options: [
              "Manipulations often change sequencing rather than membership",
              "Inventories are unreliable",
              "Transitions are easier to compute",
              "Inventories vary between cameras",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the transition structure is described as half the result.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What is the fundamental problem with treating a segmentation as a discovery?",
            options: [
              "The method produces segments regardless",
              "Segmentations are never reproducible",
              "Unsupervised methods lack statistical grounding",
              "Confidence values are unavailable",
            ],
            correctIndex: 0,
            explanation:
              "Carving a continuous signal into discrete units is what the method does, so the output alone is not evidence.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Which of these is the weakest evidence for a module's reality?",
            options: [
              "The model's own confidence",
              "Reproduction in another laboratory",
              "Alignment with neural activity",
              "Survival of a parameter change",
            ],
            correctIndex: 0,
            explanation:
              "Confidence is generated under the same assumptions that produced the segmentation.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What does 'predicting something it was not fitted to' mean here?",
            options: [
              "The unit explains data outside the fitting procedure",
              "The model forecasts the next frame",
              "The unit appears in the training set",
              "The model has low training error",
            ],
            correctIndex: 0,
            explanation:
              "Cross-laboratory reproduction, independent measurements and coherent responses to manipulation are the examples given.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is the cheapest negative test named in the lesson?",
            options: [
              "Changing the window length and seeing if categories survive",
              "Re-running the model with a new seed",
              "Collecting more animals",
              "Increasing the frame rate",
            ],
            correctIndex: 0,
            explanation:
              "A category that dissolves when the window changes was a property of the window.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "How does the course describe the two positions in the debate?",
            options: [
              "Both held by serious people and both reasonable",
              "One mainstream and one fringe",
              "Settled in favour of modularity",
              "Unresolvable in principle",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the reader to notice which claim a paper is making rather than adjudicating.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What gap does the lesson say papers frequently exhibit?",
            options: [
              "Strong claims on evidence that supports weaker ones",
              "Weak claims on strong evidence",
              "Missing methods sections",
              "Undisclosed funding",
            ],
            correctIndex: 0,
            explanation:
              "Which is why separating description from discovery is the reader's job.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Which three things could fix a reported module count?",
            options: [
              "The data, a hyperparameter, or a convention",
              "The species, the arena, or the camera",
              "The journal, the reviewer, or the author",
              "The frame rate, the lighting, or the lens",
            ],
            correctIndex: 0,
            explanation:
              "Only the first is a finding about the animal.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What does the course say a learner must be able to do?",
            options: [
              "Hear which claim a paper is actually making",
              "Resolve the modularity debate",
              "Reimplement MoSeq from scratch",
              "Choose the correct hyperparameters",
            ],
            correctIndex: 0,
            explanation:
              "You can use the tools without resolving the debate, but not without knowing it is open.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Why is agreement between two runs of the same model weak evidence?",
            options: [
              "They share the same assumptions",
              "They use different random seeds",
              "They cannot be compared statistically",
              "Agreement is never measured",
            ],
            correctIndex: 0,
            explanation:
              "Evidence has to come from outside the assumptions that generated the segmentation.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is the honest reading of 'this model describes the data with forty modules'?",
            options: [
              "A description, which may still be useful",
              "A discovery about the animal",
              "An error in the analysis",
              "A claim requiring no evidence",
            ],
            correctIndex: 0,
            explanation:
              "A useful description is a real contribution. The overreach is presenting it as a property of the animal.",
            sourceLessonSlug: "is-the-structure-real",
          },
        ],
      },
    },
    {
      slug: "comp-behaviour-final",
      title: "Final assessment \u00b7 Computational Behaviour Foundations",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course honest about in its first lesson?",
            options: [
              "That its subject has no published curriculum yet",
              "That it was written without any primary sources",
              "That it replaces the official Neuromatch course",
              "That its author has no background in the field",
            ],
            correctIndex: 0,
            explanation:
              "Neuromatch's Computational Behaviour course launches July 2027 with prerequisites TBD, so this one is built from the general literature.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What bounds what hand scoring can discover?",
            options: [
              "The checklist written in advance",
              "The number of animals available",
              "The storage capacity for video",
              "The statistical test chosen",
            ],
            correctIndex: 0,
            explanation:
              "A behaviour not on the list cannot be found, whatever the recording quality.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Automating measurement does what to the experimenter's judgement?",
            options: [
              "Moves it into code",
              "Removes it entirely",
              "Replaces it with statistics",
              "Defers it until analysis",
            ],
            correctIndex: 0,
            explanation:
              "Body parts, frame rate, lighting and model are all still chosen, and in code those choices are explicit and inheritable.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Why is a consistent model error worse than a noisy one?",
            options: [
              "It never looks like disagreement",
              "It is larger in magnitude",
              "It cannot be measured",
              "It only affects unsupervised methods",
            ],
            correctIndex: 0,
            explanation:
              "Noise averages out and shows up as variance. A systematic bias repeats identically and can pass unnoticed indefinitely.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is the strongest argument for automating measurement?",
            options: [
              "Resolution below human perception",
              "Reduced equipment cost",
              "Fewer animals required",
              "Simpler statistical analysis",
            ],
            correctIndex: 0,
            explanation:
              "Speed is the obvious case and the weakest. Resolution, consistency and scale change what can be discovered.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "A model trained in one setup and moved to another faces what?",
            options: [
              "A research question",
              "A configuration change",
              "A licensing restriction",
              "A frame-rate mismatch",
            ],
            correctIndex: 0,
            explanation:
              "Treating generalisation as a setting rather than an empirical question is a common route to irreproducible results.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "What is a keypoint?",
            options: [
              "A labelled body location tracked over frames",
              "A behavioural transition point",
              "A high-confidence frame",
              "A calibration marker on the arena floor",
            ],
            correctIndex: 0,
            explanation:
              "The set of keypoints in one frame is a pose; one keypoint through time is a trajectory.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Why is the keypoint choice a scientific decision?",
            options: [
              "It bounds what behaviour can be detected",
              "It determines the video file size",
              "It sets the model's learning rate",
              "It fixes the number of behavioural modules",
            ],
            correctIndex: 0,
            explanation:
              "A behaviour that does not move the tracked points is invisible however good the tracker is.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does markerless estimation avoid?",
            options: [
              "Intervening in the behaviour being measured",
              "The need for a camera",
              "Hand labelling of any frames",
              "The occlusion problem",
            ],
            correctIndex: 0,
            explanation:
              "Markers constrain movement, invite grooming, and require handling the animal.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Transfer learning made pose tracking practical by reducing what?",
            options: [
              "The number of hand-labelled frames needed",
              "The camera resolution required",
              "The number of animals per study",
              "The length of each recording",
            ],
            correctIndex: 0,
            explanation:
              "A few hundred labelled frames rather than tens of thousands is what brought it within reach of an ordinary lab.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Occlusion typically produces what?",
            options: [
              "Confident wrong estimates",
              "Missing values",
              "A visible drop in frame rate",
              "An automatic re-labelling prompt",
            ],
            correctIndex: 0,
            explanation:
              "Which is why summary statistics do not reveal it and the tracked video has to be watched.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "Pose is geometry; what is behaviour?",
            options: [
              "Interpretation",
              "A higher frame rate",
              "A supervised label only",
              "The same thing at a longer window",
            ],
            correctIndex: 0,
            explanation:
              "Calling a stretch of pose sequence grooming is a claim, requiring a human definition or a model that proposes one.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Every computed feature is what?",
            options: [
              "A hypothesis about what matters",
              "A lossless transformation of pose",
              "A requirement of the tracker",
              "An output of the unsupervised model",
            ],
            correctIndex: 0,
            explanation:
              "It captures something raw coordinates do not, and discards something else.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "The egocentric frame removes what?",
            options: [
              "Position and heading",
              "Time",
              "Keypoint identity",
              "Speed information",
            ],
            correctIndex: 0,
            explanation:
              "So the same posture compares across the arena, at the cost of location information.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "Why is window length not a neutral choice?",
            options: [
              "It determines whether a behaviour fragments or merges",
              "Longer windows are always more accurate",
              "It is fixed by the camera hardware",
              "It only affects supervised classifiers",
            ],
            correctIndex: 0,
            explanation:
              "Too short and a groom is unrelated jerks; too long and it merges with its surroundings.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "A supervised classifier can at best do what?",
            options: [
              "Reproduce its given ethogram at scale",
              "Discover unnamed behaviours",
              "Prove the ethogram correct",
              "Determine a behaviour's function",
            ],
            correctIndex: 0,
            explanation:
              "That is genuinely useful and it is also the ceiling.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "The 2015 result found structure at what timescale?",
            options: [
              "Sub-second",
              "Roughly one minute",
              "Across whole recording sessions",
              "Only across days",
            ],
            correctIndex: 0,
            explanation:
              "Which is below what a human observer watching in real time can resolve.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What are the modules in that result called?",
            options: [
              "Behavioural syllables",
              "Ethogram entries",
              "Keypoint clusters",
              "Pose primitives",
            ],
            correctIndex: 0,
            explanation:
              "Motion Sequencing, or MoSeq, is the method that proposed them.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "What does the transition structure let you detect?",
            options: [
              "A changed grammar with an unchanged vocabulary",
              "A miscalibrated camera",
              "An occluded keypoint",
              "A mislabelled training frame",
            ],
            correctIndex: 0,
            explanation:
              "A manipulation can leave the set of modules intact and alter only how they are strung together.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why does the linguistic metaphor apply?",
            options: [
              "Reused parts combine in patterned sequences",
              "Mice produce vocalisations while moving",
              "The modules map onto phonemes",
              "Behaviour follows a formal grammar",
            ],
            correctIndex: 0,
            explanation:
              "The claim is structural, not that behaviour is a language.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "An unsupervised method returns modules when?",
            options: [
              "Whether or not behaviour is genuinely modular",
              "Only when the structure is real",
              "Only above a confidence threshold",
              "Only for depth-imaging data",
            ],
            correctIndex: 0,
            explanation:
              "Segmenting a continuous signal into discrete units is what the method does, so the output is not by itself evidence.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "Which is genuine evidence for a proposed unit?",
            options: [
              "Reproducing in another laboratory's recordings",
              "High model confidence",
              "A large number of occurrences",
              "Agreement between two runs of the same model",
            ],
            correctIndex: 0,
            explanation:
              "Predicting something it was not fitted to is the test; two runs of the same model share the same assumptions.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "A category that vanishes when window length changes was what?",
            options: [
              "A property of the window",
              "An artefact of the camera",
              "A rare behaviour",
              "Correctly identified but under-sampled",
            ],
            correctIndex: 0,
            explanation:
              "That is the cheapest negative test available and it should be run before any strong claim.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What does this course do with the modularity debate?",
            options: [
              "Teaches it as unresolved and names both positions",
              "Concludes the modules are real",
              "Concludes the modules are artefacts",
              "Omits it as too technical",
            ],
            correctIndex: 0,
            explanation:
              "Both positions are held by serious people, and a learner needs to hear which claim a paper is actually making.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "The difference between a finding and a description is what?",
            options: [
              "Whether the claim is about the animal or the model",
              "Whether the paper was peer reviewed",
              "Whether the code is public",
              "Whether the sample size was large",
            ],
            correctIndex: 0,
            explanation:
              "'The mouse has forty syllables' and 'this model describes the data with forty modules' are different claims.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is a hyperparameter?",
            options: [
              "A value set by the practitioner rather than learned",
              "A parameter estimated from the training data",
              "A keypoint used for alignment",
              "A threshold fixed by the camera",
            ],
            correctIndex: 0,
            explanation:
              "It can silently determine the module count, which is why that number alone means little.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is an ethogram?",
            options: [
              "A catalogue of behaviours a study recognises",
              "A trajectory of one keypoint",
              "A distribution of transition probabilities",
              "A plot of model confidence over time",
            ],
            correctIndex: 0,
            explanation:
              "Written by hand in advance, historically, which is exactly what unsupervised methods set out to get past.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What does 'stereotyped' allow?",
            options: [
              "Counting recurrences as the same thing",
              "Predicting the next module exactly",
              "Removing the need for a window",
              "Tracking without keypoints",
            ],
            correctIndex: 0,
            explanation:
              "Recognisable similarity on each recurrence is the precondition for treating a module as a unit at all.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Which pairing is correct?",
            options: [
              "DeepLabCut 2018, MoSeq 2015",
              "DeepLabCut 2015, MoSeq 2018",
              "Both 2018",
              "Both 2015",
            ],
            correctIndex: 0,
            explanation:
              "The sub-second syllable result came first, in 2015; the transfer-learning pose toolbox followed in 2018.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why does watching the tracked video remain part of the method?",
            options: [
              "Tracking failures produce plausible numbers",
              "Regulations require visual inspection",
              "Video compression can corrupt files",
              "Models cannot compute summary statistics",
            ],
            correctIndex: 0,
            explanation:
              "Occlusion, limb swaps and jitter all pass through summary statistics without announcing themselves.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does this course claim to be?",
            options: [
              "A foundations course, not a replacement",
              "A complete substitute for the official course",
              "An examination preparation programme",
              "A survey of every method in the field",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the vocabulary and judgement needed to follow primary material, and says so.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What did the field shift away from?",
            options: [
              "A human writing the categories in advance",
              "Using video at all",
              "Studying freely behaving animals",
              "Measuring more than one body part",
            ],
            correctIndex: 0,
            explanation:
              "A model can now propose the categories from movement data, which is what makes the unnamed discoverable.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "What does scale change?",
            options: [
              "Which questions are askable",
              "How accurate a single frame is",
              "Whether markers are needed",
              "The definition of a behavioural module",
            ],
            correctIndex: 0,
            explanation:
              "When scoring cost an hour of trained time per hour of video, that budget shaped the experiments.",
            sourceLessonSlug: "why-automate-measurement",
          },
          {
            prompt: "Two runs of the same model agreeing shows what?",
            options: [
              "Little, since they share assumptions",
              "That the structure is real",
              "That the hyperparameters are optimal",
              "That the data are noise-free",
            ],
            correctIndex: 0,
            explanation:
              "Evidence has to come from something the model was not fitted to.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What should a reader ask about a reported module count?",
            options: [
              "Whether it appears in an independent dataset",
              "Whether it is an even number",
              "How long the model took to converge",
              "Which programming language was used",
            ],
            correctIndex: 0,
            explanation:
              "That, plus what fixed the number, separates most strong claims from most supportable ones.",
            sourceLessonSlug: "is-the-structure-real",
          },
          {
            prompt: "What is Motion Sequencing?",
            options: [
              "The unsupervised method behind the 2015 syllable result",
              "A marker-based motion capture system",
              "A supervised classifier for grooming",
              "A camera calibration procedure",
            ],
            correctIndex: 0,
            explanation:
              "Abbreviated MoSeq, it proposed the segmentation rather than scoring a given ethogram.",
            sourceLessonSlug: "behavioural-syllables",
          },
          {
            prompt: "Why can a supervised model never surface an unnamed behaviour?",
            options: [
              "It can only learn the labels it was given",
              "It runs at too low a frame rate",
              "It requires egocentric coordinates",
              "It cannot handle occlusion",
            ],
            correctIndex: 0,
            explanation:
              "Its ceiling is the ethogram it was trained on, applied faithfully and at scale.",
            sourceLessonSlug: "from-pose-to-behaviour",
          },
          {
            prompt: "What makes a foundations course honest about its subject?",
            options: [
              "Saying what it is not, especially when the source does not exist",
              "Covering every published method",
              "Matching the official syllabus exactly",
              "Avoiding contested claims entirely",
            ],
            correctIndex: 0,
            explanation:
              "This course cannot be a companion to a coursebook that has not been published, and it says so rather than implying otherwise.",
            sourceLessonSlug: "what-computational-behaviour-is",
          },
          {
            prompt: "Which of these is NOT a listed tracking failure mode?",
            options: [
              "The model refusing to produce an estimate",
              "Left and right limbs being swapped",
              "Confident estimates during occlusion",
              "Jitter between two plausible positions",
            ],
            correctIndex: 0,
            explanation:
              "The failures all produce output. That is what makes them hard to catch.",
            sourceLessonSlug: "pose-estimation",
          },
          {
            prompt: "What does the course say a learner must know about the debate?",
            options: [
              "That it is unresolved",
              "How to resolve it",
              "Which side the majority takes",
              "That it has been settled since 2015",
            ],
            correctIndex: 0,
            explanation:
              "You do not have to resolve it to use the tools, but you do have to hear a paper's claim correctly.",
            sourceLessonSlug: "is-the-structure-real",
          },
        ],
      },
    },
  ],
};
