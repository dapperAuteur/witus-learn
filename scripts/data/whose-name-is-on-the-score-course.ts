import type { AuthoredCourse } from "./authored-course";

// "Whose Name Is on the Score: Zitkala-Šá, The Sun Dance Opera, and the Copyright Register"
// (Culture & History). Slug to be registered: `whose-name-is-on-the-score`.
//
// RESEARCH TIER: 1. The brief IS the dossier
// (`plans/future-courses/uncredited/2026-09-18-zitkala-sa-brief.md`, section 6 is its verification
// log), per docs/course-method/README.md. BAM approved the brief on 2026-09-19.
//
// PRIVATE, FREE, NO SERIES CODE. BAM, 2026-09-19: private courses carry no CREDIT code. It keeps
// the series SLUG only, the way `who-built-the-blood-bank` does. Every `sourceLessonSlug` below is
// course-internal, so the registered slug does not affect them.
//
// WHAT THE BRIEF PROPOSED AND WHAT BAM CHANGED. The brief recommended one shared private course
// with Delia Derbyshire, whose brief sits beside it. BAM approved Zitkala-Šá only; Derbyshire is
// still being researched. So this is her material as a STANDALONE private course, shaped so a
// second case can be added later as its own section: Sections 1 and 4 carry the general frame
// (what an instrument is, what a record can and cannot settle) and Sections 2 and 3 carry the
// case. A Derbyshire section would slot between Section 3 and Section 4 without rewriting either.
//
// THE A6 CONDITION, WHICH BAM CONFIRMED AND WHICH IS ABSOLUTE:
//   This course NEVER describes the Sun Dance ceremony, and NEVER describes the opera's staging of
//   it. It names the ceremony as the opera's subject, says it was outlawed at the time on the
//   Uintah and Ouray reservation (Hafen, 1998), gives Hafen's own reason for the rule, and then
//   stays on the paperwork. The subject of the course is the CREDIT RECORD: the 1912 registration,
//   the 1913 press, the unrecorded half-interest assignment, the 1935 and 1938 sole-proprietorship
//   claims, and what the 1909 Act made possible. Modelled on the dignity rule in
//   scripts/data/photography-credit-course.ts (the 1850 Zealy daguerreotypes).
//
// THE SECOND RULE, FROM plans/83 AND KEPT: DO NOT ASSERT AUTHORSHIP SHARES. No lesson says how much
// of the opera was hers or his. Lesson 9 is built on that rule and states what each document does
// and does not settle. Where an account is one person's, it is attributed to that person and the
// evidence against it is given: N. L. Nelson's 1913 account is Nelson's, and Smith's "several
// pieces of evidence tend to contradict" it is printed beside it (lesson 8).
//
// HER WRITING AND HER ADVOCACY ARE CONTEXT, NOT THE SPINE. Three of the four registration cards
// are for her books, and they are here because they show the same register recording her as author
// and as claimant. The Society of American Indians, the National Council of American Indians and
// the 1924 Oklahoma report appear only where a record about them is being checked. The brief's
// section 5 proposes a separate course on that life; it is NOT written here and needs its own brief.
//
// FETCH OR DO NOT CITE. The brief did the research on 2026-09-18. This pass re-fetched and READ
// the five registration-card images itself on 2026-09-20 (all five returned HTTP 200 and were read
// as images, not OCR), and re-checked two citation facts:
//   - Smith (2001) is Women & Music volume 5. Confirmed on the BYU Zitkala-Ša subject guide and in
//     a second listing. PAGE NUMBERS ARE STILL NOT CONFIRMED, so the reference below carries the
//     volume and no page range rather than a guessed one. Research check A.
//   - Open Library work OL45466908W: "Oklahoma's poor rich Indians", 1924, THREE author roles, two
//     of them marked "joint author". Re-fetched as JSON this pass.
//
// WHAT THIS PASS ADDED TO THE BRIEF, by reading the card images directly:
//   - The Sun Dance card carries the SAME NAME in every name field on both sides: the typed
//     heading, the claimant blank, the author blank, the "send certificate of registration to"
//     blank and the remitter blank. Five places, one name.
//   - Its corner box, headed "Write nothing here", carries a heavy "D 4", and its printed footer
//     directs a published dramatic composition to form D1 and a dramatico-musical composition to
//     form D2. The entry stamp begins "Cl. D", the 1909 Act's Class D.
//   - The 1929 renewal was claimed by Gertrude Bonnin "as author", and the certificate and the fee
//     went to and from Ginn and Company. The form's printed hint beside the claimed-as blank lists
//     author, widow, widower and child as the permitted answers.
//   - The 1901 card's top-right field label is literally "Author." and the line under it reads
//     "Zitkala-Ša."
//
// WHAT IS NOT PRINTED, AND WHY (the brief's UNVERIFIED list, kept out):
//   - THE REGISTRATION NUMBER on the 1912 card. It reads as "Cl. D 19211" with a handwritten mark
//     after it, and the brief could not match that to the 1912 Catalog of Copyright Entries. The
//     class is printed; the number is not. Research check B.
//   - WHICH SCORE OMITS HER NAME. The Library of Congress post says Hanson left her name off the
//     vocal score; Smith transcribes a revised piano-vocal score whose act I first page names her.
//     Lesson 7 prints both statements, attributes each, and says the BYU scores were not read here.
//     Research check C.
//   - THE ASSIGNMENT ITSELF, Hanson's later transfer to BYU, and whether the 1912 copyright was
//     renewed. All three are described only in secondary sources or not at all. Research checks D, E.
//   - THE EL PASO HERALD SENTENCE is printed as UNCORRECTED OCR and labelled as such in the lesson,
//     because the page image was not read. Research check F.
//   - Smith's own speculation about a motive for the belated assignment is named as speculation,
//     as she names it, and is not carried as a finding.
//
// ONE SOURCE ODDITY, recorded rather than smoothed: the Library of Congress Copyright Office post
// is BYLINED "Nicole McNew Chen" and a reply in its comments is signed "Nicole Lamberson". The
// byline is what is cited, as it appears.
//
// House style, matching scripts/data/drew-blood-bank-course.ts: `section` on every lesson;
// flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific
// terms; APA 7 `## Sources`; a quiz per teaching section (pool sized to the audit-course density
// target, serving 5, passing 80, shuffled) plus a final pooling 40 and serving 10, placed LAST;
// every question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and
// distractors long and specifically wrong, so check-longest-option passes by construction. No em
// dashes in user-visible copy.
export const WHOSE_NAME_ON_THE_SCORE_COURSE: AuthoredCourse = {
  title: "Whose Name Is on the Score: Zitkala-Šá, The Sun Dance Opera, and the Copyright Register",
  description:
    "In February 1913 an opera opened in Vernal, Utah, and the newspapers said a Yankton Dakota writer named Zitkala-Šá had written it with a local music teacher called William F. Hanson. Two months before that opening, on 12 December 1912, Hanson had already filed the vocal score with the Copyright Office, and the card he filled in names him in every blank it has: claimant, author, the person to send the certificate to, the person sending the fee. About a month after the premiere he signed a paper giving her an undivided half interest in the opera, had it notarized in Uintah County, and never recorded it. By 1935 and 1938 he was claiming sole proprietorship. Late in life he wrote her name back onto the score by hand, where almost nobody would read it. This course is about that record and not about the opera. It reads four registration cards from the same government catalogue, three of them naming her as author or claimant of her own books and one of them naming somebody else for the work they made together, and it reads them against the sections of the 1909 Copyright Act that say how an assignment is made, how it is recorded, and what happens when it is not. It keeps two rules throughout. It never describes the Sun Dance ceremony the opera took its subject from, or the opera's staging of it, because the credit question does not need them and a Native scholar who studied the collaboration says a performance today would violate tribal sovereignty and religious respect. And it never says how much of the opera was hers. The documents can say who filed, who signed, who was named and when. They cannot say that, and this course teaches the difference. Her case is also one of three in the private course Who the Rule Leaves Out, which sets it beside an employer's practice and a statute; this course is where the documents are read in full."
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — An instrument, and what it can hold
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "credit-is-written-on-an-instrument",
      title: "1 · Credit is written on an instrument",
      section: "Section 1 · An instrument, and what it can hold",
      body: `Credit sounds like an opinion and behaves like a document. Ask who made a thing and people answer with a feeling. Ask where that answer is written down, and the feeling turns into a short list of specific pieces of paper, each reaching a different number of people and binding a different number of them.

**Call each of those pieces of paper an instrument.** A title page is an instrument. So is a registration card in a government office, a newspaper story, a signed assignment between two people, and a line added by hand to a manuscript years later. All five of those exist for the work this course is about. They do not agree with each other, and the disagreement is the whole subject.

**The work, in one paragraph.** *The Sun Dance Opera*, an opera in three acts, was first produced at Orpheus Hall in Vernal, Utah, in February 1913, where it filled the hall for three nights (Smith, 2001). Two people made it. Zitkala-Šá was a writer, musician and organiser, born on the Yankton Indian Reservation on 22 February 1876 and described by the National Park Service as a member of the Yankton Dakota Sioux (National Park Service [NPS], 2022). She was living in eastern Utah at the time of the collaboration. William F. Hanson was a music teacher there: Hafen calls him a local Duchesne, Utah, music teacher, and Smith says he was then teaching at the Uintah Academy in Vernal (Hafen, 1998; Smith, 2001). One of those two names is on the copyright registration for the opera. It is not hers.

**What this course is.** A course about the credit record for that one work: a registration filed on 12 December 1912, the press coverage through 1913, an assignment that was signed and notarized and never recorded, two later productions at which one man presented himself as the sole owner, and a correction written by hand too late to reach the register. Every one of those documents is public, and you can open four of them yourself in Section 2.

**What this course is not, stated at the front because it is a rule and not a gap.** The opera took its subject from the Sun Dance, and at the time of the first production the practice was outlawed on the Uintah and Ouray reservation (Hafen, 1998). **This course does not describe the ceremony, and does not describe how the opera staged it.** P. Jane Hafen, who wrote the fullest scholarly study of the collaboration and writes as a Native woman and academic, says that were the whole opera "reconstructed or performed now, certainly it would violate contemporary notions of artistic and tribal sovereignty and religious respect", and adds that "there are some indigenous scholars who would dismiss Gertrude and The Sun Dance Opera" entirely (Hafen, 1998). The credit question does not need the ceremony. It needs the paperwork.

This catalog keeps the same rule elsewhere for the same reason. *Who Made the Record*, in its lessons on the 1850 daguerreotypes made in South Carolina, names the seven people and refuses to describe the pictures, because describing them would repeat the act the commission performed. Here the rule is narrower and easier to keep: the documents this course reads are forms and newspaper columns, and none of them requires you to picture a ceremony.

**The second rule, which is harder.** This course never says how much of the opera was hers, or his. Not a fraction, not a phrase like "most of the music", not a hedge that smuggles one in. Two scholars who have read the score describe the division differently, the person who could have settled it left no word about the opera at all, and a federal agency's web page states a share this course will not repeat. Lesson 9 is built on that rule. Everything before it is about what the documents do settle, which turns out to be a great deal.

**What an instrument does, and for whom.**

| Instrument | Who reads it | What it does |
|---|---|---|
| A title page | anyone holding the score | announces |
| A registration card | the Copyright Office, and anyone who searches it | records a legal claim |
| A newspaper story | the public, once, on one day | reports |
| A signed assignment | the two people who signed it | transfers a right between them |
| A handwritten line on a manuscript | whoever opens that box in that archive | corrects, one reader at a time |

The middle column is the one people skip, and it is the one that decides outcomes. A credit can be loud and reach nobody who can act on it. A credit can be silent, filed in a drawer in Washington, and be the only one an institution will look at fifty years later. That is exactly what happened here.

:::reveal What does this course mean by an instrument? ||| A specific document on which a credit is written, such as a title page, a registration card, a newspaper story, a signed assignment or a handwritten line on a manuscript, each reaching a different audience and binding a different number of people.

:::reveal Name the two rules this course states in its first lesson. ||| It never describes the Sun Dance ceremony or the opera's staging of it, and it never says how much of the opera was written by either collaborator.

## Vocabulary
- **Instrument**: a particular document that carries a credit or a right, considered together with who reads it and what it obliges anyone to do.
- **Registration**: the act of filing a work with the Copyright Office, which produces a record the office and the public can search.
- **Claimant**: on a registration form, the person or firm claiming to hold the copyright, which is a different question from who wrote the work.
- **Reach**: how many people, and which people, actually read a given instrument. A credit with no reach changes nothing.

## Sources
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
National Park Service. (2022, September 1). *Zitkala-Ša (Red Bird / Gertrude Simmons Bonnin)*. https://www.nps.gov/people/zitkala-sa.htm
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "the-1909-act-class-claimant-assignment",
      title: "2 · The 1909 Act: the class, the claimant, and the assignment",
      section: "Section 1 · An instrument, and what it can hold",
      body: `Everything in this course happened under one statute, the Copyright Act of 4 March 1909, and three of its sections do all the work. Read them before you read the cards, because the cards are that statute printed onto pink and buff cardboard.

**The class.** Section 5 of the Act tells an applicant which class to register in, and lists eleven: books, periodicals, lectures, dramatic or dramatico-musical compositions, musical compositions, maps, works of art, reproductions of a work of art, scientific or technical drawings, photographs, and prints and pictorial illustrations. Class D is the fourth, "dramatic or dramatico-musical compositions". An opera goes there. So, for most of the twentieth century, did a dance, which is the subject of *Who Owns the Steps*, lesson 1, if you want the same statute taught from the other side.

**The two different questions on the form.** A 1909-Act application asks for the name of the AUTHOR and, separately, for the name and address of the COPYRIGHT CLAIMANT. These are not the same question. The author is who made the work. The claimant is who holds the copyright now, which may be a publisher, an employer, a buyer or an heir. A form that asks both and receives one name is telling you either that one person is both, or that nobody filled in the difference. Keeping the two apart is most of the skill this course teaches.

**Assignment: how a copyright moves.** Section 42 says copyright "may be assigned, granted, or mortgaged by an instrument in writing signed by the proprietor". So a transfer is a private act between two people, in writing, signed. No government office has to be involved for it to happen.

**Recording: what makes the transfer public.** Section 44 says "every assignment of copyright shall be recorded in the copyright office within three calendar months after its execution in the United States", and then gives the penalty for not doing it: "in default of which it shall be void as against any subsequent purchaser or mortgagee for a valuable consideration, without notice, whose assignment has been duly recorded". Read that penalty slowly. An unrecorded assignment is not automatically void. It is void against one particular kind of person: a later buyer who paid value, did not know about the earlier transfer, and recorded their own.

**The notice: whose name may appear.** Section 46 says that when an assignment has been recorded, "the assignee may substitute his name for that of the assignor in the statutory notice". That is the sentence that turns recording into a credit mechanism rather than a filing chore. Under the 1909 Act, recording is what buys you the right to have your name printed on the work as the owner. Do not record, and the public notice keeps saying somebody else.

**So the Act draws a line this whole course sits on.** Between the two people who sign a paper, a signature is enough. Between those two people and the world, recording is what counts. A right can be real and invisible at the same time, and the register is where visibility is bought.

**Where else this shape appears in the catalog.** *Who Gets the Credit*, lesson 9, teaches assignment on the patent side, where the clause routinely moves an invention from the person who made it to the company that employed them. This case runs the other way: the assignment ran toward the collaborator who had not been named, and it never reached the register.

:::reveal Under the 1909 Act, what is the difference between the author field and the copyright claimant field on an application? ||| The author is the person who made the work; the claimant is whoever holds the copyright at the time of filing, which may be a publisher, employer, buyer or heir.

:::reveal What did section 44 say happened to an assignment that was not recorded within three calendar months? ||| It became void against a subsequent purchaser or mortgagee for a valuable consideration, without notice, whose own assignment had been duly recorded. It did not become void generally.

:::reveal What did section 46 allow an assignee to do once the assignment was recorded? ||| Substitute their own name for the assignor's in the statutory notice on the work.

## Vocabulary
- **Class D**: the 1909 Act's registration class for dramatic and dramatico-musical compositions, which is where an opera was filed.
- **Assignment**: a transfer of copyright, which section 42 required to be made by an instrument in writing signed by the proprietor.
- **Recording**: filing an assignment with the Copyright Office, which section 44 required within three calendar months and section 46 made the condition of putting the new owner's name in the notice.
- **Statutory notice**: the copyright line printed on the work itself, naming the owner, which section 46 lets a recorded assignee change to their own name.
- **Proprietor**: the holder of the copyright in the Act's own vocabulary, the person entitled to assign it.

## Sources
Copyright Act of 1909, §§ 5, 42, 44, 46 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · An instrument, and what it can hold",
      section: "Section 1 · An instrument, and what it can hold",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course mean by an \"instrument\"?",
            options: [
              "A document that carries a credit",
              "A musical device such as the violin on which a melody was played to a collaborator",
              "A legal proceeding brought to decide which of two collaborators owned a stage work",
              "A government office that keeps the official list of who made every published work",
            ],
            correctIndex: 0,
            explanation:
              "A title page, a registration card, a newspaper story, a signed assignment or a handwritten line on a manuscript. The word is used for the paper, not for the music.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which column of the instrument table does lesson 1 say people skip?",
            options: [
              "Who reads it",
              "What it does, because most people cannot tell announcing from transferring a right",
              "The name of the instrument, because the same document is called different things",
              "The date, because a credit written later is worth less than one written at the time",
            ],
            correctIndex: 0,
            explanation:
              "Reach decides outcomes. A loud credit that no institution will look at changes nothing; a silent one in a Washington drawer can decide the question fifty years later.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Where and when was The Sun Dance Opera first produced?",
            options: [
              "Vernal, Utah, in February 1913",
              "Provo, Utah, in May 1914, on the campus of Brigham Young University during term time",
              "New York City, in 1938, at a theatre run by a light opera guild on Broadway",
              "Washington, D.C., in December 1921, at a hall hired by the Society of American Indians",
            ],
            correctIndex: 0,
            explanation:
              "Smith gives Orpheus Hall in Vernal, February 1913, filled for three nights. The 1914 Brigham Young University productions and the 1938 New York production came later.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "On what date was the vocal score of the opera filed with the Copyright Office?",
            options: [
              "12 December 1912",
              "5 December 1921, the same day she registered a book of her own with the same office",
              "15 January 1929, in the last year of an existing copyright term under section 24",
              "26 January 1938, some months before a production opened in New York City",
            ],
            correctIndex: 0,
            explanation:
              "Two months before the February 1913 premiere. The registration is the opening move in this record, not a later act.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What is the first rule lesson 1 states about the ceremony the opera took its subject from?",
            options: [
              "The course does not describe it",
              "The course describes it only in the lessons that deal with the 1938 New York production",
              "The course describes it once, in a vocabulary entry, so that later lessons can refer back",
              "The course describes the staging but not the ceremony, since a staging is a made thing",
            ],
            correctIndex: 0,
            explanation:
              "Neither the ceremony nor the opera's staging of it. Hafen, writing as a Native scholar, says a performance today would violate tribal sovereignty and religious respect, and the credit question does not need either.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which scholar does lesson 1 quote on what a reconstruction of the opera would violate?",
            options: [
              "P. Jane Hafen",
              "Catherine Parsons Smith, in her 2001 study of the score and the newspaper coverage",
              "N. L. Nelson, in the review he published in a Utah newspaper in 1913",
              "Nicole McNew Chen, in the Library of Congress Copyright Office post of March 2021",
            ],
            correctIndex: 0,
            explanation:
              "Hafen writes that a reconstruction today \"would violate contemporary notions of artistic and tribal sovereignty and religious respect\", and adds that some Indigenous scholars would dismiss the opera altogether.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What was the legal status of the Sun Dance on the Uintah and Ouray reservation at the time of the first production?",
            options: [
              "Outlawed",
              "Permitted, but only with the written consent of the federal agent posted to the reservation",
              "Unregulated, since federal rules of the period reached land tenure rather than ceremony",
              "Permitted for residents of the reservation and prohibited for visitors from other nations",
            ],
            correctIndex: 0,
            explanation:
              "Hafen states that the practice of the Sun Dance was outlawed on the Uintah and Ouray reservation. This course does not go further, because the specific federal rule was not read.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What is the second rule lesson 1 states, the one it calls harder?",
            options: [
              "Never say how much of the opera was whose",
              "Never quote a newspaper of the period without correcting its spelling of the collaborators' names",
              "Never cite a secondary source when a registration card covering the same fact is online",
              "Never name a person who has no surviving descendants able to answer on their behalf",
            ],
            correctIndex: 0,
            explanation:
              "No fraction, no phrase like \"most of the music\", and no hedge that smuggles one in. Lesson 9 is built on the rule.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which other course in this catalog does lesson 1 name as keeping the same kind of rule?",
            options: [
              "Who Made the Record",
              "Who Owns the Steps, which teaches the same 1909 statute from the side of choreography",
              "Who Gets the Credit, which teaches assignment clauses on the patent side of the record",
              "Written by Himself, which teaches the byline as a term negotiated inside a contract",
            ],
            correctIndex: 0,
            explanation:
              "It names the seven people in the 1850 South Carolina daguerreotypes and refuses to describe the pictures, because describing them would repeat the act.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Who was William F. Hanson at the time of the collaboration?",
            options: [
              "A music teacher in eastern Utah",
              "The register of copyrights in Washington, who handled applications in Class D himself",
              "A New York theatrical producer who commissioned new operas on American subjects",
              "A federal agent assigned to the Uintah and Ouray reservation in the years before 1913",
            ],
            correctIndex: 0,
            explanation:
              "Hafen calls him a local Duchesne, Utah, music teacher and Smith says he was then teaching at the Uintah Academy in Vernal. He taught at Brigham Young University later.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Where and when was Zitkala-Šá born, according to the National Park Service?",
            options: [
              "The Yankton Indian Reservation, 22 February 1876",
              "The Uintah and Ouray reservation in Utah, in the spring of 1876, to a Dakota family",
              "Washington, D.C., in 1876, where she would later keep an address on K Street",
              "Vernal, Utah, in 1876, in the town where the opera would open thirty-seven years later",
            ],
            correctIndex: 0,
            explanation:
              "The National Park Service page gives 22 February 1876 on the Yankton Indian Reservation. She was living in eastern Utah by the time of the collaboration.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "In lesson 1's table, what does a newspaper story do?",
            options: [
              "Reports",
              "Transfers a right between the two people whose signatures appear at the foot of it",
              "Records a legal claim that the Copyright Office and later searchers can retrieve",
              "Corrects an earlier record for whoever happens to open that box in that archive",
            ],
            correctIndex: 0,
            explanation:
              "It reaches the public once, on one day. Reporting is not recording, which is why the press and the register could disagree for twenty-five years without either changing.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "In lesson 1's table, who reads a signed assignment?",
            options: [
              "The two people who signed it",
              "Anyone searching the Copyright Office records, which is what recording an assignment is for",
              "Every purchaser of the work, since the assignment is printed in the statutory notice",
              "The readers of whichever newspaper published the terms at the time of signing",
            ],
            correctIndex: 0,
            explanation:
              "That is the point of the table. A signed assignment is private until somebody records it, and recording is a separate act with a deadline.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "How many of the five instruments listed in lesson 1 exist for this one work?",
            options: [
              "All five",
              "Three, since no assignment and no handwritten correction survive for this particular opera",
              "Four, since the work was never the subject of any newspaper story before 1935",
              "Two, since only the registration card and the title page were ever created for it",
            ],
            correctIndex: 0,
            explanation:
              "A title page, a registration card, newspaper stories, a signed assignment and a handwritten line added later. They do not agree with each other, which is the subject of the course.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What does lesson 1 say about a credit that is loud?",
            options: [
              "It can reach nobody who can act on it",
              "It always outweighs a quieter credit, because the larger audience decides the question",
              "It is worth less in law than a quiet credit, because publicity is evidence of weakness",
              "It binds any institution that later republishes the work under its own imprint",
            ],
            correctIndex: 0,
            explanation:
              "And the reverse: a credit filed silently in Washington can be the only one an institution will look at decades later. Reach and volume are different things.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "How many acts does the course say The Sun Dance Opera has?",
            options: [
              "Three",
              "Two, with an interval that the 1913 newspaper coverage in Utah describes at some length",
              "Five, in the manner of the grand opera that the 1938 New York production was staged as",
              "One, which is why it could be performed three nights running in a small hall",
            ],
            correctIndex: 0,
            explanation:
              "The registration card describes it as an opera in three acts, and the course takes that description from the card rather than from a later account.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which two things does lesson 1 say the credit question needs?",
            options: [
              "The paperwork, which is public",
              "The score and the staging notes, which are archived at Brigham Young University in Provo",
              "The testimony of descendants of both collaborators, gathered and compared side by side",
              "A performance of the opera today, so that a listener can judge whose music it sounds like",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says the question needs the paperwork rather than the ceremony, and that four of the documents can be opened by any learner in Section 2.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which class of the 1909 Act covers dramatic or dramatico-musical compositions?",
            options: [
              "Class D",
              "Class A, which is the class used for books and which three cards in this course carry",
              "Class E, which the Act reserves for musical compositions filed on their own",
              "Class J, which the Act reserves for photographs deposited with an application",
            ],
            correctIndex: 0,
            explanation:
              "Section 5 lists eleven classes and Class D is the fourth. An opera goes there, and so did a dance for most of the twentieth century.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "How many classes does section 5 of the 1909 Act list?",
            options: [
              "Eleven",
              "Four, being books, dramatic works, musical compositions and works of art in that order",
              "Twenty-six, one for each letter, which is why the class marks run from A to Z",
              "Eight, with dramatic and dramatico-musical compositions sharing a class with music",
            ],
            correctIndex: 0,
            explanation:
              "Books, periodicals, lectures, dramatic or dramatico-musical compositions, musical compositions, maps, works of art, reproductions of a work of art, scientific or technical drawings, photographs, and prints and pictorial illustrations.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "On a 1909-Act application, what does the claimant field ask?",
            options: [
              "Who holds the copyright now",
              "Who first conceived the work, as distinct from whoever wrote it down on paper afterwards",
              "Who deposited the copy with the office, which may be a clerk acting for the owner",
              "Who is claiming to be named in the credit line when the work is next performed",
            ],
            correctIndex: 0,
            explanation:
              "Which may be a publisher, an employer, a buyer or an heir. The author field asks a different question, and keeping them apart is most of the skill this course teaches.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 2 say a form tells you when it asks for both author and claimant and receives one name?",
            options: [
              "Either one person is both, or nobody filled in the difference",
              "That the applicant was refused registration and had to file a corrected application later",
              "That the work was made for hire, which the Act treats as one name by operation of law",
              "That the second field was optional in 1912 and became compulsory only after 1921",
            ],
            correctIndex: 0,
            explanation:
              "The form has room for a distinction. A single name means the distinction was not used, and nothing on the card says which of the two reasons applies.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What did section 42 of the 1909 Act require for an assignment of copyright?",
            options: [
              "An instrument in writing signed by the proprietor",
              "A deed executed before a notary public and witnessed by two residents of the same county",
              "A filing with the Copyright Office, without which no transfer took effect at all",
              "The consent of the author, given separately from the consent of the current proprietor",
            ],
            correctIndex: 0,
            explanation:
              "Copyright \"may be assigned, granted, or mortgaged by an instrument in writing signed by the proprietor\". No government office has to be involved for the transfer to happen.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "How long did section 44 give for recording an assignment executed in the United States?",
            options: [
              "Three calendar months",
              "Twenty-eight years, matching the original copyright term the Act granted to a work",
              "One calendar year, after which a second statutory fee of fifty cents became payable",
              "Six months, with a further six months available on application to the register",
            ],
            correctIndex: 0,
            explanation:
              "\"Within three calendar months after its execution in the United States\". Missing the deadline carried a specific and limited penalty rather than a general one.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Against whom did section 44 make an unrecorded assignment void?",
            options: [
              "A later recorded purchaser who paid value without notice",
              "Against everyone, including the two parties who signed it, from the day the deadline passed",
              "Against the Copyright Office alone, which could refuse to issue a certificate on it",
              "Against the author's heirs, who could set it aside in the renewal year under section 24",
            ],
            correctIndex: 0,
            explanation:
              "A subsequent purchaser or mortgagee for a valuable consideration, without notice, whose own assignment has been duly recorded. The penalty is narrow, and reading it slowly is the point of the lesson.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What did section 46 let a recorded assignee do?",
            options: [
              "Put their own name in the statutory notice",
              "Recover the original deposit copy from the Copyright Office and destroy the earlier record",
              "Register the work again in a different class without paying a second statutory fee",
              "Compel the assignor to publish a correction in a newspaper of general circulation",
            ],
            correctIndex: 0,
            explanation:
              "\"The assignee may substitute his name for that of the assignor in the statutory notice.\" That sentence is what turns recording from a filing chore into a credit mechanism.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What line does lesson 2 say the 1909 Act draws?",
            options: [
              "Between the two signers and the world",
              "Between published and unpublished works, which were registered under different statutes",
              "Between music and drama, which the Act treats as classes that may never be combined",
              "Between authors and publishers, only one of whom the Act allows to be a claimant",
            ],
            correctIndex: 0,
            explanation:
              "Between the two people a signature is enough. Between those two and everybody else, recording is what counts, so a right can be real and invisible at the same time.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Which lesson of Who Gets the Credit does lesson 2 point to for assignment on the patent side?",
            options: [
              "Lesson 9",
              "Lesson 17, which corrects five popular claims that do not survive checking against sources",
              "Lesson 21, which sets out the three conditions that identify a relocated credit",
              "Lesson 1, which teaches the byline as a term that is negotiated inside a contract",
            ],
            correctIndex: 0,
            explanation:
              "\"Assignment: the clause that moves the patent.\" There the clause routinely moves an invention to an employer; here it ran toward the collaborator who had not been named.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Which direction did the assignment in this case run, compared with the patent-side example?",
            options: [
              "Toward the unnamed collaborator",
              "Toward the employer, which is what the patent-side clause in the other course also does",
              "Toward a publisher in Boston, in the way a trade book's copyright commonly moved",
              "Toward a university, which is where the copyright had been lodged from the beginning",
            ],
            correctIndex: 0,
            explanation:
              "The patent clause moves an invention away from the maker. Here the paper ran the other way, toward the person the register had not named, and was never recorded.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What statute governs every document in this course?",
            options: [
              "The Copyright Act of 1909",
              "The Copyright Act of 1976, which took effect on the first day of January 1978",
              "The Indian Citizenship Act of 1924, which reached the status of the collaborators",
              "The Indian Reorganization Act of 1934, which governed the reservation where she lived",
            ],
            correctIndex: 0,
            explanation:
              "The Act of 4 March 1909. The registration cards print its name on their face, and sections 5, 42, 44 and 46 do all the work in this course.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Lesson 2 says the registration cards are what, in physical form?",
            options: [
              "The statute printed onto cardboard",
              "Transcriptions made by clerks decades later from applications that no longer survive",
              "Photographic copies of the deposit copies, bound into drawers by class and by year",
              "Summaries written for the catalog of copyright entries rather than for the register",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says to read the sections first, because the cards are that statute printed onto pink and buff cardboard, with blanks where the statute asks a question.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What word does the 1909 Act use for the holder of a copyright who is entitled to assign it?",
            options: [
              "Proprietor",
              "Claimant, which is also the word the application forms print beside the name and address",
              "Assignor, which the Act uses for anyone who holds a copyright whether or not they transfer it",
              "Author, since the Act treats the author and the holder as the same person throughout",
            ],
            correctIndex: 0,
            explanation:
              "Section 42 speaks of an instrument in writing signed by the proprietor. Claimant is the form's word; assignor is what a proprietor becomes after transferring.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Which course does lesson 2 recommend for the same statute taught from the side of choreography?",
            options: [
              "Who Owns the Steps",
              "Who Signs the Print, whose sixth section sets out the shape of a relocated credit",
              "Who Made the Record, whose ninth lesson deals with a record that contradicts itself",
              "Shirley Graham, whose third lesson concerns what was actually staged in Cleveland in 1932",
            ],
            correctIndex: 0,
            explanation:
              "Its first lesson, \"Class D, and the dance that had to pass as a play\", reads the same section 5 list and the same class from the other direction.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Does an unrecorded assignment transfer anything between the two people who signed it?",
            options: [
              "Yes, a signature is enough between them",
              "No, because section 44 voids an unrecorded assignment from the moment the deadline passes",
              "No, because section 42 requires recording before an instrument in writing takes effect",
              "Only if a notary was present, which section 42 makes a condition of a valid signature",
            ],
            correctIndex: 0,
            explanation:
              "Section 42 makes the writing and the signature the transfer. Section 44's penalty is aimed at a later recorded purchaser for value without notice, not at the signers.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 2 say recording buys under the 1909 Act?",
            options: [
              "Visibility",
              "A second twenty-eight year term, which section 24 otherwise reserved to the author alone",
              "Immunity from any later claim by the author's widow, widower or surviving children",
              "A certificate of registration, which the office would not otherwise send to an assignee",
            ],
            correctIndex: 0,
            explanation:
              "The register is where visibility is bought. Section 46 makes recording the condition of putting your name in the statutory notice the public reads.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Which three sections of the 1909 Act does lesson 2 say do all the work in this course?",
            options: [
              "42, 44 and 46",
              "1, 3 and 5, which define the exclusive rights, the scope of protection and the classes",
              "11, 12 and 13, which govern deposit copies for works not reproduced for sale",
              "23, 24 and 25, which govern the original term, the renewal term and infringement",
            ],
            correctIndex: 0,
            explanation:
              "Assignment, recording and the statutory notice. Section 5 supplies the class, and everything else in the course follows from those four.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "Whose name is on the copyright registration for The Sun Dance Opera?",
            options: [
              "Hanson's",
              "Both collaborators', with hers written in second and marked as a joint author on the back",
              "Neither, since the office registered the work in the name of the producing company",
              "Hers, with his added later in the same hand that wrote the rest of the application",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 states it plainly and Section 2 shows the card. The registration names one of the two collaborators, and it is not Zitkala-Šá.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "How long did the opera run at its first production, according to Smith?",
            options: [
              "Three nights",
              "One night only, after which the company moved the production to Provo for a week",
              "A full season, which is why the newspapers of two states reviewed it at such length",
              "Two nights, with a third added in December of the following year by popular demand",
            ],
            correctIndex: 0,
            explanation:
              "Smith says it filled Orpheus Hall in Vernal for three nights, and that productions at Brigham Young University followed in May and December of the next year.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What kind of document does lesson 1 say a title page is?",
            options: [
              "An instrument",
              "A secondary source, since it summarises decisions taken elsewhere in the publishing process",
              "A statutory notice, which section 46 requires every published work to carry on its face",
              "A deposit copy, which the Copyright Office retained when an application was granted",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the five instruments in the table, read by anyone holding the score, and what it does is announce.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which nation's writer, musician and organiser was Zitkala-Šá?",
            options: [
              "Yankton Dakota",
              "Ute, according to the National Park Service page this course cites for her birth date",
              "Navajo, according to the trade paper that covered the opera's premiere in Utah in 1913",
              "Cherokee, according to the Library of Congress post that links the four registration cards",
            ],
            correctIndex: 0,
            explanation:
              "The National Park Service page describes her as a member of the Yankton Dakota Sioux, and gives her birth on the Yankton Indian Reservation on 22 February 1876. No other nation is named by any source read here.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "In lesson 1's table, what does a handwritten line added to a manuscript do?",
            options: [
              "Corrects, one reader at a time",
              "Amends the registration, provided the archive holding the manuscript notifies the office",
              "Announces, in the same way a title page does, but with the authority of the author's hand",
              "Transfers a right, because a signature on a manuscript is an instrument under section 42",
            ],
            correctIndex: 0,
            explanation:
              "Its readership is whoever opens that box in that archive. That is the smallest reach of the five, and it is where the last correction in this story was written.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What does lesson 2 say has to happen for a transfer of copyright to occur under section 42?",
            options: [
              "A signed writing",
              "A recorded filing, since an unrecorded paper has no effect on the ownership of a work",
              "A published notice naming the new proprietor in the place the old one occupied",
              "An order of a federal court, since copyright is a statutory grant and not a contract",
            ],
            correctIndex: 0,
            explanation:
              "An instrument in writing signed by the proprietor. Recording under section 44 is a separate step with its own deadline and its own consequences.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 2 call the skill that keeping the author and claimant fields apart teaches?",
            options: [
              "Most of the skill in the course",
              "A minor point of form, useful for archivists but not for anyone reading a credit line",
              "A distinction abolished by the 1976 Act, so of historical interest only to specialists",
              "A test of whether an application was filled in by the applicant or by an office clerk",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says so directly. Almost every mistake made about this record comes from collapsing who made the work into who holds the copyright.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 1 say about the five instruments for this work?",
            options: [
              "They do not agree",
              "They agree on the collaborators and differ only about the dates of the early productions",
              "They were all created within a year of the first production and then left untouched",
              "They survive only as later transcriptions, since the originals were lost in the 1930s",
            ],
            correctIndex: 0,
            explanation:
              "The disagreement between them is the subject of the course, and it is what makes the case teachable rather than merely sad.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Under the 1909 Act, could a claimant be a company rather than a person?",
            options: [
              "Yes",
              "No, because the Act defines a claimant as the individual who created the work in question",
              "No, unless the company had first been assigned the work by an instrument recorded abroad",
              "Only for works in Class A, where a publisher was permitted to stand in for the author",
            ],
            correctIndex: 0,
            explanation:
              "The claimant is whoever holds the copyright at the time of filing, which may be a publisher, an employer, a buyer or an heir. One card in Section 2 shows a publishing firm in that field.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What kind of act is an assignment, in the terms lesson 2 uses?",
            options: [
              "A private act between two people",
              "A public act, since the Act requires the office to publish every transfer it receives",
              "A judicial act, since only a court can move a copyright from one proprietor to another",
              "An administrative act performed by the register of copyrights on the parties' request",
            ],
            correctIndex: 0,
            explanation:
              "In writing, signed, with no government office involved for it to take effect. Recording is the separate step that makes it public.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 2 say about an unrecorded assignment being \"automatically void\"?",
            options: [
              "It is not",
              "It is, from the first day after the three calendar months given by section 44 expire",
              "It is, unless the assignee can produce a notarial certificate of the original execution",
              "It is, but only for works registered in Class D rather than in any of the other classes",
            ],
            correctIndex: 0,
            explanation:
              "It is void against one particular kind of person: a later buyer who paid value, did not know about the earlier transfer, and recorded their own.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does the course say you can do with four of the documents it reads?",
            options: [
              "Open them yourself",
              "Request copies from the Copyright Office, which supplies them on payment of a search fee",
              "Read transcriptions of them, since the originals are restricted to accredited researchers",
              "Inspect them at Brigham Young University, where the whole score is also archived",
            ],
            correctIndex: 0,
            explanation:
              "Four registration cards are online as images and Section 2 gives the addresses. That is why the course can ask a learner to fill in a table from the cards themselves.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which of these is NOT one of the five instruments listed in lesson 1?",
            options: [
              "A concert programme",
              "A registration card filed with the Copyright Office and searchable by the public afterwards",
              "An assignment signed by two people and notarized in the county where they lived",
              "A line added by hand to a manuscript long after the collaboration had ended",
            ],
            correctIndex: 0,
            explanation:
              "The five are a title page, a registration card, a newspaper story, a signed assignment and a handwritten line on a manuscript.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Why does lesson 1 state its content rule at the front rather than later?",
            options: [
              "Because it is a rule, not a gap",
              "Because a reader who meets it late will assume the course ran out of sources to describe it",
              "Because the Copyright Office requires a content warning on records of ceremonial works",
              "Because the later lessons quote descriptions that a reader needs to be prepared for",
            ],
            correctIndex: 0,
            explanation:
              "Stating it at the front makes the omission a decision anyone can check, rather than something a reader has to infer from what is missing.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What does lesson 1 say happens when you ask where an answer about credit is written down?",
            options: [
              "The feeling turns into a short list of papers",
              "The question becomes unanswerable, because most credits are agreed verbally and never filed",
              "The answer becomes a matter for a court, since only a judgment can fix a disputed credit",
              "The list grows without limit, since every mention of a work is a record of its authorship",
            ],
            correctIndex: 0,
            explanation:
              "Each of those papers reaches a different number of people and binds a different number of them, which is the distinction the whole course runs on.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which of these does lesson 2 say is NOT needed for a copyright assignment to take effect under section 42?",
            options: [
              "A government office",
              "A writing, which the section requires in terms before any transfer can be made",
              "A signature by the proprietor, which the section names as the operative act",
              "An identified copyright, since a transfer must say which work is being moved",
            ],
            correctIndex: 0,
            explanation:
              "Section 42 makes the transfer a private act in writing signed by the proprietor. Recording under section 44 is the separate step that brings an office into it.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What does lesson 1 say about the paperwork the credit question needs?",
            options: [
              "It is public",
              "It is held privately at a university and released only to accredited researchers",
              "It was destroyed in the 1930s, which is why the course relies on secondary accounts",
              "It exists only in transcription, since the original forms were pulped after filming",
            ],
            correctIndex: 0,
            explanation:
              "Four of the documents can be opened by any learner, which is why Section 2 can ask a learner to fill in a table from the cards themselves.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Four cards in one catalogue
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-cards-in-one-catalogue",
      title: "3 · Four cards in one catalogue",
      section: "Section 2 · Four cards in one catalogue",
      body: `The Copyright Office kept its register on cards, and the Library of Congress has put the drawers online as photographs. Four of those cards belong to this story. Three are for her books. One is for the opera. They sit in the same catalogue, filled in by the same office, under the same Act.

**Card one: *Old Indian Legends*, 1901.** The field label at the top right of the card is the single word "Author." The line beneath it reads "Zitkala-Ša." Under TITLE, in a clerk's handwriting: "Old Indian legends, retold by Zitkala-Ša; with illustrations by Angel de Cora (Hinook-Mahiwi-Kilinaka)", then "Boston and London, Ginn & co., 1901", then the collation. At the foot: "Copyright by Ginn & co., Boston, Mass."; "Class A, XXc, no. 16747, Sept. 11, 1901"; and "2 copies received to complete copyright Oct. 19, 1901."

Read the two bottom lines together. The author is her. The copyright is the publisher's. That split is ordinary for a trade book in 1901 and it is exactly what the author field and the claimant field are for. The register has recorded both facts, in two places, and neither has erased the other.

**Card two: *American Indian Stories*, 1921.** A printed slip pasted to the card reads "Zitkala-Ša." and then "American Indian stories, by Zitkala-Sa (Gertrude Bonnin) ... Washington, Hayworth publishing house, 1921", with "195 p. front. (port.) 19cm." and the note "Partly autobiographical. The last chapter is entitled: America's Indian problem." Below, the office's own lines: PUBLISHED, with a copyright symbol and "Dec. 5, 1921"; "2 c. and aff. Dec. 5, 1921"; the entry "Cl. A 630593"; and, on the line printed "Copyright claimed by", the typed words "G. Bonnin, Washington." A large A sits in the top right corner.

This time the claimant is her. The Library of Congress Copyright Office post about her says she "registered the work herself with the Copyright Office on December 5, 1921" (Chen, 2021), and the card is the object that sentence is describing.

**Card three: the renewal of *Old Indian Legends*, 1929.** A pink form headed "Application for the RENEWAL of a Copyright Subsisting in Any Work", dated in her hand "January 15, 1929", made "in accordance with the provisions of section 24 of the Act of March 4, 1909". Beside the printed words "The renewal copyright is claimed by me, as", with the permitted answers printed underneath as author, widow, widower and child, she has written "author". The renewal claimant is "Gertrude Bonnin (Zitkala-Ša)", 1812 K Street, N.W., Washington, D.C. Class of work: "book". Name of author: "Gertrude Bonnin (Zitkala-Ša)". The original registration is given as the 11th of September 1901, no. 16747, and the name of the original claimant as "Ginn and Company". The office stamped it received on 16 January 1929.

Two details are worth holding. She filled in a form that made her choose a capacity, and she chose author. And the certificate and the fee still went to and from Ginn and Company in Boston, so the publisher was in the transaction while the claim itself was hers.

**Card four: *The Sun Dance Opera*, 1912.** A buff application card. Typed at the top left: "Hanson (WM.F.)" and, on the line below, "Sun (The) dance; opera in 3 acts. Vocal score." A corner box headed "Write nothing here" carries a heavy "D 4". To the right, a date stamp: "1 c. rec'd DEC 12 1912", an entry mark beginning "Cl. D", and a cash stamp of the same date.

The printed body of the form says "Application for Copyright" and then "Dramatic Composition not Reproduced for Sale", with the word "Musical" written in by hand above "Composition". Its sentence runs: "Of the DRAMATIC COMPOSITION named herein, ONE complete copy is hereby deposited to secure copyright registration according to the provisions of the Act of March 4, 1909. $1 (statutory fee for registration) is also inclosed. The copyright is claimed by the undersigned:". In the blank labelled "Name and address of copyright claimant": "Wm F Hanson, Vernal Utah."

Turn it over. "Name of Author, but if a translation, then Translator": "Wm F Hanson." "Country of which the author or translator is a citizen": "United States of America." "Brief title of work": "The Sun Dance Opera." "Send certificate of registration to": "Wm F Hanson, Vernal, Utah." "Name and address of remitter": "Wm F Hanson. Vernal Utah." At the foot, a printed instruction: a published dramatic composition uses form D1, a dramatico-musical composition uses form D2.

**Count the name fields.** The typed heading, the claimant blank, the author blank, the certificate blank and the remitter blank. Five places where a person could be named, on two sides of one card. Every one of them reads the same name. No other person appears anywhere on either side.

**And note the date.** 12 December 1912 is two months before the February 1913 premiere (Smith, 2001). Whatever else is true, the registration is not a later act of forgetting. It is the first document in the story.

**The point of putting the four together.** The register knew how to record her. It recorded her as an author in 1901, as a claimant in 1921, and as an author claiming a renewal in her own hand in 1929. It was never asked to record her for the opera. The Library of Congress post puts it in one sentence: "despite her contributions, Zitkála-Šá does not appear on the copyright records for the work" (Chen, 2021).

**One small thing about spelling, since you are about to read the cards yourself.** The 1901 card writes "Zitkala-Ša". The 1921 title line writes "Zitkala-Sa". The renewal writes "Gertrude Bonnin (Zitkala-Ša)". The Library of Congress post writes "Zitkála-Šá". This course writes Zitkala-Šá in its own sentences and each source's own spelling inside quotation marks. A name that four records spell four ways is a small demonstration of what a record is: not the thing, but somebody's writing down of the thing.

:::reveal In how many places on the 1912 card could a person be named, and how many different names appear? ||| Five places across the two sides, being the typed heading, the claimant blank, the author blank, the certificate blank and the remitter blank, and one name appears in all of them.

:::reveal What capacity did Gertrude Bonnin write on the 1929 renewal form, and why does the form make that a choice? ||| She wrote "author". The form prints the permitted answers, author, widow, widower and child, so the applicant has to state which one they are.

:::reveal Why does the 12 December 1912 filing date matter to this story? ||| It is two months before the February 1913 premiere, so the registration is the first document in the record rather than a later act of forgetting.

## Vocabulary
- **Card catalogue**: the Copyright Office's register kept as cards, one per entry, now photographed and published online by the Library of Congress.
- **Class A**: the 1909 Act's class for books, which the three cards for her own works carry.
- **Renewal**: a second copyright term applied for under section 24 in the last year of the first, which the applicant had to claim in a stated capacity.
- **Remitter**: on a 1909-Act application, the person sending the statutory fee, which is a separate blank from the claimant and the author.
- **Collation**: the physical description of a book on a catalogue card, such as page counts, illustrations and height.

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.
U.S. Copyright Office. (1901). [Catalogue card for *Old Indian legends*]. Copyright card catalog, 1898-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/18/98/19/37/ZI/-Z/Z/18981937ZI-ZZ/18981937ZI-ZZ0473.jpg
U.S. Copyright Office. (1912). [Application card for *The Sun Dance Opera*, front and back]. Copyright card catalog, 1909-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672a.jpg
U.S. Copyright Office. (1921). [Catalogue card for *American Indian stories*]. Copyright card catalog, 1898-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/18/98/19/37/ZI/-Z/Z/18981937ZI-ZZ/18981937ZI-ZZ0472.jpg
U.S. Copyright Office. (1929). [Renewal application card for *Old Indian legends*]. Copyright card catalog, 1909-1937. Library of Congress. https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/BL/O-/BO/SV/19091937BLO-BOSV/CC19091937BLO-BOSV.0612.jpg`,
    },
    {
      slug: "reading-the-four-cards",
      title: "4 · Practice: read the four cards yourself",
      section: "Section 2 · Four cards in one catalogue",
      body: `Open the five images below in separate tabs and answer from the cards, not from lesson 3. Every answer is written somewhere on the card named in the question. Where the card is handwritten, type what you read; spelling and accents are forgiven.

- *Old Indian Legends*, 1901: https://tile.loc.gov/storage-services/service/copyright/hprcatcard/18/98/19/37/ZI/-Z/Z/18981937ZI-ZZ/18981937ZI-ZZ0473.jpg
- *American Indian Stories*, 1921: https://tile.loc.gov/storage-services/service/copyright/hprcatcard/18/98/19/37/ZI/-Z/Z/18981937ZI-ZZ/18981937ZI-ZZ0472.jpg
- Renewal of *Old Indian Legends*, 1929: https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/BL/O-/BO/SV/19091937BLO-BOSV/CC19091937BLO-BOSV.0612.jpg
- *The Sun Dance Opera*, 1912, front: https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672a.jpg
- *The Sun Dance Opera*, 1912, back: https://tile.loc.gov/storage-services/service/copyright/hprcatcard/19/09/19/37/HA/M-/HA/RR/N/19091937HAM-HARRN/CC19091937HAM-HARRN.0672b.jpg

The last item is the one that matters. It asks what the fourth card leaves out, and the answer is not a name that was crossed out or a field left blank. Every field on that card is filled in. What is missing is a second person, and no blank on the form was waiting for one.

If an image will not load, the cards are also reachable through the Library of Congress Copyright Office post of 31 March 2021, which is where these five addresses came from (Chen, 2021).

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/`,
      exercise: {
        instructions:
          "Read each answer off the card named in the prompt. Accents and capitals are forgiven; the words are not.",
        items: [
          {
            prompt: "1901 card: the field label printed at the top right, above her name, is the single word ___",
            answer: "Author",
            hint: "One word, with a full stop after it on the card.",
            explanation:
              "The 1901 card's top field is labelled Author, and the line under it reads Zitkala-Ša. The register recorded her in the author field from her first book.",
          },
          {
            prompt: "1901 card: on the line printed \"Copyright by\", the card names ___",
            answer: "Ginn & co.",
            accept: ["Ginn and co.", "Ginn & Co", "Ginn and Company", "Ginn & Company", "Ginn and Co."],
            hint: "A publishing firm in Boston and London.",
            explanation:
              "Author and claimant are different questions, and in 1901 the answers were different people. The card records both without either erasing the other.",
          },
          {
            prompt: "1901 card: which class does the entry line give?",
            answer: "Class A",
            accept: ["A", "Cl. A", "Class A, XXc"],
            hint: "The 1909 Act's class for books, and the letter is stamped large on the 1921 card too.",
            explanation:
              "Books are Class A. The opera's card carries a different letter, and the difference is the whole of Section 2.",
          },
          {
            prompt: "1901 card: who is named as the illustrator?",
            answer: "Angel de Cora",
            accept: ["Angel De Cora", "Angel de Cora (Hinook-Mahiwi-Kilinaka)"],
            hint: "The card gives a second name in brackets after hers.",
            explanation:
              "The title line names the illustrator as well as the author, so the same card shows the register recording two Native women on one book.",
          },
          {
            prompt: "1921 card: on the line printed \"Copyright claimed by\", the card names ___",
            answer: "G. Bonnin",
            accept: ["G Bonnin", "G. Bonnin, Washington", "Gertrude Bonnin"],
            hint: "An initial and a surname, followed by a city.",
            explanation:
              "Twenty years after the first card, the claimant is her. The Library of Congress post describes this as her registering the work herself.",
          },
          {
            prompt: "1921 card: name the publishing house given in the title line",
            answer: "Hayworth publishing house",
            accept: ["Hayworth", "Hayworth Publishing House"],
            hint: "In Washington, and the word after the name is not a company abbreviation.",
            explanation:
              "The card gives the imprint and the year, which is how a catalogue entry identifies which printing an entry covers.",
          },
          {
            prompt: "1929 renewal: beside \"The renewal copyright is claimed by me, as\", the applicant has written ___",
            answer: "author",
            hint: "The form prints the four permitted answers underneath the blank.",
            explanation:
              "The permitted answers are author, widow, widower and child. She had to state a capacity, and the capacity she stated was author.",
          },
          {
            prompt: "1929 renewal: the name and address of the renewal claimant begins with which name?",
            answer: "Gertrude Bonnin",
            accept: ["Gertrude Bonnin (Zitkala-Sa)", "Gertrude Bonnin (Zitkala-Ša)"],
            hint: "The card gives a second name in brackets after it.",
            explanation:
              "The same card gives the same name again in the \"Name of author\" blank, so she is claimant and author on one form.",
          },
          {
            prompt: "1929 renewal: which firm is named as the original claimant of the 1901 registration?",
            answer: "Ginn and Company",
            accept: ["Ginn & co.", "Ginn and co.", "Ginn & Company"],
            hint: "The same publisher as the 1901 card, written out in full this time.",
            explanation:
              "The renewal form asks for the original claimant, which is how a 1929 clerk could tie the renewal to the 1901 entry without leaving the drawer.",
          },
          {
            prompt: "1912 Sun Dance card, front: in the blank for the name and address of the copyright claimant, the card reads ___",
            answer: "Wm F Hanson",
            accept: ["Wm. F. Hanson", "William F. Hanson", "W. F. Hanson", "Wm F Hanson, Vernal Utah"],
            hint: "Handwritten, with a town in Utah on the line below.",
            explanation:
              "This is the field that decides who the office treats as the owner, and one name is in it.",
          },
          {
            prompt: "1912 Sun Dance card, back: in the blank for the name of the author, the card reads ___",
            answer: "Wm F Hanson",
            accept: ["Wm. F. Hanson", "William F. Hanson", "W. F. Hanson"],
            hint: "The same hand as the front of the card.",
            explanation:
              "Author and claimant are separate questions and the card gives one answer to both, which is the fact the rest of the course reads against the newspapers.",
          },
          {
            prompt: "1912 Sun Dance card: which word is written in by hand above the printed word \"Composition\"?",
            answer: "Musical",
            hint: "It turns a dramatic composition into a dramatico-musical one.",
            explanation:
              "The printed form is for a dramatic composition not reproduced for sale, and the handwritten word marks it as the musical kind.",
          },
          {
            prompt: "1912 Sun Dance card, front: what date is on the stamp reading \"1 c. rec'd\"?",
            answer: "DEC 12 1912",
            accept: ["December 12, 1912", "12 December 1912", "Dec 12 1912", "Dec. 12, 1912"],
            hint: "Two months before the first production.",
            explanation:
              "One copy received. The date is why the registration counts as the opening move in this record rather than a later erasure.",
          },
          {
            prompt: "1912 Sun Dance card, back: what is written in the blank for the brief title of the work?",
            answer: "The Sun Dance Opera",
            accept: ["Sun Dance Opera", "The Sun Dance Opera."],
            hint: "Four words, in the applicant's handwriting.",
            explanation:
              "The front of the card describes the deposit as a vocal score of an opera in three acts, and the back gives the short title.",
          },
          {
            prompt: "Which of the four cards names Zitkala-Šá nowhere at all?",
            answer: "The Sun Dance Opera",
            accept: ["Sun Dance Opera", "the 1912 card", "the Sun Dance card", "the opera card"],
            hint: "It is the only one of the four that is not about a book.",
            explanation:
              "Three cards record her as author, as claimant, and as an author claiming a renewal. The fourth has five name fields and no blank waiting for a second person.",
          },
        ],
      },
    },
    {
      slug: "what-the-newspapers-said-in-1913",
      title: "5 · What the newspapers said in 1913",
      section: "Section 2 · Four cards in one catalogue",
      body: `The register said one name. The press said two, from the beginning, and kept saying two for twenty-two years.

**The premiere.** February 1913, Orpheus Hall, Vernal, Utah, for three nights (Smith, 2001). Productions at Brigham Young University followed in May and December of the next year.

**A national music paper.** Catherine Parsons Smith quotes the headline *Musical America* put on its premiere coverage: "Braves Aid in Indian Opera at Utah Presentation ... A Full-Blooded Sioux Co-Author" (Smith, 2001). The vocabulary is the paper's, in 1913. The word that matters for this course is the last one. A trade paper announcing the work to the American music business told its readers the opera had two authors, ten months after the Copyright Office had been told it had one.

**A Texas daily, ten months later.** On 27 December 1913 the *El Paso Herald* ran a piece headed "Indian Girl Writes Opera". Its opening sentence, as the Chronicling America text gives it, reads: "At last there has been produced an indisputably American opera, 'The Sun Dance,' written by Zitkala Sa, a full blooded Sioux Indian, the wife of Mr. R. T. Bonnin, an employe of the government on the Uintah Indian Reservation at Vernal, Utah, collaborating with Professor W. Hansen."

**Two warnings about that sentence, and they are the lesson.** First, it is uncorrected machine transcription of a scanned newspaper page, not a reading of the page itself. Nobody working on this course has read the printed page, so the wording is given as the transcription gives it and is marked as such. Second, look at how the paper spells the other collaborator: "Hansen". The register spells him Hanson. A newspaper that misspells one name in its first sentence is not a reliable instrument for the exact form of any name, and this is a useful thing to know before you build an argument on a newspaper.

What the sentence is reliable for is the shape of the claim. A daily paper eight hundred miles away told its readers that the opera was written by her, collaborating with him. That is the reverse of the order on the card.

**Smith's summary of the whole early period.** "Zitkala-Sa's role in the early productions was always fully acknowledged in the surviving newspaper stories before the 1935 revival" (Smith, 2001). Always, and in the surviving stories: both qualifications are hers, and the second one is honest about what has not survived.

**So the two instruments disagreed from the start, and the disagreement had a shape.** The instrument with the larger audience, the press, named both. The instrument with the smaller audience, a card in a drawer in Washington, named one. The small one was the one with legal effect and the one an institution would consult twenty-five years later.

*Who Signs the Print*, lesson 21, sets out a three-condition test for spotting a relocated credit, and its second condition is a credit that "exists somewhere with a smaller readership". This case runs that condition backwards, and it is worth noticing why the reversal is worse rather than better. When the fuller credit lives in the quiet document, finding the quiet document fixes the record. When the fuller credit lives in the loud document and the quiet one is the register, the loud version fades with the newsprint and the quiet one is what survives to be quoted.

:::reveal What did the Musical America headline call Zitkala-Šá, according to Smith's quotation of it? ||| A co-author, in the phrase "A Full-Blooded Sioux Co-Author", which is the paper's own wording from 1913.

:::reveal Why does this course mark the El Paso Herald sentence as uncorrected transcription? ||| Because nobody working on the course has read the printed page image, only the machine transcription of the scan, and the transcription misspells one of the two names in its first sentence.

:::reveal How does this case reverse condition two of the test in Who Signs the Print, and why is the reversal worse? ||| The fuller credit is in the loud instrument, the press, and the register is the quiet one, so the fuller version fades with the newsprint while the thinner one survives to be quoted.

## Vocabulary
- **Uncorrected transcription**: machine-read text from a scanned page that nobody has checked against the page image, reliable for the shape of a claim and not for exact wording.
- **Trade paper**: a periodical written for people working in an industry, such as *Musical America* for the music business, whose coverage reaches decision makers rather than general readers.
- **Relocated credit**: a credit that exists, but in a document with a smaller readership than the one the public sees, which is condition two of the test in *Who Signs the Print*.
- **Revival**: a later production of a work first staged years before, here the 1935 production at Brigham Young University.

## Sources
Indian girl writes opera. (1913, December 27). *El Paso Herald*. Chronicling America, Library of Congress. https://chroniclingamerica.loc.gov/lccn/sn88084272/1913-12-27/ed-1/seq-31/
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Four cards in one catalogue",
      section: "Section 2 · Four cards in one catalogue",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the single word printed as the field label at the top right of the 1901 card?",
            options: [
              "Author",
              "Claimant, which is the field the same card fills with the name of a Boston publisher",
              "Proprietor, which is the word the 1909 Act itself uses for the holder of a copyright",
              "Applicant, which is the word the renewal form of 1929 uses in the equivalent place",
            ],
            correctIndex: 0,
            explanation:
              "The line beneath that label reads \"Zitkala-Ša.\" The register recorded her in the author field from her first book onward.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "On the 1901 card, who holds the copyright?",
            options: [
              "Ginn & co.",
              "Zitkala-Ša, who is named on the same card as the author of the retold legends",
              "Angel de Cora, who is named on the card as the illustrator of the same volume",
              "The Library of Congress, which held copyright in works deposited before 1909",
            ],
            correctIndex: 0,
            explanation:
              "The line reads \"Copyright by Ginn & co., Boston, Mass.\" An author who is not the claimant is ordinary for a trade book, and the card records both facts.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Who does the 1901 card name as the illustrator of Old Indian Legends?",
            options: [
              "Angel de Cora",
              "Gertrude Bonnin, who is the same person as the author under a different name",
              "Hinook-Mahiwi-Kilinaka, a second artist working alongside the one named first",
              "The card names no illustrator, which is why the renewal form had to add one",
            ],
            correctIndex: 0,
            explanation:
              "The title line reads \"with illustrations by Angel de Cora (Hinook-Mahiwi-Kilinaka)\", giving one artist under two names, in the way the renewal card later gives the author under two names.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What class does the 1901 entry line give?",
            options: [
              "Class A",
              "Class D, which is the class the opera's application of 1912 was filed under",
              "Class E, the class the 1909 Act reserved for musical compositions filed alone",
              "Class C, the class the 1909 Act reserved for lectures prepared for oral delivery",
            ],
            correctIndex: 0,
            explanation:
              "\"Class A, XXc, no. 16747, Sept. 11, 1901.\" Class A is books, and the 1921 card carries a large A in its corner for the same reason.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "On the 1921 card, who is named on the line printed \"Copyright claimed by\"?",
            options: [
              "G. Bonnin",
              "Hayworth publishing house, the Washington imprint named in the title line above it",
              "Ginn & co. of Boston, who had been the claimant on her first book twenty years earlier",
              "The Society of American Indians, for whom she was then working in Washington",
            ],
            correctIndex: 0,
            explanation:
              "The typed words are \"G. Bonnin, Washington.\" The Library of Congress post describes this as her registering the work herself on 5 December 1921.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What date does the 1921 card give for publication and registration?",
            options: [
              "5 December 1921",
              "11 September 1901, which is the date carried over from the earlier of her two books",
              "15 January 1929, which is the date written on the renewal application in her hand",
              "12 December 1912, the date stamped on the application card for the opera",
            ],
            correctIndex: 0,
            explanation:
              "The card shows a copyright symbol with \"Dec. 5, 1921\" and, on the next line, two copies and the affidavit received the same day.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What note does the 1921 card carry about the contents of the book?",
            options: [
              "Partly autobiographical",
              "Wholly fictional, with the note adding that the legends are retold rather than invented",
              "Illustrated throughout by a second artist named in brackets in the title line",
              "Previously serialised, with the note naming the magazine the chapters appeared in",
            ],
            correctIndex: 0,
            explanation:
              "The slip reads \"Partly autobiographical. The last chapter is entitled: America's Indian problem.\" A catalogue card describes as well as records.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What capacity did the applicant write on the 1929 renewal form?",
            options: [
              "Author",
              "Widow, which is one of the four permitted answers printed underneath the blank",
              "Proprietor, which is the word section 42 of the Act uses for a copyright holder",
              "Assignee, on the strength of a transfer from the original claimant in Boston",
            ],
            correctIndex: 0,
            explanation:
              "The permitted answers printed on the form are author, widow, widower and child. She had to choose one, and she chose author.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Under which section of the 1909 Act was the 1929 renewal made?",
            options: [
              "Section 24",
              "Section 44, which sets the three-month deadline for recording an assignment",
              "Section 46, which governs whose name may stand in the statutory notice",
              "Section 5, which lists the eleven classes an application may be filed in",
            ],
            correctIndex: 0,
            explanation:
              "The printed form says the application is made \"in accordance with the provisions of section 24 of the Act of March 4, 1909\", for a renewal term of twenty-eight years.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which firm is named on the 1929 renewal as the original claimant?",
            options: [
              "Ginn and Company",
              "Hayworth publishing house, the Washington imprint that had published her second book",
              "No firm at all, since the renewal form asks only for the name of the author",
              "The Indian Rights Association, which had published a report she worked on",
            ],
            correctIndex: 0,
            explanation:
              "The same publisher as the 1901 card, written out in full. The certificate and the fee also went to and from Ginn and Company in Boston.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What address does the 1929 renewal give for the renewal claimant?",
            options: [
              "1812 K Street, N.W., Washington, D.C.",
              "15 Ashburton Place, Boston, Massachusetts, which is the address on the same card",
              "Vernal, Utah, which is the address given on the application card for the opera",
              "The Yankton Indian Reservation, which is where the National Park Service places her",
            ],
            correctIndex: 0,
            explanation:
              "The Ashburton Place address on the same card belongs to Ginn and Company, which received the certificate and sent the fee.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does the 1929 renewal give as the class of work?",
            options: [
              "Book",
              "Dramatico-musical composition, matching the handwritten word on the 1912 application",
              "Lecture, since the form's examples list lectures prepared for oral delivery first",
              "Print, since the volume carried illustrations as well as text when first published",
            ],
            correctIndex: 0,
            explanation:
              "The form asks the applicant to state whether the work is a book, a musical composition, a dramatic composition or something else, and the answer written in is \"book\".",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What is typed at the top left of the 1912 application card?",
            options: [
              "Hanson (WM.F.)",
              "Zitkala-Ša, in the same position the 1901 and 1921 cards give her name in",
              "Sun Dance Opera, with the names of both collaborators on the line beneath it",
              "Orpheus Hall, Vernal, which is where the work would be produced two months later",
            ],
            correctIndex: 0,
            explanation:
              "Under it, on the next line, \"Sun (The) dance; opera in 3 acts. Vocal score.\" The heading is the filing name, and it is a surname.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "How does the 1912 card describe the deposited work?",
            options: [
              "An opera in 3 acts, vocal score",
              "A full orchestral score in five acts, deposited together with a printed libretto",
              "A set of numbers for voice and piano, deposited without any title for the whole",
              "A dramatic composition reproduced for sale, with two copies deposited on the day",
            ],
            correctIndex: 0,
            explanation:
              "The typed line reads \"Sun (The) dance; opera in 3 acts. Vocal score.\" The printed form is the one for a composition NOT reproduced for sale, and one copy was received.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which word is written in by hand above the printed word \"Composition\" on the 1912 form?",
            options: [
              "Musical",
              "Dramatic, which the form leaves out and which the applicant therefore had to supply",
              "Unpublished, which is what \"not reproduced for sale\" was understood to mean",
              "Renewal, written in later by an office clerk when the term was extended",
            ],
            correctIndex: 0,
            explanation:
              "The printed heading is for a dramatic composition not reproduced for sale, and the handwritten word marks it as the dramatico-musical kind.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What does the date stamp reading \"1 c. rec'd\" on the 1912 card say?",
            options: [
              "DEC 12 1912",
              "FEB 1913, matching the month of the first production at Orpheus Hall in Vernal",
              "DEC 5 1921, matching the day she registered a book of her own in Washington",
              "JAN 16 1929, matching the day the office received the renewal application",
            ],
            correctIndex: 0,
            explanation:
              "One copy received, 12 December 1912, with a cash stamp of the same date. That is two months before the premiere.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does the corner box headed \"Write nothing here\" on the 1912 card carry?",
            options: [
              "A heavy D 4",
              "A large letter A, in the way the 1921 card for her second book carries one",
              "The registration number, written out in full beside the date of deposit",
              "The name of the examiner who processed the application in Washington",
            ],
            correctIndex: 0,
            explanation:
              "The card's printed footer separately directs a published dramatic composition to form D1 and a dramatico-musical composition to form D2, and the entry stamp begins \"Cl. D\".",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "How many name fields are there across the two sides of the 1912 card?",
            options: [
              "Five",
              "Two, being the claimant on the front and the author on the back, and no others",
              "Nine, which is why the course says the form had room for a second collaborator",
              "One, since the typed heading is the only place a person is named on either side",
            ],
            correctIndex: 0,
            explanation:
              "The typed heading, the claimant blank, the author blank, the certificate blank and the remitter blank. Every one reads the same name.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "How many different people are named anywhere on the 1912 card?",
            options: [
              "One",
              "Two, with the second name written smaller and in a different hand on the reverse",
              "Three, counting the notary who witnessed the application before it was posted",
              "None, since the work was registered in the name of the producing company",
            ],
            correctIndex: 0,
            explanation:
              "No other person appears anywhere on either side. What is missing is not a crossed-out name but a second person, and no blank was waiting for one.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What country does the back of the 1912 card give for the author's citizenship?",
            options: [
              "United States of America",
              "The card leaves that blank, which is why the application had to be filed twice",
              "Utah, since the form asks for the state in which the applicant was then resident",
              "Great Britain, since the printed note concerns an alien author domiciled in the U.S.",
            ],
            correctIndex: 0,
            explanation:
              "The form asks for the country of which the author or translator is a citizen, and a printed note beside it tells an alien author domiciled in the United States to say so.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does the printed footer of the 1912 card say about forms D1 and D2?",
            options: [
              "D1 for published dramatic, D2 for dramatico-musical",
              "D1 for an original work and D2 for a translation of a work first published abroad",
              "D1 for a first registration and D2 for a renewal made in the twenty-eighth year",
              "D1 for a claimant who is the author and D2 for a claimant who is an assignee",
            ],
            correctIndex: 0,
            explanation:
              "The instruction is printed at the foot of the back of the card. It is one more sign that the form was built to sort works carefully.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What is written in the \"Brief title of work\" blank on the back of the 1912 card?",
            options: [
              "The Sun Dance Opera",
              "Sun (The) dance; opera in 3 acts, repeating the typed heading from the front",
              "Vocal score, since the blank asks what was deposited rather than what it is called",
              "Nothing, since the title had not been settled when the application was posted",
            ],
            correctIndex: 0,
            explanation:
              "The front carries the catalogue form of the title; the back carries the short title in the applicant's own hand.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What statutory fee does the printed text of the 1912 application say is enclosed?",
            options: [
              "One dollar",
              "Fifty cents, which is the fee the renewal form of 1929 prints on its face",
              "Two dollars, being one dollar for each of the two deposit copies required",
              "No fee, since a composition not reproduced for sale was registered free of charge",
            ],
            correctIndex: 0,
            explanation:
              "The printed sentence reads that one complete copy is deposited and that the statutory fee for registration is also inclosed.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which of the four cards names Zitkala-Šá nowhere at all?",
            options: [
              "The 1912 opera card",
              "The 1929 renewal, which names only the publishing firm that sent in the fee",
              "The 1921 card, which gives the author's married surname and not her own name",
              "The 1901 card, which credits the retelling to the publisher rather than a person",
            ],
            correctIndex: 0,
            explanation:
              "Three cards record her as author, as claimant, and as an author claiming a renewal. The fourth records somebody else five times.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What does the Library of Congress post say about her and the copyright records for the opera?",
            options: [
              "She does not appear on them",
              "She appears on them as a co-claimant added to the file in the year of the revival",
              "She appears on them only in the renewal application made in her name in 1929",
              "The records were destroyed, so nobody can now say whether she appeared on them",
            ],
            correctIndex: 0,
            explanation:
              "Its sentence is \"despite her contributions, Zitkála-Šá does not appear on the copyright records for the work\", and its caption calls Hanson the sole claimant.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "How does lesson 3 summarise what the four cards together show?",
            options: [
              "The register knew how to record her",
              "The register had no field for a collaborator, so a second name was impossible to enter",
              "The register recorded her only when a publisher filed on her behalf from Boston",
              "The register treated books and stage works under two different statutes entirely",
            ],
            correctIndex: 0,
            explanation:
              "Author in 1901, claimant in 1921, author claiming a renewal in her own hand in 1929. It was never asked to record her for the opera.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "How many ways do the four records in lesson 3 spell her name?",
            options: [
              "Four",
              "One, since a government register standardised spellings across its whole catalogue",
              "Two, being the form on the cards and the form the Library of Congress uses today",
              "Seven, counting the spellings used by the newspapers as well as by the register",
            ],
            correctIndex: 0,
            explanation:
              "Zitkala-Ša on the 1901 card, Zitkala-Sa in the 1921 title line, Zitkala-Ša in brackets on the renewal, and Zitkála-Šá in the Library of Congress post.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does lesson 3 say a record is, given that four records spell one name four ways?",
            options: [
              "Somebody's writing down of the thing",
              "A neutral copy of the thing, which is why a register outranks a newspaper account",
              "A legal fiction, which has no evidential value once a discrepancy is discovered",
              "A summary written after the fact, which is why no card can be quoted exactly",
            ],
            correctIndex: 0,
            explanation:
              "Not the thing, but somebody's writing down of the thing. That is the reason a course about credit reads the writing rather than trusting it.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which convention does this course follow for spelling her name?",
            options: [
              "Zitkala-Šá in its own sentences",
              "The 1901 card's spelling everywhere, since that is the earliest record of the name",
              "The Library of Congress spelling everywhere, including inside quotation marks",
              "Whichever spelling the nearest cited source uses, changed from lesson to lesson",
            ],
            correctIndex: 0,
            explanation:
              "Zitkala-Šá in the course's own prose, and each source's own spelling inside quotation marks, so a quotation is never quietly corrected.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does lesson 4 say is missing from the fourth card?",
            options: [
              "A second person",
              "A signature, which the 1909 Act made the condition of a valid application in Class D",
              "The date of first production, which every dramatic application had to carry",
              "The class mark, which an office clerk added by hand some years afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Every field on that card is filled in. What is missing is a second person, and no blank on the form was waiting for one.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "Where does lesson 4 say the five card images came from?",
            options: [
              "The Library of Congress post of 31 March 2021",
              "A finding aid published by Brigham Young University, which holds the whole score",
              "The 1912 Catalog of Copyright Entries, digitised and searchable as full text",
              "Chronicling America, the newspaper collection that also holds the Texas daily",
            ],
            correctIndex: 0,
            explanation:
              "The Copyright Office post about her is where the four cards are linked, which is why a learner can open the register for herself at all.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "In the exercise, how is a typed answer graded when the accents differ?",
            options: [
              "Accents and capitals are forgiven",
              "Any difference at all is marked wrong, since the point is to copy the card exactly",
              "Accents are required and capitals forgiven, because the name carries a diacritic",
              "The answer is graded by a reviewer rather than by the software, at the next session",
            ],
            correctIndex: 0,
            explanation:
              "The instruction line says accents and capitals are forgiven and the words are not, so a learner is tested on reading the card rather than on typography.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "Where was The Sun Dance Opera first produced?",
            options: [
              "Orpheus Hall, Vernal, Utah",
              "Provo, Utah, on the campus of Brigham Young University, in May of the following year",
              "Salt Lake City, at a theatre that a national music paper reviewed at length",
              "New York City, at a house run by a light opera guild that one man had founded",
            ],
            correctIndex: 0,
            explanation:
              "February 1913, for three nights, according to Smith. The Brigham Young University productions came in May and December of the next year.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What did the Musical America headline call her, in Smith's quotation of it?",
            options: [
              "A co-author",
              "A collaborator, which is the word later scholarship most often uses for her role",
              "A consultant on the melodies, which is how the 1938 publicity described her part",
              "The composer, which is the word usually attached to the other collaborator",
            ],
            correctIndex: 0,
            explanation:
              "\"Braves Aid in Indian Opera at Utah Presentation ... A Full-Blooded Sioux Co-Author.\" The vocabulary is the paper's, in 1913.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "How long after the copyright filing did the trade paper tell its readers the opera had two authors?",
            options: [
              "About ten months",
              "About ten years, which is why the revival of 1935 could describe one man as the owner",
              "The same week, since the office and the paper were both told at the time of filing",
              "Twenty-five years, at the time of the New York production mounted in 1938",
            ],
            correctIndex: 0,
            explanation:
              "The card is stamped 12 December 1912 and the premiere coverage belongs to February 1913, with the Texas story following in December 1913.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What headline did the El Paso Herald run on 27 December 1913?",
            options: [
              "Indian Girl Writes Opera",
              "Braves Aid in Indian Opera at Utah Presentation, with a subheading about a co-author",
              "Sun Dance Opera Was Big Success, over a review of three nights in a small hall",
              "A Full-Blooded Sioux Co-Author, over an account of the work's Utah premiere",
            ],
            correctIndex: 0,
            explanation:
              "The other wording belongs to the Musical America premiere coverage as Smith quotes it. Two papers, two headlines, both naming her.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "How does the El Paso Herald sentence spell the other collaborator's surname?",
            options: [
              "Hansen",
              "Hanson, matching the spelling on the copyright application filed the year before",
              "Hanssen, which is the spelling used in the 1938 New York production's publicity",
              "Hansom, which is what the machine transcription of the scanned page produced",
            ],
            correctIndex: 0,
            explanation:
              "The register spells him Hanson. A paper that misspells a name in its first sentence is not a reliable instrument for the exact form of any name.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Why does the course flag the El Paso Herald sentence as uncorrected?",
            options: [
              "Nobody here read the printed page",
              "Because the paper printed a correction the following week that the archive does not hold",
              "Because the original issue is lost and the text survives only in a later reprint",
              "Because the sentence was written by a syndicate rather than by the paper's own staff",
            ],
            correctIndex: 0,
            explanation:
              "It is machine transcription of a scanned page, given as the transcription gives it and marked as such, so a reader knows exactly how far to trust the wording.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What is the El Paso Herald sentence reliable for, according to the lesson?",
            options: [
              "The shape of the claim",
              "The exact wording, which is what a transcription of a printed page preserves best",
              "The spelling of the names, which a compositor of the period set from a wire copy",
              "Nothing at all, which is why the course does not quote from it anywhere",
            ],
            correctIndex: 0,
            explanation:
              "A daily eight hundred miles away told its readers the opera was written by her, collaborating with him. That is the reverse of the order on the card.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What does Smith say about her role in the surviving newspaper stories before 1935?",
            options: [
              "It was always fully acknowledged",
              "It was acknowledged in Utah papers and omitted in every paper published outside the state",
              "It was acknowledged only after the second production at Brigham Young University",
              "It was disputed in print by the other collaborator, who wrote to the papers himself",
            ],
            correctIndex: 0,
            explanation:
              "\"Zitkala-Sa's role in the early productions was always fully acknowledged in the surviving newspaper stories before the 1935 revival.\" Both qualifications are hers.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Which of the two instruments had the larger audience in 1913?",
            options: [
              "The press",
              "The register, since a copyright card was published in a catalogue sold by subscription",
              "Neither, since a registration card was reprinted in every paper that reviewed the work",
              "The score, since audiences at the three Vernal performances could read the title page",
            ],
            correctIndex: 0,
            explanation:
              "And the smaller one, a card in a drawer in Washington, was the one with legal effect and the one an institution would consult twenty-five years later.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What is condition two of the test in Who Signs the Print, lesson 21?",
            options: [
              "A credit in a document with a smaller readership",
              "A format cap on the public surface, such as a print margin that holds one signature",
              "An unnamed role that is technically demanding and succeeds by being invisible",
              "An archival silence, meaning no second document naming the contributor exists",
            ],
            correctIndex: 0,
            explanation:
              "The other options are conditions one and three, and archival silence is what that course treats as the different and worse problem when condition two fails.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Why does lesson 5 say the reversal of condition two is worse rather than better?",
            options: [
              "The loud version fades and the quiet one survives",
              "Because a register can be corrected at any time while a newspaper never can be",
              "Because a newspaper reaches decision makers and a register reaches general readers",
              "Because the quiet document in this case was destroyed before anyone could read it",
            ],
            correctIndex: 0,
            explanation:
              "When the fuller credit is in the quiet document, finding it fixes the record. When the fuller credit is in the newsprint and the register is the thin one, the thin one is what survives to be quoted.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "In which months of the following year were the Brigham Young University productions staged?",
            options: [
              "May and December",
              "February and March, in the same season as the first production in Vernal",
              "June and July, during the university's summer teaching term in Provo",
              "January and October, in the year the work was first registered in Washington",
            ],
            correctIndex: 0,
            explanation:
              "Smith gives May and December of the year after the Vernal premiere, which is how the work moved from a small hall to a university stage.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Which archive is the El Paso Herald page read through?",
            options: [
              "Chronicling America",
              "The Internet Archive, which holds the only surviving run of that particular paper",
              "The Copyright Office card catalog, which indexes newspapers alongside books",
              "Brigham Young University's collection of Hanson's papers, scores and clippings",
            ],
            correctIndex: 0,
            explanation:
              "Chronicling America is the Library of Congress newspaper collection, and it supplies the machine transcription the lesson quotes and labels.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What does the El Paso Herald sentence say about R. T. Bonnin?",
            options: [
              "He was a government employee at the reservation",
              "He conducted the orchestra at the first three performances in Vernal, Utah",
              "He owned the hall where the work was first produced in February of that year",
              "He was the publisher who registered the vocal score with the Copyright Office",
            ],
            correctIndex: 0,
            explanation:
              "The transcription describes him as \"an employe of the government on the Uintah Indian Reservation at Vernal, Utah\", which is why the couple were living in the basin.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "How did the register and the press differ in what they named, from the beginning?",
            options: [
              "The register named one, the press named two",
              "Both named two, and the disagreement was about which of the two came first",
              "The register named two and the press named one, which is the usual pattern",
              "Neither named anyone, since both described the work as an anonymous collaboration",
            ],
            correctIndex: 0,
            explanation:
              "The press kept naming two for twenty-two years, until the 1935 revival. The card never changed at all.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What does the course call a periodical written for people working in an industry?",
            options: [
              "A trade paper",
              "A register, meaning any publication that records transactions for a whole sector",
              "A broadsheet, meaning a large-format daily aimed at general rather than expert readers",
              "A gazette, meaning an official publication issued by a government department",
            ],
            correctIndex: 0,
            explanation:
              "Musical America is the example in the lesson, and the point of the term is that such a paper reaches decision makers rather than general readers.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What is a revival, in the sense lesson 5 uses the word?",
            options: [
              "A later production of a work first staged years before",
              "A second registration of a work whose original copyright term has run out",
              "A renewed press campaign mounted to restore a contributor's name to a credit",
              "A reconstruction of a lost score from parts held in more than one archive",
            ],
            correctIndex: 0,
            explanation:
              "Here it means the 1935 production at Brigham Young University, which is the point Smith marks as the end of the period when her role was fully acknowledged.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Which part of the Musical America headline does lesson 5 say matters most for this course?",
            options: [
              "The last word",
              "The first word, because it shows how the paper described the performers in 1913",
              "The place name, because it fixes which of the productions the coverage refers to",
              "The word opera, because it establishes the class the work was registered under",
            ],
            correctIndex: 0,
            explanation:
              "Co-author. A trade paper announcing the work to the American music business told its readers it had two authors.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What does the 1901 card record about the copies received?",
            options: [
              "Two copies, on 19 October 1901",
              "One copy, on 11 September 1901, which is also the date of the entry itself",
              "One copy, on 12 December 1912, in line with the rule for unpublished works",
              "Two copies and an affidavit, on 5 December 1921, as the 1921 card also shows",
            ],
            correctIndex: 0,
            explanation:
              "The printed line reads \"2 copies received to complete copyright\", with the date written in. The 11 September date is the entry, which is a different event.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What registration number does the 1901 card give, and which later card repeats it?",
            options: [
              "16747, repeated on the 1929 renewal",
              "630593, repeated on the renewal because the two books shared one entry number",
              "Cl. A 630593, which is the entry mark typed on the card for her second book",
              "3050, which is the number stamped by the office on the day the renewal arrived",
            ],
            correctIndex: 0,
            explanation:
              "The renewal form asks for the date and number of the original registration, which is how a 1929 clerk tied the two cards together without leaving the drawer.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Why does the course NOT print the registration number on the 1912 card?",
            options: [
              "It could not be confirmed",
              "Because the Library of Congress asks that unpublished registrations not be cited by number",
              "Because the number was assigned only after the first production, so it postdates the card",
              "Because the office never issued a number for a composition not reproduced for sale",
            ],
            correctIndex: 0,
            explanation:
              "The stamp reads as a Class D number with a handwritten mark after it, and the brief could not match that to the 1912 Catalog of Copyright Entries. The class is printed; the number is not.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does lesson 3 say the split between author and claimant on the 1901 card shows?",
            options: [
              "The two fields doing their job",
              "A clerical error, corrected twenty-eight years later when the renewal was filed",
              "That an author could not hold copyright in a book before the 1909 Act was passed",
              "That the publisher had bought the manuscript outright, which the card records in full",
            ],
            correctIndex: 0,
            explanation:
              "It is ordinary for a trade book in 1901, and the register has recorded both facts in two places without either erasing the other.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What did the Library of Congress post say she did on 5 December 1921?",
            options: [
              "Registered the work herself",
              "Assigned the copyright in her second book to a Washington publishing house",
              "Renewed the copyright in her first book, twenty years after it was first entered",
              "Filed a correction asking the office to add her name to an earlier registration",
            ],
            correctIndex: 0,
            explanation:
              "The 1921 card is the object that sentence describes, and its claimant line carries her name rather than a publisher's.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "On the 1929 renewal, who received the certificate of registration?",
            options: [
              "Ginn and Company",
              "Gertrude Bonnin, at the K Street address written on the face of the same form",
              "The Copyright Office retained it, since a renewal certificate was never sent out",
              "The Society of American Indians, which handled her correspondence in Washington",
            ],
            correctIndex: 0,
            explanation:
              "The certificate and the fee went to and from the publisher in Boston, so the publisher was in the transaction while the claim itself was hers.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What kind of work does the 1912 printed form describe on its face?",
            options: [
              "A dramatic composition not reproduced for sale",
              "A book published in Boston and London and deposited in two copies with the office",
              "A musical composition filed in the class the Act reserves for music alone",
              "A renewal of a copyright subsisting in a work already registered once before",
            ],
            correctIndex: 0,
            explanation:
              "The heading of the form is the printed phrase, and the handwritten \"Musical\" above \"Composition\" marks it as the dramatico-musical kind.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does the last item of the exercise ask a learner to name?",
            options: [
              "The card that names her nowhere",
              "The clerk who wrote out the entry for her first book in a Washington office",
              "The class each of the four cards was filed in, in the order the cards were made",
              "The date on which the register first recorded a work by a Native woman",
            ],
            correctIndex: 0,
            explanation:
              "And the lesson says why the answer is not a crossed-out name: every field on that card is filled in, and no blank was waiting for a second person.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What should a learner do if one of the card images will not load?",
            options: [
              "Reach them through the 2021 Library of Congress post",
              "Request a certified copy from the Copyright Office, which supplies one for a search fee",
              "Use the transcriptions in lesson 3, which reproduce every field on all four cards",
              "Skip the exercise, since the cards are the only source for the answers it wants",
            ],
            correctIndex: 0,
            explanation:
              "That post is where the five addresses came from, and it links the same four cards with its own captions.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "Who kept the copyright register on cards, and who has published the images?",
            options: [
              "The Copyright Office kept them; the Library of Congress published them",
              "Brigham Young University kept them and digitised them along with the Hanson papers",
              "The National Park Service kept them as part of its biographical files on her",
              "Chronicling America kept them, alongside the newspaper pages from the same years",
            ],
            correctIndex: 0,
            explanation:
              "The drawers are photographed and served as images, which is why a learner can read a 1912 application form rather than a summary of it.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does the 1921 card carry in its top right corner?",
            options: [
              "A large letter A",
              "A heavy D 4, the same mark the application card for the opera carries in that place",
              "The claimant's address, typed on the same slip as the title and the collation",
              "A renewal stamp added in 1949 when the first copyright term would have expired",
            ],
            correctIndex: 0,
            explanation:
              "A is the class for books. The opera's card carries a different letter in the equivalent position, and the difference is the subject of the section.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What does lesson 3 say about the order of events, given the 12 December 1912 date?",
            options: [
              "The registration is the first document in the story",
              "The registration is the last document, filed after the newspapers had settled the question",
              "The registration and the premiere happened in the same week of the same month",
              "The registration followed the assignment, which was signed earlier in the same year",
            ],
            correctIndex: 0,
            explanation:
              "Whatever else is true, the filing is not a later act of forgetting. It precedes the premiere by two months and precedes the assignment by about three.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What did the 1901 card's entry number and the 1929 renewal have in common?",
            options: [
              "The same number, 16747",
              "The same claimant, since the renewal was filed by the publisher rather than the author",
              "The same class letter, since a renewal was always filed in the class R for renewals",
              "The same date in September, since a renewal had to fall on the entry's anniversary",
            ],
            correctIndex: 0,
            explanation:
              "The renewal form asks for the number of the original registration, so the two cards can be tied together by anyone reading either one.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What does lesson 3 say the four cards were filled in by?",
            options: [
              "The same office, under the same Act",
              "Four different offices, which is why the spellings of her name differ between them",
              "The applicants themselves in every case, with no clerk involved at any point",
              "A commercial indexing firm contracted by the Library of Congress in the 1930s",
            ],
            correctIndex: 0,
            explanation:
              "They sit in the same catalogue. That is what makes the comparison fair: the difference between them is not a difference of jurisdiction or of era.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which word on the 1901 card describes what she did with the legends?",
            options: [
              "Retold",
              "Collected, which is the word the renewal application uses for the same volume",
              "Translated, which is why the back of the form asks about translators at all",
              "Edited, with the card naming a separate author for the underlying text",
            ],
            correctIndex: 0,
            explanation:
              "\"Old Indian legends, retold by Zitkala-Ša.\" The renewal card of 1929 repeats the same phrase in her own handwriting.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What does lesson 5 say the register did while the press kept naming two people?",
            options: [
              "Nothing; the card never changed",
              "It added a note of the newspaper coverage to the file at the time of the revival",
              "It cancelled the entry and asked the applicant to file a corrected application",
              "It issued a second certificate naming both collaborators in the order the press used",
            ],
            correctIndex: 0,
            explanation:
              "The press said two from the premiere onward and kept saying two for twenty-two years. The document with legal effect stayed exactly as filed in December 1912.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Half an opera, on paper nobody recorded
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "an-undivided-half-interest",
      title: "6 · An undivided half interest, notarized and unrecorded",
      section: "Section 3 · Half an opera, on paper nobody recorded",
      body: `Here is the document that changes the story, and the reason the popular version of this case is too simple in both directions.

**What Smith reports.** "Hanson copyrighted his score under his own name. He neglected to assign 'an undivided half interest' in the opera to his Native American collaborator until a month after the first production. (That assignment, notarized in Uintah County, Utah, is not recorded in the Copyright Office.)" (Smith, 2001).

Read that as three separate facts, because they pull in different directions.

1. He registered in his own name, in December 1912.
2. About a month after the February 1913 premiere, he signed a paper conveying half.
3. Nobody recorded it.

**Fact two matters, and the story usually leaves it out.** A version of this case that says only "he registered it without her" describes a man who never acknowledged a collaborator. The paper says otherwise: at some point in 1913 he put his signature on an instrument that gave her half, and took it to a notary. Whatever else is true, this is not a record of silence.

**Fact three matters more, and it is what the 1909 Act is for.** Go back to lesson 2. Section 42 says a copyright may be assigned by an instrument in writing signed by the proprietor, so the form is right: a signed writing is how a transfer is made. Section 44 says every assignment shall be recorded in the copyright office within three calendar months after its execution in the United States, and that in default it is void as against a subsequent purchaser or mortgagee for a valuable consideration, without notice, whose assignment has been duly recorded. Section 46 says a recorded assignee may substitute their name for the assignor's in the statutory notice.

So the unrecorded assignment, on its face, leaves two things undone. It cannot put her name in the statutory notice the public reads, because section 46 makes recording the condition of that. And it does not stand against the one class of person section 44 names, a later buyer for value who did not know and who recorded their own.

**"Undivided half interest" is a phrase worth slowing down on.** Undivided does not mean half the music or half the acts. It means a share in the whole, the way two people can own one house together without either of them owning a particular room. That is precisely why this document cannot settle the question this course refuses to answer. A paper conveying half of the property says nothing at all about who wrote which half of the work. Those are two different subjects, and the temptation to read one off the other is the single commonest error made about this case.

**What this course does not say about it, and why.** It does not say what rights she had after 1913. It does not say the assignment was valid or invalid, effective or ineffective, between the two of them. It does not say why the recording did not happen. The reason for all three refusals is the same: nobody working on this course has seen the document. It is known here only through Smith's description of it, and her description is of a paper she saw and this course did not. The assignment itself is presumably among Hanson's papers at Brigham Young University, where Hafen says the whole score is archived (Hafen, 1998). Until somebody reads it, its date, its terms and its signatures are open questions, and this course files them as open questions rather than filling them in.

**One more refusal, this one about motive.** Smith raises a possible reason for the timing, and she flags it herself as speculation, writing that "one might even speculate" that the belated assignment was a price exacted for further collaboration (Smith, 2001). A careful reader can hold that as a hypothesis a scholar floated. It is not a finding, she does not present it as one, and this course does not carry it. The general rule behind that decision is worth stating plainly, because it applies far beyond this case: say what the record shows, not a motive it does not. The record shows a filing, a signature and an omission. It does not show an intention.

**So what is the omission, exactly?** Not a refusal to acknowledge her. He signed a paper acknowledging her. The omission is a procedural one with a deadline attached, and it is the difference between a private paper and a public register. Three calendar months, one filing, and the register would have carried both names from 1913 onward. The register carried one name until it stopped being updated at all.

:::reveal What are the three separate facts in Smith's sentence about the assignment? ||| That he registered the score in his own name, that about a month after the first production he signed a paper conveying an undivided half interest to her, and that the assignment was never recorded in the Copyright Office.

:::reveal What does "undivided half interest" mean, and what does it NOT tell you? ||| It means a share in the whole work, the way two people can own one house together, and it tells you nothing about who wrote which part of the opera.

:::reveal Why does this course refuse to say what rights she had after the assignment? ||| Because nobody working on the course has seen the document. It is known only through Smith's description, so its date, terms and signatures stay open questions.

## Vocabulary
- **Undivided interest**: a share in the whole of a property rather than in a specified part of it, so two owners share everything rather than dividing it up.
- **Notarize**: to have a signature witnessed and certified by a notary public, which makes the signing easier to prove and does nothing about recording.
- **Execution**: the signing of an instrument, which is the moment section 44's three-month recording clock starts running.
- **Statutory notice**: the copyright line printed on the work naming its owner, which section 46 lets a recorded assignee change to their own name.
- **Speculation**: a possibility a writer offers without evidence and labels as such, which a careful reader holds as a hypothesis rather than a finding.

## Sources
Copyright Act of 1909, §§ 42, 44, 46 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "1935-1938-and-a-shaky-hand",
      title: "7 · 1935, 1938, and a shaky hand",
      section: "Section 3 · Half an opera, on paper nobody recorded",
      body: `Twenty-two years pass. The opera is revived, it reaches New York, and the description of who made it changes in public while the register does not change at all.

**The title page.** Hafen states it flatly: "His name alone appears on the title page of *The Sun Dance Opera*" (Hafen, 1998). The Library of Congress post says the same thing about two instruments at once: "Hanson, however, included only his name on the title page of the opera and in the registration for the work filed with the U.S. Copyright Office" (Chen, 2021).

**1935 and 1938.** Hafen again: "When the opera was revived at BYU in 1935, and selected for performance on Broadway in 1938, Hanson claims sole proprietorship of the opera. Indeed, he later assigns copyright to BYU. Yet, in the memoir he acknowledges Zitkala Sa as coauthor and collaborator" (Hafen, 1998). Smith adds what happened to the publicity: "For the New York production the descriptions of her role were reduced" (Smith, 2001). She names the producing body as "his New York Light Opera Guild", run by a man who had sung in the December 1914 production; Hafen calls it "the New York Opera Guild". The course gives both names rather than choosing, because two scholars reading the same period give two forms and neither was checked against a programme here.

**The timing is worth stating without comment.** Hafen notes that the New York production came "just months after Bonnin's death in 1938" (Hafen, 1998). The National Park Service gives her death as 26 January 1938 in its quick facts, and this course uses that date for a reason explained in lesson 9.

**The scores.** Smith records that numbers in the later score are "labeled 'copyright WFH' even though deposit copies of these don't appear in the current catalog of the Library of Congress" (Smith, 2001). A copyright line printed on a manuscript is an assertion. A registration is a record. The two can differ, and here they did.

**And then, late, a correction.** "Much later, Hanson thought better of all this. In a shaky hand, he added 'Zitkala Sa & W. F. Hanson' after the opera's title" (Smith, 2001). His memoir of 1967 names her as a coauthor and collaborator (Hafen, 1998).

**One thing this course cannot tell you, and says so.** The sources disagree about which document carries her name. The Library of Congress post says he left her name off the vocal score. Smith, reading the revised piano-vocal score, transcribes the first page of act I as reading "(From the original opera By Wm. F. Hanson colaboration [sic] Zitkala-Sa)" (Smith, 2001). Those two statements can both be true if they describe different manuscripts, and they probably do, because Smith distinguishes an earlier version from "the second, later version, prepared well after the collaboration had ended". But nobody working on this course has read the scores at Brigham Young University, so the course does not say which score carries which. It prints both statements, attributes each, and files the question.

**Now put the corrections next to the register.** A title page naming her, added by hand. A memoir naming her, published in 1967. A line on the first page of a revised score naming her. Three corrections, all real, and not one of them reaches the card. The card was filed on 12 December 1912 and says what it said then.

**This is the practical lesson of the whole course, and it is not about villainy.** Whatever the man intended in 1913, in 1935, or when his hand was shaking, the correction he could make was to the documents in front of him, and the documents in front of him were the ones with the smallest readership. The instrument with the reach was a form he had filled in twenty-odd years earlier, and the window for changing it by recording an assignment had closed three calendar months after a signature nobody filed.

:::reveal According to Hafen, what did Hanson claim at the 1935 revival and for the 1938 New York production? ||| Sole proprietorship of the opera, and she adds that he later assigns copyright to Brigham Young University, while his memoir acknowledges Zitkala-Šá as coauthor and collaborator.

:::reveal What did Hanson add after the opera's title, and in what hand? ||| The words "Zitkala Sa & W. F. Hanson", in a shaky hand, much later, as Smith describes it.

:::reveal Why does the course refuse to say which score carries her name? ||| Because the Library of Congress post and Smith describe different manuscripts and nobody here has read the scores at Brigham Young University, so the question is printed as open rather than resolved.

## Vocabulary
- **Sole proprietorship**: a claim to be the only holder of the copyright in a work, which is what Hafen says Hanson asserted in 1935 and 1938.
- **Piano-vocal score**: a performing score giving the vocal parts with the orchestral music reduced for piano, which is the form of the 1912 deposit.
- **Deposit copy**: the copy of a work sent to the Copyright Office with an application, whose absence from a catalogue means the registration cannot be found.
- **Memoir**: a first-person account published later, which is evidence of what its author said afterwards and not of what any document recorded at the time.

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
National Park Service. (2022, September 1). *Zitkala-Ša (Red Bird / Gertrude Simmons Bonnin)*. https://www.nps.gov/people/zitkala-sa.htm
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Half an opera, on paper nobody recorded",
      section: "Section 3 · Half an opera, on paper nobody recorded",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Hanson sign about a month after the first production, according to Smith?",
            options: [
              "An assignment of an undivided half interest",
              "A contract with a New York producing company for a Broadway run of the same work",
              "A second copyright application naming both collaborators in the author blank",
              "A letter to the Copyright Office asking for the December 1912 entry to be corrected",
            ],
            correctIndex: 0,
            explanation:
              "Smith writes that he neglected to assign \"an undivided half interest\" in the opera to his collaborator until a month after the first production.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Where was that assignment notarized?",
            options: [
              "Uintah County, Utah",
              "Washington, D.C., at the Copyright Office counter on the day it was filed",
              "Utah County, Utah, where Brigham Young University staged the work in 1914",
              "New York County, New York, ahead of the production mounted there in 1938",
            ],
            correctIndex: 0,
            explanation:
              "Smith gives the county in the same parenthesis in which she says the assignment is not recorded in the Copyright Office.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What happened to the assignment after it was signed and notarized?",
            options: [
              "It was never recorded",
              "It was recorded within the three months section 44 allows, and the register was updated",
              "It was recorded late, so the office refused it and returned the statutory fee",
              "It was revoked by a second instrument signed by the same proprietor in 1935",
            ],
            correctIndex: 0,
            explanation:
              "Smith's parenthesis says the assignment is not recorded in the Copyright Office, which is the fact the sections in lesson 2 are there to interpret.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Why does lesson 6 say the popular version of this case is too simple?",
            options: [
              "It leaves out the signed paper",
              "It leaves out the 1938 New York production, which is where the descriptions were reduced",
              "It leaves out the class the work was registered in, which decides what could be filed",
              "It leaves out the 1929 renewal, which shows the register recording her as an author",
            ],
            correctIndex: 0,
            explanation:
              "A version that says only \"he registered it without her\" describes a man who never acknowledged a collaborator. He signed an instrument giving her half and took it to a notary.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does \"undivided\" mean in the phrase \"undivided half interest\"?",
            options: [
              "A share in the whole",
              "A half of the music, as distinct from a half of the libretto or of the staging",
              "A right that cannot be sold separately from the physical manuscript it attaches to",
              "A half share that falls in when the other owner dies, in the manner of a survivorship",
            ],
            correctIndex: 0,
            explanation:
              "The way two people can own one house together without either owning a particular room. It says nothing about who wrote which part of the work.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does lesson 6 call the commonest error made about this case?",
            options: [
              "Reading authorship off the property share",
              "Assuming the register was capable of naming only one person on a single application",
              "Treating the premiere as the first document, when the registration precedes it",
              "Confusing the 1935 revival at a university with the 1938 production in New York",
            ],
            correctIndex: 0,
            explanation:
              "A paper conveying half the property says nothing about who wrote which half of the work. Those are two different subjects.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Which section of the 1909 Act makes recording the condition of putting your name in the statutory notice?",
            options: [
              "Section 46",
              "Section 42, which requires the instrument in writing signed by the proprietor",
              "Section 44, which sets the three calendar months and states the penalty for delay",
              "Section 24, under which a renewal is claimed in the twenty-eighth year of a term",
            ],
            correctIndex: 0,
            explanation:
              "Because recording never happened, section 46 was never available, so her name could not enter the notice the public reads.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Which three things does lesson 6 say it will NOT say about the assignment?",
            options: [
              "Her rights, its validity, and why it went unrecorded",
              "Its date, the county it was notarized in, and the share of the property it conveyed",
              "Who signed it, who witnessed it, and which scholar first described it in print",
              "Whether it exists, whether it concerns this opera, and whether Smith read it",
            ],
            correctIndex: 0,
            explanation:
              "The reason for all three refusals is the same: nobody working on this course has seen the document, which is known here only through Smith's description.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Where does lesson 6 suggest the assignment probably is?",
            options: [
              "Among Hanson's papers at Brigham Young University",
              "In the Copyright Office assignment volumes, indexed under the year of execution",
              "At the Uintah County courthouse, where a notarized instrument had to be lodged",
              "In the Library of Congress, which holds the deposit copy of the 1912 vocal score",
            ],
            correctIndex: 0,
            explanation:
              "Hafen says the whole score is archived there, where Hanson later taught, so the papers are the obvious place to look and the lesson files it as an open question.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "How does the course treat Smith's suggestion about why the assignment was belated?",
            options: [
              "As speculation she labelled as such",
              "As a finding, since it appears in a peer-reviewed article about the same documents",
              "As an error, since the timing is fixed by the notarial date she gives elsewhere",
              "As untranslatable, since her article gives it only in an untranslated quotation",
            ],
            correctIndex: 0,
            explanation:
              "She writes that \"one might even speculate\" it was a price exacted for further collaboration. A careful reader holds it as a hypothesis; the course does not carry it.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What general rule does lesson 6 state behind its refusal to carry a motive?",
            options: [
              "Say what the record shows, not a motive it does not",
              "Prefer the earliest document, because later accounts drift from what actually happened",
              "Prefer the fuller account, because a source that says more has usually seen more",
              "Never quote a living scholar's speculation, even when it is labelled as speculation",
            ],
            correctIndex: 0,
            explanation:
              "The record shows a filing, a signature and an omission. It does not show an intention, and the rule applies far beyond this case.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "How does lesson 6 characterise the omission at the centre of the case?",
            options: [
              "A procedural one with a deadline",
              "A refusal to acknowledge a collaborator, sustained in public over twenty-five years",
              "A drafting error in the application, which the office should have caught and returned",
              "A decision by the Copyright Office not to enter a second name on a Class D card",
            ],
            correctIndex: 0,
            explanation:
              "Three calendar months and one filing would have put both names on the public record. The difference at stake is between a private paper and a public register.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Against whom does an unrecorded assignment fail, on the face of section 44?",
            options: [
              "A later recorded buyer for value without notice",
              "Against the assignee, who cannot enforce it against the person who signed it",
              "Against the Copyright Office, which may cancel the underlying registration",
              "Against the author's heirs, who may claim the renewal term in their own right",
            ],
            correctIndex: 0,
            explanation:
              "That is the class of person the section names. The lesson stops there, because nobody here has read the instrument itself.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "In what order did the three 1912 and 1913 events happen?",
            options: [
              "Registration, premiere, assignment",
              "Assignment, registration, premiere, which is why the assignment was never recorded",
              "Premiere, registration, assignment, with the filing prompted by the reviews",
              "Registration, assignment, premiere, all within the last weeks of 1912",
            ],
            correctIndex: 0,
            explanation:
              "The card is stamped 12 December 1912, the premiere was February 1913, and Smith puts the assignment about a month after the first production.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does notarizing a signature do, in the terms lesson 6 uses?",
            options: [
              "Makes the signing easier to prove",
              "Records the instrument with the Copyright Office, satisfying section 44's deadline",
              "Transfers the copyright, which section 42 otherwise leaves to the parties to arrange",
              "Publishes the terms, so that a later buyer is treated as having had notice of them",
            ],
            correctIndex: 0,
            explanation:
              "It does nothing about recording. Confusing the notary with the register is the same mistake as confusing a private paper with a public one.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does the Act mean by the execution of an instrument?",
            options: [
              "Its signing",
              "Its filing with the Copyright Office, which starts the twenty-eight year term running",
              "Its performance, meaning the payment of whatever the assignment was given for",
              "Its notarization, which is the only form of execution the 1909 Act recognises",
            ],
            correctIndex: 0,
            explanation:
              "Section 44 measures its three calendar months from execution in the United States, so the signing is when the recording clock starts.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does Hafen say about the title page of The Sun Dance Opera?",
            options: [
              "His name alone appears on it",
              "Both names appear on it, in the order the newspapers of 1913 had used for them",
              "It carries no names at all, which is why the registration had to settle the question",
              "It carries her name alone, with his added in pencil at the time of the 1935 revival",
            ],
            correctIndex: 0,
            explanation:
              "The Library of Congress post says the same about two instruments together: only his name on the title page and in the registration.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does Hafen say Hanson claimed at the 1935 revival and for the 1938 production?",
            options: [
              "Sole proprietorship",
              "A half interest, consistent with the instrument he had signed twenty-two years earlier",
              "Joint authorship with his collaborator, whom the programmes named alongside him",
              "Nothing at all, since the university rather than the composer mounted both productions",
            ],
            correctIndex: 0,
            explanation:
              "She adds that he later assigns copyright to Brigham Young University, and that his memoir acknowledges Zitkala-Šá as coauthor and collaborator.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does Smith say happened to the descriptions of her role for the New York production?",
            options: [
              "They were reduced",
              "They were expanded, since a Broadway audience was thought to want the Native connection",
              "They were removed from the programme but kept in the press material sent to critics",
              "They were corrected, after a complaint made by the collaborator's family in 1938",
            ],
            correctIndex: 0,
            explanation:
              "Smith's phrase is that for the New York production the descriptions of her role were reduced, which is a change in publicity rather than in the register.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "How does the course handle the two different names given for the New York producing body?",
            options: [
              "It gives both",
              "It prefers Hafen's version, because she wrote first and used the shorter form",
              "It prefers Smith's version, because her article is the longer of the two studies",
              "It omits the name entirely, since neither scholar checked it against a programme",
            ],
            correctIndex: 0,
            explanation:
              "Smith writes \"his New York Light Opera Guild\" and Hafen writes \"the New York Opera Guild\". Neither was checked against a programme here, so the course does not choose.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "When did the New York production come, relative to her death?",
            options: [
              "Just months after it",
              "Two years after it, which is why the publicity no longer described her role at all",
              "Some months before it, so that she could have seen the production had she travelled",
              "In the same week, according to the account the National Park Service gives",
            ],
            correctIndex: 0,
            explanation:
              "Hafen's phrase is \"just months after Bonnin's death in 1938\". The course states the timing without drawing an inference from it.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does Smith record about numbers in the later score?",
            options: [
              "They are labelled with a copyright mark that has no matching deposit",
              "They carry both collaborators' names, in the hand that wrote the rest of the score",
              "They were removed before the New York production and survive only in a draft",
              "They were registered separately in Class E, the class the Act reserves for music",
            ],
            correctIndex: 0,
            explanation:
              "Labelled \"copyright WFH\" even though deposit copies of these do not appear in the current catalog of the Library of Congress. An assertion on a manuscript is not a registration.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What did Hanson add after the opera's title, much later?",
            options: [
              "Zitkala Sa & W. F. Hanson",
              "A dedication to the collaborator, written on the flyleaf of the revised score",
              "A line assigning the copyright to Brigham Young University, signed and dated",
              "A note recording the date of the first production at Orpheus Hall in Vernal",
            ],
            correctIndex: 0,
            explanation:
              "Smith writes that much later he thought better of all this and added those words in a shaky hand. It is a correction with the smallest possible readership.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does Hafen say about how his memoir describes her?",
            options: [
              "As coauthor and collaborator",
              "As the performer who sang the leading role at the first production in Vernal",
              "As a source of melodies, without using either the word author or the word composer",
              "It does not mention her, which is why the handwritten correction matters so much",
            ],
            correctIndex: 0,
            explanation:
              "The memoir is evidence of what its author said afterwards, not of what any document recorded at the time, which is the distinction the lesson keeps.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Which two sources disagree about which document carries her name?",
            options: [
              "The Library of Congress post and Smith",
              "Hafen and the National Park Service, which describe the title page differently",
              "Smith and Hafen, who give different dates for the revival at the university",
              "The 1912 card and the 1929 renewal, which spell her name in two different ways",
            ],
            correctIndex: 0,
            explanation:
              "The post says he left her name off the vocal score; Smith transcribes a revised piano-vocal score whose first page of act I names her. They may describe different manuscripts.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does Smith's transcription of the revised score's first page of act I read?",
            options: [
              "From the original opera By Wm. F. Hanson colaboration Zitkala-Sa",
              "Zitkala Sa and W. F. Hanson, in the same shaky hand as the addition to the title",
              "Copyright WFH, with no other name anywhere on the opening page of the act",
              "The Sun Dance Opera, an opera in three acts, vocal score, by Wm. F. Hanson",
            ],
            correctIndex: 0,
            explanation:
              "Smith prints the misspelling with a bracketed note, which is what a transcription is supposed to do: give the page as it is rather than as it should be.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Why can the Library of Congress statement and Smith's transcription both be true?",
            options: [
              "They may describe different manuscripts",
              "Because a vocal score and a piano-vocal score are two names for the same document",
              "Because the post was written from Smith's article and simply misread her sentence",
              "Because the office altered the deposit copy when the assignment was recorded",
            ],
            correctIndex: 0,
            explanation:
              "Smith distinguishes an earlier version from a second, later version prepared well after the collaboration had ended. Nobody here read the scores, so the course does not choose.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "How many later corrections naming her does lesson 7 list, and how many reached the card?",
            options: [
              "Three corrections, none of them reaching the card",
              "Three corrections, one of which reached the card at the time of the 1935 revival",
              "One correction, which reached the card but was entered under the wrong class",
              "Five corrections, matching the five name fields on the two sides of the card",
            ],
            correctIndex: 0,
            explanation:
              "A handwritten title-page addition, a memoir of 1967, and a line on the first page of a revised score. The card was filed in December 1912 and says what it said then.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 7 say the practical lesson of the course is NOT about?",
            options: [
              "Villainy",
              "Deadlines, since the three calendar months in section 44 are a technicality of the period",
              "Reach, since the size of a document's readership cannot be measured after the fact",
              "Registration, since the card was superseded when the copyright was assigned to a university",
            ],
            correctIndex: 0,
            explanation:
              "The corrections he could make were to the documents in front of him, and those had the smallest readership. The instrument with the reach was a form filled in twenty-odd years earlier.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 7 say about the window for changing the register?",
            options: [
              "It closed three months after the signature",
              "It stayed open until the original copyright term expired in the twenty-eighth year",
              "It closed when the deposit copy was withdrawn from the Library of Congress",
              "It reopened at each new production, since a revival required a fresh application",
            ],
            correctIndex: 0,
            explanation:
              "Section 44's three calendar months ran from execution of the assignment, and nobody filed it, so recording under section 46 was never available.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What is a deposit copy?",
            options: [
              "The copy sent to the office with an application",
              "The copy a producing company keeps for rehearsal, marked up by the music director",
              "The copy an assignee receives when an assignment is recorded under section 44",
              "The copy a library binds for readers, as distinct from the one kept in the vault",
            ],
            correctIndex: 0,
            explanation:
              "Its absence from a catalogue means the registration cannot be found, which is exactly what Smith reports about the numbers labelled with a copyright mark in the later score.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What is a piano-vocal score?",
            options: [
              "A performing score with the orchestra reduced for piano",
              "A full orchestral score, from which the piano part has deliberately been removed",
              "A libretto printed with the stage directions but without any music at all",
              "A summary of the vocal lines used by a producer to pitch a work to a theatre",
            ],
            correctIndex: 0,
            explanation:
              "It is the form of the 1912 deposit, which the application card describes as a vocal score of an opera in three acts.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Which institution does Hafen say Hanson later assigned the copyright to?",
            options: [
              "Brigham Young University",
              "The Library of Congress, which took it with the deposit copy of the vocal score",
              "The New York Light Opera Guild, which mounted the production of 1938",
              "The Society of American Indians, at his collaborator's request before her death",
            ],
            correctIndex: 0,
            explanation:
              "She states it in one sentence and gives no date or terms, which is why the course lists the transfer as an open question rather than describing it.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 7 say the difference is between a copyright line on a manuscript and a registration?",
            options: [
              "One asserts, the other records",
              "One is enforceable in court and the other is evidence only, under the 1909 Act",
              "One is written by the author and the other by a clerk, so the first is more reliable",
              "There is none, since the Act treats a notice on a work as a form of registration",
            ],
            correctIndex: 0,
            explanation:
              "The two can differ, and here they did: numbers labelled with a copyright mark whose deposit copies do not appear in the current Library of Congress catalog.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "In what year did Hanson publish the memoir that names her as a coauthor?",
            options: [
              "1967",
              "1938, in the programme for the production mounted in New York that year",
              "1935, to accompany the revival staged at Brigham Young University",
              "1913, immediately after the first production in Vernal, Utah, had closed",
            ],
            correctIndex: 0,
            explanation:
              "Hafen gives the year and Smith gives the title. The book itself was not read for this course, which is why nothing is quoted from it.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Who ran the New York producing body, according to Smith?",
            options: [
              "A man who had sung in the December 1914 production",
              "Hanson himself, who moved to New York in the year of the Broadway production",
              "The Brigham Young University music department, which had revived the work in 1935",
              "A committee of the Society of American Indians, which she had once been secretary of",
            ],
            correctIndex: 0,
            explanation:
              "The connection back to the early Utah productions is the detail worth keeping: the 1938 company was not a stranger to the work.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What date does the National Park Service give for her death in its quick facts?",
            options: [
              "26 January 1938",
              "26 January 1928, which is the date the same page gives in its body text",
              "22 February 1876, which the same page gives as the date she was born",
              "5 December 1921, the day she registered a book with the Copyright Office",
            ],
            correctIndex: 0,
            explanation:
              "The page contradicts itself between its quick facts and its body text, and lesson 9 explains which of the two the course follows and why.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 6 say a signed writing is, under section 42?",
            options: [
              "How a transfer is made",
              "A preliminary agreement, binding only once the office has entered it in the register",
              "Evidence of an intention to transfer, which a court alone can turn into a transfer",
              "A formality abolished by the 1909 Act, which allowed oral assignments for the first time",
            ],
            correctIndex: 0,
            explanation:
              "So the form of the 1913 instrument was right. What was left undone was the recording, which is a separate step with its own deadline.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does lesson 6 say the unrecorded assignment could not do?",
            options: [
              "Put her name in the statutory notice",
              "Give her any share of the opera, since an unrecorded paper conveys nothing at all",
              "Be proved at all, since only the Copyright Office kept copies of such instruments",
              "Be relied on by either party, since both had signed it on the same single sheet",
            ],
            correctIndex: 0,
            explanation:
              "Section 46 makes recording the condition of substituting an assignee's name in the notice, so the public line kept saying somebody else.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does lesson 6 say the record does NOT show?",
            options: [
              "An intention",
              "A filing, since the application card is a copy made by a clerk rather than the original",
              "A signature, since Smith describes the assignment without reproducing the page",
              "An omission, since nothing on the card indicates that anything was left undone",
            ],
            correctIndex: 0,
            explanation:
              "The record shows a filing, a signature and an omission. Reading a motive into that sequence is the move the lesson refuses.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What was the state of the register between 1912 and the later corrections?",
            options: [
              "Unchanged",
              "Amended twice, once at the 1935 revival and once at the New York production of 1938",
              "Closed, since the office stopped keeping Class D cards after the First World War",
              "Transferred to Brigham Young University along with the score and the Hanson papers",
            ],
            correctIndex: 0,
            explanation:
              "Three later corrections name her, and not one of them reaches the card, which says what it said on 12 December 1912.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Which instrument does lesson 7 say had the reach in this case?",
            options: [
              "The form filled in twenty-odd years earlier",
              "The memoir published in 1967, which named her and circulated as a printed book",
              "The handwritten line on the title page, which every later performer would have read",
              "The publicity for the New York production, which reached a national audience",
            ],
            correctIndex: 0,
            explanation:
              "The corrections he could make were to the documents in front of him, and those had the smallest readership. The one with reach was the registration.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 6 say about whether the assignment was a record of silence?",
            options: [
              "It was not",
              "It was, since an unrecorded instrument leaves no trace anyone can later consult",
              "It was, since neither party mentioned the opera in anything they published later",
              "The question cannot be asked, since the assignment's existence is itself disputed",
            ],
            correctIndex: 0,
            explanation:
              "At some point in 1913 he put his signature on an instrument giving her half and took it to a notary. Whatever else is true, that is not silence.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What would have happened if the assignment had been recorded in time?",
            options: [
              "The public record would have carried both names",
              "The registration would have been cancelled and a new application required from both",
              "The copyright would have been split into two separate entries, one for each owner",
              "The Copyright Office would have issued a corrected certificate naming her as author",
            ],
            correctIndex: 0,
            explanation:
              "Three calendar months and one filing. Section 46 would then have allowed her name into the statutory notice, and the register would have shown the transfer.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does the Library of Congress post say Hanson included only his name in?",
            options: [
              "The title page and the registration",
              "The 1938 programme and the publicity sent out with it before the production opened",
              "The memoir and the revised score, both of which he prepared late in his life",
              "The assignment, which is why the office refused to record it when it arrived",
            ],
            correctIndex: 0,
            explanation:
              "Its sentence names two instruments at once, which is why the post is cited beside Hafen rather than instead of her.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What is sole proprietorship, in the sense Hafen uses it?",
            options: [
              "A claim to be the only holder of the copyright",
              "A claim to have written the work without any assistance from any other person",
              "A form of registration available only for compositions not reproduced for sale",
              "The status of an applicant who files without a publisher standing behind them",
            ],
            correctIndex: 0,
            explanation:
              "It is a claim about ownership, which is a different claim from authorship, and keeping those apart is what Section 1 was for.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "How long is the gap between the registration and the 1935 revival?",
            options: [
              "About twenty-two years",
              "About ten years, which is why the newspapers had stopped covering the work by then",
              "About thirty-five years, which puts the revival after the collaborator's death",
              "About five years, since the revival followed the Brigham Young University runs",
            ],
            correctIndex: 0,
            explanation:
              "December 1912 to 1935. Smith marks the revival as the end of the period in which the surviving newspaper stories fully acknowledged her role.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does lesson 6 say about the form of the 1913 instrument?",
            options: [
              "It was the right form",
              "It was the wrong form, since section 42 required a recorded deed rather than a writing",
              "It was the wrong form, since an opera had to be assigned in the class it was filed in",
              "Its form is unknown, since Smith describes the contents without describing the paper",
            ],
            correctIndex: 0,
            explanation:
              "Section 42 asks for an instrument in writing signed by the proprietor, and a signed, notarized paper is that. The defect was in what happened next, not in the paper.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What do the two owners of an undivided interest each hold?",
            options: [
              "A share in the whole thing",
              "A named part of the thing, agreed between them at the time the share was conveyed",
              "A right to be consulted, without any right to a share of what the thing earns",
              "A right that lapses unless it is recorded within three calendar months of the grant",
            ],
            correctIndex: 0,
            explanation:
              "The house analogy in the lesson: two people own one house without either owning a particular room, which is why the paper settles nothing about authorship.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Why does lesson 7 state the timing of her death and the New York production without comment?",
            options: [
              "Because the record shows the sequence and not a reason for it",
              "Because the exact date of her death is disputed between the two scholars cited",
              "Because the production was cancelled, so the sequence had no practical effect",
              "Because the National Park Service is the only source for either of the two dates",
            ],
            correctIndex: 0,
            explanation:
              "Hafen gives the sequence in a phrase. The course follows the rule from lesson 6: say what the record shows, not a motive it does not.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What does a memoir prove, in the terms lesson 7 uses?",
            options: [
              "What its author said afterwards",
              "What the documents recorded at the time, since a memoirist writes from his own papers",
              "Nothing at all, since a first-person account is never admissible as evidence",
              "The legal ownership of the work, since a published claim operates as a notice",
            ],
            correctIndex: 0,
            explanation:
              "Hanson's 1967 memoir names her as coauthor and collaborator. That is evidence about 1967, and the card is still evidence about 1912.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Which two versions of the score does Smith distinguish?",
            options: [
              "An earlier one and a second, later one",
              "A vocal score and a libretto, prepared by the two collaborators separately",
              "A Utah version and a New York version, with different acts in each",
              "A handwritten one and a printed one, published in Provo in the 1930s",
            ],
            correctIndex: 0,
            explanation:
              "She says the second was prepared well after the collaboration had ended, which is how the post and her transcription can both be accurate about different manuscripts.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Why does lesson 7 print both statements about the scores instead of choosing one?",
            options: [
              "Nobody here read the scores",
              "Because the two statements are about the same manuscript and cannot both be true",
              "Because the Library of Congress post is a blog and therefore outranked by an article",
              "Because Brigham Young University has restricted access to the Hanson papers",
            ],
            correctIndex: 0,
            explanation:
              "The course prints both, attributes each and files the question, which is the same discipline it applies to the assignment and to the registration number.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "In which month and year was the assignment signed, as closely as the sources allow?",
            options: [
              "About March 1913",
              "December 1912, on the same day the vocal score was deposited with the office",
              "February 1913, on the opening night of the first production in Vernal, Utah",
              "The sources give an exact day, which the course prints in its opening lesson",
            ],
            correctIndex: 0,
            explanation:
              "Smith says about a month after the first production, and the first production was February 1913. No source read here gives an exact day, so the course does not print one.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does lesson 6 say is the difference at stake in the whole case?",
            options: [
              "Between a private paper and a public register",
              "Between a composer and a librettist, which the register had no way of recording",
              "Between an author and an illustrator, which the 1901 card records in two places",
              "Between a first production and a revival, which changed who the owner was",
            ],
            correctIndex: 0,
            explanation:
              "A right can be real and invisible at the same time. Recording is what buys visibility, and the recording never happened.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — What this course will not say
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "one-mans-1913-account",
      title: "8 · One man's 1913 account, and the evidence against it",
      section: "Section 4 · What this course will not say",
      body: `There is a detailed contemporary account of what she contributed. It is the most quoted thing about this collaboration, it is usually passed on without a name attached, and the scholar who reprints it says other evidence contradicts it. Both halves of that sentence belong in the lesson.

**The account.** In 1913 N. L. Nelson reviewed the opera for a Utah newspaper. Smith reprints his description of her part in the work: that she "furnished the missing links", "revised his poems", "criticized his music", "furnished all the ideas" for the costumes, and "trained the dancers and singers" (Smith, 2001). The Library of Congress post quotes the same review for her statement of purpose, that she regarded it as "her mission to bring about a more sympathetic understanding between her people and their white neighbors" (Chen, 2021).

**What Smith writes immediately afterwards.** "Several pieces of evidence tend to contradict Nelson's story about their collaboration" (Smith, 2001). She then gives them.

- "Hanson is usually listed as the 'composer' and Zitkala-Sa as 'collaborator.' All of the music is written in one hand, undoubtedly his" (Smith, 2001).
- The first version of the opera "includes little in the way of 'native' melody". The native melodies turn up in "the second, later version, prepared well after the collaboration had ended" (Smith, 2001). If her contribution had been the melodies, one would expect to find them in the version made while she was there.

**What Hafen describes, which is not the same thing as Nelson's account.** "Gertrude played the Native melodies on the violin while Hanson wrote them and orchestrated them", and "The melodies she played on her violin were traditional Sioux songs" (Hafen, 1998). Read that carefully, because it contains a second complication the popular story drops. The melodies were traditional, which means they were neither of theirs, and a course about individual credit has to say so rather than quietly promoting communal material into one person's authorship.

**And the silence that makes all of it hard.** Smith: "Entirely absent is any word whatever about *The Sun Dance Opera* or her contribution to it in Zitkala-Sa's published work or her papers" (Smith, 2001). Hafen: "A challenge in studying the opera is the lack of Gertrude's own voice while William F. Hanson's participation is well documented" (Hafen, 1998). Hafen also offers a possible reason for her not contesting his later self-representation, and she offers it with the word "perhaps" in front of it, so it stays a suggestion here too.

**The rule this lesson is really teaching.** An account belongs to the person who gave it. Nelson's account is Nelson's, made in a newspaper, ten months into the work's public life, by a reviewer with no obvious way of knowing what happened in a room he was not in. That does not make it false. It makes it one man's testimony, and the honest way to pass it on is with his name attached and the counter-evidence beside it. A retelling that drops the name turns a review into a fact, and a fact is much harder to argue with than a review.

**Notice what this does and does not cost.** Attributing Nelson's account does not take anything away from her. The register is still wrong by omission, the press still named her from the first night, and the assignment still conveyed half. The credit case does not rest on Nelson, which is exactly why it can afford to be honest about him.

:::reveal Who wrote the detailed 1913 account of her contribution, and where? ||| N. L. Nelson, in a review of the opera published in a Utah newspaper that same year.

:::reveal What is Smith's sentence about that account? ||| That several pieces of evidence tend to contradict Nelson's story about their collaboration, after which she gives them.

:::reveal Why does Hafen's description of the melodies complicate a claim of individual authorship? ||| Because the melodies she played were traditional Sioux songs, so they were communal material rather than either collaborator's own composition.

## Vocabulary
- **Attribution**: naming the person an account comes from, so that a reader can weigh the account against who gave it and when.
- **Counter-evidence**: what tells against a claim, which an honest retelling prints beside the claim rather than after it or not at all.
- **Communal material**: work belonging to a community rather than to an individual, such as traditional songs, which an individual authorship claim cannot absorb.
- **Testimony**: one person's report of what happened, which is evidence of what they said and only sometimes evidence of what occurred.

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "the-shares-are-not-in-the-documents",
      title: "9 · The shares are not in the documents",
      section: "Section 4 · What this course will not say",
      body: `Here is the rule, and the table that proves it. Every document in this course establishes something. Not one of them establishes a share.

| Document | What it establishes | What it does not settle |
|---|---|---|
| The 1912 registration card | That Hanson deposited a vocal score on 12 December 1912 and wrote his own name in every name field on the form | Who wrote what |
| The 1913 press | That the public was told from the premiere onward that the opera had two authors | What either of them contributed |
| The assignment, as Smith describes it | That about a month after the premiere he signed a notarized paper conveying an undivided half interest | That anyone had agreed how the work divided |
| The 1935 and 1938 claims | What he told a university, a producing company and an audience later | What had been agreed in 1913 |
| The handwritten line and the 1967 memoir | That he named her afterwards | How much of the opera was hers |

**Read the right-hand column as one sentence.** A document can settle who filed, who signed, who was named, and when. It cannot settle who wrote which bar of music, and stacking five documents that each fail to settle it does not produce an answer. That is the rule this course keeps, and it was set before a word of the course was written: build it, and do not assert authorship shares.

**Now the exhibit, because the rule is easier to keep when you have seen what breaking it looks like.** The National Park Service page about her asserts that she "wrote the libretto and songs" (NPS, 2022). That is a share. It is stated flatly, on a federal agency's website, with no source given on the page and no hedge. No source read for this course supports it. Smith says the music is in one hand and it is his. Hafen says the melodies were traditional Sioux songs that she played and he wrote down and orchestrated. Those two descriptions are not the same as each other, and neither is the same as "wrote the libretto and songs".

**And the same page has two more problems, which is the reason to bring it up at all.**

1. **It contradicts itself about her death.** Its quick facts give 26 January 1938. Its body text says "Until her death on January 26, 1928". Both cannot be right. Hafen and the Library of Congress both put her death in 1938, and the New York production that came "just months after" it was mounted in 1938, so 1938 is the date this course uses.
2. **It attributes a three-author report to her alone.** *Oklahoma's Poor Rich Indians* was published in 1924. The Open Library record for it lists three authors, Zitkála-Šá, Charles H. Fabens and Matthew K. Sniffen, two of them marked as joint authors. A page that gives one name for a work with three is making the same class of error this whole course is about, in the opposite direction.

**The lesson is not that the National Park Service is unreliable.** It is that a record with one loose claim in it usually has more than one, and that the only way to find out is to check the specific sentence you are about to repeat. The rule generalises: do not cite a page, cite a sentence, and check that sentence against something that was in a position to know.

*Who Made the Record*, lesson 9, is the catalog's other treatment of this problem, where an archive's own record of an acquisition gives three different years in three published accounts.

**What the refusal is for.** Declining to state a share is not modesty and it is not fence-sitting. A share stated without evidence is the thing that gets quoted next, and once it is quoted it is very hard to withdraw, because the correction is always less interesting than the claim. The strongest thing that can be said here is also the truest: the register recorded one name for a work the press credited to two, a signed paper conveying half was never recorded, and nobody has produced a document that divides the writing. Each of those is checkable. A percentage would not be.

:::reveal In one sentence, what can a document settle and what can it not? ||| It can settle who filed, who signed, who was named and when, and it cannot settle who wrote which part of the work.

:::reveal What are the three problems lesson 9 identifies on one federal agency page? ||| It asserts an authorship share no source read here supports, it contradicts itself about the year she died, and it attributes a report with three authors to her alone.

:::reveal Why is declining to state a share not the same as fence-sitting? ||| Because a share stated without evidence is what gets quoted next and is very hard to withdraw, while every claim the course does make can be checked against a document.

## Vocabulary
- **Authorship share**: a statement of how much of a joint work each collaborator made, which no document in this course establishes.
- **Exhibit**: a source shown in order to examine how it went wrong, rather than cited for what it says.
- **Cite a sentence, not a page**: the habit of checking the specific claim you are about to repeat, rather than treating a whole site as reliable or unreliable.
- **Self-contradiction**: a single source giving two incompatible answers to the same question, which is a reason to check it against something else rather than to pick the nearer one.

## Sources
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
National Park Service. (2022, September 1). *Zitkala-Ša (Red Bird / Gertrude Simmons Bonnin)*. https://www.nps.gov/people/zitkala-sa.htm
Open Library. (n.d.). *Oklahoma's poor rich Indians* [Work record OL45466908W]. https://openlibrary.org/works/OL45466908W
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "what-a-correction-can-reach",
      title: "10 · What a correction can reach",
      section: "Section 4 · What this course will not say",
      body: `Five instruments, one work. Put them in order of reach, and the shape of the whole case appears in a single column.

| Instrument | Reach | Still correctable? |
|---|---|---|
| The registration card | Any institution or researcher who searches the register | No. It is a closed historical record of what was filed in 1912 |
| The title page | Everyone who holds a copy of that score | Only on the copies that still exist |
| The 1913 press | Large at the time, almost nobody since | No, and it has already faded |
| The unrecorded assignment | Two people | It was correctable for three calendar months in 1913 |
| A handwritten line on a manuscript | Whoever opens that box | It has already been written, and it reached one reader at a time |

**The one that had reach was the one nobody could change afterwards.** That is not a coincidence. An instrument has reach precisely because it is fixed, indexed and consulted by people who were not there, and the same properties that give it reach are what make it hard to amend. The 1909 Act offered exactly one route from the private paper to the public record, and it was a three-month window, an assignment filed, and a name allowed into the notice under section 46. That route was open in 1913 and was not taken.

**So what can a correction reach now?** Not the card. The card is a historical document and the honest thing to do with it is read it accurately, which is what Section 2 asked you to do. What a correction can reach is everything downstream: the pages that describe the work, the catalogues, the programme notes, the encyclopaedia entries, and the federal agency page in lesson 9. Those are live documents, and the accuracy of a live document is a thing anybody can work on.

**Which is why the Library of Congress post of 2021 matters more than it looks.** It is a blog post from the Copyright Office, and what it does is put the card images where a member of the public can open them (Chen, 2021). Everything this course was able to check for itself, it checked because of that. A correction that hands people the primary document does more than a correction that hands them a better sentence, because the next person does not have to trust either of us.

**What is still unread, stated plainly rather than rounded off.** The assignment itself, which is known only through Smith's description. Hanson's later transfer of copyright to Brigham Young University, which Hafen states in one clause with no date or terms. Whether the 1912 copyright was ever renewed in its twenty-eighth year, and by whom. Which of the scores at Brigham Young University carries her name. The printed page of the *El Paso Herald*, as distinct from the machine transcription lesson 5 quoted. The registration number on the 1912 card. Every one of those is a question with a place to look, and each is filed as an open check rather than smoothed into a sentence.

**The last rule, and it is the transferable one.** The correction you can make is to the record you can reach, and the first move is always the same: say precisely what each existing record does and does not say. That is duller than a verdict and it survives longer. *Written by Himself*, lesson 1, makes the same point from the other end, treating the byline as a contract term rather than a compliment, and *Who Signs the Print*, lesson 21, gives the three-condition test for spotting the shape elsewhere. If you want the catalog's other early stage work by a woman of colour, with the same discipline applied to what was actually staged, *Shirley Graham* lesson 3 is the place.

:::reveal Why is the instrument with the most reach usually the hardest to correct? ||| Because reach comes from being fixed, indexed and consulted by people who were not there, and those are the same properties that make a record hard to amend.

:::reveal What was the single route the 1909 Act offered from the private paper to the public record? ||| Recording the assignment within three calendar months under section 44, which then allowed the assignee's name into the statutory notice under section 46.

:::reveal What does lesson 10 say a correction that hands people the primary document does better than a correction that hands them a better sentence? ||| It lets the next person check for themselves instead of having to trust either the original account or the correction.

## Vocabulary
- **Downstream document**: a later description of a work, such as a catalogue entry or an agency page, which is live and therefore correctable.
- **Closed record**: a historical document such as a filed registration card, which can be read accurately but not amended.
- **Open check**: a question the course could not answer, written down with what would settle it and where to look, rather than left out.
- **Primary document**: the record made at the time by someone in a position to know, which is what a good correction puts in the reader's hands.

## Sources
Chen, N. M. (2021, March 31). *Zitkála-Šá: On creativity, copyright, and cultural empowerment* [Blog post]. Library of Congress, Copyright Office. https://blogs.loc.gov/copyright/2021/03/zitkla-on-creativity-copyright-and-cultural-empowerment/
Copyright Act of 1909, §§ 44, 46 [Full text]. U.S. Copyright Office. https://www.copyright.gov/history/1909act.pdf
Hafen, P. J. (1998). A cultural duet: Zitkala Ša and *The Sun Dance Opera*. *Great Plains Quarterly*, *18*(2), 102-111. https://digitalcommons.unl.edu/greatplainsquarterly/2028/
Smith, C. P. (2001). An operatic skeleton on the western frontier: Zitkala-Sa, William F. Hanson, and *The Sun Dance Opera*. *Women & Music*, *5*.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · What this course will not say",
      section: "Section 4 · What this course will not say",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who gave the detailed 1913 account of what she contributed?",
            options: [
              "N. L. Nelson",
              "Catherine Parsons Smith, who reprints the account in her article of 2001",
              "William F. Hanson, in the memoir he published toward the end of his life",
              "P. Jane Hafen, whose 1998 article is the fullest study of the collaboration",
            ],
            correctIndex: 0,
            explanation:
              "Nelson reviewed the opera for a Utah newspaper in 1913. Smith reprints his description, and the Library of Congress post quotes the same review for a different sentence.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "Which of these does Nelson's account say she did?",
            options: [
              "Trained the dancers and singers",
              "Deposited the vocal score with the Copyright Office two months before the premiere",
              "Signed and notarized an instrument conveying an undivided half interest in the work",
              "Assigned the copyright in the work to a university in the state where she lived",
            ],
            correctIndex: 0,
            explanation:
              "His list also includes furnishing the missing links, revising his poems, criticizing his music and furnishing all the ideas for the costumes.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Smith write immediately after reprinting Nelson's account?",
            options: [
              "That several pieces of evidence contradict it",
              "That the account is the most reliable contemporary description of the collaboration",
              "That Nelson had been present at every rehearsal and could speak from observation",
              "That the account was written by the other collaborator under an assumed name",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence is that several pieces of evidence tend to contradict Nelson's story about their collaboration, and she then gives them.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Smith say about the handwriting of the music?",
            options: [
              "It is all in one hand, undoubtedly his",
              "It alternates between two hands, which is what a joint composition would look like",
              "It is in a copyist's hand throughout, so neither collaborator can be identified from it",
              "It is in her hand for the melodies and in his for the orchestration around them",
            ],
            correctIndex: 0,
            explanation:
              "She gives it as one of the pieces of evidence tending against Nelson's account, alongside the usual listing of him as composer and her as collaborator.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "Where does Smith say the native melodies appear?",
            options: [
              "In the second, later version",
              "In the first version, prepared during the months the two were working together",
              "In the 1912 deposit copy, which is the only score the Library of Congress holds",
              "In the New York production of 1938, which added them for a Broadway audience",
            ],
            correctIndex: 0,
            explanation:
              "Prepared well after the collaboration had ended. If her contribution had been the melodies, one would expect them in the version made while she was there.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Hafen say about the melodies she played on the violin?",
            options: [
              "They were traditional Sioux songs",
              "They were her own compositions, which he then wrote down and orchestrated for her",
              "They were adapted from published collections of Native music available at the time",
              "They were improvised at rehearsals and never written down in any surviving score",
            ],
            correctIndex: 0,
            explanation:
              "Which means they were neither collaborator's property, and a course about individual credit has to say so rather than promoting communal material into one person's authorship.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Hafen say Hanson did with the melodies she played?",
            options: [
              "Wrote them down and orchestrated them",
              "Rejected them, which is why the first version contains little native melody at all",
              "Registered them separately as musical compositions in the class the Act reserved for music",
              "Published them under her name in a collection issued in Utah before the premiere",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence is that Gertrude played the Native melodies on the violin while Hanson wrote them and orchestrated them, which describes a division of labour and not a division of authorship.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Smith say is entirely absent from her published work and her papers?",
            options: [
              "Any word about the opera",
              "Any mention of the Copyright Office, which she nonetheless used twice for her books",
              "Any reference to Utah, where she was living at the time of the first production",
              "Any account of the melodies, which are described only in the later scholarship",
            ],
            correctIndex: 0,
            explanation:
              "Entirely absent is any word whatever about the opera or her contribution to it. Hafen describes the same gap as a lack of Gertrude's own voice.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "How does Hafen phrase her suggestion about why she did not contest his later self-representation?",
            options: [
              "With the word perhaps",
              "As a finding supported by correspondence in the Hanson papers at the university",
              "As a quotation from a letter she wrote to the Society of American Indians",
              "As a certainty, which is why the course repeats it as the settled explanation",
            ],
            correctIndex: 0,
            explanation:
              "It stays a suggestion in the lesson for the same reason Smith's speculation about the belated assignment does: the writer labelled it, and the course keeps the label.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What is the rule lesson 8 says it is really teaching?",
            options: [
              "An account belongs to the person who gave it",
              "A contemporary account always outweighs a later scholarly reconstruction of events",
              "A review written by a stranger should never be quoted in a course about credit",
              "An account with no counter-evidence beside it can be treated as established fact",
            ],
            correctIndex: 0,
            explanation:
              "The honest way to pass on Nelson's account is with his name attached and the counter-evidence beside it. A retelling that drops the name turns a review into a fact.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "Why does lesson 8 say the credit case can afford to be honest about Nelson?",
            options: [
              "The case does not rest on him",
              "Because Smith has proved his account false in every particular it contains",
              "Because a newspaper review has no evidential weight in a question about copyright",
              "Because he wrote anonymously, so the account cannot be attributed to anyone at all",
            ],
            correctIndex: 0,
            explanation:
              "The register is still wrong by omission, the press still named her from the first night, and the assignment still conveyed half. None of that depends on Nelson.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does the Library of Congress post quote the Nelson review for?",
            options: [
              "Her statement of her mission",
              "His list of the tasks she performed, which the post reprints in full from Smith",
              "The name of the hall in Vernal where the opera was first produced in 1913",
              "The date of the copyright filing, which the post gives in the same paragraph",
            ],
            correctIndex: 0,
            explanation:
              "That she regarded it as her mission to bring about a more sympathetic understanding between her people and their white neighbors.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does lesson 8 call the thing a retelling does when it drops the name of the person who gave an account?",
            options: [
              "Turns a review into a fact",
              "Improves the account, since the reader is no longer distracted by an unfamiliar name",
              "Invalidates the account, since an unattributed claim carries no weight at all",
              "Converts the account into hearsay, which a careful reader will discount entirely",
            ],
            correctIndex: 0,
            explanation:
              "And a fact is much harder to argue with than a review, which is why the omission of a name does real damage to a record.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What word does the course use for work belonging to a community rather than an individual?",
            options: [
              "Communal material",
              "Public domain material, meaning anything whose copyright term has already expired",
              "Unclaimed work, meaning anything for which no registration was ever filed",
              "Folk arrangement, meaning any traditional tune once it has been written down",
            ],
            correctIndex: 0,
            explanation:
              "Traditional Sioux songs are the example in lesson 8, and the point is that an individual authorship claim cannot absorb them.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "In what year and for what kind of publication did Nelson write?",
            options: [
              "1913, a Utah newspaper",
              "1938, a New York theatre programme issued for the Broadway production",
              "1967, a memoir published long after both collaborators had stopped working together",
              "2001, a scholarly journal devoted to women and music in the United States",
            ],
            correctIndex: 0,
            explanation:
              "Ten months into the work's public life, by a reviewer with no obvious way of knowing what happened in a room he was not in.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "Does lesson 8 say Nelson's account is false?",
            options: [
              "No, it says it is one man's testimony",
              "Yes, it says Smith has shown every element of it to be untrue",
              "Yes, it says the handwriting evidence alone disproves the whole account",
              "It says the question cannot be raised, because the review itself is lost",
            ],
            correctIndex: 0,
            explanation:
              "The counter-evidence tends against it, in Smith's own careful phrasing. The lesson asks for attribution rather than for a verdict.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "According to lesson 9, what does the 1912 registration card establish?",
            options: [
              "Who deposited a score, and when",
              "Who wrote the music, since the author field is a statement of authorship under oath",
              "That the collaboration had ended before the score was deposited in December",
              "That the Copyright Office had examined and accepted a claim of sole authorship",
            ],
            correctIndex: 0,
            explanation:
              "That Hanson deposited a vocal score on 12 December 1912 and wrote his own name in every name field. What it does not settle is who wrote what.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "According to lesson 9, what does the 1913 press establish?",
            options: [
              "What the public was told",
              "What each collaborator contributed, since the reviewers had attended the rehearsals",
              "That the register was known to be wrong at the time and was left uncorrected",
              "That an assignment of half the work had already been signed before the premiere",
            ],
            correctIndex: 0,
            explanation:
              "That the public was told from the premiere onward that the opera had two authors. What either of them contributed is a separate question the press does not answer.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 say the assignment does not settle?",
            options: [
              "That anyone had agreed how the work divided",
              "That a paper conveying an undivided half interest was signed about a month after the premiere",
              "That the instrument was notarized in a Utah county rather than in Washington",
              "That the instrument was never recorded with the Copyright Office afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Those three are what it does establish, in Smith's description. A conveyance of property says nothing about how the writing divided.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Read as one sentence, what does the right-hand column of the lesson 9 table say?",
            options: [
              "No document settles who wrote which bar",
              "Every document settles something about authorship if it is read carefully enough",
              "The later documents settle what the earlier ones left open, in sequence",
              "The documents agree with one another and disagree only with the popular story",
            ],
            correctIndex: 0,
            explanation:
              "Stacking five documents that each fail to settle it does not produce an answer, which is the rule the whole course keeps.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does the National Park Service page assert that no source read for this course supports?",
            options: [
              "That she wrote the libretto and songs",
              "That she was born on the Yankton Indian Reservation on 22 February 1876",
              "That she was secretary for the Society of American Indians beginning in 1916",
              "That she and her husband founded the National Council of American Indians in 1926",
            ],
            correctIndex: 0,
            explanation:
              "It is a share, stated flatly, with no source on the page and no hedge. Smith and Hafen describe the work differently from each other and neither says this.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "How does the same federal page contradict itself?",
            options: [
              "Its quick facts and its body text give different death years",
              "Its quick facts and its body text give different birthplaces for the same person",
              "It names two different collaborators for the opera in two different paragraphs",
              "It gives two different years for the founding of the National Council of American Indians",
            ],
            correctIndex: 0,
            explanation:
              "The quick facts give 26 January 1938 and the body text says her death was on 26 January 1928. Both cannot be right.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Which death year does this course use, and on what basis?",
            options: [
              "1938, because Hafen and the Library of Congress agree",
              "1928, because a page's body text is written with more care than its summary box",
              "Neither, because the course treats the date as an open question throughout",
              "1938, because the registration card for the opera records it in the renewal line",
            ],
            correctIndex: 0,
            explanation:
              "And because the New York production that came just months after her death was mounted in 1938, which the 1928 reading would make impossible.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "How many authors does the Open Library record give for Oklahoma's Poor Rich Indians?",
            options: [
              "Three",
              "One, which is the number the National Park Service page also gives for the report",
              "Two, being the author and the attorney who investigated the cases with her",
              "Four, of whom two are marked as joint authors and two as contributing editors",
            ],
            correctIndex: 0,
            explanation:
              "Zitkála-Šá, Charles H. Fabens and Matthew K. Sniffen, two of them marked as joint authors. A page giving one name for a work with three makes the same class of error in the opposite direction.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "In what year was Oklahoma's Poor Rich Indians published?",
            options: [
              "1924",
              "1921, the same year she registered a book of her own with the Copyright Office",
              "1929, the year she filed a renewal application for her first book",
              "1938, in the last months of her life and just before the New York production",
            ],
            correctIndex: 0,
            explanation:
              "The report is context in this course rather than its subject, and it appears only because a record about it is being checked.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 say the point of raising the federal page is NOT?",
            options: [
              "That the agency is unreliable",
              "That a record with one loose claim in it usually has more than one loose claim",
              "That the only way to find out is to check the sentence you are about to repeat",
              "That a share stated without evidence is the thing that gets quoted next",
            ],
            correctIndex: 0,
            explanation:
              "Those three are the lesson. The conclusion drawn is a habit rather than a verdict about a publisher.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What habit does lesson 9 recommend in place of trusting or distrusting a whole site?",
            options: [
              "Cite a sentence, not a page",
              "Prefer government pages, since an agency has a duty of accuracy a blog does not",
              "Prefer the most recent version of a page, since errors are corrected over time",
              "Prefer the source with the most citations, since checking is a collective activity",
            ],
            correctIndex: 0,
            explanation:
              "And check that sentence against something that was in a position to know, which is the same test the course applied to Nelson and to the Copyright Office cards.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Which lesson elsewhere in the catalog does lesson 9 name as the other treatment of this problem?",
            options: [
              "Who Made the Record, lesson 9",
              "Who Owns the Steps, lesson 2, on how thin a deposit record could be under the Act",
              "Who Gets the Credit, lesson 9, on the clause that moves a patent to an employer",
              "Who Signs the Print, lesson 21, on the three conditions of a relocated credit",
            ],
            correctIndex: 0,
            explanation:
              "There an archive's own record of an acquisition gives three different years in three published accounts, which is a record disagreeing with itself in the same way.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Why does lesson 9 say declining to state a share is not modesty?",
            options: [
              "Because an unevidenced share is what gets quoted next",
              "Because modesty would require leaving out the registration card as well",
              "Because the course states a share elsewhere, in its treatment of the melodies",
              "Because a share can be estimated from the number of documents naming each person",
            ],
            correctIndex: 0,
            explanation:
              "Once quoted it is very hard to withdraw, because the correction is always less interesting than the claim.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 say is the strongest thing that can be said about this case?",
            options: [
              "One name, an unrecorded paper, no divider",
              "That the register was falsified, which is why the press and the card disagree",
              "That the collaboration was equal, which is what an undivided half interest implies",
              "That the melodies were hers and the orchestration his, which both scholars agree on",
            ],
            correctIndex: 0,
            explanation:
              "Each of those is checkable against a document. A percentage would not be, which is the whole reason for the refusal.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "When was the rule against asserting authorship shares set, according to lesson 9?",
            options: [
              "Before a word of the course was written",
              "After the four cards were read, once it became clear that the register named one person",
              "By the 1909 Act, which forbids an applicant from stating a share on an application form",
              "By the Library of Congress, as a condition of publishing the card images online",
            ],
            correctIndex: 0,
            explanation:
              "The subject was accepted on the condition that the course build the case and decline to divide the writing, which is why lesson 9 exists at all.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 mean by an exhibit?",
            options: [
              "A source shown in order to examine how it went wrong",
              "A document reproduced in full so that a learner can read every field on it",
              "A display of related works mounted by a library alongside a digitised collection",
              "A piece of evidence filed with a court in support of a claim about authorship",
            ],
            correctIndex: 0,
            explanation:
              "Rather than cited for what it says. The federal agency page is the exhibit in lesson 9, and the rule is easier to keep once you have seen what breaking it looks like.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "In the lesson 10 table, which instrument has the largest reach?",
            options: [
              "The registration card",
              "The 1913 press, which reached readers in several states within months of the premiere",
              "The title page, which everyone holding a copy of the score can read for themselves",
              "The handwritten line, since a manuscript in a university archive is permanently kept",
            ],
            correctIndex: 0,
            explanation:
              "Any institution or researcher who searches the register. The press was large at the time and has reached almost nobody since.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In the lesson 10 table, how many people did the unrecorded assignment reach?",
            options: [
              "Two",
              "Everyone who bought a copy of the score after the assignment had been signed",
              "Anyone searching the Copyright Office records after the three months had elapsed",
              "Nobody, since a notarized instrument is sealed until a court orders it opened",
            ],
            correctIndex: 0,
            explanation:
              "The two people who signed it, and it was correctable for three calendar months in 1913 and not afterwards.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Why does lesson 10 say it is no coincidence that the far-reaching instrument is the hardest to change?",
            options: [
              "Reach comes from being fixed, indexed and consulted",
              "Because governments deliberately make their records difficult to amend after filing",
              "Because the 1909 Act provided no procedure for correcting any registration at all",
              "Because a widely read document is copied so often that no correction can catch up",
            ],
            correctIndex: 0,
            explanation:
              "The same properties that give a record reach are what make it hard to amend, and the Act offered exactly one route from the private paper to the public record.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What was that one route, in lesson 10's summary?",
            options: [
              "A three-month window, a filing, and a name in the notice",
              "A second application in the same class, naming both collaborators as joint authors",
              "A renewal in the twenty-eighth year, which either party could have claimed as author",
              "A court order compelling the Copyright Office to amend the entry it had made",
            ],
            correctIndex: 0,
            explanation:
              "Sections 44 and 46 together. The route was open in 1913 and was not taken.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 10 say a correction can reach now?",
            options: [
              "Everything downstream of the card",
              "The card itself, which the Copyright Office will amend on request from a researcher",
              "Nothing, since every instrument in the case is now a closed historical record",
              "Only the scores at Brigham Young University, which are still being catalogued",
            ],
            correctIndex: 0,
            explanation:
              "Catalogues, programme notes, encyclopaedia entries and agency pages are live documents, and the accuracy of a live document is a thing anybody can work on.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 10 say the honest thing to do with the card is?",
            options: [
              "Read it accurately",
              "Annotate it in the digital collection so that later readers see the correction first",
              "Set it aside, since a document that omits a collaborator cannot be used fairly",
              "Reproduce it only alongside the newspaper coverage that contradicts it",
            ],
            correctIndex: 0,
            explanation:
              "It is a historical document. Reading it accurately is what Section 2 asked a learner to do, and it is the part of the work that does not depend on anyone's permission.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Why does lesson 10 say the 2021 Library of Congress post matters more than it looks?",
            options: [
              "It put the card images where the public can open them",
              "It is the first time a federal agency acknowledged that the register was wrong",
              "It corrects the National Park Service page's claim about the libretto and the songs",
              "It reproduces the assignment, which is otherwise known only through Smith",
            ],
            correctIndex: 0,
            explanation:
              "Everything this course checked for itself, it checked because of that post. A correction that hands people the primary document does more than one that hands them a better sentence.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which of these does lesson 10 list as still unread?",
            options: [
              "The assignment itself",
              "The four registration cards, which are described in the scholarship but not online",
              "Hafen's article, which is paywalled and known only through its abstract",
              "The Copyright Act of 1909, whose text has not been published since its repeal",
            ],
            correctIndex: 0,
            explanation:
              "The list also includes the transfer to Brigham Young University, whether the 1912 copyright was renewed, which score carries her name, the printed newspaper page, and the registration number.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 10 do with each unread item instead of smoothing it into a sentence?",
            options: [
              "Files it as an open check",
              "Marks it as unknowable, since the documents concerned were destroyed or dispersed",
              "Refers the reader to the scholarship, which answers each of them in a footnote",
              "Leaves it out entirely, so that the course asserts nothing it cannot demonstrate",
            ],
            correctIndex: 0,
            explanation:
              "An open check is a question written down with what would settle it and where to look, so somebody can close it rather than rediscover it.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the transferable rule lesson 10 ends on?",
            options: [
              "Say precisely what each record does and does not say",
              "Prefer the earliest instrument, since later ones are shaped by what people want to be true",
              "Correct the loudest document first, because volume is what changes public belief",
              "Withhold a judgment until every open check on a subject has been closed",
            ],
            correctIndex: 0,
            explanation:
              "Duller than a verdict and it survives longer. The correction you can make is to the record you can reach.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which lesson does lesson 10 name for the byline treated as a contract term?",
            options: [
              "Written by Himself, lesson 1",
              "Who Signs the Print, lesson 21, which gives the three-condition test for a relocated credit",
              "Shirley Graham, lesson 3, on what was actually staged in Cleveland in June 1932",
              "Who Made the Record, lesson 9, on a record that disagrees with its own record",
            ],
            correctIndex: 0,
            explanation:
              "It makes the same point from the other end, treating the byline as a term that is negotiated rather than a compliment that is paid.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which course does lesson 10 suggest for the catalog's other early stage work by a woman of colour?",
            options: [
              "Shirley Graham",
              "Who Owns the Steps, which follows four Black choreographers through an archive's boxes",
              "Who Made the Record, which follows a photograph's credit line and its custody",
              "Who Gets the Credit, which follows an invention from a laboratory to an employer",
            ],
            correctIndex: 0,
            explanation:
              "Its third lesson applies the same discipline to what was actually staged in Cleveland on 30 June 1932.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In the lesson 10 table, is the title page still correctable?",
            options: [
              "Only on the copies that still exist",
              "Yes, because a publisher can reissue a title page at any time after first publication",
              "No, because a title page is fixed at the moment the work is deposited for copyright",
              "Yes, because the university holding the score has authority to amend the whole run",
            ],
            correctIndex: 0,
            explanation:
              "Which is a different kind of limit from the card's. The card is closed because it is a record of what was filed; a title page is limited by how many physical copies survive.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In the lesson 10 table, what is said about the reach of the 1913 press?",
            options: [
              "Large at the time, almost nobody since",
              "Small at the time and large now, because the pages have been digitised and indexed",
              "Unmeasurable, since circulation figures for the papers concerned do not survive",
              "Equal to the register's, since both were consulted by the 1938 production's publicists",
            ],
            correctIndex: 0,
            explanation:
              "And it is not correctable, because it has already faded. That asymmetry is the shape of the whole case in one row.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does the course call a later description of a work, such as a catalogue entry or an agency page?",
            options: [
              "A downstream document",
              "A secondary instrument, meaning any record made after the work was registered",
              "A derivative record, meaning a copy whose errors can be traced to one original",
              "A tertiary source, meaning a summary of summaries with no independent value",
            ],
            correctIndex: 0,
            explanation:
              "A downstream document is live and therefore correctable, which is the opposite of a closed record like the 1912 card.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is a closed record, in the course's vocabulary?",
            options: [
              "A historical document that can be read but not amended",
              "A registration whose copyright term has expired and which is no longer enforceable",
              "An archive box restricted to researchers with the permission of the depositor",
              "A record whose original has been lost and which survives only in transcription",
            ],
            correctIndex: 0,
            explanation:
              "The 1912 card is the example. Reading it accurately is possible; changing it is not, and pretending otherwise wastes the effort a correction needs.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is a primary document, as lesson 10 uses the term?",
            options: [
              "A record made at the time by someone in a position to know",
              "The first published account of an event, whether or not its author was present",
              "The document a court would admit in preference to any other about the same fact",
              "The version of a work a library designates as the copy of record for its collection",
            ],
            correctIndex: 0,
            explanation:
              "It is what a good correction puts in the reader's hands, so that the next person does not have to trust either the original account or the correction.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 9 say about stacking documents that each fail to settle a share?",
            options: [
              "It does not produce an answer",
              "It produces a probable answer, which a careful writer may state with a qualifier",
              "It produces an answer only when the documents come from different institutions",
              "It produces an answer in law, since a court weighs the balance of the evidence",
            ],
            correctIndex: 0,
            explanation:
              "Five documents that each fail on the same question still fail on it. That is why the refusal is a rule rather than a preference.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 say the 1935 and 1938 claims establish?",
            options: [
              "What he told institutions and audiences later",
              "What had been agreed between the collaborators in 1913, since he was a party to it",
              "That the assignment had been revoked, since sole proprietorship contradicts it",
              "That the university had already acquired the copyright before the revival opened",
            ],
            correctIndex: 0,
            explanation:
              "A statement made in 1935 is evidence about 1935. What was agreed in 1913 is a separate question with separate evidence.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 9 say the handwritten line and the memoir establish?",
            options: [
              "That he named her afterwards",
              "That he had always intended the register to carry both names from the beginning",
              "That the correction reached the Copyright Office before his death in 1969",
              "That she had approved the wording, since her name is given first in the addition",
            ],
            correctIndex: 0,
            explanation:
              "And what they do not settle is how much of the opera was hers, which is the column the whole table exists to fill in.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Which two scholars' descriptions of the work does lesson 9 say are not the same as each other?",
            options: [
              "Smith's and Hafen's",
              "Nelson's and Chen's, who describe the collaboration in the same terms twenty years apart",
              "Hafen's and the National Park Service's, which agree on the melodies but not the libretto",
              "Smith's and Nelson's, which agree except about who trained the singers",
            ],
            correctIndex: 0,
            explanation:
              "Smith says the music is in one hand and it is his; Hafen says the melodies were traditional songs she played and he wrote down and orchestrated. Neither matches the federal page's sentence.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Why does a correction lose to a claim, in lesson 9's account?",
            options: [
              "It is always less interesting",
              "It reaches a smaller audience, because corrections are printed in smaller type",
              "It arrives later, and readers remember only the first version they encountered",
              "It is usually written by the person who made the original error in the first place",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a share stated without evidence is very hard to withdraw once it has been quoted, and why the course refuses to state one.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 8 say about attributing Nelson's account?",
            options: [
              "It costs the credit case nothing",
              "It weakens the case badly, which is why most retellings leave his name out",
              "It is impossible, since the review was published without a byline in 1913",
              "It is unnecessary, since Smith has already reprinted the account in full",
            ],
            correctIndex: 0,
            explanation:
              "The register is still wrong by omission, the press still named her from the first night, and the assignment still conveyed half.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "How does the course describe Nelson's position relative to the work?",
            options: [
              "A reviewer, not a witness to the working",
              "A collaborator on the libretto, which is why his account is so detailed about it",
              "A member of the first production's company, who sang in all three performances",
              "An officer of the Copyright Office who had examined the application in 1912",
            ],
            correctIndex: 0,
            explanation:
              "He had no obvious way of knowing what happened in a room he was not in, which is a reason to attribute his account rather than to discard it.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does lesson 9 say a percentage would not be?",
            options: [
              "Checkable",
              "Interesting, since a reader wants a share and will supply one if the course does not",
              "Legal, since the 1909 Act forbids an applicant from claiming a fractional share",
              "Necessary, since the register already records the division as an undivided half",
            ],
            correctIndex: 0,
            explanation:
              "Every claim the course does make can be checked against a document. That is what the refusal buys.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 10 say about the accuracy of a live document?",
            options: [
              "Anybody can work on it",
              "Only the publishing institution can change it, so a reader's role is to complain",
              "It matters less than the accuracy of a closed record, which historians rely on",
              "It cannot be measured, because a live document changes between one visit and the next",
            ],
            correctIndex: 0,
            explanation:
              "Catalogues, programme notes, encyclopaedia entries and agency pages are all downstream and all live, which is where a correction now has purchase.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "In the lesson 10 table, who reads a handwritten line on a manuscript?",
            options: [
              "Whoever opens that box",
              "Every later performer, since the line is copied into each new performing score",
              "The Copyright Office, which files an image of any annotated deposit copy",
              "Nobody, since annotations on an archived manuscript are removed before cataloguing",
            ],
            correctIndex: 0,
            explanation:
              "It has already been written and it reached one reader at a time, which is the smallest reach of the five instruments.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What kind of document does lesson 10 say the El Paso Herald page still needs?",
            options: [
              "The printed page, as distinct from the transcription",
              "A second copy, since the only surviving issue is too damaged to be scanned again",
              "A translation, since the column was printed in a language the archive does not index",
              "A correction from the paper, which misspelled one of the two collaborators' names",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 5 quoted machine transcription of a scan and labelled it as such. Reading the page image is the step that would close that check.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 10 say about whether the 1912 copyright was renewed?",
            options: [
              "It is unknown here",
              "It was renewed by the university that had been assigned the copyright earlier",
              "It was not renewed, because the term expired while the composer was still living",
              "It was renewed in 1929, alongside the renewal of her first book by its author",
            ],
            correctIndex: 0,
            explanation:
              "Whether it was renewed in its twenty-eighth year, and by whom, is one of the open checks. Nothing in the course depends on an answer.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does Hafen say about how well documented Hanson's participation is?",
            options: [
              "It is well documented",
              "It is as poorly documented as hers, which is why the collaboration remains obscure",
              "It is documented only from 1935 onward, when he began claiming sole proprietorship",
              "It is documented only in the memoir he published toward the end of his life",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence sets his well-documented participation against the lack of Gertrude's own voice, which is the asymmetry the whole record rests on.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "Which two phrases from Nelson's account concern Hanson's own work?",
            options: [
              "Revised his poems and criticized his music",
              "Furnished the missing links and furnished all the ideas for the costumes",
              "Trained the dancers and singers, and played the melodies on the violin",
              "Wrote the libretto and songs, which the federal agency page repeats today",
            ],
            correctIndex: 0,
            explanation:
              "Those two phrases describe her acting on material he had made, which is a different kind of claim from the others in his list.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does lesson 9 say about the number of sources supporting the libretto-and-songs claim?",
            options: [
              "None of those read for this course",
              "Two, being Smith and Hafen, who both say so in slightly different words",
              "One, being Nelson's 1913 review, which is the origin of the modern claim",
              "All of them, which is why the course treats the claim as established background",
            ],
            correctIndex: 0,
            explanation:
              "Smith says the music is in one hand and it is his. Hafen describes traditional melodies played, written down and orchestrated. Neither is the same as the federal page's sentence.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Why does lesson 9 include an exhibit at all?",
            options: [
              "The rule is easier to keep once you have seen it broken",
              "Because a course is required to name at least one unreliable source in every section",
              "Because the federal page is the only source with anything to say about the opera",
              "Because the page's errors change what the registration card is understood to mean",
            ],
            correctIndex: 0,
            explanation:
              "A rule stated in the abstract is easy to agree with and easy to forget. A page that breaks it, read closely, is what makes the rule stick.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does the course mean by counter-evidence?",
            options: [
              "What tells against a claim",
              "Evidence produced by the opposing party in a dispute about ownership of a work",
              "A second account of the same events, whether or not it disagrees with the first",
              "Any evidence discovered after the claim was first published and widely repeated",
            ],
            correctIndex: 0,
            explanation:
              "An honest retelling prints it beside the claim rather than after it or not at all, which is what lesson 8 does with Nelson.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What is testimony, in the course's vocabulary?",
            options: [
              "One person's report of what happened",
              "A sworn statement made before a notary, which is why the assignment counts as one",
              "The official record of a proceeding, kept by the body that conducted it",
              "An account corroborated by at least one document made at the same time",
            ],
            correctIndex: 0,
            explanation:
              "It is evidence of what they said, and only sometimes evidence of what occurred. That distinction is what lesson 8 asks a reader to hold.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does lesson 9 say about the source given on the federal page for the authorship claim?",
            options: [
              "None is given",
              "A scholarly article is cited, which on checking turns out to say something different",
              "The Library of Congress post is cited, which the page then paraphrases inaccurately",
              "The registration card is cited, which names the other collaborator and not her",
            ],
            correctIndex: 0,
            explanation:
              "Stated flatly, with no source on the page and no hedge, which is what makes it a useful exhibit rather than merely a disagreement between scholars.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 10 say about the route the 1909 Act offered, in 1913?",
            options: [
              "It was open and was not taken",
              "It was closed, because a Class D registration could not be amended once entered",
              "It was open only to the person named on the original application, who declined it",
              "It required a court order, which neither collaborator had the means to obtain",
            ],
            correctIndex: 0,
            explanation:
              "Three calendar months, one filing, and a name allowed into the notice under section 46. That is the whole distance between this record and a different one.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What does lesson 8 say a reader should do with an account whose giver is unknown to them?",
            options: [
              "Attach the name and read the counter-evidence beside it",
              "Discard it, since an account from an unfamiliar writer cannot be weighed at all",
              "Accept it provisionally, since a contemporary writer had access nobody has now",
              "Compare it only with other accounts from the same year and the same newspaper",
            ],
            correctIndex: 0,
            explanation:
              "That is the whole method of lesson 8: not a verdict on Nelson, but a rule about how his account should travel.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does lesson 9 say about a record that contains one loose claim?",
            options: [
              "It usually contains more than one",
              "It should be discarded entirely, since one error puts the whole document in doubt",
              "It is still reliable for dates, which are the hardest facts for a writer to get wrong",
              "It can be repaired by comparing it with a second record from the same institution",
            ],
            correctIndex: 0,
            explanation:
              "The federal page carries three problems at once, and the only way to find out is to check the specific sentence you are about to repeat.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What does lesson 10 say is the first move in any correction?",
            options: [
              "Say what each record does and does not say",
              "Identify who benefited from the error, since that usually explains how it began",
              "Publish the strongest version of the corrected claim, so that it travels as far as the error",
              "Write to the institution holding the record and ask for the entry to be amended",
            ],
            correctIndex: 0,
            explanation:
              "Duller than a verdict and it survives longer. The whole course is an extended demonstration of that first move.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which of these is listed in lesson 10 as still unread?",
            options: [
              "The registration number on the 1912 card",
              "The 1909 Act's sections on assignment, recording and the statutory notice",
              "The Library of Congress post of 31 March 2021 and the card images it links",
              "Smith's article of 2001, which is known here only through a summary of it",
            ],
            correctIndex: 0,
            explanation:
              "The number reads as a Class D entry with a handwritten mark that could not be matched to the catalogue for that year, so the class is printed and the number is not.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 42 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "whose-name-is-on-the-score-final",
      title: "Final assessment · Whose Name Is on the Score",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course about?",
            options: [
              "The credit record for one work",
              "The music of The Sun Dance Opera, analysed act by act from the surviving scores",
              "The ceremony the opera took its subject from, and how the opera staged it",
              "The life and advocacy of Zitkala-Šá, from her first book to her death in 1938",
            ],
            correctIndex: 0,
            explanation:
              "A registration, the press coverage, an unrecorded assignment, two later sole-proprietorship claims and a late handwritten correction. Not the opera, and not the ceremony.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "What are the two rules the course states in its first lesson?",
            options: [
              "No ceremony, and no authorship shares",
              "No secondary sources, and no quotation from any newspaper of the period",
              "No living people named, and no claims about copyright law after the 1976 Act",
              "No speculation about motive, and no reliance on any source read only in an archive copy",
            ],
            correctIndex: 0,
            explanation:
              "It never describes the Sun Dance or the opera's staging of it, and it never says how much of the opera was written by either collaborator.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "In the course's vocabulary, what is an instrument?",
            options: [
              "A document that carries a credit or a right",
              "A register kept by a government office, as distinct from a privately held paper",
              "A musical device, here the violin on which traditional melodies were played",
              "A claim made in public about who made a work, whether written down or not",
            ],
            correctIndex: 0,
            explanation:
              "Considered together with who reads it and what it obliges anyone to do, which is the middle column of the table in lesson 1.",
            sourceLessonSlug: "credit-is-written-on-an-instrument",
          },
          {
            prompt: "Which class of the 1909 Act was the opera registered in?",
            options: [
              "Class D",
              "Class A, the class for books, which her own three cards carry in the same catalogue",
              "Class E, the class the Act reserved for musical compositions filed on their own",
              "Class R, the class the office used for renewals of copyrights already subsisting",
            ],
            correctIndex: 0,
            explanation:
              "Dramatic or dramatico-musical compositions. The entry stamp on the card begins with that class mark and the word Musical was written in by hand on the form.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What two different questions does a 1909-Act application ask about people?",
            options: [
              "Who made the work, and who holds the copyright",
              "Who wrote the words, and who wrote the music, for a dramatico-musical composition",
              "Who is applying, and who witnessed the signature of the person applying",
              "Who deposited the copy, and who will receive the statutory fee if it is returned",
            ],
            correctIndex: 0,
            explanation:
              "Author and claimant. Keeping them apart is most of the skill the course teaches, and the 1901 card shows them holding two different answers.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What did section 44 of the 1909 Act require, and within what period?",
            options: [
              "Recording an assignment, within three calendar months",
              "Depositing two copies of the work, within three calendar months of first publication",
              "Renewing a copyright, within the twenty-eighth year of the original term",
              "Printing the statutory notice on every copy, from the day of first publication",
            ],
            correctIndex: 0,
            explanation:
              "Measured from execution in the United States, with the default making the assignment void against a later recorded purchaser for value without notice.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "What did section 46 make possible once an assignment was recorded?",
            options: [
              "The assignee's name in the statutory notice",
              "A second registration in the assignee's name, in the class of the original entry",
              "A refund of half the statutory fee paid on the original application",
              "A challenge to the original registration by anyone claiming to be a joint author",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is what turns recording from a filing chore into a credit mechanism, and it is the route that was never taken in this case.",
            sourceLessonSlug: "the-1909-act-class-claimant-assignment",
          },
          {
            prompt: "How many name fields does the 1912 application card have, and how many names appear?",
            options: [
              "Five fields, one name",
              "Two fields, one name, with the second side of the card left entirely blank",
              "Five fields, two names, with hers added in a different hand on the reverse",
              "One field, one name, since a Class D application asked only for the claimant",
            ],
            correctIndex: 0,
            explanation:
              "The typed heading, the claimant blank, the author blank, the certificate blank and the remitter blank. No other person appears anywhere on either side.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What date is stamped on the 1912 card for the copy received?",
            options: [
              "12 December 1912",
              "27 December 1913, the day a Texas daily published a piece about the same opera",
              "16 January 1929, the day the office received a renewal application from Washington",
              "5 December 1921, the day she registered a book of her own with the same office",
            ],
            correctIndex: 0,
            explanation:
              "Two months before the February 1913 premiere, which makes the registration the first document in the record rather than a later act of forgetting.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "On the 1901 card for Old Indian Legends, who is the author and who is the claimant?",
            options: [
              "She is the author, Ginn & co. the claimant",
              "Ginn & co. is the author, and she is the claimant, which the 1929 renewal reverses",
              "She is both, which is why the renewal of 1929 could be claimed in her own name",
              "The card names no author, only the illustrator and the publishing house in Boston",
            ],
            correctIndex: 0,
            explanation:
              "Ordinary for a trade book in 1901, and a demonstration of the two fields doing their job: the register records both facts without either erasing the other.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What capacity did she state on the 1929 renewal application?",
            options: [
              "Author",
              "Widow, which is one of the four capacities the form prints beneath the blank",
              "Assignee of the original claimant, which is why the fee came from Boston",
              "Proprietor, using the 1909 Act's own word for the holder of a copyright",
            ],
            correctIndex: 0,
            explanation:
              "The permitted answers printed on the form are author, widow, widower and child, so the form made her choose and she chose author.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "What do the four cards together show, in lesson 3's summary?",
            options: [
              "The register knew how to record her",
              "The register had no way to record a second collaborator on a dramatic work",
              "The register recorded her only when a Boston publisher acted on her behalf",
              "The register treated her books and the opera under two different statutes",
            ],
            correctIndex: 0,
            explanation:
              "Author in 1901, claimant in 1921, author claiming a renewal in her own hand in 1929. It was never asked to record her for the opera.",
            sourceLessonSlug: "four-cards-in-one-catalogue",
          },
          {
            prompt: "Which word is handwritten above \"Composition\" on the 1912 form?",
            options: [
              "Musical",
              "Dramatic, which the printed heading of that particular form does not supply",
              "Unpublished, marking the work as one not reproduced for sale at the time",
              "Provisional, marking the application as pending until the deposit copy arrived",
            ],
            correctIndex: 0,
            explanation:
              "The printed heading is for a dramatic composition not reproduced for sale, and the handwritten word marks it as the dramatico-musical kind.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "Which of the four cards names Zitkala-Šá nowhere?",
            options: [
              "The opera card",
              "The 1921 card, which gives only an initial and a married surname for the claimant",
              "The 1929 renewal, which names the Boston publisher in three separate blanks",
              "The 1901 card, which credits the retelling to the publisher rather than to a person",
            ],
            correctIndex: 0,
            explanation:
              "Every field on it is filled in. What is missing is a second person, and no blank on the form was waiting for one.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "Where did the five card images used in the exercise come from?",
            options: [
              "The Library of Congress Copyright Office post of 2021",
              "A digitised finding aid for the Hanson papers at Brigham Young University",
              "The Catalog of Copyright Entries for 1912, scanned and searchable as full text",
              "Chronicling America, which holds the newspaper coverage from the same years",
            ],
            correctIndex: 0,
            explanation:
              "That post is where the four cards are linked, and it is the reason the course could check the register for itself rather than relying on a description of it.",
            sourceLessonSlug: "reading-the-four-cards",
          },
          {
            prompt: "What did the Musical America premiere headline call her, in Smith's quotation?",
            options: [
              "A co-author",
              "A collaborator, which is the word later catalogues most often attach to her name",
              "The composer, which is the word usually attached to the other collaborator",
              "An adviser on the melodies, which is the role the 1938 publicity described",
            ],
            correctIndex: 0,
            explanation:
              "The wording is the paper's, in 1913. A trade paper announcing the work to the American music business told its readers it had two authors.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What does Smith say about her role in the newspaper stories before the 1935 revival?",
            options: [
              "It was always fully acknowledged",
              "It was acknowledged only in Utah, and dropped in every paper published elsewhere",
              "It was disputed in print by the other collaborator, who wrote to the papers himself",
              "It was acknowledged only after the university productions of the following year",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence carries two qualifications, always and in the surviving stories, and the second is honest about what has not survived.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "Why does the course label the El Paso Herald sentence as uncorrected?",
            options: [
              "The printed page was not read",
              "Because the paper printed a retraction the following week that the archive does not hold",
              "Because the column was set from a wire copy that the paper never checked",
              "Because the only surviving issue is too damaged for any transcription to be reliable",
            ],
            correctIndex: 0,
            explanation:
              "It is machine transcription of a scan, and it misspells one of the two names in its first sentence, which is why the course marks it rather than quoting it flat.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "How did the register and the press differ from the start?",
            options: [
              "One name against two",
              "Two names against three, since the press also credited the producer of the first run",
              "The register named her and the press named him, which is the reverse of the usual case",
              "Both named two people, and differed only about which of them came first",
            ],
            correctIndex: 0,
            explanation:
              "The press kept saying two for twenty-two years, until the 1935 revival. The card never changed at all.",
            sourceLessonSlug: "what-the-newspapers-said-in-1913",
          },
          {
            prompt: "What did Hanson sign about a month after the first production?",
            options: [
              "An assignment of an undivided half interest",
              "A new application to the Copyright Office naming both collaborators as joint authors",
              "A contract transferring the copyright in the opera to Brigham Young University",
              "A public statement in a Utah newspaper acknowledging his collaborator's role",
            ],
            correctIndex: 0,
            explanation:
              "Smith adds, in the same parenthesis, that the assignment was notarized in Uintah County and is not recorded in the Copyright Office.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does \"undivided half interest\" describe?",
            options: [
              "A share in the whole",
              "Half of the music, as opposed to half of the words or half of the staging",
              "A half share taking effect only on the death of the other owner of the work",
              "A right limited to the productions staged within one named state",
            ],
            correctIndex: 0,
            explanation:
              "Two people can own one house without either owning a particular room. A conveyance of property says nothing about who wrote which half of the work.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "Why does the course refuse to say what rights she held after 1913?",
            options: [
              "Nobody here has seen the document",
              "Because the 1909 Act made an unrecorded assignment void against everybody at once",
              "Because Smith declines to describe the instrument's terms in her published article",
              "Because the question was settled by the assignment of the copyright to a university",
            ],
            correctIndex: 0,
            explanation:
              "It is known here only through Smith's description, so its date, its terms and its signatures stay open questions rather than being filled in.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "How does the course treat Smith's suggestion about the reason for the belated assignment?",
            options: [
              "As speculation, because she labelled it as such",
              "As a finding, since it is published in a peer-reviewed article about these documents",
              "As an error, since the timing she gives elsewhere in the same article contradicts it",
              "As the course's own conclusion, stated in lesson 6 and repeated in lesson 9",
            ],
            correctIndex: 0,
            explanation:
              "The general rule behind the decision is to say what the record shows and not a motive it does not. The record shows a filing, a signature and an omission.",
            sourceLessonSlug: "an-undivided-half-interest",
          },
          {
            prompt: "What does Hafen say Hanson claimed in 1935 and 1938?",
            options: [
              "Sole proprietorship",
              "Joint authorship with the collaborator he had named in the 1913 assignment",
              "A half interest, consistent with the paper he had signed twenty-two years earlier",
              "No claim at all, since the university and the guild mounted the productions",
            ],
            correctIndex: 0,
            explanation:
              "She adds that he later assigns copyright to Brigham Young University and that his memoir acknowledges Zitkala-Šá as coauthor and collaborator.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "What did he add after the opera's title much later, and how?",
            options: [
              "Both their names, in a shaky hand",
              "A dedication to his collaborator, typed onto a label and pasted to the title page",
              "An assignment of the copyright to a university, signed and witnessed at the foot",
              "A note of the first production's date and venue, in the hand of an archivist",
            ],
            correctIndex: 0,
            explanation:
              "Smith writes that much later Hanson thought better of all this. It is a correction with the smallest possible readership, and it never reached the card.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Why does the course not say which score carries her name?",
            options: [
              "The scores were not read here",
              "Because the scores were destroyed before either scholar could examine them properly",
              "Because the Library of Congress post and Smith are describing the same manuscript",
              "Because the question was settled by the deposit copy filed in December 1912",
            ],
            correctIndex: 0,
            explanation:
              "The post and Smith may well be describing different manuscripts, since Smith distinguishes an earlier version from a later one, but nobody here read the scores.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "How many later corrections naming her does the course identify, and how many changed the card?",
            options: [
              "Three, and none",
              "Three, and one, which the office entered at the time of the 1935 revival",
              "One, and one, since the handwritten addition was copied into the register",
              "Five, and two, matching the five name fields on the two sides of the card",
            ],
            correctIndex: 0,
            explanation:
              "A handwritten title-page addition, a line on a revised score's first page of act I, and a memoir of 1967. The card says what it said on 12 December 1912.",
            sourceLessonSlug: "1935-1938-and-a-shaky-hand",
          },
          {
            prompt: "Who gave the detailed 1913 account of what she contributed, and where?",
            options: [
              "N. L. Nelson, in a Utah newspaper review",
              "Catherine Parsons Smith, in an article published in a music journal in 2001",
              "William F. Hanson, in the memoir he published toward the end of his life",
              "The El Paso Herald, in the piece it ran on 27 December of that year",
            ],
            correctIndex: 0,
            explanation:
              "Smith reprints his description and immediately says several pieces of evidence tend to contradict his story about the collaboration.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What are two of the pieces of evidence Smith gives against Nelson's account?",
            options: [
              "One hand in the music, and native melodies only in the later version",
              "A signed statement by Hanson, and the absence of her name from the 1913 programmes",
              "The registration card, and the fact that no assignment was ever recorded",
              "Her own published denial, and the newspapers' refusal to print a correction",
            ],
            correctIndex: 0,
            explanation:
              "The music is all in one hand, undoubtedly his, and the native melodies appear in the second version, prepared well after the collaboration had ended.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What does Hafen say about the melodies she played on the violin?",
            options: [
              "They were traditional Sioux songs",
              "They were her own compositions, which Hanson then transcribed and orchestrated",
              "They were taken from published collections of Native music available at the time",
              "They were never written down, which is why the first version contains none of them",
            ],
            correctIndex: 0,
            explanation:
              "Communal material, which an individual authorship claim cannot absorb, and a second complication the popular story drops.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What is the rule lesson 8 teaches about an account like Nelson's?",
            options: [
              "It belongs to the person who gave it",
              "It should be dropped, since a reviewer cannot know what happened in a rehearsal room",
              "It should be accepted, since it is the only contemporary description that survives",
              "It should be merged with the scholarship, so that a reader meets one settled version",
            ],
            correctIndex: 0,
            explanation:
              "Pass it on with his name attached and the counter-evidence beside it. A retelling that drops the name turns a review into a fact.",
            sourceLessonSlug: "one-mans-1913-account",
          },
          {
            prompt: "What can a document settle, in lesson 9's summary?",
            options: [
              "Who filed, who signed, who was named, and when",
              "Who wrote which part of a joint work, once enough documents are read together",
              "What each collaborator intended, since an instrument records a state of mind",
              "Nothing at all about a collaboration, since every record is somebody's version",
            ],
            correctIndex: 0,
            explanation:
              "It cannot settle who wrote which bar of music, and stacking five documents that each fail on that question does not produce an answer.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What three problems does lesson 9 find on one federal agency page?",
            options: [
              "A share, a date contradiction, and a miscount",
              "A wrong birth date, a wrong birthplace, and a misspelling of her name in the page heading",
              "A dead link, a missing citation, and a paragraph copied from a scholarly article",
              "A wrong class of registration, a wrong filing date, and a wrong name for the opera",
            ],
            correctIndex: 0,
            explanation:
              "A record with one loose claim usually has more than one, and the only way to find out is to check the specific sentence you are about to repeat.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "How many authors does the Open Library record give for the 1924 Oklahoma report?",
            options: [
              "Three",
              "One, matching the attribution on the federal agency page the course examines",
              "Two, being the author and the attorney who conducted the investigation with her",
              "None, since the report was issued anonymously by the organisation that funded it",
            ],
            correctIndex: 0,
            explanation:
              "Zitkála-Šá, Charles H. Fabens and Matthew K. Sniffen, two of them marked as joint authors. The report is context here rather than the course's subject.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Which death year does the course use, and why?",
            options: [
              "1938, because two independent sources agree",
              "1928, because it appears in the body text of a federal agency's own page",
              "Neither, because the contradiction makes the question permanently unresolvable",
              "1969, which is the year Hafen gives for the death of the other collaborator",
            ],
            correctIndex: 0,
            explanation:
              "Hafen and the Library of Congress both put her death in 1938, and the New York production that came just months after it was mounted in 1938.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "What habit does lesson 9 recommend in place of trusting a whole source?",
            options: [
              "Cite a sentence, not a page",
              "Prefer federal pages, since an agency carries a duty of accuracy a scholar does not",
              "Prefer the oldest source, since later accounts accumulate errors from earlier ones",
              "Prefer whichever source has been cited most often by other writers on the subject",
            ],
            correctIndex: 0,
            explanation:
              "And check that sentence against something that was in a position to know, which is the same test the course applies to Nelson, to the cards and to itself.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Why is refusing to state a share not fence-sitting?",
            options: [
              "An unevidenced share is what gets quoted next",
              "Because the course states a share elsewhere, when discussing the traditional melodies",
              "Because the register already states the share as an undivided half for each party",
              "Because a refusal is itself a claim, which the course defends with its own evidence",
            ],
            correctIndex: 0,
            explanation:
              "Once quoted it is very hard to withdraw, because the correction is always less interesting than the claim. Everything the course does say is checkable.",
            sourceLessonSlug: "the-shares-are-not-in-the-documents",
          },
          {
            prompt: "Which instrument in this case had the most reach and was the least correctable?",
            options: [
              "The registration card",
              "The 1913 press, which reached several states and can no longer be amended",
              "The handwritten line, which every later reader of the manuscript encounters",
              "The unrecorded assignment, which bound both parties for the rest of their lives",
            ],
            correctIndex: 0,
            explanation:
              "Reach comes from being fixed, indexed and consulted by people who were not there, and those are the same properties that make a record hard to amend.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What can a correction reach now, according to lesson 10?",
            options: [
              "The live documents downstream of the card",
              "The card, which the Copyright Office amends on application by an interested party",
              "Nothing, since every instrument in this case is now a closed historical record",
              "Only the scholarly literature, which is the sole live record of the collaboration",
            ],
            correctIndex: 0,
            explanation:
              "Catalogues, programme notes, encyclopaedia entries and agency pages. The card is a historical document, and the honest thing to do with it is read it accurately.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Why does lesson 10 say the 2021 Copyright Office post matters?",
            options: [
              "It put the primary documents in the public's hands",
              "It was the first public acknowledgement by a federal body that the register was wrong",
              "It corrected the National Park Service page, which had asserted an authorship share",
              "It reproduced the assignment that is otherwise known only through one scholar",
            ],
            correctIndex: 0,
            explanation:
              "A correction that hands people the primary document does more than one that hands them a better sentence, because the next person does not have to trust either.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "What is the transferable rule the course ends on?",
            options: [
              "Say what each record does and does not say",
              "Correct the loudest document first, because volume is what changes public belief",
              "Prefer the earliest instrument, because later ones are shaped by hindsight",
              "Withhold any judgment until every open question about a subject has been closed",
            ],
            correctIndex: 0,
            explanation:
              "The correction you can make is to the record you can reach, and that first move is duller than a verdict and survives longer.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
          {
            prompt: "Which of these does the course list as still unread and filed as an open check?",
            options: [
              "The assignment itself",
              "The four registration cards, which are known only from scholarly descriptions",
              "The 1909 Act, whose text the course quotes from a secondary summary",
              "Hafen's article, which was available only as an abstract when the course was written",
            ],
            correctIndex: 0,
            explanation:
              "Alongside the transfer to Brigham Young University, whether the 1912 copyright was renewed, which score carries her name, the printed newspaper page, and the registration number.",
            sourceLessonSlug: "what-a-correction-can-reach",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `whose-name-is-on-the-score`.
//
//  A. key "sun-dance-smith-2001-pages" · severity low · lesson "four-cards-in-one-catalogue"
//     title: What are the page numbers of Smith (2001) in Women & Music?
//     claim: Every lesson here cites Smith, C. P. (2001), "An operatic skeleton on the western
//            frontier", Women & Music, 5, with NO page range. Volume 5 is confirmed twice (the
//            Brigham Young University Zitkala-Ša subject guide, and a second journal listing); the
//            republication actually read carries no pagination.
//     stakes: Nine APA references in this file are incomplete until it is answered. A guessed page
//            range would be worse than a missing one.
//     needs: the first and last page of the article in the printed volume.
//     where: Women & Music vol. 5 (2001) via Project MUSE or a library holding the print run.
//
//  B. key "sun-dance-1912-registration-number" · severity medium · lesson "four-cards-in-one-catalogue"
//     title: What is the registration number on the 1912 Sun Dance Opera application card?
//     quote: "The class is printed; the number is not."
//     claim: The entry stamp reads to two readers as a Class D number around 19211 with a
//            handwritten mark after it. The brief searched the OCR of the 1912 Catalog of Copyright
//            Entries (archive.org `catalogofcopy91libr`) without finding the entry, and the
//            unpublished Class D numbers for that year run far higher. NO number is printed anywhere
//            in this course.
//     stakes: A wrong number in a course about a registration record would be the exact defect the
//            course teaches learners to catch.
//     needs: the entry number as the Catalog of Copyright Entries or the Copyright Office index
//            gives it for this work.
//     where: Catalog of Copyright Entries, Part 1 and Part 3, 1912-1913; Copyright Office records.
//
//  C. key "sun-dance-which-score-names-her" · severity medium · lesson "1935-1938-and-a-shaky-hand"
//     title: Which manuscript score of The Sun Dance Opera carries her name, and which does not?
//     quote: "nobody working on this course has read the scores at Brigham Young University, so the
//            course does not say which score carries which"
//     claim: The Library of Congress post says Hanson left her name off the vocal score. Smith
//            transcribes a REVISED piano-vocal score whose first page of act I reads "(From the
//            original opera By Wm. F. Hanson colaboration [sic] Zitkala-Sa)". Smith also
//            distinguishes a first version from "the second, later version". The two statements are
//            probably about different manuscripts, and the lesson prints both rather than choosing.
//     needs: a title page and act I first page from each surviving score, with shelfmarks.
//     where: William F. Hanson papers and scores, Brigham Young University, Provo, Utah.
//
//  D. key "sun-dance-half-interest-assignment" · severity high · lesson "an-undivided-half-interest"
//     title: Where is the 1913 assignment of an undivided half interest, and what does it say?
//     quote: "nobody working on this course has seen the document"
//     claim: Known ONLY from Smith (2001), who reports it was notarized in Uintah County, Utah,
//            about a month after the February 1913 premiere, and is not recorded in the Copyright
//            Office. Lesson 6 therefore refuses to state its date, its terms, or what rights it
//            created.
//     stakes: It is the single document that decides whether this is a story about an omission or a
//            story about a refusal, and the whole course is built around not guessing which.
//     needs: the instrument itself, or a reproduction, with its date, parties and terms.
//     where: Hanson papers, Brigham Young University; Uintah County notarial records, 1913.
//
//  E. key "sun-dance-byu-transfer-and-renewal" · severity medium · lesson "what-a-correction-can-reach"
//     title: When did Hanson assign the copyright to Brigham Young University, and was the 1912
//            copyright ever renewed?
//     claim: Hafen (1998) says "he later assigns copyright to BYU" in one clause, with no date and
//            no terms, and this course repeats only that. Whether the 1912 registration was renewed
//            in its twenty-eighth year (1939-1940), and by whom, was not searched.
//     needs: the transfer instrument or the university's acquisition record, and a renewal search in
//            the Catalog of Copyright Entries for 1939-1940.
//     where: Brigham Young University special collections; Catalog of Copyright Entries, renewals.
//
//  F. key "sun-dance-el-paso-herald-page" · severity low · lesson "what-the-newspapers-said-in-1913"
//     title: What does the printed El Paso Herald page of 27 December 1913 actually say?
//     quote: "it is uncorrected machine transcription of a scanned newspaper page, not a reading of
//            the page itself"
//     claim: Lesson 5 quotes the Chronicling America transcription and labels it as uncorrected. The
//            transcription spells the second collaborator "Hansen" where the register spells him
//            "Hanson", which is itself the reason the lesson distrusts the wording.
//     needs: the page image read directly, and the sentence transcribed from it.
//     where: chroniclingamerica.loc.gov/lccn/sn88084272/1913-12-27/ed-1/seq-31/ (page image).
//
//  G. key "sun-dance-musical-america-headline" · severity low · lesson "what-the-newspapers-said-in-1913"
//     title: What exactly did the Musical America premiere headline say?
//     claim: The headline is quoted here ONLY as Smith quotes it, and the lesson attributes it to her
//            quotation rather than to the paper. The issue itself was not seen.
//     needs: the Musical America issue and page carrying the premiere coverage.
//     where: Musical America, 1913 volumes.
//
// RESOLVED IN THIS PASS, so NO check is needed:
//  - THE FOUR CARDS. All five images were re-fetched and READ as images on 2026-09-20 (HTTP 200
//    each). Every transcription in lessons 3 and 4 is from the image, not from a description of it,
//    and this pass added details the brief did not have: the five name fields on the 1912 card, its
//    "D 4" corner mark and D1/D2 footer, the 1901 card's literal "Author." field label, and the fact
//    that the 1929 renewal's certificate and fee went to and from Ginn and Company.
//  - SMITH'S VOLUME NUMBER. Women & Music 5. Two independent listings. Pages remain open (check A).
//  - OKLAHOMA'S POOR RICH INDIANS HAS THREE AUTHORS. Open Library work OL45466908W, re-fetched as
//    JSON this pass: three author roles, two marked "joint author". Used only in lesson 9, as a
//    check on a federal page's attribution.
//
// CLAIMS DROPPED FOR LACK OF EVIDENCE (they are in the brief but not in any lesson):
//  - The registration number on the 1912 card (check B).
//  - That her lobbying helped pass the Indian Citizenship Act of 1924. The brief marks this REPORTED,
//    from secondary pages citing each other. It is also outside this course's subject.
//  - The publisher, series number, page count and investigation dates of Oklahoma's Poor Rich
//    Indians. REPORTED in the brief from search snippets only; lesson 9 uses ONLY the year and the
//    three author names, both of which were verified.
//  - Hanson's memoir title, Sun Dance Land. The book was not seen, so lesson 7 names the year (from
//    Hafen) and what the memoir says (from Hafen) and never gives the title or quotes it.
//  - Which federal rule prohibited the Sun Dance. Lesson 1 says only what Hafen says, that the
//    practice was outlawed on the Uintah and Ouray reservation, and goes no further.
//  - Smith's speculation about a motive for the belated assignment, and Hafen's "perhaps" about why
//    she did not contest his later self-representation. Both appear ONLY as labelled speculation.
//
// FOR THE REGISTERING AGENT (outside this file):
//
//  REGISTRATION BLOCK for scripts/seed-courses.ts, as its own seedAuthoredCourse call (the CREDIT
//  array loop does not pass visibility):
//
//    // "Whose Name Is on the Score" (Zitkala-Šá). PRIVATE and FREE by BAM's approval (2026-09-19)
//    // of plans/future-courses/uncredited/2026-09-18-zitkala-sa-brief.md. NO seriesCode /
//    // seriesPosition: BAM, 2026-09-19, private courses carry no CREDIT code. Keeps the series
//    // SLUG so the owner can find it. Built from the four Copyright Office card images, the 1909
//    // Act, Smith (2001), Hafen (1998) and the 2021 Copyright Office post. It never describes the
//    // Sun Dance ceremony or the opera's staging of it, and never asserts an authorship share.
//    // NO migration: pnpm seed:courses.
//    await seedAuthoredCourse(db, {
//      tenantId: learnWitus,
//      instructorId,
//      slug: "whose-name-is-on-the-score",
//      course: WHOSE_NAME_ON_THE_SCORE_COURSE,
//      category: "Culture & History",
//      additionalCategories: ["Money & Property"],   // only if that helper accepts it here
//      navigationMode: "linear",
//      price: 0,
//      priceType: "free",
//      visibility: "private",
//      publishHoldReason:
//        "Private study (plans/83): for BAM's own review, not for the public catalog. A non-Native author wrote it from published sources; if it is ever considered for public release it needs a Native reviewer with authority to change or cut any of it, on the deaf-america pattern.",
//      seriesSlug: "credit",
//      seriesTitle: "Credit: Who Gets Named",
//      seriesOrder: <next free>,
//    });
//
//  CITATIONS: add `whose-name-is-on-the-score` to STAGED_COURSES in src/lib/citations.ts and run
//  `pnpm gen:citations` once seeded. Every teaching lesson carries an APA 7 `## Sources` block.
//
//  STANDARDS: this is a primary-source history course (sourcing, corroboration, chronology,
//  claim-versus-evidence, reading a legal text), so per the repo rule it should be MAPPED in
//  src/lib/standards/ rather than BACKLOGged; until mapped it needs a BACKLOG line in
//  scripts/check-standards-coverage.ts.
//
//  SHAPED FOR A SECOND CASE. If the Delia Derbyshire research lands, her material becomes a new
//  section between Section 3 and Section 4, and Sections 1 and 4 already carry the general frame
//  (what an instrument is, what a record can and cannot settle) without naming a second subject.
