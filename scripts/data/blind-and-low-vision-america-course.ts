import type { AuthoredCourse } from "./authored-course";

// "Blind and Low-Vision America: The Code, the Schools, and the Record" (Culture & History). Tier 0.
// Standalone, not in the `credit` series. PRIVATE and FREE by BAM's decision 06 of 2026-08-30 ("make
// the blind course free too"), the same terms as its sibling scripts/data/deaf-america-course.ts: the
// course exists, nobody outside the owner can read it, and it publishes when a blind co-author or
// reviewer has been found, paid, credited, and has had the authority to change or cut any of it.
//
// WHAT THIS COURSE IS, and the one framing error it exists to prevent:
// BRAILLE IS A CODE, NOT A LANGUAGE. The sign-language framing does not transfer and the research
// document says so in its own first section. ASL is a natural language that is not English; braille
// is English (or French, or mathematical notation) rendered in dots. A course about ASL that taught
// only the manual alphabet would teach about two percent of a language. A course that teaches the
// braille code is teaching most of what the code IS. So the gap is elsewhere, and this course is
// about where: the code's rules, the standards war fought over it by people who mostly could not
// read it, the schools, the segregated schools, the credit, and the law.
//
// WHERE THE FACTS COME FROM:
// plans/future-courses/languages/2026-08-27-03-blind-and-low-vision-research.md is the brief. Every
// claim it marked NEEDS VERIFICATION was either verified against a primary or institutional source
// in the authoring pass of 2026-08-30, or dropped, or hedged in the lesson AND filed in
// src/lib/research-checks.ts. The identifiers printed in the `## Sources` blocks are only the ones
// that pass actually retrieved and read. Where a source refused an automated reader (nfb.org,
// perkins.org and dsq-sds.org all returned Cloudflare interstitials or HTTP 403), the claim is
// attributed to what WAS read: an archived snapshot in the NFB's case, DOAJ's indexed record of the
// Campsie article in the other, and the lesson says which.
//
// THE FIVE CORRECTIONS THIS FILE MAKES TO THE BRIEF, all from sources read in the authoring pass:
//  1. The Barbier myth traces to two named accounts, Pignier (1859) and Pierre Henri (1952), per
//     Campsie's own abstract, rather than to an unattributed "1950s centenary" story.
//  2. Helen Keller did NOT appear at the 1909 New York hearings. She wrote a letter to A. Emerson
//     Palmer that was read out. The hearings were 24 March and 18 May 1909, not "1909 to 1910".
//  3. The Nemeth code was adopted in 1951 per AFB's obituary of Nemeth and published in 1952. Both
//     dates circulate; the lesson says so and the discrepancy is filed as a source check.
//  4. NLS eligibility is NOT the 20/200 acuity threshold the brief expected. 36 CFR 701.6 now points
//     at the "eligible person" definition in 17 U.S.C. 121, which the Marrakesh Treaty
//     Implementation Act rewrote in 2018. The change is a better lesson than the number was.
//  5. WCAG 2.2's status line reads "W3C Recommendation 12 December 2024", so the brief's 5 October
//     2023 date is not printed here. Only WCAG 2.0's 11 December 2008 line was read directly.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. STANDPOINT IS STATED, NOT IMPLIED. A sighted author wrote this from published sources. Lesson
//     1 says so in plain words, says what it costs, and points to blind teachers and blind-led
//     organisations. The description says it above the fold as well.
//  2. EVERY SOURCE IS FLAGGED for whether it is authored by a blind person or a blind-led
//     organisation. The research document does this deliberately and calls it load-bearing, because
//     Section 6 turns on two blind-led organisations disagreeing in public.
//  3. NO INVENTED LIVED EXPERIENCE. No sentence in this course describes what being blind is like.
//     It teaches history, the code, the law, the technology and the standards fights.
//  4. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED with the holders of each position named, and neither
//     organisation's characterisation of the other is ever quoted as neutral description.
//  5. NO INVENTED SOURCE, DATE, QUOTATION, URL OR STATISTIC. Fetch-or-do-not-cite.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (serving 5, passing 80, shuffled) plus a final serving 10; every question
// carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and distractors long
// and specific, so `check-longest-option` passes by construction.
export const BLIND_AND_LOW_VISION_AMERICA_COURSE: AuthoredCourse = {
  title: "Blind and Low-Vision America: The Code, the Schools, and the Record",
  description:
    "A sighted author wrote this course from published sources, and that is the first sentence rather than the last. It does not teach you to read braille with your fingers, because no web page can: a nine-month tactile course put twenty-nine sighted adults at a mean of about six words per minute, and this course cites that study instead of pretending otherwise. What it teaches is the thing most people get wrong before anything else. Braille is a CODE, not a language. It encodes a print language into a cell of six dots, and the interesting history is not the dots but the fight over them. Four rival codes competed in American schools for sixty years; the first one won because sighted teachers could read it without training; at one 1910 meeting the man who ran the federally funded printing house was among the roughly ten per cent of the officials present who could personally read either system. Blind readers alive across that span were made to relearn their writing system up to four times, and Robert Irwin, who was blind and wrote the standard account, opens by noting how little they complained. The course goes on to the segregated schools that left a documented record and almost no historiography, to who is named on the things blind people built, to the two largest US organisations of blind people who have disagreed in public since 1961, and to the treaty about who is allowed to make a copy. Sources are flagged, wherever it could be established, for whether a blind person or a blind-led organisation wrote them. Nothing here describes what being blind is like, because the author does not know.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Whose account this is, and what braille actually is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "standpoint-and-what-this-course-is",
      title: "1 · Whose account this is",
      section: "Section 1 · Whose account this is, and what braille actually is",
      body: `A sighted author wrote this course, from published sources, without a blind co-author. You should know that before you read anything else in it, and you should know what it costs.

**What it costs, specifically.** Three things. First, everything here is filtered through what got written down, and the writing about blind people was done overwhelmingly by sighted people: superintendents, doctors, printers, legislators and, much later, engineers. A course built from that record inherits its angle even when every individual fact in it is true. Section 3 is about a sixty-year argument over a writing system in which almost every decision-maker was a sighted administrator, and the record of that argument was made by the same people. Second, a sighted author cannot check a claim about reading by touch against their own hands. Third, and least obvious, a sighted author does not notice the questions a blind reader would ask. Absence of that kind does not show up as an error you can point at.

**So here is a rule you can hold this course to.** Every source in the bibliographies below is flagged, where it could be established, for whether a blind person or a blind-led organisation wrote it. That is not decoration. Section 6 is about two blind-led organisations that have disagreed in public for more than sixty years, and there is no way to teach that argument honestly without saying, every time, whose account you are reading.

**What this course does not do, stated flatly.** It does not teach you to read braille with your fingers. It can teach you the cell, the numbering, the contraction rules and the history, all of which are how transcribers, teachers and parents learn the code. It cannot train a fingertip, and neither can any other web page.

**The evidence for that, since it is a claim and not a disclaimer.** Bola and colleagues (2016) put twenty-nine sighted adults through a nine-month tactile braille reading course: daily practice of roughly ten to thirty minutes plus monthly group meetings, starting with tactile discrimination exercises before any letters. At the end, almost all of them could read whole braille words at a mean of about six words per minute. The authors note that this pace was comparable to congenitally and early blind children learning braille in primary school. Six words per minute after nine months of in-person instruction is the honest scale of the task. No course of text shortens it.

**There is also a failure mode that a screen-based course like this one actively feeds, and naming it is part of the deal.** Everything you learn here you will learn by sight. Sighted knowledge of braille is real knowledge, and it is also a different thing from reading by touch, in ways this author is in a poor position to describe. Treat what you finish with as knowledge about the code, not knowledge of reading it.

**Where to go instead, for the part this cannot do.** To blind teachers, and to the organisations blind people run themselves. Section 6 names the two largest in the United States and tells you what they disagree about, so that you can read both rather than either.

:::reveal Name the three costs this lesson says a sighted-authored account carries. ||| It inherits the angle of a record made mostly by sighted superintendents, doctors, printers and officials. It cannot check a claim about reading by touch against the author's own hands. And it does not notice the questions a blind reader would ask, which is an absence you cannot point at.

:::reveal What did the nine-month tactile course in Bola and colleagues' study actually produce, and why does this course quote it? ||| Almost all of the twenty-nine sighted adults could read whole braille words at a mean of about six words per minute, a pace the authors compared to blind children learning in primary school. The course quotes it because "a web page cannot teach tactile reading" is a claim, and a claim needs evidence.

:::reveal What is this course's rule about the sources it cites? ||| Each one is flagged, where it could be established, for whether a blind person or a blind-led organisation wrote it, because Section 6 turns on two blind-led organisations disagreeing and you cannot follow that without knowing whose account you are reading.

## Vocabulary
- **Standpoint**: the position an account is written from, including who wrote it and what they could and could not check, stated openly instead of left for a reader to infer.
- **Tactile reading**: reading by touch at speed, a perceptual skill built on physical media over months, and the one thing this course cannot deliver.
- **Blind-led organisation**: a body run by blind people themselves rather than on their behalf, a distinction Section 6 shows is contested even among the organisations that claim it.
- **Words per minute**: the unit reading speed is measured in, and the reason the Bola study's number is worth printing rather than paraphrasing.
- **Fetch-or-do-not-cite**: this course's sourcing rule, that no identifier appears in a bibliography unless the authoring pass actually retrieved and read what it points to.

## Sources
Bola, L., Siuda-Krzywicka, K., Paplinska, M., Sumera, E., Hanczur, P., & Szwed, M. (2016). Braille in the sighted: Teaching tactile reading to sighted adults. *PLOS ONE, 11*(5), e0155394. https://doi.org/10.1371/journal.pone.0155394`,
    },
    {
      slug: "a-code-not-a-language",
      title: "2 · A code, not a language",
      section: "Section 1 · Whose account this is, and what braille actually is",
      body: `The most common error about braille is to call it a language. It is a code, and almost everything else in this course follows from the difference.

**What the code is.** Braille encodes an existing print language into a cell of six dots, two across and three down. Six positions that are either raised or flat give sixty-four patterns, counting the empty cell. Eight-dot variants, used in computer braille and on refreshable displays, give two hundred and fifty-six. There is English braille, French braille, Arabic braille, a code for mathematics, a code for music and a code for the International Phonetic Alphabet, and each is a code for its own print system rather than a separate language.

**Why the deaf comparison does not transfer, which matters if you have taken the sibling course.** American Sign Language is a natural language with a grammar that is not English grammar. Braille is English, or French, or mathematical notation, written in dots. A course about ASL that taught only the manual alphabet would be teaching about two per cent of a language. A course that teaches the braille code is teaching most of what the code is. So the gap is not in the code. It is in the fingers, in the schools, in the archives and in the law, which is where the rest of this course goes.

**Uncontracted and contracted.** Uncontracted braille spells every word out, one cell per print character. Contracted braille adds a large set of contractions and short forms, so a single cell can stand for a whole word and a two-cell sequence for a common letter group. Published books use contracted braille, because paper braille is bulky and compactness has always been the constraint. The older names for the two, still in wide use, are grade 1 and grade 2.

**The current code, with dates you can check.** In April 2004 the General Assembly of the International Council on English Braille declared Unified English Braille substantially complete, recognisable as an international standard and available for adoption by individual countries. On 2 November 2012 the United States members of the Braille Authority of North America voted to adopt UEB in place of English Braille American Edition. BANA then set 4 January 2016 as the date by which the United States would implement it, and worked through four announced phases: information in 2013, infrastructure in 2014, instruction in 2015, implementation in 2016. Nine contractions were eliminated.

**The American exception, which is the part to remember.** BANA's motion specified that the United States would retain the Nemeth Code for Mathematics and Science Notation. After implementation the official codes of the United States were UEB, the Nemeth Code in its 1972 revision, the Music Braille Code of 1997 and the IPA Braille Code of 2008. So a braille reader in an American mathematics class is reading a different code from a reader in a British one, and any claim that English-language braille was unified in 2016 has to carry that exception with it.

**One date that is not a coincidence.** The Library of Congress's National Library Service records that it took up UEB on 4 January 2016, and notes what that day was: the two hundred and seventh birthday of Louis Braille.

**And one practical fact for anyone building software.** Braille has been in Unicode since the Braille Patterns block, U+2800 to U+28FF. That means braille in a document can be text, which a refreshable display can drive, rather than a picture of dots, which it cannot.

:::reveal Why does the ASL framing not transfer to braille? ||| Because ASL is a natural language with its own grammar and braille is a code for an existing print language. Teaching only ASL's manual alphabet teaches a fraction of a language, whereas teaching the braille code teaches most of what the code is.

:::reveal What did BANA's 2 November 2012 motion decide, and what did it deliberately keep? ||| It adopted Unified English Braille to replace English Braille American Edition in the United States, and it specified that the United States would retain the Nemeth Code for Mathematics and Science Notation.

:::reveal Why does putting braille in a document as Unicode matter more than putting a picture of dots there? ||| Because a refreshable braille display can drive text and cannot drive an image, so Unicode braille reaches a reader's hands and a picture of dots does not.

## Vocabulary
- **Braille cell**: six dot positions, two across and three down, giving sixty-four patterns including the empty cell; eight-dot variants give two hundred and fifty-six.
- **Uncontracted braille**: braille that spells every word out, one cell per print character, historically called grade 1.
- **Contracted braille**: braille using contractions and short forms so one cell can carry a whole word, historically called grade 2, and what published books use.
- **Unified English Braille**: the code declared substantially complete by ICEB in April 2004 and adopted for the United States by BANA on 2 November 2012, implemented 4 January 2016.
- **Nemeth Code**: the braille code for mathematics and science notation that BANA's UEB motion expressly retained for the United States, so American technical braille differs from British.

## Sources
Braille Authority of North America. (2012, November 2). *BANA adopts Unified English Braille (UEB) for United States* [Press release]. https://www.brailleauthority.org/pressreleases/pr-2012november.html
Braille Authority of North America. (2014). *Implementation of Unified English Braille (UEB)* [Board statement approved 9 November 2014]. https://www.brailleauthority.org/ueb/implementation/statement.html
International Council on English Braille. (n.d.). *Unified English Braille (UEB)*. https://iceb.org/ueb.html
Library of Congress, National Library Service for the Blind and Print Disabled. (n.d.). *History*. https://www.loc.gov/nls/about/organization/history/
Unicode Consortium. (n.d.). *Blocks.txt* [Unicode Character Database]. https://www.unicode.org/Public/UNIDATA/Blocks.txt`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Standpoint, and what braille actually is",
      section: "Section 1 · Whose account this is, and what braille actually is",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who wrote this course, and under what conditions?",
            options: [
              "A sighted author, from published sources",
              "A blind co-author and a sighted author working together from the outline stage onward",
              "A team of certified braille transcribers drawing on their own production experience",
              "A blind-led research collective that granted the catalog publication rights to its work",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 and the course description both say so, because standpoint stated is checkable and standpoint implied is not. A blind co-author or reviewer is the condition on publication, not a fact about the draft.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which of these does this course explicitly refuse to do?",
            options: [
              "Teach you to read braille with your fingers",
              "Explain the contraction rules that separate contracted braille from uncontracted braille",
              "Name the four codes that competed in American schools during the standards war",
              "Describe how a refreshable braille display renders Unicode text as raised dots",
            ],
            correctIndex: 0,
            explanation:
              "It can teach the cell, the numbering, the rules and the history, which is how transcribers, teachers and parents learn the code. It cannot train a fingertip, and lesson 1 cites the study that shows the scale of that task.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "How long was the tactile braille reading course in Bola and colleagues' 2016 study?",
            options: [
              "Nine months",
              "Two full academic years, running across four consecutive university semesters",
              "Six weeks of daily intensive instruction followed by a year of unsupervised practice",
              "Three months, matching the standard rehabilitation block for newly blinded adults",
            ],
            correctIndex: 0,
            explanation:
              "Nine months, with roughly ten to thirty minutes of daily individual practice plus monthly group meetings, beginning with tactile discrimination exercises before any letters were introduced.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What mean reading speed did the participants in that study reach?",
            options: [
              "About six words per minute",
              "About sixty words per minute, roughly a quarter of average adult print reading speed",
              "About twenty-five words per minute, which the authors called functional literacy",
              "About one hundred words per minute for uncontracted braille and half that for contracted",
            ],
            correctIndex: 0,
            explanation:
              "Almost all of the twenty-nine participants could read whole braille words at a mean of about six words per minute after nine months, a pace the authors compared to blind children learning in primary school.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "How many participants did the Bola study enrol?",
            options: [
              "Twenty-nine",
              "Ninety-six, sampled in two age cohorts either side of a policy change",
              "Two hundred and fifty, recruited from braille production houses in four countries",
              "Twelve, which the authors described as a pilot rather than a full trial",
            ],
            correctIndex: 0,
            explanation:
              "Twenty-nine sighted adults, described as braille teachers, special education students, or relatives of blind people.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What comparison did the authors of that study draw about the pace of learning?",
            options: [
              "Comparable to blind children in primary school",
              "Roughly half the pace of adults who lose their sight later in life and retrain",
              "Faster than blind adults because sighted learners already have print literacy",
              "Slower than any documented group, which is why the authors called the result null",
            ],
            correctIndex: 0,
            explanation:
              "The paper reports that the pace of learning in the group was comparable to congenitally and early blind children learning braille in primary school.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What rule does this course apply to every source in its bibliographies?",
            options: [
              "Flag whether a blind person or blind-led organisation wrote it",
              "Require that two independent publications carry the same claim before it may be printed",
              "Prefer sources published after 2000, because older accounts reflect superseded attitudes",
              "Exclude anything published by an advocacy organisation on either side of a dispute",
            ],
            correctIndex: 0,
            explanation:
              "Section 6 turns on two blind-led organisations disagreeing in public, and there is no honest way to teach that argument without saying whose account a reader is looking at.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which is the least obvious of the three costs lesson 1 names?",
            options: [
              "Not noticing the questions a blind reader would ask",
              "Relying on a written record made mostly by sighted superintendents, doctors and printers",
              "Being unable to check a claim about touch reading against the author's own hands",
              "Depending on sources that are themselves published by partisan advocacy organisations",
            ],
            correctIndex: 0,
            explanation:
              "The lesson calls it least obvious precisely because an absence of that kind never shows up as an error you can point at.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Who made most of the written record this course draws on, according to lesson 1?",
            options: [
              "Sighted officials and professionals",
              "Blind alumni associations that kept minutes of their own conventions and reunions",
              "Federal statisticians compiling registry data on reading media in schools",
              "Publishers and printers who had a commercial interest in one code winning",
            ],
            correctIndex: 0,
            explanation:
              "Superintendents, doctors, printers, legislators and, much later, engineers. That angle is inherited by any course built from the record even when every individual fact is true.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does lesson 1 say a learner should treat their finished knowledge as?",
            options: [
              "Knowledge about the code, not of reading it",
              "A working transcriber's competence that still needs certification before professional use",
              "Equivalent to a sighted teacher's classroom qualification in the code",
              "Provisional until a blind reviewer has corrected the specific claims they remember",
            ],
            correctIndex: 0,
            explanation:
              "Everything a learner takes from this course is learned by sight, and sighted knowledge of braille is a genuinely different thing from reading it by touch.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Where does lesson 1 point a reader for the part the course cannot do?",
            options: [
              "To blind teachers and blind-led organisations",
              "To the datasets and corpora the course consulted while it was being researched",
              "To the Unicode Braille Patterns block and any refreshable display that renders it",
              "To the transcription houses that produce contracted braille under the current code",
            ],
            correctIndex: 0,
            explanation:
              "The course names the two largest United States organisations of blind people in Section 6 and says what they disagree about, so a reader can consult both rather than either.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What did participants in the Bola study do before any braille letters were introduced?",
            options: [
              "Tactile discrimination exercises",
              "A written examination on the history and structure of the Polish braille code",
              "Six weeks of learning the print alphabet blindfolded to simulate sight loss",
              "Daily listening practice with audio recordings to build phonological awareness",
            ],
            correctIndex: 0,
            explanation:
              "The course ran in stages: tactile discrimination exercises first, then half the alphabet, then the remaining letters.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "This course's sourcing rule is summarised in one phrase. Which?",
            options: [
              "Fetch-or-do-not-cite",
              "Two independent sources or the claim does not appear in any lesson body",
              "Primary sources only, with secondary summaries excluded from every bibliography",
              "Cite generously and mark anything unconfirmed with a visible confidence percentage",
            ],
            correctIndex: 0,
            explanation:
              "No identifier appears in a bibliography here unless the authoring pass actually retrieved and read what it points to. A wrong identifier is worse than a missing one.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What is a blind-led organisation, as this course uses the term?",
            options: [
              "One run by blind people themselves",
              "One whose services are delivered exclusively to blind and low-vision beneficiaries",
              "One that employs a majority of blind staff in its professional and technical roles",
              "One certified by a federal agency as representing blind people in policy consultations",
            ],
            correctIndex: 0,
            explanation:
              "Run by blind people rather than on their behalf, a distinction Section 6 shows is itself contested among the organisations that claim it.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Why does the course print the Bola study's speed figure rather than paraphrasing it?",
            options: [
              "Because the claim needs evidence",
              "Because the authors asked that the number be reproduced whenever the study is cited",
              "Because six words per minute is the threshold used to certify braille literacy",
              "Because paraphrase would breach the licence the paper is published under",
            ],
            correctIndex: 0,
            explanation:
              "\"A web page cannot teach tactile reading\" is a claim rather than a disclaimer, and a claim in this catalog carries its evidence.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which describes the standpoint rule this course follows?",
            options: [
              "Stated, not implied",
              "Disclosed to reviewers during editing but kept out of learner-facing text",
              "Established by listing the author's qualifications at the end of the final lesson",
              "Handled by avoiding first-person statements so the text reads as neutral",
            ],
            correctIndex: 0,
            explanation:
              "It is in the first lesson and above the fold in the description, because a standpoint a reader has to infer cannot be checked.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "How many dot positions does a standard braille cell have?",
            options: [
              "Six",
              "Eight, arranged four across and two down, as used on refreshable displays",
              "Nine, which allows a single cell to carry both a letter and a capital marker",
              "Four, with a variable base that widens the cell for less frequent letters",
            ],
            correctIndex: 0,
            explanation:
              "Six positions, two across and three down. Eight-dot variants exist in computer braille and on displays, but the standard cell is six.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "How many patterns does a six-dot cell allow, counting the empty cell?",
            options: [
              "Sixty-four",
              "Two hundred and fifty-six, which is why braille can carry the full print character set",
              "Twenty-six, one for each letter of the English alphabet with no room for punctuation",
              "Sixty-three, since a cell with no raised dots cannot be read as a character",
            ],
            correctIndex: 0,
            explanation:
              "Six positions that are each raised or flat give sixty-four patterns including the empty cell. Two hundred and fifty-six is the eight-dot figure.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Is braille a language?",
            options: [
              "No, it is a code",
              "Yes, it is a distinct written language with a grammar independent of print English",
              "Yes, in the same sense that American Sign Language is a language rather than a code",
              "Only in its contracted form, where the contractions function as an independent vocabulary",
            ],
            correctIndex: 0,
            explanation:
              "It encodes an existing print language into dots. English braille, French braille, the mathematics code and the music code are each a code for their own print system.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Why does teaching the braille code cover most of what the code is, while teaching the ASL manual alphabet covers almost none of ASL?",
            options: [
              "Because ASL is a language and braille is a code",
              "Because the manual alphabet was invented separately from the rest of ASL vocabulary",
              "Because braille has fewer characters than ASL has signs, so it can be taught faster",
              "Because ASL changes generation to generation while braille codes are fixed by committee",
            ],
            correctIndex: 0,
            explanation:
              "ASL has a grammar of its own that is not English; the manual alphabet is a fragment of it. Braille is print rendered in dots, so the code is most of the thing.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What does uncontracted braille do?",
            options: [
              "Spells every word out",
              "Uses a reduced character set so that beginners meet fewer patterns in their first year",
              "Prints one cell per syllable rather than one cell per printed character",
              "Omits punctuation and capital markers to save space in embossed volumes",
            ],
            correctIndex: 0,
            explanation:
              "One cell per print character, historically called grade 1. Contracted braille adds contractions and short forms and is what published books use.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Why does contracted braille exist at all?",
            options: [
              "Paper braille is bulky",
              "Because transcribers are paid by the cell and contractions reduce production costs",
              "Because the six-dot cell cannot represent every English letter without doubling up",
              "Because contractions were required by the treaty that unified British and American codes",
            ],
            correctIndex: 0,
            explanation:
              "Compactness has always been the constraint on embossed books, and a single cell standing for a whole word is a large saving over a long text.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What are the older names for uncontracted and contracted braille?",
            options: [
              "Grade 1 and grade 2",
              "Boston line letter and New York Point, after the schools that promoted each",
              "Literary braille and technical braille, after the material each was designed for",
              "Standard Dot and Revised braille, the two systems the uniform type committees proposed",
            ],
            correctIndex: 0,
            explanation:
              "Grade 1 is uncontracted and grade 2 is contracted. Both older names are still in wide use.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What did the ICEB General Assembly do in April 2004?",
            options: [
              "Declared UEB substantially complete",
              "Voted to require every member country to implement UEB within a fixed five-year window",
              "Rejected the first draft of UEB and returned it to the research project for revision",
              "Merged the literary and mathematics codes into a single notation for all member countries",
            ],
            correctIndex: 0,
            explanation:
              "It declared Unified English Braille substantially complete, recognisable as an international standard, and available for adoption by individual countries. Adoption stayed a national decision.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "On what date did the United States members of BANA vote to adopt Unified English Braille?",
            options: [
              "2 November 2012",
              "4 January 2016, chosen to fall on the two hundred and seventh birthday of Louis Braille",
              "9 November 2014, when the board approved its published implementation statement",
              "In April 2004, immediately after the ICEB General Assembly declared the code complete",
            ],
            correctIndex: 0,
            explanation:
              "The vote was 2 November 2012. January 2016 was the implementation date, November 2014 was the board statement, and April 2004 was the ICEB declaration.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What did UEB replace in the United States?",
            options: [
              "English Braille American Edition",
              "New York Point, which had held the federal printing appropriation since the 1870s",
              "The Nemeth Code, which was retired from mathematics teaching at the same time",
              "Revised braille grade one and a half, which American publishers had used since 1918",
            ],
            correctIndex: 0,
            explanation:
              "The motion was to adopt UEB in place of English Braille American Edition. New York Point and grade one and a half had been superseded decades earlier.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What date did BANA set for United States implementation of UEB?",
            options: [
              "4 January 2016",
              "2 November 2012, the day the motion adopting the code passed decisively",
              "1 July 2013, the start of the announced information year in the transition plan",
              "9 November 2014, when the board approved the four-phase implementation statement",
            ],
            correctIndex: 0,
            explanation:
              "BANA established 4 January 2016 as the date by which the United States would implement UEB, after planning involving more than thirty organisations.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What were BANA's four announced transition phases, in order?",
            options: [
              "Information, infrastructure, instruction, implementation",
              "Consultation, ratification, procurement and finally a two-year grace period for schools",
              "Research, balloting, publication and then withdrawal of the superseded code",
              "Training, testing, certification and finally re-transcription of the existing collection",
            ],
            correctIndex: 0,
            explanation:
              "2013 information, 2014 infrastructure, 2015 instruction, 2016 implementation, each named in BANA's own published statement.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "How many contractions did the move to UEB eliminate?",
            options: [
              "Nine",
              "Sixty-four, one for every pattern the six-dot cell can form",
              "None, since UEB kept the entire contraction set of English Braille American Edition",
              "Seventeen, matching the number of member organisations then sitting on the BANA board",
            ],
            correctIndex: 0,
            explanation:
              "BANA's press release says nine contractions would be eliminated and that some remaining contractions would be used more often. Letters and numbers were unchanged.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What did BANA's UEB motion expressly retain for the United States?",
            options: [
              "The Nemeth Code",
              "English Braille American Edition, for any book already stereotyped before the vote",
              "New York Point, for readers who had learned no other system in childhood",
              "The right of individual states to continue teaching the superseded literary code",
            ],
            correctIndex: 0,
            explanation:
              "The motion specified that the United States would retain the Nemeth Code for Mathematics and Science Notation, which is why American technical braille still differs from British.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "After implementation, what were the four official braille codes of the United States?",
            options: [
              "UEB, Nemeth, Music and IPA",
              "UEB alone, since the point of unification was to end the use of parallel codes",
              "UEB, English Braille American Edition, Nemeth and the Music Braille Code",
              "UEB, Nemeth, New York Point and the Computer Braille Code of 1987",
            ],
            correctIndex: 0,
            explanation:
              "Unified English Braille, the Nemeth Code in its 1972 revision, the Music Braille Code of 1997 and the IPA Braille Code of 2008.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What follows for a braille reader sitting in an American mathematics class?",
            options: [
              "They read a different code from a British reader",
              "They read the same technical notation a British reader does, because UEB unified both",
              "They must learn eight-dot computer braille before any equation can be transcribed",
              "They read uncontracted braille only, since contractions are barred in technical material",
            ],
            correctIndex: 0,
            explanation:
              "Because the United States retained Nemeth rather than switching to UEB technical notation, any claim that English-language braille was unified has to carry that exception.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What does the Library of Congress note about the date its National Library Service took up UEB?",
            options: [
              "It was Louis Braille's two hundred and seventh birthday",
              "It was the first working day after the four-phase transition plan formally expired",
              "It was chosen to coincide with the start of the American academic spring semester",
              "It was the anniversary of the Pratt-Smoot Act, which created the service in 1931",
            ],
            correctIndex: 0,
            explanation:
              "NLS records taking up UEB on 4 January 2016 and names the day as the two hundred and seventh birthday of Louis Braille.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Which Unicode block holds braille?",
            options: [
              "U+2800 to U+28FF",
              "U+1F600 to U+1F64F, shared with the emoticon and symbol ranges",
              "U+0041 to U+005A, mapped directly onto the Latin capital letters it encodes",
              "U+2800 to U+2863, one code point for each of the sixty-four six-dot patterns",
            ],
            correctIndex: 0,
            explanation:
              "The Braille Patterns block runs U+2800 to U+28FF in the Unicode Character Database, covering the eight-dot range rather than only the sixty-four six-dot patterns.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Why does it matter whether braille in a document is Unicode text or a picture of dots?",
            options: [
              "A display can drive text and cannot drive an image",
              "Because pictures of dots cannot reproduce the eight-dot cell used in computer braille",
              "Because image files are too large to transmit over the download services libraries run",
              "Because copyright law treats an image of a page differently from the text it reproduces",
            ],
            correctIndex: 0,
            explanation:
              "A refreshable braille display renders text. An image of dots reaches a sighted reader's eye and never reaches a reader's hands.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "How many patterns does an eight-dot cell allow?",
            options: [
              "Two hundred and fifty-six",
              "Sixty-four, the same as the six-dot cell, with the extra dots used only for emphasis",
              "One hundred and twenty-eight, since the eighth dot is reserved as a cursor marker",
              "Sixty-three, because the empty cell is not a usable character in computer braille",
            ],
            correctIndex: 0,
            explanation:
              "Eight positions each raised or flat give two hundred and fifty-six patterns, which is why computer braille and refreshable displays use the eight-dot variant.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Which of these is NOT a separate language, on this lesson's account?",
            options: [
              "French braille",
              "American Sign Language, which has a grammar that is not English grammar",
              "British Sign Language, which is not mutually intelligible with American Sign Language",
              "Arabic, when written in the Arabic script rather than in embossed dots",
            ],
            correctIndex: 0,
            explanation:
              "French braille is a code for printed French. The signed languages named are natural languages, and Arabic is a language whatever script carries it.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Where does this course say the real gap is, given that the braille code is teachable in text?",
            options: [
              "In the fingers, the schools, the archives and the law",
              "In the contraction rules, which no published account has ever set out completely",
              "In the eight-dot variants, which no course covers because displays differ by manufacturer",
              "In the vocabulary, since contracted braille has short forms print English lacks",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is the map of the whole course: tactile reading it cannot teach, then the schools, the record and the statutes, which are what the remaining sections cover.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Which body declared UEB substantially complete?",
            options: [
              "The International Council on English Braille",
              "The Braille Authority of North America, at its board meeting of 9 November 2014",
              "The Library of Congress, through its National Library Service for the Blind",
              "The American Printing House for the Blind, which prints the codes it recommends",
            ],
            correctIndex: 0,
            explanation:
              "The ICEB General Assembly, in April 2004. BANA is the North American body, and it voted separately in 2012.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What is the relationship between the ICEB declaration and national adoption?",
            options: [
              "Adoption stayed a national decision",
              "The declaration bound every member country to adopt the code within two years",
              "Adoption required a further vote of the WIPO assembly before it took legal effect",
              "The declaration adopted the code, and national bodies only set implementation dates",
            ],
            correctIndex: 0,
            explanation:
              "The ICEB said the code could be recognised as an international standard and considered for adoption by individual countries, which is why the United States needed its own vote in 2012.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What kind of course does lesson 1 say this is, given what it will not teach?",
            options: [
              "History, the code, the law and the records",
              "A transcription course that prepares a learner for professional certification",
              "A rehabilitation curriculum for adults who have recently lost their sight",
              "A software engineering course about rendering braille on refreshable displays",
            ],
            correctIndex: 0,
            explanation:
              "It teaches the code as a rule system plus the history, the schools, the credit and the statutes, and says in its first lesson that it does not train a fingertip.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does lesson 1 say about the argument in Section 3 specifically?",
            options: [
              "Almost every decision-maker in it was sighted",
              "It is the only section in the course where no primary source could be retrieved",
              "It concerns a dispute among blind readers about which contractions to keep",
              "It was settled by a federal court rather than by the schools themselves",
            ],
            correctIndex: 0,
            explanation:
              "A sixty-year argument over a writing system, decided overwhelmingly by sighted administrators, and recorded by the same people, which is the standpoint problem made concrete.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Which is true of the codes braille comes in?",
            options: [
              "Each encodes its own print system",
              "They descend from one another the way spoken languages descend from a common ancestor",
              "They are mutually unintelligible in the way two signed languages can be",
              "There is only one, since Unified English Braille absorbed the others in 2016",
            ],
            correctIndex: 0,
            explanation:
              "English braille, French braille, Arabic braille, mathematics, music and the IPA code are each codes for their own print system, not separate languages.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "How does this course describe sighted knowledge of braille?",
            options: [
              "Real knowledge, and a different thing from reading by touch",
              "Worthless, because anything not learned through the fingers misrepresents the code",
              "Sufficient for teaching braille to a blind child provided the teacher is certified",
              "Identical to tactile knowledge, since the code is the same in both cases",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names this as a failure mode the course itself feeds, and asks a learner to hold what they finish with as knowledge about the code.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What were the Bola study's participants, by background?",
            options: [
              "Braille teachers, students and relatives of blind people",
              "Undergraduate psychology volunteers recruited for course credit at a single university",
              "Adults with diagnosed low vision who had never previously been offered braille",
              "Professional transcribers already fluent in the code by sight before the study began",
            ],
            correctIndex: 0,
            explanation:
              "The paper describes them as braille teachers, special education students, or relatives of blind individuals, which is why they were willing to commit nine months.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "Why does lesson 1 name the failure mode of a screen-based braille course?",
            options: [
              "Because the course itself feeds it",
              "Because the study it cites identified the same effect in its own participants",
              "Because certification bodies require the warning on any online braille material",
              "Because a blind reviewer asked for it during the course's editorial review",
            ],
            correctIndex: 0,
            explanation:
              "Everything a learner takes from this course is learned by sight, so the course states the limit rather than leaving a reader to discover it.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What is the constraint that has always shaped embossed books?",
            options: [
              "Bulk",
              "The number of transcribers qualified to work in the current literary code",
              "The sixty-four patterns available in the six-dot cell, which limits the character set",
              "Copyright, which until 1996 barred any accessible copy without the publisher's consent",
            ],
            correctIndex: 0,
            explanation:
              "Paper braille takes a great deal of space, which is why contracted braille exists and why every space-saving argument in the standards war carried weight.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Which pairing correctly matches a date to its event?",
            options: [
              "2012, BANA votes to adopt UEB",
              "2004, the United States implements Unified English Braille nationwide",
              "2016, the ICEB General Assembly declares UEB substantially complete",
              "2014, the United States members of BANA vote to replace English Braille American Edition",
            ],
            correctIndex: 0,
            explanation:
              "The vote was 2 November 2012. April 2004 was the ICEB declaration, 4 January 2016 was implementation, and 9 November 2014 was the board statement about implementation.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Which claim about braille would this course call an error of framing rather than a detail?",
            options: [
              "That braille is a language",
              "That contracted braille is harder to learn than uncontracted braille",
              "That the Nemeth Code covers mathematics and science notation in the United States",
              "That refreshable displays commonly use an eight-dot rather than a six-dot cell",
            ],
            correctIndex: 0,
            explanation:
              "Calling a code a language reverses the whole argument of the course, because it implies the interesting material is in the dots rather than in the schools, the record and the law.",
            sourceLessonSlug: "a-code-not-a-language",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Where the code came from, and a myth made for a book
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-story-that-was-made-up",
      title: "3 · The origin story that turned out to be made up",
      section: "Section 2 · Where the code came from, and a myth made for a book",
      body: `Here is the story almost everyone has heard. An artillery officer named Charles Barbier invented "night writing", a raised-dot code so that soldiers could read orders in the dark without striking a light. He brought it to the school for blind children in Paris. His twelve-dot cell was too large for a fingertip. A blind student called Louis Braille cut it down to six dots and published his own system in 1829.

**Most of the memorable part of that is not true, and how it became true is the lesson.** Philippa Campsie, an independent scholar, published "Charles Barbier: A hidden story" in *Disability Studies Quarterly* in 2021, working from Barbier's correspondence and publications. Her findings, in the article's own summary, are four: the method that inspired Louis Braille **was never intended for the military** but was specifically designed for blind people; Barbier **did not demonstrate it** at the Institution Royale des Jeunes Aveugles; it was **not used at the school in a phonetic version**; and Barbier and Braille **met only after Braille had published his own system**.

**Where the false version came from is named, which is what makes this a records story rather than a correction.** Campsie's summary identifies two accounts as the source of the distortion: one by Alexandre-Rene Pignier published in **1859**, which misrepresented the relationship between Braille and Barbier, and one by Pierre Henri published in **1952**, which *hypothesised* how Barbier might have developed his ideas and introduced them to the school in Paris. A hypothesis in a 1952 book became a fact in seventy years of children's books, museum labels and encyclopaedia entries. Nobody had to lie. Somebody had to speculate in print, and everybody after that had to copy.

**What the correction cost, in archive terms.** Campsie's evidence includes a collection of Barbier's papers donated in 2001 to the museum at the Association Valentin Hauy in Paris, together with his own publications now digitised. So the correction waited on a donation and a scanning project, which is how most corrections wait.

**And note which way this correction runs.** It takes credit *away* from a myth about a soldier's military ingenuity and gives it back to a real man who was designing for blind readers on purpose. Barbier (1767 to 1841) invented raised-point writing and the tools for making it, and is remembered today only as a precursor. A course that only ever found errors running in one direction would not be doing history.

**How this course knows what it knows here, stated because the rule requires it.** The full text of Campsie's article could not be retrieved by this authoring pass: the journal's site returned a challenge page to an automated reader. What is printed above is the article's own abstract as indexed by the Directory of Open Access Journals, plus an independent summary published by the American Council of the Blind, a membership organisation of blind people, written by Judy Dixon under the title "Have we had it wrong all these years?" Both were read. The article itself was not, and that is a limit on this lesson rather than a footnote.

**One claim this course refuses to teach.** It is widely repeated that the Paris school suppressed braille after Braille's own time there, with a director banning it and books burned. This pass could not confirm any of that against a primary source, so the lesson does not assert it. An unverifiable anecdote that flatters the story is exactly the kind of thing this catalog exists to refuse.

:::reveal What are the four findings Campsie's article summarises about Barbier? ||| That the method inspiring Braille was designed for blind people rather than for the military; that Barbier did not demonstrate it at the Paris school; that it was not used there in a phonetic version; and that Barbier and Braille met only after Braille had published his own system.

:::reveal Which two publications does Campsie's summary name as the source of the distorted story, and what did each do? ||| Pignier in 1859, which misrepresented the relationship between Braille and Barbier, and Pierre Henri in 1952, which hypothesised how Barbier might have developed his ideas and brought them to the school.

:::reveal Why does this lesson say the Barbier correction runs the opposite way from most of this course? ||| Because it takes credit away from a myth about military inventiveness and returns it to a man who was in fact designing for blind readers, rather than restoring credit to a blind person the record dropped.

## Vocabulary
- **Night writing**: the raised-dot military code Barbier is popularly credited with, which Campsie's evidence says was not the method that inspired Braille.
- **Institution Royale des Jeunes Aveugles**: the Paris school for blind youth, where the popular story places a demonstration that Campsie's evidence says did not happen.
- **Hypothesis hardened into fact**: the mechanism this lesson names, where a 1952 speculation is repeated until later writers cite it as established.
- **Directory of Open Access Journals**: the index this course read the Campsie abstract in, because the journal itself refused an automated reader.
- **Correction that runs the other way**: an archival finding that removes credit from a myth instead of restoring it to someone the record dropped.

## Sources
Campsie, P. (2021). Charles Barbier: A hidden story. *Disability Studies Quarterly, 41*(2). https://doi.org/10.18061/dsq.v41i2.7499 (Abstract and metadata read via the Directory of Open Access Journals; the full text was not retrievable in this pass.)
Dixon, J. (n.d.). *Have we had it wrong all these years?* American Council of the Blind. https://www.acb.org/have-we-had-it-wrong-all-these-years (Published by a membership organisation of blind people.)`,
    },
    {
      slug: "how-the-code-reached-america",
      title: "4 · How the code reached America, and why nobody wanted it",
      section: "Section 2 · Where the code came from, and a myth made for a book",
      body: `Louis Braille published an exposition of his dot system in 1829. What happened next in the United States is the single most useful fact in this course, and it is not a story about dots.

**The source for this section, and why its author matters.** Robert B. Irwin's *As I Saw It* (American Foundation for the Blind, 1955) is the first-hand account the later histories all draw on. AFB's own record of its history says Irwin was blind from the age of five and that the Foundation hired him as its first executive director in 1923. So the standard account of this fight was written by a blind man who was inside it, which is unusual enough in this material to be worth saying out loud.

**The three mother schools chose print letters, and Irwin records exactly why.** In the early 1830s schools for blind children were founded in Boston, New York and Philadelphia. All three used embossed Roman letters, more or less simplified to make them easier to feel. Irwin's sentence about the reason is the thesis of the whole section: their virtue as against arbitrary codes "seemed to be that they could be read by sight by the seeing teachers with no special instruction." A second argument was recorded alongside it, that using a type similar to that of sighted associates set blind people "less apart from the rest of the world."

**Read the first reason again.** The first American standard for how blind people would read was selected because it was convenient for the staff. Not because it was faster to read by touch, and not because blind readers preferred it. Embossed Roman letters are hard to feel and, as Irwin notes, it was not practical for a blind person to write them at all, whether smooth or dotted.

**Braille arrived, and stalled.** When Braille published in 1829 his system "had no official standing anywhere", and Irwin says it is not clear the earliest American pioneers knew anything about it. In **1860** Dr Simon Pollak, a member of the board of the Missouri School for the Blind who had seen the system in use in Europe, brought it back and had it officially adopted at that school. Outside Missouri it went nowhere. In some schools, notably in Illinois, blind pupils used it privately for their own purposes, and Irwin records the consequence in one clause: the appliances for writing it "were confiscated by the school authorities."

**The man who noticed the problem was a superintendent, and he tried braille first.** In the early 1860s William Bell Wait, a teacher and superintendent at the New York Institution for the Blind, saw that a considerable portion of blind children had great difficulty learning to read embossed Roman letters and that a still higher percentage of people blinded in adult life could not learn to read them at all. Wait's first move was not to invent anything. He asked the heads of the Boston and Philadelphia schools to join him in replacing Roman letters with Braille's code, which was already working in Missouri. He got no encouragement. Only then did he set about building a dot code he believed would beat braille, and published it in 1868.

**So the sixty-year war that follows begins with a refusal.** Braille had been in print since 1829 and in use at an American school since 1860, and a superintendent who wanted to adopt it was turned down by his colleagues. Everything in Section 3 is downstream of that.

:::reveal What reason does Irwin give for the American schools choosing embossed Roman letters in the 1830s? ||| That they could be read by sight by the seeing teachers with no special instruction, with a second argument that a type resembling sighted people's set blind people less apart from the rest of the world.

:::reveal How did braille first reach an American school, and what happened to it elsewhere? ||| Dr Simon Pollak, a board member of the Missouri School for the Blind, brought it from Europe in 1860 and had it adopted there. Outside Missouri it made almost no progress, and in some schools pupils' writing appliances were confiscated.

:::reveal What did William Bell Wait try before he invented New York Point? ||| He asked the heads of the Boston and Philadelphia schools to join him in replacing embossed Roman letters with Braille's code, and got no encouragement from them.

## Vocabulary
- **Embossed Roman letters**: raised print letters, simplified for touch, the first official reading type of the American schools; Boston line type is the Perkins version of it.
- **Mother schools**: the three institutions founded in Boston, New York and Philadelphia in the early 1830s, whose choices set the American standard.
- **No official standing**: Irwin's description of braille's position when Braille published in 1829, which is why an American adoption needed a champion rather than a rule.
- **Confiscation**: what Irwin records happening to pupils' braille writing appliances in schools where the official type was something else.
- **As I Saw It**: Irwin's 1955 first-hand account, the source most later histories of this fight draw on, written by a man blind from the age of five.

## Sources
Irwin, R. B. (1955). *As I saw it*. American Foundation for the Blind. (Chapter "War of the Dots" read in full via the New York Institute for Special Education's archive: https://www.nyise.org/apps/pages/index.jsp?uREC_ID=438103&type=d&pREC_ID=948716 . Irwin was blind from the age of five.)
American Foundation for the Blind. (n.d.). *Our history*. https://afb.org/afb100/our-history`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The myth, and how the code reached America",
      section: "Section 2 · Where the code came from, and a myth made for a book",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "According to Campsie's article, who was the method that inspired Louis Braille designed for?",
            options: [
              "Blind people",
              "Soldiers, so that orders could be read at night without striking a light",
              "Naval signallers working below deck where lamps were forbidden",
              "Teachers at the Paris school, as a shorthand for recording lessons quickly",
            ],
            correctIndex: 0,
            explanation:
              "The article's first finding is that the method was never intended for the military but was specifically designed for blind people, which is the exact opposite of the popular story.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What does Campsie's article conclude about Barbier demonstrating his method at the Paris school?",
            options: [
              "He did not demonstrate it there",
              "He demonstrated it twice, in 1821 and again after Braille had published his own system",
              "He demonstrated it to the director but not to the students, who learned it secondhand",
              "He demonstrated a phonetic version that the school then used for several years",
            ],
            correctIndex: 0,
            explanation:
              "The second finding is that Barbier did not demonstrate it at the Institution Royale des Jeunes Aveugles, and the third is that it was not used at the school in a phonetic version.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "When did Barbier and Braille meet, on Campsie's account?",
            options: [
              "After Braille had published his own system",
              "In 1821, when Barbier first brought his twelve-dot cell to the school in Paris",
              "They never met, and corresponded only through the school's director",
              "Before 1829, during the several years Braille spent adapting the larger cell",
            ],
            correctIndex: 0,
            explanation:
              "The fourth finding is that they met only after Braille had published his own system, which removes the mentorship the popular story depends on.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Which two published accounts does Campsie's summary identify as the source of the distorted story?",
            options: [
              "Pignier in 1859 and Pierre Henri in 1952",
              "Irwin in 1955 and the American Printing House's centenary history of 1958",
              "Two encyclopaedia entries published in Paris in 1841 and in London in 1868",
              "Barbier's own publications, which overstated what he had shown at the school",
            ],
            correctIndex: 0,
            explanation:
              "Pignier's 1859 account misrepresented the relationship between Braille and Barbier; Pierre Henri's 1952 account hypothesised how Barbier might have developed his ideas and introduced them at the school.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What did Pierre Henri's 1952 account actually do, as Campsie's summary describes it?",
            options: [
              "Hypothesised how Barbier might have developed his ideas",
              "Fabricated a demonstration at the Paris school that no witness had recorded",
              "Reported an interview with a descendant of Barbier who had kept the family papers",
              "Translated Barbier's own military correspondence into French for the first time",
            ],
            correctIndex: 0,
            explanation:
              "It was a hypothesis. Nobody had to lie for the myth to spread; somebody had to speculate in print, and later writers had to copy.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "In what year was Campsie's article published?",
            options: [
              "2021",
              "2001, the same year Barbier's papers were donated to the museum in Paris",
              "1952, when the account she corrects was first published",
              "1955, alongside the American first-hand history of the standards war",
            ],
            correctIndex: 0,
            explanation:
              "It appeared in Disability Studies Quarterly in 2021. 2001 is the donation of the papers, 1952 is Pierre Henri's account, and 1955 is Irwin's book.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "In which journal did Campsie's article appear?",
            options: [
              "Disability Studies Quarterly",
              "The Journal of Visual Impairment and Blindness, the field's research journal of record",
              "PLOS ONE, which also published the study of sighted adults learning tactile reading",
              "The Braille Monitor, which is published by a membership organisation of blind people",
            ],
            correctIndex: 0,
            explanation:
              "A disability studies journal rather than a general history one, which is part of why the correction has been slow to reach the popular accounts.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What archival event made Campsie's correction possible?",
            options: [
              "A donation of Barbier's papers in 2001",
              "The declassification of French artillery records held by the Ministry of War",
              "The reopening of the Paris school's own nineteenth-century enrolment registers",
              "A transcription project that put Braille's 1829 exposition online in facsimile",
            ],
            correctIndex: 0,
            explanation:
              "A collection of Barbier's papers was donated in 2001 to the museum at the Association Valentin Hauy in Paris, alongside his own now-digitised publications.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Which organisation published Judy Dixon's summary of the Campsie findings?",
            options: [
              "The American Council of the Blind",
              "The American Printing House for the Blind, which prints the codes it recommends",
              "The Braille Authority of North America, in its November 2012 press release",
              "The Library of Congress, through its National Library Service",
            ],
            correctIndex: 0,
            explanation:
              "The ACB, a membership organisation of blind people, published it under the title \"Have we had it wrong all these years?\". This course flags who published a source because that is its rule.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Why does this course print Campsie's findings from an abstract rather than from the article?",
            options: [
              "The journal refused an automated reader",
              "The article is paywalled and the catalog will not pay for a single source",
              "The abstract is more precise than the article body, which hedges its four findings",
              "The author asked that the article not be quoted in commercial teaching material",
            ],
            correctIndex: 0,
            explanation:
              "The journal site returned a challenge page, so the pass read the abstract as indexed by the Directory of Open Access Journals and an independent summary. The lesson says so rather than hiding it.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What widely repeated claim does this course refuse to teach?",
            options: [
              "That the Paris school banned braille and burned books",
              "That Barbier's cell was twelve dots and too large for a fingertip to read",
              "That Louis Braille published his system in 1829 while still a student",
              "That the method that inspired Braille was designed for blind readers",
            ],
            correctIndex: 0,
            explanation:
              "The suppression and book-burning story could not be confirmed against a primary source in this pass, so the lesson does not assert it. An unverifiable anecdote that flatters the story is exactly what this catalog refuses.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Which direction does the Barbier correction run, compared with the rest of this course?",
            options: [
              "It removes credit from a myth",
              "It restores credit to a blind inventor the record had dropped entirely",
              "It shows a sighted engineer taking a patent on a blind colleague's design",
              "It shows a blind person's private notation becoming a national standard",
            ],
            correctIndex: 0,
            explanation:
              "It takes credit away from a story about military inventiveness and returns it to a man who was in fact designing for blind readers. A course that only found errors running one way would not be doing history.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What is Barbier remembered as today, according to the summary this lesson quotes?",
            options: [
              "Only as a precursor of Louis Braille",
              "As the inventor of the code adopted by the French army during the Napoleonic wars",
              "As the director of the Paris school who introduced dot writing to its curriculum",
              "As a critic of Braille who campaigned against the six-dot cell until his death",
            ],
            correctIndex: 0,
            explanation:
              "Barbier, who lived from 1767 to 1841, invented raised-point writing and the tools for making it, and survives in the record only as a precursor.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "How does this lesson describe the way most archival corrections arrive?",
            options: [
              "Waiting on a donation and a scanning project",
              "Emerging when a new generation of scholars rereads the same published books",
              "Following a legal dispute that forces an institution to open its holdings",
              "Appearing first in the popular press and only later in the scholarly literature",
            ],
            correctIndex: 0,
            explanation:
              "Campsie's evidence depended on papers donated in 2001 and on publications that had since been digitised, which is how most corrections wait.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What is Campsie's stated affiliation in the record this course read?",
            options: [
              "Independent scholar",
              "Professor of disability studies at the Ohio State University Libraries",
              "Archivist at the Association Valentin Hauy museum in Paris",
              "Research fellow at the Institution Royale des Jeunes Aveugles",
            ],
            correctIndex: 0,
            explanation:
              "The indexed record gives her affiliation as independent scholar, which is worth noting given the article's evidentiary weight.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "In what year did Louis Braille publish an exposition of his dot system?",
            options: [
              "1829",
              "1868, the year New York Point was published as a rival to it",
              "1860, when the system was first officially adopted at an American school",
              "1859, the year of the Pignier account that misdescribed his relationship with Barbier",
            ],
            correctIndex: 0,
            explanation:
              "1829. 1860 is Pollak and Missouri, 1868 is Wait publishing New York Point, and 1859 is the Pignier account.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What was braille's official standing anywhere in 1829, on Irwin's account?",
            options: [
              "None",
              "It was the official code of the Paris school and of two German institutions",
              "It was recommended by the French ministry of education but not yet compulsory",
              "It held the printing subsidy in France, which is why it spread there first",
            ],
            correctIndex: 0,
            explanation:
              "Irwin writes that the system had no official standing anywhere, and that it is not clear the earliest American pioneers knew anything about it.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Which three cities held the American mother schools founded in the early 1830s?",
            options: [
              "Boston, New York and Philadelphia",
              "Boston, Louisville and St Louis, following the routes of the earliest embossing presses",
              "New York, Philadelphia and Baltimore, the three cities with state appropriations",
              "Boston, New York and Louisville, where the federal printing house was later founded",
            ],
            correctIndex: 0,
            explanation:
              "Boston, New York and Philadelphia, all three of which adopted embossed Roman letters. Louisville is the American Printing House, founded later.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What reading type did those three schools adopt?",
            options: [
              "Embossed Roman letters",
              "New York Point, a two-dot-high code with a variable width to save space",
              "Braille, which had reached the United States with returning European visitors",
              "Moon type, which was easier for older readers with less sensitive fingertips",
            ],
            correctIndex: 0,
            explanation:
              "Embossed Roman letters, more or less simplified to make them easier to feel, which is what the European schools were using at the time.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What virtue does Irwin record for embossed Roman letters over arbitrary codes?",
            options: [
              "Sighted teachers could read them without training",
              "They were cheaper to produce because existing print type could be reused directly",
              "They could be written by a blind person with an ordinary stylus and frame",
              "They fitted more words on a page than any dot system then available",
            ],
            correctIndex: 0,
            explanation:
              "Irwin writes that their virtue \"seemed to be that they could be read by sight by the seeing teachers with no special instruction\". The first American reading standard was chosen for staff convenience.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What second argument for embossed Roman letters does Irwin record?",
            options: [
              "That it set blind people less apart",
              "That it prepared blind students to work alongside sighted printers in the trades",
              "That it allowed a blind reader to check a sighted person's spelling directly",
              "That it was the only type the federal appropriation would pay to emboss",
            ],
            correctIndex: 0,
            explanation:
              "It was contended that by using a type similar to that of their seeing associates, blind people were set less apart from the rest of the world.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What does Irwin say about a blind person writing embossed Roman letters?",
            options: [
              "It was not practical",
              "It required a special frame that only the Philadelphia school manufactured",
              "It was slower than dot writing but produced a page a sighted reader could check",
              "It was taught only to students who intended to become teachers themselves",
            ],
            correctIndex: 0,
            explanation:
              "Irwin notes it was not practical for blind people to write embossed Roman letters, whether smooth or dotted, which is a large defect in a system meant to make people literate.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Who brought braille to an American school, and in what year?",
            options: [
              "Simon Pollak, in 1860",
              "William Bell Wait, in 1868, after his colleagues refused to adopt it",
              "Robert B. Irwin, in 1923, when he became AFB's first executive director",
              "Joel W. Smith, in 1878, when he presented his modified version at a convention",
            ],
            correctIndex: 0,
            explanation:
              "Dr Simon Pollak, a member of the board of the Missouri School for the Blind who had seen the system in Europe, brought it back and had it officially adopted there.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Which American school first officially adopted braille?",
            options: [
              "The Missouri School for the Blind",
              "Perkins Institution in Boston, the oldest of the three mother schools",
              "The New York Institution for the Blind, where its superintendent championed it",
              "The Illinois School for the Blind, where pupils had been using it privately",
            ],
            correctIndex: 0,
            explanation:
              "Missouri, in 1860, at the instigation of Pollak. Illinois is where pupils used it unofficially and had their writing appliances confiscated.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What happened to braille writing appliances in schools where another type was official?",
            options: [
              "They were confiscated",
              "They were taxed at a rate set by the state boards that funded the schools",
              "They were permitted in dormitories but not in classrooms or examinations",
              "They were bought up by the printing house and reissued in the official code",
            ],
            correctIndex: 0,
            explanation:
              "Irwin records that braille was frowned upon as a heretical competitor of the orthodox New York Point, and that the appliances for writing it were confiscated by school authorities.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What did William Bell Wait observe about blind children and embossed Roman letters?",
            options: [
              "Many had great difficulty learning to read them",
              "They learned them faster than any dot code but forgot them within a year of leaving",
              "They preferred them because sighted family members could read the same books",
              "They could read them accurately but not write them, which he considered acceptable",
            ],
            correctIndex: 0,
            explanation:
              "He saw that a considerable portion of blind children had great difficulty with them and that a still higher percentage of people blinded in adult life could not learn to read them at all.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What did Wait do before inventing New York Point?",
            options: [
              "Asked other schools to adopt braille",
              "Published a study comparing reading speeds in Boston line type and braille",
              "Petitioned Congress for a printing appropriation to produce dot-code books",
              "Trained as a transcriber so that he could read both systems by touch himself",
            ],
            correctIndex: 0,
            explanation:
              "He asked the heads of the Boston and Philadelphia schools to join him in supplanting Roman letters with Braille's code, which was already in use in Missouri, and received no encouragement.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "In what year did Wait publish New York Point?",
            options: [
              "1868",
              "1878, the year Joel W. Smith presented his modified braille to the same association",
              "1871, when the American Association of Instructors of the Blind endorsed it",
              "1860, the year braille was adopted at the Missouri School for the Blind",
            ],
            correctIndex: 0,
            explanation:
              "1868. The endorsement by the instructors' association came in 1871 and Smith's modified braille in 1878.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Whose first-hand account is the standard source for the American standards war?",
            options: [
              "Robert B. Irwin's",
              "William Bell Wait's, written up in the proceedings of the instructors' association",
              "Helen Keller's, in the letter she sent to the New York Board of Education",
              "Simon Pollak's, in his report to the Missouri School board after his European tour",
            ],
            correctIndex: 0,
            explanation:
              "Irwin's As I Saw It, published by the American Foundation for the Blind in 1955, is the account the later histories draw on.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What does AFB's own history record about Robert B. Irwin?",
            options: [
              "Blind from the age of five, and AFB's first executive director",
              "A sighted printer who ran the Foundation's embossing plant before writing its history",
              "A superintendent of the Missouri School for the Blind who introduced braille there",
              "A British transcriber brought in to negotiate the 1932 agreement with America",
            ],
            correctIndex: 0,
            explanation:
              "AFB's record says he was blind since the age of five and that the Foundation hired him as its first executive director in 1923.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Why does this lesson say Irwin's own blindness is worth stating out loud?",
            options: [
              "Because a blind-authored account is rare in this material",
              "Because it disqualifies him from writing neutrally about a dispute he took part in",
              "Because it explains why he preferred New York Point to American braille",
              "Because the American Foundation for the Blind required it in the book's preface",
            ],
            correctIndex: 0,
            explanation:
              "The course's standing rule is to flag whether a blind person wrote a source, and in a record made overwhelmingly by sighted officials a blind first-hand account is unusual.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "How does this lesson summarise where the sixty-year war begins?",
            options: [
              "With a refusal",
              "With Wait's ambition to have a system carry his own name into history",
              "With the federal appropriation, which made the choice of code worth money",
              "With Louis Braille's death in 1852, after which nobody defended his system",
            ],
            correctIndex: 0,
            explanation:
              "Braille had been in print since 1829 and working at an American school since 1860, and the superintendent who wanted to adopt it was turned down by his colleagues.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Where does the standard story say Barbier's code came from?",
            options: [
              "The army",
              "A school for blind children in Lyon that Barbier visited as a young surveyor",
              "A printing house that needed a code its typesetters could read in poor light",
              "A competition run by the Paris school for a writing system blind pupils could use",
            ],
            correctIndex: 0,
            explanation:
              "The popular account has an artillery officer inventing night writing so soldiers could read orders in the dark. Campsie's evidence is that the method was designed for blind people.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "How many dots does the popular story attribute to Barbier's cell?",
            options: [
              "Twelve",
              "Six, which Braille then rearranged rather than reduced",
              "Eight, matching the cell used today on refreshable braille displays",
              "Sixty-four, one for each pattern the six-dot cell can produce",
            ],
            correctIndex: 0,
            explanation:
              "The standard account has a twelve-dot cell too large for a fingertip, which Braille cut to six. Sixty-four is the number of patterns a six-dot cell produces.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What did Pignier's 1859 account get wrong, on Campsie's summary?",
            options: [
              "The relationship between Braille and Barbier",
              "The number of dots in the cell Barbier had designed for military use",
              "The year in which Braille published his own exposition of the six-dot system",
              "Whether Barbier's papers had survived his death in 1841",
            ],
            correctIndex: 0,
            explanation:
              "The summary says Pignier misrepresented the relationship between Braille and Barbier, and that Pierre Henri later hypothesised the school demonstration.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "How long did the distorted version stand before the correction was published?",
            options: [
              "Roughly seventy years after the 1952 account",
              "Roughly twenty years, since the correction followed soon after the 2001 donation",
              "Roughly one hundred and sixty years, dating from Pignier's 1859 account",
              "Roughly a decade, because the digitised publications appeared only in 2011",
            ],
            correctIndex: 0,
            explanation:
              "Pierre Henri's hypothesis was published in 1952 and Campsie's article in 2021, which is the seventy years of children's books and museum labels the lesson describes.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What kind of institution held the papers that supported Campsie's correction?",
            options: [
              "A museum in Paris",
              "The French military archive at Vincennes, opened to researchers in 2001",
              "A private family collection sold at auction and dispersed among several buyers",
              "The Library of Congress, which had acquired them with its European purchases",
            ],
            correctIndex: 0,
            explanation:
              "The museum at the Association Valentin Hauy in Paris, which received the collection as a donation in 2001.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Which is a fair description of what this course does when a source cannot be retrieved?",
            options: [
              "Says which record it actually read",
              "Cites the source anyway, since the identifier is correct even if the text was not read",
              "Drops the material entirely, so that no partially-sourced claim reaches a learner",
              "Marks the claim with a numeric confidence score based on how often it is repeated",
            ],
            correctIndex: 0,
            explanation:
              "For the Campsie article the bibliography states that the abstract and metadata were read via DOAJ and that the full text was not retrievable, which is a limit rather than a footnote.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Which pairing correctly matches a year to its event?",
            options: [
              "1860, braille adopted at the Missouri School for the Blind",
              "1829, Simon Pollak brings braille back from Europe to the United States",
              "1868, Louis Braille publishes his exposition of the six-dot system",
              "1871, William Bell Wait publishes New York Point",
            ],
            correctIndex: 0,
            explanation:
              "1829 is Braille's publication, 1860 is Pollak and Missouri, 1868 is Wait publishing New York Point, and 1871 is the instructors' association endorsing it.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What did the schools outside Missouri do with braille between 1860 and the late 1860s?",
            options: [
              "Almost nothing",
              "Ran it in parallel with embossed Roman letters so that pupils could compare them",
              "Printed a small braille library from plates supplied by the Paris school",
              "Adopted it for music notation while keeping Roman letters for literary reading",
            ],
            correctIndex: 0,
            explanation:
              "Irwin says braille made little more progress outside Missouri than modified braille did outside Boston, and that where pupils used it privately their appliances were confiscated.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Who was harder hit by embossed Roman letters, on Wait's observation?",
            options: [
              "People blinded in adult life",
              "Children under ten, whose fingertips had not yet developed enough sensitivity",
              "Students in rural schools, where embossed books arrived years out of date",
              "Teachers, who had to learn a second type in order to mark written work",
            ],
            correctIndex: 0,
            explanation:
              "A still higher percentage of those blinded in adult life could not learn to read the type at all, which is what pushed Wait toward a dot code.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What position did Wait hold when he made that observation?",
            options: [
              "Teacher and superintendent in New York",
              "Board member of the Missouri School for the Blind, after a European study tour",
              "Executive director of the American Foundation for the Blind",
              "Superintendent of the Pennsylvania Institution in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "He was a teacher and then superintendent at the New York Institution for the Blind, as it was then called.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What does this course call the first American decision about how blind people would read?",
            options: [
              "A choice made for the staff",
              "A compromise between three schools with genuinely different reading evidence",
              "A federal decision imposed on the schools through the printing appropriation",
              "A decision made by blind alumni associations that the schools then ratified",
            ],
            correctIndex: 0,
            explanation:
              "Irwin's own sentence gives the reason as sighted teachers being able to read the type without special instruction, which is the thesis the rest of the course tests.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What does the phrase \"mother schools\" refer to here?",
            options: [
              "The three institutions founded in the early 1830s",
              "The European schools that trained the first American superintendents",
              "The schools that held seats on the American Printing House board of trustees",
              "The residential schools that survived the move to mainstreaming after 1975",
            ],
            correctIndex: 0,
            explanation:
              "Boston, New York and Philadelphia, whose choice of embossed Roman letters set the American standard for the next thirty years.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What does this lesson say a course that only found errors running one way would not be doing?",
            options: [
              "History",
              "Justice to the blind inventors whose names the record dropped",
              "Enough archival work to justify its own citations",
              "Its duty to the organisations that funded the research it draws on",
            ],
            correctIndex: 0,
            explanation:
              "The Barbier correction takes credit away from a myth rather than restoring it to someone erased, and the lesson keeps it precisely because it cuts against the course's own pattern.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What did Barbier invent, on the record this lesson cites?",
            options: [
              "Raised-point writing and the tools for making it",
              "The six-dot cell, which Braille then popularised without acknowledgement",
              "The slate and stylus still used for hand-writing braille today",
              "A phonetic alphabet that the Paris school taught alongside embossed letters",
            ],
            correctIndex: 0,
            explanation:
              "Barbier, 1767 to 1841, invented raised-point writing and the tools for creating it, and is remembered only as a precursor of Louis Braille.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Why does the journal in which the correction appeared matter to this lesson?",
            options: [
              "It is a disability studies journal, not a general history one",
              "It is published by the same body that indexes the abstract this course read",
              "It requires authors to work exclusively from digitised primary documents",
              "It is the only journal that had previously published the Pierre Henri account",
            ],
            correctIndex: 0,
            explanation:
              "Where a correction is published shapes how far it travels, and a finding in a specialist journal has a harder route into museum labels and children's books than the myth had.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "What kind of institution first officially adopted braille in the United States, and on whose initiative?",
            options: [
              "A state school, on a board member's initiative",
              "A federal printing house, under a congressional appropriation for embossed books",
              "A private academy in Boston, at the request of its blind alumni association",
              "A public library, which imported the first embossed volumes from Paris",
            ],
            correctIndex: 0,
            explanation:
              "Simon Pollak sat on the board of the Missouri School for the Blind, had seen the system in Europe, and caused it to be adopted there in 1860.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The War of the Dots
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-codes-and-one-printing-house",
      title: "5 · Four codes, and one printing house with the money",
      section: "Section 3 · The War of the Dots",
      body: `Between 1868 and 1918 the United States ran four competing tactile codes at once. This is the anatomy of that fight, and the reason it mattered is that one publisher held the federal money.

**New York Point, 1868.** William Bell Wait thought braille wasteful of space. His cell was two dots high and one to four dots wide, so a narrow letter used a narrow cell. That is a real saving. It also produced a defect Irwin records plainly: capitals were made by adding dots to widen a letter to four dots, which was so cumbersome that publishers almost never used them at all. The American Association of Instructors of the Blind endorsed New York Point in 1871, and for a generation it was the official type of American schools.

**American braille, 1878, invented by a blind man and treated accordingly.** Louis Braille had assigned characters without regard to how often a letter occurs: the sign for "t" carries four dots and the sign for "a" carries one, although "t" is the commoner letter. Joel W. Smith, a blind piano tuning teacher at Perkins, rearranged the assignments so the fewest-dot cells carried the most frequent letters, and built a contraction set on the same principle. He presented it to the instructors' association in 1878. New York Point was already the association's adopted type, and Irwin's account of the reception is a single sentence worth reading twice: "Mr. Wait and his friends gave the young mild mannered Smith pretty harsh treatment at this meeting." The system was renamed American braille in 1900.

**Now the lever, without which none of this would matter.** The American Printing House for the Blind has operated in Louisville since 1858, and in the 1870s Congress began appropriating money for it under the Act to Promote the Education of the Blind, supplying embossed books and tangible apparatus to students across the country. Whichever code APH printed in was the code that materially existed. Irwin gives the mechanism in one anecdote: when Edward E. Allen arrived as superintendent in Philadelphia in 1890 he found New York Point in official use, and although the teachers did not like it he kept it for two years, because it was the only dot type in which books could be obtained from the government-supported Printing House.

**Who controlled that board.** Every publicly supported school's superintendent sat on the APH board ex officio, plus seven lay members resident in Kentucky. So the question of which code American blind children would read was decided by a committee of school administrators, and Irwin's estimate of how many of them could read either code personally is the number to carry out of this lesson: he describes the Printing House's own superintendent, Benjamin B. Huntoon, as one of probably not more than **ten per cent** of the group who could personally read either system.

**The vote, in a hot room in 1910.** The braillists had waited years for a majority. Shortly before the 1910 meeting Huntoon announced that it had been found illegal for the Printing House, as a Kentucky corporation, to hold board meetings outside the state, which would have kept west-coast superintendents away. The convention broke its own custom and debated the type question in the open at Little Rock. Huntoon, pressed, said he would not "waste his breath on a jackass like the questioner", was ordered to withdraw it, rose and said, "Having delivered myself of the epithet, I now gladly withdraw it." The braillists then travelled to Louisville anyway in a reserved sleeping car. The motion was that forty per cent of the government appropriation be spent on American braille books. The vote tied. Colonel Andrew Cowan, the presiding lay president, cast the deciding vote in favour, on the ground that forty per cent of the pupils were in schools that had adopted American braille.

:::reveal Why did publishers almost never use capitals in New York Point? ||| Because capitals were formed by adding dots to widen a letter to four dots, which was cumbersome enough that books were generally printed without them.

:::reveal What did Joel W. Smith change about braille, and how was his proposal received in 1878? ||| He reassigned the fewest-dot cells to the most frequent letters and built a contraction set on the same frequency principle. Irwin records that Wait and his friends gave the young mild mannered Smith pretty harsh treatment at the meeting.

:::reveal Why did the American Printing House's printing decisions settle which code existed? ||| Because it held the federal appropriation for embossed books, so a school that wanted government-supplied books had to take the code APH printed, which is why Edward E. Allen kept a type his teachers disliked for two years.

## Vocabulary
- **New York Point**: Wait's 1868 code, two dots high and one to four dots wide, endorsed by the instructors' association in 1871 and notorious for capitals publishers would not use.
- **American braille**: Joel W. Smith's 1878 rearrangement of braille by letter frequency, renamed from Modified braille in 1900.
- **Ex officio board seat**: a seat held by virtue of an office, which is how every publicly supported school's superintendent came to vote on the national code.
- **Federal appropriation**: the money Congress gave the American Printing House from the 1870s, which made the choice of code a question about books that would actually be printed.
- **Frequency principle**: assigning the cheapest signs to the commonest letters, the idea Smith applied and Louis Braille had not.

## Sources
Irwin, R. B. (1955). *As I saw it*. American Foundation for the Blind. (Chapter "War of the Dots", read via https://www.nyise.org/apps/pages/index.jsp?uREC_ID=438103&type=d&pREC_ID=948716 . Irwin was blind from the age of five.)
American Printing House for the Blind. (n.d.). *About APH*. https://www.aph.org/about/`,
    },
    {
      slug: "how-the-war-ended-and-who-paid",
      title: "6 · How it ended, and who paid for it",
      section: "Section 3 · The War of the Dots",
      body: `The fight was settled between 1913 and 1932. Two things about the settlement are worth more than the dates: who did the work, and who absorbed the cost.

**First, how ugly it had become.** Irwin records a superintendent who switched from New York Point to braille and found at the next national convention that some of his former associates refused to sit next to him at the luncheon table. From 1902 the conventions stopped holding public discussions of the type question at all, because, in Irwin's words, "the acrimony engendered made calm deliberation on educational problems well-nigh impossible."

**The 1909 New York hearings, and what Helen Keller actually did.** When New York City planned day-school classes for blind children, the Board of Education held two public hearings, on **24 March and 18 May 1909**, and let the two camps argue. Wait marshalled the New York Point witnesses; Winifred Holt rallied the braillists. The most damaging exhibit was Frank Hall's: two versions of a book's title page in ink type, one with the capitals and apostrophes New York Point books omitted and one without, so the sighted committee could see what a blind child's books looked like. Helen Keller was not present. She wrote a letter to A. Emerson Palmer, secretary of the board, which was read out, and two of its lines are the ones history kept: that New York Point's capitals, "when they are used, are not always unequivocal", and that "in the great world of the blind New York Point is a provincialism." The board decided for American braille.

**The blind people organised, and the committees they filled were their own.** In 1901 the American Blind People's Higher Education and General Improvement Association resolved at Kansas City that a committee investigate the forms of tactile print and work for one universal system. The resulting Tactile Print Investigating Commission was created in 1902, chaired by Ambrose M. Shotwell, a blind braille printer, with John B. Curtis, also sightless, among its members. Its successor, the Uniform Type Committee set up at Saginaw in 1905, had five members, and Irwin lists them with a phrase that should not be skipped: Holmes, Fowler, Curtis, Muck and Shotwell, "all of whom were blind."

**The compromise that failed, and the one that worked.** On **25 June 1913**, at Jacksonville, Illinois, the committee recommended scrapping both New York Point and American braille for an entirely new code called **Standard Dot**, built on a three-dot-high cell with a variable base and the frequency principle. The British studied it, corresponded politely, and popularly dubbed it "Standard Rot". America went its own way: in **1918** the instructors' association endorsed the Commission on Uniform Type, which adopted **Revised braille grade one and a half** as the uniform American type, and practically every book published for blind readers in the United States between 1917 and 1932 appeared in it. Then on **19 July 1932** a committee with plenary powers signed in London the agreement sometimes called the Treaty of London, settling grade 2 for both countries, with contractions no longer bridging syllable divisions, Roman numerals followed by a period, and capitalisation left to the publisher.

**Now the cost, which is the point of the section.** Irwin opens his chapter by observing how cheerfully blind readers adjusted, "within the span of a single lifetime", to changes from Boston line type to New York Point, New York Point to American braille, American braille to Revised braille grade one and a half, and finally to grade 2, and then asks: "What an outcry would be heard in this country if the seeing public had been forced to make a similar series of accommodations!" Four relearnings. Each one stranded a library, obsoleted a person's own written notes, and cost reading speed that takes years to rebuild. The rank and file, Irwin says, had sympathy with a convention speaker who declared: "If anyone invents a new system of printing for the blind, shoot him on the spot."

:::reveal What did Helen Keller actually do at the 1909 New York hearings? ||| She did not attend. She wrote a letter to A. Emerson Palmer, secretary of the Board of Education, which was read out, arguing among other things that New York Point's capitals were not always unequivocal and that the system was a provincialism.

:::reveal What did Irwin note about the membership of the 1905 Uniform Type Committee? ||| That all five of its members were blind, which contrasts sharply with the school superintendents who had been deciding the question until then.

:::reveal How many times were blind readers made to relearn their writing system across this period, and what were the transitions? ||| Four: Boston line type to New York Point, New York Point to American braille, American braille to Revised braille grade one and a half, and finally grade one and a half to grade 2.

## Vocabulary
- **Standard Dot**: the entirely new code proposed on 25 June 1913 to replace both American contenders, rejected by the British, who nicknamed it Standard Rot.
- **Revised braille grade one and a half**: the American uniform type adopted in 1918, in which practically every American book for blind readers appeared between 1917 and 1932.
- **Treaty of London**: the agreement signed 19 July 1932 settling grade 2 for both Britain and the United States, with contractions barred from bridging syllable divisions.
- **Uniform Type Committee**: the 1905 body of five blind members that ran the comparative testing and proposed Standard Dot.
- **Relearning cost**: what a code change takes from an existing reader, being a stranded library, obsolete personal notes, and reading speed that takes years to rebuild.

## Sources
Irwin, R. B. (1955). *As I saw it*. American Foundation for the Blind. (Chapter "War of the Dots", read via https://www.nyise.org/apps/pages/index.jsp?uREC_ID=438103&type=d&pREC_ID=948716 . Irwin was blind from the age of five; all quotations in this lesson are from that chapter.)`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The War of the Dots",
      section: "Section 3 · The War of the Dots",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What shape was a New York Point cell?",
            options: [
              "Two dots high, one to four dots wide",
              "Three dots high and two dots wide, the same proportions as the braille cell",
              "Four dots high and two dots wide, giving room for a built-in capital marker",
              "Two dots high and two dots wide, with a second cell used for less common letters",
            ],
            correctIndex: 0,
            explanation:
              "The variable base was the point: a narrow letter used a narrow cell, which saved space against braille's fixed two-by-three cell.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Why did New York Point books generally appear without capitals?",
            options: [
              "Its capitals were too cumbersome to use",
              "Because capitals were reserved for proper nouns only under the association's rules",
              "Because the embossing presses could not form a four-dot-wide character reliably",
              "Because blind readers had petitioned to have them removed as confusing to the touch",
            ],
            correctIndex: 0,
            explanation:
              "Capitals were formed by adding dots to widen a letter to four dots, which Irwin says was so cumbersome that publishers almost never used them.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "In what year did the American Association of Instructors of the Blind endorse New York Point?",
            options: [
              "1871",
              "1868, the year Wait published the system he had spent a decade perfecting",
              "1878, at the meeting where Joel W. Smith presented his rival modification",
              "1900, when the association renamed the rival system American braille",
            ],
            correctIndex: 0,
            explanation:
              "Wait published in 1868 and the association endorsed and recommended the system for American schools in 1871.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What flaw in Louis Braille's original assignments did Joel W. Smith address?",
            options: [
              "Letter frequency was ignored",
              "The cell was too tall for a fingertip to read at ordinary reading speeds",
              "Punctuation shared signs with letters, which made back translation unreliable",
              "The system had no contractions at all, so embossed books ran to many volumes",
            ],
            correctIndex: 0,
            explanation:
              "Braille had assigned four dots to \"t\" and one to \"a\" although \"t\" is the commoner letter. Smith gave the fewest-dot cells to the most frequent letters.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What was Joel W. Smith's occupation at Perkins?",
            options: [
              "Piano tuning teacher",
              "Superintendent, appointed after training at the Royal Normal College in London",
              "Braille printer, running the school's embossing shop and stereotype plates",
              "Mathematics teacher, who built the contraction set to fit technical notation",
            ],
            correctIndex: 0,
            explanation:
              "Irwin describes him as a blind piano tuning teacher at Perkins Institution for the Blind in Boston.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "How does Irwin describe Smith's reception at the 1878 meeting?",
            options: [
              "Wait and his friends treated him harshly",
              "The association adopted his system unanimously and dropped New York Point",
              "The delegates were indifferent because no books existed in either dot code",
              "He was awarded the association's medal but his system was quietly shelved",
            ],
            correctIndex: 0,
            explanation:
              "Irwin's sentence is that Wait and his friends gave the young mild mannered Smith pretty harsh treatment, New York Point being already the association's adopted type.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "When was Modified braille renamed American braille?",
            options: [
              "1900",
              "1878, at the meeting where Smith first presented it to the instructors",
              "1892, when a group of superintendents met at the Brantford convention",
              "1910, after the Printing House board voted to fund it from federal money",
            ],
            correctIndex: 0,
            explanation:
              "1900. The 1892 Brantford meeting decided to adopt some form of braille, and 1910 is the Printing House vote on the appropriation.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Where has the American Printing House for the Blind operated since 1858?",
            options: [
              "Louisville",
              "Boston, alongside the oldest of the three mother schools",
              "Washington, so that it sits near the congressional committees that fund it",
              "St Louis, near the Missouri school that first adopted braille",
            ],
            correctIndex: 0,
            explanation:
              "Louisville, Kentucky, which is also why its board carried seven lay members resident in that state.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did the Act to Promote the Education of the Blind supply?",
            options: [
              "Embossed books and tangible apparatus",
              "Teacher salaries at every publicly supported residential school in the country",
              "Free postage for accessible materials sent to blind readers and their libraries",
              "Scholarships that allowed blind students to attend mainstream state colleges",
            ],
            correctIndex: 0,
            explanation:
              "APH's own history records Congress appropriating funds in the 1870s under that Act, providing embossed books and tangible apparatus to students across the country.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Why did Edward E. Allen keep New York Point in Philadelphia for two years after 1890?",
            options: [
              "It was the only dot type APH would supply",
              "Because his board had voted for it and he lacked authority to change the code",
              "Because his teachers preferred it and he did not want to overrule them",
              "Because the state appropriation was conditioned on using the association's type",
            ],
            correctIndex: 0,
            explanation:
              "Irwin says the teachers did not like the system, but it was the only dot type in which books could be obtained from the government-supported Printing House.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Who sat on the American Printing House board?",
            options: [
              "Every publicly supported school's superintendent, plus seven Kentucky lay members",
              "Delegates elected by the blind alumni associations of each participating state",
              "Fifteen member organisations of producers, transcribers, teachers and consumers",
              "The Librarian of Congress and the heads of the three mother schools",
            ],
            correctIndex: 0,
            explanation:
              "Superintendents sat ex officio, with seven lay members resident in Kentucky from whom the president was invariably selected.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Roughly what share of that group could personally read either tactile system, on Irwin's estimate?",
            options: [
              "About ten per cent",
              "About forty per cent, matching the share of pupils then in braille schools",
              "About ninety per cent, since superintendents were expected to learn both codes",
              "All of them, because reading both was a condition of holding the board seat",
            ],
            correctIndex: 0,
            explanation:
              "Irwin describes the Printing House's own superintendent as one of probably not more than ten per cent of the group who could personally read either system.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What announcement threatened to keep west-coast superintendents from the 1910 board meeting?",
            options: [
              "That out-of-state board meetings were illegal",
              "That the board would meet only after the convention had formally adjourned",
              "That travel expenses would no longer be reimbursed from the federal appropriation",
              "That proxy voting had been abolished for all questions touching the printing code",
            ],
            correctIndex: 0,
            explanation:
              "Huntoon announced shortly before that it had been found illegal for the Printing House, as a Kentucky corporation, to hold board meetings outside the state.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Where did the 1910 open debate on the type question take place?",
            options: [
              "Little Rock",
              "Louisville, immediately before the Printing House board cast its deciding vote",
              "Brantford, Ontario, where the braillewriter had first been demonstrated",
              "Jacksonville, Illinois, where the Standard Dot proposal was later recommended",
            ],
            correctIndex: 0,
            explanation:
              "The convention broke its own post-1902 custom and debated openly at Little Rock; the board then met at Louisville the following day.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "How did Huntoon withdraw his insult at that meeting?",
            options: [
              "\"Having delivered myself of the epithet, I now gladly withdraw it\"",
              "By writing a formal apology into the minutes at the close of the afternoon session",
              "By offering to resign the superintendency if the chair judged the remark improper",
              "He did not withdraw it, and the chair suspended the discussion as he had warned",
            ],
            correctIndex: 0,
            explanation:
              "He had said he would not waste his breath on a jackass like the questioner, was ordered to withdraw it, rose slowly and said that line, which broke the tension.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did the 1910 motion at Louisville propose?",
            options: [
              "Forty per cent of the appropriation for American braille",
              "That the Printing House cease publishing New York Point books entirely by 1912",
              "That the board be enlarged to include representatives of blind readers themselves",
              "That the federal appropriation be divided equally between the two dot systems",
            ],
            correctIndex: 0,
            explanation:
              "Forty per cent of the government appropriation was to be spent on publishing American braille books, and it passed only on the chair's casting vote.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "How was that motion carried?",
            options: [
              "On the chairman's casting vote after a tie",
              "By a two-thirds majority of superintendents present at the Louisville meeting",
              "By unanimous consent once the New York Point members withdrew in protest",
              "By a vote of the seven Kentucky lay members, the superintendents abstaining",
            ],
            correctIndex: 0,
            explanation:
              "The vote tied, and Colonel Andrew Cowan cast the deciding vote in favour, on the ground that forty per cent of the pupils were in schools that had adopted American braille.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What reason did the chairman give for his casting vote?",
            options: [
              "Forty per cent of pupils were in American braille schools",
              "That the Printing House had a duty to publish whatever blind readers requested",
              "That New York Point had lost the New York Board of Education hearing the year before",
              "That the Kentucky lay members had already agreed the split among themselves",
            ],
            correctIndex: 0,
            explanation:
              "Colonel Cowan said the motion seemed a reasonable request given that share of the pupils represented by the superintendents.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "How did the braillists get to the Louisville meeting after the Little Rock debate?",
            options: [
              "In a reserved sleeping car",
              "They did not travel, and voted by proxy through the Kentucky lay members",
              "By petitioning the Printing House to reimburse the fares from the appropriation",
              "They stayed at Little Rock and forced the board to meet there instead",
            ],
            correctIndex: 0,
            explanation:
              "Irwin records that a special sleeping car was reserved for them and that the Louisville meeting had a record attendance that year.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did Wait think was wrong with braille that led him to build New York Point?",
            options: [
              "It wasted space",
              "It was too difficult for people blinded late in life to learn at any speed",
              "It could not be written by hand without a machine no American school owned",
              "Its contractions bridged syllable divisions, which corrupted children's spelling",
            ],
            correctIndex: 0,
            explanation:
              "He felt braille's fixed cell was wasteful, so he built a variable-base code that used less width for narrow letters.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Which of these is the reason this course says the code fight mattered materially?",
            options: [
              "One publisher held the federal money",
              "Because the association's endorsement carried legal force in every member state",
              "Because a school could lose its charter for teaching an unapproved reading type",
              "Because embossing plates were so costly that only one code could exist at a time",
            ],
            correctIndex: 0,
            explanation:
              "Whichever code the American Printing House printed in was the code that materially existed, which is why board control was worth fighting over.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Which of these was NOT one of the four competing American reading types in this period?",
            options: [
              "Unified English Braille",
              "New York Point, endorsed by the instructors' association in 1871",
              "American braille, Joel W. Smith's frequency-based rearrangement of 1878",
              "Boston line type, the simplified Roman alphabet used at Perkins",
            ],
            correctIndex: 0,
            explanation:
              "Unified English Braille belongs to the twenty-first century. The four in this fight are Boston line type, New York Point, American braille and later Revised braille.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did Smith apply the frequency principle to besides individual letters?",
            options: [
              "His contraction set",
              "The capital and italic markers, which he made narrower than in British braille",
              "The numeral signs, which he shortened to a single cell for the commonest digits",
              "The punctuation marks, which he removed from the code entirely to save space",
            ],
            correctIndex: 0,
            explanation:
              "He evolved a set of word contractions and assigned characters to them on the same frequency of recurrence principle, to keep embossed books from being bulky.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "In what year did the American Printing House begin operating?",
            options: [
              "1858",
              "1879, the year Congress first appropriated money for embossed books",
              "1871, when the instructors' association endorsed New York Point",
              "1892, when the braille typewriter was demonstrated at Brantford",
            ],
            correctIndex: 0,
            explanation:
              "APH's own account gives 1858 in Louisville, with the congressional appropriation following in the 1870s.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What was the practical effect on a school of not using APH's code?",
            options: [
              "It had to find books elsewhere",
              "It lost its ex officio seat on the Printing House board of trustees",
              "It was expelled from the American Association of Instructors of the Blind",
              "It could still order books, but paid a surcharge set by the Kentucky lay members",
            ],
            correctIndex: 0,
            explanation:
              "Schools using braille had to rely on private philanthropy or state appropriations for their books until the 1910 vote opened part of the federal money to them.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What happened to a superintendent who switched from New York Point to braille?",
            options: [
              "Colleagues refused to sit next to him at lunch",
              "His school was struck off the Printing House distribution list for two years",
              "He was removed from the instructors' association committee on types",
              "He was formally censured in the proceedings of the following convention",
            ],
            correctIndex: 0,
            explanation:
              "Irwin records that at the next national convention some of his old New York Point associates refused to sit next to him at the luncheon table.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "From what year did the conventions stop holding public discussions of the type question?",
            options: [
              "1902",
              "1910, immediately after the open debate at Little Rock became unmanageable",
              "1913, once the Uniform Type Committee had recommended Standard Dot",
              "1918, when Revised braille grade one and a half settled the American question",
            ],
            correctIndex: 0,
            explanation:
              "From 1902, because, in Irwin's words, the acrimony engendered made calm deliberation on educational problems well-nigh impossible.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "On what dates were the two New York Board of Education hearings held?",
            options: [
              "24 March and 18 May 1909",
              "25 June and 19 July 1913, either side of the Jacksonville recommendation",
              "In 1910, spread over two evenings during the Little Rock convention week",
              "In 1900 and 1902, before the association stopped debating the question publicly",
            ],
            correctIndex: 0,
            explanation:
              "Two hearings in 1909. The first allotted two and a half hours split evenly between the camps, which left the New York Point side no rebuttal time, so a second was held.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Who rallied the American braille witnesses at those hearings?",
            options: [
              "Winifred Holt",
              "Helen Keller, who attended the second hearing and testified in person",
              "Robert B. Irwin, then executive director of the American Foundation for the Blind",
              "Edward E. Allen, who travelled from Philadelphia for the second session",
            ],
            correctIndex: 0,
            explanation:
              "Winifred Holt, founder of the New York Association for the Blind, against Wait's New York Point witnesses. Allen was in Europe and Keller wrote rather than attended.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What was Frank Hall's damaging exhibit at the first hearing?",
            options: [
              "Two title pages in ink type, one without capitals",
              "A braillewriter and a Kleidograph side by side, timed against each other",
              "A stack of embossed volumes showing how much shelf space each code consumed",
              "Reading-speed results from several hundred blind readers tested in Illinois",
            ],
            correctIndex: 0,
            explanation:
              "One page as it would appear in New York Point without capitals and one correctly capitalised as in American braille, so a sighted committee could see what blind children's books looked like.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Did Helen Keller attend the 1909 hearings?",
            options: [
              "No, she sent a letter that was read out",
              "Yes, and her testimony at the second hearing decided the committee",
              "Yes, but she spoke for New York Point rather than for American braille",
              "No, and she took no position, having avoided the type question entirely",
            ],
            correctIndex: 0,
            explanation:
              "She wrote to A. Emerson Palmer, secretary of the New York Board of Education, and the letter was read at the hearing.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Which phrase from Keller's letter described New York Point's standing among blind readers?",
            options: [
              "\"A provincialism\"",
              "\"An experiment that outlived the evidence for it by thirty years\"",
              "\"A system built for printers rather than for the people who must read it\"",
              "\"A code no one outside the state of New York had ever agreed to teach\"",
            ],
            correctIndex: 0,
            explanation:
              "She wrote that in the great world of the blind New York Point is a provincialism, noting that machines for it were made only in New York.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did Keller say about New York Point's capitals?",
            options: [
              "They are not always unequivocal",
              "They are impossible to form at all with the machines then available",
              "They double the width of every proper noun, which slows a reader badly",
              "They were removed from the code by its publishers without telling readers",
            ],
            correctIndex: 0,
            explanation:
              "She wrote that the capitals, when they are used, are not always unequivocal, and gave examples of letters she had mistaken for one another in signatures.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Which code did the New York Board of Education adopt?",
            options: [
              "American braille",
              "New York Point, on the strength of its larger existing library of books",
              "Boston line type, as a neutral choice between the two dot systems",
              "Revised braille grade one and a half, anticipating the national settlement",
            ],
            correctIndex: 0,
            explanation:
              "After the two hearings the committee decided in favour of American braille, which Irwin calls one of Wait's greatest disappointments.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Who chaired the Tactile Print Investigating Commission created in 1902?",
            options: [
              "Ambrose M. Shotwell",
              "William Bell Wait, as the senior superintendent then holding the association's type",
              "Charles W. Holmes, president of the Perkins alumni association",
              "Edward E. Allen, then director of Perkins Institution",
            ],
            correctIndex: 0,
            explanation:
              "Shotwell, a blind braille printer at the Michigan School for the Blind and later in Saginaw, chaired the four-member commission.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What does Irwin record about the five members of the 1905 Uniform Type Committee?",
            options: [
              "All of them were blind",
              "All of them were school superintendents holding ex officio Printing House seats",
              "Three were blind and two were sighted printers appointed for technical expertise",
              "They were appointed by the Printing House board rather than by the association",
            ],
            correctIndex: 0,
            explanation:
              "Holmes, Fowler, Curtis, Muck and Shotwell, listed by Irwin with the phrase \"all of whom were blind\", two favouring New York Point, two American braille and one British braille.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "On what date was Standard Dot recommended, and where?",
            options: [
              "25 June 1913, at Jacksonville, Illinois",
              "19 July 1932, in London, by a committee holding plenary powers from both associations",
              "24 March 1909, at the first New York Board of Education hearing",
              "In 1905, at the Saginaw convention that created the Uniform Type Committee",
            ],
            correctIndex: 0,
            explanation:
              "The committee recommended it at the American Association of Workers for the Blind convention at Jacksonville, and the delegates approved.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did Standard Dot propose to do with the existing American codes?",
            options: [
              "Scrap both of them",
              "Keep American braille and retire only New York Point, which had fewer readers",
              "Keep New York Point for literary reading and American braille for technical work",
              "Leave both in place and add a third code for readers blinded in adult life",
            ],
            correctIndex: 0,
            explanation:
              "It was an entirely new code taking the three-dot-high cell and the frequency principle from one side and the variable base from the other, scrapping both contenders.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did the British popularly call Standard Dot?",
            options: [
              "Standard Rot",
              "The Jacksonville compromise, after the convention that recommended it",
              "Wait's revenge, since it kept the variable base he had invented",
              "Grade one and a half, the name America later gave its own settlement",
            ],
            correctIndex: 0,
            explanation:
              "Irwin records that the official correspondence was polite and that they popularly dubbed it Standard Rot, having revised their own code as recently as 1905.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did the United States adopt in 1918 instead?",
            options: [
              "Revised braille grade one and a half",
              "Standard Dot, once the British had withdrawn their objections to it",
              "Grade 2 braille, twelve years ahead of the London agreement",
              "New York Point, restored by the instructors' association as a compromise",
            ],
            correctIndex: 0,
            explanation:
              "The instructors' association endorsed the Commission on Uniform Type in 1918 and the commission adopted Revised braille grade one and a half as the American uniform type.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "In what code did practically every American book for blind readers appear between 1917 and 1932?",
            options: [
              "Grade one and a half",
              "New York Point, which retained the larger share of the federal appropriation",
              "Grade 2, which the London agreement had already settled for both countries",
              "American braille, which the New York decision of 1909 had endorsed",
            ],
            correctIndex: 0,
            explanation:
              "Irwin says the Printing House produced new textbooks and supplementary reading in grade one and a half and that most current magazines adopted it too.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "On what date was the agreement sometimes called the Treaty of London signed?",
            options: [
              "19 July 1932",
              "25 June 1913, when the Standard Dot proposal was recommended at Jacksonville",
              "In 1918, when the American uniform type was finally settled",
              "2 November 1912, when the North American authority voted on a unified code",
            ],
            correctIndex: 0,
            explanation:
              "A committee of three with plenary powers from both American associations signed it in London on that date, settling grade 2 for both countries.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Which change did the 1932 agreement make to contractions?",
            options: [
              "They were not to bridge syllable divisions",
              "Nine of them were eliminated and the remainder used more often than before",
              "They were made optional, so a publisher could issue an uncontracted edition",
              "They were reassigned by letter frequency, adopting the American principle",
            ],
            correctIndex: 0,
            explanation:
              "Publishers were directed to be more careful about not bridging syllable divisions with contractions. The nine eliminated contractions belong to the UEB transition eighty years later.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did the 1932 agreement do about capitalisation?",
            options: [
              "Made it optional with the publisher",
              "Required it in every book, ending the practice New York Point had normalised",
              "Barred it entirely, on the ground that it wasted space in embossed volumes",
              "Referred it back to each national committee to decide separately",
            ],
            correctIndex: 0,
            explanation:
              "Capitalisation was made optional with the publisher, Roman numerals were to be followed by a period rather than an apostrophe, and two markers were interchanged.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "How many times did blind readers in this period have to relearn their reading code?",
            options: [
              "Four",
              "Two, from Boston line type to New York Point and then to grade 2",
              "Six, counting the music and mathematics codes introduced alongside the literary ones",
              "Once, when the London agreement replaced grade one and a half with grade 2",
            ],
            correctIndex: 0,
            explanation:
              "Boston line type to New York Point, New York Point to American braille, American braille to Revised braille grade one and a half, and grade one and a half to grade 2.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What comparison does Irwin draw in his opening paragraph?",
            options: [
              "What the seeing public would have said in the same position",
              "How much slower blind readers were after each change than before it",
              "How much the Printing House spent scrapping and remaking its embossing plates",
              "How British readers fared under a single code across the same decades",
            ],
            correctIndex: 0,
            explanation:
              "He asks what an outcry would be heard if the seeing public had been forced to make a similar series of accommodations, having first noted how cheerfully blind readers adjusted.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did a convention speaker say about inventors of new printing systems?",
            options: [
              "\"Shoot him on the spot\"",
              "\"Send him to Louisville and let him pay for the plates himself\"",
              "\"Let him first learn to read the system he proposes to replace\"",
              "\"Refer him to the British, who will tell him what they think of it\"",
            ],
            correctIndex: 0,
            explanation:
              "Irwin quotes the line as a burst of oratory the rank and file of finger readers had a good deal of sympathy with, after four changes in a lifetime.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What does this lesson say each relearning cost a reader?",
            options: [
              "A stranded library, obsolete notes and lost speed",
              "The cost of a new writing machine, which no appropriation covered",
              "A year of schooling, since the schools taught only one code at a time",
              "Access to the federal appropriation, which funded only the newest code",
            ],
            correctIndex: 0,
            explanation:
              "Every change stranded the books a reader owned, obsoleted their own written notes, and cost reading speed that takes years to rebuild.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Which body resolved in 1901 that a committee investigate the forms of tactile print?",
            options: [
              "The American Blind People's Higher Education and General Improvement Association",
              "The American Association of Instructors of the Blind, at its biennial convention",
              "The board of trustees of the American Printing House for the Blind",
              "The New York Board of Education, before it convened its public hearings",
            ],
            correctIndex: 0,
            explanation:
              "It passed the resolution at its Kansas City convention, and the Tactile Print Investigating Commission followed in 1902.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What is the significance of who filled the two uniform-type bodies?",
            options: [
              "Blind readers were finally doing the deciding",
              "They were the first committees to include a representative of the Printing House",
              "They were funded by the federal appropriation rather than by the associations",
              "They were the only bodies with power to bind the British committees as well",
            ],
            correctIndex: 0,
            explanation:
              "The Tactile Print Investigating Commission was chaired by a blind printer and the Uniform Type Committee's five members were all blind, in contrast to the superintendents who had been deciding.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "Which of these date-and-event pairings from the standards war is correct?",
            options: [
              "1932, the London agreement settling grade 2",
              "1913, the New York Board of Education deciding in favour of American braille",
              "1909, the Uniform Type Committee recommending Standard Dot at Jacksonville",
              "1918, the signing in London of the agreement between the two countries",
            ],
            correctIndex: 0,
            explanation:
              "1909 is the New York hearings, 1913 is Standard Dot at Jacksonville, 1918 is the American adoption of grade one and a half, and 19 July 1932 is the London agreement.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The schools, segregation, and the record they left
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-residential-school-and-the-curriculum",
      title: "7 · The residential school, and low expectation as a curriculum",
      section: "Section 4 · The schools, segregation, and the record they left",
      body: `The residential school for blind children did three things at once, and the third is the one this course is about.

**What it did.** It concentrated a scattered minority in one place. It put blind children in daily contact with blind adults who had already worked out how to live. And it taught the specialist skills, braille and independent travel, that a local district with one blind pupil had nobody on staff to teach.

**And it tracked its students vocationally, in trades that recur across the sources.** The American Foundation for the Blind's obituary of Abraham Nemeth says he grew up "at a time when blind children were taught to knit, weave baskets, and cane chairs," and gives the reasoning of the era in the next sentence: "At the time it was thought that manual labor was the only way blind people could escape a life of begging on the streets." Nemeth's parents, immigrants who did not know or care about those expectations, raised him and his blind sister to be independent, and he went on to build the mathematics code the United States still uses. The curriculum was not a prediction about what blind children could do. It was a statement about what anybody expected of them, and Section 5 shows what happened when one person ignored it.

**Now the comparison this course will not let you make, because it is the most common error after "braille is a language".** Deaf education's defining trauma is a language ban: a policy that removed a signed language from Deaf schools and ran for a century. **There is no braille equivalent, and there cannot be one, because braille is not a community language.** A blind child and their hearing sighted parents already share a language. Nothing was taken from a blind child that corresponds to what oralism took from a Deaf child, and an account that tells the blind story as the Deaf story in different clothes has flattened both.

**What does carry across is narrower and more useful: the curriculum, not the language.** In both systems a professional class decided in advance what a disabled child's life would be, and then built a school that delivered exactly that much. Broom-making and chair caning on one side of the comparison, a vocational track on the other, and in each case the ceiling was in the timetable rather than in the child.

**Then the model changed.** The Education for All Handicapped Children Act of 1975, reauthorised in 1990 as the Individuals with Disabilities Education Act, required that children be educated in the "least restrictive environment". As the Virginia history in the next lesson puts it, that mandate "facilitated a move away from residential schools by specifying that educators should strive to teach disabled children in classes with their typically developing peers at schools close to home." Residential school populations fell through the last quarter of the twentieth century.

**One popular claim about that change, which this course states as contested rather than as fact.** Braille literacy advocates connect the move to local districts directly to a decline in braille instruction, on the argument that a district serving one blind child has no braille teacher and no braille-reading peers. That is an empirical claim about causation, and this pass did not locate the study that would establish it. So the lesson gives you the argument and its holders, tells you it is unsettled, and the question is filed where somebody can close it. Notice the shape of what was lost either way: not a language, but a place where blind adults were part of a blind child's ordinary week.

:::reveal What does the AFB obituary of Abraham Nemeth say blind children of his generation were taught, and why? ||| To knit, weave baskets and cane chairs, because it was thought at the time that manual labour was the only way blind people could escape a life of begging on the streets.

:::reveal Why is there no braille equivalent of the language ban in Deaf education history? ||| Because braille is a code rather than a community language, and a blind child already shares a language with hearing sighted parents, so nothing corresponding to a signed language could be taken away.

:::reveal What does this lesson say about the claim that mainstreaming caused the decline in braille instruction? ||| That it is an empirical claim about causation which this pass could not settle against a study, so the course names the argument and its holders, says it is unsettled, and files the question rather than asserting it.

## Vocabulary
- **Residential school**: an institution concentrating blind students in one place, which is also where blind adults and the specialist skills were.
- **Vocational tracking**: deciding in advance what work a group of children will do and building the timetable to deliver exactly that.
- **Least restrictive environment**: the principle in the 1975 Act, reauthorised as IDEA in 1990, that pushed disabled children into local classes with their peers.
- **Mainstreaming**: the resulting shift of blind students out of residential schools and into local districts.
- **Contested causal claim**: an assertion about cause, here that dispersal reduced braille instruction, which this course reports with its holders rather than adopting.

## Sources
Kendrick, D. (2013, November). Dr. Abraham Nemeth: The Louis Braille of mathematics dies at age 94. *AccessWorld*. American Foundation for the Blind. https://afb.org/aw/14/11/15736
Conner, G. J. (2022, October 4). *The education of deaf and blind African Americans in Virginia, 1909-2008*. VCU Libraries Social Welfare History Project. https://socialwelfare.library.vcu.edu/eras/education-of-deaf-and-blind-african-americans-in-virginia-1909-2008/`,
    },
    {
      slug: "virginia-and-the-history-nobody-wrote",
      title: "8 · Virginia on the record, and the history nobody wrote",
      section: "Section 4 · The schools, segregation, and the record they left",
      body: `Start with the honest finding, because the finding is the thinness. There is no landmark monograph on Black blind education in the United States that this pass could locate, and no research centre dedicated to it. What there is instead is a primary record: statutes, appropriations, superintendents' reports, enrolment registers and school bulletins. Virginia is the best-documented single case, and it is documented well enough to teach from.

**How the school began, which is not how a state institution usually begins.** In 1895 Mary Ritter, a recent graduate of the Virginia School for the Deaf and the Blind at Staunton, was approached by a mother whose deaf daughter had been refused admission there because the school admitted only white students. The superintendent's suggestion was that Ritter teach the girl in exchange for the mother taking in the Ritter family laundry, and Ritter accepted. Her husband William C. Ritter, also a recent graduate of that school and then president of the Virginia Association of the Deaf, took up the campaign for a state school for Black deaf and blind children.

**The legislative record dates the resistance precisely.** The first bill died in committee in **1902**, the same year Virginia enacted the constitution that stripped Black men in the state of their voting rights. A bill passed in **1906** with the help of Harry Houston, a member of the House of Delegates and Ritter's employer, and the legislators' stated interest was in preparing "the children so afflicted to receive sufficient training to become self-supporting". No appropriation came with it. The board worked another three years, and the school opened in **1909** with William Ritter as superintendent, which G. Jasper Conner's history calls being "one of the few Deaf men to found a school, and the only to do so for Black children."

**The funding gap, in the historian's own words.** "The Virginia State School received a paltry initial appropriation of only $25,000 to purchase land, build facilities, and operate for the first year, while VSDB, the school for white students, received $50,000 the next year simply to operate."

**The vocational gap, likewise.** White students at Staunton were trained in "cabinet making, book repair, cosmetology, printing, woodworking, and even watch repair", while Black students "were largely prepared for lives as agricultural and domestic workers".

**Then somebody moved the ceiling.** In **1940** William Whitehead became the school's first Black superintendent. He required teachers to hold graduate training in special education, most of it taken at nearby Hampton Institute, and overhauled the vocational programme to add certification in piano tuning, upholstery and barbering. Enrolment tripled from about **70** students in his first year to **215** in 1961, his last.

**Desegregation, and how long it took.** Virginia began complying with *Brown v. Board of Education* more than ten years after the decision, sending a trickle of Black students to Staunton from **1965**. In 1971 Jerry Long, a blind African American student, wrote of "the slurring remarks and the taunts of my white schoolmates" and of "being denied the close companionship of my white schoolmates". Meaningful desegregation of the two schools came in **1973**. The Hampton school was renamed in 2000, absorbed its remaining students into Staunton from 2006, and closed in **2008**.

**And keep the scale in view.** Virginia was very nearly the last Southern state to provide for the education of Black deaf and blind children at all: only West Virginia in 1926 and Louisiana in 1938 founded comparable institutions after it.

:::reveal What two dollar figures does Conner's history put side by side, and what do they measure? ||| $25,000 as the Virginia State School's initial appropriation to buy land, build facilities and operate for a year, against $50,000 given to the white school the following year simply to operate.

:::reveal What changed at the school in 1940, and what did the numbers do? ||| William Whitehead became its first Black superintendent, required graduate training in special education for teachers, added piano tuning, upholstery and barbering, and enrolment tripled from about 70 students to 215 by 1961.

:::reveal What is the honest finding this lesson opens with about Black blind history? ||| That the historiography is thin, with no landmark monograph and no dedicated research centre this pass could locate, while the primary record of statutes, appropriations, reports and registers is not thin at all.

## Vocabulary
- **Virginia State School for Colored Deaf and Blind Children**: the school opened at Hampton in 1909, renamed several times, and closed in 2008.
- **Appropriation gap**: the measurable inequity visible in founding documents, here $25,000 against $50,000 for two schools in the same state.
- **Vocational gap**: the difference between watch repair and cabinet making on one campus and agricultural and domestic work on the other.
- **Historiography**: the body of scholarship written about a subject, as distinct from the primary record, and the thing this lesson reports as missing.
- **Trickle desegregation**: compliance that begins more than a decade after a ruling and moves a handful of students at a time, as Virginia's did from 1965.

## Sources
Conner, G. J. (2022, October 4). *The education of deaf and blind African Americans in Virginia, 1909-2008*. VCU Libraries Social Welfare History Project. https://socialwelfare.library.vcu.edu/eras/education-of-deaf-and-blind-african-americans-in-virginia-1909-2008/ (Cites Gallaudet University Archives and contemporary newspapers; all quotations in this lesson are from this article.)`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The schools and the record they left",
      section: "Section 4 · The schools, segregation, and the record they left",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What three things does this lesson say the residential school did at once?",
            options: [
              "Concentrated a minority, supplied blind adults, taught the specialist skills",
              "Housed students cheaply, trained teachers locally, and supplied the printing houses",
              "Certified reading media, tested new appliances, and lobbied state legislatures",
              "Taught academics, produced embossed books, and placed graduates into trades",
            ],
            correctIndex: 0,
            explanation:
              "It gathered a scattered population, put blind children in daily contact with blind adults, and taught braille and travel, which a district with one blind pupil had nobody to teach.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What does the AFB obituary say blind children of Nemeth's generation were taught?",
            options: [
              "To knit, weave baskets and cane chairs",
              "Piano tuning, upholstery and barbering, which paid better than the older trades",
              "Cabinet making, book repair, printing and watch repair alongside academics",
              "Braille transcription, so that they could supply the schools with their own books",
            ],
            correctIndex: 0,
            explanation:
              "The obituary uses that exact list. The other trades named belong to the Virginia lesson, on either side of the segregation line.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What reasoning does the obituary give for that curriculum?",
            options: [
              "Manual labour was thought the only escape from begging",
              "Manual trades were the only work that state vocational rehabilitation would fund",
              "The schools lacked teachers qualified to teach academic subjects to blind students",
              "Employers had agreed to hire blind workers only into piecework manufacturing",
            ],
            correctIndex: 0,
            explanation:
              "It says that at the time it was thought manual labour was the only way blind people could escape a life of begging on the streets.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What did Nemeth's parents do differently, on that account?",
            options: [
              "Raised him and his blind sister to be independent",
              "Enrolled him at a residential school rather than in the New York public system",
              "Hired a private tutor in mathematics when the school refused to teach it",
              "Campaigned to have the vocational curriculum replaced with academic subjects",
            ],
            correctIndex: 0,
            explanation:
              "The obituary says his immigrant parents did not know or care about the expectations of the era, and that he attended public schools and learned braille there.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "Why can there be no braille equivalent of the language ban in Deaf education?",
            options: [
              "Braille is not a community language",
              "Because no American state ever legislated about which reading code schools must use",
              "Because the federal appropriation protected braille from being banned outright",
              "Because blind children learned braille at home before they reached school age",
            ],
            correctIndex: 0,
            explanation:
              "A blind child already shares a spoken language with hearing sighted parents, so nothing corresponding to the removal of a signed language could happen.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What DOES carry across between the deaf and blind school histories, on this lesson's account?",
            options: [
              "The curriculum",
              "The language policy, which restricted the natural medium of both groups",
              "The federal subsidy, which funded the same publisher for both populations",
              "The desegregation timeline, which ran identically in both school systems",
            ],
            correctIndex: 0,
            explanation:
              "In both systems a professional class decided in advance what a disabled child's life would be and built a school that delivered exactly that much.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "Where does this lesson say the ceiling on those students actually sat?",
            options: [
              "In the timetable",
              "In the reading code, which limited what could be transcribed for them",
              "In the appropriation, which was too small to hire academic teachers",
              "In the entrance requirements, which excluded students with other disabilities",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's phrase is that the ceiling was in the timetable rather than in the child, which is what makes vocational tracking a decision rather than a description.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What did the Education for All Handicapped Children Act require?",
            options: [
              "Education in the least restrictive environment",
              "That every state maintain at least one residential school for blind students",
              "That braille instruction be offered to every legally blind student in a district",
              "That federal funds be withheld from schools that had not yet desegregated",
            ],
            correctIndex: 0,
            explanation:
              "The 1975 Act, reauthorised in 1990 as IDEA, required the least restrictive environment, which pushed disabled children into local classes with their peers.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "In what year was that Act reauthorised under the name IDEA?",
            options: [
              "1990",
              "1975, when the least restrictive environment principle first entered federal law",
              "1965, when Virginia began sending Black students to the white school at Staunton",
              "2008, when the last of the Virginia schools closed its doors",
            ],
            correctIndex: 0,
            explanation:
              "The 1975 Act was reauthorised in 1990 as the Individuals with Disabilities Education Act. 1965 and 2008 belong to the Virginia timeline.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What claim about mainstreaming does this course decline to assert?",
            options: [
              "That it caused the decline in braille instruction",
              "That it reduced enrolment at residential schools during the 1970s and 1980s",
              "That it was required by federal law from 1975 onward",
              "That it placed disabled children in classes with their non-disabled peers",
            ],
            correctIndex: 0,
            explanation:
              "The causal claim is made constantly by braille literacy advocates and is an empirical question this pass could not settle, so it is named with its holders and filed rather than adopted.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What is the argument braille literacy advocates make about local districts?",
            options: [
              "One blind child means no braille teacher and no braille peers",
              "That districts spend their disability budgets on physical access rather than on staff",
              "That state licensing rules stop districts from employing blind teachers at all",
              "That embossed books cost more than a district can justify for a single student",
            ],
            correctIndex: 0,
            explanation:
              "That is the mechanism the argument proposes, and the lesson gives it with its holders while saying the causal claim itself is unsettled here.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What does this lesson say was actually lost when the residential model receded?",
            options: [
              "A place where blind adults were part of a blind child's week",
              "The only institutions that could afford to stock a complete braille library",
              "The specialist certification that qualified teachers to work with blind students",
              "A language, in the same way Deaf schools lost a signed language to oralism",
            ],
            correctIndex: 0,
            explanation:
              "Not a language, which is the whole point of the comparison the lesson refuses, but the ordinary daily presence of blind adults in a blind child's life.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "Who approached Mary Ritter in 1895, and why?",
            options: [
              "A mother whose deaf daughter had been refused admission",
              "The superintendent at Staunton, who wanted a teacher for a new department",
              "The Virginia Association of the Deaf, seeking a campaigner for a new school",
              "A member of the House of Delegates who wanted a school in his own district",
            ],
            correctIndex: 0,
            explanation:
              "The Staunton school admitted only white students, and its superintendent sent the mother to Ritter with a proposal that she teach the girl in exchange for the family laundry.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What was the arrangement under which Mary Ritter taught that child?",
            options: [
              "In exchange for the family laundry",
              "For a stipend paid by the Virginia Association of the Deaf out of member dues",
              "As an unpaid volunteer, with the state supplying only the embossed books",
              "Under a contract with the Staunton school, which paid her by the pupil",
            ],
            correctIndex: 0,
            explanation:
              "The superintendent's suggestion was that the mother take in the Ritter family laundry in exchange for the teaching, and Ritter accepted.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Who campaigned for a state school for Black deaf and blind children in Virginia?",
            options: [
              "William C. Ritter",
              "Harry Houston, the member of the House of Delegates who carried the 1906 bill",
              "William Whitehead, who became the school's first Black superintendent in 1940",
              "The superintendent of the Staunton school, after refusing the first applicant",
            ],
            correctIndex: 0,
            explanation:
              "Mary Ritter's husband, himself a recent graduate of the Staunton school and then president of the Virginia Association of the Deaf. Houston was his employer and legislative ally.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What happened to the first bill proposing the school?",
            options: [
              "It died in committee in 1902",
              "It passed in 1902 but was vetoed by the governor for want of an appropriation",
              "It passed in 1906 and opened the school the same year at Hampton",
              "It was withdrawn after the Virginia Association of the Deaf declined to support it",
            ],
            correctIndex: 0,
            explanation:
              "It died in committee in 1902, the same year Virginia enacted the constitution that stripped Black men in the state of their voting rights.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What else happened in Virginia in 1902?",
            options: [
              "A constitution stripped Black men of the vote",
              "The Staunton school admitted its first Black students under a state court order",
              "Congress appropriated funds for embossed books at Southern segregated schools",
              "The Virginia Association of the Deaf was founded to campaign for the school",
            ],
            correctIndex: 0,
            explanation:
              "Conner puts the two in the same sentence deliberately: the campaign for the school was waged in a climate of deliberate disenfranchisement.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did the 1906 bill provide?",
            options: [
              "Authorisation with no appropriation",
              "An appropriation of $50,000, matching the white school's operating grant",
              "A site at Hampton Institute, which agreed to house the new school",
              "A requirement that the Staunton school admit Black students within three years",
            ],
            correctIndex: 0,
            explanation:
              "The school was given no appropriation, so the newly created Board of Visitors worked another three years before it opened in 1909.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did Virginia legislators say the school was for?",
            options: [
              "Making the children self-supporting",
              "Providing the academic education already available to white deaf and blind children",
              "Relieving the Staunton school of pressure to admit Black applicants",
              "Training teachers who could then work in the state's Black public schools",
            ],
            correctIndex: 0,
            explanation:
              "Conner quotes the stated aim as preparing \"the children so afflicted to receive sufficient training to become self-supporting\", which is a narrower purpose than education.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "In what year did the Virginia State School for Colored Deaf and Blind Children open?",
            options: [
              "1909",
              "1906, when the enabling bill finally passed the House of Delegates",
              "1895, when Mary Ritter began teaching her first pupil at home",
              "1940, when it appointed its first Black superintendent",
            ],
            correctIndex: 0,
            explanation:
              "1906 is the bill, 1909 the opening, 1895 the private teaching arrangement, and 1940 Whitehead's appointment.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "How does Conner's history describe William Ritter's founding of the school?",
            options: [
              "One of the few Deaf men to found a school, and the only one for Black children",
              "The first blind superintendent of any state institution in the American South",
              "The only school founder to have been refused admission by the school he later ran",
              "The longest-serving superintendent of any segregated school for disabled children",
            ],
            correctIndex: 0,
            explanation:
              "Conner's phrase is that this marked him as one of the few Deaf men to found a school, and the only to do so for Black children.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What was the Virginia State School's initial appropriation?",
            options: [
              "$25,000",
              "$50,000, which was also what the white school received to operate the next year",
              "$100,000, matching the federal appropriation for printing books for blind adults",
              "Nothing, since the 1906 bill carried no money and none was added later",
            ],
            correctIndex: 0,
            explanation:
              "$25,000 to purchase land, build facilities and operate for the first year, against $50,000 to the white school the next year simply to operate.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did that $50,000 to the white school pay for?",
            options: [
              "Operating for a year",
              "Land, buildings and the first year of operation, as at the Black school",
              "A new campus at Hampton, to relieve overcrowding at Staunton",
              "Vocational equipment for the printing, cabinet making and watch repair shops",
            ],
            correctIndex: 0,
            explanation:
              "That is the comparison Conner draws: one school got $25,000 to buy land, build and run, while the other got twice as much simply to operate.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Which trades were taught to white students at the Staunton school?",
            options: [
              "Cabinet making, book repair, cosmetology, printing, woodworking, watch repair",
              "Knitting, basket weaving and chair caning, the trades of the previous century",
              "Agricultural and domestic work, with academics for those who progressed",
              "Piano tuning, upholstery and barbering, added under a reforming superintendent",
            ],
            correctIndex: 0,
            explanation:
              "That is Conner's list for the white school. Black students were largely prepared for lives as agricultural and domestic workers, and the piano tuning came later at Hampton.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What were Black students at the Virginia State School largely prepared for?",
            options: [
              "Agricultural and domestic work",
              "Watch repair and printing, the two trades that transferred to city employment",
              "Teaching, since the school needed graduates who could staff it themselves",
              "Braille transcription for the state library service at Richmond",
            ],
            correctIndex: 0,
            explanation:
              "Conner's sentence contrasts the six trades taught at Staunton with preparation for agricultural and domestic work on the other side of the state.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Who became the school's first Black superintendent, and when?",
            options: [
              "William Whitehead, in 1940",
              "William C. Ritter, in 1909, when the school first opened at Hampton",
              "Harry Houston, in 1906, after carrying the enabling bill",
              "Jerry Long, in 1971, after desegregation had begun at Staunton",
            ],
            correctIndex: 0,
            explanation:
              "Whitehead, a former administrator at St Paul's Polytechnic Institute, appointed in 1940 and in charge for twenty years.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did Whitehead require of his teachers?",
            options: [
              "Graduate training in special education",
              "That they be graduates of the school themselves, so they knew its students",
              "That they learn braille and sign language before their first classroom term",
              "That they take a state certification examination administered at Staunton",
            ],
            correctIndex: 0,
            explanation:
              "He mandated a minimum level of graduate school training in special education, most of it obtained at nearby Hampton Institute.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Which certifications did Whitehead add to the vocational programme?",
            options: [
              "Piano tuning, upholstery and barbering",
              "Cabinet making, book repair and watch repair, matching the white school's list",
              "Broom-making, chair caning and basket weaving, the traditional blind trades",
              "Printing and cosmetology, which the state had funded only at Staunton",
            ],
            correctIndex: 0,
            explanation:
              "Conner describes the additions as demonstrating confidence in the ability of Black disabled people to secure jobs beyond the bottom of the wage scale.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What happened to enrolment during Whitehead's tenure?",
            options: [
              "It tripled, from about 70 to 215",
              "It halved, as families kept children at home during the Depression years",
              "It rose from 215 to 700 after the school added a high school department",
              "It stayed flat, because the appropriation never allowed more dormitory space",
            ],
            correctIndex: 0,
            explanation:
              "About 70 students in his first year, 1940, and 215 in 1961, his last year in charge.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "When did Virginia begin sending Black students to the white school at Staunton?",
            options: [
              "1965",
              "1954, the year Brown v. Board of Education was decided",
              "1973, when meaningful desegregation of the two schools finally took place",
              "1940, when the Hampton school appointed its first Black superintendent",
            ],
            correctIndex: 0,
            explanation:
              "More than ten years after Brown, and as a trickle. Meaningful desegregation of the two schools came in 1973.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did Jerry Long write in 1971?",
            options: [
              "About slurring remarks and taunts from white schoolmates",
              "That the Hampton school's closure would strand its remaining students",
              "That the vocational programme at Staunton was better than Hampton's",
              "That the state had complied fully with Brown by the end of the 1960s",
            ],
            correctIndex: 0,
            explanation:
              "He wrote of having experienced the slurring remarks and taunts of his white schoolmates and of being denied their close companionship.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "In what year did meaningful desegregation of Virginia's two schools take place?",
            options: [
              "1973",
              "1965, when the first Black students transferred to Staunton",
              "1971, the year Jerry Long described his treatment at the school",
              "1975, when the Education for All Handicapped Children Act was passed",
            ],
            correctIndex: 0,
            explanation:
              "1965 is the trickle, 1971 is Long's account, 1973 is the plan that moved students in a group, and 1975 is the federal Act.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "When did the Hampton school close?",
            options: [
              "2008",
              "2000, when it was renamed for the fifth time in a century of operation",
              "2006, when the state began moving its remaining students to Staunton",
              "1977, at the end of the decade in which desegregation was completed",
            ],
            correctIndex: 0,
            explanation:
              "It was renamed in 2000, the merger began in 2006 and the school finally closed in 2008.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Which two states founded comparable institutions AFTER Virginia's?",
            options: [
              "West Virginia and Louisiana",
              "Mississippi and North Carolina, which followed Virginia within a decade",
              "Maryland and Alabama, both of which combined deaf and blind departments",
              "Georgia and South Carolina, the last two Southern states to comply with Brown",
            ],
            correctIndex: 0,
            explanation:
              "West Virginia in 1926 and Louisiana in 1938. Mississippi established a school for Black deaf children two decades before Virginia's.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What does this lesson say is missing from the study of Black blind education?",
            options: [
              "A landmark monograph and a dedicated research centre",
              "The statutes and appropriations, most of which were destroyed at closure",
              "The enrolment registers, which Gallaudet's archives never collected",
              "Any documentation at all, which is why the subject cannot be taught",
            ],
            correctIndex: 0,
            explanation:
              "The historiography is thin, and the primary record of statutes, appropriations, superintendents' reports, registers and school bulletins is not.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What sources does the Virginia history draw on?",
            options: [
              "Gallaudet University Archives and contemporary newspapers",
              "Oral history interviews with surviving alumni of the Hampton school",
              "Federal desegregation correspondence held by the Department of Justice",
              "The papers of the Virginia Association of the Deaf, deposited at Hampton",
            ],
            correctIndex: 0,
            explanation:
              "Conner's article cites the Gallaudet University Archives and historical newspapers, which is what makes its dollar figures and enrolment numbers checkable.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Which is the correct order of events in the Virginia story?",
            options: [
              "1902 bill fails, 1906 bill passes, 1909 school opens",
              "1906 bill fails, 1909 bill passes, 1940 school opens at Hampton",
              "1895 school opens, 1902 bill funds it, 1909 it receives its appropriation",
              "1909 bill passes, 1926 school opens, 1938 it receives its first appropriation",
            ],
            correctIndex: 0,
            explanation:
              "The first bill died in committee in 1902, a bill passed in 1906 without money, and the school opened in 1909 after three more years of work.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Why does this lesson call the thinness of the scholarship a finding rather than a gap in its own research?",
            options: [
              "Because the primary record is rich and nobody has built on it",
              "Because the archives that hold the record are closed to outside researchers",
              "Because the schools destroyed their records when they merged and closed",
              "Because the subject has been written about only in unpublished theses",
            ],
            correctIndex: 0,
            explanation:
              "Statutes, appropriations, reports and registers survive in quantity, so what is missing is the historiography built on them rather than the evidence itself.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What organisation did William C. Ritter lead when he took up the campaign?",
            options: [
              "The Virginia Association of the Deaf",
              "The board of visitors of the Virginia School for the Deaf and the Blind",
              "The American Association of Instructors of the Blind's Virginia chapter",
              "Hampton Institute's department of special education",
            ],
            correctIndex: 0,
            explanation:
              "He was its president and pressed it to issue a resolution calling for a school for Virginia's Black deaf and blind children.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What kind of documents does this lesson say segregated schools generate?",
            options: [
              "Statutes, appropriations, reports and registers",
              "Oral histories, which the Black Deaf collections have and the blind ones lack",
              "Patent filings and engineering drawings for the apparatus they used",
              "Court transcripts, since every founding was litigated before it was funded",
            ],
            correctIndex: 0,
            explanation:
              "Enabling statutes, legislative appropriations, superintendents' annual reports, enrolment registers and school bulletins, which is exactly the material this catalog teaches people to read.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did the residential school give a blind child that a local district could not?",
            options: [
              "Blind adults in the ordinary week",
              "A larger braille library than any state library service could maintain",
              "Federal funding, which followed the student to a residential placement",
              "Freedom from the vocational tracking that local schools imposed",
            ],
            correctIndex: 0,
            explanation:
              "Daily contact with blind adults who had already worked out how to live, plus the specialist skills a district with one blind pupil has nobody on staff to teach.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "How does this course treat the claim that the blind story is the Deaf story in different clothes?",
            options: [
              "As a flattening of both",
              "As broadly right, since both communities faced the same institutional history",
              "As correct for the schools but wrong for the technology and the law",
              "As unresolved, since no comparative study of the two systems exists",
            ],
            correctIndex: 0,
            explanation:
              "The difference is structural: braille is a code and a signed language is not, so the defining trauma of Deaf education has no braille counterpart.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "Which is a fair statement about the trades in these school curricula?",
            options: [
              "They differed by race within the same state",
              "They were set nationally by the American Printing House's board of trustees",
              "They were identical across states because federal funding required a common list",
              "They were chosen by the students themselves once they reached high school age",
            ],
            correctIndex: 0,
            explanation:
              "Virginia is the documented case: watch repair, printing and cabinet making at the white school, agricultural and domestic work at the Black one.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did the Hampton school become in 2000?",
            options: [
              "The Virginia School for the Deaf, Blind, and Multi-Disabled",
              "A satellite campus of the Staunton school, run by the same superintendent",
              "A state archive housing the records of both segregated institutions",
              "A department of Hampton University's school of special education",
            ],
            correctIndex: 0,
            explanation:
              "That was its fifth name in a century, adopted after it specialised in students with multiple disabilities in the late 1970s.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What is the difference between a primary record and a historiography, as this lesson uses the terms?",
            options: [
              "One is the evidence, the other is the scholarship built on it",
              "One is held by state archives, the other by university libraries",
              "One covers the segregated era, the other only the period after desegregation",
              "One is published, the other survives only in unpublished manuscript form",
            ],
            correctIndex: 0,
            explanation:
              "Virginia's statutes, appropriations and registers are the record. The monograph and the research centre that nobody has produced would be the historiography.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "How long after Brown v. Board of Education did Virginia begin complying at these schools?",
            options: [
              "More than ten years",
              "Within two years, ahead of most of the state's ordinary public school districts",
              "Nineteen years, since nothing changed until the 1973 desegregation plan",
              "Fifty-four years, counting from the decision to the Hampton school's closure",
            ],
            correctIndex: 0,
            explanation:
              "Brown was decided in 1954 and the trickle of Black students to Staunton began in 1965, with meaningful desegregation following in 1973.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What did the least restrictive environment principle do to residential school populations?",
            options: [
              "They fell",
              "They rose, as districts referred students the local schools could not serve",
              "They stayed level until the schools were merged by state legislatures",
              "They fell at deaf schools and rose at schools for blind students",
            ],
            correctIndex: 0,
            explanation:
              "The mandate pushed disabled children into local classes near home, and both Virginia schools saw population declines through the last quarter of the twentieth century.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Credit: who is named on the things blind people built
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-private-code-that-became-a-standard",
      title: "9 · The private code that became a national standard",
      section: "Section 5 · Credit: who is named on the things blind people built",
      body: `Until the middle of the twentieth century there was no braille code for mathematics beyond arithmetic. The reason is not technical, and the story of how one arrived is the clearest credit case this course can fully source.

**The career the era offered him.** Abraham Nemeth was born in 1918 on New York's Lower East Side, to immigrant parents who, in the American Foundation for the Blind's account, "didn't know or care about those expectations" and raised him and his blind sister to be independent. He attended public schools, learned braille there, and developed a passion for mathematics in adolescence. Experts told him mathematics was an unwise pursuit for a blind man. He took a bachelor's degree in psychology at Brooklyn College in **1940**, could not find work, was advised by the same experts to take a master's in psychology as well, took it at Columbia in **1942**, and still could not find work.

**What he was hired to do.** In **1943** he found employment at the American Foundation for the Blind, where the obituary records the actual tasks: stitching pillowcases, loading talking book records onto trucks, and counting phonograph needles into envelopes. He took mathematics classes on every free evening for fun and played piano in Brooklyn clubs for extra money.

**The private code.** Because no braille notation existed for the mathematics he wanted to do, he built one for himself, to keep track of his own calculations. It was not a proposal. It was a working tool that one person could read.

**How it stopped being private, which is the part to remember.** Through a research committee of blind New Yorkers at the Foundation, Nemeth met **Clifford Witcher**, who worked at AFB and held a PhD in physics. Witcher came to him one day needing a table of integrals. AFB records the exchange: "I have one," Abe told him, "but it's written in my own private code. You wouldn't be able to read it." Witcher convinced him to teach it, and was an immediate convert.

**And Witcher happened to sit on the committee that could adopt it.** He was a member of the Joint Uniform Braille Committee, described by AFB as the 1950s equivalent of the Braille Authority of North America, and he invited Nemeth to present the code to it. In AFB's telling, "Abe gave his report one morning in 1951 and in the afternoon his code, called then and forever thereafter the Nemeth code, was unanimously adopted."

**One date to hold loosely.** AFB's obituary dates the adoption to 1951. Other accounts date the Nemeth code to 1952, which is when the American Printing House published it. Both are in circulation, they are probably describing two different events, and this course does not know which. It prints the AFB account because that is the document this pass read, says the discrepancy exists, and has filed the question rather than picking the tidier number.

**What happened next, briefly, because it belongs to the argument.** His wife asked whether he would rather be an unemployed mathematician than an unemployed psychologist. He left AFB, enrolled in a doctorate at Columbia, and after four years and a hundred employment letters was offered a job at the University of Detroit, where he taught every graduate and undergraduate mathematics course and founded the computer science department in the 1960s.

**Now count the names.** The code carries Nemeth's name and always will, which is a credit that landed. Clifford Witcher, without whom it stays in one man's notebook, is a name almost nobody knows. And notice what the absence of a mathematics code was a record OF. It was not a record of a technical difficulty. It was a record of what the people who built braille codes expected blind people to need.

:::reveal Why did no braille code for higher mathematics exist before Nemeth built one? ||| Not because of a technical obstacle. Because nobody who built braille codes expected a blind person to need to write complex equations, which is the same low expectation Section 4 found encoded in the curriculum.

:::reveal What turned Nemeth's private notation into a national code? ||| Clifford Witcher, a blind physicist at AFB, needed a table of integrals, persuaded Nemeth to teach him the private code, and then invited him to present it to the Joint Uniform Braille Committee, on which Witcher sat.

:::reveal How does this course handle the 1951 and 1952 dates for the Nemeth code? ||| It prints AFB's 1951 adoption account because that is the document this pass read, states that other accounts date the code to 1952 when APH published it, and files the discrepancy rather than choosing the tidier number.

## Vocabulary
- **Nemeth Code**: the braille notation for mathematics and science that Nemeth first built as a private tool for his own calculations.
- **Joint Uniform Braille Committee**: the body that adopted the code, described by AFB as the 1950s equivalent of the Braille Authority of North America.
- **Private code**: a notation built by one person for their own use, which is how several of the systems in this course started.
- **Credit that landed**: a case where the record does name the blind inventor, as with Nemeth and with Louis Braille, in contrast to the people around them.
- **Absence as evidence**: the argument that a missing notation records an expectation rather than a technical limit.

## Sources
Kendrick, D. (2013, November). Dr. Abraham Nemeth: The Louis Braille of mathematics dies at age 94. *AccessWorld*. American Foundation for the Blind. https://afb.org/aw/14/11/15736 (All quotations in this lesson are from this obituary.)`,
    },
    {
      slug: "a-method-for-checking-who-is-named",
      title: "10 · A method for checking who is named",
      section: "Section 5 · Credit: who is named on the things blind people built",
      body: `There is a story people tell about blindness technology: a blind person identifies the problem, a sighted engineer builds the artefact and takes the patent and the press, blind people do the testing, and when the technology goes mainstream the blindness origin drops out of the popular account entirely. Some of that story is true. All of it is checkable. This lesson is about how to check it, and about why this course will not tell you the version it has not checked.

**Four records, and what each one does and does not establish.**

*The patent* records an inventor of record, which is a legal category rather than a description of who did the work. It establishes who filed. It does not establish who identified the problem, who tested the thing, or who worked out how a person learns to use it.

*The acknowledgements* in a paper record who was thanked and for what. This is where testing, training design and evaluation usually live, and it is the section a press release never quotes.

*The institutional archive* records who was in the room: minutes, memos, correspondence, board votes, staff lists. It is the slowest of the four to consult and the only one that can show a decision being made.

*The press coverage* records whose name survived. It is evidence about publicity, not about work, and confusing the two is how most credit disputes start.

**A worked example you already have.** Section 3's account of the American standards war comes from Robert B. Irwin, who was blind. From his chapter you can establish, in the minutes, that the Uniform Type Committee of 1905 had five members and that all five were blind, and that the Tactile Print Investigating Commission before it was chaired by a blind braille printer. No patent would carry that. No press account did. The archive did, and it changes the story from "experts settled the code" to "blind readers organised and settled it after the experts had failed for thirty years."

**A second one, from the same source.** American braille was invented by Joel W. Smith, a blind piano tuning teacher, on a frequency principle nobody reading with their eyes had felt the need for. The antagonist every general account of the War of the Dots names is William Bell Wait, a sighted superintendent. Try the test yourself on any popular history: count the sentences about Wait and the sentences about Smith.

**And the counter-case, because an argument that only ever finds one direction of error is not doing history.** Section 2's Barbier correction runs the other way. The popular story overstated a sighted man's military inventiveness and understated that his method was designed for blind readers, and the archive took credit *away* from the myth.

**One caution about the phrase you will reach for.** When a technology built for blind users becomes mainstream, people call it the curb-cut effect and say it helped everyone in the end. Name it, but do not let it do the work of the argument. "It helped everyone" is precisely the framing that lets the middle steps, who was credited and who was not, go unexamined.

**Finally, what this lesson deliberately does not do.** There are famous cases in this territory: a reading machine that turned print into a tactile image, a mechanical brailler still in production, the software product that gave an entire category of technology its name. Each has a blind person somewhere in its record whose role is worth establishing. This pass did not do that archival work, and naming a case you have not checked is exactly how a grievance turns into folklore. So the course gives you the method, states that the work is outstanding, and files it where somebody can pick it up.

:::reveal What do the four records this lesson names each establish? ||| The patent establishes who filed, not who did the work. The acknowledgements record who was thanked, which is where testing and training design usually sit. The archive records who was in the room and can show a decision being made. The press records whose name survived, which is evidence about publicity rather than work.

:::reveal What does Irwin's chapter establish about the 1905 Uniform Type Committee that no patent or press account could? ||| That all five of its members were blind, and that the commission preceding it was chaired by a blind braille printer, which turns "experts settled the code" into "blind readers organised and settled it".

:::reveal Why does this lesson refuse to walk through the famous device cases? ||| Because the archival work of establishing each blind participant's role was not done in this pass, and naming a case you have not checked is how a grievance becomes folklore.

## Vocabulary
- **Inventor of record**: the person a patent names, a legal category that is not a description of who identified the problem or who tested the result.
- **Acknowledgements**: the part of a paper recording who was thanked and for what, where testing and training design usually appear and where press coverage never looks.
- **Institutional archive**: minutes, memos, correspondence and staff lists, the only one of the four records that can show a decision being made.
- **Curb-cut effect**: the observation that access built for disabled users benefits everyone, true as far as it goes and useless as a substitute for asking who was credited.
- **Outstanding archival work**: a case this course names as unchecked rather than teaching, so that the gap is visible instead of filled with a plausible story.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Credit, and how to check it",
      section: "Section 5 · Credit: who is named on the things blind people built",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why did no braille code for higher mathematics exist before Nemeth built one?",
            options: [
              "Nobody expected a blind person to need it",
              "Because the six-dot cell has too few patterns to carry mathematical notation",
              "Because the Joint Uniform Braille Committee had rejected three earlier proposals",
              "Because the federal appropriation covered literary books but not technical ones",
            ],
            correctIndex: 0,
            explanation:
              "The absence was a record of an expectation rather than a technical limit, which is the same mechanism Section 4 found in the vocational curriculum.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What degree did Nemeth take at Brooklyn College in 1940?",
            options: [
              "Psychology",
              "Mathematics, over the objections of the experts who advised against it",
              "Physics, the same field in which Clifford Witcher held his doctorate",
              "Music, which he had been playing professionally in Brooklyn clubs",
            ],
            correctIndex: 0,
            explanation:
              "Experts told him mathematics was an unwise pursuit for a blind man, so he took psychology, then a master's in psychology at Columbia in 1942, and still could not find work.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What work was Nemeth given when AFB hired him in 1943?",
            options: [
              "Stitching pillowcases and counting phonograph needles",
              "Transcribing mathematical textbooks into the literary braille code then in use",
              "Testing talking-book machines in the Foundation's own research laboratory",
              "Teaching braille to newly blinded veterans returning from the war",
            ],
            correctIndex: 0,
            explanation:
              "The obituary lists stitching pillowcases, loading talking book records onto trucks, and counting phonograph needles into envelopes. He took mathematics classes in the evenings for fun.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What was Nemeth's code originally for?",
            options: [
              "Keeping track of his own calculations",
              "A proposal he intended to submit to the braille authority of the day",
              "Teaching mathematics to blind students at the Foundation's evening classes",
              "Transcribing published textbooks that no existing code could handle",
            ],
            correctIndex: 0,
            explanation:
              "It was a working tool one person could read, which is why the interesting question is how it stopped being private.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Who was Clifford Witcher?",
            options: [
              "A blind physicist who worked at AFB",
              "The chairman of the Joint Uniform Braille Committee in the early 1950s",
              "A sighted mathematician at Columbia who supervised Nemeth's doctorate",
              "The American Printing House superintendent who agreed to publish the code",
            ],
            correctIndex: 0,
            explanation:
              "He held a PhD in physics, worked for the Foundation, and met Nemeth through a research committee of blind New Yorkers there.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What did Witcher come to Nemeth needing?",
            options: [
              "A table of integrals",
              "A transcriber who could produce his physics papers in literary braille",
              "A tutor in mathematics for the students he was teaching at the Foundation",
              "A reader who could dictate technical material to him from print",
            ],
            correctIndex: 0,
            explanation:
              "Nemeth told him he had one but that it was written in his own private code, and Witcher persuaded him to teach it.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Why did Witcher's interest turn a private notation into a national code?",
            options: [
              "He sat on the committee that could adopt it",
              "He funded its publication through a research grant he held at the Foundation",
              "He wrote the first textbook using it, which forced the schools to teach it",
              "He was the Foundation's director and could order it into use",
            ],
            correctIndex: 0,
            explanation:
              "He was a member of the Joint Uniform Braille Committee, described by AFB as the 1950s equivalent of BANA, and invited Nemeth to present the code to it.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "How quickly was the code adopted, on AFB's account?",
            options: [
              "The same day it was presented",
              "After a three-year trial in the schools of four states that volunteered",
              "After the American Printing House had published a full transcriber's manual",
              "After a ballot of the committee's member organisations lasting several months",
            ],
            correctIndex: 0,
            explanation:
              "AFB writes that Nemeth gave his report one morning in 1951 and that in the afternoon his code was unanimously adopted.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "How does this course handle the competing 1951 and 1952 dates for the Nemeth code?",
            options: [
              "Prints the source it read and files the discrepancy",
              "Averages the two by describing the code as adopted in the early 1950s",
              "Prints 1952, which is the date the majority of published accounts give",
              "Omits the date entirely, since a contested figure should not reach a learner",
            ],
            correctIndex: 0,
            explanation:
              "AFB's obituary dates adoption to 1951 and other accounts date the code to 1952, when APH published it. They are probably two different events, and the question is filed rather than guessed.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What question did Nemeth's wife put to him?",
            options: [
              "Whether he would rather be an unemployed mathematician than an unemployed psychologist",
              "Whether the private code was worth the years it would take to have it adopted",
              "Whether he should accept the University of Detroit post rather than stay at AFB",
              "Whether a hundred employment letters was enough before he gave up on academia",
            ],
            correctIndex: 0,
            explanation:
              "AFB records the question and its consequence: he left the Foundation, enrolled in a doctorate at Columbia, and eventually taught at the University of Detroit.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What did Nemeth found at the University of Detroit in the 1960s?",
            options: [
              "Its computer science department",
              "Its braille transcription service, which supplied textbooks to Michigan schools",
              "The Michigan Commission for the Blind, which he later chaired",
              "A research programme on tactile reading speed among sighted adults",
            ],
            correctIndex: 0,
            explanation:
              "He taught every graduate and undergraduate mathematics course there and founded the computer science department.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Whose name does the mathematics code carry, and whose does the story usually drop?",
            options: [
              "Nemeth's, and Witcher's",
              "Witcher's, and Nemeth's, since Witcher brought it to the committee",
              "The Joint Uniform Braille Committee's, and both men's",
              "The American Printing House's, since it published and distributed the code",
            ],
            correctIndex: 0,
            explanation:
              "Nemeth's credit landed and always will. Witcher, without whom the code stays in one man's notebook, is a name almost nobody knows.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What does a patent establish, on this lesson's account?",
            options: [
              "Who filed",
              "Who identified the problem the invention solves, and when they first stated it",
              "Who tested the device and confirmed that it worked for its intended users",
              "Who taught the first users how to operate it, which is usually the harder task",
            ],
            correctIndex: 0,
            explanation:
              "Inventor of record is a legal category. It says nothing about who identified the problem, who tested the thing, or who worked out how a person learns to use it.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Where do testing, training design and evaluation usually appear in the record?",
            options: [
              "In the acknowledgements",
              "On the patent, alongside the inventors of record and any assignees",
              "In the press release, which names everyone the institution wants credited",
              "In the product manual, which lists the staff who prepared it",
            ],
            correctIndex: 0,
            explanation:
              "The acknowledgements record who was thanked and for what, and it is the section a press release never quotes.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What can the institutional archive show that the other three records cannot?",
            options: [
              "A decision being made",
              "The commercial terms on which an invention was licensed to a manufacturer",
              "How many units of a device were eventually sold, and to whom",
              "Whether the invention worked for the users it was designed for",
            ],
            correctIndex: 0,
            explanation:
              "Minutes, memos, correspondence, board votes and staff lists record who was in the room, which is the only way to watch a decision happen.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What is press coverage evidence about?",
            options: [
              "Publicity",
              "The technical merit of a device, since journalists consult independent experts",
              "The order in which the people involved contributed to the work",
              "The commercial success of a product, measured by how long the coverage runs",
            ],
            correctIndex: 0,
            explanation:
              "It records whose name survived, which is evidence about publicity rather than about work. Confusing the two is how most credit disputes start.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What does Irwin's chapter establish about the 1905 Uniform Type Committee?",
            options: [
              "All five members were blind",
              "That it was appointed by the American Printing House board of trustees",
              "That it recommended keeping American braille and retiring New York Point",
              "That its testing was funded by the federal printing appropriation",
            ],
            correctIndex: 0,
            explanation:
              "No patent would carry that and no press account did. The archive did, and it turns \"experts settled the code\" into \"blind readers organised and settled it\".",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What test does this lesson propose for any popular history of the War of the Dots?",
            options: [
              "Count the sentences about Wait against those about Smith",
              "Check whether the account names the year New York Point was published",
              "See whether it cites Irwin directly or a tertiary summary of him",
              "Look for a patent number attached to either of the competing codes",
            ],
            correctIndex: 0,
            explanation:
              "American braille was invented by a blind piano tuning teacher and the antagonist everyone names is a sighted superintendent, which is the whole point in one comparison.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Which case in this course runs in the opposite direction from the credit pattern?",
            options: [
              "Barbier",
              "Nemeth, whose name is on the code he built as a private notation",
              "Joel W. Smith, whose system was renamed American braille in 1900",
              "Witcher, who brought a private code to the committee that adopted it",
            ],
            correctIndex: 0,
            explanation:
              "The archive took credit away from a myth about military inventiveness rather than restoring it to someone the record had dropped.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What caution does this lesson attach to the curb-cut effect?",
            options: [
              "Do not let it do the work of the argument",
              "Do not use the phrase, since its origin in kerb design is itself disputed",
              "Apply it only to physical access, never to software or to reading formats",
              "Treat it as evidence that the credit pattern does not exist at all",
            ],
            correctIndex: 0,
            explanation:
              "\"It helped everyone in the end\" is precisely the framing that lets the middle steps, who was credited and who was not, go unexamined.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Why does this lesson decline to walk through the famous device cases?",
            options: [
              "The archival work was not done in this pass",
              "Because those devices are still under patent and cannot be discussed in detail",
              "Because their manufacturers refused permission for the course to describe them",
              "Because the pattern is better shown with codes than with physical hardware",
            ],
            correctIndex: 0,
            explanation:
              "Naming a case you have not checked is how a grievance becomes folklore, so the course gives the method, says the work is outstanding, and files it.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What is the popular story about blindness technology, as this lesson states it?",
            options: [
              "A blind person finds the problem, a sighted engineer takes the credit",
              "Blind users reject each new device until a blind engineer redesigns it",
              "Institutions fund the research and then suppress the results for commercial reasons",
              "Devices are built for blind users and then quietly withdrawn as unprofitable",
            ],
            correctIndex: 0,
            explanation:
              "The lesson states the story, says some of it is true and all of it is checkable, and then gives the four records to check it with.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What principle did Joel W. Smith apply that a sighted reader would not have felt the need for?",
            options: [
              "Letter frequency",
              "A variable-base cell, which saved width on the commonest letters",
              "Non-bridging contractions, so that syllable divisions stayed visible",
              "Capitalisation left optional with the publisher, to reduce bulk",
            ],
            correctIndex: 0,
            explanation:
              "Assigning the fewest-dot cells to the most frequent letters matters to a hand that has to feel and write every dot, and matters not at all to an eye.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What does this course call the outstanding work on the famous device cases?",
            options: [
              "Filed, so somebody can pick it up",
              "Impossible, because the relevant archives are closed to researchers",
              "Complete, since the research document established each participant's role",
              "Unnecessary, because the pattern is already proved by the code cases",
            ],
            correctIndex: 0,
            explanation:
              "The course states the gap and files it, which is its standing practice for anything it could not settle in the authoring pass.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Which body chaired by a blind braille printer preceded the Uniform Type Committee?",
            options: [
              "The Tactile Print Investigating Commission",
              "The Joint Uniform Braille Committee, which later adopted the Nemeth code",
              "The Commission on Uniform Type, which adopted grade one and a half in 1918",
              "The board of the American Printing House for the Blind",
            ],
            correctIndex: 0,
            explanation:
              "Created in 1902 and chaired by Ambrose M. Shotwell, with John B. Curtis, also sightless, among its members.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What is an inventor of record?",
            options: [
              "A legal category",
              "The person who first demonstrated a working prototype in public",
              "The employee an institution designates as its representative on a patent",
              "Whoever the press names most often in the first year after a launch",
            ],
            correctIndex: 0,
            explanation:
              "It is what a patent names, and it is not a description of who identified the problem, who tested the result, or who taught anyone to use it.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Which record would you consult to find out who worked out how people learn to use a device?",
            options: [
              "The acknowledgements",
              "The patent, which lists everyone who contributed to the claimed invention",
              "The press coverage, which typically interviews the first users",
              "The product's user manual, which credits its authors on the title page",
            ],
            correctIndex: 0,
            explanation:
              "Training design and evaluation live in acknowledgements far more often than on patents, and the training method is frequently the harder invention.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What does the Nemeth story show about absence in a record?",
            options: [
              "A missing notation can record an expectation",
              "A missing patent proves that the work was done inside an institution",
              "A missing acknowledgement means the contributor asked not to be named",
              "A missing press account means the technology never reached the market",
            ],
            correctIndex: 0,
            explanation:
              "There was no mathematics code because nobody expected a blind person to need one, so the gap in the codes is evidence about the people who built them.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Which pairing correctly matches a person to what they did?",
            options: [
              "Nemeth, built a private mathematics notation",
              "Witcher, published the mathematics code through the American Printing House",
              "Smith, chaired the committee that adopted the mathematics code in 1951",
              "Irwin, invented the frequency-based rearrangement called American braille",
            ],
            correctIndex: 0,
            explanation:
              "Witcher brought the code to the committee, Smith invented American braille in 1878, and Irwin wrote the first-hand history of the standards war.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What did Nemeth do on his free evenings while employed at AFB?",
            options: [
              "Took mathematics classes",
              "Transcribed textbooks into his own private code for other blind students",
              "Lobbied the Joint Uniform Braille Committee to consider a mathematics notation",
              "Studied for the doctorate he had already enrolled in at Columbia",
            ],
            correctIndex: 0,
            explanation:
              "He took mathematics classes on every free evening for fun, and played piano in Brooklyn clubs for extra money, while stitching pillowcases by day.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "How many employment letters did Nemeth send before the University of Detroit offer?",
            options: [
              "About a hundred",
              "About a dozen, since mathematics posts were scarce in the early 1950s",
              "None, because the offer followed directly from his work on the code",
              "About five hundred, over the four years of his doctoral programme",
            ],
            correctIndex: 0,
            explanation:
              "The obituary gives four years and one hundred employment letters before the offer came.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "How does this lesson describe what Witcher did after learning the private code?",
            options: [
              "Became an immediate convert and took it to his committee",
              "Published a paper describing it under joint authorship with Nemeth",
              "Persuaded the Foundation to fund a full transcriber's manual for it",
              "Used it privately for his own physics work and told nobody else",
            ],
            correctIndex: 0,
            explanation:
              "AFB's account is that he was an immediate convert and invited Nemeth to present the code to the Joint Uniform Braille Committee.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Which is a fair description of what this section teaches?",
            options: [
              "A method, tested on two cases and a counter-case",
              "A list of devices whose blind contributors have been erased from the record",
              "A legal analysis of how patents allocate credit between collaborators",
              "A biography of Abraham Nemeth and the code that carries his name",
            ],
            correctIndex: 0,
            explanation:
              "Four records to consult, the Smith and Nemeth cases where the check has been done, and the Barbier correction that runs the other way.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What did the experts advise Nemeth about mathematics?",
            options: [
              "That it was an unwise pursuit for a blind man",
              "That he should first build a notation before applying to any programme",
              "That he should study physics instead, as Clifford Witcher had done",
              "That he would need a sighted reader for every course he took",
            ],
            correctIndex: 0,
            explanation:
              "So he took psychology twice and found no work either time, which is the context for what he built in his own time.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What was the Joint Uniform Braille Committee, in AFB's description?",
            options: [
              "The 1950s equivalent of BANA",
              "A subcommittee of the American Printing House board of trustees",
              "The successor to the Commission on Uniform Type, dissolved in 1932",
              "An international body representing both British and American code authorities",
            ],
            correctIndex: 0,
            explanation:
              "AFB calls it the 1950s equivalent of the Braille Authority of North America, which is the body that later adopted UEB.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Which of the four records is slowest to consult?",
            options: [
              "The institutional archive",
              "The patent, which requires a search of the classification index first",
              "The acknowledgements, since papers must be obtained individually",
              "The press coverage, which is scattered across local newspapers",
            ],
            correctIndex: 0,
            explanation:
              "It is the slowest and the only one that can show a decision being made, which is why it is also where the surprises are.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What does this course say about a case it names but has not checked?",
            options: [
              "It becomes folklore",
              "It should be described with a hedge until a reviewer can settle it",
              "It can be taught provided the uncertainty appears in the explanation",
              "It should be attributed to whichever secondary source states it most clearly",
            ],
            correctIndex: 0,
            explanation:
              "Naming an unchecked case is how a grievance becomes folklore, which is why the device cases are filed rather than narrated.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "In what year was Nemeth born, on AFB's account?",
            options: [
              "1918",
              "1940, the year he completed his first degree at Brooklyn College",
              "1943, the year he began work at the American Foundation for the Blind",
              "1951, the year the committee adopted the code that carries his name",
            ],
            correctIndex: 0,
            explanation:
              "Born in 1918 on New York's Lower East Side to Jewish immigrant parents. The other years are his degree, his AFB job and the code's adoption.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What did Nemeth's parents not know or care about?",
            options: [
              "The expectations of the era for blind children",
              "The braille codes then competing for use in New York's public schools",
              "The vocational trades the residential schools were teaching",
              "The employment discrimination he would meet after graduating",
            ],
            correctIndex: 0,
            explanation:
              "AFB's phrase is that they didn't know or care about those expectations, and raised him and his blind sister to be independent instead.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Where did Nemeth learn braille?",
            options: [
              "In public schools",
              "At a residential school for blind children in New York State",
              "At the American Foundation for the Blind, after he was hired in 1943",
              "From his parents, who taught both of their blind children at home",
            ],
            correctIndex: 0,
            explanation:
              "He attended public schools, where he learned to read and write braille and to speak English alongside children whose families spoke Yiddish at home.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What does this lesson say about the story that blind people do the testing?",
            options: [
              "Some of it is true and all of it is checkable",
              "It is a myth produced by advocacy organisations with an interest in it",
              "It is established well enough that no further archival work is needed",
              "It cannot be checked, because acknowledgements are rarely preserved",
            ],
            correctIndex: 0,
            explanation:
              "That framing is what turns the section from a grievance into a method, and it is why four records are named rather than one conclusion.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Which record would show whether a blind employee sat on a design committee?",
            options: [
              "Minutes and staff lists",
              "The patent, which lists the assignee organisation and its personnel",
              "The published paper, in its methods rather than its acknowledgements",
              "Contemporary press coverage of the product's launch",
            ],
            correctIndex: 0,
            explanation:
              "That is precisely what the institutional archive is for, and it is how Irwin's chapter can record that all five Uniform Type Committee members were blind.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What kind of category does this lesson say credit disputes usually confuse?",
            options: [
              "Publicity with work",
              "Invention with manufacture, which are separately recorded",
              "Adoption with publication, which happen at different times",
              "Testing with training design, which are done by different people",
            ],
            correctIndex: 0,
            explanation:
              "Press coverage records whose name survived, which is not the same question as who did the work, and treating the two as one is where the arguments start.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Which is true of the credit in the Nemeth case?",
            options: [
              "It landed on the inventor and not on the colleague",
              "It landed on the institution rather than on either individual",
              "It landed on the committee, which is named in every account of the code",
              "It was disputed at the time and settled only after Nemeth's death",
            ],
            correctIndex: 0,
            explanation:
              "The code carries Nemeth's name permanently. Witcher, who made it public, is the name that drops out, which is why the section counts names rather than assuming a villain.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What does this course do with the claim that a device's blind testers were uncredited?",
            options: [
              "Files it as work to be done",
              "States it as established, since the pattern holds in the cases it did check",
              "Rejects it, because acknowledgements usually name the testers",
              "Repeats it with a hedge in the lesson body and no further action",
            ],
            correctIndex: 0,
            explanation:
              "The pattern holding in two checked cases is not evidence about a third, so the unchecked cases are filed rather than narrated.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "How does this course describe Nemeth's code in one phrase?",
            options: [
              "A working tool one person could read",
              "A committee proposal circulated for comment before adoption",
              "A textbook notation designed for classroom transcription",
              "An international standard developed over several years of consultation",
            ],
            correctIndex: 0,
            explanation:
              "It was built to keep track of his own calculations and only became public because another blind man happened to need a table of integrals.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Why does the lesson insist that an argument must survive its counter-case?",
            options: [
              "Because errors that only run one way are not history",
              "Because journals require a discussion of contrary evidence before publication",
              "Because the credit pattern has been formally disproved for hardware cases",
              "Because a single counter-example is enough to abandon a general claim",
            ],
            correctIndex: 0,
            explanation:
              "The Barbier correction removes credit from a myth rather than restoring it to someone erased, and the course keeps it precisely because it cuts against its own pattern.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What kind of employment did AFB give Nemeth in 1943, relative to his qualifications?",
            options: [
              "Manual work, despite two graduate degrees",
              "A research post in its technical evaluation laboratory, matched to his training",
              "A teaching post in braille mathematics, which he had already begun to codify",
              "A clerical position transcribing textbooks into the literary braille code",
            ],
            correctIndex: 0,
            explanation:
              "He held a bachelor's and a master's in psychology and was set to stitching pillowcases, loading talking book records onto trucks and counting phonograph needles into envelopes.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The organisations, and the law they made
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-organisations-that-disagree",
      title: "11 · Two organisations that disagree, in public, on purpose",
      section: "Section 6 · The organisations, and the law they made",
      body: `The two largest membership organisations of blind people in the United States have been arguing with each other since 1961. Neither is a fringe. Both are run by blind people. The argument is the subject matter of this lesson, and the one thing this course will not do is settle it.

**The National Federation of the Blind, in its own words.** The NFB records its founding as **16 November 1940**, at the Redington Hotel in **Wilkes-Barre, Pennsylvania**, by blind people from seven states: California, Illinois, Minnesota, Missouri, Ohio, Pennsylvania and Wisconsin. They drafted a constitution whose stated purpose was to "promote the economic and social welfare of the blind", with a major emphasis on influencing national policy. The organisation's own account of its guiding principles names three: that blind people have an inalienable right to independence, that blind people have equal capacity, and that **"only blind people themselves can legitimately speak for the blind community"**. Its history quotes Jacobus tenBroek, its founder, recalling in 1955 that everybody who came to Wilkes-Barre had already agreed a national organisation was needed and that the only real discussion was about mechanics.

**The American Council of the Blind, founded 7 July 1961.** It exists because people left the Federation. The ACB describes itself as a member-driven consumer organisation and, at sixty, counted sixty-eight affiliates.

**What the split was about, quoted from the side that walked out.** Mitch Pomerantz, then ACB's president, wrote that "the so-called 'civil war' fought within the Federation which led to a group of longtime leaders and members walking out and founding the American Council of the Blind in 1961" illustrates why blind people "could no more speak with one voice than today's Congress". He names three durable disagreements rather than one cause:

1. **Governance.** "Should the organization be governed from the top by a strong president, or by the grassroots membership?"
2. **The meaning of blindness.** "What is the overall importance of blindness in the lives of those who are blind: is it a mere nuisance or a significant disability?"
3. **Accommodation priorities.** "To what extent should accommodations such as accessible pedestrian signals and video description be advocacy priorities."

He concludes that these are "strongly held ideological positions which argue against one overarching blindness organization and one so-called philosophy of blindness", and that he does not expect to see a unified blindness organisation in his lifetime.

**Now the rule that governs this whole lesson.** Almost every available source on this argument is published by one of the two organisations, including their descriptions of each other. So: attribute every line to the organisation that wrote it, and never quote one organisation's characterisation of the other as neutral description. The three axes above are the ACB's account of the disagreement. The NFB would frame the 1961 events differently, and a reader who wants that framing should go and read the NFB's own current statements rather than an outsider's summary of them.

**For the same reason, this course does not tell you where either organisation stands today** on accessible pedestrian signals, on audio description, or on training methods. Positions move, and a position characterised by the other side is not a position. Read each organisation's own current policy statements. That instruction is the teachable skill in this section: this is a live argument between partisan primary sources, which is the hardest and most useful kind of source to learn to read.

**One sourcing fact, which is itself a records lesson.** The NFB's website refused an automated reader during this authoring pass, so the Federation's own words above are quoted from a snapshot of its history page captured by the Internet Archive on 16 January 2025. A course about who controls the record had to use a web archive to let one side speak for itself.

:::reveal What three guiding principles does the NFB's own history name? ||| That blind people have an inalienable right to independence, that blind people have equal capacity, and that only blind people themselves can legitimately speak for the blind community.

:::reveal What are the three durable disagreements Pomerantz names, and whose account are they? ||| Governance by a strong president or by the grassroots membership; whether blindness is a mere nuisance or a significant disability; and how far accommodations such as accessible pedestrian signals and video description should be advocacy priorities. They are the ACB's account, and the lesson says so.

:::reveal Why does this course refuse to tell you where either organisation stands today on a specific accommodation? ||| Because positions move, and because a position characterised by the other side is not a position. The instruction is to read each organisation's own current statements.

## Vocabulary
- **National Federation of the Blind**: founded 16 November 1940 at Wilkes-Barre by blind people from seven states, on the principle that only blind people can legitimately speak for blind people.
- **American Council of the Blind**: founded 7 July 1961 by people who left the Federation, describing itself as a member-driven consumer organisation.
- **Partisan primary source**: a document written by a party to the dispute it describes, which is genuine evidence about its author and never neutral description of anyone else.
- **The three axes**: governance, the meaning of blindness, and accommodation priorities, as one side sets them out.
- **Archived snapshot**: a copy of a web page held by a web archive, used here because one organisation's live site would not serve an automated reader.

## Sources
National Federation of the Blind. (2025, January 16). *History and governance* [Archived snapshot]. Internet Archive. http://web.archive.org/web/20250116010447/https://nfb.org/about-us/history-and-governance (The NFB is a membership organisation of blind people; the live page did not serve an automated reader during this pass.)
Pomerantz, M. (n.d.). *President's message: Will there ever be a unified organized blind movement?* American Council of the Blind. https://www.acb.org/content/presidents-message-will-there-ever-be-unified-organized-blind-movement-mitch-pomerantz (The ACB is a membership organisation of blind people; all three quoted questions are from this message.)
American Council of the Blind. (2021, July 7). *The American Council of the Blind turns 60 today!* https://www.acb.org/american-council-blind-turns-60-today`,
    },
    {
      slug: "who-is-allowed-to-make-a-copy",
      title: "12 · Who is allowed to make a copy",
      section: "Section 6 · The organisations, and the law they made",
      body: `Here is the inversion worth ending on. In the sibling course about Deaf America, copyright is a wall: almost no signed-language video may lawfully enter a paid course. Here, copyright has a purpose-built door, and organised blind people spent a century building it.

**The library, 1931.** Identical bills were introduced in 1930 by Representative Ruth Pratt (H.R. 11365) and Senator Reed Smoot (S. 4030). The Pratt-Smoot Act became law on **3 March 1931** (46 Stat. 1487, now codified at 2 U.S.C. 135a). A joint resolution the following day appropriated **$100,000** for fiscal 1932, and the project began operating on **1 July 1931**.

**The talking book, and a claim this course will not make.** By 1933 the American Foundation for the Blind had produced two kinds of machine and a durable record cut at 150 grooves to the inch, so that a book of 60,000 words fitted on eight or nine double-faced twelve-inch discs. The turntable ran at **33 and a third revolutions per minute**, giving thirty minutes of reading on each side. First titles ordered included the Declaration of Independence, the Constitution, Washington's Farewell Address, the Gettysburg Address, Shakespeare, Kipling and Wodehouse. It is often said that the long-playing record was therefore developed for blind readers more than a decade before the commercial LP. This course does not assert that, because the Library of Congress history it read establishes the speed and the date but not the causal claim, and the question is filed.

**Then the statute grew, and each amendment is a decision about who counts.** On **3 July 1952** the word "adult" was deleted, opening the service to blind children. In **1962** Congress authorised a collection of musical scores. In **1966**, Public Law 89-522 extended talking-book service to everyone unable to read standard print because of a visual or physical disability, which is where low vision formally enters the programme.

**The copyright door, 1996 and 2018.** The Chafee Amendment, **17 U.S.C. 121**, lets an "authorized entity", meaning a nonprofit or governmental agency whose primary mission is specialised services for blind or otherwise disabled people, reproduce and distribute accessible-format copies exclusively for eligible persons, without the rightsholder's permission.

**What it could not do was cross a border**, so the same book was re-transcribed country by country. The **Marrakesh Treaty**, adopted at Marrakesh on **27 June 2013**, permits authorised entities to import and export accessible copies to each other. The United States signed on 2 October 2013 and deposited its ratification on **8 February 2019**, which the Library of Congress records as making it the treaty's fiftieth party; it entered into force for the United States on 8 May 2019. As of this writing WIPO lists **105** members.

**The implementing statute rewrote the definitions, and the new words reached the library.** The Marrakesh Treaty Implementation Act, Public Law 115-261, was approved **9 October 2018**. It struck "specialized formats" and inserted "accessible formats", struck "blind or other persons with disabilities" and inserted "eligible persons", and added a new section 121A for cross-border exchange. Today the regulation governing the national library, **36 CFR 701.6**, no longer states an acuity threshold at all: it points at the "eligible person" definition in 17 U.S.C. 121, certified by a listed professional. A legal definition of who counts is a records artefact, and this one was rewritten by a treaty.

**And the name changed too.** On **1 October 2019** the service became the National Library Service for the Blind and Print Disabled, dropping "Physically Handicapped". Catalogues, citations and finding aids still carry the old name, which is exactly what an archives course teaches you to expect.

**One live question, taught as unsettled.** The Department of Justice's Title II rule, published in the Federal Register on **24 April 2024**, sets **WCAG 2.1 Level AA** as the technical standard for the web content and mobile apps of state and local governments. An interim final rule published **20 April 2026** extended compliance to 26 April 2027 for entities serving 50,000 people or more and 26 April 2028 for smaller ones and special districts. Title II is government. Do not let anyone tell you the ADA currently requires WCAG 2.1 AA of every website; that is what a compliance vendor says, and it is not what that rule says. WCAG itself is a W3C standard, version 2.0 carrying the status line "W3C Recommendation 11 December 2008", built on four principles, perceivable, operable, understandable and robust, at conformance levels A, AA and AAA.

:::reveal What did the Marrakesh Treaty add that a domestic copyright exception could not provide? ||| Cross-border exchange. Authorised entities may import and export accessible copies to each other, so the same book need not be re-transcribed from scratch in every country.

:::reveal What replaced the acuity threshold in the regulation governing the national library service? ||| The "eligible person" definition in 17 U.S.C. 121, which the Marrakesh Treaty Implementation Act rewrote in 2018, certified by one of a listed set of professionals.

:::reveal What does the Department of Justice's 2024 rule actually cover, and what does it not? ||| It sets WCAG 2.1 Level AA as the technical standard for the web content and mobile apps of state and local governments under Title II. It does not make WCAG 2.1 AA a legal requirement for every private website.

## Vocabulary
- **Pratt-Smoot Act**: the law of 3 March 1931 that created the national reading programme, funded the next day with $100,000 for fiscal 1932.
- **Authorized entity**: under 17 U.S.C. 121, a nonprofit or government agency whose primary mission is specialised services, and therefore the body permitted to make accessible copies.
- **Eligible person**: the functional definition of who may receive those copies, rewritten by the Marrakesh Treaty Implementation Act in 2018 and now used by the library's own regulation.
- **Marrakesh Treaty**: adopted 27 June 2013, in force for the United States from 8 May 2019, permitting authorised entities to send accessible copies across borders.
- **Renaming as a records event**: the 2019 change to National Library Service for the Blind and Print Disabled, which leaves the old name embedded in catalogues and citations.

## Sources
Library of Congress, National Library Service for the Blind and Print Disabled. (n.d.). *History*. https://www.loc.gov/nls/about/organization/history/
Marrakesh Treaty Implementation Act, Pub. L. No. 115-261, 132 Stat. 3667 (2018). https://www.govinfo.gov/content/pkg/PLAW-115publ261/html/PLAW-115publ261.htm
Limitations on exclusive rights: Reproduction for blind or other people with disabilities, 17 U.S.C. § 121. https://www.law.cornell.edu/uscode/text/17/121
Loans of library materials for blind and other print-disabled persons, 36 C.F.R. § 701.6. https://www.ecfr.gov/current/title-36/chapter-VII/part-701/section-701.6
World Intellectual Property Organization. (n.d.). *Marrakesh Treaty to Facilitate Access to Published Works for Persons Who Are Blind, Visually Impaired or Otherwise Print Disabled*. https://www.wipo.int/wipolex/en/treaties/details/843
United States Department of Justice, Civil Rights Division. (2024, April 8). *Fact sheet: New rule on the accessibility of web content and mobile apps provided by state and local governments*. https://www.ada.gov/resources/2024-03-08-web-rule/
World Wide Web Consortium. (2008, December 11). *Web Content Accessibility Guidelines (WCAG) 2.0*. https://www.w3.org/TR/WCAG20/`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The organisations, and the law they made",
      section: "Section 6 · The organisations, and the law they made",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date does the NFB record its founding?",
            options: [
              "16 November 1940",
              "7 July 1961, at the convention where a group of members walked out",
              "3 March 1931, the day the Pratt-Smoot Act became law",
              "2 October 1913, when the Uniform Type Committee reported to its association",
            ],
            correctIndex: 0,
            explanation:
              "16 November 1940. 7 July 1961 is the ACB's founding and 3 March 1931 is the Pratt-Smoot Act.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Where was the NFB founded?",
            options: [
              "Wilkes-Barre, Pennsylvania",
              "Kansas City, Missouri, where the 1901 tactile print resolution had also passed",
              "Berkeley, California, where its founder held a university appointment",
              "Louisville, Kentucky, at the American Printing House for the Blind",
            ],
            correctIndex: 0,
            explanation:
              "At the Redington Hotel in Wilkes-Barre, with blind people attending from seven states.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "How many states sent blind people to that first meeting?",
            options: [
              "Seven",
              "Sixty-eight, the number of affiliates the other organisation later counted",
              "Seventeen, matching the member organisations on the braille authority's board",
              "Fifty, since the organisation was national from its first day",
            ],
            correctIndex: 0,
            explanation:
              "California, Illinois, Minnesota, Missouri, Ohio, Pennsylvania and Wisconsin. Sixty-eight is the ACB's affiliate count at its sixtieth anniversary.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What did the NFB's original constitution state as its purpose?",
            options: [
              "To promote the economic and social welfare of the blind",
              "To secure a uniform braille code for all English-speaking countries",
              "To take control of the federal printing appropriation from the schools",
              "To provide reading materials to blind adults through a national library",
            ],
            correctIndex: 0,
            explanation:
              "That was the stated purpose, with a major emphasis on influencing national policy in Washington.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Which of these is one of the NFB's stated guiding principles?",
            options: [
              "Only blind people can legitimately speak for the blind community",
              "That every accommodation should be pursued wherever a blind traveller requests it",
              "That blindness is a significant disability rather than a mere nuisance",
              "That the organisation should be governed by its grassroots membership",
            ],
            correctIndex: 0,
            explanation:
              "The NFB names an inalienable right to independence, equal capacity, and that only blind people themselves can legitimately speak for the blind community.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Who is the founder the NFB's history quotes about the first meeting?",
            options: [
              "Jacobus tenBroek",
              "Mitch Pomerantz, who later described the split as a civil war",
              "Kenneth Jernigan, who led the organisation after its first two decades",
              "Robert B. Irwin, who was executive director of the Foundation at the time",
            ],
            correctIndex: 0,
            explanation:
              "The history quotes tenBroek in 1955 saying everybody who came had already agreed a national organisation was needed and that the discussion was about mechanics.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "On what date was the American Council of the Blind founded?",
            options: [
              "7 July 1961",
              "16 November 1940, when the older organisation was founded at Wilkes-Barre",
              "1 October 2019, when the national library service changed its name",
              "9 October 2018, when the Marrakesh implementing statute was approved",
            ],
            correctIndex: 0,
            explanation:
              "7 July 1961. The ACB marked its sixtieth anniversary on that date in 2021.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "How did the ACB come into existence?",
            options: [
              "People left the Federation",
              "It was chartered by Congress as a consumer counterpart to the printing house board",
              "It grew out of the alumni associations of the Southern residential schools",
              "It was founded by professionals working in blindness services rather than by blind people",
            ],
            correctIndex: 0,
            explanation:
              "Pomerantz describes a group of longtime leaders and members walking out of the Federation and founding the ACB in 1961.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What phrase does Pomerantz use for the events inside the Federation?",
            options: [
              "A civil war",
              "A constitutional crisis, resolved only when the affiliates were reinstated",
              "A generational handover that the older leadership refused to accept",
              "A funding dispute that made two organisations financially unavoidable",
            ],
            correctIndex: 0,
            explanation:
              "He writes of the so-called civil war fought within the Federation which led to the walkout and the founding of the ACB.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What is the first of the three axes Pomerantz names?",
            options: [
              "Governance",
              "Whether blindness is a nuisance or a significant disability",
              "How far accessible pedestrian signals should be an advocacy priority",
              "Whether video description belongs in accessibility law at all",
            ],
            correctIndex: 0,
            explanation:
              "Whether the organisation should be governed from the top by a strong president or by the grassroots membership. The other two axes are the meaning of blindness and accommodation priorities.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "How does Pomerantz phrase the second axis?",
            options: [
              "Is blindness a mere nuisance or a significant disability?",
              "Should blind people accept services designed by sighted professionals?",
              "Should the movement prioritise employment or education?",
              "Is blindness better understood as an identity or as a medical condition?",
            ],
            correctIndex: 0,
            explanation:
              "His question is about the overall importance of blindness in the lives of those who are blind, put in exactly those terms.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Which two accommodations does Pomerantz name in the third axis?",
            options: [
              "Accessible pedestrian signals and video description",
              "Refreshable braille displays and free postal distribution of accessible copies",
              "Structured discovery travel training and orientation instruction",
              "Talking books and the federal quota programme for embossed textbooks",
            ],
            correctIndex: 0,
            explanation:
              "He asks to what extent accommodations such as accessible pedestrian signals and video description should be advocacy priorities.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What does Pomerantz conclude about a single unified organisation?",
            options: [
              "He does not expect to see one in his lifetime",
              "That one will emerge once the founding generation of both bodies has retired",
              "That the two organisations should merge their advocacy while staying separate",
              "That unity was achieved in practice during the Marrakesh campaign",
            ],
            correctIndex: 0,
            explanation:
              "He calls the disagreements strongly held ideological positions that argue against one overarching organisation and one so-called philosophy of blindness.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Whose account are the three axes?",
            options: [
              "The ACB's",
              "The NFB's, from the history page this course quotes elsewhere",
              "A neutral scholarly summary published outside both organisations",
              "The Library of Congress's, in its history of the national library service",
            ],
            correctIndex: 0,
            explanation:
              "They come from an ACB president's message, and the lesson says so, because a party's account of a dispute is evidence about its author rather than neutral description.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What is this lesson's rule about one organisation's description of the other?",
            options: [
              "Never quote it as neutral description",
              "Prefer it, because insiders know each other better than outsiders do",
              "Exclude it entirely, since a partisan source cannot be used at all",
              "Average the two accounts to arrive at what probably happened",
            ],
            correctIndex: 0,
            explanation:
              "Attribute every line to the organisation that wrote it. Learning to read partisan primary sources is the teachable skill in this section.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Why does this course decline to state either organisation's current position on a specific accommodation?",
            options: [
              "Positions move, and a characterised position is not a position",
              "Because both organisations declined to confirm their positions for this course",
              "Because the positions are legally contested and cannot be described accurately",
              "Because the accommodations named are no longer live policy questions",
            ],
            correctIndex: 0,
            explanation:
              "The instruction is to read each organisation's own current policy statements, which is the skill the section is actually teaching.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "How did this course obtain the NFB's own words?",
            options: [
              "From an archived snapshot of its history page",
              "By correspondence with the organisation's communications office",
              "From the ACB's summary of the Federation's founding principles",
              "From a printed history held by the Library of Congress",
            ],
            correctIndex: 0,
            explanation:
              "The live site refused an automated reader, so the pass used an Internet Archive snapshot captured on 16 January 2025, which is itself a records lesson.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "How many affiliates did the ACB count at its sixtieth anniversary?",
            options: [
              "Sixty-eight",
              "Seven, one for each state represented at the older organisation's founding",
              "One hundred and five, matching the treaty membership figure",
              "Fifty, one for each state, plus the District of Columbia",
            ],
            correctIndex: 0,
            explanation:
              "Sixty-eight affiliates, including state and special-interest bodies, at the anniversary in July 2021.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Who introduced the two identical bills that became the Pratt-Smoot Act?",
            options: [
              "Ruth Pratt and Reed Smoot",
              "Jacobus tenBroek and Robert B. Irwin, testifying jointly before Congress",
              "Ruth Pratt alone, with the Senate adopting her bill without amendment",
              "The Librarian of Congress, through a departmental legislative request",
            ],
            correctIndex: 0,
            explanation:
              "Representative Ruth Pratt introduced H.R. 11365 and Senator Reed Smoot introduced S. 4030 in 1930.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "On what date did the Pratt-Smoot Act become law?",
            options: [
              "3 March 1931",
              "1 July 1931, the day the reading project actually began operating",
              "3 July 1952, when the word \"adult\" was struck from the statute",
              "9 October 2018, when its copyright companion was amended for Marrakesh",
            ],
            correctIndex: 0,
            explanation:
              "3 March 1931. The project began operating on 1 July 1931 and the appropriation resolution passed the day after the Act.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "How much did the joint resolution appropriate for fiscal 1932?",
            options: [
              "$100,000",
              "$25,000, the same figure Virginia gave its segregated school in 1909",
              "$50,000, matching the operating grant to the white Virginia school",
              "$89,927, the amount later withheld from a segregated school over desegregation",
            ],
            correctIndex: 0,
            explanation:
              "$100,000, passed the day after the Act, to provide books for blind adults.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "At what speed did the 1933 talking-book records turn?",
            options: [
              "33 and a third revolutions per minute",
              "78 revolutions per minute, the commercial standard of the period",
              "16 and two-thirds revolutions per minute, adopted for juvenile titles",
              "45 revolutions per minute, matching the single format that followed",
            ],
            correctIndex: 0,
            explanation:
              "33 and a third, giving thirty minutes of reading per side, with the disc cut at 150 grooves to the inch.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "How many discs did a 60,000-word talking book require?",
            options: [
              "Eight or nine",
              "Thirty or more, which is why an early listener complained about the bulk",
              "Two, once the close-groove technique had been perfected in 1933",
              "One, since thirty minutes a side gave an hour of reading per disc",
            ],
            correctIndex: 0,
            explanation:
              "Eight or nine double-faced twelve-inch records, at 150 grooves to the inch and thirty minutes a side.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What claim about the long-playing record does this course refuse to assert?",
            options: [
              "That the LP was developed for blind readers",
              "That talking-book discs ran at 33 and a third revolutions per minute in 1933",
              "That the Foundation built two kinds of playback machine by 1933",
              "That the first titles included the Declaration of Independence",
            ],
            correctIndex: 0,
            explanation:
              "The Library of Congress history establishes the speed and the date but not the causal claim, so the course states what it read and files the rest.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What did the amendment of 3 July 1952 do?",
            options: [
              "Deleted the word \"adult\"",
              "Added music scores and instructional texts to the collection",
              "Extended service to people with physical disabilities that prevent reading",
              "Authorised refreshable braille displays as loanable equipment",
            ],
            correctIndex: 0,
            explanation:
              "Deleting \"adult\" opened the service to blind children. Music came in 1962 and physical disability in 1966.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What did Congress authorise in 1962?",
            options: [
              "A collection of musical scores",
              "Service to blind children, by striking a single word from the statute",
              "A copyright exception for accessible copies made by authorised entities",
              "Free postal distribution of accessible materials to eligible readers",
            ],
            correctIndex: 0,
            explanation:
              "The programme was authorised to collect and maintain a library of musical scores and instructional texts.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What did Public Law 89-522 do in 1966?",
            options: [
              "Extended service to everyone unable to read standard print",
              "Created the Chafee Amendment's copyright exception for accessible formats",
              "Renamed the service to remove outdated language from its title",
              "Set the acuity threshold for eligibility at 20/200 in the better eye",
            ],
            correctIndex: 0,
            explanation:
              "It authorised talking-book service to all persons who could not read standard print because of visual or physical disability, which is where low vision formally enters the programme.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What does 17 U.S.C. 121 permit an authorized entity to do?",
            options: [
              "Make and distribute accessible copies for eligible persons",
              "Import accessible copies from any country that has ratified a treaty",
              "License accessible copies to commercial publishers at a statutory rate",
              "Reproduce any work at all provided a blind reader has requested it",
            ],
            correctIndex: 0,
            explanation:
              "Reproduce or distribute copies in accessible formats exclusively for use by eligible persons, without the rightsholder's permission. Cross-border exchange needed the later section 121A.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What is an authorized entity under that section?",
            options: [
              "A nonprofit or government agency with a specialised primary mission",
              "Any library that certifies its patrons through a listed professional",
              "A publisher licensed by the Copyright Office to issue accessible editions",
              "Any organisation whose board has a blind majority under its own bylaws",
            ],
            correctIndex: 0,
            explanation:
              "The definition is a nonprofit organisation or governmental agency with a primary mission to provide specialised services relating to training, education or adaptive reading and information access needs.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What problem did the Marrakesh Treaty exist to solve?",
            options: [
              "Accessible copies could not cross borders",
              "Nonprofits could not make accessible copies without the rightsholder's consent",
              "Blind readers could not be certified as eligible outside their home country",
              "Publishers refused to sell electronic files to national library services",
            ],
            correctIndex: 0,
            explanation:
              "Many countries already had a domestic exception. What they could not do was send the copy abroad, so the same book was re-transcribed country by country.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "On what date was the Marrakesh Treaty adopted?",
            options: [
              "27 June 2013",
              "8 February 2019, when the United States deposited its ratification",
              "9 October 2018, when the American implementing statute was approved",
              "8 May 2019, when it entered into force for the United States",
            ],
            correctIndex: 0,
            explanation:
              "Adopted at Marrakesh on 27 June 2013. The other dates belong to the American ratification sequence.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "When did the United States deposit its ratification of the treaty?",
            options: [
              "8 February 2019",
              "2 October 2013, the date it signed the treaty at WIPO",
              "9 October 2018, the date the implementing act was approved",
              "24 April 2024, when the Title II web rule was published",
            ],
            correctIndex: 0,
            explanation:
              "Signature was 2 October 2013 and ratification 8 February 2019, which the Library of Congress records as making the United States the treaty's fiftieth party.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What position does the Library of Congress record for the United States among the treaty's parties?",
            options: [
              "The fiftieth",
              "The first, since the implementing statute preceded most other ratifications",
              "The twentieth, whose ratification brought the treaty into force",
              "The one hundred and fifth, which is the current membership total",
            ],
            correctIndex: 0,
            explanation:
              "NLS records the United States becoming the fiftieth member on 8 February 2019. One hundred and five is the current membership figure.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "How many members does WIPO list for the treaty as of this writing?",
            options: [
              "One hundred and five",
              "Fifty, the position the United States held when it ratified",
              "Twenty, the number of ratifications needed to bring it into force",
              "Sixty-eight, the number of affiliates the ACB counted in 2021",
            ],
            correctIndex: 0,
            explanation:
              "WIPO's own contracting-party listing gives one hundred and five. Fifty was the United States' position on ratification.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What is the public law number of the Marrakesh Treaty Implementation Act?",
            options: [
              "115-261",
              "89-522, which extended library service to readers with physical disabilities",
              "121A, which is the section it added to the copyright title",
              "46 Stat. 1487, the citation of the 1931 library statute",
            ],
            correctIndex: 0,
            explanation:
              "Public Law 115-261, 132 Stat. 3667, approved 9 October 2018. 89-522 is the 1966 library amendment and 121A is the new copyright section.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Which phrase did the 2018 Act strike from the copyright statute?",
            options: [
              "\"Specialized formats\"",
              "\"Authorized entity\", which was replaced with a broader institutional definition",
              "\"Previously published literary work\", which was narrowed to printed books",
              "\"Eligible persons\", which had proved too narrow in practice",
            ],
            correctIndex: 0,
            explanation:
              "It struck \"specialized formats\" for \"accessible formats\" and \"blind or other persons with disabilities\" for \"eligible persons\", and added section 121A.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What did the 2018 Act add to title 17?",
            options: [
              "A new section 121A",
              "A definition of blindness set at 20/200 in the better eye with correction",
              "A requirement that publishers supply electronic files to authorised entities",
              "A term extension for works published in accessible formats",
            ],
            correctIndex: 0,
            explanation:
              "Section 121A covers reproduction for blind or other people with disabilities in Marrakesh Treaty countries, which is the cross-border half of the arrangement.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What does 36 CFR 701.6 now use to determine eligibility for the national library service?",
            options: [
              "The \"eligible person\" definition in 17 U.S.C. 121",
              "An acuity threshold of 20/200 in the better eye with correcting lenses",
              "A certificate of blindness issued by a state rehabilitation agency",
              "Membership of a recognised organisation of blind or print-disabled readers",
            ],
            correctIndex: 0,
            explanation:
              "The regulation points at the copyright statute's functional definition, certified by one of a listed set of professionals. The acuity threshold is not in the current rule.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What does this lesson call a legal definition of who counts?",
            options: [
              "A records artefact",
              "A medical judgement that the law adopts without amendment",
              "A treaty obligation binding on every contracting party equally",
              "A category that has stayed stable since the programme began in 1931",
            ],
            correctIndex: 0,
            explanation:
              "It decides who exists for the purposes of a programme, and this one was rewritten by a treaty, which is why the change is worth teaching.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "When did the national library service change its name?",
            options: [
              "1 October 2019",
              "8 February 2019, when the United States ratified the Marrakesh Treaty",
              "4 January 2016, when it took up Unified English Braille",
              "3 March 1931, when the Pratt-Smoot Act created the programme",
            ],
            correctIndex: 0,
            explanation:
              "On that date it became the National Library Service for the Blind and Print Disabled, dropping the older \"Physically Handicapped\".",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Why does this lesson call a renaming a records event?",
            options: [
              "Catalogues and citations still carry the old name",
              "Because a renamed body loses the statutory authority of its predecessor",
              "Because the old name remains legally valid until Congress repeals it",
              "Because renaming requires a new appropriation under the original Act",
            ],
            correctIndex: 0,
            explanation:
              "Finding aids, citations and catalogue records made under the old name do not update themselves, which is exactly what an archives course teaches you to expect.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What technical standard does the Department of Justice's Title II rule set?",
            options: [
              "WCAG 2.1 Level AA",
              "WCAG 2.2 Level AAA, the highest conformance level in the current guidelines",
              "Section 508's own standards, which the rule incorporated by reference",
              "EN 301 549, harmonised with the European accessibility requirements",
            ],
            correctIndex: 0,
            explanation:
              "WCAG 2.1 Level AA for the web content and mobile apps of state and local governments, under their existing Title II obligations.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Who does the Title II rule apply to?",
            options: [
              "State and local governments",
              "Every business open to the public, as a place of public accommodation",
              "Federal agencies, whose own technology must be accessible",
              "Any organisation receiving federal financial assistance of any kind",
            ],
            correctIndex: 0,
            explanation:
              "Title II covers state and local government services, programmes and activities. The rule does not make WCAG a legal requirement for every private website.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "When was that final rule published in the Federal Register?",
            options: [
              "24 April 2024",
              "20 April 2026, when the interim final rule extended the compliance dates",
              "11 December 2008, the date of the underlying WCAG recommendation",
              "26 April 2027, the compliance date for larger public entities",
            ],
            correctIndex: 0,
            explanation:
              "The final rule was published 24 April 2024. The interim final rule of 20 April 2026 moved the compliance dates.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What did the interim final rule of 20 April 2026 do?",
            options: [
              "Extended the compliance dates",
              "Raised the technical standard from WCAG 2.1 to WCAG 2.2 Level AA",
              "Extended the rule to private commercial websites under Title III",
              "Withdrew the rule pending further consultation with public entities",
            ],
            correctIndex: 0,
            explanation:
              "It moved compliance to 26 April 2027 for entities serving 50,000 people or more and 26 April 2028 for smaller ones and special districts.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What is the extended compliance date for public entities serving 50,000 people or more?",
            options: [
              "26 April 2027",
              "26 April 2028, which applies to every public entity under the interim rule",
              "24 April 2024, the date the original final rule was published",
              "20 April 2026, the date the interim final rule itself was published",
            ],
            correctIndex: 0,
            explanation:
              "26 April 2027 for the larger entities and 26 April 2028 for those under 50,000 or any special district government.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What does this lesson warn a reader not to accept?",
            options: [
              "That the ADA requires WCAG 2.1 AA of every website",
              "That WCAG is developed by the World Wide Web Consortium",
              "That Title II covers state and local government web content",
              "That the compliance dates have been extended into 2027 and 2028",
            ],
            correctIndex: 0,
            explanation:
              "That is what a compliance vendor says. The 2024 rule is a Title II rule, and Title II is government.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What status line does WCAG 2.0 carry?",
            options: [
              "W3C Recommendation 11 December 2008",
              "W3C Recommendation 12 December 2024, following its most recent republication",
              "ISO/IEC standard, adopted without a W3C recommendation stage",
              "W3C Working Draft, since no version has yet reached recommendation status",
            ],
            correctIndex: 0,
            explanation:
              "That is the line at the top of the document itself, which is the version this pass read directly.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What are WCAG's four principles?",
            options: [
              "Perceivable, operable, understandable, robust",
              "Accessible, usable, testable, maintainable",
              "Information, infrastructure, instruction, implementation",
              "Reproduction, distribution, importation, exportation",
            ],
            correctIndex: 0,
            explanation:
              "The other lists belong elsewhere in this course: the four braille transition phases, and the rights at issue in the copyright statute.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What are WCAG's conformance levels?",
            options: [
              "A, AA and AAA",
              "One, two and three, corresponding to the priority of each success criterion",
              "Basic, intermediate and full, as set out in the Title II rule",
              "Grade 1, grade 2 and grade 3, matching the braille contraction levels",
            ],
            correctIndex: 0,
            explanation:
              "A is the lowest and AAA the highest, with AA the level both recent legal instruments point at.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What is the inversion this lesson opens with?",
            options: [
              "Copyright is a wall for signed language and a door here",
              "The law protected blind readers before it protected any other disabled group",
              "Blind organisations opposed the copyright exception that now serves them",
              "The library programme preceded the copyright exception by only two years",
            ],
            correctIndex: 0,
            explanation:
              "Almost no signed-language video may lawfully enter a paid course, whereas United States and international law contain express exceptions for accessible copies, built by organised blind people over a century.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Which titles were among the first talking books ordered?",
            options: [
              "The Declaration of Independence and the Gettysburg Address",
              "The complete works of Louis Braille in English translation",
              "Textbooks in the newly adopted grade one and a half braille",
              "The Congressional Record, supplied under the Pratt-Smoot appropriation",
            ],
            correctIndex: 0,
            explanation:
              "Among the first orders were the Declaration of Independence, the Constitution, Washington's Farewell Address, the Gettysburg Address, Shakespeare, Kipling and Wodehouse.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Under what statutory citation does the library programme now sit?",
            options: [
              "2 U.S.C. 135a",
              "17 U.S.C. 121, the copyright exception for accessible formats",
              "36 C.F.R. 701.6, the regulation governing loans of materials",
              "Public Law 115-261, the Marrakesh implementing statute",
            ],
            correctIndex: 0,
            explanation:
              "The Act of March 3, 1931, 46 Stat. 1487, as amended, codified at 2 U.S.C. 135a. The other citations are the copyright statute, the regulation and the implementing act.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Which year-and-event pairing from the library statute's amendments is correct?",
            options: [
              "1966, service extended to readers unable to read standard print",
              "1952, Congress authorises a collection of musical scores",
              "1962, the word \"adult\" is struck from the library statute",
              "1931, the Chafee Amendment creates the copyright exception",
            ],
            correctIndex: 0,
            explanation:
              "1952 struck \"adult\", 1962 added music, 1966 extended to visual or physical disability, and 1931 is the Pratt-Smoot Act rather than the copyright exception.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Who certifies eligibility for the national library service, under the current regulation?",
            options: [
              "One of a listed set of professionals",
              "The Librarian of Congress, on the recommendation of a network library",
              "A state rehabilitation agency, which issues a certificate of blindness",
              "The applicant, by signing a self-certification on the application form",
            ],
            correctIndex: 0,
            explanation:
              "The rule names doctors, ophthalmologists, optometrists, psychologists, registered nurses, therapists and professional staff of institutions and agencies, including educators, social workers and librarians.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "blind-and-low-vision-america-final",
      title: "Final assessment · Blind and Low-Vision America",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Is braille a language or a code?",
            options: [
              "A code",
              "A language, in the same sense that American Sign Language is a language",
              "A language when contracted and a code when uncontracted",
              "Neither, since it is a rendering method rather than a system of signs",
            ],
            correctIndex: 0,
            explanation:
              "It encodes an existing print language into dots, which is why the framing that works for a signed language does not transfer here.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "Who wrote this course?",
            options: [
              "A sighted author, from published sources",
              "A blind co-author working from the outline stage with a sighted editor",
              "A team drawn from the two largest membership organisations of blind people",
              "A group of certified braille transcribers and teachers of blind students",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 and the description both say so, and the course flags every source for whether a blind person or blind-led organisation wrote it.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "What does this course refuse to teach you to do?",
            options: [
              "Read braille by touch",
              "Recognise the contraction rules that distinguish grade 1 from grade 2 braille",
              "Read partisan primary sources published by advocacy organisations",
              "Trace credit for an invention through patents and acknowledgements",
            ],
            correctIndex: 0,
            explanation:
              "It cites a nine-month tactile course that produced a mean of about six words per minute, and says plainly that no web page shortens that.",
            sourceLessonSlug: "standpoint-and-what-this-course-is",
          },
          {
            prompt: "How many dot positions does a standard braille cell have, and how many patterns does that give?",
            options: [
              "Six positions, sixty-four patterns",
              "Eight positions and two hundred and fifty-six patterns, the display standard",
              "Six positions and twenty-six patterns, one for each letter of the alphabet",
              "Nine positions and five hundred and twelve patterns, in computer braille",
            ],
            correctIndex: 0,
            explanation:
              "Two across and three down, sixty-four patterns counting the empty cell. Eight dots and two hundred and fifty-six patterns is the computer braille variant.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What did BANA's UEB motion of 2 November 2012 keep for the United States?",
            options: [
              "The Nemeth Code",
              "English Braille American Edition, for existing stereotyped plates only",
              "The right of each state to set its own literary reading code",
              "New York Point, for adults who had learned no other system",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a braille reader in an American mathematics class reads a different code from a British one.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "On what date did the United States implement UEB?",
            options: [
              "4 January 2016",
              "2 November 2012, the day the adoption motion passed",
              "In April 2004, when ICEB declared the code substantially complete",
              "9 November 2014, when BANA's board approved its implementation statement",
            ],
            correctIndex: 0,
            explanation:
              "The Library of Congress notes the date was also the two hundred and seventh birthday of Louis Braille.",
            sourceLessonSlug: "a-code-not-a-language",
          },
          {
            prompt: "What is Campsie's central finding about the method that inspired Louis Braille?",
            options: [
              "It was designed for blind people, not for the military",
              "It was a twelve-dot cell that Braille reduced to six over several years",
              "It was demonstrated at the Paris school before Braille published his own",
              "It was used at the school in a phonetic version for a number of years",
            ],
            correctIndex: 0,
            explanation:
              "The other three options are the popular story, and the article's remaining findings contradict each of them.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Where did the distorted Barbier story come from?",
            options: [
              "Accounts published in 1859 and 1952",
              "Barbier's own publications, which overstated his role at the school",
              "A centenary pamphlet issued by the Paris school in 1952",
              "Nineteenth-century French military records that were later shown to be forged",
            ],
            correctIndex: 0,
            explanation:
              "Pignier in 1859 misrepresented the Braille and Barbier relationship, and Pierre Henri in 1952 hypothesised the school demonstration that everyone afterwards repeated as fact.",
            sourceLessonSlug: "the-story-that-was-made-up",
          },
          {
            prompt: "Why did American schools adopt embossed Roman letters in the 1830s, on Irwin's account?",
            options: [
              "Sighted teachers could read them without training",
              "Because blind readers had tested them against dot codes and preferred them",
              "Because they were the only type the federal appropriation would fund",
              "Because they could be written by hand more quickly than any dot system",
            ],
            correctIndex: 0,
            explanation:
              "The first American standard for how blind people would read was chosen for the convenience of the staff, and Irwin's own sentence says so.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Who brought braille to an American school, and where?",
            options: [
              "Simon Pollak, to the Missouri School for the Blind",
              "William Bell Wait, to the New York Institution for the Blind",
              "Edward E. Allen, to the Pennsylvania Institution in Philadelphia",
              "Joel W. Smith, to Perkins Institution in Boston",
            ],
            correctIndex: 0,
            explanation:
              "Pollak, a board member who had seen the system in Europe, had it adopted at Missouri in 1860. Outside Missouri it went nowhere for years.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "What did Wait do before he invented New York Point?",
            options: [
              "Asked other schools to adopt braille with him",
              "Ran comparative reading tests on several hundred blind readers",
              "Petitioned the Printing House board for a braille appropriation",
              "Trained himself to read Boston line type by touch to test its difficulty",
            ],
            correctIndex: 0,
            explanation:
              "He approached Boston and Philadelphia about replacing Roman letters with Braille's code and got no encouragement, which is where the sixty-year fight begins.",
            sourceLessonSlug: "how-the-code-reached-america",
          },
          {
            prompt: "Who invented the system that became American braille?",
            options: [
              "Joel W. Smith, a blind piano tuning teacher",
              "William Bell Wait, superintendent of the New York Institution",
              "Edward E. Allen, later director of Perkins Institution",
              "Frank H. Hall, inventor of the braille typewriter",
            ],
            correctIndex: 0,
            explanation:
              "He reassigned the fewest-dot cells to the commonest letters, a frequency principle that matters to a hand and not at all to an eye.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Why did the American Printing House's choice of code matter so much?",
            options: [
              "It held the federal appropriation",
              "It employed most of the country's braille transcribers and proofreaders",
              "It set the curriculum for every publicly supported school for blind children",
              "It owned the patents on the braille typewriter and the stereotype maker",
            ],
            correctIndex: 0,
            explanation:
              "Whichever code APH printed in was the code that materially existed, which is why Edward E. Allen kept a type his teachers disliked for two years.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "Roughly what proportion of the officials deciding the national code could read either system?",
            options: [
              "About ten per cent",
              "About forty per cent, matching the pupil share that decided the 1910 vote",
              "All of them, since reading both was a condition of the board seat",
              "About ninety per cent, since superintendents were trained in both codes",
            ],
            correctIndex: 0,
            explanation:
              "Irwin describes the Printing House's own superintendent as one of probably not more than ten per cent of the group who could personally read either system.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did the 1910 Louisville vote decide?",
            options: [
              "Forty per cent of the appropriation would go to American braille",
              "That the Printing House would stop publishing New York Point immediately",
              "That the board would in future meet outside Kentucky when convenient",
              "That the federal appropriation would be divided equally between the codes",
            ],
            correctIndex: 0,
            explanation:
              "The vote tied and the presiding lay president cast the deciding vote in favour, on the ground that forty per cent of pupils were in American braille schools.",
            sourceLessonSlug: "four-codes-and-one-printing-house",
          },
          {
            prompt: "What did Helen Keller do about the 1909 New York hearings?",
            options: [
              "Sent a letter that was read aloud",
              "Testified in person at the second hearing on 18 May",
              "Declined to take any position, as she read all the systems herself",
              "Organised the braillist witnesses who travelled from Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "She wrote to A. Emerson Palmer, secretary of the board, arguing that New York Point's capitals were not always unequivocal and that the system was a provincialism.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What was notable about the membership of the 1905 Uniform Type Committee?",
            options: [
              "All five members were blind",
              "All five were superintendents of publicly supported schools",
              "It was appointed by the American Printing House board of trustees",
              "It included representatives of the British braille committee",
            ],
            correctIndex: 0,
            explanation:
              "Two favoured New York Point, two American braille and one British braille, and Irwin records that all of them were blind.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did the British call the 1913 compromise code?",
            options: [
              "Standard Rot",
              "Revised braille, which America adopted five years later",
              "The Jacksonville code, after the convention that approved it",
              "Grade one and a half, the name it took in American practice",
            ],
            correctIndex: 0,
            explanation:
              "Standard Dot was proposed as a worldwide type on 25 June 1913 and the British, who had revised their own code in 1905, would have none of it.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "When was the agreement sometimes called the Treaty of London signed?",
            options: [
              "19 July 1932",
              "25 June 1913, when Standard Dot was recommended at Jacksonville",
              "In 1918, when America adopted grade one and a half",
              "In 1905, when the Uniform Type Committee was created at Saginaw",
            ],
            correctIndex: 0,
            explanation:
              "A committee of three with plenary powers signed it in London, settling grade 2 for both countries.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "How many times were blind readers made to relearn their code across this history?",
            options: [
              "Four",
              "Twice, from line type to New York Point and from New York Point to grade 2",
              "Once, when the London agreement settled grade 2 for both countries",
              "Six, counting the separate mathematics and music codes",
            ],
            correctIndex: 0,
            explanation:
              "Boston line type, New York Point, American braille, Revised braille grade one and a half and finally grade 2, which is Irwin's own list in his opening paragraph.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did a convention speaker propose for inventors of new printing systems?",
            options: [
              "\"Shoot him on the spot\"",
              "\"Make him read his own system for a year before proposing it\"",
              "\"Send him to Britain, where they will explain the cost of a change\"",
              "\"Let him pay for the plates his invention would render worthless\"",
            ],
            correctIndex: 0,
            explanation:
              "Irwin quotes it as a line the rank and file of finger readers had a good deal of sympathy with, after four code changes in a lifetime.",
            sourceLessonSlug: "how-the-war-ended-and-who-paid",
          },
          {
            prompt: "What did a residential school offer that a district serving one blind child could not?",
            options: [
              "Blind adults in the ordinary week",
              "A larger braille library than any state service could maintain",
              "Freedom from the vocational tracking imposed by local schools",
              "Federal funding that followed the student to a residential placement",
            ],
            correctIndex: 0,
            explanation:
              "Daily contact with blind adults who had worked out how to live, plus the specialist skills a district with one blind pupil has nobody to teach.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "Why is there no braille counterpart to the language ban in Deaf education history?",
            options: [
              "Braille is not a community language",
              "Because no state ever regulated which reading code its schools taught",
              "Because blind children were taught braille at home before school age",
              "Because the federal appropriation protected braille from prohibition",
            ],
            correctIndex: 0,
            explanation:
              "A blind child already shares a spoken language with hearing sighted parents, so nothing corresponding to the removal of a signed language could happen.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What DOES carry across between the deaf and blind school histories?",
            options: [
              "The curriculum",
              "The language policy that restricted each group's natural medium",
              "The federal subsidy, which funded the same publisher for both",
              "The dates on which each system desegregated its schools",
            ],
            correctIndex: 0,
            explanation:
              "In both, a professional class decided in advance what a disabled child's life would be, and the ceiling was in the timetable rather than in the child.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What did the AFB obituary say blind children of Nemeth's generation were taught?",
            options: [
              "To knit, weave baskets and cane chairs",
              "Piano tuning, upholstery and barbering, the trades added at Hampton in the 1940s",
              "Cabinet making, book repair, printing and watch repair",
              "Braille transcription, so that schools could produce their own books",
            ],
            correctIndex: 0,
            explanation:
              "On the reasoning that manual labour was thought the only way blind people could escape a life of begging on the streets.",
            sourceLessonSlug: "the-residential-school-and-the-curriculum",
          },
          {
            prompt: "What two appropriations does the Virginia history place side by side?",
            options: [
              "$25,000 and $50,000",
              "$100,000 and $89,927, from the federal library and desegregation records",
              "$50,000 and $215,000, before and after the school's enrolment tripled",
              "$25,000 and $70,000, matching the enrolment figures for 1940 and 1961",
            ],
            correctIndex: 0,
            explanation:
              "$25,000 for the Black school to buy land, build facilities and operate for a year, and $50,000 to the white school the next year simply to operate.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "In what year did the school at Hampton for Black deaf and blind children open?",
            options: [
              "1909",
              "1902, when the first enabling bill was introduced",
              "1906, when the enabling bill finally passed",
              "1940, when it appointed its first Black superintendent",
            ],
            correctIndex: 0,
            explanation:
              "The first bill died in committee in 1902, a bill passed without money in 1906, and the school opened three years later.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What happened to enrolment under William Whitehead?",
            options: [
              "It tripled, from about 70 to 215",
              "It fell by half as families kept children at home during the war",
              "It stayed flat because the appropriation never allowed more dormitory space",
              "It doubled, from 215 to 430, after a new high school department opened",
            ],
            correctIndex: 0,
            explanation:
              "From about 70 in 1940, his first year as the school's first Black superintendent, to 215 in 1961, his last.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "What is the honest finding about the study of Black blind education in the United States?",
            options: [
              "The scholarship is thin and the primary record is not",
              "The primary record was destroyed when the segregated schools closed",
              "A landmark monograph exists but has never been translated into braille",
              "The subject has been thoroughly studied but only in unpublished theses",
            ],
            correctIndex: 0,
            explanation:
              "Statutes, appropriations, superintendents' reports and registers survive in quantity. What is missing is the historiography built on them.",
            sourceLessonSlug: "virginia-and-the-history-nobody-wrote",
          },
          {
            prompt: "Why did no braille mathematics code exist before Nemeth built one?",
            options: [
              "Nobody expected a blind person to need it",
              "Because the six-dot cell has too few patterns for mathematical notation",
              "Because the braille authority had rejected three earlier proposals",
              "Because mathematics textbooks were excluded from the federal appropriation",
            ],
            correctIndex: 0,
            explanation:
              "The absence was a record of an expectation rather than a technical limit, the same mechanism the vocational curriculum shows.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "Who turned Nemeth's private notation into a national standard?",
            options: [
              "Clifford Witcher",
              "The American Printing House, which published it in 1952",
              "Robert B. Irwin, then executive director of the Foundation",
              "The Braille Authority of North America, at its founding meeting",
            ],
            correctIndex: 0,
            explanation:
              "A blind physicist at AFB who needed a table of integrals, learned the private code, and sat on the committee that could adopt it.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "How does this course handle the competing dates for the Nemeth code's adoption?",
            options: [
              "Prints the source it read and files the discrepancy",
              "Prints 1952, the date most published accounts give",
              "Omits the date, since a contested figure should not reach a learner",
              "Describes it as adopted in the early 1950s without naming a year",
            ],
            correctIndex: 0,
            explanation:
              "AFB's obituary dates adoption to 1951 and other accounts date the code to 1952, when APH published it. The two are probably different events.",
            sourceLessonSlug: "the-private-code-that-became-a-standard",
          },
          {
            prompt: "What does a patent establish about an invention?",
            options: [
              "Who filed",
              "Who identified the problem the invention was built to solve",
              "Who tested it and confirmed that it worked for its intended users",
              "Who designed the training that taught people to use it",
            ],
            correctIndex: 0,
            explanation:
              "Inventor of record is a legal category. Testing, evaluation and training design usually appear in acknowledgements instead, and never in press coverage.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "What caution does this course attach to the curb-cut effect?",
            options: [
              "Do not let it do the work of the argument",
              "Do not apply it outside physical access, where it was first described",
              "Treat it as disproving the pattern of dropped credit entirely",
              "Use it only where a patent confirms a blind person's involvement",
            ],
            correctIndex: 0,
            explanation:
              "\"It helped everyone in the end\" is exactly the framing that lets the middle steps, who was credited and who was not, go unexamined.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "Why does this course decline to narrate the famous blindness-technology cases?",
            options: [
              "The archival work was not done in this pass",
              "Because those devices remain under patent and cannot be described",
              "Because their manufacturers refused permission to discuss them",
              "Because the credit pattern has been disproved for hardware",
            ],
            correctIndex: 0,
            explanation:
              "Naming a case you have not checked is how a grievance becomes folklore, so the method is taught and the cases are filed as outstanding work.",
            sourceLessonSlug: "a-method-for-checking-who-is-named",
          },
          {
            prompt: "When and where was the National Federation of the Blind founded?",
            options: [
              "16 November 1940, at Wilkes-Barre",
              "7 July 1961, at a convention in Kansas City",
              "3 March 1931, in Washington, alongside the Pratt-Smoot Act",
              "In 1923, when it hired its first executive director",
            ],
            correctIndex: 0,
            explanation:
              "At the Redington Hotel, by blind people from seven states, who drafted a constitution there.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "When was the American Council of the Blind founded?",
            options: [
              "7 July 1961",
              "16 November 1940, at the same meeting as the older organisation",
              "In 1955, when Jacobus tenBroek recalled the founding convention",
              "In 1973, after the desegregation of the Virginia schools",
            ],
            correctIndex: 0,
            explanation:
              "By people who left the Federation, in what an ACB president later called a civil war within it.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "Which three disagreements does the ACB's account name?",
            options: [
              "Governance, the meaning of blindness, accommodation priorities",
              "Funding, membership rules and the choice of a national braille code",
              "Employment, education and the future of the residential schools",
              "Copyright, transport and the design of accessible pedestrian signals",
            ],
            correctIndex: 0,
            explanation:
              "Strong president or grassroots membership; nuisance or significant disability; and how far accommodations such as accessible pedestrian signals and video description should be priorities.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What is this course's rule when one organisation describes the other?",
            options: [
              "Never quote it as neutral description",
              "Prefer it, since insiders know each other better than outsiders",
              "Exclude both organisations' publications from the bibliography",
              "Combine the two accounts into a single balanced summary",
            ],
            correctIndex: 0,
            explanation:
              "Attribute every line to the organisation that wrote it, and read each side's own current statements rather than an opponent's characterisation.",
            sourceLessonSlug: "two-organisations-that-disagree",
          },
          {
            prompt: "What date did the Pratt-Smoot Act become law on?",
            options: [
              "3 March 1931",
              "1 July 1931, when the reading project began operating",
              "3 July 1952, when the word \"adult\" was struck",
              "1 October 2019, when the service was renamed",
            ],
            correctIndex: 0,
            explanation:
              "It became law on 3 March 1931, was funded the next day with $100,000 for fiscal 1932, and the project began operating on 1 July 1931.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What does 17 U.S.C. 121 allow an authorized entity to do?",
            options: [
              "Make and distribute accessible copies for eligible persons",
              "Send accessible copies to authorised entities in other countries",
              "License accessible editions to commercial publishers at a set rate",
              "Reproduce any work at all once a blind reader has requested it",
            ],
            correctIndex: 0,
            explanation:
              "Domestic reproduction and distribution. Cross-border exchange required the Marrakesh Treaty and the section 121A added in 2018.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What problem did the Marrakesh Treaty solve?",
            options: [
              "Accessible copies could not cross borders",
              "Nonprofits could not make accessible copies without permission",
              "Publishers refused to supply electronic files to libraries",
              "Blind readers had no way to be certified as eligible",
            ],
            correctIndex: 0,
            explanation:
              "Adopted 27 June 2013, it lets authorised entities import and export accessible copies rather than each country re-transcribing the same book.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What replaced the acuity threshold in the regulation governing the national library service?",
            options: [
              "The \"eligible person\" definition in the copyright statute",
              "A certificate issued by a state rehabilitation agency",
              "Self-certification by the applicant on the service's own form",
              "A functional reading test administered by a network library",
            ],
            correctIndex: 0,
            explanation:
              "36 CFR 701.6 now points at 17 U.S.C. 121, whose definitions the Marrakesh Treaty Implementation Act rewrote in 2018.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "Who does the Department of Justice's 2024 web rule bind?",
            options: [
              "State and local governments",
              "Every business open to the public as a place of public accommodation",
              "Federal agencies, whose own technology must be accessible",
              "Any organisation receiving federal financial assistance",
            ],
            correctIndex: 0,
            explanation:
              "It sets WCAG 2.1 Level AA as the technical standard under Title II, which covers state and local government, not every private website.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
          {
            prompt: "What claim does this course tell you not to accept from a compliance vendor?",
            options: [
              "That the ADA requires WCAG 2.1 AA of every website",
              "That WCAG is developed by the World Wide Web Consortium",
              "That the Title II compliance dates were extended to 2027 and 2028",
              "That WCAG runs at conformance levels A, AA and AAA",
            ],
            correctIndex: 0,
            explanation:
              "The 2024 rule is a Title II rule and Title II is government. The private-sector question is genuinely unsettled and the course teaches it as unsettled.",
            sourceLessonSlug: "who-is-allowed-to-make-a-copy",
          },
        ],
      },
    },
  ],
};
