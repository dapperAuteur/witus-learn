import type { AuthoredCourse } from "./authored-course";

// RSRCH-00, the start-here course of the Researcher track. Plan: plans/69-researcher-track.md.
//
// THE ONE IDEA THIS TRACK IS BUILT ON, stated here and referred back to by every later course:
//
//   `how-to-research` ends when YOU are satisfied. This track ends when SOMEBODY ELSE can use what
//   you found without repeating your work.
//
// That is the whole difference between research as a habit of mind and research as a job, and it
// generates everything: why a brief matters, why hours are budgeted, why a negative result is
// deliverable, why the file is the product.
//
// REGISTER: this is a PROFESSIONAL track (BAM, 2026-08-11). The reader may already be doing this
// work. No "what is a library" lesson. Assume competence, teach the trade.
//
// DO NOT DUPLICATE `how-to-research` (Study Skills, 15 lessons). That course teaches testing a claim
// and citing it honestly, and it is the recommended prerequisite. This one starts where a second
// person enters the picture.

export const RESEARCH_AS_A_JOB_COURSE: AuthoredCourse = {
  title: "Research as a Job, Not a Mood",
  description:
    "The difference between being curious and being paid. A brief you can be held to, a budget of hours, a negative result you can deliver, and a file somebody else can build on without calling you. The start of the Researcher track, for people who already know how to look things up.",
  lessons: [
    {
      slug: "rsrch-someone-else-depends-on-this",
      title: "1 · Somebody else is depending on this",
      section: "Part 1 · The job",
      body: `You can already research. That is not what this track is about.

Here is the whole difference, and everything else follows from it:

> **Personal research ends when you are satisfied. Professional research ends when somebody else can use what you found without repeating your work.**

Read that twice. It sounds like a small shift and it changes almost every decision you make.

## What it changes

**It changes when you stop.** On your own, you stop when you believe something. On a job, you stop when the person who commissioned it has what they need, which may be well before you are convinced, and occasionally long after.

**It changes what counts as output.** Your understanding is not deliverable. A file is. If the finding lives only in your head, or in notes only you can read, you have not delivered anything, however much you learned.

**It changes what a dead end is worth.** Alone, four hours that find nothing feels wasted. On a job, "I looked in these six places, here is what each of them holds, and this is not there" is a real result that saves the next person four hours. It has to be written down to count, which is the point.

**It changes who the error hurts.** A mistake in your own research misleads you. A mistake in a research file gets published under someone else's name, in a film, in a story, in a book. That is a different kind of responsibility and it deserves a different kind of care.

:::reveal You spend a full day searching for a document and never find it. What have you actually produced, and what makes the difference between a wasted day and a deliverable? ||| A negative result: this document is not in those places, and here is where you looked. It becomes deliverable only if you wrote down which sources you searched, how, and what each one covers, so the next person does not repeat the day.

## The roles this track is aimed at

Research is a paid function on other people's projects, and the job titles are real: archival researcher, fact-checker, research producer, clearances researcher, and the unnamed person on a small production who does all four.

What they have in common is that **their output is an input**. Somebody downstream builds on it, usually under time pressure, usually without the ability to check. That is the reason this track cares so much about handoff.

## What this course assumes

That you can already find things and test a claim. The *How to Research* course teaches that and is the recommended prerequisite. This track starts at the moment a second person enters the picture.

## Sources

Library of Congress. (n.d.). *Research guides and reference services*. https://guides.loc.gov/

Society of American Archivists. (n.d.). *So you want to be an archivist: An overview of the archival profession*. https://www2.archivists.org/`,
    },
    {
      slug: "rsrch-the-brief",
      title: "2 · The brief, and the question behind the question",
      section: "Part 1 · The job",
      recallContent: [
        {
          prompt: "State the difference between personal and professional research in one sentence.",
          answer: "Personal research ends when you are satisfied; professional research ends when somebody else can use what you found without repeating your work.",
        },
      ],
      body: `Almost every bad research job starts with a request that sounded clear.

"Find out about the 1937 strike." "Can you get me some background on her?" "What do we know about this building?" Each of those is a topic, not a brief, and a researcher who starts work on one is guessing at what is wanted and will guess wrong somewhere expensive.

## What a brief has to pin down

**The decision it feeds.** Why does anyone want this? Research for a legal review, for a script, for a funding application and for a caption are four different jobs on the same subject. Ask what happens to the answer.

**The specific questions**, written as questions. Not "background on the building" but "when was it built, who commissioned it, what was on the site before, and is there a photograph from before 1950."

**What would count as done.** For each question: an answer, a best available answer with its limits, or a documented dead end.

**What already exists.** Almost always somebody has done some of it. Getting their notes first is the cheapest hour of the job.

**The constraints.** Hours or budget, deadline, and what may be spent on paid databases or copies.

## The question behind the question

The most useful thing a researcher does at the start is work out what the requester actually needs, which is frequently not what they asked for.

Somebody asks for the founding date of a company. What they need is to say "the oldest in the state" on screen without being wrong. Those are different jobs: the second one requires knowing about the competitors too, and no amount of certainty about the founding date delivers it.

**So ask what the sentence is going to say.** Then research the sentence, not the topic.

:::reveal A director asks you to confirm a factory's founding year. You learn the claim on screen will be that it was the first of its kind in the region. What has just changed about your job? ||| The job is no longer one date. To support "the first of its kind" you have to establish what else existed and when, which means researching the competitors and the category definition. Confirming the founding year perfectly would still leave the on-screen claim unsupported.

## Write it down and send it back

A brief you agreed verbally is a brief you will remember differently from the person who gave it to you. Write it as a short note, send it, and let them correct it. Ten minutes, and it is the cheapest insurance in the trade.

## Sources

American Library Association. (n.d.). *Guidelines for behavioral performance of reference and information service providers*. https://www.ala.org/rusa/

National Archives. (n.d.). *Start your research*. https://www.archives.gov/research/start`,
    },
    {
      slug: "rsrch-budget-of-hours",
      title: "3 · A budget of hours, and knowing when to stop",
      section: "Part 1 · The job",
      recallContent: [
        {
          prompt: "Someone asks you to confirm a date. What should you ask before starting?",
          answer: "What sentence the answer is going to support. Research the sentence, not the topic, because the claim on screen may need far more than the date.",
        },
      ],
      body: `Research expands to fill any time you give it. The subject is always more interesting than the brief, and the next document is always plausibly the one that settles it.

A professional researcher works to a budget, and the skill is not working fast. **It is knowing where you are against the budget while you are still inside it.**

## Timeboxing that actually works

Set the box before you start, per question, not for the job as a whole. Two hours on the founding date, one hour on the photograph.

When the box runs out, stop and decide deliberately: extend it with a reason, or record where you got to and move on. The failure mode is not overrunning. It is overrunning **without noticing**, so that at the deadline three questions are beautifully answered and four have not been touched.

## The order to work in

**Cheap and broad before expensive and narrow.** Secondary sources first, not because they are authoritative but because they tell you what exists, who has written about it, and which archive holds the papers. An hour in a good bibliography saves a day in a reading room.

**Do the thing with a lead time first.** A records request, an archive appointment, an interlibrary loan or a rights holder's reply can take weeks. Fire those off on day one, then work on what you can do at your desk while they run. A researcher who leaves the requests until they have finished reading has just added a month to the project for no reason.

## Diminishing returns, and the honest version of "I could not find it"

Every question has a point where more hours stop buying more certainty. You can usually feel it: the same sources keep appearing, new searches return what you have already read, the remaining leads are all expensive.

That is the moment to write the negative result rather than to push on. And the negative result has a shape:

> Searched: the state archive's finding aid for the collection, the newspaper index 1930 to 1945, and the county recorder's grantor index. The deed is not in any of them. The most likely remaining location is the company's own records, which are not public and may not survive.

That paragraph is worth money. "I could not find it" is not.

:::reveal You have a fixed budget and four questions. One is proving far harder than expected. What is the wrong move, and what is the right one? ||| The wrong move is to keep going because you are close, and to arrive at the deadline with one question answered and three untouched. The right move is to stop at the box, write down where you got to and what remains, and go do the other three. Return to the hard one only with whatever time is left.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

National Archives. (n.d.). *Plan your research visit*. https://www.archives.gov/research/`,
    },
    {
      slug: "rsrch-check-the-job",
      title: "4 · Knowledge check: the job",
      section: "Part 1 · The job",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "You spend a full day searching and find nothing. What makes that day deliverable rather than wasted?",
            options: [
              "A written record of which sources you searched, how, and what each one actually covers",
              "A summary of what you learned about the subject along the way while searching",
              "An estimate of how many additional hours the remaining leads would probably take",
              "A note confirming the requester's original assumption could not be supported today",
            ],
            correctIndex: 0,
            explanation:
              "A negative result is a real finding, but only if it is specific enough to stop the next person repeating the search. Naming the sources and their coverage is what does that.",
            sourceLessonSlug: "rsrch-someone-else-depends-on-this",
          },
          {
            prompt: "A producer asks for a company's founding year, and you learn the script will call it the first of its kind in the region. What does the brief actually require?",
            options: [
              "Establishing what else existed in the category and when, since the claim is comparative",
              "Confirming the founding year against at least two independent primary sources",
              "Checking whether the company has changed its legal name since it was founded",
              "Verifying the regional boundary the script is using when it says the region",
            ],
            correctIndex: 0,
            explanation:
              "The claim on screen is comparative, so a perfect founding date leaves it unsupported. Research the sentence rather than the topic. The other three are reasonable tasks that still would not establish the comparison.",
            sourceLessonSlug: "rsrch-the-brief",
          },
          {
            prompt: "Which task should be started on day one of a research job, regardless of where it sits in your plan?",
            options: [
              "Anything with a lead time you do not control, such as a records request or an archive appointment",
              "The question the client seems most anxious about, so early reassurance can be offered",
              "The most difficult question, while your attention and energy are still at their highest",
              "A full reading of the secondary literature, so nothing later is approached uninformed",
            ],
            correctIndex: 0,
            explanation:
              "Requests, appointments, loans and rights-holder replies can take weeks and run in the background while you work at your desk. Leaving them until you have finished reading adds that waiting time to the end of the project for no gain.",
            sourceLessonSlug: "rsrch-budget-of-hours",
          },
          {
            prompt: "What is the failure mode a research budget is designed to prevent?",
            options: [
              "Overrunning on one question without noticing, so others are never started",
              "Spending money on paid database access that the client had not approved",
              "Working more slowly than a more experienced researcher would on the same brief",
              "Reading secondary sources when the brief asked for primary documentation",
            ],
            correctIndex: 0,
            explanation:
              "The point is not speed. It is knowing where you are against the budget while you are still inside it, so that the choice to keep going is a decision rather than an accident.",
            sourceLessonSlug: "rsrch-budget-of-hours",
          },
        ],
      },
    },
    {
      slug: "rsrch-the-file-is-the-product",
      title: "5 · The file is the product",
      section: "Part 2 · What you hand over",
      body: `Ask a researcher what they produced and they will often describe what they learned. That is not the product. **The file is the product**, and it is worth designing rather than accumulating.

The test is simple and unforgiving:

> Could a competent stranger pick this up, understand what is established and what is not, and continue the work without calling you?

If the answer is no, the job is unfinished no matter how much you found.

## What a usable file contains

**The brief**, as agreed, so a reader knows what was asked.

**The findings**, each one attached to its source, with enough detail to retrieve that source again. Not "census records" but which census, which year, which enumeration district, and where you saw it.

**A clear line between fact, inference and speculation.** This is the one most often blurred and it does the most damage downstream. "The deed is dated 1911" and "the family probably moved that spring" are different objects and a reader who cannot tell them apart will publish the second as the first.

**What could not be confirmed**, and where you looked. See lesson 3.

**Open questions**, ranked by what they would cost to answer.

## Why the boring parts matter most

A file gets read under pressure, usually by someone who did not commission it, often months later. Every convention that seems fussy while you write is doing work at that moment: consistent dates, full source citations, a note on where a copy lives.

The single highest-value habit is **recording where you found something at the moment you find it**. Reconstructing a citation later takes ten times as long as capturing it took, and sometimes it cannot be done at all.

:::reveal Name the distinction a research file must make explicit, and what happens downstream when it does not. ||| The distinction between what is established, what is inferred, and what is speculation. Without it, a reader under deadline will treat a plausible inference as a confirmed fact and publish it as one, under their name and on your research.

## The file outlives the project

Productions get shelved and revived. Stories get followed up years later. Lawyers ask questions long after everyone has moved on. A file built to be read by a stranger is the one that still works when the stranger turns out to be you, in three years, having forgotten everything.

## Sources

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards

Modern Language Association. (n.d.). *Documenting sources*. https://style.mla.org/`,
    },
    {
      slug: "rsrch-provenance-of-your-own-work",
      title: "6 · The provenance of your own work",
      section: "Part 2 · What you hand over",
      recallContent: [
        {
          prompt: "What is the test of whether a research file is finished?",
          answer: "Whether a competent stranger could pick it up, see what is established and what is not, and continue without calling you.",
        },
      ],
      body: `Archivists use the word **provenance** for the history of a record: who made it, who held it, and how it reached where it now sits. It matters because a document's meaning depends on where it came from.

Your research has provenance too, and it is worth tracking with the same seriousness.

## Three questions to be able to answer about every finding

**Where did this come from?** Not the topic, the object. A named collection, a box and folder, a URL with the date you retrieved it, an edition and page.

**How did it reach me?** Did you see the original, a microfilm, a digital scan, a transcription, or a quotation of it in somebody else's book? These are not equivalent, and the further down that list you are, the more chances there have been for an error to enter.

**What have I done to it since?** Transcribed, translated, cropped, summarised, corrected an obvious typo. Every one of those is an intervention and every one can introduce something that was not there.

## The chain of transcription

The most common way a false fact enters the record is not fabrication. It is a chain of honest copying.

A researcher reads a date in a handwritten ledger and types it into their notes. A writer copies it into a draft. An editor corrects what looks like an inconsistency. A later researcher cites the published book rather than the ledger, and the number is now attested in print and has lost its origin.

Nobody lied. The ledger still says what it says. **The published figure is simply no longer connected to it**, and the only defence is a chain of custody you can walk back.

That is also the argument for citing the thing you actually looked at. If you read a quotation in a secondary source and could not check the original, say so. A citation that implies you saw a document you never saw is a small lie that becomes a large one when somebody relies on it.

:::reveal You find a striking figure quoted in a well-regarded history book, and you cannot get to the original source it cites. What is the honest way to use it? ||| Cite the book as where you found it, note that the original was not consulted, and flag the figure as unverified in the file. Citing the original as though you had read it would misrepresent the strength of the evidence and would hide the fact that nobody in the chain has recently checked it.

## Sources

Society of American Archivists. (n.d.). *Provenance*. Dictionary of Archives Terminology. https://dictionary.archivists.org/

International Council on Archives. (n.d.). *Principles of archival description*. https://www.ica.org/`,
    },
    {
      slug: "rsrch-when-you-are-wrong",
      title: "7 · When you are wrong, and how to be wrong well",
      section: "Part 2 · What you hand over",
      recallContent: [
        {
          prompt: "Name the three questions you should be able to answer about any finding in your file.",
          answer: "Where it came from as a specific object, how it reached you (original, scan, transcription or a quotation of it), and what you have done to it since.",
        },
      ],
      body: `You will be wrong. Everyone in this trade is wrong regularly, and the difference between a researcher people keep hiring and one they do not is almost entirely in what happens next.

## Say it early and say it plainly

An error costs least at the moment you find it and more every hour after. If something you supplied is wrong, say so immediately, in plain words, and say exactly what is affected.

The instinct to check thoroughly before raising it is understandable and usually wrong. **The person downstream needs to stop using it now**, not after your investigation. Tell them what you know, then investigate.

## Say what class of error it is

Three kinds, and the person downstream needs to know which, because they respond differently:

- **A transcription error.** The source is fine, you copied it wrong. Correctable, contained.
- **A source error.** You reported the source accurately and the source is wrong. Now the question is what else rests on that source, which is a much bigger problem.
- **An inference error.** The facts hold, the conclusion drawn from them does not. Everything built on the conclusion needs revisiting, and the facts themselves stand.

## The professional habit that prevents most of this

Flag uncertainty at the time, not in retrospect. A file that says "confirmed", "probable" and "unverified" against each finding gives the person downstream the ability to make their own risk decision.

A file that presents everything at the same confidence is asking to be trusted more than it deserves, and when one item fails it takes the credibility of the rest with it.

:::reveal Why is a file that grades its own confidence more valuable than one that presents everything as established, even when both are entirely accurate? ||| Because the person downstream can then decide what to lean on and what to check further. Uniform confidence hides the difference between a document you read and a plausible inference, and when one item turns out to be wrong it casts doubt on everything else in the file.

## Sources

Committee on Publication Ethics. (n.d.). *Retraction guidelines*. https://publicationethics.org/

American Press Institute. (n.d.). *Corrections and accountability*. https://www.americanpressinstitute.org/`,
    },
    {
      slug: "rsrch-check-the-file",
      title: "8 · Knowledge check: what you hand over",
      section: "Part 2 · What you hand over",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which distinction must a research file make explicit on every finding?",
            options: [
              "What is established, what is inferred, and what is speculation",
              "What came from primary sources and what came from secondary sources",
              "What was found online and what required a visit to a physical archive",
              "What was inside the agreed budget and what required additional hours",
            ],
            correctIndex: 0,
            explanation:
              "Without it, a reader under deadline publishes a plausible inference as a confirmed fact. The primary and secondary distinction matters too, but it is not the one that causes this specific failure.",
            sourceLessonSlug: "rsrch-the-file-is-the-product",
          },
          {
            prompt: "You read a striking figure quoted in a respected history and cannot reach the original source. What is the honest way to use it?",
            options: [
              "Cite the book as where you found it and flag the figure as unverified",
              "Cite the original source the book names, since the author evidently consulted it",
              "Leave the figure out entirely, because an unverified number should never be recorded",
              "Cite both the book and the original, letting the reader decide which to rely on",
            ],
            correctIndex: 0,
            explanation:
              "Citing the original implies you saw it. Omitting it discards a genuine lead. Recording where you actually found it, with its status, keeps the finding usable and honest about its strength.",
            sourceLessonSlug: "rsrch-provenance-of-your-own-work",
          },
          {
            prompt: "You discover that something you supplied last week is wrong. What should you do first?",
            options: [
              "Tell the person using it immediately, before you have finished investigating",
              "Establish the full extent of the error so your correction is complete and accurate",
              "Identify which source misled you so responsibility can be correctly assigned",
              "Check whether the error actually affects the conclusion the client drew from it",
            ],
            correctIndex: 0,
            explanation:
              "They need to stop relying on it now. Investigating first is understandable and costs the one thing that matters, which is the hours during which they are still building on something false.",
            sourceLessonSlug: "rsrch-when-you-are-wrong",
          },
          {
            prompt: "A researcher reports a date accurately from a ledger, a writer copies it, an editor smooths an inconsistency, and a later author cites the published book. What has gone wrong?",
            options: [
              "The figure in print is no longer connected to the ledger, and nobody lied at any step",
              "The original researcher failed to verify the ledger against an independent second source",
              "The editor introduced a fabrication, which is the point at which the chain became dishonest",
              "The later author committed plagiarism by citing a secondary source as though it were primary",
            ],
            correctIndex: 0,
            explanation:
              "This is the ordinary way a false fact enters the record: a chain of honest copying that ends with a number attested in print and detached from its origin. The defence is a chain of custody you can walk back.",
            sourceLessonSlug: "rsrch-provenance-of-your-own-work",
          },
        ],
      },
    },
    {
      slug: "rsrch-capstone-turn-a-request-into-a-brief",
      title: "9 · Capstone: turn a request into a brief",
      section: "Part 2 · What you hand over",
      lessonType: "assignment",
      body: `Take a vague research request and turn it into something a professional could be held to. Roughly 500 to 800 words.

Use a real request if you have one. If not, use one of these, which are deliberately as thin as real ones are:

- "Find out about the strike at the plant."
- "Can you get me some background on her for the intro?"
- "What do we know about this building?"

## What to submit

**1. The request, as given.** Quoted, in its original vagueness.

**2. The questions you would ask before starting.** Aim for four to six. At least one must be the question behind the question: what sentence is this going to support, and what happens to the answer.

**3. The brief you would write back.** The specific questions as questions, what would count as done for each, and what you already believe exists.

**4. A budget.** Hours per question, and which task you would start on day one because it has a lead time you do not control.

**5. The shape of the file** you would hand over, with the confidence grades you would use.

**6. One honest limit.** Something you would tell the requester up front that they will not want to hear: a question that cannot be answered in the time, a source that may not survive, a claim their sentence cannot support.

## How this is assessed

Not on research. You are not asked to answer anything.

You are assessed on whether the brief could actually be worked to by someone else, whether section 2 finds the real question rather than restating the topic, and above all on section 6. **Naming the limit up front is the professional act.** A researcher who agrees to everything and discovers the problem at the deadline has failed at the part of the job this course is about.

## Sources

American Library Association. (n.d.). *Guidelines for behavioral performance of reference and information service providers*. https://www.ala.org/rusa/

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives`,
    },
  ],
};
