import type { AuthoredCourse } from "./authored-course";

// RSRCH-07 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// RELATIONSHIP TO RSRCH-00 LESSON 5 ("the file is the product"): that lesson makes the ARGUMENT.
// This course is the OPERATIONS. Do not re-argue it here. Teach the mechanics: capture discipline,
// citations you can return to, the memo, versioning, and the handover itself.
//
// THE TEST THE WHOLE COURSE SERVES, stated in lesson 1 and returned to at the end: could a competent
// stranger pick this up and continue without calling you? Everything in the course is judged against
// that and nothing else.

export const THE_RESEARCH_FILE_COURSE: AuthoredCourse = {
  title: "The Research File",
  description:
    "The operations of handing work over: capturing a citation at the moment you find it, notes that survive a year, confidence grades applied consistently, the research memo that says what it all means, and a handover somebody can actually pick up. The course that turns everything you found into something usable by a stranger.",
  lessons: [
    {
      slug: "trf-the-handoff-test",
      title: "1 · One test, applied to everything",
      section: "Part 1 · Capture",
      body: `Everything in this course is judged against a single question:

> **Could a competent stranger pick this up, understand what is established and what is not, and continue the work without calling you?**

Not "is it tidy." Not "is it complete." That one test, and it decides every convention below.

## Why a stranger, and not you

Because you will be a stranger to it. The person picking up a file six months later is very often the person who wrote it, and by then the context that made your notes intelligible is gone.

Writing for a stranger is therefore not altruism. It is the only way to write for your future self, who is a stranger with your handwriting.

## Where files fail

They rarely fail by containing too little. They fail in four specific ways:

**Untraceable findings.** A fact with no route back to where it came from.

**Undifferentiated confidence.** Everything stated flatly, so a reader cannot tell a document you read from a guess you made on a Thursday.

**Silent gaps.** No record of what was looked for and not found, so the next person repeats it.

**Private shorthand.** Abbreviations, personal filing logic, and references to conversations nobody else had.

Each of the remaining lessons is aimed at one of those.

:::reveal Why is writing a file for a stranger the only reliable way to write it for yourself? ||| Because in six months you will be a stranger to it. The context that made your shorthand intelligible is gone, and the only notes that survive that gap are ones written for somebody who never had the context at all.

## Sources

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards

Modern Language Association. (n.d.). *Documenting sources*. https://style.mla.org/`,
    },
    {
      slug: "trf-capture-at-the-moment",
      title: "2 · Capture at the moment, or lose it",
      section: "Part 1 · Capture",
      recallContent: [
        {
          prompt: "State the single test every convention in this course serves.",
          answer: "Could a competent stranger pick this file up, see what is established and what is not, and continue without calling you.",
        },
      ],
      body: `The single highest-value habit in research is unglamorous: **record where something came from at the moment you find it.**

Reconstructing a citation later takes an order of magnitude longer than capturing it took, and a proportion of the time it cannot be done at all. You remember the fact and not the folder.

## What to capture, every time

- The **source**, precisely enough to return to it: collection, box, folder, item, or publication with edition and page, or a URL with the date you retrieved it.
- **What it actually says**, quoted where the wording matters.
- **What form you saw it in**: original, microfilm, scan, transcription, or a quotation in somebody else's work.
- **The date you looked.**

## Quote before you summarise

Capture the wording first, then your gloss. A summary made at speed hardens into a fact, and by the time you need to check whether the source really said "suggests" or "shows," you are back in the archive.

**Keep your words and the source's words visibly separate.** A convention as simple as quotation marks around anything transcribed and square brackets around anything of yours will save an entire class of error, because six months later you will not otherwise be able to tell which is which.

## Photograph deliberately

If you are photographing documents, photograph the finding aid page, the box label and the folder label too. A thousand images of pages with no context is a common and painful outcome of a productive archive day.

**Name files at capture.** Renaming four hundred images later does not happen.

:::reveal Name the convention that prevents an entire class of error in notes, and say what error it prevents. ||| Marking transcribed wording and your own wording differently, for example quotation marks for the source and square brackets for you. It prevents your paraphrase later being read, by you or anyone else, as the source's own words.

## Sources

National Archives. (n.d.). *Plan your research visit*. https://www.archives.gov/research/

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives`,
    },
    {
      slug: "trf-citations-you-can-return-to",
      title: "3 · A citation is a route back, not a formality",
      section: "Part 1 · Capture",
      recallContent: [
        {
          prompt: "Why capture a citation at the moment of finding rather than later?",
          answer: "Reconstruction takes far longer than capture and sometimes fails entirely. You remember the fact and not the folder.",
        },
      ],
      body: `A citation in a research file has one job, and it is not conforming to a style guide. It is **getting somebody back to the thing.**

That standard is higher than most published citation styles require, because a published citation only has to identify a source that a reader could find in a library. A file citation has to work for material that is unique and awkwardly located.

## What a working file citation carries

**Archival:** repository, collection name and number, series, box, folder, item, and the date you consulted it. A collection name alone is not a citation; it is a gesture at one.

**Published:** author, title, edition, publisher, year, page. Edition matters, because pagination changes.

**Digital:** the URL, the date retrieved, and a stable identifier if one exists. A search-result URL is not a citation. **Where the resource has a permanent link, use it**, because ordinary URLs rot.

**Interview:** who, when, where, in what form the record exists, and under what consent conditions.

## The two things people leave out

**The date retrieved**, on anything digital. Web resources change and a claim about what a page said needs a date to mean anything.

**The form seen**, from RSRCH-00 lesson 6. Original, microfilm, digital scan, transcription, or a quotation in another work. Each additional step is another chance for an error, and the file should say which step you were at.

## Pick a style and hold it

Which style matters far less than consistency. A file that uses one shape throughout can be converted mechanically. A file with four shapes has to be rebuilt by hand.

If the work will be published, ask the destination's style early, because retrofitting citations across a large file is one of the least rewarding tasks in the trade.

:::reveal Why does a research file citation have to be more complete than a published one? ||| A published citation identifies a source a reader can find in a library. A file citation has to return somebody to a unique item in a specific box in a specific repository, which no bibliographic shorthand alone will do.

## Sources

Chicago Manual of Style. (n.d.). *Citing manuscript collections*. https://www.chicagomanualofstyle.org/

Society of American Archivists. (n.d.). *Citing archival materials*. https://www2.archivists.org/`,
    },
    {
      slug: "trf-check-capture",
      title: "4 · Knowledge check: capture",
      section: "Part 1 · Capture",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which failure most often makes an otherwise thorough research file unusable?",
            options: [
              "Findings recorded with no route back to where they came from",
              "Findings recorded in more detail than the commissioning brief required",
              "Findings organised chronologically rather than by the questions asked",
              "Findings stored in a format the recipient's software cannot open directly",
            ],
            correctIndex: 0,
            explanation:
              "A fact nobody can trace cannot be checked, corrected or built on. The others are inconveniences; an untraceable finding is a finding that cannot be relied on at all.",
            sourceLessonSlug: "trf-the-handoff-test",
          },
          {
            prompt: "What convention prevents a researcher's paraphrase later being mistaken for the source's own words?",
            options: [
              "Marking transcription and your own wording differently, for example quotes and brackets",
              "Recording the page number beside every summary written during the session",
              "Writing all notes in the past tense so summaries read as reported speech",
              "Keeping a separate document for quotations and another for interpretation",
            ],
            correctIndex: 0,
            explanation:
              "Six months later you will not otherwise be able to tell which is which, and neither will anybody else. Separate documents also work but tend to break down under time pressure, which is exactly when notes are taken.",
            sourceLessonSlug: "trf-capture-at-the-moment",
          },
          {
            prompt: "Why must a file citation be more complete than a published one?",
            options: [
              "It has to return someone to a unique item in a specific box in a specific repository",
              "It has to satisfy several style guides at once, since the destination is unknown",
              "It has to record the researcher's own reading of the source alongside its location",
              "It has to demonstrate that the material was consulted rather than obtained secondhand",
            ],
            correctIndex: 0,
            explanation:
              "A published citation identifies something a reader can find in a library. Archival material is unique and awkwardly located, so the file citation carries repository, collection, series, box, folder, item and date consulted.",
            sourceLessonSlug: "trf-citations-you-can-return-to",
          },
          {
            prompt: "Beyond the location, what does a file citation need to record about how a source was consulted?",
            options: [
              "The form seen: original, microfilm, scan, transcription, or a quotation in another work",
              "The time spent examining it, so the effort behind the finding is visible",
              "The reason it was consulted, so the finding can be matched to a brief question",
              "The condition of the item, so future researchers know whether it is legible",
            ],
            correctIndex: 0,
            explanation:
              "Each step away from the original is another chance for an error to have entered. A reader needs to know whether you saw the document or somebody's transcription of it.",
            sourceLessonSlug: "trf-citations-you-can-return-to",
          },
        ],
      },
    },
    {
      slug: "trf-grading-in-practice",
      title: "5 · Grading, applied consistently",
      section: "Part 2 · Assembly",
      body: `RSRCH-00 established that a file must distinguish fact, inference and speculation. This is how to do it so it survives contact with a real project.

## Keep the scale short

Three or four levels, defined once at the top of the file. A scale nobody can remember gets applied inconsistently, and an inconsistently applied scale is worse than none, because it looks like information.

A workable set:

- **Established.** A source that would know says it, and I saw the source.
- **Reported.** A source says it, and that source is not authoritative or could not be checked further.
- **Inferred.** Not stated anywhere. I concluded it from the evidence, and the reasoning is given.
- **Open.** Not established, and here is what would settle it.

## Grade the claim, not the source

A single document can support one claim at Established and another at Reported. A death certificate establishes the death and reports the parents' names.

**Grading at document level is the commonest way a good scale gets misapplied**, and it quietly promotes weak claims by association with strong ones.

## Write the reasoning for every inference

An inference without its reasoning is indistinguishable from a fact to a later reader, including you. One sentence is enough:

> Inferred: the family left before 1912. The directory lists them at the address in 1911 and not in 1912, and no later listing appears in that town.

That is a claim a stranger can evaluate and disagree with, which is exactly what an inference should be.

## Do not upgrade under pressure

Requesters want certainty and will ask whether you are sure. **The answer is the grade**, and it does not move because a deadline is close or because the answer would be convenient.

A researcher whose Established means Established is worth having. One whose grades soften under pressure has a scale that carries no information.

:::reveal Why should a confidence grade attach to a claim rather than to a document? ||| Because one document supports different claims at different strengths. A death certificate establishes the fact of the death and only reports the parents' names, which came from an informant. Grading the document promotes the weaker claim by association.

## Sources

Society of American Archivists. (n.d.). *Evidential value*. Dictionary of Archives Terminology. https://dictionary.archivists.org/

International Fact-Checking Network. (n.d.). *Code of principles*. https://www.poynter.org/ifcn/`,
    },
    {
      slug: "trf-the-research-memo",
      title: "6 · The research memo",
      section: "Part 2 · Assembly",
      recallContent: [
        {
          prompt: "Should a confidence grade attach to a document or to a claim, and why?",
          answer: "To the claim. One document supports different claims at different strengths, and grading the document promotes weak claims by association with strong ones.",
        },
      ],
      body: `A file of findings is not a deliverable on its own. Somebody has to read it, and a busy person handed forty entries and no orientation will read the first four.

The **research memo** is the two to four pages at the front that make the rest usable.

## What it contains

**The brief, as agreed**, so a reader knows what was asked and can see what was not.

**The headline findings**, in the order that matters to the decision rather than the order you found them.

**What is solid and what is not**, in a sentence. The reader's first question is how much to trust this, and answering it up front buys you the credibility to be believed on the details.

**What could not be established**, and where you looked. Prominently, not in an appendix.

**What surprised you.** Frequently the most valuable paragraph in the document. A researcher who spent forty hours on a subject has an informed sense of where the interesting problems are, and nobody else will ever have it.

**What you would do next**, with an estimate of cost and time.

## What it is not

**Not a narrative of your process.** Nobody wants the chronology of your week. Organise by findings.

**Not an argument.** You are reporting evidence, not making the case. If the evidence points somewhere, say what it supports and how strongly, and leave the conclusion to the person whose name goes on the work.

**Not hedged into uselessness.** "Further research would be required" applied to everything tells a reader nothing. Grade individually and say plainly where the evidence is good.

:::reveal Which section of a research memo is most often the highest-value one, and why can nobody else write it? ||| What surprised you. After sustained work on a subject, the researcher is the only person with an informed sense of where the unexpected problems and opportunities are, and that judgment does not exist anywhere in the findings themselves.

## Sources

American Library Association. (n.d.). *Guidelines for behavioral performance of reference and information service providers*. https://www.ala.org/rusa/

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives`,
    },
    {
      slug: "trf-versions-and-handover",
      title: "7 · Versions, and the handover itself",
      section: "Part 2 · Assembly",
      recallContent: [
        {
          prompt: "Name two things a research memo should NOT be.",
          answer: "A narrative of your process, and an argument. It reports evidence organised by findings and leaves the conclusion to whoever's name goes on the work.",
        },
      ],
      body: `## Versions

Research files change: findings are added, a claim is downgraded, an error is corrected. Without version discipline, two people end up working from different files and neither knows.

Three rules that cover almost everything:

**Date every version**, in the file itself and not only in a filename.

**Never edit a finding in place.** Add the correction, mark the original superseded, and say why. The history of a claim is evidence about the claim, and a file that silently changes its mind cannot be audited.

**Keep the raw material separate from the working file.** Transcriptions, photographs and downloads go in one place and are never edited; interpretation lives elsewhere. This is the same principle as the citizen-science rule about never overwriting raw data, and it is the same reason.

## The handover

**Walk somebody through it once, if you can.** Twenty minutes of orientation saves hours later and surfaces the things you assumed were obvious.

**Include an index or a map** of the file if it runs to any size.

**Hand over the dead ends explicitly.** They are the part most likely to be repeated, and the least likely to be read voluntarily.

**Say what you would check first if something went wrong.** You know which findings are load-bearing and which are shakiest. Write that down, because it is the single most useful thing you can tell somebody who inherits work, and it costs a paragraph.

## The file outlives the project

Projects are shelved and revived. Stories get followed up. Lawyers ask questions long after everyone has moved on.

A file built to the stranger test is the one that still works when the stranger is you, in three years, having forgotten everything.

:::reveal What single paragraph is the most useful thing to give somebody inheriting a research file, and why? ||| What you would check first if something went wrong. Only the original researcher knows which findings are load-bearing and which are shakiest, and that judgment is invisible in the findings themselves.

## Sources

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards

National Archives. (n.d.). *Records management: Documentation*. https://www.archives.gov/records-mgmt`,
    },
    {
      slug: "trf-check-assembly",
      title: "8 · Knowledge check: assembly and handover",
      section: "Part 2 · Assembly",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A death certificate is used to support two claims: that the person died on a date, and their parents' names. How should these be graded?",
            options: [
              "Separately, since the record establishes the death and only reports the parents",
              "Identically, since both claims come from the same official and contemporaneous record",
              "Both as reported, since a certificate is a transcription of an informant's statement",
              "Both as established, since the record was created under a legal duty to be accurate",
            ],
            correctIndex: 0,
            explanation:
              "Grades attach to claims rather than to documents. The fact of death was recorded close to the event by someone with a duty; the parents' names came from whoever reported it and may be a guess.",
            sourceLessonSlug: "trf-grading-in-practice",
          },
          {
            prompt: "What should happen when a finding in a file turns out to be wrong?",
            options: [
              "Add the correction and mark the original superseded, saying why",
              "Edit the entry so the file presents a single accurate account throughout",
              "Remove the entry entirely so nobody relies on the discredited finding",
              "Note the correction in the memo and leave the finding itself unchanged",
            ],
            correctIndex: 0,
            explanation:
              "The history of a claim is evidence about the claim, and anything built on the original needs to be traceable. A file that silently changes its mind cannot be audited by anyone, including its author.",
            sourceLessonSlug: "trf-versions-and-handover",
          },
          {
            prompt: "Which part of a research memo is most valuable and cannot be supplied by anybody else?",
            options: [
              "What surprised the researcher during the work",
              "A summary of the headline findings in order of importance",
              "A restatement of the brief as it was originally agreed",
              "A list of every source consulted during the engagement",
            ],
            correctIndex: 0,
            explanation:
              "After sustained work, the researcher alone has an informed sense of where the unexpected problems and opportunities sit. The other sections are necessary and any competent person could assemble them from the file.",
            sourceLessonSlug: "trf-the-research-memo",
          },
          {
            prompt: "Why should raw transcriptions and downloads be kept separate from the working file?",
            options: [
              "So the record of what was observed is never altered by later interpretation",
              "So the file can be delivered in a smaller format when the project concludes",
              "So material under restrictive licences can be removed before handover",
              "So the working file can be reorganised without renumbering the sources",
            ],
            correctIndex: 0,
            explanation:
              "It is the same principle as never overwriting raw data: what you observed and what you currently think it means are different objects, and collapsing them destroys the more valuable one.",
            sourceLessonSlug: "trf-versions-and-handover",
          },
        ],
      },
    },
    {
      slug: "trf-capstone-convert-notes",
      title: "9 · Capstone: convert notes into a file",
      section: "Part 2 · Assembly",
      lessonType: "assignment",
      body: `Take research notes you already have, from any project, in whatever state they are in, and convert them into a file that passes the stranger test.

If you have nothing, spend two hours researching a small question and take notes as you normally would. **Do not take notes well on purpose.** The exercise is converting real notes, including bad ones.

## What to submit

**1. A sample of the notes as they were**, a page or so, unedited. This is the before.

**2. The converted file**, containing:
   - the question, as you would state it to a stranger
   - findings, each with its source and its grade
   - your grading scale, defined at the top
   - at least one inference with its reasoning written out
   - what could not be established, and where you looked
   - open questions with an estimate of what answering them would cost

**3. A short research memo**, one page: headline findings, how much to trust them, what could not be established, what surprised you, and what you would do next.

**4. A conversion note.** What was missing from the original notes that you had to reconstruct, and what you could not reconstruct at all. **This section is the point of the exercise.**

## How this is assessed

Not on the quality of the research. On whether the output passes the stranger test.

The heaviest weight is on section 4. Almost everyone discovers they cannot reconstruct at least one citation, and noticing that honestly is worth more than a clean file, because it is the experience that changes how you take notes from then on.

You are also assessed on whether the grading scale is applied to claims rather than to documents, and on whether the inference in section 2 is written so a stranger could disagree with it.

**Do not improve the original notes before submitting them.** The gap between the two documents is the learning, and hiding it defeats the exercise.

## Sources

Society of American Archivists. (n.d.). *Using archives: A guide to effective research*. https://www2.archivists.org/usingarchives

Modern Language Association. (n.d.). *Documenting sources*. https://style.mla.org/`,
    },
  ],
};
