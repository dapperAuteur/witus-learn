import type { AuthoredCourse } from "./authored-course";

// "The Author Line and the Finding: Three Names in 1959, and What an Ethics Committee Concluded in
// 2014" (Culture & History, plus Science & Math). Slug to be registered:
// `the-author-line-and-the-finding`.
//
// SOURCE BRIEF, approved by BAM on 2026-09-20:
//   plans/future-courses/culture-and-history/uncredited/2026-09-18-marthe-gautier-brief.md   (rubric B 36, form C6)
//
// BAM'S DECISION THAT CHANGES THE BRIEF. The brief recommended a two-lesson section inside the
// private cluster course `what-the-citation-records`, and said this was the one case of the four
// where a standalone course was a close call and BAM should choose. On 2026-09-20 he chose the
// standalone. So this is a course, not a section, and no Gautier material goes into
// `what-the-citation-records`.
//
// VISIBILITY: PRIVATE, free, NO series code, per BAM's 2026-09-19 decision that private courses do
// not carry CREDIT codes. There is no seriesCode, no seriesPosition and no seriesTrack here or in
// the proposed registration block at the foot of this file.
//
// RESEARCH TIER: 2. The subject is medicine-adjacent, and one party to the dispute is an active
// organisation that publishes its own case. No health advice is given anywhere in this course, and
// every biomedical sentence is a report of what a 1959 index record or a 2014 document says.
//
// THE SPINE, and it must not be flattened into "a woman was robbed" or into "an institution was
// unfair to a scientist":
// A DISPUTE OVER CREDIT WHOSE DECIDING DOCUMENT IS AN INSTITUTIONAL ETHICS OPINION RATHER THAN A
// PRIZE CITATION. Four things, in order: the 1959 author line and the misspelling that travelled
// with it; the honours that followed and named one man; the Inserm ethics committee's 2014 opinion
// and what it found; and the dispute, which is live, has a named contesting party with documents of
// its own, and is not settled by anything this course can read. The course teaches how to read the
// four against each other, and where to stop.
//
// THREE RULES THIS COURSE WORKS UNDER, all of them BAM's, all of them load-bearing:
//  1. NAME WHO CONTESTS WHAT. The Fondation Jerome Lejeune disputes the account. It is named in the
//     course description, throughout section 4, in lessons 1, 5, 6, 8 and 9, and in the final
//     assessment; its case is stated in its own words and in its own order, and its documents are
//     listed. The course does not adjudicate beyond what the documents it has actually read carry.
//  2. THIS IS NOT A COURSE ABOUT ABORTION POLITICS. Prenatal testing and the politics around it are
//     named ONCE, in LESSON 8, through the Inserm opinion's fourth finding and the Foundation's own
//     two sentences, and are not argued anywhere. No other lesson mentions them, no lesson takes a
//     position on them, and no quiz question asks about them beyond what each party said.
//  3. NO PRIVATE INDIVIDUALS. The Scientific American podcast transcript names conference
//     organisers, commentators and a relative of Marthe Gautier. None of them appears here. The
//     Foundation's dossier names a third scientist as the person who encouraged her, and quotes
//     Lejeune's letters to his wife. Neither appears here. The nine children in the 1959 study are
//     unnamed in the record and stay unnamed.
//
// TERMINOLOGY. The 1959 titles and both 2014 parties use "mongolisme" and "mongoliens", the
// period's clinical terms, now offensive. This course uses "Down syndrome" and "trisomy 21" in its
// own voice and quotes the period term only inside quotations and titles, which is what both Inserm
// and the Foundation did in 2014 by putting it in quotation marks. Lesson 2 says so out loud instead
// of smoothing it. Her surname is spelled two ways across the record, which is lesson 3.
//
// FRENCH IS QUOTED VERBATIM, accents included, because a quotation that has been tidied is not a
// quotation. Translations in the lesson text are this course's own and are marked as such.
//
// FETCH-OR-DO-NOT-CITE, and the one gap in it.
// Fetched and read by this course on 2026-09-20:
//  - NCBI eutils esummary for PMIDs 13629913, 13639368, 13662687 and 19361398: author lines,
//    spellings, index titles, journals, volumes, issues, pages and dates. Re-derived here rather
//    than taken from the brief, and the third record's author ORDER is a finding the brief missed.
//  - NCBI eutils elink and efetch for PMID 4244916 / PMC1706525: the 1969 William Allan Memorial
//    Award presentation address. The PMC record is a SCAN, flagged not open access, so only its
//    bibliographic record was read and only that is cited.
//  - HAL API record for inserm-02110704: title, producing body, year, document type, language,
//    collections, deposit date of 2019-04-25, the CC BY 4.0 licence, and the depositor's keywords,
//    which include "Ordre des auteurs".
//  - Inserm's own listing page, inserm.fr/ethique/notes-du-comite-dethique-en-reponse-aux-saisines/,
//    read in full: what a saisine is, what a note is, and the entry for this opinion, whose heading
//    and whose document title spell her surname differently from each other.
//  - Fondation Jerome Lejeune, press release of 29 September 2014, signed Professeur Lucien Israel.
//    Fetched as raw HTML and read in full, in French.
//  - Fondation Jerome Lejeune, right of reply of 26 September 2014. Same, in full, in French.
//  - Fondation Jerome Lejeune, "Jerome Lejeune, pioneer in the discovery of Trisomy 21", September
//    2018, 21 pages, English. Downloaded as PDF and read in full, annex captions included. The
//    caption of its Annex 3 dates a letter differently from its own body text, twice over, which is
//    lesson 14.
//  - Scientific American / Lost Women of Science, 13 February 2025, the podcast transcript. Fetched
//    in full and used for exactly one episode, attributed, with no individual named.
// Attempted and REFUSED on 2026-09-20, reported as failed rather than worked around:
//  - Science, "After more than 50 years, a dispute over Down syndrome discovery" (11 February 2014).
//    HTTP 403 to two clients. Nothing is asserted from it, and the Bordeaux date stays "early 2014".
//
// THE GAP, stated because the course tells learners to state gaps. The Inserm opinion ITSELF
// (inserm.hal.science/inserm-02110704/document) was read in full by the BRIEF on 2026-09-18, and
// every French sentence quoted from it below is the brief's transcription. A re-fetch on 2026-09-20
// was refused: HAL now serves an anti-bot proof-of-work challenge on that path, and this course does
// not defeat one. So the document's identity, licence and deposit date are confirmed first-hand
// through HAL's API and Inserm's own page, and its wording rests on the brief's reading. There is
// one useful independent check, and lesson 11 uses it: the CONTESTING PARTY quotes four of the same
// sentences back, in translation, in documents this course did fetch. A research check is filed.
//
// WHAT IS DELIBERATELY NOT PRINTED:
//  - WHO FIRST COUNTED 47. Unresolved, and the course says so in four places. The Foundation's
//    notebook page of 22 May 1958 and its Turpin letter of 27 October 1958 are described and posted
//    as images, not published as text this course has read; her own 2009 account returns HTTP 403
//    and has never been read by anyone working on this catalog. Neither side's claim is checked
//    here, and no lesson leans on either.
//  - ANYTHING RESTING ON HER 2009 ARTICLE. Every characterisation of it in this course is attributed
//    to the party doing the characterising, because the article itself has not been read.
//  - THE PRINTED 1959 PAGE. The Gallica scan exists and is behind a captcha. What is verified is the
//    index spelling and the Inserm opinion's phrase "avec des erreurs", and lesson 3 says exactly
//    that and no more.
//  - A LETTER TO A BEATIFICATION PROCESS, read aloud in the podcast, alleging that Lejeune did not
//    acknowledge her at a Montreal conference or at the 1962 prize. The document was not fetched, it
//    alleges a motive, and the Foundation says the opposite. It is a research check, not a lesson.
//  - THE NAME OF THE THIRD SCIENTIST the Foundation says encouraged her, and everything the
//    Foundation infers from that. One party's characterisation of an absent third party.
//  - WHEN THE HUMAN CHROMOSOME COUNT OF 46 WAS ESTABLISHED. Not fetched, so not printed. The course
//    uses only the Inserm opinion's own sentence, that the controls had 46.
//  - ANY MOTIVE FOR ANYONE. Not for the committee, not for the Foundation, not for any of the three
//    authors. The record shows what was published and what each party says. It does not show what
//    was thought.
//
// House style, matching drew-blood-bank-course.ts and what-the-citation-records-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of
// 3 to 6 lesson-specific terms; APA 7 `## Sources`; a quiz per teaching section (pool sized to the
// density target, serving 5, passing 80, shuffled) plus a final pooling 41 and serving 10, placed
// LAST; every question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT
// and distractors long and specifically wrong, so check-longest-option passes by construction. No em
// dashes and no en dashes anywhere.
export const AUTHOR_LINE_AND_FINDING_COURSE: AuthoredCourse = {
  title:
    "The Author Line and the Finding: Three Names in 1959, and What an Ethics Committee Concluded in 2014",
  description:
    "In 1959 two short notes to the French Académie des sciences reported an extra chromosome in children with what is now called Down syndrome. Both carried three names in one order: Lejeune, Gautier, Turpin. On the index record of the first note her surname is spelled with an h that does not belong to it. The honours that followed named one man. In 2014 the ethics committee of Inserm, the French national medical research institute, was asked by a group of researchers to look at how the credit had been handled, and concluded that Jérôme Lejeune's part in the discovery itself was unlikely to have been preponderant, that his part in promoting it internationally was very significant, and that it was regrettable that the other two names had not been systematically associated with the discovery in the award of various honours. The Fondation Jérôme Lejeune rejects that conclusion, publishes documents of its own, and in early 2014 had one of her talks recorded by a bailiff under a court authorisation, as its own press release says. This course is not a verdict, because the documents it can read do not support one. It is a reading exercise on the four kinds of record that credit disputes actually run on: an author line, a prize, an institutional finding, and a contesting party's own case. You will learn what each one can carry, where each one stops, and why the thing everybody argues about here, who first counted forty seven chromosomes, is the one question none of these documents settles. Its companion is the private course The Partner and the Prize, where the prize question has an institutional answer and a later rule change to test it against; this course is the case where it does not.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 = 1959: three names, in an order
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-names-in-an-order",
      title: "1 · Three names, in an order",
      section: "Section 1 · 1959: three names, in an order",
      body: `Two short notes to the Académie des sciences in Paris, in 1959, reported that children with what was then called mongolism had an extra chromosome. Both notes carried the same three names in the same order.

**The first.** Dated 26 January 1959. The index record lists the authors as Lejeune J, Gauthier M, Turpin R, under a title the National Library of Medicine translates as "Human chromosomes in tissue cultures", in the *Comptes rendus hebdomadaires des séances de l'Académie des sciences*, volume 248, issue 4, pages 602 to 603 (Lejeune et al., 1959a). Hold the spelling of the second name. Lesson 3 is about it.

**The second.** Dated 16 March 1959. Lejeune J, Gautier M, Turpin R, under "Study of somatic chromosomes from 9 mongoloid children", same journal, volume 248, issue 11, pages 1721 to 1722 (Lejeune et al., 1959b). The titles in square brackets are the index's own translations. The printed papers are in French, and nothing in this course claims to quote them.

**What the order is claimed to mean.** The Fondation Jérôme Lejeune states the convention plainly, which is useful, because a rule somebody has written down can be tested. In its press release of 29 September 2014 it says the two notes were published "sous les signatures Lejeune, Gautier, Turpin, et dans cet ordre indiquant que le premier est le découvreur, que le dernier est le responsable de l'équipe et qu'entre les deux figurent les contributeurs à la découverte" (Fondation Jérôme Lejeune [FJL], 2014b). First is the discoverer. Last is the head of the team. Between them are the contributors. Raymond Turpin, in the last position, was head of the department at the Trousseau hospital where all three worked, which fits.

**Now test it against a third paper.** The same three people published again in 1959, in the *Bulletin de l'Académie nationale de médecine*, volume 143, pages 256 to 265, the index dating it 7 to 14 April. The author line on that record reads Lejeune J, Turpin R, Gautier M (Lejeune et al., 1959c). Her name has moved to last. Under the convention the Foundation states for the January and March notes, last belongs to the head of the team, which she was not.

That is not a discovery about who discovered anything, and it must not be read as one. The Foundation states the convention for the two Académie des sciences notes and makes no claim about the third paper. What the third record does show is narrower and still worth having: within one year, on one subject, three people appeared in two different orders. Position in an author line is not a fixed property of a team. It is a convention, applied by somebody, for a reason that is usually not written down anywhere.

**Which is why this course reads four kinds of document and not one.** An author line, the honours that followed, an institutional finding, and a contesting party's own case. Each carries something. None of them carries everything.

:::reveal What order do the two 1959 notes to the Académie des sciences carry, and what does the Fondation Jérôme Lejeune say that order means? ||| Lejeune, Gautier, Turpin. The Foundation says the first name is the discoverer, the last is the head of the team, and the names between them are contributors to the discovery.

:::reveal What does the index record of the team's third 1959 paper show, and what does it not show? ||| It shows the same three people in a different order, Lejeune, Turpin, Gautier, so position is not a fixed property of the team. It does not show who did what, and the Foundation makes no claim about that paper.

## Vocabulary
- **Author line**: the ordered list of names on a paper, which records who is credited and in what position.
- **Note or communication**: a short paper presented to a learned academy, the form both 1959 reports took.
- **Index record**: a library or database entry describing a paper, which is how most readers find it and is not the printed page itself.
- **Convention**: a rule people follow by agreement rather than by necessity, which can change between one paper and the next.

## Sources
Fondation Jérôme Lejeune. (2014b, September 29). *Controverse sur la découverte de la trisomie 21: Éléments de réponse*. https://www.fondationlejeune.org/controverse-sur-la-decouverte-de-la-trisomie-21-elements-de-reponse/
Lejeune, J., Gauthier, M., & Turpin, R. (1959a). [Human chromosomes in tissue cultures]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(4), 602-603. (Title and author spellings as recorded in PubMed, PMID 13629913.) https://pubmed.ncbi.nlm.nih.gov/13629913/
Lejeune, J., Gautier, M., & Turpin, R. (1959b). [Study of somatic chromosomes from 9 mongoloid children]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(11), 1721-1722. (Title as recorded in PubMed, PMID 13639368.) https://pubmed.ncbi.nlm.nih.gov/13639368/
Lejeune, J., Turpin, R., & Gautier, M. (1959c). [Mongolism: A chromosomal disease (trisomy)]. *Bulletin de l'Académie Nationale de Médecine*, *143*(11-12), 256-265. (Title and author order as recorded in PubMed, PMID 13662687.) https://pubmed.ncbi.nlm.nih.gov/13662687/`,
    },
    {
      slug: "what-the-counting-took",
      title: "2 · What the counting took, and what the papers were about",
      section: "Section 1 · 1959: three names, in an order",
      body: `Before the credit question there is a technical question, and the two 1959 titles answer part of it on their own. The first note is about human chromosomes **in tissue cultures**. The second is about **somatic chromosomes from nine children**. So the claim being published was a count, made in cells grown in a laboratory, from a small group of patients.

**Where the culture came from.** The Inserm ethics committee's 2014 opinion sets out the sequence. Marthe Gautier spent a year's fellowship in the United States from September 1955, in Boston, where she was offered work in a cell-culture laboratory. Back in France, Raymond Turpin "lui confie la responsabilité de développer des cultures cellulaires", made her responsible for developing cell cultures (Comité d'éthique de l'Inserm [CEI], 2014; translations from this opinion are this course's own). That technique is what the first note's title names.

**What the count was.** The opinion continues: "Et bientôt Marthe Gautier constatera que les cellules de « mongoliens » ont 47 chromosomes, alors que les témoins en ont 46." Soon Marthe Gautier would observe that the cells had 47 chromosomes, where the controls had 46 (CEI, 2014). Forty seven against forty six, in cultured cells, with a control group. That is the whole scientific claim, and its smallness is the point. The result is a number, arrived at by looking down a microscope at prepared slides and counting.

**And what the laboratory did not have.** From the same opinion: "Le laboratoire ne dispose pas de photo microscope", the laboratory had no photomicroscope, so Jérôme Lejeune "se fait confier les préparations (les lames) pour en faire réaliser des photos", had the slide preparations entrusted to him to have photographs made of them, and those photographs then served him at conferences and in his media appearances (CEI, 2014). Hold that sentence. It is doing two jobs at once, and section 2 takes it apart.

**Why a photograph mattered so much.** A count only one person has seen is a claim. A photograph of the slide is the thing you can put in front of a room, publish, and let other people count for themselves. In 1958 this laboratory could make the preparation but could not make the picture, and the two halves of that sentence ended up in different hands.

**A note on the words.** The 1959 titles use "mongolisme" and "mongoliens", the period's clinical terms, and they are offensive now. This course uses Down syndrome and trisomy 21 in its own voice, and quotes the old term only inside a quotation or a title. That is not a modern imposition on the sources. In 2014 both parties to this dispute did the same thing, putting the word inside quotation marks when they had to repeat it. The nine children are unnamed in the record, and they stay unnamed here.

:::reveal What did the Inserm opinion say the count showed? ||| That the cells had 47 chromosomes while the controls had 46.

:::reveal Why did the absence of a photomicroscope matter to a chromosome count in 1958? ||| Because a count nobody else has seen is only a claim. A photograph of the slide is what lets other people look at the evidence and count it for themselves.

## Vocabulary
- **Tissue culture**: growing living cells outside the body so they can be studied, the technique named in the first 1959 title.
- **Somatic chromosomes**: the chromosomes of ordinary body cells, as distinct from egg and sperm cells.
- **Control**: here, cells from people without the condition, counted alongside the others so the two numbers can be compared.
- **Photomicroscope**: a microscope fitted to take photographs of what is under it, which this laboratory did not have.
- **Preparation or slide**: the mounted, stained sample on glass that goes under the microscope and is counted.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Lejeune, J., Gauthier, M., & Turpin, R. (1959a). [Human chromosomes in tissue cultures]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(4), 602-603. https://pubmed.ncbi.nlm.nih.gov/13629913/
Lejeune, J., Gautier, M., & Turpin, R. (1959b). [Study of somatic chromosomes from 9 mongoloid children]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(11), 1721-1722. https://pubmed.ncbi.nlm.nih.gov/13639368/`,
    },
    {
      slug: "a-name-with-errors",
      title: "3 · A name with errors in it",
      section: "Section 1 · 1959: three names, in an order",
      body: `Her surname is Gautier. The index record of the first 1959 note spells it Gauthier.

**The two records, side by side.** PubMed's entry for the note of 26 January 1959 lists the authors as Lejeune J, **Gauthier** M, Turpin R (Lejeune et al., 1959a). Its entry for the note of 16 March 1959, same journal, same volume, same three people, seven weeks later, lists Lejeune J, **Gautier** M, Turpin R (Lejeune et al., 1959b). One extra letter, in one record, on the first of the two papers.

**What the Inserm opinion says about it.** "La première communication à l'Académie des sciences associe (avec des erreurs) le nom de Marthe Gautier en deuxième position." The first communication associates her name, with errors, in second position (Comité d'éthique de l'Inserm [CEI], 2014). Notice what that sentence does and does not say. It says there were errors. It does not say what they were.

**What this course has not checked, and why that matters.** The 1959 volume is digitised on Gallica, the French national library's collection. Its text and image views are behind a captcha, and this course did not get past it. So the honest version is narrow: the PubMed index record of the January note spells her name with an h, and the Inserm opinion says the first communication carried errors. Whether the printed page itself carries that spelling is not something this course knows, and a research check is filed for it. The difference is real. An error printed in the paper and an error introduced later by an indexer are two different failures, with two different fixes and two different people at fault.

**It did not stop in 1959.** On Inserm's own website, the ethics committee's list of opinions gives this document a heading and then its title, one above the other. The heading reads "Note du Comité d'éthique sur la saisine concernant les règles de publication (« Affaire Marthe Gauthier »)". The title underneath reads "Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe **Gautier** dans la découverte de la trisomie 21" (Inserm, n.d.). Two spellings, one entry, on the website of the institution whose committee wrote the opinion about her. And the Foundation's 21 page English dossier, which spells her Gautier throughout its argument, spells her Gauthier once, in the section headed "What are the reasons for this controversy?" (FJL, 2018).

**Why a spelling is worth a lesson.** Because an index record is how a paper is found. A reader searching the literature under Gautier does not get the January note. The name on the paper is the smallest unit of credit there is, and it has to be right before any of the larger ones can work.

:::reveal What exactly is verified about the misspelling, and what is not? ||| Verified: the PubMed record of the January 1959 note spells her Gauthier while the March record spells her Gautier, and the Inserm opinion says the first communication carried errors. Not verified: what the printed 1959 page itself says.

:::reveal Why does a misspelling in an index record cost a scientist something? ||| Because the index is how people find a paper. A search under the correct spelling does not return it, so the credit never attaches to the name.

## Vocabulary
- **Indexer**: the person or system that creates a database record for a published paper, and who can introduce an error the printed paper does not have.
- **Gallica**: the digital library of the Bibliothèque nationale de France, which holds the scanned 1959 volume this course could not open.
- **Saisine**: a formal referral of a question to a committee, the French term in the title of the Inserm opinion.
- **Research check**: in this catalog, a recorded open question that says what is claimed and what document would settle it.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf
Inserm. (n.d.). *Notes du Comité d'éthique en réponse aux saisines*. https://www.inserm.fr/ethique/notes-du-comite-dethique-en-reponse-aux-saisines/
Lejeune, J., Gauthier, M., & Turpin, R. (1959a). [Human chromosomes in tissue cultures]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(4), 602-603. https://pubmed.ncbi.nlm.nih.gov/13629913/
Lejeune, J., Gautier, M., & Turpin, R. (1959b). [Study of somatic chromosomes from 9 mongoloid children]. *Comptes Rendus Hebdomadaires des Séances de l'Académie des Sciences*, *248*(11), 1721-1722. https://pubmed.ncbi.nlm.nih.gov/13639368/`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Three names, in an order",
      section: "Section 1 · 1959: three names, in an order",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In what order do the two 1959 notes to the Académie des sciences list their three authors?",
            options: [
              "Lejeune, Gautier, Turpin",
              "Turpin, Lejeune, Gautier",
              "Gautier, Lejeune, Turpin",
              "Lejeune, Turpin, Gautier",
            ],
            correctIndex: 0,
            explanation:
              "Both notes carry the same order. The team's Bulletin de l'Académie nationale de médecine paper later that year lists the same three people as Lejeune, Turpin, Gautier, which is exactly what makes the order worth testing.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does the Fondation Jérôme Lejeune say the FIRST position in that author line indicates?",
            options: [
              "The discoverer",
              "The note's drafter",
              "The youngest member",
              "The funding holder",
            ],
            correctIndex: 0,
            explanation:
              "Its press release of 29 September 2014 states the whole convention: first is the discoverer, last is the head of the team, and the names between them are contributors to the discovery.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does that same statement say the LAST position indicates?",
            options: [
              "The head of the team",
              "The least active author",
              "The submitting author",
              "The corresponding author",
            ],
            correctIndex: 0,
            explanation:
              "Raymond Turpin sat in that position on both notes, and the Foundation describes him as head of the department at the Trousseau hospital, so the convention and the fact agree there.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does the Foundation say the positions BETWEEN first and last indicate?",
            options: [
              "Contributors to the discovery",
              "Authors who paid publication charges",
              "Courtesy listings with no claim",
              "Authors who disagreed with it",
            ],
            correctIndex: 0,
            explanation:
              "The sentence runs: first the discoverer, last the head of the team, and between the two the contributors to the discovery. Marthe Gautier sits between the two on both notes.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Which journal published the two 1959 notes?",
            options: [
              "The Comptes rendus of the Académie des sciences",
              "The Bulletin de l'Académie nationale de médecine",
              "Médecine/Sciences, which printed the 2009 article",
              "The American Journal of Human Genetics",
            ],
            correctIndex: 0,
            explanation:
              "Both notes appear in the Comptes rendus hebdomadaires des séances de l'Académie des sciences, volume 248. The three wrong answers are all real journals that appear elsewhere in this course.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Which volume and issue carried the note of 26 January 1959?",
            options: [
              "Volume 248, issue 4",
              "Volume 248, issue 11",
              "Volume 143, issues 11 and 12",
              "Volume 25, issue 3",
            ],
            correctIndex: 0,
            explanation:
              "Pages 602 to 603 of volume 248, issue 4. The second note is in issue 11 of the same volume, at pages 1721 to 1722.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What are the square-bracketed English titles on the PubMed records of the 1959 notes?",
            options: [
              "The index's own translations of the French titles",
              "Titles the authors supplied in English",
              "Titles added by the Fondation Jérôme Lejeune",
              "Working titles from the laboratory notebook",
            ],
            correctIndex: 0,
            explanation:
              "The printed papers are in French. The square brackets are the National Library of Medicine's convention for a translated title, so nothing in this course claims to quote the printed titles.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Which 1959 paper by these three authors places Marthe Gautier's name LAST?",
            options: [
              "The Bulletin de l'Académie nationale de médecine paper",
              "The note of 26 January 1959",
              "The note of 16 March 1959 on nine children",
              "None of them, since the order never varied",
            ],
            correctIndex: 0,
            explanation:
              "Its index record reads Lejeune J, Turpin R, Gautier M. Both Académie des sciences notes read Lejeune, Gautier, Turpin.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What date does the index give the team's paper in the Bulletin de l'Académie nationale de médecine?",
            options: [
              "7 to 14 April 1959",
              "26 January 1959",
              "16 March 1959",
              "22 May 1958",
            ],
            correctIndex: 0,
            explanation:
              "A few weeks after the second note. Same three people, same subject, same year, different order.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does the third 1959 record show about author order, according to this course?",
            options: [
              "It is not fixed for a team",
              "It follows the Foundation's rule",
              "Gautier had been demoted",
              "The two academies used opposite rules",
            ],
            correctIndex: 0,
            explanation:
              "Within one year, on one subject, three people appeared in two different orders. The course draws nothing further from it, and the Foundation makes no claim about that paper.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does this course say the third paper's author order does NOT show?",
            options: [
              "Who did what in the laboratory",
              "That author lines are conventions",
              "Three 1959 papers on one subject",
              "That the convention covers only the notes",
            ],
            correctIndex: 0,
            explanation:
              "The order is evidence about a convention, not about the work. The other three statements are all things the lesson does say.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Where does the Fondation Jérôme Lejeune say all three authors worked?",
            options: [
              "The Trousseau hospital",
              "The Institut Pasteur in Paris",
              "The Hôtel-Dieu in Paris",
              "The Académie nationale de médecine",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation describes Raymond Turpin as head of the department at Trousseau where Gautier and Lejeune worked. That is the Foundation's account, and it is the one this course cites for it.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "How does this course describe a position in an author line?",
            options: [
              "A convention applied by somebody",
              "A legal record of priority",
              "A measurement of effort",
              "An accident of typesetting",
            ],
            correctIndex: 0,
            explanation:
              "A rule people follow by agreement rather than necessity, applied by somebody for a reason that is usually not written down anywhere.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Which of these is NOT one of the four kinds of document this course reads?",
            options: [
              "A laboratory notebook",
              "An ethics opinion",
              "The honours awarded",
              "A contesting party's case",
            ],
            correctIndex: 0,
            explanation:
              "The four are an author line, the honours, an institutional finding, and a contesting party's own case. A laboratory notebook is described in this course but never read by it.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Why does this course say a written-down convention is useful?",
            options: [
              "It can be tested",
              "It settles priority",
              "It proves head approval",
              "It binds the academy",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation states its convention plainly, so a reader can hold it against the record and see where it holds and where it does not.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What language are the two 1959 notes printed in?",
            options: [
              "French",
              "English",
              "Latin",
              "Bilingual",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the English titles you see in a database are in square brackets. They are the index's translations, not the printed titles.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "About how many weeks separate the two 1959 notes to the Académie des sciences?",
            options: [
              "About seven",
              "About thirty",
              "About fifty",
              "None at all",
            ],
            correctIndex: 0,
            explanation:
              "26 January to 16 March 1959. Same journal, same volume, same three people, and two different spellings of the second name in the index.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What claim does this course explicitly refuse to draw from the third paper's author order?",
            options: [
              "That it settles who made the discovery",
              "That position is a convention",
              "That three papers appeared in 1959",
              "That the Foundation stated a convention",
            ],
            correctIndex: 0,
            explanation:
              "The lesson says so in as many words: it is not a discovery about who discovered anything, and it must not be read as one.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does the Foundation's press release of 29 September 2014 do with the signature order?",
            options: [
              "It states the convention behind it",
              "It concedes the order means nothing",
              "It asks the academy to correct it",
              "It says Turpin drew it at random",
            ],
            correctIndex: 0,
            explanation:
              "It writes that the notes were signed Lejeune, Gautier, Turpin, in that order, the first being the discoverer, the last the head of the team, and those between them the contributors.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does this course say is usually not written down anywhere about an author order?",
            options: [
              "The reason for it",
              "The names",
              "The date",
              "The convention",
            ],
            correctIndex: 0,
            explanation:
              "Somebody applies the convention for a reason. The order survives in print; the reason usually does not survive at all.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does this course say each of its four kinds of document can do?",
            options: [
              "Carry something, but not everything",
              "Settle the dispute on its own",
              "Replace the other three",
              "Confirm each of the others",
            ],
            correctIndex: 0,
            explanation:
              "Each carries something and none of them carries everything, which is the reason the course reads four rather than picking one.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What material does the first 1959 note's title name?",
            options: [
              "Tissue cultures",
              "Fresh blood samples",
              "Chromosome photographs",
              "Post-mortem tissue",
            ],
            correctIndex: 0,
            explanation:
              "The index translates the title as Human chromosomes in tissue cultures, so the claim being published was a count made in cells grown in a laboratory.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What does the second 1959 note's title say was studied?",
            options: [
              "Somatic chromosomes",
              "Sex chromosomes",
              "Boston skin cultures",
              "Chromosome photographs",
            ],
            correctIndex: 0,
            explanation:
              "Study of somatic chromosomes from nine mongoloid children, in the index's translation. Somatic chromosomes are the chromosomes of ordinary body cells.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How many children does the second 1959 note's title name?",
            options: [
              "Nine",
              "Forty seven",
              "Forty six",
              "Three",
            ],
            correctIndex: 0,
            explanation:
              "Nine children, unnamed in the record and unnamed here. The numbers 47 and 46 are chromosome counts, not children.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Where does the Inserm opinion say Marthe Gautier spent a year's fellowship from September 1955?",
            options: [
              "Boston",
              "Montreal",
              "Baltimore",
              "Stockholm",
            ],
            correctIndex: 0,
            explanation:
              "A year in the United States from September 1955, in Boston, where she was offered work in a cell-culture laboratory. That is where the technique came from.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What does the Inserm opinion say Raymond Turpin made her responsible for?",
            options: [
              "Developing cell cultures",
              "Photographing the slides",
              "Recruiting the nine children",
              "Writing the two communications",
            ],
            correctIndex: 0,
            explanation:
              "The opinion's phrase is that Turpin lui confie la responsabilité de développer des cultures cellulaires. Photography is precisely what the laboratory could not do.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How many chromosomes does the Inserm opinion say were found in the affected cells?",
            options: [
              "47",
              "46",
              "23",
              "21",
            ],
            correctIndex: 0,
            explanation:
              "The opinion's sentence is that the cells had 47 chromosomes where the controls had 46. That difference of one is the entire published claim.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How many chromosomes does the Inserm opinion say the CONTROLS had?",
            options: [
              "46",
              "47",
              "45",
              "None",
            ],
            correctIndex: 0,
            explanation:
              "46 in the controls against 47 in the affected cells. This course prints no claim about when the count of 46 was first established, because it did not fetch a source for that.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What piece of equipment does the Inserm opinion say the laboratory did not have?",
            options: [
              "A photomicroscope",
              "A centrifuge",
              "An incubator",
              "A powerful microscope",
            ],
            correctIndex: 0,
            explanation:
              "Le laboratoire ne dispose pas de photo microscope. The laboratory could make the preparation but could not make the picture of it.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "According to the Inserm opinion, who had the slide preparations entrusted to him to have photographs made?",
            options: [
              "Lejeune",
              "Turpin",
              "The academy",
              "A Boston lab",
            ],
            correctIndex: 0,
            explanation:
              "The opinion says Lejeune had the slides entrusted to him to have photographs made, and that those photographs then served him at conferences and in his media appearances.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Where does the Inserm opinion say those photographs then served Lejeune?",
            options: [
              "At conferences and in the media",
              "In the two Académie notes",
              "In his laboratory notebook",
              "In the Kennedy Foundation's file",
            ],
            correctIndex: 0,
            explanation:
              "Ces photos lui serviront de support dans les congrès et ses interventions médiatiques. That sentence is doing two jobs, and section 2 separates them.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Why does this course say a photograph of a slide mattered so much?",
            options: [
              "Other people can count it for themselves",
              "The academy required it",
              "It preserved the preparation",
              "It dated the observation",
            ],
            correctIndex: 0,
            explanation:
              "A count only one person has seen is a claim. A photograph is the thing you can put in front of a room and let other people count for themselves.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How does this course describe the whole scientific claim the 1959 notes made?",
            options: [
              "A number",
              "A mechanism",
              "A treatment",
              "A photograph",
            ],
            correctIndex: 0,
            explanation:
              "Forty seven against forty six, in cultured cells, with a control group. The smallness of the claim is the point: the result is a number arrived at by counting.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Which term do the 1959 titles use for the children, which this course quotes only inside titles and quotations?",
            options: [
              "Mongolien",
              "Trisomie 21",
              "Down syndrome",
              "Trisomique",
            ],
            correctIndex: 0,
            explanation:
              "The period's clinical term, offensive now. This course uses Down syndrome and trisomy 21 in its own voice and quotes the old term only where a source uses it.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What did both parties to the 2014 dispute do with that period term when they had to repeat it?",
            options: [
              "Put it in quotation marks",
              "Replaced it with trisomy 21",
              "Kept it without comment",
              "Left it out entirely",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the course's handling is not a modern imposition on the sources. Both Inserm and the Foundation marked the word in 2014.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How does this course handle the nine children in the 1959 study?",
            options: [
              "It leaves them unnamed",
              "It names them from the archive",
              "It gives their case numbers",
              "It names them at the end",
            ],
            correctIndex: 0,
            explanation:
              "They are unnamed in the record, and they stay unnamed here. That is a rule of this catalog, not a gap in the sources.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What is a control, in the sense this lesson uses it?",
            options: [
              "Cells from people without the condition",
              "A second count of the same slide",
              "A photograph kept for audit",
              "A child withheld from publication",
            ],
            correctIndex: 0,
            explanation:
              "Cells from people without the condition, counted alongside the others so the two numbers can be compared. Here they gave 46.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What are somatic chromosomes?",
            options: [
              "The chromosomes of body cells",
              "The chromosomes that determine sex",
              "Chromosomes seen only in cultures",
              "The extra chromosomes in the children",
            ],
            correctIndex: 0,
            explanation:
              "Ordinary body cells, as distinct from egg and sperm cells. It is the word in the second 1959 title.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Which document does this course rely on for the Boston fellowship and the count of 47 against 46?",
            options: [
              "The Inserm ethics committee's 2014 opinion",
              "The printed note of 26 January 1959",
              "The Foundation's 2018 English dossier",
              "Her 2009 article in Médecine/Sciences",
            ],
            correctIndex: 0,
            explanation:
              "Both facts come from the 2014 opinion. The Gallica scan is behind a captcha and the 2009 article returns an error, and this course has read neither.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What does this course say happened to the two halves of the laboratory's photography problem?",
            options: [
              "They ended in different hands",
              "They were resolved in 1958",
              "They were settled in the notebook",
              "They were never separated",
            ],
            correctIndex: 0,
            explanation:
              "This laboratory could make the preparation but could not make the picture, and the two halves of that sentence ended up with different people.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Which of these does this course NOT claim to quote?",
            options: [
              "The printed 1959 papers",
              "The 2014 Inserm opinion",
              "The Foundation's 2014 press release",
              "Inserm's ethics listing page",
            ],
            correctIndex: 0,
            explanation:
              "The printed papers are in French and behind a captcha on Gallica. Everything this course quotes from 1959 is an index record, not the page.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How does the PubMed record of the note of 26 January 1959 spell her surname?",
            options: [
              "Gauthier",
              "Gautier",
              "Gaultier",
              "Gauthiez",
            ],
            correctIndex: 0,
            explanation:
              "With an h that does not belong to it. The record of the March note, same journal and same volume, spells it Gautier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "How does the PubMed record of the note of 16 March 1959 spell her surname?",
            options: [
              "Gautier",
              "Gauthier",
              "Both ways",
              "Neither",
            ],
            correctIndex: 0,
            explanation:
              "Correctly. Which is what makes the January record a record-level difference rather than a house style: the same index spells the same person two ways seven weeks apart.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does the Inserm opinion say about how the first communication handled her name?",
            options: [
              "It carried errors",
              "It omitted her name",
              "It placed her last",
              "It had no errors",
            ],
            correctIndex: 0,
            explanation:
              "La première communication associe (avec des erreurs) le nom de Marthe Gautier en deuxième position. It says there were errors. It does not say what they were.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "In which position does the Inserm opinion say her name appears on the first communication?",
            options: [
              "Second",
              "Third",
              "First",
              "Not stated",
            ],
            correctIndex: 0,
            explanation:
              "Second position, with errors. Under the convention the Foundation states, second on a three-name line is a contributor.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What stopped this course from reading the printed 1959 page?",
            options: [
              "A captcha on Gallica",
              "It was never digitised",
              "Foundation-held offprints",
              "An academy embargo",
            ],
            correctIndex: 0,
            explanation:
              "The scan exists. Its text and image views are behind a captcha this course did not get past, so the printed spelling is unknown to it and a research check is filed.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What is Gallica?",
            options: [
              "The BnF digital library",
              "The Inserm open archive",
              "The Foundation's photo album",
              "The NLM's biomedical index",
            ],
            correctIndex: 0,
            explanation:
              "The digital library of the Bibliothèque nationale de France, which holds the scanned 1959 volume this course could not open.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "Which two different failures does this lesson insist on distinguishing?",
            options: [
              "A printed error and an indexer's error",
              "A misspelling and a mistranslation",
              "An error in each of the two notes",
              "An academy error and a Foundation error",
            ],
            correctIndex: 0,
            explanation:
              "They are two failures with two different fixes and two different people at fault, which is exactly why the course refuses to collapse them.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does Inserm's own listing page do with her surname?",
            options: [
              "It spells it both ways",
              "It spells it Gautier",
              "It avoids the surname",
              "It spells it Gauthier",
            ],
            correctIndex: 0,
            explanation:
              "The heading of the entry reads Affaire Marthe Gauthier. The document title directly underneath reads Marthe Gautier. One entry, two spellings.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "How does the HEADING of that entry on Inserm's listing page spell her surname?",
            options: [
              "Gauthier",
              "Gautier",
              "Both ways",
              "Neither",
            ],
            correctIndex: 0,
            explanation:
              "Note du Comité d'éthique sur la saisine concernant les règles de publication, Affaire Marthe Gauthier. The title beneath it spells her Gautier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "How often does the Foundation's 21 page English dossier spell her surname with an h?",
            options: [
              "Once",
              "Never",
              "Throughout",
              "Twice",
            ],
            correctIndex: 0,
            explanation:
              "Once, in the section headed What are the reasons for this controversy. Everywhere else in that document she is Gautier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "Why does this lesson say a misspelling in an index record costs a scientist something?",
            options: [
              "A search under the correct spelling misses the paper",
              "It voids the claim to priority",
              "It prevents the paper being cited",
              "It forces a printed correction",
            ],
            correctIndex: 0,
            explanation:
              "The index is how people find a paper. A search under the correct spelling does not return it, so the credit never attaches to the name.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does this course call the smallest unit of credit there is?",
            options: [
              "The name on the paper",
              "Its author-line position",
              "The acknowledgement",
              "The citation",
            ],
            correctIndex: 0,
            explanation:
              "And it has to be right before any of the larger ones can work, which is why a single letter is worth a lesson.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What is filed in this catalog for the unchecked printed page of 1959?",
            options: [
              "A research check",
              "A correction notice",
              "A citation record",
              "Nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "A recorded open question that says what is claimed and what document would settle it. A hedge with no check is a hedge nobody will ever clear.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What exactly IS verified about the misspelling?",
            options: [
              "The two index spellings, January and March",
              "The spelling on the printed page",
              "That the academy's typesetter erred",
              "That the NLM indexer erred in the 1960s",
            ],
            correctIndex: 0,
            explanation:
              "The January record spells her Gauthier and the March record spells her Gautier, and the Inserm opinion says the first communication carried errors. Everything else is open.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What is a saisine, in the sense used in the title of the Inserm opinion?",
            options: [
              "A referral to a committee",
              "A formal correction to a paper",
              "A court seizure of records",
              "An academy's opinion on priority",
            ],
            correctIndex: 0,
            explanation:
              "A question formally put to a committee. In this case a collective of researchers referred the handling of the credit to the Inserm ethics committee.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What is an indexer, in the sense this lesson uses it?",
            options: [
              "Who creates a database record",
              "The editor who assigns page numbers",
              "The librarian who chooses what to scan",
              "The author who supplies keywords",
            ],
            correctIndex: 0,
            explanation:
              "And who can introduce an error the printed paper does not have, which is why the two failures have to be told apart.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "Which of the two 1959 index records carries the correct spelling of her surname?",
            options: [
              "The March one",
              "The January one",
              "Both of them",
              "Neither one",
            ],
            correctIndex: 0,
            explanation:
              "The March record reads Gautier. The January record, on the same journal and volume seven weeks earlier, reads Gauthier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does this course refuse to say about the printed 1959 page?",
            options: [
              "How it spells her name",
              "That volume 248 has two notes",
              "That Inserm reports errors",
              "That the papers are in French",
            ],
            correctIndex: 0,
            explanation:
              "It has not seen the page. Saying what a document says when you have not read it is the failure this whole course is built to avoid.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does the Inserm opinion's phrase avec des erreurs leave open?",
            options: [
              "What the errors were",
              "Whether her name appeared",
              "Which month it was published",
              "Who wrote the opinion",
            ],
            correctIndex: 0,
            explanation:
              "It reports that there were errors and stops. The index spelling is this course's only concrete instance, and it is an index, not the page.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "Which spelling appears in the TITLE of the Inserm opinion itself?",
            options: [
              "Gautier",
              "Gauthier",
              "Both ways",
              "Neither",
            ],
            correctIndex: 0,
            explanation:
              "The opinion's title is about la contribution de Marthe Gautier. The listing heading above it is the one that says Gauthier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "Which pages of volume 248 carry the note of 16 March 1959?",
            options: [
              "1721 to 1722",
              "602 to 603",
              "256 to 265",
              "311 to 315",
            ],
            correctIndex: 0,
            explanation:
              "Issue 11 of volume 248. The January note is at 602 to 603 in issue 4 of the same volume.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What does this course say a rule somebody has written down allows a reader to do?",
            options: [
              "Hold it against the record and see where it holds",
              "Enforce it against the academy",
              "Reconstruct who did the work",
              "Date the discovery",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation states its convention plainly, which is what lets a reader see where the convention holds and where it does not.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What did the Inserm opinion say she was offered during her year in the United States?",
            options: [
              "Work in a cell-culture laboratory",
              "A photomicroscope to take home",
              "A post in a chromosome-count laboratory",
              "Co-authorship on an American paper",
            ],
            correctIndex: 0,
            explanation:
              "Which is where the technique came from. Back in France, Turpin made her responsible for developing cell cultures.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What does this course say a count that only one person has seen amounts to?",
            options: [
              "A claim",
              "A finding",
              "A discovery",
              "An error",
            ],
            correctIndex: 0,
            explanation:
              "A photograph of the slide is what turns it into something other people can check. That is why the missing photomicroscope matters.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What does this course say has to be right before any larger unit of credit can work?",
            options: [
              "The name on the paper",
              "The order of the names",
              "The communication's date",
              "The prize citation",
            ],
            correctIndex: 0,
            explanation:
              "The smallest unit of credit there is. A paper that cannot be found under a person's name credits nobody.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What did this course do about the printed 1959 page it could not open?",
            options: [
              "Said so, narrowed the claim and filed a check",
              "Used the 2018 dossier instead",
              "Inferred it from the index record",
              "Left the misspelling out",
            ],
            correctIndex: 0,
            explanation:
              "It reports the failed fetch, keeps the claim to what the index records and the Inserm opinion actually say, and files a research check for the rest.",
            sourceLessonSlug: "a-name-with-errors",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 = The honours that followed
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-prize-to-one-man",
      title: "4 · 1962: a prize, and one name on it",
      section: "Section 2 · The honours that followed",
      body: `Three years after the notes, Jérôme Lejeune received the Kennedy Prize. Both parties to this dispute agree that he received it and that he received it alone. They disagree about what that means, and they disagree in an interesting way, because the side defending him is the side that explains the award.

**The Foundation's account, in its own words.** Its 2018 English dossier answers the question under a heading of its own, "Did Lejeune take credit for the discovery? Did he receive all the honors afterwards for his role in this discovery, including the Kennedy Prize without sharing the award?" The answer: "In 1962, Jérôme Lejeune was awarded the Kennedy Prize for all of his work and not only for his role in the discovery. This award was the result of a survey that the Kennedy Foundation team visiting Paris had conducted among his colleagues in his absence since he was abroad" (Fondation Jérôme Lejeune [FJL], 2018).

Read that answer carefully, because it is a good one. It does not deny the premise. It reframes it. The prize was not a discovery prize, so a prize naming one discoverer is not what happened. Whether that reframing is right is exactly what a reader would want the awarding body's own citation for.

**The money, as the Foundation reports it.** The same page says the letter from the Kennedy Foundation announced that Lejeune received 8,333 US dollars "for his personal use" and 25,000 US dollars as an "exclusive grant for a research program" (FJL, 2018). That is a prize with two halves, one personal and one for the laboratory, which is worth noticing: the personal half is the part a colleague would recognise as an honour, and the research half is the part that funds the next paper.

**What this course cannot tell you, and why it says so.** The Foundation's reference for those figures is a transcript of the announcing letter, not the letter. Its date is given as "4/12/1962" in an English translation of a French document, which can be read as 4 December or as 12 April depending on which convention the translator was working in, so this course prints no date for it at all. And this course did not fetch the Kennedy Foundation's own record of the 1962 award, its citation, or any list of its recipients. A research check is filed for all three.

**The absence is itself the lesson.** The catalog's course *What the Citation Records* teaches a method for reading a prize page: sort the citation, the institution's own account and the laureate's own words into three documents, then set them against a document the prize-giver does not host. That method needs a prize page. Here there is not one in front of us. When the awarding body's record is not in hand, the only account of the award you have is an interested party's account, and the honest move is to label it as such and keep looking, not to treat the interested account as the record.

So: in 1962 a prize went to one of the three names on the 1959 notes. What the prize was formally for, this course knows only from the party that defends him.

:::reveal How does the Fondation Jérôme Lejeune answer the charge that Lejeune took the 1962 prize without sharing it? ||| It says the Kennedy Prize was awarded for all of his work and not only for his role in the discovery, and that it followed a survey the Kennedy Foundation conducted among his colleagues while he was abroad.

:::reveal Why does this course print no date for the letter announcing the prize? ||| Because the Foundation gives the date as 4/12/1962 in an English translation of a French document, which could mean 4 December or 12 April, and the course has read a transcript of the letter rather than the letter.

## Vocabulary
- **Reframing**: answering a charge by changing what the fact is taken to mean rather than denying the fact.
- **Transcript**: a typed copy of a document, which carries the copier's reading of it and is not the document.
- **Interested account**: a description of an event by a party with a stake in how it is understood, usable as evidence of what that party says.
- **Citation, in the prize sense**: the awarding body's own sentence saying what an award was given for.

## Sources
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf`,
    },
    {
      slug: "a-second-award",
      title: "5 · 1969: a second award, and what an index record proves",
      section: "Section 2 · The honours that followed",
      body: `Ten years after the notes, a second body honoured him, in another country, and the record of it is a one page presentation address in a journal.

**What the record says.** The *American Journal of Human Genetics*, volume 22, issue 2, pages 119 to 120, carries a piece by A. G. Knudson Jr. titled "Jérôme Lejeune. The William Allan Memorial Award presented at the annual meeting of the American Society of Human Genetics, San Francisco, California, October 3, 1969" (Knudson, 1970). Everything in that title is evidence: an award, its name, the recipient, the society, the city and the date.

**What the record does not say.** This course did not read the address. The archived copy is a scanned page flagged as not open access, so what Knudson actually said about the work, about the 1959 notes, or about anybody else on them is unknown here. The course therefore makes no claim about the content of the address, and a research check is filed to read it.

**That distinction is the lesson.** An index record is thin evidence, and thin is not the same as none. It establishes four things a reader can act on: that an award existed, whom it went to, which body gave it, and when. It establishes nothing about reasons, wording or omissions. A researcher who treats the title as though it were the speech has invented a source. A researcher who discards the record because the speech is paywalled has thrown away four facts that were free.

**Two honours, and the word the opinion uses.** The Inserm ethics committee's 2014 opinion does not enumerate awards. It says it is regrettable that the names were not systematically associated with the discovery "tant dans la communication que dans l'attribution de divers honneurs", in communication as in the award of various honours (Comité d'éthique de l'Inserm [CEI], 2014). Various, plural. The two this course can name and date are the 1962 Kennedy Prize and this one. It names no others, because it has checked no others.

**And on the other side of the ledger.** In the documents this course read, no honour to Marthe Gautier appears before 2014, when a French genetics meeting was to present her with a medal. What happened at that meeting is section 4. That absence is a statement about the documents this course read, which were chosen for the credit dispute rather than for her career. It is not a statement about her career, and it must not be read as one.

:::reveal What four things does the index record of the 1969 award establish? ||| That an award existed, whom it went to, which society gave it, and where and when it was presented.

:::reveal Why does this course make no claim about what the 1969 presentation address said? ||| Because the archived copy is a scan flagged as not open access, and the course did not read it. The title is evidence; the speech is not in hand.

## Vocabulary
- **Presentation address**: the speech given when an award is handed over, often printed afterwards by the society's journal.
- **Not open access**: a published item a reader cannot open without a subscription or a purchase, whatever its bibliographic record shows.
- **Thin evidence**: a source that supports a small number of specific facts and nothing beyond them, which is useful as long as the boundary is stated.
- **Ledger**: here, the practice of listing what the documents show on each side, including the entries that are empty.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Knudson, A. G., Jr. (1970). Jérôme Lejeune: The William Allan Memorial Award presented at the annual meeting of the American Society of Human Genetics, San Francisco, California, October 3, 1969. *American Journal of Human Genetics*, *22*(2), 119-120. (Bibliographic record only; the archived article is a scan and is not open access.) https://pubmed.ncbi.nlm.nih.gov/4244916/`,
    },
    {
      slug: "promotion-is-not-discovery",
      title: "6 · Promoting a result is not producing it",
      section: "Section 2 · The honours that followed",
      body: `Go back to the sentence from lesson 2 about the photographs, because the Inserm opinion builds one of its findings directly on it.

**The two acts, separated.** The opinion's second finding says Lejeune's part was "sans doute très significative", doubtless very significant, in making the discovery known internationally, and then adds five words that do the work: "ce qui est différent de la découverte elle-même", which is different from the discovery itself (Comité d'éthique de l'Inserm [CEI], 2014). Promoting a result and producing it are two acts. A person can do one, or the other, or both, and the record of a career does not always say which.

**Why the photographs matter to that finding.** The laboratory could not photograph its own slides. The slides went out to be photographed. The photographs came back to the person who had arranged it, and served him at conferences and in his media appearances (CEI, 2014). In 1958 a photograph was the portable form of the evidence and a slide was not. Whoever holds the portable form is the person who can stand in front of a room with it. That is a fact about this case, established by one sentence in one document, and this course states it as that and not as a law about laboratories.

**The regret, and whose names are in it.** The opinion's third finding calls the technical approach a condition of the discovery and speaks of the key role of Marthe Gautier, then says: "il est regrettable que leurs noms n'aient pas été systématiquement associés à cette découverte tant dans la communication que dans l'attribution de divers honneurs" (CEI, 2014). Note the possessive. *Leurs*, theirs, is plural. The opinion is regretting two names, not one.

**The contesting party confirms the reading.** The Fondation Jérôme Lejeune's right of reply of 26 September 2014 opens by describing the opinion as estimating that the discovery "n'aurait pu être faite sans les contributions essentielles de Raymond Turpin et Marthe Gautier", could not have been made without the essential contributions of Raymond Turpin and Marthe Gautier (FJL, 2014a). That is the party that rejects the opinion, quoting it, and its quotation names the same two people. When a document you cannot open is quoted back by the side that dislikes it, and the quotation matches your reading, your reading has been checked from an unfriendly direction, which is the best kind of check there is.

**What this finding does not say.** It does not say that anyone took anything, and neither does this course. The Inserm opinion describes what was published, who carried the photographs, and where the names did and did not appear. It records positions, not intentions. *Who Gets Named*, lesson 1, "Credit is a second event", is the general version of the point: the work is one event and the crediting of it is a separate one, with its own rules and its own participants. This course does not repeat that lesson. It supplies a case in which an institution wrote the separation down.

:::reveal What distinction does the Inserm opinion's second finding draw? ||| Between making a discovery known internationally, which it calls doubtless very significant in his case, and the discovery itself, which it says is a different thing.

:::reveal Whose names does the opinion's third finding regret were not systematically associated with the discovery? ||| Two, not one. The French possessive is plural, and the Foundation's own right of reply quotes the opinion as naming Raymond Turpin and Marthe Gautier.

## Vocabulary
- **Promotion, in this sense**: making a published result known, at conferences, in the press, and to other laboratories.
- **Portable evidence**: the form of a result that can be carried and shown, such as a photograph, as against a form that stays in the laboratory.
- **Possessive plural**: here, the French word leurs, which shows the opinion is speaking of more than one person's name.
- **Unfriendly corroboration**: a quotation of a document by a party that rejects it, which is stronger evidence of the wording than a friendly quotation.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Fondation Jérôme Lejeune. (2014a, September 26). *Trisomie 21, la Fondation Jérôme Lejeune répond*. https://www.fondationlejeune.org/trisomie-21-la-fondation-jerome-lejeune-repond/`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The honours that followed",
      section: "Section 2 · The honours that followed",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who received the Kennedy Prize in 1962?",
            options: [
              "Jérôme Lejeune alone",
              "Raymond Turpin",
              "Lejeune and Gautier",
              "The Trousseau team",
            ],
            correctIndex: 0,
            explanation:
              "Both parties to the dispute agree that he received it and that he received it alone. They disagree about what a prize to one person means.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does the Fondation Jérôme Lejeune say the 1962 Kennedy Prize was awarded for?",
            options: [
              "All of his work",
              "The extra chromosome",
              "His clinical practice",
              "His photographs",
            ],
            correctIndex: 0,
            explanation:
              "Its 2018 dossier says he was awarded the prize for all of his work and not only for his role in the discovery. That answer reframes the charge rather than denying it.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "How does the Foundation say the 1962 award came about?",
            options: [
              "A survey among his colleagues",
              "A nomination by Raymond Turpin",
              "A reading by the scientific board",
              "An academy recommendation",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation says a Kennedy Foundation team visiting Paris surveyed his colleagues while he was abroad. That is the Foundation's account, and this course reports it as that.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Where does the Foundation say Lejeune was while that survey was conducted?",
            options: [
              "Abroad",
              "At Trousseau",
              "In Boston",
              "In San Francisco",
            ],
            correctIndex: 0,
            explanation:
              "In his absence, since he was abroad, in the Foundation's wording. The point of the sentence is that he did not solicit the prize.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "How much does the Foundation report was given for his personal use?",
            options: [
              "8,333 dollars",
              "25,000 dollars",
              "33,333 dollars",
              "No figure given",
            ],
            correctIndex: 0,
            explanation:
              "8,333 US dollars for his personal use and 25,000 US dollars as an exclusive grant for a research program, per the Foundation's report of the announcing letter.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does the Foundation report the 25,000 dollars was designated as?",
            options: [
              "A research grant",
              "A personal award",
              "A chair endowment",
              "Hospital running costs",
            ],
            correctIndex: 0,
            explanation:
              "An exclusive grant for a research program, in the Foundation's quotation. So the prize had two halves: one personal, one for the work.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What is the Foundation's stated reference for the prize figures?",
            options: [
              "A transcript of a letter",
              "The Kennedy Foundation's citation",
              "The academy's session minutes",
              "A photograph of the letter",
            ],
            correctIndex: 0,
            explanation:
              "A transcript, which is a typed copy carrying the copier's reading. It is not the letter, and this course did not see the letter.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Why does this course print no date for the letter announcing the prize?",
            options: [
              "The date format is ambiguous: 4/12/1962",
              "The Foundation gives no date",
              "The letter is undated",
              "It conflicts with Inserm's date",
            ],
            correctIndex: 0,
            explanation:
              "The date is given as 4/12/1962 in an English translation of a French document, which could be 4 December or 12 April depending on the convention used.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Which of these did this course NOT fetch about the 1962 award?",
            options: [
              "The Kennedy Foundation's own record",
              "The Foundation's 2018 English dossier",
              "The Inserm opinion's honours sentence",
              "The 2014 Foundation press release",
            ],
            correctIndex: 0,
            explanation:
              "No record, citation or recipient list from the awarding body was fetched, so this course reports only what an interested party says about the award. A research check is filed.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course say the Foundation's answer about the prize does?",
            options: [
              "Reframes the charge",
              "Denies he received it",
              "Concedes the point",
              "Refers it elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "It accepts that he received the prize alone and changes what receiving it means: the prize was not a discovery prize, so a discovery prize naming one man is not what happened.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Which method does the catalog course What the Citation Records teach?",
            options: [
              "Sorting a prize page into three documents",
              "Counting a laureate's archive mentions",
              "Comparing two ethics opinions",
              "Reading a notebook against a paper",
            ],
            correctIndex: 0,
            explanation:
              "The citation, the institution's own account and the laureate's own words, then a fourth document the prize-giver does not host. This course does not re-teach it.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Why can that method not be applied to the 1962 prize here?",
            options: [
              "There is no prize page in hand",
              "It works only for academy prizes",
              "The prize had two halves",
              "The award predates the method",
            ],
            correctIndex: 0,
            explanation:
              "The method needs a citation, an institutional account and the laureate's words. None of the three was fetched for this award, which is itself the finding.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course say is the honest move when an awarding body's record is not in hand?",
            options: [
              "Label the interested account and keep looking",
              "Treat the defender's account as record",
              "Leave the award out entirely",
              "Reconstruct the citation",
            ],
            correctIndex: 0,
            explanation:
              "Say whose account it is, and keep looking. Treating an interested account as the record is how a party's version becomes the history.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course mean by an interested account?",
            options: [
              "A stakeholder's description",
              "An account written from memory",
              "An account in another language",
              "An account that withholds its sources",
            ],
            correctIndex: 0,
            explanation:
              "A description by a party with a stake in how the event is understood. It is good evidence of what that party says, and it is not the record.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What are the two halves of the 1962 prize, as the Foundation reports it?",
            options: [
              "Personal and research",
              "A medal and a citation",
              "A cash award and a chair",
              "Him and his department",
            ],
            correctIndex: 0,
            explanation:
              "8,333 dollars for his personal use and 25,000 dollars as a research grant. The personal half is the part a colleague reads as an honour.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course say the research half of a prize funds?",
            options: [
              "The next paper",
              "Costs already incurred",
              "A follow-up study",
              "Co-authors' shares",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the split is worth noticing. One half is recognition and the other half is capacity to do more work.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What is filed in this catalog for the unfetched Kennedy Foundation record, citation and recipient list?",
            options: [
              "A research check",
              "A citation record",
              "A correction notice",
              "Nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "A recorded open question naming what is claimed and what would settle it. Every hedge in this course carries one.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What do both parties to the dispute agree about the 1962 prize?",
            options: [
              "He received it alone",
              "It was for the discovery",
              "The academy nominated him",
              "Its citation named Gautier",
            ],
            correctIndex: 0,
            explanation:
              "They agree on the fact and disagree on what it means. The Inserm opinion regrets the missing names; the Foundation says the prize was not a discovery prize.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Which side of this dispute supplies the explanation of how the 1962 award came about?",
            options: [
              "The side defending him",
              "The Inserm ethics committee",
              "The Académie des sciences",
              "Neither side",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation explains the prize, which is worth noticing: the account of the award comes from the party with the most at stake in how it is read.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What is a citation, in the prize sense this course uses?",
            options: [
              "The body's own sentence about the award",
              "A reference to an earlier paper",
              "A referral to an ethics committee",
              "The letter announcing the award",
            ],
            correctIndex: 0,
            explanation:
              "The awarding body's own statement of what the award was given for. It is the sentence that gets repeated, and here it is not in hand.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course say a transcript carries that the original does not?",
            options: [
              "The copier's reading",
              "The original's date",
              "A translation",
              "A certifying seal",
            ],
            correctIndex: 0,
            explanation:
              "A typed copy is somebody's reading of a document. That is why the course treats the prize figures as reported rather than as read.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Which award does the 1970 journal record describe being presented?",
            options: [
              "The William Allan Memorial Award",
              "The Kennedy Prize of 1962",
              "The Nobel Prize in Physiology or Medicine",
              "A French genetics medal",
            ],
            correctIndex: 0,
            explanation:
              "The title of the printed presentation address names the award, the recipient, the society, the city and the date, and every one of those is evidence.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "At whose annual meeting was the 1969 award presented?",
            options: [
              "The American Society of Human Genetics",
              "The Académie nationale de médecine",
              "The Joseph P. Kennedy Foundation",
              "The Assises de génétique humaine et médicale",
            ],
            correctIndex: 0,
            explanation:
              "A different body, in a different country, ten years after the 1959 notes, and again in one man's name.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "In which city was the 1969 award presented?",
            options: [
              "San Francisco",
              "Bordeaux",
              "Montreal",
              "Boston",
            ],
            correctIndex: 0,
            explanation:
              "San Francisco, California, on 3 October 1969, per the title of the printed presentation address.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What date does that record give for the 1969 presentation?",
            options: [
              "3 October 1969",
              "22 May 1958",
              "27 October 1958",
              "14 September 2014",
            ],
            correctIndex: 0,
            explanation:
              "The other three dates all appear elsewhere in this course, attached to other documents. This one is on the face of a bibliographic record.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Which journal printed the 1969 presentation address?",
            options: [
              "The American Journal of Human Genetics",
              "The Comptes rendus of the Académie des sciences",
              "Médecine/Sciences",
              "The Bulletin de l'Académie nationale de médecine",
            ],
            correctIndex: 0,
            explanation:
              "Volume 22, issue 2, pages 119 to 120. The society's own journal printing the speech given at the society's own meeting.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Why did this course not read the 1969 presentation address itself?",
            options: [
              "It is a scan, not open access",
              "It was never printed",
              "The Foundation holds it",
              "It is behind a Gallica captcha",
            ],
            correctIndex: 0,
            explanation:
              "So what was said about the work, about the 1959 notes or about anybody else on them is unknown here, and the course makes no claim about it.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What four things does this course say the index record of the 1969 award establishes?",
            options: [
              "An award, a recipient, a body and a date",
              "Reasons, wording, omissions and value",
              "Nominator, seconder, voters and the vote",
              "Name, founder, endowment and past winners",
            ],
            correctIndex: 0,
            explanation:
              "Plus the city. Those are the facts a reader can act on, and the boundary around them is what makes thin evidence usable.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this course say that index record establishes NOTHING about?",
            options: [
              "Reasons and wording",
              "The presenting society",
              "The date and place",
              "The recipient's identity",
            ],
            correctIndex: 0,
            explanation:
              "The title is evidence of the event. It is not evidence of the speech, which this course has not read.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this course say a researcher does by treating the title of the address as though it were the speech?",
            options: [
              "Invents a source",
              "Loses nothing",
              "Cites it correctly",
              "Makes a minor slip",
            ],
            correctIndex: 0,
            explanation:
              "The paired error is discarding the record because the speech is paywalled, which throws away four facts that were free.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this course say a researcher loses by discarding the record because the speech is paywalled?",
            options: [
              "Four facts that were free",
              "Nothing, since records add nothing",
              "The right to cite the journal",
              "The award's date",
            ],
            correctIndex: 0,
            explanation:
              "Thin evidence is not the same as no evidence, as long as its boundary is stated.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What word does the Inserm opinion use for the honours the names were missing from?",
            options: [
              "Various",
              "Two",
              "American",
              "Posthumous",
            ],
            correctIndex: 0,
            explanation:
              "Divers honneurs, various honours, in the plural and without a list. The opinion enumerates no awards at all.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "How many honours does this course name and date?",
            options: [
              "Two",
              "Various",
              "None",
              "Three",
            ],
            correctIndex: 0,
            explanation:
              "The 1962 Kennedy Prize and the 1969 William Allan Memorial Award. It names no others because it checked no others.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this course say about honours to Marthe Gautier in the documents it read?",
            options: [
              "None appears before 2014",
              "Several, starting in 1960",
              "None to anyone, even Lejeune",
              "One, a share of the 1962 prize",
            ],
            correctIndex: 0,
            explanation:
              "Until a French genetics meeting was to present her with a medal in 2014. What happened at that meeting is section 4.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this course say that absence is a statement about?",
            options: [
              "The documents it read",
              "Her whole career",
              "French geneticists",
              "The Inserm opinion alone",
            ],
            correctIndex: 0,
            explanation:
              "Those documents were chosen for the credit dispute rather than for her career, and the course says so rather than letting a gap read as a finding.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What is a presentation address?",
            options: [
              "The speech at a handover",
              "The written prize citation",
              "The recipient's own reply",
              "A letter announcing an award",
            ],
            correctIndex: 0,
            explanation:
              "The speech given when an award is handed over, often printed afterwards by the society's journal. This one was, and this course did not read it.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does not open access mean, in the sense this lesson uses it?",
            options: [
              "A reader cannot open it",
              "It was never digitised",
              "Its record is withheld",
              "Only applicants may see it",
            ],
            correctIndex: 0,
            explanation:
              "Not without a subscription or a purchase, whatever its bibliographic record shows. The record stayed readable; the article did not.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does this lesson say thin evidence is not the same as?",
            options: [
              "No evidence at all",
              "Weak evidence",
              "Partial evidence",
              "Limited evidence",
            ],
            correctIndex: 0,
            explanation:
              "A source that supports a small number of specific facts is useful, as long as the boundary around those facts is stated.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does the Inserm opinion's second finding say about Lejeune's part in making the discovery known internationally?",
            options: [
              "Doubtless very significant",
              "Unlikely to be preponderant",
              "Impossible to assess",
              "Limited to the 1959 notes",
            ],
            correctIndex: 0,
            explanation:
              "Sans doute très significative. The finding credits him fully for that act, and then distinguishes it from a different act.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does the opinion add immediately after calling his part in promotion very significant?",
            options: [
              "That it differs from the discovery",
              "That it explains the 1962 prize",
              "That the discoverer is unknown",
              "That all three shared it equally",
            ],
            correctIndex: 0,
            explanation:
              "Ce qui est différent de la découverte elle-même. Promoting a result and producing it are two acts, and a career record does not always say which one a person did.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "Why did the slide preparations leave the laboratory, according to the Inserm opinion?",
            options: [
              "It could not photograph them",
              "To be confirmed in Boston",
              "As evidence for the Académie",
              "They were seized by court order",
            ],
            correctIndex: 0,
            explanation:
              "The laboratory had no photomicroscope, so the slides went out to be photographed, and Lejeune is the person the opinion says had them entrusted to him for that.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "Where does the Inserm opinion say the resulting photographs then served Lejeune?",
            options: [
              "Conferences and media appearances",
              "As plates in the 1959 notes",
              "In the 1962 prize application",
              "Pasted in his laboratory notebook",
            ],
            correctIndex: 0,
            explanation:
              "Ces photos lui serviront de support dans les congrès et ses interventions médiatiques. That is the sentence the opinion's second finding is built on.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course call the portable form of the evidence in 1958?",
            options: [
              "The photograph",
              "The slide",
              "The culture",
              "The notebook",
            ],
            correctIndex: 0,
            explanation:
              "A photograph travels and a slide does not, so whoever holds the photograph is the person who can stand in front of a room with the evidence.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "How does this course present the point about who holds the portable form of the evidence?",
            options: [
              "As a fact about this case",
              "As a general law of laboratories",
              "As the Foundation's position",
              "As an inference from the prize",
            ],
            correctIndex: 0,
            explanation:
              "Established by one sentence in one document about one laboratory. The course states it as that, and not as a law about laboratories in general.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does the opinion's third finding call the technical approach?",
            options: [
              "A condition of the discovery",
              "Not the essence of the discovery",
              "A matter for the department head",
              "An achievement of the Boston lab",
            ],
            correctIndex: 0,
            explanation:
              "A condition of the discovery, speaking of the key role of Marthe Gautier. The phrase about the essence of the discovery belongs to the Foundation, which is section 4.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does the French possessive leurs show in the opinion's third finding?",
            options: [
              "More than one name",
              "Institutional names",
              "The referrers' names",
              "Committee members' names",
            ],
            correctIndex: 0,
            explanation:
              "It is plural. The opinion regrets two names missing from the discovery's communication and from its honours, not one.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "Where does the opinion regret the names were not systematically associated with the discovery?",
            options: [
              "In communication and in honours",
              "In the index records and papers",
              "In the notebook and the letters",
              "In the press and the literature",
            ],
            correctIndex: 0,
            explanation:
              "Tant dans la communication que dans l'attribution de divers honneurs. Two places, which is why the honours section of this course exists at all.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "How does the Foundation's right of reply of 26 September 2014 describe what the opinion found?",
            options: [
              "Essential contributions by two people",
              "That Marthe Gautier alone discovered it",
              "That no team member can be credited",
              "That the committee reached no conclusion",
            ],
            correctIndex: 0,
            explanation:
              "It says the opinion estimated the discovery could not have been made without the essential contributions of Raymond Turpin and Marthe Gautier. The party rejecting the opinion names the same two people.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "Why does this course treat that quotation as a strong check on its reading of the opinion?",
            options: [
              "It comes from a hostile party",
              "It is the only English translation",
              "It predates the opinion itself",
              "It is in an openly licensed archive",
            ],
            correctIndex: 0,
            explanation:
              "A party that dislikes a document has no reason to quote it in a way that helps the reading. Unfriendly corroboration is the best kind there is.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does the opinion's finding about promotion NOT say, according to this course?",
            options: [
              "That anyone took anything",
              "That promotion is not discovery",
              "That his part was significant",
              "That it had no photomicroscope",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all things the opinion does say. What it does not do is assign a motive, and neither does this course.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course say the Inserm opinion records?",
            options: [
              "Positions, not intentions",
              "Each author's honesty",
              "The awarding bodies' reasons",
              "The notebook, page by page",
            ],
            correctIndex: 0,
            explanation:
              "What was published, who carried the photographs, and where the names did and did not appear. The record shows what was done, not what was thought.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "Which existing lesson in this catalog does this course name as the general version of the promotion point?",
            options: [
              "Credit is a second event, which separates the crediting from the work",
              "Who counts as an author, and who gets thanked",
              "Who corrects a record, and with what",
              "Malone, Walker, and a story that ran uphill",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named, lesson 1. The work is one event and the crediting of it is a separate one, with its own rules and participants. This course does not repeat it.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course say it adds to that existing lesson?",
            options: [
              "An institution that wrote it down",
              "A prize citation naming the parties",
              "A correction by the original journal",
              "A notebook dating each of the events",
            ],
            correctIndex: 0,
            explanation:
              "The Inserm opinion separates promoting a result from producing it in so many words, which is what makes this case a worked example rather than a restatement.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course mean by unfriendly corroboration?",
            options: [
              "A hostile party quoting the document",
              "Rival witnesses giving one account",
              "A committee reversing its own finding",
              "An archive releasing withheld papers",
            ],
            correctIndex: 0,
            explanation:
              "A quotation of a document by a party that rejects it, which is stronger evidence of the wording than a friendly quotation would be.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course say about the two acts the opinion separates?",
            options: [
              "One person can do either or both",
              "Only the producer may promote it",
              "Promotion always wins the credit",
              "An honour must choose between them",
            ],
            correctIndex: 0,
            explanation:
              "And the record of a career does not always say which one a person did, which is why the separation has to be made explicitly rather than assumed.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course say happens when an interested account is treated as the record?",
            options: [
              "A party's version becomes the history",
              "It gains the institution's authority",
              "The account can no longer be corrected",
              "Nothing, if the account is accurate",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the move is to label whose account it is and keep looking, rather than to let the only available version stand in for the record.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "How does the Foundation's 2018 dossier handle the question of the 1962 prize?",
            options: [
              "It gives it a heading of its own",
              "It mentions it only in passing",
              "It defers to the Kennedy citation",
              "It declines to discuss the award",
            ],
            correctIndex: 0,
            explanation:
              "A heading asking whether Lejeune took credit and received all the honours including the Kennedy Prize without sharing it. The dossier poses the charge and answers it.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does this course print about what the 1962 prize was formally for?",
            options: [
              "Only what the defending party says",
              "The awarding body's own citation",
              "Nothing, as no source answers it",
              "The Inserm opinion's account of it",
            ],
            correctIndex: 0,
            explanation:
              "The Kennedy Foundation's own record, citation and recipient list were not fetched, so the only account this course has is the Foundation's, and it labels it as such.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "Who wrote the printed 1969 presentation address?",
            options: [
              "A. G. Knudson Jr.",
              "Jérôme Lejeune",
              "Raymond Turpin",
              "Marthe Gautier",
            ],
            correctIndex: 0,
            explanation:
              "A. G. Knudson Jr., in the American Journal of Human Genetics. What he said in it is unknown here, because the archived copy is a scan and is not open access.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Which pages of the journal carry the 1969 presentation address?",
            options: [
              "119 to 120",
              "602 to 603",
              "1721 to 1722",
              "256 to 265",
            ],
            correctIndex: 0,
            explanation:
              "Volume 22, issue 2, pages 119 to 120. The other three page ranges all belong to the 1959 papers.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "What does the Inserm opinion's third finding say about Marthe Gautier's role?",
            options: [
              "It calls it a key role",
              "It calls it minor",
              "It declines to assess it",
              "It calls it preponderant",
            ],
            correctIndex: 0,
            explanation:
              "The finding calls the technical approach a condition of the discovery and speaks of her key role. The phrase about the essence of the discovery is the Foundation's, not the committee's.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What did the laboratory's lack of a photomicroscope force, according to the Inserm opinion?",
            options: [
              "Sending the slides out",
              "Dropping the control group",
              "An unsigned first note",
              "Repeating every count",
            ],
            correctIndex: 0,
            explanation:
              "The slides went out to be photographed, and the photographs came back to the person who had arranged it. That movement is what the opinion's second finding rests on.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 = 2014: what an ethics committee did
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-saisine-is",
      title: "7 · What kind of document an ethics opinion is",
      section: "Section 3 · 2014: what an ethics committee did",
      body: `Fifty five years after the notes, a committee produced the strongest document in this case. Before reading what it found, it is worth being precise about what sort of thing it is, because its force and its limits both come from that.

**The instrument, described by the institution that runs it.** Inserm's own page says its ethics committee "peut être « saisi » ou s'autosaisir pour réfléchir sur les questions éthiques soulevées par la recherche scientifique médicale et la recherche en santé telle qu'elle est mise en oeuvre au sein de l'Institut. Au terme de sa réflexion, il rend un avis sous forme de notes qui peuvent évoluer en relation avec de nouvelles contributions" (Inserm, n.d.). A question can be referred to it or it can take one up itself. At the end of its reflection it issues an opinion in the form of notes, which may evolve in relation to new contributions.

Read the last clause again. The institution says in advance that these documents may change. An opinion that describes itself as revisable is a different kind of object from a prize citation, which is written to be permanent and is almost never revised at all.

**Who asked.** The document's own title says it responds to "la saisine d'un collectif de chercheurs", the referral of a collective of researchers (Comité d'éthique de l'Inserm [CEI], 2014). Not a court, not a journal, not the family of anyone involved. A group of researchers put a question to their institute's ethics committee.

**What the document is, as its archive records it.** It is deposited in HAL, the French open archive, under the identifier inserm-02110704, produced 2014, in French, by the Inserm Ethics Committee, deposited on 25 April 2019, under a Creative Commons Attribution 4.0 licence. Among the depositor's keywords are "trisomie 21", "chromosome surnuméraire" and, third in the list, "ordre des auteurs", author order. Somebody filing the document said in a keyword what the case is about.

**The licence is worth a sentence of its own.** CC BY 4.0 means anyone may copy and redistribute this opinion, including in full, with attribution. Most of the documents in a credit dispute are somebody's property. This one is not. Whatever you conclude about the case, the central document is free for any reader to fetch and check, which is a property this course would like every case to have.

**How this differs from the document the neighbouring course reads.** The catalog's *What the Citation Records* works prize pages. A prize citation is written by the body that gave the award, about its own decision, and is meant to last. An ethics-committee opinion is written by a body that gave nothing, about other people's decisions, at the request of third parties, and says of itself that it may evolve. Those are different instruments, and the reading skills transfer only up to a point. That is why this case is a course and not a section of that one.

:::reveal According to Inserm's own description, what may happen to a note issued by its ethics committee? ||| It may evolve in relation to new contributions. The institution says in advance that these documents are revisable.

:::reveal Who referred the Marthe Gautier question to the committee, according to the opinion's own title? ||| A collective of researchers. Not a court, not a journal, and not anyone's family.

## Vocabulary
- **Avis**: in French administrative usage, an opinion issued by a body asked to consider a question, as distinct from a judgment.
- **Autosaisine**: a committee taking up a question on its own initiative rather than waiting to be asked.
- **HAL**: the French national open archive where public research bodies deposit documents for permanent free access.
- **CC BY 4.0**: a licence permitting anyone to copy and redistribute a work, including commercially, provided the source is credited.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Inserm. (n.d.). *Notes du Comité d'éthique en réponse aux saisines*. https://www.inserm.fr/ethique/notes-du-comite-dethique-en-reponse-aux-saisines/`,
    },
    {
      slug: "the-five-points",
      title: "8 · Five points, and the word in the first one",
      section: "Section 3 · 2014: what an ethics committee did",
      body: `The opinion ends in five findings. Here they are in order, with the wording that matters.

**One.** "Vu le contexte à l'époque de la découverte du chromosome surnuméraire, la part de Jérôme Lejeune dans celle-ci, a peu de chance d'avoir été prépondérante", unless no credit is given to her training in cell culture, the more so as it was acquired in the United States (Comité d'éthique de l'Inserm [CEI], 2014).

**Two.** His part was "sans doute très significative" in making the discovery known internationally, "ce qui est différent de la découverte elle-même" (CEI, 2014). Section 2 worked this one.

**Three.** The technical approach was a condition of the discovery, with a key role for Marthe Gautier, and it is regrettable that the names were not systematically associated with the discovery in communication or in the award of various honours (CEI, 2014).

**Four.** Present-day campaigning carried on in Lejeune's name commits only the people doing it, and has nothing to do with the research of the late 1950s (CEI, 2014).

**Five.** Authorship, today, with an annex. Lesson 9 takes it.

**Now the word in the first finding.** "A peu de chance d'avoir été prépondérante" is a statement about likelihood. Unlikely to have been preponderant. It does not say that his part was not preponderant, and it does not say what it was. Both sides render it the same way in English, the Foundation's own dossier included, so the hedge survives translation intact. A reader who repeats this finding as "the committee concluded Lejeune did not discover it" has hardened a probability into a fact, and that is the single most common thing that happens to this document in retelling.

**And the condition attached to it.** The finding holds unless one gives no credit to the cell-culture training. So the committee's conclusion is explicitly conditional on how much weight the technique is given. Now look at what the other side argues. The Fondation Jérôme Lejeune's position, in its own words, is that "l'apport de la technique de culture cellulaire ne constitue pas l'essence de la découverte", the contribution of the cell-culture technique is not the essence of the discovery (Fondation Jérôme Lejeune [FJL], 2014a). The two sides are not talking past each other. They are arguing about precisely the term the finding makes its conclusion conditional on, which is a sign that both have read the document carefully.

**The fourth finding, named once.** Finding four is where prenatal testing and the politics around it enter this record, and the committee's move is to fence them off: what is campaigned for today in a person's name belongs to the people campaigning, not to research done in the late 1950s. The Foundation reads the opinion in the opposite direction, saying the referral and the text show a wish to damage the reputation of a scientist who devoted part of his life to the defence of "la vie humaine menacée par l'avortement", human life threatened by abortion (FJL, 2014a). Both sentences are now on the page. This course takes no position on the politics, argues nothing about them, and does not return to them. They are named because leaving them out would make the dispute unintelligible, and they are named once for the same reason.

:::reveal What exactly does the phrase a peu de chance d'avoir été prépondérante claim? ||| That his part in the discovery was unlikely to have been preponderant. It is a statement about likelihood, not a finding that his part was not preponderant.

:::reveal What condition does the first finding attach to itself, and why does that matter? ||| It holds unless no credit is given to her cell-culture training. That is exactly the term the Foundation disputes when it says the technique is not the essence of the discovery, so both sides are arguing about the same clause.

## Vocabulary
- **Preponderant**: in the opinion's usage, the largest or decisive part in something, rather than merely a part.
- **Hedge**: wording that limits how strong a claim is, such as unlikely rather than not, which retellings tend to drop.
- **Conditional finding**: a conclusion stated as holding unless some named thing is true, so the condition is part of the finding.
- **Fencing off**: a document's explicit statement that a subject is outside what it is deciding.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Fondation Jérôme Lejeune. (2014a, September 26). *Trisomie 21, la Fondation Jérôme Lejeune répond*. https://www.fondationlejeune.org/trisomie-21-la-fondation-jerome-lejeune-repond/
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf`,
    },
    {
      slug: "the-annex-and-the-missing-citations",
      title: "9 · The annex, and the documents the opinion does not cite",
      section: "Section 3 · 2014: what an ethics committee did",
      body: `The fifth finding is about authorship now, and it comes with an annex that is easy to skip and should not be.

**Why an annex about modern rules sits in an opinion about 1959.** Look at how Inserm's own website titles this item: "Note du Comité d'éthique sur la saisine concernant les règles de publication", a note on the referral concerning the rules of publication (Inserm, n.d.). The question referred was not only about one 1959 author line. It was about how authorship should be handled, and the committee answered both halves.

**What the annex sets out.** The three conditions for authorship formulated by the Aviesan working group: a substantial role in the work; drafting the article or revising it critically; and approving the final version and taking responsibility for it. The annex cites the international bodies the conditions come from, among them the International Committee of Medical Journal Editors, the World Association of Medical Editors, the European Association of Science Editors, the Committee on Publication Ethics and the Council of Science Editors (Comité d'éthique de l'Inserm [CEI], 2014). The annex refers to the case as "L'affaire Marthe Gautier".

**This catalog already teaches those criteria.** *Who Gets Named*, lesson 13, "Who counts as an author, and who gets thanked", sets out the editors' criteria and the difference between an author and an acknowledgement. This course does not re-teach them. What it adds is the fact that an institution reached for them in a document about a paper published decades before they existed, and did so without pretending they applied in 1959. The annex is about how authorship should be handled now. Applying it backwards would be an anachronism, and the committee did not.

**Now the objection, which is a good one.** The opinion tells a story, in order, with dates: the fellowship, the laboratory, the count, the photographs, the author line. It cites no document for that story. Not a letter, not a notebook, not an archive reference. Readers are asked to accept the narrative on the committee's authority.

**The contesting party says the same thing in stronger words.** The Fondation Jérôme Lejeune's right of reply complains that the committee "ne tienne pas compte de faits établis et documentés, mais préfère s'en rapporter à la relecture et aux souvenirs de Mme Gautier", does not take account of established and documented facts but prefers to rely on her rereading and her recollections (Fondation Jérôme Lejeune [FJL], 2014a). Strip the temperature out of that sentence and what is left is a sourcing objection, and it is the right objection to make.

**But it cuts in both directions, and section 4 shows how.** The Foundation does cite documents. In the form it publishes them, they are photographs of pages and descriptions of contents. Neither party to this dispute hands a reader an evidence base that reader can work through. That is not a scandal. It is the actual condition of the case, and a course that pretended otherwise would be teaching something false about how disputes like this normally look.

**One more thing an ethics opinion is not.** *Who Gets Named*, lesson 21, "Who corrects a record, and with what", lists the instruments that actually change a record: a correction, a retraction, an erratum, an amended author line. An ethics-committee opinion is not on that list. It retracts nothing, amends nothing and rescinds nothing. What it does is put an institution's name behind a reading of the evidence. That is real force, and it is not formal power, and the two should never be confused.

:::reveal Why does an opinion about a 1959 paper contain an annex on present-day authorship rules? ||| Because the referral was about the rules of publication as well as about this case, as Inserm's own title for the note says, so the committee answered both halves.

:::reveal What is the sourcing objection to the opinion, and who makes it? ||| That it narrates the events without citing a document for any of them. The Fondation Jérôme Lejeune makes it, saying the committee preferred her rereading and recollections to established and documented facts.

## Vocabulary
- **Annex**: a section attached to a document setting out supporting material, here the authorship criteria the committee applies.
- **Aviesan**: the French alliance of national life sciences and health research bodies, whose working group formulated the three authorship conditions.
- **Anachronism**: applying a later standard to an earlier event as though it had been in force at the time.
- **Sourcing objection**: the criticism that a narrative does not say which document each of its statements rests on.
- **Formal power**: the ability to change a record directly, such as amending an author line, as distinct from influence over how it is read.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Fondation Jérôme Lejeune. (2014a, September 26). *Trisomie 21, la Fondation Jérôme Lejeune répond*. https://www.fondationlejeune.org/trisomie-21-la-fondation-jerome-lejeune-repond/
Inserm. (n.d.). *Notes du Comité d'éthique en réponse aux saisines*. https://www.inserm.fr/ethique/notes-du-comite-dethique-en-reponse-aux-saisines/`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · What an ethics committee did",
      section: "Section 3 · 2014: what an ethics committee did",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does Inserm say may happen to a note issued by its ethics committee?",
            options: [
              "It may evolve with new contributions",
              "It becomes binding and unalterable",
              "It is withdrawn if a reply is filed",
              "The Académie must review it first",
            ],
            correctIndex: 0,
            explanation:
              "Des notes qui peuvent évoluer en relation avec de nouvelles contributions. The institution says in advance that these documents are revisable, which a prize citation never does.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "By what two routes can a question reach the Inserm ethics committee?",
            options: [
              "Referral or its own initiative",
              "A court order or a journal request",
              "A staff vote or a ministry order",
              "A personal complaint or an appeal",
            ],
            correctIndex: 0,
            explanation:
              "The committee can be saisi, referred a question, or it can autosaisir, take one up itself. This one came by referral.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Who referred the Marthe Gautier question, according to the opinion's own title?",
            options: [
              "A collective of researchers",
              "The Académie des sciences",
              "The Fondation Jérôme Lejeune",
              "The French research ministry",
            ],
            correctIndex: 0,
            explanation:
              "La saisine d'un collectif de chercheurs. Not a court, not a journal, and not anyone's family.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What is an avis, in the French administrative sense used here?",
            options: [
              "An opinion, not a judgment",
              "A binding ruling on researchers",
              "A formal complaint by a party",
              "A journal's published correction",
            ],
            correctIndex: 0,
            explanation:
              "An opinion issued by a body asked to consider a question. It carries the institution's name and no formal power over any record.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What is autosaisine?",
            options: [
              "A committee taking up a question itself",
              "A researcher withdrawing a referral",
              "A fixed-cycle review of its own opinions",
              "Automatic deposit of notes in an archive",
            ],
            correctIndex: 0,
            explanation:
              "Rather than waiting to be asked. Inserm's page names both routes, and this opinion came by the other one.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Under what identifier is the 2014 opinion deposited?",
            options: [
              "inserm-02110704",
              "PMID 13629913",
              "PMC1706525",
              "bpt6k32002",
            ],
            correctIndex: 0,
            explanation:
              "In HAL, the French national open archive. The other three identifiers all belong to documents named elsewhere in this course.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "In which archive is the opinion deposited?",
            options: [
              "HAL",
              "Gallica",
              "PMC",
              "arXiv",
            ],
            correctIndex: 0,
            explanation:
              "The French national open archive, where public research bodies deposit documents for permanent free access.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "When was the opinion deposited in that archive?",
            options: [
              "25 April 2019",
              "September 2014",
              "3 October 1969",
              "26 September 2014",
            ],
            correctIndex: 0,
            explanation:
              "Produced in 2014 and deposited in 2019. The archive record carries both dates, and they are five years apart.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Under what licence is the opinion deposited?",
            options: [
              "CC BY 4.0",
              "CC BY-NC 4.0",
              "No licence",
              "CC BY-ND 4.0",
            ],
            correctIndex: 0,
            explanation:
              "Creative Commons Attribution 4.0. Anyone may copy and redistribute it, including in full, with credit.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What does that licence permit a reader to do?",
            options: [
              "Copy and redistribute it with credit",
              "Read it online without sharing a copy",
              "Quote it up to a stated word limit",
              "Translate it but not reproduce it",
            ],
            correctIndex: 0,
            explanation:
              "Which is unusual. Most documents in a credit dispute are somebody's property, and here the central one is free for any reader to fetch and check.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Which of the depositor's keywords names what this case is about?",
            options: [
              "Ordre des auteurs",
              "Prix Kennedy",
              "Culture cellulaire",
              "Photomicroscope",
            ],
            correctIndex: 0,
            explanation:
              "Author order, third in the list after trisomie 21 and chromosome surnuméraire. Somebody filing the document said in a keyword what the case is about.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What language is the 2014 opinion written in?",
            options: [
              "French",
              "English",
              "Bilingual",
              "German",
            ],
            correctIndex: 0,
            explanation:
              "Every translation in this course is the course's own, and it says so. The Foundation's English dossier supplies its own translations of the same sentences.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Which body is recorded as producing the 2014 opinion?",
            options: [
              "The Inserm Ethics Committee",
              "The referring collective",
              "Aviesan, the research alliance",
              "The Académie de médecine",
            ],
            correctIndex: 0,
            explanation:
              "Comité d'éthique de l'Inserm, with the institute itself as the second affiliation on the archive record.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "How does an ethics-committee opinion differ from a prize citation in who writes it?",
            options: [
              "A body that gave nothing writes it",
              "The awarding body writes both",
              "The recipient writes it as remarks",
              "A journal's editor writes both",
            ],
            correctIndex: 0,
            explanation:
              "A prize citation is a body describing its own decision. An opinion is a body describing other people's decisions, at the request of third parties.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "How does an ethics-committee opinion differ from a prize citation in permanence?",
            options: [
              "It may be revised, as Inserm says",
              "It expires after a fixed period",
              "It is sealed for a term of years",
              "It can never be revised at all",
            ],
            correctIndex: 0,
            explanation:
              "Inserm says its notes may evolve in relation to new contributions. A prize citation is written to last and is almost never revised.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Why does this course exist as a course rather than as a section of the prize-citation course?",
            options: [
              "The instruments differ",
              "The material is too long",
              "The notes are in French",
              "The other course is public",
            ],
            correctIndex: 0,
            explanation:
              "The deciding document here is an institutional ethics opinion rather than a prize citation, and the two are read differently.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What does this course say about the reading skills taught by the prize-citation course?",
            options: [
              "They transfer only partly",
              "They transfer completely",
              "They do not transfer at all",
              "Only to openly licensed texts",
            ],
            correctIndex: 0,
            explanation:
              "Sorting a page into its component documents is a general skill. What each kind of document can carry is not, which is what makes this a separate case.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What research does Inserm say its ethics committee considers?",
            options: [
              "Research carried out at the institute",
              "All French biomedical research anywhere",
              "Historical questions from academies",
              "All state-funded research, anywhere",
            ],
            correctIndex: 0,
            explanation:
              "Ethical questions raised by medical scientific research and health research as it is carried out within the Institute, in Inserm's own wording.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What does this course say is unusual about the central document of this dispute?",
            options: [
              "It is free to redistribute",
              "It can amend the author line",
              "It was issued in two languages",
              "Every committee member signed it",
            ],
            correctIndex: 0,
            explanation:
              "Most documents in a credit dispute are somebody's property. This one carries an open licence, so any reader can fetch it and check the wording.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What is HAL?",
            options: [
              "The French open archive",
              "Inserm's referral register",
              "The index of the 1959 notes",
              "The BnF's scanned periodicals",
            ],
            correctIndex: 0,
            explanation:
              "Where French public research bodies deposit documents for permanent free access. The opinion sits there under a Creative Commons licence.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What is a prize citation meant to be, in the contrast this lesson draws?",
            options: [
              "Permanent",
              "Provisional",
              "Private",
              "Contested",
            ],
            correctIndex: 0,
            explanation:
              "Written to last and almost never revised, which is the opposite of what Inserm says about its own notes.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Which keyword sits first in the archive record's list?",
            options: [
              "Trisomie 21",
              "Ordre des auteurs",
              "Comité d'éthique",
              "Marthe Gautier",
            ],
            correctIndex: 0,
            explanation:
              "Trisomie 21, then chromosome surnuméraire, then ordre des auteurs. The third one is the one that says what the dispute is.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What does this course say the force and the limits of an ethics opinion both come from?",
            options: [
              "What kind of document it is",
              "The signatories' seniority",
              "How many sources it cites",
              "Whether it is defended in court",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the lesson describes the instrument before reading the findings. An opinion is not a judgment and not a correction.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "What does the opinion's FIRST finding say about Lejeune's part in the discovery?",
            options: [
              "Unlikely to have been preponderant",
              "Certainly not preponderant at the time",
              "Doubtless very significant in itself",
              "Impossible to assess from the record",
            ],
            correctIndex: 0,
            explanation:
              "A peu de chance d'avoir été prépondérante. The second phrase, sans doute très significative, belongs to the finding about promotion, not to this one.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What kind of statement is the first finding making?",
            options: [
              "One about likelihood",
              "A finding of fact",
              "A recommendation",
              "An unendorsed quote",
            ],
            correctIndex: 0,
            explanation:
              "It says unlikely. Turning unlikely into a flat statement of fact is the single most common thing that happens to this document in retelling.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the first finding NOT say?",
            options: [
              "That his part was not preponderant",
              "That it was unlikely to be preponderant",
              "That it depends on her training",
              "That she trained in the United States",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all things the finding does say. It states a likelihood and it does not state what his part actually was.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What condition does the first finding attach to itself?",
            options: [
              "Unless her training is discounted",
              "Unless the notebook is admitted",
              "Unless the letters are supplied",
              "Unless a further referral is made",
            ],
            correctIndex: 0,
            explanation:
              "It holds unless no credit is given to her training in cell culture, the more so as it was acquired in the United States. The condition is part of the finding.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "Where does the first finding say her cell-culture training was acquired?",
            options: [
              "The United States",
              "The Trousseau hospital",
              "An American lab in Paris",
              "The finding does not say",
            ],
            correctIndex: 0,
            explanation:
              "The finding says the more so as it was acquired in the USA, so the place is part of the weight the committee gives the training.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this course say is the most common thing that happens to the first finding in retelling?",
            options: [
              "The word unlikely is dropped",
              "The conclusion is left out of it",
              "It is credited to the Foundation",
              "Its date is given as 2009",
            ],
            correctIndex: 0,
            explanation:
              "It becomes the committee concluded Lejeune did not discover it, which hardens a probability into a fact the document never states.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What happens to the hedge when both sides render the first finding in English?",
            options: [
              "It survives intact",
              "It is made stronger",
              "It disappears entirely",
              "It turns conditional",
            ],
            correctIndex: 0,
            explanation:
              "Unlikely to have been preponderant, in the Foundation's own dossier as well. The wording is not in dispute; what it means is.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the SECOND finding say about his part in making the discovery known internationally?",
            options: [
              "Doubtless very significant",
              "Unlikely to be preponderant",
              "Confined to the 1959 notes",
              "Shared equally with the others",
            ],
            correctIndex: 0,
            explanation:
              "Sans doute très significative, and then a distinction: which is different from the discovery itself.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the third finding call the technical approach?",
            options: [
              "A condition of the discovery",
              "The essence of the discovery",
              "Something any lab could supply",
              "Outside the committee's remit",
            ],
            correctIndex: 0,
            explanation:
              "A condition of the discovery, with a key role for Marthe Gautier. The phrase about the essence of the discovery is the Foundation's, and it is the opposite claim.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the third finding call regrettable?",
            options: [
              "Two names missing from the honours",
              "The misspelling of Gautier's name",
              "The lack of a photomicroscope",
              "The long delay before the referral",
            ],
            correctIndex: 0,
            explanation:
              "That the names were not systematically associated with the discovery, in communication as in the award of various honours. The possessive is plural.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the FOURTH finding say about present-day campaigning carried on in Lejeune's name?",
            options: [
              "It commits only those doing it",
              "It continues the 1959 work",
              "It disqualifies him from credit",
              "It is not addressed at all",
            ],
            correctIndex: 0,
            explanation:
              "And has nothing to do with the research of the late 1950s. The committee's move is to fence the subject off rather than to argue it.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "How does the Fondation Jérôme Lejeune read the purpose of the referral and the opinion?",
            options: [
              "As a wish to damage a reputation",
              "As a fair but partly wrong review",
              "As Inserm claiming the discovery",
              "As a routine authorship check",
            ],
            correctIndex: 0,
            explanation:
              "Its right of reply gives two explanations, one about sexism narratives and one about damaging the reputation of a scientist who defended human life threatened by abortion. This course quotes both and argues neither.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "Whose phrase is la vie humaine menacée par l'avortement, as quoted in this course?",
            options: [
              "The Foundation's",
              "The committee's",
              "The collective's",
              "The Académie's",
            ],
            correctIndex: 0,
            explanation:
              "It appears in the Foundation's right of reply. The committee's own fourth finding goes the other way, saying present-day campaigning has nothing to do with the 1950s research.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What position does this course take on the politics named in the fourth finding?",
            options: [
              "None, it argues neither",
              "The committee's position",
              "The Foundation's position",
              "A position between the two",
            ],
            correctIndex: 0,
            explanation:
              "It quotes both sentences, argues neither, and does not return to the subject. The course is about an author line, a discovery and how credit was handled.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "Why does this course name the politics at all?",
            options: [
              "The dispute is otherwise unintelligible",
              "The 1959 notes discuss prenatal testing",
              "The opinion's first finding rests on them",
              "The 1962 and 1969 honours rested on them",
            ],
            correctIndex: 0,
            explanation:
              "Leaving them out would make the heat of the dispute impossible to explain. Naming them once, in each party's own words, is the whole of what the course does with them.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What is the Foundation's stated position on the cell-culture technique?",
            options: [
              "Not the essence of the discovery",
              "The essence of the discovery",
              "Irrelevant to the chromosome count",
              "Obtainable only from America",
            ],
            correctIndex: 0,
            explanation:
              "L'apport de la technique de culture cellulaire ne constitue pas l'essence de la découverte. It is the exact term the committee's first finding makes its conclusion conditional on.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this course conclude from the fact that both sides argue about the weight of the technique?",
            options: [
              "Both read the document carefully",
              "It is really about the 1962 prize",
              "The finding was meant to provoke",
              "Neither read the other's statements",
            ],
            correctIndex: 0,
            explanation:
              "They are not talking past each other. They are arguing about precisely the clause the finding makes its conclusion conditional on.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What is the FIFTH finding about?",
            options: [
              "Authorship today",
              "The 1962 Kennedy Prize",
              "The referral itself",
              "The laboratory notebook",
            ],
            correctIndex: 0,
            explanation:
              "Authorship as it should be handled now, with an annex setting out the criteria. Lesson 9 reads it.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What is a conditional finding, as this lesson uses the term?",
            options: [
              "A conclusion stated with an unless",
              "A conclusion revisable on new input",
              "A conclusion reached by a majority",
              "A conclusion stated in the alternative",
            ],
            correctIndex: 0,
            explanation:
              "A conclusion stated as holding unless some named thing is true, which makes the named thing part of the finding rather than an aside.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this course say a reader does by repeating the first finding as a flat statement?",
            options: [
              "Hardens a probability into a fact",
              "Translates the French accurately",
              "Follows the Foundation's rendering",
              "Applies the finding's own condition",
            ],
            correctIndex: 0,
            explanation:
              "The document says unlikely. Nothing in it says that his part was not preponderant, and a retelling that says so has added a claim.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does the second finding distinguish his significant part from?",
            options: [
              "The discovery itself",
              "The two communications",
              "Staining the slides",
              "The 1962 and 1969 honours",
            ],
            correctIndex: 0,
            explanation:
              "Ce qui est différent de la découverte elle-même. Making a result known and producing it are two acts, and the opinion separates them explicitly.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this lesson mean by fencing off?",
            options: [
              "Saying a subject is outside the decision",
              "Refusing to name a party to a dispute",
              "Publishing a finding without evidence",
              "Deferring a question to a later note",
            ],
            correctIndex: 0,
            explanation:
              "A document's explicit statement that something is not what it is deciding. The fourth finding does that with present-day campaigning.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "How does Inserm's own website title the note about this case?",
            options: [
              "A note on the rules of publication",
              "A note on the 1959 extra chromosome",
              "A note on honours in French research",
              "A note on a named Trousseau researcher",
            ],
            correctIndex: 0,
            explanation:
              "Note du Comité d'éthique sur la saisine concernant les règles de publication. The referral was about how authorship should be handled as well as about this case.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which of these is one of the three Aviesan authorship conditions the annex sets out?",
            options: [
              "A substantial role in the work",
              "Heading the department concerned",
              "Being thanked in an earlier paper",
              "Providing the funding for the work",
            ],
            correctIndex: 0,
            explanation:
              "The three are a substantial role in the work, drafting or critically revising the article, and approving the final version and taking responsibility for it.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which of these is ALSO one of those three conditions?",
            options: [
              "Approving the final version",
              "Supervising the researcher",
              "Presenting it at a conference",
              "Depositing the underlying data",
            ],
            correctIndex: 0,
            explanation:
              "Approving the final version and taking responsibility for it. The third condition is drafting the article or revising it critically.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What kind of bodies does the annex cite for those conditions?",
            options: [
              "International editors' organisations",
              "National academies in three countries",
              "Funding agencies and their grants",
              "Courts that have ruled on authorship",
            ],
            correctIndex: 0,
            explanation:
              "Among them the International Committee of Medical Journal Editors, the World Association of Medical Editors, the European Association of Science Editors, the Committee on Publication Ethics and the Council of Science Editors.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does the annex call the case?",
            options: [
              "L'affaire Marthe Gautier",
              "La controverse trisomie 21",
              "La saisine du collectif",
              "L'affaire Marthe Gauthier",
            ],
            correctIndex: 0,
            explanation:
              "With the surname spelled correctly, unlike the heading Inserm's own listing page puts above the document.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which existing lesson in this catalog already teaches the editors' authorship criteria?",
            options: [
              "Who counts as an author, and who gets thanked",
              "Credit is a second event",
              "Who corrects a record, and with what",
              "Three documents on one page",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named, lesson 13. This course does not re-teach the criteria; it shows an institution reaching for them.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does this course say the annex is about?",
            options: [
              "How authorship should be handled now",
              "How authorship was handled in the 1950s",
              "Whether the 1959 line met the criteria",
              "Whether the committee met the criteria",
            ],
            correctIndex: 0,
            explanation:
              "Which is why applying it backwards to 1959 would be an anachronism, and why the committee did not do so.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What would applying the annex's criteria to the 1959 author line be?",
            options: [
              "An anachronism",
              "A correction",
              "A citation",
              "A referral",
            ],
            correctIndex: 0,
            explanation:
              "Applying a later standard to an earlier event as though it had been in force. The annex does not claim it was.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does the opinion cite in support of its narrative of events?",
            options: [
              "Nothing",
              "The notebook",
              "The letters",
              "The 1959 texts",
            ],
            correctIndex: 0,
            explanation:
              "Not a letter, not a notebook, not an archive reference. Readers are asked to accept the narrative on the committee's authority.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does the Foundation say the committee preferred to established and documented facts?",
            options: [
              "Her rereading and recollections",
              "The referring collective's testimony",
              "The index records of the 1959 papers",
              "The criteria in its own annex",
            ],
            correctIndex: 0,
            explanation:
              "Sa relecture et ses souvenirs, in the right of reply of 26 September 2014. Stripped of its temperature, that is a sourcing objection.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What is left of that complaint when its heat is removed?",
            options: [
              "A sourcing objection",
              "An accusation of bad faith",
              "A denial of its authority",
              "A withdrawal request",
            ],
            correctIndex: 0,
            explanation:
              "That the narrative does not say which document each statement rests on, which this course calls the right objection to make.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "In what form does the Foundation publish the documents it cites?",
            options: [
              "Photographs and descriptions",
              "Full transcriptions in HAL",
              "Certified copies on request",
              "Facsimiles in its 2018 dossier",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the sourcing objection cuts both ways, and why section 4 reads the Foundation's evidence with the same care.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does this course say neither party to the dispute hands a reader?",
            options: [
              "A workable evidence base",
              "A statement of its position",
              "English translations of it",
              "A named contact person",
            ],
            correctIndex: 0,
            explanation:
              "One narrates without citing; the other cites without publishing readable text. That is the actual condition of the case.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Why does this course say that state of affairs is not a scandal?",
            options: [
              "It is how such disputes normally look",
              "Neither party must publish anything",
              "The index records supply everything",
              "The open licence makes the rest moot",
            ],
            correctIndex: 0,
            explanation:
              "A course that pretended otherwise would be teaching something false about how credit disputes are usually documented.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which lesson in this catalog lists the instruments that actually correct a record?",
            options: [
              "Who corrects a record, and with what",
              "Who counts as an author, and who gets thanked",
              "Credit is a second event",
              "Format caps, and what they explain",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named, lesson 21. A correction, a retraction, an erratum, an amended author line. An ethics opinion is not among them.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does this course say about an ethics-committee opinion and that list of correction instruments?",
            options: [
              "It is not on the list",
              "It heads the list",
              "It replaces the list",
              "Partly on the list",
            ],
            correctIndex: 0,
            explanation:
              "It retracts nothing, amends nothing and rescinds nothing. This case adds an instrument the list does not have.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does an ethics-committee opinion do instead of correcting a record?",
            options: [
              "Puts an institution's name behind a reading",
              "Refers the record to the original journal",
              "Obliges the awarding bodies to reconsider",
              "Requires the parties to deposit documents",
            ],
            correctIndex: 0,
            explanation:
              "Which is real force. It is not formal power, and this course insists on the difference.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which two things does this lesson say should never be confused?",
            options: [
              "Real force and formal power",
              "An opinion and an annex",
              "A referral and an autosaisine",
              "A narrative and a finding",
            ],
            correctIndex: 0,
            explanation:
              "An opinion can change how a record is read without having any power to change the record itself.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What is a sourcing objection?",
            options: [
              "A narrative not saying what it rests on",
              "A claim that its sources are too old",
              "A complaint that it quotes at length",
              "Refusing a source from an interested party",
            ],
            correctIndex: 0,
            explanation:
              "The criticism that a narrative does not say which document each of its statements comes from. It is the objection the Foundation makes and the objection this course endorses.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What is Aviesan?",
            options: [
              "A French research alliance",
              "An Inserm working group",
              "The editors' criteria body",
              "The French open archive",
            ],
            correctIndex: 0,
            explanation:
              "The alliance of French national life sciences and health research bodies, whose working group formulated the three authorship conditions the annex sets out.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does this course add to the existing lesson on authorship criteria?",
            options: [
              "An institution reaching for them",
              "A correction to the criteria",
              "Proof they applied to 1959 lines",
              "Their first French translation",
            ],
            correctIndex: 0,
            explanation:
              "An institution used the modern criteria in a document about a paper published decades before they existed, and was careful not to apply them backwards.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does the opinion's first finding say about the context at the time of the discovery?",
            options: [
              "It weighs on the conclusion",
              "It is irrelevant to authorship",
              "It was not considered at all",
              "Only the Foundation raised it",
            ],
            correctIndex: 0,
            explanation:
              "The finding opens with vu le contexte à l'époque, given the context at the time. The period is part of the reasoning rather than a preface to it.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this course say a reader is asked to accept the opinion's narrative on?",
            options: [
              "The committee's authority",
              "The documents in its annex",
              "The agreement of both parties",
              "The open licence it carries",
            ],
            correctIndex: 0,
            explanation:
              "Not a letter, not a notebook, not an archive reference. The annex is about authorship criteria, not about the events narrated.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 = A live dispute, and what it cannot settle
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-contests-it",
      title: "10 · Who contests it, and what they say",
      section: "Section 4 · A live dispute, and what it cannot settle",
      body: `The party that rejects the Inserm opinion is the **Fondation Jérôme Lejeune**. It is named here, in full, because a course that says "critics" when it means one identifiable organisation with published documents is hiding the most checkable thing in the case.

**What this course read.** Three of its texts: a right of reply dated 26 September 2014; a press release dated 29 September 2014, signed Professeur Lucien Israël; and a 21 page English dossier of September 2018, *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. All three were fetched and read in full.

**Its case, in its own order.** The signature order marks the first name as the discoverer (lesson 1). It was Turpin, head of the department, who asked Lejeune to sign first, "désignant ainsi lui-même, aux yeux de l'histoire, celui qui resterait le découvreur de la cause du mongolisme", thereby himself designating, in the eyes of history, the one who would remain the discoverer (Fondation Jérôme Lejeune [FJL], 2014b). Lejeune "ne s'est jamais attribué la découverte lui-même", never attributed the discovery to himself; it was attributed to him (FJL, 2014a). And the contribution of the cell-culture technique "ne constitue pas l'essence de la découverte" (FJL, 2014a).

**Its definition, which is the part worth studying.** "Le découvreur est celui qui est parti d'une hypothèse, l'a vérifiée, y a cru et a porté le projet." The discoverer is the one who started from a hypothesis, verified it, believed in it and carried the project (FJL, 2014a). Its 2018 dossier illustrates it with an analogy: on the discovery of America, was it Columbus who first saw the shore, or a sailor? The discoverer, it says, is the one who began from a hypothesis and carried it (FJL, 2018).

**The fight is over a verb, and both sides know it.** The 2018 dossier quotes the Inserm opinion's own wording back at it: the notice states that Marthe Gautier "will observe the 47 chromosomes", and, the dossier says, to observe does not mean to discover the cause (FJL, 2018). *Observer* against *découvrir*. The catalog's *What the Citation Records* makes finding the crediting verb the second step of its method. Here you do not have to find it. Both parties found it first and are standing on either side of it, which is what a mature credit dispute looks like when both sides are literate.

**Two definitions of one word, in two documents.** Set the Foundation's definition of a discoverer beside the authorship conditions in the opinion's annex: a substantial role in the work, drafting or critical revision, approval and responsibility. Neither is wrong. They answer different questions. One asks who earns the title. The other asks whose name belongs on the paper. A great deal of this dispute is two institutions answering two different questions and disagreeing about the answers.

:::reveal How does the Fondation Jérôme Lejeune define a discoverer? ||| The one who started from a hypothesis, verified it, believed in it and carried the project.

:::reveal Which verb are the two sides fighting over, and how does each read it? ||| Observer against découvrir. The Inserm opinion says she would observe the 47 chromosomes; the Foundation's dossier answers that to observe is not to discover the cause.

## Vocabulary
- **Right of reply**: a response a party sends for publication after a statement it considers damaging, a recognised practice in French media.
- **Crediting verb**: the word in a sentence that assigns the work to a person, such as observed, discovered or established.
- **Analogy, as argument**: a comparison offered to show what a word should mean, which can be tested by asking whether the two cases really are alike.
- **Reported speech**: writing what a party says as their claim rather than as fact, which is how this course handles every document it has not read.

## Sources
Fondation Jérôme Lejeune. (2014a, September 26). *Trisomie 21, la Fondation Jérôme Lejeune répond*. https://www.fondationlejeune.org/trisomie-21-la-fondation-jerome-lejeune-repond/
Fondation Jérôme Lejeune. (2014b, September 29). *Controverse sur la découverte de la trisomie 21: Éléments de réponse*. https://www.fondationlejeune.org/controverse-sur-la-decouverte-de-la-trisomie-21-elements-de-reponse/
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf`,
    },
    {
      slug: "the-documents-it-offers",
      title: "11 · The documents it offers, and what offering is not",
      section: "Section 4 · A live dispute, and what it cannot settle",
      body: `The Foundation's strongest move is that it names its evidence. Lesson 9 said the opinion cites no documents. The Foundation cites several, which is more than the other side does, and it still does not put them in front of a reader.

**What it says it holds.** A laboratory analysis notebook kept by Lejeune from 10 July 1957, whose entry of 22 May 1958 it says records him counting 47 chromosomes. A handwritten letter from Turpin to Lejeune, which it says reports that Marthe Gautier was still counting 46, and which it holds "à la disposition des historiens", at the disposal of historians (FJL, 2014a). A letter from Lejeune to Gautier of 5 November 1958 thanking her for "excellent preparations". An extract from his inaugural lecture of 10 March 1965 saluting "dear Marthe Gautier" and citing her "skill" and "tenacity" during "two years of failures and half-successes". A dated summary of his titles and research positions. Correspondence, and a personal diary (FJL, 2018).

**How it publishes them.** As photographs, one image per document, in a public online album, linked from the dossier. This course opened none of those images and read none of those documents. Everything in the paragraph above is therefore what the Foundation says the documents say, and it is written in reported speech for that reason.

**A discrepancy inside the dossier, found in this pass.** The body text of the 2018 dossier dates the Turpin letter 27 October 1958, twice. The caption on the annex reproducing that letter reads "Letter from Raymond Turpin à J. Lejeune dated 17 October 1958". One document, two dates, ten days apart, inside one 21 page file. This course does not know which is right. It uses 27 October when reporting the Foundation's claim, because that is what the body text says twice, and it files a research check for the rest.

**The rule this case teaches.** A document offered is not a document read. A party that lists its evidence has done more than a party that lists none, and it has still not handed you anything you can check. The offer to historians is real and has an address on it, and the honest description of the present state is that the offer has not been taken up here.

**One more reading note, about translations.** The French press release says Lejeune was "le cadet de Marthe Gautier", the younger of the two. The 2018 English version renders the same point as Lejeune being "Marthe Gautier's youngest son". That is a translation error rather than a claim, and it is worth showing, because a reader working only from the English edition of a translated dossier will meet sentences its authors did not write. Where the two versions differ, this course quotes the French.

:::reveal What does this course mean by saying a document offered is not a document read? ||| Naming your evidence and publishing it as an image is more than naming nothing, and it still leaves the reader unable to check anything. So the Foundation's evidence is reported as its claims, not as facts.

:::reveal What discrepancy does the 2018 dossier contain about the Turpin letter? ||| Its body text dates the letter 27 October 1958 twice, while the caption on the annex reproducing it says 17 October 1958.

## Vocabulary
- **At the disposal of historians**: an offer to make a document available on request, which is not the same as publishing it.
- **Provenance**: where a document came from and how it reached the reader, which decides how much weight it can carry.
- **Caption discrepancy**: a mismatch between how a document is described in a text and how it is labelled where it is reproduced.
- **Reported speech**: writing a party's statement as their claim rather than as established fact.

## Sources
Fondation Jérôme Lejeune. (2014a, September 26). *Trisomie 21, la Fondation Jérôme Lejeune répond*. https://www.fondationlejeune.org/trisomie-21-la-fondation-jerome-lejeune-repond/
Fondation Jérôme Lejeune. (2014b, September 29). *Controverse sur la découverte de la trisomie 21: Éléments de réponse*. https://www.fondationlejeune.org/controverse-sur-la-decouverte-de-la-trisomie-21-elements-de-reponse/
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf`,
    },
    {
      slug: "a-bailiff-in-bordeaux",
      title: "12 · A bailiff in Bordeaux",
      section: "Section 4 · A live dispute, and what it cannot settle",
      body: `In early 2014 a French genetics meeting in Bordeaux was to present Marthe Gautier with a medal, and she was to speak about the discovery. The talk did not happen.

**The Foundation's own account of what it did.** "En février 2014 quand elle a appris que Marthe Gautier s'apprêtait à intervenir sur la découverte de la trisomie 21, devant les Assises de génétique humaine et médicale à Bordeaux, la Fondation a décidé de faire enregistrer ses propos par voie d'huissier, en vertu d'une autorisation accordée par la justice, afin de défendre la réputation de Jérôme Lejeune, s'il venait à être diffamé" (Fondation Jérôme Lejeune [FJL], 2014b). In February 2014, when it learned she was about to speak on the discovery of trisomy 21 before the Assises de génétique humaine et médicale in Bordeaux, the Foundation decided to have her words recorded by a bailiff, by virtue of an authorisation granted by the courts, to defend Jérôme Lejeune's reputation should he be defamed.

**Why that paragraph is unusually solid.** It is an account of an act, by the party that performed it, published on its own website. There is no dispute about whether a bailiff was sent, whether a court authorised it, or why, because the side that did it says all three. Most contested events in a credit dispute are nothing like this well evidenced.

**What the sentence does not date.** Read it precisely. "En février 2014 quand elle a appris" dates the Foundation's *learning*, not the meeting. A podcast transcript published by Scientific American in 2025 places the meeting in January 2014, and reports that two bailiffs waited in the lobby of her hotel at seven in the morning with a court mandate to record the speech, that the organisers cancelled the talk hours before it was due, and that the medal was presented privately the following day (Scientific American, 2025). This course did not fetch the contemporary news report from February 2014 that would settle the date, because the request for it was refused. So it says early 2014, and files a check.

**What this course takes from a secondary source, and what it leaves.** It takes the sequence of events, attributed. It leaves every person. That transcript names conference organisers, a commentator and a member of her family. None of them appears in this course, because private individuals quoted in secondary sources are not this catalog's to publish.

**Two accounts of the same week, doing different jobs.** The transcript reports that the bailiffs are what made the story widely known. The Foundation's own texts say nothing about that effect; what they say is that the Foundation's intuition was right, meaning that the Inserm opinion published later that year rewrote the history of the discovery in her favour. Neither account is a summary of the other, and a reader who has both has more than a reader who has one.

:::reveal What does the Foundation's own sentence about February 2014 actually date? ||| The moment the Foundation learned she was going to speak, not the date of the meeting itself. The meeting's date is reported differently elsewhere and stays open here.

:::reveal Why is the bailiff episode unusually well evidenced for a contested event? ||| Because the account of it comes from the party that did it, published on its own website, and covers the bailiff, the court authorisation and the stated reason.

## Vocabulary
- **Huissier**: a French judicial officer who can be instructed to make a formal, legally usable record of what is said or done.
- **Court authorisation**: permission from a judge for an act that would otherwise not be allowed, here the recording of a talk.
- **Assises de génétique humaine et médicale**: the French human and medical genetics meeting, at which the medal was to be presented.
- **Defamation, as a stated motive**: the Foundation's reason for the recording, namely to have evidence if Lejeune were defamed.

## Sources
Fondation Jérôme Lejeune. (2014b, September 29). *Controverse sur la découverte de la trisomie 21: Éléments de réponse*. https://www.fondationlejeune.org/controverse-sur-la-decouverte-de-la-trisomie-21-elements-de-reponse/
Scientific American. (2025, February 13). *This researcher discovered the cause of Down syndrome, but for 50 years got none of the credit* [Podcast transcript]. Lost Women of Science. https://www.scientificamerican.com/article/this-researcher-discovered-the-cause-of-down-syndrome-but-for-50-years-got/`,
    },
    {
      slug: "what-neither-side-settles",
      title: "13 · What neither side settles, and what would",
      section: "Section 4 · A live dispute, and what it cannot settle",
      body: `The question everybody argues about is who first counted 47 chromosomes. This course does not know, and this lesson is the accounting of why.

**The three claims, and their evidence.** The Foundation says a notebook entry of 22 May 1958 shows Lejeune counting first, and that a Turpin letter later that year shows her still at 46. Both documents are published as photographs; this course read neither, and the letter carries two different dates inside the Foundation's own file. Her own account is an article in *Médecine/Sciences*, volume 25, number 3, pages 311 to 315, published in March 2009. Its full text returns an error, and nobody working on this catalog has read it. The Inserm opinion says she would observe the 47 against 46 in the controls, and cites no document for that or for anything else in its narrative.

**So every characterisation of her account in this course belongs to whoever made it.** When the Foundation says she claims to have discovered trisomy 21 by herself, that is the Foundation's description of an article this course has not read, and it is written as such. A reader who wants to know what she wrote has to read her, and so does this course.

**What this course does not say.** That Lejeune took anything. That the committee was biased, or that it was right. That the Foundation acts in bad faith, or in good faith. Anything about prenatal testing beyond quoting each party once. Anything at all about any private individual, relative or bystander.

**What it does say it has established.** The author line of both 1959 notes and the different order of a third paper that year, from index records. A spelling difference in those records, and the opinion's phrase about errors. Two honours, named and dated, each in one man's name. The opinion's five findings in French, with the hedge in the first one and the condition attached to it. The Foundation's case in its own words, including its definition of a discoverer and the list of documents it offers. And a bailiff, from the party that sent him.

**What would settle what.** The printed 1959 page: the Gallica scan, past its captcha. Who counted first: the notebook page and the Turpin letter published as legible text with their provenance, plus her 2009 article read in full. The 1962 prize: the awarding body's own record. The 1969 award: the presentation address, out from behind its paywall. The Bordeaux date: the contemporary news report of February 2014. Every one of those is a specific document in a specific place, which is what an open question should look like when it is written down properly.

**Where to read next in this catalog, none of it repeated here.** *What the Citation Records* works prize pages, and its closing lessons, "The method, in five steps" and "What these cases do not prove", are the model this lesson follows. *The Paper and the Prize* sets an author line against a prize in the case of Esther Lederberg, in its lessons 5 and 6. *Who Gets Named* supplies the apparatus: lesson 1 on credit as a second event, lesson 3 on teaching a contested claim as contested, which is the rule this entire section was written under, lesson 7 on reading an interested party's evidence closely instead of discounting it, lesson 13 on authorship, and lesson 21 on what actually corrects a record.

**The thing to carry away.** In a live dispute the temptation is to decide, because deciding feels like finishing. The documents here support a great many precise statements and they do not support a verdict. Saying which is which, out loud, in the course itself, is not a failure to reach a conclusion. It is the conclusion.

:::reveal Why does this course refuse to say who first counted 47 chromosomes? ||| Because the notebook and the Turpin letter are published as photographs it has not read, the letter is dated two ways inside the Foundation's own file, her 2009 article could not be opened, and the Inserm opinion cites no document.

:::reveal What would settle the question of the printed 1959 misspelling? ||| The scanned page of the 1959 volume on Gallica, read past the captcha that blocked this course.

## Vocabulary
- **Open question**: a question a body of evidence leaves undecided, written down with the specific document that would close it.
- **Accounting**: here, an explicit list of what a course claims, what it refuses to claim, and why.
- **Verdict**: a decision between the parties, which this course does not reach and says it does not reach.
- **Provenance chain**: the record of where a document came from and through whose hands, without which an image of a page proves little.

## Sources
Comité d'éthique de l'Inserm. (2014). *Avis du Comité d'éthique de l'Inserm relatif à la saisine d'un collectif de chercheurs concernant la contribution de Marthe Gautier dans la découverte de la trisomie 21*. Institut national de la santé et de la recherche médicale. HAL inserm-02110704, CC BY 4.0. https://inserm.hal.science/inserm-02110704
Fondation Jérôme Lejeune. (2018, September). *Jérôme Lejeune, pioneer in the discovery of Trisomy 21*. https://www.fondationlejeune.org/wp-content/uploads/2022/06/DISCOVER-OF-DOWN-SYNDROME_ENGLISH_Sept.2018.pdf
Gautier, M. (2009). [Fiftieth anniversary of the trisomy 21: Return on a discovery]. *Médecine/Sciences*, *25*(3), 311-315. (Bibliographic record only, PMID 19361398; the full text was not reachable and has not been read.) https://pubmed.ncbi.nlm.nih.gov/19361398/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · A live dispute, and what it cannot settle",
      section: "Section 4 · A live dispute, and what it cannot settle",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which organisation contests the Inserm ethics committee's 2014 opinion?",
            options: [
              "The Fondation Jérôme Lejeune",
              "Aviesan",
              "The Académie des sciences",
              "The collective of researchers behind the referral",
            ],
            correctIndex: 0,
            explanation:
              "Named in full in this course, because a course that says critics when it means one identifiable organisation with published documents is hiding the most checkable thing in the case.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Why does this course name the contesting party in full?",
            options: [
              "It is the most checkable thing here",
              "French media law requires it",
              "The Inserm opinion requires it",
              "The Foundation asked to be named",
            ],
            correctIndex: 0,
            explanation:
              "An identifiable organisation with published documents can be read, quoted and checked. An unnamed critic cannot be.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "How many of the Foundation's texts did this course fetch and read in full?",
            options: [
              "Three",
              "One",
              "Seven",
              "None",
            ],
            correctIndex: 0,
            explanation:
              "The right of reply of 26 September 2014, the press release of 29 September 2014, and the 2018 English dossier.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What date does the Foundation's right of reply carry?",
            options: [
              "26 September 2014",
              "29 September 2014",
              "14 September 2014",
              "September 2018",
            ],
            correctIndex: 0,
            explanation:
              "The right of reply came first, then the press release three days later, then the dossier four years after that.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Who signed the Foundation's press release of 29 September 2014?",
            options: [
              "Professeur Lucien Israël",
              "Raymond Turpin",
              "The Inserm ethics committee",
              "The referring collective of researchers",
            ],
            correctIndex: 0,
            explanation:
              "The press release carries his name at its foot. It is the text that states the signature convention this course tested in lesson 1.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "How long is the Foundation's English dossier of September 2018?",
            options: [
              "21 pages",
              "Seven pages",
              "Two pages",
              "Over a hundred pages",
            ],
            correctIndex: 0,
            explanation:
              "Twelve pages before the annexes and nine of annexes, the annexes being photographs of documents rather than transcriptions.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Who does the Foundation say asked Lejeune to sign the January 1959 paper first?",
            options: [
              "Raymond Turpin, head of the department",
              "Marthe Gautier",
              "The Académie des sciences",
              "The Kennedy Foundation",
            ],
            correctIndex: 0,
            explanation:
              "The head of the department, thereby, in the Foundation's phrase, himself designating in the eyes of history the one who would remain the discoverer.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does the Foundation say Lejeune never did?",
            options: [
              "Attribute the discovery to himself",
              "Acknowledge Marthe Gautier's part",
              "Accept the Kennedy Prize of 1962",
              "Publish on the subject before 1959",
            ],
            correctIndex: 0,
            explanation:
              "It was attributed to him, in the Foundation's account, by the head of the department who asked him to sign first.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does the Foundation say the contribution of the cell-culture technique is NOT?",
            options: [
              "The essence of the discovery",
              "A contribution worth acknowledging",
              "An American technique",
              "A condition of the discovery",
            ],
            correctIndex: 0,
            explanation:
              "L'apport de la technique de culture cellulaire ne constitue pas l'essence de la découverte. It is the exact term the opinion's first finding makes its conclusion conditional on.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "How does the Foundation define a discoverer?",
            options: [
              "The one who carried the hypothesis",
              "The first person to see the result",
              "The author meeting the annex's three conditions",
              "Whoever is named first on the paper",
            ],
            correctIndex: 0,
            explanation:
              "The one who started from a hypothesis, verified it, believed in it and carried the project. That is a definition of a title, not of an author line.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What analogy does the Foundation's 2018 dossier use for the discovery?",
            options: [
              "Columbus and a sailor",
              "A photograph and a slide",
              "A prize citation and a paper",
              "An author line and an index record",
            ],
            correctIndex: 0,
            explanation:
              "It asks whether Columbus or a sailor first saw the shore, and answers that the discoverer history remembers is the one who began from a hypothesis and carried it.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Which verb from the Inserm opinion does the 2018 dossier quote back at it?",
            options: [
              "Observe",
              "Discover",
              "Establish",
              "Promote",
            ],
            correctIndex: 0,
            explanation:
              "The notice states that Marthe Gautier will observe the 47 chromosomes, and the dossier answers that to observe does not mean to discover the cause.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Which step of the neighbouring course's reading method concerns the crediting verb?",
            options: [
              "Its second step",
              "Its fifth step",
              "Its first step",
              "Its fourth step",
            ],
            correctIndex: 0,
            explanation:
              "Find the verb that does the crediting and see who it attaches to. Here both parties found it first and are standing on either side of it.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does this course say a mature credit dispute looks like?",
            options: [
              "Both parties arguing over one crediting verb",
              "One side publishing, the other silent",
              "Agreement on words, dispute over dates",
              "An institution correcting a record",
            ],
            correctIndex: 0,
            explanation:
              "The crediting verb is usually the thing a reader has to go looking for. Here both literate parties found it and took opposite positions on it.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Which two definitions does this lesson set side by side?",
            options: [
              "A discoverer and an author",
              "A discovery and an observation",
              "A referral and an opinion",
              "A citation and an acknowledgement",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's definition of a discoverer against the annex's three conditions for authorship. They answer different questions.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Which of those two definitions does this course say is wrong?",
            options: [
              "Neither of them",
              "The Foundation's",
              "The annex's",
              "Both of them",
            ],
            correctIndex: 0,
            explanation:
              "One asks who earns the title and the other asks whose name belongs on the paper. Much of this dispute is two institutions answering two different questions.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What question does the Foundation's definition of a discoverer answer?",
            options: [
              "Who earns the title of discoverer",
              "Whose name belongs on a paper",
              "What a journal must acknowledge",
              "How a record should be corrected",
            ],
            correctIndex: 0,
            explanation:
              "And the annex's authorship conditions answer the other one, about whose name belongs on the paper. Neither definition settles the other's question.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What is a right of reply?",
            options: [
              "A published response to a damaging statement",
              "A court authorisation to record a public meeting",
              "A formal referral to an ethics committee",
              "A correction a journal issues at an author's request",
            ],
            correctIndex: 0,
            explanation:
              "A recognised practice in French media. The Foundation's is the text in which it answers the opinion point by point.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does this course say about writing analogies into an argument?",
            options: [
              "They can be tested, case against case",
              "They settle a definition outright",
              "They have no place in a scientific argument",
              "They are the only way to define discoverer",
            ],
            correctIndex: 0,
            explanation:
              "A comparison offered to show what a word should mean can be checked by asking whether the two cases really are alike. The course names the analogy and leaves the test to the reader.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does this course mean by reported speech?",
            options: [
              "Writing a claim as a claim",
              "Quoting in the original language",
              "Quoting a party without naming it",
              "Summarising in the course's words",
            ],
            correctIndex: 0,
            explanation:
              "Writing what a party says as their claim rather than as fact. It is how this course handles every document it has not read.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does the Foundation say Turpin's request to sign first did?",
            options: [
              "Named the discoverer for history",
              "Recorded the order of joining",
              "Followed an Académie rule",
              "Left the question of discovery open",
            ],
            correctIndex: 0,
            explanation:
              "Désignant ainsi lui-même, aux yeux de l'histoire, celui qui resterait le découvreur. The Foundation's case rests on an act by the head of the department.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does the Foundation do that the Inserm opinion does not?",
            options: [
              "Name the evidence it relies on",
              "Quote the 1959 notes in French",
              "Publish under an open licence",
              "Hedge each of its conclusions",
            ],
            correctIndex: 0,
            explanation:
              "It lists a notebook, letters, a lecture extract and a diary. That is more than the opinion does, and it still does not put a readable document in front of a reader.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "From what date does the Foundation say the laboratory notebook was kept?",
            options: [
              "10 July 1957",
              "22 May 1958",
              "27 October 1958",
              "5 November 1958",
            ],
            correctIndex: 0,
            explanation:
              "Kept day to day from July 1957, in the Foundation's account, with the count of 47 recorded in the entry of 22 May 1958.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Which notebook entry does the Foundation say records a count of 47 chromosomes?",
            options: [
              "22 May 1958",
              "10 July 1957",
              "16 January 1959",
              "10 March 1965",
            ],
            correctIndex: 0,
            explanation:
              "That entry is the centre of the Foundation's case about who counted first. This course has not read the page, only the Foundation's description of it.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does the Foundation say the Turpin letter reports?",
            options: [
              "She was still counting 46",
              "Lejeune was to sign first",
              "The lab had a photomicroscope",
              "The Académie accepted the note",
            ],
            correctIndex: 0,
            explanation:
              "That Marthe Gautier was still counting 46 chromosomes rather than 47, months after the notebook entry. That is what the Foundation says the letter says.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "How does the Foundation describe its holding of the Turpin letter?",
            options: [
              "At the disposal of historians",
              "Deposited in an open archive",
              "Sealed until the parties agree",
              "Reproduced in full in the dossier",
            ],
            correctIndex: 0,
            explanation:
              "An offer to make it available on request, which is not the same as publishing it. The offer is real and it has not been taken up here.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does the Foundation say Lejeune's letter of 5 November 1958 thanked her for?",
            options: [
              "Excellent preparations",
              "Agreeing he would sign first",
              "Arranging the photographs",
              "Correcting the count to 47",
            ],
            correctIndex: 0,
            explanation:
              "Her preparations, meaning the mounted slides. The letter is published as an image and this course has not read it.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What date does the Foundation give for the inaugural lecture it quotes?",
            options: [
              "10 March 1965",
              "3 October 1969",
              "26 January 1959",
              "14 September 2014",
            ],
            correctIndex: 0,
            explanation:
              "The lecture in which, the Foundation says, he saluted his dear Marthe Gautier and cited her skill and tenacity.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Which two qualities does the Foundation say the 1965 lecture credited her with?",
            options: [
              "Skill and tenacity",
              "Precision and speed",
              "Originality and drive",
              "Discretion and loyalty",
            ],
            correctIndex: 0,
            explanation:
              "During what the dossier quotes as two years of failures and half-successes. All of this is the Foundation's report of a document published as an image.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "How does the Foundation publish the documents it cites?",
            options: [
              "As photographs in an album",
              "As transcriptions in the dossier",
              "As certified copies on request",
              "As deposits in an open archive",
            ],
            correctIndex: 0,
            explanation:
              "One image per document, in a public online album linked from the dossier. This course opened none of those images.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "How many of the Foundation's document images did this course open?",
            options: [
              "None of them",
              "All of them",
              "The notebook page",
              "The lecture extract",
            ],
            correctIndex: 0,
            explanation:
              "Which is why everything the Foundation says its documents say is written here in reported speech. The date discrepancy was found in the dossier's own text and captions.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What date does the body text of the 2018 dossier give for the Turpin letter?",
            options: [
              "27 October 1958",
              "17 October 1958",
              "22 May 1958",
              "20 October 1958",
            ],
            correctIndex: 0,
            explanation:
              "Twice, in two separate sections. The caption on the annex reproducing the same letter says something else.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What date does the caption of the dossier's third annex give for that same letter?",
            options: [
              "17 October 1958",
              "27 October 1958",
              "5 November 1958",
              "No date at all",
            ],
            correctIndex: 0,
            explanation:
              "One document, two dates, ten days apart, inside one 21 page file. This course reports the discrepancy and does not resolve it.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Which of the two dates does this course use when reporting the Foundation's claim, and why?",
            options: [
              "The body text's, given twice",
              "The caption's, beside the document",
              "Neither, as it is unread",
              "Both, printed together",
            ],
            correctIndex: 0,
            explanation:
              "27 October 1958 appears twice in the argument and 17 October once on a caption. The course says so and files a research check rather than deciding.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What rule does this lesson draw from the Foundation's archive?",
            options: [
              "Offering is not publishing",
              "An image beats a transcription",
              "Discount an interested party",
              "Naming evidence proves a case",
            ],
            correctIndex: 0,
            explanation:
              "A party that lists its evidence has done more than a party that lists none, and it has still not handed the reader anything that can be checked.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does this course say a party that lists its evidence has done?",
            options: [
              "More than one that lists none",
              "Enough to shift the burden of proof",
              "Less than an uncited narrative",
              "Nothing, without an open licence",
            ],
            correctIndex: 0,
            explanation:
              "The comparison is with the Inserm opinion, which narrates without citing anything. Both failures are real and they are not the same failure.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does the French press release say about Lejeune's age relative to Marthe Gautier's?",
            options: [
              "He was the younger",
              "He was the elder",
              "They were the same age",
              "It gives no ages",
            ],
            correctIndex: 0,
            explanation:
              "Le cadet de Marthe Gautier. The Foundation uses the point to argue that a narrative about a senior man and a junior woman does not fit the facts.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "How does the 2018 English version render that same point?",
            options: [
              "As her youngest son",
              "As her junior colleague",
              "As her senior by years",
              "It leaves the point out",
            ],
            correctIndex: 0,
            explanation:
              "A translation error rather than a claim. It is shown because a reader working only from a translated dossier will meet sentences its authors did not write.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Which version does this course quote where the French and English differ?",
            options: [
              "The French",
              "The English",
              "Both together",
              "Neither",
            ],
            correctIndex: 0,
            explanation:
              "The French texts are the originals. The English dossier is a translation of them, and a translation can introduce sentences nobody wrote.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does this lesson mean by provenance?",
            options: [
              "Where a document came from",
              "The age of a document",
              "Who owns the physical original",
              "A document's original language",
            ],
            correctIndex: 0,
            explanation:
              "Where it came from and through whose hands it reached the reader, which decides how much weight an image of a page can carry.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What does this course call a mismatch between a document's description and its label?",
            options: [
              "A caption discrepancy",
              "A sourcing objection",
              "An anachronism",
              "A hedged claim",
            ],
            correctIndex: 0,
            explanation:
              "The 2018 dossier contains one, about the date of the letter its own case rests on.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Why does this course write the Foundation's evidence in reported speech?",
            options: [
              "It has read none of the documents",
              "The Foundation objects to quotation",
              "The documents are in French",
              "Inserm disputes each of them",
            ],
            correctIndex: 0,
            explanation:
              "They are published as images the course did not open, so what the course can honestly report is what the Foundation says they say.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What was the Bordeaux meeting of early 2014 to present Marthe Gautier with?",
            options: [
              "A medal",
              "The Kennedy Prize",
              "An honorary chair",
              "A corrected author line",
            ],
            correctIndex: 0,
            explanation:
              "And she was to speak about the discovery. The talk did not happen.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Who does the Foundation say it arranged to record her words?",
            options: [
              "A bailiff",
              "A journalist",
              "A staff member",
              "The organisers",
            ],
            correctIndex: 0,
            explanation:
              "Par voie d'huissier, a French judicial officer who can make a formal, legally usable record of what is said.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Under what authority does the Foundation say that recording was arranged?",
            options: [
              "A court authorisation",
              "The organisers' permission",
              "French media law",
              "An agreement with Inserm",
            ],
            correctIndex: 0,
            explanation:
              "En vertu d'une autorisation accordée par la justice. The Foundation states the authority itself, which is why the fact is not in dispute.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What stated reason does the Foundation give for the recording?",
            options: [
              "To defend a reputation against defamation",
              "To keep a record of the talk for its archive",
              "To give the ethics committee evidence",
              "To let the organisers publish a transcript",
            ],
            correctIndex: 0,
            explanation:
              "Afin de défendre la réputation de Jérôme Lejeune, s'il venait à être diffamé. A stated purpose, from the party that acted on it.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What month does the Foundation say it learned she was going to speak?",
            options: [
              "February 2014",
              "January 2014",
              "September 2014",
              "March 2009",
            ],
            correctIndex: 0,
            explanation:
              "Its sentence begins en février 2014 quand elle a appris, which dates the Foundation's learning rather than the meeting.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What does that February 2014 date actually date, read precisely?",
            options: [
              "The Foundation's learning",
              "The Bordeaux meeting itself",
              "The court's authorisation",
              "The opinion's publication",
            ],
            correctIndex: 0,
            explanation:
              "Quand elle a appris, when it learned. Reading the sentence for what it dates rather than what it seems to date is the whole exercise.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Which meeting does the Foundation name as the one she was to address?",
            options: [
              "The Assises de génétique humaine et médicale",
              "The American Society of Human Genetics meeting",
              "A session of the Académie des sciences",
              "A hearing of the Inserm ethics committee",
            ],
            correctIndex: 0,
            explanation:
              "The French human and medical genetics meeting, held that year in Bordeaux.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Why does this course call the bailiff episode unusually well evidenced?",
            options: [
              "The party that did it says so",
              "A court record was read",
              "Both parties published one account",
              "A February 2014 report was obtained",
            ],
            correctIndex: 0,
            explanation:
              "The bailiff, the court authorisation and the reason all come from the Foundation's own website. Most contested events in a credit dispute are nothing like this solid.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Which month does the Scientific American podcast transcript place the Bordeaux meeting in?",
            options: [
              "January 2014",
              "February 2014",
              "September 2014",
              "March 2013",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the course says early 2014 rather than choosing. The contemporary news report that would settle it was refused to this course.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "How many bailiffs does the podcast transcript report?",
            options: [
              "Two",
              "One",
              "Four",
              "None",
            ],
            correctIndex: 0,
            explanation:
              "Waiting in the lobby of her hotel at seven in the morning, with a court mandate to record the speech, in the transcript's account.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "At what hour does the transcript say the bailiffs were waiting?",
            options: [
              "Seven in the morning",
              "Just before the talk",
              "The previous evening",
              "The following day",
            ],
            correctIndex: 0,
            explanation:
              "In the lobby of her hotel, per the podcast transcript. This course reports the sequence and names none of the people the transcript names.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What does the transcript say happened to her talk?",
            options: [
              "It was cancelled by the organisers",
              "It went ahead and was recorded",
              "It moved to a closed session",
              "It was replaced by a reading",
            ],
            correctIndex: 0,
            explanation:
              "Cancelled by the organisers hours before it was due, in the transcript's account, with the medal presented privately the following day.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "When does the transcript say the medal was presented?",
            options: [
              "The following day",
              "At its scheduled session",
              "Not at all",
              "In September 2014",
            ],
            correctIndex: 0,
            explanation:
              "Privately, per the transcript. That is a secondary account, attributed, and it is the only source this course has for it.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Why could this course not settle the date of the Bordeaux meeting?",
            options: [
              "The 2014 news report was refused",
              "No report was ever published",
              "The Foundation would not confirm",
              "The programme is offline",
            ],
            correctIndex: 0,
            explanation:
              "A request for the February 2014 news report returned an error to two clients. A failed fetch is reported as failed and nothing is asserted from it.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What wording does this course use for the date of the Bordeaux meeting?",
            options: [
              "Early 2014",
              "January 2014",
              "February 2014",
              "No date at all",
            ],
            correctIndex: 0,
            explanation:
              "And it files a research check naming the document that would settle it. A hedge with no check is a hedge nobody will ever clear.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What does this course take from the podcast transcript?",
            options: [
              "The sequence of events",
              "Its interviewees' words",
              "Her 2009 article's argument",
              "Nothing at all",
            ],
            correctIndex: 0,
            explanation:
              "Attributed, and nothing about any person. What a secondary source reports and whom it names are two different things.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Whom does the podcast transcript name that this course deliberately leaves out?",
            options: [
              "Organisers, a commentator and a relative",
              "The members of the Inserm ethics committee",
              "The collective that made the referral",
              "The bailiffs named in the authorisation",
            ],
            correctIndex: 0,
            explanation:
              "Private individuals quoted in secondary sources are not this catalog's to publish, whatever the source did.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What does the podcast transcript say the bailiffs did to the story?",
            options: [
              "Made it widely known",
              "Ended it for good",
              "Settled it with a record",
              "Delayed it until the opinion",
            ],
            correctIndex: 0,
            explanation:
              "That the episode is what made the story known. The Foundation's own texts say nothing about that effect.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What do the Foundation's texts say instead about the aftermath of that week?",
            options: [
              "That its intuition was right",
              "That the recording went unused",
              "That the organisers apologised",
              "That the medal was undeserved",
            ],
            correctIndex: 0,
            explanation:
              "Meaning that the Inserm opinion published later that year rewrote the history of the discovery in her favour. Neither account is a summary of the other.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What is a huissier?",
            options: [
              "A French judicial officer",
              "A court-appointed expert",
              "A clerk of a learned academy",
              "A defamation lawyer",
            ],
            correctIndex: 0,
            explanation:
              "One who can be instructed to make a formal, legally usable record of what is said or done.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What is the question this course says everybody argues about?",
            options: [
              "Who first counted 47 chromosomes",
              "Whether the 1962 prize should be shared",
              "Who misspelled the surname",
              "Whether the committee could rule",
            ],
            correctIndex: 0,
            explanation:
              "And it is the one question none of the documents this course can read will settle.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course conclude about who first counted 47 chromosomes?",
            options: [
              "It does not know, and says why",
              "Lejeune did, per the notebook",
              "She did, per the first finding",
              "The question is meaningless",
            ],
            correctIndex: 0,
            explanation:
              "And it sets out exactly why: two documents published as photographs it has not read, one of them dated two ways, an article it could not open, and an opinion that cites nothing.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Where was Marthe Gautier's own account of the discovery published?",
            options: [
              "Médecine/Sciences in 2009",
              "The Comptes rendus, in 1959",
              "The Foundation's 2018 dossier",
              "An annex to the 2014 opinion",
            ],
            correctIndex: 0,
            explanation:
              "Volume 25, number 3, pages 311 to 315, March 2009. Its full text returns an error, and nobody working on this catalog has read it.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Which pages carry her 2009 article?",
            options: [
              "311 to 315",
              "602 to 603",
              "119 to 120",
              "256 to 265",
            ],
            correctIndex: 0,
            explanation:
              "From the index record. The bibliographic details are known; the text is not.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Why has this course not read her 2009 article?",
            options: [
              "The full text returns an error",
              "It is written in French",
              "The Foundation refused permission",
              "The journal withdrew it",
            ],
            correctIndex: 0,
            explanation:
              "A failed fetch, reported as failed. It is the reason every characterisation of her account in this course belongs to whoever made it.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "To whom does every characterisation of her 2009 account in this course belong?",
            options: [
              "Whoever made it",
              "To the course itself",
              "To the Inserm committee",
              "To nobody",
            ],
            correctIndex: 0,
            explanation:
              "When the Foundation says she claims to have discovered trisomy 21 by herself, that is the Foundation describing an article this course has not read.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Which of these does this course explicitly NOT say?",
            options: [
              "That Lejeune took anything from her",
              "That both notes share one order",
              "That an opinion corrects no record",
              "That the Foundation names its evidence",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all findings the course does make. The record shows what was published and who stood where; it does not show a taking.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say about whether the Inserm committee was right?",
            options: [
              "It says neither",
              "That it was right",
              "That it was wrong",
              "The reply settles it",
            ],
            correctIndex: 0,
            explanation:
              "It does not say the committee was biased and it does not say the committee was right. It reads the document and reports what it contains.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say it HAS established about the 1959 author lines?",
            options: [
              "Two orders in one year",
              "The order was later corrected",
              "Turpin chose the order alone",
              "The Académie imposed the order",
            ],
            correctIndex: 0,
            explanation:
              "Lejeune, Gautier, Turpin on both Académie des sciences notes, and Lejeune, Turpin, Gautier on the April paper, from index records anyone can check.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say it has established about the honours?",
            options: [
              "Two, each in one man's name",
              "Both were for the discovery",
              "Neither body published a citation",
              "The opinion lists every honour",
            ],
            correctIndex: 0,
            explanation:
              "The 1962 Kennedy Prize and the 1969 William Allan Memorial Award, named and dated. What either was formally for is another matter.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What would settle the question of the printed 1959 misspelling?",
            options: [
              "The Gallica scan past its captcha",
              "The Foundation's archive album",
              "The Inserm opinion's account",
              "The March note's index record",
            ],
            correctIndex: 0,
            explanation:
              "A specific document in a specific place, which is what an open question should look like when it is written down properly.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What would settle the question of who counted first?",
            options: [
              "The documents as legible text, plus her article",
              "A further opinion from the Inserm committee",
              "The Kennedy Foundation's 1962 award record",
              "The presentation address for the 1969 award",
            ],
            correctIndex: 0,
            explanation:
              "The notebook page and the Turpin letter published as readable text with their provenance, and her 2009 article read in full.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What would settle what the 1962 prize was formally awarded for?",
            options: [
              "The awarding body's own record",
              "The Foundation's letter transcript",
              "The Inserm opinion's sentence",
              "The 1970 presentation address",
            ],
            correctIndex: 0,
            explanation:
              "The Kennedy Foundation's record, citation or recipient list. None of them was fetched for this course.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What would settle what was said at the 1969 award?",
            options: [
              "The presentation address",
              "Its bibliographic record",
              "The Inserm opinion",
              "The Foundation's dossier",
            ],
            correctIndex: 0,
            explanation:
              "The address itself, out from behind the paywall that stopped this course. The record establishes the event and says nothing about the words.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What would settle the date of the Bordeaux meeting?",
            options: [
              "The February 2014 news report",
              "The Foundation's press release",
              "The podcast transcript",
              "The court authorisation",
            ],
            correctIndex: 0,
            explanation:
              "The contemporary report this course requested and was refused. Until it is read, the course says early 2014.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say a properly written open question looks like?",
            options: [
              "A specific document in a specific place",
              "Each party's claims, the stronger marked",
              "A statement that evidence is inconclusive",
              "A list of people who could resolve it",
            ],
            correctIndex: 0,
            explanation:
              "Every open question in this course names the document that would close it, which is what makes it a check rather than a shrug.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Which lesson of Who Gets Named states the rule this whole section was written under?",
            options: [
              "Two rules, and why they are not politeness",
              "Credit is a second event, which separates the work from the crediting",
              "Who counts as an author, and who gets thanked",
              "Who corrects a record, and with what",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 3, whose second rule is that a contested claim is taught as contested. That is what section 4 is.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Which catalog course sets an author line against a prize in the case of Esther Lederberg?",
            options: [
              "The Paper and the Prize",
              "What the Citation Records",
              "Who Gets Named",
              "Who Built the Blood Bank",
            ],
            correctIndex: 0,
            explanation:
              "Its lessons 5 and 6 are the built worked example, and this course does not repeat them.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course call its conclusion?",
            options: [
              "Saying which statements the documents support",
              "Deciding between the parties on the evidence",
              "Deferring to a future committee opinion",
              "Accepting whichever party published first",
            ],
            correctIndex: 0,
            explanation:
              "The documents support a great many precise statements and they do not support a verdict. Saying which is which, out loud, is the conclusion.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What temptation does this course name in a live dispute?",
            options: [
              "To decide, because it feels like finishing",
              "To publish before the other side responds",
              "To quote only the documents for one reading",
              "To name no party, so nobody can object",
            ],
            correctIndex: 0,
            explanation:
              "Deciding feels like finishing. Refusing to decide when the documents will not carry a decision is the harder and the correct move.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "Which lesson of Who Gets Named does this course name for reading an interested party's evidence closely?",
            options: [
              "Malone, Walker, and a story that ran uphill",
              "Credit is a second event, on author order as a format",
              "Who counts as an author, and who gets thanked",
              "Two rules, and why they are not politeness",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 7, the catalog's model for reading an interested source closely rather than discounting it. That is how this course reads the Foundation.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this lesson call an explicit list of what a course claims and refuses to claim?",
            options: [
              "An accounting",
              "A provenance chain",
              "A verdict",
              "A hedge",
            ],
            correctIndex: 0,
            explanation:
              "And this lesson is one. It lists what the course establishes, what it refuses to say, and what document would change each answer.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say a provenance chain decides?",
            options: [
              "How much weight an image can carry",
              "Whether a document may be quoted",
              "Which party a document belongs to",
              "Whether a translation can be trusted",
            ],
            correctIndex: 0,
            explanation:
              "Where a document came from and through whose hands it reached the reader. Without it, a photograph of a page proves very little.",
            sourceLessonSlug: "what-neither-side-settles",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-author-line-and-the-finding-final",
      title: "Final assessment · The author line and the finding",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which of these is a fact about the 1959 record rather than an interpretation of it?",
            options: [
              "Two notes carry three names in one order",
              "The first name marks the discoverer",
              "The last name marks the head of the team",
              "The middle name marks a technical contributor",
            ],
            correctIndex: 0,
            explanation:
              "The order is on the record. What the order means is the Foundation's stated convention, and a third paper the same year puts the same three people in a different order.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What is the strongest reason this course gives for treating author order as a convention?",
            options: [
              "Three people, two orders, one year",
              "The Académie published no order rule",
              "The Inserm opinion declines to interpret it",
              "The index records disagree on spelling",
            ],
            correctIndex: 0,
            explanation:
              "Lejeune, Gautier, Turpin on both Académie des sciences notes and Lejeune, Turpin, Gautier on the April paper. Position is not a fixed property of a team.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "Whose statement of the signature convention does this course test against the record?",
            options: [
              "The Foundation's",
              "The Inserm committee's",
              "The Académie's",
              "The Kennedy Foundation's",
            ],
            correctIndex: 0,
            explanation:
              "Its press release of 29 September 2014 states it plainly, which is what makes it testable. A rule nobody has written down cannot be checked.",
            sourceLessonSlug: "three-names-in-an-order",
          },
          {
            prompt: "What was the published claim of the 1959 notes, reduced to its smallest form?",
            options: [
              "Forty seven chromosomes against forty six",
              "An extra chromosome causes the condition",
              "Cultured cells can count chromosomes at all",
              "Nine children share an inherited anomaly",
            ],
            correctIndex: 0,
            explanation:
              "A count in cultured cells with a control group. The smallness of the claim is why the counting question became the whole dispute.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "What did the laboratory's missing equipment change about who could show the evidence?",
            options: [
              "Only the photograph travelled",
              "Nothing, slides travel in a case",
              "Everything, publication was blocked",
              "Only the timing of the first note",
            ],
            correctIndex: 0,
            explanation:
              "The slides went out to be photographed, and the photographs served the person who had arranged it at conferences and in the media. A photograph travels; a slide does not.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "How does this course handle the period term used for the condition in 1959?",
            options: [
              "Quoted only inside sources",
              "Replaced everywhere, even in titles",
              "Used in the course's own voice",
              "Omitted, with titles paraphrased",
            ],
            correctIndex: 0,
            explanation:
              "Down syndrome and trisomy 21 in the course's own voice, and the old term only where a quotation or a title carries it. Both 2014 parties did the same.",
            sourceLessonSlug: "what-the-counting-took",
          },
          {
            prompt: "Which spelling error is verified in this course, and where?",
            options: [
              "In the January index record",
              "On the printed January page",
              "In the Foundation's press release",
              "In the April paper's author line",
            ],
            correctIndex: 0,
            explanation:
              "The PubMed record of the January note spells her Gauthier; the March record spells her Gautier. The printed page is behind a captcha and has not been seen.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What does an index misspelling break?",
            options: [
              "The link between a paper and a name",
              "The author's legal claim to priority",
              "The journal's duty to print a correction",
              "The order a database lists an author's work",
            ],
            correctIndex: 0,
            explanation:
              "A search under the correct spelling does not return the paper, so the credit never attaches. It is the smallest unit of credit there is.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What did this course do when it could not open the printed 1959 page?",
            options: [
              "Narrowed the claim and filed a check",
              "Reconstructed the spelling from the index",
              "Left the misspelling out entirely",
              "Relied on the Foundation's dossier",
            ],
            correctIndex: 0,
            explanation:
              "It reports the failed fetch, keeps its claims to the index records and the opinion's phrase about errors, and names the document that would settle the rest.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "In how many documents does this course find her surname spelled with an h?",
            options: [
              "Three",
              "One",
              "None",
              "Two",
            ],
            correctIndex: 0,
            explanation:
              "The PubMed record of the January note, the heading on Inserm's own listing page, and one section of the Foundation's 2018 English dossier.",
            sourceLessonSlug: "a-name-with-errors",
          },
          {
            prompt: "What is the only source this course has for what the 1962 prize was formally awarded for?",
            options: [
              "The Fondation Jérôme Lejeune",
              "The Kennedy Foundation's citation",
              "The Inserm opinion's third finding",
              "The 1970 presentation address",
            ],
            correctIndex: 0,
            explanation:
              "No record, citation or recipient list from the awarding body was fetched, so the account of the award comes from the party defending the recipient.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does a missing prize citation prevent a reader from doing?",
            options: [
              "Reading the page as three documents",
              "Establishing that the prize was given",
              "Discovering the sum the award carried",
              "Naming the body that gave the award",
            ],
            correctIndex: 0,
            explanation:
              "The method taught in What the Citation Records needs a citation, an institutional account and the laureate's own words. Here none of the three is in hand.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What does the Foundation say about the relation between the 1962 prize and the discovery?",
            options: [
              "It was for all his work",
              "It was for the discovery alone",
              "It was for clinical practice",
              "It was shared with the lab",
            ],
            correctIndex: 0,
            explanation:
              "For all of his work and not only for his role in the discovery. That reframes the charge rather than denying that he received it alone.",
            sourceLessonSlug: "a-prize-to-one-man",
          },
          {
            prompt: "What is the evidentiary value of a bibliographic record, according to this course?",
            options: [
              "Thin and real",
              "None at all",
              "Complete",
              "Variable",
            ],
            correctIndex: 0,
            explanation:
              "It establishes an award, a recipient, a body, a place and a date, and nothing about reasons or wording. Stating that boundary is what makes it usable.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Which body presented the 1969 award named in this course?",
            options: [
              "The American Society of Human Genetics",
              "The Joseph P. Kennedy Foundation",
              "The Académie nationale de médecine",
              "Inserm, through its ethics committee",
            ],
            correctIndex: 0,
            explanation:
              "At its annual meeting in San Francisco on 3 October 1969, per the title of the printed presentation address.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Why does this course name only two honours?",
            options: [
              "It checked and dated only two",
              "The opinion lists exactly two",
              "The Foundation admits only two",
              "No others were ever awarded",
            ],
            correctIndex: 0,
            explanation:
              "The opinion says various honours, in the plural and without a list. This course names the two it can date from a record and claims nothing about any others.",
            sourceLessonSlug: "a-second-award",
          },
          {
            prompt: "Which two acts does the Inserm opinion explicitly separate?",
            options: [
              "Promoting and producing",
              "Counting and photographing",
              "Publishing and indexing",
              "Referring and deciding",
            ],
            correctIndex: 0,
            explanation:
              "Making a result known internationally, which it calls doubtless very significant in his case, and the discovery itself, which it says is different.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "How many names does the opinion's regret about the honours cover?",
            options: [
              "Two",
              "One",
              "Three",
              "None",
            ],
            correctIndex: 0,
            explanation:
              "The French possessive is plural, and the Foundation's own right of reply quotes the opinion as naming Raymond Turpin and Marthe Gautier.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does this course refuse to infer from the fact that Lejeune carried the photographs?",
            options: [
              "A motive or intention",
              "A missing photomicroscope",
              "Use at conferences",
              "Promoting versus producing",
            ],
            correctIndex: 0,
            explanation:
              "The record shows who stood where. It does not show what anyone intended, and neither the opinion nor this course supplies an intention.",
            sourceLessonSlug: "promotion-is-not-discovery",
          },
          {
            prompt: "What does Inserm say about the durability of its ethics committee's notes?",
            options: [
              "They may evolve with new contributions",
              "They are final once published online",
              "They are withdrawn after a right of reply",
              "They are sealed for twenty five years",
            ],
            correctIndex: 0,
            explanation:
              "In relation to new contributions. A document that says of itself that it is revisable is a different instrument from a prize citation.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Why is the licence on the 2014 opinion worth noticing?",
            options: [
              "Any reader can redistribute it",
              "It forbids long quotation",
              "It limits reuse to French researchers",
              "It expires after five years",
            ],
            correctIndex: 0,
            explanation:
              "Creative Commons Attribution 4.0. Most documents in a credit dispute are somebody's property, and here the central one is free for anyone to fetch and check.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Who put the question about Marthe Gautier's contribution to the Inserm ethics committee?",
            options: [
              "A collective of researchers",
              "The Fondation Jérôme Lejeune",
              "The Académie des sciences",
              "The committee itself, unprompted",
            ],
            correctIndex: 0,
            explanation:
              "The opinion's own title says so. The committee could have taken the question up itself, and in this instance it did not have to.",
            sourceLessonSlug: "what-a-saisine-is",
          },
          {
            prompt: "Which word in the opinion's first finding do retellings usually drop?",
            options: [
              "Unlikely",
              "Preponderant",
              "Context",
              "Training",
            ],
            correctIndex: 0,
            explanation:
              "A peu de chance. The finding states a likelihood, and a retelling that says the committee concluded he did not discover it has added a claim.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What is the opinion's first finding conditional on?",
            options: [
              "The weight given to the technique",
              "Publication of the notebook",
              "Further contributions arriving",
              "The Académie des sciences agreeing",
            ],
            correctIndex: 0,
            explanation:
              "It holds unless no credit is given to her cell-culture training. The Foundation's whole case is that the technique is not the essence of the discovery.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "How often does this course discuss the politics named in the opinion's fourth finding?",
            options: [
              "Once, without argument",
              "Throughout the course",
              "Never, as off the subject",
              "In every single section",
            ],
            correctIndex: 0,
            explanation:
              "Both parties' sentences are quoted once, neither is argued, and the course does not return to the subject. The subject is an author line and how credit was handled.",
            sourceLessonSlug: "the-five-points",
          },
          {
            prompt: "What does this course call the strongest objection to the 2014 opinion?",
            options: [
              "It cites no documents",
              "It lacked authority",
              "Its findings are hedged",
              "It was deposited late",
            ],
            correctIndex: 0,
            explanation:
              "It narrates the events in order, with dates, and names no letter, notebook or archive reference. The Foundation makes that objection, and this course endorses it.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "What does an ethics-committee opinion have, and what does it lack?",
            options: [
              "Force without formal power",
              "Formal power without force",
              "Both, as a correction tool",
              "Neither, as a secondary source",
            ],
            correctIndex: 0,
            explanation:
              "It retracts nothing, amends nothing and rescinds nothing. It puts an institution's name behind a reading, which is real and is not the same thing.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Why does an opinion about a 1959 paper carry an annex on present-day authorship criteria?",
            options: [
              "The referral asked about publication rules",
              "The committee applied them to the 1959 notes",
              "The criteria were already in force in 1959",
              "The Foundation asked for them in full",
            ],
            correctIndex: 0,
            explanation:
              "Inserm's own title for the note is about the rules of publication. The committee answered both halves of the referral and did not apply the criteria backwards.",
            sourceLessonSlug: "the-annex-and-the-missing-citations",
          },
          {
            prompt: "Which single word are the two parties to this dispute fighting over?",
            options: [
              "Observe",
              "Preponderant",
              "Regrettable",
              "Contributor",
            ],
            correctIndex: 0,
            explanation:
              "The opinion says she would observe the 47 chromosomes. The Foundation's dossier answers that to observe is not to discover the cause.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What does this course say the two definitions in play are doing?",
            options: [
              "Answering different questions",
              "Contradicting each other",
              "Restating one rule in two languages",
              "Applying one test to two papers",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's definition asks who earns the title of discoverer. The annex's conditions ask whose name belongs on a paper. Neither settles the other's question.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "Which texts of the contesting party did this course read in full?",
            options: [
              "Two 2014 texts and a 2018 dossier",
              "The archive album of photographs",
              "The notebook and the Turpin letter",
              "Its 2014 right of reply only",
            ],
            correctIndex: 0,
            explanation:
              "The right of reply of 26 September, the press release of 29 September, and the 21 page English dossier of September 2018.",
            sourceLessonSlug: "who-contests-it",
          },
          {
            prompt: "What is the difference between the two parties' sourcing failures?",
            options: [
              "One cites nothing, one publishes images",
              "One is in French, one in translation",
              "One is an institution, one a foundation",
              "None, neither published any document",
            ],
            correctIndex: 0,
            explanation:
              "The opinion narrates without citing. The Foundation names its evidence and publishes it as photographs. Both are real failures and they are not the same failure.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "What internal inconsistency did this course find in the Foundation's 2018 dossier?",
            options: [
              "Two dates for one letter",
              "Two spellings of Lejeune",
              "Two accounts of who asked",
              "Two sums for the 1962 prize",
            ],
            correctIndex: 0,
            explanation:
              "The body text dates the Turpin letter 27 October 1958 twice; the caption of the annex reproducing it says 17 October 1958.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Why does this course quote the French text where the French and English versions differ?",
            options: [
              "The translation adds sentences",
              "The English omits the argument",
              "French is the 1959 language",
              "Only the French is official",
            ],
            correctIndex: 0,
            explanation:
              "The French says Lejeune was the younger of the two; the English renders it as her youngest son. A reader working only from a translation meets sentences nobody wrote.",
            sourceLessonSlug: "the-documents-it-offers",
          },
          {
            prompt: "Why is the bailiff episode not in dispute between the parties?",
            options: [
              "The party that acted reports it",
              "A court record has been published",
              "Both agree on the meeting's date",
              "The recording was released",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's own press release states the bailiff, the court authorisation and the reason. Most contested events in a credit dispute are nothing like this solid.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What stays open about the Bordeaux meeting in this course?",
            options: [
              "The date of the meeting",
              "Whether a bailiff was sent",
              "Whether a court authorised it",
              "Who arranged the recording",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's sentence dates its own learning to February 2014; a podcast transcript places the meeting in January. The report that would settle it was refused.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "What does this course take from the podcast transcript, and what does it leave?",
            options: [
              "Events, not people",
              "People, not events",
              "Both events and people",
              "Neither of the two",
            ],
            correctIndex: 0,
            explanation:
              "The sequence of events, attributed. Every organiser, commentator and relative the transcript names is left out, because private individuals in secondary sources are not this catalog's to publish.",
            sourceLessonSlug: "a-bailiff-in-bordeaux",
          },
          {
            prompt: "Which question does this course say none of the documents it can read will settle?",
            options: [
              "Who first counted 47 chromosomes",
              "The name order on the two 1959 notes",
              "Whether a 1969 honour was given",
              "Whether the opinion cites documents",
            ],
            correctIndex: 0,
            explanation:
              "The notebook and the Turpin letter are photographs it has not read, the letter is dated two ways inside one file, and her own account could not be opened.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course offer in place of a verdict?",
            options: [
              "A list of what the documents support",
              "The stronger party's reading",
              "A judgment held until the archive opens",
              "Each party's position, no findings",
            ],
            correctIndex: 0,
            explanation:
              "The documents support a great many precise statements and they do not support a decision between the parties. Saying which is which is the conclusion.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does a properly written open question name, according to this course?",
            options: [
              "The document that would close it",
              "The party whose account it confirms",
              "The date by which it should close",
              "Each party's reason to leave it open",
            ],
            correctIndex: 0,
            explanation:
              "A specific document in a specific place. That is what turns an unresolved point into a check somebody can actually clear.",
            sourceLessonSlug: "what-neither-side-settles",
          },
          {
            prompt: "What does this course say is the temptation in a live dispute?",
            options: [
              "To decide, because it feels like finishing",
              "To publish nothing until all is read",
              "To name no party, so nobody objects",
              "To quote both sides at equal length",
            ],
            correctIndex: 0,
            explanation:
              "Deciding feels like finishing. Refusing to decide when the documents will not carry a decision is the harder move and the correct one.",
            sourceLessonSlug: "what-neither-side-settles",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `the-author-line-and-the-finding`. Every hedge written into a lesson has one.
//
//  A. key "gautier-1959-printed-spelling" · severity medium · lesson "a-name-with-errors"
//     title: How is Marthe Gautier's surname spelled on the printed 1959 page?
//     quote: "Whether the printed page itself carries that spelling is not something this course
//            knows, and a research check is filed for it."
//     claim: The PubMed record of the note of 26 January 1959 spells her Gauthier; the record of
//            the 16 March note spells her Gautier; the Inserm opinion says the first communication
//            associated her name "avec des erreurs" in second position.
//     stakes: An error PRINTED in the Comptes rendus and an error introduced by an indexer are two
//            different failures with two different people at fault, and the lesson turns on the
//            difference. Asserting the wrong one would blame the wrong party.
//     needs: the author line as printed on Comptes rendus 248(4), p. 602.
//     where: Gallica, issue bpt6k32002 (its pagination service maps printed p. 602 to view 618 and
//            p. 1721 to view 1759); text and image views are behind a captcha. Alternatively a
//            library copy of the 1959 volume, or an offprint.
//
//  B. key "gautier-2009-medecine-sciences" · severity HIGH · lesson "what-neither-side-settles"
//     title: What does Marthe Gautier's own 2009 account actually say?
//     quote: "Its full text returns an error, and nobody working on this catalog has read it."
//     claim: Gautier, M. (2009), Med Sci (Paris) 25(3):311-315, PMID 19361398. Every
//            characterisation of this article in the course, including the Foundation's summary of
//            it, is attributed to the party characterising it.
//     stakes: The highest of the five. One side of a live dispute is currently represented in this
//            course only through its opponent's description of it. BAM has this on his manual list
//            (task 308). Until it is read the course cannot state her position in her own words.
//     needs: the full text, read.
//     where: medecinesciences.org full_html for 2009/04/medsci2009253p311 returns HTTP 403; try a
//            library copy of Medecine/Sciences 25(3), or EDP Sciences directly.
//
//  C. key "gautier-turpin-letter-date" · severity medium · lesson "the-documents-it-offers"
//     title: Is the Turpin letter dated 17 or 27 October 1958?
//     quote: "One document, two dates, ten days apart, inside one 21 page file."
//     claim: The Foundation's 2018 English dossier dates it 27 October 1958 in its body text twice
//            (section II B references and section III), and its Annex 3 caption reads "Letter from
//            Raymond Turpin a J. Lejeune dated 17 October 1958". The course uses 27 October when
//            reporting the Foundation's claim, because the body text says it twice.
//     stakes: It is the Foundation's central dated evidence about who was counting what and when.
//     needs: the date on the letter itself.
//     where: the Foundation's public document album (image 15351427675), which this course did not
//            open, or the letter as held by the Foundation, which says it is "a la disposition des
//            historiens".
//
//  D. key "gautier-bordeaux-meeting-date" · severity low · lesson "a-bailiff-in-bordeaux"
//     title: Was the Bordeaux meeting in January or February 2014?
//     quote: "So it says early 2014, and files a check."
//     claim: The Foundation's press release says "en fevrier 2014 quand elle a appris", which dates
//            its own learning rather than the meeting. A Scientific American podcast transcript
//            (13 February 2025) places the meeting in January 2014.
//     needs: a contemporary report of the meeting.
//     where: E. Pain, "After more than 50 years, a dispute over Down syndrome discovery", Science
//            online, 11 February 2014. HTTP 403 to WebFetch and to a browser user-agent on
//            2026-09-20. Try a library proxy, or the Assises de genetique humaine et medicale 2014
//            programme.
//
//  E. key "gautier-kennedy-prize-1962-record" · severity medium · lesson "a-prize-to-one-man"
//     title: What did the 1962 Kennedy Prize citation actually say, and what did it carry?
//     quote: "What the prize was formally for, this course knows only from the party that defends
//            him."
//     claim: The Fondation Jerome Lejeune says the prize was "for all of his work and not only for
//            his role in the discovery", followed a survey of his colleagues conducted in his
//            absence, and carried $8,333 for personal use plus $25,000 as an "exclusive grant for a
//            research program", per its TRANSCRIPT of a letter it dates "4/12/1962" (day and month
//            order not stated, so the course prints no date).
//     stakes: The only account of this award in the course comes from an interested party. An
//            awarding body's own citation would let the prize be read the way the neighbouring
//            course reads a prize page.
//     needs: the Kennedy Foundation's own record, citation or recipient list for 1962, and the
//            announcing letter rather than a transcript of it.
//     where: Joseph P. Kennedy Jr. Foundation records; contemporary US press coverage of the 1962
//            awards.
//
//  F. key "lejeune-1969-allan-award-address" · severity low · lesson "a-second-award"
//     title: What does the 1969 William Allan Memorial Award presentation address say?
//     quote: "This course did not read the address."
//     claim: VERIFIED from the bibliographic record: Knudson, A. G., Jr. (1970), "Jerome Lejeune.
//            The William Allan Memorial Award presented at the annual meeting of the American
//            Society of Human Genetics, San Francisco, California, October 3, 1969", Am J Hum Genet
//            22(2):119-120, PMID 4244916 / PMC1706525. The PMC record flags it as a scanned article
//            and NOT open access, so only the record was read.
//     needs: the two printed pages.
//     where: American Journal of Human Genetics 22(2), 1970, via a library; PMC1706525 is scan-only.
//
//  G. key "inserm-2014-opinion-refetch" · severity medium · lesson "what-a-saisine-is"
//     title: Re-read the Inserm ethics opinion first-hand and confirm every French quotation.
//     quote: (No hedge is printed in a lesson for this one; it is a PROVENANCE check, and the file
//            header states it openly.)
//     claim: Every French sentence this course quotes from the opinion is the brief's transcription
//            of a reading made on 2026-09-18
//            (plans/future-courses/culture-and-history/uncredited/2026-09-18-marthe-gautier-brief.md, section 6). A
//            re-fetch on 2026-09-20 was refused: inserm.hal.science now serves an anti-bot
//            proof-of-work challenge on /document, which this course did not defeat. The document's
//            identity, producing body, year, language, deposit date of 2019-04-25, CC BY 4.0 licence
//            and keywords WERE confirmed first-hand through HAL's API, and its listing WAS confirmed
//            on inserm.fr, both on 2026-09-20.
//     partial corroboration already in hand, and lesson 11 teaches it: the CONTESTING PARTY quotes
//            four of the same sentences back in translation, in documents this course did fetch in
//            full. "Was unlikely to have been preponderant" and "confined his contribution solely to
//            the valorization of the discovery" (FJL 2018 introduction); "n'aurait pu etre faite
//            sans les contributions essentielles de Raymond Turpin et Marthe Gautier" (FJL 2014a);
//            and "Marthe Gautier will observe the 47 chromosomes" (FJL 2018, section IV).
//     needs: the PDF itself, read again by a human or an unblocked client.
//     where: inserm.hal.science/inserm-02110704/document (CC BY 4.0, 7 pp.). A browser session will
//            clear the challenge; the file may then be archived locally for the catalog.
//
// DROPPED FOR LACK OF EVIDENCE, so NOT printed anywhere in the course and NOT filed as checks
// (each is a decision, not an oversight):
//  - WHO FIRST COUNTED 47. Both sides' claims rest on documents this course has not read. The
//    course says four times that it does not know. Checks B and C are what would move it.
//  - A LETTER TO A BEATIFICATION PROCESS, read aloud in the Scientific American transcript,
//    alleging that Lejeune failed to acknowledge her at a Montreal conference and at the 1962 prize
//    and that the omissions were deliberate. Not fetched; alleges a MOTIVE; the Foundation says the
//    opposite. Printing an unfetched motive accusation about a named individual is exactly what
//    Part H forbids. Whoever wants it must fetch the letter first.
//  - THE 2021 DECLARATION OF VENERABILITY and the beatification process generally. Podcast only,
//    and it pulls the course toward religion, which is not its subject.
//  - THE NAME AND VIEWS OF THE THIRD SCIENTIST the Foundation says encouraged her 2009 article, and
//    the Foundation's inference from it. One party's characterisation of an absent third party who
//    is not in this dispute by choice.
//  - A 1996 LAWYER'S LETTER FROM TURPIN'S DESCENDANTS. Podcast only, and relatives.
//  - EVERY PERSON NAMED IN THE PODCAST TRANSCRIPT: the conference organisers, the commentators and
//    a great-niece of Marthe Gautier. Private individuals quoted in secondary sources.
//  - LEJEUNE'S WIFE AND HIS LETTERS TO HER, and the private diary entries the Foundation quotes.
//    Relatives and private correspondence.
//  - WHEN THE HUMAN CHROMOSOME COUNT OF 46 WAS ESTABLISHED (Tjio and Levan, 1956). Not in PubMed,
//    not fetched, so not printed. The course uses only the Inserm opinion's "les temoins en ont 46".
//  - THE FOUNDATION'S COUNT OF SEVEN LEJEUNE PAPERS ON THE SUBJECT BY EARLY 1958. A count with no
//    counting rule attached, not re-derived here. Left out rather than repeated.
//  - MARTHE GAUTIER'S BIRTH AND DEATH DATES. The Foundation gives a birth year; no death record was
//    fetched. Neither is needed by any lesson, so neither is printed.
//  - "SHE WAS THE ONLY PERSON THERE WHO COULD DO IT" (plans/83). Not in the Inserm opinion's wording.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// D5a SOURCE TIERING (rubric v1.3), for whoever runs `pnpm gen:citations`:
//  TIER A, free to host, upload to Cloudinary and set course_sources.pdf_url:
//    - Comite d'ethique de l'Inserm (2014), HAL inserm-02110704. CC BY 4.0, confirmed from HAL's
//      API on 2026-09-20. 7 pages. The one document in this course that may be redistributed in
//      full, and lesson 7 teaches the learner that fact about it.
//    - The PubMed / PMC bibliographic RECORDS (PMIDs 13629913, 13639368, 13662687, 19361398,
//      4244916). US federal works; there is nothing to host beyond the record, so link them.
//  TIER B, copyrighted but publicly readable, LINK ONLY, never rehost:
//    - Inserm (n.d.), the ethics committee's listing page.
//    - Fondation Jerome Lejeune (2014a), (2014b) and (2018). The 2018 item is a PDF on the
//      Foundation's own server. It is the contesting party's own publication; link it, do not copy
//      it, and do not mirror the document album it points to.
//    - Scientific American (2025), the podcast transcript.
//  TIER C, cite only, no link to a copy:
//    - Knudson (1970), Am J Hum Genet 22(2):119-120. PMC flags it not open access; the citation
//      names the record and the lesson says the article was not read.
//    - Gautier (2009), Med Sci (Paris) 25(3):311-315. Full text 403; cited as a record only, and
//      the lesson says plainly that it has not been read.
//    - The 1959 Comptes rendus notes themselves: cited from their index records, with the printed
//      pages behind a captcha on Gallica. Research check A.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file).
// Import: `import { AUTHOR_LINE_AND_FINDING_COURSE } from "./data/the-author-line-and-the-finding-course";`
// NO migration. NO seed:* re-run beyond `pnpm seed:courses`.
//
//   // "The Author Line and the Finding" (Marthe Gautier, plans/83 E-02). PRIVATE study, by BAM's
//   // approval of plans/future-courses/culture-and-history/uncredited/2026-09-18-marthe-gautier-brief.md and his
//   // 2026-09-20 decision to build her STANDALONE rather than as a section of
//   // `what-the-citation-records`. The deciding document here is an institutional ethics opinion
//   // rather than a prize citation, which is why it is a course of its own; it cross-links to
//   // `what-the-citation-records`, `the-paper-and-the-prize` and `who-gets-named` and re-teaches
//   // none of them. One party to the dispute is an active organisation and is named throughout.
//   // NO series code. NO migration: pnpm seed:courses.
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "the-author-line-and-the-finding",
//     course: AUTHOR_LINE_AND_FINDING_COURSE,
//     category: "Culture & History",
//     additionalCategories: ["Science & Math"],
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83). A live credit dispute with a named contesting party, the Fondation Jerome Lejeune, which publishes its own documents. Built from the Inserm ethics committee's 2014 opinion, the Foundation's three published texts, Inserm's own listing page, and the 1959 and 1969 index records. It reaches no verdict, because the documents it could read do not support one, and it says so.",
//   });
//
// WHY "Science & Math" AS AN ADDITIONAL CATEGORY, since BAM asked me to justify it or drop it:
// lesson 2 is a science lesson and earns it. It teaches what the 1959 claim actually was (a count of
// somatic chromosomes in tissue culture, 47 against 46 in controls), what tissue culture and a
// control are, why a photomicroscope mattered to a count in 1958, and what the difference between a
// preparation and a photograph of it did to who could show the evidence. Lesson 6 then builds an
// institutional finding directly on that technical fact. The neighbouring private course
// `what-the-citation-records` carries the same pair of categories for the same reason. If a reviewer
// disagrees, the course still stands on "Culture & History" alone.
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `the-author-line-and-the-finding` to STAGED_COURSES in src/lib/citations.ts and
//    run `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block, and the
//    D5a tiers above say which entries may be hosted.
//  - RESEARCH CHECKS: the seven above, A to G. G is a provenance check with no printed hedge; B is
//    the high-severity one and is already on BAM's manual list as task 308.
//  - STANDARDS: a primary-source history course (sourcing, corroboration, chronology, claim versus
//    evidence, reading a contested record), so per the repo rule it should be MAPPED in
//    src/lib/standards/ rather than BACKLOGged. Until it is mapped it needs a BACKLOG line in
//    scripts/check-standards-coverage.ts or `pnpm lint` fails.
//  - SERIES: none. Private courses carry no CREDIT code (BAM, 2026-09-19).
//  - VISIBILITY: private, insert-only. The price, priceType, visibility and publishHoldReason above
//    must be right on the FIRST seed, because a re-seed never rewrites them.
//  - GUARDS: check-em-dashes, check-longest-option, check-reveals and check-assessment-fit all read
//    `git ls-files`, so they skipped this file while it was untracked. It was measured directly with
//    the same constants and the same arithmetic: longest-option expected score 0.000 on all five
//    banks against a limit of 0.60, with zero questions whose correct option is strictly longest; no
//    em or en dash outside a `//` comment; 26 reveal cards, all well formed; assessment-fit clean.
//    Re-run the real guards once the file is tracked.
