import type { AuthoredCourse } from "./authored-course";

// RSRCH-06 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// ⚠️ DO NOT DUPLICATE `oral-history` (Storytelling), whose lesson 2 is "Memory as evidence,
// including when it is wrong". That course teaches how to CONDUCT a life-review interview and how
// to treat what a person says. This course is about a different problem: ADJUDICATING between
// sources of different kinds when they conflict, which is a research decision rather than an
// interviewing skill. Testimony appears here only as one of the two things being weighed.
//
// THE ARGUMENT THE COURSE MAKES: the instinct that a document beats a person is wrong often enough
// to be dangerous, and the opposite instinct is wrong too. Both were made by someone, for a purpose,
// under conditions, and the researcher's job is to know which failure mode each is exposed to. That
// is a comparison, not a hierarchy.

export const DOCUMENTS_AGAINST_PEOPLE_COURSE: AuthoredCourse = {
  title: "Documents Against People",
  description:
    "A record says one thing and a witness says another. The instinct is that paper wins, and it is wrong often enough to be dangerous. What a document can and cannot establish, what testimony can and cannot establish, why a confident document is more hazardous than a vague one, and a method for reporting a conflict you cannot resolve.",
  lessons: [
    {
      slug: "dap-every-source-was-made",
      title: "1 · Every source was made by someone, for a purpose",
      section: "Part 1 · Two kinds of evidence",
      body: `A researcher who ranks source types is going to be wrong on a regular schedule. The useful question is never "which kind of source is better." It is:

> **Who made this, why, when, and what were they in a position to know?**

Ask that of a document and of a person and you get comparable answers, which is what lets you weigh them.

## The four questions applied

**Who made it.** A clerk recording a transaction. A survivor recalling a day. An agency compiling a return. A company writing to a regulator.

**Why.** To settle an account, to satisfy a legal requirement, to persuade, to remember, to comply. **Purpose predicts distortion better than format does.** A document written to persuade a regulator and a person speaking to persuade you have the same problem.

**When.** Contemporaneous, or years later. This is the single strongest predictor of accuracy in both kinds of source, and it cuts across the paper-versus-person distinction entirely.

**What were they positioned to know.** Present, or told by someone else. A signed statement from a person who was not there is hearsay written down, and writing it down did not improve it.

## Why the instinct that paper wins is dangerous

Documents feel authoritative because they are fixed, legible and old. None of those is a property of accuracy.

A form completed in five minutes by somebody who did not care is a document. A ledger copied by a tired clerk is a document. A report written to justify a decision already made is a document. Each will outlive every witness and be quoted as evidence.

**Fixity is not accuracy.** A document's great advantage is that it does not change, which means an error in it does not change either.

:::reveal Two sources describe the same event: a form filled in at the time by a clerk who was not present, and a person who was there speaking thirty years later. Name the specific weakness of each. ||| The form is contemporaneous but its maker was not positioned to know, so it records what somebody told them. The testimony comes from a witness who was there but has had thirty years of reconstruction. One fails on position, the other on time.

## Sources

Howell, M., & Prevenier, W. (2001). *From reliable sources: An introduction to historical methods*. Cornell University Press.

National Archives. (n.d.). *Analyzing primary sources*. https://www.archives.gov/education/lessons/worksheets`,
    },
    {
      slug: "dap-what-documents-establish",
      title: "2 · What a document can and cannot establish",
      section: "Part 1 · Two kinds of evidence",
      recallContent: [
        {
          prompt: "What is the useful question to ask of any source, instead of ranking source types?",
          answer: "Who made this, why, when, and what were they in a position to know. The same four questions work on a document and on a person, which is what lets you weigh them against each other.",
        },
      ],
      body: `## What a document establishes well

**That the record exists and says this.** Always. This is the floor, and it is worth more than people think: even a false document is evidence that somebody made that claim, at that time, in that form.

**Its own creation.** A dated, signed form is strong evidence that somebody signed something on that date.

**Routine facts recorded contemporaneously by someone with a duty.** A payroll entry, a shipping manifest, a court filing. These are made repeatedly, by people with no stake in the individual entry, and checked by the process they serve.

**Sequence.** Documents carry dates, and a series of them establishes order better than memory does.

## What a document establishes poorly

**Anything its maker was not positioned to know.** An entry recording a birthplace records what somebody was told.

**Anything the form did not have a box for.** Documents record what their purpose required and are silent on everything else, and that silence is not evidence of absence.

**Motive and meaning.** A record of what was decided is not a record of why.

**Whether it was accurate at the time.** Forms were filled in wrongly, hurriedly and sometimes deliberately.

## The category worth naming

**Documents made to be relied on later are stronger than documents made to describe.** A deed had to survive a challenge, so it names parties and dates precisely. A memo summarising a meeting had to satisfy only its author.

That distinction cuts across formality: an internal ledger can be stronger evidence than an official report, if the ledger had to balance and the report only had to be filed.

:::reveal Why is even a document known to be false still evidence of something? ||| Because it establishes that somebody made that claim, at that date, in that form. That is a fact about the maker and the moment, and it can be the most interesting thing in the file even when the content is worthless.

## Sources

Society of American Archivists. (n.d.). *Evidential value*. Dictionary of Archives Terminology. https://dictionary.archivists.org/

National Archives. (n.d.). *Document analysis*. https://www.archives.gov/education/lessons/worksheets`,
    },
    {
      slug: "dap-what-testimony-establishes",
      title: "3 · What testimony can and cannot establish",
      section: "Part 1 · Two kinds of evidence",
      recallContent: [
        {
          prompt: "Which kind of document tends to be stronger evidence, and why does formality not decide it?",
          answer: "One made to be relied on later, because it had to survive a challenge. An internal ledger that had to balance can beat an official report that only had to be filed.",
        },
      ],
      body: `Testimony is not a weaker document. It is a different instrument, good at things no record captures and bad at things records handle easily.

## What it establishes well

**Experience and meaning.** What it was like, what it was understood to mean, what people believed was happening. No document holds this and no amount of paper reconstructs it.

**The unrecorded.** Practices, arrangements, informal rules and everyday facts that were never written down because everybody knew them.

**Which documents exist and where.** People remember what was kept, who kept it, and where it went, which is frequently the fastest route to a record you could not find.

**Correction of the record.** A witness can tell you a form was routinely completed inaccurately, or that a name in a ledger was not the name the person used.

## What it establishes poorly

**Dates and sequence.** Reliably weak. People are good at what happened and unreliable about when, and about the order of events separated by time.

**Numbers.** Quantities, prices, counts and durations drift substantially.

**Anything they were told rather than saw.** Family accounts merge, compress and acquire detail.

**Anything rehearsed.** A story told many times becomes smoother and more confident, and confidence is not accuracy.

## The asymmetry worth holding

**Testimony is strong on texture and weak on coordinates.** Documents are the reverse.

That is why the two are complementary rather than competing, and why the productive move on a conflict is usually not to pick a winner but to ask which one is speaking to its strength.

⚠️ The catalog's *Oral History* course covers how to conduct and treat an interview properly. This course is only about weighing what it produces against a record.

:::reveal A witness is vivid and detailed about what a workplace was like and vague about which year something happened. Is this a reliability problem? ||| No, it is testimony behaving normally. Memory is strong on experience and texture and weak on dates and sequence. Use the account for what it is good at and establish the chronology from records.

## Sources

Oral History Association. (n.d.). *Principles and best practices*. https://oralhistory.org/

Portelli, A. (1991). *The death of Luigi Trastulli and other stories: Form and meaning in oral history*. State University of New York Press.`,
    },
    {
      slug: "dap-check-two-kinds",
      title: "4 · Knowledge check: two kinds of evidence",
      section: "Part 1 · Two kinds of evidence",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which factor predicts a source's distortion more reliably than whether it is a document or testimony?",
            options: [
              "The purpose it was made for, since a persuasive purpose distorts either form",
              "The formality of its presentation, since official material is prepared more carefully",
              "The length of the account, since brief records omit necessary qualifications",
              "Whether it survives in an original rather than in a later copy or transcription",
            ],
            correctIndex: 0,
            explanation:
              "A report written to justify a decision and a person speaking to persuade you share a failure mode. Purpose cuts across format, which is why the same four questions are asked of both kinds of source.",
            sourceLessonSlug: "dap-every-source-was-made",
          },
          {
            prompt: "A document is known to contain a false statement. What does it still establish?",
            options: [
              "That somebody made that claim, at that date, in that form",
              "That the surrounding entries in the same record are also unreliable",
              "That its maker intended to deceive whoever would later read it",
              "That no accurate record of the same event was created at the time",
            ],
            correctIndex: 0,
            explanation:
              "That is a fact about the maker and the moment, and it is sometimes the most interesting thing in the file. Falsity of content does not remove evidential value about the act of recording.",
            sourceLessonSlug: "dap-what-documents-establish",
          },
          {
            prompt: "A witness is vivid about what a workplace felt like and vague about which year an event happened. How should this be read?",
            options: [
              "As testimony behaving normally, strong on texture and weak on coordinates",
              "As a sign the account has been rehearsed and should be treated with caution",
              "As evidence the witness was not present for the event being described",
              "As a reason to prefer any document that covers the same period",
            ],
            correctIndex: 0,
            explanation:
              "Memory is reliably good at experience and reliably poor at dates and sequence. Use the account for what it is good at and take the chronology from records, rather than discounting the whole thing.",
            sourceLessonSlug: "dap-what-testimony-establishes",
          },
          {
            prompt: "Which is the strongest evidential use of testimony in a documentary research project?",
            options: [
              "Establishing practices and arrangements that were never written down",
              "Establishing the dates on which a sequence of decisions was taken",
              "Establishing the quantities and prices involved in a transaction",
              "Establishing what a person was told about events before their lifetime",
            ],
            correctIndex: 0,
            explanation:
              "Informal rules and everyday practice went unrecorded precisely because everyone knew them, and no document recovers them. Dates, numbers and inherited accounts are where testimony is weakest.",
            sourceLessonSlug: "dap-what-testimony-establishes",
          },
        ],
      },
    },
    {
      slug: "dap-confident-and-wrong",
      title: "5 · The document that is confident and wrong",
      section: "Part 2 · Conflict",
      body: `The most dangerous source in research is not an obviously unreliable one. It is a document that is specific, official-looking, internally consistent and wrong.

## Why confidence is hazardous

A vague source invites checking. A precise one closes the question. Give a researcher a figure to two decimal places, on letterhead, with a date, and the natural response is to write it down.

**Precision is a property of presentation, not of accuracy.** A number can be reported to the decimal and be an estimate somebody made up.

## Where confident errors come from

**Copying.** A figure moves between documents, gaining authority at each step and losing its origin, which is the chain from RSRCH-00 lesson 6.

**Reconstruction after the fact.** Records compiled later from memory or from other records, presented in the same format as contemporaneous ones. An institutional history and a minute book look similar and are not.

**Rounded numbers hardened.** An approximation enters a table, and the table is treated as a measurement.

**Boilerplate.** Forms carrying standard text that was true generally and not in this case.

**Deliberate misstatement.** Rarer than the others and it exists, especially where a record was made to satisfy an inspector, a court or a lender.

## The defences

**Ask what the document was FOR**, which tells you what it had to get right. A tax return had to satisfy a tax authority. Anything on it that the authority did not check is softer than the parts it did.

**Look for the working.** A figure with a derivation is stronger than a figure that appears complete.

**Prefer contemporaneous, routine and internally checked.** A record made repeatedly as part of a process, which had to reconcile with something else, is harder to be casually wrong in.

**Distrust the round number.** Real counts are untidy. A suspiciously clean figure is often an estimate wearing a measurement's clothes.

:::reveal Why does a precise, official-looking figure warrant more scrutiny than a vague statement about the same thing? ||| Because precision closes the question rather than inviting a check, and it is a property of presentation rather than of accuracy. A vague claim gets tested; a confident one gets copied.

## Sources

Howell, M., & Prevenier, W. (2001). *From reliable sources: An introduction to historical methods*. Cornell University Press.

National Archives. (n.d.). *Analyzing primary sources*. https://www.archives.gov/education/lessons/worksheets`,
    },
    {
      slug: "dap-when-they-disagree",
      title: "6 · When they disagree: the method",
      section: "Part 2 · Conflict",
      recallContent: [
        {
          prompt: "Why is a confident, precise document more hazardous than a vague one?",
          answer: "Precision closes the question instead of inviting a check, and it is a property of presentation rather than accuracy. Vague claims get tested; confident ones get copied.",
        },
      ],
      body: `A record says one thing, a person says another. Work the conflict rather than resolving it by preference.

## The steps

**1. Establish that it is a real conflict.** A surprising share are not. Two dates may refer to different events (when something was decided and when it took effect). Two names may be the same person. Two figures may use different definitions. **Check that both sources are talking about the same thing before treating them as opposed.**

**2. Ask the four questions of each.** Who, why, when, positioned to know. Frequently one source is speaking outside its competence and the conflict evaporates.

**3. Look for a third source**, ideally of a different kind, that bears on the point.

**4. Ask what would explain both.** The most productive move in the whole method. A person remembering a different year and a document recording a legal date may both be right about different moments in the same process. An error that explains both accounts is more likely than either witness being simply wrong.

**5. If it does not resolve, report the conflict.** See below.

## Reporting a conflict you cannot resolve

Do not pick. Do not average. Do not quietly use one and omit the other.

Write it as a finding:

> The company's annual return gives the closure as March. Two former employees independently place it in the autumn. The return was filed to a statutory deadline and may record a formal date; the recollections are consistent with each other and are thirty years after. Unresolved. The payroll records, if they survive, would settle it.

That paragraph is more useful than either answer would have been, and it is honest about the state of the evidence. **A conflict reported well is a finding. A conflict resolved by preference is a fabrication with a citation.**

:::reveal What is the most productive question to ask when a document and a witness disagree, and why? ||| What would explain both accounts. Frequently both are right about different things: a formal date against a practical one, or two stages of the same process. That explanation is more likely than either source being simply wrong, and it usually points at a third record that would settle it.

## Sources

Howell, M., & Prevenier, W. (2001). *From reliable sources: An introduction to historical methods*. Cornell University Press.

Oral History Association. (n.d.). *Principles and best practices*. https://oralhistory.org/`,
    },
    {
      slug: "dap-corroboration",
      title: "7 · Corroboration, and what it is not",
      section: "Part 2 · Conflict",
      recallContent: [
        {
          prompt: "How should an unresolved conflict between a document and a witness be recorded?",
          answer: "As a finding: both accounts, what each source is, why each might be right, that it is unresolved, and what would settle it. Not by picking, averaging, or quietly omitting one.",
        },
      ],
      body: `Two sources agreeing is worth something only when they could have disagreed. That condition is missing more often than researchers notice.

## What corroboration is not

**Not repetition.** Two newspapers running the same wire story is one source. Two books citing the same archive is one source.

**Not agreement between sources with a shared origin.** A family's four accounts of an event are frequently one account, told at a table for decades, and now held by four people.

**Not a document agreeing with a witness who read the document.** This is a common and invisible trap: a person who has looked at the record before speaking to you is partly reporting the record, and their agreement adds nothing.

**Ask your interviewee whether they have seen the paperwork.** If they have, note it, because it changes what their agreement is worth.

## What corroboration is

**Independent sources whose errors would not correlate.** A payroll ledger and a union membership list. A photograph and a witness who did not know it existed. A court record and a newspaper report by a reporter who was present rather than filing from the docket.

The test to apply every time:

> **If this claim were false, would this second source still say it?**

If yes, you have a genuine second source. If no, you have an echo.

## Weak corroboration is still worth recording

Note it as what it is. "Consistent with the family account, which the interviewee may have drawn on" is honest and useful. Presenting it as independent confirmation is not.

:::reveal An interviewee's account matches a document precisely. What single question should you ask before treating that as corroboration? ||| Whether they have seen the document. If they have, their account is partly a report of it, so the agreement is an echo rather than an independent confirmation, and that should be recorded.

## Sources

American Press Institute. (n.d.). *Verification and independence*. https://www.americanpressinstitute.org/

Oral History Association. (n.d.). *Principles and best practices*. https://oralhistory.org/`,
    },
    {
      slug: "dap-check-conflict",
      title: "8 · Knowledge check: conflict and corroboration",
      section: "Part 2 · Conflict",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A witness and a document disagree about a date. What should be established first?",
            options: [
              "Whether both sources are referring to the same event at all",
              "Which of the two sources was created closer in time to the event",
              "Whether the witness has any interest in the date being one or the other",
              "Whether the document has survived in an original or only as a copy",
            ],
            correctIndex: 0,
            explanation:
              "A surprising share of apparent conflicts dissolve here: a decision date against an effective date, or two names for one person. The other checks all matter, and they matter after you know the sources are actually opposed.",
            sourceLessonSlug: "dap-when-they-disagree",
          },
          {
            prompt: "An interviewee's account matches an archival document in precise detail. What must be checked before calling this corroboration?",
            options: [
              "Whether the interviewee had seen the document before speaking to you",
              "Whether the interviewee was present at the events the document records",
              "Whether the document has been transcribed accurately in the finding aid",
              "Whether the interviewee has given a consistent account on other occasions",
            ],
            correctIndex: 0,
            explanation:
              "If they have seen it, their account is partly a report of it and the agreement is an echo. The test is whether the second source would still say this if the claim were false.",
            sourceLessonSlug: "dap-corroboration",
          },
          {
            prompt: "A conflict cannot be resolved with the available evidence. What is the professional response?",
            options: [
              "Report both accounts, what each source is, and what would settle it",
              "Use the document, since it was created closer to the events in question",
              "Use whichever account the balance of other evidence tends to support",
              "Omit the point entirely, since an unresolved claim cannot be relied upon",
            ],
            correctIndex: 0,
            explanation:
              "A conflict reported well is a finding. Resolving it by preference produces a fabrication with a citation attached, and omitting it hides evidence the next researcher needs.",
            sourceLessonSlug: "dap-when-they-disagree",
          },
          {
            prompt: "Which pair constitutes genuine corroboration?",
            options: [
              "A payroll ledger and a union membership list compiled by different bodies",
              "Two newspapers on the same day carrying the same wire service report",
              "Four members of one family giving the same account of a family event",
              "A published history and the archival guide whose summary it paraphrases",
            ],
            correctIndex: 0,
            explanation:
              "Their errors would not correlate, which is the whole test. The other three are single sources appearing more than once: one wire story, one account told at a table for decades, and one summary reproduced.",
            sourceLessonSlug: "dap-corroboration",
          },
        ],
      },
    },
    {
      slug: "dap-capstone-adjudicate",
      title: "9 · Capstone: adjudicate a real conflict",
      section: "Part 2 · Conflict",
      lessonType: "assignment",
      body: `Find a genuine conflict between two sources about a matter of fact, and work it. Roughly 600 to 900 words.

The conflict must be real and you must link both sources. Good hunting grounds: a family account against a public record, two published histories disagreeing, a news report against an official document, an institution's own account against its records.

## What to submit

**1. The conflict**, stated plainly. What does each source say, and about exactly what?

**2. The four questions, on each source.** Who made it, why, when, and what were they positioned to know.

**3. Is it a real conflict?** Test it. Are they describing the same event, the same definition, the same person? Say what you checked. **If it dissolves here, that is a full-credit answer** and you should say how you found it.

**4. What would explain both?** Even if you go on to prefer one, put the reconciling explanation on the page and say why you did or did not accept it.

**5. Corroboration, tested.** Any third source, and whether it is genuinely independent or an echo. Apply the test: if the claim were false, would this source still say it?

**6. Your finding.** One of: resolved, with reasoning; unresolved, reported the way lesson 6 describes, with what would settle it.

## How this is assessed

Not on resolving it. **An unresolved conflict reported precisely scores higher than a resolution reached by preference**, and section 6 is where that shows.

You are assessed on whether section 3 was genuinely attempted rather than assumed, whether section 4 shows you looked for the explanation that saves both accounts, whether section 5 applied the echo test rather than counting sources, and whether your language distinguishes what you established from what you think.

**The rule of the track applies here more than anywhere: do not fill the gap with a plausible story.** A conflict is an invitation to invent, and inventing is exactly what a research file must not do.

## Sources

Howell, M., & Prevenier, W. (2001). *From reliable sources: An introduction to historical methods*. Cornell University Press.

American Press Institute. (n.d.). *Verification and independence*. https://www.americanpressinstitute.org/`,
    },
  ],
};
