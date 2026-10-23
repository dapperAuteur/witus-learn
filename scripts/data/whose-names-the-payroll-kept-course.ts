import type { AuthoredCourse } from "./authored-course";

// "Whose Names the Payroll Kept: the Central Pacific's Chinese Workers and a Form That Cannot Hold
// a Person" (Culture & History, with Research & Reporting alongside). Slug to be registered:
// `whose-names-the-payroll-kept`. PRIVATE study, by BAM's approval on 2026-09-21 of the brief at
// plans/future-courses/culture-and-history/uncredited/2026-09-18-central-pacific-chinese-workers-brief.md, approval
// conditional on Crocker's testimony being fetched FIRST, which it was (brief section 6B).
// Rubric: gates pass; B 3/3/3/3/3/3 = 36; form C6, standalone course.
// RESEARCH TIER 1 (not health, law, safety, money or credential-adjacent), with every contested
// claim quoted and attributed rather than summarised.
// NO series code and NO series position: private courses carry no CREDIT code (BAM, 2026-09-19).
// Every `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// THE SPINE, and the order is load-bearing:
//  1. THE FORM THAT CANNOT HOLD A PERSON. Two Central Pacific payroll sheets, twenty months apart,
//     read as page images. The NAMES column holds a head man, a Chinese firm, or, by November 1866,
//     a NUMBER, and on three lines the white labour contractor's own surname. The OCCUPATION column
//     holds a white foreman's name, proven by one man, John Keating, appearing in it on BOTH sheets
//     twenty months and three head men apart.
//  2. THE EMPLOYER EXPLAINS IT HIMSELF, and the cross-examination is the lesson. Built around the
//     exchange at printed p. 675, with the QUESTION first, because that is the thing every retelling
//     drops: "Does the same thing obtain with the white men?" "No, sir; we get the individual names
//     of the white men." The company had a way to record a labourer's name. It used it on one group.
//  3. WHAT THE RECORD CANNOT TELL YOU, taught as arithmetic rather than lament. The famous worker
//     total is a count of head men times an assumed crew size; the famous death toll is a weight of
//     bones divided by an assumed body weight. UNKNOWN, NOT SMALLER, and unknown for the same reason
//     the names are.
//  4. Then, deliberately SHRUNK to three lessons: the same practice at the ceremony (ten miles, eight
//     recorded names), the photograph (ONE lesson, because it is the weakest evidence in the subject
//     and the brief says so), and who corrected the record afterwards.
//
// FETCH-OR-DO-NOT-CITE. The brief did the research in two passes: the payroll pass (section 6A,
// 2026-09-20) and the testimony pass (section 6B, 2026-09-21). This build RE-FETCHED and re-read the
// following on 2026-09-20, independently, so that nothing here rests only on a summary:
//  - S. Rept. 44-689, printed pp. 671, 675 and 724, pulled as IIIF page images at 1974 x 3379 from
//    the Internet Archive copy `reportofjointspe00unit` and read line by line. Every quotation in
//    section 2 of this course was confirmed AGAINST THE PAGE IMAGE by this pass, including the
//    running head "CHINESE IMMIGRATION. 675", the examiner heading "By Mr. PIPER:", and the exact
//    wording "We would not know Ah Sin, Ah You, Kong Won, and all such names."
//  - Printed p. 681 ("There are 26 working-days in a month", the $9 provisions answer, and the
//    referral to Sisson, Wallace & Co.), read as a page image by this pass.
//  - chineserailroadworkers.stanford.edu/faqs/ and /virtual/, both re-fetched in full by curl.
//  - cprr.org/Museum/Rebuttal_William_Chew.html, re-fetched by curl, and every Chew quotation and
//    every bracketed CPRR.org editors' comment below re-read on it.
//  - Obenzinger's essay PDF, located and downloaded at
//    chineserailroadworkers.stanford.edu/wp-content/uploads/2020/01/Obenzinger-Utah-Essay.pdf, 20
//    pages, printed page numbers identical to PDF page numbers.
//  - nps.gov/gosp/learn/historyculture/a-moment-in-time.htm, re-fetched, which supplies the NPS
//    title for the photograph and the Oakland Museum holding of Russell's negatives.
//
// NOT re-fetched here, and taken from the brief's own VERIFIED page-image readings on 2026-09-20 and
// 2026-09-21: the two payroll sheets themselves (Pay Roll No. 102 and No. 331), the Stanford Digital
// Repository catalogue records, and S. Rept. 44-689 at printed pp. 668, 669, 674, 723 and 727-728,
// plus the committee's journal at printed p. 4 and p. 6.
//
// THE FIVE SECOND-HAND ERRORS THIS COURSE MUST NOT REPEAT (brief 6B). Each is handled explicitly:
//  1. "We COULD not know Ah Sin, Ah You, Kong Won" is a misquotation. The page reads WOULD. Lesson 5
//     prints "would" and teaches the difference, because the course's argument is about choice.
//  2. The sentence that follows and is usually dropped, "It is not done in that way because they are
//     slaves," is printed in lesson 5, with the question that provoked it.
//  3. The foreman passage is CONTRADICTED by a silent eighteen-word ellipsis in one 2004 rendering.
//     The page says the nightly count came from a CHINESE BOOK-KEEPER, one of the workmen, who worked
//     in the pit and came up with his book. Lesson 7 carries this as its own beat.
//  4. "Our maximum strength ... very nearly approached 10,000 men" is CROCKER (p. 669), not
//     Strobridge; "furnished pretty much all the Chinamen that we worked" is STROBRIDGE (p. 724), not
//     Crocker. Lessons 8 and 9 attribute both correctly and say where the error came from.
//  5. The date is 14 NOVEMBER 1876. February 1877 is when the Senate ordered the report printed.
//     Lesson 6 teaches the distinction.
//
// HOW EACH REPORTED OR UNVERIFIED ITEM IS HANDLED (rubric Part H):
//  - Every S. Rept. 44-689 quotation printed in this course was read on a PAGE IMAGE. Two figures
//    that were available only in the volume's OCR text transcription (Strobridge's own headcounts at
//    p. 723) are printed WITH that reading method named in the lesson and in the citation.
//  - E. B. Crocker's 14 January 1867 letter to Huntington is REPORTED through Karuka (2020) and is
//    attributed to him in the text. The letter was not read.
//  - Karuka's claim that Clark Crocker was the "& Co." in Sisson, Wallace & Co. is REPORTED and does
//    NOT appear anywhere in this course. It is research check D.
//  - Whether Sisson, Wallace & Co. was a Sacramento house is UNRESOLVED: Crocker, testifying in San
//    Francisco, calls it "a mercantile firm here". The course asserts neither city. Research check C.
//  - The newspapers behind the 1868 and 1870 death reports were NOT read. They reach this course only
//    as Stanford's FAQ reports them, and every sentence says so.
//  - The 1919 identification of three named workers is VERIFIED as Stanford's CAPTION and REPORTED as
//    to the underlying record, which was not traced. Lesson 14 says exactly that. Research check G.
//  - The "one in 10 workers" figure is REPORTED, unsupported by the project's own pages, and appears
//    only in lesson 10 as an example of drift.
//  - Edson T. Strobridge's argument about the photograph's timing is REPORTED from an enthusiast
//    site, is attributed to him by name in lesson 13, and is never adopted.
//  - No living private individual is named or quoted. The 2019 speaker is described and not named.
//
// PERIOD LANGUAGE. The sources quote contempt and racial slurs. Every one of them is quoted once,
// where the shape of the sentence is itself the evidence, and the lesson says why it is quoted.
// Three of them: the manuscript payroll heading "China Labour"; the committee's "Just like mules?",
// which is the question that produces the sentence everyone repeats and which Crocker's own answer
// refuses; and the 1928 *Southern Pacific Bulletin* line, whose two halves are the whole argument.
//
// NAMING DECISIONS, made deliberately and recorded so they read as decisions:
//  - NAMED: people who appear in the documents this course reads (Charles Crocker, James
//    Strobridge, John Keating and the other foremen, Hung Wah and the other head men, A. W. Sisson,
//    Representative William A. Piper, Col. F. A. Bee), the three men in the 1919 caption (Ging Cui,
//    Wong Fook, Lee Shao), the deceased public figures in the 1969 account (Philip Choy, Thomas
//    Chinn), the deceased photographer whose corrective project Obenzinger documents (Corky Lee),
//    and the named authors whose published work the course quotes or disputes (William F. Chew,
//    G. J. "Chris" Graves, Manu Karuka, Hilton Obenzinger, Edson T. Strobridge). Removing an
//    artist's or an author's name from a course about credit would be perverse, so they stay.
//  - NOT NAMED: the living descendant who gave the 2019 opening address. She is described and not
//    quoted, and lesson 14 says in the text why. The 1969 speaker is left as "the US Secretary of
//    Transportation" because the office is the point and the name adds nothing.
//
// House style, matching who-gets-nominated-course.ts and drew-blood-bank-course.ts: `section` on
// every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6
// lesson-specific terms; an APA 7 `## Sources` block WITH LOCATORS on every lesson; a quiz per
// teaching section (pool sized to the audit density target, serving 5, passing 80, shuffled) plus a
// final pooling 44 and serving 10, placed LAST; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are written SHORT and distractors long and specifically wrong,
// so check-longest-option passes by construction. No em dashes in user-visible copy.
export const WHOSE_NAMES_THE_PAYROLL_KEPT_COURSE: AuthoredCourse = {
  title:
    "Whose Names the Payroll Kept: the Central Pacific's Chinese Workers and a Form That Cannot Hold a Person",
  description:
    "One sheet of paper, twenty-three inches by thirteen and three quarters, handwritten, headed China Labour, and dated March 1865. It is a Central Pacific Railroad payroll, and the printed line across the top of it promises to pay the sums set opposite our respective names. There are eleven names on it. Divide the man-days it records by the length of the month its own arithmetic uses and you get about five hundred and seventy men. Twenty months later the same firm's sheet has stopped writing names at all in several places: the entries read Hung Wah number three, Ah Wong number fifty-three, Sisson number fifty-seven, which is the white labour contractor's own surname with a number after it. This course reads both sheets column by column, and then it does the thing the retellings of this story almost never do. It opens the employer's sworn testimony and reads the question as well as the answer. In San Francisco on 14 November 1876, a congressman cross-examining Charles Crocker asked whether the same practice applied to white workers, and Crocker said no, sir, we get the individual names of the white men. The company had a way to record a labourer's name. It had used it, on one group of men. That single exchange turns the whole subject from a story about a record that could not be kept into a story about a record that was not kept, and the course builds on it: a Chinese book-keeper who worked in the pit and brought his own book up every night with the gang's days in it, a wage the sheet lets you derive and the testimony then states outright, a fining system, and a wage ladder the contractor recites under oath. Then it takes apart the two numbers everybody repeats. Twenty thousand workers is a count of gang bosses multiplied by an assumed crew size. Twelve hundred dead is a reported weight of bones divided by an assumed weight of a man. Neither number makes the losses smaller. Both make them unknown, and unknown for exactly the reason the names are. The famous photograph gets one lesson, and not the first one, because the documents settle what the photograph is usually asked to prove. You will finish able to read a manuscript form and say what each column is really recording, to check a quotation against the page it came from and notice an ellipsis that changes its meaning, and to take a circulating number back to the arithmetic that made it.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — A form that cannot hold a person
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-form-and-its-promise",
      title: "1 · The form, and the promise printed on it",
      section: "Section 1 · A form that cannot hold a person",
      body: `Start with the document, because everything else in this course is a way of checking it.

**Pay Roll No. 102** is one sheet, twenty-three inches by thirteen and three quarters, filled in by hand, and headed in manuscript across the top left **"China Labour"**. It belongs to the California State Railroad Museum Library and Archives in Sacramento, it was digitised by California Revealed, and anyone can open it: Internet Archive item \`cscrm_000116\`. The embedded text recognition on the scan is worthless against the handwriting, so every reading below comes off the image.

**The printed column headings, in order:** NAMES. OCCUPATION. When Paid. From what date. To what date. No. of days. Rate per diem. TOTAL. SIGNATURES.

**The printed line the men were signing under:** "Received from C. CROCKER, Contractor, Central Pacific Railroad Company, the Sums set opposite our respective names, for services performed, during the month of March 1865."

Hold on to the phrase **our respective names**. The form was built to carry one name for each person paid. That is what the blank is for.

**Now count the names.** The NAMES column of Pay Roll No. 102 carries eleven entries, each with ditto marks running beneath it: Au You, or Ah You; Ah Fong, or possibly Ah Tong; Ah Henge & Co; Ah Coon; Ah Wyo; Wong Wain; Lew San, or possibly Lein San; Ah Chong; Coon Sing; Billy Yang; Hung Wah.

**Eleven names, and the foot of the sheet totals 14,899 and a quarter days of work and $16,914.59.** Against the first block the clerk wrote "Total 2249 @ 30$/p m", which tells you the rate is thirty dollars a month. Section 2 will show you the employer stating, under oath eleven years later, that a month on this railroad meant twenty-six working days. Divide 14,899 and a quarter by twenty-six and you get about five hundred and seventy men standing behind those eleven names. Hold that number lightly. It rests on an assumption, and taking that assumption apart is the whole of Section 3.

**One warning about the money columns before you use them.** The clerk filled this printed form in off-label. Man-days go in the column headed "When Paid", the gross dollars straddle the two date columns, a deduction sits under the heading "Rate per diem", and the TOTAL column holds the net rather than the gross. So the relation across the sheet is gross minus deduction equals net, and lesson 8 works the arithmetic through.

**Three things about the eleven names that a learner can see without being told what to think.**

**The hand does not hold a name still.** The same head man is written "Ah You" on one line and "Au You" on another. The second entry is a tall crossed loop that reads equally well as Fong or as Tong, and the paper does not settle it.

**"Ah" is not a surname.** It is a familiar Cantonese prefix. The Stanford project's own pages gloss it as "a designation less formal than 'Mister'" and list Ah Fong, Ah Chung and Ah Lim as the nickname forms that turn up in these records. A column full of "Ah" entries is a column of first-name-only entries.

**Some entries are not people at all.** "Ah Henge & Co" is a firm. By November 1866 the column will be full of them.

One note before you go further. The sources in this course quote contempt and racial slurs, in a payroll heading, in a congressman's question and in a company magazine. Each one is quoted once, where the shape of the sentence is itself the evidence, and the lesson says why.

:::reveal The printed line on Pay Roll No. 102 promises to pay the sums set opposite what? ||| Our respective names. The form was designed to carry one name for each person paid, and this sheet carries eleven.

:::reveal What does the prefix Ah tell you about the entries in the NAMES column? ||| That they are familiar, first-name-style forms rather than surnames. Stanford's project glosses Ah as less formal than Mister.

## Vocabulary
- **Pay Roll No. 102**: the Central Pacific payroll sheet for March 1865, headed in manuscript "China Labour", held at the California State Railroad Museum and freely readable online.
- **Ditto marks**: the repeated marks running down a column under an entry, meaning the line above applies again. On this sheet they run under each of the eleven names.
- **Man-days**: days of labour, not days of the calendar. The foot of Pay Roll No. 102 totals 14,899 and a quarter of them.
- **Head man**: the person who collected a gang's pay and divided it, and the person whose name the NAMES column actually holds.
- **The Ah prefix**: a familiar Cantonese form of address, not a family name, which is why a ledger of "Ah" entries is a ledger of partial names.

## Sources
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA; digitised by California Revealed. Internet Archive item cscrm_000116, ark:/13960/t9x09qv5c. https://archive.org/details/cscrm_000116 (Read as page images at 260 dpi, in halves and in about twenty crops, 2026-09-20. Locators on a manuscript form are by COLUMN and by BLOCK: the printed headings and the receipt line run across the head of the sheet; the eleven names are the NAMES column; the totals 14,899 1/4 and $16,914.59 are the foot line; "Total 2249 @ 30$/p m" is written against the first block. Cross-checked against an independent scan of the same sheet held at cprr.org. The scan's embedded text recognition is unusable on this hand, so every reading is from the image.)
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched and read in full 2026-09-20. The gloss of "Ah" as less formal than "Mister", and the nickname forms Ah Fong, Ah Chung and Ah Lim, are in the answer to the question about workers' names; the statement that the railroad listed headmen and labour contractors rather than individuals is in the answer about the number of workers.)`,
    },
    {
      slug: "the-column-marked-occupation",
      title: "2 · The column marked OCCUPATION, and the check you can run yourself",
      section: "Section 1 · A form that cannot hold a person",
      body: `The second printed heading on Pay Roll No. 102 reads OCCUPATION. Read down the column and you will not find a single occupation in it.

**What is actually written there**, in order: William Shaddle, J. W. Shepard, C. B. Sampson, G. S. Powers, R. D. Curtis, J. H. Bartholomew, A. W. Townsend, J. B. Kemp, H. P. Mallory, Wilkins, J. L. Wilkins, J. Millard, B. N. Pratt, B. N. Haysman, C. A. Patch, Erkinbeck, P. B. Leove, A. C. Thorp, M. S. Bush, John Grow, J. H. Burgess, John Keating, B. B. Van Liew, D. Drainer, J. E. Marshall, L. A. Patridge. On the last line, instead of a name, a place: "By Bill Pike Camps".

Twenty-six personal names, in a column headed OCCUPATION, on a sheet whose other name column holds eleven entries for hundreds of men. So the first question to settle is what this column is for, and three separate things settle it.

**One, the employer describes the arrangement under oath.** You will read the passage in Section 2. Crocker told a congressional committee that the company kept its account with the gang and that "we have a foreman and he keeps the account with the gang". A foreman, a gang, and a lump of days is exactly what this sheet shows.

**Two, a professional cataloguer describes the same structure.** Stanford's catalogue record for a sister sheet, Pay Roll No. 115 of February 1866, abstracts it in one sentence: "A payroll record consisting entirely of Chinese contractors contracted through Sisson and their foremen."

**Three, and this is the one you can check yourself.** Take the March 1865 sheet and the November 1866 sheet and look for the same name in the OCCUPATION column of both. **John Keating** is in both. In March 1865 he stands beside "Billy Yang". In November 1866, twenty months later, he stands beside "Hung Wah #3" and again beside "Tang Sung". One man, two documents, three different Chinese head men. A column that repeats one man's name across twenty months and three gangs is recording a person, not a trade.

The 1866 sheet closes the question a second way. Several of its OCCUPATION entries are partnerships: "Terry & Patch", "Callaway & McGonigle", "McGonigle & Blodgett", "Leury & Tucker". No occupation has ever been a partnership.

**So look at what the sheet is.** One column for the men who moved the rock, holding a head man, a firm, or a number. One column for the men who watched them do it, holding twenty-six individual names with initials. Both columns are on the same piece of paper, in the same hand, filled in by the same clerk in the same month. Whatever else this record is, it is not a record that lacked a way to write down a labourer's name.

This is the mechanism *Who Made the Record* teaches in its lesson 5, "A record made about people": a document produced about a group by somebody else, in which the makers appear as a category and the record-keepers appear as individuals. This course supplies a case where both halves sit side by side in the same ruled columns.

:::reveal What check can you run across the two payroll sheets to show that the OCCUPATION column is not recording an occupation? ||| Look for John Keating in it on both sheets. He appears in March 1865 beside Billy Yang and in November 1866 beside Hung Wah number three and Tang Sung, so one man spans twenty months and three head men.

:::reveal What do entries like Terry & Patch and Callaway & McGonigle prove about the OCCUPATION column? ||| That it holds people rather than trades, because a partnership of two surnames is not an occupation.

## Vocabulary
- **OCCUPATION column**: the second printed column on both sheets, which holds the name of the white foreman who kept the company's time for a gang.
- **Foreman**: the company employee who kept the account with a gang and whose name the OCCUPATION column carries.
- **Catalogue abstract**: the summary a repository writes for an item, such as Stanford's one-sentence description of Pay Roll No. 115.
- **The Keating check**: the test a learner can run without any expertise, finding one OCCUPATION-column name on both sheets twenty months apart.

## Sources
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA. Internet Archive item cscrm_000116. https://archive.org/details/cscrm_000116 (Read as page images 2026-09-20. Locator: the OCCUPATION column, read top to bottom, including the closing line "By Bill Pike Camps".)
Central Pacific Railroad Company. (1866). *Pay roll no. 331, November 1866* [Manuscript payroll sheet headed "Sissons China Labour"]. MS 79, Series 4, Box 23, Central Pacific Railroad Collection, California State Railroad Museum, Sacramento, CA. Stanford Digital Repository druid nj738wv1221. https://purl.stanford.edu/nj738wv1221 (Read as IIIF page images at 3456 x 5184, 2026-09-20. Locator: the OCCUPATION column of the recto, where John Keating appears beside Hung Wah #3 and Tang Sung, and the partnership entries Terry & Patch, Callaway & McGonigle, McGonigle & Blodgett and Leury & Tucker.)
Stanford Digital Repository. (n.d.). *Catalogue record for Pay roll no. 115, February 1866 (druid wc715hx2338)*. Stanford University Libraries. https://purl.stanford.edu/wc715hx2338 (Read 2026-09-20. Locator: the abstract field, which reads in full "A payroll record consisting entirely of Chinese contractors contracted through Sisson and their foremen.")`,
    },
    {
      slug: "twenty-months-later-a-number",
      title: "3 · Twenty months later, the name becomes a number",
      section: "Section 1 · A form that cannot hold a person",
      body: `The second sheet is the same document twenty months on, and it is much further gone.

**Pay Roll No. 331, November 1866**, is headed in manuscript "Sissons China Labour"; the folded docket on the outside says "Sissons China Roll". It is MS 79, Series 4, Box 23 of the Central Pacific Railroad Collection at the California State Railroad Museum, and Stanford's Digital Repository serves it openly under the handle \`nj738wv1221\`.

**The printed headings have changed**, and one change matters a great deal later: NAMES, OCCUPATION, No. of Days, Rate per Diem, Total Amount, **Less for Board, etc.**, TOTAL, SIGNATURES. The deduction column now says what it is for.

**The NAMES column**, reading down from the top: Hop Pine Co, Kwong Co, Ah Sing Co, Charley No 1, Hip Sing Hong, **Hung Wah #3**, **Ah Wong #53**, Tang Sung, **Sissons**, Kwang Tick Hong, Hung Wah Co, We Sin Co, **Hung Wah #18**, Ah Wung, Ang Fou Co, Hung Sin Co, Ah Cune Co, Hung Nee Co, Ah Fook Co, **Wong Wo Chan #1**, Charley Sam Co, **Fong Wo Chan #2, #3, #5, #6, #11**, Chin Kin Co, Ah Sim Co, Hue Wo Hong Co, Soon Tick Hong Co, Ham Goy, Chun Poo Co, Wong An Gon, Woh Hop Co, Chin Lee Hong Co, Ah Cheung Co, Wellum Co, Yee Sim Co, Hop Kee Co, **Hung Wah #9**, **Sisson #57** twice, See Hoo, Woh Hop No 2, **Sisson #6 Co**, **Ah Wong Co 43**, Ah Wah Co 61, War Chin Co, Sisson Kung Bo 1.

**Read that column slowly, because it is the argument.**

**The gangs are numbered, and the number is written where a name goes.** Hung Wah is four separate entries: #3, #18, #9 and "Hung Wah Co". That is not four men. It is four gangs standing behind one contractor.

**Many entries are firms, not people.** "Co" is a company. A *hong* is a trading house. The column is full of both.

**And on three lines the entry is the white labour contractor's own surname with a number attached**: "Sisson #57", "Sisson #6 Co", "Sisson Kung Bo 1". At that point the NAMES column of a payroll is recording neither the worker nor his head man, but the firm that supplied him and a serial number.

**One thing the ledger does record precisely.** The second column on this sheet carries section numbers along the line, 25, 35, 36, 37, 38, 41, together with the words "Track", "Summit" and "Tunnel", and the printed form has a blank for "Camp No." So the document can place a gang on a particular stretch of railroad in a particular month. It can tell you where the work was. It cannot tell you who did it.

**Put the two sheets side by side and you can watch a naming system dissolve**, on two pieces of paper, without a historian's help. March 1865: eleven names, some of them firms. November 1866: firms, numbers, and the contractor's surname. Nothing in between was lost. The company simply stopped needing the names, and the form stopped carrying them.

Both sheets are freely readable, which matters for a course like this one. Pay Roll No. 102 downloads from the Internet Archive. The 1866 sheets are open at the Stanford Digital Repository with world view and download. The rest of the surviving series requires an appointment in Sacramento.

:::reveal What happened to the NAMES column between March 1865 and November 1866? ||| It filled with firms and with numbers. Entries read Hung Wah number three or Sisson number fifty-seven, which is the white contractor's surname with a serial number after it.

:::reveal Why is Hung Wah four entries on the 1866 sheet rather than four men? ||| Because the unit of record is the gang, and one contractor could stand behind several numbered gangs at once.

## Vocabulary
- **Pay Roll No. 331**: the Central Pacific payroll sheet for November 1866, headed "Sissons China Labour", open at the Stanford Digital Repository.
- **Docket**: the outside of a folded document, carrying its short title. This one reads "Sissons China Roll".
- **Hong**: a Chinese trading house. Several NAMES-column entries on the 1866 sheet end in "Hong" and are firms rather than individuals.
- **Numbered gang**: a work crew entered on the payroll by a number rather than by anybody's name, which is what most of this sheet records.
- **Less for Board, etc.**: the printed deduction column on the 1866 form, which is the only place either sheet says in print what was taken out of a gang's pay.

## Sources
Central Pacific Railroad Company. (1866). *Pay roll no. 331, November 1866* [Manuscript payroll sheet headed "Sissons China Labour"]. MS 79, Series 4, Box 23, Central Pacific Railroad Collection, California State Railroad Museum, Sacramento, CA. Stanford Digital Repository druid nj738wv1221. https://purl.stanford.edu/nj738wv1221 (Read as IIIF page images at 3456 x 5184 in three views, docket, recto and verso, 2026-09-20. Locators: the manuscript heading at the head of the recto; the docket title on the folded outside; the printed column headings across the recto; the NAMES column read top to bottom; the section numbers and the words Track, Summit and Tunnel in the second column.)
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA. Internet Archive item cscrm_000116. https://archive.org/details/cscrm_000116 (Read as page images 2026-09-20. Locator: the NAMES column, for the comparison drawn in this lesson.)`,
    },
    {
      slug: "who-signed-for-the-money",
      title: "4 · Who signed for the money, and the one Chinese hand on the paper",
      section: "Section 1 · A form that cannot hold a person",
      body: `The last printed column on Pay Roll No. 102 is SIGNATURES, and it is where the money actually went.

**What is written there**, repeatedly: "Paid Sut Egbert & Co", with the first word uncertain and possibly Lut or Set; "Paid A. W. Sisson"; "Paid Kohn &" followed by a second name that cannot be read; and, on the last line, "Paid Strobridge". On the continuation of the 1866 sheet the entries read "Paid Sisson" twice, against $39,756.40 and $38,090.74. Those two words were read as show-through on the reverse of the scan, so they carry lower confidence than the rest; the sheet's own title "Sissons China Roll" and the docket figure $39,756.40 are clear.

**Sisson is not a guess.** Stanford's catalogue records for both 1866 sheets carry "A. W. Sisson" as a subject heading, alongside "Labor recruitment". The Stanford project's own pages add the corroboration from the other direction: "The largest labor contractors were white owned (e.g. Sisson, Wallace, Egbert companies)." Two of those three surnames are written in the SIGNATURES column of a single 1865 sheet.

**Where the firm itself was based is an open question, and this course does not settle it.** Crocker, testifying in San Francisco, calls Sisson, Wallace & Co. "a mercantile firm here". A secondary description places the house in Sacramento. The testimony does not say which, so neither does this lesson, and the question is filed as a research check.

**So here is the chain the paper actually documents**, and it has five links: a Chinese worker, then a head man or a numbered gang, then a white foreman's time book, then Charles Crocker's payroll, then a payment to a supply firm. The man who swung the pick is at neither end of it. The receipt line he was nominally signing under promises to pay "the Sums set opposite our respective names", and the signature beside his gang's line is a white contractor's.

**There is one place on either sheet where a Chinese hand wrote something.** Beside the Coon Sing block on Pay Roll No. 102, in the signature area, are two clusters of Chinese characters, roughly eleven of them, brush-written in a running commercial hand.

At the resolutions available, **one character can be read with confidence: 收, meaning received.** The rest have strokes that merge into each other, and a responsible transcription needs a reader of nineteenth-century Cantonese commercial script working either from the original in Sacramento or from a higher-resolution capture. That request is filed as a research check rather than answered here.

**That is a lesson by itself, and the honest version is better than a confident one.** The single place on this document where the workers' own language appears is the single place a modern reader cannot yet read. The receipt formula is legible. The names are not.

**One more thing on the sheet, reported and not leaned on.** Two lines, "Lew San" and "Ah Chong", are written in a different and fainter pencil hand, carry no entry at all in the OCCUPATION column, and share a total of $2.27, the smallest sum on the sheet. They look like two individuals paid directly rather than two gangs. The supporting figures beside them are not legible at the available scan resolution, so this course records the observation and builds nothing on it. It is worth noting that William Chew, who examined the whole surviving series, removed 156 "non-crew direct paid employees" from his name list, which suggests entries of this kind do exist across the series.

:::reveal Whose names appear in the SIGNATURES column of Pay Roll No. 102? ||| Not the men named in the NAMES column. The entries read Paid A. W. Sisson, Paid Kohn and an illegible second name, Paid Strobridge, and a Paid Egbert and Company.

:::reveal Which Chinese character on Pay Roll No. 102 can be read with confidence, and what does it mean? ||| The character 收, meaning received. The rest of the brush writing beside the Coon Sing block cannot responsibly be transcribed at the scan resolutions available.

## Vocabulary
- **SIGNATURES column**: the last printed column on both sheets, which records who actually received the money for each block of work.
- **Labour contractor**: a firm that supplied workers to the railroad and was paid for them, such as Sisson, Wallace & Co. or the Egbert company.
- **Show-through**: writing from one side of a sheet visible through the paper on a scan of the other side, which is why two readings in this lesson carry lower confidence.
- **收**: the Chinese character for "received", the one mark in the workers' own language that can be read on Pay Roll No. 102.
- **Direct paid employee**: a worker entered and paid individually rather than through a gang, a category Chew reports removing 156 of from his name list.

## Sources
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA. Internet Archive item cscrm_000116. https://archive.org/details/cscrm_000116 (Read as page images 2026-09-20. Locators: the SIGNATURES column entries; the two clusters of Chinese characters in the signature area beside the Coon Sing block; the fainter pencil lines for Lew San and Ah Chong, which carry no OCCUPATION entry and total $2.27.)
Central Pacific Railroad Company. (1866). *Pay roll no. 331, November 1866* [Manuscript payroll sheet headed "Sissons China Labour"]. MS 79, Series 4, Box 23, Central Pacific Railroad Collection, California State Railroad Museum, Sacramento, CA. Stanford Digital Repository druid nj738wv1221. https://purl.stanford.edu/nj738wv1221 (Read 2026-09-20. Locators: the docket figure $39,756.40; the two "Paid Sisson" entries on the continuation, read as show-through and flagged as lower confidence.)
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched and read in full 2026-09-20. Locator: the answer to the question about contractors and middlemen, which names Sisson, Wallace and Egbert as the largest white-owned labour contractors.)
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locator: rebuttal section VII, the paragraph describing the removal of 156 non-crew direct paid employees from the name list.)`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The employer explains it himself
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-question-that-gets-dropped",
      title: "5 · The question that gets dropped",
      section: "Section 2 · The employer explains it himself",
      body: `Eleven years after Pay Roll No. 102 was written, the man whose name is printed on it was put under oath and asked about it.

On **14 November 1876, in San Francisco**, the Joint Special Committee to Investigate Chinese Immigration heard Charles Crocker. His testimony runs from printed page 666 to page 688 of the committee's report, and the passage this course is built on is on **printed page 675**.

Most retellings of this story quote one sentence from that page. They almost all drop the question that produced it, and the question is the better half. Here is the exchange in the order it was printed.

> **Q.** Does the same thing obtain with the white men ?—**A.** No, sir ; we get the individual names of the white men.
>
> **Q.** You do not pay the individual Chinaman when he works for you ?—**A.** We pay the head-man of the gang.
>
> **Q.** Some head-man ?—**A.** He is a laborer among them.
>
> **Q.** You do not pay them in the same manner that you pay white men ?—**A.** In the same manner, except that we cannot keep the names of the Chinamen ; it is impossible. We would not know Ah Sin, Ah You, Kong Won, and all such names. We cannot keep their names in the usual way, because it is a different language. You understand the difficulty. It is not done in that way because they are slaves.
>
> **Q.** Is it not a kind of servile labor ?—**A.** Not a bit. I give you my word of honor under oath here that I do not believe there is a Chinese slave in this State, except it may be a prostitute.

**Three things there that the famous quotation does not carry.**

**One. "We get the individual names of the white men."** The railroad did not lack a way to write a labourer's name on a form. It had one, it used it, and it used it on one group of men. For a course about credit that line is worth more than everything that follows it, and no second-hand version of this passage quotes it.

**Two. The word is "would", not "could".** A widely circulated modern rendering of this passage prints "We could not know Ah Sin, Ah You, Kong Won". The page prints **would**. One word is the whole difference between being unable to keep the names and choosing not to, and the argument this course makes is about the choosing. When a quotation carries the load, read it off the page.

**Three. The sentence does not stop where the quotations stop.** It closes with "It is not done in that way because they are slaves", which nobody had yet put to him. He volunteered a denial, and the very next question was whether this was a kind of servile labour. Cut that clause and you remove the reason he was answering at all.

**Now put the testimony beside the ledger.** "Ah You" is the first name written in the NAMES column of Pay Roll No. 102, with 2,249 man-days and a total of $2,512.57 beside it. Crocker offered, as an example of a name his company would not know, a name his company had already written at the top of a payroll sheet. The claim was never that the names were unknowable. It was that they were not worth keeping past the gang boss.

This is the moment of **fact creation** in Trouillot's scheme, which *Who Gets Named* teaches in its lesson 17, "Four places a record goes quiet". A source is made, and what it omits is decided by whoever is making it.

:::reveal What is the question that produces Crocker's answer about white workers, and what is the answer? ||| The question is whether the same thing obtains with the white men, and the answer is no, sir, we get the individual names of the white men.

:::reveal Which single word do the second-hand versions of the Ah Sin passage get wrong, and why does it matter? ||| The page reads "would not know", not "could not know", and the difference is between being unable to keep the names and choosing not to.

## Vocabulary
- **Joint Special Committee to Investigate Chinese Immigration**: the congressional committee that took this testimony in San Francisco in 1876; its report is Senate Report 689 of the 44th Congress.
- **Sworn and examined**: the formula that opens a witness's testimony in the printed report, marking everything that follows as evidence given under oath.
- **Head man**: in Crocker's own words, the person the company paid for a gang, and "a laborer among them".
- **Fact creation**: Trouillot's first moment of silence, the making of a source, where an omission becomes permanent.

## Sources
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n675 (Testimony of Charles Crocker, printed pp. 666-688. This exchange is at **printed p. 675**, which in this scan is also **scan page 675**; both were checked against the running head "CHINESE IMMIGRATION. 675" on the image. Read as an IIIF page image at 1974 x 3379 on 2026-09-20, not from the volume's text transcription, which garbles names on these pages. The examiner heading at the head of the page reads "By Mr. PIPER:". The report sets a space before its question marks and semicolons, which is reproduced above.)
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA. Internet Archive item cscrm_000116. https://archive.org/details/cscrm_000116 (Read as page images 2026-09-20. Locator: the first block of the NAMES column, carrying "Ah You" and, written against it, "Total 2249 @ 30$/p m" and $2,512.57.)`,
    },
    {
      slug: "who-was-asking-and-when",
      title: "6 · Who was asking, and when",
      section: "Section 2 · The employer explains it himself",
      body: `A quotation from a hearing means very little until you know who asked the question and under what pressure. Both of those have been got wrong in this case, and both are fixable from the report itself.

**Mr. Piper is Representative William A. Piper of California**, a member of the committee, and on these pages a hostile cross-examiner. He is the one who asks Crocker about his subsidies, his fortune, and whether he preferred Chinese labour because it paid better. The examiner heading at the head of printed page 675 reads "By Mr. PIPER:", and the next heading does not appear until below the passage in the previous lesson, so the whole of it is cross-examination.

**Mr. Bee is Colonel F. A. Bee, and he was not on the committee.** Printed page 4 of the report records that "Col. F. A. Bee and B. S. Brooks appeared and made statements in favor of the Chinese". He conducted the friendly direct examination. A 2004 rebuttal published on cprr.org renders the headcount question below as "Q. (By Mr. Bee)". On the page, the questioner is Piper.

**Here is that exchange, printed page 671**, with the questions around it, because they are what makes it evidence.

> **Q.** You were a contractor for the construction of the Central Pacific Railroad ?—**A.** Yes, sir.
>
> **Q.** Did you make any money out of that contract ?—**A.** Yes, sir ; I made all I could ; just as you would, and just as other men would do.
>
> **Q.** You say that you employed ten thousand Chinamen ?—**A.** About that number ; I never knew exactly how many.
>
> **Q.** Did you make more money out of that contract by employing them than if you had employed white men ?—**A.** I think I did.
>
> **Q.** You preferred to employ Chinese because you made more money out of the contract by employing them ?—**A.** No, sir ; as I said before, I tried my very best to get white men.
>
> **Q.** Answer my question. I do not want to go into an argument.

"I never knew exactly how many" is not a mild clarification offered to a friendly examiner. It is said in the middle of an accusation of profiteering, by a witness who had every reason to produce a confident number and did not have one to produce. That makes it better evidence for this course, not worse.

**And the date.** The same 2004 rendering dates the testimony "Feb. 27, 1877". The committee's own journal, at printed page 6, heads the sitting **"San Francisco, November 14, 1876"** and lists "Chas. Crocker" among the gentlemen who appeared and testified that day. James Strobridge testified the following day. What happened on 27 February 1877 is printed on the report's title page: "Ordered to be printed". That is the day the Senate ordered the volume printed, and it is not the date of any testimony in it.

**One practical note on citing this volume**, because it is the kind of thing that quietly breaks a citation. In this scan, from about printed page 660 onward the printed page number and the Internet Archive scan index happen to be the same number, so printed page 675 is scan page 675. Earlier in the same volume they diverge by fourteen: scan page 92 carries printed page 78. A reader sent to the wrong one lands fourteen pages away and concludes the quotation is not there. Give both numbers, every time. The report's own index will help you find the passage in the first place: it files it under the heading "contract-labor, 674, 675".

:::reveal Who is Mr. Piper and who is Mr. Bee? ||| Piper is Representative William A. Piper of California, a member of the committee, cross-examining. Bee is Colonel F. A. Bee, who was not on the committee and appeared for the Chinese.

:::reveal What happened on 27 February 1877? ||| The Senate ordered the report printed. The testimony itself was given on 14 November 1876, as the committee's own journal records.

## Vocabulary
- **Cross-examination**: questioning by a party seeking to test or undermine the witness, as distinct from the friendly direct examination that draws the account out.
- **Examiner heading**: the line in the printed report, such as "By Mr. PIPER:", that says which member is asking until the next such heading.
- **Committee journal**: the day-by-day record at the front of the report, which dates each sitting and lists who testified.
- **Scan page**: the page index of a digitised copy, which is not the printed page number and in this volume differs from it by fourteen before about printed page 660.
- **Ordered to be printed**: the Senate's instruction to publish, dated on the title page, and often mistaken for the date of the evidence.

## Sources
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n671 (The headcount exchange is at **printed p. 671, scan p. 671**, read as an IIIF page image on 2026-09-20, with the examiner heading "By Mr. PIPER:" read on the same image four questions above. Bee's appearance for the Chinese is at **printed p. 4, scan p. 18**; the sitting of 14 November 1876 and the list of witnesses are in the journal at **printed p. 6, scan p. 20**; "February 27, 1877.-Ordered to be printed" is on the title page at scan p. 7. The volume's text transcription renders "No. 689" as "No. 680" and "Ah You" as "Ah Yrou", so nothing here is taken from it.)
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locator: the numbered reply headed "Rebuttal to counter argument by CPRR.ORG (11/9/2004)", paragraph 1.0, which prints the exchange as "Q. (By Mr. Bee)" and cites it to "Report of the Joint Special Committee, Feb. 27, 1877".)`,
    },
    {
      slug: "the-book-that-had-the-names",
      title: "7 · The book that had the names in it",
      section: "Section 2 · The employer explains it himself",
      body: `A few inches higher on the same page, Crocker described how the count on a payroll sheet was actually produced. It is the most surprising thing in his testimony, and for a long time it was quoted in a form that reversed its meaning.

> **Q.** That is immaterial.—**A.** That house furnished us with Chinamen. They gathered them one at a time, two, three, four of them in a place, and got them together to make what is called a gang, and each gang is numbered.
>
> **Q.** Just like mules ?—**A.** Well, sir, we cannot distinguish Chinamen by names very well.
>
> **Q.** Like mules ?—**A.** Not like mules, but like men. We have treated them like men, and they have treated us like men, and they are men, good and true men. As I say, we employed them in that way. They come together in gangs of twenty-five and thirty, as we need them to work on a job of work, and the account is kept with the gang, No. 1, No. 2, 25, 30, 50, 100, just as it is. Each gang has a book-keeper to keep the account among themselves. We have a foreman and he keeps the account with the gang and credits them: Every night the Chinese book-keeper, who is one of the workmen and works in the pit along with the rest, comes up with his book, and he says so many days for that gang, do you see ? and they count it up and they agree, and each puts it down. Then the Chinese keep their own accounts among themselves ; but we keep an account with the gang. When the pay-day comes the gang is paid for all the labor of the gang, and then they divide it among themselves.

**"Just like mules?" is quoted here because it is the question that produces the sentence everyone repeats.** Crocker refuses it in his own answer. The refusal and the practice sit on the same page and do not agree with each other, and that disagreement is the subject.

**Two things in that passage confirm Section 1 from the employer's own mouth.** "Each gang is numbered." "The account is kept with the gang, No. 1, No. 2, 25, 30, 50, 100, just as it is." Pay Roll No. 331 was read first and the system inferred from it. Here is the man whose firm produced that sheet describing the same system, in the same terms, under oath. A document and a witness arriving at the same practice independently is the strongest evidence this subject has.

**And one thing in it is new.** Read the middle sentence slowly. The foreman keeps the company's account. But the count itself, every night, comes from **the Chinese book-keeper, who is one of the workmen and works in the pit along with the rest**, and who comes up with his book and says so many days for that gang. Both sides count it up, both agree, and each puts it down.

**A book with the gang's days in it existed. It was written by a worker. It was never the company's book.**

That is why none of it survives. Archives keep what institutions keep. The company's paper went into a company file and from there into a museum collection; the book-keeper's book stayed with the gang.

**A note on how this passage was nearly lost.** A 2004 rendering, widely relied on, prints it as: "We have a foreman and he keeps the account with the gang and credits the rest, comes up with his book, and he says so many days for that gang". The ellipsis in it is silent, and it swallows eighteen words. In the original, "the rest" is not what the foreman credits; it is the other men in the pit. And the person who comes up with his book is the Chinese book-keeper, not the foreman. Read the page and the nightly count moves back to the man who made it.

None of that is an argument against the author who made the cut. He read the whole surviving payroll series at the museum, which is why this course can teach the ledger at all. It is an argument for a habit: when a quotation is doing real work, open the page it came from.

:::reveal On Crocker's own account, who made the nightly count of days that the payroll rests on? ||| The Chinese book-keeper, one of the workmen, who worked in the pit and came up with his book every night to say how many days the gang had worked.

:::reveal Why does no worker's book survive in the archive? ||| Because it was kept by the gang among themselves and was never company paper, and archives keep what institutions keep.

## Vocabulary
- **Book-keeper**: on Crocker's account, a member of the gang who kept its own account and reported the nightly total.
- **The pit**: the excavation the gang worked in, and where Crocker says the Chinese book-keeper worked alongside everyone else.
- **Silent ellipsis**: an omission inside a quotation that is not marked, or is marked so lightly that a reader cannot tell how much was cut.
- **Corroboration**: two independent sources arriving at the same finding, here a manuscript payroll and a sworn description of how it was made.

## Sources
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n675 (Testimony of Charles Crocker. This passage is on the upper half of **printed p. 675, scan p. 675**, under the examiner heading "By Mr. PIPER:", read as an IIIF page image at 1974 x 3379 on 2026-09-20. The mark after "credits them" reads as a colon on the scan where the volume's text transcription gives a semicolon.)
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locator: the rendering of the foreman passage, quoted in the same reply that cites the committee report.)
Central Pacific Railroad Company. (1866). *Pay roll no. 331, November 1866* [Manuscript payroll sheet headed "Sissons China Labour"]. MS 79, Series 4, Box 23, Central Pacific Railroad Collection, California State Railroad Museum, Sacramento, CA. Stanford Digital Repository druid nj738wv1221. https://purl.stanford.edu/nj738wv1221 (Read 2026-09-20. Locator: the NAMES column, whose numbered entries are what Crocker's "each gang is numbered" describes.)`,
    },
    {
      slug: "twenty-six-working-days",
      title: "8 · Twenty-six working days, and what came off the top",
      section: "Section 2 · The employer explains it himself",
      body: `Section 1 left an arithmetic question open. This is where the document and the witness close it together.

**What the sheet gives you.** On Pay Roll No. 102 the clerk used the printed form off-label: man-days go in the "When Paid" column, the gross dollars straddle two more, a deduction sits under "Rate per diem", and TOTAL is the net. The relation is gross minus deduction equals net, and it checks out exactly on six separate blocks. Ah Henge & Co: 2,621 and a quarter days, $3,024.44 gross, less $31.25, net $2,993.19. The second block, the one whose head man reads as Ah Fong or Ah Tong: 420 and a half days, $485.17 gross, less $64.75, net $420.42.

**Divide gross by days on three blocks and you get 1.1538, which is thirty divided by twenty-six to five figures.** The sheet itself writes "Total 2249 @ 30$/p m". So the wage is thirty dollars a month reckoned on a twenty-six-day month, about a dollar and fifteen cents a day.

**The 1866 sheet confirms the divisor three more ways.** Tunnel gangs carry "Ex $1 p month", and the extra actually paid is days divided by twenty-six exactly: 393 days gives $15.11, 511 gives $19.65, 705 gives $27.11, 776 and a quarter gives $29.87, 654 and a quarter gives $25.16. "Ex Drivers" at $2.50 a month extra works the same way: 60 days gives $5.76, 32 gives $3.07, 12 gives $1.16.

**Then the employer states the divisor outright**, printed page 681, still under cross-examination by Piper.

> **Q.** The average was a dollar a day, and they would board themselves ?—**A.** No, sir ; it was $35 a month. There are 26 working-days in a month, and it was about a dollar and twenty-five cents a day, I should think.

Compute thirty divided by twenty-six from a payroll sheet, then read the contractor saying there are twenty-six working days in a month eleven years later. That is as close as this subject comes to a document checking itself.

**What white workers got, from the same witness.** At printed page 668 Crocker says, "I think we were paying $35 a month and board to white laborers, and $30 a month to Chinamen and they boarded themselves." Pay Roll No. 102 writes thirty dollars a month. The sheet and the testimony agree on the rate, and the testimony supplies a comparison the sheet structurally cannot make.

**Why the sheet cannot make it.** Both sheets are headed "China Labour" and "Sissons China Labour". There are no other workers on them at all. The segregation is physical: Chinese labour got its own paper. So every wage comparison in this subject is a comparison between documents, never within one.

**James Strobridge, the construction superintendent, gives the whole ladder**, printed pages 727 and 728: "When we paid Chinamen twenty-six dollars a month and they boarded themselves we paid the white men thirty dollars a month and boarded them. ... We afterwards paid the Chinamen thirty dollars and the white men thirty-five dollars. Our track-layers were almost always white men."

**A third comparison, reported rather than read.** Manu Karuka quotes a letter of 14 January 1867 from E. B. Crocker to Collis Huntington: "Each white man costs us in board and wages $2 1/2 each 8 hours, but Chinamen cost us $1.19 each 8 hours, and they drill nearly as fast." The letter itself was not read for this course, so it is Karuka's quotation and is attributed to him. The $1.19 is within four cents of the figure the March 1865 sheet yields on its own.

**What came off the top.** The 1866 form prints its deduction column "Less for Board, etc.", and the values are small against gangs of dozens: $2.00, $5.00, $10.00, $14.50, $35.00. Marginal notes give the flavour of the "etc.": "Detention", "Loosing Harness", "Coming on the list". On the 1865 sheet the deduction column is unlabelled. A two-word manuscript note sits above the printed "Rate per diem" heading and is illegible at both available scan resolutions; the first word may be "Fine" or "Time". That is the single most important unread mark on the sheet, because it names what was taken out.

Crocker describes a fining system at printed page 669: "We had a system of fines for men not coming out, keeping foremen and keeping horses at work when there were not enough laborers, and we charged the expenses of the horses and carts to the gang who failed to keep them employed." That does not settle the column, and the later printed form still makes board the better reading. It does mean the two candidate readings are no longer equally idle, and the question is filed as a research check.

**And one number to handle carefully.** At page 681 Crocker also says, "I was told that the cost of provisions, their purchases at the store, amounted to an average of about $9 a month", and when pressed for exact figures replies, "You can get about the exact figures, if it is important to know, from Sisson, Wallace & Co." Two cautions before anyone uses the nine dollars. He marks it as hearsay himself. And it is what the men spent at a store, not a sum deducted on a payroll.

:::reveal How do you get about a dollar and fifteen cents a day out of Pay Roll No. 102, and which sentence of the testimony confirms the divisor? ||| Thirty dollars a month divided by twenty-six working days. Crocker told the committee there are twenty-six working days in a month.

:::reveal Why can no wage comparison be made inside either payroll sheet? ||| Because both sheets are headed China Labour and carry no other workers, so the comparison can only be made between documents.

## Vocabulary
- **Gross, deduction and net**: the three money figures on Pay Roll No. 102, where gross minus deduction equals the TOTAL column, checked on six blocks.
- **Twenty-six-day month**: the house convention for a month of work, derived from the sheet's arithmetic and then stated outright in the testimony.
- **Ex $1 p month**: the manuscript note on the 1866 sheet marking a tunnel gang's extra dollar a month, paid as days divided by twenty-six.
- **Less for Board, etc.**: the printed deduction column on the 1866 form, the only place either sheet says in print what was taken out.
- **Hearsay**: evidence a witness reports at second hand, as Crocker does when he says he was told the cost of provisions.

## Sources
Central Pacific Railroad Company. (1865). *Pay roll no. 102, March 1865* [Manuscript payroll sheet headed "China Labour"]. California State Railroad Museum Library and Archives, Sacramento, CA. Internet Archive item cscrm_000116. https://archive.org/details/cscrm_000116 (Read as page images 2026-09-20. Locators: the six blocks whose gross, deduction and net were checked, including the Ah Henge & Co and Au Fong blocks; "Total 2249 @ 30$/p m" against the first block; the unlabelled deduction column under the printed heading "Rate per diem", and the illegible two-word manuscript note above it.)
Central Pacific Railroad Company. (1866). *Pay roll no. 331, November 1866* [Manuscript payroll sheet headed "Sissons China Labour"]. MS 79, Series 4, Box 23, Central Pacific Railroad Collection, California State Railroad Museum, Sacramento, CA. Stanford Digital Repository druid nj738wv1221. https://purl.stanford.edu/nj738wv1221 (Read 2026-09-20. Locators: the printed "Less for Board, etc." column and its values; the "Ex $1 p month" tunnel entries and the "Ex Drivers" entries, with their day counts and amounts; the marginal notes Detention, Loosing Harness and Coming on the list.)
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n681 (Crocker on the twenty-six working days, the $9 provisions figure and the referral to Sisson, Wallace & Co. are at **printed p. 681, scan p. 681**, read as an IIIF page image on 2026-09-20; the $35 and $30 comparison is at **printed p. 668, scan p. 668**; the fining system is at **printed p. 669, scan p. 669**; Strobridge's wage ladder spans **printed pp. 727-728, scan pp. 727-728**, and "Our track-layers were almost always white men" closes it at p. 728.)
Karuka, M. (2020, April 6). Chinese workers and the transcontinental railroad. *Boom California*. https://boomcalifornia.org/2020/04/06/chinese-workers-and-the-transcontinental-railroad/ (Read 2026-09-20. Locator: the paragraph quoting E. B. Crocker's letter of 14 January 1867 to Collis Huntington, held in the Huntington Papers. The letter itself was not read for this course, so the quotation is Karuka's and is attributed to him in the lesson.)`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — What the record cannot tell you
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "where-twenty-thousand-comes-from",
      title: "9 · Where twenty thousand workers comes from",
      section: "Section 3 · What the record cannot tell you",
      body: `Two numbers travel with this subject everywhere it goes. Around twenty thousand Chinese workers built the Central Pacific, and around twelve hundred of them died. This lesson takes the first one apart, and the second lesson takes the other. Neither is an attack on anybody. Both are arithmetic, and both can be done on a page you can open.

**Where the twenty thousand is published.** The Stanford project's own page carries it in a footnote, and the footnote is unusually honest about what it is: "one scholar extrapolates from different records that the number of Chinese working on the railroad during the course of construction could have been as high as 20,000", citing William F. Chew, *Nameless Builders of the Transcontinental Railroad* (2003), pages 40 to 45.

**Where it comes from.** Chew set out his method in a rebuttal published on cprr.org in 2004, and he states it plainly enough that a learner can follow every step.

> "The total database had 1,507 names including duplicate entries for crews working multiple months. This list was alphabetically sorted with duplicate names removed reducing the list to 972 names. Then the list would search for non-crew direct paid employees further removing another 156 names. The remaining list of 816 gang bosses would then be multiplied by the previously determined average crew size of twenty-eight, and adding back the 156 direct paid employees yielding a conservative total of 23,004 names of Chinese workers."

816 times 28 is 22,848, plus 156 is 23,004. **The circulating figure is a count of head men multiplied by an assumed crew size.** It is not a count of workers, and no count of workers exists, because, as Sections 1 and 2 showed, nothing ever wrote the workers down. Note also that his own number is 23,004, and the figure that circulates is 20,000.

**A second derivation is on the same page.** Explaining sheet number 26 of January 1864, he writes that Hung Wah collected pay for 587 and a half man-days, and "dividing this number by an average of 26 days per man per month, the total is 23 men", repeated for every payee and added, "resulting in the minimum total workers of 23,004". Two routes to the same total, and each one needs a constant nobody can check: a crew size in the first, a month length in the second.

**The published objection, from the site's editors, printed beside his own words.** The calculation "assumes without evidence that each un-named individual worker ... in every month examined ... had the same named crew boss", and, more sharply: "there is no way to ever actually know how many different nameless Chinese individuals worked, because double and triple counting un-named workers is unavoidable when attempting to calculate from monthly payrolls."

He answers it. The gangs were clannish, formed through district associations of men from the same place, and bound to a boss by the debt of their passage, so switching was unlikely. **That is a live, well-mannered disagreement between two named parties over one set of documents**, which is the best possible thing for a learner to be handed.

**The range on either side of it is enormous.** Chew notes that without duplicate removal his own method yields 42,521. G. J. "Chris" Graves, working from the same surviving sheets, reports "at most 9,000". So the published estimates from one body of paper run from about nine thousand to forty-two thousand.

**And the man who hired them did not know.** At printed page 671, asked whether he had employed ten thousand Chinese workers, Crocker answered, "About that number ; I never knew exactly how many." Strobridge gave his own figures at printed page 723: "We increased finally to 10,000", and "At that time we were working fully 10,000 Chinamen." Those two Strobridge sentences were read in the volume's text transcription rather than on the page image, so treat them as a step below the rest of the quotations in this course.

**One misattribution to fix before it spreads further.** The sentence "our maximum strength ... very nearly approached 10,000 men on the work" is often given as Strobridge's. On the page it is **Charles Crocker**, at printed page 669, describing the 1867 strike. The error comes from a bracketed editorial comment on the cprr.org page. A course about who gets credited cannot misattribute a quotation.

**What can be said with confidence** is what Stanford's pages actually count, and those are counts of a moment rather than a total: nearly 4,000 Chinese on the line by July 1865; approximately 8,000 working on tunnels and 3,000 laying track in February 1867, "representing ninety percent of the workforce"; "as many as 10,000 to 15,000" at any one time.

:::reveal What two numbers are multiplied to produce the figure of about twenty thousand Chinese workers? ||| A count of 816 named gang bosses and an assumed average crew size of twenty-eight, with 156 directly paid employees added back, giving 23,004.

:::reveal Why do the site's editors say the total cannot be a count of workers? ||| Because it assumes every unnamed worker stayed with the same named boss in every month examined, so anyone who moved or was replaced is counted twice or three times.

## Vocabulary
- **Extrapolation**: reaching a total by applying an assumed rate or size to a smaller count, which is what produces the twenty thousand figure.
- **Gang boss or head man**: the named payee on a payroll sheet, and the only person in a crew the record identifies.
- **Duplicate removal**: the step of collapsing the same name appearing in several months into one entry, without which the same method yields 42,521.
- **Count of a moment**: a figure for how many people were at work in one month, which cannot be added across months to give a total of individuals.

## Sources
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locators: rebuttal section VII for the 1,507 to 972 to 816 calculation and the CPRR.org editors' bracketed objection that follows it; rebuttal section II for the man-days divided by twenty-six derivation and sheet number 26; rebuttal section IV for Graves's "at most 9,000" and the 42,521 figure; the bracketed editors' comment in section VII for the misattribution of the maximum-strength sentence to Strobridge.)
Chinese Railroad Workers in North America Project. (n.d.). *Geography of Chinese workers building the transcontinental railroad*. Stanford University. https://chineserailroadworkers.stanford.edu/virtual/ (Re-fetched and read in full 2026-09-20. Locator: the section on the arrival of Chinese workers, whose footnote 2 carries "one scholar extrapolates" and cites Chew, pp. 40-45; the same section gives the July 1865 and 1866 counts.)
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched 2026-09-20. Locator: the answer to the question about how many Chinese worked on the railroad, for "nearly 4,000", the February 1867 figures, "ninety percent of the workforce" and "as many as 10,000 to 15,000".)
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n671 (Crocker's "I never knew exactly how many" at **printed p. 671, scan p. 671**, read as a page image 2026-09-20; his "maximum strength" sentence at **printed p. 669, scan p. 669**; Strobridge's own headcounts at **printed p. 723, scan p. 723**, read in the volume's text transcription only, which is why the lesson says so.)`,
    },
    {
      slug: "where-twelve-hundred-comes-from",
      title: "10 · Where twelve hundred dead comes from",
      section: "Section 3 · What the record cannot tell you",
      body: `The second number is harder to look at, and it deserves the same treatment for the same reason.

**Start with the absence.** The Stanford project states it in one sentence: "The Central Pacific did not keep records of the deaths of any workers on the railroad, much less Chinese workers." The same page gives the spread of estimates: "Some estimate that 50 to 150 to over 1000 Chinese workers were killed as a result of snow slides, landslides, explosions, falls and other accidents."

The project also reports an 1868 newspaper article describing searches organised by the Chinese Six Companies for the remains of 300 men along the line.

**Where the famous figure comes from.** Stanford's page reports a newspaper article: "One newspaper article entitled 'Bones in Transit' of June 30, 1870 in the Sacramento Reporter reported that 'about 20,000 pounds of bones' dug up from shallow graves were taken by train for return to China, calculating that this amounted to 1,200 Chinese." That newspaper has not been read for this course. It reaches these pages as Stanford reports it, and the sentence above is the whole of what is known here about it.

**How the weight became a number of men.** Chew sets the method out in his rebuttal:

> "An adult human body has 206 bones, which account for 14% of the body's total weight. Calculating this relationship to the average weight of 119 lbs. of a Chinese man during the 1860s, it confirms that the bones of 1200 men would weigh 20,000 pounds."

Do the arithmetic yourself. Fourteen per cent of 119 pounds is 16.66 pounds of bone for one man. Twenty thousand divided by 16.66 is 1,200. **The famous death toll is a division sum resting on two assumed constants, applied to a newspaper's estimate of the weight of a freight load.**

**What the rest of his table rests on.** Chew reports a total of 1,346 deaths, "of which 146 or 10% are referenced in detail": forty-four listed in the *Dutch Flat Enquirer*, the *Omaha Weekly Herald* and the *Sacramento Union*, fifty-eight reported by J. O. Wilder, a surveyor for the railroad, and forty-four taken from books. **The other eighty-nine per cent is the one newspaper paragraph.**

**The objections, published beside it.** The site's editors write that the calculated total "does not distinguish construction accidents from smallpox deaths", that it is "inconsistent with numerous earlier contemporaneous reports of small numbers of casualties", and that "adding number killed plus number of bodies exhumed to get a total is incorrect because it double counts some casualties". Stanford's own page records a second contemporary report that the same train carried the bones of only about fifty.

**And here is the sentence that ties this lesson back to the first two sections**, from the same editors: "CPRR payroll sheets are a reliable primary source but do not contain any information regarding casualties." An employer who did not write down who worked did not write down who died. The silence in the death record and the silence in the NAMES column have one cause.

**The line this course holds.** None of this makes the deaths fewer. It makes the number **unknown, not smaller**, which is the only claim the record supports. A course that replaced twelve hundred with fifty would be making exactly the same mistake in the other direction, and on thinner evidence.

**One figure to treat as drift.** A 2019 article in the *Stanford Daily* reported that historians estimate one in ten workers lost their life. The project's own pages do not support that, and no source read for this course does. It is printed here as an example of how a number grows on its way through retellings, and not as a figure.

:::reveal What two assumed constants produce the figure of 1,200 dead? ||| That bone is fourteen per cent of body weight, and that the average weight of a Chinese man in the 1860s was 119 pounds, which gives 16.66 pounds of bone a man against a reported 20,000 pounds.

:::reveal What is the honest claim about the number of deaths? ||| That it is unknown rather than smaller, and that it is unknown for the same reason the names are missing.

## Vocabulary
- **Bones in Transit**: the title of the *Sacramento Reporter* article of 30 June 1870 that reported about 20,000 pounds of bones being returned to China.
- **Referenced in detail**: Chew's term for a death he can tie to a named source, which he puts at 146 of 1,346.
- **Double counting**: adding a reported death and a later exhumed body as two casualties when they may be the same person.
- **Drift**: the way a figure changes as it passes through retellings, as with the one-in-ten claim that no source read here supports.

## Sources
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched and read in full 2026-09-20. Locator: the answer to the question about how many workers died, which carries the statement that the railroad kept no death records, the 50 to over 1,000 range, the 1868 report of a search for the remains of 300, the *Sacramento Reporter* report of 30 June 1870, and the contrary report of about fifty.)
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locators: rebuttal section VI for the 206 bones and 119 pounds calculation; rebuttal section II for the table total of 1,346 and the 146 referenced in detail, with the *Dutch Flat Enquirer*, *Omaha Weekly Herald*, *Sacramento Union* and J. O. Wilder counts; the CPRR.org editors' bracketed comment following section II for the smallpox, double-counting and "no information regarding casualties" objections.)
*The Stanford Daily*. (2019, May 23). [Article on the 150th anniversary of the transcontinental railroad]. Stanford University. (Cited here only as the origin of the circulating "one in 10" claim, which is reported and not adopted. The article was not re-fetched for this build, and no figure is taken from it.)`,
    },
    {
      slug: "the-documents-that-did-not-survive",
      title: "11 · The documents that did not survive",
      section: "Section 3 · What the record cannot tell you",
      body: `A record has two kinds of hole. There is what was never written, which Sections 1 and 2 were about. And there is what was written and did not survive, which is this lesson.

**What survives.** Four hundred and nine Central Pacific payroll sheets are held at the California State Railroad Museum, in collection MS 79, as Chew reports from having worked through them.

**What is missing from that.** His data came from nineteen months, where January 1864 to December 1867 "should have yielded a total of 48 months". Roughly sixty per cent of the months are gone, and what remains is unevenly spread: three months for 1864, three for 1865, twelve for 1866, one for 1867. He raises the obvious objection against his own table himself: "Converting this Table to a line graph assumes a continuous function distorting the incomplete monthly data." A line drawn through those points would imply a shape the paper cannot support.

**What the surviving sheets can still date.** Chew reports that sheet number 369, of December 1867, records 10,427 man-days paid to 17 head men, which on the same twenty-six-day divisor is 401 workers. The series cannot say who was on the line, and it can say roughly how many were, month by month, for the months that are left.

**What a learner can reach.** One sheet, Pay Roll No. 102, downloads freely from the Internet Archive. Two 1866 sheets are open at the Stanford Digital Repository. The other four hundred or so need an appointment in Sacramento. So the two documents this course teaches from are, between them, the readable fraction of a mostly unreadable series.

**Now the sentence that this whole subject turns on.** The Stanford project states: "So far, though, no letter or document of any sort written by one of the Central Pacific workers has been found." Its other page puts it as "there is no extant letter, diary, or memoir by the Chinese workers themselves."

**And the employer testifies that at least two such documents existed.** You met the first in lesson 7: the Chinese book-keeper's own book, brought up out of the pit every night with the gang's days in it. The second is at printed page 669, where Crocker describes the strike of June 1867: "The Chinese circulated a document among themselves, all through the camp, and on the next Monday morning they refused to come out."

**A document written by Central Pacific Chinese workers is attested, under oath, by their employer.** The claim that none has been found is a claim about survival, not about literacy or about whether anything was written. Crocker's sentence shows you one of the things that did not survive, and lesson 7 shows you another.

**The strike, in the employer's own words**, because for once the coercion does not have to be established from a hostile source. He says the men stayed in their camps and that "this strike of the Chinese was just like Sunday all along the work", with no violence along the line. He says, "I stopped the provisions on them, stopped the butchers from butchering, and used such coercive measures." He says he went up and made them "a little war speech" and told them "that no one made laws there but me", and gave them until the following Monday morning at six, after which everyone who had not returned would be fined.

**How long it lasted is contested, and the contest is worth showing.** Crocker's own account makes it a week: they struck on a Monday and were ordered back by the next Monday. Obenzinger, writing for the Stanford project, says the workers "laid down their tools for a week". Stanford's own frequently asked questions page says the strike ended "After eight days of increasing privation". Three accounts, two of them from the same project, and they do not agree.

**What the strikers wanted**, as Stanford's page records: on 24 June 1867 three thousand workers stopped work, and they demanded forty dollars a month, a workday cut from eleven hours to ten, and shorter shifts in the tunnels.

So the archive holds what the employer wrote down, minus sixty per cent of it. What the workers wrote, they kept. What they kept did not enter an archive. *Written by Himself*, in its lesson 23, puts the general form of this: an occupation defined by contractual invisibility cannot be counted.

:::reveal How much of the Central Pacific payroll series is missing for 1864 to 1867? ||| Chew's data comes from nineteen months where forty-eight should exist, so roughly sixty per cent of the months are gone and the survivors are unevenly spread.

:::reveal What evidence is there that Central Pacific Chinese workers produced written documents? ||| Crocker testified that the Chinese circulated a document through the camp before the 1867 strike, and that a Chinese book-keeper kept the gang's account in his own book every night.

## Vocabulary
- **MS 79**: the Central Pacific Railroad Collection at the California State Railroad Museum, which holds the 409 surviving payroll sheets.
- **Extant**: still in existence. Stanford's pages say no extant letter, diary or memoir by these workers is known.
- **Attested**: reported by a witness, here an employer under oath describing a document his workers wrote and circulated.
- **Contractual invisibility**: the condition of being employed through an intermediary so that no record names you, which is the general form this case belongs to.

## Sources
Chew, W. F. (2004, November 5). *Author's rebuttal by William Chew*. Central Pacific Railroad Photographic History Museum. http://cprr.org/Museum/Rebuttal_William_Chew.html (Re-fetched and read in full 2026-09-20. Locators: rebuttal section II for the nineteen months against forty-eight; rebuttal section III for the three, three, twelve and one month distribution and the line-graph objection in his own words.)
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n669 (Crocker on the 1867 strike at **printed p. 669, scan p. 669**. The maximum-strength, fines and stopped-provisions sentences were read as a page image; the surrounding narrative of the strike was read in the volume's text transcription, and the lesson quotes only sentences from that page.)
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched and read in full 2026-09-20. Locators: the answer on literacy and letters for "no letter or document of any sort"; the answer on the 1867 strike for the date of 24 June, the three thousand workers, the demands, and "After eight days of increasing privation".)
Chinese Railroad Workers in North America Project. (n.d.). *Geography of Chinese workers building the transcontinental railroad*. Stanford University. https://chineserailroadworkers.stanford.edu/virtual/ (Re-fetched 2026-09-20. Locator: the opening section, for "there is no extant letter, diary, or memoir by the Chinese workers themselves".)
Obenzinger, H. (2019). *One more spike in Utah: Commemorating the 150th anniversary of the completion of the transcontinental railroad at Promontory Summit*. Chinese Railroad Workers in North America Project, Stanford University. https://chineserailroadworkers.stanford.edu/wp-content/uploads/2020/01/Obenzinger-Utah-Essay.pdf (Downloaded and read 2026-09-20. Twenty pages, printed page numbers identical to PDF page numbers. Locator: **p. 18**, the paragraph beginning "For example, how would a large-scale commemoration incorporate the strike in the Sierra Nevada at the end of June 1867?", which says the workers laid down their tools for a week.)`,
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The same practice at the ceremony, and afterwards
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "ten-miles-and-eight-names",
      title: "12 · Ten miles, and eight names",
      section: "Section 4 · The same practice at the ceremony, and afterwards",
      body: `The practice Sections 1 and 2 documented on paper shows up again, out on the line, on the most celebrated day of the whole construction.

**28 April 1869.** As the line neared Promontory Summit, the Central Pacific laid ten miles and fifty-six feet of track in a single day, working from five in the morning to seven at night, in settlement of a ten thousand dollar wager Charles Crocker had made with Thomas Durant of the Union Pacific. Stanford's page records what went down: 25,800 ties, 3,520 rails averaging 560 pounds each, 55,080 spikes, 14,050 bolts, four and a half million pounds of material in all. And it records who did it: "A squad of eight Irish rail-handlers and an army of several thousand Chinese accomplished the feat."

**The next two sentences on that page are the reason this lesson exists.**

> "The names of the eight Irish workers were recorded by the railroad; they were taken to Sacramento to be cheered in a parade, their wagon filled with flowers thrown by women and children. None of the Chinese workers' names were recorded."

**Eight names and an army.** It is the same arrangement as the payroll sheet, done in public: individual names for one group, a category for the other, on the same day, for the same job, by the same company.

**The company said it in its own magazine, and the shape of the sentence is the evidence.** Stanford quotes Erle Heath, writing in the *Southern Pacific Bulletin* in May 1928: "With the eight sons of Erin and the sons of 'John Chinaman' rest the palms of a great track-laying victory." One half of that sentence stands for eight men whose names the railroad wrote down. The other half is a period slur used as a collective noun. It is quoted here once, because a course about naming has to be able to show what the alternative to a name looked like in print.

**Now set it beside the testimony.** At printed page 728 Strobridge told the committee, "Our track-layers were almost always white men." The eight men who were named on 28 April 1869 were doing the job the company staffed with white workers, which is the job whose names it kept. The pattern in the NAMES column was not an accident of the Sierra. It ran all the way to the last week of construction.

**One small arithmetic check to carry into the last two lessons.** At the centennial in 1969 the US Secretary of Transportation asked the crowd, "Who else but Americans could have laid ten miles of track in 12 hours?" Stanford's account of the day runs from five in the morning to seven at night, which is fourteen hours. The feat did not need improving. It got improved anyway, and the people it was taken from were not mentioned.

:::reveal What is the difference between the two halves of the 1928 sentence Stanford quotes? ||| One half stands for eight men, the sons of Erin, whose names the railroad recorded. The other half is a category, the sons of John Chinaman, and names nobody.

:::reveal Which sentence of Strobridge's testimony sits beside the eight recorded names? ||| Our track-layers were almost always white men.

## Vocabulary
- **The ten-mile day**: 28 April 1869, when the Central Pacific laid ten miles and fifty-six feet of track between five in the morning and seven at night.
- **Rail-handler**: one of the eight men who carried and set the rails, the crew whose names the railroad recorded.
- **Category in place of a name**: the move this course tracks, where a record enters a group label where an individual entry belongs.
- **Promontory Summit**: the point in Utah, at mile 690, where the two railroads met on 10 May 1869.

## Sources
Chinese Railroad Workers in North America Project. (n.d.). *Geography of Chinese workers building the transcontinental railroad*. Stanford University. https://chineserailroadworkers.stanford.edu/virtual/ (Re-fetched and read in full 2026-09-20. Locators: the section on the approach to Promontory, for the ten miles and fifty-six feet, the five in the morning to seven at night working day, the $10,000 wager with Durant, the materials list and the eight Irish rail-handlers; the paragraph immediately following it for the two sentences on whose names were recorded and for the quotation of Erle Heath, *Southern Pacific Bulletin*, May 1928. Heath's article itself was not obtained, so it is quoted only as Stanford quotes it.)
United States Congress, Joint Special Committee to Investigate Chinese Immigration. (1877). *Report of the Joint Special Committee to Investigate Chinese Immigration* (44th Cong., 2d Sess., S. Rept. No. 689). Government Printing Office. https://archive.org/details/reportofjointspe00unit/page/n727 (Testimony of James H. Strobridge, printed pp. 723-728. "Our track-layers were almost always white men" closes the wage ladder that spans **printed pp. 727-728, scan pp. 727-728**, read as page images.)
Obenzinger, H. (2019). *One more spike in Utah: Commemorating the 150th anniversary of the completion of the transcontinental railroad at Promontory Summit*. Chinese Railroad Workers in North America Project, Stanford University. https://chineserailroadworkers.stanford.edu/wp-content/uploads/2020/01/Obenzinger-Utah-Essay.pdf (Downloaded and read 2026-09-20. Locator: **p. 2**, which quotes the 1969 address, including "Who else but Americans could have laid ten miles of track in 12 hours?")`,
    },
    {
      slug: "the-photograph-and-its-hedges",
      title: "13 · The photograph, and what it will not settle",
      section: "Section 4 · The same practice at the ceremony, and afterwards",
      body: `This subject usually opens with a photograph. This course gives it one lesson, near the end, on purpose. The documents you have already read settle what the photograph is normally asked to prove, and the photograph on its own settles nothing.

**What it is.** The National Park Service page for Golden Spike National Historical Park calls it "the most famous photograph associated with the first transcontinental railroad", names it Andrew J. Russell's "East and West Shaking Hands at Laying of Last Rail", notes that it is "commonly known as 'The Champagne Photo'", and records that it was one of many glass-plate exposures made on 10 May 1869 by three photographers who were present. The same page lists who was at the ceremony, including "railroad workers (including a Chinese contingent from the Central Pacific)".

**Who was still on the line by then.** Stanford's page is careful: by the day of the ceremony "almost all of the Chinese and other workers had been either dismissed or were moved west to improve the hasty construction, leaving a few Chinese to complete the work."

**What can be seen in the frame, in the words of the people who have looked hardest.** Stanford: "it seems that Chinese do not appear in the crowd ... There may be one or two Chinese in baggy and patched work clothes"; one worker "has his back turned to the camera, although no one else stands with his back turned"; and a white man beside another similarly dressed man "holds his hat very deliberately to hide the face of the person standing next to him", which in an era of long exposures is a strange thing to hold. Obenzinger, writing for the same project: "There were no Chinese in the 1869 photograph, except for perhaps a couple of blurry backs and a hat held in front of a face that could have been Chinese."

**What is not in that frame is in another one.** Stanford reports "another, less famous but most informative, photograph by Russell taken minutes before his iconic one" showing Chinese workers completing the final work to link the two lines, and states that "Eyewitness accounts confirm that it was the Chinese who laid the last rail."

**And the record of the photograph disagrees with itself**, which is the part that belongs in this course. On one Stanford page the body text calls the photographer "Alfred Joseph Russell" while the caption on the same page calls him "Andrew J. Russell", which is also what the National Park Service calls him. The title appears three different ways across those two pages. The holder's own form, as Stanford's caption gives it, is "East and West shaking hands at the laying of the last rail", Plate 227, Andrew J. Russell Collection, Oakland Museum of California, and the Park Service records that Russell's 650 glass-plate negatives are now in that museum. When a record cannot hold its own maker's name steady across two paragraphs, that is worth noticing before asking it to identify a face.

**A named alternative, taught as contested and not adopted.** Edson T. Strobridge argued in 2001, on cprr.net, that the famous photograph was taken after the ceremony, once the Chinese crew had gone to dine at J. H. Strobridge's boarding car, and called the story that they fled at a shouted warning "no more than another myth". That site is an enthusiast archive rather than a repository, and the argument has not been checked against a holder's record here, so this course names the claim and the man who makes it and leaves it open.

**The honest conclusion.** The photograph cannot tell you who laid the last rail, and neither can an absence in it tell you who was excluded. What it can do is show a learner how quickly a single image gets asked to carry an argument that belongs to the paperwork. *Who Made the Record* works this ground in its lessons 7 and 8, on a caption that carries a name and on what "attributed to" admits.

:::reveal What does the Stanford project say can be seen of Chinese workers in the famous photograph? ||| That they do not seem to appear in the crowd, that there may be one or two in baggy and patched work clothes, that one man has his back turned, and that a white man holds a hat up to hide the face beside him.

:::reveal Why does this course give the photograph only one lesson? ||| Because the payroll sheets and the testimony already settle what the photograph is usually asked to prove, and on its own it settles nothing.

## Vocabulary
- **East and West Shaking Hands at Laying of Last Rail**: the National Park Service's form of the title of Russell's photograph of 10 May 1869.
- **Plate 227**: the number the Oakland Museum of California gives the image in the Andrew J. Russell Collection.
- **Glass-plate negative**: the photographic medium of 1869, requiring long exposures, which is why a deliberately held hat is worth noticing.
- **Contested claim**: one that named parties disagree about, taught with both names attached rather than resolved.

## Sources
National Park Service. (n.d.). *A moment in time*. Golden Spike National Historical Park. https://www.nps.gov/gosp/learn/historyculture/a-moment-in-time.htm (Re-fetched and read in full 2026-09-20. Locators: the opening paragraph for the title, the Champagne Photo name, Andrew J. Russell and the three photographers; the paragraph on Russell's later career for the 650 glass-plate negatives now in the Oakland Museum; the paragraph on who attended for "railroad workers (including a Chinese contingent from the Central Pacific)".)
Chinese Railroad Workers in North America Project. (n.d.). *Geography of Chinese workers building the transcontinental railroad*. Stanford University. https://chineserailroadworkers.stanford.edu/virtual/ (Re-fetched and read in full 2026-09-20. Locators: the section on the Golden Spike ceremony for the dismissal and westward move of the workers; the paragraph analysing the photograph for "there may be one or two Chinese", the turned back, the held hat, the less famous Russell photograph and the eyewitness accounts; the image caption on the same page for "East and West shaking hands at the laying of the last rail", Plate 227, Oakland Museum of California, which differs from the body text's "Alfred Joseph Russell".)
Obenzinger, H. (2019). *One more spike in Utah: Commemorating the 150th anniversary of the completion of the transcontinental railroad at Promontory Summit*. Chinese Railroad Workers in North America Project, Stanford University. https://chineserailroadworkers.stanford.edu/wp-content/uploads/2020/01/Obenzinger-Utah-Essay.pdf (Downloaded and read 2026-09-20. Locator: **p. 10**, the paragraph beginning "After the formal program came The Photograph", for "a couple of blurry backs and a hat held in front of a face".)
Strobridge, E. T. (2001). [Argument on the timing of the Golden Spike photograph]. Central Pacific Railroad Photographic History Museum, cprr.net. (Reported, not verified against a holder's record. Cited in the lesson by the name of the person making the claim, and not adopted. The site is an enthusiast archive rather than a repository, which is the reason for the hedge.)`,
    },
    {
      slug: "who-corrected-it-and-with-what",
      title: "14 · Who corrected it, and with what",
      section: "Section 4 · The same practice at the ceremony, and afterwards",
      body: `Records do get corrected. It is worth being exact about what the corrections in this case actually reached, because the answer is not the payroll.

**1919, a float.** A photograph in the Stanford project's pages carries this caption: "Ging Cui, Wong Fook, and Lee Shao, three of the eight Chinese workers who put the last rail in place, on a float at the 50th Anniversary celebration of the completion of the transcontinental railroad in Ogden, Utah." It is credited to the Amon Carter Museum of American Art Archives. Three names, fifty years late, riding a parade float.

**Be precise about what that is evidence of.** The caption is verified: it is on the page, and it says what it says. The identification behind it has not been traced to a 1919 record for this course, and neither has the claim that eight Chinese workers put the last rail in place. Both are reported, and both are filed as a research check. Even so, three names in a caption is three more than the company's own paperwork produced in six years.

**1969, a speech.** At the centennial ceremony at Promontory the US Secretary of Transportation gave the main address. Obenzinger quotes it: "Who else but Americans could drill ten tunnels in mountains 30 feet deep in snow? Who else but Americans could chisel through miles of solid granite? Who else but Americans could have laid ten miles of track in 12 hours?" Obenzinger records that Philip Choy and Thomas Chinn of the Chinese Historical Society of America were in the audience, that the society had prepared two commemorative plaques in English and Chinese, that Choy was scheduled to speak and introduce a plaque, and that the organisers stopped him because an unexpected guest had to be accommodated.

**2019, an address.** At the 150th anniversary at Promontory the opening address was given by a great-granddaughter of a Central Pacific worker. This course does not quote her and does not name her, because she is living and the rule this catalog works under keeps living private individuals out. What is worth recording is the change in the programme: the same podium, fifty years apart, and a descendant at it rather than stopped short of it. Obenzinger also records that for several years the photographer Corky Lee has gathered Chinese Americans to pose in front of the two locomotives, replicating the scene of the 1869 photograph in order, as the essay puts it, "to correct the representation".

**So what has been corrected, and what has not.** *Who Gets Named*, in its lesson 21, lists the instruments that actually change a record: a correction, a retraction, an erratum, an amended author line. **Not one of those exists for a payroll.** There is no amended Pay Roll No. 102 to issue and no register of the dead to reopen, because the entry was never made and the register was never kept. What the last hundred years have changed is the caption, the speaker list, and the reader's default assumption about who built the line. Those are real, and they are not the same thing as a name restored.

**The method to take away**, which works on any record of this shape.

1. **Ask which column the name would have been in**, and then go and look at that column.
2. **Read the form's own promise against its own entries.** "Our respective names" against eleven names is the whole argument on one sheet.
3. **Take a circulating number back to the arithmetic that made it**, and name the constant somebody had to assume.
4. **Quote the page, not the retelling.** Five of the quotations this course was going to use at second hand turned out to be wrong, and every one of them was fixable by opening the source.

:::reveal What three names does the 1919 caption carry? ||| Ging Cui, Wong Fook and Lee Shao, described as three of the eight Chinese workers who put the last rail in place.

:::reveal Why can no correction restore the names on this payroll? ||| Because every instrument that corrects a record acts on an existing entry, and the entry was never made. There is no amended payroll to issue and no register of the dead to reopen.

## Vocabulary
- **Retrospective significance**: Trouillot's fourth moment, the making of history in the final instance, which is where commemorations and corrections sit.
- **Instrument of correction**: a formal act such as a correction, a retraction or an erratum, each of which needs an existing entry to act on.
- **Caption as evidence**: a museum or project caption that can be verified as text while the identification behind it remains unchecked.
- **Default assumption**: what a reader believes without looking it up, which is the thing a commemoration most reliably changes.

## Sources
Chinese Railroad Workers in North America Project. (n.d.). *Geography of Chinese workers building the transcontinental railroad*. Stanford University. https://chineserailroadworkers.stanford.edu/virtual/ (Re-fetched and read in full 2026-09-20. Locator: the image caption naming Ging Cui, Wong Fook and Lee Shao on a float at the 50th anniversary celebration in Ogden, Utah, credited to the Amon Carter Museum of American Art Archives. The caption is quoted as a caption; the underlying 1919 identification was not traced.)
Obenzinger, H. (2019). *One more spike in Utah: Commemorating the 150th anniversary of the completion of the transcontinental railroad at Promontory Summit*. Chinese Railroad Workers in North America Project, Stanford University. https://chineserailroadworkers.stanford.edu/wp-content/uploads/2020/01/Obenzinger-Utah-Essay.pdf (Downloaded and read 2026-09-20. Locators: **p. 2** for the 1969 address, the two prepared plaques, and Choy being stopped from speaking for an unexpected guest; **p. 10** for the annual group photograph made to correct the representation.)
Chinese Railroad Workers in North America Project. (n.d.). *Key questions*. Stanford University. https://chineserailroadworkers.stanford.edu/faqs/ (Re-fetched 2026-09-20. Locator: the answer on workers' names, for the statement that the project has been collecting names from oral history interviews with descendants because so few appear in the records.)`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · A form that cannot hold a person",
      section: "Section 1 · A form that cannot hold a person",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is written in manuscript across the head of Pay Roll No. 102?",
            options: ["China Labour, across the top left", "Sissons China Roll, the 1866 docket", "Central Pacific Railroad, Contractors", "Sisson, Wallace, Labor Recruitment"],
            correctIndex: 0,
            explanation: "The manuscript heading sits across the top left of the March 1865 sheet. The November 1866 sheet is headed Sissons China Labour, with Sissons China Roll on its folded docket (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which repository holds Pay Roll No. 102?",
            options: ["The California State Railroad Museum", "The Stanford Digital Repository", "The Amon Carter Museum of American Art", "The Oakland Museum of California"],
            correctIndex: 0,
            explanation: "The sheet belongs to the museum's Library and Archives in Sacramento and was digitised by California Revealed (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What does the printed receipt line on Pay Roll No. 102 promise to pay?",
            options: ["The sums set opposite our respective names", "Each head-man's pay for all his gang's labour", "The sums due to each contracting firm that month", "Thirty dollars a month, less board and sundries"],
            correctIndex: 0,
            explanation: "The form was designed to carry one name for each person paid. That is the promise the eleven entries are measured against (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How many names are in the NAMES column of Pay Roll No. 102?",
            options: ["Eleven", "Twenty-six", "Forty-six", "Twenty-three"],
            correctIndex: 0,
            explanation: "Eleven entries, each with ditto marks running beneath it, against a sheet total of 14,899 and a quarter man-days (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Whose name is printed on the receipt line of Pay Roll No. 102 as the contractor?",
            options: ["C. Crocker", "J. H. Strobridge", "A. W. Sisson", "Leland Stanford"],
            correctIndex: 0,
            explanation: "The line reads Received from C. CROCKER, Contractor, Central Pacific Railroad Company. Strobridge appears in the SIGNATURES column, not the printed line (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What is the total number of days recorded at the foot of Pay Roll No. 102?",
            options: ["14,899 and a quarter", "10,427 and a half", "2,621 and a quarter", "16,914 and a half"],
            correctIndex: 0,
            explanation: "The foot line of the sheet totals 14,899 and a quarter man-days, alongside $16,914.59 (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What is the money total at the foot of Pay Roll No. 102?",
            options: ["$16,914.59", "$39,756.40", "$2,993.19", "$2,512.57"],
            correctIndex: 0,
            explanation: "One month, one sheet, eleven names and $16,914.59 (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What does the note Total 2249 @ 30$/p m on Pay Roll No. 102 tell you?",
            options: ["That the rate was thirty dollars a month", "That 2,249 men were employed that month", "That the gang worked 2,249 hours at thirty cents", "That thirty dollars was deducted for board"],
            correctIndex: 0,
            explanation: "It states the monthly rate against a block of 2,249 man-days, which is what lets the daily rate be derived (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Roughly how many men stand behind the eleven names, on the sheet's own arithmetic?",
            options: ["About five hundred and seventy", "About twenty-three thousand", "About one thousand four hundred", "About two hundred and eighty"],
            correctIndex: 0,
            explanation: "14,899 and a quarter man-days divided by a twenty-six-day month. The figure rests on an assumption that Section 3 takes apart (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What divisor turns the sheet's man-days into a number of men?",
            options: ["Twenty-six", "Thirty", "Twenty-eight", "Eleven"],
            correctIndex: 0,
            explanation: "Twenty-six working days to a month, a figure derived from the sheet and then stated outright in the testimony (lessons 1 and 8).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Why is the scan's embedded text recognition not used for Pay Roll No. 102?",
            options: ["It is unusable on the handwriting", "No text is published for manuscripts", "The sheet's typeface defeats the software", "The transcription awaits a rights review"],
            correctIndex: 0,
            explanation: "Every reading in this course comes off the image instead, which is also what the citation says (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How is the same head man's name written on two different lines of Pay Roll No. 102?",
            options: ["Ah You on one and Au You on another", "Hung Wah and Hung Wah Company", "Ah Fong in NAMES and Ah Tong in OCCUPATION", "Ah Sin on one and Kong Won on another"],
            correctIndex: 0,
            explanation: "The variation is the finding. A hand that cannot hold one name steady is not a hand keeping a register of people (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which reading of the second name on Pay Roll No. 102 does the paper settle?",
            options: ["Neither", "Ah Fong", "Ah Tong", "Ah Toy"],
            correctIndex: 0,
            explanation: "The entry is a tall crossed loop that reads equally well either way, and this course records it as unsettled rather than deciding it (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What does the prefix Ah signify in these records?",
            options: ["A familiar form of address", "A shared family name", "A contraction of the word company", "A mark for an unrecorded full name"],
            correctIndex: 0,
            explanation: "It is a familiar Cantonese prefix, so a column of Ah entries is a column of first-name-only entries (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How does the Stanford project gloss the prefix Ah?",
            options: ["As less formal than Mister", "As the Cantonese for a surname", "As the paymaster's unverified mark", "As a contractor's standard prefix"],
            correctIndex: 0,
            explanation: "Its pages describe Ah as a designation less formal than Mister, and list Ah Fong, Ah Chung and Ah Lim as examples (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which entry in the NAMES column of Pay Roll No. 102 is a firm rather than a person?",
            options: ["Ah Henge & Co", "Billy Yang", "Coon Sing", "Wong Wain"],
            correctIndex: 0,
            explanation: "The ampersand and Co are clear at full resolution. By November 1866 the column is full of firms (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What runs beneath each name in the NAMES column of Pay Roll No. 102?",
            options: ["Ditto marks", "Section numbers", "Pencil entries", "Signatures"],
            correctIndex: 0,
            explanation: "Each of the eleven entries has ditto marks running under it, so one name covers a block of lines (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How many sheets of paper is Pay Roll No. 102?",
            options: ["One", "Three", "Four", "Two"],
            correctIndex: 0,
            explanation: "One sheet, twenty-three inches by thirteen and three quarters, filled in by hand (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which of these is a printed column heading on Pay Roll No. 102?",
            options: ["When Paid", "Less for Board", "Camp No.", "Deductions"],
            correctIndex: 0,
            explanation: "The headings run NAMES, OCCUPATION, When Paid, From what date, To what date, No. of days, Rate per diem, TOTAL, SIGNATURES (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How does this course handle the racial slurs in its sources?",
            options: ["It quotes each once and says why", "It paraphrases them throughout", "It omits every one of them", "It reproduces them wherever used"],
            correctIndex: 0,
            explanation: "Each is quoted once, where the shape of the sentence is itself the evidence, and the lesson states the reason (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which organisation digitised Pay Roll No. 102?",
            options: ["California Revealed", "Stanford Libraries", "Internet Archive scanners", "The Amon Carter Museum"],
            correctIndex: 0,
            explanation: "California Revealed digitised it from the railroad museum's holding, and the Internet Archive serves the result as item cscrm_000116 (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What is the Internet Archive identifier for Pay Roll No. 102?",
            options: ["cscrm_000116", "nj738wv1221", "wc715hx2338", "reportofjointspe00unit"],
            correctIndex: 0,
            explanation: "The item identifier is what lets a reader open the same image this course was read from (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which month does Pay Roll No. 102 cover?",
            options: ["March 1865", "November 1866", "February 1866", "January 1864"],
            correctIndex: 0,
            explanation: "The printed receipt line names the month: services performed during the month of March 1865 (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What does the OCCUPATION column of Pay Roll No. 102 actually contain?",
            options: ["Personal names", "Trades", "Numbered gangs", "Chinese firm names"],
            correctIndex: 0,
            explanation: "Twenty-six personal names with initials, in a column headed OCCUPATION, on a sheet whose other name column holds eleven entries (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What is written on the last line of the OCCUPATION column instead of a name?",
            options: ["By Bill Pike Camps", "Sisson, Wallace & Co.", "Less for Board, etc.", "Track, Summit and Tunnel"],
            correctIndex: 0,
            explanation: "A place rather than a person, which is the one exception in a column of twenty-six surnames (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which name appears in the OCCUPATION column of both payroll sheets?",
            options: ["John Keating", "Hung Wah", "A. W. Sisson", "J. H. Strobridge"],
            correctIndex: 0,
            explanation: "He is the check a learner can run without any expertise: one man, two documents, twenty months apart (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Beside which head man does John Keating stand on the March 1865 sheet?",
            options: ["Billy Yang", "Hung Wah #3", "Tang Sung", "Coon Sing"],
            correctIndex: 0,
            explanation: "In 1865 beside Billy Yang, in 1866 beside Hung Wah number three and Tang Sung. Three head men, one foreman (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Beside which entries does John Keating stand on the November 1866 sheet?",
            options: ["Hung Wah #3 and Tang Sung", "Sisson #57 and Sisson #6 Co", "Billy Yang and Coon Sing", "Terry & Patch and Leury & Tucker"],
            correctIndex: 0,
            explanation: "Two different Chinese entries on the later sheet, twenty months after Billy Yang (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What does the Keating check prove about the OCCUPATION column?",
            options: ["It records a person, not a trade", "The gang kept one head man throughout", "It was filled in later by the museum", "It recorded each Chinese contractor"],
            correctIndex: 0,
            explanation: "A column that repeats one man's name across twenty months and three different head men is recording a person, not a trade (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which entries on the 1866 sheet close the question a second way?",
            options: ["The partnerships", "The numbered gangs", "The firms ending in Hong", "The section numbers"],
            correctIndex: 0,
            explanation: "Terry & Patch, Callaway & McGonigle, McGonigle & Blodgett and Leury & Tucker. No occupation has ever been a partnership (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which of these is a partnership entry in the 1866 OCCUPATION column?",
            options: ["Terry & Patch", "Sisson, Wallace & Co.", "Ah Henge & Co", "Kohn & Company"],
            correctIndex: 0,
            explanation: "Alongside Callaway & McGonigle, McGonigle & Blodgett and Leury & Tucker (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which sheet does Stanford's catalogue abstract describe as consisting entirely of Chinese contractors and their foremen?",
            options: ["Pay Roll No. 115", "Pay Roll No. 102", "Pay Roll No. 331", "Pay Roll No. 369"],
            correctIndex: 0,
            explanation: "The February 1866 sheet, whose abstract is a professional cataloguer describing the structure this course establishes (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "How many names are in the OCCUPATION column of Pay Roll No. 102?",
            options: ["Twenty-six", "Eleven", "Forty-six", "Eight"],
            correctIndex: 0,
            explanation: "Twenty-six surnames, most with initials, plus a place on the last line (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What form do the OCCUPATION-column names take?",
            options: ["Initials and a surname", "Chinese firm names", "Surnames with a number", "Trades such as blaster"],
            correctIndex: 0,
            explanation: "J. W. Shepard, C. B. Sampson, G. S. Powers and so on. That is how a record writes down a person it intends to identify (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which lesson of Who Made the Record does this course point to for the mechanism?",
            options: ["Lesson 5", "Lesson 7", "Lesson 8", "Lesson 17"],
            correctIndex: 0,
            explanation: "A record made about people: a document produced about a group by somebody else. This course supplies a case with both halves in one set of ruled columns (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What does Crocker's testimony say the foreman does?",
            options: ["Keeps the account with the gang", "Counts the gang's days every night", "Divides the pay among the gang", "Signs for the money for the firm"],
            correctIndex: 0,
            explanation: "The nightly count came from the Chinese book-keeper. The foreman kept the company's account with the gang (lessons 2 and 7).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which column on Pay Roll No. 102 holds individual names throughout?",
            options: ["OCCUPATION", "NAMES", "TOTAL", "When Paid"],
            correctIndex: 0,
            explanation: "One column for the men who moved the rock and one for the men who watched them, and only one of them holds individual names (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Why is a partnership entry decisive against reading the column as a trade?",
            options: ["No occupation is a partnership", "Partnerships were illegal in the 1860s", "Foremen were only hired individually", "Partnerships went in SIGNATURES"],
            correctIndex: 0,
            explanation: "Two surnames joined by an ampersand name two people in business together, which no trade ever is (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "How far apart in time are the two John Keating entries?",
            options: ["Twenty months", "Eleven years", "Fifty years", "Six years"],
            correctIndex: 0,
            explanation: "March 1865 and November 1866. Long enough that no single job or crew could explain the repetition (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Why is the contrast between the two columns hard to explain as an accident?",
            options: ["Both are on one sheet in one hand", "Different clerks filled the two columns", "The repository added OCCUPATION later", "NAMES was copied from a Chinese book"],
            correctIndex: 0,
            explanation: "Same paper, same hand, same clerk, same month. Whatever else the record is, it did not lack a way to write down a labourer's name (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What does the entry By Bill Pike Camps refer to?",
            options: ["A place", "A partnership", "A trading house", "A contractor"],
            correctIndex: 0,
            explanation: "It closes the OCCUPATION column with a location instead of a person, the one exception in twenty-six lines (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "How many different Chinese entries does John Keating's name connect across the two sheets?",
            options: ["Three", "Eleven", "Twenty-six", "Four"],
            correctIndex: 0,
            explanation: "Billy Yang in 1865, then Hung Wah number three and Tang Sung in 1866 (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What does the OCCUPATION column tell you about the railroad's ability to record a labourer's name?",
            options: ["It had one, and used it for foremen", "It could not transliterate Cantonese", "It recorded only men paid directly", "It recorded only the injured or dead"],
            correctIndex: 0,
            explanation: "Twenty-six individual names with initials sit one column away from eleven entries covering hundreds of men (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which pair of similar surnames appears as separate entries in the 1865 OCCUPATION column?",
            options: ["Wilkins and J. L. Wilkins", "Sisson and Wallace", "Callaway and McGonigle", "Sisson and A. W. Sisson"],
            correctIndex: 0,
            explanation: "The column distinguishes between two men of the same surname, which is a level of care the NAMES column never receives (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What is the manuscript heading on Pay Roll No. 331?",
            options: ["Sissons China Labour", "China Labour", "Sissons China Roll", "Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "The folded docket on the outside says Sissons China Roll; the heading on the sheet itself says Sissons China Labour (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What does the docket of Pay Roll No. 331 say?",
            options: ["Sissons China Roll", "Sissons China Labour", "China Labour", "Payroll No. 331, Box 23"],
            correctIndex: 0,
            explanation: "The docket is the outside of the folded document and carries its short title (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Which collection holds Pay Roll No. 331?",
            options: ["MS 79, at the railroad museum", "The Russell Collection, Oakland", "The Huntington Papers", "The Amon Carter Museum Archives"],
            correctIndex: 0,
            explanation: "MS 79, Series 4, Box 23, the Central Pacific Railroad Collection at the California State Railroad Museum (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Which deduction column is printed on the November 1866 form?",
            options: ["Less for Board, etc.", "Rate per diem", "Fines and Detentions", "Board and Lodging"],
            correctIndex: 0,
            explanation: "The later form says in print what the earlier one left to an illegible manuscript note (lessons 3 and 8).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "How many separate Hung Wah entries are on Pay Roll No. 331?",
            options: ["Four", "One", "Eleven", "Twenty-three"],
            correctIndex: 0,
            explanation: "Numbers three, eighteen and nine, plus Hung Wah Co. Four gangs under one contractor, not four men (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What does an entry such as Sisson #57 record?",
            options: ["A numbered gang", "A single worker", "The 57th payroll sheet", "A $57 board deduction"],
            correctIndex: 0,
            explanation: "The white labour contractor's own surname with a serial number attached, written where a name goes (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What is a hong?",
            options: ["A trading house", "A gang of thirty men", "A Cantonese title", "A numbered section"],
            correctIndex: 0,
            explanation: "Several entries in the 1866 NAMES column end in Hong and are firms rather than individuals (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What does the second column of Pay Roll No. 331 carry besides foremen's names?",
            options: ["Section numbers", "Chinese characters", "Board deductions", "Payment dates"],
            correctIndex: 0,
            explanation: "Sections 25, 35, 36, 37, 38 and 41, together with the words Track, Summit and Tunnel (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Which words appear beside the section numbers on Pay Roll No. 331?",
            options: ["Track, Summit and Tunnel", "Detention and Loosing Harness", "Grader, blaster and rail-handler", "China Labour and Camp No."],
            correctIndex: 0,
            explanation: "The ledger can place a gang on a particular stretch of the line, even though it cannot say who was in it (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What blank does the printed 1866 form carry that the 1865 form does not?",
            options: ["Camp No.", "SIGNATURES", "OCCUPATION", "When Paid"],
            correctIndex: 0,
            explanation: "A printed blank for the camp number, part of the same tendency to record the place rather than the person (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What can the ledger place precisely, and what can it not?",
            options: ["The work, not the worker", "The worker, not the wage", "The wage, not the work", "The date, not the place"],
            correctIndex: 0,
            explanation: "Section numbers, camps and the words Track, Summit and Tunnel place a gang on the line. Nothing on the sheet names the men in it (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Which repository serves Pay Roll No. 331 openly online?",
            options: ["The Stanford Digital Repository", "The Internet Archive", "California Revealed", "The Oakland Museum"],
            correctIndex: 0,
            explanation: "Handle nj738wv1221, with world view and download, so a learner can open the same images this course was read from (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "How many of the surviving Central Pacific payroll sheets can be read without an appointment?",
            options: ["Three", "All of them", "None", "Nineteen"],
            correctIndex: 0,
            explanation: "One at the Internet Archive and two at the Stanford Digital Repository. The rest need an appointment in Sacramento (lessons 3 and 11).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What happened to the NAMES column between March 1865 and November 1866?",
            options: ["It filled with firms and numbers", "It listed every worker by name", "It gave way to section numbers", "It added English transliterations"],
            correctIndex: 0,
            explanation: "From eleven names, some of them firms, to firms, numbered gangs and the contractor's own surname (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "On how many lines of Pay Roll No. 331 is the entry the white contractor's surname with a number?",
            options: ["Three", "Eleven", "Twenty-six", "Forty-six"],
            correctIndex: 0,
            explanation: "Sisson number fifty-seven, Sisson number six Co, and Sisson Kung Bo one (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What does Co at the end of a NAMES-column entry indicate?",
            options: ["A company", "A leaderless gang", "A subcontractor", "A direct hire"],
            correctIndex: 0,
            explanation: "Hop Pine Co, Kwong Co, Ah Sing Co and many more. The unit of record is an entity, not a person (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What is the Stanford handle for Pay Roll No. 331?",
            options: ["nj738wv1221", "wc715hx2338", "cscrm_000116", "ark:/13960/t9x09qv5c"],
            correctIndex: 0,
            explanation: "The druid is the locator that lets a reader open the same IIIF images (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "In how many views was Pay Roll No. 331 read?",
            options: ["Three", "One", "Twenty", "Four"],
            correctIndex: 0,
            explanation: "A docket, a recto and a verso, served as IIIF images at 3456 by 5184 (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What does the NAMES column of Pay Roll No. 331 let a learner watch happen?",
            options: ["A naming system dissolving", "A workforce growing tenfold", "A monthly wage rising", "Deaths entered beside days"],
            correctIndex: 0,
            explanation: "Two pieces of paper, twenty months apart, and the change is visible without a historian's help (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Which name appears in the 1866 SIGNATURES column against the two largest sums?",
            options: ["Sisson", "Strobridge", "Kohn", "Keating"],
            correctIndex: 0,
            explanation: "Paid Sisson twice, against $39,756.40 and $38,090.74, though those two words were read as show-through and carry lower confidence (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which surname closes the SIGNATURES column of Pay Roll No. 102?",
            options: ["Strobridge", "Sisson", "Crocker", "Keating"],
            correctIndex: 0,
            explanation: "The last line reads Paid Strobridge. He is the construction superintendent who testified the day after Crocker (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which entry in the 1865 SIGNATURES column has an unreadable second name?",
            options: ["Paid Kohn &", "Paid A. W. Sisson", "Paid Strobridge", "Paid Egbert & Co"],
            correctIndex: 0,
            explanation: "The Egbert entry's uncertainty is in its first word, which may be Sut, Lut or Set. The Kohn entry's second name cannot be read at all (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which subject heading do Stanford's catalogue records for the 1866 sheets carry?",
            options: ["A. W. Sisson", "J. H. Strobridge", "Charles Crocker", "John Keating"],
            correctIndex: 0,
            explanation: "Alongside Labor recruitment, which is what confirms the SIGNATURES reading from the other direction (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which firms does the Stanford project name as the largest labour contractors?",
            options: ["Sisson, Wallace and Egbert", "Koopmanschap and the Six Companies", "Hung Wah and the Chinese houses", "Crocker and Company"],
            correctIndex: 0,
            explanation: "It describes the largest labour contractors as white owned and names those three, two of which appear in the SIGNATURES column of one 1865 sheet (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "How many links are in the chain of payment the paper documents?",
            options: ["Five", "Two", "Three", "Nine"],
            correctIndex: 0,
            explanation: "Worker, head man or numbered gang, foreman's time book, Crocker's payroll, and a payment to a supply firm (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Where on Pay Roll No. 102 are the Chinese characters written?",
            options: ["Beside the Coon Sing block", "Across the head of the sheet", "In the OCCUPATION column", "On the folded docket"],
            correctIndex: 0,
            explanation: "Two clusters, roughly eleven characters, brush-written in a running commercial hand in the signature area (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which Chinese character on the sheet can be read with confidence?",
            options: ["收, meaning received", "工, meaning work", "中, meaning middle", "人, meaning person"],
            correctIndex: 0,
            explanation: "The receipt formula is legible. The rest have strokes that merge at the available resolutions (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What would a full transcription of the Chinese characters require?",
            options: ["A specialist reader and a better image", "A conservator to clean the brushwork", "Stanford's permission to publish", "The book-keeper's own surviving book"],
            correctIndex: 0,
            explanation: "A reader of nineteenth-century Cantonese commercial script, working from the original or from a higher-resolution capture. It is filed as a research check (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What is the honest lesson of the Chinese characters on Pay Roll No. 102?",
            options: ["The one place in their language cannot be read", "The workers signed individually after all", "A Chinese clerk kept the company's book", "The sheet was first written in Chinese"],
            correctIndex: 0,
            explanation: "The single place on the document where the workers' own language appears is the single place a modern reader cannot yet read (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What is unusual about the Lew San and Ah Chong lines on Pay Roll No. 102?",
            options: ["They have no occupation entry", "They alone are in Chinese characters", "They carry the two largest totals", "They recur on the 1866 sheet"],
            correctIndex: 0,
            explanation: "A different and fainter pencil hand, no OCCUPATION entry, and a shared total of $2.27, the smallest sum on the sheet (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What do the Lew San and Ah Chong lines total?",
            options: ["$2.27", "$16,914.59", "$2,512.57", "$420.42"],
            correctIndex: 0,
            explanation: "The smallest sum on the sheet, which is part of why they look like individuals paid directly rather than gangs (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Why does this course build nothing on the Lew San and Ah Chong lines?",
            options: ["Their figures are not legible", "The names appear nowhere else", "They are flagged as later additions", "Both names are firms, not people"],
            correctIndex: 0,
            explanation: "The supporting figures beside them cannot be read at the available scan resolution, so the observation is recorded and not leaned on (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "How many non-crew direct paid employees did Chew remove from his name list?",
            options: ["156", "816", "972", "1,507"],
            correctIndex: 0,
            explanation: "Which suggests that entries like the two pencil lines on Pay Roll No. 102 do exist across the series (lessons 4 and 9).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Why do the two Paid Sisson readings on the 1866 sheet carry lower confidence?",
            options: ["They were read as show-through", "The scan was at lower resolution", "They are written in pencil", "They are abbreviated to initials"],
            correctIndex: 0,
            explanation: "They were read through the paper on the reverse of the scan. The docket figure of $39,756.40 is clear (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What did the men whose gangs are named on Pay Roll No. 102 receive?",
            options: ["Not the payment recorded beside them", "A signed Chinese receipt per man", "An entry in the SIGNATURES column", "A separate sheet of their own days"],
            correctIndex: 0,
            explanation: "The receipt line promises payment to those whose names are set opposite the sums. The signatures beside the blocks are contractors' (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What is the docket figure on Pay Roll No. 331?",
            options: ["$39,756.40", "$38,090.74", "$16,914.59", "$2,993.19"],
            correctIndex: 0,
            explanation: "That figure and the sheet's own title are clear, unlike the two Paid Sisson readings beside them (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which name in the SIGNATURES column is confirmed by a catalogue subject heading?",
            options: ["A. W. Sisson", "Kohn", "Strobridge", "Egbert"],
            correctIndex: 0,
            explanation: "Stanford's records for both 1866 sheets carry A. W. Sisson as a subject heading alongside Labor recruitment (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "How many clusters of Chinese characters are on Pay Roll No. 102?",
            options: ["Two", "Eleven", "Twenty-six", "None"],
            correctIndex: 0,
            explanation: "Two clusters, roughly eleven characters in total, beside the Coon Sing block (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What does the SIGNATURES column of Pay Roll No. 102 record?",
            options: ["Payments to contracting firms", "Each head man's receipt mark", "Foremen's countersignatures", "The paymaster's own initials"],
            correctIndex: 0,
            explanation: "Paid A. W. Sisson, Paid Kohn and a second name, Paid Strobridge, and a Paid Egbert and Company (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which of these is at neither end of the chain of payment?",
            options: ["The worker", "The supply firm", "Charles Crocker", "The railroad company"],
            correctIndex: 0,
            explanation: "The chain runs worker, head man or numbered gang, foreman's time book, payroll, cheque to a firm, and the man who swung the pick is at neither end of it (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What is written in the NAMES column where the 1866 sheet has stopped naming anyone?",
            options: ["A number", "A blank", "Initials", "A tally of days"],
            correctIndex: 0,
            explanation: "Hung Wah number three, Ah Wong number fifty-three, Sisson number fifty-seven. The number is written where a name goes (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "What did the clerk use the When Paid column of Pay Roll No. 102 for?",
            options: ["Man-days", "Payment dates", "Foremen's names", "Daily rates"],
            correctIndex: 0,
            explanation: "The sheet is filled in off-label: man-days go in When Paid, the gross straddles two more columns, a deduction sits under Rate per diem, and TOTAL is the net (lesson 8).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What is the relation between the money columns on Pay Roll No. 102?",
            options: ["Gross minus deduction equals net", "Days times rate equals the deduction", "Net plus deduction equals sheet total", "Rate times thirty equals the wage"],
            correctIndex: 0,
            explanation: "It checks out exactly on six separate blocks, which is how the sheet's own arithmetic can be trusted (lessons 1 and 8).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "Which column heading sits above the deduction on the 1865 sheet?",
            options: ["Rate per diem", "Less for Board, etc.", "TOTAL", "SIGNATURES"],
            correctIndex: 0,
            explanation: "The clerk put the deduction under a printed heading that means something else, and added a two-word manuscript note above it that cannot be read (lessons 1 and 8).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What does this course say the two payroll sheets let a learner do without expert help?",
            options: ["Run the check themselves", "Name the men in each gang", "Count the deaths in construction", "Read the Chinese characters"],
            correctIndex: 0,
            explanation: "Find John Keating in the OCCUPATION column of both sheets, and read the form's own promise against its own entries (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What does the 1866 sheet record that the 1865 sheet does not?",
            options: ["Section numbers along the line", "The workers' individual names", "Deaths in each gang that month", "The book-keeper's Chinese characters"],
            correctIndex: 0,
            explanation: "Sections 25, 35, 36, 37, 38 and 41, plus Track, Summit and Tunnel, and a printed blank for a camp number (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
        ],
      },
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The employer explains it himself",
      section: "Section 2 · The employer explains it himself",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date did Charles Crocker give the testimony this course is built on?",
            options: ["14 November 1876", "27 February 1877", "10 May 1869", "24 June 1867"],
            correctIndex: 0,
            explanation: "The committee's own journal heads the sitting San Francisco, November 14, 1876, and lists Chas. Crocker among the witnesses (lessons 5 and 6).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "In which city did the committee hear Crocker?",
            options: ["San Francisco", "Sacramento", "Washington", "Ogden, Utah"],
            correctIndex: 0,
            explanation: "Which matters, because he calls Sisson, Wallace & Co. a mercantile firm here while testifying there (lessons 5 and 8).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "On which printed page does the names passage appear?",
            options: ["675", "671", "669", "724"],
            correctIndex: 0,
            explanation: "Printed page 675, which in this scan is also scan page 675, with the running head CHINESE IMMIGRATION. 675 on the image (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What is the question that produces Crocker's answer about white workers?",
            options: ["Does the same thing obtain with the white men?", "Do you keep their names in the usual way?", "Could you record the names if you chose to?", "Did you employ white men on the same terms?"],
            correctIndex: 0,
            explanation: "No second-hand version of this passage quotes it, and it is the half worth more to a course about credit (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What is Crocker's answer to that question?",
            options: ["We get the individual names of the white men", "We pay the head-man, and he divides it", "It is impossible; it is a different language", "The account is kept with the gang, by number"],
            correctIndex: 0,
            explanation: "The railroad did not lack a way to write a labourer's name on a form. It had one, and it used it on one group of men (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which word do the circulating versions of the Ah Sin passage get wrong?",
            options: ["Would", "Names, which the page renders as nicknames rather than names", "Impossible, which the page renders as impracticable", "Language, which the page renders as dialect throughout"],
            correctIndex: 0,
            explanation: "The page reads We would not know Ah Sin, Ah You, Kong Won. A widely circulated rendering prints could, which is the difference between inability and choice (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What sentence closes Crocker's answer about the names?",
            options: ["It is not done in that way because they are slaves", "You understand the difficulty, and we cannot keep them", "We would not know Ah Sin, Ah You, Kong Won, and all such names", "We pay the head-man of the gang"],
            correctIndex: 0,
            explanation: "He volunteers a denial nobody had yet put to him, and the next question is whether this is a kind of servile labour (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What does Crocker say the head man is?",
            options: ["A laborer among them", "The supply firm's agent", "A book-keeper in the pit", "A company foreman"],
            correctIndex: 0,
            explanation: "His answer to Some head-man? is He is a laborer among them, which is the person the NAMES column actually holds (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which name from Crocker's list of names he would not know is written on Pay Roll No. 102?",
            options: ["Ah You", "Ah Sin", "Kong Won", "Hung Wah"],
            correctIndex: 0,
            explanation: "It is the first entry in the NAMES column, with 2,249 man-days and a total of $2,512.57 beside it (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "How many man-days sit against the first block of Pay Roll No. 102?",
            options: ["2,249", "14,899", "2,621", "10,427"],
            correctIndex: 0,
            explanation: "The block headed with the name Crocker later offered as an example of a name his company would not know (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What does the pairing of the testimony and the ledger show?",
            options: ["The names were not worth keeping", "The company never met the names", "The payroll was written in Chinese", "The head men withheld the names"],
            correctIndex: 0,
            explanation: "He offered as unknowable a name his own company had already written at the top of a payroll sheet. The claim was never that the names were unknowable (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which of Trouillot's four moments does this passage illustrate?",
            options: ["Fact creation, the making of sources", "Fact assembly, the making of archives", "Fact retrieval, the making of narratives", "Retrospective significance"],
            correctIndex: 0,
            explanation: "The making of a source, where what is omitted becomes permanent. Who Gets Named teaches the scheme in its lesson 17 (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which pages of the report carry Crocker's testimony?",
            options: ["666 to 688", "723 to 728", "1 to 6", "40 to 45"],
            correctIndex: 0,
            explanation: "Charles Crocker sworn and examined opens at printed page 666, and the next witness is sworn at page 688 (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What does Crocker say about slavery in California when pressed?",
            options: ["He denies it under oath", "He calls it servile labour", "He refuses to answer", "He defers to the Six Companies"],
            correctIndex: 0,
            explanation: "Not a bit, and he gives his word of honour under oath that he does not believe there is a Chinese slave in the state (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which committee took this testimony?",
            options: ["The Joint Special Committee to Investigate Chinese Immigration", "The Senate Committee on Pacific Railroads, sitting in Washington", "The California legislature's select committee on Chinese labour", "The Pacific Railway Commission, examining construction accounts"],
            correctIndex: 0,
            explanation: "Its report is Senate Report 689 of the 44th Congress, second session (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Why does the course quote the question as well as the answer?",
            options: ["It shows a comparison was being drawn", "The answer alone is too short to quote", "Committee rules required verbatim questions", "Strobridge answered and Crocker asked"],
            correctIndex: 0,
            explanation: "The question asks whether the same thing obtains with the white men, so the answer is a statement about two practices rather than one (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What does Crocker give as the reason the names cannot be kept in the usual way?",
            options: ["It is a different language", "The men change gangs too often", "Head men would not disclose them", "The clerks could not write Chinese"],
            correctIndex: 0,
            explanation: "He says so and then adds that it is not done in that way because they are slaves, which nobody had asked (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What formula opens a witness's evidence in the printed report?",
            options: ["Sworn and examined", "Called and interrogated", "Deposed and questioned", "Ordered to be printed"],
            correctIndex: 0,
            explanation: "Charles Crocker sworn and examined at page 666; James H. Strobridge sworn and examined at page 723 (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which typographic habit of this report is reproduced in the quotations?",
            options: ["A space before question marks", "Small capitals for witnesses' names", "Italic answers and roman questions", "A double indent for each examiner"],
            correctIndex: 0,
            explanation: "The report sets a space before its question marks and semicolons, which is nineteenth-century Government Printing Office house style (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What did the company do with the names of the white men?",
            options: ["It got them individually", "It recorded only foremen's names", "It entered them as gangs", "It kept them in a lost book"],
            correctIndex: 0,
            explanation: "That is the whole of Crocker's answer: No, sir; we get the individual names of the white men (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What does the course say a quotation carrying real weight should be read off?",
            options: ["The page", "An edition", "The transcription", "A secondary work"],
            correctIndex: 0,
            explanation: "One word separated incapacity from choice in this passage, and only the page settled it (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Who is Mr. Piper?",
            options: ["A member of the committee", "A colonel for the Chinese", "The Central Pacific's counsel", "A clerk of the Senate"],
            correctIndex: 0,
            explanation: "Representative William A. Piper of California, and on these pages a hostile cross-examiner (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Who is Mr. Bee?",
            options: ["Counsel for the Chinese", "A California congressman", "The Central Pacific's paymaster", "The committee's chairman"],
            correctIndex: 0,
            explanation: "Printed page 4 records that Col. F. A. Bee and B. S. Brooks appeared and made statements in favor of the Chinese. He was not a committee member (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What does the examiner heading at the head of printed page 675 read?",
            options: ["By Mr. PIPER:", "By Mr. BEE:", "By Senator Sargent:", "By the Chairman:"],
            correctIndex: 0,
            explanation: "The next heading does not appear until below the names passage, so the whole exchange is cross-examination (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What is Crocker's answer when asked whether he employed ten thousand Chinese workers?",
            options: ["About that number; I never knew exactly how many", "Our maximum strength very nearly approached ten thousand", "We increased finally to ten thousand, fully that many", "About nine thousand, as the payrolls support"],
            correctIndex: 0,
            explanation: "Printed page 671, said in the middle of a cross-examination about profit rather than to a friendly examiner (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What question does Piper ask immediately after the headcount?",
            options: ["Whether he made more money by employing them", "Whether the same practice applied to white workers", "Whether a mercantile firm furnished the Chinese", "Whether he believed there was a Chinese slave"],
            correctIndex: 0,
            explanation: "Did you make more money out of that contract by employing them than if you had employed white men? He answers, I think I did (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "How does Crocker answer the question about whether he made money from the contract?",
            options: ["I made all I could", "I never made figures", "Not a bit, I assure you", "Ask Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "Yes, sir; I made all I could; just as you would, and just as other men would do (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What does Piper say when Crocker replies that he tried his best to get white men?",
            options: ["Answer my question", "That is immaterial", "Not talking politics now", "Were they Chinese?"],
            correctIndex: 0,
            explanation: "Answer my question. I do not want to go into an argument. It is the temper of the whole passage (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Why does the cross-examination make the answer about the headcount better evidence?",
            options: ["He had every reason to produce a number", "A hostile examiner may demand documents", "Cross-examination was recorded more carefully", "He could be compelled to correct the record"],
            correctIndex: 0,
            explanation: "He was being accused of profiteering and still had no figure to give. That is not a mild clarification to a friendly examiner (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "How does a 2004 rebuttal attribute the headcount question?",
            options: ["To Mr. Bee", "To Senator Sargent", "To the chairman", "To Mr. Piper"],
            correctIndex: 0,
            explanation: "It prints Q. (By Mr. Bee) and dates the testimony Feb. 27, 1877. On the page, the questioner is Piper and the date is 14 November 1876 (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What happened on 27 February 1877?",
            options: ["The Senate ordered the report printed", "Charles Crocker was sworn in San Francisco", "James Strobridge gave his evidence", "The Promontory Summit ceremony took place"],
            correctIndex: 0,
            explanation: "Ordered to be printed is on the title page. It is not the date of any testimony in the volume (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Where in the report is the date of Crocker's testimony recorded?",
            options: ["In the committee's journal", "Beneath his oath formula", "In the index, under contract-labor", "On the volume's title page"],
            correctIndex: 0,
            explanation: "Printed page 6 heads the sitting San Francisco, November 14, 1876 and lists the gentlemen who appeared and testified (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "When did James Strobridge testify?",
            options: ["The following day", "The same morning", "Three months later", "On 27 February 1877"],
            correctIndex: 0,
            explanation: "The journal for 15 November 1876 lists him among the witnesses (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What is true of printed and scan page numbers in this copy of the report?",
            options: ["They agree only in the later part", "They agree throughout the volume", "They differ by fourteen throughout", "They differ by the plates bound in"],
            correctIndex: 0,
            explanation: "From about printed page 660 onward they coincide, but scan page 92 carries printed page 78. Give both numbers every time (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What does scan page 92 of this copy carry?",
            options: ["Printed page 78", "Printed page 92", "Printed page 106", "The committee's journal"],
            correctIndex: 0,
            explanation: "A fourteen-page divergence, which is why a citation that gives only one of the two numbers can send a reader to the wrong place (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Which state did Representative Piper represent?",
            options: ["California", "Nevada", "Utah", "New York"],
            correctIndex: 0,
            explanation: "A California congressman, cross-examining a California contractor about California labour (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What does knowing the questioner change about reading an answer?",
            options: ["It shows what pressure it was given under", "It shows whether it was given on oath", "It shows which parts were ordered printed", "It decides whether page numbers match"],
            correctIndex: 0,
            explanation: "The same words mean different things offered to a sympathetic examiner and extracted by a hostile one (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Which two men appeared before the committee in favor of the Chinese?",
            options: ["Bee and Brooks", "Crocker and Strobridge", "Piper and Sargent", "Sisson and Wallace"],
            correctIndex: 0,
            explanation: "Printed page 4 records that Col. F. A. Bee and B. S. Brooks appeared and made statements in favor of the Chinese (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What report number does this volume carry?",
            options: ["689", "680", "44", "1734"],
            correctIndex: 0,
            explanation: "Senate Report No. 689, 44th Congress, second session, read on the title page image (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Why does this course avoid the volume's text transcription for quotations?",
            options: ["It garbles names and numbers", "The Archive forbids quoting it", "It covers only the journal and index", "It is from a different printing"],
            correctIndex: 0,
            explanation: "It renders Ah You as Ah Yrou and No. 689 as No. 680, which is good enough to locate a passage and not good enough to quote it (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Under which heading does the report's own index file the naming passage?",
            options: ["Contract-labor", "Chinese immigration", "Central Pacific", "Wages and board"],
            correctIndex: 0,
            explanation: "The index files it under contract-labor, 674, 675 (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What does Crocker say is done to a gang as soon as it is made up?",
            options: ["It is numbered", "It gets a book-keeper", "It is registered", "It is split in two"],
            correctIndex: 0,
            explanation: "They got them together to make what is called a gang, and each gang is numbered. That is the system Pay Roll No. 331 shows (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "How does Crocker describe the way the account is kept?",
            options: ["With the gang, by number", "With each head man by name", "With the supply firm", "With the foreman, man by man"],
            correctIndex: 0,
            explanation: "The account is kept with the gang, No. 1, No. 2, 25, 30, 50, 100, just as it is (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Who made the nightly count of days the payroll rests on?",
            options: ["The Chinese book-keeper", "The white foreman", "The gang's head man", "The paymaster's clerk"],
            correctIndex: 0,
            explanation: "One of the workmen, who works in the pit along with the rest, comes up with his book, and he says so many days for that gang (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Where does Crocker say the Chinese book-keeper worked?",
            options: ["In the pit", "In the office", "In the camp", "At the store"],
            correctIndex: 0,
            explanation: "He is one of the workmen and works in the pit along with the rest, which is the detail the second-hand rendering loses (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What happened to the nightly figures once both sides had them?",
            options: ["They agreed, and each side wrote them down", "The foreman's figure was taken as final", "The head man took both books to the paymaster", "The company copied the Chinese book"],
            correctIndex: 0,
            explanation: "They count it up and they agree, and each puts it down. Then the Chinese keep their own accounts among themselves (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Why does no worker's book survive in the archive?",
            options: ["It stayed with the gang and was never company paper", "The company destroyed the books after each pay-day", "The books' paper did not last in the Sierra", "The museum deaccessioned them"],
            correctIndex: 0,
            explanation: "Archives keep what institutions keep. The company's paper went into a company file; the book-keeper's book stayed with the gang (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "How many words does the silent ellipsis in the 2004 rendering swallow?",
            options: ["Eighteen", "Three", "Forty-two", "Thirty-one"],
            correctIndex: 0,
            explanation: "And the eighteen words move the nightly count from the Chinese book-keeper to the white foreman (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "In the original passage, who or what is the rest?",
            options: ["The other men in the pit", "The rest of the gang's wages", "The other gangs on the section", "The remaining days of the month"],
            correctIndex: 0,
            explanation: "The book-keeper works in the pit along with the rest. In the shortened rendering, the rest reads as something the foreman credits (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What size of gang does Crocker describe?",
            options: ["Twenty-five to thirty", "Twenty-three", "Fifty to a hundred", "Eight hundred"],
            correctIndex: 0,
            explanation: "They come together in gangs of twenty-five and thirty, as we need them to work on a job of work (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What question produces the sentence about not distinguishing Chinese workers by names?",
            options: ["Just like mules?", "Does the same thing obtain with the white men?", "You do not pay the individual Chinaman when he works for you?", "Is it not a kind of servile labor that you are describing?"],
            correctIndex: 0,
            explanation: "It is quoted because it is the question that produces the sentence everyone repeats, and Crocker refuses it in his own answer (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "How does Crocker answer when the question about mules is repeated?",
            options: ["Not like mules, but like men", "That the question was immaterial", "That he would not answer on oath", "That it was a matter for the firm"],
            correctIndex: 0,
            explanation: "He adds that they are men, good and true men, and then describes a system that numbers them. The two sit on the same page (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What does the testimony confirm about Pay Roll No. 331?",
            options: ["The numbering system inferred from the sheet", "That a Chinese book-keeper prepared it", "That the sheet was prepared after completion", "That section numbers were added later"],
            correctIndex: 0,
            explanation: "The sheet was read first and the system inferred from it. Crocker then describes the same system, in the same terms, under oath (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What happens to a gang's pay on pay-day, in Crocker's account?",
            options: ["The gang divides it among themselves", "The foreman pays each man from his time book", "The supply firm keeps it against board", "The head man banks it until the season's end"],
            correctIndex: 0,
            explanation: "The gang is paid for all the labor of the gang, and then they divide it among themselves (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What punctuation difference did the page image reveal in the foreman passage?",
            options: ["A colon where a semicolon was transcribed", "A dash where the original printed a full stop", "Quotation marks around the reported speech", "An exclamation mark after the mules question"],
            correctIndex: 0,
            explanation: "The mark after credits them reads as a colon on the scan where the volume's text transcription gives a semicolon. It does not affect the sense (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What does this course say about the author who made the shortened quotation?",
            options: ["He read the whole surviving series of 409 sheets", "That his work should be treated with caution", "That he never had access to the committee report", "That he cut the passage deliberately"],
            correctIndex: 0,
            explanation: "He read all 409 payroll sheets at the museum, which is why this course can teach the ledger at all. The point is a habit, not a person (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What is the habit this lesson argues for?",
            options: ["Open the page the quotation came from", "Prefer the most recent scholarly rendering", "Quote only from peer-reviewed sources", "Cite the author who first noticed the passage"],
            correctIndex: 0,
            explanation: "When a quotation is doing real work, read it off the page. Here it moved a book from one man's hands to another's (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What does Crocker say each gang has of its own?",
            options: ["A book-keeper who keeps the gang's accounts", "A numbered camp on the printed form", "A foreman chosen from among the men", "A store account with the furnishing firm"],
            correctIndex: 0,
            explanation: "Each gang has a book-keeper to keep the account among themselves, which is the book that had the names in it (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What is the evidential value of the ledger and the testimony agreeing?",
            options: ["Two independent sources reach the same finding", "The payroll sheets were prepared from the testimony", "The committee had the payroll sheets before it", "It checks the printed page numbers against the scan"],
            correctIndex: 0,
            explanation: "A manuscript payroll and a sworn description of how it was made, arriving at the same practice separately. That is the strongest evidence this subject has (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What did the house furnish the railroad with, in the answer that opens the passage?",
            options: ["Chinamen", "Horses and carts", "Payroll forms", "Foremen"],
            correctIndex: 0,
            explanation: "That house furnished us with Chinamen. They gathered them one at a time, two, three, four of them in a place (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What ratio does dividing gross by days give on three blocks of Pay Roll No. 102?",
            options: ["1.1538", "1.25", "1.19", "2.50"],
            correctIndex: 0,
            explanation: "Thirty divided by twenty-six to five figures, which is where the twenty-six-day month comes from (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What sentence of the testimony confirms the divisor derived from the sheet?",
            options: ["There are 26 working-days in a month", "The most we paid them was thirty-five dollars a month", "We would not know Ah Sin, Ah You, Kong Won, and all such names", "We have always procured our Chinamen through the house of Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "Printed page 681, under cross-examination by Piper. The divisor stops being an inference and becomes a quotation (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What did Crocker say the railroad paid white labourers?",
            options: ["$35 a month and board", "$30 a month, boarding themselves", "$26 a month", "$40 a month"],
            correctIndex: 0,
            explanation: "Printed page 668: $35 a month and board to white laborers, and $30 a month to Chinamen and they boarded themselves (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does Strobridge say about the men who laid track?",
            options: ["They were almost always white men", "They were Chinese gangs of twenty-five and thirty", "They were Cornish miners from Nevada", "They were furnished by Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "The sentence closes his wage ladder at printed page 728, and it sits beside the eight recorded names of the ten-mile day (lessons 8 and 12).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What is the first rung of Strobridge's wage ladder?",
            options: ["Chinese $26, white $30 and boarded", "Chinese $30, white $35", "Chinese $35, white $40", "Chinese $19, white $25"],
            correctIndex: 0,
            explanation: "When we paid Chinamen twenty-six dollars a month and they boarded themselves we paid the white men thirty dollars a month and boarded them (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Why can no wage comparison be made inside either payroll sheet?",
            options: ["There are no other workers on them", "The wage columns are illegible", "They record man-days, not rates of pay", "White men were paid weekly"],
            correctIndex: 0,
            explanation: "Both sheets are headed China Labour. The segregation is physical, so the comparison can only be made between documents (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What figure does Karuka quote from E. B. Crocker's letter for the cost of a Chinese worker?",
            options: ["$1.19 for eight hours", "$1.1538 a day", "$2.50 for eight hours", "$9 a month"],
            correctIndex: 0,
            explanation: "Within four cents of the figure the March 1865 sheet yields on its own. The letter itself was not read, so it is attributed to Karuka (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does E. B. Crocker's letter say about the speed of the work?",
            options: ["That Chinamen cost less and drill nearly as fast", "That they outmeasured the Cornish miners", "That white men could not be kept at any price", "That the gangs were numbered for comparison"],
            correctIndex: 0,
            explanation: "The sentence pairs a cost comparison with a productivity comparison, which is why it is a strong corroboration of the derived wage (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What is the gross figure for the Ah Henge and Company block?",
            options: ["$3,024.44", "$2,993.19", "$485.17", "$16,914.59"],
            correctIndex: 0,
            explanation: "2,621 and a quarter days at the derived rate, less $31.25, giving a net of $2,993.19 (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What extra payment do the tunnel gangs on Pay Roll No. 331 carry?",
            options: ["One dollar a month", "Two dollars fifty a month", "Five dollars a month", "Ten dollars a month"],
            correctIndex: 0,
            explanation: "Ex $1 p month, and the extra actually paid is days divided by twenty-six exactly, which confirms the divisor a second way (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What extra rate do the Ex Drivers entries on Pay Roll No. 331 carry?",
            options: ["Two dollars fifty a month", "One dollar a month", "Thirty cents a day, as Piper put to Crocker", "Twenty-six dollars a month"],
            correctIndex: 0,
            explanation: "Sixty days gives $5.76, thirty-two gives $3.07, twelve gives $1.16, all of them days multiplied by 2.50 and divided by twenty-six (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What are the values in the Less for Board, etc. column of Pay Roll No. 331 like?",
            options: ["Small, from two to thirty-five dollars, against gangs of dozens", "Larger than the gross pay of some gangs", "Nine dollars a man on every line", "Missing, as the column was never filled"],
            correctIndex: 0,
            explanation: "Two dollars, five, ten, fourteen fifty, thirty-five, which is consistent with the standard account that the workers boarded themselves (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Which of these is a marginal note on Pay Roll No. 331?",
            options: ["Loosing Harness", "Ex Drivers", "China Labour", "Camp No."],
            correctIndex: 0,
            explanation: "Alongside Detention and Coming on the list, which give the flavour of the etc. in Less for Board, etc. (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What is the problem with the deduction column on the 1865 sheet?",
            options: ["Its manuscript label cannot be read", "It contains no figures at all", "It records days rather than dollars", "It was cut away when trimmed for filing"],
            correctIndex: 0,
            explanation: "A two-word manuscript note above the printed Rate per diem heading, illegible at both available resolutions, whose first word may be Fine or Time (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does Crocker say he charged to a gang that failed to keep horses and carts employed?",
            options: ["The expenses of the horses and carts", "The foreman's wages for the lost time", "A flat fine of one dollar a man", "The cost of the provisions stopped"],
            correctIndex: 0,
            explanation: "Printed page 669, describing a system of fines for men not coming out, charged against the gang's account in dollars (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Does the fines passage settle what the 1865 deduction column recorded?",
            options: ["No, it only widens the question", "Yes, it proves the column read Fine", "Yes, the amounts match his fines exactly", "No, it is from a different witness"],
            correctIndex: 0,
            explanation: "The later printed form still makes board the better reading. What changes is that the two candidate readings are no longer equally idle (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What figure does Crocker give for the cost of provisions?",
            options: ["About $9 a month, as he was told", "About thirty cents a day", "About $26 a month", "About $1.19 for eight hours"],
            correctIndex: 0,
            explanation: "Printed page 681, and he marks it as hearsay: I was told that the cost of provisions, their purchases at the store, amounted to an average of about $9 a month (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Why should the nine dollar figure be handled carefully?",
            options: ["It is hearsay about spending, not a deduction", "It appears only in the text transcription", "Strobridge gives a different figure next page", "It covers lodging as well as food"],
            correctIndex: 0,
            explanation: "He says he was told it, and it describes what the men spent at a store rather than a sum taken off a payroll (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Where does Crocker tell the committee to get exact figures on provisions?",
            options: ["From Sisson, Wallace & Co., who furnished the men", "From the paymaster's office", "From the Chinese Six Companies", "From the foremen of each gang"],
            correctIndex: 0,
            explanation: "The firm that furnished the men is also where the committee is sent for the food figures (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "How many blocks of Pay Roll No. 102 were checked for the gross, deduction and net relation?",
            options: ["Six", "One", "Eleven", "Twenty-six"],
            correctIndex: 0,
            explanation: "It checks out exactly on six separate blocks, which is what makes the derived daily rate trustworthy (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does Crocker say the daily equivalent of thirty-five dollars a month was?",
            options: ["About a dollar and twenty-five cents", "Exactly one dollar, as the questioner said", "About a dollar and fifteen cents", "About thirty cents"],
            correctIndex: 0,
            explanation: "He corrects the questioner's dollar a day, gives the twenty-six-day month, and reaches about a dollar and twenty-five cents (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What is the second rung of Strobridge's wage ladder?",
            options: ["Chinese $30, white $35", "Chinese $26, white $30", "Chinese $35, white $45", "Chinese $40, white $50"],
            correctIndex: 0,
            explanation: "We afterwards paid the Chinamen thirty dollars and the white men thirty-five dollars, which is the state of affairs on Pay Roll No. 102 (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What did the 1865 clerk write in the Rate per diem column of Pay Roll No. 102?",
            options: ["A deduction", "The daily rate", "The days worked", "The foreman's name"],
            correctIndex: 0,
            explanation: "The form is used off-label throughout, which is why the arithmetic has to be reconstructed rather than read off (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Which figure on Pay Roll No. 102 is the net rather than the gross?",
            options: ["The figure in the TOTAL column", "The When Paid column", "The sheet's foot line", "The manuscript total note"],
            correctIndex: 0,
            explanation: "Gross minus deduction equals net, and the net is what the TOTAL column carries (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does Crocker say when Piper puts it to him that the average was a dollar a day?",
            options: ["No, sir; it was $35 a month", "Yes, sir; that is the common price", "I do not know; I never figured it", "Ask Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "He corrects the questioner and then supplies the twenty-six-day month that makes the correction work (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does the agreement between the sheet and the testimony on the rate demonstrate?",
            options: ["The document checks itself", "Crocker worked from the sheets", "The committee had the sheet", "The sheets were committee exhibits"],
            correctIndex: 0,
            explanation: "A learner computes thirty divided by twenty-six from a payroll sheet, then reads the contractor stating the divisor eleven years later (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What did the committee's questioner call the Chinese workers in the exchange before the naming passage?",
            options: ["Mules", "Slaves", "Coolies", "Contractors"],
            correctIndex: 0,
            explanation: "Just like mules? is the question, and Crocker answers Not like mules, but like men. The course quotes it once, because it produces the famous sentence (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Which two numbers does Crocker use as examples of gang numbers?",
            options: ["No. 1 and No. 2", "No. 3 and No. 57", "No. 8 and No. 10", "No. 102 and No. 331"],
            correctIndex: 0,
            explanation: "The account is kept with the gang, No. 1, No. 2, 25, 30, 50, 100, just as it is (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What does Crocker's testimony let the course stop relying on?",
            options: ["Second-hand quotation", "The payroll sheets", "The Stanford project's pages", "The committee's journal"],
            correctIndex: 0,
            explanation: "Five renderings the course was going to use at second hand turned out to be wrong, and the report was open the whole time (lessons 5, 6 and 7).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "What did the report's printed page 4 establish about the hearings?",
            options: ["That counsel appeared for the Chinese", "That it sat only in Washington", "That the Central Pacific had its own attorney", "That the Senate ordered it printed in 1877"],
            correctIndex: 0,
            explanation: "Col. F. A. Bee and B. S. Brooks appeared and made statements in favor of the Chinese, which is how the two examiners can be told apart (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
        ],
      },
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · What the record cannot tell you",
      section: "Section 3 · What the record cannot tell you",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the Stanford project's footnote describe the twenty thousand figure?",
            options: ["As one scholar's extrapolation", "As a count from the payroll sheets", "As Crocker's figure to the committee", "As the consensus of historians"],
            correctIndex: 0,
            explanation: "The footnote says one scholar extrapolates from different records, and cites Chew's book at pages 40 to 45 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "How large was Chew's database before any names were removed?",
            options: ["1,507", "972", "816", "23,004"],
            correctIndex: 0,
            explanation: "1,507 names including duplicate entries for crews working in more than one month (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "How many names remained after duplicates were removed?",
            options: ["972", "1,507", "816", "156"],
            correctIndex: 0,
            explanation: "The list was sorted alphabetically and duplicate names taken out, reducing 1,507 to 972 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "How many gang bosses remained in the list at the end of the filtering?",
            options: ["816", "972", "156", "1,346"],
            correctIndex: 0,
            explanation: "972 less 156 non-crew direct paid employees leaves 816 gang bosses, which is the number that gets multiplied (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What crew size is the list of gang bosses multiplied by?",
            options: ["Twenty-eight", "Twenty-six", "Thirty", "Twenty-three"],
            correctIndex: 0,
            explanation: "816 multiplied by an average crew size of twenty-eight is 22,848, and adding back the 156 gives 23,004 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What total does the calculation actually reach?",
            options: ["23,004", "20,000", "42,521", "9,000"],
            correctIndex: 0,
            explanation: "His own number is 23,004, and the figure that circulates rounds his extrapolation down to 20,000 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is the twenty thousand figure a count of?",
            options: ["Head men, times an assumption", "Workers, from the payroll sheets", "Chinese arrivals in California", "Man-days of labour recorded"],
            correctIndex: 0,
            explanation: "It is not a count of workers, and no count of workers exists, because nothing ever wrote the workers down (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is the second derivation on the same page?",
            options: ["Man-days divided by twenty-six", "Peak employment times the years of work", "Gangs times the average camp size", "Arrivals minus departures each year"],
            correctIndex: 0,
            explanation: "Hung Wah's 587 and a half man-days in January 1864 divided by twenty-six gives twenty-three men, repeated for every payee and added (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What do both derivations of the total have in common?",
            options: ["Each needs an assumed constant the record cannot check", "Each was checked against all 409 sheets", "Each was confirmed by Crocker's testimony", "Each uses the 1867 strike figures"],
            correctIndex: 0,
            explanation: "A crew size in the first and a month length in the second, and neither constant can be checked against the record (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What do the site's editors say the calculation assumes without evidence?",
            options: ["That every worker kept the same boss", "That Chinese and white pay rates were equal", "That the sheets record casualties too", "That every gang had a book-keeper"],
            correctIndex: 0,
            explanation: "That each unnamed worker, in every month examined, had the same named crew boss, so anyone who moved or was replaced is counted twice (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What do the editors say is unavoidable when calculating from monthly payrolls?",
            options: ["Double and triple counting", "Confusing bosses with foremen", "Reading names as firms", "Mistaking man-days for days"],
            correctIndex: 0,
            explanation: "There is no way to ever actually know how many different nameless Chinese individuals worked, in their published words (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "How does Chew answer the objection about workers changing bosses?",
            options: ["That the gangs were clannish and bound by debt", "That the sheets record every transfer", "That the foremen corrected the entries", "That Crocker's testimony rules out movement"],
            correctIndex: 0,
            explanation: "Men were recruited through district associations of people from the same place and owed the cost of their passage, so switching was unlikely (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What does the same method produce without duplicate removal?",
            options: ["42,521", "23,004", "20,000", "1,507"],
            correctIndex: 0,
            explanation: "He states the figure himself, which shows how much of the total depends on one filtering step (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What total does Graves reach from the same payroll records?",
            options: ["At most 9,000", "About 23,004", "About 42,521", "About 20,000"],
            correctIndex: 0,
            explanation: "So the published estimates from one body of paper run from about nine thousand to forty-two thousand (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Whose words are our maximum strength very nearly approached 10,000 men on the work?",
            options: ["Charles Crocker's", "James Strobridge's", "The committee chairman's", "William Chew's"],
            correctIndex: 0,
            explanation: "Printed page 669, describing the 1867 strike. The misattribution comes from a bracketed editorial comment (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "On which page does Strobridge give his own headcounts?",
            options: ["723", "669", "675", "728"],
            correctIndex: 0,
            explanation: "We increased finally to 10,000, and At that time we were working fully 10,000 Chinamen, both read in the volume's text transcription rather than on the page image (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Why does the course flag the two Strobridge headcount sentences?",
            options: ["They were read only in the transcription", "They contradict Crocker's sworn figures", "They come from a different report", "Their page is missing from the scan"],
            correctIndex: 0,
            explanation: "Every other quotation in the course was read on a page image, so these are marked as a step below the rest (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What was the Chinese workforce on the Central Pacific by July 1865?",
            options: ["Nearly 4,000", "About 8,000", "10,000 to 15,000", "About 23,004"],
            correctIndex: 0,
            explanation: "Stanford's pages give nearly 4,000 by July 1865, which is a count of a moment rather than a total (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What proportion of the workforce were Chinese workers in February 1867?",
            options: ["Ninety percent", "Two thirds", "One half", "Thirty percent"],
            correctIndex: 0,
            explanation: "Approximately 8,000 on tunnels and 3,000 laying track, representing ninety percent of the workforce (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What do historians estimate was the number at work at any one time?",
            options: ["10,000 to 15,000", "20,000 to 23,000", "3,000 to 4,000", "At most 9,000"],
            correctIndex: 0,
            explanation: "Stanford's pages give that range for peak periods. It cannot be added across months to give a total of individuals (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Which book does the Stanford footnote cite for the extrapolation?",
            options: ["Nameless Builders", "Ghosts of Gold Mountain", "High Road to Promontory", "The Filth of Progress"],
            correctIndex: 0,
            explanation: "Chew's Nameless Builders of the Transcontinental Railroad (2003), at pages 40 to 45 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What does the disagreement over the total give a learner?",
            options: ["Two named parties arguing over one document", "A consensus figure both sides accepted", "A reason to prefer the employer's testimony", "Grounds to dismiss the payroll sheets"],
            correctIndex: 0,
            explanation: "A live, well-mannered disagreement between named people over one body of paper is the best possible material for grading a circulating number (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Which sheet does Chew use to illustrate the man-days method?",
            options: ["Number 26, of January 1864", "Number 102, of March 1865", "Number 331, of November 1866", "Number 369, of December 1867"],
            correctIndex: 0,
            explanation: "Hung Wah collected pay for 587 and a half man-days on that sheet, which divided by twenty-six gives twenty-three men (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What does sheet number 369 of December 1867 record, on Chew's account?",
            options: ["10,427 man-days and 17 head men", "23,004 workers in all", "816 gang bosses", "The last payment to Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "Which converts to 401 workers on the same twenty-six-day divisor (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Which number is added back at the end of the extrapolation?",
            options: ["156", "816", "972", "28"],
            correctIndex: 0,
            explanation: "The direct paid employees removed earlier are added back to the product of 816 and 28 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is 816 multiplied by 28?",
            options: ["22,848", "23,004", "20,000", "42,521"],
            correctIndex: 0,
            explanation: "Adding the 156 direct paid employees to 22,848 gives the published 23,004 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What did the railroad keep records of, where deaths are concerned?",
            options: ["No records of any workers' deaths", "Only white workers' deaths", "Only deaths in the tunnels", "Only deaths reported by the Six Companies"],
            correctIndex: 0,
            explanation: "The Central Pacific did not keep records of the deaths of any workers on the railroad, much less Chinese workers (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What range of estimates does the Stanford project give for Chinese deaths?",
            options: ["50 to 150 to over 1000", "Exactly 1,200", "1,346", "One in ten of the workforce"],
            correctIndex: 0,
            explanation: "Killed as a result of snow slides, landslides, explosions, falls and other accidents, in the project's own wording (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What was the title of the newspaper article of 30 June 1870?",
            options: ["Bones in Transit", "Wholesale Blasting", "One More Spike in Utah", "Ten Miles of Track"],
            correctIndex: 0,
            explanation: "In the Sacramento Reporter, as the Stanford project reports it. The newspaper itself has not been read for this course (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What weight of bones did that article report?",
            options: ["About 20,000 pounds", "About 119 pounds", "About 16.66 pounds", "About 4,462,000 pounds"],
            correctIndex: 0,
            explanation: "Dug up from shallow graves and taken by train for return to China, which the paper calculated as 1,200 Chinese (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What proportion of body weight does the calculation assume bone to be?",
            options: ["Fourteen per cent", "Ten per cent", "Twenty-eight per cent", "Thirty per cent"],
            correctIndex: 0,
            explanation: "An adult human body has 206 bones, which account for 14% of the body's total weight, in the calculation's own words (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What average body weight does the calculation assume?",
            options: ["119 pounds", "150 pounds", "206 pounds", "140 pounds"],
            correctIndex: 0,
            explanation: "The average weight of a Chinese man during the 1860s, in the calculation's own words (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "How much bone does the calculation assign to one man?",
            options: ["16.66 pounds", "119 pounds", "20.6 pounds", "14 pounds"],
            correctIndex: 0,
            explanation: "Fourteen per cent of 119 pounds, and 20,000 divided by 16.66 is 1,200 (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What kind of claim is the famous death toll?",
            options: ["A division sum on two assumed constants", "A count from the railroad's casualty register", "A total from newspaper obituaries", "Crocker's estimate under oath in 1876"],
            correctIndex: 0,
            explanation: "Two assumed constants applied to a newspaper's estimate of the weight of a freight load (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What total does Chew's published table of fatalities give?",
            options: ["1,346", "1,200", "146", "23,004"],
            correctIndex: 0,
            explanation: "Of which he says 146, or about ten per cent, are referenced in detail (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "How many of the deaths in that table are individually referenced?",
            options: ["146", "1,200", "1,346", "58"],
            correctIndex: 0,
            explanation: "Forty-four from three newspapers, fifty-eight from a railroad surveyor, and forty-four from books (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Who reported fifty-eight of the individually referenced deaths?",
            options: ["J. O. Wilder, a surveyor for the Central Pacific", "The Chinese Six Companies", "The Sacramento Union", "James Strobridge"],
            correctIndex: 0,
            explanation: "A surveyor for the Central Pacific and Southern Pacific, as Chew's rebuttal describes him (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Which newspapers supplied forty-four of the referenced deaths?",
            options: ["The Dutch Flat Enquirer and two others", "The Sacramento Reporter and two others", "The New York Tribune and two others", "The Stanford Daily and NBC News"],
            correctIndex: 0,
            explanation: "The Dutch Flat Enquirer, the Omaha Weekly Herald and the Sacramento Union (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What share of the table rests on the single newspaper paragraph?",
            options: ["Eighty-nine per cent", "Ten per cent", "Fourteen per cent", "Fifty per cent"],
            correctIndex: 0,
            explanation: "146 of 1,346 are referenced in detail, and the other 1,200 come from the Bones in Transit report (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What do the site's editors say the total fails to distinguish?",
            options: ["Accidents from smallpox deaths", "Chinese from Irish and Cornish men", "Construction deaths from later ones", "Railroad employees from contractors' men"],
            correctIndex: 0,
            explanation: "They also say that adding deaths to bodies exhumed double counts some casualties (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What do the editors say about the payroll sheets and casualties?",
            options: ["The sheets contain no casualty information", "The sheets record deaths in a separate column", "The coroner used the sheets to identify the dead", "The sheets survive only for months without deaths"],
            correctIndex: 0,
            explanation: "CPRR payroll sheets are a reliable primary source but do not contain any information regarding casualties (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What contrary report does the Stanford project record about the same train?",
            options: ["That it carried the bones of about fifty", "That it carried no remains at all", "That it carried the bones of over two thousand", "That the bones came from a smallpox burial"],
            correctIndex: 0,
            explanation: "Another newspaper reported the same journey and gave a figure twenty-four times smaller (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What is the claim this course holds about the number of deaths?",
            options: ["It is unknown, not smaller", "It is nearer fifty", "It is two thousand or more", "It cannot be discussed at all"],
            correctIndex: 0,
            explanation: "Replacing twelve hundred with fifty would be the same mistake in the other direction, and on thinner evidence (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Why is the death toll unknown, in this course's argument?",
            options: ["For the same reason the names are", "The newspapers burned in 1906", "The Six Companies' records are in Chinese", "The casualty ledgers are uncatalogued"],
            correctIndex: 0,
            explanation: "An employer who did not write down who worked did not write down who died. The two silences have one cause (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What does this course do with the one in ten claim?",
            options: ["Prints it as an example of drift", "Adopts it as within the published range", "Attributes it to Chew's table", "Leaves it out entirely"],
            correctIndex: 0,
            explanation: "A 2019 article attributed it to historians, and the project's own pages do not support it (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What did an 1868 newspaper article report, as the Stanford project describes it?",
            options: ["A search for the remains of 300", "The return of 20,000 pounds of bones", "Twenty deaths in a single avalanche", "The names of eight Chinese track-layers"],
            correctIndex: 0,
            explanation: "The Chinese Six Companies organised searches along the line, as the project reports the article (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Why is the Sacramento Reporter article reported rather than quoted at first hand?",
            options: ["The newspaper itself has not been read for this course", "Its wording is disputed by two scholars", "The paper's archive restricts quotation", "It was reprinted with other figures"],
            correctIndex: 0,
            explanation: "It reaches this course only as the Stanford project reports it, and the lesson says so (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "How many Central Pacific payroll sheets survive?",
            options: ["409", "48", "19", "1,507"],
            correctIndex: 0,
            explanation: "Held at the California State Railroad Museum in collection MS 79 (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many months did Chew's data come from?",
            options: ["19", "48", "409", "12"],
            correctIndex: 0,
            explanation: "Where January 1864 to December 1867 should have yielded a total of forty-eight months (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Roughly what share of the months is missing?",
            options: ["Sixty per cent", "Ten per cent", "Eighty-nine per cent", "Fourteen per cent"],
            correctIndex: 0,
            explanation: "Nineteen surviving months against forty-eight, and the survivors are unevenly spread (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many of the surviving months fall in 1866?",
            options: ["Twelve", "Three", "One", "Nineteen"],
            correctIndex: 0,
            explanation: "Three for 1864, three for 1865, twelve for 1866 and one for 1867, which is why a line graph through them would mislead (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What objection does Chew raise against his own table?",
            options: ["A line graph would imply a continuous function", "The 1867 sheets are unreadable", "Head men cannot be matched", "The divisor is only assumed"],
            correctIndex: 0,
            explanation: "Converting this Table to a line graph assumes a continuous function distorting the incomplete monthly data, in his own words (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many payroll sheets can a learner read without an appointment in Sacramento?",
            options: ["Three", "None", "Nineteen", "All 409"],
            correctIndex: 0,
            explanation: "One at the Internet Archive and two at the Stanford Digital Repository (lessons 3 and 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does the Stanford project say about letters written by these workers?",
            options: ["None has been found", "Several survive", "They await translation", "None were ever written"],
            correctIndex: 0,
            explanation: "No letter or document of any sort written by one of the Central Pacific workers has been found, in the project's own words (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What did Crocker testify the Chinese workers circulated before the strike?",
            options: ["A document, through the camp", "A petition signed by every head man", "A list of the men who would stop", "A notice at the Summit Tunnel"],
            correctIndex: 0,
            explanation: "The Chinese circulated a document among themselves, all through the camp, and on the next Monday morning they refused to come out (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does Crocker's sentence about the circulated document establish?",
            options: ["That such a document existed", "That the company kept a copy", "That the workers read English", "That Union Pacific agents led it"],
            correctIndex: 0,
            explanation: "The claim that none has been found is a claim about survival. His sentence shows one of the things that did not survive (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What is the other worker-written document the testimony attests?",
            options: ["The book-keeper's nightly book", "A gang register of deaths", "Signed receipts for wages", "A contract with Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "Brought up out of the pit every night with the gang's days in it, as lesson 7 sets out (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How does Crocker describe the conduct of the strike?",
            options: ["Just like Sunday all along the work", "As the most violent disturbance ever", "As a walkout that collapsed in two days", "As the work of emissaries he could name"],
            correctIndex: 0,
            explanation: "The men stayed in their camps and no violence was perpetrated along the whole line, on his own account (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does Crocker say he did to end the strike?",
            options: ["Stopped the provisions and the butchers", "Raised the wage to forty dollars", "Brought in freedmen from the east", "Asked the Six Companies to order them back"],
            correctIndex: 0,
            explanation: "I stopped the provisions on them, stopped the butchers from butchering, and used such coercive measures, in his own words (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What did Crocker tell the striking workers about authority on the line?",
            options: ["That no one made laws there but him", "That the county sheriff would decide", "That head men answered for their gangs", "That the Sisson, Wallace contract governed"],
            correctIndex: 0,
            explanation: "He describes making them a little war speech, and gave them until the following Monday at six to return (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What did Crocker say would happen to men who did not return by the deadline?",
            options: ["They would be fined", "They would be handed to the sheriff", "Cornish miners would replace them", "They would be reported to the firm"],
            correctIndex: 0,
            explanation: "Everyone who went to work then should be forgiven for the week's strike, but all others should be fined (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How long does Crocker's own account make the strike?",
            options: ["A week", "Eight days", "Three days", "A month"],
            correctIndex: 0,
            explanation: "They struck on a Monday and were ordered back by the next Monday. Stanford's page says eight days, and the course prints the disagreement (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does Obenzinger say about the length of the strike?",
            options: ["A week", "Eight days", "Ten days", "Two weeks"],
            correctIndex: 0,
            explanation: "Three accounts, two of them published by the same project, and they do not agree (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "On what date did the 1867 strike begin?",
            options: ["24 June", "28 April", "10 May", "14 November"],
            correctIndex: 0,
            explanation: "Three thousand workers put down their tools, as the Stanford project records (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What monthly wage did the strikers demand?",
            options: ["$40", "$35", "$30", "$26"],
            correctIndex: 0,
            explanation: "Along with a workday cut from eleven hours to ten, and shorter shifts in the tunnels (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What change to the working day did the strikers demand?",
            options: ["Ten hours instead of eleven", "Eight hours instead of ten", "A six-day week", "Sunday off every week"],
            correctIndex: 0,
            explanation: "And shorter shifts digging in the cramped, dangerous tunnels, as the project records the demands (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many workers stopped work in the 1867 strike?",
            options: ["Three thousand", "Ten thousand", "Eight hundred", "Four hundred and one"],
            correctIndex: 0,
            explanation: "Across numerous job sites, in what the project describes as a highly organised labour action (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Why does the course rely on Crocker for the account of the coercion?",
            options: ["The employer states it himself, on the record", "No other source describes the strike", "The 1867 newspapers are lost", "Stanford declines to describe it"],
            correctIndex: 0,
            explanation: "The course never has to rely on a hostile source for it, because the employer says it on the record (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Which lesson of Written by Himself gives the general form of this case?",
            options: ["Lesson 23", "Lesson 5", "Lesson 17", "Lesson 21"],
            correctIndex: 0,
            explanation: "An occupation defined by contractual invisibility cannot be counted, which is the same point in another trade (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does the archive hold, in the summary this lesson reaches?",
            options: ["What the employer wrote down, minus most of it", "Every document produced on the line", "The workers' own books", "A death register from the Six Companies"],
            correctIndex: 0,
            explanation: "What the workers wrote, they kept, and what they kept did not enter an archive (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What word does the Stanford project use for the absence of a letter or diary?",
            options: ["Extant", "Accessioned", "Catalogued", "Repatriated"],
            correctIndex: 0,
            explanation: "There is no extant letter, diary, or memoir by the Chinese workers themselves, in the project's own words (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What kind of hole in a record is the missing sixty per cent of months?",
            options: ["Something written that did not survive", "Something never written down at all", "Something in a language nobody reads", "Something withheld by the repository"],
            correctIndex: 0,
            explanation: "A record has two kinds of hole, and this section separates them: what was never written, and what was written and lost (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many workers does Chew calculate remained on the payroll in December 1867?",
            options: ["401", "816", "3,000", "10,000"],
            correctIndex: 0,
            explanation: "From 10,427 man-days on sheet number 369, divided by the same twenty-six-day month (lessons 9 and 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many head men were paid on sheet number 369?",
            options: ["17", "11", "46", "156"],
            correctIndex: 0,
            explanation: "As Chew reports it, alongside the 10,427 man-days for December 1867 (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Why do archives end up holding one side of this story?",
            options: ["They keep what institutions keep", "Chinese material was destroyed", "The workers' paper did not last", "The gangs' books were confiscated"],
            correctIndex: 0,
            explanation: "The company's paper went into a company file and from there into a museum collection. The gang's book stayed with the gang (lessons 7 and 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What do the two sheets this course teaches from represent within the series?",
            options: ["The readable fraction", "The only sheets with names", "The first and last sheets", "The committee's two exhibits"],
            correctIndex: 0,
            explanation: "One at the Internet Archive and two at Stanford, against roughly four hundred that need an appointment (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What would replacing twelve hundred with fifty amount to?",
            options: ["The same mistake in the other direction", "A correction the payroll sheets support", "The figure Stanford's pages endorse", "A reading that reconciles both reports"],
            correctIndex: 0,
            explanation: "And on thinner evidence, since the contrary report is a single sentence recorded at second hand (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What is the reason this section teaches the numbers as arithmetic?",
            options: ["Every step can be checked on a page", "The deaths are of secondary importance", "No narrative account survives", "The sheets record totals, not names"],
            correctIndex: 0,
            explanation: "Neither calculation is an attack on anybody. Both can be followed step by step from documents a learner can open (lessons 9 and 10).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is the difference between a count of a moment and a total?",
            options: ["A count of a moment cannot be added across months", "A count of a moment is always the larger figure", "A total comes from testimony, a count from a payroll", "A total covers one company, a count the industry"],
            correctIndex: 0,
            explanation: "The 10,000 to 15,000 figure describes how many were at work at one time, and adding such figures would count the same men repeatedly (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What does the course say about the honesty of the Stanford footnote?",
            options: ["It says plainly that the figure is an extrapolation", "It presents the figure as a direct count", "It gives no source for the figure", "It credits it to Crocker"],
            correctIndex: 0,
            explanation: "One scholar extrapolates from different records, with the book and page range named. That is what makes the number traceable (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Which figure does the Stanford footnote give, and which does the calculation reach?",
            options: ["20,000 in the footnote, 23,004 in the calculation", "23,004 in the footnote, 20,000 in the calculation", "9,000 in the footnote, 42,521 in the calculation", "The same figure in both, since the footnote quotes the book"],
            correctIndex: 0,
            explanation: "The circulating figure rounds the extrapolation down without saying so (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is the published range of estimates from the same body of paper?",
            options: ["About 9,000 to about 42,521", "About 20,000 to about 23,004", "About 3,000 to about 8,000", "About 50 to about 2,000"],
            correctIndex: 0,
            explanation: "Graves at one end, and the same method without duplicate removal at the other (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Where does the misattribution of the maximum strength sentence come from?",
            options: ["A bracketed editorial comment", "The committee's own index", "Stanford's page on the strike", "Karuka's article in Boom California"],
            correctIndex: 0,
            explanation: "It introduces the sentence as Superintendent Strobridge's nineteenth-century testimony, and on the page it is Crocker at 669 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What does the course say a misattributed quotation costs it?",
            options: ["Its standing to argue about credit", "The right to cite the report at all", "The payroll-testimony corroboration", "The right to quote period language"],
            correctIndex: 0,
            explanation: "A course about who gets credited cannot misattribute a quotation, which is why the error is fixed before it is printed (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What do the two numbers in this section have in common?",
            options: ["Each rests on an assumed constant", "Each came from the railroad's paymaster", "Each was given under oath", "Each appears on the payroll sheets"],
            correctIndex: 0,
            explanation: "A crew size in one case and a weight of bone in the other, neither of which the record can check (lessons 9 and 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What kind of source is the weight of twenty thousand pounds?",
            options: ["A newspaper's estimate of a freight load", "A shipping manifest at the customs house", "An entry in the railroad's casualty ledger", "A Six Companies total from their searches"],
            correctIndex: 0,
            explanation: "Which is then divided by an assumed bone weight to produce the famous toll (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "How many bones does the calculation say an adult human body has?",
            options: ["206", "119", "1,346", "1,200"],
            correctIndex: 0,
            explanation: "The bone count is the least contested part of the calculation. The fourteen per cent and the 119 pounds are the assumptions (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What does this course refuse to do with the death toll?",
            options: ["Replace one assumed number with another", "Report the published range of estimates", "Quote objections to the published total", "Name the sources behind referenced deaths"],
            correctIndex: 0,
            explanation: "None of the arithmetic makes the deaths fewer. It makes the number unknown, which is the only claim the record supports (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Whose remains does the 1868 article describe searches for?",
            options: ["Three hundred men", "Twelve hundred men", "Fifty men", "Every Chinese worker who died"],
            correctIndex: 0,
            explanation: "As the Stanford project reports the article. The newspaper itself has not been read for this course (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "Who organised the searches for remains along the line?",
            options: ["The Chinese Six Companies", "The Central Pacific's paymaster", "Sisson, Wallace & Co.", "The Chinese Historical Society"],
            correctIndex: 0,
            explanation: "As the Stanford project reports the 1868 article (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What can the surviving payroll series still tell you, month by month?",
            options: ["Roughly how many were at work", "Which men were on the line", "How many were killed each month", "Which gangs shared a district"],
            correctIndex: 0,
            explanation: "Sheet number 369 of December 1867 gives 10,427 man-days and 17 head men, which on the twenty-six-day divisor is 401 workers (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
        ],
      },
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The same practice at the ceremony, and afterwards",
      section: "Section 4 · The same practice at the ceremony, and afterwards",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On what date was the ten-mile day?",
            options: ["28 April 1869", "10 May 1869", "24 June 1867", "14 November 1876"],
            correctIndex: 0,
            explanation: "Twelve days before the two railroads met at Promontory Summit (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How much track was laid on the ten-mile day?",
            options: ["Ten miles and fifty-six feet", "Exactly ten miles and no more", "Twelve miles and four hundred feet", "Four miles and fifty-six feet"],
            correctIndex: 0,
            explanation: "In a single day, working between five in the morning and seven at night (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What hours did the ten-mile day run?",
            options: ["Five in the morning to seven at night", "Six in the morning to six at night", "Midnight to two in the afternoon", "Four in the morning to ten at night"],
            correctIndex: 0,
            explanation: "Fourteen hours, which matters when a later speech calls it ten miles of track in twelve hours (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What was the wager behind the ten-mile day worth?",
            options: ["$10,000", "$2,512.57", "$16,914.59", "$39,756.40"],
            correctIndex: 0,
            explanation: "Charles Crocker made it with Thomas Durant of the Union Pacific (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "With whom did Crocker make the wager?",
            options: ["Thomas Durant", "James Strobridge", "Grenville Dodge", "Samuel Montague"],
            correctIndex: 0,
            explanation: "Durant of the Union Pacific, which is the rivalry the day was staged to settle (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How does the Stanford project describe the crew of the ten-mile day?",
            options: ["Eight Irish rail-handlers and an army of several thousand Chinese", "Eight Chinese workers who put the last rail in place at Promontory", "Three thousand Chinese workers and a squad of Cornish miners", "Ten thousand Chinese workers, the maximum strength on the work"],
            correctIndex: 0,
            explanation: "One group described as eight men, the other as an army (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "Whose names did the railroad record after the ten-mile day?",
            options: ["The eight Irish rail-handlers'", "Every worker who took part", "The Chinese gang head men's", "Nobody's, as no list was kept"],
            correctIndex: 0,
            explanation: "They were taken to Sacramento to be cheered in a parade. None of the Chinese workers' names were recorded (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What happened to the eight named men afterwards?",
            options: ["They were paraded in Sacramento", "They were given a cash bonus", "They were photographed at Promontory", "They were promoted to foremen"],
            correctIndex: 0,
            explanation: "Cheered in a parade with their wagon filled with flowers thrown by women and children (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How many ties were laid on the ten-mile day?",
            options: ["25,800", "3,520", "55,080", "14,050"],
            correctIndex: 0,
            explanation: "Part of a total of 4,462,000 pounds of material put down in one working day (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How many rails were laid on the ten-mile day?",
            options: ["3,520", "25,800", "55,080", "690"],
            correctIndex: 0,
            explanation: "Averaging 560 pounds each, which is why the day's total weight runs to four and a half million pounds (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What did each rail weigh on average?",
            options: ["560 pounds", "119 pounds", "16.66 pounds", "20,000 pounds"],
            correctIndex: 0,
            explanation: "3,520 rails at that weight is most of the day's 4,462,000 pounds (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How many spikes were driven on the ten-mile day?",
            options: ["55,080", "25,800", "14,050", "3,520"],
            correctIndex: 0,
            explanation: "Alongside 14,050 bolts, in the materials list the Stanford project records (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What total weight of material went down on the ten-mile day?",
            options: ["4,462,000 pounds", "20,000 pounds", "16,914 pounds", "560 pounds"],
            correctIndex: 0,
            explanation: "Ties, rails, spikes, bolts and other materials together (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "In which publication did Erle Heath write about the ten-mile day?",
            options: ["The Southern Pacific Bulletin", "The Sacramento Reporter", "The Daily Alta California", "The San Francisco Bulletin"],
            correctIndex: 0,
            explanation: "In May 1928, quoted by the Stanford project. The article itself was not obtained for this course (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What is the structure of the 1928 sentence the course quotes?",
            options: ["Eight named men on one side, a category on the other", "Two categories, neither of which names anybody at all", "Eight Chinese names set against an unnamed Irish crew", "A list of all the men who worked, in alphabetical order"],
            correctIndex: 0,
            explanation: "The sons of Erin stand for eight men whose names the railroad wrote down. The other half of the sentence names nobody (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "Why does the course quote the 1928 sentence at all?",
            options: ["Its shape, a name set against a category, is the evidence", "It is the only surviving account of the day", "It names the Chinese workers who laid the last rail", "The Southern Pacific issued it as a correction"],
            correctIndex: 0,
            explanation: "A course about naming has to be able to show what the alternative to a name looked like in print, and it quotes the slur once (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "Which job did the company staff almost entirely with white workers?",
            options: ["Track-laying", "Tunnelling", "Grading", "Blasting"],
            correctIndex: 0,
            explanation: "Strobridge says so at printed page 728, and it is the job whose names the railroad kept (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What does the ten-mile day show about the pattern in the NAMES column?",
            options: ["It ran to the end of construction", "It applied only to the Sierra tunnels", "It stopped once the gangs were numbered", "It was reversed at Promontory"],
            correctIndex: 0,
            explanation: "Individual names for one group, a category for the other, on the same day and for the same job (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How long does the 1969 speech say the ten miles took?",
            options: ["Twelve hours", "Fourteen hours", "Ten hours", "Eight hours"],
            correctIndex: 0,
            explanation: "The account runs five in the morning to seven at night, which is fourteen. The feat did not need improving and got improved anyway (lessons 12 and 14).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "Where is Promontory Summit, in the terms the project uses?",
            options: ["Mile 690", "Section 41", "Bloomer Cut", "Cape Horn"],
            correctIndex: 0,
            explanation: "The point in Utah where the two railroads met on 10 May 1869 (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What does this course call the move it tracks through the whole record?",
            options: ["A category in place of a name", "A signature in place of a receipt", "A total in place of a daily list", "A number in place of a section"],
            correctIndex: 0,
            explanation: "It appears in the NAMES column, in a company magazine, and in the caption of a photograph (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What is the rail-handler's job?",
            options: ["Carrying and setting the rails", "Driving the spikes into the ties", "Bending the rails for the curves", "Grading and levelling the roadbed"],
            correctIndex: 0,
            explanation: "It is the crew of eight whose names the railroad recorded after 28 April 1869 (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How many bolts went down on the ten-mile day?",
            options: ["14,050", "25,800", "55,080", "3,520"],
            correctIndex: 0,
            explanation: "Part of the materials list the Stanford project records for the day (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "Where were the eight named men taken to be honoured?",
            options: ["Sacramento", "Promontory Summit", "Ogden, Utah", "San Francisco"],
            correctIndex: 0,
            explanation: "Cheered in a parade there, with flowers thrown by women and children (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What job were the eight named men doing?",
            options: ["The one staffed with white workers", "Grading the roadbed ahead of them", "Driving the last spike at Promontory", "Supervising the Chinese gangs"],
            correctIndex: 0,
            explanation: "Track-laying, which Strobridge says was almost always done by white men, and which is the job whose names the company kept (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What does the National Park Service call Russell's photograph?",
            options: ["East and West Shaking Hands at Laying of Last Rail", "Chinese at Laying Last Rail", "The Golden Spike Ceremony, 10 May 1869", "East and West at the Last Rail, Plate 227"],
            correctIndex: 0,
            explanation: "The title appears three ways across the two pages this course reads, which is itself part of the lesson (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What is the photograph commonly known as?",
            options: ["The Champagne Photo", "The Golden Spike", "The Last Rail", "The Meeting of the Rails"],
            correctIndex: 0,
            explanation: "The Park Service page gives the nickname alongside the formal title (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "How many photographers were present at the ceremony?",
            options: ["Three", "One", "Two", "Eight"],
            correctIndex: 0,
            explanation: "The image was one of many glass-plate exposures taken that day by three photographers (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Who does the National Park Service say made the photograph?",
            options: ["Andrew J. Russell", "Alfred Joseph Russell", "Alfred A. Hart", "Edson T. Strobridge"],
            correctIndex: 0,
            explanation: "Which agrees with Stanford's caption and disagrees with the body text on the same Stanford page (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Which railroad workers does the Park Service list as present at the ceremony?",
            options: ["A Chinese contingent from the Central Pacific", "The eight Irish rail-handlers", "Only the companies' officers", "Three thousand Chinese workers"],
            correctIndex: 0,
            explanation: "Among politicians, officials, soldiers and members of the public, in a crowd it puts at about a thousand people (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does Stanford say had happened to most of the workers by the day of the ceremony?",
            options: ["They had been dismissed or moved west", "They had been paid off and sent to China", "They had joined the Union Pacific's crews", "They had been brought to be photographed"],
            correctIndex: 0,
            explanation: "Almost all of the Chinese and other workers, leaving a few Chinese to complete the work (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does Stanford's page say can be seen of Chinese workers in the frame?",
            options: ["There may be one or two, in work clothes", "They are clearly visible in the front row", "Two are identified by name", "None, as all had left by then"],
            correctIndex: 0,
            explanation: "In baggy and patched work clothes, such as those worn by the workers laying the last track in the scene (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does Stanford's page note about one man's posture?",
            options: ["His back is turned when no one else's is", "He is kneeling while the rest stand", "He holds a rail, not a champagne bottle", "He was painted out of later printings"],
            correctIndex: 0,
            explanation: "Which in an era of long exposures is worth noticing, as is the hat held up beside him (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does the white man beside him do with his hat?",
            options: ["Holds it up to hide a face", "Throws it in the air", "Shades the plate from the sun", "Passes it round for money"],
            correctIndex: 0,
            explanation: "Stanford's page says he holds it very deliberately to hide the face of the person standing next to him, and that no one else is treated that way (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "How does Obenzinger describe what is visible of Chinese workers in the image?",
            options: ["A couple of blurry backs and a hat", "Two men identified by name", "Fifteen men behind the locomotives", "Nothing at all, as they had not arrived"],
            correctIndex: 0,
            explanation: "There were no Chinese in the 1869 photograph, except for perhaps a couple of blurry backs and a hat held in front of a face that could have been Chinese (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does Stanford report about a second Russell photograph?",
            options: ["It shows Chinese workers completing the final work", "It was taken a week later", "It is Hart's only image that day", "It was lost from the Oakland Museum"],
            correctIndex: 0,
            explanation: "Less famous but most informative, taken minutes before the iconic one (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does Stanford say eyewitness accounts confirm?",
            options: ["That the Chinese laid the last rail", "That two Chinese workers appear in it", "That it was taken after the ceremony", "That eight Chinese workers were named"],
            correctIndex: 0,
            explanation: "Which is a claim about the work rather than about the image (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What inconsistency sits on a single Stanford page?",
            options: ["The photographer's first name", "The date of the ceremony", "The number of photographers present", "The museum holding the negative"],
            correctIndex: 0,
            explanation: "The body text calls him Alfred Joseph Russell and the caption on the same page calls him Andrew J. Russell (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Which plate number does the Oakland Museum give the photograph?",
            options: ["227", "102", "539", "689"],
            correctIndex: 0,
            explanation: "In the Andrew J. Russell Collection, as Stanford's caption records it (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "How many glass-plate negatives by Russell does the Park Service say are in the Oakland Museum?",
            options: ["650", "227", "3,520", "409"],
            correctIndex: 0,
            explanation: "The result of his work photographing the Union Pacific as it was built west from Omaha (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What did Edson T. Strobridge argue in 2001?",
            options: ["The photograph was taken after the ceremony", "The photograph was retouched afterwards", "Two Chinese in the crowd can be named", "The photograph was by Hart, not Russell"],
            correctIndex: 0,
            explanation: "Once the Chinese crew had gone to dine at J. H. Strobridge's boarding car. He calls the story that they fled at a shout another myth (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "How does this course treat the 2001 timing argument?",
            options: ["It names the claim and leaves it open", "It adopts it as the simplest answer", "It rejects it on Stanford's evidence", "It omits it as an enthusiast claim"],
            correctIndex: 0,
            explanation: "The site is an enthusiast archive rather than a repository, and the argument has not been checked against a holder's record here (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What can the photograph not tell you?",
            options: ["Who laid the last rail", "What the engines looked like", "How many people attended", "Where the negatives are now"],
            correctIndex: 0,
            explanation: "And an absence in it cannot tell you who was excluded either. The paperwork settles what the image is asked to prove (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Which lessons of Who Made the Record does this lesson point to?",
            options: ["Lessons 7 and 8", "Lessons 5 and 6", "Lessons 17 and 21", "Lessons 1 and 2"],
            correctIndex: 0,
            explanation: "On a caption that carries a name, and on what the phrase attributed to admits (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Why does this course put the photograph near the end?",
            options: ["The documents already settle the question", "The image was located late in research", "The holder's terms took time to confirm", "It belongs to the Union Pacific's story"],
            correctIndex: 0,
            explanation: "It is the weakest evidence in the subject, and the payroll sheets and testimony are the strongest (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What is the risk the photograph illustrates?",
            options: ["An image asked to carry the paperwork's argument", "A caption written by somebody who was not present", "A negative held by a museum that will not licence it", "A print circulated in more than one crop and size"],
            correctIndex: 0,
            explanation: "A single image gets asked to prove a point that belongs to the records, and then cannot (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What three names does the 1919 caption carry?",
            options: ["Ging Cui, Wong Fook and Lee Shao", "Hung Wah, Ah You and Coon Sing", "Philip Choy, Thomas Chinn and Corky Lee", "Sisson, Wallace and Egbert"],
            correctIndex: 0,
            explanation: "Described in the caption as three of the eight Chinese workers who put the last rail in place (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Where was the 1919 float paraded?",
            options: ["Ogden, Utah", "Sacramento", "Promontory Summit", "San Francisco"],
            correctIndex: 0,
            explanation: "At the fiftieth anniversary celebration of the completion of the transcontinental railroad (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Which archive is credited for the 1919 photograph?",
            options: ["The Amon Carter Museum of American Art", "The Oakland Museum of California", "The California State Railroad Museum", "The Stanford Digital Repository"],
            correctIndex: 0,
            explanation: "Its archives in Fort Worth, Texas, as the Stanford project's caption records (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What part of the 1919 caption is verified and what part is not?",
            options: ["The wording is verified, the identification is not", "The identification is verified, the wording is paraphrased", "Both are verified against the museum's record", "Neither, as the caption could not be found"],
            correctIndex: 0,
            explanation: "The caption is on the page and says what it says. The 1919 identification behind it has not been traced to a record (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "How many years after the completion was the float paraded?",
            options: ["Fifty years", "A hundred years", "Eleven years", "Twenty years"],
            correctIndex: 0,
            explanation: "Three names, fifty years late, and three more than the company's own paperwork produced in six years (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What did the 1969 address ask the crowd?",
            options: ["Who else but Americans", "Who will remember them", "Who laid the last rail", "Who kept the names"],
            correctIndex: 0,
            explanation: "Three times over, about tunnels, granite and the ten-mile day, with no mention of the Chinese workers who did that work (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Who had prepared commemorative plaques for the 1969 ceremony?",
            options: ["The Chinese Historical Society of America", "The Southern Pacific Company", "The National Park Service", "The Amon Carter Museum"],
            correctIndex: 0,
            explanation: "Two plaques in English and Chinese, as Obenzinger records (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "In how many languages were the 1969 plaques prepared?",
            options: ["Two", "One", "Three", "Four"],
            correctIndex: 0,
            explanation: "English and Chinese, as Obenzinger records the Chinese Historical Society's preparations (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does Obenzinger record about Philip Choy at the 1969 ceremony?",
            options: ["He was scheduled to speak and was stopped", "He delivered the main address", "He declined to attend", "He presented the plaques himself"],
            correctIndex: 0,
            explanation: "The organisers stopped him because an unexpected guest had to be accommodated (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Who gave the opening address at the 2019 anniversary?",
            options: ["A descendant of a Central Pacific worker", "The Secretary of Transportation, as in 1969", "A representative of the Union Pacific", "The director of the Stanford project"],
            correctIndex: 0,
            explanation: "This course describes her and does not name or quote her, because she is living and the rule keeps living private individuals out (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Why does this course not name the 2019 speaker?",
            options: ["She is a living private person", "Her name is not in the essay", "The recording is not public", "The programme is unconfirmed"],
            correctIndex: 0,
            explanation: "The catalog's rule keeps living private individuals out, so the change in the programme is recorded without the name (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does the group photograph made at Promontory year after year set out to do?",
            options: ["Correct the representation", "Reproduce the 1919 Ogden float", "Identify the 1869 Chinese workers", "Replace the Park Service's image"],
            correctIndex: 0,
            explanation: "Chinese Americans gathered in front of the two locomotives, as Obenzinger describes the photographer's project (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Which instruments does Who Gets Named list for changing a record?",
            options: ["A correction, a retraction, an erratum, an amended author line", "A commemoration, a plaque, a parade and an anniversary address", "A catalogue record, a finding aid, an abstract and a subject heading", "A payroll sheet, a time book, a receipt and a signature"],
            correctIndex: 0,
            explanation: "Its lesson 21 sets them out, and not one of them exists for a payroll (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Why can none of those instruments repair this record?",
            options: ["Each needs an existing entry to act on", "Each needs the record-maker's consent", "Each applies only to published works", "Each expires after a fixed period"],
            correctIndex: 0,
            explanation: "There is no amended Pay Roll No. 102 to issue and no register of the dead to reopen, because the entry was never made (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What have the commemorations actually changed?",
            options: ["The caption, the speaker list and the default assumption", "The payroll sheets, which now carry the workers' names", "The number of deaths accepted by historians of the line", "The attribution of the famous photograph to its real maker"],
            correctIndex: 0,
            explanation: "Those are real, and they are not the same thing as a name restored (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What is the first move of the method this course leaves you with?",
            options: ["Ask which column the name would be in", "Take the number back to its arithmetic", "Read the form's promise against entries", "Quote the page, not the retelling"],
            correctIndex: 0,
            explanation: "And then go and look at that column, which is what the OCCUPATION column repaid (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What is the second move of the method?",
            options: ["Read the form's promise against its entries", "Identify who was asking the questions", "Name the constant someone had to assume", "Find which repository holds the original"],
            correctIndex: 0,
            explanation: "Our respective names against eleven names is the whole argument on one sheet (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What is the third move of the method?",
            options: ["Take a number back to its arithmetic", "Compare printed and scan page numbers", "Check a caption against the museum record", "Find one name in two documents"],
            correctIndex: 0,
            explanation: "And name the constant somebody had to assume, which is where both famous numbers in this subject come apart (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What is the fourth move of the method?",
            options: ["Quote the page, not the retelling", "Prefer the earliest published account", "Check figures in two secondary sources", "Cite whoever found the document first"],
            correctIndex: 0,
            explanation: "Five of the quotations this course was going to use at second hand turned out to be wrong, and every one was fixable by opening the source (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Which of Trouillot's moments do commemorations belong to?",
            options: ["Retrospective significance", "Fact creation", "Fact assembly", "Fact retrieval"],
            correctIndex: 0,
            explanation: "The making of history in the final instance, which is where a plaque, a float and an address sit (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does the 1919 caption claim about how many Chinese workers put the last rail in place?",
            options: ["Eight", "Three", "Twelve", "None"],
            correctIndex: 0,
            explanation: "The caption names three of the eight, and the claim about eight has not been traced to a primary record either (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Which two men of the Chinese Historical Society does Obenzinger name as present in 1969?",
            options: ["Philip Choy and Thomas Chinn", "Messrs. Sisson and Wallace", "Ging Cui and Wong Fook", "Mr. Bee and Mr. Brooks"],
            correctIndex: 0,
            explanation: "Both were in the audience when the address was given, with the society's plaques prepared (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What kind of evidence is a museum caption, in this lesson's terms?",
            options: ["Text that can be verified while its claim cannot", "A primary source equivalent to the photograph itself", "A secondary summary with no evidential value at all", "An institutional record needing an accession number"],
            correctIndex: 0,
            explanation: "The caption is on the page and says what it says. Whether the identification behind it is right is a separate question (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does the course say a commemoration most reliably changes?",
            options: ["The reader's default assumption", "The archive the record sits in", "The names recoverable from the payroll", "The photographs' attribution"],
            correctIndex: 0,
            explanation: "That, plus the caption and the speaker list. It is real, and it is not a name restored (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What was different about the podium at Promontory in 2019?",
            options: ["A descendant opened the ceremony", "The Secretary declined to attend", "The ceremony moved to Ogden, Utah", "The society was refused a slot"],
            correctIndex: 0,
            explanation: "The same podium, fifty years apart, with a descendant at it rather than stopped short of it (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does this course say records do get?",
            options: ["Corrected", "Destroyed", "Reconstructed", "Replaced"],
            correctIndex: 0,
            explanation: "The lesson's whole point is being exact about what the corrections in this case actually reached, and it was not the payroll (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What kind of site does this course say cprr.net is?",
            options: ["An enthusiast archive", "A holding repository", "The successor company's site", "A federal Park Service site"],
            correctIndex: 0,
            explanation: "Which is why the 2001 timing argument is named and attributed rather than adopted (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What are the possible Chinese figures in the frame said to be wearing?",
            options: ["Baggy and patched work clothes", "Infantry regiment uniforms", "Formal coats and hats", "Nothing that can be made out"],
            correctIndex: 0,
            explanation: "Such as those worn by the workers laying the last track in the scene, in the Stanford project's wording (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What is the photographic medium of the 1869 images?",
            options: ["Glass plates", "Roll film", "Daguerreotype plates", "Tintypes"],
            correctIndex: 0,
            explanation: "Which is why a hat held deliberately in front of a face for the length of an exposure is worth noticing (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Where does the 2001 argument say the Chinese crew had gone?",
            options: ["To dine at a boarding car", "Back west to fix the line", "To a separate workers' ceremony", "Out of frame after a shout"],
            correctIndex: 0,
            explanation: "Edson T. Strobridge argued the famous plate was exposed after the ceremony, once the crew had gone to dine at J. H. Strobridge's boarding car (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What can an absence in the photograph not establish?",
            options: ["Who was kept out of the frame", "Which museum holds the negative", "How many photographers worked", "What title the Park Service uses"],
            correctIndex: 0,
            explanation: "The photograph cannot tell you who laid the last rail, and an absence in it cannot tell you who was kept out either (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What does this course conclude about the photograph's place in the argument?",
            options: ["It is not needed to make the case", "It is the strongest single evidence", "It refutes the last-rail claim", "It should be reproduced in full"],
            correctIndex: 0,
            explanation: "The ledger and the testimony settle what the photograph is usually asked to prove, which is why it gets one lesson near the end (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-assessment",
      title: "Final assessment · Whose names the payroll kept",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the printed receipt line on Pay Roll No. 102 promise?",
            options: ["Payment against our respective names", "Payment to the head-man of each gang", "Payment to the firm that furnished them", "Payment at thirty dollars, less board"],
            correctIndex: 0,
            explanation: "That promise, set against eleven names for hundreds of men, is the whole argument on one sheet (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "How many names does the NAMES column of the March 1865 sheet carry?",
            options: ["11", "26", "570", "816"],
            correctIndex: 0,
            explanation: "Against a sheet total of 14,899 and a quarter man-days (lesson 1).",
            sourceLessonSlug: "the-form-and-its-promise",
          },
          {
            prompt: "What is actually written in the OCCUPATION column?",
            options: ["White foremen's names", "Trades, such as grader", "The numbered gangs", "The men's wage rates"],
            correctIndex: 0,
            explanation: "Twenty-six personal names with initials on the 1865 sheet, and partnerships on the 1866 one (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "Which check can a learner run across the two sheets without any expertise?",
            options: ["Find John Keating in both", "Count the Chinese characters", "Match the section numbers", "Compare the deduction columns"],
            correctIndex: 0,
            explanation: "He appears in the OCCUPATION column of both, twenty months and three head men apart (lesson 2).",
            sourceLessonSlug: "the-column-marked-occupation",
          },
          {
            prompt: "What replaces names in the 1866 NAMES column?",
            options: ["Firms and numbers", "Section numbers", "Foremen's initials", "Chinese characters"],
            correctIndex: 0,
            explanation: "Hung Wah number three, Ah Wong number fifty-three, and on three lines the contractor's own surname with a number (lesson 3).",
            sourceLessonSlug: "twenty-months-later-a-number",
          },
          {
            prompt: "Who signed for the money on Pay Roll No. 102?",
            options: ["Contracting firms", "Each head man", "The white foremen", "The paymaster"],
            correctIndex: 0,
            explanation: "Paid A. W. Sisson, Paid Kohn and a second name, Paid Strobridge, and a Paid Egbert and Company (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "Which character in the Chinese writing on Pay Roll No. 102 can be read?",
            options: ["收, received", "工, work", "中, middle", "人, person"],
            correctIndex: 0,
            explanation: "The one place the workers' own language appears is the one place a modern reader cannot yet read in full (lesson 4).",
            sourceLessonSlug: "who-signed-for-the-money",
          },
          {
            prompt: "What is the question every retelling of the names passage drops?",
            options: ["Does the same thing obtain with the white men?", "You do not pay the individual Chinaman when he works for you?", "Is it not a kind of servile labor that you are describing?", "Just like mules, then, is how you keep the account?"],
            correctIndex: 0,
            explanation: "And the answer is No, sir; we get the individual names of the white men (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which word do circulating versions of the Ah Sin passage get wrong?",
            options: ["Would", "Names", "Impossible", "Slaves"],
            correctIndex: 0,
            explanation: "We would not know, not we could not know. One word separates incapacity from choice (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "What sentence closes Crocker's answer and is usually cut?",
            options: ["It is not done in that way because they are slaves", "You understand the difficulty of keeping such names", "We cannot keep their names in the usual way", "We would not know Ah Sin, Ah You, Kong Won"],
            correctIndex: 0,
            explanation: "He volunteers a denial nobody had put to him, and the next question is whether this is servile labour (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Which name from Crocker's list is written on Pay Roll No. 102?",
            options: ["Ah You", "Ah Sin", "Kong Won", "None of them"],
            correctIndex: 0,
            explanation: "It is the first entry in the NAMES column, with 2,249 man-days beside it (lesson 5).",
            sourceLessonSlug: "the-question-that-gets-dropped",
          },
          {
            prompt: "Who was asking the questions in the passages this course quotes?",
            options: ["Mr. Piper", "Mr. Bee", "Senator Sargent", "The chairman"],
            correctIndex: 0,
            explanation: "Representative William A. Piper of California, a committee member cross-examining (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "On what date was the testimony given?",
            options: ["14 November 1876", "27 February 1877", "10 May 1869", "24 June 1867"],
            correctIndex: 0,
            explanation: "The committee's journal heads the sitting San Francisco, November 14, 1876. February 1877 is when the Senate ordered the report printed (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Why must a citation to this report give both a printed and a scan page?",
            options: ["They diverge earlier in the volume", "The Internet Archive renumbers them", "The report was printed twice", "The journal has its own numbering"],
            correctIndex: 0,
            explanation: "They coincide from about printed page 660, but scan page 92 carries printed page 78 (lesson 6).",
            sourceLessonSlug: "who-was-asking-and-when",
          },
          {
            prompt: "Who made the nightly count of the gang's days?",
            options: ["The Chinese book-keeper", "The white foreman", "The head man, on pay-day", "The paymaster's clerk"],
            correctIndex: 0,
            explanation: "One of the workmen, who works in the pit along with the rest, comes up with his book (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Why does no worker's book survive?",
            options: ["It was never company paper", "The company burned them", "The pencil has faded away", "They went to descendants"],
            correctIndex: 0,
            explanation: "Archives keep what institutions keep, and the book stayed with the gang (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What did the silent ellipsis in one modern rendering change?",
            options: ["Who did the counting", "The date of testimony", "The number of men in a gang", "The rate of pay"],
            correctIndex: 0,
            explanation: "Eighteen words were cut, moving the nightly count from the Chinese book-keeper to the white foreman (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "Which sentence of the testimony confirms the numbering read off the 1866 sheet?",
            options: ["Each gang is numbered", "We pay the head-man", "We get the individual names", "There are 26 working-days"],
            correctIndex: 0,
            explanation: "And the account is kept with the gang, No. 1, No. 2, 25, 30, 50, 100, just as it is (lesson 7).",
            sourceLessonSlug: "the-book-that-had-the-names",
          },
          {
            prompt: "What is the daily rate derived from Pay Roll No. 102?",
            options: ["About $1.15", "About $1.25", "About $1.19", "About $2.50"],
            correctIndex: 0,
            explanation: "Thirty dollars a month over twenty-six working days, which the sheet's own arithmetic gives to five figures (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What did Crocker state about the length of a working month?",
            options: ["Twenty-six working days", "Thirty working days", "Twenty-eight working days", "Twenty-four working days"],
            correctIndex: 0,
            explanation: "Printed page 681, which turns the payroll derivation from an inference into a quotation (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What did Crocker say the railroad paid white labourers?",
            options: ["$35 a month and board", "$30 a month, no board", "$40 a month and board", "$26 a month and board"],
            correctIndex: 0,
            explanation: "Against $30 a month to Chinese workers who boarded themselves, at printed page 668 (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Why is a wage comparison impossible inside either payroll sheet?",
            options: ["No other workers are on them", "The rate columns are blank", "They give man-days, not rates", "White workers are on the verso"],
            correctIndex: 0,
            explanation: "Both sheets are headed China Labour, so the segregation is physical and the comparison is between documents (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "Which witness gives the full wage ladder against white workers?",
            options: ["Strobridge", "Crocker", "E. B. Crocker", "Leland Stanford"],
            correctIndex: 0,
            explanation: "Printed pages 727 and 728, ending with Our track-layers were almost always white men (lesson 8).",
            sourceLessonSlug: "twenty-six-working-days",
          },
          {
            prompt: "What does the twenty thousand workers figure actually count?",
            options: ["Head men, times an assumed crew size", "Workers listed by name on the sheets", "Chinese arrivals at San Francisco", "Man-days across the surviving months"],
            correctIndex: 0,
            explanation: "816 gang bosses multiplied by twenty-eight, plus 156 direct paid employees, giving 23,004 (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What is the published range of workforce estimates from the same paper?",
            options: ["About 9,000 to about 42,521", "About 19,000 to about 21,000", "About 50 to about 2,000", "About 3,000 to about 8,000"],
            correctIndex: 0,
            explanation: "Graves at one end, and the same method without duplicate removal at the other (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What did the employer say when asked how many Chinese workers he had employed?",
            options: ["I never knew exactly how many", "About twenty thousand", "The payroll will tell you", "Ask Sisson, Wallace & Co."],
            correctIndex: 0,
            explanation: "Said while being accused of profiting, which is a reason to take the absence of a number seriously (lessons 6 and 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "Whose words are our maximum strength very nearly approached 10,000 men?",
            options: ["Crocker's, at page 669", "Strobridge's, at page 723", "Chew's, in his 2004 rebuttal", "The CPRR.org editors'"],
            correctIndex: 0,
            explanation: "The misattribution to Strobridge comes from an editorial comment, and a course about credit cannot repeat it (lesson 9).",
            sourceLessonSlug: "where-twenty-thousand-comes-from",
          },
          {
            prompt: "What two assumptions produce the figure of 1,200 dead?",
            options: ["Bone at fourteen per cent, a body at 119 pounds", "A crew of 28 and a 26-day month", "A death rate of one in ten", "Smallpox at thirty per cent"],
            correctIndex: 0,
            explanation: "Giving 16.66 pounds of bone a man, divided into a reported 20,000 pounds (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What did the railroad record about deaths?",
            options: ["Nothing", "Tunnel deaths", "Gang totals", "Monthly totals"],
            correctIndex: 0,
            explanation: "The Central Pacific did not keep records of the deaths of any workers on the railroad (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What share of the published death table is individually referenced?",
            options: ["About ten per cent", "About ninety per cent", "About half of it", "None of it"],
            correctIndex: 0,
            explanation: "146 of 1,346, and the other 1,200 come from a single newspaper paragraph (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "What is the honest claim about the number of deaths?",
            options: ["It is unknown, not smaller", "It is about fifty", "It is at least two thousand", "It cannot yet be discussed"],
            correctIndex: 0,
            explanation: "And it is unknown for the same reason the names are missing (lesson 10).",
            sourceLessonSlug: "where-twelve-hundred-comes-from",
          },
          {
            prompt: "How much of the payroll series survives for 1864 to 1867?",
            options: ["Nineteen months of forty-eight", "All forty-eight months", "Three months of forty-eight", "Twelve months, all in 1866"],
            correctIndex: 0,
            explanation: "Roughly sixty per cent of the months are gone, and the survivors are unevenly spread (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What does Crocker's account of the strike attest about the workers' own writing?",
            options: ["They circulated a document through the camp", "They sent a petition", "They posted demands at the tunnel", "They kept no written record"],
            correctIndex: 0,
            explanation: "Which is why the claim that no worker's document has been found is a claim about survival, not about writing (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "What did Crocker say he did to break the strike?",
            options: ["Stopped the provisions", "Raised the wage to $40", "Brought in Cornish miners", "Called in the Six Companies"],
            correctIndex: 0,
            explanation: "He says so himself, so the course never has to rely on a hostile source for the coercion (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "How many workers stopped work on 24 June 1867?",
            options: ["Three thousand", "Ten thousand", "Four hundred", "Eight hundred"],
            correctIndex: 0,
            explanation: "Demanding forty dollars a month, a ten-hour day and shorter tunnel shifts (lesson 11).",
            sourceLessonSlug: "the-documents-that-did-not-survive",
          },
          {
            prompt: "Whose names did the railroad record after the ten-mile day?",
            options: ["Eight Irish rail-handlers'", "Every worker who took part", "The Chinese head men's", "Nobody's, as no list was kept"],
            correctIndex: 0,
            explanation: "None of the Chinese workers' names were recorded, in the Stanford project's own sentence (lesson 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What does Strobridge's testimony say about track-layers?",
            options: ["They were almost always white men", "They were Chinese gangs of thirty", "They came from Sisson, Wallace & Co.", "They earned an extra dollar a month"],
            correctIndex: 0,
            explanation: "So the eight men named on 28 April 1869 were doing the job whose names the company kept (lessons 8 and 12).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "How long did the ten-mile day actually run?",
            options: ["Fourteen hours", "Twelve hours", "Ten hours", "Eight hours"],
            correctIndex: 0,
            explanation: "Five in the morning to seven at night. The feat did not need improving and got improved anyway (lessons 12 and 14).",
            sourceLessonSlug: "ten-miles-and-eight-names",
          },
          {
            prompt: "What does the Stanford project say can be seen of Chinese workers in the famous photograph?",
            options: ["There may be one or two", "Two, identified by name", "Fifteen, in the second row", "None at all"],
            correctIndex: 0,
            explanation: "In baggy and patched work clothes, with one man's back turned and a hat held up beside him (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What inconsistency does the record of the photograph itself contain?",
            options: ["The photographer's first name", "The year, 1868 or 1869", "The location, Promontory or Ogden", "The museum, Oakland or Fort Worth"],
            correctIndex: 0,
            explanation: "One Stanford page calls him Alfred Joseph Russell in the body text and Andrew J. Russell in its own caption (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "Why does the photograph get one lesson near the end of this course?",
            options: ["The documents settle what it is asked to prove", "Its copyright was unclear", "The Park Service disputes it", "It was found late in the research"],
            correctIndex: 0,
            explanation: "It is the weakest evidence in the subject, and the ledger and the testimony are the strongest (lesson 13).",
            sourceLessonSlug: "the-photograph-and-its-hedges",
          },
          {
            prompt: "What three names does the 1919 caption carry?",
            options: ["Ging Cui, Wong Fook and Lee Shao", "Hung Wah, Ah You and Coon Sing", "Philip Choy, Thomas Chinn and another", "Sisson, Wallace and Egbert"],
            correctIndex: 0,
            explanation: "Described as three of the eight Chinese workers who put the last rail in place, on a float in Ogden (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "Why can no instrument of correction repair this record?",
            options: ["Each needs an existing entry to act on", "Each needs the repository's consent", "Each applies only to printed works", "Each must be issued within a set period"],
            correctIndex: 0,
            explanation: "There is no amended payroll to issue and no register of the dead to reopen, because the entry was never made (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What is the first move of the method this course leaves you with?",
            options: ["Ask which column the name would be in", "Quote the page rather than the retelling of it", "Name the constant somebody had to assume", "Read the form's promise against entries"],
            correctIndex: 0,
            explanation: "And then go and look at that column, which is what the OCCUPATION column repaid (lesson 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
          {
            prompt: "What does this course say a quotation doing real work should be read from?",
            options: ["The page it came from", "The latest scholarly edition", "The searchable transcription", "A secondary author's summary"],
            correctIndex: 0,
            explanation: "Five second-hand renderings turned out to be wrong, and every one was fixable by opening the source (lessons 5, 7 and 14).",
            sourceLessonSlug: "who-corrected-it-and-with-what",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// D5a SOURCE TIERING (rubric v1.3, CLAUDE.md source-hosting rule), for whoever runs
// `pnpm gen:citations`. The tier is decided PER SOURCE, not per course, and this course's private
// visibility is a separate question from whether a document may be rehosted.
//
// TIER A, free to host (US federal work, out of copyright, or an open licence):
//   - *Report of the Joint Special Committee to Investigate Chinese Immigration*, 44th Cong., 2d
//     Sess., S. Rept. No. 689 (Government Printing Office, 1877). A United States federal work,
//     published 1877, out of copyright twice over. The Internet Archive scan is a faithful
//     reproduction of a public-domain document and carries no new copyright of its own. If it is
//     hosted, host the CITED PAGES (printed 666-688 for Crocker and 723-728 for Strobridge, plus
//     the title page and the journal at printed pp. 4 and 6), not the 1,288-leaf volume, and keep
//     https://archive.org/details/reportofjointspe00unit in `url` beside the hosted copy.
//   - National Park Service, *A moment in time*, Golden Spike National Historical Park. The
//     NPS-AUTHORED TEXT is a US federal work under 17 U.S.C. 105. **The photographs reproduced on
//     that page are not necessarily federal works** and are not covered by that reasoning, so in
//     practice the page is worth LINKING rather than mirroring. Do not upload its images.
//
// TIER B, copyrighted or rights-unverified but publicly readable, LINK ONLY, never upload:
//   - **The two payroll sheets, and this one needs saying carefully.** The DOCUMENTS are 1865 and
//     1866 manuscripts and are out of copyright on age. The particular SCANS are published by
//     California Revealed and the Internet Archive (cscrm_000116) and by the Stanford Digital
//     Repository (nj738wv1221, wc715hx2338), each under its holder's own rights statement, and
//     **those statements were not read for this build**. CLAUDE.md's rule 3 says that when in doubt
//     the answer is Tier B, so: link, do not upload. **This is the cheapest upgrade available to
//     this course.** Read the two rights statements; if they permit redistribution the sheets move
//     to Tier A and a learner can open a hosted copy of the single most important document here.
//   - Chinese Railroad Workers in North America Project (Stanford University): *Key questions* and
//     *Geography of Chinese workers building the transcontinental railroad*. Stanford copyright.
//     Both open without a login, which decides nothing.
//   - Obenzinger, H. (2019), *One more spike in Utah* (PDF on the same Stanford domain). Every page
//     carries the running head "© 2019 Stanford University Chinese Railroad Workers of North
//     America Project". An explicit copyright notice, so Tier B is not a judgement call here.
//   - Central Pacific Railroad Photographic History Museum: Chew's 2004 rebuttal and the CPRR.org
//     editors' bracketed comments at cprr.org, and Edson T. Strobridge (2001) at cprr.net.
//   - Karuka, M. (2020), *Boom California*.
//   - Stanford Digital Repository catalogue records at purl.stanford.edu.
//   - *The Stanford Daily* (2019), cited once and only as the origin of a circulating figure.
//
// TIER C, cite only, no link to a copy, nothing to upload:
//   - Chew, W. F. (2003). *Nameless Builders of the Transcontinental Railroad*. Trafford. NOT
//     OBTAINED. It is named in lesson 9 as the work the Stanford footnote cites, and everything
//     this course takes from its method comes from the author's own published rebuttal instead.
//   - Heath, E. (1928, May). [Article on the ten-mile day]. *Southern Pacific Bulletin*, XVI(5).
//     NOT OBTAINED. Quoted in lesson 12 only as the Stanford project quotes it, and the lesson
//     says so.
//   - *Sacramento Reporter*. (1870, June 30). Bones in transit. NOT OBTAINED. Reported in lesson 10
//     only as the Stanford project reports it. Research check J.
//   - E. B. Crocker to C. P. Huntington, 14 January 1867, Huntington Papers. An archive item, not
//     visited. It reaches lesson 8 only through Karuka, who is named in the text.
//   - The remaining sheets of MS 79, Central Pacific Railroad Collection, California State Railroad
//     Museum. A physical archive, appointment only. Named in lesson 11, never cited as read.
//   - Griswold, W. (1962). *A Work of Giants*. McGraw-Hill. Named once in lesson 9 as the other
//     work the Stanford footnote cites; not obtained and nothing is taken from it.
//
// LOCATORS. Every `## Sources` entry above carries one, per the 2026-09-20 rule:
//   - **The congressional report: the PRINTED page AND the SCAN page, on every entry**, because
//     they coincide only from about printed p. 660 onward in this copy and diverge by fourteen
//     earlier (scan p. 92 carries printed p. 78). Each entry also states HOW the passage was read,
//     page image or the volume's text transcription, because the two disagree and the image wins.
//     Three pages (671, 675, 681) and Strobridge's p. 724 were re-pulled as IIIF images and read
//     line by line for this build; the readings matched the brief's exactly.
//   - **The manuscript payrolls: repository, collection, shelfmark (MS 79, Series 4, Box 23), the
//     digital handle, AND the COLUMN or BLOCK.** On a ruled form the finding is in which column an
//     entry sits, so a citation that stops at "the sheet" has not located anything.
//   - Web pages with no pagination: which question or section of the page carries the quotation.
//   - The Obenzinger PDF: the printed page, with the note that in that file the printed page and
//     the PDF page are the same number, which is worth stating because usually they are not.
//   - Where a passage was read ONLY in a volume's text transcription (Strobridge's headcounts at
//     printed p. 723, and the narrative around the strike at p. 669), the citation and the lesson
//     both say so, and no quotation in the body rests on transcription alone except the two
//     Strobridge sentences that lesson 9 flags in its own text.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file). Each is
// written in the ResearchCheck shape. `course` is the slug to be registered,
// `whose-names-the-payroll-kept`.
//
//  A. key "cprr-payroll-102-chinese-characters" · severity medium · lesson "who-signed-for-the-money"
//     quote: "The rest have strokes that merge into each other"
//     title: What do the Chinese characters on Pay Roll No. 102 say?
//     question: Transcribe and translate the two clusters of Chinese characters, roughly eleven in
//               all, written in a running commercial hand in the signature area of C.P.R.R. Pay Roll
//               No. 102 (March 1865) beside the Coon Sing block. One character reads 收, received.
//               What are the rest?
//     claim: The course states that one character can be read with confidence and that the rest
//            cannot responsibly be transcribed at the available scan resolutions, and teaches that
//            limit honestly rather than guessing.
//     stakes: These are the only marks on either surviving sheet made by a Chinese hand. If they
//             carry a name, a place or a firm, lesson 4 changes from a lesson about a limit into a
//             lesson about a name the record did hold. This is the highest-value unread thing in
//             the whole course.
//     needs: a transcription of each character, a translation, and a note on the hand and the
//            formula used, with the reader's name and credentials.
//     where: a reader of 19th-century Cantonese commercial script, working from the ORIGINAL at the
//            California State Railroad Museum Library and Archives, Sacramento, or from a
//            higher-resolution capture requested from them. The two existing scans (Internet Archive
//            cscrm_000116 and the cprr.org copy) have both been tried and are not sufficient.
//
//  B. key "cprr-payroll-102-deduction-column" · severity medium · lesson "twenty-six-working-days"
//     quote: "is illegible at both available scan resolutions"
//     title: Does the 1865 deduction column read Fine or Time?
//     question: What are the two manuscript words written above the printed "Rate per diem" heading
//               on Pay Roll No. 102, in the column the clerk used for the deduction? The first word
//               may be Fine or Time.
//     claim: The course says the note is illegible, infers board from the later printed form's
//            "Less for Board, etc." column, and records that Crocker testified to a per-gang FINING
//            system charged in dollars (p. 669), so the two candidate readings are no longer equally
//            idle.
//     stakes: The column names what was taken out of a gang's pay. Board and fines are different
//             claims about the employment relationship, and the course currently declines to choose.
//     needs: the two words, read from the original or from another 1865-form sheet in the series
//            where the same clerk wrote them more legibly.
//     where: the original at the California State Railroad Museum; or any other sheet of the 1865
//            printed form among the 409 in MS 79.
//
//  C. key "sisson-wallace-firm-location" · severity medium · lesson "who-signed-for-the-money"
//     quote: "Where the firm itself was based is an open question, and this course does not settle it."
//     title: Where was Sisson, Wallace & Co. based?
//     question: Was Sisson, Wallace & Co. a San Francisco house or a Sacramento one in the years it
//               furnished Chinese workers to the Central Pacific? Crocker, testifying in San
//               Francisco on 14 November 1876, calls it "a mercantile firm here" (S. Rept. 44-689,
//               printed p. 674). A secondary description calls it a Sacramento supply house.
//     claim: The course asserts neither city. It quotes "a mercantile firm here", notes where he was
//            testifying, notes the competing description, and files this check.
//     stakes: Low for the argument and real for the citation. The firm is the fifth link in the
//             chain of payment the course teaches, and a course that tells learners to locate a
//             claim should not leave its own central firm unplaced.
//     needs: the firm's own address from a contemporary source, with a date, and a note on whether
//            it moved between 1865 and 1876.
//     where: San Francisco and Sacramento city directories for the 1860s and 1870s; the firm's
//            letterhead in the Huntington Papers or the Central Pacific's correspondence; the
//            California State Railroad Museum's own files on labour contractors.
//
//  D. key "sisson-wallace-and-co-partner" · severity low · lesson "who-signed-for-the-money"
//     title: Was Clark Crocker the "& Co." in Sisson, Wallace & Co.?
//     question: Manu Karuka (Boom California, 2020) states that Clark Crocker, brother of Charles
//               and E. B. Crocker, was the silent partner in Sisson, Wallace & Co. It is NOT in the
//               testimony at printed pp. 674, 675, 723 or 724, which were all read for this course.
//               Is it true, and on what evidence?
//     claim: The course does NOT assert it, anywhere. It is recorded here so that nobody adds it
//            later on the strength of a single secondary sentence.
//     stakes: If true, the firm that "furnished pretty much all the Chinamen that we worked" was
//             part-owned by the contractor's own brother, which changes what the SIGNATURES column
//             records from an arm's-length payment into a payment inside a family. That is a
//             substantial claim and needs a source.
//     needs: a primary source naming the partners, or Karuka's own citation for the statement.
//     where: Karuka directly; the firm's partnership records or a business directory; the Huntington
//            Papers; the Crocker family papers.
//
//  E. key "cprr-payroll-individual-occupations" · severity low · lesson "the-column-marked-occupation"
//     title: Does any Central Pacific payroll sheet list Chinese workers by individual occupation?
//     question: Among the 409 sheets in MS 79, does any sheet record a Chinese worker with an
//               individual trade (cook, blacksmith, drifter) rather than as part of a numbered gang?
//     claim: The course says the OCCUPATION column on both sheets it reads holds a white foreman's
//            name, and that the unit of record is the gang. It does not claim this of all 409.
//     stakes: If such sheets exist, lesson 2's finding is still true of these two sheets but needs a
//             qualifier, and the qualifier would be worth teaching: a record that names some workers
//             individually and not others is a sharper version of the same argument.
//     needs: a yes or no, with a sheet number and a column reading if yes.
//     where: MS 79 at the California State Railroad Museum. Note that er.educause.edu, which is
//            reported to describe the project's payroll findings, returned HTTP 403 to two attempts
//            on 2026-09-20 and could not be checked.
//
//  F. key "chew-nameless-builders-page-refs" · severity low · lesson "where-twenty-thousand-comes-from"
//     title: Confirm the 409-sheet count and Table I and Table II against the book itself
//     question: Do pages 40, 42, 45, 46, 74, 81 and 96 of Chew's *Nameless Builders of the
//               Transcontinental Railroad* (Trafford, 2003) carry the 409-sheet count, the method
//               described in the rebuttal, Table I and the fatality Table II as the rebuttal
//               describes them?
//     claim: Lessons 9, 10 and 11 take the method, the 409-sheet count, the month distribution and
//            the fatality totals from the author's own 2004 rebuttal, NOT from the book, and the
//            citations say so.
//     stakes: The rebuttal is a reliable statement of the author's own method, but it is a reply to
//             a review rather than the work itself. Three of this course's numbers would be better
//             cited to the book.
//     needs: the page numbers confirmed, and any figure in the book that differs from the rebuttal.
//     where: the book itself; the California State Railroad Museum library; interlibrary loan.
//
//  G. key "ogden-1919-three-names" · severity medium · lesson "who-corrected-it-and-with-what"
//     quote: "The identification behind it has not been traced to a 1919 record for this course"
//     title: What is the 1919 record behind the names Ging Cui, Wong Fook and Lee Shao?
//     question: On what 1919 evidence does the caption identify three men on the Ogden float as
//               three of the eight Chinese workers who put the last rail in place? And what is the
//               source for "eight Chinese workers" at all?
//     claim: The course verifies the CAPTION as text and says plainly that the identification behind
//            it, and the claim about eight workers, are reported and untraced.
//     stakes: These are the only three individual Chinese workers named anywhere in this course. If
//             the identification holds, it is the one successful correction in the whole subject. If
//             it does not, a course about naming has printed three names on a caption's authority.
//     needs: the Amon Carter Museum's own record for the photograph, including any period caption or
//            accession note, and a 1919 newspaper account of the Ogden parade.
//     where: the Amon Carter Museum of American Art Archives, Fort Worth, TX; Ogden and Salt Lake
//            newspapers for May 1919; the Chinese Railroad Workers in North America Project.
//
//  H. key "cprr-payroll-102-pencil-lines" · severity low · lesson "who-signed-for-the-money"
//     quote: "The supporting figures beside them are not legible at the available scan resolution"
//     title: Are the Lew San and Ah Chong lines two individuals paid directly?
//     question: Read the pencil figures beside the two fainter lines on Pay Roll No. 102, which
//               carry no OCCUPATION entry and share a total of $2.27. Are they two individual
//               workers paid directly rather than two gangs?
//     claim: The course reports the observation, says the figures cannot be read, and builds nothing
//            on it, noting only that Chew removed 156 "non-crew direct paid employees" from his list.
//     stakes: If the sheet does record two individuals directly, the course's sentence that no
//             individual crew member is named on either sheet needs a qualifier. It would not change
//             the argument and it would change a sentence.
//     needs: the figures read from the original or a higher-resolution capture, and a reading of the
//            second name (Lew San or Lein San).
//     where: the original at the California State Railroad Museum.
//
//  I. key "cprr-1867-strike-length" · severity low · lesson "the-documents-that-did-not-survive"
//     quote: "Three accounts, two of them published by the same project, and they do not agree."
//     title: Was the June 1867 strike a week or eight days?
//     question: How many days did the strike of Chinese Central Pacific workers that began on 24
//               June 1867 last? Crocker's own testimony implies a week (struck on a Monday, ordered
//               back by the next Monday); Obenzinger says a week; the Stanford project's frequently
//               asked questions page says the strike ended after eight days of increasing privation.
//     claim: The course prints all three and reconciles none of them.
//     stakes: Small in itself, and it is a clean worked example of the course's own method, so it is
//             worth settling rather than leaving as a shrug.
//     needs: a contemporary newspaper report giving the dates the men stopped and returned.
//     where: the California Digital Newspaper Collection for the Sacramento Union and the Dutch Flat
//            Enquirer, late June and early July 1867; the Stanford project's own citation for eight
//            days.
//
//  J. key "sacramento-reporter-bones-1870" · severity medium · lesson "where-twelve-hundred-comes-from"
//     quote: "That newspaper has not been read for this course."
//     title: Read Bones in Transit, Sacramento Reporter, 30 June 1870
//     question: What does the article actually say? Specifically: does it state 20,000 pounds, does
//               it itself perform the calculation to 1,200, and what does it say about where the
//               remains were collected? And what is the second, contemporary report that puts the
//               same train at about fifty?
//     claim: Lesson 10 reports both articles only as the Stanford project reports them, and says so
//            in the text and in the citation.
//     stakes: The 1,200 figure is the most-repeated number in this subject and the course takes it
//             apart arithmetically. Doing that on a paraphrase of a newspaper, rather than the
//             newspaper, is the one soft joint in Section 3.
//     needs: the full text of both articles, with dates, page and column.
//     where: the California Digital Newspaper Collection; the California State Library; the
//            Stanford project's own citation for the article.
//
//  K. key "russell-photograph-record" · severity low · lesson "the-photograph-and-its-hedges"
//     quote: "The title appears three different ways across those two pages."
//     title: What is the holder's own title and attribution for the Golden Spike photograph?
//     question: What does the Oakland Museum of California's record for Plate 227 of the Andrew J.
//               Russell Collection give as the photograph's title, photographer and date? And is
//               there a holder's record for the less famous Russell view, reported elsewhere as
//               stereoview #539, "Chinese at Laying Last Rail UPRR"?
//     claim: Lesson 13 gives the National Park Service title and Stanford's caption form, notes that
//            one Stanford page calls the photographer Alfred Joseph Russell in its body text and
//            Andrew J. Russell in its own caption, and does not decide.
//     stakes: A course that teaches learners to read a caption should cite a photograph by the
//             holder's own record rather than by three different secondary renderings of it.
//     needs: the museum's catalogue entry, verbatim, and a holder's record for the second view.
//     where: the Oakland Museum of California; the Union Pacific Railroad Museum; the collection
//            reported on cprr.net, which is private and therefore may not be reachable.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file).
// Import: `import { WHOSE_NAMES_THE_PAYROLL_KEPT_COURSE } from "./data/whose-names-the-payroll-kept-course";`
// NO migration. NO seed:* re-run beyond `pnpm seed:courses`.
//
//   // "Whose Names the Payroll Kept" (the Central Pacific's Chinese workers, plans/83 E-26).
//   // PRIVATE study, by BAM's approval on 2026-09-21 of
//   // plans/future-courses/culture-and-history/uncredited/2026-09-18-central-pacific-chinese-workers-brief.md, an
//   // approval conditional on Crocker's testimony being fetched first, which it was (brief 6B).
//   // Built from TWO primary sources that corroborate each other: two Central Pacific payroll
//   // sheets read as page images, and the sworn testimony of the contractor whose name is printed
//   // on them. NO series code, per BAM's 2026-09-19 decision that private courses carry none.
//   // NO migration: pnpm seed:courses.
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "whose-names-the-payroll-kept",
//     course: WHOSE_NAMES_THE_PAYROLL_KEPT_COURSE,
//     category: "Culture & History",
//     additionalCategories: ["Research & Reporting"],
//     seriesSlug: "credit",
//     seriesTitle: "Credit: Who Gets Named",
//     seriesOrder: 17,
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83 E-26). Built from two Central Pacific payroll sheets read as page images and from Charles Crocker's and James Strobridge's sworn testimony in Senate Report 44-689, read at the page rather than in the volume's text transcription. It corrects five second-hand quotations that circulate in the secondary literature, including the wording of its own central quotation. It is held private because several supporting items are still reported rather than read: the Sacramento Reporter's Bones in Transit of 30 June 1870 and the 1868 report of a search for remains reach the course only as the Stanford project describes them, the 1919 identification of three named workers is verified as a caption and not as a record, the Southern Pacific Bulletin of May 1928 is quoted only as Stanford quotes it, and the Chinese writing on Pay Roll No. 102 has not been transcribed. Eleven research checks are proposed with the course.",
//   });
//
// WHY "Research & Reporting" IS THE ADDITIONAL CATEGORY, and why it is earned rather than
// decorative: the course teaches a method as explicitly as it teaches a subject. Reading a ruled
// manuscript form column by column. Running a repeatable check across two documents (John Keating in
// the OCCUPATION column of both). Locating a printed page against a scan page in a digitised volume,
// and saying which of the two a citation means. Catching a silent eighteen-word ellipsis that moves
// a book from one man's hands to another's. Taking a circulating number back to the arithmetic that
// made it and naming the constant somebody assumed. Those are the skills `how-to-research` and
// `archives-and-finding-aids` teach in the abstract, and this course is a worked case of all of
// them. Culture & History stays PRIMARY because the credit series sits there and a learner browsing
// the series should find this beside `who-gets-named` and `who-made-the-record`.
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `whose-names-the-payroll-kept` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block with a
//    locator, and the D5a tiers above say which entries may be hosted. Only the congressional report
//    and the National Park Service text are Tier A, and the payroll scans sit at Tier B ONLY because
//    two rights statements have not been read. Reading them is the cheapest improvement this course
//    can get.
//  - RESEARCH CHECKS: the eleven above, A to K. C is the one BAM flagged by hand (the firm's city).
//    A and J are the two whose answers would change a lesson rather than a sentence.
//  - STANDARDS: a primary-source history and source-criticism course (sourcing, corroboration,
//    chronology, claim versus evidence, reading a manuscript record, and quantitative reasoning
//    about historical estimates), so per the repo rule it should be MAPPED in src/lib/standards/
//    rather than BACKLOGged. Until it is mapped it needs a BACKLOG line in
//    scripts/check-standards-coverage.ts or `pnpm lint` fails.
//  - SERIES: seriesOrder 17, which the task note gives as the next free order in the credit series.
//    Confirm against whatever landed in scripts/seed-courses.ts while this course was being written.
//  - VISIBILITY: private, insert-only. The price, priceType, visibility and publishHoldReason above
//    must be right on the FIRST seed, because a re-seed never rewrites them.
//  - GUARDS: check-em-dashes, check-quiz-balance, check-longest-option, check-reveals,
//    check-recall-placement and check-assessment-fit all read `git ls-files`, so they skip this file
//    while it is untracked. Each was run against this file directly, with the scripts' own code and
//    constants and only the file list replaced, and all six passed with no violations and no new
//    grandfather entries. Measured length-tell scores against the 60% limit, by bank: section 1
//    0%, section 2 0%, section 3 0%, section 4 2%, final 1%, with 0 strictly-longest correct
//    options in 394 questions. check-quiz-balance reports all five banks as position-skewed and
//    shuffled, which is the intended shape. check-em-dashes finds 18 protected hits and 0
//    violations, all of them inside verbatim blockquotes of the committee report or inside code
//    comments. check-reveals counts 28 cards, 0 broken. `npx tsc --noEmit` on this file is clean.
//    Re-run the real guards once the file is tracked.
