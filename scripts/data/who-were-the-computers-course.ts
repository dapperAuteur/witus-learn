import type { AuthoredCourse } from "./authored-course";

// "Who Were the Computers: A Job Title, Six Programmers, and the Record of 1946" (Culture & History).
// Slug to be registered: `who-were-the-computers`.
//
// BRIEF: plans/future-courses/uncredited/2026-09-18-eniac-six-brief.md, approved by BAM 2026-09-19.
// RESEARCH TIER: Tier 1 (history; not health, law, safety or money, so not Tier 2).
// VISIBILITY: PRIVATE, price 0, free, per BAM's approval and plans/83's private-study rule.
// SERIES CODE: NONE. BAM decided on 2026-09-19 that private courses carry no CREDIT code, which
// closes the brief's "CREDIT-M2 or the next S number" question. No seriesCode, no seriesPosition,
// no seriesTrack at registration.
//
// THE BINDING CONDITION FROM THE APPROVED BRIEF (section 5), and it is not negotiable:
//   NO LESSON STATES THE 1946-CAPTION CLAIM AS A FACT. No original 1946 caption has been read by
//   anyone building this course. What is verified is that Kathy Kleiman SAYS she saw photographs
//   whose captions named the men and not the women. Every lesson that touches it attributes it to
//   her, by name, and section 4 teaches the gap AS a gap. Lesson 12 names the four archives where
//   the document would be found, so the course is built to be corrected by whoever reads one.
//
// THE SPINE, and it must not flatten into "six forgotten women":
//   "Computer" was a job title. A job classification is the moment a record gets made about a
//   person (Trouillot's fact creation, taught in `who-gets-named` lesson 17), and everything
//   downstream inherits it. The course opens by LINKING to the lessons that already teach the job
//   title rather than re-teaching them, exactly as the brief requires:
//     - `how-we-know-whats-out-there` lesson 8, `the-harvard-computers`, teaches the title for the
//       observatory. Lesson 1 points there in a paragraph and does not repeat it.
//     - `who-gets-the-credit` lesson 11, `credit-without-a-patent`, covers Gladys West and calls
//       her a mathematician. Her Dahlgren job title is unverified, so lesson 1 says the course does
//       NOT fold her into the frame, rather than borrowing her for it.
//     - `who-made-the-record` lesson 7, `a-caption-that-carries-a-name`, supplies the caption method
//       section 3's exercise runs.
//     - `who-gets-named` lesson 21, `anatomy-of-a-correction`, supplies section 5's instrument list.
//
// FETCH-OR-DO-NOT-CITE. Everything asserted below was retrieved and read in this build pass,
// 2026-09-19 to 2026-09-20, on top of the brief's own 2026-09-18 pass:
//   - Kleiman, TED Ideas, 17 April 2018. The job-title sentence, the caption sentence, the museum
//     passage, the six as she spells them, the 1986 and 50th anniversaries, the honors, the film.
//     THIS PASS ALSO CONFIRMED: "There were no programming languages, no manuals, no compilers and
//     no operating systems, so the women had to figure out how to program this massive machine on
//     their own," which the brief had not captured and which section 2 needed.
//   - Goodrich, IEEE Spectrum, 21 November 2022. The February 1946 photographs passage, "Out of
//     approximately 100 human computers ... six women were chosen", the book and its award, the
//     documentary's 2016 award.
//   - Joosse, APS News, 10 November 2022. 10 December 1945 and Los Alamos; 15 February 1946;
//     the 1942 notice; "about $1,620 per year ($27,000 today)"; the Abbate quotation; WITI 1997.
//     THIS PASS ALSO CONFIRMED: "They broke up the differential equation into many small steps and
//     figured out how to set up the operations in parallel across the cables, switches, and panels."
//   - U.S. Army Research Laboratory, Historic Computer Images. The "ENIAC OFFICIALS" caption and
//     its eight men with titles; the "Two women operating the ENIAC's main control panel" caption;
//     the public-domain statement. THIS PASS ALSO CONFIRMED a THIRD caption the brief had noted
//     only in passing: "Two women posed to show the 'direct programming' of ENIAC done by setting
//     hundreds of wires and thousands of switches", Ester Gerston and Gloria Gordon Bolotsky, both
//     Army "Computers" and later second-generation ENIAC programmers. That caption is what makes
//     section 3's exercise a three-caption comparison instead of a two-caption one, and it is what
//     lets lesson 11 separate "posed" from "model" without editorialising.
//   - Sheppard, Mental Floss, 13 October 2013, re-read directly as the brief instructed. The
//     "Refrigerator Ladies" passage, a sixth spelling of the six names, the hand-wiring sentence,
//     and a SELECTION account that disagrees with IEEE Spectrum's (see below).
//   - Magubane, Penn Today, 11 February 2026. All six named; "As the first digital-age programmers,
//     they translated logic into electronic signals for ENIAC to interpret."
//   - Martin, IEEE Technology and Society Magazine, December 1995 (author's manuscript PDF), read
//     by the brief: the eight-man group photo, the newspapers publishing machine-room pictures
//     instead, the Hagley citation, and the "Saturday, February 14, 1946" date.
//
// DISCREPANCIES TAUGHT RATHER THAN SMOOTHED (each one is a lesson, not a footnote):
//   1. THE DEMONSTRATION DATE. APS News: 15 February 1946. Martin: "Saturday, February 14, 1946".
//      14 February 1946 was a THURSDAY and 15 February was a FRIDAY, checked against the calendar
//      in this pass. Neither was a Saturday. Lesson 7 teaches exactly that: an internal
//      inconsistency does not make the other source right, it tells you to go to a dated document.
//      Outside a quotation this course writes "mid-February 1946". Research check A.
//   2. KLEIMAN'S TWO DATINGS. TED 2018 dates the photograph "about six months after it was
//      unveiled"; IEEE 2022 puts the photographs in February 1946, six months after the war ended.
//      Lesson 10 prints both and does not choose. Research check B.
//   3. HOW THE SIX WERE PICKED. IEEE 2022 (interviewing Kleiman): "six women were chosen". Mental
//      Floss 2013: the Army "randomly selected five women computers out of the 100 or so workers
//      (later adding a sixth woman to the team)" in spring 1945. Lesson 4 prints both, attributes
//      both, and asserts neither. Research check C.
//   4. THE HEADCOUNT. Between 80 and 100 (TED), nearly a hundred (APS), approximately 100 (IEEE).
//      Lesson 1 carries it as a range rather than inventing a precision no source claims.
//   5. NAME SPELLINGS. Seven printed forms across seven sources, including "Licherman" on the ENIAC
//      Programmers Project site against "Lichterman" everywhere else, "Francis" for "Frances"
//      Holberton in Mental Floss, "Betty Jennings" in an ARL caption where others say "Jean", and
//      "Elizabth [sic] Jennings" in a Computer History Museum record. Jean Jennings Bartik alone
//      appears under four first names across the seven sources. Lesson 3 is built out of it.
//      The course spells a name the way the source it is citing spells it and prints the variant.
//   6. PENN TODAY'S DATE. The brief recorded 10 February 2026; the page read in this pass states
//      11 February 2026. The citation uses 11 February, the date on the page as read.
//
// WHAT THE POPULAR TELLING ADDS, AND THIS COURSE DOES NOT PRINT:
//   - That the photographs ran in newspapers NATIONALLY. Kleiman does not say it in either account.
//   - That EVERY man in the frame was named. She does not say that either.
//   - That the museum MISFILED the work. What exists is a remark she recalls a cofounder making.
//     The Computer History Museum's own catalogue today names Jennings and Bilas.
//   - "Problem A" as the name of the December 1945 run. Not in any source read here.
//   - Who chose the six, who set up the December run, and the cofounder's identity. All unread, and
//     the last one Kleiman deliberately withholds, so this course withholds it too.
//
// HOUSE STYLE, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 4 to 6 lesson-specific terms; an APA 7 `## Sources`
// block on every teaching lesson; a quiz per teaching section (pool sized to audit-course's density
// target, serving 5, passing 80, shuffled) plus a final pooling 42 and serving 10, placed LAST;
// every question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and
// distractors long and specifically wrong, so check-longest-option passes by construction. No em
// dashes and no en dashes anywhere in this file, quotations included: where a source's punctuation
// used one, the quotation says so.
export const WHO_WERE_THE_COMPUTERS_COURSE: AuthoredCourse = {
  title: "Who Were the Computers: A Job Title, Six Programmers, and the Record of 1946",
  description:
    "In 1942 the United States Army went looking for women with mathematics degrees. It hired roughly a hundred of them at the University of Pennsylvania's Moore School to calculate artillery trajectories by hand, for about $1,620 a year, and it gave them a job title: computer. A computer was a person before it was a machine. Six of those women were put on the Army's experimental electronic machine, ENIAC, at a moment when there were no programming languages, no manuals, no compilers and no operating systems, and the program was something you built by hand out of switches, cables and trays. When the Army demonstrated the machine to the press in mid-February 1946, the six were not introduced and were not in the coverage. Forty years later a law student named Kathy Kleiman went looking for them. This course follows that record and its correction, and it is unusually careful about which parts rest on a document and which rest on one person's memory. The most repeated claim in the story, that the 1946 captions named the men and not the women, is Kleiman's account, and no original caption has been read here. So the course attributes it to her every single time, teaches the gap as a gap, and tells you the four places the document would be. What it does assert, it asserts from photographs and captions you can open yourself: an Army photograph captioned ENIAC OFFICIALS that names eight men and gives each one a job title, beside Army captions that describe women by what their hands were doing.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 · A computer was a person
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-computer-was-a-person",
      title: "1 · A computer was a person",
      section: "Section 1 · A computer was a person",
      body: `In mid-February 1946 the United States Army showed the press an electronic machine at the University of Pennsylvania. The word the Army used for that machine, "computer", already had a meaning, and the meaning was a person holding a job.

**The job existed before the machine did.** Kathy Kleiman, who spent decades finding and recording the people this course is about, states it plainly: the military "hired between 80 and 100 women to hand-calculate ballistics trajectories, and they called them 'Computers.' Yes, a Computer was a person before it was a machine, that was actually their official title" (Kleiman, 2018). Punctuation adapted; her original uses a dash.

**Where, when, and for how much.** In 1942 the Army sent out notice that it was looking for women mathematics majors to work at the Moore School of Electrical Engineering at the University of Pennsylvania. Nearly a hundred women were hired as computers at the school for the Army's Ballistics Research Laboratory, at a salary of about $1,620 per year, which APS News converts to roughly $27,000 in present-day money (Joosse, 2022).

**Three headcounts, and why that is not a contradiction.** Kleiman's 2018 account says between 80 and 100. APS News says nearly a hundred. An IEEE Spectrum interview with her says "approximately 100 human computers working for the U.S. Army during World War II" (Goodrich, 2022). Those are three statements of one approximate figure, not three competing claims. The honest way to carry them into a lesson is as a range: roughly eighty to a hundred. Picking one of them and printing it as exact would invent a precision that none of the three sources claims, and inventing precision is the most common way a careful source turns into a careless sentence.

**What this course does not re-teach.** The job title is not new to this catalog. *How We Know What's Out There*, lesson 8, "The Harvard Computers", already teaches it for the observatory: women employed from the late nineteenth century onward to examine photographic plates, "called 'computers,' which at the time meant a person who computes", paid a fraction of what a man in comparable work earned, with credit for the resulting catalogs frequently attaching to the observatory's director. Go and read that lesson. This course begins where it ends, about seventy years later, with the same word doing the same work in a different building.

*Who Gets the Credit*, lesson 11, is the other neighbour. It covers Gladys West at the Naval Surface Warfare Center at Dahlgren and describes her as a mathematician. Whether her job title was a classification of the kind this course is about has not been checked, there or here, so this course does not fold her into the frame. Borrowing a person into an argument because she would fit it is the same error as inventing a headcount.

**Why a job title counts as evidence.** *Who Gets Named*, lesson 17, calls this fact creation, the first of Trouillot's four moments: a record about a person is made at the instant somebody writes down what that person is. Once a payroll says "computer", the payroll is a source, and every archive, index and history built on top of it inherits that word.

:::reveal What did the word computer name in 1942, and who held the title at the Moore School? ||| A job. It named a person employed to compute, and at the Moore School it was held by roughly eighty to a hundred women hired by the Army to hand-calculate ballistics trajectories.

:::reveal Why does this course print a range rather than a single headcount? ||| Because its three sources say between 80 and 100, nearly a hundred, and approximately 100. They agree on one approximate figure, and choosing one would invent a precision none of them claims.

:::reveal Why does this course refuse to use Gladys West as an example of the job-title frame? ||| Because the lesson that covers her calls her a mathematician and her Dahlgren job title has not been checked. Fitting a person into an argument she has not been shown to belong in is the same error as inventing a number.

## Vocabulary
- **Computer (job title)**: a person employed to carry out calculations by hand, the official title of the women the Army hired at the Moore School from 1942.
- **Ballistics trajectory**: the path of a fired shell, computed by hand for the firing tables an artillery crew worked from.
- **Moore School**: the Moore School of Electrical Engineering at the University of Pennsylvania, where the Army's computers worked and where ENIAC was built.
- **Ballistics Research Laboratory**: the Army laboratory the Moore School computers were hired for, as APS News names it.
- **Fact creation**: Trouillot's first moment, the making of a source, which is exactly what assigning a job classification does.
- **Invented precision**: turning an approximate figure from a source into an exact one in a retelling, the most common way a careful claim decays.

## Sources
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "why-the-job-was-open",
      title: "2 · Why the job was open",
      section: "Section 1 · A computer was a person",
      body: `A job open to women in 1942, in a field closed to them almost everywhere else, needs an explanation. The historian of computing Janet Abbate gives one in a single sentence. Quoted in APS News, she says of the computer's job: "It was work that required a mathematical education but was a repetitive and dead-end job, so it didn't appeal to educated men" (Joosse, 2022).

**Three conditions, and only one of them does the work.** Read the sentence as a list. The job required a mathematical education. The job was repetitive. The job was dead-end. The first condition narrows the pool to people with degrees. The second makes the work unpleasant. It is the third that opens the door, because a dead-end job leads nowhere, and a person who has somewhere else to go does not take it.

**What follows for the employer.** The Army got a workforce that was qualified, available and cheap, and it got it precisely because the careers those degrees pointed toward were closed. That is the same structural argument *How We Know What's Out There* makes about the observatory: the scale of the work was affordable because of who was doing it. Two institutions, two eras, one arrangement.

**What follows for the record, which is what this course is about.** A title attached to work classified as repetitive and dead-end gets read later as clerical, because that is what the classification says. When somebody in 1986, or 2013, or 2026, goes looking for who did the work, the title is among the first things they find, and it is already an argument. Nobody has to suppress anything. The filing does it.

**One number this course does not print.** The Harvard lesson can state a pay gap because its sources support one. The sources read for this course give the computers' salary, about $1,620 a year, and say nothing about what the men at the Moore School earned. So this course prints no Moore School pay gap. It would be easy to assume one. It might well be true. An assumption that is probably true is still an assumption, and the difference between "probably" and "documented" is the entire subject of section 4. If you want that number it is in payroll records, and finding it is real research somebody could do.

**Why this kind of explanation is the useful kind.** Abbate's sentence is an explanation and not an excuse, and the distinction is worth holding. It does not say the work was unimportant. It says the labour market treated the work as unimportant, and it names the feature, dead-end, that made the treatment possible. An explanation shaped like that points at something you can check in a personnel file. An explanation shaped like "nobody valued women's work" points at an attitude, and an attitude cannot be opened and read.

:::reveal In Abbate's sentence, which of the three conditions actually opens the job to women, and why? ||| Dead-end. A job that leads nowhere is one a person with somewhere else to go will not take, so the requirement of a mathematical education narrows the pool and the dead-end quality decides who is left in it.

:::reveal Why does this course refuse to print a Moore School pay gap? ||| Because its sources give the computers' salary and say nothing about what the men there were paid. The gap is plausible and undocumented, and an assumption that is probably true is still an assumption.

:::reveal How does a job classification damage a record without anybody suppressing anything? ||| Work classified as repetitive and dead-end carries a title that later readers take as clerical. The title is among the first things a researcher finds, so the filing makes the argument by itself.

## Vocabulary
- **Dead-end job**: in Abbate's account, work that leads to no promotion or career, the feature that made the computer's job available to women with degrees.
- **Labour market explanation**: an account of who did a job that points at hiring conditions you can check rather than at attitudes you can only assert.
- **Clerical reading**: the later misreading of a technical job as routine office work, carried by the classification rather than by the work.
- **Documented versus probable**: the distinction this course enforces, where a claim nobody has read in a source stays out of the prose however likely it seems.

## Sources
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program`,
    },
    {
      slug: "six-names-and-their-variants",
      title: "3 · Six names, and six ways to spell them",
      section: "Section 1 · A computer was a person",
      body: `Here are the six, as Kathy Kleiman spells them: **Frances "Betty" Snyder Holberton, Jean Jennings Bartik, Kathleen "Kay" McNulty Mauchly Antonelli, Marlyn Wescoff Meltzer, Ruth Lichterman Teitelbaum, and Frances Bilas Spence** (Kleiman, 2018).

Now here are the same six people in six other printed forms.

**APS News** puts the maiden name first and the married name in brackets: Kathleen McNulty (later Mauchly Antonelli), Jean Jennings (Bartik), Marlyn Wescoff (Meltzer), Frances Bilas (Spence), Ruth Lichterman (Teitelbaum), Betty Snyder Holberton (Joosse, 2022).

**Penn Today**, at the machine's eightieth anniversary, prints "Frances Bilas Spence, Jean Jennings Bartik, Ruth Lichterman Teitelbaum, Betty Snyder Holberton, Kay McNulty Mauchly Antonelli, and Marlyn Wescoff Meltzer" (Magubane, 2026).

**Mental Floss**, in 2013, prints "Francis 'Betty' Snyder Holberton, Betty 'Jean' Jennings Bartik, Kathleen McNulty Mauchly Antonelli, Marlyn Wescoff Meltzer, Ruth Lichterman Teitelbaum, and Frances Bilas Spence" (Sheppard, 2013). That is *Francis* where every other source reads *Frances*, and *Betty "Jean" Jennings* where Kleiman writes *Jean Jennings*.

**An Army caption** in the Research Laboratory's image collection identifies two of them as "Betty Jennings (Mrs. Bartik)" and "Frances Bilas (Mrs. Spence)" (U.S. Army Research Laboratory, n.d.). Betty again, for the person Kleiman calls Jean.

**A Computer History Museum catalogue record** for a photograph from about 1946 names "Elizabth [sic] Jennings" and "Frances Bilas" (Computer History Museum, n.d.). The bracketed *sic* is the museum's own, marking a typing error in its own record.

And the **ENIAC Programmers Project**, the site Kleiman founded, spells one name "Ruth Licherman (Teitelbaum)", against Lichterman in her TED piece, in APS News and in Penn Today (ENIAC Programmers Project, n.d.). That is almost certainly a slip on the site rather than a competing spelling, and this course uses Lichterman for that reason, while telling you the variant is out there.

**Why a whole lesson on spelling.** Take one of the six. In the sources above, Jean Jennings Bartik appears under four different first names: Jean, Betty Jean, Betty, and Elizabth. Four first names is four searches, and three of them come back empty. An empty result is the easiest thing in research to misread. It feels like evidence of absence, and it is almost always evidence about an index. *Who Gets Named*, lesson 17, calls this fact retrieval, the third of Trouillot's moments, where a narrative gets built out of whatever the searcher happened to find.

Three mechanisms are stacked here, and they are worth separating. A **married name** splits one working life into two record sets, with the split falling in the middle of the career. A **nickname** in quotation marks, Betty, Jean, Kay, sometimes replaces the legal name in print and sometimes sits beside it, so the same person appears under two first names in two indexes. And a **typographical error** inside a catalogue record, once indexed, is permanent, searchable and wrong.

**The rule this course follows.** It spells a name the way the source it is citing spells it, and it prints the variant rather than quietly normalising. Silent normalisation makes a course look tidy and makes it useless to the next person, who needs to know which strings to type.

:::reveal Name the three mechanisms that give one person several printed names. ||| A married name, which splits a working life into two record sets. A nickname, which can replace or accompany the legal first name in print. And a typographical error in a catalogue record, which once indexed is permanent and searchable.

:::reveal Why is an empty search result weak evidence about a person? ||| Because it is usually evidence about an index rather than about the past. Jean Jennings Bartik appears under four first names across these sources, so three searches out of four come back empty on a fully documented person.

:::reveal What spelling rule does this course follow, and why not simply standardise? ||| It spells a name the way the source it cites spells it and prints the variant. Standardising looks tidy and hides the strings the next researcher would need to search on.

## Vocabulary
- **Name variant**: one of several printed forms of a single person's name, each of which indexes and searches separately.
- **Married-name split**: the division of one working life into two record sets, falling wherever the name changed.
- **Sic**: a bracketed mark that an error stands in the original, used here by a museum about its own catalogue record.
- **Fact retrieval**: Trouillot's third moment, the making of narratives, where a researcher's search terms decide what the story can contain.
- **Silent normalisation**: quietly standardising a name across sources, which tidies a text and destroys the information a later searcher needs.

## Sources
Computer History Museum. (n.d.). *ENIAC, circa 1946* (Catalog Nos. 102622431 and 102622385) [Catalogue record]. Computer History Museum Collection.
ENIAC Programmers Project. (n.d.). *The ENIAC Programmers Project*. https://eniacprogrammers.org/
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Magubane, N. (2026, February 11). *Penn's ENIAC, the world's first electronic computer, turns 80*. Penn Today. https://penntoday.upenn.edu/news/penns-eniac-worlds-first-electronic-computer-turns-80
Sheppard, A. (2013, October 13). *Meet the "Refrigerator Ladies" who programmed the ENIAC*. Mental Floss. https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · A computer was a person",
      section: "Section 1 · A computer was a person",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In 1942, what did the word \"computer\" name?",
            options: [
              "A person who computes",
              "An electromechanical desk calculator issued to Army ordnance offices for firing-table work",
              "A printed book of firing tables that an artillery crew carried into the field",
              "A section of the Moore School building where the Army's calculating machines were kept",
            ],
            correctIndex: 0,
            explanation:
              "It was a job title. Kleiman puts it directly: a Computer was a person before it was a machine, and that was the official title.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Who hired the women computers at the Moore School?",
            options: [
              "The United States Army",
              "The University of Pennsylvania, which employed them as graduate teaching assistants in mathematics",
              "The United States Navy, through its Bureau of Ordnance office in Washington",
              "A private engineering contractor that held the ENIAC construction contract",
            ],
            correctIndex: 0,
            explanation:
              "The Army hired them, at the Moore School, for the Army's Ballistics Research Laboratory. The university supplied the building, not the payroll line.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "In what year did the Army send out notice that it wanted women mathematics majors at the Moore School?",
            options: [
              "1942",
              "1939, in the month the war in Europe began and before the United States had entered it",
              "1945, in the spring, as the machine itself was nearing completion",
              "1946, immediately after the machine was demonstrated to the press",
            ],
            correctIndex: 0,
            explanation:
              "APS News dates the notice to 1942. The machine was still years away; the hiring was for hand calculation of ballistics trajectories.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What salary does APS News give for the computer's job?",
            options: [
              "About $1,620 a year",
              "About $620 a year, roughly a third of what a junior engineer at the same school was paid",
              "About $3,200 a year, matching the Moore School's starting engineering salary",
              "No salary at all, because the positions were unpaid wartime volunteer appointments",
            ],
            correctIndex: 0,
            explanation:
              "About $1,620 per year, which APS News converts to roughly $27,000 in present-day money.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What present-day figure does APS News give for that salary?",
            options: [
              "About $27,000",
              "About $9,000, which the article says is below the modern federal minimum for full-time work",
              "About $61,000, which the article compares to a starting software engineer's pay",
              "About $120,000, which the article uses to argue the work was well compensated",
            ],
            correctIndex: 0,
            explanation:
              "APS News converts about $1,620 a year to roughly $27,000 today. The conversion is the article's, not this course's.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Which Army laboratory were the Moore School computers hired for?",
            options: [
              "The Ballistics Research Laboratory",
              "The Los Alamos Laboratory, which had requested help with its own differential equations",
              "The Army Research Laboratory's historic computing branch in Aberdeen, Maryland",
              "The Signal Corps Cryptanalytic Laboratory, which needed hand computation for code work",
            ],
            correctIndex: 0,
            explanation:
              "APS News names the Army's Ballistics Research Laboratory as the laboratory the Moore School hiring served.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "At which university did the Moore School computers work?",
            options: [
              "The University of Pennsylvania",
              "Harvard University, where Kathy Kleiman was later an undergraduate when she found the photographs",
              "Princeton University, whose Institute for Advanced Study held the Army contract",
              "Columbia University, which ran the Army's wartime calculating bureau in New York",
            ],
            correctIndex: 0,
            explanation:
              "The Moore School of Electrical Engineering is at the University of Pennsylvania. Kleiman's Harvard connection is where she found the photographs, decades later, and is a different fact.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "How does Kleiman's 2018 account state the number of women hired as computers?",
            options: [
              "Between 80 and 100",
              "Exactly 97, a figure she says she recovered from the Moore School's wartime personnel files",
              "Several hundred, spread across Philadelphia, Aberdeen and Washington",
              "Six, which is why the six programmers were the only ones available for the machine",
            ],
            correctIndex: 0,
            explanation:
              "She writes that the military hired between 80 and 100 women to hand-calculate ballistics trajectories. It is one of three approximate statements of the same figure.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "How does APS News state the same headcount?",
            options: [
              "Nearly a hundred",
              "More than two hundred, counting the women stationed at Aberdeen Proving Ground as well",
              "Fewer than fifty, because the notice went out only to Pennsylvania colleges",
              "It gives no figure at all and refers the reader to Kleiman's book for one",
            ],
            correctIndex: 0,
            explanation:
              "APS News says nearly a hundred women were hired as computers at the school. Kleiman says between 80 and 100 and IEEE Spectrum says approximately 100.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "How does the IEEE Spectrum interview state the headcount?",
            options: [
              "Approximately 100",
              "Roughly 400 women, of whom about a quarter worked on ballistics specifically",
              "A dozen, drawn from the Moore School's own graduate mathematics programme",
              "It disputes the other published figures and gives an exact count of 83",
            ],
            correctIndex: 0,
            explanation:
              "IEEE Spectrum reports approximately 100 human computers working for the U.S. Army during the war, from which six women were chosen.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Why does this course print a range for the headcount instead of one number?",
            options: [
              "No source claims an exact figure",
              "Because the three sources give numbers that flatly contradict one another and cannot be reconciled",
              "Because the Army's own personnel records were destroyed and no count survives anywhere",
              "Because the range makes the group sound larger and therefore more significant",
            ],
            correctIndex: 0,
            explanation:
              "All three sources state an approximation, and they agree. Choosing one and printing it as exact would add a precision none of them claims.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What does this course call invented precision?",
            options: [
              "Making an approximate figure exact",
              "Citing a source for a number that the source in fact took from a different publication",
              "Rounding a large number down so that it is easier for a learner to remember",
              "Giving a figure in present-day money without saying which year the conversion uses",
            ],
            correctIndex: 0,
            explanation:
              "It is the move that turns an approximation in a source into an exact number in a retelling, and this course names it as the most common way a careful claim decays.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Which existing lesson in this catalog already teaches the computer job title, so that this course links to it rather than repeating it?",
            options: [
              "How We Know What's Out There, lesson 8",
              "Who Gets Named, lesson 21, which covers who corrects a record and with what instruments",
              "Who Made the Record, lesson 7, which covers a caption that carries a name",
              "Who Gets the Credit, lesson 17, which corrects five claims that do not survive checking",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 8, The Harvard Computers, teaches the title for the observatory. The other three lessons are also linked from this course, but for the caption method, the correction instruments and a separate myth.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What did the Harvard computers examine, according to the lesson this course points at?",
            options: [
              "Photographic plates",
              "Firing tables produced by the Army's Ballistics Research Laboratory during the First World War",
              "Punched cards prepared by the observatory's own tabulating department",
              "Live telescope observations, taken in shifts through the night at the observatory",
            ],
            correctIndex: 0,
            explanation:
              "They were employed to examine photographic plates, and they were called computers because at the time the word meant a person who computes.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Why does this course refuse to use Gladys West as an example of its job-title frame?",
            options: [
              "Her job title has not been checked",
              "Because her work at Dahlgren was on satellite geodesy, which has nothing to do with computation",
              "Because the lesson that covers her is public and this course is private, so it cannot link to it",
              "Because she was never employed by the federal government and so had no official title at all",
            ],
            correctIndex: 0,
            explanation:
              "The lesson covering her calls her a mathematician, and her Dahlgren title was not researched there or here. Fitting a person into an argument she has not been shown to belong in is the error this course is built to avoid.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Where did Gladys West work, according to the lesson this course points at?",
            options: [
              "Dahlgren, Virginia",
              "The Moore School of Electrical Engineering, in the same building as the Army's computers",
              "Harvard College Observatory, on the plate collection",
              "Aberdeen Proving Ground, where the machine was moved after the war",
            ],
            correctIndex: 0,
            explanation:
              "The Naval Surface Warfare Center at Dahlgren, Virginia. Who Gets the Credit, lesson 11, describes her as a mathematician there.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What does Trouillot's first moment, fact creation, describe?",
            options: [
              "The making of a source",
              "The point at which a historian decides which of several surviving stories is worth telling",
              "The moment an archive accepts a collection and assigns it an accession number",
              "The moment a researcher chooses search terms and so decides what can be found",
            ],
            correctIndex: 0,
            explanation:
              "Fact creation is the making of sources. A job classification is exactly that: the record about the person is made when somebody writes down what the person is.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What happens, in this course's argument, once a payroll records somebody as a computer?",
            options: [
              "The payroll becomes a source",
              "The employee gains a formal right to be named in any publication arising from the work",
              "The classification is superseded by whatever job the person actually performs day to day",
              "The record becomes unusable to historians, because job titles are not admissible evidence",
            ],
            correctIndex: 0,
            explanation:
              "The payroll is now a document that says what the person was, and every archive, index and history built on top of it inherits the word.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What were the Moore School computers hired to calculate?",
            options: [
              "Ballistics trajectories",
              "Payroll and supply figures for the Army's ordnance depots along the eastern seaboard",
              "Census tabulations for the wartime manpower survey",
              "Cryptographic key tables for the Signal Corps",
            ],
            correctIndex: 0,
            explanation:
              "They hand-calculated ballistics trajectories, the paths of fired shells, for the firing tables artillery crews worked from.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "By what method did the Moore School computers do that work when they were hired?",
            options: [
              "By hand",
              "On the ENIAC itself, which was already running when the first of them arrived in 1942",
              "On punched-card tabulating machines leased from a commercial supplier",
              "By telephone, relaying figures to a central calculating bureau in Washington",
            ],
            correctIndex: 0,
            explanation:
              "Hand calculation is what the job was. Both Kleiman and APS News describe the work that way, and it is why the job title existed at all.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Which sentence of Kleiman's does this course quote about the order of the word's meanings?",
            options: [
              "A Computer was a person before it was a machine",
              "A Computer was a machine long before anybody thought to apply the word to a person doing arithmetic",
              "The Army invented the word Computer in 1942 as a wartime personnel classification",
              "The word Computer was never an official title and appears only in later retellings",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence adds that it was actually their official title. The course quotes it with the punctuation adapted, because her original uses a dash.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "When this course quotes Kleiman's job-title sentence, what does it tell the reader about the text?",
            options: [
              "The punctuation is adapted",
              "That the sentence is a paraphrase and no direct quotation of her words was available",
              "That the quotation comes from her book rather than from the TED Ideas piece",
              "That she has since retracted the claim that Computer was an official title",
            ],
            correctIndex: 0,
            explanation:
              "Her original uses a dash, and this catalog does not print em dashes, so the course flags the adaptation rather than silently altering a quotation.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What kind of institution does this course say inherits the payroll's word?",
            options: [
              "Archives, indexes and histories",
              "Only the employer itself, since personnel files are sealed and never reach researchers",
              "Courts, because a job classification is a legally binding description of a person's work",
              "Nothing downstream, because later historians always work from the technical record instead",
            ],
            correctIndex: 0,
            explanation:
              "Everything built on top of a source inherits its wording, which is why fact creation is the first of Trouillot's four moments rather than an afterthought.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "How many years separate the Harvard computers this course points at and the Moore School computers it teaches?",
            options: [
              "About seventy",
              "About fifteen, which is why the same individual women appear in both stories",
              "About two hundred, since the Harvard work began in the eighteenth century",
              "None, because the two groups were employed at the same time by the same contract",
            ],
            correctIndex: 0,
            explanation:
              "The course says it begins where the Harvard lesson ends, about seventy years later, with the same word doing the same work in a different building.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Who is Janet Abbate, and where does this course read her?",
            options: [
              "A historian, quoted in APS News",
              "A Moore School computer, interviewed for the documentary about the six programmers",
              "The archivist at Hagley who holds the 1946 press clippings",
              "The Computer History Museum cofounder whose remark Kleiman recalls",
            ],
            correctIndex: 0,
            explanation:
              "Abbate is a historian of computing at Virginia Tech, and this course reads her single sentence as APS News quotes it.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What three conditions does Abbate's sentence attach to the computer's job?",
            options: [
              "Educated, repetitive, dead-end",
              "Wartime, classified and temporary, so that nobody expected to hold the post after 1945",
              "Low-paid, part-time and clerical, which is why the Army could staff it quickly",
              "Skilled, prestigious and competitive, which is why so many applicants were turned away",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence: work that required a mathematical education but was a repetitive and dead-end job, so it did not appeal to educated men.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Which of Abbate's three conditions does this course say actually opened the job to women?",
            options: [
              "Dead-end",
              "The education requirement, because women held more mathematics degrees than men at the time",
              "The repetitive quality, because employers believed women were better suited to repetition",
              "None of them; the course says the wartime draft is the whole explanation",
            ],
            correctIndex: 0,
            explanation:
              "A dead-end job leads nowhere, so a person with somewhere else to go does not take it. The education requirement narrows the pool, and the dead-end quality decides who is left.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What effect does the education requirement have on the pool of applicants, in this lesson's reading?",
            options: [
              "It narrows it to degree holders",
              "It widens it, because the Army accepted any college attendance rather than a completed degree",
              "It has no effect, since the Army waived the requirement almost immediately",
              "It removes women from the pool, since mathematics degrees were closed to them",
            ],
            correctIndex: 0,
            explanation:
              "The first condition narrows the pool to people with mathematical education. It is the third condition, dead-end, that determines who inside that pool takes the work.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What did the Army get out of the arrangement Abbate describes?",
            options: [
              "Qualified labour, cheaply",
              "A workforce it could train from scratch in weeks, with no prior mathematical education required",
              "Engineers who could both compute the trajectories and design the machine that replaced them",
              "A temporary staff it discharged as soon as the machine was demonstrated in 1946",
            ],
            correctIndex: 0,
            explanation:
              "Qualified, available and cheap, and available precisely because the careers those degrees pointed toward were closed.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What made that labour cheap, on this lesson's account?",
            options: [
              "Other careers were closed",
              "The work was genuinely simple and required no training beyond secondary-school arithmetic",
              "Wartime wage controls capped every federal salary at the same level",
              "The positions were part-time, so the salary figure understates the real hourly rate",
            ],
            correctIndex: 0,
            explanation:
              "People whose training pointed toward careers that excluded them had fewer alternatives, which is the same structural argument the Harvard lesson makes about the observatory.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What number does this course explicitly refuse to print?",
            options: [
              "A Moore School pay gap",
              "The salary of the computers, because the two sources that give it disagree with each other",
              "The number of women hired, because the Army's records were destroyed",
              "The year of the Army's hiring notice, because two sources date it differently",
            ],
            correctIndex: 0,
            explanation:
              "Its sources give the computers' salary and say nothing about what men at the Moore School earned, so the course prints no gap there even though one is plausible.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Why does this course refuse to print that figure?",
            options: [
              "No source gives the men's pay",
              "Because pay comparisons are unfair across different job descriptions and would mislead a learner",
              "Because the Harvard lesson already prints a pay gap and repeating one would be redundant",
              "Because the course treats salary information as private even eighty years after the fact",
            ],
            correctIndex: 0,
            explanation:
              "The Harvard lesson can state a gap because its sources support one. Here they do not, and an assumption that is probably true is still an assumption.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Where does this lesson say a Moore School pay figure would actually be found?",
            options: [
              "In payroll records",
              "In the Hagley court documents that hold the 1946 press clippings",
              "In the Army Research Laboratory's published photograph captions",
              "In the Computer History Museum's catalogue records for its ENIAC photographs",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names payroll records and calls finding the figure real research somebody could do, rather than leaving the gap as a rhetorical shrug.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "How does a later reader misread the computer job title, according to this lesson?",
            options: [
              "As clerical work",
              "As a senior engineering appointment, because the word now names an expensive machine",
              "As a military rank, because the job was held under Army contract",
              "As a student position, because the work was done inside a university building",
            ],
            correctIndex: 0,
            explanation:
              "Work classified as repetitive and dead-end carries a title later readers take as routine office work, because that is what the classification says.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "In this lesson's account, who has to suppress the record for the misreading to happen?",
            options: [
              "Nobody",
              "The employer, who must seal the personnel files before any researcher can reach them",
              "The press, which must agree not to print the names at the time",
              "The archive, which must decline to accession the relevant papers",
            ],
            correctIndex: 0,
            explanation:
              "The filing makes the argument by itself. The title is among the first things a researcher finds, and it already carries a claim about the work.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What distinction does this lesson draw about Abbate's sentence?",
            options: [
              "It explains rather than excuses",
              "It describes the Moore School specifically rather than wartime employment in general",
              "It reports a recollection rather than a finding drawn from personnel records",
              "It states a cause rather than naming the person who made the hiring decision",
            ],
            correctIndex: 0,
            explanation:
              "It does not say the work was unimportant. It says the labour market treated it as unimportant and names the feature, dead-end, that made the treatment possible.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Why does this lesson call Abbate's kind of explanation the useful kind?",
            options: [
              "It points at something checkable",
              "It avoids assigning responsibility to anyone, which keeps the account neutral and uncontroversial",
              "It is shorter than the alternatives, so a learner can memorise it in a single reading",
              "It comes from an academic rather than from a journalist, so it needs no further checking",
            ],
            correctIndex: 0,
            explanation:
              "An explanation shaped like hers points at hiring conditions you can open in a personnel file. One shaped like nobody valued women's work points at an attitude, which cannot be read.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Which institution does this lesson name as the structural parallel to the Moore School?",
            options: [
              "Harvard College Observatory",
              "The Los Alamos Laboratory, which sent the machine its first problem in December 1945",
              "The Naval Surface Warfare Center at Dahlgren, where Gladys West worked",
              "The Computer History Museum, whose catalogue now names two of the six",
            ],
            correctIndex: 0,
            explanation:
              "Two institutions, two eras, one arrangement: the scale of the work was affordable because of who was doing it.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What structural argument do the observatory and the Moore School share, in this lesson?",
            options: [
              "Cheap labour set the scale",
              "Both employers deliberately concealed the names of their staff from the public record",
              "Both institutions refused to hire women until a wartime shortage forced the change",
              "Both projects were funded by the same Army ordnance contract",
            ],
            correctIndex: 0,
            explanation:
              "The amount of work that could be done was affordable because of who was doing it, and who was doing it was determined by which careers were closed.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "How does this course treat a claim that is plausible but that no source states?",
            options: [
              "It stays out of the prose",
              "It goes into the prose with a hedging word such as likely or probably attached to it",
              "It goes into a quiz question, where a learner can weigh it without the course asserting it",
              "It goes into the vocabulary block, which the course treats as commentary rather than assertion",
            ],
            correctIndex: 0,
            explanation:
              "Documented versus probable is the rule the course enforces. The Moore School pay gap is the worked example: plausible, undocumented, and therefore unprinted.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "How does Kathy Kleiman spell the first name of the programmer surnamed Holberton?",
            options: [
              "Frances",
              "Elizabeth, which is also the spelling used in the Computer History Museum's catalogue record",
              "Marlyn, which Mental Floss gives as her legal first name",
              "Kathleen, with Betty as the nickname in quotation marks",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman writes Frances \"Betty\" Snyder Holberton. Mental Floss prints Francis instead, which is one of the variants this lesson is built from.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "How does the 2013 Mental Floss article spell that same first name?",
            options: [
              "Francis",
              "Frances, in agreement with every other source the lesson quotes",
              "Fanny, which the article says was the form she used professionally",
              "It omits her first name entirely and prints only the surname Holberton",
            ],
            correctIndex: 0,
            explanation:
              "Mental Floss prints Francis \"Betty\" Snyder Holberton, against Frances everywhere else. A single letter is enough to split a search.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What first name does the Army caption in the Research Laboratory collection give the programmer Kleiman calls Jean Jennings?",
            options: [
              "Betty",
              "Elizabeth, written in full and followed by the married surname in brackets",
              "Marlyn, which the caption gives with the surname Wescoff",
              "Kathleen, with Kay in quotation marks beside it",
            ],
            correctIndex: 0,
            explanation:
              "The caption reads Betty Jennings (Mrs. Bartik). Kleiman writes Jean Jennings Bartik for the same person.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "How does the Computer History Museum's catalogue record spell that programmer's first name?",
            options: [
              "Elizabth, marked sic",
              "Jean, in agreement with Kleiman's spelling and with Penn Today's",
              "Betty Jean, with the nickname set in quotation marks",
              "It gives no first name and identifies her only by position in the photograph",
            ],
            correctIndex: 0,
            explanation:
              "The record reads Elizabth [sic] Jennings. The bracketed sic is the museum's own, marking a typing error inside its own record.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Whose mark is the [sic] in that catalogue record?",
            options: [
              "The museum's own",
              "This course's, added to flag an error the museum has not acknowledged",
              "Kleiman's, from the caption reproduced in her 2022 book",
              "The Army's, carried over from the original 1946 photograph caption",
            ],
            correctIndex: 0,
            explanation:
              "The museum marked its own typing error. An indexed typographical error is permanent and searchable, which is one of the three mechanisms this lesson separates.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "How does the ENIAC Programmers Project site spell the surname that other sources give as Lichterman?",
            options: [
              "Licherman",
              "Teitelbaum, which it uses in place of the maiden name entirely",
              "Lichtermann, with a doubled final letter",
              "Lichterman, in agreement with APS News, Penn Today and Kleiman's own TED piece",
            ],
            correctIndex: 0,
            explanation:
              "The site Kleiman founded spells it Ruth Licherman (Teitelbaum), against Lichterman in her TED piece, in APS News and in Penn Today.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Which spelling of that surname does this course use?",
            options: [
              "Lichterman",
              "Licherman, because the ENIAC Programmers Project was founded by Kleiman and so outranks the others",
              "Both, alternating between them so that neither is privileged over the other",
              "Neither; the course refers to her by married surname only, to sidestep the dispute",
            ],
            correctIndex: 0,
            explanation:
              "Three sources agree on Lichterman, so the course uses it and treats the single-source variant as a slip, while still telling the reader the variant exists.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Who founded the ENIAC Programmers Project?",
            options: [
              "Kathy Kleiman",
              "The Computer History Museum, as part of its oral history programme in the 1990s",
              "The University of Pennsylvania, at the machine's fiftieth anniversary",
              "The U.S. Army Research Laboratory, alongside its historic computer image collection",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman founded it, which is why the Licherman spelling on it is best read as a typing slip on her own site rather than as a competing claim.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Which anniversary was Penn Today marking when it named all six programmers?",
            options: [
              "The eightieth",
              "The fortieth, which is the anniversary at which Kleiman met four of the six",
              "The fiftieth, at which a Penn dean did not know who she was asking about",
              "The sixtieth, marked in the year the documentary was released",
            ],
            correctIndex: 0,
            explanation:
              "Penn Today's February 2026 article marks eighty years since the machine, and it names all six as the first digital-age programmers.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What three mechanisms does this lesson say give one person several printed names?",
            options: [
              "Marriage, nickname, typo",
              "Translation, transliteration and abbreviation, as happens with names carried between alphabets",
              "Pseudonyms, professional names and legal changes made in adulthood",
              "Military rank, academic title and honorific, each of which prefixes the name differently",
            ],
            correctIndex: 0,
            explanation:
              "A married name, a nickname in quotation marks, and a typographical error inside a catalogue record. Each one indexes and searches separately.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What does a married name do to a person's record, in this lesson's account?",
            options: [
              "Splits it into two sets",
              "Replaces the earlier record entirely, so that only the later surname survives in any index",
              "Adds a cross-reference that every archive is required to maintain between the two forms",
              "Has no effect on retrieval, because catalogues index on surname at birth",
            ],
            correctIndex: 0,
            explanation:
              "It splits one working life into two record sets, with the split falling wherever the name changed, which is often the middle of the career.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What does a nickname do to retrieval, in this lesson's account?",
            options: [
              "It gives two first names",
              "It makes the record easier to find, because a short name is more distinctive than a long one",
              "It disqualifies a caption as evidence, because informal usage is not an official record",
              "It only matters in oral histories, never in printed catalogues",
            ],
            correctIndex: 0,
            explanation:
              "A nickname sometimes replaces the legal first name in print and sometimes sits beside it, so the same person appears under two first names in two indexes.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What does this lesson say about a typographical error inside an indexed catalogue record?",
            options: [
              "It is permanent and searchable",
              "It is harmless, because catalogue software corrects spelling variants automatically at query time",
              "It is corrected within a year under standard archival practice",
              "It prevents the record from being indexed at all, so the photograph becomes unfindable",
            ],
            correctIndex: 0,
            explanation:
              "Once indexed, the error is fixed in place, findable, and wrong. The museum's own sic mark is the acknowledgement, not the fix.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Under how many different first names does Jean Jennings Bartik appear across the sources this lesson quotes?",
            options: [
              "Four",
              "Two, which the lesson says is the usual effect of a married name on its own",
              "Seven, one for each source the lesson quotes",
              "One, because every source the lesson quotes agrees on her first name",
            ],
            correctIndex: 0,
            explanation:
              "Jean, Betty Jean, Betty and Elizabth. Four first names is four searches, and three of them come back empty on a fully documented person.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What is an empty search result usually evidence about, in this lesson?",
            options: [
              "The index",
              "The past, since a thoroughly documented person is reliably findable under any spelling",
              "The archive's accession policy, which decides what was collected in the first place",
              "The searcher's institutional access, since most catalogues sit behind subscriptions",
            ],
            correctIndex: 0,
            explanation:
              "It feels like evidence of absence and it is almost always evidence about an index, which is why the lesson insists on printing the variants.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Which of Trouillot's moments does the name-variant problem belong to?",
            options: [
              "Fact retrieval",
              "Fact creation, because the name is written down at the moment the record is made",
              "Fact assembly, because the archive decides which papers it accessions",
              "Retrospective significance, because someone decides which story is worth telling",
            ],
            correctIndex: 0,
            explanation:
              "Fact retrieval is the making of narratives, where the searcher's terms decide what the story can contain. The variants act there.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What does Trouillot's fact retrieval moment produce?",
            options: [
              "Narratives",
              "Sources, since a researcher's notes become a record in their own right",
              "Archives, since retrieval decides what a repository keeps",
              "Catalogue records, since retrieval is the act of describing an object",
            ],
            correctIndex: 0,
            explanation:
              "It is the making of narratives, built out of whatever the searcher happened to find, which is why search terms are not a trivial detail.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What spelling rule does this course follow?",
            options: [
              "Follow the source being cited",
              "Use the spelling that appears in the largest number of sources, silently, throughout the course",
              "Use the spelling the person's own family prefers, where that can be established",
              "Use modern standardised forms, since historical spelling is not load-bearing for a learner",
            ],
            correctIndex: 0,
            explanation:
              "It spells a name the way the source it is citing spells it, and prints the variant rather than quietly normalising.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Why does this course refuse to standardise the spellings silently?",
            options: [
              "It would hide searchable strings",
              "Because standardising would require choosing between sources, and the course has no basis for choosing",
              "Because the variants are themselves quotations and altering a quotation is never permitted",
              "Because a catalogue record's spelling has legal force that a course cannot override",
            ],
            correctIndex: 0,
            explanation:
              "Silent normalisation makes a course look tidy and makes it useless to the next person, who needs to know which strings to type.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What naming format does APS News use for the six?",
            options: [
              "Maiden name, then married",
              "Married name only, since that is the form under which most of them published later work",
              "First initial and surname, in the style of a journal reference list",
              "Nickname in quotation marks between the first and last names",
            ],
            correctIndex: 0,
            explanation:
              "APS News prints forms such as Jean Jennings (Bartik) and Frances Bilas (Spence), putting the maiden name first and the married name in brackets.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "In how many other printed forms does this lesson give the six, after Kleiman's?",
            options: [
              "Six",
              "Two, one from a newspaper and one from a museum catalogue",
              "Eleven, one for each source consulted during the course's research",
              "None; the lesson quotes only Kleiman and describes the others without printing them",
            ],
            correctIndex: 0,
            explanation:
              "APS News, Penn Today, Mental Floss, an Army caption, a Computer History Museum record, and the ENIAC Programmers Project site.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What does this course mean by silent normalisation?",
            options: [
              "Standardising a name without saying so",
              "Converting a quotation's punctuation to house style and noting the change in the text",
              "Using a person's own preferred spelling in place of an institution's record",
              "Listing every variant of a name in a footnote rather than in the body of a lesson",
            ],
            correctIndex: 0,
            explanation:
              "It tidies a text at the cost of the information a later searcher needs, so this course prints the variant instead.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Which sources does this lesson say agree on the Lichterman spelling?",
            options: [
              "Kleiman, APS News and Penn Today",
              "The Army caption, the Computer History Museum record and the ENIAC Programmers Project site",
              "Mental Floss and the Computer History Museum record, against every other source quoted",
              "Only Penn Today, which is why the course treats the spelling as unsettled",
            ],
            correctIndex: 0,
            explanation:
              "Her TED piece, APS News and Penn Today all print Lichterman. The single variant, Licherman, appears on the ENIAC Programmers Project site.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "In the Harvard lesson this course points at, who did credit for the resulting catalogs frequently attach to?",
            options: [
              "The observatory's director",
              "Each classifier individually, named on the plate envelope she had examined",
              "The Army, which had funded the plate collection under an ordnance contract",
              "Nobody, because the catalogs were published anonymously by the observatory",
            ],
            correctIndex: 0,
            explanation:
              "That is the point this course links to rather than repeats: the same job title, the same transfer of credit, about seventy years earlier.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "How does the Harvard lesson describe what those computers were paid?",
            options: [
              "A fraction of comparable male pay",
              "The same rate as male assistants, which is why the observatory could hire so many of them",
              "A piece rate set by the number of plates examined in a week",
              "Nothing at all, because the positions were held by students working for course credit",
            ],
            correctIndex: 0,
            explanation:
              "A fraction of what a man in comparable work earned. This course cites that lesson for the precedent and does not repeat its argument.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What does this lesson say Abbate's sentence does NOT claim?",
            options: [
              "That the work was unimportant",
              "That educated men had other options open to them in the same period",
              "That the job required a mathematical education before anybody could hold it",
              "That the job offered no route to promotion within the laboratory",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence says the labour market treated the work as unimportant, which is a claim about hiring rather than about the work itself.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What does a museum's sic mark on its own record achieve, on this lesson's reading?",
            options: [
              "It acknowledges rather than fixes",
              "It removes the erroneous spelling from the catalogue's search index while keeping it on display",
              "It transfers responsibility for the error to whoever supplied the photograph",
              "It signals that the error was present in the original 1946 caption",
            ],
            correctIndex: 0,
            explanation:
              "The typing error stays in the record, indexed and searchable. The bracketed mark tells a reader the museum knows, which is not the same as correcting it.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 · Programming with no language
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "chosen-from-the-computers",
      title: "4 · Six chosen from about a hundred",
      section: "Section 2 · Programming with no language",
      body: `Two sources describe how the six came to be on the machine. Read them next to each other before reading anything else.

**IEEE Spectrum**, interviewing Kathy Kleiman in 2022: "Out of approximately 100 human computers working for the U.S. Army during World War II, six women were chosen to write a program for the computer to run differential calculus equations" (Goodrich, 2022).

**Mental Floss**, in 2013: "When the ENIAC was nearing completion in the spring of 1945, the Army randomly selected five women computers out of the 100 or so workers (later adding a sixth woman to the team) and tasked them with programming the thing" (Sheppard, 2013).

**Where they agree.** The programmers came out of the pool of human computers, not from the engineering staff. The pool was around a hundred. The assignment was to program the machine. Three claims, two independent publications, no conflict.

**Where they disagree, and it is not trivial.** One says six were chosen. The other says five were chosen and a sixth was added later. One gives a season, spring 1945. The other gives no date at all. And one adds a word the other does not have anywhere: *randomly*.

**What that word would take to establish.** A claim that a selection was random is a claim about a procedure, and procedures leave paper: a memo, a personnel action, an order, a note in a project file. Neither source shows one, and neither says where it got the word. So this course does not print *randomly*. It is not that the claim is false. It is that nothing here supports it, and a course that repeats it becomes the next source somebody cites for it.

**What this course does print.** Six women were chosen from among roughly a hundred Army computers and assigned to program the machine. Mental Floss dates the selection to the spring of 1945 and IEEE Spectrum gives no date, so the date is attributed rather than asserted.

**The word nobody fills in.** *Chosen* is passive in both sentences. Neither source names who chose, or on what basis. That gap is the kind *Who Gets Named*, lesson 17, teaches you to interrogate rather than shrug at: ask what would have had to happen for a record to exist. Assigning six employees to a new project inside a military contract normally produces a written personnel action. So a record probably exists, and its absence from this course is a statement about what has been read, not about what happened.

**One fight this course declines.** Kleiman's book subtitle calls the machine "the world's first modern computer". Penn Today calls it "the world's first electronic computer". Those are two different claims, and in each one the adjective is doing all the work. Arguments about which machine was first are definitional arguments, and they are settled by choosing a definition rather than by finding a document. This course does not adjudicate it, and nothing in the credit question depends on the answer. Whoever the machine's operators were, they were either named or not named, and that is checkable.

:::reveal On what three points do the IEEE Spectrum and Mental Floss accounts of the selection agree? ||| That the programmers came from the pool of human computers rather than the engineering staff, that the pool was around a hundred, and that the assignment was to program the machine.

:::reveal Why does this course refuse to print the word randomly? ||| Because a claim about a selection procedure needs the paper a procedure leaves, such as a memo or a personnel action. Neither source shows one or says where the word came from, and repeating it would make this course the next citation for it.

:::reveal Why does this course decline the argument about which machine was first? ||| Because first-ness claims are settled by choosing a definition rather than by finding a document, and the credit question does not depend on the answer. Whether the operators were named is checkable; whether the machine was first is not.

## Vocabulary
- **Human computer**: the pool of Army employees, about a hundred at the Moore School, from which the six programmers were taken.
- **Passive attribution**: a sentence such as "six women were chosen" that records an action without naming the actor, leaving a gap a researcher can go and fill.
- **Definitional claim**: an assertion such as "the first modern computer" that is settled by agreeing on a definition rather than by producing evidence.
- **Unsupported qualifier**: a word like randomly that changes what a sentence claims and that no source in hand documents.

## Sources
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Magubane, N. (2026, February 11). *Penn's ENIAC, the world's first electronic computer, turns 80*. Penn Today. https://penntoday.upenn.edu/news/penns-eniac-worlds-first-electronic-computer-turns-80
Sheppard, A. (2013, October 13). *Meet the "Refrigerator Ladies" who programmed the ENIAC*. Mental Floss. https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac`,
    },
    {
      slug: "no-language-no-manual",
      title: "5 · No language, no manual, no listing",
      section: "Section 2 · Programming with no language",
      body: `Four sources describe what programming this machine involved. They were written across thirteen years by four different kinds of organisation, and they describe the same practice.

**Kleiman, 2018:** "There were no programming languages, no manuals, no compilers and no operating systems, so the women had to figure out how to program this massive machine on their own" (Kleiman, 2018).

**APS News, 2022:** "They broke up the differential equation into many small steps and figured out how to set up the operations in parallel across the cables, switches, and panels" (Joosse, 2022).

**Mental Floss, 2013:** "They physically hand-wired the machine, an arduous task using switches, cables, and digit trays to route data and program pulses" (Sheppard, 2013).

**And the Army's own caption** on a photograph in the Research Laboratory's collection: "Two women posed to show the 'direct programming' of ENIAC done by setting hundreds of wires and thousands of switches" (U.S. Army Research Laboratory, n.d.).

**A caveat you must carry.** The two women in that last photograph are Ester Gerston and Gloria Gordon Bolotsky, described by the same collection as Army computers during the war and later second-generation ENIAC programmers. They are not among the six. The caption is good evidence about what programming the machine physically meant. It is not evidence about the six, and a course that quoted it without saying so would be handing you a picture of the wrong people.

**What the four accounts add up to.** A program was a physical configuration of a machine. You built it out of wires, switches, panels and trays, and when you were finished the program existed as an arrangement of hardware. To run a different problem, you took it apart.

**Now the consequence, which is the hinge of this whole course.** Work of that kind leaves no signed artifact. There is no source listing to file, no deck to label, no manuscript with a name on the front. *Who Gets the Credit*, lesson 11, teaches that where patents are not at issue, the currency of credit is authorship: a byline on a paper, a name on a procedure. Here there is not even a paper for a name to be left off.

So what survives? The machine, which was reconfigured for the next problem and eventually dismantled. And photographs, which have captions. That is the whole durable record of the act, and it is why a course about this subject ends up being a course about reading captions. Section 3 does exactly that.

**One thing this course does not tell you.** How the machine worked internally. Its sources describe cables, switches, panels, digit trays and pulses, and that is the vocabulary this course uses. Anything more detailed would be borrowed from somewhere nobody here has read, and borrowed technical detail is the easiest kind of sentence to get confidently wrong.

:::reveal What did a program on this machine physically consist of? ||| An arrangement of hardware. The four sources describe wires, switches, panels and digit trays set by hand, so the program existed as a configuration of the machine and had to be taken apart to run something else.

:::reveal Why must the Army caption about direct programming be handled carefully in a course about the six? ||| Because the two women in that photograph are Ester Gerston and Gloria Gordon Bolotsky, second-generation programmers, not the six. The caption is evidence about the practice and not about those six people.

:::reveal Why does work of this kind leave the credit question resting on captions? ||| Because it produces no signed artifact. There is no listing or manuscript to carry a name, so the surviving records of the act are the machine, which was reconfigured and dismantled, and photographs, which have captions.

## Vocabulary
- **Direct programming**: the Army caption's term for configuring the machine by setting wires and switches by hand.
- **Digit tray**: one of the components Mental Floss names as part of the hand-wiring used to route data and program pulses.
- **Signed artifact**: an object that carries an author's name, such as a paper or a listing, and whose absence here removes the usual route to credit.
- **Second-generation programmer**: the Army's own description of Ester Gerston and Gloria Gordon Bolotsky, who came after the six and appear in the photograph collection.
- **Borrowed technical detail**: an explanation taken from a source nobody on the project has read, and the easiest kind of sentence to get confidently wrong.

## Sources
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Sheppard, A. (2013, October 13). *Meet the "Refrigerator Ladies" who programmed the ENIAC*. Mental Floss. https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "the-first-program-was-secret",
      title: "6 · The first program was secret",
      section: "Section 2 · Programming with no language",
      body: `APS News gives a date that rearranges the whole story: "The ENIAC was first put to work on December 10, 1945, solving a math problem from the Army's Los Alamos Laboratory" (Joosse, 2022).

That is roughly two months before the machine was shown to the press. The first thing it did was classified work for the atomic weapons laboratory, and classified work is, by definition, work nobody is told about.

**Two things this course does not say, and the reason is the same both times.** It does not name the problem. No source read here gives it a name, and the popular retelling's label for it appears in none of them. And it does not say which of the six, if any, set up that particular run. The APS article is about the six, and its headline calls this the first program. But the sentences this course read give the date and the origin of the problem, and they do not say who configured the machine for it.

**That gap is worth pausing on, because it teaches a rule.** A headline is not a citation. Headlines are written to compress and to attract, often by somebody other than the author, and they routinely assert what the article merely implies. When you are working from a source, quote a sentence. If the sentence you need does not exist, you have found something out: the source does not actually say the thing you were about to repeat.

**Why the order of events matters for a record.** Run the question *Who Gets Named*, lesson 17, asks: what would have had to happen for a record of the December work to exist and be public? Somebody would have had to be permitted to publish it. On a classified problem for Los Alamos in 1945, nobody was. So the first occasion on which anybody connected to this machine could be publicly named at all was the demonstration in mid-February 1946.

That is a heavy load for one afternoon of publicity to carry. Every public name attached to this machine in its first months had to be attached at that one event, or in the coverage of it. If the event and its coverage named some people and not others, that choice was not one choice among many. For a while it was the only public record there was.

**And note the smaller correction it produces.** In the popular telling, February 1946 is when the machine first ran. It is not. It is when the machine was first *shown*. The first run was two months earlier and secret. A "first" in a story is worth checking against a calendar every time, because there is usually more than one of them and they rarely agree.

:::reveal What did the machine do first, and when? ||| It solved a math problem from the Army's Los Alamos Laboratory on 10 December 1945, roughly two months before it was shown to the press.

:::reveal Why does this course decline to name who set up the December 1945 run? ||| Because the sentences it read give the date and the origin of the problem and do not name the operators. The article's headline implies it, and a headline is not a citation.

:::reveal Why does the secrecy of the first run put so much weight on the February event? ||| Because classified work could not be published, so the demonstration and its coverage were the first occasion on which anybody connected to the machine could be publicly named, which made that coverage the entire public record for a time.

## Vocabulary
- **Classified first run**: the 10 December 1945 Los Alamos problem, the machine's first work and unpublishable at the time.
- **Headline versus sentence**: the rule that a source supports only what its sentences say, since headlines compress, attract, and are often written by somebody other than the author.
- **Public naming occasion**: an event, such as the February 1946 demonstration, that is the first opportunity for anybody to be credited in public, and so carries disproportionate weight in the record.
- **Competing firsts**: the several different milestones a story can call first, which is why each one is worth checking against a date.

## Sources
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Programming with no language",
      section: "Section 2 · Programming with no language",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "From what pool were the six programmers taken?",
            options: [
              "The Army's human computers",
              "The Moore School's electrical engineering faculty, who had built the machine and knew its wiring",
              "A group of enlisted signal corps technicians transferred in from Aberdeen",
              "Graduate students recruited from mathematics departments after the machine was finished",
            ],
            correctIndex: 0,
            explanation:
              "Both accounts agree on this: the programmers came out of the pool of roughly a hundred human computers, not from the engineering staff.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What task does IEEE Spectrum say the six were chosen for?",
            options: [
              "To write a program for the machine",
              "To verify by hand the results the machine produced, as a check on its accuracy",
              "To compile the firing tables the Ballistics Research Laboratory had ordered before 1942",
              "To operate the machine during the February 1946 press demonstration only",
            ],
            correctIndex: 0,
            explanation:
              "IEEE Spectrum says they were chosen to write a program for the computer to run differential calculus equations.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What kind of equations does IEEE Spectrum say the program was to run?",
            options: [
              "Differential calculus equations",
              "Linear systems of the kind used for structural engineering calculations",
              "Statistical regressions for the Army's wartime manpower survey",
              "Cryptographic key schedules for the Signal Corps",
            ],
            correctIndex: 0,
            explanation:
              "Differential calculus equations, in IEEE Spectrum's wording. APS News separately describes breaking a differential equation into many small steps.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "How many women does the 2013 Mental Floss account say were selected at first?",
            options: [
              "Five",
              "Six, in agreement with the IEEE Spectrum account and with every other source",
              "Ten, of whom four left the project before the machine was finished",
              "One hundred, the whole pool of computers, who were then narrowed down by examination",
            ],
            correctIndex: 0,
            explanation:
              "Mental Floss says five were selected, with a sixth added to the team later. IEEE Spectrum says six were chosen, without describing a two-stage process.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What date does Mental Floss give for the selection?",
            options: [
              "The spring of 1945",
              "The autumn of 1942, immediately after the Army's hiring notice went out",
              "December 1945, the month the machine first ran",
              "February 1946, in the weeks before the press demonstration",
            ],
            correctIndex: 0,
            explanation:
              "It places the selection in the spring of 1945, as the machine was nearing completion. IEEE Spectrum gives no date, so this course attributes the season rather than asserting it.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Which word appears in the Mental Floss account of the selection and in no other source read here?",
            options: [
              "Randomly",
              "Volunteered, describing how the six came forward for the assignment",
              "Examined, describing a written test the Army set for the candidates",
              "Promoted, describing a change in their grade and pay on transfer",
            ],
            correctIndex: 0,
            explanation:
              "Mental Floss says the Army randomly selected the women. No other source read here uses the word, and neither source says where it came from.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Why does this course refuse to print that the selection was random?",
            options: [
              "No document supports it",
              "Because random selection would be unlawful under the Army's wartime personnel regulations",
              "Because the six were plainly chosen for their mathematical ability, which the sources describe",
              "Because Mental Floss is a magazine and this course cites only academic publications",
            ],
            correctIndex: 0,
            explanation:
              "A claim about a selection procedure needs the paper a procedure leaves. Neither source shows one, and repeating the word would make this course the next citation for it.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this lesson call a word like randomly, which changes a sentence's claim without documentation behind it?",
            options: [
              "An unsupported qualifier",
              "A secondary attribution, meaning a detail one publication takes from another without citing it",
              "A retrospective insertion, meaning a term added to a story after all witnesses have died",
              "A terminological drift, meaning a word whose meaning has changed since the period described",
            ],
            correctIndex: 0,
            explanation:
              "The lesson's vocabulary names it an unsupported qualifier: a word that alters what a sentence asserts while no source in hand documents it.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What grammatical feature do both accounts of the selection share?",
            options: [
              "The verb is passive",
              "Both name the officer who made the decision but disagree about his rank",
              "Both are written in the first person, as recollections by one of the six",
              "Both give a precise date and omit the number of people selected",
            ],
            correctIndex: 0,
            explanation:
              "Six women were chosen, and the Army randomly selected, both record an action without a named decision-maker or stated criteria.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course say about the fact that no source names who chose the six?",
            options: [
              "A record probably exists unread",
              "That the decision was made informally and therefore left no paper at all",
              "That the Army's personnel records for the project were destroyed after the war",
              "That the question is unanswerable and not worth pursuing further",
            ],
            correctIndex: 0,
            explanation:
              "Assigning six employees to a new project inside a military contract normally produces a written personnel action, so the gap is a statement about what has been read.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Which lesson's question does this course apply to the missing selection record?",
            options: [
              "Who Gets Named, lesson 17",
              "Who Made the Record, lesson 7, on a caption that carries a name",
              "How We Know What's Out There, lesson 8, on the Harvard computers",
              "Who Gets the Credit, lesson 11, on authorship as the currency of credit",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 17 teaches the question: what would have had to happen for this record to exist? Applied here, it suggests a personnel action that nobody has read.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does Kleiman's book subtitle call the machine?",
            options: [
              "The world's first modern computer",
              "The world's first electronic computer, which is also the phrase Penn Today uses",
              "The Army's first programmable calculator",
              "The first machine to run a stored program from memory",
            ],
            correctIndex: 0,
            explanation:
              "Her subtitle says the world's first modern computer. Penn Today says the world's first electronic computer. Two different claims, with the adjective doing the work in each.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does Penn Today call the machine?",
            options: [
              "The world's first electronic computer",
              "The world's first modern computer, matching the subtitle of Kleiman's 2022 book",
              "The Army's experimental calculator at the Moore School",
              "The first computer to be operated by a team of women",
            ],
            correctIndex: 0,
            explanation:
              "Penn Today's headline calls it the world's first electronic computer, a different qualifier from the one in Kleiman's subtitle.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Why does this course decline to settle which machine was first?",
            options: [
              "It is a definitional argument",
              "Because the primary documents that would settle it are held in archives the course could not reach",
              "Because the answer would change which of the six deserves the most credit",
              "Because competing national claims make the question politically sensitive",
            ],
            correctIndex: 0,
            explanation:
              "First-ness claims are settled by agreeing a definition rather than by producing a document, and nothing in the credit question depends on the answer.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course say IS checkable about the operators, whatever the first-ness argument decides?",
            options: [
              "Whether they were named",
              "Whether the machine they configured produced a mathematically correct result",
              "Whether they had the mathematical training the Army's notice required",
              "Whether the selection procedure the Army used was fair",
            ],
            correctIndex: 0,
            explanation:
              "Whether the operators were named is a question a document answers. Whether the machine was first is a question a definition answers.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Roughly how large was the pool the six were taken from, on both accounts?",
            options: [
              "About a hundred",
              "About a thousand, spread across the Army's wartime calculating bureaus",
              "About twenty, the Moore School's entire mathematics staff",
              "About three hundred, of whom a third worked on ballistics",
            ],
            correctIndex: 0,
            explanation:
              "IEEE Spectrum says approximately 100 human computers; Mental Floss says the 100 or so workers. The two agree on the size of the pool.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course mean by a definitional claim?",
            options: [
              "One settled by agreeing a definition",
              "A claim about a technical term that only specialists in the field are qualified to assess",
              "A claim stated in a dictionary or encyclopedia rather than in a primary source",
              "A claim a course must define before it can be taught to a general audience",
            ],
            correctIndex: 0,
            explanation:
              "An assertion such as the first modern computer is decided by which definition you accept, not by producing evidence, which is why the course sets it aside.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course actually print about the selection, once the disagreements are accounted for?",
            options: [
              "Six were chosen from about a hundred",
              "Five were randomly selected in spring 1945 and a sixth was added shortly afterwards",
              "Six volunteered after the Army circulated a call for programmers among the computers",
              "The Moore School's faculty nominated six of its best computers to the Army",
            ],
            correctIndex: 0,
            explanation:
              "That is the claim both sources support. The season is attributed to Mental Floss, and the word randomly is left out for want of documentation.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Why does the course warn that repeating an undocumented word is worse than simply believing it?",
            options: [
              "The course becomes the next citation",
              "Because a course carries legal responsibility for factual claims that a magazine does not",
              "Because learners cannot distinguish an attributed claim from an asserted one",
              "Because the word would then have to be defended in the course's bibliography",
            ],
            correctIndex: 0,
            explanation:
              "A claim gains apparent support every time a new publication repeats it, which is how an unsourced word turns into a well-established fact.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Which two publications does this lesson set side by side on the selection?",
            options: [
              "IEEE Spectrum and Mental Floss",
              "APS News and the U.S. Army Research Laboratory image collection",
              "Penn Today and the Computer History Museum catalogue",
              "Kleiman's TED Ideas piece and Martin's 1995 article",
            ],
            correctIndex: 0,
            explanation:
              "The 2022 IEEE Spectrum interview with Kleiman and the 2013 Mental Floss article are the two accounts this lesson compares.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course say a passive attribution leaves behind for a researcher?",
            options: [
              "A gap that can be filled",
              "A claim that cannot be checked, since the actor has been deliberately concealed",
              "A stylistic flaw with no bearing on what the sentence actually supports",
              "An error, because a sentence without an actor asserts nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "Six women were chosen records an action without an actor, and naming the actor is a research question somebody can go and answer.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "How does Kleiman describe the tools available for programming the machine?",
            options: [
              "No languages, manuals, compilers or operating systems",
              "A printed operator's manual supplied by the Moore School, but no higher-level language",
              "An assembler written by the engineering staff, which the six then extended",
              "A set of punched-card routines carried over from the Army's tabulating bureau",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence lists all four absences and concludes that the women had to figure out how to program the machine on their own.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "How does APS News describe what the six did with the differential equation?",
            options: [
              "Broke it into many small steps",
              "Solved it by hand first and then checked the machine's answer against their own",
              "Rewrote it as a system of linear equations the machine could handle directly",
              "Sent it to the Ballistics Research Laboratory for conversion into machine instructions",
            ],
            correctIndex: 0,
            explanation:
              "APS News says they broke it into many small steps and worked out how to set up the operations in parallel across the cables, switches and panels.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Which three components does APS News name as what the operations were set up across?",
            options: [
              "Cables, switches and panels",
              "Vacuum tubes, relays and accumulators, which the article lists as the machine's three main subsystems",
              "Punched cards, tape readers and printers",
              "Drums, cores and registers",
            ],
            correctIndex: 0,
            explanation:
              "Cables, switches, and panels, in APS News's wording. Mental Floss adds digit trays to the same picture.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What component does Mental Floss add to the description of the hand-wiring?",
            options: [
              "Digit trays",
              "Punched-card decks, which the article says carried the program between runs",
              "A plugboard programming language developed for the Army's tabulators",
              "Magnetic tape, used to store the configuration for reuse",
            ],
            correctIndex: 0,
            explanation:
              "Mental Floss says they hand-wired the machine using switches, cables, and digit trays to route data and program pulses.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What term does the Army's own caption use for configuring the machine by hand?",
            options: [
              "Direct programming",
              "Manual coding, a phrase the Army used before programming entered general use",
              "Wiring the problem, which is how the Moore School's engineers described it",
              "Panel setting, the term used in the Ballistics Research Laboratory's manuals",
            ],
            correctIndex: 0,
            explanation:
              "The caption describes two women posed to show the direct programming of the machine, done by setting hundreds of wires and thousands of switches.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Who are the two women in the Army's direct-programming photograph?",
            options: [
              "Ester Gerston and Gloria Gordon Bolotsky",
              "Jean Jennings Bartik and Frances Bilas Spence, two of the six programmers",
              "Betty Snyder Holberton and Marlyn Wescoff Meltzer, photographed at the main control panel",
              "Two hired models, as a museum cofounder later told Kathy Kleiman",
            ],
            correctIndex: 0,
            explanation:
              "The collection names them and describes both as Army computers during the war and later second-generation ENIAC programmers. They are not among the six.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Why does this lesson flag who is in that photograph?",
            options: [
              "They are not among the six",
              "Because the photograph is not in the public domain and cannot be reproduced by learners",
              "Because the collection gives no names for them, so the caption cannot be checked",
              "Because the caption was written in 1946 and uses obsolete technical vocabulary",
            ],
            correctIndex: 0,
            explanation:
              "The caption is good evidence about what programming physically meant and is not evidence about the six. Quoting it without saying so would show the wrong people.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does the Army collection call Gerston and Gordon Bolotsky?",
            options: [
              "Second-generation ENIAC programmers",
              "Models hired by the Army's public relations office for the publicity photographs",
              "Moore School engineering students assigned to the project for a term",
              "Ballistics Research Laboratory supervisors who oversaw the six",
            ],
            correctIndex: 0,
            explanation:
              "The collection describes both as Computers for the Army during the war and later second-generation ENIAC programmers.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What did a program on this machine physically consist of?",
            options: [
              "An arrangement of hardware",
              "A deck of punched cards read into the machine at the start of each run",
              "A written procedure the operators followed by hand at the control panel",
              "A set of instructions stored in the machine's memory between runs",
            ],
            correctIndex: 0,
            explanation:
              "Wires, switches, panels and trays set by hand. To run a different problem you took the configuration apart.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What had to happen to a program on this machine before a different problem could be run?",
            options: [
              "It had to be taken apart",
              "It had to be punched onto cards and filed with the laboratory's records",
              "It had to be approved by the Ballistics Research Laboratory in writing",
              "It had to be copied into the machine's memory to free the control panel",
            ],
            correctIndex: 0,
            explanation:
              "Because the program existed as a physical configuration, running something else meant dismantling it, which is why nothing survives to carry a name.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does this course call an object that carries an author's name, such as a paper or a listing?",
            options: [
              "A signed artifact",
              "A credit line, meaning the attribution printed alongside a published work",
              "A byline record, meaning an institution's log of who authored what",
              "A provenance chain, meaning the documented history of an object's custody",
            ],
            correctIndex: 0,
            explanation:
              "A signed artifact is the usual route to credit, and this work produced none, which is the hinge of the whole course.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "According to Who Gets the Credit lesson 11, what is the currency of credit where patents are not at issue?",
            options: [
              "Authorship",
              "Ownership of the equipment on which the work was done",
              "Seniority within the institution that employed the researcher",
              "Priority of publication date, regardless of whose name appears",
            ],
            correctIndex: 0,
            explanation:
              "A byline on a paper, a name on a procedure. This course's point is that here there was not even a paper for a name to be left off.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What two kinds of record does this lesson say survive the act of programming the machine?",
            options: [
              "The machine, and photographs",
              "The operating logs and the Ballistics Research Laboratory's published firing tables",
              "The Army's personnel files and the Moore School's course records",
              "The punched cards and the printed output of each run",
            ],
            correctIndex: 0,
            explanation:
              "The machine, which was reconfigured and eventually dismantled, and photographs, which have captions. That is why the course becomes a course about captions.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Why does this lesson refuse to explain the machine's internal workings?",
            options: [
              "Its sources do not describe them",
              "Because technical detail would distract from the credit question the course is about",
              "Because the Army has never declassified the machine's engineering drawings",
              "Because the machine was dismantled before any complete description was written",
            ],
            correctIndex: 0,
            explanation:
              "The course uses only the vocabulary its sources use: cables, switches, panels, digit trays and pulses. Borrowed technical detail is the easiest kind of sentence to get confidently wrong.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "How many sources does this lesson say describe the same programming practice?",
            options: [
              "Four",
              "Two, both of them interviews with Kathy Kleiman conducted years apart",
              "One, the Army's own photograph caption, which is the only contemporary description",
              "Seven, the same set the name-variant lesson compares",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman in 2018, APS News in 2022, Mental Floss in 2013, and an Army caption. Four organisations across thirteen years describing one practice.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does this course mean by borrowed technical detail?",
            options: [
              "Explanation from a source nobody read",
              "A technical term used in a course without a definition in the vocabulary block",
              "A description of a machine taken from a later model of the same equipment",
              "Engineering detail supplied by a reviewer rather than by the course author",
            ],
            correctIndex: 0,
            explanation:
              "It is detail taken from somewhere nobody on the project has read, and it is the easiest kind of sentence to state confidently and get wrong.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Over what span of years were the four descriptions of the programming practice written?",
            options: [
              "About thirteen",
              "About eighty, from the 1946 captions to Penn Today's 2026 article",
              "About four, all of them published between 2018 and 2022",
              "About thirty, from Martin's 1995 article to the present",
            ],
            correctIndex: 0,
            explanation:
              "The lesson notes they were written across thirteen years by four different kinds of organisation, which is why their agreement carries weight.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does the Army caption say the wires and switches were set to demonstrate?",
            options: [
              "Direct programming",
              "The machine's accumulator capacity, measured against the older tabulating equipment",
              "A ballistic trajectory calculation for the Ballistics Research Laboratory",
              "The speed at which the machine could be reconfigured between problems",
            ],
            correctIndex: 0,
            explanation:
              "Two women posed to show the direct programming of the machine, done by setting hundreds of wires and thousands of switches.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Which section of this course follows directly from the absence of a signed artifact?",
            options: [
              "The section on captions",
              "The section on the correction and the instruments that made it",
              "The section on the job title and why it was open to women",
              "The final assessment, which is where the argument is summarised",
            ],
            correctIndex: 0,
            explanation:
              "With no listing and no manuscript, the surviving records are photographs, so section 3 reads captions as the durable record of the act.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does Mental Floss say the hand-wiring was used to route?",
            options: [
              "Data and program pulses",
              "Power to the machine's forty panels, which had to be balanced by hand before each run",
              "Cooling air through the accumulator racks",
              "Printed output to the Ballistics Research Laboratory's teleprinter",
            ],
            correctIndex: 0,
            explanation:
              "The article says they used switches, cables and digit trays to route data and program pulses, and calls the task arduous.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "On what date does APS News say the machine was first put to work?",
            options: [
              "10 December 1945",
              "15 February 1946, the day it was shown to the press at the Moore School",
              "14 February 1946, the date Martin's 1995 article gives for the press day",
              "4 March 1947, the date a Computer History Museum record gives for a photograph's first printing",
            ],
            correctIndex: 0,
            explanation:
              "APS News says it was first put to work on 10 December 1945, roughly two months before the public demonstration.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Whose problem did the machine solve on that first run?",
            options: [
              "The Army's Los Alamos Laboratory",
              "The Ballistics Research Laboratory, which had commissioned the machine for firing tables",
              "The Moore School, which ran a test problem of its own design",
              "The Navy's Bureau of Ordnance, under a separate wartime contract",
            ],
            correctIndex: 0,
            explanation:
              "APS News says it solved a math problem from the Army's Los Alamos Laboratory. That work was classified, so nothing about it could be published at the time.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Why does this course give the December 1945 problem no name?",
            options: [
              "No source read here names it",
              "Because the name remains classified under a wartime designation still in force",
              "Because the sources disagree about which of two problems was run first",
              "Because naming it would identify individuals the course has agreed not to name",
            ],
            correctIndex: 0,
            explanation:
              "The label the popular retelling attaches to it appears in none of the sources read for this course, so the course does not print it.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Why does this course decline to say who set up the December 1945 run?",
            options: [
              "The sentences read do not say",
              "Because the six had not yet been selected when the machine first ran",
              "Because the operating logs for that run were destroyed with the machine",
              "Because the article names them but spells the names in a form the course cannot verify",
            ],
            correctIndex: 0,
            explanation:
              "The APS article is about the six and its headline calls this the first program, but the sentences give only the date and the origin of the problem.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What rule does this lesson draw from the gap between a headline and an article?",
            options: [
              "Quote the sentence, not the headline",
              "Prefer a headline, which an editor has checked more carefully than the body text",
              "Treat the headline as the author's summary of the claims the article supports",
              "Cite both, so a reader can weigh the compression for themselves",
            ],
            correctIndex: 0,
            explanation:
              "Headlines compress and attract, are often written by somebody other than the author, and routinely assert what an article merely implies.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What have you found out if the sentence you need is not in the source?",
            options: [
              "The source does not say it",
              "That the source has been edited since the claim was first published",
              "That you are searching a secondary account rather than the original",
              "That the claim is false and can be reported as such",
            ],
            correctIndex: 0,
            explanation:
              "That is a finding in itself: the source does not support the thing you were about to repeat, which is worth more than a vague citation.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Applying Who Gets Named lesson 17's question, why could no public record of the December work exist?",
            options: [
              "Nobody was permitted to publish it",
              "Because the machine produced no output that anybody thought worth recording",
              "Because the Moore School had no press office until early 1946",
              "Because the six had not yet been assigned to the project",
            ],
            correctIndex: 0,
            explanation:
              "It was classified work for the atomic weapons laboratory. The question the lesson teaches is what would have had to happen, and here permission is the answer.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What was the first occasion on which anybody connected to the machine could be publicly named?",
            options: [
              "The mid-February 1946 demonstration",
              "The December 1945 run for Los Alamos, which was reported once the war had ended",
              "The 1986 fortieth anniversary at the University of Pennsylvania",
              "The publication of Martin's article in 1995",
            ],
            correctIndex: 0,
            explanation:
              "Because the first run was classified, the demonstration and its coverage were the first public naming occasion, which made that coverage the entire public record for a time.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What does the course mean by calling February 1946 a heavy load for one afternoon to carry?",
            options: [
              "Every public name had to come from it",
              "That the demonstration was technically difficult and could easily have failed in front of the press",
              "That the coverage was so extensive that later writers could not read all of it",
              "That the event was held on a single day and so nobody could attend twice",
            ],
            correctIndex: 0,
            explanation:
              "With the first run secret, any public credit attached to the machine in its first months had to attach at that event or in its coverage.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What smaller correction does the December date produce to the popular telling?",
            options: [
              "February was the showing, not the first run",
              "The machine was finished two months later than the anniversary dates suggest",
              "The Los Alamos problem was run after the press demonstration, not before it",
              "The six were selected in December rather than in the spring",
            ],
            correctIndex: 0,
            explanation:
              "In the popular telling February 1946 is when the machine first ran. It is when the machine was first shown. The first run was two months earlier and secret.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What does this lesson advise doing with any first in a story?",
            options: [
              "Check it against a date",
              "Accept it if two independent publications repeat the same claim",
              "Treat it as a definitional claim and set it aside unexamined",
              "Attribute it to the earliest publication that printed it",
            ],
            correctIndex: 0,
            explanation:
              "There is usually more than one first in a story and they rarely agree, which is why each one is worth checking against a calendar.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Roughly how long was the gap between the machine's first run and its public demonstration?",
            options: [
              "About two months",
              "About two years, since the first run was in December 1943",
              "About six months, the interval Kleiman gives between the unveiling and the photographs",
              "About a week, so that the press event followed immediately on a successful test",
            ],
            correctIndex: 0,
            explanation:
              "10 December 1945 to mid-February 1946 is roughly two months, and the first of those events was classified.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What does this course call a public naming occasion?",
            options: [
              "The first chance anybody can be credited publicly",
              "A ceremony at which an institution formally corrects an earlier omission",
              "The moment an archive publishes a catalogue record naming a photograph's subjects",
              "A press conference at which an organisation announces a new appointment",
            ],
            correctIndex: 0,
            explanation:
              "Such an occasion carries disproportionate weight in a record, because whoever it names or omits sets the public account for a time.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Who often writes a publication's headline, according to this lesson?",
            options: [
              "Somebody other than the author",
              "The author, as the final step before a piece is filed",
              "The subject of the article, in the case of an interview",
              "An automated system, which selects a phrase from the opening paragraph",
            ],
            correctIndex: 0,
            explanation:
              "That is one of the reasons the lesson gives for treating a headline as an attention device rather than as a citable claim.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What does this course call the several different milestones a story can label first?",
            options: [
              "Competing firsts",
              "Definitional claims, all of which are settled by agreeing a definition",
              "Retrospective significance, the fourth of Trouillot's moments",
              "Passive attributions, since each one omits the actor",
            ],
            correctIndex: 0,
            explanation:
              "The course names them competing firsts and recommends checking each against a date, since they rarely agree with one another.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What kind of work does this lesson say the machine's first run was?",
            options: [
              "Classified",
              "A public demonstration arranged for the Army's ordnance officers",
              "An engineering acceptance test run by the Moore School staff",
              "A routine ballistics calculation of the kind the computers did by hand",
            ],
            correctIndex: 0,
            explanation:
              "It was a problem from the Army's Los Alamos Laboratory, and classified work is by definition work nobody is told about.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What does this lesson say a classified project does keep, even when it publishes nothing?",
            options: [
              "Logs and reports",
              "Press releases, held back until the classification is lifted",
              "Photographs, which are the only unclassified record of any project",
              "Nothing, which is why the December run cannot now be reconstructed",
            ],
            correctIndex: 0,
            explanation:
              "Because a classified project keeps operating logs and reports, a record of who ran the December problem probably exists, and its absence here is about access.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "How does this course handle the spring 1945 date for the selection?",
            options: [
              "It attributes it rather than asserting it",
              "It prints it as established, because no other source offers a competing date",
              "It omits it entirely, because a season is too vague to be useful to a learner",
              "It converts it to a month, since the sources agree the machine was near completion",
            ],
            correctIndex: 0,
            explanation:
              "One source gives the season and the other gives no date, so the course says Mental Floss dates it there rather than stating it flat.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What does this course identify as the hinge that turns a credit question into a caption question?",
            options: [
              "The work left no signed artifact",
              "The machine was dismantled before anybody thought to photograph its final configuration",
              "The Army classified every document relating to the project until the 1980s",
              "The six never published anything under their own names afterwards",
            ],
            correctIndex: 0,
            explanation:
              "With no listing and no manuscript to carry a name, the surviving records of the act are the machine and the photographs, and photographs have captions.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What does this lesson say headlines are written to do?",
            options: [
              "Compress and attract",
              "Summarise the article's evidence accurately for readers who go no further",
              "Record the strongest claim the author is prepared to defend",
              "Identify the source the article relies on most heavily",
            ],
            correctIndex: 0,
            explanation:
              "That is why a headline routinely asserts what an article merely implies, and why the rule is to quote a sentence instead.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 · The unveiling, the press, and the photograph
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-date-that-does-not-check-out",
      title: "7 · A date that does not check out",
      section: "Section 3 · The unveiling, the press, and the photograph",
      body: `Two sources give the day the machine was shown to the press, and they give different days.

**APS News:** "The ENIAC was unveiled to the public on February 15, 1946, in a splashy demonstration held at the Moore School" (Joosse, 2022).

**C. Dianne Martin**, writing in *IEEE Technology and Society Magazine* in 1995 under the title "ENIAC: The Press Conference That Shook the World", gives the press day as "Saturday, February 14, 1946" (Martin, 1995).

One day apart. On its own that is an ordinary disagreement, the kind you settle by finding a dated document. But there is something inside Martin's version you can test for free.

**Open a calendar.** 14 February 1946 was a Thursday. 15 February 1946 was a Friday. Neither of them was a Saturday.

**Be careful about what that proves.** It does not prove APS News right. An error in one source is not evidence for a different source's number, and treating it that way is one of the most common mistakes in this kind of work. What the calendar shows is narrower and more useful: Martin's sentence contains two claims about one event, a date and a day name, and they do not agree with each other. A sentence that disagrees with itself was not checked. That tells you how much weight it can carry, and it tells you nothing at all about the other source.

**The method worth taking away.** When two sources conflict, do not start by asking which one you trust. Start by asking which claims inside each one you can test cheaply and independently. A date cannot be checked against itself. A day name can, against any calendar, in ten seconds. The spelling of a name can be checked against other sources, free. A salary figure cannot; it needs a record. Rank the claims by how cheap the test is, run the cheap ones first, and you will often learn something about a source before you have found a single new document.

**What this course does with the conflict.** Outside a quotation it writes mid-February 1946. When it quotes a source it quotes that source's own date and says whose it is. It does not split the difference, it does not pick the more recent publication, and it does not pick the one that reads better. A research check is filed naming what would settle it: a dated document from the event itself, such as the Moore School's invitation or programme, the Army's press release, or a dated newspaper page.

**One thing this is not.** It is not a reason to distrust Martin's article, which is the only scholarly account of the 1946 press coverage this course read and which carries the archive citation section 4 depends on. A source can be wrong about a day of the week and right about what the newspapers printed. Sorting a source into reliable or unreliable is a shortcut that skips the actual work, which is to check claims one at a time.

:::reveal What day of the week were 14 and 15 February 1946? ||| Thursday and Friday. Neither was a Saturday, which is the day name Martin's sentence attaches to 14 February.

:::reveal Why does the calendar check not settle which date is right? ||| Because an error inside one source is not evidence for a different source's number. It shows only that Martin's sentence disagrees with itself, and therefore was not checked.

:::reveal What is the method this lesson recommends when two sources conflict? ||| Rank the claims inside each source by how cheaply you can test them independently, and run the cheap tests first. A day name costs ten seconds and a calendar; a salary figure costs an archive visit.

## Vocabulary
- **Internal checkability**: the property of a sentence that contains a claim you can test independently, such as a day name against a calendar.
- **Self-disagreeing sentence**: one whose own parts conflict, which shows it was not checked and limits the weight it can carry.
- **Splitting the difference**: choosing a value between two conflicting sources, which this course refuses because the result matches no source at all.
- **Claim-level reliability**: judging a source one claim at a time rather than sorting it into trustworthy or untrustworthy.

## Sources
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf`,
    },
    {
      slug: "two-photographs-of-eight-men",
      title: "8 · Two descriptions of a photograph of eight men",
      section: "Section 3 · The unveiling, the press, and the photograph",
      body: `**Martin, 1995:** "A group photo taken on that day shows the eight men who were considered responsible for the development of ENIAC" (Martin, 1995).

**The U.S. Army Research Laboratory's image collection** publishes a photograph marked "U.S. Army Photo" and entitled "ENIAC OFFICIALS", naming eight men, each with a title: J. Presper Eckert, Jr., Chief Engineer; Professor J. G. Brainerd, Supervisor; Sam Feltman, Chief Engineer for Ballistics, Ordnance Department; Captain H. H. Goldstine, Liaison Officer; Dr. J. W. Mauchly, Consulting Engineer; Dean Harold Pender, Moore School of Electrical Engineering, University of Pennsylvania; General G. M. Barnes, Chief of the Ordnance Research and Development Service; and Colonel Paul N. Gillon, Chief, Research Branch of the Army Ordnance Research and Development Service (U.S. Army Research Laboratory, n.d.).

**The temptation, and it is a strong one.** Two sources, both describing a photograph of eight men, both attached to the same machine and the same moment. Obviously the same picture.

**The discipline.** Martin gives no caption and no reference number for the photograph she describes. The Army collection gives no date for the one it publishes. Neither source says the other's thing. "Probably the same photograph" is a hypothesis, and it is a good one, and it is not a finding. What would turn it into one is ordinary: a dated print, a negative number, or a caption on the copy Martin worked from. Until somebody has that, this course says what each source says and stops.

**What the newspapers actually ran, on Martin's account.** This is the part that reverses the popular version: "Rather than showing the picture of the eight men in the group photo, the newspapers published pictures showing a huge room with wires, switches, and lights. In this room humans were seen walking around inside and looking very small" (Martin, 1995).

The retelling you will hear says the photograph of the men went out everywhere. The one scholarly account of the 1946 coverage read for this course says the opposite: the papers ran machine-room pictures, with people in them reduced to small figures inside a large room.

**Where Martin's evidence sits, which matters later.** She lists 1946 headlines and one newspaper caption, the *Boston Post*'s "No problem too tough for Robot", and cites them to Hagley Museum and Library Archives, Accession 1825, the Sperry Rand versus Honeywell court documents, boxes 9a and 382. That is a findable place with a box number attached, and lesson 12 comes back to it.

**Two claims that sound identical and are not.** Hold them apart, because the rest of this course depends on the difference.

The first is APS News's: "The six who programmed the ENIAC weren't mentioned in the press, nor at the demonstration", followed by a quotation from Kleiman's book, "No attendee congratulated the women. Because no guest knew what they had done" (Joosse, 2022). That is a claim about *absence*: they were not mentioned.

The second is the one section 4 is about: that the 1946 photograph captions named the men and not the women. That is a claim about *asymmetry* inside a particular document.

A document could confirm one and refute the other. A caption naming eight men and no women supports the asymmetry claim. A newspaper page with no names on it at all supports the absence claim and says nothing about asymmetry. Collapsing the two into "they were erased" loses exactly the distinction that would tell you which document to go and find.

:::reveal Why does this course refuse to say that Martin's group photo and the Army collection's ENIAC OFFICIALS photograph are the same image? ||| Because Martin gives no caption or reference number and the collection gives no date. It is a good hypothesis, and turning it into a finding needs a dated print, a negative number, or a caption on Martin's copy.

:::reveal On Martin's account, what did the newspapers actually publish? ||| Pictures of a huge room with wires, switches and lights, in which people appeared walking around inside and looking very small, rather than the group photograph of the eight men.

:::reveal What is the difference between the absence claim and the asymmetry claim? ||| The absence claim says the six were not mentioned in the press or at the demonstration. The asymmetry claim says a particular caption named the men and not the women. One document can support one and refute the other.

## Vocabulary
- **ENIAC OFFICIALS**: the title on an Army photograph in the Research Laboratory's collection, which names eight men and gives each a post.
- **Hypothesis versus finding**: the distinction between a likely inference, such as two descriptions being of one photograph, and something a document establishes.
- **Absence claim**: the assertion that a person was not mentioned at all in a record.
- **Asymmetry claim**: the assertion that a record mentioned some people and not others, which is a claim about a particular document's internal contents.
- **Accession number**: an archive's identifier for a collection, such as Hagley's 1825, which turns a vague where into a place with a box number.

## Sources
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "read-three-captions",
      title: "9 · Primary-source exercise: read three captions",
      section: "Section 3 · The unveiling, the press, and the photograph",
      body: `The U.S. Army Research Laboratory publishes a collection of historic computer images, many of them from the archives of its Technical Library. Three of its captions are printed below. Read them before reading the analysis.

**Caption A.** A "U.S. Army Photo" entitled "ENIAC OFFICIALS", naming J. Presper Eckert, Jr., Chief Engineer; Professor J. G. Brainerd, Supervisor; Sam Feltman, Chief Engineer for Ballistics, Ordnance Department; Captain H. H. Goldstine, Liaison Officer; Dr. J. W. Mauchly, Consulting Engineer; Dean Harold Pender, Moore School of Electrical Engineering, University of Pennsylvania; General G. M. Barnes, Chief of the Ordnance Research and Development Service; Colonel Paul N. Gillon, Chief, Research Branch of the Army Ordnance Research and Development Service.

**Caption B.** "Two women operating the ENIAC's main control panel while the machine was still located at the Moore School." A separate line identifies them: Betty Jennings (Mrs. Bartik) and Frances Bilas (Mrs. Spence).

**Caption C.** "Two women posed to show the 'direct programming' of ENIAC done by setting hundreds of wires and thousands of switches", identifying Ester Gerston and Gloria Gordon Bolotsky, both "Computers" for the Army during the war and later second-generation ENIAC programmers.

**The four questions.** Run these on each caption, in order, and write down the answer before moving to the next one.

1. What does the caption call the people?
2. Does it give names?
3. Does it give a role, a post, or a title?
4. Who wrote it, and when?

**What you should find.** Caption A calls them officials, gives eight names, and gives eight posts. Caption B calls them two women, gives two names in a separate identifying line, and gives no post at all. Caption C calls them two women, gives two names, and gives a role twice over: the job title "Computers", in quotation marks, and the description second-generation programmers.

**The distinction that does the work.** Caption A identifies people by what they *are*. Chief Engineer. Supervisor. Liaison Officer. Caption B identifies people by what they are *doing*: operating. A post outlasts the afternoon and an activity does not, so a caption that records a post enters an index as a person with a role, and a caption that records an activity enters it as a person in a room. *Who Made the Record*, lesson 7, calls a caption a format with a cap: it holds one line, and what fits in that line decides what survives.

**And notice what Caption A does not claim.** It does not say these eight built the machine. It says they are officials, which means people holding posts. Martin's phrase for the same group is "considered responsible for the development", which is itself a report of somebody's judgement rather than a statement of who did what. Two careful sources, neither of them asserting authorship.

**The caveat you must carry out of this exercise.** These are the collection's captions as it publishes them today, not necessarily the originals from 1946. The bracketed married names in Caption B read like a later hand. So this exercise teaches you to read a caption. It is *not* evidence about what any 1946 newspaper printed. That claim lives in section 4, and it stays attributed there.

**You may use these images.** The collection states: "All photos marked 'U. S. Army Photo' are in the public domain, and may be used without fee, provided that each use is marked 'U. S. Army Photo'." So you can put them in your own work, with that mark.

**Your turn.** Open the collection, find the three photographs, and write one sentence about each that says only what its caption supports and nothing more. Then write a second sentence for each that says what you would need in order to say more.

:::reveal What are the four questions this exercise runs on a caption? ||| What does it call the people? Does it give names? Does it give a role, post or title? And who wrote it, and when?

:::reveal What is the difference between how Caption A and Caption B identify people? ||| Caption A identifies people by what they are, giving eight posts such as Chief Engineer and Liaison Officer. Caption B identifies two women by what they are doing, operating, and gives no post at all.

:::reveal Why is this exercise not evidence about what a 1946 newspaper printed? ||| Because these are the collection's captions as published today rather than the 1946 originals, and at least one of them carries married names that read like a later addition.

:::reveal Under what condition may these photographs be reproduced? ||| Photographs marked U. S. Army Photo are in the public domain and may be used without fee, provided each use is marked U. S. Army Photo.

## Vocabulary
- **Post versus activity**: the difference between a caption that records what somebody is and one that records what somebody is doing, which decides how each person enters an index.
- **Identifying line**: a separate line of a caption that attaches names to positions in the frame, often added later than the descriptive sentence.
- **Collection caption**: the wording an archive publishes today, which may differ from the caption that accompanied the image when it was first distributed.
- **Public domain mark**: the condition attached to these images, that each use be marked U. S. Army Photo.

## Sources
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The unveiling, the press, and the photograph",
      section: "Section 3 · The unveiling, the press, and the photograph",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What date does APS News give for the public demonstration?",
            options: [
              "15 February 1946",
              "14 February 1946, which it describes as a Saturday press conference at the Moore School",
              "10 December 1945, the same day the machine first ran for Los Alamos",
              "4 March 1947, the date a photograph of the machine first appeared in print",
            ],
            correctIndex: 0,
            explanation:
              "APS News says the machine was unveiled to the public on 15 February 1946, in a splashy demonstration held at the Moore School.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What date does Martin's 1995 article give for the press day?",
            options: [
              "Saturday, 14 February 1946",
              "Friday, 15 February 1946, in agreement with APS News on both the date and the day",
              "Monday, 10 December 1945, which she treats as the true unveiling",
              "She gives no date, and refers the reader to the Hagley archive for one",
            ],
            correctIndex: 0,
            explanation:
              "Martin writes Saturday, February 14, 1946. The day name and the date in that sentence do not agree with each other.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What day of the week was 14 February 1946?",
            options: [
              "Thursday",
              "Saturday, which is the day Martin's article attaches to that date",
              "Friday, the same day as the date APS News gives",
              "Sunday, which is why the press conference was rescheduled",
            ],
            correctIndex: 0,
            explanation:
              "A calendar settles it in seconds: 14 February 1946 was a Thursday and 15 February was a Friday. Neither was a Saturday.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What day of the week was 15 February 1946?",
            options: [
              "Friday",
              "Saturday, which would make Martin's day name correct and her date off by one",
              "Thursday, the same day as the date Martin's article gives",
              "Wednesday, which is why the coverage did not appear until the following week",
            ],
            correctIndex: 0,
            explanation:
              "15 February 1946 was a Friday. The point of checking both is that neither candidate date falls on the Saturday Martin's sentence names.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does the calendar check establish about Martin's sentence?",
            options: [
              "It disagrees with itself",
              "That its date is wrong and the APS News date is therefore correct",
              "That the article as a whole is unreliable and should not be cited",
              "That the press conference must have run over two days",
            ],
            correctIndex: 0,
            explanation:
              "A date and a day name are two claims about one event. When they conflict, the sentence was not checked, which limits the weight it can carry.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Why does the calendar check NOT settle which date is right?",
            options: [
              "One source's error is not another's evidence",
              "Because both candidate dates fall in the same week and the distinction does not matter",
              "Because calendars for 1946 differ between the United States and Britain",
              "Because the demonstration may have been held on an unrecorded third date",
            ],
            correctIndex: 0,
            explanation:
              "Treating an error in one source as support for a different source's number is one of the most common mistakes in this kind of work.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What question does this lesson say to ask FIRST when two sources conflict?",
            options: [
              "Which claims can I test cheaply?",
              "Which source is more recent, since later work usually corrects earlier work",
              "Which source is academic rather than journalistic",
              "Which source has the larger bibliography behind it",
            ],
            correctIndex: 0,
            explanation:
              "Rank the claims inside each source by how cheap the independent test is, and run the cheap tests first. You often learn something before finding a new document.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Which of these claims can be tested for free, in this lesson's ranking?",
            options: [
              "A day of the week",
              "A salary figure, which can be confirmed against published wartime pay scales in seconds",
              "The number of people at an event, which any account will state",
              "A date, which can be checked against itself",
            ],
            correctIndex: 0,
            explanation:
              "A day name costs ten seconds and a calendar. A salary figure needs a record, and a date cannot be checked against itself at all.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What phrase does this course use outside a quotation when it refers to the demonstration?",
            options: [
              "Mid-February 1946",
              "14 February 1946, following the scholarly account rather than the news article",
              "15 February 1946, following the more recent of the two publications",
              "Early 1946, which avoids committing to a month",
            ],
            correctIndex: 0,
            explanation:
              "It writes mid-February 1946 in its own voice and quotes each source's own date when quoting, rather than choosing between them.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this course call the move of choosing a value between two conflicting sources?",
            options: [
              "Splitting the difference",
              "Triangulating, which is the standard method for reconciling two incomplete accounts",
              "Weighted attribution, in which the more reliable source is given precedence",
              "Source levelling, in which both figures are printed side by side",
            ],
            correctIndex: 0,
            explanation:
              "The course refuses it, because the result matches no source at all and therefore cannot be checked against anything.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What would settle the date conflict, according to this lesson?",
            options: [
              "A dated document from the event",
              "A third secondary account agreeing with one of the two published dates",
              "The recollection of somebody who attended the demonstration",
              "A calendar, which already resolves the disagreement",
            ],
            correctIndex: 0,
            explanation:
              "The lesson names the Moore School's invitation or programme, the Army's press release, or a dated newspaper page, and files a research check for it.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this course mean by claim-level reliability?",
            options: [
              "Judge a source one claim at a time",
              "Score each source on a scale and weight its claims by that score",
              "Accept a source's claims only where a second source confirms them",
              "Treat every claim in a source as reliable once its author is credentialed",
            ],
            correctIndex: 0,
            explanation:
              "Sorting a source into reliable or unreliable skips the actual work. A source can be wrong about a day of the week and right about what the newspapers printed.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Why does this course keep citing Martin despite the date problem?",
            options: [
              "Her other claims are separately checkable",
              "Because her article is the only publication about ENIAC in the scholarly literature",
              "Because the date error is a typesetting mistake that she has since corrected",
              "Because a date is a minor detail that has no bearing on a historical account",
            ],
            correctIndex: 0,
            explanation:
              "Hers is the only scholarly account of the 1946 press coverage read here, and it carries the archive citation section 4 depends on.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What is the title of Martin's 1995 article?",
            options: [
              "ENIAC: The Press Conference That Shook the World",
              "Proving Ground: The Untold Story of the Six Women Who Programmed the World's First Modern Computer",
              "The Women Behind ENIAC, published by IEEE Spectrum",
              "Meet the Refrigerator Ladies Who Programmed the ENIAC",
            ],
            correctIndex: 0,
            explanation:
              "It appeared in IEEE Technology and Society Magazine in December 1995, and this course read the author's manuscript version.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this lesson call a sentence whose own parts conflict?",
            options: [
              "A self-disagreeing sentence",
              "An unsupported qualifier, since one part lacks documentation",
              "A passive attribution, since the actor has been omitted",
              "A definitional claim, since the conflict turns on how a term is defined",
            ],
            correctIndex: 0,
            explanation:
              "Such a sentence shows it was not checked, which is a fact about how much weight it can carry and not a verdict on the whole source.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Where does APS News say the demonstration was held?",
            options: [
              "The Moore School",
              "The Pentagon, where the Army's Ordnance Department briefed the press",
              "Aberdeen Proving Ground, the Ballistics Research Laboratory's own site",
              "The Franklin Institute in central Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "APS News describes a splashy demonstration held at the Moore School, which is where the machine had been built.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this lesson say a source's date cannot be checked against?",
            options: [
              "Itself",
              "A calendar, which records only days of the week and not dates",
              "Another publication, since each publication has its own editorial standards",
              "An archive, since archives record accession dates rather than event dates",
            ],
            correctIndex: 0,
            explanation:
              "That is why the day name is the useful claim here: it is a second statement about the same event, so the two can be tested against each other.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this course call the property of a sentence that contains an independently testable claim?",
            options: [
              "Internal checkability",
              "Corroboration, meaning the confirmation of a claim by a second source",
              "Provenance, meaning the documented history of the source itself",
              "Attribution, meaning the identification of whose claim it is",
            ],
            correctIndex: 0,
            explanation:
              "A day name inside a dated sentence is the worked example: one claim in the sentence can be tested with nothing but a calendar.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "How far apart are the two published dates for the press day?",
            options: [
              "One day",
              "Two months, which is the gap between the first run and the demonstration",
              "One year, since one source gives 1946 and the other 1947",
              "Three days, spanning a weekend",
            ],
            correctIndex: 0,
            explanation:
              "14 February against 15 February 1946. On its own an ordinary disagreement, until the day name in one of them is tested.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does Martin say the group photograph shows?",
            options: [
              "Eight men",
              "Six women at the machine's main control panel during the demonstration",
              "The whole Moore School project staff, engineers and computers together",
              "General Barnes alone, presenting the machine to the assembled press",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence is that a group photo taken on that day shows the eight men who were considered responsible for the development of the machine.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What title does the Army collection give the photograph naming eight men?",
            options: [
              "ENIAC OFFICIALS",
              "ENIAC DEVELOPMENT TEAM, with each man's contribution listed beneath his name",
              "THE MEN WHO BUILT ENIAC, in the Army's own wartime publicity style",
              "ENIAC PROGRAMMERS, which is why the women's absence from it is significant",
            ],
            correctIndex: 0,
            explanation:
              "The collection publishes a U.S. Army Photo entitled ENIAC OFFICIALS, naming eight men and giving each a post.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What post does the ENIAC OFFICIALS caption give J. Presper Eckert, Jr.?",
            options: [
              "Chief Engineer",
              "Consulting Engineer, the post the same caption gives to Dr. J. W. Mauchly",
              "Supervisor, the post the same caption gives to Professor J. G. Brainerd",
              "Liaison Officer, the post the same caption gives to Captain H. H. Goldstine",
            ],
            correctIndex: 0,
            explanation:
              "The caption lists him as Chief Engineer. Every one of the eight names carries a post, which is the feature that matters for section 3's comparison.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What post does that caption give Captain H. H. Goldstine?",
            options: [
              "Liaison Officer",
              "Chief Engineer for Ballistics in the Ordnance Department, a post the caption gives to Sam Feltman",
              "Chief of the Ordnance Research and Development Service",
              "Dean of the Moore School of Electrical Engineering",
            ],
            correctIndex: 0,
            explanation:
              "Liaison Officer. The caption's eight posts are institutional positions rather than descriptions of what each man did on the project.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What post does that caption give Dean Harold Pender?",
            options: [
              "Dean of the Moore School",
              "Chief of the Research Branch of the Army Ordnance Research and Development Service",
              "Consulting Engineer on the ENIAC contract",
              "Supervisor of the project at the University of Pennsylvania",
            ],
            correctIndex: 0,
            explanation:
              "The caption identifies him as Dean, Moore School of Electrical Engineering, University of Pennsylvania.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "Why does this course refuse to state that Martin's group photo and the ENIAC OFFICIALS photograph are the same image?",
            options: [
              "Neither source supplies what would match them",
              "Because Martin explicitly says her photograph is a different one held at Hagley",
              "Because the Army collection dates its photograph to 1947 rather than 1946",
              "Because the two photographs show a different number of men",
            ],
            correctIndex: 0,
            explanation:
              "Martin gives no caption or reference number and the collection gives no date. A dated print, a negative number or a caption on her copy would settle it.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does this course call a likely inference that no document has established?",
            options: [
              "A hypothesis",
              "A finding, since two independent sources agreeing is the definition of a finding",
              "An attribution, since the claim is credited to the sources that imply it",
              "A corroboration, since each source supports the other",
            ],
            correctIndex: 0,
            explanation:
              "Probably the same photograph is a good hypothesis and not a finding. The distinction is what keeps a course improvable rather than merely finished.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "On Martin's account, what kind of pictures did the newspapers publish?",
            options: [
              "Machine-room pictures",
              "The group photograph of the eight men, reproduced in papers across the country",
              "Portraits of General Barnes and Colonel Gillon presenting the machine",
              "No photographs at all, since the demonstration was covered in text only",
            ],
            correctIndex: 0,
            explanation:
              "She describes pictures showing a huge room with wires, switches and lights, with people walking around inside and looking very small.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "How do the people appear in the published pictures, on Martin's account?",
            options: [
              "Small figures inside a large room",
              "Posed at the control panel with their names printed in the caption beneath",
              "Absent entirely, since the pictures showed only equipment",
              "In close-up portraits taken individually against the machine",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence has humans seen walking around inside the room and looking very small, which is a different kind of picture from a named group portrait.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does Martin's account reverse about the popular telling?",
            options: [
              "That the eight-man photo ran everywhere",
              "That the six were present at the demonstration at all",
              "That the demonstration took place in February rather than December",
              "That the machine was built at the Moore School rather than at Aberdeen",
            ],
            correctIndex: 0,
            explanation:
              "The retelling says the photograph of the men went out everywhere. The one scholarly account of the coverage read here says the papers ran machine-room pictures instead.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "Which newspaper caption does Martin quote from 1946?",
            options: [
              "No problem too tough for Robot",
              "Electronic computer figures like a flash, from the New York Times of 15 February",
              "Two women operating the ENIAC's main control panel",
              "ENIAC officials gather at the Moore School",
            ],
            correctIndex: 0,
            explanation:
              "She quotes the Boston Post's headline, No problem too tough for Robot, among the 1946 press items she lists.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "Where does Martin cite her 1946 press material to?",
            options: [
              "The Hagley Museum and Library Archives",
              "The Computer History Museum's collection, under the Gwen Bell credit line",
              "The U.S. Army Research Laboratory's Technical Library",
              "The Daily Pennsylvanian's own bound volumes at the University of Pennsylvania",
            ],
            correctIndex: 0,
            explanation:
              "Accession 1825, the Sperry Rand versus Honeywell court documents, boxes 9a and 382. That is a findable place with a box number attached.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "Which accession number does Martin cite at Hagley?",
            options: [
              "1825",
              "102622431, the number the Computer History Museum uses for its photograph record",
              "1946, matching the year of the clippings she describes",
              "She cites no accession number, only the name of the repository",
            ],
            correctIndex: 0,
            explanation:
              "Accession 1825, the Sperry Rand versus Honeywell court documents, with boxes 9a and 382 named. Lesson 12 returns to it.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What litigation are the Hagley documents Martin cites connected to?",
            options: [
              "Sperry Rand versus Honeywell",
              "The University of Pennsylvania's dispute with the Army over the machine's ownership",
              "A libel suit brought over the 1946 press coverage",
              "A patent interference between Eckert and Mauchly",
            ],
            correctIndex: 0,
            explanation:
              "The court documents from Sperry Rand versus Honeywell, held at Hagley under Accession 1825, are where the 1946 clippings sit.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does APS News assert about the six and the press?",
            options: [
              "They were not mentioned",
              "That their names appeared in the captions but were misspelled beyond recognition",
              "That two of them were named and the other four were not",
              "That the press named them but the demonstration's speakers did not",
            ],
            correctIndex: 0,
            explanation:
              "APS News says the six were not mentioned in the press, nor at the demonstration. That is a claim about absence rather than about a caption's contents.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "Which book does APS News quote on the demonstration?",
            options: [
              "Proving Ground",
              "Silencing the Past, on the four moments at which silences enter history",
              "The Computers, the companion volume to the 2014 documentary",
              "The Women Behind ENIAC, the IEEE Spectrum interview collection",
            ],
            correctIndex: 0,
            explanation:
              "It quotes Kleiman's book: no attendee congratulated the women, because no guest knew what they had done.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does this course call the assertion that a person was not mentioned at all in a record?",
            options: [
              "An absence claim",
              "An asymmetry claim, since it compares who was named with who was not",
              "A hypothesis, since absence can never be directly evidenced",
              "A passive attribution, since no actor is named",
            ],
            correctIndex: 0,
            explanation:
              "An absence claim. The asymmetry claim is the different one: that a particular record named some people and not others.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What kind of document would support the asymmetry claim specifically?",
            options: [
              "A caption naming men and no women",
              "A newspaper page carrying a photograph with no names on it at all",
              "An attendance list for the demonstration showing who was present",
              "A payroll record showing who held which job title",
            ],
            correctIndex: 0,
            explanation:
              "A page with no names at all supports the absence claim and says nothing about asymmetry, which is exactly why the two must be held apart.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What is lost when the absence claim and the asymmetry claim are collapsed into one?",
            options: [
              "Which document to go and find",
              "The name of the person who made the decision to omit the six",
              "The distinction between the press coverage and the demonstration itself",
              "The connection between the Army's captions and the newspapers' captions",
            ],
            correctIndex: 0,
            explanation:
              "Each claim is settled by a different kind of page. Collapsing them into they were erased removes the guidance a researcher would use.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "How does Martin describe the eight men's relationship to the machine?",
            options: [
              "Considered responsible for its development",
              "The engineers and officers who personally designed and wired every panel",
              "The Army officials who funded the project and had no technical role",
              "The team that operated the machine during the press demonstration",
            ],
            correctIndex: 0,
            explanation:
              "Considered responsible is a report of somebody's judgement, not a statement of who did what, which is the kind of phrasing this course reads closely.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "How many captions does the primary-source exercise compare?",
            options: [
              "Three",
              "Two, one naming men and one naming women",
              "Eight, one for each man named in the ENIAC OFFICIALS photograph",
              "Six, one for each of the programmers",
            ],
            correctIndex: 0,
            explanation:
              "The ENIAC OFFICIALS caption, the main control panel caption, and the direct programming caption, all from the Army collection.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What is the first of the exercise's four questions?",
            options: [
              "What does the caption call the people?",
              "Who published the photograph, and under what rights statement",
              "How many people are visible in the frame",
              "Whether the caption agrees with the article it accompanied",
            ],
            correctIndex: 0,
            explanation:
              "The four are: what does it call them, does it give names, does it give a role or post, and who wrote it and when.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What is the fourth of the exercise's four questions?",
            options: [
              "Who wrote it, and when?",
              "Whether the photograph is in the public domain and may be reproduced",
              "Whether the people named can be identified in other photographs",
              "Whether the caption's spelling matches other published sources",
            ],
            correctIndex: 0,
            explanation:
              "Asking who wrote a caption and when is what surfaces the difference between a 1946 original and a collection's present-day wording.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does the main control panel caption say the two women are doing?",
            options: [
              "Operating",
              "Posing to show the machine's direct programming, in the Army's own words",
              "Modelling for a publicity photograph taken after the demonstration",
              "Supervising the machine's engineers during a test run",
            ],
            correctIndex: 0,
            explanation:
              "Two women operating the ENIAC's main control panel while the machine was still located at the Moore School. It records an activity, not a post.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does the main control panel caption give the two women, and what does it withhold?",
            options: [
              "Names but no post",
              "A post but no names, identifying them only as operators of the control panel",
              "Both names and posts, matching the ENIAC OFFICIALS caption",
              "Neither names nor posts, describing only the equipment",
            ],
            correctIndex: 0,
            explanation:
              "The names appear in a separate identifying line with married names in brackets, and no job title or post is given for either woman.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What role does the direct-programming caption give its two subjects?",
            options: [
              "Computers, and later programmers",
              "Models hired by the Army for the publicity photographs of 1946",
              "Moore School engineers assigned to the ENIAC project",
              "It gives no role at all, only their names and positions in the frame",
            ],
            correctIndex: 0,
            explanation:
              "It calls them Computers for the Army during the war, in quotation marks, and later second-generation ENIAC programmers. That is a role given twice over.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What is the distinction this exercise says does the real work?",
            options: [
              "What people are, versus what they are doing",
              "Whether a caption is short enough to fit a single printed line",
              "Whether the photograph was taken by an Army photographer or a newspaper's",
              "Whether the names are given in maiden or married form",
            ],
            correctIndex: 0,
            explanation:
              "A post outlasts the afternoon and an activity does not, so one caption enters an index as a person with a role and the other as a person in a room.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does Who Made the Record, lesson 7, call a caption?",
            options: [
              "A format with a cap",
              "A credit line with legal force over the image it accompanies",
              "The least reliable part of any photographic record",
              "An archive's only durable description of what a photograph shows",
            ],
            correctIndex: 0,
            explanation:
              "It holds one line, and what fits in that line decides what survives, which is why the caption is where the fight over a record usually happens.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does the ENIAC OFFICIALS caption NOT claim, on this exercise's reading?",
            options: [
              "That the eight built the machine",
              "That the eight men held posts on the project or in the Army",
              "That the photograph was taken at the Moore School",
              "That the photograph is a United States Army photograph",
            ],
            correctIndex: 0,
            explanation:
              "It calls them officials, which means people holding posts. Martin's phrase, considered responsible, is likewise a report of a judgement rather than a statement of authorship.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What caveat must a learner carry out of this exercise?",
            options: [
              "These are today's captions, not 1946 originals",
              "That the photographs are copyrighted and may not be reproduced in student work",
              "That the collection has removed the women's names from two of the three captions",
              "That the Army has disputed the accuracy of its own collection's wording",
            ],
            correctIndex: 0,
            explanation:
              "They are the collection's captions as published now. The bracketed married names in one of them read like a later hand, so the exercise teaches caption reading and not 1946 press practice.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "Which feature of the main control panel caption suggests a later hand?",
            options: [
              "The married names in brackets",
              "The reference to the Moore School, which closed before the collection was assembled",
              "The use of the word operating, which was not period vocabulary",
              "The absence of a United States Army Photo mark on the image",
            ],
            correctIndex: 0,
            explanation:
              "Mrs. Bartik and Mrs. Spence are forms that postdate the photograph's moment, which is part of why the exercise cannot stand in for a 1946 original.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "Under what condition does the Army collection permit reuse of these photographs?",
            options: [
              "Mark each use U. S. Army Photo",
              "Obtain written permission from the Research Laboratory's Technical Library in advance",
              "Pay a reproduction fee set by the Army for each published image",
              "Limit the use to non-commercial educational purposes only",
            ],
            correctIndex: 0,
            explanation:
              "The collection states that all photos marked U. S. Army Photo are in the public domain and may be used without fee, provided each use is marked U. S. Army Photo.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What two sentences does the exercise ask a learner to write about each photograph?",
            options: [
              "What the caption supports, and what more would need",
              "A description of the image, and a judgement about whether the caption is fair",
              "A summary of the photograph's contents, and a guess at the photographer's intent",
              "A transcription of the caption, and a corrected version of it",
            ],
            correctIndex: 0,
            explanation:
              "One sentence saying only what the caption supports, and a second saying what you would need in order to say more. The second is the research question.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "Where does the Army collection say many of its images come from?",
            options: [
              "Its Technical Library archives",
              "The Hagley Museum and Library, under the Sperry Rand court documents",
              "The Computer History Museum, through the Gwen Bell collection",
              "The University of Pennsylvania's own photographic archive",
            ],
            correctIndex: 0,
            explanation:
              "The collection describes many of the images as coming from the archives of the Research Laboratory's Technical Library, which is where an original caption might be read.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does this course call the wording an archive publishes today, as distinct from an image's original caption?",
            options: [
              "A collection caption",
              "An identifying line, meaning the part that attaches names to positions in a frame",
              "A credit line, meaning the attribution of ownership of the image",
              "An accession record, meaning the archive's note of how it acquired the item",
            ],
            correctIndex: 0,
            explanation:
              "The distinction matters because a collection caption can carry later knowledge, such as married names, that the original could not have had.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "Which section of this course carries the claim about what 1946 newspapers printed?",
            options: [
              "Section 4, where it stays attributed",
              "Section 3, which establishes it from the Army collection's captions",
              "Section 5, where the correction and its instruments are set out",
              "Section 1, where the job title is established",
            ],
            correctIndex: 0,
            explanation:
              "The caption exercise teaches reading and cannot stand in for a 1946 original, so the claim lives in section 4 and stays attributed to Kleiman there.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "How many names and how many posts does the ENIAC OFFICIALS caption carry?",
            options: [
              "Eight of each",
              "Eight names and two posts, since only the two officers are given ranks",
              "Two names and eight posts, since most of the men are identified by role alone",
              "Eight names and no posts, since the title officials covers all of them",
            ],
            correctIndex: 0,
            explanation:
              "Every one of the eight names carries a post, which is the feature the comparison with the two women's captions turns on.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "In which publication did Martin's article appear?",
            options: [
              "IEEE Technology and Society Magazine",
              "IEEE Spectrum, which later ran an interview with Kathy Kleiman about the same events",
              "APS News, the American Physical Society's membership publication",
              "The Annals of the History of Computing, in a special ENIAC anniversary issue",
            ],
            correctIndex: 0,
            explanation:
              "It appeared there in December 1995. This course read the author's manuscript version of it.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this course do with a conflict it cannot settle from the sources in hand?",
            options: [
              "Files a research check",
              "Prints both values in the prose and leaves the learner to choose between them",
              "Omits the disputed fact entirely so that no wrong version can be learned",
              "Adopts the version used by the most recently published source",
            ],
            correctIndex: 0,
            explanation:
              "A research check names what the course claims and what would settle it, so the hedge is something somebody can close rather than a permanent shrug.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Which of these does this course explicitly refuse as a way to resolve the date conflict?",
            options: [
              "Preferring the more recent publication",
              "Testing the day name in one of the sources against a calendar",
              "Naming the document that would settle it and filing a check",
              "Writing mid-February in its own voice and quoting each source's date",
            ],
            correctIndex: 0,
            explanation:
              "The course names three refusals: it does not split the difference, does not pick the more recent publication, and does not pick the one that reads better.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What post does the ENIAC OFFICIALS caption give General G. M. Barnes?",
            options: [
              "Chief of the Ordnance Research and Development Service",
              "Chief of the Research Branch of the Army Ordnance Research and Development Service",
              "Chief Engineer for Ballistics in the Ordnance Department",
              "Liaison Officer between the Army and the Moore School",
            ],
            correctIndex: 0,
            explanation:
              "The caption gives Barnes the Service and Colonel Gillon its Research Branch, which are two different posts inside the same organisation.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What post does that caption give Sam Feltman?",
            options: [
              "Chief Engineer for Ballistics, Ordnance Department",
              "Chief Engineer on the ENIAC project, the post it gives J. Presper Eckert, Jr.",
              "Consulting Engineer, the post it gives Dr. J. W. Mauchly",
              "Supervisor, the post it gives Professor J. G. Brainerd",
            ],
            correctIndex: 0,
            explanation:
              "Each of the eight names carries a distinct institutional post, which is what makes the caption a record of positions rather than of contributions.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does an accession number give a researcher, in this lesson's terms?",
            options: [
              "A place with a box number",
              "A guarantee that the documents have been digitised and are available online",
              "The date on which a document was created rather than acquired",
              "Legal permission to reproduce the material it identifies",
            ],
            correctIndex: 0,
            explanation:
              "Martin's citation to Hagley Accession 1825, boxes 9a and 382, turns a vague where into somewhere a person could actually go.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What is the second of the exercise's four questions?",
            options: [
              "Does it give names?",
              "Does it agree with the other captions in the same collection",
              "Was it written by the photographer or by an editor",
              "Does it identify where the photograph was taken",
            ],
            correctIndex: 0,
            explanation:
              "The order matters: what it calls the people, then whether it names them, then whether it gives a role, then who wrote it and when.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What is the third of the exercise's four questions?",
            options: [
              "Does it give a role, post or title?",
              "Does it name the organisation that employed the people shown",
              "Does it state the date on which the photograph was taken",
              "Does it use the same spelling of each name as other sources do",
            ],
            correctIndex: 0,
            explanation:
              "This is the question that separates the ENIAC OFFICIALS caption from the one about two women at the main control panel.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What word does the direct-programming caption use for the two women's stance?",
            options: [
              "Posed",
              "Operating, the same verb used in the main control panel caption",
              "Demonstrating, in the sense of showing the machine to visiting press",
              "Modelling, which is the word a museum cofounder later used to Kleiman",
            ],
            correctIndex: 0,
            explanation:
              "Two women posed to show the direct programming of the machine. The caption records both that they posed and that they were Army computers and later programmers.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What does this course call a caption's separate line that attaches names to positions in the frame?",
            options: [
              "An identifying line",
              "A credit line, which records who owns the photograph",
              "A collection caption, which is the archive's present-day wording",
              "A public domain mark, which records the terms of reuse",
            ],
            correctIndex: 0,
            explanation:
              "It is often added later than the descriptive sentence, which is one of the signals that a collection caption is not a 1946 original.",
            sourceLessonSlug: "read-three-captions",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 · Captions, and a museum's remark
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-kleiman-says-and-what-she-does-not",
      title: "10 · What Kleiman says, and what she does not",
      section: "Section 4 · Captions, and a museum's remark",
      body: `The most repeated claim in this whole story is that the 1946 captions named the men and not the women. Here is where it comes from, in the words of the person it comes from, in two accounts written four years apart.

**2018, TED Ideas:** "In a photo of ENIAC from 1946, taken about six months after it was unveiled, I saw men and women. However, only the men's names were listed in the captions" (Kleiman, 2018).

**2022, IEEE Spectrum:** "Six months after the war ended, the Army decided to reveal the existence of ENIAC and heavily publicize it. To do so, in February 1946 the Army took a lot of beautiful, formal photos of the computer and the team of engineers that developed it." And, later in the same interview: "Some of the photos had just women in front of the computer, but they weren't named in any of the photos' captions" (Goodrich, 2022).

**What both accounts share.** The photographs exist. She saw them. The captions named men and did not name women. That is the claim, and this course does not assert it. It attributes it, every time, to her.

**Where the two accounts differ, and the difference is six months.** In 2018 the phrase *about six months* measures the interval between the unveiling and the photograph, which puts the photograph somewhere around the middle of 1946. In 2022 the same phrase measures the interval between the end of the war and the Army's decision to publicize, and the photographs themselves sit in February 1946. Either those are different photographs, or the phrase has migrated between tellings.

A person recounting one discovery over decades is not lying when a phrase moves. That is what recollection does, and it is why an account given twice is more useful than an account given once: the second telling shows you which parts are load-bearing and which are floating. What follows is narrow and practical. The dating of these photographs cannot be taken from either account on its own.

**Now, the part that matters most: what neither account says.** The popular retelling supplies two details that are not in this text.

*It does not say the photographs ran in newspapers nationally.* The 2022 account says the Army took the photographs in order to publicize the machine. Whether they were printed, and where, is a separate question with a separate answer, and Martin's account of the coverage in lesson 8 points the other way: the papers ran machine-room pictures.

*It does not say every man in the frame was named.* The 2018 sentence says only the men's names were listed. The 2022 sentence says some photographs had just women in them and those were not named. "Only the men were named" and "every man was named" are different claims, and only the first one is in the text.

**Why that difference is practical and not pedantic.** Go looking for the document with the retelling in your head and you are searching for a nationally syndicated photograph with eight named men and unnamed women in one frame. That may not exist. Go looking with her actual words in your head and you are searching for Army publicity photographs from 1946 whose captions name men and do not name women, some of them showing women alone. That is narrower, more plausible, and far more findable.

**The rule, and the course's condition.** Separate the claim from the claimant, then ask which parts a document could settle. The existence of the photographs: settleable, and partly settled already, since the Army collection publishes 1946-era images. Their captions' original wording: settleable, unread. Where they were printed: settleable, unread. Whether every man was named: settleable, and not actually claimed by anyone.

This course was approved on the condition that no lesson states the caption claim as a fact until an original caption has been read. None has been. So every lesson attributes it. That is not caution for its own sake. A course that asserted the claim would be finished and possibly wrong. A course that attributes it is unfinished and true, and it tells you which document would finish it.

:::reveal What do both of Kleiman's accounts claim about the captions? ||| That photographs from 1946 exist, that she saw them, and that their captions named men and did not name women. The course attributes this to her rather than asserting it.

:::reveal What does the phrase about six months attach to in each account? ||| In 2018 it measures from the unveiling to the photograph, putting the image around mid-1946. In 2022 it measures from the end of the war to the Army's decision to publicize, with the photographs in February 1946.

:::reveal Name the two details the popular retelling adds that neither of Kleiman's accounts contains. ||| That the photographs ran in newspapers nationally, and that every man in the frame was named. Her text says the photographs were taken to publicize the machine, and that only the men's names were listed.

:::reveal Why is the difference between only the men were named and every man was named practical rather than pedantic? ||| Because it changes what you go looking for. The retelling sends you after a syndicated photograph with eight named men and unnamed women in one frame, which may not exist. Her words send you after Army publicity captions that name men and not women.

## Vocabulary
- **Attribution rather than assertion**: printing a claim as what a named person says, rather than as something the course states in its own voice.
- **Migrating phrase**: a form of words, such as about six months, that attaches to different anchors in different tellings of one recollection.
- **Load-bearing detail**: the part of an account that stays fixed across retellings, as distinct from the parts that drift.
- **Settleable claim**: one a document could decide, as opposed to one that turns on a definition or on a motive nobody recorded.

## Sources
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf`,
    },
    {
      slug: "the-models-remark",
      title: "11 · The remark about models",
      section: "Section 4 · Captions, and a museum's remark",
      body: `In Kleiman's 2018 account, a professor sent her to the cofounder of the Computer History Museum, at that time across the river in Boston. She showed her the photographs. The cofounder, in Kleiman's telling, rolled her eyes and said, "They're models" (Kleiman, 2018).

**This course does not name the cofounder.** Kleiman does not name her. Going and finding the name would mean publishing an identification the source deliberately withheld, attached to a remark nobody else witnessed. That is the line between reporting testimony and accusing a person, and it is not a line worth crossing for a course.

**What kind of evidence this is, stated exactly.** It is a remark one person recalls, published decades after the conversation, in her own account. That is testimony. It is not a catalogue record. It is not a filing. It is not a misfiling, and it is not an institutional position. You will see the episode retold as "the museum filed their work under another name", and that sentence describes a document nobody has produced.

**And the museum's own record now says the opposite.** The Computer History Museum's catalogue records for a photograph from about 1946 name "Elizabth [sic] Jennings" and "Frances Bilas" alongside "Cpl. Herman Goldstein" and "PFC Homer Spence" (Computer History Museum, n.d.). Whatever was said in a conversation, the institution's record today carries the women's names.

**Now watch the phrase travel.** The earliest appearance this course found of *Refrigerator Ladies* is a 2013 Mental Floss article, which attributes to Kleiman: "I was told they were models, 'Refrigerator Ladies', posing in front of the machine to make it look good" (Sheppard, 2013; punctuation adapted, since the original uses dashes). Set the two tellings beside each other.

| 2013, Mental Floss | 2018, TED Ideas |
|---|---|
| "I was told", with nobody identified | a cofounder of the museum, in Boston |
| carries the phrase Refrigerator Ladies | does not use the phrase at all |
| adds "to make it look good" | "They're models", and nothing after it |

Neither telling corrects the other. They are two accounts, five years apart, of one remembered conversation, and each preserves something the other drops. That is ordinary, and it is why this course prints both rather than merging them into a single tidy version.

**One honest note about what this course did not read.** Other retellings of this episode place the scene in other cities and give the speaker other titles. This course met those only in search results and did not fetch the pages, so it does not reproduce their details and a research check is filed to document the variants properly. Asserting that the story has drifted, on the strength of a search snippet, would be the exact error this lesson is about.

**The distinction the remark collapses, and this is the real lesson.** Go back to the Army's own caption from the exercise in lesson 9: "Two women posed to show the 'direct programming' of ENIAC done by setting hundreds of wires and thousands of switches" (U.S. Army Research Laboratory, n.d.). By the Army's own wording, some of these publicity photographs were posed. And the two women in that one were Army computers during the war and later ENIAC programmers.

Posed and model are not the same claim. A person can pose for a photograph of work she actually does, and publicity photography does that constantly. "They're models" takes a true observation about a photograph, that it was arranged, and converts it into a false conclusion about the people, that they were not the workers. The conversion is the error. The word is only where it shows.

:::reveal Why does this course not name the museum cofounder? ||| Because Kleiman does not name her, and finding the name would publish an identification the source deliberately withheld, attached to a remark nobody else witnessed.

:::reveal What kind of evidence is the models remark, and what is it not? ||| It is testimony: a remark one person recalls, published decades later in her own account. It is not a catalogue record, a filing, a misfiling or an institutional position.

:::reveal What do the Computer History Museum's own catalogue records name today? ||| A photograph from about 1946 whose record names Elizabth, marked sic, Jennings and Frances Bilas, alongside Cpl. Herman Goldstein and PFC Homer Spence.

:::reveal What distinction does the phrase they are models collapse? ||| The difference between posed and model. The Army's own caption says two women posed to show direct programming, and those women were Army computers and later programmers. Posing for a photograph of your own work does not make you a model.

## Vocabulary
- **Testimony**: a recalled account given by a witness, which can be true and still is not a document.
- **Posed versus model**: the difference between arranging a photograph of real work and substituting people who did not do it.
- **Withheld identification**: a name a source deliberately does not print, which a course repeating that source should not supply.
- **Drift**: the change in a remembered story's details across retellings, which is documented by comparing tellings rather than asserted.
- **Refrigerator Ladies**: a phrase attributed to Kleiman in 2013, the earliest appearance this course found, and absent from her 2018 account.

## Sources
Computer History Museum. (n.d.). *ENIAC, circa 1946* (Catalog Nos. 102622431 and 102622385) [Catalogue record]. Computer History Museum Collection.
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Sheppard, A. (2013, October 13). *Meet the "Refrigerator Ladies" who programmed the ENIAC*. Mental Floss. https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "the-document-that-would-settle-it",
      title: "12 · The document that would settle it",
      section: "Section 4 · Captions, and a museum's remark",
      body: `A hedge that names the document is a task. A hedge that does not is a shrug. Here is the task.

The claim is that the 1946 captions named the men and not the women. What would settle it is an original caption, read. Four places have been named by sources this course actually read, and each one is a place a person could go.

**One. Hagley Museum and Library Archives, Accession 1825**, the Sperry Rand versus Honeywell court documents, boxes 9a and 382. Martin cites her list of 1946 headlines and the *Boston Post* caption there (Martin, 1995). If the clippings are in those boxes, then so are their captions.

**Two. The U.S. Army Research Laboratory's Technical Library archives.** The Laboratory's image collection says many of its scans came from there (U.S. Army Research Laboratory, n.d.). The originals behind the scans, with whatever material accompanied them, would show the Army's own side of the question rather than a newspaper's.

**Three. The *Daily Pennsylvanian* for 4 March 1947**, volume LX, number 72. A Computer History Museum record says its photograph from about 1946 first appeared there (Computer History Museum, n.d.). Whether that printing carried names is unknown. It is one page, it is dated, and it is findable.

**Four. The *New York Times* of 15 February 1946.** APS News quotes a headline from it and a line about the program having kept a hundred trained men busy for a year (Joosse, 2022). This course has read that only as APS quotes it, so it does not quote the page itself and says nothing about what else is on it.

**What each one could settle, and what it could not.** This is the part people skip, and skipping it is how a research plan turns into a wish.

- A Hagley clipping settles what one newspaper printed on one day, including whether its caption named anybody.
- An Army original settles what the Army's caption said, which is a different question from what a newspaper printed. Both matter, and they are not interchangeable.
- The *Daily Pennsylvanian* page settles one campus printing, thirteen months after the demonstration.
- The *Times* page settles that paper's coverage of the demonstration day.

**None of them settles "the 1946 captions".** That phrase is plural and general. It is a claim about a set of documents, and a generalization is settled by reading enough of the set, not by finding one good page. Say that out loud, because it is the difference between a course that can be finished and one that can only be improved. Finding a single caption that names eight men and no women would make the claim much stronger. It would not make it proven, and the honest version of the sentence would still say so.

**The absence test, from *Who Gets Named*, lesson 17.** What would have had to happen for a record of this to exist? A caption would have had to be typed and printed. Captions were typed and printed, and the Army was running a publicity campaign, which is the most caption-producing activity there is. So the record should exist, and its absence from this course is about access and effort rather than about the past.

Run the same test on the selection record from lesson 4 and you get the same answer: a personnel action should exist. Now run it on a question where the answer flips. If you asked what the six said to each other during the demonstration, nothing would have had to be written down, no record would be expected, and silence there tells you nothing at all. Same test, opposite reading, and the difference is whether the past had a reason to produce paper.

**Every hedge in this course is written as a task.** Each has a research check behind it naming what the course claims and what would close it. If you read one of these four documents, this course changes, and that is the point of writing it this way.

:::reveal What are the four places this course names where an original caption might be read? ||| Hagley Accession 1825, boxes 9a and 382; the U.S. Army Research Laboratory's Technical Library archives; the Daily Pennsylvanian of 4 March 1947; and the New York Times of 15 February 1946.

:::reveal Why would finding one caption naming eight men and no women not prove the claim? ||| Because the claim is about a set of documents, and a generalization is settled by reading enough of the set. One page would make the claim much stronger and would not make it proven.

:::reveal What does the absence test ask, and what answer does it give here? ||| It asks what would have had to happen for the record to exist. A caption would have had to be typed and printed during a publicity campaign, so the record should exist, and its absence from this course is about access rather than about the past.

:::reveal Give an example where the absence test gives the opposite answer. ||| What the six said to each other during the demonstration. Nothing would have had to be written down, so silence there is expected and tells you nothing.

## Vocabulary
- **Named hedge**: a qualification that states which document would remove it, which makes it a task rather than a shrug.
- **Generalization over a set**: a claim such as the 1946 captions, which one document can strengthen but cannot settle.
- **Absence test**: the question of what would have had to happen for a record to exist, which turns some silences into findings and leaves others as nothing.
- **Research check**: this catalog's record of a claim a course could not confirm, naming what is claimed and what would settle it.

## Sources
Computer History Museum. (n.d.). *ENIAC, circa 1946* (Catalog Nos. 102622431 and 102622385) [Catalogue record]. Computer History Museum Collection.
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Captions, and a museum's remark",
      section: "Section 4 · Captions, and a museum's remark",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Whose account is the source of the claim that the 1946 captions named the men and not the women?",
            options: [
              "Kathy Kleiman's",
              "C. Dianne Martin's, in her 1995 study of the press conference and its coverage",
              "The U.S. Army Research Laboratory's, in the notes to its image collection",
              "The Computer History Museum's, in its catalogue records for the photographs",
            ],
            correctIndex: 0,
            explanation:
              "It comes from her two published accounts, in 2018 and 2022. This course attributes it to her every time rather than asserting it.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "In how many published accounts does this course read Kleiman on the captions?",
            options: [
              "Two",
              "One, her 2022 book, which is the only place she has described the discovery",
              "Five, one for each decade since she found the photographs",
              "None; the claim reaches this course only through secondary retellings",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 TED Ideas piece and the 2022 IEEE Spectrum interview. Reading both is what exposes the dating difference between them.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does Kleiman's 2018 sentence say she saw in the photograph?",
            options: [
              "Men and women",
              "Eight men in formal dress, arranged for a group portrait at the Moore School",
              "Two women alone at the machine's main control panel",
              "A large room of equipment with no people visible in it at all",
            ],
            correctIndex: 0,
            explanation:
              "She writes that in a photo of ENIAC from 1946 she saw men and women, and that only the men's names were listed in the captions.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "In the 2018 account, what does the phrase about six months measure?",
            options: [
              "From the unveiling to the photograph",
              "From the end of the war to the Army's decision to publicize the machine",
              "From the photograph to the day Kleiman first saw it as a student",
              "From the machine's first classified run to its public demonstration",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 sentence dates the photograph about six months after the unveiling, which puts it around the middle of 1946.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "In the 2022 account, what does the phrase six months measure?",
            options: [
              "From the war's end to the decision to publicize",
              "From the unveiling to the photograph, as in the earlier account",
              "From the photograph to the publication of the first newspaper coverage",
              "From the selection of the six to the first classified run",
            ],
            correctIndex: 0,
            explanation:
              "The 2022 interview says six months after the war ended the Army decided to reveal the machine and publicize it, and places the photographs in February 1946.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course conclude from the two different datings?",
            options: [
              "Neither account alone can date the photographs",
              "That the 2022 account supersedes the 2018 one and should be used",
              "That one of the accounts was fabricated and neither can be relied upon",
              "That two separate photographs are described and both datings are correct",
            ],
            correctIndex: 0,
            explanation:
              "Either they are different photographs or the phrase has migrated between tellings. Either way the dating cannot be taken from one account on its own.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course call a form of words that attaches to different anchors in different tellings?",
            options: [
              "A migrating phrase",
              "An unsupported qualifier, meaning a word no source documents",
              "A passive attribution, meaning a claim with no named actor",
              "A collection caption, meaning wording added by an archive later",
            ],
            correctIndex: 0,
            explanation:
              "About six months is the example: it measures one interval in the 2018 account and a different one in the 2022 account.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course say a second telling of an account is useful for?",
            options: [
              "Showing which details are load-bearing",
              "Confirming the first telling, since a consistent witness is a reliable one",
              "Replacing the first telling, since later recollections are better organised",
              "Establishing the date, since a witness remembers chronology best over time",
            ],
            correctIndex: 0,
            explanation:
              "Reading two accounts shows which parts stay fixed and which drift, which is more useful than an account given only once.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which claim does this course say is NOT in either of Kleiman's accounts?",
            options: [
              "That the photographs ran nationally",
              "That the captions named men and did not name women",
              "That the Army took formal photographs in February 1946",
              "That some photographs showed only women in front of the machine",
            ],
            correctIndex: 0,
            explanation:
              "Neither account says the photographs ran in newspapers nationally. The 2022 account says the Army took them in order to publicize the machine.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which other claim does this course say the retelling adds?",
            options: [
              "That every man in the frame was named",
              "That the photographs were taken at the Moore School rather than at Aberdeen",
              "That the captions were written by an Army public relations officer",
              "That Kleiman found the photographs while she was a law student",
            ],
            correctIndex: 0,
            explanation:
              "Only the men's names were listed and every man was named are different claims, and only the first one appears in her text.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does the 2022 account say some of the photographs showed?",
            options: [
              "Just women in front of the computer",
              "Only the eight officials, posed formally in front of the main control panel",
              "The machine alone, with all personnel cleared from the room",
              "Newspaper reporters being shown the machine by its engineers",
            ],
            correctIndex: 0,
            explanation:
              "Some of the photos had just women in front of the computer, but they were not named in any of the photos' captions.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Why does the difference between the retelling and her words matter practically?",
            options: [
              "It changes what document you go looking for",
              "It determines whether the story can be told in a public course or only a private one",
              "It decides whether Kleiman or the Army is the responsible party",
              "It settles the conflict between the two published dates for the demonstration",
            ],
            correctIndex: 0,
            explanation:
              "The retelling sends you after a nationally syndicated photograph with eight named men and unnamed women in one frame. Her words send you after Army publicity captions.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which of these does this course list as already partly settled?",
            options: [
              "That the photographs exist",
              "The original wording of the 1946 captions",
              "Where the photographs were printed, and in which newspapers",
              "Whether every man in the frame was named",
            ],
            correctIndex: 0,
            explanation:
              "The Army collection publishes 1946-era images, so the existence of such photographs is not in question. Their original captions are.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "On what condition was this course approved?",
            options: [
              "No lesson asserts the caption claim as fact",
              "That every source cited be a primary document rather than a secondary account",
              "That the six women's names be spelled consistently throughout",
              "That the course avoid naming any living person",
            ],
            correctIndex: 0,
            explanation:
              "Until an original caption has been read, every lesson attributes the claim to Kleiman by name. None has been read.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "How does this course describe a course that asserted the caption claim outright?",
            options: [
              "Finished and possibly wrong",
              "Complete and defensible, since a single reliable witness is enough for a history course",
              "Unfinished but true, since assertion invites correction",
              "Identical in effect to one that attributes it, since learners do not read attributions",
            ],
            correctIndex: 0,
            explanation:
              "The course it chose to be instead is unfinished and true, and it names the document that would finish it.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course mean by attribution rather than assertion?",
            options: [
              "Printing a claim as what a named person says",
              "Crediting a source in a bibliography rather than in the body of a lesson",
              "Recording who owns a photograph alongside its caption",
              "Naming the person who first published a claim, whoever later repeats it",
            ],
            correctIndex: 0,
            explanation:
              "The course does not state the caption claim in its own voice. It states that Kleiman says it, which is a different and checkable sentence.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course call a claim a document could decide?",
            options: [
              "A settleable claim",
              "A load-bearing detail, meaning one that stays fixed across retellings",
              "An absence claim, meaning one about what a record does not contain",
              "A definitional claim, meaning one decided by agreeing on terms",
            ],
            correctIndex: 0,
            explanation:
              "A settleable claim is the opposite of one that turns on a definition or on a motive nobody recorded, and the course lists four of them here.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which of the four listed claims does this course say nobody actually makes?",
            options: [
              "That every man in the frame was named",
              "That the photographs exist and Kleiman saw them",
              "That the captions named men and not women",
              "That the Army took photographs in order to publicize the machine",
            ],
            correctIndex: 0,
            explanation:
              "It is settleable, and it is not claimed by anyone. The retelling supplies it, which is why the course lists it separately.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does Martin's account of the press coverage suggest about where the photographs went?",
            options: [
              "The papers ran machine-room pictures",
              "The papers ran the group photograph of the eight men in every major city",
              "The papers ran no photographs at all from the demonstration",
              "The papers ran photographs of the women at the control panel, uncaptioned",
            ],
            correctIndex: 0,
            explanation:
              "That points away from the retelling's national-syndication version and is one reason the course separates the two questions.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does the 2022 account say the Army's photographs were for?",
            options: [
              "To publicize the machine",
              "To document the wiring configuration for the Ballistics Research Laboratory's records",
              "To provide portraits for the officials' personnel files",
              "To record the machine's appearance before it was moved from the Moore School",
            ],
            correctIndex: 0,
            explanation:
              "Six months after the war ended the Army decided to reveal the machine's existence and heavily publicize it, and took the photographs to do so.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "How does the 2022 account describe the photographs the Army took?",
            options: [
              "Beautiful and formal",
              "Hurried and poorly lit, which is why the captions were written later from memory",
              "Candid, taken during the demonstration without arrangement",
              "Technical, intended for the engineering record rather than for the press",
            ],
            correctIndex: 0,
            explanation:
              "A lot of beautiful, formal photos of the computer and the team of engineers that developed it, in the account's own wording.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this course call the part of an account that stays fixed across retellings?",
            options: [
              "A load-bearing detail",
              "A collection caption, since it is the version an institution publishes",
              "A named hedge, since it is what the account commits to",
              "An accession number, since it does not change once assigned",
            ],
            correctIndex: 0,
            explanation:
              "Comparing tellings separates load-bearing details from ones that drift, which is why reading both accounts is worth the effort.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What stays fixed across both of Kleiman's accounts?",
            options: [
              "That captions named men and not women",
              "The month in which the photographs were taken",
              "The number of photographs she examined",
              "The name of the archive where she found them",
            ],
            correctIndex: 0,
            explanation:
              "Both accounts make that claim. What moves between them is the dating, which is why the course attributes the dating separately.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What does this lesson say a person retelling one discovery over decades is doing when a phrase moves?",
            options: [
              "What recollection does",
              "Deliberately reshaping the story to suit a new audience",
              "Correcting an earlier error that she has since identified",
              "Quoting a different source than the one she used before",
            ],
            correctIndex: 0,
            explanation:
              "The lesson is explicit that this is not lying. It is why an account given twice is more useful than an account given once.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which year's account carries the wording only the men's names were listed in the captions?",
            options: [
              "2018",
              "2022, in the IEEE Spectrum interview about the book",
              "2013, in the Mental Floss article that first used Refrigerator Ladies",
              "1995, in Martin's study of the press conference",
            ],
            correctIndex: 0,
            explanation:
              "That is the TED Ideas wording. The 2022 interview's version is that some photos had just women and they were not named in any caption.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "How many years separate Kleiman's two accounts as this course reads them?",
            options: [
              "Four",
              "Twenty, spanning her whole research career on the subject",
              "Nine, from the Mental Floss piece to the IEEE Spectrum interview",
              "One, so that the difference between them cannot be recollection",
            ],
            correctIndex: 0,
            explanation:
              "2018 and 2022. Four years is long enough for a phrase to migrate and short enough that both refer plainly to the same discovery.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which search would Kleiman's actual words send a researcher on?",
            options: [
              "Army publicity captions from 1946",
              "A nationally syndicated photograph with eight named men and unnamed women in one frame",
              "The Moore School's payroll records for the wartime computing staff",
              "The Army's personnel action assigning six women to the project",
            ],
            correctIndex: 0,
            explanation:
              "That search is narrower, more plausible and far more findable than the one the retelling suggests.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Who, in Kleiman's 2018 account, said the women were models?",
            options: [
              "A cofounder of the Computer History Museum",
              "An Army public relations officer who had arranged the 1946 photographs",
              "The dean of the Moore School at the machine's fiftieth anniversary",
              "A newspaper picture editor who had handled the original wire photographs",
            ],
            correctIndex: 0,
            explanation:
              "A professor sent her to the museum's cofounder, then across the river in Boston, who in Kleiman's telling rolled her eyes and said the women were models.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Where was the Computer History Museum at the time of that conversation, in Kleiman's account?",
            options: [
              "Across the river in Boston",
              "In Mountain View, California, where it holds the ENIAC photographs today",
              "In Philadelphia, on the University of Pennsylvania campus",
              "In Washington, alongside the Army's Ordnance Department records",
            ],
            correctIndex: 0,
            explanation:
              "Her 2018 text places it across the river in Boston, which is one of the details other retellings of the episode change.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Why does this course decline to name the cofounder?",
            options: [
              "Kleiman withheld the name",
              "Because the cofounder has formally denied making the remark and could sue",
              "Because the museum's policy forbids identifying its founders in published work",
              "Because the name appears in no source the course was able to reach",
            ],
            correctIndex: 0,
            explanation:
              "Supplying a name the source deliberately withheld, attached to a remark nobody else witnessed, crosses the line from reporting testimony to accusing a person.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What kind of evidence is the models remark?",
            options: [
              "Testimony",
              "A catalogue record, since the museum holds the photographs it describes",
              "A contemporaneous note, written at the time of the conversation",
              "An institutional position, stated on the museum's behalf",
            ],
            correctIndex: 0,
            explanation:
              "A remark one person recalls, published decades after the conversation, in her own account. It can be true and still is not a document.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Which of these does this course say the models episode is NOT?",
            options: [
              "A misfiling",
              "A remark recalled by Kathy Kleiman",
              "Something published in her 2018 account",
              "A story retold in more than one version",
            ],
            correctIndex: 0,
            explanation:
              "The retelling that the museum filed their work under another name describes a document nobody has produced. What exists is a recalled conversation.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What do the Computer History Museum's catalogue records for its circa-1946 photograph name?",
            options: [
              "Two of the women, alongside two men",
              "Only the eight officials from the ENIAC OFFICIALS photograph",
              "Nobody, since the record describes the equipment only",
              "All six programmers, in the spelling Kleiman uses",
            ],
            correctIndex: 0,
            explanation:
              "The records name Elizabth, marked sic, Jennings and Frances Bilas alongside Cpl. Herman Goldstein and PFC Homer Spence.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does the museum's present-day record do to the misfiling version of the story?",
            options: [
              "It points the other way",
              "It confirms it, since the record was corrected only after Kleiman complained",
              "It is irrelevant, since a catalogue record is not evidence about a conversation",
              "It proves the cofounder's remark was the museum's official position",
            ],
            correctIndex: 0,
            explanation:
              "Whatever was said in a conversation, the institution's record today carries the women's names.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Where does this course find the earliest appearance of the phrase Refrigerator Ladies?",
            options: [
              "A 2013 Mental Floss article",
              "Kleiman's 2018 TED Ideas piece, which introduced it to a wide audience",
              "The Army's own 1946 caption for the publicity photographs",
              "Martin's 1995 article on the press conference",
            ],
            correctIndex: 0,
            explanation:
              "The 2013 article attributes to Kleiman that she was told they were models, Refrigerator Ladies, posing in front of the machine to make it look good.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does the 2013 telling add that the 2018 telling does not have?",
            options: [
              "The phrase Refrigerator Ladies",
              "The name of the person who made the remark",
              "The city in which the conversation took place",
              "The year in which Kleiman first saw the photographs",
            ],
            correctIndex: 0,
            explanation:
              "It also adds to make it look good. The 2018 telling supplies a role and a place and stops at They're models.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does the 2018 telling supply that the 2013 telling does not?",
            options: [
              "A role and a place",
              "The phrase Refrigerator Ladies, quoted directly from the conversation",
              "A date for the conversation",
              "The professor's name and department",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 account identifies a cofounder of the museum, in Boston. The 2013 account says only that she was told.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "How does this course treat the two tellings of the conversation?",
            options: [
              "It prints both",
              "It merges them into one account that includes every detail either one has",
              "It uses the later one, since it is more fully documented",
              "It uses the earlier one, since it is closer to the conversation",
            ],
            correctIndex: 0,
            explanation:
              "Neither telling corrects the other. Each preserves something the other drops, and merging them would manufacture a version nobody gave.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does this course say about retellings that place the episode in other cities?",
            options: [
              "It met them only in search results",
              "It reproduces their details and attributes each one to its publication",
              "It rejects them as fabrications with no basis in any account",
              "It treats them as corrections to Kleiman's own published version",
            ],
            correctIndex: 0,
            explanation:
              "It did not fetch those pages, so it does not reproduce their details, and a research check is filed to document the variants properly.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Why does this course not simply assert that the story has drifted?",
            options: [
              "Asserting it from a snippet is the error the lesson is about",
              "Because drift in a recollection is normal and therefore not worth mentioning",
              "Because Kleiman has publicly disputed the other versions",
              "Because the variants all agree with her 2018 account on every detail",
            ],
            correctIndex: 0,
            explanation:
              "Documented drift is what comparing two fetched tellings gives you. Claimed drift on the strength of a search result is exactly what the lesson warns against.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Which Army caption does this lesson bring back from the exercise in lesson 9?",
            options: [
              "Two women posed to show direct programming",
              "ENIAC OFFICIALS, with eight men named and given posts",
              "Two women operating the machine's main control panel",
              "No problem too tough for Robot, from the Boston Post",
            ],
            correctIndex: 0,
            explanation:
              "By the Army's own wording some of these publicity photographs were arranged, and the two women in that one were Army computers and later programmers.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What is the difference between posed and model, in this lesson?",
            options: [
              "A person can pose doing her own work",
              "A model is paid for the photograph while a poser is not",
              "Posing requires the subject's consent and modelling does not",
              "There is none; the lesson treats the two words as interchangeable",
            ],
            correctIndex: 0,
            explanation:
              "Publicity photography arranges real workers constantly. The remark converts a true observation about a photograph into a false conclusion about the people.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Where does this lesson locate the error in the models remark?",
            options: [
              "In the conversion, not the word",
              "In the cofounder's tone, which Kleiman describes as dismissive",
              "In the word models itself, which is inaccurate for any publicity photograph",
              "In the museum's failure to catalogue the photographs at the time",
            ],
            correctIndex: 0,
            explanation:
              "The remark takes a true observation, that the photograph was arranged, and converts it into a false conclusion, that the subjects were not the workers.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does this course call a name a source deliberately does not print?",
            options: [
              "A withheld identification",
              "A passive attribution, since the actor is left out of the sentence",
              "An absence claim, since the record does not contain it",
              "A collection caption, since the archive supplies its own wording",
            ],
            correctIndex: 0,
            explanation:
              "A course repeating that source should not supply it, which is why this course does not name the cofounder.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Which two men do the museum's records name in the circa-1946 photograph?",
            options: [
              "Cpl. Herman Goldstein and PFC Homer Spence",
              "J. Presper Eckert, Jr. and Dr. J. W. Mauchly, the machine's two chief engineers",
              "General G. M. Barnes and Colonel Paul N. Gillon of the Ordnance Service",
              "Dean Harold Pender and Professor J. G. Brainerd of the Moore School",
            ],
            correctIndex: 0,
            explanation:
              "The records name those two alongside the two women, which is why the museum's catalogue is evidence against the misfiling version of the episode.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does this course say a hedge that names no document amounts to?",
            options: [
              "A shrug",
              "A finding, since acknowledging uncertainty is itself a result",
              "An attribution, since it credits the claim to its source",
              "A research check, since it records that the question is open",
            ],
            correctIndex: 0,
            explanation:
              "A hedge that names the document is a task. Every hedge in this course is written as the first kind and carries a research check behind it.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "How many places does this course name where an original caption might be read?",
            options: [
              "Four",
              "One, the Hagley Museum and Library Archives",
              "Seven, one for each source the course consulted",
              "None, since the course concludes that no original caption survives",
            ],
            correctIndex: 0,
            explanation:
              "Hagley, the Army Research Laboratory's Technical Library archives, the Daily Pennsylvanian for 4 March 1947, and the New York Times of 15 February 1946.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Which boxes at Hagley does Martin's citation name?",
            options: [
              "9a and 382",
              "102622431 and 102622385, the numbers used in the museum catalogue",
              "LX and 72, the volume and number of the campus newspaper",
              "1825 and 1946, the accession and the year",
            ],
            correctIndex: 0,
            explanation:
              "Accession 1825, the Sperry Rand versus Honeywell court documents, boxes 9a and 382. If the clippings are there, so are their captions.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What would an Army original settle that a newspaper clipping would not?",
            options: [
              "What the Army's own caption said",
              "How many newspapers carried the photograph on the day of the demonstration",
              "Which of the six was present when the photograph was taken",
              "Whether the demonstration was held on 14 or 15 February",
            ],
            correctIndex: 0,
            explanation:
              "What the Army wrote and what a newspaper printed are different questions. Both matter, and they are not interchangeable.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does a Hagley clipping settle, on this lesson's account?",
            options: [
              "What one newspaper printed on one day",
              "What the Army's publicity office distributed to the press nationally",
              "The full set of 1946 captions, since the court documents collected them all",
              "Whether the six attended the demonstration",
            ],
            correctIndex: 0,
            explanation:
              "Including whether its caption named anybody. That is narrower than the general claim, which is exactly the lesson's point.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What date does the Computer History Museum's record give for the photograph's first appearance in print?",
            options: [
              "4 March 1947",
              "15 February 1946, the day of the public demonstration",
              "14 February 1946, the date Martin gives for the press conference",
              "10 December 1945, the day the machine first ran",
            ],
            correctIndex: 0,
            explanation:
              "The record says it first appeared in the Daily Pennsylvanian, volume LX number 72, on 4 March 1947, thirteen months after the demonstration.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "In which publication does the museum's record say its photograph first appeared?",
            options: [
              "The Daily Pennsylvanian",
              "The Boston Post, which carried the No problem too tough for Robot headline",
              "The New York Times, on the day after the demonstration",
              "IEEE Technology and Society Magazine, in Martin's 1995 article",
            ],
            correctIndex: 0,
            explanation:
              "Volume LX, number 72, dated 4 March 1947. Whether that printing carried names is unknown, and it is one dated findable page.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "How has this course read the New York Times item of 15 February 1946?",
            options: [
              "Only as APS News quotes it",
              "Directly, from a digitised copy of the page",
              "Through Martin's 1995 article, which reproduces the whole page",
              "Not at all; the item is named in no source the course read",
            ],
            correctIndex: 0,
            explanation:
              "So the course does not quote the page itself and says nothing about what else is on it, which is the fetch-or-do-not-cite rule applied to a specific page.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Why does none of the four documents settle the claim about the 1946 captions?",
            options: [
              "The claim is a generalization over a set",
              "Because all four have been lost or destroyed since they were catalogued",
              "Because captions are not admissible evidence about what a photograph showed",
              "Because each of the four is dated after the demonstration",
            ],
            correctIndex: 0,
            explanation:
              "A generalization is settled by reading enough of the set, not by finding one good page. One caption would strengthen the claim without proving it.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What would finding one caption that names eight men and no women achieve?",
            options: [
              "It would strengthen the claim, not prove it",
              "It would prove the claim and close the research check attached to it",
              "It would disprove the claim, since one page cannot represent a set",
              "It would have no effect, since the course has already decided not to assert the claim",
            ],
            correctIndex: 0,
            explanation:
              "And the honest version of the sentence would still say so, which is the difference between a course that can be finished and one that can only be improved.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What question does the absence test ask?",
            options: [
              "What would have had to happen for this record to exist?",
              "Which archive is most likely to hold a document of this kind?",
              "How many independent sources report the same absence?",
              "Whether anyone had a motive to destroy the record",
            ],
            correctIndex: 0,
            explanation:
              "It comes from Who Gets Named, lesson 17, and it is what turns some silences into findings and leaves others as nothing.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What answer does the absence test give for the 1946 captions?",
            options: [
              "The record should exist",
              "No record would be expected, since captions were rarely kept",
              "The record was destroyed in the litigation that produced the Hagley files",
              "The test does not apply, because the question concerns a photograph rather than a text",
            ],
            correctIndex: 0,
            explanation:
              "A caption would have had to be typed and printed, and the Army was running a publicity campaign, which is the most caption-producing activity there is.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does the absence of the caption from this course tell you, on the test's reading?",
            options: [
              "Something about access and effort",
              "That the Army destroyed the captions when the project was declassified",
              "That the photographs were distributed without captions in 1946",
              "That the claim is unlikely to be true",
            ],
            correctIndex: 0,
            explanation:
              "The record should exist, so its absence here is a statement about what has been read rather than about what happened.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Which question does this lesson use as the case where the absence test gives the opposite answer?",
            options: [
              "What the six said to each other during the demonstration",
              "Who chose the six from among the Army's computers",
              "What the Army's caption said on the ENIAC OFFICIALS photograph",
              "Which newspapers printed the machine-room pictures",
            ],
            correctIndex: 0,
            explanation:
              "Nothing would have had to be written down, so no record would be expected and silence there tells you nothing at all.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What makes the difference between the two readings of the absence test?",
            options: [
              "Whether the past had reason to produce paper",
              "Whether the event took place in public or in private",
              "Whether the people involved were named in any other record",
              "Whether the archive holding the papers survived the war",
            ],
            correctIndex: 0,
            explanation:
              "Same test, opposite reading. A publicity campaign produces captions; a private conversation produces nothing, and silence means different things in the two cases.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does this course call a qualification that states which document would remove it?",
            options: [
              "A named hedge",
              "A settleable claim, since a document could decide it",
              "A withheld identification, since it holds something back",
              "An absence claim, since it records what is missing",
            ],
            correctIndex: 0,
            explanation:
              "It is a task rather than a shrug, and each one in this course carries a research check saying what is claimed and what would close it.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does a research check record, in this catalog?",
            options: [
              "What is claimed and what would settle it",
              "Which sources a course cited and whether each one was fetched",
              "Which standards a course claims and in which jurisdictions",
              "Which lessons of a course have been reviewed by a named reviewer",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes a hedge closeable. A hedge with no check is a hedge nobody will ever clear.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does this lesson say happens to this course if you read one of the four documents?",
            options: [
              "The course changes",
              "The course is retired, since its central claim will have been settled",
              "Nothing, since a private course cannot be revised once approved",
              "The claim moves from attribution to assertion automatically",
            ],
            correctIndex: 0,
            explanation:
              "That is the point of writing the hedges as tasks: the course is built to be improved by whoever reads one of the named documents.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does APS News quote from the New York Times item?",
            options: [
              "A line about a hundred trained men",
              "The full caption of the photograph that accompanied the article",
              "The names of the eight officials at the demonstration",
              "A description of two women operating the main control panel",
            ],
            correctIndex: 0,
            explanation:
              "A headline and a line saying the program would have kept a hundred trained men busy for a year. This course has read it only as APS quotes it.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does this lesson say skipping the what-each-document-settles step turns a research plan into?",
            options: [
              "A wish",
              "A generalization, since the plan no longer names a specific document",
              "An absence claim, since it asserts what the archives lack",
              "A hedge, since it states what the course cannot show",
            ],
            correctIndex: 0,
            explanation:
              "Naming four archives is easy. Saying what each one could and could not settle is the part that makes the list usable.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Which court case produced the documents Martin cites at Hagley?",
            options: [
              "Sperry Rand versus Honeywell",
              "A libel action brought by the University of Pennsylvania over the 1946 coverage",
              "An interference proceeding between Eckert and Mauchly over the machine's patent",
              "A contract dispute between the Army and the Moore School",
            ],
            correctIndex: 0,
            explanation:
              "The 1946 clippings sit in the court documents of that case, held under Accession 1825 at the Hagley Museum and Library.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "How long after the demonstration is the Daily Pennsylvanian printing the museum record names?",
            options: [
              "Thirteen months",
              "Two months, the same interval as between the first run and the demonstration",
              "Eighty years, at the anniversary Penn Today marked",
              "Six months, matching the interval in Kleiman's 2018 account",
            ],
            correctIndex: 0,
            explanation:
              "February 1946 to 4 March 1947. The gap is part of why that page settles one campus printing and nothing more general.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Where does the Army collection say many of its scanned images came from?",
            options: [
              "Its Technical Library archives",
              "The Hagley Museum and Library, under Accession 1825",
              "The Computer History Museum's Gwen Bell collection",
              "The Daily Pennsylvanian's bound volumes",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the originals behind those scans are one of the four places an original caption might be read.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does this course identify as the most repeated claim in the whole story?",
            options: [
              "That the 1946 captions named men and not women",
              "That the machine was the world's first modern computer, as the book's subtitle has it",
              "That the six were selected at random from the Army's pool of human computers",
              "That the newspapers printed the group photograph of the eight men nationally",
            ],
            correctIndex: 0,
            explanation:
              "That claim is the reason section 4 exists, and it is the one the course attributes to Kleiman rather than asserting.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which of Kleiman's two accounts appeared in TED Ideas?",
            options: [
              "The 2018 one",
              "The 2022 one, published alongside her book",
              "The 2013 one, which introduced the phrase Refrigerator Ladies",
              "Both, since the interview was a reprint of the earlier piece",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 TED Ideas piece, adapted from a talk. The 2022 account is an IEEE Spectrum interview.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "How does this lesson treat the question of where the photographs were printed?",
            options: [
              "As a separate question with a separate answer",
              "As settled by the 2022 account, which says the Army distributed them nationally",
              "As irrelevant, since the Army's own captions are what the claim concerns",
              "As unanswerable, since newspaper archives from 1946 no longer survive",
            ],
            correctIndex: 0,
            explanation:
              "The account says the Army took the photographs in order to publicize the machine. Whether and where they were printed is not the same question.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "How does this course describe the kind of course it chose to be?",
            options: [
              "Unfinished and true",
              "Complete on the evidence currently available to any researcher",
              "Provisional, since its claims will be withdrawn if no document is found",
              "Neutral, since it neither asserts nor attributes the central claim",
            ],
            correctIndex: 0,
            explanation:
              "Unfinished and true, with the document that would finish it named. The alternative would have been finished and possibly wrong.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Who sent Kleiman to the museum cofounder, in her 2018 account?",
            options: [
              "A professor",
              "The Army Research Laboratory's Technical Library, which held the photographs",
              "One of the six programmers, whom she had already interviewed",
              "The Moore School's dean, at the fiftieth anniversary",
            ],
            correctIndex: 0,
            explanation:
              "Her account says a professor sent her to the cofounder of the Computer History Museum, at that time across the river in Boston.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does Kleiman's account say the cofounder did as she spoke?",
            options: [
              "Rolled her eyes",
              "Produced a catalogue record showing the photographs filed under another description",
              "Refused to look at the photographs at all",
              "Wrote down the names so the museum could correct its record",
            ],
            correctIndex: 0,
            explanation:
              "In Kleiman's telling the cofounder rolled her eyes and said the women were models. That detail is part of the testimony, not of a document.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What does this course call the change in a remembered story's details across retellings?",
            options: [
              "Drift",
              "Migration, the movement of a phrase between anchors within one account",
              "Normalisation, the quiet standardising of a detail across sources",
              "Attribution, the naming of whose claim a detail is",
            ],
            correctIndex: 0,
            explanation:
              "The course documents drift by comparing two tellings it fetched, and refuses to assert it from a search result.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What volume and number does the museum record give for the Daily Pennsylvanian issue?",
            options: [
              "Volume LX, number 72",
              "Volume 102, number 622, taken from the catalogue record numbers",
              "Volume XIV, number 4, matching the journal in which Martin published",
              "It gives a date only, with no volume or number",
            ],
            correctIndex: 0,
            explanation:
              "Volume LX, number 72, dated 4 March 1947. A volume and number make a page findable rather than merely described.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does this lesson say about the phrase the 1946 captions?",
            options: [
              "It is plural and general",
              "It refers to a single caption whose wording Kleiman reproduces",
              "It is the Army's own term for the material it distributed to the press",
              "It appears verbatim in both of Kleiman's published accounts",
            ],
            correctIndex: 0,
            explanation:
              "It is a claim about a set of documents, which is why no single page settles it and why the course says so plainly.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What does reading the New York Times item only through APS News prevent this course from doing?",
            options: [
              "Quoting the page itself",
              "Naming the newspaper and the date of the item",
              "Listing the item among the four places a caption might be read",
              "Describing what APS News says the item contains",
            ],
            correctIndex: 0,
            explanation:
              "The course does not quote that page and says nothing about what else is on it, which is the fetch-or-do-not-cite rule applied to one specific page.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What answer does the absence test give for the record of who chose the six?",
            options: [
              "The same answer: a record should exist",
              "The opposite answer: no record would be expected",
              "No answer, since the test applies only to captions and photographs",
              "That the record existed and was destroyed after the war",
            ],
            correctIndex: 0,
            explanation:
              "A personnel action should exist, just as a caption should. Both gaps are statements about access rather than about the past.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 · The correction
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "finding-them",
      title: "13 · Finding them",
      section: "Section 5 · The correction",
      body: `Kathy Kleiman found the photographs as a Harvard undergraduate (Goodrich, 2022). APS News describes what she did next: she "sought them out after seeing an unnamed photograph of the women with the ENIAC" (Joosse, 2022).

**Notice what started it.** An unnamed photograph. A caption that did not do its job is the thing that made somebody look, and forty years of work followed from a blank space. That is worth holding next to section 4's argument rather than instead of it: the absence in the record is both the injury and the prompt.

**1986.** At the machine's fortieth anniversary at the University of Pennsylvania, Kleiman met four of the six (Kleiman, 2018). Four decades after the demonstration, and about half a century after the Army's 1942 notice.

**The fiftieth anniversary, and a dean.** Kleiman writes that at the fiftieth anniversary a dean at the university "didn't know who I was talking about" (Kleiman, 2018). Read that sentence carefully before deciding what it shows. It is not evidence of a policy or of anybody's opinion about the six. It is evidence that by the fiftieth anniversary the information was not in the institution's working knowledge, which is a different and more ordinary failure, and it is the one *Who Gets Named*, lesson 17, would predict from a record built on job classifications and captions.

**The interviews.** Kleiman recorded interviews, working with David Roland (Kleiman, 2018). The ENIAC Programmers Project, which she founded, holds interviews with four of the six (ENIAC Programmers Project, n.d.).

**A date that changes how the rest of this section reads.** Frances Bilas Spence, the last of the six, died in 2012 (Joosse, 2022). The documentary premiered in 2014. The book came out in 2022. So the two most public instruments of this correction arrived after all six were gone. *Who Gets Named*, lesson 21, describes that as the ordinary pattern rather than an outrage: corrections cluster after the people who could be embarrassed, and often the people being corrected about, are no longer present, and around anniversaries, which are cheap. Here the pattern comes with dates attached.

**One limit on this whole course, and it belongs in this lesson.** This course does not quote the six. Their oral histories exist, at the Computer History Museum and at IEEE, and nobody building this course has read them. So the six are described here entirely through other people's accounts: a lawyer who found them, a physics society's news article, a magazine, an Army caption, a university's anniversary page.

Sit with that for a second, because it is the subject of the course happening to the course. A record assembled from other people's descriptions is exactly what section 1 said a job classification produces. The honest response is not to pretend otherwise and not to apologise for it, but to say where the missing material is, which is what the ledger in lesson 15 does.

:::reveal What made Kleiman look for the six in the first place? ||| An unnamed photograph of the women with the machine. A caption that did not name anybody is what prompted a correction that took forty years.

:::reveal What does the story about the dean at the fiftieth anniversary actually show? ||| That by then the information was not in the institution's working knowledge. It is not evidence of a policy or of anybody's opinion, which is a more ordinary and more likely failure.

:::reveal Why does the death of the last of the six in 2012 matter to how section 5 reads? ||| Because the documentary came in 2014 and the book in 2022, so the two most public instruments of the correction arrived after all six were gone, which is the timing pattern Who Gets Named lesson 21 describes.

:::reveal What limit does this lesson admit about the course itself? ||| That it does not quote the six. Their oral histories exist at the Computer History Museum and at IEEE and have not been read here, so the six are described entirely through other people's accounts.

## Vocabulary
- **Prompting absence**: a gap in a record, such as an unnamed photograph, that causes somebody to investigate rather than merely erasing something.
- **Working knowledge**: what an institution's staff actually know without looking anything up, which a record can fail to supply even when it exists.
- **Oral history**: a recorded interview with a participant, the material this course names as missing from its own evidence.
- **Correction timing**: the tendency of corrections to cluster after the participants are gone and around anniversaries.

## Sources
ENIAC Programmers Project. (n.d.). *The ENIAC Programmers Project*. https://eniacprogrammers.org/
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/`,
    },
    {
      slug: "instruments-of-a-correction",
      title: "14 · The instruments of this correction",
      section: "Section 5 · The correction",
      body: `*Who Gets Named*, lesson 21, sets out the instruments a correction can travel through, and observes that a correction arrives through whichever one is **available** rather than whichever one is appropriate. Run its list against this case.

**An honour.** All six were inducted into the Women in Technology International Hall of Fame in 1997 (Joosse, 2022). Betty Snyder Holberton and Jean Jennings Bartik were honoured as Computer Pioneers by the IEEE Computer Society, and Bartik became a Computer History Museum fellow in 2008 (Kleiman, 2018).

**A film.** *The Computers* premiered at the Seattle International Film Festival in 2014 (Kleiman, 2018) and won Best Documentary Short at the 2016 U.N. Association Film Festival (Goodrich, 2022). Kleiman's 2018 text names the producers as John Palfreman and Kate McMahon. Other retellings spell the first of those Jon. Following the rule from lesson 3, this course prints the spelling in the source it read and tells you the variant exists rather than choosing silently.

**A book.** *Proving Ground: The Untold Story of the Six Women Who Programmed the World's First Modern Computer* was published in 2022, and Kleiman received the 2023 IEEE William and Joyce Middleton Electrical Engineering History Award for the work (Goodrich, 2022).

**A catalogue record.** The Computer History Museum's records for a photograph from about 1946 name two of the women alongside two of the men (Computer History Museum, n.d.). Lesson 21 singles this instrument out: a catalogue change reaches Trouillot's assembly moment, so everything retrieved downstream inherits it. It is the quietest instrument on this list and the one that changes the most searches.

**An institution's own page.** Penn Today, at the eightieth anniversary in February 2026, names all six and writes that "as the first digital-age programmers, they translated logic into electronic signals for ENIAC to interpret" (Magubane, 2026).

**Now the pattern, and it is the reason this lesson exists.** On the evidence this course can support, the original event was a public naming occasion that gave eight men their posts and described women by what their hands were doing. Look at the instruments again and ask which of them reaches that.

A hall of fame does not. A documentary does not. A prize for a book does not. A university's anniversary page eighty years later does not. The closest is the museum catalogue record, and it describes a different photograph, in a different institution, decades on. Not one instrument on this list touches a 1946 caption, because a 1946 caption is not a thing anybody can reopen.

That is lesson 21's structural fact stated with dates: the available instrument is usually the one furthest from the original harm. It is not a complaint about the instruments, which did real work. It is a description of what corrections can and cannot reach, and it is why section 4 spends so long on the document rather than on the honours.

**The intervals, for the record.** From the demonstration in 1946: fifty-one years to the hall of fame, sixty-two to the museum fellowship, sixty-eight to the film, seventy-six to the book, eighty to the university's own page.

:::reveal In what year were all six inducted into the Women in Technology International Hall of Fame? ||| 1997, fifty-one years after the demonstration.

:::reveal Which instrument does Who Gets Named lesson 21 single out as reaching Trouillot's assembly moment, and why? ||| A catalogue or archival record change, because everything retrieved downstream inherits it. Here that is the Computer History Museum's record naming two of the women.

:::reveal What does this lesson say about which instrument a correction arrives through? ||| Whichever one is available, not whichever one is appropriate, and the available instrument is usually the one furthest from the original harm.

:::reveal Which of the instruments listed reaches a 1946 caption? ||| None of them. A hall of fame, a film, a book prize and an anniversary page all reach something else, because a 1946 caption is not a thing anybody can reopen.

## Vocabulary
- **Available instrument**: the tool that actually exists in a case, which usually sits further from the original harm than the appropriate one would.
- **Assembly moment**: Trouillot's second moment, the making of archives, which a catalogue record change reaches and a public honour does not.
- **Interval**: the number of years between the event and a given correction, which this lesson lists rather than summarising.
- **Spelling variant flagged**: the practice of printing the form in the source read and naming the alternative, applied here to a producer's first name.

## Sources
Computer History Museum. (n.d.). *ENIAC, circa 1946* (Catalog Nos. 102622431 and 102622385) [Catalogue record]. Computer History Museum Collection.
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Magubane, N. (2026, February 11). *Penn's ENIAC, the world's first electronic computer, turns 80*. Penn Today. https://penntoday.upenn.edu/news/penns-eniac-worlds-first-electronic-computer-turns-80
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.`,
    },
    {
      slug: "the-ledger",
      title: "15 · The ledger",
      section: "Section 5 · The correction",
      body: `Here is everything this course has said, sorted by what kind of thing it is. Read it as a working document rather than a summary: the columns are meant to move.

**Documented**, from sources fetched and read for this course.

- In 1942 the Army sought women mathematics majors for the Moore School; roughly eighty to a hundred were hired as computers for the Ballistics Research Laboratory, at about $1,620 a year.
- Janet Abbate's account of why the job was open: mathematical education required, repetitive, dead-end.
- Six were chosen from among roughly a hundred human computers.
- There were no programming languages, manuals, compilers or operating systems, and a program was built by hand from cables, switches, panels and trays.
- The machine was first put to work on 10 December 1945 on a problem from the Army's Los Alamos Laboratory.
- It was shown to the press in mid-February 1946 at the Moore School.
- An Army photograph captioned ENIAC OFFICIALS names eight men and gives each one a post.
- Army captions identify two women by what they are doing at the main control panel, and two others as posed to show direct programming, with the job title in quotation marks.
- On Martin's account, newspapers published machine-room pictures rather than the eight-man group photograph.
- On APS News's account, the six were not mentioned in the press or at the demonstration.
- The honours from 1997 and 2008, the film of 2014, the book of 2022, the museum catalogue records, and Penn's page of 2026.

**Attributed, and not asserted.**

- That the 1946 photograph captions named men and did not name women. Kathy Kleiman, in two accounts that date the photographs differently.
- That a cofounder of the Computer History Museum said the women were models. Kleiman, in accounts of 2013 and 2018 that preserve different details.
- That the selection was random and took place in the spring of 1945. Mental Floss, 2013.
- The exact date of the demonstration, which APS News and Martin give one day apart.

**Unread.**

- Any original 1946 caption. Four places to look are named in lesson 12.
- Who chose the six, and who set up the December 1945 run.
- The oral histories of the six themselves.
- The identity of the museum cofounder, which this course does not seek.

**The closing sentence, and it is deliberately narrow.** What is established is that a publicity apparatus gave eight men their posts and described women by what their hands were doing. Whether a 1946 caption named the men and not the women, in the way the retelling has it, is not established here. Those two sentences sound alike. They are not the same, and telling them apart is the whole method of this course.

**And now the error in the other direction, which is easier to make than it looks.** Careful attribution is not scepticism about the six. Nothing in these fifteen lessons casts any doubt on what they did. The point is narrower and harder: the record of what they did is thinner than the record of who stood in front of a camera, and that thinness is itself the finding, in exactly the sense *Who Gets Named*, lesson 17, means it. Padding the thin part would not honour anybody. It would make this course useless to the next person who goes looking for the caption, and that person is the one who can actually finish it.

:::reveal Name three things this course lists as documented rather than attributed. ||| Any three of: the 1942 hiring and the salary, Abbate's explanation, the six chosen from about a hundred, the absence of languages and manuals, the 10 December 1945 Los Alamos run, the mid-February 1946 demonstration, the ENIAC OFFICIALS caption, and the honours, film, book and museum records.

:::reveal Name the four things this course lists as attributed rather than asserted. ||| The caption claim, the models remark, the random selection in spring 1945, and the exact date of the demonstration.

:::reveal What is the narrow closing sentence this course is willing to assert? ||| That a publicity apparatus gave eight men their posts and described women by what their hands were doing. Whether a caption named the men and not the women in the way the retelling has it is not established here.

:::reveal Why would padding the thin part of the record fail to honour the six? ||| Because the thinness is itself the finding, and padding it would make the course useless to the next person who goes looking for the caption, who is the person who can actually finish it.

## Vocabulary
- **Ledger**: this course's three-column sorting of its own claims into documented, attributed and unread.
- **Documented claim**: one read on a source fetched for this course and therefore assertable in its own voice.
- **Attributed claim**: one printed as what a named source says, because no document has settled it.
- **Thinness as a finding**: the principle that a sparse record is itself evidence about how the record was made, and must not be padded.

## Sources
Goodrich, J. (2022, November 21). *The women behind ENIAC*. IEEE Spectrum. https://spectrum.ieee.org/the-women-behind-eniac
Joosse, T. (2022, November 10). *The ENIAC computer runs its first, top-secret program*. APS News. https://www.aps.org/apsnews/2022/11/eniac-first-top-secret-program
Kleiman, K. (2018, April 17). *How I discovered six pioneering women who helped create modern computers*. TED Ideas. https://ideas.ted.com/how-i-discovered-six-pioneering-women-who-helped-create-modern-computers-and-why-we-should-never-forget-them/
Martin, C. D. (1995, December). ENIAC: The press conference that shook the world [Author's manuscript]. *IEEE Technology and Society Magazine*. https://www2.seas.gwu.edu/~mfeldman/csci1030/summer08/eniac2.pdf
Sheppard, A. (2013, October 13). *Meet the "Refrigerator Ladies" who programmed the ENIAC*. Mental Floss. https://www.mentalfloss.com/article/53160/meet-refrigerator-ladies-who-programmed-eniac
Trouillot, M.-R. (1995). *Silencing the past: Power and the production of history*. Beacon Press.
U.S. Army Research Laboratory. (n.d.). *Historic computer images*. https://ftp.arl.army.mil/ftp/historic-computers/`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The correction",
      section: "Section 5 · The correction",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Kleiman when she found the photographs?",
            options: [
              "A Harvard undergraduate",
              "A member of the Computer History Museum's curatorial staff",
              "A reporter assigned to the machine's fortieth anniversary",
              "An Army Research Laboratory archivist cataloguing the image collection",
            ],
            correctIndex: 0,
            explanation:
              "IEEE Spectrum says she found them as a Harvard undergraduate, which is the beginning of a correction that took forty years.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "How does APS News describe what prompted Kleiman to seek the six out?",
            options: [
              "An unnamed photograph of the women",
              "A lecture on the history of computing given at her university",
              "A catalogue record at the Computer History Museum that misidentified them",
              "The Army's 1946 press release, which she found in a court file",
            ],
            correctIndex: 0,
            explanation:
              "She sought them out after seeing an unnamed photograph of the women with the machine. A caption that did not name anybody is what made her look.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does this lesson call a gap in a record that causes somebody to investigate?",
            options: [
              "A prompting absence",
              "An isolated gap, meaning a silence surrounded by corroborating material",
              "A named hedge, meaning a qualification that states what would remove it",
              "A migrating phrase, meaning a form of words that moves between tellings",
            ],
            correctIndex: 0,
            explanation:
              "The absence in the record is both the injury and the prompt, which is a point to hold beside section 4's argument rather than instead of it.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "In what year did Kleiman meet four of the six?",
            options: [
              "1986",
              "1997, when all six were inducted into a hall of fame",
              "2014, at the premiere of the documentary",
              "1946, at the machine's public demonstration",
            ],
            correctIndex: 0,
            explanation:
              "At the machine's fortieth anniversary at the University of Pennsylvania, four decades after the demonstration.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Which anniversary was the 1986 meeting?",
            options: [
              "The fortieth",
              "The fiftieth, at which a dean did not know whom she was asking about",
              "The eightieth, marked by Penn Today's article naming all six",
              "The sixtieth, held shortly before the last of the six died",
            ],
            correctIndex: 0,
            explanation:
              "The fortieth anniversary of the machine, at the University of Pennsylvania, where she met four of the six.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does Kleiman report a university dean saying at the fiftieth anniversary?",
            options: [
              "He did not know whom she meant",
              "That the six had been deliberately excluded from the original programme",
              "That the university had no records of the wartime computing staff",
              "That the women in the photographs were models rather than programmers",
            ],
            correctIndex: 0,
            explanation:
              "Her wording is that the dean did not know who she was talking about, which this lesson reads carefully rather than dramatically.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does the dean anecdote actually show, on this lesson's reading?",
            options: [
              "The information was not in the institution's working knowledge",
              "That the university had a policy of omitting the six from its histories",
              "That the dean personally disputed the women's role in the project",
              "That the institution's records of the project had been destroyed",
            ],
            correctIndex: 0,
            explanation:
              "That is a more ordinary and more likely failure, and it is the one Who Gets Named lesson 17 would predict from a record built on job classifications and captions.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does this course call what an institution's staff know without looking anything up?",
            options: [
              "Working knowledge",
              "Retrospective significance, the fourth of Trouillot's moments",
              "Institutional memory, meaning the honours and portraits an institution holds",
              "The assembly moment, meaning what an archive has accessioned",
            ],
            correctIndex: 0,
            explanation:
              "A record can fail to supply it even when the record itself exists, which is what the dean anecdote illustrates.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "With whom does Kleiman's account say she recorded the interviews?",
            options: [
              "David Roland",
              "John Palfreman and Kate McMahon, the documentary's producers",
              "The Computer History Museum's oral history programme",
              "The U.S. Army Research Laboratory's Technical Library",
            ],
            correctIndex: 0,
            explanation:
              "Her 2018 account names him. The ENIAC Programmers Project she founded holds interviews with four of the six.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "How many of the six does the ENIAC Programmers Project hold interviews with?",
            options: [
              "Four",
              "All six, recorded before the last of them died in 2012",
              "Two, the two women named in the Army's main control panel caption",
              "None; the site holds only photographs and documents",
            ],
            correctIndex: 0,
            explanation:
              "Four, on the project's own account. This course has not read those interviews, which is one of the limits lesson 15 records.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "In what year did the last of the six die?",
            options: [
              "2012",
              "2008, the year Bartik became a Computer History Museum fellow",
              "1997, the year of the hall of fame induction",
              "2022, the year the book was published",
            ],
            correctIndex: 0,
            explanation:
              "APS News says Frances Bilas Spence was the last of the six and died in 2012, two years before the documentary premiered.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Who was the last surviving member of the six?",
            options: [
              "Frances Bilas Spence",
              "Jean Jennings Bartik, who became a Computer History Museum fellow in 2008",
              "Betty Snyder Holberton, honoured as a Computer Pioneer by the IEEE Computer Society",
              "Ruth Lichterman Teitelbaum, whose surname is spelled two ways in the sources",
            ],
            correctIndex: 0,
            explanation:
              "APS News names her as the last of the six, who died in 2012. The film came in 2014 and the book in 2022.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What follows from the 2012 date for how section 5 reads?",
            options: [
              "The most public instruments arrived after all six were gone",
              "That the documentary was made with the participation of all six",
              "That the hall of fame induction was the last honour any of them received in person",
              "That the book was written from interviews conducted after her death",
            ],
            correctIndex: 0,
            explanation:
              "The film of 2014 and the book of 2022 both postdate her death, which is the timing pattern Who Gets Named lesson 21 describes.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does Who Gets Named lesson 21 say corrections cluster around?",
            options: [
              "Anniversaries, and the departure of those who could be embarrassed",
              "Legal deadlines, after which a record can no longer be challenged",
              "Changes of institutional leadership, when new staff review old catalogues",
              "The publication of scholarly monographs, which force institutions to respond",
            ],
            correctIndex: 0,
            explanation:
              "Corrections cluster after the people who could be embarrassed have gone, and around anniversaries, which are cheap. Here the pattern comes with dates.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What limit does this lesson admit about the course's own evidence?",
            options: [
              "It does not quote the six",
              "It has not read Martin's 1995 article, only summaries of it",
              "It relies entirely on secondary summaries of the Army's photograph captions",
              "It has not established the year in which the machine was demonstrated",
            ],
            correctIndex: 0,
            explanation:
              "Their oral histories exist at the Computer History Museum and at IEEE, and nobody building this course has read them.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Through whose accounts is this course's picture of the six assembled?",
            options: [
              "Other people's",
              "Their own oral histories, recorded before the last of them died",
              "The Army's personnel records for the wartime computing staff",
              "Contemporary newspaper interviews from 1946",
            ],
            correctIndex: 0,
            explanation:
              "A lawyer who found them, a physics society's news article, a magazine, an Army caption, and a university's anniversary page.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Why does this lesson say that limit is the subject of the course happening to the course?",
            options: [
              "A record made of others' descriptions is what a classification produces",
              "Because the course was written under the same wartime secrecy rules",
              "Because the course's author is also its only reviewer",
              "Because the course cannot be published publicly while the claim is unsettled",
            ],
            correctIndex: 0,
            explanation:
              "Section 1 argued that a job classification produces a record made out of other people's descriptions. The course's own evidence base has the same shape.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does this lesson say is the honest response to that limit?",
            options: [
              "Say where the missing material is",
              "Withhold the course until the oral histories have been read",
              "Apologise for it in the course description so learners are warned",
              "Reconstruct the six's own words from the accounts that quote them",
            ],
            correctIndex: 0,
            explanation:
              "Not pretending otherwise and not apologising, but naming the gap, which is what the ledger in lesson 15 does.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Which two institutions does this lesson name as holding oral histories of the six?",
            options: [
              "The Computer History Museum and IEEE",
              "The Hagley Museum and the U.S. Army Research Laboratory",
              "The University of Pennsylvania and the Daily Pennsylvanian",
              "The Women in Technology International Hall of Fame and Penn Today",
            ],
            correctIndex: 0,
            explanation:
              "Those are the two named as holding material this course has not read, which is why the ledger lists the oral histories as unread.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Roughly how long had passed between the Army's 1942 notice and the 1986 meeting?",
            options: [
              "About half a century",
              "About a decade, which is why four of the six were still working in computing",
              "About eighty years, the interval Penn Today marked",
              "About twenty years, which is when the first oral histories were recorded",
            ],
            correctIndex: 0,
            explanation:
              "The lesson notes the fortieth anniversary of the machine fell about half a century after the hiring notice that created the job.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Which hall of fame inducted all six in 1997?",
            options: [
              "Women in Technology International",
              "The IEEE Computer Society's Computer Pioneer programme, which honoured two of them",
              "The Computer History Museum's fellowship, which honoured Bartik in 2008",
              "The National Inventors Hall of Fame, which named the machine's eight officials",
            ],
            correctIndex: 0,
            explanation:
              "APS News records the 1997 induction of all six into the Women in Technology International Hall of Fame.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which two of the six were honoured as Computer Pioneers by the IEEE Computer Society?",
            options: [
              "Holberton and Bartik",
              "Meltzer and Teitelbaum, the two named in the Army's control panel caption",
              "Antonelli and Spence, the last two of the six to be recognised",
              "All six, in the same year as the hall of fame induction",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman's 2018 account names Betty Snyder Holberton and Jean Jennings Bartik as Computer Pioneers of the IEEE Computer Society.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "In what year did Bartik become a Computer History Museum fellow?",
            options: [
              "2008",
              "1997, the same year as the hall of fame induction",
              "2016, the year the documentary won its festival award",
              "2023, the year Kleiman received the IEEE history award",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman's account gives 2008. That is sixty-two years after the demonstration.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Where did the documentary premiere?",
            options: [
              "The Seattle International Film Festival",
              "The U.N. Association Film Festival, where it won Best Documentary Short",
              "The Computer History Museum, at its annual fellows ceremony",
              "The University of Pennsylvania, at an anniversary screening",
            ],
            correctIndex: 0,
            explanation:
              "It premiered there in 2014 and won Best Documentary Short at the 2016 U.N. Association Film Festival, which is a separate event two years later.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "In what year did the documentary win Best Documentary Short?",
            options: [
              "2016",
              "2014, at the festival where it premiered",
              "2022, alongside the publication of the book",
              "2023, at the same time as the IEEE history award",
            ],
            correctIndex: 0,
            explanation:
              "At the 2016 U.N. Association Film Festival, per IEEE Spectrum. The 2014 date is the Seattle premiere.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How does this course spell the first name of the documentary producer whose name appears two ways?",
            options: [
              "John, with the variant Jon flagged",
              "Jon, since that is the form used in most published retellings",
              "It omits the producers entirely because the spelling is disputed",
              "It prints both spellings joined, so that neither source is preferred",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman's 2018 text says John Palfreman, so the course prints that and tells you the variant exists, following the rule from lesson 3.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "In what year was Proving Ground published?",
            options: [
              "2022",
              "2018, the same year as the TED Ideas piece",
              "2014, alongside the documentary's premiere",
              "2023, the year of the IEEE history award",
            ],
            correctIndex: 0,
            explanation:
              "The book appeared in 2022, and the IEEE William and Joyce Middleton Electrical Engineering History Award followed in 2023.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which award did Kleiman receive in 2023?",
            options: [
              "The IEEE William and Joyce Middleton award",
              "Best Documentary Short at the U.N. Association Film Festival",
              "A Computer History Museum fellowship",
              "Induction into the Women in Technology International Hall of Fame",
            ],
            correctIndex: 0,
            explanation:
              "The IEEE William and Joyce Middleton Electrical Engineering History Award, for the work behind the 2022 book.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which instrument does this lesson call the quietest on its list?",
            options: [
              "A catalogue record change",
              "A documentary film, which reaches a general audience without institutional weight",
              "A hall of fame induction, which is announced once and then forgotten",
              "A university's anniversary web page",
            ],
            correctIndex: 0,
            explanation:
              "It is the quietest instrument and the one that changes the most searches, because everything retrieved downstream inherits it.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which of Trouillot's moments does a catalogue record change reach?",
            options: [
              "The assembly moment",
              "Fact creation, since the record is made at the moment of description",
              "Retrospective significance, since it decides which story is told",
              "None of them; a catalogue is an administrative record rather than a historical one",
            ],
            correctIndex: 0,
            explanation:
              "The making of archives. Lesson 21 singles it out for exactly that reason, and this course's example is the Computer History Museum's record.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "What phrase does Penn Today use for the six at the eightieth anniversary?",
            options: [
              "The first digital-age programmers",
              "The Moore School computers, restoring the Army's own wartime job title",
              "The women behind ENIAC, following the IEEE Spectrum interview",
              "The Refrigerator Ladies, reclaiming the phrase from 2013",
            ],
            correctIndex: 0,
            explanation:
              "It writes that as the first digital-age programmers, they translated logic into electronic signals for the machine to interpret.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "What does this lesson describe as the original event that needed correcting?",
            options: [
              "A naming occasion that gave men posts and women activities",
              "The Army's decision to classify the machine's first run for Los Alamos",
              "The museum cofounder's remark that the women were models",
              "The dean's failure to recognise the six at the fiftieth anniversary",
            ],
            correctIndex: 0,
            explanation:
              "That is the version the evidence supports: eight men with posts, and women described by what their hands were doing.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which of the listed instruments reaches a 1946 caption?",
            options: [
              "None of them",
              "The Computer History Museum catalogue record, which describes the same photograph",
              "Penn Today's anniversary page, which reproduces the original caption",
              "The documentary, which shows the photographs with their captions on screen",
            ],
            correctIndex: 0,
            explanation:
              "A 1946 caption is not a thing anybody can reopen, which is lesson 21's structural fact with dates attached.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "What does this lesson say about the instruments falling short of the original harm?",
            options: [
              "It is a description, not a complaint",
              "That the institutions involved chose the cheapest instrument available to them",
              "That the correction has therefore failed and should be attempted again",
              "That a court order is the only instrument that could have reached the caption",
            ],
            correctIndex: 0,
            explanation:
              "The instruments did real work. The pattern describes what corrections can and cannot reach, which is why section 4 dwells on the document rather than the honours.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How many years separate the demonstration from the hall of fame induction?",
            options: [
              "Fifty-one",
              "Sixty-two, the interval to the museum fellowship",
              "Sixty-eight, the interval to the documentary",
              "Eighty, the interval to the university's own page",
            ],
            correctIndex: 0,
            explanation:
              "1946 to 1997. The lesson lists the intervals rather than summarising them, so the pattern can be read directly.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How many years separate the demonstration from Penn Today's article?",
            options: [
              "Eighty",
              "Fifty-one, the interval to the hall of fame induction",
              "Seventy-six, the interval to the publication of the book",
              "Sixty-eight, the interval to the documentary's premiere",
            ],
            correctIndex: 0,
            explanation:
              "1946 to 2026. Penn Today's article marks the machine's eightieth anniversary and names all six.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How many years separate the demonstration from the book?",
            options: [
              "Seventy-six",
              "Sixty-two, the interval to the museum fellowship",
              "Fifty-one, the interval to the hall of fame induction",
              "Eighty, the interval to the university's anniversary page",
            ],
            correctIndex: 0,
            explanation:
              "1946 to 2022. The listed intervals run fifty-one, sixty-two, sixty-eight, seventy-six and eighty years.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "What does this course mean by an available instrument?",
            options: [
              "The tool that actually exists in a case",
              "An instrument an institution can use without external approval",
              "The cheapest of the instruments open to a correcting body",
              "An instrument that reaches the original document rather than a later one",
            ],
            correctIndex: 0,
            explanation:
              "And it usually sits further from the original harm than the appropriate one would, which is the pattern this lesson tests against the dates.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which lesson of Who Gets Named supplies the instrument list this lesson runs?",
            options: [
              "Lesson 21",
              "Lesson 17, on the four places a record goes quiet",
              "Lesson 11, on authorship as the currency of credit",
              "Lesson 7, on a caption that carries a name",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 21 sets out who corrects a record and with what, including the observation about the available instrument.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How many columns does the ledger sort this course's claims into?",
            options: [
              "Three",
              "Two, separating what is documented from what is not",
              "Five, one for each section of the course",
              "Four, adding a column for claims the course has disproved",
            ],
            correctIndex: 0,
            explanation:
              "Documented, attributed, and unread. The lesson says to read it as a working document, because the columns are meant to move.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What are the three columns of the ledger?",
            options: [
              "Documented, attributed, unread",
              "Verified, reported, unverified, following the general evidence markings",
              "Primary, secondary, tertiary, by the kind of source involved",
              "Settled, contested, abandoned, by the state of each research question",
            ],
            correctIndex: 0,
            explanation:
              "Documented claims are assertable in the course's own voice; attributed ones are printed as what a named source says; unread ones name what is missing.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Which of these does the ledger place in the documented column?",
            options: [
              "The 10 December 1945 Los Alamos run",
              "That the 1946 captions named men and did not name women",
              "That the selection of the six was random",
              "The exact calendar date of the public demonstration",
            ],
            correctIndex: 0,
            explanation:
              "APS News states it directly, so the course can assert it. The other three sit in the attributed column.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Which of these does the ledger place in the attributed column?",
            options: [
              "The models remark",
              "The 1942 Army notice for women mathematics majors",
              "The ENIAC OFFICIALS caption naming eight men with posts",
              "The 1997 hall of fame induction of all six",
            ],
            correctIndex: 0,
            explanation:
              "It rests on Kleiman's accounts of 2013 and 2018, which preserve different details, so it is printed as what she says.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Which of these does the ledger place in the unread column?",
            options: [
              "The oral histories of the six",
              "Martin's 1995 article on the press conference",
              "The Army Research Laboratory's published image captions",
              "Penn Today's article at the eightieth anniversary",
            ],
            correctIndex: 0,
            explanation:
              "They exist at the Computer History Museum and at IEEE and were not read for this course, which is why the six are described through other people's accounts.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "How many attributed claims does the ledger list?",
            options: [
              "Four",
              "One, the caption claim that gives the course its condition",
              "Eleven, the same number as the documented claims",
              "None, since every claim in the course is either documented or unread",
            ],
            correctIndex: 0,
            explanation:
              "The caption claim, the models remark, the random selection in spring 1945, and the exact date of the demonstration.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What narrow sentence does the ledger say this course is willing to assert?",
            options: [
              "Men got posts and women got activities",
              "That the 1946 captions named the men and not the women",
              "That the six were deliberately excluded from the demonstration's programme",
              "That the Army intended to conceal the programmers' contribution",
            ],
            correctIndex: 0,
            explanation:
              "A publicity apparatus gave eight men their posts and described women by what their hands were doing. Whether a caption did what the retelling says is not established here.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger say about the two closing sentences that sound alike?",
            options: [
              "Telling them apart is the whole method",
              "They are equivalent, and the course prefers the shorter one for clarity",
              "The second follows logically from the first once the evidence is assembled",
              "Both are attributed to Kleiman rather than asserted by the course",
            ],
            correctIndex: 0,
            explanation:
              "One is established by captions the course read. The other is a claim about a set of 1946 documents nobody has read, and the difference is the course's method.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What error does the ledger warn against in the other direction?",
            options: [
              "Reading careful attribution as doubt about the six",
              "Reading the ledger as a summary rather than as a working document",
              "Treating documented claims as if they were merely attributed",
              "Assuming the unread column can never be reduced",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the fifteen lessons casts doubt on what the six did. The record of what they did is simply thinner than the record of who stood in front of a camera.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does this course call the principle that a sparse record is itself evidence?",
            options: [
              "Thinness as a finding",
              "The absence test, which asks what would have had to happen for a record to exist",
              "Prompting absence, meaning a gap that causes somebody to investigate",
              "An isolated gap, meaning a silence surrounded by corroborating material",
            ],
            correctIndex: 0,
            explanation:
              "It is evidence about how the record was made, and padding it would make the course useless to the person who can actually finish it.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Why does the ledger say padding the thin part would fail?",
            options: [
              "It would not help the person who can finish the course",
              "Because a reviewer would detect the additions and reject the course",
              "Because the thin part concerns living people who cannot be described",
              "Because padding would break the course's word budget for each section",
            ],
            correctIndex: 0,
            explanation:
              "The next person who goes looking for the caption is the one who can close the gap, and a padded course gives them nothing to work from.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "How does the ledger say its columns should be read?",
            options: [
              "As a working document whose columns move",
              "As a final summary of everything the course has established",
              "As an ordered ranking from most to least reliable claim",
              "As a checklist a learner completes while working through the course",
            ],
            correctIndex: 0,
            explanation:
              "Reading one of the documents named in lesson 12 would move a claim from attributed to documented, which is the whole design.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Which two women does the ledger say the Army captions identify by what they are doing?",
            options: [
              "The two at the main control panel",
              "Ester Gerston and Gloria Gordon Bolotsky, described as posed",
              "The two named in the Computer History Museum catalogue record",
              "All six, in a single caption naming the whole programming team",
            ],
            correctIndex: 0,
            explanation:
              "The control panel caption identifies two women by the activity of operating. A separate caption describes two others as posed to show direct programming.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger list as documented about the machine's first work?",
            options: [
              "A Los Alamos problem on 10 December 1945",
              "A ballistic trajectory computed for the press on 15 February 1946",
              "A differential equation broken into steps by the six in the spring of 1945",
              "A test run of the control panel conducted by the Moore School's engineers",
            ],
            correctIndex: 0,
            explanation:
              "That is the documented column's entry. Who set up the run is in the unread column.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger say about who chose the six?",
            options: [
              "It is unread",
              "It is documented, from the Army's personnel action of spring 1945",
              "It is attributed to Mental Floss, which names the selecting officer",
              "It is settled, since both accounts agree the Army made the decision",
            ],
            correctIndex: 0,
            explanation:
              "Who chose the six and who set up the December run are both in the unread column, alongside any original 1946 caption.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger record about the museum cofounder's identity?",
            options: [
              "The course does not seek it",
              "That it is documented in the Computer History Museum's own records",
              "That a research check has been filed to establish it",
              "That Kleiman names her in the 2022 account but not the 2018 one",
            ],
            correctIndex: 0,
            explanation:
              "It sits in the unread column with the note that this course does not seek it, because Kleiman withheld it.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "In which lesson are the four places to look for an original caption named?",
            options: [
              "Lesson 12",
              "Lesson 15, in the unread column of the ledger",
              "Lesson 9, in the primary-source exercise",
              "Lesson 8, in the discussion of the group photograph",
            ],
            correctIndex: 0,
            explanation:
              "The ledger points back to lesson 12 rather than repeating the list, since the ledger's job is to sort the claims rather than to restate the research plan.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger say about the two dates for the demonstration?",
            options: [
              "They are attributed, one day apart",
              "They are documented, since both sources are reliable publications",
              "They are unread, since neither source's page has been examined",
              "They have been settled in favour of the more recent publication",
            ],
            correctIndex: 0,
            explanation:
              "APS News and Martin give the demonstration one day apart, so the exact date sits in the attributed column and the course writes mid-February.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "How does the ledger describe Janet Abbate's account of the job?",
            options: [
              "Documented",
              "Attributed, since it is an interpretation rather than a fact",
              "Unread, since her own publications were not consulted",
              "Contested, since another historian gives a different explanation",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence was read as APS News quotes it, so the course can state that she gives that explanation, which is what the documented column means.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Which of these does the ledger place in the documented column about the press?",
            options: [
              "That papers ran machine-room pictures, on Martin's account",
              "That the photographs of the eight men were syndicated nationally",
              "That the captions of the published photographs named only men",
              "That no newspaper covered the demonstration at all",
            ],
            correctIndex: 0,
            explanation:
              "The documented entries are phrased with their source attached where the source is a single account, which is why it reads on Martin's account.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does the ledger say this course is willing to assert about a publicity apparatus?",
            options: [
              "It gave men posts and described women's activity",
              "It deliberately suppressed the names of the six programmers",
              "It distributed photographs to newspapers across the country",
              "It was operated by the Moore School rather than by the Army",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is supported by captions the course read. The stronger version, about what a 1946 caption did, is not established here.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What kind of claim does the ledger call one printed as what a named source says?",
            options: [
              "An attributed claim",
              "A documented claim, since the source is named and checkable",
              "A settleable claim, since a document could decide it",
              "A named hedge, since it states what would remove the qualification",
            ],
            correctIndex: 0,
            explanation:
              "Attribution is used because no document has settled it. Documented claims are the ones the course asserts in its own voice.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "How many lessons does the ledger say have cast doubt on what the six did?",
            options: [
              "None",
              "All fifteen, by attributing rather than asserting the central claim",
              "Three, the lessons of section 4",
              "One, the lesson comparing Kleiman's two accounts",
            ],
            correctIndex: 0,
            explanation:
              "Careful attribution is not scepticism about the six. The point is that the record of what they did is thinner than the record of who stood in front of a camera.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does this lesson say the absence in the record was, besides an injury?",
            options: [
              "The prompt",
              "A sign that the photographs had been deliberately stripped of their captions",
              "Evidence that the Army never identified anybody in its publicity material",
              "Proof that the museum had filed the photographs under another description",
            ],
            correctIndex: 0,
            explanation:
              "An unnamed photograph is what made Kleiman look, so the absence is both the injury and the thing that started the correction.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does this course call a recorded interview with a participant?",
            options: [
              "An oral history",
              "A catalogue record, since it enters an institution's holdings",
              "Testimony, since it is a recalled account rather than a document",
              "A collection caption, since the institution supplies the description",
            ],
            correctIndex: 0,
            explanation:
              "Oral histories of the six exist at the Computer History Museum and at IEEE, and the ledger lists them as unread.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What does this course call printing the spelling in the source it read while naming the alternative?",
            options: [
              "Flagging the variant",
              "Silent normalisation, since the course settles on one form",
              "Attribution, since the spelling is credited to a publication",
              "A named hedge, since it states what would resolve the difference",
            ],
            correctIndex: 0,
            explanation:
              "The rule comes from lesson 3 and is applied here to a documentary producer's first name, printed as John with Jon flagged.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How many years separate the demonstration from the documentary's premiere?",
            options: [
              "Sixty-eight",
              "Fifty-one, the interval to the hall of fame induction",
              "Seventy-six, the interval to the publication of the book",
              "Sixty-two, the interval to the museum fellowship",
            ],
            correctIndex: 0,
            explanation:
              "1946 to 2014. The lesson lists fifty-one, sixty-two, sixty-eight, seventy-six and eighty years so the pattern can be read directly.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "How does the ledger describe the job title in the Army's direct-programming caption?",
            options: [
              "In quotation marks",
              "Expanded in full, as person employed to compute",
              "Omitted, since the caption gives only the women's names",
              "Replaced by the word programmer throughout",
            ],
            correctIndex: 0,
            explanation:
              "The caption calls the two women Computers in quotation marks and later second-generation ENIAC programmers, giving a role twice over.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What does a claim need in order to sit in the ledger's documented column?",
            options: [
              "It was read on a source fetched for this course",
              "It appears in at least two independent published accounts",
              "It concerns an event rather than a person's recollection",
              "It has been confirmed by an archive holding the original document",
            ],
            correctIndex: 0,
            explanation:
              "That is what makes it assertable in the course's own voice, as against an attributed claim, which is printed as what a named source says.",
            sourceLessonSlug: "the-ledger",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-were-the-computers-final",
      title: "Final assessment · Who were the computers",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was a computer, as a job title, at the Moore School from 1942?",
            options: [
              "A person employed to compute",
              "A desk calculating machine issued to Army ordnance offices for trajectory work",
              "A published volume of firing tables carried by an artillery crew",
              "A supervisory grade above the mathematics clerks at the Ballistics Research Laboratory",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman is explicit that a Computer was a person before it was a machine, and that it was their official title.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "What salary and laboratory does APS News attach to the computer's job?",
            options: [
              "About $1,620 a year, for the Ballistics Research Laboratory",
              "About $620 a year, for the Los Alamos Laboratory's computing section",
              "About $3,200 a year, for the Moore School's own engineering staff",
              "No salary; the positions were wartime volunteer appointments",
            ],
            correctIndex: 0,
            explanation:
              "APS News gives about $1,620 per year, which it converts to roughly $27,000 today, for work at the school for the Army's Ballistics Research Laboratory.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Why does this course carry the number of women hired as a range?",
            options: [
              "All three sources state an approximation",
              "Because the sources give figures that cannot be reconciled with one another",
              "Because the Army's own records of the hiring were destroyed after the war",
              "Because the range covers both the Moore School and Aberdeen Proving Ground",
            ],
            correctIndex: 0,
            explanation:
              "Between 80 and 100, nearly a hundred, and approximately 100 agree. Printing one as exact would invent a precision none of them claims.",
            sourceLessonSlug: "a-computer-was-a-person",
          },
          {
            prompt: "Which feature of the job, in Abbate's account, made it available to women with mathematics degrees?",
            options: [
              "It was dead-end",
              "It required a mathematical education, which women were more likely than men to have",
              "It was wartime and temporary, so nobody expected to hold it after 1945",
              "It was classified, so the Army could not recruit through normal channels",
            ],
            correctIndex: 0,
            explanation:
              "A job that leads nowhere is one a person with somewhere else to go does not take. The education requirement narrows the pool and the dead-end quality decides who is left.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "What does this course refuse to print about pay at the Moore School?",
            options: [
              "A gap between the women's pay and the men's",
              "The computers' salary, because two sources give it differently",
              "The conversion of the salary into present-day money",
              "The salary of the eight officials named in the Army caption",
            ],
            correctIndex: 0,
            explanation:
              "Its sources give the computers' salary and say nothing about what the men earned. An assumption that is probably true is still an assumption.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "How does a job classification damage a record without anybody suppressing anything?",
            options: [
              "The filing makes the argument by itself",
              "It causes the employer to destroy documents that contradict the classification",
              "It removes the employee's name from every index the employer maintains",
              "It prevents the work from being published under any name at all",
            ],
            correctIndex: 0,
            explanation:
              "Work classified as repetitive and dead-end carries a title later readers take as clerical, and the title is among the first things a researcher finds.",
            sourceLessonSlug: "why-the-job-was-open",
          },
          {
            prompt: "Under how many first names does Jean Jennings Bartik appear across this course's sources?",
            options: [
              "Four",
              "Two, which is what a married name alone produces",
              "One, since every source agrees on her first name",
              "Six, one for each published form of the six women's names",
            ],
            correctIndex: 0,
            explanation:
              "Jean, Betty Jean, Betty and Elizabth. Four first names is four searches, and three of them come back empty on a fully documented person.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "What spelling rule does this course follow for the six women's names?",
            options: [
              "Follow the source being cited, and print the variant",
              "Standardise on the most common form and note nothing",
              "Use each woman's married name throughout, for consistency",
              "Use the Computer History Museum's catalogue spelling as the authority",
            ],
            correctIndex: 0,
            explanation:
              "Silent normalisation makes a course look tidy and makes it useless to the next person, who needs to know which strings to type.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "Which surname spelling does this course use, and why?",
            options: [
              "Lichterman, because three sources agree on it",
              "Licherman, because the ENIAC Programmers Project was founded by Kleiman",
              "Teitelbaum only, because the maiden name is disputed",
              "Both alternately, so that neither source is privileged",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman's TED piece, APS News and Penn Today all print Lichterman. The single variant on the project site is best read as a typing slip.",
            sourceLessonSlug: "six-names-and-their-variants",
          },
          {
            prompt: "On what do the IEEE Spectrum and Mental Floss accounts of the selection disagree?",
            options: [
              "Whether six or five were chosen at first",
              "Whether the programmers came from the pool of human computers",
              "Whether the pool numbered around a hundred",
              "Whether the assignment was to program the machine",
            ],
            correctIndex: 0,
            explanation:
              "IEEE Spectrum says six were chosen. Mental Floss says five were selected in spring 1945, with a sixth added later, and adds the word randomly.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Why does this course leave the word randomly out of its own prose?",
            options: [
              "No document supports the procedure it describes",
              "Because random selection would have been unlawful under Army regulations",
              "Because the sources that use it disagree about the year",
              "Because it makes the six sound less qualified than they were",
            ],
            correctIndex: 0,
            explanation:
              "A claim about a selection procedure needs the paper a procedure leaves, and repeating the word would make this course the next citation for it.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "Why does this course decline the argument about which machine was first?",
            options: [
              "It is settled by a definition, not a document",
              "Because the machine's own designers never claimed priority for it",
              "Because the answer would change which of the six deserves most credit",
              "Because the relevant patents remain in dispute",
            ],
            correctIndex: 0,
            explanation:
              "Kleiman's subtitle says first modern computer and Penn Today says first electronic computer. Nothing in the credit question depends on the answer.",
            sourceLessonSlug: "chosen-from-the-computers",
          },
          {
            prompt: "What did Kleiman say was absent when the six began work?",
            options: [
              "Languages, manuals, compilers and operating systems",
              "Any written description of what the machine was intended to compute",
              "The machine itself, which was not delivered until February 1946",
              "Any other staff, since the engineers had left the project",
            ],
            correctIndex: 0,
            explanation:
              "Her sentence lists all four and concludes that the women had to figure out how to program the machine on their own.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Why does the credit question in this course end up resting on captions?",
            options: [
              "The work left no signed artifact",
              "Because the Army classified every written record of the project until 1986",
              "Because the six never published anything under their own names",
              "Because photographs are the only evidence archives preserve from wartime projects",
            ],
            correctIndex: 0,
            explanation:
              "A program was a physical configuration of the machine, so there was no listing or manuscript to carry a name. What survives is the machine and the photographs.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "Why must the Army's direct-programming caption be handled carefully in this course?",
            options: [
              "Its two subjects are not among the six",
              "Because the collection gives no names for the two women shown",
              "Because the photograph is not in the public domain",
              "Because the caption was written in 1946 and uses obsolete vocabulary",
            ],
            correctIndex: 0,
            explanation:
              "Ester Gerston and Gloria Gordon Bolotsky were Army computers and later second-generation programmers. The caption is evidence about the practice, not about the six.",
            sourceLessonSlug: "no-language-no-manual",
          },
          {
            prompt: "What did the machine do before it was shown to the press?",
            options: [
              "Solved a Los Alamos problem on 10 December 1945",
              "Computed a ballistic trajectory for the Ballistics Research Laboratory's firing tables",
              "Nothing; the press demonstration was its first operation",
              "Ran a public test at the Moore School for the university's trustees",
            ],
            correctIndex: 0,
            explanation:
              "APS News gives that date and origin. The work was classified, so the first thing the machine did could not be published.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What rule does this course draw from the gap between the APS headline and its sentences?",
            options: [
              "Quote the sentence, not the headline",
              "Prefer the headline, which an editor has checked more carefully",
              "Cite both, so the reader can weigh the compression",
              "Treat a headline as the author's own summary of the evidence",
            ],
            correctIndex: 0,
            explanation:
              "The headline calls the December run the first program by the six. The sentences read give only the date and the origin of the problem.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "Why does the secrecy of the first run put weight on the February event?",
            options: [
              "It was the first chance anybody could be named publicly",
              "Because the press had been excluded from the December run and demanded access",
              "Because the machine was reconfigured between the two occasions",
              "Because the six were assigned to the project only after the first run",
            ],
            correctIndex: 0,
            explanation:
              "Classified work cannot be published, so the demonstration and its coverage were the entire public record of the machine for a time.",
            sourceLessonSlug: "the-first-program-was-secret",
          },
          {
            prompt: "What do the two published dates for the press day and the calendar together show?",
            options: [
              "Martin's sentence disagrees with itself",
              "That APS News has the correct date and Martin does not",
              "That the demonstration ran over two days",
              "That neither source can be relied upon for anything",
            ],
            correctIndex: 0,
            explanation:
              "14 February 1946 was a Thursday and 15 February a Friday, so the Saturday in Martin's sentence conflicts with her own date. It says nothing about APS News.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What does this course write in its own voice when it refers to the demonstration?",
            options: [
              "Mid-February 1946",
              "15 February 1946, following the more recent publication",
              "14 February 1946, following the scholarly source",
              "Early 1946, avoiding the month entirely",
            ],
            correctIndex: 0,
            explanation:
              "It quotes each source's own date when quoting, and does not split the difference or prefer one publication over the other.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "What question does this course recommend asking first when two sources conflict?",
            options: [
              "Which claims can be tested cheaply?",
              "Which source has the better reputation in its field?",
              "Which source was published closer to the event?",
              "Which source has the larger bibliography?",
            ],
            correctIndex: 0,
            explanation:
              "Rank the claims by the cost of an independent test and run the cheap ones first. A day name costs ten seconds and a calendar.",
            sourceLessonSlug: "a-date-that-does-not-check-out",
          },
          {
            prompt: "Why does this course refuse to say Martin's group photo is the ENIAC OFFICIALS photograph?",
            options: [
              "Neither source supplies what would match them",
              "Because the two photographs show different numbers of men",
              "Because Martin explicitly identifies hers as a different image",
              "Because the Army collection dates its photograph to 1947",
            ],
            correctIndex: 0,
            explanation:
              "Martin gives no caption or reference number and the collection gives no date. It is a good hypothesis and not a finding.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "On Martin's account, what did the newspapers publish instead of the eight-man group photograph?",
            options: [
              "Machine-room pictures",
              "Portraits of the Army officers who had funded the project",
              "Photographs of two women at the main control panel",
              "No photographs at all, since the coverage was text only",
            ],
            correctIndex: 0,
            explanation:
              "She describes pictures of a huge room with wires, switches and lights, with people walking around inside and looking very small.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What is the difference between the absence claim and the asymmetry claim?",
            options: [
              "One says not mentioned, the other says named unequally",
              "One concerns the press and the other concerns the demonstration",
              "One is attributed to Kleiman and the other to Martin",
              "One is about photographs and the other about the spoken programme",
            ],
            correctIndex: 0,
            explanation:
              "A page with no names at all supports the absence claim and says nothing about asymmetry, so collapsing them removes the guidance a researcher would use.",
            sourceLessonSlug: "two-photographs-of-eight-men",
          },
          {
            prompt: "What does the ENIAC OFFICIALS caption give each of its eight subjects?",
            options: [
              "A name and a post",
              "A name and a description of what he did on the project",
              "A post only, since the men are identified by position in the frame",
              "A name only, with the posts added later by the archive",
            ],
            correctIndex: 0,
            explanation:
              "Chief Engineer, Supervisor, Liaison Officer and so on. That is the feature the comparison with the women's captions turns on.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What distinction does the three-caption exercise turn on?",
            options: [
              "What people are, versus what they are doing",
              "Whether a caption names a photographer as well as a subject",
              "Whether the photograph is in colour or black and white",
              "Whether the caption fits on a single printed line",
            ],
            correctIndex: 0,
            explanation:
              "A post outlasts the afternoon and an activity does not, so one caption enters an index as a person with a role and the other as a person in a room.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "What caveat does the exercise attach to the Army collection's captions?",
            options: [
              "They are today's wording, not 1946 originals",
              "They were written by the newspapers rather than by the Army",
              "They have been edited to remove the women's names",
              "They cannot be quoted without written permission",
            ],
            correctIndex: 0,
            explanation:
              "The bracketed married names in one of them read like a later hand, so the exercise teaches caption reading rather than 1946 press practice.",
            sourceLessonSlug: "read-three-captions",
          },
          {
            prompt: "How does this course treat the claim that the 1946 captions named men and not women?",
            options: [
              "It attributes it to Kleiman every time",
              "It asserts it, since two of her published accounts agree on it",
              "It omits it, since no original caption has been read",
              "It attributes it to the Army Research Laboratory's collection",
            ],
            correctIndex: 0,
            explanation:
              "That was the condition on which the course was approved: no lesson states it as fact until an original caption has been read, and none has.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What do Kleiman's two accounts differ on?",
            options: [
              "The dating of the photographs",
              "Whether the captions named men and did not name women",
              "Whether the Army took the photographs for publicity",
              "Whether she saw the photographs at all",
            ],
            correctIndex: 0,
            explanation:
              "In 2018 about six months measures from the unveiling to the photograph; in 2022 it measures from the war's end to the decision to publicize.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "Which two details does the popular retelling add that Kleiman's accounts do not contain?",
            options: [
              "National publication, and that every man was named",
              "The date of the photographs, and the name of the photographer",
              "The museum's location, and the cofounder's name",
              "The number of photographs, and where they are now held",
            ],
            correctIndex: 0,
            explanation:
              "Her text says the Army took the photographs to publicize the machine, and that only the men's names were listed. Both additions change what you go looking for.",
            sourceLessonSlug: "what-kleiman-says-and-what-she-does-not",
          },
          {
            prompt: "What kind of evidence is the remark that the women were models?",
            options: [
              "Testimony",
              "A catalogue record held by the Computer History Museum",
              "A contemporaneous note made at the time of the conversation",
              "An institutional position stated on the museum's behalf",
            ],
            correctIndex: 0,
            explanation:
              "A remark one person recalls, published decades later in her own account. It is not a filing, a misfiling or an institutional position.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "Why does this course not name the museum cofounder?",
            options: [
              "Kleiman withheld the name",
              "Because the museum's policy forbids identifying its founders",
              "Because the name appears in no reachable source",
              "Because the cofounder has publicly denied the remark",
            ],
            correctIndex: 0,
            explanation:
              "Supplying a name the source deliberately withheld, attached to a remark nobody else witnessed, crosses the line from reporting testimony to accusing a person.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "What distinction does the models remark collapse?",
            options: [
              "Posed, versus not the workers",
              "Programmer, versus operator of the control panel",
              "Publicity photograph, versus technical record",
              "Army employee, versus university employee",
            ],
            correctIndex: 0,
            explanation:
              "The Army's own caption says two women posed to show direct programming, and those women were programmers. Posing for a photograph of your own work does not make you a model.",
            sourceLessonSlug: "the-models-remark",
          },
          {
            prompt: "How many places does this course name where an original 1946 caption might be read?",
            options: [
              "Four",
              "One, the Hagley Museum and Library Archives",
              "Two, Hagley and the Army's Technical Library",
              "None, since the course concludes no original survives",
            ],
            correctIndex: 0,
            explanation:
              "Hagley Accession 1825 boxes 9a and 382, the Army Research Laboratory's Technical Library archives, the Daily Pennsylvanian of 4 March 1947, and the New York Times of 15 February 1946.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "Why would one caption naming eight men and no women not settle the claim?",
            options: [
              "The claim is a generalization over a set",
              "Because a single caption could have been written by anybody",
              "Because the Army's captions differ from the newspapers' captions",
              "Because the claim concerns the demonstration rather than the photographs",
            ],
            correctIndex: 0,
            explanation:
              "A generalization is settled by reading enough of the set. One page would strengthen the claim considerably and would not prove it.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What makes the absence test give opposite answers in two different cases?",
            options: [
              "Whether the past had reason to produce paper",
              "Whether the people involved are still alive to be asked",
              "Whether the relevant archive survived the war",
              "Whether the question concerns a person or an institution",
            ],
            correctIndex: 0,
            explanation:
              "A publicity campaign produces captions, so their absence is about access. A private conversation produces nothing, so silence there tells you nothing.",
            sourceLessonSlug: "the-document-that-would-settle-it",
          },
          {
            prompt: "What prompted Kleiman to look for the six?",
            options: [
              "An unnamed photograph",
              "A lecture on the history of computing at her university",
              "A misidentified catalogue record at the Computer History Museum",
              "An Army press release found in a court file",
            ],
            correctIndex: 0,
            explanation:
              "A caption that named nobody is what made her look, so the absence in the record is both the injury and the prompt.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "What limit does this course record about its own evidence base?",
            options: [
              "It does not quote the six themselves",
              "It could not reach any of the Army's published photograph captions",
              "It relies entirely on a single published account",
              "It has not established the year of the demonstration",
            ],
            correctIndex: 0,
            explanation:
              "Their oral histories exist at the Computer History Museum and at IEEE and were not read here, so the six are described through other people's accounts.",
            sourceLessonSlug: "finding-them",
          },
          {
            prompt: "Which of the correction's instruments reaches a 1946 caption?",
            options: [
              "None of them",
              "The Computer History Museum's catalogue record",
              "Penn Today's eightieth anniversary article",
              "The 1997 hall of fame induction of all six",
            ],
            correctIndex: 0,
            explanation:
              "A 1946 caption is not a thing anybody can reopen, which is lesson 21's structural fact about the available instrument, stated here with dates.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "Which instrument does this course say changes the most searches?",
            options: [
              "A catalogue record change",
              "A documentary film shown at festivals",
              "A hall of fame induction covering all six",
              "A university's anniversary article",
            ],
            correctIndex: 0,
            explanation:
              "It reaches Trouillot's assembly moment, so everything retrieved downstream inherits it. It is also the quietest instrument on the list.",
            sourceLessonSlug: "instruments-of-a-correction",
          },
          {
            prompt: "What are the three columns of this course's ledger?",
            options: [
              "Documented, attributed, unread",
              "Primary, secondary, tertiary",
              "Settled, contested, abandoned",
              "Verified, reported, fabricated",
            ],
            correctIndex: 0,
            explanation:
              "Documented claims are assertable in the course's own voice, attributed ones are printed as what a named source says, and unread ones name what is missing.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "What is the narrow sentence this course is willing to assert about 1946?",
            options: [
              "Men were given posts and women were described by activity",
              "The captions named the men and did not name the women",
              "The photographs were distributed to newspapers across the country",
              "The six were deliberately excluded from the demonstration's programme",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is supported by captions the course read. The stronger version is a claim about a set of 1946 documents nobody has read.",
            sourceLessonSlug: "the-ledger",
          },
          {
            prompt: "Why does this course refuse to pad the thin part of the record?",
            options: [
              "The thinness is itself the finding",
              "Because a reviewer would detect the additions",
              "Because padding would exceed each section's word budget",
              "Because the material concerns living people",
            ],
            correctIndex: 0,
            explanation:
              "Padding would not honour anybody and would make the course useless to the next person who goes looking for the caption, who is the one who can finish it.",
            sourceLessonSlug: "the-ledger",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `who-were-the-computers`. Check A is the course's build condition: closing it
// is what would let sections 3 and 4 be rewritten.
//
//  A. key "eniac-1946-caption-original" · severity HIGH · lesson "the-document-that-would-settle-it"
//     title: Read an original 1946 caption from the Army's ENIAC publicity photographs.
//     quote: "The claim is that the 1946 captions named the men and not the women. What would
//            settle it is an original caption, read."
//     claim: The course ATTRIBUTES to Kathy Kleiman, in every lesson that touches it, the claim
//            that the 1946 photograph captions named men and did not name women. It asserts it
//            nowhere. That attribution is the condition BAM approved the course on.
//     question: Do the original 1946 captions on the Army's ENIAC publicity photographs name the
//            men and not the women? Quote at least one caption verbatim, with its date.
//     stakes: It is the claim the whole subject rests on. Closing it moves the course's central
//            claim from attributed to documented and would let sections 3 and 4 be rewritten.
//            Asserting it without the document would put an unread caption into the catalog as a
//            fact, which is the one thing this course is built not to do. NOTE for whoever closes
//            it: one caption STRENGTHENS the claim and does not prove it, because "the 1946
//            captions" is a generalization over a set. Lesson 12 says so in those words.
//     needs: the verbatim wording of at least one original 1946 caption; its date; the photograph
//            it accompanied; and whether it was an Army caption or a newspaper's.
//     where: Hagley Museum and Library Archives, Acc. 1825, Sperry Rand v. Honeywell court
//            documents, boxes 9a and 382 (Martin, 1995, cites her 1946 clippings there); the U.S.
//            Army Research Laboratory Technical Library archives behind the scans at
//            ftp.arl.army.mil/ftp/historic-computers/; the Daily Pennsylvanian archive, vol. LX
//            no. 72, 4 March 1947 (per the Computer History Museum record); the New York Times of
//            15 February 1946 (quoted by APS News, page not read here).
//
//  B. key "eniac-demonstration-date" · severity medium · lesson "a-date-that-does-not-check-out"
//     title: Was the ENIAC press demonstration on 14 or 15 February 1946?
//     quote: "Outside a quotation it writes mid-February 1946."
//     claim: APS News gives 15 February 1946. Martin (1995) gives "Saturday, February 14, 1946".
//            14 February 1946 was a THURSDAY and 15 February a FRIDAY, checked against the
//            calendar in this pass, so Martin's day name conflicts with her own date. The course
//            teaches the conflict and writes mid-February 1946 in its own voice.
//     needs: a dated document from the event itself, with the date on its face.
//     where: the Moore School's invitation or programme; the Army's press release; a dated
//            newspaper page reporting the demonstration (the Hagley clippings in check A would
//            answer this at the same time).
//
//  C. key "eniac-six-selection" · severity medium · lesson "chosen-from-the-computers"
//     title: Who chose the six, when, and on what basis?
//     quote: "Neither source names who chose, or on what basis."
//     claim: IEEE Spectrum (2022) says six women were chosen from approximately 100 human
//            computers. Mental Floss (2013) says the Army "randomly selected five women computers
//            out of the 100 or so workers (later adding a sixth woman to the team)" in spring
//            1945. The course prints six chosen from about a hundred, attributes the season to
//            Mental Floss, and does NOT print "randomly", because no source shows the paper a
//            selection procedure would leave.
//     stakes: "Randomly" is now in general circulation. If it is wrong, every repetition makes it
//            harder to dislodge; if it is right, the document that shows it is worth naming.
//     needs: the personnel action, memo or project file recording the assignment, with names and
//            a date; and whatever it says about the basis for the choice.
//     where: University of Pennsylvania and Moore School archives; Army Ordnance and Ballistics
//            Research Laboratory records at the National Archives; the ENIAC project files cited
//            in the Sperry Rand v. Honeywell litigation.
//
//  D. key "eniac-december-1945-operators" · severity low · lesson "the-first-program-was-secret"
//     title: Who set up the 10 December 1945 Los Alamos run?
//     quote: "the sentences this course read give the date and the origin of the problem, and they
//            do not say who configured the machine for it"
//     claim: APS News says the machine was first put to work on 10 December 1945 on a problem from
//            the Army's Los Alamos Laboratory. Its HEADLINE attributes the first program to the
//            six; its sentences do not name the operators, so the course does not either.
//     needs: an operating log, service record or report naming who configured the machine for that
//            run. Also: whether the run had a project designation (the popular retelling's label
//            for it appears in NO source read here, so the course prints no name for it).
//     where: Los Alamos and Ballistics Research Laboratory records; ENIAC service logs; the
//            Moore School project files.
//
//  E. key "eniac-models-remark-variants" · severity low · lesson "the-models-remark"
//     title: Document the retellings that move the museum episode to another city.
//     quote: "Other retellings of this episode place the scene in other cities and give the
//            speaker other titles. This course met those only in search results and did not fetch
//            the pages, so it does not reproduce their details."
//     claim: The course teaches the DOCUMENTED drift between two tellings it fetched, Mental Floss
//            2013 and TED Ideas 2018, and explicitly refuses to assert further drift from search
//            snippets.
//     needs: the fetched text of each retelling that places the episode elsewhere, with its
//            publication, author and date, so the drift can be shown rather than claimed.
//     where: the College Board summary the brief met as a snippet; other secondary retellings;
//            Kleiman's 2022 book, which this course has not read.
//
//  F. key "eniac-six-oral-histories" · severity medium · lesson "finding-them"
//     title: Read the six programmers' own oral histories.
//     quote: "This course does not quote the six. Their oral histories exist, at the Computer
//            History Museum and at IEEE, and nobody building this course has read them."
//     claim: Every description of the six in this course comes from somebody else's account. The
//            course says so in lesson 13 and lists the oral histories as unread in lesson 15.
//     stakes: A course about who gets to speak in a record, assembled entirely from other people's
//            descriptions, has the defect it is teaching about. Closing this would let the six be
//            quoted in their own words.
//     needs: the oral history transcripts or recordings, with their catalogue identifiers.
//     where: Computer History Museum oral history collection; IEEE History Center; the ENIAC
//            Programmers Project interviews with four of the six.
//
//  G. key "eniac-documentary-producer-spelling" · severity low · lesson "instruments-of-a-correction"
//     title: John or Jon Palfreman on the documentary's credits?
//     quote: "Other retellings spell the first of those Jon."
//     claim: Kleiman's 2018 TED Ideas text names the producers as John Palfreman and Kate McMahon.
//            The course prints John and flags the variant, per its own lesson-3 rule.
//     needs: the spelling on the film's own credits.
//     where: The Computers (2014) end credits; the ENIAC Programmers Project site.
//
//  H. key "eniac-moore-school-pay-comparison" · severity low · lesson "why-the-job-was-open"
//     title: What were men in comparable posts at the Moore School paid?
//     quote: "So this course prints no Moore School pay gap."
//     claim: APS News gives the computers about $1,620 a year. No source read here gives men's pay
//            at the Moore School, so the course states the salary and prints no comparison, and
//            says in the lesson that the gap is plausible and undocumented.
//     needs: a payroll or personnel record showing comparable male salaries at the Moore School or
//            the Ballistics Research Laboratory in the same years.
//     where: University of Pennsylvania archives; Army Ordnance payroll records.
//
// RESOLVED IN THIS BUILD PASS, so NO check is needed (items the brief left open):
//  - HOW THEY PROGRAMMED IT. The brief's evidence section carried no quotation for "no programming
//    language and no manual". Re-fetching the TED Ideas piece produced: "There were no programming
//    languages, no manuals, no compilers and no operating systems, so the women had to figure out
//    how to program this massive machine on their own." Re-fetching APS News produced: "They broke
//    up the differential equation into many small steps and figured out how to set up the
//    operations in parallel across the cables, switches, and panels." Mental Floss adds the digit
//    trays. Section 2, lesson 5, is built on those three plus an Army caption.
//  - THE THIRD ARL CAPTION. Re-fetching the Army collection confirmed "Two women posed to show the
//    'direct programming' of ENIAC done by setting hundreds of wires and thousands of switches",
//    Ester Gerston and Gloria Gordon Bolotsky, "both 'Computers' for the Army during WWII and
//    later second-generation ENIAC Programmers". That caption turns section 3's exercise into a
//    three-caption comparison and gives lesson 11 the posed-versus-model distinction.
//  - MENTAL FLOSS. Re-read directly, as the brief instructed. URL corrected to article/53160. The
//    quotation is "I was told they were models, 'Refrigerator Ladies', posing in front of the
//    machine to make it look good" (punctuation adapted; the original uses dashes). The same page
//    supplied a sixth spelling of the six names and the five-plus-one selection account in check C.
//  - PENN TODAY. Title, author and the "first digital-age programmers" phrase confirmed by fetch.
//    The page as read states 11 FEBRUARY 2026, against the brief's 10 February; the citation uses
//    the date on the page as read.
//  - THE DAY OF THE WEEK. Computed in this pass: 14 February 1946 was a Thursday, 15 February a
//    Friday, 10 December 1945 a Monday, 4 March 1947 a Tuesday. Lesson 7 teaches the first two.
//  - "PROBLEM A". NOT PRINTED anywhere. It appears in no source read for this course, so lesson 6
//    gives the December 1945 run no name and says why.
//
// FOR THE REGISTERING AGENT (outside this file):
//  - SEED ENTRY for scripts/seed-courses.ts, its own call (the CREDIT array does not pass
//    visibility), modelled on `the-partner-and-the-prize`:
//
//      await seedAuthoredCourse(db, {
//        tenantId: learnWitus,
//        instructorId,
//        slug: "who-were-the-computers",
//        course: WHO_WERE_THE_COMPUTERS_COURSE,
//        category: "Culture & History",
//        additionalCategories: ["AI & Technology", "Science & Math"],
//        navigationMode: "linear",
//        price: 0,
//        priceType: "free",
//        visibility: "private",
//        publishHoldReason:
//          "Private study for BAM (plans/83). Its central claim, that the 1946 ENIAC photograph " +
//          "captions named the men and not the women, is attributed to Kathy Kleiman throughout " +
//          "and asserted nowhere, because no original caption has been read. Built from public " +
//          "sources: the U.S. Army Research Laboratory's public-domain image captions, APS News, " +
//          "IEEE Spectrum, TED Ideas, Mental Floss, Penn Today and Martin (1995).",
//        seriesSlug: "credit",
//        seriesTitle: "Credit: Who Gets Named",
//        seriesOrder: <next free>,
//        // NO seriesCode / seriesPosition / seriesTrack: BAM, 2026-09-19, private courses carry no
//        // CREDIT code. Confirm check-series-codes accepts the coded-course guard with this entry.
//      });
//
//  - NO MIGRATION. `pnpm seed:courses` only.
//  - CITATIONS: add `who-were-the-computers` to STAGED_COURSES in src/lib/citations.ts, then run
//    `pnpm gen:citations` once it is seeded. Every teaching lesson carries an APA 7 `## Sources`
//    block, so a staged course producing zero citations would be a bug, not an authoring gap.
//  - STANDARDS: this is a primary-source history and source-criticism course (sourcing,
//    corroboration, chronology, claim versus evidence, reading a caption as a record), so per the
//    repo rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is
//    mapped it needs a one-line BACKLOG entry in scripts/check-standards-coverage.ts or `pnpm
//    lint` fails on it.
//  - SPEC: `npx tsx scripts/audit-course.ts who-were-the-computers --spec` cannot see the slug
//    until the seed entry exists. Computed by hand in this pass against the same formula the audit
//    uses (round(words / 35), clamped 40 to 100, pool within 90 percent of target):
//      Section 1  2518 words · target 72 · pools 67 (min 65)   OK
//      Section 2  2340 words · target 67 · pools 61 (min 61)   OK
//      Section 3  2558 words · target 73 · pools 66 (min 66)   OK
//      Section 4  3036 words · target 87 · pools 79 (min 79)   OK
//      Section 5  2635 words · target 75 · pools 68 (min 68)   OK
//      Final      pools 43, serves 10, passes at 80            OK
//    384 questions total, every one carrying `explanation` and a `sourceLessonSlug` that resolves
//    to a teaching lesson in this file, and every teaching lesson is assessed inside its OWN
//    section as well as in the final.
//  - VISIBILITY: private, and it stays private. Part E4 of the rubric: a public flip is a
//    deliberate act needing BAM's say-so for this subject, and for this one it would also need
//    check A closed first.
