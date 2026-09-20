import type { AuthoredCourse } from "./authored-course";

// "Painted in Court: The Keane Verdict, the Appeal, and What a Court Can Repair" (Culture &
// History, with Law & Civics alongside). Slug to be registered: `painted-in-court`. PRIVATE study,
// by BAM's approval on 2026-09-21 of the brief at
// plans/future-courses/uncredited/2026-09-18-margaret-keane-brief.md, built STANDALONE rather than
// as section 3 of the three-case cluster the brief proposed, because BAM approved her alone and
// because the document that arrived on 2026-09-20 changed what the case is about.
// RESEARCH TIER 2 (law: a wrong sentence about what a court held is the kind of sentence the tier
// rule exists for). What Tier 2 bought here: the deciding document was read in full, in the
// original, and EVERY legal proposition in this course is quoted from it rather than paraphrased
// from general knowledge of how appeals work. Where the memorandum is silent, this course is
// silent, and the silence is taught.
// NO series code and NO series position: private courses carry no CREDIT code (BAM, 2026-09-19).
// Every `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// THE SPINE, and it contradicts the story this course is named after:
// Everyone remembers a woman painting a big-eyed child in a Honolulu courtroom and winning four
// million dollars. Three things in that sentence do not survive the record.
//   1. The $4,000,000 DID NOT STAND. Part VI of the memorandum calls it "so grossly excessive that
//      it shocks the conscience", vacates it, and remands damages for a new trial.
//   2. The CASE WAS NOT THE CREDIT CASE. She sued for defamation and malicious prosecution and
//      sought a declaratory judgment. The COPYRIGHT claim was HIS, a counterclaim, and it failed on
//      proof of copying rather than on any finding about who held the brush.
//   3. The COURTROOM PAINTING IS NOT IN THE MEMORANDUM. Twelve pages, seven numbered parts and a
//      separate opinion, and the demonstration everybody repeats appears nowhere in any of them.
//      Counted directly on the extracted text for lesson 2: "paint" and its relatives occur eleven
//      times, TEN of them inside Part III (the 1970 Life article, the testimony about who did the
//      paintings, a witness saying he could not paint, the 1976 letter about two disputed
//      paintings) and ONE in the separate opinion ("her reputation as a painter"). Part VII, the
//      only part about copyright, does not use the word at all. An earlier draft of that lesson
//      put some of the eleven in Part VII; the recount is the version that shipped.
// So the course is about the gap between what a jury decides, what an appeal reviews, and what a
// retelling carries, and its last question is the series question: what can a correction reach?
//
// AND THE HALF THAT MUST CARRY EQUAL WEIGHT, or the course becomes a debunking:
// LIABILITY WAS AFFIRMED. The finding against him stands. He lost on the continuance, on the
// cross-examination, on all five evidentiary items, on the jury instruction, on judicial misconduct
// and on his own counterclaim. He won one part out of seven, and it was the part with the number in
// it. And the panel SPLIT on that part: one judge concurred in all but Part VI and would have
// affirmed the damages too, reading the same record and the same circulation figure the other way.
//
// FETCH-OR-DO-NOT-CITE. Read in this build, on 2026-09-20:
//  - *Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990), the full unpublished
//    memorandum, from the local copy BAM supplied at
//    `content/Margaret Keane/Keane v. Keane _ No. 87-1741 _ 9th Cir. _ Judgment _ Law _ CaseMine.pdf`
//    (12 pages, rendered with PyMuPDF; the text layer is clean and the pages carry no OCR damage).
//    Every part, I to VII, plus the concurrence and dissent, read line by line. Locators below are
//    the PART number, because that is how a reader finds a holding, with the reproduction's page
//    number alongside it.
//  - The two UPI wire stories of 4 June 1986, RE-FETCHED in this build rather than taken from the
//    brief, because the courtroom demonstration rests on them: "Artist wins slander suit" and
//    "Walter Keane, ordered by a jury to pay his...". Both fetched in full.
//  - TIME, 25 December 2014 (Dockterman); The Art Newspaper, 29 June 2022 (Ludel); San Diego
//    Reader, 14 May 1992 (Parfrey). All three re-fetched in this build for the sentences lesson 14
//    measures, and for the confirmation that the word "appeal" occurs in none of the first two.
//
// HOW THE THIRD-PARTY REPRODUCTION IS HANDLED (BAM's caution, and D5a below):
// The opinion text came off a CaseMine page capture, not the official reporter. The TEXT of a
// federal judicial opinion is not copyrightable, but THIS COPY is somebody's page, complete with
// their editorial note and their product furniture, so nothing here may be uploaded. Every sentence
// this course quotes is flagged for checking against a court source, as research check A, and
// lesson 15 tells the learner that in the course itself rather than only in a comment.
//
// WHAT WAS DELIBERATELY LEFT OUT, though the memorandum prints it:
// the names of the witnesses, the daughter, the friend and the third party named in the judge's
// comment. They are private individuals whose names carry no teaching weight, and the rubric's
// gate A4 keeps them out even when a public record does not. Roles are used instead.
//
// House style, matching who-gets-nominated-course.ts and the-partner-and-the-prize-course.ts:
// `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of
// 3 to 6 lesson-specific terms; an APA 7 `## Sources` block WITH LOCATORS on every lesson; a quiz
// per teaching section (pool sized to the audit density target, serving 5, passing 80, shuffled)
// plus a final pooling 42 and serving 10, placed LAST; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are written SHORT and distractors long and specifically
// wrong, so check-longest-option passes by construction. No em dashes in user-visible copy.
export const PAINTED_IN_COURT_COURSE: AuthoredCourse = {
  title: "Painted in Court: The Keane Verdict, the Appeal, and What a Court Can Repair",
  description:
    "In June 1986 a federal jury in Honolulu awarded Margaret Keane four million dollars against her former husband Walter. During the trial she painted a big-eyed child in the courtroom; he said he had a shoulder injury and declined to paint one of his own. That is where almost every retelling stops, and it is the wrong place to stop. In January 1990 the Ninth Circuit affirmed the finding against him and threw the four million dollars out, calling it so grossly excessive that it shocks the conscience, and sent the damages question back for a new trial. She won the half that was about the truth and lost the half that was about the money. The record holds three more surprises. The case was not the credit case people remember: she sued for defamation and malicious prosecution, and the copyright claim in the case was his, a counterclaim against her, which failed because he never showed the court the works he said were copied. The panel was not unanimous: one judge would have kept the whole award, reading the same evidence about the newspaper's circulation in the opposite direction. And the scene everyone repeats, the woman painting at an easel in front of a jury, does not appear anywhere in the twelve pages of the appellate memorandum, which you can check for yourself. This course reads that memorandum part by part and teaches what it is actually made of: seven passages applying seven different standards of review, a chambers conference nobody recorded and an appellate court's failed attempt to rebuild it, an objection never made that ended an argument before it started, and a document marked not for publication, which means it settled everything about these two people and counts for nothing as law. Then it measures four retellings against the record and gives you a three-question check you can run on any account of any case. It is not legal advice and it does not teach defamation law; where the law is the point, it links to the media-law course and gets out of the way.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The scene everybody remembers
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-story-as-it-is-told",
      title: "1 · The story as it is told",
      section: "Section 1 · The scene everybody remembers",
      body: `Here is the version almost everyone has. A woman painted pictures of children with enormous eyes. Her husband signed them and sold them and told the world he had made them. Years later she took him to court in Hawaii, painted one in front of the jury while he claimed a bad shoulder, and won four million dollars.

Every sentence in that summary has something true in it. The last one is wrong in a way that changes the meaning of the whole story, and the correction is sitting in a document that takes about twenty minutes to read.

**What the wire copy said in 1986.** United Press International filed two stories on 4 June 1986. The first opens: "HONOLULU -- A federal court jury awarded artist Margaret Keane, known for her paintings of big-eyed children and animals, $4 million in a slander suit against her ex-husband, Walter Keane" (UPI, 1986a). The second reports that he "said after the federal court verdict was returned Tuesday he has no money and will appeal" (UPI, 1986b).

He did appeal. That is the part the retellings drop.

**What the appeal did.** On 18 January 1990 a three-judge panel of the United States Court of Appeals for the Ninth Circuit decided the case. The memorandum's opening paragraph ends with a single sentence that does the work of the whole document: "We affirm as to liability, and reverse and remand for a new trial on the question of damages" (*Keane v. Keane*, 1990, opening paragraph). The line printed above the body of the decision says the same thing in the court's shorthand: AFFIRMED IN PART, REVERSED AND REMANDED IN PART.

Read those two halves separately, because they went in opposite directions.

- **Affirmed as to liability.** The finding against him stands. The jury's answer on the question it was asked survived every challenge he raised.
- **Reversed and remanded on damages.** The four million dollars is gone. Not reduced. Vacated, with the damages question sent back to be tried again from the beginning.

**Four things this course keeps apart,** because the popular story runs them together: what she sued for (lesson 3, and it is not what you think), what the jury decided, what the appeal reviewed (seven passages at seven different levels of deference, in Section 2), and what the retellings carry (measured in lesson 14).

**One promise and one warning.** Everything asserted here was read on a source, and where the record is silent this course is silent and says so. And this is a course about reading a court document, not a course about law. It gives no legal advice. If you want to know what a defamation claim requires, *Reporting and Media Law* lesson 2 teaches it and lesson 3 teaches the public-figure question.

**Where this sits in the series.** *Who Gets Named* teaches the mechanisms and its lesson 23 asks what a correction can repair. *The Partner and the Prize* watches an institution decline to reopen a citation. This is the case where the question went to a jury and the jury answered it, which sounds like the strongest correction available until you read what happened next.

:::reveal What single sentence in the memorandum's opening paragraph carries the whole disposition? ||| "We affirm as to liability, and reverse and remand for a new trial on the question of damages."

:::reveal What is the difference between reducing an award and vacating it and remanding? ||| A reduction leaves a number in place. Vacating erases the number entirely and a remand sends the damages question back to be tried again, which means there is nothing to collect unless somebody tries it.

## Vocabulary
- **Liability**: whether the defendant is legally responsible at all, decided separately from how much is owed.
- **Damages**: the money awarded once liability is established.
- **Affirm**: to leave a lower court's decision standing.
- **Vacate**: to wipe out a decision or an award so that it has no further effect.
- **Remand**: to send a question back to the lower court for further proceedings.
- **Memorandum**: here, a short appellate disposition issued instead of a full published opinion.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Opening paragraph, before Part I, p. 2 of the reproduction: the disposition sentence. The AFFIRMED IN PART line sits above it on the same page.)
United Press International. (1986a, June 4). *Artist wins slander suit*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Artist-wins-slander-suit/3346518241600/ (Paragraph 1: the verdict and the amount.)
United Press International. (1986b, June 4). *Walter Keane, ordered by a jury to pay his...*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Walter-Keane-ordered-by-a-jury-to-pay-his/3288518241600/ (Paragraph 2: no money, and he will appeal.)`,
    },
    {
      slug: "the-demonstration-and-what-it-proves",
      title: "2 · The demonstration, and what it proves",
      section: "Section 1 · The scene everybody remembers",
      body: `The scene is the reason anybody remembers this case. It deserves to be read at the level of the sentence.

**The contemporaneous wire copy.** UPI, the day after the verdict: "Keane, 58, said she created all the paintings. At one point during the trial, she painted one in the courtroom. Her former husband, saying he had a shoulder injury, declined to paint one of his own" (UPI, 1986a). The second story repeats it almost word for word (UPI, 1986b).

That is the whole of it in the 1986 record read for this course. Two sentences. No easel described, no crowd, no clock.

**Four things later accounts add,** each a different kind of claim. **The judge asked for it:** TIME in 2014 says "A Hawaiian judge really did ask Margaret and Walter to each paint a big eyes picture in the courtroom in front of a crowd to determine who was telling the truth" (Dockterman, 2014). UPI says only that she painted one during the trial, so the request is TIME's and this course does not assert it. **Fifty-three minutes:** the San Diego Reader in 1992 has "her now-famous 53-minute painting of a big-eye kid executed in the courtroom" (Parfrey, 1992), and TIME repeats the figure. It is not in the 1986 wire copy. **A challenge, mandated:** the Art Newspaper's 2022 obituary calls it "another 'paint-off' challenge... this time mandated by a judge" (Ludel, 2022), and the word "another" is doing something lesson 14 comes back to. **It determined who was telling the truth:** TIME says so. No document read for this course says a court treated it that way.

**Now the part that should stop you.** The appellate memorandum runs twelve pages, seven numbered parts and a separate opinion. The courtroom demonstration appears in none of them.

That is checkable, so here is the method. The word "paint" and its relatives occur eleven times in the memorandum, and ten of the eleven sit inside Part III: the 1970 magazine article, testimony about who did the paintings, a witness saying Walter could not paint, a letter attributing two disputed paintings to him, and the question of the paintings' authorship. The eleventh is in the separate opinion, in the phrase "her reputation as a painter". Part VII, the only part of the decision about copyright, does not use the word at all; it says prints and copyrighted art. Not one occurrence is the courtroom scene.

**What follows, and what does not.** It does not follow that the demonstration never happened, since two wire stories filed the day after say it did, nor that the jury thought it unimportant, since an appellate court reviews claimed errors rather than summarising a trial. What follows is narrower: **the document that settled this case did not need the scene, and the accounts that have nothing but the scene are missing the document.**

**And what could a demonstration prove?** Painting one in 1986 shows she can paint one, in that manner, then. It does not by itself establish who put brush to a particular canvas in 1961, and his refusal is not evidence of inability, though a person watching is free to draw a conclusion. *Written by Himself* lesson 7 is this lesson's mirror: there a dramatic test-of-authorship scene is refused because the record does not carry it.

:::reveal How many times does the courtroom painting demonstration appear in the twelve-page appellate memorandum? ||| Not once. The word "paint" and its relatives occur eleven times, ten of them in Part III and one in the separate opinion, and none of those occurrences is the courtroom scene.

:::reveal Which detail of the demonstration comes from the 1986 wire copy and which comes only from later accounts? ||| The wire copy has her painting one during the trial and him declining, citing a shoulder injury. The judge's request, the fifty-three minutes, the crowd and the purpose of determining the truth all come from 2014, 1992 and 2022 accounts.

## Vocabulary
- **Contemporaneous source**: a record made at or near the time of the events it describes, such as a wire story filed the day after a verdict.
- **Demonstration**: an act performed in front of the fact-finder as evidence, as distinct from testimony about an act.
- **Appellate record**: the materials from the trial that an appeals court is allowed to consider, which is not a summary of everything that happened.
- **Accretion**: the details a story picks up as it is retold, each of which can be traced to the first account that printed it.

## Sources
Dockterman, E. (2014, December 25). *The true story behind Big Eyes*. TIME. https://time.com/3632635/the-true-story-behind-big-eyes/ (The paragraph on the courtroom demonstration: the judge's request, the fifty-three minutes and the sore shoulder. A search of the article returns no occurrence of the word "appeal".)
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part III, pp. 5-7, for ten of the eleven paint references, and the separate opinion, p. 11, for the eleventh. The absence of the courtroom scene is the finding, so the whole document, all twelve pages, is the locator.)
Ludel, W. (2022, June 29). *Margaret Keane, widely popular painter of big-eyed figures, has died at age 94*. The Art Newspaper. https://www.theartnewspaper.com/2022/06/29/margaret-keane-big-eyes-painter-obituary (The paragraph on the 1986 lawsuit.)
Parfrey, A. (1992, May 14). *Walter Keane: the saucer eye orphans have lost their father*. San Diego Reader. https://www.sandiegoreader.com/news/1992/may/14/cover-citizen-keane-the-saucer-eye-orphans-have-l/ (The sentence naming the fifty-three-minute painting.)
United Press International. (1986a, June 4). *Artist wins slander suit*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Artist-wins-slander-suit/3346518241600/ (Paragraph 4: the courtroom painting and the declined painting.)
United Press International. (1986b, June 4). *Walter Keane, ordered by a jury to pay his...*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Walter-Keane-ordered-by-a-jury-to-pay-his/3288518241600/ (Paragraph 8: the same two sentences.)`,
    },
    {
      slug: "what-she-actually-sued-for",
      title: "3 · What she actually sued for",
      section: "Section 1 · The scene everybody remembers",
      body: `If you had to guess from the retellings, you would say she sued to be declared the painter. That is not what the case was.

**The memorandum's own sentence, in its opening paragraph:** "Margaret Keane McGuire (Margaret), Walter's ex-wife, sued Walter for defamation and malicious prosecution, and sought a declaratory judgment; Walter brought a counterclaim alleging copyright infringement" (*Keane v. Keane*, 1990, opening paragraph).

Read it again slowly, because three separate surprises are packed into one line.

**Surprise one: the live claim was about a sentence, not a painting.** UPI reports that she filed suit claiming he "told a free-lance writer for USA Today she falsely claimed to be creator of the paintings he created because she thought he was dead" (UPI, 1986a). The second wire story dates that statement to 1984 (UPI, 1986b). So the thing on trial was a statement made about her in a newspaper, decades after the paintings were made. Defamation is a claim about reputation and falsity. What a defamation claim requires is taught in *Reporting and Media Law* lesson 2, and this course does not repeat it.

**Surprise two: the copyright claim was his.** He counterclaimed against her for copyright infringement. The credit machinery ran the way it was built to run: the signature and the registrations followed the name on the work, so the man whose name was on the paintings was in a position to accuse the woman who says she painted them of copying them. Part VII of the memorandum is that claim's ending, and lesson 11 reads it.

**Surprise three: a declaratory judgment was sought, and the memorandum never says what became of it.** A declaratory judgment is a court's statement of what the legal position is, without an award of money, and it is the closest thing in this case to the finding people believe was made. The memorandum lists it in the opening paragraph and never mentions it again. **This course therefore does not say what happened to it.** That gap is filed as a research check, and lesson 15 puts it in the ledger.

**What was actually appealed.** The memorandum's first sentence says: "Walter Keane (Walter) appeals from the district court's denial of his motions for a jnov, remittitur or new trial, and its entry of summary judgment on his counterclaim." Three post-trial motions and one summary judgment. Not "the case". An appeal is taken from rulings, and only from the rulings you name.

**The grounds he raised,** as the court lists them: "its denial of a continuance, its restriction on cross-examination of a witness, various erroneous evidentiary rulings and jury instructions, judicial misconduct, and excessiveness of the verdict." Six lines of attack. He won one.

**Which court, and why it mattered.** The case was in federal court on diversity jurisdiction under 28 U.S.C. section 1332(a), the route that puts a dispute between citizens of different states in a federal courtroom, with the appeal under section 1291.

:::reveal Which party brought the copyright infringement claim in this case? ||| Walter did, as a counterclaim against Margaret. She sued for defamation and malicious prosecution and sought a declaratory judgment.

:::reveal Why does this course refuse to say what happened to the declaratory judgment claim? ||| Because the memorandum names it once in the opening paragraph and never returns to it, so the document settles nothing about it, and a course that guessed would be inventing the one finding people already wrongly believe was made.

## Vocabulary
- **Defamation**: a claim that a false statement of fact injured a person's reputation.
- **Malicious prosecution**: a claim that someone brought an earlier legal proceeding against you improperly.
- **Declaratory judgment**: a court's statement of the parties' legal position, without an award of money.
- **Counterclaim**: a claim the defendant files back against the plaintiff in the same case.
- **Jnov**: judgment notwithstanding the verdict, a post-trial motion asking the judge to override what the jury decided.
- **Remittitur**: a post-trial motion asking the judge to cut the size of an award.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Opening paragraph, p. 2: the claims each party brought, the three motions appealed from, the list of alleged errors, and both jurisdictional statutes.)
United Press International. (1986a, June 4). *Artist wins slander suit*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Artist-wins-slander-suit/3346518241600/ (Paragraph 2: the substance of the statement she sued over.)
United Press International. (1986b, June 4). *Walter Keane, ordered by a jury to pay his...*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Walter-Keane-ordered-by-a-jury-to-pay-his/3288518241600/ (Paragraph 4: the statement was made in 1984 to a freelance reporter for USA Today.)`,
    },
    {
      slug: "quiz-the-scene-everybody-remembers",
      title: "4 · Knowledge check: the scene everybody remembers",
      section: "Section 1 · The scene everybody remembers",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the Ninth Circuit do with the question of liability?",
            options: ["Affirmed it", "Reversed it and directed the district court to enter judgment for Walter", "Left it undecided because the record could not be reconstructed", "Sent it back for a new trial along with the damages question"],
            correctIndex: 0,
            explanation: "The opening paragraph reads: we affirm as to liability, and reverse and remand for a new trial on the question of damages.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What did the Ninth Circuit do with the $4,000,000 award?",
            options: ["Vacated it and remanded", "Reduced it to a figure the court considered supported by the evidence", "Affirmed it in full, with one judge dissenting from that part", "Doubled it, because the defendant offered no rebutting evidence"],
            correctIndex: 0,
            explanation: "Reverse and remand for a new trial on damages. The number was erased rather than cut, so nothing remained to collect unless the damages case was tried again.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What is the difference between a remittitur and what happened here?",
            options: ["A remittitur cuts an award; this erased it", "A remittitur is granted only on appeal, and this was granted by the trial judge before the appeal", "A remittitur applies to liability findings, while this applied to the damages number", "There is no difference, because both leave a reduced number in place for collection"],
            correctIndex: 0,
            explanation: "A remittitur leaves a smaller number standing. Vacating the award plus a remand leaves no number at all until damages are tried again.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "On what date was the appellate memorandum decided?",
            options: ["18 January 1990", "18 January 1989, the year the San Diego Reader gives for the decision", "4 June 1986, the day the two wire stories were filed", "11 May 1989, which is the date the case was argued and submitted"],
            correctIndex: 0,
            explanation: "The caption gives January 18, 1990. The Reader's 1989 is a year off, and 11 May 1989 is the argument date, not the decision date.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What line appears above the body of the decision, in the court's shorthand?",
            options: ["AFFIRMED IN PART, REVERSED AND REMANDED IN PART", "AFFIRMED IN FULL, WITH ONE JUDGE CONCURRING SEPARATELY", "REVERSED AND REMANDED FOR ENTRY OF JUDGMENT FOR THE APPELLANT", "DISMISSED FOR WANT OF AN ADEQUATE APPELLATE RECORD"],
            correctIndex: 0,
            explanation: "It restates the split disposition: the liability half stands and the damages half does not.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "According to UPI, what did Walter Keane say after the verdict was returned?",
            options: ["That he had no money and would appeal", "That he accepted the verdict and would return the paintings to his former wife", "That he would ask the trial judge to order a second painting demonstration", "That he had never claimed to have painted the big-eyed children"],
            correctIndex: 0,
            explanation: "UPI, 4 June 1986: he said he has no money and will appeal, and maintained that he created the paintings despite the jury's verdict.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "How did UPI describe the claim the jury decided?",
            options: ["A slander suit", "A copyright infringement suit over the reproduction rights in the paintings", "A petition asking the court to declare her the author of the works", "A malicious prosecution suit arising from a bankruptcy filing"],
            correctIndex: 0,
            explanation: "UPI's first paragraph calls it a slander suit against her ex-husband and reports the $4 million award.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Where was the trial held?",
            options: ["Honolulu", "San Francisco, where the Ninth Circuit later heard the appeal", "La Jolla, California, where the defendant was living at the time", "San Diego, where the later bankruptcy proceeding was filed"],
            correctIndex: 0,
            explanation: "Both wire stories carry a Honolulu dateline, and the appeal is from the District of Hawaii.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What does it mean to vacate an award?",
            options: ["To wipe it out entirely", "To suspend it until the losing party can arrange to pay it in instalments", "To transfer it to a different court for collection", "To replace it with a smaller award that the appellate judges calculate themselves"],
            correctIndex: 0,
            explanation: "Vacating removes the award's effect. Here it was paired with a remand, so the damages question went back to be tried again.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Which course does this one link to rather than teaching defamation doctrine itself?",
            options: ["Reporting and Media Law", "Who Signs the Print, whose second lesson teaches what a signature certifies", "Written by Himself, whose second lesson teaches the ghostwriting contract", "The Partner and the Prize, which teaches how a prize citation is worded"],
            correctIndex: 0,
            explanation: "Its lesson 2 teaches what a defamation claim requires and lesson 3 teaches the public-figure question. This course gives no legal advice.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Which lesson of Who Gets Named does this course point to for the question of what a correction repairs?",
            options: ["Lesson 23", "Lesson 2, which teaches that a mechanism is not a villain", "Lesson 17, which lists four places a record goes quiet", "Lesson 9, which names the Matilda effect"],
            correctIndex: 0,
            explanation: "Lesson 23 is the ledger and the check a learner can run. This course is the case where the correction went to a jury.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What does liability mean, as this course uses the word?",
            options: ["Whether the defendant is responsible at all", "The total sum of money a defendant has been ordered to pay after trial", "The procedural right to bring an appeal from a final judgment", "The insurer's obligation to cover a judgment entered against its policyholder"],
            correctIndex: 0,
            explanation: "Liability and damages are separate questions, which is exactly why an appeal can keep one and remove the other.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What is a memorandum, in the sense this case uses the word?",
            options: ["A short appellate disposition", "An internal note circulated among the judges of a panel before argument", "A brief filed by counsel summarising the issues on appeal", "A trial court's written explanation of its evidentiary rulings"],
            correctIndex: 0,
            explanation: "It is the panel's decision, issued instead of a full published opinion. Section 4 reads what that status costs and what it does not.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "How many judges decided the appeal?",
            options: ["Three", "Nine, since the Ninth Circuit heard the matter en banc after the first submission was vacated", "One, because the case was assigned to a single circuit judge for a memorandum disposition", "Twelve, the same number as the jury that returned the verdict"],
            correctIndex: 0,
            explanation: "A three-judge panel: two circuit judges and a district judge sitting by designation.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What does this course promise to do where the record is silent?",
            options: ["Stay silent and say so", "Fill the gap with the most widely repeated secondary account, marked as such", "Reason from how similar cases are usually decided in that circuit", "Leave the gap unmarked, so the course reads as a continuous narrative"],
            correctIndex: 0,
            explanation: "A gap named is a gap a reader can go and fill. A gap smoothed over is a claim nobody will ever check.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "In the 1986 wire copy, what did Margaret Keane do during the trial?",
            options: ["Painted one in the courtroom", "Produced dated photographs of herself at work on the disputed canvases", "Submitted an expert report comparing brushwork across thirty paintings", "Asked the judge to order a supervised painting test outside the courthouse"],
            correctIndex: 0,
            explanation: "UPI: at one point during the trial, she painted one in the courtroom. That is the whole of the demonstration in the contemporaneous copy.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What reason did Walter Keane give for not painting one of his own?",
            options: ["A shoulder injury", "That the courtroom lighting was unsuitable for the technique he used", "That his materials had been seized in the earlier bankruptcy proceeding", "That the judge had denied him the time he needed to complete a canvas"],
            correctIndex: 0,
            explanation: "UPI reports it twice, in both stories filed on 4 June 1986: saying he had a shoulder injury, he declined to paint one of his own.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Which account says a judge asked them both to paint?",
            options: ["TIME, in 2014", "UPI, in the first of the two stories it filed on 4 June 1986", "The Ninth Circuit memorandum, in its description of the trial", "The San Diego Reader, in its 1992 timeline of the litigation"],
            correctIndex: 0,
            explanation: "TIME says a Hawaiian judge really did ask them both. UPI says only that she painted one during the trial, so the course uses UPI's wording.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Where does the figure of fifty-three minutes come from?",
            options: ["The 1992 San Diego Reader", "The two UPI wire stories filed the day after the verdict in June 1986", "The Ninth Circuit memorandum's account of the evidence at trial", "The 2022 Art Newspaper obituary, which is the earliest source for it"],
            correctIndex: 0,
            explanation: "The Reader calls it her now-famous 53-minute painting, and TIME repeats the figure in 2014. It is not in the 1986 wire copy.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "How many times do the word paint and its relatives occur in the memorandum?",
            options: ["Eleven", "Sixty-six, because the paintings are the subject of every part of the decision", "None at all, since the decision discusses only procedure and damages", "Three, all of them inside the separate opinion at the end"],
            correctIndex: 0,
            explanation: "Ten of the eleven are in Part III and the eleventh is in the separate opinion. Part VII, the only part about copyright, does not use the word at all.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Where in the memorandum does the phrase her reputation as a painter appear?",
            options: ["In the separate opinion", "In Part VI, as part of the majority's reasoning for vacating the award", "In the opening paragraph, describing what the defamation claim was about", "In Part VII, as an element of the copyright infringement analysis"],
            correctIndex: 0,
            explanation: "The judge who concurred in part and dissented in part points to testimony that the statements could harm her reputation as a painter.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What does the absence of the demonstration from the memorandum NOT establish?",
            options: ["That it never happened", "That the document which settled the case did not depend on it", "That accounts built only on the scene are missing the document", "That an appellate court reviews claimed errors rather than summarising a trial"],
            correctIndex: 0,
            explanation: "Two wire stories filed the day after say it happened. The absence shows what the deciding document rested on, not what occurred in the room.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What does painting a picture in 1986 establish about a canvas signed in 1961?",
            options: ["Nothing by itself", "That the same hand made it, since style is unique to an individual painter", "That the other party's refusal to paint is legally an admission of inability", "That the earlier work must be reattributed, because a demonstration outranks a signature"],
            correctIndex: 0,
            explanation: "It shows she can paint one, in that manner, then. Who held the brush on a particular earlier canvas is a different question.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Which lesson of Written by Himself is the mirror image of the demonstration lesson?",
            options: ["Lesson 7", "Lesson 2, which teaches that a ghostwriter's missing name is a contract deliverable", "Lesson 18, which describes a documented reattribution made by a scholar", "Lesson 1, which defines what a byline claims about a piece of writing"],
            correctIndex: 0,
            explanation: "Lesson 7 refuses a dramatic proof-of-authorship scene the record does not carry. Here the scene is in the record and still did not decide the case.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What is a contemporaneous source?",
            options: ["A record made at or near the time", "Any account written by a person who was personally present at the events", "A source that has been checked against at least two later retellings", "The earliest source a search engine returns for a given event"],
            correctIndex: 0,
            explanation: "The 4 June 1986 wire stories are contemporaneous. The 1992, 2014 and 2022 accounts are not, and they are where the extra details appear.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What does this course call the details a story picks up as it is retold?",
            options: ["Accretion", "Corroboration, since each new account adds independent support for the original", "Attribution, because each detail is credited to the writer who supplied it", "Remittitur, the term for what happens to a story as it shrinks"],
            correctIndex: 0,
            explanation: "Accretion. Every added detail can be traced to the first account that printed it, which is what lesson 14 does with four of them.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "How does the 2022 obituary describe the courtroom painting?",
            options: ["As a paint-off challenge mandated by a judge", "As a demonstration the plaintiff offered without being asked by anyone", "As an expert examination conducted outside the presence of the jury", "As an event the appellate court later described in detail in its opinion"],
            correctIndex: 0,
            explanation: "It calls it another paint-off challenge, this time mandated by a judge. The word another points back to an earlier challenge, which lesson 14 returns to.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What age does UPI give for Margaret Keane in June 1986?",
            options: ["58", "94, the age given in the obituary published after her death in 2022", "70, which is the age the same wire story gives for her former husband", "45, the age reported at the time the disputed marriage ended in 1965"],
            correctIndex: 0,
            explanation: "UPI gives her age as 58 and his as 70, of La Jolla, California.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Which two claims did Margaret Keane bring, according to the memorandum?",
            options: ["Defamation and malicious prosecution", "Copyright infringement and unfair competition, both arising from the sale of prints", "Breach of contract and fraud, arising from the marriage settlement of 1965", "Defamation and copyright infringement, tried together before one Honolulu jury"],
            correctIndex: 0,
            explanation: "She sued for defamation and malicious prosecution and sought a declaratory judgment. The copyright claim was his counterclaim.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Who brought the copyright infringement claim?",
            options: ["Walter", "Margaret, as the remedy she sought once the defamation verdict was returned", "Gannett, to protect the photographs it had published alongside the article", "The court itself, on its own motion, once the ownership question arose at trial"],
            correctIndex: 0,
            explanation: "He counterclaimed for copyright infringement against her. Part VII is that claim's ending.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What third remedy did Margaret Keane seek besides her two claims?",
            options: ["A declaratory judgment", "An injunction stopping the sale of every reproduction bearing his signature", "An order requiring the newspaper to print a correction of the 1984 article", "A court-supervised examination of the disputed canvases by an appointed expert"],
            correctIndex: 0,
            explanation: "The opening paragraph says she sought a declaratory judgment. The memorandum never returns to it, so this course does not say what became of it.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Why does this course refuse to say how the declaratory judgment claim ended?",
            options: ["The memorandum never returns to it", "Because declaratory judgments are not appealable and so could not be reviewed", "Because the trial transcript of that part of the case could not be reconstructed", "Because the parties settled it privately before the appeal was submitted"],
            correctIndex: 0,
            explanation: "It is named once in the opening paragraph and mentioned nowhere else, so the document settles nothing about it. That gap is a research check.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "In what year was the statement she sued over made?",
            options: ["1984", "1970, the year she first said publicly on a radio programme that the work was hers", "1986, during the trial itself, in an exchange with the judge", "1955, at the start of the marriage the wire stories describe"],
            correctIndex: 0,
            explanation: "UPI dates the statement to a freelance reporter for USA Today to 1984. The suit followed, and the trial ran in 1986.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "To whom was the 1984 statement made?",
            options: ["A freelance writer for USA Today", "A radio host in San Francisco who was interviewing both parties at once", "A gallery owner in La Jolla who was preparing a catalogue of the works", "An investigator appointed by the bankruptcy court to value the estate"],
            correctIndex: 0,
            explanation: "Both wire stories say he told a freelance writer for USA Today that she falsely claimed to be the creator of the paintings.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "From what rulings did Walter Keane appeal?",
            options: ["Three post-trial motions and a summary judgment", "The jury's verdict itself, which an appellant may challenge directly as a whole", "Only the damages award, since that was the sole part he had preserved", "The trial judge's refusal to hold a second painting demonstration"],
            correctIndex: 0,
            explanation: "The denial of his motions for a jnov, remittitur or new trial, and the entry of summary judgment on his counterclaim. An appeal is taken from named rulings.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What is a jnov?",
            options: ["A motion to override the jury", "A motion asking the appellate court to take the case before judgment is entered", "A motion to have a new jury empanelled after a mistrial is declared", "A motion asking the trial judge to certify a question to a higher court"],
            correctIndex: 0,
            explanation: "Judgment notwithstanding the verdict: a post-trial motion asking the judge to enter judgment against what the jury decided.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What is a remittitur?",
            options: ["A request to cut an award", "A request to send the case back to the state court it was removed from", "A request that the appellate court remit the case to a different panel", "A request for a new trial on liability only, leaving damages undisturbed"],
            correctIndex: 0,
            explanation: "It asks the judge to reduce the size of the award. He moved for one and for a jnov and a new trial, and all three were denied.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "On what basis was the case in federal court?",
            options: ["Diversity jurisdiction", "Federal question jurisdiction, because the counterclaim arose under the Copyright Act", "Admiralty jurisdiction, because the works were shipped between Hawaii and California", "Supplemental jurisdiction over claims related to an earlier bankruptcy proceeding"],
            correctIndex: 0,
            explanation: "The memorandum states diversity jurisdiction under 28 U.S.C. section 1332(a), with the appeal under section 1291.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Which statute gave the Ninth Circuit jurisdiction over the appeal?",
            options: ["28 U.S.C. section 1291", "28 U.S.C. section 1332(a), the same provision that put the case in federal court", "17 U.S.C. section 411, the copyright registration requirement", "Ninth Circuit Rule 36-3, which governs the citation of unpublished dispositions"],
            correctIndex: 0,
            explanation: "Section 1291 covers appeals from final decisions. Section 1332(a) is the diversity provision, and Rule 36-3 is about citation, not jurisdiction.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "How many separate grounds of error does the memorandum list in its opening paragraph?",
            options: ["Six", "Two, being the evidentiary rulings and the size of the verdict", "Eleven, one for each occurrence of the word paint in the document", "Seven, matching the seven numbered parts of the decision"],
            correctIndex: 0,
            explanation: "The continuance, the cross-examination restriction, evidentiary rulings, jury instructions, judicial misconduct, and excessiveness. He won on the last one only.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What is a counterclaim?",
            options: ["A claim the defendant files back", "A claim brought by a third party who was not originally named in the suit", "A claim raised for the first time on appeal after the trial has ended", "A defence that denies every allegation in the plaintiff's complaint"],
            correctIndex: 0,
            explanation: "The defendant sues the plaintiff in the same case. Here it is how a copyright claim came to be his rather than hers.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What is malicious prosecution, as a claim?",
            options: ["That an earlier proceeding was brought improperly", "That a witness gave knowingly false testimony during a trial", "That a prosecutor pursued criminal charges without sufficient evidence to convict", "That a party concealed documents it was required to produce in discovery"],
            correctIndex: 0,
            explanation: "It concerns an earlier legal proceeding brought against the claimant. The memorandum names it and never says what happened to it.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What is a declaratory judgment?",
            options: ["A statement of the legal position", "An award of money calculated without reference to proof of actual loss", "A provisional ruling that expires unless it is renewed within a fixed period", "A finding that one party's conduct was wilful rather than merely negligent"],
            correctIndex: 0,
            explanation: "It states the parties' rights without awarding money. It is the closest thing in this case to the finding people believe was made.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What does this course say the signature and the registrations followed?",
            options: ["The name on the work", "The hand that actually made the work, once a court had heard the evidence", "The place of first publication, under the law of the state where it occurred", "The marital property agreement the parties signed when they separated"],
            correctIndex: 0,
            explanation: "That is why the man whose name was on the paintings was in a position to accuse the woman who says she painted them of copying them.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Which of these is NOT among the six grounds of error the memorandum lists?",
            options: ["Refusal to order a painting demonstration", "Judicial misconduct by the district judge during the conduct of the trial", "Restriction on the cross-examination of a rebuttal witness", "Excessiveness of the verdict returned by the jury"],
            correctIndex: 0,
            explanation: "The demonstration is not mentioned anywhere in the memorandum, so it could not be among the grounds of appeal.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What did the 1984 statement say about why she was claiming the paintings?",
            options: ["That she thought he was dead", "That she had bought the reproduction rights from him after the divorce", "That she had been advised to do so by her lawyers in an earlier proceeding", "That she had developed the style independently after studying his technique"],
            correctIndex: 0,
            explanation: "UPI reports the claim as: she falsely claimed to be creator of the paintings he created because she thought he was dead.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "According to UPI, what did Walter Keane insist at trial?",
            options: ["That he created the paintings", "That the paintings had been made jointly and should carry both names equally", "That he had sold the copyrights to a gallery before the marriage ended", "That the courtroom demonstration should be excluded as unfairly prejudicial"],
            correctIndex: 0,
            explanation: "UPI: acting as his own attorney, he insisted he created the big-eyed paintings and said his former wife adopted his style.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What did UPI report Walter Keane said about his finances at trial?",
            options: ["That he was penniless", "That his assets had been frozen by the Hawaii court before the trial began", "That he would pay the award in instalments over the following decade", "That the paintings in his possession were worth more than the sum claimed"],
            correctIndex: 0,
            explanation: "UPI: he called the art his contribution to the world and also said he was penniless.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What did UPI report her lawyer told the jury in closing arguments?",
            options: ["That she brought paintings and subjects testified they posed", "That the trial judge had personally compared the disputed canvases overnight", "That the defendant had confessed to the deception in a deposition", "That the appellate court would be asked to declare her the sole author"],
            correctIndex: 0,
            explanation: "UPI reports the closing argument: she brought paintings into the courtroom and subjects testified they posed for them, while he brought none because they do not exist.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What years does UPI give for the marriage?",
            options: ["1955 to 1965", "1950 to 1970, the span across which the disputed paintings were produced", "1965 to 1984, ending with the statement she sued over", "1961 to 1986, ending in the year of the Honolulu trial"],
            correctIndex: 0,
            explanation: "UPI reports her lawyer saying he bullied her into letting him claim credit during their marriage from 1955 to 1965.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "According to UPI, when did she first say publicly that the paintings were hers?",
            options: ["On a San Francisco radio programme in 1970", "At the Honolulu trial in 1986, when she painted one in the courtroom", "In an interview with a USA Today freelance writer during 1984", "In a letter to the couple's accountant written in 1976"],
            correctIndex: 0,
            explanation: "UPI reports her lawyer saying she revealed on a San Francisco radio talk show in 1970 that she was the originator of the paintings.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Whose statements were the bullying and the living a lie, as UPI reports them?",
            options: ["Her lawyer's, in closing argument", "The trial judge's, in his instructions to the jury before deliberation", "The appellate panel's, in the part of the memorandum reviewing the evidence", "A court-appointed expert's, in a report submitted before the trial"],
            correctIndex: 0,
            explanation: "UPI attributes them to her lawyer addressing the jury. A closing argument is an advocate's characterisation, not a finding.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "Why does this course treat the courtroom demonstration and the appellate holding as separate things?",
            options: ["One is a scene, the other is the decision", "Because the demonstration was excluded from evidence as unfairly prejudicial to him", "Because the appellate court expressly declined to consider it on the record before it", "Because the demonstration happened after the verdict rather than during the trial"],
            correctIndex: 0,
            explanation: "The scene is in the wire copy and nowhere in the memorandum. The decision rests on standards of review, preservation and proof of damages.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What kind of claim is defamation, in one phrase?",
            options: ["A claim about reputation and falsity", "A claim about the ownership of a copyrightable work of visual art", "A claim about a promise made and then broken between two parties", "A claim about the improper bringing of an earlier lawsuit"],
            correctIndex: 0,
            explanation: "That is why winning it does not amount to a ruling about who painted a canvas. The statement, not the canvas, is the thing tried.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What does an appeal actually challenge?",
            options: ["Named rulings", "Everything that happened at trial, which the appellate court reviews afresh", "The credibility of the witnesses, which the appellate judges reassess from the transcript", "The jury's choice of damages figure, which is the only reviewable question"],
            correctIndex: 0,
            explanation: "He appealed from three denied post-trial motions and one summary judgment. What is not named is not before the court.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Which of the six grounds of error did Walter Keane ultimately win on?",
            options: ["Excessiveness of the verdict", "Judicial misconduct, which the panel found had made the trial unfair to him", "The denial of the continuance, which left him without counsel at trial", "The restriction on his cross-examination of the rebuttal witness"],
            correctIndex: 0,
            explanation: "One out of six, and it was the ground with the number in it. Everything else was affirmed, including the summary judgment against his counterclaim.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What is the appellate record?",
            options: ["The trial materials an appeals court may consider", "A summary of the trial prepared by the clerk for the appellate judges", "The published volume in which a circuit's decisions are printed", "The list of authorities each side cites in its appellate brief"],
            correctIndex: 0,
            explanation: "It is not a summary of everything that happened, which is why a scene can be famous and still be absent from the decision.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What is a demonstration, as this lesson uses the term?",
            options: ["An act performed in front of the fact-finder", "A witness statement sworn before trial and read aloud to the jury", "A protest held outside a courthouse while a trial is in progress", "An expert's written comparison of two disputed works"],
            correctIndex: 0,
            explanation: "It is an act offered as evidence, as distinct from testimony about an act, which is why what it proves has limits worth naming.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What does this course say about giving legal advice?",
            options: ["It gives none", "It gives general guidance but not advice about any particular dispute", "It advises only on how to read appellate opinions in the Ninth Circuit", "It gives advice where the memorandum states a rule in its own words"],
            correctIndex: 0,
            explanation: "It is a course about reading a court document. Where the law is the point, it links to Reporting and Media Law and gets out of the way.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Which two UPI stories does this course rely on?",
            options: ["Two filed on 4 June 1986", "One filed in June 1986 and one filed after the appeal was decided in 1990", "A single story, reprinted under two different headlines by separate subscribers", "Two filed in 1984, when the statement she sued over was published"],
            correctIndex: 0,
            explanation: "Both carry a Honolulu dateline and both were re-fetched in full for this build, because the courtroom demonstration rests on them.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What is the relationship between the finding and the number, after this appeal?",
            options: ["The finding stands, the number is gone", "Both stand, but collection was postponed until the bankruptcy concluded", "Both were erased, and the whole case was sent back for a new trial", "The number stands and the finding was sent back for reconsideration"],
            correctIndex: 0,
            explanation: "Affirmed as to liability, reversed and remanded on damages. Saying both halves in one sentence is the test of whether you have read the case.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Why does the course call the four million dollar figure the part the retellings keep?",
            options: ["It is the only number in the story", "Because it was the figure the appellate court expressly approved as supported", "Because the trial judge repeated it in his instructions to the jury", "Because it was the amount actually paid to her under the judgment"],
            correctIndex: 0,
            explanation: "A number is memorable and the disposition is not, which is how three of four accounts read for this course carry the verdict and drop the appeal.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What did the trial judge do with Gannett, according to UPI?",
            options: ["Dismissed it as a defendant mid-trial", "Held it jointly liable with Walter Keane for the full four million dollars", "Ordered it to print a correction of the 1984 article within thirty days", "Severed its case and set it down for a separate trial the following year"],
            correctIndex: 0,
            explanation: "UPI reports the newspaper's publisher was dismissed as a defendant about midway through the trial, which left the man who spoke as the only defendant.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Who represented Walter Keane at trial, according to UPI?",
            options: ["He acted as his own attorney", "A San Francisco firm that also represented the newspaper's publisher", "Court-appointed counsel assigned after his own lawyer withdrew", "A La Jolla lawyer who had handled his earlier copyright registrations"],
            correctIndex: 0,
            explanation: "UPI: her ex-husband, who acted as his own attorney, insisted he created the big-eyed paintings.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What did UPI report Margaret Keane said after the verdict?",
            options: ["That she was glad it was over", "That she would immediately begin proceedings to recover the reproduction rights", "That she expected the award to be increased once the appeal was heard", "That the courtroom demonstration had been the decisive moment of the trial"],
            correctIndex: 0,
            explanation: "UPI reports she said she was grateful for the jury's verdict and added that she was glad it was over.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What did Walter Keane tell UPI about when he began painting the children?",
            options: ["Ten years before his former wife had heard of him", "In the year the marriage began, which the same story gives as 1955", "After a San Francisco radio broadcast prompted him to take up the subject", "Only once the disputed canvases had already been sold through galleries"],
            correctIndex: 0,
            explanation: "UPI quotes him: I was painting these children 10 years before this woman had ever heard of him, as the wire copy renders the close of the sentence.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — A jury decides, an appeal reviews
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "bifurcation-and-the-empty-chair",
      title: "5 · The shape of the trial was set before it started",
      section: "Section 2 · A jury decides, an appeal reviews",
      body: `Part I of the memorandum is about a scheduling decision. It is the least dramatic part of the document and it explains more about the trial than the famous scene does.

**What happened.** Walter Keane's counsel withdrew with the permission of the court. The court says he learned this "at the latest" 49 days before the scheduled trial date of 6 May 1986. He asked for the trial to be put off until 13 October 1986. The magistrate and the trial judge said no.

**But the judge did something else.** The court "did bifurcate the trial, so that the defamation claim would be tried as scheduled and Walter would have the benefit of counsel for co-defendant Gannett". Bifurcation means splitting one case into separately tried parts. The defamation claim, the one with the newspaper in it, went first. And because the newspaper was still a defendant, its lawyers would be in the room defending the same statement he was defending.

**Then the newspaper left.** Its publisher moved for a directed verdict and the judge granted it. UPI puts the dismissal about midway through the trial; the San Diego Reader's timeline puts it thirteen days in. The memorandum's own phrase is the one to remember: "the directed verdict in Gannett's favor that left Walter alone at the defense table for the last days of trial".

So the courtroom in which a man declined to paint a picture was a courtroom he was sitting in alone, in a trial that had been split in two by an order made before it began, after a continuance he asked for and did not get.

**The court's reasoning, which is careful about hindsight.** It says the trial judge "reasonably expected Gannett to defend on the basis of truth as well as lack of actual malice and could not have anticipated the directed verdict in Gannett's favor". And then a sentence that does two things at once: nor could the court have anticipated "the extreme degree of Walter's erratic, emotional, and repetitive conduct in the courtroom, which went well beyond what might ordinarily be expected of pro se parties". It is a finding about his conduct and, at the same time, a reason the judge below is not to blame for the consequences.

**One concession worth noticing.** The memorandum says "Although Walter may well have suffered significant prejudice, this was not foreseeable at the time the continuance was denied." The court does not say he was fine. It says the question is what the judge knew when the judge decided.

**And one piece of housekeeping that matters later.** Because the case was bifurcated, "The remaining claims were not decided until well after Walter's proposed October 13 trial date, so we need not consider the denial of the continuance in relation to those claims." A single scheduling order therefore decided what the appellate court had to review and what it could set aside.

**Why this belongs in a course about credit.** The story people tell is about two people and a brush. The document is about who was in the room, who had a lawyer, what got tried first and what the judge could see coming. Those are the conditions under which the question of credit actually got answered, and none of them is in any retelling read for this course.

:::reveal What did the trial judge do instead of granting the continuance? ||| Bifurcated the trial, so the defamation claim went ahead on schedule while the co-defendant newspaper was still in the case and Walter had the benefit of its counsel.

:::reveal Why did the appellate court say the trial judge was not at fault for Walter ending up unrepresented at the defence table? ||| Because the judge could not have anticipated the directed verdict in the newspaper's favour, and the question on review is what was foreseeable when the continuance was denied.

## Vocabulary
- **Continuance**: a postponement of a trial date.
- **Bifurcation**: splitting a case so that different claims or issues are tried separately.
- **Directed verdict**: a ruling taking a claim from the jury because the evidence cannot support a verdict on it.
- **Pro se**: representing yourself, without a lawyer.
- **Prejudice**: in this sense, harm to a party's ability to present its case.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part I, pp. 3-4: the 49 days, the 6 May 1986 trial date, the requested 13 October date, the bifurcation, the empty defence table, and the sentence about erratic conduct.)
Parfrey, A. (1992, May 14). *Walter Keane: the saucer eye orphans have lost their father*. San Diego Reader. https://www.sandiegoreader.com/news/1992/may/14/cover-citizen-keane-the-saucer-eye-orphans-have-l/ (The sentence putting the directed verdict thirteen days into the trial.)
United Press International. (1986a, June 4). *Artist wins slander suit*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Artist-wins-slander-suit/3346518241600/ (Paragraph 3: the newspaper's publisher dismissed as a defendant about midway through the trial.)`,
    },
    {
      slug: "standards-of-review",
      title: "6 · Seven passages, seven levels of deference",
      section: "Section 2 · A jury decides, an appeal reviews",
      body: `Here is the single most useful thing in this document, and it has nothing to do with paintings.

An appeal is not a second trial. It is a set of separate questions, and each one comes with a rule about how much the appellate court is allowed to disagree. That rule is called the standard of review, and in this one short memorandum you can watch seven of them applied to one record.

**1. The continuance: abuse of discretion.** The court states the test in someone else's words: "The issue on review is not whether we consider a request for a continuance reasonable, but whether the district court's refusal to grant the continuance was 'so unreasonable and arbitrary as to amount to an abuse of discretion.'" Then it applies it in a sentence that should be printed on the wall of every appellate advocate's office: "Although we might have found Walter's request for a continuance reasonable, we cannot say that the district court's refusal was 'so unreasonable and arbitrary as to amount to an abuse of his discretion.'"

Read that twice. The appellate judges say they might have decided the other way, and they affirm anyway. That is what deference means, and it is not a loophole. It is the rule.

**2. Evidence that was objected to: abuse of discretion, plus harm.** "Otherwise, we review evidentiary decisions for abuse of discretion... We will not reverse unless, more probably than not, the error tainted the verdict." So a party must win twice: the ruling was wrong, and the wrongness probably changed the result.

**3. Evidence that was not objected to: plain error.** "Where Walter failed to object to evidence, any objection is waived absent a showing of plain error affecting his substantial rights." A missed objection does not merely weaken an argument. It nearly removes it.

**4. Jury instructions with no objection: nothing at all.** Part IV is two sentences of rule and one of application. "Failure to make contemporaneous objection to a proposed jury instruction precludes appellate review even in cases of plain error." Note the words "even in cases of plain error". This is the harshest rule in the document, and lesson 7 shows what it cost.

**5. Judicial misconduct: was the trial unfair?** Part V quotes: "Very few cases outside of the criminal law area support an appellate finding of general judicial misconduct during trial. The standard of reversal is whether the trial was unfair." And: "A clear and precise showing of prejudice must be made to secure a reversal, particularly in noncriminal trials."

**6. The damages award: shocking to the conscience.** Part VI: the court "will affirm an award of damages unless it is clearly unsupported by the evidence or grossly excessive, monstrous, or shocking to the conscience", and "In assessing the excessiveness of damages, we consider the evidence in the light most favorable to the verdict." Deferential language, and it is the one ground he won.

**7. And the exception: summary judgment, reviewed independently.** Part VII opens: "We review the entry of summary judgment independently." No deference at all. The appellate court applies the same rule the district court applied and reaches its own answer.

**The pattern.** The only question the appellate court answers for itself is the one that was decided on paper, with no witnesses and no jury. Everything that happened in the room in front of the trial judge gets deference, because the appellate judges were not there. An appeal is not a rerun. It is a review of whether the people who were there stayed inside their lane.

:::reveal What is the standard of review, in one sentence? ||| The rule that fixes how much an appellate court is allowed to disagree with a particular kind of decision, which differs from question to question inside the same appeal.

:::reveal Which question in this memorandum is reviewed with no deference at all, and why? ||| The summary judgment on the counterclaim, reviewed independently, because it was decided on paper under a written standard rather than in the room in front of the trial judge.

## Vocabulary
- **Standard of review**: the degree of deference an appellate court gives a particular kind of decision.
- **Abuse of discretion**: a deferential standard under which a decision stands unless it was unreasonable and arbitrary.
- **Plain error**: an error so clear that a court may notice it even though nobody objected at the time.
- **Harmless error**: an error that does not require reversal because it probably did not change the result.
- **Independent review**: deciding the question afresh, giving the lower court's answer no weight.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part I, p. 3, for the continuance standard and p. 4 for the might-have-found sentence; Part III, p. 6, for the evidentiary and plain-error standards; Part IV, pp. 7-8; Part V, p. 8; Part VI, p. 9; Part VII, p. 10, for independent review.)`,
    },
    {
      slug: "preserved-waived-and-the-record",
      title: "7 · Preserved, waived, and a record that could not be rebuilt",
      section: "Section 2 · A jury decides, an appeal reviews",
      body: `Two parts of this memorandum are about things that were true and could not be used. They are the most transferable lessons in the case.

**Part II: the conference nobody recorded.** A rebuttal witness for Margaret, who had been Walter's girlfriend, testified after the newspaper had left the case and after he had rested his defence. He was then representing himself. His cross-examination, the court says, "elicited a vitriolic response". The judge called a recess and took him and opposing counsel into chambers.

Then this: "The conference was not recorded because the proceedings were being taped without a court reporter, and while the courtroom had taping equipment, the judge's chambers did not."

In that unrecorded room the judge asked him what questions he intended to ask. That is an offer of proof, the device by which a party puts on the record what excluded evidence would have been, so that an appellate court can judge whether excluding it mattered. "Because this conference was not recorded, the record does not tell us what if any offer of proof Walter made."

**The appellate court tried to fix it.** "We withdrew this case from submission pursuant to Fed.R.App.P. 10(c) or (e) in order that the record might be reconstructed. This effort failed."

Four words. The docket carries the trace of them: argued and submitted 11 May 1989, submission deferred 16 May, resubmitted 30 May, submission vacated 8 June, resubmitted 29 June 1989, decided 18 January 1990. Three months of procedural motion that produced nothing.

**Then the rule falls on him.** "It was Walter's responsibility, either during or immediately after the in-chambers conference, to preserve a proper record for appeal, and the consequences of any insufficiency properly fall on him." And the conclusion, quoted from an earlier case: "Since no record is provided upon which [Walter's] claim can be evaluated, it must be denied."

The court then adds an alternative holding, which is standard practice and worth recognising: even if there had been an abuse of discretion, there was no harmful error, because the witness's direct testimony "was cumulative in many respects", her "bias and partiality were obvious to the jury", and "In light of the other overwhelming evidence against Walter, we cannot conclude that the cross-examination, whatever it would have been, would have changed the outcome of the case."

**Part IV: the objection never made.** The court had ruled earlier that the phrase "Thinking he was dead" was "only a statement of motive and not actionable per se". The phrase then went into the jury instructions twice. On appeal he argued that was an error. The answer is one sentence: "Walter's failure to object to the instructions precludes our review."

Not "the argument is weak". Not "we disagree". The court does not reach it at all.

**The lesson for anybody who cares about a record.** In this system a claim that is true but not in the record is, on appeal, a claim that does not exist. The remedy has to be built at the moment, by the person who wants it, in a form somebody else can later read. A grievance without a record is a grievance. That is the same discipline this whole series applies to an archive, a citation and a credit line, and here it has a price tag on it.

:::reveal What is an offer of proof, and why did its absence end Part II? ||| It is the device by which a party puts on the record what excluded evidence would have shown. Because the chambers conference was unrecorded and no offer of proof appears in the record, the appellate court had nothing to evaluate and denied the claim.

:::reveal What happened to the argument about the phrase in the jury instructions? ||| It was not reached at all. Failure to object to an instruction at the time precludes appellate review even for plain error, so the court never decided whether the instruction was wrong.

## Vocabulary
- **Offer of proof**: a statement on the record of what excluded evidence would have been.
- **Preservation**: putting an objection or an offer of proof on the record so it can be raised on appeal.
- **Waiver**: losing the right to raise a point because it was not raised at the time.
- **Cumulative evidence**: evidence that repeats what the jury has already heard from another source.
- **Alternative holding**: a second, independent reason for the same result, given in case the first is wrong.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part II, pp. 4-5: the unrecorded conference, the failed reconstruction under Fed. R. App. P. 10(c) or (e), the responsibility sentence and the harmless-error alternative. Part IV, pp. 7-8: the phrase in the instructions and the preclusion sentence. The submission history is on p. 2, above the disposition.)`,
    },
    {
      slug: "quiz-a-jury-decides-an-appeal-reviews",
      title: "8 · Knowledge check: a jury decides, an appeal reviews",
      section: "Section 2 · A jury decides, an appeal reviews",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long before the scheduled trial date did Walter Keane learn his counsel had withdrawn?",
            options: ["At the latest, 49 days", "Thirteen days, the same interval the Reader gives for the directed verdict", "On the morning of trial, which is why the continuance request was made orally", "About five months, the interval between the request and his proposed October date"],
            correctIndex: 0,
            explanation: "Part I says he learned it at the latest 49 days before the scheduled trial date of May 6, 1986, and treats that as a lack of diligence in finding new counsel.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What was the scheduled trial date?",
            options: ["6 May 1986", "13 October 1986, the date to which he asked for the trial to be moved", "4 June 1986, the day the two wire stories reported the verdict", "18 January 1990, which is the date the appeal was decided"],
            correctIndex: 0,
            explanation: "Part I gives the scheduled date as May 6, 1986. The 13 October date is the one he asked for and did not get.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What did the district judge do instead of granting the continuance?",
            options: ["Bifurcated the trial", "Appointed counsel for him at public expense for the duration of the trial", "Postponed only the copyright counterclaim and tried everything else at once", "Ordered the newspaper's publisher to share its counsel with him formally"],
            correctIndex: 0,
            explanation: "The defamation claim was tried as scheduled while the co-defendant newspaper was still in the case, so he would have the benefit of its counsel.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What does bifurcation mean?",
            options: ["Splitting a case into separately tried parts", "Assigning two judges to preside over a single trial at the same time", "Dividing a damages award between two plaintiffs in the same proceeding", "Hearing a claim and its counterclaim before two different juries in one room"],
            correctIndex: 0,
            explanation: "Here it let the defamation claim go ahead on schedule while the remaining claims waited, which also shaped what the appellate court had to review.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What phrase does the memorandum use for Walter Keane's position after the newspaper was dismissed?",
            options: ["Alone at the defense table", "Deprived of any opportunity to present a defence on the merits", "Represented only by counsel appointed on the morning of the final day", "Excluded from the courtroom for the remainder of the proceedings"],
            correctIndex: 0,
            explanation: "The memorandum describes the directed verdict in Gannett's favor that left Walter alone at the defense table for the last days of trial.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "On what basis did the appellate court say the trial judge could not be faulted for that outcome?",
            options: ["It was not foreseeable when the continuance was denied", "Because the appellant had expressly consented to proceed without counsel", "Because a civil defendant has no right to representation of any kind", "Because the appellant never asked for the trial to be halted at that point"],
            correctIndex: 0,
            explanation: "Part I says the court reasonably expected the newspaper to defend on truth and lack of actual malice and could not have anticipated the directed verdict.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What does the memorandum concede about the effect on Walter Keane?",
            options: ["He may well have suffered significant prejudice", "That the denial of the continuance was an abuse of discretion on the facts", "That his conduct in the courtroom was within the normal range for pro se parties", "That the trial judge should have appointed counsel once the newspaper was dismissed"],
            correctIndex: 0,
            explanation: "The court says so plainly and then says it was not foreseeable at the time the continuance was denied, which is what the standard of review asks.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "How does the memorandum describe his conduct in the courtroom?",
            options: ["Erratic, emotional and repetitive", "Obstructive to the point of contempt, for which sanctions were imposed", "Unremarkable, given the ordinary difficulties faced by pro se parties", "Calculated to provoke the trial judge into making a reviewable error"],
            correctIndex: 0,
            explanation: "The court calls the degree of it extreme and says it went well beyond what might ordinarily be expected of pro se parties.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What does pro se mean?",
            options: ["Representing yourself", "Appearing through counsel appointed by the court at public expense", "Appearing on behalf of a company rather than in a personal capacity", "Taking part in a proceeding without having been formally served"],
            correctIndex: 0,
            explanation: "UPI reports he acted as his own attorney, and the memorandum measures his conduct against what is ordinarily expected of pro se parties.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "Why did the bifurcation limit what the appellate court had to consider?",
            options: ["The remaining claims were tried later", "Because claims tried after a bifurcation order may not be appealed at all", "Because the appellant withdrew his objections to the later proceedings", "Because the later claims were decided by a different district judge"],
            correctIndex: 0,
            explanation: "They were not decided until well after his proposed 13 October date, so the court said it need not consider the continuance in relation to them.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What is a directed verdict?",
            options: ["A ruling taking a claim from the jury", "An instruction telling the jury which verdict the judge would prefer", "A verdict returned by a jury that the judge has already approved in advance", "A ruling that sends a claim to a second jury for reconsideration"],
            correctIndex: 0,
            explanation: "It ends a claim because the evidence cannot support a verdict on it. Granting one for the newspaper is what left him alone at the defence table.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "How do the two later accounts differ on when the newspaper left the case?",
            options: ["UPI says midway, the Reader says thirteen days in", "UPI says thirteen days in, while the Reader says on the final day of trial", "They agree exactly, and both figures are confirmed by the memorandum", "Neither mentions it, so the detail comes only from the appellate record"],
            correctIndex: 0,
            explanation: "UPI puts the dismissal about midway through the trial and the Reader's timeline puts it thirteen days in. The memorandum gives no day count.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "On what two grounds did the appellate court expect the newspaper to defend?",
            options: ["Truth and lack of actual malice", "Lack of jurisdiction and failure to state a claim on the pleadings", "Consent and the expiry of the limitation period for the 1984 statement", "Fair comment and the absence of any identifiable person in the article"],
            correctIndex: 0,
            explanation: "Part I says the court reasonably expected Gannett to defend on the basis of truth as well as lack of actual malice.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What is a standard of review?",
            options: ["How much an appellate court may disagree", "A checklist the trial judge applies before admitting any item of evidence", "The minimum quality of evidence a jury must have before returning a verdict", "The procedure for deciding which appellate judges will hear a given case"],
            correctIndex: 0,
            explanation: "It differs from question to question inside the same appeal, which is how one memorandum can affirm six things and reverse one.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What standard governed the denial of the continuance?",
            options: ["Abuse of discretion", "Independent review, with no weight given to the district court's decision", "Plain error, because no contemporaneous objection had been made to it", "Whether the trial as a whole was unfair to the moving party"],
            correctIndex: 0,
            explanation: "The test quoted is whether the refusal was so unreasonable and arbitrary as to amount to an abuse of discretion.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What does the memorandum say about whether it might itself have granted the continuance?",
            options: ["It might have found the request reasonable", "It states that no reasonable judge could have granted such a request", "It declines to say, because the question is not properly before the court", "It says the request was so plainly unreasonable that the point needs no discussion"],
            correctIndex: 0,
            explanation: "And it affirms anyway, because the question is not what the appellate judges would have done but whether the refusal was unreasonable and arbitrary.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What must a party show to reverse on an evidentiary ruling that was objected to?",
            options: ["Abuse of discretion and probable taint", "Only that the ruling was wrong, since evidentiary errors are presumed harmful", "That the evidence would have been inadmissible in any court in the country", "That the jury asked about the evidence during its deliberations"],
            correctIndex: 0,
            explanation: "The court reviews for abuse of discretion and will not reverse unless, more probably than not, the error tainted the verdict. The party has to win twice.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What happens to an objection to evidence that was never made at trial?",
            options: ["It is waived absent plain error", "It is preserved automatically, provided it appears in the post-trial motions", "It is reviewed under the same standard as an objection made at the time", "It may be raised only if the opposing party agrees on appeal"],
            correctIndex: 0,
            explanation: "Part III: where Walter failed to object, any objection is waived absent a showing of plain error affecting his substantial rights.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is the rule for a jury instruction that drew no contemporaneous objection?",
            options: ["Appellate review is precluded", "It is reviewed for plain error, as unobjected-to evidence is", "It is reviewed independently, because instructions are questions of law", "It may be challenged only by a motion for a new trial, not on appeal"],
            correctIndex: 0,
            explanation: "Part IV says the failure precludes appellate review even in cases of plain error, which is the harshest rule in the document.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is the standard for reversing on judicial misconduct?",
            options: ["Whether the trial was unfair", "Whether any comment by the judge could have been overheard by a juror", "Whether the judge expressed impatience with a party more than once", "Whether the judge's conduct would be sanctionable under the judicial code"],
            correctIndex: 0,
            explanation: "Part V quotes that standard and adds that a clear and precise showing of prejudice is required, particularly in noncriminal trials.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What does Part V say about how often appellate findings of judicial misconduct succeed outside criminal law?",
            options: ["Very few cases support one", "That they succeed roughly as often in civil trials as in criminal ones", "That they are the most common ground of reversal in civil appeals", "That the circuit has never considered such a claim in a civil case"],
            correctIndex: 0,
            explanation: "The quoted passage begins: very few cases outside of the criminal law area support an appellate finding of general judicial misconduct during trial.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is the standard for reviewing the size of a damages award?",
            options: ["Clearly unsupported, grossly excessive, monstrous or shocking", "Whether a majority of the appellate panel would have awarded a smaller sum", "Whether the award exceeds the plaintiff's documented out-of-pocket losses", "Whether the trial judge stated reasons for allowing the award to stand"],
            correctIndex: 0,
            explanation: "Part VI quotes that formulation and adds that the evidence is considered in the light most favourable to the verdict.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "In assessing excessiveness, how does the court view the evidence?",
            options: ["In the light most favourable to the verdict", "In the light most favourable to the party challenging the award", "Neutrally, reweighing the testimony as a second fact-finder would", "Only as summarised in the trial judge's post-trial ruling"],
            correctIndex: 0,
            explanation: "Part VI says so expressly, which makes the outcome of that part more striking, since the award still did not survive.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "How is a summary judgment reviewed on appeal?",
            options: ["Independently", "For abuse of discretion, as evidentiary rulings are reviewed", "Only for plain error, unless the losing party objected on the record", "Not at all, because a summary judgment is not a final decision"],
            correctIndex: 0,
            explanation: "Part VII opens by saying so, and the court then applies the same rule the district court applied and reaches its own answer.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What does the pattern of standards in this memorandum show?",
            options: ["Paper decisions get no deference, courtroom ones do", "That every question on appeal is decided afresh by the appellate judges", "That deference increases the more serious the alleged error becomes", "That civil appeals apply a single standard across all questions raised"],
            correctIndex: 0,
            explanation: "The only question answered with no deference is the summary judgment, decided on paper. Everything that happened in front of the trial judge is reviewed deferentially.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is harmless error?",
            options: ["An error that probably did not change the result", "An error that both parties agreed to at the time it was made", "An error in a ruling that was never actually applied during the trial", "An error that a party waived by failing to object when it occurred"],
            correctIndex: 0,
            explanation: "It is why a party must show both that a ruling was wrong and that, more probably than not, the wrongness tainted the verdict.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is plain error?",
            options: ["An error clear enough to notice without an objection", "An error that appears on the face of the written judgment rather than the transcript", "An error admitted by the trial judge in a post-trial ruling", "An error so serious that it cannot be waived by any party at any stage"],
            correctIndex: 0,
            explanation: "It is the narrow route left when nobody objected, and Part IV shows that for jury instructions even that route is closed.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "Why could the appellate court affirm a ruling it says it might have decided differently?",
            options: ["Deference is the rule, not a loophole", "Because the appellant failed to raise the point in his opening brief", "Because the ruling had already been affirmed by the magistrate below", "Because a continuance is not a reviewable decision in a civil case"],
            correctIndex: 0,
            explanation: "Under abuse of discretion the question is whether the refusal was unreasonable and arbitrary, not whether the appellate judges agree with it.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "Why was the chambers conference in Part II never recorded?",
            options: ["The chambers had no taping equipment", "Because the judge ordered the discussion held off the record at counsel's request", "Because the court reporter had been excused for the day by agreement", "Because the conference concerned settlement, which is never transcribed"],
            correctIndex: 0,
            explanation: "The proceedings were being taped without a court reporter, and while the courtroom had taping equipment the judge's chambers did not.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What is an offer of proof?",
            options: ["A statement on the record of what excluded evidence would show", "A formal certification that a document is a true copy of an original", "A party's written summary of the evidence it intends to call at trial", "A judge's explanation of why a given item of evidence was admitted"],
            correctIndex: 0,
            explanation: "It lets an appellate court judge whether excluding something mattered. Because the conference was unrecorded, the record does not show what offer, if any, was made.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What did the appellate court do to try to fix the missing record?",
            options: ["Withdrew the case from submission for reconstruction", "Remanded the whole case for a new trial before a different judge", "Ordered the trial judge to write out his recollection of the conference", "Accepted the appellant's own account of the conference as the record"],
            correctIndex: 0,
            explanation: "It withdrew the case under Fed. R. App. P. 10(c) or (e) so the record might be reconstructed, and reports in four words that this effort failed.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What sentence does the memorandum use to report the reconstruction attempt?",
            options: ["This effort failed", "The parties reached agreement on a substitute statement of the proceedings", "The district court supplied a settled statement under Rule 10(c) in due course", "The appellant declined to participate in the reconstruction the court ordered"],
            correctIndex: 0,
            explanation: "Four words, and the docket carries their trace: submission deferred, resubmitted, vacated and resubmitted again across three months in 1989.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "On whom did the memorandum say the consequences of an insufficient record fall?",
            options: ["On the appellant", "On the district court, which controls what gets transcribed", "On the court reporter whose absence caused the gap in the first place", "On both parties equally, since neither asked for the conference to be taped"],
            correctIndex: 0,
            explanation: "It was his responsibility to preserve a proper record, during or immediately after the conference, and the consequences of any insufficiency properly fall on him.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What did the court conclude about the claim in Part II?",
            options: ["It must be denied", "It must be remanded so the trial court can hold a fresh hearing", "It succeeds, because an unrecorded conference is itself a reversible error", "It is moot, because the witness later withdrew her testimony"],
            correctIndex: 0,
            explanation: "Quoting an earlier case: since no record is provided upon which the claim can be evaluated, it must be denied.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What was the court's alternative holding in Part II?",
            options: ["There was no harmful error", "That the cross-examination had in fact been permitted in full", "That the witness should never have been allowed to testify at all", "That any error had been cured by the trial judge's later instruction"],
            correctIndex: 0,
            explanation: "The testimony was cumulative in many respects, the witness's bias and partiality were obvious, and other evidence against him was overwhelming.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What is an alternative holding?",
            options: ["A second independent reason for the same result", "A ruling that takes effect only if the parties fail to settle", "A holding adopted by one judge on a panel but not the others", "A provisional ruling that lapses if no petition for rehearing is filed"],
            correctIndex: 0,
            explanation: "Part II gives one: even if the record had been adequate and there had been an abuse of discretion, the error would have been harmless.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What phrase did the memorandum use for the rest of the case against Walter Keane?",
            options: ["Other overwhelming evidence", "A narrow balance of probabilities that the jury resolved against him", "Circumstantial material that would not by itself sustain a verdict", "Testimony that the court found largely unreliable but sufficient"],
            correctIndex: 0,
            explanation: "In light of the other overwhelming evidence against Walter, the court could not conclude the cross-examination would have changed the outcome.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which phrase in the jury instructions did Walter Keane challenge on appeal?",
            options: ["Thinking he was dead", "Bullied into letting him claim credit for the paintings", "So grossly excessive that it shocks the conscience", "Unfamiliar with the personalities involved"],
            correctIndex: 0,
            explanation: "The court had earlier ruled the phrase was only a statement of motive and not actionable per se, and it then appeared twice in the instructions.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What had the trial court earlier ruled about that phrase?",
            options: ["It was only a statement of motive", "That it was defamatory on its face and required no proof of damage", "That it could not be mentioned in front of the jury under any circumstances", "That it was the central allegation on which the defamation claim rested"],
            correctIndex: 0,
            explanation: "Only a statement of motive and not actionable per se, which is why its appearance in the instructions was the argument he tried to make.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Why did the appellate court not decide whether the instruction was wrong?",
            options: ["He had not objected at the time", "Because the instruction had been agreed by both parties before it was read", "Because the point was raised for the first time in a petition for rehearing", "Because instructions are matters of trial management that are never reviewed"],
            correctIndex: 0,
            explanation: "Failure to make a contemporaneous objection precludes appellate review even for plain error, so the court never reached the merits.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What does waiver mean in this context?",
            options: ["Losing a point by not raising it at the time", "Formally giving up a claim in a written agreement with the other side", "A judge excusing a party from a procedural requirement on request", "The expiry of a limitation period before a claim is filed"],
            correctIndex: 0,
            explanation: "It is the mechanism behind both Part II and Part IV, and between them it disposes of two of his six grounds without reaching their substance.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What is cumulative evidence?",
            options: ["Evidence repeating what the jury already heard", "Evidence that adds up to a conclusion no single item would support", "Evidence gathered over the whole course of a long investigation", "Evidence admitted only after the party offering it has rested"],
            correctIndex: 0,
            explanation: "The court uses it twice in this memorandum, both times as a reason an evidentiary problem did not probably change the verdict.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "When did the rebuttal witness in Part II testify?",
            options: ["After the newspaper left and he had rested", "Before the plaintiff had finished presenting her case in chief", "During the chambers conference, out of the presence of the jury", "After the jury had begun deliberating, under a reopening order"],
            correctIndex: 0,
            explanation: "She testified as a rebuttal witness after the directed verdict motion had been granted and after he had rested his defence, when he was representing himself.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "How does the memorandum describe the response his cross-examination drew?",
            options: ["Vitriolic", "Evasive to the point that the judge struck the answers", "Consistent with everything the witness had said on direct examination", "So favourable to him that opposing counsel moved to withdraw the witness"],
            correctIndex: 0,
            explanation: "It elicited a vitriolic response, after which the judge declared a recess and took the parties into chambers.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What does the docket history of 1989 record?",
            options: ["Three months of procedural motion that produced nothing", "The trial court's successful reconstruction of the missing conference", "A settlement conference held between the parties before argument", "The substitution of a new district judge for the remaining claims"],
            correctIndex: 0,
            explanation: "Argued and submitted 11 May, deferred 16 May, resubmitted 30 May, vacated 8 June, resubmitted 29 June. The record was never rebuilt.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What is the transferable lesson this course draws from Parts II and IV?",
            options: ["A true claim not in the record does not exist on appeal", "An appellate court will reconstruct whatever record a party needs", "A self-represented party is held to a lower standard of preservation", "An unrecorded conference automatically entitles a party to a new trial"],
            correctIndex: 0,
            explanation: "The remedy has to be built at the moment, by the person who wants it, in a form somebody else can later read. A grievance without a record is a grievance.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What does preservation mean, as this lesson uses it?",
            options: ["Putting an objection or offer of proof on the record", "Keeping physical exhibits safe until the appeal is concluded", "Maintaining the confidentiality of an unrecorded chambers conference", "Storing the trial tapes in the court's archive after judgment"],
            correctIndex: 0,
            explanation: "It is the act that makes a point reviewable later, and its absence is what ended two of Walter Keane's six grounds of appeal.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which two parts of the memorandum turn on something that was never put on the record?",
            options: ["Parts II and IV", "Parts I and V, the continuance and the judicial misconduct claim", "Parts VI and VII, the damages award and the copyright counterclaim", "Part III alone, which lists five items of allegedly inadmissible evidence"],
            correctIndex: 0,
            explanation: "Part II fails for want of an offer of proof and Part IV is not reached at all for want of a contemporaneous objection.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What does the course say the conditions of the trial were that no retelling mentions?",
            options: ["Who was in the room and what got tried first", "The precise size of the jury and the length of its deliberations", "The identity of the expert witnesses called by each side", "The number of paintings introduced into evidence by the plaintiff"],
            correctIndex: 0,
            explanation: "A continuance denied, a case split in two, a co-defendant who left mid-trial, and a man sitting alone at the defence table for the last days.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "Which rule of appellate procedure did the court invoke to try to rebuild the record?",
            options: ["Rule 10", "Rule 36-3, which governs the citation of unpublished dispositions", "Rule 56, the summary judgment standard applied in Part VII", "Rule 801(d)(1), which governs prior consistent statements"],
            correctIndex: 0,
            explanation: "Fed. R. App. P. 10(c) or (e). Rule 36-3 is the circuit's citation rule, Rule 56 is the civil summary judgment rule, and 801(d)(1) is an evidence rule.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "How many of the six grounds of appeal were disposed of without reaching their merits?",
            options: ["Two", "All six, since every one of them failed on a procedural point", "None, because the court gave a reasoned answer on each ground raised", "Four, counting both the continuance and the judicial misconduct claim"],
            correctIndex: 0,
            explanation: "The cross-examination claim, for want of a record, and the jury instruction claim, for want of an objection. The rest were decided on their substance.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Why does this course say an appeal is not a rerun?",
            options: ["It reviews whether those present stayed inside their lane", "Because appellate judges hear the same witnesses a second time", "Because the losing party may introduce new evidence on appeal", "Because the appellate court decides every question afresh and fully"],
            correctIndex: 0,
            explanation: "Each question comes with a standard of review, and the deferential ones exist precisely because the appellate judges were not in the room.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is independent review?",
            options: ["Deciding the question afresh", "Review conducted by a judge who did not sit on the original panel", "Review of a decision by an outside body rather than a court", "Review limited to the written findings, ignoring the transcript"],
            correctIndex: 0,
            explanation: "The lower court's answer gets no weight. In this memorandum only the summary judgment in Part VII is reviewed that way.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is a continuance?",
            options: ["A postponement of a trial date", "An order allowing a trial to run past its scheduled end date", "Permission for a party to continue representing itself after counsel withdraws", "An extension of the deadline for filing a notice of appeal"],
            correctIndex: 0,
            explanation: "He asked for one to 13 October 1986. It was refused, and Part I is the appellate court's review of that refusal.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What does prejudice mean in Part I of the memorandum?",
            options: ["Harm to a party's ability to present its case", "A judge's personal bias against one of the parties before trial", "A jury's hostility towards a party based on how they behaved in court", "An advance ruling that a particular defence may not be raised"],
            correctIndex: 0,
            explanation: "The court concedes he may well have suffered significant prejudice and holds that it was not foreseeable when the continuance was denied.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "Under the abuse of discretion standard, what is the question on review?",
            options: ["Whether the refusal was unreasonable and arbitrary", "Whether the appellate judges would have granted the request themselves", "Whether the moving party had a good reason for making the request", "Whether the opposing party would have been inconvenienced by a delay"],
            correctIndex: 0,
            explanation: "The memorandum states the distinction expressly and then demonstrates it by affirming a ruling it says it might have made differently.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What does the court say about whether a continuance may be denied even when the party is left unrepresented?",
            options: ["It may", "It may not, in any civil case where money damages are sought", "It may only where the party has expressly waived the right to counsel", "It may only in criminal cases, never in a civil trial of this kind"],
            correctIndex: 0,
            explanation: "Part I says a continuance may properly be denied even where the denial leaves the moving party unrepresented at trial, and even for a criminal defendant.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What did the court say about Walter Keane's diligence?",
            options: ["He displayed a lack of it", "That he had done everything reasonably possible to find new counsel", "That diligence is irrelevant to a continuance request in a civil case", "That the question could not be assessed on the record available"],
            correctIndex: 0,
            explanation: "Part I says he displayed a lack of diligence in failing to secure counsel in 49 days, and that the court reasonably doubted he would secure any soon.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What practical inconveniences does Part I weigh against a continuance?",
            options: ["The court's and the parties' scheduling in Hawaii", "The cost of transcribing the proceedings a second time", "The risk that the jury already empanelled would have to be discharged", "The expense of keeping the disputed paintings in court custody"],
            correctIndex: 0,
            explanation: "The court itself would have been inconvenienced, and the plaintiff, co-defendant and their witnesses may well have been by a rescheduling in Hawaii.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "Why does the course say the discipline in Part II is the same one the series applies to archives?",
            options: ["A remedy has to exist in a form somebody else can read", "Because archives and appellate courts are governed by the same rules", "Because a missing archive document can be reconstructed the same way", "Because a citation and an offer of proof are both filed by the losing side"],
            correctIndex: 0,
            explanation: "A credit line, a citation and an offer of proof all fail the same way: the true thing that was never written down cannot later be used.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which part of the memorandum contains the harshest preservation rule?",
            options: ["Part IV", "Part I, which reviews the denial of the continuance", "Part VI, which sets the standard for reviewing a damages award", "Part VII, which reviews the summary judgment independently"],
            correctIndex: 0,
            explanation: "It precludes review even in cases of plain error, which is stricter than the plain-error route left open for unobjected-to evidence in Part III.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "How many numbered parts does the memorandum have?",
            options: ["Seven", "Six, one for each ground of error listed in the opening paragraph", "Eleven, matching the occurrences of the word paint in the text", "Twelve, one for each page of the reproduction that was read"],
            correctIndex: 0,
            explanation: "Parts I to VII, plus an unnumbered opening paragraph and a separate concurring and dissenting opinion at the end.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What does the memorandum say a party must show for a judicial misconduct reversal in a civil trial?",
            options: ["A clear and precise showing of prejudice", "That the judge made at least one derogatory comment in front of the jury", "That the judge's rulings went against that party more often than not", "That the judge declined to recuse himself when asked to do so"],
            correctIndex: 0,
            explanation: "Part V says a clear and precise showing of prejudice must be made to secure a reversal, particularly in noncriminal trials.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What do courts have broad discretion over, according to the authority Part V quotes?",
            options: ["Controlling the conduct of a trial", "Setting the amount of damages a jury may award for reputational harm", "Deciding which grounds of appeal a party may raise afterwards", "Determining whether an unpublished disposition may later be cited"],
            correctIndex: 0,
            explanation: "The quoted passage covers the conduct of a trial and the presentation of evidence and interrogation of witnesses.",
            sourceLessonSlug: "standards-of-review",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — What the appeal actually changed
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "liability-affirmed-damages-vacated",
      title: "9 · Part VI, and the number that went away",
      section: "Section 3 · What the appeal actually changed",
      body: `Part VI is a page long. It is the reason every retelling of this case is incomplete.

**What he argued.** That the award "was 'grossly excessive' for the mental anguish Margaret allegedly suffered as a result of his allegedly defamatory statement", and "that there was no competent evidence of damages to support the award".

**What the court accepted, and what it did not.** "Evidence was presented of the anguish and humiliation Margaret suffered as a result of the statements in the 'USA Today' article." That is the court agreeing that the harm was real and proved. Then: "However, Margaret offered only speculative evidence of lost profits and injury to reputation."

Two categories, two verdicts. Personal distress: evidenced. Money lost and reputation damaged: speculative.

**Then the sentence about reach, which is the one to sit with.** "While 'USA Today' has an extensive circulation, it would appear that the majority of readers were unfamiliar with the personalities involved, and thus were unaffected by the article."

Read that as a proposition about credit and it is remarkable. A national newspaper printed a statement that she was lying about having painted her own life's work. The court's answer is that most of the people who read it had no idea who either of them was, so the statement did not land. The injury to a name is measured by how many people were holding that name in their heads to begin with. The reputation you can lose is the reputation somebody already had.

**The holding.** "Although Walter did not object to the damages, we conclude that the $4,000,000 award is 'so grossly excessive that it shocks the conscience.'" A citation to an earlier case follows, and then: "We therefore vacate the damages award and remand the damages issue for a new trial."

Notice the opening clause. The court says he did not object to the damages and reaches the question anyway. The memorandum does not explain why, and this course does not guess.

**What a remand for a new trial on damages actually means.** Not a reduction. Not a lower figure written in by the appellate judges. The number is erased and the damages question goes back to the district court to be tried again, from the start, with a new jury. To get anything, she would have to try that case.

**What happened next, attributed rather than asserted.** The San Diego Reader, writing in 1992, says: "Margaret Keane must initiate another trial in order to collect any damages. She declines to do so." That is a journalist's account and it is the only account this course read on the point, so it is attributed here and nowhere stated as a finding.

**So the honest sentence about the outcome is two clauses long.** The finding against him stands, and the four million dollars does not. Any version of this story with only one of those clauses in it is wrong, including the flattering one.

:::reveal Which category of damages did the court call evidenced, and which did it call speculative? ||| Anguish and humiliation were evidenced. Lost profits and injury to reputation were only speculatively evidenced.

:::reveal What reasoning did the court give about the newspaper's circulation? ||| That although the paper had extensive circulation, it would appear the majority of readers were unfamiliar with the personalities involved and were therefore unaffected by the article.

## Vocabulary
- **Grossly excessive**: the standard for setting aside an award as too large, phrased in this circuit as shocking the conscience.
- **Speculative evidence**: evidence that invites a guess at a loss rather than establishing it.
- **New trial on damages**: a retrial of the money question alone, with liability already settled.
- **Mental anguish**: distress, as a head of damages distinct from financial loss.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part VI, pp. 9-10: his argument, the anguish and humiliation sentence, the speculative evidence sentence, the circulation sentence, and the holding vacating the award.)
Parfrey, A. (1992, May 14). *Walter Keane: the saucer eye orphans have lost their father*. San Diego Reader. https://www.sandiegoreader.com/news/1992/may/14/cover-citizen-keane-the-saucer-eye-orphans-have-l/ (The two sentences on the need to initiate another trial and her declining to do so.)`,
    },
    {
      slug: "the-dissent-on-the-same-evidence",
      title: "10 · One judge read the same record the other way",
      section: "Section 3 · What the appeal actually changed",
      body: `The four million dollars went away on a two to one vote. The third judge wrote it down, and his opinion is the best thing in the document for anyone who wants to understand how evidence works.

**His position, in one line:** "I concur in all but part VI and would affirm."

So: he agreed with every other part. The continuance, the cross-examination, all five evidentiary items, the jury instruction, the judicial misconduct claim, the summary judgment on the counterclaim. Everything except the number.

**His first move is to use the majority's own words.** "As pointed out by the majority, there was evidence of damage to Margaret as a result of the 'USA Today' article." He is not disputing a fact. He is reading a fact the majority also found, and drawing a different conclusion from it.

**Then he adds what the majority left out.** "In addition to her anguish and humiliation, there was testimony that the defamatory statements could harm her reputation as a painter."

**And then the fact that flips.** "Most importantly, there was evidence of 'USA Today's' readership of five million."

Stop here, because this is the whole lesson. The majority looked at the circulation of a national newspaper and saw a crowd of strangers who did not know who these people were and were therefore unaffected. The dissent looked at the same circulation and saw five million readers. One number, two opposite readings, and the difference between them is four million dollars.

Neither judge is inventing anything. They are weighting the same record differently, under a standard the majority itself describes as considering the evidence in the light most favourable to the verdict. That is why the disagreement is worth reading: it shows where a real dispute about a record usually lives.

**The instruction the jury was actually given.** The dissent quotes it: the court instructed that the jury "could award 'compensatory damages' absent any evidence of actual injury because the law presumes that defamatory statements injure reputation". And the jury was told that compensatory damages are a means by which a plaintiff "can demonstrate to others the falsity of statements made by a defendant".

Read that second phrase slowly. The jury was told that an award of money is a way of demonstrating to other people that what was said was false. That is a theory of damages as public correction: the sum is the announcement. Whatever you think of it, it is the frame the jury was working in when it wrote down four million dollars, and Part VI took the number away without engaging with it.

**One more fact the dissent supplies.** "Walter concedes that he offered no evidence rebutting Margaret's damages claim." The award that shocked the conscience was unopposed at trial.

**His standard, stated with the deference showing.** Quoting an earlier case, and with the brackets in the original: "Although [I] might well have concluded, had [I] been [a trier] of fact, that a lesser award would have been more appropriate under the circumstances, [I am] unable to supply those extreme characterizations here." He thinks it was too much. He does not think it was monstrous, and monstrous is what the test asks.

:::reveal On what single fact did the majority and the dissenting judge reach opposite conclusions? ||| The newspaper's circulation. The majority read it as a mass of readers unfamiliar with the personalities and therefore unaffected; the dissent read it as evidence of a readership of five million.

:::reveal What purpose did the jury instruction say compensatory damages can serve? ||| Demonstrating to others the falsity of the statements the defendant made, which makes the award itself a form of public correction.

## Vocabulary
- **Concur in part and dissent in part**: to agree with some of a decision and disagree with the rest, in a separate written opinion.
- **Presumed damages**: damages a jury may award without proof of actual injury, because the law assumes some harm.
- **Compensatory damages**: damages meant to make good a loss, as opposed to damages meant to punish.
- **Weight of the evidence**: how much a fact-finder or reviewing judge lets a given fact count.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (The concurring and dissenting opinion, pp. 11-12: the concur-in-all-but-Part-VI line, the reputation-as-a-painter testimony, the readership of five million, the presumed-damages instruction, the demonstrate-the-falsity phrase, the concession that no rebutting evidence was offered, and the quoted standard.)`,
    },
    {
      slug: "the-claim-that-was-his",
      title: "11 · Part VII: the copyright claim, and whose it was",
      section: "Section 3 · What the appeal actually changed",
      body: `Part VII is the part that should change how you think about this whole case, because it is the only part about copyright and it runs the opposite way from the story.

**Whose claim.** His. He counterclaimed against her for copyright infringement, the district court entered summary judgment for her on it, and he appealed that. The appellate court reviewed it independently, meaning with no deference, and affirmed.

**The elements, in the court's own words.** "To establish copyright infringement, the plaintiff must show (1) that he owns a valid copyright and (2) that the defendant copied the plaintiff's work." And copying itself has two parts: "(1) that the defendant had access to the plaintiff's work and (2) substantial similarity between plaintiff's and defendant's work."

**Why it failed.** The district court granted summary judgment "because it found that Walter had failed adequately to allege copying in his pleadings". Then the court lists the rest:

- "while there was evidence that Margaret had access to Walter's copyrighted work, Walter failed to present evidence of substantial similarity";
- "He never presented copies of the works which he alleged were infringed";
- "Walter never actually alleged that Margaret had in fact copied his work";
- "Margaret stated without rebuttal that she only sold prints which she herself lawfully owned; Margaret denied ever copying the copyrighted art."

A man went to federal court claiming that pictures were his, and lost that claim without ever putting the pictures in front of the court.

**And one sentence at the end of Part VII that is easy to miss.** "On appeal, Walter does not challenge the district court's entry of summary judgment in favor of Margaret on his unfair competition claim." So there were two claims of his decided on paper, and he contested only one of them on appeal. The other ended in silence.

**Now the thing that matters for this series.** Read the phrase "Walter's copyrighted work". The memorandum uses it as a plain description. The credit machinery had done its job so thoroughly that the paperwork of ownership stood in his name, which is what put him in a position to accuse her of copying works she says she made. A signature and a registration record who claimed, not who made. *Who Signs the Print* lesson 2 teaches what a signature certifies and this is the extreme case of it.

**And the thing that matters for accuracy.** Part VII decides a question of proof, not a question of authorship. The counterclaim failed because he did not show copying, not because a court found he had not painted the pictures. **No court in this record decided who painted them.** That sentence is the spine of lesson 15, and it is the sentence almost every retelling of this case contradicts.

:::reveal Which two elements make up copying, in the test the memorandum states? ||| Access to the plaintiff's work, and substantial similarity between the plaintiff's work and the defendant's.

:::reveal Why does the failure of the copyright counterclaim not amount to a finding about who painted the pictures? ||| Because it failed on proof of copying: he never presented copies of the works, never actually alleged she had copied them, and offered no evidence of substantial similarity. Authorship was never decided.

## Vocabulary
- **Summary judgment**: a decision on the papers, given where there is no genuine dispute about a material fact.
- **Substantial similarity**: the resemblance between two works that a copying claim has to prove.
- **Access**: the opportunity a defendant had to see or use the work said to be copied.
- **Unfair competition**: a separate claim about improper conduct in trade, decided here and not appealed.
- **Pleadings**: the documents in which a party sets out the claims it intends to prove.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part VII, pp. 10-11: the independent review sentence, the summary judgment rule quoted from Fed. R. Civ. P. 56(c), the two-element infringement test and the two-part copying test, the four reasons the claim failed, and the unchallenged unfair competition ruling. The counterclaim is named in the opening paragraph, p. 2.)`,
    },
    {
      slug: "quiz-what-the-appeal-actually-changed",
      title: "12 · Knowledge check: what the appeal actually changed",
      section: "Section 3 · What the appeal actually changed",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which head of damages did the court accept was supported by evidence?",
            options: ["Anguish and humiliation", "Lost profits from sales she was unable to make after the article ran", "Injury to her reputation among collectors of the disputed paintings", "The cost of bringing the action, including her attorney's fees"],
            correctIndex: 0,
            explanation: "Part VI says evidence was presented of the anguish and humiliation she suffered as a result of the statements in the article.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "Which heads of damages did the court call speculative?",
            options: ["Lost profits and injury to reputation", "Anguish and humiliation, which the court said were assumed rather than proved", "Punitive damages, which the jury had awarded without any instruction", "Medical expenses, which were supported only by an unsworn summary"],
            correctIndex: 0,
            explanation: "The court accepted the distress evidence and said she offered only speculative evidence of lost profits and injury to reputation.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What did the court say about the newspaper's readers?",
            options: ["Most were unfamiliar with the personalities involved", "Most would have recognised both parties from the paintings alone", "Most were in Hawaii, where the trial was later held", "Most had already read a correction published the following week"],
            correctIndex: 0,
            explanation: "While the paper had extensive circulation, it would appear the majority of readers were unfamiliar with the personalities and thus unaffected by the article.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What does the circulation reasoning imply about reputational injury?",
            options: ["The reputation you can lose is one somebody already had", "That a larger circulation always produces a larger award", "That reputation cannot be injured by a national publication at all", "That a court must survey readers before any award can stand"],
            correctIndex: 0,
            explanation: "The injury to a name is measured by how many readers were holding that name in their heads to begin with, which is a proposition about fame as much as about law.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What phrase did the court use in concluding the award could not stand?",
            options: ["So grossly excessive that it shocks the conscience", "Wholly unsupported by any competent evidence of actual injury", "Disproportionate to awards approved in comparable defamation cases", "The product of passion and prejudice on the part of the jury"],
            correctIndex: 0,
            explanation: "Part VI quotes that formulation from an earlier case and then vacates the award and remands the damages issue for a new trial.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What clause opens the court's conclusion in Part VI?",
            options: ["Although Walter did not object to the damages", "Because Walter preserved this objection at every stage of the trial", "Since the plaintiff conceded that the figure was unsupported", "Given that the trial judge had already indicated a remittitur"],
            correctIndex: 0,
            explanation: "The court notes he did not object to the damages and reaches the question anyway. The memorandum does not explain why, and this course does not guess.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What does a remand for a new trial on damages leave in place?",
            options: ["Liability, and no number", "A reduced award, calculated by the appellate judges from the record", "The original award, suspended until the new trial concludes", "Nothing at all, since liability is retried along with damages"],
            correctIndex: 0,
            explanation: "The finding stands and the figure is erased. Getting anything would require trying the damages case again before a new jury.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What did Walter Keane argue about the evidence of damages?",
            options: ["That there was no competent evidence to support the award", "That the plaintiff's own expert had valued the harm at a far lower figure", "That the newspaper rather than he should bear any award that was made", "That the award duplicated a sum already recovered in an earlier action"],
            correctIndex: 0,
            explanation: "Part VI reports both of his contentions: that the award was grossly excessive for the mental anguish alleged, and that no competent evidence supported it.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What does the San Diego Reader report she did about a second damages trial?",
            options: ["She declined to bring one", "She brought one and recovered a smaller sum in 1992", "She was barred from bringing one by the bankruptcy proceeding", "She settled the damages question before the remand took effect"],
            correctIndex: 0,
            explanation: "The Reader writes that she must initiate another trial to collect any damages and declines to do so. This course attributes that to the Reader rather than asserting it.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "Why does this course attribute the decision not to retry damages rather than state it?",
            options: ["Only one account was read on the point", "Because the memorandum expressly refuses to record what happened next", "Because the two available accounts contradict each other on the year", "Because the outcome was sealed by order of the district court"],
            correctIndex: 0,
            explanation: "It comes from a 1992 journalist's timeline and from no court document, so it is reported as the Reader's account and never as a finding.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What is the honest two-clause sentence about the outcome?",
            options: ["The finding stands and the four million dollars does not", "She lost on liability and kept the damages award on appeal", "Both the finding and the award were sent back for a new trial", "Both the finding and the award were affirmed in full"],
            correctIndex: 0,
            explanation: "Any version with only one of those clauses is wrong, including the flattering one that keeps the number and drops the appeal.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What is speculative evidence?",
            options: ["Evidence that invites a guess at a loss", "Evidence given by a witness who did not personally observe the events", "Evidence about future events that have not yet occurred", "Evidence admitted over an objection that was later sustained"],
            correctIndex: 0,
            explanation: "The court accepted proof of distress and found the proof of financial and reputational loss invited a guess rather than establishing an amount.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "How did the third judge vote?",
            options: ["He concurred in all but Part VI", "He dissented from the whole decision and would have ordered a new trial", "He concurred in the result without writing separately at all", "He agreed with Part VI alone and dissented from everything else"],
            correctIndex: 0,
            explanation: "His opening line is: I concur in all but part VI and would affirm. The award went away on a two to one vote.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What readership figure does the separate opinion cite?",
            options: ["Five million", "Four million, matching the size of the award the jury returned", "Sixty-six thousand, the circulation in the state where the trial was held", "Eleven million, which the majority accepted but discounted"],
            correctIndex: 0,
            explanation: "He calls the evidence of the newspaper's readership of five million the most important point, where the majority read the same circulation as reaching strangers.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What did the jury instruction say about compensatory damages and proof of injury?",
            options: ["They could be awarded absent evidence of actual injury", "They required documentary proof of every dollar claimed", "They could not exceed the plaintiff's proven out-of-pocket loss", "They were available only if the defendant acted with actual malice"],
            correctIndex: 0,
            explanation: "The jury was told the law presumes that defamatory statements injure reputation, so compensatory damages could be awarded without evidence of actual injury.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What did the jury instruction say compensatory damages let a plaintiff do?",
            options: ["Demonstrate to others the falsity of the statements", "Recover the legal costs of bringing the action to trial", "Punish the defendant in proportion to his means", "Prevent the defendant from repeating the statement in future"],
            correctIndex: 0,
            explanation: "That is a theory of damages as public correction: the sum is the announcement. Part VI took the number away without engaging with it.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What does the separate opinion say Walter Keane conceded?",
            options: ["He offered no evidence rebutting her damages claim", "That he had not painted any of the disputed canvases himself", "That the trial judge had been fair to him throughout the proceedings", "That the statement in the newspaper had been false when made"],
            correctIndex: 0,
            explanation: "The award that the majority called shocking to the conscience was unopposed on the evidence at trial.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What additional testimony does the separate opinion point to that the majority did not dwell on?",
            options: ["That the statements could harm her reputation as a painter", "That she had lost a specific commission after the article appeared", "That the newspaper had refused to publish a retraction when asked", "That the defendant had repeated the statement to other reporters"],
            correctIndex: 0,
            explanation: "He lists it alongside her anguish and humiliation as evidence of damage the majority itself had acknowledged.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What did the dissenting judge say he could not supply?",
            options: ["Those extreme characterizations", "A figure he considered adequate to compensate the plaintiff", "A reason to disturb the jury instruction the trial court gave", "An explanation for the majority's reading of the circulation evidence"],
            correctIndex: 0,
            explanation: "He says he might well have awarded less as a trier of fact, and that he is unable to call this verdict monstrous or grossly excessive, which is what the test asks.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What is the central lesson of the disagreement over the circulation evidence?",
            options: ["One fact can carry two opposite readings", "That appellate judges may not consider circulation evidence at all", "That a dissent is never based on the same record as the majority", "That the size of an award is fixed by the size of the readership"],
            correctIndex: 0,
            explanation: "Neither judge invents anything. They weight the same record differently, and the difference between the two readings is four million dollars.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What are presumed damages?",
            options: ["Damages awarded without proof of actual injury", "Damages a court presumes the defendant is able to pay", "Damages agreed in advance by the parties in a written contract", "Damages calculated by presuming the highest supportable figure"],
            correctIndex: 0,
            explanation: "The jury here was instructed it could award compensatory damages on that basis, because the law presumes defamatory statements injure reputation.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "On how many parts of the memorandum did the third judge disagree with his colleagues?",
            options: ["One", "Three, being the parts dealing with evidence, instructions and damages", "None, since he concurred fully and wrote only to add a comment", "Six, agreeing only with the summary judgment in Part VII"],
            correctIndex: 0,
            explanation: "He concurred in all but Part VI. Everything else in the decision, including the summary judgment against the counterclaim, was unanimous.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What does it mean to concur in part and dissent in part?",
            options: ["To agree with some of a decision and not the rest", "To agree with the result while rejecting all of the reasoning", "To decline to take part in one portion of a panel's decision", "To join an opinion conditionally, pending a petition for rehearing"],
            correctIndex: 0,
            explanation: "Here it is written out as a separate opinion, which is what lets a reader see two judges reading one circulation figure in opposite directions.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "Who brought the copyright infringement claim decided in Part VII?",
            options: ["Walter, as a counterclaim", "Margaret, seeking to stop the sale of reproductions bearing his signature", "The newspaper's publisher, protecting the images used in the article", "Both parties, each claiming ownership of the same body of work"],
            correctIndex: 0,
            explanation: "The district court gave her summary judgment on his counterclaim and the appellate court affirmed it after reviewing the question independently.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What are the two elements of a copyright infringement claim, as the memorandum states them?",
            options: ["A valid copyright, and copying by the defendant", "Registration with the Copyright Office, and proof of commercial loss", "Authorship of the work, and a signature appearing on the original", "Publication of the work, and a failure to credit its true creator"],
            correctIndex: 0,
            explanation: "Ownership of a valid copyright and copying of the plaintiff's work by the defendant. Copying then breaks into access and substantial similarity.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What are the two parts of establishing copying?",
            options: ["Access and substantial similarity", "Registration and publication of the allegedly infringed work", "Intent to copy and commercial benefit from the copy", "Physical possession of the original and a witness to the copying"],
            correctIndex: 0,
            explanation: "The memorandum sets both out, and the counterclaim failed on the second of them despite evidence on the first.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Which element of copying did the evidence support?",
            options: ["Access", "Substantial similarity between the two sets of works", "Both, which is why the claim failed on the validity of the copyright instead", "Neither, because no works were ever put before the court at all"],
            correctIndex: 0,
            explanation: "There was evidence that she had access to his copyrighted work. He failed to present evidence of substantial similarity.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did Walter Keane never present to the court?",
            options: ["Copies of the works he alleged were infringed", "The registration certificates for the copyrights he relied on", "Any witness who had seen the disputed paintings being made", "A written valuation of the works said to have been copied"],
            correctIndex: 0,
            explanation: "A man claiming in federal court that pictures were his lost that claim without ever putting the pictures in front of the court.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did Margaret Keane state without rebuttal about the prints she sold?",
            options: ["That she lawfully owned them", "That she had produced them from her own original canvases", "That she had bought the reproduction rights from a gallery in 1970", "That she had sold them only after the marriage had ended"],
            correctIndex: 0,
            explanation: "She stated without rebuttal that she only sold prints which she herself lawfully owned, and denied ever copying the copyrighted art.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did the district court find about his pleadings?",
            options: ["He failed adequately to allege copying", "That they were filed after the deadline set by the scheduling order", "That they named the wrong defendant for the infringement claimed", "That they claimed ownership of works already in the public domain"],
            correctIndex: 0,
            explanation: "That was the first stated ground for summary judgment. The appellate court then listed the evidentiary failures alongside it.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Which of his claims did Walter Keane not challenge on appeal?",
            options: ["The unfair competition claim", "The copyright infringement counterclaim decided in Part VII", "The denial of his motion for a new trial on liability", "The jury instruction he says misstated the law of motive"],
            correctIndex: 0,
            explanation: "Part VII ends by noting he does not challenge the summary judgment in her favour on his unfair competition claim. That one ended in silence.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What is summary judgment?",
            options: ["A decision on the papers with no genuine factual dispute", "A shortened trial held before a judge without a jury", "A judgment entered because one party failed to appear", "A provisional ruling that stands until the full trial is held"],
            correctIndex: 0,
            explanation: "It is why Part VII is reviewed independently: the decision was made on written materials under a written standard, not in the room in front of a jury.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What phrase does the memorandum use for the material the claim concerned?",
            options: ["Walter's copyrighted work", "The works of disputed authorship in the Keane estate", "The paintings the jury found Margaret had created", "The canvases produced during the marriage of 1955 to 1965"],
            correctIndex: 0,
            explanation: "It uses the phrase as a plain description. The paperwork of ownership stood in his name, which is what let him accuse her of copying.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What does a signature or a registration record, in this course's phrase?",
            options: ["Who claimed, not who made", "The date on which a work was completed by its author", "The market value a work carried when it was first sold", "The consent of every person depicted in the work"],
            correctIndex: 0,
            explanation: "Who Signs the Print lesson 2 teaches what a signature certifies, and this case is the extreme version of the same mechanism.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What question did Part VII actually decide?",
            options: ["A question of proof", "Which of the two parties painted the disputed canvases", "Whether the copyrights in his name had been validly registered", "Whether the prints she sold had been lawfully manufactured"],
            correctIndex: 0,
            explanation: "The counterclaim failed because copying was not shown, not because a court found he had not painted the pictures. Authorship was never decided.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What is substantial similarity?",
            options: ["The resemblance a copying claim must prove", "The degree to which two artists trained in the same tradition", "The overlap between two parties' customer lists in a trade dispute", "The likeness between a painting and the person it depicts"],
            correctIndex: 0,
            explanation: "It is the second part of the copying test, and it is the part he failed, having never presented the works said to be infringed.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What does access mean in the copying test?",
            options: ["The opportunity to see or use the work", "Permission granted in writing by the copyright owner", "The right of the public to view a work on display", "A court's power to inspect a work held by a third party"],
            correctIndex: 0,
            explanation: "There was evidence she had access to his copyrighted work, which is why the claim turned on substantial similarity instead.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What are pleadings?",
            options: ["The documents setting out a party's claims", "The oral arguments counsel make at the close of a trial", "Requests a party makes to the judge during the trial itself", "Written answers a witness gives to questions before trial"],
            correctIndex: 0,
            explanation: "The district court found he had failed adequately to allege copying in his, which was the first ground for entering summary judgment against him.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What is unfair competition, in the sense used at the end of Part VII?",
            options: ["A separate claim about improper conduct in trade", "A defence available to a defendant in a copyright action", "A finding that one party undercut the other's prices deliberately", "A claim available only to a business rather than an individual"],
            correctIndex: 0,
            explanation: "It was decided against him on summary judgment and, unlike the copyright counterclaim, he did not challenge it on appeal.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Why does this course say Part VII should change how you read the whole case?",
            options: ["The only copyright claim in it was his", "Because it was the only part the dissenting judge disagreed with", "Because it is the part that vacated the four million dollar award", "Because it contains the court's only description of the demonstration"],
            correctIndex: 0,
            explanation: "The case people remember as a fight over her credit contained a copyright claim brought by him against her, and it failed on proof rather than on authorship.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What is a new trial on damages?",
            options: ["A retrial of the money question alone", "A complete retrial of both liability and the amount owed", "A hearing at which a judge sets a figure without a jury", "A review of the original award by a different appellate panel"],
            correctIndex: 0,
            explanation: "Liability is already settled, so only the amount is in issue. Nobody tried it, on the only account this course read.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What does the course mean by weight of the evidence?",
            options: ["How much a decision-maker lets a fact count", "The number of witnesses each side is able to call", "The physical volume of documents produced in discovery", "The legal requirement that evidence be authenticated before use"],
            correctIndex: 0,
            explanation: "The majority and the dissent gave the circulation figure different weight, which is the mechanism by which the award disappeared.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What does mental anguish mean as a head of damages?",
            options: ["Distress, as distinct from financial loss", "The cost of treatment for a psychiatric injury", "A presumption that any defamation causes suffering", "An award made to deter the defendant from repeating the statement"],
            correctIndex: 0,
            explanation: "Part VI separates it from lost profits and reputational injury, accepting evidence of the first and calling the others speculative.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "How long is Part VI?",
            options: ["About a page", "Half the memorandum, since damages were the central issue on appeal", "A single sentence, appended to the end of the disposition", "Four pages, the longest part of the decision by some distance"],
            correctIndex: 0,
            explanation: "A page long, and it is the reason every retelling of this case that stops at the verdict is incomplete.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "Which part of the memorandum was NOT unanimous?",
            options: ["Part VI", "Part VII, where one judge would have reversed the summary judgment", "Part I, where one judge would have granted the continuance", "Part V, where one judge found the trial had been unfair"],
            correctIndex: 0,
            explanation: "The third judge concurred in all but Part VI and would have affirmed the damages award as well as the liability finding.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What did the separate opinion do with the majority's own findings?",
            options: ["Used them", "Disputed every one of them as unsupported by the record", "Ignored them and reasoned from the trial transcript directly", "Adopted them only for the purposes of the damages discussion"],
            correctIndex: 0,
            explanation: "He begins by saying that, as pointed out by the majority, there was evidence of damage. He disagrees about weight, not about what the record contains.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What rule of civil procedure does Part VII quote for the summary judgment standard?",
            options: ["Rule 56(c)", "Rule 10(c), the appellate rule used to try to rebuild the record", "Rule 36-3, the circuit rule on citing unpublished dispositions", "Rule 801(d)(1), the evidence rule on prior consistent statements"],
            correctIndex: 0,
            explanation: "It quotes the provision on pleadings, depositions, answers, admissions and affidavits showing no genuine issue as to any material fact.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did Walter Keane never actually allege, according to Part VII?",
            options: ["That she had in fact copied his work", "That he owned a valid copyright in any of the disputed paintings", "That she had sold prints of the works he claimed to own", "That the works had been produced during their marriage"],
            correctIndex: 0,
            explanation: "The memorandum lists it among the reasons summary judgment was proper: he never actually alleged that Margaret had in fact copied his work.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Is granting summary judgment on the substantial similarity question unusual?",
            options: ["It is permissible though not common", "It is forbidden, because similarity is always a jury question", "It is the ordinary course in every copyright case in the circuit", "It is available only where the defendant concedes access"],
            correctIndex: 0,
            explanation: "Part VII says it is permissible, though not common, to grant summary judgment on the substantial similarity prong of the copying test.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did the court's independent review of the summary judgment change?",
            options: ["Nothing, it affirmed", "It reversed and sent the counterclaim back for a trial", "It narrowed the ruling so that only the prints were covered", "It vacated the ruling and left the question for the new damages trial"],
            correctIndex: 0,
            explanation: "Applying the same standard the district court applied, the appellate court reached the same answer and affirmed.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did the majority not engage with, in the course's reading of Part VI?",
            options: ["The instruction about demonstrating falsity", "The evidence of her anguish and humiliation at trial", "The defendant's failure to object to the damages evidence", "The circulation of the newspaper that published the statement"],
            correctIndex: 0,
            explanation: "The jury was working inside a frame where an award announces the falsity of the statement. Part VI removed the number without discussing that purpose.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "Why is the dissent useful to a reader who is not a lawyer?",
            options: ["It shows two judges weighting one fact differently", "It corrects the factual errors the majority made about the record", "It sets out the law of defamation more fully than the majority does", "It records what the jury said during its deliberations"],
            correctIndex: 0,
            explanation: "Both opinions are honest about the same evidence. The disagreement is about weight, which is where most real disputes about a record actually live.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What did the court say it does with the evidence when assessing whether an award is excessive?",
            options: ["Views it most favourably to the verdict", "Reweighs it as a second jury would, without deference", "Considers only the evidence the defendant did not contest", "Restricts itself to the documents in the appellate record"],
            correctIndex: 0,
            explanation: "Part VI says so expressly, which makes the outcome more striking: even viewed that way, the figure did not survive.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What is the difference between what the jury was asked and what Part VI reviewed?",
            options: ["The jury set a figure; Part VI reviewed whether it could stand", "The jury decided authorship; Part VI reviewed the copyright claim", "The jury decided damages; Part VI decided liability afresh", "The jury heard the demonstration; Part VI reviewed its admissibility"],
            correctIndex: 0,
            explanation: "A jury decides, an appeal reviews. The appellate court never set a number of its own, it erased the one the jury wrote down.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What did the court say about whether Walter Keane owned valid copyrights?",
            options: ["It refers to his copyrighted work without deciding the point", "It found that none of his registrations were valid", "It held that every registration in his name was valid and enforceable", "It remanded the ownership question for a separate hearing"],
            correctIndex: 0,
            explanation: "The claim was resolved on the copying element, so the memorandum describes the material as his copyrighted work and goes no further.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What does the course say about why the memorandum does not explain reaching the damages question unprompted?",
            options: ["It does not explain, and the course does not guess", "It explains that an excessive award is reviewable whether raised or not", "It explains that the appellant raised the point in his post-trial motions", "It explains that the plaintiff invited the court to consider the figure"],
            correctIndex: 0,
            explanation: "Part VI opens by noting he did not object to the damages and reaches the question anyway, without saying why. Where the document is silent, this course is silent.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What did the separate opinion say it might have done as a trier of fact?",
            options: ["Awarded less", "Found for the defendant on liability as well as damages", "Ordered a remittitur rather than a new trial on damages", "Excluded the evidence of the defendant's conduct during the marriage"],
            correctIndex: 0,
            explanation: "He says a lesser award might well have been more appropriate, and that he is still unable to call this one monstrous or grossly excessive.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "Which two claims of Walter Keane's were decided against him on summary judgment?",
            options: ["Copyright infringement and unfair competition", "Defamation and malicious prosecution, which he had counterclaimed", "Breach of contract and conversion of the disputed canvases", "Copyright infringement alone, since no other claim of his was pleaded"],
            correctIndex: 0,
            explanation: "Part VII reviews the first and notes he does not challenge the second, so two claims ended on paper and only one was argued on appeal.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — What a correction can and cannot reach
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "decisive-and-not-precedent",
      title: "13 · Decisive about a life, and no weight as law",
      section: "Section 4 · What a correction can and cannot reach",
      body: `At the end of Part VII, after the disposition line, the memorandum says this about itself:

"Note: This disposition is not appropriate for publication and may not be cited to or by the Courts of this Circuit except as provided by Ninth Circuit Rule 36-3."

And on the first page of the reproduction, an editorial note explains what that means in practice: "This opinion appears in the Federal reporter in a table titled 'Table of Decisions Without Reported Opinions'."

**So read the citation again: 893 F.2d 1338.** That looks like a page in a law report, and it is. What is printed there is not the reasoning you have just spent three sections reading. It is a row in a table: the case name, the docket number, the date, the disposition. The document itself is not in the book.

**Hold the two halves of that apart, because they point in opposite directions.**

- **As to these two people, it is total.** The four million dollars is gone. The liability finding stands. Two of his claims are over. There is no further step in that court. Whatever else this document is, for the Keanes it is the end.
- **As to everybody else, it is nothing.** By its own terms it may not be cited to or by the courts of that circuit, except as the rule allows. No later case is governed by it. It creates no rule about damages, about circulation, about offers of proof or about anything else.

**A document can be decisive about a life and carry no weight as law.** Those are two different powers and a court can hand out one without the other. Finality is about the parties. Precedent is about the future. This memorandum has the first in full and, on its own statement, essentially none of the second.

**What that costs, practically.** It is why this case is hard to look up and easy to get wrong. The reasoning is not in the printed reporter where a researcher would look for it; it survives in databases that reproduce unpublished dispositions. A story whose correction lives only there keeps being told in its uncorrected form, because the uncorrected form is the one that is easy to find. The next lesson measures how often that happened.

**An open question this course does not answer.** When and how unpublished dispositions may be cited has been the subject of rule changes since 1990. This course read the 1990 memorandum and nothing else on the point, so it reports what the document says about itself and files the rest as a research check.

**And the series point.** *Who Gets Named* lesson 23 asks what a correction can repair. Here is a new answer to add to its ledger: a correction can be complete, binding, and produced by the most formal machinery a society has, and still be shelved somewhere nobody reads. Being right is one thing. Being findable is another.

:::reveal What does it mean that the memorandum appears in a table of decisions without reported opinions? ||| The citation 893 F.2d 1338 points to a row recording the case name, docket number, date and disposition. The reasoning itself is not printed in that volume.

:::reveal Which power does this memorandum have in full, and which does it essentially lack? ||| It is final as to the parties, ending the case for them completely. It is not precedent, since by its own terms it may not be cited to or by the courts of that circuit except as the rule allows.

## Vocabulary
- **Unpublished disposition**: a decision issued without being printed as a full opinion in the reporter.
- **Precedent**: a decision that governs how later cases are decided.
- **Finality**: the quality of ending a dispute between the parties to it.
- **Table decision**: an entry recording a case's outcome without printing its reasoning.
- **Reporter**: the printed series of volumes in which court decisions are published.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (The note on publication follows the disposition line at the end of Part VII, p. 11. The editorial note about the Federal Reporter table is on p. 1, above the caption.)`,
    },
    {
      slug: "the-compression-measured",
      title: "14 · Four retellings, scored against the record",
      section: "Section 4 · What a correction can and cannot reach",
      body: `This is the part you can do yourself, on this case or any other. Take an account of a court case. Ask three questions. Score it out of three.

1. **Does it name what the plaintiff actually sued for?**
2. **Does it say what happened on appeal?**
3. **Does it say that the headline number did not survive?**

Here are the four accounts read for this course, scored.

**TIME, 25 December 2014.** It has the demonstration in detail: "A Hawaiian judge really did ask Margaret and Walter to each paint a big eyes picture in the courtroom in front of a crowd to determine who was telling the truth", and "Margaret completed hers within 53 minutes while Walter pleaded a sore shoulder and didn't paint anything". On the money it says: "Sadly, though Margaret won $4 million in the suit, she didn't see a cent", because "Walter had already spent the couple's entire fortune". The word "appeal" does not occur in the article. **Score: 0 of 3.** And notice what the third sentence does. It supplies a reason for the missing money, and the reason is not the one in the record.

**The Art Newspaper, 29 June 2022, her obituary.** It names the claim: "a defamation lawsuit that Margaret had brought against Walter". Then: "Margaret won the case and was awarded $4m in damages, though Walter quickly filed for bankruptcy." The word "appeal" does not occur here either. **Score: 1 of 3.** Same move as TIME, different explanation: the money goes missing because of a bankruptcy rather than because the award was vacated.

**San Diego Reader, 14 May 1992.** The only account read for this course that has the appeal at all: "Finally, in January 1989, the United States Appellate Court in the Ninth District of San Francisco cancels the $4 million judgment against Walter Keane as excessive, though they uphold the original verdict." And: "Margaret Keane must initiate another trial in order to collect any damages. She declines to do so." **Score: 2 of 3,** and it would be 3 but for the date. The court's own caption says the decision came on 18 January 1990, not January 1989.

**Two things about the Reader.** Its substance holds where its date does not: "as excessive" is a fair rendering of "so grossly excessive that it shocks the conscience", and "uphold the original verdict" is a fair rendering of affirming liability. A source can be right about what happened and wrong about when. And it is from 1992, more accurate about the outcome than the 2022 obituary. Accuracy does not accumulate over time. It drains.

**Now the word "another".** The obituary calls the courtroom painting "another 'paint-off' challenge". Part III of the memorandum lists among the contested evidence "the Life magazine article in which Margaret claimed credit for painting the big-eyed children, and which recounted Margaret's challenging Walter to a 'paint out' in San Francisco". That is a 1990 court describing a 1970 article describing a challenge. Three layers, so this course reports how the memorandum describes the article and asserts nothing about San Francisco.

**The general rule.** The details that travel are the ones that are easy to picture. A woman at an easel travels. Reversed and remanded on damages does not. If you want to know whether an account has done the work, do not ask whether it is vivid. Ask what it says about the last document in the case.

:::reveal What three questions does this lesson use to score an account of a court case? ||| Does it name what the plaintiff sued for, does it say what happened on appeal, and does it say that the headline number did not survive.

:::reveal Which of the four accounts scored highest, and what did it get wrong? ||| The 1992 San Diego Reader, at two of three. It carries the appeal and the cancellation of the award but dates the decision to January 1989, where the caption says 18 January 1990.

## Vocabulary
- **Compression**: the loss of the later, less vivid parts of a story as it is retold.
- **Substitute explanation**: a plausible reason supplied for a fact when the real reason has dropped out, such as spending or bankruptcy standing in for a vacated award.
- **Layered report**: a source describing a source describing an event, where each layer can fail separately.
- **Scoring rubric**: a small fixed set of questions applied to every account, so the comparison is between accounts and not between impressions.

## Sources
Dockterman, E. (2014, December 25). *The true story behind Big Eyes*. TIME. https://time.com/3632635/the-true-story-behind-big-eyes/ (The paragraph on the courtroom demonstration and the sentence on the four million dollars; no occurrence of the word "appeal" in the article.)
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Part III, p. 6, item (4): the description of the 1970 magazine article and the "paint out" in San Francisco. The decision date is in the caption, p. 1.)
Ludel, W. (2022, June 29). *Margaret Keane, widely popular painter of big-eyed figures, has died at age 94*. The Art Newspaper. https://www.theartnewspaper.com/2022/06/29/margaret-keane-big-eyes-painter-obituary (The sentences naming the defamation lawsuit, the award and the bankruptcy; no occurrence of the word "appeal".)
Parfrey, A. (1992, May 14). *Walter Keane: the saucer eye orphans have lost their father*. San Diego Reader. https://www.sandiegoreader.com/news/1992/may/14/cover-citizen-keane-the-saucer-eye-orphans-have-l/ (The sentence dating the appellate decision to January 1989 and describing the cancellation of the judgment, and the two sentences on the second damages trial.)`,
    },
    {
      slug: "what-the-record-settles",
      title: "15 · The ledger, and what this course refused to print",
      section: "Section 4 · What a correction can and cannot reach",
      body: `The last job is to write down exactly what is known, exactly what is not, and exactly what was left out on purpose. A course that only did the first of those would be doing to this record what the retellings do.

**What the record settles.** All of this is in the memorandum, in the parts named.

- She sued for defamation and malicious prosecution and sought a declaratory judgment; he counterclaimed for copyright infringement (opening paragraph).
- He appealed from the denial of three post-trial motions and from the summary judgment on his counterclaim (opening paragraph).
- Liability was affirmed; the $4,000,000 award was vacated and damages remanded for a new trial (opening paragraph and Part VI).
- The stated reason: distress was evidenced, lost profits and reputational injury were speculative, and most readers of the newspaper were unfamiliar with the personalities involved (Part VI).
- The panel split one to two on that part alone, the third judge pointing to a readership of five million and to the instruction on presumed damages (separate opinion).
- His counterclaim failed for want of proof of copying, not on any finding about authorship (Part VII).
- The trial was bifurcated after a continuance was refused, and the co-defendant's directed verdict left him alone at the defence table (Part I).
- Two of his grounds were never reached on their merits, one for want of a record and one for want of an objection (Parts II and IV).
- The judge's conduct was reviewed and no bias was found, though the court said it did not condone one comment he made (Part V).
- The disposition is unpublished and, by its own terms, not to be cited except as the circuit's rule allows.

**What the record does not settle, and this course therefore does not say.**

- **Who painted the pictures.** No court in this record decided it. The verdict was on a statement made in 1984, under instructions this course has not read in full. This is the single most important line in the course.
- **What became of the declaratory judgment claim, or of the malicious prosecution claim.** Both are named once and never resolved in the memorandum.
- **Whether the marriage involved coercion, as a finding.** UPI reports her counsel telling the jury he "bullied" her into letting him claim credit, and a closing argument is an advocate's characterisation. The memorandum records that evidence of his conduct during the marriage was admitted and was "relevant to show why Margaret was afraid to say that the paintings were hers" (Part III). That is why evidence was allowed in, not a finding about the marriage.
- **The 1970 challenge in San Francisco.** The memorandum describes a magazine article that recounted it. That is a description of a description.
- **Who the trial judge was.** The memorandum's caption says the appeal is from the District of Hawaii, "Harold M. Fong, District Judge, Presiding". UPI in 1986 and the Reader in 1992 both name Judge King as the judge who dismissed the newspaper from the case. This course cannot resolve it and does not choose. It is a research check.
- **When she died.** The obituary read for this course gives her age as 94 and says she died of heart failure at home in Napa Valley. It gives no date in the sentences read, so no date is printed here.
- **The bankruptcy.** The Reader reports a filing on 29 May 1987 in San Diego. Nothing about what any bankruptcy court decided was read, so nothing is said about it.

**What was deliberately left out, though the memorandum prints it.** The names of the witnesses, of a family member, of a friend of Walter's and of a third person mentioned in a quoted remark from the bench. They are private individuals, their names add nothing a learner needs, and a public record is not a reason to repeat them.

**And a warning about this course's own source.** The text quoted throughout was read from a commercial database's reproduction of the memorandum, not from a court copy or the official reporter. It is complete, internally consistent, and its caption and docket number match the citation. It is still a third party's rendering. **Every sentence quoted here should be checked against a court source before it is relied on**, which is the first research check on this course.

**The ledger entry, for the series.** In this case the machinery worked. She brought a claim, a jury heard it, she won, and an appellate court reviewed the whole thing and let the finding stand. And the number was erased, the reasoning was shelved unpublished, and thirty-two years later her own obituary printed the figure without the appeal. A correction can be real, formal and final, and still not reach the story.

:::reveal What is the single most important thing the record does NOT settle? ||| Who painted the pictures. No court in this record decided authorship; the verdict was on a statement made in 1984, and the copyright counterclaim failed on proof of copying.

:::reveal Why does this course file a research check on its own source text? ||| Because the memorandum was read from a commercial database's reproduction rather than a court copy or the official reporter, so every quoted sentence should be checked against a court source before it is relied on.

## Vocabulary
- **Ledger**: this series' name for a written list of what a record settles and what it leaves open.
- **Closing argument**: an advocate's summing up to the jury, which is characterisation rather than evidence or finding.
- **Admissibility reasoning**: a court's explanation of why evidence was allowed in, which is not a finding that the evidence was true.
- **Reproduction**: a copy of a document made by a third party, which may be faithful and is still not the original.

## Sources
*Keane v. Keane*, No. 87-1741, 893 F.2d 1338 (9th Cir. Jan. 18, 1990) (unpublished memorandum). CaseMine reproduction, 12 pp., read 2026-09-20. https://www.casemine.com/judgement/us/627f9fa0714d582dadd73fbb (Opening paragraph, p. 2, for the claims and the disposition; Part I, pp. 3-4; Parts II and IV, pp. 4-5 and 7-8; Part III, p. 6, for the admissibility reasoning and the magazine article; Part V, p. 9, for the comment the court did not condone; Part VI, pp. 9-10; Part VII, pp. 10-11; the separate opinion, pp. 11-12. The district judge's name is in the caption, p. 2.)
Ludel, W. (2022, June 29). *Margaret Keane, widely popular painter of big-eyed figures, has died at age 94*. The Art Newspaper. https://www.theartnewspaper.com/2022/06/29/margaret-keane-big-eyes-painter-obituary (The sentence giving her age and the cause and place of death.)
Parfrey, A. (1992, May 14). *Walter Keane: the saucer eye orphans have lost their father*. San Diego Reader. https://www.sandiegoreader.com/news/1992/may/14/cover-citizen-keane-the-saucer-eye-orphans-have-l/ (The sentence dating the bankruptcy filing, and the sentence naming the judge who granted the directed verdict.)
United Press International. (1986a, June 4). *Artist wins slander suit*. UPI Archives. https://www.upi.com/Archives/1986/06/04/Artist-wins-slander-suit/3346518241600/ (Paragraph 3 for the judge's name, and paragraph 9 for counsel's closing argument about the marriage.)`,
    },
    {
      slug: "quiz-what-a-correction-can-reach",
      title: "16 · Knowledge check: what a correction can and cannot reach",
      section: "Section 4 · What a correction can and cannot reach",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the memorandum say about its own publication?",
            options: ["It is not appropriate for publication", "That it will appear in full in the Federal Reporter within the year", "That it may be cited freely by any court in the United States", "That publication is deferred until the remand has been completed"],
            correctIndex: 0,
            explanation: "The note after the disposition adds that it may not be cited to or by the courts of that circuit except as Ninth Circuit Rule 36-3 provides.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "Under what rule may the disposition be cited, as the note states?",
            options: ["Ninth Circuit Rule 36-3", "Federal Rule of Appellate Procedure 10(c), used to reconstruct records", "Federal Rule of Civil Procedure 56(c), the summary judgment provision", "Federal Rule of Evidence 801(d)(1), on prior consistent statements"],
            correctIndex: 0,
            explanation: "The other three rules all appear in the memorandum for other purposes: record reconstruction, summary judgment and prior consistent statements.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "In what kind of entry does this decision appear in the Federal Reporter?",
            options: ["A table of decisions without reported opinions", "A full opinion running from page 1338 to the end of the case", "An appendix of unpublished orders gathered at the back of the volume", "A headnote summarising the holding for the benefit of researchers"],
            correctIndex: 0,
            explanation: "The editorial note on the first page says so, which is why 893 F.2d 1338 points to a row rather than to the reasoning.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What does the citation 893 F.2d 1338 actually point to?",
            options: ["A row recording the outcome", "The first page of the full text of the memorandum", "The page on which the dissenting opinion begins", "An index entry listing every Ninth Circuit case from January 1990"],
            correctIndex: 0,
            explanation: "The case name, docket number, date and disposition are recorded in a table. The document itself is not printed in that volume.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What power does this memorandum have in full?",
            options: ["Finality as to the parties", "Precedential force throughout the Ninth Circuit", "The power to bind any court considering a similar damages award", "The power to reopen the jury's finding on liability at a later date"],
            correctIndex: 0,
            explanation: "The award is gone, the liability finding stands, two of his claims are over, and there is no further step in that court.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What power does this memorandum essentially lack?",
            options: ["Precedent", "Finality between the two parties to the case", "The authority to vacate the damages award it addressed", "The authority to affirm the district court's summary judgment"],
            correctIndex: 0,
            explanation: "By its own terms it may not be cited to or by the courts of that circuit except as the rule allows, so no later case is governed by it.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is the difference between finality and precedent?",
            options: ["Finality is about the parties, precedent about the future", "Finality is about liability, precedent about damages", "Finality applies to trial courts, precedent to appellate courts", "Finality expires after a fixed period, precedent does not"],
            correctIndex: 0,
            explanation: "A court can hand out one without the other, which is why a document can be decisive about a life and carry no weight as law.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "Why is this case hard to look up?",
            options: ["The reasoning is not in the printed reporter", "Because the record was sealed by order of the district court", "Because the parties settled and the decision was withdrawn", "Because the docket number was assigned to two different cases"],
            correctIndex: 0,
            explanation: "It survives in databases that reproduce unpublished dispositions, so a story whose correction lives only there keeps being told in its uncorrected form.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What open question does this course expressly decline to answer?",
            options: ["Whether the citation rules have changed since 1990", "Whether the panel was right to vacate the damages award", "Whether the trial judge showed bias towards the self-represented party", "Whether the newspaper should have remained a defendant"],
            correctIndex: 0,
            explanation: "It read the 1990 memorandum and nothing else on the point, so it reports only what the document says about itself and files the rest as a research check.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is an unpublished disposition?",
            options: ["A decision issued without being printed as a full opinion", "A decision that has not yet been served on the parties", "A ruling made from the bench and never reduced to writing", "A decision kept confidential at the request of the parties"],
            correctIndex: 0,
            explanation: "It still decides the case completely. What it does not do is create a rule that later cases must follow.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is a reporter, in the legal sense used here?",
            options: ["The printed series of volumes publishing court decisions", "The official who transcribes proceedings during a trial", "A journalist assigned to cover a particular court", "The clerk who maintains the docket for an appellate panel"],
            correctIndex: 0,
            explanation: "The trial in this case was taped without a court reporter in that other sense, which is a separate fact from where the decision was printed.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What new answer does this case add to the series ledger about corrections?",
            options: ["A correction can be complete and still be unfindable", "A correction issued by a court always reaches the public record", "A correction is only as strong as the damages award attached to it", "A correction loses its force once the person corrected has died"],
            correctIndex: 0,
            explanation: "Being right is one thing and being findable is another. The most formal machinery available still produced a document shelved where nobody reads.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is the first of the three questions this course uses to score an account of a case?",
            options: ["Does it name what the plaintiff sued for", "Does it quote the trial judge's instructions to the jury", "Does it identify the judges who sat on the appellate panel", "Does it give the docket number so a reader can look it up"],
            correctIndex: 0,
            explanation: "The other two are whether the account says what happened on appeal, and whether it says the headline number did not survive.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How did TIME's 2014 article score on the three questions?",
            options: ["Zero of three", "Two of three, since it names the lawsuit and the appeal", "Three of three, since it reports the vacated award in full", "One of three, since it names the defamation claim correctly"],
            correctIndex: 0,
            explanation: "It has the demonstration in detail and the four million dollar figure, and the word appeal does not occur anywhere in it.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What reason does TIME give for her not receiving the money?",
            options: ["He had already spent the couple's fortune", "The appellate court vacated the award and remanded for a new trial", "She declined to bring the second trial the remand required", "The bankruptcy court discharged the judgment in 1987"],
            correctIndex: 0,
            explanation: "It supplies a reason for the missing money and the reason is not the one in the record, which is what a substitute explanation looks like.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How did the 2022 Art Newspaper obituary score?",
            options: ["One of three", "Zero of three, because it names no claim at all", "Two of three, because it reports the appeal without the date", "Three of three, because it is the most recent of the four accounts"],
            correctIndex: 0,
            explanation: "It names the defamation lawsuit, which earns the first point. It reports the award without the appeal, and the word appeal does not occur in it.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What reason does the obituary give for the money not arriving?",
            options: ["He quickly filed for bankruptcy", "The Ninth Circuit called the award grossly excessive and erased it", "The remand required a second trial that nobody ever brought", "The judgment was uncollectable because he lived outside the state"],
            correctIndex: 0,
            explanation: "Same move as TIME, different explanation. The award goes missing because of a bankruptcy rather than because it was vacated.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How did the 1992 San Diego Reader score?",
            options: ["Two of three", "Zero of three, because it omits the appeal entirely", "Three of three, since every detail matches the memorandum", "One of three, since it names only the amount of the award"],
            correctIndex: 0,
            explanation: "It carries the appeal and the cancellation of the judgment and reports that she declined a second trial. It loses a point on the date.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What did the San Diego Reader get wrong?",
            options: ["The year of the appellate decision", "The amount of the jury's award, which it gives as four hundred thousand", "The court that decided the appeal, which it names as a state court", "The outcome on liability, which it reports as reversed"],
            correctIndex: 0,
            explanation: "It dates the decision to January 1989. The caption says 18 January 1990, so the substance holds and the date does not.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the Reader's accuracy in 1992 show about how accounts change over time?",
            options: ["Accuracy drains rather than accumulates", "That later accounts correct the errors of earlier ones", "That contemporaneous accounts are always the least reliable", "That obituaries are written from court records as a matter of course"],
            correctIndex: 0,
            explanation: "The 1992 piece is more accurate about the outcome than the 2022 obituary, which is the opposite of what a reader might expect.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the Reader's phrase as excessive correspond to in the memorandum?",
            options: ["So grossly excessive that it shocks the conscience", "Clearly unsupported by any competent evidence of injury", "Unfamiliar with the personalities involved and thus unaffected", "Speculative evidence of lost profits and injury to reputation"],
            correctIndex: 0,
            explanation: "The Reader's characterisation is a fair rendering of the court's own words, which is why the substance holds where the date does not.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How does Part III describe the 1970 magazine article?",
            options: ["As recounting a challenge to a paint out in San Francisco", "As a photographic record of the disputed canvases being painted", "As an interview in which he admitted he had not painted them", "As an advertisement for the sale of prints and lithographs"],
            correctIndex: 0,
            explanation: "It is listed among the five contested evidentiary items, described as an article in which she claimed credit and which recounted the challenge.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How many layers of reporting sit between a reader and the 1970 challenge?",
            options: ["Three", "One, since the memorandum states the event as a fact it has found", "Two, since only the magazine stands between the reader and the event", "None, since the court heard direct testimony about the challenge"],
            correctIndex: 0,
            explanation: "A 1990 court describing a 1970 article describing a challenge, so this course reports how the memorandum describes the article and asserts nothing more.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What is a layered report?",
            options: ["A source describing a source describing an event", "A report published in instalments over several issues", "A record kept by more than one office of the same court", "An account confirmed independently by three separate witnesses"],
            correctIndex: 0,
            explanation: "Each layer can fail separately, which is why this course reports what the memorandum says about the article rather than what the article says about the event.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What kind of detail travels best in a retelling, according to this lesson?",
            options: ["The kind that is easy to picture", "The kind that appears in the most recent published source", "The kind that a court has expressly found to be true", "The kind that carries a precise date and citation"],
            correctIndex: 0,
            explanation: "A woman at an easel travels. Reversed and remanded on damages does not, which is why three of four accounts carry the scene and drop the disposition.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What question does this lesson tell you to ask about an account, instead of asking whether it is vivid?",
            options: ["What it says about the last document in the case", "Whether its author was present in the courtroom", "How many independent sources it cites in its opening paragraph", "Whether it was published while the case was still live"],
            correctIndex: 0,
            explanation: "The three-question score is a way of asking it systematically, so the comparison is between accounts rather than between impressions.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What is a substitute explanation, as this lesson names it?",
            options: ["A plausible reason supplied when the real one has dropped out", "A second source cited in place of one that could not be fetched", "An editor's replacement for a quotation that could not be verified", "A legal theory advanced in the alternative to the main claim"],
            correctIndex: 0,
            explanation: "Spending and bankruptcy both stand in, in different accounts, for an award that was vacated on appeal.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What is compression, as this course uses the word?",
            options: ["The loss of the later, less vivid parts of a story", "The shortening of a court opinion for publication in a table", "The merging of two separate cases into a single narrative", "The reduction of a damages award by a trial judge"],
            correctIndex: 0,
            explanation: "The verdict survives every retelling and the appeal does not, because the verdict is the part that is easy to picture and easy to say.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "Which accounts read for this course contain the word appeal?",
            options: ["The Reader alone, of the three later accounts", "All three of the later accounts, in different amounts of detail", "None of them, including the 1986 wire copy", "The obituary and TIME, but not the Reader"],
            correctIndex: 0,
            explanation: "The 1986 wire copy reports that he said he would appeal. Of the later three, only the 1992 Reader carries what the appeal did.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the ledger say the record settles about the two claims she brought?",
            options: ["Only that she brought them", "That both were decided in her favour by the jury at trial", "That the malicious prosecution claim was dismissed before trial", "That both were affirmed on appeal along with the liability finding"],
            correctIndex: 0,
            explanation: "Defamation and malicious prosecution are named in the opening paragraph. What became of the malicious prosecution claim is never resolved in the memorandum.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is the single most important thing the record does not settle?",
            options: ["Who painted the pictures", "How much the paintings were worth at the time of trial", "Whether the newspaper acted with actual malice in publishing", "Whether the trial judge should have granted the continuance"],
            correctIndex: 0,
            explanation: "No court in this record decided authorship. The verdict was on a statement made in 1984, and the copyright counterclaim failed on proof of copying.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "How does this course treat the claim that she was bullied into ceding credit?",
            options: ["As counsel's characterisation to the jury", "As a finding of fact made by the jury at trial", "As a holding of the appellate court in Part III", "As an admission made by the defendant in his own testimony"],
            correctIndex: 0,
            explanation: "UPI attributes it to her lawyer in closing argument. A closing argument is advocacy, not evidence and not a finding.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the memorandum say the evidence about his conduct during the marriage was relevant to show?",
            options: ["Why she was afraid to say the paintings were hers", "That he lacked the skill to have painted the disputed works", "That the statement he made in 1984 was knowingly false", "That the damages award was justified by the harm she suffered"],
            correctIndex: 0,
            explanation: "Part III gives that as the reason the evidence was admissible. That is admissibility reasoning, not a finding of fact about the marriage.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is admissibility reasoning?",
            options: ["A court's explanation of why evidence was allowed in", "A jury's account of which evidence it found persuasive", "A party's written objection to evidence before trial", "A ruling that evidence is true as well as relevant"],
            correctIndex: 0,
            explanation: "Keeping the difference matters here: saying evidence was relevant to show fear is not the same as finding that the fear or its cause existed.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which two names do the sources disagree about for the trial judge?",
            options: ["Fong in the caption, King in the press accounts", "King in the caption, and Fong in both of the press accounts", "Zilly in the caption, and Fong in the 1992 timeline only", "Fong in the caption, and no judge named in either press account"],
            correctIndex: 0,
            explanation: "The memorandum's caption names Harold M. Fong as presiding. UPI in 1986 and the Reader in 1992 name Judge King as dismissing the newspaper.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "How does this course resolve the disagreement about the trial judge's name?",
            options: ["It does not, and files a research check", "It follows the appellate caption, since a court record outranks a wire story", "It follows the wire copy, since it was written at the time of trial", "It prints both names as though they belonged to two different judges"],
            correctIndex: 0,
            explanation: "Each document is reported as saying what it says, and the course states that it cannot resolve the point rather than choosing between them.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does this course print no date of death for Margaret Keane?",
            options: ["The obituary read gives none in the sentences read", "Because the date is disputed between two published obituaries", "Because publishing a date of death would identify a private individual", "Because the memorandum predates her death by more than thirty years"],
            correctIndex: 0,
            explanation: "It gives her age as 94, the cause as heart failure and the place as her home in Napa Valley. A date found only in search summaries is not printed.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does this course say about the bankruptcy?",
            options: ["Only that the Reader reports a 1987 filing", "That it discharged the four million dollar judgment in full", "That it was the reason the damages award was vacated on appeal", "That the appellate memorandum discusses it at length in Part VI"],
            correctIndex: 0,
            explanation: "Nothing about what any bankruptcy court decided was read, so nothing is said about it beyond the Reader's report of the filing date and place.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which names does this course deliberately leave out, though the memorandum prints them?",
            options: ["The witnesses, a family member, a friend and a third person", "The names of the three judges who decided the appeal", "The name of the newspaper and of its publishing company", "The names of the two parties to the case"],
            correctIndex: 0,
            explanation: "They are private individuals whose names add nothing a learner needs, and a public record is not a reason to repeat them.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Where was the text of the memorandum read from?",
            options: ["A commercial database's reproduction", "The official Federal Reporter volume in a law library", "The Ninth Circuit's own archive of unpublished dispositions", "A certified copy obtained from the District of Hawaii"],
            correctIndex: 0,
            explanation: "It is complete, internally consistent, and its caption and docket number match the citation. It is still a third party's rendering of the document.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is the first research check filed on this course?",
            options: ["Check every quoted sentence against a court source", "Identify the jurors who returned the four million dollar verdict", "Obtain the transcript of the unrecorded chambers conference", "Confirm the circulation figure the dissenting judge cites"],
            correctIndex: 0,
            explanation: "The text came off a third party's reproduction, so every sentence this course quotes should be verified against a court copy or the official reporter.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is a reproduction, in the sense the ledger uses it?",
            options: ["A third party's copy of a document", "A print made from an original painting by its author", "A retelling of a case in a popular publication", "A second trial of a question already decided once"],
            correctIndex: 0,
            explanation: "It may be faithful and it is still not the original, which is why the course flags every quotation for checking rather than treating the copy as settled.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is the ledger, in this series?",
            options: ["A written list of what a record settles and leaves open", "The court file in which every document in a case is kept", "A tally of how many corrections a given record has received", "The accounting of damages a plaintiff is entitled to recover"],
            correctIndex: 0,
            explanation: "Who Gets Named lesson 23 introduces it. This course closes with one, because a course that listed only what is known would compress its own record.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the ledger say happened to the judge's conduct claim?",
            options: ["Reviewed, with no bias found", "Sustained, with the case remanded to a different judge", "Not reached, because no contemporaneous objection was made", "Withdrawn by the appellant before the case was argued"],
            correctIndex: 0,
            explanation: "Part V found the trial was not unfair, while saying it did not condone one comment the judge made during the appellant's testimony.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the appellate court say about the one comment of serious concern?",
            options: ["That it did not condone it", "That it was harmless because the jury did not hear it", "That it required a new trial before a different district judge", "That it had been provoked and was therefore excusable"],
            correctIndex: 0,
            explanation: "Part V says the court does not condone the comment and holds that, in the context of the whole proceedings, it did not render the trial unfair.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is the ledger's closing point about this case for the series?",
            options: ["The machinery worked and the story did not change", "The machinery failed, and that is why the story persisted", "The correction reached the public within a year of the decision", "The story was corrected and the machinery was the reason"],
            correctIndex: 0,
            explanation: "A claim, a jury, a win, a full appellate review that let the finding stand, and thirty-two years later her obituary printed the figure without the appeal.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "How many of Walter Keane's grounds does the ledger record as never reached on the merits?",
            options: ["Two", "None, since the court gave a reasoned answer on every ground", "Four, counting the continuance and the judicial misconduct claim", "Six, since all of them failed on procedural grounds"],
            correctIndex: 0,
            explanation: "One for want of a record, in Part II, and one for want of a contemporaneous objection, in Part IV.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the ledger record about the panel's vote?",
            options: ["It split one to two on Part VI alone", "It split on Part VII as well as Part VI", "It was unanimous throughout the whole decision", "One judge took no part in the decision of the case"],
            correctIndex: 0,
            explanation: "The third judge concurred in all but Part VI, pointing to the readership of five million and to the instruction on presumed damages.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is a closing argument?",
            options: ["An advocate's summing up to the jury", "The final ruling a judge makes before a verdict is returned", "A written brief filed at the end of an appeal", "The last question counsel puts to a witness under cross-examination"],
            correctIndex: 0,
            explanation: "It is characterisation rather than evidence or finding, which is why this course attributes the bullying claim to counsel and not to the jury.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does the course say a ledger of what is NOT known belongs in the course itself?",
            options: ["Otherwise it would compress its own record", "Because research checks are required to appear in every lesson body", "Because a private course is held to a lower standard of certainty", "Because the memorandum requires every reader to list its silences"],
            correctIndex: 0,
            explanation: "A course that listed only what is known would be doing to this record exactly what the retellings do to the appeal.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the ledger record as the stated reason the damages award fell?",
            options: ["Distress evidenced, financial and reputational loss speculative", "The jury was never instructed on how to calculate an award", "The defendant's bankruptcy made the figure uncollectable anyway", "The plaintiff's counsel had conceded the figure was too high"],
            correctIndex: 0,
            explanation: "Plus the observation that most readers of the newspaper were unfamiliar with the personalities involved and were therefore unaffected.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which part of the memorandum does the ledger cite for the bifurcation?",
            options: ["Part I", "Part III, which lists the five contested evidentiary items", "Part VI, which vacates the damages award", "The separate opinion, which reviews the trial's procedural history"],
            correctIndex: 0,
            explanation: "Part I reviews the refusal of the continuance and describes the bifurcation and the directed verdict that left him alone at the defence table.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does a citation in this course carry a part number?",
            options: ["A part number is how a reader finds a holding", "Because the reproduction's page numbers are unreliable", "Because the official reporter prints no page numbers for tables", "Because the parts were renumbered after the case was resubmitted"],
            correctIndex: 0,
            explanation: "The seven parts are the document's own navigation, so a locator that names the part points a reader at the passage rather than at the document.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is a table decision?",
            options: ["An entry recording an outcome without the reasoning", "A decision reached by a panel sitting around a table informally", "A ruling setting out a schedule of damages in tabular form", "A decision listing the exhibits admitted during a trial"],
            correctIndex: 0,
            explanation: "That is what appears at 893 F.2d 1338: case name, docket number, date and disposition, with the memorandum itself printed elsewhere.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is precedent?",
            options: ["A decision that governs how later cases are decided", "The order in which appeals are heard within a circuit", "A prior ruling by the same judge in the same case", "The first case ever brought on a particular question"],
            correctIndex: 0,
            explanation: "This memorandum creates none, by its own terms, which is the point the course asks you to hold alongside its total finality for the parties.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What is finality?",
            options: ["The quality of ending a dispute between the parties", "The requirement that a decision be published to take effect", "The rule that no appeal may be taken after a fixed period", "The point at which damages become collectable in full"],
            correctIndex: 0,
            explanation: "This memorandum has it completely: the award is gone, the finding stands, and there is no further step in that court.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "Which of the four accounts scored highest against the three questions?",
            options: ["The 1992 San Diego Reader", "The 2022 Art Newspaper obituary, which names the defamation claim", "The 2014 TIME article, which has the most detail about the trial", "The 1986 UPI wire copy, which was filed the day after the verdict"],
            correctIndex: 0,
            explanation: "Two of three: it carries the appeal and the cancellation of the judgment, and loses its third point on the year of the decision.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the ledger say about the malicious prosecution claim?",
            options: ["It is named once and never resolved", "It was decided in her favour and affirmed on appeal", "It was dismissed before trial for want of an underlying proceeding", "It was tried together with the defamation claim before one jury"],
            correctIndex: 0,
            explanation: "Like the declaratory judgment claim, it appears in the opening paragraph and nowhere else in the memorandum.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What is this course's answer to the question of whether a correction can reach a story?",
            options: ["Not on its own", "Yes, provided a court has made it formally", "Yes, provided the person corrected is still alive to repeat it", "No, because a correction always arrives after the story has settled"],
            correctIndex: 0,
            explanation: "The correction here was complete, binding and made by the most formal machinery available, and the story went on being told without it.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which part of the memorandum does the ledger cite for the copyright counterclaim?",
            options: ["Part VII", "Part VI, which also addresses the value of the works", "Part II, where the counterclaim evidence was excluded", "Part V, which reviews the trial judge's conduct during it"],
            correctIndex: 0,
            explanation: "Part VII reviews the summary judgment independently and affirms it, on the ground that copying was never proved.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does the ledger record about the disposition's citability?",
            options: ["Unpublished, and not to be cited except as the rule allows", "Published in full in the Federal Reporter as a precedential opinion", "Sealed, and available only to the parties and their counsel", "Citable anywhere except in the circuit that issued it"],
            correctIndex: 0,
            explanation: "The note at the end of Part VII states it, and the editorial note explains that the Federal Reporter carries it only as a table entry.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What should a reader do with the quotations in this course, according to lesson 15?",
            options: ["Check them against a court source", "Take them as settled, since the reproduction is complete", "Compare them with the retellings measured in lesson 14", "Treat them as paraphrases rather than as exact wording"],
            correctIndex: 0,
            explanation: "The course quotes from a third party's rendering, and says so in the lesson rather than only in a note nobody reads.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does this course mean by a scoring rubric?",
            options: ["A fixed set of questions applied to every account", "A grading scheme for the quizzes at the end of each section", "A ranking of sources by how recently they were published", "A method for weighing testimony against documentary evidence"],
            correctIndex: 0,
            explanation: "Applying the same three questions to each account makes the comparison between accounts rather than between impressions.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "Which of these is NOT something the record settles?",
            options: ["Whether the marriage involved coercion", "That liability was affirmed and the damages award vacated", "That the counterclaim failed for want of proof of copying", "That two grounds of appeal were never reached on their merits"],
            correctIndex: 0,
            explanation: "Coercion appears as counsel's argument and as a reason evidence was admitted, never as a finding. The other three are in the memorandum's own words.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the trial being taped without a court reporter produce, in the end?",
            options: ["A gap that could not be rebuilt", "A complete transcript that the appellate court relied on", "An agreed statement of the proceedings under Rule 10(c)", "A basis for reversing the judgment as a violation of procedure"],
            correctIndex: 0,
            explanation: "The chambers had no taping equipment, the conference went unrecorded, the reconstruction failed, and the claim that depended on it was denied.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What does this course say a public record is not a reason to do?",
            options: ["Repeat private individuals' names", "Quote a document that has not been verified", "Assert a claim that appears in a secondary account", "Publish a decision the issuing court marked unpublished"],
            correctIndex: 0,
            explanation: "The memorandum prints the names of witnesses and family members. This course uses their roles instead, because the names add nothing a learner needs.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Why does the course describe the four million dollars as the part that travels?",
            options: ["It is a number, and numbers are easy to repeat", "Because it was the only part of the case the jury decided", "Because the appellate court expressly approved that figure", "Because it appears in the caption of the published decision"],
            correctIndex: 0,
            explanation: "Reversed and remanded on damages is the part that does not travel, which is exactly what the three-question score is built to detect.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "How many of the four accounts read for this course say the headline number did not survive?",
            options: ["One", "Two, counting the obituary's reference to the bankruptcy", "Three, since only the 1986 wire copy predates the appeal", "None, since all four stop at the jury's verdict"],
            correctIndex: 0,
            explanation: "The 1992 Reader alone. TIME and the obituary both supply a different explanation for the money never arriving.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the course say about being right versus being findable?",
            options: ["They are different, and a correction needs both", "Being right is enough, because records are permanent", "Being findable matters only for published opinions", "They are the same thing once a court has ruled"],
            correctIndex: 0,
            explanation: "This correction was complete, binding and produced formally, and it was shelved in a table entry where almost nobody looking for the story would find it.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What does the ledger record about the declaratory judgment claim?",
            options: ["It is named once and never resolved", "It was granted, declaring her the author of the disputed works", "It was withdrawn by agreement before the trial began", "It was denied, and that denial was affirmed on appeal"],
            correctIndex: 0,
            explanation: "It appears in the opening paragraph and nowhere else, so the memorandum settles nothing about it and neither does this course.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which lesson of this course carries the sentence that no court in this record decided authorship?",
            options: ["Lesson 15", "Lesson 2, which reads the courtroom demonstration against the wire copy", "Lesson 9, which reads Part VI and the vacated award", "Lesson 13, which explains the unpublished status of the decision"],
            correctIndex: 0,
            explanation: "It is the ledger's first entry under what the record does not settle, and the course calls it the single most important line in it.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Where does the editorial note about the Federal Reporter table appear?",
            options: ["On the first page, above the caption", "At the end of Part VII, beside the disposition line", "In the separate opinion, as a footnote to the first paragraph", "In the caption itself, immediately after the docket number"],
            correctIndex: 0,
            explanation: "The note about citability written by the court sits after the disposition. The editorial note about the table is on the reproduction's first page.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What kind of source is the 1986 wire copy, relative to the appeal?",
            options: ["It predates the appeal entirely", "It reports the appellate decision as it was handed down", "It was written after the remand had been declined", "It was filed the same week the memorandum was decided"],
            correctIndex: 0,
            explanation: "The stories were filed on 4 June 1986 and report only that he said he would appeal. Nothing in them can be scored against the appellate outcome.",
            sourceLessonSlug: "the-compression-measured",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-painted-in-court",
      title: "17 · Final assessment",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "State the disposition of this appeal in one phrase.",
            options: ["Liability affirmed, damages vacated and remanded", "Affirmed in full, with the four million dollar award left standing", "Reversed in full, with judgment directed for the appellant", "Dismissed, because the appellate record could not be reconstructed"],
            correctIndex: 0,
            explanation: "The opening paragraph: we affirm as to liability, and reverse and remand for a new trial on the question of damages.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "Which claims did Margaret Keane bring?",
            options: ["Defamation and malicious prosecution", "Copyright infringement and unfair competition against her former husband", "Breach of contract and fraud arising from the sale of reproductions", "A single claim for a declaration that she had painted the works"],
            correctIndex: 0,
            explanation: "She brought both and also sought a declaratory judgment. He counterclaimed for copyright infringement.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "Who brought the copyright claim in this case?",
            options: ["Walter", "Margaret, seeking control over reproductions bearing his signature", "The newspaper's publisher, over photographs used in the 1984 article", "Neither party, since no copyright claim was pleaded at any stage"],
            correctIndex: 0,
            explanation: "It was his counterclaim, and Part VII affirms summary judgment against it for want of proof of copying.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Does the appellate memorandum mention the courtroom painting demonstration?",
            options: ["No", "Yes, in Part III, among the five contested items of evidence", "Yes, in Part VI, as evidence supporting the damages award", "Yes, in the separate opinion, as the strongest proof of authorship"],
            correctIndex: 0,
            explanation: "Twelve pages, seven parts and a separate opinion, and the scene appears in none of them. The eleven paint references are about other things.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What did the court say about the newspaper's readers when assessing damages?",
            options: ["Most were unfamiliar with the personalities involved", "Most were regular buyers of prints by one or other of the parties", "Most had read a later article correcting the statement complained of", "Most were in the state where the action was eventually tried"],
            correctIndex: 0,
            explanation: "Part VI: although the paper had extensive circulation, it would appear the majority of readers were unaffected by the article.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What figure did the dissenting judge treat as most important?",
            options: ["A readership of five million", "The four million dollar award returned by the jury", "The fifty-three minutes the courtroom painting took", "The forty-nine days between the withdrawal of counsel and trial"],
            correctIndex: 0,
            explanation: "The same circulation the majority read as reaching strangers, he read as evidence of five million readers. One fact, two opposite readings.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "On which part of the decision was the panel not unanimous?",
            options: ["Part VI", "Part VII, on the summary judgment against the counterclaim", "Part I, on the refusal of the continuance", "Part II, on the restriction of cross-examination"],
            correctIndex: 0,
            explanation: "One judge concurred in all but Part VI and would have affirmed the damages award as well as the liability finding.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "Why was the claim in Part II denied?",
            options: ["No record on which to evaluate it", "Because the witness had been properly excluded under the rules of evidence", "Because the appellant withdrew the argument at oral argument", "Because the trial judge had already corrected the error himself"],
            correctIndex: 0,
            explanation: "The chambers conference was unrecorded, the appellate court's attempt to reconstruct it failed, and no offer of proof appears in the record.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Why did the court not decide whether the jury instruction was wrong?",
            options: ["No contemporaneous objection was made", "Because the instruction had been requested by the appellant himself", "Because the argument was raised for the first time after the decision", "Because instructions are reviewed only when a verdict is set aside"],
            correctIndex: 0,
            explanation: "Part IV: failure to make a contemporaneous objection precludes appellate review even in cases of plain error.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which question in this appeal was reviewed with no deference?",
            options: ["The summary judgment", "The refusal of the continuance, which raised a pure question of law", "The size of the damages award, which an appellate court fixes itself", "The judicial misconduct claim, because it concerned the judge's own conduct"],
            correctIndex: 0,
            explanation: "Part VII is reviewed independently, because it was decided on paper under a written standard rather than in the room in front of the trial judge.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What is the standard for reviewing the denial of a continuance?",
            options: ["Abuse of discretion", "Independent review of the scheduling order as a matter of law", "Plain error, since scheduling objections are rarely preserved", "Whether the party was left unrepresented at any point in the trial"],
            correctIndex: 0,
            explanation: "The test quoted is whether the refusal was so unreasonable and arbitrary as to amount to an abuse of discretion, which is why the court could affirm a ruling it might not have made.",
            sourceLessonSlug: "standards-of-review",
          },
          {
            prompt: "What did the trial judge do after refusing the continuance?",
            options: ["Bifurcated the trial", "Appointed counsel to represent the moving party at public expense", "Adjourned the defamation claim and tried the counterclaim first", "Directed that the whole case be tried by the judge without a jury"],
            correctIndex: 0,
            explanation: "The defamation claim went ahead on schedule while the co-defendant newspaper was still in the case, so he would have the benefit of its counsel.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "What event left Walter Keane alone at the defence table?",
            options: ["The directed verdict for the newspaper", "The withdrawal of his own counsel during the trial itself", "The judge's order excluding his witnesses from the courtroom", "His refusal to appear for the last days of the proceedings"],
            correctIndex: 0,
            explanation: "Part I says the court could not have anticipated the directed verdict in the publisher's favour that left him alone for the last days of trial.",
            sourceLessonSlug: "bifurcation-and-the-empty-chair",
          },
          {
            prompt: "Why did the copyright counterclaim fail?",
            options: ["Copying was never proved", "Because his registrations were found to be invalid on their face", "Because the court found that she had painted the works herself", "Because the claim was filed after the limitation period expired"],
            correctIndex: 0,
            explanation: "He never presented copies of the works, never actually alleged she had copied, and offered no evidence of substantial similarity.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did no court in this record decide?",
            options: ["Who painted the pictures", "Whether the 1984 statement had been published to a third party", "Whether the newspaper's publisher was entitled to a directed verdict", "Whether the damages award was supported by evidence of distress"],
            correctIndex: 0,
            explanation: "The verdict was on a statement made in 1984, and the counterclaim failed on proof of copying. Authorship was never the question decided.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What does the memorandum say about its own citability?",
            options: ["It may not be cited except as the circuit's rule allows", "It may be cited by any federal court but not by state courts", "It may be cited only by the parties in later proceedings", "It may be cited freely once the remand has been completed"],
            correctIndex: 0,
            explanation: "The note after the disposition names Ninth Circuit Rule 36-3, and the editorial note explains it appears in the reporter only as a table entry.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What two powers does this course ask you to hold apart?",
            options: ["Finality and precedent", "Liability and damages, which the appeal treated separately", "Publication and citation, which the circuit rule links together", "Preservation and waiver, which govern what may be reviewed"],
            correctIndex: 0,
            explanation: "This memorandum is total as to the parties and, on its own terms, creates no rule for anybody else. A document can decide a life and count for nothing as law.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "Which of the four retellings carries the appeal?",
            options: ["The 1992 San Diego Reader", "The 2014 TIME article, which describes the trial at greatest length", "The 2022 Art Newspaper obituary, which names the defamation claim", "The 1986 UPI wire copy, filed the day after the verdict"],
            correctIndex: 0,
            explanation: "It scores two of three and loses its third point on the date, which it gives as January 1989 rather than 18 January 1990.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What reason does TIME give for the money never arriving?",
            options: ["He had already spent the couple's fortune", "The appellate court vacated the award as grossly excessive", "She declined to bring the second damages trial the remand required", "The bankruptcy court discharged the debt in February 1990"],
            correctIndex: 0,
            explanation: "A substitute explanation: a plausible reason supplied where the real one, the vacated award, has dropped out of the account entirely.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What reason does the 2022 obituary give?",
            options: ["He quickly filed for bankruptcy", "The Ninth Circuit erased the award and ordered a new trial", "She never pursued enforcement of the judgment she had won", "The award had been reduced to a nominal sum by the trial judge"],
            correctIndex: 0,
            explanation: "Same move as TIME with a different explanation. Neither account contains the word appeal anywhere.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What did the court accept as evidenced, in its damages analysis?",
            options: ["Anguish and humiliation", "Lost profits from cancelled commissions after the article appeared", "Injury to her standing among dealers and collectors", "The cost of the litigation she had been forced to bring"],
            correctIndex: 0,
            explanation: "The other categories it called speculative, which is the reasoning that carried the award into the shocks-the-conscience test.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What did the jury instruction say compensatory damages could demonstrate?",
            options: ["The falsity of the defendant's statements", "The defendant's ability to pay the sum awarded", "The plaintiff's standing in her profession before the article", "The publisher's responsibility for what it had printed"],
            correctIndex: 0,
            explanation: "The dissent quotes it. An award of money as a public announcement of falsity is the frame the jury was working in when it wrote down four million dollars.",
            sourceLessonSlug: "the-dissent-on-the-same-evidence",
          },
          {
            prompt: "What does the three-question score ask about a retelling?",
            options: ["Claim, appeal, and whether the number survived", "Length, date of publication, and number of sources cited", "Whether it quotes the judge, the jury and the parties directly", "Whether its author read the transcript, the briefs and the opinion"],
            correctIndex: 0,
            explanation: "Does it name what the plaintiff sued for, does it say what happened on appeal, and does it say that the headline number did not survive.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "What does the course say about the detail that travels in a retelling?",
            options: ["It is the kind that is easy to picture", "It is the kind a court has expressly found to be true", "It is the kind that appears in the most recent account", "It is the kind supported by more than one independent source"],
            correctIndex: 0,
            explanation: "A woman at an easel travels. Reversed and remanded on damages does not, which is why the scene outlived the disposition by decades.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "Where was the text of the memorandum used in this course read from?",
            options: ["A commercial database's reproduction", "The official Federal Reporter volume for 893 F.2d", "A certified copy issued by the District of Hawaii", "The Ninth Circuit's own online archive of dispositions"],
            correctIndex: 0,
            explanation: "Complete, internally consistent, and still a third party's rendering, so every quotation is flagged for checking against a court source.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "Which fact about the trial judge's identity does this course refuse to settle?",
            options: ["Whether it was Fong or King", "Whether he was appointed to the district court or sitting by designation", "Whether he presided over the counterclaim as well as the defamation claim", "Whether he instructed the jury on presumed damages himself"],
            correctIndex: 0,
            explanation: "The caption names Harold M. Fong as presiding; UPI and the Reader both name Judge King as dismissing the newspaper. The course files a research check.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "How does this course treat the bullying described in closing argument?",
            options: ["As an advocate's characterisation", "As a finding of fact supported by the jury's verdict", "As a holding of the appellate court in Part III", "As testimony given under oath by the plaintiff herself"],
            correctIndex: 0,
            explanation: "UPI attributes it to her lawyer addressing the jury. The memorandum separately records why evidence of his conduct was admissible, which is a different thing.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What was the evidence of his conduct during the marriage said to be relevant to show?",
            options: ["Why she was afraid to say the paintings were hers", "That he was incapable of painting in the disputed style", "That the 1984 statement had been made with actual malice", "That the award of four million dollars was justified"],
            correctIndex: 0,
            explanation: "Part III gives that as the reason it was admissible, and this course keeps admissibility reasoning separate from findings of fact.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "What did the appellate court say about one comment the trial judge made?",
            options: ["That it did not condone it", "That it required a new trial before a different judge", "That it had been provoked and was therefore excusable", "That it was never heard by any member of the jury"],
            correctIndex: 0,
            explanation: "Part V calls it the only judicial comment of serious concern, declines to condone it, and holds that it did not render the trial unfair in context.",
            sourceLessonSlug: "what-the-record-settles",
          },
          {
            prompt: "How many of Walter Keane's six grounds of appeal succeeded?",
            options: ["One", "Three, being the continuance, the cross-examination and the damages", "None, since the decision affirmed every ruling below", "Six, which is why the case was remanded for a new trial"],
            correctIndex: 0,
            explanation: "Only the excessiveness of the verdict, which is the ground with the number in it. Everything else was affirmed.",
            sourceLessonSlug: "the-story-as-it-is-told",
          },
          {
            prompt: "What does this course say a grievance without a record is?",
            options: ["A grievance", "A claim the appellate court will reconstruct on request", "A basis for a new trial under Rule 10 of the appellate rules", "Sufficient, provided the party was representing himself"],
            correctIndex: 0,
            explanation: "In this system a true claim that is not in the record does not exist on appeal. The remedy has to be built at the moment, in a form somebody else can read.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which two elements make up a copyright infringement claim, as the memorandum states them?",
            options: ["A valid copyright and copying", "Registration and a failure to credit the creator", "Authorship and commercial exploitation of the work", "Publication and substantial similarity to an earlier work"],
            correctIndex: 0,
            explanation: "Copying then divides into access and substantial similarity, and the counterclaim failed on the second of those.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "Which of his claims did Walter Keane leave unchallenged on appeal?",
            options: ["Unfair competition", "The copyright infringement counterclaim, decided in Part VII", "The refusal of a continuance, decided in Part I", "The excessiveness of the verdict, decided in Part VI"],
            correctIndex: 0,
            explanation: "Part VII notes he does not challenge the summary judgment in her favour on that claim, so it ended without argument.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What does the course say is the honest two-clause sentence about this case?",
            options: ["The finding stands and the four million dollars does not", "She won four million dollars and never collected any of it", "A court declared her the painter and vacated the damages", "The appeal reversed the verdict and upheld the award"],
            correctIndex: 0,
            explanation: "Any version with only one of those clauses is wrong, and the flattering version keeps the number while dropping the appeal.",
            sourceLessonSlug: "liability-affirmed-damages-vacated",
          },
          {
            prompt: "What does the ledger add to the series question about corrections?",
            options: ["A correction can be complete and still unfindable", "A court correction always reaches the public eventually", "A correction fails only when the corrected party contests it", "A correction is effective in proportion to the damages awarded"],
            correctIndex: 0,
            explanation: "The most formal machinery available produced a binding correction, shelved as a table entry, and thirty-two years later the obituary printed the figure without it.",
            sourceLessonSlug: "decisive-and-not-precedent",
          },
          {
            prompt: "What kind of claim was live before the jury in Honolulu?",
            options: ["A claim about a statement made in 1984", "A claim about who painted the canvases between 1955 and 1965", "A claim about the ownership of the reproduction rights", "A claim about an earlier lawsuit brought improperly"],
            correctIndex: 0,
            explanation: "The defamation claim concerned what he told a freelance writer for USA Today. The malicious prosecution claim is named in the memorandum and never resolved.",
            sourceLessonSlug: "what-she-actually-sued-for",
          },
          {
            prompt: "What did the 1986 wire copy say he gave as his reason for not painting?",
            options: ["A shoulder injury", "That he had not been given adequate notice of the demonstration", "That the courtroom conditions made his technique impossible", "That his materials were being held by the bankruptcy trustee"],
            correctIndex: 0,
            explanation: "Both UPI stories report it, and both report that she painted one in the courtroom during the trial.",
            sourceLessonSlug: "the-demonstration-and-what-it-proves",
          },
          {
            prompt: "What did the appellate court do when it could not obtain a record of the chambers conference?",
            options: ["Denied the claim that depended on it", "Ordered a new trial so the exchange could be repeated on the record", "Accepted the appellant's own written account of what was said", "Directed the district judge to certify his recollection under oath"],
            correctIndex: 0,
            explanation: "It had withdrawn the case from submission for reconstruction, reported in four words that the effort failed, and denied the claim for want of a record.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "Which lesson of Who Signs the Print does this course point to on what a signature certifies?",
            options: ["Lesson 2", "Lesson 7, which teaches what an examination can and cannot establish", "Lesson 23, which asks what a correction can repair", "Lesson 1, which defines what a print edition is"],
            correctIndex: 0,
            explanation: "This case is the extreme version of that mechanism: the paperwork stood in his name, which is what let him bring a copyright claim against her.",
            sourceLessonSlug: "the-claim-that-was-his",
          },
          {
            prompt: "What did the memorandum say the record does not tell it about the chambers conference?",
            options: ["What offer of proof, if any, was made", "Which questions the trial judge had already ruled out", "How long the recess lasted before the trial resumed", "Whether opposing counsel was present for the discussion"],
            correctIndex: 0,
            explanation: "Because the conference was not recorded, and the reconstruction failed, no offer of proof appears anywhere in the record on appeal.",
            sourceLessonSlug: "preserved-waived-and-the-record",
          },
          {
            prompt: "What does this course refuse to assert about the 1970 challenge in San Francisco?",
            options: ["That it happened", "That the memorandum describes a magazine article recounting it", "That the article was among the five contested evidentiary items", "That the obituary uses the word another when describing 1986"],
            correctIndex: 0,
            explanation: "A 1990 court describing a 1970 article describing a challenge is three layers, so the course reports the description and asserts nothing about the event.",
            sourceLessonSlug: "the-compression-measured",
          },
          {
            prompt: "Why does every citation in this course carry a part number?",
            options: ["That is how a reader finds a holding", "Because the reproduction's pagination differs from the reporter's", "Because the parts were renumbered when the case was resubmitted", "Because the decision has no page numbers of its own"],
            correctIndex: 0,
            explanation: "The seven parts are the document's own navigation, and a locator that names the part sends a reader to the passage rather than to the document.",
            sourceLessonSlug: "what-the-record-settles",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// D5a SOURCE TIERING (rubric v1.3, CLAUDE.md source-hosting rule), for whoever runs
// `pnpm gen:citations`. The tier is decided PER SOURCE, and this course's private visibility is a
// separate question from whether a document may be rehosted.
//
// THE ONE THAT NEEDS A PARAGRAPH RATHER THAN A LABEL: the memorandum.
//   The WORK is a US federal judicial opinion, and a court's opinion is not somebody's copyrighted
//   property, so the TEXT is Tier A material in principle. The COPY this course was built from is
//   not. It is a CaseMine page capture: their layout, their branding, their "Smart Summary" and
//   "CaseIQ" panels, and an editorial note they wrote about the Federal Reporter table. Uploading
//   that PDF to Cloudinary would be republishing their page, not the court's opinion.
//   So: **TIER B in practice.** Link the CaseMine page; do NOT upload the local PDF at
//   `content/Margaret Keane/Keane v. Keane _ No. 87-1741 _ 9th Cir. _ Judgment _ Law _ CaseMine.pdf`.
//   It becomes genuinely Tier A, and hostable, the moment the same text is obtained from a court
//   source or a public-domain reproduction. That is research check A, and it is the single most
//   valuable thing anyone could do for this course.
//
// TIER A, free to host: **NONE, today.** See above for the one that could become Tier A.
//
// TIER B, copyrighted or third-party, publicly readable, LINK ONLY, never upload:
//   - CaseMine's reproduction of *Keane v. Keane*, No. 87-1741 (9th Cir. Jan. 18, 1990).
//   - United Press International (1986a) and (1986b), the two 4 June 1986 wire stories, on UPI's
//     own archive. UPI copyright; both open without a login.
//   - Dockterman, E. (2014), TIME. TIME USA copyright.
//   - Ludel, W. (2022), The Art Newspaper. The Art Newspaper copyright.
//   - Parfrey, A. (1992), San Diego Reader. San Diego Reader copyright.
//
// TIER C, cite only, no link to a copy, nothing to upload:
//   - The 1970 Life magazine article described in Part III. NOT OBTAINED. It reaches this course
//     only as the memorandum's description of it, and lesson 14 says so in those words.
//   - The trial record: the jury instructions, the closing arguments, the transcript, and the
//     chambers conference that was never recorded at all. None was read. Everything this course
//     says about the trial comes from the memorandum or from the two wire stories.
//   - *In re Walter Stanley Keane*, Bankruptcy No. 87-03845-H7 (Bankr. S.D. Cal.). NOT OBTAINED,
//     and nothing about it is stated anywhere in the course. Research check F.
//
// LOCATORS. Every `## Sources` entry above carries one, per the 2026-09-20 rule:
//   - The memorandum: the PART NUMBER first, because that is how a reader finds a holding in a
//     document with no printed pagination of its own, and the reproduction's page number second,
//     because that is how a reader finds it in the PDF BAM has. The opening paragraph and the
//     separate opinion are named as such, since neither carries a part number.
//   - The wire stories: the paragraph number, counting the dateline paragraph as paragraph 1.
//   - TIME, The Art Newspaper and the San Diego Reader: the paragraph or the sentence carrying the
//     quotation, plus, for the two where an absence is the finding, the statement that a search of
//     the full article returns no occurrence of the word "appeal".
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file). `course` is the
// slug to be registered, `painted-in-court`.
//
//  A. key "keane-memorandum-official-text" · severity HIGH · lesson "what-the-record-settles"
//     title: Check every sentence this course quotes against a court source
//     quote: "Every sentence quoted here should be checked against a court source before it is
//            relied on"
//     claim: The whole course quotes *Keane v. Keane*, No. 87-1741 (9th Cir. Jan. 18, 1990) from a
//            CaseMine reproduction. The text is complete, internally consistent, and its caption,
//            docket number and citation all match; its pages show no sign of OCR damage.
//     stakes: The highest on this list by a distance. This is a Tier 2 subject and roughly forty
//            quotations carry the course. A transcription error anywhere in that reproduction would
//            put a false sentence in a learner's mouth about what a federal court held. It would
//            also make hosting possible: a court-sourced text is a US federal work and Tier A.
//     needs: the same text from the Ninth Circuit's own records, a certified copy from the District
//            of Hawaii, or a public-domain reproduction, compared line by line with the local PDF.
//     where: the Ninth Circuit clerk's office; PACER for No. 87-1741; CourtListener, which carries
//            public-domain reproductions of federal dispositions.
//
//  B. key "keane-trial-judge-identity" · severity medium · lesson "what-the-record-settles"
//     title: Who presided at the 1986 Keane trial in Honolulu?
//     quote: "This course cannot resolve it and does not choose."
//     claim: The memorandum's caption reads "Appeal from the United States District Court for the
//            District of Hawaii; Harold M. Fong, District Judge, Presiding". UPI on 4 June 1986 and
//            the San Diego Reader in 1992 both name Judge King as the judge who granted the
//            directed verdict for Gannett.
//     stakes: Medium. Nothing in the course's reasoning depends on the name, and the course prints
//            what each document says without choosing. But an unresolved contradiction between a
//            court caption and two press accounts is exactly the kind of thing this course teaches
//            a reader to notice, so leaving it open and marked is the honest state, not the final one.
//     needs: the district court docket for the case, which names the assigned judge and any
//            reassignment; or the trial minutes.
//     where: PACER or the District of Hawaii clerk; the Federal Judicial Center's biographical
//            directory for both judges' service dates in that district.
//
//  C. key "keane-declaratory-and-malicious-prosecution" · severity medium · lesson
//     "what-she-actually-sued-for"
//     title: What became of the declaratory judgment and malicious prosecution claims?
//     quote: "This course therefore does not say what happened to it."
//     claim: The memorandum's opening paragraph names both and never returns to either. The course
//            states that gap twice and fills it nowhere.
//     stakes: Medium, and higher than it looks. The declaratory judgment claim is the closest thing
//            in this case to the finding people believe was made, so its outcome is the one fact
//            that could change the course's central line, "no court in this record decided who
//            painted the pictures". If a declaratory judgment on authorship was in fact entered,
//            lesson 15 needs rewriting, not amending.
//     needs: the district court's final judgment and the docket entries after the bifurcation.
//     where: PACER for the district case; the District of Hawaii clerk's records.
//
//  D. key "keane-unpublished-citation-rule-today" · severity low · lesson "decisive-and-not-precedent"
//     title: How may this disposition be cited now?
//     quote: "it reports what the document says about itself and files the rest as a research check"
//     claim: The course states only what the 1990 note says: not appropriate for publication, and
//            not to be cited to or by the courts of that circuit except as Ninth Circuit Rule 36-3
//            provides. It states nothing about the rule as it stands today.
//     stakes: Low for accuracy and real for usefulness. A learner will ask, and the honest answer
//            today is that this course did not read the current rule. Saying anything else would be
//            the exact mistake the course spends four sections teaching against.
//     needs: Ninth Circuit Rule 36-3 as it stands, and whatever federal rule now governs citing
//            unpublished dispositions, each read on the issuing court's own text.
//     where: the Ninth Circuit's published rules; the federal rules of appellate procedure as
//            published by the Administrative Office. Read them, do not summarise a summary.
//
//  E. key "keane-1982-prior-proceeding" · severity low · lesson "what-she-actually-sued-for"
//     title: What earlier proceeding did the malicious prosecution claim rest on?
//     claim: NOTHING is printed on this in the course. A malicious prosecution claim needs an
//            earlier proceeding brought against the claimant, and the memorandum never describes
//            one. A summary of the San Diego Reader's timeline seen while fetching it referred to
//            Walter filing suit in 1982, but that sentence was NOT read verbatim, so it is not in
//            the course and is not asserted here either.
//     stakes: Low. It would add one sentence to lesson 3 and close a visible hole in the story.
//     where: the Reader's 1992 piece read in full rather than in summary; the district court docket.
//
//  F. key "keane-bankruptcy-outcome" · severity low · lesson "what-the-record-settles"
//     title: What did the 1987 bankruptcy proceeding decide?
//     quote: "Nothing about what any bankruptcy court decided was read, so nothing is said about it"
//     claim: The San Diego Reader reports a filing on 29 May 1987 in San Diego. That is all the
//            course says, attributed. TIME and the 2022 obituary each explain the missing money by
//            spending or bankruptcy rather than by the vacated award, so what the bankruptcy
//            actually did is worth knowing before either explanation is repeated or dismissed.
//     needs: the disposition in *In re Walter Stanley Keane*, Bankruptcy No. 87-03845-H7, Adv. No.
//            C87-0628-H7 (Bankr. S.D. Cal.), and whether she appeared as a creditor.
//     where: PACER; the Bankruptcy Court for the Southern District of California.
//
//  G. key "keane-death-date" · severity low · lesson "what-the-record-settles"
//     title: The date of Margaret Keane's death
//     quote: "It gives no date in the sentences read, so no date is printed here."
//     claim: The Art Newspaper obituary of 29 June 2022 gives her age as 94, the cause as heart
//            failure and the place as her home in Napa Valley. A date circulates in search
//            summaries and was not read on any source, so it is not printed.
//     needs: a date on a source that was fetched and read, not a search snippet.
//
//  H. key "keane-jury-instructions" · severity medium · lesson "the-dissent-on-the-same-evidence"
//     title: The jury instructions, in full
//     claim: The course quotes two fragments of the instructions, both as the dissenting judge
//            quotes them: that compensatory damages could be awarded absent evidence of actual
//            injury because the law presumes defamatory statements injure reputation, and that such
//            damages let a plaintiff "demonstrate to others the falsity of statements made by a
//            defendant". It also reports, from Part IV, that the trial court had ruled the phrase
//            "Thinking he was dead" was only a statement of motive and not actionable per se.
//     stakes: Medium. Lesson 1 tells the learner the verdict was returned "under instructions this
//            course has not read in full", and that hedge is load-bearing: it is the reason the
//            course can say the jury decided a defamation question without saying what the jury
//            found about authorship. Reading the instructions would either confirm the hedge or
//            retire it.
//     needs: the instructions as given, from the trial record.
//     where: PACER or the District of Hawaii clerk for No. 87-1741's underlying case file.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file).
// Import: `import { PAINTED_IN_COURT_COURSE } from "./data/painted-in-court-course";`
// NO migration. NO seed:* re-run beyond `pnpm seed:courses`.
//
//   // "Painted in Court" (Margaret Keane, plans/83 E-01). PRIVATE study, by BAM's approval on
//   // 2026-09-21 of plans/future-courses/uncredited/2026-09-18-margaret-keane-brief.md, built
//   // STANDALONE rather than as section 3 of the cluster the brief proposed: BAM approved her
//   // alone, and the full Ninth Circuit memorandum he supplied on 2026-09-20 changed the subject
//   // from "she won four million by painting in court" to what a court can and cannot repair. Four
//   // teaching sections and a final, sized to what the document supports rather than to a standard
//   // length. NO series code, per BAM's 2026-09-19 decision that private courses carry none.
//   // NO migration: pnpm seed:courses.
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "painted-in-court",
//     course: PAINTED_IN_COURT_COURSE,
//     category: "Culture & History",
//     additionalCategories: ["Civics"],
//     seriesSlug: "credit",
//     seriesTitle: "Credit: Who Gets Named",
//     seriesOrder: 16,
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83). Built from the full Ninth Circuit memorandum in Keane v. Keane, No. 87-1741, decided 18 January 1990, read part by part, plus the two UPI wire stories of 4 June 1986 and three later retellings. It contradicts the popular telling twice over: the four million dollar award was vacated as so grossly excessive that it shocks the conscience, and the copyright claim in the case was his counterclaim against her, which failed on proof of copying rather than on any finding about authorship. No court in this record decided who painted the pictures, and the course says so. The opinion text was read from a commercial database's reproduction rather than a court source, so every quotation is flagged for checking as the first research check, and the course tells the learner that in lesson 15 rather than only in a comment.",
//   });
//
// WHY "Civics" IS THE ADDITIONAL CATEGORY. Three of the four sections teach how a federal appeal
// works: seven standards of review quoted from one document, preservation and waiver, the difference
// between finality and precedent, and what an unpublished disposition is. That is civics taught
// from a primary source, and `reporter-media-law` (Research & Reporting), which this course links
// to twice and never re-teaches, is the natural neighbour for a learner who wants the doctrine.
// "Research & Reporting" would be a defensible SECOND addition, on the strength of Section 4's
// three-question score for measuring an account against a record, and I left it off because two
// additions for a four-section course reads as shelf-filling. Add it if BAM prefers.
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `painted-in-court` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block with a
//    locator, and the D5a tiers above say which entries may be hosted. The answer is none of them
//    today, and the memorandum becomes hostable the moment research check A is closed.
//  - RESEARCH CHECKS: the eight above, A to H. A is the one that matters: the whole course quotes a
//    third party's reproduction of a federal opinion.
//  - STANDARDS: a primary-source history and civics course (sourcing, corroboration, claim versus
//    evidence, reading a legal document, distinguishing a holding from a description), so per the
//    repo rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is
//    mapped it needs a BACKLOG line in scripts/check-standards-coverage.ts or `pnpm lint` fails.
//  - SERIES: seriesOrder 16, per BAM's instruction for this build. In this checkout orders 9 to 14
//    are taken and 15 is unoccupied, so 15 is presumably claimed by a course written in parallel.
//    Confirm before seeding; a collision is an insert-only field to get wrong.
//  - VISIBILITY: private, insert-only. The price, priceType, visibility and publishHoldReason above
//    must be right on the FIRST seed, because a re-seed never rewrites them.
//  - GUARDS: check-em-dashes, check-longest-option, check-quiz-balance, check-reveals,
//    check-recall-placement and check-assessment-fit all read `git ls-files`, so they skip this file
//    while it is untracked. It was measured directly with the same constants and the same
//    arithmetic, and the numbers are in the handoff. Re-run the real guards once it is tracked.
//  - DOCS (D8): README and src/lib/roadmap.ts still need the new private course added.
