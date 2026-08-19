// Authored "Documentary" — course #7 of the Storytelling series (docs/storytelling-curriculum.md).
//
// WHERE IT SITS. The True track, one rung above news on the permission ladder in the sense that a
// documentary may shape at feature length, and one rung below performed work because it may not
// invent. Its distinctive problem is TIME: a relationship with a participant that lasts months or
// years, during which consent given at the start may no longer describe what the film has become.
//
// SOURCING: Nichols for the modes and the conceptual frame, Aufderheide for the field's own account
// of itself, and the Honest Truths study for what documentary makers say about their ethical
// dilemmas in their own words, which is the most useful single source on this subject because it is
// evidence about practice rather than assertion about principle. Real works are named with director
// and year and can be watched.
//
// The six spine terms are used unchanged; documentary's own vocabulary (the modes, verite, the
// participant) is named and mapped back.

import type { AuthoredCourse } from "./authored-course";

export const DOCUMENTARY_COURSE: AuthoredCourse = {
  title: "Documentary",
  description:
    "A documentary is a relationship that lasts long enough to change, and that is its central craft problem as much as its central ethical one. This course covers what documentary actually claims about the world, the recognized modes and what each one implicitly promises a viewer, access and the consent that has to be renewed rather than signed once, how structure is found in material rather than scripted in advance, interviewing at depth including the uses of silence, archive as evidence, the ethics of the edit where every honest film shapes and the question is how, the signals that keep reenactment and music honest, and who the film is finally for when the participant, the funder and the audience want different things. Built on the six decisions from How Stories Work, with the field's own account of its dilemmas rather than a list of rules.",
  lessons: [
    {
      slug: "doc-what-it-claims",
      title: "1 · What a documentary claims about the world",
      section: "Module 1 · The form",
      body: `Every documentary makes a claim before a single word is spoken: **this is about the actual world, and what you are seeing happened.** That claim is the form's entire power and its entire liability.

**It is not a claim of objectivity**, and films that pretend otherwise are usually the least honest. A documentary is made of choices: where to point the camera, when to start recording, who to follow, what to cut. **A documentary is an argument made of evidence**, which is a strong and defensible thing to be.

**What separates it from journalism**, since both are in the True track:

| | News | Documentary |
| --- | --- | --- |
| Timescale | Hours to weeks | Months to years |
| Relationship to subject | Brief, often single contact | Long, and it changes both parties |
| Shape | Determined by convention | Found in the material |
| The maker's presence | Usually erased | Often visible, sometimes the subject |
| Consent | For an interview | For a relationship that has not happened yet |

**That last row is the whole course.** A participant agreeing to be filmed in March cannot know what the film will be in November, because the maker does not know either.

**The modes, and why they are useful.** Bill Nichols' taxonomy is the standard vocabulary in the field: **poetic, expository, observational, participatory, reflexive and performative** (Nichols, 2017). Their value here is not classification but that **each mode makes a different implicit promise to a viewer**:

- **Expository** (narration, argument) promises: we will tell you what this means.
- **Observational** (fly on the wall, no narration) promises: we are not intervening, you are seeing it as it was.
- **Participatory** (the maker interacts, interviews, appears) promises: this is an encounter, and we are part of it.
- **Reflexive** promises: we will show you how this was made, including its limits.
- **Performative** promises: this is the maker's experience of the subject, not a neutral account.
- **Poetic** promises: mood and pattern rather than argument.

**Choosing a mode is choosing a promise**, and most documentary dishonesty is a broken one: an observational film that was heavily staged, or an expository film whose narration asserts far more than its evidence supports.

**Where the six decisions land.** Documentary has a change and an owner exactly as any story does, and the difficulty is that **you do not know what they are when you start filming.** You find out. Which means a documentary is frequently a story about the change the maker did not expect, and the discipline is following the evidence rather than the plan.

:::reveal Why is "choosing a mode" better understood as choosing a promise than as choosing a style? ||| Because each mode tells a viewer, implicitly, what kind of claim the film is making: observational says we are not intervening and you are seeing it as it was, expository says we will tell you what this means, performative says this is the maker's experience rather than a neutral account. Most documentary dishonesty is a broken promise rather than a false statement, such as an observational film that was in fact heavily staged, so the style choice carries an ethical commitment the audience will hold you to.

## Sources
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.
- Aufderheide, P. (2007). *Documentary film: A very short introduction*. Oxford University Press.`,
    },
    {
      slug: "doc-consent-over-time",
      title: "2 · Consent that has to be renewed",
      section: "Module 1 · The form",
      recallContent: [
        {
          prompt: "Name the row in the news-versus-documentary table that the whole course turns on.",
          answer:
            "Consent. In news it is consent for an interview; in documentary it is consent for a relationship that has not happened yet. A participant agreeing in March cannot know what the film will be in November, because the maker does not know either.",
        },
      ],
      body: `A release form is signed once. **The film takes two years.** Everything difficult about documentary ethics lives in that gap.

**What the participant actually agreed to.** In most cases: a described project, a friendly maker, and a vague sense of being represented fairly. What they did not agree to, because nobody could have told them:

- The film's eventual argument, which may not be the one described.
- Which two minutes of two hundred hours will represent them.
- How they will look in a context they will never see until it exists.
- That the film will still be findable in fifteen years.
- That people who know them will see it.

**The legal position and the ethical position are different**, and conflating them is how makers get into trouble with a signed release in hand. **A release protects you. It does not make a thing right.** The Honest Truths study, which asked documentary makers directly about their ethical dilemmas, found practitioners routinely navigating exactly this gap between what was permitted and what felt defensible (Aufderheide, Jaszi, & Chandra, 2009).

**The practice that answers it: consent as a process rather than an event.**

1. **Explain again at intervals**, especially when the film changes direction. A five-minute conversation at month eight is worth more than any form.
2. **Tell them when they become central.** Someone who agreed to be a minor participant deserves to know when they have become the spine.
3. **Be specific about permanence.** Most people have no model for how long a film stays available, or how search works.
4. **Say what you will not do**, and then do not do it. A single kept promise buys more genuine access than any amount of charm.

**The screening question, which the field genuinely disagrees about.** Should participants see the film before release? Arguments against: it invites veto, and editorial independence matters. Arguments for: they will live with it, and you will not.

**A defensible middle**, and it is what many careful makers do: show them, be explicit that it is not a veto, and take factual corrections seriously while retaining the edit. **Tell them that policy at the start**, so nobody discovers the terms at the worst moment.

**And the case that decides it for many makers:** if a participant would be endangered, criminalised, or destroyed by the film, the calculus is not editorial independence versus courtesy. **Consider whether to include them at all**, which is a real option that is easy to forget once you have the footage.

:::reveal A participant signed a release in month one. In month fourteen the film's argument has changed and they are now central to it. What does the course say you owe them, and why is the release not the answer? ||| A fresh conversation: explain the film's actual direction now, tell them they have become central, and be specific about permanence and reach. The release is a legal protection rather than an ethical one, and it was given for a project that no longer exists in the form described. Treating consent as a process rather than an event is the practice that closes the gap, and telling them when they become the spine is the moment it matters most, because that is the change nobody could have anticipated at signing.

## Sources
- Aufderheide, P., Jaszi, P., & Chandra, M. (2009). *Honest truths: Documentary filmmakers on ethical challenges in their work*. Center for Social Media, American University.
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.`,
    },
    {
      slug: "doc-structure-from-material",
      title: "3 · Structure is found, not scripted",
      section: "Module 1 · The form",
      body: `In fiction you decide the story and then produce it. **In documentary you produce material and then find out what the story was**, and makers who cannot tolerate that produce films that bend evidence toward a plan.

**The three-stage reality**

**1. What you thought it was about.** The proposal. It is frequently wrong, and being wrong is not a failure.

**2. What you have.** Discovered in the edit, usually painfully. The character you followed for a year is not the owner; the change is not the one you were filming for.

**3. What it is about.** Which you argue toward using the six decisions, from the material that actually exists.

**The discipline that keeps this honest:** you may change what you think the story is. **You may not change what happened to make it fit.**

**Finding the change in the material.** Ask the same question as any draft: what is different at the end from the beginning? In documentary the honest answers are frequently smaller than the proposal promised. **A film about someone who tried and did not succeed is a real film**, and turning it into a triumph in the edit is the most common structural dishonesty in the form.

**Finding the owner.** Same problem as news, one rung harder because you have footage of everyone. **The person you have the most material on is not necessarily the owner**, and confusing "most footage" with "protagonist" produces a film that feels unbalanced without the viewer being able to say why.

**Time as the raw material.** The advantage of years is that you can film change actually occurring rather than reconstructing it. **That is the single thing documentary does better than any other form** and it is worth structuring around: find the moment the change becomes visible, and make sure you were filming.

**Which means the practical craft is anticipating.** You cannot film what you did not attend. Experienced makers over-film around anticipated turning points and accept the waste, because a missed turn cannot be recovered.

**The edit is where the film is written**, and the ratio is brutal: hundreds of hours to ninety minutes. From How Stories Work: scene what the change runs through, summarize everything else. In documentary summary is narration, montage, a title card. **Every minute of scene you keep is a minute you are claiming carries the change.**

:::reveal Your proposal said the film was about a woman winning a campaign. Two years in, she lost. What are your options, and which is the dishonest one? ||| The honest options are that the film is now about the attempt, the cost, or what losing revealed, all of which are real films with real changes. The dishonest one is keeping the original shape and cutting toward an implied triumph, using a hopeful ending or selective framing to leave the viewer with a false impression while every shot remains genuine. The rule is that you may change what you think the story is; you may not change what happened to fit the plan you arrived with.

## Sources
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.
- Rabiger, M. (2015). *Directing the documentary* (6th ed.). Focal Press.`,
    },
    {
      slug: "doc-quiz-1",
      title: "4 · Knowledge check: the form",
      section: "Module 1 · The form",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What claim does every documentary make before a word is spoken?",
            options: [
              "This is about the actual world, and what you are seeing happened",
              "This account is objective and free of the maker's perspective",
              "Every participant has approved the finished film",
              "The events shown are presented in the order they occurred",
            ],
            correctIndex: 0,
            explanation:
              "That claim is the form's power and its liability. It is not a claim of objectivity: a documentary is an argument made of evidence, which is a defensible thing to be.",
            sourceLessonSlug: "doc-what-it-claims",
          },
          {
            prompt: "In Nichols' terms, what does the observational mode implicitly promise?",
            options: [
              "That the maker will explain what the material means",
              "That we are not intervening and you see it as it was",
              "That the film shows how it was made, including its limits",
              "That this is the maker's personal experience of the subject",
            ],
            correctIndex: 1,
            explanation:
              "Choosing a mode is choosing a promise, and most documentary dishonesty is a broken one, such as an observational film that was in fact heavily staged.",
            sourceLessonSlug: "doc-what-it-claims",
          },
          {
            prompt: "How does documentary consent differ from a news interview's?",
            options: [
              "It must be given in writing rather than verbally",
              "It covers only the footage shot on the day it was signed",
              "It is consent for a relationship that has not happened yet",
              "It can be withdrawn at any point before broadcast",
            ],
            correctIndex: 2,
            explanation:
              "A participant agreeing in March cannot know what the film will be in November, because the maker does not know either. That gap is where documentary ethics live.",
            sourceLessonSlug: "doc-consent-over-time",
          },
          {
            prompt: "What is the relationship between a signed release and ethical conduct?",
            options: [
              "A release settles the ethics as well as the law",
              "A release is unnecessary if the participant is filmed in public",
              "A release transfers ethical responsibility to the participant",
              "A release protects you; it does not make a thing right",
            ],
            correctIndex: 3,
            explanation:
              "Conflating the legal and ethical positions is how makers get into trouble with a signed release in hand. The Honest Truths study found practitioners routinely navigating exactly that gap.",
            sourceLessonSlug: "doc-consent-over-time",
          },
          {
            prompt: "What should a maker do when a minor participant becomes central to the film?",
            options: [
              "Tell them they have become central and explain the film's direction",
              "Rely on the original release, which covers all use of the footage",
              "Reduce their role so the original consent still describes the film",
              "Wait until the edit is locked, then seek an additional release",
            ],
            correctIndex: 0,
            explanation:
              "Consent works as a process rather than an event, and this is the moment it matters most, since becoming the spine is the change nobody could anticipate at signing.",
            sourceLessonSlug: "doc-consent-over-time",
          },
          {
            prompt: "What is the discipline that keeps a changing documentary honest?",
            options: [
              "Stick to the proposal, since funders approved that version",
              "You may change what you think the story is, not what happened",
              "Film only what was described in the original treatment",
              "Include all material so the viewer can judge for themselves",
            ],
            correctIndex: 1,
            explanation:
              "Being wrong about the proposal is not a failure. Bending the evidence toward the plan you arrived with is the failure.",
            sourceLessonSlug: "doc-structure-from-material",
          },
          {
            prompt: "What is the most common structural dishonesty in documentary?",
            options: [
              "Using narration where observational footage would suffice",
              "Filming participants without disclosing the camera",
              "Turning a story of a failed attempt into a triumph in the edit",
              "Interviewing subjects more than once about the same events",
            ],
            correctIndex: 2,
            explanation:
              "A film about someone who tried and did not succeed is a real film with a real change. Reshaping it toward victory leaves a false impression while every shot remains genuine.",
            sourceLessonSlug: "doc-structure-from-material",
          },
          {
            prompt: "Why is 'most footage' a poor guide to who the owner is?",
            options: [
              "Footage volume reflects access, not whose change the film follows",
              "Participants with the most footage usually withdraw consent",
              "Editors prefer to distribute screen time evenly among subjects",
              "The owner should always be the person interviewed last",
            ],
            correctIndex: 0,
            explanation:
              "Confusing the two produces a film that feels unbalanced without a viewer being able to say why. It is the same owner problem as news, one rung harder because you have material on everybody.",
            sourceLessonSlug: "doc-structure-from-material",
          },
          {
            prompt: "What does documentary do better than any other form, per this course?",
            options: [
              "Present statistical evidence in an accessible way",
              "Film change actually occurring rather than reconstructing it",
              "Reach audiences who do not read long-form journalism",
              "Represent multiple conflicting viewpoints simultaneously",
            ],
            correctIndex: 1,
            explanation:
              "Which is why the practical craft is anticipating: experienced makers over-film around expected turning points and accept the waste, because a missed turn cannot be recovered.",
            sourceLessonSlug: "doc-structure-from-material",
          },
          {
            prompt: "In documentary, what does keeping a scene rather than summarising claim?",
            options: [
              "That the footage is of unusually high technical quality",
              "That the participant specifically asked for it to be included",
              "That it was the most expensive material to obtain",
              "That this passage carries the change",
            ],
            correctIndex: 3,
            explanation:
              "Summary in documentary is narration, montage or a title card. With hundreds of hours cut to ninety minutes, every retained scene is an argument about what mattered.",
            sourceLessonSlug: "doc-structure-from-material",
          },
        ],
      },
    },
    {
      slug: "doc-interviewing",
      title: "5 · Interviewing at depth, and the uses of silence",
      section: "Module 2 · Practice",
      recallContent: [
        {
          prompt: "State the three stages of what a documentary is about, and the rule that governs moving between them.",
          answer:
            "What you thought it was about (the proposal), what you have (discovered in the edit), and what it is about (argued from the material that exists). The rule: you may change what you think the story is, but you may not change what happened to fit it.",
        },
      ],
      body: `A documentary interview is not a news interview conducted for longer. **News asks questions to obtain answers. Documentary asks questions to obtain a person**, and the techniques diverge accordingly.

**Setup decisions that change what you get**

- **Where.** Somewhere they are comfortable and that means something. A kitchen tells you more than a hired studio, and it also relaxes them, which matters more.
- **Who is in the room.** Fewer people, always. A spouse present changes every answer about a marriage.
- **Where you sit.** Beside the lens rather than far off it, so their eyeline reads as engaged rather than evasive.
- **How long you have.** Say it up front, and make it longer than you need. **People say the true thing in the second hour**, and a subject watching the clock says the rehearsed version.

**Question design**

- **Open, and one at a time.** Double questions get you an answer to whichever half was easier.
- **Ask for scenes, not summaries.** "What was that day like?" produces a position. **"Walk me through that morning"** produces material, and the difference is the same scene-versus-summary distinction from How Stories Work.
- **Ask the obvious thing.** Interviewers skip it out of embarrassment and it is frequently what an audience most wants asked.
- **Ask them to say it as a statement**, since your question may not be in the film. "Tell me in a full sentence" is a normal request and saves the edit.

**Silence is the technique.** After an answer, do not speak. Two or three seconds is intolerable to the person answering, and they will fill it, and **what they add is very often the part you use.** This is the single highest-yield interviewing habit and it takes practice because it feels rude.

**The hard question, and where to put it.** Late, once you have a relationship, and asked plainly rather than sidled up to. **Softening a difficult question insults the person more than asking it directly**, because they can tell you are managing them. Ask, then be silent, and let them decide how much to say.

**What not to do**

- **Do not lead.** "You must have felt betrayed" hands them an emotion and you will never know what they actually felt.
- **Do not perform sympathy you do not have.** People detect it, and it costs you the second hour.
- **Do not promise a portrayal.** You cannot know, and a promise you break here is the one they will remember.

**And the thing worth saying about ethics in the room.** A skilled interviewer can get almost anyone to say more than they intended. **That skill is a responsibility rather than a trophy.** The question to hold is not "can I get them to say it" but "will they be glad, in five years, that I did."

:::reveal Why is silence after an answer the highest-yield interviewing habit, and why is it hard? ||| Because two or three seconds of silence is intolerable to the person who has just answered, so they fill it, and what they add is usually less rehearsed and more specific than the answer itself. It is hard because it feels rude to the interviewer, whose instinct is to acknowledge or move on, and because the discomfort is felt most sharply by the person who is not the one speaking. Learning to hold it is largely learning to tolerate your own discomfort rather than any technique about questions.

## Sources
- Rabiger, M. (2015). *Directing the documentary* (6th ed.). Focal Press.
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.`,
    },
    {
      slug: "doc-the-edit",
      title: "6 · The ethics of the edit",
      section: "Module 2 · Practice",
      body: `**Every documentary is shaped. The question is never whether, it is how**, and pretending otherwise is the least honest position available.

**What editing legitimately does:** compresses time, orders material for comprehension, removes the tedious, juxtaposes to make an argument. **All of that is the select-and-arrange permission**, and a documentary that refused it would be unwatchable footage rather than a purer film.

**Where it crosses**, and each of these can be done with entirely genuine footage:

**1. The false chronology.** Cutting two events together so a viewer infers a sequence that did not occur. The material is real; the implied causation is invented.

**2. The frankenbite.** Assembling a sentence from words spoken at different times. **Standard in some television and indefensible as documentary**: it puts words in a real mouth, which is the line the whole True track shares.

**3. The reaction transplant.** A cutaway of someone nodding, shot at another moment, placed to imply a response they did not give. Extremely common and almost never disclosed.

**4. The absent context.** A speaker's qualification removed so their claim reads as more absolute than they made it. **No sentence is falsified and the meaning is inverted.**

**5. The music that argues.** A score telling the audience how to feel about someone whose actions do not support it. Not forbidden, and it should be a decision you can defend rather than a default.

**The test that resolves most cases**, and it is the same as the news one: **am I selecting and arranging, or am I supplying?** A cut that removes a boring minute is arranging. A cut that manufactures a causal link is supplying.

**The second test, for the cases the first does not settle:** would the participant recognize the person on screen as themselves? Not "would they like it." Recognize.

**On reenactment.** Legitimate and long-established, and its honesty lives entirely in the **signalling**. A reenactment a viewer might mistake for actual footage is a deception whatever the intent. Visual grammar, an on-screen note, or a narration line all work; **choosing none is choosing to mislead.**

**On archive.** Same principle. Footage used to illustrate a general point must not read as the specific event under discussion. **Label it.**

**The honest framing to carry out of this lesson.** The Honest Truths study found makers describing exactly these dilemmas as the daily substance of the work rather than as rare crises (Aufderheide, Jaszi, & Chandra, 2009). **A maker who reports never facing an ethical decision in an edit is a maker not noticing them.**

:::reveal A frankenbite uses only words the person actually said. Why is it indefensible in documentary? ||| Because the sentence assembled is one they never said, so it puts words in a real mouth, which is the line every form in the True track shares. Using genuine fragments does not help: the meaning of a sentence is a property of the whole utterance, so a constructed sentence is a new claim attributed to a real person. It fails the supplying test, and it also fails the second test, since the speaker would not recognize the statement as something they said.

## Sources
- Aufderheide, P., Jaszi, P., & Chandra, M. (2009). *Honest truths: Documentary filmmakers on ethical challenges in their work*. Center for Social Media, American University.
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.`,
    },
    {
      slug: "doc-who-its-for",
      title: "7 · Funders, participants, audiences, and who the film is finally for",
      section: "Module 2 · Practice",
      body: `Three parties want something from your film and they do not want the same thing. **Pretending the tension does not exist is how makers end up serving whichever one is loudest.**

**The funder** wants the film they commissioned, delivered, on time, matching what was pitched. Sometimes they want a particular conclusion, occasionally explicitly.

**The participant** wants to be represented as they understand themselves, and frequently wants the film to help their cause.

**The audience** wants something true, and something worth their time.

**Where each pressure actually bites**

- **Funding shapes subject before it shapes content.** The commonest influence is not a funder demanding a conclusion; it is which films get made at all. Worth naming, because it is invisible in any individual project.
- **Advocacy funding is the sharpest case.** A film funded by an organization with a position is not disqualified, and it does need **disclosure**, which is cheap and protects the film's credibility more than it costs.
- **Participant pressure is strongest at the end**, when they see it. This is why the screening policy from Lesson 2 belongs at the start.
- **Audience pressure is the subtlest**: the pull toward the shape that plays well, which is usually more resolved and more triumphant than the material supports.

**The question that resolves most conflicts:** **who bears the consequences?** The funder moves on. The audience watches and moves on. **The participant lives in the town where the film is set**, with the people who will see it. That asymmetry does not mean the participant gets an editorial veto, and it does mean their interest weighs more than the other two when they conflict.

**Disclosure as the cheap general answer.** Who paid, what access was granted in exchange, whether anyone had approval rights, whether reenactment was used. **A film that says how it was made is harder to attack and easier to believe**, which is the same argument the citation work in this catalog makes.

**Distribution changes the ethics.** A film shown once at a local screening and a film permanently on a global platform are different objects with different consequences for the people in them. **The consent conversation in Lesson 2 should name the intended distribution**, and be revisited if it widens.

**And the hardest version, which has no clean answer.** Sometimes the film that serves the audience harms the participant, and both are true simultaneously. That is a real conflict rather than a puzzle with a trick solution. **What you owe in that situation is to face it deliberately, decide, and be able to say why** rather than letting the deadline decide for you.

:::reveal When a funder, a participant and an audience want different things, what question does the course use to weigh them? ||| Who bears the consequences. The funder moves on to the next project and the audience watches and moves on, but the participant continues living in the town where the film is set, among the people who will see it. That asymmetry does not give them an editorial veto, and it does mean their interest weighs more heavily than the other two when the three genuinely conflict, because they are the only party who cannot walk away from the result.

## Sources
- Aufderheide, P., Jaszi, P., & Chandra, M. (2009). *Honest truths: Documentary filmmakers on ethical challenges in their work*. Center for Social Media, American University.
- Aufderheide, P. (2007). *Documentary film: A very short introduction*. Oxford University Press.`,
    },
    {
      slug: "doc-quiz-2",
      title: "8 · Knowledge check: practice",
      section: "Module 2 · Practice",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does a documentary interview differ from a news interview?",
            options: [
              "It asks questions to obtain a person, not just answers",
              "It requires the subject to approve the questions beforehand",
              "It must be conducted in a controlled studio environment",
              "It is always conducted by the film's director personally",
            ],
            correctIndex: 0,
            explanation:
              "Which changes the setup, the question design and the pacing. People say the true thing in the second hour, so a subject watching the clock gives the rehearsed version.",
            sourceLessonSlug: "doc-interviewing",
          },
          {
            prompt: "Which question produces material rather than a position?",
            options: [
              "How did that period affect your view of the organization?",
              "Walk me through that morning",
              "Would you say you felt let down by the outcome?",
              "What would you want people to understand about this?",
            ],
            correctIndex: 1,
            explanation:
              "Asking for a scene rather than a summary is the same distinction the core course draws. The others invite a considered position, which is a conclusion rather than evidence.",
            sourceLessonSlug: "doc-interviewing",
          },
          {
            prompt: "Why does the course call silence the highest-yield interviewing habit?",
            options: [
              "It allows the camera operator to adjust framing between answers",
              "It gives the interviewer time to plan the next question",
              "It signals respect and builds rapport with the participant",
              "The subject fills it, and what they add is usually the part you use",
            ],
            correctIndex: 3,
            explanation:
              "It is hard because it feels rude, and the discomfort is felt most by the person not speaking. Learning it is mostly learning to tolerate your own discomfort.",
            sourceLessonSlug: "doc-interviewing",
          },
          {
            prompt: "What is a frankenbite, and why is it indefensible?",
            options: [
              "A sentence assembled from words said at different times, putting words in a real mouth",
              "A reenactment staged for the camera and presented without any on-screen signalling to mark it",
              "An interview conducted on a signed release that was obtained before the film changed direction",
              "A cutaway of the interviewer listening, inserted to disguise a cut inside one long answer",
            ],
            correctIndex: 0,
            explanation:
              "Using genuine fragments does not help, since meaning is a property of the whole utterance. It fails the supplying test and the recognition test at once.",
            sourceLessonSlug: "doc-the-edit",
          },
          {
            prompt: "What makes a reenactment honest?",
            options: [
              "Casting actors who resemble the real participants closely enough to be mistaken for them",
              "Signalling it clearly enough that no viewer mistakes it for actual footage",
              "Restricting it strictly to events for which no photographic or archive footage survives",
              "Obtaining every surviving participant's written approval of the staged version before release",
            ],
            correctIndex: 1,
            explanation:
              "Visual grammar, an on-screen note or a narration line all work. Choosing none of them is choosing to mislead, whatever the intent.",
            sourceLessonSlug: "doc-the-edit",
          },
          {
            prompt: "Which editing move can invert meaning without falsifying a single sentence?",
            options: [
              "Compressing a long meeting into a two-minute sequence",
              "Reordering material for comprehension rather than chronology",
              "Removing a speaker's qualification so a claim reads as absolute",
              "Cutting away to establish the location of an interview",
            ],
            correctIndex: 2,
            explanation:
              "The absent context. No sentence is falsified and the meaning changes, which is why the ethics of the form are about selection rather than fabrication.",
            sourceLessonSlug: "doc-the-edit",
          },
          {
            prompt: "What is the second test, for cases the selecting-versus-supplying test does not settle?",
            options: [
              "Would a lawyer approve the sequence before broadcast?",
              "Would the funder consider it consistent with the commission?",
              "Would another documentary maker have made the same cut?",
              "Would the participant recognize the person on screen as themselves?",
            ],
            correctIndex: 3,
            explanation:
              "Recognize, not like. It is a test about accuracy of representation rather than about whether the portrayal is flattering.",
            sourceLessonSlug: "doc-the-edit",
          },
          {
            prompt: "Where does funding most commonly influence documentary?",
            options: [
              "In which films get made at all, rather than in their conclusions",
              "In the choice of interview locations, technical crew and delivery format for the finished film",
              "In demanding that the final cut reach a specific conclusion the commission named in advance",
              "In requiring every participant to sign an additional release naming the funder by name",
            ],
            correctIndex: 0,
            explanation:
              "It shapes subject before it shapes content, which is worth naming precisely because it is invisible within any individual project.",
            sourceLessonSlug: "doc-who-its-for",
          },
          {
            prompt: "How should a film funded by an organisation with a position handle that?",
            options: [
              "Decline the funding, since advocacy money disqualifies the film",
              "Disclose it, which costs little and protects credibility",
              "Disclose only if a viewer asks after a screening",
              "Balance it by seeking funding from an opposing organization",
            ],
            correctIndex: 1,
            explanation:
              "Advocacy funding is not disqualifying. A film that says how it was made is harder to attack and easier to believe, which is the same argument the catalog's citation work makes.",
            sourceLessonSlug: "doc-who-its-for",
          },
          {
            prompt: "Why does distribution change the ethics of a film?",
            options: [
              "Wider distribution requires additional music, archive and location clearances before release",
              "Platforms impose their own editorial standards, which override the maker's judgment on the cut",
              "A local screening and a permanent global platform have different consequences for participants",
              "Audiences in different territories interpret the same material differently, changing its meaning",
            ],
            correctIndex: 2,
            explanation:
              "The consent conversation should name the intended distribution and be revisited if it widens, because permanence and reach are exactly what participants have no model for.",
            sourceLessonSlug: "doc-who-its-for",
          },
        ],
      },
    },
    {
      slug: "doc-capstone",
      title: "9 · Capstone: a treatment, and an ethics plan",
      section: "Module 3 · Close",
      lessonType: "assignment",
      body: `You are not being asked to make a documentary. **You are being asked to plan one to the standard that would let you make it honestly**, which is the part most first films skip.

**Choose a real subject you could actually access.** Someone or something within reach: a local organization, a person you know who has a story, an event you could attend repeatedly. **Not a famous subject you have no route to**, because the access plan is half the assignment.

**What to submit.**

**1. The subject, in two sentences**, and why you.

**2. Your best guess at the six**, clearly labeled as a guess: the change you expect, the likely owner, want and obstacle, what you would withhold, and where the turn might be. **Then a paragraph on what you would do if the material contradicted every one of them.**

**3. The mode, and the promise it makes.** Which of Nichols' modes, and what that implicitly promises a viewer. Then: what would break that promise, in your specific film?

**4. The access plan.** Who must agree, what you would tell them, and in what order. **Include the words you would actually use** to explain permanence and reach to someone who has never been filmed.

**5. Your consent process**, not just a form. When would you revisit it? What triggers a fresh conversation? What is your screening policy, and when will you tell them?

**6. The ethics pre-mortem.** Name three specific ways this film could harm your participant. Not generic risks: **specific to this person and this subject.** For each, what would you do?

**7. The conflict you can already see.** Where would the funder, the participant and the audience want different things here? Say who bears the consequences, and what you would decide.

**8. What would make you not make it.** A real answer. **"Nothing" is not one**, and a maker who cannot name their own stopping condition has not found it yet, which means they will discover it under pressure.

**What a strong submission looks like.** Specific rather than principled: real names, real access routes, real language you would use. **The ethics pre-mortem is the section that separates a plan from a wish**, and a submission that names a genuine reason to abandon the project scores higher than one that cannot imagine one.`,
    },
    {
      slug: "doc-review-and-sources",
      title: "10 · Cumulative review and sources",
      section: "Module 3 · Close",
      body: `**A documentary claims that this is about the actual world and that what you are seeing happened.** Not that it is objective. It is an argument made of evidence, which is a defensible thing to be.

**Choosing a mode is choosing a promise.** Observational promises non-intervention; expository promises interpretation; performative promises the maker's experience. **Most documentary dishonesty is a broken promise rather than a false statement.**

**Consent is a process, not an event.** A release protects you; it does not make a thing right. Explain again at intervals, say when someone becomes central, be specific about permanence, and name the intended distribution.

**Structure is found, not scripted.** You may change what you think the story is. You may not change what happened. Turning a failed attempt into a triumph in the edit is the form's commonest structural dishonesty.

**Most footage does not mean owner.** And documentary's unique advantage is filming change as it occurs, which means anticipating and over-filming around expected turns.

**Interview to obtain a person.** Ask for scenes rather than summaries, ask the obvious question, ask for full sentences, and use silence. People say the true thing in the second hour.

**Every film is shaped; the question is how.** The tests: am I selecting and arranging or supplying, and would the participant recognize themselves? **The frankenbite, the false chronology, the reaction transplant and the absent context all use genuine footage and all cross the line.**

**Signal reenactment and archive.** Choosing not to is choosing to mislead.

**When the funder, participant and audience conflict, ask who bears the consequences.** The participant is the only one who cannot walk away. Disclose how the film was made.

:::reveal Without looking back, name the two tests for an editing decision and one move that fails both. ||| Am I selecting and arranging, or supplying? And would the participant recognize the person on screen as themselves? The frankenbite fails both: assembling a sentence from words spoken at different times supplies a statement that was never made, and the speaker would not recognize it as something they said. The same pair catches the false chronology, the reaction transplant and the removed qualification, all of which use entirely genuine footage.

## Sources
- Aufderheide, P. (2007). *Documentary film: A very short introduction*. Oxford University Press.
- Aufderheide, P., Jaszi, P., & Chandra, M. (2009). *Honest truths: Documentary filmmakers on ethical challenges in their work*. Center for Social Media, American University.
- Nichols, B. (2017). *Introduction to documentary* (3rd ed.). Indiana University Press.
- Rabiger, M. (2015). *Directing the documentary* (6th ed.). Focal Press.`,
    },
  ],
};
