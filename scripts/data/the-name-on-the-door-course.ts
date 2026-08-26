import type { AuthoredCourse } from "./authored-course";

// CREDIT-03 · "The Name on the Door" (Culture & History). Source brief:
// plans/future-courses/08-black-creator-series-research.md §6 ("Architecture"), which called the
// Julian Abele myth-correction "a gift" and recommended the spine below. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A BUILDING IS CREDITED TO A FIRM, AND A FIRM IS NAMED AFTER WHOEVER OWNS IT. An employee designer
// does not appear anywhere the public can see, and frequently not on the drawings either, because
// firm practice was that only the principal signed. LICENSURE ADDS A SECOND GATE: you cannot be the
// architect of record without a licence, and licensure was gatekept.
//
// Like CREDIT-02, the mechanism is kept honest. The firm convention applied to EVERY employee
// designer regardless of race, and the course proves it from the same sources it uses for Abele:
// Howell Lewis Shay led the Philadelphia Museum of Art inside the Trumbauer office for years and is
// not the public credit either, and the designer who finished Irvine Auditorium is so far outside
// the record that the one colleague who remembered him could not recall his name. A course that
// called the firm convention a racial rule would be WRONG and correctable in public. The sharper
// questions, which this course actually asks, are who got routed into permanent employee status and
// kept from the door, and what licensure did on top of that.
//
// THE ABELE CORRECTIONS ARE THE POINT, NOT THE MYTH. Verified against Hidden City Philadelphia's
// account of research by educator and historian Amy Cohen, and independently against the University
// of Pennsylvania University Archives, Duke University Libraries, the NCSU Libraries' North Carolina
// Architects and Builders dictionary, and the Harvard Gazette:
//   TRUE: chief designer in 1909 (Penn Archives and Duke Libraries; NCSU says 1908, so the course
//     reports the disagreement), took over the office after Trumbauer's death in 1938, and the firm
//     produced Widener, the Free Library, the Philadelphia Museum of Art and Duke's West Campus.
//   TRUE AND THE MECHANISM: employees at Trumbauer did not sign; the only name on the drawings of
//     the vast majority of Abele's projects was Trumbauer's; and when Abele applied to the AIA in
//     1942 he could list only his sister's house and the Duke buildings as his own.
//   MYTH: the "gifted black servant" line, which Cohen traces to a 1974 book about Newport mansions.
//   MYTH: that he was the sole architect of the Philadelphia Museum of Art.
//   NO RECORD: that he attended the Ecole des Beaux-Arts. Two institutions say so independently.
//   DISPUTED: Irvine Auditorium, which Penn's website credits to him and biographer Dreck Wilson
//     disputes; and whether he ever visited the Duke site.
//
// HARD RULES THIS FILE KEEPS:
//  1. NO INVENTED SOURCE, DATE, QUOTATION OR STATISTIC. Every fact was checked against an
//     institutional source before it was written: Hidden City Philadelphia, the Penn University
//     Archives and Records Center, Duke University Libraries, Duke Today, the Harvard Gazette, NCSU
//     Libraries, NCARB's centennial history and its NCARB by the Numbers 2025 edition, the National
//     Park Service, the MIT Black History Project, the Getty Research Institute, the AIA's own award
//     and contract-document pages, NOMA's own history page, and the Beverly Willis Architecture
//     Foundation's Pioneering Women of American Architecture.
//  2. EVERY "FIRST" CLAIM NAMES THE ISSUING INSTITUTION or is reported as attributed rather than
//     settled. Where a source hedges ("believed to be", "first known"), this course keeps the hedge.
//  3. CONTESTED CLAIMS ARE TAUGHT AS CONTESTED with the holders of each position named. Three are
//     live here: the year Abele became chief designer (1909 vs 1908), the year Duke first hung his
//     portrait (Duke's and NCSU's own pages give 1987, 1988 and 1989), and whether he visited Durham.
//  4. CLAIMS THAT COULD NOT BE VERIFIED ARE NOT PRINTED AS FACT. Each is filed in
//     src/lib/research-checks.ts with what would settle it.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with a stable URL wherever
// one exists; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a 40-question final serving 10; every question carries `explanation` + `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const THE_NAME_ON_THE_DOOR_COURSE: AuthoredCourse = {
  title: "The Name on the Door",
  description:
    "A building is credited to a firm, and a firm is named after whoever owns it. That one sentence explains more about architectural credit than any story about a stolen design, because it means the public credit line for a building answers a legal and contractual question rather than the question readers think they are asking. This course teaches the convention end to end: what a credit line actually names, what a licensed architect's seal certifies and what it does not, and why the architect of record and the design architect are two different jobs that only sometimes belong to the same person. Then it adds the second gate. Architectural licensure began in Illinois in 1897 and spread state by state, and it is real public-safety regulation with a real body count behind it, but it is also a gate, and the education and paid-experience steps behind it ran through admissions offices and hiring decisions. Julian Abele is the case, and the popular version of him is wrong in specific and checkable ways. He was chief designer in Horace Trumbauer's office and took the firm over after Trumbauer died, but employees there did not sign, and when he applied to the American Institute of Architects in 1942 the only buildings he could list as his own were his sister's house and the Duke work. That single document is worth more than the myth ever was. The course also refuses the flattering errors: he was not a servant, he was not the sole architect of the Philadelphia Museum of Art, and there is no record that he attended the Ecole des Beaux-Arts. Norma Merrick Sklarek, Beverly Loraine Greene, Georgia Louise Harris Brown, Paul Revere Williams and Robert R. Taylor carry the rest of the argument, and the course ends where credit conventions can actually be changed: a cornerstone recut to carry two names, an award rule that admits two people instead of one, and a ledger of what this course tested and refused to print.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The credited unit is a firm
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-credited-unit-is-a-firm",
      title: "1 · The credited unit is a firm",
      section: "Section 1 · The credited unit is a firm",
      body: `Three buildings, three cities, one credit line.

Harry Elkins Widener Memorial Library at Harvard, finished in 1915. The central branch of the Free Library of Philadelphia. The original campus of Duke University in Durham, North Carolina. Look up who designed any of them and you will find the same answer: **Horace Trumbauer**.

**That answer names a firm, not a hand.** Trumbauer started his own practice in Philadelphia in 1890 and ran it until his death in 1938 (North Carolina Architects and Builders, n.d.). A firm carries the name of whoever owns it, which means an architectural credit line is, at bottom, an ownership statement wearing the clothes of an authorship statement. Nothing about the convention promises that the person named drew anything.

**In this case it is close to certain that he did not draw much of it.** Amy Cohen, writing for Hidden City Philadelphia, puts it plainly: Trumbauer, "although head of a prestigious architectural firm, never had formal training" (Cohen, 2019). The NCSU Libraries' dictionary of North Carolina architects records how an employee summarised the way the office worked, quoting Trumbauer: "I hire my brains" (North Carolina Architects and Builders, n.d.).

**You can watch the convention operating in a client's letters.** In July 1912, Harvard was about to commission the Widener library. Trumbauer wrote to Archibald Cary Coolidge, then director of the Harvard University Library, introducing two colleagues from the firm, one of whom was Julian Abele, and asking Coolidge to "take up with them the detailed requirements for the new Library Building." Six days later Coolidge wrote back: "It seems to me that there is no need at all of your coming up here this week. We are all agreed on the plan that your men have worked out as a desirable one" (Harvard Gazette, 2020).

Read that reply twice. The client knows perfectly well that other people worked out the plan. He calls them **your men**. The plan is agreed with the firm, the work is attributed to the firm, and the two individuals who did it are a possessive pronoun. Nobody is lying and nobody is hiding anything. This is simply how the credit format works.

**So the format is answering a different question than the one readers ask.** A credit line answers: which practice was responsible for this building? That is a contractual and, once licensure arrives, a legal question with a correct answer. Readers hear it as: who designed this building? That is an authorship question, and on a building of any size it usually has several answers, some of which nobody wrote down.

That gap is where this whole course lives. It is not a gap anyone opened on purpose, and it does not close by itself.

:::reveal What kind of thing does an architectural credit line actually name, and what does that imply about the person named? ||| It names a firm, and a firm carries the name of whoever owns it, so the credit line is an ownership statement rather than a promise that the named person drew anything.

:::reveal In the July 1912 Harvard correspondence, what phrase does the client use for the people who worked out the plan? ||| Your men. Coolidge tells Trumbauer that everyone is agreed on the plan that your men have worked out, which names the firm and leaves the individuals unnamed.

## Vocabulary
- **Firm**: the practice that holds the commission and the liability, named after its owner or owners, and the unit an architectural credit line actually names.
- **Principal**: the owner of a firm, whose name is on the door and, by convention, on the drawings.
- **Employee designer**: a trained architect or designer working inside somebody else's firm, whose work is published under the firm's name.
- **Credit line**: the short public attribution of a building, which answers which practice was responsible rather than who did the designing.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Harvard Gazette. (2020, February 26). *Recognizing architect Julian Abele's contributions to Harvard*. Harvard University. https://news.harvard.edu/gazette/story/2020/02/recognizing-architect-julian-abeles-contributions-to-harvard/

North Carolina Architects and Builders. (n.d.). *Abele, Julian Francis (1881-1950)*. NCSU Libraries. https://ncarchitects.lib.ncsu.edu/people/P000277`,
    },
    {
      slug: "what-actually-gets-signed",
      title: "2 · What actually gets signed",
      section: "Section 1 · The credited unit is a firm",
      body: `The credit line is the public mark. There is a second mark, and it is the one with legal force.

**A set of construction drawings carries a signature and a stamp, and they are not the same thing.** California's statute is a clean example because it separates them in one sentence. Under Business and Professions Code section 5536.1, "All persons preparing or being in responsible control of plans, specifications, and instruments of service for others shall sign those plans, specifications, and instruments of service", and a licensed architect must additionally "affix a stamp, which complies with subdivision (b), to those plans, specifications, and instruments of service, as evidence of the person's responsibility for those documents" (Cal. Bus. & Prof. Code § 5536.1, n.d.). The stamp itself is specified: it bears the licensee's name, the licence number, the legend "licensed architect", the legend "State of California", and a means of showing when the licence renews.

**Signing is about responsibility, not authorship.** Read the statutory language again. It attaches to whoever is "in responsible control", which is a supervisory relationship, not a record of who had the idea. A person can be in responsible control of a drawing set they did not personally draw, and a person can draw brilliantly and be in responsible control of nothing.

**The profession has a name for each side of that split, and a contract for it.** The American Institute of Architects publishes a standard agreement, B112, for exactly the case where the two jobs sit with different parties. In the AIA's own description, the document is for a project where "an Architect of Record will prepare, sign, and seal construction documents for a project and perform construction contract administration services", and it assumes "the Owner will retain a Design Architect to establish the design intent of the project" (American Institute of Architects, n.d.-a).

So the profession itself, in its standard paperwork, recognises that:

- the **architect of record** takes legal responsibility, seals the documents and answers to the building department, and
- the **design architect** establishes the design intent, which is the thing the public means when it says a building was designed by somebody.

**Only one of those two roles requires a licence.** The seal is a licensed act, and under the same California section, preparing plans for buildings without a licence is a misdemeanour. Establishing design intent is not, in itself, a licensed act. Which is why the crucial distinction in this course is not who could design but **who could sign**, and the licence is the gate on the second one.

**Now put the two marks together.** A building's public credit names a firm. A building's legal documents carry the seal of whichever licensed architect took responsibility. Neither of them is a list of the people who designed it, and in a large office that list may exist only in the firm's internal records, if it exists at all.

:::reveal Under California's statute, who has to sign a set of plans, and who has to stamp them? ||| Everyone preparing or in responsible control of the plans must sign them, and a licensed architect must additionally affix a stamp as evidence of responsibility for the documents.

:::reveal What does the AIA's B112 agreement assume the Design Architect does, and what does it assume the Architect of Record does? ||| The Design Architect establishes the design intent of the project; the Architect of Record prepares, signs and seals the construction documents and performs construction contract administration.

## Vocabulary
- **Seal (or stamp)**: the licensed architect's mark on a drawing set, carrying name, licence number and jurisdiction, and standing as evidence of responsibility for the documents.
- **Responsible control**: the supervisory relationship the signing requirement attaches to, which is about accountability for the documents rather than authorship of the design.
- **Architect of record**: the licensed party who prepares, signs and seals the construction documents and administers the construction contract.
- **Design architect**: the party retained to establish the design intent, which is what the public usually means by "the architect" and which is not itself a licensed act.
- **Instruments of service**: the drawings, specifications and other documents an architect produces under a services agreement.

## Sources
American Institute of Architects. (n.d.-a). *Instructions: B112 - 2022, Standard form of agreement between Owner and Architect of Record*. https://help.aiacontracts.com/hc/en-us/articles/4765166121363-Instructions-B112-2022-Standard-form-of-Agreement-Between-Owner-and-Architect-of-Record

Cal. Bus. & Prof. Code § 5536.1. (n.d.). California Legislative Information. https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=5536.1`,
    },
    {
      slug: "the-convention-did-not-check-race",
      title: "3 · The convention did not check anyone's race",
      section: "Section 1 · The credited unit is a firm",
      body: `Here is the load bearing sentence of this course, and the reason it is worth building.

**Firm practice was that only the principal signed, and that applied to every employee in the office.** Cohen states it as a general fact of the period before she applies it to anyone: "As was common practice, employees at the Trumbauer firm did not sign their work" (Cohen, 2019). The University of Pennsylvania's own archives put the consequence in one line: "As in any large firm, assigning design credit to individuals is difficult" (University Archives and Records Center, n.d.).

**Two other Trumbauer designers prove it, and neither of them is the person this course is about.** Howell Lewis Shay, another designer in the office, took the lead within the firm on the Philadelphia Museum of Art for a number of years (Cohen, 2019). Ask the public who designed the Philadelphia Museum of Art and nobody says Shay either.

The second case is sharper. Penn's website credits Irvine Auditorium to Julian Abele. Abele's biographer Dreck Wilson disputes it, and a 1983 letter by Penn archivist Francis James Dallet, summarising an interview with a former Trumbauer employee named Valentine Burkhart Lee, reports that the finished design "was given to 'an older man who had been in the City Architect's office and installed the elevators in City Hall' before joining Trumbauer. While Mr. Lee can recall this man's appearance, etc. he cannot recall his name" (Cohen, 2019).

**Sit with that.** A man designed a landmark auditorium at an Ivy League university. The one colleague still available to be interviewed could describe his face and could not produce his name. The convention did not check his race before it erased him. It erased him because he was an employee.

**So the grievance framing of this subject is factually wrong, and it is correctable in public.** If this course told you that Julian Abele's credit was stolen because he was Black, the first reader holding a Trumbauer office history would point out that the firm's other employees are equally missing from the public record, and every verified and serious claim standing next to that sentence would go down with it. That is not a hypothetical risk. It is how a well meaning history gets discredited.

**The honest questions are better, not gentler.** The convention manufactures a category: essential design expertise that the public credit format has no slot for. Once such a category exists, two questions follow, and both have answers you can go and check.

1. **Who got routed into permanent employee status, and kept from the door?** Which people became principals with their own name on a firm, and which spent whole careers as somebody else's chief designer, and what did the routing?
2. **What did licensure do on top of that?** Once a state can decide who may seal a drawing, a second gate exists, and whoever controls admission to schools, to paid experience and to the exam controls who passes through it.

Section 2 is the second question. Sections 3 and 4 are the best documented single case of the first. And the general move, which you can use tomorrow, is the one CREDIT-00 makes for the author line and CREDIT-02 makes for the printing press: **when you meet an uncredited role, first ask whether the lack of credit is universal to the role.** If it is, you are looking at a convention, and the analysis changes completely. You stop hunting for a culprit and start asking who is in the role and how they got there.

:::reveal Why would "Abele's credit was stolen because he was Black" be factually wrong rather than merely impolite? ||| Because firm practice withheld a signature from every employee, and the Trumbauer office's other designers are equally missing from the public record, so the claim is easily corrected and takes the verified material down with it.

:::reveal What happened to the name of the designer who finished Irvine Auditorium? ||| It is lost. A 1983 letter by a Penn archivist reports that the one former colleague interviewed could recall the man's appearance but could not recall his name.

:::reveal What two questions replace the theft question once you accept that the firm convention is universal? ||| Who got routed into permanent employee status and kept from the door, and what licensure did on top of that.

## Vocabulary
- **Convention**: a rule of practice that attaches to a role rather than to a person, and therefore cannot on its own explain an individual injustice.
- **Category of invisible expertise**: essential skill that a credit format has no slot for, so it disappears from public view as a class rather than as a person.
- **Routing**: the decisions that determine which people end up owning a firm and which spend a career inside somebody else's.
- **Correctable in public**: the test this course applies to its own claims, meaning a stranger with the standard references could show a sentence to be false.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

University Archives and Records Center. (n.d.). *Julian Francis Abele*. University of Pennsylvania. https://archives.upenn.edu/exhibits/penn-people/biography/julian-francis-abele/`,
    },
    {
      slug: "quiz-the-credited-unit",
      title: "4 · Knowledge check: the credited unit",
      section: "Section 1 · The credited unit is a firm",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "An architectural credit line names, at bottom:",
            options: ["A firm", "The individual designer whose drawings the client finally approved for construction", "The licensed architect who sealed the construction documents filed with the building department", "The construction manager responsible for delivering the building on the agreed schedule"],
            correctIndex: 0,
            explanation: "And a firm is named after whoever owns it, which makes the credit line an ownership statement.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Widener Library at Harvard, the Free Library of Philadelphia's central branch and Duke's original campus share:",
            options: ["One credit line", "A single set of construction drawings reused with local modifications in each city", "A design competition run by the same jury of academic and municipal officials", "An unusual clause requiring the designer to be named on a plaque at each entrance"],
            correctIndex: 0,
            explanation: "All three are publicly credited to Horace Trumbauer, which is a firm rather than a pair of hands.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Horace Trumbauer started his own practice in Philadelphia in:",
            options: ["1890", "1902, the year Julian Abele graduated from the University of Pennsylvania", "1912, immediately before the Harvard commission for the Widener library", "1925, when the firm was first licensed to practise architecture in North Carolina"],
            correctIndex: 0,
            explanation: "He ran it from 1890 until his death in 1938, according to the NCSU Libraries dictionary entry.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "What does Amy Cohen record about Horace Trumbauer's own training?",
            options: ["He never had formal training", "He completed a full course at the Ecole des Beaux-Arts in Paris before returning to Philadelphia", "He held a degree in architecture from the University of Pennsylvania School of Fine Arts", "He trained under Richard Morris Hunt in New York before opening his Philadelphia office"],
            correctIndex: 0,
            explanation: "Cohen notes it while dismantling the servant myth: the head of the firm was the untrained one.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The NCSU Libraries entry quotes Trumbauer describing how his office worked as:",
            options: ["I hire my brains", "I keep the drawings and the drawings keep the practice, so the name on them is mine", "Nobody in this office designs anything I have not first sketched on a napkin", "Every man here signs his own work and answers to the client for it directly"],
            correctIndex: 0,
            explanation: "An employee's summary, recorded in the dictionary entry, of a firm whose principal did not draw.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Whom did Trumbauer write to at Harvard in July 1912?",
            options: ["Archibald Cary Coolidge", "Eleanor Elkins Widener, who was paying for the library as a memorial to her son", "The chair of the Harvard Corporation's committee on buildings and grounds", "Harry Elkins Widener's estate lawyers, who controlled the terms of the bequest"],
            correctIndex: 0,
            explanation: "Coolidge was then director of the Harvard University Library, and the letters survive in the university archives.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "In that July 1912 letter, Trumbauer asked Coolidge to take up the detailed requirements for the new library building with:",
            options: ["Two colleagues from the firm", "The contractor who would eventually hold the general construction agreement", "A committee of Harvard librarians appointed to specify the shelving and reading rooms", "The engineers responsible for the steel frame and the mechanical systems"],
            correctIndex: 0,
            explanation: "One of the two was Julian Abele, and the client was told to deal with them directly.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Coolidge's reply of 23 July 1912 called the plan the work of:",
            options: ["Your men", "The Trumbauer studio's senior partners, whom he named individually in the same sentence", "A joint Harvard and Philadelphia committee working from the librarian's written brief", "The draughtsmen he had personally interviewed on his last visit to Philadelphia"],
            correctIndex: 0,
            explanation: "A possessive pronoun in place of two names, in a document written by the client himself.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "What does the wording of Coolidge's reply show about the client's knowledge?",
            options: ["He knew others did the work", "He believed Trumbauer had personally drawn every sheet the firm submitted for approval", "He had been told the firm employed nobody above the rank of junior draughtsman", "He assumed the plan had been bought from an outside consultant and resold to Harvard"],
            correctIndex: 0,
            explanation: "The convention did not require concealment. The client knew, and the format still carried one name.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The question a credit line actually answers is:",
            options: ["Which practice was responsible", "Which individual first conceived the massing, the plan and the principal elevations", "Which draughtsman spent the most billable hours on the construction drawing set", "Which of the firm's employees the client personally preferred to deal with"],
            correctIndex: 0,
            explanation: "That is a contractual and, once licensure exists, a legal question with a correct answer.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The question readers hear a credit line answering is:",
            options: ["Who designed this building", "Which firm carried the professional liability for the completed construction documents", "Who paid for the building and therefore controlled what was finally built on the site", "Which municipal authority approved the plans before construction was permitted to begin"],
            correctIndex: 0,
            explanation: "An authorship question, which on a large building usually has several answers, some unrecorded.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Widener Library at Harvard was finished in:",
            options: ["1915", "1912, the year the commission was agreed between the client and the firm", "1920, after a delay caused by American entry into the First World War", "1938, in the same year Horace Trumbauer died and the office changed hands"],
            correctIndex: 0,
            explanation: "The commission was being settled in 1912 and the building was finished three years later.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Saying a firm is named after whoever owns it makes the credit line a statement about:",
            options: ["Ownership", "The relative artistic merit of the competing schemes the client considered", "The professional qualifications of every person who worked on the drawings", "The order in which the design team joined the project after the commission"],
            correctIndex: 0,
            explanation: "Which is why nothing in the convention promises that the named person drew anything.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Duke University's original campus, credited to the Trumbauer firm, is in:",
            options: ["Durham, North Carolina", "Charlotte, North Carolina, where the Duke family's tobacco business was headquartered", "Raleigh, North Carolina, on land granted by the state legislature in the 1920s", "Newport, Rhode Island, where the firm built several of its best known mansions"],
            correctIndex: 0,
            explanation: "Trinity College in Durham became Duke University, and the firm built two adjacent campuses there.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Horace Trumbauer died in:",
            options: ["1938", "1912, shortly after the correspondence with Harvard about the Widener library", "1950, in the same year as the man who had been his chief designer", "1925, the year his firm was first registered to practise in North Carolina"],
            correctIndex: 0,
            explanation: "His death is the hinge in this story, because the office and its name changed hands then.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "This lesson describes the gap between what a credit line says and what readers hear as:",
            options: ["Nobody's deliberate doing", "A deliberate arrangement principals negotiated with clients to keep employees replaceable", "A twentieth century invention introduced when firms began to incorporate", "A consequence of building codes that require a single responsible name on record"],
            correctIndex: 0,
            explanation: "It is a format problem, not a conspiracy, which is exactly why it does not close by itself.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The Free Library of Philadelphia building referred to in this lesson is:",
            options: ["Its central branch", "A neighbourhood branch built with Carnegie money in the first decade of the century", "The rare book department, added to an existing structure in the 1930s", "A reading room inserted into the Land Title Building, where the firm had offices"],
            correctIndex: 0,
            explanation: "The central branch is one of three Trumbauer-credited buildings this lesson lines up.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "How many hands does a credit line naming one firm tell you were involved?",
            options: ["It does not say", "Exactly one, since a firm may not publish work by more than a single named designer", "At least three, because a credit line is only issued for collaborative commissions", "As many as are listed on the seal affixed to the construction drawing set"],
            correctIndex: 0,
            explanation: "The format has one slot and it is filled by ownership, so the count of hands is simply absent.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The two Trumbauer employees introduced to Harvard in July 1912 included:",
            options: ["Julian Abele", "Howell Lewis Shay, who later led the Philadelphia Museum of Art work inside the firm", "Valentine Burkhart Lee, who travelled regularly between Philadelphia and Durham", "William O. Frank, who would eventually lead the office alongside the chief designer"],
            correctIndex: 0,
            explanation: "Abele was one of the two colleagues Trumbauer's letter told the client to work with.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The best short description of what the Coolidge letter proves is that the convention:",
            options: ["Required no concealment", "Was imposed on clients by firms that refused to disclose who did the work", "Applied only to commissions from private clients rather than institutions", "Was already breaking down by 1912 in favour of naming individual designers"],
            correctIndex: 0,
            explanation: "The client names the workers as your men in his own letter, and the public credit still reads Trumbauer.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Under California Business and Professions Code section 5536.1, who must sign plans?",
            options: ["Anyone in responsible control", "Only the principal of the firm holding the design services agreement with the owner", "Only the licensee whose stamp appears on the cover sheet of the drawing set", "Every employee who worked more than forty hours on the drawings in question"],
            correctIndex: 0,
            explanation: "The statute reaches all persons preparing or being in responsible control of the documents.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Under the same section, who must additionally affix a stamp?",
            options: ["A licensed architect", "The building official who accepts the drawings for plan review and permitting", "The owner, as evidence of acceptance of the completed construction documents", "Any consultant whose specialist drawings are bound into the same submission"],
            correctIndex: 0,
            explanation: "The stamp is evidence of the person's responsibility for the documents, and only a licensee may affix it.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Which of these does the California stamp have to carry?",
            options: ["The licence number", "The name of the firm that holds the professional services agreement for the project", "The date on which the drawings were submitted to the local building department", "A statement that the drawings comply with every applicable accessibility standard"],
            correctIndex: 0,
            explanation: "Along with the licensee's name, the legends licensed architect and State of California, and a renewal indication.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The phrase \"responsible control\" in the signing requirement describes:",
            options: ["A supervisory relationship", "The moment at which authorship of a design passes from one person to another", "Ownership of the copyright in the drawings once the project is complete", "The contractor's obligation to build strictly in accordance with the documents"],
            correctIndex: 0,
            explanation: "Which is why a person can be in responsible control of a drawing set they did not personally draw.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "In the AIA's own description, the Architect of Record does which of these?",
            options: ["Seals the construction documents", "Produces the initial concept sketches from which the whole scheme is developed", "Selects the finishes, fixtures and furniture for the completed interiors", "Negotiates the owner's financing and manages the project development budget"],
            correctIndex: 0,
            explanation: "The AIA's B112 instructions say the Architect of Record prepares, signs and seals them and administers the contract.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "In the AIA's own description, the Design Architect is retained to:",
            options: ["Establish the design intent", "Certify that the finished building complies with the applicable fire and life safety codes", "Supervise the trades on site and issue field reports during construction", "Hold the professional liability insurance covering the completed drawing set"],
            correctIndex: 0,
            explanation: "AIA document B112 assumes exactly this split, with the Owner retaining a Design Architect separately.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Which of the two roles must hold a licence?",
            options: ["The architect of record", "Both, because a design architect may not present a scheme to a client unlicensed", "Neither, since the seal may be applied by any employee of the firm of record", "Only whichever of the two the owner names first in the professional services agreement"],
            correctIndex: 0,
            explanation: "Sealing is a licensed act; establishing design intent is not, in itself, a licensed act.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Under the California section, preparing plans for buildings without a licence is:",
            options: ["A misdemeanour", "A civil matter that the licensing board may settle by imposing an administrative fee", "Permitted so long as a licensed architect reviews and stamps the finished set", "Governed entirely by the terms of the private contract between the owner and the preparer"],
            correctIndex: 0,
            explanation: "The statute makes the unlicensed preparation of building plans a criminal offence.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The AIA publishes a standard agreement for a project split between the two roles, numbered:",
            options: ["B112", "A201, the general conditions governing the relationship between owner and contractor", "C401, the standard agreement between an architect and a specialist consultant", "G702, the application and certificate used for periodic payment during construction"],
            correctIndex: 0,
            explanation: "B112 is the standard form of agreement between Owner and Architect of Record.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "This lesson says the crucial distinction for the course is not who could design but:",
            options: ["Who could sign", "Who could afford the professional liability insurance a large commission required", "Who was admitted to the professional societies that published the annual yearbooks", "Who owned the drawing instruments and the office space where the work was done"],
            correctIndex: 0,
            explanation: "The licence gates the seal, and the seal is what turns a drawing into a legal instrument.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "A building's legal documents carry the seal of:",
            options: ["Whoever took responsibility", "Every architect, engineer and consultant who contributed a sheet to the submission", "The principal of the firm named in the building's public credit line", "The state licensing board that reviewed the drawings before permitting"],
            correctIndex: 0,
            explanation: "The seal records accountability for the documents, which is not the same as a list of designers.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Where might the list of people who actually designed a large building exist, if anywhere?",
            options: ["In the firm's internal records", "On the cover sheet of the construction drawing set, beside the seal", "In the building permit file held by the local authority having jurisdiction", "In the professional register maintained by the state licensing board"],
            correctIndex: 0,
            explanation: "Neither the credit line nor the seal is such a list, and internal records are often thin or lost.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Signing under the California statute is described in this lesson as being about:",
            options: ["Responsibility", "Authorship, since only the person who conceived the design may lawfully sign", "Seniority, since the signature must come from the firm's most experienced licensee", "Payment, since the signature triggers the owner's obligation to settle the fee"],
            correctIndex: 0,
            explanation: "The obligation attaches to responsible control rather than to who had the idea.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The term \"instruments of service\" refers to:",
            options: ["The architect's documents", "The mechanical and electrical systems installed in the completed building", "The tools of the drafting room, which a firm supplied to its employees", "The legal instruments by which a client transfers ownership of a site"],
            correctIndex: 0,
            explanation: "Drawings, specifications and the other documents produced under a services agreement.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "A person who draws brilliantly inside a firm may still be:",
            options: ["In responsible control of nothing", "Legally required to seal every sheet they have personally worked on", "Named on the credit line by default under the AIA's standard agreements", "Automatically registered as the architect of record for the project"],
            correctIndex: 0,
            explanation: "The two things come apart, which is the whole reason the profession needed a name for each role.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The design architect's contribution, as the AIA describes it, is best summarised as:",
            options: ["Design intent", "Code compliance review across the applicable building, fire and accessibility standards", "Construction contract administration, including submittals and field observation", "The professional certification that the project is substantially complete"],
            correctIndex: 0,
            explanation: "That is the phrase the AIA uses, and it is what the public means by the architect of a building.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "Which mark is the one with legal force?",
            options: ["The seal", "The public credit line published when the building opens", "The architect's signature in the corner of a presentation drawing", "The plaque installed in the lobby naming the design team"],
            correctIndex: 0,
            explanation: "The seal stands as evidence of responsibility for the documents and is a licensed act.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "According to Amy Cohen, employees at the Trumbauer firm:",
            options: ["Did not sign their work", "Signed only the drawings for projects they had personally brought into the office", "Were named on a schedule filed with each set of construction drawings", "Received a printed credit in the firm's annual portfolio of completed work"],
            correctIndex: 0,
            explanation: "She states it as common practice of the period before applying it to any individual.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The University of Pennsylvania's archives summarise the consequence for large firms as:",
            options: ["Assigning design credit is difficult", "Employees were routinely credited in the professional press but not on the drawings", "The principal always designed the exteriors and left the interiors to his staff", "Design credit was settled by internal ballot at the completion of each commission"],
            correctIndex: 0,
            explanation: "Penn's own biography says so in one line, and it applies to any large firm rather than to one office.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "Howell Lewis Shay is named in this lesson because he:",
            options: ["Led the museum work for years", "Was the Penn archivist who summarised the interview about Irvine Auditorium", "Signed the drawings for the Free Library on the principal's behalf", "Founded the rival firm that competed for the Philadelphia Museum of Art commission"],
            correctIndex: 0,
            explanation: "He took the lead within the Trumbauer firm on the Philadelphia Museum of Art, and nobody credits him either.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The 1983 letter about Irvine Auditorium was written by:",
            options: ["A Penn archivist", "Abele's biographer, who had interviewed the surviving members of the Trumbauer office", "The dean of the University of Pennsylvania's school of architecture", "A journalist preparing an article on the firm's Philadelphia commissions"],
            correctIndex: 0,
            explanation: "Francis James Dallet, summarising his interview with the former Trumbauer employee Valentine Burkhart Lee.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "What could Valentine Burkhart Lee not supply about the man who finished Irvine Auditorium?",
            options: ["His name", "The year in which the commission was awarded to the Trumbauer office", "Any description of the building's final exterior treatment or materials", "Whether the man had ever been licensed to practise architecture at all"],
            correctIndex: 0,
            explanation: "Lee could recall the man's appearance and could not recall his name, which is the erasure in miniature.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The Irvine Auditorium case matters to this course because it shows the convention:",
            options: ["Erased employees generally", "Applied only to the largest commissions a firm undertook in a given decade", "Was invented by Penn to protect its own architectural attributions", "Could be overridden whenever a client asked for the designer by name"],
            correctIndex: 0,
            explanation: "It erased a man for being an employee, without reference to who he was.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "Who disputes the attribution of Irvine Auditorium to Julian Abele?",
            options: ["Dreck Wilson", "The University of Pennsylvania, whose website has never credited the building to him", "Amy Cohen, who argues the building was designed outside the Trumbauer office entirely", "The Athenaeum of Philadelphia, which holds the original presentation drawings"],
            correctIndex: 0,
            explanation: "Abele's biographer, who argues Abele's preferred material was limestone rather than red brick.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The grievance framing of this history is rejected in this lesson because it is:",
            options: ["Factually wrong", "Too painful for a general audience to be asked to sit with at length", "Already covered in detail by the earlier courses in this series", "Impossible to document without access to the firm's surviving correspondence"],
            correctIndex: 0,
            explanation: "The convention withheld a signature from every employee, so the claim collapses on contact with an office history.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "What does this course say happens to verified claims that stand next to a refutable one?",
            options: ["They go down with it", "They are read more carefully by an audience that has been warned in advance", "They survive intact, because each claim is judged on its own citations", "They become the responsibility of whoever repeated the refutable claim first"],
            correctIndex: 0,
            explanation: "Which is how a well meaning history gets discredited, and why the grievance frame is a liability.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The first replacement question this lesson offers is who got routed into:",
            options: ["Permanent employee status", "The design competitions that decided the largest public commissions of the era", "The professional societies whose membership lists survive in published form", "The apprenticeship system that preceded formal architectural education"],
            correctIndex: 0,
            explanation: "Which people became principals with a name on a firm, and which spent careers inside somebody else's.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The second replacement question asks what was added on top of the firm convention by:",
            options: ["Licensure", "The rise of the architectural photograph as a means of publishing finished work", "The shift from partnership to corporate ownership in large American practices", "The introduction of standard contract documents by professional societies"],
            correctIndex: 0,
            explanation: "Once a state decides who may seal a drawing, a second gate exists on top of the first.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The general move this lesson teaches is: when you meet an uncredited role, first ask whether the lack of credit is:",
            options: ["Universal to the role", "Recent enough that the people involved can still be interviewed about it", "Contested by anyone with a documented interest in the outcome", "Reflected in the pay the role commands relative to the credited one"],
            correctIndex: 0,
            explanation: "If it is, you are looking at a convention, and you stop hunting a culprit and start asking who is in the role.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "CREDIT-00 makes the same move for which credit format?",
            options: ["The author line", "The patent record, where inventorship and ownership come apart in law", "The museum wall label, where an attribution can be revised without notice", "The film credit roll, where guild arbitration decides who is named"],
            correctIndex: 0,
            explanation: "And CREDIT-02 makes it for the printing press, where the master printer is unsigned.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "A category of invisible expertise, as this lesson uses the term, is created by:",
            options: ["A format with no slot for it", "A deliberate agreement among firms to suppress the names of junior staff", "A shortage of trained designers in a period of rapid construction", "A legal rule prohibiting employees from claiming authorship of their work"],
            correctIndex: 0,
            explanation: "The expertise is essential and the public credit format simply has nowhere to display it.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The word this course uses for the decisions that determine who owns a firm and who works inside one is:",
            options: ["Routing", "Sorting, borrowed from the sociological literature on occupational entry", "Filtering, meaning the removal of unqualified applicants at each career stage", "Channelling, meaning the deliberate direction of talent toward technical roles"],
            correctIndex: 0,
            explanation: "Routing is the term, and asking what did the routing is the productive version of the question.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "Cohen introduces the no-signature practice as:",
            options: ["Common practice", "An unusual arrangement peculiar to Trumbauer's own office in Philadelphia", "A rule the American Institute of Architects imposed on member firms", "A term written into the standard employment contracts of the period"],
            correctIndex: 0,
            explanation: "The phrase is as was common practice, which is what makes it a convention rather than one firm's policy.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "Penn's website and Abele's biographer disagree about Irvine Auditorium in what way?",
            options: ["Penn credits him, Wilson does not", "Penn credits Trumbauer personally while Wilson credits the firm as a whole", "Penn dates the building to the 1920s while Wilson dates it to the following decade", "Penn treats the attribution as unresolved while Wilson considers it settled"],
            correctIndex: 0,
            explanation: "Penn's site credits Abele; Wilson argues he would not have designed a red brick building.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "This lesson's test for its own claims is whether a stranger with the standard references could show a sentence to be:",
            options: ["False", "Incomplete in ways the author had not anticipated when writing it", "Dependent on a single source that no other institution has corroborated", "Written in language a general reader would find difficult to follow"],
            correctIndex: 0,
            explanation: "Correctable in public is the standard, and the grievance framing fails it immediately.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "Once you accept that the firm convention is universal, hunting for a culprit is replaced by asking:",
            options: ["Who is in the role", "Which firm first adopted the practice and whether others copied it deliberately", "How much the uncredited work was worth at the prices of the period", "Whether the convention was ever challenged in court by an employee"],
            correctIndex: 0,
            explanation: "Who is in the role and how they got there, which is a question with checkable answers.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The two Trumbauer designers this lesson uses to prove the convention was general are Shay and:",
            options: ["The unnamed Irvine designer", "Julian Abele, whose signature appears on the Philadelphia Museum of Art prints", "Valentine Burkhart Lee, who travelled to Durham on the firm's behalf", "William O. Frank, who led the office after the principal's death"],
            correctIndex: 0,
            explanation: "A man whose face a colleague remembered and whose name nobody could produce.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The Trumbauer firm's work included mansions in Newport and New York because the practice specialised in:",
            options: ["Houses for great wealth", "Public libraries commissioned by municipal authorities across the eastern seaboard", "University campuses planned as complete architectural ensembles from the outset", "Commercial office towers built with the new steel framing methods of the period"],
            correctIndex: 0,
            explanation: "The firm built Gilded Age houses, which is how it came to know the client who funded Duke.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "The stamp specified by the California statute must also provide a means of indicating:",
            options: ["The renewal date", "The number of sheets contained in the drawing set being submitted", "The project address and the parcel number assigned by the county", "The date on which the architect first became responsible for the documents"],
            correctIndex: 0,
            explanation: "A stamp that cannot show whether a licence is current would certify very little.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The clearest one-sentence statement of why the firm convention is not a racial rule is that it:",
            options: ["Applied to every employee", "Was written into state law before any architect could legally seal a drawing", "Was enforced by the professional societies against their own members", "Had been abandoned by most large American offices well before the 1930s"],
            correctIndex: 0,
            explanation: "Every employee in the office was unsigned, which is what makes the racial question a different one.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The second gate: the licence
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "where-licensure-came-from",
      title: "5 · Where licensure came from",
      section: "Section 2 · The second gate: the licence",
      body: `Before 1897, in the United States, anyone could call themselves an architect and design a building for other people to stand inside.

**That is not a rhetorical flourish. It is NCARB's own account of the period.** The National Council of Architectural Registration Boards, writing its own centennial history, says that as buildings grew taller and more ambitious, "With no qualifications required to practice, inexperienced or incompetent individuals could, and often frequently did, design and build structures that led to catastrophic building failures" (NCARB, n.d.-a).

**The failures were specific and they killed people.** On 30 December 1903, Chicago's Iroquois Theater caught fire during a matinee and over six hundred people died, many of them children, in a building whose emergency exits had difficult locks, whose fire escapes were incomplete and whose doors opened inward. In January 1922, twenty six inches of snow accumulated on the roof of the Knickerbocker Theater in Washington, D.C.; the roof collapsed, killing ninety eight people and injuring one hundred and thirty three, and investigation found that the roof support had not been properly designed (NCARB, n.d.-a).

**Getting a law passed took thirteen years and four attempts.** Architects from the Midwest and South formed the Western Association of Architects in 1884, frustrated by the pace of the AIA, and by the group's second meeting in 1885 the Chicago architect Dankmar Adler had drafted a model bill. Illinois architects put versions of it forward in 1887, 1889 and 1895 and lost each time. In 1897 it passed, and "On July 1, 1897, Illinois became the first U.S. state to require licensing for architects" (NCARB, n.d.-a).

**Then it spread, unevenly.** California and New Jersey established architectural regulation boards in 1901 and 1902. New York tried in 1901, in 1905 and in 1909 before finally succeeding in 1915. By 1911 it was clear that boards were adopting different standards, and the effort to make them uniform produced NCARB in 1919 (NCARB, n.d.-a).

**Say the honest thing about this, because the temptation is to say the other one.** Architectural licensure is real public safety regulation with a real body count behind it. A course that presented it as a guild trick invented to keep people out would be making exactly the mistake this course spent Section 1 refusing to make. The Iroquois Theater is not a metaphor.

**And a gate that protects the public is still a gate.** From 1897 forward, in one state after another, a public authority decides who may seal a drawing. That authority is administered by people, applying requirements that run through schools and through employers, and it arrives on top of a society that had already sorted who got into which school and who got hired by which firm.

The timing makes the point by itself. **Robert R. Taylor graduated from MIT in 1892**, five years before any American state licensed an architect at all (MIT Black History Project, n.d.). The first Black man to be academically trained as an architect in this country finished his degree in a profession that had no licence to withhold from him. The gate arrived afterwards.

:::reveal Which state was the first to require a licence to practise architecture, and when did the requirement take effect? ||| Illinois, on 1 July 1897, after bills drafted from Dankmar Adler's model had failed in 1887, 1889 and 1895.

:::reveal Name the two building disasters NCARB cites in its own account of why licensure was demanded. ||| The Iroquois Theater fire in Chicago on 30 December 1903, which killed over six hundred people, and the Knickerbocker Theater roof collapse in Washington, D.C. in January 1922, which killed ninety eight.

:::reveal Why does this course refuse to describe licensure as a guild trick? ||| Because it is real public safety regulation with a documented body count behind it, and misdescribing it would be the same error as calling the firm convention a racial rule.

## Vocabulary
- **Licensure**: a state's requirement that a person be registered before practising a regulated profession, which in architecture governs who may seal drawings.
- **Registration board**: the state body that administers licensure, sets or applies the requirements, and decides individual applications.
- **NCARB**: the National Council of Architectural Registration Boards, formed in 1919 to help state boards adopt uniform standards.
- **Western Association of Architects**: the 1884 group of Midwestern and Southern architects that first pushed for licensing laws and drafted the model bill.

## Sources
MIT Black History Project. (n.d.). *Robert R. Taylor, 1892*. Massachusetts Institute of Technology. https://www.blackhistory.mit.edu/archive/robert-r-taylor-1892

NCARB. (n.d.-a). *Beginning of licensure*. National Council of Architectural Registration Boards. https://centennial.ncarb.org/beginning-of-licensure/`,
    },
    {
      slug: "what-a-licence-gates",
      title: "6 · What a licence gates, and who administers it",
      section: "Section 2 · The second gate: the licence",
      body: `A licence is not one gate. It is a sequence of them, and each one is administered by somebody who can say no.

**The modern path has three parts: education, experience and examination.** NCARB reports how long the whole thing takes, and the figure alone tells you it is a sequence rather than a test. The average candidate who completed the path to licensure in 2024 needed well over a decade to do it, and NCARB reports that average separately by race and by gender because the number moves depending on who you are (NCARB, n.d.-b).

**The experience requirement is the one that runs through somebody else's hiring decision.** You cannot document paid architectural experience without a firm that will employ you. That is a gate the statute does not describe, because the statute does not have to: it simply requires the experience, and leaves the supply of it to a private market.

**Norma Merrick Sklarek is the documented case, and the documentation is her own.** After graduating from Columbia in 1950 she applied to nineteen firms and was rejected by all of them. Her account of what was happening is careful rather than sweeping: "They weren't hiring women or African Americans, and I didn't know which it was [working against me]" (Beverly Willis Architecture Foundation, n.d.-a). She took a civil service job as a junior draftsperson at the City of New York's Department of Public Works instead, and sat the New York licensing examination in 1954, passing it on her first attempt.

**John S. Chase is the case where the education gate is dated to the week.** The Texas State Historical Association records that Chase earned a bachelor of science in architecture at Hampton University in 1948, and that "In 1950 he became the first African American to enroll in the University of Texas at Austin School of Architecture. He graduated in 1952." Then comes a sentence that is a hiring gate stated as fact: "Unable to find a job at White firms and not ready to return to his native Maryland, in 1952 Chase relocated to Houston where he began his professional career." He established his own practice there, and the Handbook of Texas records that "He was the first African American licensed to practice architecture in Texas" (Texas State Historical Association, n.d.).

**Notice what this course does not print about Chase.** Several accounts add a vivid procedural detail, that he petitioned the Texas Board of Architectural Examiners to waive an internship requirement he could not satisfy because no firm would employ him, and give a month for his licence. The state historical association's entry does not say it, and this course's rule is that a specific claim about what a licensing board did needs the board or an equivalent record. So the detail is filed as an open question rather than printed, and the verified fact stands on its own: a man who could not get hired opened his own office and was licensed anyway.

**Put the two gates side by side.** The firm convention decides whose name appears on a finished building. Licensure decides who may take legal responsibility for it. Neither one asks about race in its own text. Both of them run through institutions that were, in the period this course covers, making decisions about race constantly.

:::reveal What are the three parts of the modern path to an architectural licence? ||| Education, experience and examination, taken in sequence and administered separately.

:::reveal Which of those three runs through a private hiring decision, and why does that matter? ||| The experience requirement, because documented paid architectural experience requires a firm willing to employ you, and the statute leaves that supply to a private market.

:::reveal How many firms rejected Norma Merrick Sklarek after she graduated from Columbia, and how did she describe the reason? ||| Nineteen, and she said they were not hiring women or African Americans and she did not know which was working against her.

## Vocabulary
- **Experience requirement**: the documented period of supervised practice a licensure candidate must complete, which depends on being hired.
- **Examination**: the licensing examination a candidate must pass before a board will register them.
- **Board of architectural examiners**: the state body that receives applications, applies the requirements and decides who is registered.
- **Handbook of Texas**: the Texas State Historical Association's reference work, the institutional source this course uses for Chase.

## Sources
Beverly Willis Architecture Foundation. (n.d.-a). *Norma Merrick Sklarek*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/norma-merrick-sklarek/

NCARB. (n.d.-b). *NCARB by the numbers 2025: Demographics*. National Council of Architectural Registration Boards. https://www.ncarb.org/nbtn2025/demographics

Texas State Historical Association. (n.d.). *Chase, John Saunders*. Handbook of Texas. https://www.tshaonline.org/handbook/entries/chase-john-saunders`,
    },
    {
      slug: "counting-who-is-in-the-room",
      title: "7 · Counting who is in the room",
      section: "Section 2 · The second gate: the licence",
      body: `If the argument of this course is about routing, then the routing has to be measurable. It is, and the measurement comes with instructions.

**Start with the current figure and date it.** In its 2025 edition, reporting 2024 data, NCARB states that "Asian and Latino architects continue to make up 7% each of the total architect population, with Black or African American architects representing another 2%", and adds that "While most underrepresented demographic groups have seen slight increases over the past 5 years, Black or African American representation has remained unchanged" (NCARB, n.d.-b).

**Two percent, flat for five years, in a country where the profession's own diversity numbers are otherwise moving.** That is the finding, and the flatness is the part worth sitting with, because it means the pipeline improvements the profession reports have not yet shown up here.

**The path takes longer too.** NCARB reports that the average Asian candidate who completed the path in 2024 took 11.7 years, roughly a year faster than the average white candidate, and that "Black candidates took the longest at approximately 14.5 years" (NCARB, n.d.-b). NCARB attaches its own caution to that figure: the sample sizes for underrepresented groups are much smaller, so their averages fluctuate more from year to year.

**Read the method, not just the number.** NCARB says plainly: "NCARB uses the NCARB Certificate holder population as an approximation for the architect population" (NCARB, n.d.-b). A Certificate is a specific NCARB credential that architects obtain mainly to make it easier to get licensed in additional states. It is a very good proxy and it is a proxy. A course that quoted the two percent without that sentence would be handing you a number with its instructions torn off.

**Counting this at all took a private project, and the reason is a methodological one.** Bradford C. Grant and Dennis Alan Mann began the Directory of African American Architects in November 1991, in their words, "to account for and identify all of the African Americans who were professionally licensed as architects", because they "suspected at that time that even the estimated numbers that we came across in various publications were greatly exaggerated" (Grant & Mann, n.d.).

Their explanation of why the obvious source would not do is the sharpest sentence in this lesson. Federal labor statistics, they write, "fail to specify whether or not someone who is employed in the field of architecture is licensed to practice architecture", so the published figures counted "licensed architects, interns, technicians, and even designer/builders" together (Grant & Mann, n.d.). If your question is who may sign, a count of everyone who works in an architecture office answers a different question.

**And the directory's own account of women is thin on purpose.** Its introduction states that "African American women enjoy even less representation in practice; we list only eighty four women in the current directory" (Grant & Mann, n.d.). That figure belongs to whichever edition of the introduction you are reading, and the page carries no date, so this course reports the sentence and does not treat the number as current. The thinness is the finding. Padding it would be the failure.

:::reveal What proportion of the total architect population did NCARB report as Black or African American in its 2025 edition, and what had happened to that proportion over five years? ||| Two percent, and it had remained unchanged while most other underrepresented groups saw slight increases.

:::reveal What population does NCARB use as an approximation for the architect population, and why does that matter? ||| Its Certificate holder population, which is a good proxy rather than a census, so the figure should always be quoted with its method attached.

:::reveal Why did Grant and Mann say federal labor statistics could not answer their question? ||| Because those statistics do not distinguish licensed architects from interns, technicians and designer-builders, so they answer who works in architecture rather than who may sign.

## Vocabulary
- **NCARB Certificate**: a credential architects obtain mainly to ease licensure in additional states, and the population NCARB uses to approximate the architect population.
- **Candidate**: someone on the path to licensure who has not yet completed it, counted separately from licensed architects.
- **Time to licensure**: NCARB's measure of how long candidates take to complete the whole path, reported separately by race and gender.
- **Directory of African American Architects**: the independent count Grant and Mann began in 1991 because published estimates were unreliable and federal statistics measured something else.

## Sources
Grant, B. C., & Mann, D. A. (n.d.). *Directory of African American Architects: Introduction*. Directories of Diverse Architects and Designers. https://ddad.info/insights/directory-introduction

NCARB. (n.d.-b). *NCARB by the numbers 2025: Demographics*. National Council of Architectural Registration Boards. https://www.ncarb.org/nbtn2025/demographics`,
    },
    {
      slug: "quiz-the-licence",
      title: "8 · Knowledge check: the second gate",
      section: "Section 2 · The second gate: the licence",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Before 1897, in the United States, who could call themselves an architect?",
            options: ["Anyone", "Only graduates of an accredited school of architecture in the state where they practised", "Only members admitted to the American Institute of Architects after examination", "Only those who had served a documented apprenticeship in a registered office"],
            correctIndex: 0,
            explanation: "NCARB's own history says no qualifications were required to practise, with predictable results.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The Iroquois Theater fire took place in Chicago on:",
            options: ["30 December 1903", "1 July 1897, the day the Illinois licensing requirement took effect", "A winter night in 1922, after an unusually heavy fall of snow on the roof", "The opening night of the 1893 World's Columbian Exposition season"],
            correctIndex: 0,
            explanation: "Over six hundred people died at a matinee, many of them children.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Which design failure does NCARB name at the Iroquois Theater?",
            options: ["Doors that opened inward", "A steel frame that had been erected without any fireproofing to the columns", "A stage roof built from untreated timber over a coal-fired heating plant", "An auditorium built with more seats than the exit stairs had been sized for"],
            correctIndex: 0,
            explanation: "Along with difficult locks on the emergency exits and incomplete fire escapes.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The Knickerbocker Theater collapse in Washington, D.C. happened in:",
            options: ["January 1922", "December 1903, six days after the Iroquois Theater fire in Chicago", "1915, the year New York finally enacted its architectural licensing law", "1919, at the convention where NCARB's founding members first met"],
            correctIndex: 0,
            explanation: "Twenty six inches of snow accumulated on the roof and it caved in under the weight.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "How many people were killed when the Knickerbocker Theater roof collapsed?",
            options: ["Ninety eight", "Over six hundred, most of them attending an afternoon performance", "One hundred and thirty three, with a further ninety eight injured", "Twenty six, one for each inch of snow that had fallen on the roof"],
            correctIndex: 0,
            explanation: "Ninety eight died and one hundred and thirty three were injured; the roof support had not been properly designed.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The Western Association of Architects was formed in:",
            options: ["1884", "1897, immediately after the Illinois licensing law finally passed", "1857, the same year the American Institute of Architects was founded", "1919, at the AIA convention in Nashville where NCARB also began"],
            correctIndex: 0,
            explanation: "Midwestern and Southern architects formed it out of frustration with the pace of the AIA.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Who drafted the model licensing bill the Western Association carried to legislators?",
            options: ["Dankmar Adler", "Nathan Clifford Ricker, who ran the architecture programme at the University of Illinois", "Peter B. Wight, who served as secretary of the Illinois board of examiners", "Harry B. Wheelock, a member of the Illinois Board of Examiners of Architects"],
            correctIndex: 0,
            explanation: "The Chicago architect had a bill ready by the association's second meeting in 1885.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "In which years did the Illinois licensing bill fail before it passed?",
            options: ["1887, 1889 and 1895", "1901, 1905 and 1909, the three attempts made in New York before 1915", "1884 and 1885, at the first two meetings of the Western Association", "1911 and 1915, while boards were arguing about uniform standards"],
            correctIndex: 0,
            explanation: "Three defeats, then success in 1897 with the help of an architect newly elected to the legislature.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "According to NCARB's own wording, Illinois became the first state to require licensing for architects on:",
            options: ["1 July 1897", "30 December 1903, in the immediate aftermath of the Iroquois Theater fire", "1 January 1919, when the council was formed to standardise the boards", "The date the Western Association of Architects adopted Adler's model bill"],
            correctIndex: 0,
            explanation: "That is the date NCARB's centennial history gives for the requirement taking effect.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Which two states established architectural regulation boards immediately after Illinois?",
            options: ["California and New Jersey", "New York and Massachusetts, the two states with the largest professional societies", "Texas and Ohio, where bills had already come close to passing in the 1890s", "Pennsylvania and North Carolina, where the Trumbauer firm held commissions"],
            correctIndex: 0,
            explanation: "California in 1901 and New Jersey in 1902, per NCARB's account.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "New York finally enacted an architectural licensing law in:",
            options: ["1915", "1901, on the first attempt made after the Illinois law took effect", "1922, in response to the Knickerbocker Theater roof collapse", "1954, the year Norma Merrick Sklarek passed the state examination"],
            correctIndex: 0,
            explanation: "After failed attempts in 1901, 1905 and 1909, which is a long time for the largest building market in the country.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "NCARB itself was formed in:",
            options: ["1919", "1897, alongside the first state licensing law in Illinois", "1911, the year boards were first found to be applying different standards", "1884, as the licensing committee of the Western Association of Architects"],
            correctIndex: 0,
            explanation: "The idea grew from about 1911, when it became clear boards were adopting divergent standards.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "This course's stated position on architectural licensure is that it is:",
            options: ["Real safety regulation", "A guild arrangement dressed up in the language of public protection", "A twentieth century invention with no documented incident behind it", "A federal requirement applied uniformly across the states from 1919"],
            correctIndex: 0,
            explanation: "With a documented body count behind it, which is why calling it a trick would be the same error as the grievance frame.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Robert R. Taylor graduated from MIT in:",
            options: ["1892", "1897, in the same year Illinois enacted the first licensing requirement", "1888, the year the MIT Black History Project records that he enrolled", "1902, the year Julian Abele graduated from the University of Pennsylvania"],
            correctIndex: 0,
            explanation: "Five years before any American state licensed an architect, which is the point of the date.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Why does this lesson end on the date of Taylor's degree?",
            options: ["The gate arrived afterwards", "Because MIT was the only school that would admit him at the time", "Because his degree was the first ever awarded in architecture in the United States", "Because he was licensed in Alabama before the state had a registration board"],
            correctIndex: 0,
            explanation: "He finished his training in a profession that had no licence to withhold from him; regulation came later.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "By 1911, what problem had become clear about state licensing?",
            options: ["Boards used different standards", "Most states had quietly repealed their licensing laws under pressure from builders", "Licence fees had risen beyond what a young architect could reasonably pay", "Courts had begun striking the laws down as restraints on lawful trade"],
            correctIndex: 0,
            explanation: "Which is the problem NCARB was eventually formed to address, eight years later.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "NCARB's centennial history attributes the pressure for regulation primarily to:",
            options: ["Building failures", "Competition from engineers who could already seal structural drawings", "Complaints from clients about the fees charged by untrained practitioners", "A federal inquiry into standards in the construction industry"],
            correctIndex: 0,
            explanation: "Fires and collapses made headlines, and public and political interest followed the fatalities.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The Western Association of Architects was formed by architects frustrated with:",
            options: ["The pace of the AIA", "The refusal of state legislatures to hear any professional testimony at all", "The cost of membership in the eastern professional societies", "A shortage of trained draughtsmen in the Midwest and the South"],
            correctIndex: 0,
            explanation: "It was the first organisation to seek architectural licensing laws.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The Knickerbocker investigation found the failure lay in:",
            options: ["The roof support", "Snow removal procedures the theatre's management had failed to follow", "An illegal alteration made after the building had been approved for occupancy", "A ventilation shaft cut through a principal beam during construction"],
            correctIndex: 0,
            explanation: "It had not been properly designed, which is precisely what a licensing regime is meant to prevent.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The sequence in which American architectural licensure spread is best described as:",
            options: ["Uneven and state by state", "Simultaneous, following a single federal statute enacted in 1919", "Complete within five years of the Illinois law taking effect", "Confined to the Midwest until after the Second World War"],
            correctIndex: 0,
            explanation: "Illinois in 1897, California and New Jersey next, and New York not until 1915.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "What makes Adler's 1885 bill significant in this story?",
            options: ["It was a model others reused", "It was enacted unchanged by the Illinois legislature at the first attempt", "It created the first national register of practising American architects", "It required every architect to sign the drawings they had personally prepared"],
            correctIndex: 0,
            explanation: "Association members carried versions of it to legislators, and Illinois passed one twelve years later.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The modern path to an architectural licence has which three parts?",
            options: ["Education, experience, examination", "Apprenticeship, portfolio review and an interview before the state board", "A degree, a period of foreign travel and a design competition entry", "Membership of a professional society, a fee and a criminal record check"],
            correctIndex: 0,
            explanation: "Three separately administered stages, which is why the whole path takes over a decade on average.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Why does the experience requirement function as a gate the statute does not describe?",
            options: ["It requires an employer", "Because state boards refuse to count experience gained outside the licensing state", "Because the required period has grown longer with every revision of the rules", "Because it must be completed before a candidate may begin any coursework"],
            correctIndex: 0,
            explanation: "Documented paid experience needs a firm willing to hire you, and the statute leaves that to a private market.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "How many firms rejected Norma Merrick Sklarek after she graduated from Columbia?",
            options: ["Nineteen", "Five, all of them in Manhattan and all within a single year of graduating", "Thirty two, according to the count she gave in a 2004 newspaper interview", "None, though the only offers she received were for unpaid drafting work"],
            correctIndex: 0,
            explanation: "She applied to and was rejected by nineteen before taking a civil service job instead.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "How did Sklarek describe what she thought was working against her?",
            options: ["She did not know which it was", "She was certain it was her race rather than her gender in every case", "She believed her Columbia degree was held against her by older practitioners", "She attributed it entirely to the shortage of work in New York at the time"],
            correctIndex: 0,
            explanation: "Her words were that they were not hiring women or African Americans and she did not know which was against her.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "What job did Sklarek take after the nineteen rejections?",
            options: ["Junior draftsperson for New York City", "An unpaid internship with a Manhattan firm arranged through her university", "A teaching post at the New York City Community College evening programme", "A drafting position with a Los Angeles firm that hired her by correspondence"],
            correctIndex: 0,
            explanation: "A civil service post in the City of New York's Department of Public Works.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Sklarek sat the New York licensing examination in 1954 and:",
            options: ["Passed on her first attempt", "Failed the structures section and retook the whole examination the following year", "Was told her city employment did not count toward the experience requirement", "Had to petition the state board to accept her Columbia degree as qualifying"],
            correctIndex: 0,
            explanation: "She later coached other aspiring architects for the examination, drawing on that experience.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "John S. Chase earned his first architecture degree in 1948 at:",
            options: ["Hampton University", "The University of Texas at Austin, which he entered as its first Black architecture student", "Howard University in Washington, D.C., where he later returned to teach", "Texas Southern University, where he was appointed assistant professor in 1952"],
            correctIndex: 0,
            explanation: "A bachelor of science in architecture, per the Handbook of Texas.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "In 1950 Chase became the first African American to enrol in:",
            options: ["UT Austin's School of Architecture", "The American Institute of Architects' Houston chapter as a student member", "The graduate programme at Hampton University's school of engineering", "The Texas Board of Architectural Examiners' internship register"],
            correctIndex: 0,
            explanation: "He graduated two years later, in 1952.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "What does the Handbook of Texas say about Chase's search for a job after graduating?",
            options: ["He could not find one at White firms", "He turned down three offers in order to open his own practice immediately", "He was hired by a Dallas firm on condition that he not meet clients", "He returned to Maryland for two years before settling in Houston"],
            correctIndex: 0,
            explanation: "The entry states it plainly, which makes it a hiring gate documented by a state historical association.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "What did Chase do in 1952 when no firm would hire him?",
            options: ["Opened his own practice", "Left architecture and taught mathematics in the Houston public schools", "Petitioned the state legislature to compel firms to consider Black applicants", "Moved to Chicago, where several Black-owned offices were already established"],
            correctIndex: 0,
            explanation: "He relocated to Houston, took a teaching post and established his own firm there.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Which claim about Chase does this course deliberately NOT print?",
            options: ["The internship waiver petition", "That he was the first African American licensed to practise architecture in Texas", "That he was unable to find a job at White firms after graduating", "That he enrolled at the University of Texas at Austin in 1950"],
            correctIndex: 0,
            explanation: "The state historical association's entry does not carry it, and a claim about a board's decision needs the board.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "The rule this course applies to a specific claim about what a licensing board did is that it needs:",
            options: ["The board or an equivalent record", "Two independent secondary accounts published in different decades", "A named eyewitness who was present when the decision was taken", "Confirmation from the professional society the applicant later joined"],
            correctIndex: 0,
            explanation: "Which is why the vivid procedural detail is filed as an open question rather than printed as fact.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Placed side by side, the firm convention decides whose name appears on a building and licensure decides:",
            options: ["Who may take legal responsibility", "Which schools may award a professional degree in architecture", "How many partners a practice is permitted to name in its title", "Which projects require a design architect separate from an architect of record"],
            correctIndex: 0,
            explanation: "Neither asks about race in its own text, and both were administered by people who were.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "NCARB reports time to licensure separately by race and gender because:",
            options: ["The number moves", "State boards are required by statute to publish the breakdown each year", "The examination is scored differently for candidates from different backgrounds", "Federal reporting requirements attach to any nationally administered examination"],
            correctIndex: 0,
            explanation: "Reporting one average would conceal the difference the separate figures reveal.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Sklarek graduated from Columbia in:",
            options: ["1950", "1954, the same year she passed the New York licensing examination", "1959, the year she became a member of the American Institute of Architects", "1962, shortly before she was licensed in the state of California"],
            correctIndex: 0,
            explanation: "The nineteen rejections came immediately after, and the licence came four years later.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "The Handbook of Texas is published by:",
            options: ["The Texas State Historical Association", "The University of Texas at Austin School of Architecture's archives programme", "The Texas Board of Architectural Examiners, as its official register of practitioners", "The Houston chapter of the American Institute of Architects"],
            correctIndex: 0,
            explanation: "It is the institutional source this course uses for the Chase material.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "Chase's verified status, according to the Handbook of Texas, is that he was:",
            options: ["First licensed Black architect in Texas", "The first Black architect admitted to the American Institute of Architects nationally", "The first Black architect to hold a licence anywhere in the American South", "The first Black graduate of any architecture school in the state of Texas"],
            correctIndex: 0,
            explanation: "The entry states it directly, without giving the month or the procedural route.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "This lesson describes a licence as:",
            options: ["A sequence of gates", "A one-off examination that a competent designer can sit at any time", "A courtesy extended by a professional society to its established members", "A federal credential recognised automatically in every state"],
            correctIndex: 0,
            explanation: "Education, experience and examination, each administered by somebody who can say no.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "What is the point of noting that Chase opened his own office after being turned away?",
            options: ["A door of his own", "That Texas firms were legally obliged to hire licensed Black architects", "That the internship requirement was waived for every applicant of that period", "That teaching was the only work available to Black architects in the 1950s"],
            correctIndex: 0,
            explanation: "The man who could not get hired became the principal whose name was on the practice.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "In its 2025 edition, NCARB reported Black or African American architects as what share of the architect population?",
            options: ["Two percent", "Seven percent, the same share it reported for Asian and Latino architects", "Twenty percent, the figure it gives for architects of colour as a whole", "Six percent, which is the share it reports among licensure candidates"],
            correctIndex: 0,
            explanation: "Asian and Latino architects were seven percent each; Black or African American architects were another two.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Over the five years to 2024, that Black or African American share:",
            options: ["Remained unchanged", "Rose by four percentage points, in line with architects of colour generally", "Fell slightly as older practitioners retired faster than new ones qualified", "Was not reported, because the sample fell below NCARB's minimum threshold"],
            correctIndex: 0,
            explanation: "Most other underrepresented groups saw slight increases over the same period.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "NCARB reports that Black candidates completing the licensure path in 2024 took approximately:",
            options: ["14.5 years", "11.7 years, roughly a year faster than the average white candidate", "12.1 years, the figure reported for the average woman completing the path", "Eight years, provided they had completed an accredited professional degree"],
            correctIndex: 0,
            explanation: "The longest of any group reported, against 11.7 years for the average Asian candidate.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "What caution does NCARB attach to time-to-licensure figures for underrepresented groups?",
            options: ["Small samples fluctuate", "The figures exclude anyone who changed states during the licensure process", "Candidates may decline to report race, so the categories are incomplete", "The measure begins only once a candidate has passed the first examination division"],
            correctIndex: 0,
            explanation: "Smaller sample sizes make those averages move more from year to year.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "What population does NCARB use to approximate the architect population?",
            options: ["Its Certificate holders", "The membership rolls of the American Institute of Architects and its chapters", "The combined registers published annually by the fifty five member boards", "Everyone recorded by the federal government as employed in architecture"],
            correctIndex: 0,
            explanation: "NCARB says so in its own report, which is why the number should be quoted with its method.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "An NCARB Certificate is a credential architects mainly obtain in order to:",
            options: ["Get licensed in more states", "Qualify for fellowship in the American Institute of Architects", "Prove continuing education compliance to their employers each year", "Seal drawings on federal projects outside any single state's jurisdiction"],
            correctIndex: 0,
            explanation: "Which makes the Certificate population a very good proxy for the architect population, and still a proxy.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "This lesson says a figure quoted without its method has had what removed?",
            options: ["Its instructions", "The margin of error that any survey of a professional population carries", "The year to which it refers, without which the figure cannot be compared", "The name of the body that collected it and therefore stands behind it"],
            correctIndex: 0,
            explanation: "The Certificate-holder sentence is part of the number, not a footnote to it.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Bradford C. Grant and Dennis Alan Mann began their directory in:",
            options: ["November 1991", "1968, the year Whitney Young addressed the AIA national convention", "2004, when the second edition of the printed directory appeared", "1971, alongside the founding of the National Organization of Minority Architects"],
            correctIndex: 0,
            explanation: "Their aim was to account for and identify all African Americans professionally licensed as architects.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "What did Grant and Mann suspect about the published estimates of their day?",
            options: ["They were greatly exaggerated", "They had been withheld from publication by the professional societies", "They counted only architects who owned firms rather than employees", "They were accurate nationally but wrong in individual states"],
            correctIndex: 0,
            explanation: "Their words, and the reason they set out to build a baseline of their own.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Why did federal labor statistics not answer Grant and Mann's question?",
            options: ["They do not record who is licensed", "They were published only every ten years, alongside the decennial census", "They excluded anyone employed by a public agency rather than a private firm", "They counted firms rather than the individuals working inside them"],
            correctIndex: 0,
            explanation: "They lump licensed architects together with interns, technicians and designer-builders.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Which groups did the federal figures count alongside licensed architects?",
            options: ["Interns, technicians and designer-builders", "Structural engineers, quantity surveyors and construction managers", "Architecture students enrolled in accredited professional degree programmes", "Retired practitioners whose registrations had lapsed within the previous decade"],
            correctIndex: 0,
            explanation: "Which answers who works in architecture rather than who may sign.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "How does this course handle the directory's count of women?",
            options: ["Reports it without treating it as current", "Prints it as the current number of Black women licensed in the United States", "Omits it entirely, on the ground that the directory is a private project", "Substitutes the NCARB candidate figure for Black women in its place"],
            correctIndex: 0,
            explanation: "The introduction carries no date, so the sentence is reported and the figure is not treated as live.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "The directory's own sentence about women says it lists only:",
            options: ["Eighty four women", "Two percent of the licensed architects recorded in the whole directory", "Those women who had been admitted to the American Institute of Architects", "Women who owned or co-owned a practice at the time of publication"],
            correctIndex: 0,
            explanation: "Its introduction states that African American women enjoy even less representation in practice.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "This lesson's position on a thin documentary record is that the thinness is:",
            options: ["The finding", "A reason to widen the search to unlicensed practitioners as well", "An argument for treating the whole subject as unresearchable", "A problem the reader should resolve by consulting the primary sources"],
            correctIndex: 0,
            explanation: "Padding it would be the failure, which is the same rule the earlier courses in this series apply.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Which figure did NCARB report for Asian and Latino architects in the same 2025 edition?",
            options: ["Seven percent each", "Twenty percent between them, matching the total for architects of colour", "Two percent each, the same share reported for Black architects", "Forty nine percent, the share of licensure candidates who are people of colour"],
            correctIndex: 0,
            explanation: "The two percent for Black or African American architects sits beside those two sevens.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "The part of the two percent figure this lesson says is worth sitting with is:",
            options: ["That it is flat", "That it is measured against candidates rather than licensed practitioners", "That it excludes architects working outside the United States", "That it has never been reported by any body other than NCARB"],
            correctIndex: 0,
            explanation: "Flat for five years means the reported pipeline improvements have not yet reached this number.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "The 2025 edition of NCARB by the Numbers reports data from:",
            options: ["2024", "The five years to 2020, averaged to smooth annual fluctuations", "The year of publication, collected during the first quarter of 2025", "1991 onward, cumulated since the directory project began"],
            correctIndex: 0,
            explanation: "Dating the figure is part of quoting it, because the number moves.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Grant and Mann's stated purpose was to identify all African Americans who were:",
            options: ["Professionally licensed as architects", "Employed in any capacity within the American architectural profession", "Awarded a professional degree from an accredited school of architecture", "Practising as principals or partners in their own architectural firms"],
            correctIndex: 0,
            explanation: "Which is exactly the population the federal statistics could not isolate.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "A count of everyone who works in an architecture office answers:",
            options: ["A different question", "The same question more accurately than a register of licence holders", "Nothing at all, because job titles in the field are not standardised", "Only the question of how large the profession is in a given state"],
            correctIndex: 0,
            explanation: "If your question is who may sign, that count is measuring something else.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "NCARB's account says public and political interest in regulation rose as what happened?",
            options: ["Fatalities mounted", "Insurers began refusing to underwrite buildings designed by untrained practitioners", "Foreign-trained architects arrived in numbers after the Civil War", "Cities started employing their own salaried architects for public work"],
            correctIndex: 0,
            explanation: "Newspaper headlines carried the fires and collapses, and the death toll drove the demand for oversight.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "The single sentence that best summarises this section's argument about licensure is that it is:",
            options: ["A real protection and a real gate", "A barrier invented to protect established practices from competition", "An administrative formality with no effect on who could practise", "A federal system that has applied uniformly since the Illinois law"],
            correctIndex: 0,
            explanation: "Both halves are true at once, and dropping either one produces a false account.",
            sourceLessonSlug: "what-a-licence-gates",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Julian Abele, and the office that signed one name
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "abele-and-the-office",
      title: "9 · Abele, and the office he never left",
      section: "Section 3 · Julian Abele, and the office that signed one name",
      body: `Julian Francis Abele was born in Philadelphia on 30 April 1881, the youngest of eight children, and through his mother he was a descendant of the Reverend Absalom Jones, founder of the Free African Society and of St Thomas Episcopal Church (University Archives and Records Center, n.d.).

**He was, by any measure, the most thoroughly trained person in the story.** He went to the Institute for Colored Youth, then Brown Preparatory School, then the Pennsylvania Museum School of Industrial Art. He enrolled at the University of Pennsylvania in 1898 and took a B.A. in architecture in 1902, and Penn's own archives describe him as the first African American graduate of what is now its School of Design. He also earned a certificate from the Pennsylvania Academy of the Fine Arts (Cohen, 2019; University Archives and Records Center, n.d.).

**And he worked the entire time.** Penn records that Abele spent all four undergraduate years employed as a designer at the Louis Hickman architectural firm, fitting the job around afternoon and evening classes, while collecting a string of student prizes and serving as president of the Architectural Society.

**Horace Trumbauer hired him immediately.** Penn's biography adds a hedge worth keeping: Trumbauer "is said to have helped to finance the young architect's three years European travel and study" (University Archives and Records Center, n.d.). Said to have. Section 4 is about what happened to that sentence when other people retold it.

**He returned to Philadelphia and to the Trumbauer firm in 1906, and never worked anywhere else.** Penn puts it flatly: "He spent his entire professional life with this large, nationally known firm, advancing to the position of chief designer in 1909 and taking over the office after Trumbauer's death in 1938."

**One date in that sentence is contested, and this course reports the disagreement rather than choosing.** Penn's archives and Duke University Libraries both say Abele became chief designer in **1909**. The NCSU Libraries' dictionary of North Carolina architects says Trumbauer "brought Abele into the firm in 1906 and promoted him to chief designer in **1908**" (North Carolina Architects and Builders, n.d.). Nothing in the argument turns on the year. The course's rule is that an unresolved conflict between institutional sources gets written down rather than smoothed over.

**What the firm produced under that arrangement is the reason anyone cares.** The Trumbauer office designed the Philadelphia Museum of Art, the central branch of the Free Library of Philadelphia, the Land Title Building, and Whitemarsh Hall for Edward Stotesbury. At Penn it produced Irvine Auditorium, the Dunning Coaches Center and the President's House. Outside Philadelphia it produced the Widener Memorial Library at Harvard, mansions in Newport and New York, and the English Gothic and Georgian campuses of Duke University (University Archives and Records Center, n.d.). Cohen records that Abele designed thirty nine buildings for the Durham campus.

**After 1938 the name on the door did not change.** Duke University Libraries records that "He led the firm with William O. Frank following Trumbauer's death in 1938" (Duke University Libraries, n.d.). The NCSU entry names the successor practice: the Office of Horace Trumbauer, and offers the reason without dressing it up, that the depth of the Great Depression was not a good moment to change the identity and the name of an established firm.

So the man who ran the office spent twelve more years working under a dead man's name. That is not a metaphor. That is what the letterhead said.

:::reveal What did Penn's archives say about Abele's whole professional life, and what is the significant thing about it? ||| He spent all of it with one firm, Horace Trumbauer's, advancing to chief designer and eventually taking over the office, so his name never appeared on a practice of his own.

:::reveal Which institutions disagree about the year Abele became chief designer, and what do they say? ||| Penn's University Archives and Duke University Libraries say 1909; the NCSU Libraries' North Carolina architects dictionary says 1908.

:::reveal What happened to the firm's name after Trumbauer died in 1938? ||| Nothing. It continued as the Office of Horace Trumbauer, and Abele led it with William O. Frank until his own death in 1950.

## Vocabulary
- **Chief designer**: the senior design role inside a firm, responsible for the office's design output without owning the practice or its name.
- **Institute for Colored Youth**: the Philadelphia school Abele attended, where his aunt taught drawing and steered him toward architecture.
- **Office of Horace Trumbauer**: the successor practice after 1938, which kept the dead principal's name while Abele led it.
- **Contested date**: a fact on which institutional sources disagree, which this course reports as a disagreement rather than resolving by preference.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Duke University Libraries. (n.d.). *Julian Abele (1881-1950)*. Duke University. https://library.duke.edu/rubenstein/uarchives/history/articles/abele

North Carolina Architects and Builders. (n.d.). *Abele, Julian Francis (1881-1950)*. NCSU Libraries. https://ncarchitects.lib.ncsu.edu/people/P000277

University Archives and Records Center. (n.d.). *Julian Francis Abele*. University of Pennsylvania. https://archives.upenn.edu/exhibits/penn-people/biography/julian-francis-abele/`,
    },
    {
      slug: "the-1942-application",
      title: "10 · The 1942 application",
      section: "Section 3 · Julian Abele, and the office that signed one name",
      body: `This is the lesson the whole course was built to reach, and it turns on a single ordinary document.

**First, the practice, in Cohen's words.** "As was common practice, employees at the Trumbauer firm did not sign their work. The only name to appear on the drawings and blueprints of the vast majority of projects in which Abele was involved was that of Horace Trumbauer" (Cohen, 2019). Cohen adds a sentence people tend to skip: "Abele did not overtly bristle at this policy."

**Now the document.** In 1942, forty years into his career and four years after he had taken over the firm, Julian Abele applied for membership of the American Institute of Architects. An application of that kind asks what you have designed. Cohen records what he was able to answer: "the only buildings he listed as his own were a house he designed for his sister and the Duke University buildings he worked on after Trumbauer's death" (Cohen, 2019).

**Read that as a measurement, because that is what it is.** Here is a man who had been chief designer of a nationally known office for more than three decades. Ask him, in writing, on a form, to list his own work, and the answer is one house and the buildings that happened after the principal died. Not because he was modest, and not because somebody suppressed the list. Because the convention had not left him a document to point at.

That is what a format cap does when nobody intervenes. CREDIT-00 names the mechanism in general; this is the cleanest single instance of it anywhere in the catalog, because the consequence is not a feeling or an inference. It is a form, with a short list on it.

**Two institutions confirm the year and add the reason.** Duke University Libraries: "It was not until 1942 that Julian Abele was admitted as a member of the American Institute of Architects" (Duke University Libraries, n.d.). Penn's archives put the racial half plainly: "Racial prejudices deterred him from visiting the Duke University campus he designed and delayed his admission to the American Institute of Architects until 1942" (University Archives and Records Center, n.d.).

**Then, after 1938, his name reaches a drawing.** The NCSU Libraries entry records the exact moment: "The architectural drawings for the Indoor Stadium are the earliest to have 'Office of Horace Trumbauer, Julian Abele, Architect,' on them" (North Carolina Architects and Builders, n.d.). The building is now Cameron Indoor Stadium, and the drawings date from after Trumbauer's death. The convention did not bend for him. It ran out of a principal.

**One more sentence, and it needs handling with care.** Duke University Libraries reports that while discussing his work Abele said: "The lines are all Mr. Trumbauer's, but the shadows are all mine" (Duke University Libraries, n.d.). It is widely quoted, and this course prints it as Duke's library reports it: an attributed statement, without a dated document behind it that this course could examine. If it is his, it is the sharpest description of an employee designer's position anyone has produced. Either way the 1942 form says the same thing, and the form is a record.

:::reveal What could Julian Abele list as his own work when he applied to the AIA in 1942? ||| A house he had designed for his sister, and the Duke University buildings he worked on after Trumbauer's death.

:::reveal Which drawings are the earliest known to carry Abele's name alongside the firm's, and what does their date tell you? ||| The drawings for the Indoor Stadium at Duke, now Cameron Indoor Stadium, which date from after Trumbauer's death in 1938, so the convention ended with the principal rather than bending for the employee.

:::reveal Why is the 1942 application better evidence than the popular story about Abele? ||| Because it is a document that measures the consequence of the convention directly, rather than a claim about somebody's intentions that a reader has to take on trust.

## Vocabulary
- **Format cap**: from CREDIT-00, the hard limit a medium places on how many names it can display, which forces a rationing decision.
- **Membership application**: the AIA form on which a candidate lists their own work, and the document that measures what the convention left Abele able to claim.
- **Attributed statement**: a quotation an institution reports without a dated document behind it, printed here as attribution rather than as a verified quotation.
- **Cameron Indoor Stadium**: the Duke building whose drawings are the earliest recorded to carry Abele's name beside the firm's.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Duke University Libraries. (n.d.). *Julian Abele (1881-1950)*. Duke University. https://library.duke.edu/rubenstein/uarchives/history/articles/abele

North Carolina Architects and Builders. (n.d.). *Abele, Julian Francis (1881-1950)*. NCSU Libraries. https://ncarchitects.lib.ncsu.edu/people/P000277

University Archives and Records Center. (n.d.). *Julian Francis Abele*. University of Pennsylvania. https://archives.upenn.edu/exhibits/penn-people/biography/julian-francis-abele/`,
    },
    {
      slug: "what-the-record-can-show",
      title: "11 · What the record can show, and what it cannot",
      section: "Section 3 · Julian Abele, and the office that signed one name",
      body: `The correct response to an erased credit is not to invent a restored one. It is to work building by building and say, for each, what the evidence will carry.

**Some buildings can be confidently assigned.** Penn's archives are unusually direct about the difficulty and about the exception: "As in any large firm, assigning design credit to individuals is difficult. Abele undoubtably helped to shape all the work that passed through the office, but was not the designer of every project. Among the important buildings that can be confidently assigned to him is the Free Library of Philadelphia, whose design he personally presented to the client and to the city's design review panel" (University Archives and Records Center, n.d.).

That is what good evidence looks like: not a signature, but a recorded act. He stood in front of the client and the review panel with the design.

**Some buildings have a paper trail that names him without crediting him.** Widener is the case. The July 1912 letters in the Harvard University Archives put him in the room, and Harvard's associate librarian for public services, Kate Donovan, states the inference carefully: "We know that Abele's role as chief designer for the firm meant he had an important role in helping design the building" (Harvard Gazette, 2020). Donovan also names the obstacle in the same breath: "he rarely signed any of his early designs."

**And here is the nuance that keeps this course honest.** The convention was not absolute. Cohen's article carries an image caption noting that prints of the Philadelphia Museum of Art "include the signatures of Horace Trumbauer and Julian Abele", while adding that "many other architects should be cited for the final design" (Cohen, 2019). So his name is on some drawings. Cohen's general statement is about "the vast majority" of projects, not all of them, and a course that flattened that into "his name never appeared on anything" would be doing to the evidence exactly what the myths do.

**Some things the record simply cannot show, and that is a finding rather than a gap to fill.** Cohen: "As far as we know, Abele did not keep a diary, and only limited correspondence of the Trumbauer firm remains" (Cohen, 2019). No diary. Limited firm papers. The NCSU entry reaches the same conclusion about the Durham question from the other side, noting that with no significant personal papers or official firm records extant, the question appears unanswerable.

**So the honest position is per building, and it has three settings.**

1. **Confidently assigned**, where a recorded act ties a person to a design. The Free Library.
2. **Named in the record without a design credit**, where correspondence or a drawing puts a person on the project and the share is not recoverable. Widener, and the Philadelphia Museum of Art.
3. **Unrecoverable**, where the papers do not exist. Most of the office's output, for every employee in it.

"He designed everything Trumbauer signed" is as wrong as "he designed nothing." Both replace an archive with a wish, and CREDIT-00 has a name for what happens when you do: the silence in the record starts being read as a statement about the world rather than as a statement about the record.

:::reveal Which Trumbauer building do Penn's archives say can be confidently assigned to Abele, and on what evidence? ||| The Free Library of Philadelphia, because he personally presented its design to the client and to the city's design review panel.

:::reveal Is it true that Abele's name never appeared on any drawings? ||| No. Cohen notes that prints of the Philadelphia Museum of Art carry both Trumbauer's and Abele's signatures. The claim about single-name drawings applies to the vast majority of projects, not to all of them.

:::reveal What two absences does Cohen give as the reason so much about Abele is unrecoverable? ||| He appears to have kept no diary, and only limited correspondence of the Trumbauer firm survives.

## Vocabulary
- **Confidently assigned**: a design credit supported by a recorded act, such as personally presenting a scheme to a client and a review panel.
- **Design review panel**: the municipal body that reviewed a public building's design, and before which Abele presented the Free Library.
- **Archival silence**: from CREDIT-00, the absence of a record, which describes the archive rather than the world and must not be read as evidence of nothing having happened.
- **Per-building position**: the discipline of stating, building by building, whether a credit is confidently assigned, merely evidenced, or unrecoverable.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Harvard Gazette. (2020, February 26). *Recognizing architect Julian Abele's contributions to Harvard*. Harvard University. https://news.harvard.edu/gazette/story/2020/02/recognizing-architect-julian-abeles-contributions-to-harvard/

North Carolina Architects and Builders. (n.d.). *Abele, Julian Francis (1881-1950)*. NCSU Libraries. https://ncarchitects.lib.ncsu.edu/people/P000277

University Archives and Records Center. (n.d.). *Julian Francis Abele*. University of Pennsylvania. https://archives.upenn.edu/exhibits/penn-people/biography/julian-francis-abele/`,
    },
    // APPEND-HERE
  ],
};
