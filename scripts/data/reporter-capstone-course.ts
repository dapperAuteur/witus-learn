import type { AuthoredCourse } from "./authored-course";

// REPORT-99 · Capstone: Report the Beat (plans/68).
//
// The specification is BAM's, from plans/68's course table: "One quick-turn story and one enterprise
// pitch on a beat the learner chooses: one records request, one public data report read properly,
// two interviews, and a written note on what they could not confirm."
//
// A capstone teaches almost nothing new on purpose. Its job is to make the learner do the thing end
// to end with enough scaffolding to finish, which is the same principle the Researcher track's
// capstone states. What it adds is the assessment standard, and the standard here is deliberately
// NOT "did you get a good story": it is whether every claim carries the confidence level the file
// supports, and whether a stranger could reconstruct how each one was established.
//
// plans/68 decided the capstone stays an ASSESSED EXERCISE rather than a set of real clips, so
// nothing here requires the learner to publish anything or to have an outlet.
export const REPORTER_CAPSTONE_COURSE: AuthoredCourse = {
  title: "Reporter 99: Capstone, Report the Beat",
  description:
    "Run the whole method once, on a beat you choose. One records request filed and followed. One public data report read against its own tables. Two interviews conducted to the standard the track sets. One quick-turn story and one enterprise pitch. And a written note of what you could not confirm, which is the piece of work this capstone is actually graded on.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "choose-the-beat",
      title: "1 · Choosing a beat you can actually work",
      section: "Section 1 · Choosing the beat",
      body: `The first decision decides everything after it, and most capstones that fail were lost here rather than in the reporting.

**What the capstone requires of the beat, mechanically.** A public body that holds records you can request. A published data report about the subject, from any credible publisher. At least two people who will speak to you, one of whom is not an official. And something happening within your working window that a quick-turn story could cover. If a candidate beat is missing one of those four, it will not carry the exercise.

**Choose small.** One school district rather than education. One county's emergency medical service rather than rural health. The narrow version has the same structure as the wide one, it is reportable in weeks rather than years, and every course in this track works better at a scale where you can meet the same people twice.

**Choose near.** Somewhere you can physically go, whose meetings you can attend, whose records office has a phone number that reaches a person. Distance costs you the two things the track relies on most, which are showing up and being reachable, and no amount of diligence replaces them.

**Choose something with a document trail.** A body that meets in public, publishes an agenda, awards contracts, files reports, or is inspected by somebody. A subject whose entire evidence base is people's recollections is a harder exercise and it will not exercise the records or data halves of the method at all.

**Do not choose your employer, your family, or anything you are already an advocate about.** Not because those are unreportable, but because the capstone is meant to exercise the method rather than test whether you can manage a conflict, and a disclosure problem in an assessed exercise teaches you less than a clean run does.

**And write down why you chose it, in three sentences.** What the beat is, what makes it workable under the four requirements, and what you think you might find. Keep it: the third sentence is worth rereading at the end, because the gap between what you expected and what you found is one of the more useful things this exercise produces.

:::reveal What four things must a candidate beat have for this capstone to work? ||| A public body holding requestable records, a published data report about the subject, at least two people who will speak including one non-official, and something happening in your window that a quick-turn story could cover.

:::reveal Why choose small and near? ||| The narrow version has the same structure as the wide one and is reportable in weeks, and distance costs you showing up and being reachable, which is what the whole track relies on.

:::reveal Why not choose a beat you are already an advocate about? ||| Because the capstone exercises the method rather than testing conflict management, and a clean run teaches more than a disclosure problem inside an assessed exercise.

## Vocabulary
- **The four requirements**: requestable records, a published report, two willing sources including one non-official, and a coverable event.
- **Choosing small**: one district or one county rather than a whole subject, so the same structure is reportable in weeks.
- **Document trail**: agendas, contracts, filings, and inspections, without which the records and data halves cannot be exercised.
- **The three sentences**: what the beat is, why it is workable, and what you expect to find, reread at the end.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "capstone-beat-memo",
      title: "2 · The capstone beat memo",
      section: "Section 1 · Choosing the beat",
      body: `Write the beat memo REPORT-00 specified, at capstone scale, before any reporting begins. It takes an afternoon and it is the document everything else is checked against.

**Six things it contains.** The scope in one sentence, including what is deliberately out. Three questions you intend to be able to answer that nobody can answer now. The four inventories: institutions, documents, people, and calendar. The communities you owe coverage to, named specifically. What would tell you the beat was covered rather than attended. And your disclosure line, if you have any relationship to anything on the beat.

**The out-of-scope sentence is the one to labor over.** At capstone scale the temptation to expand is enormous, because every institution touches another and the reporting keeps opening doors. Writing down what you will not cover, and who does cover it, is what lets you finish inside a working window rather than producing four unfinished halves.

**Three questions, not one and not ten.** One is a story rather than a beat. Ten is a wish list. Each question implies a document, a denominator, and a person who has to answer, which is the test REPORT-00 set and it holds here exactly.

**Build the calendar first among the inventories.** Meetings, budget dates, report releases, contract renewals, and filing deadlines inside your working window. It is what tells you whether the fourth requirement from the last lesson is really satisfied, and it will decide when the quick-turn story is possible.

**The disclosure line is not optional even in an exercise.** If you live in the district, use the service, know somebody on the board, or have any stake at all, it goes in the memo and it goes in anything you write. The track carries its own disclosure in REPORT-00's first lesson, and an exercise that skipped its own would be teaching the wrong habit at the moment the habit is being formed.

**Revise it once, in the middle.** Not at the end, when it is a report on what happened, but at the midpoint, when it can still change what you do. Mark what changed and why, because that annotation is evidence of a method running rather than a plan being written.

:::reveal Why is the out-of-scope sentence the hardest part at capstone scale? ||| Because the reporting keeps opening doors and every institution touches another, so without a written boundary the exercise produces four unfinished halves instead of a finished one.

:::reveal Why three questions rather than one or ten? ||| One is a story rather than a beat and ten is a wish list. Each question must imply a document, a denominator, and a person who has to answer.

:::reveal When is the memo revised, and why then? ||| At the midpoint, when it can still change what you do, with what changed and why marked, because that annotation is evidence of a method rather than a plan.

## Vocabulary
- **Capstone beat memo**: the six-part memo written before reporting begins, against which everything else is checked.
- **Out-of-scope sentence**: the written boundary that makes finishing inside a working window possible.
- **Three questions**: consequential, answerable questions each implying a document, a denominator, and a person.
- **Midpoint revision**: an annotated change to the memo made while it can still affect the reporting.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-file-and-the-calendar",
      title: "3 · The file, and the week you actually have",
      section: "Section 1 · Choosing the beat",
      body: `The beat file is the deliverable nobody expects to be a deliverable, and in this capstone it is assessed. Set it up before the first phone call, because a file assembled afterward is a reconstruction.

**Five parts, each with a rule.** A signal log, one line per entry: date, document, question. A chronology of the beat's events with a source attached to each. A contact list with a next-contact date. A documents folder holding what you downloaded rather than links to it. And a claim list, which is the artifact the whole assessment turns on and which the next section builds.

**The provenance rule, applied from the first entry.** Every item names where it came from: document, page, date. Ten seconds per entry, and it is the difference between a note that becomes a publishable sentence and a note that becomes a question you cannot answer in week three.

**Plan the working window backwards from the deadline.** Records take longest and are least controllable, so the request goes first, in week one, before you know exactly what you want. Interviews need scheduling. The report can be read any time and therefore always gets postponed, so give it a fixed slot. The quick-turn story is triggered by the calendar rather than by you, so it lands where it lands.

**A workable shape for a four-week window.** Week one: memo, file, records request filed, calendar built, first listening contact. Week two: read the report properly, work the signal log, arrange interviews. Week three: interviews, records follow-up, quick-turn if the calendar offers it. Week four: the enterprise pitch, the note of what you could not confirm, and the file tidied for a reader who is not you.

**Protect one block that is not attached to any deliverable.** Listening, as REPORT-00 required. It is the first thing an exercise cuts and it is where the enterprise pitch usually comes from, which is the whole argument for protecting it in a real week too.

**And log the process as it happens.** Dates filed, dates promised, who answered and who did not, what you were told and by whom. That log is not paperwork. In this capstone it is a substantial part of what is being assessed, because it is the only evidence that the method ran rather than being described.

:::reveal Why does the records request go first, before you know exactly what you want? ||| Records take longest and are least controllable, so the request has to be filed in week one and narrowed later, which the records course said is cheap while refiling is a new clock.

:::reveal Which deliverable always gets postponed, and what prevents that? ||| Reading the report, because it can be done at any time. Giving it a fixed slot is what stops it sliding to the last week.

:::reveal Why is the process log part of the assessment? ||| Because it is the only evidence that the method actually ran rather than being described afterward.

## Vocabulary
- **Beat file**: signal log, sourced chronology, contact list, documents folder, and claim list, set up before the first call.
- **Provenance rule**: every entry naming its document, page, and date, applied from the first entry rather than retrofitted.
- **Backward planning**: sequencing the window from the deadline, with records first because they are slowest and least controllable.
- **Process log**: dates filed and promised, who answered, and what you were told, which is assessed evidence rather than paperwork.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-choosing-the-beat",
      title: "4 · Knowledge check: choosing the beat",
      section: "Section 1 · Choosing the beat",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Where are most failed capstones actually lost?",
            options: [
              "In the choice of beat",
              "In the records request, which arrives too late to be useful",
              "In the interviews, where sources decline to speak on the record",
              "In the writing, which is where a weak file becomes visible",
            ],
            correctIndex: 0,
            explanation:
              "The first decision decides everything after it, which is why the four requirements are checked before any reporting begins.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Which of these is one of the four requirements a candidate beat must meet?",
            options: [
              "A public body that holds records you can request",
              "A subject the outlet has not covered in the previous year",
              "A dispute between two parties who will both speak",
              "An institution that has previously refused a records request",
            ],
            correctIndex: 0,
            explanation:
              "With a published data report, two willing sources including one non-official, and something happening in your window a quick-turn could cover.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "How many of the two required sources must not be an official?",
            options: [
              "At least one",
              "Both, since officials are covered by the records request",
              "Neither, since officials are the most reliable sources",
              "It depends on whether the records request succeeds",
            ],
            correctIndex: 0,
            explanation:
              "Because the interviewing course is built for the conversation with somebody the institution acts on rather than somebody who speaks for it.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Why choose small?",
            options: [
              "The narrow version has the same structure and is reportable in weeks",
              "Because a smaller beat requires fewer records requests",
              "Because assessors prefer capstones on local subjects",
              "Because small beats produce more publishable material",
            ],
            correctIndex: 0,
            explanation:
              "One school district rather than education. Every course in the track works better where you can meet the same people twice.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does distance cost you?",
            options: [
              "Showing up and being reachable",
              "Access to the records the body holds",
              "The ability to attend public meetings at all",
              "The credibility a local reporter has with sources",
            ],
            correctIndex: 0,
            explanation:
              "The two things the track relies on most, and no amount of diligence replaces them.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Why does the beat need a document trail?",
            options: [
              "A subject resting only on recollection exercises neither records nor data",
              "Because documents are more reliable than interviews",
              "Because assessors require a minimum number of primary sources",
              "Because a document trail shortens the reporting window",
            ],
            correctIndex: 0,
            explanation:
              "A body that meets in public, publishes an agenda, awards contracts, files reports, or is inspected by somebody.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Why not choose a subject you are already an advocate about?",
            options: [
              "The capstone exercises the method rather than testing conflict management",
              "Because such subjects cannot be reported fairly by anybody",
              "Because the professional code prohibits reporting on personal causes",
              "Because advocacy disqualifies the resulting work from assessment",
            ],
            correctIndex: 0,
            explanation:
              "A clean run teaches more than a disclosure problem inside an assessed exercise.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What do the three sentences record, and which is reread at the end?",
            options: [
              "What the beat is, why it is workable, and what you expect to find, with the third reread",
              "The scope, the questions, and the calendar, with the first reread",
              "The institutions, the documents, and the people, with the second reread",
              "The deliverables, the deadline, and the assessment criteria, with the third reread",
            ],
            correctIndex: 0,
            explanation:
              "The gap between what you expected and what you found is one of the more useful things the exercise produces.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "When is the capstone beat memo written?",
            options: [
              "Before any reporting begins",
              "After the first week, once the beat is better understood",
              "At the midpoint, alongside the revision",
              "At the end, as a summary of what was covered",
            ],
            correctIndex: 0,
            explanation:
              "It takes an afternoon and it is the document everything else is checked against.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "How many things does the capstone memo contain?",
            options: [
              "Six",
              "Four, matching the inventories in the beat map",
              "Three, matching the questions it commits to",
              "Nine, one for each course in the track",
            ],
            correctIndex: 0,
            explanation:
              "Scope, three questions, four inventories, named communities, the measure of coverage, and a disclosure line.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Why is the out-of-scope sentence the one to labor over at capstone scale?",
            options: [
              "The reporting keeps opening doors and every institution touches another",
              "Because assessors read it first among the memo's parts",
              "Because it determines which records can be requested",
              "Because it fixes the length of the finished deliverables",
            ],
            correctIndex: 0,
            explanation:
              "Without it the exercise produces four unfinished halves rather than a finished one.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Why three questions rather than one or ten?",
            options: [
              "One is a story and ten is a wish list",
              "Three matches the number of deliverables in the exercise",
              "Three is the maximum a four-week window allows",
              "Three is what the assessment rubric specifies",
            ],
            correctIndex: 0,
            explanation:
              "Each must imply a document, a denominator, and a person who has to answer.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Which inventory is built first, and why?",
            options: [
              "The calendar, because it decides whether a quick-turn is possible",
              "The people, because interviews take longest to arrange",
              "The documents, because records requests are slowest",
              "The institutions, because they define the beat's boundary",
            ],
            correctIndex: 0,
            explanation:
              "It tells you whether the fourth requirement is really satisfied within your window.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "When is the disclosure line required?",
            options: [
              "Whenever you have any stake at all in anything on the beat",
              "Only where a financial interest exists",
              "Only where the assessor asks about a relationship",
              "Never, since an exercise publishes nothing",
            ],
            correctIndex: 0,
            explanation:
              "The track carries its own disclosure in its first lesson, and an exercise that skipped its own would teach the wrong habit at the moment it is being formed.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "When is the memo revised, and why then?",
            options: [
              "At the midpoint, when it can still change what you do",
              "At the end, when the full picture is available",
              "Weekly, so it always reflects the current reporting",
              "Only if the beat proves to be too large",
            ],
            correctIndex: 0,
            explanation:
              "With what changed and why marked, because that annotation is evidence of a method running rather than a plan being written.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "What are the five parts of the beat file?",
            options: [
              "Signal log, chronology, contacts, documents folder, claim list",
              "Memo, calendar, request log, interviews, and the note",
              "Notes, recordings, transcripts, drafts, and corrections",
              "Institutions, documents, people, calendar, and communities",
            ],
            correctIndex: 0,
            explanation:
              "The claim list is the artifact the whole assessment turns on.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "When is the file set up?",
            options: [
              "Before the first phone call",
              "After the memo is approved by an assessor",
              "Once the records request has been answered",
              "In the final week, when the material is complete",
            ],
            correctIndex: 0,
            explanation:
              "Because a file assembled afterward is a reconstruction, and the stranger test detects reconstructions.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the provenance rule require of every entry?",
            options: [
              "Document, page, and date",
              "A confidence level and a source category",
              "An assessor's initials and a timestamp",
              "A link to the original online location",
            ],
            correctIndex: 0,
            explanation:
              "Ten seconds per entry, and it is the difference between a publishable sentence and a question you cannot answer in week three.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Why does the records request go first?",
            options: [
              "Records take longest and are least controllable",
              "Because the statute requires filing before any interview",
              "Because a request cannot be narrowed once filed",
              "Because assessors weight the records deliverable most heavily",
            ],
            correctIndex: 0,
            explanation:
              "It goes in during week one, before you know exactly what you want, and is narrowed later.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Which deliverable always gets postponed?",
            options: [
              "Reading the report",
              "Filing the records request",
              "Arranging the interviews",
              "Writing the beat memo",
            ],
            correctIndex: 0,
            explanation:
              "Because it can be done at any time, which is why it gets a fixed slot in the plan.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "In the four-week shape, what happens in week one?",
            options: [
              "Memo, file, request filed, calendar built, first listening contact",
              "Interviews, records follow-up, and the quick-turn story",
              "Reading the report and working the signal log",
              "The enterprise pitch and the note of what could not be confirmed",
            ],
            correctIndex: 0,
            explanation:
              "Everything that is slow or that everything else depends on.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What happens in week four?",
            options: [
              "The pitch, the note, and the file tidied for a reader who is not you",
              "The records request and the calendar",
              "The interviews and the report",
              "The memo revision and the listening block",
            ],
            correctIndex: 0,
            explanation:
              "The quick-turn story lands wherever the calendar offers it rather than being scheduled.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Which block is protected even though it is attached to no deliverable?",
            options: [
              "Listening",
              "Reading the report",
              "The records follow-up",
              "The file tidying",
            ],
            correctIndex: 0,
            explanation:
              "It is the first thing an exercise cuts and it is where the enterprise pitch usually comes from.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Why is the process log part of the assessment?",
            options: [
              "It is the only evidence the method ran rather than being described",
              "Because assessors require a record of hours worked",
              "Because it substitutes for the sourcing chain",
              "Because it establishes the reporter's compliance with the statute",
            ],
            correctIndex: 0,
            explanation:
              "Dates filed, dates promised, who answered and who did not, what you were told and by whom.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What is a beat that is missing one of the four requirements?",
            options: [
              "Unable to carry the exercise",
              "Workable with an extra week of reporting",
              "Acceptable if the missing element is the data report",
              "Acceptable if the reporter documents the gap",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the four are checked before the memo rather than discovered in week three.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Which is a correctly scaled capstone beat?",
            options: [
              "One county's emergency medical service",
              "Rural health across the state",
              "National provision of emergency care",
              "The relationship between funding and outcomes generally",
            ],
            correctIndex: 0,
            explanation:
              "The narrow version has the same structure as the wide one and is reportable in weeks rather than years.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does the memo's fifth part specify?",
            options: [
              "What would tell you the beat was covered rather than attended",
              "Which formats the finished work will take",
              "How the reporting time will be divided across weeks",
              "Which assessor will read the finished deliverables",
            ],
            correctIndex: 0,
            explanation:
              "It is the measurement written in advance, which is what the beat course required and what the annual read checks against.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "What does the claim list do in the file?",
            options: [
              "Carries the artifact the assessment turns on",
              "Records which institutions hold which documents",
              "Lists the sources contacted and their availability",
              "Tracks the deadlines for each deliverable",
            ],
            correctIndex: 0,
            explanation:
              "It is built in the next section and every output derives from it.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the documents folder hold?",
            options: [
              "What you downloaded rather than links to it",
              "A list of every document the beat's bodies publish",
              "Only the documents obtained through the records request",
              "Scanned copies of the reporter's own notes",
            ],
            correctIndex: 0,
            explanation:
              "Because agency websites reorganize and links die, which the beat course established as the reason for keeping the file rather than the reference.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the chronology attach to each event?",
            options: [
              "A source",
              "A confidence level",
              "A next-contact date",
              "An assessor's note",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes it usable for writing background in minutes rather than in an afternoon.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the contact list carry beside each name?",
            options: [
              "A next-contact date",
              "A confidence level for what they told you",
              "The ground rules agreed at the last conversation",
              "The date the person was first identified",
            ],
            correctIndex: 0,
            explanation:
              "Which is what turns keeping sources into a task rather than an intention.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What is the signal log's entry format?",
            options: [
              "Date, document, question",
              "Source, claim, confidence",
              "Institution, contact, outcome",
              "Deadline, deliverable, status",
            ],
            correctIndex: 0,
            explanation:
              "One line per entry, which is what makes the log survivable across a working window.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the course say about a beat whose evidence base is only recollection?",
            options: [
              "It exercises neither the records nor the data half of the method",
              "It is the most demanding kind of beat to report",
              "It requires a longer working window than four weeks",
              "It cannot produce a quick-turn story at all",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a document trail is one of the four requirements checked before anything else.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does the memo's fourth part name?",
            options: [
              "The communities you owe coverage to, specifically",
              "The documents each institution publishes on a schedule",
              "The three questions the year will answer",
              "The disclosure of any relationship you hold",
            ],
            correctIndex: 0,
            explanation:
              "Named specifically rather than as the community, because a name in a memo is checkable and a good intention is not.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "What is the practical value of writing why you chose the beat?",
            options: [
              "The gap between expectation and finding is a useful output",
              "It satisfies the assessment's documentation requirement",
              "It establishes priority if two learners choose the same beat",
              "It commits you to the beat for the whole window",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the third sentence in particular is kept and reread at the end.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does backward planning start from?",
            options: [
              "The deadline",
              "The first available meeting on the calendar",
              "The date the records request is answered",
              "The week the interviews can be scheduled",
            ],
            correctIndex: 0,
            explanation:
              "With records first because they are slowest and least controllable.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What happens in week two of the four-week shape?",
            options: [
              "Read the report properly, work the signal log, arrange interviews",
              "File the records request and build the calendar",
              "Conduct the interviews and follow up on records",
              "Write the pitch and the note",
            ],
            correctIndex: 0,
            explanation:
              "The report gets its fixed slot here precisely because it is the deliverable that otherwise slides.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What triggers the quick-turn story's timing?",
            options: [
              "The calendar rather than the reporter",
              "The assessor, who sets a filing date",
              "The records response, once documents arrive",
              "The interviews, once both are complete",
            ],
            correctIndex: 0,
            explanation:
              "Which is why it lands where it lands rather than being scheduled into a particular week.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What does the course mean by tidying the file for a reader who is not you?",
            options: [
              "Making it satisfy the stranger test",
              "Removing material that did not reach the finished pieces",
              "Formatting it to the assessor's template",
              "Anonymizing the sources who spoke on background",
            ],
            correctIndex: 0,
            explanation:
              "Every claim naming its origin, every confidence level recorded, and every promise written down.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Which of the four requirements concerns the working window specifically?",
            options: [
              "Something happening that a quick-turn story could cover",
              "A public body holding requestable records",
              "A published data report about the subject",
              "Two people who will speak to you",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the calendar is built first among the inventories: it is what tests that requirement.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What kind of finding is narrowing the beat at the midpoint?",
            options: [
              "A method finding rather than a confession",
              "A failure that must be disclosed to the assessor",
              "A neutral administrative change",
              "Grounds for extending the working window",
            ],
            correctIndex: 0,
            explanation:
              "Marked with what changed and why, which is evidence of a method running.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Where does the disclosure line appear?",
            options: [
              "In the memo and in anything you write",
              "In the memo only, since nothing publishes",
              "In the assessor's cover note",
              "In the note of what could not be confirmed",
            ],
            correctIndex: 0,
            explanation:
              "Because the habit is being formed here, and an exercise that skips its own teaches the wrong one.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "What is the cost of a file assembled afterward?",
            options: [
              "It cannot pass the stranger test",
              "It takes longer than keeping one continuously",
              "It omits the documents that were downloaded",
              "It cannot be handed to another reporter",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the file is set up before the first phone call rather than after the reporting.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "How long does the capstone memo take to write?",
            options: [
              "An afternoon",
              "A full week of preliminary reporting",
              "As long as the reporting itself",
              "A morning each week across the window",
            ],
            correctIndex: 0,
            explanation:
              "And it is the document everything else is checked against.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Why does the exercise avoid a beat involving your employer or family?",
            options: [
              "It would test conflict management rather than the method",
              "Because such beats are unreportable in principle",
              "Because assessors cannot evaluate work with a conflict",
              "Because the professional code prohibits it entirely",
            ],
            correctIndex: 0,
            explanation:
              "Not because those are unreportable, but because a clean run teaches more inside an assessed exercise.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does the course say about protecting the listening block in a real week?",
            options: [
              "The same argument applies, because it is where the pitch comes from",
              "It matters less outside an assessed exercise",
              "It should be replaced by the file review once a beat is established",
              "It applies only where the beat covers a defined community",
            ],
            correctIndex: 0,
            explanation:
              "It is the first thing an exercise cuts, which is exactly the pattern the beat course described in a working week.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Which four things does the process log record?",
            options: [
              "Dates filed, dates promised, who answered, and what you were told",
              "Hours worked, tasks completed, deliverables produced, and deadlines met",
              "Claims made, sources used, levels assigned, and checks run",
              "Institutions contacted, documents requested, and fees paid",
            ],
            correctIndex: 0,
            explanation:
              "It is not paperwork. It is a substantial part of what is assessed.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What is the first of the memo's six parts?",
            options: [
              "The scope in one sentence, including what is out",
              "The four inventories in list form",
              "The named communities the beat owes coverage to",
              "The disclosure of any relationship held",
            ],
            correctIndex: 0,
            explanation:
              "And the out-of-scope half is the one to labor over at capstone scale.",
            sourceLessonSlug: "capstone-beat-memo",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "the-records-request",
      title: "5 · The records request",
      section: "Section 2 · The evidence",
      body: `One request, filed and followed to a conclusion. The conclusion may be documents, a denial, a fee estimate, or silence, and all four are complete answers for this exercise.

**What you are being asked to produce.** The exact text you filed, with the statute you invoked and the date. The body's legal name and the office you sent it to. Every acknowledgment, extension, and promised date. The response, whatever it was. And, if there was a denial or a fee, what you did next.

**Write it to the seven-part shape from REPORT-01.** Statute, records sought with custodian and exact date range, format, record layout if data, fee position, a request for partial releases, and contact details with an offer to narrow. Scope it so it is answerable: a named custodian, a named system, and a date range, rather than all documents relating to a subject.

**Do the informal ask first, and record that you did.** Call the office, describe what you want, and ask whether it can simply be sent. Then file anyway, because a verbal no is not appealable and this exercise needs a written trail. Both halves go in the log.

**A denial is a better outcome for the exercise than a release.** Not because you should provoke one, but because a denial gives you the whole second half of REPORT-01 to run: reading the letter's five required elements, sorting the answer into its real category, asking how the search was conducted, and drafting the appeal. Do all of that, whether or not you file the appeal within the window.

**If the response arrives after your deadline, that is a finding.** Record the statutory period, the date filed, the date promised, and the date it actually arrived or had not. An agency's own response time is a fact about that agency, and REPORT-01 called it publishable process coverage.

**Two things not to do.** Do not file six requests to guarantee one comes back, which is how an exercise becomes a burden on a small office. And do not misrepresent who you are or why you want it: a request made for a course is made by a person exercising a public right, and the right does not depend on the reason.

:::reveal What are the four possible conclusions, all of which complete the exercise? ||| Documents, a denial, a fee estimate, or silence. Each is a complete answer, and each exercises a different half of the records course.

:::reveal Why is a denial arguably a better outcome for this exercise? ||| Because it lets you run the whole second half of REPORT-01: the letter's required elements, the answer's real category, how the search was run, and the appeal.

:::reveal Why not file six requests to guarantee one comes back? ||| Because it turns an exercise into a burden on a small office, and the exercise is about running one request properly rather than maximizing the chance of documents.

## Vocabulary
- **The four conclusions**: documents, denial, fee estimate, or silence, all of which complete the deliverable.
- **Answerable scope**: a named custodian, a named system, and an exact date range rather than a subject.
- **The written trail**: the filed text, acknowledgments, promised dates, and the response, kept because a verbal exchange proves nothing.
- **Response time as a finding**: the gap between the statutory period and what actually happened, which is publishable process coverage.

## Sources
- Freedom of Information Act, 5 U.S.C. 552. https://www.law.cornell.edu/uscode/text/5/552
- Reporters Committee for Freedom of the Press. (n.d.). *Open government guide*. https://www.rcfp.org/open-government-guide/`,
    },
    {
      slug: "the-report-read-properly",
      title: "6 · One report, read against its own tables",
      section: "Section 2 · The evidence",
      body: `Find one published data report about your beat and run REPORT-02's method on it end to end. The deliverable is short and it is specific.

**Choose a report that has tables.** Any credible publisher: a state agency, a nonprofit, a university center, a national compiler. It needs an executive summary, some underlying figures, source notes or endnotes, and ideally a methodology section, because a report with no methodology exercises only half the method and its absence is itself the finding.

**Produce four things.** A one-page map of the document: where the definitions, endnotes, methodology, and relevant tables sit. Three summary sentences traced to their tables, each with the six fields filled in: page, source, year, population, denominator, and whether you saw the underlying table. One endnote resolved to its origin, with what you found. And one definition that changes what a figure means, quoted.

**Trace at least one sentence that does not resolve cleanly.** Most summaries have one, and finding it is the point of the exercise rather than a sign you picked a bad report. Write what the summary says, what the table you found says, and what you would ask the publisher. If you did ask, record the answer.

**Say which kind of publisher it is.** Primary collector or secondary compiler, and how you know. If it is a compilation, every figure belongs to somebody else and your attribution has to say so, which REPORT-02 called the error that turns a summary into the apparent source of a national survey.

**Look for a limitations statement and report its absence if there is none.** A publisher stating what its evidence cannot support is rare and usable; a publisher stating nothing is a fact about the report that a reader can weigh. Either way it goes in the deliverable.

**And connect it back to the beat.** One sentence saying what this report lets you say about your beat that you could not say before, and one saying what it does not let you say. Those two sentences are worth more than the rest of the exercise, because they are the transfer from method to reporting.

:::reveal What four things does the report deliverable contain? ||| A one-page map of the document, three summary sentences traced with the six fields, one endnote resolved to its origin, and one definition that changes what a figure means.

:::reveal Why is a summary sentence that does not resolve cleanly the point rather than a problem? ||| Most summaries have one, and finding it is what the tracing method exists to do. The deliverable records what the summary says, what the table says, and what you would ask the publisher.

:::reveal What are the two sentences that connect the report back to the beat? ||| What it lets you say about your beat that you could not say before, and what it does not let you say.

## Vocabulary
- **Document map**: a one-page note of where definitions, endnotes, methodology, and relevant tables sit.
- **The six fields**: page, source, year, population, denominator, and whether the underlying table was seen.
- **Unresolved summary sentence**: a summary claim whose table cannot be located, recorded rather than repeated.
- **Transfer sentences**: what the report lets you say about your beat, and what it does not.

## Sources
- Indiana Youth Institute. (2025). *2025 Indiana girl report: A profile of Indiana girls* (1st ed.).
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-two-interviews",
      title: "7 · Two interviews, one of them not an official",
      section: "Section 2 · The evidence",
      body: `Two interviews, conducted to the standard REPORT-03 sets, with at least one of them somebody the institution acts on rather than somebody who speaks for it.

**Before each one, produce the pre-interview note.** The five disclosures you will make, in the words you will use. The risk assessment's four questions and your written answers. The three things only this person can tell you. And the limits you have set for yourself: what you will not ask, and the point at which you would end it.

**Conduct them the way the course describes.** Identify yourself every time. Make the disclosures before recording. Start where they want to start. Signpost before turning to anything difficult. State the stop rule and honor it instantly if used. And close deliberately: anything to add, what happens next, your contact, and permission to change their mind.

**Then produce the post-interview note.** What they told you, separated into account and interpretation. What you promised, verbatim, with the date. What you could not ask or did not get. And, if the person is exposed by speaking, what identification decision you made and why.

**The non-official interview is the one the exercise is really testing.** An official is used to this and has a communications apparatus behind them. Somebody the institution acts on has none of that, may never have been interviewed, and may be exposed by speaking. Every rule in REPORT-03 exists for that conversation, and the assessment reads the notes for whether they were applied rather than for whether the interview produced good quotations.

**Handling a minor, if it arises.** The capstone does not require it and does not encourage it. If your beat leads there, apply REPORT-03's rules in full: your outlet's or institution's policy, your state's law, guardian permission and separate assent, the identification decision made in advance, and contact details given to both. If any of those cannot be satisfied, report the beat without the minor.

**And do the follow-through.** Call before anything you write is submitted, send them what you produced if they want it, and be reachable afterward. In an exercise nothing publishes, so say that clearly rather than letting somebody think a story is coming: telling a source honestly that this is coursework is itself part of the standard.

:::reveal What goes in the pre-interview note? ||| The five disclosures in the words you will use, the risk assessment's four questions with written answers, the three things only this person can tell you, and your own limits.

:::reveal Which of the two interviews is the exercise really testing, and why? ||| The non-official one. An official has a communications apparatus; somebody the institution acts on may never have been interviewed and may be exposed by speaking.

:::reveal What must a source be told in an exercise where nothing publishes? ||| That this is coursework and nothing is coming, said clearly rather than left ambiguous, which is itself part of the standard.

## Vocabulary
- **Pre-interview note**: disclosures, risk assessment, the three things only this person knows, and your own limits, written before the call.
- **Account versus interpretation**: separating what a person experienced from claims about cause and fault, in the post-interview note.
- **Exposure decision**: the identification choice made for a source at risk, recorded with its reasoning.
- **The coursework disclosure**: telling a source plainly that nothing will publish, so nobody is left expecting a story.

## Sources
- Dart Center for Journalism and Trauma. (n.d.). *Resources for journalists*. Columbia Journalism School. https://dartcenter.org/
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-the-evidence",
      title: "8 · Knowledge check: the evidence",
      section: "Section 2 · The evidence",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What are the four possible conclusions to the records deliverable?",
            options: [
              "Documents, a denial, a fee estimate, or silence",
              "Release, partial release, appeal, or litigation",
              "Approval, refusal, referral, or withdrawal",
              "Documents, an interview, a fee waiver, or an extension",
            ],
            correctIndex: 0,
            explanation:
              "All four are complete answers for this exercise, and each exercises a different half of the records course.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Which of these must the records deliverable include?",
            options: [
              "The exact text you filed, with the statute and the date",
              "A copy of the statute you invoked, printed in full",
              "A legal assessment of whether the denial was lawful",
              "The names of every official who handled the request",
            ],
            correctIndex: 0,
            explanation:
              "With the body's legal name and office, every acknowledgment and promised date, the response, and what you did next.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "How should the request be scoped?",
            options: [
              "A named custodian, a named system, and a date range",
              "As broadly as possible, so nothing responsive is excluded",
              "As narrowly as possible, so the fee stays low",
              "By subject, since agencies index records by topic",
            ],
            correctIndex: 0,
            explanation:
              "Rather than all documents relating to a subject, which is the request most likely to produce a fee estimate and a delay.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Why do the informal ask first and file anyway?",
            options: [
              "A verbal no is not appealable and the exercise needs a written trail",
              "Because an informal ask satisfies the deliverable on its own",
              "Because filing without asking first is discourteous to the office",
              "Because the statute requires an informal attempt before a filing",
            ],
            correctIndex: 0,
            explanation:
              "Both halves go in the log, and informal cooperation has no clock and no record.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Why is a denial arguably a better outcome for the exercise?",
            options: [
              "It lets you run the whole second half of the records course",
              "It proves the agency was concealing something",
              "It shortens the working window by removing the review",
              "It qualifies the request for an expedited appeal",
            ],
            correctIndex: 0,
            explanation:
              "The letter's five required elements, the answer's real category, how the search was run, and the appeal, drafted whether or not it is filed.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What is a response arriving after your deadline?",
            options: [
              "A finding",
              "A failure of the deliverable",
              "Grounds for extending the exercise",
              "Evidence of an unlawful delay",
            ],
            correctIndex: 0,
            explanation:
              "Record the statutory period, the date filed, the date promised, and the date it arrived or had not. Response time is publishable process coverage.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Why not file six requests to guarantee one comes back?",
            options: [
              "It turns an exercise into a burden on a small office",
              "Because agencies charge a fee for each request filed",
              "Because the statute limits requests from a single person",
              "Because assessors mark down learners who file more than one",
            ],
            correctIndex: 0,
            explanation:
              "The exercise is about running one request properly rather than maximizing the chance of documents.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What does the course say about explaining why you want the records?",
            options: [
              "The right does not depend on the reason, and you do not misrepresent yourself",
              "You should state that it is for coursework in every request",
              "You should omit any explanation, since it invites refusal",
              "You should claim a journalistic purpose to secure the media fee category",
            ],
            correctIndex: 0,
            explanation:
              "A request made for a course is made by a person exercising a public right.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What kind of report should be chosen for the report deliverable?",
            options: [
              "One that has tables, endnotes, and ideally a methodology",
              "One published by the body you filed the records request with",
              "One published within the last twelve months",
              "One that has already been covered by another outlet",
            ],
            correctIndex: 0,
            explanation:
              "A report with no methodology exercises only half the method, and its absence is itself the finding.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What are the four things the report deliverable produces?",
            options: [
              "A document map, three traced sentences, one resolved endnote, one definition",
              "A summary, a critique, a comparison, and a recommendation",
              "A chart, a table, a citation list, and a glossary",
              "A methodology review, a sample assessment, and two figures",
            ],
            correctIndex: 0,
            explanation:
              "The traced sentences each carry the six fields: page, source, year, population, denominator, and whether the table was seen.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What are the six fields?",
            options: [
              "Page, source, year, population, denominator, whether the table was seen",
              "Author, title, publisher, edition, page, and date accessed",
              "Sample, error, weighting, mode, response rate, and vintage",
              "Domain, dimension, indicator, county, sex, and age",
            ],
            correctIndex: 0,
            explanation:
              "They are what let you defend a paragraph a year after it published.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does the exercise say about a summary sentence that does not resolve cleanly?",
            options: [
              "Most summaries have one, and finding it is the point",
              "It means the report should be replaced with a better one",
              "It disqualifies the report from the deliverable",
              "It should be omitted from the write-up as inconclusive",
            ],
            correctIndex: 0,
            explanation:
              "Write what the summary says, what the table says, and what you would ask the publisher, plus the answer if you asked.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What must the deliverable say about the publisher?",
            options: [
              "Whether it is a primary collector or a secondary compiler, and how you know",
              "Whether it is a government body or a private organization",
              "Whether it has published on this subject before",
              "Whether it accepts corrections from readers",
            ],
            correctIndex: 0,
            explanation:
              "If it is a compilation, every figure belongs to somebody else and the attribution has to say so.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What if the report has no limitations statement?",
            options: [
              "Report its absence, because it is a fact a reader can weigh",
              "Choose a different report for the deliverable",
              "Assume the standard limitations for that kind of data",
              "Contact the publisher and request one before proceeding",
            ],
            correctIndex: 0,
            explanation:
              "A publisher stating what its evidence cannot support is rare and usable; a publisher stating nothing is itself information.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What are the two transfer sentences?",
            options: [
              "What the report lets you say about your beat, and what it does not",
              "What the report found, and what other reports found",
              "What the publisher claims, and what the tables show",
              "What is confirmed, and what remains disputed",
            ],
            correctIndex: 0,
            explanation:
              "They are worth more than the rest of the exercise, because they are the transfer from method to reporting.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What is the document map?",
            options: [
              "A one-page note of where definitions, endnotes, methodology, and tables sit",
              "A diagram of how the report's sections relate to each other",
              "A list of every figure in the document with its page",
              "An index of the sources the report drew on",
            ],
            correctIndex: 0,
            explanation:
              "It is what makes the difference between quoting a report and reporting on one.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "How many interviews does the capstone require, and with what constraint?",
            options: [
              "Two, at least one not an official",
              "Three, at least two on the record",
              "Two, both with people affected by the institution",
              "Four, one from each of the source categories",
            ],
            correctIndex: 0,
            explanation:
              "The non-official one is what the exercise is really testing, because every rule in the interviewing course exists for that conversation.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What goes in the pre-interview note?",
            options: [
              "The five disclosures, the risk assessment, the three things, and your limits",
              "The questions you will ask, in the order you will ask them",
              "The subject's background and their prior public statements",
              "The consent form and the recording permission",
            ],
            correctIndex: 0,
            explanation:
              "The disclosures are written in the words you will use, and the risk assessment's four questions get written answers.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What goes in the post-interview note?",
            options: [
              "Account and interpretation separated, promises verbatim, gaps, and the identification decision",
              "A full transcript with the strongest quotations marked",
              "The reporter's assessment of the subject's reliability",
              "A list of follow-up questions for a second conversation",
            ],
            correctIndex: 0,
            explanation:
              "Promises are recorded verbatim with the date, because six months later the file that answers is the one written at the time.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the assessment read the interview notes for?",
            options: [
              "Whether the rules were applied",
              "Whether the interview produced good quotations",
              "Whether the subject was cooperative",
              "Whether the interview was recorded",
            ],
            correctIndex: 0,
            explanation:
              "Rather than for the quality of the material obtained, because the material depends heavily on who agreed to talk.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What is the capstone's position on interviewing a minor?",
            options: [
              "Not required and not encouraged, and if unavoidable the full rules apply",
              "Required, since the interviewing course covers minors at length",
              "Prohibited entirely in an assessed exercise",
              "Permitted with the assessor's prior written approval",
            ],
            correctIndex: 0,
            explanation:
              "Policy, state law, guardian permission and separate assent, the identification decision in advance, and contact given to both. If any cannot be satisfied, report the beat without the minor.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What must a source be told in an exercise where nothing publishes?",
            options: [
              "That this is coursework and nothing is coming",
              "That publication is likely but not guaranteed",
              "That the material may be published later if it is strong",
              "Nothing, since the outcome is not yet known",
            ],
            correctIndex: 0,
            explanation:
              "Said clearly rather than left ambiguous. Telling a source honestly is itself part of the standard.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the follow-through require even in an exercise?",
            options: [
              "Call before anything is submitted, send what you produced, be reachable",
              "Obtain written approval of the finished write-up",
              "Provide a transcript of the interview to the subject",
              "Report the outcome of the exercise to the institution",
            ],
            correctIndex: 0,
            explanation:
              "With saying clearly that nothing publishes, so nobody is left expecting a story.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "Why is an official the easier interview?",
            options: [
              "They are used to it and have a communications apparatus",
              "They are legally required to answer a reporter's questions",
              "They provide better quotations than affected people",
              "They can be interviewed without any disclosures",
            ],
            correctIndex: 0,
            explanation:
              "Somebody the institution acts on has none of that, may never have been interviewed, and may be exposed by speaking.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "Which conduct rules apply during the capstone interviews?",
            options: [
              "Identify, disclose before recording, start where they want, signpost, stop rule, close deliberately",
              "Record everything, ask the hardest question first, and press for a quotation",
              "Send questions in advance and confirm answers afterward in writing",
              "Interview in the institution's offices so the setting is neutral",
            ],
            correctIndex: 0,
            explanation:
              "Exactly as the interviewing course describes, and the notes are read for whether they were followed.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the records deliverable record if there was a fee?",
            options: [
              "What you did next",
              "Whether the fee was paid from your own funds",
              "The statutory maximum the agency could charge",
              "Whether other requesters were charged the same",
            ],
            correctIndex: 0,
            explanation:
              "As with a denial: the response and the next step are both part of the deliverable.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Which shape does the request follow?",
            options: [
              "The seven-part shape from the records course",
              "A single paragraph naming the subject and the period",
              "The agency's own request form, unmodified",
              "A letter drafted by the outlet's legal team",
            ],
            correctIndex: 0,
            explanation:
              "Statute, records with custodian and range, format, layout, fee position, partial releases, and contact with an offer to narrow.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What does the endnote deliverable require?",
            options: [
              "One endnote resolved to its origin, with what you found",
              "Every endnote checked against its source",
              "A count of how many endnotes lack a URL",
              "A judgment on whether the endnotes are adequate",
            ],
            correctIndex: 0,
            explanation:
              "Which is the exercise the report-reading course set: search by volume and article number, by title, and by authors, and report what comes back.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does the definition deliverable require?",
            options: [
              "One definition that changes what a figure means, quoted",
              "A glossary of every term the report defines",
              "A comparison of the report's definitions against a national standard",
              "A judgment on whether the definitions are appropriate",
            ],
            correctIndex: 0,
            explanation:
              "Age range, unit, and threshold are where most reporting errors from a data report originate.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does separating account from interpretation mean?",
            options: [
              "What a person experienced, against claims about cause and fault",
              "What was on the record, against what was on background",
              "What was quoted directly, against what was paraphrased",
              "What the reporter observed, against what was described",
            ],
            correctIndex: 0,
            explanation:
              "Keeping them apart is what lets you honor somebody's experience and still report accurately about the events.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What is recorded about an exposed source?",
            options: [
              "The identification decision and why it was made",
              "The consent form they signed before speaking",
              "The organization's response to their participation",
              "The reporter's assessment of the risk they face",
            ],
            correctIndex: 0,
            explanation:
              "Which the interviewing course required to be decided before the interview and told to them.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the records deliverable's process trail prove?",
            options: [
              "That the request was filed and followed rather than described",
              "That the agency complied with the statutory deadline",
              "That the reporter's scope was legally sufficient",
              "That the records obtained are authentic",
            ],
            correctIndex: 0,
            explanation:
              "Which is why acknowledgments, extensions, and promised dates are kept alongside the filed text.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What is the risk assessment's role in the pre-interview note?",
            options: [
              "Four written answers about what speaking could cost the source",
              "A legal review of the outlet's exposure",
              "A judgment about whether the source is reliable",
              "A record of whether the source has spoken to reporters before",
            ],
            correctIndex: 0,
            explanation:
              "Cost, retaliation, identifiability from detail, and whether they are in a position to decide right now.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "Why does the report deliverable ask for the publisher's type?",
            options: [
              "A compilation's figures belong to somebody else",
              "Because compilers publish more frequently than collectors",
              "Because collectors are more reliable than compilers",
              "Because assessors weight primary sources more heavily",
            ],
            correctIndex: 0,
            explanation:
              "Writing that a report found something it compiled is the error that turns a summary into the apparent source of a national survey.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "Which of these is a legitimate report for the deliverable?",
            options: [
              "One from a state agency, nonprofit, university center, or national compiler",
              "One published by the body you filed the records request with only",
              "One produced by an outlet covering the same beat",
              "One the reporter compiles themselves from the records obtained",
            ],
            correctIndex: 0,
            explanation:
              "Any credible publisher, provided it has tables, source notes, and ideally a methodology.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does the exercise say a report with no methodology exercises?",
            options: [
              "Only half the method, and its absence is the finding",
              "The whole method, since the tables are what matter",
              "Nothing, and it should be replaced",
              "More of the method, since the reader must reconstruct it",
            ],
            correctIndex: 0,
            explanation:
              "The absence is itself reportable, which the report-reading course established about limitations statements too.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "Which is a complete records outcome even though nothing arrived?",
            options: [
              "Silence, documented with the statutory period and the promised dates",
              "A withdrawn request, closed by the reporter",
              "An informal refusal received by telephone",
              "A request that was never sent to the designated office",
            ],
            correctIndex: 0,
            explanation:
              "It costs you the denial half of the exercise but it is a documented finding about the agency.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What does the exercise ask you to do with a denial even inside a short window?",
            options: [
              "Draft the appeal, whether or not you file it",
              "File the appeal and await the outcome",
              "Escalate to the state's access authority immediately",
              "Note the denial and move on to the next deliverable",
            ],
            correctIndex: 0,
            explanation:
              "Along with reading the letter's five required elements, categorizing the answer, and asking how the search was conducted.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Which of the five disclosures do inexperienced sources most reliably not know?",
            options: [
              "Permanence",
              "The reporter's outlet",
              "The subject of the story",
              "That an interview may be recorded",
            ],
            correctIndex: 0,
            explanation:
              "Which is one reason the disclosures are written out in advance in the words you will use.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What are the three things the pre-interview note identifies about the subject?",
            options: [
              "The three things only this person can tell you",
              "The three questions they are most likely to refuse",
              "The three documents they might be able to supply",
              "The three risks the interview poses to them",
            ],
            correctIndex: 0,
            explanation:
              "Which is the focus discipline the interviewing course required: decide what only this person knows and let the rest go.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the report deliverable's traced-sentence exercise establish?",
            options: [
              "Whether a summary claim can be defended from the tables",
              "Whether the report's conclusions are broadly correct",
              "Whether the publisher's methodology is sound",
              "Whether the report has been superseded by newer data",
            ],
            correctIndex: 0,
            explanation:
              "Three sentences, each with the six fields, which is the tracing method run three times rather than described once.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What is not a reason to avoid the non-official interview?",
            options: [
              "That it is harder to arrange and may produce less usable material",
              "That the person is a minor and the rules cannot be satisfied",
              "That the person would be exposed and has declined",
              "That no such person exists on the beat as scoped",
            ],
            correctIndex: 0,
            explanation:
              "An exercise that avoids the conversation the interviewing course exists for has not been done, and difficulty is not one of the legitimate reasons.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the course say about misrepresenting who you are in a request?",
            options: [
              "Do not, and the right does not depend on the reason anyway",
              "State a journalistic purpose to obtain the media fee category",
              "Omit your identity, since requests are decided on their scope",
              "Describe the request as academic to reduce the fee",
            ],
            correctIndex: 0,
            explanation:
              "A request made for a course is made by a person exercising a public right.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What connects the report deliverable back to the beat?",
            options: [
              "Two sentences about what it lets you say and what it does not",
              "A summary of the report's findings in your own words",
              "A comparison against a report from a neighboring jurisdiction",
              "A list of the questions the report leaves unanswered",
            ],
            correctIndex: 0,
            explanation:
              "They are worth more than the rest of the exercise because they are the transfer from method to reporting.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What is the deliverable if the publisher answers your question about a summary sentence?",
            options: [
              "Record the answer",
              "Remove the item, since it is now resolved",
              "Publish the exchange in full",
              "Treat the answer as the finding without checking it",
            ],
            correctIndex: 0,
            explanation:
              "Which turns the tracing exercise from a doubt into a result, and is why asking is the recommended next action.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does the exercise ask you to record about the informal ask?",
            options: [
              "That you made it, alongside the formal filing",
              "Only the outcome, since the conversation is not evidence",
              "The name of whoever answered the telephone",
              "Nothing, because informal contact is outside the deliverable",
            ],
            correctIndex: 0,
            explanation:
              "Both halves go in the log, because informal cooperation has no clock and no record while the filing has both.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "How many items does the report deliverable trace with the six fields?",
            options: [
              "Three summary sentences",
              "One summary sentence, chosen as the headline claim",
              "Every summary sentence in the executive summary",
              "As many as resolve cleanly to a table",
            ],
            correctIndex: 0,
            explanation:
              "Alongside the document map, one resolved endnote, and one definition that changes what a figure means.",
            sourceLessonSlug: "the-report-read-properly",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "the-quick-turn",
      title: "9 · The quick-turn story",
      section: "Section 3 · The output",
      body: `One story written to a same-day or next-day standard, triggered by something on your beat calendar rather than chosen at leisure. It is short, it is verified, and it is the piece that proves the method survives a deadline.

**What triggers it.** A meeting, a vote, a report release, an inspection, a filing, a decision. Your calendar told you it was coming, which is the whole point: the exercise tests whether the accumulation converts into output when the clock starts.

**Give yourself a real clock.** Set a filing time before you start and keep it. An exercise with an unlimited window does not test what this course is testing, and the honest version is uncomfortable in exactly the way the real thing is.

**Run the verification sequence, compressed.** Decompose the claim into separate assertions. Price the checks and run the kill check first. Seek comment with a specific question rather than an invitation. Assign a confidence level to every line. Run the ten-minute negative check before filing. That is REPORT-04 at speed, and it fits inside an hour once you have done it twice.

**Write it to a shape you chose.** News form is usually right here, and saying so is a choice rather than a default: the reader needs to know what happened, so outcome first, then how, then the context they need. If the shape is something else, say why in the deliverable.

**Include what you could not establish, in the sentence carrying the claim.** Not at the bottom. A quick-turn piece has less room for uncertainty and therefore needs it stated more economically, which is a writing problem rather than a reason to omit it.

**Submit the working alongside the piece.** The decomposed claim list with its levels, the sourcing chain, the comment request and what came back, and the negative check with what it found. Those are what get read most carefully, because a good short piece can be produced by luck and a good working file cannot.

:::reveal What triggers the quick-turn story, and why does that matter? ||| Something on your beat calendar: a meeting, vote, release, inspection, or filing. The exercise tests whether the accumulation converts into output when the clock starts.

:::reveal What are the five steps of the compressed verification sequence? ||| Decompose the claim, price the checks and run the kill check first, seek comment with a specific question, assign a confidence level to every line, and run the ten-minute negative check before filing.

:::reveal Why is the working file read more carefully than the piece? ||| Because a good short piece can be produced by luck and a good working file cannot.

## Vocabulary
- **Calendar trigger**: the scheduled event that starts the clock, drawn from the beat calendar rather than chosen.
- **Real clock**: a filing time set before starting and kept, without which the exercise does not test what it claims to.
- **Compressed verification**: the decomposition, kill check, specific comment request, confidence levels, and negative check, run inside an hour.
- **The working file**: the claim list, sourcing chain, comment correspondence, and negative check, submitted with the piece.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-enterprise-pitch-capstone",
      title: "10 · The enterprise pitch",
      section: "Section 3 · The output",
      body: `One pitch, four hundred words, for a project you could actually do next if somebody said yes. It is the deliverable that shows whether the beat produced something rather than merely being attended.

**It must come from the file.** Not from an idea you had before starting. The pitch's origin is a signal you logged, a pattern in the report, a document the request produced, or something a source said, and the deliverable names which. A pitch that could have been written in week one has not demonstrated anything about the reporting.

**Write it to REPORT-07's five parts.** The question in one sentence. Why now and why you. What you already have. What you need and the order you will get it, with the kill check first. And cost and shape, including which formats and why.

**Then the sentence that gets it approved.** What a reader will be able to do or understand afterward that they cannot now. If you cannot write that sentence, the pitch is a topic rather than a question, which is the failure REPORT-07 named first.

**Include the failure condition.** What would make you stop. In an assessed exercise this matters more than usual, because it is the clearest evidence that you understand the difference between a question you can answer and a finding you are hoping for.

**Say honestly what you do not have.** The interview you could not get, the record still outstanding, the analysis you have not run. A pitch that pretends to more than the file supports is the same error as a story that does, and the assessment reads the pitch against the file.

**And keep it inside the beat.** The pitch is for the beat you chose, not a national version of the subject. Scope discipline is what the memo's out-of-scope sentence was for, and a capstone pitch that has escaped the beat is evidence the boundary did not hold.

:::reveal Where must the enterprise pitch come from? ||| The file: a logged signal, a pattern in the report, a document the request produced, or something a source said, with the deliverable naming which.

:::reveal Why does a pitch that could have been written in week one fail the exercise? ||| Because it demonstrates nothing about the reporting. The pitch is the evidence that the beat produced something rather than merely being attended.

:::reveal Why does the failure condition matter more in an assessed exercise? ||| It is the clearest evidence that you understand the difference between a question you can answer and a finding you are hoping for.

## Vocabulary
- **File-derived pitch**: a proposal whose origin is a specific entry in the beat file, named in the deliverable.
- **The approval sentence**: what a reader will be able to do or understand afterward that they cannot now.
- **Failure condition**: the stated circumstance under which the project would stop.
- **Scope discipline**: keeping the pitch inside the beat the memo defined, rather than escaping to a wider version.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "the-note",
      title: "11 · The note: what you could not confirm",
      section: "Section 3 · The output",
      body: `This is the deliverable the capstone is actually built around, and plans/68 put it there deliberately: it is the same discipline the science course's capstone asks for and the same one the Field Log's verify stage records.

**What it is.** A written list of everything you could not establish, with, for each item: what you were trying to confirm, what you tried, why it did not resolve, and what would settle it. Between five and fifteen items for a capstone-scale beat. Fewer than five usually means you did not look hard enough; more than fifteen usually means you were listing questions rather than unresolved attempts.

**The distinction that makes the note useful.** An unresolved attempt is something you went after and did not get. A question you never pursued is not a finding. The note is a record of the reporting's boundary, not a wish list, and the difference is visible in the "what you tried" field being empty.

**Include the ones that are uncomfortable.** The source who stopped answering. The document you were told exists and did not receive. The figure in the report you traced to nothing. The thing an official said that you could not check. Those are the entries that make the note evidence of a method rather than a formality.

**Say what would settle each one.** A named record, a named person, a data set, a court filing, an analysis. This is what turns the note from an admission into a plan, and it is why a reporter who keeps one has a live beat rather than a finished project.

**Distinguish unknown from disputed, as REPORT-04 required.** Nobody has the answer is one category. Two parties assert different things is another, and for those the note records who asserts what and what each offers as evidence, because the asymmetry is frequently the story.

**And notice what the note does to the rest of the work.** Every claim that survived into the story and the pitch survived because it was not on this list. Writing the note last, and then rereading the story against it, catches the sentences that quietly claimed more than the file supported, which is the single most useful pass in the entire exercise.

:::reveal What four fields does each entry in the note carry? ||| What you were trying to confirm, what you tried, why it did not resolve, and what would settle it.

:::reveal What distinguishes an unresolved attempt from a question you never pursued? ||| The "what you tried" field. The note records the reporting's boundary, not a wish list, and an empty field means the item does not belong.

:::reveal What does rereading the story against the note catch? ||| The sentences that quietly claimed more than the file supported, which is the single most useful pass in the whole exercise.

## Vocabulary
- **The note**: the written record of everything that could not be established, with what was tried and what would settle it.
- **Unresolved attempt**: something pursued and not obtained, as distinct from a question never pursued.
- **Settling artifact**: the record, person, data set, or filing that would close an item, which turns the note into a plan.
- **The reread pass**: checking the story against the note, which catches claims the file does not support.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-the-output",
      title: "12 · Knowledge check: the output",
      section: "Section 3 · The output",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What triggers the quick-turn story?",
            options: [
              "Something on your beat calendar",
              "The arrival of documents from the records request",
              "The completion of both interviews",
              "The assessor's instruction to begin writing",
            ],
            correctIndex: 0,
            explanation:
              "A meeting, a vote, a report release, an inspection, a filing, or a decision that your calendar told you was coming.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Why set a real clock?",
            options: [
              "An unlimited window does not test what the course is testing",
              "Because assessors record the time each deliverable took",
              "Because sources expect a prompt turnaround",
              "Because a long window produces a weaker piece",
            ],
            correctIndex: 0,
            explanation:
              "Set a filing time before you start and keep it. The honest version is uncomfortable in exactly the way the real thing is.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is the first step of the compressed verification sequence?",
            options: [
              "Decompose the claim into separate assertions",
              "Seek comment from the institution involved",
              "Assign a confidence level to every line",
              "Run the ten-minute negative check",
            ],
            correctIndex: 0,
            explanation:
              "Then price the checks and run the kill check first, which is the sequencing rule the verification course set.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What kind of comment request does the sequence require?",
            options: [
              "A specific question rather than an invitation",
              "A written request with a forty-eight hour deadline",
              "A request sent through the institution's press office only",
              "A request that includes the full draft of the piece",
            ],
            correctIndex: 0,
            explanation:
              "A precise question is much harder to answer with nothing, and a refusal to answer it is itself informative.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "When does the negative check run?",
            options: [
              "Before filing, after you think you are finished",
              "At the start, before any reporting is done",
              "After publication, as part of the review",
              "Only if the editor requests it",
            ],
            correctIndex: 0,
            explanation:
              "Ten minutes, late enough that you know which line is load-bearing and short enough to survive a bad afternoon.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Which shape is usually right for the quick-turn, and what must be said about it?",
            options: [
              "News form, and saying so is a choice rather than a default",
              "Narrative, because it carries the weight of the event",
              "Explainer, because the reader needs the mechanism",
              "Q and A, because it is the fastest to produce",
            ],
            correctIndex: 0,
            explanation:
              "The reader needs to know what happened, so outcome first, then how, then the context they need. If the shape is something else, say why.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Where does uncertainty go in the quick-turn piece?",
            options: [
              "In the sentence carrying the claim",
              "In a closing paragraph, where there is room for it",
              "In the working file rather than in the piece",
              "In a note to the editor accompanying the file",
            ],
            correctIndex: 0,
            explanation:
              "A short piece has less room and therefore needs it stated more economically, which is a writing problem rather than a reason to omit it.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is submitted alongside the piece?",
            options: [
              "The claim list, sourcing chain, comment correspondence, and negative check",
              "The full transcripts of both interviews",
              "The records request and its response",
              "The beat memo and its midpoint revision",
            ],
            correctIndex: 0,
            explanation:
              "Those are read most carefully, because a good short piece can be produced by luck and a good working file cannot.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "How long is the enterprise pitch?",
            options: [
              "About four hundred words",
              "One page of bullet points",
              "As long as the reporting plan requires",
              "Two thousand words, matching an enterprise proposal",
            ],
            correctIndex: 0,
            explanation:
              "For a project you could actually do next if somebody said yes.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "Where must the pitch come from?",
            options: [
              "The file",
              "An idea you had before the exercise began",
              "A subject the assessor suggested",
              "A gap in the outlet's existing coverage",
            ],
            correctIndex: 0,
            explanation:
              "A logged signal, a pattern in the report, a document the request produced, or something a source said, with the deliverable naming which.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "Why does a pitch that could have been written in week one fail?",
            options: [
              "It demonstrates nothing about the reporting",
              "It exceeds the scope the memo defined",
              "It duplicates the quick-turn story's subject",
              "It cannot include a failure condition",
            ],
            correctIndex: 0,
            explanation:
              "The pitch is the evidence that the beat produced something rather than merely being attended.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What is the sentence that gets the pitch approved?",
            options: [
              "What a reader will be able to do or understand afterward",
              "How many weeks the project will take from approval",
              "Which sources have already agreed to participate",
              "How the project differs from competing coverage",
            ],
            correctIndex: 0,
            explanation:
              "If you cannot write it, the pitch is a topic rather than a question, which is the failure the pitch course named first.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "Why does the failure condition matter more in an assessed exercise?",
            options: [
              "It shows you understand the difference between a question and a hoped-for finding",
              "It limits the assessor's expectations of the finished work",
              "It is required by the pitch course's five-part shape",
              "It protects the learner if the reporting cannot be completed",
            ],
            correctIndex: 0,
            explanation:
              "Which is the clearest available evidence of that distinction inside a document a reader can check.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What must the pitch say honestly?",
            options: [
              "What you do not have",
              "How confident you are of the eventual finding",
              "Which outlet would be most likely to run it",
              "How the project compares to published work elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "The interview you could not get, the record still outstanding, the analysis you have not run. The assessment reads the pitch against the file.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "Why must the pitch stay inside the beat?",
            options: [
              "A pitch that escaped is evidence the boundary did not hold",
              "Because a national version would exceed the word limit",
              "Because the assessor cannot evaluate work outside the beat",
              "Because the records request only covers the beat's institutions",
            ],
            correctIndex: 0,
            explanation:
              "Scope discipline is what the memo's out-of-scope sentence was for.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What is the note the capstone is built around?",
            options: [
              "A written list of everything you could not establish",
              "A summary of the reporting's principal findings",
              "A reflection on what the exercise taught you",
              "A list of the sources who declined to speak",
            ],
            correctIndex: 0,
            explanation:
              "The same discipline the science course's capstone asks for and the same one the Field Log's verify stage records.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What four fields does each note entry carry?",
            options: [
              "What you were confirming, what you tried, why it failed, and what would settle it",
              "The claim, the source, the date, and the confidence level",
              "The institution, the document, the request, and the response",
              "The question, the answer, the caveat, and the follow-up",
            ],
            correctIndex: 0,
            explanation:
              "Between five and fifteen items for a capstone-scale beat.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does fewer than five items usually mean?",
            options: [
              "You did not look hard enough",
              "The beat was well documented and cooperative",
              "The reporting window was too short",
              "The note was written before the reporting finished",
            ],
            correctIndex: 0,
            explanation:
              "More than fifteen usually means you were listing questions rather than unresolved attempts.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What distinguishes an unresolved attempt from a question you never pursued?",
            options: [
              "The what-you-tried field",
              "Whether the item concerns a document or a person",
              "Whether the item was recorded in the signal log",
              "Whether the item affects a claim in the finished piece",
            ],
            correctIndex: 0,
            explanation:
              "The note is a record of the reporting's boundary, not a wish list, and an empty field means the item does not belong.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Which entries make the note evidence rather than a formality?",
            options: [
              "The uncomfortable ones",
              "The ones concerning documents rather than people",
              "The ones the assessor is most likely to check",
              "The ones that were eventually resolved",
            ],
            correctIndex: 0,
            explanation:
              "The source who stopped answering, the document you were told exists, the figure you traced to nothing, the claim you could not check.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What turns the note from an admission into a plan?",
            options: [
              "Saying what would settle each item",
              "Ranking the items by importance",
              "Assigning a date to each item",
              "Sharing it with the sources involved",
            ],
            correctIndex: 0,
            explanation:
              "A named record, a named person, a data set, a court filing, an analysis, which is why a reporter who keeps one has a live beat.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "How does the note treat a disputed item?",
            options: [
              "Records who asserts what and what each offers as evidence",
              "Lists it as unknown alongside the unresolved attempts",
              "Omits it, since a dispute is not a gap in the reporting",
              "Resolves it by naming the more credible party",
            ],
            correctIndex: 0,
            explanation:
              "Because the evidence asymmetry is frequently the story, which the verification course established.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does rereading the story against the note catch?",
            options: [
              "Sentences that quietly claimed more than the file supported",
              "Quotations that were paraphrased rather than transcribed",
              "Sources who were named without their agreement",
              "Paragraphs that exceed the piece's intended length",
            ],
            correctIndex: 0,
            explanation:
              "It is the single most useful pass in the entire exercise.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Why does every surviving claim survive?",
            options: [
              "Because it was not on the note's list",
              "Because an editor approved it during revision",
              "Because it appeared in more than one source",
              "Because it was checked twice before filing",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the note is written last and then used as a filter on everything already written.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Which course's discipline does the note share?",
            options: [
              "The science course's capstone and the Field Log's verify stage",
              "The records course's appeal procedure",
              "The interviewing course's consent process",
              "The pitch course's five-part shape",
            ],
            correctIndex: 0,
            explanation:
              "plans/68 put it in the capstone deliberately for that reason.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does the compressed verification sequence assign to every line?",
            options: [
              "A confidence level",
              "A named source willing to be quoted",
              "A page reference in the records response",
              "An editor's approval before filing",
            ],
            correctIndex: 0,
            explanation:
              "Confirmed, corroborated, reported, or unverified, with the wording chosen from the level rather than the reverse.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "How long does the compressed sequence take once practiced?",
            options: [
              "It fits inside an hour after you have done it twice",
              "A full working day for a short piece",
              "As long as the reporting itself",
              "It cannot be compressed below half a day",
            ],
            correctIndex: 0,
            explanation:
              "Which is the point: it is the verification course at speed rather than a reduced version of it.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What does the quick-turn story prove?",
            options: [
              "That the method survives a deadline",
              "That the beat produced a publishable finding",
              "That the sources were willing to be quoted",
              "That the records request produced usable material",
            ],
            correctIndex: 0,
            explanation:
              "It is short, it is verified, and it tests whether the accumulation converts to output when the clock starts.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Which of these is a legitimate origin for the enterprise pitch?",
            options: [
              "A document the records request produced",
              "A subject the reporter has always wanted to write about",
              "A story another outlet published during the window",
              "A suggestion from one of the interview subjects' employers",
            ],
            correctIndex: 0,
            explanation:
              "With a logged signal, a pattern in the report, or something a source said, and the deliverable names which.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What does the pitch's fourth part carry?",
            options: [
              "What you need and the order you will get it, with the kill check first",
              "The formats the finished work will take",
              "The sources who have agreed to participate",
              "The reader outcome the project aims at",
            ],
            correctIndex: 0,
            explanation:
              "Following the five-part shape the pitch course set.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What is the assessment reading the pitch against?",
            options: [
              "The file",
              "The published coverage of the same subject",
              "The beat memo's original three questions",
              "The quick-turn story's confidence levels",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a pitch that pretends to more than the file supports is the same error as a story that does.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What is the note's typical length for a capstone-scale beat?",
            options: [
              "Between five and fifteen items",
              "One item per deliverable produced",
              "As many as the process log records",
              "Three items, matching the memo's questions",
            ],
            correctIndex: 0,
            explanation:
              "Fewer usually means you did not look hard enough; more usually means you were listing questions rather than attempts.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does the note record about a source who stopped answering?",
            options: [
              "What you were confirming, what you tried, why it failed, and what would settle it",
              "The reason they gave for withdrawing",
              "Whether the outlet should approach them again",
              "The number of attempts made to reach them",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the uncomfortable entries that makes the note evidence of a method rather than a formality.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Where does the quick-turn story's uncertainty economy come from?",
            options: [
              "A short piece has less room and needs it stated more compactly",
              "A short piece may omit uncertainty entirely",
              "A short piece defers uncertainty to the working file",
              "A short piece places uncertainty in a standing footer",
            ],
            correctIndex: 0,
            explanation:
              "Which is a writing problem rather than a reason to omit it.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is the kill check, in the compressed sequence?",
            options: [
              "The check most likely to stop the story, run first",
              "The final check before filing",
              "The check an editor performs on the draft",
              "The check that confirms the story is publishable",
            ],
            correctIndex: 0,
            explanation:
              "Reporters routinely spend an hour polishing a story a two-minute check would have killed, which is an ordering failure.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is submitted with the pitch?",
            options: [
              "The named origin of the idea from the file",
              "A draft opening paragraph for the eventual piece",
              "A budget for the reporting the project needs",
              "Letters of support from the sources involved",
            ],
            correctIndex: 0,
            explanation:
              "Because a pitch that could have been written in week one demonstrates nothing about the reporting.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What does a note entry with an empty what-you-tried field indicate?",
            options: [
              "It does not belong in the note",
              "It should be moved to the top of the list",
              "It requires an additional week of reporting",
              "It is the most important item in the note",
            ],
            correctIndex: 0,
            explanation:
              "The note is a record of the reporting's boundary rather than a wish list of questions.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does the course say a good short piece can be produced by?",
            options: [
              "Luck",
              "Practice alone",
              "A strong editor's intervention",
              "A cooperative institution",
            ],
            correctIndex: 0,
            explanation:
              "And a good working file cannot, which is why the file is read more carefully than the piece.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is the pitch's second part?",
            options: [
              "Why now and why you",
              "What you already have in hand",
              "The cost in weeks and money",
              "The failure condition",
            ],
            correctIndex: 0,
            explanation:
              "Following the five-part shape: question, why now and why us, what you have, what you need and the order, cost and shape.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What does the note do to the rest of the work?",
            options: [
              "Filters every claim that survived into the story and the pitch",
              "Replaces the sourcing chain as the assessed artifact",
              "Establishes the confidence level of each published sentence",
              "Determines which deliverables were completed",
            ],
            correctIndex: 0,
            explanation:
              "Everything that survived did so because it was not on the list, which is what makes the reread pass so useful.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Which two categories does the note keep separate?",
            options: [
              "Unknown and disputed",
              "Confirmed and corroborated",
              "Records and interviews",
              "Attempted and completed",
            ],
            correctIndex: 0,
            explanation:
              "Nobody has the answer, against two parties asserting different things with different evidence behind them.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does the exercise say about a filing time set and then extended?",
            options: [
              "It does not test what the course is testing",
              "It is acceptable where the reporting genuinely needs more time",
              "It should be recorded in the process log and accepted",
              "It is expected in a first attempt at the sequence",
            ],
            correctIndex: 0,
            explanation:
              "The honest version is uncomfortable in exactly the way the real thing is.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Which deliverable is described as the one the capstone is actually built around?",
            options: [
              "The note of what you could not confirm",
              "The quick-turn story",
              "The enterprise pitch",
              "The records request",
            ],
            correctIndex: 0,
            explanation:
              "plans/68 put it there deliberately, and the assessment section explains how it is read.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does the pitch demonstrate about the beat?",
            options: [
              "That it produced something rather than merely being attended",
              "That the reporter can write to a word limit",
              "That the subject is of interest to a wider audience",
              "That the records request produced usable documents",
            ],
            correctIndex: 0,
            explanation:
              "Which is the distinction the beat memo's measurement section asked about in advance.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "how-this-is-assessed",
      title: "13 · How this is assessed, and what it is not assessed on",
      section: "Section 4 · Assessment, failure, and after",
      body: `The standard is stated before the work so nobody is graded against a rule they could not see. It is deliberately not the standard most people expect.

**Six things this is assessed on.** Whether every claim in the outputs carries the confidence level the file supports. Whether a stranger could reconstruct how each claim was established from the file alone. Whether the sourcing chain distinguishes independent corroboration from an echo. Whether the note is honest and specific. Whether the interviewing standard was applied to the non-official source. And whether the beat memo's boundary held, or was revised deliberately rather than abandoned.

**Four things this is not assessed on.** Whether you found something. Whether the records request produced documents. Whether anybody agreed to be interviewed on the record. And whether the writing is good. Those are real things and they are outcomes rather than method, and outcomes on a four-week beat depend heavily on luck.

**Why the stranger test is the central one.** It is the same standard the Researcher track's capstone applies, and it is the only one that cannot be satisfied by a persuasive narrative. A file that a stranger can work from is a file where every claim names its origin, every confidence level is recorded, and every promise made to a source is written down. That is either there or it is not.

**How the note is read.** Not for length. For whether the items are unresolved attempts rather than unasked questions, whether the uncomfortable ones are present, and whether each carries what would settle it. A short honest note beats a long list of things you never tried.

**What an excellent capstone looks like, concretely.** The records request produced nothing, the report's key summary sentence did not resolve, one interview subject declined to be identified, the quick-turn story was three hundred words, the pitch is narrow, and the file is immaculate. That is a strong pass, because every one of those is a method running correctly against an uncooperative world.

**What a weak one looks like despite good material.** Documents arrived, both sources were talkative, the story is fluent, and the file cannot show which claim came from where, the note has three items and none of them are uncomfortable, and the sourcing chain lists two people who heard it from each other. That is the failure this assessment exists to catch.

:::reveal Which six things is the capstone assessed on? ||| Confidence levels matching the file, whether a stranger could reconstruct each claim, independence distinguished from echo, an honest specific note, the interviewing standard applied to the non-official source, and the memo's boundary holding or being deliberately revised.

:::reveal Which four things is it deliberately not assessed on? ||| Whether you found something, whether records arrived, whether anybody spoke on the record, and whether the writing is good. All are outcomes rather than method.

:::reveal Why is the stranger test the central criterion? ||| Because it is the only one a persuasive narrative cannot satisfy. Either every claim names its origin and every level and promise is recorded, or it does not.

## Vocabulary
- **The stranger test**: whether somebody else could reconstruct how each claim was established from the file alone.
- **Method versus outcome**: the distinction between what the reporter did and what the world happened to yield.
- **An uncomfortable note item**: an unresolved attempt whose absence would flatter the reporter, included anyway.
- **Immaculate file against an uncooperative world**: the profile of a strong capstone regardless of what was obtained.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "common-failures",
      title: "14 · The five ways this goes wrong",
      section: "Section 4 · Assessment, failure, and after",
      body: `Every one of these is recoverable if it is caught in week two and fatal if it is caught in week four, which is the reason for reading them before starting.

**One: the beat is too big.** The symptom is that every week produces new institutions and no finished deliverable. The cause is an out-of-scope sentence that was written and then not enforced. The fix is to narrow at the midpoint revision and to say in the deliverable that you did, which is a method finding rather than a confession.

**Two: the file is retrofitted.** The symptom is entries with no page numbers and a chronology assembled from memory in the final week. The cause is starting the reporting before the file. It cannot be fixed retroactively, because a reconstruction is exactly what the stranger test detects, so the only real fix is to start the file first.

**Three: the request went in too late.** The symptom is a records deliverable consisting of a filed request and nothing else. It is survivable, because silence is one of the four legitimate conclusions and the process log documents it, but it costs you the whole denial-and-appeal half of the exercise. File in week one.

**Four: both sources are officials.** The symptom is two polished interviews with communications staff present. The whole interviewing course is built for the other conversation, and an exercise that avoids it has not been done. The fix is the community-listening block, which is where the non-official source usually comes from and which is the first thing an exercise cuts.

**Five: the note is a formality.** The symptom is three items, all comfortable, none with a settling artifact. It is the most common weakness and the easiest to fix, because the material is already in the process log: every unanswered call, every promised document that did not arrive, and every figure you could not trace is already recorded there.

**And the meta-failure underneath four of the five.** Treating the deliverables as things to produce at the end rather than as records of a process running from day one. The file, the log, and the note are all continuous, and every one of the failures above is what happens when they are treated as documents to be written rather than as things to be kept.

:::reveal What is the symptom of a beat that is too big, and what is the fix? ||| Every week produces new institutions and no finished deliverable. Narrow at the midpoint revision and say in the deliverable that you did, which is a method finding rather than a confession.

:::reveal Why can a retrofitted file not be fixed retroactively? ||| Because a reconstruction is exactly what the stranger test detects. The only real fix is to start the file before the reporting.

:::reveal What is the meta-failure underneath most of the others? ||| Treating the deliverables as things to produce at the end rather than as records of a process running from day one.

## Vocabulary
- **Unenforced boundary**: an out-of-scope sentence written and then ignored, which is what makes a beat too big.
- **Retrofitted file**: a record assembled from memory afterward, which the stranger test detects.
- **Officials-only interviews**: an exercise that avoided the conversation the interviewing course exists for.
- **Continuous deliverables**: the file, the log, and the note, kept from day one rather than written at the end.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "after-the-capstone",
      title: "15 · After: what you have, and the next twelve months",
      section: "Section 4 · Assessment, failure, and after",
      body: `The exercise ends and the beat does not have to. What you are holding at the end is more useful than the two pieces of writing, and it is worth saying what to do with it.

**What you actually have.** A beat memo with a revision, a maintained file, a records request with a documented outcome, a report you can read and cite properly, two source relationships, a published-standard short piece, a pitch, and a note of open questions with what would settle each. That is a beat in its first month, not a finished assignment.

**The three things to do in the following week.** Close the loop with both sources: tell them what happened, including that nothing published. Send the request follow-up if anything is outstanding. And put the note's items into the signal log with next-check dates, which converts a list of failures into a work plan.

**If you continue the beat.** Revise the memo properly at six months, run the quote audit monthly, protect the listening block, and read the year in order at twelve. Everything the track described as a habit is a habit precisely because it only works repeated, and one month of it is a demonstration rather than a practice.

**If you do not continue it.** Hand it over properly. The file is portable by design, and a beat file that another person could pick up is the thing REPORT-00 called a professional obligation to the beat rather than a convenience for you. Somebody covering that community later will be better off, which is the whole argument for keeping the file in a usable form.

**What the capstone is honestly evidence of.** That you can run a documented method on an unfamiliar subject inside a window, and that you can say what you do not know. Read as a portfolio item, that is what REPORT-07 said the Free Press posting was actually asking for: evidence of a beat held in more than one form, with the discipline visible.

**And the last thing the track has to say.** The whole method exists to make one sentence defensible: this is what I found, this is how I know, and this is what I could not establish. A reporter who can say all three, on deadline, about a subject they hold over time, is doing the job the first course described. Everything else in these nine courses is scaffolding for that sentence.

:::reveal What do you actually have at the end, described honestly? ||| A beat in its first month: a revised memo, a maintained file, a documented records outcome, a report you can cite, two source relationships, a short piece, a pitch, and a note of open questions.

:::reveal What converts the note from a list of failures into a work plan? ||| Putting its items into the signal log with next-check dates, which is one of the three things to do in the following week.

:::reveal What one sentence does the whole method exist to make defensible? ||| This is what I found, this is how I know, and this is what I could not establish.

## Vocabulary
- **A beat in its first month**: what the capstone actually produces, as distinct from a finished assignment.
- **Closing the loop**: telling both sources what happened, including that nothing published.
- **Portable handover**: leaving a file another person could pick up, which the track calls an obligation to the beat.
- **The defensible sentence**: what I found, how I know, and what I could not establish.

## Sources
- Free Press Indiana. (n.d.). *Women and girls reporter* [Job posting]. https://www.freepressindiana.org/jobs/women-girls-reporter
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-assessment-and-after",
      title: "16 · Knowledge check: assessment, failure, and after",
      section: "Section 4 · Assessment, failure, and after",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why is the assessment standard stated before the work?",
            options: [
              "So nobody is graded against a rule they could not see",
              "Because assessors are required to publish their criteria",
              "Because the standard changes depending on the beat chosen",
              "Because learners negotiate the criteria before beginning",
            ],
            correctIndex: 0,
            explanation:
              "And it is deliberately not the standard most people expect.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which is one of the six things this is assessed on?",
            options: [
              "Whether every claim carries the confidence level the file supports",
              "Whether the records request produced responsive documents",
              "Whether the interviews were conducted on the record",
              "Whether the finished writing is fluent and well structured",
            ],
            correctIndex: 0,
            explanation:
              "With the stranger test, independence distinguished from echo, an honest note, the interviewing standard applied, and the memo's boundary holding.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which is one of the four things this is NOT assessed on?",
            options: [
              "Whether you found something",
              "Whether the sourcing chain distinguishes independence from an echo",
              "Whether the note is honest and specific",
              "Whether the memo's boundary held or was deliberately revised",
            ],
            correctIndex: 0,
            explanation:
              "With whether records arrived, whether anybody spoke on the record, and whether the writing is good. All are outcomes rather than method.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Why are outcomes excluded from the assessment?",
            options: [
              "Outcomes on a four-week beat depend heavily on luck",
              "Outcomes cannot be verified by an assessor",
              "Outcomes are covered by the earlier courses' quizzes",
              "Outcomes are the responsibility of the institutions involved",
            ],
            correctIndex: 0,
            explanation:
              "They are real things and they are outcomes rather than method, which is what this exercise is testing.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the stranger test?",
            options: [
              "Whether somebody else could reconstruct each claim from the file alone",
              "Whether a source unknown to the reporter agreed to speak",
              "Whether an assessor unfamiliar with the beat finds the piece clear",
              "Whether an unconnected witness corroborated the central claim",
            ],
            correctIndex: 0,
            explanation:
              "It is the same standard the Researcher track's capstone applies, and it is the only one a persuasive narrative cannot satisfy.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does a file that passes the stranger test contain?",
            options: [
              "Every claim naming its origin, every level recorded, every promise written",
              "A complete transcript of each interview conducted",
              "A copy of every document the beat's bodies published",
              "A narrative account of the reporting from start to finish",
            ],
            correctIndex: 0,
            explanation:
              "That is either there or it is not, which is why it cannot be satisfied by a persuasive narrative.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "How is the note read?",
            options: [
              "For unresolved attempts, uncomfortable entries, and settling artifacts",
              "For length, since a longer note shows more effort",
              "For whether the items were eventually resolved",
              "For whether the items affect the finished writing",
            ],
            correctIndex: 0,
            explanation:
              "A short honest note beats a long list of things you never tried.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does an excellent capstone look like, concretely?",
            options: [
              "Nothing arrived, the summary did not resolve, the file is immaculate",
              "Documents arrived, both sources talked, the writing is fluent",
              "The beat expanded to cover the whole subject area",
              "Every item in the note was eventually resolved",
            ],
            correctIndex: 0,
            explanation:
              "A strong pass, because every one of those is a method running correctly against an uncooperative world.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does a weak capstone look like despite good material?",
            options: [
              "A fluent story whose file cannot show which claim came from where",
              "A short story with a complete claim list and sourcing chain",
              "A denial documented with the appeal drafted",
              "A note of twelve items with settling artifacts named",
            ],
            correctIndex: 0,
            explanation:
              "With a three-item note containing nothing uncomfortable and a sourcing chain listing two people who heard it from each other.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the failure this assessment exists to catch?",
            options: [
              "Good material with no method underneath it",
              "A method that produced no material",
              "A beat chosen too late in the window",
              "A pitch that escaped the beat's boundary",
            ],
            correctIndex: 0,
            explanation:
              "Documents arrived, sources talked, the writing is fluent, and nothing in the file shows how any of it was established.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the symptom that a beat is too big?",
            options: [
              "Every week produces new institutions and no finished deliverable",
              "The records request produces more documents than can be read",
              "Both interview subjects work for the same institution",
              "The note contains more than fifteen items",
            ],
            correctIndex: 0,
            explanation:
              "The cause is an out-of-scope sentence that was written and then not enforced.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the fix for a beat that is too big?",
            options: [
              "Narrow at the midpoint revision and say in the deliverable that you did",
              "Extend the working window by two weeks",
              "Drop one of the deliverables to fit the time available",
              "Restart with a different beat entirely",
            ],
            correctIndex: 0,
            explanation:
              "Which is a method finding rather than a confession.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the symptom of a retrofitted file?",
            options: [
              "Entries with no page numbers and a chronology assembled from memory",
              "A file longer than the deliverables it supports",
              "A file containing documents that were never used",
              "A file whose entries all date from the final week",
            ],
            correctIndex: 0,
            explanation:
              "The cause is starting the reporting before the file.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "Why can a retrofitted file not be fixed afterward?",
            options: [
              "A reconstruction is exactly what the stranger test detects",
              "Because the assessor requires timestamps on every entry",
              "Because sources cannot be re-contacted for provenance",
              "Because the documents are no longer available online",
            ],
            correctIndex: 0,
            explanation:
              "The only real fix is to start the file before the reporting.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the symptom of a request that went in too late?",
            options: [
              "A records deliverable consisting of a filed request and nothing else",
              "A fee estimate the reporter cannot afford to pay",
              "A denial with no appeal route stated",
              "A response arriving on the day of the deadline",
            ],
            correctIndex: 0,
            explanation:
              "It is survivable, because silence is a legitimate conclusion, but it costs the whole denial-and-appeal half of the exercise.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the symptom of the officials-only failure?",
            options: [
              "Two polished interviews with communications staff present",
              "One interview that could not be scheduled within the window",
              "Two interviews with the same person on different dates",
              "An interview subject who declined to be identified",
            ],
            correctIndex: 0,
            explanation:
              "The whole interviewing course is built for the other conversation, and an exercise that avoids it has not been done.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the fix for the officials-only failure?",
            options: [
              "The community-listening block",
              "A second records request to identify affected people",
              "An advocacy organization's introduction to a source",
              "Extending the window until somebody agrees",
            ],
            correctIndex: 0,
            explanation:
              "It is where the non-official source usually comes from and it is the first thing an exercise cuts.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the symptom of a note that is a formality?",
            options: [
              "Three items, all comfortable, none with a settling artifact",
              "Twenty items, several of them repeated",
              "Items that were resolved before the deadline",
              "Items concerning documents rather than people",
            ],
            correctIndex: 0,
            explanation:
              "It is the most common weakness and the easiest to fix, because the material is already in the process log.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "Where is the material for a proper note already recorded?",
            options: [
              "The process log",
              "The published pieces",
              "The beat memo's questions",
              "The interview transcripts",
            ],
            correctIndex: 0,
            explanation:
              "Every unanswered call, every promised document that did not arrive, and every figure you could not trace.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the meta-failure underneath most of the others?",
            options: [
              "Treating the deliverables as things to produce at the end",
              "Choosing a beat that is unfamiliar to the reporter",
              "Attempting too many formats within the window",
              "Relying on a single institution for all the evidence",
            ],
            correctIndex: 0,
            explanation:
              "The file, the log, and the note are all continuous, and the failures are what happens when they are written rather than kept.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "When are these failures recoverable?",
            options: [
              "In week two",
              "At any point before submission",
              "Only before the beat is chosen",
              "After the deliverables have been read",
            ],
            correctIndex: 0,
            explanation:
              "And fatal if caught in week four, which is the reason for reading them before starting.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What do you actually have at the end of the exercise?",
            options: [
              "A beat in its first month",
              "A finished assignment ready for assessment and nothing more",
              "A portfolio suitable for a job application",
              "A published body of work on a defined subject",
            ],
            correctIndex: 0,
            explanation:
              "A revised memo, a maintained file, a documented records outcome, a report you can cite, two source relationships, a piece, a pitch, and a note.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What are the three things to do in the following week?",
            options: [
              "Close the loop with sources, follow up the request, log the note's items",
              "Submit the deliverables, await the assessment, and revise the memo",
              "Publish the story, promote it, and respond to reader replies",
              "Choose a second beat, file a second request, and begin again",
            ],
            correctIndex: 0,
            explanation:
              "Logging the note's items with next-check dates converts a list of failures into a work plan.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What must sources be told when closing the loop?",
            options: [
              "What happened, including that nothing published",
              "The assessment outcome once it is received",
              "Which of their statements were used and where",
              "Whether the institution responded to the reporting",
            ],
            correctIndex: 0,
            explanation:
              "Which is the interviewing course's follow-through applied to an exercise that publishes nothing.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What converts the note into a work plan?",
            options: [
              "Putting its items into the signal log with next-check dates",
              "Ranking the items by how likely they are to resolve",
              "Sending the items to the institutions concerned",
              "Publishing the note alongside the finished story",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the three things to do in the week after the exercise ends.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What should be done if the beat is continued?",
            options: [
              "Revise the memo at six months, audit quotes monthly, protect listening, read the year",
              "File a records request every month regardless of need",
              "Publish a newsletter weekly to build an audience",
              "Expand the beat to include adjacent institutions",
            ],
            correctIndex: 0,
            explanation:
              "Everything the track described as a habit only works repeated, and one month of it is a demonstration rather than a practice.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What should be done if the beat is not continued?",
            options: [
              "Hand it over properly, since the file is portable by design",
              "Delete the file, since it concerns people who did not publish",
              "Archive it privately in case the subject returns",
              "Publish the file so others can use the material",
            ],
            correctIndex: 0,
            explanation:
              "A beat file another person could pick up is what the beat course called a professional obligation to the beat.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What is the capstone honestly evidence of?",
            options: [
              "Running a documented method on an unfamiliar subject, and saying what you do not know",
              "The ability to obtain documents from a reluctant institution",
              "The ability to write publishable copy under deadline",
              "Familiarity with the law governing records and publication",
            ],
            correctIndex: 0,
            explanation:
              "Read as a portfolio item, that is what the pitch course said the Free Press posting was actually asking for.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What is the one sentence the whole method exists to make defensible?",
            options: [
              "This is what I found, this is how I know, and this is what I could not establish",
              "This is what happened, and here is who is responsible for it",
              "This is what the documents say, and here is where to read them",
              "This is what my sources told me, and here is who they are",
            ],
            correctIndex: 0,
            explanation:
              "Everything in the nine courses is scaffolding for that sentence.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "Which two things does the stranger test require of every promise?",
            options: [
              "That it is written down and that its date is recorded",
              "That it was approved by an editor and disclosed to readers",
              "That it was made in writing and countersigned",
              "That it was limited to what the outlet could deliver",
            ],
            correctIndex: 0,
            explanation:
              "Every claim naming its origin, every confidence level recorded, and every promise made to a source written down.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which failure costs the denial-and-appeal half of the exercise?",
            options: [
              "Filing the records request too late",
              "Choosing a beat with no public body",
              "Interviewing only officials",
              "Writing the note as a formality",
            ],
            correctIndex: 0,
            explanation:
              "Silence is a legitimate conclusion, so it is survivable, but the second half of the records course goes unexercised.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "Which failure cannot be fixed retroactively?",
            options: [
              "The retrofitted file",
              "The oversized beat",
              "The late records request",
              "The formality note",
            ],
            correctIndex: 0,
            explanation:
              "Because a reconstruction is exactly what the stranger test detects.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What does the course say about the writing being good?",
            options: [
              "It is not assessed",
              "It is the primary criterion for the two output deliverables",
              "It is assessed only in the enterprise pitch",
              "It is assessed against the shape the reporter chose",
            ],
            correctIndex: 0,
            explanation:
              "Along with whether you found something, whether records arrived, and whether anybody spoke on the record.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which criterion concerns the memo?",
            options: [
              "Whether its boundary held, or was revised deliberately rather than abandoned",
              "Whether its three questions were all answered",
              "Whether it was written before the reporting began",
              "Whether it names a community the reporting reached",
            ],
            correctIndex: 0,
            explanation:
              "A deliberate midpoint revision is a method finding; an abandoned boundary is the oversized-beat failure.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which criterion concerns the sourcing chain?",
            options: [
              "Whether it distinguishes independent corroboration from an echo",
              "Whether every source agreed to be named",
              "Whether at least two sources support each claim",
              "Whether the sources were contacted in a documented order",
            ],
            correctIndex: 0,
            explanation:
              "Two people who heard it from each other is the classic failure, and it is what a weak capstone's chain shows.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Why is the community-listening block the fix for officials-only interviews?",
            options: [
              "It is where the non-official source usually comes from",
              "It provides an introduction from an advocacy organization",
              "It substitutes for an interview when nobody agrees",
              "It satisfies the interviewing deliverable on its own",
            ],
            correctIndex: 0,
            explanation:
              "And it is the first thing an exercise cuts, which is why the plan protects it.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What does the course say about one month of the track's habits?",
            options: [
              "It is a demonstration rather than a practice",
              "It is enough to establish a working beat",
              "It is the minimum the assessment accepts",
              "It is equivalent to a year at a smaller scale",
            ],
            correctIndex: 0,
            explanation:
              "Everything described as a habit only works repeated, which is why the continuation advice names the intervals.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "Who benefits from a portable handover?",
            options: [
              "Somebody covering that community later",
              "The assessor reading the deliverables",
              "The institution the beat covers",
              "The sources who agreed to speak",
            ],
            correctIndex: 0,
            explanation:
              "Which is the whole argument for keeping the file in a usable form rather than a private one.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "Which criterion cannot be satisfied by a persuasive narrative?",
            options: [
              "The stranger test",
              "The honesty of the note",
              "The interviewing standard",
              "The memo's boundary",
            ],
            correctIndex: 0,
            explanation:
              "A file another person can work from is either there or it is not.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does the weak capstone's note look like?",
            options: [
              "Three items and none of them uncomfortable",
              "Fifteen items, several of them unresolved",
              "Items whose settling artifacts are all documents",
              "Items copied from the process log without editing",
            ],
            correctIndex: 0,
            explanation:
              "It is the most common weakness and the easiest to fix, because the material is already recorded.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the profile of a strong capstone against an uncooperative world?",
            options: [
              "An immaculate file",
              "A large volume of obtained documents",
              "Two named on-record sources",
              "A long and well-written story",
            ],
            correctIndex: 0,
            explanation:
              "Because every uncooperative outcome documented properly is a method running correctly.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the relationship between the exercise and the beat afterward?",
            options: [
              "The exercise ends and the beat does not have to",
              "The exercise concludes the beat by design",
              "The beat must be handed over once assessed",
              "The beat continues only if the assessment passes",
            ],
            correctIndex: 0,
            explanation:
              "What you are holding at the end is more useful than the two pieces of writing.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "Which of the track's habits is named for a six-month interval?",
            options: [
              "Revising the beat memo",
              "Running the quote audit",
              "Protecting the listening block",
              "Reading the year in order",
            ],
            correctIndex: 0,
            explanation:
              "With the quote audit monthly, the listening block weekly, and the year read at twelve months.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What does the last lesson say the first course described?",
            options: [
              "The job a reporter who can say all three things is doing",
              "The four inventories that make up a beat map",
              "The disclosure the track owes about its own author",
              "The difference between a beat and an assignment",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who can say what they found, how they know, and what they could not establish, on deadline, about a subject they hold over time.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What are the nine courses, in the last lesson's description?",
            options: [
              "Scaffolding for one defensible sentence",
              "A sequence that must be completed in order",
              "A curriculum aimed at a specific job posting",
              "A substitute for working experience on a beat",
            ],
            correctIndex: 0,
            explanation:
              "This is what I found, this is how I know, and this is what I could not establish.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "Which failure is described as the most common weakness?",
            options: [
              "The note written as a formality",
              "The beat chosen too large",
              "The file assembled retroactively",
              "The request filed too late",
            ],
            correctIndex: 0,
            explanation:
              "And the easiest to fix, because every unanswered call and untraced figure is already in the process log.",
            sourceLessonSlug: "common-failures",
          },
        ],
      },
    },
    {
      slug: "final-capstone",
      title: "17 · Final: report the beat",
      section: "Section 4 · Assessment, failure, and after",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What are the four requirements a candidate beat must satisfy?",
            options: [
              "Requestable records, a published report, two willing sources, a coverable event",
              "A public body, a private contractor, a regulator, and an advocacy organization",
              "A statute, a budget, a contract, and an inspection report",
              "A newsletter audience, a video subject, a data set, and a deadline",
            ],
            correctIndex: 0,
            explanation:
              "One of the two sources must not be an official, because the interviewing course is built for that conversation.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "Why choose a small, near beat?",
            options: [
              "Same structure, reportable in weeks, and you keep showing up",
              "Because assessors prefer local subjects to national ones",
              "Because small beats produce more publishable material per week",
              "Because near beats reduce the cost of the reporting",
            ],
            correctIndex: 0,
            explanation:
              "Distance costs you showing up and being reachable, which are the two things the track relies on most.",
            sourceLessonSlug: "choose-the-beat",
          },
          {
            prompt: "What does the capstone beat memo contain?",
            options: [
              "Scope, three questions, four inventories, communities, measurement, disclosure",
              "A reporting plan, a budget, a timetable, and a deliverables list",
              "The records request, the report, the interviews, and the outputs",
              "The assessment criteria, the deadline, and the assessor's contact",
            ],
            correctIndex: 0,
            explanation:
              "Written before any reporting begins, and it is the document everything else is checked against.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "Why is the out-of-scope sentence the hardest part at capstone scale?",
            options: [
              "The reporting keeps opening doors and every institution touches another",
              "Because assessors read it before anything else in the memo",
              "Because it determines which records can lawfully be requested",
              "Because it fixes the word count of the finished deliverables",
            ],
            correctIndex: 0,
            explanation:
              "Without a written and enforced boundary the exercise produces four unfinished halves.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "When is the memo revised?",
            options: [
              "At the midpoint, with what changed and why marked",
              "At the end, as a record of what actually happened",
              "Weekly, so it always reflects the current reporting",
              "Only if the assessor requires a change of scope",
            ],
            correctIndex: 0,
            explanation:
              "Because at the midpoint it can still change what you do, and the annotation is evidence of a method running.",
            sourceLessonSlug: "capstone-beat-memo",
          },
          {
            prompt: "What are the five parts of the beat file?",
            options: [
              "Signal log, chronology, contacts, documents folder, claim list",
              "Memo, calendar, request, interviews, and note",
              "Drafts, notes, recordings, transcripts, and corrections",
              "Institutions, documents, people, calendar, and communities",
            ],
            correctIndex: 0,
            explanation:
              "Set up before the first phone call, because a file assembled afterward is a reconstruction.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Why does the records request go in during week one?",
            options: [
              "Records take longest and are least controllable",
              "Because the statute requires filing before any interview",
              "Because a request cannot be narrowed after filing",
              "Because assessors weight it most heavily among the deliverables",
            ],
            correctIndex: 0,
            explanation:
              "Filed before you know exactly what you want, and narrowed later, because narrowing is cheap and refiling is a new clock.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "Why is the process log assessed?",
            options: [
              "It is the only evidence the method ran rather than being described",
              "Because assessors need a record of hours worked",
              "Because it substitutes for the sourcing chain",
              "Because it establishes compliance with the records statute",
            ],
            correctIndex: 0,
            explanation:
              "Dates filed, dates promised, who answered and who did not, and what you were told by whom.",
            sourceLessonSlug: "the-file-and-the-calendar",
          },
          {
            prompt: "What are the four possible conclusions to the records deliverable?",
            options: [
              "Documents, a denial, a fee estimate, or silence",
              "Release, partial release, appeal, or litigation",
              "Approval, refusal, referral, or withdrawal",
              "Documents, an interview, a waiver, or an extension",
            ],
            correctIndex: 0,
            explanation:
              "All four are complete answers, and each exercises a different half of the records course.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Why is a denial arguably the better outcome for the exercise?",
            options: [
              "It lets you run the letter's elements, the category, the search question, and the appeal",
              "It proves the agency was concealing something material",
              "It shortens the window by removing the review of documents",
              "It qualifies the request for expedited handling on appeal",
            ],
            correctIndex: 0,
            explanation:
              "Do all of it whether or not you file the appeal within the window.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "Why not file six requests to guarantee one comes back?",
            options: [
              "It turns an exercise into a burden on a small office",
              "Because agencies charge a fee for each filing received",
              "Because statutes limit the number one person may file",
              "Because assessors penalize learners who file more than one",
            ],
            correctIndex: 0,
            explanation:
              "The exercise is about running one request properly rather than maximizing the chance of documents.",
            sourceLessonSlug: "the-records-request",
          },
          {
            prompt: "What four things does the report deliverable produce?",
            options: [
              "A document map, three traced sentences, one resolved endnote, one definition",
              "A summary, a critique, a comparison, and a recommendation",
              "A chart, a table, a citation list, and a glossary",
              "A methodology review, a sample assessment, and two figures",
            ],
            correctIndex: 0,
            explanation:
              "The traced sentences each carry the six fields: page, source, year, population, denominator, and whether the table was seen.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What does the exercise say about a summary sentence that does not resolve?",
            options: [
              "Most summaries have one and finding it is the point",
              "It means the report should be replaced with a better one",
              "It disqualifies the report from the deliverable",
              "It should be omitted from the write-up as inconclusive",
            ],
            correctIndex: 0,
            explanation:
              "Record what the summary says, what the table says, what you would ask the publisher, and the answer if you asked.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "What are the two transfer sentences?",
            options: [
              "What the report lets you say about your beat, and what it does not",
              "What the report found, and what other reports found",
              "What the publisher claims, and what the tables show",
              "What is confirmed, and what remains disputed",
            ],
            correctIndex: 0,
            explanation:
              "Worth more than the rest of the exercise, because they are the transfer from method to reporting.",
            sourceLessonSlug: "the-report-read-properly",
          },
          {
            prompt: "Which interview is the exercise really testing?",
            options: [
              "The non-official one",
              "The official one, because access is harder to obtain",
              "Whichever produced the stronger quotations",
              "Whichever was conducted in person rather than by phone",
            ],
            correctIndex: 0,
            explanation:
              "An official has a communications apparatus; somebody the institution acts on may never have been interviewed and may be exposed by speaking.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What goes in the pre-interview note?",
            options: [
              "The five disclosures, the risk assessment, the three things, and your limits",
              "The questions you intend to ask, in the order you will ask them",
              "The subject's background and their prior public statements",
              "The consent form and the recording permission you obtained",
            ],
            correctIndex: 0,
            explanation:
              "Disclosures in the words you will use, and written answers to the risk assessment's four questions.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What must a source be told in an exercise where nothing publishes?",
            options: [
              "That this is coursework and nothing is coming",
              "That publication is likely but not yet guaranteed",
              "That the material may be published later if it is strong",
              "Nothing, since the outcome is not yet known",
            ],
            correctIndex: 0,
            explanation:
              "Said clearly rather than left ambiguous, because telling a source honestly is itself part of the standard.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What does the assessment read the interview notes for?",
            options: [
              "Whether the rules were applied",
              "Whether the interview produced usable quotations",
              "Whether the subject was cooperative and articulate",
              "Whether the conversation was recorded in full",
            ],
            correctIndex: 0,
            explanation:
              "Rather than for the quality of the material, which depends heavily on who agreed to talk.",
            sourceLessonSlug: "the-two-interviews",
          },
          {
            prompt: "What triggers the quick-turn story?",
            options: [
              "Something on the beat calendar",
              "The arrival of documents from the records request",
              "The completion of both interviews",
              "The assessor's instruction to begin writing",
            ],
            correctIndex: 0,
            explanation:
              "Which tests whether the accumulation converts into output when the clock starts.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What are the five steps of the compressed verification sequence?",
            options: [
              "Decompose, kill check first, specific comment request, levels, negative check",
              "Draft, edit, fact-check, legal review, publish",
              "Interview, corroborate, attribute, caveat, correct",
              "Request, follow up, escalate, appeal, publish",
            ],
            correctIndex: 0,
            explanation:
              "It fits inside an hour once you have done it twice, which is the verification course at speed.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "What is submitted alongside the quick-turn piece?",
            options: [
              "The claim list, sourcing chain, comment correspondence, and negative check",
              "The transcripts of both interviews conducted for it",
              "The records request and the agency's response",
              "The beat memo and its midpoint revision",
            ],
            correctIndex: 0,
            explanation:
              "Read most carefully, because a good short piece can be produced by luck and a good working file cannot.",
            sourceLessonSlug: "the-quick-turn",
          },
          {
            prompt: "Where must the enterprise pitch come from?",
            options: [
              "The file",
              "An idea the reporter held before the exercise began",
              "A subject the assessor proposed at the outset",
              "A gap identified in another outlet's coverage",
            ],
            correctIndex: 0,
            explanation:
              "A logged signal, a pattern in the report, a document the request produced, or something a source said, named in the deliverable.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "Why does a pitch writable in week one fail?",
            options: [
              "It demonstrates nothing about the reporting",
              "It exceeds the scope the memo defined",
              "It duplicates the quick-turn story's subject",
              "It cannot contain a stated failure condition",
            ],
            correctIndex: 0,
            explanation:
              "The pitch is the evidence that the beat produced something rather than merely being attended.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What must the pitch say honestly?",
            options: [
              "What you do not have",
              "How confident you are of the eventual finding",
              "Which outlet would be most likely to publish it",
              "How the project compares to published work elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "The interview you could not get, the record still outstanding, the analysis you have not run.",
            sourceLessonSlug: "the-enterprise-pitch-capstone",
          },
          {
            prompt: "What four fields does each note entry carry?",
            options: [
              "What you were confirming, what you tried, why it failed, what would settle it",
              "The claim, the source, the date, and the confidence level",
              "The institution, the request, the response, and the appeal",
              "The question, the answer, the caveat, and the follow-up",
            ],
            correctIndex: 0,
            explanation:
              "Between five and fifteen items for a capstone-scale beat.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What distinguishes an unresolved attempt from an unasked question?",
            options: [
              "The what-you-tried field",
              "Whether it concerns a document or a person",
              "Whether it was logged in the signal log",
              "Whether it affects a claim in the finished piece",
            ],
            correctIndex: 0,
            explanation:
              "The note records the reporting's boundary rather than a wish list.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What turns the note from an admission into a plan?",
            options: [
              "Saying what would settle each item",
              "Ranking the items by importance",
              "Attaching a date to each item",
              "Sharing it with the sources involved",
            ],
            correctIndex: 0,
            explanation:
              "A named record, person, data set, filing, or analysis, which is why a reporter who keeps one has a live beat.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "What does rereading the story against the note catch?",
            options: [
              "Sentences that quietly claimed more than the file supported",
              "Quotations that were paraphrased rather than transcribed",
              "Sources named without their agreement",
              "Paragraphs exceeding the intended length",
            ],
            correctIndex: 0,
            explanation:
              "The single most useful pass in the entire exercise.",
            sourceLessonSlug: "the-note",
          },
          {
            prompt: "Which six things is the capstone assessed on?",
            options: [
              "Levels, the stranger test, independence, the note, interviewing, the boundary",
              "Findings, documents, quotations, writing, length, and timeliness",
              "Accuracy, balance, fairness, clarity, structure, and sourcing",
              "Records, reports, interviews, story, pitch, and note",
            ],
            correctIndex: 0,
            explanation:
              "Deliberately not the standard most people expect, and stated before the work begins.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which four things is it not assessed on?",
            options: [
              "Whether you found something, records arrived, anybody spoke, and the writing",
              "Whether the file passes the stranger test",
              "Whether the note is honest and specific",
              "Whether the memo's boundary held",
            ],
            correctIndex: 0,
            explanation:
              "All four are outcomes rather than method, and outcomes on a four-week beat depend heavily on luck.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What is the stranger test, and why is it central?",
            options: [
              "Reconstruction from the file alone, and a narrative cannot satisfy it",
              "An unfamiliar source's willingness to speak, and it proves access",
              "An assessor's comprehension of the piece, and it proves clarity",
              "An unconnected witness's corroboration, and it proves independence",
            ],
            correctIndex: 0,
            explanation:
              "Every claim naming its origin, every level recorded, every promise written down. That is either there or it is not.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does an excellent capstone look like?",
            options: [
              "Nothing arrived, the summary did not resolve, and the file is immaculate",
              "Documents arrived, both sources talked, and the writing is fluent",
              "The beat expanded to cover the whole subject area",
              "Every item in the note was resolved before the deadline",
            ],
            correctIndex: 0,
            explanation:
              "A strong pass, because every one of those is a method running correctly against an uncooperative world.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "What does a weak capstone look like despite good material?",
            options: [
              "A fluent story whose file cannot show which claim came from where",
              "A short story with a complete claim list and sourcing chain",
              "A documented denial with the appeal drafted",
              "A note of twelve items with settling artifacts named",
            ],
            correctIndex: 0,
            explanation:
              "With a three-item note containing nothing uncomfortable and a chain listing two people who heard it from each other.",
            sourceLessonSlug: "how-this-is-assessed",
          },
          {
            prompt: "Which failure cannot be fixed retroactively?",
            options: [
              "The retrofitted file",
              "The oversized beat",
              "The late records request",
              "The formality note",
            ],
            correctIndex: 0,
            explanation:
              "A reconstruction is exactly what the stranger test detects, so the only fix is starting the file first.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the fix for interviewing only officials?",
            options: [
              "The community-listening block",
              "A second records request naming affected people",
              "An advocacy organization's introduction",
              "Extending the window until somebody agrees",
            ],
            correctIndex: 0,
            explanation:
              "It is where the non-official source usually comes from and it is the first thing an exercise cuts.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What is the meta-failure underneath most of the others?",
            options: [
              "Treating the deliverables as things to produce at the end",
              "Choosing a beat the reporter does not already know",
              "Attempting too many output formats in the window",
              "Depending on one institution for all the evidence",
            ],
            correctIndex: 0,
            explanation:
              "The file, the log, and the note are continuous, and each failure is what happens when they are written rather than kept.",
            sourceLessonSlug: "common-failures",
          },
          {
            prompt: "What do you actually have at the end?",
            options: [
              "A beat in its first month",
              "A finished assignment and nothing further",
              "A portfolio ready for a job application",
              "A published body of work on a defined subject",
            ],
            correctIndex: 0,
            explanation:
              "A revised memo, a maintained file, a documented records outcome, a report you can cite, two source relationships, a piece, a pitch, and a note.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What are the three things to do in the following week?",
            options: [
              "Close the loop with sources, follow up the request, log the note's items",
              "Submit the work, await assessment, and revise the memo",
              "Publish, promote, and answer reader replies",
              "Choose a second beat, file again, and begin over",
            ],
            correctIndex: 0,
            explanation:
              "Logging the note's items with next-check dates converts a list of failures into a work plan.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What is the one sentence the whole method exists to make defensible?",
            options: [
              "This is what I found, this is how I know, and this is what I could not establish",
              "This is what happened, and this is who is responsible for it",
              "This is what the documents say, and this is where to read them",
              "This is what my sources told me, and this is who they are",
            ],
            correctIndex: 0,
            explanation:
              "Everything in the nine courses is scaffolding for that sentence.",
            sourceLessonSlug: "after-the-capstone",
          },
          {
            prompt: "What should be done with the beat file if the beat is not continued?",
            options: [
              "Hand it over, since it is portable by design",
              "Delete it, because it concerns people whose stories did not publish",
              "Archive it privately in case the subject becomes newsworthy again",
              "Publish it in full so other reporters can use the material",
            ],
            correctIndex: 0,
            explanation:
              "A file another person could pick up is what the beat course called a professional obligation to the beat rather than a convenience for the reporter.",
            sourceLessonSlug: "after-the-capstone",
          },
        ],
      },
    },
  ],
};
