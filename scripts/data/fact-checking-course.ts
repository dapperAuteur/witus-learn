import type { AuthoredCourse } from "./authored-course";

// RSRCH-04 of the Researcher track. Plan: plans/69-researcher-track.md.
//
// THE MOST DIRECTLY EMPLOYABLE COURSE IN THE TRACK. Fact-checking is a defined role with a defined
// method, and the method is teachable in a way that "be careful" is not.
//
// THE DISCIPLINE THIS COURSE HAS TO INSTALL: a checker verifies against the SOURCE, not against
// another account. Everything else here is machinery around that one habit. The commonest failure in
// amateur checking is confirming a claim by finding somebody else who also said it, which
// establishes only that the claim circulates.
//
// DO NOT CONFUSE THIS WITH EDITING OR WITH DEBUNKING. A checker is not improving the prose and is
// not adjudicating public disputes. They are establishing whether each assertion in a specific piece
// is supported, and reporting it. Keeping that boundary is what makes the role work with writers
// rather than against them, which is lesson 9.

export const FACT_CHECKING_COURSE: AuthoredCourse = {
  title: "Fact-Checking as a Discipline",
  description:
    "The checker's job, done properly: annotate every assertion, back-check each one to its actual source rather than to another article, grade what cannot be confirmed, and hand it back in a form the writer can act on. A defined role with a defined method, and the most directly hireable skill in the Researcher track.",
  lessons: [
    {
      slug: "fc-what-a-checker-does",
      title: "1 · What a checker actually does",
      section: "Part 1 · The method",
      body: `Fact-checking is not proofreading, not editing, and not settling public arguments. It is one job, described precisely:

> **Establish, for each assertion in a specific piece, whether it is supported by a source that actually says it, and report what you found.**

Note what is excluded. Not whether the piece is good. Not whether the argument holds. Not whether you agree. A checker who starts editing has left their role and will be less useful and less welcome.

## What a checker produces

Not a verdict on the piece. **An annotated copy**, in which every checkable assertion carries a mark showing its status and, where relevant, what the source actually supports.

That output is why the role works. The writer keeps authorship and makes the decisions; the checker supplies evidence about each claim. Nobody has to win an argument for the process to function.

## What counts as checkable

More than people expect. Names, dates, titles, numbers, quotations, sequences of events, causal claims, superlatives, characterisations of what a document or a study says, and anything attributed to a person.

**Superlatives deserve special attention.** "First," "largest," "only," and "never" are the claims most likely to be wrong and least likely to have been checked, because they feel like colour rather than fact.

## The stance

You are not adversarial and you are not credulous. You are establishing what can be shown, in a defined time, and reporting the rest honestly.

The best checkers are notably calm about finding errors, because finding errors is the job working correctly rather than a confrontation.

:::reveal Why is an annotated copy a better deliverable than a verdict on whether the piece is accurate? ||| Because it keeps authorship and decisions with the writer while giving them evidence claim by claim. A verdict invites a dispute about the piece; an annotation invites a decision about one sentence.

## Sources

Poynter Institute. (n.d.). *Fact-checking resources*. https://www.poynter.org/fact-checking/

American Press Institute. (n.d.). *Accuracy and verification*. https://www.americanpressinstitute.org/`,
    },
    {
      slug: "fc-annotate-everything",
      title: "2 · Annotate first, check second",
      section: "Part 1 · The method",
      recallContent: [
        {
          prompt: "State the fact-checker's job in one sentence, and name something explicitly outside it.",
          answer: "Establish whether each assertion in a piece is supported by a source that actually says it, and report what you found. Outside it: whether the piece is good, whether the argument holds, and whether you agree.",
        },
      ],
      body: `The first pass does no checking at all. It marks up the piece.

## The pass

Go through the text and mark **every** assertion that could be wrong. Not the ones that look doubtful. Every one.

Marking only what looks suspicious means checking what you already distrust, which finds nothing you did not suspect. **The errors that get published are the ones that look fine**, and the only defence is a mechanical pass that does not rely on your instinct.

## What to mark

Anything with a truth value: every name, date, number, title, place, quotation, attribution, sequence, comparison and superlative. Also implied claims, which are the ones checkers miss.

"The company, which had already been fined twice, announced..." contains three checkable claims: that it was fined, that it happened twice, and that both fines preceded the announcement. A checker who ticks "fined twice" and moves on has missed the sequencing.

## Number them

Every marked claim gets an identifier. Numbering is not bureaucracy; it does three things:

- It lets you report per claim rather than per paragraph.
- It lets the writer respond to a specific item.
- It stops the two of you talking past each other about "that bit in the third section."

## Then sort by cost

Before starting, sort into: instant, standard, and expensive or possibly unresolvable.

Do the instant ones first to clear the field, then the standard ones, then attack the expensive ones with what remains. The failure mode is spending your whole budget on the hardest claim and returning a piece where forty easy items were never looked at.

:::reveal Why does marking up every assertion beat marking the ones that look doubtful? ||| Because the errors that get published are the ones that look fine. Marking only what you already distrust confirms your instincts and finds nothing beyond them; a mechanical pass does not depend on instinct at all.

## Sources

Poynter Institute. (n.d.). *How to fact-check*. https://www.poynter.org/fact-checking/

Committee to Protect Journalists. (n.d.). *Editorial standards resources*. https://cpj.org/`,
    },
    {
      slug: "fc-back-check-to-source",
      title: "3 · Back-check to the source, not to another article",
      section: "Part 1 · The method",
      recallContent: [
        {
          prompt: "Why number each marked claim?",
          answer: "So findings can be reported per claim, the writer can respond to a specific item, and neither of you argues about which bit of the third section you mean.",
        },
      ],
      body: `This is the lesson the whole course exists for.

> **A claim is confirmed when a source that would know says it. It is not confirmed by finding somebody else who repeated it.**

## Why repetition looks like confirmation

Search rewards popularity. A claim that circulates widely returns many results, each apparently independent, and each of them may be quoting the same original, which may be wrong.

This is how a wrong figure becomes established. One outlet publishes it, twenty aggregate it, and a checker who counts sources sees twenty confirmations of something nobody has verified since the first publication.

## The discipline

**Trace to the origin every time.** If an article cites a study, read the study rather than the article. If a study cites a dataset, look at the dataset when the claim turns on the number.

**Ask who would know.** Different claims have different authoritative sources: a company's founding date is in its incorporation record, not in its marketing copy. A person's title is confirmed by their employer. A statistic is confirmed by the body that produced it.

**Count independent sources, not repetitions.** Three outlets all citing one press release is one source.

**Check that the source says what the piece says it says.** A remarkable share of errors are not invented facts but a study's finding stated more strongly than the study stated it, or a caveat dropped.

## When you cannot reach the origin

Say so, and say what you did reach. "Confirmed against the agency's published table" and "confirmed against a news report citing the agency" are different statuses and the writer needs to know which one they have.

:::reveal Twenty outlets report the same figure. What have you established, and what would actually confirm it? ||| Only that the figure circulates. If they all trace to one press release, that is one source repeated twenty times. Confirmation requires reaching the body that produced the figure and seeing that it says what is being reported.

## Sources

American Press Institute. (n.d.). *Verification and independence*. https://www.americanpressinstitute.org/

International Fact-Checking Network. (n.d.). *Code of principles*. https://www.poynter.org/ifcn/`,
    },
    {
      slug: "fc-grades-of-confidence",
      title: "4 · Grades, not a tick",
      section: "Part 1 · The method",
      recallContent: [
        {
          prompt: "Twenty outlets report the same figure. What has that established?",
            answer: "Only that the figure circulates. If they all trace to one release it is a single source repeated, and confirmation still requires reaching the body that produced it.",
        },
      ],
      body: `A binary tick loses the information the writer most needs. Use grades, keep them few, and define them where the writer can see them.

A workable set:

**Confirmed.** A source that would know says this, and I saw it. Record which source.

**Confirmed as reported.** The piece accurately reports what a source says, but that source is not itself authoritative. Common with claims about what somebody stated.

**Partially supported.** The source supports some of the claim. **Say precisely which part**, because this is where most rewrites happen.

**Unconfirmed.** I could not establish it in the time available. Say where you looked.

**Contradicted.** A source that would know says otherwise. Give it.

**Not checkable.** Opinion, prediction, or a characterisation with no factual content. Marking these explicitly stops them being mistaken for oversights.

## Why "partially supported" is the most valuable grade

Most errors are not fabrications. They are overstatements: a qualified finding stated flatly, a local result described as general, a range reported as a point.

A tick hides all of that. "Partially supported: the study found this in one age group only, and the piece states it without that limit" tells the writer exactly what to change, and usually the fix is four words.

## Keep the record with the grade

Each graded claim carries where you looked and what it said. That record is what makes the check defensible later, and it is what lets somebody else pick the piece up.

:::reveal Which grade catches the commonest kind of published error, and what does that error usually look like? ||| Partially supported. Most errors are overstatements rather than fabrications: a qualified finding reported flatly, a result from one group generalised, or a range given as a single figure.

## Sources

International Fact-Checking Network. (n.d.). *Code of principles*. https://www.poynter.org/ifcn/

Poynter Institute. (n.d.). *Fact-checking methodology*. https://www.poynter.org/fact-checking/`,
    },
    {
      slug: "fc-check-the-method",
      title: "5 · Knowledge check: the method",
      section: "Part 1 · The method",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why should a checker mark up every assertion rather than only the doubtful ones?",
            options: [
              "The errors that reach publication are the ones that look fine to a reader",
              "Editors require a complete annotation before a piece can enter the production queue",
              "Marking selectively makes it harder to number claims consistently across sections",
              "A complete markup allows the check to be divided between several checkers",
            ],
            correctIndex: 0,
            explanation:
              "Checking only what you already distrust confirms your instincts and finds nothing beyond them. A mechanical pass is the only method that does not depend on the checker's suspicion being correct.",
            sourceLessonSlug: "fc-annotate-everything",
          },
          {
            prompt: "Twenty outlets carry the same statistic. What has the checker established?",
            options: [
              "That the figure circulates, which is not the same as it being verified",
              "That the figure is reliable, since independent outlets would catch an error",
              "That the figure originates from a source considered authoritative by the field",
              "That the figure has been checked by at least one of the outlets publishing it",
            ],
            correctIndex: 0,
            explanation:
              "If all twenty trace to one release, that is one source repeated. Search rewards popularity, so wide circulation is evidence about circulation and about nothing else.",
            sourceLessonSlug: "fc-back-check-to-source",
          },
          {
            prompt: "Which grade catches the most common kind of published error?",
            options: [
              "Partially supported, because most errors are overstatements rather than inventions",
              "Contradicted, because most errors reverse what the underlying source actually said",
              "Unconfirmed, because most errors rest on sources that cannot be located at all",
              "Not checkable, because most errors turn out to be opinion presented as fact",
            ],
            correctIndex: 0,
            explanation:
              "A qualified finding stated flatly, a single-group result generalised, a range given as a point. A binary tick hides all of these, and naming precisely which part is supported usually reduces the fix to a few words.",
            sourceLessonSlug: "fc-grades-of-confidence",
          },
          {
            prompt: "A piece states that a study found something, and the study found it only in one age group. How should this be graded and reported?",
            options: [
              "Partially supported, naming the limit the piece omitted",
              "Contradicted, since the piece asserts something the study does not support",
              "Confirmed as reported, since the piece accurately names its source",
              "Not checkable, since interpreting a study's scope is an editorial judgment",
            ],
            correctIndex: 0,
            explanation:
              "The study does support the finding, within a limit the piece dropped. Naming the omitted limit is what lets the writer fix it, and it is a materially different situation from the study saying the opposite.",
            sourceLessonSlug: "fc-grades-of-confidence",
          },
        ],
      },
    },
    {
      slug: "fc-quotes-and-attribution",
      title: "6 · Quotes, attributions and characterisations",
      section: "Part 2 · Hard categories",
      body: `Quotations feel like the safest material in a piece and are among the most error-prone, because a quote can be accurate word for word and still wrong.

## What to check on a quotation

**The words**, against a recording, a transcript or the original publication. Not against another article quoting it.

**The speaker.** Misattribution is common, especially for anything memorable.

**The context.** A sentence lifted from a passage that qualified it is accurate and misleading, which is the specific failure a checker exists to catch.

**When and where it was said**, since a position may have changed.

**Whether the person exists and holds the title given.** Names and titles drift.

## Characterisations are quotes without quotation marks

"The report criticised the agency." "The study suggests a link." "She dismissed the idea."

Each is a claim about what a document or person conveyed, and each is checkable against the thing itself. These are missed constantly because they carry no quotation marks to signal that something is being reported.

**Check them against the source in the same way**, and expect to find overstatement more often than error: "suggests" where the study said "is consistent with," "criticised" where the report noted.

## Paraphrase and tidying

Cleaning up a quotation for readability changes what somebody said. Practice varies between publications, so ask what the standard is, then apply it consistently and flag anything that alters meaning rather than only fluency.

:::reveal How can a quotation be accurate word for word and still be a fact-checking failure? ||| If the surrounding passage qualified it and the qualification was left out. The words are right and the meaning conveyed is not, which is exactly the kind of error a checker exists to catch.

## Sources

American Press Institute. (n.d.). *Attribution and sourcing*. https://www.americanpressinstitute.org/

Poynter Institute. (n.d.). *Ethics and standards*. https://www.poynter.org/ethics-trust/`,
    },
    {
      slug: "fc-numbers-and-images",
      title: "7 · Numbers, and images",
      section: "Part 2 · Hard categories",
      recallContent: [
        {
          prompt: "How can a quotation be word-perfect and still be a checking failure?",
          answer: "If a qualification in the surrounding passage was dropped. The words are accurate and the meaning conveyed is not.",
        },
      ],
      body: `## Numbers

Every number carries three checkable things beyond the digits: **what was counted, who counted it, and what it is being compared with.** The catalog's own *How to Read a Number* course is the long version; here is the checker's short list.

- **The figure itself**, against the producing body rather than a report of it.
- **The unit and the denominator.** A rate and a count are different claims.
- **The date.** Figures are revised, and a superseded number is a real error.
- **The comparison.** "Twice as many as last year" needs both numbers.
- **The precision.** A figure reported more precisely than its source supports is an error even when it rounds to the same thing.

**A number's context is where errors live.** The digits are usually right and the framing is usually the problem.

## Images and video

An image makes a claim: this is that place, that person, that moment. All three are checkable.

- **Provenance.** Where did it come from, and is there an earlier appearance of it? An image circulating with a story is frequently older than the story.
- **What it depicts**, against a caption from the source rather than from whoever shared it.
- **Whether it has been altered or cropped**, and whether the crop changes what it shows.
- **Whether it is what it claims to be at all**, which now includes synthetic material.

**Treat an uncredited image as unverified.** A credit that names a photographer, a date and a holder can be checked; "via social media" cannot.

:::reveal Give two things a checker verifies about a photograph beyond whether it has been digitally altered. ||| Any two of: its provenance and whether it appeared earlier elsewhere, what it actually depicts according to its original caption, when and where it was taken, and whether a crop changes what it appears to show.

## Sources

First Draft. (n.d.). *Visual verification guide*. https://firstdraftnews.org/

Poynter Institute. (n.d.). *Fact-checking images and video*. https://www.poynter.org/fact-checking/`,
    },
    {
      slug: "fc-when-the-writer-disagrees",
      title: "8 · When the writer disagrees",
      section: "Part 2 · Hard categories",
      recallContent: [
        {
          prompt: "Name two things a checker verifies about a number beyond the digits.",
          answer: "Any two of: what was counted, who counted it, the unit and denominator, the date, the comparison, and whether the precision exceeds what the source supports.",
        },
      ],
      body: `It will happen, and how you handle it decides whether anyone wants to work with you again.

## Start from the right assumption

The writer usually knows more about the subject than you do. They have spent weeks on it and you have spent hours. **They also cannot see their own piece freshly, which is the entire reason you exist.**

Both are true. A checker who assumes the writer is careless will be wrong most of the time and will be resented; a checker who defers will find nothing.

## Report findings, not verdicts

There is a large difference between these two sentences:

- "This is wrong."
- "The study says this held in one age group. The sentence states it generally. Here is the passage."

The second is checkable by the writer, points at the fix, and does not require anyone to concede anything. It also survives being forwarded to an editor without reading as an accusation.

## When you still disagree

**Escalate the finding, not the argument.** Put the claim, the source, and what it says in front of whoever decides. Do not relitigate.

**Record your position.** If a piece publishes something you graded contradicted, your annotation should show that you said so, with the source. That is not defensiveness; it is the record doing its job.

**Accept that the decision is not yours.** A publication may decide to run a claim you could not confirm, with hedged wording or with a different attribution. Your job was to make the risk visible, and you did it.

## The thing that makes checkers trusted

Consistency. A checker who flags everything at the same volume becomes noise, and a checker who saves objections for claims they personally dislike becomes an opponent.

**Grade by evidence, always, including when the claim is one you would like to be true.** That is the whole reputation.

:::reveal Why is "the study found this in one age group; the sentence states it generally" more effective than "this is wrong"? ||| Because it is checkable by the writer, points directly at the fix, and requires nobody to concede anything. It also reads as a finding rather than an accusation if it is forwarded to an editor.

## Sources

American Press Institute. (n.d.). *Working with editors and standards desks*. https://www.americanpressinstitute.org/

International Fact-Checking Network. (n.d.). *Code of principles*. https://www.poynter.org/ifcn/`,
    },
    {
      slug: "fc-check-hard-categories",
      title: "9 · Knowledge check: hard categories and the writer",
      section: "Part 2 · Hard categories",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A quotation is word-perfect but the passage it came from qualified it, and the qualification is absent. How should it be handled?",
            options: [
              "Flagged as partially supported, naming the qualification that was dropped",
              "Passed as confirmed, since the words attributed to the speaker are exact",
              "Marked as contradicted, since the meaning conveyed reverses the original",
              "Marked as not checkable, since context is an editorial rather than factual matter",
            ],
            correctIndex: 0,
            explanation:
              "Accurate words conveying an inaccurate meaning is precisely the failure a checker exists to catch. It is not a contradiction, because the source does support the quoted words, which is why naming the omission is what helps.",
            sourceLessonSlug: "fc-quotes-and-attribution",
          },
          {
            prompt: "Which statement about a photograph should a checker treat as unverified by default?",
            options: [
              "An image credited only as coming from social media, with no photographer or date",
              "An image credited to a named agency with a photographer, date and location",
              "An image supplied by the subject of the article with a description of the occasion",
              "An image reproduced from a published book with a page and edition reference",
            ],
            correctIndex: 0,
            explanation:
              "A credit exists so a claim can be checked. Naming a photographer, date and holder makes that possible; naming a platform does not, and the image may well be older than the story it now illustrates.",
            sourceLessonSlug: "fc-numbers-and-images",
          },
          {
            prompt: "A writer disputes a finding. What is the most effective way to report it?",
            options: [
              "State what the source says, quote the relevant passage, and let the writer decide",
              "Restate the finding more firmly, since the evidence has already been established",
              "Withdraw the flag if the writer knows the subject substantially better than you do",
              "Refer the claim to an editor immediately without further discussion with the writer",
            ],
            correctIndex: 0,
            explanation:
              "It is checkable, it points at the fix, and it requires no concession. Escalation is for when disagreement persists, and it should carry the finding rather than the argument.",
            sourceLessonSlug: "fc-when-the-writer-disagrees",
          },
          {
            prompt: "What most undermines a checker's usefulness over time?",
            options: [
              "Flagging inconsistently, so objections track the checker's preferences rather than evidence",
              "Finding a high number of errors, which strains the relationship with writers",
              "Grading claims that turn out to be opinion rather than statements of fact",
              "Reporting findings to an editor rather than resolving them with the writer",
            ],
            correctIndex: 0,
            explanation:
              "Grade by evidence including when the claim is one you would like to be true. A checker who flags everything at the same volume becomes noise; one who saves objections for claims they dislike becomes an opponent.",
            sourceLessonSlug: "fc-when-the-writer-disagrees",
          },
        ],
      },
    },
    {
      slug: "fc-capstone-check-a-piece",
      title: "10 · Capstone: check a published piece",
      section: "Part 2 · Hard categories",
      lessonType: "assignment",
      body: `Take a published article of roughly 800 to 1500 words on any subject, from any outlet, and check it as though it had come to you before publication.

**Choose something with real factual content.** A news feature, a science story, a local investigation. Not a column, not a review.

## What to submit

**1. The piece.** Title, outlet, author, date, link.

**2. Your annotation.** Every checkable assertion, numbered. For each: the claim as stated, the grade, the source you checked it against, and what that source actually says. Include the ones that passed. **A check that reports only problems is not a check.**

**3. A count.** How many claims you marked, how many fell into each grade, and how long the whole thing took.

**4. Your three hardest items**, with a paragraph each on why they were hard and how you resolved them, or why you could not.

**5. One implied claim** you would have missed on a casual reading. A sequence, a causal link, a superlative, or a characterisation of what a source said.

**6. A note to the writer** on your single most consequential finding, written the way lesson 8 describes: the claim, the source, what it says, and no verdict.

## How this is assessed

Not on finding errors. Many published pieces hold up, and a careful check that grades forty claims confirmed is a full-credit answer.

You are assessed on whether the annotation is complete rather than selective, whether you back-checked to sources rather than to other articles reporting the same thing, whether "partially supported" is used precisely where it belongs, and on section 6.

**Section 6 is the professional test.** Anyone can find a mistake. Reporting it so the writer can act on it without a fight is the part that gets you hired again.

## Sources

Poynter Institute. (n.d.). *Fact-checking resources*. https://www.poynter.org/fact-checking/

American Press Institute. (n.d.). *Accuracy and verification*. https://www.americanpressinstitute.org/`,
    },
  ],
};
