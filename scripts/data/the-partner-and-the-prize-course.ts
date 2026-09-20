import type { AuthoredCourse } from "./authored-course";

// "The Partner and the Prize: Denise Scott Brown, One Firm, and a Citation That Named Her"
// (Culture & History). Slug to be registered: `the-partner-and-the-prize`.
//
// SOURCE BRIEF: plans/future-courses/uncredited/2026-09-18-denise-scott-brown-brief.md.
// BAM APPROVED THE BRIEF ON 2026-09-19, and changed its recommended form. The brief proposed her as
// section 4 of a three-case cluster course with Judith Leyster and Margaret Keane. BAM approved
// ONLY Scott Brown; Leyster and Keane are on hold. So this is a STANDALONE course built from the
// brief's section-4 material as the spine, expanded from the brief's own VERIFIED evidence. There
// is no Leyster and no Keane material in this file.
//
// RESEARCH TIER: 1. The brief set Tier 2 for the three-case cluster because the Keane section would
// state what a court held. With that section gone, what remains is institutional records and one
// author's published testimony, which is the brief's own "Section 4 alone would be Tier 1".
//
// VISIBILITY: PRIVATE, free, NO series code. BAM's 2026-09-19 decision: private courses do not
// carry CREDIT codes. Category "Culture & History".
//
// THE SPINE, and it must not be flattened into "she was robbed":
// A PRIZE NAMES A LAUREATE. A PARTNERSHIP NAMES PARTNERS. Those are two different questions, and in
// 1991 one page answered both. The Pritzker Architecture Prize's own page for that year names
// Denise Scott Brown as a partner in the firm since 1969 and as a collaborator of thirty years, and
// the jury's citation calls her "his talented partner". The prize went to one person. In 2013 a
// petition asked for that to be changed and the jury chair refused IN WRITING, with a stated ground:
// a later jury cannot reopen an earlier jury's decision. In 2016 the AIA gave its Gold Medal to the
// two of them together, under a rule that admits two people. Every one of those sentences is a
// document a learner can read. What NONE of them is, is a record of what the 1991 jury discussed,
// and this course never pretends otherwise.
//
// WHAT THE PUBLIC COURSE ALREADY TEACHES, AND IS NOT REPEATED HERE. `the-name-on-the-door`
// (CREDIT-03, PUBLIC) teaches architecture-firm credit through Julian Abele and Norma Merrick
// Sklarek. The private-only rule was NOT lifted, so nothing from this file goes into it. Read its
// lesson list before changing this one. This course builds on, and deliberately does not re-teach:
//   - lesson 1  `the-credited-unit-is-a-firm`  (a building is credited to a firm, and a firm is
//                named after whoever owns it). This course starts one level up, at the prize.
//   - lesson 19 `a-door-of-your-own`           ("own the firm" as the answer to firm credit). She is
//                the limit case: she did own it, and the prize still named one person.
//   - lesson 22 `corrections-that-happened`    (already names the joint 2016 AIA Gold Medal as a
//                "slot change"). This course supplies what that medal stood beside.
//   - lesson 24 `quiz-shape-and-corrections`   (one question whose correct option is the two names).
// It also links to, and does not repeat: `who-signs-the-print` lesson 22
// `two-corrections-that-happened` ("a correction fixes the format going forward; it does not reissue
// the past"), `the-paper-and-the-prize` lesson 5 (a spouse on the paper, a prize naming one), and
// `who-gets-named` lessons 9 and 21.
//
// FETCH-OR-DO-NOT-CITE. The brief fetched everything below on 2026-09-18. This pass RE-FETCHED and
// re-read, on 2026-09-19, every page from which this course quotes:
//   - pritzkerprize.com/laureates/1991        (announcement, the two sentences naming her, the
//                                              Learning from Las Vegas sentence, the citation line)
//   - pritzkerprize.com/jury-citation-robert-venturi  (the 1991 jury as listed, with roles)
//   - pritzkerprize.com/laureates             (every year the list names more than one laureate)
//   - archdaily.com/389074/...                (the 2013 letter, reproduced in full; the brief
//                                              flagged that it had to be re-read before quoting,
//                                              which is why it was)
//   - mascontext.com/.../room-at-the-top...   (verbatim passages, including the two misattribution
//                                              episodes the brief had only summarised)
//   - aia.org/design-excellence/awards/gold-medal  (the eligibility sentence; 2016 and 2017 entries)
// Page titles in the APA blocks are DESCRIPTIVE where the page's own title line was not read, and
// never invented as if quoted.
//
// HOW THE BRIEF'S REPORTED AND UNVERIFIED ITEMS WERE HANDLED (rubric Part H):
//   REPORTED, therefore ATTRIBUTED OR LEFT OUT, never asserted flat:
//     - Signature counts. Both are printed WITH the source and the date they were read, because a
//       petition total is a moving number: Architectural Record's 17,380 at publication on 14 June
//       2013, and the 21,845 the Change.org page showed on 18 September 2026.
//     - "Nine Pritzker laureates signed." NOT PRINTED. The figure this course read, in Architectural
//       Record of 9 April 2013, is five, and it is printed as of that date. The nine is a search
//       snippet and is filed as a research check instead.
//     - The years the firm's name changed to include hers (1980, 1989). NOT PRINTED as dates. The
//       course says the name changed over time and says why it will not date it: the archive page
//       that would settle it returned 403. Filed as a research check.
//     - The date the petition was written, and her birth year and birthplace. NOT PRINTED.
//   UNVERIFIED, therefore ABSENT:
//     - Whether she is living today. The course makes no statement of current status and says in
//       the ledger lesson that it is not making one.
//     - That she declined to attend the 1991 ceremony. A common telling; no source this course could
//       open. Named in the ledger as tested and refused.
//     - The wording of the prize's stated purpose in force in 1991. The course quotes the CURRENT
//       wording, labels it current, and files the 1991 wording as a research check.
//
// TWO FIDELITY DECISIONS A READER SHOULD SEE:
//   1. The 2013 letter is read as ArchDaily reproduces it, and the course says so every time it
//      quotes. It quotes SHORT EXCERPTS and never reproduces the letter whole (brief gate A4).
//   2. The MAS Context reprint of "Room at the Top?" reads "the person who signed the article or the
//      nook", almost certainly a typo for "book". The course quotes up to the unambiguous part,
//      prints the garble openly in lesson 7, and does not silently repair a source.
//
// House style, matching drew-blood-bank-course.ts and the-name-on-the-door-course.ts: `section` on
// every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3-6
// lesson-specific terms; APA 7 `## Sources`; a quiz per teaching section (pool 48, serving 5,
// passing 80, shuffled) plus a final pooling 41 and serving 10, placed LAST; every question carries
// `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors long and
// specifically wrong, so check-longest-option passes by construction. No em dashes anywhere a
// learner reads.
export const THE_PARTNER_AND_THE_PRIZE_COURSE: AuthoredCourse = {
  title: "The Partner and the Prize: Denise Scott Brown, One Firm, and a Citation That Named Her",
  description:
    "In 1991 the Pritzker Architecture Prize went to Robert Venturi. On the prize's own page for that year, two sentences name Denise Scott Brown as a partner in the firm since 1969 and as his collaborator of thirty years, and the jury's citation calls her his talented partner. The prize named one laureate. That is not a gap in the record. It is the record, and it is the best kind of teaching document, because both halves of the credit question sit on one page published by the body that decided it. This course reads that page, then reads what she herself wrote about attribution in an article she finished in 1975 and held back until 1989 because she judged that publishing it would hurt her career and her firm. Then it reads the 2013 petition and the letter the jury chair wrote in reply, which refuses a retroactive award on a stated ground: a later jury cannot reopen an earlier jury's decision. A stated ground can be checked, so the course checks it, against the prize's own list of laureates, which names more than one person in six different years. Finally it reads the correction that did happen, the American Institute of Architects Gold Medal of 2016, awarded to the two of them together under a rule that admits two individuals, and asks what a prospective correction by a different institution can and cannot repair. Throughout, the course keeps a hard line between what documents establish and what a story wants them to establish. It does not claim to know what the 1991 jury discussed, because nothing it read says. It ends with a ledger of every claim it tested and refused to print.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — One page, two names
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "one-page-two-names",
      title: "1 · One page, two names",
      section: "Section 1 · One page, two names",
      body: `Most credit arguments are hard because the evidence is scattered: the claim lives in one place and the correction lives in another, years later, if it exists at all. This one is different, and that is why it is worth a course. Both halves sit on a single page, published by the institution that made the decision.

The Pritzker Architecture Prize's page for 1991 opens with the announcement: "Robert Venturi, who has always identified himself as a Philadelphia architect, but whose projects are international in scope, has been selected to receive the Pritzker Architecture Prize of 1991, generally acknowledged as architecture's highest award" (Pritzker Architecture Prize, n.d.-b).

Further down, the same page says this: "Robert Venturi's wife, Denise Scott Brown, is an architect, planner, author, and educator. She has been a partner in the firm since 1969 and his collaborator in the evolution of architectural theory and design for the past 30 years" (Pritzker Architecture Prize, n.d.-b).

And the jury's own citation, published by the same prize, says: "His understanding of the urban context of architecture, complemented by his talented partner, Denise Scott Brown, with whom he has collaborated on both more writings and built works, has resulted in changing the course of architecture in this century" (Pritzker Architecture Prize, n.d.-a).

**Read what those three quotations do together.** The prize names her. It gives her a job title, architect, planner, author, educator. It dates her partnership in the firm to 1969. It credits her with thirty years of collaboration on the theory and the design. The jury credits her inside the sentence that says why the laureate mattered. And the prize goes to one person.

**Nothing there is hidden, and nothing there is contradictory.** A prize names a laureate. A partnership has partners. Those are two different questions, and this page answers both without noticing that it has.

**What this course is not.** It is not an argument that the 1991 jury judged Robert Venturi's work wrongly. Nothing in these documents supports that, and the course does not need it. It is also not a reconstruction of what the jury discussed. No source read for this course says what was discussed, and a course that guessed would be doing the exact thing it warns against.

**What it is.** A close reading of four kinds of document: a prize citation, an author's own published account, a refusal letter, and an award rule. By the end you should be able to pick up any one of them and say what it establishes, what it merely asserts, and what it is silent about.

**Where the firm side is already taught.** How a building gets credited to a firm, and why a firm is named after whoever owns it, is the subject of *The Name on the Door*, lesson 1. This course starts one level up, at the prize, and assumes that lesson rather than repeating it.

:::reveal What two things does the Pritzker's own 1991 page say about Denise Scott Brown? ||| That she is an architect, planner, author and educator who has been a partner in the firm since 1969, and that she was Robert Venturi's collaborator in the evolution of architectural theory and design for thirty years.

:::reveal Why is the 1991 laureate page an unusually good teaching document for a credit question? ||| Because both halves of the question sit on one page published by the body that made the decision, so no part of the evidence has to be assembled from a later retelling.

## Vocabulary
- **Laureate**: the person a prize names as its winner for a given year, which is a decision by a jury rather than a record of who did the work.
- **Jury citation**: the published statement giving a jury's reasons, which can credit people the award itself does not name.
- **Partner in a firm**: a person with an ownership stake in the practice, which is a fact about a business and not a claim about any one building.
- **Silence**: what a document does not say, which is evidence of nothing until you know what question the document was answering.

## Sources
Pritzker Architecture Prize. (n.d.-a). *Jury citation: Robert Venturi*. The Hyatt Foundation. https://www.pritzkerprize.com/jury-citation-robert-venturi

Pritzker Architecture Prize. (n.d.-b). *1991 laureate: Robert Venturi*. The Hyatt Foundation. https://www.pritzkerprize.com/laureates/1991`,
    },
    {
      slug: "three-words-for-one-person",
      title: "2 · Three words for one person",
      section: "Section 1 · One page, two names",
      body: `Go back to the sentence that introduces her and read the order of the words: "Robert Venturi's wife, Denise Scott Brown, is an architect, planner, author, and educator" (Pritzker Architecture Prize, n.d.-b).

The page uses three different words for her across its sentences, and each one claims something different.

**Wife** is a relationship. It places her by reference to the laureate, and it is the first thing said about her. It is not a professional claim at all.

**Partner in the firm since 1969** is a checkable claim about a business. Somebody either holds an ownership stake or does not, and the year can be confirmed or refuted from a firm's own records. Of the three words this is the one with paper behind it.

**Collaborator in the evolution of architectural theory and design** is an evaluative claim. It is a judgement about intellectual contribution, and it is the kind of claim a jury is in the business of making.

**Now notice the same page crediting three people at once.** It reports that "Robert Venturi, Denise Scott Brown and Steven Izenour collaborated on another book, published in 1972, *Learning from Las Vegas*" (Pritzker Architecture Prize, n.d.-b). A book jacket can hold three names. A prize, that year, held one. Two credit formats, one page, and the difference between them is not a difference in who did the work. It is a difference in what each format is for.

**The firm's name is a fourth format.** The Cultural Landscape Foundation describes the practice this way: "formerly known as Venturi, Rauch and Scott Brown, the firm's principals are Robert Venturi and Denise Scott Brown" (The Cultural Landscape Foundation, n.d.). Her name is in the firm name and in the list of principals. This course does not print the years in which the firm's name changed, because the archive page that would settle them could not be opened, and a date repeated from a search summary is not a date.

**The skill to take from this lesson** is reading a credit line for its type before reading it for its content. Ask what question the format was built to answer. A firm name answers who is liable and who owns. A book jacket answers who wrote it. A prize answers whom a jury chose. A citation answers why. Only after you know which question you are reading can you say whether an omission is an error.

:::reveal What is the difference between calling someone a partner in a firm and calling them a collaborator in the evolution of a theory? ||| Partner is a checkable claim about ownership of a business that records can confirm or refute, while collaborator in the evolution of a theory is an evaluative judgement about intellectual contribution.

:::reveal The 1991 page carries a three-name credit and a one-name credit. What are they, and what does the difference show? ||| The book credit for Learning from Las Vegas names Venturi, Scott Brown and Izenour, while the prize names one laureate. The difference is in what each format is for, not in who did the work.

## Vocabulary
- **Credit format**: the shape a naming convention takes, such as a firm name, a book jacket, a prize or a citation, each built to answer its own question.
- **Evaluative claim**: a statement of judgement, such as who shaped a theory, which cannot be settled by a record the way a date or an ownership stake can.
- **Principal**: a person listed as an owner or head of a practice, as The Cultural Landscape Foundation lists both partners here.
- **Appositive**: the descriptive phrase set beside a name, whose order shows what the writer treated as the primary fact about the person.

## Sources
Pritzker Architecture Prize. (n.d.-b). *1991 laureate: Robert Venturi*. The Hyatt Foundation. https://www.pritzkerprize.com/laureates/1991

The Cultural Landscape Foundation. (n.d.). *Venturi, Scott Brown and Associates*. https://www.tclf.org/pioneer/venturi-scott-brown-and-associates`,
    },
    {
      slug: "what-a-prize-names",
      title: "3 · What a prize names, and what it is for",
      section: "Section 1 · One page, two names",
      body: `A prize is not a registry. A registry tries to record what happened; a prize makes a choice, against a stated purpose, by a group of people who meet and decide. Confusing the two is the single most common error in credit arguments, and it runs in both directions: treating a prize as proof that someone did the work, and treating the absence of a prize as proof that they did not.

**The Pritzker's stated purpose, in its current wording,** is "To honor a living architect or architects whose built work demonstrates" the qualities the prize is looking for (Pritzker Architecture Prize, n.d.-d). Two features of that sentence matter for this course. It says *living*, which is a restriction. And it says *architect or architects*, which is a permission. This course quotes the wording as it stands today and does not claim it is the wording that was in force in 1991, because it did not read the 1991 text.

**A prize can be generous or narrow with names, and the granting body decides which.** Some awards cap the number of people by rule. *The Paper and the Prize*, lesson 5, has the nearest case in this catalog: a scientist named on the paper and a prize that named others, where the prize's own rule limits how many people it may name. The Pritzker's purpose, as worded today, contains no such cap.

**So the interesting question about 1991 is not "was she good enough".** That question cannot be answered from documents and it is not what this course teaches. The interesting question is narrower and answerable: given a format that permits more than one name, what determined that this year carried one? Section 4 works on that with the prize's own list of laureates.

**The other half of the mechanism is taught elsewhere and assumed here.** *The Name on the Door*, lesson 1, establishes that a building is credited to a firm and a firm is named after whoever owns it. Lesson 19 of the same course offers the obvious remedy: own the firm. Scott Brown is the case that tests the remedy, because she did own it. The Pritzker's own page says partner since 1969, and the firm carried her name. Owning the door did not settle what a prize would name, because a prize is not a property record.

**One sentence to carry forward.** A credit line is only evidence about the thing it was designed to record, and a prize was designed to record a choice.

:::reveal Why is it an error to treat a prize as proof that someone did the work? ||| Because a prize records a choice made by a jury against a stated purpose, not a finding about who did what, so it is only evidence about the decision it was designed to record.

:::reveal What does the phrase "architect or architects" in the prize's current purpose statement do? ||| It permits more than one name, so the question about any single-name year is what determined the number rather than whether the format allowed two.

## Vocabulary
- **Registry**: a record that tries to capture what happened, as distinct from a prize, which records a choice.
- **Stated purpose**: the published sentence describing what an award is for, which sets what a jury is choosing against.
- **Cap**: a rule limiting how many people an award may name, present in some prizes and absent from the Pritzker's current purpose wording.
- **Remedy**: the fix a mechanism suggests for itself, here owning the firm, which this case tests and finds incomplete.

## Sources
Pritzker Architecture Prize. (n.d.-d). *About the prize*. The Hyatt Foundation. https://www.pritzkerprize.com/about`,
    },
    {
      slug: "quiz-one-page-two-names",
      title: "4 · Knowledge check: one page, two names",
      section: "Section 1 · One page, two names",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does this course describe a prize naming a laureate and a partnership having partners?",
            options: [
              "Two different questions",
              "Two descriptions of the same underlying fact about who did the work",
              "Two formats that must always produce the same list of names",
              "Two decisions taken by the same body at different moments",
            ],
            correctIndex: 0,
            explanation:
              "The 1991 page answers both without noticing that it has, which is what makes it such a useful teaching document.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What does the order of words in the sentence introducing her show?",
            options: [
              "What the writer treated as primary",
              "Which of her four occupations the prize considered most relevant",
              "The sequence in which the jury learned the facts about the firm",
              "The order in which the names appear on the firm's own letterhead",
            ],
            correctIndex: 0,
            explanation:
              "The relationship is placed first, before any professional description, which is an editorial choice worth noticing.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "In what year did the Pritzker Architecture Prize name Robert Venturi its laureate?",
            options: [
              "1991",
              "1969, the year the prize's own page dates the start of the firm partnership",
              "1972, the year the page gives for the publication of Learning from Las Vegas",
              "2016, the year the American Institute of Architects issued its Gold Medal",
            ],
            correctIndex: 0,
            explanation:
              "The prize's page for that year announces that Venturi has been selected to receive the Pritzker Architecture Prize of 1991.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "According to the Pritzker's own 1991 page, when did Denise Scott Brown become a partner in the firm?",
            options: [
              "1969",
              "1991, at the moment the prize was announced and the citation was published",
              "1972, when the page says three authors collaborated on Learning from Las Vegas",
              "1989, the year her article on attribution finally reached print",
            ],
            correctIndex: 0,
            explanation:
              "The page says she has been a partner in the firm since 1969 and his collaborator for the past 30 years.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "How many years of collaboration does the 1991 page credit to Scott Brown?",
            options: [
              "Thirty",
              "Two, covering only the period in which the prize jury was deliberating",
              "Twenty two, counting from the founding of the firm to the award announcement",
              "Fifty, which is the span the later Gold Medal citation is said to cover",
            ],
            correctIndex: 0,
            explanation:
              "The page says she was his collaborator in the evolution of architectural theory and design for the past 30 years.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What four occupations does the 1991 page list for Denise Scott Brown?",
            options: [
              "Architect, planner, author, educator",
              "Draftsman, model maker, photographer and lecturer on the history of the profession",
              "Engineer, contractor, project manager and specification writer for the practice",
              "Critic, curator, exhibition designer and editor of the firm's published writing",
            ],
            correctIndex: 0,
            explanation:
              "The sentence introducing her reads that she is an architect, planner, author, and educator.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What phrase does the 1991 jury citation use for Denise Scott Brown?",
            options: [
              "His talented partner",
              "An associate of the office who contributed to the theoretical writings only",
              "A co-laureate of the prize, named alongside him in the award itself",
              "The junior member of a practice whose direction he alone established",
            ],
            correctIndex: 0,
            explanation:
              "The citation credits his understanding of urban context as complemented by his talented partner, Denise Scott Brown.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "According to the jury citation, what did that complemented understanding of urban context result in?",
            options: [
              "Changing the course of architecture",
              "The founding of a new school of planning inside a university department",
              "A series of prizes awarded to the firm rather than to any individual",
              "A revision of the rules by which the prize itself selects its laureates",
            ],
            correctIndex: 0,
            explanation:
              "The citation says it has resulted in changing the course of architecture in this century.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What makes the 1991 laureate page unusual as evidence in a credit question?",
            options: [
              "Both halves sit on one page",
              "It was written years afterwards by a historian with access to the jury's minutes",
              "It contradicts itself, naming two laureates in one place and one in another",
              "It was published by a newspaper rather than by the body that made the decision",
            ],
            correctIndex: 0,
            explanation:
              "The naming and the not-awarding are on one page published by the institution that decided, so nothing has to be assembled from a later retelling.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Which claim does this course explicitly refuse to make?",
            options: [
              "That the jury judged his work wrongly",
              "That the prize named one laureate in 1991 rather than two",
              "That the citation mentions Denise Scott Brown by name at all",
              "That a firm partnership and a prize answer different questions",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in these documents supports a judgement about the quality of the laureate's work, and the course does not need one.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What does this course say about what the 1991 jury discussed?",
            options: [
              "No source it read says",
              "The jury's minutes were published in full alongside the citation that year",
              "A member of the jury later described the discussion in a signed article",
              "The 2013 letter reconstructs the discussion paragraph by paragraph",
            ],
            correctIndex: 0,
            explanation:
              "A course that guessed at the deliberation would be doing the exact thing it warns against.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Which course in this catalog teaches how a building comes to be credited to a firm?",
            options: [
              "The Name on the Door",
              "Who Signs the Print, whose subject is printmaking rather than buildings",
              "The Paper and the Prize, whose subject is a scientific publication",
              "Who Gets Named, which covers the general frame and no architecture at all",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 1 establishes that a building is credited to a firm and a firm is named after whoever owns it. This course starts one level up.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Which four kinds of document does this course read closely?",
            options: [
              "A citation, an account, a letter, a rule",
              "A contract, a building permit, a planning application and a court judgement",
              "A newspaper report, a memoir, a photograph and an oral history recording",
              "A patent, a licence, a professional register and an insurance schedule",
            ],
            correctIndex: 0,
            explanation:
              "A prize citation, an author's own published account, a refusal letter, and an award rule.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "How does the 1991 announcement describe the standing of the prize?",
            options: [
              "Architecture's highest award",
              "The only award in the profession open to practices as well as individuals",
              "The oldest continuously awarded honour in the history of the discipline",
              "An award given for a single building rather than for a body of work",
            ],
            correctIndex: 0,
            explanation:
              "The announcement calls it generally acknowledged as architecture's highest award.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "How does the 1991 announcement describe how Venturi identified himself?",
            options: [
              "As a Philadelphia architect",
              "As a theorist first and a practising architect only second",
              "As a planner whose work belongs to the discipline of urban design",
              "As the head of a partnership rather than as an individual designer",
            ],
            correctIndex: 0,
            explanation:
              "The sentence says he has always identified himself as a Philadelphia architect, but whose projects are international in scope.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What does the course mean by calling the single-name award the record rather than a gap?",
            options: [
              "The documents are complete",
              "That the missing pages of the jury's file were recovered and published later",
              "That a correction was issued by the prize and added to the same page",
              "That no institution has ever published anything about the 1991 decision",
            ],
            correctIndex: 0,
            explanation:
              "Nothing is hidden and nothing is contradictory. The naming and the award sit together, so the evidence is whole.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What is the risk of reconstructing a jury's deliberation from its citation?",
            options: [
              "It invents the evidence",
              "It takes longer than reading the citation and produces the same conclusion",
              "It is permitted only when the jury has published a dissenting opinion",
              "It makes the citation unusable for any other purpose afterwards",
            ],
            correctIndex: 0,
            explanation:
              "A citation states reasons a jury chose to publish. Treating it as a transcript manufactures a record that does not exist.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What should a learner be able to do with any of these documents by the end of the course?",
            options: [
              "Say what it establishes",
              "Estimate how many people signed the petition in the month it was launched",
              "Recite the full membership of every Pritzker jury since the prize began",
              "Predict which architects will receive the award in coming years",
            ],
            correctIndex: 0,
            explanation:
              "Say what it establishes, what it merely asserts, and what it is silent about.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Who published the 1991 jury citation quoted in lesson 1?",
            options: [
              "The prize itself",
              "A trade magazine that obtained it from a member of the jury",
              "The firm, in a press release issued on the day of the announcement",
              "A university archive that acquired the jury's papers decades later",
            ],
            correctIndex: 0,
            explanation:
              "The citation is published by the Pritzker Architecture Prize on its own site, which is why it counts as the institution's own words.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What word does the 1991 page use for Scott Brown's relationship to the evolution of architectural theory and design?",
            options: [
              "Collaborator",
              "Assistant, working under the direction of the named laureate of that year",
              "Student, since the page dates their acquaintance to her time in education",
              "Commentator, describing the theory rather than taking part in its development",
            ],
            correctIndex: 0,
            explanation:
              "The page says she has been his collaborator in the evolution of architectural theory and design for the past 30 years.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Which of the three words the 1991 page uses for Scott Brown is a checkable claim about a business?",
            options: [
              "Partner in the firm",
              "Wife, which is the first description the page offers of her",
              "Collaborator in the evolution of architectural theory and design",
              "Educator, which appears in the list of her four occupations",
            ],
            correctIndex: 0,
            explanation:
              "An ownership stake either exists or does not, and the year can be confirmed or refuted from a firm's own records.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "Which word on the 1991 page places Scott Brown by reference to the laureate?",
            options: [
              "Wife",
              "Planner, which is one of the four occupations the page lists for her",
              "Author, which links her to the books rather than to the buildings",
              "Principal, which is how a different organisation describes her role",
            ],
            correctIndex: 0,
            explanation:
              "The sentence introducing her opens with Robert Venturi's wife, so the relationship is the first thing said about her.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "Which of the three words is an evaluative claim rather than a record?",
            options: [
              "Collaborator in a theory",
              "Partner in the firm since 1969, which is dated to a specific year",
              "Wife, which describes a legal relationship registered by a public authority",
              "Architect, which is a title regulated by a licensing board in every state",
            ],
            correctIndex: 0,
            explanation:
              "It is a judgement about intellectual contribution, and that is the kind of claim a jury exists to make.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "Which three names does the 1991 page give for Learning from Las Vegas?",
            options: [
              "Venturi, Scott Brown and Izenour",
              "Venturi, Scott Brown and Rauch, matching an earlier version of the firm name",
              "Venturi alone, with the other contributors named only in the acknowledgements",
              "Scott Brown and Izenour, with Venturi credited as the editor of the volume",
            ],
            correctIndex: 0,
            explanation:
              "The page reports that Robert Venturi, Denise Scott Brown and Steven Izenour collaborated on the 1972 book.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "In what year does the 1991 page say Learning from Las Vegas was published?",
            options: [
              "1972",
              "1966, the year of the earlier book the citation singles out for praise",
              "1969, the year the page dates the start of the firm partnership",
              "1989, when the essay on attribution and the star system reached print",
            ],
            correctIndex: 0,
            explanation:
              "The page describes it as another book, published in 1972.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What does a three-name book credit beside a one-name prize on the same page demonstrate?",
            options: [
              "Formats differ in purpose",
              "That the prize jury had not read the book before reaching its decision",
              "That the publisher and the prize disagreed about who did the design work",
              "That one of the two credits must contain a factual error requiring correction",
            ],
            correctIndex: 0,
            explanation:
              "The difference is in what each format is for, not in who did the work.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "How does The Cultural Landscape Foundation describe the firm's principals?",
            options: [
              "Venturi and Scott Brown",
              "A rotating group of senior associates with no single named head",
              "Venturi alone, with Scott Brown described as a consulting planner",
              "The surviving partners of a practice that has since been dissolved",
            ],
            correctIndex: 0,
            explanation:
              "Its entry says the firm's principals are Robert Venturi and Denise Scott Brown.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What does The Cultural Landscape Foundation say the firm was formerly known as?",
            options: [
              "Venturi, Rauch and Scott Brown",
              "Venturi and Associates, before any partner's name was added to it",
              "The Philadelphia Planning Office, before it became an architectural practice",
              "Scott Brown, Izenour and Venturi, in the order the book credits run",
            ],
            correctIndex: 0,
            explanation:
              "Its entry describes the practice as formerly known as Venturi, Rauch and Scott Brown.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "Why does this course decline to print the years in which the firm's name changed?",
            options: [
              "The archive page would not open",
              "Because the firm has asked that its earlier names not be repeated anywhere",
              "Because the dates are disputed between two institutions that both published them",
              "Because the name changes happened after the period this course covers",
            ],
            correctIndex: 0,
            explanation:
              "The page that would settle the dates returned an error, and a date repeated from a search summary is not a date.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What question is a firm name built to answer?",
            options: [
              "Who owns and who is liable",
              "Which individual drew the largest share of a given building's design",
              "Which employees were present in the office when a commission was won",
              "Whom a jury of outside experts considers the most accomplished designer",
            ],
            correctIndex: 0,
            explanation:
              "A firm name is a fact about ownership and responsibility, which is why it cannot settle an authorship question on its own.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What question is a prize built to answer?",
            options: [
              "Whom a jury chose",
              "Which building in a given year attracted the most published commentary",
              "Who holds the controlling ownership stake in the practice being honoured",
              "Which members of a design team were named on the construction drawings",
            ],
            correctIndex: 0,
            explanation:
              "The prize records a decision, so it is evidence about the decision and not about the work's authorship.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What question is a jury citation built to answer?",
            options: [
              "Why the jury chose",
              "How many votes each candidate received in the final round of selection",
              "Which of the candidates the jury considered and then set aside",
              "What the prize's founding purpose said at the time it was established",
            ],
            correctIndex: 0,
            explanation:
              "A citation states published reasons, which is why it can credit people the award itself does not name.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What should you establish about a credit line before reading it for content?",
            options: [
              "Which question it answers",
              "How many people were working in the office during the year it was issued",
              "Whether the person named has received other awards for the same work",
              "Whether the institution issuing it still exists in its original form",
            ],
            correctIndex: 0,
            explanation:
              "Only once you know which question the format was built to answer can you say whether an omission is an error.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "When is a name missing from a credit line actually an error?",
            options: [
              "When the format was meant to hold it",
              "Whenever the person left out can show they worked on the project at all",
              "Whenever a later institution issues a different credit for the same work",
              "Whenever the omission was noticed by more than one published critic",
            ],
            correctIndex: 0,
            explanation:
              "A format that answers a narrow question is not in error for failing to answer a wider one.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What kind of evidence could confirm or refute the claim that she was a partner from 1969?",
            options: [
              "A firm's own records",
              "The recollection of a critic who reviewed the practice's work at the time",
              "The order in which names appear on the jacket of a published book",
              "The wording of a prize citation written more than twenty years afterwards",
            ],
            correctIndex: 0,
            explanation:
              "An ownership stake and its date are the kind of claim paperwork settles, which is what makes it the sturdiest of the three descriptions.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What does a book jacket credit answer?",
            options: [
              "Who wrote it",
              "Which author contributed the largest number of pages to the finished volume",
              "Which of the authors the publisher expected to sell the most copies",
              "Who holds the copyright in the photographs reproduced inside the book",
            ],
            correctIndex: 0,
            explanation:
              "It is a format for authorship, which is why it could carry three names on the same page where the prize carried one.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What is the difference between a registry and a prize?",
            options: [
              "A registry records, a prize chooses",
              "A registry is published annually while a prize may be awarded at any time",
              "A registry is compiled by a government and a prize by a private foundation",
              "A registry lists buildings and a prize lists only the people who financed them",
            ],
            correctIndex: 0,
            explanation:
              "A registry tries to record what happened. A prize makes a choice against a stated purpose, by people who meet and decide.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "In the Pritzker's current purpose wording, which word restricts who is eligible?",
            options: [
              "Living",
              "Built, which excludes any project that was designed but never constructed",
              "Demonstrates, which requires the qualities to be visible to the public",
              "Honor, which limits the award to architects already honoured elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "The current wording is to honor a living architect or architects whose built work demonstrates the qualities sought.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Which phrase in the current purpose wording permits more than one name?",
            options: [
              "Architect or architects",
              "Whose built work, which covers everything a practice has completed together",
              "Generally acknowledged, which allows the jury to follow published opinion",
              "Total body of work, which is the standard the 2013 letter names",
            ],
            correctIndex: 0,
            explanation:
              "The plural is a permission, which is what makes the number of names in any single year a question worth asking.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Why does this course refuse to claim that the purpose wording was the same in 1991?",
            options: [
              "It did not read the 1991 text",
              "Because the prize has confirmed that the wording was rewritten in the 1990s",
              "Because the current page carries a note saying the wording changed in 2002",
              "Because two institutions publish different versions of the same sentence",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes the wording as it stands today and labels it current, because the wording in force in 1991 is not established.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Which lesson in this catalog holds the nearest case of a prize whose rule caps its names?",
            options: [
              "The Paper and the Prize, lesson 5",
              "The Name on the Door, lesson 1, on the credited unit being a firm",
              "Who Signs the Print, lesson 22, on two corrections that actually happened",
              "Who Gets Named, lesson 9, on the second mechanism a historian identified",
            ],
            correctIndex: 0,
            explanation:
              "A scientist named on the paper and a prize that named others, where the prize's own rule limits how many people it may name.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What is the narrower and answerable question this course asks about 1991?",
            options: [
              "What determined the number of names",
              "Whether the jury had access to the firm's ownership documents that year",
              "Whether the citation was written before or after the laureate was chosen",
              "Whether the prize should be abolished and replaced with a firm-level award",
            ],
            correctIndex: 0,
            explanation:
              "Given a format that permits more than one name, what determined that this year carried one. Section 4 works on it with the prize's own list.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Which question does this course say cannot be settled from documents?",
            options: [
              "Whether she was good enough",
              "Whether the prize's current purpose wording permits more than one name",
              "Whether the 2013 jury chair signed the refusal letter on behalf of a jury",
              "Whether the prize has ever named more than one laureate in a single year",
            ],
            correctIndex: 0,
            explanation:
              "A judgement of merit is not the kind of thing a citation, a list or a letter can answer, and the course does not pretend otherwise.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What remedy for firm credit does The Name on the Door, lesson 19, offer?",
            options: [
              "Own the firm",
              "Insist that every drawing carry the name of the designer who produced it",
              "Refuse commissions from clients who will not credit the whole design team",
              "Petition the professional institute to rewrite its code of ethics",
            ],
            correctIndex: 0,
            explanation:
              "If the credit belongs to whoever owns the firm, one answer is obvious: own the firm. That lesson opens with exactly that sentence.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Why does this case test that remedy?",
            options: [
              "She did own the firm",
              "Because the firm never carried the name of more than one of its partners",
              "Because the practice was dissolved before the prize was announced",
              "Because the remedy was proposed only after the 2013 petition was written",
            ],
            correctIndex: 0,
            explanation:
              "The prize's own page dates her partnership to 1969 and the firm carried her name, so the remedy was already in place.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Why did owning the firm not settle what the prize would name?",
            options: [
              "A prize is not a property record",
              "Because the prize requires proof of ownership filed before the closing date",
              "Because ownership stakes are confidential and juries cannot obtain them",
              "Because the firm's ownership changed in the year the prize was decided",
            ],
            correctIndex: 0,
            explanation:
              "Owning the door answers who owns the practice. A prize answers whom a jury chose, which is a different question entirely.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What is the two-directional error lesson 3 warns about?",
            options: [
              "Treating a prize as proof",
              "Assuming a jury citation was written by somebody outside the jury",
              "Reading a firm name as a list of everyone employed by the practice",
              "Confusing a book credit with the order in which chapters were drafted",
            ],
            correctIndex: 0,
            explanation:
              "Treating a prize as proof that someone did the work, and treating its absence as proof that they did not.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "A credit line is evidence about what?",
            options: [
              "The thing it records",
              "Everything that happened inside the practice during the year it was issued",
              "The relative standing of the people named and the people left out",
              "The quality of the work, as judged by the profession as a whole",
            ],
            correctIndex: 0,
            explanation:
              "A credit line is only evidence about the thing it was designed to record, and a prize was designed to record a choice.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What does the Pritzker's current purpose wording say about how many people it may name?",
            options: [
              "It sets no limit",
              "It restricts the award to a maximum of three individuals in any one year",
              "It allows two names only when both hold equal stakes in one practice",
              "It requires the award to name a practice rather than any individual",
            ],
            correctIndex: 0,
            explanation:
              "The wording says architect or architects and contains no cap, unlike some other awards whose rules limit the count.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What does the absence of a prize prove about a person's contribution?",
            options: [
              "Nothing",
              "That a jury considered the contribution and found it insufficient that year",
              "That no institution has yet published a record of the contribution",
              "That the contribution belongs to a firm rather than to an individual",
            ],
            correctIndex: 0,
            explanation:
              "Treating the absence of a prize as proof that someone did not do the work is the same error as treating its presence as proof that they did.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Who decides how many names an award can carry?",
            options: [
              "The granting body",
              "The candidates, who may request a joint award when they apply together",
              "The professional institute that licenses architects in the relevant country",
              "The press, by convention, following whichever wording it prints first",
            ],
            correctIndex: 0,
            explanation:
              "Some awards cap the number of people by rule and some do not. The format is set by the institution granting it.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What does lesson 3 mean by a registry?",
            options: [
              "A record of what happened",
              "A published list of everyone licensed to practise in a given jurisdiction",
              "A catalogue of buildings maintained by the institution that commissioned them",
              "An index of prize citations kept by the body that awards them",
            ],
            correctIndex: 0,
            explanation:
              "A registry tries to record what happened, which is precisely what a prize does not do.",
            sourceLessonSlug: "what-a-prize-names",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Her own account, and how to read testimony
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "room-at-the-top",
      title: "5 · A talk in 1973, an article in 1975, a publication in 1989",
      section: "Section 2 · Her own account, and how to read testimony",
      body: `Sixteen years before the prize, Denise Scott Brown wrote down what she thought was happening to credit in her profession. Then she put it in a drawer.

The essay is "Room at the Top? Sexism and the Star System in Architecture". It opens: "In 1973 I gave a talk on sexism and the star system to the Alliance of Women in Architecture in New York City" (Scott Brown, 1989). At the end it says: "The foregoing is an abridgement of an article I wrote in 1975" (Scott Brown, 1989).

It was first published in Berkeley and McQuaid's collection *Architecture: A Place for Women* in 1989, and reprinted in *AA Words Four: Having Words* in 2009. The version read for this course is the reprint published by *MAS Context*, which carries that source note.

**Why she held it back, in her own words:** "I decided not to publish it at the time, because I judged that strong sentiments on feminism in the world of architecture would ensure my ideas a hostile reception, which could hurt my career and the prospects of my firm" (Scott Brown, 1989).

**Read that sentence precisely, because it is easy to over-read.** It is direct evidence of one thing: what she judged the cost of publishing would be, in 1975, and that the judgement was strong enough to delay her by more than a decade. It is not evidence that the cost would in fact have been paid. Nobody can run the experiment. A person's assessment of a professional risk is a fact about that person's assessment, and it is a serious fact, but it is not a finding about the profession.

**That distinction is the whole method of this section.** An author's own published account is called testimony. It is first-hand, which is its strength, and it is interested, which is its limit. The honest use of testimony is to say exactly what it is evidence of and to mark it as testimony every time.

**What this course treats as established by the essay:** that she wrote it, when she wrote it, when it was published, and what it says. All four are visible in the printed text.

**What this course does not treat as established by it:** that each episode inside it happened as told. For that you would go to the artefacts the essay names, and lesson 6 shows what that looks like.

**And the reason the essay matters here at all** is chronology. It was written in 1975 and published in 1989. The Pritzker was awarded in 1991. So her account of how architectural credit gets assigned is not a reaction to the prize. It predates it, which makes it a description rather than a complaint about an outcome.

:::reveal What is the 1975 essay direct evidence of, and what is it not? ||| It is direct evidence of what she judged the cost of publishing would be, and of the fact that the judgement delayed her by more than a decade. It is not evidence that the cost would in fact have been paid.

:::reveal Why does the chronology of the essay matter for this course? ||| It was written in 1975 and published in 1989, before the 1991 prize, so her account of how credit gets assigned is a description rather than a reaction to that decision.

## Vocabulary
- **Testimony**: a first-hand account by an interested party, strong on what the person experienced and limited by the fact that they are a party to it.
- **Abridgement**: a shortened version of a longer text, which is what the published essay says it is of the 1975 article.
- **Star system**: the phrase her 1973 talk used for the practice of attaching a body of collaborative work to one celebrated name.
- **Over-reading**: taking a source to establish more than it says, such as treating a person's risk assessment as proof that the risk was real.

## Sources
Scott Brown, D. (1989). Room at the top? Sexism and the star system in architecture. In Berkeley & McQuaid (Eds.), *Architecture: A place for women* (pp. 237-246). Smithsonian Institution Press. Reprinted by *MAS Context*. https://mascontext.com/issues/debate/room-at-the-top-sexism-and-the-star-system-in-architecture`,
    },
    {
      slug: "two-episodes-she-records",
      title: "6 · Two episodes she records, and how to check them",
      section: "Section 2 · Her own account, and how to read testimony",
      body: `The essay does not argue in the abstract. It names specific publications and what they printed, which is the most checkable form testimony can take, because each claim points at an artefact somebody else can go and read.

**Episode one: a journal attributed her project to him.** She writes that in the Japanese journal *Architecture and Urbanism*, a critic discussed a plan for the Crosstown Community as evidence of the laureate's own theory of city planning, and then adds her own correction: "This would be fine except that the Crosstown Community was my work and was attributed as such in our book" (Scott Brown, 1989).

Notice the structure of her reply. She does not say the critic invented anything. She says the attribution in the book was already correct, and the journal printed something else. That is a claim with two documents behind it, the book and the journal issue, and either one can be checked.

**Episode two: a publisher left her off a jacket.** "When Praeger published a series of interviews with architects, my name was omitted from the dust jacket. We complained and Praeger added my name, although objecting that this would spoil the cover design. On the inside flap, however, 'eight architects' and 'the men behind' modern architecture were mentioned. As nine were listed in the front, I gather I am still left out" (Scott Brown, 1989).

Three separate things happen in that paragraph. A name is left off. A complaint produces a correction. And the correction does not reach the flap copy, where a count and a phrase still describe a group she is not in. The last part is the one worth keeping, because it is what a partial correction looks like from the inside: the visible surface is fixed and the rest of the object still says the old thing.

**What neither episode is.** Neither is an accusation against the firm. A journal editor, a critic and a publisher's copywriter each made an attribution decision that the firm did not control and, in the publisher's case, actively contested. Whatever the mechanism is here, it is not one person taking something.

**How you would verify these.** Find the issue of the journal and read the article. Find the Praeger volume and read the jacket and the flap. This course did neither, so it presents both episodes as her account and says so. That is the difference between citing testimony and laundering it into fact.

:::reveal What makes her account of the journal episode more checkable than a general complaint? ||| It names two artefacts, the book that attributed the work to her and the journal that printed a different attribution, so a reader can go and read both.

:::reveal What does the Praeger episode show about partial corrections? ||| The visible surface was fixed when her name was added to the jacket, while the flap copy still described a group she was not counted in, so part of the object kept saying the old thing.

## Vocabulary
- **Artefact**: the physical or published object a claim points at, such as a journal issue or a book jacket, which is what makes the claim checkable.
- **Partial correction**: a fix applied to one surface of a work while another surface continues to carry the original error.
- **Attribution decision**: a choice made by a publisher, editor or critic about whose name goes on a description of work, which the people who did the work often do not control.
- **Laundering**: presenting testimony as established fact by dropping the attribution, which this course avoids by naming the source every time.

## Sources
Scott Brown, D. (1989). Room at the top? Sexism and the star system in architecture. In Berkeley & McQuaid (Eds.), *Architecture: A place for women* (pp. 237-246). Smithsonian Institution Press. Reprinted by *MAS Context*. https://mascontext.com/issues/debate/room-at-the-top-sexism-and-the-star-system-in-architecture`,
    },
    {
      slug: "the-information-sheet",
      title: "7 · The information sheet, and what a policy cannot reach",
      section: "Section 2 · Her own account, and how to read testimony",
      body: `The essay contains one detail that belongs in any practical course on credit, because it is a procedure rather than a grievance.

"To avoid misattributions, our office provides an information sheet describing our preferred forms of attribution" (Scott Brown, 1989). The sheet asked for two different things: the work credited to the firm, and the writing credited to whoever signed it.

**A fidelity note, printed rather than tidied away.** In the reprint read for this course, the sentence continues "the person who signed the article or the nook". That last word is almost certainly a typographical error for "book", and this course does not silently repair it. Where a source is garbled, say so and quote up to the part that is unambiguous. Quietly fixing a source is how small inventions enter a record, and once one is in, a later reader cannot tell which words were the author's.

**Now the substance.** The firm wrote down an attribution policy and handed it out. That is exactly the remedy most people propose when they hear a credit story: be clear about who did what, in writing, in advance. And the essay shows what such a policy can and cannot do.

It can bind the firm. It cannot bind a critic, a journal, a publisher's marketing department or a prize jury. Every one of those is a separate party with its own format, its own purpose and its own editorial control. An attribution policy is a request addressed to people who have no obligation to honour it.

**That is the same shape as the firm lesson, one level up.** *The Name on the Door*, lesson 1, teaches that the credited unit for a building is the firm. The information sheet accepts that convention and asks the outside world to follow it. The episodes in lesson 6 are what happens when the outside world does not.

**One more sentence from the essay, and a discipline about how to use it.** "I watched as he was manufactured into an architectural guru before my eyes and, to some extent, on the basis of our joint work and the work of our firm" (Scott Brown, 1989).

The verb is *manufactured*, and it has no named subject. She does not say who did it, and neither does this course. The rule, which holds everywhere in this catalog, is to say what the record shows and not a motive it does not show. The record here shows publications printing one name. It does not show anyone taking anything.

:::reveal What can an attribution policy bind, and what can it not? ||| It can bind the firm that writes it. It cannot bind a critic, a journal, a publisher or a prize jury, each of which is a separate party with its own format and editorial control.

:::reveal Why does this course print the garbled word in the reprint instead of correcting it? ||| Because quietly repairing a source is how small inventions enter a record, and a later reader would not be able to tell which words were the author's.

## Vocabulary
- **Attribution policy**: a written statement of how a practice asks its work and writing to be credited, which is a request rather than a binding rule.
- **Editorial control**: the power a publication holds over what it prints, which is why an outside party can ignore a firm's preferred credit.
- **Fidelity**: quoting a source as it stands, including its errors, and flagging them rather than repairing them.
- **Unnamed subject**: a verb with no actor attached, as in the sentence about being manufactured into a guru, which the course reports without supplying a culprit.

## Sources
Scott Brown, D. (1989). Room at the top? Sexism and the star system in architecture. In Berkeley & McQuaid (Eds.), *Architecture: A place for women* (pp. 237-246). Smithsonian Institution Press. Reprinted by *MAS Context*. https://mascontext.com/issues/debate/room-at-the-top-sexism-and-the-star-system-in-architecture`,
    },
    {
      slug: "quiz-her-own-account",
      title: "8 · Knowledge check: her own account",
      section: "Section 2 · Her own account, and how to read testimony",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long did she delay publication of the article she wrote in 1975?",
            options: [
              "More than a decade",
              "A few months, while the collection she contributed to was assembled",
              "Two years, until the firm had completed the project she describes",
              "She did not delay it, since it appeared in the year it was written",
            ],
            correctIndex: 0,
            explanation:
              "Written in 1975 and first published in 1989, which is what makes her stated reason a serious fact about her judgement.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What does lesson 7 say the information sheet is an example of?",
            options: [
              "A procedure, not a grievance",
              "A contract binding every publisher that receives a copy of it",
              "A complaint made to a professional body about a misattribution",
              "A correction issued after a credit line had already been printed",
            ],
            correctIndex: 0,
            explanation:
              "It is the remedy most people propose when they hear a credit story, written down and handed out, which is why its limits are instructive.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "In what year does the essay say she gave her talk on sexism and the star system?",
            options: [
              "1973",
              "1991, in the weeks following the announcement of that year's prize",
              "1989, on the occasion of the essay's first appearance in print",
              "2013, at the London lunch where a videotaped interview was broadcast",
            ],
            correctIndex: 0,
            explanation:
              "The essay opens by saying that in 1973 she gave a talk on sexism and the star system.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "To whom, and where, was that talk given?",
            options: [
              "The Alliance of Women in Architecture, New York",
              "The American Institute of Architects at its annual convention in Detroit",
              "The Harvard Graduate School of Design, at a lunch honouring women",
              "The Pritzker jury, in a submission made on behalf of the firm",
            ],
            correctIndex: 0,
            explanation:
              "The sentence names the Alliance of Women in Architecture in New York City.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "The published essay describes itself as an abridgement of an article written in which year?",
            options: [
              "1975",
              "1969, the year the prize's page dates the start of the firm partnership",
              "1972, the year of the three-author book the prize's page mentions",
              "1988, the year immediately before the collection appeared",
            ],
            correctIndex: 0,
            explanation:
              "The closing note says the foregoing is an abridgement of an article she wrote in 1975.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "In what year was the essay first published?",
            options: [
              "1989",
              "1975, immediately after she finished writing the longer article",
              "2009, when it appeared in a collection of her assembled writings",
              "1991, alongside the announcement of that year's architecture prize",
            ],
            correctIndex: 0,
            explanation:
              "It first appeared in Berkeley and McQuaid's collection in 1989, more than a decade after it was written.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "In which collection did the essay first appear?",
            options: [
              "Architecture: A Place for Women",
              "Learning from Las Vegas, the book the prize's own page describes",
              "Complexity and Contradiction in Architecture, the 1966 theoretical work",
              "Pioneering Women of American Architecture, a later biographical project",
            ],
            correctIndex: 0,
            explanation:
              "The source note gives Berkeley and McQuaid's Architecture: A Place for Women, published by Smithsonian Institution Press.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Who edited the collection in which the essay first appeared?",
            options: [
              "Berkeley and McQuaid",
              "Venturi and Izenour, who are credited on the earlier Las Vegas book",
              "The editors of the Japanese journal that printed the disputed attribution",
              "The publisher Praeger, in the interview series she describes elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "The reprint's source note names Berkeley and McQuaid as the editors.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Where does the source note say the essay was reprinted in 2009?",
            options: [
              "AA Words Four: Having Words",
              "Architecture and Urbanism, the Japanese journal named in the essay",
              "The proceedings of the Alliance of Women in Architecture talk series",
              "A Smithsonian Institution Press anthology of postwar planning essays",
            ],
            correctIndex: 0,
            explanation:
              "The note gives AA Words Four: Having Words, pages 79 to 89, as the 2009 reprint.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Which reprint of the essay did this course read?",
            options: [
              "The one published by MAS Context",
              "A scanned copy of the 1975 typescript held in a university archive",
              "The Smithsonian Institution Press first edition of the 1989 collection",
              "An abridged version printed by a trade magazine in June 2013",
            ],
            correctIndex: 0,
            explanation:
              "The MAS Context reprint, which carries the source note giving the original publication details.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Why does she say she decided not to publish the article when she wrote it?",
            options: [
              "She judged the reception would be hostile",
              "Because her firm's partners asked her to withdraw it before it went to press",
              "Because the journal that had commissioned it declined to run the piece",
              "Because she intended to expand it into a book and never found the time",
            ],
            correctIndex: 0,
            explanation:
              "She judged that strong sentiments on feminism in the world of architecture would ensure her ideas a hostile reception.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What did she say that hostile reception could hurt?",
            options: [
              "Her career and her firm's prospects",
              "The standing of the Alliance of Women in Architecture among practitioners",
              "The sales of the books the firm had already published with a trade press",
              "The chances of the collection finding an academic publisher at all",
            ],
            correctIndex: 0,
            explanation:
              "The sentence reads that it could hurt her career and the prospects of her firm.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What is the 1975 essay direct evidence of?",
            options: [
              "Her own judgement of the risk",
              "The decisions taken by publishers about her name in the years that followed",
              "The reception her ideas would in fact have met had she published them",
              "The reasons the 1991 jury gave for naming a single laureate",
            ],
            correctIndex: 0,
            explanation:
              "It establishes what she judged the cost would be, and that the judgement was strong enough to delay her by more than a decade.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What is the essay not evidence of?",
            options: [
              "That the cost would have been paid",
              "That she wrote the article in 1975 and published it fourteen years later",
              "That she considered the professional risk serious enough to act on",
              "That the essay describes a practice she called the star system",
            ],
            correctIndex: 0,
            explanation:
              "Nobody can run the experiment. A person's assessment of a professional risk is a fact about that assessment.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What does this course mean by testimony?",
            options: [
              "A first-hand account by an interested party",
              "A statement given under oath before a tribunal with the power to compel it",
              "A neutral finding published by an institution with no stake in the outcome",
              "A summary of events assembled by a historian long after they happened",
            ],
            correctIndex: 0,
            explanation:
              "First-hand, which is its strength, and interested, which is its limit.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What does this course treat the essay as establishing?",
            options: [
              "That she wrote it, and what it says",
              "That every publisher named in it acted with an intent to exclude her",
              "That the profession as a whole would have punished her for publishing",
              "That the 1991 jury had read it before reaching its decision",
            ],
            correctIndex: 0,
            explanation:
              "That she wrote it, when she wrote it, when it was published, and what it says. All four are visible in the printed text.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What does this course decline to treat the essay as establishing?",
            options: [
              "That each episode happened as told",
              "That the essay was first published in a 1989 collection of essays",
              "That the author describes a practice she names the star system",
              "That she delayed publication by more than a decade",
            ],
            correctIndex: 0,
            explanation:
              "For that you would go to the artefacts the essay names, which is what the next lesson works through.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Why does the chronology of the essay matter to this course?",
            options: [
              "It predates the 1991 prize",
              "Because it was written after the petition and so responds directly to it",
              "Because it was published in the same month the jury announced its choice",
              "Because the firm was renamed in the year the essay finally appeared",
            ],
            correctIndex: 0,
            explanation:
              "Written in 1975 and published in 1989, so her account of how credit gets assigned is a description rather than a reaction to the award.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What does this course call taking a source to establish more than it says?",
            options: [
              "Over-reading",
              "Corroboration, which is confirming a claim against a second institution",
              "Abridgement, which is shortening a longer argument for publication",
              "Attribution, which is the assignment of a credit to a named person",
            ],
            correctIndex: 0,
            explanation:
              "Such as treating a person's risk assessment as proof that the risk was real.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What system does the essay's title name?",
            options: [
              "The star system",
              "The firm system, under which only a principal may sign a drawing",
              "The jury system, under which a panel selects a single annual laureate",
              "The licensing system, which gates who may be an architect of record",
            ],
            correctIndex: 0,
            explanation:
              "Its title is Room at the Top? Sexism and the Star System in Architecture.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "In which journal does she say the Crosstown Community was discussed as evidence of his theory?",
            options: [
              "Architecture and Urbanism",
              "Architectural Record, the American trade magazine that covered the petition",
              "MAS Context, which later reprinted the essay in full",
              "AA Words Four, the collection that carried the 2009 reprint",
            ],
            correctIndex: 0,
            explanation:
              "She names the Japanese journal Architecture and Urbanism and quotes the passage before correcting it.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does she say about the Crosstown Community itself?",
            options: [
              "It was her work",
              "That it was a joint project on which the two partners spent equal time",
              "That it was designed by an associate and credited to the firm as a whole",
              "That it was never built and so should not have been discussed at all",
            ],
            correctIndex: 0,
            explanation:
              "Her correction reads that the Crosstown Community was her work and was attributed as such in their book.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "Where does she say the Crosstown Community had already been attributed to her?",
            options: [
              "In their book",
              "On the drawings filed with the city planning authority at the time",
              "In the firm's information sheet on preferred forms of attribution",
              "In the Pritzker citation published by the prize many years later",
            ],
            correctIndex: 0,
            explanation:
              "She writes that it was attributed as such in our book, which is what makes the journal's different attribution checkable.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "How many documents stand behind her claim about the journal episode?",
            options: [
              "Two",
              "None, since her account is the only record of what either publication said",
              "Five, counting each of the publications the essay mentions anywhere",
              "One, which is the essay itself as reprinted by MAS Context",
            ],
            correctIndex: 0,
            explanation:
              "The book that attributed the work to her and the journal issue that printed something else. Either can be checked.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "Which publisher does she say left her name off a dust jacket?",
            options: [
              "Praeger",
              "Smithsonian Institution Press, which published the collection in 1989",
              "The Architectural Association, which issued the 2009 reprint",
              "The Hyatt Foundation, which publishes the prize's own materials",
            ],
            correctIndex: 0,
            explanation:
              "She describes a Praeger series of interviews with architects from whose dust jacket her name was omitted.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does she say happened after the complaint about the jacket?",
            options: [
              "Praeger added her name",
              "The publisher withdrew the volume and reissued it under a different title",
              "The publisher refused and the jacket was printed without her name",
              "The firm bought the remaining stock and reprinted the jacket itself",
            ],
            correctIndex: 0,
            explanation:
              "She writes that they complained and Praeger added her name, while objecting to the effect on the design.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What objection does she say the publisher raised to adding her name?",
            options: [
              "That it would spoil the cover design",
              "That the interviews inside the book had been conducted with him alone",
              "That the book was already printed and could not economically be changed",
              "That the series had a standing rule against listing more than eight names",
            ],
            correctIndex: 0,
            explanation:
              "Her account says Praeger added the name although objecting that this would spoil the cover design.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does she say the inside flap of that book still said?",
            options: [
              "Eight architects, and the men behind",
              "That the volume collected the work of a single Philadelphia practice",
              "That the interviews had been edited by the architects themselves",
              "That the list of contributors was provisional and subject to correction",
            ],
            correctIndex: 0,
            explanation:
              "The flap mentioned eight architects and the men behind modern architecture, while nine were listed in the front.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "How many people does she say were listed in the front of that book?",
            options: [
              "Nine",
              "Eight, which is the same figure the inside flap copy used",
              "Three, matching the author credit on the earlier Las Vegas book",
              "Seven, before her name was added at the firm's request",
            ],
            correctIndex: 0,
            explanation:
              "Nine were listed in the front while the flap said eight, which is how she concludes she is still left out.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does the Praeger episode illustrate about corrections?",
            options: [
              "A partial correction",
              "That a publisher will always refuse a request to change a printed book",
              "That a complaint about a credit line is never acted on in practice",
              "That corrections are more effective when made by an outside institution",
            ],
            correctIndex: 0,
            explanation:
              "The visible surface was fixed and the rest of the object still said the old thing.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "Who made the attribution decisions in the two episodes she records?",
            options: [
              "A journal and a publisher",
              "The firm's own partners, applying the practice's internal credit policy",
              "The prize jury, in the citation it published for that year's laureate",
              "A licensing board, which recorded who was architect of record",
            ],
            correctIndex: 0,
            explanation:
              "A critic writing in a journal and a publisher's cover and flap copy, neither of which the firm controlled.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does lesson 6 say neither episode is?",
            options: [
              "An accusation against the firm",
              "A claim that can be checked against a published artefact by a reader",
              "An example of a credit decision made outside the practice itself",
              "A case in which a complaint produced at least a partial correction",
            ],
            correctIndex: 0,
            explanation:
              "Outside parties made the decisions, and in the publisher's case the firm actively contested one of them.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "How would a reader verify the journal episode for themselves?",
            options: [
              "Read the issue and the book",
              "Ask the firm to supply its internal file on the project in question",
              "Compare the prize citation of 1991 with the jury citation of 2013",
              "Consult the licensing board's record of who was architect of record",
            ],
            correctIndex: 0,
            explanation:
              "Find the issue of the journal and read the article, then find the book and read its attribution.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What did this course do about verifying the two episodes?",
            options: [
              "It did not verify them",
              "It obtained both artefacts and confirmed each detail against them",
              "It asked the publisher to confirm the wording of the flap copy",
              "It relied on a second author who had examined the same journal issue",
            ],
            correctIndex: 0,
            explanation:
              "Neither artefact was obtained, so both episodes are presented as her account and labelled as such.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does this course mean by laundering testimony?",
            options: [
              "Dropping the attribution",
              "Quoting a source at greater length than the argument actually requires",
              "Correcting an obvious typographical error before quoting a passage",
              "Citing a reprint rather than the first printed edition of a text",
            ],
            correctIndex: 0,
            explanation:
              "Presenting testimony as established fact by removing the attribution, which is why this course names the source every time.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "Why is testimony that names artefacts more useful than a general complaint?",
            options: [
              "Someone else can go and read them",
              "Because a named artefact makes the account more persuasive to a jury",
              "Because it shows the writer kept records at the time of the events",
              "Because publishers are obliged to preserve anything a critic has named",
            ],
            correctIndex: 0,
            explanation:
              "Each claim points at an object a reader can inspect, which is the most checkable form testimony can take.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What word does this course use for the object a claim points at?",
            options: [
              "An artefact",
              "A citation, which is the reference note pointing a reader to a source",
              "A registry, which is a record compiled to capture what happened",
              "A format, which is the shape a credit convention takes",
            ],
            correctIndex: 0,
            explanation:
              "The physical or published object a claim points at, such as a journal issue or a book jacket.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does she say the office handed out to avoid misattributions?",
            options: [
              "An information sheet",
              "A signed contract binding every publisher who covered the firm's work",
              "A press release issued whenever a project reached completion",
              "A list of approved critics permitted to write about the practice",
            ],
            correctIndex: 0,
            explanation:
              "She writes that to avoid misattributions their office provides an information sheet describing preferred forms of attribution.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "According to that sheet, how was the built work to be credited?",
            options: [
              "To the firm",
              "To whichever partner had spent the most time on the project",
              "To the individual who signed the drawings submitted for permit",
              "To the client, who commissioned and paid for the building",
            ],
            correctIndex: 0,
            explanation:
              "The sheet asked for the work to go to the firm and the writing to whoever signed it.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "According to that sheet, how was the writing to be credited?",
            options: [
              "To whoever signed it",
              "To the firm, on the same basis as the built work it described",
              "To the journal that commissioned and first published the piece",
              "To both partners jointly, regardless of who had drafted the text",
            ],
            correctIndex: 0,
            explanation:
              "The policy separated the two: the work to the firm, the writing to the person who signed the article.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Which word in the reprint does lesson 7 flag as garbled?",
            options: [
              "Nook",
              "Misattributions, which appears twice with different spellings in the text",
              "Guru, which the essay uses in an unusual and possibly mistaken sense",
              "Abridgement, which the source note spells in two different ways",
            ],
            correctIndex: 0,
            explanation:
              "The reprint reads the person who signed the article or the nook, almost certainly a typographical error for book.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Why does the course print the garbled word rather than repairing it?",
            options: [
              "Silent fixes let inventions into a record",
              "Because copyright rules forbid altering a single word of a quoted passage",
              "Because the author has asked that the reprint be quoted exactly as issued",
              "Because the correct word cannot be guessed from the surrounding sentence",
            ],
            correctIndex: 0,
            explanation:
              "Once a quiet repair is in, a later reader cannot tell which words were the author's.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What can an attribution policy bind?",
            options: [
              "The firm that writes it",
              "Every publication that reports on the firm's completed projects",
              "Any prize jury considering the firm's work for an award",
              "The critics whose reviews the firm agrees to cooperate with",
            ],
            correctIndex: 0,
            explanation:
              "It can bind the practice. Outside parties have their own formats, purposes and editorial control.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Which parties does lesson 7 say an attribution policy cannot bind?",
            options: [
              "Critics, journals, publishers and juries",
              "The employees of the practice that issued the policy in the first place",
              "The partners who signed the policy and circulated it to the press",
              "Anyone who has been sent a copy of the sheet and acknowledged it",
            ],
            correctIndex: 0,
            explanation:
              "Every one of them is a separate party with its own format, purpose and editorial control.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What kind of instrument is an attribution policy, in the end?",
            options: [
              "A request",
              "A contract enforceable against any publisher that receives a copy",
              "A licence condition attached to the use of the firm's project images",
              "A regulation issued by the professional body that governs practice",
            ],
            correctIndex: 0,
            explanation:
              "It is a request addressed to people who have no obligation to honour it.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Which lesson in the public architecture course establishes that the credited unit is a firm?",
            options: [
              "The Name on the Door, lesson 1",
              "Who Signs the Print, lesson 22, on two corrections that actually happened",
              "Who Gets Named, lesson 21, on who corrects a record and with what",
              "The Paper and the Prize, lesson 5, on the paper and the prize",
            ],
            correctIndex: 0,
            explanation:
              "The information sheet accepts that convention and asks the outside world to follow it.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Which verb does she use about the making of an architectural guru?",
            options: [
              "Manufactured",
              "Appointed, which would imply a body with the authority to make the choice",
              "Elected, which would imply a vote among the members of a profession",
              "Certified, which would imply a licensing board acting on an application",
            ],
            correctIndex: 0,
            explanation:
              "She writes that she watched as he was manufactured into an architectural guru before her eyes.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What is missing from that sentence about being manufactured into a guru?",
            options: [
              "A named subject",
              "A date, without which the episode cannot be placed in the chronology",
              "A citation, since the sentence appears in the reprint without attribution",
              "An object, since the sentence never says what he was manufactured into",
            ],
            correctIndex: 0,
            explanation:
              "The verb has no actor attached. She does not say who did it, and neither does this course.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What rule does this course follow about motive?",
            options: [
              "Say what the record shows",
              "Prefer the explanation that the largest number of published sources agree on",
              "Attribute a motive whenever the pattern of events makes one obvious",
              "Report the motive the person affected believed was at work",
            ],
            correctIndex: 0,
            explanation:
              "Say what the record shows and not a motive it does not show. The rule holds everywhere in this catalog.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What does the record in this section actually show?",
            options: [
              "Publications printing one name",
              "A coordinated decision by several institutions to promote one of the partners",
              "A firm policy that deliberately routed public credit to a single partner",
              "A jury that considered and rejected the possibility of a joint award",
            ],
            correctIndex: 0,
            explanation:
              "It shows publications printing one name. It does not show anyone taking anything.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What does lesson 7 mean by editorial control?",
            options: [
              "The power over what gets printed",
              "The right of an author to approve changes before a piece is published",
              "The authority of a professional body to discipline its own members",
              "The ability of a firm to withhold images from a publication",
            ],
            correctIndex: 0,
            explanation:
              "It is why an outside party can ignore a firm's preferred credit and print something else.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What does this course mean by fidelity to a source?",
            options: [
              "Quoting it as it stands",
              "Quoting only from first editions rather than from later reprints",
              "Citing every source in the same bibliographic style throughout",
              "Preferring the source closest in time to the events described",
            ],
            correctIndex: 0,
            explanation:
              "Including its errors, flagged rather than repaired, so a reader can tell which words were the author's.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What does the information sheet show about the common advice to write credits down in advance?",
            options: [
              "It reaches only the firm",
              "That it works whenever the document is circulated widely enough in advance",
              "That it is unnecessary once a practice is named after both of its partners",
              "That it binds a prize jury from the moment the jury receives a copy",
            ],
            correctIndex: 0,
            explanation:
              "The remedy most people propose was already in place here, and it could not reach the parties that print the credits.",
            sourceLessonSlug: "the-information-sheet",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The petition, and the refusal
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-2013-petition",
      title: "9 · The petition, and what a petition is evidence of",
      section: "Section 3 · The petition, and the refusal",
      body: `Twenty two years after the award, the question was put to the prize directly.

*Architectural Record* reported in April 2013 that students at the Harvard Graduate School of Design had launched a petition in the previous two weeks, and that the trigger was an interview: "Scott Brown sat down for a videotaped interview that was broadcast in London at an Architects' Journal lunch honoring women in architecture" (Mirviss, 2013). The petition, hosted on Change.org and started by the group Women In Design, is titled "Recognize Denise Scott Brown for the 1991 Prize" (Women In Design, n.d.).

**The counts, each attached to the source and the date it was read.** A signature total is a moving number, so printing one without a date is printing nothing. *Architectural Record* reported more than 5,000 signatures in its article of 9 April 2013 (Mirviss, 2013), and 17,380 at the time of its article of 14 June 2013 (Architectural Record, 2013). The petition page itself showed 21,845 when it was read for this course's brief on 18 September 2026 (Women In Design, n.d.).

**Laureates signed it.** The April report names them: "Right now, there are five Pritzker winners who have signed: Robert Venturi, Zaha Hadid, Rem Koolhaas, Jacques Herzog, and Pierre de Meuron" (Mirviss, 2013). The 1991 laureate signed a petition asking that the 1991 prize be shared, and the same article quotes his comment on doing so: "Denise Scott Brown is my inspiring and equal partner" (Mirviss, 2013). A larger figure for laureate signatories circulates in search results; this course prints only the five it read, as of that April date.

**Now the hard part, and it is the reason this lesson exists.** What is a petition evidence of?

It is evidence that a number of people signed a page. That is all, and it is not nothing: it measures attention, and attention is what puts a question in front of an institution that would otherwise never answer it. The petition worked in exactly that sense. It produced a written answer from a body that does not usually give one, and that answer is the best document in this course.

**What a petition is not evidence of** is that its claim is true. Signature counts do not establish authorship, and a body that changed its decision because a count got large enough would be a worse institution, not a better one. If you find yourself citing a signature total as proof, you have swapped a question about a record for a question about popularity.

**Hold both of those at once.** The petition was an effective instrument and a weak proof. Most public pressure is.

:::reveal What is a petition evidence of, and what is it not evidence of? ||| It is evidence that a number of people signed a page, which measures attention and can force an institution to answer. It is not evidence that the claim on the page is true.

:::reveal Why must a signature count always be printed with its date and source? ||| Because the total is a moving number, so a figure with no date attached tells a reader nothing about when it was true.

## Vocabulary
- **Petition**: a public instrument for gathering signatures behind a request, which measures attention rather than establishing any fact.
- **Moving number**: a figure that changes after publication, such as a signature total, which must always be printed with the date it was read.
- **Trigger**: the event that starts a public campaign, here a videotaped interview broadcast at a London lunch honouring women in architecture.
- **Effective and weak**: the pair this lesson asks you to hold together, since an instrument can force an answer without proving a claim.

## Sources
Architectural Record. (2013, June 14). *No retroactive prize for Denise Scott Brown, Pritzker jury says, but she remains eligible for the award in the future*. https://www.architecturalrecord.com/articles/2906-no-retroactive-prize-for-denise-scott-brown-pritzker-jury-says-but-she-remains-eligible-for-the-award-in-the-future

Mirviss, L. (2013, April 9). *The women behind the Denise Scott Brown petition*. Architectural Record. https://www.architecturalrecord.com/articles/2834-the-women-behind-the-denise-scott-brown-petition

Women In Design. (n.d.). *Recognize Denise Scott Brown for the 1991 Prize* [Petition]. Change.org. https://www.change.org/p/the-pritzker-architecture-prize-committee-recognize-denise-scott-brown-for-the-1991-prize`,
    },
    {
      slug: "the-refusal-read-closely",
      title: "10 · The refusal, read closely",
      section: "Section 3 · The petition, and the refusal",
      body: `The jury answered in writing. That is rare enough to be worth pausing on: most institutions asked to revisit an old decision say nothing, or say something that cannot be quoted.

**How this course reads the letter.** It is reproduced by *ArchDaily*, which published it on 16 June 2013 and gives it the date 14 June 2013, addressed to Arielle Assouline-Lichten and Caroline James and signed "Lord Peter Palumbo, Chair, On behalf of the Jury of the 2013 Pritzker Architecture Prize" (Quirk, 2013). Every quotation below is the letter as *ArchDaily* reproduces it, and the course quotes short excerpts rather than the whole. *Architectural Record* reported that Palumbo wrote on behalf of the nine-member body (Architectural Record, 2013).

**The letter makes four moves, and they are worth separating.**

**One, a refusal with a stated ground.** "A later jury cannot re-open, or second guess the work of an earlier jury, and none has ever done so" (Quirk, 2013). The refusal is not "she does not deserve it" and it is not "the rules forbid two names". It is a rule about juries in time.

**Two, an offer.** "Let us assure you, however, that Ms. Scott Brown remains eligible for the Pritzker Award. That award is given on the basis of an architect's total body of built work" (Quirk, 2013). The door is described as open, and a standard is named in the same breath.

**Three, a concession.** The letter says the jury must keep in mind that recommendations and discussions about architectural creation are often a reflection of particular times or places, "which may reflect cultural biases that underplay a woman's role in the creative process", and adds that where this occurs the jury must and does take such matters into account (Quirk, 2013). That is an institution conceding the general mechanism while declining the particular remedy.

**Four, the refusal restated with its scope narrowed.** "Insofar, however, as they ask us to reopen the decision-making process of a previous jury, we cannot do so" (Quirk, 2013). The word *insofar* does real work. It refuses one thing and leaves everything else formally untouched.

**Why a stated ground is a gift.** A refusal that gives no reason cannot be examined. This one names a principle, which means a reader can go and see whether the principle fits the facts and whether the institution applies it consistently. Section 4 does exactly that.

:::reveal What is the stated ground of the 2013 refusal? ||| That a later jury cannot reopen or second guess the work of an earlier jury, and that none ever has. It is a rule about juries in time rather than a judgement about her work.

:::reveal What does the word "insofar" do in the letter's final refusal? ||| It narrows the refusal to the one request being refused, reopening a previous jury's decision, and leaves everything else formally untouched.

## Vocabulary
- **Stated ground**: the reason an institution gives for a decision, which is what makes the decision examinable rather than merely final.
- **Concession**: a point an institution grants while still refusing the request, here the acknowledgement that discussions may reflect cultural biases.
- **Scope**: how much a statement covers, narrowed here by the word insofar so that only one request is refused.
- **Reproduction**: a copy of a document published by a third party, which this course cites as such rather than as the original.

## Sources
Architectural Record. (2013, June 14). *No retroactive prize for Denise Scott Brown, Pritzker jury says, but she remains eligible for the award in the future*. https://www.architecturalrecord.com/articles/2906-no-retroactive-prize-for-denise-scott-brown-pritzker-jury-says-but-she-remains-eligible-for-the-award-in-the-future

Quirk, V. (2013, June 16). *Pritzker rejects petition for Denise Scott Brown's retroactive award*. ArchDaily. https://www.archdaily.com/389074/pritzker-rejects-petition-for-denise-scott-brown-s-retroactive-award`,
    },
    {
      slug: "what-the-letter-does-not-say",
      title: "11 · What the letter does not say",
      section: "Section 3 · The petition, and the refusal",
      body: `Reading a document for what it does not contain is a real skill, and it comes with a real trap. The skill is noticing which defences an institution chose not to mount. The trap is treating silence as agreement. A letter answers the question it was asked, so an absent sentence may mean the subject never came up.

Use the skill carefully, and the 2013 letter tells you four things by omission.

**It does not say she did not do the work.** That would be the strongest possible refusal, and it is available to any body that believes it. The letter does not make it, and it does not make the weaker version either. Instead it calls her career long and distinguished.

**It does not say the prize cannot name two people.** No sentence in the letter describes a format, a cap or a rule about numbers. If a rule of that kind had governed 1991, a letter refusing a two-name award is where you would expect to find it named.

**It does not describe what the 1991 jury decided about her.** The letter says nothing about the earlier deliberation at all, which is consistent with its stated position: the current jury is declining to look inside that process, not reporting on it.

**It does not offer an alternative honour.** It offers continued eligibility for the same award under the same standard, and nothing else.

**And here is the honest caveat.** The letter was answering a request for a retroactive award. It is not a report on 1991 and never claimed to be. So none of the four omissions proves anything about what happened in 1991. What they do establish is narrower and still useful: as of 2013, the institution's stated reason for refusing rested entirely on the finality of past juries, and on nothing else it was willing to put in writing.

**That is the whole difference between a fair reading and an unfair one.** A fair reading says what the document commits its author to. An unfair one converts every silence into a concession. *Who Gets Named*, lesson 21, works through what it takes to correct a record; this lesson is about reading the refusal of a correction.

:::reveal Name two things the 2013 letter does not say, and why the omissions are worth noticing. ||| It does not say she did not do the work, and it does not name any rule preventing the prize from naming two people. Both are defences an institution holding them would be expected to state in a refusal.

:::reveal What is the trap in reading a document for its silences? ||| A document answers the question it was asked, so an absent sentence may simply mean the subject never came up, and treating silence as agreement converts an omission into a concession it never made.

## Vocabulary
- **Argument from silence**: an inference drawn from what a document fails to say, which is weak evidence and becomes worthless when the document was answering a narrower question.
- **Available defence**: a reason an institution could have given and did not, which is the part of a silence that is genuinely informative.
- **Finality**: the principle that a past decision stands, which is the only ground the 2013 letter puts in writing.
- **Fair reading**: an account of what a document commits its author to, as distinct from one that treats every omission as an admission.

## Sources
Quirk, V. (2013, June 16). *Pritzker rejects petition for Denise Scott Brown's retroactive award*. ArchDaily. https://www.archdaily.com/389074/pritzker-rejects-petition-for-denise-scott-brown-s-retroactive-award`,
    },
    {
      slug: "quiz-the-petition-and-the-refusal",
      title: "12 · Knowledge check: the petition and the refusal",
      section: "Section 3 · The petition, and the refusal",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which platform hosted the 2013 petition?",
            options: [
              "Change.org",
              "The website of the Harvard Graduate School of Design",
              "The comment section of the trade magazine that covered it",
              "The Pritzker Architecture Prize's own nomination portal",
            ],
            correctIndex: 0,
            explanation:
              "The petition page, started by Women In Design, is hosted there and still displays a signature total.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What pair of judgements does lesson 9 ask you to hold together about the petition?",
            options: [
              "Effective and weak",
              "Accurate and incomplete, since it stated only part of the record",
              "Popular and unlawful, since a jury cannot be petitioned at all",
              "Early and late, since it came both too soon and too long afterwards",
            ],
            correctIndex: 0,
            explanation:
              "It was an effective instrument, because it forced a written answer, and a weak proof, because signatures establish nothing about a record.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Why does lesson 10 call a written reply from a jury unusual?",
            options: [
              "Most institutions say nothing",
              "Because juries are forbidden by their own rules from corresponding",
              "Because a written reply commits an institution to reopening the file",
              "Because the reply must be approved by every previous jury chair",
            ],
            correctIndex: 0,
            explanation:
              "Most institutions asked to revisit an old decision say nothing, or say something that cannot be quoted.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What does lesson 11 mean by an available defence?",
            options: [
              "A reason that could have been given and was not",
              "A rule an institution must cite whenever it refuses a request",
              "An argument the petitioners failed to anticipate in their letter",
              "A precedent the institution has relied on in a previous year",
            ],
            correctIndex: 0,
            explanation:
              "It is the genuinely informative part of a silence, as distinct from a subject the document was never asked about.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Students at which school launched the 2013 petition, according to Architectural Record?",
            options: [
              "The Harvard Graduate School of Design",
              "The University of Pennsylvania school of architecture, where the firm was based",
              "The Architectural Association in London, which had hosted the interview",
              "Yale University, whose press had published the firm's earlier writings",
            ],
            correctIndex: 0,
            explanation:
              "The April 2013 report says students at the Harvard Graduate School of Design launched it in the previous two weeks.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What does Architectural Record give as the trigger for the petition?",
            options: [
              "A videotaped interview",
              "The publication of her 1975 essay in a widely read collection",
              "A newspaper obituary that credited the firm's work to one partner",
              "A decision by the prize to revise its published purpose statement",
            ],
            correctIndex: 0,
            explanation:
              "It reports that she sat down for a videotaped interview broadcast at an Architects' Journal lunch honouring women in architecture.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Where was that interview broadcast?",
            options: [
              "London",
              "Philadelphia, at an event held by the practice she was a partner in",
              "New York, at the organisation she had addressed forty years earlier",
              "Chicago, at the convention of the national professional institute",
            ],
            correctIndex: 0,
            explanation:
              "The report says it was broadcast in London at an Architects' Journal lunch honouring women in architecture.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Which group is named as starting the Change.org petition?",
            options: [
              "Women In Design",
              "The Alliance of Women in Architecture, which she had addressed in 1973",
              "The American Institute of Architects, which later issued a joint medal",
              "The National Organization of Minority Architects, founded in 1971",
            ],
            correctIndex: 0,
            explanation:
              "The petition page gives Women In Design as the group that started it.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What is the petition's title?",
            options: [
              "Recognize Denise Scott Brown for the 1991 Prize",
              "Award the Pritzker Architecture Prize to partnerships rather than individuals",
              "Rewrite the eligibility rules of architecture's highest annual honour",
              "Honour the women of architecture with a medal of their own",
            ],
            correctIndex: 0,
            explanation:
              "That is the title the Change.org page carries.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "How many signatures did Architectural Record report in its article of 9 April 2013?",
            options: [
              "More than 5,000",
              "More than 17,000, which is the figure its later June article carried",
              "More than 21,000, matching the total shown on the page years afterwards",
              "Fewer than 500, since the petition had been open only two weeks",
            ],
            correctIndex: 0,
            explanation:
              "The April report gives more than 5,000 signatures, with the petition then about two weeks old.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What signature total did Architectural Record report at the time of its 14 June 2013 article?",
            options: [
              "17,380",
              "5,000, the same figure it had published two months earlier in April",
              "21,845, which is the figure the petition page showed much later",
              "9, which is the size of the jury body the chair wrote on behalf of",
            ],
            correctIndex: 0,
            explanation:
              "The June article reports that the petition stood at 17,380 signatures at publication.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What total did the petition page itself show when it was read for this course's brief?",
            options: [
              "21,845",
              "17,380, which was the figure the trade press reported back in June 2013",
              "5,000, the figure reported when the petition was about two weeks old",
              "A total the page no longer displays, since Change.org has removed the counter",
            ],
            correctIndex: 0,
            explanation:
              "The page showed 21,845 on 18 September 2026, which is why the figure is printed with that date attached.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Why does this course attach a date to every signature figure it prints?",
            options: [
              "The total is a moving number",
              "Because Change.org requires that any quoted total carry a timestamp",
              "Because the different sources disagree about which total is correct",
              "Because the petition closed on a date that must accompany the count",
            ],
            correctIndex: 0,
            explanation:
              "A figure with no date attached tells a reader nothing about when it was true, so printing one without a date is printing nothing.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "How many Pritzker winners does the April 2013 report say had signed at that point?",
            options: [
              "Five",
              "Nine, which is the figure that circulates widely in search results",
              "Two, being only the partners of the firm named in the petition",
              "None, since laureates are barred from commenting on past decisions",
            ],
            correctIndex: 0,
            explanation:
              "The report names five, and this course prints only the figure it read, as of that April date.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Which laureates does the April 2013 report name as signatories?",
            options: [
              "Venturi, Hadid, Koolhaas, Herzog and de Meuron",
              "Bunshaft, Niemeyer, Sejima, Nishizawa and Vassal, from the multi-name years",
              "Farrell, McNamara, Aranda, Pigem and Vilalta, from the later partnerships",
              "Lacaton, Vassal, Herzog, de Meuron and Palumbo, the last of them as chair",
            ],
            correctIndex: 0,
            explanation:
              "The report lists Robert Venturi, Zaha Hadid, Rem Koolhaas, Jacques Herzog and Pierre de Meuron.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What is notable about the 1991 laureate appearing on that list?",
            options: [
              "He signed about his own prize",
              "He was the only signatory who had never been awarded the prize himself",
              "He signed on behalf of the firm rather than in a personal capacity",
              "He withdrew his signature once the jury published its written reply",
            ],
            correctIndex: 0,
            explanation:
              "The laureate of the year in question signed a petition asking that that year's prize be recognised differently.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What comment does the April 2013 report quote from the 1991 laureate on signing?",
            options: [
              "That she is his inspiring and equal partner",
              "That the jury of 1991 had been given incomplete information about the firm",
              "That the prize should in future be awarded to practices rather than people",
              "That he had asked the prize to add her name at the time of the award",
            ],
            correctIndex: 0,
            explanation:
              "The report quotes him saying Denise Scott Brown is my inspiring and equal partner.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Why does this course print five laureate signatories rather than a larger figure?",
            options: [
              "Five is the figure it read",
              "Because only five of the signatories were still living at the time of writing",
              "Because the petition page lists exactly five laureates among its supporters",
              "Because the jury's letter names five laureates and no others",
            ],
            correctIndex: 0,
            explanation:
              "A larger number circulates in search results, and a figure seen only in a snippet is not a figure this course will assert.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What is a petition evidence of?",
            options: [
              "That people signed a page",
              "That the claim printed at the top of the page has been independently checked",
              "That the institution addressed has accepted the request being made",
              "That a majority of the relevant profession holds the view expressed",
            ],
            correctIndex: 0,
            explanation:
              "It measures attention, and attention is what puts a question in front of an institution that would otherwise never answer it.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What is a petition not evidence of?",
            options: [
              "That its claim is true",
              "That a number of people were willing to add their names to a request",
              "That the subject attracted public attention in the year it was launched",
              "That an institution was asked, in public, to revisit an old decision",
            ],
            correctIndex: 0,
            explanation:
              "Signature counts do not establish authorship, and swapping a question about a record for a question about popularity is the error to avoid.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "In what sense does this course say the petition worked?",
            options: [
              "It produced a written answer",
              "It caused the prize to add a second name to the 1991 award",
              "It changed the published eligibility wording of the prize itself",
              "It persuaded a majority of living laureates to add their signatures",
            ],
            correctIndex: 0,
            explanation:
              "It drew a written answer from a body that does not usually give one, and that answer is the best document in this course.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What does lesson 9 say about an institution that reversed a decision because a signature count grew large enough?",
            options: [
              "It would be a worse institution",
              "It would be following the ordinary practice of professional bodies",
              "It would be applying the standard the letter itself names",
              "It would be correcting an error that the record had already established",
            ],
            correctIndex: 0,
            explanation:
              "A decision that tracks popularity rather than the record is a weaker decision, however welcome the outcome.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Who reproduced the 2013 letter that this course quotes?",
            options: [
              "ArchDaily",
              "Architectural Record, which reported the refusal without printing the text",
              "The Pritzker Architecture Prize, on its own page for the 1991 laureate",
              "Change.org, as an update posted to the petition page by its organisers",
            ],
            correctIndex: 0,
            explanation:
              "The course reads the letter as ArchDaily reproduces it, and says so every time it quotes.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What date does that reproduction give for the letter itself?",
            options: [
              "14 June 2013",
              "9 April 2013, the date of the earlier report on the petition's organisers",
              "16 June 2013, which is the date the reproduction was published",
              "18 September 2026, the date the petition page was last read",
            ],
            correctIndex: 0,
            explanation:
              "The reproduction carries 14 June 2013, while the article publishing it appeared two days later.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "Who signed the 2013 letter?",
            options: [
              "Lord Peter Palumbo",
              "J. Carter Brown, who had chaired the jury that met in 1991",
              "Bill Lacy, listed as secretary to the jury on the 1991 citation page",
              "Ada Louise Huxtable, the critic named among the 1991 jurors",
            ],
            correctIndex: 0,
            explanation:
              "The signature block reads Lord Peter Palumbo, Chair, On behalf of the Jury of the 2013 Pritzker Architecture Prize.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "In what capacity does the signature block say he wrote?",
            options: [
              "Chair, on behalf of the jury",
              "As an individual juror expressing a personal view on the request",
              "As secretary to the jury, recording a decision taken by its members",
              "As a trustee of the foundation that funds and administers the prize",
            ],
            correctIndex: 0,
            explanation:
              "The letter is signed as Chair, on behalf of the Jury of the 2013 Pritzker Architecture Prize.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "How large does Architectural Record say the body was that the chair wrote on behalf of?",
            options: [
              "Nine members",
              "Seven members, matching the jurors listed on the 1991 citation page",
              "Five members, matching the number of laureates who signed the petition",
              "Two members, being the chair and the secretary to the jury",
            ],
            correctIndex: 0,
            explanation:
              "Its June 2013 report says the chair wrote on behalf of the nine-member body.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "How many distinct moves does lesson 10 identify in the letter?",
            options: [
              "Four",
              "Two, being a refusal and an apology for the decision of an earlier jury",
              "Seven, one for each juror who is listed as having signed the reply",
              "One, since the whole letter does nothing but refuse the request",
            ],
            correctIndex: 0,
            explanation:
              "A refusal with a stated ground, an offer, a concession, and the refusal restated with its scope narrowed.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What is the stated ground of the refusal?",
            options: [
              "A later jury cannot reopen an earlier one",
              "That the prize may not under its rules name more than one person in a year",
              "That her built work had not yet been assessed by any jury of the prize",
              "That the request arrived after the closing date for that year's cycle",
            ],
            correctIndex: 0,
            explanation:
              "The letter says a later jury cannot re-open, or second guess the work of an earlier jury, and none has ever done so.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What does the letter say about her eligibility going forward?",
            options: [
              "She remains eligible",
              "That eligibility would require a fresh nomination from a national institute",
              "That she is ineligible because the firm's work has already been honoured",
              "That the question of eligibility is one the jury declines to address",
            ],
            correctIndex: 0,
            explanation:
              "The letter assures the petitioners that Ms. Scott Brown remains eligible for the Pritzker Award.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What standard does the letter name for the award?",
            options: [
              "An architect's total body of built work",
              "The influence a body of theoretical writing has had on the profession",
              "The number of completed commissions attributed to the individual alone",
              "The judgement of the profession as expressed through its institutes",
            ],
            correctIndex: 0,
            explanation:
              "The letter says the award is given on the basis of an architect's total body of built work.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What does the letter concede while still refusing?",
            options: [
              "Discussions may reflect cultural biases",
              "That the 1991 jury reached the wrong decision on the evidence before it",
              "That the prize's rules ought to be rewritten to permit joint awards",
              "That a previous jury failed to consider her contribution at all",
            ],
            correctIndex: 0,
            explanation:
              "It says recommendations and discussions may reflect cultural biases that underplay a woman's role in the creative process.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What does the letter say the jury does where such bias occurs?",
            options: [
              "Takes such matters into account",
              "Refers the question to the trustees of the foundation for a ruling",
              "Reopens the file of the year in which the bias is alleged to have operated",
              "Publishes a statement identifying the decision that was affected",
            ],
            correctIndex: 0,
            explanation:
              "The letter states that where this occurs the jury must, and does, take such matters into account.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "Which word narrows the scope of the letter's closing refusal?",
            options: [
              "Insofar",
              "However, which signals that a concession is about to be withdrawn",
              "Eligible, which keeps the door open for a future decision",
              "Retroactive, which names the kind of award being requested",
            ],
            correctIndex: 0,
            explanation:
              "Insofar as they ask us to reopen the decision-making process of a previous jury, we cannot do so. It refuses one thing and leaves the rest untouched.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "Why does lesson 10 call a stated ground a gift to a reader?",
            options: [
              "It can be examined",
              "Because an institution that gives a reason is obliged to act on it later",
              "Because a stated reason must be approved by the body's full membership",
              "Because it commits the institution to reopening the matter if asked again",
            ],
            correctIndex: 0,
            explanation:
              "A refusal that gives no reason cannot be tested. A named principle can be checked against the facts and against the institution's own practice.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "Why does this course quote only short excerpts of the letter?",
            options: [
              "It does not reproduce the letter whole",
              "Because the reproduction it read is missing several of the paragraphs",
              "Because the letter's author has restricted quotation to single sentences",
              "Because the full text adds nothing that the excerpts do not already carry",
            ],
            correctIndex: 0,
            explanation:
              "Short excerpts are quoted and the whole is not reproduced, which is the rights condition the brief set for this material.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What does this course call the published copy of the letter that it works from?",
            options: [
              "A reproduction",
              "A transcript, meaning a record taken down as the words were spoken",
              "A citation, meaning a reference pointing a reader to the original",
              "An artefact, meaning the physical object the claim points at",
            ],
            correctIndex: 0,
            explanation:
              "A copy of a document published by a third party, cited as such rather than as the original.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What is the skill in reading a document for what it does not contain?",
            options: [
              "Noticing defences that were not mounted",
              "Counting the paragraphs and comparing them with the length of the request",
              "Identifying which sections the publisher chose to leave out of a reproduction",
              "Establishing which questions the petitioners forgot to put in writing",
            ],
            correctIndex: 0,
            explanation:
              "Noticing which defences an institution chose not to mount is the informative part of a silence.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What is the trap that comes with that skill?",
            options: [
              "Treating silence as agreement",
              "Reading a reproduction rather than the original document itself",
              "Quoting a passage at greater length than the argument requires",
              "Assuming the author of a letter also wrote the decision it refers to",
            ],
            correctIndex: 0,
            explanation:
              "A letter answers the question it was asked, so an absent sentence may simply mean the subject never came up.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Which of these does the 2013 letter not say?",
            options: [
              "That she did not do the work",
              "That a later jury cannot reopen the decision of an earlier jury",
              "That she remains eligible for the award in future years",
              "That discussions may reflect biases underplaying a woman's role",
            ],
            correctIndex: 0,
            explanation:
              "That would be the strongest possible refusal and it is available to any body that believes it. The letter does not make it.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "How does the letter describe her career?",
            options: [
              "Long and distinguished",
              "Promising, with the prospect of significant work still ahead of her",
              "Inseparable from that of her partner and impossible to assess alone",
              "Primarily theoretical rather than grounded in completed buildings",
            ],
            correctIndex: 0,
            explanation:
              "The letter says she has a long and distinguished career of architectural accomplishment.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Which rule does the 2013 letter never mention?",
            options: [
              "Any cap on the number of names",
              "The principle that a later jury does not revisit an earlier jury's work",
              "The standard that the award rests on a total body of built work",
              "The jury's obligation to weigh cultural bias where it appears",
            ],
            correctIndex: 0,
            explanation:
              "No sentence in the letter describes a format, a cap or a rule about numbers, which is where you would expect such a rule to be named.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Why would a refusal letter be the natural place to name a rule capping the number of laureates?",
            options: [
              "It is the defence the request calls for",
              "Because prize rules must be restated in full whenever a request is denied",
              "Because a petition is not valid unless the governing rule is quoted back",
              "Because the chair is required to list every rule the jury considered",
            ],
            correctIndex: 0,
            explanation:
              "If a rule of that kind had governed the year in question, a letter refusing a two-name award is where you would expect to find it named.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What does the letter say about the earlier jury's deliberation?",
            options: [
              "Nothing at all",
              "That the earlier jury considered a joint award and decided against it",
              "That the earlier jury's minutes have been reviewed and found sound",
              "That the earlier jury acted on incomplete information about the firm",
            ],
            correctIndex: 0,
            explanation:
              "Its silence is consistent with its stated position: the current jury is declining to look inside that process, not reporting on it.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What does the letter offer in place of a retroactive award?",
            options: [
              "Continued eligibility",
              "A separate honour created specifically to recognise collaborative practice",
              "A statement to be added to the published citation of the earlier year",
              "A review of the decision by an independent panel outside the jury",
            ],
            correctIndex: 0,
            explanation:
              "It offers continued eligibility for the same award under the same standard, and nothing else.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What is the honest caveat lesson 11 places on all four omissions?",
            options: [
              "The letter answered one request",
              "The reproduction may have omitted paragraphs present in the original",
              "The chair wrote personally and could not speak for the whole jury",
              "The letter was written before the petition had finished gathering names",
            ],
            correctIndex: 0,
            explanation:
              "It was answering a request for a retroactive award. It is not a report on the earlier year and never claimed to be.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What do the omissions actually establish?",
            options: [
              "That finality was the only stated ground",
              "That the institution privately accepted the substance of the petition",
              "That the jury had no rule available to it that could have been cited",
              "That the earlier jury acted without considering the firm's partnership",
            ],
            correctIndex: 0,
            explanation:
              "As of 2013, the institution's stated reason rested entirely on the finality of past juries, and on nothing else it was willing to put in writing.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What is an argument from silence?",
            options: [
              "An inference from what is absent",
              "A refusal issued without any accompanying statement of reasons",
              "A decision an institution declines to publish in any form at all",
              "A quotation broken off before the end of the sentence being quoted",
            ],
            correctIndex: 0,
            explanation:
              "It is weak evidence, and it becomes worthless when the document was answering a narrower question.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What separates a fair reading of a document from an unfair one?",
            options: [
              "What the author is committed to",
              "Whether the reader agrees with the outcome the document announces",
              "Whether the reading was made from an original or from a reproduction",
              "How many independent sources the reader consulted before deciding",
            ],
            correctIndex: 0,
            explanation:
              "A fair reading says what the document commits its author to. An unfair one converts every silence into a concession.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Which lesson elsewhere in this catalog works through what it takes to correct a record?",
            options: [
              "Who Gets Named, lesson 21",
              "The Name on the Door, lesson 1, on the credited unit being a firm",
              "The Paper and the Prize, lesson 5, on a paper and a prize disagreeing",
              "Who Signs the Print, lesson 2, on what a signature certifies",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on the anatomy of a correction. This one is about reading the refusal of a correction instead.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Testing the stated ground
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-format-could-hold-two",
      title: "13 · The prize's own list, and what it rules out",
      section: "Section 4 · Testing the stated ground",
      body: `The 2013 letter gave a ground, so the ground can be tested. Start with the easiest test of all, and one anybody can run: does the prize's own published list of laureates ever carry more than one name?

It does, in six different years. The Pritzker's list names Gordon Bunshaft and Oscar Niemeyer in 1988, Jacques Herzog and Pierre de Meuron in 2001, Kazuyo Sejima and Ryue Nishizawa in 2010, Rafael Aranda, Carme Pigem and Ramon Vilalta in 2017, Yvonne Farrell and Shelley McNamara in 2020, and Anne Lacaton and Jean-Philippe Vassal in 2021 (Pritzker Architecture Prize, n.d.-c).

**Read 1988 carefully, because it is the one before 1991.** The list shows two people for that year, named separately rather than as a partnership. That is a different arrangement from the later joint awards, and this course does not claim it was the same thing. What it establishes is narrower: three years before 1991, a single year of this prize already carried two names on the list.

**And the later years establish the rest.** From 2001 onward the list repeatedly names architects who practise as a partnership, which is exactly the shape in question.

**So what has been ruled out, and what has not?**

**Ruled out:** any claim that the prize's format is structurally incapable of naming two people, or that naming a partnership would have been unprecedented in kind. The list disposes of that, and the current purpose wording, "a living architect or architects", points the same way (Pritzker Architecture Prize, n.d.-d).

**Not ruled out, and not established either:** anything about 1991 itself. The list tells you what the format has done. It does not tell you what any particular jury considered, and nothing read for this course does. A learner who finishes this lesson believing the 1991 jury rejected a two-name option has learned something the evidence does not contain.

**The point of the exercise is the method, not the verdict.** An institution gave a stated ground. The ground was about juries and not about formats. Checking the format against the institution's own published record shows that the refusal was not a format problem, which sharpens the question rather than answering it.

:::reveal In how many years does the prize's own list name more than one laureate, and what does that rule out? ||| Six. It rules out any claim that the format is structurally incapable of naming two people, or that naming a partnership would have been unprecedented in kind.

:::reveal What does the laureate list not establish? ||| Anything about what any particular jury considered, including the jury of 1991, since a list of outcomes is not a record of deliberations.

## Vocabulary
- **Ruled out**: a claim the evidence positively defeats, as distinct from one it merely fails to support.
- **Unprecedented in kind**: never done before in that form, which the list shows a multi-name award was not.
- **Format problem**: a limit built into the shape of an award, which the prize's own record shows was not the obstacle here.
- **Sharpening a question**: narrowing what remains unknown by removing an explanation the evidence defeats.

## Sources
Pritzker Architecture Prize. (n.d.-c). *Laureates*. The Hyatt Foundation. https://www.pritzkerprize.com/laureates

Pritzker Architecture Prize. (n.d.-d). *About the prize*. The Hyatt Foundation. https://www.pritzkerprize.com/about`,
    },
    {
      slug: "a-jury-is-not-the-same-jury",
      title: "14 · A jury is not the same jury",
      section: "Section 4 · Testing the stated ground",
      body: `The letter's principle is that a later jury cannot reopen an earlier jury's work. Test the other half of it: are these the same body?

**The 1991 jury, as the prize itself lists it** on its citation page: J. Carter Brown as chairman, with Giovanni Agnelli, Ada Louise Huxtable, Ricardo Legorreta, Toshio Nakamura, Kevin Roche and Lord Rothschild, and Bill Lacy as secretary to the jury (Pritzker Architecture Prize, n.d.-a).

**The 2013 letter** was signed by Lord Peter Palumbo as chair, on behalf of that year's jury (Quirk, 2013). He is not among the names the prize lists for 1991.

**So the institution's own pages establish the letter's premise.** The letter says it itself: "Pritzker juries, over time, are made up of different individuals, each of whom does his or her best to find the most highly qualified candidate" (Quirk, 2013). The body that refused was not the body that decided. It was a later group of people, sharing a name and a purpose with the earlier one, declining to sit in judgement on it.

**That is a real principle, and it is not unique to this prize.** Courts limit when a later panel may reopen a settled matter. Standards bodies date their decisions and revise forward. Professional juries of every kind separate "we would decide differently today" from "we hereby undo what was decided". The reason is stability: an award whose past decisions can be reopened by each new panel does not have decisions, it has provisional opinions, and every laureate's honour becomes contingent on the composition of a body that has not met yet.

**And here is the cost, which is the part institutions rarely say out loud.** If finality is absolute, then a class of error becomes permanently uncorrectable by the body that made it. Whatever a past jury got wrong stays wrong on that body's own record. Any correction has to come from somewhere else, from a different institution, a different format or a different year.

**Notice that the letter does not deny the cost.** Its concession paragraph accepts that discussions about architectural creation can reflect biases that underplay a woman's role. Read the two paragraphs together and the position is coherent: bias is acknowledged as a general matter, the remedy of reopening is refused as a matter of principle, and no third option is offered.

:::reveal What do the prize's own pages show about the jury that refused in 2013 compared with the jury of 1991? ||| They are different groups of people. The 1991 list is chaired by J. Carter Brown and does not include Lord Peter Palumbo, who signed the 2013 letter as chair.

:::reveal What does an absolute rule of finality cost an institution? ||| It makes a class of error permanently uncorrectable by the body that made it, so any correction must come from a different institution, format or year.

## Vocabulary
- **Finality**: the principle that a decision, once made, stands, which gives past decisions their stability and their permanence.
- **Provisional opinion**: what a decision becomes if every later panel may reopen it, which is the outcome finality exists to prevent.
- **Prospective revision**: changing a rule for the future rather than undoing a past application of it, the move available when finality blocks reopening.
- **Coherent refusal**: a position that acknowledges a general problem while declining a specific remedy, which is what the 2013 letter sets out.

## Sources
Pritzker Architecture Prize. (n.d.-a). *Jury citation: Robert Venturi*. The Hyatt Foundation. https://www.pritzkerprize.com/jury-citation-robert-venturi

Quirk, V. (2013, June 16). *Pritzker rejects petition for Denise Scott Brown's retroactive award*. ArchDaily. https://www.archdaily.com/389074/pritzker-rejects-petition-for-denise-scott-brown-s-retroactive-award`,
    },
    {
      slug: "total-body-of-built-work",
      title: "15 · The standard in the offer",
      section: "Section 4 · Testing the stated ground",
      body: `The letter's offer carries a standard: the award "is given on the basis of an architect's total body of built work" (Quirk, 2013). That sentence is doing more work than it looks like it is doing, and it is worth one lesson on its own.

**Read it as a measurement problem.** To assess an individual's total body of built work, somebody must decide which buildings belong to that individual. For an architect who has practised alone, that is easy. For a partner in a firm whose output was produced jointly and credited to the firm, it is the same question this whole course is about, now moved inside the assessment.

**The prize's own pages show the two ways out of that problem,** and they point in opposite directions. The 1991 page credits her as a partner and a collaborator while awarding to one person. The laureate list, in six years, names a partnership. The first approach asks who among the partners is being honoured. The second stops asking.

**This course does not tell you what the jury meant by the phrase.** Nothing read for it explains how the standard is applied to partnerships, and inventing an explanation would be exactly the failure the course has been warning about for fifteen lessons. What it hands you instead is two documents, the letter and the list, and the question they raise between them: when a body of built work was made inside a partnership, does a standard framed around an individual's total body of built work describe a measurement, or does it describe a problem?

**One thing this course cannot tell you** is whether any later jury has acted on the eligibility the letter affirms. It did not check the years after 2013 for that purpose, and rather than guess, it files the question as an open one.

**The discipline to take from this lesson** is the willingness to end on a question. A course that answered this one would be more satisfying and less true. The documents support a sharp question and not an answer, so the question is what gets taught.

:::reveal Why does the standard named in the letter raise a difficulty for a partner in a firm? ||| Assessing an individual's total body of built work requires deciding which buildings belong to that individual, which is the same credit question the course is about, moved inside the assessment.

:::reveal What does this course do when its documents support a question but not an answer? ||| It teaches the question and says what would settle it, rather than supplying an explanation the sources do not contain.

## Vocabulary
- **Total body of built work**: the standard the 2013 letter names for the award, framed around an individual rather than a practice.
- **Measurement problem**: a question about how to count or attribute something, which here reproduces the credit question inside the assessment.
- **Open question**: one this course states and does not answer, filed with what would settle it rather than guessed at.
- **Ending on a question**: the choice to teach what the documents support, even when an answer would be more satisfying.

## Sources
Pritzker Architecture Prize. (n.d.-c). *Laureates*. The Hyatt Foundation. https://www.pritzkerprize.com/laureates

Quirk, V. (2013, June 16). *Pritzker rejects petition for Denise Scott Brown's retroactive award*. ArchDaily. https://www.archdaily.com/389074/pritzker-rejects-petition-for-denise-scott-brown-s-retroactive-award`,
    },
    {
      slug: "quiz-testing-the-stated-ground",
      title: "16 · Knowledge check: testing the stated ground",
      section: "Section 4 · Testing the stated ground",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does lesson 13 mean by unprecedented in kind?",
            options: [
              "Never done in that form before",
              "Done before, but not within the lifetime of the current jury",
              "Done so rarely that an institution may treat it as impossible",
              "Recorded in the list but never explained in any citation",
            ],
            correctIndex: 0,
            explanation:
              "The list shows a multi-name award was not that, which is exactly the claim the check disposes of.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does lesson 14 call a position that grants a general problem while refusing a specific remedy?",
            options: [
              "A coherent refusal",
              "An argument from silence, since the remedy is never named",
              "A provisional opinion, since the position may be revised later",
              "An additive correction, since the format grows by one",
            ],
            correctIndex: 0,
            explanation:
              "Bias is acknowledged in general, reopening is refused on principle, and no third option is offered.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "In how many years does the prize's own list name more than one laureate?",
            options: [
              "Six",
              "One, being the year in which a three-person practice was honoured",
              "None, which is why the 2013 request could not be granted",
              "Every year since 2001, when the format was formally changed",
            ],
            correctIndex: 0,
            explanation:
              "The list carries more than one name in 1988, 2001, 2010, 2017, 2020 and 2021.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which two names does the list carry for 1988?",
            options: [
              "Bunshaft and Niemeyer",
              "Herzog and de Meuron, the Swiss partners honoured for their joint practice",
              "Sejima and Nishizawa, the partners of a Japanese office",
              "Farrell and McNamara, the partners of an Irish practice",
            ],
            correctIndex: 0,
            explanation:
              "The list names Gordon Bunshaft and Oscar Niemeyer for that year, listed separately.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which pair does the list carry for 2001?",
            options: [
              "Herzog and de Meuron",
              "Bunshaft and Niemeyer, who appear on the list for an earlier year",
              "Lacaton and Vassal, whose joint award comes two decades later",
              "Aranda and Pigem, two of a three-person partnership honoured later",
            ],
            correctIndex: 0,
            explanation:
              "Jacques Herzog and Pierre de Meuron, both of whom also appear among the petition's laureate signatories.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which pair does the list carry for 2010?",
            options: [
              "Sejima and Nishizawa",
              "Farrell and McNamara, who are named on the list for a later year",
              "Herzog and de Meuron, who are named on the list for an earlier year",
              "Venturi and Scott Brown, who received a joint medal from another body",
            ],
            correctIndex: 0,
            explanation:
              "Kazuyo Sejima and Ryue Nishizawa, named together for that year.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which year does the list carry three names?",
            options: [
              "2017",
              "1988, when two separate architects were honoured in the same year",
              "2020, when two partners of one practice were named together",
              "1991, when the citation named a partner alongside the laureate",
            ],
            correctIndex: 0,
            explanation:
              "Rafael Aranda, Carme Pigem and Ramon Vilalta are named for 2017.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which pair does the list carry for 2020?",
            options: [
              "Farrell and McNamara",
              "Lacaton and Vassal, whose joint award falls in the following year",
              "Sejima and Nishizawa, whose joint award falls a decade earlier",
              "Bunshaft and Niemeyer, the two names carried in a much earlier year",
            ],
            correctIndex: 0,
            explanation:
              "Yvonne Farrell and Shelley McNamara are named together for 2020.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which pair does the list carry for 2021?",
            options: [
              "Lacaton and Vassal",
              "Farrell and McNamara, who are named on the list for the year before",
              "Aranda and Vilalta, two of the three names carried in an earlier year",
              "Herzog and de Meuron, whose joint award falls twenty years earlier",
            ],
            correctIndex: 0,
            explanation:
              "Anne Lacaton and Jean-Philippe Vassal are named together for 2021.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "How does the 1988 entry differ from the later multi-name years?",
            options: [
              "Two people named separately",
              "It names a practice rather than any individual architect at all",
              "It names three people, where the later years name only two",
              "It carries no citation, unlike every other year on the list",
            ],
            correctIndex: 0,
            explanation:
              "The two are listed separately rather than as a partnership, which is a different arrangement from the later joint awards.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "How many years before 1991 did the list first carry two names?",
            options: [
              "Three",
              "Ten, since the first multi-name year on the list falls in 1981",
              "Twenty two, counting forward to the year of the petition instead",
              "None, since every multi-name year on the list comes after 1991",
            ],
            correctIndex: 0,
            explanation:
              "The 1988 entry carries two names, three years before the award in question.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does the laureate list rule out?",
            options: [
              "A structural inability to name two",
              "The possibility that any jury ever considered a partnership award",
              "The claim that the prize has a published list of past laureates",
              "The suggestion that the prize's purpose statement has ever been revised",
            ],
            correctIndex: 0,
            explanation:
              "It disposes of any claim that the format cannot name two people, or that a multi-name award would have been unprecedented in kind.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does the laureate list fail to establish?",
            options: [
              "Anything about 1991 itself",
              "That the prize has named more than one laureate in a single year",
              "That partnerships appear repeatedly among the later laureates",
              "That the list is published by the prize on its own website",
            ],
            correctIndex: 0,
            explanation:
              "A list of outcomes is not a record of deliberations, so it says nothing about what any particular jury considered.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which conclusion would a learner wrongly draw from lesson 13?",
            options: [
              "That the 1991 jury rejected a two-name option",
              "That the prize has named more than one laureate in six separate years",
              "That the current purpose wording permits more than one name",
              "That 1988 named two people separately rather than as a partnership",
            ],
            correctIndex: 0,
            explanation:
              "Nothing read for this course says what the jury of that year considered, so the rejection of an option is not in the evidence.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Which phrase from the prize's current purpose statement points the same way as the list?",
            options: [
              "A living architect or architects",
              "Whose built work demonstrates the qualities being sought",
              "Generally acknowledged as architecture's highest award",
              "An architect's total body of built work",
            ],
            correctIndex: 0,
            explanation:
              "The plural is a permission, matching what the list shows the format has actually done.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does lesson 13 say the point of the exercise is?",
            options: [
              "The method, not the verdict",
              "Establishing that the 1991 decision was made in error",
              "Showing that the prize has changed its rules since the 1990s",
              "Counting how many partnerships the prize has honoured to date",
            ],
            correctIndex: 0,
            explanation:
              "An institution gave a stated ground, and checking the ground against the institution's own published record is the transferable skill.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does checking the format against the record do to the question?",
            options: [
              "It sharpens it",
              "It answers it, by showing what the jury must have decided",
              "It closes it, since the format turns out to have been the obstacle",
              "It leaves it untouched, since a list cannot bear on a refusal",
            ],
            correctIndex: 0,
            explanation:
              "Removing an explanation the evidence defeats narrows what remains unknown without supplying an answer.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "Who does the prize's citation page list as chairman of the 1991 jury?",
            options: [
              "J. Carter Brown",
              "Lord Peter Palumbo, who signed the letter refusing the 2013 petition",
              "Bill Lacy, who appears on the same page in a different role",
              "Ada Louise Huxtable, the critic among that year's jurors",
            ],
            correctIndex: 0,
            explanation:
              "The page lists J. Carter Brown as chairman of the jury for that year.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "Who is listed as secretary to the 1991 jury?",
            options: [
              "Bill Lacy",
              "Kevin Roche, who appears on the same page among the jurors",
              "Lord Rothschild, also listed among that year's jury members",
              "Giovanni Agnelli, who is named on the same page as a juror",
            ],
            correctIndex: 0,
            explanation:
              "The page lists him as secretary to the jury, a role distinct from the jurors themselves.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "Which architecture critic is listed among the 1991 jurors?",
            options: [
              "Ada Louise Huxtable",
              "Vanessa Quirk, who later published the text of the 2013 letter",
              "Laura Mirviss, who reported on the petition's organisers in April 2013",
              "Denise Scott Brown, named on the same page as a partner in the firm",
            ],
            correctIndex: 0,
            explanation:
              "She appears on the prize's own list of that year's jury members.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does the 1991 jury list show about the person who signed the 2013 letter?",
            options: [
              "He is not on it",
              "He chaired the earlier jury as well as the later one",
              "He served as secretary to the jury in the earlier year",
              "He was one of two chairmen sharing the role that year",
            ],
            correctIndex: 0,
            explanation:
              "Lord Peter Palumbo is not among the names the prize lists for 1991, which is the institution's own pages establishing the letter's premise.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does the letter itself say about juries over time?",
            options: [
              "They are made up of different individuals",
              "They are drawn from a standing panel whose membership rarely changes",
              "They are bound by the published reasoning of every previous jury",
              "They meet jointly with past juries whenever a decision is questioned",
            ],
            correctIndex: 0,
            explanation:
              "The letter says Pritzker juries, over time, are made up of different individuals, each doing his or her best to find the most qualified candidate.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "How does lesson 14 describe the relationship between the body that refused and the body that decided?",
            options: [
              "A later group of people",
              "The same individuals meeting again more than twenty years afterwards",
              "A supervisory panel with authority to review the earlier decision",
              "Two halves of one standing committee that never fully disbands",
            ],
            correctIndex: 0,
            explanation:
              "A later group sharing a name and a purpose with the earlier one, declining to sit in judgement on it.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "Why do institutions adopt a rule of finality?",
            options: [
              "Stability",
              "To reduce the administrative cost of keeping records of past decisions",
              "To prevent members of a jury from being identified in public",
              "To allow a decision to be revised whenever new evidence appears",
            ],
            correctIndex: 0,
            explanation:
              "An award whose past decisions can be reopened by each new panel does not have decisions at all.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does an award without finality have instead of decisions?",
            options: [
              "Provisional opinions",
              "A permanent record that every later panel is required to endorse",
              "A published dissent attached to each of its past selections",
              "A single standing judgement issued once and never revisited",
            ],
            correctIndex: 0,
            explanation:
              "Every laureate's honour would become contingent on the composition of a body that has not met yet.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What is the cost of an absolute rule of finality?",
            options: [
              "A class of error stays uncorrectable",
              "Decisions take longer, because each one must be exhaustively documented",
              "Juries become reluctant to publish citations explaining their choices",
              "The institution loses the ability to change its rules for the future",
            ],
            correctIndex: 0,
            explanation:
              "Whatever a past jury got wrong stays wrong on that body's own record, which is the part institutions rarely say out loud.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "Where must a correction come from, if finality blocks reopening?",
            options: [
              "Somewhere else",
              "From the same jury, meeting again with its original membership restored",
              "From the petitioners, who may resubmit the request in a later year",
              "From nowhere, since a blocked correction can never be made at all",
            ],
            correctIndex: 0,
            explanation:
              "A different institution, a different format or a different year, which is what the next section examines.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "How does the letter treat the general problem of bias?",
            options: [
              "It acknowledges it",
              "It denies that such bias has ever affected a decision of this prize",
              "It refers the question to an outside body for independent assessment",
              "It promises to reopen any year in which bias can be demonstrated",
            ],
            correctIndex: 0,
            explanation:
              "Its concession paragraph accepts that discussions can reflect biases underplaying a woman's role, while the remedy of reopening is refused.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What third option does the 2013 letter offer between reopening and doing nothing?",
            options: [
              "None",
              "A joint citation to be appended to the record of the earlier year",
              "A separate honour for contributions made within a partnership",
              "A review of the decision by the trustees of the foundation",
            ],
            correctIndex: 0,
            explanation:
              "Bias is acknowledged in general, reopening is refused on principle, and no third option appears in the letter.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does this course mean by prospective revision?",
            options: [
              "Changing a rule going forward",
              "Reopening a past decision once the relevant jury has been reconstituted",
              "Publishing a correction alongside the original announcement",
              "Awarding the same honour a second time to a different recipient",
            ],
            correctIndex: 0,
            explanation:
              "Changing a rule for the future rather than undoing a past application of it, which is the move available when finality blocks reopening.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "Which other kinds of body does lesson 14 say have a version of the finality rule?",
            options: [
              "Courts and standards bodies",
              "Publishers and journals, which never revise a printed attribution",
              "Licensing boards, which cannot withdraw a certificate once issued",
              "Petition platforms, which close a campaign once it has been answered",
            ],
            correctIndex: 0,
            explanation:
              "Courts limit when a later panel may reopen a settled matter, and standards bodies date their decisions and revise forward.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What standard does the 2013 letter name for the award?",
            options: [
              "An architect's total body of built work",
              "The originality of the theoretical writing an architect has published",
              "The judgement of previous laureates polled ahead of each decision",
              "The number of buildings completed in the year under consideration",
            ],
            correctIndex: 0,
            explanation:
              "The offer of continued eligibility comes with that standard named in the same breath.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "Why does that standard raise a difficulty for a partner in a firm?",
            options: [
              "Deciding which buildings are whose",
              "Because partnerships are ineligible for the award under its published rules",
              "Because a firm's output is never recorded in any form a jury can read",
              "Because a partner's work is credited to the client rather than the practice",
            ],
            correctIndex: 0,
            explanation:
              "Assessing an individual's total body of built work reproduces the credit question inside the assessment itself.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What two approaches do the prize's own pages show for a partnership?",
            options: [
              "Name one, or name the partnership",
              "Award the prize to the firm, or withhold it until the firm dissolves",
              "Assess the partners jointly, or refer the question to a national institute",
              "Split the award between two years, or defer it to a later cycle",
            ],
            correctIndex: 0,
            explanation:
              "The 1991 page credits a partner while awarding to one person. The list, in six years, names a partnership.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does the approach of naming one person require a jury to ask?",
            options: [
              "Who among the partners",
              "How many buildings the practice completed in a given decade",
              "Whether the partnership was registered before the work began",
              "Which partner signed the drawings submitted for permit",
            ],
            correctIndex: 0,
            explanation:
              "It asks who among the partners is being honoured, which is the question the other approach stops asking.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does the approach of naming the partnership do with that question?",
            options: [
              "It stops asking",
              "It answers it by ranking the partners in order of contribution",
              "It defers it until one of the partners is no longer practising",
              "It delegates it to the practice, which nominates one partner",
            ],
            correctIndex: 0,
            explanation:
              "Naming the partnership removes the need to divide the work between its members.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does this course say about how the standard is applied to partnerships?",
            options: [
              "Nothing it read explains it",
              "That the prize applies it by assessing each partner's projects separately",
              "That the letter sets out a method for dividing joint work between partners",
              "That the laureate list records how each partnership was assessed",
            ],
            correctIndex: 0,
            explanation:
              "Nothing read for this course explains the application, and inventing an explanation would be the failure the course warns against.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "Which two documents does lesson 15 hand the learner instead of an answer?",
            options: [
              "The letter and the list",
              "The 1975 essay and the publisher's dust jacket described inside it",
              "The petition page and the trade magazine's report on its organisers",
              "The firm's information sheet and the Japanese journal article",
            ],
            correctIndex: 0,
            explanation:
              "The 2013 letter naming the standard, and the laureate list showing what the format has done.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What question do those two documents raise between them?",
            options: [
              "Whether the standard describes a measurement or a problem",
              "Whether the prize should be awarded annually or at longer intervals",
              "Whether the jury's membership should be published before it decides",
              "Whether a petition can oblige an institution to answer in writing",
            ],
            correctIndex: 0,
            explanation:
              "When a body of built work was made inside a partnership, a standard framed around an individual may describe either one.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does this course say it cannot tell you about the years after 2013?",
            options: [
              "Whether any jury acted on the eligibility",
              "Whether the prize continued to name more than one laureate in some years",
              "Whether the published purpose statement was worded as it is today",
              "Whether the 2013 letter was ever reproduced by a second publication",
            ],
            correctIndex: 0,
            explanation:
              "It did not check the later years for that purpose, and rather than guess it files the question as an open one.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does this course do with a question its sources cannot settle?",
            options: [
              "Files it as open",
              "Reports the most widely repeated answer with a note of caution",
              "Removes the subject entirely so no partial account is taught",
              "Infers the answer from the pattern the other documents establish",
            ],
            correctIndex: 0,
            explanation:
              "It states the question and what would settle it, rather than supplying an explanation the sources do not contain.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What discipline does lesson 15 say it is teaching?",
            options: [
              "Ending on a question",
              "Reconciling two sources that disagree about the same event",
              "Quoting a document in full rather than in short excerpts",
              "Counting how often a claim appears across independent sources",
            ],
            correctIndex: 0,
            explanation:
              "The documents support a sharp question and not an answer, so the question is what gets taught.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "Why would a course that answered this question be worse?",
            options: [
              "It would be less true",
              "It would take longer to read than the documents themselves",
              "It would repeat material the public architecture course already covers",
              "It would rely on a reproduction rather than an original document",
            ],
            correctIndex: 0,
            explanation:
              "More satisfying and less true. The evidence supports the question, and an answer would have to be supplied from somewhere else.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What is an open question, as this course uses the term?",
            options: [
              "One stated but not answered",
              "One that every source consulted answers in a different way",
              "One the institution concerned has declined to respond to in writing",
              "One that cannot be settled by any document that has ever existed",
            ],
            correctIndex: 0,
            explanation:
              "Stated, filed with what would settle it, and not guessed at.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does this course mean by a measurement problem?",
            options: [
              "A question about attribution",
              "A dispute about the dimensions recorded on a set of drawings",
              "A disagreement between two sources about the same published figure",
              "A count that changes after publication and so needs a date",
            ],
            correctIndex: 0,
            explanation:
              "A question about how to count or attribute something, which here reproduces the credit question inside the assessment.",
            sourceLessonSlug: "total-body-of-built-work",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The correction that did happen, and the ledger
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-format-that-holds-two-names",
      title: "17 · A format that holds two names",
      section: "Section 5 · The correction that did happen, and the ledger",
      body: `Section 4 ended with a consequence of finality: if a body cannot reopen its own decision, a correction has to come from somewhere else. In 2016 something came from somewhere else.

The American Institute of Architects states the eligibility for its highest annual honour like this: "The Gold Medal is open to a single individual or two individuals, (living or deceased), who through their collaborative efforts over time have created a singular body of distinguished architectural work" (American Institute of Architects, n.d.). Its recipient list gives the 2016 medal to "Robert Venturi, FAIA, and Denise Scott Brown, Hon. FAIA".

**This catalog already teaches that rule.** *The Name on the Door*, lesson 22, uses the same sentence and the same recipient entry as an example of an additive correction, a format that once held one name growing to hold two. That lesson is the place to read about the move itself, and this one does not repeat it. What this course adds is what the medal stood beside.

**So read the two institutions together, carefully.** A prize named one laureate in 1991 and refused in 2013 to revisit it. A different body, with a different honour and a rule that admits two people, named them together in 2016.

**And now the discipline, because this is the exact point where a course becomes untrue.** Nothing read for this course says the AIA acted because of the Pritzker, or because of the petition. Two institutions, two formats, two decisions, and no document connecting them. The honest sentence is that a correction happened in the profession's award system, not that the 1991 prize was corrected. Those are different claims, and only the first one has evidence.

**A related compression worth undoing.** The joint 2016 medal was the AIA's. It is sometimes folded together with a British honour of the same year, and the record separates them: *Architectural Record* reported in September 2015 that the Royal Institute of British Architects' 2016 Royal Gold Medal went to Zaha Hadid, described as the first woman to win the Royal Gold Medal independent of a partner (Architectural Record, 2015). One 2016, two medals, two different stories. Naming the wrong institution is the kind of small error that makes a true account easy to dismiss.

:::reveal How does the AIA's own rule describe who may receive the Gold Medal? ||| A single individual or two individuals, living or deceased, who through their collaborative efforts over time have created a singular body of distinguished architectural work.

:::reveal Why can this course not say the 2016 medal corrected the 1991 prize? ||| Because no document read for it connects the two decisions. Two institutions with two formats acted separately, so the supported claim is that a correction happened in the award system, not that the earlier prize was corrected.

## Vocabulary
- **Additive correction**: a fix that enlarges a credit format rather than replacing one name with another, which is how the two-person rule works.
- **Prospective correction**: a change that applies going forward, as distinct from a retroactive one that would alter a past decision.
- **Causal link**: a documented connection between two events, absent here between the refusal of 2013 and the medal of 2016.
- **Compression**: the habit of merging two separate events into one summary, such as attributing a single joint medal to two different institutes.

## Sources
American Institute of Architects. (n.d.). *Gold Medal*. https://www.aia.org/design-excellence/awards/gold-medal

Architectural Record. (2015, September 23). *Zaha Hadid awarded 2016 Royal Gold Medal*. https://www.architecturalrecord.com/articles/9112-zaha-hadid-awarded-2016-royal-gold-medal`,
    },
    {
      slug: "what-the-record-settles",
      title: "18 · What the record settles, and what it does not",
      section: "Section 5 · The correction that did happen, and the ledger",
      body: `Put the whole thing on one page, in two columns, and the shape of the case becomes obvious.

**Settled, each by a document published by the institution that made it.** The prize named one laureate for 1991. The prize's own page for that year calls her a partner in the firm since 1969 and his collaborator of thirty years, and the jury's citation calls her his talented partner. She had written an account of architectural attribution in 1975 and published it in 1989. A petition asked the prize to recognise her for 1991. The chair of the 2013 jury refused in writing, on the ground that a later jury cannot reopen an earlier jury's work, while affirming continued eligibility and conceding that discussions can reflect cultural biases. The prize's laureate list carries more than one name in six years. The AIA's Gold Medal rule admits two individuals, and the 2016 medal named both partners.

**Not settled by anything read here.** What the 1991 jury discussed. The wording of the prize's stated purpose in force that year. How the standard of an individual's total body of built work is applied to a partner. Whether any later jury has acted on the eligibility the 2013 letter affirms. Whether the AIA's decision had anything to do with the Pritzker's.

**Now the distinction that is the whole point of the course.** A retroactive correction changes a past decision. A prospective correction changes what future decisions may do. The 2013 letter refuses the first and the AIA's rule is an instance of the second, and they are not substitutes. *Who Signs the Print*, lesson 22, puts it in one sentence: a correction fixes the format going forward, and it does not reissue the past. The 2013 letter is that same sentence spoken by the institution doing the refusing.

**Which leaves a practical question, and it is the one worth carrying out of here.** If a body will not reopen its past decisions, and a different body's prospective rule cannot reach them, then the only remaining correction is the one a reader performs: knowing what the citation said, who the partners were, and what was refused and when. That is a weaker fix than a reissued award. It is also the one that is actually available, and it is why reading these four documents properly matters more than winning an argument about them.

:::reveal What is the difference between a retroactive and a prospective correction? ||| A retroactive correction changes a past decision. A prospective correction changes what future decisions may do. They are not substitutes for one another.

:::reveal Name two things nothing read for this course settles. ||| What the 1991 jury discussed, and how the standard of an individual's total body of built work is applied to a partner in a firm. The wording of the prize's purpose in 1991 is a third.

## Vocabulary
- **Retroactive correction**: an alteration to a decision already made, which the 2013 letter refuses as a matter of principle.
- **Prospective correction**: a change to what future decisions may do, which a rule admitting two individuals is an instance of.
- **Settled**: established by a document published by the institution that made the decision, which is the only standard this course accepts.
- **The reader's correction**: the fix available to anyone who knows what each document says, when nothing institutional is on offer.

## Sources
American Institute of Architects. (n.d.). *Gold Medal*. https://www.aia.org/design-excellence/awards/gold-medal

Pritzker Architecture Prize. (n.d.-b). *1991 laureate: Robert Venturi*. The Hyatt Foundation. https://www.pritzkerprize.com/laureates/1991

Quirk, V. (2013, June 16). *Pritzker rejects petition for Denise Scott Brown's retroactive award*. ArchDaily. https://www.archdaily.com/389074/pritzker-rejects-petition-for-denise-scott-brown-s-retroactive-award`,
    },
    {
      slug: "what-this-course-refused-to-print",
      title: "19 · What this course refused to print",
      section: "Section 5 · The correction that did happen, and the ledger",
      body: `A course that only tells you what it knows is hiding half its work. Here is the ledger, and every item on it is a decision rather than an oversight.

**Her current status.** This course makes no statement about whether she is living. It did not read a source that settles it, and for a course built on the rule that only a read document may be asserted, an exception here would be a strange place to start. Every sentence above is about a dated document.

**That she declined to attend the 1991 ceremony.** A common telling, and no source this course could open supports it. Not printed.

**The years the firm's name changed to include hers.** Two years circulate. The archive page that would settle them returned an error, so what remains is search summaries, and a date from a search summary is not a date. The course says the name changed and leaves the years out.

**A larger count of laureate signatories.** Search results give a bigger figure than the five *Architectural Record* named in April 2013. The five, with that date attached, is what this course prints.

**The date the petition was written, and her birth year and birthplace.** Seen only in summaries. Left out.

**The wording of the prize's stated purpose in 1991.** The course quotes the current wording and labels it current. The 1991 text was not read, so it is not asserted, which matters because that wording is load-bearing in section 4.

**Whether the two episodes in her essay happened as she describes them.** Presented as her account, with the artefacts named so a reader can check them, and never converted into flat fact.

**And a caution about the shape of the whole thing.** This case is unusually well documented: a prize that publishes its citations and its laureate list, a trade press that covered a petition, an author who wrote her own account, and an institute that publishes its award rules. That combination is rare. Most partnerships that produced joint work under one name left no comparable trail, so do not read this course as a survey. It is one case that happens to be legible.

**One sentence to take away.** Next time you read that somebody won a prize, ask three questions: what did the citation actually name, what did the format allow, and who, if anyone, had the power to change it afterwards.

:::reveal Why does this course make no statement about whether she is living? ||| Because it did not read a source that settles it, and the course asserts only what a read document supports.

:::reveal Why should this course not be read as a survey of the problem? ||| Because it is unusually well documented, with published citations, a laureate list, trade coverage, her own account and an institute's award rules, and most comparable partnerships left no such trail.

## Vocabulary
- **Ledger**: the explicit account a course gives of what it verified, what it attributed and what it refused to print.
- **Search summary**: a secondary snippet that reports a fact without being the document, which this course treats as a lead and never as a source.
- **Legible case**: one that happens to have left enough published record to be read closely, which is not the same as a typical case.
- **Load-bearing claim**: one an argument depends on, which is why an unread 1991 purpose statement is flagged rather than assumed.

## Sources
Mirviss, L. (2013, April 9). *The women behind the Denise Scott Brown petition*. Architectural Record. https://www.architecturalrecord.com/articles/2834-the-women-behind-the-denise-scott-brown-petition

Pritzker Architecture Prize. (n.d.-d). *About the prize*. The Hyatt Foundation. https://www.pritzkerprize.com/about

Scott Brown, D. (1989). Room at the top? Sexism and the star system in architecture. In Berkeley & McQuaid (Eds.), *Architecture: A place for women* (pp. 237-246). Smithsonian Institution Press. Reprinted by *MAS Context*. https://mascontext.com/issues/debate/room-at-the-top-sexism-and-the-star-system-in-architecture`,
    },
    {
      slug: "quiz-the-correction-and-the-ledger",
      title: "20 · Knowledge check: the correction and the ledger",
      section: "Section 5 · The correction that did happen, and the ledger",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does lesson 17 mean by compression?",
            options: [
              "Merging two events into one summary",
              "Shortening a quotation so that only its unambiguous part remains",
              "Reducing a long citation to the name of the issuing institution",
              "Awarding two honours to the same recipients in a single year",
            ],
            correctIndex: 0,
            explanation:
              "Such as attributing one joint medal to two different institutes, which is the error lesson 17 undoes.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What standard does this course accept for calling something settled?",
            options: [
              "A document from the deciding institution",
              "Agreement between at least three independent secondary accounts",
              "A claim repeated consistently across published retellings",
              "A statement by a participant who was present at the time",
            ],
            correctIndex: 0,
            explanation:
              "Each settled item in lesson 18 rests on a document published by the institution that made the decision.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the ledger say about the firm's name?",
            options: [
              "It changed, and the years are not printed",
              "It never carried the name of more than one of its partners",
              "It changed in two years that the course states precisely",
              "It is the one fact the course could not find any source for",
            ],
            correctIndex: 0,
            explanation:
              "The course says the name changed over time and leaves the years out, because what remains is search summaries.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "How does the AIA's own rule describe who may receive its Gold Medal?",
            options: [
              "A single individual or two individuals",
              "Any practice whose partners have worked together for at least two decades",
              "One living architect chosen from nominations made by the institute's chapters",
              "Up to three individuals whose joint work has been completed in one country",
            ],
            correctIndex: 0,
            explanation:
              "The published rule reads that the medal is open to a single individual or two individuals, living or deceased.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does the AIA rule say about whether a recipient must be alive?",
            options: [
              "Either, living or deceased",
              "Only a living architect may be honoured, as with some other major awards",
              "A deceased architect qualifies only when honoured alongside a living partner",
              "The rule is silent, leaving the question to the discretion of the jury",
            ],
            correctIndex: 0,
            explanation:
              "The rule includes the parenthesis living or deceased, which is what lets it honour someone long after their death.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does the AIA rule require of two individuals honoured together?",
            options: [
              "Collaborative efforts over time",
              "That both hold equal ownership stakes in the practice being honoured",
              "That both be licensed in the same jurisdiction at the time of the award",
              "That both have been nominated separately in a previous award cycle",
            ],
            correctIndex: 0,
            explanation:
              "The rule speaks of two individuals who through their collaborative efforts over time have created a singular body of distinguished work.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Whom does the AIA's recipient list name for the 2016 Gold Medal?",
            options: [
              "Venturi and Scott Brown",
              "Paul Revere Williams, honoured many years after his death in 1980",
              "Zaha Hadid, honoured as the first woman to receive the award alone",
              "Herzog and de Meuron, honoured for their joint Swiss practice",
            ],
            correctIndex: 0,
            explanation:
              "The list gives the 2016 medal to Robert Venturi, FAIA, and Denise Scott Brown, Hon. FAIA.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Which lesson elsewhere in this catalog already teaches that rule as an additive correction?",
            options: [
              "The Name on the Door, lesson 22",
              "Who Gets Named, lesson 9, on the second mechanism a historian identified",
              "The Paper and the Prize, lesson 5, on a paper and a prize disagreeing",
              "Who Signs the Print, lesson 2, on what a signature certifies",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on corrections that actually happened uses the same sentence and the same recipient entry, so this course does not repeat it.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does this course add to that existing lesson?",
            options: [
              "What the medal stood beside",
              "The date on which the two-person rule was first adopted by the institute",
              "The names of the jurors who selected the recipients for that year",
              "The number of nominations the institute received in that award cycle",
            ],
            correctIndex: 0,
            explanation:
              "A prize that named one laureate in 1991 and refused in 2013 to revisit it, set beside a different body naming both partners in 2016.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does this course say about a connection between the 2016 medal and the 1991 prize?",
            options: [
              "No document connects them",
              "The institute stated that its award answered the earlier decision",
              "The petition organisers confirmed that their campaign produced the medal",
              "Both bodies published a joint statement explaining the sequence",
            ],
            correctIndex: 0,
            explanation:
              "Two institutions, two formats, two decisions, and nothing read for this course linking them.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What is the honest version of the claim about 2016?",
            options: [
              "A correction happened in the award system",
              "The 1991 prize was corrected by a later decision of another institution",
              "The petition succeeded three years after it was formally refused",
              "The profession reversed a judgement that a jury had made in error",
            ],
            correctIndex: 0,
            explanation:
              "A correction happened in the profession's award system, which is a different claim from saying that the earlier prize was corrected.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does this course mean by a causal link?",
            options: [
              "A documented connection between events",
              "A sequence in which one event happens before another in time",
              "A pattern that repeats often enough to be treated as a rule",
              "A conclusion several independent commentators have reached",
            ],
            correctIndex: 0,
            explanation:
              "Sequence is not connection. Without a document tying them together, two decisions remain two decisions.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Which body awarded the 2016 Royal Gold Medal, and to whom?",
            options: [
              "RIBA, to Zaha Hadid",
              "The AIA, to Robert Venturi and Denise Scott Brown together",
              "The Pritzker Architecture Prize, to a partnership of two architects",
              "The Architects' Journal, to the organisers of the 2013 petition",
            ],
            correctIndex: 0,
            explanation:
              "Architectural Record reported in September 2015 that the Royal Institute of British Architects would give its 2016 Royal Gold Medal to Zaha Hadid.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "How did that report describe the 2016 Royal Gold Medal recipient?",
            options: [
              "The first woman to win it independent of a partner",
              "The first architect from outside Britain to receive the honour",
              "The first recipient to have also signed the 2013 petition",
              "The first person honoured jointly with a business partner",
            ],
            correctIndex: 0,
            explanation:
              "The report describes her as the first woman to win the Royal Gold Medal independent of a partner.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Why does lesson 17 bother undoing the confusion between the two 2016 medals?",
            options: [
              "A small error invites dismissal",
              "Because the two institutes have asked for the record to be clarified",
              "Because the Royal Gold Medal is the more prestigious of the two honours",
              "Because the joint medal would otherwise appear to have been awarded twice",
            ],
            correctIndex: 0,
            explanation:
              "Naming the wrong institution is the kind of small error that makes a true account easy to dismiss.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What is an additive correction?",
            options: [
              "A format that grows to hold more names",
              "A retraction issued alongside the original published announcement",
              "A second award made to the same recipient in a later year",
              "A statement of regret published without any change to the record",
            ],
            correctIndex: 0,
            explanation:
              "It enlarges a credit format rather than replacing one name with another, which is how a two-person rule works.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What is a prospective correction?",
            options: [
              "One that applies going forward",
              "One issued before the decision it corrects has been announced",
              "One that reopens a past decision once new evidence is produced",
              "One made by the same body that made the original decision",
            ],
            correctIndex: 0,
            explanation:
              "It changes what future decisions may do, as distinct from a retroactive one that would alter a past decision.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Given a rule of finality, where did the 2016 correction come from?",
            options: [
              "A different institution",
              "The same jury, reconstituted with its original membership",
              "The petitioners, who were granted a formal right of appeal",
              "A court, which ordered the earlier decision to be amended",
            ],
            correctIndex: 0,
            explanation:
              "If a body cannot reopen its own decision, a correction has to come from somewhere else, and in 2016 something did.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What does the record settle about the award of 1991?",
            options: [
              "One laureate was named",
              "That the jury debated and rejected the option of naming two people",
              "That the firm asked for a joint award and was turned down",
              "That the citation was written before the laureate had been chosen",
            ],
            correctIndex: 0,
            explanation:
              "The prize named one laureate for that year, which is established by the prize's own page.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the prize's own 1991 page establish about her role in the firm?",
            options: [
              "A partner since 1969",
              "An employee designer who left the practice before the award was made",
              "A consulting planner retained on specific projects rather than a partner",
              "A co-author of the firm's books with no role in its built work",
            ],
            correctIndex: 0,
            explanation:
              "The page says she has been a partner in the firm since 1969 and his collaborator for thirty years.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the jury citation of 1991 establish about how the jury described her?",
            options: [
              "As his talented partner",
              "As a co-recipient of the award being announced that year",
              "As a planner whose work fell outside the scope of the prize",
              "As an author of the accompanying theoretical writings only",
            ],
            correctIndex: 0,
            explanation:
              "The citation credits his understanding of urban context as complemented by his talented partner, named in the same sentence.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "When did she write her account of architectural attribution, and when was it published?",
            options: [
              "Written in 1975, published in 1989",
              "Written in 1989 and published immediately in a Smithsonian collection",
              "Written in 1991 in response to the award and published two years later",
              "Written in 2013 for the petition and published by a trade magazine",
            ],
            correctIndex: 0,
            explanation:
              "The essay says it abridges an article written in 1975, and its source note dates first publication to 1989.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the chair of the 2013 jury do in response to the petition?",
            options: [
              "Refused in writing",
              "Declined to respond, leaving the petition formally unanswered",
              "Reopened the file and referred it to the foundation's trustees",
              "Granted a retroactive award subject to the agreement of the laureate",
            ],
            correctIndex: 0,
            explanation:
              "The written reply is the best document in this course precisely because most institutions say nothing.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "On what ground did the 2013 refusal rest?",
            options: [
              "The finality of past juries",
              "A published rule limiting the award to one person in any year",
              "An assessment that her built work did not meet the standard",
              "The absence of a nomination submitted through the proper channel",
            ],
            correctIndex: 0,
            explanation:
              "A later jury cannot reopen or second guess the work of an earlier jury, and none has ever done so.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the 2013 letter affirm alongside its refusal?",
            options: [
              "Continued eligibility",
              "That a joint citation would be appended to the earlier year's record",
              "That the jury would review the decision again after five years",
              "That the earlier jury had acted on incomplete information",
            ],
            correctIndex: 0,
            explanation:
              "It assures the petitioners that she remains eligible for the award, on the basis of an architect's total body of built work.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the 2013 letter concede?",
            options: [
              "That discussions can reflect cultural biases",
              "That the earlier jury had reached the wrong conclusion on the evidence",
              "That the prize's format had prevented a joint award in earlier years",
              "That petitions of sufficient size oblige a jury to reconsider",
            ],
            correctIndex: 0,
            explanation:
              "It says discussions relating to architectural creation may reflect cultural biases that underplay a woman's role in the creative process.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the prize's laureate list establish?",
            options: [
              "Six years carry more than one name",
              "That every partnership honoured since 2001 was named in full",
              "That the prize named two people for the first time in 2016",
              "That single-name years ceased after the petition was refused",
            ],
            correctIndex: 0,
            explanation:
              "The list names more than one laureate in 1988, 2001, 2010, 2017, 2020 and 2021.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which of these does nothing read for this course settle?",
            options: [
              "What the 1991 jury discussed",
              "That the prize named one laureate for the year in question",
              "That a petition asked the prize to recognise her for that year",
              "That the AIA's rule admits two individuals for its Gold Medal",
            ],
            correctIndex: 0,
            explanation:
              "No document read here reports the deliberation, which is why the course never describes it.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which wording does this course treat as unestablished?",
            options: [
              "The purpose statement in force in 1991",
              "The eligibility sentence published by the AIA for its Gold Medal",
              "The sentence in the 2013 letter about reopening a previous jury",
              "The sentence on the 1991 page dating her partnership to 1969",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes the current wording, labels it current, and does not assert what the text said in that year.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What question about the standard of built work does this course leave open?",
            options: [
              "How it applies to a partner",
              "Whether the letter names a standard for the award at all",
              "Whether built work or written work weighs more heavily with juries",
              "Whether the standard was introduced before or after 1991",
            ],
            correctIndex: 0,
            explanation:
              "Assessing an individual's total body of built work inside a partnership reproduces the credit question, and nothing read explains how it is done.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which lesson elsewhere states that a correction does not reissue the past?",
            options: [
              "Who Signs the Print, lesson 22",
              "The Name on the Door, lesson 1, on the credited unit being a firm",
              "Who Gets Named, lesson 9, on a second mechanism in scientific credit",
              "The Paper and the Prize, lesson 5, on the paper and the prize",
            ],
            correctIndex: 0,
            explanation:
              "A correction fixes the format going forward, and it does not reissue the past. The 2013 letter is that sentence spoken by the institution refusing.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does this course call the fix that remains when no institutional correction is available?",
            options: [
              "The reader's correction",
              "A retroactive award, granted once the original jury reconvenes",
              "A public campaign, sustained until the institution changes its mind",
              "An additive correction, made by enlarging the original format",
            ],
            correctIndex: 0,
            explanation:
              "Knowing what the citation said, who the partners were, and what was refused and when.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why is that weaker fix still worth having?",
            options: [
              "It is the one actually available",
              "Because it obliges the institution to publish a further statement",
              "Because it carries the same standing as a reissued award",
              "Because it prevents any future jury from repeating the decision",
            ],
            correctIndex: 0,
            explanation:
              "It is weaker than a reissued award and it is what remains, which is why reading these documents properly matters more than winning an argument about them.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does this course make no statement about whether she is living?",
            options: [
              "No source it read settles it",
              "Because the subject's current status is irrelevant to every lesson",
              "Because the institutions cited have asked that it not be reported",
              "Because the course covers only events before the year 2000",
            ],
            correctIndex: 0,
            explanation:
              "The course asserts only what a read document supports, and making an exception here would be a strange place to start.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Which common telling does the ledger name as tested and refused?",
            options: [
              "That she declined to attend the ceremony",
              "That the jury citation of that year mentioned her by name",
              "That the firm carried her name for part of its history",
              "That a petition gathered more than seventeen thousand signatures",
            ],
            correctIndex: 0,
            explanation:
              "It circulates widely, and no source this course could open supports it, so it is not printed.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Why does the course leave out the years in which the firm's name changed?",
            options: [
              "Only search summaries remain",
              "Because the firm's own records contradict the published accounts",
              "Because the changes fall outside the period the course covers",
              "Because two institutions publish incompatible versions of the dates",
            ],
            correctIndex: 0,
            explanation:
              "The archive page that would settle them returned an error, and a date from a search summary is not a date.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Which laureate-signatory figure does this course print?",
            options: [
              "Five, as of April 2013",
              "Nine, which is the number that appears most often in search results",
              "Seventeen, matching the thousands of signatures reported in June",
              "None, since no laureate is recorded as having signed the petition",
            ],
            correctIndex: 0,
            explanation:
              "A larger figure circulates in search results. The five that Architectural Record named, with that date attached, is what gets printed.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Which of these is left out of the course as summary-only material?",
            options: [
              "The date the petition was written",
              "The date of the letter as the reproduction gives it",
              "The signature total reported in June 2013",
              "The title under which the petition was posted",
            ],
            correctIndex: 0,
            explanation:
              "It was seen only in summaries, as were her birth year and birthplace, so none of the three appears.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Why does the unread 1991 purpose wording get special attention in the ledger?",
            options: [
              "It is load-bearing in section 4",
              "Because the prize has since removed the statement from its website",
              "Because two versions of the sentence are published side by side",
              "Because the 2013 letter quotes it and the course does not",
            ],
            correctIndex: 0,
            explanation:
              "Section 4 uses the permission in the current wording, so the gap between current and 1991 has to be visible rather than assumed away.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "How are the two publishing episodes from her essay presented?",
            options: [
              "As her account",
              "As findings confirmed against the journal issue and the book jacket",
              "As allegations that the publishers concerned have formally denied",
              "As background context with no bearing on the credit question",
            ],
            correctIndex: 0,
            explanation:
              "Presented as her account, with the artefacts named so a reader can check them, and never converted into flat fact.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Why does the ledger call this case unusually legible?",
            options: [
              "Several institutions published their own records",
              "Because the partnership kept a complete archive open to any researcher",
              "Because the events are recent enough for participants to be interviewed",
              "Because only one institution was involved from beginning to end",
            ],
            correctIndex: 0,
            explanation:
              "A prize publishing citations and a laureate list, a trade press covering a petition, an author's own account, and an institute publishing its award rules.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "What does the ledger warn against reading this course as?",
            options: [
              "A survey",
              "A close reading of four institutional documents",
              "A case built entirely from published institutional records",
              "An account that separates testimony from institutional findings",
            ],
            correctIndex: 0,
            explanation:
              "Most partnerships that produced joint work under one name left no comparable trail, so this is one case that happens to be legible.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "What three questions does the course leave you with about any prize?",
            options: [
              "What was named, what was allowed, who could change it",
              "Who nominated the winner, who funded the award, who attended the ceremony",
              "How old the prize is, how much it pays, and how often it is given",
              "Which jury sat, which candidates lost, and which critics objected",
            ],
            correctIndex: 0,
            explanation:
              "What did the citation actually name, what did the format allow, and who had the power to change it afterwards.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "How does this course treat a search summary?",
            options: [
              "As a lead, not a source",
              "As a source of equal standing to the page it summarises",
              "As a citation that may be quoted when the original is unreachable",
              "As evidence sufficient for a claim that no lesson depends on",
            ],
            correctIndex: 0,
            explanation:
              "It reports a fact without being the document, so it can point you somewhere and it cannot be cited.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "What is a ledger, as this course uses the term?",
            options: [
              "An account of what was refused",
              "A list of every source consulted during the writing of a course",
              "A record of the dates on which each document was published",
              "A summary of the arguments the course expects readers to reject",
            ],
            correctIndex: 0,
            explanation:
              "The explicit account a course gives of what it verified, what it attributed and what it refused to print.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "What is a load-bearing claim?",
            options: [
              "One an argument depends on",
              "One that appears in more than one lesson of the same course",
              "One published by the institution that made the decision",
              "One a reader is most likely to remember after finishing",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the unread 1991 purpose statement is flagged rather than quietly assumed.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Why does the ledger say each of its items is a decision rather than an oversight?",
            options: [
              "Each was tested and then left out",
              "Because every item was removed at the request of a named reviewer",
              "Because the items were never researched in the first place",
              "Because each will be added once the course is made public",
            ],
            correctIndex: 0,
            explanation:
              "Saying what was tested and refused is what stops an omission from reading as an accident.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "What does this course mean by a legible case?",
            options: [
              "One that left enough published record",
              "One in which every participant is still available to be interviewed",
              "One whose documents are written in plain and accessible language",
              "One that a single institution has summarised in an official history",
            ],
            correctIndex: 0,
            explanation:
              "One that happens to have left enough published record to be read closely, which is not the same as a typical case.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-the-partner-and-the-prize",
      title: "21 · Final assessment",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two documents make this credit question unusually easy to teach?",
            options: [
              "The 1991 laureate page and its jury citation",
              "A newspaper obituary and a later biography written from family papers",
              "A licensing board record and a set of stamped construction drawings",
              "A court judgement and the transcript of the hearing that produced it",
            ],
            correctIndex: 0,
            explanation:
              "Both halves of the question sit on pages published by the institution that made the decision.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What does this course refuse to reconstruct, and why?",
            options: [
              "The 1991 jury's discussion",
              "The wording of the jury citation, since the page reproduces it in full",
              "The list of jurors, since the prize publishes it on its own site",
              "The date of the 2013 letter, since the reproduction carries one",
            ],
            correctIndex: 0,
            explanation:
              "No source read for this course says what was discussed, and a course that guessed would be doing the thing it warns against.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "What should a reader be able to say about any document by the end of the course?",
            options: [
              "What it establishes, asserts, and omits",
              "Which institution is most likely to have produced it and in what decade",
              "How many people were involved in the decision it records",
              "Whether its author would have wished it published at the time",
            ],
            correctIndex: 0,
            explanation:
              "What it establishes, what it merely asserts, and what it is silent about.",
            sourceLessonSlug: "one-page-two-names",
          },
          {
            prompt: "Of the three descriptions the 1991 page gives her, which one records a business fact?",
            options: [
              "Partner in the firm since 1969",
              "Collaborator in the evolution of architectural theory and design",
              "Wife of the architect named as that year's laureate",
              "Educator, listed among the four occupations the page gives",
            ],
            correctIndex: 0,
            explanation:
              "An ownership stake and its date are the kind of claim a firm's own records can confirm or refute.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "What do a three-name book credit and a one-name prize on one page establish together?",
            options: [
              "That formats answer different questions",
              "That the publisher and the prize disagreed about who did the work",
              "That the jury had not read the book before it made its decision",
              "That at least one of the two credits contains a factual error",
            ],
            correctIndex: 0,
            explanation:
              "The difference is in what each format is for, not in who did the work.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "Before reading a credit line for its content, what should you establish?",
            options: [
              "Which question the format answers",
              "Whether the institution that issued it still exists today",
              "How many other credits the same work has received elsewhere",
              "Whether anyone named in it has objected to its wording",
            ],
            correctIndex: 0,
            explanation:
              "Only then can you say whether a name missing from it is an error at all.",
            sourceLessonSlug: "three-words-for-one-person",
          },
          {
            prompt: "How does a registry differ from a prize?",
            options: [
              "A registry records, a prize chooses",
              "A registry is annual and a prize may be awarded at any interval",
              "A registry covers buildings and a prize covers only people",
              "A registry is public and a prize is decided behind closed doors",
            ],
            correctIndex: 0,
            explanation:
              "A prize makes a choice against a stated purpose, by people who meet and decide, which is why it is not a record of who did the work.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "Why does owning a firm not settle what a prize will name?",
            options: [
              "A prize is not a property record",
              "Because prize juries are barred from considering ownership documents",
              "Because a firm's ownership is confidential and cannot be verified",
              "Because ownership changes too often for a jury to rely on it",
            ],
            correctIndex: 0,
            explanation:
              "Ownership answers who owns the practice. A prize answers whom a jury chose, which is a different question.",
            sourceLessonSlug: "what-a-prize-names",
          },
          {
            prompt: "What does the essay of 1975 establish, and what does it not?",
            options: [
              "Her judgement of the risk, not the risk itself",
              "The reception her ideas met, and not the date she wrote them",
              "The decisions publishers took, and not her own view of them",
              "The reasons the jury gave, and not the reasons it held",
            ],
            correctIndex: 0,
            explanation:
              "It establishes what she judged the cost of publishing would be. Nobody can run the experiment to show the cost would have been paid.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "Why does the chronology of that essay matter?",
            options: [
              "It predates the 1991 prize",
              "It was written in the same month the petition was launched",
              "It was published after the 2013 letter had been received",
              "It was drafted while the jury for that year was sitting",
            ],
            correctIndex: 0,
            explanation:
              "Written in 1975 and published in 1989, so it describes a practice rather than reacting to an outcome.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What is testimony, in this course's sense?",
            options: [
              "A first-hand account by an interested party",
              "A statement sworn before a body with power to compel the truth",
              "A finding published by an institution with no stake in the result",
              "A reconstruction assembled by a historian from surviving papers",
            ],
            correctIndex: 0,
            explanation:
              "First-hand, which is its strength, and interested, which is its limit. The honest use is to say exactly what it is evidence of.",
            sourceLessonSlug: "room-at-the-top",
          },
          {
            prompt: "What makes her account of the two publishing episodes checkable?",
            options: [
              "It names artefacts a reader can find",
              "It was confirmed by the publishers concerned at the time",
              "It appeared in a peer-reviewed architectural journal",
              "It was repeated by several independent critics afterwards",
            ],
            correctIndex: 0,
            explanation:
              "A journal issue and a book jacket are objects someone else can go and read.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does the dust-jacket episode show about corrections?",
            options: [
              "A partial correction leaves part uncorrected",
              "A publisher never acts on a complaint about a credit line",
              "A correction always restores the record to its accurate state",
              "A correction made quickly is more effective than a slow one",
            ],
            correctIndex: 0,
            explanation:
              "Her name was added to the jacket while the flap copy still described a group she was not counted in.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What is laundering, as this course uses the word?",
            options: [
              "Dropping the attribution",
              "Quoting a passage more fully than the argument requires",
              "Citing a reprint in place of the original publication",
              "Repairing a typographical error before quoting a sentence",
            ],
            correctIndex: 0,
            explanation:
              "Presenting a first-hand account as established fact by removing the source, which is why this course names the source every time.",
            sourceLessonSlug: "two-episodes-she-records",
          },
          {
            prompt: "What does the firm's information sheet show about written credit policies?",
            options: [
              "They bind only the firm",
              "They bind any publication that has been sent a copy of them",
              "They are unnecessary once a firm carries both partners' names",
              "They are enforceable against a prize jury that receives one",
            ],
            correctIndex: 0,
            explanation:
              "A critic, a journal, a publisher and a prize jury each have their own format and editorial control. A policy is a request.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "Why does the course print a garbled word from the reprint rather than fixing it?",
            options: [
              "Silent repairs let inventions into a record",
              "Because the reprint's publisher forbids any alteration when quoting",
              "Because the intended word cannot be inferred from the sentence",
              "Because the error changes the meaning of the passage entirely",
            ],
            correctIndex: 0,
            explanation:
              "Once a quiet repair is in, a later reader cannot tell which words were the author's.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What rule about motive does this course follow?",
            options: [
              "Say what the record shows",
              "Report the motive the affected person believed was operating",
              "Name the most likely motive when the pattern makes one clear",
              "Prefer the motive that the largest number of sources agree on",
            ],
            correctIndex: 0,
            explanation:
              "Say what the record shows and not a motive it does not. The record shows publications printing one name.",
            sourceLessonSlug: "the-information-sheet",
          },
          {
            prompt: "What exactly does a petition establish?",
            options: [
              "That people signed a page",
              "That the claim printed on the page has been independently checked",
              "That the institution addressed accepts the request being made",
              "That most of the relevant profession holds the view expressed",
            ],
            correctIndex: 0,
            explanation:
              "It measures attention, which is what puts a question in front of an institution that would otherwise never answer.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "Why must a signature total always carry its date and its source?",
            options: [
              "It is a moving number",
              "Because petition platforms require attribution when a total is quoted",
              "Because the sources that report it disagree about which is correct",
              "Because the total is fixed only once the petition has closed",
            ],
            correctIndex: 0,
            explanation:
              "A figure with no date attached tells a reader nothing about when it was true.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "In what sense did the 2013 petition succeed?",
            options: [
              "It drew a written answer",
              "It caused a second name to be added to the earlier award",
              "It changed the published eligibility rules of the prize",
              "It secured signatures from a majority of living laureates",
            ],
            correctIndex: 0,
            explanation:
              "It produced a written reply from a body that does not usually give one, and that reply is the best document in the course.",
            sourceLessonSlug: "the-2013-petition",
          },
          {
            prompt: "What ground does the 2013 letter give for refusing?",
            options: [
              "A later jury cannot reopen an earlier one",
              "A published rule limits the award to one person in any year",
              "Her built work had not been assessed against the standard",
              "The request was made outside the prize's nomination window",
            ],
            correctIndex: 0,
            explanation:
              "The refusal is a rule about juries in time, not a judgement about her work and not a statement about the format.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "Why is a stated ground valuable to a reader?",
            options: [
              "It can be checked",
              "It obliges the institution to revisit the matter when asked again",
              "It must be approved by the full membership of the institution",
              "It guarantees that the same reason will be applied in future",
            ],
            correctIndex: 0,
            explanation:
              "A refusal that gives no reason cannot be examined. A named principle can be tested against the institution's own record.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "How does this course describe the copy of the letter it works from?",
            options: [
              "A reproduction published by a third party",
              "The original, obtained from the institution that wrote it",
              "A transcript taken down as the letter was read aloud",
              "A summary prepared by the petition's organisers",
            ],
            correctIndex: 0,
            explanation:
              "It reads the letter as ArchDaily reproduces it, quotes short excerpts, and says so every time.",
            sourceLessonSlug: "the-refusal-read-closely",
          },
          {
            prompt: "What is the trap in reading a document for its silences?",
            options: [
              "Treating silence as agreement",
              "Overlooking a paragraph the reproduction happens to omit",
              "Assuming the letter's author also made the original decision",
              "Quoting more of the document than the argument needs",
            ],
            correctIndex: 0,
            explanation:
              "A document answers the question it was asked, so an absent sentence may mean the subject never came up.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What do the letter's omissions actually establish?",
            options: [
              "Finality was the only stated ground",
              "The institution privately accepted the substance of the petition",
              "No rule capping the number of laureates has ever existed",
              "The earlier jury never considered the partnership at all",
            ],
            correctIndex: 0,
            explanation:
              "As of 2013, the stated reason rested entirely on the finality of past juries, and on nothing else put in writing.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "Which defence, available to any body that believes it, does the letter not mount?",
            options: [
              "That she did not do the work",
              "That a later jury cannot reopen an earlier jury's decision",
              "That she remains eligible for the award in future years",
              "That bias can underplay a woman's role in creative work",
            ],
            correctIndex: 0,
            explanation:
              "It is the strongest possible refusal, and the letter does not make it or any weaker version of it.",
            sourceLessonSlug: "what-the-letter-does-not-say",
          },
          {
            prompt: "What does the prize's own laureate list rule out?",
            options: [
              "That the format cannot hold two names",
              "That any jury ever considered honouring a partnership",
              "That the prize has published a list of its past laureates",
              "That the purpose statement has been revised since 1991",
            ],
            correctIndex: 0,
            explanation:
              "More than one name appears in six separate years, so a multi-name award was not unprecedented in kind.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What does that list fail to establish?",
            options: [
              "What any particular jury considered",
              "That more than one laureate has been named in some years",
              "That partnerships appear among the prize's later laureates",
              "That the list is published by the prize on its own site",
            ],
            correctIndex: 0,
            explanation:
              "A list of outcomes is not a record of deliberations.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What is the transferable method in checking the prize's list?",
            options: [
              "Test a stated ground against the institution's own record",
              "Count how many awards an institution has given since it began",
              "Compare the coverage two trade magazines gave the same event",
              "Ask the institution to confirm its published rules in writing",
            ],
            correctIndex: 0,
            explanation:
              "An institution gave a stated ground, and its own published record is the first place to test it.",
            sourceLessonSlug: "the-format-could-hold-two",
          },
          {
            prompt: "What do the prize's own pages show about the 1991 jury and the 2013 jury?",
            options: [
              "They are different groups of people",
              "They share a chairman who served across both decades",
              "They are drawn from one standing panel that rarely changes",
              "They met jointly to consider the petition in 2013",
            ],
            correctIndex: 0,
            explanation:
              "The 1991 list is chaired by J. Carter Brown and does not include the chair who signed in 2013.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does a rule of finality protect, and what does it cost?",
            options: [
              "It protects stability and costs correctability",
              "It protects the jury's privacy and costs the institution its reputation",
              "It protects past laureates and costs future candidates their eligibility",
              "It protects the format and costs the institution its published rules",
            ],
            correctIndex: 0,
            explanation:
              "An award whose past decisions can be reopened has no decisions. The cost is that a class of error stays uncorrectable by the body that made it.",
            sourceLessonSlug: "a-jury-is-not-the-same-jury",
          },
          {
            prompt: "What does the standard of an individual's total body of built work raise for a partner?",
            options: [
              "A measurement problem",
              "A conflict of interest between the two partners of a practice",
              "A requirement to be licensed in more than one jurisdiction",
              "A need for the firm to nominate one partner formally",
            ],
            correctIndex: 0,
            explanation:
              "Deciding which buildings belong to which individual reproduces the credit question inside the assessment.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "What does this course do when its documents support a question but not an answer?",
            options: [
              "It teaches the question",
              "It reports the most widely repeated answer with a caution",
              "It drops the subject so no partial account is taught",
              "It infers an answer from the pattern of the other documents",
            ],
            correctIndex: 0,
            explanation:
              "A course that answered this one would be more satisfying and less true.",
            sourceLessonSlug: "total-body-of-built-work",
          },
          {
            prompt: "Under the AIA's rule, who may receive its Gold Medal?",
            options: [
              "One or two individuals, living or deceased",
              "Any practice whose partners have collaborated for two decades",
              "A single living architect nominated by a chapter of the institute",
              "Up to three individuals whose work was completed in one country",
            ],
            correctIndex: 0,
            explanation:
              "The rule speaks of collaborative efforts over time producing a singular body of distinguished architectural work.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Why can this course not call the 2016 medal a correction of the 1991 prize?",
            options: [
              "No document connects the two decisions",
              "Because the medal was awarded by the same body that made the earlier decision",
              "Because the medal was refused by one of the two recipients",
              "Because the earlier prize had already been formally withdrawn",
            ],
            correctIndex: 0,
            explanation:
              "Two institutions, two formats, two decisions. The supported claim is that a correction happened in the award system.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "Which body gave the 2016 Royal Gold Medal, and to whom?",
            options: [
              "RIBA, to Zaha Hadid",
              "The AIA, to Robert Venturi and Denise Scott Brown together",
              "The Pritzker Architecture Prize, to a two-person partnership",
              "The Architects' Journal, to the organisers of the petition",
            ],
            correctIndex: 0,
            explanation:
              "One year, two medals, two different stories, and naming the wrong institution makes a true account easy to dismiss.",
            sourceLessonSlug: "a-format-that-holds-two-names",
          },
          {
            prompt: "What is the difference between a retroactive and a prospective correction?",
            options: [
              "One changes the past, the other changes the future",
              "One is made by an institution and the other by an individual",
              "One is published and the other is recorded only internally",
              "One requires a petition and the other requires a court order",
            ],
            correctIndex: 0,
            explanation:
              "The 2013 letter refuses the first, and a rule admitting two individuals is an instance of the second. They are not substitutes.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What correction remains when an institution will not reopen and another's rule cannot reach back?",
            options: [
              "The one a reader performs",
              "An appeal to the body that funds the award",
              "A second petition, submitted in a later year",
              "A published statement of regret from the original jury",
            ],
            correctIndex: 0,
            explanation:
              "Knowing what the citation said, who the partners were, and what was refused and when. Weaker than a reissued award, and actually available.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which of these does the record settle?",
            options: [
              "That the 2013 chair refused in writing",
              "That the 1991 jury weighed and rejected a two-name award",
              "That the AIA acted in response to the earlier refusal",
              "That the prize's purpose was worded identically in 1991",
            ],
            correctIndex: 0,
            explanation:
              "The written refusal exists and is reproduced. The other three are things nothing read for this course establishes.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does the course print five laureate signatories rather than a larger circulating figure?",
            options: [
              "Five is the figure it read, with a date",
              "Because only five of the signatories were living at the time",
              "Because the petition page lists exactly five laureates",
              "Because the 2013 letter names five laureates and no others",
            ],
            correctIndex: 0,
            explanation:
              "A figure seen only in a search snippet is not a figure this course will assert.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
          {
            prompt: "Why should this course not be read as a survey of the problem?",
            options: [
              "It is an unusually legible case",
              "It covers only the decisions of a single institution",
              "It relies entirely on one author's published testimony",
              "It was written before most of the relevant records were released",
            ],
            correctIndex: 0,
            explanation:
              "Published citations, a laureate list, trade coverage, her own account and an institute's award rules. Most comparable partnerships left no such trail.",
            sourceLessonSlug: "what-this-course-refused-to-print",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `the-partner-and-the-prize`. Every one of them corresponds to a hedge that is
// actually written into a lesson, per the repo rule that a hedge without a check is a hedge nobody
// will ever clear.
//
//  A. key "dsb-pritzker-purpose-1991" · severity MEDIUM · lesson "what-a-prize-names"
//     title: What did the Pritzker's stated purpose say in 1991?
//     quote: "This course quotes the wording as it stands today and does not claim it is the
//            wording that was in force in 1991, because it did not read the 1991 text."
//     question: What was the verbatim wording of the prize's purpose statement in force in 1991,
//            and did it then read "architect or architects"?
//     claim: Lessons 3 and 13 quote the CURRENT wording, "To honor a living architect or
//            architects whose built work demonstrates...", labelled as current, and use the plural
//            as evidence that the format permits more than one name.
//     stakes: This is the most load-bearing hedge in the course. Section 4's argument is that the
//            1991 refusal was not a format problem. If the 1991 wording was singular, that argument
//            weakens and lesson 13 needs rewriting. If it was already plural, the hedge can go.
//     needs: the verbatim purpose sentence as published in or before 1991, with its source and date.
//     where: the Hyatt Foundation's own printed materials for 1991; an archived capture of
//            pritzkerprize.com; the prize's published monographs and annual ceremony programmes.
//
//  B. key "dsb-vsba-firm-name-years" · severity LOW · lesson "three-words-for-one-person"
//     quote: "This course does not print the years in which the firm's name changed, because the
//            archive page that would settle them could not be opened."
//     question: In what years did the practice become Venturi, Rauch and Scott Brown, and then
//            Venturi, Scott Brown and Associates?
//     claim: The course says only that the name changed over time and that The Cultural Landscape
//            Foundation records the practice as formerly known as Venturi, Rauch and Scott Brown.
//     stakes: Low. Nothing in the argument depends on the dates; they would only sharpen lesson 2.
//     needs: the two dates, from a record rather than a search summary.
//     where: the Architectural Archives of the University of Pennsylvania (the page that would
//            settle it returned 403 on 2026-09-18); the firm's own published chronology.
//
//  C. key "dsb-petition-laureate-signatories" · severity LOW · lesson "the-2013-petition"
//     quote: "A larger figure for laureate signatories circulates in search results; this course
//            prints only the five it read, as of that April date."
//     question: How many Pritzker laureates ultimately signed the 2013 petition, and who were they?
//     claim: Lesson 9 prints the five Architectural Record named on 9 April 2013 (Venturi, Hadid,
//            Koolhaas, Herzog, de Meuron) and attaches that date to the figure.
//     stakes: Low, but it is the kind of number that gets repeated. A larger count seen only in a
//            snippet must not enter the lesson.
//     needs: a dated source naming each laureate signatory.
//     where: the Change.org petition's signatory list; Architectural Record's later coverage;
//            Architects' Journal coverage of the campaign.
//
//  D. key "dsb-pritzker-since-2013" · severity MEDIUM · lesson "total-body-of-built-work"
//     quote: "It did not check the years after 2013 for that purpose, and rather than guess, it
//            files the question as an open one."
//     question: Has any Pritzker jury since 2013 acted on the eligibility the 2013 letter affirms?
//     claim: Lesson 15 states the letter's offer of continued eligibility and says explicitly that
//            this course does not know what became of it.
//     stakes: A learner will ask. Leaving it open is honest; leaving it open forever is a gap.
//     needs: the prize's laureate list read year by year from 2013 forward, with the answer stated
//            either way.
//     where: pritzkerprize.com/laureates.
//
//  E. key "dsb-room-at-the-top-printed-text" · severity LOW · lesson "the-information-sheet"
//     quote: "In the reprint read for this course, the sentence continues 'the person who signed
//            the article or the nook'."
//     question: What does the printed text of "Room at the Top?" read at that point, in the 1989
//            Smithsonian Institution Press edition or the 2009 AA Words Four reprint?
//     claim: The course quotes up to the unambiguous part, prints the garble openly, and says the
//            word is almost certainly "book".
//     stakes: Low, and the lesson uses the garble deliberately as a fidelity example. Settling it
//            would let the lesson say what the printed text reads rather than what it probably reads.
//     needs: the sentence as printed, with page number and edition.
//     where: Berkeley & McQuaid (Eds.), Architecture: A Place for Women (1989), pp. 237-246;
//            AA Words Four: Having Words (2009), pp. 79-89.
//
//  F. key "dsb-aia-two-person-rule-date" · severity LOW · lesson "a-format-that-holds-two-names"
//     question: When did the AIA Gold Medal's eligibility rule change to admit two individuals?
//     claim: The course prints the rule and no date for its adoption, matching the treatment in
//            `the-name-on-the-door` lesson 22, because the AIA's page states the rule and not its
//            history.
//     stakes: A date would show whether the two-person rule predated or followed the 2016 award,
//            which is the difference between a format that was already open and one that opened.
//     needs: the adoption date, with the AIA document that records it.
//     where: AIA board resolutions and award programme histories; the institute's archives.
//
// NOT A RESEARCH CHECK, DELIBERATELY: whether Denise Scott Brown is living. The course makes no
// statement of current status anywhere, so there is no hedge in a lesson to clear. If BAM wants the
// course to say, that is an editorial decision for him and not a source-verification task.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file). Import:
//   import { THE_PARTNER_AND_THE_PRIZE_COURSE } from "./data/the-partner-and-the-prize-course";
//
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "the-partner-and-the-prize",
//     course: THE_PARTNER_AND_THE_PRIZE_COURSE,
//     category: "Culture & History",
//     navigationMode: "linear",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83). Built from public institutional records: the Pritzker " +
//       "Architecture Prize's own 1991 laureate page, jury citation and laureate list, the 2013 " +
//       "jury letter as reproduced by ArchDaily, the author's own published essay, and the AIA's " +
//       "Gold Medal rule. Held under the 2026-09-09 private-study rule.",
//   });
//
// NO seriesSlug / seriesTitle / seriesOrder / seriesCode / seriesPosition / seriesTrack: BAM's
// 2026-09-19 decision that private courses do not carry CREDIT codes. Price and priceType are
// insert-only and default to free, which is what this course wants; if the seeder requires them
// explicitly, `price: 0` and `priceType: "free"`.
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `the-partner-and-the-prize` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block, so
//    `pnpm check:citations` should find a non-zero count.
//  - STANDARDS: this is a document-analysis history course (sourcing, corroboration, claim versus
//    evidence, reading an institutional record), so it should be MAPPED in src/lib/standards/
//    rather than BACKLOGged. Until it is mapped it needs a one-line BACKLOG entry in
//    scripts/check-standards-coverage.ts or `pnpm lint` fails on it.
//  - AUDIT: `npx tsx scripts/audit-course.ts the-partner-and-the-prize --spec` cannot see the slug
//    until it is registered. The spec numbers were computed directly against this module instead,
//    and are in the handoff.
//  - VISIBILITY: private until BAM says otherwise, per E4. A public flip is a per-subject decision.
