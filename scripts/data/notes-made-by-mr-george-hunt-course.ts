import type { AuthoredCourse } from "./authored-course";

// "Notes Made by Mr. George Hunt: Six Title Pages, an Archive, and a Correction" (Culture & History).
// Slug to be registered: `notes-made-by-mr-george-hunt`, the exact phrase on the 1897 inner title page.
// PRIVATE, FREE, NO SERIES CODE, by BAM's decision of 2026-09-19: private courses do not carry CREDIT
// codes, so the brief's proposed CREDIT W2 slot is NOT used. Built from the brief BAM approved on
// 2026-09-19: plans/future-courses/uncredited/2026-09-18-george-hunt-brief.md.
// RESEARCH TIER: 1-P / 2 (a living community's knowledge; the cost of being wrong is high).
// Every `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// THE SPINE, and it must not be flattened into "he was not credited":
// He was credited, at a different rank in almost every book. Across six publications between 1897
// and 1930 he sits on four different rungs of the same ladder and is off it twice: named as author
// or co-author on three (per the Bard curators and four catalogue records), "notes made by" on the
// 1897 monograph, "data collected by" on the 1921 Ethnology, and absent from the 1910 and 1930 title
// pages. In 1921 the Bureau of American Ethnology printed a note making him "responsible for the
// accuracy, the authenticity, and the character of the contents" of a book whose author line names
// only Boas. The course reads that record, then reads the corrections made to it.
//
// ══ GATE A6, THE CONDITION BAM CONFIRMED ON 2026-09-19, AND IT IS ABSOLUTE ══
// This course is about the CREDIT RECORD, never about the knowledge the manuscripts carry. It
// reprints NO manuscript content: no stories, no songs, no prayers, no hereditary names, no
// ceremonial detail. Three judgment calls were made against that rule and are written here so they
// read as decisions:
//  (a) NO KWAK'WALA PERSONAL NAME IS PRINTED ANYWHERE, including Hunt's own, his mother's, and the
//      Kwak'wala name the U'mista Cultural Society gave the 2019 exhibition. The published sources
//      spell Hunt's name at least three ways and his mother's two ways, the brief could not settle
//      any of them, and the family has not been asked which form it uses. Lesson 4 states that
//      omission openly and teaches it as a finding about the record.
//  (b) BIBLIOGRAPHIC TITLES ARE PRINTED, because a title in a table of contents is the credit record
//      itself and is the single clearest evidence that Hunt published under his own name (Boas
//      Anniversary Volume, 1906, p. 108). Nothing about what any such piece CONTAINS appears.
//  (c) ONE QUOTED PHRASE from Hunt's 1920 letter names "the names of the masks and dishes" as the
//      subject of the mistakes he wanted corrected. It prints no name and no ceremonial detail, and
//      the quotation is unintelligible without it. Cut it if BAM reads it otherwise.
// The potlatch appears only as a Canadian law (banned 1885 to 1951, per the APS) and as the charge
// Hunt was arrested on in 1900 and acquitted of. Nothing describes a potlatch.
//
// ══ PEOPLE NAMED, AND PEOPLE NOT QUOTED ══
// The build instructions say no private individual's name or words, and that living relatives quoted
// in secondary sources stay out. Applied strictly: the ONLY living people named are the authors,
// curators and archivists whose published writing the course cites and must cite by name in APA
// (Glass, Goldsher, Berman, Carpenter, Althoff, Schlottmann, Pickman, Mooney). NO living person is
// quoted anywhere in the course. Hunt's descendants, including the exhibition's designer, the U'mista
// Cultural Society's chairman, the seven members of the Kwakwaka'wakw Editorial Committee and the
// Hunt family's representative on the advisory board, are described by ROLE and are not named. Bard's
// pages name and quote several of them; none of that reaches a lesson.
//
// ══ TERMINOLOGY ══ As the fetched sources spell it. Kwakwaka'wakw for the people and Kwak'wala for
// the language (the APS spelling; Columbia writes Kwakʼwala and Bard Kwak̓wala, both noted in
// lesson 4), Kwagu'ł for the Fort Rupert community (APS), U'mista Cultural Centre, 'Namgis.
// "Kwakiutl" appears ONLY inside historical titles and quotations, as the APS does.
//
// ══ FETCH-OR-DO-NOT-CITE ══ Everything asserted below was read on a fetched source. The brief's
// section 6 (fetched 2026-09-18) is the evidence base; this build added four Internet Archive item
// metadata records, fetched 2026-09-19, which are the whole of lesson 8:
//   socialorganizati00boas      creator list includes "Hunt, George M. (George McMonies), 1884-"
//   socialorganizat00huntgoog   creator list includes "Hunt, George. [from old catalog]"
//   ethnologyofkwaki00boas      creator list "Boas, Franz, 1858-1942", "Hunt, George"
//   kwakiutltextssec0000boas    creator "Boas, Franz, 1858-1942"; associated-names "Hunt, George, author"
//
// ══ THE ONE OPEN ITEM, HANDLED EVERYWHERE IT APPEARS ══
// The Kwakiutl Texts title pages (1902-1905 and 1906) were NOT read: the AMNH Digital Library files
// returned HTTP 401 and HathiTrust, BHL and Gallica returned 403, and the first series is not on the
// Internet Archive. Four catalogue records and the Bard curators state Hunt is named there as author
// or co-author. The course therefore ATTRIBUTES that ("the catalogue records and the curators
// state"), never asserts it, says in the lesson that nobody in this build has read the page, and
// files it as proposed research check A at the bottom of this file.
//
// ══ REPORTED CLAIMS, ATTRIBUTED IN THE TEXT, NEVER ASSERTED ══
// Hunt's undated note accusing Boas of publishing what he had promised not to publish, and Hunt's
// January 1929 "medal" letter, are both known here only from Columbia's 2023 post, which does not
// identify the manuscript page. Lesson 11 names Columbia as the reporter, says what has not been
// seen, and teaches that discipline as its subject. Checks B and C at the bottom.
//
// House style, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 5 lesson-specific terms; APA 7 `## Sources`;
// a quiz per teaching section (pool sized to audit-course's density target, serving 5, passing 80,
// shuffled) plus a final pooling 40 and serving 10, placed LAST; every question carries `explanation`
// and `sourceLessonSlug`. Correct options are written SHORT and distractors long and specifically
// wrong, so check-longest-option passes by construction. No em dashes in user-visible copy.
export const GEORGE_HUNT_COURSE: AuthoredCourse = {
  title: "Notes Made by Mr. George Hunt: Six Title Pages, an Archive, and a Correction",
  description:
    "From 1889 until his death in 1933, George Hunt wrote thousands of pages of Kwak'wala, with an English translation under each line, for Franz Boas. Most of it reached print in books with Boas's name at the top. The short version of the story says Hunt was not credited. The title pages say something more exact, and more useful. He was credited, at a different rank in almost every book: named as an author on three publications, the maker of the notes on the 1897 monograph, the collector of the data on the 1921 Ethnology, and absent from two more. In 1921 the Bureau of American Ethnology printed a note holding him responsible for the accuracy, the authenticity and the character of a book whose author line carries only Boas. Columbia University holds thousands of pages of his handwriting, received as Boas's gift, and in 2023 its own writer said plainly that Boas did not write them. This course reads that record rung by rung, follows it into two archives and four catalogue records where his name moves again, and then reads the corrections: the six hundred pages of fixes Hunt himself sent before he died, the 2019 exhibition built with the U'mista Cultural Centre and his descendants, and two archives that decided not to publish what they had digitised. It teaches how to read a title page as a credit ladder, how a publisher can make someone answerable for a book and keep them off its author line, and why replacing one name with another can repeat the same error one level down. It reprints no manuscript content of any kind.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Six title pages
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "read-the-title-page-first",
      title: "1 · Read the title page first",
      section: "Section 1 · Six title pages",
      body: `The book at the centre of this course was printed in 1897 by the Government Printing Office, inside the *Report of the U.S. National Museum for 1895*. Its title is *The Social Organization and the Secret Societies of the Kwakiutl Indians*. Two scanned copies of it sit on the Internet Archive, so anyone reading this lesson can open the book and do exactly what the lesson does.

**A note on spelling, before anything else.** This course writes Kwakwaka'wakw for the people and Kwak'wala for the language, the way the American Philosophical Society writes them. The word "Kwakiutl" appears here only inside the titles and quotations of historical documents, because that is the word those documents use and changing it would misquote them.

**Start with the title page, and notice there is more than one.** The separately bound offprint carries a title page that reads, under the title, "By Franz Boas." That is the page that gets photographed, quoted and cited. The title page inside the volume itself carries a longer line: "By Franz Boas. Based on personal observations and on notes made by Mr. George Hunt" (Boas, 1897). One book, one year, two different answers to the question of who made it.

**Then read the preface, which is more explicit than either page.** Boas wrote there that "the great body of facts presented here were observed and recorded by Mr. George Hunt, of Fort Rupert, British Columbia," and that he was "under great obligations" to him (Boas, 1897). Observed and recorded. Not suggested, not assisted with, not checked over. That sentence describes the person who did the fieldwork and did the writing.

**Three statements, three ranks.** The offprint page says Boas made the book. The inner title says Boas made the book using another man's notes. The preface says another man observed and recorded the great body of its facts. None of the three is false, and they are not equal. Each is a decision about rank, made by a publisher, printed on a page, in type.

**The instrument this course borrows.** *Written by Himself* teaches a credit ladder with rungs on it: the same size type as the author, smaller type, the word "with", the word "and", a line in the acknowledgements, nothing at all. You hold a book's front matter against the ladder and read off the rung. What makes George Hunt an unusually good case is that he does not sit on one rung. Across six publications between 1897 and 1930 he sits on four different rungs, and on two of them he is not on the ladder at all. Lesson 2 lays them out in order.

**The thing to unlearn first.** The short version of this story says Hunt was "not credited". Read the 1897 front matter and you can see that this is not quite true, and that the inaccuracy costs something. He was credited. He was credited as the source of "notes" on a book whose facts, by its own preface, he observed and recorded, and the exact wording of that credit is the evidence. "Not credited" is a complaint, and a complaint can be waved away by anyone holding the book. "Credited as a note-maker on a book he observed and recorded" is a finding, and a finding survives being checked.

**What a title page is, and is not.** A title page is not a description of how a book was made. It is a short claim about who is answerable for it, and it becomes the machine-readable fact that libraries, citations and search engines copy forward for a century. That is why the rung still matters long after everyone involved is dead. Section 3 follows those copies into two archives and four catalogue records, where the rung changes again.

:::reveal What do the two 1897 title pages say about George Hunt? ||| The offprint title page names Boas alone. The title page inside the volume adds that the work is based on personal observations and on notes made by Mr. George Hunt.

:::reveal What verbs does the 1897 preface use for what Hunt did? ||| Observed and recorded. The preface says the great body of facts presented in the book were observed and recorded by Mr. George Hunt of Fort Rupert, British Columbia.

## Vocabulary
- **Title page**: the page that states who is answerable for a book. It is a claim about rank, not a description of how the book was made.
- **Offprint**: a separately bound copy of one paper taken out of a larger volume. The 1897 study exists both as an offprint and inside the museum report, with different title pages.
- **Credit ladder**: the set of rungs a publisher can put a contributor on, from the same size type as the author down to nothing at all. Taught in *Written by Himself*, lesson 3.
- **Front matter**: the pages before a book's text, including its title pages, preface and contents, where credit decisions are printed.

## Sources
Boas, F. (1897). *The social organization and the secret societies of the Kwakiutl Indians*. In *Report of the U.S. National Museum for 1895*. Government Printing Office. Internet Archive. https://archive.org/details/socialorganizat00huntgoog
Boas, F. (1897). *The social organization and the secret societies of the Kwakiutl Indians* [Getty Research Institute copy]. Government Printing Office. Internet Archive. https://archive.org/details/socialorganizati00boas
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.`,
    },
    {
      slug: "four-rungs-and-two-absences",
      title: "2 · Co-author, note-maker, data collector, absent",
      section: "Section 1 · Six title pages",
      body: `Here is the ladder, in the order the books were printed. Read it as a single record made by one publisher-and-author relationship over thirty-three years.

**Kwakiutl Texts (1902 to 1905) and Kwakiutl Texts: Second Series (1906).** The catalogue records and the curators of the 2019 exhibition state that Hunt is named on these as an author or co-author. Four separate catalogue records agree: the American Museum of Natural History's own digital library lists "Boas, Franz, 1858-1942" and "Hunt, George" as authors of both; Canadiana lists "George Hunt (1854-1933), author"; the Online Books Page lists both men; and the Internet Archive's record for a 1975 reprint of the second series carries "Hunt, George, author" (Internet Archive, n.d.-d). **Nobody in this course has read the printed title page.** The museum's files returned an authorisation error and three other libraries refused the scan, so how the credit is actually set in type, whether in the same size, whether joined by the word "and", is still an open question. This course reports what the catalogues and the curators say and stops there. The check is filed at the bottom of this file.

**The Rival Chiefs: A Kwakiutl Story (1906).** The *Boas Anniversary Volume*, published in New York by G. E. Stechert and Company, lists in its table of contents: "George Hunt, The Rival Chiefs. A Kwakiutl Story . . . . 108" (Laufer, 1906). His name, first, on his own piece. This course says nothing at all about what the piece contains. The bibliographic line is the evidence.

**The 1897 monograph.** "Based on personal observations and on notes made by Mr. George Hunt" on the inner title page, and Boas alone on the offprint (Boas, 1897).

**Kwakiutl Tales (1910).** Boas alone on the title page (Boas, 1910). Lesson 5 reads what its preface says about who wrote the texts, which is not the same thing.

**Ethnology of the Kwakiutl (1921).** The title page reads, in three stacked lines: "Ethnology of the Kwakiutl / Based on data collected by George Hunt / By Franz Boas" (Boas, 1921). Hunt is on the page, above the author line, and he is not the author.

**The Religion of the Kwakiutl Indians (1930).** "By Franz Boas" (Boas, 1930). Hunt is not on the title page. He is in the preface.

**What the pattern shows, and what it does not.** Counted as rungs: named as author or co-author on three publications, according to the catalogues and the curators; credited for "notes" on one; credited for "data" on one; off the page on two. The Bard Graduate Center's curators put the count plainly, writing that only three publications explicitly credited him as an author or co-author (Goldsher & Glass, n.d.). No source this course read gives Boas's reason for any of it, so this course states none. Saying "the credit went down" is what the record supports. Saying "Boas took it" is a motive, and the documents do not carry one.

**Why a pattern beats an anecdote.** One book with a missing name is an oversight, and anyone can argue about it. Six books over thirty-three years, in which the same man occupies four different positions, is a system with rules, and the rules can be described. That is the difference between complaining about a credit and reading a credit record.

:::reveal How many rungs does George Hunt occupy across the six publications, and where is he absent? ||| Four rungs: named as author or co-author on three publications, notes on the 1897 monograph, data on the 1921 Ethnology. He is absent from the title pages of Kwakiutl Tales in 1910 and The Religion of the Kwakiutl Indians in 1930.

:::reveal Why does this course attribute the Kwakiutl Texts credit instead of asserting it? ||| Because nobody in this build has read the printed title page. The scans returned authorisation errors, so the course reports what four catalogue records and the exhibition's curators say, and files the page itself as an open research check.

## Vocabulary
- **Rung**: one position on the credit ladder, such as author, co-author, "notes made by", "data collected by", or absent.
- **Table of contents**: the list of a volume's pieces with their authors and page numbers. For *The Rival Chiefs* it is the credit record.
- **Attribute**: to say who reports a claim rather than assert the claim yourself. The course attributes the *Kwakiutl Texts* credit because the page has not been read.
- **Catalogue record**: a library's own description of a book, made separately from the book and sometimes disagreeing with it. Lesson 8 reads four of them.

## Sources
Boas, F. (1897). *The social organization and the secret societies of the Kwakiutl Indians*. In *Report of the U.S. National Museum for 1895*. Government Printing Office. Internet Archive. https://archive.org/details/socialorganizat00huntgoog
Boas, F. (1910). *Kwakiutl tales* (Columbia University Contributions to Anthropology, Vol. 2). Internet Archive. https://archive.org/details/in.ernet.dli.2015.280762
Boas, F. (1921). *Ethnology of the Kwakiutl, based on data collected by George Hunt* (Thirty-fifth Annual Report of the Bureau of American Ethnology). Government Printing Office. Internet Archive. https://archive.org/details/ethnologyofkwaki00boas
Boas, F. (1930). *The religion of the Kwakiutl Indians: Part I. Texts*. Columbia University Press. Internet Archive. https://archive.org/details/religionofkwakiu01boas
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/
Internet Archive. (n.d.-d). *Kwakiutl texts: Second series* [Item metadata record, identifier kwakiutltextssec0000boas]. https://archive.org/details/kwakiutltextssec0000boas
Laufer, B. (Ed.). (1906). *Boas anniversary volume: Anthropological papers written in honor of Franz Boas*. G. E. Stechert. Internet Archive. https://archive.org/details/boasanniversary00laufgoog`,
    },
    {
      slug: "responsible-for-the-contents",
      title: "3 · Responsible for the contents, not the author",
      section: "Section 1 · Six title pages",
      body: `The clearest single document in this course is half a page long and was printed by a government bureau in 1921. It is worth reading slowly.

**The Bureau's note.** *Ethnology of the Kwakiutl* appeared as part of the Thirty-fifth Annual Report of the Bureau of American Ethnology. In front of it the Bureau printed a "Note on the Accompanying Paper", signed by F. W. Hodge, Ethnologist-in-Charge. It says: "The material for the paper was collected and recorded by Mr. George Hunt, a mixed-blood Kwakiutl, of Fort Rupert, British Columbia, who is responsible for the accuracy, the authenticity, and the character of the contents of the paper" (Hodge, 1921). The phrase "a mixed-blood Kwakiutl" is the Bureau's wording in 1921 and is quoted here because it is what the document says, not because this course would write it. The note adds that Hunt had "also collaborated in a similar way" on the 1897 monograph.

**Boas says the same thing in his own preface.** "So far as accuracy and contents are concerned, he is responsible for the material contained in this book" (Boas, 1921). Two men, in the same volume, assigning the same person responsibility for the same thing.

**Now look at the title page again.** "Ethnology of the Kwakiutl / Based on data collected by George Hunt / By Franz Boas." The author is Boas. The person answerable for whether the book is accurate, authentic, and what it claims to be, is Hunt.

**Why that combination is the interesting one.** *Who Gets Named* teaches the four criteria the International Committee of Medical Journal Editors uses to decide authorship, and the fourth is accountability: an author agrees to be answerable for the work. The 1921 volume satisfies that criterion for Hunt in writing, twice, in two different hands, and then puts someone else's name on the author line. It is not a case of a contributor being overlooked. It is a case of a contributor being formally made answerable and formally not made an author, in the same book, by the people who published it.

**Responsibility and credit are separable, and separating them has consequences.** If a reader in 1925 found an error in *Ethnology of the Kwakiutl*, the Bureau's note tells them whose error it is. If the same reader wanted to cite the book, every convention of citation tells them whose book it is. Blame runs one way and credit runs the other. That asymmetry is a thing you can look for in any record: who is named when something goes wrong, and who is named when it goes right.

**Say what the record shows.** The documents show a rank. They do not show a motive. Nothing this course fetched gives Boas's or the Bureau's reason for printing the note and keeping the author line, and inventing one would be the same error the course is about, run in the other direction. The finding is the arrangement itself, which is unusual enough to be worth teaching without any theory attached.

**One more thing the note does.** By saying Hunt "also collaborated in a similar way" on the 1897 book, Hodge connects two volumes twenty-four years apart and tells a later reader that the 1897 credit was of the same kind. That sentence is the reason section 5's correction, written by Hunt himself, is aimed at the 1897 book rather than the 1921 one.

:::reveal What does the Bureau of American Ethnology's 1921 note say George Hunt is responsible for? ||| The accuracy, the authenticity, and the character of the contents of the paper. It also says he collected and recorded the material.

:::reveal Which authorship criterion does the 1921 volume satisfy for Hunt while withholding the author line? ||| Accountability, the fourth criterion in the ICMJE list taught in Who Gets Named. Two documents in the same volume make him answerable for the contents and the title page names Boas as author.

## Vocabulary
- **Accountability**: agreeing to be answerable for a work, including for what is wrong with it. One of the four authorship criteria taught in *Who Gets Named*.
- **Ethnologist-in-Charge**: the Bureau of American Ethnology officer who signed the 1921 note, F. W. Hodge.
- **Author line**: the line on a title page that names who the book is by, and the line that citation conventions copy.
- **Asymmetry of blame and credit**: an arrangement in which responsibility for errors sits with one person and credit for the work sits with another.

## Sources
Boas, F. (1921). *Ethnology of the Kwakiutl, based on data collected by George Hunt* (Thirty-fifth Annual Report of the Bureau of American Ethnology). Government Printing Office. Internet Archive. https://archive.org/details/ethnologyofkwaki00boas
Hodge, F. W. (1921). Note on the accompanying paper. In F. Boas, *Ethnology of the Kwakiutl, based on data collected by George Hunt* (Thirty-fifth Annual Report of the Bureau of American Ethnology). Government Printing Office. Internet Archive. https://archive.org/details/ethnologyofkwaki00boas`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Six title pages",
      section: "Section 1 · Six title pages",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What appears under the title on the 1897 offprint title page?",
            options: [
              "By Franz Boas",
              "By Franz Boas and George Hunt, printed in the same size type on a single shared line",
              "By George Hunt, edited for publication by Franz Boas of Columbia University",
              "Compiled by the staff of the United States National Museum from field notes of 1895",
            ],
            correctIndex: 0,
            explanation:
              "The offprint page names Boas alone. It is also the page that gets photographed, quoted and cited, which is why the inner title page is so easy to miss.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does the 1897 title page inside the museum volume add after Boas's name?",
            options: [
              "Notes made by Mr. George Hunt",
              "A note that the manuscript was submitted to the Bureau of American Ethnology for review",
              "A dedication to the Jesup North Pacific Expedition and its subscribers in New York",
              "An acknowledgement of the Government Printing Office's typesetters and engravers",
            ],
            correctIndex: 0,
            explanation:
              "The full line reads: Based on personal observations and on notes made by Mr. George Hunt. Same book, same year, a different answer about who made it.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which two verbs does the 1897 preface use for what George Hunt did?",
            options: [
              "Observed and recorded",
              "Translated and proofread, meaning he checked language that others had already collected",
              "Suggested and advised, meaning he pointed Boas toward people worth interviewing",
              "Illustrated and photographed, meaning he supplied the plates that fill the volume",
            ],
            correctIndex: 0,
            explanation:
              "Boas wrote that the great body of facts presented here were observed and recorded by Mr. George Hunt. That sentence describes the person who did the fieldwork and the writing.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which office printed the 1897 study?",
            options: [
              "The Government Printing Office",
              "Columbia University Press, which issued it in its Contributions to Anthropology series",
              "G. E. Stechert and Company of New York, publisher of the Boas Anniversary Volume",
              "E. J. Brill of Leiden, printer to the Jesup North Pacific Expedition memoirs",
            ],
            correctIndex: 0,
            explanation:
              "It was printed by the Government Printing Office inside the Report of the U.S. National Museum for 1895.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Inside which report did the 1897 study appear?",
            options: [
              "The Report of the U.S. National Museum for 1895",
              "The Thirty-fifth Annual Report of the Bureau of American Ethnology for 1913 to 1914",
              "The Memoirs of the American Museum of Natural History, volume fourteen, part one",
              "The Columbia University Contributions to Anthropology, second volume in the series",
            ],
            correctIndex: 0,
            explanation:
              "The 1895 museum report is the parent volume. The offprint is the same paper bound separately, with its own title page.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which place does the 1897 preface give as George Hunt's?",
            options: [
              "Fort Rupert",
              "Alert Bay, British Columbia, where the U'mista Cultural Centre later stood",
              "Victoria, British Columbia, where the provincial courts and offices were",
              "Tongass, in Southeast Alaska, where his mother's family lived",
            ],
            correctIndex: 0,
            explanation:
              "The preface names him as Mr. George Hunt, of Fort Rupert, British Columbia. The 1921 Bureau note gives the same place.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What phrase does the 1897 preface use for what Boas owes Hunt?",
            options: [
              "Under great obligations",
              "In permanent partnership, a phrase repeated in every later preface Boas wrote",
              "Indebted for financial support, referring to the cost of the fieldwork seasons",
              "Grateful for the loan of objects, referring to the masks and dishes described",
            ],
            correctIndex: 0,
            explanation:
              "Boas writes that he is under great obligations to Hunt. It is warm, it is explicit, and it is in the preface rather than on the title page.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Where can a learner read the 1897 title pages for themselves?",
            options: [
              "On the Internet Archive",
              "Only in the Rare Book and Manuscript Library reading room at Columbia University",
              "Only at the American Philosophical Society in Philadelphia, by appointment",
              "Nowhere, because every surviving copy is access-restricted by community protocol",
            ],
            correctIndex: 0,
            explanation:
              "Two scanned copies are on the Internet Archive, which is why the 1897 book can be the course's teachable artefact while the manuscripts cannot.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does this course call the instrument it uses to read a credit?",
            options: [
              "A credit ladder",
              "A provenance chain, meaning the sequence of owners a document passed through",
              "A citation index, meaning a count of how often a work has been cited by others",
              "An authority file, meaning a library's list of approved forms of a person's name",
            ],
            correctIndex: 0,
            explanation:
              "The ladder has rungs: same size type, smaller type, the word with, the word and, the acknowledgements, nothing. You hold the front matter against it and read off the rung.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which course does this one borrow the credit ladder from?",
            options: [
              "Written by Himself",
              "Archives and Finding Aids, which teaches provenance and original order instead",
              "Who Made the Record, which teaches how a record about people is assembled",
              "Tribal Nations Governance, which teaches where a course about a nation stops",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 3, Four shapes of a hidden hand, sets out the rungs. Hunt is the first case in this catalog where one collaborator sits on four of them across one author's books.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "How many different rungs does Hunt occupy across the six publications?",
            options: [
              "Four",
              "One, because every book from 1897 to 1930 credits him in exactly the same words",
              "Six, because each of the six publications invents a different formula for him",
              "Two, because a contributor can only be either an author or an acknowledgement",
            ],
            correctIndex: 0,
            explanation:
              "Author or co-author, notes made by, data collected by, and absent. He is off the ladder entirely on two of the six.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Why does the course prefer the sentence about note-making to the words not credited?",
            options: [
              "It is a finding, not a complaint",
              "It is shorter, and short sentences are easier for a learner to remember accurately",
              "It is kinder to Boas, whose reputation the course is written to protect",
              "It avoids naming Hunt, which the community has asked writers not to do",
            ],
            correctIndex: 0,
            explanation:
              "Not credited can be waved away by anyone holding the book, because he was credited. Credited as a note-maker on a book he observed and recorded survives being checked.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "According to this lesson, what is a title page a claim about?",
            options: [
              "Who is answerable",
              "How many people were paid for their work on the book and at what rate",
              "Which archive holds the manuscript the printed book was set from",
              "Whether the publisher believes the book's contents are factually accurate",
            ],
            correctIndex: 0,
            explanation:
              "It is a short claim about who is answerable for the book, and it becomes the machine-readable fact that libraries and citations copy forward.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does the lesson say a title page is NOT?",
            options: [
              "A description of how the book was made",
              "A legal document, since publishers are not bound by anything printed there",
              "A place where a contributor's name can appear below the author's name",
              "Something a library catalogue ever copies when it describes a book",
            ],
            correctIndex: 0,
            explanation:
              "The 1897 preface describes how the book was made. The title page compresses that into a rank, and the rank is what gets copied.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Why does the rung on the ladder still matter a century later?",
            options: [
              "Libraries copy it forward",
              "Because copyright in the 1897 report has not yet expired in the United States",
              "Because the Bureau of American Ethnology still reprints the book each decade",
              "Because a title page can be amended only by the author who signed it",
            ],
            correctIndex: 0,
            explanation:
              "Catalogues, citations and search engines copy the title page's claim, so the rung outlives everyone involved. Section 3 follows those copies into four catalogue records.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which spelling does this course use for the people?",
            options: [
              "Kwakwaka'wakw",
              "Kwakiutl, because that is the form the historical documents use throughout",
              "Kwagu'ł, because that is the name of the whole nation rather than one community",
              "'Namgis, because the U'mista Cultural Centre is located in that community",
            ],
            correctIndex: 0,
            explanation:
              "The course follows the American Philosophical Society. Kwagu'ł names the Fort Rupert community specifically, and 'Namgis is a different community again.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which spelling does this course use for the language?",
            options: [
              "Kwak'wala",
              "Kwakiutl, which is how both the 1897 and the 1921 prefaces name the language",
              "Tlingit, which is the language of Hunt's mother's family in Southeast Alaska",
              "Chinook Jargon, the trade language of the coast in the nineteenth century",
            ],
            correctIndex: 0,
            explanation:
              "Kwak'wala is the American Philosophical Society's spelling. Columbia and the Bard Graduate Center write it with different characters, which lesson 4 notes.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "When does the word Kwakiutl appear in this course?",
            options: [
              "Inside historical titles and quotations",
              "Whenever the course refers to the people, since it is the shorter of the two words",
              "Only in the quiz questions, where the longer spelling would be hard to type",
              "Never, because quoting a historical title accurately is less important than spelling",
            ],
            correctIndex: 0,
            explanation:
              "It is the word those documents use, and changing it inside a quotation or a title would misquote them. Everywhere else the course writes Kwakwaka'wakw.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Whose spelling practice does the course follow for the people and the language?",
            options: [
              "The American Philosophical Society's",
              "The Bureau of American Ethnology's, as printed in its 1921 annual report",
              "The Internet Archive's, as recorded in the creator fields of its scanned items",
              "The Government Printing Office's, as set in the 1897 museum report",
            ],
            correctIndex: 0,
            explanation:
              "The APS writes Kwakwaka'wakw, Kwak'wala and Kwagu'ł, and says the people were in the past referred to as Kwakiutl.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "How many title pages does the 1897 study have?",
            options: [
              "Two",
              "One, set once and reprinted identically in the offprint and the museum volume",
              "Four, one for each of the sections into which the monograph is divided",
              "None, because a paper inside an annual report is not given a title page",
            ],
            correctIndex: 0,
            explanation:
              "The offprint has one and the museum volume has another, and they credit Hunt differently. Noticing that there is more than one is the whole move.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What is an offprint?",
            options: [
              "A separately bound paper",
              "A proof copy sent to an author for correction before a book goes to press",
              "A photographic reproduction of a manuscript page made for an archive's readers",
              "A later edition of a book issued by a different publisher under a new title",
            ],
            correctIndex: 0,
            explanation:
              "One paper taken out of a larger volume and bound on its own. The 1897 study exists both ways, with different title pages.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What is front matter?",
            options: [
              "The pages before a book's text",
              "The opening chapter of a book, in which the author states the argument",
              "The bibliography and index, which are printed at the front in older reports",
              "The archival folder that holds the correspondence about a book's publication",
            ],
            correctIndex: 0,
            explanation:
              "Title pages, preface and contents. It is where credit decisions are printed, which is why this course reads it first.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which section of this course follows the credit into archives and catalogue records?",
            options: [
              "Section 3",
              "Section 5, which reads the corrections made to the record after 1920",
              "Section 4, which asks whose knowledge the manuscripts actually carry",
              "Section 2, which reads Boas's own account of how the method worked",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 covers Columbia, the American Philosophical Society, and four Internet Archive catalogue records in which Hunt's name moves again.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "On how many publications do the 2019 exhibition's curators say Hunt was explicitly credited as an author or co-author?",
            options: [
              "Three",
              "One, meaning the 1921 Ethnology of the Kwakiutl and nothing else",
              "Six, meaning every book this course examines between 1897 and 1930",
              "None, meaning the exhibition found no publication that named him at all",
            ],
            correctIndex: 0,
            explanation:
              "The Bard Graduate Center page names The Rival Chiefs and the two series of Kwakiutl Texts. The 1897 and 1921 credits are of a different kind.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What line sits above the author line on the 1921 title page?",
            options: [
              "Based on data collected by George Hunt",
              "Recorded in Kwak'wala by George Hunt and translated into English by Franz Boas",
              "Prepared under the direction of F. W. Hodge, Ethnologist-in-Charge of the Bureau",
              "With the assistance of the Jesup North Pacific Expedition of the American Museum",
            ],
            correctIndex: 0,
            explanation:
              "Three stacked lines: the title, then based on data collected by George Hunt, then by Franz Boas. Hunt is on the page and above the author line, and he is not the author.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Whose name is on the title page of Kwakiutl Tales, published in 1910?",
            options: [
              "Boas alone",
              "Boas and Hunt together, in the same size type, joined by the word and",
              "Hunt alone, with Boas credited in smaller type as the volume's editor",
              "Neither man, because the volume was issued anonymously by the expedition",
            ],
            correctIndex: 0,
            explanation:
              "Boas alone. Lesson 5 reads what that book's own preface says about who wrote the texts, which is a different matter.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Whose name is on the title page of The Religion of the Kwakiutl Indians in 1930?",
            options: [
              "Boas alone",
              "Boas, with a line reading based on notes made by Mr. George Hunt beneath it",
              "Boas and Hunt, with Hunt named as the collector of the texts in part one",
              "Columbia University's Department of Anthropology, as a corporate author",
            ],
            correctIndex: 0,
            explanation:
              "By Franz Boas. Hunt appears in the preface of that book, not on its title page.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does the Boas Anniversary Volume's table of contents show about Hunt?",
            options: [
              "His name on his own piece",
              "That he is thanked in a list of contributors printed at the back of the volume",
              "That he supplied the photographs used to illustrate other people's papers",
              "That his contribution was withdrawn before the volume went to press",
            ],
            correctIndex: 0,
            explanation:
              "The line reads: George Hunt, The Rival Chiefs. A Kwakiutl Story, page 108. His name comes first, on his own piece.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Who published the Boas Anniversary Volume in 1906?",
            options: [
              "G. E. Stechert",
              "The Government Printing Office in Washington, as it had the 1897 museum report",
              "Columbia University Press, which also issued The Religion of the Kwakiutl Indians",
              "The American Philosophical Society, which now holds the Hunt manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "G. E. Stechert and Company of New York, edited by Berthold Laufer.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What page number does the 1906 contents line give for Hunt's piece?",
            options: [
              "108",
              "1, because a volume in someone's honour opens with the guest of honour's collaborator",
              "455, the page on which the volume's musical transcriptions begin",
              "269, which is the final page of the second series of Kwakiutl Texts",
            ],
            correctIndex: 0,
            explanation:
              "Page 108. The bibliographic line is all this course says about the piece; nothing here describes what it contains.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Why has nobody in this course read the printed Kwakiutl Texts title page?",
            options: [
              "The scans were refused",
              "Because the only surviving copy was destroyed in a fire at the museum in 1975",
              "Because the Kwakwaka'wakw Editorial Committee has asked that it not be reproduced",
              "Because the volumes were published without any title page at all",
            ],
            correctIndex: 0,
            explanation:
              "The American Museum of Natural History's files returned an authorisation error, and three other libraries refused the scan. The first series is not on the Internet Archive either.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "How many catalogue records does the course cite as agreeing that Hunt is an author of the Texts volumes?",
            options: [
              "Four",
              "One, the American Museum of Natural History's own digital library record",
              "None, which is why the claim is left out of the course altogether",
              "Twelve, one for every library in North America that holds a copy",
            ],
            correctIndex: 0,
            explanation:
              "The American Museum of Natural History's records, Canadiana, the Online Books Page, and the Internet Archive's record for a 1975 reprint.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Which record carries the word author beside Hunt's name for the 1975 reprint of the second series?",
            options: [
              "The Internet Archive's",
              "The Government Printing Office's, in its catalogue of federal publications",
              "The Bureau of American Ethnology's, in its thirty-fifth annual report",
              "Columbia University Libraries', in its 2023 noteworthy acquisitions list",
            ],
            correctIndex: 0,
            explanation:
              "Its metadata record lists Boas as creator and Hunt under associated names, with the word author. A catalogue is a separate claim from a title page.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What dates does the Canadiana record give for George Hunt?",
            options: [
              "1854 to 1933",
              "1856 to 1931, the same dates the American Philosophical Society gives",
              "1884 to 1954, the dates attached to a different man of the same name",
              "1858 to 1942, which are in fact Franz Boas's dates",
            ],
            correctIndex: 0,
            explanation:
              "Canadiana lists George Hunt, 1854 to 1933, author. Lesson 4 sets those dates against the APS figure, which disagrees.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does this course refuse to state about Boas?",
            options: [
              "His reason",
              "His name, since naming a publisher's author is outside the course's subject",
              "His dates, because the sources fetched for the course disagree about them",
              "His role, since the record does not show that he edited the manuscripts at all",
            ],
            correctIndex: 0,
            explanation:
              "No source the course fetched gives Boas's reason for any of the credit decisions, so the course gives none. The rank is the finding.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What is the difference between saying the credit went down and saying Boas took it?",
            options: [
              "One asserts a motive",
              "One is a shorter sentence, and short sentences are easier to prove in general",
              "One names a person and the other does not, which is the only real difference",
              "There is no difference, since both describe exactly the same documented event",
            ],
            correctIndex: 0,
            explanation:
              "The documents support the rank. They do not carry a motive, and inventing one would be the same error the course is about, running the other way.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Why does a pattern of six books beat a single anecdote here?",
            options: [
              "A system has describable rules",
              "Because six sources are always more reliable than one, whatever they say",
              "Because an anecdote cannot be cited in an academic reference list",
              "Because the six books were all published by the same printing office",
            ],
            correctIndex: 0,
            explanation:
              "One missing name is an oversight anyone can argue about. The same man in four positions over thirty-three years is a system, and a system can be described.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Over roughly how many years does the credit pattern in this section run?",
            options: [
              "Thirty-three",
              "Ten, from the first Kwakiutl Texts volume in 1902 to the Curtis film of 1914",
              "Forty-four, from Hunt's first work as an interpreter in 1879 to his death",
              "Five, from the 1897 monograph to the first series of Kwakiutl Texts",
            ],
            correctIndex: 0,
            explanation:
              "From the 1897 monograph to The Religion of the Kwakiutl Indians in 1930.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What about the Kwakiutl Texts credit remains unknown?",
            options: [
              "How it is set in type",
              "Whether either volume was ever printed, since no copy has been located",
              "Whether Hunt wrote any part of the two volumes at all",
              "Which publisher issued the first series, which no record names",
            ],
            correctIndex: 0,
            explanation:
              "Same size type as Boas, or smaller? Joined by the word and, or set on a separate line? Without the page, the rung cannot be read precisely.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does the course say about the contents of The Rival Chiefs?",
            options: [
              "Nothing",
              "That it is the longest piece in the Boas Anniversary Volume by some margin",
              "That it was later reprinted in the second series of Kwakiutl Texts",
              "That Boas supplied the English translation printed beneath each line",
            ],
            correctIndex: 0,
            explanation:
              "The bibliographic line is the evidence. Everything the piece contains falls under the rule that this course reprints no manuscript content.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does the verb attribute mean as this course uses it?",
            options: [
              "Say who reports a claim",
              "Assign a work to its true author after establishing that the record is wrong",
              "Add a citation to the end of a sentence you have already asserted as fact",
              "Credit an archive for permission to reproduce a manuscript page",
            ],
            correctIndex: 0,
            explanation:
              "Attributing says the catalogue records and the curators state this. Asserting would say Hunt is named there, which nobody in this build can confirm.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Which two books leave Hunt off the title page entirely?",
            options: [
              "The 1910 and 1930 ones",
              "The 1897 monograph and the 1921 Ethnology, which name only Boas as author",
              "The two series of Kwakiutl Texts, published in 1902 to 1905 and in 1906",
              "The Boas Anniversary Volume and the Thirty-fifth Annual Report of the Bureau",
            ],
            correctIndex: 0,
            explanation:
              "Kwakiutl Tales in 1910 and The Religion of the Kwakiutl Indians in 1930. The 1897 and 1921 title pages both name him, below the author line.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Which word does the 1897 inner title page use for what Hunt supplied?",
            options: [
              "Notes",
              "Texts, meaning the Kwak'wala pages with an English translation under each line",
              "Data, which is the word the Bureau of American Ethnology chose in 1921",
              "Observations, which the page assigns to Hunt rather than to Boas",
            ],
            correctIndex: 0,
            explanation:
              "Notes made by Mr. George Hunt. The personal observations on the same line are Boas's own, which is why the two halves of that sentence are worth separating.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Which word does the 1921 title page use for what Hunt supplied?",
            options: [
              "Data",
              "Notes, the same word the 1897 inner title page used twenty-four years earlier",
              "Manuscripts, referring to the pages later given to Columbia University",
              "Translations, meaning the English lines printed under the Kwak'wala",
            ],
            correctIndex: 0,
            explanation:
              "Based on data collected by George Hunt. Notes in 1897, data in 1921: two different rungs, twenty-four years apart.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Where does this course record the unresolved Kwakiutl Texts question?",
            options: [
              "As a research check",
              "In the course description, so that every learner sees it before enrolling",
              "In the vocabulary list for lesson 2, under the heading open question",
              "Nowhere, because an unresolved question is not worth writing down",
            ],
            correctIndex: 0,
            explanation:
              "A hedge written into a lesson gets a matching check, so the question stays on somebody's list until the page is read.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Who signed the 1921 Note on the Accompanying Paper?",
            options: [
              "F. W. Hodge",
              "Franz Boas, who also wrote the preface that follows it in the same volume",
              "George Hunt, who was asked to certify the accuracy of his own material",
              "Berthold Laufer, the editor of the Boas Anniversary Volume of 1906",
            ],
            correctIndex: 0,
            explanation:
              "Hodge signed it as Ethnologist-in-Charge of the Bureau of American Ethnology. Boas makes the same point separately in his own preface.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What title did Hodge sign the 1921 note under?",
            options: [
              "Ethnologist-in-Charge",
              "Secretary of the Smithsonian Institution, to whom the annual report was addressed",
              "Professor of Anthropology at Columbia University, New York",
              "Public Printer of the United States, responsible for the volume's typesetting",
            ],
            correctIndex: 0,
            explanation:
              "Ethnologist-in-Charge of the Bureau of American Ethnology, which is what makes the note an institutional statement rather than a personal one.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What three things does the 1921 note make Hunt responsible for?",
            options: [
              "Accuracy, authenticity and character",
              "Typesetting, proofreading and the correction of the plates before printing",
              "Translation, transcription and the arrangement of the chapters in the volume",
              "Funding, transport and the purchase of objects for the museum's collection",
            ],
            correctIndex: 0,
            explanation:
              "The accuracy, the authenticity, and the character of the contents of the paper. The note also says he collected and recorded the material.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What does Boas's own 1921 preface say about responsibility?",
            options: [
              "Hunt is responsible for the material",
              "That responsibility for the volume rests with the Bureau of American Ethnology",
              "That he and Hunt share responsibility equally as joint authors of the paper",
              "That no single person can be responsible for a work of collective ethnology",
            ],
            correctIndex: 0,
            explanation:
              "So far as accuracy and contents are concerned, he is responsible for the material contained in this book. Two men, one volume, the same assignment.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Whose name is on the author line of the 1921 volume?",
            options: [
              "Franz Boas",
              "George Hunt, with Boas named above him as the collector of the data",
              "Both men, printed together in the same size type on one line",
              "The Bureau of American Ethnology, as the volume's corporate author",
            ],
            correctIndex: 0,
            explanation:
              "By Franz Boas. The person answerable for the contents and the person named as author are two different people, in the same book.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "In which report did Ethnology of the Kwakiutl appear?",
            options: [
              "The Bureau's thirty-fifth annual report",
              "The Report of the U.S. National Museum for 1895, as the 1897 monograph did",
              "The Memoirs of the American Museum of Natural History, volume fourteen",
              "Columbia University Contributions to Anthropology, volume two",
            ],
            correctIndex: 0,
            explanation:
              "The Thirty-fifth Annual Report of the Bureau of American Ethnology, covering 1913 to 1914 and published in 1921.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which earlier book does Hodge's note reach back and connect to?",
            options: [
              "The 1897 monograph",
              "Kwakiutl Tales of 1910, whose preface describes Boas's control material",
              "The Boas Anniversary Volume of 1906, in which Hunt published under his own name",
              "The Religion of the Kwakiutl Indians, which had not yet been published",
            ],
            correctIndex: 0,
            explanation:
              "The note says Hunt also collaborated in a similar way on the 1897 book, which tells a later reader that the 1897 credit was of the same kind.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which authorship criterion does the 1921 volume satisfy for Hunt while withholding the author line?",
            options: [
              "Accountability",
              "Drafting, meaning the criterion that an author must write part of the manuscript",
              "Approval, meaning the criterion that an author must approve the final version",
              "Conception, meaning the criterion that an author must have designed the study",
            ],
            correctIndex: 0,
            explanation:
              "Accountability is the fourth criterion in the list taught in Who Gets Named, lesson 13. Two documents in the volume make Hunt answerable for the contents.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which course teaches the four authorship criteria this lesson uses?",
            options: [
              "Who Gets Named",
              "Written by Himself, which teaches the credit ladder used in lessons 1 and 2",
              "Archives and Finding Aids, which teaches provenance and original order",
              "Hoodoo Complete, which teaches how a paid collector's corpus should be read",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 13, Who counts as an author, and who gets thanked, sets out the criteria and the accountability rule.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which body's authorship criteria does the lesson name?",
            options: [
              "The ICMJE's",
              "The Bureau of American Ethnology's, as printed in its annual reports",
              "The American Philosophical Society's, as applied to its manuscript collections",
              "Columbia University's, as applied to doctoral dissertations in anthropology",
            ],
            correctIndex: 0,
            explanation:
              "The International Committee of Medical Journal Editors. Its fourth criterion is that an author agrees to be accountable for the work.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "In the 1921 arrangement, what runs one way while credit runs the other?",
            options: [
              "Blame",
              "Royalties, since the Bureau paid Hunt a share of the volume's sales revenue",
              "Copyright, which the note transfers from the Bureau to Hunt personally",
              "Translation rights, which the preface reserves for the author alone",
            ],
            correctIndex: 0,
            explanation:
              "A reader who found an error in 1925 was told whose error it was. A reader who wanted to cite the book was told whose book it was.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What does the course say about Boas's motive for the 1921 arrangement?",
            options: [
              "It states none",
              "That he wished to protect Hunt from criticism by scholars in the field",
              "That the Bureau required a single author line for all its annual report papers",
              "That Hunt had asked in writing to be kept off the title page",
            ],
            correctIndex: 0,
            explanation:
              "Nothing fetched gives a reason, from Boas or from the Bureau. The arrangement itself is unusual enough to teach without a theory attached.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What makes the 1921 arrangement unusual rather than ordinary neglect?",
            options: [
              "Responsibility and credit are split",
              "The volume is the only one of the six in which Hunt's name appears at all",
              "The note was printed after the volume had already been distributed to libraries",
              "The Bureau printed two contradictory title pages in the same annual report",
            ],
            correctIndex: 0,
            explanation:
              "A contributor was formally made answerable and formally not made an author, in the same book, by the people who published it. That is a decision, not an oversight.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Why does the lesson quote the Bureau's phrase describing Hunt rather than paraphrase it?",
            options: [
              "It is the document's own wording",
              "Because the phrase is the most flattering description of Hunt in any of the books",
              "Because paraphrasing a printed government document is not permitted by copyright",
              "Because the phrase is the one the U'mista Cultural Society asked be used",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes what the 1921 document says and says whose wording it is. Softening it would make the record look gentler than it was.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Where would a reader in 1925 look to find out whose error an error in the book was?",
            options: [
              "The Bureau's note",
              "The title page, which names the person answerable for everything in the volume",
              "The index, which lists each contributor beside the pages they supplied",
              "The Smithsonian's annual accounts, which recorded who was paid for the work",
            ],
            correctIndex: 0,
            explanation:
              "The note assigns the accuracy, the authenticity and the character of the contents to Hunt. The title page sends the same reader somewhere else for the credit.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Where would that same 1925 reader look in order to cite the book?",
            options: [
              "The title page",
              "The Bureau's note, since it names the person responsible for the contents",
              "The preface, in which Boas describes how the material was gathered",
              "The list of illustrations, which carries the fullest statement of authorship",
            ],
            correctIndex: 0,
            explanation:
              "Every convention of citation copies the author line. That is the asymmetry: blame is assigned in the note, credit is assigned on the page.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Why is the correction in section 5 aimed at the 1897 book rather than the 1921 one?",
            options: [
              "Hodge's note links the two",
              "Because the 1921 volume was withdrawn from circulation shortly after publication",
              "Because Hunt never read the 1921 volume, which reached him only after his death",
              "Because the 1897 book is the only one of the six still held by any library",
            ],
            correctIndex: 0,
            explanation:
              "The note says Hunt collaborated in a similar way on the 1897 book, so the two volumes carry the same kind of credit. Hunt's own corrections target the earlier one.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Roughly how long is the Bureau's 1921 note?",
            options: [
              "Half a page",
              "Forty pages, making it the longest piece of front matter in the annual report",
              "A single sentence, printed at the foot of the title page itself",
              "Three chapters, since the note doubles as the volume's introduction",
            ],
            correctIndex: 0,
            explanation:
              "It is short, and it is the clearest single document in the course. Length and importance are not the same thing in a credit record.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "How many documents inside the 1921 volume make Hunt answerable for its contents?",
            options: [
              "Two",
              "One, the Bureau's note, which Boas's preface then contradicts",
              "None, since responsibility is assigned only on the title page",
              "Five, one in each chapter of the paper as it was printed",
            ],
            correctIndex: 0,
            explanation:
              "Hodge's note and Boas's preface, written by two different men and printed in the same volume.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What question does this lesson teach you to ask of any record?",
            options: [
              "Who is named when something goes wrong",
              "Which of the named contributors was paid the most for their work",
              "How many people in total were involved in producing the document",
              "Whether the document was printed by a government or a commercial press",
            ],
            correctIndex: 0,
            explanation:
              "Then ask who is named when it goes right. When the two answers are different people, you have found an arrangement worth reading closely.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What does the course call the finding in this lesson?",
            options: [
              "The arrangement itself",
              "Boas's private reason for keeping Hunt off the author line of the volume",
              "The Bureau's decision to publish the paper twenty-four years after the fieldwork",
              "Hunt's refusal to sign the note that Hodge drafted on his behalf",
            ],
            correctIndex: 0,
            explanation:
              "Responsibility assigned to one man and credit to another, in the same volume. The documents show the arrangement and carry no motive.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which two 1897 pages disagree about who made the book?",
            options: [
              "The offprint title page and the inner one",
              "The title page and the list of illustrations bound in front of it",
              "The preface and the table of contents, which name different collaborators",
              "The cover of the museum report and the spine of the bound volume",
            ],
            correctIndex: 0,
            explanation:
              "One names Boas alone. The other adds that the work is based on personal observations and on notes made by Mr. George Hunt.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does the course say the six books make, taken together?",
            options: [
              "A pattern with describable rules",
              "A single consistent credit repeated in identical words six times",
              "A set of unrelated decisions made by six different publishers",
              "A record too fragmentary to support any conclusion at all",
            ],
            correctIndex: 0,
            explanation:
              "One missing name is an oversight. The same man in four positions over thirty-three years is a system, and a system can be described.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does the 1921 note say about Hunt's part in the 1897 book?",
            options: [
              "That he collaborated in a similar way",
              "That he had no involvement in it, contrary to what its preface claims",
              "That he was named as its co-author on the offprint title page",
              "That he corrected it in more than six hundred pages of emendations",
            ],
            correctIndex: 0,
            explanation:
              "Hodge's note reaches back twenty-four years and tells a later reader that the 1897 credit was of the same kind as the 1921 one.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Who he was, and the method
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fort-rupert-and-a-record-that-varies",
      title: "4 · Fort Rupert, and a record that spells him several ways",
      section: "Section 2 · Who he was, and the method",
      body: `Before the credit record can be read, one thing has to be said about it: the record cannot keep its own facts straight about the man it is crediting. That is not a side note. It is the same defect, showing up in a different place.

**The dates.** The Bard Graduate Center gives George Hunt's life as 1854 to 1933 (Goldsher & Glass, n.d.). The Canadian Encyclopedia gives 14 February 1854 at Fort Rupert, British Columbia, and a death in September 1933 (Mooney, 2008). The American Philosophical Society, which holds thousands of pages in his handwriting, gives 1856 to 1931 (Carpenter, 2018). Two of the three agree, so this course uses 1854 to 1933 and names the third rather than quietly dropping it. A course that hid the disagreement would be doing a small version of what the title pages did.

**His parents, and four words for one man.** Bard names his father as Robert Hunt, "a British fur trader", and his mother as "a Tongass Tlingit noblewoman from Southeast Alaska" (Goldsher & Glass, n.d.). Boas's own 1930 preface calls Hunt "the son of a Tlingit mother and of a Scotch father" (Boas, 1930). The American Philosophical Society writes Scottish. A 2019 exhibition review writes English. Four sources, four words, one man. This course writes British and says where it got the word.

**One summary that is wrong on its face.** Hunt is sometimes described as Tlingit-born. He was not. His mother was Tlingit, his father was British, and he was born at Fort Rupert in Kwakwaka'wakw territory, where Bard says he spent most of his life and was incorporated into the community through marriages to two Kwakwaka'wakw women (Goldsher & Glass, n.d.). Getting that wrong is easy, because the short forms of a life circulate faster than the long ones.

**The names this course does not print, and why.** Bard gives Hunt a Kwak'wala name, and the works Bard itself cites spell it at least three different ways. His mother's name appears in two forms across two sources, with her English surname spelled two ways as well. This course prints none of the Kwak'wala forms. The reason is short: no source read for this course settles the spelling, and the family has not been asked which form it uses. The omission is a decision, and it is also the finding. A record that cannot spell a man's name the same way twice is a record kept for the convenience of the people keeping it. The same is true one level up: the American Philosophical Society writes Kwak'wala, Columbia writes it with a different apostrophe character, and Bard writes it with a mark over the k.

**A working life longer than the books.** Bard's account: Hunt interpreted for Israel Powell in 1879, worked for Johan Adrian Jacobsen in 1881 and 1882, and met Boas in 1888. "From the time he began assisting Boas in 1889 until his death in 1933, Hunt compiled and edited thousands of pages of notes, translations, and annotations." He also assisted Edward S. Curtis between 1911 and 1914, including on the 1914 film *In the Land of the Head Hunters* (Goldsher & Glass, n.d.).

**Why a biography belongs in a credit course.** The words the record uses for him, note-maker, data collector, informant, all describe a role in somebody else's project. The biography shows something different: a man employed by several different outsiders over forty-four years, writing in a language none of them wrote, inside the community he belonged to. The role words are not false. They are small, and the gap between the role word and the working life is exactly the space a credit record can hide things in.

:::reveal Which dates does this course use for George Hunt, and which source disagrees? ||| 1854 to 1933, from the Bard Graduate Center and the Canadian Encyclopedia. The American Philosophical Society gives 1856 to 1931, and the course names that disagreement rather than hiding it.

:::reveal Why does this course print no Kwak'wala personal names? ||| Because the published sources spell them several different ways, none of the sources read here settles the spelling, and the family has not been asked which form it uses. The omission is a stated decision, not an oversight.

## Vocabulary
- **Kwagu'ł**: the Kwakwaka'wakw community at Fort Rupert, as the American Philosophical Society spells it.
- **Interpreter**: the role Hunt held for Israel Powell in 1879, before any of the books in this course were written.
- **Variant spelling**: two or more published forms of the same name. This record carries variants for Hunt, for his mother, and for the language itself.
- **Role word**: a term such as informant or collector that describes a person's place in someone else's project rather than the work they did.

## Sources
Boas, F. (1930). *The religion of the Kwakiutl Indians: Part I. Texts*. Columbia University Press. Internet Archive. https://archive.org/details/religionofkwakiu01boas
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/
Mooney, K. (2008). *George Hunt*. The Canadian Encyclopedia. (Edited 2025)`,
    },
    {
      slug: "the-necessary-control-material",
      title: "5 · Boas's own account of the method",
      section: "Section 2 · Who he was, and the method",
      body: `The best description of how the work was done is in the prefaces of the books that credit Hunt least. That is worth sitting with. The front matter that keeps him off the title page is also where the method is explained, in the author's own words.

**1893: learning to write the language.** Boas's 1930 preface says: "During the Exposition I began to teach Mr. George Hunt, ... to write Kwakiutl, his mother tongue" (Boas, 1930). Bard dates that to the 1893 world's fair in Chicago and says Boas trained Hunt there to transcribe Kwak'wala (Goldsher & Glass, n.d.). So the writing system came from Boas and the language came from Hunt, and the sentence that records it is in a book whose title page names only Boas.

**1893 to 1901: practice, then a stay in New York.** Boas's 1921 preface: "After working with me in 1893, 1897, and 1900, during which time he gained much practice in writing the Kwakiutl language, Mr. Hunt spent several weeks in New York in 1901" (Boas, 1921).

**Then, for decades, the post.** The 1930 preface again: "The records made by Mr. Hunt were transmitted to me from time to time" (Boas, 1930). Written at Fort Rupert, read in New York.

**1910: the sentence that gives the game away.** The preface to *Kwakiutl Tales* says that two volumes of the Jesup expedition's publications contain "a considerable number of myths written down by Mr. George Hunt", and then goes further: "all the texts contained in the Publications of the Jesup Expedition have been written down by the same individual". It then explains why Boas collected material himself. His own collecting, taken "from the lips of natives", was "the necessary control material for checking the reliability of the language and form of the tales recorded by Mr. Hunt" (Boas, 1910).

**Read those two sentences side by side.** One says that everything in a whole expedition's published texts was written down by one man. The other says that the editor's own fieldwork existed in order to check that man's work. They sit in the same preface, in a book whose title page names Boas alone.

**What "control material" tells you about rank, precisely.** In an experiment, the control is what you check the result against. The phrase does two jobs at once. It credits Hunt with producing the primary material, and it positions that material as the thing under test rather than the thing being relied on. Whether that is generous is a judgment. That it is precise is not. It tells a reader more about who did what than either the 1910 title page or the 1897 one.

**What the method actually was.** Put the four statements in order and a system appears: teach the man a writing system in 1893, work beside him in 1897 and 1900, bring him to New York for several weeks in 1901, then receive written records by post for another thirty years. That is a training-and-correspondence system, not a series of interviews, and it is not a scholar writing up his own observations either. What that system produced, thousands of pages of it, is what section 3 goes to look at.

**A caution about reading prefaces.** A preface is written by the person whose name is on the cover, about a relationship the other party did not get to describe in print. It is evidence, and it is one-sided evidence. Section 5 is the only place in this course where the other party speaks about the work in his own words, and it took him until 1920 to put it in a letter.

:::reveal What does the 1910 preface of Kwakiutl Tales call the material Boas collected himself? ||| The necessary control material for checking the reliability of the language and form of the tales recorded by Mr. Hunt.

:::reveal In what order do Boas's prefaces describe the method? ||| Teaching Hunt to write the language during the 1893 exposition, working with him in 1893, 1897 and 1900, several weeks in New York in 1901, and then records transmitted by post from time to time for decades.

## Vocabulary
- **Control material**: in the 1910 preface, the material Boas collected himself in order to check the reliability of what Hunt had recorded.
- **Transcribe**: to write down speech in a writing system. Boas supplied the system in 1893; the language was Hunt's own.
- **Jesup North Pacific Expedition**: the research programme whose published volumes the 1910 preface says were all written down by one individual.
- **One-sided evidence**: a source written by one party about a relationship the other party did not describe in print. Every preface in this course is one.

## Sources
Boas, F. (1910). *Kwakiutl tales* (Columbia University Contributions to Anthropology, Vol. 2). Internet Archive. https://archive.org/details/in.ernet.dli.2015.280762
Boas, F. (1921). *Ethnology of the Kwakiutl, based on data collected by George Hunt* (Thirty-fifth Annual Report of the Bureau of American Ethnology). Government Printing Office. Internet Archive. https://archive.org/details/ethnologyofkwaki00boas
Boas, F. (1930). *The religion of the Kwakiutl Indians: Part I. Texts*. Columbia University Press. Internet Archive. https://archive.org/details/religionofkwakiu01boas
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Who he was, and the method",
      section: "Section 2 · Who he was, and the method",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which dates for George Hunt does this course use?",
            options: [
              "1854 to 1933",
              "1856 to 1931, the figure the American Philosophical Society gives on its own pages",
              "1884 onward, the dates attached to George M. Hunt in one catalogue record",
              "1858 to 1942, the dates printed beside Boas in library creator fields",
            ],
            correctIndex: 0,
            explanation:
              "Bard and the Canadian Encyclopedia agree on 1854 to 1933. The APS gives 1856 to 1931, and the course names that disagreement rather than dropping it.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Which source gives Hunt's dates as 1856 to 1931?",
            options: [
              "The American Philosophical Society",
              "The Canadian Encyclopedia, in its entry written by Kathleen Mooney",
              "The Bard Graduate Center, on its page about Hunt's life and work",
              "The Bureau of American Ethnology, in its 1921 note on the accompanying paper",
            ],
            correctIndex: 0,
            explanation:
              "The APS gives those dates even though it holds thousands of pages in his handwriting, which is part of why the course names the disagreement openly.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "What birth date does the Canadian Encyclopedia give?",
            options: [
              "14 February 1854",
              "3 June 1856, at Alert Bay on the northern coast of Vancouver Island",
              "1 May 1858, the same year Franz Boas was born in Germany",
              "September 1884, which would make him thirty years younger than Bard says",
            ],
            correctIndex: 0,
            explanation:
              "It gives 14 February 1854 at Fort Rupert, British Columbia, and a death in September 1933.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "How does Bard describe Hunt's father?",
            options: [
              "A British fur trader",
              "A Hudson's Bay Company officer who arrived at Fort Rupert in the 1860s",
              "An American missionary posted to the northern coast of Vancouver Island",
              "A Tongass Tlingit trader from Southeast Alaska who settled at Fort Rupert",
            ],
            correctIndex: 0,
            explanation:
              "Bard names Robert Hunt, a British fur trader. Boas's 1930 preface calls him Scotch, the APS says Scottish, and a 2019 review says English.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "How many different words do this course's sources use for the nationality of Hunt's father?",
            options: [
              "Four",
              "One, since Bard, Boas, the APS and the 2019 review all print the same word",
              "None, because no source this course read mentions his father at all",
              "Two, and the course picks the one that appears in the older document",
            ],
            correctIndex: 0,
            explanation:
              "British, Scotch, Scottish and English. The course writes British, cites Bard for it, and says where the other three come from.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "How does Bard describe Hunt's mother?",
            options: [
              "A Tongass Tlingit noblewoman",
              "A Kwagu'ł woman of Fort Rupert whose family held hereditary rights there",
              "A 'Namgis woman from Alert Bay who later moved to Southeast Alaska",
              "A British settler who arrived on the coast with the fur trade in the 1840s",
            ],
            correctIndex: 0,
            explanation:
              "A Tongass Tlingit noblewoman from Southeast Alaska. Boas's 1930 preface calls Hunt the son of a Tlingit mother and a Scotch father.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Why is the description Tlingit-born wrong for George Hunt?",
            options: [
              "He was born at Fort Rupert",
              "Because his mother was Kwagu'ł rather than Tlingit, which reverses the two sides",
              "Because he was born in Southeast Alaska but raised in British Columbia",
              "Because no source this course read records where he was born at all",
            ],
            correctIndex: 0,
            explanation:
              "His mother was Tlingit and his father was British, and he was born at Fort Rupert in Kwakwaka'wakw territory. The short form of a life travels faster than the long one.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "How does Bard say Hunt was incorporated into the Fort Rupert community?",
            options: [
              "Through two marriages",
              "By adoption into a house after his father's death in the 1870s",
              "By appointment as the community's interpreter to the provincial government",
              "By purchasing rights from the community with money earned from Boas",
            ],
            correctIndex: 0,
            explanation:
              "Bard says he spent most of his life at Fort Rupert and was incorporated into the community through marriages to two Kwakwaka'wakw women.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Why does this course print no Kwak'wala personal names?",
            options: [
              "The spellings are unsettled",
              "Because the names are copyrighted by the U'mista Cultural Society and cannot be reprinted",
              "Because the course is private and private courses may not print names of any kind",
              "Because no published source this course read contains a Kwak'wala name anywhere",
            ],
            correctIndex: 0,
            explanation:
              "The published sources give Hunt's name at least three ways and his mother's two ways, nothing read here settles them, and the family has not been asked which form it uses.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "What does the course say a record that cannot spell a man's name twice the same way tells you?",
            options: [
              "It was kept for the keeper's convenience",
              "That the man himself used several names during different periods of his life",
              "That the record is a forgery, since a genuine record would be internally consistent",
              "That the spelling in the oldest surviving document is the correct one",
            ],
            correctIndex: 0,
            explanation:
              "The same defect the title pages show, appearing somewhere else. The variants run all the way up to the name of the language itself.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "How do the course's three main institutions differ over the name of the language?",
            options: [
              "In apostrophes and marks",
              "In the number of syllables, with one institution using a shortened two-syllable form",
              "In whether they use the name at all, since one of them refuses to print it",
              "In the alphabet used, with one institution printing it only in phonetic symbols",
            ],
            correctIndex: 0,
            explanation:
              "The APS writes Kwak'wala, Columbia uses a different apostrophe character, and Bard puts a mark over the k. The course follows the APS.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Whom did Hunt interpret for in 1879?",
            options: [
              "Israel Powell",
              "Johan Adrian Jacobsen, the collector he worked for in the early 1880s",
              "Franz Boas, whom he did not meet until nearly a decade later",
              "Edward S. Curtis, whose film work he assisted more than thirty years later",
            ],
            correctIndex: 0,
            explanation:
              "Bard's chronology: interpreter for Israel Powell in 1879, work for Jacobsen in 1881 and 1882, and a first meeting with Boas in 1888.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "In which year does Bard say Hunt met Franz Boas?",
            options: [
              "1888",
              "1893, the year of the Chicago exposition at which Boas taught him to write",
              "1879, the year he interpreted for Israel Powell on the coast",
              "1901, the year he spent several weeks working in New York",
            ],
            correctIndex: 0,
            explanation:
              "They met in 1888, and Bard dates the start of Hunt's work for Boas to 1889.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "From which year does Bard date the beginning of Hunt's work for Boas?",
            options: [
              "1889",
              "1897, the year the monograph naming his notes was published in Washington",
              "1902, the year the first series of Kwakiutl Texts began to appear",
              "1913, the year Boas began giving manuscripts to Columbia University",
            ],
            correctIndex: 0,
            explanation:
              "From 1889 until his death in 1933 he compiled and edited thousands of pages of notes, translations and annotations, which is forty-four years of work.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Whose film work did Hunt assist between 1911 and 1914?",
            options: [
              "Edward S. Curtis",
              "Johan Adrian Jacobsen, who had employed him three decades earlier",
              "Franz Boas, who filmed at Fort Rupert during those same years",
              "The Bureau of American Ethnology, which sent a film unit to the coast",
            ],
            correctIndex: 0,
            explanation:
              "Bard records his assistance to Curtis from 1911 to 1914, including the 1914 film In the Land of the Head Hunters.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "What does the course say the words informant and collector describe?",
            options: [
              "A role in someone else's project",
              "A legal status conferred by the Bureau of American Ethnology on paid fieldworkers",
              "A rank on the title-page ladder that sits just below co-author",
              "The two categories a Canadian court used to classify Hunt in 1900",
            ],
            correctIndex: 0,
            explanation:
              "The role words are not false. They are small, and the gap between a role word and a forty-four-year working life is the space a credit record can hide things in.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Why does the course name the American Philosophical Society's disagreement about Hunt's dates?",
            options: [
              "Hiding it would repeat the defect",
              "Because the APS figure is the correct one and the other two are typographical errors",
              "Because the APS is the only institution that holds any of Hunt's manuscripts",
              "Because a course is required to list every source that mentions its subject",
            ],
            correctIndex: 0,
            explanation:
              "A course that smoothed over a disagreement would be doing a small version of what the title pages did. Saying two of three agree is more useful than pretending three do.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Which word does this course use for Hunt's father's nationality?",
            options: [
              "British",
              "Scotch, because that is the word Boas himself used in his 1930 preface",
              "English, because that is the word the most recent of the sources uses",
              "None, because four sources disagree and the course omits the fact entirely",
            ],
            correctIndex: 0,
            explanation:
              "The course writes British and cites Bard for it, then names the other three words so a reader can see the disagreement.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Roughly how long was Hunt's working life across all his employers?",
            options: [
              "More than forty years",
              "About five years, from his first meeting with Boas to the 1893 exposition",
              "About fifteen years, ending when Kwakiutl Tales was published in 1910",
              "Less than a decade, since his work for Boas was seasonal and intermittent",
            ],
            correctIndex: 0,
            explanation:
              "From interpreting in 1879 to his death in 1933, including forty-four years of writing for Boas from 1889.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Which community does the American Philosophical Society's spelling Kwagu'ł name?",
            options: [
              "The one at Fort Rupert",
              "The whole Kwakwaka'wakw nation, of which Fort Rupert is one village",
              "The 'Namgis community at Alert Bay, where the U'mista Cultural Centre stands",
              "The Tongass Tlingit community in Southeast Alaska that Hunt's mother came from",
            ],
            correctIndex: 0,
            explanation:
              "Kwagu'ł is the Fort Rupert community. Kwakwaka'wakw is the wider name, and 'Namgis is a different community again.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Which of Boas's prefaces says he began teaching Hunt to write?",
            options: [
              "The 1930 one",
              "The 1897 one, printed in the Report of the U.S. National Museum for 1895",
              "The 1921 one, printed in the Bureau of American Ethnology's annual report",
              "The 1910 one, which introduces the volume of Kwakiutl Tales",
            ],
            correctIndex: 0,
            explanation:
              "The Religion of the Kwakiutl Indians, 1930: During the Exposition I began to teach Mr. George Hunt to write Kwakiutl, his mother tongue.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "To which event does Bard date Boas's training of Hunt to transcribe the language?",
            options: [
              "The 1893 Chicago fair",
              "The Jesup North Pacific Expedition's first field season on the coast",
              "Hunt's several weeks in New York during 1901",
              "The publication of the 1897 monograph in Washington",
            ],
            correctIndex: 0,
            explanation:
              "The 1893 world's fair in Chicago. Boas's own preface calls it the Exposition without naming a year, and Bard supplies the year.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Who supplied the writing system, and whose was the language?",
            options: [
              "Boas the system, Hunt the language",
              "Hunt the system, which he devised at Fort Rupert before meeting Boas at all",
              "The Bureau of American Ethnology supplied both, as a standard for its reports",
              "Neither, since the pages were written in English and translated afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Boas taught the writing; the 1930 preface calls the language Hunt's mother tongue. The sentence recording it sits in a book that names only Boas on its title page.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "In which years does the 1921 preface say Hunt worked with Boas before 1901?",
            options: [
              "1893, 1897 and 1900",
              "1889, 1890 and 1891, the first three years of their working relationship",
              "1902, 1905 and 1906, the years the two series of Kwakiutl Texts appeared",
              "1911, 1912 and 1913, the years Hunt also worked for Edward S. Curtis",
            ],
            correctIndex: 0,
            explanation:
              "After working with me in 1893, 1897, and 1900, during which time he gained much practice in writing the Kwakiutl language.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "How long does the 1921 preface say Hunt spent in New York in 1901?",
            options: [
              "Several weeks",
              "Three years, during which he worked in the American Museum of Natural History",
              "One day, to sign the contract for the first series of Kwakiutl Texts",
              "The whole winter, returning to Fort Rupert only in the spring of 1902",
            ],
            correctIndex: 0,
            explanation:
              "Several weeks in 1901, after which the working relationship continued by post for another three decades.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "How does the 1930 preface say Hunt's records reached Boas?",
            options: [
              "Transmitted from time to time",
              "Delivered in person on Hunt's annual visits to Columbia University in New York",
              "Collected by Bureau of American Ethnology staff during their field seasons",
              "Deposited directly with the American Philosophical Society in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "The records made by Mr. Hunt were transmitted to me from time to time. Written at Fort Rupert, read in New York.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does the 1910 preface say about who wrote down the texts in the Jesup expedition's publications?",
            options: [
              "All by the same individual",
              "That they were written down by several different collaborators working in parallel",
              "That Boas wrote them all himself directly from the speech of the people he met",
              "That the question of who wrote them cannot now be established from the records",
            ],
            correctIndex: 0,
            explanation:
              "All the texts contained in the Publications of the Jesup Expedition have been written down by the same individual, and the preface has just named that individual as Hunt.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does the 1910 preface call the material Boas collected himself?",
            options: [
              "The necessary control material",
              "The definitive edition of the tales, against which Hunt's pages are only drafts",
              "Supplementary material, gathered to fill gaps Hunt had not had time to cover",
              "The Jesup corpus, meaning the whole body of texts the expedition published",
            ],
            correctIndex: 0,
            explanation:
              "The necessary control material for checking the reliability of the language and form of the tales recorded by Mr. Hunt.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What are the two jobs the phrase control material does at once?",
            options: [
              "It credits and it positions",
              "It funds the fieldwork and it records the expenses, in a single accounting term",
              "It names a coauthor and it dates the collection, both in one printed line",
              "It conceals Hunt's role and it exaggerates the size of the collection",
            ],
            correctIndex: 0,
            explanation:
              "It credits Hunt with producing the primary material, and it positions that material as the thing being tested rather than the thing relied on.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What is a control, in the sense the 1910 preface borrows?",
            options: [
              "What you check a result against",
              "The person who supervises fieldwork on behalf of a funding institution",
              "A written permission allowing an expedition to publish what it collected",
              "The final proof of a book, checked against the manuscript before printing",
            ],
            correctIndex: 0,
            explanation:
              "In an experiment the control is the comparison. Applied to Hunt's pages, it makes them the thing under test.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Whose name is on the title page of the book containing the control-material sentence?",
            options: [
              "Boas alone",
              "Boas and Hunt, printed together as joint authors of the volume",
              "Hunt alone, with Boas credited as editor in smaller type below",
              "The Jesup North Pacific Expedition, as the volume's corporate author",
            ],
            correctIndex: 0,
            explanation:
              "Kwakiutl Tales, 1910, names Boas alone. Its preface says every text in the expedition's publications was written down by one other man.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What kind of system do Boas's four statements about the method describe when put in order?",
            options: [
              "Training and correspondence",
              "A series of interviews conducted at Fort Rupert over four field seasons",
              "A salaried museum post with fixed hours and an annual written report",
              "A publishing contract under which Hunt was paid for each completed volume",
            ],
            correctIndex: 0,
            explanation:
              "Teach the writing in 1893, work together in 1897 and 1900, several weeks in New York in 1901, then records by post for thirty years.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Why does the lesson call a preface one-sided evidence?",
            options: [
              "Only one party wrote it",
              "Because prefaces are written after publication and so cannot describe the work",
              "Because a preface is unsigned and therefore cannot be attributed to anyone",
              "Because publishers edit prefaces more heavily than they edit the main text",
            ],
            correctIndex: 0,
            explanation:
              "It is written by the person whose name is on the cover, about a relationship the other party did not get to describe in print. It is evidence, and it is one-sided.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Where in this course does the other party finally describe the work in his own words?",
            options: [
              "Section 5",
              "Section 1, in the preface to the 1897 monograph printed in Washington",
              "Section 3, in the finding aid Columbia created for the manuscripts in 2023",
              "Nowhere, since no writing by Hunt about the work has ever been found",
            ],
            correctIndex: 0,
            explanation:
              "In his 1920 letter to Boas about the mistakes he wanted corrected. It took until then for the other party to be quoted on the work in print.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does the lesson say is striking about where the method is explained?",
            options: [
              "In the books that credit him least",
              "In the letters Hunt sent to Boas rather than in anything Boas published",
              "In the catalogue records created by libraries long after both men had died",
              "In the 1921 note by Hodge rather than in any preface written by Boas",
            ],
            correctIndex: 0,
            explanation:
              "The 1910 and 1930 title pages name Boas alone, and their prefaces carry the fullest descriptions of what Hunt actually did.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Which two volumes of the Jesup publications does the 1910 preface single out?",
            options: [
              "Volumes three and ten",
              "Volumes one and two, the first the expedition published after its 1897 season",
              "Volumes fourteen and fifteen, which contain the two series of Kwakiutl Texts",
              "Volumes thirty-four and thirty-five, the Bureau's annual reports for 1913 and 1914",
            ],
            correctIndex: 0,
            explanation:
              "The preface says those two contain a considerable number of myths written down by Mr. George Hunt, then widens the claim to all the expedition's texts.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What phrase does the 1910 preface use for how Boas gathered his own material?",
            options: [
              "From the lips of natives",
              "By correspondence with community leaders at Fort Rupert and Alert Bay",
              "From the manuscripts already deposited at the American Museum in New York",
              "Through interpreters supplied by the provincial government of British Columbia",
            ],
            correctIndex: 0,
            explanation:
              "That is the preface's own wording for the collecting it calls the necessary control material.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does the 1930 preface call the language Boas taught Hunt to write?",
            options: [
              "His mother tongue",
              "A trade language he had learned as an interpreter on the coast in the 1870s",
              "A second language, since the preface says his first language was English",
              "The language of his mother's Tongass Tlingit family in Southeast Alaska",
            ],
            correctIndex: 0,
            explanation:
              "To write Kwakiutl, his mother tongue. The writing system came from Boas and the language did not.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does the lesson say the method was NOT?",
            options: [
              "A series of interviews",
              "A correspondence, since almost all the work was done face to face in New York",
              "A paid arrangement, since no money changed hands between the two men",
              "A long relationship, since it lasted only from 1893 until 1901",
            ],
            correctIndex: 0,
            explanation:
              "It was training and then correspondence, and it was not a scholar writing up his own observations either. What it produced is what section 3 examines.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Which section of this course goes to look at what the method produced?",
            options: [
              "Section 3",
              "Section 4, which asks whose knowledge the manuscripts actually carry",
              "Section 1, which reads the six title pages in the order they were printed",
              "Section 5, which reads the corrections made to the record after 1920",
            ],
            correctIndex: 0,
            explanation:
              "Section 3 follows the pages into Columbia, the American Philosophical Society, and four catalogue records.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What is striking about the credit on the book containing the fullest account of the method?",
            options: [
              "It names Hunt nowhere on the title page",
              "It names Hunt twice on the title page, once above and once below the author line",
              "It names Hunt as sole author, with Boas credited only as the volume's editor",
              "It carries no title page at all, which is why the preface has to do the work",
            ],
            correctIndex: 0,
            explanation:
              "Kwakiutl Tales in 1910 and The Religion of the Kwakiutl Indians in 1930 both name Boas alone, and both prefaces describe Hunt's work in detail.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "How many years passed between Boas teaching Hunt to write and Hunt's death?",
            options: [
              "About forty",
              "About ten, since the writing work ended when Kwakiutl Tales appeared in 1910",
              "About sixty, since the teaching took place in the early 1870s",
              "About five, since Hunt stopped writing after his weeks in New York in 1901",
            ],
            correctIndex: 0,
            explanation:
              "From the 1893 exposition to 1933. The records were transmitted from time to time for most of those years.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What did Boas's own collecting exist in order to do, according to the 1910 preface?",
            options: [
              "Check Hunt's reliability",
              "Replace Hunt's pages, which the preface says were unusable as printed",
              "Train the next generation of fieldworkers in the writing system he had devised",
              "Supply the illustrations for the volumes the expedition was preparing",
            ],
            correctIndex: 0,
            explanation:
              "For checking the reliability of the language and form of the tales recorded by Mr. Hunt. That is what the word control is doing in the sentence.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "Why does the course treat Boas's prefaces as evidence at all, given that they are one-sided?",
            options: [
              "They are contemporary and specific",
              "Because a preface is the only kind of document a court will accept as evidence",
              "Because Boas wrote them after Hunt's death, when there was no reason to flatter",
              "Because the Bureau of American Ethnology verified each one before printing it",
            ],
            correctIndex: 0,
            explanation:
              "They were written at the time, by a participant, and they name dates, places and tasks. Being one-sided is a reason to read them carefully, not to discard them.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What did Hunt do between receiving the training and sending the records?",
            options: [
              "He practised over three field seasons",
              "He studied for a degree in anthropology at Columbia University in New York",
              "He worked exclusively for Edward S. Curtis for more than a decade",
              "He stopped writing entirely until the Bureau commissioned the 1921 volume",
            ],
            correctIndex: 0,
            explanation:
              "The 1921 preface names 1893, 1897 and 1900 as the years of working together, during which he gained much practice in writing the language.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does this course do when two sources disagree about a fact?",
            options: [
              "Names both and says which it follows",
              "Chooses the older source, on the grounds that it is closer to the events",
              "Leaves the fact out until a third source can settle the question",
              "Prints whichever version the holding institution prefers",
            ],
            correctIndex: 0,
            explanation:
              "Hunt's dates, his father's nationality and Columbia's page counts are all handled this way. Smoothing a disagreement would repeat, in small, the defect the course is about.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Who did Hunt work for in 1881 and 1882, before meeting Boas?",
            options: [
              "Johan Adrian Jacobsen",
              "Edward S. Curtis, whose film work he assisted three decades later",
              "The Bureau of American Ethnology, which later published his material",
              "Israel Powell, for whom he had interpreted two years earlier",
            ],
            correctIndex: 0,
            explanation:
              "Bard's chronology: Powell in 1879, Jacobsen in 1881 and 1882, Boas from 1888. Three employers before the books in this course existed.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The archive
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "filed-as-boass-gift",
      title: "6 · Filed as Boas's gift",
      section: "Section 3 · The archive",
      body: `Starting in 1913, Franz Boas gave Columbia University stacks of handwritten manuscripts. The university's Rare Book and Manuscript Library described what they actually are in a post of 4 April 2023, a guest piece by Amanda Althoff published by Kevin Schlottmann. The live page now serves a bot check, so this course read it on an Internet Archive capture of 19 January 2025.

**The sentence that matters.** The manuscripts "were not Boas' manuscripts at all. He edited and re-sorted them; he prepared them for publication ... but he did not write them." And then: "Instead, the pages bear the meticulous, clear handwriting of George Hunt" (Althoff, 2023). That is the holding institution, writing about its own founding gift, saying plainly that the donor did not write what he donated.

**How many pages, and a count that does not agree with itself.** The library's post says "nearly 8,000 handwritten pages" in "14 volumes", almost all of them bilingual. Columbia University Libraries' own list of noteworthy acquisitions, digitization and conservation for 2023 says "Thirty volumes (about 8,500 pages)", made "by George Hunt in Fort Rupert ... between 1898 and 1931, at the request of and in collaboration with Franz Boas", and "written by Hunt in Kwakʼwala with interlinear English translations" (Columbia University Libraries, n.d.). Two pages from one university, two counts, two volume figures. This course prints both with their sources instead of picking the rounder one.

**A catalogue record made for the first time in 2023.** The post says: "As part of the project, an electronic catalog record was created for these materials for the first time." Sit with the date. For about a century, the only finding path to thousands of pages of Hunt's handwriting at Columbia ran through the name of the man who gave them.

**Provenance, doing its job, and costing something anyway.** An archive files a collection under the person who gave it. That is not a slight. It is provenance, the principle *Archives and Finding Aids* teaches in its lesson on provenance and original order, and it is how an archivist keeps a collection honest: you can always say where a thing came from. But provenance answers the question "who gave this", and a catalogue also has to answer "who made this". Until 2023 the second question had no printed answer here, and a question with no printed answer is a question a searcher cannot ask.

**Original order, and a repair that is technically possible.** Columbia's writer records that Boas re-sorted the pages, and that Hunt's original order is "(re)traceable" (Althoff, 2023). That is a technical statement with a large consequence. The arrangement a later editor imposed can be described and, in part, undone, because evidence of the earlier arrangement survives in the pages themselves. An arrangement is an argument about what belongs with what, and this one can be read back.

**What a catalogue change repairs, and what it does not.** It does not alter the 1897 title page, which is printed and will stay printed. It alters what a search returns, which is where nearly everyone meets the record now. *Who Gets Named* teaches that a correction is an action with actors: somebody has to make it, inside a system, and it has to be the kind of change the system can carry. A catalogue record naming the person whose hand is on the page is exactly that kind of change.

:::reveal What does Columbia's 2023 post say about who wrote the manuscripts Boas gave the university? ||| That they were not Boas's manuscripts at all. He edited them, re-sorted them and prepared them for publication, but he did not write them, and the pages carry George Hunt's handwriting.

:::reveal What did Columbia create for these materials for the first time in 2023, and why does it matter? ||| An electronic catalogue record. Until then the only finding path to thousands of pages of Hunt's handwriting ran through the name of the man who gave them.

## Vocabulary
- **Provenance**: the record of where a collection came from and who owned it. It answers who gave this, which is not the same question as who made this.
- **Original order**: the arrangement a collection had before an archivist or editor rearranged it. Columbia's writer says Hunt's is traceable again.
- **Interlinear**: written between the lines. The English translations in these manuscripts sit under the Kwak'wala they translate.
- **Catalogue record**: the machine-readable description that makes a collection findable. Columbia made one for these manuscripts for the first time in 2023.

## Sources
Althoff, A. (2023, April 4). *Description and digitization of the George Hunt Kwak'wala ethnographic manuscripts* [Guest post; K. Schlottmann, Ed.]. Rare Book & Manuscript Library, Columbia University. Internet Archive capture, 19 January 2025.
Columbia University Libraries. (n.d.). *Noteworthy acquisitions, digitization, and conservation for 2023*.`,
    },
    {
      slug: "six-thousand-pages-in-philadelphia",
      title: "7 · Six thousand pages in Philadelphia",
      section: "Section 3 · The archive",
      body: `The second archive is the American Philosophical Society in Philadelphia, and it describes its holding in language no title page in this course comes close to. Brian Carpenter wrote about it for the Society's Center for Native American and Indigenous Research on 1 May 2018. The live page returned an access error when this course tried it, so it was read on an Internet Archive capture from 2024.

**The size.** Hunt sent Boas "over 6000 pages", and the APS calls them "one of the largest and most important bodies of work by an Indigenous person at the APS Library" (Carpenter, 2018). Read that sentence as a credit line, because that is what it is. It is not "the Kwakiutl section of the Boas papers". It is a ranking statement about one person's body of work, made by the institution that holds it.

**Where the pages live.** The post cites examples in the Society's ACLS Collection, Sections W1a.3 and W1a.11. A section number looks like housekeeping and is not. In an archive the shelf mark is the address a citation uses, so where a body of work sits inside somebody else's collection is itself part of the record of whose work it is.

**A thousand pages of letters, indexed.** The post also records that an index exists to Hunt's correspondence with Boas, which it describes as running to more than a thousand pages, and that a small selection of material was online as of 2018 (Carpenter, 2018). This course quotes almost none of that correspondence, because almost none of it has been read here. Section 5 uses one sentence from one 1920 letter, and it takes that sentence from a curator's published account rather than from the letter.

**Two archives, two accessions, one hand.** Columbia's figures and the APS's figure describe different material in different cities. Even at the lower numbers on both sides, the writing runs to many thousands of pages in a single handwriting. The scale is the finding. A man described on title pages as the supplier of notes and data produced a body of work that one of the oldest learned societies in the United States ranks among the largest it holds by an Indigenous person.

**The dates, again.** The APS gives Hunt's life as 1856 to 1931, where Bard and the Canadian Encyclopedia give 1854 to 1933 (lesson 4). The institution holding six thousand pages of his writing and the institution that curated the exhibition about him do not agree on the year he was born.

**And the rule the pages are held under.** The APS describes the manuscripts as governed by "Kwakwaka'wakw protocols concerning the ownership, hereditary traditions, and responsibilities surrounding different kinds of knowledge", and says its centre works with members of several Kwakwaka'wakw communities on those protocols (Carpenter, 2018). It also records that the potlatch ban in Canada lasted from 1885 to 1951. Section 5 takes up what the protocols mean for access. For now, note only this: the institution that ranks the collection so highly also says out loud that it is not the institution that decides what happens to it.

:::reveal How many pages does the APS say Hunt sent Boas, and how does it rank the collection? ||| Over 6000 pages, described as one of the largest and most important bodies of work by an Indigenous person at the APS Library.

:::reveal What does the APS say governs these manuscripts? ||| Kwakwaka'wakw protocols concerning the ownership, hereditary traditions and responsibilities surrounding different kinds of knowledge, worked out with members of several Kwakwaka'wakw communities.

## Vocabulary
- **Accession**: one arrival of material into an archive. Columbia's manuscripts and the Society's are separate accessions of the same person's writing.
- **Section number**: an archive's shelf address for material, such as the ACLS Collection sections the APS cites. It is what a citation points at.
- **CNAIR**: the American Philosophical Society's Center for Native American and Indigenous Research, which published the 2018 post and works on access protocols.
- **Protocol**: a community's own rule about who may hold, see or use a kind of knowledge. The APS names Kwakwaka'wakw protocols as governing this collection.

## Sources
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/
Mooney, K. (2008). *George Hunt*. The Canadian Encyclopedia. (Edited 2025)`,
    },
    {
      slug: "four-catalogue-records",
      title: "8 · Four catalogue records, three George Hunts",
      section: "Section 3 · The archive",
      body: `A catalogue record is a separate claim from a title page. It is made later, by a different institution, for a different purpose, which is finding rather than crediting. It can rank a person up, rank them down, or attach the book to somebody else entirely. Four records, all fetched on 19 September 2026, show all three happening to the same two men.

**One: the wrong man.** The Internet Archive item socialorganizati00boas is the 1897 book scanned from the Getty Research Institute's copy. Its creator field reads: "Boas, Franz, 1858-1942", "Hunt, George M. (George McMonies), 1884-", "United States National Museum" (Internet Archive, n.d.-b). The record does add a George Hunt to the 1897 book. It adds one born in 1884, thirty years after the George Hunt who wrote it. This is the one catalogue record that credits Hunt on that book, and it credits a different person.

**Two: the right man, flagged.** The item socialorganizat00huntgoog is the same 1897 book, scanned from Harvard's copy. Its creator field reads "Boas, Franz, 1858-1942" and "Hunt, George. [from old catalog]" (Internet Archive, n.d.-a). The right man this time, with a bracketed note that the data came from an older catalogue, which is a librarian's way of saying do not fully trust this line.

**Three: ranked higher than the book ranks him.** The item ethnologyofkwaki00boas is the 1921 volume, scanned from the Library of Congress copy. Its creator field lists both "Boas, Franz, 1858-1942" and "Hunt, George", and Hunt appears again under associated names (Internet Archive, n.d.-c). The printed title page says Hunt collected the data and Boas wrote the book. The catalogue calls them both creators. Here the record is more generous than the page.

**Four: the word author, one field too low.** The item kwakiutltextssec0000boas is a 1975 reprint of the 1906 second series of *Kwakiutl Texts*. Its creator is "Boas, Franz, 1858-1942" alone, and its associated names field reads "Hunt, George, author" (Internet Archive, n.d.-d). The word author is in the record. It is in the field that means connected to, not in the field that means made by.

**What the four add up to.** Same two men, a handful of books, four different answers about the second man. One of the four is not him.

**Why the wrong-man record is the most instructive of the four.** It is probably not malice, and it is not exactly carelessness. It is what happens when a name in a book has to be matched to a list of approved name forms, and the right match is missing or not found, so a near-enough one gets attached. Then it is copied, because copying is what catalogue data is for. *Who Gets Named* teaches the Henrietta Lacks case, in which a wrong name entered a record and travelled for decades. This is the same mechanism, running quietly in a library.

**The practical rule this gives you.** When you look up a book, you are almost always reading a catalogue record and not the book. If the credit matters, open the book. If you cannot open the book, name the record you are reading and say who made it, which is exactly what lesson 2 does with the *Kwakiutl Texts* title page. That is why the top rung of Hunt's ladder is still written here as an open question rather than as a fact.

:::reveal Which George Hunt does the Getty-sourced record of the 1897 book name? ||| George M. Hunt, born 1884, a different man born thirty years after the George Hunt who wrote the book.

:::reveal In which of the four records does the catalogue rank Hunt higher than the printed title page does? ||| In the Library of Congress scan of the 1921 Ethnology, where the title page says data collected by and the record lists him as a creator alongside Boas.

## Vocabulary
- **Creator field**: the catalogue field that names who made a work. It is what a search engine reads when it decides whose book this is.
- **Associated names**: a catalogue field for people connected to a work without being named as its creators. One record puts Hunt there with the word author.
- **Authority control**: matching a name in a book to a library's approved list of name forms. When the match fails, a near-enough name can get attached instead.
- **From old catalog**: a bracketed note meaning the data was carried over from an earlier catalogue and has not been re-checked.

## Sources
Internet Archive. (n.d.-a). *The social organization and the secret societies of the Kwakiutl Indians* [Item metadata record, identifier socialorganizat00huntgoog]. https://archive.org/details/socialorganizat00huntgoog
Internet Archive. (n.d.-b). *The social organization and the secret societies of the Kwakiutl Indians* [Item metadata record, identifier socialorganizati00boas]. https://archive.org/details/socialorganizati00boas
Internet Archive. (n.d.-c). *Ethnology of the Kwakiutl, based on data collected by George Hunt* [Item metadata record, identifier ethnologyofkwaki00boas]. https://archive.org/details/ethnologyofkwaki00boas
Internet Archive. (n.d.-d). *Kwakiutl texts: Second series* [Item metadata record, identifier kwakiutltextssec0000boas]. https://archive.org/details/kwakiutltextssec0000boas`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The archive",
      section: "Section 3 · The archive",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In which year did Boas begin giving handwritten manuscripts to Columbia University?",
            options: [
              "1913",
              "1897, the year the monograph on social organization was published in Washington",
              "1933, the year George Hunt died at Fort Rupert in British Columbia",
              "2023, the year Columbia first created an electronic catalogue record for them",
            ],
            correctIndex: 0,
            explanation:
              "The gift began in 1913 and the material kept arriving. The catalogue record for it was not created until 2023.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does Columbia's 2023 post say Boas did NOT do with those manuscripts?",
            options: [
              "Write them",
              "Edit them, since the post says the pages reached Columbia exactly as Hunt sent them",
              "Donate them, since the post says the university purchased them from his estate",
              "Prepare them for publication, which the post says was done by his students",
            ],
            correctIndex: 0,
            explanation:
              "He edited and re-sorted them and prepared them for publication, but he did not write them. The holding institution says so about its own gift.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Whose handwriting does Columbia's post say the pages bear?",
            options: [
              "George Hunt's",
              "Franz Boas's, in the clear hand he used for fair copies of field notes",
              "Several different hands, which the project has not yet been able to identify",
              "A professional copyist's, hired in New York to prepare the pages for the printer",
            ],
            correctIndex: 0,
            explanation:
              "The pages bear the meticulous, clear handwriting of George Hunt. That is the whole force of the post.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does the post say Boas did to the pages?",
            options: [
              "Edited and re-sorted them",
              "Translated them from Kwak'wala into English line by line before binding them",
              "Copied them out by hand so that a second set could be kept in New York",
              "Destroyed the portions he considered unreliable before giving the rest away",
            ],
            correctIndex: 0,
            explanation:
              "He edited and re-sorted them and prepared them for publication. The re-sorting is why the question of original order comes up at all.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "How many handwritten pages does the Rare Book and Manuscript Library post give?",
            options: [
              "Nearly 8,000",
              "About 600, matching the corrections Hunt sent Boas after his 1920 letter",
              "Over 6,000, which is the figure the American Philosophical Society gives",
              "More than 100,000, making it the largest single collection at the university",
            ],
            correctIndex: 0,
            explanation:
              "Nearly 8,000 handwritten pages in 14 volumes, almost all bilingual. Another Columbia page gives a different count.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "How many volumes does the Rare Book and Manuscript Library post give?",
            options: [
              "Fourteen",
              "Thirty, the figure Columbia's own noteworthy acquisitions list gives for 2023",
              "Two, matching the two series of Kwakiutl Texts published in 1902 and 1906",
              "Thirty-five, matching the Bureau of American Ethnology's annual report number",
            ],
            correctIndex: 0,
            explanation:
              "Fourteen volumes in the library post, thirty in the university's acquisitions list. The course prints both counts with their sources.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "How many pages does Columbia's own 2023 acquisitions list give?",
            options: [
              "About 8,500",
              "Nearly 8,000, which is the same figure the library's blog post gives",
              "Over 6,000, the figure the American Philosophical Society gives for its holding",
              "Exactly 1,000, matching the indexed correspondence between Hunt and Boas",
            ],
            correctIndex: 0,
            explanation:
              "About 8,500 pages in thirty volumes. The library post says nearly 8,000 in fourteen. Two pages from one university disagree.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does this course do about Columbia's two different page counts?",
            options: [
              "Prints both with their sources",
              "Averages them, since the true figure is likely to lie between the two",
              "Uses the larger one, because a bigger number makes the collection look important",
              "Omits both, since a count that disagrees with itself cannot be cited at all",
            ],
            correctIndex: 0,
            explanation:
              "Picking the rounder number would hide a disagreement, which is the small version of the error this whole course is about.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Between which years does Columbia say the manuscripts were made?",
            options: [
              "1898 and 1931",
              "1913 and 1942, the years between the first gift and Boas's death",
              "1889 and 1933, the full span of Hunt's work for Boas",
              "1885 and 1951, the years of the potlatch ban in Canada",
            ],
            correctIndex: 0,
            explanation:
              "Made by George Hunt in Fort Rupert between 1898 and 1931, at the request of and in collaboration with Franz Boas.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does interlinear mean?",
            options: [
              "Written between the lines",
              "Written across two facing pages so that a reader can compare them side by side",
              "Written in a second colour of ink to distinguish it from the original text",
              "Written in the margin of a page by a later editor rather than by the author",
            ],
            correctIndex: 0,
            explanation:
              "The English translations sit under the Kwak'wala they translate, which is why Columbia calls almost all the pages bilingual.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "In what languages are the Columbia manuscripts written?",
            options: [
              "Kwak'wala with English translations",
              "English alone, translated from Kwak'wala speech at the time of recording",
              "Kwak'wala alone, with no translation supplied by either man",
              "German and Kwak'wala, since Boas wrote his own notes in German",
            ],
            correctIndex: 0,
            explanation:
              "Written by Hunt in Kwak'wala with interlinear English translations, which is what makes the collection usable for language work today.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What did Columbia create for these materials for the first time in 2023?",
            options: [
              "An electronic catalogue record",
              "A conservation report describing the physical condition of each of the volumes",
              "A published edition of the manuscripts with a full English translation",
              "A public exhibition of selected pages in the university's main library",
            ],
            correctIndex: 0,
            explanation:
              "For about a century the only finding path to thousands of pages of Hunt's handwriting ran through the name of the man who gave them.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Which question does provenance answer?",
            options: [
              "Who gave this",
              "How much the collection would be worth if it were offered for sale",
              "Whether the contents of a collection are factually reliable",
              "Which community holds the rights to the knowledge in a collection",
            ],
            correctIndex: 0,
            explanation:
              "Provenance records where a collection came from and who owned it. It is how an archivist keeps a collection honest.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Which question does provenance NOT answer?",
            options: [
              "Who made this",
              "Who owned this, which requires a separate chain-of-custody document",
              "Where the collection is shelved, which only the finding aid records",
              "When the collection arrived, which only the accession register records",
            ],
            correctIndex: 0,
            explanation:
              "A catalogue has to answer both. At Columbia the second question had no printed answer until 2023.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Which course does this lesson borrow provenance and original order from?",
            options: [
              "Archives and Finding Aids",
              "Written by Himself, which supplies the credit ladder used in section 1",
              "Who Gets Named, which supplies the accountability criterion used in lesson 3",
              "Who Made the Record, which handles records made about people",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on provenance and original order is the instrument, and Columbia's collection is a case where both concepts do real work at once.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does Columbia's writer say about Hunt's original order?",
            options: [
              "It is traceable again",
              "That it was destroyed when Boas re-sorted the pages and cannot be recovered",
              "That it was never established, since Hunt sent the pages in no particular order",
              "That it is recorded in a separate index held by the American Philosophical Society",
            ],
            correctIndex: 0,
            explanation:
              "Boas re-sorted the pages, and the post says Hunt's original order is traceable. An arrangement a later editor imposed can, in part, be undone.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does this lesson say an arrangement is?",
            options: [
              "An argument about what belongs with what",
              "A legal agreement between a donor and an archive about future access",
              "The physical order in which volumes are shelved in a reading room",
              "The sequence in which a publisher prints the chapters of a book",
            ],
            correctIndex: 0,
            explanation:
              "That is why re-sorting matters and why traceability matters. Somebody else's argument about the material can be read back out of it.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does a catalogue change alter?",
            options: [
              "What a search returns",
              "The wording printed on a book's title page in all surviving copies",
              "The legal ownership of the collection the record describes",
              "The order in which the pages of a manuscript are bound together",
            ],
            correctIndex: 0,
            explanation:
              "Which is where nearly everyone meets the record now. It is a real change, made inside a system that can carry it.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What does a catalogue change NOT alter?",
            options: [
              "The printed title page",
              "The way search engines describe a book to people looking for it",
              "The name under which a library shelves and retrieves a collection",
              "Whether a researcher can find the collection by the maker's name",
            ],
            correctIndex: 0,
            explanation:
              "The 1897 page is printed and stays printed. The correction happens where the record is still being copied, not where it was set in type.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Where did this course read Columbia's 2023 post?",
            options: [
              "On an Internet Archive capture",
              "In a printed annual report issued by Columbia University Libraries",
              "In the reading room of the Rare Book and Manuscript Library",
              "In the exhibition catalogue published by the Bard Graduate Center",
            ],
            correctIndex: 0,
            explanation:
              "A capture of 19 January 2025. A course that says which copy it read lets a reader check the same copy.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Why did the course use an archived copy of Columbia's post?",
            options: [
              "The live page serves a bot check",
              "Because the live page was taken down at the request of the Hunt family",
              "Because the archived copy contains additional material the live page omits",
              "Because Columbia asks that its blog posts be cited only from archived copies",
            ],
            correctIndex: 0,
            explanation:
              "A failed fetch is reported as failed, and the course says exactly which copy it read instead.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What did Columbia's 2023 project do with the manuscripts besides describing them?",
            options: [
              "Digitised them",
              "Rebound them into thirty new volumes matching the original order",
              "Translated the remaining untranslated pages into English",
              "Transferred them to the American Philosophical Society in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "Description and digitization were the two halves of the project, and the digitisation is what makes section 5's access question live.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "Which archive holds the pages described in the 2018 CNAIR post?",
            options: [
              "The American Philosophical Society",
              "Columbia University's Rare Book and Manuscript Library in New York",
              "The U'mista Cultural Centre at Alert Bay, British Columbia",
              "The American Museum of Natural History's library in New York",
            ],
            correctIndex: 0,
            explanation:
              "The APS in Philadelphia, whose Center for Native American and Indigenous Research published the post.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Who wrote the 2018 post about the manuscripts in Philadelphia?",
            options: [
              "Brian Carpenter",
              "Amanda Althoff, who wrote the guest post published by Columbia in 2023",
              "Aaron Glass, who curated the 2019 exhibition at the Bard Graduate Center",
              "Kathleen Mooney, who wrote the Canadian Encyclopedia entry on Hunt",
            ],
            correctIndex: 0,
            explanation:
              "Brian Carpenter, writing for the Society's Center for Native American and Indigenous Research on 1 May 2018.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How many pages does the APS say Hunt sent Boas?",
            options: [
              "Over 6,000",
              "Nearly 8,000, which is the figure Columbia's library post gives for its own holding",
              "About 600, which is the number of correction pages he sent after 1920",
              "More than 1,000, which is the length of the indexed correspondence",
            ],
            correctIndex: 0,
            explanation:
              "Over 6000 pages, held in Philadelphia. Columbia's holding is separate material in a different city.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How does the APS rank the collection in its own description?",
            options: [
              "Among the largest by an Indigenous person",
              "As the single most valuable manuscript collection the Society owns",
              "As a minor supplement to the far larger Franz Boas papers",
              "As the earliest Indigenous-language manuscript held anywhere in the United States",
            ],
            correctIndex: 0,
            explanation:
              "One of the largest and most important bodies of work by an Indigenous person at the APS Library. Read as a credit line, which is what it is.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Which centre of the American Philosophical Society published the 2018 post?",
            options: [
              "CNAIR",
              "The Rare Book and Manuscript Library, which also holds the Boas correspondence",
              "The Bard Graduate Center Gallery, which curated the 2019 exhibition",
              "The Bureau of American Ethnology, which published the 1921 volume",
            ],
            correctIndex: 0,
            explanation:
              "The Center for Native American and Indigenous Research, which also works with Kwakwaka'wakw communities on access protocols.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What does the APS post cite as examples of where the pages sit?",
            options: [
              "Two sections of the ACLS Collection",
              "Fourteen bound volumes shelved under the name of the donor",
              "Thirty volumes catalogued under Kwakwaka'wakw community names",
              "A single uncatalogued box, opened for the first time in 2018",
            ],
            correctIndex: 0,
            explanation:
              "Sections W1a.3 and W1a.11 of the ACLS Collection. A shelf mark is the address a citation points at.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Why does this lesson say a section number is more than housekeeping?",
            options: [
              "It is the address a citation uses",
              "Because the number encodes the year in which the material was written",
              "Because archives charge readers a fee based on the section they request",
              "Because a section number is printed on every page of the manuscript",
            ],
            correctIndex: 0,
            explanation:
              "Where a body of work sits inside somebody else's collection is part of the record of whose work it is.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How long does the APS post say Hunt's indexed correspondence with Boas runs?",
            options: [
              "More than a thousand pages",
              "About sixty pages, mostly covering the years 1929 to 1933",
              "Over 6,000 pages, the same figure given for the manuscripts themselves",
              "Fourteen volumes, matching the count Columbia gives for its manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "The post records an index to a correspondence of more than a thousand pages. This course quotes one sentence from it, taken from a curator's account.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How much of the APS material was online as of 2018?",
            options: [
              "A small selection",
              "All of it, fully transcribed and translated into English",
              "None of it, since digitisation began only after the 2019 exhibition",
              "Everything except the correspondence, which remains closed to researchers",
            ],
            correctIndex: 0,
            explanation:
              "A small selection. That is why a course about this record cannot be built on public images of the manuscripts.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Why did this course read an archived copy of the APS post?",
            options: [
              "The live page returned an access error",
              "Because the Society asks researchers to cite only archived versions of its posts",
              "Because the live post has since been rewritten and no longer names Hunt",
              "Because the archived copy is the only version that gives page counts",
            ],
            correctIndex: 0,
            explanation:
              "A capture from 2024 was used instead, and the course says so rather than implying it read the live page.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What dates does the APS give for Hunt's life?",
            options: [
              "1856 to 1931",
              "1854 to 1933, the dates Bard and the Canadian Encyclopedia both give",
              "1884 onward, the dates of the other George Hunt in a catalogue record",
              "1885 to 1951, which are in fact the years of the potlatch ban",
            ],
            correctIndex: 0,
            explanation:
              "The institution holding six thousand pages of his writing and the institution that curated the exhibition about him do not agree on the year he was born.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What does the APS say governs the manuscripts?",
            options: [
              "Kwakwaka'wakw protocols",
              "United States copyright law, which the Society applies to all its holdings",
              "The terms of Boas's will, which reserved control to his academic executors",
              "Nothing, since the Society owns the pages outright and may publish them",
            ],
            correctIndex: 0,
            explanation:
              "Protocols concerning the ownership, hereditary traditions and responsibilities surrounding different kinds of knowledge.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Whom does the APS say its centre works with on those protocols?",
            options: [
              "Members of several Kwakwaka'wakw communities",
              "A committee of anthropologists appointed by the Society's own membership",
              "The Canadian federal government, which administered the potlatch ban",
              "Columbia University Libraries, which holds the companion collection",
            ],
            correctIndex: 0,
            explanation:
              "The institution that ranks the collection so highly also says out loud that it is not the body that decides what happens to it.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How long does the APS say the potlatch ban in Canada lasted?",
            options: [
              "1885 to 1951",
              "1897 to 1921, the years between the two books at the centre of this course",
              "1913 to 1942, the years Boas was giving manuscripts to Columbia",
              "1854 to 1933, which are in fact the dates Bard gives for Hunt's life",
            ],
            correctIndex: 0,
            explanation:
              "Sixty-six years, and Hunt's 1900 arrest falls inside them. Lesson 10 takes up what that meant for the 1897 book.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What does this lesson say the finding is, once the two archives are added together?",
            options: [
              "The scale",
              "The disagreement between the two institutions about Hunt's date of birth",
              "The fact that neither archive has ever created a catalogue record",
              "That Boas kept the most important pages for himself and gave away the rest",
            ],
            correctIndex: 0,
            explanation:
              "Even at the lower counts on both sides, the writing runs to many thousands of pages in one handwriting, by a man the title pages call a supplier of notes and data.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "How much of the Hunt and Boas correspondence does this course quote?",
            options: [
              "One sentence",
              "The whole of the indexed correspondence, running to more than a thousand pages",
              "Every letter written after 1920, when Hunt began sending corrections",
              "None of it, since no letter between the two men has ever been published",
            ],
            correctIndex: 0,
            explanation:
              "One sentence from a 1920 letter, taken from a curator's published account rather than from the letter itself, which nobody here has read.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What is an accession?",
            options: [
              "One arrival of material into an archive",
              "The formal act of appointing an archivist to take charge of a collection",
              "A published list of everything an archive acquired in a given year",
              "The transfer of ownership of a collection from a donor to a community",
            ],
            correctIndex: 0,
            explanation:
              "Columbia's manuscripts and the Society's are separate accessions of the same person's writing, in different cities.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What does the lesson say the APS's ranking sentence functions as?",
            options: [
              "A credit line",
              "A valuation, used to set the insurance premium on the collection",
              "A disclaimer, limiting the Society's responsibility for the contents",
              "A finding aid, listing the contents of each section in order",
            ],
            correctIndex: 0,
            explanation:
              "It is a ranking statement about one person's body of work, made by the institution that holds it, and it can be quoted back at a title page.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What would the phrase the Kwakiutl section of the Boas papers do differently?",
            options: [
              "File the work under someone else's name",
              "Give the collection a more accurate description of its physical arrangement",
              "Record the protocols under which the community governs the material",
              "Add Hunt to the creator field of the catalogue record for the collection",
            ],
            correctIndex: 0,
            explanation:
              "The APS does not describe it that way. It describes it as a body of work by an Indigenous person, which is a statement about whose work it is.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "Do Columbia and the American Philosophical Society hold the same pages?",
            options: [
              "No, they are separate accessions",
              "Yes, Columbia holds the originals and the Society holds photographic copies",
              "Yes, the collection was divided between them by Boas's will in 1942",
              "No, because the Society's pages were returned to Alert Bay in 2016",
            ],
            correctIndex: 0,
            explanation:
              "Different material, in different cities, arriving at different times. That is why the counts add rather than overlap.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What is a catalogue record's purpose, as lesson 8 describes it?",
            options: [
              "Finding",
              "Crediting, which is the same job a title page does but in machine-readable form",
              "Preserving, meaning keeping a permanent copy of a book's text",
              "Valuing, meaning recording what a library paid for an item",
            ],
            correctIndex: 0,
            explanation:
              "It is made later, by a different institution, for finding rather than crediting, which is why it can disagree with the book it describes.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "How many catalogue records does lesson 8 read?",
            options: [
              "Four",
              "One, the Getty Research Institute's record for the 1897 monograph",
              "Six, one for each of the publications examined in section 1",
              "Fourteen, one for each volume of the Columbia manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "Two for the 1897 book, one for the 1921 book, and one for a 1975 reprint of the 1906 second series.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which record names a different man entirely?",
            options: [
              "The Getty-sourced 1897 scan",
              "The Harvard-sourced 1897 scan, which carries a bracketed note about an old catalogue",
              "The Library of Congress scan of the 1921 Ethnology of the Kwakiutl",
              "The record for the 1975 reprint of the second series of Kwakiutl Texts",
            ],
            correctIndex: 0,
            explanation:
              "Its creator field reads Hunt, George M. (George McMonies), 1884-. The one record that credits a Hunt on that book credits the wrong one.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What birth year does the wrong George Hunt in that record carry?",
            options: [
              "1884",
              "1854, the year Bard and the Canadian Encyclopedia give for the right man",
              "1856, the year the American Philosophical Society gives for the right man",
              "1858, which is in fact the year Franz Boas was born",
            ],
            correctIndex: 0,
            explanation:
              "Thirty years after the George Hunt who wrote the book, which is what makes the mismatch visible at a glance.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What bracketed note does the Harvard-sourced 1897 record carry beside Hunt's name?",
            options: [
              "From old catalog",
              "Attributed, meaning the library is not certain the attribution is correct",
              "Author, meaning the library ranks him equally with Boas on that book",
              "See also, meaning the name points to a separate authority record",
            ],
            correctIndex: 0,
            explanation:
              "It means the data was carried over from an earlier catalogue and has not been re-checked. The right man, with a caution attached.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which record ranks Hunt higher than the printed title page does?",
            options: [
              "The Library of Congress 1921 scan",
              "The Getty-sourced 1897 scan, which lists three creators for the monograph",
              "The 1975 reprint record, which names Boas alone as creator",
              "The Harvard-sourced 1897 scan, which flags its data as unverified",
            ],
            correctIndex: 0,
            explanation:
              "The title page says Hunt collected the data and Boas wrote the book. The record lists both men as creators.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which record contains the word author beside Hunt's name?",
            options: [
              "The 1975 reprint record",
              "The Library of Congress record for the 1921 Ethnology of the Kwakiutl",
              "The Getty Research Institute record for the 1897 monograph",
              "None of the four, since no catalogue has ever used that word for him",
            ],
            correctIndex: 0,
            explanation:
              "The record for the 1975 reprint of the second series reads Hunt, George, author, in its associated names field.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "In which field does that word author appear?",
            options: [
              "Associated names",
              "Creator, alongside Boas and in exactly the same form",
              "Title, as part of the book's full printed title statement",
              "Publisher, as part of the 1975 reprint's imprint information",
            ],
            correctIndex: 0,
            explanation:
              "The word is in the record. It is in the field that means connected to, not the field that means made by.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What does a creator field mean in a catalogue record?",
            options: [
              "Who made the work",
              "Who donated the copy that the library scanned for its digital collection",
              "Who holds the copyright in the edition being described",
              "Who catalogued the item and is answerable for the record's accuracy",
            ],
            correctIndex: 0,
            explanation:
              "It is what a search engine reads when it decides whose book this is, which is why which name sits there matters.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What does an associated names field mean?",
            options: [
              "Connected to the work",
              "Named in the text of the work at least once by the author",
              "Legally responsible for the accuracy of the work's contents",
              "Holding a copy of the work in a library somewhere in the world",
            ],
            correctIndex: 0,
            explanation:
              "People connected to a work without being named as its creators. It is a rung on the catalogue's own ladder.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What does the lesson say produces a wrong-man record like the Getty one?",
            options: [
              "A failed name match",
              "Deliberate suppression of an Indigenous author by the cataloguing institution",
              "A printer's error in the title page that the cataloguer copied faithfully",
              "A decision by the donor to conceal who had written the book",
            ],
            correctIndex: 0,
            explanation:
              "A name in a book has to be matched to a list of approved name forms. When the right match is missing or not found, a near-enough one can be attached.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What is authority control?",
            options: [
              "Matching a name to approved name forms",
              "Deciding which library has the right to catalogue a given book first",
              "Restricting access to a collection at the request of a donor",
              "Verifying that a book's stated author actually wrote it",
            ],
            correctIndex: 0,
            explanation:
              "It is meant to keep one person's works together under one name. When the match fails, it can put a work under somebody else's.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which case taught in Who Gets Named shares the mechanism of the wrong-man record?",
            options: [
              "Henrietta Lacks",
              "The 1850 commission, which made a record about people rather than by them",
              "The four moments of silence, in which a record simply stops recording",
              "The anatomy of a correction, which is about who repairs a record",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on the substituted name follows a wrong name that entered a record and travelled for decades. A library catalogue can do the same thing quietly.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What is the practical rule this lesson gives for checking a credit?",
            options: [
              "Open the book",
              "Trust the catalogue, since librarians verify every name before entering it",
              "Prefer the most recent record, since later records correct earlier ones",
              "Count how many records agree, and accept whichever version has the most",
            ],
            correctIndex: 0,
            explanation:
              "When you look up a book you are almost always reading a catalogue record and not the book. If the credit matters, go to the page.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What does the rule say to do when you cannot open the book?",
            options: [
              "Name the record you read",
              "Report the strongest version of the claim, since one of the records must be right",
              "Leave the credit out of your writing entirely until you can see the page",
              "Use the version that the largest institution has published",
            ],
            correctIndex: 0,
            explanation:
              "Name the record and who made it. That is exactly what lesson 2 does with the Kwakiutl Texts title page, which is why it stays an open question.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "When were the four catalogue records in this lesson fetched?",
            options: [
              "In September 2026",
              "In April 2023, at the same time Columbia created its own catalogue record",
              "In May 2018, when the American Philosophical Society published its post",
              "In 1975, when the second series of Kwakiutl Texts was reprinted",
            ],
            correctIndex: 0,
            explanation:
              "A record can change, so a course that cites one says when it read it.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "How many of the four records describe a person other than the George Hunt of this course?",
            options: [
              "One",
              "None, since all four correctly identify the same man born in the 1850s",
              "Two, since the Harvard record also carries a different person's dates",
              "All four, since no catalogue has ever recorded his dates correctly",
            ],
            correctIndex: 0,
            explanation:
              "The Getty-sourced 1897 record names George M. Hunt, born 1884. The other three name the right man at three different ranks.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Why does the lesson say copying is central to the problem?",
            options: [
              "Copying is what catalogue data is for",
              "Because libraries are required by law to reproduce each other's records exactly",
              "Because a scanned book can be copied more cheaply than it can be catalogued",
              "Because the Internet Archive copies records without reading the books",
            ],
            correctIndex: 0,
            explanation:
              "A record is made to be shared and reused, so an error in one gets reproduced rather than caught. That is how a wrong name travels.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What do the four records add up to?",
            options: [
              "Four different answers about one man",
              "A single consistent account that confirms what the title pages already say",
              "Proof that the 1897 book was written by George M. Hunt of 1884",
              "Evidence that catalogues are always more accurate than printed books",
            ],
            correctIndex: 0,
            explanation:
              "Same two men, a handful of books, four answers about the second man, and one of the four is not him.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which of the four scanned copies came from Harvard?",
            options: [
              "One of the two 1897 scans",
              "The 1921 Ethnology, which the Library of Congress also holds",
              "The 1975 reprint of the second series of Kwakiutl Texts",
              "None of them, since all four copies came from the Getty Research Institute",
            ],
            correctIndex: 0,
            explanation:
              "The item whose creator field reads Hunt, George. [from old catalog]. The other 1897 scan came from the Getty Research Institute.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Why does the course treat catalogue records as evidence at all?",
            options: [
              "They are where most readers meet a book",
              "Because a catalogue record is legally binding on the publisher of a book",
              "Because librarians check every record against the title page before publishing it",
              "Because a catalogue record is written by the author of the book it describes",
            ],
            correctIndex: 0,
            explanation:
              "Search results, citations and reading lists carry the record's claim rather than the page's, so the record is where a credit now lives or dies.",
            sourceLessonSlug: "four-catalogue-records",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Whose knowledge, and who decides
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "not-only-hunts-words",
      title: "9 · Not only Hunt's words",
      section: "Section 4 · Whose knowledge, and who decides",
      body: `One sentence in the American Philosophical Society's 2018 post stops the obvious correction from going wrong. It says: "The knowledge and words found in the manuscripts are, of course, not just that of Hunt, but also that of numerous Kwakwaka'wakw people whose experiences and expertise he recorded" (Carpenter, 2018).

**Why that sentence matters here more than anywhere else.** The obvious repair to a credit record is to move the name up. Cross out one name, write in another. Do that here and you have reproduced the same error one rung further down: a man who wrote down what many people knew becomes the sole author of their knowledge. The title page would be wrong in a new way, and the new wrongness would be harder to see, because it would look like justice.

**What the record can carry, and what it cannot.** A title page has room for one name or two. The work it describes involved many people, and most of their names appear only inside the pages, which this course does not open. So the honest description is not a better author line at all. It is a sentence about what the book is: a written record of knowledge held by many Kwakwaka'wakw people, written down by a man who belonged to that community, then edited and published by a man who did not.

**The role word, doing its second job.** "Informant" names a real function and, at the same time, makes the people it names interchangeable. One informant is much like another; that is what the word is for. *Hoodoo Complete* teaches the same problem in a different collection, where thousands of interviews reach readers through the collector's name and the collector's categories. The point is not that collectors are villains. It is that a category built for the collector's convenience will not preserve what it was not built to preserve.

**The rule this course follows, said plainly.** It teaches that the knowledge exists, whose it is, and why the record about it matters, and then it stops. It quotes no story, no song, no prayer, no hereditary name and no ceremonial detail, from any of the six books or any of the manuscripts. That is not squeamishness. A course that reproduced the content in order to object to how the content was taken would be doing the taking again, with a footnote attached.

**Where the rule comes from.** *The Creator's Game* and *Tribal Nations Governance* both open by saying what they teach and where they stop. This course adopts that opening. The reason is practical as well as ethical: a course about a credit record does not need the contents of the record in order to read the record, and every sentence of manuscript content it printed would be a sentence it could not check with the people it belongs to.

**The question to carry forward.** If many people's knowledge is in these pages, then who should be on the title page is not the only question the record raises. The others are: who agreed to this, what were they told they were agreeing to, and who decides now. The next two lessons take the first two. Section 5 takes the third.

:::reveal What does the American Philosophical Society say about whose knowledge and words the manuscripts contain? ||| Not just Hunt's, but also that of numerous Kwakwaka'wakw people whose experiences and expertise he recorded.

:::reveal Why is replacing by Boas with by Hunt an incomplete correction? ||| Because it makes one man the sole author of knowledge held by many people, which repeats the same error one rung further down and is harder to see because it looks like justice.

## Vocabulary
- **Informant**: the role word a collector's record uses for the people it records. It names a real function and makes the people it names interchangeable.
- **Plural authorship**: a work whose knowledge comes from many people, most of whom a title page has no room for.
- **Care rule**: this course's stated limit. Teach that the knowledge exists, whose it is, and why the record matters, then stop.
- **Corpus**: a whole body of collected material, such as the thousands of pages in one hand that this course describes without opening.

## Sources
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.`,
    },
    {
      slug: "the-book-as-evidence",
      title: "10 · The book as evidence in court",
      section: "Section 4 · Whose knowledge, and who decides",
      body: `In 1900 the 1897 book did something a book is not usually asked to do. It went into a Canadian courtroom as evidence about what a man was.

**The law first.** The potlatch was prohibited in Canada, and the American Philosophical Society gives the ban as lasting from 1885 to 1951 (Carpenter, 2018). Sixty-six years. This course describes nothing at all about a potlatch. What matters for the credit record is narrower: it was against the law, and being present at one could put a person in front of a judge.

**What happened.** The Bard Graduate Center's account of the making and remaking of the 1897 book records that after Hunt was arrested for potlatching, Boas mailed a copy of the book to a colleague in Victoria, British Columbia, to be entered in court as evidence that Hunt was there as an "ethnographer" and not a "participant". Hunt was acquitted (Bard Graduate Center, n.d.).

**There are three moves in that sentence, and they are worth separating.** First, a book had ranked Hunt below its author line. Second, that same book was sent across the continent to say what Hunt was. Third, the category it was sent to prove for him, ethnographer, is close to the professional identity the title page had declined to give him in full.

**A credit line can be a legal identity.** That is the general lesson, and it is the reason this course exists in the form it does. The categories a record puts people in are not only about honour and hurt feelings. They decide what a person is for official purposes. Ethnographer or participant. Observer or subject. Author or informant. Which side of that line a record puts you on can decide whether a law applies to you at all.

**What the record shows, and what it does not.** It shows that the book was mailed, that it was to be entered as evidence of a category, and that an acquittal followed. It does not show what the court found decisive, because nobody in this course has read the court record. So the sentence to write is: the book was entered as evidence that he was an ethnographer, and he was acquitted. The sentence not to write is that the book saved him. The difference between those two sentences is the difference between a finding and a story.

**An uncomfortable symmetry, to be held rather than resolved.** The same arrangement that recorded him as the maker of notes also made him, at the moment he needed it, a professional with a published book behind him. Both are true. Neither cancels the other. A course that wanted a simple villain would have to drop one of them, and dropping evidence to keep a shape is the habit this whole course is written against.

**And one thing the episode settles about the stakes.** Nobody in 1900 thought the wording of a title page was a small administrative matter. A man's liberty was argued with a book in the room.

:::reveal What was the 1897 book used for in 1900, and what was the outcome? ||| A copy was mailed to Victoria to be entered in court as evidence that Hunt had been present as an ethnographer rather than a participant, after his arrest for potlatching. He was acquitted.

:::reveal Why does this course not say that the book saved him? ||| Because nobody here has read the court record, so what the court found decisive is unknown. What the record shows is that the book was entered as evidence of a category and that an acquittal followed.

## Vocabulary
- **Potlatch ban**: the Canadian prohibition the American Philosophical Society dates from 1885 to 1951. This course states only that it existed and that Hunt was arrested under it.
- **Ethnographer**: a person who writes a description of a people's way of life. The category the 1897 book was entered in court to prove for Hunt.
- **Participant**: the opposing category in the 1900 case, and the one that would have brought the law down on him.
- **Finding versus story**: a finding says the book was entered and the acquittal followed. A story says the book saved him, which the record does not show.

## Sources
Bard Graduate Center. (n.d.). *Making and remaking the 1897 book*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. https://exhibitions.bgc.bard.edu/storybox/
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.`,
    },
    {
      slug: "who-decides-what-is-published",
      title: "11 · Who decides what is published",
      section: "Section 4 · Whose knowledge, and who decides",
      body: `Agreeing that something may be written down and agreeing that it may be printed are two different permissions. In this record the first is thinly documented and the second is thinner still. This lesson is as much about how to handle that thinness as about what it contains.

**A letter in April 1897.** A published review of the 2019 exhibition quotes a letter Boas wrote that month to Kwagu'ł chiefs: "My friend, George Hunt, will show you a box in which some of your stories will be kept" (Pickman, 2019). Read it as a permission document and it is interesting and incomplete at once. It announces what is going to happen. It uses the language of keeping rather than of publishing. And the thing it describes is a container, which is a promise about storage, not about circulation.

**What Columbia reports, and what nobody here has read.** Columbia's 2023 post reports that among the manuscripts is a note in which Hunt accuses Boas of publishing information Hunt had promised not to make public (Althoff, 2023). The post does not identify which manuscript page it is on. Nobody working on this course has seen it.

So here is exactly what this course does with that. It names Columbia as the reporter. It says what has not been read. It asserts nothing. And it files a research check so the question stays on somebody's list until the page is found. No lesson here is built on the note, and if it turns out to say something different, nothing in this course falls over.

**The same post reports a letter of January 1929**, in which Hunt wrote that he thought Boas should get him a medal for these writings (Althoff, 2023). That letter is at the American Philosophical Society and has not been read here either. Same treatment, same reason.

**Why this lesson is deliberately written this way.** Those are two of the most quotable items in the whole subject. A course that wanted to be dramatic would assert both, cite a library blog post, and almost nobody would notice the difference. The discipline that prevents it fits in a line: a claim you have only seen quoted is a claim about a quotation. Name who reports it. Say what you have not seen. Do not build on it.

**What that leaves standing about the promise itself.** If the note exists as described, it records a disagreement about publication between the two men while both were alive, which would be the one piece of evidence in this record where the person being published objects in his own hand. That is why it is worth chasing and why it must not be borrowed on credit in the meantime. Until the page is read, the honest statement is that Columbia reports such a note, and that what Hunt consented to have published is an open question.

**And the question does not close when people die.** It moves. The pages are now held by two universities and governed, the American Philosophical Society says, by Kwakwaka'wakw protocols. Who decides became a live question again the moment the manuscripts were digitised, and the last lesson of this course is about the answers the two institutions gave.

:::reveal What two permissions does this lesson separate? ||| Consent to have something recorded and consent to have it published. They are different permissions, and in this record the second is documented even more thinly than the first.

:::reveal How does this course handle Columbia's report of a note by Hunt about a broken promise? ||| It names Columbia as the reporter, says that nobody here has read the manuscript page, asserts nothing, builds no lesson on it, and files a research check so the question stays open.

## Vocabulary
- **Consent to record**: agreement that something may be written down. The 1897 letter to the Kwagu'ł chiefs is the closest thing in this course to a document of it.
- **Consent to publish**: agreement that something may be printed and circulated. A separate permission, and the thinner half of this record.
- **Reported claim**: something known only because a secondary source quotes it. It may be named and attributed; it may not be asserted.
- **Research check**: a written note of what a course could not confirm and what would settle it, kept so that an open question does not quietly become a forgotten one.

## Sources
Althoff, A. (2023, April 4). *Description and digitization of the George Hunt Kwak'wala ethnographic manuscripts* [Guest post; K. Schlottmann, Ed.]. Rare Book & Manuscript Library, Columbia University. Internet Archive capture, 19 January 2025.
Pickman, S. M. (2019, June 21). The Story Box: Franz Boas, George Hunt, and the making of anthropology [Exhibition review]. *History of Anthropology Review*. https://histanthro.org/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Whose knowledge, and who decides",
      section: "Section 4 · Whose knowledge, and who decides",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the American Philosophical Society say about whose knowledge is in the manuscripts?",
            options: [
              "Not just Hunt's",
              "That it belongs to Boas, who commissioned and paid for every page written",
              "That it cannot be attributed to anyone, since the pages are unsigned",
              "That it is Hunt's alone, since he is the only person who wrote in the volumes",
            ],
            correctIndex: 0,
            explanation:
              "Not just that of Hunt, but also that of numerous Kwakwaka'wakw people whose experiences and expertise he recorded.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What is wrong with simply moving the name up on the title page?",
            options: [
              "It repeats the error one rung down",
              "It is impossible, because a printed title page cannot be legally amended",
              "It would credit a man who did not in fact write any of the pages",
              "It would make the catalogue records disagree with the printed book",
            ],
            correctIndex: 0,
            explanation:
              "A man who wrote down what many people knew becomes the sole author of their knowledge. The new error is harder to see, because it looks like justice.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Why does the lesson say the new error would be harder to see?",
            options: [
              "It looks like justice",
              "Because catalogue records take decades to propagate through library systems",
              "Because no reader ever checks a title page against the text of a book",
              "Because the correction would be made by the community rather than the publisher",
            ],
            correctIndex: 0,
            explanation:
              "A correction that moves an Indigenous name to the top of a title page reads as a repair, which is exactly why the second question has to be asked.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "How much room does a title page have, as this lesson puts it?",
            options: [
              "One name or two",
              "Exactly four names, which is the convention for a museum report of this period",
              "As many names as the contributors require, since pages can be added",
              "None, since a title page in this period carried only the title itself",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the honest description is not a better author line. It is a sentence about what the book actually is.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What does the lesson offer in place of a better author line?",
            options: [
              "A sentence describing what the book is",
              "A footnote listing every person named anywhere inside the manuscripts",
              "A recommendation that the books be withdrawn from library collections",
              "A new title page printed by the community rather than the publisher",
            ],
            correctIndex: 0,
            explanation:
              "A written record of knowledge held by many Kwakwaka'wakw people, written down by a man who belonged to that community, edited and published by a man who did not.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What second job does the word informant do, besides naming a function?",
            options: [
              "It makes people interchangeable",
              "It records how much each person was paid for the information they gave",
              "It establishes that the person consented to have their words published",
              "It marks the person as a member of the community being described",
            ],
            correctIndex: 0,
            explanation:
              "One informant is much like another; that is what the word is for. A category built for a collector's convenience will not preserve what it was not built to preserve.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Which course does this lesson name as teaching the same problem in a different collection?",
            options: [
              "Hoodoo Complete",
              "Archives and Finding Aids, which teaches provenance and original order",
              "Written by Himself, which teaches the credit ladder used in section 1",
              "Who Made the Record, which handles the 1850 commission",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on the Hyatt corpus covers a paid collector whose thousands of interviews reach readers through the collector's name and categories.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What does this course quote from the manuscripts?",
            options: [
              "Nothing",
              "Only the passages the American Philosophical Society has put online",
              "Only the passages that appear in the printed books rather than the manuscripts",
              "Only the hereditary names, since those are needed to explain the corrections",
            ],
            correctIndex: 0,
            explanation:
              "No story, no song, no prayer, no hereditary name and no ceremonial detail, from any of the six books or any of the manuscripts.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Why does the course call its no-reproduction rule practical rather than squeamish?",
            options: [
              "Reproducing it would repeat the taking",
              "Because reproducing manuscript pages would breach United States copyright law",
              "Because the manuscripts are written in a language the course cannot translate",
              "Because a private course is not permitted to quote any archival document",
            ],
            correctIndex: 0,
            explanation:
              "A course that reproduced the content in order to object to how it was taken would be doing the taking again, with a footnote. It also does not need the content to read the record.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Which two courses does this one borrow its opening limit from?",
            options: [
              "The Creator's Game and Tribal Nations Governance",
              "Who Gets Named and Written by Himself, the two credit courses in the catalog",
              "Hoodoo Complete and Who Made the Record, the two collector courses",
              "Archives and Finding Aids and Who Gets the Credit",
            ],
            correctIndex: 0,
            explanation:
              "Both open by saying what they teach and where they stop, and this course adopts that opening for the same reasons.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What is the second reason the course gives for printing no manuscript content?",
            options: [
              "It could not be checked with the people it belongs to",
              "It would make the course too long for a learner to finish in one sitting",
              "It would require permission from Columbia University Libraries",
              "It would duplicate material already taught in another course in the catalog",
            ],
            correctIndex: 0,
            explanation:
              "Every sentence of manuscript content would be a sentence the course could not verify with the community whose knowledge it is.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Where do the names of most of the people whose knowledge is in the pages appear?",
            options: [
              "Inside the pages",
              "On the title pages of the six books, below the author line",
              "In the catalogue records Columbia created for the collection in 2023",
              "In the index to the correspondence held in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "Which is precisely the material this course does not open, so it describes the situation rather than listing the names.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What three questions does the lesson say the record raises besides who should be on the title page?",
            options: [
              "Who agreed, what were they told, who decides now",
              "Who paid, who printed it, and who holds the copyright today",
              "Where it was written, when it was written, and how long it took",
              "How many pages, how many volumes, and how many languages",
            ],
            correctIndex: 0,
            explanation:
              "Lessons 10 and 11 take the first two. The last lesson of section 5 takes the third.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Is the lesson's point that collectors are villains?",
            options: [
              "No, that categories do not preserve what they were not built for",
              "Yes, since every collector in the period acted without any consent at all",
              "Yes, since the word informant was invented in order to conceal authorship",
              "No, since a collector's categories preserve more than a community's own would",
            ],
            correctIndex: 0,
            explanation:
              "The problem is structural. A category built for a collector's convenience will not hold what it was not designed to hold, whoever the collector is.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What does the course call its own stated limit?",
            options: [
              "The care rule",
              "The credit ladder, which sets out how far a contributor may be ranked",
              "Authority control, which decides which names a record may carry",
              "Provenance, which records where the material came from",
            ],
            correctIndex: 0,
            explanation:
              "Teach that the knowledge exists, whose it is, and why the record matters, then stop.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What is a corpus, as this lesson uses the word?",
            options: [
              "A whole body of collected material",
              "A catalogue listing every item a single institution holds",
              "The physical binding of a manuscript volume",
              "The English translation printed under a line of another language",
            ],
            correctIndex: 0,
            explanation:
              "Thousands of pages in one hand, which this course describes without opening.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Who published the sentence about whose knowledge is in the manuscripts?",
            options: [
              "The American Philosophical Society",
              "Columbia University's Rare Book and Manuscript Library, in its 2023 post",
              "The Bard Graduate Center, on its page about the making of the 1897 book",
              "The Bureau of American Ethnology, in its note of 1921",
            ],
            correctIndex: 0,
            explanation:
              "In the 2018 post by Brian Carpenter for its Center for Native American and Indigenous Research.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What is plural authorship, as this lesson uses it?",
            options: [
              "Knowledge from many people in one work",
              "Two authors sharing a title page in the same size type",
              "A book published under a committee's name rather than an individual's",
              "The practice of listing every contributor in a long acknowledgements section",
            ],
            correctIndex: 0,
            explanation:
              "A work whose knowledge comes from many people, most of whom a title page has no room for. It is why a single corrected name is not enough here.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What did Hunt himself belong to, that Boas did not?",
            options: [
              "The community he was recording",
              "The Bureau of American Ethnology, which employed him as a salaried officer",
              "The American Philosophical Society, which later held his manuscripts",
              "The Jesup North Pacific Expedition, which Boas only advised",
            ],
            correctIndex: 0,
            explanation:
              "Bard records that he was incorporated into the Fort Rupert community. That is part of the honest description the lesson offers in place of an author line.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "Which section of this course takes up the question of who decides now?",
            options: [
              "Section 5",
              "Section 3, which describes what the two archives hold",
              "Section 1, which reads the six title pages in order",
              "Section 2, which sets out Boas's account of the method",
            ],
            correctIndex: 0,
            explanation:
              "Its last lesson is about what the two holding institutions decided to do with the digitised pages.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What kind of description does the lesson say a category built for a collector will fail to preserve?",
            options: [
              "Whatever it was not built to preserve",
              "Anything written in a language other than English",
              "Anything recorded after the collector's own death",
              "Anything the collector did not personally witness",
            ],
            correctIndex: 0,
            explanation:
              "That is the structural point, and it is why a corrected name alone does not repair a record built on such categories.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What does the lesson say the obvious repair to a credit record is?",
            options: [
              "Move the name up",
              "Withdraw the book from circulation until a new edition can be prepared",
              "Add a footnote to every page explaining who supplied the material",
              "Publish the manuscripts in full so readers can judge for themselves",
            ],
            correctIndex: 0,
            explanation:
              "Cross out one name and write in another. It is obvious, it is incomplete here, and the incompleteness is the lesson.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What years does the American Philosophical Society give for the potlatch ban in Canada?",
            options: [
              "1885 to 1951",
              "1897 to 1930, the span of the six books examined in this course",
              "1900 to 1914, ending when Hunt began working with Edward S. Curtis",
              "1854 to 1933, which are in fact the dates Bard gives for Hunt's life",
            ],
            correctIndex: 0,
            explanation:
              "Sixty-six years, and Hunt's arrest in 1900 falls inside them.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What was Hunt arrested for in 1900?",
            options: [
              "Potlatching",
              "Removing manuscripts from the American Museum of Natural History in New York",
              "Publishing material without the permission of the Bureau of American Ethnology",
              "Interpreting in a provincial court without a licence to do so",
            ],
            correctIndex: 0,
            explanation:
              "The Bard account records the arrest, and that Boas responded by mailing a copy of the 1897 book to Victoria.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Where did Boas mail a copy of the 1897 book in 1900?",
            options: [
              "To a colleague in Victoria",
              "To the Bureau of American Ethnology in Washington, for its annual report",
              "To the U'mista Cultural Centre at Alert Bay, British Columbia",
              "To the American Philosophical Society in Philadelphia, for safekeeping",
            ],
            correctIndex: 0,
            explanation:
              "To a colleague in Victoria, British Columbia, to be entered in court as evidence of what Hunt was.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Which category was the book entered in court to prove for Hunt?",
            options: [
              "Ethnographer",
              "Participant, which is the category that would have brought the law down on him",
              "Interpreter, the role he had held for Israel Powell two decades earlier",
              "Informant, the word most scholars used for him for the next century",
            ],
            correctIndex: 0,
            explanation:
              "Evidence that he was there as an ethnographer and not a participant. The opposing category is the one the law would have caught.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What was the outcome of the 1900 case?",
            options: [
              "He was acquitted",
              "He was convicted and fined, and Boas paid the fine from expedition funds",
              "The case was withdrawn before the book reached the court in Victoria",
              "The record does not say, because the court papers have never been found",
            ],
            correctIndex: 0,
            explanation:
              "Hunt was acquitted. What the court found decisive is not recorded in anything this course read.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Why does this course refuse to say that the book saved him?",
            options: [
              "Nobody here has read the court record",
              "Because the book arrived in Victoria after the verdict had been delivered",
              "Because Bard's account says explicitly that the book was ignored by the judge",
              "Because saying so would credit Boas rather than Hunt with the acquittal",
            ],
            correctIndex: 0,
            explanation:
              "The record shows the book was entered as evidence of a category and that an acquittal followed. What the court found decisive is unknown.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What does the course say is the difference between the two sentences about the 1900 case?",
            options: [
              "A finding against a story",
              "One is shorter and easier for a learner to remember accurately",
              "One names Boas and the other does not, which is the only real difference",
              "One is taken from a primary source and the other from a catalogue record",
            ],
            correctIndex: 0,
            explanation:
              "The book was entered and an acquittal followed is a finding. The book saved him is a story, and the record does not carry it.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What general lesson does the 1900 episode carry about credit lines?",
            options: [
              "A credit line can be a legal identity",
              "A credit line is decided by the courts rather than by publishers",
              "A credit line matters only to the person named on it",
              "A credit line cannot be used as evidence in any legal proceeding",
            ],
            correctIndex: 0,
            explanation:
              "Ethnographer or participant, observer or subject, author or informant. Which side of the line a record puts you on can decide whether a law applies to you.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What does this course describe about the potlatch itself?",
            options: [
              "Nothing",
              "Its full ceremonial sequence, taken from the 1897 monograph",
              "The hereditary names announced at the events Hunt attended in 1900",
              "The songs recorded in the manuscripts held at Columbia University",
            ],
            correctIndex: 0,
            explanation:
              "The course states only that it was prohibited in Canada between 1885 and 1951 and that Hunt was arrested under that law in 1900.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Which page of the Story Box site carries the account of the 1900 case?",
            options: [
              "Making and Remaking the 1897 Book",
              "The George Hunt biography page written by Tessa Goldsher and Aaron Glass",
              "The U'mista Statement of Participation signed for the exhibition",
              "The Distributed Text project page describing the critical digital edition",
            ],
            correctIndex: 0,
            explanation:
              "The Bard curators' account of how the 1897 book was made and how it has been remade since.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What is the symmetry the lesson asks a reader to hold rather than resolve?",
            options: [
              "The same arrangement ranked him low and made him a professional",
              "The court acquitted him while the Bureau of American Ethnology blamed him",
              "Columbia credited him while the American Philosophical Society did not",
              "His father's people published him while his mother's people did not",
            ],
            correctIndex: 0,
            explanation:
              "The publication that recorded him as the maker of notes also gave him, at the moment he needed it, a published book and a professional category.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What habit does the lesson say the course is written against?",
            options: [
              "Dropping evidence to keep a shape",
              "Quoting a primary source without giving the page number",
              "Citing a catalogue record rather than the book it describes",
              "Writing about a community without naming a reviewer from it",
            ],
            correctIndex: 0,
            explanation:
              "A course that wanted a simple villain would have to discard one half of the symmetry, and discarding evidence to preserve a story is the defect the whole course is about.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What does the 1900 episode settle about the stakes of a title page?",
            options: [
              "They were never merely administrative",
              "That publishers were legally required to name every contributor",
              "That a title page could be amended by a court order if it was wrong",
              "That the wording of a title page was chosen by the Bureau, not the author",
            ],
            correctIndex: 0,
            explanation:
              "A man's liberty was argued with a book in the room. Nobody involved treated the wording as a small matter.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Which word does the Bard account put in quotation marks alongside ethnographer?",
            options: [
              "Participant",
              "Author, the rank the 1897 title page declined to give him",
              "Informant, the role word scholars later used for him",
              "Collaborator, the word used in the Bureau's 1921 note",
            ],
            correctIndex: 0,
            explanation:
              "Evidence that Hunt was there as an ethnographer and not a participant. Those are the two competing categories.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "How long was the potlatch ban in force, in years?",
            options: [
              "Sixty-six",
              "Thirty-three, the same span as the six books examined in section 1",
              "Fourteen, the number of volumes Columbia holds of Hunt's writing",
              "Ninety, running from Confederation until the middle of the last century",
            ],
            correctIndex: 0,
            explanation:
              "From 1885 to 1951, as the American Philosophical Society gives it.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Which three moves does the lesson separate out of the 1900 sentence?",
            options: [
              "Ranked below, sent as evidence, category proved",
              "Arrested, convicted, then pardoned by the provincial government",
              "Written, printed, then distributed to libraries across North America",
              "Collected, edited, then published under somebody else's name",
            ],
            correctIndex: 0,
            explanation:
              "A book had ranked him below its author line, the same book was sent to say what he was, and the category it proved was close to the identity the page had withheld.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What is an ethnographer, as this lesson defines the word?",
            options: [
              "Someone who writes a description of a way of life",
              "Someone licensed by a government to attend prohibited ceremonies",
              "Someone employed by a museum to collect objects for its displays",
              "Someone who translates a community's records into another language",
            ],
            correctIndex: 0,
            explanation:
              "It is the category the 1897 book was entered in court to prove for Hunt, and it is close to the professional identity the title page had withheld.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Who mailed the book to British Columbia?",
            options: [
              "Boas",
              "Hunt himself, from Fort Rupert, after he was charged",
              "The Bureau of American Ethnology, at the request of the provincial court",
              "The Government Printing Office, which held the remaining stock",
            ],
            correctIndex: 0,
            explanation:
              "Boas mailed a copy to a colleague in Victoria to be entered in court. That is what the Bard account records.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Which pairs of categories does the lesson list as deciding what a person is officially?",
            options: [
              "Ethnographer or participant, observer or subject, author or informant",
              "Author or editor, publisher or printer, donor or purchaser",
              "Creator or associated name, provenance or original order",
              "Chief or member, community or nation, resident or visitor",
            ],
            correctIndex: 0,
            explanation:
              "Which side of such a line a record puts you on can decide whether a law applies to you at all.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "In which year did the book go into a courtroom?",
            options: [
              "1900",
              "1897, the year the monograph was printed in Washington",
              "1921, the year the Bureau published Ethnology of the Kwakiutl",
              "1951, the year the potlatch ban in Canada came to an end",
            ],
            correctIndex: 0,
            explanation:
              "Three years after the book was published, and in one of the years Boas's 1921 preface says the two men worked together.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What does the lesson say a book is not usually asked to do?",
            options: [
              "Serve as evidence about what a person is",
              "Travel across a continent in the ordinary post",
              "Be published without naming everyone who worked on it",
              "Be read by the people it describes rather than by scholars",
            ],
            correctIndex: 0,
            explanation:
              "In 1900 the 1897 book was entered in a Canadian court as evidence of a category, which is the episode this lesson reads.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What two permissions does lesson 11 separate?",
            options: [
              "Recording and publishing",
              "Reading and copying, which archives grant under different conditions",
              "Collecting and cataloguing, which are done by different institutions",
              "Translating and printing, which the 1897 book treated as one step",
            ],
            correctIndex: 0,
            explanation:
              "Agreeing that something may be written down and agreeing that it may be printed are different permissions, and here the second is the thinner record.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Whom did Boas write to in April 1897, according to the published review?",
            options: [
              "Kwagu'ł chiefs",
              "The Bureau of American Ethnology's Ethnologist-in-Charge in Washington",
              "The provincial authorities in Victoria, British Columbia",
              "The trustees of the American Museum of Natural History in New York",
            ],
            correctIndex: 0,
            explanation:
              "The review quotes a letter to Kwagu'ł chiefs announcing that Hunt would show them a box in which some of their stories would be kept.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What word does the 1897 letter use for where the material would go?",
            options: [
              "A box",
              "A library, which the letter describes as open to everyone in the community",
              "A museum case, which the letter says would be labelled with their names",
              "A printing house, which the letter names as being in New York",
            ],
            correctIndex: 0,
            explanation:
              "The language is of keeping rather than publishing, and the thing described is a container, which is a promise about storage and not about circulation.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Why does the lesson call the 1897 letter incomplete as a permission document?",
            options: [
              "It promises keeping, not circulation",
              "Because it was written in English, which its recipients could not read",
              "Because it was never sent, and survives only as a draft in an archive",
              "Because it names Hunt rather than Boas as the person responsible",
            ],
            correctIndex: 0,
            explanation:
              "It announces what is going to happen, in the language of keeping, and the thing it describes is a container. That is not the same as consent to publish.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What does Columbia's 2023 post report about a note among the manuscripts?",
            options: [
              "That Hunt accuses Boas of publishing a promised secret",
              "That Hunt asked for his name to be removed from all future editions",
              "That Boas admits in writing that the manuscripts were never his",
              "That the community asked for the manuscripts to be destroyed",
            ],
            correctIndex: 0,
            explanation:
              "The post reports a note in which Hunt accuses Boas of publishing information Hunt had promised not to make public. It does not identify which page.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What does this course do with that reported note?",
            options: [
              "Names the reporter and asserts nothing",
              "Quotes it in full as the strongest evidence in the entire course",
              "Leaves it out completely, since an unread page cannot be mentioned",
              "Treats it as established, since Columbia is a reliable institution",
            ],
            correctIndex: 0,
            explanation:
              "It names Columbia as the reporter, says what has not been read, asserts nothing, builds no lesson on it, and files a research check.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What does Columbia's post fail to identify about the note?",
            options: [
              "Which manuscript page it is on",
              "Which of the two men wrote it, since the handwriting is disputed",
              "Whether it was written in Kwak'wala or in English",
              "Whether the note survives, or is known only from a later description",
            ],
            correctIndex: 0,
            explanation:
              "Without a page reference nobody can go and read it, which is exactly why the claim is attributed and filed rather than asserted.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What did Hunt write in January 1929, as Columbia's post reports it?",
            options: [
              "That Boas should get him a medal",
              "That he intended to publish the manuscripts himself in Victoria",
              "That he wished his name removed from the 1921 Ethnology of the Kwakiutl",
              "That he had stopped writing for Boas and would send no further pages",
            ],
            correctIndex: 0,
            explanation:
              "The post quotes him saying he thought Boas should get him a medal for these writings. The letter is at the American Philosophical Society and has not been read here.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Where is the January 1929 letter held?",
            options: [
              "At the American Philosophical Society",
              "At Columbia University's Rare Book and Manuscript Library in New York",
              "At the U'mista Cultural Centre at Alert Bay, British Columbia",
              "At the Bard Graduate Center, which exhibited it in 2019",
            ],
            correctIndex: 0,
            explanation:
              "In Philadelphia, where the rest of the Hunt and Boas correspondence is. Nobody working on this course has read it.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What is the discipline this lesson states in one line?",
            options: [
              "A claim you have only seen quoted is a claim about a quotation",
              "A claim from a university is stronger than a claim from a newspaper",
              "A claim with a date attached may be asserted without further checking",
              "A claim that appears in two sources may be treated as verified",
            ],
            correctIndex: 0,
            explanation:
              "Name who reports it, say what you have not seen, and do not build on it.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What would a course wanting drama have done with these two items?",
            options: [
              "Asserted them and cited a blog post",
              "Left them out entirely and said nothing about the promise",
              "Contacted the archives and waited for a page reference",
              "Published the manuscripts so readers could decide for themselves",
            ],
            correctIndex: 0,
            explanation:
              "And almost nobody would have noticed the difference, which is why the discipline has to be a rule rather than a feeling.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Why would the note matter so much if it says what Columbia reports?",
            options: [
              "It would be the objection in his own hand",
              "It would prove that Boas never wrote any part of the published books",
              "It would establish that the 1897 letter was a forgery",
              "It would settle which of the two page counts at Columbia is correct",
            ],
            correctIndex: 0,
            explanation:
              "It would be the one piece of evidence in this record where the person being published objects, in writing, while both men were alive.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What is the honest statement the lesson makes until the page is read?",
            options: [
              "Columbia reports such a note and the question is open",
              "Hunt objected in writing to Boas publishing what he had promised to keep",
              "No such note exists, since nobody has been able to locate it",
              "The note is unimportant, since a note is not a legal document",
            ],
            correctIndex: 0,
            explanation:
              "What Hunt consented to have published is an open question, and the report is named as a report.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What happens to the permission question when the people involved die?",
            options: [
              "It moves",
              "It closes, since consent cannot be given or withdrawn after death",
              "It passes to the publisher of the original book",
              "It is decided by the archive that holds the material",
            ],
            correctIndex: 0,
            explanation:
              "The pages are now held by two universities and, the American Philosophical Society says, governed by Kwakwaka'wakw protocols. Section 5 takes up what the institutions decided.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What made the permission question live again?",
            options: [
              "Digitisation",
              "The publication of the 1921 Ethnology of the Kwakiutl in Washington",
              "The end of the potlatch ban in Canada in 1951",
              "The sale of the manuscripts by Boas's estate after his death",
            ],
            correctIndex: 0,
            explanation:
              "Digitising a collection makes copying it trivial, which turns an old question about circulation into a present decision.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What is a research check, as this course uses the term?",
            options: [
              "A note of what could not be confirmed and what would settle it",
              "A second reading of a source by a different member of the team",
              "A test that runs automatically before a course can be published",
              "A list of the sources a course cites, checked for broken links",
            ],
            correctIndex: 0,
            explanation:
              "It keeps an open question from quietly becoming a forgotten one. Every hedge written into a lesson gets one.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What happens to this course if the reported note turns out to say something different?",
            options: [
              "Nothing falls over",
              "Section 4 would have to be withdrawn and rewritten from the beginning",
              "The whole argument about the credit ladder would be undermined",
              "The research check would have to be closed without an answer",
            ],
            correctIndex: 0,
            explanation:
              "No lesson is built on the note, which is the point of refusing to assert it in the first place.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Which source quotes the April 1897 letter?",
            options: [
              "A published exhibition review",
              "Columbia's 2023 post about the manuscripts it holds",
              "The American Philosophical Society's 2018 post from Philadelphia",
              "The Bureau of American Ethnology's note of 1921",
            ],
            correctIndex: 0,
            explanation:
              "A review of the 2019 exhibition published in a history of anthropology journal in June 2019.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Which of the two permissions is documented more thinly in this record?",
            options: [
              "Consent to publish",
              "Consent to record, of which no document survives at all",
              "Neither, since both are documented equally well in the correspondence",
              "Both equally, since the same letter covers recording and publishing",
            ],
            correctIndex: 0,
            explanation:
              "The 1897 letter is the closest thing to a document of consent to record. Consent to publish is thinner still, which is what makes the reported note so important.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Why does the lesson say the note must not be borrowed on credit?",
            options: [
              "Because it has not been read",
              "Because Columbia has asked that it not be quoted by other writers",
              "Because the note contains hereditary names this course may not print",
              "Because a note written in Kwak'wala cannot be translated reliably",
            ],
            correctIndex: 0,
            explanation:
              "It is worth chasing precisely because it would matter, and that is exactly why it cannot be used before somebody reads the page.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What does the course do so the unread page does not become a forgotten question?",
            options: [
              "Files a research check",
              "Adds it to the course description so every learner is warned",
              "Removes the lesson until somebody can travel to New York",
              "Writes to the archive on behalf of every learner who enrols",
            ],
            correctIndex: 0,
            explanation:
              "A hedge with no check is a hedge nobody will ever clear.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "In which month and year was the letter to the Kwagu'ł chiefs written?",
            options: [
              "April 1897",
              "January 1929, the month of the letter about a medal",
              "June 1920, the month of the letter about mistakes in the book",
              "May 1918, when the American Philosophical Society first described the pages",
            ],
            correctIndex: 0,
            explanation:
              "The same year the monograph was published, which is part of why it reads as an announcement rather than a request.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The correction
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "six-hundred-pages-of-corrections",
      title: "12 · Before one of us die",
      section: "Section 5 · The correction",
      body: `The longest correction ever made to the 1897 book was written by the man the book called the maker of its notes, and he started it twenty-three years after it was published.

**A letter of 7 June 1920.** Hunt wrote to Boas: "There are so many mistakes in the names of the masks and dishes that I think should be put to rights before one of us die" (Bard Graduate Center, n.d.). The Bard curators quote that sentence in their account of how the 1897 book was made and remade, and this course takes it from their account rather than from the letter, which nobody here has read.

**What came of it.** Boas encouraged him, and by the time of Hunt's death in 1933 he had sent Boas more than 600 pages of corrections and emendations (Bard Graduate Center, n.d.).

**Count what that actually is.** Thirteen years of work. More than six hundred pages. It is longer than some of the books in this course. And it is the earliest and most detailed correction of the 1897 monograph on record, produced by the person the monograph's title page ranked below its author.

**Why it is a different kind of evidence from a later scholar's correction.** A correction written afterwards, by somebody else, is an argument about a record. A correction written by the record's own maker, while he was alive and while the other party was alive, is part of the record. It cannot be dismissed as hindsight, because it is contemporary. It cannot be dismissed as an outsider's objection, because it comes from inside the work.

**What the phrase about dying tells you.** It is a statement about time, and it is also a statement about dependency. Neither man could fix the book alone. Hunt knew what was wrong with it. Boas held the position that could get a correction printed. The sentence records both facts in eleven words, and it records that the window for using them together was closing.

**What this course does not claim.** Whether those six hundred pages were ever printed, and where they are now, is not established by anything read for this course. The Bard curators say the pages were sent. That is their claim, it is attributed to them here, and the rest is an open question.

**A correction has actors, an instrument and a system.** *Who Gets Named* teaches that anatomy, and this case fills in all three unusually clearly. The actor is the person the credit record ranked lowest. The instrument is six hundred pages in his own hand. The system is the same correspondence by post that produced the original material, which means the correction moved along exactly the channel the error had come down.

**And one thing to notice about the timing.** Hunt began this in 1920, one year before the Bureau of American Ethnology printed the note making him responsible for the accuracy, the authenticity and the character of the contents of a different book. He was taking that responsibility seriously in writing before anyone printed it.

:::reveal What did Hunt write to Boas in June 1920, and what came of it? ||| That there were so many mistakes in the names of the masks and dishes that he thought they should be put to rights before one of them died. By his death in 1933 he had sent Boas more than 600 pages of corrections and emendations.

:::reveal Why is a correction written by the record's own maker a different kind of evidence? ||| Because it is contemporary rather than hindsight, and it comes from inside the work rather than from an outside critic, so it is part of the record instead of an argument about it.

## Vocabulary
- **Emendation**: a change made to correct a text. Hunt's six hundred pages are described as corrections and emendations.
- **Contemporary evidence**: evidence made at the time by a participant, rather than assembled later by somebody else.
- **Dependency**: the situation the 1920 letter records, in which one man knew what was wrong and the other held the position that could get it corrected in print.
- **Anatomy of a correction**: the actors, the instrument and the system a correction runs through, as taught in *Who Gets Named*.

## Sources
Bard Graduate Center. (n.d.). *Making and remaking the 1897 book*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. https://exhibitions.bgc.bard.edu/storybox/
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/`,
    },
    {
      slug: "the-story-box",
      title: "13 · The Story Box, made with U'mista",
      section: "Section 5 · The correction",
      body: `In 2019 the credit claim stopped being an opinion and became a published finding, and it did so in a building where the public could go and check it.

**The exhibition.** *The Story Box: Franz Boas, George Hunt and the Making of Anthropology* ran at the Bard Graduate Center Gallery in New York from 14 February to 7 July 2019, and afterwards at the U'mista Cultural Centre in Alert Bay, British Columbia. The dates of the Alert Bay showing are not settled by any source this course read, so none are given here. It was curated by Aaron Glass, and its designs were made by a Kwakwaka'wakw designer whom the gallery credits by name and describes as a great-granddaughter of George Hunt (Bard Graduate Center, n.d.).

**The finding, in the gallery's own words.** The exhibition page says the 1897 book "fails to address three important aspects of its making", and names one of them as "Hunt's status as a full co-author" (Bard Graduate Center, n.d.). The Story Box page on Hunt is more precise still: "While Boas credits Hunt's 'notes' on the title page and in the preface of his pivotal 1897 monograph ... Hunt is not sufficiently acknowledged as its co-author" (Goldsher & Glass, n.d.). Notice that this is not the claim that he was uncredited. It is a claim about which rung, which is the claim the documents support.

**A change of category, stated in a review.** A review published in June 2019 put it this way: "Scholars have often referred to Hunt as Boas's 'informant' or 'culture broker.' Yet *The Story Box* demonstrates that Hunt's extensive contributions to the monograph qualify him as Boas's research partner and co-author" (Pickman, 2019). Informant and culture broker are role words. Research partner and co-author are credit words. The review is describing a move from one vocabulary to the other.

**Made with, not about.** The exhibition was co-presented with the U'mista Cultural Centre and travelled there. Its designs came from a Kwakwaka'wakw designer descended from Hunt. The chairman of the U'mista Cultural Society signed a Statement of Participation for it and gave the exhibition a Kwak'wala name, which this course does not print for the reason lesson 4 sets out. That chairman is himself a great-grandson of Hunt, and his father worked with Boas from 1931 to 1942, which makes the working relationship two generations deep on the community's side. This course names no descendant, because the rule it follows is that living people are described by role and are not quoted.

**A continuing edition.** Bard's project page for *The Distributed Text* describes a critical digital edition of the 1897 book, led by Aaron Glass and Judith Berman, and refers in passing to "Boas's work with his Indigenous co-author George Hunt" (Bard Graduate Center, n.d.). The project names a Kwakwaka'wakw Editorial Committee of seven members and a representative of the Hunt family on its advisory board. The page carries no publication date, so this course treats the edition as in progress rather than finished.

**What 2019 changed, and what it did not.** It did not change a title page. Printed pages stay printed. What changed is the authority of the claim. Before the exhibition, "Hunt was a co-author" was a reasonable reading a person could hold. After it, it is a published curatorial finding, made in an exhibition co-presented with the community, with the family involved in the making. In credit terms the claim moved from argument to record, which is the only kind of move a correction can actually make.

:::reveal What does the exhibition page say the 1897 book fails to address? ||| Three important aspects of its making, one of which is Hunt's status as a full co-author.

:::reveal In credit terms, what changed in 2019? ||| Not the title page. The claim that Hunt was a co-author moved from an opinion a reader could hold to a published curatorial finding, made in an exhibition co-presented with the U'mista Cultural Centre with the family involved.

## Vocabulary
- **Co-presented**: an exhibition mounted jointly by two institutions, here a New York gallery and a Kwakwaka'wakw cultural centre.
- **Critical edition**: an edition that prints a text together with the evidence of how it was made and what was changed.
- **Culture broker**: one of the role words the 2019 review says scholars had used for Hunt, alongside informant.
- **Curatorial finding**: a claim published by a museum or gallery as the outcome of its own research, which carries more authority than a reader's opinion.

## Sources
Bard Graduate Center. (n.d.). *The Story Box: Franz Boas, George Hunt, and the making of anthropology*. https://bgc.bard.edu/exhibitions/exhibitions/88/the-story-box
Bard Graduate Center. (n.d.). *The distributed text*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. https://exhibitions.bgc.bard.edu/storybox/
Goldsher, T., & Glass, A. (n.d.). *George Hunt*. The Story Box: Franz Boas, George Hunt, and the making of anthropology. Bard Graduate Center. https://exhibitions.bgc.bard.edu/storybox/hunt/
Pickman, S. M. (2019, June 21). The Story Box: Franz Boas, George Hunt, and the making of anthropology [Exhibition review]. *History of Anthropology Review*. https://histanthro.org/`,
    },
    {
      slug: "access-on-the-communitys-terms",
      title: "14 · Access on the community's terms",
      section: "Section 5 · The correction",
      body: `The ordinary thing for a library to do with a digitised collection is to publish it. Two institutions holding thousands of pages of George Hunt's writing did something else, and the difference is the last thing this course teaches.

**Columbia.** The university's own 2023 statement is unusually plain: "The digitized images will not be published by the Libraries, but are available to community members" (Columbia University Libraries, n.d.). The library's post adds that the digitisation is being done for Kwakwaka'wakw language revitalisation groups (Althoff, 2023). Digitised and not published is a strange pair of words for a research library, and it is a deliberate pair.

**The American Philosophical Society.** At two potlatches in Alert Bay, in 2015 and in 2016, the Society gave away books of unpublished Hunt manuscripts. Its centre works with members of several Kwakwaka'wakw communities on access protocols, and it describes the manuscripts as governed by Kwakwaka'wakw protocols concerning ownership, hereditary traditions, and responsibilities surrounding different kinds of knowledge. A small selection was online as of 2018 (Carpenter, 2018).

**Two questions, two answers, and the separation is the point.** Can a credit record be corrected in public? Yes, and it has been: a catalogue record at Columbia, an exhibition in New York and Alert Bay, a critical edition in progress. Should the knowledge the record carries be published? That is not the same question, and it is not these institutions' question to answer alone. Columbia's catalogue record is public. Columbia's images are not.

**What that leaves a learner able to do, which is nearly everything.** Every claim this course rests on is public: six title pages, four prefaces, a bureau's note, a table of contents, four catalogue records, three institutional posts, an exhibition site and a published review. Almost all of it can be opened from a laptop. The manuscripts are not on that list and were never needed. A course about a credit record does not require the contents of the record in order to read it.

**This course's own line, restated for the last time.** It teaches that the knowledge exists, whose it is, and why the record about it matters, and then it stops. It prints no story, no song, no prayer, no hereditary name and no ceremonial detail.

**And what this course is still waiting for.** It was written from published institutional sources by someone who is not Kwakwaka'wakw. It is held private for that reason. Before it goes further, a Kwakwaka'wakw reader should have the authority to change or cut any part of it, including this sentence. That is the pattern this catalog uses for courses about communities the author does not belong to, and it is written here so that the hold reads as a decision rather than an oversight.

**The mechanism, one sentence wider than this case.** Wherever a record-keeper's category sits in the place where a maker's name would go, the category is what gets copied forward, and the name has to be put back afterwards, by somebody, out of evidence. That is not unique to anthropology or to this century. What is unusual here is how good the evidence is: six printed title pages, a signed bureau note, two archives, four catalogue records, six hundred pages of corrections in the maker's own hand, and a community that has been part of the correction from the start.

**The sentence to leave with.** He was credited. The useful work is in finding out as what, by whom, on which page, and what it cost.

:::reveal What did Columbia decide about the digitised images of the manuscripts? ||| That the Libraries will not publish them, though they are available to community members, and that the digitisation is being done for Kwakwaka'wakw language revitalisation groups.

:::reveal Which two questions does this lesson insist on separating? ||| Whether a credit record can be corrected in public, and whether the knowledge that record carries should be published. The answers given were yes to the first and not ours alone to the second.

## Vocabulary
- **Language revitalisation**: work to bring a language back into everyday use. Columbia names it as the purpose of the digitisation.
- **Access protocol**: an agreed rule about who may see or use material, worked out with the community whose knowledge it is.
- **Hold reason**: the written explanation for why a course stays private, naming what would have to happen before it does not.
- **Community review**: the practice of giving a reader from the community the authority to change or cut any part of a course written about them.

## Sources
Althoff, A. (2023, April 4). *Description and digitization of the George Hunt Kwak'wala ethnographic manuscripts* [Guest post; K. Schlottmann, Ed.]. Rare Book & Manuscript Library, Columbia University. Internet Archive capture, 19 January 2025.
Carpenter, B. (2018, May 1). *CNAIR stories: The Kwakwaka'wakw manuscripts of George Hunt*. American Philosophical Society. Internet Archive capture, 2024.
Columbia University Libraries. (n.d.). *Noteworthy acquisitions, digitization, and conservation for 2023*.`,
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
            prompt: "On what date did Hunt write to Boas about mistakes he wanted put right?",
            options: [
              "7 June 1920",
              "4 April 1923, the same date Columbia later published its post about the manuscripts",
              "1 May 1918, the date of the American Philosophical Society's later post",
              "14 February 2019, the opening day of the exhibition in New York",
            ],
            correctIndex: 0,
            explanation:
              "The Bard curators quote the letter in their account of the making and remaking of the 1897 book.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What phrase from the 1920 letter gives this lesson its title?",
            options: [
              "Before one of us die",
              "So far as accuracy and contents are concerned, he is responsible for the material",
              "The necessary control material for checking the reliability of the language",
              "A box in which some of your stories will be kept",
            ],
            correctIndex: 0,
            explanation:
              "Eleven words that record both urgency and dependency: neither man could fix the book alone.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "How many pages of corrections had Hunt sent Boas by the time he died?",
            options: [
              "More than 600",
              "Nearly 8,000, which is the figure Columbia gives for its whole manuscript holding",
              "Over 6,000, which is the figure the American Philosophical Society gives",
              "About 30, one for each volume of the collection at Columbia",
            ],
            correctIndex: 0,
            explanation:
              "More than 600 pages of corrections and emendations, sent between 1920 and his death in 1933.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "How many years did Hunt spend on the corrections?",
            options: [
              "Thirteen",
              "Thirty-three, the same span as the six books examined in section 1",
              "Forty-four, the length of his whole working relationship with Boas",
              "Two, ending when the Bureau published the 1921 Ethnology of the Kwakiutl",
            ],
            correctIndex: 0,
            explanation:
              "From the letter of June 1920 to his death in 1933.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Who made the earliest and most detailed correction of the 1897 book on record?",
            options: [
              "Hunt himself",
              "Franz Boas, in the preface to his 1930 book on the religion of the Kwakiutl",
              "The Bureau of American Ethnology, in its note of 1921",
              "The curators of the 2019 exhibition at the Bard Graduate Center",
            ],
            correctIndex: 0,
            explanation:
              "The man whose title page credit was for notes wrote the longest correction of the book those notes went into.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Why is a maker's own correction a different kind of evidence?",
            options: [
              "It is part of the record, not an argument about it",
              "Because it is always more accurate than a later scholar's correction",
              "Because it can be published without the permission of the original publisher",
              "Because it is written in the same language as the original material",
            ],
            correctIndex: 0,
            explanation:
              "It cannot be dismissed as hindsight, because it is contemporary, and it cannot be dismissed as an outsider's objection, because it comes from inside the work.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What dependency does the 1920 letter record?",
            options: [
              "One knew the errors, the other could get a correction printed",
              "Hunt depended on Boas for the wages that paid for his writing materials",
              "Boas depended on the Bureau of American Ethnology to approve any correction",
              "Both men depended on the U'mista Cultural Centre to hold the manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "Neither man could fix the book alone. The sentence records that, and records that the window for using both was closing.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What does this course NOT claim about the six hundred pages?",
            options: [
              "That they were printed",
              "That they were written by Hunt, since the handwriting has not been examined",
              "That they were sent to Boas, since no source describes them arriving",
              "That they were about the 1897 book rather than some other publication",
            ],
            correctIndex: 0,
            explanation:
              "Whether they were ever printed, and where they are now, is not established by anything read for this course. The Bard curators say they were sent, and that claim is attributed to them.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "In the anatomy of this correction, what is the instrument?",
            options: [
              "Six hundred pages in his own hand",
              "The catalogue record Columbia created for the manuscripts in 2023",
              "The exhibition mounted in New York and Alert Bay in 2019",
              "The note the Bureau of American Ethnology printed in 1921",
            ],
            correctIndex: 0,
            explanation:
              "The actor is the person the credit record ranked lowest, the instrument is his own writing, and the system is the same correspondence by post that produced the original.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What system did the correction travel through?",
            options: [
              "The same correspondence by post",
              "The Canadian courts, which had already heard the 1897 book as evidence",
              "The Bureau of American Ethnology's editorial office in Washington",
              "The American Philosophical Society's reading room in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "Which means the correction moved along exactly the channel the original material had come down.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What is an emendation?",
            options: [
              "A change made to correct a text",
              "A note added to a catalogue record by a later librarian",
              "A permission granted by a community for material to be published",
              "A formal apology printed at the front of a later edition",
            ],
            correctIndex: 0,
            explanation:
              "Hunt's six hundred pages are described as corrections and emendations, which are two words for two slightly different kinds of fix.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Which course teaches the anatomy of a correction that this lesson uses?",
            options: [
              "Who Gets Named",
              "Archives and Finding Aids, which teaches provenance and original order",
              "Hoodoo Complete, which teaches how to read a collector's corpus critically",
              "The Creator's Game, which teaches where a course about a nation stops",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson on who corrects a record, and with what, supplies the three-part frame: actors, instrument, system.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What is notable about the timing of Hunt starting his corrections in 1920?",
            options: [
              "It was a year before the Bureau printed its note",
              "It was the same year the potlatch ban in Canada came to an end",
              "It was ten years after Boas had stopped publishing his material",
              "It was immediately after his acquittal in a court in Victoria",
            ],
            correctIndex: 0,
            explanation:
              "He was taking responsibility for accuracy in writing before anyone printed a note assigning it to him.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Where does this course get the sentence from the 1920 letter?",
            options: [
              "From the Bard curators' account",
              "From the letter itself, read in the reading room in Philadelphia",
              "From Columbia's 2023 post about its own manuscript holdings",
              "From the 1921 preface, in which Boas quotes it at length",
            ],
            correctIndex: 0,
            explanation:
              "Nobody working on this course has read the letter, so the quotation is attributed to the curators who published it.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Who encouraged Hunt to send the corrections?",
            options: [
              "Boas",
              "The Bureau of American Ethnology, which commissioned them for a new edition",
              "The U'mista Cultural Society, which was founded for that purpose",
              "Nobody, according to the curators, who say he worked alone and unprompted",
            ],
            correctIndex: 0,
            explanation:
              "The Bard account says Boas encouraged him, and that more than 600 pages followed before Hunt's death.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "How does the length of the corrections compare with the books in this course?",
            options: [
              "Longer than some of them",
              "Shorter than all of them, which is why they were never printed",
              "Exactly the same length as the 1897 monograph",
              "Longer than all six put together",
            ],
            correctIndex: 0,
            explanation:
              "More than six hundred pages is a book-sized body of work in its own right, produced as a correction to somebody else's.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "How many years after publication did Hunt begin correcting the 1897 book?",
            options: [
              "Twenty-three",
              "Three, immediately after his arrest and acquittal in 1900",
              "Thirty-six, in the year the exhibition opened in New York",
              "One, as soon as the offprint reached him at Fort Rupert",
            ],
            correctIndex: 0,
            explanation:
              "From 1897 to the letter of June 1920.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Who is the actor in this correction, in the frame the lesson uses?",
            options: [
              "The person the record ranked lowest",
              "The publisher, who alone can reprint a corrected edition",
              "The archive, which decides what a catalogue record says",
              "The community, which had not yet been consulted in 1920",
            ],
            correctIndex: 0,
            explanation:
              "The man the title page called the maker of its notes is the person who wrote the longest correction of it.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What kind of evidence is contemporary evidence?",
            options: [
              "Made at the time by a participant",
              "Made recently, by scholars now working on the same subject",
              "Made by an institution rather than by an individual",
              "Made in more than one language, so that it can be checked",
            ],
            correctIndex: 0,
            explanation:
              "That is why Hunt's corrections cannot be waved away as hindsight, unlike a correction written a century later.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "In which year did Hunt die?",
            options: [
              "1933",
              "1931, the date the American Philosophical Society gives",
              "1920, the year he wrote to Boas about the mistakes",
              "1942, the year Franz Boas died",
            ],
            correctIndex: 0,
            explanation:
              "Bard and the Canadian Encyclopedia give 1933, and the corrections continued until then. The APS gives 1931, which lesson 4 names.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What does the lesson say a later scholar's correction is, by contrast?",
            options: [
              "An argument about a record",
              "A part of the record, with the same standing as the original",
              "A legal instrument that compels a publisher to reprint",
              "An unreliable account, since it depends on secondary sources",
            ],
            correctIndex: 0,
            explanation:
              "Written afterwards by somebody else, it argues about the record. Written by the maker at the time, it joins it.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What did the 1920 letter say was wrong with the book?",
            options: [
              "Mistakes in names",
              "Errors in the English translations printed under each line",
              "Omissions of whole chapters that had been sent but never printed",
              "The absence of his own name from the offprint title page",
            ],
            correctIndex: 0,
            explanation:
              "So many mistakes in the names of the masks and dishes that he thought they should be put to rights.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Where did The Story Box exhibition open in February 2019?",
            options: [
              "The Bard Graduate Center Gallery",
              "The U'mista Cultural Centre at Alert Bay, British Columbia",
              "Columbia University's Rare Book and Manuscript Library in New York",
              "The American Philosophical Society's museum in Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "It ran there from 14 February to 7 July 2019 and afterwards travelled to the U'mista Cultural Centre.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Why does this course give no dates for the Alert Bay showing?",
            options: [
              "No source it read settles them",
              "Because the showing was cancelled and never in fact took place",
              "Because the U'mista Cultural Centre has asked that they not be published",
              "Because the exhibition is still running there and has no closing date",
            ],
            correctIndex: 0,
            explanation:
              "The gallery's own page does not give them and the other sources disagree, so the course gives none rather than choosing one.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Who curated The Story Box?",
            options: [
              "Aaron Glass",
              "Brian Carpenter, who wrote the American Philosophical Society's 2018 post",
              "Amanda Althoff, who wrote Columbia's 2023 guest post",
              "Kathleen Mooney, who wrote the Canadian Encyclopedia entry",
            ],
            correctIndex: 0,
            explanation:
              "Glass curated the exhibition and co-authored the Story Box page about Hunt, and he co-leads the critical edition project.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What does the exhibition page say the 1897 book fails to address?",
            options: [
              "Three aspects of its making",
              "The identity of the people whose knowledge it records, none of whom it names",
              "The legal status of the potlatch in Canada at the time it was written",
              "The disagreement between Boas and the Bureau over the author line",
            ],
            correctIndex: 0,
            explanation:
              "Three important aspects of its making, one of which is Hunt's status as a full co-author.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Which of the three aspects does this course take up?",
            options: [
              "Hunt's status as a full co-author",
              "The cost of printing the plates that illustrate the volume",
              "The Bureau of American Ethnology's editorial policy in the 1890s",
              "The location of the original manuscript from which the book was set",
            ],
            correctIndex: 0,
            explanation:
              "It is the one the course's whole credit ladder is built to measure.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "How does the Story Box page on Hunt phrase the credit problem?",
            options: [
              "Not sufficiently acknowledged as co-author",
              "Entirely omitted from the book, with no mention of him anywhere in it",
              "Credited too generously, given the amount of work Boas himself did",
              "Credited correctly, since notes is an accurate description of what he supplied",
            ],
            correctIndex: 0,
            explanation:
              "It grants that Boas credits Hunt's notes on the title page and in the preface, and says that is not sufficient acknowledgement of co-authorship. A claim about which rung.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Why does the lesson stress that this is not a claim that Hunt was uncredited?",
            options: [
              "Because the documents support a claim about rank",
              "Because the curators were being careful not to criticise Boas directly",
              "Because an uncredited contributor has no legal standing to complain",
              "Because the 1897 book credits nobody at all, including Boas",
            ],
            correctIndex: 0,
            explanation:
              "The title page and the preface both name him. What is at issue is which rung he was put on, which is what the evidence can settle.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What two role words does the 2019 review say scholars had used for Hunt?",
            options: [
              "Informant and culture broker",
              "Collector and translator, the two roles the 1921 note assigns him",
              "Participant and ethnographer, the two categories argued in court in 1900",
              "Author and editor, the two names used on the Kwakiutl Texts title pages",
            ],
            correctIndex: 0,
            explanation:
              "The review says the exhibition demonstrates that his contributions qualify him as research partner and co-author, which is a move from role words to credit words.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What two credit words does the review say the exhibition establishes for Hunt?",
            options: [
              "Research partner and co-author",
              "Collector and recorder, the two verbs the Bureau used in 1921",
              "Interpreter and assistant, the roles he held before meeting Boas",
              "Editor and translator, the tasks Boas performed on the manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "Informant and culture broker are role words. Research partner and co-author are credit words. The review is describing a change of vocabulary.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Which institution co-presented the exhibition with the Bard Graduate Center?",
            options: [
              "The U'mista Cultural Centre",
              "The American Philosophical Society, which holds the Philadelphia manuscripts",
              "Columbia University Libraries, which holds the New York manuscripts",
              "The American Museum of Natural History, publisher of Kwakiutl Texts",
            ],
            correctIndex: 0,
            explanation:
              "At Alert Bay, British Columbia. The exhibition travelled there, and its society's chairman signed a Statement of Participation for it.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Who made the exhibition's designs?",
            options: [
              "A Kwakwaka'wakw designer descended from Hunt",
              "The Bard Graduate Center's in-house exhibitions department",
              "Franz Boas's descendants, working from his surviving sketches",
              "A design studio commissioned by Columbia University Libraries",
            ],
            correctIndex: 0,
            explanation:
              "The gallery credits her by name and describes her as a great-granddaughter of George Hunt. This course describes living descendants by role and does not name them.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Why does this course not print the names of Hunt's living descendants?",
            options: [
              "It describes living people by role and does not quote them",
              "Because the names are unspellable in the writing system the course uses",
              "Because the U'mista Cultural Society has asked that they be withheld",
              "Because none of the sources this course read names any of them",
            ],
            correctIndex: 0,
            explanation:
              "Bard's pages name and quote several of them. None of that reaches a lesson here, which is a stated rule rather than a gap in the research.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What did the chairman of the U'mista Cultural Society do for the exhibition?",
            options: [
              "Signed a Statement of Participation",
              "Curated the New York showing alongside the gallery's own staff",
              "Wrote the catalogue essay about the 1897 book's making",
              "Lent the manuscripts that were displayed in the first gallery",
            ],
            correctIndex: 0,
            explanation:
              "He also gave the exhibition a Kwak'wala name, which this course does not print for the reason lesson 4 sets out.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "In what years did the chairman's father work with Boas?",
            options: [
              "1931 to 1942",
              "1889 to 1933, the same years as Hunt's own work for Boas",
              "1911 to 1914, the years Hunt also assisted Edward S. Curtis",
              "1897 to 1900, the years the 1921 preface names as working years",
            ],
            correctIndex: 0,
            explanation:
              "Which makes the working relationship two generations deep on the community's side, overlapping with the last two years of Hunt's own life.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What is The Distributed Text?",
            options: [
              "A critical digital edition of the 1897 book",
              "The catalogue record Columbia created for its manuscripts in 2023",
              "The collection of Hunt's letters indexed by the American Philosophical Society",
              "A published volume of the six hundred pages of corrections",
            ],
            correctIndex: 0,
            explanation:
              "Led by Aaron Glass and Judith Berman, with a Kwakwaka'wakw Editorial Committee and a Hunt family representative on its advisory board.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "How does the project page describe Hunt in passing?",
            options: [
              "Boas's Indigenous co-author",
              "Boas's most reliable informant on the northern coast",
              "The translator of the texts Boas collected himself",
              "The man who supplied the notes for the 1897 monograph",
            ],
            correctIndex: 0,
            explanation:
              "The phrase is used as settled description rather than as an argument, which is itself a measure of how far the claim has travelled.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "How many members does the Kwakwaka'wakw Editorial Committee have?",
            options: [
              "Seven",
              "Two, one from Fort Rupert and one from Alert Bay",
              "Fourteen, one for each volume held at Columbia University",
              "None yet, since the committee is still being assembled",
            ],
            correctIndex: 0,
            explanation:
              "The project also has a representative of the Hunt family on its advisory board. This course counts them rather than listing their names.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "Why does this course treat the critical edition as in progress?",
            options: [
              "The project page carries no publication date",
              "Because the Editorial Committee has not yet been appointed",
              "Because Columbia has refused permission to publish the manuscripts",
              "Because the exhibition it grew out of closed before the edition began",
            ],
            correctIndex: 0,
            explanation:
              "A course that said the edition had been published would be asserting something the page does not say.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What did 2019 change about the co-authorship claim?",
            options: [
              "Its authority",
              "The wording of the 1897 title page, which the gallery had reprinted",
              "The catalogue records held by the Internet Archive for the 1897 book",
              "The legal ownership of the manuscripts held in New York and Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "Before, it was a reasonable reading a person could hold. After, it is a published curatorial finding made with the community. It moved from argument to record.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What did 2019 NOT change?",
            options: [
              "A printed title page",
              "The vocabulary scholars use when writing about Hunt",
              "The authority of the claim that Hunt was a co-author",
              "Whether the Bard Graduate Center had published a finding",
            ],
            correctIndex: 0,
            explanation:
              "Printed pages stay printed. The only move a correction can actually make is to change the standing of the claim, and that is the move that was made.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What is a curatorial finding?",
            options: [
              "A claim a museum publishes from its own research",
              "An object a curator discovers in a collection nobody had catalogued",
              "A decision by a gallery about which items to display",
              "A legal determination about who owns a contested collection",
            ],
            correctIndex: 0,
            explanation:
              "It carries more authority than a reader's opinion, which is why the 2019 exhibition changed the standing of the co-authorship claim.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What is a critical edition?",
            options: [
              "One that prints the evidence of how a text was made",
              "An edition published with a hostile review printed alongside it",
              "The first edition of a book, before any later corrections were added",
              "An edition approved by the community the text describes",
            ],
            correctIndex: 0,
            explanation:
              "It prints the text together with the record of what was changed and by whom, which is exactly what this record needs.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What does Columbia say it will do with the digitised images of the manuscripts?",
            options: [
              "Not publish them",
              "Publish them in full alongside the new catalogue record created in 2023",
              "Sell reproductions to fund further conservation of the volumes",
              "Transfer them to the American Philosophical Society for publication",
            ],
            correctIndex: 0,
            explanation:
              "The digitized images will not be published by the Libraries, but are available to community members. Digitised and not published is a deliberate pair of words.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Who are the digitised Columbia images available to?",
            options: [
              "Community members",
              "Any reader with a Columbia University library card",
              "Scholars who apply in writing and give a reason for access",
              "Nobody at all, since digitisation is not yet complete",
            ],
            correctIndex: 0,
            explanation:
              "The library's post names Kwakwaka'wakw language revitalisation groups as the purpose of the digitisation.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What purpose does Columbia give for digitising the manuscripts?",
            options: [
              "Language revitalisation",
              "Conservation, since handling the fragile originals damages them",
              "Publication of a scholarly edition with English translations",
              "Sale of high-resolution reproductions to other research libraries",
            ],
            correctIndex: 0,
            explanation:
              "The pages are bilingual, with English under Kwak'wala, which is what makes them useful for bringing a language back into everyday use.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What did the American Philosophical Society do at Alert Bay in 2015 and 2016?",
            options: [
              "Gave away books of unpublished manuscripts",
              "Opened a permanent reading room for community researchers",
              "Purchased additional Hunt material from private collectors",
              "Filmed the manuscripts for an exhibition that opened in New York",
            ],
            correctIndex: 0,
            explanation:
              "At two potlatches in those years, according to its own 2018 post, which also describes the protocol work its centre does.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is the ordinary thing for a library to do with a digitised collection?",
            options: [
              "Publish it",
              "Restrict it to readers who visit the building in person",
              "Transfer ownership of it to the community it came from",
              "Sell it to whichever institution offers the most for it",
            ],
            correctIndex: 0,
            explanation:
              "Which is what makes both institutions' decisions here worth teaching. Neither did the ordinary thing.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What are the two questions this lesson insists on separating?",
            options: [
              "Correcting the record, and publishing the knowledge",
              "Who owns the pages, and who paid for the digitisation",
              "Which title page is right, and which catalogue record is right",
              "Whether Hunt was an author, and whether Boas was an editor",
            ],
            correctIndex: 0,
            explanation:
              "Can a credit record be corrected in public? Yes, and it has been. Should the knowledge it carries be published? That is not the same question, and not these institutions' alone to answer.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Which of Columbia's two things is public?",
            options: [
              "The catalogue record",
              "The digitised images, which anyone may download",
              "Both, since a catalogue record implies public access to the item",
              "Neither, since the collection remains closed to all readers",
            ],
            correctIndex: 0,
            explanation:
              "The catalogue record is public and the images are not, which is the separation of the two questions worked out in practice.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is on the list of public evidence this course rests on?",
            options: [
              "Title pages, prefaces, catalogue records and institutional posts",
              "The manuscripts at Columbia and the American Philosophical Society",
              "The six hundred pages of corrections Hunt sent between 1920 and 1933",
              "The court record of the 1900 case heard in British Columbia",
            ],
            correctIndex: 0,
            explanation:
              "Six title pages, four prefaces, a bureau's note, a table of contents, four catalogue records, three institutional posts, an exhibition site and a published review.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Why were the manuscripts never needed for this course?",
            options: [
              "Reading a credit record does not require its contents",
              "Because the manuscripts contain no information about who wrote them",
              "Because the printed books reproduce the manuscripts in full anyway",
              "Because the course covers only the period before Hunt began writing",
            ],
            correctIndex: 0,
            explanation:
              "Everything the course rests on is public and can be opened from a laptop. The access-limited material was never on the list.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Why is this course held private?",
            options: [
              "It was written by someone outside the community",
              "Because the sources it uses are not available to the public",
              "Because the Bard Graduate Center holds copyright in the exhibition text",
              "Because private courses carry no series code in this catalog",
            ],
            correctIndex: 0,
            explanation:
              "It was written from published institutional sources by someone who is not Kwakwaka'wakw, and a Kwakwaka'wakw reader should have the authority to change or cut any part of it first.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What authority should a community reader have over this course?",
            options: [
              "To change or cut any part of it",
              "To approve the quiz questions before they are shown to learners",
              "To decide which category the course is listed under",
              "To review the sources list without altering the lessons",
            ],
            correctIndex: 0,
            explanation:
              "That is the pattern this catalog uses for courses about communities the author does not belong to, and it is stated so the hold reads as a decision.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is the wider mechanism this lesson names?",
            options: [
              "A record-keeper's category sits where the maker's name would go",
              "Archives refuse access to material they know to be wrongly catalogued",
              "Publishers move an author's name down when a book sells poorly",
              "Communities lose their records when a language stops being spoken",
            ],
            correctIndex: 0,
            explanation:
              "The category is what gets copied forward, and the name has to be put back afterwards, by somebody, out of evidence.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What does the lesson say is unusual about this particular case?",
            options: [
              "How good the evidence is",
              "That the record-keeper eventually apologised in print",
              "That the community never learned what had been published",
              "That no correction of any kind has ever been attempted",
            ],
            correctIndex: 0,
            explanation:
              "Six printed title pages, a signed bureau note, two archives, four catalogue records, six hundred pages of corrections in the maker's own hand, and a community involved in the repair.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is the sentence the course says to leave with?",
            options: [
              "He was credited",
              "He was erased from the record of anthropology entirely",
              "Boas stole the work of his Indigenous collaborator",
              "The manuscripts should be published in full without delay",
            ],
            correctIndex: 0,
            explanation:
              "The useful work is in finding out as what, by whom, on which page, and what it cost.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is an access protocol?",
            options: [
              "An agreed rule about who may see or use material",
              "A library's technical standard for scanning fragile documents",
              "A legal contract transferring ownership from a donor to an archive",
              "A checklist an archivist follows when accepting a new collection",
            ],
            correctIndex: 0,
            explanation:
              "Worked out with the community whose knowledge the material is. The American Philosophical Society names Kwakwaka'wakw protocols as governing this collection.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is a hold reason?",
            options: [
              "The written explanation for why a course stays private",
              "The archival note explaining why a collection is closed to readers",
              "The reason a publisher delays a book's release date",
              "The condition a donor attaches to a gift of manuscripts",
            ],
            correctIndex: 0,
            explanation:
              "It names what would have to happen before the course was not private, which is what keeps a hold from turning into a quiet omission.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "How much of the American Philosophical Society material was online as of 2018?",
            options: [
              "A small selection",
              "All of it, fully catalogued and searchable by page",
              "None of it, since digitisation had not yet begun",
              "Everything except the correspondence with Boas",
            ],
            correctIndex: 0,
            explanation:
              "Which is another reason a course about this record has to be built on printed books and catalogue records rather than on manuscript images.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What does this course print from the manuscripts and the books?",
            options: [
              "No stories, songs, prayers, hereditary names or ceremonial detail",
              "Only the passages the American Philosophical Society has already put online",
              "Only the passages needed to show what the corrections were about",
              "Everything that appears in the published books, since those are public",
            ],
            correctIndex: 0,
            explanation:
              "It teaches that the knowledge exists, whose it is, and why the record about it matters, and then it stops.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Which institution describes the manuscripts as governed by community protocols?",
            options: [
              "The American Philosophical Society",
              "The Bard Graduate Center, which curated the 2019 exhibition",
              "The Internet Archive, which hosts the scanned printed books",
              "The Bureau of American Ethnology, in its 1921 note",
            ],
            correctIndex: 0,
            explanation:
              "Protocols concerning ownership, hereditary traditions, and responsibilities surrounding different kinds of knowledge, worked out with several Kwakwaka'wakw communities.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What does the course say a learner can do with almost all of its evidence?",
            options: [
              "Open it from a laptop",
              "Request it by appointment from either of the two holding archives",
              "Read it only in the gallery that mounted the 2019 exhibition",
              "Obtain it through a community member with access rights",
            ],
            correctIndex: 0,
            explanation:
              "Title pages, prefaces, a bureau's note, catalogue records, institutional posts, an exhibition site and a review are all public.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 40 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "notes-made-by-mr-george-hunt-final",
      title: "Final assessment · Notes Made by Mr. George Hunt",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which sentence best states this course's central finding about George Hunt?",
            options: [
              "He was credited, at a different rank in almost every book",
              "He was never named anywhere in any of the six publications examined",
              "He was named as the sole author of every book he wrote for Boas",
              "He was credited identically on all six title pages between 1897 and 1930",
            ],
            correctIndex: 0,
            explanation:
              "Author or co-author on three publications, notes in 1897, data in 1921, absent in 1910 and 1930. Not credited is a complaint; credited as what is a finding.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does the 1897 inner title page say about Hunt?",
            options: [
              "Notes made by Mr. George Hunt",
              "Data collected by George Hunt, printed above the author line",
              "Written in Kwak'wala by George Hunt and translated by Franz Boas",
              "Nothing, since only the preface mentions him at all",
            ],
            correctIndex: 0,
            explanation:
              "Based on personal observations and on notes made by Mr. George Hunt. The offprint title page names Boas alone.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "What does a title page claim, according to this course?",
            options: [
              "Who is answerable for the book",
              "How the book was made and by which methods",
              "Which archive holds the manuscript behind the book",
              "Which community the book's contents came from",
            ],
            correctIndex: 0,
            explanation:
              "And it becomes the machine-readable fact that libraries, citations and search engines copy forward long after everyone involved is dead.",
            sourceLessonSlug: "read-the-title-page-first",
          },
          {
            prompt: "Which line does the 1921 title page carry above the author line?",
            options: [
              "Based on data collected by George Hunt",
              "With the collaboration of Mr. George Hunt of Fort Rupert, British Columbia",
              "Recorded in Kwak'wala and translated into English by George Hunt",
              "Prepared for the press by F. W. Hodge, Ethnologist-in-Charge",
            ],
            correctIndex: 0,
            explanation:
              "Three stacked lines: the title, that line, then by Franz Boas. Data in 1921 where the 1897 page said notes.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Why does this course attribute rather than assert the Kwakiutl Texts credit?",
            options: [
              "Nobody in this build has read the title page",
              "Because the volumes were published anonymously and carry no author line",
              "Because the curators and the catalogues contradict each other about it",
              "Because the Kwakwaka'wakw Editorial Committee has asked that it be withheld",
            ],
            correctIndex: 0,
            explanation:
              "Four catalogue records and the exhibition's curators say Hunt is named there as author or co-author. The scans returned authorisation errors, so it stays an open research check.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "Which 1906 publication carries Hunt's name first, on his own piece?",
            options: [
              "A paper in the Boas Anniversary Volume",
              "The 1897 monograph, reprinted that year as a separate offprint",
              "The Bureau of American Ethnology's thirty-fifth annual report",
              "The Columbia University Contributions to Anthropology, volume two",
            ],
            correctIndex: 0,
            explanation:
              "The table of contents reads George Hunt, The Rival Chiefs. A Kwakiutl Story, page 108. This course says nothing about what the piece contains.",
            sourceLessonSlug: "four-rungs-and-two-absences",
          },
          {
            prompt: "What does the Bureau's 1921 note make Hunt responsible for?",
            options: [
              "The accuracy, authenticity and character of the contents",
              "The typesetting, proofreading and correction of the printed plates",
              "The cost of the fieldwork that produced the material in the paper",
              "The translation of the Kwak'wala into readable English prose",
            ],
            correctIndex: 0,
            explanation:
              "Signed by F. W. Hodge, Ethnologist-in-Charge, in a volume whose author line names only Boas.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which authorship criterion does the 1921 volume satisfy for Hunt?",
            options: [
              "Accountability",
              "Drafting, since the note says he wrote the finished text of the paper",
              "Approval, since the note says he read and approved the final version",
              "Conception, since the note says he designed the study himself",
            ],
            correctIndex: 0,
            explanation:
              "The fourth ICMJE criterion, taught in Who Gets Named. Two documents in the volume make him answerable, and the title page names someone else as author.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "What asymmetry does the 1921 arrangement create?",
            options: [
              "Blame runs one way and credit the other",
              "The community is named but the individual is not",
              "The preface is signed but the title page is anonymous",
              "The catalogue is accurate but the printed book is not",
            ],
            correctIndex: 0,
            explanation:
              "A reader who found an error was told whose error it was. A reader who wanted to cite the book was told whose book it was.",
            sourceLessonSlug: "responsible-for-the-contents",
          },
          {
            prompt: "Which dates does this course use for Hunt, and what does it do about the disagreement?",
            options: [
              "1854 to 1933, and it names the source that says otherwise",
              "1856 to 1931, and it treats the other two sources as errors",
              "It gives no dates at all, because three sources disagree",
              "It averages the two pairs and prints the midpoint",
            ],
            correctIndex: 0,
            explanation:
              "Bard and the Canadian Encyclopedia agree on 1854 to 1933. The American Philosophical Society gives 1856 to 1931, and the course says so.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "Why does this course print no Kwak'wala personal names?",
            options: [
              "The spellings are unsettled and the family has not been asked",
              "Because the names are restricted knowledge under Canadian law",
              "Because no published source about Hunt contains any such name",
              "Because the course's writing system cannot represent the characters",
            ],
            correctIndex: 0,
            explanation:
              "Published sources spell Hunt's name at least three ways and his mother's two ways. The omission is a stated decision, and lesson 4 teaches it as a finding about the record.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "What is wrong with describing Hunt as Tlingit-born?",
            options: [
              "He was born at Fort Rupert to a Tlingit mother and a British father",
              "He was born in Southeast Alaska but to a Kwagu'ł mother",
              "He was born in Victoria, where his father's company had its offices",
              "Nothing, since every source this course read uses that description",
            ],
            correctIndex: 0,
            explanation:
              "The short form of a life circulates faster than the long one, which is how a wrong summary survives.",
            sourceLessonSlug: "fort-rupert-and-a-record-that-varies",
          },
          {
            prompt: "What does the 1910 preface call the material Boas gathered himself?",
            options: [
              "The necessary control material",
              "The definitive version, against which Hunt's pages count as drafts",
              "Supplementary notes, gathered to fill the gaps Hunt had left",
              "The Jesup corpus, meaning everything the expedition published",
            ],
            correctIndex: 0,
            explanation:
              "For checking the reliability of the language and form of the tales recorded by Mr. Hunt. It credits him and puts his work under test in one phrase.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What kind of working system do Boas's prefaces describe?",
            options: [
              "Training and then correspondence",
              "A salaried museum post with fixed hours and annual reports",
              "A series of interviews conducted at Fort Rupert each summer",
              "A publishing contract paying Hunt for each completed volume",
            ],
            correctIndex: 0,
            explanation:
              "Teach the writing in 1893, work together in 1897 and 1900, several weeks in New York in 1901, then records transmitted by post for three decades.",
            sourceLessonSlug: "the-necessary-control-material",
          },
          {
            prompt: "What does Columbia's 2023 post say about the manuscripts Boas gave the university?",
            options: [
              "He did not write them",
              "He wrote them all himself from notes Hunt had dictated",
              "He purchased them from Hunt's estate after 1933",
              "He never gave them to Columbia, which bought them at auction",
            ],
            correctIndex: 0,
            explanation:
              "He edited and re-sorted them and prepared them for publication, but he did not write them. The pages bear George Hunt's handwriting.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What did Columbia create for these materials for the first time in 2023?",
            options: [
              "An electronic catalogue record",
              "A published English translation of all fourteen volumes",
              "A public exhibition of the manuscripts in its main library",
              "A conservation report on the physical state of each volume",
            ],
            correctIndex: 0,
            explanation:
              "For about a century the only finding path to thousands of pages of Hunt's handwriting ran through the name of the man who gave them.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "What question does provenance answer, and which does it leave open?",
            options: [
              "It answers who gave this, not who made this",
              "It answers who made this, not who owns it now",
              "It answers where an item is shelved, not what it contains",
              "It answers when an item arrived, not who paid for it",
            ],
            correctIndex: 0,
            explanation:
              "A catalogue has to answer both. At Columbia the second question had no printed answer until 2023.",
            sourceLessonSlug: "filed-as-boass-gift",
          },
          {
            prompt: "How does the American Philosophical Society describe its Hunt holding?",
            options: [
              "Among the largest bodies of work by an Indigenous person it holds",
              "A minor appendix to the far larger Franz Boas papers",
              "The oldest manuscript collection in any American learned society",
              "A collection of little research value until it is fully translated",
            ],
            correctIndex: 0,
            explanation:
              "Over 6000 pages, ranked by the holding institution as a body of work by one person. Read it as a credit line, because that is what it is.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What does the American Philosophical Society say governs the manuscripts?",
            options: [
              "Kwakwaka'wakw protocols",
              "United States copyright law, applied to all of its holdings",
              "The terms Boas set out in his will of 1942",
              "Nothing, since ownership passed outright to the Society",
            ],
            correctIndex: 0,
            explanation:
              "Protocols concerning ownership, hereditary traditions and responsibilities surrounding different kinds of knowledge, worked out with several Kwakwaka'wakw communities.",
            sourceLessonSlug: "six-thousand-pages-in-philadelphia",
          },
          {
            prompt: "What do the four Internet Archive catalogue records show?",
            options: [
              "Four different answers, one of them a different man",
              "One consistent answer that matches all six title pages",
              "That every catalogue names Hunt as sole author of the 1897 book",
              "That no catalogue has ever recorded Hunt's name at all",
            ],
            correctIndex: 0,
            explanation:
              "The Getty-sourced 1897 record names George M. Hunt, born 1884. The others rank the right man three different ways.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Which catalogue record ranks Hunt higher than the printed book does?",
            options: [
              "The 1921 volume's, which lists him as a creator",
              "The Getty-sourced 1897 record, which names him first",
              "The 1975 reprint record, which puts him in the creator field",
              "The Harvard-sourced 1897 record, which calls him the author",
            ],
            correctIndex: 0,
            explanation:
              "The title page says data collected by, and the record lists Boas and Hunt as creators. A catalogue can be more generous than a page.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "What practical rule does the catalogue lesson give?",
            options: [
              "If the credit matters, open the book",
              "Prefer whichever record the largest institution published",
              "Accept the version that appears in the greatest number of records",
              "Treat the most recent record as correcting all earlier ones",
            ],
            correctIndex: 0,
            explanation:
              "When you look up a book you are almost always reading a record, not the book. If you cannot open the book, name the record you read and who made it.",
            sourceLessonSlug: "four-catalogue-records",
          },
          {
            prompt: "Why is replacing by Boas with by Hunt an incomplete correction?",
            options: [
              "The pages carry many people's knowledge, not one man's",
              "Because Hunt did not write the pages, according to the archives",
              "Because a printed title page can never be corrected at all",
              "Because Boas did the editing, which counts as authorship",
            ],
            correctIndex: 0,
            explanation:
              "The American Philosophical Society says the knowledge and words are not just Hunt's but that of numerous Kwakwaka'wakw people whose expertise he recorded.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What does this course teach and where does it stop?",
            options: [
              "That the knowledge exists, whose it is, and why the record matters",
              "The contents of the manuscripts, with the ceremonial detail removed",
              "The stories in the 1897 book, retold in the course's own words",
              "The hereditary names, since the correction cannot be explained without them",
            ],
            correctIndex: 0,
            explanation:
              "It prints no story, no song, no prayer, no hereditary name and no ceremonial detail. A course that reproduced the content in order to object to the taking would be doing the taking again.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What second job does a role word like informant do?",
            options: [
              "It makes the people it names interchangeable",
              "It records what each person was paid for their information",
              "It proves that the person consented to be recorded",
              "It establishes that the person belonged to the community",
            ],
            correctIndex: 0,
            explanation:
              "A category built for the collector's convenience will not preserve what it was not built to preserve.",
            sourceLessonSlug: "not-only-hunts-words",
          },
          {
            prompt: "What happened to the 1897 book in 1900?",
            options: [
              "It was entered in court as evidence of what Hunt was",
              "It was withdrawn from sale at the request of the Canadian authorities",
              "It was reprinted with Hunt's name added to the offprint title page",
              "It was sent to Fort Rupert so that the community could correct it",
            ],
            correctIndex: 0,
            explanation:
              "After Hunt was arrested for potlatching, Boas mailed a copy to Victoria to be entered as evidence that he was there as an ethnographer and not a participant. He was acquitted.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "What general lesson does the 1900 episode carry?",
            options: [
              "A credit line can be a legal identity",
              "A court can order a publisher to change a title page",
              "A book is admissible evidence in any jurisdiction",
              "An arrest always follows from a published description",
            ],
            correctIndex: 0,
            explanation:
              "Ethnographer or participant, observer or subject, author or informant. Which side of the line a record puts you on can decide whether a law applies to you.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "Why does the course stop short of saying the book saved him?",
            options: [
              "Nobody here has read the court record",
              "Because Bard's account says the judge ignored the book entirely",
              "Because the book arrived after the verdict had been given",
              "Because saying so would credit Boas rather than Hunt",
            ],
            correctIndex: 0,
            explanation:
              "The record shows the book was entered as evidence of a category and that an acquittal followed. The difference between those two sentences is the difference between a finding and a story.",
            sourceLessonSlug: "the-book-as-evidence",
          },
          {
            prompt: "How does this course handle Columbia's report of a note by Hunt about a broken promise?",
            options: [
              "It names the reporter, asserts nothing, and files a check",
              "It quotes the note as the strongest evidence in the course",
              "It omits the matter entirely, since the page has not been read",
              "It treats the report as settled because Columbia is reliable",
            ],
            correctIndex: 0,
            explanation:
              "A claim you have only seen quoted is a claim about a quotation. Name who reports it, say what you have not seen, and do not build on it.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "Which two permissions does the course insist are different?",
            options: [
              "Consent to record and consent to publish",
              "Consent to translate and consent to reprint",
              "Consent to digitise and consent to catalogue",
              "Consent to exhibit and consent to photograph",
            ],
            correctIndex: 0,
            explanation:
              "In this record the first is thinly documented and the second is thinner still, which is why the reported note would matter so much if it could be read.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "What does the April 1897 letter to Kwagu'ł chiefs describe?",
            options: [
              "A box in which material would be kept",
              "A contract setting out payment for each page recorded",
              "A request for permission to publish the following year",
              "An apology for material already printed without consent",
            ],
            correctIndex: 0,
            explanation:
              "It uses the language of keeping rather than publishing, and the thing described is a container, which is a promise about storage and not about circulation.",
            sourceLessonSlug: "who-decides-what-is-published",
          },
          {
            prompt: "How many pages of corrections had Hunt sent Boas by his death?",
            options: [
              "More than 600",
              "Nearly 8,000, matching Columbia's count of its manuscript holding",
              "Over 6,000, matching the count the American Philosophical Society gives",
              "Fourteen volumes, one for each volume Columbia holds",
            ],
            correctIndex: 0,
            explanation:
              "Sent between his letter of June 1920 and his death in 1933, after Boas encouraged him.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "Why is a correction by the record's own maker a different kind of evidence?",
            options: [
              "It is part of the record rather than an argument about it",
              "It is longer than any correction a later scholar could write",
              "It carries the publisher's authority as well as the author's",
              "It is the only kind of correction a library will catalogue",
            ],
            correctIndex: 0,
            explanation:
              "It cannot be dismissed as hindsight, because it is contemporary, and it cannot be dismissed as an outsider's objection, because it comes from inside the work.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What does the phrase before one of us die record about the situation in 1920?",
            options: [
              "Urgency and a dependency between the two men",
              "That Hunt intended to publish the corrections himself",
              "That Boas had refused to accept any further material",
              "That the Bureau had set a deadline for the 1921 volume",
            ],
            correctIndex: 0,
            explanation:
              "Hunt knew what was wrong with the book. Boas held the position that could get a correction printed. Neither could fix it alone.",
            sourceLessonSlug: "six-hundred-pages-of-corrections",
          },
          {
            prompt: "What does the 2019 exhibition page say the 1897 book fails to address?",
            options: [
              "Three aspects of its making, including Hunt's status as a full co-author",
              "The names of every Kwakwaka'wakw person whose knowledge it records",
              "The Canadian law under which the potlatch was prohibited",
              "The disagreement between Boas and the Bureau about the author line",
            ],
            correctIndex: 0,
            explanation:
              "It is a claim about which rung, not a claim that he was uncredited, which is what makes it the claim the documents can support.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "In credit terms, what did the 2019 exhibition change?",
            options: [
              "The authority of the co-authorship claim",
              "The wording of the 1897 title page in all surviving copies",
              "The catalogue records held for the book by the Internet Archive",
              "The ownership of the manuscripts held in New York and Philadelphia",
            ],
            correctIndex: 0,
            explanation:
              "It moved from a reading a person could hold to a published curatorial finding, made in an exhibition co-presented with the U'mista Cultural Centre with the family involved.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What does the course mean by saying the exhibition was made with rather than about?",
            options: [
              "The community co-presented it and the family took part",
              "It was assembled entirely from objects owned by the gallery",
              "It described the community without quoting anyone from it",
              "It was curated by a committee of anthropologists from two universities",
            ],
            correctIndex: 0,
            explanation:
              "It travelled to the U'mista Cultural Centre, its designs came from a Kwakwaka'wakw designer descended from Hunt, and the Society's chairman signed a Statement of Participation.",
            sourceLessonSlug: "the-story-box",
          },
          {
            prompt: "What did Columbia decide about the digitised images?",
            options: [
              "Not to publish them, while making them available to community members",
              "To publish them in full alongside the new catalogue record",
              "To keep them closed to everyone, including community members",
              "To transfer them to the American Philosophical Society",
            ],
            correctIndex: 0,
            explanation:
              "Digitised and not published is a deliberate pair of words, and the digitisation is aimed at Kwakwaka'wakw language revitalisation groups.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "Which two questions does the course's last lesson separate?",
            options: [
              "Correcting a credit record, and publishing the knowledge it carries",
              "Who owns the pages, and who paid for their conservation",
              "Which title page is right, and which catalogue record is right",
              "Whether Hunt wrote the pages, and whether Boas edited them",
            ],
            correctIndex: 0,
            explanation:
              "The institutions answered yes to the first and treated the second as not theirs alone to decide. Columbia's catalogue record is public; its images are not.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
          {
            prompt: "What is the wider mechanism the course names at the end?",
            options: [
              "A record-keeper's category standing where a maker's name would go",
              "An archive refusing access to material it knows is miscatalogued",
              "A publisher demoting an author whose book sells poorly",
              "A community losing its records when its language falls out of use",
            ],
            correctIndex: 0,
            explanation:
              "The category is what gets copied forward, and the name has to be put back afterwards, by somebody, out of evidence. Here the evidence is unusually good.",
            sourceLessonSlug: "access-on-the-communitys-terms",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `notes-made-by-mr-george-hunt`.
//
//  A. key "hunt-kwakiutl-texts-title-page" · severity HIGH · lesson "four-rungs-and-two-absences"
//     title: How is George Hunt's credit actually set in type on the Kwakiutl Texts title pages?
//     quote: "Nobody in this course has read the printed title page."
//     claim: Four catalogue records (AMNH Digital Library handles 2246/23 and 2246/22, Canadiana,
//            the Online Books Page, and Internet Archive kwakiutltextssec0000boas) and the Bard
//            curators state Hunt is named there as author or co-author. The course ATTRIBUTES this
//            and never asserts it.
//     stakes: This is the TOP RUNG of the course's credit ladder. If the page sets Hunt in smaller
//            type, or omits him from the first series, lesson 2's count of "author or co-author on
//            three publications" needs revising.
//     needs: the title pages of Kwakiutl Texts (1902-1905) and Kwakiutl Texts: Second Series (1906),
//            read as printed: same size type as Boas or smaller, joined by "and" or set on a
//            separate line.
//     where: AMNH Digital Library, handles 2246/23 and 2246/22, downloaded in a BROWSER (the API
//            refuses anonymous requests with HTTP 401; HathiTrust, BHL and Gallica returned 403; the
//            first series is not on the Internet Archive). BAM has this on his manual list.
//
//  B. key "hunt-note-on-a-broken-promise" · severity medium · lesson "who-decides-what-is-published"
//     quote: "Columbia reports such a note, and ... what Hunt consented to have published is an
//            open question."
//     claim: Columbia's 2023 post reports a note in which Hunt accuses Boas of publishing
//            information he had promised not to make public. The post does not identify the page.
//     stakes: It would be the only evidence in this record where the person being published objects
//            in his own hand while both men were alive. Nothing in the course rests on it.
//     needs: the volume and page in the George Hunt Kwak'wala ethnographic manuscripts, and the
//            wording as written.
//     where: Columbia University Rare Book & Manuscript Library; ask RBML which volume.
//
//  C. key "hunt-1929-medal-letter" · severity low · lesson "who-decides-what-is-published"
//     claim: Columbia's 2023 post quotes a January 1929 letter in which Hunt writes that he thinks
//            Boas should get him a medal for these writings. The letter is at the APS; not read here.
//     needs: the letter itself, with its date and full sentence.
//     where: American Philosophical Society, Hunt and Boas correspondence (the APS's 2018 post
//            records an index to a correspondence of more than 1000 pages).
//
//  D. key "hunt-birth-and-death-dates" · severity medium · lesson "fort-rupert-and-a-record-that-varies"
//     quote: "The American Philosophical Society ... gives 1856 to 1931."
//     claim: Bard and the Canadian Encyclopedia give 1854-1933 (the Encyclopedia gives 14 February
//            1854 at Fort Rupert and a death in September 1933). The APS gives 1856-1931. The course
//            uses 1854-1933 and names the disagreement.
//     needs: a baptismal, census, Hudson's Bay Company post or vital record naming the year.
//     where: British Columbia vital statistics; Fort Rupert post records; the APS's own authority
//            record for the collection.
//
//  E. key "columbia-hunt-page-and-volume-count" · severity low · lesson "filed-as-boass-gift"
//     quote: "Two pages from one university, two counts, two volume figures."
//     claim: The RBML post says nearly 8,000 pages in 14 volumes; Columbia University Libraries'
//            2023 acquisitions list says about 8,500 pages in thirty volumes. Both are printed.
//     needs: the figure in the finding aid itself ("George Hunt Kwak'wala ethnographic manuscripts,
//            1890s-1930s"), whose call number is also not known here (the live page serves a bot
//            check and was not opened).
//     where: Columbia RBML finding aid.
//
//  F. key "story-box-umista-dates" · severity low · lesson "the-story-box"
//     quote: "The dates of the Alert Bay showing are not settled by any source this course read."
//     claim: The BGC exhibition page gives 14 February to 7 July 2019 for the New York showing and
//            says the exhibition was also at the U'mista Cultural Centre, without dates. A Gale
//            record's title gives 20 July to 24 October 2019; a search summary gave 26 October.
//     needs: the U'mista Cultural Centre's own announcement of its run.
//     where: U'mista Cultural Centre, Alert Bay; the BGC exhibition archive.
//
//  G. key "hunt-600-pages-of-corrections-whereabouts" · severity medium · lesson "six-hundred-pages-of-corrections"
//     quote: "Whether those six hundred pages were ever printed, and where they are now, is not
//            established by anything read for this course."
//     claim: Bard states that by his death in 1933 Hunt had sent Boas more than 600 pages of
//            corrections and emendations. Where they are held, and whether any were published, is
//            not stated in anything fetched.
//     needs: the archival location (APS, Columbia, or the AMNH), and whether The Distributed Text
//            project has published or will publish them.
//     where: The Distributed Text project (Bard Graduate Center); APS CNAIR; Columbia RBML.
//
//  H. key "hunt-1900-potlatching-case-record" · severity low · lesson "the-book-as-evidence"
//     quote: "It does not show what the court found decisive, because nobody in this course has read
//            the court record."
//     claim: Bard records that after Hunt's arrest for potlatching, Boas mailed a copy of the 1897
//            book to a colleague in Victoria to be entered in court as evidence that Hunt was there
//            as an "ethnographer" and not a "participant", and that Hunt was acquitted.
//     needs: the court record, or a contemporary newspaper report, naming the charge and the reason
//            for the acquittal.
//     where: British Columbia Archives, Victoria; 1900 Victoria and Vancouver newspapers.
//
// RESOLVED OR DELIBERATELY NOT PRINTED (so NO check is needed):
//  - Hunt's Kwak'wala name, his mother's names and the exhibition's Kwak'wala name: NOT PRINTED, by
//    BAM's confirmed A6 condition. Lesson 4 states the omission as a decision. Only the family can
//    settle the forms, and that is a question for a Kwakwaka'wakw reviewer, not a research check.
//  - His father's nationality: the course writes "British" citing Bard and names the other three
//    words the sources use (Scotch, Scottish, English), so nothing is asserted past the evidence.
//  - "Not credited": corrected in lesson 1 and taught as the course's opening move.
//  - plans/83's claim that only the SECOND series credited him: corrected in lesson 2 from Bard and
//    the catalogue records (both series, plus "The Rival Chiefs" under his own name).
//  - plans/83's "Tlingit-born": corrected in lesson 4 (Tlingit mother, British father, born at Fort
//    Rupert).
//  - plans/83's "now digitised at the APS and Columbia": corrected in lesson 14 (Columbia's images
//    will not be published; the APS had a small selection online in 2018).
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// FOR THE REGISTERING AGENT (outside this file). I did not edit any shared registry.
//
//  REGISTRATION BLOCK for scripts/seed-courses.ts:
//    slug:              "notes-made-by-mr-george-hunt"
//    title:             "Notes Made by Mr. George Hunt: Six Title Pages, an Archive, and a Correction"
//    module/export:     GEORGE_HUNT_COURSE from scripts/data/notes-made-by-mr-george-hunt-course.ts
//    category:          "Culture & History"
//    additionalCategories: none
//    series:            NONE. No seriesCode, no seriesPosition, no seriesTrack (BAM, 2026-09-19:
//                       private courses do not carry CREDIT codes). The brief's proposed CREDIT W2
//                       slot is NOT used.
//    price:             0
//    priceType:         "free"
//    visibility:        "private"          // insert-only: right the FIRST time or a re-seed cannot fix it
//    publishHoldReason: "Private study (plans/83 E-04). Built from published institutional sources
//                       only; prints no manuscript content. Held pending review by a Kwakwaka'wakw
//                       reader (proposed: through the U'mista Cultural Centre, which co-presented
//                       The Story Box), who should have the authority to change or cut any part."
//
//  CITATIONS: add `notes-made-by-mr-george-hunt` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block, so
//    `pnpm check:citations` should not see a zero-citation staged course.
//
//  STANDARDS: this is a primary-source history course (sourcing, corroboration, chronology,
//    claim-versus-evidence, and reading a document against a catalogue record), so per the repo rule
//    it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped it needs a
//    BACKLOG line in scripts/check-standards-coverage.ts.
//
//  SERIES CODES: nothing to check, because the course carries no code. Confirm check-series-codes
//    does not require one for a private course.
//
//  ASSESSMENT SPEC: run `npx tsx scripts/audit-course.ts notes-made-by-mr-george-hunt --spec` after
//    registration. Before registration the script cannot see the slug, so the pools below were sized
//    by computing round(words / 35) per section directly from the bodies in this file.
