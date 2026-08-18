// Authored "Monodrama II: Performing the Solo Piece" — course #2 of the Storytelling series
// (docs/storytelling-curriculum.md). Takes the draft written in Monodrama I and puts it on its feet.
//
// THE SPINE VOCABULARY IS FIXED AND THIS COURSE MAY NOT INVENT SYNONYMS: the change, the owner, want
// and obstacle, withholding, scene and summary, the turn. Performance vocabulary (objective, action,
// beat) is named and mapped back rather than substituted, which is the constraint that lets the core
// course be written last without retrofitting.
//
// SOURCING: real practitioners and real books, cited APA 7. Stanislavski for objectives and actions,
// Chekhov for the psychological gesture, Brook for the empty space, Bogart and Landau for
// Viewpoints, Linklater for voice, Johnstone for status. Every technique named is one a reader can
// look up and study further, and no exercise is attributed to a practitioner who did not teach it.
//
// SAFETY IS TREATED AS CRAFT, NOT AS A DISCLAIMER. Solo performers rehearse alone, often with
// autobiographical material, with nobody in the room to notice distress. Lesson 11 is about that and
// it is not optional.

import type { AuthoredCourse } from "./authored-course";

export const MONODRAMA_PERFORMING_COURSE: AuthoredCourse = {
  title: "Monodrama II: Performing the Solo Piece",
  description:
    "You have a draft. Now you have to stand up. This course takes a solo script onto its feet: direct address as a physical problem rather than a literary one, how one body builds a place with no set, what an audience does to a piece that a room alone never reveals, objectives and actions as tools for finding what a line is DOING, status and the psychological gesture, voice and breath for sixty minutes of speaking, memorisation that survives nerves, how to rehearse alone without going stale or going numb, the technical minimum for lights and sound when you are also the operator, and how to take a piece in front of people and change it afterwards. Includes the safety practice that solo autobiographical work requires and that nobody warns performers about. Part two of two: Monodrama I writes the draft.",
  lessons: [
    // ══════════════ MODULE 1 · FROM PAGE TO ROOM ══════════════
    {
      slug: "mono2-what-changes",
      title: "1 · What changes the moment you stand up",
      section: "Module 1 · From page to room",
      body: `A solo script is not finished when the draft is good. It is finished when it survives a body, a room, and a hundred strangers, and those three things will tell you different truths than the page did.

**What standing up reveals that reading never does**

- **Where you run out of breath.** A sentence that reads beautifully can be unspeakable. You will find these in the first five minutes and they are among the easiest fixes available.
- **Where the transitions have no physical logic.** On the page you moved from the hospital to the kitchen. In the room, your body has to do something, and if it does not, the audience sees a person standing still saying different words.
- **How long it actually is.** Always longer than you think. Reading in your head runs faster than speaking with pauses an audience needs.
- **Which passages you are bored by.** You will feel it in your own body before an audience feels it. That boredom is diagnostic and worth trusting.
- **Where you were hiding.** A piece of writing can be evasive and still be elegant. Saying it aloud, alone, exposes the evasion, because you can hear yourself skating.

**The single most useful thing in this course**, and you can do it today: **read the whole piece aloud, standing, in one go, timed.** Not at a desk. Not in sections. The whole thing, on your feet. Almost everything else here is a refinement of what that reveals.

**What this course assumes.** That you have a draft from Monodrama I or its equivalent: a change, an owner, a defined listener, a turn. If you do not, performance work will not rescue it, and the honest advice is to go back. **A well-performed piece with no change is a well-performed anecdote.**

**What this course does not claim.** It will not make you an actor. Acting training is years and this is not a substitute for it. What it will do is give you the specific subset of performance craft that a solo piece demands, which is a narrower and more learnable thing than acting in general: one body, direct address, no scene partner, and text you wrote yourself.

**And that last part is the hidden difficulty.** Performing your own words is harder than performing someone else's, because you cannot hide behind a character and because you already know what everything means. Lesson 4 is entirely about that problem.

:::reveal Name three things a standing, timed, out-loud read reveals that reading on the page cannot. ||| Where you run out of breath, because a sentence that reads well may be unspeakable. Where transitions have no physical logic, because your body has to do something to move between places and standing still just looks like standing still. And how long it actually is, which is always longer than reading in your head suggests. It also exposes which passages bore you and where the writing was being evasive, both of which you feel in your own body before an audience does.

## Sources
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.`,
    },
    {
      slug: "mono2-direct-address",
      title: "2 · Direct address as a physical problem",
      section: "Module 1 · From page to room",
      recallContent: [
        {
          prompt: "What does Monodrama I say a piece must have before performance work can help it?",
          answer:
            "A change, an owner, a defined listener and a turn. Performance craft cannot rescue a piece with no change; a well-performed piece with no change is a well-performed anecdote, and the honest move is to go back to the draft.",
        },
      ],
      body: `In Monodrama I you decided **who the audience is to your speaker**. That was a writing decision. Now it becomes a physical one, and the physical version is harder because the audience is actually there.

**The problem nobody warns you about:** you can decide your speaker is talking to a jury, and then walk on stage and talk to nobody, because looking at real people is frightening and the eyes slide off. **Audiences read that instantly** even when they cannot name it. The piece feels like it is happening near them rather than to them.

**What to actually do with your eyes.** Not "make eye contact," which is advice that produces either a stare or a scan.

- **Land, do not sweep.** Rest on one person for a thought, then move on the next thought. A sweep reads as nervous; a landing reads as speaking to someone.
- **Give different sections different regions** of the room, so the address has geography.
- **Let some lines go nowhere.** A thought genuinely turned inward should not be aimed at anybody. That contrast is what makes the aimed lines land.

**Matching the address you wrote.** Each choice from Monodrama I has a physical consequence:

| The audience is... | What your body does |
| --- | --- |
| Overhearing | You do not see them. The fourth wall is real and you work behind it |
| A specific person | You cast them. Decide where that person is, and be consistent all evening |
| A general listener | You use the whole room, landing on individuals |
| Themselves | Your focus is internal, and any address outward is a rupture |
| A crowd with a job | You genuinely see them, wait for them, and respond to what they do |

**The rupture is a technique**, not an accident. A performer who has held the fourth wall for forty minutes and then looks straight at one person will get a bigger reaction from that one look than from any line. It works exactly once and it should be placed on purpose, usually at or just after the turn.

**A practical rehearsal problem.** You cannot rehearse this alone, because the whole skill is what real eyes do to you. Substitutes, in ascending order of usefulness: objects at eye height around the room; photographs of faces; one friend; three friends; anybody. **Get one human in the room before you perform**, even for ten minutes.

:::reveal You have held the fourth wall all evening and want to break it once. Where should it go, and why does the placement matter more than the delivery? ||| At or just after the turn, the moment the change becomes irreversible. The break works because the FORM changes, not because of anything in the line, so its power comes from everything before it having been consistent. Placed early it is just a stylistic inconsistency the audience has to absorb; placed at the turn it makes the audience complicit at exactly the moment the story stops being reversible. And it works once.

## Sources
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.
- Johnstone, K. (1979). *Impro: Improvisation and the theatre*. Faber & Faber.`,
    },
    {
      slug: "mono2-one-body-many-places",
      title: "3 · One body, many places and people",
      section: "Module 1 · From page to room",
      body: `In Monodrama I you learned that a named detail beats a built set, because the audience constructs the rest. On your feet, **your body is the other half of that construction**, and it is more precise than language.

**Place, built physically.** The audience learns a room's dimensions from what you do, not what you say.

- **Reach for a shelf** and the ceiling exists.
- **Step around something** twice, in the same spot, and there is furniture there.
- **Change how you stand** and the floor changes: a slight brace reads as a bus, a lowered center reads as a boat.

**The rule that makes it work is consistency.** If the door is stage left, it is stage left all evening. **Audiences track invisible geography with startling accuracy** and lose trust the moment it moves. The most common failure in solo work is a set that drifts, and the performer is always the last to notice.

**Playing more than one person.** A solo piece often needs other characters. Three approaches, in ascending order of difficulty:

1. **Report them.** "He said he wasn't coming." Simplest, and often correct.
2. **Indicate them.** A shift in posture, a change of vocal placement, a turn of the head to a fixed spot. Enough for the audience to know who is talking without you impersonating anyone.
3. **Embody them.** Full transformation, as Anna Deavere Smith does in *Fires in the Mirror* (1992), where she performs interview subjects closely including their hesitations.

**Choose the lightest one that does the job.** Beginning performers reach for embodiment because it feels like acting, and it is the one most likely to look like impression comedy. Indication carries almost as much and costs almost nothing.

**The fixed-point technique**, which is the most useful single tool here: give each character a fixed position in space and always turn to that spot when they speak. The audience learns the map within two exchanges and can then follow a four-person conversation performed by one body. **Break the map and the scene becomes incomprehensible immediately.**

**Objects that are not there.** Pick a small number and be exact with them. An imaginary cup that changes size is worse than no cup. Fewer, more precise, and let language carry the rest.

:::reveal You are performing a conversation between three people. What single technique makes it followable, and what happens if you are inconsistent with it? ||| Give each character a fixed point in space and always turn to that spot when they speak. The audience learns the map within about two exchanges and can then track a multi-person scene performed by one body. If the positions drift, the audience loses the map immediately and the scene becomes incomprehensible, and because they are tracking it unconsciously they will not be able to tell you what went wrong, only that they stopped following.

## Sources
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Chekhov, M. (1953). *To the actor: On the technique of acting*. Harper & Brothers.`,
    },
    {
      slug: "mono2-quiz-1",
      title: "4 · Knowledge check: from page to room",
      section: "Module 1 · From page to room",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the course call the single most useful exercise, available immediately?",
            options: [
              "Reading the whole piece aloud, standing, in one go, timed",
              "Memorising the opening five minutes word for word",
              "Recording a video of yourself and watching it back",
              "Performing the first draft to a friend for feedback",
            ],
            correctIndex: 0,
            explanation:
              "Not at a desk and not in sections. It reveals breath, transitions with no physical logic, true runtime, and which passages bore you, all of which are invisible on the page.",
            sourceLessonSlug: "mono2-what-changes",
          },
          {
            prompt: "What is wrong with the instruction to 'make eye contact' with an audience?",
            options: [
              "Audiences prefer performers who avoid looking at them directly",
              "It produces either a fixed stare or a nervous scan",
              "It is only appropriate when the fourth wall has been broken",
              "It distracts the performer from remembering their lines",
            ],
            correctIndex: 1,
            explanation:
              "The usable version is to land on one person for a thought and move on the next. A sweep reads as nervous; a landing reads as speaking to someone.",
            sourceLessonSlug: "mono2-direct-address",
          },
          {
            prompt: "When should a performer break a fourth wall they have held all evening?",
            options: [
              "In the opening minutes, to establish the relationship early",
              "Whenever the audience seems to be losing attention",
              "At or just after the turn, and only once",
              "At the curtain call, once the piece has ended",
            ],
            correctIndex: 2,
            explanation:
              "It works because the form changes, so its power depends on everything before it having been consistent. Placed at the turn it makes the audience complicit exactly when the story stops being reversible.",
            sourceLessonSlug: "mono2-direct-address",
          },
          {
            prompt: "What makes an invisible set work?",
            options: [
              "Describing each location in detail before entering it",
              "Using lighting changes to mark every location shift",
              "Keeping the number of locations to no more than two",
              "Consistency: if the door is stage left, it stays stage left",
            ],
            correctIndex: 3,
            explanation:
              "Audiences track invisible geography with startling accuracy and lose trust the moment it moves. A drifting set is the commonest failure in solo work, and the performer is always the last to notice.",
            sourceLessonSlug: "mono2-one-body-many-places",
          },
          {
            prompt: "Which approach to playing another character should a performer reach for first?",
            options: [
              "Reporting them, then indicating them, and embodying only if needed",
              "Full embodiment, since it demonstrates the most skill",
              "Costume changes, which signal the shift most clearly",
              "Recorded voiceover, so the performer stays in one role",
            ],
            correctIndex: 0,
            explanation:
              "Choose the lightest option that does the job. Beginners reach for embodiment because it feels like acting, and it is the version most likely to look like impression comedy.",
            sourceLessonSlug: "mono2-one-body-many-places",
          },
          {
            prompt: "What is the fixed-point technique for?",
            options: [
              "Marking where the performer stands during the opening",
              "Making a multi-person conversation followable by one body",
              "Keeping the performer's weight balanced during long speeches",
              "Indicating the passage of time between two scenes",
            ],
            correctIndex: 1,
            explanation:
              "Each character gets a position in space and the performer turns to that spot when they speak. The audience learns the map in about two exchanges, and breaking it makes the scene incomprehensible at once.",
            sourceLessonSlug: "mono2-one-body-many-places",
          },
          {
            prompt: "Why is performing your own words harder than performing someone else's?",
            options: [
              "Self-written text is usually less well structured",
              "Copyright makes rehearsal of original work more complex",
              "You cannot hide behind a character, and you already know what it means",
              "Audiences judge original work more harshly than established plays",
            ],
            correctIndex: 2,
            explanation:
              "Both halves cause problems: there is no character to shelter behind, and knowing what everything means makes it easy to skate over lines the audience is hearing for the first time.",
            sourceLessonSlug: "mono2-what-changes",
          },
          {
            prompt: "What does the course say about rehearsing direct address alone?",
            options: [
              "It is impossible, so direct address should be avoided entirely",
              "It works fine, since the skill is purely technical",
              "Solo rehearsal is preferable because it removes distraction",
              "You cannot fully rehearse it; get at least one human in the room",
            ],
            correctIndex: 3,
            explanation:
              "The skill is what real eyes do to you. Objects at eye height and photographs are substitutes; one friend for ten minutes is worth more than hours alone.",
            sourceLessonSlug: "mono2-direct-address",
          },
          {
            prompt: "Which claim does this course explicitly NOT make?",
            options: [
              "That it will make you an actor",
              "That standing up reveals problems the page hides",
              "That consistency makes an invisible set work",
              "That your body helps construct place for the audience",
            ],
            correctIndex: 0,
            explanation:
              "Acting training takes years and this is not a substitute. What it teaches is the narrower subset a solo piece demands: one body, direct address, no scene partner, and text you wrote.",
            sourceLessonSlug: "mono2-what-changes",
          },
          {
            prompt: "What is the guidance on imaginary objects?",
            options: [
              "Use as many as possible to enrich the invisible world",
              "Pick a small number and be exact; an inconsistent object is worse than none",
              "Avoid them completely and let language do all the work",
              "Replace them with real props wherever the budget allows",
            ],
            correctIndex: 1,
            explanation:
              "An imaginary cup that changes size is worse than no cup, because it actively breaks the audience's trust in the invisible world you are asking them to build.",
            sourceLessonSlug: "mono2-one-body-many-places",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE PERFORMANCE ══════════════
    {
      slug: "mono2-objectives-and-actions",
      title: "5 · What is this line DOING?",
      section: "Module 2 · The performance",
      recallContent: [
        {
          prompt: "Name the three ways of playing another character, in the order the course recommends reaching for them.",
          answer:
            "Report them (simplest, often correct), indicate them (a shift in posture, vocal placement or a turn to a fixed spot), and embody them (full transformation). Choose the lightest one that does the job; beginners over-reach for embodiment because it feels like acting.",
        },
      ],
      body: `The most common note a solo performer gets is that a section is "flat." Almost always the cause is the same: the performer is **saying** the lines rather than **doing** something with them.

**The tool that fixes it** comes from Stanislavski and has been restated by nearly everyone since: a character always wants something, and every line is an attempt to get it. The useful working version is two questions per section.

1. **What do I want here?** Stated as something another person can give or withhold. Not "to remember my mother." Rather: "to make them understand she was not the woman they think."
2. **What am I doing to get it?** An active verb: to accuse, to seduce, to confess, to defend, to warn, to plead. **Not to describe.**

That second one is the whole technique. A verb like "to accuse" changes your voice, your posture and your timing without you managing any of them. A performer thinking "now I describe the funeral" produces exactly what it sounds like.

**How this maps onto the series vocabulary**, because this course may not invent synonyms. What acting calls an **objective** is the speaker's **want** made specific to one section. What it calls an **action** is how they pursue it in this moment. The **obstacle** is what makes it hard. Same three ideas from Monodrama I, now applied line by line rather than to the whole piece.

**Changing the verb is the fastest fix in performance.** A passage that will not come alive is usually one where you have not chosen a verb, or have chosen a weak one. Try three different ones on the same lines and the difference will be obvious to anyone in the room.

**Status, which is a separate lever.** Keith Johnstone's *Impro* (1979) treats status as something played rather than possessed: raising or lowering yourself relative to whoever you are speaking to. In a solo piece your status relative to the AUDIENCE is a live choice and most performers never make it. Are you above them, confiding downward? Below them, explaining yourself? Level? **Changing it mid-piece is one of the strongest available effects**, and a piece played at one status for an hour will feel monotonous no matter how good the writing is.

**The psychological gesture.** Michael Chekhov's technique (1953): find one physical gesture that embodies the whole want of a section, practice it fully, then shrink it until it is invisible and lives underneath the speaking. It sounds mystical and is intensely practical, and it is the best tool available for a section you understand intellectually but cannot make land.

:::reveal A section is flat. You understand it and you have rehearsed it. What are the two questions to ask, and which is the more common failure? ||| What do I want here, stated as something another person could give or withhold, and what am I DOING to get it, stated as an active verb. The verb is the more common failure: a performer who has not chosen one defaults to describing, and describing is exactly what flat sounds like. Trying three different verbs on the same lines produces an audible difference immediately, without you having to manage voice, posture or timing directly.

## Sources
- Stanislavski, C. (1936). *An actor prepares* (E. R. Hapgood, Trans.). Theatre Arts Books.
- Chekhov, M. (1953). *To the actor: On the technique of acting*. Harper & Brothers.
- Johnstone, K. (1979). *Impro: Improvisation and the theatre*. Faber & Faber.`,
    },
    {
      slug: "mono2-voice-and-breath",
      title: "6 · Voice and breath for an hour of speaking",
      section: "Module 2 · The performance",
      body: `You are the only voice for sixty minutes with no one to hand the load to. This is an athletic problem before it is an artistic one, and performers routinely damage themselves discovering that.

**Breath is structural, not decorative.** Support comes from the diaphragm rather than the throat. The reliable test: put a hand on your belly and speak a long line. If the movement is all in your chest and shoulders, you are driving the voice from your throat, which is both weaker and how people lose their voices in week two of a run.

**The three failures of an untrained solo hour**

1. **Pushing.** Trying to be louder by forcing from the throat. Produces strain, then hoarseness, then damage. Volume comes from support and from resonance, not from effort.
2. **One-note pitch.** Nerves narrow the range, and a narrow range is monotonous whatever the material. This is the commonest reason a well-written piece feels long.
3. **Running out mid-thought.** A breath plan that works at a desk collapses when adrenaline shortens your breath.

**Mark your script for breath.** Genuinely mark it: where you breathe, and which are the long sentences you must take a full breath before. **Do this before memorizing**, because you will memorize the breathing along with the words, and retrofitting it later is much harder.

**Pace, and the pause.** Nerves speed you up, universally. Two counters that work:

- **Build in pauses you cannot skip**, tied to a physical action, so the pause is something you DO rather than something you resist.
- **Let the audience finish reacting.** Amateur performers speak over their own laughs and their own silences. **The pause after a hard line is where the audience does the work**, and cutting it short robs them of exactly what they came for.

Linklater's *Freeing the Natural Voice* (1976) is the standard reference for the underlying training, and the honest note is that voice work is a practice rather than a technique: a few weeks of daily attention gives you more than any single exercise.

**Practical care for a run.** Water rather than throat sweets, which numb you into pushing harder. Warm up before, and warm DOWN after, which almost nobody does. If you are hoarse, that is information rather than an inconvenience, and performing through it is how a temporary problem becomes a lasting one.

:::reveal Why does the course insist you mark breath BEFORE memorising rather than after? ||| Because you memorize the breathing along with the words: the pattern of where you inhale becomes part of the muscle memory of the text. Retrofitting a breath plan afterwards means fighting a habit you have already trained, which is much harder than establishing it correctly the first time. It also matters because adrenaline shortens your breath in performance, so a plan that was never deliberate will collapse exactly when you need it.

## Sources
- Linklater, K. (1976). *Freeing the natural voice*. Drama Book Specialists.
- Berry, C. (1973). *Voice and the actor*. Harrap.`,
    },
    {
      slug: "mono2-memorisation",
      title: "7 · Memorisation that survives nerves",
      section: "Module 2 · The performance",
      body: `A solo performer has no one to throw them a line. That single fact changes how you should memorize.

**Rote memorisation is the fragile kind.** Learning the text as a sequence of sounds works until adrenaline interrupts the sequence, and then there is nothing underneath it. Performers who go blank have almost always memorized words rather than structure.

**What to memorize instead, in this order:**

1. **The sequence of wants.** What you are trying to get, section by section. If you know you are trying to make them understand she was not that woman, you can find your way back to the words.
2. **The turns.** The moments where something changes. These are the load-bearing beams of the piece.
3. **The logic of transitions.** Why THIS follows THAT. Most blanks happen at seams, because a seam is where the connection was associative rather than logical.
4. **Then the words.**

**The technique that most reliably prevents blanking** is to be able to state, at any point, what the next thing you want is. A performer who knows the want can improvise back to the text. A performer who only knows the words has one route and no detour.

**Practical methods worth knowing**

- **Walk it.** Learn lines while moving through the space you will perform in. Physical memory and text memory reinforce each other, and this is why blocking helps recall rather than complicating it.
- **Learn it out of order.** Rote memory is sequential and fragile. Being able to start from any section proves you know the structure.
- **Record and listen**, but do not learn by mimicking your own recording, which teaches you a reading rather than an intention.
- **The last line of every section** is the highest-value thing to know cold, because it is the handrail into the next one.

**What to do when you blank**, decided in advance rather than in the moment:

- **Stop and breathe.** An audience reads a confident pause as intention. Two seconds is nothing.
- **Go to the want.** Say what your speaker is trying to do, in your own words if necessary. You wrote this; you can paraphrase it.
- **Do not apologize or comment.** Breaking to say "sorry" ends the piece for the audience far more completely than a pause does.

**And the reassurance that is actually true:** the audience does not know your script. A dropped sentence is invisible to everyone but you. The performances people remember as disasters are almost always ones where the performer visibly panicked, not ones where a line went missing.

:::reveal A performer goes blank mid-piece. Why does knowing the WANT rescue them where knowing the words does not? ||| Because rote memory is a single sequence: when adrenaline interrupts it, there is no alternative route and nothing underneath. Knowing what the speaker is trying to get at that moment lets you improvise your way forward in your own words and rejoin the text at the next landmark, because you wrote it and can paraphrase it. Words give you one path; intention gives you the whole map.

## Sources
- Stanislavski, C. (1936). *An actor prepares* (E. R. Hapgood, Trans.). Theatre Arts Books.
- Bogart, A., & Landau, T. (2005). *The Viewpoints book: A practical guide to Viewpoints and composition*. Theatre Communications Group.`,
    },
    {
      slug: "mono2-quiz-2",
      title: "8 · Knowledge check: the performance",
      section: "Module 2 · The performance",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "A section is flat. What is the most likely cause?",
            options: [
              "The performer has not chosen an active verb and is describing",
              "The writing needs to be cut and rewritten from scratch",
              "The performer has memorized the section too thoroughly",
              "The lighting state does not match the emotional tone",
            ],
            correctIndex: 0,
            explanation:
              "A verb like 'to accuse' changes voice, posture and timing without the performer managing any of them. 'Now I describe the funeral' produces exactly what it sounds like.",
            sourceLessonSlug: "mono2-objectives-and-actions",
          },
          {
            prompt: "How does an acting 'objective' map onto this series' vocabulary?",
            options: [
              "It is the turn, applied to a single section",
              "It is the change, restated from the performer's view",
              "It is withholding, expressed physically",
              "It is the want, made specific to one section",
            ],
            correctIndex: 3,
            explanation:
              "An action is how the speaker pursues it in the moment and the obstacle is what makes it hard. The course names the acting terms and maps them back rather than inventing synonyms.",
            sourceLessonSlug: "mono2-objectives-and-actions",
          },
          {
            prompt: "What does Johnstone's concept of status offer a solo performer?",
            options: [
              "A method for projecting the voice without strain",
              "A live choice about position relative to the audience, changeable mid-piece",
              "A way of ranking characters by social importance in the script",
              "A technique for memorizing long passages of text",
            ],
            correctIndex: 1,
            explanation:
              "Status is played rather than possessed. A piece performed at one status for an hour feels monotonous however good the writing, and changing it mid-piece is one of the strongest available effects.",
            sourceLessonSlug: "mono2-objectives-and-actions",
          },
          {
            prompt: "Where does vocal support come from?",
            options: [
              "The throat, which shapes and amplifies the sound",
              "The chest and shoulders, which drive breath upward",
              "The diaphragm, with the throat kept free",
              "The nasal cavity, which provides resonance and carry",
            ],
            correctIndex: 2,
            explanation:
              "The test is a hand on the belly during a long line. Movement confined to chest and shoulders means the voice is being driven from the throat, which is weaker and is how performers lose their voices during a run.",
            sourceLessonSlug: "mono2-voice-and-breath",
          },
          {
            prompt: "Why mark breath into the script before memorising?",
            options: [
              "Because you memorize the breathing along with the words",
              "Because breath marks help a director follow the script",
              "Because it shortens the total memorisation time required",
              "Because adrenaline makes breathing irrelevant in performance",
            ],
            correctIndex: 0,
            explanation:
              "Retrofitting a breath plan means fighting a habit you have already trained. It matters more because adrenaline shortens breath, so an unplanned pattern collapses exactly when it is needed.",
            sourceLessonSlug: "mono2-voice-and-breath",
          },
          {
            prompt: "What should be memorised first?",
            options: [
              "The opening and closing paragraphs, then the middle",
              "The words themselves, in strict sequence from the start",
              "The stage directions, so the blocking is secure",
              "The sequence of wants, then the turns, then transitions, then words",
            ],
            correctIndex: 3,
            explanation:
              "Rote memory is a single sequence with nothing underneath it when adrenaline interrupts. A performer who knows the want can improvise back to the text; one who knows only words has one route and no detour.",
            sourceLessonSlug: "mono2-memorisation",
          },
          {
            prompt: "What should a performer do when they blank?",
            options: [
              "Stop, breathe, and go to the want, without apologising",
              "Apologise briefly to the audience and restart the section",
              "Skip ahead to the next section and continue as normal",
              "Ask the technical operator to hold while they find the line",
            ],
            correctIndex: 0,
            explanation:
              "An audience reads a confident pause as intention. Breaking to apologize ends the piece for them far more completely than the pause itself does, and they do not know the script anyway.",
            sourceLessonSlug: "mono2-memorisation",
          },
          {
            prompt: "Why does the course recommend learning the piece out of order?",
            options: [
              "It makes the piece easier to rehearse in short sessions",
              "It proves structural knowledge rather than fragile sequential memory",
              "It allows sections to be cut without relearning the whole",
              "It prevents the performer from becoming bored during rehearsal",
            ],
            correctIndex: 1,
            explanation:
              "Being able to start from any section demonstrates you know the structure. Sequential memory works until it is interrupted, and then there is nothing to fall back on.",
            sourceLessonSlug: "mono2-memorisation",
          },
          {
            prompt: "What is the commonest reason a well-written piece feels long?",
            options: [
              "The script exceeds sixty minutes of running time",
              "The audience cannot follow the invisible geography",
              "The performer is speaking too quietly to be heard clearly",
              "Nerves narrow the pitch range, and a narrow range is monotonous",
            ],
            correctIndex: 3,
            explanation:
              "Range collapses under adrenaline whatever the quality of the material. It sits alongside pushing from the throat and running out of breath mid-thought as the three failures of an untrained solo hour.",
            sourceLessonSlug: "mono2-voice-and-breath",
          },
          {
            prompt: "What does the course say about the pause after a hard line?",
            options: [
              "It is where the audience does the work, and cutting it robs them",
              "It should be minimized to keep the piece moving",
              "It should be filled with a physical action to avoid dead air",
              "It matters only in comedy, where timing is structural",
            ],
            correctIndex: 0,
            explanation:
              "Amateur performers speak over their own laughs and silences because nerves speed everyone up. Building pauses into a physical action makes them something you do rather than something you resist.",
            sourceLessonSlug: "mono2-voice-and-breath",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · REHEARSAL, TECH, AUDIENCE ══════════════
    {
      slug: "mono2-rehearsing-alone",
      title: "9 · How to rehearse alone without going stale",
      section: "Module 3 · Rehearsal, tech, audience",
      recallContent: [
        {
          prompt: "State the two questions that fix a flat section, and which one performers more often skip.",
          answer:
            "What do I want here, stated as something another person could give or withhold, and what am I doing to get it, stated as an active verb. The verb is the more often skipped, and a performer without one defaults to describing, which is what flat sounds like.",
        },
      ],
      body: `Solo rehearsal has a specific failure: you get better at doing it the way you already do it. Without an outside eye, repetition entrenches rather than develops.

**The four things that substitute for a director**, roughly in order of usefulness:

1. **Recording yourself and watching it.** Uncomfortable and the fastest feedback available. Watch once for structure only (where does it sag), once with the sound off (what is your body doing), and once as audio only (what is your voice doing). **Three focused passes beat five general ones.**
2. **One trusted person, asked a narrow question.** Never "what did you think," which invites a redesign. Ask: *"Where did you stop following?"* and *"What did you think it was about?"* The same two questions Monodrama I used for readers, and they work here for the same reason.
3. **Changing one variable deliberately.** Run a section at half speed, then at double. Whisper it. Play it as though the audience is hostile. You are not looking for a new version; you are looking for what survives, which is usually the truth of it.
4. **Leaving it alone.** A piece rehearsed daily for six weeks goes numb. Two days away restores your ability to hear it.

**A rehearsal shape that works**, once you have the text: run the whole piece once at the start of a session and once at the end, and work sections in between. Whole runs are the only thing that teaches you the arc, and performers avoid them because they are tiring.

**Stale is not the same as bad.** Everything sounds flat at week four. The test is not whether you are excited by it, because you will not be, but whether the wants are still specific and the transitions still connect. **Trust the structure over your enthusiasm.**

**Numb is different and it is a warning.** If the material has stopped affecting you at all, especially if it is autobiographical, that is either protective distance doing its job or something to attend to. Lesson 11 is about that distinction, and it is not a metaphor.

**Rehearse the room, not just the piece.** Get into the actual space if you can, even for twenty minutes: sightlines, acoustics, where the light is, how far the front row is. A piece rehearsed in a bedroom and performed in a hall will be under-scaled, and you will discover it in front of people.

:::reveal Why is "I am bored of my own piece at week four" a bad reason to rewrite it? ||| Because staleness is a property of repetition rather than of the material: everything goes flat at week four, and your excitement is the one instrument that has definitely degraded. The reliable tests are structural, whether the wants are still specific and the transitions still connect, and those you can check without trusting your enthusiasm. Rewriting on boredom usually removes the parts you have heard most often, which are frequently the ones doing the most work.

## Sources
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.
- Bogart, A., & Landau, T. (2005). *The Viewpoints book: A practical guide to Viewpoints and composition*. Theatre Communications Group.`,
    },
    {
      slug: "mono2-tech-minimum",
      title: "10 · The technical minimum when you are also the operator",
      section: "Module 3 · Rehearsal, tech, audience",
      body: `Solo shows tour to rooms with no technician and a laptop. Design accordingly, and design so that failure is survivable.

**The rule that should govern every technical choice: if it breaks, can you still do the show?** A piece that cannot survive a failed sound cue is a piece that will one day not happen. Build it so every cue is an enhancement rather than a dependency.

**Lighting, in order of what actually matters**

1. **Can they see your face?** Most of the meaning in a solo show is in a face. This outranks every other lighting consideration.
2. **Is the state stable?** One good, warm, general state for the whole piece is better than six states you cannot hit reliably.
3. **Does any change mean something?** Changes should mark structure: the turn, a shift in time, the ending. **A light change that means nothing teaches the audience to ignore the next one.**

If you have one usable effect, spend it on the turn.

**Sound.** The main risks are levels and dependency. Something that sounds correct in a bedroom is often inaudible or overwhelming in a room with bodies in it, since an audience absorbs sound. **Check levels with people in the room whenever you can.** And avoid anything you must speak precisely over unless you have rehearsed it exactly as it will run.

**Operating it yourself.** If you are triggering cues, they must be at moments where a hand is free and a beat is natural. Write them into the script as blocking, not as a technical afterthought. A cue you have to reach awkwardly for will read to the audience as the performer doing admin.

**Set and props: the minimum that carries the piece.** One chair is a stage tradition because it is genuinely flexible. Every object you add is an object you must carry, place, keep track of, and reset. **Ask of each: does this do something my body cannot do?** Usually the answer is no.

**Costume.** One thing you can stand in for an hour, that does not restrict breath, that you are not managing. If a character change is signalled by clothing, it must be executable in the time available under adrenaline.

**The get-in and get-out** are part of the piece for a solo tourer. Know how long you need, arrive early, and expect the room to be different from the plan. A calm hour before is worth more than a final rehearsal.

:::reveal What is the single question that should govern every technical choice in a touring solo show, and what does it rule out? ||| If it breaks, can you still do the show? It rules out any cue the piece DEPENDS on: a sound that must play for a section to make sense, a lighting state without which a moment does not land, a video the whole ending rests on. Every cue should be an enhancement, because a piece that cannot survive a failed cue is a piece that will one day not happen, and solo shows routinely tour to rooms with no technician.

## Sources
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.`,
    },
    {
      slug: "mono2-safety",
      title: "11 · Performing your own life without harming yourself",
      section: "Module 3 · Rehearsal, tech, audience",
      body: `This lesson exists because solo autobiographical work has a specific risk profile and the field is bad at naming it. **This is craft guidance, not clinical advice, and it is not a substitute for professional support.**

**The structural facts that create the risk**

- **You rehearse alone**, so there is nobody in the room to notice that a passage is costing you something.
- **The material is often yours**, so re-performing it is re-entering it, nightly, on a schedule.
- **The form rewards exposure**, so the incentive runs toward more.
- **Audiences respond to distress**, which is a genuinely dangerous feedback loop: the more it costs you, the better it can seem to be going.

**The distinction that matters:** performing something and re-living it are different acts. A performer telling a story about the worst day of their life should be **in control of the telling**. If they are back in the day rather than describing it, the audience usually feels frightened rather than moved, and the performer pays for it afterwards.

**Practical, and worth building in from the start**

**Build a landing.** Decide in advance what you do in the ten minutes after you come off. Not "go to the bar." Something specific that returns you to yourself: a change of clothes, a walk, a phone call to one person. A performer who goes straight into conversation after a hard piece is still in it.

**Rehearse the hardest passage least.** You do not need to run it as often as the rest, and it is usually the section that most rewards being left alone. Mark it and run it at half intensity when working structure.

**Have a version you can do when you are not up to it.** A slightly cooler, more controlled reading of the difficult section, decided in advance, so the choice in the moment is between two rehearsed options rather than between full exposure and falling apart.

**Notice numbness as much as distress.** Feeling nothing where you used to feel something is information. It can be healthy distance and it can be dissociation, and telling them apart is not something to do alone.

**Tell someone.** If the material is heavy, one person should know what you are performing and roughly when. Solo touring is isolating by design.

**And the honest note about content warnings.** They are contested, and the practical case for them here is narrow and strong: you are alone with an audience with no cast to manage a reaction, and someone leaving distressed mid-piece is a situation you will be handling by yourself while continuing to perform. A brief note in the program costs you nothing.

:::reveal What is the difference between performing a difficult memory and re-living it, and why does audience response make the distinction hard to hold? ||| Performing means remaining in control of the telling: you are describing the day rather than being back inside it. Re-living means the event is happening to you again in front of people, and audiences usually read that as frightening rather than moving. It is hard to hold because audiences respond strongly to visible distress, which creates a feedback loop where the more the piece costs you, the better it can seem to be going, so the incentive runs precisely against your interest.

## Sources
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.`,
    },
    {
      slug: "mono2-capstone",
      title: "12 · Capstone: perform it, then change it",
      section: "Module 4 · Close",
      lessonType: "assignment",
      body: `Perform your piece in front of at least **three people who are not obliged to be kind**, then revise it. The performance is not the assignment. **What you do afterwards is the assignment.**

**What to submit.**

**1. The conditions.** Where, how many people, and how they were related to you. Three strangers teaches more than ten friends, and if all you can get is friends, say so and ask them for the two questions rather than for praise.

**2. A recording**, audio or video, if you can. If not, a written account of what happened, written the same day.

**3. What the audience taught you that rehearsal did not.** Be specific: where they went quiet, where they moved, where they laughed and whether you expected it, where you felt them leave. **Where an audience laughs unexpectedly is one of the most useful pieces of information you will ever get about your own writing.**

**4. Your own three notes.** What YOU knew was wrong while you were doing it. Performers always know; the discipline is writing it down before it fades.

**5. The two questions, asked of at least two people.** *"Where did you stop following?"* and *"What did you think it was about?"* Record the answers verbatim, including where they differ from each other. **If two people thought it was about two different things, that is the finding**, and it is about your piece rather than about them.

**6. The revision.** At least three specific changes, each with the evidence behind it. Cuts count and are usually the strongest entries. Say what you changed, why, and what it cost.

**7. One thing you decided NOT to change** despite feedback, with your reasoning. This matters: taking every note produces an average piece, and the ability to say why a note is wrong is as much craft as taking one.

**If the material is heavy**, include a line on how you handled the ten minutes after, per Lesson 11.

**What a strong submission looks like.** Specific evidence rather than impressions, at least one cut, and at least one defended decision. **A performance that went badly and was analyzed honestly scores higher than one that went well and was not**, because only the first one contains the work.`,
    },
    {
      slug: "mono2-review-and-sources",
      title: "13 · Cumulative review and sources",
      section: "Module 4 · Close",
      body: `**Standing up reveals what the page hides:** breath, transitions with no physical logic, true runtime, and where you were being evasive. Read it aloud, standing, timed, in one go. Everything else refines that.

**Direct address is physical.** Land on one person for a thought rather than sweeping. Match the address you wrote. Break the fourth wall once, at the turn, on purpose.

**Your body builds the place.** Reach and the ceiling exists. Consistency is what makes it work, and a drifting invisible set is the commonest solo failure.

**Fixed points make multi-character scenes followable.** Break the map and the scene dies immediately.

**Choose the lightest way to play another character:** report, indicate, embody. Beginners over-reach.

**Every line is doing something.** What do I want, and what am I doing to get it, as an active verb. Objective is want; action is how; obstacle is what makes it hard. Status is a live choice and a piece at one status feels monotonous.

**Voice is athletic.** Support from the diaphragm. Mark breath before memorizing. Nerves narrow range and speed you up, and the pause after a hard line is where the audience does the work.

**Memorise wants, turns and transitions before words.** Knowing the want gives you a detour; knowing the words gives you one path. When you blank: stop, breathe, go to the want, do not apologize.

**Solo rehearsal entrenches.** Record and watch in three focused passes. Ask two narrow questions. Change one variable. Leave it alone. Trust the structure over your enthusiasm.

**Technically: if it breaks, can you still do the show?** Can they see your face. One stable state beats six unreliable ones. Spend your one effect on the turn.

**Performing your own life is not re-living it.** Build a landing. Rehearse the hardest passage least. Have a cooler version ready. Notice numbness. Tell someone.

:::reveal Without looking back, give the governing question for technical choices and the governing question for a flat section. ||| For technical choices: if it breaks, can you still do the show? Every cue should enhance rather than carry the piece, because a solo show that depends on a cue will one day not happen. For a flat section: what am I DOING here, stated as an active verb? A performer who has not chosen a verb defaults to describing, and describing is what flat sounds like.

## Sources
- Berry, C. (1973). *Voice and the actor*. Harrap.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.
- Bogart, A., & Landau, T. (2005). *The Viewpoints book: A practical guide to Viewpoints and composition*. Theatre Communications Group.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Chekhov, M. (1953). *To the actor: On the technique of acting*. Harper & Brothers.
- Johnstone, K. (1979). *Impro: Improvisation and the theatre*. Faber & Faber.
- Linklater, K. (1976). *Freeing the natural voice*. Drama Book Specialists.
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Stanislavski, C. (1936). *An actor prepares* (E. R. Hapgood, Trans.). Theatre Arts Books.`,
    },
  ],
};
