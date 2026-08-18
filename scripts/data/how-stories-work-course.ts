// Authored "How Stories Work" — the CORE of the Storytelling series
// (docs/storytelling-curriculum.md), and deliberately the last one written.
//
// WHY LAST. The series was built specialised-first on purpose: monodrama removes the structural
// crutches, short form removes the time, and civic documentation removes the licence to shape at all.
// Each makes the six spine terms unavoidable in a different way. The risk of that order was that the
// core would have to be retrofitted to whatever vocabulary the earlier courses invented, so the six
// terms were FIXED in the curriculum doc before any course was written and every course was held to
// them. This course is what they were always pointing at, and it can now be written as a synthesis
// rather than as an introduction.
//
// WHICH CHANGES WHAT IT IS. Not "storytelling 101". It is the course that shows the same six
// decisions operating across a solo play, a ten-minute drama, a set of meeting notes and a news
// story, and explains what genuinely differs between them. A learner can take it first, and it is
// better taken fourth.
//
// SOURCING: real craft literature and real works, cited APA 7, drawn from all three tracks of the
// series so the cross-medium claim is demonstrated rather than asserted.

import type { AuthoredCourse } from "./authored-course";

export const HOW_STORIES_WORK_COURSE: AuthoredCourse = {
  title: "How Stories Work",
  description:
    "Six decisions survive translation into any medium: the change, the owner, want and obstacle, withholding, scene and summary, and the turn. This is the core of the Storytelling series and it was written last on purpose, after the specialized courses had already put those six terms under pressure in a solo play, a ten-minute drama and a set of public meeting notes. It teaches each decision in depth, shows the same one operating in forms that look nothing alike, and is honest about what does NOT transfer: the things that are genuinely properties of a medium rather than of story. It covers structure as a promise to an audience, why most drafts fail at the change rather than the sentence, the ethics of telling stories about real people, and the discipline of knowing when not to make a story at all. Ends with a diagnostic you can run on any draft in any form.",
  lessons: [
    // ══════════════ MODULE 1 · THE SIX ══════════════
    {
      slug: "hsw-written-last",
      title: "1 · Why this course was written last",
      section: "Module 1 · The six decisions",
      body: `This is the core of the series and it is the fifth course in it. That is deliberate, and the reason is worth two minutes because it is also a claim about how craft is learned.

**The usual order is core first, then specialisms.** Teach the fundamentals, then apply them. It reads sensibly and it has a specific failure: fundamentals taught in the abstract sound obvious. Everybody nods at "a story needs a change." Then they write a draft with no change in it, because in the abstract the idea has nowhere to bite.

**So this series inverted it.** Three courses came first, each removing something so a fundamental could not be avoided:

- **Monodrama** removes the structural crutches. One performer, no scene partner, no subplot, no ensemble. **Every one of the six decisions is exposed at once**, because there is nothing to hide a weak one behind.
- **Short-form drama** removes the time. In ten minutes you cannot establish, develop and resolve, so you are forced to discover what an audience will assume without being told.
- **Civic documentation** removes the license to shape at all. Record what happened; do not find the arc. **It teaches the six terms by forbidding you to use them**, which turns out to be the sharpest way to see what they were doing.

**The risk of that order**, and it is real: a core written afterwards has to be retrofitted to whatever vocabulary the earlier courses happened to invent. **So the vocabulary was fixed before any of them was written.** Six terms, defined once, and no course in the series was allowed to invent a synonym. Where a form had its own traditional word (a beat, a reveal, a peripeteia, a lede) the course named it and mapped it back.

Which means this course is not a summary bolted on. **It is the thing the other four were pointing at**, and it can be a synthesis rather than an introduction.

**You may take this first.** It works. It will work better if you have already written something that failed, because the terms will have somewhere to bite.

**What this course does that the others could not.** It shows the same decision operating in forms that look nothing alike: the turn in a solo play and the turn in a news story, withholding in a ten-minute drama and withholding in a set of meeting notes where you are not allowed to withhold anything. **The claim that these six transfer is only worth making if it is demonstrated**, and demonstrating it needs more than one medium in the room.

**And it is honest about what does not transfer.** Some things are genuinely properties of a medium rather than of story, and Lesson 11 says which.

:::reveal Why does teaching "a story needs a change" in the abstract usually fail, and what did this series do instead? ||| Because in the abstract everyone agrees with it and it has nowhere to bite, so the same person writes a changeless draft the following week. The series instead put the idea under pressure first: monodrama removes the crutches that hide a missing change, short form removes the time to disguise it, and documentation forbids shaping altogether. The terms were fixed in advance so the core could be written last as a synthesis rather than retrofitted to whatever the specialized courses had invented.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.`,
    },
    {
      slug: "hsw-change-and-owner",
      title: "2 · The change, and whose it is",
      section: "Module 1 · The six decisions",
      recallContent: [
        {
          prompt: "Name what each of the three specialised courses removes, and what removing it exposes.",
          answer:
            "Monodrama removes the structural crutches (no scene partner, subplot or ensemble), exposing all six decisions at once. Short form removes the time, forcing you to learn what an audience will assume. Civic documentation removes the license to shape at all, which teaches the terms by forbidding their use.",
        },
      ],
      body: `**The change is what is different at the end from the beginning.** A story with no change is an anecdote, and this is the first question asked of any draft in any course in this series.

It is also the question most drafts fail, and they fail it while being well written, which is why it has to be asked first and coldly.

**The three answers that are not changes**

**1. "The audience now knows more."** That is a change in the audience, not in the story. It describes an article, a lecture, or a set of meeting notes, all of which are legitimate things that are not stories.

**2. "Something happened."** An event is not a change. A car crash in which everyone recovers and nothing is different afterwards is an incident.

**3. "The character learned something."** Sometimes true and usually a dodge, because it is unfalsifiable. **Push it to behavior:** what can they now do, or refuse to do, that they could not before?

**The test that works.** Write the sentence: *"At the start, X. At the end, Y."* If Y is only "and now they have been through it," keep pushing.

**The owner: whose change is it?**

Not the narrator, not the most interesting person present: the one the change happens to. In a monodrama these are usually the same person, which is exactly why the form makes it obvious when they are not.

**Where owners get confused, and each is a real failure mode**

- **The observer story.** The narrator watches someone else change and is unaltered. That can work, and only if the watching itself changes the watcher. Otherwise you have written a report about a more interesting person.
- **The group.** "The town changed." Groups do not want things; people do. Find the person the change runs through.
- **The absent owner.** The change belongs to someone who is dead, offstage, or never appears. Powerful when deliberate, fatal when accidental.

**How this looks in the non-fiction tracks**, which is where the term earns itself:

- **In news storytelling**, the owner is frequently misidentified. A story about a policy is a story about nobody. **A story about the person the policy happens to has an owner**, and the policy is the obstacle.
- **In civic documentation you do not get an owner at all**, because you are not permitted to decide whose story the meeting was. That constraint is exactly why documentation is not storytelling, and knowing the difference is what stops you smuggling a narrative into a public record.

:::reveal A draft follows a neighbourhood through a rezoning. Everyone is affected, nobody in particular is followed, and it feels flat. Diagnose it in the vocabulary. ||| It has a change without an OWNER: something is different at the end, but it belongs to a group, and groups do not want things or face obstacles, people do. The fix is to find the person the change runs through and let the neighborhood be visible through them. It is the same error as a news story about a policy rather than about the person the policy happens to, and in both cases the abstraction is what makes it flat rather than the subject being uninteresting.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.`,
    },
    {
      slug: "hsw-want-and-obstacle",
      title: "3 · Want and obstacle",
      section: "Module 1 · The six decisions",
      body: `**The want is what the owner is trying to get. The obstacle is what is in the way.** Both must be concrete enough to point at, and that requirement does more work than any other rule in this course.

**Why concreteness is the whole thing.** "Happiness" cannot be pursued in a scene, so it produces drafts where nothing is attempted. **"To get through the funeral without speaking to my brother"** can be attempted, obstructed, abandoned and achieved, and every one of those is an event.

**The upgrade test:** if you cannot imagine someone succeeding or failing at it in the next ten minutes, it is not yet a want.

**The obstacle decides the shape of the piece.** Four kinds, and they are not equal:

| Obstacle | What it produces | Where it is strongest |
| --- | --- | --- |
| **Another person** | Immediate legibility, and conflict you can stage | Short form, where establishing anything costs time you lack |
| **A situation** | A clock, a pressure, a deadline | Anything with a runtime |
| **The owner themselves** | Interiority, and the risk of stasis | Long form, where you can afford the patience |
| **An institution** | Accuracy about how the world actually thwarts people | Non-fiction, and it is the hardest to dramatise |

**That last row is the one worth dwelling on**, because it is where the true track lives. Real obstacles are frequently institutional: a form that must be filed, a deadline nobody told you about, an office that closes at four. **Institutions are undramatic by design**, which is precisely what makes them hard to write and worth writing.

**The technique that works:** give the institution a face. Not a villain, which is a lie about how institutions work, but a person enacting it. The clerk who cannot make an exception is more useful than "the county," and is also more accurate, because that is how anyone actually meets an institution.

**Wants change, and that is a turn.** A piece where the owner wants the same thing on page one and page forty is usually a piece where nothing happened. **The strongest version:** they get what they wanted and discover it was not the want. The second strongest: they abandon it deliberately, which is why the refusal ending from the short-form course lands.

**In documentation, you record wants rather than assigning them.** A resident at a public meeting wants something and says so. Your job is to record what they said they wanted and why, which the Field Guide's capture list asks for directly. **You do not get to decide what they really wanted**, and the difference between recording a stated want and inferring a true one is the difference between documentation and reporting.

:::reveal Your owner is up against a housing authority. Why is "the housing authority" a weak obstacle, and what is the fix that is also more accurate? ||| Because institutions are undramatic by design: they have no want of their own, cannot be argued with, and nothing can be attempted against them in a scene. The fix is to give it a face, not a villain but a person enacting it, such as the clerk who cannot make an exception. That is also how anybody actually meets an institution, so the dramatic fix and the accurate one are the same fix, which is usually a sign you have found the right one.

## Sources
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "hsw-withholding",
      title: "4 · Withholding, the engine of attention",
      section: "Module 1 · The six decisions",
      body: `**Withholding is what the audience does not know yet, and when they learn it.** It is the engine of attention in every form in this series, and it is the decision writers make least deliberately.

**Why it works.** Attention is not given, it is sustained, and it is sustained by an open question. An audience leans forward because something is missing. **Close every gap as you go and you have written a report**, which is a fine thing to write and is not a story.

**The four things you can withhold**, in rough order of how often they are used well:

1. **What happens next.** The default, and the weakest on its own, because it expires the moment it resolves.
2. **What already happened.** Much stronger. The audience knows something is being circled and does not know what.
3. **What it means.** The audience has the facts and not the significance. This is the one that sustains long work.
4. **Who is telling you.** The most demanding: the audience does not yet know why this voice is speaking or what it wants from them.

**The rule that governs all four:** the audience must know that something is missing. **A gap nobody notices is not withholding, it is just an absence**, and the difference is whether you have planted the awareness. This is the same point the monodrama course makes about unreliable narration: evidence the audience cannot detect is not unreliability, it is a private fact the writer knows.

**The commonest failure is withholding for its own sake.** A piece that hides something the audience would find ordinary, then reveals it as though it were a twist. The test: **when the audience learns it, does the earlier material become richer?** If it merely becomes explicable, you were not withholding, you were delaying.

**And the failure that looks like generosity:** telling the audience everything up front so they can follow easily. It is comfortable and it removes the reason to continue.

**Withholding in the true track**, where it becomes an ethical question rather than a craft one.

- **In news storytelling** you may not withhold the material fact to make a better shape. If the person was acquitted, the audience learns that when it is relevant, not when it is dramatic. **Withholding for effect in factual work is a form of misleading**, even when every sentence is true.
- **In civic documentation you may not withhold at all.** The standard is that a person who was not there can understand what happened, and a note constructed for effect fails it. This is also where it becomes legal: as the Documenters Field Guide notes, omitting important information can put a report outside the fair report privilege that would otherwise protect it (City Bureau, n.d.).

**So the honest formulation:** withholding is the engine of fiction and performed work, a constrained tool in factual storytelling, and prohibited in documentation. **Knowing which room you are in is the skill.**

:::reveal A draft hides a fact and reveals it late. What single test tells you whether that was withholding or merely delay? ||| Whether the earlier material becomes RICHER when the audience learns it, rather than merely explicable. Genuine withholding makes an audience re-read what came before and see it differently, which means the withheld thing was doing work while it was hidden. Delay just leaves them confused for a while and then unconfused, so the piece would have been the same or better with the fact stated up front.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "hsw-quiz-1",
      title: "5 · Knowledge check: the six decisions",
      section: "Module 1 · The six decisions",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why was this core course written after the specialised ones?",
            options: [
              "Fundamentals taught abstractly sound obvious and have nowhere to bite",
              "The specialized courses were commissioned before the core was planned",
              "Core material is harder to write and needed the most preparation",
              "Learners consistently prefer to begin with a specialized subject",
            ],
            correctIndex: 0,
            explanation:
              "Everyone agrees a story needs a change, then writes a changeless draft. The specialized courses put the terms under pressure first, and the vocabulary was fixed in advance so the core could be a synthesis rather than a retrofit.",
            sourceLessonSlug: "hsw-written-last",
          },
          {
            prompt: "Which of these is a genuine change?",
            options: [
              "The audience finishes knowing more than when they started",
              "A dramatic event occurs and is survived by everyone involved",
              "The owner can now refuse something they could not refuse before",
              "The character reflects that they have learned a great deal",
            ],
            correctIndex: 2,
            explanation:
              "Pushing 'they learned something' to behavior is the fix, because behavior is falsifiable. A change in the audience is not a change in the story, and an event that leaves nothing different is an incident.",
            sourceLessonSlug: "hsw-change-and-owner",
          },
          {
            prompt: "A piece follows a whole town through a closure and feels flat. What is the likely diagnosis?",
            options: [
              "The change is too small to sustain the runtime",
              "The change has no owner, because groups do not want things",
              "The withholding closes too early in the piece",
              "The scenes are too long relative to the summary",
            ],
            correctIndex: 1,
            explanation:
              "Groups do not want things or face obstacles; people do. The fix is to find the person the change runs through, which is the same error as a news story about a policy rather than about the person it happens to.",
            sourceLessonSlug: "hsw-change-and-owner",
          },
          {
            prompt: "What is the test for whether something is yet a want?",
            options: [
              "Whether the audience would want it in the same situation",
              "Whether it can be stated in a single short sentence",
              "Whether it is introduced in the opening minutes",
              "Whether someone could succeed or fail at it in the next ten minutes",
            ],
            correctIndex: 3,
            explanation:
              "Happiness cannot be pursued in a scene, so it produces drafts where nothing is attempted. Getting through the funeral without speaking to your brother can be attempted, obstructed, abandoned or achieved.",
            sourceLessonSlug: "hsw-want-and-obstacle",
          },
          {
            prompt: "Why is an institution a difficult obstacle, and what is the fix?",
            options: [
              "It is undramatic by design; give it a face, not a villain",
              "It is legally risky to depict; fictionalise the institution",
              "It is unfamiliar to audiences; explain its structure early",
              "It changes too slowly; compress the timeline instead",
            ],
            correctIndex: 0,
            explanation:
              "Institutions have no want, cannot be argued with, and nothing can be attempted against them in a scene. A clerk who cannot make an exception is both more dramatic and more accurate, since that is how anyone meets an institution.",
            sourceLessonSlug: "hsw-want-and-obstacle",
          },
          {
            prompt: "What distinguishes withholding from an absence?",
            options: [
              "Withholding is planned in outline; absence emerges during drafting",
              "The audience knows something is missing",
              "Withholding concerns the past; absence concerns the future",
              "Withholding is resolved before the ending; absence never is",
            ],
            correctIndex: 1,
            explanation:
              "A gap nobody notices is not withholding. It is the same point the monodrama course makes about unreliable narration: evidence the audience cannot detect is a private fact the writer knows, not a technique.",
            sourceLessonSlug: "hsw-withholding",
          },
          {
            prompt: "What test separates real withholding from mere delay?",
            options: [
              "Whether the reveal occurs in the final third of the piece",
              "Whether the audience guessed the answer before it arrived",
              "Whether earlier material becomes richer, not merely explicable",
              "Whether the withheld fact is surprising to a first-time audience",
            ],
            correctIndex: 2,
            explanation:
              "Genuine withholding makes an audience see what came before differently, meaning the hidden thing was working while hidden. Delay leaves them confused and then unconfused, and the piece would be as good with the fact stated.",
            sourceLessonSlug: "hsw-withholding",
          },
          {
            prompt: "What is the status of withholding in civic documentation?",
            options: [
              "Prohibited, and omission can also cost you legal protection",
              "Encouraged, since notes should build toward the vote",
              "Permitted where the omitted material is not yet confirmed",
              "Required, since documenters must not editorialise",
            ],
            correctIndex: 0,
            explanation:
              "The standard is that someone who was not there can understand what happened, and notes constructed for effect fail it. Omitting important information can also put a report outside the fair report privilege.",
            sourceLessonSlug: "hsw-withholding",
          },
          {
            prompt: "How should 'the character learned something' be handled?",
            options: [
              "Accept it, since internal change is the strongest kind",
              "Push it to behavior: what can they now do or refuse to do?",
              "Replace it with an external event that causes the learning",
              "State it explicitly in the closing lines so it is unmissable",
            ],
            correctIndex: 1,
            explanation:
              "As written it is unfalsifiable, which is why it is usually a dodge. Behaviour can be shown, checked and disagreed with, which is what makes it usable.",
            sourceLessonSlug: "hsw-change-and-owner",
          },
          {
            prompt: "In documentation, what is your relationship to a subject's want?",
            options: [
              "You record the stated want; you do not infer the true one",
              "You infer the want, since people rarely state it plainly",
              "You omit wants entirely as speculative material",
              "You confirm the want with the subject before publishing",
            ],
            correctIndex: 0,
            explanation:
              "The Field Guide's capture list asks for attendees' main concerns and why they were raised. Recording a stated want is documentation; inferring a true one is reporting.",
            sourceLessonSlug: "hsw-want-and-obstacle",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · SHAPE ══════════════
    {
      slug: "hsw-scene-and-summary",
      title: "6 · Scene and summary, everywhere",
      section: "Module 2 · Shape",
      recallContent: [
        {
          prompt: "Name the four things a story can withhold, and the rule that governs all of them.",
          answer:
            "What happens next, what already happened, what it means, and who is telling you. The rule: the audience must know something is missing, because a gap nobody notices is an absence rather than withholding.",
        },
      ],
      body: `**Scene is real time, shown. Summary is compressed, told.** Choosing between them is the most frequent craft decision in any medium, and it is made unconsciously more often than any other.

**The rule that holds across every form in this series:** scene what the change runs through, summarize everything else.

**Why the default drifts toward summary.** Summary is how we naturally recount: we tell people about our lives rather than showing them. It is also faster per unit of story, which makes it feel efficient. **The cost is that summary cannot be disagreed with.** When you are told a man was cruel you either accept it or you do not; when you are shown one cruel thing he did, you conclude it yourself, and a conclusion you reached is one you believe.

**Where each form puts the balance**

| Form | Tendency | The risk |
| --- | --- | --- |
| **Monodrama** | Can move between them mid-sentence, which is its great advantage | The speaker can always explain, so the whole piece becomes told |
| **Short form** | Almost all scene, because there is no time to summarize and then also show | Nothing establishes, so the audience is lost for the first minute |
| **News storytelling** | Mostly summary, with one or two scenes doing enormous work | The scene chosen is decorative rather than load-bearing |
| **Documentation** | Neither, exactly. It is a record | Drifting into scene, which means you have started constructing |

**That last row is worth pausing on.** A set of meeting notes is not summary in the storytelling sense, because summary implies compression toward a point, and a record has no point it is compressing toward. **When notes start to feel like scene, something has usually gone wrong:** you have selected for vividness, which is a narrative instinct arriving where it is not wanted.

**The one-scene rule for factual work.** In news or documentary, the single most valuable structural decision is which moment gets scened. Everything else can be summarized. **Choose the moment where the change becomes visible**, not the most dramatic moment, which are different and frequently confused.

**A practical diagnostic for any draft.** Mark every passage S for scene or Y for summary. Then check: do the S passages coincide with where the change runs? If your scenes are clustered at the beginning, you have written an establishing sequence and then told the rest.

:::reveal Why can summary "not be disagreed with", and why does that make it weaker than scene at carrying the change? ||| Because summary hands the audience a conclusion (he was cruel) rather than the evidence for it, so their only options are to accept it or not. Scene gives them the evidence and lets them reach the conclusion themselves, and a conclusion someone reached is one they believe and remember. That is why the moments the change runs through get scened: those are exactly the ones the audience must believe rather than merely be told.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.`,
    },
    {
      slug: "hsw-turn-and-ending",
      title: "7 · The turn, and what an ending is for",
      section: "Module 2 · Shape",
      body: `**The turn is the moment the change becomes irreversible. The ending is what the story says about the change.** They are different things and collapsing them causes most bad endings.

**Locating the turn in your own draft**, which is harder than it sounds because writers usually think it is later than it is. The test: **after which moment could the owner not go back to who they were at the start?** Not "when did the big event happen." Frequently the turn is a small decision several pages before the big event, and the big event is its consequence.

**Where the turn sits, by form**, and these are tendencies rather than rules:

- **Ten minutes:** around two thirds. Earlier and the last third has nothing to do.
- **A one-act:** the terms change at the midpoint, and the turn comes later.
- **A solo piece of an hour:** anywhere, and the piece is usually about what the turn means rather than about reaching it.
- **A news story:** the turn already happened. You are reporting it, which is why the structure is inverted, with the outcome first.

**That last one is the useful cross-medium observation.** A news story puts the ending first, which looks like a violation of everything above and is not. **The change and the turn still exist; the audience is simply told them immediately** and then given the evidence. What is withheld is not what happened but why it matters and how it came about.

**Endings: three that work in every form**

1. **The cost, paid.** The owner gets what they wanted and the audience sees what it took. Works because they do the arithmetic themselves.
2. **The refusal.** They decline the thing the whole piece pushed toward. A want abandoned deliberately is still a change, and it is often the strongest available.
3. **The image or small action.** Something physical that carries the meaning unstated. The monodrama course argues this is the strongest option for performed work specifically, because change made physical is change an audience can see.

**Two that fail in every form**

- **It stops.** Events conclude, nothing is said about them. Usually a piece that had a turn and never took a position.
- **It explains.** The meaning is stated. Robs the audience of the one thing they came for, which is arriving at it themselves.

**The ending test that applies to any draft:** cover the last thirty seconds, or the last paragraph. **Is it already obvious what changed?** If yes, the ending's only job is to say what it cost, which is an easy job. If no, the piece is back-loaded and the fix is earlier.

:::reveal A news story opens with the outcome. How can that be compatible with everything this course says about withholding and the turn? ||| Because the change and the turn still exist; the audience is simply told them at the top rather than at the end. What is withheld shifts: not WHAT happened, which is given immediately, but why it matters, how it came about, and what it cost. The engine of attention is still an open question, it is just a different question, which is why an inverted structure is a redistribution of withholding rather than an absence of it.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Aristotle. (1996). *Poetics* (M. Heath, Trans.). Penguin. (Original work composed ca. 335 BCE)`,
    },
    {
      slug: "hsw-structure-as-promise",
      title: "8 · Structure is a promise",
      section: "Module 2 · Shape",
      body: `Every structural choice makes a promise to an audience about what kind of attention to bring, and **most structural failures are broken promises rather than bad shapes.**

**What the opening promises**, whether you intend it or not:

- **A tone.** Open funny and turn devastating and you have either done something powerful or betrayed them, and the difference is whether the funny was already carrying the seed of it.
- **A scale.** Open on a nation and end on one kitchen and the audience feels a bait-and-switch, unless the kitchen was visibly the point of the nation.
- **A question.** Whatever the opening makes them wonder is what they will wait for. **If you answer a different question at the end, they will feel cheated even if your answer is better.**
- **A rate.** How fast information arrives in the first minute sets what they expect. A slow open followed by a rapid middle reads as panic; a fast open followed by a slow middle reads as a stall.

**The most common broken promise, in every medium:** an opening that promises a story and a body that delivers a subject. The piece begins with a person in a situation, then becomes an essay about the thing that situation exemplifies. **The audience came for the person.**

**Structure as a set of standard promises**

| Shape | The promise |
| --- | --- |
| **Single sitting** | This will be resolved before we leave this room |
| **Frame and excavation** | The present matters, and the past explains it |
| **List or tour** | Each item will be worth it, and the sequence will mean something |
| **The circle** | We are approaching something, and we will arrive |
| **Inverted (news)** | You have the outcome; now you get the substance |
| **Chronicle (documentation)** | Nothing has been shaped; this is what happened, in order |

**Each of those is broken in a characteristic way.** The list that never adds up. The circle that repeats without progressing. The frame whose present never changes. **The documentation that has been quietly shaped**, which is the one this series cares most about, because the promise it breaks is the promise of a record.

**How to check your own.** Read only your first page, then write down what you have promised: what kind of thing this is, whose it is, what question is open, and how fast it moves. Then read the ending and ask whether that promise was kept. **You are not checking whether the ending is good. You are checking whether it is the ending this opening was for.**

:::reveal An opening introduces a woman losing her home; the piece becomes an essay on housing policy with statistics and history. Name the broken promise and the fix. ||| The opening promised a story with an owner and the body delivered a subject, so the audience came for the person and got the topic. The fix is not to remove the policy material but to keep it subordinate to her: the statistics arrive because they explain her situation, and the piece returns to her. If the policy is genuinely the point, the honest move is to change the opening so it never promised a person, because an audience that has been given an owner will keep waiting for her.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.`,
    },
    {
      slug: "hsw-quiz-2",
      title: "9 · Knowledge check: shape",
      section: "Module 2 · Shape",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the rule for choosing between scene and summary?",
            options: [
              "Scene what the change runs through; summarize everything else",
              "Alternate them evenly so the pace does not become monotonous",
              "Scene the opening and closing; summarize the middle",
              "Use scene for dialogue and summary for everything else",
            ],
            correctIndex: 0,
            explanation:
              "Scene costs more per unit of story, which is why it is reserved. A passage not carrying the change does not need real time.",
            sourceLessonSlug: "hsw-scene-and-summary",
          },
          {
            prompt: "Why is summary weaker than scene at carrying the change?",
            options: [
              "It takes longer to read for the same amount of story",
              "It hands over a conclusion rather than the evidence for it",
              "It cannot include dialogue or direct quotation",
              "Audiences find compressed passages harder to follow",
            ],
            correctIndex: 1,
            explanation:
              "Told a man was cruel, an audience can only accept or reject it. Shown one cruel thing he did, they conclude it themselves, and a conclusion they reached is one they believe.",
            sourceLessonSlug: "hsw-scene-and-summary",
          },
          {
            prompt: "How do you locate the turn in your own draft?",
            options: [
              "Find the most dramatic event and mark the line after it",
              "Find the midpoint by page count and adjust from there",
              "Find the moment after which the owner could not go back",
              "Find the point where the audience first learns the withheld fact",
            ],
            correctIndex: 2,
            explanation:
              "Writers usually think it is later than it is. Often the turn is a small decision several pages before the big event, and the big event is its consequence.",
            sourceLessonSlug: "hsw-turn-and-ending",
          },
          {
            prompt: "A news story opens with the outcome. What does that do to withholding?",
            options: [
              "It removes withholding, which is why news is not storytelling",
              "It withholds the outcome from the headline but not the body",
              "It delays withholding until the final paragraph of the piece",
              "It shifts what is withheld: not what happened, but why it matters",
            ],
            correctIndex: 3,
            explanation:
              "The change and the turn still exist; the audience is simply told them at the top. An inverted structure redistributes withholding rather than abandoning it.",
            sourceLessonSlug: "hsw-turn-and-ending",
          },
          {
            prompt: "Which ending shape does the course say works across every form?",
            options: [
              "The cost, paid: they get what they wanted and you see what it took",
              "The twist: a final reversal that recontextualises the piece",
              "The summary: a closing statement of what the piece has argued",
              "The cliffhanger: an unresolved question left for the audience",
            ],
            correctIndex: 0,
            explanation:
              "Alongside the refusal and the image or small action. It works because the audience does the arithmetic themselves rather than being told the meaning.",
            sourceLessonSlug: "hsw-turn-and-ending",
          },
          {
            prompt: "What is the test for whether an ending is doing too much work?",
            options: [
              "Read it aloud and check whether it exceeds the intended runtime",
              "Cover the last thirty seconds and ask whether the change is already obvious",
              "Remove the final line and see whether the piece still resolves",
              "Ask a reader to predict the ending from the opening page",
            ],
            correctIndex: 1,
            explanation:
              "If the change only becomes clear at the end, the piece is back-loaded and the fix belongs earlier. When it is already clear, the ending only has to say what it cost.",
            sourceLessonSlug: "hsw-turn-and-ending",
          },
          {
            prompt: "What does the course mean by structure being a promise?",
            options: [
              "A writer should outline before drafting and then follow it",
              "Genre conventions oblige a writer to satisfy reader expectations",
              "The opening tells the audience what to expect, and breaking it feels like a cheat",
              "Publishers require a synopsis that the finished work must match",
            ],
            correctIndex: 2,
            explanation:
              "Tone, scale, the open question and the rate of information are all promised in the first minute. Answering a different question at the end feels like a cheat even if the answer is better.",
            sourceLessonSlug: "hsw-structure-as-promise",
          },
          {
            prompt: "What is the most common broken promise across media?",
            options: [
              "An opening that promises a story and a body that delivers a subject",
              "An opening that is funnier than the rest of the piece",
              "An opening that introduces more characters than the piece can carry",
              "An opening that begins in the middle of an ongoing action",
            ],
            correctIndex: 0,
            explanation:
              "The piece begins with a person in a situation, then becomes an essay about what that situation exemplifies. The audience came for the person and keeps waiting for her.",
            sourceLessonSlug: "hsw-structure-as-promise",
          },
          {
            prompt: "What promise does the chronicle shape of documentation make?",
            options: [
              "That every participant will be quoted at equal length",
              "That the most important item will appear first",
              "That the record is complete to the last word spoken",
              "That nothing has been shaped: this is what happened, in order",
            ],
            correctIndex: 3,
            explanation:
              "Which is why documentation that has been quietly shaped is the broken promise this series cares most about: it breaks the promise of a record rather than merely of a story.",
            sourceLessonSlug: "hsw-structure-as-promise",
          },
          {
            prompt: "In factual work, which moment should be the one that is scened?",
            options: [
              "The moment where the change becomes visible",
              "The most dramatic moment available in the material",
              "The moment the reporter was personally present for",
              "The earliest moment, so the piece can proceed chronologically",
            ],
            correctIndex: 0,
            explanation:
              "The most dramatic moment and the moment the change becomes visible are different and frequently confused. Everything else can be summarized.",
            sourceLessonSlug: "hsw-scene-and-summary",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · ACROSS MEDIA ══════════════
    {
      slug: "hsw-what-transfers",
      title: "10 · What transfers, demonstrated",
      section: "Module 3 · Across media",
      recallContent: [
        {
          prompt: "Name the two endings that fail in every form, and what each one is.",
          answer:
            "It stops: events conclude and nothing is said about them, usually a piece that had a turn but never took a position. And it explains: the meaning is stated outright, which robs the audience of arriving at it themselves.",
        },
      ],
      body: `The claim of this series is that six decisions survive translation. **A claim like that is only worth making if it is demonstrated**, so here is the same decision in four forms that look nothing alike.

**The turn, in four places**

- **Monodrama.** A woman describing her father stops using his first name and starts saying "my dad." Nothing is announced. The audience registers that something has resolved.
- **Ten-minute play.** Two people packing a flat. One of them stops packing. The physical clock the scene was running on breaks, and the piece is now about something else.
- **News story.** The moment the council's vote made a demolition irreversible, which the article states in its second paragraph because the audience needs the outcome first.
- **Meeting notes.** **There is no turn**, and there must not be one. The vote is recorded in agenda order alongside eighteen other items, because deciding which one was the turn is deciding what the meeting meant.

**That fourth row is the most useful thing in this course.** The absence proves the concept: you can see exactly what a turn is by watching a form that forbids it.

**Want and obstacle, in four places**

- **Monodrama.** She wants him to have been a good father. The obstacle is her own memory.
- **Ten-minute play.** He wants to leave before she says the thing. The obstacle is her, standing between him and the door, which is why short form loves a person as the obstacle.
- **Documentary.** A family wants to stay in their home. The obstacle is a housing authority, given a face by the caseworker who administers it.
- **Meeting notes.** A resident **states** a want at public comment, and you record it and why it was raised. **You do not assign one.**

**The pattern across all six terms** is the same and worth stating plainly: **the decisions are constant, and the permissions change.** Fiction lets you invent everything. Performed work lets you shape freely from real material. Journalism lets you select and arrange but not invent. **Documentation lets you do almost nothing but record accurately.**

**Which produces the most useful framing this series has to offer:** the forms are not a hierarchy from lesser to greater. **They are a ladder of decreasing permission**, and a writer who has worked at every rung knows exactly which of their instincts is craft and which is merely habit.

**The transferable test, in one line.** In any medium, for any draft: *what is different at the end, whose is it, what did they want, what was in the way, what did the audience not know and when did they learn it, and when did it become irreversible?* **Six questions. If a draft cannot answer them, no amount of sentence work will save it**, and if it can, most problems are fixable.

:::reveal Why does the course say meeting notes having NO turn is the most useful demonstration in it? ||| Because the absence proves the concept. In every other form you can argue about where the turn is or whether it works, but a form that forbids you to identify one shows you exactly what identifying one does: it is deciding what the events meant. A set of notes records the vote in agenda order alongside every other item precisely because choosing which item was the turn would be an interpretation, and that makes the boundary between recording and shaping visible in a way no positive example can.

## Sources
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "hsw-what-does-not",
      title: "11 · What does not transfer",
      section: "Module 3 · Across media",
      body: `A course claiming six universals owes you an honest account of what is genuinely medium-specific. **These are properties of a form, not of story, and treating them as universal is how writers produce work that is technically correct and wrong.**

**1. Rate of information.** How fast an audience can absorb differs enormously. A reader controls their own pace and can go back. A theatre audience cannot. **A short-form video audience has committed nothing and leaves at no cost.** The same density is comfortable in an essay, punishing on stage and fatal on a feed.

**2. What can be shown versus told.** A stage can show a body in a space and struggles to show a memory. Prose does interiority effortlessly and struggles with simultaneity. Film shows two things at once trivially and states an inner thought clumsily. **Every medium has a thing it does for free and a thing it pays for.** Fighting that is the commonest cause of adaptations failing.

**3. The audience's exit cost.** In a theatre, leaving is socially expensive, which buys you patience you have not earned. On a phone it costs nothing, which is why the first seconds are structural rather than decorative. **This single variable explains most differences in opening technique**, and it is not a difference in craft quality.

**4. Revisability.** A reader can re-read. A live audience gets one pass, which means anything essential must be either unmissable or repeated. **Live reporting cannot revise at all** once published, which is why it demands more caution rather than less.

**5. Who controls the order.** Prose and film fix it. A stage mostly fixes it. **A set of meeting notes is read in whatever order the reader wants**, usually by scanning for the item they care about, which is why outcomes must be findable rather than narrated.

**6. Whether the audience is present.** Not just present in the room: present as a party. The direct-address solo show can give them a role. Nothing on a page can.

**The practical upshot, and the reason this lesson exists.** When you move work between forms, **the six decisions travel and these six do not.** So the questions to ask about an adaptation are not "does the story still work" but: has the rate been reset for the new audience, is the thing this medium pays for still being asked of it, and does the opening account for the new exit cost?

**And the honest admission.** A writer excellent in one form is not automatically competent in another, and the gap is almost never the six. **It is these.** Knowing which is which is what stops you either dismissing your own experience or over-trusting it.

:::reveal A stage piece is adapted for short-form video and fails, though the story is unchanged. Which medium-specific properties most likely broke it? ||| The exit cost and the rate of information, working together. A theatre audience has already committed and leaving is socially expensive, which buys patience the writer never had to earn; a feed audience has committed nothing and leaves for free, so an opening that was fine on stage now loses them in seconds. The density that felt right in a room is also likely wrong on a phone. The six decisions traveled intact, which is exactly why the failure is confusing: the story is fine and the delivery assumptions were never reset.

## Sources
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.`,
    },
    {
      slug: "hsw-real-people",
      title: "12 · Stories about real people, and when not to tell one",
      section: "Module 3 · Across media",
      body: `Most stories worth telling involve someone who exists. The series has approached this from three directions and this lesson puts them together, because the rules differ by form and the underlying question does not.

**The underlying question:** what do you owe someone whose life is in your material?

**What each form permits**

| Form | You may | You may not |
| --- | --- | --- |
| **Fiction** | Invent freely | Present invention as fact about an identifiable person |
| **Performed work from life** | Compress, reorder, cut, shape | Fabricate a real person's words or actions as what they said or did |
| **Documentary and journalism** | Select and arrange | Invent, or omit material that changes the meaning |
| **Documentation** | Record | Shape, interpret, or omit important information |

**The line that survives all four**, and it is the one worth memorizing: **shaping is not lying; asserting something false about a real person is.** Compressing three conversations into one is standard. Putting words in a real mouth is not.

**Four questions before you use someone**, from the monodrama course and applicable everywhere:

1. **Are they identifiable?** Not named: identifiable. A sister is identifiable to anyone who knows you have one.
2. **Is the least flattering thing necessary to the change?** If it is, it stays. If it is there because it is true and vivid, that is not enough.
3. **Could you do this with them in the room?** Not will they be. Could you.
4. **Can they answer?** The dead, the very young and the institutionalised cannot. That does not forbid it and it raises the standard.

**And the fifth, which only the true track asks:** did they choose to be in public? An official at a public meeting is doing public business. **A resident who came to speak about their eviction did not come to be profiled**, even though they spoke on the record.

**When not to tell a story at all.** This is the thing the documentation course exists to teach, and it belongs in the core:

- **When the shaping would be the lie.** Some events genuinely have no change, and imposing one misrepresents them.
- **When you cannot verify enough to be fair.** In factual work, an incomplete account of an accusation can be worse than none, and as the Documenters Field Guide notes, omission can also strip the legal protection you were relying on (City Bureau, n.d.).
- **When the person would be harmed and gains nothing.** Not "might be embarrassed." Harmed.
- **When a record would serve better than a story.** Sometimes the useful thing is notes anyone can use, not a piece with your shape on it.

**That last one is the series' quiet argument.** You now have both instincts: the one that finds the arc and the one that refuses to. **Knowing which a situation deserves is the actual skill**, and it is why the documentation course sits in a storytelling series rather than apart from it.

:::reveal Give the one-line rule about real material that holds across fiction, performance, journalism and documentation. ||| Shaping is not lying; asserting something false about a real person is. Compressing three conversations into one, reordering events or cutting a person are all standard and legitimate craft. Fabricating a real person's words or actions and presenting them as what they said or did is not, and that line holds in every form even though what each form permits above it differs considerably.

## Sources
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Wright, D. (2004). *I am my own wife*. Faber & Faber.
- City Bureau. (n.d.). *Know your rights: Open meetings laws* (last updated October 11, 2024). Documenters Field Guide. https://fieldguide.documenters.org/`,
    },
    {
      slug: "hsw-diagnostic-drill",
      title: "13 · Drill: the six-question diagnostic",
      section: "Module 4 · Close",
      body: `Read the symptom, name the failing decision or the fix. Short typed answers, checked forgivingly.

This is the diagnostic to run on any draft, in any medium, before you touch a sentence.`,
      exercise: {
        instructions: "Name the term, the diagnosis or the fix in a few words.",
        items: [
          {
            prompt: "Beautifully written, moving, and nothing is different at the end. What is missing?",
            answer: "the change",
            accept: ["change", "a change", "there is no change"],
            explanation:
              "A story with no change is an anecdote however well written. It is the first question asked of any draft in this series.",
          },
          {
            prompt: "A whole town is affected and the piece feels abstract. Which term is unfilled?",
            answer: "the owner",
            accept: ["owner", "whose change it is", "no owner"],
            explanation:
              "Groups do not want things or face obstacles; people do. Find the person the change runs through.",
          },
          {
            prompt: "The protagonist wants 'to be happy'. What is wrong and what is the test?",
            answer: "not concrete; could they succeed or fail in ten minutes",
            accept: [
              "too abstract, needs to be concrete",
              "not concrete enough",
              "could someone succeed or fail at it",
            ],
            explanation:
              "An abstraction cannot be pursued in a scene, so nothing gets attempted. A concrete want can be tried, obstructed, abandoned or achieved.",
          },
          {
            prompt: "The obstacle is 'the system'. What is the fix?",
            answer: "give it a face, a person enacting it",
            accept: [
              "give the institution a face",
              "a person who enacts it",
              "use a person, not a villain",
            ],
            explanation:
              "Institutions are undramatic by design. A clerk who cannot make an exception is both more dramatic and more accurate.",
          },
          {
            prompt: "A fact is hidden then revealed, and the earlier material is merely explicable afterwards. What was it?",
            answer: "delay, not withholding",
            accept: ["delay", "just delay", "not real withholding"],
            explanation:
              "Genuine withholding makes earlier material richer, meaning the hidden thing was working while hidden.",
          },
          {
            prompt: "The audience is told the father was cold, never shown it. Which balance is wrong?",
            answer: "too much summary, not enough scene",
            accept: ["scene and summary", "too much summary", "needs a scene"],
            explanation:
              "Summary hands over a conclusion; scene supplies the evidence so the audience reaches it themselves.",
          },
          {
            prompt: "Name the moment after which the owner cannot go back to who they were.",
            answer: "the turn",
            accept: ["turn", "the turn or peripeteia"],
            explanation:
              "Distinct from the ending, which is what the story says about the change. Writers usually place it later than it actually is.",
          },
          {
            prompt: "The piece ends by stating what it all meant. What should replace that?",
            answer: "an image or a small action",
            accept: [
              "a small action",
              "an image",
              "the cost paid",
              "a refusal",
              "show it, do not state it",
            ],
            explanation:
              "Explaining robs the audience of arriving at it themselves. The cost paid, the refusal and the image all work across forms.",
          },
          {
            prompt: "An opening introduces a person; the body becomes an essay on a topic. What broke?",
            answer: "the promise the opening made",
            accept: [
              "the promise",
              "promised a story, delivered a subject",
              "broken promise",
            ],
            explanation:
              "The audience came for the person and keeps waiting for her. Either subordinate the topic to her, or change the opening so it never promised a person.",
          },
          {
            prompt: "Real material, and a vivid scene shows a living relative at their worst. What is the test?",
            answer: "is it necessary to the change",
            accept: [
              "necessary to the change",
              "does it earn its place against the change",
              "is it needed for the change",
            ],
            explanation:
              "True and vivid is not sufficient. Real material gets no exemption from earning its place, and shaping is not lying while asserting something false is.",
          },
        ],
      },
    },
    {
      slug: "hsw-capstone",
      title: "14 · Capstone: one story, two forms",
      section: "Module 4 · Close",
      lessonType: "assignment",
      body: `Take one piece of material and build it twice, in two different forms. **The comparison is the assignment**, not either piece on its own.

**The brief.** Choose material you know well: something that happened to you, something you witnessed, or something you can research properly. Then produce **two treatments in different forms**, each short.

**Pick two from:**
- A monologue or solo piece, roughly five minutes
- A ten-minute play, or a scene from one
- A short-form video script, ninety seconds
- A news-style account, four hundred words
- A set of documentation-style notes, if the material is a real event you attended

**What to submit.**

**1. The six answers, once**, for the material itself, before either treatment: the change, the owner, the want, the obstacle, what is withheld and when, and the turn. **These should be the same for both versions.** If they are not, you have two different stories and should say so.

**2. The two treatments.**

**3. What you had to change, and why.** The heart of the assignment. For each treatment: what did the FORM demand? What did you have to cut, reorder, show instead of tell, or state instead of imply? Refer to Lesson 11 by name: which of the medium-specific properties forced each change?

**4. What you could not do in one of them**, and whether that was a loss or a discipline. Both answers are legitimate and the interesting ones are usually mixed.

**5. Which version is better, and why.** Commit. Then say what the weaker one showed you that the stronger one hid, because that is usually the real finding.

**6. If your material involves real people**, one paragraph on how you handled it: who is identifiable, whether the least flattering material is necessary, and whether you could do this with them present.

**If you choose documentation as one of your two**, you will discover you cannot do the assignment normally, because documentation forbids you to choose a turn or an owner. **Say that in your submission.** Noticing precisely where the form refuses you is a better result than working around it, and it is the sharpest demonstration of what the other five decisions actually do.

**What a strong submission looks like.** Identical six answers across both, at least three specific form-driven changes named with the property that forced them, a committed judgment, and one honest admission of something that did not work.`,
    },
    {
      slug: "hsw-review-and-sources",
      title: "15 · Cumulative review and sources",
      section: "Module 4 · Close",
      body: `**The six, and they are the whole course**

1. **The change.** What is different at the end. No change, no story. Push "they learned something" to behavior.
2. **The owner.** Whose change it is. Not the narrator, not the most interesting person, and never a group.
3. **Want and obstacle.** Both concrete enough to point at. Could someone succeed or fail at it in ten minutes? Give an institution a face.
4. **Withholding.** What the audience does not know yet and when they learn it. They must know something is missing. Real withholding makes earlier material richer.
5. **Scene and summary.** Scene what the change runs through. Summary hands over a conclusion; scene supplies the evidence.
6. **The turn.** When the change becomes irreversible. Distinct from the ending, which says what it meant.

**Structure is a promise.** The opening commits you to a tone, a scale, an open question and a rate. Most structural failures are broken promises rather than bad shapes.

**Endings that work:** the cost paid, the refusal, the image or small action. **Endings that fail:** it stops, it explains. Cover the last thirty seconds and ask whether the change is already obvious.

**What transfers is the six. What does not** is rate of information, what a medium shows for free, the audience's exit cost, revisability, who controls the order, and whether the audience is a party. **A writer excellent in one form who struggles in another is almost never failing at the six.**

**The forms are a ladder of decreasing permission**, not a hierarchy of value: fiction invents, performed work shapes, journalism selects and arranges, documentation records. Working at every rung tells you which of your instincts is craft and which is habit.

**Shaping is not lying. Asserting something false about a real person is.** That line holds in every form.

**And the last thing, which is the series' argument.** You now have two instincts: the one that finds the arc, and the one that refuses to. **Knowing which a situation deserves is the skill.** Sometimes the useful thing is not a story at all. It is a record somebody else can use.

:::reveal Without looking back, give the six-question diagnostic you would run on any draft in any medium. ||| What is different at the end from the beginning? Whose change is it? What did they want, and what was in the way? What did the audience not know, and when did they learn it? Where does the change become irreversible? And which moments are scened rather than summarized, and do those coincide with where the change runs? If a draft cannot answer those, no amount of sentence work will save it.

## Sources
- Aristotle. (1996). *Poetics* (M. Heath, Trans.). Penguin. (Original work composed ca. 335 BCE)
- Ball, D. (1983). *Backwards and forwards: A technical manual for reading plays*. Southern Illinois University Press.
- Bogart, A. (2001). *A director prepares: Seven essays on art and theatre*. Routledge.
- Brook, P. (1968). *The empty space*. MacGibbon & Kee.
- City Bureau. (n.d.). *Documenters field guide*. https://fieldguide.documenters.org/
- City Bureau. (2024, October 11). *Note-taking assignment tips*. Documenters Field Guide.
- Egri, L. (1946). *The art of dramatic writing*. Simon & Schuster.
- Smith, A. D. (1993). *Fires in the mirror: Crown Heights, Brooklyn and other identities*. Anchor Books.
- Wright, D. (2004). *I am my own wife*. Faber & Faber.`,
    },
  ],
};
