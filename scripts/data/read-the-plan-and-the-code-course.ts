import type { AuthoredCourse } from "./authored-course";

// "Reading the Plan and the Code" (Science & Math). Proposed slug: `read-the-plan-and-the-code`.
// PRIVATE, free, and carrying NO SERIES CODE, by BAM's decision of 2026-09-19 (private courses do
// not carry CREDIT-style codes) and his approval of the brief at
// plans/future-courses/construction/2026-09-20-read-the-plan-and-the-code-brief.md on 2026-09-20.
// Proposed series SLUG only: `the-house-you-live-in` ("The House You Live In"), where this is the
// mechanism course the four system courses depend on. Every `sourceLessonSlug` below is
// course-internal, so the registered slug does not affect them.
//
// WHY THIS COURSE EXISTS, and it is not "BAM asked":
// `construction-math` shipped with an OPEN HEDGE. Its lesson 8, `feet-inches-and-laying-out-a-wall`,
// teaches 16 in. on center and the 15 1/4 in. first mark, and then its Sources note says outright
// that "the governing spacing for any actual wall comes from the drawings and the adopted building
// code". That same file's footer files a proposed research check (number 3) asking for the
// stud-spacing table in the adopted edition of the IRC. THIS COURSE IS THE ANSWER TO THAT SENTENCE,
// and it answers it the only honest way available to a tracked public repository: not by reprinting
// a table out of a copyrighted model code, but by teaching a learner to read the drawing set that
// governs their own house and to find, free and official, the adoption rule that says which edition
// of which model code their own state made law. Lesson 2 names the hedge and the lesson it sits in.
//
// THE RIGHTS RULE, which is the whole reason this file can exist in a tracked repository.
// Course data files under scripts/data/ are TRACKED IN GIT AND PUSHED TO GITHUB, so
// `visibility: "private"` protects the app and not the text. So:
//   * NOTHING here derives from any book in content/construction/. Not a sentence, not a sequence,
//     not a figure, not a chapter's shape. None of those six books was opened for this file.
//   * NO MODEL CODE TEXT APPEARS ANYWHERE. Not the IRC, not the NEC, not the IPC or UPC. The course
//     cites addresses (a rule number, a section number, an edition and a printing) and never
//     reproduces a line of what the model codes say. That is stated to the learner as the course's
//     own operating rule in lesson 10, because the rule is also the skill being taught.
//   * What CAN carry the teaching is federal: 17 U.S.C. 105 puts works of the United States
//     Government outside copyright, and the Navy has already written a public-release manual on
//     reading a drawing set. That is where sections 2 and 3 come from, quoted freely and cited.
//   * The one state document quoted at length, 675 IAC 14-4.4-1, is a public administrative rule.
//     What it ADOPTS is private. Quoting the adoption is not quoting the code.
//
// NO CREDENTIAL IS IMPLIED, ANYWHERE. This is not NCCER, not OSHA 10 or 30, not a contractor's or
// electrician's licence, not plan review, not a permit approval, not a home inspection, and not a
// substitute for the Construction Training course at John Boner Neighborhood Centers. It never
// tells a learner whether a particular job needs a permit, because that answer belongs to the local
// building department and to nobody else. Lesson 1 says all of that in plain words and lesson 11
// says the permit half of it again, because that is where the money is.
//
// FETCH OR DO NOT CITE. Everything cited below was retrieved and read on 2026-09-20 unless a date
// says otherwise:
//   1. U.S. Navy, "Builder 3 & 2, Volume 1", NAVEDTRA 14043, March 1993. The 332-page PDF was
//      downloaded and its text extracted. Front matter carries "DISTRIBUTION STATEMENT A: Approved
//      for public release; distribution is unlimited." Chapter 2, "Drawings and Specifications",
//      pp. 2-1 to 2-22, was read in full and is the source for sections 2 and 3.
//   2. U.S. Navy, "Blueprint Reading and Sketching", NAVEDTRA 14040. Same distribution statement.
//      Preface: original edition May 1994, administrative update October 2003, published by the
//      Naval Education and Training Professional Development and Technology Center. Chapter 1,
//      pp. 1-1 to 1-7, was read and is the source for the title block, the revision block, the
//      scale block and the "never measure a drawing" rule.
//   3. 675 IAC 14-4.4-1, via law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1. Re-fetched on
//      2026-09-20 for this build, not taken from the brief.
//   4. 675 IAC 17-1.8-1, via law.cornell.edu/regulations/indiana/675-IAC-17-1.8-1, plus the Article
//      14 and Article 17 rule listings at law.cornell.edu/regulations/indiana/title-675/article-14
//      and .../article-17, which show which rules are marked (Repealed).
//   5. 24 CFR 3280.1, via law.cornell.edu/cfr/text/24/3280.1. The part-level subpart list was read
//      on 2026-09-20 in the sources inventory.
//   6. 17 U.S.C. 105, read 2026-09-20 per the sources inventory at
//      plans/future-courses/construction/2026-09-20-00-sources-and-what-can-be-taught.md.
//   7. County of Santa Cruz, California, Community Development and Infrastructure: the "Typical
//      Inspections" page and the "Inspections" page, both fetched 2026-09-20. A named, ordered,
//      published inspection list from a real building department, used for section 6.
//
// THE INDIANA RE-CHECK THE BRIEF ORDERED, and what it found.
// The brief marked as UNVERIFIED whether the 2020 Indiana Residential Code is still Indiana's
// current adoption in September 2026, and required a re-check at build time with the date printed.
// Done on 2026-09-20. What was confirmed: on the Legal Information Institute's mirror of the
// Indiana Administrative Code, 675 IAC 14-4.4 is the newest residential rule in Article 14 and the
// six older ones are marked (Repealed), and 675 IAC 14-4.4-1 still reads as the brief recorded it.
// What could NOT be confirmed: the official Indiana rules portal at iar.iga.in.gov is a JavaScript
// application that returned an empty shell to four separate fetches (three via a page reader, one
// via a raw HTTP request), and its older static host returned the same shell, so the official
// register itself was never read. Search summaries seen the same day report a 2025 readoption
// review of 675 IAC 14-4.4 under LSA Document #24-566, and report a newer electrical rule, 675 IAC
// 17-1.9, adopting the 2023 NEC as the "Indiana Electrical Code, 2026 Edition". NEITHER WAS READ ON
// AN OFFICIAL PAGE, so neither is asserted. Lesson 9 states both as reported, names what failed,
// prints the date, and turns the gap into the lesson: a mirror can lag the register, so you check
// the register and you write down the date you checked. Both go into the proposed research checks.
//
// THE CROSS-FINDING FROM THE JOURNEYMAN RESEARCH, verified here independently. Indiana's newest
// electrical rule that is not marked (Repealed) on the LII mirror is 675 IAC 17-1.8, titled
// "Indiana Electrical Code, 2009 Edition", and 675 IAC 17-1.8-1 adopts the National Electrical
// Code, 2008 Edition, first printing. Two numbers, neither of them "now". That is exactly why
// looking up the adoption rule beats buying the current book, and lesson 9 is built on it.
//
// HOUSE STYLE, matching drew-blood-bank-course.ts and construction-math-course.ts: `section` on
// every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6
// lesson-specific terms; an APA 7 `## Sources` block on every lesson; a quiz per teaching section
// serving 5 and a FINAL serving 10 placed last; `passingScore: 80` and `shuffleOptions: true`
// everywhere; `explanation` and `sourceLessonSlug` on every question. Correct options are written
// SHORT and distractors long and specifically wrong, so check-longest-option passes by
// construction. No em dashes anywhere a learner reads. No fabricated characters and no invented
// jobsite anecdotes: every worked reading below is read off a figure in the Navy manual and says so.
export const READ_THE_PLAN_AND_THE_CODE_COURSE: AuthoredCourse = {
  title: "Reading the Plan and the Code: Drawings, Specifications, and Who Made the Code Law",
  description:
    "Most people meet a construction drawing once, at the worst possible moment, holding a quote, a permit application and a sheet covered in symbols nobody explained. And most people never find out that the code everyone invokes is a specific book, written and sold by a private organisation, that became law in their state only because a named agency adopted a named edition of it on a named date, with the state's own changes written in. This course fixes both halves. The first half teaches the drawing set: what a set contains and the order it comes in, how a plan differs from an elevation and a section and a detail, where the title block and the revision block live and what they tell you, what the scale block means and why the Navy's own manual says never to measure a drawing, how door, window and finish schedules carry information the drawing has no room for, and why the written specification outranks the drawing when the two disagree. All of it is taught from two public-release United States Navy training manuals, quoted and cited, because works of the federal government carry no copyright. The second half teaches the code: that a model code is a book somebody sells, that what makes it law where you live is a separate public document you can read for free, and how to read that document. Indiana's residential adoption rule is worked line by line as the example, and then the course does something more useful than telling you what your code says. It teaches you to find your own state's adoption rule, name the edition and the date, and notice the gap between the year in the state's title and the year of the model code it adopted, because those are different numbers and the difference is the reason buying the newest book tells you nothing about what your jurisdiction enforces. It closes with the permit and the inspection sequence, including why the rough-in inspection comes before the drywall and what an inspector is actually checking, and with an exercise in which you find the rule that governs your own address and write down one question to ask your building department. What it refuses to do it says out loud: it never reprints code text, it never tells you whether your job needs a permit, and it is not a licence, a plan review, a permit approval or a home inspection.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What this is, and what it is not
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-this-course-is",
      title: "1 · What this course is, and what it is not",
      section: "Section 1 · What this is, and what it is not",
      body: `This course teaches two documents. One of them describes a single building and nothing else. The other sets the minimum every building in a jurisdiction has to meet. Most arguments about a house are really arguments about which of the two somebody is quoting, and most people have never been shown either one.

**Start with the refusals, because they are the part that protects you.**

This is not a licence and not a step toward one. It is not a plan review. It is not a home inspection. It does not approve a permit, issue a permit, or tell you that your permit will be approved. It is not an NCCER course, it does not satisfy an NCCER requirement, it is not OSHA 10 or OSHA 30, and it substitutes for nothing an instructor does in a taught construction program.

**It will not tell you whether your job needs a permit.** That is not modesty. The answer depends on your jurisdiction, on what you are doing, and sometimes on which side of a city line your address sits, and the only body that can answer it is the one that would issue the permit. A course that guessed for you would be making up an answer that costs money when it is wrong. Section 6 teaches you what to ask and who to ask, which is the part you can actually carry from here.

**It never reprints code text.** The model building codes are written and sold by private organisations. This course cites addresses, a rule number, a section number, an edition and a printing, and it never reproduces a line of what a model code says. That is partly a rights rule and partly the skill being taught: knowing the address is what lets you go and check, and taking somebody's paraphrase is how wrong code claims spread.

**Where the material comes from, and why it is free.** United States federal law puts works of the federal government outside copyright. The statute says that "Copyright protection under this title is not available for any work of the United States Government" (17 U.S.C. 105). The Navy trains its Builders with nonresident training manuals that carry the line "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited." So the drawing chapters of this course are taught from two of those manuals, quoted and cited: *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) and *Blueprint Reading and Sketching* (NAVEDTRA 14040). The code chapters are taught from a state administrative rule and a federal regulation, both public. Nothing here comes from a trade book.

**Dates are part of the content.** Almost everything in the second half of this course can change without telling you. A state can readopt, amend, or move to a newer edition. So every fact about an adopted code in here carries the date it was checked, which was 20 September 2026, and the course tells you plainly where its own checking stopped. A claim about a code with no date on it is a claim you cannot use.

**What you get at the end.** You will be able to open a residential drawing set and know what each sheet is for and where the numbers live. You will be able to say what a specification is and which document wins when the two disagree. You will be able to explain what "the code" actually is, find the public rule that made it law at your own address, name the edition and the date, and ask your building department a question in the form it can answer.

:::reveal Name three things this course explicitly refuses to be. ||| It is not a licence, not a plan review, not a home inspection, not a permit approval, and not a substitute for a taught construction program. It also refuses to say whether any particular job needs a permit.

:::reveal Why can this course quote a Navy training manual at length but not a model building code? ||| Because 17 U.S.C. 105 puts works of the United States Government outside copyright, while the model codes are written and sold by private organisations, so the course cites their addresses instead of their text.

:::reveal Why does every claim about an adopted code in this course carry a date? ||| Because a state can readopt, amend, or move to a newer edition at any time, so a code claim with no date on it cannot be relied on.

## Vocabulary
- **Model code**: a code written and published by a private organisation, which has no legal force until a government adopts it.
- **Adoption**: the public act by which a government makes a named edition of a model code enforceable in its territory.
- **Jurisdiction**: the government whose rules govern a given address, and the office that issues permits and inspects work there.
- **Distribution Statement A**: the marking on a United States military publication meaning it is approved for public release with distribution unlimited.

## Sources
Copyrights, 17 U.S.C. § 105 (2026). https://www.copyright.gov/title17/92chap1.html
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
U.S. Navy. (2003). *Blueprint reading and sketching* (NAVEDTRA 14040) [Nonresident training course]. Naval Education and Training Professional Development and Technology Center. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Blueprint-Reading-and-Sketching-NAVEDTRA-14040.pdf`,
    },
    {
      slug: "two-documents-govern-a-house",
      title: "2 · Two documents govern a house",
      section: "Section 1 · What this is, and what it is not",
      body: `A house is governed by two documents that answer two different questions, and confusing them is the single most common mistake in a conversation about building.

**The drawing set answers: what is this particular building?** How long is this wall, where does that window go, what size is the footing under this pier, what finish goes in that room. The set is specific to one project, prepared for it, and revised as the project changes. If the answer you need is about *your* house, it is probably on a sheet.

**The adopted code answers: what is the minimum any building here has to meet?** It is not about your house. It is about every house in the jurisdiction. It does not know where your window goes, and it is not trying to.

Neither document substitutes for the other. A drawing that meets the code can still be the wrong house for you. A house you like can still fail an inspection. And there is a third document, the written specification, which sits beside the drawings and outranks them when the two disagree. Section 3 takes that apart.

**This course exists because of one sentence in another course.** *Construction Math*, lesson 8, teaches feet-and-inches arithmetic and the layout of a wall at 16 inches on center. It shows why the first stud mark is made at 15 1/4 inches rather than 16, and it teaches the diamond marks at 19.2 inches. Then its Sources note stops and says that the spacings are taught as common layouts rather than as code requirements, because "the governing spacing for any actual wall comes from the drawings and the adopted building code".

That is an honest sentence and it leaves a learner holding nothing. It names two documents and shows neither. The rest of this course is the answer to it. Sections 2 and 3 are the drawings. Sections 4 and 5 are the adopted code, including how to find the one that governs your own address. Section 6 is what happens when somebody comes to look at the work.

**Why the answer is "find it" rather than "here it is".** You may have noticed that this course could simply have printed a stud-spacing table. It will not, for three reasons that are worth having straight.

First, rights: the table lives in a model code that is privately written and sold, and reproducing it is not ours to do. Second, accuracy: the number that governs your wall depends on which edition your state adopted, what your state changed when it adopted it, and what your drawings say, and a table printed here would be none of those. Third, and this is the one that lasts, a number you were handed expires quietly. A method does not. If you can find your state's adoption rule this year, you can find it again in four years when it has been readopted and the answer has moved.

**The order of authority, in the shape you will actually meet it.** Your drawings and specification say what this building is. Your jurisdiction's adopted code sets the floor that any building must clear. Your jurisdiction's own amendments to that code sit on top of the model text. And your building department is the office that decides, for your address, whether the work in front of it meets all of that. This course teaches you to read the first two, find the third, and talk to the fourth.

:::reveal What different questions do the drawing set and the adopted code answer? ||| The drawing set says what this particular building is, and the adopted code sets the minimum that any building in the jurisdiction has to meet.

:::reveal Which sentence in Construction Math does this course exist to answer? ||| Lesson 8's Sources note, which says the governing spacing for any actual wall comes from the drawings and the adopted building code, while showing the learner neither document.

:::reveal Give one reason beyond copyright that this course teaches you to find a code provision rather than printing one. ||| A printed number depends on the edition your state adopted, the amendments your state wrote, and your own drawings, and it expires quietly, while the method of finding it keeps working.

## Vocabulary
- **Drawing set**: the related sheets that together describe one construction project completely.
- **Specification**: the written document that accompanies the drawings and defines materials and workmanship.
- **Amendment**: a change a state or local government writes into a model code when it adopts it.
- **Building department**: the local office that issues permits and inspects work against the adopted code.

## Sources
Indiana Fire Prevention and Building Safety Commission. (2019). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Legal Information Institute. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
The Construction Math reference is to this catalog's own course file, lesson 8 (\`feet-inches-and-laying-out-a-wall\`), and is not an external source.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What this is, and what it is not",
      section: "Section 1 · What this is, and what it is not",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two documents does this course say govern a house?",
            options: [
              "The drawing set and the adopted code",
              "The mortgage agreement and the deed recorded with the county, which together fix what may lawfully be built",
              "The contractor's written estimate and the homeowner's insurance policy, read side by side",
              "The manufacturer's warranty on the roof covering and the utility's service agreement",
            ],
            correctIndex: 0,
            explanation:
              "The drawing set describes one particular building. The adopted code sets the minimum every building in the jurisdiction has to meet. Confusing them is the most common mistake in a conversation about building.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What question does a drawing set answer?",
            options: [
              "What is this particular building",
              "What is the least any building in this jurisdiction is allowed to be, expressed as enforceable minimums",
              "Which contractor is licensed to perform the work described, and in which trades",
              "Whether the finished structure will appraise at or above the amount borrowed to build it",
            ],
            correctIndex: 0,
            explanation:
              "The set is specific to one project, prepared for it, and revised as it changes. The adopted code is the document that answers the second question.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What question does an adopted code answer?",
            options: [
              "The minimum any building here must meet",
              "Where the windows go in this house and what size the footing under this particular pier is",
              "Which sheets belong in the set and in what order the draftsman prepared them",
              "How much the work described on the drawings should cost in this market this year",
            ],
            correctIndex: 0,
            explanation:
              "It is not about your house. It is about every house in the jurisdiction, and it is not trying to know where your window goes.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which document outranks the drawings when the two disagree?",
            options: [
              "The written specification",
              "The framing plan, because it shows the members that actually carry the load in the finished structure",
              "The most recently revised elevation, because a later revision always governs an earlier sheet",
              "The permit application, because it is the document the jurisdiction actually reviewed",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 takes this apart. The specification sits beside the drawings and the Navy manual states the precedence rule outright.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which sentence in Construction Math does this course exist to answer?",
            options: [
              "Its lesson 8 Sources note",
              "Its lesson 7 statement that a flexible tape may be graduated in tenths and hundredths of a foot",
              "Its lesson 13 note that a circle's area uses the radius rather than the diameter",
              "Its header comment stating that nothing in the file is reproduced from an NCCER workbook",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 8's Sources note says the governing spacing for any actual wall comes from the drawings and the adopted building code, and then shows the learner neither document.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What layout does Construction Math lesson 8 teach without citing a code?",
            options: [
              "16 inches on center",
              "A 24 inch spacing derived from the span tables published for engineered floor systems",
              "A 12 inch spacing measured from the outside face of the plate rather than from a centre",
              "A spacing chosen to suit the width of the sheathing actually delivered to the site",
            ],
            correctIndex: 0,
            explanation:
              "It teaches 16 inches on center, the 15 1/4 inch first mark, and the 19.2 inch diamonds, all as common layouts with the arithmetic shown rather than as code requirements.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Why is the first stud mark on a 16 inch on-center wall made at 15 1/4 inches?",
            options: [
              "Half a stud's thickness backs it off",
              "Because the plate is cut 3/4 of an inch short at each end to allow the sheathing to lap past it",
              "Because a tape hooked at the end of a plate reads 3/4 of an inch heavy under a 10 pound load",
              "Because the sheet edge lands 3/4 of an inch inside the framing on every standard panel",
            ],
            correctIndex: 0,
            explanation:
              "The mark locates the stud's face, and the centre has to land at 16 inches. A nominal two-by-four is 1 1/2 inches thick, so backing off 3/4 of an inch puts the centre where a 48 inch sheet edge needs it.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Give one reason beyond copyright that this course teaches you to find a code provision rather than printing one.",
            options: [
              "A printed number expires quietly",
              "Because printed tables are harder to read on a phone than a link to the publisher's own website is",
              "Because most learners already own a current copy of the model code their state adopted",
              "Because a jurisdiction will not answer a question from anyone who has not bought the book first",
            ],
            correctIndex: 0,
            explanation:
              "The number that governs your wall depends on the edition your state adopted, the amendments it wrote, and your own drawings. A method keeps working after the number has moved.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "In the order of authority this course describes, what does the building department decide?",
            options: [
              "Whether the work meets all of it",
              "Which edition of the model code the publisher should issue next, and what belongs in it",
              "What the drawings should have shown, and whether the designer chose the right layout",
              "Whether the owner's budget is adequate for the work the specification describes",
            ],
            correctIndex: 0,
            explanation:
              "The drawings and specification say what this building is, the adopted code and its amendments set the floor, and the department decides for your address whether the work in front of it meets all of that.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which is true of a drawing that meets the adopted code?",
            options: [
              "It can still be the wrong house for you",
              "It is automatically approved for a permit in any jurisdiction that adopted the same model code",
              "It no longer needs a written specification, because the code supplies the missing workmanship rules",
              "It cannot fail an inspection, because the inspector checks against the same code it met",
            ],
            correctIndex: 0,
            explanation:
              "Neither document substitutes for the other. The code sets a floor; it does not say the building suits you.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What sits on top of the model text in a jurisdiction that has adopted a code?",
            options: [
              "The jurisdiction's own amendments",
              "The publisher's errata sheets, which correct printing mistakes in the edition that was adopted",
              "The designer's general notes, which govern wherever the adopted text is silent",
              "The inspector's written field directions, which become part of the code once issued",
            ],
            correctIndex: 0,
            explanation:
              "A state or local government writes changes into a model code when it adopts it, and those amendments govern over the model text.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which sections of this course cover the adopted code?",
            options: [
              "Sections 4 and 5",
              "Sections 2 and 3, which read the drawing set sheet by sheet from the Navy manual",
              "Section 6 alone, since the permit is the only place the code is actually enforced",
              "Section 7 alone, since the code is only ever reached through the learner's own address",
            ],
            correctIndex: 0,
            explanation:
              "Sections 2 and 3 are the drawings, sections 4 and 5 are the code and its adoption, section 6 is the permit and inspection, and section 7 is the learner's own address.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What does the course say happens to a drawing set as a project changes?",
            options: [
              "It is revised",
              "It is replaced entirely, because a set that has been marked up is no longer valid for construction",
              "It is superseded by the specification, which absorbs every change made after the permit issued",
              "It is frozen at the permit date, since changing it would invalidate the approval",
            ],
            correctIndex: 0,
            explanation:
              "The set is specific to one project, prepared for it, and revised as the project changes. Section 3 covers the revision block that records those revisions.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "How does the course describe Construction Math's deferral sentence?",
            options: [
              "Honest, and leaving the learner holding nothing",
              "Mistaken, since the spacing in question is fixed nationally and does not vary by jurisdiction",
              "Unnecessary, since the arithmetic in that lesson already settles the governing spacing",
              "Temporary, since the spacing table was due to be printed in a later revision of that course",
            ],
            correctIndex: 0,
            explanation:
              "It is honest because it refuses to assert a code requirement nothing fetched. It leaves the learner holding nothing because it names two documents and shows neither.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What is a model code?",
            options: [
              "A code a private organisation writes and sells",
              "A federal regulation published in the Code of Federal Regulations and enforced nationwide",
              "A draft code a state agency circulates for comment before it writes its own from scratch",
              "A code that applies only to model homes and other structures built for display",
            ],
            correctIndex: 0,
            explanation:
              "It has no legal force by itself. A government has to adopt a named edition of it before it governs anything.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is adoption, in the sense this course uses the word?",
            options: [
              "A government making an edition enforceable",
              "A publisher releasing the next edition of a model code after its committee cycle closes",
              "A contractor agreeing in writing to build to a standard the owner has selected",
              "A building department deciding to keep a reference copy of a code on its counter",
            ],
            correctIndex: 0,
            explanation:
              "Adoption is the public act by which a government makes a named edition of a model code enforceable in its territory.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of these does this course explicitly refuse to be?",
            options: [
              "A plan review",
              "An explanation of what each sheet in a residential drawing set is for",
              "A guide to reading a state administrative rule that adopts a model code",
              "A description of what a written specification is and when it governs",
            ],
            correctIndex: 0,
            explanation:
              "It is not a plan review, a home inspection, a permit approval, or a licence. The other three are things it does do.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why will this course not say whether your job needs a permit?",
            options: [
              "Only the issuing jurisdiction can answer",
              "Because permit requirements are federal, and a state course has no authority to interpret them",
              "Because the answer depends on the contractor's licence class rather than on the work itself",
              "Because a permit is required for every job, so the question never actually arises",
            ],
            correctIndex: 0,
            explanation:
              "The answer depends on your jurisdiction, on what you are doing, and sometimes on which side of a city line your address sits. Guessing for you would make up an answer that costs money when it is wrong.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does this course cite instead of code text?",
            options: [
              "Addresses",
              "Photographs of the relevant pages, which carry the text without reproducing it in type",
              "Close paraphrases written in the course's own words, so no sentence is reproduced",
              "Summaries prepared by trade associations, which are free to circulate",
            ],
            correctIndex: 0,
            explanation:
              "A rule number, a section number, an edition and a printing. Knowing the address is what lets you go and check, and taking somebody's paraphrase is how wrong code claims spread.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does 17 U.S.C. 105 say about works of the United States Government?",
            options: [
              "Copyright protection is not available for them",
              "They may be reproduced for non-commercial purposes only, with attribution to the issuing agency",
              "They enter the public domain seventy years after the death of the officer who prepared them",
              "They are protected, but agencies are directed to license them at no charge on request",
            ],
            correctIndex: 0,
            explanation:
              "The statute reads that copyright protection under this title is not available for any work of the United States Government. That is why the Navy manuals can be quoted here at length.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What line do the Navy nonresident training manuals used here carry on their front matter?",
            options: [
              "Distribution Statement A",
              "A notice reserving all rights to the Naval Education and Training Command and its contractors",
              "A licence permitting reproduction for classroom use by accredited institutions only",
              "A restriction limiting distribution to Department of Defense components and their contractors",
            ],
            correctIndex: 0,
            explanation:
              "The front matter reads: DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which two Navy manuals supply the drawing material in this course?",
            options: [
              "NAVEDTRA 14043 and NAVEDTRA 14040",
              "NAVEDTRA 14044 and NAVEDTRA 14069, the second and third volumes of the Builder series",
              "NAVEDTRA 10629-1, Engineering Aid 3 & 2 Volume 3, together with MIL-HDBK-1006/1",
              "NAVEDTRA 14027 and NAVEDTRA 14256, the Steelworker and Utilitiesman manuals",
            ],
            correctIndex: 0,
            explanation:
              "Builder 3 & 2, Volume 1 (NAVEDTRA 14043) and Blueprint Reading and Sketching (NAVEDTRA 14040). Both are public release.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What date does this course print on its claims about adopted codes?",
            options: [
              "20 September 2026",
              "The date the state agency filed the rule, which is the only date that matters to a learner",
              "The date the model code publisher released the edition the state later adopted",
              "No date, because an administrative rule stays in force until it is formally repealed",
            ],
            correctIndex: 0,
            explanation:
              "That is the day the sources were checked for this build. A claim about a code with no date on it is a claim you cannot use.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does the course say dates are part of the content?",
            options: [
              "A state can readopt or amend without telling you",
              "Because model code publishers release a new edition every year on a fixed schedule",
              "Because a permit expires on a schedule set by the state rather than by the local office",
              "Because a drawing set is only valid for the calendar year in which it was sealed",
            ],
            correctIndex: 0,
            explanation:
              "Almost everything in the second half of the course can change without notice, so every fact about an adopted code carries the date it was checked.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is a jurisdiction, as this course uses the term?",
            options: [
              "The government whose rules govern an address",
              "The geographic area a single building inspector is assigned to cover during a working week",
              "The trade association whose technical bulletins a designer chose to follow on a project",
              "The court that would hear a dispute between an owner and a contractor over the work",
            ],
            correctIndex: 0,
            explanation:
              "It is the government whose rules govern a given address, and the office that issues permits and inspects work there.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which credential does this course say it earns?",
            options: [
              "None",
              "An NCCER Core module completion, provided the learner also sits the module's written test",
              "An OSHA 10 card, since the material overlaps the construction outreach curriculum",
              "A state home inspector registration, at the level that permits pre-purchase inspections",
            ],
            correctIndex: 0,
            explanation:
              "It is not an NCCER course, it satisfies no NCCER requirement, it is not OSHA 10 or 30, and it substitutes for nothing an instructor does in a taught program.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say taking somebody's paraphrase of a code leads to?",
            options: [
              "Wrong code claims spreading",
              "A faster answer that is usually correct, since paraphrases simplify rather than change meaning",
              "A licensing problem, because paraphrasing a copyrighted code is itself an infringement",
              "An answer that binds the jurisdiction, because the paraphrase was published in good faith",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the address is what lets you go and check. Taking the paraphrase is how a wrong claim travels unchecked.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of these will a learner be able to do at the end of the course?",
            options: [
              "Find the rule that made a code law at their address",
              "Determine without contacting anyone whether a planned renovation requires a permit",
              "Certify that a set of drawings complies with the residential code their state adopted",
              "Issue a written finding that a house is safe to occupy after a remodel",
            ],
            correctIndex: 0,
            explanation:
              "Reading a set, naming the document that wins a conflict, finding the adoption rule and its date, and asking the building department a usable question. Not the other three.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say most arguments about a house are really about?",
            options: [
              "Which of the two documents someone is quoting",
              "Whether the contractor or the owner selected the materials the finished work actually used",
              "Whether the work was done in the order the schedule set out at the start of the project",
              "How much of the original estimate the change orders have added since the job began",
            ],
            correctIndex: 0,
            explanation:
              "One document describes a single building, the other sets a minimum for all of them, and most people have never been shown either.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Where does section 6 of this course say the money is?",
            options: [
              "The permit and the inspection",
              "The takeoff, where a miscounted sheet of drywall multiplies across an entire floor",
              "The specification, where the quality of materials is set before any price is agreed",
              "The revision block, where an unnoticed change adds work nobody priced",
            ],
            correctIndex: 0,
            explanation:
              "The course repeats its permit refusal in the permit lesson specifically because that is where a wrong answer costs a learner money.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say a stud-spacing table printed here would be?",
            options: [
              "None of the things that actually govern your wall",
              "A convenient shortcut that most learners would prefer to a search of their state's rules",
              "An accurate statement of the national minimum, since the model codes agree on that figure",
              "A reasonable substitute for the drawings, since drawings follow the table anyway",
            ],
            correctIndex: 0,
            explanation:
              "The governing number depends on the edition adopted, the state's amendments, and the drawings, and a table printed here would be none of those.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Who prepares the drawing set's answer to what a particular building is?",
            options: [
              "The designer of that project",
              "The model code committee that writes the edition the jurisdiction later adopts",
              "The building department, which drafts a set for each permit it issues",
              "The state agency that files the adoption rule in the administrative code",
            ],
            correctIndex: 0,
            explanation:
              "The set is specific to one project and prepared for it. Section 2 covers who does what in producing it.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which document does the course say does not know where your window goes?",
            options: [
              "The adopted code",
              "The floor plan, which shows widths and locations of doors and windows at that level",
              "The elevation, which keys each window to a letter in the window schedule",
              "The specification, which fixes the quality of the window to be supplied",
            ],
            correctIndex: 0,
            explanation:
              "The code is about every house in the jurisdiction, not about yours, and it is not trying to know.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What does the course promise instead of a code answer?",
            options: [
              "A method for finding your own",
              "A table of the most commonly adopted editions, kept current by the course's authors",
              "A referral to a licensed designer who can answer the question on your behalf",
              "A summary of the model code text, written closely enough to be relied on",
            ],
            correctIndex: 0,
            explanation:
              "If you can find your state's adoption rule this year, you can find it again in four years when the answer has moved.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What is a specification, in the vocabulary of section 1?",
            options: [
              "The written document beside the drawings",
              "The list of code sections a designer relied on when preparing a set of drawings",
              "The schedule of values a contractor submits to support a request for payment",
              "The manufacturer's data sheet for a product installed in the finished building",
            ],
            correctIndex: 0,
            explanation:
              "It accompanies the drawings and defines materials and workmanship, and it outranks the drawings when the two disagree.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What is an amendment, in the vocabulary of section 1?",
            options: [
              "A change a government writes into a model code",
              "A correction the publisher issues to a printing after errors are found in it",
              "A revision a designer makes to a sheet after the permit has been issued",
              "A waiver an inspector grants on site when the adopted text cannot be met",
            ],
            correctIndex: 0,
            explanation:
              "A state or local government writes changes into the model code when adopting it, and those changes govern over the model text.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Where does the course say the drawing set usually starts?",
            options: [
              "With the site",
              "With the foundation plan, since nothing above it can be laid out until the footings are fixed",
              "With the elevations, because the appearance of the building drives every later decision",
              "With the specification, which is bound in front of the sheets in a complete set",
            ],
            correctIndex: 0,
            explanation:
              "Section 2 shows the Navy manual's own description: a set in most cases begins with the location, boundaries, contours and physical features of the site.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which of these is a legitimate use of a code section number, by this course's rule?",
            options: [
              "Telling someone where to read it",
              "Reproducing the section's text in a handout so a crew does not have to look it up",
              "Selling a compiled copy of the sections a project relies on to the owner",
              "Publishing a close paraphrase of the section under the course's own name",
            ],
            correctIndex: 0,
            explanation:
              "The course cites addresses and never reproduces the text. An address is an invitation to check; a reproduction is a substitute for checking.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say about being told a permit will be approved?",
            options: [
              "It does not tell you that",
              "It tells you that approval follows automatically once the drawings match the adopted edition",
              "It tells you that approval is guaranteed for work below a fixed dollar threshold",
              "It tells you that approval is the inspector's decision rather than the department's",
            ],
            correctIndex: 0,
            explanation:
              "It does not approve a permit, issue a permit, or tell you that your permit will be approved.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which body of material does the course say none of its content comes from?",
            options: [
              "Trade books",
              "Federal publications, which carry restrictions that make them unusable in a tracked repository",
              "State administrative rules, which are too jurisdiction-specific to teach from",
              "Building department web pages, which are not authoritative enough to cite",
            ],
            correctIndex: 0,
            explanation:
              "The drawing chapters come from two public-release Navy manuals; the code chapters come from a state administrative rule and a federal regulation. Nothing comes from a trade book.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say a learner will be able to do with a residential drawing set?",
            options: [
              "Know what each sheet is for and where the numbers live",
              "Certify the set as complete and suitable for submission to a building department",
              "Reproduce the set at a different scale for use by a subcontractor on site",
              "Determine the finished market value of the building the set describes",
            ],
            correctIndex: 0,
            explanation:
              "Reading the set and knowing where the dimensions actually live is the first of the four outcomes the lesson lists.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "In what form should a question to a building department be asked, according to lesson 1?",
            options: [
              "The form it can answer",
              "A written demand citing the section of the adopted code the questioner believes applies",
              "A request for a written opinion signed by the department's chief building official",
              "A general enquiry, so the department is free to give the most helpful answer",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 teaches what to ask and who to ask. Asking in a form the office can answer is the part a learner carries away.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the course say about a house you like that fails an inspection?",
            options: [
              "Liking it does not make it compliant",
              "It cannot happen, because an inspector checks appearance only after the code items pass",
              "It means the drawings must have been revised without the department being told",
              "It means the adopted code in that jurisdiction is stricter than the model text",
            ],
            correctIndex: 0,
            explanation:
              "Neither document substitutes for the other: a drawing that meets the code can be the wrong house for you, and a house you like can still fail.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What does section 6 of this course cover?",
            options: [
              "The permit and the inspection sequence",
              "The written specification and the sixteen divisions it is organised into",
              "Scale, dimensions, and the reason a drawing should never be measured",
              "The learner's own state adoption rule and what to write down about it",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 2 maps the course: 2 and 3 are the drawings, 4 and 5 are the code, 6 is what happens when somebody comes to look at the work, and 7 is your own address.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which of these does the course say is true of the adopted code and your house?",
            options: [
              "It sets a floor, not a description",
              "It describes the typical house in the jurisdiction and expects yours to match it closely",
              "It is drafted from the drawings most commonly submitted to that building department",
              "It replaces the drawings entirely once a permit has been issued for the work",
            ],
            correctIndex: 0,
            explanation:
              "The code sets the minimum any building has to meet. What your building is comes from the drawings and the specification.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Why does the course repeat its permit refusal in section 6?",
            options: [
              "Because that is where a wrong answer costs money",
              "Because learners routinely skip section 1 and begin the course at the permit material",
              "Because the refusal only becomes legally necessary once inspections are discussed",
              "Because the wording of the refusal changes once a jurisdiction has been named",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 says it in plain words and lesson 11 says the permit half again, because that is where the money is.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What kind of document is 675 IAC 14-4.4-1?",
            options: [
              "A public state administrative rule",
              "A privately published model code sold by the organisation that drafted it",
              "A federal regulation published in the Code of Federal Regulations",
              "An internal guidance memorandum issued to inspectors by a building department",
            ],
            correctIndex: 0,
            explanation:
              "It is a public rule of the Indiana Administrative Code. What it adopts is private, and quoting the adoption is not quoting the code.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What does the course say a method has that a number does not?",
            options: [
              "It keeps working after the answer moves",
              "It can be printed in a tracked repository without raising a rights question of any kind",
              "It produces the same result in every jurisdiction, which a number cannot",
              "It is faster to apply than looking a number up in a table would be",
            ],
            correctIndex: 0,
            explanation:
              "A number you were handed expires quietly. If you can find your state's adoption rule this year, you can find it again when it has changed.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which three documents does lesson 2 say sit between you and the building department?",
            options: [
              "Drawings, specification, adopted code",
              "Permit application, inspection record, and certificate of occupancy issued at the end",
              "Estimate, contract, and change orders agreed as the work proceeds",
              "Site plan, plot plan, and foundation plan, in the order a set presents them",
            ],
            correctIndex: 0,
            explanation:
              "The drawings and specification say what this building is, the adopted code and its amendments set the floor, and the department decides whether the work meets all of it.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The drawing set
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-set-of-drawings-is",
      title: "3 · What a set of drawings is, and the order it comes in",
      section: "Section 2 · The drawing set",
      body: `A drawing set is not a pile of pictures. It is a sequence, and knowing the sequence is most of knowing where to look.

**The Navy states the shape of a set plainly.** A structure "is described by a set of related drawings that give the Builder a complete, sequential, graphic description of each phase of the construction process." In most cases a set "begins by showing the location, boundaries, contours, and outstanding physical features of the construction site and its adjoining areas." After that come "instructions for the excavation and disposition of existing ground; construction of the foundations and superstructure; installation of utilities, such as plumbing, heating, lighting, air conditioning, interior and exterior finishes; and whatever else is required to complete the structure" (U.S. Navy, 1993, p. 2-4).

Read that as a table of contents. Outside first, then down into the ground, then up, then the systems, then the finishes.

**Three groups share the set.** Construction drawings, also called working drawings, "incorporate all three main groups of drawings", which are architectural, electrical and mechanical. In a simple structure the grouping can be hard to see, because one sheet may carry both the electrical and the mechanical layouts. In a complicated structure a combination is not possible "because of overcrowding", so the floor plan is traced over and over to make separate sheets for the electrical and the mechanical work (U.S. Navy, 1993, p. 2-5).

That is why you can hold three sheets that look like the same floor plan. They are the same outline carrying different information, and reading the wrong one is a common and expensive mistake.

**What a set normally contains.** The manual says construction drawings "normally include the detail drawings, assembly drawings, bill of materials, and the specifications" (U.S. Navy, 1993, p. 2-5). Note the last item. The specification is not an optional extra document that someone forgot to give you. It is part of the set.

**Who produced it.** The manual describes the division of labour without romance: the engineer works with the architect to decide what materials to use and what construction methods to follow, determines the loads the supporting members will carry and the strength qualities they need, and designs the mechanical systems such as lighting, heating and plumbing. The end result is architectural and engineering design sketches, and "these sketches guide draftsmen in preparing the construction drawings" (U.S. Navy, 1993, p. 2-5).

**The first section of a set, sheet by sheet.** The manual lists it: site plan, plot plan, foundation plans, floor plans and framing plans.

- **Site plan.** Shows "the contours, boundaries, roads, utilities, trees, structures, and any other significant physical features on or near the construction site", with proposed structures shown in outline. By showing both existing and finished contours it "furnishes essential data for the graders" (U.S. Navy, 1993, p. 2-9).
- **Plot plan.** Shows "the survey marks with the elevations and the grading requirements", and is what the building's corners and perimeter are set out from, using batter boards and line stakes. The manual says it "furnishes the essential data for laying out the building" (U.S. Navy, 1993, p. 2-9).
- **Foundation plan.** A plane view taken on a horizontal plane passed through the structure "slightly below the level of the top of the foundation wall" (U.S. Navy, 1993, p. 2-10).
- **Floor plan.** Comes in three flavours. An architectural or structural floor plan shows the structural characteristics at that level. A mechanical floor plan shows plumbing, heating and other non-electrical mechanical components. An electrical floor plan shows the lighting and other electrical systems (U.S. Navy, 1993, p. 2-10).
- **Framing plans.** Show "the size, number, and location of the structural members (steel or wood) that make up the building framework", and may be drawn separately for floors, walls and roof. A floor framing plan "must specify the sizes and spacing of joists, girders, and columns used to support the floor" (U.S. Navy, 1993, p. 2-12).

That last sentence is worth pausing on if you came here from *Construction Math*. The spacing of the members in a real building is specified on a sheet, by somebody, for that building.

**Two more drawing types to recognise.** A **detail drawing** "shows a particular item on a larger scale than that of the general drawing in which the item appears", or shows an item too small to appear on a general drawing at all. An **assembly drawing** is an exterior or sectional view showing details in their proper relationship, usually drawn to a smaller scale from the dimensions of the detail drawings, which "provides a check on the accuracy of the design drawings and often discloses errors" (U.S. Navy, 1993, p. 2-5).

That is a quiet and useful idea: the set is built to disagree with itself where somebody has made a mistake.

:::reveal What does a drawing set show first, in most cases? ||| The location, boundaries, contours and outstanding physical features of the construction site and its adjoining areas, before anything about the building itself.

:::reveal Why might three sheets in one set look like the same floor plan? ||| Because in a complicated structure the electrical and mechanical layouts cannot share one sheet without overcrowding, so the floor plan is traced over to carry each set of information separately.

:::reveal What does the manual say an assembly drawing provides, beyond showing the parts in relationship? ||| A check on the accuracy of the design drawings, which often discloses errors.

## Vocabulary
- **Working drawings**: another name for construction drawings, the set that carries enough information to complete a project.
- **Site plan**: the sheet showing contours, boundaries, roads, utilities, trees and existing structures on or near the site.
- **Plot plan**: the sheet showing survey marks, elevations and grading requirements, used to lay the building out on the ground.
- **Detail drawing**: a drawing of one item at a larger scale than the general drawing it appears in.
- **Assembly drawing**: an exterior or sectional view showing details in their proper relationship, drawn to a smaller scale from the detail dimensions.

## Sources
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. Chapter 2, Drawings and Specifications, pp. 2-4 to 2-13. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf`,
    },
    {
      slug: "plan-elevation-section-detail",
      title: "4 · Plan, elevation, section, detail",
      section: "Section 2 · The drawing set",
      body: `Four words cover most of a residential set, and they are four different ways of standing relative to the building.

**A plan looks down.** General drawings "consist of plans (views from above) and elevations (side or front views) drawn on a relatively small scale" (U.S. Navy, 1993, p. 2-6). A foundation plan is a plane view taken on a horizontal plane passed through the structure slightly below the top of the foundation wall.

**An elevation looks at a face.** The front, rear and sides of a structure are shown "as they would appear projected on vertical planes" (U.S. Navy, 1993, p. 2-12).

**A section cuts.** Sectional views "provide important information about the height, materials, fastening and support systems, and concealed features of a structure", and show how a structure looks when cut vertically by a cutting plane. The cutting plane "is not necessarily continuous", and may be staggered to include as much construction information as possible. Sections are vertical projections like elevations, but they are also detail drawings drawn to large scale, which "aids in reading, and provides information that cannot be given on elevation or plan views" (U.S. Navy, 1993, p. 2-14).

The manual classifies sections as typical or specific. A **typical section** "represents the average condition throughout a structure" and is used where construction features repeat many times. A **specific section** shows one particular place.

**A detail enlarges.** Details are "large-scale drawings that show the builders of a structure how its various parts are to be connected and placed." They do not carry a cutting plane indication but are closely related to sections, and the construction of doors, windows and eaves is customarily shown in details. They are used "whenever the information provided in elevations, plans, and sections is not clear enough", and are grouped so that references can be made easily from the general drawing (U.S. Navy, 1993, p. 2-16).

**Now read one.** The manual works an example across three figures, and following it is the fastest way to feel how a set carries information.

The **foundation plan** (figure 2-10) shows a main foundation of 12 inch and 8 inch concrete masonry unit walls, 28 feet lengthwise and 22 feet crosswise. The lower part of each lengthwise wall is 12 inches thick to give a concrete ledge 4 inches wide. A girder runs through the centre, supported at its ends by two 4 by 12 inch concrete pilasters butting against the end walls, with intermediate support from two 12 by 12 inch concrete piers, each on an 18 by 18 inch spread footing 10 inches deep. Dotted lines around the foundation walls indicate that those walls rest on spread footings too (U.S. Navy, 1993, p. 2-10).

**Section A-A** cuts the same building. It shows that the front and rear portions, the 28 foot measurements, are made of 12 by 8 by 16 inch units centred on a 10 by 24 inch concrete footing, followed by 8 inch units forming a 4 inch ledger for floor joist support, with the main wall then laid with standard 2 1/2 by 4 by 8 inch face brick backed by 4 by 8 by 16 inch units (U.S. Navy, 1993, p. 2-14).

**Section B-B** cuts the other way. It shows both side walls, the 22 foot measurements, 8 inches thick and centred on a 24 inch footing, and it illustrates the pilaster. Hidden lines, drawn dashed, on the 12 inch wide units show that the wall beyond the pilaster is 8 inches thick (U.S. Navy, 1993, pp. 2-14 to 2-15).

Three sheets, one building, and no single sheet carries the answer. The plan gives the layout, the sections give the build-up, and the dashed lines give you what is behind the cut.

**An elevation carries numbers too.** In the manual's small building, the wall surfaces are brick and the roof covering composition shingles. The top of the rafter plate is 8 feet 2 1/4 inches above the level of the finished first floor, and the tops of the finished door and window openings are 7 feet 1 3/4 inches above the same level. The roof is a gable roof with 4 inches of rise for every 12 inches of length, and each window "is identified by a capital letter that goes with the window schedule" (U.S. Navy, 1993, p. 2-12).

Those are feet-and-inches dimensions with fractions in them, which is exactly the arithmetic *Construction Math* lesson 8 teaches. A set assumes you can add and subtract in that base without thinking about it.

**Framing plans have their own conventions.** On a floor framing plan the unbroken double-line symbol indicates joists, drawn in the positions they will occupy. Bridging is shown by a double-line symbol running perpendicular to the joists. Notes identify floor openings, bridging, and girts or plates, and "nominal sizes are used in specifying lumber." The manual adds that dimensions need not be given between joists, because the information is given in notes instead, and gives the note form: 1 inch by 6 inch joists at 2 feet 0 inches cc means centre to centre (U.S. Navy, 1993, p. 2-13). Roof framing plans are drawn the same way, with rafters shown as joists are.

:::reveal What is the difference between an elevation and a section? ||| Both are vertical projections, but an elevation shows a face of the building as it would appear projected on a vertical plane, while a section shows the building cut by a cutting plane, revealing heights, materials, fastenings and concealed features.

:::reveal What do dashed hidden lines tell you in the manual's section B-B? ||| That the wall beyond the pilaster is 8 inches thick, even though the 12 inch wide units are what the cut shows.

:::reveal What does a capital letter beside a window on an elevation refer to? ||| The window schedule, where that mark's characteristics are listed.

## Vocabulary
- **Cutting plane**: the imaginary plane along which a section is cut, which may be staggered rather than continuous.
- **Typical section**: a section representing the average condition throughout a structure, used where features repeat.
- **Specific section**: a section showing one particular location, such as a pilaster.
- **Hidden line**: a dashed line showing an edge or surface that is behind the plane of the view.
- **Pilaster**: a thickened portion of a wall built to support a girder or other concentrated load.
- **On center (cc)**: a spacing measured from the centre of one member to the centre of the next.

## Sources
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. Chapter 2, Drawings and Specifications, pp. 2-6 to 2-16. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The drawing set",
      section: "Section 2 · The drawing set",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the Navy manual describe what a set of related drawings gives the builder?",
            options: [
              "A complete, sequential, graphic description",
              "An approximate visual record of the designer's intent, to be confirmed on site before work begins",
              "A legally binding statement of the minimum the adopted code requires of the structure",
              "A set of alternatives from which the crew leader selects the one best suited to the site",
            ],
            correctIndex: 0,
            explanation:
              "The phrase is a complete, sequential, graphic description of each phase of the construction process. Sequential is the word that tells you where to look.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a set of drawings usually begin by showing?",
            options: [
              "The site and its adjoining areas",
              "The foundation walls and footings, since nothing above them can be located until they are fixed",
              "The finished elevations, because the appearance of the building governs every later choice",
              "The bill of materials, so the quantities can be ordered before the layout is settled",
            ],
            correctIndex: 0,
            explanation:
              "The location, boundaries, contours and outstanding physical features of the construction site and its adjoining areas come first.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "Which three main groups of drawings does a construction drawing set incorporate?",
            options: [
              "Architectural, electrical and mechanical",
              "Structural, civil and landscape, prepared by three separate design disciplines",
              "Preliminary, contract and as-built, produced at three stages of the project",
              "Plan, elevation and section, which are the three ways of viewing the structure",
            ],
            correctIndex: 0,
            explanation:
              "In a simple structure they may share a sheet; in a complicated one they cannot, because of overcrowding.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "Why might a set contain several sheets that look like the same floor plan?",
            options: [
              "The plan is traced over for other layouts",
              "Each trade is issued a private copy of the plan showing only the areas it has been contracted for",
              "The plan is repeated at different scales so the crew can choose the one easiest to read",
              "Each revision of the plan is bound into the set beside the sheet it supersedes",
            ],
            correctIndex: 0,
            explanation:
              "In a complicated structure a combination of layouts is not possible because of overcrowding, so the floor plan is traced over and over for the electrical and mechanical layouts.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "Which of these does the manual say construction drawings normally include?",
            options: [
              "The specifications",
              "The building permit issued by the authority having jurisdiction over the site",
              "The contractor's schedule of values, broken down by division of the work",
              "The manufacturer's installation instructions for every product named on the sheets",
            ],
            correctIndex: 0,
            explanation:
              "Detail drawings, assembly drawings, bill of materials, and the specifications. The specification is part of the set, not an optional extra.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "According to the manual, what does the engineer determine?",
            options: [
              "The loads members carry and the strength they need",
              "The order in which the trades will be scheduled onto the site once the permit issues",
              "The commercial terms under which materials will be purchased for the project",
              "The final appearance of the structure, including the finishes and the colour scheme",
            ],
            correctIndex: 0,
            explanation:
              "The engineer works with the architect on materials and methods, determines the loads the supporting members will carry and the strength qualities they must have, and designs the mechanical systems.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What do the architectural and engineering design sketches guide?",
            options: [
              "Draftsmen preparing the construction drawings",
              "Inspectors deciding which stages of the work will require a visit to the site",
              "Estimators pricing the work before the owner commits to a contract",
              "Suppliers determining which products will be stocked for the project",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the end result of the engineer's and architect's work is design sketches, and those sketches guide draftsmen in preparing the construction drawings.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a site plan show?",
            options: [
              "Contours, boundaries, roads, utilities and trees",
              "The sizes and spacing of joists, girders and columns supporting each floor of the building",
              "The interior finish material for each room and floor, listed by surface",
              "The vertical build-up of the wall from the footing to the rafter plate",
            ],
            correctIndex: 0,
            explanation:
              "It also shows structures and other significant physical features on or near the site, with proposed structures in outline.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "Whom does a site plan furnish essential data for, by showing existing and finished contours?",
            options: [
              "The graders",
              "The electricians, who set the service entrance from the finished grade at the meter",
              "The masons, who lay the first course at the finished contour on each elevation",
              "The roofers, who set the pitch from the difference between the two contour sets",
            ],
            correctIndex: 0,
            explanation:
              "Showing both existing and finished contours is what makes the site plan useful for grading.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a plot plan show?",
            options: [
              "Survey marks, elevations and grading requirements",
              "The arrangement of rooms at each level, with the widths and locations of doors and windows",
              "The concealed features of the structure revealed by a vertical cut through it",
              "The quantity of each material required to complete the work described",
            ],
            correctIndex: 0,
            explanation:
              "It furnishes the essential data for laying out the building, and corners and perimeter are set from it using batter boards and line stakes.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What are batter boards and line stakes used with?",
            options: [
              "The plot plan",
              "The finish schedule, to mark out which surfaces receive which material in each room",
              "The framing plan, to mark joist positions along the sill before the joists are set",
              "The revision block, to record which sheet a field change was taken from",
            ],
            correctIndex: 0,
            explanation:
              "The plot plan is used to set up the corners and perimeter of the building with batter boards and line stakes.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "Where is the horizontal plane taken for a foundation plan?",
            options: [
              "Slightly below the top of the foundation wall",
              "At the level of the finished first floor, so the floor framing appears in the same view",
              "At the underside of the footing, so the bearing surface is the one shown",
              "At the average of the existing and finished contours shown on the site plan",
            ],
            correctIndex: 0,
            explanation:
              "A foundation plan is a plane view, projected onto a horizontal plane passed through the structure slightly below the level of the top of the foundation wall.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does an architectural or structural floor plan show?",
            options: [
              "The structural characteristics at that level",
              "The plumbing and heating systems and other non-electrical mechanical components at that level",
              "The lighting system and any other electrical systems installed at that level",
              "The finish material specified for the walls, floors and ceilings at that level",
            ],
            correctIndex: 0,
            explanation:
              "The manual distinguishes architectural or structural, mechanical, and electrical floor plans, each showing the characteristics at the level of the plane of projection.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a mechanical floor plan show?",
            options: [
              "Plumbing, heating and other non-electrical systems",
              "The lighting circuits, switches and outlets serving the rooms at that level",
              "The sizes and spacing of the joists and girders carrying the floor at that level",
              "The doors, windows and partitions arranged at that level, with their dimensions",
            ],
            correctIndex: 0,
            explanation:
              "It shows the plumbing and heating systems and any other mechanical components other than those that are electrical.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What do framing plans show?",
            options: [
              "The size, number and location of structural members",
              "The contours of the site before and after grading, with the building outline overlaid",
              "The quality of workmanship required for the installation of doors and windows",
              "The relationship of the finished building to the boundaries of the lot it sits on",
            ],
            correctIndex: 0,
            explanation:
              "Steel or wood members making up the building framework, and separate framing plans may be drawn for the floors, walls and roof.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What must a floor framing plan specify, according to the manual?",
            options: [
              "Sizes and spacing of joists, girders and columns",
              "The species and grade of every piece of lumber to be delivered to the site",
              "The order in which the members are to be set, from the first joist to the last",
              "The allowable deflection of each member under the design live load",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is the direct answer to Construction Math's deferral: the spacing of members in a real building is specified on a sheet, for that building.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What do wall framing plans show?",
            options: [
              "How openings are framed, and ceiling heights",
              "The finish material applied to each wall surface once the framing has been closed in",
              "The load path from the rafter plate down to the spread footing under each column",
              "The location of every electrical box and switch to be set in the wall cavity",
            ],
            correctIndex: 0,
            explanation:
              "The manual says wall framing plans show the location and method of framing openings and ceiling heights, so studs and posts can be cut.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What is a detail drawing?",
            options: [
              "An item drawn at a larger scale",
              "A sheet listing every item in the project by mark, with its characteristics in columns",
              "A sketch prepared by the crew leader on site to convey an idea to the crew",
              "A view of the building cut vertically to show its concealed construction",
            ],
            correctIndex: 0,
            explanation:
              "It shows a particular item on a larger scale than the general drawing in which it appears, or shows an item too small to appear on the general drawing at all.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does the manual say an assembly drawing provides?",
            options: [
              "A check on the accuracy of the design drawings",
              "The legal record of what was built, prepared after the work has been completed",
              "The only dimensions a builder may rely on, since detail drawings are not to scale",
              "An approved alternative to the specification where the two would otherwise conflict",
            ],
            correctIndex: 0,
            explanation:
              "Assembly drawings are usually drawn to a smaller scale from the dimensions of the detail drawings, which checks the design and often discloses errors.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "At what scale is an assembly drawing usually drawn, relative to the detail drawings?",
            options: [
              "Smaller",
              "Larger, so that the relationships between parts can be measured directly from the sheet",
              "The same, so that the two can be laid over one another for comparison",
              "Full size, so that a template can be taken off the sheet for shop fabrication",
            ],
            correctIndex: 0,
            explanation:
              "Assembly drawings are usually drawn to a smaller scale from the dimensions of the detail drawings.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does the manual say general drawings are drawn on?",
            options: [
              "A relatively small scale",
              "A full-size layout taken directly from the plot plan and the survey marks",
              "The same scale as the details, so that references between them stay exact",
              "A scale chosen by the crew leader to suit the paper available on site",
            ],
            correctIndex: 0,
            explanation:
              "General drawings consist of plans, which are views from above, and elevations, which are side or front views, drawn on a relatively small scale.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What is a plan, as a type of view?",
            options: [
              "A view from above",
              "A side or front view of the structure projected on a vertical plane",
              "A vertical cut through the structure showing its concealed construction",
              "An enlarged view of one item taken from a general drawing",
            ],
            correctIndex: 0,
            explanation:
              "Plans are views from above and elevations are side or front views. The two words describe where you are standing, not what is drawn.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "How are elevations described in the manual?",
            options: [
              "Faces projected on vertical planes",
              "Horizontal slices taken at each floor level and viewed from above",
              "Enlarged drawings showing how parts are connected and placed",
              "Tabular listings of the materials that make up each exterior surface",
            ],
            correctIndex: 0,
            explanation:
              "The front, rear and sides of a structure as they would appear projected on vertical planes.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What kind of information do sectional views provide?",
            options: [
              "Height, materials, fastenings and concealed features",
              "Boundaries, contours, roads, utilities and the trees standing near the structure",
              "The quantity of each material needed, listed by stock number and unit",
              "The interior finish specified for each room, floor by floor",
            ],
            correctIndex: 0,
            explanation:
              "That is exactly why a section exists: it shows what a plan and an elevation cannot, because the cut exposes it.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the manual say about the cutting plane of a section?",
            options: [
              "It is not necessarily continuous",
              "It must run in a straight line from one exterior wall to the opposite exterior wall",
              "It must be taken at right angles to the ridge of the roof in every case",
              "It is fixed by the draftsman before the plans are drawn and may not be moved",
            ],
            correctIndex: 0,
            explanation:
              "It may be staggered to include as much construction information as possible, the same way a horizontal cutting plane may be staggered in building plans.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "At what scale are sectional views drawn?",
            options: [
              "Large",
              "Small, so that the whole building can be shown on one sheet in a single cut",
              "The same as the general drawings, so that the two can be read together",
              "Whatever scale remains available once the plans and elevations are laid out",
            ],
            correctIndex: 0,
            explanation:
              "Sections are detail drawings drawn to large scale, which aids in reading and gives information that cannot be given on elevation or plan views.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does a typical section represent?",
            options: [
              "The average condition throughout a structure",
              "The single worst case in the structure, so the detail covers every lesser condition",
              "A condition found in most buildings of that type in the jurisdiction",
              "The condition the designer expects an inspector to look at first",
            ],
            correctIndex: 0,
            explanation:
              "Typical sections are used when construction features are repeated many times. A specific section shows one particular place, such as a pilaster.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What do details show?",
            options: [
              "How parts are connected and placed",
              "The boundaries and contours of the site on which the structure is placed",
              "The average condition repeated throughout the structure",
              "The quantities of material each trade must supply for the work",
            ],
            correctIndex: 0,
            explanation:
              "Details are large-scale drawings showing the builders how the various parts are to be connected and placed, and are used when plans, elevations and sections are not clear enough.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What do details lack that sections have?",
            options: [
              "A cutting plane indication",
              "Dimensions, which are carried instead by the general drawings they are taken from",
              "A large scale, since details are drawn smaller than the drawing they come from",
              "A reference to the sheet they belong to, which is why they are grouped together",
            ],
            correctIndex: 0,
            explanation:
              "Details do not use the cutting plane indication, although they are closely related to sections.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Which constructions does the manual say are customarily shown in detail drawings?",
            options: [
              "Doors, windows and eaves",
              "Footings, piers and pilasters, since their reinforcement cannot be shown in plan",
              "Roof trusses, since their web members are too small to appear on a framing plan",
              "Site utilities, since their depths cannot be shown on a plan view",
            ],
            correctIndex: 0,
            explanation:
              "The construction of doors, windows and eaves is customarily shown in detail drawings of buildings.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Why are detail drawings grouped together on a sheet?",
            options: [
              "So references from the general drawing are easy",
              "So that the trades can be issued only the details that concern their own scope of work",
              "So that the sheet can be revised without affecting any of the general drawings",
              "So that the scale used for the details need only be stated once on the sheet",
            ],
            correctIndex: 0,
            explanation:
              "The manual says they are usually grouped so that references may be made easily from the general drawing.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "In the manual's worked example, what are the plan dimensions of the main foundation?",
            options: [
              "28 feet by 22 feet",
              "24 feet by 18 feet, measured to the outside face of the spread footings under the walls",
              "32 feet by 26 feet, measured between the centres of the end pilasters",
              "22 feet by 16 feet, measured to the inside face of the 12 inch masonry units",
            ],
            correctIndex: 0,
            explanation:
              "The foundation plan shows 12 inch and 8 inch concrete masonry unit walls measuring 28 feet lengthwise and 22 feet crosswise.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Why is the lower portion of each lengthwise wall 12 inches thick in the worked example?",
            options: [
              "To provide a 4 inch concrete ledge",
              "To resist the lateral pressure of the backfill placed against it after the walls are built",
              "To carry the two 12 by 12 inch piers that support the girder at its mid points",
              "To match the thickness of the spread footing cast beneath it",
            ],
            correctIndex: 0,
            explanation:
              "The plan shows the lower portion of each lengthwise section of wall at 12 inches thick to provide a concrete ledge 4 inches wide.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What supports the ends of the girder in the manual's foundation plan?",
            options: [
              "Two concrete pilasters",
              "Two 18 by 18 inch spread footings cast integrally with the end foundation walls",
              "Two built-up corner posts made from ordinary studs nailed together",
              "Two steel bar joists bearing on the end walls at the ledger",
            ],
            correctIndex: 0,
            explanation:
              "Two 4 by 12 inch concrete pilasters butting against the end foundation walls, with intermediate support from two 12 by 12 inch concrete piers.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What do the dotted lines around the foundation walls indicate in that plan?",
            options: [
              "The walls rest on spread footings",
              "The walls are to be built only after the interior piers have been set and cured",
              "The walls shown are existing and are to remain in place during the work",
              "The walls are drawn at a different scale from the rest of the plan",
            ],
            correctIndex: 0,
            explanation:
              "The dotted lines show that the foundation walls, like the piers, are supported on spread footings.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "In section A-A, what is the front and rear wall built from at its base?",
            options: [
              "12 by 8 by 16 inch masonry units",
              "Standard 2 1/2 by 4 by 8 inch face brick laid directly on the concrete footing",
              "4 by 8 by 16 inch masonry units backing a brick veneer above grade",
              "Cast-in-place concrete formed to the full height of the foundation wall",
            ],
            correctIndex: 0,
            explanation:
              "Section A-A shows 12 by 8 by 16 inch units centred on a 10 by 24 inch concrete footing, followed by 8 inch units forming a 4 inch ledger for floor joist support.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does section A-A show the 8 inch units forming?",
            options: [
              "A 4 inch ledger for floor joist support",
              "A continuous bond beam carrying the girder across the full length of the wall",
              "A cavity between the brick and the block for drainage and ventilation",
              "A pilaster projecting into the crawl space to support the intermediate piers",
            ],
            correctIndex: 0,
            explanation:
              "They follow the 12 inch units and form a 4 inch ledger for floor joist support, and in that arrangement also form a 4 inch support for the brick.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "In section B-B, how thick are the side walls?",
            options: [
              "8 inches",
              "12 inches for their full height, matching the lower portion of the lengthwise walls",
              "10 inches, matching the thickness of the concrete footing beneath them",
              "24 inches, which is the width of the footing they are centred on",
            ],
            correctIndex: 0,
            explanation:
              "Both side walls, the 22 foot measurements, are 8 inches thick and centred on a 24 inch concrete footing.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What do the hidden lines on the 12 inch wide units in section B-B tell you?",
            options: [
              "The wall beyond the pilaster is 8 inches thick",
              "The units shown are to be omitted and replaced with cast-in-place concrete",
              "The units continue below the level of the cut to the top of the footing",
              "The units are drawn from a detail on another sheet rather than from the section",
            ],
            correctIndex: 0,
            explanation:
              "Hidden lines are dashed and show what is behind the plane of the view. Here they show the wall thickness beyond the thickened pilaster.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the extra 4 inch thickness of the pilaster provide?",
            options: [
              "Centre support for the girder",
              "A bearing ledge for the brick veneer to start from at the corner of the building",
              "Additional resistance to the frost heave that would otherwise lift the end wall",
              "A chase for the plumbing and heating lines rising from the crawl space",
            ],
            correctIndex: 0,
            explanation:
              "The manual notes that the extra thickness provides a centre support for the girder, which in turn supports the floor joists.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "How far above the finished first floor is the top of the rafter plate in the manual's elevations?",
            options: [
              "8 feet 2 1/4 inches",
              "7 feet 1 3/4 inches, which is also the height of the finished door and window openings",
              "9 feet 6 inches, measured from the top of the foundation wall rather than the floor",
              "8 feet 0 inches, which is the nominal height of a standard stud wall",
            ],
            correctIndex: 0,
            explanation:
              "The elevations give 8 feet 2 1/4 inches for the rafter plate and 7 feet 1 3/4 inches for the tops of the finished door and window openings.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What is the roof slope in the manual's elevations?",
            options: [
              "4 inches of rise per 12 inches of length",
              "6 inches of rise per 12 inches of length, which suits the composition shingles specified",
              "A slope equal to half that of the bottom chord, as in a scissors truss",
              "19.2 inches of rise across each 96 inch sheet of roof sheathing",
            ],
            correctIndex: 0,
            explanation:
              "A gable roof with 4 inches of rise for every 12 inches of length, on a house with brick walls and composition shingles.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "How is each window identified on the manual's elevations?",
            options: [
              "By a capital letter",
              "By a number keyed to the floor on which the window is located in the finished building",
              "By its rough opening dimensions, written beside it in feet and inches",
              "By the manufacturer's catalogue number, taken from the specification",
            ],
            correctIndex: 0,
            explanation:
              "Each window is identified by a capital letter that goes with the window schedule.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Which arithmetic does a residential elevation assume you can do?",
            options: [
              "Feet and inches with fractions",
              "Conversion between the international foot and the retired United States survey foot",
              "Calculation of the design live load carried by each horizontal member shown",
              "Interpolation between the contour intervals drawn on the site plan",
            ],
            correctIndex: 0,
            explanation:
              "Dimensions like 8 feet 2 1/4 inches and 7 feet 1 3/4 inches are the mixed-base arithmetic Construction Math lesson 8 teaches.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "On a floor framing plan, what does the unbroken double-line symbol indicate?",
            options: [
              "Joists",
              "Bridging, drawn perpendicular to the members it braces between the supports",
              "Girders, distinguished from joists by being drawn in a heavier line weight",
              "Openings in the floor, which are doubled around on every side",
            ],
            correctIndex: 0,
            explanation:
              "Joists are drawn in the positions they will occupy in the completed building. Bridging is the double-line symbol running perpendicular to them.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What sizes does the manual say are used in specifying lumber on framing plans?",
            options: [
              "Nominal",
              "Actual dressed sizes, so the layout arithmetic works without converting from a nominal size",
              "Metric sizes, since framing plans follow the international standards for lumber",
              "Whatever the supplier has stocked, recorded on the plan after delivery",
            ],
            correctIndex: 0,
            explanation:
              "The manual says nominal sizes are used in specifying lumber. Construction Math lesson 8 covers why nominal and actual differ and which one the layout arithmetic uses.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the framing plan note \"1 in. x 6 in. joists @ 2'-0\\\" cc\" mean?",
            options: [
              "Spaced 2 feet centre to centre",
              "Spanning 2 feet 0 inches between the supports at each end of the member",
              "Doubled at every second location along the run of the floor",
              "Cut 2 feet 0 inches longer than the clear opening, to bear on the sill at each end",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives this exact note form and says cc means centre to centre. Dimensions need not be given between joists, because the note carries it.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "How are roof framing plans drawn, according to the manual?",
            options: [
              "The same way as floor framing plans",
              "As a series of sections cut through the roof at each bearing point along the ridge",
              "As elevations of the completed roof with the covering shown in place",
              "As details, since rafters are too small to show on a general drawing",
            ],
            correctIndex: 0,
            explanation:
              "Rafters are shown in the same manner as joists, and the builder should visualise looking down on the roof before any sheathing is added.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the course say no single sheet in the worked example carries?",
            options: [
              "The whole answer",
              "A dimension, since every dimension in that example is given in the specification instead",
              "A scale, since the scale applies to the whole set rather than to a sheet",
              "A revision letter, since none of the three sheets had been revised",
            ],
            correctIndex: 0,
            explanation:
              "The plan gives the layout, the sections give the build-up, and the dashed lines give what is behind the cut. Three sheets, one building.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What is a pilaster?",
            options: [
              "A thickened portion of a wall carrying a load",
              "A short vertical member resting directly on a footing or driven into the ground",
              "A horizontal member carrying the weight of masonry above an opening",
              "A lengthwise member supporting the peak ends of the rafters in a roof",
            ],
            correctIndex: 0,
            explanation:
              "In the worked example the pilaster is built into the end wall to support the girder, and its extra 4 inches provides that support.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does \"on center\" measure between?",
            options: [
              "The centres of adjacent members",
              "The facing surfaces of adjacent members, which is what a tape hooked on a stud reads",
              "The centre of the first member and the end of the plate it is set on",
              "The edges of the sheathing that will span across the members",
            ],
            correctIndex: 0,
            explanation:
              "A spacing measured from the centre of one member to the centre of the next, which is why the first layout mark is not at the full spacing.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What is a hidden line?",
            options: [
              "A dashed line showing what is behind the view",
              "A light construction line the draftsman leaves in place to guide later revisions",
              "A line showing the path of a utility that has not yet been installed",
              "A line drawn outside the border to mark the zone the drawing belongs to",
            ],
            correctIndex: 0,
            explanation:
              "In section B-B the hidden lines show that the wall beyond the pilaster is 8 inches thick.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Which of these is NOT one of the four words section 2 says covers most of a residential set?",
            options: [
              "Schedule",
              "Section, which shows the structure cut vertically by a cutting plane",
              "Elevation, which shows a face projected on a vertical plane",
              "Detail, which enlarges an item so its connections can be shown",
            ],
            correctIndex: 0,
            explanation:
              "The four are plan, elevation, section and detail. Schedules are covered in section 3, where they belong with notes and the specification.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the course call the idea that an assembly drawing checks the design drawings?",
            options: [
              "The set is built to disagree with itself where there is a mistake",
              "A redundancy that modern computer-aided drafting has made unnecessary in practice",
              "A reason to treat the assembly drawing as the governing document in any conflict",
              "A courtesy the draftsman extends to the estimator rather than to the builder",
            ],
            correctIndex: 0,
            explanation:
              "Drawing the assembly to a smaller scale from the detail dimensions provides a check on accuracy and often discloses errors.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does the course say knowing the sequence of a set gives you?",
            options: [
              "Most of knowing where to look",
              "The authority to determine which sheet governs when two of them disagree",
              "A complete substitute for reading the written specification that accompanies it",
              "The ability to produce a takeoff without reading any dimension on the sheets",
            ],
            correctIndex: 0,
            explanation:
              "A set is a sequence: outside first, then down into the ground, then up, then the systems, then the finishes.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does the manual say a builder should visualise when reading a roof framing plan?",
            options: [
              "Looking down on the roof before the sheathing",
              "Standing at the ridge and looking along the run of the rafters toward each gable end",
              "The completed roof with its covering in place, as it will appear from the street",
              "A vertical cut taken through the ridge, showing the rafters in section",
            ],
            correctIndex: 0,
            explanation:
              "The manual says to visualise the plan as looking down on the roof before any of the roofing material, meaning the sheathing, has been added.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Scale, dimensions and the specification
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "scale-dimensions-and-the-title-block",
      title: "5 · Scale, dimensions, and the block in the corner",
      section: "Section 3 · Scale, dimensions and the specification",
      body: `Every sheet carries a small block of text that most people never read, and it contains the two things you need before you trust anything else on the page: what scale the drawing is at, and whether you are holding the current version.

**The title block.** It "is located in the lower-right corner of all blueprints and drawings prepared according to MIL-STDs." It contains the drawing number, the name of the part or assembly the sheet represents, and all the information required to identify it. It also includes the name and address of the government agency or organisation preparing the drawing, the scale, the drafting record, the authentication and the date (U.S. Navy, 2003, pp. 1-2 to 1-3).

One small convention is worth knowing because it looks like an error: "A space within the title block with a diagonal or slant line drawn across it shows that the information is not required or is given elsewhere on the drawing" (U.S. Navy, 2003, p. 1-3). A slash is not a blank somebody forgot.

**The drawing number and the sheet count.** Each sheet has a drawing number, in a block in the lower right corner of the title block, and it may be repeated near the top border or on the reverse at the other end "so it will be visible when the drawing is rolled." On a multi-sheet drawing the number block shows the sheet number and the number of sheets in the series (U.S. Navy, 2003, p. 1-3). If you have sheet 3 of 9 and nobody gave you the other eight, that block is how you find out.

**The revision block, and why you check it first.** "If a revision has been made, the revision block will be in the upper right corner of the blueprint." Every revision in the block "is identified by a letter and a brief description of the revision." A revised drawing is shown by adding a letter to the original number, and when the print is revised again "the letter A in the revision block is replaced by the letter B and so forth" (U.S. Navy, 2003, pp. 1-3 to 1-4).

That is the whole mechanism for telling a current sheet from a stale one. It is also why a set with no revision block entries is not necessarily unrevised; it may simply be the original.

**Zone numbers.** These "serve the same purpose as the numbers and letters printed on borders of maps", letting you find a point or part by mentally drawing horizontal and vertical lines from the letters and numerals until they intersect. On large drawings, parts numbered in the title block are found by looking up the numbers in squares along the lower border (U.S. Navy, 2003, p. 1-4).

**The scale block, and what a scale actually says.** The scale block in the title block "shows the size of the drawing compared with the actual size of the part." It may be written as 1" = 2", 1" = 12", 1/2" = 1', and so on, or as full size, one-half size, one-fourth size. "If the scale is shown as 1" = 2", each line on the print is shown one-half its actual length. If a scale is shown as 3" = 1", each line on the print is three times its actual length" (U.S. Navy, 2003, p. 1-4).

The scale is chosen "to fit the object being drawn and space available on a sheet of drawing paper." That is an ordinary, practical reason, and it is worth holding on to, because it tells you the scale is a drafting convenience rather than a promise about the paper in your hand.

**And then the rule that governs the rest of your life with drawings.** The manual puts it in four words: "Never measure a drawing; use dimensions."

It gives three reasons, and each of them is a separate failure mode. "The print may have been reduced in size from the original drawing." "Or, you might not take the scale of the drawing into consideration." And "paper stretches and shrinks as the humidity changes." Then the instruction: "Read the dimensions on the drawing; they always remain the same" (U.S. Navy, 2003, p. 1-4).

A photocopier, a PDF printed to fit, a rolled sheet left in a truck through a wet week: all three change what a ruler reads off the paper and none of them changes the number written on it.

**Graphic scales are a different thing.** "Graphical scales on maps and plot plans show the number of feet or miles represented by an inch. A fraction such as 1/500 means that one unit on the map is equal to 500 like units on the ground." A large scale map has a scale of 1" = 10', and a map at 1" = 1000' is a small scale map (U.S. Navy, 2003, p. 1-4). Note that "large scale" means each inch covers less ground, which is the opposite of what the words sound like.

**Where the dimensions have to agree.** The Builder manual gives the check to run on any floor plan: "In dimensioning floor plans, it is very important to check the overall dimension against the sum of the partial dimensions of each part of the structure" (U.S. Navy, 1993, p. 2-11).

That is a feet-and-inches addition with fractions in it, carried at twelve rather than ten, which is the arithmetic *Construction Math* lesson 8 teaches. Adding a dimension string and finding it does not match the overall is one of the most common real errors in a set, and it is found with a pencil, not with a ruler.

:::reveal Where is the title block, and where is the revision block? ||| The title block is in the lower-right corner of drawings prepared to MIL-STDs, and the revision block, when there is one, is in the upper right corner.

:::reveal What does a diagonal line drawn across a space in the title block mean? ||| That the information is not required or is given elsewhere on the drawing, not that somebody forgot to fill it in.

:::reveal Give the manual's three reasons for never measuring a drawing. ||| The print may have been reduced from the original, you might not take the scale into account, and paper stretches and shrinks as humidity changes. The written dimensions always remain the same.

:::reveal What check does the Builder manual say to run on a dimensioned floor plan? ||| Check the overall dimension against the sum of the partial dimensions of each part of the structure.

## Vocabulary
- **Title block**: the block in the lower-right corner carrying the drawing number, name, scale, date, authentication and preparing organisation.
- **Revision block**: the block in the upper right corner listing each revision by letter with a brief description.
- **Scale block**: the part of the title block stating the size of the drawing compared with the actual size of the thing drawn.
- **Zone number**: a border reference, like a map grid, used to locate a point or part on a large drawing.
- **Graphic scale**: a scale expressed as a ratio or as feet per inch, used on maps and plot plans.

## Sources
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. Chapter 2, Drawings and Specifications, p. 2-11. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
U.S. Navy. (2003). *Blueprint reading and sketching* (NAVEDTRA 14040) [Nonresident training course]. Naval Education and Training Professional Development and Technology Center. Chapter 1, Blueprints, pp. 1-2 to 1-4. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Blueprint-Reading-and-Sketching-NAVEDTRA-14040.pdf`,
    },
    {
      slug: "schedules-notes-and-the-specification",
      title: "6 · Schedules, notes, and the document that wins",
      section: "Section 3 · Scale, dimensions and the specification",
      body: `A drawing cannot say everything. Three other carriers of information sit around it, and the last of them outranks it.

**Schedules.** "A schedule is a group of general notes, usually grouped in tabular form according to materials of construction." General notes are the notes on a drawing not accompanied by a leader and an arrowhead. Item schedules for doors, rooms, footings and so on are more detailed (U.S. Navy, 1993, p. 2-16).

The mechanism is a mark. Doors "may be identified as to size, type, and style with code numbers placed next to each symbol in a plan view." That code number, or mark, "is then entered on a line in a door schedule, and the principal characteristics of the door are entered in successive columns along the line." An "Amount Required" column allows a quantity check on doors of the same design as well as the total number required. And a mark that combines a number with a letter does double duty: "the number identifies the floor on which the door is located, and the letter identifies the door design." A "Remarks" column allows identification by type, such as panel or flush, by style, and by material (U.S. Navy, 1993, p. 2-16).

A window schedule works the same way, with the mark placed next to the window symbol on the plan or the elevation. A finish schedule "specifies the interior finish material for each room and floor in the building", covering walls, floors, ceilings, baseboards, doors and window trim (U.S. Navy, 1993, p. 2-16).

The manual is blunt about why schedules exist: the schedule "is a convenient way of presenting pertinent data without making the Builder refer to the specification."

**Notes.** These are placed "a minimum of 3 inches below the Revision block in the right-hand side of the first sheet." Their purpose "is to give additional information that clarifies a detail or explains how a certain phase of construction is to be performed." The instruction that follows is the one to keep: "You should read all notes, along with the specifications, while you are planning a project" (U.S. Navy, 1993, p. 2-18). On a blueprint, notes "are placed on drawings to give additional information to clarify the object", and leader lines show the precise part a note applies to (U.S. Navy, 2003, p. 1-6).

A legend, when there is one, "is placed in the upper right corner of a blueprint below the revision block" and explains or defines a symbol or special mark used on that sheet (U.S. Navy, 2003, p. 1-6).

**The specification, and why it exists at all.** The Builder manual starts from the limits of drawing: "Because many aspects of construction cannot be shown graphically, even the best prepared construction drawings often inadequately show some portions of a project." It asks two questions a drawing cannot answer. "How can anyone show on a drawing the quality of workmanship required for the installation of doors and windows? Or, who is responsible for supplying the materials?" The standard procedure "is to supplement construction drawings with detailed written instructions. These written instructions, called specifications (or more commonly specs), define and limit materials and fabrication to the intent of the engineer or designer" (U.S. Navy, 1993, p. 2-18).

Project specifications "give detailed information regarding materials and methods of work for a particular construction project", covering general conditions, scope of work, quality of materials, standards of workmanship and protection of finished work (U.S. Navy, 1993, p. 2-20).

**How the two documents divide the work.** "The drawings and project specifications are inseparable. Drawings indicate what the project specifications do not cover. Project specifications indicate what the drawings do not portray, or they further clarify details that are not covered amply by the drawings and notes on the drawings" (U.S. Navy, 1993, p. 2-20).

**And the rule that settles a fight.** "Whenever there is conflicting information between the drawings and project specs, the specifications take precedence over the drawings" (U.S. Navy, 1993, p. 2-20).

Two cautions before you carry that anywhere. First, this is the Navy's rule for work under its own jurisdiction, stated in its own training manual. A private construction contract states its own order of precedence, and that contract is what governs the job. Second, the useful part is not the answer but the habit: when two documents disagree, somebody has already decided which one wins, and your job is to find out where that decision is written rather than to guess.

**How a specification is organised.** For consistency, the specification format is organised into 16 basic divisions, used throughout the military and civilian construction industry. Division 1 is General Requirements, Division 2 Site Work, Division 3 Concrete, Division 4 Masonry, Division 5 Metals, Division 6 Wood and Plastics, Division 7 Thermal and Moisture Protection, Division 8 Doors and Windows, Division 9 Finishes, Division 10 Specialties, Division 11 Equipment, Division 12 Furnishings, Division 13 Special Construction, Division 14 Conveying Systems, Division 15 Mechanical Systems and Division 16 Electrical Systems (U.S. Navy, 1993, pp. 2-20 to 2-21).

Each division is divided into sections, and the technical sections follow a three-part format: "The first part, General, includes requirements of a general nature. Part 2, Products, addresses the products or quality of materials and equipment to be included in the work. The third part, Execution, provides detailed requirements for performance of the work" (U.S. Navy, 1993, p. 2-21).

Knowing that shape is how you find something in a specification you have never seen. Masonry questions live in a Division 4 section; within that section, what may be used is Part 2 and how it must be done is Part 3.

:::reveal What is the mechanism that connects a symbol on a plan to a line in a schedule? ||| A mark, which is a code number or a number and letter placed next to the symbol and entered on a line in the schedule, with the item's characteristics in columns along that line.

:::reveal What two questions does the Builder manual use to show why a specification is needed? ||| How the quality of workmanship required for installing doors and windows could be shown on a drawing, and who is responsible for supplying the materials.

:::reveal What does the Navy manual say happens when the drawings and the project specifications conflict? ||| The specifications take precedence over the drawings. On a private job, the contract states its own order of precedence, so find where that decision is written.

:::reveal In the three-part section format, where do you look for what may be used, and where for how it must be done? ||| Part 2, Products, for what may be used, and Part 3, Execution, for how the work must be performed.

## Vocabulary
- **Schedule**: a tabular group of notes listing items such as doors, windows or finishes by mark, with their characteristics in columns.
- **Mark**: the code placed beside a symbol on a drawing that keys it to a line in a schedule.
- **General note**: a note on a drawing not accompanied by a leader and an arrowhead.
- **Leader line**: the line connecting a note to the precise part it applies to.
- **Order of precedence**: the stated rule for which document governs when two project documents disagree.

## Sources
U.S. Navy. (1993, March). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043) [Nonresident training course]. Chapter 2, Drawings and Specifications, pp. 2-16 to 2-21. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
U.S. Navy. (2003). *Blueprint reading and sketching* (NAVEDTRA 14040) [Nonresident training course]. Naval Education and Training Professional Development and Technology Center. Chapter 1, Blueprints, p. 1-6. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Blueprint-Reading-and-Sketching-NAVEDTRA-14040.pdf`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Scale, dimensions and the specification",
      section: "Section 3 · Scale, dimensions and the specification",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where is the title block located on drawings prepared according to MIL-STDs?",
            options: [
              "Lower-right corner",
              "Upper right corner, directly beneath the revision block and above the legend",
              "Along the lower border, in the squares used for zone reference numbers",
              "On the reverse of the sheet, so it is visible when the drawing is rolled",
            ],
            correctIndex: 0,
            explanation:
              "The manual states it plainly. The revision block, when there is one, goes in the upper right corner instead.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Which of these does the title block contain?",
            options: [
              "The scale",
              "The list of every revision made to the sheet, each identified by a letter and a description",
              "The legend defining the symbols and special marks used on that sheet",
              "The schedule of doors and windows keyed to the marks on the plan",
            ],
            correctIndex: 0,
            explanation:
              "It contains the drawing number, the name of the part or assembly, the preparing organisation's name and address, the scale, the drafting record, the authentication and the date.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does a diagonal line drawn across a space in the title block mean?",
            options: [
              "The information is not required or is elsewhere",
              "The information in that space has been superseded by a later revision of the sheet",
              "The space is reserved for the authority having jurisdiction to stamp when it approves",
              "The sheet is a preliminary issue and the space will be completed before construction",
            ],
            correctIndex: 0,
            explanation:
              "A slash is a convention, not an omission. The manual says it shows the information is not required or is given elsewhere on the drawing.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Why might a drawing number be repeated on the reverse of the sheet?",
            options: [
              "So it is visible when the drawing is rolled",
              "So the sheet can be identified after the title block has been trimmed from the border",
              "So a second organisation preparing the same drawing can record its own number",
              "So the estimator can file the sheet by number without unrolling it to check",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the number may appear near the top border line in the upper corner, or on the reverse side at the other end, for exactly that reason.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does the number block show on a drawing with more than one sheet?",
            options: [
              "The sheet number and the number of sheets",
              "The number of revisions made to that sheet since the original issue of the set",
              "The zone reference in which the drawing number itself appears on the sheet",
              "The scale at which each of the other sheets in the series was drawn",
            ],
            correctIndex: 0,
            explanation:
              "Sheet 3 of 9 tells you that six sheets are missing from the set in your hands.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Where is the revision block, when a drawing has one?",
            options: [
              "Upper right corner",
              "Lower-right corner, immediately above the drawing number within the title block",
              "Along the right-hand side of the first sheet, three inches below the notes",
              "In the same block as the bill of material, so quantities and revisions stay together",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the revision block will be in the upper right corner of the blueprint, and the legend goes below it.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "How is each revision identified in the revision block?",
            options: [
              "By a letter and a brief description",
              "By the date of the change and the initials of the draftsman who made it on the sheet",
              "By a cloud drawn around the changed area with an arrowhead pointing into it",
              "By a new drawing number issued in place of the original one",
            ],
            correctIndex: 0,
            explanation:
              "A revised drawing is shown by adding a letter to the original number, and on the next revision the letter A is replaced by B and so on.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What happens to the letter in the revision block when a print is revised again?",
            options: [
              "A is replaced by B",
              "A second letter is added beside the first, so the block reads A and B together",
              "The letter is struck through and the date of the new revision written beside it",
              "The letter returns to A, and the drawing number is incremented instead",
            ],
            correctIndex: 0,
            explanation:
              "That is the whole mechanism for telling a current sheet from a stale one.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does the course say about a set with no entries in its revision block?",
            options: [
              "It may simply be the original",
              "It has been superseded, since every set in construction is revised at least once",
              "It is invalid for construction, because an unrevised sheet cannot have been checked",
              "It was prepared by computer-aided drafting, which records revisions elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "No entries does not prove the sheet is current. It only shows that no revision has been recorded on it.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What purpose do zone numbers serve?",
            options: [
              "The same as letters on a map border",
              "They record which of the sixteen specification divisions governs the work shown in that area",
              "They number the revisions in the order the draftsman made them on the sheet",
              "They indicate the sequence in which the parts shown are to be assembled",
            ],
            correctIndex: 0,
            explanation:
              "You find a point or part by mentally drawing horizontal and vertical lines from the letters and numerals until they intersect.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does the scale block show?",
            options: [
              "The drawing's size compared with the actual size",
              "The number of sheets in the series and which of them this one is",
              "The range of dimensions that may be measured directly off the printed sheet",
              "The graduation of the rule the draftsman used when preparing the original",
            ],
            correctIndex: 0,
            explanation:
              "It may be written as a ratio of inches, or as full size, one-half size, one-fourth size and so on.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "If the scale is shown as 1\" = 2\", how is each line on the print drawn?",
            options: [
              "Half its actual length",
              "Twice its actual length, so a two inch line on the sheet represents a one inch part",
              "At its actual length, since the two figures are both expressed in inches",
              "At one quarter of its actual length, because the ratio applies to area rather than length",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives this exact example, and its opposite: at 3\" = 1\", each line is three times its actual length.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "If the scale is shown as 3\" = 1\", how is each line on the print drawn?",
            options: [
              "Three times its actual length",
              "One third of its actual length, so the whole object fits within the sheet border",
              "At its actual length, with the ratio applying only to the detail views",
              "At whatever length the draftsman found convenient, since the block records the intent",
            ],
            correctIndex: 0,
            explanation:
              "This is the enlarging case, used where a part is too small to read at its true size.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Why is a particular scale chosen for a drawing?",
            options: [
              "To fit the object and the space on the sheet",
              "Because the adopted building code prescribes a minimum scale for each type of drawing",
              "Because the building department will reject a sheet drawn at any other ratio",
              "Because the printer available to the drafting office supports only certain ratios",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives an ordinary practical reason, which is also a reminder that the scale is a drafting convenience rather than a promise about the paper in your hand.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What is the manual's four-word rule about measuring?",
            options: [
              "Never measure a drawing; use dimensions",
              "Measure twice from a single zero and cut once, to keep errors from accumulating",
              "Measure only on sheets whose scale block states a ratio rather than a size in words",
              "Measure only the overall dimensions, and take partial dimensions from the schedule",
            ],
            correctIndex: 0,
            explanation:
              "Followed by the instruction: read the dimensions on the drawing, they always remain the same.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Which is one of the manual's three reasons for never measuring a drawing?",
            options: [
              "Paper stretches and shrinks with humidity",
              "Rules and tapes are only legal for trade when tested under a 10 pound load at 25 feet and over",
              "The draftsman may have drawn the object out of proportion to save space on the sheet",
              "A dimension string may not add up to the overall dimension shown on the same plan",
            ],
            correctIndex: 0,
            explanation:
              "The three reasons are that the print may have been reduced from the original, that you might not take the scale into account, and that paper moves with humidity.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Which of these is NOT one of the manual's reasons for never measuring a drawing?",
            options: [
              "The scale block may have been left blank",
              "The print may have been reduced in size from the original drawing before it reached you",
              "You might not take the scale of the drawing into consideration when you measure",
              "Paper stretches and shrinks as the humidity around it changes",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives three reasons and a blank scale block is not among them. A blank space with a slash across it means the information is elsewhere.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does the manual say always remains the same?",
            options: [
              "The written dimensions",
              "The ratio printed in the scale block, whatever is done to the sheet afterwards",
              "The distance between the border lines, which can be used to check for reduction",
              "The relationship between the overall dimension and the sum of the partials",
            ],
            correctIndex: 0,
            explanation:
              "A photocopier, a page printed to fit and a damp rolled sheet all change what a ruler reads. None of them changes the number written on the paper.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does a graphic scale of 1/500 mean?",
            options: [
              "One unit on the map equals 500 like units on the ground",
              "One inch on the map equals 500 feet on the ground, whatever the units of the original",
              "The map covers 500 acres within the area enclosed by its border lines",
              "The drawing was reduced to one five-hundredth of the original sheet size",
            ],
            correctIndex: 0,
            explanation:
              "A fraction expresses a ratio between like units. Graphical scales on maps and plot plans may also be given as feet or miles per inch.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "Which of these is a LARGE scale map, according to the manual?",
            options: [
              "1\" = 10'",
              "1\" = 1000', because each inch of paper carries a large amount of ground",
              "1/500, because the denominator is larger than the numerator by a wide margin",
              "Any map whose sheet size exceeds the standard border used for building drawings",
            ],
            correctIndex: 0,
            explanation:
              "Large scale means each inch covers less ground, which is the opposite of what the words sound like. A map at 1\" = 1000' is a small scale map.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What check does the Builder manual say is very important when dimensioning floor plans?",
            options: [
              "Overall against the sum of the partials",
              "Each partial dimension against the same dimension scaled off the sheet with an architect's scale",
              "The plan dimensions against the corresponding dimensions shown on the elevations",
              "The dimensions against the quantities listed in the bill of material",
            ],
            correctIndex: 0,
            explanation:
              "Checking the overall dimension against the sum of the partial dimensions of each part of the structure finds one of the most common real errors in a set.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What tool does the course say finds a dimension-string error?",
            options: [
              "A pencil",
              "An architect's scale, laid along the string and compared against the overall dimension",
              "A tape measure, hooked at the border line and pulled the full width of the sheet",
              "A copy of the adopted code, which fixes the permissible tolerance on a dimension",
            ],
            correctIndex: 0,
            explanation:
              "Adding a dimension string and finding it does not match the overall is arithmetic, not measurement.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What two things does the course say you need before trusting anything else on a sheet?",
            options: [
              "The scale, and whether it is current",
              "The name of the designer, and the date the building department approved the set",
              "The overall dimensions, and the finish schedule that governs each room shown",
              "The specification division that applies, and the part of the section within it",
            ],
            correctIndex: 0,
            explanation:
              "Both live in blocks most people never read: the scale in the title block and the revision status in the revision block.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What is a schedule, in the Builder manual's definition?",
            options: [
              "A group of general notes in tabular form",
              "A sequence of dated milestones by which each phase of the work must be completed",
              "An enlarged drawing showing how the parts of an assembly connect to one another",
              "A written document defining the quality of materials and workmanship required",
            ],
            correctIndex: 0,
            explanation:
              "Usually grouped according to materials of construction. Item schedules for doors, rooms and footings are more detailed.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What is a general note?",
            options: [
              "A note with no leader and arrowhead",
              "A note printed in the title block rather than on the face of the drawing itself",
              "A note that applies to every sheet in the set rather than to one sheet",
              "A note added by the contractor rather than by the draftsman who prepared the sheet",
            ],
            correctIndex: 0,
            explanation:
              "The manual defines general notes as all notes on the drawing not accompanied by a leader and an arrowhead.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "How is a door connected to its line in the door schedule?",
            options: [
              "By a mark placed next to the symbol",
              "By its position in the plan, since schedule lines are listed in the order doors appear",
              "By its rough opening dimensions, which are unique to each door in the building",
              "By a leader line drawn from the symbol across the sheet to the schedule",
            ],
            correctIndex: 0,
            explanation:
              "A code number placed next to each symbol in a plan view is entered on a line in the schedule, with the door's characteristics in successive columns.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does the Amount Required column in a door schedule allow?",
            options: [
              "A quantity check on doors of the same design",
              "A comparison between the doors specified and the doors actually delivered to the site",
              "A record of how many doors have been installed at each stage of the work",
              "A calculation of the total cost of the doors from the unit price of each design",
            ],
            correctIndex: 0,
            explanation:
              "It allows a quantity check on doors of the same design as well as the total number of doors required.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "When a door mark combines a number with a letter, what does the number identify?",
            options: [
              "The floor the door is on",
              "The design of the door, with the letter identifying its material and finish instead",
              "The sequence in which the doors are to be hung once the openings are framed",
              "The specification section that governs the supply and installation of that door",
            ],
            correctIndex: 0,
            explanation:
              "The number identifies the floor on which the door is located, and the letter identifies the door design.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does the Remarks column of a door schedule allow?",
            options: [
              "Identification by type, style and material",
              "A record of any field change made to the door after the set was issued for construction",
              "A cross-reference to the specification division that governs the door's installation",
              "A note of which trade is responsible for supplying the door to the site",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives panel and flush as examples of type, alongside style and material.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Where is a window mark placed?",
            options: [
              "Next to the window symbol on the plan or elevation",
              "Inside the title block, beside the drawing number for the sheet the window appears on",
              "In the revision block, so a change of window is recorded with the revision letter",
              "Along the lower border, in the zone square containing the window",
            ],
            correctIndex: 0,
            explanation:
              "A window schedule works like a door schedule, with the mark placed next to the window symbol that applies on the plan view or the elevation view.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does a finish schedule specify?",
            options: [
              "Interior finish material for each room and floor",
              "The order in which the finish trades are to be brought onto the site after the rough-in",
              "The exterior cladding and roof covering shown on the elevations",
              "The tolerance permitted on a finished surface before it must be redone",
            ],
            correctIndex: 0,
            explanation:
              "It provides information for the walls, floors, ceilings, baseboards, doors and window trim.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Why does the Builder manual say schedules are convenient?",
            options: [
              "They present data without referring to the specification",
              "They can be revised without reissuing any of the drawings the marks appear on",
              "They let the estimator price the work before the drawings have been completed",
              "They allow the building department to check compliance without reading the plans",
            ],
            correctIndex: 0,
            explanation:
              "The schedule is a convenient way of presenting pertinent data without making the Builder refer to the specification.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Where does the Builder manual say notes are generally placed?",
            options: [
              "At least 3 inches below the Revision block",
              "Immediately above the title block in the lower-right corner of the first sheet",
              "Along the lower border, between the zone squares used for part references",
              "On a separate sheet bound at the front of the set with the specification",
            ],
            correctIndex: 0,
            explanation:
              "A minimum of 3 inches below the Revision block in the right-hand side of the first sheet.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What is the purpose of notes on a drawing?",
            options: [
              "To clarify a detail or explain how a phase is performed",
              "To record the revisions made to the sheet since it was first issued for construction",
              "To list the quantities of each material the drawing requires to be supplied",
              "To state which specification division governs each part of the work shown",
            ],
            correctIndex: 0,
            explanation:
              "The manual adds the instruction that matters: read all notes, along with the specifications, while planning a project.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "When does the Builder manual say to read all the notes?",
            options: [
              "While planning a project",
              "After the rough-in is complete, so the notes can be checked against what was built",
              "Only when the drawings and the specification appear to conflict on a point",
              "At the final inspection, when the whole set is reviewed against the finished work",
            ],
            correctIndex: 0,
            explanation:
              "You should read all notes, along with the specifications, while you are planning a project.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What shows the precise part a note applies to?",
            options: [
              "A leader line",
              "The zone reference printed along the border nearest to the part in question",
              "A mark of the kind used to key a door or window to its schedule line",
              "A hidden line drawn dashed from the note to the edge of the part",
            ],
            correctIndex: 0,
            explanation:
              "Leader lines show the precise part notated, which is also what distinguishes an item note from a general note.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Where is a legend placed on a blueprint?",
            options: [
              "Upper right corner, below the revision block",
              "Lower-right corner, immediately beside the drawing number in the title block",
              "Along the lower border, so it can be read without unrolling the sheet fully",
              "On the reverse of the sheet, with the drawing number repeated beside it",
            ],
            correctIndex: 0,
            explanation:
              "A legend, if used, explains or defines a symbol or special mark placed on the blueprint.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Why does the Builder manual say specifications exist?",
            options: [
              "Many aspects of construction cannot be shown graphically",
              "Because a drawing may be reduced or distorted in printing, while written text cannot be",
              "Because the adopted building code requires a written statement for every permit application",
              "Because the sixteen divisions give an order the drawings themselves have no way to carry",
            ],
            correctIndex: 0,
            explanation:
              "Even the best prepared construction drawings often inadequately show some portions of a project, so written instructions supplement them.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which question does the manual use to show what a drawing cannot answer?",
            options: [
              "Who is responsible for supplying the materials",
              "How far apart the joists supporting a given floor are to be spaced in the finished work",
              "What the finished building will look like from the street once the cladding is on",
              "Which sheets in the set have been revised since the permit was applied for",
            ],
            correctIndex: 0,
            explanation:
              "The manual asks two: how to show on a drawing the quality of workmanship required for installing doors and windows, and who supplies the materials.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What do specifications do, in the manual's words?",
            options: [
              "Define and limit materials and fabrication",
              "Record the sequence in which each trade will be brought onto the site during the work",
              "Establish the price at which each portion of the work will be paid for on completion",
              "Certify that the drawings comply with the code edition the jurisdiction adopted",
            ],
            correctIndex: 0,
            explanation:
              "They define and limit materials and fabrication to the intent of the engineer or designer.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What do project specifications cover?",
            options: [
              "General conditions, scope, materials and workmanship",
              "The contours of the site before and after grading, with the finished building overlaid",
              "The revision history of every sheet in the set, recorded by letter and description",
              "The inspections the jurisdiction will require and the order they will occur in",
            ],
            correctIndex: 0,
            explanation:
              "They give detailed information about materials and methods of work for a particular project, including protection of finished work.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "How does the manual describe the relationship between drawings and project specifications?",
            options: [
              "Inseparable",
              "Interchangeable, since either document can be used alone to complete the work described",
              "Sequential, since the specification is written only after the drawings are finished",
              "Independent, since each is prepared by a different discipline for a different reader",
            ],
            correctIndex: 0,
            explanation:
              "Drawings indicate what the specifications do not cover, and specifications indicate what the drawings do not portray or clarify what the drawings cover thinly.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "In the Navy manual's rule, which document takes precedence when the two conflict?",
            options: [
              "The specifications",
              "The drawings, because they are the document the building department reviewed and stamped",
              "Whichever document carries the later date in its title block or on its cover",
              "Neither, because a conflict voids both until the designer issues a revision",
            ],
            correctIndex: 0,
            explanation:
              "The manual states it directly. Note the two cautions the course adds: this is the Navy's rule for its own work, and a private contract states its own order of precedence.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What caution does the course add to the precedence rule?",
            options: [
              "A private contract states its own order of precedence",
              "The rule reverses whenever the drawings have been revised more recently than the specification",
              "The rule applies only to federal work, so private projects have no order of precedence at all",
              "The rule is set by the adopted building code and varies from one jurisdiction to another",
            ],
            correctIndex: 0,
            explanation:
              "The Navy states its rule for work under its own jurisdiction. On a private job, the contract governs, and the habit to carry is finding where the decision is written.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does the course say is the useful part of the precedence rule?",
            options: [
              "The habit of finding where the decision is written",
              "The certainty that a written document always beats a drawn one in any construction dispute",
              "The ability to disregard a drawing once a conflict with the specification is noticed",
              "The knowledge that conflicts are rare enough not to be worth planning for",
            ],
            correctIndex: 0,
            explanation:
              "When two documents disagree, somebody has already decided which one wins. Your job is to find out where that decision is written rather than to guess.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Into how many basic divisions is the specification format organised?",
            options: [
              "16",
              "9, one for each chapter of the Builder manual's coverage of construction work",
              "11, matching the subparts of the federal manufactured home construction standard",
              "3, corresponding to General, Products and Execution within each section",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the format is organised into 16 basic divisions used throughout the military and civilian construction industry.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which division covers Masonry?",
            options: [
              "Division 4",
              "Division 3, which the manual describes as covering precast and cast-in-place concrete and formwork",
              "Division 5, which the manual describes as covering structural steel and open-web joists",
              "Division 7, which the manual describes as covering waterproofing and roofing materials",
            ],
            correctIndex: 0,
            explanation:
              "Division 4 includes concrete masonry units, brick, stone and mortar.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which division covers Wood and Plastics?",
            options: [
              "Division 6",
              "Division 9, which covers floor and wall coverings, painting, lathe, plaster and tile",
              "Division 12, which covers prefabricated cabinets, blinds, drapery, carpeting and seating",
              "Division 2, which covers grading, excavation, compaction, drainage and site utilities",
            ],
            correctIndex: 0,
            explanation:
              "Division 6 includes wood and wood framing, rough and finish carpentry, and several plastics.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which division covers Thermal and Moisture Protection?",
            options: [
              "Division 7",
              "Division 8, which covers doors, windows, finish hardware, glass and glazing",
              "Division 15, which covers plumbing, heating, air conditioning and fire protection",
              "Division 1, which covers requirements of a general nature such as inspection",
            ],
            correctIndex: 0,
            explanation:
              "Division 7 includes waterproofing, dampproofing, insulation, roofing materials, sheet metal and flashing, caulking and sealants.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which division covers Electrical Systems?",
            options: [
              "Division 16",
              "Division 14, which covers dumbwaiters, elevators, moving stairs and material handling",
              "Division 11, which covers medical, laboratory, food service and kitchen equipment",
              "Division 13, which covers prefabricated structures, integrated ceilings and pools",
            ],
            correctIndex: 0,
            explanation:
              "Division 16 is the last of the sixteen, covering electrical service and distribution, power equipment, lighting and other electrical items.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What are the three parts of a technical specification section?",
            options: [
              "General, Products, Execution",
              "Scope, Quality, Protection, taken from the four factors a project specification covers",
              "Preliminary, Contract, Standard, matching the plan types the manual lists",
              "Architectural, Electrical, Mechanical, matching the three groups of drawings",
            ],
            correctIndex: 0,
            explanation:
              "Part 1 carries requirements of a general nature, Part 2 the products and quality of materials, Part 3 the detailed requirements for performing the work.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "In a specification section, where do you look for what may be used?",
            options: [
              "Part 2, Products",
              "Part 1, General, which carries the requirements applying to the section as a whole",
              "Part 3, Execution, which carries the detailed requirements for performing the work",
              "Division 1, which is the boilerplate common to all projects under a contract",
            ],
            correctIndex: 0,
            explanation:
              "Part 2 addresses the products or quality of materials and equipment to be included in the work. Part 3 is how it must be done.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "In a specification section, where do you look for how the work must be done?",
            options: [
              "Part 3, Execution",
              "Part 2, Products, which addresses the equipment and materials to be included in the work",
              "Part 1, General, which the manual describes as requirements of a general nature",
              "The schedule on the drawings, which presents the data without referring to the specification",
            ],
            correctIndex: 0,
            explanation:
              "Part 3 provides detailed requirements for performance of the work, which is why a workmanship question lands there.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does knowing the division and part structure let you do?",
            options: [
              "Find something in a specification you have never seen",
              "Determine which specification governs when two project documents disagree on a point",
              "Price the work in the order the trades will actually perform it on the site",
              "Identify which sheets in the drawing set have been revised since the original issue",
            ],
            correctIndex: 0,
            explanation:
              "Masonry questions live in a Division 4 section; within that section, what may be used is Part 2 and how it must be done is Part 3.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What is an order of precedence?",
            options: [
              "The rule for which document governs a conflict",
              "The sequence in which the sheets of a set are bound, from site plan to details",
              "The ranking of the sixteen divisions from general requirements to electrical systems",
              "The order in which revisions are lettered as a sheet is reissued",
            ],
            correctIndex: 0,
            explanation:
              "It is the stated rule for which document governs when two project documents disagree, and it is written down somewhere on every job.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What is a mark, in schedule vocabulary?",
            options: [
              "The code beside a symbol keying it to a schedule line",
              "The layout line struck on a plate to locate the face of a member before it is set",
              "The letter entered in the revision block when a sheet is reissued",
              "The reference number in the title block pointing to another drawing in the set",
            ],
            correctIndex: 0,
            explanation:
              "A door or window mark placed next to its symbol on a plan or elevation connects it to the line in the schedule carrying its characteristics.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which of these does a drawing carry rather than a schedule?",
            options: [
              "The symbol the mark sits beside",
              "The material and style of each door listed in the Remarks column of the table",
              "The count of doors of the same design required for the project",
              "The interior finish specified for the walls, floors and ceilings of each room",
            ],
            correctIndex: 0,
            explanation:
              "The plan carries the symbol and its mark; the schedule carries the characteristics, the quantity and the remarks.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What does the course say sits around a drawing because a drawing cannot say everything?",
            options: [
              "Schedules, notes and the specification",
              "The site plan, the plot plan and the foundation plan, which frame the building on its lot",
              "The title block, the revision block and the zone numbers along the border",
              "The bill of material, the application block and the finish marks on machined surfaces",
            ],
            correctIndex: 0,
            explanation:
              "Three other carriers of information, and the last of them outranks the drawing when the two disagree.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which document does the manual say a schedule saves the builder from having to consult?",
            options: [
              "The specification",
              "The adopted building code, whose tables would otherwise have to be checked for each item",
              "The revision block, which would otherwise have to be read for every item on the sheet",
              "The plot plan, which would otherwise have to be consulted for each opening's location",
            ],
            correctIndex: 0,
            explanation:
              "The schedule is a convenient way of presenting pertinent data without making the Builder refer to the specification.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which two documents does the manual tell you to read together when planning a project?",
            options: [
              "The notes and the specifications",
              "The site plan and the plot plan, so the grading and the layout data agree with one another",
              "The door schedule and the window schedule, so the marks on the plan are all accounted for",
              "The framing plans and the sections, so the member sizes and the build-ups agree",
            ],
            correctIndex: 0,
            explanation:
              "The instruction is to read all notes, along with the specifications, while you are planning a project.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What is Division 1 of a specification commonly called?",
            options: [
              "Boilerplate",
              "Front matter, because it is bound ahead of the technical sections in the project manual",
              "The schedule of values, because it is what payment applications are measured against",
              "General conditions, which the manual lists as one of the factors a project specification covers",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the Division 1 sections are sometimes referred to as boilerplate and are generally common to all projects accomplished under a construction contract.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Which divisions contain the technical sections for a specific project?",
            options: [
              "2 through 16",
              "1 through 16, since every division carries technical content for the project in hand",
              "1 alone, since the other divisions are boilerplate common to all contracts",
              "6 through 9, which cover the wood, thermal, opening and finish work of a house",
            ],
            correctIndex: 0,
            explanation:
              "Division 1 is the boilerplate common to all projects. Divisions 2 through 16 contain the technical sections that pertain to the specific project.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Where does the course say the scale really lives?",
            options: [
              "In the title block",
              "In the border squares, which are spaced at a fixed distance on every sheet in a set",
              "In the specification, which states the scale each drawing type must be drawn at",
              "In the schedule, which lists each sheet with the ratio used to draw it",
            ],
            correctIndex: 0,
            explanation:
              "The scale block is part of the title block in the lower-right corner, along with the drawing number, date and authentication.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What happens to a rolled sheet left in a truck through a wet week?",
            options: [
              "The paper moves, and a ruler reads differently",
              "The drawing number fades, so the sheet can no longer be matched to the rest of the set",
              "The revision letter becomes unreliable, so the sheet must be reissued by the designer",
              "The scale block ceases to apply, and the sheet must be redrawn before use",
            ],
            correctIndex: 0,
            explanation:
              "Paper stretches and shrinks as the humidity changes. The written dimensions do not, which is why you read them rather than measure.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What does the drafting record in a title block belong to?",
            options: [
              "The title block's list of contents",
              "The revision block, alongside the letter and brief description of each change",
              "The bill of material block, alongside the stock numbers and quantities required",
              "The legend, alongside the symbols and special marks used on the sheet",
            ],
            correctIndex: 0,
            explanation:
              "The title block includes the preparing organisation's name and address, the scale, the drafting record, the authentication and the date.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — What a code is, and who made it law
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-model-code-is-a-book-somebody-sells",
      title: "7 · A model code is a book somebody sells",
      section: "Section 4 · What a code is, and who made it law",
      body: `People say "the code" as though it were a single thing handed down from somewhere. It is not. It is two things, and separating them is the most useful move in this whole course.

**Thing one: a model code.** A model code is written and published by a private organisation and sold. The International Residential Code is published by the International Code Council. The National Electrical Code is published by the National Fire Protection Association. Neither organisation is a government. Neither book is law anywhere, on the day it is printed, by itself.

**Thing two: an adoption.** A government makes a named edition of a model code enforceable in its territory by a public act, and that act is a document you can read for free. In a state like Indiana it is a rule in the state administrative code. In other places the adoption may be a statute, a local ordinance, or a rule of a state agency, and the course's exercise in section 7 is finding yours.

Everything that makes the code binding on your house lives in thing two. Everything you are told you must buy lives in thing one.

**Why federal documents are different, and why that matters here.** United States copyright law says: "Copyright protection under this title is not available for any work of the United States Government" (17 U.S.C. 105). That is why this course could quote a Navy training manual for two entire sections without asking anyone. The model codes are not federal works. They are private publications, and this course cites their addresses and never their text.

**How to read an administrative-code citation, because it is just an address.** *Basic Construction Safety* teaches the same skill on a federal citation: in 29 CFR 1926.501(b)(1), the 29 is the title, 1926 the part, 501 the section, and (b)(1) the paragraph. A state administrative code works the same way. Take 675 IAC 14-4.4-1:

- **675** is the title, which in Indiana belongs to the Fire Prevention and Building Safety Commission.
- **IAC** is the Indiana Administrative Code, the body of rules state agencies make.
- **14** is the article. On the Legal Information Institute's mirror, Article 14 is headed "One and Two Family Dwelling Code" (Legal Information Institute, n.d.-a).
- **4.4** is the rule inside that article.
- **1** is the section inside that rule.

Read the whole thing out loud and it says: the Indiana building commission's rules, the article about one and two family dwellings, rule 4.4, section 1. That is an address, and you can hand it to a librarian, a building official or a search box.

**The decimal point is doing real work.** Article 14 does not run 1, 2, 3, 4. It runs 14-1, 14-2, 14-2.1, 14-3, 14-4, 14-4.1, 14-4.2, 14-4.3, 14-4.4. That is what a series of replacements looks like in an administrative code: rather than editing the old rule, the agency writes a new one at the next decimal and repeals the old. On the mirror read for this course on 20 September 2026, Article 14's listing showed 14-1, 14-2, 14-3, 14-4, 14-4.1 and 14-4.3 marked "(Repealed)", with 14-4.4, "2020 Indiana Residential Code", the newest residential rule in the article (Legal Information Institute, n.d.-a).

**So the decimals are a history.** If you want to know whether the rule you are reading is the live one, look at its siblings. A rule with no unrepealed sibling after it is, on the face of that listing, the current one. A rule with a higher decimal above it has been replaced.

**One caution that section 5 develops.** A listing is a publication of the rules, and a publication can lag the register the agency actually files into. Reading a listing tells you what that publisher last processed. It does not by itself prove what the state adopted last week. That is why every code claim in this course carries the date it was checked and the place it was read.

**The rule this course follows, stated once.** Cite the address, never the text. A section number is an invitation to check. A reproduction is a substitute for checking, and a substitute goes stale without telling you.

:::reveal What are the two separate things people are talking about when they say "the code"? ||| A model code, which a private organisation writes and sells, and an adoption, which is the public act by which a government makes a named edition of it enforceable.

:::reveal Break 675 IAC 14-4.4-1 into its parts. ||| 675 is the title, belonging to the Indiana Fire Prevention and Building Safety Commission; IAC is the Indiana Administrative Code; 14 is the article on one and two family dwellings; 4.4 is the rule; 1 is the section.

:::reveal What does it tell you when a rule in an administrative code has a higher-numbered decimal sibling that is not marked repealed? ||| That the rule you are reading has probably been replaced, because agencies commonly write a new rule at the next decimal and repeal the old one rather than editing it.

## Vocabulary
- **Model code**: a code written and sold by a private organisation, with no legal force until adopted.
- **Administrative code**: the published body of rules made by the agencies of a state.
- **Article**: a numbered grouping of rules within a title of an administrative code.
- **Repealed**: marked as no longer in force, usually because a later rule replaced it.
- **Citation as address**: the habit of reading a legal citation as directions to a document rather than as a claim about its contents.

## Sources
Copyrights, 17 U.S.C. § 105 (2026). https://www.copyright.gov/title17/92chap1.html
Legal Information Institute. (n.d.-a). *Title 675, Article 14: One and two family dwelling code*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/title-675/article-14
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1`,
    },
    {
      slug: "reading-an-adoption-rule",
      title: "8 · Reading an adoption rule, line by line",
      section: "Section 4 · What a code is, and who made it law",
      body: `Here is one adoption rule read the way you would read your own. It is Indiana's, and it is short, which is the point: the document that makes a 900-page book enforceable across a state fits on a screen.

**The document.** 675 IAC 14-4.4-1, "Adoption by reference; title; purpose", of the Indiana Fire Prevention and Building Safety Commission. It was read for this course on 20 September 2026 on the Legal Information Institute's mirror of the Indiana Administrative Code (Legal Information Institute, n.d.-b).

**Line one: what is adopted.** The rule adopts "the 2018 International Residential Code for One and Two Family Dwellings, first printing August 2017, published by the International Code Council".

Count the facts in that one phrase, because each of them is a thing you would otherwise get wrong.

1. **Which model code.** The International Residential Code for One and Two Family Dwellings. Not the building code, not the plumbing code, not the electrical code. Those are separate books with separate adoptions, in separate articles.
2. **Which edition.** The 2018 edition.
3. **Which printing.** The first printing, August 2017. A code publisher issues printings, and the rule names the one it means.
4. **Which publisher.** The International Code Council.

**Line two: adopted how.** The rule takes the model code "as if fully set out in this rule save and except those revisions made in this rule."

That is adoption by reference, and the second half is the half people forget. The state did not simply switch the book on. It wrote revisions, and those revisions are the rest of rule 4.4, which on the same listing runs from section 1 through section 245 (Legal Information Institute, n.d.-a). A model code section that an amendment touched does not say in your state what it says in the book.

**Line three: what it is now called.** The rule names the result "the 2020 Indiana Residential Code".

Read that beside line one and you have the single most useful fact in this section. **The state's name for the rule and the edition it adopted are different numbers.** The 2020 Indiana Residential Code is the 2018 International Residential Code plus Indiana's revisions. Lesson 9 shows the same gap again in a different article, and shows what it costs someone who does not know about it.

**Line four: why.** The rule states its purpose: "to provide minimum requirements for safety and to safeguard property, public safety, and general welfare through affordability, by regulating and controlling the design, construction, installation, and quality of materials of residential structures."

Two words in that sentence are worth keeping. **Minimum**, because a code is a floor and not a description of good work. And **affordability**, named in the same breath as safety, which tells you that the drafters understood a code as a balance rather than as a maximum.

**Line five: where you may read it.** The rule says the code may be reviewed at "the Indiana Department of Homeland Security, Indiana Government Center South, 302 West Washington Street, Room E208, Indianapolis, Indiana 46204", and online at the commission's webpage.

That is a room number in a public building. An adoption rule that incorporates a private book will usually name a place where the public can go and read the book, and that sentence is worth finding in your own state's rule, because it is an answer to "how am I supposed to read a code I cannot buy".

**Line six: when it was filed.** The mirror shows the rule filed 26 November 2019 at 11:43 a.m., and carries the Indiana Register document number 20191225-IR-675190330FRA. A filing stamp and a register number are what let you go back to the state's own record rather than to anybody's copy of it.

**The four questions, for any adoption rule anywhere.** Strip the Indiana details away and you are left with a method:

1. Which model code does it adopt, by full title?
2. Which edition, and which printing?
3. What did the state name the result, and what did the state change?
4. When was it filed, and where can the incorporated book be read?

If you can answer those four for your own address, you know more about what governs your house than almost anyone who has ever told you what the code says.

:::reveal Which edition of the International Residential Code does 675 IAC 14-4.4-1 adopt, and what does it name the result? ||| The 2018 edition, first printing August 2017, published by the International Code Council, named the 2020 Indiana Residential Code.

:::reveal What does the phrase "save and except those revisions made in this rule" tell you? ||| That the state adopted the model code by reference but wrote its own revisions, so a section an amendment touched does not say in that state what it says in the book.

:::reveal What are the two words worth keeping from the rule's purpose statement? ||| Minimum, because a code is a floor rather than a description of good work, and affordability, named alongside safety, which shows the drafters treated the code as a balance.

:::reveal Name the four questions to ask of any adoption rule. ||| Which model code by full title; which edition and printing; what the state named the result and what it changed; and when it was filed and where the incorporated book may be read.

## Vocabulary
- **Adoption by reference**: making an outside document enforceable by naming it in a rule rather than reprinting it.
- **Printing**: a particular issue of an edition, which an adoption rule may name specifically.
- **Revision (state amendment)**: a change the adopting government writes into the model text, which governs over it.
- **Filing date**: the date an agency filed a rule, stamped on the state's own record of it.
- **Register document number**: the identifier of the state's published record of a rule, such as an Indiana Register number.

## Sources
Legal Information Institute. (n.d.-a). *Title 675, Article 14: One and two family dwelling code*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/title-675/article-14
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · What a code is, and who made it law",
      section: "Section 4 · What a code is, and who made it law",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the two separate things people mean when they say \"the code\"?",
            options: [
              "A model code, and an adoption",
              "A national standard and a local interpretation of it written by the building department",
              "The printed book and the digital edition sold by the same publisher on subscription",
              "The drawings approved for a project and the inspections carried out against them",
            ],
            correctIndex: 0,
            explanation:
              "Everything that makes a code binding on your house lives in the adoption. Everything you are told you must buy lives in the model code.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Who publishes the International Residential Code?",
            options: [
              "The International Code Council",
              "The National Fire Protection Association, which also publishes the National Electrical Code",
              "The Fire Prevention and Building Safety Commission of the adopting state",
              "The United States Department of Housing and Urban Development",
            ],
            correctIndex: 0,
            explanation:
              "It is a private organisation, and its book is not law anywhere on the day it is printed.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Who publishes the National Electrical Code?",
            options: [
              "The National Fire Protection Association",
              "The International Code Council, which publishes the residential code in the same family",
              "The Indiana Department of Homeland Security, which keeps a reference copy for the public",
              "The Occupational Safety and Health Administration, which enforces it on jobsites",
            ],
            correctIndex: 0,
            explanation:
              "Like the International Code Council, it is a private organisation rather than a government.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "On the day a model code is printed, where is it law?",
            options: [
              "Nowhere, by itself",
              "In every state that has previously adopted an earlier edition of the same model code",
              "In any jurisdiction that has not adopted a different code of its own",
              "Nationwide, until a state legislature votes specifically to displace it",
            ],
            correctIndex: 0,
            explanation:
              "A government has to make a named edition enforceable by a public act before it governs anything.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What form can an adoption take, besides a state administrative rule?",
            options: [
              "A statute or a local ordinance",
              "A publisher's licence granting the state the right to enforce the edition it bought",
              "A building department policy memorandum circulated to its own inspectors",
              "A note in the general conditions of a project specification",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana it is a rule of a state agency. Elsewhere it may be a statute, a local ordinance, or a rule of another body, which is why the section 7 exercise is finding yours.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Why could this course quote a Navy training manual for two whole sections?",
            options: [
              "Federal works carry no copyright",
              "Because training manuals are exempt from copyright when used for educational purposes",
              "Because the Navy grants a standing licence to non-commercial publishers on request",
              "Because a manual more than thirty years old has passed into the public domain by age",
            ],
            correctIndex: 0,
            explanation:
              "17 U.S.C. 105 says copyright protection is not available for any work of the United States Government. The model codes are private publications and get cited by address instead.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "In 675 IAC 14-4.4-1, what is 675?",
            options: [
              "The title",
              "The article covering one and two family dwellings within the administrative code",
              "The rule number within the article, assigned when the rule replaced an earlier one",
              "The section within the rule, which carries the adoption by reference",
            ],
            correctIndex: 0,
            explanation:
              "Title 675 belongs to the Indiana Fire Prevention and Building Safety Commission. Then comes the article, the rule, and the section.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "In 675 IAC 14-4.4-1, what is 14?",
            options: [
              "The article",
              "The title, which identifies the agency whose rules are collected under it",
              "The rule, which is where a replacement is written at the next decimal",
              "The year the rule was filed with the state register",
            ],
            correctIndex: 0,
            explanation:
              "On the Legal Information Institute's mirror, Article 14 is headed One and Two Family Dwelling Code.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "In 675 IAC 14-4.4-1, what is 4.4?",
            options: [
              "The rule",
              "The section within the rule, which states the adoption, title and purpose",
              "The article, grouping the residential rules within the title",
              "The paragraph inside the section that carries the edition and printing",
            ],
            correctIndex: 0,
            explanation:
              "And the final 1 is the section inside that rule. Read the whole citation as directions to a document.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does IAC stand for in that citation?",
            options: [
              "Indiana Administrative Code",
              "International Approved Code, the designation given to an adopted model code",
              "Indiana Amended Code, meaning the model text after the state's revisions",
              "Inspection and Approval Criteria, the checklist an inspector works from",
            ],
            correctIndex: 0,
            explanation:
              "It is the body of rules made by the agencies of the state, in which the adoption rule sits.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Which course already teaches reading a citation as an address?",
            options: [
              "Basic Construction Safety",
              "Construction Math, in its lesson on reading a rule and a tape measure",
              "Housing Decisions, in its capstone on reading one document about your own housing",
              "The Name on the Door, in its lesson on what a licence gates",
            ],
            correctIndex: 0,
            explanation:
              "That course breaks down 29 CFR 1926.501(b)(1) into title, part, section and paragraph. A state administrative code citation works the same way.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Why does Article 14 run 14-4, 14-4.1, 14-4.2, 14-4.3, 14-4.4 rather than 14-4, 14-5, 14-6?",
            options: [
              "A new rule replaces the old at the next decimal",
              "Because each decimal corresponds to a different class of structure within the article",
              "Because the decimals number the amendments the state wrote into a single rule",
              "Because the publisher of the mirror renumbers rules as it processes them",
            ],
            correctIndex: 0,
            explanation:
              "Rather than editing the old rule, the agency writes a new one at the next decimal and repeals the old. The decimals are a history.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "On the listing read for this course, which residential rules in Article 14 were marked (Repealed)?",
            options: [
              "14-1, 14-2, 14-3, 14-4, 14-4.1 and 14-4.3",
              "Only 14-4.3, which the newer 2020 Indiana Residential Code directly replaced in the article",
              "None of them, because a repealed rule is removed from the listing entirely",
              "All of them including 14-4.4, which was pending readoption at the time of the check",
            ],
            correctIndex: 0,
            explanation:
              "14-4.4, the 2020 Indiana Residential Code, was the newest residential rule in the article on 20 September 2026.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does a rule with an unrepealed higher-decimal sibling suggest?",
            options: [
              "It has been replaced",
              "It applies to a different class of structure than the higher-numbered rule does",
              "It is still current, because a repeal is always recorded on the older rule itself",
              "It was filed later than its sibling, because decimals count backward in a listing",
            ],
            correctIndex: 0,
            explanation:
              "A rule with no unrepealed sibling after it is, on the face of the listing, the current one.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does reading a listing of rules tell you?",
            options: [
              "What that publisher last processed",
              "What the state adopted most recently, because a listing is the state's own register",
              "Which rules an inspector will actually enforce in a given jurisdiction this year",
              "Which edition of the model code the publisher recommends that a reader buy",
            ],
            correctIndex: 0,
            explanation:
              "A publication can lag the register the agency files into, which is why every code claim in this course carries the date it was checked and the place it was read.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What is this course's stated rule about code text?",
            options: [
              "Cite the address, never the text",
              "Quote no more than a single sentence from any section, with the section number attached",
              "Paraphrase closely enough that a reader does not need to obtain the book",
              "Reproduce only the tables, since numerical data carries no copyright",
            ],
            correctIndex: 0,
            explanation:
              "A section number is an invitation to check. A reproduction is a substitute for checking, and a substitute goes stale without telling you.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What is adoption by reference?",
            options: [
              "Naming an outside document rather than reprinting it",
              "Requiring every contractor in the jurisdiction to purchase a copy of the adopted book",
              "Directing inspectors to enforce a standard that the state has not itself published",
              "Citing a model code in a project specification so it governs that one job",
            ],
            correctIndex: 0,
            explanation:
              "Indiana's rule takes the model code as if fully set out in the rule, save and except the revisions the rule makes.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Which model code does 675 IAC 14-4.4-1 adopt?",
            options: [
              "The International Residential Code for One and Two Family Dwellings",
              "The International Building Code, which governs structures other than dwellings in the same state",
              "The National Electrical Code, which is adopted in a separate article of the same title",
              "The Manufactured Home Construction and Safety Standards published by HUD",
            ],
            correctIndex: 0,
            explanation:
              "The building code, plumbing code and electrical code are separate books with separate adoptions, in separate articles.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Which edition does the rule adopt?",
            options: [
              "2018",
              "2020, which is the year the rule gives in the name it assigns to the result",
              "2017, which is the year of the printing the rule names",
              "2019, which is the year the rule was filed with the state",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 edition, first printing August 2017. The 2020 in the name is the state's title for its own rule, not the model edition.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Which printing does the rule name?",
            options: [
              "First printing, August 2017",
              "Second printing, revised after the publisher issued errata to the original release",
              "The current printing available from the publisher at the time of enforcement",
              "No printing at all, because an adoption names only the edition year",
            ],
            correctIndex: 0,
            explanation:
              "A code publisher issues printings, and the rule names the one it means. That level of detail is why the citation is worth reading closely.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the rule name the result of the adoption?",
            options: [
              "The 2020 Indiana Residential Code",
              "The 2018 Indiana Residential Code, matching the edition of the model code adopted",
              "The Indiana One and Two Family Dwelling Code, matching the name of the article",
              "The Indiana Residential Code, with no year, so the name survives future readoptions",
            ],
            correctIndex: 0,
            explanation:
              "The state's name for the rule and the edition it adopted are different numbers, which is the most useful fact in this section.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is the 2020 Indiana Residential Code, expressed as a sum?",
            options: [
              "The 2018 model code plus Indiana's revisions",
              "The 2020 model code minus the sections Indiana chose not to enforce in its territory",
              "The 2018 model code alone, since a state may adopt but may not alter the text",
              "Two separate documents, one for one-family and one for two-family dwellings",
            ],
            correctIndex: 0,
            explanation:
              "Adoption by reference brings the book in, and the revisions the rule makes govern over it.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does \"save and except those revisions made in this rule\" mean for a model code section an amendment touched?",
            options: [
              "It does not say in that state what the book says",
              "It is enforced exactly as printed, with the amendment applying only to later editions",
              "It is deleted entirely, because a state amendment cancels the section it addresses",
              "It is enforced at the inspector's discretion, since the two texts conflict",
            ],
            correctIndex: 0,
            explanation:
              "That is the half people forget. The state did not simply switch the book on; it wrote revisions, and those revisions are the rest of the rule.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "How far does rule 675 IAC 14-4.4 run, on the listing read for this course?",
            options: [
              "Section 1 through section 245",
              "Section 1 alone, since the adoption is the entire content of the rule",
              "Section 1 through section 16, matching the divisions of a specification",
              "Section 1 through section 11, matching the subparts of the federal standard",
            ],
            correctIndex: 0,
            explanation:
              "Sections 2 onward are Indiana's revisions to the model text, which is why the rule is long even though the adoption fits on a screen.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What purpose does the rule state for itself?",
            options: [
              "Minimum requirements for safety, and safeguarding property and welfare",
              "Uniform design standards so that a drawing approved in one county is accepted in another",
              "Protection of the publisher's rights in the model code the state has adopted",
              "A framework for licensing the contractors who perform residential construction",
            ],
            correctIndex: 0,
            explanation:
              "The full phrase runs to safeguarding property, public safety, and general welfare through affordability, by regulating the design, construction, installation and quality of materials of residential structures.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Which two words does the course say are worth keeping from the purpose statement?",
            options: [
              "Minimum and affordability",
              "Design and construction, since those are the activities the rule regulates and controls",
              "Property and welfare, since those are what the rule exists to safeguard",
              "Quality and materials, since those are what the rule controls in residential structures",
            ],
            correctIndex: 0,
            explanation:
              "Minimum, because a code is a floor and not a description of good work; affordability, because naming it beside safety shows the drafters treated the code as a balance.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the word \"minimum\" in the purpose statement tell you about a code?",
            options: [
              "It is a floor, not a description of good work",
              "It is the least a jurisdiction may adopt before the state will withhold its approval",
              "It is the smallest set of provisions an inspector is permitted to check on a visit",
              "It applies only to the least expensive class of residential structure",
            ],
            correctIndex: 0,
            explanation:
              "Meeting the code says the work clears the floor. It does not say the work is good, and it does not say the building suits you.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Where does the rule say the adopted code may be reviewed?",
            options: [
              "A named room in a state government building",
              "At any public library in the state, which receives a copy under the adoption rule",
              "At the office of the publisher, on request and on payment of a reading fee",
              "At the local building department of the county where the structure is located",
            ],
            correctIndex: 0,
            explanation:
              "The rule names the Indiana Department of Homeland Security, Indiana Government Center South, 302 West Washington Street, Room E208, Indianapolis, and the commission's webpage.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Why does the course say that \"where it may be reviewed\" sentence is worth finding in your own state's rule?",
            options: [
              "It answers how to read a code you cannot buy",
              "It establishes which office has authority to interpret the code for your jurisdiction",
              "It proves the state owns a copy of the edition it adopted, which validates the adoption",
              "It determines which building department will issue the permit for your address",
            ],
            correctIndex: 0,
            explanation:
              "An adoption rule that incorporates a private book will usually name a place where the public can go and read it.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "When does the mirror show 675 IAC 14-4.4-1 as filed?",
            options: [
              "26 November 2019",
              "25 December 2019, which is the date carried in the Indiana Register document number",
              "20 September 2026, which is the date this course checked the rule",
              "August 2017, which is the date of the printing the rule adopts",
            ],
            correctIndex: 0,
            explanation:
              "Filed 26 November 2019 at 11:43 a.m. The register document number is 20191225-IR-675190330FRA, a separate identifier.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What are a filing stamp and a register number for?",
            options: [
              "Going back to the state's own record",
              "Proving to an inspector that the work was permitted under the edition then in force",
              "Identifying which printing of the model code the state purchased for its files",
              "Telling a reader how many revisions the rule has been through since adoption",
            ],
            correctIndex: 0,
            explanation:
              "They let you check the state's record rather than anybody's copy of it, which matters because a mirror can lag.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is the first of the four questions to ask of any adoption rule?",
            options: [
              "Which model code does it adopt, by full title",
              "Which building department will enforce it for the address the learner cares about",
              "How many sections of revisions the adopting state wrote into the model text",
              "Whether the state has begun a readoption review of the rule in the current cycle",
            ],
            correctIndex: 0,
            explanation:
              "Then: which edition and printing; what the state named the result and what it changed; and when it was filed and where the book can be read.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is the second of the four questions?",
            options: [
              "Which edition, and which printing",
              "Which agency of the state made the rule and under what statutory authority",
              "Which trades are covered by this rule rather than by a rule in another article",
              "Which counties within the state have adopted amendments of their own",
            ],
            correctIndex: 0,
            explanation:
              "Indiana's answer is the 2018 edition, first printing August 2017.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is the third of the four questions?",
            options: [
              "What the state named it, and what the state changed",
              "Whether the model code publisher has released a newer edition since the adoption",
              "How much a copy of the adopted edition costs from the publisher",
              "Which inspector in the jurisdiction is assigned to residential work",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana the answers are the 2020 Indiana Residential Code, and the revisions in sections 2 through 245 of the same rule.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is the fourth of the four questions?",
            options: [
              "When it was filed, and where the book can be read",
              "Whether the rule has ever been challenged in court by the publisher of the model code",
              "How many other states adopted the same edition in the same year",
              "What the rule cost the state in licence fees to the publisher",
            ],
            correctIndex: 0,
            explanation:
              "The filing date and register number get you to the state's record, and the review location answers how to read a code you cannot buy.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the course say you know if you can answer those four questions for your own address?",
            options: [
              "More than almost anyone who has told you what the code says",
              "Enough to determine whether your own planned work will require a building permit",
              "Enough to cite a specific code section in support of a dispute with a contractor",
              "Everything the building department knows about the structures in its jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "The four questions are a method, and they survive the next readoption, which a memorised answer does not.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the course say is the point of the adoption rule being short?",
            options: [
              "The document that makes a long book enforceable fits on a screen",
              "A short rule is easier for a state agency to readopt when the cycle comes around",
              "The brevity shows the state made few changes to the model text it adopted",
              "A short rule cannot be challenged as easily as a long one in an administrative appeal",
            ],
            correctIndex: 0,
            explanation:
              "The adoption is one section. What follows it, in the same rule, is the state's revisions.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is a printing, as an adoption rule uses the word?",
            options: [
              "A particular issue of an edition",
              "The act of reproducing the code text for distribution to inspectors and contractors",
              "The number of copies the state purchased when it adopted the edition",
              "The format in which the code is made available, whether bound, loose-leaf or digital",
            ],
            correctIndex: 0,
            explanation:
              "Indiana's rule names the first printing, August 2017, of the 2018 edition.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is a state amendment, in the vocabulary of section 4?",
            options: [
              "A change the adopting government writes into the model text",
              "A correction the model code publisher issues between printings of an edition",
              "A variance an inspector grants for one building when the adopted text cannot be met",
              "A later rule that repeals the adoption entirely and replaces it at a new decimal",
            ],
            correctIndex: 0,
            explanation:
              "It governs over the model text, which is why a section the amendment touched does not say in that state what the book says.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the course say a section number is?",
            options: [
              "An invitation to check",
              "A guarantee that the text at that address has not changed since it was cited",
              "A licence to reproduce the text it points to, provided the number travels with it",
              "A shorthand the trades use in place of the full title of the model code",
            ],
            correctIndex: 0,
            explanation:
              "A reproduction is a substitute for checking, and a substitute goes stale without telling you.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Which of these is NOT part of the Indiana citation this course reads?",
            options: [
              "A paragraph designator in parentheses",
              "A title number identifying the agency whose rules are collected under it",
              "An article number grouping the rules about one and two family dwellings",
              "A rule number carrying a decimal that records a series of replacements",
            ],
            correctIndex: 0,
            explanation:
              "675 IAC 14-4.4-1 runs title, code, article, rule, section. The parenthetical paragraph form belongs to the federal CFR citation taught in Basic Construction Safety.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Where does the course say everything binding on your house lives?",
            options: [
              "In the adoption",
              "In the model code, since the adoption merely records a decision already made elsewhere",
              "In the permit, since nothing is enforceable until a permit has been issued",
              "In the drawings, since they are what the inspector actually compares the work against",
            ],
            correctIndex: 0,
            explanation:
              "And everything you are told you must buy lives in the model code. Separating the two is the most useful move in the course.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Which body's rules are collected under Indiana title 675?",
            options: [
              "The Fire Prevention and Building Safety Commission",
              "The Department of Homeland Security, which houses the copy available for public review",
              "The International Code Council, which publishes the codes the title adopts",
              "The Indiana General Assembly, which enacts the statutes the rules are made under",
            ],
            correctIndex: 0,
            explanation:
              "The commission is the agency that made the adoption rule. The Department of Homeland Security is where the rule says the adopted code may be reviewed.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does the course say about an organisation that publishes a model code?",
            options: [
              "It is not a government",
              "It is a government-chartered body with authority delegated by the states that use its work",
              "It is a trade association whose members are the building departments that adopt it",
              "It is a federal agency, which is why its text may be freely reproduced",
            ],
            correctIndex: 0,
            explanation:
              "Neither the International Code Council nor the National Fire Protection Association is a government, and neither book is law by itself.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What kind of document can an address be handed to?",
            options: [
              "A librarian, a building official or a search box",
              "Only the agency that filed the rule, since no one else may confirm its contents",
              "Only the publisher, since the address refers to a book it sells",
              "Only a licensed designer, who is qualified to interpret the section it points to",
            ],
            correctIndex: 0,
            explanation:
              "Reading a citation as an address is the habit the course is built on. It is directions to a document, not a claim about its contents.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What is an administrative code?",
            options: [
              "The published rules made by a state's agencies",
              "The set of model codes a state has adopted, bound together for its inspectors",
              "The internal procedures a building department follows in reviewing an application",
              "The federal regulations that apply to construction work in every state",
            ],
            correctIndex: 0,
            explanation:
              "The Indiana Administrative Code is where the adoption rule this section reads actually sits.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does (Repealed) beside a rule in a listing mean?",
            options: [
              "It is no longer in force",
              "It has been challenged and suspended pending a decision by a reviewing court",
              "Its text has been moved to a different article of the same administrative title",
              "The publisher has not yet processed the current version of the rule",
            ],
            correctIndex: 0,
            explanation:
              "Usually because a later rule replaced it. That is what the decimal series in Article 14 records.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Which article of Indiana title 675 is headed One and Two Family Dwelling Code?",
            options: [
              "Article 14",
              "Article 17, which collects the state's electrical code rules across several decades",
              "Article 4.4, which is the rule containing the current residential adoption",
              "Article 245, which is the last section of the current residential rule",
            ],
            correctIndex: 0,
            explanation:
              "Electrical codes are Article 17, a separate article with its own series of adoptions, which lesson 9 reads.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does the course say about the phrase \"the code says\"?",
            options: [
              "It usually needs three questions asked of it",
              "It is reliable when spoken by anyone who has actually purchased the current edition",
              "It should be accepted from a building official and questioned from anyone else",
              "It has no meaning at all, because codes are not law until a permit issues",
            ],
            correctIndex: 0,
            explanation:
              "Which edition, which section, and which jurisdiction adopted it. Lesson 10 develops the point.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "What does the course say a memorised code answer does not survive?",
            options: [
              "The next readoption",
              "A move from one county to another within the same state",
              "A revision to the drawings after the permit has been issued",
              "A change of inspector part way through a project",
            ],
            correctIndex: 0,
            explanation:
              "A number you were handed expires quietly. The four questions are a method, and a method keeps working.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "On what date and on what source was Indiana's adoption rule read for this course?",
            options: [
              "20 September 2026, on the Legal Information Institute's mirror",
              "25 December 2019, in the Indiana Register document that published the final rule",
              "20 September 2026, on the Indiana Administrative Rules and Policies portal",
              "26 November 2019, at the Indiana Department of Homeland Security",
            ],
            correctIndex: 0,
            explanation:
              "The date and the place are both part of the claim. Lesson 9 explains what the course could and could not confirm on the state's own portal that day.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What do the decimals in an administrative code article record?",
            options: [
              "A history of replacements",
              "The order in which the state's amendments to the model text were adopted",
              "The classes of structure each rule applies to within the article",
              "The sections of the model code the state chose to enforce",
            ],
            correctIndex: 0,
            explanation:
              "Rather than editing an old rule, the agency writes a new one at the next decimal and repeals the old.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Why does the course call the adoption rule the most teachable document in the series?",
            options: [
              "It is free, official, short, and about your own house",
              "It contains the stud spacing table that Construction Math deferred to in its layout lesson",
              "It is the only document a building department will accept in place of a permit application",
              "It is published by the same organisation that writes the model code it adopts",
            ],
            correctIndex: 0,
            explanation:
              "It names a private document in a public one, which lets a learner find out what governs their house without reprinting a line of the code.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does the course say an adoption rule that incorporates a private book will usually name?",
            options: [
              "A place the public can read it",
              "The price the state paid for the copies it distributed to local building departments",
              "The sections of the book the state considered but decided not to enforce",
              "The date on which the incorporated edition will cease to be enforceable",
            ],
            correctIndex: 0,
            explanation:
              "Indiana's rule names a room in a state government building and the commission's webpage.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The edition year is not this year
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-edition-year-is-not-this-year",
      title: "9 · The edition year is not this year",
      section: "Section 5 · The edition year is not this year",
      body: `Three years can be in play at once, and people routinely confuse them. The year you are standing in. The year in the state's name for its own rule. And the edition year of the model code the state adopted. In Indiana, on 20 September 2026, all three were different, in two separate articles, in the same direction.

**The residential article.** 675 IAC 14-4.4 is titled "2020 Indiana Residential Code". Section 1 of it adopts the 2018 edition, first printing August 2017. So: reading it in 2026, a rule named for 2020 adopting a book dated 2018 that was printed in 2017 (Legal Information Institute, n.d.-a, n.d.-b).

**The electrical article.** Title 675 has a second article for electrical codes, Article 17. Its listing, read the same day, is a longer version of the same story. Rules 17-1, 17-1.1, 17-1.2, 17-1.3, 17-1.4, 17-1.5, 17-1.6 and 17-1.7 are all marked "(Repealed)". Their titles record the series: Indiana Electrical Code 1993 Edition, 1997 Edition, 1999 Edition, 2002 Edition, 2005 Edition. The newest rule in that article not marked repealed is **675 IAC 17-1.8, "Indiana Electrical Code, 2009 Edition"** (Legal Information Institute, n.d.-c).

Now open its first section. 675 IAC 17-1.8-1 adopts by reference the **National Electrical Code, 2008 Edition, first printing** (Legal Information Institute, n.d.-d).

So the same gap appears again, and wider. The rule's own title says 2009. The edition it adopts says 2008. And the reader is in 2026.

**This is the whole argument for looking up the adoption rule, in one example.** Somebody who wants to know what governs electrical work in Indiana could buy the newest National Electrical Code on the day they read this. That book would tell them what its publisher most recently printed. On the state listing read for this course, it would not tell them what the state rule pointed at. The book is a product. The adoption is the law. Buying the first does not get you the second, and no amount of money spent on the newest edition substitutes for two minutes spent on a free state rule.

**Where this course's checking stopped, stated plainly.** The rules above were read on the Legal Information Institute's mirror of the Indiana Administrative Code on 20 September 2026. That is a publisher's copy, and a publisher's copy can lag the register a state agency files into.

This course tried to check the state's own record and could not. Indiana's official rules portal at iar.iga.in.gov is a JavaScript application: four separate requests to it that day, three through a page reader and one raw, returned the same empty page shell with no rule text in it. The older static host returned the same shell. An official in.gov page for the residential final rule returned 404. So the register itself was never read for this build.

**What the course therefore does not assert.** Search summaries seen on 20 September 2026 report two things that this course could not confirm on any official page, and so will not state as fact:

- that a newer electrical rule, 675 IAC 17-1.9, adopts the 2023 National Electrical Code as the "Indiana Electrical Code, 2026 Edition" and repeals 17-1.8; and
- that 675 IAC 14-4.4 was under readoption review in 2025, under a document numbered LSA 24-566.

Both are plausible. Neither was read. They are recorded here because a reader in Indiana should go and check them, not because this course knows.

**And notice that the reported version does not change the lesson.** If a 2026 Indiana electrical rule adopting the 2023 edition does exist, then the state's name for the rule and the edition it adopted are still different numbers, by three years, in the same direction. The gap is not an Indiana quirk. It is what adoption looks like everywhere: a model code is published, a state reviews it, amends it, and files a rule, and all of that takes time.

**So the practical rules are four.**

1. Never assume the edition your state enforces is the newest one published.
2. Never assume the year in your state's name for its code is the edition year.
3. Read the adoption rule on the state's own register if you can reach it, and record which source you actually read.
4. Write down the date you checked, because that date is part of the answer.

:::reveal What three different years can be in play at once when someone talks about "the code"? ||| The year the reader is in, the year in the state's own name for its rule, and the edition year of the model code the rule adopts.

:::reveal What does 675 IAC 17-1.8-1 adopt, and what is the rule titled? ||| It adopts the National Electrical Code, 2008 Edition, first printing, and the rule is titled Indiana Electrical Code, 2009 Edition.

:::reveal Why will this course not state that a newer Indiana electrical rule exists? ||| Because it was seen only in search summaries and never read on an official page: the state's own rules portal returned an empty JavaScript shell to four requests on 20 September 2026.

:::reveal Why does buying the newest edition of a model code not answer the question? ||| Because the book tells you what the publisher most recently printed, while the adoption rule tells you what your jurisdiction actually enforces, and those are routinely different.

## Vocabulary
- **Edition year**: the year a model code publisher assigns to a particular edition of its book.
- **Readoption**: the process by which a state reviews a rule and adopts it again, with or without changes.
- **Mirror**: a publisher's copy of an official document, which may lag the official source.
- **Register**: the official record a state agency files rules into, and the authoritative source for their text.

## Sources
Legal Information Institute. (n.d.-a). *Title 675, Article 14: One and two family dwelling code*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/title-675/article-14
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1
Legal Information Institute. (n.d.-c). *Title 675, Article 17: Electrical codes*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/title-675/article-17
Legal Information Institute. (n.d.-d). *675 IAC 17-1.8-1: Adoption by reference*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-17-1.8-1`,
    },
    {
      slug: "cite-the-address-never-the-text",
      title: "10 · Cite the address, never the text",
      section: "Section 5 · The edition year is not this year",
      body: `This lesson is the course's own operating rule, turned into something you can use on anyone who tells you what the code says.

**The rule.** Cite the address. Never reproduce the text. The address is a rule number, an article, an edition, a printing and a section. It is free to state, free to pass on, and it survives being repeated. The text is somebody's copyrighted property, and a copy of it goes stale the moment an edition changes, without announcing that it has.

**Three questions for any "the code says" claim.** When somebody tells you a requirement, ask:

1. **Which edition?** Not which code. Which edition of it.
2. **Which section?** A requirement with no section number is a memory, not a citation.
3. **Which jurisdiction adopted that edition, and did it amend that section?** This is the one people never ask, and it is the one that most often changes the answer.

Nobody reasonable will mind these questions. A building official answers them for a living. A good contractor will have the section number. And the person who cannot answer any of the three has just told you something useful about the claim.

**How to read a code you do not own.** Three routes are worth knowing, and this course is careful about what it says on each.

- **Your own adoption rule is free and official.** Everything your state changed is in it, in full text, because a state cannot make a secret amendment. That is not a small thing: in Indiana the amendments run for hundreds of sections of the same rule, and the amendments are the part most likely to catch you out.
- **A reference copy.** Adoption rules often name a place where the incorporated code may be reviewed, as Indiana's names a room in a state building. Public libraries and building department counters are the other obvious places to ask.
- **The publishers' own free-access offerings.** Both major publishers are widely reported to provide some form of free read-only access to their codes online. This course states that as reported and nothing more, because it could not verify it: every attempt to reach those publishers' pages while this material was researched failed, with 403 and 404 responses and, in one case, a hostname that did not resolve. So the course does not describe the terms, does not promise the access exists, and does not tell you what you may do with what you find there. Go and look, read the terms you actually see, and treat any second-hand description of them, including this paragraph, as a lead rather than a fact.

**What not to do with what you find.** Do not copy sections into a handout. Do not paste them into a group chat as the answer. Do not build a private compilation of "the sections we use". Every one of those turns an address into a stale copy, and the copy will be the version somebody relies on two years after it stopped being right.

**The one free complete building code, and the caveat that must travel with it.** There is a full building code that is federal, free and outside copyright: the Manufactured Home Construction and Safety Standards at 24 CFR part 3280. Its scope section says it "covers all equipment and installations in the design, construction, transportation, fire safety, plumbing, heat-producing and electrical systems of manufactured homes which are designed to be used as dwelling units" (24 C.F.R. § 3280.1). Its eleven subparts, A through K, run from general provisions and planning considerations through fire safety, body and frame construction, testing, thermal protection, plumbing, heating and cooling, electrical systems, transportation, and attached homes.

It is a genuinely useful thing to read if you have never read a code, because it shows you the shape of one: definitions, scope, performance requirements, testing, and the systems taken one at a time.

**And here is the caveat, which must be stated every single time.** **Part 3280 governs manufactured homes.** It is not the code for a site-built house. Reading it will teach you what a code looks like and how its sections are organised. It will not tell you what governs a house framed on a lot in your town, and anyone who applies a 3280 requirement to site-built work is heading for a failed inspection. Use it as a model of the form, never as a source of the requirement.

:::reveal What are the three questions to ask of any claim about what the code says? ||| Which edition, which section, and which jurisdiction adopted that edition and did it amend that section.

:::reveal Why does the course refuse to describe the publishers' free-access terms? ||| Because every attempt to reach those publishers' pages during research failed, so the terms were seen only in second-hand summaries, and a second-hand description of terms is a lead rather than a fact.

:::reveal What must be said every time 24 CFR part 3280 is cited? ||| That it governs manufactured homes and is not the code for a site-built house, so it shows the form of a code rather than the requirement for your building.

:::reveal Why is your own state's adoption rule an unusually useful free document? ||| Because everything the state changed is in it in full text, a state cannot make a secret amendment, and the amendments are the part most likely to catch you out.

## Vocabulary
- **Free access**: an offering by which a publisher lets the public read a standard online without purchase, on its own stated terms.
- **Reference copy**: a copy of an incorporated code kept somewhere the public may read it.
- **Stale copy**: a reproduction of code text that has stopped matching the adopted edition without saying so.
- **Manufactured home**: a dwelling built to the federal standard at 24 CFR part 3280, as distinct from a site-built house.

## Sources
Manufactured home construction and safety standards: Scope, 24 C.F.R. § 3280.1 (2026). https://www.law.cornell.edu/cfr/text/24/3280.1
Manufactured home construction and safety standards, 24 C.F.R. pt. 3280 (2026). https://www.law.cornell.edu/cfr/text/24/part-3280
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The edition year is not this year",
      section: "Section 5 · The edition year is not this year",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which three years can be in play at once when someone talks about the code?",
            options: [
              "Now, the state's title year, and the edition year",
              "The year the permit issued, the year the work was inspected, and the year of final approval",
              "The year the house was built, the year it was last remodelled, and the year it was sold",
              "The year the rule was filed, the year it takes effect, and the year it must be readopted",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana on 20 September 2026 all three were different, in two separate articles, in the same direction.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What year is in the title of Indiana's residential rule, and what edition does it adopt?",
            options: [
              "Titled 2020, adopting the 2018 edition",
              "Titled 2018, adopting the 2020 edition, which the state renamed on adoption",
              "Titled 2019, adopting the 2017 printing that the rule names specifically",
              "Titled 2026, adopting the most recent edition available at the time of readoption",
            ],
            correctIndex: 0,
            explanation:
              "675 IAC 14-4.4 is titled 2020 Indiana Residential Code and its section 1 adopts the 2018 edition, first printing August 2017.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which article of Indiana title 675 collects the electrical codes?",
            options: [
              "Article 17",
              "Article 14, which also carries the residential rules for one and two family dwellings",
              "Article 4.4, which is the current residential rule within the title",
              "Article 1.8, which is the current electrical rule within the title",
            ],
            correctIndex: 0,
            explanation:
              "Article 14 is the One and Two Family Dwelling Code. Article 17 is Electrical Codes, with its own long series of adoptions.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which Indiana electrical rule was the newest not marked (Repealed) on the listing read for this course?",
            options: [
              "675 IAC 17-1.8",
              "675 IAC 17-1.7, whose title records the Indiana Electrical Code, 2005 Edition",
              "675 IAC 17-1.9, which search summaries report adopts the 2023 National Electrical Code",
              "675 IAC 17-3, the Safety Code for Health Care Facilities within the same article",
            ],
            correctIndex: 0,
            explanation:
              "Rules 17-1 through 17-1.7 were all marked (Repealed) on that listing, read on 20 September 2026.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What is 675 IAC 17-1.8 titled?",
            options: [
              "Indiana Electrical Code, 2009 Edition",
              "Indiana Electrical Code, 2008 Edition, matching the edition of the model code it adopts",
              "Indiana Electrical Code, 2026 Edition, following the state's usual naming convention",
              "National Electrical Code, First Printing, as adopted by the commission",
            ],
            correctIndex: 0,
            explanation:
              "And its section 1 adopts the National Electrical Code, 2008 Edition, first printing. The title year and the edition year differ again.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which edition does 675 IAC 17-1.8-1 adopt by reference?",
            options: [
              "The 2008 National Electrical Code, first printing",
              "The 2009 National Electrical Code, matching the year in the title of the rule",
              "The 2023 National Electrical Code, as reported by search summaries seen in September 2026",
              "The 2018 International Residential Code, first printing August 2017",
            ],
            correctIndex: 0,
            explanation:
              "The rule's own title says 2009, the edition it adopts says 2008, and the reader is in 2026.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What would buying the newest National Electrical Code tell an Indiana reader?",
            options: [
              "What the publisher most recently printed",
              "Which requirements the state rule points at for electrical work in the jurisdiction",
              "Which sections the state amended when it adopted the edition it enforces",
              "Which edition an inspector would check the work against on a residential job",
            ],
            correctIndex: 0,
            explanation:
              "The book is a product; the adoption is the law. No amount spent on the newest edition substitutes for two minutes on a free state rule.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What source did this course actually read the Indiana rules on?",
            options: [
              "A publisher's mirror of the administrative code",
              "The Indiana Register, through the state's own rules and policies portal",
              "A printed copy held at the Indiana Department of Homeland Security",
              "The International Code Council's digital codes library",
            ],
            correctIndex: 0,
            explanation:
              "The Legal Information Institute's mirror, on 20 September 2026. A publisher's copy can lag the register a state agency files into.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What happened when this course tried to read Indiana's official rules portal?",
            options: [
              "Four requests returned an empty page shell",
              "The portal required a paid subscription before the text of any rule could be displayed",
              "The portal returned the rule text but without any filing date or register number",
              "The portal redirected to the publisher of the model code the rule adopts",
            ],
            correctIndex: 0,
            explanation:
              "The site is a JavaScript application. Three requests through a page reader and one raw request all returned the same shell with no rule text, and the older static host returned the same.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which claim does the course record as reported rather than assert as fact?",
            options: [
              "That a newer rule 675 IAC 17-1.9 adopts the 2023 edition",
              "That 675 IAC 17-1.8 is titled Indiana Electrical Code, 2009 Edition",
              "That rules 675 IAC 17-1 through 17-1.7 are marked (Repealed) on the listing",
              "That 675 IAC 14-4.4-1 adopts the 2018 edition, first printing August 2017",
            ],
            correctIndex: 0,
            explanation:
              "That report, and a report of a 2025 readoption review of 14-4.4 under LSA Document 24-566, were seen only in search summaries and read on no official page.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Why does the course record the unverified reports at all?",
            options: [
              "So an Indiana reader goes and checks them",
              "Because a report from a search summary is sufficient evidence for a teaching claim",
              "Because the course expects them to be confirmed before any learner reads the lesson",
              "Because recording them satisfies the requirement to cite a source for every claim",
            ],
            correctIndex: 0,
            explanation:
              "They are plausible and neither was read. Recording them is not the same as knowing them.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "If the reported newer Indiana electrical rule does exist, what happens to the lesson?",
            options: [
              "Nothing, because the gap is still there",
              "The lesson fails, because the whole example depends on the 2008 edition being current",
              "The gap reverses, because a 2026 rule adopting a 2023 edition is ahead of the reader",
              "The gap disappears, because the state would then be enforcing the current edition",
            ],
            correctIndex: 0,
            explanation:
              "A 2026 name on a rule adopting a 2023 edition is still two different numbers, three years apart, in the same direction.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Why does the gap between the title year and the edition year exist at all?",
            options: [
              "Review, amendment and filing all take time",
              "Because publishers deliberately post-date their editions to extend the selling period",
              "Because state agencies are required to name a rule for the year it takes effect",
              "Because an adoption may not name an edition published in the same calendar year",
            ],
            correctIndex: 0,
            explanation:
              "A model code is published, a state reviews it, amends it, and files a rule. The gap is what adoption looks like everywhere, not an Indiana quirk.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which is the first of the four practical rules in lesson 9?",
            options: [
              "Never assume your state enforces the newest edition",
              "Always buy the edition your state adopted rather than the one currently on sale",
              "Always ask the building department before reading the adoption rule yourself",
              "Always treat a publisher's mirror as equivalent to the state's own register",
            ],
            correctIndex: 0,
            explanation:
              "Then: never assume the year in the state's name is the edition year; read the register if you can reach it and record what you read; and write down the date.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does lesson 9 say is part of the answer, not just a note about it?",
            options: [
              "The date you checked",
              "The price of the edition the state adopted, since it affects who can read the code",
              "The name of the inspector who confirmed the requirement on site",
              "The number of sections of amendments the state wrote into the model text",
            ],
            correctIndex: 0,
            explanation:
              "Along with recording which source you actually read, because a mirror and a register are not the same claim.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What is a mirror, in the vocabulary of section 5?",
            options: [
              "A publisher's copy of an official document",
              "The register a state agency files its rules into, which is the authoritative source",
              "A second adoption of the same model code by a neighbouring jurisdiction",
              "A duplicate sheet in a drawing set carrying the same layout for another trade",
            ],
            correctIndex: 0,
            explanation:
              "It may lag the official source, which is why the course names the source it read and the date it read it.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What is a readoption?",
            options: [
              "A state reviewing a rule and adopting it again",
              "A publisher reissuing an edition after correcting errors found in the first printing",
              "A second jurisdiction adopting a rule another jurisdiction has already adopted",
              "An inspector applying a repealed rule to work permitted while it was in force",
            ],
            correctIndex: 0,
            explanation:
              "With or without changes. The reported 2025 review of 675 IAC 14-4.4 would be an instance of it, if confirmed.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the course tell you to do with a \"the code says\" claim?",
            options: [
              "Ask three questions about it",
              "Accept it if the speaker owns a copy of the edition the jurisdiction has adopted",
              "Check it against the publisher's newest edition, which supersedes older ones",
              "Report it to the building department so the department can confirm or deny it",
            ],
            correctIndex: 0,
            explanation:
              "Which edition, which section, and which jurisdiction adopted that edition and did it amend that section.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Which of the three questions does the course say people never ask?",
            options: [
              "Whether the jurisdiction amended that section",
              "Which edition of the model code the claim is drawn from in the first place",
              "Which section number within the code the requirement actually sits at",
              "Which trade the requirement belongs to in the adopted code's organisation",
            ],
            correctIndex: 0,
            explanation:
              "It is also the one that most often changes the answer, because state amendments govern over the model text.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say a requirement with no section number is?",
            options: [
              "A memory",
              "A summary, which is adequate for planning but not for a permit application",
              "An amendment, since amendments are the part of a code that carries no numbering",
              "A local practice, which governs only within one building department's territory",
            ],
            correctIndex: 0,
            explanation:
              "A memory, not a citation. The section number is what makes the claim checkable by anyone.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say about someone who cannot answer any of the three questions?",
            options: [
              "They have told you something useful about the claim",
              "They are probably right anyway, since the questions are technical rather than substantive",
              "They should be reported to the licensing authority for the trade they work in",
              "They are describing an amendment, which is why the section number is missing",
            ],
            correctIndex: 0,
            explanation:
              "A building official answers these for a living, and a good contractor will have the section number.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Why is your own state's adoption rule unusually useful as a free document?",
            options: [
              "The state's amendments are in it in full text",
              "It reprints the model code in full, which is why the state may distribute it without charge",
              "It lists every section of the model code that an inspector is permitted to enforce",
              "It is updated continuously, so it always reflects the newest published edition",
            ],
            correctIndex: 0,
            explanation:
              "A state cannot make a secret amendment. In Indiana the amendments run for hundreds of sections, and they are the part most likely to catch you out.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say about the publishers' free-access offerings?",
            options: [
              "It reports them and describes no terms",
              "It confirms that both publishers provide free read-only access without registration",
              "It advises against using them, because the terms forbid any practical use",
              "It states the terms in full, having read them on each publisher's own site",
            ],
            correctIndex: 0,
            explanation:
              "Every attempt to reach those publishers' pages during research failed, with 403 and 404 responses and one hostname that did not resolve, so the terms were never read.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "How does the course tell you to treat a second-hand description of access terms?",
            options: [
              "As a lead rather than a fact",
              "As binding, since publishers are held to the terms that third parties describe",
              "As void, since only the publisher's sales department may state terms",
              "As equivalent to the terms themselves, provided the description names its source",
            ],
            correctIndex: 0,
            explanation:
              "The lesson includes its own paragraph in that instruction: go and look, and read the terms you actually see.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Which of these does the course tell you not to do with code text you find?",
            options: [
              "Build a private compilation of the sections you use",
              "Note the section numbers so you can find the same provisions again later",
              "Ask a building official whether a particular section applies to your work",
              "Read your state's amendments to the section in the adoption rule",
            ],
            correctIndex: 0,
            explanation:
              "Copying into a handout, pasting into a chat and compiling all turn an address into a stale copy, which is what somebody will rely on two years later.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What is a stale copy?",
            options: [
              "A reproduction that has stopped matching the adopted edition",
              "A printed sheet whose dimensions no longer match the building as it was actually built",
              "An adoption rule that a state has allowed to lapse without readopting it",
              "A reference copy kept at a building department counter rather than at a library",
            ],
            correctIndex: 0,
            explanation:
              "The danger is that it stops matching without saying so, which is exactly what an address does not do.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Which federal regulation does the course name as a complete, free building code?",
            options: [
              "24 CFR part 3280",
              "29 CFR part 1926, the Safety and Health Regulations for Construction",
              "40 CFR part 745 subpart E, the lead renovation, repair and painting rule",
              "17 U.S.C. 105, which places federal works outside copyright",
            ],
            correctIndex: 0,
            explanation:
              "The Manufactured Home Construction and Safety Standards, in eleven subparts lettered A through K.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does 24 CFR 3280.1 say the standard covers?",
            options: [
              "Equipment and installations in manufactured homes used as dwellings",
              "All residential structures within the jurisdiction of a state that has adopted it",
              "Site preparation and foundation work for any dwelling placed on a permanent foundation",
              "The transportation of building materials to a construction site by road",
            ],
            correctIndex: 0,
            explanation:
              "The scope section covers design, construction, transportation, fire safety, plumbing, heat-producing and electrical systems of manufactured homes designed to be used as dwelling units.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "How many subparts does 24 CFR part 3280 have?",
            options: [
              "Eleven",
              "Sixteen, one for each division of the standard specification format",
              "Three, corresponding to General, Products and Execution",
              "Nine, matching the chapters of the Builder manual",
            ],
            correctIndex: 0,
            explanation:
              "Lettered A through K, running from general provisions and planning considerations through fire safety, structure, testing, thermal, plumbing, heating, electrical, transportation and attached homes.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What caveat must travel with every citation of 24 CFR part 3280?",
            options: [
              "It governs manufactured homes, not site-built houses",
              "It applies only in states that have not adopted a residential code of their own",
              "It has been superseded by the model residential codes in every state that adopted them",
              "It may be read but not cited, because the subparts are revised without notice",
            ],
            correctIndex: 0,
            explanation:
              "Anyone who applies a 3280 requirement to site-built work is heading for a failed inspection. Use it as a model of the form, never as a source of the requirement.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Why does the course recommend reading 24 CFR part 3280 anyway?",
            options: [
              "It shows you the shape of a code",
              "It contains the same requirements as the model residential codes, in free form",
              "It is the document a building department checks a site-built house against",
              "It lists the amendments every state has written into its own residential code",
            ],
            correctIndex: 0,
            explanation:
              "Definitions, scope, performance requirements, testing, and the systems taken one at a time. It teaches the form, not the requirement.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What is a reference copy?",
            options: [
              "A copy of an incorporated code kept where the public may read it",
              "A copy of the drawings kept on site for the inspector's use during the work",
              "A duplicate of the adoption rule filed with the local building department",
              "The publisher's archival copy of the printing a state adopted",
            ],
            correctIndex: 0,
            explanation:
              "Adoption rules often name a place, as Indiana's names a room in a state building. Libraries and building department counters are the other places to ask.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say an address survives that a copy does not?",
            options: [
              "Being repeated",
              "Being read by someone who does not own the edition it points to",
              "Being amended by the state that adopted the edition it points to",
              "Being cited in a document prepared for a different jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "The address is free to state, free to pass on, and survives repetition. A copy goes stale the moment an edition changes, without announcing it.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say makes up an address, in code terms?",
            options: [
              "Rule number, article, edition, printing and section",
              "The publisher, the price, the format and the year of purchase",
              "The jurisdiction, the inspector, the permit number and the date of the visit",
              "The title block, the revision letter, the sheet number and the scale",
            ],
            correctIndex: 0,
            explanation:
              "Each piece is free to state and each narrows the search. Together they let anyone go and check the claim.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Who does the course say answers the three questions for a living?",
            options: [
              "A building official",
              "A model code publisher's technical support staff, on a subscriber helpline",
              "A home inspector engaged before the purchase of an existing house",
              "A librarian at a public library that keeps a reference copy of the code",
            ],
            correctIndex: 0,
            explanation:
              "And a good contractor will have the section number. Nobody reasonable minds being asked.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What is free access, as the course defines the term?",
            options: [
              "A publisher letting the public read a standard online on its own terms",
              "A state requirement that any adopted code be provided to residents without charge",
              "The right to reproduce an adopted code because it has become law",
              "A library's lending of a reference copy of an incorporated code",
            ],
            correctIndex: 0,
            explanation:
              "The terms are the publisher's to set, and this course could not read them, so it reports the existence of such offerings and describes no terms.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What is a manufactured home, in the vocabulary of section 5?",
            options: [
              "A dwelling built to the federal standard at 24 CFR part 3280",
              "Any dwelling assembled from components produced away from the site where it stands",
              "A dwelling built under a state residential code adopted by reference from a model code",
              "A dwelling that has been moved to a new lot after its original construction",
            ],
            correctIndex: 0,
            explanation:
              "The distinction from a site-built house is the whole reason the caveat has to travel with every citation of that part.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say about pasting code sections into a group chat?",
            options: [
              "It turns an address into a stale copy",
              "It is acceptable provided the section number and edition travel with the text",
              "It is the fastest way to settle a dispute about a requirement on a job",
              "It is permitted because a short extract is too brief to matter",
            ],
            correctIndex: 0,
            explanation:
              "The copy will be the version somebody relies on two years after it stopped being right.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What kind of rule is lesson 10, in the course's own terms?",
            options: [
              "The course's operating rule, turned into a tool",
              "A summary of the access terms published by the two major model code publishers",
              "An exception to the citation discipline, allowed because the material is federal",
              "A statement of the legal position on reproducing codes incorporated into law",
            ],
            correctIndex: 0,
            explanation:
              "Cite the address, never reproduce the text, and use the three questions on anyone who tells you what the code says.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Which Indiana electrical rules were marked (Repealed) on the listing read for this course?",
            options: [
              "17-1 through 17-1.7",
              "17-1.8 alone, since the newer 17-1.9 rule replaced it during the 2026 cycle",
              "None of them, because repealed rules are removed from the listing",
              "All of them, including 17-1.8, which was awaiting readoption",
            ],
            correctIndex: 0,
            explanation:
              "Their titles record the series of Indiana electrical code editions: 1993, 1997, 1999, 2002 and 2005 among them.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the course call the difference between a book and an adoption?",
            options: [
              "The book is a product; the adoption is the law",
              "The book is current; the adoption is historical, recording what was once enforced",
              "The book is free; the adoption is sold by the state that filed it",
              "The book is amended; the adoption is the unamended model text",
            ],
            correctIndex: 0,
            explanation:
              "Buying the first does not get you the second, which is why looking up a free state rule beats buying the current edition.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What is an edition year?",
            options: [
              "The year a publisher assigns to an edition of its book",
              "The year a state's rule adopting that edition takes effect in the jurisdiction",
              "The year the state files the rule with its own administrative register",
              "The year the building department begins enforcing the edition on permits",
            ],
            correctIndex: 0,
            explanation:
              "It is routinely different from the year in a state's name for its own rule, which is the confusion this section exists to remove.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What is a register, in the vocabulary of section 5?",
            options: [
              "The official record a state files its rules into",
              "The index a publisher keeps of the rules it has processed for its mirror",
              "The log a building department keeps of permits issued and inspections performed",
              "The list of states that have adopted a given edition of a model code",
            ],
            correctIndex: 0,
            explanation:
              "It is the authoritative source for a rule's text, which is why the course says to read it if you can reach it and to record which source you actually read.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What did an official in.gov page for the Indiana residential final rule return?",
            options: [
              "404",
              "The full text of the rule, including every amendment the state wrote into it",
              "A redirect to the publisher of the model code the rule adopts",
              "A request for a subscription before the document could be downloaded",
            ],
            correctIndex: 0,
            explanation:
              "The course names every failure rather than quietly asserting the underlying fact from a source it could not read.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Why does the course say the gap is not an Indiana quirk?",
            options: [
              "It is what adoption looks like everywhere",
              "Because every state adopts the same edition of each model code in the same year",
              "Because model code publishers coordinate their release dates with the states",
              "Because federal law sets the interval between publication and adoption",
            ],
            correctIndex: 0,
            explanation:
              "A model code is published, a state reviews it, amends it, and files a rule, and all of that takes time.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Which of the four practical rules concerns what you record?",
            options: [
              "Write down the date you checked",
              "Record the price of the edition your jurisdiction adopted for later reference",
              "Record the name of the official who confirmed the requirement to you",
              "Record the sections of the model code your project relies on, with their text",
            ],
            correctIndex: 0,
            explanation:
              "Rule three also says to record which source you actually read, because a mirror and a register are not the same claim.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the course say about the amendments in a state adoption rule?",
            options: [
              "They are the part most likely to catch you out",
              "They are usually minor editorial corrections that do not change any requirement",
              "They are kept confidential until a permit application is submitted",
              "They apply only to structures built after the rule was filed",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana they run for hundreds of sections of the same rule, and they are in full text because a state cannot make a secret amendment.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What kind of document is LSA 24-566, as the course describes it?",
            options: [
              "A reported readoption review nobody here read",
              "The final rule that adopted the 2018 edition as the 2020 Indiana Residential Code",
              "The Indiana Register number stamped on the residential adoption rule",
              "The federal register notice incorporating the manufactured home standard",
            ],
            correctIndex: 0,
            explanation:
              "Search summaries report a 2025 readoption review of 675 IAC 14-4.4 under that number. It was not read on an official page, so the course does not state it as fact.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the course tell you to do before relying on a publisher's free-access offering?",
            options: [
              "Read the terms you actually see",
              "Confirm with the state that the offering satisfies the adoption rule's review requirement",
              "Ask the building department whether the offering shows the adopted edition",
              "Assume the offering permits printing for personal use, as is customary",
            ],
            correctIndex: 0,
            explanation:
              "Go and look. The course does not describe terms it could not verify, and tells you to treat its own paragraph as a lead.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say part 3280 will NOT tell you?",
            options: [
              "What governs a house framed on a lot in your town",
              "What the sections of a building code typically contain and how they are arranged",
              "How a federal standard organises definitions, scope and testing requirements",
              "What a plumbing subpart of a code covers in a dwelling built to that standard",
            ],
            correctIndex: 0,
            explanation:
              "Use it as a model of the form, never as a source of the requirement for site-built work.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What did this course do rather than describe the access terms it could not reach?",
            options: [
              "Named the failures and stopped",
              "Cited the summaries it found, since a summary is a secondary source rather than a guess",
              "Described the terms with a note that they had not been verified directly",
              "Left the subject out of the course entirely, since nothing about it was verified",
            ],
            correctIndex: 0,
            explanation:
              "403 and 404 responses and one hostname that did not resolve are named in the lesson, and the terms are not described.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Which article did the course read to find the Indiana electrical adoption?",
            options: [
              "Title 675, Article 17",
              "Title 675, Article 14, section 4.4-1, which adopts codes for dwellings",
              "Title 24, part 3280, which contains the electrical systems subpart",
              "Title 29, part 1926, subpart K, which covers electrical work on jobsites",
            ],
            correctIndex: 0,
            explanation:
              "Article 17 is Electrical Codes. Subpart K of 29 CFR 1926 is jobsite safety, and 24 CFR 3280 subpart I is manufactured home electrical systems, which are different things again.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What do the repealed titles in Article 17 record?",
            options: [
              "A series of earlier Indiana electrical code editions",
              "The sections of the National Electrical Code that Indiana declined to adopt over time",
              "The counties that adopted their own electrical amendments before the state acted",
              "The printings of each edition the commission considered before choosing one",
            ],
            correctIndex: 0,
            explanation:
              "Their titles name Indiana Electrical Code editions including 1993, 1997, 1999, 2002 and 2005, which is the decimal history of the article.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the course say happens to a copy of code text when the edition changes?",
            options: [
              "It goes stale without announcing it",
              "It is automatically superseded in law, so relying on it carries no practical risk",
              "It remains valid for work permitted while the earlier edition was in force",
              "It becomes freely reproducible, since the publisher no longer sells that edition",
            ],
            correctIndex: 0,
            explanation:
              "That silence is the whole problem. An address sends you back to the current text; a copy does not.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does lesson 10 say about copying sections into a handout?",
            options: [
              "Do not do it",
              "Do it only where the handout names the edition and the date the text was copied",
              "Do it for training use, which is what the publishers' free access exists to support",
              "Do it only for sections the state amended, since those are the state's own words",
            ],
            correctIndex: 0,
            explanation:
              "Handouts, chat messages and private compilations all turn an address into a stale copy.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The permit and the inspection sequence
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-permit-is-and-what-this-will-not-tell-you",
      title: "11 · What a permit is, and what this course will not tell you",
      section: "Section 6 · The permit and the inspection sequence",
      body: `This is the lesson where a wrong sentence costs somebody money, so it is written narrowly and it refuses more than it asserts.

**The refusal, restated because it matters most here.** This course does not tell you whether your job needs a permit. It does not tell you what a permit costs, how long one takes, what your application must contain, or whether yours will be approved. Every one of those answers belongs to one office: the building department with jurisdiction over your address. Any other source, including this one, is guessing about a local decision.

If you take one sentence from this section, take that one. The second most useful sentence is the next one.

**What a permit and an inspection are, structurally.** Section 4 established that a jurisdiction adopts a code. A permit and an inspection are how that adoption reaches an actual building. Somebody applies, the department reviews, work proceeds, and at certain points a person from that department comes and looks at the work before it is covered up.

The clearest published statement of an inspector's job that this course found says it in one line. Santa Cruz County, California, states on its building inspections page: "The building inspectors are responsible for inspecting structures to verify they are built in accordance with the permitted set of building documents and adopted California codes" (County of Santa Cruz, n.d.-a).

Read that against sections 2 through 5 and the whole course clicks into place. **The permitted set of building documents** is the drawing set and specification you learned to read. **The adopted codes** are what section 4 taught you to find. An inspection is a comparison between the work and those two documents. It is not an opinion about whether the house is nice, and it is not a general safety audit. It is a check against two named things.

That also tells you why the drawings matter so much at inspection time. The word in that sentence is *permitted*. It is not any set of documents; it is the set the department reviewed. A change made on site without the set being changed is a difference between the work and the document the inspector is checking against.

**What this course is careful not to generalise.** Santa Cruz County is one county in California. It was used here because it publishes a clear, dated, official account of its own process, and one real example teaches better than a vague national average that nobody actually operates under. Everything in the next lesson taken from that source is labelled as that county's published practice, not as a rule that holds everywhere. Your jurisdiction may sequence its inspections differently, name them differently, or require different ones.

**The pattern that does hold, and why.** Underneath the local variation there is one structural fact, and it is the reason inspections exist in the shape they do: **most construction work becomes invisible.** Wiring goes inside a wall. Pipe goes inside a floor. Reinforcing goes inside concrete. Framing connections go behind drywall. Once the next trade has covered the work, checking it means undoing something.

So an inspection regime has to catch work at the last moment it can still be seen. That single constraint explains nearly every inspection name you will ever meet, and lesson 12 walks through a published list of them in order.

**Where the code physically is, and why the adoption rule matters here too.** A learner reading section 4 may have wondered what use it is to know your state adopted a book you do not own. Here is one use. When you ask a building department a question, the thing that makes the question answerable is naming the document. "Does this need a permit?" is a question about local rules. "Which edition of the residential code does this jurisdiction enforce, and where can I read the amendments?" is a question with a documentary answer, and in Indiana the adoption rule itself names a room where the adopted code may be reviewed (Legal Information Institute, n.d.-b).

**How to ask a question an office can answer.** Four habits, and none of them requires knowing anything about the code:

1. **Say your address**, because the answer depends on it.
2. **Describe the work in plain words**, not in trade terms you are unsure of. "I want to take out a wall between the kitchen and the living room" is a better question than a guess about whether the wall is load bearing.
3. **Ask what the department needs from you**, rather than telling it what you think the rule is.
4. **Write down what you are told, with the date and the name of the person who told you**, and ask whether there is a published page or handout that says the same thing. A written source you can re-read beats a remembered phone call, and asking for one is normal.

And the honest ending: when the answer to a question is "ask the building department", that is not a failure of the course. That is the course telling you where the answer lives.

:::reveal What does this course refuse to tell you about permits? ||| Whether your job needs one, what it costs, how long it takes, what the application must contain, and whether it will be approved. All of those belong to the building department with jurisdiction over your address.

:::reveal What two things does Santa Cruz County say its building inspectors verify a structure against? ||| The permitted set of building documents and the adopted California codes.

:::reveal What single structural fact explains the shape of an inspection regime? ||| Most construction work becomes invisible once the next trade covers it, so inspections have to catch work at the last moment it can still be seen.

:::reveal Why is "which edition does this jurisdiction enforce" a better question than "what does the code say"? ||| Because it has a documentary answer that the office can point you to, while the second asks someone to summarise a book for you.

## Vocabulary
- **Building permit**: the authorisation a jurisdiction issues for work, and the thing an inspection is performed under.
- **Permitted set**: the specific drawings and documents the department reviewed and approved, which the work is compared against.
- **Concealed work**: work that a later stage of construction covers, so it can only be inspected before that stage.
- **Authority having jurisdiction**: the office whose decision governs at a given address.

## Sources
County of Santa Cruz. (n.d.-a). *Inspections*. Community Development and Infrastructure. Retrieved September 20, 2026, from https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ManageYourProject/Inspections.aspx
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1`,
    },
    {
      slug: "why-the-rough-in-comes-before-the-drywall",
      title: "12 · Why the rough-in comes before the drywall",
      section: "Section 6 · The permit and the inspection sequence",
      body: `Here is a published inspection list from one real jurisdiction, in the order that jurisdiction gives it. Everything below is Santa Cruz County, California's own account of its typical inspections, read on 20 September 2026 (County of Santa Cruz, n.d.-b). It is one county's practice. Read it for the logic, then go and find your own.

1. **Foundation.** After forms, reinforcement steel, hold-down bolts and anchor bolts are in position. The inspector verifies setbacks and excavation depth and size, and reviews applicable soils documentation.
2. **Concrete slab or under floor.** After in-slab plumbing and ducting are installed and inspected, and before concrete is poured.
3. **Under floor insulation.** Before floor sheathing is installed, or access has to be provided so it can be verified later.
4. **Roof shear.** After roof sheathing is fully nailed, including strapping or drag nailing. The inspector confirms roof framing matches the approved plans.
5. **Exterior shear and hold-down.** After exterior plywood and all hold-down devices, shear walls, straps and transfer clips are installed per plan.
6. **Rough frame, rough plumbing, rough electrical, rough mechanical and gas line.** After the building is water-tight, with roof, windows, doors and siding or stucco lath installed.
7. **Wall and ceiling insulation.** After rough frame approval and after the insulation is installed.
8. **Drywall.** After insulation sign-off and after drywall and tile backer are installed.
9. **Exterior lath.** After rough frame sign-off and after wire lath and paper are installed.
10. **Scratch coat.** After the scratch coat is applied and has dried for 48 hours.
11. **Shower pan.** After the pan is installed and water-holding is verified.
12. **Interior lath (shower).** After shower lath and paper are installed.
13. **Final.** After finish grading, with the building ready for occupancy.

**Now read the order as an argument rather than a list.** Every single item is placed at the last moment its subject is still visible. Reinforcing steel is inspected before concrete buries it. In-slab plumbing before the pour. Under floor insulation before sheathing. Shear nailing before cladding. And the big one, item 6, sits after the building is water-tight and before item 7, insulation, which is before item 8, drywall.

That is the answer to the question this lesson is named for. The rough-in comes before the drywall because drywall makes the rough-in unexaminable. There is nothing mystical about it and nothing adversarial about it either. An inspector who arrives after the walls are closed cannot do the job the previous lesson described: comparing the work against the permitted documents and the adopted code.

**The county states the general rule in one sentence, and it is the sentence to remember.** "The basic rule is: do not cover any portion of the work without the approval of your inspector" (County of Santa Cruz, n.d.-b).

Notice how much that covers. It is not a list of inspections you have to memorise. It is a test you can apply to any piece of work in any jurisdiction: *am I about to make this impossible to see?* If the answer is yes and nobody has approved it, that is the moment to stop and ask.

**Why item 6 waits for water-tight.** Notice that the rough-in inspection in this county is not called the moment the wiring is pulled. It is called after the roof, windows, doors and siding or lath are on. There is a practical reason: the assembly being inspected includes work that weather would damage, and an inspection is of the finished rough condition, not of a stage part way through it.

**What the final inspection does.** The same county states that "All agency holds shall be cleared and the final building inspection shall be completed prior to the permit reaching final status and utility releases for gas and electric are issued" (County of Santa Cruz, n.d.-b).

Two things are worth pulling out of that. A permit has a *status*, and the end of the work is not the same as the end of the permit. And other agencies can place *holds* that have to be cleared, which means the building department is not necessarily the only office involved in finishing a project.

**What to do with all of this, given that it is one county.** Three things.

First, expect the logic, not the list. Any jurisdiction's sequence will put concealment last and inspection just before it.

Second, get your own jurisdiction's list. A building department that publishes an inspection list publishes it so people will read it. It is the cheapest single document you can obtain about your own project.

Third, keep the test. Before anything gets covered, ask whether it has been approved. That question is correct everywhere, needs no code knowledge, and is the one habit from this section most likely to save somebody real money.

**And the refusal one last time.** Nothing above says a particular job needs a permit or a particular inspection. It is one county's published description of how it inspects work performed under a permit it issued. Your jurisdiction's answer is your jurisdiction's to give.

:::reveal Why does the rough-in inspection come before the drywall? ||| Because drywall conceals the framing, wiring, plumbing and mechanical work, so after it goes up the inspector cannot compare that work against the permitted documents and the adopted code without undoing something.

:::reveal State the basic rule Santa Cruz County publishes about covering work. ||| Do not cover any portion of the work without the approval of your inspector.

:::reveal Why is the rough-in inspection in that county called only after the building is water-tight? ||| Because the roof, windows, doors and siding or lath protect work that weather would damage, and the inspection is of the finished rough condition rather than of a stage part way through it.

:::reveal What does the county's statement about agency holds tell you about finishing a project? ||| That a permit has a status of its own, that the end of the work is not the end of the permit, and that offices other than the building department can place holds that must be cleared.

## Vocabulary
- **Rough-in**: the stage at which framing, wiring, piping and ducting are installed but not yet covered.
- **Shear inspection**: an inspection of sheathing, nailing, hold-downs, straps and clips before cladding covers them.
- **Sign-off**: an inspector's approval of a stage, which the next stage depends on.
- **Agency hold**: a condition placed on a permit by an office other than the building department, which must be cleared.
- **Final status**: the state a permit reaches once the final inspection is complete and all holds are cleared.

## Sources
County of Santa Cruz. (n.d.-b). *Typical inspections*. Community Development and Infrastructure. Retrieved September 20, 2026, from https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ManageYourProject/Inspections/TypicalInspections.aspx
County of Santa Cruz. (n.d.-a). *Inspections*. Community Development and Infrastructure. Retrieved September 20, 2026, from https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ManageYourProject/Inspections.aspx`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The permit and the inspection sequence",
      section: "Section 6 · The permit and the inspection sequence",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who can tell you whether your job needs a permit?",
            options: [
              "The building department with jurisdiction over your address",
              "The state agency that filed the rule adopting the residential code for the whole state",
              "The publisher of the model code, whose technical staff answer questions from the public",
              "Any licensed contractor in the state, since licensing requires knowledge of permit rules",
            ],
            correctIndex: 0,
            explanation:
              "Any other source, including this course, is guessing about a local decision.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which of these does the course refuse to tell you?",
            options: [
              "What a permit costs in your jurisdiction",
              "What a permit is, structurally, and how it connects an adopted code to a building",
              "What an inspector compares the work against when a jurisdiction publishes that",
              "Why inspections are placed where they are in a construction sequence",
            ],
            correctIndex: 0,
            explanation:
              "Cost, timing, application contents, approval and whether a permit is needed all belong to the local office. The structure of the thing is teachable.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What two things does Santa Cruz County say its inspectors verify a structure against?",
            options: [
              "The permitted set of documents and the adopted codes",
              "The contractor's schedule and the owner's written description of the intended work",
              "The manufacturer's installation instructions and the warranty on each product used",
              "The model code as published and the publisher's own commentary on it",
            ],
            correctIndex: 0,
            explanation:
              "That one sentence connects sections 2 through 5: the documents you learned to read, and the code you learned to find.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which word in that sentence makes the drawings matter at inspection time?",
            options: [
              "Permitted",
              "Adopted, because it is what turns a published model code into an enforceable requirement",
              "Structures, because it limits the inspection to the building rather than to the site",
              "Responsible, because it assigns the duty to the inspector rather than to the builder",
            ],
            correctIndex: 0,
            explanation:
              "It is not any set of documents; it is the set the department reviewed. A change made on site without changing the set is a difference from what the inspector checks against.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What is an inspection, structurally?",
            options: [
              "A comparison against two named documents",
              "A general safety audit of the building and the site on which it stands",
              "An opinion about the quality of the work relative to normal practice in the trade",
              "A review of the contractor's licence and insurance before work may proceed",
            ],
            correctIndex: 0,
            explanation:
              "The permitted set and the adopted code. It is not an opinion about whether the house is nice, and it is not a general audit.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Why did the course use one named county rather than a national summary?",
            options: [
              "One real example teaches better than a vague average",
              "Because that county's rules apply in every state that has adopted the same model code",
              "Because national summaries of inspection practice are copyrighted and could not be used",
              "Because the county is the only jurisdiction that publishes its inspection list at all",
            ],
            correctIndex: 0,
            explanation:
              "It publishes a clear official account of its own process, and nobody actually operates under a vague national average.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does the course say your own jurisdiction may do differently?",
            options: [
              "Sequence, name and require different inspections",
              "Enforce a code that no state agency has ever adopted by reference",
              "Inspect work only after it has been concealed by the following trade",
              "Issue permits without reviewing any drawings or specifications at all",
            ],
            correctIndex: 0,
            explanation:
              "Everything taken from that county's pages is labelled as that county's published practice, not as a rule that holds everywhere.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What structural fact does the course say explains nearly every inspection name?",
            options: [
              "Most construction work becomes invisible",
              "Most construction work is performed by a different trade from the one that follows it",
              "Most construction defects appear in the first year after the building is occupied",
              "Most jurisdictions adopt the same model code, so their inspections converge",
            ],
            correctIndex: 0,
            explanation:
              "Wiring goes inside a wall, pipe inside a floor, reinforcing inside concrete. Once covered, checking it means undoing something.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does an inspection regime therefore have to do?",
            options: [
              "Catch work at the last moment it can still be seen",
              "Require that every trade complete its work before any other trade begins on site",
              "Visit the site at fixed intervals regardless of what stage the work has reached",
              "Rely on the contractor's own records of what was installed behind each surface",
            ],
            correctIndex: 0,
            explanation:
              "That single constraint explains the order of the inspection list in lesson 12.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which question does the course say has a documentary answer?",
            options: [
              "Which edition does this jurisdiction enforce",
              "Whether the wall between the kitchen and the living room is load bearing",
              "How long the department will take to review an application of this kind",
              "Whether the work as planned will pass its first inspection",
            ],
            correctIndex: 0,
            explanation:
              "Along with where the amendments can be read. Indiana's adoption rule even names a room where the adopted code may be reviewed.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which is the first of the four habits for asking a building department a question?",
            options: [
              "Say your address",
              "Cite the section of the adopted code you believe governs the work you are planning",
              "State the outcome you want, so the office knows what you are trying to achieve",
              "Ask for the name of the inspector who will be assigned to your project",
            ],
            correctIndex: 0,
            explanation:
              "Because the answer depends on it. Then describe the work plainly, ask what the department needs, and write down what you are told.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "How does the course say to describe the work when you ask?",
            options: [
              "In plain words",
              "In the trade terms the department uses, so the question is understood precisely",
              "By citing the specification division and part that governs the work",
              "By attaching the drawings, so no verbal description is needed at all",
            ],
            correctIndex: 0,
            explanation:
              "Saying you want to take out a wall between the kitchen and the living room beats guessing whether the wall is load bearing.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does the course say to ask the department for, rather than tell it?",
            options: [
              "What the department needs from you",
              "Whether the rule you have read applies to the work you are planning",
              "Which inspector is most likely to approve the work as designed",
              "How other projects in the area handled the same question",
            ],
            correctIndex: 0,
            explanation:
              "Asking what the office needs beats telling the office what you think the rule is.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What should you record after a conversation with a building department?",
            options: [
              "What you were told, the date, and who told you",
              "The section of the adopted code the official referred to, and nothing more",
              "The time the call took and the number of transfers before you reached the right desk",
              "Nothing, since only a written application creates any record that matters",
            ],
            correctIndex: 0,
            explanation:
              "And ask whether a published page or handout says the same thing. A written source you can re-read beats a remembered phone call.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does the course say when the answer is \"ask the building department\"?",
            options: [
              "That is the course telling you where the answer lives",
              "That is a gap the course intends to close in a later revision of the material",
              "That is a sign the question was badly formed and should be narrowed first",
              "That is a legal disclaimer rather than a statement about where authority sits",
            ],
            correctIndex: 0,
            explanation:
              "It is not a failure of the course. Some answers belong to one office and to nobody else.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What is a permitted set?",
            options: [
              "The documents the department reviewed and approved",
              "The set of drawings the contractor keeps on site for reference during the work",
              "The drawings as revised to record what was actually built",
              "The sheets that the code requires to be prepared for any permit application",
            ],
            correctIndex: 0,
            explanation:
              "That is what the work is compared against, which is why a field change without a document change matters.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What is concealed work?",
            options: [
              "Work a later stage covers",
              "Work performed without a permit, which the department has no record of",
              "Work inside a wall cavity that the drawings do not show in any view",
              "Work an inspector has already approved and signed off",
            ],
            correctIndex: 0,
            explanation:
              "It can only be inspected before the stage that covers it, which is the whole logic of the inspection sequence.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which inspection comes first in Santa Cruz County's published list?",
            options: [
              "Foundation",
              "Rough frame, rough plumbing, rough electrical, rough mechanical and gas line together",
              "Under floor insulation, before the floor sheathing is installed over it",
              "Concrete slab or under floor, before the concrete is poured",
            ],
            correctIndex: 0,
            explanation:
              "After forms, reinforcement steel, hold-down bolts and anchor bolts are in position, with setbacks, excavation and soils documentation checked.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the county's foundation inspection verify, besides the reinforcement being in place?",
            options: [
              "Setbacks and excavation depth and size",
              "The species and grade of the lumber delivered for the framing that will follow",
              "The nailing of the roof sheathing including strapping and drag nailing",
              "The water-holding of the shower pan before the lath is installed",
            ],
            correctIndex: 0,
            explanation:
              "The inspector also reviews applicable soils documentation at that visit.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "When is the concrete slab or under floor inspection made in that county?",
            options: [
              "Before the concrete is poured",
              "After the pour has cured and the forms have been stripped from the edges",
              "After the under floor insulation has been installed and signed off",
              "At the same visit as the roof shear inspection, to save a trip",
            ],
            correctIndex: 0,
            explanation:
              "After in-slab plumbing and ducting are installed and inspected, and before the pour buries them.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "When is the under floor insulation inspection made?",
            options: [
              "Before the floor sheathing is installed",
              "After the floor sheathing is installed, so the inspector can walk on the finished deck",
              "At the same time as the wall and ceiling insulation inspection",
              "After the drywall has been hung but before it is taped and finished",
            ],
            correctIndex: 0,
            explanation:
              "Or access has to be provided so it can be verified later, which is the same principle expressed as an exception.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the roof shear inspection confirm?",
            options: [
              "That roof framing matches the approved plans",
              "That the roofing material has been installed to the manufacturer's instructions",
              "That the attic insulation has been installed to the depth shown on the plans",
              "That the rafters have been cut to the rise per foot stated in the elevations",
            ],
            correctIndex: 0,
            explanation:
              "It is made after roof sheathing is fully nailed, including any strapping or drag nailing.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "When is the exterior shear and hold-down inspection made?",
            options: [
              "After plywood, hold-downs, shear walls, straps and clips are installed",
              "After the siding or stucco lath has gone on and the building is water-tight",
              "Before the foundation is poured, while the anchor bolts are still exposed",
              "After the rough frame inspection has been signed off by the inspector",
            ],
            correctIndex: 0,
            explanation:
              "All installed per plan. Like the roof shear inspection, it catches connections before cladding hides them.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What condition does the county require before the combined rough inspection?",
            options: [
              "The building is water-tight",
              "The insulation is installed in the walls and ceilings throughout the building",
              "The drywall and tile backer are installed but not yet taped",
              "The scratch coat has been applied and allowed to dry for 48 hours",
            ],
            correctIndex: 0,
            explanation:
              "Roof, windows, doors and siding or stucco lath installed, because the inspection is of the finished rough condition rather than a stage part way through it.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "Which trades are covered by the combined rough inspection in that county's list?",
            options: [
              "Frame, plumbing, electrical, mechanical and gas line",
              "Frame and plumbing only, with electrical and mechanical inspected separately later",
              "Plumbing and electrical only, since framing is covered by the shear inspections",
              "Mechanical and gas line only, since the other trades are inspected before sheathing",
            ],
            correctIndex: 0,
            explanation:
              "Rough frame, rough plumbing, rough electrical, rough mechanical and gas line are listed together as one item.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What comes between the rough inspection and the drywall inspection in that list?",
            options: [
              "Wall and ceiling insulation",
              "Exterior lath, applied after the rough frame has been signed off",
              "Shower pan, installed and tested for water holding",
              "Scratch coat, applied and allowed to dry for 48 hours",
            ],
            correctIndex: 0,
            explanation:
              "Insulation is inspected after rough frame approval, and drywall after insulation sign-off.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "Why does the rough-in come before the drywall?",
            options: [
              "Drywall makes the rough-in unexaminable",
              "Because the drywall trade requires a signed inspection record before it may be scheduled",
              "Because the rough trades are contracted separately and are paid at that inspection",
              "Because insulation cannot be installed until the rough work has been approved",
            ],
            correctIndex: 0,
            explanation:
              "An inspector who arrives after the walls are closed cannot compare the work against the permitted documents and the adopted code.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What basic rule does Santa Cruz County publish about covering work?",
            options: [
              "Do not cover any portion of the work without the approval of your inspector",
              "Schedule each inspection at least 48 hours before the following trade is due on site",
              "Photograph any work that must be covered before it can be inspected",
              "Obtain written permission from the department before beginning any concealed work",
            ],
            correctIndex: 0,
            explanation:
              "It is a test rather than a list: am I about to make this impossible to see, and has anyone approved it.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "Why does the course call that rule a test rather than a list?",
            options: [
              "It applies to any work in any jurisdiction",
              "Because it replaces the need to schedule inspections in the order the county publishes",
              "Because a test can be applied by an inspector where a list must be applied by the builder",
              "Because it is the only rule the county publishes that is not specific to California",
            ],
            correctIndex: 0,
            explanation:
              "You do not have to memorise an inspection list to ask whether you are about to make something impossible to see.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the county say must happen before a permit reaches final status?",
            options: [
              "All agency holds cleared and the final inspection completed",
              "The owner must take occupancy of the building and confirm the work is satisfactory",
              "The contractor must submit a record set showing the work as actually built",
              "The drywall and lath inspections must both be signed off by the same inspector",
            ],
            correctIndex: 0,
            explanation:
              "And utility releases for gas and electric are issued at that point.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the existence of agency holds tell you?",
            options: [
              "The building department may not be the only office involved",
              "The permit cannot be issued until every other agency has approved the drawings",
              "The inspector may place a hold on work that fails an inspection",
              "The permit expires automatically if a hold is not cleared within a fixed period",
            ],
            correctIndex: 0,
            explanation:
              "The county says all agency holds shall be cleared before the permit reaches final status, which means other offices can be involved in finishing a project.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say the end of the work is not the same as?",
            options: [
              "The end of the permit",
              "The end of the inspection sequence, which continues after occupancy",
              "The end of the warranty period on the products installed",
              "The end of the contractor's responsibility for the work performed",
            ],
            correctIndex: 0,
            explanation:
              "A permit has a status of its own, and it reaches final status only when the final inspection is complete and holds are cleared.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "When is the final inspection made in that county's list?",
            options: [
              "After finish grading, with the building ready for occupancy",
              "After the drywall has been signed off and the interior finishes have begun",
              "After the shower pan has been installed and its water holding verified",
              "Before the scratch coat is applied, since the exterior is then complete",
            ],
            correctIndex: 0,
            explanation:
              "It is item 13, the last on the published list, and it precedes the permit reaching final status.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is the first of the three things the course says to do with a one-county list?",
            options: [
              "Expect the logic, not the list",
              "Assume the same order applies wherever the same model code has been adopted",
              "Treat the list as a minimum, adding any inspection your contractor recommends",
              "Compare the list against the adopted code to see which items it omits",
            ],
            correctIndex: 0,
            explanation:
              "Then get your own jurisdiction's list, and keep the test about covering work.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course call the cheapest single document you can obtain about your own project?",
            options: [
              "Your jurisdiction's published inspection list",
              "The adoption rule that names the edition of the code your state enforces",
              "The permitted set of drawings and specifications the department reviewed",
              "The model code edition your state adopted, bought in its cheapest format",
            ],
            correctIndex: 0,
            explanation:
              "A department that publishes an inspection list publishes it so people will read it.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "Which habit does the course say is most likely to save somebody real money?",
            options: [
              "Asking whether work has been approved before it is covered",
              "Comparing the contractor's estimate against published cost data for similar work",
              "Reading the model code edition the state adopted before the work begins",
              "Scheduling every inspection on the earliest day the department offers",
            ],
            correctIndex: 0,
            explanation:
              "The question is correct everywhere and needs no code knowledge at all.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is a rough-in?",
            options: [
              "The stage at which services are installed but not covered",
              "The first visit an inspector makes to a site after the permit has been issued",
              "The condition of a building before the roof, windows and doors are installed",
              "The preliminary drawing set prepared before the final documents are permitted",
            ],
            correctIndex: 0,
            explanation:
              "Framing, wiring, piping and ducting installed but not yet concealed, which is the last moment they can be inspected.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is a sign-off?",
            options: [
              "An inspector's approval of a stage",
              "The owner's written acceptance of the completed work from the contractor",
              "The department's approval of the drawings when the permit is issued",
              "The final release of utilities for gas and electric service",
            ],
            correctIndex: 0,
            explanation:
              "The next stage depends on it, which is why insulation follows rough frame approval and drywall follows insulation sign-off.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is a shear inspection?",
            options: [
              "An inspection of sheathing, nailing, hold-downs, straps and clips",
              "An inspection of the reinforcement steel and anchor bolts before concrete is poured",
              "An inspection of the insulation before the drywall and tile backer go on",
              "An inspection of the shower pan's ability to hold water before it is lathed",
            ],
            correctIndex: 0,
            explanation:
              "The county lists both a roof shear and an exterior shear and hold-down inspection, each before cladding covers the connections.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say is neither mystical nor adversarial?",
            options: [
              "The placement of the rough-in inspection before the drywall",
              "The requirement that a permit be obtained before any work begins on a site",
              "The department's authority to place holds on a permit at the end of a project",
              "The inspector's discretion to require a change to the permitted documents",
            ],
            correctIndex: 0,
            explanation:
              "It follows from a single physical fact: drywall makes the rough-in unexaminable.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say the inspection list should be read for?",
            options: [
              "The logic",
              "The exact sequence, which will be the same in any jurisdiction of comparable size",
              "The names of the inspections, which are standardised nationally by the model codes",
              "The intervals between inspections, which set the pace of a project",
            ],
            correctIndex: 0,
            explanation:
              "Any jurisdiction's sequence will put concealment last and inspection just before it. The names and the order are local.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the shower pan inspection in that county follow?",
            options: [
              "Installation and verification that it holds water",
              "Installation of the shower lath and paper over the pan and surrounding wall",
              "Completion of the rough plumbing inspection for the whole building",
              "Application of the scratch coat and the 48 hour drying period",
            ],
            correctIndex: 0,
            explanation:
              "Interior lath for the shower is a separate, later item on the same published list.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the scratch coat inspection wait for?",
            options: [
              "A 48 hour drying period after application",
              "The exterior lath inspection to be scheduled at the same visit",
              "The final grading around the building to be completed",
              "The interior drywall to be signed off by the inspector",
            ],
            correctIndex: 0,
            explanation:
              "It is made after the scratch coat is applied and has dried for 48 hours, which is one of the few time-based items on the list.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is an agency hold?",
            options: [
              "A condition placed on a permit by an office other than the building department",
              "A stop-work order issued by an inspector after work fails an inspection",
              "A delay in issuing a permit while the drawings are under review",
              "A requirement that utilities be withheld until the owner takes occupancy",
            ],
            correctIndex: 0,
            explanation:
              "All agency holds must be cleared before the permit reaches final status, which is why more than one office can be involved.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say about a change made on site without changing the permitted set?",
            options: [
              "It is a difference from what the inspector checks against",
              "It is acceptable provided the change meets the adopted code independently",
              "It is recorded by the inspector in the revision block of the affected sheet",
              "It voids the permit immediately and requires a new application",
            ],
            correctIndex: 0,
            explanation:
              "The inspector compares the work against the permitted set, so a document that no longer describes the work creates a gap.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which source did the course use for its inspection list?",
            options: [
              "A California county's published typical inspections page",
              "The residential code edition the state of Indiana adopted by reference",
              "The federal manufactured home construction and safety standards",
              "A Navy nonresident training course on construction administration",
            ],
            correctIndex: 0,
            explanation:
              "Santa Cruz County, California, read on 20 September 2026, used because it publishes a clear official account of its own process.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the final refusal in lesson 12 say the list is NOT?",
            options: [
              "A statement that any particular job needs a permit",
              "A description of how one county inspects work performed under a permit it issued",
              "An account read on a named date from that county's own published pages",
              "An example chosen to show the logic of an inspection sequence",
            ],
            correctIndex: 0,
            explanation:
              "It is one county's published description of its own practice. Your jurisdiction's answer is your jurisdiction's to give.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say the word \"final\" applies to that is not the work?",
            options: [
              "The permit's status",
              "The inspection record, which is closed once the last visit is complete",
              "The drawing set, which is reissued as a final version at completion",
              "The adopted code, which is superseded when the next edition is adopted",
            ],
            correctIndex: 0,
            explanation:
              "A permit reaches final status when the final inspection is complete and all agency holds are cleared.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What comes after the drywall inspection in the county's published order?",
            options: [
              "Exterior lath",
              "Wall and ceiling insulation, which is inspected once the drywall is in place",
              "Rough frame, which is repeated after the drywall is hung",
              "Foundation, which is re-inspected before finish grading",
            ],
            correctIndex: 0,
            explanation:
              "Exterior lath is item 9, made after rough frame sign-off and after wire lath and paper are installed, followed by scratch coat.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What does the course say the inspection is of, at the rough stage?",
            options: [
              "The finished rough condition",
              "The first stage of the rough work, checked before the remaining trades arrive",
              "The framing alone, with the services inspected at separate later visits",
              "The work as described in the contractor's own progress report",
            ],
            correctIndex: 0,
            explanation:
              "Which is why that county calls it only after the roof, windows, doors and siding or lath are on and the building is water-tight.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What is an authority having jurisdiction?",
            options: [
              "The office whose decision governs at a given address",
              "The state agency that adopted the model code the jurisdiction enforces",
              "The designer who prepared and sealed the permitted set of documents",
              "The publisher whose model code the jurisdiction has incorporated by reference",
            ],
            correctIndex: 0,
            explanation:
              "It is the office that issues the permit and performs the inspections, and it is the only source for a local answer.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does the course say an inspection is NOT?",
            options: [
              "An opinion about whether the house is nice",
              "A comparison of the work against the permitted set of building documents",
              "A comparison of the work against the codes the jurisdiction has adopted",
              "A visit made at a point where the work can still be seen",
            ],
            correctIndex: 0,
            explanation:
              "It is a check against two named things, not a general safety audit and not a judgment of taste.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Why does the course write this section narrowly?",
            options: [
              "A wrong sentence here costs somebody money",
              "Because the sources for permit practice are all privately published and cannot be quoted",
              "Because permits are governed federally and a state course has no standing to describe them",
              "Because inspection practice changes too often for any written account to remain accurate",
            ],
            correctIndex: 0,
            explanation:
              "It refuses more than it asserts, and it names the office that holds each answer it will not give.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What makes a question to a building department answerable, according to lesson 11?",
            options: [
              "Naming the document",
              "Naming the contractor who will be performing the work under the permit",
              "Naming the section of the model code you believe governs the work",
              "Naming the date on which you intend to begin the work",
            ],
            correctIndex: 0,
            explanation:
              "Which edition does this jurisdiction enforce, and where can I read the amendments, is a question with a documentary answer.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What did the course say about asking for a published page or handout?",
            options: [
              "It is normal, and a written source beats a remembered call",
              "It is unnecessary, because a verbal answer from an official is binding on the department",
              "It should be avoided, because it slows the office down for no practical gain",
              "It is only appropriate once an application has actually been submitted",
            ],
            correctIndex: 0,
            explanation:
              "Write down what you were told with the date and the name, and ask whether something published says the same thing.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "How does a permit and an inspection connect an adopted code to an actual building?",
            options: [
              "Someone applies, the department reviews, and work is looked at before it is covered",
              "The state agency inspects each structure against the edition it adopted when it filed the rule",
              "The model code publisher certifies that the finished work matches the edition sold",
              "The designer certifies compliance and the department records the certificate",
            ],
            correctIndex: 0,
            explanation:
              "Section 4 established that a jurisdiction adopts a code. Permits and inspections are how that adoption reaches a building.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Which of these becomes invisible once the next trade works, in the course's examples?",
            options: [
              "Reinforcing inside concrete",
              "Finish grading around the outside of the completed building",
              "The scratch coat applied over the exterior lath and paper",
              "The composition shingles laid over the roof sheathing",
            ],
            correctIndex: 0,
            explanation:
              "Wiring inside a wall, pipe inside a floor, reinforcing inside concrete and framing connections behind drywall are the four the lesson names.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What did the course say one real example teaches better than?",
            options: [
              "A vague national average nobody operates under",
              "A model code section read directly in the edition a state adopted",
              "A state adoption rule read on the agency's own register",
              "A published inspection list obtained from the learner's own jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "The county was used because it publishes a clear, dated, official account of its own process.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 — Your own address
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "find-your-own-adoption-rule",
      title: "13 · Finding the rule that governs your own address",
      section: "Section 7 · Your own address",
      body: `Everything so far has been somebody else's example. This is the part where you do it for the place you actually live.

**What you are looking for, in one sentence.** A public document, made by a government, that names a model code by title, edition and printing, says what the government calls the result, and carries the government's changes to it.

**A warning about the claim you are allowed to make at the end.** This course checked exactly one state's adoption rule and read it on a publisher's mirror. It does not know that every state publishes its adoption rule free, it did not check yours, and it will not pretend otherwise. The exercise is "find yours", not "all fifty are the same". If yours turns out to be hard to find, that is a finding about your state and worth writing down as one.

**Where to look, in order of how likely each is to work.**

1. **Your state's administrative code or register.** Search for the name of your state plus "administrative code" plus "residential code adopted". You are looking for a rule, not an article about a rule. A result on a state domain, or on a law-school or legal-publisher mirror of the state's rules, is the kind of result you want.
2. **Your state's building or fire safety agency.** The agency that makes the rule usually also publishes a page saying which codes are in effect. Treat that page as a pointer to the rule, not as a substitute for it, because a web page can be out of date in a way a filed rule cannot.
3. **Your city or county building department.** Many jurisdictions adopt a state code and then amend it locally. If your state has an adoption and your city has an ordinance, you need both.
4. **The reference-copy sentence.** Once you find the rule, look for the sentence naming where the incorporated code may be reviewed. That sentence is how you read a book you do not own.

**What to write down.** Six items, and they fit on one index card.

- The **citation** of the rule, in full, the way section 4 taught you to read one.
- The **model code** it adopts, by full title.
- The **edition and printing**.
- The **name** the government gives the result.
- **Where the amendments are**, by section range if the rule states one.
- The **date you checked**, and **which source you read it on**, in those words: the state's own register, or a mirror.

That last item is not bureaucratic fussiness. It is the difference between a fact you can defend and a thing you half remember. This course carries the same line on its own claims, and lesson 9 spells out exactly where its checking stopped.

**Two traps, both of which this course walked into.**

**Trap one: the mirror that looks official.** A legal publisher's copy of a state code looks like the state's code. It usually is, and it is often more readable than the state's own site. But it is a copy, processed at some point in the past, and the state's register is what actually governs. Use the mirror, and name it as a mirror.

**Trap two: the portal that shows you nothing.** Several state rule portals are modern web applications that render everything in the browser. They look fine to a person and return an empty page to anything automated, which is why this course could quote a 1993 Navy manual and could not read Indiana's own register. If a state site gives you a blank page, try a different browser, try the state's printed-rule or PDF version, and try a mirror, and record which one you ended up reading.

**One question for your building department, and how to end the exercise.** When you have your six items, write one question you cannot answer from the rule and that the department can. Good shapes: "Which code editions is this jurisdiction currently enforcing for one and two family dwellings?" "Has this city adopted amendments of its own on top of the state code, and where are they published?" "Where can I read the adopted code without buying it?" Each of those has a documentary answer, and none of them asks anyone to guess about your project.

Do not end the exercise with "do I need a permit for X". You may certainly ask that, and you should if it applies to you, but it is a different question, it is about your specific job, and it deserves its own conversation rather than being tacked onto a research task.

**Why this is the last lesson.** Because everything before it was a method and this is the part that survives. Editions change, states readopt, and the answer you write down today will be wrong eventually. The habit of finding it will not be.

:::reveal What are you looking for when you go hunting for your own state's adoption rule? ||| A public document, made by a government, that names a model code by title, edition and printing, says what the government calls the result, and carries the government's changes to it.

:::reveal Why must you record which source you read the rule on? ||| Because a legal publisher's mirror and the state's own register are two different claims, and a mirror can lag the register that actually governs.

:::reveal Give one good question to end the exercise with, and one to avoid. ||| Good: which code editions the jurisdiction is currently enforcing, or where the adopted code can be read without buying it. Avoid ending on whether a specific job needs a permit, because that is a different question about your own project.

:::reveal Why is the exercise "find yours" rather than "all fifty states publish theirs free"? ||| Because this course checked exactly one state's rule, on a mirror, and does not know what every state publishes, so it will not claim it.

## Vocabulary
- **Local amendment**: a change a city or county writes on top of a state-adopted code.
- **Reference-copy sentence**: the line in an adoption rule naming where the incorporated code may be reviewed by the public.
- **Index card test**: the practice of recording an adoption in six items you can carry and re-check.
- **Documentary answer**: an answer a question has because a document states it, rather than because someone recalls it.

## Sources
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1
County of Santa Cruz. (n.d.-a). *Inspections*. Community Development and Infrastructure. Retrieved September 20, 2026, from https://cdi.santacruzcountyca.gov/UPC/BuildingPermitsSafety/ManageYourProject/Inspections.aspx`,
    },
    {
      slug: "your-own-address-exercise",
      title: "14 · Exercise · Your own address",
      section: "Section 7 · Your own address",
      body: `This is the exercise the whole course was built toward. It takes a browser, about half an hour, and no money.

**The task.** Find the public rule that adopts a residential building code for the place you live, and record the six items from lesson 13. Then write one question for your building department.

**Before you start, a model of what a finished answer looks like.** Here is the Indiana one, filled in as this course filled it in on 20 September 2026:

- Citation: 675 IAC 14-4.4-1, "Adoption by reference; title; purpose".
- Model code adopted: the International Residential Code for One and Two Family Dwellings.
- Edition and printing: 2018 edition, first printing August 2017, published by the International Code Council.
- Name given to the result: the 2020 Indiana Residential Code.
- Amendments: the rest of rule 675 IAC 14-4.4, which the listing shows running through section 245.
- Checked: 20 September 2026, read on the Legal Information Institute's mirror of the Indiana Administrative Code, not on the state's own register, which returned an empty page.

Notice that the last item records a limitation rather than hiding it. Yours may too, and that is a complete answer, not a failed one.

**If you get stuck.** Three things usually unstick it. Search for your state's name with "administrative code" and "residential code" rather than with "building code", because the word residential is what separates houses from everything else. Look for the agency rather than the rule: a state fire prevention, building safety or community affairs agency will usually have a codes page. And if a state site renders nothing, look for a printed-rule or PDF version, or use a legal publisher's copy and label it as one.

**What counts as done.** Six items written down, each of them traceable to a document you actually opened, and one question you could ask a real office tomorrow. If any item is genuinely unavailable, write "not found on <date>, searched <where>" rather than leaving it blank. A recorded gap is usable. A blank is not.

**The fill-in below** checks the vocabulary of the method rather than your state's answer, because this course does not know your state's answer and will not pretend to grade it. Type the term the description points at.

## Vocabulary
- **Adoption rule**: the public document that makes a named edition of a model code enforceable in a jurisdiction.
- **Recorded gap**: a written note of what could not be found, where the search went, and when, kept in place of a blank.
- **Codes page**: a state or local agency page listing the codes in effect, useful as a pointer to the rule itself.

## Sources
Legal Information Institute. (n.d.-a). *Title 675, Article 14: One and two family dwelling code*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/title-675/article-14
Legal Information Institute. (n.d.-b). *675 IAC 14-4.4-1: Adoption by reference; title; purpose*. Indiana Administrative Code. Retrieved September 20, 2026, from https://www.law.cornell.edu/regulations/indiana/675-IAC-14-4.4-1`,
      exercise: {
        instructions:
          "Type the term each description points at. These check the method taught in sections 4 through 7, not your own state's answer.",
        items: [
          {
            prompt: "The public act by which a government makes a named edition of a model code enforceable in its territory.",
            answer: "adoption",
            accept: ["adoption by reference", "an adoption"],
            explanation:
              "A model code has no legal force by itself. The adoption is the document that gives it force, and it is free to read.",
          },
          {
            prompt: "A code written and published by a private organisation and sold, which is not law anywhere until a government adopts it.",
            answer: "model code",
            accept: ["a model code", "model building code"],
            explanation:
              "The International Residential Code and the National Electrical Code are both model codes. Their publishers are not governments.",
          },
          {
            prompt: "A change an adopting government writes into the model text, which governs over it in that jurisdiction.",
            answer: "amendment",
            accept: ["an amendment", "state amendment", "revision"],
            explanation:
              "Indiana's rule adopts the model code save and except the revisions it makes, and those revisions run for hundreds of sections.",
          },
          {
            prompt: "A publisher's copy of an official document, which may lag the source it copies.",
            answer: "mirror",
            accept: ["a mirror", "publisher's mirror"],
            explanation:
              "Useful and often more readable than the state's own site, but it is a copy, so name it as one when you record what you read.",
          },
          {
            prompt: "The official record a state agency files its rules into, and the authoritative source for their text.",
            answer: "register",
            accept: ["the register", "state register"],
            explanation:
              "This course could not read Indiana's, and says so in lesson 9 rather than letting the mirror stand in for it.",
          },
          {
            prompt: "The written document that accompanies the drawings, defines materials and workmanship, and outranks the drawings when the two conflict under the Navy's rule.",
            answer: "specification",
            accept: ["the specification", "specifications", "spec", "specs"],
            explanation:
              "Its sixteen divisions and its three-part General, Products, Execution format are how you find something in one you have never seen.",
          },
          {
            prompt: "The block in the lower-right corner of a drawing carrying the drawing number, the scale, the date and the preparing organisation.",
            answer: "title block",
            accept: ["the title block"],
            explanation:
              "The revision block, which tells you whether the sheet is current, is in the upper right corner instead.",
          },
          {
            prompt: "The stage at which framing, wiring, piping and ducting are installed but not yet covered.",
            answer: "rough-in",
            accept: ["rough in", "the rough-in", "roughin"],
            explanation:
              "It is inspected before insulation and drywall because those make it unexaminable.",
          },
          {
            prompt: "The specific drawings and documents a building department reviewed, which the work is compared against at inspection.",
            answer: "permitted set",
            accept: ["the permitted set", "permitted set of building documents"],
            explanation:
              "Santa Cruz County's phrasing. A field change without a document change creates a difference from what the inspector checks against.",
          },
          {
            prompt: "The line in an adoption rule naming where the public may go and read the incorporated code.",
            answer: "reference-copy sentence",
            accept: ["reference copy sentence", "the reference-copy sentence", "reference copy"],
            explanation:
              "Indiana's names a room in a state government building and the commission's webpage. It is the answer to how you read a code you cannot buy.",
          },
        ],
      },
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Your own address",
      section: "Section 7 · Your own address",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are you looking for when you hunt for your own state's adoption rule?",
            options: [
              "A public document naming a model code by title, edition and printing",
              "A privately published commentary explaining which provisions your state enforces",
              "A building department page listing the inspections required for residential work",
              "A copy of the model code itself, in the edition your jurisdiction enforces",
            ],
            correctIndex: 0,
            explanation:
              "It also says what the government calls the result and carries the government's changes to it.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does this course refuse to claim about all fifty states?",
            options: [
              "That every state publishes its adoption rule free",
              "That state adoption rules name an edition and a printing of the model code",
              "That a state may write amendments into a model code when it adopts it",
              "That an adoption rule is a public document rather than a private one",
            ],
            correctIndex: 0,
            explanation:
              "It checked exactly one state's rule, on a publisher's mirror, and did not check yours. The exercise is find yours.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "If your state's rule turns out to be hard to find, what does the course say to do?",
            options: [
              "Write that down as a finding about your state",
              "Use Indiana's rule instead, since most states adopt the same editions in the same years",
              "Assume no adoption exists and that the model code applies directly",
              "Ask a contractor to state the requirement from memory and record that instead",
            ],
            correctIndex: 0,
            explanation:
              "A recorded gap is usable. The course holds itself to the same standard in lesson 9.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Which search terms does the course suggest for finding a state adoption rule?",
            options: [
              "Your state's name, administrative code, residential code adopted",
              "Your city's name, building permit, cost, and the current calendar year",
              "The model code publisher's name, free access, and the newest edition year",
              "Your county's name, inspection sequence, and rough-in requirements",
            ],
            correctIndex: 0,
            explanation:
              "You are looking for a rule, not an article about a rule. The word residential is what separates houses from everything else.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "How should you treat a state agency's codes page?",
            options: [
              "As a pointer to the rule, not a substitute for it",
              "As the authoritative statement of what the jurisdiction enforces, since the agency made the rule",
              "As equivalent to the register, because both are published by the state",
              "As unusable, because an agency page is not part of the administrative code",
            ],
            correctIndex: 0,
            explanation:
              "A web page can be out of date in a way a filed rule cannot.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What do you need if your state has an adoption and your city has an ordinance?",
            options: [
              "Both",
              "Only the city ordinance, because the more local document always governs entirely",
              "Only the state adoption, because a city may not amend a state-adopted code",
              "Neither, because a conflict between them voids both until it is resolved",
            ],
            correctIndex: 0,
            explanation:
              "Many jurisdictions adopt a state code and then amend it locally, so the local amendment sits on top of the state adoption.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What is a local amendment?",
            options: [
              "A change a city or county writes on top of a state-adopted code",
              "A change the model code publisher makes between printings of one edition",
              "A variance an inspector grants for a single building on a single site",
              "A change a state makes when it readopts a rule at the next decimal",
            ],
            correctIndex: 0,
            explanation:
              "It is why the course says you may need both the state adoption and the local ordinance.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What sentence should you look for once you have found the rule?",
            options: [
              "The one naming where the incorporated code may be reviewed",
              "The one stating the penalty for performing work that does not comply",
              "The one listing which trades the rule applies to within the jurisdiction",
              "The one giving the price at which the adopted edition may be purchased",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is how you read a book you do not own. Indiana's names a room in a state government building.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "How many items does the course say to write down, and where do they fit?",
            options: [
              "Six, on one index card",
              "Four, matching the four questions to ask of any adoption rule in lesson 8",
              "Three, matching the three questions to ask of a claim about the code",
              "Sixteen, matching the divisions of a specification",
            ],
            correctIndex: 0,
            explanation:
              "Citation, model code, edition and printing, the name given to the result, where the amendments are, and the date and source.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Which item on the index card does the course say is not bureaucratic fussiness?",
            options: [
              "The date checked and the source read",
              "The full citation of the rule, read the way section 4 taught",
              "The section range in which the amendments are found",
              "The name the government gives to the result of the adoption",
            ],
            correctIndex: 0,
            explanation:
              "It is the difference between a fact you can defend and a thing you half remember.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What is trap one, in lesson 13?",
            options: [
              "The mirror that looks official",
              "The building department that answers a code question by memory rather than by document",
              "The model code edition that is newer than the one the state adopted",
              "The local ordinance that conflicts with the state adoption on the same point",
            ],
            correctIndex: 0,
            explanation:
              "A legal publisher's copy looks like the state's code and usually is, but it is a copy processed at some point in the past.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What is trap two, in lesson 13?",
            options: [
              "The portal that shows you nothing",
              "The agency page that lists an edition the state has since stopped enforcing",
              "The search result that leads to an article about a rule rather than the rule",
              "The adoption rule that names no printing for the edition it adopts",
            ],
            correctIndex: 0,
            explanation:
              "Several state rule portals render everything in the browser, look fine to a person and return an empty page to anything automated.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course suggest if a state site gives you a blank page?",
            options: [
              "Try another browser, a PDF version, or a mirror, and record which you read",
              "Report the failure to the agency and wait for the site to be repaired",
              "Rely on the search summaries, which describe the rule's contents accurately",
              "Assume the rule has been repealed and look for a newer one at the next decimal",
            ],
            correctIndex: 0,
            explanation:
              "This is exactly the problem that stopped this course from reading Indiana's own register on 20 September 2026.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Which of these is a good question to end the exercise with?",
            options: [
              "Which code editions is this jurisdiction currently enforcing",
              "Whether the wall you want to remove is carrying any load from the floor above",
              "How long the department usually takes to approve a residential application",
              "Whether the contractor you have chosen is licensed for the work",
            ],
            correctIndex: 0,
            explanation:
              "Each of the lesson's suggested questions has a documentary answer, and none asks anyone to guess about your project.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Which question does the course say NOT to end the exercise with?",
            options: [
              "Whether a specific job needs a permit",
              "Whether the city has adopted amendments on top of the state code",
              "Where the adopted code can be read without buying it",
              "Which editions the jurisdiction currently enforces for dwellings",
            ],
            correctIndex: 0,
            explanation:
              "You may certainly ask it, and should if it applies, but it is about your specific job and deserves its own conversation.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Why is finding the rule the last lesson?",
            options: [
              "Because the method survives after the answer is wrong",
              "Because the earlier sections cannot be understood until a learner has found a real rule",
              "Because a building department will not answer questions from anyone who has not read one",
              "Because the exercise takes longer than the rest of the course combined",
            ],
            correctIndex: 0,
            explanation:
              "Editions change and states readopt, so the answer you write down today will be wrong eventually. The habit of finding it will not be.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What is a documentary answer?",
            options: [
              "An answer a question has because a document states it",
              "An answer an official gives in writing rather than over the telephone",
              "An answer recorded in a permit file after an inspection has been completed",
              "An answer taken from a model code rather than from a state amendment",
            ],
            correctIndex: 0,
            explanation:
              "Rather than because someone recalls it. That is what makes a question worth asking an office.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Roughly how long does the course say the exercise takes, and what does it cost?",
            options: [
              "About half an hour, and no money",
              "About two days, because most state registers take that long to respond to a request",
              "About an hour, plus the price of a single-section download from the publisher",
              "About a week, because the building department must reply in writing first",
            ],
            correctIndex: 0,
            explanation:
              "It takes a browser. Everything it relies on is free and public.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the worked Indiana answer record in its last item?",
            options: [
              "A limitation",
              "The price the state paid to license the edition it adopted for public review",
              "The name of the official who confirmed the adoption was still current",
              "The number of amendments the state wrote into the model text",
            ],
            correctIndex: 0,
            explanation:
              "It says the rule was read on a publisher's mirror rather than on the state's own register, which returned an empty page.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the course say about an answer that records a limitation?",
            options: [
              "It is a complete answer, not a failed one",
              "It should be discarded and the search repeated until every item is confirmed",
              "It is acceptable only if the limitation concerns the amendments rather than the adoption",
              "It should be reported to the state agency whose site could not be read",
            ],
            correctIndex: 0,
            explanation:
              "Yours may record a limitation too. Writing down where the checking stopped is part of the method.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the course say to write instead of leaving an item blank?",
            options: [
              "Not found on a date, and where you searched",
              "The corresponding item from Indiana's rule, marked as an example",
              "A best estimate, flagged so it can be corrected later",
              "The item from your city's ordinance if the state rule does not carry it",
            ],
            correctIndex: 0,
            explanation:
              "A recorded gap is usable and a blank is not.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the fill-in exercise check?",
            options: [
              "The vocabulary of the method",
              "Your own state's adopted edition, graded against a table of all fifty states",
              "Your arithmetic on the dimensions taken from the Navy manual's worked example",
              "The order of the inspections published by your own building department",
            ],
            correctIndex: 0,
            explanation:
              "The course does not know your state's answer and will not pretend to grade it.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "Which word does the course say separates houses from everything else in a search?",
            options: [
              "Residential",
              "Building, because building codes cover dwellings and other structures together",
              "Adopted, because adoption is what makes a code apply to a structure",
              "Dwelling, because it is the word every state uses in its rule titles",
            ],
            correctIndex: 0,
            explanation:
              "Searching for administrative code plus residential code beats searching for building code, which returns everything.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What kind of agency does the course suggest looking for if the rule itself is elusive?",
            options: [
              "A state fire prevention, building safety or community affairs agency",
              "The office of the attorney general, which publishes opinions on code questions",
              "The state licensing board for contractors and design professionals",
              "The regional office of the model code publisher serving your state",
            ],
            correctIndex: 0,
            explanation:
              "Such an agency will usually have a codes page, which points at the rule.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What counts as done, at the end of the exercise?",
            options: [
              "Six traceable items and one question you could ask tomorrow",
              "A copy of the adopted edition obtained through a publisher's free access offering",
              "A written reply from the building department confirming the edition enforced",
              "An annotated copy of the state's amendments to the model text",
            ],
            correctIndex: 0,
            explanation:
              "Each item traceable to a document you actually opened, with any genuinely unavailable item recorded as a gap.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "In the worked Indiana answer, what is given as the name of the result?",
            options: [
              "The 2020 Indiana Residential Code",
              "The Indiana One and Two Family Dwelling Code, taken from the article heading",
              "The 2018 International Residential Code for One and Two Family Dwellings",
              "675 IAC 14-4.4-1, Adoption by reference; title; purpose",
            ],
            correctIndex: 0,
            explanation:
              "The last of those is the citation, the one before it is the model code adopted, and the article heading is not the name of the result.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "In the worked Indiana answer, where are the amendments said to be?",
            options: [
              "In the rest of rule 675 IAC 14-4.4",
              "In a separate article of title 675 dealing with residential amendments",
              "In the city ordinances of each Indiana jurisdiction that adopted the rule",
              "In the printing of the model code the rule names",
            ],
            correctIndex: 0,
            explanation:
              "The listing shows the rule running through section 245, and section 1 is the adoption itself.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What is an adoption rule, as the exercise's vocabulary defines it?",
            options: [
              "The public document making a named edition enforceable in a jurisdiction",
              "The internal policy a building department follows when reviewing an application",
              "The page a state agency publishes listing the codes currently in effect",
              "The ordinance a city passes to create a building department",
            ],
            correctIndex: 0,
            explanation:
              "It is the thing the whole exercise is hunting for, and it is free.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What is a recorded gap?",
            options: [
              "A written note of what was not found, where you searched, and when",
              "The interval between a code being published and a state adopting it",
              "The difference between the year in a state's rule name and the edition adopted",
              "A section of a model code a state chose not to adopt",
            ],
            correctIndex: 0,
            explanation:
              "It is kept in place of a blank, because a blank tells a later reader nothing about whether anyone looked.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What is a codes page?",
            options: [
              "An agency page listing the codes in effect",
              "The page of a model code listing the sections a jurisdiction has amended",
              "The page of a permit application on which the adopted edition is declared",
              "The index of an administrative code title showing its articles and rules",
            ],
            correctIndex: 0,
            explanation:
              "Useful as a pointer to the rule itself, but not a substitute for it, because a page can go out of date.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "Which is the first place lesson 13 sends you to look?",
            options: [
              "Your state's administrative code or register",
              "Your city or county building department, which enforces the code day to day",
              "Your state's building or fire safety agency, which made the rule",
              "The publisher of the model code, which lists the states that adopted it",
            ],
            correctIndex: 0,
            explanation:
              "The list is ordered by how likely each is to work: state code or register, then the agency, then the local department, then the reference-copy sentence.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What kind of search result does lesson 13 say you want?",
            options: [
              "A result on a state domain or a legal-publisher mirror of the state's rules",
              "A result from a trade publication summarising the state's current code position",
              "A result from the model code publisher's site listing adopting jurisdictions",
              "A result from a contractor's website explaining the local requirements",
            ],
            correctIndex: 0,
            explanation:
              "You are looking for a rule, not an article about a rule.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What is the index card test?",
            options: [
              "Recording an adoption in six items you can carry and re-check",
              "Checking a dimension string against the overall dimension on a floor plan",
              "Asking three questions of any claim about what the code says",
              "Confirming that work has been approved before it is covered",
            ],
            correctIndex: 0,
            explanation:
              "Citation, model code, edition and printing, the name of the result, where the amendments are, and the date and source.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course say about the answer you write down today?",
            options: [
              "It will be wrong eventually",
              "It will remain accurate until the next model code edition is published",
              "It will be confirmed by the building department when you ask your question",
              "It will apply to any address within the same state",
            ],
            correctIndex: 0,
            explanation:
              "Editions change and states readopt. The habit of finding the rule is what survives.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course say a mirror usually is, even though it is a copy?",
            options: [
              "Accurate, and often more readable than the state's own site",
              "Out of date by at least one full readoption cycle in most states",
              "Restricted to subscribers, which is why the state's register is preferred",
              "Unofficial to the point that it should not be cited at all",
            ],
            correctIndex: 0,
            explanation:
              "Use the mirror, and name it as a mirror. That is the whole instruction.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Why could this course quote a 1993 Navy manual but not read Indiana's own register?",
            options: [
              "The manual is a file and the register is a browser application",
              "The manual is public domain and the register is copyrighted by the state",
              "The manual was fetched from a state domain and the register was not",
              "The manual is current and the register had been taken offline",
            ],
            correctIndex: 0,
            explanation:
              "Several state rule portals render everything in the browser, so they look fine to a person and return an empty page to anything automated.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "Which of these is one of the six items on the index card?",
            options: [
              "Where the amendments are, by section range if the rule states one",
              "The name of the inspector assigned to residential work in the jurisdiction",
              "The fee charged for a residential permit in the jurisdiction",
              "The order in which the jurisdiction performs its inspections",
            ],
            correctIndex: 0,
            explanation:
              "The six are the citation, the model code, the edition and printing, the name of the result, where the amendments are, and the date and source.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course say about asking whether a specific job needs a permit?",
            options: [
              "Ask it, but not as part of this exercise",
              "Do not ask it, because a department may not answer a hypothetical question",
              "Ask it first, because the answer determines whether the rest of the exercise matters",
              "Ask the state agency rather than the local department, which cannot bind itself",
            ],
            correctIndex: 0,
            explanation:
              "It is a different question, about your specific job, and it deserves its own conversation rather than being tacked onto a research task.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What did lesson 13 say a web page can be that a filed rule cannot?",
            options: [
              "Out of date",
              "Written by an agency other than the one that made the rule",
              "Amended locally without the state being informed",
              "Read without a subscription to a legal publisher",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the agency's codes page is a pointer to the rule rather than a substitute for it.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the exercise ask you to produce besides the six items?",
            options: [
              "One question for your building department",
              "A sketch of your own house showing the walls you intend to change",
              "A copy of the section of the adopted code that governs your planned work",
              "A list of the inspections your project will require",
            ],
            correctIndex: 0,
            explanation:
              "One question you cannot answer from the rule and that the department can.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "In the worked Indiana answer, what edition and printing are recorded?",
            options: [
              "2018 edition, first printing August 2017",
              "2020 edition, first printing November 2019, matching the rule's filing date",
              "2017 edition, second printing, published by the International Code Council",
              "2026 edition, as reported by search summaries seen during the build",
            ],
            correctIndex: 0,
            explanation:
              "Published by the International Code Council, and named in the rule with exactly that specificity.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What three things does lesson 14 say usually unstick a stuck search?",
            options: [
              "Better search terms, looking for the agency, and a PDF or mirror",
              "Calling the department, emailing the agency, and visiting the counter in person",
              "Buying the edition, reading the commentary, and checking the publisher's website",
              "Asking a contractor, asking an inspector, and asking a designer",
            ],
            correctIndex: 0,
            explanation:
              "Search with the word residential, look for the agency's codes page, and if a state site renders nothing find a printed-rule version or a publisher's copy.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the course mean by \"traceable to a document you actually opened\"?",
            options: [
              "You read the source yourself rather than a summary of it",
              "You obtained a certified copy of the rule from the state agency",
              "You recorded the URL of every search result the query returned",
              "You confirmed the item with an official before writing it down",
            ],
            correctIndex: 0,
            explanation:
              "It is the same fetch-or-do-not-cite discipline the course applies to its own claims.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "Which of these is the citation in the worked Indiana answer?",
            options: [
              "675 IAC 14-4.4-1",
              "The 2020 Indiana Residential Code, which is the name the state gives the result",
              "The 2018 International Residential Code for One and Two Family Dwellings",
              "Title 675, Article 14, One and Two Family Dwelling Code",
            ],
            correctIndex: 0,
            explanation:
              "Its title is Adoption by reference; title; purpose. The others are the name of the result, the model code, and the article heading.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the course say everything before section 7 was?",
            options: [
              "Somebody else's example",
              "A summary of the model codes most commonly adopted across the United States",
              "An account of how one building department inspects residential work",
              "A reading of the federal standard for manufactured homes",
            ],
            correctIndex: 0,
            explanation:
              "This is the part where you do it for the place you actually live.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What kind of finding is \"my state's rule was hard to locate\"?",
            options: [
              "A real finding about your state, worth writing down",
              "A sign that the search terms were wrong and should be tried again from scratch",
              "Grounds for using another state's rule as a substitute",
              "Evidence that the state has not adopted a residential code at all",
            ],
            correctIndex: 0,
            explanation:
              "The course records its own failures the same way, which is why lesson 9 names every portal that returned nothing.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL EXAM — pools 44, serves 10, drawn from all fourteen lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam",
      title: "Final exam · Reading the plan and the code",
      section: "Final exam",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course refuse to tell a learner about their own project?",
            options: [
              "Whether it needs a permit",
              "Which document governs when the drawings and the specification conflict on a job",
              "How to read a section of a drawing set and find the dimensions in it",
              "How to find the public rule that adopted a code in their state",
            ],
            correctIndex: 0,
            explanation:
              "That answer belongs to the building department with jurisdiction over the address, and to nobody else.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why can this course quote a Navy manual at length and not a model code?",
            options: [
              "Federal works carry no copyright",
              "Because the Navy licenses its training material for educational reuse on request",
              "Because a manual published in 1993 has outlived its copyright term",
              "Because a model code becomes uncopyrightable only after a state adopts it",
            ],
            correctIndex: 0,
            explanation:
              "17 U.S.C. 105 puts works of the United States Government outside copyright. The model codes are private publications.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What two documents does the course say govern a house?",
            options: [
              "The drawing set and the adopted code",
              "The permit application and the certificate of occupancy issued at completion",
              "The contract and the schedule of values agreed between owner and builder",
              "The title block and the revision block on the first sheet of the set",
            ],
            correctIndex: 0,
            explanation:
              "One describes this particular building; the other sets the minimum every building in the jurisdiction must meet.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "Which shipped course's open hedge does this course exist to answer?",
            options: [
              "Construction Math, lesson 8",
              "Basic Construction Safety, lesson 1, on reading a federal regulation citation as an address",
              "Housing Decisions, lesson 23, on reading one real document about your own housing",
              "The Name on the Door, lesson 6, on what a licence gates and who administers it",
            ],
            correctIndex: 0,
            explanation:
              "Its Sources note says the governing spacing for any actual wall comes from the drawings and the adopted building code, while showing neither.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
          {
            prompt: "What does a drawing set begin by showing, in most cases?",
            options: [
              "The site and its adjoining areas",
              "The foundation plan, taken on a plane slightly below the top of the foundation wall",
              "The framing plans for the floors, walls and roof of the structure",
              "The schedules for doors, windows and interior finishes",
            ],
            correctIndex: 0,
            explanation:
              "Location, boundaries, contours and outstanding physical features come first, then the ground, the structure, the utilities and the finishes.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a floor framing plan have to specify?",
            options: [
              "Sizes and spacing of joists, girders and columns",
              "The species and moisture content of the lumber to be delivered for the floor",
              "The order in which the members are to be installed once the sill is set",
              "The interior finish to be applied to the ceiling below the floor",
            ],
            correctIndex: 0,
            explanation:
              "This is the direct answer to Construction Math's deferral: spacing in a real building is specified on a sheet, for that building.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What is the difference between an elevation and a section?",
            options: [
              "A section is cut; an elevation is a face",
              "A section is drawn from above and an elevation from the side of the structure",
              "A section is a general drawing and an elevation is a large-scale detail",
              "A section is drawn by the engineer and an elevation by the architect",
            ],
            correctIndex: 0,
            explanation:
              "Both are vertical projections. A section is cut by a cutting plane and shows heights, materials, fastenings and concealed features.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What do dashed hidden lines show on a drawing?",
            options: [
              "What is behind the plane of the view",
              "Work that has been deleted from the set by a later revision to the sheet",
              "The path of a cutting plane where a section has been taken through the structure",
              "Dimensions that are approximate and must be confirmed on site",
            ],
            correctIndex: 0,
            explanation:
              "In the manual's section B-B they show that the wall beyond the pilaster is 8 inches thick.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "Where is the title block, and where is the revision block?",
            options: [
              "Title lower-right, revision upper right",
              "Title upper right, revision lower-right, with the legend beside the title block",
              "Both in the lower-right corner, with the revision block above the title block",
              "Both along the lower border, between the zone reference squares",
            ],
            correctIndex: 0,
            explanation:
              "The legend, if used, goes in the upper right corner below the revision block.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What is the Navy manual's rule about measuring a drawing?",
            options: [
              "Never measure a drawing; use dimensions",
              "Measure only at the stated scale, and only on an original rather than a copy",
              "Measure only the overall dimensions and take the partials from the schedule",
              "Measure only with an architect's scale matched to the ratio in the title block",
            ],
            correctIndex: 0,
            explanation:
              "The print may have been reduced, you might not account for the scale, and paper moves with humidity. The written dimensions do not.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "If a drawing's scale is shown as 1\" = 2\", how long is each line on the print?",
            options: [
              "Half its actual length",
              "Twice its actual length, so that small parts can be read without magnification",
              "Equal to its actual length, since both figures are given in inches",
              "Dependent on the sheet size, which the scale block does not record",
            ],
            correctIndex: 0,
            explanation:
              "At 3\" = 1\", by contrast, each line is three times its actual length.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What connects a door symbol on a plan to its line in the door schedule?",
            options: [
              "A mark",
              "A leader line drawn from the symbol across the sheet to the table",
              "The zone reference printed along the border nearest the door",
              "The revision letter assigned to the sheet the door appears on",
            ],
            correctIndex: 0,
            explanation:
              "A code number, or a number and a letter, placed next to the symbol and entered on a line in the schedule.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "Under the Navy manual's rule, which document takes precedence in a conflict?",
            options: [
              "The specifications",
              "The drawings, which are the document a building department reviews and stamps",
              "Whichever of the two carries the later date on its cover or title block",
              "The schedules, which present the data without reference to either",
            ],
            correctIndex: 0,
            explanation:
              "The course adds two cautions: this is the Navy's rule for its own work, and a private contract states its own order of precedence.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "In a specification section, which part carries how the work must be done?",
            options: [
              "Part 3, Execution",
              "Part 2, Products, which addresses the materials and equipment included in the work",
              "Part 1, General, which carries requirements of a general nature for the section",
              "Division 1, the boilerplate common to all projects under a contract",
            ],
            correctIndex: 0,
            explanation:
              "Part 2 is what may be used. Part 3 is how it must be performed.",
            sourceLessonSlug: "schedules-notes-and-the-specification",
          },
          {
            prompt: "What are the two things people mean by \"the code\"?",
            options: [
              "A model code, and an adoption",
              "A state code and a federal code, which apply to different classes of structure",
              "The published edition and the publisher's commentary on it",
              "The permitted drawings and the inspections carried out against them",
            ],
            correctIndex: 0,
            explanation:
              "Separating them is the most useful move in the course. The adoption is free and public; the model code is a product.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "In 675 IAC 14-4.4-1, what does the 14 refer to?",
            options: [
              "The article",
              "The title, which identifies the agency whose rules are collected under it",
              "The rule, which carries the current residential adoption",
              "The section within the rule that states the adoption",
            ],
            correctIndex: 0,
            explanation:
              "675 is the title, 14 the article on one and two family dwellings, 4.4 the rule, and 1 the section.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Why does an administrative code article run 14-4, 14-4.1, 14-4.2, 14-4.3?",
            options: [
              "A replacement is written at the next decimal and the old rule repealed",
              "Each decimal covers a different class of structure within the same article",
              "The decimals number the state amendments made to a single adopted edition",
              "The publisher renumbers the rules as it processes them for its mirror",
            ],
            correctIndex: 0,
            explanation:
              "The decimals are a history, and they let you tell a current rule from a replaced one on the face of a listing.",
            sourceLessonSlug: "a-model-code-is-a-book-somebody-sells",
          },
          {
            prompt: "Which edition does Indiana's residential adoption rule name?",
            options: [
              "2018, first printing August 2017",
              "2020, matching the name the state gives to the resulting code",
              "2021, the newest edition available when the rule was filed in November 2019",
              "2026, following the state's most recent readoption cycle",
            ],
            correctIndex: 0,
            explanation:
              "Published by the International Code Council. The 2020 in the name is the state's title for its own rule, not the model edition.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What does \"save and except those revisions made in this rule\" mean?",
            options: [
              "The state's own amendments govern over the model text",
              "The state adopted only the sections it listed and left the rest unenforced",
              "The publisher's errata are excluded from the edition the state adopted",
              "The rule may be revised later without a new adoption being filed",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana those revisions are the rest of rule 675 IAC 14-4.4, running through section 245 on the listing read for this course.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "Which two words does the course pull out of the Indiana rule's purpose statement?",
            options: [
              "Minimum and affordability",
              "Design and construction, the activities the rule regulates and controls",
              "Safety and welfare, the interests the rule exists to safeguard",
              "Materials and quality, the things the rule controls in residential structures",
            ],
            correctIndex: 0,
            explanation:
              "Minimum, because a code is a floor and not a description of good work. Affordability, because naming it beside safety shows the code as a balance.",
            sourceLessonSlug: "reading-an-adoption-rule",
          },
          {
            prompt: "What is 675 IAC 17-1.8 titled, and what edition does its first section adopt?",
            options: [
              "Titled 2009 Edition, adopting the 2008 National Electrical Code",
              "Titled 2008 Edition, adopting the 2009 National Electrical Code in its first printing",
              "Titled 2026 Edition, adopting the 2023 National Electrical Code",
              "Titled 2005 Edition, adopting the 2005 National Electrical Code",
            ],
            correctIndex: 0,
            explanation:
              "The rule's own title says 2009, the edition it adopts says 2008, and the reader is in 2026. Three different numbers again.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "Why does buying the newest edition of a model code not answer the question?",
            options: [
              "It tells you what the publisher printed, not what your jurisdiction enforces",
              "Because a purchased copy may not be used to determine compliance with a permit",
              "Because the newest edition omits the amendments the publisher made in earlier printings",
              "Because a building department will not accept a code reference from a private copy",
            ],
            correctIndex: 0,
            explanation:
              "The book is a product; the adoption is the law. Two minutes on a free state rule beats any amount spent on the newest book.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What happened when this course tried to read Indiana's official rules portal?",
            options: [
              "Four requests returned an empty page shell",
              "The portal required payment before the rule text would be displayed",
              "The portal returned the rule but with no filing date or register number attached",
              "The portal had been retired and redirected to the model code publisher",
            ],
            correctIndex: 0,
            explanation:
              "Which is why lesson 9 reports the newer electrical rule and the readoption review as reported rather than asserting either.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What three questions does the course say to ask of any \"the code says\" claim?",
            options: [
              "Which edition, which section, which jurisdiction adopted and amended it",
              "Who told you, when they told you, and whether they work in the trade",
              "What it costs, how long it takes, and whether a permit is required",
              "Which sheet shows it, which revision, and which scale it is drawn at",
            ],
            correctIndex: 0,
            explanation:
              "The third is the one people never ask and the one that most often changes the answer.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "Why does the course describe no free-access terms for the model code publishers?",
            options: [
              "Every attempt to reach their pages failed",
              "Because describing terms would itself infringe the publishers' rights in their codes",
              "Because the terms change too often for any written description to stay accurate",
              "Because the publishers decline to state terms for non-subscribers",
            ],
            correctIndex: 0,
            explanation:
              "403 and 404 responses and one hostname that did not resolve. The course reports that such offerings exist and treats any description of them as a lead.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What caveat must travel with every citation of 24 CFR part 3280?",
            options: [
              "It governs manufactured homes, not site-built houses",
              "It applies only where no state residential code has been adopted by reference",
              "It may be read but not cited, because its subparts change without notice",
              "It covers only the electrical and plumbing systems of a dwelling",
            ],
            correctIndex: 0,
            explanation:
              "Use it as a model of the form a code takes, never as a source of the requirement for site-built work.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What two things does Santa Cruz County say its inspectors verify a structure against?",
            options: [
              "The permitted set of documents and the adopted codes",
              "The contractor's schedule of work and the owner's written instructions",
              "The model code as published and the publisher's commentary on it",
              "The site plan and the plot plan prepared for the project",
            ],
            correctIndex: 0,
            explanation:
              "That sentence ties the whole course together: the documents you learned to read, and the code you learned to find.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What single fact explains the shape of an inspection regime?",
            options: [
              "Most construction work becomes invisible",
              "Most jurisdictions adopt the same model code and therefore converge on one sequence",
              "Most defects appear within the first year of a building being occupied",
              "Most trades work in an order set by the contract rather than by the department",
            ],
            correctIndex: 0,
            explanation:
              "So an inspection regime has to catch work at the last moment it can still be seen.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "Why does the rough-in inspection come before the drywall?",
            options: [
              "Drywall makes the rough-in unexaminable",
              "Because the drywall contractor requires a signed record before scheduling the work",
              "Because insulation may not be installed until the rough work is approved and paid",
              "Because the department inspects trades in the order they were permitted",
            ],
            correctIndex: 0,
            explanation:
              "An inspector who arrives after the walls are closed cannot compare the work with the permitted documents and the adopted code.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "State the basic rule Santa Cruz County publishes about covering work.",
            options: [
              "Do not cover any portion of the work without the approval of your inspector",
              "Notify the department at least 48 hours before any work is concealed",
              "Photograph all concealed work and retain the images until final inspection",
              "Obtain a written release from the department before any trade begins closing walls",
            ],
            correctIndex: 0,
            explanation:
              "It is a test you can apply anywhere: am I about to make this impossible to see, and has anyone approved it.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "What must happen before a permit reaches final status in that county?",
            options: [
              "All agency holds cleared and the final inspection completed",
              "The owner must take occupancy and confirm the work is satisfactory",
              "The contractor must submit a record set showing the work as built",
              "The utilities must be released before the final inspection is scheduled",
            ],
            correctIndex: 0,
            explanation:
              "Utility releases for gas and electric follow. The end of the work is not the same as the end of the permit.",
            sourceLessonSlug: "why-the-rough-in-comes-before-the-drywall",
          },
          {
            prompt: "Which six items does the course say to write down about your own adoption rule?",
            options: [
              "Citation, model code, edition and printing, name, amendments, date and source",
              "Address, jurisdiction, department, inspector, permit number and fee",
              "Title, article, rule, section, paragraph and subparagraph",
              "Scale, revision, sheet number, drawing number, date and preparing organisation",
            ],
            correctIndex: 0,
            explanation:
              "They fit on one index card, and the last item is what makes the rest defensible.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What are the two traps lesson 13 names?",
            options: [
              "The mirror that looks official, and the portal that shows you nothing",
              "The agency page that is out of date, and the ordinance that conflicts with the state rule",
              "The edition that is newer than the adoption, and the printing that is not named",
              "The contractor who quotes from memory, and the inspector who will not put it in writing",
            ],
            correctIndex: 0,
            explanation:
              "This course walked into both while building this material, and lesson 9 records exactly where its checking stopped.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course say to write when an item genuinely cannot be found?",
            options: [
              "Not found on a date, and where you searched",
              "The equivalent item from the worked Indiana example, marked as a substitute",
              "A best estimate with a note that it needs confirming",
              "Nothing, since a blank shows plainly that the item is unavailable",
            ],
            correctIndex: 0,
            explanation:
              "A recorded gap is usable and a blank is not.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does the last item of the worked Indiana answer record?",
            options: [
              "That the rule was read on a mirror, not the state's register",
              "That the amendments run through section 245 of the same rule",
              "That the state named the result the 2020 Indiana Residential Code",
              "That the edition adopted is the 2018 one, first printing August 2017",
            ],
            correctIndex: 0,
            explanation:
              "Recording a limitation makes the answer complete rather than failed.",
            sourceLessonSlug: "your-own-address-exercise",
          },
          {
            prompt: "What does an assembly drawing provide beyond showing parts in relationship?",
            options: [
              "A check on the accuracy of the design drawings",
              "A legal record of the work as it was finally constructed on the site",
              "A substitute for the specification where the two would otherwise conflict",
              "A set of dimensions that may be scaled directly off the sheet",
            ],
            correctIndex: 0,
            explanation:
              "Drawn to a smaller scale from the detail dimensions, which often discloses errors. The set is built to disagree with itself where there is a mistake.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What does a diagonal line across a space in a title block mean?",
            options: [
              "The information is not required or is given elsewhere",
              "The information has been superseded by a later revision to the sheet",
              "The space is reserved for the reviewing authority's approval stamp",
              "The sheet is preliminary and the space will be completed before construction",
            ],
            correctIndex: 0,
            explanation:
              "A slash is a convention, not a blank somebody forgot to fill in.",
            sourceLessonSlug: "scale-dimensions-and-the-title-block",
          },
          {
            prompt: "What is the course's own operating rule about code text?",
            options: [
              "Cite the address, never the text",
              "Quote a single sentence at most, always with its section number attached",
              "Reproduce only tables, since numerical data is not protected",
              "Paraphrase closely, so a reader need not obtain the book",
            ],
            correctIndex: 0,
            explanation:
              "An address is an invitation to check. A copy is a substitute for checking, and it goes stale without announcing it.",
            sourceLessonSlug: "cite-the-address-never-the-text",
          },
          {
            prompt: "What does the course say about the year in a state's name for its own code?",
            options: [
              "It is not necessarily the edition year",
              "It is always the year the rule takes effect in the jurisdiction",
              "It is always the year of the model code edition the rule adopts",
              "It is assigned by the model code publisher rather than by the state",
            ],
            correctIndex: 0,
            explanation:
              "Indiana shows the gap twice: a 2020 rule adopting a 2018 edition, and a 2009 rule adopting a 2008 edition.",
            sourceLessonSlug: "the-edition-year-is-not-this-year",
          },
          {
            prompt: "What does the manual say construction drawings normally include?",
            options: [
              "Details, assemblies, the bill of materials and the specifications",
              "The permit application, the inspection record and the certificate of occupancy",
              "The site plan alone, with everything else supplied by the specification",
              "The schedules and notes, with the specification issued separately by the owner",
            ],
            correctIndex: 0,
            explanation:
              "The specification is part of the set, not an optional extra document somebody forgot to hand over.",
            sourceLessonSlug: "what-a-set-of-drawings-is",
          },
          {
            prompt: "What kind of question does the course say has a documentary answer?",
            options: [
              "Which editions this jurisdiction is currently enforcing",
              "Whether the work you are planning will pass its first inspection",
              "How much a residential permit will cost for a project of your size",
              "Whether a wall you want to remove is carrying load",
            ],
            correctIndex: 0,
            explanation:
              "Along with where the amendments are published and where the adopted code can be read without buying it.",
            sourceLessonSlug: "what-a-permit-is-and-what-this-will-not-tell-you",
          },
          {
            prompt: "What does a typical section represent, as opposed to a specific section?",
            options: [
              "The average condition throughout a structure",
              "The single most heavily loaded location, which governs the rest of the structure",
              "The condition most often found in buildings of that type in the jurisdiction",
              "A cut taken at a standard location prescribed by the adopted code",
            ],
            correctIndex: 0,
            explanation:
              "Typical sections are used where construction features repeat many times. A specific section shows one particular place, such as a pilaster.",
            sourceLessonSlug: "plan-elevation-section-detail",
          },
          {
            prompt: "What does the course say survives after the answer you write down is wrong?",
            options: [
              "The habit of finding it",
              "The citation of the rule, which does not change when a state readopts",
              "The edition and printing, which remain valid for work permitted under them",
              "The inspection list you obtained from your own building department",
            ],
            correctIndex: 0,
            explanation:
              "Editions change and states readopt. That is why the final lesson is a method rather than a fact.",
            sourceLessonSlug: "find-your-own-adoption-rule",
          },
          {
            prompt: "What does the course say a stud-spacing table printed in it would be?",
            options: [
              "None of the things that actually govern your wall",
              "A useful national baseline that most jurisdictions enforce without amendment",
              "A reproduction permitted because a table carries no protectable expression",
              "A substitute for reading the drawings, which follow the table anyway",
            ],
            correctIndex: 0,
            explanation:
              "The governing number depends on the edition adopted, the state's amendments and your drawings, and a printed table is none of those.",
            sourceLessonSlug: "two-documents-govern-a-house",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// WHAT WAS CHECKED FOR THIS BUILD, AND WHERE THE CHECKING STOPPED
//
// RE-CHECKED ON 2026-09-20, as the brief required:
//   * 675 IAC 14-4.4-1 re-fetched. Still adopts "the 2018 International Residential Code for One
//     and Two Family Dwellings, first printing August 2017, published by the International Code
//     Council", still names the result "the 2020 Indiana Residential Code", still carries the
//     purpose sentence and the Room E208 review address the brief recorded. The page also shows
//     the rule filed 26 November 2019 at 11:43 a.m. under Indiana Register document
//     20191225-IR-675190330FRA, which the brief did not have.
//   * Article 14's rule listing read: 675 IAC 14-1, 14-2, 14-3, 14-4, 14-4.1 and 14-4.3 are marked
//     (Repealed); 14-4.4 "2020 Indiana Residential Code" is the newest residential rule, running
//     sections 1 to 245. So on that listing the brief's adoption is still the live one.
//   * NEW, and it is the cross-finding the task asked for: Article 17's listing shows 675 IAC 17-1
//     through 17-1.7 all marked (Repealed), and 675 IAC 17-1.8 "Indiana Electrical Code, 2009
//     Edition" as the newest unrepealed electrical rule. 675 IAC 17-1.8-1 adopts the National
//     Electrical Code, 2008 EDITION, first printing. Lesson 9 is built on that: the rule's own
//     title year and the edition year it adopts are different numbers, in two separate articles,
//     in the same direction.
//
// NOT CONFIRMED, AND THEREFORE NOT ASSERTED ANYWHERE IN A LESSON:
//   a. Whether a newer Indiana electrical rule, 675 IAC 17-1.9, adopts the 2023 NEC as the
//      "Indiana Electrical Code, 2026 Edition" and repeals 17-1.8. Seen only in search summaries.
//   b. Whether 675 IAC 14-4.4 was under readoption review in 2025 under LSA Document #24-566.
//      Seen only in search summaries.
//   Why neither was verified: iar.iga.in.gov (Indiana Administrative Rules and Policies, the
//   state's own portal) is a client-rendered application. Four attempts on 2026-09-20 (three
//   through a page reader at /latestArticle/675/17, /latestArticle/675/14 and
//   /register/20250903-IR-675240566RAA, one raw HTTP request) each returned the same empty
//   document shell with no rule text. The older static host iac.iga.in.gov returned the same
//   shell. https://www.in.gov/dhs/fire-and-building-safety/code-services/... returned 404 and the
//   DHS codes page returned no code names. Lesson 9 states (a) and (b) as REPORTED, names the
//   failures, prints the date, and makes the lag itself the teaching point. Both are proposed
//   research checks below.
//
// OTHER THINGS NOT VERIFIED AND THEREFORE NOT STATED:
//   c. The ICC and NFPA free-access terms. Every publisher URL tried during the inventory research
//      failed (403, 404, DNS). Lesson 10 reports that such offerings are widely reported to exist,
//      describes NO terms, names the failures, and tells the learner to read the terms they
//      actually see and to treat the course's own paragraph as a lead.
//   d. That every state publishes its adoption rule free. Only Indiana's was ever read. Lessons 13
//      and 14 say so in those words and frame section 7 as "find yours".
//   e. Veeck, ASTM v. Public.Resource.Org and ASTM v. UpCodes. NOT MENTIONED AT ALL. The brief was
//      right that the operating rule ("cite the section number, never the text") needs no case law,
//      and all three were REPORTED only. No lesson alludes to them.
//   f. The publisher name string inside 675 IAC 17-1.8-1. The page reader's extraction rendered it
//      as "National Fire Prevention Association", which is not the association's name, so no
//      publisher is quoted for that rule. The lesson says only that it adopts the 2008 edition,
//      first printing, of the National Electrical Code.
//   g. Anything about what NCCER, OSHA, a licence, a permit approval, a plan review or a home
//      inspection would accept. Lessons 1, 11 and 12 refuse all of it explicitly.
//
// SOURCES ACTUALLY FETCHED AND READ FOR THIS FILE, 2026-09-20:
//   1. NAVEDTRA 14043, Builder 3 & 2 Volume 1 (March 1993), 332-page PDF downloaded and its text
//      extracted. Front matter, contents page, the SUMMARY page, and the whole of chapter 2
//      (pp. 2-1 to 2-22) read. Source of sections 2 and 3, and of the worked foundation-plan /
//      section A-A / section B-B / elevations example.
//   2. NAVEDTRA 14040, Blueprint Reading and Sketching (original May 1994, administrative update
//      October 2003, NETPDTC), 185-page PDF downloaded, chapter 1 (pp. 1-1 to 1-7) read. Source of
//      the title block, revision block, drawing number, zone numbers, scale block, the "Never
//      measure a drawing; use dimensions" rule and its three reasons, notes, leader lines, legend.
//   3. law.cornell.edu: 675 IAC 14-4.4-1; 675 IAC 17-1.8-1; the Article 14 listing; the Article 17
//      listing; 24 CFR 3280.1.
//   4. cdi.santacruzcountyca.gov: "Typical Inspections" (the 13-item ordered list, the basic rule
//      about covering work, and the final-status / agency-holds sentence) and "Inspections" (the
//      sentence on what inspectors verify a structure against).
//   5. 17 U.S.C. 105, per the sources inventory of the same date.
//   Nothing else in this file carries a citation, and no figure is attributed to a source no pass
//   read. The Navy PDFs were read from militarynewbie.com mirrors; the Sources blocks give those
//   URLs because that is where they were actually read.
//
// ASSESSMENT SPEC, computed by hand because the slug is not yet registered and
// `npx tsx scripts/audit-course.ts <slug> --spec` cannot see it. Target = clamp(round(w/35),
// 40, 100); a pool passes at 90% of target. Word counts are body text only, quizzes excluded,
// counted the way scripts/audit-course.ts counts them:
//   Section 1  1715 words  target 49  pool 49   (2 teaching lessons)
//   Section 2  2148 words  target 61  pool 56   (2)
//   Section 3  2517 words  target 72  pool 65   (2)
//   Section 4  2015 words  target 58  pool 54   (2)
//   Section 5  2079 words  target 59  pool 55   (2)
//   Section 6  2257 words  target 64  pool 58   (2)
//   Section 7  1603 words  target 46  pool 46   (2, one of them the exercise lesson)
//   Final exam            pool 44, serves 10, drawn from all 14 teaching lessons
//   Every section quiz serves 5, every quiz is passingScore 80 and shuffleOptions true, and every
//   question carries `explanation` and a `sourceLessonSlug` naming a lesson in this file.
//
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). `course` is the slug to be registered,
// `read-the-plan-and-the-code`.
//
//  A. key "indiana-residential-code-current-edition" · severity HIGH · lesson
//     "the-edition-year-is-not-this-year"
//     title: Is 675 IAC 14-4.4 still Indiana's current residential adoption in 2026?
//     quote: "Search summaries seen on 20 September 2026 report two things that this course could
//            not confirm on any official page, and so will not state as fact"
//     claim: On law.cornell.edu's mirror, read 2026-09-20, 675 IAC 14-4.4 is the newest
//            unrepealed residential rule in Article 14 and adopts the 2018 IRC.
//     stakes: The course's worked example is Indiana. If the state readopted, the example still
//            teaches the method but the lesson should name the newer rule.
//     needs: The rule as it stands on the Indiana Register / iar.iga.in.gov, with its filing date,
//            plus the disposition of LSA Document #24-566.
//     where: iar.iga.in.gov (needs a browser that runs JavaScript, or the state's PDF rule
//            downloads); in.gov/dhs code services; a call to the Fire Prevention and Building
//            Safety Commission.
//
//  B. key "indiana-electrical-code-1-9" · severity HIGH · lesson "the-edition-year-is-not-this-year"
//     title: Does 675 IAC 17-1.9 exist, adopting the 2023 NEC as the 2026 Indiana Electrical Code?
//     quote: "that a newer electrical rule, 675 IAC 17-1.9, adopts the 2023 National Electrical
//            Code as the \"Indiana Electrical Code, 2026 Edition\" and repeals 17-1.8"
//     claim: The LII Article 17 listing read 2026-09-20 shows 17-1.8 (2009 Edition, adopting the
//            2008 NEC) as the newest unrepealed rule, and no 17-1.9.
//     stakes: Lesson 9's cross-finding survives either way (the title year and edition year differ
//            in both versions), but the lesson should print whichever is true.
//     needs: The Article 17 rule list on the state's own register, with filing dates.
//     where: iar.iga.in.gov; in.gov/dhs/files Electrical Code LSA documents; the Indiana Electrical
//            Code Update Committee's published record.
//
//  C. key "icc-nfpa-free-access-terms" · severity medium · lesson "cite-the-address-never-the-text"
//     title: What do the ICC and NFPA free-access offerings actually permit?
//     quote: "This course states that as reported and nothing more, because it could not verify it"
//     claim: Both publishers are widely reported to offer free read-only online access. No
//            publisher page was ever reached: every URL tried returned 403, 404 or a DNS failure.
//     stakes: A learner told the wrong terms could breach them, or could skip free access that
//            exists. Either error is ours.
//     needs: The terms as published by each organisation, read on their own site, with the date.
//     where: codes.iccsafe.org and nfpa.org, reached with a browser and, for NFPA, an account,
//            which is BAM's to create and not Claude's.
//
//  D. key "adoption-rule-availability-by-state" · severity medium · lesson
//     "find-your-own-adoption-rule"
//     title: Do all fifty states publish their building-code adoption free and online?
//     quote: "It does not know that every state publishes its adoption rule free, it did not check
//            yours, and it will not pretend otherwise."
//     claim: Only Indiana's adoption rule has ever been read for this catalog, and on a mirror.
//     stakes: Section 7 is the course's capstone exercise. If some states genuinely do not publish
//            theirs, the lesson should say which and what to do instead.
//     needs: A sample of state adoption rules read directly, with a note of which are free, which
//            are behind a vendor, and which are not online at all.
//     where: State administrative codes and registers; DOE's Building Energy Codes Program for
//            energy-code adoptions (its Indiana page did not show an IECC edition when fetched).
//
//  E. key "inspection-sequence-outside-one-county" · severity low · lesson
//     "why-the-rough-in-comes-before-the-drywall"
//     title: How much does a published residential inspection sequence vary between jurisdictions?
//     quote: "It is one county's practice. Read it for the logic, then go and find your own."
//     claim: The 13-item list in lesson 12 is Santa Cruz County, California's own published account,
//            read 2026-09-20, and is labelled as that county's practice throughout.
//     stakes: None to the teaching, which is the concealment logic rather than the list. A second
//            and third published list would let the lesson say what is common and what is local.
//     needs: Two or three more building departments' published inspection lists, ideally including
//            one in Indiana, read directly.
//     where: Municipal and county building department websites. Indianapolis's residential permit
//            page returned only tracking markup when fetched for the sources inventory.
//
// CLOSED BY THIS BUILD (no check needed):
//   * `construction-math`'s proposed research check 3 ("the stud-spacing table in the adopted
//     edition of the IRC, read directly, with the section number") is NOT closed by printing a
//     table, and should not be. This course answers the underlying question a different way: it
//     teaches the learner to find the drawings and the adoption rule that between them govern the
//     spacing. Whoever maintains research-checks.ts may want to REWORD check 3 rather than delete
//     it, so it asks for what is actually wanted: the section number of the spacing provision in
//     the edition a named jurisdiction adopted, cited as an address, never as text.
//
// FOR THE REGISTERING AGENT (outside this file; I edited only this file):
//
//   PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts, matching the two shipped construction
//   courses and BAM's 2026-09-19 private-course decisions (private, free, NO series code):
//
//     // H00 of the proposed series `the-house-you-live-in` ("The House You Live In"). PRIVATE, so
//     // per BAM's 2026-09-19 rule it carries the series SLUG and no seriesCode/Position/Track.
//     await seedAuthoredCourse(db, {
//       tenantId: learnWitus,
//       instructorId,
//       slug: "read-the-plan-and-the-code",
//       course: READ_THE_PLAN_AND_THE_CODE_COURSE,
//       category: "Science & Math",
//       additionalCategories: ["Money & Property", "Careers & Media"],   // only if that field exists
//       seriesSlug: "the-house-you-live-in",
//       seriesTitle: "The House You Live In",
//       navigationMode: "linear",
//       price: 0,
//       priceType: "free",
//       visibility: "private",
//       publishHoldReason:
//         "Held private while BAM decides whether the construction series goes public. It reads drawings from two public-release Navy manuals and codes from public adoption rules, reprints no model code text, and states no Indiana adoption it could not verify on 2026-09-20.",
//     });
//
//   * VISIBILITY is INSERT-ONLY, so the first seed is the decision. BAM chose PRIVATE on
//     2026-09-20.
//   * SERIES: `seriesSlug: "the-house-you-live-in"` with the title "The House You Live In". NO
//     seriesCode, seriesPosition or seriesTrack, per the 2026-09-19 rule. If check-series-codes.ts
//     requires a code whenever a slug is present, the slug should be dropped rather than a code
//     invented.
//   * CITATIONS: the course is private and unpublished, so it does NOT belong in STAGED_COURSES in
//     src/lib/citations.ts unless and until the visibility ever changes. Every lesson does carry an
//     APA 7 `## Sources` block, so it is ready to stage if it is ever made public.
//   * STANDARDS: scripts/check-standards-coverage.ts will fail this slug until it is mapped or
//     BACKLOGged. Suggested BACKLOG line if BAM does not want it mapped yet: "Private study course
//     on reading construction documents and code adoption; held private pending the series
//     decision, so no standards claim is shown to any educator." If it is ever made public it is a
//     genuine informational-text / citing-evidence course and should be MAPPED rather than
//     backlogged: the whole thing is reading primary documents and distinguishing what a source
//     says from what a retelling says.
//   * CATEGORY: "Science & Math" matches the two shipped construction courses. The brief also
//     proposed "Money & Property" and "Careers & Media" as additional categories.
// ══════════════════════════════════════════════════════════════════════════════════════════════
