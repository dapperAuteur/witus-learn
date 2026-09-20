import type { AuthoredCourse } from "./authored-course";

// "Who May Teach: Emmy Noether, the Habilitation, and a Line in the Course Catalogue"
// (Culture & History; additional: Science & Math). Slug to be registered: `who-may-teach`.
// PRIVATE, free, and carrying NO series code: BAM decided on 2026-09-19 that private courses do not
// carry CREDIT codes at all. Every `sourceLessonSlug` below is course-internal, so the registered
// slug does not affect them.
//
// BRIEF: plans/future-courses/uncredited/2026-09-18-emmy-noether-brief.md, APPROVED by BAM on
// 2026-09-19. Research tier 0 (history, not health, law or money). Rubric v1.1: gates pass;
// B 3/3/3/3/3/3 = 36; form C6, course.
//
// THE SPINE, and it must not be flattened into "Hilbert put his name on her lectures":
// From WS 1916/17 to SS 1919 the Göttingen course catalogue announced seven courses as given by
// "Prof. Hilbert mit Unterstützung von Frl. Dr. E. Nöther". She taught them. She could not be named
// as their teacher because a Prussian ministry decree of 29 May 1908 barred women from the
// habilitation, the qualification that carried the venia legendi. This is a PERMISSION RULE, not a
// theft: nobody in this record claims her mathematics. The catalogue printed the rule's answer
// rather than the fact, and the index filed the course under the only name it was allowed to file it
// under. The six sections follow the brief: what a habilitation was; the 1915 reports and votes; the
// catalogue as a primary-source exercise; the 1919 third attempt; what she made; and where the
// famous version outruns the record.
//
// THE FOUR CORRECTIONS ARE LOAD-BEARING. plans/83 E-19 is wrong in four places and Section 6 teaches
// each one against the scans and Tollmien, the way `who-gets-named` lesson 17 teaches a gap:
//   1. SIX SEMESTERS (WS 1916/17 to SS 1919), which is three academic years, not "four years". The
//      WS 1915/16 and SS 1916 mathematics listings were read and carry no Noether entry.
//   2. NO 19 NOVEMBER 1915 VOTE in any source read. The record has 29 October, 6, 10 and 18 November
//      1915, and MacTutor has no November 1915 date at all. What blocked her was the 1908 decree, the
//      curator's negative cover note of 9 December 1915, and the minister's refusal of 5 Nov 1917.
//   3. THE MINISTRY, NOT THE ACADEMIC SENATE. Neither Tollmien nor Ihringer mentions a senate.
//   4. "GRATIS" IS A FEE CATEGORY printed on many professors' seminars on the same pages, not proof
//      she was unpaid. One of her own entries (WS 1918/19, no. 166) reads "privatim" instead.
//
// THE HILBERT "SWIMMING POOL" REMARK is taught as contested, with both positions named: the
// University of Göttingen's own page calls it "vielleicht nicht verbürgt" while Ihringer says Hilbert
// "almost surely said" it. The exact German wording is UNVERIFIED and is NOT printed anywhere here.
//
// IMAGES: the GDZ scans are free to read and are LINKED, never reproduced. The GDZ PDF cover carries
// SUB Göttingen's terms: "Publication and/or broadcast in any form (including electronic) requires
// prior written permission from the Goettingen State- and University Library." We do not have that
// permission, so Section 3 transcribes and links, and says so in the lesson, because the reason is
// itself worth a learner knowing.
//
// FETCH-OR-DO-NOT-CITE. Everything asserted below was read on a source fetched for the brief on
// 2026-09-18:
//  - Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen, digitised by SUB
//    Göttingen (GDZ), series PPN654655340, shelfmark "4 HLP IV, 34/2:1911-1920/21". Page images read
//    through the library's IIIF server for WS 1915/16, SS 1916, WS 1916/17 (incl. the staff index),
//    SS 1917, WS 1917/18, SS 1918, WS 1918/19 and SS 1919.
//  - Cordula Tollmien, emmy-noether.net: /Goettingen-1915-bis-1919/Habilitation/ and
//    /Noethers-Vorlesungen/. The documentary account of the archive files.
//  - Ferdinand Ihringer, "Emmy Noether's Habilitation" (1 June 2019), math.ihringer.org PDF: an
//    English translation of parts of Tollmien, used here for English wording only.
//  - University of Göttingen, "Historische Persönlichkeiten Göttingens in der Mathematik".
//  - MacTutor, "Emmy Noether".
//
// CLAIMS DELIBERATELY NOT MADE (each has a proposed research check at the foot of this file):
//  - That "Invariante Variationsprobleme" (1918) served as her habilitation thesis. The brief's
//    outline says so; none of the sources read states it in those words, so lesson 16 teaches the
//    dates and the gap between them instead of asserting the link.
//  - What "privatissime" meant in this catalogue. No source read defines the Göttingen fee words, so
//    the course teaches only what it can show: "gratis" appears on many professors' courses on the
//    same pages, and one Noether entry reads "privatim" instead.
//  - Whether Noether was paid anything for the 1916 to 1919 teaching.
//  - What changed at the ministry between the refusal of 5 November 1917 and the "no objection" of
//    8 May 1919.
//  - The famous quotation about returning soldiers. Not printed. Ihringer has only a paraphrase of
//    one named referee's written report, and that is what lesson 6 teaches.
//
// House style, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific terms; APA 7 `## Sources`;
// one quiz per teaching section (pool sized to audit-course's density target, 50 to 78, serving 5,
// passing 80, shuffled) plus a final pooling 43 and serving 10, placed LAST; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specifically wrong, so check-longest-option
// passes by construction. No em dashes in user-visible copy: the printer's long dash in the
// catalogue hours survives only inside blockquoted verbatim transcriptions, which is exactly the
// exception check-em-dashes.ts protects.
export const WHO_MAY_TEACH_COURSE: AuthoredCourse = {
  title: "Who May Teach: Emmy Noether, the Habilitation, and a Line in the Course Catalogue",
  description:
    "For six semesters, from the winter of 1916 to the summer of 1919, the University of Göttingen's printed course catalogue announced mathematics courses as given by \"Prof. Hilbert mit Unterstützung von Frl. Dr. E. Nöther\": Professor Hilbert, with the support of Miss Dr. Noether. Emmy Noether taught them. She could not be named as their teacher, because a Prussian ministry decree of 29 May 1908 barred women from the habilitation, the qualification that carried the right to lecture. In the same catalogue's index of teaching staff, the course is filed under Hilbert and Noether has no entry at all, on pages that do list the university's dance master and its drawing teacher. This course reads the record that survives: the decree, the eight referee reports of 1915, the tallies of three faculty meetings, a curator's negative cover note, a minister's refusal, Einstein's letter calling it a great injustice, and the seven catalogue entries themselves, which are digitised and free for anyone to open and check. It is a course about a permission rule rather than a theft. Nobody in this record claims Noether's mathematics as his own; a rule decided who was allowed to be printed as the teacher, and the catalogue printed the rule's answer instead of the fact. The last section does the harder job: it takes the popular version of this story apart in four places, including the date of a vote that never happened and a Latin fee word that has been read as proof of something it cannot prove, and it shows what a learner can settle by going back to the scan.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The permission to teach
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-right-to-be-named",
      title: "1 · The qualification that carried the right to teach",
      section: "Section 1 · The permission to teach",
      body: `Every semester the University of Göttingen printed a catalogue of its courses. Each entry gave the subject, the teacher, the days and the hours, and a fee word. It was an ordinary administrative document of the kind every university produced, and it is the reason this course exists, because for six semesters it announced courses that Emmy Noether taught under somebody else's name.

**The rule behind the line.** In Prussia a doctorate did not entitle anyone to be named as the teacher of a university course. That took a second step, the **habilitation**, and what the habilitation carried was the **venia legendi**, the permission to lecture. A person admitted on it became a **Privatdozent**: a lecturer who could be announced in the catalogue in their own name.

Both halves of that sentence can be read in the documents of this case. When Albert Einstein wrote to Felix Klein about Noether on 27 December 1918, he named precisely the thing being withheld: "Beim Empfang der neuen Arbeit von Frl. Noether empfinde ich es wieder als grosse Ungerechtigkeit, dass man ihr die Venia legendi vorenthält" (Tollmien, n.d.-a). On receiving Miss Noether's new work, he felt again that it was a great injustice that the venia legendi was being withheld from her. And when the university finally admitted her, after a trial lecture in June 1919, Tollmien's account of the file records the outcome in the same vocabulary: she was "einstimmig als Privatdozentin für Mathematik zugelassen", unanimously admitted as a Privatdozentin for mathematics (Tollmien, n.d.-a).

**Why a permission rule is its own mechanism.** Most stories about credit are stories about somebody taking something. This one is not, and flattening it into one costs you the whole point. Nobody in this record claims Noether's mathematics as his own. David Hilbert, whose name is printed on the catalogue line, wrote to the minister on her behalf and went to see him in person. What happened instead is that a rule decided who was allowed to be printed as the teacher, and the catalogue printed the rule's answer rather than the fact.

*Who Gets Named*, lesson 17, gives the test that makes a gap like this usable. Ask what would have had to happen for this record to exist. If the answer is that somebody would have had to be permitted to sign it, then the gap is evidence about a permission rule, and permission rules are written down somewhere else. This course is that sentence with the documents attached.

**The person, in one line for now.** Emmy Noether was born in Erlangen on 23 March 1882 (Ihringer, 2019). Everything else about her arrives in this course as evidence, on a date, from a document.

:::reveal What did the habilitation carry, and what was a person called who had been admitted on it? ||| The venia legendi, the permission to lecture. Someone admitted on it became a Privatdozent, and could be announced in the catalogue under their own name.

:::reveal Why is this a story about a permission rule rather than a theft? ||| Nobody in the record claims Noether's mathematics as his own. Hilbert, whose name is on the catalogue line, petitioned the minister for her. A rule decided who could be printed as the teacher, and the catalogue printed the rule's answer.

:::reveal What test from Who Gets Named lesson 17 turns a gap in a record into a finding? ||| Ask what would have had to happen for this record to exist. If somebody would have had to be permitted to sign it, the gap is evidence about a permission rule, which is documented elsewhere.

## Vocabulary
- **Habilitation**: the qualification, taken after the doctorate, that a German university required before a person could be admitted to lecture in their own name.
- **Venia legendi**: the permission to lecture, the thing the habilitation carried, and the exact phrase Einstein used in December 1918 for what was being withheld from Noether.
- **Privatdozent**: a lecturer admitted on the venia legendi, who could be announced in the course catalogue as the teacher of a course.
- **Course catalogue** (*Verzeichnis der Vorlesungen*): the printed list of a semester's courses, with the teacher, the days and hours, and a fee word for each.
- **Permission rule**: this course's name for a credit mechanism in which nothing is taken, because a rule decides in advance who may be named.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-decree-of-1908",
      title: "2 · The decree of 29 May 1908",
      section: "Section 1 · The permission to teach",
      body: `The rule that shaped the next eleven years of this story has a date on it.

**1907: the survey.** The Prussian ministry responsible for the universities asked the professors what they thought about admitting women to the habilitation (Tollmien, n.d.-a).

**29 May 1908: the decree.** The ministry then issued a decree that women could not habilitate at Prussian universities (Tollmien, n.d.-a). One document, one date, one sentence, and it settled in advance every argument any faculty could later have about any particular woman.

**Three things follow, and each one matters later.**

First, **it was not a Göttingen rule and not a mathematics rule**. It was a ministry decree binding on Prussian universities generally. That is why the request the Göttingen mathematicians eventually made was not a decision they could take themselves: they had to ask the ministry for an **exemption**, an *Ausnahme* from a rule the ministry owned.

Second, **the body that made the rule was the body that could waive it**. Keep that in view, because the popular version of this story says an academic senate refused Noether because she was a woman. Neither Tollmien's documentary account nor Ihringer's translation of it mentions a senate at all. The department asked the ministry; the ministry refused. Section 6 comes back to this as the third of four corrections.

Third, **the decree governed being named, not being able**. It did not say that a woman could not do mathematics, or teach it, or publish it, or stand in front of a room of Göttingen students. What it governed was admission to the habilitation, and therefore who could be printed in the catalogue as a course's teacher. That distinction is the whole reason the catalogue entries in Section 3 exist in the form they do: the teaching happened, and the printed line could not say who was doing it.

**What a rule like this does to a record.** A decree of this shape is unusually easy to check and unusually easy to misread. Easy to check, because it is dated, written down and applied to a whole system, so its effects show up as a pattern rather than as one person's bad luck. Easy to misread, because its effects look exactly like an individual absence: a name that is simply not in an index, with nothing beside it to say why. A reader who finds the gap and not the decree will reach for a motive. A reader who has both can say something stronger and narrower, which is that the record is complete and the rule is what it recorded.

**How long it held.** Tollmien records three attempts at Noether's habilitation, and a process that ran from July 1915 to May and June of 1919 (Tollmien, n.d.-a). The 1908 decree is the fixed point all three attempts ran into.

:::reveal What did the Prussian ministry decree on 29 May 1908, and what preceded it? ||| That women could not habilitate at Prussian universities. It followed a 1907 ministry survey of the professors.

:::reveal Why could the Göttingen mathematicians not simply admit Noether themselves? ||| The bar was a ministry decree binding on Prussian universities, not a local rule, so the faculty could only ask the ministry for an exemption from it.

:::reveal What did the 1908 decree govern, and what did it not govern? ||| It governed admission to the habilitation, and so who could be printed as a course's teacher. It did not govern whether a woman could do, teach or publish mathematics.

## Vocabulary
- **Decree of 29 May 1908**: the Prussian ministry order barring women from the habilitation, issued after a survey of professors in 1907.
- **Exemption** (*Ausnahme*): a waiver of the decree in one case, which only the ministry that made the decree could grant.
- **Ministry**: the Prussian state body that owned the rule and answered the request, as distinct from the university's own faculty or any senate.
- **System-wide rule**: a bar that applies to every case in advance, so its effects appear as a pattern in many records rather than as one person's absence from one record.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "july-1915-the-application",
      title: "3 · July 1915: the talk and the application",
      section: "Section 1 · The permission to teach",
      body: `The first attempt begins with two dates a week apart.

**13 July 1915.** Noether gave a talk to the Göttingen Mathematical Society (Tollmien, n.d.-a).

**20 July 1915.** She applied to habilitate. Tollmien's account of the file records the reason she gave for applying at all: "Auf Anregung von Klein und Hilbert", at the suggestion of Klein and Hilbert (Tollmien, n.d.-a). Two of the most powerful mathematicians in Germany had asked her to make an application that a ministry decree had already forbidden.

**What an application set in motion.** A habilitation was not a single decision. It was a procedure with stages, and each stage produced paper with a date on it. In this case the stages were, in order: written reports from referees; a vote by a commission; a vote by the mathematics and science department; a demand from the other department for a vote of the whole faculty; that faculty vote; a written application to the ministry; and the forwarding of that application by the university's curator, who added a cover note of his own.

That chain is the reason this story can be checked at all. It is also the reason it is so often told wrong. A procedure with seven dated stages gets compressed in the retelling into one dramatic moment, usually a single meeting at which somebody says something outrageous and a woman is refused. The record does contain something outrageous, in writing, from seven named faculty members, and Section 2 quotes it. But it is not the moment the decision was taken, and reading it as the decision is how the popular version ends up with a date that is not in any source.

**A habit worth forming now.** When you meet a claim about this case, or about any case like it, ask three questions before you believe it. Which stage of the procedure is this claim about? What is the document that records that stage? And what is its date? A claim that cannot answer all three is not necessarily false, but it is a claim you are carrying on trust rather than on evidence, and you should know which one you are doing.

**Where the first attempt went.** It ran through every stage above during the autumn of 1915, reached the ministry, and failed. The refusal that ended it is dated 5 November 1917, more than two years after the application. In between, in the winter of 1916, Noether started teaching the courses this course is named for.

:::reveal What two dates open the first habilitation attempt, and what happened on each? ||| 13 July 1915, a talk to the Göttingen Mathematical Society, and 20 July 1915, her written application to habilitate.

:::reveal What reason for applying does Tollmien's account of the file record? ||| That she applied "Auf Anregung von Klein und Hilbert", at the suggestion of Klein and Hilbert.

:::reveal What three questions should you ask of any claim about this case before believing it? ||| Which stage of the procedure it is about, which document records that stage, and what that document's date is.

## Vocabulary
- **Göttingen Mathematical Society**: the mathematical body Noether addressed on 13 July 1915, a week before applying to habilitate.
- **Referee report** (*Gutachten*): a written assessment of a candidate by a named professor, the first paper stage of a habilitation.
- **Curator**: the university officer who forwarded the faculty's request to the ministry, and who could attach his own comment to it.
- **Compression**: the way a retelling shrinks a procedure of many dated stages into one dramatic meeting, which is how a date that is in no document gets into a story.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The permission to teach",
      section: "Section 1 · The permission to teach",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the habilitation carry?",
            options: [
              "The venia legendi",
              "A salaried chair in the faculty, awarded by the Prussian ministry on the faculty's nomination",
              "The doctorate, which a candidate took before being allowed to enrol as a student of mathematics",
              "A seat on the academic senate, from which a lecturer voted on other candidates' applications",
            ],
            correctIndex: 0,
            explanation:
              "The venia legendi was the permission to lecture. It is the exact phrase Einstein used in December 1918 for the thing being withheld from Noether, and the reason a doctorate alone was not enough to be named as a course's teacher.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What was a person called who had been admitted on the venia legendi?",
            options: [
              "A Privatdozent",
              "A Geheimer Regierungsrat, the title printed beside Hilbert's own name in the 1916 staff index",
              "A Kurator, the university officer who forwarded faculty requests on to the Prussian ministry",
              "An außerordentlicher Professor, the title Noether was given in 1922 with no salary attached",
            ],
            correctIndex: 0,
            explanation:
              "A Privatdozent could be announced in the catalogue as a course's own teacher. Tollmien's account of the 1919 file uses the feminine form of exactly this word for Noether's admission.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "Who wrote to Felix Klein on 27 December 1918 that withholding the venia legendi from Noether was a great injustice?",
            options: [
              "Albert Einstein",
              "Constantin Carathéodory, repeating in a letter the report he had written in August 1915",
              "Ernst Osterath, the curator who had forwarded the 1915 application with a negative comment",
              "Edmund Landau, who as dean had chaired the faculty meeting of 18 November 1915",
            ],
            correctIndex: 0,
            explanation:
              "Einstein to Klein, 27 December 1918: on receiving Miss Noether's new work he felt again that it was a great injustice that the venia legendi was being withheld from her.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What does Einstein's phrase \"dass man ihr die Venia legendi vorenthält\" say is happening?",
            options: [
              "The venia legendi is being withheld from her",
              "That the venia legendi had been granted to her on condition that she teach without any payment",
              "That the venia legendi had been transferred from her to Hilbert by order of the Prussian ministry",
              "That the venia legendi had ceased to exist as a qualification at Prussian universities after 1908",
            ],
            correctIndex: 0,
            explanation:
              "Vorenthalten is to withhold. The sentence names the thing and the act, which is why it is the cleanest one-line statement in the whole record of what this case was actually about.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "How does Tollmien's account of the file record the outcome of June 1919?",
            options: [
              "Unanimously admitted as a Privatdozentin",
              "Admitted by a majority of one after the faculty divided seventeen to fourteen on the question",
              "Admitted provisionally, subject to a further trial lecture to be given the following semester",
              "Admitted to a salaried chair in mathematics on the joint recommendation of Klein and Hilbert",
            ],
            correctIndex: 0,
            explanation:
              "The German is \"einstimmig als Privatdozentin für Mathematik zugelassen\". The unanimity matters: the same faculty that had divided in 1915 did not divide in 1919.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "Why does this course say the Noether case is not an example of credit being taken?",
            options: [
              "Nobody in the record claims her mathematics",
              "Because Hilbert published the lectures afterwards under a joint author line naming them both",
              "Because the catalogue printed her name in smaller type beside his rather than omitting it",
              "Because the ministry paid her the fees collected from students for the courses she taught",
            ],
            correctIndex: 0,
            explanation:
              "The mechanism is a permission rule, not a theft. A rule decided who could be printed as the teacher, and the catalogue printed the rule's answer rather than the fact.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "According to the record, what did Hilbert do on Noether's behalf?",
            options: [
              "Wrote to the minister and met him in person",
              "Resigned his own chair in protest when the ministry refused the exemption in November 1917",
              "Printed a correction in the following semester's catalogue naming her as the course's teacher",
              "Voted against his own faculty's request in order to force a second vote of the whole faculty",
            ],
            correctIndex: 0,
            explanation:
              "He wrote to the minister in December 1915 and later went to see him together with Debye and Voigt. That is why the case cannot be told as Hilbert taking anything from her.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What question does Who Gets Named lesson 17 ask of a gap in a record?",
            options: [
              "What would have had to happen for this record to exist?",
              "How many comparable records from the same institution and period have survived elsewhere?",
              "Which archivist decided which papers the institution would accession, and in which year?",
              "Would a reader in the period have expected to find this person named in this document?",
            ],
            correctIndex: 0,
            explanation:
              "The question turns an absence into evidence. It forces you to name the condition the record depended on, and conditions like permission rules are written down somewhere you can go and read.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "If the answer to that question is that somebody would have had to be permitted to sign it, what is the gap evidence about?",
            options: [
              "A permission rule",
              "The good faith of the archivists who assembled and catalogued the collection in the first place",
              "Whether the work the record describes was ever actually carried out by anybody at all",
              "The number of comparable records destroyed in the same institution during the same period",
            ],
            correctIndex: 0,
            explanation:
              "And permission rules are documented elsewhere. In this case the rule is the Prussian decree of 29 May 1908, which you can date, quote and check independently of the catalogue.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "Where and when was Emmy Noether born?",
            options: [
              "Erlangen, 23 March 1882",
              "Göttingen, on 23 March 1882, in the city where she would later be refused the habilitation",
              "Erlangen, on 29 May 1908, the day the Prussian decree on women and the habilitation issued",
              "Erlangen, on 14 April 1882, the day and month on which she would die fifty-three years later",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer's translation gives 23 March 1882 at Erlangen. She died on 14 April 1935, which is where the 14 April date among the wrong answers comes from.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What did each entry in the Göttingen course catalogue give?",
            options: [
              "Subject, teacher, days and hours, and a fee word",
              "Subject, teacher, the room number, and the number of students enrolled in the previous term",
              "Subject, teacher, the faculty it belonged to, and the examination it prepared candidates for",
              "Subject, teacher, the textbook set for the course, and the fee payable to the university chest",
            ],
            correctIndex: 0,
            explanation:
              "Those four fields are the whole format, and the fee word is the one that has caused the most trouble in retellings of this story. Section 3 reads an entry field by field.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "For how long did the catalogue announce courses Noether taught under another name?",
            options: [
              "Six semesters",
              "Four full academic years, running from the winter of 1915/16 to the summer semester of 1919",
              "Two semesters, the winter of 1916/17 and the summer of 1917, after which she taught in her own name",
              "Eight semesters, ending when the Prussian ministry granted the exemption in November 1917",
            ],
            correctIndex: 0,
            explanation:
              "Six semesters, from the winter of 1916/17 to the summer of 1919, which is three academic years. The four-year version is the first of the four corrections in Section 6.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "Whose name was printed as the teacher of the courses Noether taught between 1916 and 1919?",
            options: [
              "Hilbert's",
              "Klein's, because it was Klein who had suggested that she apply to habilitate in July 1915",
              "Landau's, because Landau was the dean who chaired the faculty meeting of 18 November 1915",
              "Carathéodory's, because his report of August 1915 had called her a singular phenomenon",
            ],
            correctIndex: 0,
            explanation:
              "The entries read \"Prof. Hilbert mit Unterstützung von Frl. Dr. E. Nöther\", with Hilbert as the named teacher and Noether as support.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What does this course mean by a permission rule?",
            options: [
              "A rule deciding in advance who may be named",
              "An institution's practice of asking each contributor whether they wish to be credited by name",
              "A journal's policy on the order in which the authors of a joint paper are listed on it",
              "A rule requiring a named supervisor to approve any work published by a junior colleague",
            ],
            correctIndex: 0,
            explanation:
              "It is a credit mechanism in which nothing is taken, because the naming is settled before anyone does any work. That is what makes it different from the mechanisms built on attribution after the fact.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "In what year did the Prussian ministry survey professors about admitting women to the habilitation?",
            options: [
              "1907",
              "1915, in the weeks after Noether's application reached the faculty at Göttingen in July",
              "1918, in the weeks after Einstein wrote to Klein about the withholding of the venia legendi",
              "1908, in the months after the decree itself had already been issued on 29 May of that year",
            ],
            correctIndex: 0,
            explanation:
              "The survey came in 1907 and the decree followed on 29 May 1908. The order matters: the ministry asked, then ruled, and the ruling then bound every later case.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What is the date of the Prussian decree barring women from the habilitation?",
            options: [
              "29 May 1908",
              "19 November 1915, the date the popular version gives for a special departmental vote",
              "5 November 1917, the date the minister wrote refusing to authorise any exemptions",
              "29 October 1915, the date the faculty commission voted to seek an exemption for Noether",
            ],
            correctIndex: 0,
            explanation:
              "29 May 1908, after the 1907 survey. The other three dates are all real dates in this case, which is exactly why they are easy to swap in by mistake.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What did the decree of 29 May 1908 say?",
            options: [
              "Women could not habilitate",
              "Women could habilitate only with the written consent of the university's own academic senate",
              "Women could habilitate in the philosophical faculty but not in mathematics or the sciences",
              "Women could lecture at a Prussian university only as the named assistant of a full professor",
            ],
            correctIndex: 0,
            explanation:
              "The bar was flat. That is why the Göttingen mathematicians could only ask for an exemption from it rather than decide the question themselves.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What was the scope of the 1908 decree?",
            options: [
              "Prussian universities",
              "Göttingen alone, which is why Noether's supporters urged her to try at Frankfurt instead",
              "The mathematics and science departments only, leaving the other faculties free to decide",
              "Every German university, inside Prussia and outside it, from the date of its publication",
            ],
            correctIndex: 0,
            explanation:
              "It was a Prussian ministry decree binding on Prussian universities. That scope is what made it a pattern rather than one faculty's prejudice, and what put the decision in the ministry's hands.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What could a faculty do about a candidate the 1908 decree barred?",
            options: [
              "Ask the ministry for an exemption",
              "Admit her locally and inform the ministry afterwards, as several faculties are recorded doing",
              "Appeal to the academic senate, which held the power to set aside a ministry decree in one case",
              "Register her as a Privatdozentin at a second university where the decree did not apply",
            ],
            correctIndex: 0,
            explanation:
              "An Ausnahme, an exemption in the particular case. The Göttingen faculty drafted exactly that request in November 1915 and the ministry refused it in November 1917.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "Which body could waive the 1908 decree?",
            options: [
              "The ministry that made it",
              "The academic senate of the university at which the candidate had made her application",
              "The faculty commission, by a unanimous vote of all eight of the candidate's referees",
              "The curator, acting at the university as the Prussian ministry's own representative",
            ],
            correctIndex: 0,
            explanation:
              "The body that owned the rule was the body that could set it aside. Keeping that straight is what defeats the popular version's claim that a senate refused her.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "The popular version says an academic senate refused Noether. What do the sources read for this course show?",
            options: [
              "Neither Tollmien nor Ihringer mentions a senate",
              "Tollmien quotes the senate's minutes at length in her account of the surviving archive file",
              "Ihringer names the senate members who voted against her in the session of November 1915",
              "Both sources record the senate's refusal but disagree about the month in which it was given",
            ],
            correctIndex: 0,
            explanation:
              "The department asked the ministry and the ministry refused. No senate appears in either account, which is the third of the four corrections in Section 6.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What did the 1908 decree not govern?",
            options: [
              "Doing, teaching or publishing mathematics",
              "Admission to the habilitation at any of the universities of the Kingdom of Prussia",
              "Whether a woman's name could be printed in the catalogue as a course's own teacher",
              "Whether a woman could be admitted to the venia legendi without a ministry exemption",
            ],
            correctIndex: 0,
            explanation:
              "It governed being named, not being able. Noether taught the courses; the printed line simply could not say so, and that gap is the whole subject of Section 3.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "Why does a system-wide rule leave a pattern rather than a single absence?",
            options: [
              "It applies to every case in advance",
              "Because ministries kept duplicate copies of every decree in the archive of each university",
              "Because a faculty had to record in its minutes each occasion on which the rule was applied",
              "Because the rule took effect only once a named official had invoked it against a candidate",
            ],
            correctIndex: 0,
            explanation:
              "A rule that binds a whole system produces the same shaped gap in many records at once. That repetition is what makes it checkable, and what stops a reader mistaking it for one person's bad luck.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "Why is the effect of such a rule easy to misread if you have not found the rule itself?",
            options: [
              "It looks like one person's absence",
              "Because a decree is usually written in language too technical for a general reader to follow",
              "Because the rule's text is normally filed with the ministry rather than with the university",
              "Because the same absence could equally have been produced by a fire or a lost box of papers",
            ],
            correctIndex: 0,
            explanation:
              "A missing index entry with nothing beside it invites a reader to supply a motive. Finding the decree lets you say something narrower and stronger: the record is complete, and the rule is what it recorded.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "How many attempts at Noether's habilitation does Tollmien record?",
            options: [
              "Three",
              "One, made in the summer of 1915, which the Prussian ministry refused two years later",
              "Two, one in July 1915 and one in January 1919, with nothing at all attempted in between",
              "Five, one in each of the years from 1915 through to 1919, each with its own faculty vote",
            ],
            correctIndex: 0,
            explanation:
              "Three attempts, with the process running from July 1915 to May and June of 1919. The third is the one that succeeded.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "Over roughly what period did the habilitation process run?",
            options: [
              "1915 to 1919",
              "From the ministry's survey of the professors in 1907 to the decree of 29 May 1908",
              "From the first catalogue entry in the winter of 1916/17 to the last one in the summer of 1919",
              "From Hilbert's letter to the minister in December 1915 to the refusal of November 1917",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien dates the process from July 1915 to May and June 1919. The other spans are all real spans inside the story, but none of them is the process itself.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What is the fixed point that all three habilitation attempts ran into?",
            options: [
              "The 1908 decree",
              "Hartmann's referee report, the only one of the eight to speak decidedly against her",
              "The faculty's tied vote of fourteen to fourteen at the meeting of 18 November 1915",
              "The curator's cover note, which the ministry treated as the university's real position",
            ],
            correctIndex: 0,
            explanation:
              "Everything else in the case is a stage in a procedure. The decree is the standing rule the procedure kept colliding with, and only the ministry could move it.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What did Noether do on 13 July 1915?",
            options: [
              "Spoke to the Göttingen Mathematical Society",
              "Submitted her written application to habilitate to the philosophical faculty at Göttingen",
              "Gave the trial lecture on questions of module theory that completed her habilitation",
              "Wrote to the Prussian minister asking for an exemption from the decree of 29 May 1908",
            ],
            correctIndex: 0,
            explanation:
              "The talk came a week before the application of 20 July 1915. The trial lecture on module theory is real, but it belongs to 4 June 1919, nearly four years later.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What is the date of Noether's first application to habilitate?",
            options: [
              "20 July 1915",
              "13 July 1915, the same day on which she addressed the Göttingen Mathematical Society",
              "26 November 1915, the date written on the faculty's request to the Prussian ministry",
              "18 January 1919, the date of the application that finally led to her admission",
            ],
            correctIndex: 0,
            explanation:
              "20 July 1915. The other two 1915 dates and the 1919 date are all real dates in this case, which is why they make good distractors and bad memories.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What reason for applying does Tollmien's account of the file record?",
            options: [
              "Klein and Hilbert suggested it",
              "That she had been offered a post at Frankfurt and wished to keep her position at Göttingen",
              "That the ministry had privately indicated it would look favourably on a first test case",
              "That her father's illness had left the family dependent on what she could earn by lecturing",
            ],
            correctIndex: 0,
            explanation:
              "The file says \"Auf Anregung von Klein und Hilbert\". Two of the most powerful mathematicians in Germany asked her to make an application a ministry decree had already forbidden.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "Which stage of a habilitation came first?",
            options: [
              "Written reports from referees",
              "A vote of the whole faculty, which then referred the case to its specialist commission",
              "The trial lecture, on which the referees based the written reports they then submitted",
              "The curator's cover note, which opened the file the faculty afterwards deliberated on",
            ],
            correctIndex: 0,
            explanation:
              "Reports, then the commission, then the department, then the faculty, then the written request, then the curator's forwarding of it. Each stage produced paper with a date on it.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "Which officer forwarded the faculty's request to the ministry?",
            options: [
              "The curator",
              "The dean of the philosophical faculty, who signed it on the faculty's behalf",
              "The chair of the commission that had voted to seek the exemption in October 1915",
              "The rector, who transmitted all faculty business to the ministry through the senate",
            ],
            correctIndex: 0,
            explanation:
              "The curator forwarded it, and he could attach a comment of his own on the way past. In this case he did, and Section 2 reads what it did to the request.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What followed the mathematics and science department's own vote?",
            options: [
              "A demand for a vote of the whole faculty",
              "The immediate despatch of the request to the ministry over the dean's own signature",
              "A second round of referee reports, this time from outside the University of Göttingen",
              "A public defence of the candidate's thesis before the assembled philosophical faculty",
            ],
            correctIndex: 0,
            explanation:
              "The other department demanded that the whole faculty vote, which is the stage that produced the tallies Section 2 reads. Knowing it exists is what stops you compressing the story into a single meeting.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "Why can this story be checked at all?",
            options: [
              "Each stage produced dated paper",
              "Because the University of Göttingen published the faculty's minutes in the course catalogue",
              "Because the ministry's decrees were printed annually and distributed to every faculty member",
              "Because the candidate was entitled to a written copy of every document filed in her case",
            ],
            correctIndex: 0,
            explanation:
              "A procedure with several dated stages leaves a trail, and a trail can be walked. That is also why compressing the stages is the commonest way of getting the story wrong.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "How does a retelling of a case like this typically go wrong?",
            options: [
              "It compresses the stages into one meeting",
              "It attributes the decision to the candidate's own supervisor rather than to the faculty",
              "It quotes the referee reports accurately but leaves out the names of the men who wrote them",
              "It gives the correct sequence of stages but assigns each of them to the following year",
            ],
            correctIndex: 0,
            explanation:
              "Seven dated stages become one dramatic scene in which somebody says something outrageous and a woman is refused. That compression is how a date that is in no document gets into a story.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What three questions does lesson 3 tell you to ask of a claim about this case?",
            options: [
              "Which stage, which document, what date",
              "Who benefits from the claim, who first published it, and who has repeated it since then",
              "Whether it is plausible, whether it is flattering, and whether it contradicts another source",
              "Which archive holds the paper, who catalogued it, and whether the catalogue is online",
            ],
            correctIndex: 0,
            explanation:
              "Stage, document, date. A claim that cannot answer all three is not necessarily false, but you are carrying it on trust rather than on evidence.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What follows if a claim cannot answer those three questions?",
            options: [
              "You are carrying it on trust, not evidence",
              "The claim can be treated as refuted until somebody produces a document that supports it",
              "The claim should be repeated with a hedge such as \"it is said\" and left in the account",
              "The claim is probably a compression of two separate true claims about different stages",
            ],
            correctIndex: 0,
            explanation:
              "Unanswerable is not the same as false. The discipline is to know which of the two things you are doing, so that a trusted claim never gets quietly promoted into an evidenced one.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What date ended the first habilitation attempt?",
            options: [
              "5 November 1917",
              "9 December 1915, when the curator forwarded the request with a negative comment attached",
              "18 November 1915, when the whole faculty voted and then tied on the question of a refusal",
              "20 June 1917, when the ministry wrote to Göttingen about the offer from Frankfurt",
            ],
            correctIndex: 0,
            explanation:
              "The minister's refusal is dated 5 November 1917. The other three dates are real stages on the way to it, and none of them is the end of the attempt.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "How long after the application of July 1915 did the refusal arrive?",
            options: [
              "More than two years",
              "Four months, which is why the popular version places the whole affair inside 1915",
              "Six months, immediately after the curator forwarded the request in December 1915",
              "Four years, running from the application of 1915 to the trial lecture of June 1919",
            ],
            correctIndex: 0,
            explanation:
              "July 1915 to November 1917. The long wait is why the catalogue entries begin in the winter of 1916/17, in the middle of an unanswered application.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What did Noether begin doing in the winter of 1916, while the application was still unanswered?",
            options: [
              "Teaching the courses announced under Hilbert's name",
              "Preparing the trial lecture on module theory that she would deliver to the faculty in 1919",
              "Lecturing at Frankfurt, where the Prussian decree of 1908 did not bind the philosophical faculty",
              "Sitting on the faculty commission that had voted in October 1915 to seek her exemption",
            ],
            correctIndex: 0,
            explanation:
              "The first of the seven catalogue entries is the winter semester of 1916/17. The teaching started while the paperwork was still moving, and went on for six semesters.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "How does lesson 1 describe the Göttingen course catalogue as a kind of document?",
            options: [
              "An ordinary administrative document",
              "A ceremonial publication issued once a year to mark the opening of the academic session",
              "A confidential record kept by the faculty and not circulated outside the university",
              "A legal instrument through which the Prussian ministry appointed each semester's teachers",
            ],
            correctIndex: 0,
            explanation:
              "Every university produced one. That is exactly why it is useful evidence: nobody was making a statement about Noether when they set the type.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What does lesson 1 say most stories about credit are about?",
            options: [
              "Somebody taking something",
              "A record that was lost and later reconstructed from correspondence and laboratory notes",
              "A dispute between two claimants that an institution had to settle on the evidence",
              "An award committee that weighed several contributors and chose to name only one",
            ],
            correctIndex: 0,
            explanation:
              "And this one is not, which is why flattening it into a theft costs you the point of the case.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What did a doctorate alone not entitle a person to do in Prussia?",
            options: [
              "Be named as a course's teacher",
              "Publish research in the proceedings of a scientific society without a sponsor",
              "Supervise a seminar in a subject in which they had already been examined",
              "Apply for a salaried chair at any of the Prussian universities in the same faculty",
            ],
            correctIndex: 0,
            explanation:
              "That took the habilitation, and what the habilitation carried was the venia legendi.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What does lesson 1 say the catalogue printed in place of the fact?",
            options: [
              "The rule's answer",
              "The faculty's own preference, which the ministry had declined to overrule that year",
              "A formula agreed between Hilbert and the curator for the duration of the war",
              "The name of the professor who had proposed the seminar to the department",
            ],
            correctIndex: 0,
            explanation:
              "A rule decided who was allowed to be printed as the teacher, and the catalogue recorded that decision faithfully.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "How does lesson 1 introduce Emmy Noether herself?",
            options: [
              "In one line, with a birth date",
              "With a full biographical sketch, so that the documents can be read against her career",
              "Through the reports her referees wrote about her in the summer of 1915 at Göttingen",
              "Through the two theorems that carry her name, which the course then works backwards from",
            ],
            correctIndex: 0,
            explanation:
              "Everything else about her arrives later in the course as evidence: on a date, from a document.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What does this course say is lost when a permission-rule case is retold as a theft?",
            options: [
              "The point of the case",
              "The sympathy a reader would otherwise feel for the person who was not named",
              "The chronology, since a theft has one date and a permission rule has several",
              "The names of the colleagues who supported the application at every stage",
            ],
            correctIndex: 0,
            explanation:
              "Nobody took her mathematics, and the man whose name is on the line petitioned for hers. A theft story has no room for either fact.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What kind of instrument was the 1908 bar on women habilitating?",
            options: [
              "A ministry decree",
              "A statute of the University of Göttingen, adopted by its senate and approved in Berlin",
              "A resolution of the Prussian philosophical faculties, adopted at a joint conference",
              "A clause in the general regulations governing the award of doctorates in Prussia",
            ],
            correctIndex: 0,
            explanation:
              "It came from the ministry, which is why only the ministry could set it aside, and why the popular version's senate is in the wrong building.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What did the 1907 survey ask the professors about?",
            options: [
              "Admitting women to the habilitation",
              "Whether the habilitation should require a trial lecture as well as a written thesis",
              "Whether a Privatdozent should be paid from university funds rather than student fees",
              "Whether the philosophical faculty should be divided into two separate departments",
            ],
            correctIndex: 0,
            explanation:
              "The ministry asked and then ruled. The order is worth remembering, because it makes the decree a considered policy rather than an oversight.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "Why does lesson 2 say a rule of this shape is unusually easy to check?",
            options: [
              "It is dated and applies to a whole system",
              "Because the ministry published the names of everyone refused under it each year",
              "Because a decree could only take effect once a university had adopted it locally",
              "Because its text was reprinted in every course catalogue for the following decade",
            ],
            correctIndex: 0,
            explanation:
              "Its effects show up as a pattern across many records rather than as one person's bad luck, and the rule itself is a document you can go and read.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What does a reader who finds the gap but not the decree reach for?",
            options: [
              "A motive",
              "A second archive, on the assumption that the missing record survives somewhere else",
              "The published transcriptions, which usually supply the detail the original omits",
              "An earlier volume of the same series, where the pattern may begin more clearly",
            ],
            correctIndex: 0,
            explanation:
              "A missing entry with nothing beside it invites an explanation, and the explanation a reader supplies is usually about somebody's feelings rather than somebody's rules.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What can a reader who has both the gap and the decree say?",
            options: [
              "The record is complete, and the rule is what it recorded",
              "That the absence was deliberate and that the faculty intended to conceal her role",
              "That the record was altered afterwards to remove a name that had once been printed",
              "That a second, unpublished list of teaching staff must have existed alongside the index",
            ],
            correctIndex: 0,
            explanation:
              "It is a narrower claim than a motive and a much stronger one, because every part of it can be checked against a document.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What is the German word for the waiver the Göttingen faculty asked the ministry for?",
            options: [
              "Ausnahme",
              "Gutachten, the word used for the written reports the eight referees filed that summer",
              "Venia legendi, the permission to lecture that the habilitation itself conferred",
              "Probevorlesung, the trial lecture that completed a successful habilitation",
            ],
            correctIndex: 0,
            explanation:
              "An exemption in the particular case. The other three words are all real terms from this course, attached to other stages.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "How many stages does lesson 3 list in the habilitation procedure of 1915?",
            options: [
              "Seven",
              "Three, namely the referee reports, the faculty vote, and the ministry's own decision",
              "Two, a faculty stage and a ministry stage, each of which produced a single document",
              "Eleven, one for each dated document that survives in the file Tollmien worked through",
            ],
            correctIndex: 0,
            explanation:
              "Reports, commission, department, demand for a full vote, faculty vote, written application, and the curator's forwarding of it.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "How far apart were the talk to the Mathematical Society and the application?",
            options: [
              "A week",
              "Four months, the talk falling in the spring and the application in the summer of 1915",
              "Two years, the talk preceding the application by the whole of the intervening period",
              "The same day, the application having been submitted immediately after the talk was given",
            ],
            correctIndex: 0,
            explanation:
              "13 July and 20 July 1915. The closeness of the two dates is part of what makes the application look prepared rather than spontaneous.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What does lesson 3 say the record does contain that is genuinely outrageous?",
            options: [
              "A written statement by seven faculty members",
              "A remark made by the curator when he forwarded the request to Berlin that December",
              "A clause of the 1908 decree setting out the ministry's reasons for barring women",
              "A passage in the minister's refusal of 1917 describing the hardship as unavoidable",
            ],
            correctIndex: 0,
            explanation:
              "The minority report, quoted in Section 2. It is in writing and it is signed, and it is still not the moment the decision was taken.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "Where in the procedure does that outrageous document sit?",
            options: [
              "Not at the stage where the decision was taken",
              "At the final stage, immediately before the ministry issued its refusal in November 1917",
              "At the first stage, among the eight referee reports filed in July and August 1915",
              "At the stage the curator controlled, which is why it travelled with the request",
            ],
            correctIndex: 0,
            explanation:
              "Reading it as the decision is exactly the compression this lesson warns about, and it is how a date that is in no document gets into a story.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What word does this course use for shrinking a procedure of many stages into one scene?",
            options: [
              "Compression",
              "Reassembly, the term the course uses for a claim built from real elements in the wrong order",
              "Transcription drift, the term for the changes a document picks up each time it is copied",
              "Format error, the term for mistaking one field of a document for a different field",
            ],
            correctIndex: 0,
            explanation:
              "The other three terms are all real terms from later in this course, and each names a different failure.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "How far did the first attempt get before it failed?",
            options: [
              "To the ministry",
              "To the commission, which declined to recommend that an exemption be sought at all",
              "To the departmental vote, which the other department then refused to accept",
              "To the trial lecture, after which the faculty declined to admit her as a Privatdozentin",
            ],
            correctIndex: 0,
            explanation:
              "It ran through every faculty stage in the autumn of 1915, reached Berlin, and waited there until November 1917.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What is the one thing lesson 2 says the 1908 decree settled in advance?",
            options: [
              "Every argument about any particular woman",
              "Which faculties a woman might be examined in, leaving the habilitation itself open",
              "Which universities in the German empire the ministry's authority extended over",
              "How long a candidate had to wait after the doctorate before applying to habilitate",
            ],
            correctIndex: 0,
            explanation:
              "One document, one date, one sentence. Because it settled the question in principle, no faculty could reopen it for a candidate however good.",
            sourceLessonSlug: "the-decree-of-1908",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Autumn 1915: the reports and the votes
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "eight-reports",
      title: "4 · Eight reports, and the one against",
      section: "Section 2 · Autumn 1915: the reports and the votes",
      body: `The first paper the application produced was a set of written assessments by named professors. Tollmien's account of the file lists eight referees: Hilbert, Klein, Landau, Carathéodory, Runge, Debye, Hartmann and Voigt. Seven of the reports are dated between 21 July and 8 August 1915. Hilbert's carries no date (Tollmien, n.d.-a).

**The count that matters.** Tollmien states it flatly: "Nur Hartmann sprach sich dezidiert gegen die Habilitation Emmy Noethers aus" (Tollmien, n.d.-a). Only Hartmann spoke decidedly against Noether's habilitation. One of eight.

Hold that number against the popular version, in which a faculty of hostile men refuses a brilliant woman. The men who had actually read her work mostly wanted her admitted. What refused her was not the reading.

**How the supporters argued, and what it cost.** Ihringer's English translation of the reports gives two of the friendliest lines in the file. Landau wrote that he considered "Miss Noether one of the few exceptions". Carathéodory wrote that "Miss Noether is a singular phenomenon" (Ihringer, 2019).

Read those twice. Both are praise, and both are built on a concession. An exception argument admits the rule and then asks for one person to be lifted out of it. It is the argument most likely to succeed in a single case and least likely to change anything, because it leaves the rule exactly where it was, now with a precedent for how rarely it should bend. When the ministry finally answered, in 1917, it answered the exception argument on its own terms, and Section 2's last lesson quotes that answer.

**The one against.** Hartmann's report carried a family argument. It also, in Ihringer's paraphrase of it, "continues by pointing out that one should not let women occupy jobs which can be filled with returning soldiers after the war" (Ihringer, 2019).

**Two cautions about that sentence, and they are the reason it is quoted here as a paraphrase.** First, it is Ihringer summarising Hartmann's written report, not a transcription of it. Second, it is one named referee writing in his own report, not a statement by the faculty. The famous quotation you may have met, in which the faculty asks what soldiers returning from the front would think of being taught by a woman, is not in Tollmien's account of the habilitation file and is not in MacTutor. This course does not print it. What the record supports is narrower: a jobs argument, by one man, in one report, paraphrased.

:::reveal How many of the eight referees spoke decidedly against Noether's habilitation? ||| One. Tollmien's account of the file names Hartmann, and only Hartmann.

:::reveal What is an exception argument, and what does it concede? ||| An argument that this one candidate should be lifted out of a rule. It concedes that the rule itself is right, so it can win a case without changing anything.

:::reveal Why is the "returning soldiers" point given here as a paraphrase rather than a quotation? ||| Because it is Ihringer summarising one named referee's written report, not a transcription of it, and not a statement by the faculty. The famous soldier quotation is in neither Tollmien's account nor MacTutor, so this course does not print it.

## Vocabulary
- **Referee** (*Gutachter*): a named professor who filed a written assessment of the candidate, the first documented stage of the habilitation.
- **Exception argument**: a defence that grants the rule and asks for one person to be exempted from it, which is how Landau's and Carathéodory's reports are phrased.
- **Paraphrase**: a summary of a source in someone else's words, which this course marks as such rather than presenting as the source's own sentence.
- **Georg Hartmann**: the one referee of the eight whom Tollmien records as speaking decidedly against the habilitation.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
MacTutor. (n.d.). *Emmy Noether*. MacTutor History of Mathematics Archive, University of St Andrews. https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "two-votes-and-a-typo",
      title: "5 · Two votes, and a typo worth noticing",
      section: "Section 2 · Autumn 1915: the reports and the votes",
      body: `With the reports in, the case went to a vote twice in ten days.

**29 October 1915: the commission.** The faculty commission voted on whether to seek an exemption from the ministry. Everyone was in favour except Hartmann (Tollmien, n.d.-a). The same eight-to-one shape as the reports, now expressed as a decision.

**6 November 1915: the mathematics and science department.** The *Mathematisch-Naturwissenschaftliche Abteilung* voted 10 for, 7 against, 2 abstaining (Tollmien, n.d.-a; Ihringer, 2019).

Notice what happened to the margin. Among the specialists who had read her work, the split was 8 to 1. Among the wider department, it was 10 to 7 with two abstentions. The further the question travelled from the mathematics, the worse she did. That pattern repeats at the next stage, and it is the single most useful thing in this section, because it tells you where the opposition actually lived. It was not among the people competent to judge the work.

**The typo, and why this course stops on it.** Tollmien's page prints the date of that departmental vote as "6.11.2015". That is plainly a typing error for 1915, and Ihringer's translation gives 6 November 1915. So the correction is easy and certain.

Stopping on it is still worth doing, because of what it teaches about using any source, including a careful one. Tollmien is the historian who went through the archive file document by document, and her account is the backbone of this course. It also contains an obvious slip. Both things are true at once, and neither cancels the other. A source is not a person you trust or distrust as a whole. It is a set of statements, each of which can be checked, and the practical method is to read a second source alongside the first and see where they disagree.

That is exactly the method Section 3 puts in the learner's hands, on a bigger disagreement: two published transcriptions of the catalogue entries, both by serious people, that do not match the scans.

:::reveal What did the faculty commission decide on 29 October 1915, and how did it divide? ||| To seek an exemption from the ministry, with everyone in favour except Hartmann.

:::reveal How did the mathematics and science department vote on 6 November 1915? ||| Ten for, seven against, two abstaining.

:::reveal What pattern do the two 1915 votes show as the question travels away from the mathematicians? ||| The margin gets worse. Eight to one among the referees, ten to seven with two abstentions in the wider department, so the opposition did not live among the people competent to judge her work.

## Vocabulary
- **Commission**: the small faculty body that decided on 29 October 1915 to seek an exemption for Noether.
- **Mathematisch-Naturwissenschaftliche Abteilung**: the mathematics and science department of the philosophical faculty, which voted on 6 November 1915.
- **Abstention**: a recorded refusal to vote either way, which is why the 1915 tallies have three numbers rather than two.
- **Cross-checking**: reading a second source alongside the first so that a slip in either one shows up as a disagreement rather than passing as a fact.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-eighteenth-of-november",
      title: "6 · 18 November 1915: two questions, two tallies",
      section: "Section 2 · Autumn 1915: the reports and the votes",
      body: `**10 November 1915.** The other half of the philosophical faculty, the *Historisch-philologische Abteilung*, demanded that the whole faculty vote on the question (Tollmien, n.d.-a).

**18 November 1915.** The whole faculty met, and voted twice on two different questions. Both tallies are in Tollmien's account, and keeping them apart is the difference between understanding this meeting and repeating a story about it.

**The first question** was, in the file's own words, "wer unter allen Umständen gegen die Zulassung einer Frau zur Habilitation ist": who is, under all circumstances, against admitting a woman to the habilitation. The faculty divided **17 to 14, with one abstention** (Tollmien, n.d.-a). A majority of those present said they were against it in every case.

**The second question** was what to do about Noether: whether to recommend that the ministry refuse. On that the faculty **tied, 14 to 14**, and with the vote of the dean, Landau, that meant no such recommendation was made (Tollmien, n.d.-a).

**Read the two together.** A body whose majority had just declared itself opposed in principle could not assemble a majority to act on it in this case. A vote of opinion is not a vote of consequence, and the popular version of this story keeps the first tally, which sounds like a defeat, and loses the second, which is the one that decided what left the room.

**The same day**, the *Historisch-philologische Abteilung* decided to take no further steps against her (Tollmien, n.d.-a). The faculty also approved the text of the exemption request, 10 to 6 (Tollmien, n.d.-a).

**What seven of them put in writing.** A minority report was filed by seven faculty members. In Ihringer's English translation, it argued that "a woman is totally unsuited for the uninterrupted teaching in front of our students due to the phenomena related to the female organism" (Ihringer, 2019).

That sentence is the ugliest thing in this file, and it is worth being precise about its status. It is a minority report. It did not carry the meeting, it is not the reason the ministry refused two years later, and reading it as the decision is precisely the compression lesson 3 warned about. It is evidence of what some of her colleagues believed, written down and signed, which is a real and useful thing for a record to contain. It is not evidence of what the faculty did.

:::reveal What happened on 10 November 1915? ||| The historical and philological department demanded that the whole faculty vote on the question.

:::reveal What were the two tallies of 18 November 1915, and what was each about? ||| Seventeen to fourteen with one abstention on who was against admitting a woman under all circumstances, and a fourteen to fourteen tie on recommending that the ministry refuse, which with the dean's vote meant no recommendation was made.

:::reveal What is the status of the minority report of seven faculty members? ||| Evidence of what some colleagues believed, written and signed. It is not what the faculty decided, and it is not the reason the ministry refused in 1917.

## Vocabulary
- **Historisch-philologische Abteilung**: the historical and philological department of the philosophical faculty, which demanded the full faculty vote on 10 November 1915.
- **Vote of opinion**: a poll of what a body believes in principle, such as the first tally of 18 November, which by itself decides nothing.
- **Vote of consequence**: a poll on an action, such as whether to recommend a refusal, which is the one that determines what leaves the room.
- **Minority report**: a dissenting statement filed by members who lost, here signed by seven faculty members.
- **Edmund Landau**: the dean whose vote settled the tie of 18 November 1915, so that no recommendation to refuse was made.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-cover-note-and-the-refusal",
      title: "7 · A cover note, a compromise, and a refusal",
      section: "Section 2 · Autumn 1915: the reports and the votes",
      body: `The faculty had voted. What happened next is the part of the story that almost never gets told, and it is where the case was actually lost.

**26 November 1915.** The written application to the ministry is dated (Tollmien, n.d.-a).

**4 December 1915.** Hilbert wrote to the minister himself (Tollmien, n.d.-a).

**9 December 1915.** The curator, Ernst Osterath, forwarded the application to the ministry "mit einem ablehnenden Kommentar", with a negative comment (Tollmien, n.d.-a).

Stop there for a moment. The faculty had asked for an exemption. The document that reached the ministry was that request with the university's own administrative officer writing against it on the outside. Nobody voted on the cover note. It did not need a majority. It travelled attached to the thing it contradicted, and the ministry read both.

**Probably 1916: a compromise.** Hilbert went to see the minister, with Debye and Voigt. Tollmien dates the result only as "wahrscheinlich 1916", probably 1916, and records what came of it: no objection would be raised "gegen andere Wege, Frl. Noethers Mitarbeit zu ermöglichen", against other ways of making Miss Noether's collaboration possible (Tollmien, n.d.-a).

That sentence is the hinge of this whole course. It is not a permission to teach. It is a permission to arrange things so that she could teach without being named, and the arrangement it authorised is the line in the catalogue: Professor Hilbert, with the support of Miss Dr. Noether. The catalogue entries are not a trick played on the ministry. They are, as far as the record shows, the ministry's own preferred alternative to changing the rule.

**20 June 1917.** Frankfurt had shown interest. The ministry wrote to Göttingen: "Sie werden also Fräulein Noether jedenfalls nicht als Privatdozentin an die Universität Frankfurt verlieren" (Tollmien, n.d.-a). You will not, in any case, lose Miss Noether to the University of Frankfurt as a Privatdozentin. The reassurance is also a statement of policy: the bar was not local, so moving would not have helped.

**5 November 1917: the refusal.** The minister answered the exemption request at last: "Da die Frage nur grundsätzlich entschieden werden kann, vermag ich auch die Zulassung von Ausnahmen nicht zu genehmigen, selbst wenn im Einzelfall dadurch gewisse Härten unvermeidbar sind" (Tollmien, n.d.-a). Since the question can only be decided as a matter of principle, he could not authorise the admission of exceptions, even where certain hardships were unavoidable in an individual case.

Landau and Carathéodory had argued that she was an exception. The ministry replied that it did not do exceptions, and said so in a sentence that concedes the hardship and refuses anyway.

:::reveal What did the curator do with the faculty's request on 9 December 1915? ||| Ernst Osterath forwarded it to the ministry with a negative comment attached, which nobody had voted on.

:::reveal What did the compromise of probably 1916 actually permit? ||| Not that Noether be named as a teacher, but that no objection would be raised against other ways of making her collaboration possible. That is the arrangement the catalogue entries record.

:::reveal On what ground did the minister refuse on 5 November 1917? ||| That the question could only be decided as a matter of principle, so he could not authorise exceptions even where an individual case involved unavoidable hardship.

## Vocabulary
- **Cover note**: the comment an officer attaches to a document he is forwarding, which travels with it and needs no vote.
- **Ernst Osterath**: the Göttingen curator, who forwarded the faculty's 1915 request to the ministry with a negative comment.
- **Compromise of probably 1916**: the ministry's undertaking to raise no objection to other ways of enabling Noether's collaboration, which is the authority the catalogue line rests on.
- **Decided as a matter of principle** (*grundsätzlich entschieden*): the minister's 1917 ground for refusing, which answers an exception argument by denying that exceptions exist.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The reports and the votes",
      section: "Section 2 · Autumn 1915: the reports and the votes",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many referees filed reports on Noether's 1915 application, according to Tollmien's account of the file?",
            options: [
              "Eight",
              "Seventeen, which is the number recorded on the first of the two tallies of 18 November 1915",
              "Three, namely Hilbert, Klein and Landau, the mathematicians who had read her published work",
              "Seven, the number of faculty members who signed the minority report later that November",
            ],
            correctIndex: 0,
            explanation:
              "Hilbert, Klein, Landau, Carathéodory, Runge, Debye, Hartmann and Voigt. The other numbers in this question are all real numbers from the same autumn, attached to other things.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "When were the referee reports dated?",
            options: [
              "Between 21 July and 8 August 1915",
              "Between 29 October and 18 November 1915, in the weeks of the commission and faculty votes",
              "Between 9 December 1915 and 5 November 1917, while the ministry was considering the request",
              "Between 18 January and 4 June 1919, during the third and successful habilitation attempt",
            ],
            correctIndex: 0,
            explanation:
              "Seven of the eight fall in that window. Hilbert's report carries no date at all, which is worth remembering whenever somebody dates the whole set precisely.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "Which of the eight reports is undated?",
            options: [
              "Hilbert's",
              "Hartmann's, the only one of the eight to speak decidedly against the habilitation",
              "Carathéodory's, which called Miss Noether a singular phenomenon in Ihringer's translation",
              "Voigt's, who later accompanied Hilbert to see the minister in Berlin about the case",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien lists the reports with dates from 21 July to 8 August 1915, and marks Hilbert's as undated.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "How many of the eight referees does Tollmien record as speaking decidedly against the habilitation?",
            options: [
              "One",
              "Seven, the same men who afterwards signed the minority report filed on 18 November 1915",
              "Four, an even split that the commission then resolved by its own vote on 29 October 1915",
              "None, which is why the request went forward to the ministry with the faculty's support",
            ],
            correctIndex: 0,
            explanation:
              "\"Nur Hartmann sprach sich dezidiert gegen die Habilitation Emmy Noethers aus.\" One of eight, and it was not the reading of her work that refused her.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "In Ihringer's translation, what did Landau's report call Noether?",
            options: [
              "One of the few exceptions",
              "A candidate whose work was equal to that of any Privatdozent then lecturing at Göttingen",
              "A mathematician whose admission the faculty should seek without asking for any exemption",
              "The first woman whose case the ministry would be obliged to decide on its merits alone",
            ],
            correctIndex: 0,
            explanation:
              "Praise built on a concession. An exception argument grants the rule and asks for one person to be lifted out of it, which is exactly the argument the ministry refused in 1917.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "In Ihringer's translation, what did Carathéodory's report call Noether?",
            options: [
              "A singular phenomenon",
              "The ablest algebraist of her generation in Germany, whatever the ministry might decide",
              "A candidate whose sex should not enter the faculty's deliberations in any way at all",
              "A scholar whose admission would settle the question of women's habilitation for good",
            ],
            correctIndex: 0,
            explanation:
              "Carathéodory's phrase is the other half of the exception pair with Landau's. Both are generous about her and silent about the rule.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What does an exception argument concede?",
            options: [
              "That the rule itself is right",
              "That the candidate's published work has not yet been assessed by qualified referees",
              "That the decision belongs to the faculty rather than to the ministry that made the rule",
              "That the candidate should be admitted on probation and reassessed after two semesters",
            ],
            correctIndex: 0,
            explanation:
              "It can win one case and change nothing, because it leaves the rule standing with a precedent for how rarely it bends. The minister's 1917 refusal answers it on exactly that ground.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What jobs argument does Ihringer paraphrase from Hartmann's report?",
            options: [
              "Women should not hold jobs returning soldiers could fill",
              "That a woman admitted to the habilitation would be unable to find students willing to enrol",
              "That an unsalaried lecturer could not support herself, so the post would go to the wealthy",
              "That the university could not afford another lecturer in mathematics during the war years",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer summarises it rather than transcribing it, so this course marks it as a paraphrase of one named referee's report, not as a faculty statement or a quotation.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "Why does this course not print the famous quotation about what returning soldiers would think of being taught by a woman?",
            options: [
              "It is in neither Tollmien's account nor MacTutor",
              "Because its wording differs between the German original and the published English translation",
              "Because the faculty member who said it cannot now be identified from the surviving minutes",
              "Because it was said at the meeting of 18 November 1915 rather than written in a report",
            ],
            correctIndex: 0,
            explanation:
              "The sources read for this course do not carry it. What they do support is narrower: a jobs argument, by one man, in one report, and in paraphrase.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What does the eight-to-one split among the referees tell you about where the opposition to Noether lived?",
            options: [
              "Not among those competent to judge the work",
              "That the mathematicians were divided and the decision therefore fell to the wider faculty",
              "That the referees deferred to the ministry rather than expressing a view of their own",
              "That opposition was strongest among those who had read her published papers closely",
            ],
            correctIndex: 0,
            explanation:
              "The men who had read her work mostly wanted her admitted. The margin got worse the further the question travelled from the mathematics, which is the pattern the next lesson follows.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What did the faculty commission decide on 29 October 1915?",
            options: [
              "To seek an exemption from the ministry",
              "To postpone the application until the ministry had clarified the scope of the 1908 decree",
              "To ask for a second set of referee reports from professors at other Prussian universities",
              "To recommend that Noether be allowed to lecture under a professor's name without applying",
            ],
            correctIndex: 0,
            explanation:
              "Everyone on the commission was in favour except Hartmann, the same eight-to-one shape as the reports, now expressed as a decision.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Who was the single dissenter on the commission vote of 29 October 1915?",
            options: [
              "Hartmann",
              "Voigt, who nevertheless later accompanied Hilbert to Berlin to see the minister",
              "Runge, whose report of August 1915 had raised the question of wartime appointments",
              "Osterath, the curator, who would forward the request with a negative comment in December",
            ],
            correctIndex: 0,
            explanation:
              "The same referee who had spoken decidedly against in his report. Osterath was the curator, not a member of the commission, and his negative comment came separately in December.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "How did the mathematics and science department vote on 6 November 1915?",
            options: [
              "Ten for, seven against, two abstaining",
              "Seventeen for and fourteen against, with a single member recorded as abstaining",
              "Fourteen for and fourteen against, with the dean's vote settling the resulting tie",
              "Ten for and six against, the tally by which the exemption text was later approved",
            ],
            correctIndex: 0,
            explanation:
              "Ten, seven and two. The other tallies here are real: seventeen to fourteen and fourteen to fourteen belong to 18 November, and ten to six to the exemption text.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Which department voted on 6 November 1915?",
            options: [
              "Mathematics and science",
              "History and philology, which had demanded that the whole faculty vote on the question",
              "The whole philosophical faculty, sitting together with the dean, Edmund Landau, presiding",
              "The commission of referees, meeting for the second time since the reports were filed",
            ],
            correctIndex: 0,
            explanation:
              "The Mathematisch-Naturwissenschaftliche Abteilung. The historical and philological department is the one that demanded the full faculty vote, on 10 November.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What pattern do the successive 1915 votes show?",
            options: [
              "The margin worsens away from the mathematicians",
              "The margin improves each time the question is put to a larger and more senior body",
              "The margin stays identical at every stage, which is why the case took two years to decide",
              "The margin cannot be compared, because only one of the three bodies recorded its tally",
            ],
            correctIndex: 0,
            explanation:
              "Eight to one among the referees, ten to seven with two abstentions in the department. The opposition did not live among the people competent to judge the work.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What error does Tollmien's page contain in the date of the departmental vote?",
            options: [
              "It prints the year as 2015",
              "It gives the day as the sixteenth rather than the sixth of November in that year",
              "It gives the month as December, which conflicts with the curator's letter of that month",
              "It gives two different dates for the same vote in two places on the same page",
            ],
            correctIndex: 0,
            explanation:
              "A plain typing error for 1915, and Ihringer's translation settles it at 6 November 1915. The point of stopping on it is not the slip but the method that caught it.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Which source settles the date of the departmental vote against Tollmien's typing error?",
            options: [
              "Ihringer's translation",
              "The Göttingen course catalogue for the winter semester of 1916/17, digitised by the library",
              "The University of Göttingen's page on historical figures in its mathematics department",
              "MacTutor's biography of Noether, which gives a full chronology of the November 1915 votes",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer has 6 November 1915. MacTutor is the wrong tool here for a specific reason: it carries no November 1915 date at all, which Section 6 makes use of.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What does lesson 5 say a source is, for practical purposes?",
            options: [
              "A set of statements, each checkable",
              "A person whose overall reliability you establish once and then rely on thereafter",
              "A record whose errors, once found, put its other statements beyond safe use",
              "A narrative that must be read whole, because its parts cannot be assessed separately",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien is the backbone of this course and contains an obvious slip. Both are true at once, and the way to work with that is to read a second source alongside the first.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What is the practical method lesson 5 recommends for catching a slip in a careful source?",
            options: [
              "Read a second source alongside it",
              "Prefer the source published most recently, since later work corrects what came before it",
              "Prefer the source written in the original language of the documents it is describing",
              "Discount any statement in the source that is not accompanied by an archive reference",
            ],
            correctIndex: 0,
            explanation:
              "Disagreement between two sources is visible in a way that an error inside one source is not. Section 3 hands the learner a bigger version of the same exercise.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Where does Section 3 put the same cross-checking method to work?",
            options: [
              "On two transcriptions that differ from the scans",
              "On the minority report, by comparing Ihringer's translation with Tollmien's German original",
              "On the minister's refusal of 1917, by comparing the ministry's copy with the university's",
              "On the referee reports, by comparing the dated seven with Hilbert's undated eighth",
            ],
            correctIndex: 0,
            explanation:
              "Two published transcriptions of the catalogue entries, both by serious people, do not match the page images. That disagreement is the exercise.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What did the historical and philological department do on 10 November 1915?",
            options: [
              "Demanded a vote of the whole faculty",
              "Voted ten to seven with two abstentions against seeking an exemption for Noether",
              "Filed the minority report signed by seven of its members against the habilitation",
              "Asked the curator to forward its own objection to the ministry alongside the request",
            ],
            correctIndex: 0,
            explanation:
              "That demand is what produced the meeting of 18 November and its two tallies. Without it the departmental vote of 6 November would have been the end of the faculty stage.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "How many questions did the whole faculty vote on at the meeting of 18 November 1915?",
            options: [
              "Two",
              "One, on whether to recommend that the Prussian ministry refuse the exemption request",
              "Three, one on principle, one on Noether's case, and one on the minority report itself",
              "None, because the meeting adjourned without reaching a vote on either question put to it",
            ],
            correctIndex: 0,
            explanation:
              "Two different questions with two different tallies. Keeping them apart is the difference between understanding the meeting and repeating a story about it.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What was the first question put to the faculty on 18 November 1915?",
            options: [
              "Who was against admitting a woman under all circumstances",
              "Whether to recommend to the ministry that Noether's application be refused outright",
              "Whether the text of the exemption request should be approved and sent to the curator",
              "Whether the historical and philological department was entitled to demand a full vote",
            ],
            correctIndex: 0,
            explanation:
              "The file's wording is \"wer unter allen Umständen gegen die Zulassung einer Frau zur Habilitation ist\". It is a poll of principle, not a decision about Noether.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "How did the faculty divide on that first question?",
            options: [
              "Seventeen to fourteen, one abstaining",
              "Fourteen to fourteen, with the dean's own vote then settling the question against a refusal",
              "Ten to seven with two abstentions, the same tally as the departmental vote of 6 November",
              "Ten to six, the tally by which the text of the exemption request was afterwards approved",
            ],
            correctIndex: 0,
            explanation:
              "A majority of those present said they were opposed in every case. It sounds like a defeat, and it decided nothing, because the second question is the one with consequences.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What was the second question put to the faculty that day?",
            options: [
              "Whether to recommend that the ministry refuse",
              "Whether a woman should be admitted to the habilitation at Prussian universities generally",
              "Whether to ask the curator to withhold his negative comment from the forwarded request",
              "Whether to invite Noether to give a trial lecture before the faculty reached its decision",
            ],
            correctIndex: 0,
            explanation:
              "This is the vote of consequence: not what the faculty believed, but what it would actually send to the ministry about this candidate.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "How did the second vote of 18 November 1915 come out?",
            options: [
              "Tied fourteen to fourteen, so no recommendation was made",
              "Carried seventeen to fourteen, so a recommendation to refuse went forward to the ministry",
              "Lost ten to seven with two abstentions, so the request was returned to the commission",
              "Carried unanimously, so the faculty recommended that the ministry grant the exemption",
            ],
            correctIndex: 0,
            explanation:
              "The tie, with the dean Landau's vote, meant that no recommendation to refuse left the room. A body opposed in principle could not assemble a majority to act on it.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "Whose vote settled the tie of 18 November 1915?",
            options: [
              "The dean's, Edmund Landau",
              "The curator's, Ernst Osterath, who attended the meeting as the ministry's representative",
              "Hilbert's, who had written one of the eight referee reports on the candidate that summer",
              "Hartmann's, the one referee who had spoken decidedly against the habilitation in July",
            ],
            correctIndex: 0,
            explanation:
              "Landau was the dean, and also one of the referees who had called her one of the few exceptions. The curator's intervention came later and in writing.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What is the difference between a vote of opinion and a vote of consequence?",
            options: [
              "One polls belief, the other decides an action",
              "One is taken by a department and the other by the whole faculty sitting together",
              "One is recorded in the minutes and the other is reported informally to the ministry",
              "One requires a simple majority and the other requires the dean's assent to take effect",
            ],
            correctIndex: 0,
            explanation:
              "The popular version keeps the first tally of 18 November, which sounds like a defeat, and loses the second, which is the one that determined what actually left the room.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "By what margin did the faculty approve the text of the exemption request?",
            options: [
              "Ten to six",
              "Seventeen to fourteen with one member of the faculty recorded as abstaining on the question",
              "Ten to seven with two abstentions, the same margin as the departmental vote of 6 November",
              "Fourteen to fourteen, the tie being resolved in favour of approval by the dean's own vote",
            ],
            correctIndex: 0,
            explanation:
              "Ten to six. Each of the other tallies is real and belongs to a different vote, which is why this case rewards writing the numbers down beside their questions.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What did the historical and philological department decide on 18 November 1915?",
            options: [
              "To take no further steps against her",
              "To file the minority report signed by seven of its own members with the faculty's request",
              "To ask the ministry directly to confirm that the 1908 decree admitted of no exceptions",
              "To demand a second vote of the whole faculty once the referee reports had been recirculated",
            ],
            correctIndex: 0,
            explanation:
              "The department that had forced the full faculty vote dropped the matter the same day. That is the opposite of the popular version, in which a special departmental vote blocks her.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "How many faculty members signed the minority report?",
            options: [
              "Seven",
              "Fourteen, the number that had just voted for recommending a refusal to the ministry",
              "Seventeen, the number that had declared itself opposed under all circumstances",
              "Eight, one for each of the referees who had filed a written report that summer",
            ],
            correctIndex: 0,
            explanation:
              "Seven. It is a dissenting statement by members who lost the vote, which is why its status has to be stated whenever it is quoted.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What is the status of the minority report in this record?",
            options: [
              "Evidence of belief, not of what the faculty did",
              "The formal ground on which the Prussian ministry refused the exemption two years later",
              "The document the curator attached to the request when he forwarded it that December",
              "The faculty's official answer to the question the other department had demanded be put",
            ],
            correctIndex: 0,
            explanation:
              "It did not carry the meeting and it is not the reason the ministry refused in 1917. Reading it as the decision is exactly the compression lesson 3 warned about.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What is the date on the faculty's written application to the ministry?",
            options: [
              "26 November 1915",
              "18 November 1915, the day the whole faculty met and voted on the two separate questions",
              "9 December 1915, the day the curator forwarded it with a negative comment attached to it",
              "4 December 1915, the day Hilbert wrote to the Prussian minister on Noether's behalf",
            ],
            correctIndex: 0,
            explanation:
              "The application is dated 26 November, Hilbert's own letter 4 December, and the curator's forwarding 9 December. Three documents, three dates, one file.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What did Hilbert do on 4 December 1915?",
            options: [
              "Wrote to the minister",
              "Announced Noether's first course under his own name in the catalogue for the winter semester",
              "Filed his undated referee report with the commission considering the habilitation request",
              "Travelled to Berlin with Debye and Voigt to put the case to the minister in person",
            ],
            correctIndex: 0,
            explanation:
              "The letter is dated 4 December 1915. The meeting with Debye and Voigt is a separate event that Tollmien dates only as probably 1916.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What did Ernst Osterath do on 9 December 1915?",
            options: [
              "Forwarded the request with a negative comment",
              "Voted against the exemption request at the meeting of the whole philosophical faculty",
              "Wrote the minority report that seven faculty members signed against the habilitation",
              "Returned the request to the faculty for a second vote before it could go to the ministry",
            ],
            correctIndex: 0,
            explanation:
              "The curator sent on the faculty's request with the university's own administrative officer writing against it on the outside. Nobody voted on that comment and it needed no majority.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "Why does lesson 7 single out the curator's cover note?",
            options: [
              "It carried weight without needing a vote",
              "Because it was the document the faculty spent the longest time debating before sending it",
              "Because it reversed the faculty's decision and substituted the curator's own recommendation",
              "Because the ministry replied to it directly and never answered the faculty's own request",
            ],
            correctIndex: 0,
            explanation:
              "It travelled attached to the thing it contradicted, and the ministry read both. A procedure can be won at every stage that has a tally and lost at a stage that has none.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "Who went with Hilbert to see the minister, probably in 1916?",
            options: [
              "Debye and Voigt",
              "Klein and Landau, the two referees who had described her as an exception in their reports",
              "Osterath and Hartmann, the curator and the one referee who had opposed the application",
              "Carathéodory and Runge, who had both filed reports in the window of July and August 1915",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien dates the meeting only as probably 1916, and records the undertaking it produced rather than the conversation.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What did the ministry undertake after that meeting?",
            options: [
              "To raise no objection to other ways of enabling her collaboration",
              "To grant an exemption from the 1908 decree once the war with France had been concluded",
              "To allow her to habilitate at Frankfurt, where the Prussian decree would not have applied",
              "To pay her from university funds for the courses she taught under another professor's name",
            ],
            correctIndex: 0,
            explanation:
              "\"Gegen andere Wege, Frl. Noethers Mitarbeit zu ermöglichen, keine Bedenken.\" It is not permission to teach in her own name. It is permission to arrange things so she could teach without being named.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What does that undertaking tell you about the catalogue entries of 1916 to 1919?",
            options: [
              "They were the ministry's own preferred alternative",
              "They were a device the faculty adopted without the ministry's knowledge or agreement",
              "They were a breach of the 1908 decree that the ministry later penalised the university for",
              "They were drafted by the curator, which is why his comment was attached to the request",
            ],
            correctIndex: 0,
            explanation:
              "As far as the record shows, the arrangement was the alternative to changing the rule, not a trick played on the ministry. That reframes the whole catalogue line.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What did the ministry write to Göttingen on 20 June 1917 about Frankfurt?",
            options: [
              "That Göttingen would not lose her to Frankfurt",
              "That Frankfurt had been authorised to admit her as a Privatdozentin from the following term",
              "That the 1908 decree did not extend to Frankfurt and the question was therefore local",
              "That any application made at Frankfurt would be decided on the candidate's merits alone",
            ],
            correctIndex: 0,
            explanation:
              "\"Sie werden also Fräulein Noether jedenfalls nicht als Privatdozentin an die Universität Frankfurt verlieren.\" The reassurance doubles as a statement that the bar was not local.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "On what ground did the minister refuse the exemption on 5 November 1917?",
            options: [
              "That the question could only be decided on principle",
              "That the faculty's own vote of 18 November 1915 had shown the university to be divided",
              "That the candidate's published work did not yet meet the standard the decree required",
              "That the curator's comment had shown the request to lack the university's real support",
            ],
            correctIndex: 0,
            explanation:
              "He could not authorise exceptions, even where an individual case involved unavoidable hardship. That answer meets Landau's and Carathéodory's exception argument head on and refuses it.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What was the first paper stage the 1915 application produced?",
            options: [
              "Written assessments by named professors",
              "A résumé of the candidate's publications, compiled by the dean for the commission",
              "A transcript of the talk she had given to the Göttingen Mathematical Society in July",
              "A note from the curator recording that an application had been received at the university",
            ],
            correctIndex: 0,
            explanation:
              "Eight referee reports, seven of them dated between 21 July and 8 August 1915, and Hilbert's undated.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "Which of these men is NOT among the eight referees Tollmien lists?",
            options: [
              "Osterath",
              "Carathéodory, whose report described the candidate as a singular phenomenon",
              "Debye, who later accompanied Hilbert to put the case to the minister in person",
              "Voigt, who also accompanied Hilbert on that visit to the ministry in Berlin",
            ],
            correctIndex: 0,
            explanation:
              "Ernst Osterath was the curator, not a referee. His contribution to the file was the negative comment he attached in December 1915.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What does lesson 4 say the popular version gets wrong about the faculty?",
            options: [
              "That the men who read her work wanted her refused",
              "That the faculty was entitled to admit her without asking the ministry for anything",
              "That the faculty met only once, when in fact it voted on two separate occasions",
              "That the faculty's minority report was signed by a majority of its members",
            ],
            correctIndex: 0,
            explanation:
              "Seven of the eight referees supported her. What refused her was not the reading of her work.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "Why does lesson 4 say an exception argument is least likely to change anything?",
            options: [
              "It leaves the rule where it was",
              "Because it requires the candidate to prove a standard no ordinary applicant could meet",
              "Because a ministry was obliged to consider only arguments about the general rule",
              "Because it invites a comparison with other candidates that the faculty cannot supply",
            ],
            correctIndex: 0,
            explanation:
              "It can win a single case and adds a precedent for how rarely the rule should bend. The minister's 1917 refusal answers it on exactly that ground.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What argument other than the jobs argument does lesson 4 say Hartmann's report carried?",
            options: [
              "A family argument",
              "An argument that the candidate's published work fell short of the required standard",
              "An argument that the decree of 1908 forbade the faculty from even considering her",
              "An argument that a woman's admission would cost the faculty its standing in Berlin",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer's translation records both. Neither is an argument about the mathematics, which is the point of setting them beside the other seven reports.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "Why does lesson 4 insist that Hartmann's jobs argument was not a faculty statement?",
            options: [
              "It is one referee writing in his own report",
              "Because the report was filed after the commission had already voted that October",
              "Because the faculty voted to strike the passage from the file before forwarding it",
              "Because Ihringer translates it from a draft that the referee later withdrew",
            ],
            correctIndex: 0,
            explanation:
              "One man, one report, and given here in paraphrase rather than as a quotation. Those distinctions are what keep the famous soldier quotation out of this course.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What is the difference between a paraphrase and a quotation, as this course marks it?",
            options: [
              "A paraphrase is somebody else's summary",
              "A paraphrase is a translation of a passage whose original language is unavailable",
              "A paraphrase is a shortened quotation with the omitted words marked by an ellipsis",
              "A paraphrase is a statement supported by a source that the writer has not itself read",
            ],
            correctIndex: 0,
            explanation:
              "Marking which one you have stops a summary from hardening into a sentence its subject never wrote.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "How does MacTutor bear on the soldier quotation?",
            options: [
              "It does not carry it",
              "It carries it and attributes it to the meeting of the whole faculty in November 1915",
              "It carries it in German and gives a different English wording from Ihringer's",
              "It carries it with a note that the remark has never been traced to a document",
            ],
            correctIndex: 0,
            explanation:
              "Neither Tollmien's habilitation page nor MacTutor has it, which is why this course does not print it at all.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What did the commission's vote of 29 October 1915 turn into a decision?",
            options: [
              "The eight-to-one shape of the reports",
              "The ten to seven division that the wider department would record a week afterwards",
              "The tie of fourteen to fourteen that the whole faculty reached in November",
              "The ministry's undertaking to raise no objection to other ways of proceeding",
            ],
            correctIndex: 0,
            explanation:
              "Everyone on the commission was in favour except Hartmann, the same balance as the written reports.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "How many members of the mathematics and science department abstained on 6 November 1915?",
            options: [
              "Two",
              "One, the same number recorded as abstaining at the full faculty meeting that month",
              "Seven, the number recorded as voting against the proposal on the same occasion",
              "None, the department having divided cleanly between those for and those against",
            ],
            correctIndex: 0,
            explanation:
              "Ten for, seven against, two abstaining. The one abstention belongs to the faculty vote of 18 November, which is a different meeting.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What does the shift from eight to one to ten to seven show?",
            options: [
              "Opposition grew with distance from the mathematics",
              "That the commission had been chosen from the candidate's own supporters in the faculty",
              "That two referees changed their minds between filing their reports and voting",
              "That the department included members who had not been sent the referee reports",
            ],
            correctIndex: 0,
            explanation:
              "The further the question travelled from the people competent to judge the work, the worse she did, and the pattern repeats at the next stage.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What does lesson 5 say about trusting or distrusting a source as a whole?",
            options: [
              "A source is not a person you judge that way",
              "A source with one demonstrable error should be set aside in favour of another",
              "A source should be trusted entirely in its own field and distrusted outside it",
              "A source should be trusted where it agrees with the reference works and not elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "It is a set of statements, each of which can be checked. Tollmien is the backbone of this course and she has a typing error on the page.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Why does lesson 5 stop on a typing error at all?",
            options: [
              "For what it teaches about using any source",
              "Because the wrong year has been repeated by later writers and needs correcting in print",
              "Because it casts doubt on the other dates Tollmien gives for the autumn of 1915",
              "Because the correct date cannot be established from any other source now available",
            ],
            correctIndex: 0,
            explanation:
              "The correction itself is easy and certain. What is worth keeping is the method that caught it.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What makes an error inside a single source hard to see?",
            options: [
              "There is nothing beside it to disagree with",
              "Errors are usually printed in a smaller type than the surrounding text on the page",
              "A historian's account is not normally indexed, so a reader cannot check one claim twice",
              "A source states its claims without the evidence, so nothing in it can be verified at all",
            ],
            correctIndex: 0,
            explanation:
              "Reading a second source alongside the first turns an invisible slip into a visible disagreement, which is the whole practical value of cross-checking.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Which two bodies had voted before the whole faculty was asked?",
            options: [
              "The commission and the mathematics and science department",
              "The commission and the historical and philological department, in that order",
              "The mathematics and science department and the academic senate of the university",
              "The referees, sitting as a body, and the commission that reviewed their reports",
            ],
            correctIndex: 0,
            explanation:
              "29 October and 6 November 1915. The historical and philological department did not vote on her at this stage; it demanded that the whole faculty do so.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "Which department demanded the full faculty vote, and which had just voted in her favour?",
            options: [
              "History and philology demanded it; mathematics and science had voted for her",
              "Mathematics and science demanded it, having lost its own vote a few days earlier",
              "The commission demanded it, the two departments having divided equally on the question",
              "The curator demanded it on the ministry's behalf before the request could be forwarded",
            ],
            correctIndex: 0,
            explanation:
              "The department that had just voted ten to seven in her favour was overruled by a demand from the other half of the same faculty.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "How many days separate the demand for a full faculty vote from the vote itself?",
            options: [
              "Eight",
              "One, the demand having been made on the day before the faculty met to vote",
              "Twelve, the demand falling on 6 November and the faculty meeting on the eighteenth",
              "Twenty, the demand falling in late October and the meeting in the third week of November",
            ],
            correctIndex: 0,
            explanation:
              "10 to 18 November 1915. Eight days is also the reason a story that moves the meeting by one day still sounds plausible.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What does the first tally of 18 November 1915 tell you and not tell you?",
            options: [
              "What the faculty believed, not what it did",
              "What the faculty did, without recording how many members held the contrary view",
              "How the mathematics and science department had voted twelve days earlier",
              "How the ministry would rule, since the faculty's view was normally decisive",
            ],
            correctIndex: 0,
            explanation:
              "Seventeen to fourteen on a question of principle. The action question was put separately, and it tied.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What would have happened if the second vote of 18 November had carried?",
            options: [
              "A recommendation to refuse would have gone to the ministry",
              "The faculty would have withdrawn the application before it reached Berlin at all",
              "The historical and philological department would have been obliged to vote again",
              "The candidate would have been refused by the faculty without reference to the ministry",
            ],
            correctIndex: 0,
            explanation:
              "The tie meant none was made, so what reached the ministry was a request for an exemption rather than a request plus the faculty's advice to refuse it.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What did the faculty approve, and by what margin, on 18 November 1915?",
            options: [
              "The exemption text, ten to six",
              "The minority report, by seven votes to none against, its signatories abstaining",
              "The referral of the case to the curator, by seventeen votes to fourteen",
              "The demand for a further vote of the whole faculty, by fourteen votes to fourteen",
            ],
            correctIndex: 0,
            explanation:
              "The same meeting that declared a majority opposed in principle approved the text asking the ministry to make an exception.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What does lesson 6 say about quoting the minority report?",
            options: [
              "Its status has to be stated whenever it is quoted",
              "It should not be quoted, since it records opinions rather than decisions of the faculty",
              "It should be quoted only in Ihringer's English, the German original being unavailable",
              "It should be quoted alongside the referee reports, which make the same argument",
            ],
            correctIndex: 0,
            explanation:
              "It is evidence of what some colleagues believed, written down and signed. It is not evidence of what the faculty did.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "Why is it useful that the minority report exists at all?",
            options: [
              "Beliefs that are written and signed can be checked",
              "Because it names the seven men, which allows their later careers to be traced",
              "Because the ministry relied on it when it refused the exemption two years afterwards",
              "Because it is the only document in the file that mentions the candidate by name",
            ],
            correctIndex: 0,
            explanation:
              "A record that contains what people actually argued is more useful than one that contains only outcomes, even when what they argued is ugly.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What is the relation between the two votes of 18 November 1915?",
            options: [
              "A majority opposed in principle could not act on it",
              "The second vote simply repeated the first, which is why the tallies are so similar",
              "The first vote decided the case and the second recorded the dissenters' objection",
              "The second vote was taken among a smaller body after most members had withdrawn",
            ],
            correctIndex: 0,
            explanation:
              "Seventeen said they were against in every case, and then fourteen to fourteen could not produce a recommendation to refuse this one.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What part of the story does lesson 7 say almost never gets told?",
            options: [
              "What happened after the faculty voted",
              "What the referees wrote in the reports they filed in July and August 1915",
              "What the minority report said about women and uninterrupted teaching",
              "What Noether herself wrote in the application she submitted in July 1915",
            ],
            correctIndex: 0,
            explanation:
              "The application, Hilbert's letter, the curator's comment, the compromise, the Frankfurt letter and the refusal. It is where the case was actually lost.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What did the ministry receive in December 1915?",
            options: [
              "The request, with a comment against it attached",
              "The minority report, forwarded separately by the seven members who had signed it",
              "Hilbert's letter alone, the faculty's own request having been held back by the curator",
              "A request the curator had redrafted to reflect the faculty's divided opinion",
            ],
            correctIndex: 0,
            explanation:
              "The faculty asked for an exemption and the document that arrived carried the university's own administrative officer writing against it on the outside.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What does lesson 7 call the hinge of the whole course?",
            options: [
              "The ministry's undertaking about other ways of proceeding",
              "The minority report of the seven faculty members filed in November 1915",
              "The curator's negative comment on the request he forwarded that December",
              "Einstein's letter to Klein at the end of December three years later",
            ],
            correctIndex: 0,
            explanation:
              "It is not a permission to teach. It is a permission to arrange things so that she could teach without being named, and that arrangement is the catalogue line.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What does the compromise tell you about the catalogue entries?",
            options: [
              "They were not a trick played on the ministry",
              "They were drafted by the ministry and sent to Göttingen for the catalogue's printer",
              "They were reviewed by the curator each semester before the catalogue went to press",
              "They were a breach of the undertaking, since it covered research and not teaching",
            ],
            correctIndex: 0,
            explanation:
              "As far as the record shows, the arrangement was the ministry's own alternative to changing the rule.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "How precisely does Tollmien date the compromise?",
            options: [
              "Probably 1916",
              "To 4 December 1915, the date of Hilbert's own letter to the Prussian minister",
              "To 20 June 1917, the date of the ministry's letter about the Frankfurt offer",
              "To the winter semester of 1916/17, in which the first catalogue entry appeared",
            ],
            correctIndex: 0,
            explanation:
              "Wahrscheinlich 1916. A course that turns a historian's \"probably\" into a date has added a precision the record does not have.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What policy does the Frankfurt letter of June 1917 reveal?",
            options: [
              "The bar was not local, so moving would not have helped",
              "That Frankfurt had been given permission to admit women ahead of the other universities",
              "That the ministry intended to grant the Göttingen exemption within the year",
              "That the curator had been instructed to block any transfer of the candidate",
            ],
            correctIndex: 0,
            explanation:
              "The reassurance that Göttingen would not lose her to Frankfurt as a Privatdozentin is also a statement that she could not have been one there either.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What does the minister's refusal concede while refusing?",
            options: [
              "That hardship in an individual case may be unavoidable",
              "That the candidate's mathematical standing had been established beyond any doubt",
              "That the decree of 1908 had been intended to admit exceptions in special cases",
              "That the faculty's request had the support of a clear majority of its members",
            ],
            correctIndex: 0,
            explanation:
              "\"Selbst wenn im Einzelfall dadurch gewisse Härten unvermeidbar sind.\" The concession is what makes the refusal a statement of principle rather than a judgment on her.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "How does the minister's answer meet Landau's and Carathéodory's reports?",
            options: [
              "It denies that exceptions exist",
              "It accepts that she is an exception but holds that the faculty had asked too late",
              "It sets their assessments aside as coming from members of her own department",
              "It asks for further reports from referees outside the University of Göttingen",
            ],
            correctIndex: 0,
            explanation:
              "They argued she was an exception. He replied that the question could only be decided as a matter of principle, which is the one answer an exception argument cannot survive.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The catalogue: a primary-source exercise
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "how-to-read-a-catalogue-entry",
      title: "8 · How to read one line of the catalogue",
      section: "Section 3 · The catalogue: a primary-source exercise",
      body: `The document at the centre of this course is called the *Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen*, the list of lectures at the University of Göttingen. The State and University Library at Göttingen has digitised it, in the series PPN654655340, from a bound run shelved as "4 HLP IV, 34/2:1911-1920/21". Every semester of it is free to open, and the whole of this section can be checked against the page images by anyone with a browser.

**Why this course links to the scans and does not show them.** The library's own terms, printed on the cover of the downloadable file, read: "Publication and/or broadcast in any form (including electronic) requires prior written permission from the Goettingen State- and University Library." We do not have that permission, so this course transcribes and links instead. The distinction is worth carrying away from here: **free to read is not the same as free to republish**, and the second one is usually a letter you have to write. The library gives an address for asking, gdz@sub.uni-goettingen.de.

**One entry, field by field.** In the winter semester of 1916/17, on page 15, under a heading on the page before it reading "Mathematisch-physikalisches Seminar", the catalogue printed this:

> "Invariantentheorie: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *E. Nöther*, Montag 4—6 Uhr, gratis. [190]"

Six fields, and each does a different job.

- **Invariantentheorie** is the subject, invariant theory.
- **Prof. Hilbert** is the teacher, in the slot the catalogue reserves for the person permitted to be named as one.
- **mit Unterstützung von Frl. Dr. E. Nöther** is "with the support of Miss Dr. E. Nöther". Not a teacher, not a co-teacher. Support.
- **Montag** is the day, and the hours follow it.
- **gratis** is the fee word.
- **[190]** is the course's number in this semester's catalogue, and it is the number the index at the back uses to say whose course it was.

**What the entry records, and what it does not.** It records who was permitted to be named. It does not record who stood in the room, and on the evidence of the whole of Sections 1 and 2, it could not have.

**A warning about the fee word, because it is the single most misread thing in this story.** "Gratis" appears on many other professors' courses on the same pages, among them Klein's, Landau's, Carathéodory's and Hilbert's own joint seminar with Debye. MacTutor renders it into English as "no tuition". It is a category describing what students paid. It is not a statement about what the teacher was paid, and it cannot be used as one. Whether Noether was paid anything for this teaching is not something the sources read for this course settle.

Two of her seven entries carry other fee words, "privatim" and "privatissime und gratis". This course does not tell you what those categories meant in detail, because none of the sources read for it defines the Göttingen fee words, and inventing a definition would undo the point the section is making.

:::reveal Why does this course link to the GDZ scans instead of reproducing them? ||| The library's printed terms require prior written permission for publication or broadcast in any form, including electronic, and this course does not have that permission. Free to read is not free to republish.

:::reveal What are the six fields of the WS 1916/17 entry? ||| The subject, the named teacher, the support line naming Noether, the day and hours, the fee word, and the course number the index uses.

:::reveal Why can "gratis" not be used as evidence that Noether was unpaid? ||| It is a fee category printed on many other professors' courses on the same pages, describing what students paid. It says nothing about what a teacher received.

## Vocabulary
- **Verzeichnis der Vorlesungen**: the printed list of a semester's lectures at Göttingen, the primary document this course is built on.
- **GDZ**: the Göttingen digitisation centre at the State and University Library, which holds the scans and sets the terms for reusing them.
- **mit Unterstützung von**: "with the support of", the phrase that carries Noether's name in all seven entries.
- **gratis**: a fee word printed on many professors' courses in the same catalogue, rendered by MacTutor as "no tuition".
- **Course number**: the bracketed figure at the end of an entry, which is how the staff index at the back points at a course.

## Sources
MacTutor. (n.d.). *Emmy Noether*. MacTutor History of Mathematics Archive, University of St Andrews. https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Winter-Semester 1916/17*. (1916). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1916_1917_WS`,
    },
    {
      slug: "seven-entries-six-semesters",
      title: "9 · Seven entries across six semesters",
      section: "Section 3 · The catalogue: a primary-source exercise",
      body: `Here is the whole run, transcribed from the page images, including the printer's long dash in the hours. Six semesters, seven entries, because the winter of 1918/19 has two.

> **WS 1916/17, p. 15.** "Invariantentheorie: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *E. Nöther*, Montag 4—6 Uhr, gratis. [190]"

> **SS 1917, p. 14.** "\*Vorträge über Algebra: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *E. Nöther*, Montag 4—6 Uhr, gratis. [185]"

> **WS 1917/18, p. 15.** "\*Vorträge über mathematische Prinzipien: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *Noether*, Montag 4—6 Uhr, privatissime und gratis. [185]"

> **SS 1918, p. 15.** "\*Übungen über Differentialgleichungen: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *E. Noether*, Donnerstag 4—6 Uhr, gratis. [191]"

> **WS 1918/19, p. 14.** "Partielle Differential- und Integralgleichungen: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *Nöther*, Montag und Donnerstag 9—11 Uhr, privatim. [166]"

> **WS 1918/19, p. 14.** "\*Übungen zu Differentialgleichungen: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *Noether*, Montag 4—6 Uhr, gratis. [172]"

> **SS 1919, p. 16.** "Integralgleichungen: Prof. *Hilbert* mit Unterstützung von Frl. Dr. *Emmy Noether*, Montag und Donnerstag 4—6 Uhr, gratis. [202]"

**Where the run starts, checked negatively.** The mathematics listings for the winter of 1915/16 and the summer of 1916 were read as well, on pages 14 and 15 of each, and neither names Noether. So the run begins in the winter of 1916/17 and ends in the summer of 1919: six semesters, three academic years.

**Three things to notice in the list itself.**

**One: her name is unstable.** Nöther, E. Nöther, Noether, E. Noether, and by the summer of 1919, Emmy Noether. The catalogue is not careful about her, and the drift towards her full name across the run is the closest the printed page comes to acknowledging her.

**Two: one entry is not a seminar.** Number 166, in the winter of 1918/19, sits in the main lecture list rather than the seminar section, runs on two days a week, and carries "privatim" where the others carry "gratis". It is the outlier of the set, and the transcription that most people work from leaves it out entirely.

**Three: two published transcriptions do not match the scans.** Tollmien's own list of Noether's lectures gives the summer of 1918 course as "Montag", where the page image says Donnerstag. It drops both "E." and "Montag" from the winter 1916/17 entry. And it omits number 166 altogether.

That is not an attack on Tollmien, whose documentary work is the reason most of this course can be written at all. It is the ordinary condition of a transcription: a second copy of a thing is a new opportunity for it to change. The value of a digitised primary source is that a reader does not have to choose between two transcriptions. They can go and look.

:::reveal How many entries, over how many semesters, does the catalogue run cover? ||| Seven entries over six semesters, from the winter of 1916/17 to the summer of 1919, because the winter of 1918/19 carries two.

:::reveal What makes entry 166 the outlier of the set? ||| It sits in the main lecture list rather than the seminar section, runs on two days a week, carries "privatim" instead of "gratis", and is missing from the transcription most people work from.

:::reveal Name the three ways Tollmien's transcription differs from the page images. ||| It gives Montag for the summer 1918 course where the scan says Donnerstag, it drops "E." and "Montag" from the winter 1916/17 entry, and it omits entry 166.

## Vocabulary
- **Negative check**: reading the semesters on either side of a claimed run to confirm where it really begins and ends, which is what settles "six semesters" against "four years".
- **Seminar list and lecture list**: the two parts of the catalogue an entry can sit in, which is how entry 166 stands out from the other six.
- **Transcription drift**: the small changes a document picks up each time it is copied, such as a weekday, an initial or a whole entry.
- **privatim**: the fee word on entry 166, printed where the other six entries print "gratis".

## Sources
Tollmien, C. (n.d.-b). *Noethers Vorlesungen*. Emmy Noether. https://www.emmy-noether.net/Noethers-Vorlesungen/
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Winter-Semester 1916/17*. (1916). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1916_1917_WS
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Sommer-Semester 1919*. (1919). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1919_SS`,
    },
    {
      slug: "the-index-where-the-name-is-not",
      title: "10 · The index, where the name is not",
      section: "Section 3 · The catalogue: a primary-source exercise",
      body: `The entries are the famous part. The index at the back is the part that decides what the record means.

Each catalogue carries a second list, headed "II. Alphabetisches Verzeichnis der Dozenten mit ihren Wohnungen und Vorlesungen": an alphabetical list of the teaching staff, with their addresses and their courses. It is the catalogue's searchable half. If you want to know what a given person taught, this is where you look.

**Page 29 of the winter 1916/17 index**, in the entry for Hilbert, ends with a list of course numbers: "[179. 189. 190]". (His street address and telephone number are printed there too; they are omitted here because they are not what the line is being quoted for.) Number 190 is the invariant theory seminar from lesson 8. The course Noether taught is filed, in the searchable list, under Hilbert.

**Page 31** runs Nelson, Nieschmidt, Nolte. Alphabetically, Noether belongs between the second and the third. There is no entry. Not an entry without courses, not a cross-reference: nothing.

**And the index is not a list of professors.** The same volume lists, on page 30, "Höltzcke, Tanzmeister", the dance master, and on page 31 "Peters, Zeichenlehrer", the drawing teacher. So the criterion for appearing here was not rank, and it was not holding a chair. It was being somebody the university could name as teaching. A dance master met that test. The mathematician who was at that moment teaching invariant theory did not.

**One honest limit.** Only the winter 1916/17 index was checked. What the indexes of the other five semesters say is not known to this course, and if you open one and find something different, you have found something this course does not have.

**Why an index does more damage than an entry.** The course entry at least prints her name, in a support line, in small type, once. The index does not print it at all, and the index is the tool. A later reader asking "what did Noether teach at Göttingen?" gets nothing back, and a later reader asking "what did Hilbert teach?" gets three numbers, one of which is hers. A one-line format with a cap on who fits in it is the subject of *Who Made the Record*, lesson 7; a staff index is that same format, made searchable, which is how a single printing rule becomes the shape of the record for everyone who comes afterwards.

:::reveal What is the second list at the back of each catalogue, and what does it do? ||| An alphabetical list of the teaching staff with their addresses and their courses. It is the catalogue's searchable half, the place you look to find out what a person taught.

:::reveal What does the winter 1916/17 index show about course 190, and about Noether? ||| Course 190 is listed among Hilbert's courses on page 29. Noether has no entry at all on page 31, where she would belong alphabetically between Nieschmidt and Nolte.

:::reveal What do the dance master and the drawing teacher prove about the index? ||| That it was not a list of professors or chair-holders. The test for appearing was being someone the university could name as teaching, and Noether failed a test a dance master passed.

## Vocabulary
- **Alphabetisches Verzeichnis der Dozenten**: the alphabetical staff index at the back of each catalogue, listing each teacher's courses by number.
- **Searchable half**: the part of a record designed to be looked things up in, which is why an omission there travels further than an omission in the body.
- **Cross-reference**: a pointer from one index entry to another, of which Noether has none.
- **Scope limit**: a statement of how far a check actually went, such as this course having read only the winter 1916/17 index.

## Sources
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Winter-Semester 1916/17*. (1916). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1916_1917_WS`,
    },
    {
      slug: "transcribe-the-entry",
      title: "11 · Exercise: transcribe it yourself",
      section: "Section 3 · The catalogue: a primary-source exercise",
      body: `This is the part of the course you can do without taking anybody's word for anything.

Open the winter 1916/17 catalogue at https://gdz.sub.uni-goettingen.de/id/PPN654655340_1916_1917_WS and find page 15, under the heading "Mathematisch-physikalisches Seminar". Then open the summer 1919 volume at https://gdz.sub.uni-goettingen.de/id/PPN654655340_1919_SS and find page 16. The other five semesters follow the same pattern: the series is PPN654655340, and the identifier carries the year and the semester.

Answer from the page in front of you, not from lesson 9. Where the two disagree, the page wins, and you should write to us and say so.

A reminder from lesson 8: the images are free to read and not free to republish, so this exercise asks you to go and look rather than handing you a picture.`,
      exercise: {
        instructions:
          "Type the missing word or phrase, taken from the catalogue page. Spelling is checked forgivingly, and umlauts written out in full are accepted.",
        items: [
          {
            prompt: "The winter 1916/17 entry names the course's teacher as 'Prof. ___'.",
            answer: "Hilbert",
            hint: "The name in the slot the catalogue reserves for a person permitted to be named as a teacher.",
            explanation: "The entry names Hilbert as the teacher and Noether only in the support line that follows.",
          },
          {
            prompt: "Between the teacher's name and Noether's, the entry prints three German words meaning 'with the support of'. Write them.",
            answer: "mit Unterstützung von",
            accept: ["mit unterstuetzung von", "mit unterstutzung von"],
            hint: "The middle word is the noun for support.",
            explanation: "All seven entries across the six semesters carry this same phrase before her name.",
          },
          {
            prompt: "The winter 1916/17 entry gives her name as 'Frl. Dr. E. ___'. Write the spelling that page actually prints.",
            answer: "Nöther",
            accept: ["noether", "nother"],
            hint: "This semester's page uses the umlaut, not the spelled-out form.",
            explanation: "The spelling is unstable across the run: Nöther here, Noether in other semesters, and Emmy Noether by the summer of 1919.",
          },
          {
            prompt: "The subject of that winter 1916/17 course, in the single German word the page prints.",
            answer: "Invariantentheorie",
            accept: ["invariant theory", "invariantentheorie"],
            hint: "It is the theory of things that do not change under a transformation.",
            explanation: "Invariant theory was Noether's own field, which is part of why the support line reads oddly.",
          },
          {
            prompt: "The fee word printed at the end of the winter 1916/17 entry.",
            answer: "gratis",
            hint: "MacTutor renders it into English as 'no tuition'.",
            explanation: "It appears on many other professors' courses on the same pages, so it cannot be read as evidence about what Noether was paid.",
          },
          {
            prompt: "The fee word printed on entry 166 in the winter of 1918/19, where the other entries print 'gratis'.",
            answer: "privatim",
            hint: "It is the other fee category, and it appears only once in her run.",
            explanation: "Entry 166 is the outlier of the seven: in the lecture list rather than the seminar, on two days a week, and carrying this word.",
          },
          {
            prompt: "The weekday printed on the summer 1918 entry in the scan.",
            answer: "Donnerstag",
            accept: ["thursday"],
            hint: "It is not the day the other seminar entries use.",
            explanation: "The scan says Donnerstag. Tollmien's published list gives Montag for the same course, which is the disagreement this exercise exists to let you settle.",
          },
          {
            prompt: "The weekday Tollmien's published list gives for that same summer 1918 course.",
            answer: "Montag",
            accept: ["monday"],
            hint: "It is the day most of the other entries in the run carry.",
            explanation: "Where a transcription and the page image disagree, the page image is the evidence and the transcription is a report of it.",
          },
          {
            prompt: "In the winter 1916/17 staff index, the surname under which course number 190 is filed.",
            answer: "Hilbert",
            hint: "Page 29 of that volume, at the end of the entry.",
            explanation: "The index is the catalogue's searchable half, and it files her course under the only name the rule allowed.",
          },
          {
            prompt: "The occupation printed after 'Höltzcke' in that same index, in the German word the page uses.",
            answer: "Tanzmeister",
            accept: ["dance master", "dancing master", "tanzmeister"],
            hint: "He taught something, and it was not mathematics.",
            explanation: "The index lists a dance master and a drawing teacher, so the test for appearing in it was not rank. It was being someone the university could name as teaching.",
          },
        ],
      },
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Reading the catalogue",
      section: "Section 3 · The catalogue: a primary-source exercise",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the document at the centre of this course?",
            options: [
              "Göttingen's printed list of lectures",
              "The minutes of the philosophical faculty meetings held during the autumn of 1915",
              "The Prussian ministry's file of correspondence about women and the habilitation",
              "The register of doctoral degrees awarded by the University of Göttingen before 1920",
            ],
            correctIndex: 0,
            explanation:
              "The Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen, digitised by the State and University Library in the series PPN654655340.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Why does this course link to the scans rather than reproducing the page images?",
            options: [
              "The library requires prior written permission to republish",
              "Because the page images are too faint to be legible once they have been reduced in size",
              "Because the library charges a licensing fee for each image reproduced in a paid course",
              "Because the library has not yet digitised the volumes for the semesters in question",
            ],
            correctIndex: 0,
            explanation:
              "The terms printed on the downloadable file require prior written permission for publication or broadcast in any form, including electronic, and this course does not have it.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What general lesson does the library's reuse condition illustrate?",
            options: [
              "Free to read is not free to republish",
              "A digitised document has less evidential weight than the paper original it was made from",
              "A library's terms bind only commercial users, so a course may reproduce what it likes",
              "Permission to quote a document in words also covers reproducing its page images",
            ],
            correctIndex: 0,
            explanation:
              "Open access to read is one permission and republication is another, and the second is usually a letter you have to write. The library gives an address for asking.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "In the winter 1916/17 entry, what does the phrase \"mit Unterstützung von\" mean?",
            options: [
              "With the support of",
              "Under the direction of, which would have named her as the course's responsible teacher",
              "In collaboration with, the formula the catalogue used for two professors teaching jointly",
              "Deputising for, the formula used when a named professor was absent for a whole semester",
            ],
            correctIndex: 0,
            explanation:
              "Support, not teaching and not co-teaching. The phrase carries her name in all seven entries across the six semesters.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What does the bracketed figure at the end of a catalogue entry do?",
            options: [
              "It numbers the course for the staff index",
              "It records how many students had enrolled for the course in the previous semester",
              "It gives the fee in marks payable by each student who enrolled in the course that term",
              "It identifies the page of the catalogue on which the teacher's own index entry appears",
            ],
            correctIndex: 0,
            explanation:
              "The index at the back lists each teacher's course numbers, which is how you can see that number 190 is filed under Hilbert.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What does the catalogue entry record about a course?",
            options: [
              "Who was permitted to be named as its teacher",
              "Which member of the faculty had actually prepared and delivered each of its meetings",
              "Which professor the philosophical faculty had voted to place in charge of the seminar",
              "Which lecturer the Prussian ministry had approved for that subject in that semester",
            ],
            correctIndex: 0,
            explanation:
              "It does not record who stood in the room, and on the evidence of Sections 1 and 2 it could not have.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Whose courses in the same catalogue also carry the word \"gratis\"?",
            options: [
              "Klein's, Landau's, Carathéodory's and Hilbert's",
              "Only those seminars in which a professor was assisted by an unhabilitated colleague",
              "Only the courses given in the mathematics and physics seminar rather than the lecture list",
              "Only those courses that the university offered to students who had been mobilised for war",
            ],
            correctIndex: 0,
            explanation:
              "Including Hilbert's own joint seminar with Debye. A word printed across many professors' courses cannot be evidence about one teacher's pay.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "How does MacTutor render \"gratis\" into English?",
            options: [
              "No tuition",
              "Without stipend, meaning that the teacher received no payment for giving the course",
              "Open to the public, meaning that anyone could attend without enrolling at the university",
              "Unofficial, meaning that the course did not count towards any examination requirement",
            ],
            correctIndex: 0,
            explanation:
              "Tuition here is what students pay. The English rendering makes the direction of the word explicit, which the Latin does not.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What does this course say about whether Noether was paid for the teaching of 1916 to 1919?",
            options: [
              "The sources read do not settle it",
              "That she was paid from the fees collected for the one course marked privatim in 1918/19",
              "That she was unpaid throughout, as the word gratis on six of the seven entries shows",
              "That she was paid a fixed allowance by Hilbert out of his own salary as a professor",
            ],
            correctIndex: 0,
            explanation:
              "It is an open question, and it is filed as one. Reading the fee word as an answer to it is the fourth of the four corrections in Section 6.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Why does this course decline to define the fee word \"privatissime\"?",
            options: [
              "No source read for it defines the Göttingen fee words",
              "Because the word appears only once in the run and a single instance proves nothing",
              "Because its meaning changed between the winter of 1917/18 and the summer of 1919",
              "Because the library's terms forbid quoting the catalogue's own explanatory front matter",
            ],
            correctIndex: 0,
            explanation:
              "Inventing a definition would undo the point the section is making. What the course can show, it shows; what it cannot, it says it cannot.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Under what heading do the winter 1916/17 seminar entries sit?",
            options: [
              "Mathematisch-physikalisches Seminar",
              "Alphabetisches Verzeichnis der Dozenten mit ihren Wohnungen und Vorlesungen",
              "Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen",
              "Mathematisch-Naturwissenschaftliche Abteilung der philosophischen Fakultät",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all real phrases from this course: the staff index heading, the catalogue's own title, and the name of the department that voted on 6 November 1915.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What was the subject of the winter 1916/17 course?",
            options: [
              "Invariant theory",
              "Partial differential and integral equations, the subject of entry 166 two years later",
              "Lectures on mathematical principles, the subject announced in the winter of 1917/18",
              "Questions of module theory, the subject of the trial lecture she gave in June 1919",
            ],
            correctIndex: 0,
            explanation:
              "Invariantentheorie. The other three subjects are all real, and all belong to other entries or other stages of this story.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What email address does the library give for permission requests?",
            options: [
              "An address at the Göttingen library",
              "An address at the University of St Andrews, which hosts the MacTutor archive of the scans",
              "An address at the Prussian state archive, which holds the original habilitation file",
              "No address at all, which is why this course was unable to ask for permission to reproduce",
            ],
            correctIndex: 0,
            explanation:
              "The terms name a contact at the Göttingen State and University Library, so the route to permission is open to anyone who wants to take it.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "How many entries, over how many semesters, make up the catalogue run?",
            options: [
              "Seven entries over six semesters",
              "Eight entries over eight semesters, one for each term from 1915/16 to the summer of 1919",
              "Six entries over six semesters, one in each term from the winter of 1916/17 onwards",
              "Seven entries over seven semesters, the last of them in the autumn intermediate term",
            ],
            correctIndex: 0,
            explanation:
              "Seven over six, because the winter of 1918/19 carries two: the seminar exercises and the lecture course numbered 166.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which semester opens the run?",
            options: [
              "Winter 1916/17",
              "Winter 1915/16, the semester immediately after her application to habilitate in July 1915",
              "Summer 1916, in the months after Hilbert's meeting with the minister in Berlin",
              "Summer 1917, the semester after the minister's letter about Frankfurt in June of that year",
            ],
            correctIndex: 0,
            explanation:
              "The winter 1915/16 and summer 1916 mathematics listings were read, on pages 14 and 15 of each, and neither names Noether. That negative check is what fixes the start.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which semester closes the run?",
            options: [
              "Summer 1919",
              "Winter 1918/19, the semester that carries two of the seven entries in the whole run",
              "Winter 1917/18, the semester whose entry carries the words privatissime und gratis",
              "The autumn intermediate semester of 1919, in which she first taught in her own name",
            ],
            correctIndex: 0,
            explanation:
              "Summer 1919, entry 202. The autumn intermediate semester of 1919 is the next one, and it is the first announced under her own name.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What does the negative check on the winter 1915/16 and summer 1916 listings establish?",
            options: [
              "That the run is six semesters, not longer",
              "That the catalogue for those semesters was printed without a mathematics section at all",
              "That Hilbert taught no seminar in either semester, so there was nothing to attach her to",
              "That her name appears in those semesters under a different spelling than the later ones",
            ],
            correctIndex: 0,
            explanation:
              "Reading the semesters on either side of a claimed run is how you find out where it really starts. Six semesters is three academic years, not four.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "How does the catalogue spell her name across the run?",
            options: [
              "Inconsistently, ending with her full first name",
              "Consistently as Nöther, with the umlaut, in every one of the seven entries in the run",
              "Consistently as Noether, spelled out, from the winter of 1916/17 to the summer of 1919",
              "As Nöther while the habilitation was pending and as Noether after it was refused in 1917",
            ],
            correctIndex: 0,
            explanation:
              "Nöther, E. Nöther, Noether, E. Noether, and by the summer of 1919, Emmy Noether. The drift towards her full name is the closest the printed page comes to acknowledging her.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What makes entry 166 different from the other six?",
            options: [
              "It sits in the lecture list and reads privatim",
              "It names her before Hilbert, which is the only entry in the run to reverse the order",
              "It is the only entry in the run that omits the phrase about support altogether",
              "It is the only entry that gives a room number as well as the days and the hours",
            ],
            correctIndex: 0,
            explanation:
              "It is in the main lecture list rather than the seminar section, runs on two days a week, and carries privatim where the others carry gratis.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which semester carries two entries?",
            options: [
              "Winter 1918/19",
              "Winter 1916/17, whose page 15 carries both the seminar entry and its exercises class",
              "Summer 1919, whose page 16 carries the integral equations course and a second seminar",
              "Summer 1917, which is why the run covers seven entries across only six semesters",
            ],
            correctIndex: 0,
            explanation:
              "Entry 166, the lecture course, and entry 172, the exercises, both on page 14 of that volume.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What weekday does the scan give for the summer 1918 course?",
            options: [
              "Donnerstag",
              "Montag, which is also the day Tollmien's published list gives for the same course",
              "Montag und Donnerstag, the two days printed on the winter 1918/19 lecture entry",
              "Mittwoch und Sonnabend, the days printed on the first course she announced in her own name",
            ],
            correctIndex: 0,
            explanation:
              "Thursday on the page image, Monday in Tollmien's list. This is the disagreement the exercise in lesson 11 sends the learner to settle.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which weekday does Tollmien's published list give for that same summer 1918 course?",
            options: [
              "Montag",
              "Donnerstag, which agrees with the scan and shows the two sources to be consistent",
              "Dienstag, a day that appears nowhere in the seven entries transcribed from the scans",
              "Sonnabend, the day printed on the autumn 1919 course she announced in her own name",
            ],
            correctIndex: 0,
            explanation:
              "Monday, where the page image says Thursday. Neither source is dishonest; a transcription is simply a new opportunity for a document to change.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What else does Tollmien's transcription drop from the winter 1916/17 entry?",
            options: [
              "The initial E. and the weekday",
              "The course number in brackets and the fee word printed at the end of the entry",
              "The subject of the course and the professor's title, leaving only the two surnames",
              "The phrase about support, which is the part of the entry that carries her name at all",
            ],
            correctIndex: 0,
            explanation:
              "The initial and Montag. Small drops, but the initial is one of the things the exercise asks a learner to check on the page for themselves.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which entry does Tollmien's transcription omit altogether?",
            options: [
              "Number 166",
              "Number 190, the winter 1916/17 invariant theory seminar under the heading on page 14",
              "Number 202, the summer 1919 integral equations course that closes the whole run",
              "Number 185, which is the number carried by two different entries a year apart",
            ],
            correctIndex: 0,
            explanation:
              "The outlier of the seven is also the one missing from the transcription most people work from, which is why so few accounts mention a privatim entry at all.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What does lesson 9 say about the value of a digitised primary source?",
            options: [
              "A reader need not choose between two transcriptions",
              "That a digitised copy carries the same legal reuse permissions as a quotation in words",
              "That a scan is easier to read than the printed original, which has usually darkened",
              "That a library's digitisation is itself a transcription and so inherits the same risks",
            ],
            correctIndex: 0,
            explanation:
              "They can go and look. That is the difference between a course you have to believe and a course you can check.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Why does lesson 9 insist that noting Tollmien's divergences is not an attack on her?",
            options: [
              "Her documentary work is why the course can be written",
              "Because the divergences were introduced by her publisher rather than by her own reading",
              "Because she transcribed from a different printing of the catalogue than the digitised one",
              "Because a transcription is not intended to be exact and is judged by other standards",
            ],
            correctIndex: 0,
            explanation:
              "Most of what Sections 1, 2 and 4 can say rests on her reading of the archive file. Copying drift is the ordinary condition of a transcription, not a failing of a historian.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What is the heading of the second list at the back of each catalogue?",
            options: [
              "The alphabetical list of teaching staff",
              "The mathematical and physical seminar, with the courses offered in it that semester",
              "The list of lectures of the Georg August University at Göttingen for the semester",
              "The register of students enrolled in each course, arranged by faculty and by subject",
            ],
            correctIndex: 0,
            explanation:
              "Alphabetisches Verzeichnis der Dozenten mit ihren Wohnungen und Vorlesungen: the staff, with their addresses and their courses. It is the catalogue's searchable half.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What do the numbers at the end of Hilbert's index entry show?",
            options: [
              "That course 190 is filed under his name",
              "That he had been assigned three rooms in the mathematics building for that semester",
              "That three of his courses had been approved by the ministry for the coming semester",
              "That three separate lecturers were supporting him across the courses he announced",
            ],
            correctIndex: 0,
            explanation:
              "The line ends \"[179. 189. 190]\", and 190 is the invariant theory seminar Noether taught. The searchable list files her course under him.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Why does this course omit Hilbert's street address and telephone number when quoting his index line?",
            options: [
              "They are not what the line is quoted for",
              "Because the library's terms forbid quoting any personal detail from a digitised page",
              "Because the page image is too faint at that point for the digits to be read reliably",
              "Because the address given in the index is known to be out of date for that semester",
            ],
            correctIndex: 0,
            explanation:
              "The evidential work is done by the course numbers at the end of the line. Quoting only what carries the argument is a habit worth keeping.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What is on page 31 of the winter 1916/17 index, where Noether would belong?",
            options: [
              "Nelson, Nieschmidt and Nolte, with no entry for her",
              "An entry for her with no course numbers beside it, unlike the entries for the professors",
              "A cross-reference directing the reader to look under Hilbert for her courses instead",
              "An entry under the spelling Nöther, which is why later readers have failed to find her",
            ],
            correctIndex: 0,
            explanation:
              "Alphabetically she belongs between Nieschmidt and Nolte. There is no entry, no cross-reference and no blank line: nothing.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Which two non-professorial teachers does the same index list?",
            options: [
              "A dance master and a drawing teacher",
              "A librarian and a laboratory assistant, both attached to the mathematics seminar",
              "A fencing master and a riding master, listed at the end of the alphabetical sequence",
              "A music director and a language teacher, both employed by the university that year",
            ],
            correctIndex: 0,
            explanation:
              "Höltzcke, Tanzmeister, on page 30, and Peters, Zeichenlehrer, on page 31. The test for appearing was not rank.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What does the presence of the dance master in the index prove about the criterion for appearing in it?",
            options: [
              "It was being nameable as teaching, not holding a chair",
              "It was being paid a salary by the university, which Noether was not during these years",
              "It was holding the venia legendi, which the dance master had obtained by examination",
              "It was being resident in Göttingen, which the index records by printing each address",
            ],
            correctIndex: 0,
            explanation:
              "A dance master met that test. The mathematician who was at that moment teaching invariant theory did not, and the difference is the 1908 decree.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What limit does lesson 10 state about its own checking?",
            options: [
              "Only the winter 1916/17 index was read",
              "Only the seminar sections were read, and not the main lecture lists of any semester",
              "Only Tollmien's transcription was consulted, and not the page images themselves",
              "Only the odd-numbered semesters were checked, because the library's scans were incomplete",
            ],
            correctIndex: 0,
            explanation:
              "What the other five indexes say is not known to this course, and a learner who opens one and finds something different has found something the course does not have.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Why does an omission from the index travel further than an omission from an entry?",
            options: [
              "The index is the tool people search",
              "Because the index was reprinted each year while the entries were set fresh each semester",
              "Because the index was circulated to other universities while the entries were not",
              "Because an index entry carried a teacher's address and so proved their residence in the city",
            ],
            correctIndex: 0,
            explanation:
              "Ask what Noether taught and the searchable list returns nothing. Ask what Hilbert taught and it returns three numbers, one of which is hers.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Which lesson elsewhere in the catalog treats a one-line format with a cap on who fits in it?",
            options: [
              "Who Made the Record, lesson 7",
              "Who Gets Named, lesson 9, on the mechanism Margaret Rossiter named in 1993",
              "Who Gets Named, lesson 21, on what it takes for a record to be formally corrected",
              "The Paper and the Prize, whose whole subject is the citation on a scientific award",
            ],
            correctIndex: 0,
            explanation:
              "A caption is a format with a cap, and a staff index is that same format made searchable. The other three are real neighbours of this course, and they teach other mechanisms.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What does the exercise in lesson 11 ask a learner to do when the page and lesson 9 disagree?",
            options: [
              "Trust the page and tell us",
              "Record both readings and treat the published transcription as the more reliable of the two",
              "Check a third transcription and follow whichever reading two of the three sources agree on",
              "Assume the scan has been misfiled by the library and look for the same page in another volume",
            ],
            correctIndex: 0,
            explanation:
              "The page image is the evidence and every transcription, including this course's, is a report of it. A course that can be corrected by its own learners is the point of Section 3.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "What does the exercise ask the learner to write for the German phrase that precedes Noether's name?",
            options: [
              "mit Unterstützung von",
              "unter der Leitung von, the formula used when one professor directed another's seminar",
              "in Gemeinschaft mit, the formula used in the catalogue for two professors teaching jointly",
              "in Vertretung von, the formula used when a lecturer stood in for an absent professor",
            ],
            correctIndex: 0,
            explanation:
              "The exercise accepts the umlaut written out in full, because the point of the drill is the phrase and not the typography.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "Which catalogue series identifier does the exercise send learners to?",
            options: [
              "PPN654655340",
              "The shelfmark 4 HLP IV, 34/2:1911-1920/21, which identifies the bound run rather than the scans",
              "The identifier of the autumn intermediate semester of 1919, which the library returns as an error",
              "A separate identifier for each semester, none of which shares a stem with any of the others",
            ],
            correctIndex: 0,
            explanation:
              "The series identifier is the same for every semester, with the year and the semester appended. The shelfmark is real but identifies the physical volumes.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "Which two pages does the exercise name to start from?",
            options: [
              "Page 15 in winter 1916/17 and page 16 in summer 1919",
              "Page 29 and page 31 of the winter 1916/17 volume, which carry the staff index entries",
              "Pages 14 and 15 of the winter 1915/16 volume, where the negative check was carried out",
              "Page 14 of the winter 1918/19 volume, which carries both of that semester's entries",
            ],
            correctIndex: 0,
            explanation:
              "The first and last entries of the run. The other pages named here are all real pages used elsewhere in this section.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "Why does the exercise send the learner to the library's site instead of showing the image?",
            options: [
              "The images are free to read and not free to republish",
              "Because the library's viewer allows a reader to magnify the print more than a course page could",
              "Because the course cannot be certain the scans it consulted were of the correct semester",
              "Because a learner who has navigated the archive will remember the entry better afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Same reason as lesson 8. The condition is the library's, it is printed on the file, and a course that respects it is also teaching what a reuse term is.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "What is the full German title of the document Section 3 is built on?",
            options: [
              "Verzeichnis der Vorlesungen",
              "Alphabetisches Verzeichnis der Dozenten mit ihren Wohnungen und Vorlesungen",
              "Nachrichten der Königlichen Gesellschaft der Wissenschaften zu Göttingen",
              "Mathematisch-physikalisches Seminar der Georg-August-Universität zu Göttingen",
            ],
            correctIndex: 0,
            explanation:
              "The list of lectures. The alphabetical list of teaching staff is the heading of the index inside it, and the Nachrichten is the journal that published her 1918 paper.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What is the series identifier of the digitised catalogue?",
            options: [
              "PPN654655340",
              "4 HLP IV, 34/2:1911-1920/21, which is how the bound volumes are shelved in the library",
              "A separate identifier for each semester, with nothing common between them",
              "The volume and page reference, which the library uses in place of an identifier",
            ],
            correctIndex: 0,
            explanation:
              "The same stem for every semester, with the year and the semester appended. The shelfmark is real and identifies the physical run.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What can anyone do with the whole of Section 3, on the library's terms?",
            options: [
              "Check it against the page images",
              "Reproduce the page images in a classroom handout without asking the library first",
              "Download the volumes and republish them electronically for non-commercial teaching",
              "Request a printed copy of any page free of charge from the library's reading room",
            ],
            correctIndex: 0,
            explanation:
              "Reading is open. Publication or broadcast in any form, including electronic, needs prior written permission, which is why this course links.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What is the slot the catalogue reserves in each entry?",
            options: [
              "The person permitted to be named as teacher",
              "The professor whose department was responsible for the subject that semester",
              "The member of the faculty who would examine students at the end of the course",
              "The senior of the two people teaching, where a course was shared between them",
            ],
            correctIndex: 0,
            explanation:
              "That is the whole of what the format records about who taught, and it is why the support line exists at all.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What does the support line describe Noether as?",
            options: [
              "Support",
              "A co-teacher of equal standing with the professor named ahead of her in the entry",
              "An assistant appointed by the ministry to the mathematics and physics seminar",
              "A doctoral candidate attached to the seminar for the duration of the semester",
            ],
            correctIndex: 0,
            explanation:
              "Not a teacher and not a co-teacher. The word the format allows is Unterstützung, and the format has no other slot to put her in.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "How many of Noether's seven entries carry a fee word other than gratis on its own?",
            options: [
              "Two",
              "None, all seven of them carrying the single word gratis at the end of the entry",
              "Four, which is why the course declines to draw any conclusion from the fee words",
              "Seven, each of the entries carrying a different fee category from the others",
            ],
            correctIndex: 0,
            explanation:
              "The winter 1917/18 entry reads privatissime und gratis, and entry 166 in the winter of 1918/19 reads privatim.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "What does the course do about the meaning of the Göttingen fee categories?",
            options: [
              "It shows what it can and says what it cannot",
              "It supplies the standard definitions from a handbook of German university practice",
              "It infers each definition from the pattern of courses on which the word appears",
              "It leaves the words untranslated and does not discuss their meaning at any point",
            ],
            correctIndex: 0,
            explanation:
              "Inventing a definition would undo the point Section 3 is making, which is that a document can only answer the questions its format was built for.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Where does the heading for the winter 1916/17 seminar entries appear?",
            options: [
              "On the page before the entry itself",
              "In the staff index at the back of the volume, beside each teacher's course numbers",
              "In the bracketed number at the end of each entry, which encodes the section",
              "On the cover of the volume, which lists the seminars offered that semester",
            ],
            correctIndex: 0,
            explanation:
              "The heading is on page 14 and the entry on page 15, which is worth knowing before you go looking for it in the scan.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Which of Noether's entries is the earliest in the run?",
            options: [
              "Invariant theory, winter 1916/17",
              "Lectures on algebra, summer 1917, which carries the same days and hours as the first",
              "Exercises on differential equations, summer 1918, entry number 191 in that volume",
              "Partial differential and integral equations, winter 1918/19, entry number 166",
            ],
            correctIndex: 0,
            explanation:
              "Entry 190, page 15. The other three are real entries from the same run, in the order they were printed.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which entry closes the run, and what is its subject?",
            options: [
              "Summer 1919, integral equations",
              "Winter 1918/19, exercises on differential equations, entry number 172 in that volume",
              "Summer 1918, exercises on differential equations, printed on page 15 of that volume",
              "Winter 1917/18, lectures on mathematical principles, marked privatissime und gratis",
            ],
            correctIndex: 0,
            explanation:
              "Entry 202, on page 16, and the entry that prints her full first name for the first time.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "In which entry does the catalogue print her full first name?",
            options: [
              "Summer 1919",
              "Winter 1916/17, where the entry reads Frl. Dr. E. Nöther with the initial spelled out",
              "Winter 1917/18, the first entry to use the spelling Noether rather than Nöther",
              "Winter 1918/19, in the lecture entry numbered 166 rather than the seminar entry",
            ],
            correctIndex: 0,
            explanation:
              "Frl. Dr. Emmy Noether. The drift towards her full name across the six semesters is the closest the printed page comes to acknowledging her.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What pattern do the days and hours of the seminar entries follow?",
            options: [
              "Mostly Monday, in the late afternoon",
              "Mostly Thursday, with a single Monday entry in the summer semester of 1918",
              "Two days a week throughout, which is why the run covers seven entries in six semesters",
              "A different day in each semester, with no two entries sharing the same hours",
            ],
            correctIndex: 0,
            explanation:
              "Five of the seven carry Montag. The exceptions are the summer 1918 exercises, on Donnerstag, and the two entries that run on two days a week.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which pages did the negative check read?",
            options: [
              "Pages 14 and 15 of two earlier volumes",
              "Page 29 and page 31 of the winter 1916/17 volume, which carry the staff index",
              "Page 16 of the summer 1919 volume, which carries the last entry of the whole run",
              "The full mathematics listing of every volume from 1911 to 1920 in the digitised run",
            ],
            correctIndex: 0,
            explanation:
              "The winter 1915/16 and summer 1916 mathematics listings. Neither names Noether, which is what fixes the start of the run.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What does lesson 9 say a second copy of a document is?",
            options: [
              "A new opportunity for it to change",
              "A safeguard against loss, which is why archives keep duplicates of important papers",
              "A check on the first, since two copies made independently rarely contain the same error",
              "A substitute for the original, which need not then be consulted by later readers",
            ],
            correctIndex: 0,
            explanation:
              "That is the ordinary condition of a transcription, not a failing of a particular historian, and it is why the page image matters.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "Which entry number belongs to the summer 1918 exercises class?",
            options: [
              "191",
              "166, the lecture course marked privatim in the winter semester that followed it",
              "172, the exercises class printed on the same page as that lecture course",
              "202, the integral equations course that closes the run in the summer of 1919",
            ],
            correctIndex: 0,
            explanation:
              "Entry 191, on page 15. The other three numbers are all real numbers from the run, and 166 and 172 share a single page.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What kind of document is the staff index, in the terms lesson 10 uses?",
            options: [
              "The catalogue's searchable half",
              "A supplement printed separately and bound into the volume by the library afterwards",
              "A register of the university's employees, compiled by the curator's office each year",
              "An index of subjects rather than of people, arranged by the faculty offering them",
            ],
            correctIndex: 0,
            explanation:
              "If you want to know what a given person taught, the index is where you look, which is why an omission there travels further than one in the body.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Which course numbers appear against Hilbert in the winter 1916/17 index?",
            options: [
              "179, 189 and 190",
              "166, 172 and 202, the numbers of the last three entries in the run under his name",
              "185, 190 and 191, the numbers of her first three courses across three semesters",
              "190 alone, the seminar in invariant theory that opens the whole run of entries",
            ],
            correctIndex: 0,
            explanation:
              "Three courses, of which 190 is the invariant theory seminar Noether taught.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "Between which two names would Noether's index entry have fallen?",
            options: [
              "Nieschmidt and Nolte",
              "Nelson and Nieschmidt, the first two names printed in that part of the sequence",
              "Nolte and Peters, the latter being the drawing teacher listed on the same page",
              "Höltzcke and Nelson, which is where the sequence breaks on the previous page",
            ],
            correctIndex: 0,
            explanation:
              "Page 31 runs Nelson, Nieschmidt, Nolte. Noe comes after Nie and before Nol, and there is nothing there.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What is absent from the index in her place?",
            options: [
              "Any entry or cross-reference at all",
              "An entry with her name and no course numbers, unlike the entries for the professors",
              "A note directing the reader to look under Hilbert for the courses she supported",
              "A line recording her doctorate without recording any teaching she was doing",
            ],
            correctIndex: 0,
            explanation:
              "Not an entry without courses and not a cross-reference. Nothing, which is the state that makes the gap clean enough to reason from.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What does the index print beside each name besides the course numbers?",
            options: [
              "An address",
              "The faculty to which the teacher belonged and the rank they held within it",
              "The number of students who had enrolled in each of the courses listed",
              "The fee category applying to each of the courses that teacher was offering",
            ],
            correctIndex: 0,
            explanation:
              "The heading promises the staff with their addresses and their courses. This course omits the address when quoting, because it is not what the line is quoted for.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What does lesson 10 say a learner who checks another semester's index has found?",
            options: [
              "Something this course does not have",
              "A confirmation of the winter 1916/17 pattern, which the course assumes held throughout",
              "An error in the course, since only one index was ever printed for the whole run",
              "A duplicate of the entries already transcribed, the indexes being reprinted unchanged",
            ],
            correctIndex: 0,
            explanation:
              "Only the winter 1916/17 index was read. Stating the limit of a check is what makes the check worth anything.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What happens when a later reader asks the index what Noether taught?",
            options: [
              "They get nothing back",
              "They are directed to Hilbert's entry, which lists the courses she supported",
              "They find her under a variant spelling, which is why she is often said to be missing",
              "They find the course numbers but not the subjects, which are printed only in the body",
            ],
            correctIndex: 0,
            explanation:
              "And a reader asking what Hilbert taught gets three numbers, one of which is hers. That asymmetry is how a printing rule becomes the shape of the record.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "How does the exercise tell a learner to answer its questions?",
            options: [
              "From the page in front of them",
              "From lesson 9, checking the page only where the two seem to be in conflict",
              "From Tollmien's published list, which is the transcription most accounts rely on",
              "From memory, since the drill is testing recall of the entries rather than reading",
            ],
            correctIndex: 0,
            explanation:
              "Not from lesson 9. Where the two disagree the page wins, and the course asks to be told.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "Which spelling of her surname does the exercise ask for from the winter 1916/17 page?",
            options: [
              "Nöther",
              "Noether, spelled out, which is the form the catalogue uses in later semesters",
              "Emmy Noether, in full, which is the form printed in the summer of 1919",
              "E. Noether, the form used on the summer 1918 exercises class entry",
            ],
            correctIndex: 0,
            explanation:
              "That page uses the umlaut. The exercise accepts the spelled-out form, because the point of the drill is the reading and not the typography.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "Which occupation does the exercise ask a learner to find in the staff index?",
            options: [
              "The dance master's",
              "The curator's, whose office is listed at the head of the alphabetical sequence",
              "The librarian's, listed among the staff attached to the mathematics seminar",
              "The professor of physics, whose courses appear beside Hilbert's in the same index",
            ],
            correctIndex: 0,
            explanation:
              "Höltzcke, Tanzmeister. Finding him yourself is what makes the point about the index land: the test for appearing in it was not rank.",
            sourceLessonSlug: "transcribe-the-entry",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — 1919: the third attempt
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "einstein-to-klein",
      title: "12 · December 1918: a letter about an injustice",
      section: "Section 4 · 1919: the third attempt",
      body: `On 27 December 1918 Albert Einstein wrote to Felix Klein:

> "Beim Empfang der neuen Arbeit von Frl. Noether empfinde ich es wieder als grosse Ungerechtigkeit, dass man ihr die Venia legendi vorenthält." (Tollmien, n.d.-a)

On receiving Miss Noether's new work, he felt again that it was a great injustice that the venia legendi was being withheld from her.

**Three things that one sentence does.**

**It names an act, not an absence.** *Vorenthalten* is to withhold: to keep from someone something that is theirs to have. A reader who only had the catalogue would see a woman who is not listed. Einstein's verb says that somebody is holding something back, which is a claim about an agent and a rule, and it is the correct claim.

**It is dated, and the date is doing work.** By the end of 1918 the refusal of 5 November 1917 was a year old, and Noether had been teaching under Hilbert's name for four semesters. The injustice was not news. What the letter records is that it still looked like one from the outside, to a correspondent with no stake in Göttingen's internal procedure.

**It refers to work he had just received.** The letter says "the new work of Miss Noether" and does not name a paper. Noether's "Invariante Variationsprobleme" had been presented to the Göttingen scientific society by Klein on 26 July 1918, five months earlier (Tollmien, n.d.-a). That the two are the same work is an inference, and a reasonable one, but this course marks it as an inference rather than printing it as something the letter says.

**What this course cannot tell you.** Fourteen months separate the minister's refusal from Noether's third application. In that window the German state changed, and so did the government the ministry answered to. What the sources read for this course do not contain is any document explaining what changed inside the ministry, or who decided that the answer of 1917 would not be the answer of 1919. That question is filed as an open one rather than guessed at, and the honest shape of the story is: the refusal was principled and absolute in 1917, the same request went in again in 1919, and this time it went through.

A gap that stays a gap is not a failure of the course. It is the difference between a course and a story.

:::reveal What does the verb "vorenthält" in Einstein's letter claim, that a missing catalogue entry could not? ||| That something is being withheld, which is a claim about an agent and a rule rather than about an absence.

:::reveal Why does this course call the identification of "the new work" with the 1918 paper an inference? ||| Because the letter does not name a paper. It is a reasonable inference from the fact that Klein presented "Invariante Variationsprobleme" five months earlier, and it is marked as an inference rather than printed as a quotation.

:::reveal What does this course say it cannot explain about the years 1917 to 1919? ||| What changed inside the ministry between the principled refusal of November 1917 and the absence of objection in May 1919. No document read for this course answers it, so it is left open.

## Vocabulary
- **Vorenthalten**: to withhold, the verb Einstein used for what was being done to Noether, which names an act rather than a gap.
- **Inference**: a conclusion drawn from evidence rather than stated by it, marked as such here so that a reader can weigh it separately.
- **Open question**: a gap this course declines to fill, recorded so that a later reader knows nobody has answered it rather than assuming somebody has.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-third-application",
      title: "13 · The third application, stage by stage",
      section: "Section 4 · 1919: the third attempt",
      body: `The third attempt runs through the same procedure as the first, and the dates are the whole story.

- **18 January 1919.** The application.
- **31 January 1919.** The department votes.
- **15 February 1919.** The request goes forward.
- **8 May 1919.** The ministry states that it has no objection. Göttingen receives the letter on 11 May (Tollmien, n.d.-a).

**Now put the two attempts side by side.**

In 1915 the application was dated 20 July, and the request did not leave the university until the curator forwarded it on 9 December, with a comment against it. The ministry's answer arrived on 5 November 1917, nearly two years after that.

In 1919 the application was dated 18 January and the request went forward on 15 February, four weeks later. The answer came on 8 May, under three months after that.

**What speed is evidence of, and what it is not.** It is not evidence that anyone had changed their mind about mathematics. Noether's work in 1919 was better known than it had been in 1915, but nobody in the 1915 file had doubted the work either: only one referee of eight opposed her, and he did not argue that her mathematics was weak.

What the speed is evidence of is that the obstacle had been outside the university all along. When the ministry stopped refusing, the procedure that had ground for twenty-three months completed in under four. The same faculty, the same rules of procedure, the same candidate, and a different answer at the one stage that was never theirs to decide.

**What the record does not carry.** Dates and outcomes, yes. Reasons, no. The documents read for this course tell you when each stage happened and what it produced, and they do not tell you why the ministry's position changed. Anyone who tells you confidently why is going beyond these documents, and may be right, and should say which source they are relying on.

:::reveal What are the four dates of the third application? ||| The application on 18 January 1919, the department's vote on 31 January, the request going forward on 15 February, and the ministry's statement of no objection on 8 May, received on 11 May.

:::reveal How long did the ministry take in 1915 to 1917, and how long in 1919? ||| From the curator's forwarding on 9 December 1915 to the refusal of 5 November 1917 is nearly two years. From the request of 15 February 1919 to the answer of 8 May is under three months.

:::reveal What is the speed of the third attempt evidence of? ||| That the obstacle had been outside the university. Once the ministry stopped refusing, the same procedure with the same people completed in a fraction of the time.

## Vocabulary
- **Procedure**: the fixed sequence of stages a habilitation passed through, identical in 1915 and 1919, which is what makes the two attempts comparable.
- **No objection** (*keine Bedenken*): the ministry's answer of 8 May 1919, which removed the obstacle without repealing the decree of 1908.
- **Elapsed time as evidence**: using how long each stage took to locate where a process was actually being held up.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "her-own-name-in-the-catalogue",
      title: "14 · The trial lecture, and a line that finally says who",
      section: "Section 4 · 1919: the third attempt",
      body: `**28 May 1919.** The colloquium.

**4 June 1919.** The trial lecture, on "Fragen der Modultheorie", questions of module theory. Tollmien's account of the file then records the decision in six words: "einstimmig als Privatdozentin für Mathematik zugelassen", unanimously admitted as a Privatdozentin for mathematics (Tollmien, n.d.-a).

**Unanimously.** In November 1915 seventeen members of the same faculty had voted to say they were against admitting a woman under any circumstances. In June 1919 the vote was unanimous the other way. The mathematics had not changed. The candidate had not changed. What had changed was the answer from Berlin, and the faculty's vote followed it.

That is worth sitting with, because it cuts against the flattering reading in both directions. It is not a story of heroic colleagues finally prevailing, and it is not a story of a bigoted faculty at last defeated. It is a story about what a body does once the rule above it moves.

**The first line in her own name.** For the autumn intermediate semester of 1919, the *Herbstzwischensemester*, the catalogue announced:

> "Analytische Geometrie: Dr. Emmy Noether, Mittwoch und Sonnabend 11-1 Uhr, privatim." (Tollmien, n.d.-b)

**Two cautions, and they matter.** This one is Tollmien's transcription, not a reading of the page image: the scan for that volume was not opened for this course, because the library's manifest for it returned a server error on the day the sources were checked. So it sits at a different evidential level from the seven entries in Section 3, and it is marked that way here rather than blended in with them.

**Read it against the line from 1916 anyway.** The subject comes first, as always. Then the teacher slot, and it holds her name, her own doctorate, and her own first name spelled out. The phrase about support is gone. There is no professor in the line at all. And the fee word is "privatim", not "gratis", which is a change this course notes and does not interpret, for the reason lesson 8 gave.

Three and a half years of catalogues had said who was allowed to be named. This one says who taught.

:::reveal What was the subject of the trial lecture of 4 June 1919, and what followed it? ||| Questions of module theory. She was then unanimously admitted as a Privatdozentin for mathematics.

:::reveal What had changed between the faculty's votes of November 1915 and June 1919? ||| Not the mathematics and not the candidate, but the answer from the ministry. The faculty's vote followed the rule above it.

:::reveal Why does the autumn 1919 catalogue line sit at a different evidential level from the seven earlier entries? ||| It is Tollmien's transcription rather than a reading of the page image, because the library's manifest for that volume returned a server error when the sources were checked.

## Vocabulary
- **Colloquium**: the oral examination stage of the habilitation, held on 28 May 1919.
- **Trial lecture** (*Probevorlesung*): the public lecture that completed the habilitation, given on 4 June 1919 on questions of module theory.
- **Herbstzwischensemester**: the autumn intermediate semester of 1919, in which the catalogue first announced a course under her own name.
- **Evidential level**: how directly a statement rests on the document it describes, which is why a transcription and a page image are not filed together here.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/
Tollmien, C. (n.d.-b). *Noethers Vorlesungen*. Emmy Noether. https://www.emmy-noether.net/Noethers-Vorlesungen/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The third attempt",
      section: "Section 4 · 1919: the third attempt",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the date of Einstein's letter to Klein about Noether?",
            options: [
              "27 December 1918",
              "26 July 1918, the day Klein presented her paper to the Göttingen scientific society",
              "5 November 1917, the day the minister refused to authorise any exemption in her case",
              "18 January 1919, the day her third application to habilitate was formally submitted",
            ],
            correctIndex: 0,
            explanation:
              "27 December 1918, three weeks before the third application. The other three dates all belong to events on either side of it.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "To whom did Einstein write about the venia legendi being withheld from Noether?",
            options: [
              "Felix Klein",
              "David Hilbert, whose name stood on the catalogue entries for her courses at the time",
              "Ernst Osterath, the curator who had forwarded the 1915 request with a negative comment",
              "The Prussian minister himself, repeating the appeal Hilbert had made three years earlier",
            ],
            correctIndex: 0,
            explanation:
              "Klein, who had presented her paper to the Göttingen society that summer and who had suggested in 1915 that she apply at all.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does the German verb \"vorenthalten\" mean in Einstein's sentence?",
            options: [
              "To withhold",
              "To postpone, meaning that a decision on her case had been deferred to a later session",
              "To refuse, meaning that a formal application had been considered and turned down",
              "To forbid, meaning that a rule had been made prohibiting her from lecturing at all",
            ],
            correctIndex: 0,
            explanation:
              "To keep from someone something that is theirs to have. It names an agent and an act, which is more than a missing catalogue entry can show on its own.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does Einstein's word choice claim that a missing index entry cannot?",
            options: [
              "That somebody is holding something back",
              "That the faculty at Göttingen had acted improperly in its votes of November 1915",
              "That her work had been assessed by referees and found to meet the required standard",
              "That the Prussian decree of 1908 had been applied to her case in error by the ministry",
            ],
            correctIndex: 0,
            explanation:
              "A gap in a record is compatible with many explanations. Einstein's verb asserts one of them, and in this case the documents support it.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "How long had Noether been teaching under Hilbert's name by the date of Einstein's letter?",
            options: [
              "Four semesters",
              "Six semesters, which is the full run of catalogue entries from 1916/17 to 1919",
              "Two semesters, the winter of 1916/17 and the summer of 1917, with a gap thereafter",
              "Eight semesters, counting from her application to habilitate in the summer of 1915",
            ],
            correctIndex: 0,
            explanation:
              "Winter 1916/17 through summer 1918, with the winter 1918/19 entries current as he wrote. The full run of six semesters closes in the summer of 1919.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does the date of Einstein's letter show about the injustice he described?",
            options: [
              "It still looked like one from outside Göttingen",
              "That the ministry had reopened the case after the refusal of November the previous year",
              "That the faculty had asked him to intervene with the ministry on the candidate's behalf",
              "That the arrangement in the catalogue had only just begun and was not yet widely known",
            ],
            correctIndex: 0,
            explanation:
              "The refusal was a year old and the arrangement was routine. The letter records that a correspondent with no stake in Göttingen's procedure still read it as an injustice.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What work does Einstein's letter refer to?",
            options: [
              "\"The new work of Miss Noether\", unnamed",
              "\"Invariante Variationsprobleme\", which he names in the letter and discusses at length",
              "Her doctoral dissertation, which he had read in preparation for writing to Klein",
              "The lectures she was then giving under Hilbert's name in the winter semester of 1918/19",
            ],
            correctIndex: 0,
            explanation:
              "The letter does not name a paper. Identifying it with the 1918 paper is a reasonable inference, and this course marks it as an inference rather than printing it as a quotation.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "Who presented \"Invariante Variationsprobleme\" to the Göttingen scientific society, and when?",
            options: [
              "Klein, on 26 July 1918",
              "Hilbert, on 27 December 1918, the same day Einstein wrote about the new work",
              "Noether herself, on 13 July 1915, in the talk that preceded her first application",
              "Landau, as dean of the philosophical faculty, on 8 May 1919 when the ministry replied",
            ],
            correctIndex: 0,
            explanation:
              "Klein presented it, five months before Einstein's letter. Her own talk to the Mathematical Society was three years earlier and is a different event.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "Why does this course mark the identification of \"the new work\" as an inference?",
            options: [
              "The letter names no paper",
              "Because two of Noether's papers appeared in the second half of 1918 and either could fit",
              "Because Tollmien's transcription of the letter is known to differ from the original text",
              "Because Einstein's correspondence of that year survives only in a later published edition",
            ],
            correctIndex: 0,
            explanation:
              "The habit is the point. Marking an inference keeps it separate from the things the document actually says, so a later reader can weigh the two differently.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "How many months separate the minister's refusal from Noether's third application?",
            options: [
              "Fourteen",
              "Twenty-three, the same span the ministry took to answer the first request from Göttingen",
              "Four, which is why the third attempt is sometimes described as an immediate reapplication",
              "Six, counting from the presentation of her paper by Klein in the summer of 1918",
            ],
            correctIndex: 0,
            explanation:
              "November 1917 to January 1919. Twenty-three months is the span of the ministry's own silence on the first request, which is a different thing.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does this course say about why the ministry's position changed between 1917 and 1919?",
            options: [
              "No document read for the course answers it",
              "That the decree of 1908 had been formally repealed in the interval by the new government",
              "That Hilbert's second meeting with the minister in 1918 secured a private undertaking",
              "That Einstein's letter to Klein was forwarded to Berlin and changed the ministry's view",
            ],
            correctIndex: 0,
            explanation:
              "It is filed as an open question rather than guessed at. The refusal was absolute in 1917, the same request went in again in 1919, and this time it went through.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does lesson 12 say is the difference between a course and a story?",
            options: [
              "A gap that stays a gap",
              "A course cites every claim it makes, whereas a story may rest on a single retelling",
              "A course is written from primary documents and a story from secondary summaries",
              "A course states its conclusions first and a story arranges its material chronologically",
            ],
            correctIndex: 0,
            explanation:
              "Leaving an unanswered question visible is a choice, and it is the choice that keeps the rest of the account checkable.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What is an inference, as this course uses the word?",
            options: [
              "A conclusion drawn from evidence, not stated by it",
              "A claim supported by two independent sources that agree in every material respect",
              "A statement quoted from a document whose original has not itself been examined",
              "A reading of a document that a later historian has published and others have repeated",
            ],
            correctIndex: 0,
            explanation:
              "Marking one as such lets a reader weigh it separately from the document's own words, which is the difference between a chain of evidence and a chain of assumptions.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What is the date of Noether's third application to habilitate?",
            options: [
              "18 January 1919",
              "31 January 1919, the day the department voted on the application it had received",
              "15 February 1919, the day the request went forward from the university to the ministry",
              "27 December 1918, the day Einstein wrote to Klein about the withholding of the venia legendi",
            ],
            correctIndex: 0,
            explanation:
              "18 January 1919. The other two 1919 dates are the next two stages of the same procedure, a fortnight and a month later.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "When did the department vote on the third application?",
            options: [
              "31 January 1919",
              "6 November 1915, the date of the departmental vote on the first application to habilitate",
              "28 May 1919, the date of the colloquium that preceded the trial lecture that June",
              "11 May 1919, the date on which the ministry's letter was received at Göttingen",
            ],
            correctIndex: 0,
            explanation:
              "Thirteen days after the application. The 1915 departmental vote is the one that went ten for, seven against, with two abstentions.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "When did the request go forward to the ministry in 1919?",
            options: [
              "15 February 1919",
              "9 December 1915, when the curator forwarded the first request with a negative comment",
              "26 November 1915, the date written on the first application sent to the Prussian ministry",
              "8 May 1919, when the ministry stated that it had no objection to the habilitation",
            ],
            correctIndex: 0,
            explanation:
              "Four weeks after the application. In 1915 the same stage took from 20 July to 9 December, and arrived with a comment against it.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What did the ministry say on 8 May 1919, and when did Göttingen receive it?",
            options: [
              "No objection, received on 11 May",
              "That an exemption from the 1908 decree had been granted, received on 28 May",
              "That the question could only be decided as a matter of principle, received on 11 May",
              "That the faculty should proceed to a colloquium and a trial lecture, received on 4 June",
            ],
            correctIndex: 0,
            explanation:
              "Three days in the post. The wording about deciding the question as a matter of principle is the language of the 1917 refusal, which is the answer this one replaced.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "How long did the ministry take to answer the first request?",
            options: [
              "Nearly two years",
              "Under three months, the same as the interval between the 1919 request and its answer",
              "Four weeks, which is why the curator's negative comment is thought to have been decisive",
              "Fourteen months, the same as the interval between the refusal and the third application",
            ],
            correctIndex: 0,
            explanation:
              "Forwarded on 9 December 1915, answered on 5 November 1917. The other spans in this question are all real spans in the case, attached to other pairs of dates.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "How long did the ministry take to answer the 1919 request?",
            options: [
              "Under three months",
              "Nearly two years, the same as the interval the first request had taken to be decided",
              "Three days, which is the time the letter took to travel from Berlin to Göttingen",
              "Thirteen days, the interval between the application and the departmental vote that year",
            ],
            correctIndex: 0,
            explanation:
              "15 February to 8 May 1919. Three days is the postal interval, and thirteen days is the gap between two earlier stages.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What is the speed of the third attempt evidence of?",
            options: [
              "The obstacle had been outside the university",
              "That the faculty had reversed its own view of the candidate's mathematical standing",
              "That the procedure had been simplified after the war to clear a backlog of applications",
              "That the curator's office had been abolished, removing the stage that caused the delay",
            ],
            correctIndex: 0,
            explanation:
              "The same faculty and the same procedure completed in under four months once the ministry stopped refusing. The stage that had held it up was the one the university never controlled.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What is the speed of the third attempt NOT evidence of, according to lesson 13?",
            options: [
              "A change of mind about her mathematics",
              "A change in the ministry's willingness to allow the habilitation to proceed at Göttingen",
              "A difference between the 1915 procedure and the procedure followed four years later",
              "The removal of the curator's power to attach a comment to a request being forwarded",
            ],
            correctIndex: 0,
            explanation:
              "Nobody in the 1915 file had doubted the work. Only one referee of eight opposed her, and he did not argue that her mathematics was weak.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What does the 1919 record carry, and what does it not?",
            options: [
              "Dates and outcomes, not reasons",
              "Reasons and outcomes, but no reliable dates for any stage after the February request",
              "A full account of the ministry's deliberations, transcribed by Tollmien from the file",
              "Only the faculty's own minutes, the ministry's side of the correspondence being lost",
            ],
            correctIndex: 0,
            explanation:
              "Anyone who tells you confidently why the ministry changed its position is going beyond these documents, and should say which source they are relying on.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "Which stage of the habilitation was never the university's to decide?",
            options: [
              "The ministry's answer",
              "The departmental vote, which the ministry could overturn on the curator's recommendation",
              "The trial lecture, which had to be given before an examiner appointed from Berlin",
              "The referee reports, which were commissioned by the ministry rather than by the faculty",
            ],
            correctIndex: 0,
            explanation:
              "Every other stage belonged to the faculty. The one that decided the case belonged to the body that owned the 1908 decree.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "How many stages does lesson 13 date for the third attempt before the ministry replied?",
            options: [
              "Three",
              "Seven, the same number of stages the first attempt passed through in the autumn of 1915",
              "One, since the application went directly to the ministry without a faculty vote in 1919",
              "Five, including the colloquium and the trial lecture held after the ministry had replied",
            ],
            correctIndex: 0,
            explanation:
              "The application, the departmental vote and the request going forward. The colloquium and the trial lecture came after the ministry's answer, not before it.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What was the date of the colloquium?",
            options: [
              "28 May 1919",
              "4 June 1919, the date on which she delivered the trial lecture on module theory",
              "8 May 1919, the date on which the ministry stated that it had no objection to proceed",
              "31 January 1919, the date the department voted on the third application it had received",
            ],
            correctIndex: 0,
            explanation:
              "The colloquium on 28 May, the trial lecture a week later. The two are separate stages and both belong to the third attempt.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What was the subject of the trial lecture of 4 June 1919?",
            options: [
              "Questions of module theory",
              "Invariant variational problems, the subject of the paper Klein had presented in 1918",
              "Invariant theory, the subject of the first course she taught under Hilbert's name",
              "Partial differential and integral equations, the subject of catalogue entry 166",
            ],
            correctIndex: 0,
            explanation:
              "\"Fragen der Modultheorie\". The other three subjects are all real subjects of hers, and all belong to other documents in this course.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "In what terms does Tollmien's account record the decision that followed the trial lecture?",
            options: [
              "Unanimously admitted as a Privatdozentin for mathematics",
              "Admitted by a majority of the faculty, the minority report of 1915 being formally withdrawn",
              "Admitted on the ministry's instruction, the faculty's own vote being dispensed with",
              "Admitted provisionally, with a review to follow at the end of her first full semester",
            ],
            correctIndex: 0,
            explanation:
              "\"Einstimmig als Privatdozentin für Mathematik zugelassen.\" The unanimity is the detail that makes the comparison with 1915 worth drawing.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What does the unanimity of June 1919 cut against?",
            options: [
              "Both the heroic and the villainous readings",
              "The claim that the ministry rather than the faculty had been the obstacle throughout",
              "The claim that the 1915 faculty contained members opposed to her in principle",
              "The claim that the procedure in 1919 was the same procedure as the one used in 1915",
            ],
            correctIndex: 0,
            explanation:
              "It is not colleagues finally prevailing and it is not a bigoted faculty at last defeated. It is what a body does once the rule above it moves.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "In which semester did the catalogue first announce a course in Noether's own name?",
            options: [
              "The autumn intermediate semester of 1919",
              "The summer semester of 1919, which closes the run of entries taught under Hilbert's name",
              "The winter semester of 1918/19, the semester that carries two entries rather than one",
              "The winter semester of 1919/20, once the trial lecture of June had been formally minuted",
            ],
            correctIndex: 0,
            explanation:
              "The Herbstzwischensemester of 1919, immediately after the summer semester that closes the earlier run.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What was the subject of that first course in her own name?",
            options: [
              "Analytic geometry",
              "Integral equations, the subject of the last course announced under Hilbert's name in 1919",
              "Questions of module theory, the subject of the trial lecture she had given that June",
              "Invariant theory, the subject of the first course she taught under Hilbert's name in 1916",
            ],
            correctIndex: 0,
            explanation:
              "\"Analytische Geometrie: Dr. Emmy Noether.\" Every other subject offered here is real and belongs to a different document in this course.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "Why does the autumn 1919 catalogue line sit at a different evidential level from the seven earlier entries?",
            options: [
              "It is a transcription, not a page image read",
              "Because the volume was printed after the reform of the catalogue's format later that year",
              "Because two published transcriptions of it disagree about the days and hours it gives",
              "Because the course number it carries is missing from the staff index of the same volume",
            ],
            correctIndex: 0,
            explanation:
              "The library's manifest for that volume returned a server error on the day the sources were checked, so the scan was never opened. The course marks that rather than blending it in.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What is missing from the autumn 1919 line that had been in every earlier entry?",
            options: [
              "The phrase about support, and any professor at all",
              "The fee word, which the catalogue stopped printing on courses given by a Privatdozent",
              "The days and hours, which the autumn intermediate semester left to be arranged later",
              "The subject of the course, which that semester's catalogue listed in a separate column",
            ],
            correctIndex: 0,
            explanation:
              "The teacher slot holds her name, her doctorate and her first name spelled out. There is no professor in the line, and nothing supported.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What fee word does the autumn 1919 line carry?",
            options: [
              "privatim",
              "gratis, as six of the seven entries taught under Hilbert's name had carried before it",
              "privatissime und gratis, the pair printed on the winter 1917/18 entry in the earlier run",
              "No fee word at all, which is how the transcription differs from the earlier entries",
            ],
            correctIndex: 0,
            explanation:
              "The course notes the change and does not interpret it, for the reason lesson 8 gave: no source read for this course defines the Göttingen fee categories.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What had changed between November 1915 and June 1919, on this record?",
            options: [
              "The answer from Berlin",
              "The mathematics, which by 1919 had made her reputation secure among the referees",
              "The composition of the faculty, seventeen of whose members had left in the interval",
              "The procedure, which by 1919 no longer required a vote of the whole faculty at all",
            ],
            correctIndex: 0,
            explanation:
              "Not the mathematics and not the candidate. The faculty's vote followed the rule above it, which is the least flattering and best supported reading of the sequence.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What does the phrase \"evidential level\" mean in this course?",
            options: [
              "How directly a statement rests on its document",
              "How many independent sources have published the same statement about a document",
              "How recently a document was digitised and made available for a reader to consult",
              "How well a document's claims agree with the other documents held in the same file",
            ],
            correctIndex: 0,
            explanation:
              "It is why a transcription and a page image are not filed together here, even when they say the same thing.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What does lesson 14 say the catalogues of 1916 to 1919 had been saying?",
            options: [
              "Who was allowed to be named",
              "Who had been appointed to each chair in mathematics by the Prussian ministry",
              "Which courses the faculty had approved for the examination requirements of that year",
              "Which of the university's teachers were being paid from the students' own fees",
            ],
            correctIndex: 0,
            explanation:
              "And the autumn 1919 line says who taught. That is the whole distinction the course is built on, stated in one pair of sentences.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What kind of body does lesson 14 say the 1919 faculty vote shows a faculty to be?",
            options: [
              "One that follows the rule above it",
              "One that decides a candidate's case on the referee reports it has commissioned",
              "One whose votes of principle determine what it will actually do in a particular case",
              "One that can set aside a ministry decree once its members have changed their minds",
            ],
            correctIndex: 0,
            explanation:
              "Seventeen had declared themselves opposed under all circumstances in 1915; the vote in 1919 was unanimous the other way, with nothing in the mathematics to explain it.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What was the interval between the colloquium and the trial lecture?",
            options: [
              "A week",
              "Three months, the same as the interval between the request and the ministry's reply",
              "A single day, the two stages being held in the same session of the faculty that May",
              "Four weeks, the same as the interval between the application and the request in 1919",
            ],
            correctIndex: 0,
            explanation:
              "28 May to 4 June 1919. The other intervals in this question are all real intervals from the same attempt.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "Which days did the autumn 1919 course run on, in Tollmien's transcription?",
            options: [
              "Wednesday and Saturday",
              "Monday and Thursday, as the winter 1918/19 lecture course numbered 166 had run",
              "Monday only, as five of the seven entries taught under Hilbert's name had run",
              "Thursday only, as the summer 1918 exercises class had run on the page image",
            ],
            correctIndex: 0,
            explanation:
              "\"Mittwoch und Sonnabend.\" The other patterns offered are all real patterns from the earlier run of entries.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What had happened a year before Einstein's letter that makes its date worth noticing?",
            options: [
              "The minister had refused the exemption",
              "The faculty had voted for the second time on whether to recommend a refusal",
              "Klein had presented her paper to the Göttingen scientific society that summer",
              "The catalogue had announced the first course under Hilbert's name with her support",
            ],
            correctIndex: 0,
            explanation:
              "5 November 1917. By the end of 1918 the refusal was a year old and the catalogue arrangement was routine, and it still read as an injustice from outside.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does Einstein's letter show about how the arrangement looked from outside Göttingen?",
            options: [
              "Still like an injustice",
              "Like a sensible compromise that had solved the practical problem for both parties",
              "Like a temporary measure that everyone expected the ministry to end within months",
              "Like an arrangement nobody outside the faculty had heard of or understood",
            ],
            correctIndex: 0,
            explanation:
              "The correspondent had no stake in Göttingen's internal procedure, and the injustice was not news to him, which is part of what the date records.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What changed in Germany during the fourteen months this course leaves unexplained?",
            options: [
              "The state, and the government the ministry answered to",
              "The decree of 1908, which was repealed in the last months of the war",
              "The composition of the Göttingen faculty, which turned over almost entirely",
              "The habilitation procedure, which was shortened by the removal of a stage",
            ],
            correctIndex: 0,
            explanation:
              "That much the course says. What it does not have is any document explaining what changed inside the ministry, or who decided that 1917's answer would not be 1919's.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What did the curator's stage do to the first request that the 1919 procedure did not repeat?",
            options: [
              "It delayed it by nearly five months and arrived against it",
              "It returned the request to the faculty for a further vote before forwarding it",
              "It replaced the faculty's text with a version of the curator's own drafting",
              "It sent the request to the academic senate before it went on to the ministry",
            ],
            correctIndex: 0,
            explanation:
              "Applied 20 July 1915, forwarded 9 December 1915 with a negative comment. In 1919 the application of 18 January went forward on 15 February.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What did nobody in the 1915 file doubt?",
            options: [
              "The quality of her work",
              "That the ministry would grant an exemption once the faculty had asked for one",
              "That the decree of 1908 permitted exceptions in sufficiently strong individual cases",
              "That the historical and philological department would support the application",
            ],
            correctIndex: 0,
            explanation:
              "Only one referee of eight opposed her, and he did not argue that her mathematics was weak. That is why the speed of 1919 cannot be read as a change of mathematical mind.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What should a reader ask of anyone who explains confidently why the ministry changed its position?",
            options: [
              "Which source they are relying on",
              "Whether they have read the German original rather than an English translation of it",
              "Whether the explanation is consistent with the faculty's own votes of November 1915",
              "Whether they have counted the catalogue entries for themselves on the page images",
            ],
            correctIndex: 0,
            explanation:
              "They may be right. They are going beyond the documents read for this course, and the useful response is to find out which document they have that this course does not.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "Which three stages of the third attempt fell inside four weeks of each other?",
            options: [
              "The application, the departmental vote and the request",
              "The colloquium, the trial lecture and the faculty's unanimous admission of her",
              "The ministry's letter, its receipt at Göttingen and the colloquium that followed",
              "The referee reports, the commission's vote and the vote of the whole faculty",
            ],
            correctIndex: 0,
            explanation:
              "18 January, 31 January and 15 February 1919. In 1915 the equivalent span ran from July to December.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "How many days did the ministry's 1919 letter take to reach Göttingen?",
            options: [
              "Three",
              "Thirteen, the same as the gap between the application and the departmental vote",
              "Eight, the same as the gap between the colloquium and the trial lecture that followed",
              "Twenty-eight, the same as the gap between the application and the request",
            ],
            correctIndex: 0,
            explanation:
              "Dated 8 May and received on 11 May 1919. Small intervals like this are worth keeping straight, because they are the easiest details for a retelling to merge.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What comes first in the autumn 1919 catalogue line, as in every entry before it?",
            options: [
              "The subject",
              "The teacher's name, which in this entry is hers rather than a professor's",
              "The fee word, which the catalogue moved to the front of the entry that semester",
              "The days and the hours, which in this entry are Wednesday and Saturday",
            ],
            correctIndex: 0,
            explanation:
              "The format did not change. What changed is who the teacher slot holds, and that there is no support line after it.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What does lesson 14 say sitting with the unanimity of 1919 protects you from?",
            options: [
              "Both flattering readings of the faculty",
              "Concluding that the ministry rather than the faculty had held the case up throughout",
              "Assuming that the trial lecture had been a formality arranged in advance",
              "Believing that the catalogue entries had ended before the habilitation was granted",
            ],
            correctIndex: 0,
            explanation:
              "Not heroic colleagues finally prevailing, and not a bigoted faculty at last defeated. It is what a body does once the rule above it moves.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "Why was the autumn 1919 scan not read for this course?",
            options: [
              "The library's manifest for it returned a server error",
              "Because the library has not digitised the volumes for the academic year 1919/20",
              "Because the volume is held under terms that do not permit even reading it online",
              "Because the entry had already been checked against a second published transcription",
            ],
            correctIndex: 0,
            explanation:
              "A failed fetch is reported as a failed fetch. That is why the line is given as Tollmien's transcription rather than filed with the seven read from page images.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — What she made, and what came after
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-theorem-connects",
      title: "15 · What the theorem connects, in words",
      section: "Section 5 · What she made, and what came after",
      body: `This course carries no equations, and that is a decision rather than an omission. What follows is stated at the level the sources read for it support, and no further.

**Two ideas, first.**

A **symmetry** is a change you can make to something that leaves something else about it the same. Turn a square by a quarter and it looks as it did. Move an experiment from one bench to another and, if the physics does not care where you are standing, the outcome is the same.

A **conservation law** says a particular quantity does not change. Whatever else happens in a system, that quantity comes out the same as it went in. Energy and momentum are the familiar examples.

Those had been two separate kinds of statement, the first about the form of a thing and the second about a quantity in it.

**What the 1918 paper did.** Tollmien's account states that "Invariante Variationsprobleme" set out "einen bis dahin unbekannten Zusammenhang von Symmetrie- und Erhaltungssätzen (die beiden Noether-Theoreme)": a connection, unknown until then, between theorems about symmetry and theorems about conservation, the two Noether theorems (Tollmien, n.d.-a).

That is the claim, in the words of the source. A connection between symmetries and conservation laws, established where there had not been known to be one, and carrying her name in the plural because there are two results, not one.

**What this course does not do here, and why.** It does not give you a precise statement of either theorem, because a precise statement is a mathematical object and the sources read for this course describe the result rather than state it. A course that paraphrases a theorem it has not read the statement of is doing the same thing to Noether's mathematics that a retelling does to her biography: producing a confident sentence that nobody checked. If you want the statement, the paper is published and the reference is in the sources below.

**Why it belongs in a course about credit.** For six semesters the printed record of this university named someone else as the teacher of Noether's courses. During those same semesters she produced the work that her own account of it says connected two families of results that nobody had connected. The catalogue was not describing a difficult case at the margin of the rules. It was applying a rule, and the rule did not look at the work.

:::reveal In one sentence each, what is a symmetry and what is a conservation law? ||| A symmetry is a change you can make that leaves something the same. A conservation law says a particular quantity does not change, whatever else happens.

:::reveal What does Tollmien's account say the 1918 paper established? ||| A connection, unknown until then, between theorems about symmetry and theorems about conservation, named the two Noether theorems.

:::reveal Why does this course decline to state the theorems precisely? ||| Because its sources describe the result rather than state it, and paraphrasing a theorem whose statement you have not read produces a confident sentence nobody has checked.

## Vocabulary
- **Symmetry**: a change that can be made to something while leaving something else about it unchanged.
- **Conservation law**: a statement that a particular quantity in a system does not change over time.
- **The two Noether theorems**: the plural name Tollmien's account uses for the results in "Invariante Variationsprobleme", because there are two.
- **Describing versus stating**: the difference between saying what a result connects and setting out the result itself, which is the line this lesson refuses to cross.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-paper-of-1918",
      title: "16 · The paper of 1918, and a link the record does not make",
      section: "Section 5 · What she made, and what came after",
      body: `**The paper.** "Invariante Variationsprobleme", in the *Nachrichten* of the royal scientific society at Göttingen, mathematical and physical class, volume 37 (1918), pages 235 to 257, presented by Klein on 26 July 1918 (Tollmien, n.d.-a).

**The link you will often meet, and what this course does with it.** Many accounts say that this paper was Noether's habilitation thesis, the work the university finally accepted. It is an attractive claim, because it closes the story neatly: the same paper that founded a result physicists still use was the paper that bought her the right to be named.

None of the sources read for this course says it.

**What they do say, in order.** Klein presented the paper on 26 July 1918. Einstein wrote to Klein on 27 December 1918 about receiving "the new work of Miss Noether" and called the withholding of the venia legendi a great injustice. The third application is dated 18 January 1919. The trial lecture, on 4 June 1919, was on questions of module theory.

That is a sequence. A sequence is not a statement that one document served as another's thesis, and the trial lecture's subject is a small piece of evidence pointing the other way.

**Why this matters more than the fact does.** You will lose almost nothing by not knowing whether the 1918 paper was formally the habilitation work. You will lose a great deal by getting into the habit of promoting an attractive sequence into a stated fact, because that habit is how the four errors in Section 6 got into circulation in the first place. Each of them is a sentence somebody found plausible and nobody checked.

So this course leaves the link open and files it as a question, with the document that would settle it named: the habilitation file itself, which Tollmien worked through, records what was submitted.

**One thing the record does settle.** The paper exists, it is dated, it is published, its page numbers are known, and it was presented to a scientific society by a named professor on a named day while the catalogue was still calling her support. Whatever its formal relationship to her habilitation, it is the strongest available answer to anyone who imagines the naming rule had anything to do with the quality of the work.

:::reveal What is the full publication reference for "Invariante Variationsprobleme"? ||| The Nachrichten of the royal scientific society at Göttingen, mathematical and physical class, volume 37 (1918), pages 235 to 257, presented by Klein on 26 July 1918.

:::reveal Why does this course refuse to say that the 1918 paper was her habilitation thesis? ||| Because none of the sources read for it says so. What they give is a sequence of dates, and the trial lecture's subject, module theory, points mildly the other way.

:::reveal What habit is this lesson actually warning against? ||| Promoting an attractive sequence into a stated fact. That habit is how each of the four errors in Section 6 got into circulation.

## Vocabulary
- **Nachrichten**: the proceedings of the Göttingen scientific society, where "Invariante Variationsprobleme" was published in 1918.
- **Presented by**: the formal act by which a member of a society communicated a paper, here Klein on 26 July 1918.
- **Open link**: a connection between two documents that a course declines to assert because no source states it, recorded as a question with the document that would settle it named.

## Sources
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "a-title-without-a-salary",
      title: "17 · 1922: a title with no salary",
      section: "Section 5 · What she made, and what came after",
      body: `Admission as a Privatdozentin in 1919 settled the question of who could be named. It did not settle the question of what she was paid.

**1922.** Noether was given the title *außerordentlicher Professor*. Ihringer's account records that no salary was attached to it (Ihringer, 2019).

**1924.** Ihringer gives her income for that year as 3000 marks, against 4000 marks for Paul Bernays (Ihringer, 2019).

**Read those two facts carefully, and no further than they go.** The 1922 fact is clean: a professorial title, and no salary attached to it. The 1924 comparison is a pair of figures for two people in the same place in the same year, and Ihringer gives them as incomes. What they cover, how each was made up, and what other members of the faculty received are not things this course knows, so it prints the comparison and stops.

**What a title without a salary does to a record.** It is the same mechanism as the catalogue line, one step further on. A reader in 1923 looking for Emmy Noether in a list of the university's professors would now find her, and would conclude that the question had been resolved. The title is the part that gets recorded. The absence of a salary is the part that does not, unless somebody like Ihringer goes and looks.

This is worth generalising, because it is the most portable idea in this course. **A record tends to carry the honour and drop the condition.** A title, an award, a named lectureship, a credit line: these are the things a record is built to hold. Whether the person could pay their rent from it is a fact of a different kind, and the format usually has no field for it.

**And the question the sources do not answer.** What Noether was paid, if anything, for the six semesters of teaching between 1916 and 1919 is not settled by anything read for this course. The fee words in the catalogue do not settle it, for the reason lesson 8 gave. It is an open question and it is filed as one.

:::reveal What title was Noether given in 1922, and what was attached to it? ||| The title of außerordentlicher Professor, with no salary attached.

:::reveal What figures does Ihringer give for 1924, and what does this course refuse to add to them? ||| Her income at 3000 marks against Paul Bernays's 4000. The course does not claim to know what the figures covered, how they were made up, or what other faculty received.

:::reveal What does this lesson say a record tends to do with an honour and with a condition? ||| It carries the honour and drops the condition. A title has a field in the format; whether it came with a living does not.

## Vocabulary
- **Außerordentlicher Professor**: the professorial title Noether was given in 1922, which in her case carried no salary.
- **Paul Bernays**: the Göttingen colleague whose 1924 income Ihringer sets beside hers.
- **The honour and the condition**: this course's name for the pair a record splits, keeping the title and losing the terms it came on.
- **Open question**: what Noether was paid, if anything, for the teaching of 1916 to 1919, which no source read for this course answers.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf`,
    },
    {
      slug: "nineteen-thirty-three",
      title: "18 · 1933, and the end of the record",
      section: "Section 5 · What she made, and what came after",
      body: `The last part of this story is short, and this course keeps it short on purpose, because it has fewer documents here than it has for 1915.

**7 April 1933.** Ihringer's account names the civil-service law of that date (Ihringer, 2019).

**October 1933.** She emigrated, to Bryn Mawr in Pennsylvania (Ihringer, 2019).

**14 April 1935.** She died (Ihringer, 2019). She was 53.

**What this course does not have.** It does not have the document that ended her position at Göttingen, and it does not quote one. Ihringer's account moves from the law to the emigration, and this course reports that sequence as a sequence, for the same reason lesson 16 refused a more attractive one.

**What the sequence is enough to say.** In 1908 a state decided who could be named as a teacher. In 1915 and 1917 the same state refused to make an exception. In 1919 it stopped objecting, and a faculty that had been divided voted unanimously. In 1933 a law of that state is the next thing in the record, and six months later she was on the other side of an ocean. Whatever else is true, the decisive actor in this record was never the mathematics department. It was the state, four times, in four different directions.

**The thing this course was built to leave you with.** Somebody reading the Göttingen catalogue for 1916/17 with no other information would conclude that Hilbert taught invariant theory that winter and that a Miss Dr. Nöther helped. The catalogue is not lying. It is recording, accurately, a permission that had been decided elsewhere. The correction does not come from reading the catalogue harder. It comes from finding the decree, the reports, the tallies, the cover note and the refusal, and reading them beside it.

That is the whole method, and it transfers. Where a record looks thin, ask what rule decided its shape, and then go and find the rule.

:::reveal What three dates does this course give for the end of Noether's life? ||| The civil-service law of 7 April 1933, her emigration to Bryn Mawr in October 1933, and her death on 14 April 1935.

:::reveal What does this course say it does not have for 1933? ||| The document that ended her position at Göttingen. It reports Ihringer's sequence as a sequence and does not quote a dismissal.

:::reveal What is the method this course says transfers to other cases? ||| Where a record looks thin, ask what rule decided its shape, and then go and find the rule.

## Vocabulary
- **Civil-service law of 7 April 1933**: the German law of that date named in Ihringer's account, immediately before Noether's emigration.
- **Bryn Mawr**: the college in Pennsylvania where she went after leaving Germany in October 1933.
- **Sequence reported as a sequence**: giving the order of events without asserting a causal link the sources do not state.
- **The rule behind the shape**: the transferable move of this course, which is to ask what rule produced a record's shape and then go and read that rule.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · What she made, and what came after",
      section: "Section 5 · What she made, and what came after",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a symmetry, as lesson 15 defines it?",
            options: [
              "A change that leaves something else the same",
              "A quantity in a system that comes out of a process exactly as it went into it",
              "A pair of results that hold together, so that proving one of them proves the other",
              "A property of an equation that allows the same solution to be reached by two routes",
            ],
            correctIndex: 0,
            explanation:
              "Turn a square by a quarter and it looks as it did. Move an experiment to another bench and, if the physics does not care where you stand, the outcome is the same.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What is a conservation law, as lesson 15 defines it?",
            options: [
              "A statement that a quantity does not change",
              "A statement that a system returns to its starting configuration after a fixed interval",
              "A statement that two different measurements of the same system must agree exactly",
              "A statement that a transformation can be undone by applying its inverse afterwards",
            ],
            correctIndex: 0,
            explanation:
              "Whatever else happens in the system, that quantity comes out as it went in. Energy and momentum are the familiar examples.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does Tollmien's account say \"Invariante Variationsprobleme\" established?",
            options: [
              "A connection between symmetry and conservation theorems",
              "A method for solving variational problems that had resisted every earlier approach",
              "A proof that energy is conserved in the general theory of relativity as Einstein stated it",
              "A classification of the symmetries a physical system can have, with the two Noether types",
            ],
            correctIndex: 0,
            explanation:
              "The German is \"einen bis dahin unbekannten Zusammenhang von Symmetrie- und Erhaltungssätzen (die beiden Noether-Theoreme)\": a connection unknown until then.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Why does the name of the result appear in the plural?",
            options: [
              "There are two results, not one",
              "Because two mathematicians arrived at the same connection independently in the same year",
              "Because the paper states one theorem and its converse, which are counted separately",
              "Because the result holds in two branches of physics, which are named as separate cases",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien's page calls them \"die beiden Noether-Theoreme\", the two Noether theorems. A course that says \"the theorem\" is already slightly off the source.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Why does lesson 15 decline to state either theorem precisely?",
            options: [
              "Its sources describe the result rather than state it",
              "Because the app cannot display mathematical notation, so any statement would be unreadable",
              "Because the precise statement is disputed between the paper's original and later versions",
              "Because a precise statement would require the learner to have studied variational calculus",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing a theorem whose statement you have not read produces a confident sentence nobody has checked, which is exactly what this course is against.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does lesson 15 say a course does to a theorem when it paraphrases one it has not read?",
            options: [
              "The same thing a retelling does to a biography",
              "It makes the result accessible at the cost of a precision most readers will not miss",
              "It creates a version that later writers will cite in preference to the original paper",
              "It commits the error the Göttingen catalogue committed when it printed the support line",
            ],
            correctIndex: 0,
            explanation:
              "Producing a confident sentence that nobody checked. The discipline the course applies to Noether's life it also applies to her mathematics.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Why does lesson 15 say the theorem belongs in a course about credit?",
            options: [
              "The rule did not look at the work",
              "Because the paper was the thesis on which the university finally admitted her in 1919",
              "Because the result is named after her, which shows the record correcting itself in time",
              "Because Hilbert's own name on the catalogue line implies a claim to a share in the result",
            ],
            correctIndex: 0,
            explanation:
              "The catalogue was not weighing a difficult case at the margin. It was applying a rule, and the rule had no field for what the teacher had done.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Which two kinds of statement had been separate before the 1918 paper?",
            options: [
              "Statements about form and about quantity",
              "Statements about physics and about pure mathematics, which the paper brought together",
              "Statements about invariants and about the variational problems they arise in naturally",
              "Statements proved by construction and statements proved by reduction to the absurd",
            ],
            correctIndex: 0,
            explanation:
              "A symmetry is about the form of a thing and a conservation law is about a quantity in it. The paper connected the two families.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Where does lesson 15 tell a reader who wants the precise statement to go?",
            options: [
              "To the published paper",
              "To Ihringer's translation, which sets out both theorems in English for a general reader",
              "To MacTutor's biography, which gives the statement alongside the catalogue entry",
              "To the trial lecture on module theory, which Tollmien's account summarises in full",
            ],
            correctIndex: 0,
            explanation:
              "The paper is published and the reference is in the lesson's sources. Naming where the answer is, rather than approximating it, is the whole move.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does this course carry none of, by decision?",
            options: [
              "Equations",
              "Direct quotations in German, which are given in English translation throughout instead",
              "Dates that rest on a single source, every one having been confirmed against a second",
              "References to other courses in the catalog, so that it can be read entirely on its own",
            ],
            correctIndex: 0,
            explanation:
              "It is a decision rather than an omission, and lesson 15 says what it costs: the result is described at the level the sources support and no further.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "In which publication did \"Invariante Variationsprobleme\" appear?",
            options: [
              "The Göttingen society's Nachrichten",
              "The Mathematische Annalen, edited at Göttingen by Klein and Hilbert during those years",
              "The proceedings of the Göttingen Mathematical Society, to which she had spoken in 1915",
              "The Prussian academy's reports, where Einstein had published on relativity three years earlier",
            ],
            correctIndex: 0,
            explanation:
              "The Nachrichten of the royal scientific society at Göttingen, mathematical and physical class, volume 37 (1918), pages 235 to 257.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "Who presented the 1918 paper, and on what date?",
            options: [
              "Klein, on 26 July 1918",
              "Hilbert, on 4 June 1919, the day of the trial lecture that completed her habilitation",
              "Noether herself, on 13 July 1915, to the Göttingen Mathematical Society in person",
              "Einstein, on 27 December 1918, in the letter in which he described the work as new",
            ],
            correctIndex: 0,
            explanation:
              "Klein, the same man who had suggested she apply to habilitate in 1915 and to whom Einstein wrote at the end of 1918.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What page range does the 1918 paper occupy?",
            options: [
              "235 to 257",
              "166 to 172, the numbers of the two catalogue entries printed in the winter of 1918/19",
              "179 to 190, which are the course numbers listed against Hilbert in the staff index",
              "14 to 16, the pages of the catalogue volumes on which the seven entries are printed",
            ],
            correctIndex: 0,
            explanation:
              "Pages 235 to 257 of volume 37. The other numbers in this question are all real numbers from elsewhere in this course, which is how ranges get swapped by accident.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What claim about the 1918 paper does this course decline to make?",
            options: [
              "That it was her habilitation thesis",
              "That it connected theorems about symmetry with theorems about conservation as Tollmien says",
              "That Klein presented it to the Göttingen scientific society in the summer of that year",
              "That Einstein had received a new work of hers by the end of December of the same year",
            ],
            correctIndex: 0,
            explanation:
              "None of the sources read for this course says so. The other three statements are all things the sources do say, and the course asserts them.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What do the sources give instead of that link?",
            options: [
              "A sequence of dates",
              "A statement from the faculty file naming the work submitted with the third application",
              "Two conflicting accounts, one naming the 1918 paper and the other the module theory lecture",
              "A note by Klein explaining which of her papers he had put before the society that July",
            ],
            correctIndex: 0,
            explanation:
              "Paper in July 1918, Einstein's letter in December, application in January 1919, trial lecture in June. A sequence is not a statement that one document served as another's thesis.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What piece of evidence points mildly against the habilitation-thesis claim?",
            options: [
              "The trial lecture was on module theory",
              "The paper was presented by Klein rather than submitted by Noether to the faculty herself",
              "The paper appeared in the society's proceedings rather than in a mathematical journal",
              "The third application is dated before the paper was published in its final printed form",
            ],
            correctIndex: 0,
            explanation:
              "\"Fragen der Modultheorie\" on 4 June 1919. It is a small piece of evidence, which is why the lesson calls the link open rather than refuted.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "Why does lesson 16 say the habit matters more than the fact?",
            options: [
              "It is how the four errors got into circulation",
              "Because the formal status of a habilitation thesis carries no consequence for a modern reader",
              "Because the paper's importance to physics does not depend on its role in her career",
              "Because a course that admits an open question will be trusted on its closed ones",
            ],
            correctIndex: 0,
            explanation:
              "Each of the four errors in Section 6 is a sentence somebody found plausible and nobody checked. Promoting an attractive sequence into a stated fact is the mechanism.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What document does lesson 16 name as the one that would settle the open link?",
            options: [
              "The habilitation file itself",
              "The catalogue for the autumn intermediate semester of 1919, once the library's scan loads",
              "Einstein's letter to Klein, in the full text rather than the sentence Tollmien quotes",
              "The Nachrichten volume's own index, which records how each paper reached the society",
            ],
            correctIndex: 0,
            explanation:
              "The file Tollmien worked through records what was submitted. Naming the document that would answer a question is what turns a gap into a task.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What does the record settle about the 1918 paper?",
            options: [
              "It exists, is dated and is published",
              "That it was the work Einstein had received when he wrote to Klein at the end of that year",
              "That it was the basis on which the ministry withdrew its objection in May of 1919",
              "That it was written during the semesters she was teaching under Hilbert's name",
            ],
            correctIndex: 0,
            explanation:
              "Its page numbers are known and a named professor presented it on a named day. That is the strongest answer available to anyone who imagines the naming rule tracked the quality of the work.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What does lesson 16 say a learner loses by not knowing the paper's formal status?",
            options: [
              "Almost nothing",
              "The ability to explain why the 1919 attempt succeeded where the first two had failed",
              "The connection between her mathematics and the catalogue entries of the same years",
              "The date on which the third application was submitted to the philosophical faculty",
            ],
            correctIndex: 0,
            explanation:
              "And a great deal is lost by acquiring the habit of promoting a plausible sequence into a fact. The trade is the point of the lesson.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What title was Noether given in 1922?",
            options: [
              "Außerordentlicher Professor",
              "Privatdozentin für Mathematik, which she had already been admitted as three years earlier",
              "Geheimer Regierungsrat, the title printed beside Hilbert's name in the staff index",
              "Ordentlicher Professor, with a chair and a salary attached on the faculty's nomination",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer's account gives the title for 1922, and records that no salary was attached to it.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What was attached to the 1922 title?",
            options: [
              "No salary",
              "A salary equal to that of a Privatdozent, paid from the students' own course fees",
              "A salary of 3000 marks, which Ihringer gives as her income for the year 1924",
              "A chair in mathematics, with the right to supervise doctoral candidates of her own",
            ],
            correctIndex: 0,
            explanation:
              "The figure of 3000 marks is real, and it belongs to a different year and a different claim, which is exactly how this kind of detail gets merged by mistake.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What figures does Ihringer give for 1924?",
            options: [
              "Her income 3000 marks, Bernays 4000",
              "Her income 4000 marks against Paul Bernays's 3000, which is the reverse of the usual claim",
              "Her income 3000 marks against the 5000 paid to a full professor in the same faculty",
              "No figures at all for her, and 4000 marks for Paul Bernays in the same department",
            ],
            correctIndex: 0,
            explanation:
              "Two figures for two people in the same place in the same year. What they cover and how each was made up are not things this course knows.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What does this course refuse to add to the 1924 comparison?",
            options: [
              "What the figures covered or how they were made up",
              "The name of the colleague whose income is set beside hers in Ihringer's account",
              "The year to which the two figures belong, which Ihringer's account leaves unstated",
              "The currency of the figures, which in the inflation of the period is genuinely unclear",
            ],
            correctIndex: 0,
            explanation:
              "It prints the comparison and stops. A pair of numbers without their definitions supports a smaller claim than it appears to.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What does a title without a salary do to a record?",
            options: [
              "It makes the question look resolved",
              "It removes the person from the record entirely, since only salaried posts were listed",
              "It creates a duplicate entry, one for the title and one for the post actually held",
              "It transfers the record of the work to the professor who nominated her for the title",
            ],
            correctIndex: 0,
            explanation:
              "A reader in 1923 would find her among the university's professors and conclude the matter was settled. The title is the part a record is built to hold.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What does lesson 17 call the most portable idea in this course?",
            options: [
              "A record carries the honour and drops the condition",
              "A permission rule decides who may be named before anybody has done any of the work",
              "An index omission travels further than an omission from the body of the same document",
              "A transcription is a report of a document and not the document that it reports on",
            ],
            correctIndex: 0,
            explanation:
              "A title, an award, a credit line: a record has fields for these. Whether the person could live on it is a fact of a different kind, and the format usually has no field for it.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "Which question about 1916 to 1919 does lesson 17 leave open?",
            options: [
              "What Noether was paid, if anything",
              "Which of the seven catalogue entries she actually taught, as against merely supported",
              "Whether Hilbert attended the seminars announced under his name during those semesters",
              "How many students enrolled in the courses she taught under the support formula",
            ],
            correctIndex: 0,
            explanation:
              "The fee words in the catalogue do not settle it, for the reason lesson 8 gave, and no other source read for this course answers it.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What did admission as a Privatdozentin in 1919 settle, and what did it not?",
            options: [
              "It settled who could be named, not what she was paid",
              "It settled her salary but left her title unchanged until the award of 1922",
              "It settled both, which is why Ihringer's figures for 1924 show her earning a full income",
              "It settled neither, since the ministry's objection was withdrawn only for that semester",
            ],
            correctIndex: 0,
            explanation:
              "The naming question closed in June 1919. The money question ran on past 1922, and on the evidence read here it is still not fully answered.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "Who is Paul Bernays, in this lesson?",
            options: [
              "The colleague whose 1924 income is set beside hers",
              "The referee whose report of August 1915 spoke decidedly against her habilitation",
              "The curator who forwarded the faculty's 1915 request with a comment of his own",
              "The dean whose vote settled the tie at the faculty meeting of 18 November 1915",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer gives the two 1924 figures together, which is the only role Bernays plays in this course. The other three descriptions belong to Hartmann, Osterath and Landau.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "Why does lesson 17 say the 1922 title is the same mechanism as the catalogue line?",
            options: [
              "Both record a permission and hide a condition",
              "Both were arranged privately by Hilbert with the Prussian ministry on her behalf",
              "Both were printed in the same annual volume, so a reader met them on the same page",
              "Both were withdrawn by the same law in the spring of 1933, thirteen years apart",
            ],
            correctIndex: 0,
            explanation:
              "One step further on. The catalogue recorded who could be named; the title records a rank, and neither format has a field for the terms the person was actually working under.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What date does Ihringer's account give for the civil-service law?",
            options: [
              "7 April 1933",
              "14 April 1935, which is also the date on which Emmy Noether died in Pennsylvania",
              "29 May 1908, the date of the Prussian decree barring women from the habilitation",
              "5 November 1917, the date on which the minister refused to authorise any exception",
            ],
            correctIndex: 0,
            explanation:
              "The other three dates are all real dates in this course, and all belong to other acts of the same state at other moments.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "When did Noether emigrate, and to where?",
            options: [
              "October 1933, to Bryn Mawr",
              "April 1933, to Frankfurt, where the Prussian decree had not applied to her in 1917",
              "June 1919, to Bryn Mawr, immediately after the trial lecture completed her habilitation",
              "March 1935, to Pennsylvania, a month before her death in the spring of that year",
            ],
            correctIndex: 0,
            explanation:
              "Six months after the law of 7 April. Bryn Mawr is in Pennsylvania, which is where the wrong answer dated March 1935 borrows its geography from.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "On what date did Emmy Noether die, and how old was she?",
            options: [
              "14 April 1935, aged 53",
              "14 April 1935, aged 51, having been born in Erlangen in the spring of 1884",
              "7 April 1933, aged 51, in the same month as the civil-service law Ihringer names",
              "23 March 1935, aged 53, on the anniversary of her birth in Erlangen in 1882",
            ],
            correctIndex: 0,
            explanation:
              "Born 23 March 1882 and died 14 April 1935. The arithmetic is worth doing yourself whenever a source gives you an age instead of two dates.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What does this course say it does not have for 1933?",
            options: [
              "The document that ended her position",
              "The date of the law, which Ihringer's account gives only as the spring of that year",
              "Any account of her emigration, which is reconstructed here from the Bryn Mawr records",
              "The name of the official who signed the order removing her from the faculty at Göttingen",
            ],
            correctIndex: 0,
            explanation:
              "It reports Ihringer's sequence as a sequence and quotes no dismissal, for the same reason lesson 16 refused a more attractive link.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "According to lesson 18, who was the decisive actor throughout this record?",
            options: [
              "The state",
              "The mathematics department, which could have admitted her at any point after 1915",
              "The curator's office, whose comment determined how the ministry read each request",
              "The referees, whose written reports determined the outcome of each of the three attempts",
            ],
            correctIndex: 0,
            explanation:
              "Four times and in four different directions: the decree of 1908, the refusals of 1915 and 1917, the withdrawal of objection in 1919, and the law of 1933.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What would a reader conclude from the 1916/17 catalogue alone?",
            options: [
              "That Hilbert taught and a Miss Dr. Nöther helped",
              "That the seminar had two teachers of equal standing, listed in order of seniority",
              "That the course was taught by a lecturer whose name the catalogue had abbreviated",
              "That the seminar had been cancelled and replaced by a course under another teacher",
            ],
            correctIndex: 0,
            explanation:
              "And the catalogue is not lying. It is recording, accurately, a permission that had been decided elsewhere.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Where does the correction to the catalogue's account come from?",
            options: [
              "The decree, the reports, the tallies and the refusal",
              "A later edition of the catalogue, which restored her name to the entries retrospectively",
              "The staff index of a subsequent semester, in which her own entry finally appears",
              "Reading the catalogue entry more carefully, since the support line names her plainly",
            ],
            correctIndex: 0,
            explanation:
              "Not from reading the catalogue harder. From finding the other documents and reading them beside it.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What is the transferable method this course ends on?",
            options: [
              "Find the rule that decided the record's shape",
              "Compare every transcription against the page image before quoting either of them",
              "Prefer a primary document to a secondary account whenever the two are in conflict",
              "Date every stage of a procedure before drawing any conclusion about its outcome",
            ],
            correctIndex: 0,
            explanation:
              "Where a record looks thin, ask what rule decided its shape, and then go and find the rule. The other three are real habits this course teaches, and they are steps rather than the method.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Why does lesson 18 keep the last part of the story short?",
            options: [
              "It has fewer documents here than for 1915",
              "Because the events after 1933 fall outside the period the course's sources cover",
              "Because the material is distressing and the course declines to dwell on it at length",
              "Because those years are already taught in another course in the same catalog",
            ],
            correctIndex: 0,
            explanation:
              "Length follows evidence. A section written at the same length as Section 2 on a fraction of the documents would be padding, and padding reads as confidence.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "How many months separate the civil-service law from the emigration?",
            options: [
              "Six",
              "Fourteen, the same interval that separated the 1917 refusal from the third application",
              "Eighteen, running from the spring of 1933 to her death in the spring of 1935",
              "Three, which is also the interval the ministry took to answer the 1919 request",
            ],
            correctIndex: 0,
            explanation:
              "April to October 1933. The other intervals offered are real intervals from elsewhere in the course, and none of them is this one.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Which two examples does lesson 15 give for a symmetry?",
            options: [
              "A turned square, and a moved experiment",
              "A conserved quantity of energy, and a conserved quantity of momentum",
              "A solved variational problem, and an invariant of an algebraic transformation",
              "A repeated measurement, and a second measurement made by a different observer",
            ],
            correctIndex: 0,
            explanation:
              "Turn a square by a quarter and it looks as it did. Move an experiment to another bench and, if the physics does not care where you stand, the outcome is the same.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Which two quantities does lesson 15 name as familiar conserved ones?",
            options: [
              "Energy and momentum",
              "Mass and volume, which are the quantities a symmetry argument is usually applied to",
              "Charge and temperature, which the paper of 1918 treated as its principal examples",
              "Length and time, which remain unchanged under the transformations the theorems allow",
            ],
            correctIndex: 0,
            explanation:
              "They are given as examples of the kind of statement a conservation law makes, not as the content of either Noether theorem.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What was the state of the two families of statement before 1918?",
            options: [
              "They were separate",
              "They were known to be connected, but no proof of the connection had been published",
              "They were the same statement in two notations, which the paper showed to be equivalent",
              "They were both derived from the same principle, which the paper then generalised",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien's account says the paper set out a connection unknown until then, which is the claim this course makes and the limit of it.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does lesson 15 say a precise statement of a theorem is?",
            options: [
              "A mathematical object",
              "A summary that any careful reader can reconstruct from a description of the result",
              "A translation problem, since the original was written in German for a German audience",
              "A matter of convention that varies between the paper and the textbooks that followed it",
            ],
            correctIndex: 0,
            explanation:
              "And the sources read for this course describe the result rather than state it, so the course describes it too and says where the statement can be found.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does lesson 15 say about the years in which the 1918 paper was produced?",
            options: [
              "The catalogue was naming someone else as her courses' teacher",
              "She had already been admitted as a Privatdozentin and was teaching in her own name",
              "She had left Göttingen for Frankfurt, where the Prussian decree did not apply",
              "The habilitation file had been closed and no further application was pending",
            ],
            correctIndex: 0,
            explanation:
              "The catalogue was not weighing a difficult case at the margin of its rules. It was applying a rule, and the rule did not look at the work.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What does this course say about the relation between describing a result and stating it?",
            options: [
              "Describing is what its sources support",
              "Stating is always preferable, and a course should reproduce the original notation",
              "Describing is a simplification that a reader can convert back into a statement",
              "Stating is unnecessary, because a description conveys the same information in words",
            ],
            correctIndex: 0,
            explanation:
              "The line the lesson refuses to cross is between saying what a result connects and setting out the result itself.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "In which volume of the Nachrichten did the 1918 paper appear?",
            options: [
              "Volume 37",
              "Volume 202, which is the number of the catalogue entry that closes the run in the summer of 1919",
              "Volume 190, which is the number of the first catalogue entry in the run",
              "Volume 235, which is the first of the page numbers the paper occupies",
            ],
            correctIndex: 0,
            explanation:
              "Volume 37, pages 235 to 257. The distractors are all real numbers from elsewhere in this course, which is how a reference gets corrupted in retelling.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "Which class of the Göttingen society published the paper?",
            options: [
              "The mathematical and physical class",
              "The historical and philological class, which corresponded to the other faculty department",
              "The general class, in which papers of interest to more than one discipline appeared",
              "The class of the royal academy at Berlin, to which the society forwarded its proceedings",
            ],
            correctIndex: 0,
            explanation:
              "Mathematisch-physikalische Klasse. The historical and philological label borrows the name of the faculty department that demanded the full vote in November 1915.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "Why does lesson 16 call the habilitation-thesis claim attractive?",
            options: [
              "It closes the story neatly",
              "Because it is the only account that explains why the third application succeeded",
              "Because it is supported by Einstein's letter, which names the work in question",
              "Because it makes the trial lecture unnecessary, which the record also suggests",
            ],
            correctIndex: 0,
            explanation:
              "The same paper that founded a result physicists still use would be the paper that bought her the right to be named. Attractiveness is not evidence.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What four dated facts does lesson 16 put in place of the claim?",
            options: [
              "The presentation, the letter, the application and the trial lecture",
              "The referee reports, the commission vote, the faculty vote and the ministry's refusal",
              "The decree, the first application, the compromise and the catalogue's first entry",
              "The colloquium, the trial lecture, the admission and the first course in her own name",
            ],
            correctIndex: 0,
            explanation:
              "26 July 1918, 27 December 1918, 18 January 1919 and 4 June 1919. A sequence, which is not a statement that one document served as another's thesis.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What does lesson 16 say a learner does lose by acquiring the wrong habit?",
            options: [
              "A great deal",
              "Nothing, provided each individual claim they make turns out to be true in the end",
              "Only the trust of readers who happen to check that one particular claim",
              "The ability to write about a subject where the documents have not survived",
            ],
            correctIndex: 0,
            explanation:
              "Almost nothing is lost by not knowing the paper's formal status. The habit of promoting a plausible sequence into a fact is what produced the four errors.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What does the record settle about the paper, whatever its formal status?",
            options: [
              "That it exists, is dated, and was presented by a named professor",
              "That it was written during the six semesters she taught under Hilbert's name",
              "That it was the work Einstein had in hand when he wrote to Klein that December",
              "That it persuaded the ministry to withdraw its objection in the spring of 1919",
            ],
            correctIndex: 0,
            explanation:
              "Its page numbers are known and Klein put it before the society on a named day, while the catalogue was still calling her support.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What did admission as a Privatdozentin leave unsettled?",
            options: [
              "What she was paid",
              "Whether her name could be printed as a course's teacher in the catalogue",
              "Whether the ministry would object to her teaching in the following semester",
              "Whether the faculty would allow her to give a course in her own subject",
            ],
            correctIndex: 0,
            explanation:
              "The naming question closed in June 1919. The money question ran on past the title of 1922, and on the evidence read here it is still not fully answered.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What is the one clean fact about the 1922 title?",
            options: [
              "A professorial title, with no salary attached",
              "A professorial title carrying the same income as an ordinary chair at Göttingen",
              "A professorial title granted by the ministry rather than by the faculty itself",
              "A professorial title that the faculty had been seeking for her since 1915",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer's account records the two together, and this course goes no further than what he records.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What kind of figures does Ihringer give for 1924?",
            options: [
              "Incomes, for two people in the same place",
              "Salaries, drawn by two members of the faculty from the same university fund",
              "Fees, collected from the students enrolled in each of their courses that year",
              "Pensions, payable to two retired members of the philosophical faculty",
            ],
            correctIndex: 0,
            explanation:
              "He gives them as incomes. What they cover and how each was made up are not things this course knows, so it prints the pair and stops.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What would a reader in 1923 have concluded from a list of the university's professors?",
            options: [
              "That the question had been resolved",
              "That she was still teaching under another professor's name in the catalogue",
              "That her position was unpaid, since the list recorded the terms of each appointment",
              "That she held no post at Göttingen, the title not carrying a place in the list",
            ],
            correctIndex: 0,
            explanation:
              "The title is the part the record holds. The absence of a salary is the part it drops, unless somebody goes and looks.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "Which of these does lesson 17 say a record is built to hold?",
            options: [
              "A title, an award or a credit line",
              "The terms on which a person was working during the period it covers",
              "The pay attached to each post it lists, since that is what an institution accounts for",
              "The reasons a decision was taken, which is what makes a record worth keeping",
            ],
            correctIndex: 0,
            explanation:
              "Whether the person could pay their rent from it is a fact of a different kind, and the format usually has no field for it.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "How does lesson 17 describe the relation between the 1922 title and the catalogue line?",
            options: [
              "The same mechanism, one step further on",
              "Two unrelated arrangements, the first made by the faculty and the second by the ministry",
              "A correction, the title having been granted to make up for the years of the support line",
              "A reversal, the title recording what the catalogue line had concealed for six semesters",
            ],
            correctIndex: 0,
            explanation:
              "Both record a permission and have no field for the condition attached to it.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "Why does lesson 18 say it keeps the last part of the story short?",
            options: [
              "It has fewer documents for it",
              "Because the events fall outside the period the course's title refers to",
              "Because another course in the catalog already covers the years after 1933",
              "Because the sources for the period are in German and have not been translated",
            ],
            correctIndex: 0,
            explanation:
              "Length follows evidence. A section as long as Section 2 on a fraction of the documents would be padding, and padding reads as confidence.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Where is Bryn Mawr?",
            options: [
              "Pennsylvania",
              "Frankfurt, where the ministry had assured Göttingen it would not lose her in 1917",
              "Erlangen, the city in which she had been born in the spring of 1882",
              "Göttingen, where she continued to teach privately after leaving the university",
            ],
            correctIndex: 0,
            explanation:
              "She emigrated there in October 1933, six months after the civil-service law Ihringer's account names.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "In how many directions does lesson 18 say the state acted across this record?",
            options: [
              "Four",
              "One, consistently against her from the decree of 1908 until her emigration in 1933",
              "Two, first refusing the habilitation and then granting it in the spring of 1919",
              "Three, corresponding to the three attempts at habilitation Tollmien records",
            ],
            correctIndex: 0,
            explanation:
              "The decree of 1908, the refusals of 1915 and 1917, the withdrawal of objection in 1919, and the law of 1933.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What does lesson 18 say about whether the catalogue was lying?",
            options: [
              "It was not",
              "It was, because the seminars were in fact given by the person named only as support",
              "It was, but only in the index, where the omission was a decision rather than a format",
              "The question cannot be answered, since the catalogue's compilers left no account",
            ],
            correctIndex: 0,
            explanation:
              "It records, accurately, a permission that had been decided elsewhere. That is why reading it harder cannot correct it.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What would a reader with only the 1916/17 catalogue conclude?",
            options: [
              "That Hilbert taught and a Miss Dr. Nöther helped",
              "That the seminar had no teacher of record and was run by the department as a whole",
              "That a woman had been admitted to teach at Göttingen in the winter of 1916",
              "That the course had been announced but not given, the support line marking a substitute",
            ],
            correctIndex: 0,
            explanation:
              "Which is what the entry says, in the only vocabulary the format allowed it.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What five kinds of document does lesson 18 say produce the correction?",
            options: [
              "The decree, the reports, the tallies, the cover note and the refusal",
              "The seven catalogue entries, read in sequence across the six semesters of the run",
              "The staff indexes of all six semesters, compared with each other entry by entry",
              "Einstein's letter, Tollmien's list, Ihringer's translation and two reference pages",
            ],
            correctIndex: 0,
            explanation:
              "Read beside the catalogue rather than instead of it. The catalogue supplies the shape and the other documents supply the rule that made it.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "What does the method of this course tell you to do where a record looks thin?",
            options: [
              "Ask what rule decided its shape",
              "Assume that the missing material has been lost rather than never recorded",
              "Look for a second copy of the same record in another institution's archive",
              "Treat the thinness as evidence that the events described did not occur",
            ],
            correctIndex: 0,
            explanation:
              "And then go and find the rule. That is the transferable half of a course that is otherwise about one woman in one city.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Where the famous version outruns the record
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "six-semesters-not-four-years",
      title: "19 · Correction one: six semesters, not four years",
      section: "Section 6 · Where the famous version outruns the record",
      body: `The popular version of this story says Noether's lectures were printed under Hilbert's name for four years.

**The scans say six semesters.** Winter 1916/17, summer 1917, winter 1917/18, summer 1918, winter 1918/19 with two entries, and summer 1919. Six semesters is three academic years.

**The check that settles it is the negative one.** Anyone can count the entries they have found and get a number. The number only becomes a span when you also read the semesters on either side and find nothing. The mathematics listings for winter 1915/16 and summer 1916 were read, pages 14 and 15 of each, and neither names her. That is what fixes the start of the run, and the summer of 1919 is where it ends because the next catalogue announces a course in her own name.

**Why a year is an easy thing to add.** "Four years" is a rounder, heavier phrase than "six semesters", and the German academic year is easy to mishandle from outside it: a winter semester carries two calendar years in its name, so a run from 1916/17 to 1919 touches four calendar years while containing three academic ones. Count the semesters and the ambiguity disappears.

**What the error costs.** Not much on its own, which is exactly why it survives. An extra year makes the arrangement sound more entrenched than it was, and it makes Hilbert's compromise of probably 1916 look like a long-running policy rather than what the record shows, which is an improvisation under a refusal that was still being appealed. The general point is the useful one: **a duration is a claim, and a claim needs a check at both ends.**

:::reveal How long did the run of entries under Hilbert's name actually last? ||| Six semesters, from winter 1916/17 to summer 1919, which is three academic years.

:::reveal What kind of check fixes the start of a run like this? ||| A negative check: reading the semesters on either side and finding no entry, which is what turns a count of found entries into a span.

:::reveal Why is "four years" an easy error to make here? ||| Because a German winter semester carries two calendar years in its name, so a run from 1916/17 to 1919 touches four calendar years while containing three academic ones.

## Vocabulary
- **Academic year**: a winter semester and the following summer semester, which is the unit that makes this run three rather than four.
- **Negative check**: reading beyond both ends of a claimed run to confirm where it starts and stops.
- **Duration claim**: a statement about how long something lasted, which needs evidence at both ends and not just a count in the middle.

## Sources
Tollmien, C. (n.d.-b). *Noethers Vorlesungen*. Emmy Noether. https://www.emmy-noether.net/Noethers-Vorlesungen/
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Winter-Semester 1916/17*. (1916). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1916_1917_WS`,
    },
    {
      slug: "the-vote-that-is-not-there",
      title: "20 · Correction two: a vote that is in no document",
      section: "Section 6 · Where the famous version outruns the record",
      body: `A widely repeated version of this story says that a special vote of the historical and philological department on 19 November 1915 blocked Noether's habilitation.

**There is no 19 November in any source read for this course.** Not in Tollmien's account of the file, not in Ihringer's translation of it, and MacTutor carries no November 1915 date at all.

**What is in the record, in order.** The commission voted on 29 October. The mathematics and science department voted on 6 November, ten for, seven against, two abstaining. The historical and philological department demanded a full faculty vote on 10 November. The whole faculty met on 18 November and voted twice: seventeen to fourteen with one abstention on who was against admitting a woman under all circumstances, then a fourteen to fourteen tie on recommending a refusal, which with the dean's vote meant no recommendation was made. And on that same 18 November, the historical and philological department decided to take no further steps against her.

**Look at what the false version does to that.** It keeps the department, moves the date by a day, invents a vote, and reverses the outcome. The department that the story has blocking her is the department the record shows standing down. It is not a fabrication out of nothing. It is four real elements reassembled wrongly, which is the hardest kind of error to dislodge, because every piece of it feels familiar.

**And what actually blocked her was none of these meetings.** It was the decree of 29 May 1908, the curator's negative cover note of 9 December 1915, and the minister's refusal of 5 November 1917. Two of those three are outside the faculty altogether, and the third is an administrative act that no one voted on. A story that looks for the blocking inside the faculty's votes is looking in the wrong building.

:::reveal What does the record hold for November 1915, and what does it not? ||| Votes on 6, 10 and 18 November, and no 19 November at all in any source read for this course.

:::reveal What did the historical and philological department actually do on 18 November 1915? ||| It decided to take no further steps against her, which is the opposite of the blocking vote the popular version gives it.

:::reveal What did block the habilitation, if not the faculty's votes? ||| The decree of 29 May 1908, the curator's negative cover note of 9 December 1915, and the minister's refusal of 5 November 1917.

## Vocabulary
- **Reassembly error**: a false claim built from real elements in the wrong arrangement, which is harder to dislodge than an invention because every piece feels familiar.
- **19 November 1915**: the date the popular version gives for a blocking vote, and a date that appears in none of the sources read for this course.
- **Standing down**: what the historical and philological department did on 18 November 1915, having demanded the full faculty vote eight days earlier.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
MacTutor. (n.d.). *Emmy Noether*. MacTutor History of Mathematics Archive, University of St Andrews. https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "the-ministry-not-the-senate",
      title: "21 · Correction three: the ministry, not a senate",
      section: "Section 6 · Where the famous version outruns the record",
      body: `A third version says the academic senate refused Noether because she was a woman.

**No senate appears in either account read for this course.** Tollmien's documentary narrative of the file does not mention one. Neither does Ihringer's translation.

**What the record has instead.** The department asked the ministry for an exemption from a ministry decree. The ministry refused it, on 5 November 1917, on the ground that the question could only be decided as a matter of principle, so exceptions could not be authorised even where an individual case involved unavoidable hardship.

**Why swapping the body is not a small slip.** It moves the decision from a state ministry to a university committee, and with it the whole shape of the case. If a senate refused her, the story is about the prejudice of a group of colleagues, and the remedy is better colleagues. If a ministry refused her, the story is about a rule that every Prussian university was bound by, and the remedy is changing the rule, which is what eventually happened and is why the outcome arrived from Berlin rather than from Göttingen.

It also mislocates the sympathetic parties. In the senate version, Hilbert's manoeuvre with the catalogue line is a trick played on his own colleagues. In the record, as Section 2 showed, it rests on an undertaking obtained from the minister himself. The same act means something different depending on which body you think said no.

**The general lesson.** When a story names an institution, check which one. "The university refused her" and "the state refused her" are two different sentences, and only one of them is in the file.

:::reveal Which body refused the exemption, and on what ground? ||| The ministry, on 5 November 1917, holding that the question could only be decided as a matter of principle so that no exceptions could be authorised.

:::reveal Why does the senate version change the shape of the whole case? ||| It makes the story about colleagues' prejudice with better colleagues as the remedy, instead of a rule binding every Prussian university whose remedy was changing the rule.

:::reveal What does the senate version do to Hilbert's catalogue arrangement? ||| It turns it into a trick played on his colleagues, when the record shows it resting on an undertaking obtained from the minister.

## Vocabulary
- **Academic senate**: the university body the popular version blames, which appears in neither account read for this course.
- **Locating the decision**: identifying which institution actually decided, since the remedy a story implies depends entirely on that.
- **Grundsätzlich**: as a matter of principle, the minister's own ground for refusing in November 1917.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
Tollmien, C. (n.d.-a). *Habilitation*. Emmy Noether: Göttingen 1915 bis 1919. https://www.emmy-noether.net/Goettingen-1915-bis-1919/Habilitation/`,
    },
    {
      slug: "what-gratis-cannot-prove",
      title: "22 · Correction four: what \"gratis\" cannot prove",
      section: "Section 6 · Where the famous version outruns the record",
      body: `The fourth correction is the most interesting, because the error is made by a reader who did go and look at the document.

**The claim.** The catalogue entry ends with the word "gratis", so Noether taught for nothing.

**Why it fails.** "Gratis" is printed on many other courses on the same pages, among them Klein's, Landau's, Carathéodory's and Hilbert's own joint seminar with Debye. A word that appears on a full professor's seminar is not a statement that the full professor was working unpaid. It is a fee category, and MacTutor renders it into English as "no tuition", which points at what students paid.

**And one of her own entries contradicts the reading.** Number 166, in the winter of 1918/19, carries "privatim" instead. If the fee word were a report on Noether's pay, that entry would have to mean something about her pay, and nobody who makes the gratis argument has ever said what.

**The general error, and it has a shape worth learning.** A reader found a real word on a real page and then asked it a question it was not built to answer. The catalogue has a field for what a course costs a student. It has no field at all for what a teacher receives. Reading the first as the second is not carelessness about the document, it is carelessness about the *format* of the document, which is a harder mistake to catch, because the evidence looks solid right up until you ask what its columns mean.

**The honest position.** What Noether was paid, if anything, for six semesters of teaching is not known to this course. That is a worse answer than "she taught for free" and it is the one the evidence supports. The way to improve it is to find a pay record, not to squeeze a fee category harder.

:::reveal Why can the word "gratis" not show that Noether was unpaid? ||| It is a fee category printed on many other professors' courses on the same pages, including a full professor's own seminar, and it points at what students paid.

:::reveal Which of her entries contradicts the gratis reading outright? ||| Entry 166 in the winter of 1918/19, which carries "privatim" instead, and which nobody making the gratis argument has explained.

:::reveal What is the general error behind the gratis claim? ||| Asking a document a question its format was not built to answer. The catalogue has a field for what a course cost a student and none for what a teacher received.

## Vocabulary
- **Fee category**: what the catalogue's final word records, describing the charge to students rather than the teacher's pay.
- **Format error**: mistaking one field of a document for another, which is harder to catch than a misreading because the evidence itself is genuine.
- **Entry 166**: the winter 1918/19 lecture course marked "privatim", the counterexample inside her own run.

## Sources
MacTutor. (n.d.). *Emmy Noether*. MacTutor History of Mathematics Archive, University of St Andrews. https://mathshistory.st-andrews.ac.uk/Biographies/Noether_Emmy/
*Verzeichnis der Vorlesungen auf der Georg-August-Universität zu Göttingen: Winter-Semester 1918/19*. (1918). Niedersächsische Staats- und Universitätsbibliothek Göttingen, GDZ. https://gdz.sub.uni-goettingen.de/id/PPN654655340_1918_1919_WS`,
    },
    {
      slug: "a-remark-and-a-gap",
      title: "23 · A remark that may not be authenticated, and what the gap proves",
      section: "Section 6 · Where the famous version outruns the record",
      body: `The best-loved thing anyone said in this story may not have been said.

**The remark.** Hilbert is supposed to have told the faculty that a candidate's sex should not matter, since this was a university and not a public bathing establishment. Ihringer's translation gives it as Hilbert having "almost surely said" that the sex of a candidate should not matter "as they are at a university and not a community swimming pool" (Ihringer, 2019).

**Who contests it, and this is the part that matters.** The University of Göttingen's own page on historical figures in its mathematics department introduces the line as "Hilberts Einwand (der vielleicht nicht verbürgt ist, aber gern erzählt wird)": Hilbert's objection, which is perhaps not authenticated, but is gladly told (University of Göttingen, n.d.).

So one source says almost surely and the institution that would most like it to be true says perhaps not authenticated. That is a contested claim, and this course prints both positions and neither verdict. It does not print the German wording of the remark at all, because the wording is not something any source read for this course establishes.

**What the same university page does state plainly.** "Hilbert umging diese Ablehnung, indem er ihre Vorlesungen unter seinem Namen 'Mit Unterstützung von Frl. Dr. E. Noether' ankündigte": Hilbert got around the refusal by announcing her lectures under his name (University of Göttingen, n.d.). Even that sentence is worth weighing against Section 2, where the arrangement rests on an undertaking obtained from the ministry itself. Circumventing a refusal and taking up an alternative the ministry offered are not the same act.

**Now the gap, and the test from *Who Gets Named*, lesson 17.** Ask what would have had to happen for a catalogue entry naming Emmy Noether as a teacher to exist in 1916. The answer is that somebody would have had to be permitted to name her. So the gap is evidence about a permission rule, and this permission rule is dated, quotable and independently documented: 29 May 1908.

**Say the difference out loud.** *Who Gets Named*, lesson 9, teaches the Matilda effect, in which a woman's credit routes to a man. On the printed page this looks like that. It is not. Nobody took anything, and the man whose name is on the line spent years trying to get hers on it. What produced this record is a rule, not an appetite, and the two call for different remedies. Lesson 21 of the same course asks who corrects a record and with what: here the correction came from the ministry changing its answer, not from the catalogue's authors changing their minds.

**Finally, what to do with a story you like.** Keep it, and label it. "Hilbert is said to have told the faculty that the university was not a bathing establishment, though the university's own historians call the remark possibly unauthenticated" is a sentence you can say in public and defend. It keeps the pleasure and loses nothing but a false certainty.

:::reveal How do Ihringer and the University of Göttingen's own page differ on the bathing establishment remark? ||| Ihringer says Hilbert almost surely said it. The university's page calls it perhaps not authenticated, but gladly told.

:::reveal Why is this case not an instance of the Matilda effect? ||| Because nobody took her credit. A rule decided who could be named, and the man whose name appears spent years trying to get hers printed instead.

:::reveal What would have had to happen for a 1916 catalogue entry naming Noether as teacher to exist? ||| Somebody would have had to be permitted to name her. That makes the gap evidence about a permission rule, and the rule is the dated decree of 29 May 1908.

## Vocabulary
- **Possibly unauthenticated** (*vielleicht nicht verbürgt*): the University of Göttingen's own description of the remark most often quoted from this story.
- **Contested claim**: one this course reports with both positions named and no verdict of its own.
- **Matilda effect**: the mechanism taught in Who Gets Named lesson 9, in which a woman's credit routes to a man, and which this case resembles on the page without sharing its cause.
- **Labelled story**: a good anecdote kept with its uncertainty attached, so that it can be told without asserting more than the record supports.

## Sources
Ihringer, F. (2019, June 1). *Emmy Noether's habilitation*. https://math.ihringer.org/data/noether_v05.pdf
University of Göttingen. (n.d.). *Historische Persönlichkeiten Göttingens in der Mathematik*. https://www.uni-goettingen.de/de/681225.html`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The four corrections",
      section: "Section 6 · Where the famous version outruns the record",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the popular version say about how long Noether's lectures ran under Hilbert's name?",
            options: [
              "Four years",
              "Three academic years, which happens to agree with what the catalogue scans actually show",
              "Two semesters, after which the ministry's compromise of 1916 was said to have lapsed",
              "From the refusal of November 1917 until the trial lecture of June 1919, some eighteen months",
            ],
            correctIndex: 0,
            explanation:
              "Four years is the claim. Six semesters is three academic years, so the popular version adds one.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Which semesters make up the actual run?",
            options: [
              "Winter 1916/17 to summer 1919",
              "Winter 1915/16 to summer 1919, beginning in the semester after her first application",
              "Summer 1916 to winter 1919/20, ending when she was admitted as a Privatdozentin",
              "Winter 1916/17 to winter 1918/19, ending before the ministry withdrew its objection",
            ],
            correctIndex: 0,
            explanation:
              "Six semesters with seven entries, because the winter of 1918/19 carries two. The next catalogue after summer 1919 announces a course in her own name.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What kind of check fixes the start of the run?",
            options: [
              "A negative check on the earlier semesters",
              "A comparison of the two published transcriptions with each other rather than with the scans",
              "A reading of the staff index, which lists each teacher's course numbers by semester",
              "A count of the entries found, which by itself establishes both ends of the span",
            ],
            correctIndex: 0,
            explanation:
              "Reading the winter 1915/16 and summer 1916 listings and finding nothing is what turns a count of entries into a span with a beginning.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Why is \"four years\" an easy error for an outsider to make?",
            options: [
              "A winter semester carries two calendar years",
              "Because the German academic year began in the autumn rather than in the following January",
              "Because the catalogue printed each semester's entries in the volume for the previous year",
              "Because the run contains seven entries, and an entry is easily mistaken for a semester",
            ],
            correctIndex: 0,
            explanation:
              "A run from 1916/17 to 1919 touches four calendar years while containing three academic ones. Counting semesters removes the ambiguity.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What does the extra year cost, according to lesson 19?",
            options: [
              "It makes the arrangement sound entrenched",
              "It places the first entry before the ministry's compromise, which reverses cause and effect",
              "It makes the trial lecture of June 1919 fall in the middle of the run rather than after it",
              "It implies a seventh semester for which no catalogue entry has ever been produced",
            ],
            correctIndex: 0,
            explanation:
              "It turns an improvisation under a refusal that was still being appealed into what sounds like a long-running policy.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What does lesson 19 say a duration is?",
            options: [
              "A claim needing a check at both ends",
              "A count of the documents that survive, which is why archives are searched exhaustively",
              "The least reliable kind of historical statement, and best omitted from an account",
              "A summary of a span whose precision matters less than the events inside it",
            ],
            correctIndex: 0,
            explanation:
              "Counting what you have found gives you a number. Reading past both ends is what makes it a span.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "How many entries does the winter of 1918/19 contribute to the run?",
            options: [
              "Two",
              "One, the exercises class numbered 172 in the mathematics and physics seminar list",
              "Three, which is why the run has seven entries spread across only six semesters",
              "None, which is why the popular version counts the run as ending in the summer of 1918",
            ],
            correctIndex: 0,
            explanation:
              "Entry 166 in the lecture list and entry 172 in the seminar, both on page 14 of that volume. That is why seven entries fit into six semesters.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What marks the end of the run?",
            options: [
              "The next catalogue names her as teacher",
              "The ministry's letter of 8 May 1919 stating that it had no objection to her habilitation",
              "The faculty's unanimous vote after the trial lecture on 4 June 1919 at Göttingen",
              "The end of the winter semester of 1918/19, after which no further entries were printed",
            ],
            correctIndex: 0,
            explanation:
              "The autumn intermediate semester of 1919 announces analytic geometry under her own name. The May and June events are real, and the printed record changes only at the next catalogue.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What date does the popular version give for a departmental vote that blocked the habilitation?",
            options: [
              "19 November 1915",
              "18 November 1915, when the whole faculty voted twice on two separate questions",
              "10 November 1915, when the historical and philological department demanded that vote",
              "6 November 1915, when the mathematics and science department voted ten to seven",
            ],
            correctIndex: 0,
            explanation:
              "19 November, which appears in none of the sources read for this course. The other three November dates are all real, and all belong to other meetings.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What do the sources read for this course contain for 19 November 1915?",
            options: [
              "Nothing",
              "A departmental vote whose tally Tollmien records but whose subject is not stated",
              "A second meeting of the whole faculty, called to confirm the previous day's tie",
              "The curator's decision to attach a negative comment to the faculty's request",
            ],
            correctIndex: 0,
            explanation:
              "Not in Tollmien, not in Ihringer, and MacTutor carries no November 1915 date at all.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What four things does the false version do to the record of November 1915?",
            options: [
              "Keeps the department, moves the date, invents a vote, reverses the outcome",
              "Invents a department, invents a date, invents a vote, and invents an outcome as well",
              "Keeps the date and the tally but attaches them to the wrong department entirely",
              "Merges the two faculty votes of 18 November into a single vote with a single tally",
            ],
            correctIndex: 0,
            explanation:
              "Four real elements reassembled wrongly, which is the hardest kind of error to dislodge because every piece of it feels familiar.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What is a reassembly error?",
            options: [
              "A false claim built from real elements",
              "A claim invented whole by a writer who had no access to any of the documents",
              "A claim that was true of one case and has been transferred to a similar case",
              "A claim whose date is right but whose participants have been confused with each other",
            ],
            correctIndex: 0,
            explanation:
              "Harder to dislodge than an invention, because a reader checking it recognises the department, the month and the institution and stops checking.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "In the record, what did the department the popular version blames actually do that same day?",
            options: [
              "It decided to take no further steps against her",
              "It recorded a formal protest against the faculty's refusal to recommend a refusal",
              "To hold a special vote of its own members the following day on the same question",
              "To ask the curator to add a comment of his own to the request going to Berlin",
            ],
            correctIndex: 0,
            explanation:
              "The department the popular version has blocking her is the department the record shows standing down, eight days after it demanded the full faculty vote.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Which three things actually blocked the first habilitation attempt?",
            options: [
              "The 1908 decree, the cover note, the 1917 refusal",
              "The three faculty votes of 29 October, 6 November and 18 November 1915 taken together",
              "The minority report, the departmental vote of 6 November, and Hartmann's referee report",
              "The curator's cover note, the minority report, and the tie at the faculty meeting",
            ],
            correctIndex: 0,
            explanation:
              "Two of the three are outside the faculty altogether and the third is an administrative act nobody voted on. Looking for the blocking inside the faculty's votes is looking in the wrong building.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Which reference source carries no November 1915 date at all?",
            options: [
              "MacTutor",
              "Tollmien's account of the habilitation file, which begins its narrative in December",
              "Ihringer's translation, which covers the reports but not the votes that followed them",
              "The University of Göttingen's page on historical figures in its mathematics department",
            ],
            correctIndex: 0,
            explanation:
              "Its silence is useful evidence: a widely used reference work that would have carried a dramatic blocking vote if one had been in the literature it drew on.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "In what order did the four recorded meetings of autumn 1915 occur?",
            options: [
              "Commission, department, demand, full faculty",
              "Full faculty, commission, department, and then the demand for a second faculty vote",
              "Department, commission, full faculty, and then the demand from the other department",
              "Demand, commission, department, and finally the vote of the whole faculty in November",
            ],
            correctIndex: 0,
            explanation:
              "29 October, 6 November, 10 November, 18 November. Getting the order right is most of what protects you from the reassembly error.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What does a third version of the story say refused Noether?",
            options: [
              "The academic senate",
              "The mathematics and science department, by ten votes to seven with two abstentions",
              "The commission of referees, on the strength of Hartmann's written report in August 1915",
              "The curator, acting on his own authority before the request could reach the ministry",
            ],
            correctIndex: 0,
            explanation:
              "A senate appears in neither Tollmien's narrative nor Ihringer's translation. The department and the commission both voted for her.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What does the record show in place of a senate refusal?",
            options: [
              "The department asked the ministry, which refused",
              "The senate referred the question to the ministry, which upheld the senate's own decision",
              "The faculty voted to refuse and the ministry merely confirmed what the faculty had decided",
              "The curator refused on the ministry's behalf, and the ministry never saw the request",
            ],
            correctIndex: 0,
            explanation:
              "An exemption from a ministry decree could only be granted by the ministry, and on 5 November 1917 it declined to grant one.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "Why is swapping the ministry for a senate not a small slip?",
            options: [
              "It changes what the remedy would have to be",
              "It changes the date of the refusal by two years, since the senate met only in 1915",
              "It changes the number of people who voted, and therefore the margin of the decision",
              "It changes the language of the refusal, which in the record is quoted in German",
            ],
            correctIndex: 0,
            explanation:
              "A senate refusal makes the story about colleagues and implies better colleagues as the fix. A ministry refusal makes it about a rule binding every Prussian university, and the fix is the rule.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What does the senate version do to Hilbert's catalogue arrangement?",
            options: [
              "It turns it into a trick on his colleagues",
              "It makes it an act the faculty had voted to authorise at its meeting of 18 November",
              "It makes it a breach of the ministry's decree for which the university could be penalised",
              "It removes his part in it entirely, since a senate would have named the teacher itself",
            ],
            correctIndex: 0,
            explanation:
              "In the record it rests on an undertaking obtained from the minister himself. The same act means something different depending on which body you think said no.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What general lesson does lesson 21 draw about stories that name institutions?",
            options: [
              "Check which institution is named",
              "Prefer the account that names the more senior of the two bodies said to have decided",
              "Treat any named institution as shorthand for the individuals who sat on it at the time",
              "Assume the university rather than the state, since universities kept fuller records",
            ],
            correctIndex: 0,
            explanation:
              "\"The university refused her\" and \"the state refused her\" are two different sentences, and only one of them is in the file.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "On what ground did the ministry refuse, in its own words?",
            options: [
              "The question could only be decided on principle",
              "That the faculty's own vote had shown the university to be too divided to proceed",
              "That the candidate's teaching under another name already met the practical need",
              "That an exemption would require the consent of every other Prussian university",
            ],
            correctIndex: 0,
            explanation:
              "Grundsätzlich entschieden. The refusal concedes that individual hardship may follow and declines to make an exception anyway.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "Why does the ministry version explain the outcome of 1919 better than the senate version?",
            options: [
              "The answer arrived from Berlin, not from Göttingen",
              "Because the senate was dissolved in the political changes at the end of the war",
              "Because the faculty voted unanimously in 1919, which a senate could have overruled",
              "Because the third application was addressed to the ministry rather than to the university",
            ],
            correctIndex: 0,
            explanation:
              "The stage that changed was the one the university never controlled. Everything on the Göttingen side ran the same way in 1919 as it had in 1915, only faster.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What is the claim that the word \"gratis\" is used to support?",
            options: [
              "That Noether taught for nothing",
              "That the catalogue was concealing her involvement from the Prussian ministry in Berlin",
              "That her courses were open to members of the public as well as to enrolled students",
              "That Hilbert rather than Noether collected the fees paid by the students who enrolled",
            ],
            correctIndex: 0,
            explanation:
              "It is the most interesting of the four errors, because the reader making it did go and look at the document.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "Why does the gratis argument fail?",
            options: [
              "The word is on other professors' courses too",
              "Because the word appears only on the seminar entries and not on the lecture courses",
              "Because the catalogue used it only for courses given during the war years of 1916 to 1918",
              "Because the word was added by the printer and does not appear in the faculty's own copy",
            ],
            correctIndex: 0,
            explanation:
              "Klein's, Landau's, Carathéodory's and Hilbert's own joint seminar with Debye carry it. A word on a full professor's seminar is not a report that he worked unpaid.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "Which of Noether's own entries contradicts the gratis reading?",
            options: [
              "Entry 166",
              "Entry 190, the winter 1916/17 invariant theory seminar that opens the whole run",
              "Entry 202, the summer 1919 integral equations course that closes the whole run",
              "Entry 185, which carries the same number in two different semesters a year apart",
            ],
            correctIndex: 0,
            explanation:
              "It carries \"privatim\" instead. If the fee word reported her pay, that entry would have to say something about her pay, and nobody making the argument has said what.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What is a format error, as lesson 22 defines it?",
            options: [
              "Mistaking one field of a document for another",
              "Quoting a document accurately but attributing it to the wrong year or the wrong volume",
              "Reading a transcription in place of the page image it was made from",
              "Applying a modern category to a historical document that did not use that category",
            ],
            correctIndex: 0,
            explanation:
              "Harder to catch than a misreading, because the evidence itself is genuine right up until you ask what its columns mean.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What field does the catalogue have, and what field does it lack?",
            options: [
              "A field for the student's cost, none for the teacher's pay",
              "A field for the teacher's rank, none for the subject the course actually covered",
              "A field for the days and hours, none for the room in which the course was held",
              "A field for the course number, none for the department the course belonged to",
            ],
            correctIndex: 0,
            explanation:
              "Reading the first as the second is the error. The remedy is a pay record, not a harder squeeze on a fee category.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What is the honest position on Noether's pay for those six semesters?",
            options: [
              "It is not known to this course",
              "That she was paid the fees from the one course marked privatim and nothing else besides",
              "That she was unpaid, since six of the seven entries carry the word gratis on the page",
              "That she was paid by Hilbert personally, as Ihringer's account of the file records",
            ],
            correctIndex: 0,
            explanation:
              "A worse answer than \"she taught for free\", and the one the evidence supports. It is filed as an open question rather than settled by a guess.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "How does MacTutor's English rendering of \"gratis\" help settle this?",
            options: [
              "It points at what students paid",
              "It translates the word as unsalaried, which makes the claim about her pay explicit",
              "It notes that the word appears on every course in the mathematics listing that year",
              "It gives the word untranslated, which shows that its meaning was already disputed",
            ],
            correctIndex: 0,
            explanation:
              "\"No tuition\" makes the direction of the word explicit in a way the Latin does not: tuition is what students pay.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "Why does lesson 22 call this the most interesting of the four errors?",
            options: [
              "The reader making it did go and look",
              "Because it is the only one of the four that no published source has ever repeated",
              "Because it is the only one that the catalogue itself can be made to support",
              "Because it concerns money, which is the part of the record that matters most",
            ],
            correctIndex: 0,
            explanation:
              "Going to the document is the right instinct. The error is in the next step, asking the document a question its format was not built to answer.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "How does Ihringer's translation present the remark about a university and a swimming pool?",
            options: [
              "As something Hilbert almost surely said",
              "As a verbatim transcription from the minutes of the faculty meeting of 18 November 1915",
              "As a remark reported by Noether herself in a letter written many years afterwards",
              "As an anecdote he repeats while noting that no source for it has ever been produced",
            ],
            correctIndex: 0,
            explanation:
              "\"Almost surely\" is a hedge, and this course keeps the hedge rather than dropping it, because the hedge is the evidence status.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "How does the University of Göttingen's own page introduce the same remark?",
            options: [
              "As perhaps not authenticated, but gladly told",
              "As the best-attested of the sayings that have come down from the Göttingen of that period",
              "As a remark whose German wording survives in two versions that differ in one word",
              "As an objection Hilbert made in writing rather than in the faculty meeting itself",
            ],
            correctIndex: 0,
            explanation:
              "\"Vielleicht nicht verbürgt, aber gern erzählt.\" The institution that would most like it to be true is the one hedging hardest.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does this course do with the remark?",
            options: [
              "Prints both positions and no verdict",
              "Prints it as fact, since a university's own historians are the best available authority",
              "Leaves it out entirely, on the ground that a contested claim has no place in a lesson",
              "Prints the German wording and lets the learner judge the reliability of the phrasing",
            ],
            correctIndex: 0,
            explanation:
              "It also declines to print the German wording, because no source read for this course establishes it.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does the University of Göttingen's page state plainly about Hilbert and the lectures?",
            options: [
              "That he announced them under his own name",
              "That he petitioned the ministry twice and was refused on both occasions before 1919",
              "That he shared the teaching of the seminars equally with Noether across the six semesters",
              "That he was reprimanded by the curator for the arrangement in the winter of 1916/17",
            ],
            correctIndex: 0,
            explanation:
              "The page says he got around the refusal that way. Lesson 23 weighs even that against Section 2, where the arrangement rests on an undertaking from the ministry.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What is the difference lesson 23 draws about Hilbert's arrangement?",
            options: [
              "Circumventing a refusal is not taking up an offered alternative",
              "Announcing a course under his name is not the same as teaching it himself in the seminar",
              "Obtaining an undertaking in person is not the same as obtaining one in writing",
              "A refusal by the curator is not the same thing as a refusal by the ministry itself",
            ],
            correctIndex: 0,
            explanation:
              "The compromise of probably 1916 is the ministry undertaking to raise no objection to other ways of enabling her collaboration. That is not the same act as evading it.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Applying the test from Who Gets Named lesson 17, what is this gap evidence about?",
            options: [
              "A permission rule, dated 29 May 1908",
              "The completeness of the University of Göttingen's own archive for the years 1916 to 1919",
              "Whether Noether actually taught the seminars announced under Hilbert's name at all",
              "The reliability of the catalogue's printing, which omitted several teachers that year",
            ],
            correctIndex: 0,
            explanation:
              "Somebody would have had to be permitted to name her, and that permission rule is dated, quotable and independently documented.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Why is this case not an instance of the Matilda effect?",
            options: [
              "Nobody took anything",
              "Because the credit on the printed page routes to a woman rather than to a named man",
              "Because the effect applies only to published papers and not to teaching arrangements",
              "Because the effect was named in 1993 and cannot be applied to events of 1916 at all",
            ],
            correctIndex: 0,
            explanation:
              "It looks like it on the page. The man whose name is on the line spent years trying to get hers on it, so what produced this record is a rule rather than an appetite.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Where did the correction to this record come from?",
            options: [
              "The ministry changing its answer",
              "The catalogue's authors revising the entries once the habilitation had been completed",
              "A later historian identifying the courses and publishing a corrected list of them",
              "The staff index of the following year, which added her name retrospectively to 1916",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named lesson 21 asks who corrects a record and with what. Here it was not the people who made the record, and it was not new evidence.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does lesson 23 say to do with a story you like but cannot confirm?",
            options: [
              "Keep it and label it",
              "Drop it entirely, because an unconfirmed anecdote weakens every claim told beside it",
              "Repeat it and let the reader decide, since the sources are freely available to check",
              "Rewrite it in general terms so that no specific claim is being made about anyone",
            ],
            correctIndex: 0,
            explanation:
              "A labelled story keeps the pleasure and loses nothing but a false certainty, and it is a sentence you can say in public and defend.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "How many academic years do six semesters make?",
            options: [
              "Three",
              "Four, which is why the popular version's figure is usually defended as a rounding",
              "Six, a semester being counted as a full academic year in the German system",
              "Two, since the two winter semesters in the run span the same calendar years",
            ],
            correctIndex: 0,
            explanation:
              "A winter semester and the following summer semester make one academic year, so the run of 1916/17 to 1919 is three of them.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Which two semesters were read to establish that the run begins in 1916/17?",
            options: [
              "Winter 1915/16 and summer 1916",
              "Summer 1919 and the autumn intermediate semester that followed it that year",
              "Winter 1917/18 and summer 1918, the two semesters in the middle of the run",
              "Winter 1919/20 and summer 1920, to confirm that no further entries appeared",
            ],
            correctIndex: 0,
            explanation:
              "Pages 14 and 15 of each, and neither names her. Reading beyond the ends is what turns a count into a span.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Why does a count of found entries not by itself give you a span?",
            options: [
              "You have not checked what lies beyond them",
              "Because a semester may contain more than one entry, as the winter of 1918/19 does",
              "Because an entry may have been printed in a semester in which the course was not given",
              "Because the catalogue was printed before the semester began and could be changed later",
            ],
            correctIndex: 0,
            explanation:
              "Anyone can count what they have found. The negative check on either side is what fixes the beginning and the end.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What makes \"four years\" a more comfortable phrase than \"six semesters\"?",
            options: [
              "It is rounder and heavier",
              "It is the phrase the University of Göttingen's own page uses about the arrangement",
              "It matches the number of catalogue volumes in which the entries appear",
              "It matches the interval between the first application and the trial lecture",
            ],
            correctIndex: 0,
            explanation:
              "And it is close enough to right to survive casual checking, which is the condition every durable error needs.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What does the extra year do to Hilbert's compromise of probably 1916?",
            options: [
              "It makes an improvisation look like a policy",
              "It moves it before the refusal, which reverses the order of the two documents",
              "It removes it from the story, since a four-year run needs no ministerial undertaking",
              "It attaches it to the ministry rather than to Hilbert, who negotiated it in person",
            ],
            correctIndex: 0,
            explanation:
              "The record shows an arrangement made under a refusal that was still being appealed, not a settled long-running practice.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Why does lesson 19 say this error survives?",
            options: [
              "It costs little on its own",
              "Because the catalogue volumes for the earlier semesters have never been digitised",
              "Because both published transcriptions of the entries give the run as four years",
              "Because no reference work states the length of the run in semesters at all",
            ],
            correctIndex: 0,
            explanation:
              "Small errors that change nothing important are the ones nobody bothers to correct, and they are what a bigger claim later rests on.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What is the general rule lesson 19 draws about durations?",
            options: [
              "A duration is a claim needing evidence at both ends",
              "A duration should always be stated in the unit the source itself uses, not converted",
              "A duration is the least important detail of a story and can safely be approximated",
              "A duration should be given as a range whenever the sources disagree about either end",
            ],
            correctIndex: 0,
            explanation:
              "Counting the middle is the easy half. The negative check on either end is what makes the number mean anything.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What ends the run of entries under Hilbert's name?",
            options: [
              "The next catalogue announces a course under her name",
              "The ministry's letter of 8 May 1919, after which the arrangement was no longer needed",
              "The faculty's unanimous vote of June 1919 admitting her as a Privatdozentin",
              "The refusal of November 1917, after which Hilbert stopped announcing her courses",
            ],
            correctIndex: 0,
            explanation:
              "The printed record changes at the next catalogue, not at the moment of the decision. The May and June events are real and earlier.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "Which body does the popular version put the 19 November vote in?",
            options: [
              "The historical and philological department",
              "The mathematics and science department, which had voted for her on 6 November",
              "The commission of referees, which had voted for her at the end of October",
              "The academic senate, which the same version blames for the eventual refusal",
            ],
            correctIndex: 0,
            explanation:
              "Which is the department the record shows standing down on 18 November, having demanded the full faculty vote eight days earlier.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "By how much does the false version move the date of the real meeting?",
            options: [
              "One day",
              "Eight days, from the demand for a full vote to the meeting that followed it",
              "Two weeks, from the departmental vote at the start of the month to the nineteenth",
              "A year, the meeting having taken place in November of the following year",
            ],
            correctIndex: 0,
            explanation:
              "18 becomes 19. A single digit is exactly the size of error that survives a reader's casual check.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Which three sources were checked for a 19 November 1915 date?",
            options: [
              "Tollmien, Ihringer and MacTutor",
              "Tollmien, the University of Göttingen's page, and the catalogue's own staff index",
              "Ihringer, MacTutor and the Nachrichten volume that published her 1918 paper",
              "The catalogue scans, the University of Göttingen's page and Einstein's letter to Klein",
            ],
            correctIndex: 0,
            explanation:
              "None of them has it, and MacTutor has no November 1915 date at all, which makes its silence useful as well as its content.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What happened at the real meeting of 10 November 1915?",
            options: [
              "A full faculty vote was demanded",
              "The whole faculty voted twice, first on principle and then on whether to recommend a refusal",
              "The mathematics and science department voted ten for, seven against, two abstaining",
              "The commission recommended that an exemption be sought from the Prussian ministry",
            ],
            correctIndex: 0,
            explanation:
              "The demand came from the historical and philological department, and the two tallies belong to the meeting eight days later.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What is the fourth thing the false version gets wrong, besides the department, the date and the invented vote?",
            options: [
              "It reverses the outcome",
              "It gives the tally as seventeen to fourteen rather than as a tie of fourteen each",
              "It attributes the decision to the ministry rather than to a department of the faculty",
              "It places the meeting after the curator had already forwarded the request",
            ],
            correctIndex: 0,
            explanation:
              "The department it has blocking her is the one the record shows deciding to take no further steps against her.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Which of the three real obstacles was an administrative act nobody voted on?",
            options: [
              "The curator's cover note",
              "The decree of 29 May 1908, which the ministry issued after consulting the professors",
              "The minister's refusal of 5 November 1917, written in reply to the faculty's request",
              "The minority report, which seven members of the faculty signed that November",
            ],
            correctIndex: 0,
            explanation:
              "It travelled attached to the request it contradicted and needed no majority. The decree and the refusal are the two acts of the ministry.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Where does lesson 20 say a story looking for the blocking inside the faculty's votes is looking?",
            options: [
              "In the wrong building",
              "In the right building but in the wrong year, since the votes fell two years too early",
              "In the right place, since the faculty's votes are what the ministry relied on",
              "In a room whose minutes have not survived, so the question cannot be settled",
            ],
            correctIndex: 0,
            explanation:
              "Two of the three real obstacles are outside the faculty altogether, and the third is a comment attached by an administrator.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Why is a reassembly error harder to dislodge than an invention?",
            options: [
              "Its pieces are all things a reader recognises",
              "Because it is usually published before the correct account and so gets there first",
              "Because the invented element is always the smallest detail in the whole claim",
              "Because a correction has to disprove each of its elements separately to succeed",
            ],
            correctIndex: 0,
            explanation:
              "A reader who recognises the department, the month and the institution stops checking, which is exactly when the invented element slips through.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What does the popular version say about why the refusal happened?",
            options: [
              "Because she was a woman",
              "Because the faculty had divided so evenly that the ministry refused to intervene",
              "Because her published work was held to fall short of the standard for a habilitation",
              "Because the war made it impossible to appoint any new Privatdozent that year",
            ],
            correctIndex: 0,
            explanation:
              "The sex is the right part of the claim. The body doing the refusing is the part the record corrects.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What did the department actually ask the ministry for?",
            options: [
              "An exemption from a ministry decree",
              "Permission to appoint her as an assistant to the mathematics and physics seminar",
              "A ruling on whether the 1908 decree applied to a candidate already holding a doctorate",
              "Confirmation that the faculty was entitled to decide the question for itself",
            ],
            correctIndex: 0,
            explanation:
              "And the ministry refused, on 5 November 1917, on the ground that the question could only be decided as a matter of principle.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "In the senate version, what is the remedy the story implies?",
            options: [
              "Better colleagues",
              "A change in the decree, which only the Prussian ministry could have made",
              "An appeal by the candidate to a higher body within the university's own structure",
              "A transfer to a university outside Prussia, where the rule did not bind the faculty",
            ],
            correctIndex: 0,
            explanation:
              "And in the record's version the remedy is changing the rule, which is what eventually happened, and why the answer came from Berlin.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What does the senate version get wrong about the sympathetic parties?",
            options: [
              "It makes Hilbert's arrangement a trick on his colleagues",
              "It makes the referees hostile when seven of the eight had supported the application",
              "It makes Landau the author of the refusal when he was the dean who prevented one",
              "It makes Klein a bystander when he had suggested the application in the first place",
            ],
            correctIndex: 0,
            explanation:
              "In the record the arrangement rests on an undertaking obtained from the minister himself. The same act means something different depending on which body you think said no.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "Which two sentences does lesson 21 say are not interchangeable?",
            options: [
              "The university refused her, and the state refused her",
              "The faculty voted against her, and the faculty declined to recommend a refusal",
              "She was not named, and she was not teaching the courses announced under his name",
              "The decree barred her, and the minister declined to authorise an exception",
            ],
            correctIndex: 0,
            explanation:
              "Only one of them is in the file. When a story names an institution, check which one it has named.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What kind of error is swapping the ministry for a senate?",
            options: [
              "It relocates the decision",
              "It shifts the date of the decision forward by two years in the sequence",
              "It confuses two bodies with similar names that both sat at Göttingen",
              "It duplicates a real refusal, so that the story contains two where the record has one",
            ],
            correctIndex: 0,
            explanation:
              "And the remedy a story implies depends entirely on where its decision is located, which is why this is not a small slip.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "Which bodies at Göttingen had in fact voted in Noether's favour by the end of 1915?",
            options: [
              "The commission and the mathematics and science department",
              "The academic senate and the historical and philological department, in that order",
              "The curator's office and the commission, the faculty as a whole having declined",
              "The whole faculty, unanimously, and the historical and philological department",
            ],
            correctIndex: 0,
            explanation:
              "The commission on 29 October and the department on 6 November, and the whole faculty approved the text of the exemption request ten to six.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "Which four professors' courses does lesson 22 name as also carrying \"gratis\"?",
            options: [
              "Klein, Landau, Carathéodory and Hilbert",
              "Klein, Runge, Debye and Voigt, four of the eight referees of the summer of 1915",
              "Hilbert, Hartmann, Osterath and Bernays, whose names appear elsewhere in this course",
              "Landau, Carathéodory, Hartmann and Runge, the four referees who wrote at length",
            ],
            correctIndex: 0,
            explanation:
              "Including Hilbert's own joint seminar with Debye. A word on a full professor's seminar is not a report that the professor worked unpaid.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What would the gratis argument have to say about entry 166?",
            options: [
              "Something about her pay, and nobody has said what",
              "That the entry belongs to a different teacher, since its fee word does not match",
              "That the entry was printed in error, which is why one transcription omits it",
              "That the entry records a course she did not in fact teach that semester",
            ],
            correctIndex: 0,
            explanation:
              "If the fee word reported the teacher's pay, then privatim would have to report something about it too. The silence on that point is the argument's weakest link.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "Why is a format error harder to catch than a misreading?",
            options: [
              "The evidence itself is genuine",
              "Because the reader has usually not seen the document and is relying on a transcription",
              "Because the field names are printed only in the front matter of the volume",
              "Because two fields of the same document rarely contain the same kind of value",
            ],
            correctIndex: 0,
            explanation:
              "The word is really there on the page. The mistake is in the question it is being asked, which is a step most readers never examine.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What is the right instinct that the gratis argument starts from?",
            options: [
              "Going to the document",
              "Distrusting the catalogue, which is a record made by the institution being criticised",
              "Preferring the German original to any published English rendering of the entry",
              "Looking for the one entry in the run that differs from the other six",
            ],
            correctIndex: 0,
            explanation:
              "The error is in the next step, not the first. That is what makes it the most interesting of the four.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "How does lesson 22 say the open question about her pay should be improved?",
            options: [
              "Find a pay record",
              "Compare the fee words across every professor's entry in the same volume",
              "Ask the library for permission to reproduce the pages so more readers can check",
              "Count how many of the seven entries carry each of the three fee categories",
            ],
            correctIndex: 0,
            explanation:
              "Not by squeezing a fee category harder. The remedy for a missing fact is a document that carries it.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "Which is the better answer about Noether's pay, in this course's terms?",
            options: [
              "The worse-sounding one that the evidence supports",
              "The one that fits the rest of the story, since a rule that barred her would also unpay her",
              "The one most sources repeat, since agreement among independent accounts is evidence",
              "The one a reader can check on the page, even if the page was not built to answer it",
            ],
            correctIndex: 0,
            explanation:
              "\"Not known to this course\" is a worse answer than \"she taught for free\" and it is the one the documents will carry.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "What does Ihringer's hedge on the swimming pool remark consist of?",
            options: [
              "The words \"almost surely\"",
              "A footnote recording that Tollmien could not trace the remark to any document",
              "A note that the German wording survives in two forms that differ in a single word",
              "A statement that the remark is reported only by writers who were not present",
            ],
            correctIndex: 0,
            explanation:
              "This course keeps the hedge rather than dropping it, because the hedge is the evidence status of the claim.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Which institution's own page hedges the remark hardest?",
            options: [
              "The University of Göttingen's",
              "MacTutor's, which reports the remark without attributing it to any surviving document",
              "The Göttingen library's, which prints a caution on the cover of its digitised volumes",
              "Bryn Mawr's, which recorded her own account of the Göttingen years after 1933",
            ],
            correctIndex: 0,
            explanation:
              "\"Vielleicht nicht verbürgt, aber gern erzählt.\" The institution that would most like it to be true is the one calling it possibly unauthenticated.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does this course decline to print about the remark?",
            options: [
              "Its German wording",
              "The name of the man who is supposed to have made it, since the attribution is disputed",
              "The occasion on which it is supposed to have been said, which no source records",
              "Ihringer's English rendering of it, which is a translation of a translation",
            ],
            correctIndex: 0,
            explanation:
              "No source read for this course establishes the wording, so the course gives both positions on the remark and none of the words.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What German verb does the University of Göttingen's page use for what Hilbert did about the refusal?",
            options: [
              "Umging, meaning got around",
              "Verweigerte, meaning refused, which describes the ministry rather than Hilbert",
              "Vorenthielt, meaning withheld, which is Einstein's verb from December 1918",
              "Zugelassen, meaning admitted, which is the word Tollmien uses of the 1919 decision",
            ],
            correctIndex: 0,
            explanation:
              "He got around the refusal by announcing her lectures under his name. Lesson 23 weighs even that against the ministry's undertaking of probably 1916.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does lesson 23 say the gap in the 1916 record is evidence about?",
            options: [
              "A permission rule",
              "The completeness of the university's archive for the war years at Göttingen",
              "The reliability of the catalogue's printer, who omitted names in several volumes",
              "Whether the seminars announced under Hilbert's name were given at all",
            ],
            correctIndex: 0,
            explanation:
              "Somebody would have had to be permitted to name her, and that rule is dated 29 May 1908 and can be read independently of the catalogue.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does the Matilda effect describe, in the course this one links to?",
            options: [
              "A woman's credit routing to a man",
              "An institution correcting a record long after the people involved have died",
              "A rule that decides who may be named before any of the work has been done",
              "The tendency of a better-known name to attract citations away from a lesser-known one",
            ],
            correctIndex: 0,
            explanation:
              "Who Gets Named lesson 9. This case resembles it on the printed page and does not share its cause, and saying that difference out loud is the job of Section 6.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Why do a permission rule and a Matilda-effect case call for different remedies?",
            options: [
              "One is an appetite and the other is a rule",
              "One concerns teaching and the other concerns publication, which are governed separately",
              "One can be corrected by the institution and the other only by a later historian",
              "One leaves a documentary trail and the other leaves no record of any kind",
            ],
            correctIndex: 0,
            explanation:
              "Nobody took anything here, and the man whose name is on the line spent years trying to get hers printed instead.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What does a labelled story keep, and what does it lose?",
            options: [
              "It keeps the pleasure and loses a false certainty",
              "It keeps the detail and loses the name of the person supposed to have said it",
              "It keeps the source and loses the wording, which no account agrees on",
              "It keeps the argument and loses the anecdote, which was never evidence anyway",
            ],
            correctIndex: 0,
            explanation:
              "\"Hilbert is said to have told the faculty ..., though the university's own historians call the remark possibly unauthenticated\" is a sentence you can say in public and defend.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "Which lesson of Who Gets Named asks who corrects a record and with what?",
            options: [
              "Lesson 21",
              "Lesson 9, which names the mechanism Margaret Rossiter described in 1993",
              "Lesson 17, which sets out the test for turning a gap in a record into a finding",
              "Lesson 7, which treats a caption as a one-line format with a cap on who fits in it",
            ],
            correctIndex: 0,
            explanation:
              "Here the correction came from the ministry changing its answer, not from the catalogue's authors changing their minds. Lesson 7 is in a different course again.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — pools 41, serves 10, placed last
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam",
      title: "Final · Who may teach",
      section: "Final",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which single document decided, in advance, that Noether could not be named as a course's teacher?",
            options: [
              "The Prussian decree of 29 May 1908",
              "The minority report signed by seven members of the philosophical faculty in November 1915",
              "The curator's cover note of 9 December 1915, which travelled with the faculty's request",
              "The minister's letter of 5 November 1917 refusing to authorise any exception in her case",
            ],
            correctIndex: 0,
            explanation:
              "The 1908 decree is the standing rule. The 1915 and 1917 documents are what happened when the faculty asked for an exemption from it.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "What is the one-sentence difference between this case and a case of credit being taken?",
            options: [
              "A rule decided the naming before anyone worked",
              "The work was published under two names rather than under the name of a single author",
              "The credit was corrected within a few years, which a case of theft would have resisted",
              "The person whose name appeared had also contributed substantially to the same courses",
            ],
            correctIndex: 0,
            explanation:
              "Nobody in this record claims her mathematics, and the man whose name is on the line petitioned the minister for her. That is a permission rule, not a theft.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What was the venia legendi?",
            options: [
              "The permission to lecture",
              "The right to examine doctoral candidates in the faculty to which a lecturer belonged",
              "The salary attached to a chair, which a Privatdozent received at a reduced rate",
              "The ministry's authorisation for a university to announce a course in its catalogue",
            ],
            correctIndex: 0,
            explanation:
              "It is what the habilitation carried, and the exact phrase Einstein used in December 1918 for the thing being withheld from her.",
            sourceLessonSlug: "the-right-to-be-named",
          },
          {
            prompt: "What preceded the decree of 1908?",
            options: [
              "A ministry survey of professors in 1907",
              "A test case at Göttingen in which a woman's application had been refused by the faculty",
              "A ruling by the academic senates of the Prussian universities acting in concert",
              "A petition from the philosophical faculties asking the ministry to settle the question",
            ],
            correctIndex: 0,
            explanation:
              "The ministry asked, then ruled, and the ruling bound every later case including this one.",
            sourceLessonSlug: "the-decree-of-1908",
          },
          {
            prompt: "On whose suggestion did Noether apply to habilitate in July 1915?",
            options: [
              "Klein and Hilbert",
              "Landau and Carathéodory, the two referees who called her an exception in their reports",
              "Debye and Voigt, who would later accompany Hilbert to see the minister in person",
              "The dean of the philosophical faculty, acting on the commission's recommendation",
            ],
            correctIndex: 0,
            explanation:
              "The file records \"Auf Anregung von Klein und Hilbert\". Two of the most powerful mathematicians in Germany asked her to make an application a decree had already forbidden.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What three questions does this course tell you to ask of any claim about the case?",
            options: [
              "Which stage, which document, what date",
              "Who said it, who repeated it, and who has ever tried to check whether it was true",
              "Which archive, which catalogue number, and whether the document has been digitised",
              "Whether it is plausible, whether it is flattering, and whether another source agrees",
            ],
            correctIndex: 0,
            explanation:
              "A claim that cannot answer all three is not necessarily false. It is one you are carrying on trust rather than on evidence.",
            sourceLessonSlug: "july-1915-the-application",
          },
          {
            prompt: "What was the balance of the eight referee reports of 1915?",
            options: [
              "Seven for, one against",
              "Four for and four against, which is why the commission had to vote in October",
              "Six for, one against and one undated and therefore not counted in the tally at all",
              "Five for and three against, the three being the referees outside mathematics",
            ],
            correctIndex: 0,
            explanation:
              "Only Hartmann spoke decidedly against. The men who had read her work mostly wanted her admitted, so the refusal was not about the reading.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "What did Landau's and Carathéodory's reports have in common?",
            options: [
              "Both argued she was an exception",
              "Both declined to comment on the candidate's sex and confined themselves to the mathematics",
              "Both were undated, which is why Tollmien's account does not place them in the sequence",
              "Both were withdrawn before the commission voted at the end of October 1915",
            ],
            correctIndex: 0,
            explanation:
              "One of the few exceptions, and a singular phenomenon. An exception argument grants the rule, which is what the minister refused on in 1917.",
            sourceLessonSlug: "eight-reports",
          },
          {
            prompt: "How did the mathematics and science department divide on 6 November 1915?",
            options: [
              "Ten for, seven against, two abstaining",
              "Seventeen for, fourteen against, with one member of the department abstaining",
              "Fourteen for and fourteen against, the tie being settled by the vote of the dean",
              "Unanimously in favour, as the commission had voted a week earlier that October",
            ],
            correctIndex: 0,
            explanation:
              "The margin worsened as the question travelled away from the mathematicians, which is what tells you where the opposition actually lived.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What does the typing error on Tollmien's page teach?",
            options: [
              "A source is a set of statements, each checkable",
              "That a secondary source should never be relied on where a primary document survives",
              "That a historian's transcription is less reliable than a reference work's summary",
              "That dates in German sources should always be read in the day-month-year order",
            ],
            correctIndex: 0,
            explanation:
              "Tollmien is the backbone of this course and contains an obvious slip. Both are true at once, and reading a second source alongside is what makes the slip visible.",
            sourceLessonSlug: "two-votes-and-a-typo",
          },
          {
            prompt: "What were the two questions the whole faculty voted on in November 1915?",
            options: [
              "Opposition in principle, and whether to recommend a refusal",
              "Whether to admit her, and whether to ask the ministry to change the decree of 1908",
              "Whether the other department could demand a vote, and whether to hold one at all",
              "Whether to approve the exemption text, and whether to send it through the curator",
            ],
            correctIndex: 0,
            explanation:
              "Seventeen to fourteen with one abstention on the first; a fourteen to fourteen tie on the second, which with the dean's vote meant no recommendation to refuse was made.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What is the difference between a vote of opinion and a vote of consequence in this record?",
            options: [
              "Only the second decided what left the room",
              "Only the second was recorded in the minutes the university's archive has preserved",
              "Only the second required a majority of the whole faculty rather than of those present",
              "Only the second was reported to the ministry, the first being an internal matter",
            ],
            correctIndex: 0,
            explanation:
              "The popular version keeps the first tally, which sounds like a defeat, and loses the second, which is the one with consequences.",
            sourceLessonSlug: "the-eighteenth-of-november",
          },
          {
            prompt: "What did the curator add to the faculty's request in December 1915?",
            options: [
              "A negative comment",
              "A covering letter from Hilbert setting out the mathematical case for the exemption",
              "The minority report of the seven faculty members who had opposed the habilitation",
              "A note recording that the faculty had tied on whether to recommend a refusal",
            ],
            correctIndex: 0,
            explanation:
              "Nobody voted on it and it needed no majority. A procedure can be won at every stage that has a tally and lost at a stage that has none.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What authority does the catalogue arrangement of 1916 to 1919 actually rest on?",
            options: [
              "The ministry's undertaking after Hilbert's visit",
              "The faculty's vote of 18 November 1915 approving the text of the exemption request",
              "The curator's discretion to authorise teaching arrangements within the university",
              "A provision of the 1908 decree permitting a professor to be assisted by a doctor",
            ],
            correctIndex: 0,
            explanation:
              "No objection would be raised against other ways of making her collaboration possible. As far as the record shows, the arrangement was the ministry's own alternative to changing the rule.",
            sourceLessonSlug: "the-cover-note-and-the-refusal",
          },
          {
            prompt: "What are the six fields of a Göttingen catalogue entry?",
            options: [
              "Subject, teacher, support line, day and hours, fee word, number",
              "Subject, teacher, faculty, examination prepared for, room number and enrolment figure",
              "Subject, teacher, textbook, day and hours, fee payable and the department's own code",
              "Subject, teacher, the assistant's name, the term, the fee word and the lecture hall",
            ],
            correctIndex: 0,
            explanation:
              "Each does a different job, and the support line is the one that carries Noether's name in all seven entries.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "Why does this course link to the GDZ scans instead of showing them?",
            options: [
              "Republishing needs the library's written permission",
              "Because the library's viewer displays the pages at a higher resolution than a course page",
              "Because the scans are held under a licence that expires at the end of each academic year",
              "Because a link cannot be misread, whereas a reproduced image can be cropped misleadingly",
            ],
            correctIndex: 0,
            explanation:
              "The terms are printed on the downloadable file and this course does not have that permission. Free to read is not free to republish.",
            sourceLessonSlug: "how-to-read-a-catalogue-entry",
          },
          {
            prompt: "How many entries does the catalogue run contain, and across how many semesters?",
            options: [
              "Seven across six",
              "Six across six, one for each semester from the winter of 1916/17 to the summer of 1919",
              "Eight across eight, beginning with the winter semester that followed her application",
              "Seven across seven, counting the autumn intermediate semester of 1919 as the last",
            ],
            correctIndex: 0,
            explanation:
              "The winter of 1918/19 carries two: the lecture course numbered 166 and the exercises numbered 172.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "In how many ways does Tollmien's transcription differ from the page images?",
            options: [
              "Three",
              "One, a single weekday in the summer of 1918 that the page image gives differently",
              "None, which is why her list is the source most later accounts have relied upon",
              "Seven, one for each of the entries transcribed from the six semesters of the run",
            ],
            correctIndex: 0,
            explanation:
              "The summer 1918 weekday, the dropped initial and weekday in winter 1916/17, and the omission of entry 166 altogether.",
            sourceLessonSlug: "seven-entries-six-semesters",
          },
          {
            prompt: "What does the winter 1916/17 staff index show?",
            options: [
              "Course 190 under Hilbert, and no Noether entry",
              "An entry for Noether with no courses listed beside it, unlike the entries for professors",
              "Course 190 under both names, with a cross-reference from one entry to the other",
              "No entry for either of them, the mathematics seminar being indexed as a whole",
            ],
            correctIndex: 0,
            explanation:
              "Page 29 lists Hilbert's courses as 179, 189 and 190. Page 31 runs Nelson, Nieschmidt, Nolte, with nothing where she belongs.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What do the dance master and the drawing teacher in the index establish?",
            options: [
              "The test was being nameable, not rank",
              "That the index covered every person paid by the university in any capacity that year",
              "That the catalogue was compiled by an administrator without reference to the faculties",
              "That teachers without a doctorate were listed separately from those who held one",
            ],
            correctIndex: 0,
            explanation:
              "A dance master met that test. The mathematician then teaching invariant theory did not, and the difference is the 1908 decree.",
            sourceLessonSlug: "the-index-where-the-name-is-not",
          },
          {
            prompt: "What does the exercise in Section 3 ask a learner to do if the page disagrees with the lesson?",
            options: [
              "Trust the page and tell us",
              "Record both readings and note which published transcription each of them agrees with",
              "Check whether the library has replaced the scan with a corrected image since the reading",
              "Prefer the lesson, since its transcription was checked against two independent sources",
            ],
            correctIndex: 0,
            explanation:
              "The page image is the evidence and every transcription, this course's included, is a report of it.",
            sourceLessonSlug: "transcribe-the-entry",
          },
          {
            prompt: "What word did Einstein use for what was being done to Noether?",
            options: [
              "Withheld",
              "Refused, which would have pointed at the ministry's decision of November the year before",
              "Delayed, which is how the faculty's own correspondence described the position in 1918",
              "Forbidden, which is the word the Prussian decree of 1908 itself used of the habilitation",
            ],
            correctIndex: 0,
            explanation:
              "Vorenthalten. It names an agent and an act, which is more than a missing catalogue entry can show on its own.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "What does this course refuse to explain about the years between the refusal and the third application?",
            options: [
              "What changed inside the ministry",
              "Why Noether continued to teach under Hilbert's name after the refusal of November 1917",
              "Why Einstein wrote to Klein rather than to Hilbert, who was closer to the case",
              "Why the faculty waited fourteen months before submitting a further application",
            ],
            correctIndex: 0,
            explanation:
              "No document read for this course answers it, so it is filed as an open question rather than guessed at.",
            sourceLessonSlug: "einstein-to-klein",
          },
          {
            prompt: "How long did the ministry take over the first request, and how long over the third?",
            options: [
              "Nearly two years, then under three months",
              "Under three months in both cases, the delay in 1915 having been inside the university",
              "Fourteen months, then three days, which is the time the letter took in the post",
              "Four weeks, then nearly two years, the second request being the one that was delayed",
            ],
            correctIndex: 0,
            explanation:
              "Forwarded 9 December 1915, answered 5 November 1917. Requested 15 February 1919, answered 8 May 1919.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What does the speed of the third attempt locate?",
            options: [
              "The obstacle, outside the university",
              "A change in the faculty's assessment of the candidate's mathematical standing",
              "A simplification of the habilitation procedure introduced after the war ended",
              "The removal of the curator's power to comment on a request being forwarded",
            ],
            correctIndex: 0,
            explanation:
              "The same faculty and the same procedure completed in under four months once the ministry stopped refusing.",
            sourceLessonSlug: "the-third-application",
          },
          {
            prompt: "What happened on 4 June 1919, and what followed it?",
            options: [
              "The trial lecture, then unanimous admission",
              "The colloquium, followed a week later by the trial lecture on invariant variational problems",
              "The ministry's statement of no objection, received at Göttingen three days afterwards",
              "The publication of the first catalogue entry announcing a course in her own name",
            ],
            correctIndex: 0,
            explanation:
              "The lecture was on questions of module theory, and Tollmien's account records that she was then unanimously admitted as a Privatdozentin for mathematics.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What is missing from the autumn 1919 catalogue line that had been in all seven earlier entries?",
            options: [
              "A professor, and the phrase about support",
              "The fee word, which the catalogue no longer printed for a course given by a Privatdozentin",
              "The days and the hours, which that semester's catalogue left to be settled separately",
              "The course number, which the staff index of that volume supplies in its place",
            ],
            correctIndex: 0,
            explanation:
              "The teacher slot holds her name, her doctorate and her first name spelled out. Three and a half years of catalogues had said who was allowed to be named; this one says who taught.",
            sourceLessonSlug: "her-own-name-in-the-catalogue",
          },
          {
            prompt: "What does Tollmien's account say the 1918 paper established?",
            options: [
              "A connection between symmetry and conservation theorems",
              "A method for solving variational problems in the general theory of relativity",
              "A proof that a conserved quantity exists in every physical system without exception",
              "A classification of invariants, which later became the foundation of abstract algebra",
            ],
            correctIndex: 0,
            explanation:
              "A connection unknown until then, and the results carry her name in the plural because there are two of them.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "Why does this course describe the theorems rather than stating them?",
            options: [
              "Its sources describe rather than state them",
              "Because a precise statement would require notation the course has decided not to use",
              "Because the two theorems are stated differently in the paper and in later textbooks",
              "Because the result belongs to physics rather than to the history this course teaches",
            ],
            correctIndex: 0,
            explanation:
              "Paraphrasing a theorem whose statement you have not read produces a confident sentence nobody has checked, which is the failure this whole course is built against.",
            sourceLessonSlug: "what-the-theorem-connects",
          },
          {
            prompt: "What claim about the 1918 paper does this course decline to assert?",
            options: [
              "That it served as her habilitation thesis",
              "That Klein presented it to the Göttingen scientific society on 26 July of that year",
              "That it appeared in the society's Nachrichten on pages 235 to 257 of volume 37",
              "That it connected theorems about symmetry with theorems about conservation",
            ],
            correctIndex: 0,
            explanation:
              "None of the sources read for this course says so. The other three are things they do say, and the course asserts them.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What habit does lesson 16 warn against, and what does it link that habit to?",
            options: [
              "Promoting a sequence into a fact, as in the four errors",
              "Quoting a translation in place of an original, as Ihringer's readers are apt to do",
              "Citing a page range without having opened the volume the range refers to",
              "Relying on a single historian for a whole account, as this course does for 1915",
            ],
            correctIndex: 0,
            explanation:
              "Each of the four errors in Section 6 is a sentence somebody found plausible and nobody checked.",
            sourceLessonSlug: "the-paper-of-1918",
          },
          {
            prompt: "What did the title of 1922 come with?",
            options: [
              "No salary",
              "A salary of 3000 marks, which Ihringer gives for the year after the title was awarded",
              "A chair in mathematics and the right to supervise doctoral candidates of her own",
              "The venia legendi, which she had been admitted to three years earlier in any case",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer records the title and the absence of a salary together. The 3000 marks is a real figure from 1924 and a different claim.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What does this course call the most portable idea in it?",
            options: [
              "A record carries the honour and drops the condition",
              "A permission rule is not a theft, and the two call for different remedies entirely",
              "An index omission travels further than an omission from the body of a document",
              "A duration is a claim, and a claim needs evidence at both of its ends",
            ],
            correctIndex: 0,
            explanation:
              "A title, an award or a credit line has a field in the format. Whether the person could live on it usually has none.",
            sourceLessonSlug: "a-title-without-a-salary",
          },
          {
            prompt: "What three dates close the record in this course?",
            options: [
              "7 April 1933, October 1933, 14 April 1935",
              "5 November 1917, 8 May 1919, and 4 June 1919, the three decisions of the ministry",
              "23 March 1882, 4 June 1919 and 14 April 1935, the birth, the admission and the death",
              "29 May 1908, 18 November 1915 and 5 November 1917, the three refusals of the state",
            ],
            correctIndex: 0,
            explanation:
              "The civil-service law, the emigration to Bryn Mawr, and her death. She was 53.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Who does this course identify as the decisive actor across the whole record?",
            options: [
              "The state",
              "Hilbert, whose interventions shaped every stage from the application to the arrangement",
              "The philosophical faculty, whose votes determined the outcome of each of the attempts",
              "The curator, whose comments controlled how the ministry read each request it received",
            ],
            correctIndex: 0,
            explanation:
              "Four times and in four different directions: the decree of 1908, the refusals, the withdrawal of objection in 1919, and the law of 1933.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "Where does the correction to the catalogue's account of 1916 come from?",
            options: [
              "The other documents, read beside it",
              "A closer reading of the entry itself, whose support line names her plainly enough",
              "The staff index of a later semester, once her own entry finally appears in it",
              "Tollmien's transcription, which restores the details the printed entry omitted",
            ],
            correctIndex: 0,
            explanation:
              "The catalogue is not lying. It records accurately a permission decided elsewhere, and only the decree, the reports, the tallies and the refusal can correct it.",
            sourceLessonSlug: "nineteen-thirty-three",
          },
          {
            prompt: "How long did the run of entries last, and what is the popular version's error?",
            options: [
              "Six semesters; the popular version adds a year",
              "Four years; the popular version understates it by a full academic year of teaching",
              "Six semesters; the popular version places them all before the refusal of 1917",
              "Three semesters; the popular version doubles the length of the whole arrangement",
            ],
            correctIndex: 0,
            explanation:
              "Six semesters is three academic years. A run from 1916/17 to 1919 touches four calendar years, which is where the extra one comes from.",
            sourceLessonSlug: "six-semesters-not-four-years",
          },
          {
            prompt: "What is wrong with the claim that a departmental vote on 19 November 1915 blocked the habilitation?",
            options: [
              "The date is in no source, and that department stood down",
              "The vote took place, but a day earlier and with the opposite tally to the one reported",
              "The department named is correct, but the vote concerned the exemption text rather than her",
              "The vote was taken by the whole faculty, not by a department, and it was not about her",
            ],
            correctIndex: 0,
            explanation:
              "Four real elements reassembled wrongly: the department is kept, the date is moved, the vote is invented, and the outcome is reversed.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "What makes a reassembly error hard to dislodge?",
            options: [
              "Every piece of it feels familiar",
              "It is usually published in a source that no reader is able to consult for themselves",
              "It concerns a detail too small for most readers to think worth the effort of checking",
              "It cannot be refuted without producing a document that states the opposite outright",
            ],
            correctIndex: 0,
            explanation:
              "A reader who recognises the department, the month and the institution stops checking, which is exactly when the invented element slips through.",
            sourceLessonSlug: "the-vote-that-is-not-there",
          },
          {
            prompt: "Why does it matter whether a ministry or a senate refused her?",
            options: [
              "The two imply different remedies",
              "The two would have decided in different years, which changes the length of the run",
              "The two kept their records in different archives, which changes what survives today",
              "The two would have applied different rules, only one of which is still documented",
            ],
            correctIndex: 0,
            explanation:
              "Better colleagues would answer a senate. Only changing the rule answers a ministry, which is what eventually happened, and why the answer came from Berlin.",
            sourceLessonSlug: "the-ministry-not-the-senate",
          },
          {
            prompt: "What question was the word \"gratis\" never built to answer?",
            options: [
              "What the teacher was paid",
              "What a student was charged for attending a course in the mathematics seminar",
              "Whether a course was open to the public as well as to the university's own students",
              "Whether a course counted towards the requirements of any university examination",
            ],
            correctIndex: 0,
            explanation:
              "The catalogue has a field for the student's cost and none for the teacher's pay. Mistaking the first for the second is a format error, not a misreading.",
            sourceLessonSlug: "what-gratis-cannot-prove",
          },
          {
            prompt: "How does this course handle the remark about a university and a swimming pool?",
            options: [
              "It names both positions and reaches no verdict",
              "It prints it as fact, on the authority of the University of Göttingen's own historians",
              "It omits it, on the ground that a contested anecdote has no place in a cited course",
              "It prints the German wording so that a reader can weigh the phrasing for themselves",
            ],
            correctIndex: 0,
            explanation:
              "Ihringer says almost surely; the university's own page says perhaps not authenticated but gladly told. The German wording is not printed, because no source read for this course establishes it.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
          {
            prompt: "What is the transferable move this course ends on?",
            options: [
              "Find the rule that decided the record's shape",
              "Compare every published transcription against the page image before quoting either",
              "Assume an absence is evidence of suppression until a document shows otherwise",
              "Date each stage of a procedure before drawing a conclusion about its outcome",
            ],
            correctIndex: 0,
            explanation:
              "Ask what would have had to happen for the record to exist. If somebody would have had to be permitted, the gap is evidence about a permission rule, and rules are written down.",
            sourceLessonSlug: "a-remark-and-a-gap",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `who-may-teach`. Every one of them corresponds to a hedge that is written into
// a lesson in so many words, per the citation-verification rule.
//
//  A. key "noether-1918-paper-as-habilitation-thesis" · severity medium · lesson "the-paper-of-1918"
//     title: Was "Invariante Variationsprobleme" (1918) Noether's habilitation thesis?
//     quote: "None of the sources read for this course says it."
//     claim: Lesson 16 declines the widely repeated claim that the 1918 paper served as her
//            habilitation work, and teaches the dated sequence instead (paper presented by Klein
//            26 July 1918; Einstein to Klein 27 December 1918; third application 18 January 1919;
//            trial lecture on "Fragen der Modultheorie" 4 June 1919).
//     stakes: The brief's own outline states the link, so a course that silently drops it looks
//            evasive and a course that asserts it teaches an unsourced connection. Settling it
//            either restores a good closing beat or confirms a correction worth publishing.
//     needs: a statement, from the habilitation file or a historian working from it, naming the
//            work submitted with the January 1919 application.
//     where: Tollmien's 1990 documentary article (cited by Ihringer as Göttinger Jahrbuch 38,
//            pp. 153-219; NOT fetched, so that citation is REPORTED and appears nowhere in the
//            course); the Göttingen university archive's habilitation file.
//
//  B. key "goettingen-catalogue-fee-words" · severity medium · lesson "how-to-read-a-catalogue-entry"
//     title: What did "gratis", "privatim" and "privatissime" mean in the Göttingen catalogue?
//     quote: "This course does not tell you what those categories meant in detail, because none of
//            the sources read for it defines the Göttingen fee words."
//     claim: The course teaches only what it can show: "gratis" appears on many professors'
//            courses on the same pages, MacTutor renders it "no tuition", and one Noether entry
//            (no. 166, WS 1918/19) reads "privatim" instead.
//     stakes: The fourth correction in Section 6 turns on the fee word not being a statement about
//            the teacher's pay. That argument holds without definitions, but a documented
//            definition would make Section 3 teach the format rather than gesture at it.
//     needs: a contemporary definition of the three fee categories as used in a German university
//            course catalogue of the 1910s, with the source that defines them.
//     where: the front matter of any volume in GDZ PPN654655340; Prussian university regulations
//            of the period; a history of German university teaching practice.
//
//  C. key "noether-pay-1916-1919" · severity medium · lesson "a-title-without-a-salary"
//     title: Was Noether paid anything for the teaching of 1916 to 1919?
//     quote: "What Noether was paid, if anything, for the six semesters of teaching between 1916
//            and 1919 is not settled by anything read for this course."
//     claim: The course refuses both the "she taught for free" reading of "gratis" and any claim
//            that she was paid, and says so twice (lessons 8 and 22).
//     stakes: The popular version's most repeated single detail. A pay record would either confirm
//            the substance of a claim whose usual evidence is wrong, or refute it outright.
//     needs: a university or ministry pay record covering Noether at Göttingen, 1916 to 1919, and
//            the name of whoever received the fees for the one "privatim" entry (no. 166).
//     where: the Göttingen university archive (curator's accounts); Tollmien's 1990 article.
//
//  D. key "prussian-ministry-change-1917-1919" · severity low · lesson "einstein-to-klein"
//     title: What changed at the ministry between the refusal of 1917 and the no objection of 1919?
//     quote: "What the sources read for this course do not contain is any document explaining what
//            changed inside the ministry."
//     claim: Lesson 12 states the refusal of 5 November 1917 and the statement of no objection of
//            8 May 1919 and declines to explain the reversal.
//     stakes: It is the only causal question in the course left entirely open, and a reader who
//            wants a villain or a hero will fill it in themselves if nobody does.
//     needs: a ministry document, or a historian's account resting on one, naming the decision or
//            the change of policy behind the 1919 answer.
//     where: Tollmien's 1990 article; Prussian ministry of education files for 1918 to 1919.
//
//  E. key "goettingen-catalogue-1919-autumn-scan" · severity low · lesson "her-own-name-in-the-catalogue"
//     title: Confirm the autumn 1919 catalogue line against the page image.
//     quote: "This one is Tollmien's transcription, not a reading of the page image: the scan for
//            that volume was not opened for this course."
//     claim: The course prints "Analytische Geometrie: Dr. Emmy Noether, Mittwoch und Sonnabend
//            11-1 Uhr, privatim" as Tollmien's transcription and marks its evidential level.
//     stakes: It is the one line in the course that shows the record correcting itself, and it is
//            the only catalogue line here not read on a scan. Section 3 has already shown that
//            Tollmien's transcriptions differ from the images in three places.
//     needs: the page image for the Herbstzwischensemester 1919 volume, and the entry as printed.
//     where: GDZ PPN654655340 for 1919/20 (its IIIF manifest returned HTTP 500 on 2026-09-18);
//            the library's reading room; gdz@sub.uni-goettingen.de.
//
//  F. key "noether-1933-removal-document" · severity low · lesson "nineteen-thirty-three"
//     title: What document ended Noether's position at Göttingen in 1933?
//     quote: "It does not have the document that ended her position at Göttingen, and it does not
//            quote one."
//     claim: Lesson 18 gives Ihringer's sequence (the civil-service law of 7 April 1933, then
//            emigration in October 1933) as a sequence, and asserts no causal link between them.
//     stakes: The course's last section is deliberately thin. If the dismissal document exists and
//            is quotable, the ending can rest on a document like the rest of the course.
//     where: the Göttingen university archive; Tollmien; published work on the 1933 dismissals.
//
//  G. key "goettingen-staff-indexes-1917-1919" · severity low · lesson "the-index-where-the-name-is-not"
//     title: Do the other five staff indexes also omit Noether?
//     quote: "Only the winter 1916/17 index was checked."
//     claim: Lesson 10 states the omission for one semester only and says so out loud.
//     stakes: Six omissions are a pattern and one is an anecdote. It is also the cheapest check in
//            this list: five page images, already digitised and free to read.
//     needs: the "Alphabetisches Verzeichnis der Dozenten" pages for SS 1917, WS 1917/18, SS 1918,
//            WS 1918/19 and SS 1919, and whether any of them carries a Noether entry.
//     where: GDZ PPN654655340, the same series as the entries in Section 3.
//
// CLAIMS DROPPED FOR LACK OF EVIDENCE (no check needed; they are simply not in the course):
//  - The famous "returning soldiers" quotation. Lesson 4 teaches Ihringer's PARAPHRASE of Hartmann's
//    written report and says in the lesson why it is a paraphrase.
//  - The German wording of Hilbert's bathing-establishment remark. Lesson 23 teaches the remark as
//    contested, names Ihringer's "almost surely" against the University of Göttingen's "vielleicht
//    nicht verbürgt", and prints no German.
//  - Tollmien's 1990 article as Göttinger Jahrbuch 38, pp. 153-219. REPORTED only (read as
//    Ihringer's citation), so the course never cites the article and never uses the volume or page
//    range, including as a quiz distractor.
//  - "Hilbert on the mathematics only" (the brief's outline gloss of his referee report). Section 6
//    of the brief records only that his report is undated, so lesson 4 says that and no more.
//
// FOR THE REGISTERING AGENT (outside this file)
// ──────────────────────────────────────────────
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts. Its own call rather than any CREDIT
// array loop, because that loop does not pass visibility. NO migration: `pnpm seed:courses`.
//
//   // "Who May Teach" (Emmy Noether and the Göttingen course catalogue). PRIVATE, free, and with
//   // NO series code: BAM's decision of 2026-09-19 that private courses do not carry CREDIT codes.
//   // Approved brief: plans/future-courses/uncredited/2026-09-18-emmy-noether-brief.md (2026-09-19).
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "who-may-teach",
//     course: WHO_MAY_TEACH_COURSE,
//     category: "Culture & History",
//     additionalCategories: ["Science & Math"],
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM (plans/83). Built from the GDZ scans of the Göttingen course catalogue and Tollmien's account of the habilitation file; a public flip needs his say-so for this subject.",
//     seriesSlug: "credit",
//     seriesTitle: "Credit: Who Gets Named",
//     seriesOrder: <next free>,
//     // NO seriesCode / seriesPosition / seriesTrack, per BAM 2026-09-19.
//   });
//
// CITATIONS: add `who-may-teach` to STAGED_COURSES in src/lib/citations.ts and run
//   `pnpm gen:citations` once seeded. Every teaching lesson carries an APA 7 `## Sources` block, so
//   `pnpm check:citations` should find a non-zero count.
// STANDARDS: this is a primary-source history course (sourcing, corroboration, chronology,
//   claim-versus-evidence, and a transcription exercise against a digitised original), so per the
//   repo rule it should be MAPPED in src/lib/standards/ rather than BACKLOGged. Until it is mapped
//   it needs a BACKLOG line in scripts/check-standards-coverage.ts.
// ROADMAP + README: per the docs-sync rule, src/lib/roadmap.ts and the README course list.
// SPEC: `npx tsx scripts/audit-course.ts who-may-teach --spec` once registered. Measured here
//   against the same formula (round(words / 35), clamped 40 to 100): section pools sit exactly at
//   target at 59, 72, 65, 50, 65 and 78, the final pools 43 serving 10, every quiz passes at 80 and
//   shuffles, and every question carries `explanation` + a `sourceLessonSlug` that resolves.
