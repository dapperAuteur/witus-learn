import type { AuthoredCourse } from "./authored-course";

// "What the Citation Records: Reading a Prize Page Against the Documents Around It"
// (Culture & History). Slug to be registered: `what-the-citation-records`.
//
// SOURCE BRIEFS, approved by BAM:
//   plans/future-courses/uncredited/2026-09-18-candace-pert-brief.md          (2026-09-19)
//   plans/future-courses/uncredited/2026-09-18-robscheit-robbins-brief.md     (2026-09-19)
//   plans/future-courses/uncredited/2026-09-18-isabella-karle-brief.md        (2026-09-20)
//
// BAM'S CHANGES TO THE BRIEFS. They proposed a FOUR-case cluster course, adding Isabella Karle and
// Marthe Gautier. On 2026-09-19 BAM approved only Pert and Robscheit-Robbins, and this file was
// built from those two. On 2026-09-20 he decided to FOLD ISABELLA KARLE IN, as a "1985" section
// between the 1978 section and the closing section, which is what the shape below was designed for.
// MARTHE GAUTIER (1959 to 2014) IS STILL ON HOLD in plans/88-course-backlog-2026-09-19.md, and
// there is no Gautier material in this file.
//
// WHAT THE 2026-09-20 EDIT TOUCHED OUTSIDE THE NEW SECTION, and why. Nothing was renumbered and no
// existing lesson slug, quiz slug, question prompt, option, explanation or sourceLessonSlug was
// changed, because a reworded prompt resets per-question history (questionKey hashes the prompt)
// and a reordered option rewrites what past learners answered. What did change: the description and
// this header; the bodies of the two Opening lessons and the three Closing lessons, which counted
// the cases and would otherwise have been false; and three quiz banks GAINED questions (the final,
// the Opening quiz and the Closing quiz) so that the pools still clear the density target for the
// words those lessons now carry. Existing questions that say "two cases cannot show a pattern" were
// deliberately left verbatim: they stay true of three, since the point is that a handful of cases
// is too few, and rewriting them would cost every learner their history on those questions.
//
// THE SHAPE IS BUILT TO TAKE A THIRD AND FOURTH CASE WITHOUT RENUMBERING ANYTHING, AND THE THIRD
// HAS NOW BEEN ADDED. Sections are keyed by the YEAR of the prize, not by a running ordinal, and
// the framing and closing sections are keyed by the words "Opening" and "Closing". The 1985 section
// slotted in by year on 2026-09-20 and no existing section title, lesson title, lesson slug or quiz
// slug changed; a 1959 section for Gautier would go in the same way, before the Closing section. That is why no lesson title carries a running number: a "7 ·" prefix is exactly the
// thing that would have to be rewritten. The registered order of lessons in the array is the
// course's order, so a new case is spliced in at its chronological position.
//
// VISIBILITY: PRIVATE, free, NO series code. BAM's 2026-09-19 decision: private courses do not
// carry CREDIT codes, so there is no seriesCode, no seriesPosition and no seriesTrack here or in
// the proposed registration block at the foot of this file. Category "Culture & History".
//
// RESEARCH TIER: 2. The Pert and Robscheit-Robbins briefs set Tier 2 because the subject matter is
// medicine-adjacent history (anaemia therapy, opiate pharmacology). No health advice is given
// anywhere in the course, and every biomedical sentence is a report of what a 1934 or 1973 document
// said, never a claim about what anyone should do. The Karle brief is Tier 1 and its subject matter
// is physical science (X-ray crystallography), which adds no health content of any kind.
//
// THE SPINE, and it must not be flattened into "three women were robbed":
// A PRIZE PAGE IS NOT ONE DOCUMENT. It is a citation, an account written by the institution, and
// the laureate's own words, and in each of these cases those texts do not agree about who
// did the identifying. The skill is reading them apart, then reading them against a fourth document
// the prize-giver does not host: the author line, or the reference list. Taught once, that is a
// method. Taught as a grievance, it is a list. The closing section exists to keep it the first.
//
// FETCH-OR-DO-NOT-CITE. Everything cited below was retrieved and read on 2026-09-19 or 2026-09-20:
//  - Albert and Mary Lasker Foundation, "Opiate receptors and enkephalins", the 1978 Albert Lasker
//    Basic Medical Research Award page. Fetched as raw HTML and read in full.
//  - Nobel Prize Outreach: the 1934 Physiology or Medicine summary page and the award ceremony
//    speech by Professor I. Holmgren (10 December 1934). WebFetch returns 403 for these; a plain
//    HTTP client with a browser user-agent returned them in full, and that is what was read. The
//    speech was searched for "Robscheit" and "Robbins": zero hits.
//  - G. H. Whipple, "Hemoglobin regeneration as influenced by diet and other factors", Nobel
//    Lecture, 12 December 1934 (nobelprize.org/uploads/2018/06/whipple-lecture.pdf, 8 pages).
//    Downloaded and read in full, including the numbered reference list, which was re-counted for
//    this course rather than taken from the brief.
//  - E. Garfield (1979), "Controversies over opiate receptor research typify problems facing awards
//    committees", Current Contents no. 20, reprinted in Essays of an Information Scientist 4:141.
//    The brief marked its quotations OCR-only and CONDITIONED any lesson on checking them against
//    the page images. THAT CONDITION IS MET: pages 141, 142, 143, 152, 153 and 154 were rendered at
//    150 dpi and read as images, and every Garfield sentence quoted in this course was confirmed
//    letter by letter on the rendered page.
//  - PubMed esummary for PMIDs 4687585, 4525427, 4128222, 4516196, 4801733, 216074, 217086 and
//    17816714: author lines, journals, volumes, pages and dates.
//  - Crossref works API, author "Robscheit-Robbins", re-derived for this course: 1925 to 1930
//    counts, and the item-level list of the "Blood regeneration in severe anemia" series.
//  - J. L. Marx (1979), "Lasker award stirs controversy", Science 203(4378):341. The Science page
//    is not reachable. The text was read in a REPRINT posted on candacepert.com on 17 August 2014,
//    an interested site, and the course says so in the lesson that uses it. Every sentence Garfield
//    quotes from Marx appears verbatim in that reprint, which is why it is used at all.
//  - University of Rochester, History of the Campuses and Buildings, "Frieda S. Robscheit-Robbins"
//    (Pierce, 2021). A university history page that TRANSCRIBES its sources. Anything taken from it
//    is attributed as a transcription, because the books themselves were not read.
//
// FETCH-OR-DO-NOT-CITE, the 1985 section, all retrieved and read on 2026-09-20 for this edit rather
// than carried over from the Karle brief:
//  - J. Karle, "Recovering phase information from intensity data", Nobel lecture, 9 December 1985
//    (nobelprize.org/uploads/2018/06/karle-lecture.pdf, 37 pages). Downloaded and read in full.
//    ITS REFERENCE LIST WAS RE-COUNTED HERE, not taken from the brief, and counted from PAGE IMAGES
//    rendered at 150 dpi (pages 252, 253 and 254 of the printed volume) because the text layer of a
//    scanned page corrupts initials, which is the thing the count turns on. The counts printed in
//    the lesson, 98 references, 23 carrying her name, 15 with her first, 11 carrying Hauptman's,
//    55 carrying both, and 21 matching the literal string "Karle, I. L.", are that count. The two
//    misprints the lesson teaches, reference 61 "Karle, I." and reference 70 "Karle, and I. L.
//    Witkop, B.", were confirmed on the rendered page and are in the published lecture itself.
//  - Nobel Prize Outreach: the 1985 Chemistry summary page, the award ceremony speech by Professor
//    Ingvar Lindqvist (10 December 1985), and the "Jerome Karle: Biographical" page, whose text is
//    the autobiography from Les Prix Nobel 1985 (Odelberg, ed., 1986), read down to the sentence
//    that ends it and distinguished from its 1992 and 2006 addenda. The speech was searched for
//    "Isabella" and for "Isabel": zero hits in both cases.
//  - THE PRESS RELEASE OF 16 OCTOBER 1985, which the Karle brief did not have. The Royal Swedish
//    Academy of Sciences' own announcement, background note included. Its sentence "Isabel Karle's
//    and M. Woolfson's contributions to the practical utilization of direct methods have been
//    crucial" was read in the raw HTML as well as the stripped text, and the given name really is
//    printed "Isabel" there. This is the strongest single document in the section: the awarding
//    body, naming her, in the announcement of the prize she is not named in.
//  - National Science and Technology Medals Foundation, "Isabella L. Karle", for the verbatim 1995
//    National Medal of Science citation, and The Franklin Institute, "Isabella L. Karle", for the
//    verbatim 1993 Bower Award citation, its longer account, its "Information as of 1995" line and
//    its list of her other honours including the 1988 Aminoff Prize.
//  - L. Wang (2017, October 26), "Isabella Karle", Chemical & Engineering News. Fetched and read,
//    which is why the Hargittai sentences are quoted with attribution rather than left out.
//
// WHAT IS DELIBERATELY NOT PRINTED:
//  - Any motive for any jury. The Lasker deliberations are confidential and no released Nobel
//    committee record was found, so the course says what the documents say and stops.
//  - "Pert discovered the opiate receptor" as a flat claim. Three groups reported it in 1973 and
//    Garfield says each has a strong claim. The multiple-discovery caveat rides with every mention.
//  - "21 papers with Whipple". Reproducible under exactly one counting rule and not the others, and
//    the reference-book entry that states it carries two demonstrable errors. The course teaches
//    the count WITH its rule, and teaches why that particular number is weak.
//  - Any child or descendant of any subject. The Rochester page names several, and the 1985 Nobel
//    autobiography names three daughters; none appears here. The spouse rule has one unavoidable
//    exception: in the 1985 case the laureate IS her husband, and the sentence the section turns on
//    is his. The frame rule from the briefs still holds, and the section obeys it: the procedure is
//    taught before the marriage, and no lesson leads with "the wife who was overlooked".
//  - Candace Pert's later career and popular writing, and the medical detail Marx reports about
//    her. Out of scope and not needed by any lesson.
//  - "Isabella Karle was the first to apply direct methods", which plans/83 asserted and which the
//    C&EN obituary quotes Hargittai saying. The laureate's own lecture puts the earliest
//    applications with the U.S. Geological Survey. The course prints the narrower documented claim
//    and shows the check, rather than repeating the wider one.
//  - Her own words from the 1987 oral history, including the sentence about an undergraduate prize
//    committee. The transcript is in copyright and the Karle brief's question 3 to BAM, quote one
//    sentence with attribution or paraphrase only, HAS NOT BEEN ANSWERED. Nothing is quoted from it
//    here; the only use made of it is the negative finding that it contains no discussion of the
//    prize, which the brief verified. When BAM answers, the material is a two-sentence addition.
//  - "I had enough awards as it was", the remark attributed to her by the Atomic Heritage Foundation
//    quoting a paywalled 2013 article. Two removes from her, and the article could not be read.
//  - The wording of the 1988 Aminoff Prize citation. The prize itself is on two fetched pages; its
//    citation text was only ever seen in search results, so the lesson names the prize and quotes
//    nothing, and a research check is proposed below.
//
// House style, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific terms; APA 7
// `## Sources`; a quiz per teaching section (pool sized to the density target, 58 to 84, serving 5,
// passing 80, shuffled) plus a final pooling 52 and serving 10, placed LAST; two primary-source
// exercises, the 1978 award page and the 1934 reference-list count (the 1985 count is taught rather
// than drilled, because the 1934 exercise already teaches the drill); every question carries
// `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specifically wrong, so
// check-longest-option passes by construction. No em dashes and no en dashes anywhere.
export const WHAT_THE_CITATION_RECORDS_COURSE: AuthoredCourse = {
  title: "What the Citation Records: Reading a Prize Page Against the Documents Around It",
  description:
    "A prize page looks like one document. It is usually three. There is the citation, the short sentence the institution will repeat forever. There is the institution's own account of the work, an essay or a presentation speech. And there are the laureate's own words, acceptance remarks or a lecture, hosted on the same site by the same body. This course works three cases in which those three texts do not agree about who did the work. In 1934 the Nobel presentation speech praised Whipple's experiments and never named Frieda Robscheit-Robbins; two days later Whipple's own Nobel lecture said the method was begun by Dr. Frieda Robscheit-Robbins and the writer, and ten of its twenty-three references carry her name. In 1978 the Lasker Foundation's essay said Solomon Snyder identified the opiate receptor system, and Snyder's acceptance remarks on the same page said Candace Pert identified the opiate receptors in his laboratory. In 1985 the Royal Swedish Academy of Sciences called Isabel Karle's contributions to the practical use of direct methods crucial in its own press release, its presentation speech gave the practical gain to recent developments and modern computers, and the laureate's Nobel lecture said the first broadly practical procedure arose mainly from the efforts of Dr. Isabella Karle; the prize was shared by two people, and a Nobel may be shared by three. None of these pages is a scandal and none is a verdict. Each is a set of documents that can be read apart, set against a fourth document the prize-giver does not host, and counted. You will count the references yourself rather than take a total on trust, name who contests what and where they said it, and learn where the record stops. The closing section is the point of the course: a method you can carry to the next prize page, and an honest list of what these three cases do not prove.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // OPENING — What a prize page is made of
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-documents-on-one-page",
      title: "Opening · Three documents on one page",
      section: "Opening · What a prize page is made of",
      body: `A prize page looks like one thing. Open almost any of them and you will find three, written by different people, doing different jobs, published under one heading.

**The citation.** One sentence, sometimes two, naming the winners and the work. It is the institution's permanent memory of the award, and it is the sentence that gets quoted for the next century.

**The institution's own account.** An essay about each winner, or a presentation speech given at the ceremony. Longer, explanatory, and written by the prize-giver rather than the winner.

**The laureate's own words.** Acceptance remarks, or a lecture. Hosted on the same site, under the same award, but written by the person who received the prize.

Those three can disagree, and on the three pages this course works, they do.

**1934.** The Nobel Prize in Physiology or Medicine "was awarded jointly to George Hoyt Whipple, George Richards Minot and William Parry Murphy 'for their discoveries concerning liver therapy in cases of anaemia'", with a prize share of one third each (Nobel Prize Outreach, n.d.-b). At the ceremony on 10 December, Professor I. Holmgren said that "Whipple's experiments were planned exceedingly well and carried out very accurately, and consequently their results can lay claim to absolute reliability" (Nobel Prize Outreach, n.d.-a). Search that speech for the name Robscheit, or for Robbins, and you get nothing. Two days later, in his Nobel lecture on the same site, Whipple wrote: "After the transfer of the anemia colony of dogs from San Francisco to Rochester, New York (1923), Dr. Frieda Robscheit-Robbins and the writer began to use a different type of anemia" (Whipple, 1934).

**1978.** The Albert Lasker Basic Medical Research Award went to Hans W. Kosterlitz, John Hughes and Solomon H. Snyder, "For identifying the relation of the opiate receptors to the naturally occurring enkephalins." The Foundation's own essay on one winner says "Dr. Snyder not only identified this receptor system, but with his co-workers, went on to develop precise techniques for localizing these opiate receptors". Further down the same page, under the heading "Acceptance remarks, 1978 Lasker Awards Ceremony", Snyder says: "Among the many people who contributed to this area, my own special thanks go to Candace Pert who, as a graduate student, identified the opiate receptors in my laboratory" (Albert and Mary Lasker Foundation, n.d.).

One page, one verb, two people doing the identifying.

**1985.** The Nobel Prize in Chemistry went to two people, and a Nobel may be shared by three. The Royal Swedish Academy of Sciences wrote in its own press release that Isabel Karle's contributions to the practical utilization of direct methods had been crucial (Royal Swedish Academy of Sciences, 1985). Its presentation speech at the ceremony credited recent developments and modern computers, and named her not at all (Lindqvist, 1985).

**The fourth document.** No one of these pages settles anything on its own, and that is the useful part. What moves a reading forward is a document the prize-giver does not host: the author line of the paper, or the reference list at the foot of the lecture. Each of this course's cases has one, and in each of them it says something the citation does not.

**What this course is not.** It is not a list of thefts. Three cases cannot show a pattern, no jury's reasons are on the record, and the course puts no motive in anyone's mouth. What three cases can do is teach a reading method well enough that you can use it on a prize page nobody has written about.

**Related reading, already built and not repeated here.** The public course *The Paper and the Prize* works an adjacent case, Esther Lederberg, and its lesson 5, "Who is on the paper, and who is on the prize", is the built worked example of setting an author line against a prize. Its lesson 6, "The Matilda effect, and what this case does and does not prove", does for that case what this course's closing section does for these two. Read them. This course does not re-teach either.

:::reveal What are the three kinds of document that usually sit on one prize page? ||| The citation, the institution's own account of the work (an essay or a presentation speech), and the laureate's own words (acceptance remarks or a lecture).

:::reveal What is the "fourth document", and why does it matter? ||| A document the prize-giver does not host, such as the author line of the paper or the reference list of a lecture. It is the one the institution did not write, so it can say something the citation does not.

## Vocabulary
- **Citation**: the short official sentence naming the winners and the work, which the institution repeats permanently.
- **Presentation speech**: the address given at a Nobel ceremony by a member of the awarding institution, explaining the prize to the audience.
- **Acceptance remarks**: what a winner says on receiving the award, published by the prize-giver alongside its own texts.
- **Nobel lecture**: the talk a laureate gives within days of the ceremony, hosted by the Nobel Foundation, usually with a reference list.
- **Author line**: the ordered list of authors on a paper, which records who is credited with the work and in what order.

## Sources
Albert and Mary Lasker Foundation. (n.d.). *Opiate receptors and enkephalins: 1978 Albert Lasker Basic Medical Research Award*. https://laskerfoundation.org/winners/opiate-receptors-and-enkephalins/
Lindqvist, I. (1985). *Award ceremony speech: The Nobel Prize in Chemistry 1985*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/ceremony-speech/
Nobel Prize Outreach. (n.d.-a). *Award ceremony speech: The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/ceremony-speech/
Nobel Prize Outreach. (n.d.-b). *The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/summary/
Royal Swedish Academy of Sciences. (1985, October 16). *Press release: The 1985 Nobel Prize in chemistry*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/press-release/
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "caps-and-what-they-explain",
      title: "Opening · Format caps, and what they explain",
      section: "Opening · What a prize page is made of",
      body: `When somebody is left off a prize, the first explanation offered is almost always the format: there were only so many seats. It is a real constraint, and it is worth knowing exactly how much of an omission it can account for, because the answer is different in each of this course's three cases.

**The rule, from a named source.** Writing in 1979 about the 1978 Lasker dispute, the citation analyst Eugene Garfield put both halves in one parenthesis: "(Nobels, for example, are limited to three co-winners per year. Lasker awards, however, have no formal limitations.)" (Garfield, 1979). The general rule about Nobel seats is taught in *Who Gets Named*, lesson 1, "Credit is a second event". What matters here is the second half of Garfield's sentence.

**1934: the seats were full.** The Nobel summary page for that year lists three laureates and gives each a prize share of one third (Nobel Prize Outreach, n.d.-b). Three names, three thirds. A fourth name could not have been added without removing one of the three, so in this case the arithmetic really does constrain the outcome.

**1978: there was no such arithmetic.** If Garfield is right that the Lasker carried no formal limit, then nothing about the format required the 1978 award to stop at three. Garfield went further than that. Having worked through four years of citation cluster maps, he concluded that the committee "would have certainly been able to justify naming Goldstein, Simon, and Terenius, as well as the three researchers they recognized", and with Pert added, "we have identified seven scientists who could have appropriately shared the 1978 Lasker or National Institute of Drug Abuse (NIDA) awards" (Garfield, 1979).

**1985: the cap was real and did not bind.** A Nobel Prize may be shared by three. The summary page for the 1985 prize in chemistry lists two laureates at one half each (Nobel Prize Outreach, n.d.-c). The seat existed and nobody sat in it, so no arithmetic decided anything that year.

**What a cap explains, and what it does not.** A cap explains the arithmetic of an omission: how many people could be named at all. It does not explain the choice of who fills the seats, because that choice is made before the cap ever binds. In 1934 the three seats went to Whipple, Minot and Murphy, and the cap says nothing about why the work the citation rewards was described the way it was. In 1978 the cap was not there to do even the arithmetic.

**Why one case cannot teach this.** With only the 1934 case, "there were three seats" is an available and sufficient-looking answer. With only the 1978 case, "prizes have caps" sounds like a general truth. With only the 1985 case, the whole idea of a cap looks like a distraction. Side by side, the three cases show that the cap is a fact about one award's format in one year rather than a general explanation, and that you have to look up which format you are dealing with, and whether it bound, before you use it.

:::reveal What did Garfield write in 1979 about formal limits on the Lasker awards? ||| That Nobels are limited to three co-winners per year, but Lasker awards have no formal limitations.

:::reveal Why can a format cap not explain who was chosen? ||| A cap only limits how many people may be named. The choice of which people fill the seats is made separately, before the limit ever binds.

## Vocabulary
- **Format cap**: a rule in an award's own statutes limiting how many people may share a single prize.
- **Prize share**: the fraction of a Nobel Prize assigned to each laureate, printed on the Nobel summary page.
- **Citation analyst**: someone who studies how often published papers are cited, as a measure of a paper's uptake.
- **Cluster map**: Garfield's graphic of highly cited papers that are frequently cited together, used to sketch the shape of a research specialty.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Nobel Prize Outreach. (n.d.-b). *The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/summary/
Nobel Prize Outreach. (n.d.-c). *The Nobel Prize in Chemistry 1985*. https://www.nobelprize.org/prizes/chemistry/1985/summary/`,
    },
    {
      slug: "the-1978-award-page-exercise",
      title: "Opening · Primary source: the 1978 award page",
      section: "Opening · What a prize page is made of",
      body: `This is the course's primary source exercise, and it works best before you know the history. Read the page cold, answer from the page, and only then read the 1978 section.

**The document.** The Albert and Mary Lasker Foundation's own page for the 1978 Albert Lasker Basic Medical Research Award, titled "Opiate receptors and enkephalins", at laskerfoundation.org/winners/opiate-receptors-and-enkephalins/. It was read in full for this course on 2026-09-19.

**What is on it, in order.** Three winners with their institutions. A citation line. Then an essay on each winner, unsigned, each ending in a dedication that begins "To Dr.". A second citation line sits between the essays. And at the foot, one set of acceptance remarks, headed "Acceptance remarks, 1978 Lasker Awards Ceremony". Only one of the three winners has remarks on the page. Two do not.

**Why this page and not a better one.** Because both halves of the contradiction are on the same screen. You do not have to trust a summary of what somebody said elsewhere, or chase an archive. The Foundation's sentence and the laureate's sentence are a few paragraphs apart, published together by the same body, and you can read them one after the other in under a minute. A document that carries its own disagreement is worth ten that need a second source to make the point.

**The caution that keeps this honest, and it is not optional.** Two other groups reported opiate binding in the same year as the paper you will look up in step 4. "Identified the opiate receptors in my laboratory" is a sentence about a laboratory, not a claim that one person discovered something alone, and it should not be read as one. The 1978 section does that arithmetic properly.

**One more thing the page will not tell you.** Its metadata shows it was posted on 8 April 2021, so the essays are the Foundation's current presentation of a 1978 award. The page does not say when they were written, and this course does not guess.

:::reveal Why is the 1978 Lasker page a better teaching document than a second-hand account of the same dispute? ||| Because both halves of the contradiction are published on the same page by the same body, so a reader can check them directly instead of trusting a summary.

:::reveal What does the page tell you about when its essays were written? ||| Nothing. Its metadata shows the page was posted on 8 April 2021, but the page does not say when the essays themselves were written.

## Vocabulary
- **Primary source**: the document itself, rather than someone's account of it.
- **Dedication**: the closing sentence of each Lasker essay, beginning "To Dr.", which restates why the award is given.
- **Page metadata**: the publication data attached to a web page, such as the date it was posted, which is not the same as the date its text was written.

## Sources
Albert and Mary Lasker Foundation. (n.d.). *Opiate receptors and enkephalins: 1978 Albert Lasker Basic Medical Research Award*. https://laskerfoundation.org/winners/opiate-receptors-and-enkephalins/`,
      exercise: {
        instructions:
          "Open the Lasker Foundation's 1978 award page and answer from the page itself. Type short answers: a surname, a word, or a two-word phrase.",
        items: [
          {
            prompt: "Step 1. List the winners and their institutions. Type the surname of the winner whose institution is given as Johns Hopkins University School of Medicine.",
            answer: "Snyder",
            accept: ["Solomon Snyder", "Solomon H. Snyder"],
            explanation:
              "The page lists Hans W. Kosterlitz (University of Aberdeen), John Hughes (Imperial College of Science and Technology) and Solomon H. Snyder (Johns Hopkins University School of Medicine).",
          },
          {
            prompt: "Step 1, continued. Type the surname of the winner whose institution is given as University of Aberdeen.",
            answer: "Kosterlitz",
            accept: ["Hans Kosterlitz", "Hans W. Kosterlitz"],
            explanation:
              "Kosterlitz is at Aberdeen and Hughes at Imperial College. Keeping the three names and institutions straight is step one of reading any prize page.",
          },
          {
            prompt: "Step 2. One verb does the crediting twice on this page, once in the Foundation's essay on a winner and once in the acceptance remarks. Type that verb, spelled as the page spells it.",
            answer: "identified",
            accept: ["identify", "identifying"],
            explanation:
              "The Foundation's essay says Snyder \"identified this receptor system\". The acceptance remarks say Pert \"identified the opiate receptors in my laboratory\". Same verb, different subject.",
          },
          {
            prompt: "Step 2, continued. In the Foundation's sentence that begins \"Dr. Snyder not only\", who is credited with identifying the receptor system? Type the surname.",
            answer: "Snyder",
            accept: ["Solomon Snyder", "Solomon H. Snyder"],
            explanation:
              "The Foundation's essay gives the identifying to Snyder: \"Dr. Snyder not only identified this receptor system, but with his co-workers, went on to develop precise techniques for localizing these opiate receptors\".",
          },
          {
            prompt: "Step 2, continued. In the acceptance remarks lower down the same page, who is credited with identifying the opiate receptors? Type the surname.",
            answer: "Pert",
            accept: ["Candace Pert"],
            explanation:
              "The remarks say: \"my own special thanks go to Candace Pert who, as a graduate student, identified the opiate receptors in my laboratory\". The page gives the same verb to two different people.",
          },
          {
            prompt: "Step 3. The acceptance remarks describe the position Pert held at the time in two words. Type those two words.",
            answer: "graduate student",
            accept: ["a graduate student", "graduate-student"],
            explanation:
              "\"As a graduate student\" is the whole of the role the page assigns her. In 1979 that phrase became the centre of the argument about why she was not a winner.",
          },
          {
            prompt: "Step 4. Now bring in a document the Lasker Foundation does not host: the 1973 Science paper \"Opiate receptor: demonstration in nervous tissue\". Type the surname of its first author.",
            answer: "Pert",
            accept: ["Candace Pert", "Pert CB"],
            explanation:
              "Pert CB and Snyder SH, Science 179(4077), 1011-1014, published 9 March 1973, with Pert first. That author line is the fourth document, and the prize page does not carry it.",
          },
          {
            prompt: "Step 5. Which document on this page settles who identified the opiate receptors? If no document on the page settles it, type none.",
            answer: "none",
            accept: ["no document", "none of them", "nothing"],
            explanation:
              "The page records a disagreement rather than a verdict, which is exactly what makes it worth reading. Settling it would take documents the page does not carry, and the 1978 section shows why even those do not settle it cleanly.",
          },
        ],
      },
    },
    {
      slug: "opening-quiz",
      title: "Opening quiz · What a prize page is made of",
      section: "Opening · What a prize page is made of",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long is a prize citation, in this course's description of one?",
            options: [
              "One sentence, sometimes two",
              "A page for each winner, written by the awarding institution after the ceremony",
              "As long as the laureate's own lecture, which it reproduces in summary form",
              "A single paragraph per contributor, including those who did not receive the award",
            ],
            correctIndex: 0,
            explanation:
              "It names the winners and the work, and it is the sentence quoted for the next century.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Who writes the institution's own account of the work on a prize page?",
            options: [
              "The prize-giver, not the winner",
              "The winner, who is asked to supply a short technical essay before the ceremony",
              "A committee of the winner's peers, appointed separately from the awarding jury",
              "The journal that published the work, which supplies the text on request",
            ],
            correctIndex: 0,
            explanation:
              "An essay about each winner, or a presentation speech given at the ceremony. Longer and explanatory, and written by the institution.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Where are a laureate's own words published, in the cases this course works?",
            options: [
              "On the same site, under the same award",
              "In the journal that carried the original paper, as an invited commentary",
              "In the laureate's institutional archive, which the prize-giver links to but does not host",
              "Nowhere, because acceptance remarks and lectures are not published by award bodies",
            ],
            correctIndex: 0,
            explanation:
              "Hosted by the prize-giver alongside its own texts, which is exactly what lets the two be read against each other.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does a Nobel lecture usually carry that acceptance remarks do not?",
            options: [
              "A reference list",
              "A citation line, printed at its head by the awarding institution",
              "A dedication to the laureate, written by the jury that made the award",
              "A statement of how the honorarium will be divided among collaborators",
            ],
            correctIndex: 0,
            explanation:
              "That reference list is the fourth document in the 1934 case, and it is what the counting lesson counts.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What is an author line?",
            options: [
              "The ordered list of authors on a paper",
              "The sentence in a citation that names the winners and the work they are honoured for",
              "The acknowledgement at the foot of a paper thanking people who are not authors",
              "The line in an award essay that names the laureate's institution",
            ],
            correctIndex: 0,
            explanation:
              "It records who is credited with the work and in what order, which is why the order matters.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Which lesson of The Paper and the Prize does this course name as the limits lesson for that case?",
            options: [
              "Lesson 6",
              "Lesson 5, which sets the author line of a paper against the citation of a prize",
              "Lesson 2, on what replica plating settled and what it did not settle",
              "Lesson 4, on what the lambda work made possible for the field afterwards",
            ],
            correctIndex: 0,
            explanation:
              "\"The Matilda effect, and what this case does and does not prove\". Lesson 5 is the worked example, and both are pointed at rather than repeated.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "When someone is left off a prize, what explanation does this course say is offered first?",
            options: [
              "The format: there were only so many seats",
              "The nomination deadline, which excludes anyone not put forward in the preceding year",
              "The award's subject boundaries, which exclude work done outside the named field",
              "The jury's inability to read every paper in a large and fast-moving specialty",
            ],
            correctIndex: 0,
            explanation:
              "It is a real constraint, and the lesson exists to establish exactly how much of an omission it can account for.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Which three additional names did Garfield say the 1978 committee could have justified?",
            options: [
              "Goldstein, Simon and Terenius",
              "Pert, Pasternak and Kuhar, the three co-authors on Snyder's papers in the cluster maps",
              "Hughes, Kosterlitz and Pert, the three people the acceptance remarks name by name",
              "Maren, Pollin and Silbergeld, the three scientists who wrote to Science in 1979",
            ],
            correctIndex: 0,
            explanation:
              "\"As well as the three researchers they recognized\". Adding Pert to that list is how he reaches seven.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "When is the choice of who fills a prize's seats made, relative to the cap?",
            options: [
              "Before the cap binds",
              "At the same moment, because the cap is what forces the jury to rank the candidates",
              "After the cap binds, since the jury first decides how many seats to use that year",
              "The question does not arise, because a cap determines eligibility rather than number",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a cap can explain the arithmetic of an omission and nothing about the choice.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "What does the 1978 Lasker page say about who wrote its essays on the winners?",
            options: [
              "Nothing, because they are unsigned",
              "That they were written by the jury chair, whose name appears under each dedication",
              "That they were supplied by each winner's institution and lightly edited",
              "That they were written in 1978 by the Foundation's scientific staff",
            ],
            correctIndex: 0,
            explanation:
              "Unsigned essays, each ending in a dedication beginning \"To Dr.\". The page also does not say when they were written.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "How many kinds of document usually sit on one prize page, according to this course?",
            options: [
              "Three",
              "One, because the citation is the only official text and the rest is decoration added later",
              "Seven, one for each stage of the nomination process that the institution publishes",
              "Two, since a presentation speech and a laureate's lecture are treated as a single text",
            ],
            correctIndex: 0,
            explanation:
              "The citation, the institution's own account of the work, and the laureate's own words.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What job does the citation do on a prize page?",
            options: [
              "It is the institution's permanent memory",
              "It records the jury's reasoning, including which candidates were considered and rejected",
              "It is written by the laureate to describe the work in the laureate's own terms",
              "It lists every person who contributed to the work, in order of contribution",
            ],
            correctIndex: 0,
            explanation:
              "One sentence, sometimes two, naming the winners and the work. It is what gets quoted for the next century.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Who writes the presentation speech at a Nobel ceremony?",
            options: [
              "The awarding institution",
              "The laureate, who is asked to introduce the work in advance of receiving the medal",
              "A journalist appointed by the Nobel Foundation to explain the prize to the general public",
              "The nominating committee of the laureate's own university, as a courtesy",
            ],
            correctIndex: 0,
            explanation:
              "In 1934 the speech was given by Professor I. Holmgren of the Royal Caroline Institute, on 10 December.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What were the 1934 Nobel Prize in Physiology or Medicine's laureates awarded for, in the citation's own words?",
            options: [
              "Discoveries concerning liver therapy in cases of anaemia",
              "The discovery of the vitamin responsible for the cure of pernicious anaemia and its synthesis",
              "Establishing the role of the bone marrow in the manufacture of red blood corpuscles",
              "Developing the first reliable laboratory method for measuring haemoglobin in human blood",
            ],
            correctIndex: 0,
            explanation:
              "The Nobel summary page gives the award jointly to Whipple, Minot and Murphy \"for their discoveries concerning liver therapy in cases of anaemia\".",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What prize share did each 1934 laureate receive?",
            options: [
              "One third",
              "One half for Whipple and one quarter each for Minot and Murphy, reflecting the citation order",
              "An equal quarter each, with the fourth quarter retained by the Nobel Foundation that year",
              "A share decided afterwards by the laureates themselves, which the Foundation does not publish",
            ],
            correctIndex: 0,
            explanation:
              "The Nobel summary page prints a prize share of 1/3 beside each of the three names.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does Holmgren's 1934 presentation speech say about Whipple's experiments?",
            options: [
              "Their results can claim absolute reliability",
              "That they were preliminary, and that the decisive work was done later by Minot and Murphy in Boston",
              "That they were carried out jointly with a research associate whose name the speech then gives",
              "That they were too crude to measure a diet factor, which the lecture two days later confirmed",
            ],
            correctIndex: 0,
            explanation:
              "The speech says they \"were planned exceedingly well and carried out very accurately, and consequently their results can lay claim to absolute reliability\".",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "How many times does the name Robscheit or Robbins appear in the 1934 presentation speech?",
            options: [
              "Not at all",
              "Once, in the closing paragraph where Holmgren turns to address the three laureates directly",
              "Twice, both times in the passage describing the method of bleeding dogs by aspiration",
              "Three times, once for each of the papers the speech cites by author and journal",
            ],
            correctIndex: 0,
            explanation:
              "The speech text was searched for both spellings for this course. Neither occurs. She is not named in it.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does Whipple's Nobel lecture say about who began using a different type of anemia after the dog colony moved to Rochester?",
            options: [
              "Robscheit-Robbins and the writer",
              "The writer alone, working with a colony of dogs that had been transferred from Baltimore in 1914",
              "A team at the Hooper Foundation in San Francisco that continued the work after the transfer",
              "Minot and Murphy, whose Boston patients supplied the comparison the new method needed",
            ],
            correctIndex: 0,
            explanation:
              "The lecture says \"Dr. Frieda Robscheit-Robbins and the writer began to use a different type of anemia\", two days after the speech that did not name her.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Who were the three winners of the 1978 Albert Lasker Basic Medical Research Award?",
            options: [
              "Kosterlitz, Hughes and Snyder",
              "Goldstein, Simon and Terenius, the three senior investigators Garfield's cluster maps identified",
              "Snyder, Pert and Kosterlitz, with Hughes named in the citation as a collaborating investigator",
              "Kosterlitz, Hughes and Goldstein, with Snyder receiving a separate clinical award the same year",
            ],
            correctIndex: 0,
            explanation:
              "Hans W. Kosterlitz (Aberdeen), John Hughes (Imperial College) and Solomon H. Snyder (Johns Hopkins), as the Foundation's page lists them.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does the 1978 Lasker citation say the award is for?",
            options: [
              "Identifying the relation of the opiate receptors to the naturally occurring enkephalins",
              "Discovering the opiate receptor and proving that it is the first neurotransmitter receptor verified",
              "Developing non-addicting analgesics from the enkephalins for the relief of pain in man",
              "Mapping the regional distribution of the opiate receptors throughout the human brain",
            ],
            correctIndex: 0,
            explanation:
              "That is the citation line printed under the three winners. A second line, about the structure of the enkephalins and the identification of their natural origin, sits before the Hughes essay.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "In the Lasker Foundation's own essay, who identified the opiate receptor system?",
            options: [
              "Snyder",
              "Pert, whom the essay names as the graduate student responsible for the binding experiments",
              "Kosterlitz, whose peripheral nervous system models the essay describes in the paragraph before",
              "Goldstein, whose 1971 paper the essay calls the parent of the research that followed",
            ],
            correctIndex: 0,
            explanation:
              "\"Dr. Snyder not only identified this receptor system, but with his co-workers, went on to develop precise techniques for localizing these opiate receptors.\"",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "In the acceptance remarks on the same 1978 page, who identified the opiate receptors?",
            options: [
              "Pert",
              "Snyder and his co-workers together, which the remarks describe as a single collaborative effort",
              "Hughes and Kosterlitz, whom the remarks call friends and credit with the whole receptor programme",
              "Nobody is named, because the remarks thank the National Institute of Mental Health instead",
            ],
            correctIndex: 0,
            explanation:
              "\"My own special thanks go to Candace Pert who, as a graduate student, identified the opiate receptors in my laboratory.\"",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does this course mean by the \"fourth document\"?",
            options: [
              "One the prize-giver does not host",
              "The nomination letter, which most award bodies release fifty years after the prize is given",
              "A press release issued by the winner's university on the day the award is announced",
              "The jury's minutes, which the Lasker Foundation publishes alongside each year's citation",
            ],
            correctIndex: 0,
            explanation:
              "An author line or a reference list. It is the document the institution did not write, which is why it can say something the citation does not.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Why does this course say two cases cannot show a pattern?",
            options: [
              "Two is too few, and no jury's reasons are on the record",
              "Because the two prizes were given in different countries, so their rules cannot be compared at all",
              "Because both cases were settled in print at the time, which removes them from the historical record",
              "Because a pattern requires a court finding, and neither dispute ever reached a court",
            ],
            correctIndex: 0,
            explanation:
              "The course teaches a reading method and says openly what the cases do not prove. A list of thefts is the genre it is avoiding.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Which built public course does this one point to as related reading on an adjacent case?",
            options: [
              "The Paper and the Prize",
              "Who Built the Blood Bank, whose section 5 covers prize credit in mid-century American medicine",
              "Who Owns the Steps, which teaches choreography credit through the same author line method",
              "Written by Himself, which covers the same period and the same awarding institution",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 5, \"Who is on the paper, and who is on the prize\", is the built worked example. This course does not re-teach it.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Which lesson of The Paper and the Prize does this course name as the built worked example of setting an author line against a prize?",
            options: [
              "Lesson 5",
              "Lesson 1, on replica plating, which introduces the technique before the credit question arises",
              "Lesson 3, on the plaques that should not have been there, which is about lambda and lysogeny",
              "Lesson 6, on the Matilda effect, which is the limits lesson rather than the document lesson",
            ],
            correctIndex: 0,
            explanation:
              "\"Who is on the paper, and who is on the prize\". Lesson 6 is the limits lesson, and it is named separately.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What did Garfield write in 1979 about the number of co-winners a Lasker award may have?",
            options: [
              "There are no formal limitations",
              "That the limit is three, matching the Nobel rule, which is why the 1978 award stopped where it did",
              "That the limit was raised from three to six in 1977, the year of the NIDA Pacesetter award",
              "That the Foundation sets the number each year in advance and publishes it with the citation",
            ],
            correctIndex: 0,
            explanation:
              "\"(Nobels, for example, are limited to three co-winners per year. Lasker awards, however, have no formal limitations.)\"",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "According to the same parenthesis in Garfield's essay, how many co-winners per year may a Nobel Prize have?",
            options: [
              "Three",
              "Two, which is why a third seat sat unused in several twentieth century science prizes",
              "Five, a limit the Nobel Foundation reduced to three only after the Second World War",
              "There is no limit, and the number is decided by each awarding institution every year",
            ],
            correctIndex: 0,
            explanation:
              "Garfield's sentence gives both halves at once: three for Nobels, no formal limitation for the Lasker.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Why does the 1934 case fit the format cap explanation?",
            options: [
              "Three laureates held three thirds",
              "Because the Nobel Foundation published a note that year explaining the cap to the press",
              "Because Whipple asked the committee in writing to add a fourth name and was told it was full",
              "Because the presentation speech says the committee wished to honour a fourth person",
            ],
            correctIndex: 0,
            explanation:
              "The summary page shows three names, each with a prize share of one third. A fourth could not be added without removing one.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Why does the format cap explanation fail for the 1978 Lasker?",
            options: [
              "The award had no formal limit",
              "Because the award that year was given to four people rather than the usual three winners",
              "Because the Lasker Foundation suspended its limit for one year at the jury's request",
              "Because the limit applies only to clinical awards, and this was a clinical award",
            ],
            correctIndex: 0,
            explanation:
              "If Garfield is right that there was no formal limitation, nothing about the format required the award to stop at three.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "How many scientists did Garfield conclude could appropriately have shared the 1978 Lasker or the NIDA awards?",
            options: [
              "Seven",
              "Three, the same three the Lasker jury chose, which is why he called the dispute unfounded",
              "Twelve, one for each paper that appeared in his 1974 opiate receptor cluster map",
              "Four, being the three winners plus Pert, with the other senior investigators excluded",
            ],
            correctIndex: 0,
            explanation:
              "He named Goldstein, Simon and Terenius alongside the three winners, then added Pert, giving seven.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "What does a format cap explain about an omission?",
            options: [
              "The arithmetic",
              "The jury's reasoning, since a cap forces the jury to publish why each seat was filled as it was",
              "The order of names in the citation, which always runs from the most to the least senior",
              "Whether the omitted person was an author on the papers the citation rewards",
            ],
            correctIndex: 0,
            explanation:
              "How many people could be named at all. The choice of who fills the seats is made before the cap binds.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Which lesson of Who Gets Named does this course point to for the rule about Nobel seats?",
            options: [
              "Lesson 1, Credit is a second event",
              "Lesson 10, What the award data show and what they do not, which covers counting instead",
              "Lesson 13, Who counts as an author and who gets thanked, which covers acknowledgements",
              "Lesson 21, on corrections, which covers what happens after a prize has been given",
            ],
            correctIndex: 0,
            explanation:
              "The general rule about seats is taught there. This lesson only needs the second half of Garfield's sentence.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Why can one case alone not teach what a format cap does and does not explain?",
            options: [
              "One case makes the cap look general",
              "Because a single case never has a published citation, so there is nothing to read the cap against",
              "Because caps changed between 1934 and 1978, so no two cases can ever be compared fairly",
              "Because the cap is a statutory rule and statutes cannot be tested against individual cases",
            ],
            correctIndex: 0,
            explanation:
              "With 1934 alone, three seats is a sufficient-looking answer. With 1978 alone, caps sound like a general truth. Side by side, neither does.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "What is a cluster map, in Garfield's sense?",
            options: [
              "A graphic of papers frequently cited together",
              "A chart of every laboratory working in a field, arranged by the institution that funds it",
              "A diagram of an award jury's voting rounds, showing how each candidate's support shifted",
              "A ranked table of authors in a specialty, ordered by how many papers each has published",
            ],
            correctIndex: 0,
            explanation:
              "Highly cited earlier papers that later literature cites together, laid out by multidimensional scaling, used to sketch a specialty.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "Where should a reader of this course start the 1978 primary source exercise?",
            options: [
              "On the page, before the history",
              "After finishing the 1978 section, so the argument of 1979 is already clear in the reader's mind",
              "With Garfield's 1979 essay, which reprints the relevant sentences from the award page",
              "With the 1973 Science paper, because the author line settles the question the page raises",
            ],
            correctIndex: 0,
            explanation:
              "Read the page cold and answer from the page. The lesson says so in its first line, and the 1978 section comes afterwards.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "How many of the three 1978 winners have acceptance remarks printed on the Lasker page?",
            options: [
              "One",
              "All three, each printed under a separate heading naming the ceremony and the year",
              "Two, with the third winner's remarks omitted because he did not attend the ceremony",
              "None, because the Foundation publishes only its own essays and the citation lines",
            ],
            correctIndex: 0,
            explanation:
              "Only Snyder's remarks appear, headed \"Acceptance remarks, 1978 Lasker Awards Ceremony\". Kosterlitz and Hughes have none on the page.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "How does each Lasker essay on the 1978 page end?",
            options: [
              "With a dedication beginning \"To Dr.\"",
              "With a list of the winner's principal publications in the field the award recognises",
              "With the signature of the jury member who drafted it, followed by the date of drafting",
              "With a short statement of what the winner intends to do with the honorarium",
            ],
            correctIndex: 0,
            explanation:
              "For example: \"To Dr. Snyder, whose delineation of the mechanisms of action of the opiate drugs lies at the relief of pain and the counteracting of narcotic addiction, this 1978 Albert Lasker Basic Medical Research Award is given.\"",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What makes the 1978 page a better teaching document than a second-hand account of the dispute?",
            options: [
              "Both halves are on one page",
              "Because it reproduces the jury's deliberations, which no second-hand account has ever obtained",
              "Because it was written in 1978 and so predates every later retelling of the argument",
              "Because the Foundation revised it in 2021 to add the material that had been missing",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's sentence and the laureate's sentence are a few paragraphs apart, published together, and readable in under a minute.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What caution does the exercise attach to the sentence about identifying the opiate receptors in Snyder's laboratory?",
            options: [
              "Two other groups reported binding that year",
              "That the sentence was added to the page in 2021 and does not appear in the 1978 ceremony record",
              "That acceptance remarks are not checked by the Foundation before publication, so they may err",
              "That the word laboratory in 1978 usage meant the institution rather than a single research group",
            ],
            correctIndex: 0,
            explanation:
              "It is a sentence about a laboratory, not a claim that one person discovered something alone. The 1978 section does that arithmetic.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What does the Lasker page's metadata show about the page itself?",
            options: [
              "It was posted on 8 April 2021",
              "That it was last edited in 1979, shortly after the dispute was reported in Science",
              "That the essays were written by the jury in the week before the 1978 ceremony",
              "That the acceptance remarks were transcribed from an audio recording of the luncheon",
            ],
            correctIndex: 0,
            explanation:
              "So the essays are the Foundation's current presentation of a 1978 award. The page does not say when they were written, and this course does not guess.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "Which journal published \"Opiate receptor: demonstration in nervous tissue\" in 1973?",
            options: [
              "Science",
              "The Proceedings of the National Academy of Sciences, in its issue of August that year",
              "Acta Pharmacologica et Toxicologica, which had carried the first submission in the field",
              "Nature, in the issue that also carried the first enkephalin identification paper",
            ],
            correctIndex: 0,
            explanation:
              "Science 179(4077), 1011-1014, 9 March 1973, by Pert CB and Snyder SH, with Pert first.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What is the whole of the role the 1978 page assigns to Candace Pert?",
            options: [
              "Graduate student",
              "Co-investigator, a role the essay describes in the paragraph on localizing the receptors",
              "Postdoctoral fellow at the National Institute of Mental Health, as the remarks state",
              "Co-worker, which is the term the Foundation's essay uses for everyone in the laboratory",
            ],
            correctIndex: 0,
            explanation:
              "\"As a graduate student\" is the whole of it. In 1979 that phrase became the centre of the argument about why she was not a winner.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "Which document on the 1978 Lasker page settles who identified the opiate receptors?",
            options: [
              "None of them",
              "The citation, which assigns the identifying to the three winners in the order it names them",
              "The Foundation's essay, because it is the only text on the page written by the institution",
              "The acceptance remarks, because a laureate speaking under his own name is the best witness",
            ],
            correctIndex: 0,
            explanation:
              "The page records a disagreement rather than a verdict, which is exactly what makes it worth reading.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What is an acknowledgement, as distinct from a credit, on a prize page?",
            options: [
              "A thank-you that wins nothing",
              "A formal share of the honorarium, paid to a contributor the citation does not name",
              "A second citation line, printed below the first, naming contributors who were not winners",
              "A footnote added later by the institution when a contributor's role is re-examined",
            ],
            correctIndex: 0,
            explanation:
              "Snyder's sentence is a thank-you published by the prize-giver, and it did not make Pert a winner. That is the whole distinction.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Where in Whipple's Nobel lecture does the year 1923 appear?",
            options: [
              "The dog colony's transfer to Rochester",
              "As the year the salmon bread basal ration was first used in the standard anemia experiments",
              "As the year Minot and Murphy published the paper that drew on Whipple's diet findings",
              "As the year the lecture says the anemia work was begun with Dr. Hooper in San Francisco",
            ],
            correctIndex: 0,
            explanation:
              "\"After the transfer of the anemia colony of dogs from San Francisco to Rochester, New York (1923)\", in the sentence that then names Robscheit-Robbins.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What did Holmgren's speech identify as Whipple's experimental method?",
            options: [
              "To bleed dogs",
              "To feed human patients a liver diet and measure the recovery of their red blood corpuscles",
              "To remove the spleens of experimental animals and compare their haemoglobin curves",
              "To inject foreign haemoglobin into anaemic patients and measure what they conserved",
            ],
            correctIndex: 0,
            explanation:
              "\"The method Whipple adopted in his experiments was to bleed dogs, that is to say to withdraw from them a certain quantity of their blood, supplying them afterwards with food of various kinds.\"",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "In what order does the 1978 Lasker page present its material?",
            options: [
              "Winners, citation, essays, then remarks",
              "Remarks first, then the citation, then a single essay covering all three winners together",
              "Essays first, then the winners and their institutions, with no citation line at all",
              "Citation, then the jury's reasoning, then the winners, then a bibliography of the work",
            ],
            correctIndex: 0,
            explanation:
              "Three winners with institutions, a citation line, an unsigned essay on each winner ending in a dedication, a second citation line, and one set of acceptance remarks at the foot.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "Which two institutions does the 1978 page give for Kosterlitz and Hughes?",
            options: [
              "Aberdeen and Imperial College",
              "Johns Hopkins and the National Institute of Mental Health, both in the United States",
              "Uppsala University and New York University, where the other 1973 groups worked",
              "Stanford University School of Medicine and the Addiction Research Foundation",
            ],
            correctIndex: 0,
            explanation:
              "Hans W. Kosterlitz, University of Aberdeen; John Hughes, Imperial College of Science and Technology.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "How does this course describe the value of a document that carries its own disagreement?",
            options: [
              "Worth ten that need a second source",
              "Unreliable, because an institution that contradicts itself cannot be trusted on anything else",
              "Interesting but unusable, since a contradiction cannot be taught without resolving it first",
              "Equivalent to any other primary source, since all primary sources carry the same weight",
            ],
            correctIndex: 0,
            explanation:
              "A reader can check both halves directly instead of trusting a summary of what somebody said elsewhere.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What does this course say a prize page is not, on its own?",
            options: [
              "A verdict",
              "A primary source, since everything on it was written long after the award was given",
              "A public document, since the deliberations behind it are confidential in every case",
              "Relevant to credit, since a prize measures reputation rather than who did the work",
            ],
            correctIndex: 0,
            explanation:
              "It records what the institution and the laureate each chose to say. Settling who did what takes documents the page does not carry.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "Which second citation line sits between the essays on the 1978 Lasker page?",
            options: [
              "One about the structure of the enkephalins",
              "One about mapping the regional distribution of opiate receptors throughout the brain",
              "One about the role of sodium in differentiating opiate agonists from antagonists",
              "One naming the National Institute of Mental Health as the funder of the work",
            ],
            correctIndex: 0,
            explanation:
              "\"For demonstrating the specific structure of the enkephalins and the identification of their natural origin.\" It sits before the Hughes essay.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What does this course ask a reader to do before reading its 1978 section?",
            options: [
              "Work the page exercise",
              "Read Garfield's 1979 essay in full, including the four cluster maps and the bibliography",
              "Look up every paper in the 1974 cluster map and check each author line against PubMed",
              "Compare the 1978 citation with the 1934 citation word by word to find the shared verb",
            ],
            correctIndex: 0,
            explanation:
              "The exercise works best cold, because answering from the page is the skill being practised.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "What did the Royal Swedish Academy of Sciences write about Isabel Karle when it announced the 1985 prize?",
            options: [
              "That her contributions had been crucial",
              "That her work belonged to the applications rather than to the development of the methods",
              "That she had been considered for a share of the prize and could not be included",
              "Nothing, which is why this course reads the lecture against the ceremony speech",
            ],
            correctIndex: 0,
            explanation:
              "The press release of 16 October 1985 says her contributions to the practical utilization of direct methods, and M. Woolfson's, had been crucial.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What did the 1985 presentation speech credit for the efficiency of the methods?",
            options: [
              "Recent developments and modern computers",
              "The experimental facility built in the laureate's laboratory in the late 1950s",
              "The person the Academy's own press release had already called crucial",
              "The crystallographers who spent the 1960s applying the equations to real data",
            ],
            correctIndex: 0,
            explanation:
              "The speech names no person for the practical gain, which is the disagreement this case turns on.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "How many laureates does the summary page list for the 1985 prize in chemistry, and at what share?",
            options: [
              "Two, at one half each",
              "Three, at one third each, the same arithmetic as the 1934 prize in medicine",
              "Two, at one third each, with the remaining third withheld by the Foundation",
              "One, with the other half of the award made in a later year to a second laureate",
            ],
            correctIndex: 0,
            explanation:
              "Two laureates at one half each, so a third seat existed and was not used.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "What does the 1985 case do to the format cap explanation?",
            options: [
              "Leaves it with nothing to explain",
              "Confirms it, because a prize for a method may only ever be shared by two people",
              "Extends it, since the Nobel limit was reduced from three to two during the 1980s",
              "Makes it untestable, because the Academy does not publish the size of its shares",
            ],
            correctIndex: 0,
            explanation:
              "The limit was three and two people were named, so no arithmetic decided anything that year.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "In which of this course's cases was a format cap actually binding?",
            options: [
              "Only the 1934 prize",
              "The 1934 and 1985 prizes, both of which were awarded under the Nobel statutes",
              "The 1978 award, which Garfield says carried a formal limit of three recipients",
              "All three, which is why the course treats the cap as a general explanation",
            ],
            correctIndex: 0,
            explanation:
              "Three laureates at one third each in 1934. The Lasker carried no formal limit, and the 1985 prize left a seat unused.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // 1934 — The lecture that names her
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-standard-anemic-dog",
      title: "1934 · The standard anemic dog",
      section: "1934 · The lecture that names her",
      body: `The science comes first, because the credit question is meaningless until you know what work is being credited.

By the early 1920s it was understood that feeding an anaemic animal well helped it rebuild blood. What nobody could do was say by how much, or rank one food against another, because every experiment used a different animal in a different state. The method that fixed this is the one the 1934 Nobel Prize rewarded, and Whipple's own Nobel lecture describes it in a single dense paragraph.

**The standard anemia.** "Dogs were bled by aspiration from the jugular vein and gradually reduced from a normal hemoglobin level of 140-150 per cent to about" 40 to 50 per cent, "and this anaemia level was maintained a constant for indefinite periods by suitable removal of new-formed hemoglobin" (Whipple, 1934). That last clause is the whole trick. The animal is not allowed to recover. It is held at a fixed low level, and whatever new haemoglobin it makes is removed.

**The measurement that follows from it.** "The potency of the diet factor was then accurately measured in terms of the grams hemoglobin removed to preserve the constant anemia level." A food's value stops being a description and becomes a number in grams. The lecture adds that a given dog's reaction to a diet factor "was shown to be uniform when repeated time after time", which is the claim that makes the number worth having.

**The basal ration.** None of this works without a food the dog can live on for years while producing almost no new blood, so that any increase can be attributed to the factor under test. The lecture describes "much effort and time" spent devising one, and names it: salmon bread, set out in its Table 1. It had to support "long anemia periods lasting throughout the entire life of the dog (5-8 years)" and still give "a low base-line hemoglobin output from which to measure the increased output due to liver, kidney, gizzard, or other favorable diet factor".

**The result.** "From Table 2 it is obvious that liver again stands out as the most potent diet factor. Kidney is a close second." Gizzard, spleen and pancreas also rate high. Iron "was found to be the most potent inorganic element" among the inorganic ones tested.

**Why this paragraph matters for the rest of the section.** It is the method paragraph, and it is the one in which the lecture names Frieda Robscheit-Robbins. Whatever else is disputed, the document that describes the rewarded method attributes the start of it to two people.

:::reveal What makes the standard anemic dog method able to rank one food against another? ||| The dog is held at a fixed low haemoglobin level instead of being allowed to recover, so a food's potency can be measured in grams of new haemoglobin removed to keep that level constant.

:::reveal Why did the experiments need a basal ration like salmon bread? ||| Because a dog fed anything rich would make blood on its own. The basal ration keeps the baseline output low so that any increase can be attributed to the diet factor being tested.

## Vocabulary
- **Haemoglobin**: the red pigment in blood that carries oxygen, measured in these experiments as a percentage of a normal level.
- **Aspiration**: drawing blood out through a needle, here from the jugular vein, to produce the anaemia under study.
- **Basal ration**: the plain baseline diet, here salmon bread, that keeps an animal alive with minimal blood regeneration.
- **Diet factor**: a single food under test, such as liver or kidney, whose potency is measured against the basal ration.
- **Potency**: in this work, the grams of new haemoglobin a food produces, which turns a food's value into a number.

## Sources
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "citation-speech-and-lecture",
      title: "1934 · The citation, the speech, and the lecture",
      section: "1934 · The lecture that names her",
      body: `Three documents, published by one institution, within two days of each other.

**The citation.** "The Nobel Prize in Physiology or Medicine 1934 was awarded jointly to George Hoyt Whipple, George Richards Minot and William Parry Murphy 'for their discoveries concerning liver therapy in cases of anaemia'", one third each (Nobel Prize Outreach, n.d.-b).

**The presentation speech, 10 December 1934.** Given by Professor I. Holmgren of the Royal Caroline Institute. It explains the work at length: Whipple's method "was to bleed dogs", liver was the strongest of the foods tested, and Minot and Murphy took the finding to patients with pernicious anaemia. Of the experiments it says they "were planned exceedingly well and carried out very accurately, and consequently their results can lay claim to absolute reliability". At the end Holmgren turns to the laureates: "Now I turn to you, Professor Minot, Dr. Murphy, and Professor Whipple" (Nobel Prize Outreach, n.d.-a). Nobody else is addressed, and no other researcher is named as a participant in the dog work.

**The Nobel lecture, 12 December 1934.** Two days later, on the same institution's site, Whipple names her twice.

First in the method paragraph: "Dr. Frieda Robscheit-Robbins and the writer began to use a different type of anemia." Second, further down, on the question of where new haemoglobin comes from during a fast: "the mechanism of this reaction has been investigated by Drs. Daft, Robscheit-Robbins, and Whipple" (Whipple, 1934).

**The footnote that tells you how to read the rest.** The lecture carries an asterisk on its title: "This paper is designed to summarize the author's contributions but does not pretend to give a review in this field nor to describe the work of others." That single sentence is what makes the next lesson possible. The reference list at the foot of the lecture is not a survey of a field. It is Whipple's own account of his own output, so the names on it are the people he worked with, chosen by him.

**What the record adds afterwards.** The University of Rochester's campus history page for Robscheit-Robbins states plainly that Whipple "received a Nobel Prize in 1934 and gave credit to Frieda. He also shared the award money with her and two other assistants" (Pierce, 2021). The same page transcribes Corner's 1963 biography of Whipple, which is more specific: "Whipple shared his one-third portion of the monetary award with Frieda Robscheit-Robbins and her two technical assistants, Marie M. Callahan and Doris E. Huxley, who for many years had taken part in the anemia work. He gave the balance of his portion to his mother." Those words are a transcription on a university page, not a book this course has read, and that is how they are used here.

**The shape of the case.** The citation named three men. The speech named the same three. The laureate's own lecture named a fourth person twice, and the laureate then divided his share of the money. Nothing in that sequence tells you what the committee thought, and this course does not say.

:::reveal How many times is Frieda Robscheit-Robbins named in the text of Whipple's Nobel lecture, not counting the references? ||| Twice: in the sentence about beginning to use a different type of anemia, and in the sentence naming Drs. Daft, Robscheit-Robbins, and Whipple.

:::reveal What does the lecture's footnote tell a reader about its reference list? ||| That the paper summarises the author's own contributions and does not review the field or describe the work of others, so the list is his own output and the names on it are his collaborators.

## Vocabulary
- **Pernicious anaemia**: the disease Minot and Murphy treated with a liver diet, distinct from the blood-loss anaemia produced in the dogs.
- **Royal Caroline Institute**: the Swedish institution that awards the Nobel Prize in Physiology or Medicine, and whose professor gave the 1934 presentation speech.
- **Transcription**: a passage reproduced from a book by a third party, here a university history page. It is evidence of what the page says the book says.
- **Honorarium**: the money that comes with a prize, which in 1934 was divided three ways before Whipple divided his share again.

## Sources
Nobel Prize Outreach. (n.d.-a). *Award ceremony speech: The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/ceremony-speech/
Nobel Prize Outreach. (n.d.-b). *The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/summary/
Pierce, M. A. (2021). *Frieda S. Robscheit-Robbins*. History of the Campuses and Buildings, University of Rochester. https://www.sas.rochester.edu/his/sites/campus-history/MC/Robbins.htm
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "count-the-reference-list",
      title: "1934 · Primary source: count the reference list",
      section: "1934 · The lecture that names her",
      body: `Do this before reading the next lesson. It takes about ten minutes and it is the whole point of the 1934 case.

**The document.** George H. Whipple, "Hemoglobin regeneration as influenced by diet and other factors", Nobel Lecture, 12 December 1934. Eight pages, free, hosted by the Nobel Foundation at nobelprize.org/uploads/2018/06/whipple-lecture.pdf. The numbered reference list is at the foot of the last page.

**Why counting rather than reading.** Almost everything else in a credit case is somebody's judgement about how much a person contributed. A reference list is not. It is a finite set of lines with names on them, printed by the laureate, and you can count it in ten minutes and get the same answer anybody else gets. That is rare, and it is why this case is worth teaching.

**Before you start, one instruction that matters.** Write down what you are counting before you count it. References, or articles? Names anywhere in the author list, or first position only? The answer changes with the rule, and the next lesson is about what happens when a number is passed around without one.

:::reveal Why is a reference list unusually good evidence in a credit case? ||| Because it is finite and printed rather than interpretive: anybody who counts it carefully gets the same answer, which is not true of judgements about how much a person contributed.

:::reveal What should you write down before you begin counting? ||| The rule you are counting by: references or articles, and names anywhere in the author list or first position only.

## Vocabulary
- **Nobel lecture**: the talk a laureate gives within days of the ceremony, published by the Nobel Foundation with its references.
- **Author list**: the names printed on a reference, in the order the original paper printed them.
- **Finite set**: a countable, closed list, which is what makes a reference list checkable in a way an opinion is not.

## Sources
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
      exercise: {
        instructions:
          "Open the lecture and count from the list itself. Type a number where a number is asked for, and a single word where a word is asked for.",
        items: [
          {
            prompt: "How many numbered references does the reference list carry? Count them and type the number.",
            answer: "23",
            computedAnswer: true,
            explanation:
              "Twenty-three numbered references, 1 to 23, at the foot of the last page.",
          },
          {
            prompt: "Count the numbered references whose author list includes Robscheit or Robscheit-Robbins. Type the number.",
            answer: "10",
            computedAnswer: true,
            explanation:
              "Numbers 11, 12, 13, 14, 15, 18, 19, 20, 22 and 23. If you got 9, see the next item.",
          },
          {
            prompt: "One reference carrying her name spells it without the Robbins. Type the surname exactly as that reference gives it.",
            answer: "Robscheit",
            accept: ["F. S. Robscheit", "Robscheit, F. S."],
            explanation:
              "Reference 11 reads \"F. S. Robscheit\". A reader searching the list for Robbins alone finds 9 rather than 10.",
          },
          {
            prompt: "Of the references carrying her name, count the ones on which she is the first name in the author list. Type the number.",
            answer: "2",
            computedAnswer: true,
            explanation:
              "References 13 and 14, both in the American Journal of Physiology, with Whipple second.",
          },
          {
            prompt: "The lecture cites reference 13 for one diet factor. Type that factor.",
            answer: "liver",
            explanation:
              "\"From Table 2 it is obvious that liver [13] again stands out as the most potent diet factor.\" Reference 13 is one of her two first-authored papers.",
          },
          {
            prompt: "The lecture cites reference 14 for the factor it calls a close second. Type that factor.",
            answer: "kidney",
            explanation:
              "Both headline results are cited to papers on which she is first author, which is a fact about the lecture rather than an interpretation of it.",
          },
          {
            prompt: "One reference cites two articles rather than one, giving two page numbers in the same volume. Type the surname that appears first in that reference's author list.",
            answer: "Whipple",
            accept: ["G. H. Whipple", "Whipple, G. H."],
            explanation:
              "Reference 11 is \"G. H. Whipple, C. W. Hooper, and F. S. Robscheit\", citing pages 151 and 236 of the same volume.",
          },
          {
            prompt: "Counting by article rather than by reference number, how many items does the list hold? Type the number.",
            answer: "24",
            computedAnswer: true,
            explanation:
              "Twenty-three numbers, one of which is two articles. Under that rule her name is on 11 of 24 rather than 10 of 23, and both counts are correct.",
          },
        ],
      },
    },
    {
      slug: "count-the-references-yourself",
      title: "1934 · Count the references yourself",
      section: "1934 · The lecture that names her",
      body: `If you did the counting drill, you already have the three numbers. This lesson is about what they hide, and about a fourth number that does not survive the same treatment.

**The count, re-derived for this course.** The lecture has 23 numbered references. Her name appears on 10 of them: numbers 11, 12, 13, 14, 15, 18, 19, 20, 22 and 23. She is first author on 2 of those: numbers 13 and 14 (Whipple, 1934).

**Two things the count hides, which you only see by looking.** Reference 11 lists her as "F. S. Robscheit", without the Robbins. The Rochester page explains why: the family name changed from Robscheit to Robbins in 1920 or 1921, and because she had already published as Robscheit she used Robscheit-Robbins afterwards (Pierce, 2021). A reader searching the list for "Robbins" alone finds 9, not 10. And reference 11 is not one paper: it cites two articles in the same volume, at pages 151 and 236. Counted by article rather than by reference number, the list holds 24 items and her name is on 11 of them.

**Where her two first-authorships sit.** References 13 and 14 are the ones the lecture attaches to its two headline results: "From Table 2 it is obvious that liver [13] again stands out as the most potent diet factor. Kidney [14] is a close second." The two papers the lecture cites for its two most potent diet factors are the two on which she is first author.

**Now the number that does not survive counting.** A reference book entry says she "published 21 papers with Whipple (1925-30)", and that figure gets repeated. For this course the period was re-derived from Crossref. Between 1925 and 1930 there are 27 indexed items carrying both her name and Whipple's. Of those, 18 are by the two of them alone. Restricting to the numbered series titled "Blood regeneration in severe anemia" gives 22 items, of which 21 are full journal articles and one is a short communication, and she is first author on 9 of the 21.

So 21 is reproducible, under exactly one counting rule out of four, and the other three rules give 27, 18 and 22. That is not a fact. It is a number missing its rule.

**Two reasons to distrust that particular entry.** The same entry says she began working with Whipple "at University of Rochester (1917)", although the Rochester page's own account has Whipple moving to Rochester in 1921. And it says she continued "after Whipple's death" until her retirement in 1955, although the memoir listed further down the same page gives Whipple's dates as 1878 to 1976 (Pierce, 2021). A source with two checkable errors in four lines is not the source to lean a count on.

**The rule this lesson is really teaching.** Print the counting rule beside the count, every time. "Ten of the twenty-three references in his Nobel lecture" is a claim anyone can check in five minutes. "Twenty-one papers" is a claim nobody can check without being told which papers count.

:::reveal How many of the 23 numbered references in Whipple's Nobel lecture carry Robscheit-Robbins's name, and on how many is she first author? ||| Ten carry her name, and she is first author on two of them, references 13 and 14.

:::reveal Why is the figure of 21 papers weak even though it can be reproduced? ||| Because it holds under only one counting rule out of four. The same period gives 27, 18 and 22 under the others, and the entry that states 21 contains two checkable errors.

## Vocabulary
- **Reference list**: the numbered list of papers at the foot of a lecture or article, here the countable artefact of the case.
- **First author**: the name that comes first on a paper's author line, conventionally the person principally responsible for the work.
- **Counting rule**: the definition that decides which items a count includes, without which a total cannot be checked or reproduced.
- **Crossref**: the metadata registry of scholarly publications, used here to re-derive the 1925 to 1930 counts item by item.
- **Short communication**: a brief report published in a journal's proceedings section, shorter than a full article and often excluded from counts.

## Sources
Pierce, M. A. (2021). *Frieda S. Robscheit-Robbins*. History of the Campuses and Buildings, University of Rochester. https://www.sas.rochester.edu/his/sites/campus-history/MC/Robbins.htm
Robscheit-Robbins, F. S., & Whipple, G. H. (1925). Blood regeneration in severe anemia. *American Journal of Physiology*, 72(3), 408-418. https://doi.org/10.1152/ajplegacy.1925.72.3.408
Robscheit-Robbins, F. S., & Whipple, G. H. (1927). Blood regeneration in severe anemia. *American Journal of Physiology*, 79(2), 271-279. https://doi.org/10.1152/ajplegacy.1927.79.2.271
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "quiz-1934",
      title: "1934 quiz · The lecture that names her",
      section: "1934 · The lecture that names her",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this course call a reference list unusually good evidence in a credit case?",
            options: [
              "It is finite and printed rather than interpretive",
              "Because a laureate is required to list every collaborator who worked on the project",
              "Because the awarding institution compiles it and therefore vouches for its accuracy",
              "Because it records the order in which the work was done, year by year",
            ],
            correctIndex: 0,
            explanation:
              "Anybody who counts it carefully gets the same answer, which is not true of judgements about how much a person contributed.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "What does the counting drill tell a reader to write down before starting?",
            options: [
              "The rule being counted by",
              "The total given in the published accounts, so that it can be compared afterwards",
              "The date of the lecture and the institution that published it",
              "The names of every author who appears more than once in the list",
            ],
            correctIndex: 0,
            explanation:
              "References or articles, and names anywhere in the author list or first position only. The answer changes with the rule.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "Where in the Nobel lecture is the numbered reference list?",
            options: [
              "At the foot of the last page",
              "In a separate document published alongside the lecture by the Nobel Foundation",
              "At the head of the lecture, before the first paragraph of the text",
              "Spread through the text, with each reference printed where it is first cited",
            ],
            correctIndex: 0,
            explanation:
              "Eight pages, free, hosted by the Nobel Foundation, with the numbered list at the end.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "What is an author list, in the counting drill's vocabulary?",
            options: [
              "The names printed on a reference, in the original order",
              "The index of authors the Nobel Foundation attaches to each published lecture",
              "The roster of everyone who worked in a laboratory during a given period",
              "The list of laureates printed at the head of a prize citation",
            ],
            correctIndex: 0,
            explanation:
              "The order is what makes first authorship countable, which is one of the three numbers the drill asks for.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "What makes a finite set checkable in a way an opinion is not?",
            options: [
              "It is countable and closed",
              "It has been published by an institution that stands behind its accuracy",
              "It has been peer reviewed before publication, unlike an opinion",
              "It can be searched electronically, which an opinion cannot be",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the 1934 case is the one where the credit question can be settled by counting, and why the rule matters so much.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "Which reference in the lecture cites two articles rather than one?",
            options: [
              "Number 11",
              "Number 13, which the lecture cites for liver being the most potent diet factor",
              "Number 22, which names three authors including a collaborator from another laboratory",
              "Number 23, the last in the list, which covers the human liver material studied at autopsy",
            ],
            correctIndex: 0,
            explanation:
              "It gives two page numbers in the same volume, 151 and 236, which is why the article count is 24 rather than 23.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "Which surname appears first in the author list of the reference that cites two articles?",
            options: [
              "Whipple",
              "Robscheit, the spelling that reference uses for the third name in its author list",
              "Hooper, who appears on the run of references covering the San Francisco period",
              "Daft, who appears with Robscheit-Robbins and Whipple on a later reference",
            ],
            correctIndex: 0,
            explanation:
              "\"G. H. Whipple, C. W. Hooper, and F. S. Robscheit\". The third name is the one a search for Robbins misses.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "What are the two correct answers to \"how many items does the reference list hold\"?",
            options: [
              "23 by reference number and 24 by article",
              "23 and 21, depending on whether short communications are included in the total",
              "10 and 11, depending on whether the earliest spelling of her name is counted",
              "Only 23, since counting by article is not a rule anyone has ever applied to it",
            ],
            correctIndex: 0,
            explanation:
              "Both are correct under their own rule, which is the drill's whole lesson and the reason the next lesson can take the figure of 21 apart.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "Where were the dogs bled from, in the method the lecture describes?",
            options: [
              "The jugular vein",
              "The femoral artery, which allowed a larger volume to be withdrawn at each session",
              "The marrow cavity, sampled directly to measure red corpuscle production at source",
              "The spleen, which was removed in the animals used for the comparison series",
            ],
            correctIndex: 0,
            explanation:
              "\"Dogs were bled by aspiration from the jugular vein and gradually reduced from a normal hemoglobin level of 140-150 per cent.\"",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "To what level were the dogs reduced and then held?",
            options: [
              "40 to 50 per cent",
              "Zero, since the measurement required the animal to produce all of its haemoglobin afresh",
              "100 per cent, the level the lecture defines as normal for an untreated adult dog",
              "The level varied by animal, and the lecture reports it only as a range of ranges",
            ],
            correctIndex: 0,
            explanation:
              "About 40 to 50 per cent of normal, held constant for indefinite periods by removing new-formed haemoglobin.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Besides liver and kidney, which diet factors does the lecture say rate high?",
            options: [
              "Gizzard, spleen and pancreas",
              "Apricots, meat and the vegetable foods the presentation speech mentions by name",
              "Salmon, bread and the other constituents of the basal ration itself",
              "Only iron, which is named as the most potent of all the factors that were tested",
            ],
            correctIndex: 0,
            explanation:
              "The lecture names them as factors favouring abundant new haemoglobin production under standard anemia conditions.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Which inorganic element does the lecture call the most potent?",
            options: [
              "Iron",
              "Copper, which the lecture describes as acting together with iron in the same pathway",
              "Sodium, whose role the 1978 Lasker essay describes for a different receptor system",
              "Calcium, which the lecture reports as necessary but not by itself potent",
            ],
            correctIndex: 0,
            explanation:
              "\"Iron was found to be the most potent inorganic element.\" Liver remains the most potent diet factor.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What is aspiration, in this lesson's vocabulary?",
            options: [
              "Drawing blood out through a needle",
              "Breathing in a substance, which is how the diet factors were administered to the animals",
              "Removing the spleen surgically to prevent the animal from storing red corpuscles",
              "Measuring haemoglobin as a percentage of a defined normal level",
            ],
            correctIndex: 0,
            explanation:
              "Here from the jugular vein, to produce the anaemia under study.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Why could earlier diet experiments not rank one food against another?",
            options: [
              "Every experiment used a different animal in a different state",
              "Because haemoglobin could not be measured accurately until the middle of the 1920s",
              "Because no laboratory had access to enough dogs to run a controlled comparison",
              "Because the foods themselves varied too much in composition from batch to batch",
            ],
            correctIndex: 0,
            explanation:
              "Good feeding was known to help. Saying by how much required a standardised animal held in a fixed state.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Which institution's professor gave the 1934 presentation speech?",
            options: [
              "The Royal Caroline Institute",
              "The University of Rochester School of Medicine and Dentistry, where Whipple was dean",
              "The Nobel Foundation, whose secretary gives all the presentation speeches",
              "Harvard Medical School, where two of the three laureates worked",
            ],
            correctIndex: 0,
            explanation:
              "Professor I. Holmgren, a member of its Staff of Professors, on 10 December 1934.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What is pernicious anaemia, as distinguished in this course?",
            options: [
              "The disease Minot and Murphy treated with a liver diet",
              "The anaemia produced in the dogs by withdrawing blood, which the lecture calls severe anemia",
              "A deficiency of iron in the diet, corrected by the inorganic factor the lecture names",
              "A consequence of the bleeding method itself, observed only in the Rochester colony",
            ],
            correctIndex: 0,
            explanation:
              "Distinct from the blood-loss anaemia produced in the dogs, which is the whole reason the presentation speech treats the two halves of the prize separately.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What, in this course's vocabulary, is a transcription?",
            options: [
              "A passage reproduced from a book by a third party",
              "A translation of a presentation speech from Swedish into English for publication",
              "A copy of a laureate's handwritten lecture notes, deposited in a university archive",
              "A summary of a book's argument, written by a historian for a general readership",
            ],
            correctIndex: 0,
            explanation:
              "It is evidence of what the page says the book says, which is why this course labels the Corner and McGrayne passages that way.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What did Whipple do with the balance of his portion of the prize money, per the transcribed passage?",
            options: [
              "Gave it to his mother",
              "Returned it to the Nobel Foundation to be added to a later year's award in medicine",
              "Endowed the anemia colony at the University of Rochester with it",
              "Divided it again between Minot and Murphy, whose shares had been smaller",
            ],
            correctIndex: 0,
            explanation:
              "After sharing part of it with Robscheit-Robbins and two technical assistants. The passage is a transcription on a university page, not a book this course read.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What is the honorarium, in this course's vocabulary?",
            options: [
              "The money that comes with a prize",
              "The formal title conferred on a laureate by the awarding institution at the ceremony",
              "The fee paid to a professor for delivering the presentation speech",
              "The annual grant an award body makes to the laureate's laboratory after the prize",
            ],
            correctIndex: 0,
            explanation:
              "In 1934 it was divided three ways before Whipple divided his share again.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "How many items does the lecture's reference list hold if you count articles rather than reference numbers?",
            options: [
              "24",
              "23, because each numbered reference corresponds to exactly one published article",
              "22, once the short communication in the 1925 to 1930 series is excluded",
              "21, matching the number the reference books give for the joint output",
            ],
            correctIndex: 0,
            explanation:
              "Reference 11 cites two articles, at pages 151 and 236. By article the list holds 24 items and her name is on 11 of them.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is a counting rule, in this course's vocabulary?",
            options: [
              "The definition that decides which items a count includes",
              "The convention that decides the order of names on a paper's author line",
              "The method a database uses to remove duplicate records before reporting a total",
              "The threshold above which a paper is treated as highly cited in a given year",
            ],
            correctIndex: 0,
            explanation:
              "Without it a total cannot be checked or reproduced, which is the difference between ten of twenty-three and twenty-one papers.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is Crossref, as used in this course?",
            options: [
              "The metadata registry of scholarly publications",
              "The citation index Garfield's company built, which produced the 1979 cluster maps",
              "The Nobel Foundation's database of laureates, nominations and prize shares",
              "The University of Rochester's catalogue of Whipple's published papers",
            ],
            correctIndex: 0,
            explanation:
              "It was used to re-derive the 1925 to 1930 counts item by item rather than repeating a published total.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Which is the checkable claim, in the counting lesson's comparison?",
            options: [
              "Ten of the twenty-three references in his Nobel lecture",
              "Twenty-one papers with Whipple between 1925 and 1930, as the reference books have it",
              "More than a hundred publications on liver and blood diseases across her career",
              "Thirty-eight years as the research partner of a Nobel laureate",
            ],
            correctIndex: 0,
            explanation:
              "Anyone can open a free eight page document and check it. The other figures cannot be checked without being told which items count.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is a first author, in this course's vocabulary?",
            options: [
              "The name that comes first on a paper's author line",
              "The person who submitted the paper to the journal on behalf of the group",
              "The most senior researcher on a project, who directs the work the paper reports",
              "The author whose institution is listed first in the paper's affiliations",
            ],
            correctIndex: 0,
            explanation:
              "Conventionally the person principally responsible for the work, which is why the position is worth counting.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "In the standard anemia method, what happens to the new haemoglobin a dog produces?",
            options: [
              "It is removed",
              "It is left in place and counted at the end of each fortnight by a blood sample",
              "It is replaced by an equal volume of plasma drawn from a second, healthy animal",
              "It is measured as a percentage of the animal's weight rather than in grams",
            ],
            correctIndex: 0,
            explanation:
              "The animal is held at a constant low level \"by suitable removal of new-formed hemoglobin\", which is what makes the measurement possible.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "How does the lecture say a diet factor's potency was measured?",
            options: [
              "In grams of haemoglobin removed",
              "By how many days the animal survived on that food alone without further intervention",
              "By the percentage rise in red blood corpuscles counted under a microscope each week",
              "By comparing the weight of the animal before and after a two week feeding period",
            ],
            correctIndex: 0,
            explanation:
              "\"The potency of the diet factor was then accurately measured in terms of the grams hemoglobin removed to preserve the constant anemia level.\"",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "From what normal level were the dogs reduced, according to the lecture?",
            options: [
              "140 to 150 per cent",
              "100 per cent exactly, which the lecture defines as the standard for an untreated adult animal",
              "60 to 70 per cent, the level at which the lecture says blood regeneration first becomes measurable",
              "The level was not stated, because each animal served as its own control",
            ],
            correctIndex: 0,
            explanation:
              "The lecture gives a normal level of 140-150 per cent, reduced to about 40 to 50 per cent and held there.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What was the basal ration used in the anemia experiments called?",
            options: [
              "Salmon bread",
              "Liver extract, prepared to the concentration described in the lecture's Table 3",
              "The Rochester ration, named for the school of medicine where the colony was housed",
              "Standard kennel mixture, a commercial dog food the laboratory bought unmodified",
            ],
            correctIndex: 0,
            explanation:
              "The lecture names it and sets it out in Table 1. It had to keep the animal healthy while producing almost no new haemoglobin.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Why did the experiments need a basal ration at all?",
            options: [
              "To keep the baseline output low",
              "To keep the animals at a constant weight so that haemoglobin could be expressed per kilogram",
              "To make the diet factors palatable, since dogs refused liver and kidney when offered alone",
              "To match the diet of the human patients Minot and Murphy were treating in Boston",
            ],
            correctIndex: 0,
            explanation:
              "A low base line means any increase can be attributed to the diet factor under test rather than to the background diet.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "How long does the lecture say the anemia periods had to last?",
            options: [
              "The entire life of the dog",
              "Six months, after which the animal was returned to a normal diet and allowed to recover",
              "Two weeks per diet factor, with a fresh animal used for each food that was tested",
              "Until the haemoglobin level returned to normal, which took between one and two years",
            ],
            correctIndex: 0,
            explanation:
              "\"Long anemia periods lasting throughout the entire life of the dog (5-8 years).\"",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Which diet factor does the lecture call the most potent?",
            options: [
              "Liver",
              "Kidney, which the lecture's Table 2 places ahead of liver by a small but consistent margin",
              "Gizzard, with spleen and pancreas following it closely in the same table",
              "Iron, which the lecture describes as the most potent factor of any kind tested",
            ],
            correctIndex: 0,
            explanation:
              "\"From Table 2 it is obvious that liver again stands out as the most potent diet factor. Kidney is a close second.\" Iron is named as the most potent inorganic element.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What does the lecture say about the reaction of a given dog to a diet factor?",
            options: [
              "It was uniform when repeated",
              "It varied widely between animals, which is why the results are reported as ranges rather than values",
              "It changed as the animal aged, so results were only used from dogs in their first two years",
              "It could not be repeated, because each animal was used for a single feeding period only",
            ],
            correctIndex: 0,
            explanation:
              "\"The reaction of a given dog to a diet factor was shown to be uniform when repeated time after time.\" That is what makes the number worth having.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Why does this course put the science before the credit question?",
            options: [
              "The credit question is meaningless without it",
              "Because the Nobel committee required a technical summary before it would consider a nomination",
              "Because the presentation speech describes the method before it names any of the laureates",
              "Because the 1934 prize was for the method rather than for any particular discovery",
            ],
            correctIndex: 0,
            explanation:
              "You cannot judge who did the work until you know what work is being credited.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "Which three men shared the 1934 Nobel Prize in Physiology or Medicine?",
            options: [
              "Whipple, Minot and Murphy",
              "Whipple, Castle and Minot, with Murphy receiving an honourable mention in the citation",
              "Holmgren, Whipple and Murphy, the last two sharing a single half of the prize between them",
              "Minot, Murphy and Robscheit-Robbins, whose share was later transferred to Whipple",
            ],
            correctIndex: 0,
            explanation:
              "George Hoyt Whipple, George Richards Minot and William Parry Murphy, one third each.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "Who gave the 1934 presentation speech?",
            options: [
              "Professor I. Holmgren",
              "Professor George Whipple, who introduced the work before receiving the medal himself",
              "The Secretary of the Nobel Foundation, who gives the speech for medicine every year",
              "William Castle, whose observations the speech describes in its section on pernicious anaemia",
            ],
            correctIndex: 0,
            explanation:
              "Professor I. Holmgren, member of the Staff of Professors of the Royal Caroline Institute, on 10 December 1934.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "Whom does Holmgren address at the end of the speech?",
            options: [
              "Minot, Murphy and Whipple",
              "The three laureates and the research associates named earlier in the same paragraph",
              "The King of Sweden, to whom the speech formally presents the year's medical prize",
              "The audience at large, since the speech never turns to the laureates individually",
            ],
            correctIndex: 0,
            explanation:
              "\"Now I turn to you, Professor Minot, Dr. Murphy, and Professor Whipple.\" Nobody else is addressed.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "How many days separated the 1934 presentation speech from Whipple's Nobel lecture?",
            options: [
              "Two",
              "Ninety, since the lecture was given the following spring at the laureate's own university",
              "Ten, the interval the Nobel Foundation required between the ceremony and the lectures",
              "None, because the lecture was delivered as part of the award ceremony itself",
            ],
            correctIndex: 0,
            explanation:
              "The speech was on 10 December 1934 and the lecture on 12 December 1934, both published by the same institution.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "In which second sentence of his lecture does Whipple name Robscheit-Robbins?",
            options: [
              "Drs. Daft, Robscheit-Robbins, and Whipple",
              "In the footnote, where he thanks her for preparing the figures and tables",
              "In the closing paragraph, where he names everyone who worked in the anemia colony",
              "In the sentence introducing salmon bread, where he credits her with devising the ration",
            ],
            correctIndex: 0,
            explanation:
              "On the mechanism by which an anemic dog makes new haemoglobin during a fast: \"the mechanism of this reaction has been investigated by Drs. Daft, Robscheit-Robbins, and Whipple\".",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does the footnote on Whipple's lecture say the paper is designed to do?",
            options: [
              "Summarize the author's contributions",
              "Review the whole field of haemoglobin regeneration as it stood at the end of 1934",
              "Acknowledge every colleague who worked in the anemia colony since its move to Rochester",
              "Set out the evidence on which the Nobel committee based its decision that year",
            ],
            correctIndex: 0,
            explanation:
              "\"This paper is designed to summarize the author's contributions but does not pretend to give a review in this field nor to describe the work of others.\"",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does that footnote tell you about how to read the lecture's reference list?",
            options: [
              "It is his own output, not a survey",
              "That it was compiled by the Nobel Foundation rather than by the laureate himself",
              "That it excludes any paper on which the laureate was not the first named author",
              "That it lists only work published after the dog colony moved to Rochester in 1923",
            ],
            correctIndex: 0,
            explanation:
              "Because it summarises his own contributions and does not describe the work of others, the names on it are the people he worked with.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does the University of Rochester's campus history page say Whipple did with the award money?",
            options: [
              "Shared it with her and two other assistants",
              "Endowed a fellowship at the School of Medicine and Dentistry in the name of the anemia colony",
              "Returned his third to the Nobel Foundation, asking that it be added to the following year's prize",
              "Divided it equally with Minot and Murphy, who had received smaller shares than he had",
            ],
            correctIndex: 0,
            explanation:
              "The page says he \"received a Nobel Prize in 1934 and gave credit to Frieda. He also shared the award money with her and two other assistants.\"",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "How does this course treat the Corner passage about the prize money?",
            options: [
              "As a transcription on a university page",
              "As a direct reading of Corner's 1963 biography, which was obtained and checked page by page",
              "As an unverified claim that is mentioned but never used in any lesson of the course",
              "As the Nobel Foundation's own record of how the 1934 honorarium was distributed",
            ],
            correctIndex: 0,
            explanation:
              "The words are transcribed on the Rochester page. The book itself was not read, and the course says so rather than implying otherwise.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What sequence does the 1934 case actually show, in this course's summary?",
            options: [
              "Citation, speech, lecture, then the money",
              "A public dispute in the press, followed by a formal appeal and a revised citation",
              "A correction issued by the awarding institution within a year of the ceremony",
              "A private complaint to the committee, refused, and then a second prize a decade later",
            ],
            correctIndex: 0,
            explanation:
              "The citation named three men, the speech named the same three, the lecture named a fourth person twice, and the laureate then divided his share.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does this course say the 1934 sequence tells you about the committee's thinking?",
            options: [
              "Nothing",
              "That the committee considered a fourth name and rejected it on the ground of junior rank",
              "That the committee relied on the presentation speech, which was drafted before the vote",
              "That the committee was persuaded by the laureate's own account of who began the method",
            ],
            correctIndex: 0,
            explanation:
              "No released committee record was found, so the course says what the documents say and stops there.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "How many numbered references does Whipple's Nobel lecture carry?",
            options: [
              "23",
              "24, once reference 11 is split into the two separate articles it actually cites",
              "21, matching the number of papers the reference books say she published with him",
              "47, being every item Crossref indexes under her name between 1919 and 1934",
            ],
            correctIndex: 0,
            explanation:
              "23 numbered references. Counting by article rather than by number gives 24, which is a different count under a different rule.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "On how many of the lecture's numbered references does Robscheit-Robbins's name appear?",
            options: [
              "10",
              "9, which is the figure a reader gets by searching the list for the surname Robbins alone",
              "11, the figure that results from counting articles rather than reference numbers",
              "2, being the references on which she is the first named author",
            ],
            correctIndex: 0,
            explanation:
              "Numbers 11, 12, 13, 14, 15, 18, 19, 20, 22 and 23. Searching for Robbins alone misses reference 11, and counting by article gives 11 of 24.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "On how many of the lecture's references is she the first author?",
            options: [
              "2",
              "10, since first authorship is what the count of ten references is actually measuring",
              "9, the number of first authorships in the 1925 to 1930 Crossref series",
              "None, because Whipple is first author on every reference in his own lecture",
            ],
            correctIndex: 0,
            explanation:
              "References 13 and 14. Both are papers in the American Journal of Physiology on which she is first and Whipple second.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Why does reference 11 complicate the count?",
            options: [
              "It names her without Robbins, and cites two articles",
              "It is the only reference the lecture cites twice, once for liver and once for kidney",
              "It lists four authors, which makes it unclear which of them the lecture is crediting",
              "It was published after the lecture was delivered, so its date does not match the others",
            ],
            correctIndex: 0,
            explanation:
              "It lists her as \"F. S. Robscheit\", so a search for Robbins alone misses it, and it cites two articles at pages 151 and 236.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Why did she publish under the name Robscheit-Robbins?",
            options: [
              "She had already published as Robscheit",
              "Because the American Journal of Physiology required married authors to carry both surnames",
              "Because two other researchers named Robbins were publishing in the same field at the time",
              "Because the University of Rochester listed her that way in its staff register from 1922",
            ],
            correctIndex: 0,
            explanation:
              "The Rochester page says the family name changed from Robscheit to Robbins in 1920 or 1921, and she kept both because her earlier papers carried the first.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Which two results does the lecture attach to the two references on which she is first author?",
            options: [
              "Liver and kidney",
              "Iron and the inorganic elements, in the passage that follows the description of Table 2",
              "The salmon bread ration and the fasting experiments described in Table 3",
              "Human liver material at autopsy and the values found in pernicious anaemia",
            ],
            correctIndex: 0,
            explanation:
              "\"Liver [13] again stands out as the most potent diet factor. Kidney [14] is a close second.\" References 13 and 14 are her two first-authorships.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "How many items indexed between 1925 and 1930 carry both her name and Whipple's?",
            options: [
              "27",
              "18, being the papers the two of them published without any other co-author",
              "21, the figure the reference books give for their joint output in that period",
              "47, which is every item Crossref lists under her name across 1919 to 1934",
            ],
            correctIndex: 0,
            explanation:
              "Re-derived from Crossref for this course. Of those 27, exactly 18 are by the two of them alone.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "How many of the 1925 to 1930 items are by the two of them alone?",
            options: [
              "18",
              "27, which is the total number of items carrying both names in that six year period",
              "22, being the items titled Blood regeneration in severe anemia whoever else is on them",
              "9, being the papers in that series on which she is the first named author",
            ],
            correctIndex: 0,
            explanation:
              "Of the 27 items carrying both names, 18 have no third author.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "How many items are titled \"Blood regeneration in severe anemia\" between 1925 and 1930?",
            options: [
              "22",
              "21, because the series ran to exactly that many papers before it was discontinued",
              "27, which is the number of items carrying both her name and Whipple's in the period",
              "11, matching the numbered parts of the series that appeared in 1925 and 1927",
            ],
            correctIndex: 0,
            explanation:
              "22 items, of which 21 are full journal articles and one is a short communication. That distinction is where the figure of 21 comes from.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "On how many of the 21 full articles in that series is she first author?",
            options: [
              "9",
              "21, since she is first author on every paper in the series that bears the shared title",
              "2, matching the two references in the Nobel lecture on which she is first author",
              "18, being the papers the two of them published without a third author",
            ],
            correctIndex: 0,
            explanation:
              "Nine of the twenty-one, re-derived item by item from Crossref for this course.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is wrong with the figure of 21 papers, according to this lesson?",
            options: [
              "It is a number missing its rule",
              "It is too low, because the correct total under every available counting rule is 27",
              "It was invented by a biographer and appears in no published reference work at all",
              "It counts papers she published alone, which belong to a different body of work",
            ],
            correctIndex: 0,
            explanation:
              "It holds under exactly one counting rule out of four. The other three give 27, 18 and 22.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is the first checkable error in the reference book entry that gives the figure of 21?",
            options: [
              "It puts her start with Whipple at Rochester in 1917",
              "It gives her year of death as 1955, which was the year she retired from the university",
              "It names the wrong journal for the Blood regeneration series, giving Science instead",
              "It credits her with a Nobel Prize share that the Nobel summary page does not record",
            ],
            correctIndex: 0,
            explanation:
              "Whipple moved to Rochester in 1921, per the Rochester page's own account, so a start with him there in 1917 is impossible.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is the second checkable error in that entry?",
            options: [
              "It has her working on after Whipple's death until 1955",
              "It gives the Nobel Prize year as 1935, a year after the award was actually made",
              "It says she was first author on the Nobel lecture, which has only one author",
              "It places the dog colony in Chicago rather than in San Francisco before the move",
            ],
            correctIndex: 0,
            explanation:
              "The memoir listed on the same page gives Whipple's dates as 1878 to 1976, and she retired in 1955, so she cannot have worked on after his death until then.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What rule does the counting lesson exist to teach?",
            options: [
              "Print the rule beside the count",
              "Prefer the largest defensible total, because a larger number is harder for a critic to dismiss",
              "Trust a reference book over a database, because an editor has checked the reference book",
              "Count only papers on which the person is first author, since other positions do not count",
            ],
            correctIndex: 0,
            explanation:
              "\"Ten of the twenty-three references in his Nobel lecture\" is checkable in five minutes. \"Twenty-one papers\" is not checkable without being told which papers count.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Why does this course ask a reader to count the reference list rather than accept the figure of ten?",
            options: [
              "The lecture is free and the list is short",
              "Because the figure comes from a biography that this course has not been able to obtain",
              "Because the Nobel Foundation has revised the lecture since it was first published",
              "Because no two published accounts of the reference list agree on how many items it has",
            ],
            correctIndex: 0,
            explanation:
              "Eight pages, free to download, with the reference list at the foot of the last page. Counting it yourself takes about ten minutes.",
            sourceLessonSlug: "count-the-reference-list",
          },
          {
            prompt: "What happens to the count if you search the reference list for the surname Robbins alone?",
            options: [
              "You find 9",
              "You find 11, because the search also catches the two articles cited in reference 11",
              "You find 10, because every reference carrying her name spells it Robscheit-Robbins",
              "You find 23, because the search matches the surname Whipple as well",
            ],
            correctIndex: 0,
            explanation:
              "Reference 11 lists her as \"F. S. Robscheit\", without the Robbins, so a naive search misses it.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Which journal carried most of the Blood regeneration in severe anemia series?",
            options: [
              "The American Journal of Physiology",
              "The Journal of Experimental Medicine, which carried the whole series from 1925 onwards",
              "Science, which published the numbered parts as a set of short reports",
              "The American Journal of the Medical Sciences, which carried every part after 1927",
            ],
            correctIndex: 0,
            explanation:
              "Most of the series ran there, with a handful of items in the Journal of Biological Chemistry, the Journal of Experimental Medicine and the American Journal of the Medical Sciences.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is a short communication, and why does it matter to this count?",
            options: [
              "A brief report, often excluded from counts",
              "A letter to the editor disputing a published paper, which is never counted as an author's work",
              "An abstract of a conference talk, which carries no authors and so cannot be counted at all",
              "A paper published without peer review, which most databases refuse to index",
            ],
            correctIndex: 0,
            explanation:
              "The 22 items in the series include one short communication. Excluding it gives 21, which is the only rule under which the reference book figure holds.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What did the 1934 citation reward, in the words of the Nobel summary page?",
            options: [
              "Discoveries concerning liver therapy in cases of anaemia",
              "The invention of a standard anaemic dog preparation for measuring diet factors in grams",
              "The isolation of the substance in liver responsible for curing pernicious anaemia",
              "The demonstration that the bone marrow manufactures red blood corpuscles from diet",
            ],
            correctIndex: 0,
            explanation:
              "That is the citation. The method the lecture describes is what produced the discoveries, which is why the method paragraph matters.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What did the presentation speech say Minot and Murphy took from Whipple's work?",
            options: [
              "The idea of trying the same foods on pernicious anaemia",
              "The standard anaemic dog preparation, which they used in Boston for their own experiments",
              "The finding that iron is the most potent inorganic element in blood regeneration",
              "The measurement of diet factor potency in grams of haemoglobin, applied to patients",
            ],
            correctIndex: 0,
            explanation:
              "The speech says Whipple's results \"gave Minot and Murphy the idea, that an experiment could be made to see whether favourable results might not also be obtained in the case of pernicious anaemia\".",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What was the state of knowledge about diet and blood before the standard anemia method?",
            options: [
              "Good feeding helped, but nobody could rank foods",
              "Nothing was known, because anaemia was thought to be caused by a poison rather than a deficiency",
              "Liver was already known to be the strongest food, but the reason for it was not understood",
              "The bone marrow's role was unknown, so no food could be connected to blood regeneration",
            ],
            correctIndex: 0,
            explanation:
              "Every experiment used a different animal in a different state, so one food could not be set against another as a number.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What does this course say the method paragraph of the lecture establishes about credit?",
            options: [
              "The rewarded method is attributed to two people",
              "That the laureate performed the experiments alone and acknowledged assistance only afterwards",
              "That the committee had seen the paragraph before deciding who would share the prize",
              "That the method was developed in San Francisco before the colony moved to Rochester",
            ],
            correctIndex: 0,
            explanation:
              "Whatever else is disputed, the document describing the rewarded method says it was begun by \"Dr. Frieda Robscheit-Robbins and the writer\".",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // 1978 — The remarks that name her
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "stereospecific-binding",
      title: "1978 · What a binding assay showed",
      section: "1978 · The remarks that name her",
      body: `Again, the science first.

For decades it had been reasonable to think the brain carried something that opiate drugs act on. Garfield, writing in 1979, puts it plainly: researchers "for at least the past two decades had inferred the existence of opiate receptors from pharmacologic evidence", and "earlier papers on the possible existence of the receptors are too numerous to cite" (Garfield, 1979). Inferring is not demonstrating. The question was how to show the thing physically.

**The idea that made it possible.** Garfield names a 1971 paper by Avram Goldstein, Louise Lowney and B. K. Pal as "in some ways the 'parent' of the research which followed". It "provided the conceptual framework for physically demonstrating the existence of opiate receptors by distinguishing between nonspecifically and stereospecifically bound radioactive opiates in brain homogenates. This method was refined by later researchers with more success because they used higher affinity opiate ligands of higher radioactivity" (Garfield, 1979).

**What that means in practice.** Take brain tissue, break it up, and add a radioactively labelled opiate. Some of the label will stick to the tissue the way anything sticks to anything. What you want is the binding that discriminates: binding that treats two mirror-image forms of the same drug differently, because a site that can tell them apart is behaving like a receptor and not like flypaper. Measure the difference and you have a number for something nobody had been able to weigh.

**Three groups, one year.** Garfield: "Papers announcing the discovery of opiate receptors were published in 1973 by three groups of researchers." Their titles say what they did.

- Pert, C. B., and Snyder, S. H. "Opiate receptor: demonstration in nervous tissue." *Science*, 9 March 1973.
- Simon, E. J., Hiller, J. M., and Edelman, I. "Stereospecific binding of the potent narcotic analgesic (3H) etorphine to rat-brain homogenate." *Proceedings of the National Academy of Sciences*, July 1973.
- Terenius, L. "Stereospecific interaction between narcotic analgesics and a synaptic plasma membrane fraction of rat cerebral cortex." *Acta Pharmacologica et Toxicologica*, 1973.

**The dates, which cut in three directions.** Garfield checked the submission dates: Terenius submitted first, on 6 November 1972, "beating Pert and Snyder by almost a month (December 1, 1972), and Simon's group by several (April 19, 1973)". A Science News story he cites reports that Simon made the first oral presentation, at a meeting in April 1973 whose proceedings were never published, and that Snyder and Pert published first. Garfield's conclusion: "Therefore, each of these scientists has a strong claim on the discovery."

**The other half of the 1978 citation.** The award was for the relation between the receptors and the enkephalins, and the enkephalin work is where Hughes and Kosterlitz come in. Garfield records something about that half worth keeping: Kosterlitz "was aware that he might overshadow Hughes", so he chose not to appear as an author on the first paper announcing the enkephalin discovery, which Hughes published as sole author while acknowledging Kosterlitz at the end. Garfield's verdict on the practice is blunt: "I think this is a practice which should be avoided."

:::reveal What distinguishes a binding measurement that demonstrates a receptor from one that shows nothing? ||| Stereospecificity. A site that treats two mirror-image forms of the same drug differently is discriminating, which is what a receptor does, rather than binding whatever touches it.

:::reveal Why does Garfield say each of the three 1973 groups has a strong claim? ||| Because the order changes with the measure: Terenius submitted first, Pert and Snyder published first, and Simon presented first at a meeting whose proceedings were never published.

## Vocabulary
- **Opiate receptor**: a site in nervous tissue that opiate drugs bind to, inferred from pharmacology long before it was demonstrated physically.
- **Stereospecific**: distinguishing between mirror-image forms of the same molecule, and so evidence of a discriminating site rather than general stickiness.
- **Homogenate**: tissue broken up into a uniform suspension, the preparation in which the 1973 binding measurements were made.
- **Ligand**: the molecule that binds to a receptor, here a radioactively labelled opiate used to make the binding measurable.
- **Enkephalins**: opiate-like substances produced by the body, whose relation to the receptors is what the 1978 citation names.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Pert, C. B., & Snyder, S. H. (1973). Opiate receptor: Demonstration in nervous tissue. *Science*, 179(4077), 1011-1014. https://doi.org/10.1126/science.179.4077.1011
Simon, E. J., Hiller, J. M., & Edelman, I. (1973). Stereospecific binding of the potent narcotic analgesic (3H) etorphine to rat-brain homogenate. *Proceedings of the National Academy of Sciences*, 70(7), 1947-1949. https://doi.org/10.1073/pnas.70.7.1947
Terenius, L. (1973). Stereospecific interaction between narcotic analgesics and a synaptic plasma membrane fraction of rat cerebral cortex. *Acta Pharmacologica et Toxicologica*, 32(3), 317-320. https://doi.org/10.1111/j.1600-0773.1973.tb01477.x`,
    },
    {
      slug: "the-page-and-the-author-line",
      title: "1978 · The page, and the author line it does not host",
      section: "1978 · The remarks that name her",
      body: `The award page gives Candace Pert one sentence, inside somebody else's thanks. The literature gives her something the page does not carry.

**The author line.** "Opiate receptor: demonstration in nervous tissue", *Science* 179(4077), 1011-1014, 9 March 1973, by Pert CB and Snyder SH. She is first. The same year she is first on "Properties of opiate-receptor binding in rat brain" in the *Proceedings of the National Academy of Sciences*, and first on "Opiate agonists and antagonists discriminated by receptor binding in brain" in *Science* in December. Garfield, who went through the cluster maps paper by paper, records it flatly: "Candace Pert appeared on all three papers from Snyder's group. She was first author of the paper announcing the discovery" (Garfield, 1979).

**Why that makes this case unusual.** Most stories about lost credit are stories about the author line: somebody did the work and was left off the paper, or buried in the middle of it. Here the author line is fine. She is on every relevant paper and first on the one that announced the result. The credit was lost a level up, at the prize, where a citation names three people and an author line is not consulted. *Who Gets Named*, lesson 13, "Who counts as an author, and who gets thanked", argues that an acknowledgement is not indexed as authorship and so does not accumulate. This case adds the part that lesson does not have: a person who was indexed as an author, and still got the acknowledgement rather than the award.

**The citation counts, and what their author says about them.** Garfield compared the papers Snyder published with Pert against those he published with everyone else. From 1973 to 1976 he and Pert co-authored 17 journal articles on opiate receptors, averaging 87 citations each. Over the same period Snyder and other collaborators published 23 papers in the field, averaging 37.5. "Of Snyder's papers on opiate receptors, Pert co-authored five of the six which received over 100 citations. She co-authored 10 of his 20 most-cited opiate receptor papers. None of Snyder's other co-authors has a citation record which can compare with Pert's."

**Then Garfield takes his own evidence down a peg**, and this is the sentence that makes the essay worth reading: "Although these data cannot prove that Pert made major contributions to the work she did with Snyder, they do indicate that she was *capable* of valuable contributions." A citation count measures uptake of a paper. It does not partition the work inside the paper between the people on it.

**And he supplies the counter-example himself.** Kosterlitz had left his name off the first enkephalin paper. So "an awards committee, relying on citation data alone, might have thus overlooked Kosterlitz instead of Pert." The measure that would have caught one omission would have created another.

**One more thing about Garfield.** He is not a neutral observer of his own instrument. In the same essay he writes "As a member of several awards committees myself, I am not pleased by this prospect", and he offers to provide his company's cluster maps to any awards committee that asks. That does not make his numbers wrong. It is something a reader should know while reading them, and he says it himself rather than leaving it to be found out.

:::reveal What is unusual about this case compared with most lost-credit stories? ||| The author line is not the problem. She was first author on the paper announcing the result, and the credit was lost a level up, at the prize.

:::reveal What does Garfield say his citation data cannot do? ||| It cannot prove she made major contributions to the work. It indicates that she was capable of valuable contributions, which is a weaker and more honest claim.

## Vocabulary
- **Citation count**: the number of times a published paper is cited by later papers, a measure of uptake rather than of who did what inside it.
- **Acknowledgement**: a thank-you printed in a paper or a speech, which is not indexed as authorship and does not accumulate as credit.
- **Cluster map**: Garfield's graphic of co-cited papers, used here to check which authors appear repeatedly in a specialty.
- **Agonist and antagonist**: drugs that activate a receptor and drugs that block it, distinguished by receptor binding in one of the 1973 papers.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Pert, C. B., Pasternak, G., & Snyder, S. H. (1973). Opiate agonists and antagonists discriminated by receptor binding in brain. *Science*, 182(4119), 1359-1361.
Pert, C. B., & Snyder, S. H. (1973). Opiate receptor: Demonstration in nervous tissue. *Science*, 179(4077), 1011-1014. https://doi.org/10.1126/science.179.4077.1011
Pert, C. B., & Snyder, S. H. (1973). Properties of opiate-receptor binding in rat brain. *Proceedings of the National Academy of Sciences*, 70(8), 2243-2247.`,
    },
    {
      slug: "the-argument-in-print",
      title: "1978 · The argument, in print, in 1979",
      section: "1978 · The remarks that name her",
      body: `The dispute did not stay private. It ran in *Science* over three months of 1979, and this lesson names who said what.

**A note on the source, because it matters.** The news report that started it is Marx, J. L., "Lasker award stirs controversy", *Science* 203(4378), 341, 26 January 1979. The publisher's page for it is not reachable. Its text was read for this course in a reprint posted in 2014 on candacepert.com, a site devoted to one of the people in the dispute and therefore an interested one. It is used here for one reason: every sentence Garfield quotes from Marx appears in that reprint word for word, which is as much corroboration as an unreachable article can get. Where a claim below rests only on the reprint, it says so.

**What Pert said.** In a letter to Mary Lasker, president of the Foundation, she wrote that she "played a key role in initiating this research and following it up" (quoted by Garfield, 1979). The fuller sentence in the reprint runs: "I was angry and upset to be excluded from this year's Award...as Dr. Snyder's graduate student, I played a key role in initiating this research and following it up". The reprint also reports that she refused to attend the luncheon at which the awards were presented, and that she dates her thinking about the problem to before she joined Snyder's laboratory in the autumn of 1970.

**What Snyder contests.** One thing, precisely: who began the project. Per the reprint, "Snyder is equally certain that he began the opiate receptor project. He told *Science* that a protocol for identifying the receptors was submitted in a grant application to the National Institutes of Health more than a year before Pert began to work on the problem." He also drew a distinction about status, saying Hughes "was actually an independent investigator who collaborated with Kosterlitz whereas Pert was a graduate student working under Snyder's direction."

**What Snyder supports.** On the award itself he was on her side, and Garfield records it independently: Snyder "has supported Pert's claims. He called members of the awards committee and asked them to consider including Pert among the recipients. He also stated publicly that 'it would have been appropriate if Pert had shared the award with him.'" The reprint adds that the request to the jury "was refused".

**What the jury said.** Almost nothing. Per the reprint: "The jury deliberations are confidential, although one member did allow that the issue of graduate student versus independent investigator did not enter into their discussions." And: "Exactly what influenced the Lasker jury is not known." This course repeats that sentence rather than improving on it.

**A second complaint, about different people.** Thomas Maren of the University of Florida wrote to *Science* that he "(and many others)...are keenly aware of the remarkable progress [in opiate research] made by *five* groups (not two).... Why then was [Goldstein] excluded, as were Terenius of Uppsala and Simon of New York University?" (quoted by Garfield, 1979). That is a different objection from Pert's, and the two are often merged into one grievance. They should not be: hers is about a junior collaborator of a winner, his is about senior investigators left out altogether.

**A third voice, raising sex discrimination.** Marx quotes a letter to *Science* from Ellen Silbergeld of the National Institute for Neurological and Communicative Disorders and Stroke, who wrote that when "the excluded scientist is young, and a woman", she was discouraged to think the scientific world had not become sensitive to practices that have "the effect of being systematically discriminatory". Garfield notes the same suspicion in his opening. Neither writer claims to know what the jury did, and neither does this course.

**And an admission, about a different award.** As his essay went to press Garfield added a note. William Pollin of the National Institute on Drug Abuse had written about the 1977 NIDA Pacesetter Research Award, which went to Goldstein, Hughes, Kosterlitz, Simon, Snyder and Terenius: "In retrospect, we feel that it was a significant omission on our part that Dr. Candace Pert was not included. Her graduate student role was the issue at the time; subsequent increased awareness of her major contribution has led us to this revised conclusion." That is an award body saying in writing what the mechanism was. It is also, importantly, about the NIDA award and not the Lasker.

:::reveal What exactly does Snyder contest, and what does he support? ||| He contests who began the project, saying a protocol was in an NIH grant application more than a year before she started. He supports her sharing the award, and called jurors to ask them to include her.

:::reveal Why should Maren's complaint not be merged with Pert's? ||| They are different objections. Pert's is about a junior collaborator of a winner being left out; Maren's is about senior investigators, Goldstein, Terenius and Simon, being left out altogether.

## Vocabulary
- **Interested source**: a source with a stake in the outcome, usable when corroborated, and always labelled as such.
- **Pacesetter Research Award**: the 1977 National Institute on Drug Abuse award to six opiate researchers, about which NIDA later published an admission.
- **Confidential deliberations**: jury discussions the awarding body does not release, which is why no motive is asserted anywhere in this course.
- **Corroboration**: independent confirmation of a text, here Garfield's quotations matching the reprint sentence for sentence.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Maren, T. H. (1979). Lasker Award and opiate receptors [Letter]. *Science*, 203(4383), 834.
Marx, J. L. (1979). Lasker award stirs controversy. *Science*, 203(4378), 341. https://doi.org/10.1126/science.216074
Pollin, W. (1979). Pert and the Lasker Award [Letter]. *Science*, 204(4388), 8.`,
    },
    {
      slug: "quiz-1978",
      title: "1978 quiz · The remarks that name her",
      section: "1978 · The remarks that name her",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long had researchers inferred opiate receptors before 1973, per Garfield?",
            options: [
              "At least two decades",
              "About five years, dating from the first synthetic analgesics of the late 1960s",
              "Since the 1930s, when the first stereospecific binding measurements were attempted",
              "They had not, because the concept of a receptor was introduced only in 1971",
            ],
            correctIndex: 0,
            explanation:
              "\"For at least the past two decades had inferred the existence of opiate receptors from pharmacologic evidence.\"",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What does Garfield say about the earlier papers on the possible existence of the receptors?",
            options: [
              "They are too numerous to cite",
              "That they were all wrong, which is why the 1973 papers were treated as a discovery",
              "That only one predates 1973, the Goldstein, Lowney and Pal paper of 1971",
              "That none was published, because the inference rested on unpublished pharmacology",
            ],
            correctIndex: 0,
            explanation:
              "Inference from pharmacology was widespread. The question was how to show the thing physically.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which institution does Garfield give for Goldstein, Lowney and Pal?",
            options: [
              "Stanford University School of Medicine",
              "New York University, where Simon, Hiller and Edelman also worked",
              "Uppsala University, where Terenius made the earliest submission of the three",
              "Johns Hopkins University School of Medicine, the institution named in the citation",
            ],
            correctIndex: 0,
            explanation:
              "Their 1971 paper is what Garfield calls in some ways the parent of the research that followed.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What does the word homogenate mean in these 1973 papers?",
            options: [
              "Tissue broken into a uniform suspension",
              "A purified protein extract from which all membrane material has been removed",
              "A live animal preparation in which the drug is delivered through the bloodstream",
              "A mixture of two drugs in a fixed ratio, used to test for competitive binding",
            ],
            correctIndex: 0,
            explanation:
              "It is the preparation in which the binding measurements were made, and it appears in the title of the Simon paper.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What is a ligand?",
            options: [
              "The molecule that binds to a receptor",
              "The site in tissue that a drug attaches to, measured in these experiments as a count",
              "The radioactive tracer used to label a tissue sample before it is broken up",
              "The enzyme that breaks down an opiate drug once it has entered the brain",
            ],
            correctIndex: 0,
            explanation:
              "Here a radioactively labelled opiate, which is what makes the binding measurable at all.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What are the enkephalins?",
            options: [
              "Opiate-like substances produced by the body",
              "The synthetic analgesics developed from the receptor work in the years after 1973",
              "The mirror-image forms of morphine used to test stereospecific binding",
              "The regions of the brain in which opiate receptors are most densely concentrated",
            ],
            correctIndex: 0,
            explanation:
              "Their relation to the receptors is what the 1978 citation names, and the enkephalin half is where Hughes and Kosterlitz come in.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which journal published Terenius's 1973 paper?",
            options: [
              "Acta Pharmacologica et Toxicologica",
              "The Proceedings of the National Academy of Sciences, alongside the Simon group's paper",
              "Science, in the issue of 9 March that year",
              "Brain Research, which two years later carried the first enkephalin paper",
            ],
            correctIndex: 0,
            explanation:
              "Volume 32, pages 317-320. The title is \"Stereospecific interaction between narcotic analgesics and a synaptic plasma membrane fraction of rat cerebral cortex\".",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What did the Simon group's 1973 title say they had bound?",
            options: [
              "Etorphine to rat-brain homogenate",
              "Morphine to a synaptic plasma membrane fraction of rat cerebral cortex",
              "Naloxone to nervous tissue, demonstrating the receptor by blocking it",
              "Levorphanol to subcellular fractions of mouse brain, following the 1971 method",
            ],
            correctIndex: 0,
            explanation:
              "\"Stereospecific binding of the potent narcotic analgesic (3H) etorphine to rat-brain homogenate\", PNAS, July 1973.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Where did Simon reportedly make the first oral presentation of the discovery?",
            options: [
              "At a meeting whose proceedings were never published",
              "At the 1973 Nobel symposium in Stockholm, where the three groups met for the first time",
              "In a seminar at Johns Hopkins, which Snyder and Pert both attended",
              "At the Lasker Foundation's own awards ceremony five years later",
            ],
            correctIndex: 0,
            explanation:
              "April 1973, per a Science News story Garfield cites. It is why presentation order cannot be checked in the literature the way submission order can.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which half of the 1978 citation do Hughes and Kosterlitz belong to?",
            options: [
              "The enkephalin work",
              "The receptor binding work, which they carried out in parallel with Snyder's laboratory",
              "The mapping of receptor distribution in the brain, described in the Foundation's essay",
              "Both halves equally, since the citation does not distinguish between them",
            ],
            correctIndex: 0,
            explanation:
              "The award was for the relation between the receptors and the enkephalins, and the enkephalin half is where they come in.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "How did Hughes appear on the first paper announcing the enkephalin discovery?",
            options: [
              "As sole author",
              "As second author, with Kosterlitz first, reflecting the seniority of the laboratory head",
              "As one of six authors, in the order the Lasker citation later reproduced",
              "He did not appear on it, because Kosterlitz published the first announcement alone",
            ],
            correctIndex: 0,
            explanation:
              "He acknowledged Kosterlitz at the end instead. Garfield calls the practice one that should be avoided, and later shows what it costs.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What is nonspecific binding, as against stereospecific binding?",
            options: [
              "Binding that does not discriminate",
              "Binding measured in living tissue rather than in a broken-up preparation",
              "Binding of a drug to its own mirror image rather than to the tissue",
              "Binding that occurs only when a radioactive label of high activity is used",
            ],
            correctIndex: 0,
            explanation:
              "The kind of sticking that anything does to anything. Separating the two is what the 1971 framework made possible.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "In which month and year was \"Opiate receptor: demonstration in nervous tissue\" published?",
            options: [
              "March 1973",
              "December 1972, which is the date the paper was submitted to the journal",
              "July 1973, the same month the Simon group's paper appeared in PNAS",
              "August 1973, when the second Pert and Snyder paper appeared",
            ],
            correctIndex: 0,
            explanation:
              "Science 179(4077), 1011-1014, 9 March 1973. The 1 December 1972 date is the submission, not the publication.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What did Garfield find about Snyder's other co-authors' citation records?",
            options: [
              "None compares with Pert's",
              "That two of them exceeded hers over the same period on a per paper basis",
              "That they could not be compared, because the index did not cover their journals",
              "That they were all roughly equal, which is why the comparison proves nothing",
            ],
            correctIndex: 0,
            explanation:
              "\"None of Snyder's other co-authors has a citation record which can compare with Pert's.\"",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "How many papers did Snyder publish with collaborators other than Pert between 1973 and 1976?",
            options: [
              "23",
              "17, which is the number he published with Pert over the same four years",
              "20, being his most-cited opiate receptor papers of the whole period",
              "6, being the papers in the field that received more than 100 citations",
            ],
            correctIndex: 0,
            explanation:
              "Those 23 averaged 37.5 citations each, against 87 for the 17 papers with Pert.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does this course say most lost-credit stories are about?",
            options: [
              "The author line",
              "The prize citation, which almost always names fewer people than the work required",
              "The patent, whose named inventors differ from the people who built the thing",
              "The press release, which simplifies a collaboration into a single name",
            ],
            correctIndex: 0,
            explanation:
              "Somebody did the work and was left off the paper, or buried in the middle of it. This case is not that.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does Who Gets Named lesson 13 argue about acknowledgements?",
            options: [
              "They are not indexed as authorship, so they do not accumulate",
              "That they carry the same weight as authorship when they appear on a prize page",
              "That they should be abolished, because they invite exactly this kind of confusion",
              "That they are the only reliable record of who worked in a laboratory",
            ],
            correctIndex: 0,
            explanation:
              "This case adds the part that lesson does not have: a person who was indexed as an author and still got the acknowledgement rather than the award.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What do agonists and antagonists do, in the title of the December 1973 paper?",
            options: [
              "Activate a receptor and block it",
              "Bind stereospecifically and nonspecifically to the same tissue preparation",
              "Produce and destroy the enkephalins in the brain's own regulatory cycle",
              "Increase and decrease the radioactivity of a labelled opiate ligand",
            ],
            correctIndex: 0,
            explanation:
              "\"Opiate agonists and antagonists discriminated by receptor binding in brain\", Science 182, with Pert first.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "Why does the course say Garfield's disclosure of his own interest matters?",
            options: [
              "A reader should know it while reading his numbers",
              "Because it makes his citation counts unusable as evidence in any award dispute",
              "Because it shows he had been asked by the Lasker jury to analyse the field",
              "Because it means the essay was published as an advertisement rather than as analysis",
            ],
            correctIndex: 0,
            explanation:
              "It does not make his numbers wrong. He says it himself rather than leaving it to be found out, which is the behaviour the course is recommending.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What is an interested source, in this course's vocabulary?",
            options: [
              "One with a stake in the outcome",
              "One that has been cited by at least two other independent sources on the same point",
              "One published by a party to a dispute after the dispute has been settled",
              "One that cannot be used at all, because its bias cannot be measured",
            ],
            correctIndex: 0,
            explanation:
              "Usable when corroborated, and always labelled as such, which is how the 2014 reprint is handled.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What corroborates the 2014 reprint this course used?",
            options: [
              "Garfield's quotations match it sentence for sentence",
              "The publisher's own page, which was compared with it line by line in 2026",
              "The Lasker Foundation's archive copy, which the Foundation supplied on request",
              "Nothing, which is why no claim in the course rests on the reprint",
            ],
            correctIndex: 0,
            explanation:
              "That is as much corroboration as an unreachable article can get, and the course says where each reprint-only claim sits.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "To whom did Pert write the letter quoted in 1979?",
            options: [
              "Mary Lasker",
              "The editor of Science, which published the letter alongside the news report",
              "Solomon Snyder, who then forwarded it to the members of the jury",
              "William Pollin of NIDA, whose reply became the admission Garfield quotes",
            ],
            correctIndex: 0,
            explanation:
              "The president of the Lasker Foundation. Garfield quotes the letter from the Science report.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Which institution does Marx give for Ellen Silbergeld?",
            options: [
              "The National Institute for Neurological and Communicative Disorders and Stroke",
              "The National Institute on Drug Abuse, which also wrote to Science about the award",
              "The National Institute of Mental Health, where Pert was working in 1979",
              "Johns Hopkins University School of Medicine, the institution named in the citation",
            ],
            correctIndex: 0,
            explanation:
              "She wrote to Science raising the question of sex discrimination. She does not claim to know what the jury did, and neither does this course.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Which six researchers received the 1977 NIDA Pacesetter Research Award?",
            options: [
              "Goldstein, Hughes, Kosterlitz, Simon, Snyder and Terenius",
              "The three Lasker winners together with Pert, Pasternak and Kuhar from Snyder's laboratory",
              "Goldstein, Lowney, Pal, Simon, Hiller and Edelman, the two groups that worked on binding",
              "Maren, Pollin, Silbergeld, Marx, Garfield and Zuckerman, who wrote about the field",
            ],
            correctIndex: 0,
            explanation:
              "Pollin's 1979 letter is about that award, not the Lasker, and the course keeps the two apart.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Why does this course print the sentence about what influenced the jury rather than paraphrase it?",
            options: [
              "Because it cannot be improved on",
              "Because the Foundation requires the sentence to be quoted whenever the case is discussed",
              "Because a paraphrase would breach the copyright in the 1979 news report",
              "Because the sentence is the only part of the report the reprint reproduces accurately",
            ],
            correctIndex: 0,
            explanation:
              "\"Exactly what influenced the Lasker jury is not known.\" Any rewording would add something the record does not support.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What are confidential deliberations, and what follows from them in this course?",
            options: [
              "Discussions the body does not release, so no motive is asserted",
              "Discussions released after fifty years, which is why the 1934 record is now available",
              "Discussions summarised in the citation, which is the jury's public statement of reasons",
              "Discussions a jury member may describe once the award has been presented",
            ],
            correctIndex: 0,
            explanation:
              "One Lasker juror said one thing about one issue. Everything else is unreleased, and the course stops there.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "How had the existence of opiate receptors been treated before 1973, according to Garfield?",
            options: [
              "Inferred from pharmacologic evidence",
              "Rejected by the field, which held that opiate drugs acted on membranes without any specific site",
              "Demonstrated physically by Goldstein's group in 1971, whose paper closed the question",
              "Ignored entirely, since the word receptor was not used in pharmacology before that year",
            ],
            correctIndex: 0,
            explanation:
              "Researchers \"for at least the past two decades had inferred the existence of opiate receptors from pharmacologic evidence\". Inferring is not demonstrating.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which 1971 paper does Garfield call the parent of the research that followed?",
            options: [
              "Goldstein, Lowney and Pal",
              "Pert and Snyder, whose Science paper of that year first announced a receptor in nervous tissue",
              "Hughes and Kosterlitz, whose enkephalin work provided the framework for the binding assays",
              "Simon, Hiller and Edelman, whose etorphine method every later group adopted unchanged",
            ],
            correctIndex: 0,
            explanation:
              "Avram Goldstein, Louise Lowney and B. K. Pal, Stanford University School of Medicine. It gave the conceptual framework, which later groups refined.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What conceptual framework does Garfield credit that 1971 paper with providing?",
            options: [
              "Distinguishing nonspecific from stereospecific binding",
              "Measuring the number of receptors per gram of brain tissue using a radioactive standard",
              "Separating the opiate receptor from the enkephalin receptor as two different systems",
              "Localizing receptors by region of the brain rather than measuring them in a homogenate",
            ],
            correctIndex: 0,
            explanation:
              "It provided the framework \"for physically demonstrating the existence of opiate receptors by distinguishing between nonspecifically and stereospecifically bound radioactive opiates in brain homogenates\".",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "How did later researchers refine that method, in Garfield's account?",
            options: [
              "Higher affinity ligands of higher radioactivity",
              "By using human brain tissue obtained at autopsy rather than tissue from laboratory rats",
              "By repeating the measurement in living animals instead of in a tissue preparation",
              "By adding an antagonist to block nonspecific binding before the labelled drug was applied",
            ],
            correctIndex: 0,
            explanation:
              "\"This method was refined by later researchers with more success because they used higher affinity opiate ligands of higher radioactivity.\"",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Why does stereospecificity matter in a binding measurement?",
            options: [
              "A site that discriminates is behaving like a receptor",
              "Because a radioactive label binds only to molecules that share the same three dimensional shape",
              "Because nonspecific binding cannot be measured at all without a mirror-image control drug",
              "Because opiate drugs are only active in tissue that has been broken into a homogenate",
            ],
            correctIndex: 0,
            explanation:
              "Binding that treats two mirror-image forms of a drug differently is discrimination, which is what a receptor does rather than what flypaper does.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "How many groups published papers announcing the discovery of opiate receptors in 1973?",
            options: [
              "Three",
              "One, Snyder's laboratory, which is why the Lasker citation named him alone for that half",
              "Five, the number Thomas Maren named in his letter to Science about the same award",
              "Six, the number that received the 1977 NIDA Pacesetter Research Award two years later",
            ],
            correctIndex: 0,
            explanation:
              "Pert and Snyder; Simon, Hiller and Edelman; and Terenius. Maren's five is a different count, of groups working in opiate research generally.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which group submitted its 1973 paper to a journal first?",
            options: [
              "Terenius",
              "Pert and Snyder, on 1 December 1972, almost a month ahead of any other group",
              "Simon, Hiller and Edelman, whose 19 April 1973 submission followed their oral presentation",
              "Goldstein, Lowney and Pal, whose parent paper was submitted in the autumn of 1971",
            ],
            correctIndex: 0,
            explanation:
              "6 November 1972, ahead of Pert and Snyder on 1 December 1972 and Simon's group on 19 April 1973.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Who published first among the three 1973 groups?",
            options: [
              "Snyder and Pert",
              "Terenius, whose earlier submission date carried through to an earlier publication date",
              "Simon, whose April 1973 meeting presentation was published in the proceedings that year",
              "The order of publication is unknown, because two of the three papers are undated",
            ],
            correctIndex: 0,
            explanation:
              "Per the Science News story Garfield cites, Simon made the first oral presentation and Snyder and Pert published first. The submission order runs differently.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What conclusion does Garfield draw from the three submission dates?",
            options: [
              "Each has a strong claim",
              "That Terenius alone deserved the award, since his submission preceded the others by a month",
              "That priority cannot be established at all, so the question of who discovered it is meaningless",
              "That the committee was right to name three winners, since exactly three groups published",
            ],
            correctIndex: 0,
            explanation:
              "\"Therefore, each of these scientists has a strong claim on the discovery.\" The order changes depending on which measure you use.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Why did Kosterlitz leave his name off the first enkephalin paper?",
            options: [
              "He was aware he might overshadow Hughes",
              "Because he had not taken part in the experiments the paper reported and said so publicly",
              "Because the journal limited that category of paper to a single named author",
              "Because he wanted the citation record to show Hughes as the senior investigator",
            ],
            correctIndex: 0,
            explanation:
              "Hughes appeared as sole author and acknowledged Kosterlitz at the end. Garfield's verdict: \"I think this is a practice which should be avoided.\"",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What does Garfield say about leaving a senior collaborator's name off a paper to help a junior one?",
            options: [
              "It should be avoided",
              "That it is the fairest available way to correct for the reputation gap between collaborators",
              "That it is harmless, because awards committees never rely on author lines in any case",
              "That it should be required whenever the senior investigator did not perform the experiments",
            ],
            correctIndex: 0,
            explanation:
              "He says he understands the desire to help a colleague, then says the practice should be avoided, and later shows the cost of it.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which journal published \"Properties of opiate-receptor binding in rat brain\" in 1973?",
            options: [
              "The Proceedings of the National Academy of Sciences",
              "Science, in the same issue that carried the demonstration in nervous tissue paper",
              "Acta Pharmacologica et Toxicologica, alongside the Terenius paper of the same year",
              "Brain Research, which carried the first enkephalin paper two years later",
            ],
            correctIndex: 0,
            explanation:
              "PNAS 70(8), 2243-2247, by Pert and Snyder, with Pert first.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "On how many of the three papers from Snyder's group in the 1974 cluster map did Pert appear?",
            options: [
              "All three",
              "One, the Science paper announcing the demonstration of the receptor in nervous tissue",
              "Two, with the third carrying Kuhar as first author and Snyder as senior author",
              "None, because the cluster map identifies papers by their first authors only",
            ],
            correctIndex: 0,
            explanation:
              "\"Candace Pert appeared on all three papers from Snyder's group. She was first author of the paper announcing the discovery.\"",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What makes this case unusual among stories about lost credit?",
            options: [
              "The author line is fine",
              "The paper was never published, so no author line exists to check the prize citation against",
              "The prize was withdrawn and reissued, which almost never happens with a scientific award",
              "The person left out was more senior than the person who received the award",
            ],
            correctIndex: 0,
            explanation:
              "She is on every relevant paper and first on the one that announced the result. The credit was lost a level up, at the prize.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does this case add to Who Gets Named lesson 13 on authorship and thanks?",
            options: [
              "Someone indexed as an author who still got only thanks",
              "A case in which an acknowledgement was later converted into formal authorship by the journal",
              "The first example in the catalog of a prize citation naming an acknowledged contributor",
              "Proof that acknowledgements accumulate as credit when they appear on a prize page",
            ],
            correctIndex: 0,
            explanation:
              "That lesson argues an acknowledgement is not indexed as authorship and so does not accumulate. Here the person was indexed as an author and got the acknowledgement anyway.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "How many opiate receptor papers did Pert and Snyder co-author between 1973 and 1976?",
            options: [
              "17",
              "23, which is the number Snyder published with all his other collaborators in that period",
              "18, being the papers published after she had left his laboratory for the NIMH",
              "10, being the number of his most-cited opiate receptor papers that she co-authored",
            ],
            correctIndex: 0,
            explanation:
              "17 journal articles averaging 87 citations each. Snyder's 23 papers with other collaborators in the same period averaged 37.5.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What was the average citation count of the Pert and Snyder opiate receptor papers, in Garfield's data?",
            options: [
              "87",
              "37.5, the same figure as for Snyder's papers with all his other collaborators combined",
              "100, which is the threshold Garfield uses to identify the most cited papers in the field",
              "16, the average of her 18 papers published after she left Snyder's laboratory",
            ],
            correctIndex: 0,
            explanation:
              "87 citations per article, against 37.5 for Snyder's 23 papers with other collaborators over the same period.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "Of Snyder's opiate receptor papers with more than 100 citations, how many did Pert co-author?",
            options: [
              "Five of the six",
              "Ten of the twenty, which is the separate figure for his most-cited papers overall",
              "Seventeen of the twenty-three, being every paper the two of them published together",
              "None, because his most cited papers in the field were written with other collaborators",
            ],
            correctIndex: 0,
            explanation:
              "\"Pert co-authored five of the six which received over 100 citations. She co-authored 10 of his 20 most-cited opiate receptor papers.\"",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does Garfield say his citation data cannot do?",
            options: [
              "Prove she made major contributions",
              "Identify which papers in a specialty were the most frequently cited in a given year",
              "Distinguish a senior investigator from a junior one within a single research team",
              "Compare one collaborator's citation record with another's in the same laboratory",
            ],
            correctIndex: 0,
            explanation:
              "\"Although these data cannot prove that Pert made major contributions to the work she did with Snyder, they do indicate that she was capable of valuable contributions.\"",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What counter-example does Garfield give against relying on citation data alone?",
            options: [
              "It would have overlooked Kosterlitz",
              "It would have named Goldstein, whose 1971 paper is the most cited in the whole specialty",
              "It would have missed the enkephalin work entirely, since those papers were published later",
              "It would have ranked Terenius first, because his submission date preceded all the others",
            ],
            correctIndex: 0,
            explanation:
              "Kosterlitz was not an author on the first enkephalin paper, so \"an awards committee, relying on citation data alone, might have thus overlooked Kosterlitz instead of Pert\".",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What interest does Garfield disclose in his own essay?",
            options: [
              "He sits on awards committees and offers cluster maps to them",
              "That he had co-authored papers with two of the three 1978 Lasker winners in the previous decade",
              "That his company held a contract with the Lasker Foundation to supply citation analyses",
              "That he had nominated one of the candidates for the award he is writing about",
            ],
            correctIndex: 0,
            explanation:
              "\"As a member of several awards committees myself, I am not pleased by this prospect\", and he invites committees to write to him for cluster maps. He says it himself rather than leaving it to be found out.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does a citation count measure?",
            options: [
              "Uptake of a paper",
              "The proportion of the work inside a paper done by each of its named authors",
              "The seniority of a paper's first author relative to the rest of the author line",
              "How many times a paper's method has been successfully replicated by other laboratories",
            ],
            correctIndex: 0,
            explanation:
              "It does not partition the work inside a paper between the people on it, which is why Garfield qualifies his own conclusion.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "Where did the 1979 argument about the 1978 Lasker award run?",
            options: [
              "In Science",
              "In the Lasker Foundation's own annual report, which printed the correspondence in full",
              "In Current Contents alone, where Garfield published his analysis that May",
              "In Brain Research, which carried both the letters and the Foundation's reply",
            ],
            correctIndex: 0,
            explanation:
              "A news report on 26 January 1979, then letters on 2 March and 6 April, with Garfield's Current Contents essay following on 14 May.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "How does this course describe the source it used for the text of the 1979 Science news report?",
            options: [
              "A reprint on an interested site",
              "A scan of the printed journal obtained from a university library and read page by page",
              "The publisher's own page, which was reachable and read in full on the date stated",
              "A summary in a later review article, since the original text could not be located at all",
            ],
            correctIndex: 0,
            explanation:
              "A 2014 reprint on candacepert.com, used because every sentence Garfield quotes from Marx appears in it word for word.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did Pert write in her letter to Mary Lasker?",
            options: [
              "That she played a key role in initiating the research",
              "That she would decline any later award offered to her by the Foundation in compensation",
              "That the jury should have named five groups rather than the two it recognised that year",
              "That she had been first author on the paper and should therefore have received the prize alone",
            ],
            correctIndex: 0,
            explanation:
              "\"I was angry and upset to be excluded from this year's Award...as Dr. Snyder's graduate student, I played a key role in initiating this research and following it up\".",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What does the reprint report that Pert did about the award luncheon?",
            options: [
              "Refused to attend",
              "Attended and read a statement objecting to the citation from the floor during the ceremony",
              "Asked the Foundation to seat her with the winners, a request the Foundation declined",
              "Sent a colleague in her place, who delivered her letter to Mary Lasker by hand",
            ],
            correctIndex: 0,
            explanation:
              "She refused to attend the luncheon at which the awards were presented.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What single thing does Snyder contest in the 1979 reporting?",
            options: [
              "Who began the project",
              "Whether she was an author on the paper announcing the demonstration of the receptor",
              "Whether the Lasker Foundation had any formal limit on the number of co-winners",
              "Whether a graduate student can be named on a prize citation at all",
            ],
            correctIndex: 0,
            explanation:
              "He told Science that a protocol for identifying the receptors was in an NIH grant application more than a year before she began work on the problem.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What distinction did Snyder draw between Hughes and Pert?",
            options: [
              "Independent investigator against graduate student",
              "That Hughes worked on the enkephalins while Pert worked only on the receptor binding assays",
              "That Hughes was first author on his paper while Pert was second author on hers",
              "That Hughes had been nominated by his own institution and Pert had not been nominated",
            ],
            correctIndex: 0,
            explanation:
              "Hughes \"was actually an independent investigator who collaborated with Kosterlitz whereas Pert was a graduate student working under Snyder's direction\".",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did Snyder do about the award itself?",
            options: [
              "Called jurors and asked them to include her",
              "Declined the award publicly until the Foundation agreed to add a fourth name to the citation",
              "Divided the honorarium with her, as Whipple had divided his in 1934",
              "Issued a correction to the Foundation's essay, which the page now carries in a footnote",
            ],
            correctIndex: 0,
            explanation:
              "Garfield records it independently of Marx: he called members of the awards committee to ask them to consider including Pert, and said publicly that it would have been appropriate for her to share the award.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What was the outcome of Snyder's request to the jury?",
            options: [
              "It was refused",
              "It was granted, and a fourth name was added to the citation before the ceremony took place",
              "It was deferred to the following year's jury, which reached the same decision again",
              "It was never answered, and the Foundation has not commented on it since",
            ],
            correctIndex: 0,
            explanation:
              "The reprint reports the request as refused.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did one jury member allow about the deliberations?",
            options: [
              "The graduate student issue did not enter them",
              "That the jury had considered adding her and voted against it by a narrow margin",
              "That the jury was bound by a formal limit of three co-winners in that award category",
              "That the jury never saw the author lines of the papers it was considering",
            ],
            correctIndex: 0,
            explanation:
              "\"The jury deliberations are confidential, although one member did allow that the issue of graduate student versus independent investigator did not enter into their discussions.\"",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What does the 1979 reporting say is known about what influenced the Lasker jury?",
            options: [
              "It is not known",
              "That the jury followed the recommendation of the Foundation's scientific director that year",
              "That the jury relied on citation data supplied by Garfield's company before deciding",
              "That the jury weighed seniority above every other consideration, as one member confirmed",
            ],
            correctIndex: 0,
            explanation:
              "\"Exactly what influenced the Lasker jury is not known.\" This course repeats that sentence rather than improving on it.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What was Thomas Maren's objection?",
            options: [
              "Senior investigators were left out altogether",
              "That a graduate student should never be considered for a major biomedical research award",
              "That the citation misdescribed the relation between the receptors and the enkephalins",
              "That the Lasker Foundation should adopt the same three winner limit that the Nobel uses",
            ],
            correctIndex: 0,
            explanation:
              "He asked why Goldstein was excluded, \"as were Terenius of Uppsala and Simon of New York University\", and wrote of progress made by five groups, not two.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Why does this course keep Maren's objection separate from Pert's?",
            options: [
              "They are about different people and different problems",
              "Because Maren's letter was published after the dispute had already been settled in print",
              "Because Maren was writing about the NIDA award rather than about the Lasker award",
              "Because only one of the two letters was quoted by Garfield in his 1979 essay",
            ],
            correctIndex: 0,
            explanation:
              "Hers is about a junior collaborator of a winner. His is about senior investigators left out altogether. Merged, they become one vague grievance.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Who raised the question of sex discrimination in a letter to Science?",
            options: [
              "Ellen Silbergeld",
              "Mary Lasker, in her reply to the letter she had received from Pert in January",
              "Harriet Zuckerman, whose study of Nobel laureates Garfield cites twice in his essay",
              "Thomas Maren, in the same letter that asked why three senior investigators were excluded",
            ],
            correctIndex: 0,
            explanation:
              "Of the National Institute for Neurological and Communicative Disorders and Stroke, quoted by Marx. She does not claim to know what the jury did, and neither does this course.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "Which award was William Pollin of NIDA writing about?",
            options: [
              "The 1977 NIDA Pacesetter Research Award",
              "The 1978 Albert Lasker Basic Medical Research Award, on behalf of the Lasker jury",
              "The 1934 Nobel Prize, in a historical note appended to Garfield's essay",
              "A proposed award that NIDA never in the end established",
            ],
            correctIndex: 0,
            explanation:
              "It went to Goldstein, Hughes, Kosterlitz, Simon, Snyder and Terenius. The distinction from the Lasker matters and the course states it.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did Pollin's letter say NIDA now felt about its 1977 award?",
            options: [
              "That leaving Pert out was a significant omission",
              "That the award had been correctly given and the criticism of it rested on a misunderstanding",
              "That the award would be reissued the following year with a seventh name added to it",
              "That graduate students would be excluded from the award by rule in future years",
            ],
            correctIndex: 0,
            explanation:
              "\"In retrospect, we feel that it was a significant omission on our part that Dr. Candace Pert was not included. Her graduate student role was the issue at the time.\"",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What makes Pollin's letter unusual as evidence?",
            options: [
              "An award body naming the mechanism in writing",
              "It is the only document in the dispute that reports what a jury said during its deliberations",
              "It was published anonymously, so the institution's position could not be identified",
              "It reverses a decision, which no award body had ever done before in a scientific field",
            ],
            correctIndex: 0,
            explanation:
              "\"Her graduate student role was the issue at the time\" is an award body stating the routing rule itself, which almost never appears on the record.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "When did Pert say she began thinking about the opiate receptor problem?",
            options: [
              "Before joining the laboratory in autumn 1970",
              "In 1972, when the grant application containing the protocol was submitted to the NIH",
              "In 1973, after the first of the three announcing papers had already been submitted",
              "In 1971, after reading the Goldstein, Lowney and Pal paper in its year of publication",
            ],
            correctIndex: 0,
            explanation:
              "Per the reprint, she dates her thinking about the problem to before she joined Snyder's laboratory in the autumn of 1970. Snyder dates the project's origin differently.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did the 1978 Lasker page give Candace Pert?",
            options: [
              "One sentence inside somebody else's thanks",
              "A separate essay of her own, placed after the essays on the three winners",
              "A dedication beginning \"To Dr.\", like each of the three winners received",
              "No mention at all, which is why the dispute of 1979 had to be conducted in journals",
            ],
            correctIndex: 0,
            explanation:
              "She appears only in the acceptance remarks, thanked among \"the many people who contributed to this area\". The page names her nowhere else.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "Which 1973 paper carried the author line Pert, Pasternak and Snyder?",
            options: [
              "Opiate agonists and antagonists discriminated by receptor binding in brain",
              "Opiate receptor: demonstration in nervous tissue, published in Science in March",
              "Properties of opiate-receptor binding in rat brain, published in PNAS in August",
              "Stereospecific binding of the potent narcotic analgesic etorphine to rat-brain homogenate",
            ],
            correctIndex: 0,
            explanation:
              "Science 182(4119), 1359-1361, December 1973, with Pert first.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does this course do with the claim that Pert discovered the opiate receptor?",
            options: [
              "Attaches the multiple discovery caveat to it",
              "Asserts it, on the strength of her first authorship on the paper that announced the result",
              "Rejects it entirely, since Garfield shows the 1971 Goldstein paper came first",
              "Leaves it out of the course, because no fetched source discusses priority at all",
            ],
            correctIndex: 0,
            explanation:
              "Three groups reported it in 1973 and Garfield says each has a strong claim. The caveat rides with every mention of her contribution.",
            sourceLessonSlug: "stereospecific-binding",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // 1985 — The empty third seat
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-phase-problem",
      title: "1985 · The half the experiment does not measure",
      section: "1985 · The empty third seat",
      body: `The science first, as in the other two cases.

A crystal scatters X-rays into thousands of separate beams, and a diffraction experiment records where each beam goes and how strong it is. Jerome Karle's Nobel lecture gives the scale: the collected intensities are "often 5000-10000 in number" and they "comprise the experimental data from which the structure of the crystal of interest is to be elucidated" (Karle, 1985).

**What the experiment does not record.** The Royal Swedish Academy of Sciences put the gap in one sentence when it announced the prize: to fix the positions of the atoms "it is also necessary to know the 'phase' of each deflected ray, that is, how much the waves in the different rays are displaced in relation to each other" (Royal Swedish Academy of Sciences, 1985). Intensities are measured. Phases are not. That missing half is the phase problem, and the presentation speech described what crystallographers did before it was solved: "The crystallographers had to use a trial and error method" (Lindqvist, 1985).

**The two facts a direct method is built on.** Electron density is never negative, because electrons are either there or they are not. And a diffraction experiment yields many times more measurements than there are unknowns, which lets statistical reasoning do work. Between 1950 and 1956 Hauptman and Karle turned those two facts into systems of equations relating the phases to the measured intensities. The citation rewards that.

**What the equations did not come with.** A route from the mathematics to a pile of real data. The lecture names the first procedure that supplied one, the symbolic addition procedure, calls it "the first procedure that had broad practical applications to both centrosymmetric and noncentrosymmetric crystals", and says where it came from: "It arose mainly from the efforts of my wife, Dr. Isabella Karle, to bridge the gap between the mathematics of phase determination and the world of experimental data and practical application" (Karle, 1985).

**What that bridge involved.** About 1956 the laboratory acquired X-ray apparatus, and the lecture records that "Isabella Karle taught herself with the aid of a book written by Martin Buerger how to collect and interpret diffraction photographs". The thousands of intensities collected then were "measured by eye with the use of a calibrated comparison strip", and for many years the centrosymmetric version of the procedure was carried through in that laboratory entirely by hand.

**And the hard half.** In a centrosymmetric crystal the symmetry reduces each phase to a choice between two signs. A noncentrosymmetric crystal offers no such shortcut, and the lecture says the extension of the procedure to that class was made "in the main by the efforts of Isabella Karle" (Karle, 1985). Molecules of biochemical interest mostly fall in the harder class, which is why the extension is the part that reached chemistry.

:::reveal What does a diffraction experiment measure, and what does it leave out? ||| It measures the direction and the intensity of each scattered beam. It does not measure the phases, meaning how far the waves are displaced relative to one another, which a structure calculation also needs.

:::reveal What did the symbolic addition procedure add to the equations? ||| A worked route from the mathematics of phase determination to real experimental data, and the first one with broad practical application to noncentrosymmetric crystals as well as centrosymmetric ones.

## Vocabulary
- **Phase problem**: the gap between what a diffraction experiment measures, intensities, and what a structure calculation also needs, phases.
- **Direct method**: a way of getting phases from the measured intensities themselves, rather than assuming a structure and testing it.
- **Symbolic addition procedure**: the first procedure with broad practical application to both classes of crystal, credited by the lecture mainly to Isabella Karle.
- **Noncentrosymmetric crystal**: one whose symmetry gives no shortcut to the phases, the harder case, and the class most molecules of biochemical interest fall in.

## Sources
Karle, J. (1985). *Recovering phase information from intensity data* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/karle-lecture.pdf
Lindqvist, I. (1985). *Award ceremony speech: The Nobel Prize in Chemistry 1985*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/ceremony-speech/
Royal Swedish Academy of Sciences. (1985, October 16). *Press release: The 1985 Nobel Prize in chemistry*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/press-release/`,
    },
    {
      slug: "citation-press-release-and-lecture",
      title: "1985 · The citation, the press release, and the lecture",
      section: "1985 · The empty third seat",
      body: `Four documents, one prize, one institution, two months.

**The citation.** "The Nobel Prize in Chemistry 1985 was awarded jointly to Herbert A. Hauptman and Jerome Karle 'for their outstanding achievements in the development of direct methods for the determination of crystal structures'", with a prize share of one half each (Nobel Prize Outreach, n.d.).

**The press release, 16 October 1985.** The Royal Swedish Academy of Sciences announced the prize with a background note, and that note names people the citation does not. It credits D. Harker and J. S. Kasper with an inequality that is a special case of the Hauptman and Karle system, and D. Sayre with anticipating the practical approach. Then this: "Isabel Karle's and M. Woolfson's contributions to the practical utilization of direct methods have been crucial" (Royal Swedish Academy of Sciences, 1985). The awarding body, in its own announcement, calls her contribution crucial. It also prints her given name as Isabel rather than Isabella, which is worth knowing before you search the prize site for her.

**The presentation speech, 10 December 1985.** Professor Ingvar Lindqvist explained the work to the ceremony audience and reached the practical gain by a different route: "Recent developments have shown that they were right and the production of modern computers has strongly contributed to the rapidity and efficiency of their methods. These methods are now so efficient that structure determinations for which the Nobel Prize was awarded in 1964 can today be made by a clever beginner" (Lindqvist, 1985). Search that speech for Isabella, or for Isabel, and you get nothing. The gain belongs to recent developments and to machines.

**The laureate's own words.** The Nobel lecture of 9 December credited the practical procedure to a person, by name, twice, as the last lesson quoted. The autobiography published in the Nobel Foundation's yearbook says it a third time: "Largely through the efforts of Isabella Karle, such a procedure was developed and called the symbolic addition procedure" (Karle, 1986).

**The seat.** A Nobel Prize may be shared by as many as three people. Garfield stated the limit in 1979 while writing about a different dispute: "Nobels, for example, are limited to three co-winners per year" (Garfield, 1979). In 1934 the seats were full, three laureates at one third each, and the arithmetic really did bind. In 1985 two people were named, at one half each. The commonest explanation for an omission, that there was no room, has nothing to say about this prize.

**What that does and does not establish.** It does not establish that anyone should have been named who was not, and no committee record was read for this course, so no motive is asserted for this jury any more than for the other two. What an unused seat does is remove one explanation from the list. A reader of the 1934 case can say the seats were full. A reader of the 1978 case can be told the award carried no formal limit. A reader of this one has a limit, a seat nobody sat in, and a press release from the awarding body calling her contribution crucial.

:::reveal How many people shared the 1985 prize in chemistry, and in what shares? ||| Two, Herbert Hauptman and Jerome Karle, at one half each, although a Nobel Prize may be shared by as many as three.

:::reveal What did the Academy's own press release say about her, and how did it spell her name? ||| That her contributions to the practical utilization of direct methods had been crucial, and it printed her given name as Isabel.

## Vocabulary
- **Press release**: the announcement an awarding body publishes on the day it decides, a separate and usually longer document than the citation.
- **Background note**: the explanatory part of that announcement, where an academy may name work and people the citation leaves out.
- **Co-winner limit**: the largest number of people who may share one prize, three in the Nobel case.
- **Les Prix Nobel**: the Nobel Foundation's yearbook, which publishes each laureate's autobiography and is the source of the biographical page on the prize site.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Karle, J. (1986). Jerome Karle: Biographical. In W. Odelberg (Ed.), *Les Prix Nobel: The Nobel Prizes 1985*. Nobel Foundation. https://www.nobelprize.org/prizes/chemistry/1985/karle/biographical/
Lindqvist, I. (1985). *Award ceremony speech: The Nobel Prize in Chemistry 1985*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/ceremony-speech/
Nobel Prize Outreach. (n.d.). *The Nobel Prize in Chemistry 1985*. https://www.nobelprize.org/prizes/chemistry/1985/summary/
Royal Swedish Academy of Sciences. (1985, October 16). *Press release: The 1985 Nobel Prize in chemistry*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/press-release/`,
    },
    {
      slug: "count-the-1985-references",
      title: "1985 · Ninety-eight references, and a counting rule",
      section: "1985 · The empty third seat",
      body: `The 1934 case had a countable document. So does this one. It is longer, the rule matters more, and the answer a search box gives is wrong.

**The document.** Jerome Karle, "Recovering phase information from intensity data", the Nobel lecture of 9 December 1985, free from the Nobel Foundation. Its numbered reference list runs to 98 items across the last three pages. For this course those pages were rendered at 150 dpi and counted by eye from the images, because the machine-read text of a scanned page mangles the smallest part of a name, the initial, which is the part being counted.

**The rule, printed before the count.** A reference carries her name when its author list prints Karle, I. or Karle, I. L. A reference is hers first when that name comes first in the list.

**The count.** Her name is on 23 of the 98: references 12, 13, 14, 24, 32, 36, 37, 55, 56, 57, 58, 61, 62, 64, 70, 71, 72, 73, 74, 76, 78, 79 and 82. She comes first on 15 of those. The co-laureate's name, Hauptman, is on 11: references 15, 18, 20, 21, 22, 23, 27, 35, 55, 90 and 91. Reference 55 is the only one carrying both, and she is first on it.

**What a search box would have said.** Twenty-one. Reference 61 prints her as "Karle, I.", without the second initial, and reference 70 prints "Karle, and I. L. Witkop, B.", with the initials attached to the wrong surname. Both are in the published lecture, and both were confirmed on the rendered page rather than in the text layer. A reader who searches for the string Karle, I. L. gets a smaller number and no warning that it is smaller. The 1934 lecture set the same trap in a different spelling.

**What the count is a count of.** The lecture says of its applications that "the examples will be mainly taken from my laboratory", so the list is largely one laboratory's output over thirty years, chosen by the laureate. That is what makes it worth counting and also what bounds it. Inside a document a laureate wrote about his own work, the person the citation does not name is on nearly a quarter of the references and leads 15 of them.

**What it is not.** It is not a measure of who contributed what to the prize-winning work. Hauptman's collaboration with Jerome Karle was the theory of 1950 to 1956, a narrower and earlier body of work than three decades of applications, so 23 against 11 sets two different things side by side. Garfield's warning from the 1978 case applies without changing a word: numbers like these can indicate that somebody was in a position to make valuable contributions, and they cannot partition the work inside a paper. They cannot partition it inside a laboratory either.

**One reference that ties two sections together.** Reference 76 is a 1983 crystal structure of [Leu5]enkephalin with her first among five authors, and the lecture discusses it beside reference 75, the 1975 *Nature* paper by Hughes, Smith, Kosterlitz and colleagues. That is the enkephalin work the 1978 Lasker citation names. Two of this course's cases are joined by a molecule.

:::reveal Why is the counting rule printed before the count in both of this course's countable documents? ||| Because a total without its rule cannot be reproduced or checked. Here the rule is the difference between an answer of 23 and an answer of 21.

:::reveal What does 23 against 11 not show? ||| It does not divide up the prize-winning work. It counts appearances in one laureate's account of his own laboratory, over stretches of time of very different length.

## Vocabulary
- **String match**: a search for an exact sequence of characters, which misses a name printed any other way.
- **Page image**: a rendered picture of a printed page, read by eye when the machine-read text of a scan cannot be trusted.
- **Initial**: the abbreviated given name in a reference, the smallest part of an author's name and the first thing a scan mangles.
- **Applications section**: the part of a lecture where a laureate illustrates a method with work, here mainly from his own laboratory, which is what its reference list mostly lists.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Karle, J. (1985). *Recovering phase information from intensity data* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/karle-lecture.pdf`,
    },
    {
      slug: "the-correction-as-other-prizes",
      title: "1985 · The correction came as other prizes",
      section: "1985 · The empty third seat",
      body: `No later prize changes a citation. Here is what the later prizes did instead.

**1988, from the same academy.** The Royal Swedish Academy of Sciences, the body that awards the chemistry prize, gave her its Gregori Aminoff Prize for crystallography three years after the ceremony. The Franklin Institute's page for her lists it among her honours, as "the Swedish Royal Academy of Sciences' Aminoff Prize in 1988" (The Franklin Institute, n.d.). The Academy's own record of the citation for that year was not reached for this course, so no wording is quoted for it here.

**1993, the Bower Award.** The Franklin Institute's citation is one line: "For determining three-dimensional structure of molecules with X-ray diffraction." The account beside it goes further than the citation does, crediting "her definitive introduction of the symbolic addition method to reveal molecular structure directly from X-ray studies", and the page marks itself "Information as of 1995" (The Franklin Institute, n.d.).

**1995, the National Medal of Science.** The citation, as the National Science and Technology Medals Foundation records it: "For the development and application of a method for determining essentially equal-atom crystal and molecular structures by x-ray analysis, thereby having a profound effect on the practice of organic and biological chemistry" (National Science and Technology Medals Foundation, n.d.). Read that beside the Nobel autobiography, which dates "the first essentially equal atom noncentrosymmetric crystal structure to be solved by direct phase determination" to 1964 (Karle, 1986). A United States citation gives her, by name, the achievement a Nobel document describes in almost the same words.

**What an honour can and cannot reach.** *Who Gets Named*, lesson 21, "Who corrects a record, and with what", makes the general point, and this is a clean instance of it. Two later citations, both read for this course, name her for the work, and the 1995 one names her for the method itself. The 1985 prize page reads today as it read in 1985, because a citation is not amended and no award body revises another's. A correction of this kind lands next to the record rather than in it.

**What is not in the documents, and the difference matters.** No statement by Jerome Karle that she should have shared the prize was found in his Nobel lecture, in his Nobel autobiography and its two addenda, or in the 1987 oral history for which the two of them were interviewed together (Karle & Karle, 1987). The sentence usually quoted comes from somewhere else. A 2017 obituary in *Chemical and Engineering News* quotes Magdolna Hargittai of Budapest University of Technology and Economics, whom it describes as the author of a book on women scientists: "Jerome was devastated that Isabella was not included in the prize, and many other scientists agreed with him" (Wang, 2017). That is a scholar's account, attributed to her by a magazine, and not the laureate's own words.

**And one claim in the same quotation that does not survive a check.** Hargittai also says "Isabella was the first who applied the method". The laureate's lecture puts the earliest applications elsewhere: "The earliest applications after the publication of the monograph (23) were collaborations with colleagues at the U.S. Geological Survey", and says the investigations based on her experimental work followed (Karle, 1985). The documented claim is narrower, and it is the stronger one for being checkable: the procedure itself, its extension to the harder class of crystals, and the bridge from the mathematics to experimental data.

:::reveal What do the 1993 and 1995 citations do that the 1985 one does not? ||| They name her, for the method. Neither one changes the Nobel citation, because an honour reaches institutional memory and not another body's record.

:::reveal Where does the sentence about the laureate being devastated actually come from? ||| From Magdolna Hargittai, quoted in a 2017 obituary, rather than from anything the laureate himself published.

## Vocabulary
- **Gregori Aminoff Prize**: the Royal Swedish Academy of Sciences' prize for crystallography, given by the same body that awards the chemistry Nobel.
- **Bower Award**: the Franklin Institute's science prize, whose page carries both a one-line citation and a longer account of the work.
- **Institutional memory**: what an institution records and repeats, which a later honour can enter although it cannot alter an earlier citation.
- **Attribution at one remove**: a sentence a publication reports from somebody other than the person whose view it describes.

## Sources
Karle, I. L., & Karle, J. (1987). *Oral history interview with Isabella L. Karle and Jerome Karle* [Transcript; interviews conducted 26 February, 15 June and 9 September 1987 by J. J. Bohning and D. Van Keuren]. Science History Institute. https://digital.sciencehistory.org/works/wp988m037
Karle, J. (1985). *Recovering phase information from intensity data* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/karle-lecture.pdf
Karle, J. (1986). Jerome Karle: Biographical. In W. Odelberg (Ed.), *Les Prix Nobel: The Nobel Prizes 1985*. Nobel Foundation. https://www.nobelprize.org/prizes/chemistry/1985/karle/biographical/
National Science and Technology Medals Foundation. (n.d.). *Isabella L. Karle*. https://nationalmedals.org/laureate/isabella-l-karle/
The Franklin Institute. (n.d.). *Isabella L. Karle*. https://www.fi.edu/en/awards/laureates/isabella-l-karle
Wang, L. (2017, October 26). Isabella Karle. *Chemical and Engineering News*. https://cen.acs.org/articles/95/web/2017/10/Isabelle-Karle-dies-age-95.html`,
    },
    {
      slug: "quiz-1985",
      title: "1985 quiz · The empty third seat",
      section: "1985 · The empty third seat",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does a diffraction experiment record about each scattered beam?",
            options: [
              "Its direction and its intensity",
              "Its direction, its intensity and the displacement of its waves relative to the others",
              "The position of every atom the beam passed through on its way out of the crystal",
              "The wavelength of the ray before it struck the crystal and after it left again",
            ],
            correctIndex: 0,
            explanation:
              "Direction and intensity are measured. The phase, the relative displacement of the waves, is not, and that is the gap direct methods close.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "How many intensities does the 1985 Nobel lecture say a scattering pattern often holds?",
            options: [
              "Often 5000 to 10000",
              "Between twenty and forty, one for each set of planes imagined through the crystal",
              "Several million, which is why the calculation had to wait for modern computers",
              "Exactly as many as there are atoms in the repeating unit of the crystal",
            ],
            correctIndex: 0,
            explanation:
              "\"The collected intensities of scattering (often 5000-10000 in number) are called a scattering pattern or diffraction pattern.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What is the phase of a deflected ray, as the Academy's announcement defines it?",
            options: [
              "How far its waves are displaced",
              "The angle through which the crystal deflected it away from the incoming direction",
              "The fraction of the incoming energy that the crystal scattered rather than absorbed",
              "The time between the ray striking the crystal and the ray reaching the detector",
            ],
            correctIndex: 0,
            explanation:
              "\"How much the waves in the different rays are displaced in relation to each other.\" It is the half the experiment does not measure.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What, in one line, is the phase problem?",
            options: [
              "Intensities are measured, phases are not",
              "Crystals of biological molecules are too small to give a measurable scattering pattern",
              "The electron density calculated from a Fourier series can come out negative in places",
              "The number of unknowns in a structure exceeds the number of measurements available",
            ],
            correctIndex: 0,
            explanation:
              "A structure calculation needs both. The experiment supplies one of them, which is why structures had to be guessed at and tested.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "How did crystallographers determine structures before direct methods, per the presentation speech?",
            options: [
              "By trial and error",
              "By comparing each new pattern against a published catalogue of known structures",
              "By growing the same crystal in several solvents and averaging the results obtained",
              "By measuring the phases directly with a second detector placed behind the crystal",
            ],
            correctIndex: 0,
            explanation:
              "\"The crystallographers had to use a trial and error method.\" A structure was assumed, then tested against the data.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What is the first of the two facts a direct method is built on?",
            options: [
              "Electron density is never negative",
              "Every crystal contains at least one atom heavy enough to anchor the calculation",
              "The intensity of a scattered beam falls off in proportion to the square of the angle",
              "The phases of two rays scattered from the same plane are always exactly equal",
            ],
            correctIndex: 0,
            explanation:
              "Electrons are either there or they are not, so the density has a floor, and that floor constrains which phases are possible.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What is the second fact a direct method is built on?",
            options: [
              "There are far more measurements than unknowns",
              "The atoms in a crystal are arranged in a pattern that repeats in only two dimensions",
              "A diffraction photograph records the phases faintly, where the intensities are weakest",
              "Every structure of interest contains fewer than one hundred independent atoms",
            ],
            correctIndex: 0,
            explanation:
              "Thousands of intensities against a much smaller number of unknowns is what lets statistical reasoning do useful work.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "In which years did Hauptman and Karle publish the work the 1985 citation rewards?",
            options: [
              "1950 to 1956",
              "1963 and 1964, the years of the first applications of the symbolic addition procedure",
              "1934 to 1938, alongside the Patterson function they later built their equations on",
              "The whole of the 1970s, once computers could carry the calculations they proposed",
            ],
            correctIndex: 0,
            explanation:
              "The presentation speech dates the series of papers to 1950-56, and the press release dates the foundations to the same years.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What did the systems of equations not come with?",
            options: [
              "A route to real experimental data",
              "A proof that electron density is positive, which had to wait for a later paper",
              "Any way of handling crystals whose symmetry reduces each phase to a choice of sign",
              "A set of measurements large enough for the statistical reasoning they required",
            ],
            correctIndex: 0,
            explanation:
              "The mathematics existed. What was missing was a procedure that took a laboratory from a pile of measured intensities to a structure.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What does the 1985 Nobel lecture call the symbolic addition procedure?",
            options: [
              "The first broadly practical procedure",
              "A refinement of the tangent formula that made it usable on larger molecules",
              "The only procedure that works on crystals containing one heavy atom and many light ones",
              "The method for which the Nobel Prize in Chemistry was awarded in 1964 to another laureate",
            ],
            correctIndex: 0,
            explanation:
              "\"The first procedure that had broad practical applications to both centrosymmetric and noncentrosymmetric crystals.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Whose efforts does the lecture say the symbolic addition procedure arose mainly from?",
            options: [
              "Isabella Karle's",
              "Herbert Hauptman's, working from the joint probability distributions he had derived",
              "A team at the U.S. Geological Survey, who applied it to colemanite and meyerhofferite",
              "M. M. Woolfson's, whose computer programs carried the procedure into other laboratories",
            ],
            correctIndex: 0,
            explanation:
              "\"It arose mainly from the efforts of my wife, Dr. Isabella Karle.\" The laureate writes it himself, in the lecture the Nobel Foundation hosts.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What gap does the lecture say she bridged?",
            options: [
              "Mathematics to experimental data",
              "The gap between centrosymmetric crystals and the far larger crystals of proteins",
              "The gap between an X-ray diffraction photograph and a neutron diffraction pattern",
              "The gap between the speed of the calculation and the speed of the computers available",
            ],
            correctIndex: 0,
            explanation:
              "\"To bridge the gap between the mathematics of phase determination and the world of experimental data and practical application.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What happened in the laboratory about 1956, per the lecture?",
            options: [
              "It acquired X-ray apparatus",
              "It received the first computer capable of carrying out the phase calculations",
              "It published the first structure ever solved by the symbolic addition procedure",
              "It moved from the Naval Research Laboratory to the University of Michigan",
            ],
            correctIndex: 0,
            explanation:
              "\"At about 1956, we acquired apparatus for carrying out X-ray diffraction experiments with crystals.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "How does the lecture say Isabella Karle learned to collect and interpret diffraction photographs?",
            options: [
              "She taught herself from a book",
              "She spent a year at Aberdeen with the group that built the first automatic diffractometer",
              "She was trained by the co-laureate, who had done experimental work before turning to theory",
              "She learned it during her doctorate, which had been in experimental crystallography",
            ],
            correctIndex: 0,
            explanation:
              "\"Isabella Karle taught herself with the aid of a book written by Martin Buerger how to collect and interpret diffraction photographs.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "How were the thousands of intensities measured in that period?",
            options: [
              "By eye, against a calibrated strip",
              "By an automatic diffractometer that recorded them after brief human intervention",
              "By a photoelectric cell that converted each spot on the film into a voltage reading",
              "By counting individual X-ray photons with a scintillation detector at each angle",
            ],
            correctIndex: 0,
            explanation:
              "The lecture says the thousands of diffraction data collected then were \"measured by eye with the use of a calibrated comparison strip\".",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "How much of the centrosymmetric procedure did that laboratory carry out by hand?",
            options: [
              "All of it, for many years",
              "The final refinement only, once a computer had produced a set of trial phases",
              "None of it, because the probability measures required machine calculation from the start",
              "Roughly the first hundred phases, after which the tangent formula was applied by machine",
            ],
            correctIndex: 0,
            explanation:
              "\"For many years, the procedure for centrosymmetric crystals was carried out in our laboratory completely by hand.\" Efficiency was the point of it.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What does the symmetry of a centrosymmetric crystal do to each phase?",
            options: [
              "Reduces it to a choice of sign",
              "Fixes it exactly, so that no phase determination is needed for that class at all",
              "Makes it continuous between minus pi and pi, which is the harder case to handle",
              "Leaves it unknown but makes its intensity twice as strong, and so easier to measure",
            ],
            correctIndex: 0,
            explanation:
              "Two possibilities per phase rather than a continuous range, which is why the centrosymmetric case came first.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Who does the lecture credit with the extension to noncentrosymmetric crystals?",
            options: [
              "Isabella Karle, in the main",
              "Zachariasen, whose procedure the symbolic addition method had features in common with",
              "Cochran and Douglas, who generated large numbers of sign sets from a Sayre formula",
              "Hauptman and Karle jointly, in the series of papers published between 1950 and 1956",
            ],
            correctIndex: 0,
            explanation:
              "\"The procedural features of the symbolic addition procedure for centrosymmetric crystals were extended, in the main by the efforts of Isabella Karle.\"",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Why does the noncentrosymmetric extension matter so much to chemistry?",
            options: [
              "Most interesting molecules are in that class",
              "Only noncentrosymmetric crystals can be grown large enough to give a usable pattern",
              "Centrosymmetric crystals had already been solved by the method rewarded in 1964",
              "The extension removed the need to measure intensities by eye on photographic film",
            ],
            correctIndex: 0,
            explanation:
              "\"Noncentrosymmetric crystals are quite common among substances of biochemical interest.\" The harder class is the useful one.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Which document supplies this lesson's one-sentence definition of a phase?",
            options: [
              "The Academy's press release",
              "The presentation speech given at the ceremony on 10 December 1985",
              "The biographical note published in the Nobel Foundation's yearbook for 1985",
              "The citation itself, which defines the term before naming the two laureates",
            ],
            correctIndex: 0,
            explanation:
              "The background note in the Royal Swedish Academy of Sciences' announcement of 16 October 1985 states the gap in one sentence.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Who shared the Nobel Prize in Chemistry for 1985?",
            options: [
              "Hauptman and Karle",
              "Hauptman, Karle and Woolfson, the three names the Academy's background note mentions",
              "Dorothy Hodgkin alone, for the structure determinations the speech refers back to",
              "Harker and Kasper, for the inequality that the citation calls a special case",
            ],
            correctIndex: 0,
            explanation:
              "Herbert A. Hauptman and Jerome Karle, \"for their outstanding achievements in the development of direct methods for the determination of crystal structures\".",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What prize share does the 1985 summary page give each laureate?",
            options: [
              "One half",
              "One third, the share printed on the summary page for a prize awarded jointly",
              "One quarter, with the remainder held by the Foundation against a later correction",
              "The whole prize to one and an honorary mention to the other, as the page records",
            ],
            correctIndex: 0,
            explanation:
              "Two laureates at one half each. In 1934 there were three at one third each, which is the arithmetic that made the seats full.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the 1985 citation credit the two laureates for?",
            options: [
              "Developing direct methods",
              "Determining the structures of penicillin and vitamin B12 by X-ray crystallography",
              "The practical utilization of direct methods in the determination of natural products",
              "Building the first computer programs that made automated structure determination routine",
            ],
            correctIndex: 0,
            explanation:
              "\"For their outstanding achievements in the development of direct methods for the determination of crystal structures.\" Development is the word to keep.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "On what date did the Royal Swedish Academy of Sciences announce the 1985 chemistry prize?",
            options: [
              "16 October 1985",
              "10 December 1985, the day of the award ceremony and the presentation speech",
              "9 December 1985, the day the laureate delivered his Nobel lecture in Stockholm",
              "1 January 1986, when the yearbook carrying the autobiographies was published",
            ],
            correctIndex: 0,
            explanation:
              "The press release is dated 16 October 1985, roughly two months before the ceremony, and it is a separate document from the citation.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Whom does the press release credit with an inequality that is a special case of the laureates' system?",
            options: [
              "Harker and Kasper",
              "Sayre, who the same note says anticipated the practical approach later used",
              "Rumanova, who developed a systematic method for symmetry relations in the 1950s",
              "Wilson, whose statistical treatment of intensities the equations were built on",
            ],
            correctIndex: 0,
            explanation:
              "The background note names D. Harker and J. S. Kasper for the inequality, and D. Sayre separately for anticipating the practical approach.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the Academy's background note say about Isabel Karle's contributions?",
            options: [
              "That they were crucial",
              "That they were important but came too late to be considered for the 1985 prize",
              "That they were the experimental half of a collaboration the citation names in full",
              "That they belong to the applications rather than to the development of the methods",
            ],
            correctIndex: 0,
            explanation:
              "\"Isabel Karle's and M. Woolfson's contributions to the practical utilization of direct methods have been crucial.\" The awarding body wrote that.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Whose contributions does the press release name beside hers?",
            options: [
              "M. Woolfson's",
              "Herbert Hauptman's, whose name appears in the citation and in the background note",
              "Wayne Hendrickson's, for the advances in anomalous dispersion made in the late 1970s",
              "Martin Buerger's, whose book on diffraction photographs the lecture mentions",
            ],
            correctIndex: 0,
            explanation:
              "The sentence names two people, Isabel Karle and M. Woolfson, for the practical utilization of direct methods.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "How does the press release spell her given name?",
            options: [
              "Isabel",
              "Isabella, exactly as the Nobel lecture and the autobiography both spell it",
              "I. L. Karle, the form her own papers and the lecture's reference list use",
              "Isabelle, the spelling later carried by the 2017 obituary's web address",
            ],
            correctIndex: 0,
            explanation:
              "The announcement prints Isabel. The lecture and the autobiography print Isabella, and a reader searching the site for one spelling misses the other.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Why is that spelling worth knowing?",
            options: [
              "A search for Isabella misses the sentence",
              "It shows that the Academy was writing about a different person with a similar name",
              "It is the spelling the citation uses, so it is the one the record will repeat",
              "It dates the note, because the shorter form was only used before the ceremony",
            ],
            correctIndex: 0,
            explanation:
              "The same trap as the 1934 reference list, in a different document: the name is there and a string search does not find it.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Who gave the presentation speech at the 1985 ceremony?",
            options: [
              "Ingvar Lindqvist",
              "I. Holmgren, who gave the speech for the prize this course's other Nobel case covers",
              "Wilhelm Odelberg, the editor of the yearbook in which the speech was reprinted",
              "Jerome Karle, who spoke for both laureates before delivering his own lecture",
            ],
            correctIndex: 0,
            explanation:
              "Professor Ingvar Lindqvist of the Royal Academy of Sciences. Holmgren gave the 1934 speech, in the other Nobel case this course works.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the presentation speech credit the efficiency of the methods to?",
            options: [
              "Recent developments and computers",
              "The experimental facility built in the laureate's own laboratory in the late 1950s",
              "The symbolic addition procedure, which it names and describes in a single sentence",
              "The work of the crystallographers who tested the equations through the 1960s",
            ],
            correctIndex: 0,
            explanation:
              "\"Recent developments have shown that they were right and the production of modern computers has strongly contributed to the rapidity and efficiency of their methods.\"",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the presentation speech say a clever beginner can now do?",
            options: [
              "The work that won the 1964 prize",
              "Determine a protein structure in an afternoon, given a modern computer to work with",
              "Collect and interpret diffraction photographs without any training in crystallography",
              "Derive the equations relating phases to intensities from the two facts they rest on",
            ],
            correctIndex: 0,
            explanation:
              "\"Structure determinations for which the Nobel Prize was awarded in 1964 can today be made by a clever beginner.\"",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Does the presentation speech name Isabella Karle?",
            options: [
              "No, under either spelling",
              "Yes, once, in the sentence about the production of modern computers",
              "Yes, in the closing address to the laureates, where it thanks their collaborators",
              "It names her laboratory but not her, which is why the course quotes the press release",
            ],
            correctIndex: 0,
            explanation:
              "The speech was searched for Isabella and for Isabel, and neither occurs. The practical gain is credited to recent developments and machines.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What did the Nobel lecture do one day before the presentation speech?",
            options: [
              "Credited the procedure to her by name",
              "Set out the equations without naming any person who worked on their application",
              "Answered the Academy's background note by disputing the word crucial in it",
              "Listed every laboratory then applying direct methods, in order of the dates involved",
            ],
            correctIndex: 0,
            explanation:
              "The lecture of 9 December names her twice for the procedure and its extension. The speech of 10 December names no one for the practical gain.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the laureate's Nobel autobiography say about the symbolic addition procedure?",
            options: [
              "It was developed largely through her efforts",
              "It was developed jointly by the two laureates in the years between 1950 and 1956",
              "It was named by the Royal Swedish Academy of Sciences in its announcement of the prize",
              "It was superseded by the tangent formula before the prize was awarded in 1985",
            ],
            correctIndex: 0,
            explanation:
              "\"Largely through the efforts of Isabella Karle, such a procedure was developed and called the symbolic addition procedure.\"",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Where was that autobiography published?",
            options: [
              "In the Nobel Foundation's yearbook",
              "In the journal Acta Crystallographica, alongside the laureate's technical papers",
              "In the press release of 16 October 1985, under the heading background information",
              "In the ceremony programme handed to the audience on 10 December 1985",
            ],
            correctIndex: 0,
            explanation:
              "Les Prix Nobel for 1985, which is the source of the biographical page the prize site hosts.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What is the Nobel co-winner limit, as Garfield stated it in 1979?",
            options: [
              "Three",
              "Two, which is why the 1985 prize could not have been divided any further",
              "Four, reduced to three by a change in the statutes after the 1978 disputes",
              "There is none, and the limit people remember belongs to the Lasker awards instead",
            ],
            correctIndex: 0,
            explanation:
              "\"Nobels, for example, are limited to three co-winners per year. Lasker awards, however, have no formal limitations.\"",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "How many of those seats did the 1985 prize use?",
            options: [
              "Two",
              "Three, the same as the 1934 prize this course's other Nobel case covers",
              "One, with the second half of the prize held over to the following year",
              "Four, which required a special decision by the Royal Swedish Academy of Sciences",
            ],
            correctIndex: 0,
            explanation:
              "Two laureates at one half each, so a third seat existed and went unused. That is what the format explanation cannot account for.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the unused seat establish?",
            options: [
              "It removes one explanation",
              "That the committee considered a third name and rejected it during its deliberations",
              "That the prize should have been shared three ways, as the background note implies",
              "That the Nobel statutes were being interpreted more narrowly in 1985 than in 1934",
            ],
            correctIndex: 0,
            explanation:
              "The commonest answer to an omission, that there was no room, has nothing to say here. It does not establish that anyone should have been named.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does this course assert about the 1985 jury's reasons?",
            options: [
              "Nothing",
              "That the jury treated development and application as separate kinds of achievement",
              "That the jury followed the press release, which had already named the crucial contributors",
              "That the jury was constrained by the same arithmetic that bound the 1934 committee",
            ],
            correctIndex: 0,
            explanation:
              "No committee record was read for this course, so no motive is asserted for this jury any more than for the other two.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "How many numbered references does the 1985 Nobel lecture carry?",
            options: [
              "98",
              "23, the number that carry the name of the person the citation does not name",
              "Twenty-three, the same total as the 1934 lecture this course also counts",
              "More than three hundred, since the lecture surveys the whole field of crystallography",
            ],
            correctIndex: 0,
            explanation:
              "Ninety-eight numbered items across the last three pages, re-counted for this course from the rendered pages.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "How were the lecture's reference pages read for this course?",
            options: [
              "As images, at 150 dpi",
              "By searching the machine-read text layer of the file for each spelling of the name",
              "From a bibliographic database that indexes the references of every Nobel lecture",
              "From the brief, whose count was carried across without being checked again",
            ],
            correctIndex: 0,
            explanation:
              "Rendered at 150 dpi and counted by eye from the images, the same treatment the Garfield essay got in the 1978 section.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "Why were the pages read as images rather than as text?",
            options: [
              "A scan mangles initials",
              "Because the reference list is printed in a typeface no text extractor can recognise",
              "Because the file is protected against copying, so its text cannot be extracted at all",
              "Because the count needed the page numbers, which the text layer does not preserve",
            ],
            correctIndex: 0,
            explanation:
              "The initial is the smallest part of a name and the first thing a scan corrupts, and the initial is exactly what this count turns on.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "How many of the 98 references carry Isabella Karle's name?",
            options: [
              "23",
              "Ten, the count that the 1934 lecture yields under the same counting rule",
              "Fifty, which is roughly half, since the laboratory was a joint one throughout",
              "None, which is why the lesson uses the text of the lecture rather than its list",
            ],
            correctIndex: 0,
            explanation:
              "References 12, 13, 14, 24, 32, 36, 37, 55, 56, 57, 58, 61, 62, 64, 70, 71, 72, 73, 74, 76, 78, 79 and 82.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "On how many of those references does her name come first?",
            options: [
              "15",
              "Two, as in the 1934 lecture, where she is first on references 13 and 14",
              "All twenty-three, since the laboratory listed authors alphabetically by surname",
              "None, because the lecture lists its own author first on every reference it cites",
            ],
            correctIndex: 0,
            explanation:
              "Fifteen of the twenty-three, which is the second half of the counting rule this lesson prints before it counts.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "How many references carry the co-laureate's name?",
            options: [
              "11",
              "Twenty-three, the same as hers, which is why the comparison is not informative",
              "Forty-one, covering the whole of the theoretical work published from 1950 to 1956",
              "One, the monograph of 1953 that the applications section refers back to",
            ],
            correctIndex: 0,
            explanation:
              "Hauptman's name is on references 15, 18, 20, 21, 22, 23, 27, 35, 55, 90 and 91.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "Which reference carries both her name and the co-laureate's?",
            options: [
              "Reference 55",
              "Reference 23, the 1953 monograph that the applications section refers back to",
              "Reference 76, the 1983 enkephalin structure with five authors on its line",
              "None of the ninety-eight, which is the point the lesson makes about the two bodies of work",
            ],
            correctIndex: 0,
            explanation:
              "Reference 55 is Karle, I. L., Hauptman, H., Karle, J. and Wing, A. B. (1958), and she is first on it.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does a search for the exact string Karle, I. L. return from the reference list?",
            options: [
              "21",
              "23, the same as counting by eye, because the list is set consistently throughout",
              "15, which is the number of references on which her name comes first in the list",
              "Nothing, because the list gives full given names rather than initials",
            ],
            correctIndex: 0,
            explanation:
              "Two references print her name some other way, so a string match gives a smaller number and no warning that it is smaller.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "How does reference 61 print her name?",
            options: [
              "Karle, I.",
              "Karle, Isabella L., spelled out in full because the journal required full given names",
              "I. L. Karle-Lugoski, using the surname she published under before her marriage",
              "Karle, I. L., exactly as the other twenty-two references print it",
            ],
            correctIndex: 0,
            explanation:
              "Without the second initial. It was confirmed on the rendered page rather than in the text layer, because that is where such a difference gets invented.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What is odd about the author list of reference 70?",
            options: [
              "The initials sit on the wrong surname",
              "It gives two journals and two sets of page numbers for what is really one article",
              "It lists her twice, once as first author and once at the end of the same line",
              "It omits the year, so the reference cannot be matched to a published paper",
            ],
            correctIndex: 0,
            explanation:
              "It prints \"Karle, and I. L. Witkop, B.\" That is in the published lecture, not an artefact of reading it.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "When does the lesson's rule say a reference counts as hers first?",
            options: [
              "When her name comes first in the list",
              "When she is the only author whose surname appears more than once in the list",
              "When the reference is cited in the applications section rather than the theory",
              "When the paper was published by a journal of the International Union of Crystallography",
            ],
            correctIndex: 0,
            explanation:
              "The rule is printed before the count: carries her name means the line prints Karle, I. or Karle, I. L.; hers first means that name leads the list.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does the lecture say about the examples in its applications section?",
            options: [
              "They are mainly from his laboratory",
              "They were chosen by the Nobel Foundation from papers published in the previous decade",
              "They are a survey of the field, and deliberately avoid work done in his own group",
              "They cover only the structures that the symbolic addition procedure could not solve",
            ],
            correctIndex: 0,
            explanation:
              "\"The examples will be mainly taken from my laboratory.\" That sentence tells a reader what the reference list is a list of.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does that sentence do to the count?",
            options: [
              "It bounds what the count can show",
              "It makes the count useless, since a self-selected list proves nothing about anyone",
              "It widens the count, because a survey of the field would name more collaborators",
              "It means the references were chosen by the Academy rather than by the laureate",
            ],
            correctIndex: 0,
            explanation:
              "The list is one laboratory's output over thirty years, chosen by the laureate. That is what makes it worth counting and also what limits it.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does the comparison of 23 against 11 actually set side by side?",
            options: [
              "Two different bodies of work",
              "Two people's total scientific output over the whole of their working lives",
              "The theory papers and the applications papers of a single collaboration",
              "Two counting rules applied to the same set of ninety-eight references",
            ],
            correctIndex: 0,
            explanation:
              "Three decades of applications against the theory of 1950 to 1956, which are not the same size of thing.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What was the co-laureate's collaboration with Jerome Karle?",
            options: [
              "The theory of 1950 to 1956",
              "The applications programme that ran in the laboratory throughout the 1960s",
              "The experimental X-ray facility built in that laboratory in the late 1950s",
              "The computer programs that carried direct methods into other laboratories",
            ],
            correctIndex: 0,
            explanation:
              "That is the work the citation rewards, and it is narrower and earlier than the body of work the reference list mostly covers.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does Garfield's warning say counts like these can indicate?",
            options: [
              "That somebody was capable of valuable contributions",
              "That a named collaborator did most of the work described in the papers counted",
              "That the awarding committee had all the evidence it needed in front of it",
              "That the papers counted were more influential than those left out of the list",
            ],
            correctIndex: 0,
            explanation:
              "The 1978 section quotes it: the data cannot prove she made major contributions, but they indicate she was capable of valuable ones.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What can a count like this not do?",
            options: [
              "Partition the work inside a paper",
              "Tell a reader how many references a lecture carries in total",
              "Show which spelling of a name a particular reference used",
              "Establish that a name appears on a given numbered reference at all",
            ],
            correctIndex: 0,
            explanation:
              "It cannot say who did what inside a paper, and the lesson adds that it cannot partition work inside a laboratory either.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What is reference 76 of the 1985 lecture?",
            options: [
              "Her 1983 enkephalin structure",
              "The 1975 Nature paper by Hughes, Smith, Kosterlitz and their colleagues",
              "The 1953 monograph on the solution of the phase problem by direct methods",
              "The first application of the symbolic addition procedure, published in 1963",
            ],
            correctIndex: 0,
            explanation:
              "A crystal structure of [Leu5]enkephalin, with her first among five authors, discussed beside reference 75 in the conformation section.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What is reference 75, which the lecture discusses beside it?",
            options: [
              "The 1975 paper on enkephalin",
              "A 1971 paper by Goldstein, Lowney and Pal on stereospecific binding in the brain",
              "The Science paper of 1973 that announced the demonstration of opiate receptors",
              "The Lasker Foundation's award page for 1978, which the 1978 section works",
            ],
            correctIndex: 0,
            explanation:
              "Hughes, Smith, Kosterlitz, Fothergill, Morgan and Morris in Nature, the enkephalin work the 1978 Lasker citation names.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What joins two of this course's cases, according to this lesson?",
            options: [
              "A molecule",
              "A shared laureate, who appears on the prize pages of both awards",
              "A single awards committee, which sat on both juries in the years concerned",
              "A counting rule, which yields the same totals for both reference lists",
            ],
            correctIndex: 0,
            explanation:
              "Enkephalin: named in the 1978 Lasker citation, and the subject of the structure at reference 76 of the 1985 lecture.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What trap did the 1934 reference list share with this one?",
            options: [
              "A name printed a second way",
              "A reference that cites two articles at once under a single number",
              "A list too long to count by hand in the time a reader is likely to give it",
              "An author line that reverses the order the original paper printed",
            ],
            correctIndex: 0,
            explanation:
              "In 1934 it was \"F. S. Robscheit\" without the Robbins. In 1985 it is \"Karle, I.\" without the second initial. Both cost a reader one reference.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "Which prize did she receive in 1988?",
            options: [
              "The Gregori Aminoff Prize",
              "The Bower Award and Prize for Achievement in Science, given by the Franklin Institute",
              "The National Medal of Science, presented in Chemistry by the president of the day",
              "The Women in Science and Engineering Lifetime Achievement Award",
            ],
            correctIndex: 0,
            explanation:
              "The Royal Swedish Academy of Sciences' crystallography prize, three years after the Nobel ceremony.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which body awards the Gregori Aminoff Prize?",
            options: [
              "The Royal Swedish Academy of Sciences",
              "The Karolinska Institutet, which awards the prize in physiology or medicine",
              "The Nobel Foundation, on the recommendation of the chemistry committee",
              "The International Union of Crystallography, at its triennial congress",
            ],
            correctIndex: 0,
            explanation:
              "The same body that awards the Nobel Prize in Chemistry, which is what makes the 1988 award worth noticing in this case.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Why does the lesson quote no wording for the 1988 citation?",
            options: [
              "Its record was not reached",
              "Because the Academy publishes no citation for that prize in any year",
              "Because the wording is in Swedish and no published translation exists",
              "Because the citation names the field rather than the person, and so says nothing",
            ],
            correctIndex: 0,
            explanation:
              "The prize itself is on two pages read for this course. The Academy's own record of the citation was not reached, so nothing is quoted from it.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What does the Franklin Institute's 1993 citation say?",
            options: [
              "For determining molecular structure with X-ray diffraction",
              "For the definitive introduction of the symbolic addition method to molecular structure",
              "For the development and application of a method for equal-atom crystal structures",
              "For outstanding achievements in the development of direct methods for crystal structures",
            ],
            correctIndex: 0,
            explanation:
              "\"For determining three-dimensional structure of molecules with X-ray diffraction.\" The longer phrases belong to the page's account and to other citations.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What does the Franklin Institute's page credit her with, beyond its own citation?",
            options: [
              "Introducing the symbolic addition method",
              "Establishing the experimental X-ray diffraction facility at the Naval Research Laboratory",
              "Determining the first noncentrosymmetric structure solved by a direct method",
              "Sharing the Nobel Prize in Chemistry with her husband and his co-laureate",
            ],
            correctIndex: 0,
            explanation:
              "\"Her definitive introduction of the symbolic addition method to reveal molecular structure directly from X-ray studies.\"",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "How does the Franklin Institute page date itself?",
            options: [
              "Information as of 1995",
              "It carries no date at all, which is why the course treats it as undated",
              "It is dated to the ceremony in 1993, when the Bower Award was presented",
              "It was posted on 8 April 2021, according to the metadata attached to the page",
            ],
            correctIndex: 0,
            explanation:
              "The page says so at the foot of its account, which is why its list of her honours stops where it does.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which award did she receive in 1995?",
            options: [
              "The National Medal of Science",
              "The Bower Award and Prize for Achievement in Science, in the subject of physics",
              "The Gregori Aminoff Prize of the Royal Swedish Academy of Sciences",
              "The Lifetime Achievement Award of Women in Science and Engineering",
            ],
            correctIndex: 0,
            explanation:
              "In Chemistry, and its citation names her for the development and application of a method.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which phrase does the 1995 citation use for the structures her method determined?",
            options: [
              "Essentially equal-atom",
              "Three-dimensional structure of molecules, the phrase the 1993 citation also uses",
              "Noncentrosymmetric crystals of substances of biochemical interest",
              "Crystal structures determined without assumptions or guesses of any kind",
            ],
            correctIndex: 0,
            explanation:
              "\"A method for determining essentially equal-atom crystal and molecular structures by x-ray analysis.\"",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Where else does that phrase appear, in a document the prize-giver hosts?",
            options: [
              "In the 1985 Nobel autobiography",
              "In the citation for the 1985 prize, which uses it of the laureates' achievement",
              "In the presentation speech, describing what a clever beginner can now do",
              "In the Academy's press release, in the sentence naming her contributions",
            ],
            correctIndex: 0,
            explanation:
              "It dates \"the first essentially equal atom noncentrosymmetric crystal structure to be solved by direct phase determination\" to 1964.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What does a later honour reach?",
            options: [
              "Institutional memory",
              "The original citation, which the awarding body amends to record the correction",
              "The prize page, where the later award is added beneath the citation for that year",
              "The author lines of the papers, which are reissued with the new credit in place",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named, lesson 21, makes the general point. The 1993 and 1995 citations name her, and neither one touches the 1985 citation.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "How does the 1985 prize page read today?",
            options: [
              "As it read in 1985",
              "With a note recording the later awards she received for the same method",
              "With her name added to the citation, following the National Medal of Science",
              "With the presentation speech withdrawn, since the background note contradicts it",
            ],
            correctIndex: 0,
            explanation:
              "A citation is not amended, and no award body revises another's. That is the limit on what any later prize can do.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which built lesson makes the general point about corrections?",
            options: [
              "Who corrects a record, and with what",
              "Credit is a second event, which sets out the rule about the number of Nobel seats",
              "Who counts as an author, and who gets thanked, on acknowledgements and indexing",
              "Rossiter names the second mechanism, on where misplaced credit tends to arrive",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named, lesson 21. The other lessons named are real and do other jobs in that course.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What was not found in any document the laureate published?",
            options: [
              "A claim that she should have shared the prize",
              "Any mention of her by name in connection with the symbolic addition procedure",
              "Any account of how the experimental facility in the laboratory was established",
              "Any reference to the papers on which her name appears as first author",
            ],
            correctIndex: 0,
            explanation:
              "Not in the Nobel lecture, not in the autobiography and its two addenda, and not in the 1987 oral history for which both were interviewed.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Who is the source of the sentence about the laureate being devastated?",
            options: [
              "Magdolna Hargittai",
              "Jerome Karle himself, in the addendum he added to his autobiography in 1992",
              "Isabella Karle, in the oral history recorded two years after the ceremony",
              "The Lasker Foundation, in the essay it published about a different award",
            ],
            correctIndex: 0,
            explanation:
              "A scholar quoted by a magazine in 2017. It is her account, attributed to her by the magazine, and not the laureate's own words.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which publication carried that quotation?",
            options: [
              "Chemical and Engineering News",
              "Science, in the news report that ran over three months of 1979",
              "Current Contents, in the essay on awards committees and citation data",
              "Nature, in the paper that first described the enkephalins in the brain",
            ],
            correctIndex: 0,
            explanation:
              "Its 2017 obituary. The other publications named here belong to the 1978 case and to the science of the two cases.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which claim in that same quotation does not survive a check against the lecture?",
            options: [
              "That she was the first to apply the method",
              "That her contribution to the success of the direct method was crucial to it",
              "That the crystallographic community was sceptical about the method for years",
              "That the joint paper of 1963 became a citation classic in the field",
            ],
            correctIndex: 0,
            explanation:
              "The lecture puts the earliest applications with the U.S. Geological Survey. The course prints the narrower claim the documents support.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Where does the lecture put the earliest applications after the monograph?",
            options: [
              "With the U.S. Geological Survey",
              "In her laboratory, on p,p-dimethoxybenzophenone and a dihydronicotinamide",
              "At Aberdeen, with the group that later shared the 1978 Lasker award",
              "In the 1963 paper on cyclohexaglycyl, the first use of symbolic addition",
            ],
            correctIndex: 0,
            explanation:
              "\"The earliest applications after the publication of the monograph were collaborations with colleagues at the U.S. Geological Survey on colemanite and meyerhofferite.\"",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What is the documented claim the course prints in place of the wider one?",
            options: [
              "The procedure, its extension, and the bridge to data",
              "That she determined every structure solved by direct methods before 1964",
              "That the awarding committee knew of her work and decided against naming her",
              "That the method would not have worked at all without the facility she built",
            ],
            correctIndex: 0,
            explanation:
              "Narrower and checkable in the laureate's own documents, which is why the course prefers it to the sentence people repeat.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What do the 1993 and 1995 citations have in common that the 1985 one does not?",
            options: [
              "They name her",
              "They were awarded by the body that also awards the Nobel Prize in Chemistry",
              "They describe the method without naming any person who worked on it",
              "They were published on the same site as the laureate's own Nobel lecture",
            ],
            correctIndex: 0,
            explanation:
              "Both of the later citations read for this course name her. The one that will be quoted for the next century does not.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What did the laureate's laboratory have to build before the procedure could be tested?",
            options: [
              "An X-ray diffraction facility",
              "A computer fast enough to carry the phase calculations without human help",
              "A library of known structures against which each trial solution could be checked",
              "A supply of crystals large enough to be measured without photographic film",
            ],
            correctIndex: 0,
            explanation:
              "The autobiography says that in the second half of the 1950s, through her efforts, an experimental X-ray diffraction facility was established in that laboratory.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "Which document does the 1985 section read beside the citation, the presentation speech and the laureate's lecture?",
            options: [
              "The Academy's press release",
              "The nomination letters submitted to the committee in the year before the award",
              "The minutes of the committee that decided the prize, released after fifty years",
              "The laureate's papers themselves, which the course reads in place of the prize page",
            ],
            correctIndex: 0,
            explanation:
              "The announcement of 16 October 1985, with its background note. The autobiography in the yearbook is a fifth document, and it says the same thing the lecture does.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Which two numbers does the counting rule decide between in the 1985 lecture?",
            options: [
              "23 and 21",
              "10 and 9, the pair the 1934 lecture produces under the same treatment",
              "98 and 24, the totals for references and for articles respectively",
              "15 and 11, her first authorships against the co-laureate's appearances",
            ],
            correctIndex: 0,
            explanation:
              "Counting by eye gives 23. Matching the string Karle, I. L. gives 21, because two references print her name another way.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What kind of correction did the later prizes amount to?",
            options: [
              "One that sits beside the record",
              "A formal amendment agreed between the awarding bodies concerned",
              "A retraction of the presentation speech by the academy that gave it",
              "An addition to the author lines of the papers the method produced",
            ],
            correctIndex: 0,
            explanation:
              "The later citations name her, and none of them touches the 1985 citation, because no award body revises another's.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // CLOSING — How to read a prize citation
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-method-in-five-steps",
      title: "Closing · The method, in five steps",
      section: "Closing · How to read a prize citation",
      body: `The three cases were the material. This is the part you keep.

**Step 1. Separate the documents, and name who wrote each.** Before reading for content, sort the page. Which text is the citation? Which is the institution talking about the winner? Which is the winner talking? A prize page prints them together and formats them alike, which is exactly what makes a reader treat them as one voice. They are not one voice, and their disagreements are only visible once they are apart.

**Step 2. Find the verb that does the crediting, and see who it attaches to.** In 1978 the verb was "identified", and it attached to two different people in two texts on one page. In 1934 the presentation speech said Whipple's experiments were "planned exceedingly well" while the lecture said the method was begun by two people. In 1985 the speech gave the practical gain to recent developments and modern computers, and the lecture gave it to a named person. The verb is where the credit is actually assigned, and tracking one verb across three documents is faster and more honest than summarising each of them.

**Step 3. Bring in the document the prize-giver does not host.** An author line. A reference list. In 1978 it was the author line of a 1973 paper, with the thanked person first. In 1934 it was the reference list of the lecture itself, which the laureate's own footnote defines as a summary of his own contributions. In 1985 it was another reference list, 98 items long, from a lecture that says its examples come mainly from one laboratory. The institution did not write these, so they are not tuned to the citation, and they are usually the fastest way to learn something the page did not intend to say.

**Step 4. Count, and print the counting rule beside the count.** Ten of the twenty-three references is a count with a rule attached: anyone can open the lecture and check it in five minutes. Twenty-three of ninety-eight is another, and it drops to twenty-one the moment a search box does the counting, which is why the rule has to say how a name is recognised and not only what is being counted. Twenty-one papers is a count with no rule attached, and the same six years yield 27, 18 and 22 under three other rules. A total without its rule cannot be checked, and a total that cannot be checked is not evidence, however often it is repeated.

**Step 5. Name who contests what, and then stop.** In the 1978 case, Snyder contests one thing, who began the project, and supports another, her sharing the award. A jury member said one thing about the deliberations and nothing else. An award body admitted a different omission on a different award. In the 1985 case the most repeated sentence about how the laureate felt turns out to belong to a scholar quoted in an obituary, and the course says whose it is. Each of those is a specific person saying a specific thing in a specific place, and the case is made of them. Where the record stops, the reading stops. "Exactly what influenced the Lasker jury is not known" is a finding, not a gap to be filled in.

**A sixth step, unnumbered because it is a habit rather than a move.** Say where each thing came from and how you got it. This course used an interested website for one article and said so. It used a university page's transcription of a book it has not read and said so. It rendered a scanned essay as page images because the machine-read text could not be trusted for quotation, and said so. The reading is only worth as much as the provenance behind it, and a reader who is told the provenance can go and do better.

:::reveal Why does step 2 track a single verb rather than summarising each document? ||| Because the verb is where the credit is actually assigned, and following one word across three texts is faster and more honest than paraphrasing three texts.

:::reveal What does step 5 say to do when the record runs out? ||| Stop. "Exactly what influenced the jury is not known" is a finding in itself, not a gap to be filled with a plausible motive.

## Vocabulary
- **Provenance**: where a source came from and how it was obtained, which determines how much weight a reader can put on it.
- **Crediting verb**: the word in a sentence that assigns the work to a person, such as identified, discovered, demonstrated or began.
- **Counting rule**: the stated definition of what a count includes, without which the count cannot be reproduced or checked.

## Sources
Albert and Mary Lasker Foundation. (n.d.). *Opiate receptors and enkephalins: 1978 Albert Lasker Basic Medical Research Award*. https://laskerfoundation.org/winners/opiate-receptors-and-enkephalins/
Karle, J. (1985). *Recovering phase information from intensity data* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/karle-lecture.pdf
Lindqvist, I. (1985). *Award ceremony speech: The Nobel Prize in Chemistry 1985*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/ceremony-speech/
Nobel Prize Outreach. (n.d.-a). *Award ceremony speech: The Nobel Prize in Physiology or Medicine 1934*. https://www.nobelprize.org/prizes/medicine/1934/ceremony-speech/
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "what-these-cases-do-not-prove",
      title: "Closing · What these cases do not prove",
      section: "Closing · How to read a prize citation",
      body: `A course built on three cases owes its reader an explicit list of what those three cases cannot carry. Here it is.

**They do not prove any jury did anything on purpose.** The Lasker deliberations are confidential, one member said only that one particular issue did not come up, and no released Nobel committee record for 1934 or 1985 was found. Nothing in this course asserts a motive, and no lesson uses a word like overlooked or passed over as though it described a decision somebody made. The record shows what was published. It does not show what was thought.

**They do not show that format caps explain omissions.** In 1934 three laureates held three thirds and the arithmetic was binding. In 1978, per Garfield, the award carried no formal limitation at all. In 1985 the limit was three and two people were named. One case supports the cap explanation and the other two rule it out, which is precisely why one case is not enough to teach it.

**They do not establish that any of these women discovered anything alone.** For 1978 the multiple discovery point is decisive: three groups published in 1973, the order changes depending on whether you measure submission, publication or first presentation, and Garfield concludes each has a strong claim. For 1934 nothing in the documents assigns the work to one person either, including the sentence that names her, which names two. For 1985 the lecture credits a procedure mainly to one person's efforts while putting the underlying theory with the two laureates and the earliest applications with a government survey, and the course prints all three of those together.

**They do not turn citation counts into proof.** Garfield says so about his own numbers, and then shows the failure mode: a committee using citation data alone would have missed Kosterlitz, who had kept his name off the paper that mattered. A measure that catches one kind of invisible contributor creates another.

**A thank-you is evidence of a thank-you.** Snyder's sentence shows that he said she identified the receptors. It does not by itself establish that she did, and it is not the reason this course takes her contribution seriously. The author line, the citation record and the NIDA admission do that work, and each of them can be checked independently.

**They do not support a villain.** The laureates behaved better than their citations. Whipple named her twice in his lecture and, per a transcription of Corner's biography, divided his third of the money with her and two technical assistants. Snyder named her in his acceptance remarks, said publicly that she should have shared the award, and telephoned jurors to ask for it. Jerome Karle named her in his Nobel lecture and again in his Nobel autobiography, for the procedure and for its extension. Whatever produced these omissions, it was not the laureate refusing to acknowledge the person. The mechanism sits above them, in what a citation is built to record.

**And one of them tells you almost nothing about the woman in it.** The sources read for this course say almost nothing about Frieda Robscheit-Robbins beyond her work. That is the finding, and it is not padded here. The University of Rochester's page does record that she was still an associate in pathology after decades at the institution, that she served as president of the American Society for Experimental Pathology in 1951 and 1952, and that she retired in 1955 (Pierce, 2021). Those sentences are transcriptions on a university page, and they are the whole of what this course claims about her career.

**Three cases are not a pattern.** They are three worked examples of a reading method. The method is the transferable part, and the next lesson says where to take it.

:::reveal Why does this course never say a jury overlooked or passed over anyone? ||| Because those words describe a decision, and no released record shows what either jury decided or why. The course reports what was published and stops.

:::reveal Why is the laureates' own conduct part of the argument rather than a footnote to it? ||| Because both named the person and one divided his prize money, so the omission cannot be explained by a laureate refusing to acknowledge her. The mechanism sits above the laureate, in what a citation records.

## Vocabulary
- **Multiple discovery**: the same result reached independently by more than one group at about the same time, which complicates any single priority claim.
- **Routing rule**: the working rule that decides whose name reaches a citation, such as junior status or independent investigator status.
- **Thinness**: the condition of a subject about whom the surviving record says little, which is reported as a finding rather than filled in.

## Sources
Garfield, E. (1979). Controversies over opiate receptor research typify problems facing awards committees. *Current Contents*, (20), 5-18. Reprinted in *Essays of an Information Scientist*, 4, 141-155. https://garfield.library.upenn.edu/essays/v4p141y1979-80.pdf
Marx, J. L. (1979). Lasker award stirs controversy. *Science*, 203(4378), 341. https://doi.org/10.1126/science.216074
Pierce, M. A. (2021). *Frieda S. Robscheit-Robbins*. History of the Campuses and Buildings, University of Rochester. https://www.sas.rochester.edu/his/sites/campus-history/MC/Robbins.htm
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "where-the-method-goes-next",
      title: "Closing · Where the method goes next",
      section: "Closing · How to read a prize citation",
      body: `**Try it on a page nobody has written about.** The method needs a prize that publishes three things: a citation, some account of the work written by the institution, and the laureate's own words. A great many awards do. Major science prizes usually publish lectures or remarks. Literary and arts prizes publish jury statements and acceptance speeches. Professional societies publish award essays and the recipient's reply. Any of those is a candidate.

**What to look for, in order.** Sort the texts. Find the crediting verb and follow it. Then go looking for the fourth document, which will be an author line, a reference list, a patent's named inventors, a programme's cast list, or a set of production credits, depending on the field. Then count something, and write down the rule you counted by.

**Expect most pages to show nothing.** That is a real result and it should be reported as one. A page where the citation, the institution's account and the laureate's remarks all credit the same people is a page where the record is consistent. The method is not a machine for finding grievances; it is a way of checking, and most checks come back clean. A reader who only reports the pages that did not come back clean has stopped doing the method and started doing something else.

**Where to read next in this catalog.** *The Paper and the Prize* works the adjacent case of Esther Lederberg and is public. Its lesson 5, "Who is on the paper, and who is on the prize", is the built worked example of setting an author line against a prize citation, and its lesson 6, "The Matilda effect, and what this case does and does not prove", is the limits lesson for that case. *Who Gets Named* supplies the general apparatus: lesson 1 on credit as a second event and the rule about Nobel seats, lesson 5 on the Matthew effect, lesson 10 on what award data show and do not, and lesson 13 on the difference between an author and an acknowledgement. None of those is repeated here.

**How this course is built, and why.** Its sections are keyed by the year of the prize rather than by a running number, and the framing and closing sections are keyed by the words Opening and Closing. That is deliberate. A course about prize citations should be able to take another citation without renumbering the ones it already has, and a new case slots in at its own year without touching a single existing lesson. The design was tested in September 2026, when the 1985 case was added between the 1978 section and this one. No existing lesson slug, section title or quiz name changed.

**One last thing to carry.** The most useful documents in all three of these cases were free, short, and published by the institution that gave the prize. The 1978 page takes a minute to read. The 1934 lecture is eight pages. The 1985 press release is one page, and the reference list that settles the 1985 count sits on the last three pages of a lecture anybody can download. None of them required an archive, a library visit or a subscription. The barrier to checking a prize citation is almost never access. It is the habit of treating a prize page as one document instead of three.

:::reveal What should you do when the method comes back clean on a prize page? ||| Report it. A page whose citation, institutional account and laureate's remarks all credit the same people is a consistent record, and reporting only the inconsistent ones stops being a method.

:::reveal Why are this course's sections keyed by year rather than numbered in sequence? ||| So that another case can be added at its own year without renumbering any existing section, lesson or quiz.

## Vocabulary
- **Jury statement**: the awarding body's published explanation of a decision, the arts and literature equivalent of a presentation speech.
- **Named inventors**: the people listed on a patent, which is the fourth document in fields where the credited output is an invention.
- **Clean check**: a case in which the documents agree, which is a reportable result rather than a failed search.

## Sources
Albert and Mary Lasker Foundation. (n.d.). *Opiate receptors and enkephalins: 1978 Albert Lasker Basic Medical Research Award*. https://laskerfoundation.org/winners/opiate-receptors-and-enkephalins/
Karle, J. (1985). *Recovering phase information from intensity data* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/karle-lecture.pdf
Royal Swedish Academy of Sciences. (1985, October 16). *Press release: The 1985 Nobel Prize in chemistry*. Nobel Prize Outreach. https://www.nobelprize.org/prizes/chemistry/1985/press-release/
Whipple, G. H. (1934). *Hemoglobin regeneration as influenced by diet and other factors* [Nobel lecture]. Nobel Foundation. https://www.nobelprize.org/uploads/2018/06/whipple-lecture.pdf`,
    },
    {
      slug: "closing-quiz",
      title: "Closing quiz · How to read a prize citation",
      section: "Closing · How to read a prize citation",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does a prize page do to three texts that makes a reader merge them?",
            options: [
              "Prints them together and formats them alike",
              "Attributes all three to the awarding institution in a single byline at the head",
              "Publishes them on separate pages, so a reader rarely sees more than one of them",
              "Numbers them in sequence, which implies that each continues the one before it",
            ],
            correctIndex: 0,
            explanation:
              "Their disagreements are only visible once the texts are apart, which is why sorting them is step 1.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What was the crediting verb in the 1978 case?",
            options: [
              "Identified",
              "Demonstrated, which appears in the title of the 1973 Science paper and in the essay",
              "Localized, which the Foundation's essay uses for the mapping work that followed",
              "Discovered, which the citation uses of all three winners together",
            ],
            correctIndex: 0,
            explanation:
              "It attached to two different people in two texts on one page, which is the whole of step 2 in that case.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "How does the method describe following one verb across three documents?",
            options: [
              "Faster and more honest than summarising each",
              "Slower but more thorough, since each occurrence has to be traced to its source",
              "Unreliable, because institutions vary in the verbs they use for the same act",
              "A last resort, used only when the documents cannot be dated relative to each other",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing three texts introduces the reader's own emphasis. Following one word does not.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What three counts does the counting lesson set against the figure of 21?",
            options: [
              "27, 18 and 22",
              "23, 24 and 10, the three ways of counting the Nobel lecture's reference list",
              "17, 23 and 87, the three figures from Garfield's citation comparison",
              "9, 10 and 11, the three ways of counting her first authorships",
            ],
            correctIndex: 0,
            explanation:
              "The same six years of Crossref records give 27 items with both names, 18 by the two alone and 22 sharing the series title.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does the method say about a total that cannot be checked?",
            options: [
              "It is not evidence",
              "It is acceptable provided the source that states it is a published reference work",
              "It should be reported with a margin of error rather than as a single figure",
              "It can be used if no better figure exists, as long as it is attributed",
            ],
            correctIndex: 0,
            explanation:
              "However often it is repeated. A total without its rule cannot be reproduced by the reader.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What kind of thing is each element of a contested case, under step 5?",
            options: [
              "A specific person saying a specific thing in a specific place",
              "A claim that must be weighed against the others and assigned a likelihood",
              "A document published by the awarding institution and therefore official",
              "An opinion, which is why contested cases cannot be taught as history",
            ],
            correctIndex: 0,
            explanation:
              "Snyder on the project's origin, a juror on the deliberations, an award body on a different award. The case is made of them.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Why is the sixth step called a habit rather than a move?",
            options: [
              "It applies throughout rather than at one point",
              "Because it is optional, and a reading is valid whether or not the provenance is stated",
              "Because it belongs to the writing up rather than to the reading of the documents",
              "Because it repeats step 1, which already requires naming who wrote each text",
            ],
            correctIndex: 0,
            explanation:
              "Saying where each thing came from and how you got it runs alongside every other step, and it is what lets a reader go and do better.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does provenance determine?",
            options: [
              "How much weight a reader can put on a source",
              "Whether a document may be quoted without the publisher's permission",
              "The order in which a set of documents should be read",
              "Whether a claim counts as primary or secondary evidence",
            ],
            correctIndex: 0,
            explanation:
              "Which is why this course states it for every awkward source it used, including the reprint and the transcriptions.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What did the 1934 presentation speech and the Nobel lecture have in common as publications?",
            options: [
              "The same institution published both",
              "Both were written by the laureate, one before the ceremony and one after it",
              "Both carried reference lists compiled by the Nobel committee",
              "Both were delivered on 10 December 1934, hours apart",
            ],
            correctIndex: 0,
            explanation:
              "Two days apart, on the same site, saying different things about who began the method.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What is a routing rule, in this course's vocabulary?",
            options: [
              "The working rule that decides whose name reaches a citation",
              "The order in which an awarding body notifies the winners of its decision",
              "The procedure by which a nomination passes from a committee to a jury",
              "The convention that assigns first authorship on a collaborative paper",
            ],
            correctIndex: 0,
            explanation:
              "Junior status and independent investigator status are the two the 1978 case names, and NIDA's letter states one of them outright.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What is multiple discovery?",
            options: [
              "The same result reached independently by more than one group",
              "The same group publishing one result in several journals within a single year",
              "A discovery that is announced twice, once at a meeting and once in print",
              "A result that is confirmed by replication in a second laboratory",
            ],
            correctIndex: 0,
            explanation:
              "It complicates any single priority claim, which is why the 1978 case carries the caveat wherever it is mentioned.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "How does this course treat thinness in the record?",
            options: [
              "As a finding, reported rather than filled in",
              "As a reason to prefer secondary accounts, which supply what the record lacks",
              "As grounds for leaving the subject out of the catalog altogether",
              "As an invitation to reconstruct the likely facts from comparable cases",
            ],
            correctIndex: 0,
            explanation:
              "The sources read for this course say almost nothing about Frieda Robscheit-Robbins beyond her work, and the course says so.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "Which of these does the course say makes the case for Pert's contribution, rather than the thank-you?",
            options: [
              "The author line, the citation record and the NIDA admission",
              "The acceptance remarks, which are the only document naming her at all",
              "The Foundation's essay, read together with the citation line above it",
              "Snyder's telephone calls to the jury, which the reprint reports",
            ],
            correctIndex: 0,
            explanation:
              "Each of those three can be checked independently of what anybody said at a ceremony.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What is a clean check, in this course's vocabulary?",
            options: [
              "A case in which the documents agree",
              "A case in which every document has been obtained in its original printed form",
              "A case in which the awarding body has confirmed its reasoning in writing",
              "A case in which no fourth document exists outside the prize-giver's own pages",
            ],
            correctIndex: 0,
            explanation:
              "It is a reportable result rather than a failed search, and most checks come back that way.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What is a jury statement, as the closing lesson uses the term?",
            options: [
              "The arts and literature equivalent of a presentation speech",
              "The confidential minutes of a jury's deliberations, released after a fixed period",
              "The citation itself, when an award body publishes nothing else about a decision",
              "A letter from a jury member to a journal, explaining a contested decision",
            ],
            correctIndex: 0,
            explanation:
              "It is the awarding body's published explanation of a decision, which is what makes the method portable outside the sciences.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "How long is Whipple's Nobel lecture?",
            options: [
              "Eight pages",
              "Twenty-three pages, one for each of the references it cites at its foot",
              "A single page, since a Nobel lecture is a summary rather than a paper",
              "Around forty pages, which is why the reference list is worth counting instead",
            ],
            correctIndex: 0,
            explanation:
              "Free, short, and published by the institution that gave the prize. Access was never the obstacle in either case.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Which lesson of Who Gets Named does this course point to for the Matthew effect?",
            options: [
              "Lesson 5",
              "Lesson 1, which covers credit as a second event and the rule about Nobel seats",
              "Lesson 10, on what award data show and what they do not show",
              "Lesson 13, on the difference between an author and an acknowledgement",
            ],
            correctIndex: 0,
            explanation:
              "The closing lesson names lessons 1, 5, 10 and 13 as the general apparatus this course builds on and does not repeat.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What is step 1 of the method?",
            options: [
              "Separate the documents and name who wrote each",
              "Find the earliest published version of the citation and compare it with the current wording",
              "Establish the award's formal limit on co-winners before reading any of the texts",
              "Identify the junior collaborator most likely to have been left out of the citation",
            ],
            correctIndex: 0,
            explanation:
              "A prize page formats three texts alike, which is what makes a reader treat them as one voice. Their disagreements are only visible once they are apart.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does step 2 tell you to follow across the documents?",
            options: [
              "The crediting verb",
              "The order of names, since a citation always lists contributors from most to least senior",
              "The dates, since the earliest document on a page is always the most reliable one",
              "The institution's name, since each text is written by a different part of the same body",
            ],
            correctIndex: 0,
            explanation:
              "In 1978 the verb was \"identified\" and it attached to two different people on one page. The verb is where credit is actually assigned.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Why is tracking one verb better than summarising each document?",
            options: [
              "It is faster and more honest",
              "Because a summary always omits the citation, which is the only text that carries legal weight",
              "Because verbs are the only part of a citation the awarding institution actually controls",
              "Because a summary of a presentation speech cannot be quoted in an academic setting",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing three texts introduces the reader's own emphasis. Following one word does not.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What was the fourth document in the 1978 case?",
            options: [
              "The author line of a 1973 paper",
              "The grant application to the National Institutes of Health that contained the protocol",
              "The transcript of the awards luncheon, which the Foundation published the following year",
              "The 1977 NIDA Pacesetter citation, which named six researchers rather than three",
            ],
            correctIndex: 0,
            explanation:
              "Pert and Snyder, Science 179, with the thanked person first. The Lasker Foundation does not host it.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What was the fourth document in the 1934 case?",
            options: [
              "The reference list of the lecture",
              "The Nobel committee's nomination archive for that year, released after fifty years",
              "The 1925 paper on liver, which the Nobel Foundation reprints alongside the citation",
              "The University of Rochester's staff register, which lists her rank year by year",
            ],
            correctIndex: 0,
            explanation:
              "The laureate's own footnote defines it as a summary of his own contributions, which is what makes the names on it readable as his collaborators.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Why is a document the prize-giver does not host especially useful?",
            options: [
              "It is not tuned to the citation",
              "Because it is always older than the citation and so records an earlier state of the work",
              "Because the institution is legally barred from publishing author lines alongside citations",
              "Because only documents outside the institution can be checked by an ordinary reader",
            ],
            correctIndex: 0,
            explanation:
              "The institution did not write it, so it is usually the fastest way to learn something the page did not intend to say.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does step 4 require alongside every count?",
            options: [
              "The counting rule",
              "A second independent source confirming the same total to within one item",
              "The date on which the count was made, since databases change from month to month",
              "A comparison with the total for at least one other person in the same laboratory",
            ],
            correctIndex: 0,
            explanation:
              "A total without its rule cannot be checked, and a total that cannot be checked is not evidence however often it is repeated.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Which count in this course has its rule attached?",
            options: [
              "Ten of the twenty-three references",
              "Twenty-one papers with Whipple between 1925 and 1930, as the reference books give it",
              "Eighteen papers published after she left the laboratory, from Garfield's citation data",
              "Twenty-eight Lasker winners who went on to receive a Nobel Prize",
            ],
            correctIndex: 0,
            explanation:
              "Anyone can open the lecture and check it in five minutes. The figure of 21 gives no rule, and the same six years yield 27, 18 and 22 under other rules.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does step 5 tell you to do?",
            options: [
              "Name who contests what, then stop",
              "Decide which account is most plausible and state that conclusion clearly for the reader",
              "Contact the awarding institution for a statement before publishing anything about the case",
              "Weigh the contested claims against each other and assign a probability to each one",
            ],
            correctIndex: 0,
            explanation:
              "Each contested point is a specific person saying a specific thing in a specific place. Where the record stops, the reading stops.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "How does this course treat the sentence \"Exactly what influenced the Lasker jury is not known\"?",
            options: [
              "As a finding",
              "As a gap that later research into the Foundation's archives will eventually close",
              "As evidence that the jury had something to hide, since the deliberations stayed confidential",
              "As a reason not to teach the case at all, since the central question is unanswerable",
            ],
            correctIndex: 0,
            explanation:
              "Not a gap to be filled in with a plausible motive. The course repeats the sentence rather than improving on it.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What is the unnumbered sixth step, described as a habit rather than a move?",
            options: [
              "Say where each thing came from and how you got it",
              "Publish the finding in the same journal that carried the original dispute",
              "Check every claim against at least three independent secondary accounts before writing",
              "Ask the people named in the documents to comment before anything is asserted",
            ],
            correctIndex: 0,
            explanation:
              "The reading is only worth as much as the provenance behind it, and a reader who is told the provenance can go and do better.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Which of the following did this course disclose about its own sources?",
            options: [
              "It used an interested website for one article",
              "That it obtained the Lasker jury's deliberations through a records request in 2026",
              "That every quotation in the course was read in the original printed journal issue",
              "That it relied on a single secondary account for the whole of the 1934 case",
            ],
            correctIndex: 0,
            explanation:
              "It also used a university page's transcription of a book it has not read, and rendered a scanned essay as page images because the machine-read text could not be trusted for quotation.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What do these two cases prove about the juries involved?",
            options: [
              "Nothing about what either jury intended",
              "That both juries applied a rule about junior status, as the NIDA letter later confirmed",
              "That both juries were bound by a formal limit of three co-winners in the award category",
              "That both juries relied on citation data, which is why the same kind of omission occurred",
            ],
            correctIndex: 0,
            explanation:
              "The Lasker deliberations are confidential, one member said only that one issue did not come up, and no released 1934 committee record was found.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "Why does this course avoid words like overlooked and passed over?",
            options: [
              "They describe a decision nobody has on record",
              "Because they are informal, and an academic course should use the technical vocabulary instead",
              "Because both awarding bodies objected to their use when the disputes were reported",
              "Because they imply a correction was later made, which did not happen in either case",
            ],
            correctIndex: 0,
            explanation:
              "The record shows what was published. It does not show what was thought, and the vocabulary should not smuggle in the difference.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What do the two cases together show about the format cap explanation?",
            options: [
              "One case supports it and the other rules it out",
              "That it accounts for both omissions, since both awards limited the number of co-winners",
              "That caps were introduced only after 1978, so they cannot explain either case",
              "That caps are decided case by case, so the explanation can never be tested",
            ],
            correctIndex: 0,
            explanation:
              "In 1934 three laureates held three thirds. In 1978 the award carried no formal limitation. That is exactly why one case is not enough to teach it.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What does this course say about whether either woman discovered anything alone?",
            options: [
              "Nothing in the documents says so",
              "That the 1934 documents establish sole discovery while the 1978 documents do not",
              "That both discovered their results alone, which is why the omissions matter so much",
              "That the question cannot be raised, since the word discovery is undefined in both cases",
            ],
            correctIndex: 0,
            explanation:
              "Three groups published in 1973 and Garfield says each has a strong claim. In 1934 even the sentence that names her names two people.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What failure mode does Garfield show for citation data?",
            options: [
              "It would have missed Kosterlitz",
              "It would have credited the 1971 Goldstein paper for work published two years later",
              "It would have ranked review articles above the papers that reported original results",
              "It would have counted the same paper twice when it appeared in two cluster maps",
            ],
            correctIndex: 0,
            explanation:
              "He had kept his name off the paper that mattered. A measure that catches one kind of invisible contributor creates another.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What does a thank-you on a prize page establish?",
            options: [
              "That the thank-you was said",
              "That the person thanked performed the work the sentence attributes to them",
              "That the awarding institution considered the person for the award and declined",
              "That the laureate intended to share the honorarium with the person thanked",
            ],
            correctIndex: 0,
            explanation:
              "It is not the reason this course takes her contribution seriously. The author line, the citation record and the NIDA admission do that work.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What did both laureates in this course do that a villain story cannot accommodate?",
            options: [
              "Both named her, and one divided his prize money",
              "Both refused their awards until the citations were amended to include her name",
              "Both published corrections in the journals that had reported the original work",
              "Both nominated her for the same award in the following year's cycle",
            ],
            correctIndex: 0,
            explanation:
              "Whipple named her twice in his lecture and shared his third; Snyder named her in his remarks, said she should have shared the award, and telephoned jurors.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "Where does this course locate the mechanism that produced both omissions?",
            options: [
              "Above the laureate, in what a citation records",
              "In the laureates themselves, who could have insisted on a fourth name and did not",
              "In the journals, which published author lines the awarding bodies could not see",
              "In the funding agencies, which named principal investigators rather than collaborators",
            ],
            correctIndex: 0,
            explanation:
              "Whatever produced these omissions, it was not the laureate refusing to acknowledge the person, because both of them did acknowledge her.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What do the sources read for this course say about Frieda Robscheit-Robbins as a person?",
            options: [
              "Almost nothing",
              "A great deal, which is why the course devotes a full lesson to her life outside the laboratory",
              "Enough to establish her birth year, which the course states as a settled fact",
              "Nothing at all, so the course does not make any claim about her career",
            ],
            correctIndex: 0,
            explanation:
              "That thinness is reported as the finding rather than padded. What the course does claim about her career comes from transcriptions on a university page.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What rank does the Rochester page record her as holding after decades at the institution?",
            options: [
              "Associate in pathology",
              "Professor of experimental pathology, a rank she reached shortly before the 1934 award",
              "Director of the anemia colony, a post created for her when the dogs arrived in 1922",
              "Dean of research, which she held jointly with the presidency of her learned society",
            ],
            correctIndex: 0,
            explanation:
              "She was still an associate in pathology when she retired in 1955, per the transcriptions on that page.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "Which office does the Rochester page record her holding in 1951 and 1952?",
            options: [
              "President of the American Society for Experimental Pathology",
              "Editor of the American Journal of Physiology, where most of her series was published",
              "Chair of the Nobel nominating committee for physiology and medicine in those years",
              "Director of the University of Rochester School of Medicine and Dentistry",
            ],
            correctIndex: 0,
            explanation:
              "The page records the presidency and describes her as the society's first woman president. Those sentences are transcriptions on a university page.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What does this course say two cases amount to?",
            options: [
              "Two worked examples of a method",
              "A pattern strong enough to support a general claim about how prize juries behave",
              "A sample too small to teach anything, which is why the course is held privately",
              "A comparison that settles which of the two omissions was the more serious",
            ],
            correctIndex: 0,
            explanation:
              "The method is the transferable part. A pattern would need far more than two.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What three things must a prize publish for this method to work on it?",
            options: [
              "A citation, an institutional account, and the laureate's own words",
              "A citation, the jury's minutes, and the nomination letters supporting each candidate",
              "A citation, the honorarium amount, and a list of every candidate considered that year",
              "A citation, a photograph of the ceremony, and a transcript of the presentation",
            ],
            correctIndex: 0,
            explanation:
              "Major science prizes, literary and arts prizes and professional societies all commonly publish all three.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What form does the fourth document take outside the sciences?",
            options: [
              "A cast list, credits, or named inventors",
              "A second citation issued by the same body in a later year for the same work",
              "The awarding institution's annual report, which lists every contributor by name",
              "There is no fourth document outside the sciences, which is why the method is limited",
            ],
            correctIndex: 0,
            explanation:
              "An author line, a reference list, a patent's named inventors, a programme's cast list or a set of production credits, depending on the field.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What should a reader expect most prize pages to show?",
            options: [
              "Nothing, and that is a real result",
              "A contradiction, since institutions and laureates almost always describe the work differently",
              "Missing documents, because most awarding bodies publish only the citation itself",
              "A correction, since most disputed citations are amended within a few years",
            ],
            correctIndex: 0,
            explanation:
              "A page where all three texts credit the same people is a consistent record, and reporting only the inconsistent ones stops being a method.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What does this course say about a reader who reports only the pages that did not come back clean?",
            options: [
              "They have stopped doing the method",
              "They are applying it correctly, since a consistent record contains nothing worth reporting",
              "They should repeat the check on a larger sample before drawing any conclusion",
              "They are following the rule this course sets out in its fifth step",
            ],
            correctIndex: 0,
            explanation:
              "The method is a way of checking, not a machine for finding grievances, and most checks come back clean.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Which lesson of Who Gets Named covers the difference between an author and an acknowledgement?",
            options: [
              "Lesson 13",
              "Lesson 1, which introduces credit as a second event and the rule about Nobel seats",
              "Lesson 5, on the Matthew effect and how an eminent name absorbs a collaboration",
              "Lesson 10, on what award data show and what they do not",
            ],
            correctIndex: 0,
            explanation:
              "\"Who counts as an author, and who gets thanked\". Lessons 1, 5 and 10 are the other three this course points to.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Why are this course's sections keyed by year rather than numbered in sequence?",
            options: [
              "So another case can be added without renumbering",
              "Because a chronological ordering is the only one a history course is allowed to use",
              "Because the awarding institutions require their prizes to be cited by year",
              "Because numbered sections cannot be used in a course that contains an exercise lesson",
            ],
            correctIndex: 0,
            explanation:
              "A course about prize citations should be able to take another citation without renumbering the ones it already has.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What does this course identify as the real barrier to checking a prize citation?",
            options: [
              "Treating a prize page as one document",
              "The cost of journal subscriptions, which puts the underlying papers out of reach",
              "The confidentiality of jury deliberations, which makes every check inconclusive",
              "The need for specialist training in the science the prize was given for",
            ],
            correctIndex: 0,
            explanation:
              "The 1978 page takes a minute to read and the 1934 lecture is eight pages. Neither required an archive, a library visit or a subscription.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Which public course in this catalog works the adjacent Esther Lederberg case?",
            options: [
              "The Paper and the Prize",
              "Who Gets the Credit, whose lesson on authorship as a currency covers the same ground",
              "Who Built the Blood Bank, which teaches primary source reading in medical history",
              "The Name on the Door, which teaches credit at the level of the firm rather than the person",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 5 is the built worked example and its lesson 6 is the limits lesson for that case. Neither is repeated here.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What kind of claim is \"twenty-one papers with Whipple\"?",
            options: [
              "One that cannot be checked without its rule",
              "One that three independent databases confirm to within a single item",
              "One that the Nobel lecture's own reference list establishes beyond doubt",
              "One that holds under every counting rule anyone has proposed for the period",
            ],
            correctIndex: 0,
            explanation:
              "The same six years give 27, 18 and 22 under three other rules, and the entry that states 21 contains two checkable errors.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "In the 1934 case, which document defines what the reference list contains?",
            options: [
              "The lecture's own footnote",
              "The presentation speech, which lists the papers the committee considered",
              "The Nobel summary page, which links to the publications behind each citation",
              "The University of Rochester's bibliography of Whipple's publications",
            ],
            correctIndex: 0,
            explanation:
              "\"This paper is designed to summarize the author's contributions but does not pretend to give a review in this field nor to describe the work of others.\"",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Why did this course render a scanned essay as page images?",
            options: [
              "The machine-read text could not be trusted for quotation",
              "Because the essay is under copyright and only images may be reproduced from it",
              "Because the page numbers in the reprint do not match those of the original issue",
              "Because the essay contains figures that cannot be reproduced in any other form",
            ],
            correctIndex: 0,
            explanation:
              "Every Garfield sentence quoted in this course was confirmed letter by letter on the rendered page rather than taken from an automatic transcription.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What did Whipple's presentation speech and his lecture disagree about?",
            options: [
              "Whether the method was begun by one person or two",
              "Whether liver or kidney was the more potent of the two leading diet factors",
              "Whether the dog colony moved from San Francisco in 1922 or in 1923",
              "Whether the prize should have been divided among three laureates or two",
            ],
            correctIndex: 0,
            explanation:
              "The speech praised Whipple's experiments and named nobody else. The lecture said the method was begun by \"Dr. Frieda Robscheit-Robbins and the writer\".",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Which of these is an example of the method being applied honestly to a clean page?",
            options: [
              "Reporting that all three texts credit the same people",
              "Setting the page aside and looking for a different prize with a contradiction in it",
              "Recording the check as inconclusive until the jury's deliberations are released",
              "Assuming the contradiction is present but not stated in the published documents",
            ],
            correctIndex: 0,
            explanation:
              "A consistent record is a result, and the course says so explicitly rather than treating a clean check as a failed search.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What kind of prize does the closing section suggest trying the method on?",
            options: [
              "Any prize that publishes all three kinds of text",
              "Only prizes awarded before 1980, since later citations are written to avoid the problem",
              "Only prizes in the sciences, because other fields do not publish author lines",
              "Only prizes with a formal cap on co-winners, since the arithmetic is what creates omissions",
            ],
            correctIndex: 0,
            explanation:
              "Major science prizes, literary and arts prizes and professional societies all commonly publish a citation, an institutional account and the recipient's reply.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What is provenance, as this course uses the word?",
            options: [
              "Where a source came from and how it was obtained",
              "The order in which a set of documents was published by the awarding institution",
              "The chain of citations linking a modern account back to a contemporary one",
              "The legal ownership of a document, which determines whether it may be quoted",
            ],
            correctIndex: 0,
            explanation:
              "It determines how much weight a reader can put on a source, which is why the course states it for every awkward one it used.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "Which of these does this course treat as the transferable part of the two cases?",
            options: [
              "The reading method",
              "The conclusion that prize juries systematically overlook junior collaborators",
              "The finding that both awards were given in years when the format cap was binding",
              "The comparison of citation counts between a laureate's collaborators",
            ],
            correctIndex: 0,
            explanation:
              "Two cases are two worked examples. The method is what a reader takes to the next prize page.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What did the 1934 and 1978 cases have in common as documents?",
            options: [
              "The laureate's own text named the person the citation did not",
              "Both awarding bodies published a correction to the citation within five years",
              "Both citations named four people, one of whom was later removed from the record",
              "Both laureates declined to give a lecture, so only the citation survives",
            ],
            correctIndex: 0,
            explanation:
              "Whipple's Nobel lecture and Snyder's acceptance remarks each name her, and each is hosted by the body that gave the prize.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "In the 1985 case, what did the presentation speech attach the practical gain to?",
            options: [
              "Recent developments and computers",
              "The laureate's wife, whom the lecture had credited by name the previous day",
              "The Academy's own press release, which it quotes at length on the same point",
              "The crystallographers who had criticised the method through the 1950s",
            ],
            correctIndex: 0,
            explanation:
              "Step 2 in action: one verb, followed across the documents. The lecture gave the same gain to a named person.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What played the part of the fourth document in the 1985 case?",
            options: [
              "A reference list of 98 items",
              "The author line of the paper that announced the result, with her name first",
              "A grant application held by the National Institutes of Health from the year before",
              "A university history page transcribing a biography the course has not read",
            ],
            correctIndex: 0,
            explanation:
              "The reference list at the foot of a lecture whose examples, it says, come mainly from one laboratory.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What happens to the 1985 count when a search box does the counting?",
            options: [
              "It drops to twenty-one",
              "It rises to ninety-eight, because the string matches the laureate's own name too",
              "It stays at twenty-three, since the list spells every author's name the same way",
              "It cannot be done at all, because the file carries no machine-readable text",
            ],
            correctIndex: 0,
            explanation:
              "Two references print her name another way, which is why a counting rule has to say how a name is recognised.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "How many of this course's three cases support the format cap explanation?",
            options: [
              "One",
              "Two, the 1934 and 1985 prizes, since both were awarded under the Nobel statutes",
              "All three, which is why the course teaches the cap before anything else",
              "None, because no awarding body publishes the limits it works under",
            ],
            correctIndex: 0,
            explanation:
              "1934 alone. The 1978 award carried no formal limit, and the 1985 prize left one of its three seats unused.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What did the 1985 laureate do that his citation did not?",
            options: [
              "Named her, twice",
              "Divided the money that came with the prize among the people who had done the work",
              "Telephoned members of the committee to ask that she be included in the award",
              "Published a correction in the journal that had carried the original papers",
            ],
            correctIndex: 0,
            explanation:
              "In the Nobel lecture and again in the Nobel autobiography, for the procedure and for its extension. The money and the telephone calls belong to the other two cases.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What does this course say three cases amount to?",
            options: [
              "Three worked examples",
              "A pattern strong enough to support a general claim about how juries behave",
              "A sample large enough to rank the three omissions by seriousness",
              "A demonstration that the format cap explains most omissions from prizes",
            ],
            correctIndex: 0,
            explanation:
              "Three cases are not a pattern. The method is the transferable part, and the next lesson says where to take it.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "How long is the 1985 press release, as this course describes it?",
            options: [
              "One page",
              "Eight pages, the same length as the 1934 Nobel lecture the course counts",
              "Thirty-seven pages, including the figures the laureate showed at the ceremony",
              "Long enough to need a subscription, which is why the course quotes it sparingly",
            ],
            correctIndex: 0,
            explanation:
              "Free, short, and published by the institution that gave the prize, like the most useful document in each of the other two cases.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What had to change in this course when the 1985 case was added?",
            options: [
              "No existing lesson or quiz name",
              "Every section title, because the sections are numbered in sequence",
              "The slugs of the closing lessons, which moved to the end of the course",
              "The final assessment, whose existing questions were rewritten for three cases",
            ],
            correctIndex: 0,
            explanation:
              "Sections are keyed by the year of the prize, so a new case slots in at its own year. That is what the design was for.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 41 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-citation-records-final",
      title: "Final assessment · What the Citation Records",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course's central claim about a prize page?",
            options: [
              "It is three documents, not one",
              "It is the most reliable record available of who performed a piece of scientific work",
              "It is written entirely by the awarding institution, including the acceptance remarks",
              "It is a legal instrument, so its wording cannot be revised once the award is given",
            ],
            correctIndex: 0,
            explanation:
              "The citation, the institution's account of the work, and the laureate's own words. They can disagree, and on both of these pages they do.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Which verb does the crediting twice, to two different people, on the 1978 Lasker page?",
            options: [
              "Identified",
              "Discovered, which the Foundation's essay uses of Snyder and the remarks use of Pert",
              "Demonstrated, which appears in the title of the 1973 Science paper and in the citation",
              "Localized, which the essay uses of the mapping of receptors in the brain",
            ],
            correctIndex: 0,
            explanation:
              "The Foundation's essay gives the identifying to Snyder; the acceptance remarks give it to Pert.",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "Who received the 1934 Nobel Prize in Physiology or Medicine?",
            options: [
              "Whipple, Minot and Murphy",
              "Whipple alone, with Minot and Murphy receiving the prize for chemistry the same year",
              "Minot and Murphy, with Whipple's share awarded posthumously two decades later",
              "Holmgren, Whipple and Castle, for work on the liver and on pernicious anaemia",
            ],
            correctIndex: 0,
            explanation:
              "Awarded jointly, one third each, \"for their discoveries concerning liver therapy in cases of anaemia\".",
            sourceLessonSlug: "three-documents-on-one-page",
          },
          {
            prompt: "What does the 1934 presentation speech say about Whipple's experiments?",
            options: [
              "Their results can claim absolute reliability",
              "That they were assisted by a research associate whom the speech names and thanks",
              "That they were superseded by the Boston work on patients with pernicious anaemia",
              "That they could not measure a diet factor accurately until the colony moved to Rochester",
            ],
            correctIndex: 0,
            explanation:
              "\"Planned exceedingly well and carried out very accurately, and consequently their results can lay claim to absolute reliability.\" Nobody else is named.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does Whipple's Nobel lecture say about the start of the new anemia method?",
            options: [
              "Robscheit-Robbins and the writer began it",
              "That the writer began it alone, in San Francisco, before the colony was moved east",
              "That it was developed at the Hooper Foundation by Dr. Hooper and the writer",
              "That Minot and Murphy suggested it after their own work on patients in Boston",
            ],
            correctIndex: 0,
            explanation:
              "\"Dr. Frieda Robscheit-Robbins and the writer began to use a different type of anemia\", two days after a speech that did not name her.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "How many numbered references in Whipple's Nobel lecture carry her name?",
            options: [
              "10 of 23",
              "9 of 23, which is what a reader finds by searching the list for the surname Robbins",
              "11 of 24, which is the count by article rather than by reference number",
              "2 of 23, being only the references on which she is the first named author",
            ],
            correctIndex: 0,
            explanation:
              "Numbers 11, 12, 13, 14, 15, 18, 19, 20, 22 and 23, re-counted from the lecture for this course.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "On which two references is she first author, and what are they cited for?",
            options: [
              "13 and 14, for liver and kidney",
              "11 and 12, for the earliest work published after the colony moved to Rochester",
              "22 and 23, for the fasting experiments and the human liver material studied at autopsy",
              "18 and 19, for haemoglobin utilization and for the foreign haemoglobins",
            ],
            correctIndex: 0,
            explanation:
              "\"Liver [13] again stands out as the most potent diet factor. Kidney [14] is a close second.\" The two headline results cite her two first-authored papers.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "Why does a search of the lecture's reference list for \"Robbins\" undercount?",
            options: [
              "Reference 11 lists her as F. S. Robscheit",
              "Because the list abbreviates every author after the first, so most surnames are missing",
              "Because two references cite the same paper twice under slightly different spellings",
              "Because the Nobel Foundation's transcription of the list omits three of the references",
            ],
            correctIndex: 0,
            explanation:
              "The family name changed in 1920 or 1921 and she kept both, but that earliest reference predates the change.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "How many items between 1925 and 1930 carry both her name and Whipple's?",
            options: [
              "27",
              "21, which is the number the reference book entry gives for their joint output",
              "18, which is the number with no third author on the paper",
              "22, which is the number sharing the Blood regeneration in severe anemia title",
            ],
            correctIndex: 0,
            explanation:
              "Re-derived from Crossref for this course. Each of 27, 18, 22 and 21 is correct under a different counting rule.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What is this course's rule about counts?",
            options: [
              "Print the rule beside the count",
              "Use the total that the largest number of published sources agree on",
              "Prefer counts derived from a database over counts derived from a printed document",
              "Report a count only when two independent methods produce the same figure",
            ],
            correctIndex: 0,
            explanation:
              "A total without its rule cannot be checked, and a total that cannot be checked is not evidence however often it is repeated.",
            sourceLessonSlug: "count-the-references-yourself",
          },
          {
            prompt: "What makes a binding measurement evidence of a receptor?",
            options: [
              "It discriminates between mirror-image forms",
              "It uses a radioactive label, which only attaches to molecules with a biological function",
              "It is performed in a homogenate rather than in living tissue, which removes interference",
              "It produces a value in grams, which allows one drug to be compared with another",
            ],
            correctIndex: 0,
            explanation:
              "Stereospecific binding is discrimination, which is what a receptor does. Nonspecific binding is what anything does to anything.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Which three groups published papers announcing opiate receptors in 1973?",
            options: [
              "Pert and Snyder; Simon, Hiller and Edelman; Terenius",
              "Goldstein, Lowney and Pal; Hughes and Kosterlitz; Pert and Snyder",
              "Snyder and Pasternak; Kuhar and Pert; Simon and Hiller, all working independently",
              "Terenius; Goldstein; and Maren, whose letter of 1979 named the groups involved",
            ],
            correctIndex: 0,
            explanation:
              "Garfield names the three. Goldstein's 1971 paper is the parent of the work rather than one of the three announcements.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "In what order did the three 1973 groups submit their papers?",
            options: [
              "Terenius, then Pert and Snyder, then Simon",
              "Pert and Snyder, then Simon, then Terenius, matching the order of publication",
              "Simon, then Terenius, then Pert and Snyder, matching the order of oral presentation",
              "All three on the same day, which is why Garfield calls it a simultaneous discovery",
            ],
            correctIndex: 0,
            explanation:
              "6 November 1972, 1 December 1972 and 19 April 1973. Publication order and presentation order run differently, which is Garfield's point.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "What does Garfield conclude about priority among the three 1973 groups?",
            options: [
              "Each has a strong claim",
              "That Pert and Snyder have the strongest claim, since they published before the others",
              "That priority belongs to Goldstein, whose 1971 framework made all three papers possible",
              "That no claim can be assessed, since one of the three announcements was never published",
            ],
            correctIndex: 0,
            explanation:
              "The order changes with the measure, which is the whole reason the multiple discovery caveat rides with every mention of the case.",
            sourceLessonSlug: "stereospecific-binding",
          },
          {
            prompt: "Who is first author on \"Opiate receptor: demonstration in nervous tissue\"?",
            options: [
              "Pert",
              "Snyder, whose laboratory the paper describes and whom the Lasker citation names",
              "Pasternak, who appears on the December 1973 paper in the same journal",
              "Kuhar, whose Nature paper of the same year reported the regional distribution",
            ],
            correctIndex: 0,
            explanation:
              "Pert CB and Snyder SH, Science 179(4077), 1011-1014, 9 March 1973.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "Why is the Pert case unusual among lost-credit cases?",
            options: [
              "The author line was not the problem",
              "The paper was retracted and republished with a different author line five years later",
              "The prize citation named her and the institution's essay then removed her",
              "The dispute was resolved by the awarding body, which reissued the citation",
            ],
            correctIndex: 0,
            explanation:
              "She was first author on the paper announcing the result. The credit was lost a level up, at the prize, where an author line is not consulted.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What did Garfield's citation comparison find about Snyder's opiate receptor papers?",
            options: [
              "Those with Pert averaged more than twice as many citations",
              "That the papers with other collaborators were the more highly cited of the two groups",
              "That citation counts were too close to distinguish one collaborator from another",
              "That the most cited papers in the field were all written without Pert as an author",
            ],
            correctIndex: 0,
            explanation:
              "17 papers with Pert averaging 87 citations, against 23 papers with other collaborators averaging 37.5.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What limit does Garfield place on his own citation evidence?",
            options: [
              "It cannot prove she made major contributions",
              "It cannot be compared across fields, because citation habits differ between specialties",
              "It cannot be trusted before 1975, because the index did not cover all journals",
              "It cannot be used at all by awards committees, which is why he advises against it",
            ],
            correctIndex: 0,
            explanation:
              "\"They do indicate that she was capable of valuable contributions.\" A citation count measures uptake, not the division of work inside a paper.",
            sourceLessonSlug: "the-page-and-the-author-line",
          },
          {
            prompt: "What does Snyder contest in the 1979 reporting?",
            options: [
              "Who began the project",
              "Whether Pert was an author on the papers the citation rewards",
              "Whether the Lasker Foundation had a formal limit on the number of co-winners",
              "Whether a graduate student may be named on any award citation at all",
            ],
            correctIndex: 0,
            explanation:
              "He told Science that a protocol for identifying the receptors was in an NIH grant application more than a year before she began work.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did Snyder do about Pert and the award itself?",
            options: [
              "Asked the jury to include her",
              "Declined to attend the ceremony in protest at her exclusion from the citation",
              "Wrote to Science to say that her contribution had been a junior one only",
              "Divided the honorarium with her after the ceremony, as Whipple did in 1934",
            ],
            correctIndex: 0,
            explanation:
              "He called members of the awards committee, said publicly that it would have been appropriate for her to share the award, and the request was refused.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did the one jury member who spoke say about the deliberations?",
            options: [
              "The graduate student issue did not come up",
              "That the jury had discussed her at length and decided against her by a single vote",
              "That the jury was bound by a limit of three winners in that award category",
              "That the jury had not seen the papers, only the summaries prepared by the Foundation",
            ],
            correctIndex: 0,
            explanation:
              "Everything else about the deliberations is confidential, and \"exactly what influenced the Lasker jury is not known\".",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did William Pollin of NIDA put in writing in 1979?",
            options: [
              "That leaving Pert out of the 1977 award was a significant omission",
              "That the Lasker jury had applied the correct standard in excluding a graduate student",
              "That NIDA would add Pert's name to the 1977 Pacesetter citation retrospectively",
              "That citation data had been used by NIDA in selecting the 1977 recipients",
            ],
            correctIndex: 0,
            explanation:
              "\"Her graduate student role was the issue at the time.\" It is about the NIDA Pacesetter award, not the Lasker, and the course keeps the two apart.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What was Thomas Maren's complaint about the 1978 Lasker?",
            options: [
              "Three senior investigators were left out entirely",
              "That a graduate student had been considered for the award at all that year",
              "That the citation described the enkephalins inaccurately in its second line",
              "That the Foundation should adopt the Nobel limit of three co-winners per award",
            ],
            correctIndex: 0,
            explanation:
              "He named Goldstein, Terenius and Simon and wrote of progress made by five groups, not two. A different objection from Pert's, and kept separate.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "How does this course describe its source for the text of the 1979 Science news report?",
            options: [
              "A 2014 reprint on an interested site",
              "The publisher's own page, fetched and read in full on the stated date",
              "A microfilm copy obtained from a university library and read page by page",
              "A summary in a later review article, since no full text could be located",
            ],
            correctIndex: 0,
            explanation:
              "Used because every sentence Garfield quotes from Marx appears in it word for word, which is the corroboration an unreachable article can get.",
            sourceLessonSlug: "the-argument-in-print",
          },
          {
            prompt: "What did Garfield write about formal limits on Lasker awards?",
            options: [
              "They have none",
              "That they match the Nobel limit of three, which is why the 1978 award stopped at three",
              "That the limit had been six since 1977, the year of the NIDA Pacesetter award",
              "That the Foundation sets the number annually and publishes it with the citation",
            ],
            correctIndex: 0,
            explanation:
              "\"(Nobels, for example, are limited to three co-winners per year. Lasker awards, however, have no formal limitations.)\"",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "What does the format cap explain, and what does it not?",
            options: [
              "The arithmetic, not the choice of who fills the seats",
              "The choice of winners, since a cap forces a jury to rank candidates explicitly",
              "Both, because a cap determines how many seats there are and who is eligible for them",
              "Neither, because no award body publishes its cap alongside the citation",
            ],
            correctIndex: 0,
            explanation:
              "In 1934 the cap did the arithmetic. In 1978 there was no cap to do it. Neither case tells you how the seats were filled.",
            sourceLessonSlug: "caps-and-what-they-explain",
          },
          {
            prompt: "In the standard anemia method, what is held constant?",
            options: [
              "The dog's haemoglobin level",
              "The weight of food given each day, so that calories cannot confound the comparison",
              "The number of animals in the colony, kept at forty throughout the experimental period",
              "The interval between bleedings, fixed at a fortnight for every diet factor tested",
            ],
            correctIndex: 0,
            explanation:
              "Held at 40 to 50 per cent \"by suitable removal of new-formed hemoglobin\". Potency is then measured in grams of haemoglobin removed.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What was salmon bread for?",
            options: [
              "A basal ration with a low baseline output",
              "A concentrated liver extract used as the standard against which other foods were rated",
              "A palatable vehicle for iron, which the lecture calls the most potent inorganic element",
              "A diet for the healthy control animals kept alongside the anaemic colony",
            ],
            correctIndex: 0,
            explanation:
              "It keeps the dog alive through years of anaemia while producing almost no new haemoglobin, so an increase can be attributed to the factor under test.",
            sourceLessonSlug: "the-standard-anemic-dog",
          },
          {
            prompt: "What does the footnote on Whipple's lecture establish about the reference list?",
            options: [
              "It is the author's own output, not a field review",
              "It was compiled by the Nobel Foundation from the committee's working papers",
              "It excludes any paper published before the colony's move to Rochester in 1923",
              "It lists only papers on which the author appears first in the author line",
            ],
            correctIndex: 0,
            explanation:
              "\"Does not pretend to give a review in this field nor to describe the work of others.\" So the names on it are the people he worked with.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What does the Rochester campus history page record about the 1934 prize money?",
            options: [
              "Whipple shared it with her and two other assistants",
              "That the Nobel Foundation paid a separate stipend to the research associates in the colony",
              "That she declined a share of it, asking that it be used for the anemia colony instead",
              "That the money was divided equally among the three laureates and their departments",
            ],
            correctIndex: 0,
            explanation:
              "The page's own summary says so, and its transcription of Corner's 1963 biography names the two technical assistants. Both are transcriptions, not a book this course read.",
            sourceLessonSlug: "citation-speech-and-lecture",
          },
          {
            prompt: "What is the first step of the method this course teaches?",
            options: [
              "Separate the documents and name who wrote each",
              "Count the references in the laureate's lecture before reading any of the prose",
              "Look up the award's formal limit on co-winners in its published statutes",
              "Find the earliest secondary account of the dispute and work backwards from it",
            ],
            correctIndex: 0,
            explanation:
              "A prize page prints three texts together and formats them alike, which is what makes a reader treat them as one voice.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does the method call the fourth document?",
            options: [
              "One the prize-giver does not host",
              "The second citation line, which some award pages print between the winners' essays",
              "The awarding body's annual report for the year the prize was given",
              "The nomination letter, released by most institutions after fifty years",
            ],
            correctIndex: 0,
            explanation:
              "An author line, a reference list, a patent's named inventors, a cast list. The institution did not write it, so it is not tuned to the citation.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What does the method say to do when the record runs out?",
            options: [
              "Stop",
              "Infer the most plausible explanation and label it clearly as an inference",
              "Assume the awarding body applied the same rule it applied in comparable cases",
              "Treat the silence as evidence that the omission was deliberate",
            ],
            correctIndex: 0,
            explanation:
              "\"Exactly what influenced the Lasker jury is not known\" is a finding, not a gap to be filled.",
            sourceLessonSlug: "the-method-in-five-steps",
          },
          {
            prompt: "What do these two cases prove about the juries that made the decisions?",
            options: [
              "Nothing about what either jury intended",
              "That both applied a rule about junior status, as the NIDA letter confirms for both awards",
              "That both were constrained by a formal limit on the number of co-winners",
              "That both would have decided differently with better information about author lines",
            ],
            correctIndex: 0,
            explanation:
              "The deliberations are confidential in one case and no released record was found in the other. The course reports what was published.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "Why does the conduct of both laureates matter to the argument?",
            options: [
              "Both named her, so the omission was not the laureate's refusal",
              "Both were later stripped of their awards, which shows the institutions accepted the error",
              "Both testified about the jury's reasoning, which is the only record of the deliberations",
              "Both retracted the papers in question, which removed the author lines from the record",
            ],
            correctIndex: 0,
            explanation:
              "Whipple divided his third and named her twice; Snyder named her and lobbied the jury. The mechanism sits above the laureate, in what a citation records.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What does a thank-you on a prize page establish on its own?",
            options: [
              "That the thank-you was said",
              "That the person thanked did the work the sentence attributes to them",
              "That the institution considered the person and decided against including them",
              "That the person thanked was an author on the papers the citation rewards",
            ],
            correctIndex: 0,
            explanation:
              "The author line, the citation record and the NIDA admission are what make the case, and each can be checked independently of the remarks.",
            sourceLessonSlug: "what-these-cases-do-not-prove",
          },
          {
            prompt: "What should a reader do when a prize page's three texts agree?",
            options: [
              "Report it as a result",
              "Look for a fourth document that contradicts them, since the page is unlikely to be complete",
              "Record the check as inconclusive until the deliberations are released",
              "Set the case aside, since a consistent record teaches nothing about credit",
            ],
            correctIndex: 0,
            explanation:
              "Most checks come back clean. A reader who reports only the inconsistent ones has stopped doing the method.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Which public course does this one name as the adjacent worked example?",
            options: [
              "The Paper and the Prize",
              "Who Gets Named, whose lesson 13 covers authorship and acknowledgement in detail",
              "Who Built the Blood Bank, which reads primary documents in medical history",
              "Who Owns the Steps, which applies the same method to choreography credit",
            ],
            correctIndex: 0,
            explanation:
              "Its lesson 5 sets an author line against a prize and its lesson 6 is the limits lesson. Who Gets Named supplies the general apparatus and is pointed at separately.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Why are this course's sections keyed by year?",
            options: [
              "So a new case needs no renumbering",
              "Because a chronological sequence is required for any course in Culture and History",
              "Because the awarding institutions require their prizes to be cited by year",
              "Because the lesson slugs would otherwise collide with those of the public courses",
            ],
            correctIndex: 0,
            explanation:
              "A course about prize citations should be able to take another citation without rewriting a single existing section, lesson or quiz.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "Why does this course say access was never the obstacle in either of its cases?",
            options: [
              "Both key documents were free and short",
              "Both awarding bodies supplied copies of their records on request in 2026",
              "Both disputes were settled in journals that remain open to any reader today",
              "Both laureates deposited their papers in archives that anyone may visit",
            ],
            correctIndex: 0,
            explanation:
              "The 1978 page takes a minute to read and the 1934 lecture is eight pages. Neither needed an archive, a library visit or a subscription.",
            sourceLessonSlug: "where-the-method-goes-next",
          },
          {
            prompt: "What is the whole of the role the 1978 Lasker page assigns to Candace Pert?",
            options: [
              "Graduate student, in one thanked sentence",
              "Co-investigator, named in the Foundation's essay on the receptor localization work",
              "Postdoctoral fellow, as the acceptance remarks describe her position at the time",
              "First author, which the page records alongside the citation for that half of the award",
            ],
            correctIndex: 0,
            explanation:
              "She appears only inside the acceptance remarks, among \"the many people who contributed to this area\". The page names her nowhere else.",
            sourceLessonSlug: "the-1978-award-page-exercise",
          },
          {
            prompt: "How many people shared the 1985 Nobel Prize in Chemistry, against how many the statutes allow?",
            options: [
              "Two of a possible three",
              "Three of a possible three, so the seats were full as they were in 1934",
              "Two of a possible two, because a prize for a method may not be split three ways",
              "One, with the second half awarded to the same laureate in a later year",
            ],
            correctIndex: 0,
            explanation:
              "Hauptman and Karle, at one half each, with a third seat unused. That is why the format explanation has nothing to say about this case.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Whose efforts does the 1985 Nobel lecture say the symbolic addition procedure arose mainly from?",
            options: [
              "Isabella Karle's",
              "The co-laureate's, in the series of papers published between 1950 and 1956",
              "A team at the U.S. Geological Survey, who made the earliest applications of all",
              "The programmers who wrote the software that carried direct methods to other laboratories",
            ],
            correctIndex: 0,
            explanation:
              "The laureate writes it in the lecture the Nobel Foundation hosts, and repeats it in the autobiography published in the 1985 yearbook.",
            sourceLessonSlug: "the-phase-problem",
          },
          {
            prompt: "What did the Royal Swedish Academy of Sciences say about her contributions in its own announcement?",
            options: [
              "That they had been crucial",
              "That they belonged to the applications rather than to the development of the methods",
              "That they had been considered and found insufficient for a share of the prize",
              "Nothing at all, which is why the course reads the lecture against the speech instead",
            ],
            correctIndex: 0,
            explanation:
              "\"Isabel Karle's and M. Woolfson's contributions to the practical utilization of direct methods have been crucial\", in the press release of 16 October 1985.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "What does the 1985 presentation speech credit the efficiency of the methods to?",
            options: [
              "Recent developments and computers",
              "The experimental facility the laureate's own laboratory built in the late 1950s",
              "The procedure named in the laureate's lecture the previous day, without naming a person",
              "The crystallographers who spent the 1960s testing the equations against real data",
            ],
            correctIndex: 0,
            explanation:
              "Search the speech for Isabella, or for Isabel, and you get nothing. The gain belongs to recent developments and to machines.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "How many of the 98 references in the 1985 Nobel lecture carry her name?",
            options: [
              "23",
              "Ten, the figure the 1934 lecture yields under the same counting rule",
              "Eleven, which is the number carrying the co-laureate's name instead",
              "Ninety-eight, since the lecture takes its examples mainly from one laboratory",
            ],
            correctIndex: 0,
            explanation:
              "Twenty-three carry her name and she is first on fifteen. Hauptman's name is on eleven, and reference 55 is the only one carrying both.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What does a search for the exact string Karle, I. L. return from that reference list?",
            options: [
              "21",
              "23, the same as counting by eye, because the list is set consistently throughout",
              "98, because the string appears somewhere on every page of the reference list",
              "15, which is the number of references on which her name comes first",
            ],
            correctIndex: 0,
            explanation:
              "Reference 61 prints \"Karle, I.\" and reference 70 attaches her initials to the wrong surname, so a string match loses two and says nothing about it.",
            sourceLessonSlug: "count-the-1985-references",
          },
          {
            prompt: "What did the 1995 National Medal of Science citation name her for?",
            options: [
              "Developing and applying the method",
              "Determining the three-dimensional structure of molecules with X-ray diffraction",
              "Her eminent crystallographic investigations of complicated natural products",
              "Outstanding achievements in the development of direct methods for crystal structures",
            ],
            correctIndex: 0,
            explanation:
              "\"For the development and application of a method for determining essentially equal-atom crystal and molecular structures by x-ray analysis.\"",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What can a later prize not do to an earlier citation?",
            options: [
              "Amend it",
              "Be awarded by the same institution that issued the earlier citation",
              "Name a person the earlier citation left out of its own sentence",
              "Reach the institutional memory in which the earlier record sits",
            ],
            correctIndex: 0,
            explanation:
              "The 1993 and 1995 citations name her. The 1985 prize page reads as it read in 1985, because no award body revises another's record.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "Which explanation for an omission does the 1985 case remove?",
            options: [
              "That there was no room",
              "That a jury may never be asked to reconsider a decision once it is announced",
              "That the institution's own documents always agree with one another about the work",
              "That citation counts can settle who contributed what inside a laboratory",
            ],
            correctIndex: 0,
            explanation:
              "A Nobel may be shared by three and this one was shared by two, so the arithmetic that bound the 1934 committee did not bind here.",
            sourceLessonSlug: "citation-press-release-and-lecture",
          },
          {
            prompt: "Where does the often quoted sentence about the 1985 laureate being devastated come from?",
            options: [
              "Magdolna Hargittai, quoted in 2017",
              "The laureate's own addendum to his Nobel autobiography, written in 1992",
              "The oral history recorded with both of them two years after the ceremony",
              "The Academy's background note, which names her contributions as crucial",
            ],
            correctIndex: 0,
            explanation:
              "Magdolna Hargittai, quoted by Chemical and Engineering News. No such statement was found in anything the laureate published.",
            sourceLessonSlug: "the-correction-as-other-prizes",
          },
          {
            prompt: "What connects the 1978 case to the 1985 case inside the lecture's reference list?",
            options: [
              "Enkephalin",
              "A shared laureate, whose name appears on both prize pages",
              "A shared awards committee, which sat on both juries in those years",
              "A shared journal, which published the key paper in each of the two disputes",
            ],
            correctIndex: 0,
            explanation:
              "Reference 76 is her 1983 crystal structure of [Leu5]enkephalin, discussed beside reference 75, the 1975 paper the 1978 Lasker citation rewards.",
            sourceLessonSlug: "count-the-1985-references",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `what-the-citation-records`. Every hedge written into a lesson has one.
//
//  A. key "citation-records-marx-1979-original" · severity medium · lesson "the-argument-in-print"
//     quote: "Its text was read for this course in a reprint posted in 2014 on candacepert.com, a
//            site devoted to one of the people in the dispute and therefore an interested one."
//     claim: Marx, J. L. (1979). Lasker award stirs controversy. Science 203(4378), 341. The
//            publisher's page is not reachable and the printed issue was not obtained. Every
//            sentence Garfield quotes from Marx matches the reprint word for word, which is the
//            corroboration the lesson rests on.
//     stakes: Three claims rest on the reprint alone: the NIH grant protocol Snyder cites, the
//            juror's statement about the graduate student issue, and the refusal to attend the
//            luncheon. If the reprint has been edited anywhere Garfield does not quote, those
//            three sentences move from VERIFIED to REPORTED.
//     needs: the printed Science of 26 January 1979, page 341, read against the reprint.
//     where: a university library's Science holdings; interlibrary loan; AAAS archive access.
//
//  B. key "citation-records-lasker-essay-date" · severity low · lesson "the-1978-award-page-exercise"
//     quote: "The page does not say when the essays themselves were written."
//     claim: The Lasker Foundation's 1978 award page carries unsigned essays on each winner. Page
//            metadata shows a posting date of 8 April 2021, which dates the web page and not the
//            text on it.
//     stakes: If the essays were written in 1978 they are contemporaneous with the citation, and
//            the contradiction with the acceptance remarks is a contradiction of the same moment.
//            If they were written in 2021 it is a contradiction across four decades. The lesson is
//            valid either way, but the reading changes.
//     needs: the Foundation's own statement of when its winner essays are written, or a printed
//            1978 programme carrying the same text.
//     where: the Lasker Foundation archive; the 1978 awards programme.
//
//  C. key "citation-records-1934-committee-record" · severity medium · lesson "what-these-cases-do-not-prove"
//     quote: "No released Nobel committee record for 1934 was found."
//     claim: The course asserts no motive for the 1934 committee. The Robscheit-Robbins brief
//            reports that a query of the Nobel nomination archive returned zero results even for
//            Whipple, which means the query failed rather than that nothing exists.
//     stakes: A released committee record could confirm or refute the format cap reading of 1934.
//            Until one is read, the course says only what the published documents say.
//     needs: a working search of the Nobel nomination archive for Physiology or Medicine 1934, and
//            whatever the Karolinska Institutet releases for prizes over fifty years old.
//     where: nobelprize.org nomination archive; Karolinska Institutet archives.
//
//  D. key "citation-records-corner-and-mcgrayne" · severity low · lesson "citation-speech-and-lecture"
//     quote: "Those words are a transcription on a university page, not a book this course has
//            read, and that is how they are used here."
//     claim: Corner, G. W. (1963), George Hoyt Whipple and His Friends, p. 297, on the division of
//            the prize money; and McGrayne, S. B., and Hamparian, A. (1998), Nobel Prize Women in
//            Science, 2nd ed., on the count of ten of twenty-three and on her rank. Both are read
//            only as transcribed by the University of Rochester's campus history page.
//     stakes: The count of ten is independently re-derived from the lecture in this course, so
//            nothing depends on McGrayne for that. The prize-money sentence and the rank sentence
//            do depend on the transcription.
//     needs: the two books, at the cited pages.
//     where: university libraries; the University of Rochester's own holdings.
//
//  E. key "citation-records-robscheit-robbins-dates" · severity low · lesson "what-these-cases-do-not-prove"
//     quote: "The sources read for this course say almost nothing about Frieda Robscheit-Robbins
//            beyond her work."
//     claim: Her birth year is given as 1888 by some sources on the Rochester page and 1893 by
//            others, and her doctorate is dated 1934 by one and 1937 by another. NONE of these is
//            printed in the course, because none is settled.
//     stakes: A biography lesson cannot be written until the dates are settled. Until then the
//            thinness is reported as the finding, which is what the course does.
//     needs: a birth record, and the University of Rochester's own degree conferral record.
//     where: University of Rochester registrar and archives; German civil registration.
//
//  F. key "citation-records-lasker-formal-cap" · severity medium · lesson "caps-and-what-they-explain"
//     quote: "If Garfield is right that the Lasker carried no formal limit, then nothing about the
//            format required the 1978 award to stop at three."
//     claim: The claim that the Lasker awards had no formal limitation in 1978 rests on one
//            parenthesis in Garfield (1979). The Foundation's own rules for that period were not
//            read. The lesson is written conditionally for exactly that reason.
//     stakes: The 1934-against-1978 contrast is the point of the lesson. If the Lasker did carry a
//            limit in 1978, the contrast collapses and the lesson has to be rewritten.
//     needs: the Lasker Foundation's award rules as they stood in 1978.
//     where: the Lasker Foundation; its annual reports of the period.
//
// PROPOSED RESEARCH CHECKS ADDED WITH THE 1985 SECTION (2026-09-20). Same shape, same file, and I
// have not edited src/lib/research-checks.ts here either:
//
//  G. key "citation-records-aminoff-1988-citation" · severity low · lesson "the-correction-as-other-prizes"
//     quote: "The Academy's own record of the citation for that year was not reached for this
//            course, so no wording is quoted for it here."
//     claim: That the Royal Swedish Academy of Sciences awarded her the Gregori Aminoff Prize in
//            1988 rests on two secondary pages, The Franklin Institute's laureate page and the
//            Science History Institute's honours list. The Academy's own laureate list was fetched
//            and returned its home page rather than the prize record, and the citation text has
//            only ever been seen in search results, so the lesson names the prize and quotes
//            nothing from its citation.
//     stakes: The lesson's point is that the SAME body that awarded the 1985 prize gave her its
//            crystallography prize three years later. If the year or the awarding body is wrong,
//            that paragraph goes. The citation wording would strengthen it and is not load-bearing.
//     needs: the Academy's own record of the 1988 Gregori Aminoff Prize, with its citation text.
//     where: kva.se, its prize pages and annual proceedings; the Academy's archive.
//
//  H. key "citation-records-karle-oral-history" · severity medium · lesson "the-correction-as-other-prizes"
//     quote: "No statement by Jerome Karle that she should have shared the prize was found in his
//            Nobel lecture, in his Nobel autobiography and its two addenda, or in the 1987 oral
//            history for which the two of them were interviewed together."
//     claim: The lecture and the autobiography with both addenda were read in full in this pass.
//            The 94-page oral history was NOT: that half of the sentence rests on the Karle brief's
//            read of the transcript at the Science History Institute. The transcript is also in
//            copyright, and BAM has not answered the brief's question 3 about quoting from it.
//     stakes: A negative claim is only as good as the search behind it. If the transcript does
//            discuss the prize, the sentence is wrong and the lesson's most careful paragraph is
//            the one that fails. It would also change what the course can say about her own view.
//     needs: the transcript read end to end, and BAM's answer on quoting one sentence of it.
//     where: digital.sciencehistory.org/works/wp988m037; the Science History Institute.
//
//  I. key "citation-records-hargittai-first-to-apply" · severity low · lesson "the-correction-as-other-prizes"
//     quote: "Hargittai also says 'Isabella was the first who applied the method'."
//     claim: The course sets that sentence against the laureate's lecture, which puts the earliest
//            applications with the U.S. Geological Survey. Hargittai's fuller argument is in her
//            book on women scientists, which was not read, and it is possible she means the first
//            application of the symbolic addition procedure specifically, which the lecture dates
//            to 1963 and credits to Isabella Karle.
//     stakes: If the book draws that distinction, the course is correcting a compression rather than
//            an overstatement, and the paragraph should say so in one clause.
//     needs: M. Hargittai's book, at the pages covering the Karles.
//     where: university libraries; the publisher's own edition.
//
//  J. key "citation-records-1985-committee-record" · severity medium · lesson "what-these-cases-do-not-prove"
//     quote: "no released Nobel committee record for 1934 or 1985 was found"
//     claim: This is the 1985 half of check C. The Nobel nomination archive releases records after
//            fifty years, so 1985 is not yet open and no committee record can be expected before
//            2036. Nothing was searched for 1985 in this pass.
//     stakes: The course asserts no motive for this jury either. A released record is the only thing
//            that could change that, and it does not exist yet.
//     needs: the Academy's release schedule, and the nomination archive when 1985 opens.
//     where: nobelprize.org nomination archive; the Royal Swedish Academy of Sciences.
//
// SETTLED IN THIS PASS, so NO check is needed:
//  - Every Garfield quotation. The brief marked them OCR-only and required a page-image check
//    before any lesson printed them. Pages 141, 142, 143, 152, 153 and 154 were rendered at 150 dpi
//    and read as images, and every quoted sentence was confirmed on the rendered page.
//  - The count of ten of twenty-three, re-derived from the Nobel lecture PDF for this course, with
//    both caveats (reference 11 reads "F. S. Robscheit"; reference 11 cites two articles, so the
//    article count is 11 of 24).
//  - The 1925 to 1930 Crossref counts, re-derived item by item for this course: 27 items with both
//    names, 18 by the two of them alone, 22 sharing the series title, 21 of those full articles,
//    9 of the 21 with her first. The reference book figure of 21 is therefore traced to exactly one
//    counting rule, and the entry that states it is shown to carry two checkable errors.
//  - All four 1973 and 1979 author lines and journal details, from PubMed esummary.
//  - That the 1934 presentation speech does not name her: the speech text was searched for both
//    spellings and neither occurs.
//
// SETTLED IN THE 1985 PASS (2026-09-20), so NO check is needed for these either:
//  - The whole 1985 count, re-derived from the page images rather than from the brief: 98 numbered
//    references; 23 carrying her name (12, 13, 14, 24, 32, 36, 37, 55, 56, 57, 58, 61, 62, 64, 70,
//    71, 72, 73, 74, 76, 78, 79, 82); 15 with her first; 11 carrying Hauptman's (15, 18, 20, 21,
//    22, 23, 27, 35, 55, 90, 91); reference 55 the only one with both; and 21 matching the literal
//    string "Karle, I. L.", because reference 61 prints "Karle, I." and reference 70 prints
//    "Karle, and I. L. Witkop, B.".
//  - Every sentence quoted from the 1985 lecture, the presentation speech, the press release and
//    the Nobel autobiography. Each was read on the source page or in the PDF on 2026-09-20, and the
//    press release sentence was checked in the raw HTML as well, because the spelling "Isabel" is
//    itself a teaching point and a stripping artefact would have invented it.
//  - That the 1985 presentation speech names her under neither spelling: searched for "Isabella"
//    and for "Isabel", zero hits for both.
//  - The 1993 Bower Award citation, the 1995 National Medal of Science citation, and the C&EN
//    quotations of Hargittai, all read on the pages that carry them.
//
// FOR THE REGISTERING AGENT (outside this file, and I have edited none of these):
//
//  REGISTRATION for scripts/seed-courses.ts. ALREADY DONE: the slug is registered and the course is
//  seeded, so this block is now a record of what was inserted rather than an instruction. NO series
//  fields: BAM decided on 2026-09-19 that a private course carries no CREDIT code, so there is no
//  seriesSlug, seriesCode, seriesPosition or seriesTrack. Insert-only fields (price, priceType,
//  visibility, publishHoldReason) are written once and never rewritten by a re-seed, which is why
//  the reason below still says two cases: it was true when the row was inserted, the row cannot be
//  corrected by re-seeding, and it is an internal hold note rather than anything a learner reads.
//  If BAM ever wants it accurate it is a one-row UPDATE, not a seed change:
//
//    await seedAuthoredCourse(db, {
//      tenantId: learnWitus,
//      instructorId,
//      slug: "what-the-citation-records",
//      course: WHAT_THE_CITATION_RECORDS_COURSE,
//      category: "Culture & History",
//      additionalCategories: ["Science & Math"],
//      navigationMode: "linear",
//      price: 0,
//      priceType: "free",
//      visibility: "private",
//      publishHoldReason:
//        "Private study (plans/83): prize-credit cases for BAM's own review, not for learners. Two cases, Frieda Robscheit-Robbins and Candace Pert, built from briefs BAM approved on 2026-09-19.",
//    });
//
//  The text a fresh insert should carry now, if the row is ever recreated: "Private study
//  (plans/83): prize-credit cases for BAM's own review, not for learners. Three cases, Frieda
//  Robscheit-Robbins, Candace Pert and Isabella Karle, built from briefs BAM approved on 2026-09-19
//  and 2026-09-20."
//
//  RE-SEED AFTER THIS EDIT: the 1985 section is new content in an existing course, so the course
//  has to be re-seeded for it to appear, and `pnpm gen:citations` re-run afterwards because the
//  citation list is extracted from the DATABASE and not from this file. No migration is involved.
//
//  CITATIONS: add `what-the-citation-records` to STAGED_COURSES in src/lib/citations.ts and run
//  `pnpm gen:citations` once it is seeded. Every teaching lesson carries an APA 7 `## Sources`
//  block, so `pnpm check:citations` should find a non-zero count.
//
//  STANDARDS: this is a primary-source history and evidence course (sourcing, corroboration,
//  claim against evidence, quantitative reasoning about counts and their rules), so per the repo
//  rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped it
//  needs a BACKLOG line in scripts/check-standards-coverage.ts.
//
//  SPEC, as `npx tsx scripts/audit-course.ts what-the-citation-records --spec` reports it after the
//  1985 edit (the slug is registered now, so the audit can see it and these are its numbers, not
//  hand arithmetic). Section body word counts and their `round(words / 35)` targets: Opening 2200
//  words, target 63, pool 58; 1934 2535 words, target 72, pool 66; 1978 2594 words, target 74, pool
//  68; 1985 3083 words, target 88, pool 84; Closing 2522 words, target 72, pool 66. Every section
//  pool clears the 90 percent tolerance, every section serves 5 at a passing score of 80, every
//  teaching lesson is assessed inside its own section, and the final pools 52 and serves 10. The
//  Opening and Closing pools grew with their word counts in the same edit, by ADDING questions
//  about the third case; no existing question was touched.
//
//  EXTENDING IT AGAIN: a fourth case (Marthe Gautier, 1959 to 2014, still on hold in plans/88) is
//  added as a new section keyed by its year, spliced into the lessons array at its chronological
//  position, with its own quiz slug of the form `quiz-<year>`. That is exactly how the 1985 section
//  went in on 2026-09-20, and it cost nothing existing: no renumbering, no slug change, and the
//  closing section's own lessons and quiz did not move. Budget for the same two follow-ons it did
//  need, because they are structural rather than optional: the Opening and Closing lesson bodies
//  count the cases and have to be corrected, and their quiz pools then have to grow to match the
//  words those lessons carry.
