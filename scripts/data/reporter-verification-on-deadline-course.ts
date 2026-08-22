import type { AuthoredCourse } from "./authored-course";

// REPORT-04 · Verification on Deadline (plans/68).
//
// The gap: how-to-research teaches sourcing and corroboration as a research discipline, with time.
// fact-checking-as-a-discipline teaches checking a finished piece. Neither teaches the actual
// question a beat reporter faces at 3pm, which is what can honestly be confirmed in an hour and
// what to do when the answer is not enough.
//
// The through-line, and the reason plans/68 wanted this course: THE DECISION NOT TO PUBLISH IS A
// PROFESSIONAL ACT, not a failure of nerve. Every lesson here is arranged so that not publishing,
// publishing less, or publishing with the uncertainty stated are all treated as normal outputs of a
// working method rather than as losses.
//
// TOOLS AGE, METHODS DO NOT. Named tools appear only as examples with an explicit note that the
// specific service may change, because a course that pins its teaching to a product becomes wrong
// silently. The methods (find the original, establish provenance, corroborate independently, look
// for disconfirming evidence, publish the confidence level you actually have) do not date.
export const REPORTER_VERIFICATION_COURSE: AuthoredCourse = {
  title: "Reporter 04: Verification on Deadline",
  description:
    "What an hour actually buys. Breaking a claim into checkable pieces, finding the original rather than the copy, establishing source, date, location, and motivation, corroborating with something genuinely independent, and looking for the evidence that would prove you wrong. Ends where the track's whole argument lands: the decision not to publish, treated as a professional act rather than a failure.",
  lessons: [
    // ── Section 1 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "the-clock",
      title: "1 · The clock, and what an hour buys",
      section: "Section 1 · What an hour buys",
      body: `Verification with unlimited time is a research problem and this catalog already teaches it. Verification with fifty minutes left is a different discipline, because the binding constraint is not knowledge, it is sequencing.

**Start by pricing the checks.** Some are minutes and some are days, and knowing which is which before you start is most of the skill. Minutes: reverse image search, checking whether a document is already published, reading a court docket, calling a named person whose number you have, checking a body's own agenda or minutes. Hours: a records request that an agency answers quickly, a data set you have to clean, three sources who are not all reachable at once. Days or weeks: a formal records response, an expert analysis, a document that only exists in one office.

**Then sequence by what would kill the story.** Run the check that could stop everything first, not the one that is easiest. If the claim depends on a document existing, establish that the document exists before spending forty minutes on anything else. Reporters routinely spend an hour polishing a story that a two-minute check would have killed, which is not a time-management failure so much as an ordering one.

**Know the difference between confirming and failing to disconfirm.** Nobody denying something is not the same as somebody confirming it. An agency that does not answer the phone has told you nothing. Recording which of the two you have, for each element of a story, is what prevents an hour of work turning into a false sense of solidity.

**Decide the publication threshold in advance, and write it down.** What has to be true before this runs, in one sentence. Under deadline pressure the threshold quietly moves, and the version of you that set it at 2pm is more reliable than the version negotiating with an editor at 6.

**Assume the first version of anything is wrong in some detail.** Early accounts of a fast-moving situation are reliably wrong about numbers, names, and sequence, and reliably right about the fact that something happened. Publishing the second category and holding the first is a technique, not a compromise.

**And know what you are not obliged to do.** You are not obliged to match a competitor's claim, and being second with something true is a much better professional position than being first with something you cannot support. That is easy to say and hard to do at 5:45, which is why the threshold is written down at 2.

:::reveal What is the binding constraint in deadline verification, if not knowledge? ||| Sequencing. The skill is pricing each check in minutes, hours, or days, and then running the one that could kill the story first.

:::reveal What is the difference between confirming and failing to disconfirm? ||| Nobody denying something is not somebody confirming it. An agency that did not answer has told you nothing, and recording which you have for each element prevents a false sense of solidity.

:::reveal Which parts of an early account are reliably wrong, and which are reliably right? ||| Numbers, names, and sequence are reliably wrong in a fast-moving situation. That something happened is reliably right. Publishing the second and holding the first is a technique.

## Vocabulary
- **Check pricing**: sorting verification steps into minutes, hours, and days before starting, which is most of deadline skill.
- **Kill check**: the check most likely to stop the story, run first regardless of how easy the others are.
- **Failing to disconfirm**: the absence of a denial, which is not evidence and must be recorded as distinct from confirmation.
- **Publication threshold**: the written sentence stating what must be true before a story runs, set before deadline pressure arrives.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "claim-decomposition",
      title: "2 · Decomposing a claim into checkable pieces",
      section: "Section 1 · What an hour buys",
      body: `You cannot verify a story. You can only verify the individual assertions inside it, which is why the first move on any tip is to take it apart.

**Write the claim as separate lines.** A tip that a hospital is closing its maternity unit contains at least five assertions: that a decision exists, that it is final rather than proposed, that it concerns that unit, that it takes effect at a stated time, and that a stated number of people are affected. Each is separately true or false, each has a different source, and a story can be right about four and wrong about the fifth in a way that makes it a correction.

**Mark each line with what would settle it.** A board vote in the minutes. A notice to staff. A regulatory filing. A named person who was in the room. Writing the settling artifact beside each line converts a vague sense of unease into a list of phone calls.

**Sort the lines by consequence.** Which one, if wrong, would most damage a person or an institution? That is the one to check hardest, and it is frequently not the one in the headline. A story that gets the closure right and the affected-patient number wrong has harmed the people whose number it inflated.

**Separate the event from the explanation.** That something happened is usually checkable quickly. Why it happened almost never is. The most common deadline failure is a well-verified event fused to an unverified motive, and the fix is to publish the event and attribute the explanation to whoever offered it.

**Watch for the load-bearing adjective.** Words like unprecedented, secret, illegal, and emergency are separate claims that quietly ride along inside a sentence. Each one needs its own check, and an hour spent finding out that a thing which is merely unusual is being described as unprecedented is an hour well spent.

**Keep the decomposition in the file.** It is the document you hand an editor when they ask what you actually have, and it is the document that tells you, at 5:50, exactly which two lines are still unsupported so that the piece can be written around them.

:::reveal Why is the first move on a tip to take it apart? ||| Because you cannot verify a story, only the individual assertions inside it, and a piece can be right about four of them and wrong about the fifth.

:::reveal Which line in a decomposed claim gets checked hardest? ||| The one that would most damage a person or an institution if wrong, which is frequently not the one in the headline.

:::reveal What is the most common deadline failure involving explanation? ||| A well-verified event fused to an unverified motive. The fix is to publish the event and attribute the explanation to whoever offered it.

## Vocabulary
- **Decomposition**: rewriting a tip as separate assertions, each separately checkable and separately sourced.
- **Settling artifact**: the specific document, record, or person that would resolve one assertion.
- **Load-bearing adjective**: a word like unprecedented or secret that carries its own claim inside another sentence.
- **Event versus explanation**: the distinction between what happened, usually checkable fast, and why, usually not.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "confidence-levels",
      title: "3 · Confidence levels, and saying what you actually know",
      section: "Section 1 · What an hour buys",
      body: `Verification is not a switch. Treating it as one produces two failures at once: publishing thin material as though it were solid, and holding solid material because one line is unresolved.

**Four levels, used explicitly in your own notes.** Confirmed: you have seen the artifact yourself, or two genuinely independent sources say the same thing. Corroborated: one solid source plus consistent circumstantial support. Reported: a single source, named or describable, with nothing against it. Unverified: you have been told, and nothing else.

**The rule that makes the levels useful.** Each level has a permitted form of words in print. Confirmed material can be stated. Corroborated material can be stated with its support named. Reported material is attributed in the sentence that carries it. Unverified material does not appear. Deciding the wording from the level, rather than the level from the wording you want, is the whole discipline.

**Label every line in the draft.** Some reporters annotate a working draft with the level beside each sentence and strip the labels before filing. It looks fussy and it takes four minutes, and it makes an editor's question about sourcing answerable instantly rather than from memory.

**Attribution is not a verification substitute, and this is worth being blunt about.** Writing that a source claims something does not make publishing it responsible. It shifts who said it, not whether it is true, and a reader takes the appearance of a claim in a news story as evidence somebody checked it. Attribution is how you handle a claim you have decided is worth publishing, not a way to publish one you have not verified.

**The exception that proves it.** Sometimes the fact that a claim is being made IS the news: an official has alleged something, a lawsuit asserts something, a document says something. Then the checkable claim is that the allegation was made, and it must be visibly framed that way, with the underlying assertion clearly unresolved. The failure mode is a story that reports the making of an allegation while writing every subsequent paragraph as though the allegation were established.

**Confidence can go down as well as up.** New information sometimes weakens what you thought you had. A reporter who only ever revises upward is not verifying, they are accumulating reasons to publish.

**A worked example already in this catalog.** *The Negro Leagues: Who Owned the Game* has a lesson built entirely around figures it declined to print, because the sources disagree and the primary record is incomplete. Reading a course state plainly which numbers it refused to carry, and why, is the clearest available demonstration that a confidence level is a publishing decision rather than a private note.

:::reveal What are the four confidence levels, and what does each permit in print? ||| Confirmed, which can be stated. Corroborated, which can be stated with its support named. Reported, which is attributed in the sentence. Unverified, which does not appear.

:::reveal Why is attributing a claim not a substitute for verifying it? ||| Attribution shifts who said it, not whether it is true, and a reader treats a claim's appearance in a news story as evidence someone checked it.

:::reveal When is a claim's existence itself the checkable news, and what is the failure mode? ||| When an official alleged it, a suit asserts it, or a document says it. The failure is reporting that an allegation was made and then writing every following paragraph as though it were established.

## Vocabulary
- **Confirmed**: seen yourself, or attested by two genuinely independent sources.
- **Corroborated**: one solid source with consistent circumstantial support, statable with that support named.
- **Reported**: a single source with nothing against it, attributed in the sentence that carries it.
- **Level-first wording**: choosing the sentence from the confidence level rather than the level from the desired sentence.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-what-an-hour-buys",
      title: "4 · Knowledge check: what an hour buys",
      section: "Section 1 · What an hour buys",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the binding constraint in deadline verification?",
            options: [
              "Sequencing",
              "Access to sources who are willing to speak on the record that afternoon",
              "The reporter's familiarity with the subject and its technical vocabulary",
              "Whether the newsroom has a fact-checking desk available to assist",
            ],
            correctIndex: 0,
            explanation:
              "Not knowledge. Pricing each check in minutes, hours, or days and then ordering them correctly is most of the skill.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which of these is priced in minutes?",
            options: [
              "A reverse image search",
              "A formal records response from a state agency",
              "An expert analysis of a technical document",
              "A data set that has to be cleaned before it can be read",
            ],
            correctIndex: 0,
            explanation:
              "With checking whether a document is already published, reading a docket, calling a named person, and checking a body's own agenda.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which check should be run first?",
            options: [
              "The one that could kill the story",
              "The one that is quickest to complete",
              "The one the editor asked about first",
              "The one that supports the strongest paragraph",
            ],
            correctIndex: 0,
            explanation:
              "Reporters routinely spend an hour polishing a story a two-minute check would have killed, which is an ordering failure rather than a time-management one.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What has an agency that does not answer the phone told you?",
            options: [
              "Nothing",
              "That the claim is likely true, since a denial would have been quick",
              "That the claim is disputed, which is itself reportable as a dispute",
              "That the story may run with the agency described as declining to comment",
            ],
            correctIndex: 0,
            explanation:
              "Failing to disconfirm is not confirming, and recording which of the two you have for each element prevents an hour of work turning into false solidity.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "When should the publication threshold be set?",
            options: [
              "In advance, and written down",
              "At the moment of filing, when the full picture is available",
              "By the editor, once the draft has been read",
              "After the negative check has been run",
            ],
            correctIndex: 0,
            explanation:
              "Under deadline pressure the threshold quietly moves, and the version of you that set it at 2pm is more reliable than the one negotiating at 6.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which parts of an early account of a fast-moving situation are reliably wrong?",
            options: [
              "Numbers, names, and sequence",
              "The fact that something happened at all",
              "The location, which is the hardest thing to establish",
              "The identity of the institution involved",
            ],
            correctIndex: 0,
            explanation:
              "That something happened is reliably right. Publishing the second category and holding the first is a technique, not a compromise.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What is a reporter not obliged to do?",
            options: [
              "Match a competitor's claim",
              "Seek comment from the institution named in a story",
              "Record which facts are confirmed and which are not",
              "Set a publication threshold before reporting begins",
            ],
            correctIndex: 0,
            explanation:
              "Being second with something true is a much better professional position than being first with something you cannot support.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which check is priced in days or weeks?",
            options: [
              "A formal records response",
              "Reading a court docket for a named case",
              "Checking whether a document is already published",
              "Calling a named person whose number you already have",
            ],
            correctIndex: 0,
            explanation:
              "With an expert analysis and a document that exists in only one office. Knowing which tier a check sits in is what makes sequencing possible.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Why can you not verify a story?",
            options: [
              "Only the individual assertions inside it are checkable",
              "Because verification requires more time than a deadline allows",
              "Because a story is an editorial construction rather than a factual one",
              "Because verification is the fact-checking desk's responsibility",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the first move on any tip is to take it apart into separately true or false lines.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "How many assertions does the lesson find in the maternity unit example?",
            options: [
              "At least five",
              "Two, the closure and its timing",
              "One, since the closure is the whole claim",
              "Three, matching the sources available to check it",
            ],
            correctIndex: 0,
            explanation:
              "That a decision exists, that it is final rather than proposed, that it concerns that unit, that it takes effect at a stated time, and that a stated number of people are affected.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is a settling artifact?",
            options: [
              "The specific document, record, or person that resolves one assertion",
              "The final version of a story once every line is confirmed",
              "The archive capture of a page that later changed",
              "The note recording why a story was held",
            ],
            correctIndex: 0,
            explanation:
              "Writing it beside each line converts a vague sense of unease into a list of phone calls.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Which line in a decomposed claim gets checked hardest?",
            options: [
              "The one that would most damage a person or institution if wrong",
              "The one in the headline, since it is what readers see",
              "The one with the fewest available sources",
              "The one an editor is most likely to question",
            ],
            correctIndex: 0,
            explanation:
              "It is frequently not the one in the headline. A story that gets a closure right and the affected-patient number wrong has harmed the people whose number it inflated.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is the most common deadline failure involving explanation?",
            options: [
              "A verified event fused to an unverified motive",
              "An unverified event supported by a well-sourced motive",
              "An explanation attributed to the wrong official",
              "A motive published without seeking comment",
            ],
            correctIndex: 0,
            explanation:
              "That something happened is usually checkable quickly. Why it happened almost never is. Publish the event and attribute the explanation to whoever offered it.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is a load-bearing adjective?",
            options: [
              "A word like unprecedented or secret that carries its own claim",
              "A descriptive word that an editor has flagged for legal review",
              "A characterization attributed to a source rather than asserted",
              "An adjective that appears in a headline but not the body",
            ],
            correctIndex: 0,
            explanation:
              "Each needs its own check, and an hour spent finding out that a merely unusual thing is being called unprecedented is an hour well spent.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Why keep the decomposition in the file?",
            options: [
              "It answers an editor's question about what you actually have",
              "It provides the legal record if the story is challenged",
              "It satisfies the outlet's documentation requirements",
              "It becomes the outline the story is written from",
            ],
            correctIndex: 0,
            explanation:
              "And at 5:50 it tells you exactly which two lines are still unsupported, so the piece can be written around them.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What are the four confidence levels?",
            options: [
              "Confirmed, corroborated, reported, unverified",
              "Sourced, attributed, alleged, rumored",
              "Primary, secondary, tertiary, anecdotal",
              "Certain, probable, possible, doubtful",
            ],
            correctIndex: 0,
            explanation:
              "Used explicitly in your own notes, with a permitted form of words in print attached to each.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does confirmed mean in this course?",
            options: [
              "You saw the artifact, or two genuinely independent sources agree",
              "An official body has stated it publicly on the record",
              "Two sources have said the same thing in the same conversation",
              "No source has contradicted it after a reasonable search",
            ],
            correctIndex: 0,
            explanation:
              "It is the only level whose material can simply be stated.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What can corroborated material do in print?",
            options: [
              "Be stated with its support named",
              "Be stated without qualification, like confirmed material",
              "Be attributed to a single source in the sentence",
              "Appear only in an enterprise piece, never a daily",
            ],
            correctIndex: 0,
            explanation:
              "One solid source plus consistent circumstantial support, and the support is named so a reader can weigh it.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "How is reported material handled?",
            options: [
              "Attributed in the sentence that carries it",
              "Held until a second source is found",
              "Placed in a closing paragraph with a caveat",
              "Stated plainly, since a single solid source is sufficient",
            ],
            correctIndex: 0,
            explanation:
              "A single source, named or describable, with nothing against it.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What happens to unverified material?",
            options: [
              "It does not appear",
              "It appears with a clear label stating it is unverified",
              "It appears in the last paragraph with a caveat",
              "It appears attributed to whoever supplied it",
            ],
            correctIndex: 0,
            explanation:
              "You have been told, and nothing else. Deciding the wording from the level rather than the level from the wording you want is the whole discipline.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "Why is attributing a claim not a substitute for verifying it?",
            options: [
              "It shifts who said it, not whether it is true",
              "Because attribution requires the source to be named",
              "Because a reader cannot check who a source is",
              "Because outlets are liable for material they attribute",
            ],
            correctIndex: 0,
            explanation:
              "A reader takes the appearance of a claim in a news story as evidence somebody checked it.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "When is the making of a claim itself the checkable news?",
            options: [
              "When an official alleged it, a suit asserts it, or a document says it",
              "When two outlets have already reported the same claim",
              "When the subject of the claim has declined to comment",
              "When the claim concerns a matter of public interest",
            ],
            correctIndex: 0,
            explanation:
              "Then the checkable fact is that the allegation was made, and it must be visibly framed that way with the underlying assertion clearly unresolved.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What is the failure mode when reporting that an allegation was made?",
            options: [
              "Writing every later paragraph as though it were established",
              "Naming the person who made the allegation",
              "Quoting the allegation in the words the allegation uses",
              "Seeking comment before the allegation is published",
            ],
            correctIndex: 0,
            explanation:
              "The frame at the top does not survive into the body, and a reader finishes the piece believing something unresolved.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does a reporter who only ever revises confidence upward do?",
            options: [
              "Accumulate reasons to publish",
              "Verify efficiently under deadline pressure",
              "Build a defensible file for an editor",
              "Apply the confidence levels correctly",
            ],
            correctIndex: 0,
            explanation:
              "New information sometimes weakens what you thought you had, and a method that cannot register that is not verification.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "Which catalog course is cited as a worked example of refusing to print a figure?",
            options: [
              "The Negro Leagues: Who Owned the Game",
              "How the NAACP Learned to Win",
              "How to Read a Number",
              "Fact-checking as a Discipline",
            ],
            correctIndex: 0,
            explanation:
              "It has a lesson built around figures it declined to carry, because the sources disagree and the primary record is incomplete.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does that catalog example demonstrate?",
            options: [
              "A confidence level is a publishing decision, not a private note",
              "That incomplete records should be excluded from any course",
              "That secondary sources should be preferred to contested primaries",
              "That statistical disputes are best resolved by consensus",
            ],
            correctIndex: 0,
            explanation:
              "Stating which numbers were refused, and why, is the clearest available demonstration of the levels doing real work.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does labeling every line of a draft with its level buy?",
            options: [
              "An instantly answerable question about sourcing",
              "A record that satisfies the outlet's legal review",
              "A structure for the finished piece",
              "A way to skip the negative check",
            ],
            correctIndex: 0,
            explanation:
              "It looks fussy, takes four minutes, and answers an editor from the page rather than from memory. The labels are stripped before filing.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does the lesson mean by level-first wording?",
            options: [
              "Choosing the sentence from the confidence level",
              "Writing the sentence first and assigning a level to it",
              "Setting a level after an editor has read the draft",
              "Assigning levels only to disputed lines",
            ],
            correctIndex: 0,
            explanation:
              "Rather than deciding the level from the wording you already wanted, which is the direction the pressure runs.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "Which is priced in hours rather than minutes?",
            options: [
              "A records request an agency answers quickly",
              "Reading a body's published agenda",
              "Calling a source whose number you hold",
              "Checking whether a document is already online",
            ],
            correctIndex: 0,
            explanation:
              "With a data set that needs cleaning and three sources who are not all reachable at once.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What does the lesson say about the difference between confirming and not disconfirming?",
            options: [
              "Record which one you have for each element",
              "Treat them as equivalent when the deadline is close",
              "Prefer the second, since silence is more reliable than a statement",
              "Report both to the editor and let them decide",
            ],
            correctIndex: 0,
            explanation:
              "It is what prevents an hour of work turning into a false sense of solidity.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Why does the lesson say a two-minute check can kill a story?",
            options: [
              "Because the claim may depend on a document that does not exist",
              "Because an editor may withdraw support once told",
              "Because a competitor may already have published it",
              "Because the source may withdraw their account",
            ],
            correctIndex: 0,
            explanation:
              "Establish that the document exists before spending forty minutes on anything else.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What does decomposing a claim convert unease into?",
            options: [
              "A list of phone calls",
              "A structured outline for the finished piece",
              "A record for the outlet's legal file",
              "A rank ordering of sources by reliability",
            ],
            correctIndex: 0,
            explanation:
              "By writing the settling artifact beside each separately checkable line.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Which pairing does the lesson warn about most sharply?",
            options: [
              "A confirmed event and an unconfirmed reason for it",
              "A confirmed reason and an unconfirmed event",
              "Two confirmed events from the same source",
              "An unconfirmed event and an unconfirmed reason",
            ],
            correctIndex: 0,
            explanation:
              "Because the confirmed half lends its solidity to the unconfirmed half in a reader's mind.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What does the course say a method that can only produce publication is?",
            options: [
              "A schedule",
              "An efficient newsroom process",
              "The standard practice on a daily beat",
              "A correctly applied confidence system",
            ],
            correctIndex: 0,
            explanation:
              "The point recurs in the final section, where holding and publishing less are named as ordinary outcomes.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What is the value of writing the publication threshold as one sentence?",
            options: [
              "It is checkable later against what you actually have",
              "It shortens the editor's review of the draft",
              "It satisfies the outlet's documentation policy",
              "It replaces the need for a decomposed claim list",
            ],
            correctIndex: 0,
            explanation:
              "What has to be true before this runs, decided before the pressure that would move it.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which is an example of a load-bearing adjective?",
            options: [
              "Emergency",
              "Recent",
              "Local",
              "Annual",
            ],
            correctIndex: 0,
            explanation:
              "With unprecedented, secret, and illegal. Each rides inside another sentence and carries a claim that needs its own check.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is verification with unlimited time, in this course's framing?",
            options: [
              "A research problem the catalog already teaches",
              "The same discipline conducted more thoroughly",
              "An unattainable ideal that deadlines make irrelevant",
              "A task for the fact-checking desk rather than the reporter",
            ],
            correctIndex: 0,
            explanation:
              "Verification with fifty minutes left is a different discipline, because the constraint is sequencing rather than knowledge.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "How does the lesson treat a claim that a process is unprecedented?",
            options: [
              "As a separate assertion needing its own check",
              "As a characterization that attribution can carry",
              "As colour that does not require verification",
              "As an editorial judgment rather than a factual one",
            ],
            correctIndex: 0,
            explanation:
              "Finding out that a merely unusual thing is being described as unprecedented is an hour well spent.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Where does the lesson say the threshold quietly moves?",
            options: [
              "Under deadline pressure",
              "During the editing process",
              "When a competitor publishes first",
              "After the negative check is run",
            ],
            correctIndex: 0,
            explanation:
              "Which is the argument for writing it down at 2pm rather than negotiating it at 6.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What kind of failure is spending an hour on a story a quick check would have killed?",
            options: [
              "An ordering failure",
              "A time-management failure",
              "A sourcing failure",
              "An editing failure",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the kill check runs first, regardless of how easy the other checks are.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What does the confidence system apply to?",
            options: [
              "Each line, individually",
              "The story as a whole",
              "Only the assertions an editor questions",
              "Only material from anonymous sources",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the decomposition comes first: the levels attach to the separate assertions rather than to the piece.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does the course say about treating verification as a switch?",
            options: [
              "It produces two opposite failures at once",
              "It is the correct model for daily reporting",
              "It works for events but not for explanations",
              "It is what the confidence levels formalize",
            ],
            correctIndex: 0,
            explanation:
              "Publishing thin material as though it were solid, and holding solid material because one line is unresolved.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "Which is the correct treatment of a lawsuit's assertion?",
            options: [
              "Report that the suit asserts it, with the assertion clearly unresolved",
              "Report the assertion as fact, since it is on the public record",
              "Omit it until a court has ruled on the claim",
              "Attribute it to the plaintiff without naming the suit",
            ],
            correctIndex: 0,
            explanation:
              "The checkable claim is that the assertion was made. The frame has to survive into the body of the piece.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does a decomposed claim list let you do at 5:50?",
            options: [
              "Write the piece around the two lines still unsupported",
              "Decide whether to publish or hold without consulting an editor",
              "Establish that the negative check was unnecessary",
              "Reassign the remaining checks to a colleague",
            ],
            correctIndex: 0,
            explanation:
              "Which is the practical payoff of doing the decomposition first rather than treating it as paperwork.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Which assertion in the maternity example is easiest to confuse with another?",
            options: [
              "Whether the decision is final or proposed",
              "Whether the unit is a maternity unit",
              "Whether the hospital exists",
              "Whether a number of people is stated",
            ],
            correctIndex: 0,
            explanation:
              "A proposal reported as a decision is the classic version of this error, and it is a separate line precisely so it cannot be skipped.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is the practical use of the four-level system in the newsroom?",
            options: [
              "An editor's sourcing question becomes answerable from the page",
              "It removes the need to name sources in the finished piece",
              "It shortens the legal review before publication",
              "It substitutes for seeking comment from the subject",
            ],
            correctIndex: 0,
            explanation:
              "Which is the argument for annotating the working draft and stripping the labels before filing.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What is the professional position of being second with something true?",
            options: [
              "Better than being first with something unsupported",
              "Equivalent, since readers do not track who published first",
              "Worse, because the audience has already moved on",
              "Unimportant, since accuracy is judged after the fact",
            ],
            correctIndex: 0,
            explanation:
              "Easy to say and hard to do at 5:45, which is exactly why the threshold is written down at 2.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What should a reporter assume about the first version of anything?",
            options: [
              "It is wrong in some detail",
              "It is broadly reliable if it comes from an official",
              "It is wrong about whether the event happened",
              "It is accurate about numbers and wrong about causes",
            ],
            correctIndex: 0,
            explanation:
              "Reliably wrong about numbers, names, and sequence, and reliably right that something happened.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which sentence is a permitted use of corroborated material?",
            options: [
              "Stating the fact and naming the support beside it",
              "Stating the fact without qualification",
              "Attributing the fact to a single unnamed source",
              "Omitting the fact until a second source is found",
            ],
            correctIndex: 0,
            explanation:
              "One solid source with consistent circumstantial support, and the support named so a reader can weigh it.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What does the lesson call the version of a piece written from unverified material with attribution?",
            options: [
              "Irresponsible, because attribution is not verification",
              "Acceptable, provided the source is named",
              "Standard practice for breaking news",
              "Legally safe, which is what matters most",
            ],
            correctIndex: 0,
            explanation:
              "Attribution is how you handle a claim you have decided is worth publishing, not a way to publish one you have not verified.",
            sourceLessonSlug: "confidence-levels",
          },
        ],
      },
    },
    // ── Section 2 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "original-not-copy",
      title: "5 · Find the original, not the copy",
      section: "Section 2 · Provenance",
      body: `Almost everything that reaches a reporter is a copy of a copy, and most verification failures are failures to go back one more step toward the thing itself.

**What a copy loses.** Context, first. A quotation reaches you inside somebody's summary of somebody's post about a document, and each step drops a qualifier. Metadata, second: a re-uploaded image, a screenshot, or a forwarded file usually carries none of the information the original held. And the ability to check anything at all, third, because you can only interrogate an artifact you have.

**The upstream walk, which is one habit.** For every item, ask where it came from, then ask that of the answer, until you reach either the original or a wall. A screenshot of a post: find the post. A post quoting a document: find the document. A document summarized in a press release: find the document. Most walks are two or three steps and take under ten minutes.

**When you hit a wall, name it in your notes.** The furthest upstream you got, and why you stopped. A story built on a third-hand copy is not automatically wrong; a story built on a third-hand copy where nobody wrote down that it was third-hand is how a correction happens six months later with nobody able to reconstruct what went wrong.

**Reverse image search, described as a method rather than a product.** Take an image, search it against indexed images, and see where else it has appeared and when. It answers the single most common question about a photograph, which is whether it is old. Several services do this and which ones exist changes; the method is stable and the specific tool you use should be assumed to be temporary.

**Screenshots deserve their own suspicion.** They are trivially editable, they carry no provenance, and they circulate faster than anything else. A screenshot is a lead, never evidence. Find the live item, or find somebody who saw it live, or find the archive capture, and if none of the three exist, say in the story that you worked from a screenshot.

**Archives are the underused half of this.** Web archives capture pages that later change or vanish, and a capture with a date is a durable artifact you can cite. Capture anything you rely on, at the moment you rely on it, because the page you are reading is not guaranteed to exist next week and a broken link is not a source.

:::reveal What three things does a copy lose? ||| Context, because each retelling drops a qualifier. Metadata, because re-uploads and screenshots strip it. And the ability to check anything, since you can only interrogate an artifact you actually have.

:::reveal What is the upstream walk? ||| Asking where an item came from, then asking that of the answer, until you reach the original or a wall. Most walks are two or three steps and take under ten minutes.

:::reveal Why is a screenshot a lead rather than evidence? ||| It is trivially editable and carries no provenance. Find the live item, someone who saw it live, or an archive capture, and if none exist, say in the story that you worked from a screenshot.

## Vocabulary
- **Upstream walk**: repeatedly asking where an item came from until you reach the original or a documented wall.
- **Provenance loss**: what a copy strips, namely context, metadata, and the ability to interrogate the artifact.
- **Reverse image search**: matching an image against indexed images to find earlier appearances, a stable method served by changing tools.
- **Archive capture**: a dated snapshot of a page, which is durable and citable when the live page is not.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Bellingcat. (n.d.). *Online investigation toolkit*. https://www.bellingcat.com/`,
    },
    {
      slug: "source-date-location-motivation",
      title: "6 · Source, date, location, motivation",
      section: "Section 2 · Provenance",
      body: `Four questions, asked of any piece of material, resolve most of what verification actually needs. They are worth committing to memory because they work on a photograph, a document, a data set, and a rumor equally.

**Source: who made this, and how do you know?** Not who sent it to you. Who created it. An account that posted a video may have filmed it, may have taken it from elsewhere, or may exist only to distribute other people's material. Look at what else the account has done, how long it has existed, and whether its earlier activity is consistent with being where it claims to have been.

**Date: when was it made, as against when did it surface?** The gap between those two is where most false claims live, because genuine old material relabeled as new is easier to produce and harder to catch than a fabrication. Search for earlier appearances, look for datable content inside the item itself, and treat a first appearance date as a ceiling on age rather than proof of it.

**Location: where was it made, and what inside it says so?** Signage, license plates, architecture, vegetation, road markings, and the direction of shadows all constrain a location, and satellite and street-level imagery let you compare. This is slower than the other three and it is the one that most often produces a definite answer, which makes it worth starting early when it matters.

**Motivation: why does this exist, and why is it reaching you now?** The same question the beat course asks about a source, applied to an artifact. Material arrives at a moment for a reason, and the reason is frequently the story or frequently the warning.

**Metadata, with a caution.** A file's embedded data can carry a creation time, a device, and sometimes coordinates. It is useful and it is not authoritative: it is easily stripped by ordinary sharing, easily edited, and often simply wrong because a device clock was wrong. Treat it as one input that agrees or disagrees with the others, never as the answer.

**Generated and altered material, stated plainly.** Synthetic images, audio, and video are now cheap to produce and detection tools are unreliable in both directions, which means a detector's verdict is not a verification. The methods in this lesson still work, because a generated artifact has no genuine upstream, no consistent earlier appearances, and no location that survives comparison. Provenance beats detection.

:::reveal What is the difference between source and sender, and why does it matter? ||| The source made the material; the sender passed it on. An account that posts a video may have filmed it, taken it, or exist only to distribute other people's material.

:::reveal Why is the gap between when something was made and when it surfaced so important? ||| Because genuine old material relabeled as new is easier to produce and harder to catch than a fabrication, so a first-appearance date is a ceiling on age rather than proof of it.

:::reveal Why does provenance beat detection for synthetic media? ||| Detection tools are unreliable in both directions, so a verdict is not a verification. A generated artifact has no genuine upstream, no consistent earlier appearances, and no location that survives comparison.

## Vocabulary
- **Source versus sender**: who created an artifact, as distinct from who passed it to you.
- **Recontextualization**: genuine material relabeled with a new date, place, or meaning, which is the most common false claim.
- **Chronolocation**: using datable content inside an item, such as weather, shadows, or signage, to constrain when it was made.
- **Metadata caution**: embedded file data is an input that can agree or disagree with other evidence, never the answer by itself.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Bellingcat. (n.d.). *Online investigation toolkit*. https://www.bellingcat.com/`,
    },
    {
      slug: "information-disorder",
      title: "7 · Three kinds of wrong, and why the difference matters",
      section: "Section 2 · Provenance",
      body: `Not everything false is a lie, and not everything harmful is false. A widely used framework separates three things reporters routinely fuse, and separating them changes both what you check and how you write.

**The three categories.** Misinformation is false information shared without intent to cause harm. Disinformation is false information created and shared deliberately to cause harm. Malinformation is genuine information used to cause harm, for example by leaking something private or by stripping true material of the context that made it fair (Wardle & Derakhshan, 2017).

**Why the distinction is operational rather than academic.** Each has a different verification job. Misinformation asks what actually happened, so you check the claim. Disinformation asks who made this and why, so you check the origin and the distribution. Malinformation asks what was removed, so you check the context around a true item.

**The category reporters handle worst is the third.** A true document, a real quotation, an authentic recording, presented in a frame that makes it mean something it did not mean. Nothing in the item is false and the story built on it is wrong, which no fact check of the item itself will catch. The check is always the same: what surrounded this, and what is missing.

**Intent is hard, so be careful with it.** Deciding whether something was deliberate usually requires evidence you do not have on deadline. You can report what was published, who published it, how it spread, and what it omitted, all of which are checkable. Asserting that somebody meant to deceive is a claim about a mind and needs its own evidence.

**Amplification is a separate fact from origin.** Who first said something and who made it travel are different questions with different answers, and both are reportable. On a beat, the second is often more useful, because it names the actors whose behavior a reader can actually observe.

**And the failure that costs the most.** Repeating a false claim in order to knock it down, at the top of a story, in the words the claim uses. If you must address a false claim, lead with what is true, describe the claim in your own words, and do not build the piece around it. The point of covering something false is that a reader leaves knowing what is so.

:::reveal Define the three categories and give the check each one calls for. ||| Misinformation is false without intent to harm, so you check the claim. Disinformation is false and deliberately harmful, so you check the origin and distribution. Malinformation is true material used to harm, so you check what context was removed.

:::reveal Why does a fact check of the item fail on malinformation? ||| Because nothing in the item is false. The story built on it is wrong because of what surrounded it and what is missing, which is what the check has to look for.

:::reveal How should a reporter handle a false claim they must address? ||| Lead with what is true, describe the claim in your own words rather than repeating its phrasing, and do not build the piece around it.

## Vocabulary
- **Misinformation**: false information shared without an intent to cause harm.
- **Disinformation**: false information created and distributed deliberately to cause harm.
- **Malinformation**: genuine information deployed to cause harm, often by removing the context that made it fair.
- **Amplification**: who made a claim travel, which is a separate and separately reportable fact from who originated it.

## Sources
- Wardle, C., & Derakhshan, H. (2017). *Information disorder: Toward an interdisciplinary framework for research and policy making* (Council of Europe report DGI(2017)09).
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "quiz-provenance",
      title: "8 · Knowledge check: provenance",
      section: "Section 2 · Provenance",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What are most verification failures, in this lesson's account?",
            options: [
              "Failures to go back one more step toward the original",
              "Failures to seek comment from the institution involved",
              "Failures to record which sources supported which facts",
              "Failures to allow enough time before the deadline",
            ],
            correctIndex: 0,
            explanation:
              "Almost everything that reaches a reporter is a copy of a copy.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What three things does a copy lose?",
            options: [
              "Context, metadata, and the ability to interrogate it",
              "Accuracy, attribution, and legal protection",
              "Resolution, timestamps, and file size",
              "Authorship, licensing, and archival status",
            ],
            correctIndex: 0,
            explanation:
              "Each retelling drops a qualifier, re-uploads strip embedded data, and you can only interrogate an artifact you actually have.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is the upstream walk?",
            options: [
              "Asking where an item came from, repeatedly, until the original or a wall",
              "Contacting each person named in an item in order of seniority",
              "Searching for later versions of an item to see how it changed",
              "Reading a document from its appendices back to its summary",
            ],
            correctIndex: 0,
            explanation:
              "Most walks are two or three steps and take under ten minutes.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What should you record when the upstream walk hits a wall?",
            options: [
              "The furthest point you reached and why you stopped",
              "The name of the person who supplied the copy",
              "The time spent on the walk, for the editor's record",
              "The archive services you searched without success",
            ],
            correctIndex: 0,
            explanation:
              "A story built on a third-hand copy is not automatically wrong. One where nobody wrote down that it was third-hand is how a correction happens six months later with nothing reconstructable.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What question does reverse image search most often answer?",
            options: [
              "Whether an image is old",
              "Whether an image has been digitally altered",
              "Who holds the copyright in an image",
              "Where an image was taken",
            ],
            correctIndex: 0,
            explanation:
              "It matches an image against indexed images to find earlier appearances. The method is stable; the specific service should be assumed temporary.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Why does the course describe tools as temporary?",
            options: [
              "A course pinned to a product becomes wrong silently",
              "Because tools require subscriptions most reporters cannot afford",
              "Because tool results are inadmissible as evidence",
              "Because every tool produces different results for the same query",
            ],
            correctIndex: 0,
            explanation:
              "Named tools appear only as examples. The methods, find the original, establish provenance, corroborate, look for disconfirming evidence, do not date.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is a screenshot, in verification terms?",
            options: [
              "A lead, never evidence",
              "Evidence, provided it is dated and unedited",
              "A copy that retains the original's metadata",
              "An archive capture with the same standing as a live page",
            ],
            correctIndex: 0,
            explanation:
              "Trivially editable, carrying no provenance, and circulating faster than anything else. Find the live item, a witness to it, or an archive capture.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What should a story say if none of the three checks on a screenshot succeed?",
            options: [
              "That you worked from a screenshot",
              "Nothing, since the source of an image is an internal matter",
              "That the image could not be verified and has been omitted",
              "That the image is attributed to whoever supplied it",
            ],
            correctIndex: 0,
            explanation:
              "Saying so is what lets a reader weigh the material at the standing it actually has.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Why capture a page at the moment you rely on it?",
            options: [
              "The page is not guaranteed to exist next week",
              "Because outlets require an archived copy before publication",
              "Because a capture carries more legal weight than a live page",
              "Because captures include metadata the live page omits",
            ],
            correctIndex: 0,
            explanation:
              "A broken link is not a source, and a capture with a date is a durable artifact you can cite.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What are the four provenance questions?",
            options: [
              "Source, date, location, motivation",
              "Who, what, where, when",
              "Origin, distribution, amplification, effect",
              "Author, publisher, licence, format",
            ],
            correctIndex: 0,
            explanation:
              "They work on a photograph, a document, a data set, and a rumor equally, which is why they are worth memorizing.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What is the difference between the source and the sender?",
            options: [
              "The source made it; the sender passed it on",
              "The source is named; the sender is anonymous",
              "The source is an institution; the sender is an individual",
              "The source is on the record; the sender is on background",
            ],
            correctIndex: 0,
            explanation:
              "An account that posted a video may have filmed it, taken it from elsewhere, or exist only to distribute other people's material.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What do you look at to assess an account that posted material?",
            options: [
              "What else it has posted, how long it has existed, and its consistency",
              "How many followers it has and how fast they grew",
              "Whether the account is verified by the platform",
              "Whether the account has been quoted by other outlets",
            ],
            correctIndex: 0,
            explanation:
              "Specifically whether its earlier activity is consistent with being where it claims to have been.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Where do most false claims live, in the date question?",
            options: [
              "In the gap between when material was made and when it surfaced",
              "In the absence of any date on the original item",
              "In the difference between the publication and the event",
              "In the timezone of the timestamp recorded",
            ],
            correctIndex: 0,
            explanation:
              "Genuine old material relabeled as new is easier to produce and harder to catch than a fabrication.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "How should a first-appearance date be treated?",
            options: [
              "As a ceiling on age, not proof of it",
              "As the creation date, absent evidence otherwise",
              "As unreliable and therefore ignorable",
              "As the date to publish alongside the material",
            ],
            correctIndex: 0,
            explanation:
              "Something can be older than its first appearance in your search. It cannot be newer.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Which features constrain a location?",
            options: [
              "Signage, plates, architecture, vegetation, road markings, shadows",
              "File size, resolution, aspect ratio, and colour profile",
              "The number of people visible and their clothing",
              "The language spoken and the accents heard",
            ],
            correctIndex: 0,
            explanation:
              "Satellite and street-level imagery let you compare. It is the slowest of the four and the one that most often gives a definite answer.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Why start the location check early when it matters?",
            options: [
              "It is slow and most often produces a definite answer",
              "Because imagery services rate-limit requests later in the day",
              "Because a location must be established before a source is contacted",
              "Because location is the only check an editor will accept",
            ],
            correctIndex: 0,
            explanation:
              "The other three questions are faster, which makes location the one that has to be sequenced deliberately.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What does the motivation question ask?",
            options: [
              "Why this exists and why it is reaching you now",
              "Why the source is willing to be named",
              "Why the institution has not commented",
              "Why the material was not published earlier",
            ],
            correctIndex: 0,
            explanation:
              "The same question the beat course asks about a source, applied to an artifact. Material arrives at a moment for a reason.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "How should embedded file metadata be treated?",
            options: [
              "As one input that agrees or disagrees with the others",
              "As authoritative, since it is written by the device",
              "As worthless, since it is trivially edited",
              "As sufficient on its own to establish date and place",
            ],
            correctIndex: 0,
            explanation:
              "It is easily stripped by ordinary sharing, easily edited, and often simply wrong because a device clock was wrong.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Why does provenance beat detection for synthetic media?",
            options: [
              "Detection tools are unreliable in both directions",
              "Because detectors cannot process video at scale",
              "Because generated media always carries a watermark",
              "Because provenance is faster to establish than detection",
            ],
            correctIndex: 0,
            explanation:
              "A detector's verdict is not a verification. A generated artifact has no genuine upstream, no consistent earlier appearances, and no location that survives comparison.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What is recontextualization?",
            options: [
              "Genuine material relabeled with a new date, place, or meaning",
              "A fabricated item presented as an authentic one",
              "An accurate item published without seeking comment",
              "A quotation shortened for space in a published piece",
            ],
            correctIndex: 0,
            explanation:
              "It is the most common false claim, and it is why the date question is asked separately from the source question.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What is chronolocation?",
            options: [
              "Using datable content inside an item to constrain when it was made",
              "Establishing where an item was made from its visible features",
              "Recording the time at which an item reached the reporter",
              "Matching a timestamp against an official record of events",
            ],
            correctIndex: 0,
            explanation:
              "Weather, shadows, and signage all constrain a date from inside the artifact rather than from its metadata.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What are the three categories in the information disorder framework?",
            options: [
              "Misinformation, disinformation, malinformation",
              "Rumor, error, and fabrication",
              "Bias, spin, and propaganda",
              "Hoax, satire, and parody",
            ],
            correctIndex: 0,
            explanation:
              "False without intent to harm, false and deliberately harmful, and true but deployed to harm.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is misinformation?",
            options: [
              "False information shared without intent to cause harm",
              "False information created deliberately to cause harm",
              "True information used to cause harm",
              "Information whose accuracy has not yet been established",
            ],
            correctIndex: 0,
            explanation:
              "The verification job is to check the claim itself, which is the most familiar of the three.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is disinformation?",
            options: [
              "False information created and shared deliberately to cause harm",
              "False information shared without any intent to cause harm",
              "Genuine information stripped of its context",
              "Information amplified beyond its original audience",
            ],
            correctIndex: 0,
            explanation:
              "The verification job shifts to origin and distribution rather than to the claim.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is malinformation?",
            options: [
              "Genuine information used to cause harm",
              "False information shared innocently",
              "Information whose source cannot be established",
              "A claim published before it could be checked",
            ],
            correctIndex: 0,
            explanation:
              "For example by leaking something private, or by stripping true material of the context that made it fair.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "Which category do reporters handle worst, and why?",
            options: [
              "Malinformation, because nothing in the item is false",
              "Disinformation, because intent cannot be proved",
              "Misinformation, because it spreads fastest",
              "All three equally, since the checks are the same",
            ],
            correctIndex: 0,
            explanation:
              "A true document in a frame that makes it mean something it did not mean. No fact check of the item itself will catch it.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is the check for malinformation?",
            options: [
              "What surrounded this, and what is missing",
              "Who created it, and when",
              "Whether the claim is accurate as stated",
              "How widely it has been shared",
            ],
            correctIndex: 0,
            explanation:
              "Always the same, and it is the only check that catches a story built on an authentic item.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "Why be careful about asserting intent?",
            options: [
              "It is a claim about a mind and needs its own evidence",
              "Because intent is legally privileged information",
              "Because outlets prohibit characterizing motives",
              "Because intent cannot be relevant to a factual story",
            ],
            correctIndex: 0,
            explanation:
              "What was published, who published it, how it spread, and what it omitted are all checkable. Deliberateness usually is not, on deadline.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is amplification, and why is it separately reportable?",
            options: [
              "Who made a claim travel, which is a different question from who said it",
              "How many times a claim was repeated by the same account",
              "The reach a claim achieved compared with the outlet's own",
              "The rate at which a claim spread in its first hour",
            ],
            correctIndex: 0,
            explanation:
              "On a beat the second question is often more useful, because it names actors whose behavior a reader can observe.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "How should a reporter address a false claim they must cover?",
            options: [
              "Lead with what is true and describe the claim in your own words",
              "Quote the claim exactly so readers can recognize it",
              "Lead with the claim and then refute it point by point",
              "Ignore it, since covering it amplifies it",
            ],
            correctIndex: 0,
            explanation:
              "And do not build the piece around it. The point of covering something false is that a reader leaves knowing what is so.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is the failure the lesson calls the costliest in covering false claims?",
            options: [
              "Repeating it at the top in the words the claim uses",
              "Omitting the name of whoever made it",
              "Covering it after other outlets have already done so",
              "Publishing without a response from the person who made it",
            ],
            correctIndex: 0,
            explanation:
              "It is a structural failure rather than a factual one, and it survives even a perfectly accurate refutation.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "Which verification job goes with disinformation?",
            options: [
              "Checking the origin and the distribution",
              "Checking whether the claim is accurate",
              "Checking what context was removed",
              "Checking whether an item has been altered",
            ],
            correctIndex: 0,
            explanation:
              "Each category calls for a different job, which is what makes the distinction operational rather than academic.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What does the lesson say about material that is true and still produces a wrong story?",
            options: [
              "It is malinformation, and the check is what is missing",
              "It is misinformation, since the result is false",
              "It is disinformation, since the framing was deliberate",
              "It is a category error and not a verification problem",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the item is false, so the story is wrong because of the frame around it.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What can a reporter report about a false claim without asserting intent?",
            options: [
              "What was published, by whom, how it spread, and what it omitted",
              "That the publisher knew the claim was false when they made it",
              "That the claim was designed to mislead a specific audience",
              "That the publisher has a history of deliberate deception",
            ],
            correctIndex: 0,
            explanation:
              "All four are checkable, and none of them requires a claim about somebody's state of mind.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "Which is the most common false claim, per the provenance lesson?",
            options: [
              "Genuine old material relabeled as new",
              "A wholly fabricated document",
              "A synthetic image generated to order",
              "A quotation attributed to the wrong person",
            ],
            correctIndex: 0,
            explanation:
              "It is easier to produce and harder to catch than a fabrication, which is why the date question is asked of everything.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What does the lesson say about detection tools' verdicts?",
            options: [
              "A verdict is not a verification",
              "A verdict is sufficient when the tool reports high confidence",
              "A verdict should be published alongside the material",
              "A verdict replaces the need for a provenance check",
            ],
            correctIndex: 0,
            explanation:
              "They are unreliable in both directions, which is why the stable methods are the ones the course teaches.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Which of the four questions is described as the same one the beat course asks about a source?",
            options: [
              "Motivation",
              "Source",
              "Date",
              "Location",
            ],
            correctIndex: 0,
            explanation:
              "Why does this exist and why is it reaching you now, applied to an artifact rather than to a person.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "How long does the lesson say a typical upstream walk takes?",
            options: [
              "Under ten minutes",
              "About an hour, which is why it is skipped under deadline",
              "A full afternoon for any document-based claim",
              "As long as the reporting itself, since every item needs one",
            ],
            correctIndex: 0,
            explanation:
              "Most walks are two or three steps: screenshot to post, post to document, document to the office that issued it.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is provenance loss?",
            options: [
              "What a copy strips: context, metadata, and interrogability",
              "The deletion of an original after it has been shared",
              "The removal of a source's name from a published piece",
              "The failure of an archive service to capture a page",
            ],
            correctIndex: 0,
            explanation:
              "Which is the whole argument for going back one more step rather than working from what arrived.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is an archive capture worth?",
            options: [
              "A durable, dated artifact you can cite",
              "Legal protection against a claim about the original",
              "Proof that the page was accurate when captured",
              "A substitute for reading the original document",
            ],
            correctIndex: 0,
            explanation:
              "Captured at the moment you rely on it, because the live page is not guaranteed to be there next week.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Which is the strongest reason a screenshot cannot stand alone?",
            options: [
              "It carries no provenance and is trivially editable",
              "It is usually low resolution",
              "It cannot be reproduced without permission",
              "It rarely includes the account name",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the response is to find the live item, a witness to it, or an archive capture.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Why is the framework's distinction called operational rather than academic?",
            options: [
              "Each category calls for a different verification job",
              "Because it was written by practitioners rather than researchers",
              "Because it assigns legal liability differently to each",
              "Because it determines which desk covers the story",
            ],
            correctIndex: 0,
            explanation:
              "Check the claim, check the origin and distribution, or check what was removed.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What does the lesson say about a fact check applied to malinformation?",
            options: [
              "It will not catch the error",
              "It is the only method that works on it",
              "It works but requires the original context",
              "It is unnecessary because the item is true",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the item is false. The wrongness is in what surrounded it and what is missing.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What does the course say about naming specific verification tools?",
            options: [
              "They appear as examples with an explicit note that they change",
              "They are omitted entirely so the course does not date",
              "They are listed with subscription costs so a reporter can budget",
              "They are ranked so a reporter knows which to use first",
            ],
            correctIndex: 0,
            explanation:
              "Tools age and methods do not, and a course pinned to a product becomes wrong silently.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What does a re-uploaded image usually carry?",
            options: [
              "None of the original's embedded information",
              "A complete record of every account that shared it",
              "The original's creation timestamp and coordinates",
              "A watermark identifying the platform it passed through",
            ],
            correctIndex: 0,
            explanation:
              "Which is one of the three things a copy loses, alongside context and the ability to interrogate the artifact.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is the practical value of knowing an account's history?",
            options: [
              "It shows whether earlier activity is consistent with the claim",
              "It establishes how many people saw the material",
              "It proves the account holder's identity",
              "It determines whether the platform will confirm the post",
            ],
            correctIndex: 0,
            explanation:
              "An account that exists only to distribute other people's material is a sender rather than a source.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What does a wrong device clock produce?",
            options: [
              "Metadata that is simply wrong",
              "An image that fails detection tools",
              "A file that cannot be archived",
              "A timestamp that cannot be read at all",
            ],
            correctIndex: 0,
            explanation:
              "Which is one of three reasons metadata is an input rather than an answer, with stripping and editing being the others.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What does the lesson say a broken link is?",
            options: [
              "Not a source",
              "A citation that can be repaired later",
              "Evidence the page was removed deliberately",
              "Acceptable if the text was quoted accurately",
            ],
            correctIndex: 0,
            explanation:
              "Which is the argument for capturing anything you rely on at the moment you rely on it.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Which pair of questions does the amplification point separate?",
            options: [
              "Who first said it, and who made it travel",
              "Who said it, and whether it is true",
              "Who benefits, and who is harmed",
              "Who published it, and who corrected it",
            ],
            correctIndex: 0,
            explanation:
              "Both are reportable, and on a beat the second names actors whose behavior a reader can actually observe.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What does the course say about a story that leads with a false claim to refute it?",
            options: [
              "It builds the piece around the thing it meant to correct",
              "It is the clearest structure for a correction piece",
              "It satisfies the requirement to seek comment",
              "It is acceptable when the claim is already widely known",
            ],
            correctIndex: 0,
            explanation:
              "Lead with what is true, describe the claim in your own words, and do not make it the spine.",
            sourceLessonSlug: "information-disorder",
          },
        ],
      },
    },
    // ── Section 3 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "what-counts-as-independent",
      title: "9 · What actually counts as independent",
      section: "Section 3 · Corroboration under pressure",
      body: `Two sources is the oldest rule in the trade and it is routinely satisfied by two sources who are the same source. Getting this right is the difference between corroboration and an echo.

**The test.** Two accounts are independent when the second could have been produced without the first existing. If the second person heard it from the first, read it in the first's post, or works for the same office and was briefed with the first, you have one account arriving twice.

**The echo patterns that catch reporters.** Two outlets citing each other, or both citing an unnamed original. Two officials briefed from the same memo. A document plus a person whose knowledge of the subject comes from that document. A social account and the reprint of it. And the hardest one to see: two people who were both in the same room and have discussed it since, whose accounts have converged the way accounts do.

**Kinds of independence, ranked by strength.** A record created for another purpose at the time, such as a log, a filing, or a timestamp. A physical artifact, such as a photograph you have located. A witness with no relationship to your first source. An institution's on-record statement. And weakest, a second person who is inside the same institution.

**One good record beats three consistent people, on deadline.** People are consistent for many reasons, including that they talked. A record created contemporaneously for a purpose unrelated to your story cannot have been shaped by it, which is why a permit, a docket entry, a dispatch log, or a payment record is worth more than another phone call.

**Going and getting it yourself is the strongest independence there is.** The catalog's own *How the NAACP Learned to Win* covers an investigator who did exactly that: rather than accept the accounts institutions were willing to release, Walter White went and gathered the evidence nobody would give him, and the resulting record was strong enough to defeat a Supreme Court nomination. The lesson for a beat reporter is narrow and durable: a first-hand observation you made is not an echo of anybody, and it is frequently obtainable in the same hour as a phone call that would only have produced a statement.

**Write the chain down.** For each fact, who or what supports it and how they know. Two lines each. It takes minutes and it is what lets you answer, honestly and immediately, when an editor asks whether you really have two sources or the same one twice.

**When you genuinely cannot get independence.** Say so, in the story, in the sentence that carries the claim. A single-sourced fact clearly labeled as single-sourced is a defensible piece of journalism; the same fact presented as established is not, and the difference costs one clause.

:::reveal What is the test for whether two accounts are independent? ||| Whether the second could have been produced without the first existing. If it travelled through the first, you have one account arriving twice.

:::reveal Why does one contemporaneous record beat three consistent people on deadline? ||| Because a record created at the time for a purpose unrelated to your story cannot have been shaped by it, while people are consistent for many reasons, including having talked.

:::reveal What do you do when independence is genuinely unavailable? ||| Say so in the sentence carrying the claim. A fact clearly labeled single-sourced is defensible; the same fact presented as established is not, and the difference costs one clause.

## Vocabulary
- **Independence test**: whether the second account could exist had the first not existed.
- **Echo**: two accounts that appear to corroborate but both descend from one origin.
- **Contemporaneous record**: something created at the time for an unrelated purpose, which cannot have been shaped by your story.
- **Sourcing chain**: two written lines per fact, naming what supports it and how that source knows.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "official-confirmation",
      title: "10 · Official confirmation, and what it is worth",
      section: "Section 3 · Corroboration under pressure",
      body: `Calling the institution is the step reporters most often treat as a formality, and it is the step where an hour of verification is either completed or wasted, depending entirely on how the question is asked.

**Ask a question that has a checkable answer.** Not whether they would like to comment, which invites a statement. Ask whether a specific document exists, whether a named person holds a named position, whether a vote took place on a date, whether a figure is correct. A precise question is much harder to answer with nothing, and a refusal to answer a precise question is itself informative in a way that a declined comment is not.

**Give them the specific allegation, in writing, with time to answer.** Not the whole story, the specific assertions you intend to publish about them. It is fairer, it is legally safer, and it very often produces the correction that saves you: institutions frequently respond to a precise allegation by explaining a detail you had wrong.

**Understand what a no-comment does and does not mean.** It is not confirmation, it is not denial, and it is publishable as exactly what it is: that you put specific questions to the body on a date and it declined to answer them. Saying which questions were declined is more informative than the phrase itself and takes the same space.

**A denial is a fact, and it is not the end.** An institution denying something has told you what it will say publicly, which is worth having and is not evidence about the underlying claim. Record the exact words, the person's name and role, and whether it is a denial of the whole thing or only of a specific characterization, because those are very different and the second is common.

**Watch for the non-denial denial.** A statement that answers a different question, disputes a characterization while leaving the fact untouched, or asserts that a process was followed rather than that a thing did not happen. Read every response against your decomposed list from lesson 2 and mark which lines it actually addresses. Frequently the answer is none of them.

**Deadlines you set should be real and reasonable.** Give a genuine time, say what you will publish if you do not hear back, and then honor it. A reporter who threatens a deadline and does not keep it teaches an institution that deadlines are negotiable, which costs every reporter at that outlet afterward.

:::reveal What kind of question should be put to an institution, and why? ||| One with a checkable answer: whether a document exists, whether a vote occurred on a date, whether a figure is correct. A precise question is hard to answer with nothing, and a refusal to answer it is itself informative.

:::reveal Why send the specific allegations in writing before publishing? ||| It is fairer and legally safer, and institutions frequently respond to a precise allegation by explaining a detail you had wrong, which is the correction that saves you.

:::reveal What is a non-denial denial, and how do you catch one? ||| A statement answering a different question, disputing a characterization while leaving the fact untouched, or asserting a process was followed. Read it against your decomposed claim list and mark which lines it actually addresses.

## Vocabulary
- **Checkable question**: a request for a specific fact rather than an invitation to comment.
- **Right of reply in writing**: putting the specific assertions to their subject with real time to answer.
- **Non-denial denial**: a response that addresses something other than the assertion made.
- **Real deadline**: a stated time, a stated consequence, and honoring both.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "the-negative-check",
      title: "11 · The negative check: looking for what would prove you wrong",
      section: "Section 3 · Corroboration under pressure",
      body: `Every method in this course can be run in a way that only accumulates support. The negative check is the correction, and it is the single habit that most improves accuracy under time pressure.

**The question, asked out loud.** If this story were wrong, what would be true instead, and where would that show up? Then spend ten minutes looking there. Not looking for more support, looking for the thing that would break it.

**Why it is necessary.** A reporter who believes a story is true will find supporting material, because supporting material exists for most claims, including false ones. Searching only in the direction of your belief produces a file that looks strong and is untested. The negative check is a deliberate correction for a bias that is not a character flaw and does not go away with experience.

**Concrete forms it takes.** Search the claim with words a skeptic would use rather than words you would use. Call the person the story would embarrass and give them the specific assertion. Find the document that would exist if the innocent explanation were true. Ask your best source what would change their mind. And ask a colleague to argue the opposite case for five minutes.

**The innocent explanation, specifically.** Before publishing that a pattern is what it looks like, write down the boring explanation and check it: a coincidence of timing, a routine process, a coding change in a data set, a personnel absence, a policy that has always worked that way. Most patterns have one. Finding it is not a wasted hour, it is the hour that stopped a correction.

**Fitting it into a deadline.** Ten minutes, run once, after you think you are finished and before you file. It is short enough to survive a bad afternoon and late enough that you know which line is load-bearing.

**What to do when the negative check finds something.** Do not discard it because it is inconvenient and late. Either resolve it, or lower the confidence level of the affected line and rewrite that sentence, or hold the story. All three are ordinary outcomes, and the next section is about the third one.

:::reveal What is the negative check, in one question? ||| If this story were wrong, what would be true instead and where would that show up. Then spend ten minutes looking there rather than looking for more support.

:::reveal Why does searching only in the direction of your belief produce a false sense of strength? ||| Because supporting material exists for most claims, including false ones, so a file built that way looks strong and is untested.

:::reveal What is the innocent explanation, and why write it down? ||| The boring account of a pattern: coincidence, routine process, a coding change, an absence, a longstanding policy. Most patterns have one, and finding it is the hour that stopped a correction.

## Vocabulary
- **Negative check**: deliberately looking for the evidence that would disprove a story, run once before filing.
- **Confirmation drift**: the ordinary tendency to search in the direction of what you already believe, which experience does not remove.
- **Innocent explanation**: the routine account of a suspicious pattern, written down and checked before publication.
- **Skeptic's search terms**: querying a claim in the words somebody who doubts it would use.

## Sources
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/`,
    },
    {
      slug: "quiz-corroboration",
      title: "12 · Knowledge check: corroboration under pressure",
      section: "Section 3 · Corroboration under pressure",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is the test for whether two accounts are independent?",
            options: [
              "Whether the second could exist had the first not",
              "Whether the two people have met each other",
              "Whether both are willing to be named in print",
              "Whether both work outside the institution in question",
            ],
            correctIndex: 0,
            explanation:
              "If the second heard it from the first, read it in the first's post, or was briefed alongside them, you have one account arriving twice.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Which of these is an echo rather than corroboration?",
            options: [
              "Two officials briefed from the same memo",
              "A permit filed at the time and a witness with no connection",
              "A dispatch log and an unrelated photograph",
              "A court filing and an official on-record statement",
            ],
            correctIndex: 0,
            explanation:
              "With two outlets citing each other, a document plus a person whose knowledge comes from it, and a post plus its reprint.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Which echo pattern does the lesson call hardest to see?",
            options: [
              "Two people who were in the same room and have discussed it since",
              "Two outlets citing an unnamed original",
              "A social post and its reprint elsewhere",
              "A document and someone briefed from it",
            ],
            correctIndex: 0,
            explanation:
              "Their accounts converge the way accounts do, and neither person is aware of it.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Which kind of independence is strongest?",
            options: [
              "A record created at the time for another purpose",
              "A second person inside the same institution",
              "An institution's on-record statement",
              "A witness introduced by your first source",
            ],
            correctIndex: 0,
            explanation:
              "A log, a filing, or a timestamp cannot have been shaped by your story, which is exactly what makes it independent.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Which is weakest on the independence ranking?",
            options: [
              "A second person inside the same institution",
              "A physical artifact you have located",
              "A witness with no relationship to your first source",
              "A contemporaneous record from another process",
            ],
            correctIndex: 0,
            explanation:
              "It is still worth having. It is simply the least likely of the five to be free of the first account's influence.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Why does one contemporaneous record beat three consistent people?",
            options: [
              "It cannot have been shaped by your story",
              "Because documents are admissible and testimony is not",
              "Because records are quicker to obtain than interviews",
              "Because people misremember details more than records do",
            ],
            correctIndex: 0,
            explanation:
              "People are consistent for many reasons, including that they talked. A permit, a docket entry, a dispatch log, or a payment record cannot be.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does the catalog's NAACP course illustrate about independence?",
            options: [
              "Going and getting the evidence yourself is not an echo of anybody",
              "That institutional statements are the most reliable evidence",
              "That litigation records outrank eyewitness accounts",
              "That publication is the strongest form of corroboration",
            ],
            correctIndex: 0,
            explanation:
              "Walter White gathered the evidence institutions would not release, and the resulting record was strong enough to defeat a Supreme Court nomination.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What is the narrow, durable lesson a beat reporter takes from that example?",
            options: [
              "A first-hand observation is frequently obtainable in the same hour as a phone call",
              "That institutions should be bypassed wherever possible",
              "That historical methods do not transfer to modern reporting",
              "That evidence gathered personally requires no corroboration",
            ],
            correctIndex: 0,
            explanation:
              "And a call would often have produced only a statement, which is not evidence about the underlying claim.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does the sourcing chain record?",
            options: [
              "For each fact, what supports it and how that source knows",
              "Every person contacted during the reporting, in order",
              "The order in which checks were run against the deadline",
              "Which editor approved each disputed line",
            ],
            correctIndex: 0,
            explanation:
              "Two lines per fact. It takes minutes and it is what lets you answer honestly when an editor asks whether you have two sources or the same one twice.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What do you do when independence is genuinely unavailable?",
            options: [
              "Say so in the sentence carrying the claim",
              "Hold the story until a second source is found",
              "Attribute the claim to an unnamed source",
              "Move the claim to a closing paragraph",
            ],
            correctIndex: 0,
            explanation:
              "A fact clearly labeled single-sourced is defensible journalism. The same fact presented as established is not, and the difference costs one clause.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What kind of question should be put to an institution?",
            options: [
              "One with a checkable answer",
              "One that invites a statement of the institution's position",
              "One that gives the institution the whole story to respond to",
              "One that can be answered yes or no by a spokesperson",
            ],
            correctIndex: 0,
            explanation:
              "Whether a document exists, whether a person holds a position, whether a vote took place on a date, whether a figure is correct.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "Why is a precise question better than an invitation to comment?",
            options: [
              "It is much harder to answer with nothing",
              "It is more likely to reach a senior official",
              "It reduces the time the institution has to respond",
              "It removes the need to publish a no-comment",
            ],
            correctIndex: 0,
            explanation:
              "And a refusal to answer a precise question is itself informative in a way a declined comment is not.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What should be sent to an institution before publication?",
            options: [
              "The specific assertions you intend to publish about them, in writing",
              "The full draft of the story for review",
              "A list of every source you have spoken to",
              "The headline and the publication time",
            ],
            correctIndex: 0,
            explanation:
              "It is fairer, legally safer, and frequently produces the correction that saves you, because institutions respond to precise allegations by explaining a detail you had wrong.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is a no-comment?",
            options: [
              "Neither confirmation nor denial, and publishable as exactly that",
              "An implicit confirmation, since a denial would have been easy",
              "A refusal that should be omitted from the published piece",
              "Grounds to delay publication until a response arrives",
            ],
            correctIndex: 0,
            explanation:
              "Saying which specific questions were declined is more informative than the phrase and takes the same space.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What should be recorded about a denial?",
            options: [
              "Exact words, name, role, and whether it denies the fact or a characterization",
              "The time it arrived and who at the outlet received it",
              "Whether the spokesperson agreed to be quoted by name",
              "Whether the denial matches the institution's previous statements",
            ],
            correctIndex: 0,
            explanation:
              "A denial of the whole thing and a denial of a specific characterization are very different, and the second is common.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is a denial worth as evidence?",
            options: [
              "It tells you what the institution will say publicly",
              "It substantially reduces the likelihood the claim is true",
              "It settles the question absent contrary documentation",
              "It obliges the reporter to seek a third source",
            ],
            correctIndex: 0,
            explanation:
              "Which is worth having and is not evidence about the underlying claim.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is a non-denial denial?",
            options: [
              "A statement that answers a different question from the one asked",
              "A denial issued by someone without authority to give one",
              "A denial that arrives after the stated deadline",
              "A denial the institution later withdraws",
            ],
            correctIndex: 0,
            explanation:
              "It may dispute a characterization while leaving the fact untouched, or assert that a process was followed rather than that a thing did not happen.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "How do you catch a non-denial denial?",
            options: [
              "Read it against your decomposed claim list and mark which lines it addresses",
              "Ask the spokesperson to confirm the denial in writing",
              "Compare it against the institution's previous public statements",
              "Send it to the outlet's legal team for interpretation",
            ],
            correctIndex: 0,
            explanation:
              "Frequently the answer is none of them, which is itself a reportable fact about the response.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What makes a deadline given to an institution a real one?",
            options: [
              "A genuine time, a stated consequence, and honoring both",
              "A time short enough to prevent a coordinated response",
              "A time agreed with the institution in advance",
              "A time set by the outlet's publication schedule",
            ],
            correctIndex: 0,
            explanation:
              "A reporter who threatens a deadline and does not keep it teaches an institution that deadlines are negotiable, which costs every reporter at that outlet afterward.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is the negative check, in one question?",
            options: [
              "If this were wrong, what would be true instead and where would it show?",
              "What further evidence would make this story stronger?",
              "Which of my sources is least reliable, and why?",
              "What would an editor most likely object to?",
            ],
            correctIndex: 0,
            explanation:
              "Then spend ten minutes looking there. Not for more support, for the thing that would break it.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Why is the negative check necessary?",
            options: [
              "Supporting material exists for most claims, including false ones",
              "Because editors require a documented counter-argument",
              "Because sources withhold contrary evidence deliberately",
              "Because most stories contain at least one false element",
            ],
            correctIndex: 0,
            explanation:
              "Searching only in the direction of your belief produces a file that looks strong and is untested.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What does the lesson say about the bias the negative check corrects?",
            options: [
              "It is not a character flaw and does not go away with experience",
              "It affects inexperienced reporters more than senior ones",
              "It can be eliminated by working with a second reporter",
              "It only arises when a reporter has a personal stake",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the correction is a scheduled step rather than a resolution to be more careful.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Which is a concrete form of the negative check?",
            options: [
              "Searching the claim in the words a skeptic would use",
              "Reading your draft aloud to catch overstatement",
              "Asking an editor whether the story feels solid",
              "Checking that every source has been quoted accurately",
            ],
            correctIndex: 0,
            explanation:
              "With calling the person the story would embarrass, finding the document the innocent explanation implies, asking your best source what would change their mind, and having a colleague argue the opposite for five minutes.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What is the innocent explanation?",
            options: [
              "The boring account of a pattern, written down and checked",
              "The institution's own version of events",
              "The explanation a source offers without evidence",
              "The interpretation that causes least harm if published",
            ],
            correctIndex: 0,
            explanation:
              "A coincidence of timing, a routine process, a coding change in a data set, a personnel absence, a policy that has always worked that way. Most patterns have one.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "How does the lesson describe the hour spent finding an innocent explanation?",
            options: [
              "The hour that stopped a correction",
              "A wasted hour that deadline pressure rarely allows",
              "A courtesy to the institution being covered",
              "A step better handled after publication",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the boring explanation is written down and checked before publishing that a pattern is what it looks like.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "When in the process does the negative check run?",
            options: [
              "After you think you are finished and before you file",
              "At the start, before any supporting evidence is gathered",
              "Midway, once half the checks are complete",
              "After publication, as part of the postmortem",
            ],
            correctIndex: 0,
            explanation:
              "Ten minutes, run once. Short enough to survive a bad afternoon and late enough that you know which line is load-bearing.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What are the three outcomes when the negative check finds something?",
            options: [
              "Resolve it, lower the confidence and rewrite, or hold the story",
              "Publish anyway, correct later, or add a caveat at the end",
              "Consult an editor, consult a lawyer, or consult the source",
              "Delay, reassign, or drop the subject entirely",
            ],
            correctIndex: 0,
            explanation:
              "All three are ordinary outcomes, which is the argument the final section makes at length.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What must a reporter not do when the negative check finds something late?",
            options: [
              "Discard it because it is inconvenient",
              "Tell the editor before the deadline passes",
              "Rewrite the affected sentence at a lower confidence",
              "Hold the story until the point is resolved",
            ],
            correctIndex: 0,
            explanation:
              "Lateness is exactly when the finding matters most, because it is the last chance the process gets.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What is confirmation drift?",
            options: [
              "The ordinary tendency to search in the direction of what you believe",
              "The gradual weakening of a source's account over time",
              "The movement of a publication threshold under deadline",
              "The convergence of two witnesses' accounts after they talk",
            ],
            correctIndex: 0,
            explanation:
              "Experience does not remove it, which is why the correction is procedural.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Which question does the lesson suggest putting to your best source?",
            options: [
              "What would change your mind",
              "Who else should I be speaking to",
              "How confident are you in this account",
              "Would you be willing to say that on the record",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five concrete forms of the negative check, and it frequently produces the specific document you had not thought to look for.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What is a skeptic's search?",
            options: [
              "Querying a claim in the words somebody who doubts it would use",
              "Searching only sources hostile to the story's subject",
              "Searching for prior corrections on the same subject",
              "Searching without the reporter's own notes in view",
            ],
            correctIndex: 0,
            explanation:
              "Your own vocabulary is shaped by believing the story, and that shapes what a search returns.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Which pair does the lesson call very different, in a denial?",
            options: [
              "Denying the fact, and denying a characterization of it",
              "Denying on the record, and denying on background",
              "Denying in writing, and denying by telephone",
              "Denying promptly, and denying after a deadline",
            ],
            correctIndex: 0,
            explanation:
              "The second is common, and recording which one you received is what stops a story overstating what was denied.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is the value of publishing which questions an institution declined?",
            options: [
              "It is more informative than the phrase no comment",
              "It obliges the institution to answer them later",
              "It satisfies the legal requirement to seek comment",
              "It shifts responsibility for the omission to the institution",
            ],
            correctIndex: 0,
            explanation:
              "And it takes the same space in the story.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "Why is calling the institution the step where an hour is completed or wasted?",
            options: [
              "It depends entirely on how the question is asked",
              "Because institutions answer slowly regardless of the question",
              "Because a spokesperson can refuse any request",
              "Because comment must be sought before any other check",
            ],
            correctIndex: 0,
            explanation:
              "A vague invitation invites a statement. A precise question invites a fact or an informative refusal.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "Which is a contemporaneous record?",
            options: [
              "A dispatch log created at the time for operational reasons",
              "A statement issued once the reporter began asking",
              "A summary prepared by an official after the fact",
              "A recollection given by a witness the following week",
            ],
            correctIndex: 0,
            explanation:
              "Created at the time for a purpose unrelated to your story, which is what makes it impossible for your story to have shaped it.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What is the oldest rule in the trade, and how is it routinely satisfied falsely?",
            options: [
              "Two sources, satisfied by two sources who are the same source",
              "Seek comment, satisfied by a request nobody answered",
              "Attribute everything, satisfied by an unnamed source",
              "Correct promptly, satisfied by a silent edit",
            ],
            correctIndex: 0,
            explanation:
              "Getting the independence test right is the difference between corroboration and an echo.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "How long does the sourcing chain take to write?",
            options: [
              "Minutes",
              "An hour, which is why it is done only for enterprise pieces",
              "As long as the reporting itself",
              "It is written by the editor rather than the reporter",
            ],
            correctIndex: 0,
            explanation:
              "Two lines per fact, and it is what makes an editor's sourcing question answerable honestly and immediately.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does a document plus a person briefed from that document amount to?",
            options: [
              "One source",
              "Two independent sources",
              "A confirmed fact under the four-level system",
              "A contemporaneous record with a witness",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the named echo patterns, and it catches reporters because the two feel like different kinds of evidence.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does the innocent explanation check protect against?",
            options: [
              "Publishing that a pattern is what it looks like when it is not",
              "Publishing a pattern before an institution has commented",
              "Publishing a coincidence as though it were unprecedented",
              "Publishing an explanation without attributing it",
            ],
            correctIndex: 0,
            explanation:
              "Most patterns have a boring account, and finding it is cheaper than correcting the story that ignored it.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Which technique involves a colleague?",
            options: [
              "Asking them to argue the opposite case for five minutes",
              "Asking them to re-interview the primary source",
              "Asking them to read the draft for tone",
              "Asking them to check the sourcing chain against the draft",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five concrete forms of the negative check, and it is the cheapest of them.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Why does the lesson call the person a story would embarrass a negative-check step?",
            options: [
              "Giving them the specific assertion is how the disproof arrives",
              "Because their reaction indicates whether the story is true",
              "Because the outlet's policy requires contacting them",
              "Because a refusal to comment strengthens the story",
            ],
            correctIndex: 0,
            explanation:
              "It overlaps with the right of reply, and it is where an institution's correction of a detail you had wrong most often appears.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What does an institution's on-record statement rank as, in independence terms?",
            options: [
              "A real but middling form of independence",
              "The strongest available independent evidence",
              "An echo of whatever the institution was told",
              "Not independent at all, and therefore unusable",
            ],
            correctIndex: 0,
            explanation:
              "It sits below a contemporaneous record, a located artifact, and an unconnected witness, and above a second person inside the same institution.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What is the cost of a reporter who does not keep a stated deadline?",
            options: [
              "Every reporter at that outlet pays for it afterward",
              "The story loses its exclusivity",
              "The institution can complain to the editor",
              "The legal position on the right of reply weakens",
            ],
            correctIndex: 0,
            explanation:
              "It teaches an institution that deadlines from that outlet are negotiable.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What does the lesson say about sending the whole story to an institution?",
            options: [
              "Send the specific assertions about them, not the whole story",
              "Send the whole story, so the response is properly informed",
              "Send nothing, so the response is not coordinated",
              "Send the headline only, which is what they will react to",
            ],
            correctIndex: 0,
            explanation:
              "The specific assertions are what they can answer, and what they can correct if you have a detail wrong.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "Why is the ten-minute negative check timed late in the process?",
            options: [
              "You know by then which line is load-bearing",
              "Because earlier checks would have caught anything obvious",
              "Because deadline pressure improves focus",
              "Because an editor has usually read the draft by then",
            ],
            correctIndex: 0,
            explanation:
              "And it is short enough to survive a bad afternoon, which is what makes it a step that actually gets run.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What kind of evidence is a photograph you located yourself?",
            options: [
              "A physical artifact, high on the independence ranking",
              "A copy, and therefore not independent",
              "A contemporaneous record equivalent to a filing",
              "An echo of whoever pointed you to it",
            ],
            correctIndex: 0,
            explanation:
              "It sits second on the ranking, below a record created at the time for another purpose.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does a reporter gain by asking whether a named figure is correct?",
            options: [
              "A fact, or an informative refusal to give one",
              "A statement of the institution's overall position",
              "A commitment to release the underlying record",
              "A named spokesperson for future contact",
            ],
            correctIndex: 0,
            explanation:
              "Which is the whole argument for a checkable question over an invitation to comment.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is the practical difference between corroboration and an echo?",
            options: [
              "Whether the second account descends from the first",
              "Whether both accounts are on the record",
              "Whether both accounts agree in every detail",
              "Whether both accounts arrived within the same hour",
            ],
            correctIndex: 0,
            explanation:
              "It is the single distinction the two-source rule depends on, and the one it is most often satisfied without.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does the lesson say about a single-sourced fact that is labeled as such?",
            options: [
              "It is defensible journalism",
              "It should not be published at all",
              "It must appear in the final paragraph",
              "It requires the source to be named",
            ],
            correctIndex: 0,
            explanation:
              "The same fact presented as established is not defensible, and the difference costs one clause.",
            sourceLessonSlug: "what-counts-as-independent",
          },
        ],
      },
    },
    // ── Section 4 ───────────────────────────────────────────────────────────────────────────
    {
      slug: "not-publishing",
      title: "13 · The decision not to publish, as a professional act",
      section: "Section 4 · The decision",
      body: `This is the lesson the course exists for. Deciding not to run a story you cannot support is a skilled output of a working method, and treating it as a failure is what produces the corrections that damage an outlet for years.

**Name what is actually being decided.** Not whether the story is true, which you do not know, but whether what you have supports what you would publish. Those are different questions and only the second one is answerable from your file at 5:50.

**The three outcomes, all normal.** Publish it as it stands. Publish less: the part you can support, with the unresolved part named. Hold it and keep reporting. A method that can only produce the first outcome is not a method, it is a schedule.

**What holding actually costs, honestly.** Sometimes a competitor runs it. Sometimes the moment passes. Those are real costs and pretending otherwise is why reporters do not believe this lesson. What holding does not cost is your ability to report the story later, usually better, and with the thing that could not be confirmed either resolved or removed.

**What publishing wrong costs, also honestly.** A correction, which is survivable. The specific sources who will not speak to you again, which is worse. And the reader's ability to distinguish your outlet from anything else, which is the thing local journalism is actually selling and the only thing it cannot rebuild quickly.

**Write down why you held it.** Which line failed, what would settle it, and when you will check again. A held story with a note is a live story. A held story with no note is a story that quietly dies, and six months later nobody remembers there was anything there.

**Tell the sources.** Anyone who gave you an interview for a story you are not running should hear that from you, with one honest sentence, as the interviewing course in this track requires. It takes four minutes and it is why they take your call next time.

**And say it to the desk plainly.** Not that you need more time, which sounds like slowness. That the piece as written asserts something the reporting does not support, and here is the specific line. An editor can act on that; they cannot act on unease.

:::reveal What is actually being decided when a story is held? ||| Not whether it is true, which you do not know, but whether what you have supports what you would publish. Only the second is answerable from your file.

:::reveal Name the three normal outcomes of a verification process. ||| Publish as it stands, publish less with the unresolved part named, or hold and keep reporting. A method that can only produce the first is a schedule rather than a method.

:::reveal What does a held story need in order to stay alive? ||| A written note of which line failed, what would settle it, and when you will check again. Without it the story quietly dies and nobody remembers there was anything there.

## Vocabulary
- **Support test**: whether the file supports the sentence you would publish, as distinct from whether the claim is true.
- **Publish less**: running the supported part with the unresolved part explicitly named.
- **Held with a note**: a story parked with the failed line, the settling artifact, and a date to revisit.
- **The desk sentence**: telling an editor which specific line the reporting does not support, rather than asking for more time.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "publishing-uncertainty",
      title: "14 · Publishing uncertainty honestly",
      section: "Section 4 · The decision",
      body: `Most stories go out with something unresolved. Saying so precisely is a skill, and the reason readers experience some outlets as trustworthy and others as merely confident.

**Be specific rather than atmospheric.** It remains unclear whether the vote took place before or after the contract was signed is useful. Questions remain about the process is not, because it tells a reader nothing they could check or care about. Vagueness reads as hedging; specificity reads as rigor, and the two are opposite signals from the same instinct.

**Name what would settle it.** The minutes of the 12 March meeting would resolve the sequence, and the district has not released them. That sentence does four things at once: it states the uncertainty, it identifies the artifact, it attributes the gap, and it gives any reader with access a way to close it.

**Put the uncertainty where the claim is, not at the bottom.** A caveat in the last paragraph is a caveat most readers never reach, and it does not travel with a quotation or a share. If a claim is uncertain, the uncertainty belongs in the sentence that carries it.

**Distinguish what is unknown from what is disputed.** Unknown means nobody has the answer. Disputed means two parties assert different things, and then the reportable facts are who asserts what and what each offers as evidence. Writing a dispute as an unknown hides the evidence asymmetry, which is frequently the actual story.

**Do not manufacture balance out of uncertainty.** Presenting a well-evidenced account and a poorly-evidenced one as equally open questions is not neutrality; it misdescribes the state of the evidence, which is a factual error. Say what each side offers and let the difference be visible.

**Publish the note.** In an enterprise piece, a short section at the end saying what you could not confirm and what you asked for and did not get. It is the same discipline the rest of this catalog applies, it is what the capstone of this track is graded against, and readers consistently treat it as a reason to trust the rest.

:::reveal Why does "questions remain about the process" fail while a specific uncertainty succeeds? ||| Because vagueness gives a reader nothing to check or care about and reads as hedging, while a specific unresolved fact reads as rigor.

:::reveal What four things does naming the settling artifact do at once? ||| States the uncertainty, identifies the document that would resolve it, attributes the gap to whoever holds it, and gives any reader with access a way to close it.

:::reveal What is the difference between unknown and disputed, and why does it matter? ||| Unknown means nobody has the answer. Disputed means two parties assert different things, in which case who asserts what and what each offers as evidence are the reportable facts, and the evidence asymmetry is often the story.

## Vocabulary
- **Specific uncertainty**: naming exactly what is unresolved, as opposed to a general statement that questions remain.
- **Settling artifact**: the document or record that would close a gap, named in the story alongside who holds it.
- **In-sentence caveat**: placing uncertainty in the sentence carrying the claim rather than in a closing paragraph.
- **False balance**: presenting a well-evidenced and a poorly-evidenced account as equally open, which misstates the evidence.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "corrections-and-record",
      title: "15 · Corrections, updates, and the durable record",
      section: "Section 4 · The decision",
      body: `A correction is the only claim a news organization makes that a reader can independently verify, which is why how you handle one matters more than most of what surrounds it.

**Correct fast, plainly, and where the error was.** Fix the text, add a dated note saying what was wrong and what it now says, and do not bury it. A correction that describes the error is worth something; one that says the piece has been updated tells a reader nothing and reads as concealment.

**Distinguish the three things that get conflated.** A correction fixes something that was wrong. An update adds something that has happened since. A clarification addresses something accurate that was reasonably misread. Labeling them differently is honest, and labeling a correction as a clarification is the most common small dishonesty in the trade.

**Corrections travel worse than errors, so push them.** The original reached people through shares, aggregation, and search; the correction reaches whoever returns to the page. Post it wherever the story was posted, tell anyone who republished it, and if a source was harmed by the error, tell them before they find it.

**Keep the record of what you knew and when.** Your decomposed claim list, your confidence levels, your sourcing chain, and your negative check. When something turns out wrong, that file answers the only question that matters afterward, which is whether the process was sound and the outcome unlucky, or the process was skipped.

**Run the postmortem, briefly.** Which check would have caught it, and why was it not run. Almost always the answer is time, sequencing, or the negative check being skipped, and almost always the fix is a small change to the order things are done in rather than a resolution to be more careful.

**Where the track goes next.** This course is the last one that treats verification as a craft problem. The next is the legal frame you have been working inside the whole time: libel and the actual-malice standard, privacy, recording consent, minors, and shield protections, all of which change what a failure of verification costs.

:::reveal What distinguishes a correction, an update, and a clarification? ||| A correction fixes an error, an update adds something that has happened since, and a clarification addresses accurate material that was reasonably misread. Labeling a correction as a clarification is the common small dishonesty.

:::reveal Why must a correction be pushed rather than posted? ||| Because the error travelled through shares, aggregation, and search, while the correction only reaches whoever returns to the page.

:::reveal What question does a kept verification file answer after an error? ||| Whether the process was sound and the outcome unlucky, or the process was skipped. That is the only question that matters afterward.

## Vocabulary
- **Correction**: a dated public fix stating what was wrong and what it now says, placed where the error was.
- **Update versus clarification**: new developments, as against explaining accurate material that was reasonably misread.
- **Correction push**: actively distributing a correction to the channels and republishers the error reached.
- **Postmortem**: a short review of which check would have caught an error and why it was not run.

## Sources
- Society of Professional Journalists. (2014). *SPJ code of ethics*. https://www.spj.org/spj-code-of-ethics/
- Silverman, C. (Ed.). (2014). *Verification handbook*. European Journalism Centre. https://datajournalism.com/read/handbook/verification-1`,
    },
    {
      slug: "quiz-the-decision",
      title: "16 · Knowledge check: the decision",
      section: "Section 4 · The decision",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How does this course characterize the decision not to publish?",
            options: [
              "A skilled output of a working method",
              "A failure of nerve that experience should reduce",
              "An editor's call rather than a reporter's",
              "A last resort when legal review objects",
            ],
            correctIndex: 0,
            explanation:
              "Treating it as a failure is what produces the corrections that damage an outlet for years.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What is actually being decided when a story is held?",
            options: [
              "Whether what you have supports what you would publish",
              "Whether the claim at the center of it is true",
              "Whether a competitor is likely to publish first",
              "Whether the subject would object to publication",
            ],
            correctIndex: 0,
            explanation:
              "Only the first is answerable from your file at 5:50, and the two questions are constantly confused.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What are the three normal outcomes of a verification process?",
            options: [
              "Publish, publish less, or hold and keep reporting",
              "Publish, correct, or retract",
              "Publish, attribute, or anonymize",
              "Publish, delay, or reassign",
            ],
            correctIndex: 0,
            explanation:
              "A method that can only produce the first is not a method, it is a schedule.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does publishing less mean?",
            options: [
              "The supported part, with the unresolved part named",
              "A shorter version placed lower in the running order",
              "The story without any attribution to sources",
              "A summary with the details held for a follow-up",
            ],
            correctIndex: 0,
            explanation:
              "It is the middle outcome, and the one reporters most often forget is available.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does holding a story genuinely cost?",
            options: [
              "Sometimes a competitor runs it, and sometimes the moment passes",
              "The reporter's ability to report it later",
              "The source's willingness to speak again",
              "The outlet's legal position if it publishes afterward",
            ],
            correctIndex: 0,
            explanation:
              "Those are real costs, and pretending otherwise is why reporters do not believe this lesson.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does holding a story NOT cost?",
            options: [
              "Your ability to report it later, usually better",
              "The audience's attention on the day",
              "An exclusive, if a competitor moves first",
              "The editor's confidence in the reporting",
            ],
            correctIndex: 0,
            explanation:
              "With the unconfirmed element either resolved or removed by the time it runs.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does publishing wrong cost, in the order the lesson gives?",
            options: [
              "A correction, then specific sources, then the reader's ability to tell you apart",
              "Legal fees, then staff time, then audience trust",
              "The story, then the follow-up, then the beat",
              "An apology, then a retraction, then a policy review",
            ],
            correctIndex: 0,
            explanation:
              "The third is the thing local journalism is actually selling, and the only one that cannot be rebuilt quickly.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does a held story need in order to stay alive?",
            options: [
              "A note of which line failed, what would settle it, and when to check",
              "An editor's agreement to revisit it within a fixed period",
              "A source who has agreed to remain available",
              "A place in the outlet's planning calendar",
            ],
            correctIndex: 0,
            explanation:
              "A held story with no note quietly dies, and six months later nobody remembers there was anything there.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does a reporter owe a source when a story is not running?",
            options: [
              "To hear it from you, with one honest sentence",
              "Nothing, since unpublished work is an internal matter",
              "A written explanation of the editorial decision",
              "An offer to place the interview elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "It takes four minutes, as the interviewing course in this track requires, and it is why they take your call next time.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "How should a reporter raise a verification problem with the desk?",
            options: [
              "Name the specific line the reporting does not support",
              "Ask for more time to complete the reporting",
              "Say the story does not feel solid enough yet",
              "Suggest the piece run as an analysis instead",
            ],
            correctIndex: 0,
            explanation:
              "An editor can act on a specific line. They cannot act on unease, and asking for time sounds like slowness.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "How many stories go out with something unresolved?",
            options: [
              "Most",
              "Almost none, in a well-run newsroom",
              "Only enterprise pieces, never dailies",
              "Only those where an institution declined to comment",
            ],
            correctIndex: 0,
            explanation:
              "Saying so precisely is the skill, and the reason readers experience some outlets as trustworthy and others as merely confident.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Which is a useful statement of uncertainty?",
            options: [
              "It remains unclear whether the vote preceded the contract signature",
              "Questions remain about the process",
              "Some details could not be independently established",
              "The full picture is not yet available",
            ],
            correctIndex: 0,
            explanation:
              "Vagueness reads as hedging and specificity reads as rigor, and the two are opposite signals from the same instinct.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What four things does naming the settling artifact do?",
            options: [
              "States the gap, identifies the document, attributes the gap, and lets a reader close it",
              "Establishes liability, satisfies review, informs the source, and dates the claim",
              "Names the source, dates the record, cites the statute, and locates the office",
              "Confirms the claim, ranks the evidence, seeks comment, and invites correction",
            ],
            correctIndex: 0,
            explanation:
              "The minutes of the 12 March meeting would resolve the sequence, and the district has not released them.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Where does a caveat belong?",
            options: [
              "In the sentence carrying the claim",
              "In the final paragraph of the piece",
              "In an editor's note above the story",
              "In a footnote linked from the claim",
            ],
            correctIndex: 0,
            explanation:
              "A caveat at the bottom is one most readers never reach, and it does not travel with a quotation or a share.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What is the difference between unknown and disputed?",
            options: [
              "Nobody has the answer, against two parties asserting different things",
              "The reporter cannot check it, against the institution refusing to say",
              "It is unresolved now, against it being permanently unresolvable",
              "It concerns a fact, against it concerning an interpretation",
            ],
            correctIndex: 0,
            explanation:
              "With a dispute, the reportable facts are who asserts what and what each offers as evidence.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What does writing a dispute as an unknown hide?",
            options: [
              "The evidence asymmetry, which is frequently the story",
              "The identity of whoever raised the dispute",
              "The date on which the dispute began",
              "The institution's obligation to resolve it",
            ],
            correctIndex: 0,
            explanation:
              "Two parties asserting different things with very different evidence behind them is not an open question.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Why is manufactured balance a factual error rather than a stylistic one?",
            options: [
              "It misdescribes the state of the evidence",
              "It gives one party more space than the other",
              "It requires quoting a source who has not been verified",
              "It omits the reporter's own assessment",
            ],
            correctIndex: 0,
            explanation:
              "Presenting a well-evidenced and a poorly-evidenced account as equally open is not neutrality.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What is the note at the end of an enterprise piece?",
            options: [
              "What you could not confirm and what you asked for and did not get",
              "A list of every source who contributed to the reporting",
              "A summary of the piece's main findings for readers in a hurry",
              "A statement of the outlet's corrections policy",
            ],
            correctIndex: 0,
            explanation:
              "It is what the capstone of this track is graded against, and readers consistently treat it as a reason to trust the rest.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What is the only claim a news organization makes that a reader can independently verify?",
            options: [
              "A correction",
              "A named source's identity",
              "A linked primary document",
              "A byline",
            ],
            correctIndex: 0,
            explanation:
              "Which is why how a correction is handled matters more than most of what surrounds it.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does a proper correction contain?",
            options: [
              "A dated note saying what was wrong and what it now says",
              "A statement that the piece has been updated",
              "An apology from the reporter and the editor",
              "A link to the outlet's corrections policy",
            ],
            correctIndex: 0,
            explanation:
              "Placed where the error was. A note saying only that a piece has been updated tells a reader nothing and reads as concealment.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What distinguishes a correction from an update?",
            options: [
              "A correction fixes an error; an update adds what has happened since",
              "A correction is dated; an update is not",
              "A correction is written by an editor; an update by the reporter",
              "A correction appears at the top; an update at the bottom",
            ],
            correctIndex: 0,
            explanation:
              "And a clarification addresses accurate material that was reasonably misread. All three get conflated.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does the lesson call the most common small dishonesty in the trade?",
            options: [
              "Labeling a correction as a clarification",
              "Publishing a correction late in the day",
              "Correcting the text without a note",
              "Attributing an error to a source",
            ],
            correctIndex: 0,
            explanation:
              "Labeling the three things differently is honest; relabeling one of them is not.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "Why must a correction be pushed rather than posted?",
            options: [
              "The error travelled and the correction only reaches returners",
              "Because platforms suppress corrections in ranking",
              "Because outlets are required to notify republishers",
              "Because a posted correction is not legally sufficient",
            ],
            correctIndex: 0,
            explanation:
              "Post it wherever the story was posted, tell anyone who republished it, and tell a harmed source before they find it.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does the kept verification file answer after an error?",
            options: [
              "Whether the process was sound and unlucky, or skipped",
              "Which source supplied the incorrect information",
              "Whether the outlet is legally exposed",
              "How quickly the error was noticed",
            ],
            correctIndex: 0,
            explanation:
              "The decomposed claim list, the confidence levels, the sourcing chain, and the negative check together answer the only question that matters afterward.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does the postmortem ask?",
            options: [
              "Which check would have caught it, and why it was not run",
              "Who is responsible, and what the consequence should be",
              "Whether the source should be used again",
              "Whether the story should be unpublished entirely",
            ],
            correctIndex: 0,
            explanation:
              "Almost always the answer is time, sequencing, or a skipped negative check, and almost always the fix is a change to the order things are done in.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "Where does the track go after this course?",
            options: [
              "The legal frame: libel, privacy, recording, minors, shield protections",
              "Solutions journalism and what it is not",
              "The pitch and the shapes a story can take",
              "The capstone on a beat of the learner's choosing",
            ],
            correctIndex: 0,
            explanation:
              "All of which change what a failure of verification costs.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What is the support test?",
            options: [
              "Whether the file supports the sentence you would publish",
              "Whether two sources support the same claim",
              "Whether an editor supports running the piece",
              "Whether the institution supports the characterization",
            ],
            correctIndex: 0,
            explanation:
              "As distinct from whether the claim is true, which you do not know.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "Why does the lesson insist on stating what holding costs?",
            options: [
              "Pretending otherwise is why reporters do not believe the lesson",
              "Because editors require a cost estimate before agreeing",
              "Because the cost determines whether holding is permitted",
              "Because sources are entitled to know the reason for delay",
            ],
            correctIndex: 0,
            explanation:
              "A competitor running it and the moment passing are real, and naming them is what makes the rest of the argument credible.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "Which cost of publishing wrong does the lesson call worse than a correction?",
            options: [
              "The specific sources who will not speak to you again",
              "The legal exposure created by the error",
              "The time spent producing the correction",
              "The editor's reduced confidence in the reporter",
            ],
            correctIndex: 0,
            explanation:
              "And worse than that is the reader's ability to distinguish your outlet from anything else.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What is a specific uncertainty?",
            options: [
              "Naming exactly what is unresolved",
              "Attaching a probability to a disputed claim",
              "Marking a paragraph as unverified for the editor",
              "Publishing the claim with the source unnamed",
            ],
            correctIndex: 0,
            explanation:
              "As opposed to a general statement that questions remain, which tells a reader nothing they could check or care about.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Why does a bottom-of-story caveat fail?",
            options: [
              "Readers do not reach it and it does not travel with a share",
              "Editors routinely cut the last paragraph for space",
              "It reads as an admission rather than a qualification",
              "It cannot be indexed by search",
            ],
            correctIndex: 0,
            explanation:
              "Which is why an uncertain claim carries its uncertainty in the same sentence.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What are the reportable facts in a dispute?",
            options: [
              "Who asserts what, and what each offers as evidence",
              "Which party is more likely to be correct",
              "When the dispute began and who raised it",
              "Whether the dispute has been referred anywhere",
            ],
            correctIndex: 0,
            explanation:
              "Letting the difference in evidence be visible is the alternative to manufacturing balance.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What does the lesson say readers do with a published note of what could not be confirmed?",
            options: [
              "Treat it as a reason to trust the rest",
              "Skip it, since it appears at the end",
              "Read it as an admission the story is weak",
              "Use it to identify what to complain about",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the discipline is carried through the whole catalog rather than reserved for difficult stories.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What is a clarification, precisely?",
            options: [
              "Addressing accurate material that was reasonably misread",
              "Correcting a factual error without admitting one",
              "Adding a development that occurred after publication",
              "Restating a claim in simpler language",
            ],
            correctIndex: 0,
            explanation:
              "Which is why labeling a correction as one is dishonest rather than merely imprecise.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "Whom should you tell about a correction before they find it?",
            options: [
              "A source harmed by the error",
              "The competing outlet that reported the same thing",
              "The platform where the story was shared",
              "The institution named in the story",
            ],
            correctIndex: 0,
            explanation:
              "With posting it wherever the story was posted and telling anyone who republished it.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What is the usual answer a postmortem produces?",
            options: [
              "Time, sequencing, or a skipped negative check",
              "A source who deliberately misled the reporter",
              "An editor who overrode the reporter's judgment",
              "A legal review that arrived too late",
            ],
            correctIndex: 0,
            explanation:
              "And the fix is almost always a small change in the order things are done, rather than a resolution to be more careful.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does the course say a note beside a held story makes it?",
            options: [
              "A live story",
              "A legally protected record",
              "An editor's responsibility",
              "A candidate for another outlet",
            ],
            correctIndex: 0,
            explanation:
              "Which line failed, what would settle it, and when you will check again.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "Which sentence is the desk sentence?",
            options: [
              "The piece asserts something the reporting does not support, and here is the line",
              "I need more time before this is ready to run",
              "I am not comfortable with this story as written",
              "The sources are not as strong as I would like",
            ],
            correctIndex: 0,
            explanation:
              "An editor can act on that. They cannot act on unease.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does the course treat as the last craft lesson before the legal frame?",
            options: [
              "This one",
              "The interviewing course before it",
              "The records course at the start of the track",
              "The capstone at the end",
            ],
            correctIndex: 0,
            explanation:
              "Libel, privacy, recording, minors, and shield protections all change what a failure of verification costs.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What kind of signal does vagueness send to a reader?",
            options: [
              "Hedging",
              "Rigor",
              "Neutrality",
              "Legal caution",
            ],
            correctIndex: 0,
            explanation:
              "Specificity sends the opposite signal from the same instinct, which is why the wording of an uncertainty matters as much as the decision to state one.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What four artifacts make up the kept verification record?",
            options: [
              "Decomposed claims, confidence levels, sourcing chain, negative check",
              "Draft, edits, legal notes, and the published version",
              "Interview notes, recordings, transcripts, and consent records",
              "Records requests, denials, appeals, and released documents",
            ],
            correctIndex: 0,
            explanation:
              "Together they answer whether the process was sound and the outcome unlucky, or the process was skipped.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What does the lesson say about a note that only says a piece has been updated?",
            options: [
              "It tells a reader nothing and reads as concealment",
              "It is sufficient when the error was minor",
              "It is the standard form for a factual fix",
              "It is preferable when a source objects to being named",
            ],
            correctIndex: 0,
            explanation:
              "A correction that describes the error is worth something. One that does not is not a correction.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "Which outcome does the course say reporters most often forget is available?",
            options: [
              "Publishing the supported part with the gap named",
              "Holding the story indefinitely",
              "Publishing with a bottom-of-story caveat",
              "Handing the story to a colleague",
            ],
            correctIndex: 0,
            explanation:
              "It is the middle of the three normal outcomes, and it is what the confidence levels are designed to make possible.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What is the relationship between this lesson and the interviewing course?",
            options: [
              "Both require telling a source when a story is not running",
              "Both require a guardian's permission for minors",
              "Both treat attribution as a substitute for verification",
              "Both place caveats at the end of a piece",
            ],
            correctIndex: 0,
            explanation:
              "One honest sentence, four minutes, and it is why the source takes your call next time.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What is the fix a postmortem usually produces?",
            options: [
              "A small change in the order things are done",
              "A new rule added to the outlet's style guide",
              "A resolution to be more careful next time",
              "A change of source for that subject",
            ],
            correctIndex: 0,
            explanation:
              "Which is consistent with the course's opening claim that the binding constraint is sequencing.",
            sourceLessonSlug: "corrections-and-record",
          },
          {
            prompt: "What makes a correction survivable, in the lesson's account?",
            options: [
              "It is the least of the three costs of publishing wrong",
              "It is invisible to most of the audience",
              "It resets the outlet's legal exposure",
              "It restores the relationship with the source",
            ],
            correctIndex: 0,
            explanation:
              "Sources lost and reader discrimination lost are the two that are worse, and the second cannot be rebuilt quickly.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What should be published alongside an unresolved claim in an enterprise piece?",
            options: [
              "What was asked for and not obtained",
              "The full list of sources contacted",
              "The reporter's own estimate of what is likely true",
              "The institution's complete statement in full",
            ],
            correctIndex: 0,
            explanation:
              "Together with what could not be confirmed, which is the standard the whole track ends on.",
            sourceLessonSlug: "publishing-uncertainty",
          },
        ],
      },
    },
    {
      slug: "final-verification",
      title: "17 · Final: verification on deadline",
      section: "Section 4 · The decision",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What is the binding constraint in deadline verification?",
            options: [
              "Sequencing",
              "Access to willing sources",
              "The reporter's subject knowledge",
              "Whether a fact-checking desk is available",
            ],
            correctIndex: 0,
            explanation:
              "Price each check in minutes, hours, or days, then run the one that could kill the story first.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "What has an agency that never returns your call told you?",
            options: [
              "Nothing",
              "That the claim is probably true",
              "That the matter is disputed",
              "That the story may run as uncontested",
            ],
            correctIndex: 0,
            explanation:
              "Failing to disconfirm is not confirming, and the distinction has to be recorded per element.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Which parts of an early account are reliably wrong?",
            options: [
              "Numbers, names, and sequence",
              "That an event occurred at all",
              "The institution involved",
              "The general location",
            ],
            correctIndex: 0,
            explanation:
              "Publishing that something happened while holding the numbers is a technique rather than a compromise.",
            sourceLessonSlug: "the-clock",
          },
          {
            prompt: "Why can a story not be verified as a unit?",
            options: [
              "Only the assertions inside it are separately checkable",
              "Because verification requires more time than deadlines allow",
              "Because a story includes editorial framing as well as fact",
              "Because sources rarely address more than one assertion",
            ],
            correctIndex: 0,
            explanation:
              "A piece can be right about four lines and wrong about the fifth in a way that makes it a correction.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "Which line in a decomposed claim gets checked hardest?",
            options: [
              "The one that would most damage someone if wrong",
              "The one in the headline",
              "The one with the fewest sources",
              "The one the editor asked about",
            ],
            correctIndex: 0,
            explanation:
              "Frequently not the headline line. Getting a closure right and inflating the affected number harms the people whose number it inflated.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What is the most common deadline failure involving explanation?",
            options: [
              "A verified event fused to an unverified motive",
              "A verified motive attached to an unverified event",
              "An explanation quoted without attribution",
              "A motive published before comment was sought",
            ],
            correctIndex: 0,
            explanation:
              "The fix is to publish the event and attribute the explanation to whoever offered it.",
            sourceLessonSlug: "claim-decomposition",
          },
          {
            prompt: "What are the four confidence levels?",
            options: [
              "Confirmed, corroborated, reported, unverified",
              "Certain, probable, possible, doubtful",
              "Primary, secondary, tertiary, anecdotal",
              "Sourced, attributed, alleged, rumored",
            ],
            correctIndex: 0,
            explanation:
              "Each has a permitted form of words, and the wording is chosen from the level rather than the level from the wording.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "Why is attribution not a substitute for verification?",
            options: [
              "It shifts who said it, not whether it is true",
              "Because unnamed sources cannot be attributed",
              "Because readers ignore attribution clauses",
              "Because outlets remain liable for attributed claims",
            ],
            correctIndex: 0,
            explanation:
              "A reader takes the appearance of a claim in a news story as evidence somebody checked it.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "When is the making of a claim itself the news?",
            options: [
              "When an official alleged it, a suit asserts it, or a document says it",
              "When two outlets have already reported it",
              "When the subject has declined to comment",
              "When the claim concerns public money",
            ],
            correctIndex: 0,
            explanation:
              "And the frame has to survive into the body, or the piece reports an allegation and then treats it as established.",
            sourceLessonSlug: "confidence-levels",
          },
          {
            prompt: "What three things does a copy lose?",
            options: [
              "Context, metadata, and interrogability",
              "Accuracy, attribution, and legal protection",
              "Resolution, timestamps, and authorship",
              "Licensing, provenance, and archival status",
            ],
            correctIndex: 0,
            explanation:
              "Which is why most verification failures are failures to go back one more step toward the original.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What is a screenshot, in verification terms?",
            options: [
              "A lead, never evidence",
              "Evidence when it is dated",
              "A copy retaining the original's metadata",
              "Equivalent to an archive capture",
            ],
            correctIndex: 0,
            explanation:
              "Find the live item, a witness to it, or an archive capture, and if none exist, say in the story that you worked from a screenshot.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "Why capture a page at the moment you rely on it?",
            options: [
              "The live page is not guaranteed to exist next week",
              "Because outlets require archived copies",
              "Because captures carry legal weight",
              "Because captures include metadata the page omits",
            ],
            correctIndex: 0,
            explanation:
              "A broken link is not a source, and a dated capture is a durable artifact you can cite.",
            sourceLessonSlug: "original-not-copy",
          },
          {
            prompt: "What are the four provenance questions?",
            options: [
              "Source, date, location, motivation",
              "Who, what, where, when",
              "Origin, spread, reach, effect",
              "Author, publisher, licence, format",
            ],
            correctIndex: 0,
            explanation:
              "They work on a photograph, a document, a data set, and a rumor equally.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Where do most false claims live?",
            options: [
              "In the gap between when material was made and when it surfaced",
              "In fabricated documents produced to order",
              "In synthetic images generated by software",
              "In quotations attributed to the wrong person",
            ],
            correctIndex: 0,
            explanation:
              "Genuine old material relabeled as new is easier to produce and harder to catch than a fabrication.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "How should embedded file metadata be treated?",
            options: [
              "As one input that agrees or disagrees with the others",
              "As authoritative for date and place",
              "As worthless because it is editable",
              "As sufficient when it matches the source's account",
            ],
            correctIndex: 0,
            explanation:
              "Easily stripped, easily edited, and often simply wrong because a device clock was wrong.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "Why does provenance beat detection for synthetic media?",
            options: [
              "Detection tools are unreliable in both directions",
              "Because generated media always carries a watermark",
              "Because detectors cannot process long video",
              "Because provenance is faster to establish",
            ],
            correctIndex: 0,
            explanation:
              "A generated artifact has no genuine upstream, no consistent earlier appearances, and no location that survives comparison.",
            sourceLessonSlug: "source-date-location-motivation",
          },
          {
            prompt: "What are the three information-disorder categories?",
            options: [
              "Misinformation, disinformation, malinformation",
              "Error, rumor, fabrication",
              "Bias, spin, propaganda",
              "Hoax, satire, parody",
            ],
            correctIndex: 0,
            explanation:
              "False without intent to harm, false and deliberately harmful, and true but deployed to harm.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "Which category do reporters handle worst?",
            options: [
              "Malinformation, because nothing in the item is false",
              "Disinformation, because intent is unprovable",
              "Misinformation, because it spreads fastest",
              "All three equally",
            ],
            correctIndex: 0,
            explanation:
              "A true document in a frame that makes it mean something it did not. No fact check of the item catches it; the check is what surrounded it and what is missing.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "How should a reporter cover a false claim they must address?",
            options: [
              "Lead with what is true, describe the claim in your own words",
              "Quote the claim exactly so readers recognize it",
              "Open with the claim and refute it point by point",
              "Decline to cover it, since coverage amplifies it",
            ],
            correctIndex: 0,
            explanation:
              "And do not build the piece around it. The point is that a reader leaves knowing what is so.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What can be reported about a false claim without asserting intent?",
            options: [
              "What was published, by whom, how it spread, and what it omitted",
              "That the publisher knew it was false",
              "That it was designed to mislead a target audience",
              "That the publisher has deceived before",
            ],
            correctIndex: 0,
            explanation:
              "Deliberateness is a claim about a mind and usually requires evidence you do not have on deadline.",
            sourceLessonSlug: "information-disorder",
          },
          {
            prompt: "What is the independence test?",
            options: [
              "Whether the second account could exist had the first not",
              "Whether both sources agree in every detail",
              "Whether both sources will be named",
              "Whether both sources are outside the institution",
            ],
            correctIndex: 0,
            explanation:
              "If the second travelled through the first, you have one account arriving twice.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Which is the hardest echo pattern to see?",
            options: [
              "Two people who were in the same room and have since discussed it",
              "Two outlets citing each other",
              "A social post and its reprint",
              "A document and someone briefed from it",
            ],
            correctIndex: 0,
            explanation:
              "Their accounts converge the way accounts do, and neither person is aware of it.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "Why does one contemporaneous record beat three consistent people?",
            options: [
              "It cannot have been shaped by your story",
              "Because documents are legally stronger",
              "Because records are faster to obtain",
              "Because witnesses misremember more than records",
            ],
            correctIndex: 0,
            explanation:
              "A permit, a docket entry, a dispatch log, or a payment record was created for another purpose at the time.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What does the catalog's NAACP course illustrate about independence?",
            options: [
              "Evidence you gathered yourself is not an echo of anybody",
              "That institutional statements outrank witnesses",
              "That litigation records are the strongest evidence",
              "That publication is a form of corroboration",
            ],
            correctIndex: 0,
            explanation:
              "Walter White gathered evidence institutions would not release, and the record was strong enough to defeat a Supreme Court nomination.",
            sourceLessonSlug: "what-counts-as-independent",
          },
          {
            prompt: "What kind of question should be put to an institution?",
            options: [
              "One with a checkable answer",
              "One inviting a statement of position",
              "One presenting the whole story for response",
              "One answerable yes or no by a spokesperson",
            ],
            correctIndex: 0,
            explanation:
              "A precise question is hard to answer with nothing, and a refusal to answer it is itself informative.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What should be sent in writing before publication?",
            options: [
              "The specific assertions you intend to publish about them",
              "The complete draft of the story",
              "A list of sources consulted",
              "The intended headline and publication time",
            ],
            correctIndex: 0,
            explanation:
              "Fairer, legally safer, and frequently the route by which an institution corrects a detail you had wrong.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is a non-denial denial, and how is it caught?",
            options: [
              "A response addressing a different question, caught against the decomposed list",
              "A denial from an unauthorized person, caught by checking their role",
              "A late denial, caught by the stated deadline",
              "A denial later withdrawn, caught by following up",
            ],
            correctIndex: 0,
            explanation:
              "Mark which of your lines the response actually addresses. Frequently the answer is none of them.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is a denial worth as evidence about the claim?",
            options: [
              "Nothing, though it tells you what will be said publicly",
              "Substantial weight against the claim",
              "Enough to hold the story pending further checks",
              "Enough to publish the claim as disputed",
            ],
            correctIndex: 0,
            explanation:
              "Record the exact words, name, role, and whether it denies the fact or only a characterization.",
            sourceLessonSlug: "official-confirmation",
          },
          {
            prompt: "What is the negative check?",
            options: [
              "If this were wrong, what would be true instead and where would it show",
              "What further evidence would strengthen this",
              "Which source is weakest and why",
              "What an editor would most likely object to",
            ],
            correctIndex: 0,
            explanation:
              "Ten minutes, run once, after you think you are finished and before you file.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "Why is the negative check necessary?",
            options: [
              "Supporting material exists for most claims, including false ones",
              "Because sources deliberately withhold contrary evidence",
              "Because editors require a documented counter-argument",
              "Because most stories contain at least one false element",
            ],
            correctIndex: 0,
            explanation:
              "Searching in the direction of your belief produces a file that looks strong and is untested, and experience does not remove the tendency.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What is the innocent explanation, and why check it?",
            options: [
              "The boring account of a pattern, and finding it stops a correction",
              "The institution's own version, and publishing it is fair",
              "The least harmful reading, and it protects the outlet",
              "The source's own interpretation, and it must be attributed",
            ],
            correctIndex: 0,
            explanation:
              "A coincidence of timing, a routine process, a coding change, an absence, a longstanding policy. Most patterns have one.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What are the three responses when the negative check finds something?",
            options: [
              "Resolve it, lower the confidence and rewrite, or hold",
              "Publish and correct later, caveat, or reassign",
              "Consult an editor, a lawyer, or the source",
              "Delay, drop, or hand to another desk",
            ],
            correctIndex: 0,
            explanation:
              "Do not discard the finding because it is inconvenient and late. All three responses are ordinary.",
            sourceLessonSlug: "the-negative-check",
          },
          {
            prompt: "What is actually being decided when a story is held?",
            options: [
              "Whether the file supports the sentence you would publish",
              "Whether the underlying claim is true",
              "Whether a competitor will publish first",
              "Whether the subject would object",
            ],
            correctIndex: 0,
            explanation:
              "The second is not answerable from a file at 5:50, and confusing the two is what makes holding feel like failure.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What are the three normal outcomes of verification?",
            options: [
              "Publish, publish less, or hold and keep reporting",
              "Publish, correct, or retract",
              "Publish, delay, or reassign",
              "Publish, attribute, or anonymize",
            ],
            correctIndex: 0,
            explanation:
              "A method that can only produce the first is a schedule rather than a method.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "What does a held story need to stay alive?",
            options: [
              "A note of the failed line, the settling artifact, and a date to check",
              "An editor's agreement to revisit it",
              "A source who remains available",
              "A slot in the outlet's planning calendar",
            ],
            correctIndex: 0,
            explanation:
              "Without it the story quietly dies and six months later nobody remembers there was anything there.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "How should a verification problem be put to the desk?",
            options: [
              "Name the line the reporting does not support",
              "Ask for more time to finish reporting",
              "Say the story does not feel solid",
              "Propose running it as analysis instead",
            ],
            correctIndex: 0,
            explanation:
              "An editor can act on a line. They cannot act on unease.",
            sourceLessonSlug: "not-publishing",
          },
          {
            prompt: "Which is a useful statement of uncertainty?",
            options: [
              "It remains unclear whether the vote preceded the signature",
              "Questions remain about the process",
              "Some details could not be established",
              "The full picture is not yet available",
            ],
            correctIndex: 0,
            explanation:
              "Vagueness reads as hedging; specificity reads as rigor.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Where does a caveat belong?",
            options: [
              "In the sentence carrying the claim",
              "In the closing paragraph",
              "In an editor's note above the piece",
              "In a linked footnote",
            ],
            correctIndex: 0,
            explanation:
              "A caveat at the bottom is one most readers never reach, and it does not travel with a quotation or a share.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "Why is manufactured balance a factual error?",
            options: [
              "It misdescribes the state of the evidence",
              "It allocates unequal space to the parties",
              "It requires quoting an unverified source",
              "It omits the reporter's assessment",
            ],
            correctIndex: 0,
            explanation:
              "Say what each side offers and let the difference be visible, which is the alternative to presenting them as equally open.",
            sourceLessonSlug: "publishing-uncertainty",
          },
          {
            prompt: "What distinguishes a correction, an update, and a clarification?",
            options: [
              "Fixing an error, adding a development, and explaining a reasonable misreading",
              "Who writes it, when it runs, and where it appears",
              "Whether it is dated, signed, or linked",
              "Whether the source, the editor, or a reader raised it",
            ],
            correctIndex: 0,
            explanation:
              "Labeling a correction as a clarification is the most common small dishonesty in the trade.",
            sourceLessonSlug: "corrections-and-record",
          },
        ],
      },
    },
  ],
};
