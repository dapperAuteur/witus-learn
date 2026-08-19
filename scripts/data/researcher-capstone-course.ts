import type { AuthoredCourse } from "./authored-course";

// RSRCH-99, the capstone of the Researcher track. Plan: plans/69-researcher-track.md.
//
// A CAPSTONE COURSE TEACHES ALMOST NOTHING NEW, and the temptation to add material should be
// resisted. Its job is to make the learner DO the thing end to end, with enough scaffolding that
// they finish. Every lesson here is either a decision they have to make well or a checkpoint that
// catches the failure that stops people finishing.
//
// THE ASSESSMENT STANDARD, and it is the track's whole thesis made operational: the file is judged
// by whether a stranger could work from it. Not by how much was found. A learner who produces a
// small, honest, fully traceable file passes; one who produces an impressive narrative with
// untraceable findings does not.

export const RESEARCHER_CAPSTONE_COURSE: AuthoredCourse = {
  title: "Capstone: Build a Handoff-Ready File",
  description:
    "One subject, worked end to end, producing a file a stranger could pick up and continue. Scoping something you can actually finish, planning by institution rather than by hope, a mid-project checkpoint that catches the usual failure, a self-review against the handoff test, and the finished file as the first item in a portfolio.",
  lessons: [
    {
      slug: "cap-what-you-are-building",
      title: "1 · What you are building, and how it will be judged",
      section: "Part 1 · Scope and plan",
      body: `You are going to research one subject and produce a file somebody else could work from.

**You are not writing an essay, an article or a biography.** The deliverable is the research, packaged: findings with sources and grades, what could not be established, and a memo that orients a reader.

## The standard

One question decides it, and it is the same one the track has asked since RSRCH-00:

> **Could a competent stranger pick this up, understand what is established and what is not, and continue without calling you?**

Note what that does not reward. Not volume. Not how interesting the subject is. Not whether you reached a satisfying conclusion.

**A small, honest, fully traceable file passes. An impressive narrative with untraceable findings does not.** That is not a technicality; it is the difference between research and an assertion with atmosphere.

## What the finished file contains

- The question, stated so somebody else could tell whether it was answered.
- The institutions you predicted, and which predictions paid off.
- Findings, each with its source, the form you saw it in, and a grade.
- At least one inference, with its reasoning written out.
- At least one conflict, handled as RSRCH-06 describes.
- What could not be established, and where you looked.
- A search log.
- A research memo of one to two pages.
- Clearances noted on any image you would publish.

## Why the awkward bits are compulsory

The inference, the conflict and the failed searches are required because **they are the parts that distinguish a research file from a summary.** Anybody can list what they found. Saying clearly what you concluded rather than found, what refused to resolve, and where you looked without success is the professional content.

:::reveal Why does a small, fully traceable file score higher than a large one with untraceable findings? ||| Because an untraceable finding cannot be checked, corrected or built on, so it is not usable by anybody else. The whole point of a file is that somebody can continue from it, and volume does not help if none of it can be relied on.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

American Library Association. (n.d.). *Guidelines for behavioral performance of reference and information service providers*. https://www.ala.org/rusa/`,
    },
    {
      slug: "cap-choosing-a-subject",
      title: "2 · Choosing a subject you can actually finish",
      section: "Part 1 · Scope and plan",
      recallContent: [
        {
          prompt: "What single question decides whether the capstone file is good?",
          answer: "Could a competent stranger pick it up, see what is established and what is not, and continue without calling you.",
        },
      ],
      body: `The commonest reason a capstone fails is the subject, chosen in the first hour and never recovered from.

## What makes a subject workable

**Bounded.** One building, one person, one business, one event, one object. Not a neighbourhood, an industry or a decade.

**Documented somewhere you can reach.** Online collections, a local archive, a library you can visit, records you can request. Enthusiasm does not substitute for access.

**Has at least two independent kinds of source.** If everything traces to one book, you will spend the project reading one book.

**Small enough to finish and rich enough to be interesting.** These pull against each other, and when in doubt go smaller. A narrow subject researched properly demonstrates far more than a broad one skimmed.

## Good shapes

- A named local business and what happened to it.
- One building: who built it, who occupied it, what it was used for.
- A person named on a memorial, a plaque or in one newspaper story.
- One event covered in local press, checked against records.
- One object with a provenance question.

## Bad shapes, and why

- **"The history of X in my town."** No boundary, so no possible completion.
- **A famous person.** You will research the literature about them, which is a different exercise.
- **Anything depending on one restricted archive.** If access fails, the project fails.
- **A living person's private life.** Ethical exposure with no research benefit, and this is the one to avoid outright.

## Write the boundary down

One sentence naming what is in scope and what is not. Return to it when you find something fascinating and adjacent, which you will, and treat it as a note for the open-questions section rather than a new direction.

:::reveal Why is a famous person a poor capstone subject even though abundant material exists? ||| Because the material is mostly secondary: you would be researching the literature about them rather than the records of them. The exercise is building a file from primary sources, and an unfamous subject forces that.

## Sources

National Archives. (n.d.). *Start your research*. https://www.archives.gov/research/start

Library of Congress. (n.d.). *Local history and genealogy research guides*. https://guides.loc.gov/local-history-genealogy`,
    },
    {
      slug: "cap-the-plan",
      title: "3 · The plan: questions, institutions, budget",
      section: "Part 1 · Scope and plan",
      recallContent: [
        {
          prompt: "Name two shapes of capstone subject that reliably fail, and why.",
          answer: "Any two of: an unbounded history of a place (no possible completion), a famous person (you research the literature, not the records), or a subject depending on one restricted archive (access failure kills the project).",
        },
      ],
      body: `Write the plan before you search anything. It takes half an hour and it is the difference between research and browsing.

## Three to six questions, written as questions

Not topics. Each must be answerable, and each must be capable of coming out negative.

Weak: "the building's history." Strong: "when was it built, who commissioned it, what stood on the site before, and what was it used for between 1940 and 1960."

## The institution list, done from RSRCH-03's method

For each question, name the bodies that would have generated a record **in the course of their ordinary business**. Do this from reasoning, before searching. It is the most valuable half hour in the project.

A building implies: a permitting authority, a land registry or recorder, a tax assessor, an insurance surveyor, a newspaper, possibly a fire department, possibly an architect's practice whose drawings survive somewhere.

Then, for each: does it survive, where is it held, and can you reach it?

## The budget

Hours per question. Then identify **what has a lead time you do not control** and start it today: a records request, an archive appointment, an interlibrary loan, an email to a local historical society.

Those run in the background while you work. Leaving them until you have finished reading adds their waiting time to the end of your project for no reason at all.

## Predict, so you can be wrong on the record

Write down what you expect to find before you look. When your predictions are wrong, that is a finding about the record, and it belongs in the file.

Researchers who never predict never notice that a record set they assumed existed does not.

:::reveal What should be started on day one of the capstone regardless of where it sits in your plan, and why? ||| Anything with a lead time you do not control: a records request, an archive appointment, a loan, an email to a historical society. They run in the background while you work, and leaving them until later adds their waiting time to the end of the project.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

National Archives. (n.d.). *Plan your research visit*. https://www.archives.gov/research/`,
    },
    {
      slug: "cap-checkpoint",
      title: "4 · The checkpoint, halfway",
      section: "Part 2 · Doing it",
      recallContent: [
        {
          prompt: "Why write down what you expect to find before searching?",
          answer: "Because when the prediction is wrong that is a finding about the record, and researchers who never predict never notice that an assumed record set does not exist.",
        },
      ],
      body: `Stop when roughly half your budget is gone and run this check. It exists because of one specific, extremely common failure.

## The failure it catches

**One question has eaten the project.** You found something interesting, followed it, and three of your five questions have not been touched. It feels like progress the entire time it is happening, which is why a scheduled stop is the only reliable defence.

## The checkpoint

**1. Which questions are answered, partly answered, and untouched?** Count honestly.

**2. Where did the hours actually go?** Compare with the plan.

**3. What lead-time items are outstanding?** Chase anything that has not come back.

**4. What have I not written down yet?** The most valuable question here. Anything sitting in your head or in unprocessed photographs is not yet research. **Catch up the file before continuing**, because reconstructing a week later is where citations die.

**5. What can I now see is impossible?** Half a budget in, you know which questions the accessible record will not answer. Reclassify them as open questions now, with what you learned about why, and redeploy the hours.

## Then decide, deliberately

Extend a question with a reason, or stop it and record where you got to. Either is fine. **What is not fine is continuing without noticing**, which is the failure the whole checkpoint exists to prevent.

## Write a paragraph to yourself

Where the project stands, what you are worried about, what you will do with the remaining hours. Two minutes, and it becomes the backbone of your memo later, written while you still remember why you made each choice.

:::reveal What single question at the halfway checkpoint most often reveals a problem, and why? ||| What have I not written down yet. Anything still in your head or in unprocessed photographs is not yet research, and reconstructing it a week later is where citations are lost for good.

## Sources

American Library Association. (n.d.). *Guidelines for behavioral performance of reference and information service providers*. https://www.ala.org/rusa/

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives`,
    },
    {
      slug: "cap-self-review",
      title: "5 · The self-review, before you hand it over",
      section: "Part 2 · Doing it",
      recallContent: [
        {
          prompt: "What failure is the halfway checkpoint designed to catch?",
          answer: "One question eating the project while other questions go untouched. It feels like progress the whole time it happens, so only a scheduled stop catches it.",
        },
      ],
      body: `Before you submit, read your own file as though somebody handed it to you and asked you to continue the work tomorrow. This is not a formality and it usually finds three or four real problems.

## The checklist

**Can I get back to every source?** Pick five findings at random and try to reconstruct where each came from using only what is written. Any that fail are not yet findings.

**Is every grade attached to a claim rather than a document?** Look specifically for a strong record carrying a weak claim.

**Is every inference marked, with reasoning?** Search your own file for confident sentences that are actually conclusions.

**Are my words and my sources' words distinguishable?** Anywhere they are not is a future misquotation.

**Does the file say what I did NOT find?** If the failed searches are missing, add them. This is the most commonly omitted section and one of the most useful.

**Would the memo orient someone in five minutes?**

**Is there anything I believe but cannot support?** If it is worth keeping, mark it as an open question with what would settle it. If not, cut it.

## The hardest one

**Have I filled any gap with a plausible story?**

Look for narrative connectives: "so the family moved," "which explains why," "by then." Each one is a join, and a join is either supported by a source or it is your inference. Both are fine; only one of them may be unmarked.

This is where research quietly becomes fiction, and it happens to careful people under deadline, in the final assembly, when the file is nearly finished and a small gap would spoil the shape.

:::reveal Which words should you search your own file for during self-review, and what are you looking for? ||| Narrative connectives such as "so", "which explains why" and "by then". Each joins two findings, and the join is either supported by a source or is your own inference. Both are acceptable; only one may be left unmarked.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

International Fact-Checking Network. (n.d.). *Code of principles*. https://www.poynter.org/ifcn/`,
    },
    {
      slug: "cap-check-the-standard",
      title: "6 · Knowledge check: the standard",
      section: "Part 2 · Doing it",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Two capstone files are submitted. Which passes on the track's standard?",
            options: [
              "A short file with fewer findings, every one traceable and graded",
              "A long file with many findings, several of which cannot be traced to a source",
              "A file presenting a compelling narrative account of the subject's history",
              "A file covering a broad subject with a summary of the published literature",
            ],
            correctIndex: 0,
            explanation:
              "An untraceable finding cannot be checked, corrected or built on, so it is unusable by the stranger the file exists for. Volume does not compensate, and a narrative is a different deliverable entirely.",
            sourceLessonSlug: "cap-what-you-are-building",
          },
          {
            prompt: "Why is a famous person a poor capstone subject?",
            options: [
              "The available material is mostly secondary, so you research the literature not the records",
              "Copyright restrictions on published biographies prevent quotation in a research file",
              "Archives restrict access to collections concerning well-known public figures",
              "The volume of material makes it impossible to complete within any reasonable budget",
            ],
            correctIndex: 0,
            explanation:
              "The exercise is building a file from primary sources. An unfamous subject forces that, because there is no literature to fall back on and you must reason from institutions to records.",
            sourceLessonSlug: "cap-choosing-a-subject",
          },
          {
            prompt: "At the halfway checkpoint, which question most often exposes a problem?",
            options: [
              "What have I not written down yet",
              "Which source has proved most productive so far",
              "How many hours remain against the original budget",
              "Which question is likely to produce the most interesting finding",
            ],
            correctIndex: 0,
            explanation:
              "Material still in your head or in unprocessed photographs is not research yet, and reconstructing citations a week later is where they are lost permanently. The hours question matters and is easier to answer honestly.",
            sourceLessonSlug: "cap-checkpoint",
          },
          {
            prompt: "During self-review, why search the file for words like 'so' and 'by then'?",
            options: [
              "They mark joins between findings that are either sourced or are unmarked inferences",
              "They indicate informal register that should be revised out of a professional file",
              "They signal passages copied from secondary sources without attribution",
              "They usually appear where a citation has been omitted from a direct quotation",
            ],
            correctIndex: 0,
            explanation:
              "Narrative connectives are where a gap gets filled with a plausible story. The join is either supported or it is your inference, and it is the unmarked inference that turns research into fiction under deadline.",
            sourceLessonSlug: "cap-self-review",
          },
        ],
      },
    },
    {
      slug: "cap-the-file",
      title: "7 · Capstone: the file",
      section: "Part 3 · The deliverable",
      lessonType: "assignment",
      body: `Produce the file. This is the assessed deliverable of the whole Researcher track.

Budget roughly 12 to 20 hours. It can be less if your subject is small, and a small subject done properly is the recommendation.

## What to submit

**1. The subject and the boundary.** One sentence on what is in scope and what is not.

**2. Your questions**, three to six, written as questions.

**3. The institution list** you wrote before searching, and which predictions paid off. **Include the ones that did not.**

**4. Findings.** Each with: the claim, the source (complete enough to return to), the form you saw it in, and a grade against a scale you define at the top.

**5. At least one inference**, marked, with the reasoning written so a reader could disagree.

**6. At least one conflict**, handled the RSRCH-06 way: both accounts, what each source is, what would explain both, and whether it resolved.

**7. What you could not establish.** Which kind of stop: searched and absent, records do not survive, or never eligible to appear.

**8. A search log.** Systems, queries, limits, dates, result counts. Including the failures.

**9. A research memo**, one to two pages: headline findings, how much to trust them, what is unresolved, what surprised you, what you would do next and roughly what it would cost.

**10. Clearances**, if any image would be published: rights statement quoted verbatim, your reading, obligations, and availability separately.

## How this is assessed

**Not on how much you found.** On whether a stranger could continue from it.

Weighted toward sections 5, 6 and 7. Anyone can list findings. Marking an inference so it can be argued with, leaving a conflict standing rather than tidying it away, and naming which kind of dead end you hit are the three things that distinguish a researcher from somebody who looked things up.

**The disqualifying failure is a finding presented at a confidence it does not have.** One unmarked inference stated as fact does more damage to a file's usefulness than twenty questions left open, because it teaches the reader that the grades cannot be trusted.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

National Archives. (n.d.). *Research our records*. https://www.archives.gov/research`,
    },
    {
      slug: "cap-what-to-do-with-it",
      title: "8 · What to do with it afterwards",
      section: "Part 3 · The deliverable",
      recallContent: [
        {
          prompt: "Which three sections of the capstone file carry the most weight, and what do they demonstrate?",
          answer: "The marked inference, the unresolved conflict, and the kind of dead end. They distinguish a researcher from somebody who looked things up.",
        },
      ],
      body: `The file is a deliverable and it is also the best portfolio piece this track produces. Very few people can show one.

## Why it works as a portfolio piece

An employer hiring a researcher, a checker or a producer wants evidence of judgment, and judgment is invisible in a finished article. It is highly visible in a file: what you chose to check, how you graded, how you handled a conflict, what you admitted you could not do.

**Show the file rather than describing your skills.** A single well-built file is worth a page of adjectives.

## Preparing it to show

**Remove anything confidential**, and check consent conditions on any interview material.

**Keep the failures in.** The instinct is to tidy the dead ends out. Do the opposite: the failed searches and the unresolved conflict are the parts that demonstrate method rather than luck.

**Add a short covering note**: the brief, the hours, the constraints. Context turns a document into evidence of professional work.

## Where this track goes next

- **Fact-checking** (RSRCH-04) is the most immediately hireable skill here. Checking is a defined role and small publications hire for it.
- **Clearances** (RSRCH-05) is a production function, and productions frequently need it before they need anything else.
- **The other three documentation paths** in this catalog build on this one. The Reporter track publishes on a deadline, the Documentarian program takes a whole project through a trust rubric, and the Storytelling series turns evidence into a piece.

## The habit to keep

The one this track opened with, and the one worth carrying out of it:

> **Research is finished when somebody else can use it, not when you are satisfied.**

Applied to your own work, that sentence quietly raises the standard of everything you do, including the research nobody is paying you for.

:::reveal Why does a research file demonstrate professional judgment better than a finished article does? ||| Because a finished article shows only the conclusions. The file shows what you chose to check, how you graded confidence, how you handled a conflict and what you admitted you could not establish, none of which survives into the published version.

## Sources

Society of American Archivists. (n.d.). *So you want to be an archivist*. https://www2.archivists.org/

Poynter Institute. (n.d.). *Fact-checking resources*. https://www.poynter.org/fact-checking/`,
    },
  ],
};
