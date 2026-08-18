// Authored "Monodrama I: Writing the Solo Piece" — the first course in the Storytelling series
// (docs/storytelling-curriculum.md).
//
// WHY THIS COURSE IS FIRST, which is a pedagogical claim rather than a scheduling convenience.
// One performer, no scene partner, nothing to hide behind. No cutaway, no second character to carry
// exposition, no ensemble to cover a structural weakness. Every one of the series' six spine terms is
// exposed in a monodrama, which makes it the purest teaching instrument in the series rather than a
// niche form. The core "how stories work" course is written LAST, using the vocabulary this course
// establishes, so it becomes the thing these courses were always pointing at.
//
// THE SPINE VOCABULARY IS FIXED IN docs/storytelling-curriculum.md AND THIS COURSE MAY NOT INVENT
// SYNONYMS. Six terms: the change, the owner, want and obstacle, withholding, scene and summary, the
// turn. Where the theatre tradition has its own word (beat, button, reveal), this course names it and
// maps it onto the six rather than replacing them. That constraint is the whole reason the vocabulary
// was pinned before any course was written.
//
// SOURCING: real plays and real craft literature, cited APA 7. Every play named is one that exists
// and can be read or watched, with its writer and first-production year. No invented examples, and no
// invented quotations from playwrights: where this course describes what a play does, it describes
// structure a reader can verify by reading it.

import type { AuthoredCourse } from "./authored-course";

export const MONODRAMA_WRITING_COURSE: AuthoredCourse = {
  title: "Monodrama I: Writing the Solo Piece",
  description:
    "One performer, no scene partner, nowhere to hide. A monodrama is the hardest place to bury a weak story and therefore the best place to learn how stories actually work. This course teaches the six decisions that survive translation into any medium (the change, the owner, want and obstacle, withholding, scene and summary, the turn) by making you apply them to the form that exposes all six at once. It covers what a solo piece can and cannot do, who the audience is to your speaker and why that question decides everything else, how to build place and time with no set, the reliability problem, structural options from the single-sitting confession to the fractured memory piece, how to end, and how to revise. Worked examples are real plays you can read or watch, from Beckett to Anna Deavere Smith to Duncan Macmillan. Ends with a performable draft. Part one of two: performing and staging it is Monodrama II.",
  lessons: [
    // ══════════════ MODULE 1 · THE FORM ══════════════
    {
      slug: "mono-what-this-is",
      title: "1 · Why one performer is the hardest place to hide",
      section: "Module 1 · The form",
      body: `Most people meet the solo show as a curiosity: the one-hander, the fringe piece, the actor's calling card. That framing is backwards, and it is why this is the first course in the series rather than a late specialism.

**A monodrama removes every structural crutch at once.**

- No scene partner, so no dialogue to hide exposition inside.
- No second character, so nobody else can want something on your behalf.
- No cutaway, no B-plot, no subplot to change the subject when the main one sags.
- No ensemble, so no one to cover a weak passage with stage business.

What is left is the story and one person telling it. If the story does not work, there is nothing on stage to disguise that. **Which makes it the best diagnostic instrument in the form.** Writers who can hold an audience alone can hold one with help. The reverse is not reliably true.

**What you will be able to do at the end**

- Name the change and the owner of any story, including your own, in one sentence each.
- Decide who your audience is to your speaker, which is the question that determines tone, tense, and what may be said aloud.
- Build a place and a time with language alone, on an empty stage.
- Choose deliberately between scene and summary instead of drifting into whichever comes easily.
- Place a turn (the moment the story's direction changes: one of the six shared terms Lesson 2 defines) and write an ending that is about the change rather than merely stopping.
- Finish a performable draft.

**What this course is not.** It is not a performance course. Standing in a room, direct address as a physical problem, staging with nothing, and rehearsing alone are Monodrama II. It is also not a course in autobiography: your own life is a legitimate source and it is not the only one, and Lesson 4 is blunt about why "it really happened" is not an argument for keeping something.

**The vocabulary is shared across this whole series and is deliberately small.** Six terms, defined in Lesson 2, used in every course that follows. Where theatre has its own traditional word for one of them, this course names the traditional word and then keeps using the shared one, so that a learner moving from here to the documentary or news courses is not learning a third dialect for the same idea.

**A note on the examples.** Every play named in this course exists and can be read or watched. Where the course says a play does something, that is a claim you can check by reading it, which is the only kind of claim worth making about craft.

:::reveal Why does this course argue that a solo piece is a better place to LEARN structure than a fully cast play? ||| Because a cast gives you places to hide a weak story: dialogue can bury exposition, a second character can carry the want, a subplot can change the subject, and stage business can cover a sagging passage. A monodrama removes all of those at once, so a structural weakness has nothing in front of it. The story either holds an audience alone or it does not, and that makes the form diagnostic rather than merely difficult.

## Sources
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.`,
    },
    {
      slug: "mono-the-six-terms",
      title: "2 · The six words this whole series uses",
      section: "Module 1 · The form",
      recallContent: [
        {
          prompt: "Name three structural crutches a monodrama removes, and say what that makes the form useful for.",
          answer:
            "Any three of: dialogue to hide exposition in, a second character to carry the want, a subplot to change the subject, an ensemble to cover a weak passage, and cutaways. Removing them makes the form diagnostic: a structural weakness has nothing standing in front of it.",
        },
      ],
      body: `Six terms. Every course in this series uses these words and no synonyms, so that a learner who moves from monodrama to documentary to news storytelling is not relearning the same idea under three names.

**1. The change.** What is different at the end from the beginning. **A story with no change is an anecdote.** This is the first question asked of any draft, in any course, and it is the one most drafts fail. "Something happened to me" is not a change. "I stopped believing my father" is.

**2. The owner.** Whose change it is. Not the narrator, not the most interesting person in the room: the one the change happens to. In a monodrama these are usually the same person, which is precisely why the form makes the distinction easy to see when they are not. A speaker can narrate someone else's change, and if they do, you have to know that you are doing it.

**3. Want and obstacle.** What the owner is trying to get, and what is in the way. Both must be concrete enough to point at. "Happiness" is not a want. "To get through the funeral without speaking to my brother" is.

**4. Withholding.** What the audience does not know yet, and when they learn it. This is the engine of attention in every form on the list. An audience leans in because something is missing. In a solo piece it is especially exposed: you have no other character to ask the question the audience is asking, so the decision about when to answer it is entirely yours.

**5. Scene and summary.** Scene is real time, shown, with the words as they were said. Summary is compressed, told. **Choosing between them is the most frequent craft decision in any medium**, and in a monodrama a speaker can move between them mid-sentence, which is the form's great advantage and the easiest thing to abuse.

**6. The turn.** The moment the change becomes irreversible. Distinct from the ending, which is what the story says about the change. A piece can have a turn on page three and spend twenty pages on what it means, or it can turn on the last line.

**Where theatre's own vocabulary fits.** Dramaturgy has good words: *beat*, *button*, *reveal*, *inciting incident*, *reversal*. They are useful and this course will name them. But when they mean one of the six above, the six above is what gets written down. Aristotle's *peripeteia*, the reversal, is a turn. A *reveal* is the end of a piece of withholding. Keeping one set of words is worth more than being able to show off three.

:::reveal A drafted piece opens with a woman describing the summer her mother died and ends with her still describing it, movingly. Diagnose it using the six terms. ||| It probably has no CHANGE, which makes it an anecdote rather than a story however well written it is. The test: what is different at the end from the beginning? If the answer is only that the audience now knows more, the change belongs to the audience rather than to the owner. The fix is to find what the summer changed in her (what she stopped believing, started admitting, or could no longer do) and make that the spine, with the death as the circumstance rather than the subject.

## Sources
- Aristotle. (1996). *Poetics* (M. Heath, Trans.). Penguin. (Original work composed ca. 335 BCE)
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.`,
    },
    {
      slug: "mono-the-forms",
      title: "3 · Four kinds of solo piece, and what each one buys",
      section: "Module 1 · The form",
      body: `"Monodrama" covers several different machines. Knowing which one you are building saves a great deal of rewriting.

| Form | What it is | What it buys | What it costs |
| --- | --- | --- | --- |
| **The dramatic monologue** | One character, in a situation, speaking. The audience overhears | Immediacy, and a clear present-tense situation | Everything must be motivated by the moment. Hard to range across years |
| **The direct-address solo show** | The performer speaks to the audience, knowing they are there | Enormous flexibility of time and place, and warmth | The audience must be given a role (Lesson 5), or the piece feels like a lecture |
| **The testimony or verbatim piece** | Built from interview or documentary material, performed by one person | Authority, and a real subject | You do not own the material. The ethics are real and Lesson 6 covers them |
| **The fractured memory piece** | Non-linear, associative, the speaker circling something | Emotional accuracy about how memory actually works | Very easy to write a piece with no change, only atmosphere |

**Real examples worth knowing, all of which you can read or watch.**

- **Krapp's Last Tape** (Beckett, first produced 1958). A man listens to a recording of himself thirty years earlier. The genuine second character is the tape, which is how Beckett gets a two-hander out of one body.
- **Not I** (Beckett, 1972). A mouth, lit alone, speaking at speed. The extreme end of the form and worth knowing exists, because it marks the boundary.
- **Fires in the Mirror** (Anna Deavere Smith, 1992). Verbatim theatre built from interviews after the Crown Heights conflict, performed solo across many characters. The clearest bridge in this whole series between storytelling and documentary work.
- **I Am My Own Wife** (Doug Wright, 2003). One actor, many roles, built from interviews with a real person, and openly about the difficulty of telling that person's story.
- **Every Brilliant Thing** (Duncan Macmillan with Jonny Donahoe, 2013). Direct address in which the audience is given explicit roles to play. The best available demonstration of Lesson 5.

**Choosing.** Ask what the material needs rather than what sounds impressive. If the story lives in one hour of one night, the dramatic monologue is doing you a favor. If it ranges over decades, direct address will stop you fighting the form. If it is somebody else's testimony, you are in the third row of the table and the ethics arrive with it.

:::reveal Your material ranges over twenty years and needs the speaker to comment on their younger self. Which form fits, and what does it obligate you to do? ||| Direct address, because a dramatic monologue has to motivate everything from the present situation and would fight a twenty-year range. What it obligates you to do is decide who the audience IS to the speaker: direct address without a defined listener drifts into lecture. Krapp's Last Tape solves the same problem differently, by making a tape recorder the second presence, which is worth studying if you want the range without breaking the fourth wall.

## Sources
- Beckett, S. (1958). *Krapp's last tape*. Faber & Faber.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Wright, D. (2004). *I am my own wife*. Faber & Faber.`,
    },
    {
      slug: "mono-quiz-1",
      title: "4 · Knowledge check: the form",
      section: "Module 1 · The form",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this series treat the monodrama as a teaching instrument rather than a niche form?",
            options: [
              "It removes the structural crutches, so a weak story has nothing to hide behind",
              "It is the cheapest form to produce, so more writers can attempt it",
              "It is the oldest dramatic form and therefore the most fundamental",
              "It requires less rehearsal than an ensemble piece of the same length",
            ],
            correctIndex: 0,
            explanation:
              "No dialogue to bury exposition in, no second character to carry the want, no subplot to change the subject, no ensemble to cover a sagging passage. What is left is the story and one person telling it.",
            sourceLessonSlug: "mono-what-this-is",
          },
          {
            prompt: "What distinguishes a story from an anecdote in this series' vocabulary?",
            options: [
              "A story is performed while an anecdote is only written down",
              "A story has a change: something is different at the end",
              "A story is longer than roughly ten minutes of stage time",
              "A story is invented while an anecdote actually happened",
            ],
            correctIndex: 1,
            explanation:
              "The change is the first question asked of any draft in any course in this series, and it is the one most drafts fail. Something happening is not a change.",
            sourceLessonSlug: "mono-the-six-terms",
          },
          {
            prompt: "Who is 'the owner' of a story?",
            options: [
              "The writer, who holds the copyright in the finished text",
              "The performer, who carries the piece in front of an audience",
              "The narrator, since a monodrama is told in a single voice",
              "The person the change happens to, who need not be the narrator",
            ],
            correctIndex: 3,
            explanation:
              "In a monodrama the narrator and the owner are usually the same person, which is exactly why the form makes it obvious when they are not. A speaker can narrate someone else's change, and if so you need to know you are doing it.",
            sourceLessonSlug: "mono-the-six-terms",
          },
          {
            prompt: "What is 'the turn', and how does it differ from the ending?",
            options: [
              "The moment the change becomes irreversible; the ending says what it means",
              "The last line of the piece, after which the lights go down",
              "The point at which the speaker first addresses the audience directly",
              "The interval, which divides a solo piece into two movements",
            ],
            correctIndex: 0,
            explanation:
              "A piece can turn on page three and spend twenty pages on the consequences, or turn on the final line. Aristotle's peripeteia, the reversal, is the same idea under an older name.",
            sourceLessonSlug: "mono-the-six-terms",
          },
          {
            prompt: "What does 'withholding' mean in this vocabulary?",
            options: [
              "Cutting material from a draft that does not earn its place",
              "Refusing to answer audience questions during a performance",
              "What the audience does not know yet, and when they learn it",
              "Holding a pause before delivering an important line",
            ],
            correctIndex: 2,
            explanation:
              "It is the engine of attention in every form in this series. An audience leans in because something is missing, and a solo piece has no second character to voice the question the audience is asking.",
            sourceLessonSlug: "mono-the-six-terms",
          },
          {
            prompt: "Which solo form best suits material ranging across decades?",
            options: [
              "The dramatic monologue, which grounds everything in one situation",
              "The direct-address solo show, which moves freely through time",
              "The verbatim piece, which is built from interview material",
              "The fractured memory piece, which avoids chronology entirely",
            ],
            correctIndex: 1,
            explanation:
              "A dramatic monologue must motivate everything from the present moment, so a long range fights the form. Direct address buys that flexibility, at the cost of having to decide who the audience is to the speaker.",
            sourceLessonSlug: "mono-the-forms",
          },
          {
            prompt: "In Krapp's Last Tape, what functions as the second presence on stage?",
            options: [
              "An offstage voice performed by a second actor",
              "The audience, whom Krapp addresses throughout",
              "A projected film of the character as a younger man",
              "A tape recording of the character made thirty years earlier",
            ],
            correctIndex: 3,
            explanation:
              "Beckett gets something close to a two-hander out of a single body by making the recording the other party. It is the standard solution to wanting range without breaking the fourth wall.",
            sourceLessonSlug: "mono-the-forms",
          },
          {
            prompt: "What does the course say about theatre's traditional vocabulary such as beat and reveal?",
            options: [
              "Name them, then keep using the six shared terms they map onto",
              "Avoid them entirely, since they belong to an older tradition",
              "Use them in place of the six terms, which are for beginners",
              "They describe technical staging and have no bearing on writing",
            ],
            correctIndex: 0,
            explanation:
              "A reveal is the end of a piece of withholding; a reversal is a turn. Keeping one set of words across the whole series is worth more than demonstrating three dialects for the same idea.",
            sourceLessonSlug: "mono-the-six-terms",
          },
          {
            prompt: "Which piece is described as the bridge between this series' storytelling and documentary tracks?",
            options: [
              "Not I, for its extremity of form",
              "Every Brilliant Thing, for its use of the audience",
              "Fires in the Mirror, built from interviews after Crown Heights",
              "Krapp's Last Tape, for its use of recorded material",
            ],
            correctIndex: 2,
            explanation:
              "Anna Deavere Smith's verbatim theatre performs real interview material solo across many characters, which is precisely where dramatic craft and documentary discipline meet.",
            sourceLessonSlug: "mono-the-forms",
          },
          {
            prompt: "What must a want be, to be usable?",
            options: [
              "Achievable within the runtime of the finished piece",
              "Concrete enough to point at, rather than an abstraction",
              "Something the audience is likely to share personally",
              "Stated aloud by the speaker in the opening minutes",
            ],
            correctIndex: 1,
            explanation:
              "Happiness is not a want. Getting through the funeral without speaking to my brother is. The same test applies to the obstacle, which must also be concrete.",
            sourceLessonSlug: "mono-the-six-terms",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE DECISIONS ══════════════
    {
      slug: "mono-who-is-the-audience",
      title: "5 · Who is the audience to your speaker?",
      section: "Module 2 · The decisions",
      recallContent: [
        {
          prompt: "Name the four kinds of solo piece and one thing each buys you.",
          answer:
            "The dramatic monologue buys immediacy and a clear present situation. The direct-address solo show buys flexibility of time and place. The testimony or verbatim piece buys authority and a real subject. The fractured memory piece buys emotional accuracy about how memory works.",
        },
      ],
      body: `This is the question that decides more than any other, and most drafts have never answered it.

Your speaker is talking. **To whom?** Not in the abstract. In the room, tonight, who does the speaker think those several hundred people are?

**The options, and what each one does to the writing**

| The audience is... | What becomes possible | What becomes impossible |
| --- | --- | --- |
| **Nobody. They overhear** | Total privacy. The speaker can be wrong about themselves | Direct appeal. Nothing can be asked of the audience |
| **A specific person** (a jury, a therapist, a child, the dead) | Enormous focus. Every line is aimed | Anything the speaker would not say to that person |
| **A general listener** ("you") | Warmth, and range across time | Precision. Very easy to slide into lecture |
| **Themselves** | Self-deception becomes visible and dramatic | Sustained plot. It tends toward circling |
| **A crowd with a job** (they hold cards, they answer) | Genuine event, genuine risk | Control. The piece must survive their choices |

**Every Brilliant Thing (Macmillan with Donahoe, 2013) is the clearest study of the last row**: audience members are handed roles and lines, so the show is different every night and its subject, keeping someone alive, is enacted rather than described. That is not a gimmick. The form is doing the argument.

**The two failure modes.**

**Undefined address** produces the piece that sounds like a very good personal essay read aloud. Fluent, warm, and inert, because nothing is at stake in the telling. If the speaker would say this identically to a mirror, a diary and a stadium, they are not talking to anyone.

**Address that drifts.** Page two is a confession to a jury, page nine is a chat with the crowd, page fourteen is private thought, and none of the shifts are marked. The audience does not consciously notice; they simply stop leaning in.

**Deciding it, practically.** Write the answer at the top of the page before you draft: *"She is talking to the daughter who did not come."* Then every line has a test. Would she say that to her? Would she say it that way? The test does more work than any amount of general advice about voice.

**And you may change it deliberately.** A piece can begin in private thought and break into direct appeal at the turn. That is powerful precisely because it is a rupture. It works when it is a decision and fails when it is drift.

:::reveal A draft is fluent and moving, yet somehow inert on stage, and the writer never defined who the speaker is talking to. Why does an undefined listener make a piece inert? ||| With no defined listener, nothing is at stake in the act of telling: the speaker would say the same words the same way to a mirror, a diary or a stadium, so speaking costs them nothing. Drama needs the telling itself to be difficult or risky. Defining the listener ("she is talking to the daughter who did not come") gives every line a test, would she say that, and would she say it that way, and it makes the speech an action rather than a delivery.

## Sources
- Macmillan, D., with Donahoe, J. (2015). *Every brilliant thing*. Oberon Books.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.`,
    },
    {
      slug: "mono-truth-and-permission",
      title: "6 · True stories, other people, and what you owe them",
      section: "Module 2 · The decisions",
      body: `Most solo pieces draw on something real. That is a strength and it arrives with two problems, one craft and one ethical.

**The craft problem: "it really happened" is not an argument.**

Real events come with a built-in defense that ruins drafts. A scene is doing nothing, and the writer keeps it because it is what occurred. But an audience cannot see what occurred, only what is on stage, and the stage does not care about accuracy for its own sake. **Every element still has to earn its place against the change**, exactly as if you had invented it.

The reverse is also true and less often said: **shaping real material is not lying.** Compressing three conversations into one, moving an event, cutting a person, are all standard and legitimate. What is not legitimate is asserting something false about someone who exists.

**The line, as this course draws it.** You may shape. You may not fabricate a real person's words or actions and present them as what they said or did. The distinction survives the hardest cases and it is the same one the documentary track uses.

**The ethical problem: your story contains other people.**

Yours is the only consent you hold. Everyone else in your material is a real person who did not choose to be in a play, and some of them will find out.

Questions worth answering before you draft, not after:

- **Are they identifiable?** Not named: identifiable. A sister is identifiable to everyone who knows you have one.
- **Is the least flattering thing about them necessary to the change?** If it is, it stays. If it is there because it is true and vivid, that is not enough.
- **Would you perform this with them in the audience?** Not "will they be there." Could you.
- **Are they able to answer?** The dead and the very young cannot. That does not forbid it and it does raise the standard.

**Verbatim and testimony work raises the standard again.** If you are building from interviews, you are handling someone's actual words. Anna Deavere Smith's method in *Fires in the Mirror* (1992) is instructive: she performs interview subjects' speech closely, including hesitation, which keeps her visibly in the position of transmitting rather than authoring. Doug Wright's *I Am My Own Wife* (2003) goes further and makes the difficulty of telling its subject's story part of the play, with the writer's own doubt on stage.

**Where this connects to the rest of the series.** The documentary and civic-documentation courses teach the opposite discipline: record what happened and do not shape it. A writer who has felt both pulls is better at each. **Knowing when not to make a story out of something is a craft skill**, not a moral decoration.

:::reveal A vivid scene in your draft shows your father at his worst. It is true and it is the best writing in the piece. What is the test? ||| Whether it is necessary to the change. True and vivid is not sufficient: everything on stage has to earn its place against what the piece is actually about, and real material gets no exemption from that. If the scene carries the change, it stays and you accept what it costs. If it is there because it is strong writing about a real person at their worst, it is doing you a favor and doing him harm, and it goes.

## Sources
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Wright, D. (2004). *I am my own wife*. Faber & Faber.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.`,
    },
    {
      slug: "mono-place-and-time",
      title: "7 · Building a world with no set",
      section: "Module 2 · The decisions",
      body: `You have an empty stage, one body, and language. That is more than enough, and the reason is worth understanding rather than taking on faith.

**The audience builds the room, and they do it better than a designer could.** Peter Brook's argument in *The Empty Space* (1968) is that a bare stage plus an audience's attention is already theatre. What follows practically is that **a named detail is more powerful than a built set**, because the audience constructs the rest from their own material and what they build is specific to them.

**Three techniques, in ascending order of how much they buy.**

**1. The single specified detail.** Not "the kitchen." The cracked tile by the fridge that nobody ever fixed. One detail with texture does more than five general ones, because generality gives the audience nothing to build from.

**2. The body as the set.** The speaker's physical relationship to a thing that is not there. Reaching up for a shelf tells the audience the height of the room. This is where Monodrama II picks up, and even in writing you can specify it.

**3. Transition by language, not by blackout.** A solo piece can move from a hospital to a beach mid-sentence. The tools are simple and they must be deliberate: a shift in tense, a repeated phrase that returns you, a named object carried across. **A blackout is what you use when you have not solved it.**

**Time is the same problem and easier.** A monodrama can hold three timeframes at once with nothing but tense. Present tense for now, past for then, and a consistent marker for the third. The rule is consistency: whatever signals "we have moved," use it every time, or the audience stops trusting the signal and simply waits.

**The single most common failure here** is atmosphere without change. Beautifully evoked rooms, weather, a mood, and nothing different at the end. **Atmosphere is not free.** Every minute spent building a world is a minute not spent on the change, and the fractured memory form is where this failure concentrates, because association feels like structure while you are writing it.

:::reveal Your piece moves between a hospital corridor and a childhood kitchen, repeatedly. What must you decide, and what happens if you do not? ||| You must fix one consistent signal for the move (a tense shift, a repeated phrase, a carried object) and use it every single time. If the signal varies, the audience stops trusting it and stops trying to track where they are, at which point they wait politely rather than follow. The second decision is what each location is FOR: if the kitchen only supplies atmosphere and carries no part of the change, it is spending time the change needs.

## Sources
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Beckett, S. (1958). *Krapp's last tape*. Faber & Faber.`,
    },
    {
      slug: "mono-scene-and-summary",
      title: "8 · Scene, summary, and the reliability problem",
      section: "Module 2 · The decisions",
      body: `**Scene** is real time. The words as they were said, the moment as it happened. **Summary** is compressed: months in a clause, a relationship in a sentence.

Most drafts are too heavy on summary, because summary is what happens when you tell someone about your life. Scene is what happens when you show it, and it costs more words per minute of story, which is exactly why it is worth reserving.

**The rule that holds.** Scene the moments the change runs through. Summarize everything else. If a passage is not carrying the change, it does not need real time.

**What a monodrama can do that almost nothing else can:** move between the two mid-sentence, and let the speaker comment on the scene while playing it. *"He said, and I remember thinking he had never once used my name, he said..."* That is summary, scene and interpretation in one breath. It is the form's greatest advantage.

**And its greatest temptation.** Because the speaker can always step out and explain, a writer can lean on explanation and never dramatise anything. The audience is told the father was cold rather than shown one cold thing he did. **Telling is faster and weaker**, and in a solo piece nothing stops you doing it for forty minutes.

**The reliability problem, which is the form's other gift.**

Your speaker is the only witness. The audience has no one to check them against. This makes a monodrama the natural home for the unreliable narrator, and it gives you a tool nothing else does: **the audience can understand something the speaker does not.**

That happens when the speaker's account contains evidence against itself. A detail they report without noticing. An insistence repeated too often. A gap they route around every time they approach it.

**But it only works if the audience can tell.** Unreliability that nobody detects is not unreliability, it is just a story the writer knows is false. The evidence has to be **on stage and available**, planted early enough that the audience can look back and see it was always there. That is a withholding problem: what does the audience know, and when.

:::reveal How do you write a speaker the audience can see through, without the speaker ever admitting anything? ||| Put the evidence in their own account and let them fail to notice it: a detail reported flatly that contradicts their claim, an insistence repeated more often than a secure person would need to, a subject they consistently route around. It has to be planted early enough and clearly enough that the audience can look back and see it was always there. Unreliability the audience cannot detect is not unreliability, it is only a story the writer privately knows is false.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Beckett, S. (1958). *Krapp's last tape*. Faber & Faber.`,
    },
    {
      slug: "mono-quiz-2",
      title: "9 · Knowledge check: the decisions",
      section: "Module 2 · The decisions",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does an undefined audience make a fluent draft feel inert?",
            options: [
              "Nothing is at stake in the telling, so speaking costs the speaker nothing",
              "The performer cannot decide where to physically direct their gaze",
              "Audiences require an explicit welcome before a play can begin",
              "Undefined address forces the writer into the past tense throughout",
            ],
            correctIndex: 0,
            explanation:
              "If the speaker would say the same words the same way to a mirror, a diary or a stadium, the act of speaking is not an action. Naming the listener gives every line a test.",
            sourceLessonSlug: "mono-who-is-the-audience",
          },
          {
            prompt: "What does the course say about shaping real events?",
            options: [
              "Real events must be presented exactly as they occurred",
              "Shaping is legitimate; asserting something false about a real person is not",
              "Any alteration of real events constitutes fabrication",
              "Real material should be avoided in favor of invention",
            ],
            correctIndex: 1,
            explanation:
              "Compressing conversations, moving events and cutting people are standard and legitimate. The line is fabricating a real person's words or actions and presenting them as what they said or did.",
            sourceLessonSlug: "mono-truth-and-permission",
          },
          {
            prompt: "A true, vivid scene shows a real family member at their worst. What decides whether it stays?",
            options: [
              "Whether that person has given written permission for it",
              "Whether it is the strongest writing in the piece",
              "Whether it is necessary to the change",
              "Whether the person is likely to attend a performance",
            ],
            correctIndex: 2,
            explanation:
              "Real material gets no exemption from earning its place. True and vivid is not sufficient; if the scene is not carrying the change it is doing the writer a favor and the subject harm.",
            sourceLessonSlug: "mono-truth-and-permission",
          },
          {
            prompt: "Why is a single specified detail more effective than a built set?",
            options: [
              "Audiences find minimal staging more artistically sophisticated",
              "Detailed sets distract from the performer's physical work",
              "Specified details are cheaper to describe in a script",
              "The audience constructs the rest from their own material",
            ],
            correctIndex: 3,
            explanation:
              "A bare stage plus attention is already theatre, so a named detail with texture gives the audience something to build from, and what they build is specific to them. Generality gives them nothing.",
            sourceLessonSlug: "mono-place-and-time",
          },
          {
            prompt: "What is the rule for moving between two locations in a solo piece?",
            options: [
              "Fix one consistent signal and use it every single time",
              "Use a blackout so the audience knows the scene has changed",
              "Change costume to mark each transition clearly",
              "Announce the new location aloud before continuing",
            ],
            correctIndex: 0,
            explanation:
              "A tense shift, a repeated phrase or a carried object all work. If the signal varies the audience stops trusting it and waits instead of following. A blackout is what you use when you have not solved it.",
            sourceLessonSlug: "mono-place-and-time",
          },
          {
            prompt: "When should a moment be written as scene rather than summary?",
            options: [
              "Whenever dialogue was actually spoken in the real event",
              "When the change runs through it",
              "At the beginning and end, with summary in the middle",
              "Whenever the passage exceeds roughly two minutes",
            ],
            correctIndex: 1,
            explanation:
              "Scene costs more words per minute of story, which is why it is reserved. If a passage is not carrying the change, it does not need real time.",
            sourceLessonSlug: "mono-scene-and-summary",
          },
          {
            prompt: "What makes an unreliable narrator work rather than simply be false?",
            options: [
              "The speaker eventually admits the deception before the ending",
              "A second voice contradicts the speaker at key moments",
              "The evidence is available to the audience, planted early",
              "The writer states the unreliability in the stage directions",
            ],
            correctIndex: 2,
            explanation:
              "Unreliability nobody can detect is only a story the writer privately knows is false. The audience must be able to look back and see the evidence was always there, which makes it a withholding problem.",
            sourceLessonSlug: "mono-scene-and-summary",
          },
          {
            prompt: "What is the greatest temptation created by a speaker who can step out and explain?",
            options: [
              "Leaning on explanation and never dramatising anything",
              "Addressing the audience too directly and breaking immersion",
              "Overusing the present tense across the whole piece",
              "Making the piece longer than an audience will sit for",
            ],
            correctIndex: 0,
            explanation:
              "Telling is faster and weaker, and in a solo piece nothing stops a writer doing it for forty minutes. The audience is told the father was cold rather than shown one cold thing he did.",
            sourceLessonSlug: "mono-scene-and-summary",
          },
          {
            prompt: "Which failure does the course say concentrates in the fractured memory form?",
            options: [
              "Excessive use of scene at the expense of summary",
              "Atmosphere without change, because association feels like structure",
              "Over-defining the audience's role in the piece",
              "Relying on blackouts to signal every transition",
            ],
            correctIndex: 1,
            explanation:
              "Beautifully evoked rooms and moods with nothing different at the end. Atmosphere is not free: every minute building a world is a minute not spent on the change.",
            sourceLessonSlug: "mono-place-and-time",
          },
          {
            prompt: "Which question about a real person in your material does the course pose?",
            options: [
              "Whether they would enjoy the finished piece if they saw it",
              "Whether they can be renamed to avoid identification",
              "Whether their appearance can be legally cleared in advance",
              "Whether you could perform it with them in the audience",
            ],
            correctIndex: 3,
            explanation:
              "Not whether they will be there: whether you could. Alongside whether they are identifiable, whether the least flattering thing is necessary, and whether they are able to answer.",
            sourceLessonSlug: "mono-truth-and-permission",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · BUILDING IT ══════════════
    {
      slug: "mono-structures",
      title: "10 · Four structures that hold a solo piece up",
      section: "Module 3 · Building it",
      recallContent: [
        {
          prompt: "State the rule for choosing between scene and summary.",
          answer:
            "Scene the moments the change runs through, and summarize everything else. Scene costs more words per minute of story, so it is reserved for what is carrying the change; a passage that is not carrying it does not need real time.",
        },
      ],
      body: `Structure is not a template. It is the answer to one question: **what makes the audience keep wanting the next minute?** Four answers that reliably work.

**1. The single sitting.** The whole piece happens in one continuous stretch of real time: a wait, a vigil, a confession, one night. The clock does the work, because something is going to happen at the end of it and the audience knows it.

*Buys:* built-in tension, no transitions to solve.
*Costs:* everything must be motivated by that one situation.

**2. The frame and the excavation.** The speaker is in a present-tense situation and keeps going back. The present is the frame; the past is what is really being examined. *Krapp's Last Tape* is exactly this: the frame is a man on his birthday with a tape recorder.

*Buys:* range, plus a present-tense engine.
*Costs:* the frame has to change too, or the present becomes a device.

**3. The list, the lesson, or the tour.** The speaker has an organizing pretext: a list they are reading, a subject they are explaining, a place they are showing you. *Every Brilliant Thing* uses a list of reasons to stay alive.

*Buys:* enormous freedom of movement, and a natural relationship with the audience.
*Costs:* a list is not a story. **The change has to run underneath it**, and if it does not, you have a very good talk.

**4. The circle.** The speaker returns repeatedly to one thing they cannot approach directly, getting closer each time. The structure IS the avoidance.

*Buys:* emotional accuracy about trauma and shame, and a powerful ending when they finally arrive.
*Costs:* the most failure-prone of the four. Circling without progression is just repetition, and the writer usually cannot tell the difference from inside.

**How to choose.** Ask what your material's engine already is. If there is a deadline, use the single sitting. If the speaker is examining something, use the frame. If the piece wants to move freely, find the pretext. If it is about something unspeakable, the circle is honest, and set yourself a test: **name what is different on each pass.** If you cannot, you are repeating.

**The thing all four share** is that the audience always knows what they are waiting for. That is the actual job of structure, and any shape that does it will work.

:::reveal Your piece uses a list as its organising pretext and audiences say it is charming but they drift. Diagnose it. ||| The list is probably carrying the piece on its own, with no change running underneath it. A list gives you freedom of movement and a natural relationship with the audience, and it is not a story: nothing about item nine makes an audience need item ten. The fix is to find what is changing in the owner ACROSS the list and make the items reveal it in an order that only works that way, so the sequence becomes necessary rather than pleasant.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Beckett, S. (1958). *Krapp's last tape*. Faber & Faber.
- Macmillan, D., with Donahoe, J. (2015). *Every brilliant thing*. Oberon Books.`,
    },
    {
      slug: "mono-endings",
      title: "11 · Endings, and the runtime problem",
      section: "Module 3 · Building it",
      body: `**An ending is not where the story stops. It is what the story says about the change.**

The turn is where the change becomes irreversible. The ending is what it meant. Confusing them produces the two commonest failures.

**Failure one: it stops.** The events conclude and the lights go down, and the audience is left with information rather than a feeling. This is usually a piece that had a turn but never took a position on it.

**Failure two: it explains.** The speaker tells the audience what the piece was about. Because a solo speaker can always address the audience directly, this is enormously easy to do, and it robs the audience of the one thing they came for, which is arriving at it themselves.

**What actually works, in three shapes.**

- **The image.** A picture that holds the meaning without stating it, ideally an object or gesture set up earlier so its return does the work.
- **The small action.** The speaker does one thing that they could not have done at the start. Change made physical, and it is usually the strongest ending available to a solo piece.
- **The withheld thing, finally said.** If the piece has been circling, arrival is the ending. Works once, and only if the withholding was real.

**The rule against explaining has one exception**, and it is the rupture case: a speaker who has avoided direct address all evening turning to the audience and saying the thing plainly. That lands because the FORM changes, not because the content is stated.

**The runtime problem, which nobody warns writers about.**

A monodrama is exhausting to watch in a way an ensemble piece is not. One voice, one rhythm, one point of view, and no relief. **Sixty minutes is long. Seventy-five is a lot to ask.** Most successful solo pieces sit between forty-five and ninety, and the ones at the top of that range earn it with variety: shifts of address, of tense, of energy, of who the speaker is being.

The practical test: **mark every point in your draft where the texture changes.** If there is a stretch longer than about eight minutes with no shift of any kind, an audience will start to admire the writing rather than follow the story, and admiration is the sound of attention leaving.

:::reveal Why is "the small action" often the strongest available ending for a solo piece? ||| Because it makes the change physical and lets the audience arrive at the meaning themselves. The speaker does one thing they could not have done at the start (makes the call, sits down, throws it away), and the audience understands what it costs without being told. It avoids both failure modes at once: it is not merely stopping, because something happens, and it is not explaining, because nothing is stated.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.`,
    },
    {
      slug: "mono-revision",
      title: "12 · Revision: the five passes",
      section: "Module 3 · Building it",
      body: `A first draft of a solo piece is almost always too long, too explained, and too kind to its own best writing. Five passes, in order, because the order matters: structure first, sentences last.

**Pass 1: The change.** Write, in one sentence, what is different at the end. If you cannot, stop revising and solve that; nothing else will fix it. Then go through and mark every passage that carries it. What is unmarked is now on trial.

**Pass 2: The address.** Read it as the listener you defined. Would the speaker say this, to them, this way? Mark every line that breaks it. Then check for drift: does the address change without a decision behind it?

**Pass 3: Scene and summary.** Find every summary passage doing work a scene should do, and every scene that is not carrying the change. Convert or cut. This is where the piece usually loses ten minutes and gets better.

**Pass 4: Explaining.** Hunt for the places you told the audience what to feel or what something meant. Cut them and see whether the piece still lands. It usually does, and the moment usually improves. **Keep the ones where removing them genuinely breaks comprehension**, which is rarer than it feels.

**Pass 5: Sentences.** Only now. Rhythm, cuts, the shape of a line in a mouth. Do this before pass 1 and you will polish material that should not be there, then be unable to cut it because it is beautiful.

**Then read it aloud, standing, in one go.** Not at a desk. This is the single highest-yield revision act available, and it is the bridge into Monodrama II. Things you will only learn standing up: where you run out of breath, where you get bored of your own voice, where a transition that reads fine has no physical logic, and how long it actually is.

**Two questions for a reader, and only these two.** Give a draft to someone with: *"Where did you stop following?"* and *"What did you think it was about?"* Everything else invites them to redesign your piece. Those two tell you whether the withholding worked and whether the change landed, which is all you need at this stage.

:::reveal Why does the revision order put sentences last, and what specifically goes wrong if you do them first? ||| Because polishing produces attachment. A passage you have made beautiful is much harder to cut, so if you do sentence work before structural work, you build sunk cost into exactly the material that structural revision would remove. You then find yourself defending a scene because the writing is good rather than because it carries the change, which is the same "it really happened" error in a different costume.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.`,
    },
    {
      slug: "mono-drill",
      title: "13 · Drill: diagnose the draft",
      section: "Module 3 · Building it",
      body: `Short typed answers, checked forgivingly. Each prompt is a real failure that shows up in solo drafts.`,
      exercise: {
        instructions: "Name the term, the diagnosis or the fix, in a few words.",
        items: [
          {
            prompt: "A moving piece where nothing is different at the end. What is missing?",
            answer: "the change",
            accept: ["change", "there is no change", "a change"],
            explanation:
              "A story with no change is an anecdote, however well written. It is the first question asked of any draft in this series.",
          },
          {
            prompt: "The speaker would say these words identically to a mirror or a stadium. What is undefined?",
            answer: "the audience, who the speaker is talking to",
            accept: ["the address", "who they are talking to", "the listener", "the audience"],
            explanation:
              "With no defined listener nothing is at stake in the telling, so the speech is a delivery rather than an action.",
          },
          {
            prompt: "The audience is told the mother was cruel, never shown it. Which pair is out of balance?",
            answer: "scene and summary, too much summary",
            accept: ["scene and summary", "too much summary", "summary over scene"],
            explanation:
              "Telling is faster and weaker. Scene the moments the change runs through; a solo speaker can explain endlessly, and nothing stops them.",
          },
          {
            prompt: "What do you call the moment the change becomes irreversible?",
            answer: "the turn",
            accept: ["turn", "the turn or peripeteia", "reversal"],
            explanation:
              "Distinct from the ending, which is what the story says about the change. Aristotle's peripeteia is the same idea.",
          },
          {
            prompt: "A list-structured piece is charming but audiences drift. What is missing underneath?",
            answer: "the change running under the list",
            accept: ["a change", "the change", "nothing changes across the list"],
            explanation:
              "A list gives freedom of movement and is not a story. Nothing about item nine makes an audience need item ten unless something is changing across them.",
          },
          {
            prompt: "The piece ends with the speaker explaining what it all meant. What should replace it?",
            answer: "an image or a small action",
            accept: ["a small action", "an image", "show it, do not state it", "an action"],
            explanation:
              "Explaining robs the audience of arriving at it themselves. A small action the speaker could not have done at the start is usually the strongest option.",
          },
          {
            prompt: "Your piece moves between two times but the signal keeps changing. What breaks?",
            answer: "the audience stops trusting the signal",
            accept: ["they stop following", "the audience stops tracking", "trust in the signal"],
            explanation:
              "Fix one consistent marker and use it every time. When it varies, the audience waits politely instead of following.",
          },
          {
            prompt: "In the revision order, which pass comes LAST and why?",
            answer: "sentences, because polishing creates attachment",
            accept: ["sentences", "sentence work last", "line editing last"],
            explanation:
              "Polish first and you build sunk cost into material that structural revision should remove, then defend it for being beautiful.",
          },
          {
            prompt: "Name one of the two questions worth asking a first reader.",
            answer: "where did you stop following",
            accept: [
              "what did you think it was about",
              "where they stopped following",
              "where did you lose the thread",
            ],
            explanation:
              "Those two test whether the withholding worked and whether the change landed. Anything else invites the reader to redesign your piece.",
          },
          {
            prompt: "A speaker circles a subject repeatedly. What test tells you it is progressing rather than repeating?",
            answer: "name what is different on each pass",
            accept: [
              "what changes each time",
              "say what is new on each pass",
              "each pass must add something",
            ],
            explanation:
              "The circle is the most failure-prone structure, and a writer usually cannot tell repetition from progression from inside the draft.",
          },
        ],
      },
    },
    {
      slug: "mono-capstone",
      title: "14 · Capstone: a performable draft",
      section: "Module 4 · Close",
      lessonType: "assignment",
      body: `One solo piece, **fifteen to twenty minutes** of stage time, finished enough to stand up and perform. Not a full-length: the short form is where the decisions are visible and where you can actually complete a draft.

**What to submit.**

**1. The one-line spine.** Before anything else: *the change* in one sentence, and *the owner* in one phrase. If these are not clear, the rest will not be either, and this is the part most worth getting a second opinion on.

**2. The address, named.** Who the audience is to your speaker, in one sentence, written at the top of the script. State also whether it changes at any point and why.

**3. The draft itself.** Fifteen to twenty minutes. Include whatever staging notes you need to make the text legible, and no more.

**4. A structure note.** Which of the four structures you used, and what your turn is (which line, and why that is where the change becomes irreversible).

**5. The revision record.** What you cut, and what it cost you to cut it. **Name one passage you removed that you liked**, because that is the pass most writers skip and the one that most improves a draft.

**6. If real people are in it**, a short paragraph on how you handled it: who is identifiable, whether the least flattering material is necessary to the change, and whether you could perform this with them in the room.

**Read it aloud, standing, before you submit.** Not optional, and it will change the draft. Note in your submission what standing up taught you that the page did not.

**What a strong submission looks like.** A clear change, a listener you can name, at least one moment scened rather than summarized, an ending that does not explain itself, and honesty about what did not work. **A draft with an admitted weakness scores better than one claiming none**, because the first can be revised and the second cannot.

**Monodrama II** takes this draft and puts it on its feet: direct address as a physical problem, staging with nothing, rehearsing alone, and what changes when the audience is real.`,
    },
    {
      slug: "mono-review-and-sources",
      title: "15 · Cumulative review and sources",
      section: "Module 4 · Close",
      body: `**The six terms**, which every course in this series shares: the change (what is different at the end), the owner (whose change it is), want and obstacle (both concrete enough to point at), withholding (what the audience does not know yet, and when), scene and summary (real time versus compressed), and the turn (when the change becomes irreversible).

**A story with no change is an anecdote.** First question, every draft.

**One performer removes every crutch**, which is why this is the first course rather than a late specialism.

**Four forms:** the dramatic monologue, the direct-address solo show, the verbatim or testimony piece, and the fractured memory piece. Choose by what the material needs.

**Who the audience is to your speaker decides everything else.** Undefined address produces fluent, inert work. Drifting address loses people without their noticing.

**"It really happened" is not an argument for keeping something**, and shaping real material is not lying. The line is fabricating a real person's words or actions. Your consent is the only one you hold.

**A named detail beats a built set**, because the audience constructs the rest. Fix one transition signal and never vary it.

**Scene what the change runs through; summarize the rest.** A solo speaker can always explain, which is the form's greatest temptation.

**Unreliability only works if the audience can detect it.** Plant the evidence early.

**Four structures:** the single sitting, the frame and excavation, the list or tour, and the circle. All four work by making the audience always know what they are waiting for.

**An ending is what the story says about the change**, not where it stops. Image, small action, or the withheld thing finally said. Do not explain.

**Sixty minutes is long.** Mark every texture change; a stretch beyond about eight minutes with no shift loses the room.

**Revise structure first, sentences last**, or you will polish what should be cut and then defend it.

:::reveal Without looking back, name the six terms and give the one-sentence test for the first one. ||| The change, the owner, want and obstacle, withholding, scene and summary, and the turn. The test for the change: what is different at the end from the beginning? If the only thing that changed is that the audience now knows more, the change belongs to them rather than to the owner, and what you have is an anecdote rather than a story.

## Sources
- Aristotle. (1996). *Poetics* (M. Heath, Trans.). Penguin. (Original work composed ca. 335 BCE)
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Beckett, S. (1958). *Krapp's last tape*. Faber & Faber.
- Bonney, J. (Ed.). (2000). *Extreme exposure: An anthology of solo performance texts from the twentieth century*. Theatre Communications Group.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.
- Macmillan, D., with Donahoe, J. (2015). *Every brilliant thing*. Oberon Books.
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Wright, D. (2004). *I am my own wife*. Faber & Faber.`,
    },
  ],
};
