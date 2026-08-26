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
    {
      slug: "quiz-abele-and-the-office",
      title: "12 · Knowledge check: Abele and the office",
      section: "Section 3 · Julian Abele, and the office that signed one name",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Julian Francis Abele was born in Philadelphia in:",
            options: ["1881", "1902, the year he completed his architecture degree at the University of Pennsylvania", "1868, the same year as Robert R. Taylor, the first Black graduate of MIT", "1894, the year Paul Revere Williams was born in Los Angeles"],
            correctIndex: 0,
            explanation: "On 30 April 1881, the youngest of eight children, and he died in 1950.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Through his mother, Abele was a descendant of:",
            options: ["Absalom Jones", "Richard Allen, the founding bishop of the African Methodist Episcopal Church", "Octavius Catto, the Philadelphia educator and civil rights organiser", "Robert Purvis, the abolitionist and president of the Underground Railroad committee"],
            correctIndex: 0,
            explanation: "Founder of the Free African Society and of St Thomas Episcopal Church, per Penn's archives.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Abele enrolled at the University of Pennsylvania in 1898 and took a degree in architecture in:",
            options: ["1902", "1906, the year he returned to Philadelphia after travelling in Europe", "1909, the year Penn's archives say he became the firm's chief designer", "1897, five years before Horace Trumbauer first employed him"],
            correctIndex: 0,
            explanation: "Penn describes him as the first African American graduate of what is now its School of Design.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "What did Abele do throughout his four undergraduate years at Penn?",
            options: ["Worked as a designer", "Taught drawing at the Institute for Colored Youth in South Philadelphia", "Served as an unpaid apprentice in the Philadelphia city architect's office", "Travelled to Paris each summer to sit classes at the Ecole des Beaux-Arts"],
            correctIndex: 0,
            explanation: "He was employed at the Louis Hickman firm and fitted the job around afternoon and evening classes.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Penn's archives describe Trumbauer's role in Abele's European study with the phrase:",
            options: ["Is said to have", "Paid in full and documented in the firm's surviving accounts", "Refused, according to correspondence held in the university archives", "Arranged through the American Institute of Architects travelling scholarship"],
            correctIndex: 0,
            explanation: "A hedge the archives write deliberately, and one this course keeps rather than tidying away.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Abele returned to Philadelphia and to the Trumbauer firm in:",
            options: ["1906", "1902, immediately upon graduating from the University of Pennsylvania", "1912, in time for the correspondence about the Harvard library commission", "1938, after the death of the principal whose name the firm carried"],
            correctIndex: 0,
            explanation: "And he never worked anywhere else for the rest of his professional life.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Which institutions say Abele became chief designer in 1909?",
            options: ["Penn's archives and Duke's libraries", "The NCSU Libraries dictionary and the Harvard University Archives", "Hidden City Philadelphia and the Athenaeum of Philadelphia", "The American Institute of Architects and the Free Library of Philadelphia"],
            correctIndex: 0,
            explanation: "Both give 1909, and the NCSU Libraries entry gives 1908 instead.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Which year does the NCSU Libraries dictionary give for Abele's promotion to chief designer?",
            options: ["1908", "1906, the year he is recorded as having joined the firm", "1912, when he was introduced to the client for the Harvard library", "1938, when he took over the office after Trumbauer's death"],
            correctIndex: 0,
            explanation: "The disagreement with Penn and Duke is reported by this course rather than resolved.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "How does this course handle the conflict between institutional sources over that date?",
            options: ["It reports the disagreement", "It follows whichever institution is geographically closest to the events described", "It averages the two published years and presents the result as approximate", "It omits the date entirely, since nothing in the argument depends on it"],
            correctIndex: 0,
            explanation: "An unresolved conflict between institutional sources gets written down rather than smoothed over.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Which of these buildings did the Trumbauer office produce?",
            options: ["Whitemarsh Hall", "Independence Hall's twentieth century restoration and visitor facilities", "The Philadelphia City Hall tower, where an employee later installed the elevators", "Boathouse Row's clubhouses along the Schuylkill River"],
            correctIndex: 0,
            explanation: "The Stotesbury mansion, alongside the Philadelphia Museum of Art, the Free Library and the Land Title Building.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "How many buildings did Cohen record Abele as having designed for the Durham campus?",
            options: ["Thirty nine", "Eleven, the number of buildings on the Georgian campus that opened in 1927", "Two hundred, the figure the Harvard Gazette gives for his career as a whole", "Eight, counting only those completed after Trumbauer's death in 1938"],
            correctIndex: 0,
            explanation: "Including a Gothic chapel and the building now known as Cameron Indoor Stadium.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Which Penn buildings does Penn's own biography attribute to Trumbauer's office?",
            options: ["Irvine Auditorium and the President's House", "College Hall and the Fisher Fine Arts Library, both from the nineteenth century", "The Palestra and Franklin Field, the university's principal athletic buildings", "The quadrangle dormitories designed by Cope and Stewardson"],
            correctIndex: 0,
            explanation: "Along with the Dunning Coaches Center, all listed as the office's work rather than any individual's.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "According to Duke University Libraries, who led the firm with Abele after 1938?",
            options: ["William O. Frank", "Howell Lewis Shay, who had led the museum project inside the office", "Valentine Burkhart Lee, the employee who travelled regularly to Durham", "Francis James Dallet, the archivist who later documented the office's work"],
            correctIndex: 0,
            explanation: "Duke's libraries name Frank as the colleague who led the practice alongside Abele.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "What did the successor practice call itself after Trumbauer died?",
            options: ["Office of Horace Trumbauer", "Trumbauer and Abele, Architects, from the day the partnership was reconstituted", "Abele and Frank, reflecting the two men who actually ran the practice", "The Philadelphia Architectural Office, dropping any personal name entirely"],
            correctIndex: 0,
            explanation: "The dead principal's name stayed on the letterhead for the twelve years Abele ran the office.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "What reason does the NCSU entry give for not renaming the firm?",
            options: ["The Depression", "A clause in Trumbauer's will requiring the name to be preserved", "Objections from the American Institute of Architects to a change of identity", "The North Carolina licence, which had been issued in Trumbauer's name"],
            correctIndex: 0,
            explanation: "The depth of the Great Depression was not a good moment to change an established firm's identity.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Abele's schooling before Penn included which institution?",
            options: ["The Institute for Colored Youth", "Cheyney State Teachers College, where he trained as a drawing instructor", "The Massachusetts Institute of Technology's architecture department", "Hampton Institute, where John S. Chase would later take his first degree"],
            correctIndex: 0,
            explanation: "Then Brown Preparatory School and the Pennsylvania Museum School of Industrial Art.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Beyond his Penn degree, Abele also earned a certificate from:",
            options: ["The Pennsylvania Academy of the Fine Arts", "The Ecole des Beaux-Arts, where he completed a diploma in architecture", "Columbia University's school of architecture in New York City", "The American Institute of Architects' own examination programme"],
            correctIndex: 0,
            explanation: "Which is part of what makes him, on paper, the best trained person in this story.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "The two Duke campuses the Trumbauer office built opened in:",
            options: ["1927 and 1930", "1924 and 1926, immediately after the Duke Endowment was established", "1938 and 1939, the years around the principal's death", "1892 and 1902, when Trinity College first moved to Durham"],
            correctIndex: 0,
            explanation: "The Georgian East Campus first, then the Gothic West Campus three years later.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "This lesson's closing observation is that Abele spent his last twelve working years:",
            options: ["Under a dead man's name", "Practising independently under a licence issued in North Carolina", "Refusing every commission the firm received from southern clients", "Working without pay while the firm settled the principal's estate"],
            correctIndex: 0,
            explanation: "The letterhead still said Office of Horace Trumbauer while Abele ran the practice.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "What was Abele's role in the student life of the University of Pennsylvania?",
            options: ["President of the Architectural Society", "Editor of the student newspaper that later published his great grand-niece's letter", "Captain of the university's varsity crew during his final undergraduate year", "Founder of the first Black student organisation on the Penn campus"],
            correctIndex: 0,
            explanation: "He also served on the yearbook committee and collected several design prizes.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "Penn's archives describe Abele as the first African American graduate of:",
            options: ["What is now its School of Design", "Its law school, which admitted him in the same decade", "The Wharton School's programme in real estate and construction", "Its graduate programme in civil engineering and structures"],
            correctIndex: 0,
            explanation: "The archives also list him as first African American graduate of the Graduate School of Fine Arts.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "In Cohen's account, whose name appeared on the drawings for the vast majority of Abele's projects?",
            options: ["Horace Trumbauer's", "Both men's, since the firm required its chief designer to countersign every sheet", "Nobody's, because the office issued drawings without any name at all", "The client's, under the terms of the commissioning agreements of the period"],
            correctIndex: 0,
            explanation: "Employees at the firm did not sign their work, as was common practice.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Cohen adds a sentence about Abele's response to the no-signature policy, saying he:",
            options: ["Did not overtly bristle at it", "Repeatedly petitioned Trumbauer to add employee names to the drawings", "Kept a private register of every design he had personally produced", "Resigned twice over it and was persuaded back on both occasions"],
            correctIndex: 0,
            explanation: "A detail people tend to skip, and one that keeps the story about a convention rather than a fight.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Abele applied for membership of the American Institute of Architects in:",
            options: ["1942", "1902, immediately after taking his degree at the University of Pennsylvania", "1938, in the weeks after he took over the running of the firm", "1923, the year Paul Revere Williams became a member"],
            correctIndex: 0,
            explanation: "Forty years into his career, and four years after he had taken over the office.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The buildings Abele listed as his own on that application were his sister's house and:",
            options: ["The Duke buildings after 1938", "The Free Library of Philadelphia, which he had presented to the city himself", "Widener Library at Harvard, documented in the 1912 correspondence", "The Philadelphia Museum of Art, whose prints carry his signature"],
            correctIndex: 0,
            explanation: "The work that happened after Trumbauer died, plus one house, from a career of more than three decades.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Why does this course call the 1942 application a measurement?",
            options: ["It records what the convention left him", "Because the AIA scored applications against a published list of qualifying buildings", "Because the form required applicants to estimate the value of their built work", "Because the firm was obliged to certify the accuracy of every entry on it"],
            correctIndex: 0,
            explanation: "The consequence is not a feeling or an inference. It is a form with a short list on it.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The short list on that form is short because of:",
            options: ["The convention", "Modesty, since Abele consistently declined to claim work he had shared", "An AIA rule limiting applicants to three named projects", "A dispute with the firm's surviving partners over the estate"],
            correctIndex: 0,
            explanation: "Not modesty and not suppression. The format had not left him a document to point at.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "How do Penn's archives describe the reason for the delay in Abele's AIA admission?",
            options: ["Racial prejudices", "A backlog of applications caused by the Second World War", "His own reluctance to join any professional society before running a firm", "The absence of a Pennsylvania licence in his name until the late 1930s"],
            correctIndex: 0,
            explanation: "The same sentence says racial prejudices also deterred him from visiting the Duke campus.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Which building's drawings are the earliest recorded to carry Abele's name beside the firm's?",
            options: ["The Indoor Stadium at Duke", "The Duke Chapel, the signature building of the Gothic campus", "Widener Library at Harvard, from the 1912 commission", "The Free Library of Philadelphia's central branch"],
            correctIndex: 0,
            explanation: "Now Cameron Indoor Stadium, and the drawings date from after Trumbauer's death.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The exact legend the NCSU entry records on those drawings is:",
            options: ["Office of Horace Trumbauer, Julian Abele, Architect", "Julian Abele, Architect, Philadelphia and Durham", "Trumbauer and Abele, Associated Architects", "Office of Julian Francis Abele, successor to Horace Trumbauer"],
            correctIndex: 0,
            explanation: "The firm's name still comes first, and the individual credit follows it.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "What does the date of those drawings show about the convention?",
            options: ["It ran out of a principal", "It was formally abolished by the firm in a written policy change", "It applied only to work outside Pennsylvania after the mid-1930s", "It had already been relaxed by the time the Duke commission began"],
            correctIndex: 0,
            explanation: "The name reached the drawings after Trumbauer died, not because anybody decided to bend the rule.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The statement \"The lines are all Mr. Trumbauer's, but the shadows are all mine\" is reported by:",
            options: ["Duke University Libraries", "Amy Cohen, quoting a 1974 book about Newport mansions", "The Harvard University Archives, in the July 1912 correspondence", "Dreck Wilson, in his biographical dictionary of African American architects"],
            correctIndex: 0,
            explanation: "This course prints it as an attributed statement, because it could not examine a dated document behind it.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "How does this course treat that statement?",
            options: ["As attributed, not verified", "As a verbatim quotation from a dated letter in the Duke archives", "As a paraphrase invented by later writers and therefore omitted", "As disputed, with two institutions taking opposing positions on it"],
            correctIndex: 0,
            explanation: "It is reported as Duke's library reports it, and the 1942 form carries the argument regardless.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Which earlier course in this series names the general mechanism the 1942 form illustrates?",
            options: ["CREDIT-00", "CREDIT-01, which covers the United States patent record in detail", "CREDIT-02, which covers the master printer's unsigned position", "None of the earlier courses, because this mechanism is specific to architecture"],
            correctIndex: 0,
            explanation: "The format cap, which CREDIT-00 teaches in general and this document instantiates precisely.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "How long had Abele been in the profession when he made the AIA application?",
            options: ["About forty years", "Roughly fifteen years, dating from his promotion to chief designer", "Four years, counting only the period after Trumbauer's death", "Twenty five years, dating from the completion of Widener Library"],
            correctIndex: 0,
            explanation: "He graduated in 1902 and applied in 1942, which is what makes the short list striking.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Cohen's phrase for how common the no-signature practice was is:",
            options: ["As was common practice", "A peculiarity of the Trumbauer office among Philadelphia firms", "An arrangement unique to firms whose principals lacked formal training", "A requirement imposed by the clients who commissioned the largest houses"],
            correctIndex: 0,
            explanation: "Which is what makes it a convention of the period rather than one employer's policy.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The AIA membership application matters as evidence because it asks an applicant to:",
            options: ["List their own work", "Name three members who will sponsor their candidacy", "Certify that they hold a current licence in every state where they practise", "Submit photographs of every building they have completed"],
            correctIndex: 0,
            explanation: "Which turns the convention's effect into something written down and countable.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Which of Abele's own commissions appears on the 1942 list?",
            options: ["A house for his sister", "The President's House at the University of Pennsylvania", "The Land Title Building, which housed the firm's own offices", "Whitemarsh Hall, the Stotesbury mansion outside Philadelphia"],
            correctIndex: 0,
            explanation: "A single family house, and the Duke work that followed Trumbauer's death.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "This lesson argues the 1942 document beats the popular story because a document:",
            options: ["Does not require trust", "Was more widely circulated at the time than any published account", "Carries the legal weight that a published recollection cannot", "Was written by Abele rather than about him"],
            correctIndex: 0,
            explanation: "A claim about somebody's intentions has to be taken on trust; a form with a short list on it does not.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "According to Penn's archives, which Trumbauer building can be confidently assigned to Abele?",
            options: ["The Free Library of Philadelphia", "Widener Library at Harvard, on the strength of the 1912 correspondence", "Irvine Auditorium at the University of Pennsylvania", "Whitemarsh Hall, the largest of the firm's Gilded Age houses"],
            correctIndex: 0,
            explanation: "Because he personally presented its design to the client and to the city's design review panel.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The evidence Penn relies on for that assignment is best described as:",
            options: ["A recorded act", "A signed drawing held in the university's architectural collection", "A published statement by Trumbauer crediting his chief designer", "An entry in the firm's surviving job book for the commission"],
            correctIndex: 0,
            explanation: "Not a signature, but the fact that he stood in front of the client and the review panel with the design.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Penn's archives also state that Abele:",
            options: ["Was not the designer of every project", "Personally designed every building the office produced after 1909", "Never worked on any commission outside Pennsylvania", "Signed his drawings consistently from the day he was promoted"],
            correctIndex: 0,
            explanation: "He undoubtedly helped shape all the work that passed through the office without designing all of it.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "How does Harvard's Kate Donovan state the inference about Widener?",
            options: ["Carefully", "As a certainty, on the strength of a signed drawing in the archives", "As a rejection of any role for Abele beyond drafting", "As a matter for the Trumbauer firm's papers, which she says are lost"],
            correctIndex: 0,
            explanation: "She says his role as chief designer meant he had an important role in helping design the building.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Donovan names which obstacle to pinning down Abele's contributions?",
            options: ["He rarely signed early designs", "The Harvard archives were closed to researchers until the 1980s", "The firm destroyed its drawings when the office finally closed", "Abele's family declined to make his personal papers available"],
            correctIndex: 0,
            explanation: "Which is the same convention this course has been describing, stated by a librarian at the receiving institution.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Cohen's caption on prints of the Philadelphia Museum of Art notes that they carry:",
            options: ["Two signatures", "No name at all, in keeping with the firm's practice for public commissions", "A seal issued by the Pennsylvania board of architectural examiners", "The signature of the museum's building committee chairman"],
            correctIndex: 0,
            explanation: "Trumbauer's and Abele's both, which is why the single-name claim is about the vast majority rather than all.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "What does that caption also say about the museum's final design?",
            options: ["Many other architects should be cited", "That it was completed entirely within the Trumbauer office", "That the drawings were prepared by an outside consultant", "That no reliable attribution is possible for any part of it"],
            correctIndex: 0,
            explanation: "Which is why nobody, Abele included, should hold the singular title of architect of the museum.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Flattening \"the vast majority\" into \"never\" would be doing what to the evidence?",
            options: ["What the myths do", "A reasonable simplification for a general audience", "The only way to state the convention in a single sentence", "Exactly what the archival sources themselves recommend"],
            correctIndex: 0,
            explanation: "Overstating in a flattering direction is the failure mode this whole course is organised against.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Cohen gives two reasons so much about Abele is unrecoverable. One is that only limited firm correspondence survives. The other is that he:",
            options: ["Kept no diary", "Wrote in French, which few of his colleagues could read", "Destroyed his papers before his death in 1950", "Left his records to a repository that later burned"],
            correctIndex: 0,
            explanation: "As far as we know, in Cohen's phrasing, which is itself a hedge worth noticing.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The NCSU entry reaches which conclusion about the question of whether Abele visited Durham?",
            options: ["It appears unanswerable", "That he certainly did, on the strength of two second-hand accounts", "That he certainly did not, on the strength of his family's testimony", "That the question was settled by the firm's travel records"],
            correctIndex: 0,
            explanation: "With no significant personal papers or official firm records extant, the entry says the question cannot be settled.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The first of the three settings in this lesson's per-building position is:",
            options: ["Confidently assigned", "Probably attributable, pending further archival research", "Traditionally credited, meaning repeated without evidence", "Disputed, meaning two institutions take opposing views"],
            correctIndex: 0,
            explanation: "Where a recorded act ties a person to a design, as with the Free Library.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The second setting covers buildings where a person is:",
            options: ["Named without a design credit", "Credited by the firm but not by any outside institution", "Known to have declined the commission when it was offered", "Recorded as the architect of record but not the design architect"],
            correctIndex: 0,
            explanation: "Correspondence or a drawing puts them on the project and the share is not recoverable. Widener and the museum.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The third setting, covering most of the office's output, is:",
            options: ["Unrecoverable", "Attributable to the principal by default under the firm convention", "Reserved for buildings that were designed but never constructed", "Applied only to commissions completed after Trumbauer's death"],
            correctIndex: 0,
            explanation: "The papers do not exist, and that applies to every employee in the office rather than to one of them.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "This lesson says \"he designed everything Trumbauer signed\" is:",
            options: ["As wrong as he designed nothing", "The best available summary given how little correspondence survives", "Correct for the period after 1909 and wrong before it", "A claim Penn's archives endorse with an explicit qualification"],
            correctIndex: 0,
            explanation: "Both replace an archive with a wish, in opposite directions.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "CREDIT-00's name for reading an absence of records as a statement about the world is:",
            options: ["Archival silence", "The Matthew effect, by which credit accrues to the already eminent", "The Matilda effect, by which women's contributions are reassigned", "Inventorship, which the law keeps distinct from ownership"],
            correctIndex: 0,
            explanation: "The silence describes the archive, and treating it as a description of the world is the error.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The correct response to an erased credit, according to this lesson, is not to invent a restored one but to:",
            options: ["Work building by building", "Seek a court declaration of authorship where the evidence permits", "Publish the strongest available claim and invite correction", "Defer to whichever institution owns the building today"],
            correctIndex: 0,
            explanation: "And to say, for each building, exactly what the evidence will carry.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Which body did Abele present the Free Library design to, alongside the client?",
            options: ["The city's design review panel", "The board of the American Institute of Architects' Philadelphia chapter", "The Pennsylvania Academy of the Fine Arts exhibition committee", "The Athenaeum of Philadelphia, which now holds the drawings"],
            correctIndex: 0,
            explanation: "That presentation is the recorded act on which Penn's confident assignment rests.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The three-setting framework in this lesson is designed to replace:",
            options: ["A single blanket claim", "The distinction between design architect and architect of record", "The need to consult institutional sources at all", "The firm convention as the organising idea of the course"],
            correctIndex: 0,
            explanation: "One claim about a whole office cannot be true, because the evidence differs building by building.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Cohen's hedge \"as far as we know\" attaches to the claim that Abele:",
            options: ["Kept no diary", "Never visited the Duke University campus during construction", "Designed thirty nine buildings for the Durham campus", "Was the first African American to graduate from Penn in architecture"],
            correctIndex: 0,
            explanation: "A small hedge, and this course keeps it rather than reporting the absence of a diary as certain.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Harvard's July 1912 correspondence is best described as evidence that:",
            options: ["Put Abele in the room", "Assigned him formal design credit for the library", "Recorded the fee the firm charged for the commission", "Settled which of the firm's employees would seal the drawings"],
            correctIndex: 0,
            explanation: "It names him on the project without recording what share of the design was his.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The unrecoverable setting applies to most of the office's output for:",
            options: ["Every employee in it", "Only those projects completed before Abele's promotion", "Only the residential commissions, whose papers were held privately", "Only work outside Pennsylvania, where the firm kept no local records"],
            correctIndex: 0,
            explanation: "Which is the same universality that made the convention a convention rather than a racial rule.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Duke University Libraries and Penn's archives agree on which fact about the AIA?",
            options: ["Abele joined in 1942", "That the institute had refused him membership twice before", "That he was the first African American member of the institute", "That the institute's Philadelphia chapter admitted him earlier"],
            correctIndex: 0,
            explanation: "Duke says it was not until 1942, and Penn says racial prejudices delayed admission until 1942.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Abele's Duke work included a Gothic chapel and the building now known as:",
            options: ["Cameron Indoor Stadium", "Baldwin Auditorium, the domed focal point of the Georgian campus", "The Rubenstein Library, where his portrait now hangs", "The Allen Building, which was still unfinished when he died"],
            correctIndex: 0,
            explanation: "Its drawings are also the earliest recorded to carry his name beside the firm's.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "The Trumbauer office's largest commission and its only one in the South was:",
            options: ["Duke University", "Widener Library at Harvard, which took three years to complete", "Whitemarsh Hall, the Stotesbury mansion outside Philadelphia", "The Philadelphia Museum of Art, built over several decades"],
            correctIndex: 0,
            explanation: "Two adjacent campuses in Durham, opening in 1927 and 1930.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "The best summary of what the 1942 form proves is that a forty-year career had left Abele with:",
            options: ["Almost nothing to claim", "A well documented portfolio the institute nonetheless declined to accept", "More projects than the form had room to list", "A dispute with the firm over which drawings were his"],
            correctIndex: 0,
            explanation: "One house and the work that came after the principal died, because the format had recorded nothing else.",
            sourceLessonSlug: "the-1942-application",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The myths, and why the documented version is better
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-servant-myth",
      title: "13 · The servant myth",
      section: "Section 4 · The myths, and why the documented version is better",
      body: `A 1974 book about the great houses of Newport, Rhode Island contains this sentence, which Amy Cohen quotes and calls an absurd assertion:

"The story goes that Trumbauer was frequently intoxicated, and so he left most of his work on these houses to be done by Julian Abele, his gifted black servant" (Cohen, 2019).

**Take it apart, because one clause of it is true.** Trumbauer, Cohen writes, "was known to overindulge and eventually died of cirrhosis of the liver". So the drinking is real. Everything the sentence builds on top of the drinking is not.

**Servant is the load bearing error.** Abele held three architectural qualifications, had worked professionally throughout his degree, and was the firm's chief designer. The man who employed him "never had formal training" (Cohen, 2019). Cohen's summary inverts the whole story in one line: "Thus, the extremely well-prepared Abele served as the firm's chief designer for decades."

**Notice what the myth had to do to be told at all.** To make Abele responsible for the work, the teller had to remove Trumbauer from the room with a bottle, and to explain Abele's presence in the room he had to be a servant. The version of events on offer is one where the trained Black professional cannot simply be a trained Black professional doing the job he was hired for. He has to be a domestic who turned out to be gifted, filling in for a drunk. Nothing in that story requires anybody to admit that a firm hired the best designer available and paid him to design.

**And here is the part that matters most for this course: some of the myths flatter him.** Cohen says so directly: "some of these Abele myths, it pains me to say, actually give Abele too much credit." The next lesson is entirely about those, and about how uncomfortable it is to correct a story downward when the person in it was genuinely wronged.

**Cohen ends her article with a quotation from Carter G. Woodson** about the purpose of what became African American History Month, and this course takes it as a working rule: "There should be no indulgence in undue eulogy of the Negro. The case of the Negro is well taken care of when it is shown how he has influenced the development of civilization" (Woodson, as quoted in Cohen, 2019).

**One point of method before you go on.** This course reports the 1974 book exactly as Cohen describes it: a 1974 book about elaborate Newport mansions. She does not name it, so neither does this course. Naming a book on inference, in order to make a citation look complete, is the same class of error as the myth itself.

:::reveal Which clause of the "gifted black servant" sentence is factually supported, and which is not? ||| Trumbauer's drinking is supported, since Cohen records that he was known to overindulge and died of cirrhosis. The claim that Abele was his servant is not: Abele held three architectural qualifications and was the firm's chief designer.

:::reveal What did the myth have to do to Trumbauer in order to give Abele the work? ||| Remove him from the room by making him drunk, because the story could not accommodate a trained Black professional simply doing the job he was hired to do.

:::reveal Why does this course decline to name the 1974 book? ||| Because Cohen does not name it, and identifying it by inference to make a citation look complete would be the same class of error as the myth.

## Vocabulary
- **Undue eulogy**: Woodson's term for praise that exceeds the record, which this course treats as a failure rather than a kindness.
- **Load bearing error**: the single false claim a myth cannot survive without, here the word servant.
- **Flattering myth**: a false claim that increases rather than decreases a subject's standing, and which is therefore harder to correct.
- **Citation by inference**: naming a source you have deduced rather than seen, which this course refuses.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/`,
    },
    {
      slug: "too-much-credit",
      title: "14 · Too much credit",
      section: "Section 4 · The myths, and why the documented version is better",
      body: `Beginning in the 1970s and continuing through the 1990s, articles in Philadelphia's local African American press said that Julian Abele designed the Philadelphia Museum of Art. Cohen's verdict is that calling him the architect of the museum "is an oversimplification" (Cohen, 2019).

**What the record actually holds.** The design and construction of the museum took decades and was, in Cohen's words, "a not always harmonious collaboration between the Trumbauer firm and the firm of Zantzinger and Borie". Drawing on research by the historian David Brownlee and by Abele's biographer Dreck Wilson, Cohen reports that Abele "certainly did numerous initial designs for the building", that "For a number of years, though, Howell Lewis Shay, another Trumbauer designer, took the lead within the firm", and that "Toward the end of the project, Abele stepped back in."

**Then the sentence that costs something to write:** "Although he surely played a role in creating this glorious building, neither Abele, nor any one individual, deserves the singular title: architect of the Philadelphia Museum of Art" (Cohen, 2019).

**The second over-claim is Irvine Auditorium at Penn.** The university's own website credits the building to Abele. Wilson disputes it, arguing that Abele's preferred material was limestone and that he would not have designed a red brick building. The 1983 letter from Penn archivist Francis James Dallet, summarising his interview with the former Trumbauer employee Valentine Burkhart Lee, is more specific still: Lee "remembers specifically that the finished design was one of the few big commissions not finished by Abele", and that it went to an older man from the City Architect's office (Cohen, 2019).

**Both of these corrections reduce what Abele is credited with, and both were made by people working to secure his reputation.** That combination is the thing to take away. A historian who spent years establishing that a Black architect's work had been systematically unrecorded then published an article whose largest section takes two buildings away from him. That is what a correction looks like when the person making it is loyal to the record rather than to the story.

**The practical reason to do it that way is that an over-claim is a hostage.** Say publicly that Abele designed the Philadelphia Museum of Art and you have handed anyone who wants to dismiss the subject a citation to Brownlee, a name to raise, and a reason to treat the rest of your account as advocacy. The 1942 AIA application is unassailable. "He designed the museum" is not, and if the two travel together, the second one drags the first down.

**The general test, which this course keeps reusing.** Before you print a claim, ask what a well informed opponent would say. If the answer is a specific correction with a source behind it, you do not have a claim yet. You have a liability.

:::reveal What is Cohen's verdict on the claim that Abele was the architect of the Philadelphia Museum of Art? ||| That it is an oversimplification, and that neither Abele nor any one individual deserves the singular title, because the building was a decades-long collaboration between two firms.

:::reveal Who took the lead on the museum inside the Trumbauer firm for a number of years? ||| Howell Lewis Shay, another Trumbauer designer, with Abele doing numerous initial designs and stepping back in toward the end.

:::reveal Why is an over-claim described here as a hostage? ||| Because a well informed opponent can correct it with a source, and when it falls it drags the verified claims standing next to it down too.

## Vocabulary
- **Over-claim**: a credit larger than the evidence supports, which is a liability rather than an asset to the case it is meant to help.
- **Zantzinger and Borie**: the second architectural firm on the Philadelphia Museum of Art, whose collaboration with Trumbauer's office ran for decades.
- **Singular title**: the framing this course rejects, in which one building has exactly one architect regardless of how it was produced.
- **Loyal to the record**: correcting a claim downward when the evidence requires it, even about a person you are working to establish.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/`,
    },
    {
      slug: "the-school-that-is-not-there",
      title: "15 · The school that is not there, and the trip nobody can settle",
      section: "Section 4 · The myths, and why the documented version is better",
      body: `The most repeated fact about Julian Abele's training has no record behind it.

**The story, as a 1975 book tells it.** Cohen quotes *Twilight of Splendor*: "Trumbauer ... made arrangements for him to take the entrance examination in Paris that fall. Abele passed. He then spent the next four years as a student in the ateliers of the school, supported entirely by Trumbauer. One may assume that Trumbauer enjoyed some measure of paternal gratification when Able was awarded the B.S. diplome d'architecte in the winter of 1905-1906."

**The correction, from two institutions independently.** Cohen: "there is no record of Abele ever attending, much less graduating from, the Ecole des Beaux Arts." The University of Pennsylvania's archives, writing about their own graduate, say the same thing without prompting: "There is no record of his study at l'Ecole des Beaux-Arts in Paris, which is sometimes reported, although French architecture would be his lifelong passion" (University Archives and Records Center, n.d.).

**Two separate institutions reporting an absence is about as strong as an absence gets.** It is not proof that he never attended. It is the reason nobody may print that he did.

**What is true, and is easy to confuse with it.** Abele did spend time in Paris. He was an avid Francophile and married a French woman. Penn's archives record that he "immersed himself in the Beaux Arts style as a student and remained committed to this system of architecture". A style is not a school. He worked in the manner the school taught, which he could learn at Penn, whose own architecture teaching was built on it.

**Cohen offers one explanation and labels it as a guess:** "Perhaps Trumbauer and Abele, each for their own reasons, were happy to maintain the story of the former's generosity and the latter's virtuosity." Perhaps. That word is doing exactly the work it should.

**The second unsettled question is whether Abele ever visited Duke.** Here both sides have something:

- **For a visit.** A 2005 Smithsonian article by Susan Tifft reports that in the early 1960s John H. Wheeler, a prominent Black banker in Durham, told George Esser, then executive director of the North Carolina Fund, that he recalled Abele visiting the campus during construction; and that in a 1989 interview Henry Magaziner, son of Abele's friend and Penn classmate Louis Magaziner, recalled Abele telling him that a Durham hotel had refused him a room during a trip to the university while accommodating his white associate (Cohen, 2019).
- **Against a visit.** Abele's family says he would not travel to the segregated South, having decided after a Jim Crow railway journey years earlier never to suffer that again. His colleague Valentine Lee, who himself travelled repeatedly between Philadelphia and Durham, said of Abele that "his talents were needed and best utilized in the home office" (Cohen, 2019).

**Every institution that has looked at it declines to close it.** Cohen gives her own view and flags it as a view: "My hunch is that Abele did not take the risk of visiting a place where he would be unwelcome and treated poorly, but the mystery remains unresolved." Duke University Libraries writes that it is generally accepted he did not travel to Durham or the segregated South, while noting that some evidence exists to suggest he may have visited. The NCSU dictionary concludes that with no significant personal papers or firm records extant, the question appears unanswerable.

A hunch labelled as a hunch is honest. A hunch printed as a fact is how the servant story got started.

:::reveal What do Cohen and Penn's archives independently say about the claim that Abele studied at the Ecole des Beaux-Arts? ||| That there is no record of it. Cohen says no record of him ever attending or graduating, and Penn says there is no record of his study there, though it is sometimes reported.

:::reveal What is true about Abele and France, and why is it easy to confuse with the school claim? ||| He spent time in Paris, was an avid Francophile and married a French woman, and he worked in the Beaux Arts style, which he was taught at Penn. A style is not a school.

:::reveal Name one piece of evidence on each side of the question of whether Abele visited Durham. ||| For: a 2005 Smithsonian article reports two second-hand accounts, one from a Durham banker and one from a friend's son. Against: his family said he would not travel to the segregated South, and his colleague Valentine Lee said his talents were best used in the home office.

## Vocabulary
- **Absence of record**: two independent institutions reporting that no evidence exists, which is the strongest form an absence takes and still not proof of a negative.
- **Beaux Arts style**: the system of architectural composition Abele was taught and worked in, which is separate from attendance at the Paris school of that name.
- **Second-hand account**: testimony recorded from someone repeating what another person said, which is evidence and is not a record.
- **Labelled guess**: an inference published with a word like perhaps or hunch attached, which is how an honest writer keeps speculation out of the factual record.

## Sources
Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Duke University Libraries. (n.d.). *Julian Abele (1881-1950)*. Duke University. https://library.duke.edu/rubenstein/uarchives/history/articles/abele

North Carolina Architects and Builders. (n.d.). *Abele, Julian Francis (1881-1950)*. NCSU Libraries. https://ncarchitects.lib.ncsu.edu/people/P000277

University Archives and Records Center. (n.d.). *Julian Francis Abele*. University of Pennsylvania. https://archives.upenn.edu/exhibits/penn-people/biography/julian-francis-abele/`,
    },
    {
      slug: "quiz-the-corrections",
      title: "16 · Knowledge check: the corrections",
      section: "Section 4 · The myths, and why the documented version is better",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The \"gifted black servant\" description of Julian Abele comes from a 1974 book about:",
            options: ["Newport mansions", "The architectural profession in Philadelphia between the wars", "The construction of Duke University's West Campus in the 1920s", "African American professionals in the northern cities after Reconstruction"],
            correctIndex: 0,
            explanation: "Cohen quotes it from a 1974 book about the elaborate houses of Newport, Rhode Island.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "What is Cohen's own description of that sentence?",
            options: ["An absurd assertion", "A regrettable but understandable simplification of a complex working relationship", "The earliest surviving account of how the Trumbauer office actually operated", "A claim she is unable to evaluate without access to the firm's records"],
            correctIndex: 0,
            explanation: "She quotes it in full and calls it absurd before taking it apart clause by clause.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Which part of the servant sentence does Cohen confirm as true?",
            options: ["The drinking", "That Trumbauer left most of the design work on the Newport houses to others", "That Abele was formally employed in the Trumbauer household", "That the Newport houses were designed after Trumbauer's health had failed"],
            correctIndex: 0,
            explanation: "Trumbauer was known to overindulge and eventually died of cirrhosis of the liver.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The word this lesson calls the load bearing error in the myth is:",
            options: ["Servant", "Intoxicated, since Trumbauer's drinking has never been independently confirmed", "Gifted, which implies natural talent rather than professional training", "Newport, since the houses in question were built in Philadelphia"],
            correctIndex: 0,
            explanation: "Abele held three architectural qualifications and was the firm's chief designer for decades.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen's inversion of the story turns on the fact that Trumbauer:",
            options: ["Had no formal training", "Had studied at the Ecole des Beaux-Arts before opening his practice", "Personally sealed every drawing the office issued to a client", "Employed nobody above the rank of senior draughtsman before 1909"],
            correctIndex: 0,
            explanation: "The extremely well prepared Abele was the chief designer for the untrained man whose name was on the door.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "This lesson argues the myth had to remove Trumbauer from the room in order to:",
            options: ["Give Abele the work", "Explain why the firm accepted so many commissions at once", "Account for the poor quality of the firm's later Newport houses", "Justify the decision to keep the office name after 1938"],
            correctIndex: 0,
            explanation: "And it had to make Abele a servant to explain his presence, rather than simply a hired professional.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The version of events the myth offers cannot accommodate:",
            options: ["A trained Black professional doing his job", "An architect who employed designers rather than drawing himself", "A firm that undertook work in more than one American city", "A client who dealt with employees rather than with the principal"],
            correctIndex: 0,
            explanation: "It requires him to be a domestic who turned out to be gifted, filling in for a drunk.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen writes that some of the Abele myths actually give him:",
            options: ["Too much credit", "Credit for buildings completed long after his death in 1950", "A licence he is not recorded as ever having held", "Membership of a professional society he never applied to join"],
            correctIndex: 0,
            explanation: "Which she says pains her to write, and which the next lesson is entirely about.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen closes her article by quoting:",
            options: ["Carter G. Woodson", "W. E. B. Du Bois on the idea of double consciousness", "Booker T. Washington on the dignity of manual labour", "Dreck Wilson on the difficulty of attributing work inside a firm"],
            correctIndex: 0,
            explanation: "On the purpose of what became African American History Month, and on undue eulogy.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The Woodson passage warns against:",
            options: ["Undue eulogy", "Writing history without consulting the people it concerns", "Separating the study of art from the study of politics", "Relying on newspapers rather than on official records"],
            correctIndex: 0,
            explanation: "The case is well taken care of when it is shown how a person influenced the development of civilization.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Why does this course describe the 1974 book without naming it?",
            options: ["Cohen does not name it", "Because the book is out of print and no copy could be located", "Because naming it would identify the author, who is still living", "Because the quotation appears in several books published that year"],
            correctIndex: 0,
            explanation: "Identifying it by inference, to make a citation look complete, is the same class of error as the myth.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "A flattering myth is harder to correct than an unflattering one because:",
            options: ["Correcting it looks like an attack", "It is usually supported by better documentary evidence", "It is repeated by fewer people and so spreads more slowly", "It concerns living subjects rather than historical ones"],
            correctIndex: 0,
            explanation: "Taking credit away from someone who was genuinely wronged is uncomfortable, and it is still required.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "How many architectural qualifications did Abele hold?",
            options: ["Three", "One, the bachelor's degree he took at the University of Pennsylvania", "Five, counting the prizes he won during his undergraduate years", "None recognised by any American licensing board of the period"],
            correctIndex: 0,
            explanation: "Which is what makes the word servant not merely rude but factually impossible.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Trumbauer eventually died of:",
            options: ["Cirrhosis of the liver", "A heart attack, at his home in Philadelphia in the spring of 1950", "Injuries sustained during a site visit to the Duke campus", "Complications following the collapse of a building he had designed"],
            correctIndex: 0,
            explanation: "Cohen records it while confirming the one clause of the myth that holds up.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The rule this course takes from the Woodson quotation is best stated as:",
            options: ["Praise no further than the record", "Publish the strongest available version and correct it later if challenged", "Write only about subjects whose personal papers survive", "Defer to the community that has preserved a subject's memory"],
            correctIndex: 0,
            explanation: "Undue eulogy is a failure rather than a kindness, and the record is what settles how far to go.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen's phrase for what Abele was, against the myth's description, is:",
            options: ["Extremely well prepared", "An unusually gifted amateur who learned the profession on the job", "The only trained architect Trumbauer ever employed", "A partner in the firm from the year he was hired"],
            correctIndex: 0,
            explanation: "Thus, in her construction, the extremely well prepared Abele served as the firm's chief designer for decades.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The myth converts a structural fact into:",
            options: ["A personal scandal", "A legal dispute between an employer and an employee", "An architectural argument about style and materials", "A question about who paid for the buildings"],
            correctIndex: 0,
            explanation: "The convention becomes a story about one man's drinking, which is easier to tell and explains nothing.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "This lesson observes that the myth demotes Abele in the act of:",
            options: ["Praising him", "Correcting an earlier and more damaging account of his career", "Recording his role for the first time in print", "Comparing him with the other designers in the office"],
            correctIndex: 0,
            explanation: "He is credited with the work and simultaneously described as a servant.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Abele's professional experience before he graduated from Penn consisted of:",
            options: ["Four years at a firm", "A summer spent in the office of the Philadelphia city architect", "An unpaid apprenticeship arranged by Horace Trumbauer", "No professional work at all, since his studies took all his time"],
            correctIndex: 0,
            explanation: "He worked as a designer at the Louis Hickman firm throughout his undergraduate years.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The clearest statement of why the servant myth fails is that it requires Abele to be:",
            options: ["Anything but an employee", "A licensed architect at a time when no state licensed anyone", "Present in Newport during the whole construction period", "Trumbauer's business partner rather than his subordinate"],
            correctIndex: 0,
            explanation: "The dull truth, that a firm hired a trained designer and paid him to design, was the version nobody told.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "The claim that Abele designed the Philadelphia Museum of Art circulated mainly in:",
            options: ["The local Black press", "The professional architectural journals of the 1920s and 1930s", "Penn's own alumni publications throughout the twentieth century", "Duke University's official histories of its Durham campuses"],
            correctIndex: 0,
            explanation: "Cohen dates the articles from the 1970s through the 1990s.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Cohen's verdict on calling Abele the architect of the museum is that it is:",
            options: ["An oversimplification", "A defensible reading of a genuinely ambiguous documentary record", "Correct for the initial designs and wrong for the finished building", "Unsupported by any of the research she was able to consult"],
            correctIndex: 0,
            explanation: "The design and construction took decades and involved two firms.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Which second firm collaborated with the Trumbauer office on the museum?",
            options: ["Zantzinger and Borie", "Cope and Stewardson, who had built much of the Penn campus", "McKim, Mead and White, the leading Beaux Arts practice of the period", "Frank Furness and Company, the older Philadelphia office"],
            correctIndex: 0,
            explanation: "Cohen calls the collaboration a not always harmonious one.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Whose research does Cohen draw on for the museum's design history?",
            options: ["Brownlee and Wilson", "Tifft and Magaziner, the two sources on the Durham visit question", "Dallet and Lee, the archivist and the former employee", "Woodson and Du Bois, the historians she quotes at the close"],
            correctIndex: 0,
            explanation: "The historian David Brownlee and Abele's biographer Dreck Wilson.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "According to that research, what did Abele contribute to the museum?",
            options: ["Numerous initial designs", "The whole scheme, from the first sketches through to the final elevations", "Only the interior finishes, which were added after the shell was complete", "Nothing documented, since his name appears nowhere on the project"],
            correctIndex: 0,
            explanation: "And he stepped back in toward the end of the project, after years in which Shay took the lead.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Cohen's conclusion about the singular title of architect of the museum is that it belongs to:",
            options: ["No one individual", "Horace Trumbauer, as the principal whose firm held the commission", "Zantzinger and Borie, who carried the project through its final phase", "Howell Lewis Shay, who led it inside the Trumbauer office for years"],
            correctIndex: 0,
            explanation: "Neither Abele nor any one individual deserves it, in her words.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Wilson's argument against attributing Irvine Auditorium to Abele rests on:",
            options: ["Materials", "A signed drawing in the Penn archives naming a different designer", "Abele's absence from Philadelphia during the years of the commission", "The building's completion date, which falls after Abele's death"],
            correctIndex: 0,
            explanation: "Abele's preferred material was limestone, and Irvine is a red brick building.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Valentine Lee's recollection, as summarised in the 1983 Dallet letter, was that Irvine was:",
            options: ["Not an Abele job", "Designed jointly by Abele and an older colleague from the city architect's office", "Abandoned by the firm before the working drawings were completed", "The last building Abele personally saw through to completion"],
            correctIndex: 0,
            explanation: "Lee remembered specifically that it was one of the few big commissions not finished by Abele.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The most striking feature of these two corrections is that they:",
            options: ["Reduce his credit", "Were published without any supporting research being cited", "Were made by the university whose building was in question", "Contradict the surviving drawings held by the Athenaeum"],
            correctIndex: 0,
            explanation: "And they were made by people working to secure his reputation rather than to diminish it.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "A historian loyal to the record rather than to the story will:",
            options: ["Correct downward when required", "Withhold publication until every question has been settled", "Prefer oral testimony to institutional documents", "Publish only claims that support the subject's reputation"],
            correctIndex: 0,
            explanation: "Which is exactly what Cohen does in the largest section of her article.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Why is the 1942 AIA application described as unassailable where the museum claim is not?",
            options: ["It is a document", "Because the institute has never disputed the accuracy of its own records", "Because it was written after Trumbauer's death and so is uncontaminated", "Because Abele's family confirmed its contents in later interviews"],
            correctIndex: 0,
            explanation: "The museum claim can be corrected with a citation to Brownlee, and it drags the verified material with it.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The general test this lesson offers is to ask, before printing a claim, what:",
            options: ["A well informed opponent would say", "The subject's descendants would prefer to see in print", "The most generous available reading of the evidence would allow", "The institution that owns the building has published about it"],
            correctIndex: 0,
            explanation: "If the answer is a specific correction with a source behind it, you have a liability rather than a claim.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Penn's own website, on the question of Irvine Auditorium:",
            options: ["Credits Abele", "Names the older man from the city architect's office", "Declines to attribute the building to any individual", "Attributes the design to Zantzinger and Borie"],
            correctIndex: 0,
            explanation: "Which is why the dispute is between a university's public page and the subject's biographer.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The museum's design and construction, in Cohen's account, took:",
            options: ["Decades", "About four years, from the initial designs to the opening", "The whole of the period between Trumbauer's death and Abele's", "Two separate campaigns separated by the Second World War"],
            correctIndex: 0,
            explanation: "Which is one reason no single individual can hold the singular title.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "What happened to Abele's involvement in the museum during the middle years of the project?",
            options: ["Shay took the lead", "The work was transferred entirely to Zantzinger and Borie", "He withdrew after a dispute over the building's materials", "He was seconded to the Duke University commission instead"],
            correctIndex: 0,
            explanation: "Howell Lewis Shay, another Trumbauer designer, led it inside the firm for a number of years.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The 1983 letter about Irvine was written by Penn's:",
            options: ["Archivist", "Dean of the school of architecture", "Director of facilities and campus planning", "University historian, in preparation for a centenary volume"],
            correctIndex: 0,
            explanation: "Francis James Dallet, summarising an interview he had conducted with Valentine Burkhart Lee.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Cohen's phrase for the collaboration between the two museum firms is:",
            options: ["Not always harmonious", "Unusually productive for a project of that scale", "Governed by a written agreement that survives in the city archives", "Terminated when the Trumbauer office withdrew in the 1930s"],
            correctIndex: 0,
            explanation: "Decades of joint work between the Trumbauer firm and Zantzinger and Borie.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "Cohen directs readers wanting the museum's full design history to:",
            options: ["Brownlee's book", "The Athenaeum of Philadelphia's collection of presentation prints", "The museum's own published centenary history", "Penn's University Archives and Records Center"],
            correctIndex: 0,
            explanation: "David Brownlee's Building the City Beautiful, for what she calls the nitty gritty details.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The reason an over-claim travelling with a verified claim is dangerous is that:",
            options: ["Both fall together", "The verified claim becomes harder to locate in the sources", "The over-claim will always be repeated more widely", "Readers assume the two came from the same source"],
            correctIndex: 0,
            explanation: "A dismissal of the weak claim gives a reader permission to treat the whole account as advocacy.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "In the years immediately before Cohen's article, the claim about the museum had been circulating for roughly:",
            options: ["Three decades", "Five years, following the renaming of Duke's main quadrangle", "A century, since the museum first opened to the public", "Two years, since a documentary film revived interest in Abele"],
            correctIndex: 0,
            explanation: "She dates the articles from the 1970s through the 1990s.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "The 1975 book that tells the Ecole des Beaux-Arts story is:",
            options: ["Twilight of Splendor", "Building the City Beautiful, by the historian David Brownlee", "African American Architects: A Biographical Dictionary", "North Carolina Architecture, by Catherine W. Bishir"],
            correctIndex: 0,
            explanation: "Cohen quotes its account of an entrance examination, four years in the ateliers and a 1905 to 1906 diploma.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "According to that book's account, who paid for Abele's supposed years in Paris?",
            options: ["Trumbauer", "The Pennsylvania Academy of the Fine Arts, through a travelling scholarship", "Abele's own family, from the earnings of his brothers in Philadelphia", "The French government, under a programme for foreign students"],
            correctIndex: 0,
            explanation: "Supported entirely by Trumbauer, in the book's phrasing, with paternal gratification at the diploma.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Cohen's correction to the Beaux-Arts story is that there is:",
            options: ["No record of him attending", "A record showing he was refused admission after the entrance examination", "Documentary proof that he attended for one year rather than four", "A conflict between the school's registers and the firm's accounts"],
            correctIndex: 0,
            explanation: "No record of him ever attending, much less graduating.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Which second institution reports the same absence independently?",
            options: ["Penn's University Archives", "The Ecole des Beaux-Arts itself, in response to a formal enquiry", "The American Institute of Architects, from its 1942 membership file", "Duke University Libraries, in its biography of the architect"],
            correctIndex: 0,
            explanation: "Penn writes that there is no record of his study there, which is sometimes reported.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Two institutions reporting an absence is described in this lesson as:",
            options: ["As strong as an absence gets", "Sufficient proof that the claim is definitively false", "Weaker evidence than a single positive record would be", "Grounds for treating the question as permanently closed"],
            correctIndex: 0,
            explanation: "It is not proof he never attended. It is the reason nobody may print that he did.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "What is genuinely true about Abele and France?",
            options: ["He spent time in Paris", "He completed a diploma there in the winter of 1905 to 1906", "He was refused entry to the school on account of his race", "He never travelled outside the United States at any point"],
            correctIndex: 0,
            explanation: "He was an avid Francophile and married a French woman, which is easy to confuse with attendance.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Penn's archives record that Abele immersed himself as a student in:",
            options: ["The Beaux Arts style", "The Gothic Revival, which he later used at Duke University", "Structural engineering, which he studied alongside architecture", "Municipal planning, through the city's design review process"],
            correctIndex: 0,
            explanation: "A style is not a school, and he could learn that system of composition at Penn.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Cohen's suggestion about why the Paris story persisted is introduced with the word:",
            options: ["Perhaps", "Certainly, given the correspondence surviving in the firm's records", "Evidently, on the strength of Trumbauer's own published statements", "Undeniably, since both men repeated the account in print"],
            correctIndex: 0,
            explanation: "A labelled guess, which is how an honest writer keeps speculation out of the factual record.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "The 2005 Smithsonian article on the Durham question was written by:",
            options: ["Susan Tifft", "Amy Cohen, who later expanded it for Hidden City Philadelphia", "Dreck Wilson, drawing on his biographical dictionary research", "Henry Magaziner, the son of Abele's Penn classmate"],
            correctIndex: 0,
            explanation: "It reports two second-hand accounts suggesting Abele may have visited the campus.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "One account in that article came from John H. Wheeler, described as:",
            options: ["A Durham banker", "The executive director of the North Carolina Fund in the early 1960s", "A Trumbauer employee who travelled regularly to the Duke site", "The Duke University archivist who first catalogued the drawings"],
            correctIndex: 0,
            explanation: "He told George Esser that he recalled Abele coming to visit the campus during construction.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "The second account came from Henry Magaziner, who recalled Abele telling him about:",
            options: ["A hotel refusing him a room", "A train journey he made overnight to avoid segregated waiting rooms", "A meeting with James B. Duke at the Durham construction site", "An argument with Trumbauer over whether he should travel south"],
            correctIndex: 0,
            explanation: "A Durham hotel accommodated his white associate and refused him, on a trip to the university.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "What reason does Abele's family give for saying he did not travel south?",
            options: ["An earlier Jim Crow rail journey", "His health, which had been poor since the early 1930s", "A promise made to his wife when they married in 1925", "The firm's policy of sending only junior staff to construction sites"],
            correctIndex: 0,
            explanation: "After that journey he was determined never to suffer a similar humiliation.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Valentine Lee's remark about Abele and the Duke site was that his talents were:",
            options: ["Best used in the home office", "Wasted on a project of that size and repetitive character", "Better suited to the residential work the firm had built its name on", "Needed in Durham more than anywhere else in the practice"],
            correctIndex: 0,
            explanation: "Lee himself travelled repeatedly between Philadelphia and Durham, which makes the remark pointed.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Cohen's own position on whether Abele visited Durham is offered as:",
            options: ["A hunch", "A finding supported by the Smithsonian's oral history research", "A refutation of the family's account of the rail journey", "A question she declines to address in her article"],
            correctIndex: 0,
            explanation: "She says the mystery remains unresolved in the same sentence.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Duke University Libraries describes the visit question by saying it is generally accepted that he:",
            options: ["Did not travel south", "Visited the site at least once during the West Campus construction", "Refused every request from the university to attend in person", "Sent drawings by post rather than corresponding with administrators"],
            correctIndex: 0,
            explanation: "While noting that some evidence exists to suggest he may have visited.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "The NCSU dictionary's conclusion on the visit question is that it:",
            options: ["Appears unanswerable", "Was settled by the firm's surviving travel and expense records", "Should be decided in favour of the family's account", "Is less important than the question of who designed the chapel"],
            correctIndex: 0,
            explanation: "No significant personal papers or official firm records survive to settle it.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "This lesson's closing rule is that a hunch printed as a fact is:",
            options: ["How the servant story started", "Acceptable when three institutions have declined to settle the question", "The only way to write history where the records have been lost", "Preferable to leaving a question visibly open for readers"],
            correctIndex: 0,
            explanation: "A hunch labelled as a hunch is honest; the same sentence without the label is a future myth.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "The two second-hand accounts in the Smithsonian article are best described as:",
            options: ["Evidence, not a record", "Proof that Abele visited the campus during construction", "Testimony given under oath and preserved in a court file", "Contemporaneous notes made at the time of the visit"],
            correctIndex: 0,
            explanation: "Both are recollections of what another person said, one of them recorded decades after the fact.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "The confusion this lesson is designed to prevent is between a school and:",
            options: ["A style", "A licence, which the school could not confer in any case", "A firm, which is what the credit line actually names", "A degree, which Abele held from an American university"],
            correctIndex: 0,
            explanation: "Working in the Beaux Arts manner does not put anyone in the ateliers of the Paris school.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Taken together, the corrections in this section move Abele's credit:",
            options: ["Down on two buildings", "Up on every project the Trumbauer office undertook after 1909", "Sideways, reassigning it from the firm to the individual designers", "Nowhere, since none of them is supported by an institutional source"],
            correctIndex: 0,
            explanation: "The museum and Irvine Auditorium both come off the list, and the documented mechanism stays.",
            sourceLessonSlug: "too-much-credit",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Inside the firm, and around it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "sklarek-in-production",
      title: "17 · Sklarek, and the job with no credit line",
      section: "Section 5 · Inside the firm, and around it",
      body: `Norma Merrick Sklarek graduated from Columbia's school of architecture in 1950, applied to nineteen firms and was rejected by all of them. She was licensed in New York in 1954, on her first attempt at the examination, and the Beverly Willis Architecture Foundation's Pioneering Women of American Architecture records her as the first African American woman licensed in that state. In 1959 she became the first African American woman member of the American Institute of Architects, and in 1962 the first Black woman licensed in California (Beverly Willis Architecture Foundation, n.d.-a).

**Then she spent twenty years at Gruen Associates in Los Angeles and rose to director of architecture,** responsible for hiring and overseeing staff architects and for coordinating the technical side of the California Mart, Fox Plaza, the Pacific Design Center, San Bernardino City Hall and the United States Embassy in Tokyo.

**And here is the sentence that puts her in this course.** "Like many women architects in corporate firms, for most of her career Sklarek served as a project manager rather than design architect, although she is credited, with Cesar Pelli, as design architect on the U.S. Embassy in Tokyo" (Beverly Willis Architecture Foundation, n.d.-a).

Project manager. That is the role that turns a design into a building, and it is the role with no public credit line anywhere.

**Her son described the work in a way no credit format can hold.** "She would make it real. What kind of concrete. What kind of nuts and bolts. What kind of glass. She was in production, and she would tell you production was the real work" (quoted in Beverly Willis Architecture Foundation, n.d.-a).

**A former AIA president says out loud why she was kept there.** Marshall Purnell, quoted in her Los Angeles Times obituary, said that she was more than capable of designing large projects, but "it was unheard of to have an African American female who was registered as an architect. You didn't trot that person out in front of your clients and say, 'This is the person designing your project.'"

Read that as a description of routing, from someone who later led the profession's own institute. The design role was the client-facing one. The production role was not. Which one she was given had nothing to do with which one she could do.

**In 1980 two things happened.** She became the first African American woman elected to the AIA College of Fellows, and she joined Welton Becket Associates as a vice president, where she was responsible for Terminal One at Los Angeles International Airport, a fifty million dollar project she completed before the 1984 Olympic Games. Look at how that building appears in her own foundation's list of works: "Terminal One at the Los Angeles International Airport, Los Angeles, 1984, Welton Becket Associates" (Beverly Willis Architecture Foundation, n.d.-a). The firm is the credit. She is the person who was responsible.

**Then she put her name on a door.** In 1985 she co-founded Siegel Sklarek Diamond with Margot Siegel and Katherine Diamond, at the time the largest woman-owned architectural firm in the United States, and the foundation records her as the first African American woman to co-own an architectural practice. She left after four years, because the partners could not win commissions for large-scale projects and she missed the work.

That last fact is the one to keep. Getting your name on the door does not, by itself, get you the buildings.

:::reveal What role did Sklarek hold for most of her career, and what is unusual about it from a credit point of view? ||| Project manager rather than design architect, which is the role that turns a design into a building and has no public credit line anywhere.

:::reveal How does Sklarek's own foundation list Terminal One at LAX, and what does that show? ||| As a 1984 building by Welton Becket Associates. The firm is the credit line, while she was the person responsible for delivering it.

:::reveal Why did Sklarek leave the firm that carried her own name? ||| Because she and her partners could not win commissions for large-scale projects, and she missed the income and the challenges those brought.

## Vocabulary
- **Project manager**: the role that carries a design into construction, coordinating the technical work, and which no public credit format names.
- **Director of architecture**: Sklarek's position at Gruen Associates, covering hiring, staff supervision and the technical coordination of major projects.
- **College of Fellows**: the AIA's honorific body, to which Sklarek was elected in 1980.
- **Production**: the phase in which materials, details and assemblies are resolved, which Sklarek's son quotes her as calling the real work.

## Sources
Beverly Willis Architecture Foundation. (n.d.-a). *Norma Merrick Sklarek*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/norma-merrick-sklarek/`,
    },
    {
      slug: "greene-and-brown",
      title: "18 · Greene, Brown, and a record that is genuinely thin",
      section: "Section 5 · Inside the firm, and around it",
      body: `Beverly Loraine Greene was licensed in Illinois on 28 December 1942, certificate number 3002, at the age of twenty six (Beverly Willis Architecture Foundation, n.d.-b).

**Notice what kind of fact that is.** Not a press report, not a recollection. A dated entry with a certificate number, which is the licensing board's own record. When this course says a first claim needs the issuing institution, that is what it means. The Beverly Willis Architecture Foundation's project states that Greene was the first African American woman to be licensed as an architect in the United States, and its own entry on Sklarek phrases the same claim as "believed to be" the first, so this course reports both the claim and the certificate number and lets you see the difference between them.

**Her career then runs straight through the mechanism.** Degrees from the University of Illinois in 1936 and 1937 and a master's from Columbia in 1945. Work for the Chicago Housing Authority on the Ida B. Wells Homes. In 1944 she applied to the Metropolitan Life Insurance Company, which was planning an eight thousand unit housing complex in Lower Manhattan, and which was planning to bar Black residents from living in it. She expected not to be hired. She was one of the first architects hired (Beverly Willis Architecture Foundation, n.d.-b).

**And then look at how her best known buildings are credited.** Her foundation's own list of works names them like this: the Grosse Pointe Public Library, 1951, Marcel Breuer, architect. The New York University buildings at University Heights, 1956, Marcel Breuer, architect. The UNESCO headquarters Secretariat and Conference Hall in Paris, 1954 to 1957, Marcel Breuer, architect. She worked at Marcel Breuer and Associates from 1952 until her death in 1957, at forty one.

The credit line names Breuer. That is not a scandal and it is not an accident. It is the convention from Section 1, still running, thirty years after Trumbauer.

**Georgia Louise Harris Brown is the second case, and the sharpest.** Born in Topeka in 1918, she took a bachelor of science in architecture at the University of Kansas in 1944, having also taken evening classes at the Illinois Institute of Technology under Mies van der Rohe. She was licensed in Illinois in 1949, and the foundation records her as the second African American woman licensed as an architect in the United States (Beverly Willis Architecture Foundation, n.d.-c).

**Before that she worked for Kenneth Roderick O'Neal,** a Black architect and structural engineer whose Chicago office was, in her foundation's description, a mentor and first employer to many aspiring Black architects, and probably where she and Greene became acquainted (Beverly Willis Architecture Foundation, n.d.-c). Where the profession would not hire them, one office did.

**In 1949 she joined Frank J. Kornacker Associates, the structural engineers Mies used,** where between 1949 and 1953 she was the only professional woman. There she developed the structural calculations for Mies's Promontory Apartments and for 860 Lake Shore Drive.

**860 Lake Shore Drive is one of the most published buildings of the twentieth century.** The foundation's list of works records her contribution to it in the form the record actually takes: 860 Lake Shore Drive, Chicago, Mies van der Rohe, 1948 to 1951, structural calculations. And it states the general position plainly: she "was rarely credited as the designer in publications about these works. (Generally, it was the engineering firms that received the credit.)" (Beverly Willis Architecture Foundation, n.d.-c).

Two layers of the same convention stacked on each other. The building is credited to the design architect. The engineering is credited to the engineering firm. The person inside the engineering firm is credited nowhere. She left for Brazil in 1953.

**Now the honest statement, and this course is not going to dress it up.** Greene in 1942 and Brown in 1949 are, as far as the documented record goes, close to the whole list of Black women licensed as architects in the United States before Sklarek's New York registration in 1954. Three women. That is the finding. Padding it out with people whose licensure cannot be documented would make the section look fuller and would make it false.

:::reveal What makes Greene's 1942 licence an unusually strong piece of evidence for a first claim? ||| It is a dated licensing board record with a certificate number, number 3002, rather than a press report or a recollection.

:::reveal How does Greene's own foundation list the UNESCO headquarters she worked on, and what does that show? ||| As Marcel Breuer, architect, 1954 to 1957, which is the firm-and-principal convention still operating decades after the Trumbauer office.

:::reveal What two layers of credit convention sat between Georgia Louise Harris Brown and 860 Lake Shore Drive? ||| The building is credited to the design architect, Mies van der Rohe, and the engineering to the engineering firm, so the person inside the engineering firm appears nowhere.

## Vocabulary
- **Certificate number**: the identifier a licensing board assigns to a registration, which turns a claim about a licence into a checkable record.
- **Structural calculations**: the engineering work that establishes whether a designed structure will stand, credited to the engineering firm rather than to the person who performed it.
- **Stuyvesant Town**: the Lower Manhattan housing complex Greene was hired to work on, which its developer planned to bar Black residents from.
- **Thin record**: a documented list so short that the shortness is itself the finding, and which must not be padded to look fuller.

## Sources
Beverly Willis Architecture Foundation. (n.d.-a). *Norma Merrick Sklarek*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/norma-merrick-sklarek/

Beverly Willis Architecture Foundation. (n.d.-b). *Beverly Lorraine Greene*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/beverly-lorraine-greene/

Beverly Willis Architecture Foundation. (n.d.-c). *Georgia Louise Harris Brown*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/georgia-louise-harris-brown/`,
    },
    {
      slug: "a-door-of-your-own",
      title: "19 · A door of your own, and a school instead",
      section: "Section 5 · Inside the firm, and around it",
      body: `If the problem is that the credit belongs to whoever owns the firm, one answer is obvious: own the firm.

**Paul Revere Williams did exactly that.** Born in Los Angeles in 1894 and orphaned by the age of four, he was appointed to the first Los Angeles City Planning Commission in 1920, became a certified architect the following year, and opened his own practice in 1923 (Los Angeles Conservancy, n.d.). The Getty Research Institute, announcing the acquisition of his archive, states the firsts in one line: "he was the first African American member of the American Institute of Architects (AIA), its first African American Fellow, and ultimately its first African American Gold Medalist" (Getty Research Institute, 2020). The Los Angeles Conservancy dates the fellowship to 1957, and the AIA's own recipient list shows the Gold Medal going to Paul Revere Williams in 2017, thirty seven years after his death (American Institute of Architects, n.d.-b). Neither source gives a year for his AIA membership, so this course does not print one.

**Owning the door did not remove the conditions of the room.** The Getty writes that "He learned to draw upside down in order to sketch for clients from across the table", and that "He toured construction sites with hands clasped behind his back because he was not sure every person would want to shake a Black man's hand" (Getty Research Institute, 2020). This course prints those as the Getty states them and adds one qualification: it could not locate Williams saying either thing in his own published words, and has filed the question rather than treating an institutional retelling as a first-hand account.

**There is also a correction inside the Getty's announcement, and it belongs in this course.** "Although many believe that Williams' archive was destroyed in a fire during the 1992 Los Angeles civil unrest, in truth primarily business records were lost then. Most of the extensive archive was in a different location and is in excellent condition" (Getty Research Institute, 2020). Roughly thirty five thousand plans and ten thousand original drawings survive, kept for decades by his granddaughter Karen Elyse Hudson and now held jointly by the Getty and the USC School of Architecture.

That is the counterfactual to everything Section 3 described. His name was on the practice, and his papers survived. Which is why we can say what he designed.

**The second answer is stranger and older: build the school.** Robert Robinson Taylor enrolled at MIT in 1888 and graduated with the class of 1892. MIT's own Black History Project states the claim with a hedge this course keeps: he "was the first known black student to attend and graduate from MIT", and "is also considered to be the first accredited, academically trained African-American architect" (MIT Black History Project, n.d.). Booker T. Washington recruited him to Tuskegee Institute, where he spent a forty year career and designed most of the campus.

**And the campus was built by the students.** The National Park Service, in its lesson materials for the Tuskegee Institute National Historic Site, quotes Clarence G. Williams on Taylor's first building, Science Hall, completed in 1893: "It was constructed entirely by students, using bricks made also by students under Taylor's supervision" (National Park Service, n.d.). The plaque on the building today, now Thrasher Hall, says it more briefly: "Thrasher Hall, renovated in 1983, was built in 1893 by teachers and students using brick they made."

**Now read that as a credit question, because it is one.** A building at Tuskegee is credited to Tuskegee. The designer was on the faculty. The builders were the students, and the bricks came out of the ground they were standing on. Nobody's name is on any of it in the way a firm's name goes on a commission, and the thing that survived is not a credit line. It is a school with an architecture programme in it, which Tuskegee named after Taylor in 2010.

:::reveal Which three firsts does the Getty Research Institute attribute to Paul Revere Williams? ||| First African American member of the American Institute of Architects, its first African American Fellow, and its first African American Gold Medalist.

:::reveal What does the Getty correct about the fate of Williams's archive? ||| That it was destroyed in a 1992 fire. Primarily business records were lost, and most of the archive was elsewhere and survives in excellent condition.

:::reveal Who built the first building Robert R. Taylor designed at Tuskegee, and from what? ||| The students, entirely, using bricks the students had made themselves under his supervision.

## Vocabulary
- **Principal of your own firm**: the position that puts a person's own name on the credit line, which Williams reached by opening a practice in 1923.
- **AIA Gold Medal**: the institute's highest annual honour, awarded to Williams in 2017, thirty seven years after his death.
- **Institutional retelling**: a fact stated by an institution that is not itself the first-hand source, which this course prints with the distinction visible.
- **Thrasher Hall**: Taylor's Science Hall of 1893 at Tuskegee, built entirely by students from bricks they made.

## Sources
American Institute of Architects. (n.d.-b). *Gold Medal*. https://www.aia.org/design-excellence/awards/gold-medal

Getty Research Institute. (2020, June 30). *Archive of architect Paul Revere Williams jointly acquired by USC and Getty*. J. Paul Getty Trust. https://www.getty.edu/news/architect-paul-revere-williams-archive-acquired-usc-getty/

Los Angeles Conservancy. (n.d.). *Paul R. Williams*. https://www.laconservancy.org/learn/architect-biographies/paul-r-williams/

MIT Black History Project. (n.d.). *Robert R. Taylor, 1892*. Massachusetts Institute of Technology. https://www.blackhistory.mit.edu/archive/robert-r-taylor-1892

National Park Service. (n.d.). *One brick at a time: Robert R. Taylor's architectural vision for Tuskegee Institute*. U.S. Department of the Interior. https://www.nps.gov/articles/000/one-brick-at-a-time-robert-r-taylor-s-architectural-vision-for-tuskegee-institute.htm`,
    },
    {
      slug: "quiz-inside-and-around",
      title: "20 · Knowledge check: inside the firm, and around it",
      section: "Section 5 · Inside the firm, and around it",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Norma Merrick Sklarek was licensed in New York in 1954 after:",
            options: ["One attempt at the examination", "Three attempts spread over the four years following her graduation", "A special petition to the state board to accept her city employment", "Completing a further year of graduate study at Columbia University"],
            correctIndex: 0,
            explanation: "She passed on her first try, and later coached other candidates using that experience.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "In 1959 Sklarek became the first African American woman to be:",
            options: ["An AIA member", "Licensed as an architect in the state of California", "Elected to the American Institute of Architects College of Fellows", "Appointed director of architecture at a large Los Angeles firm"],
            correctIndex: 0,
            explanation: "Her California licence came in 1962 and her fellowship in 1980.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Sklarek became the first Black woman licensed in California in:",
            options: ["1962", "1954, the same year she was licensed in the state of New York", "1980, when she also joined Welton Becket Associates", "1985, when she co-founded her own architectural practice"],
            correctIndex: 0,
            explanation: "Two years after relocating from New York to take a position at Gruen Associates.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "At Gruen Associates, Sklarek rose to the position of:",
            options: ["Director of architecture", "Design principal for the firm's international commissions", "Managing partner with responsibility for the firm's finances", "Chief structural engineer for the Los Angeles office"],
            correctIndex: 0,
            explanation: "Responsible for hiring, for overseeing staff architects and for the technical coordination of major projects.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "For most of her career, what role did Sklarek hold?",
            options: ["Project manager", "Design architect on every major commission the firm undertook", "Consulting engineer to the firms that employed her", "Independent practitioner working under her own licence"],
            correctIndex: 0,
            explanation: "Rather than design architect, which her own foundation notes was common for women in corporate firms.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "On which building is Sklarek credited as design architect, alongside Cesar Pelli?",
            options: ["The U.S. Embassy in Tokyo", "Terminal One at Los Angeles International Airport", "The Pacific Design Center in West Hollywood", "San Bernardino City Hall in southern California"],
            correctIndex: 0,
            explanation: "It is the exception her foundation names in the same sentence as the general rule.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "How did Sklarek's son describe her contribution to a building?",
            options: ["She would make it real", "She could sketch an elevation faster than anyone else in the office", "She preferred the drawing board to any meeting with a client", "She insisted on visiting every site at least once a week"],
            correctIndex: 0,
            explanation: "What kind of concrete, what kind of nuts and bolts, what kind of glass, and production was the real work.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Marshall Purnell, quoted in her obituary, said Sklarek was more than capable of designing large projects but that:",
            options: ["Clients were not shown her", "The firms she worked for had no large projects to give her", "She preferred technical coordination to design work herself", "Her licence did not extend to the states where the work was"],
            correctIndex: 0,
            explanation: "You did not trot that person out in front of your clients as the person designing the project.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "What position did Purnell later hold?",
            options: ["President of the AIA", "Dean of an accredited school of architecture in California", "Chair of the California Architects Board's qualifications committee", "Director of the National Organization of Minority Architects"],
            correctIndex: 0,
            explanation: "Which makes his description of the routing a statement from inside the profession's own leadership.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "In 1980, Sklarek became the first African American woman elected to:",
            options: ["The AIA College of Fellows", "The board of the National Council of Architectural Registration Boards", "The California Architects Board's professional qualifications committee", "The faculty of the University of Southern California school of architecture"],
            correctIndex: 0,
            explanation: "She was also the first woman in the Los Angeles AIA chapter to receive that honour.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "The firm Sklarek joined as a vice president in 1980 was:",
            options: ["Welton Becket Associates", "Gruen Associates, where she remained for a further twenty years", "Skidmore, Owings and Merrill, which she had left in 1960", "The Jerde Partnership, where she later worked on the Mall of America"],
            correctIndex: 0,
            explanation: "Where she was responsible for Terminal One at Los Angeles International Airport.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "What was the reported value of the LAX Terminal One project?",
            options: ["Fifty million dollars", "Five million dollars, the largest single commission of her career to that date", "Two hundred million dollars, funded largely by the 1984 Olympic organisers", "An amount her foundation says was never publicly disclosed"],
            correctIndex: 0,
            explanation: "She completed it before the start of the 1984 Olympic Games.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "In her own foundation's list of works, Terminal One is credited to:",
            options: ["Welton Becket Associates", "Norma Merrick Sklarek, as project director and vice president", "Sklarek and Cesar Pelli jointly, as at the Tokyo embassy", "The Los Angeles Department of Airports, which commissioned it"],
            correctIndex: 0,
            explanation: "The firm is the credit line, while she is the person who was responsible for delivering it.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "The practice Sklarek co-founded in 1985 was:",
            options: ["Siegel Sklarek Diamond", "Sklarek and Associates, based in Pacific Palisades", "Merrick Fairweather Architects, named for her earlier married names", "Welton Becket and Sklarek, a partnership with her former employer"],
            correctIndex: 0,
            explanation: "With Margot Siegel and Katherine Diamond, and at the time the largest woman-owned architectural firm in the country.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Why did Sklarek leave the firm bearing her own name after four years?",
            options: ["No large commissions came", "A disagreement with her partners over the direction of the practice", "She had been offered the deanship of a school of architecture", "Her California licence lapsed while she was working abroad"],
            correctIndex: 0,
            explanation: "The partners could not win large-scale projects, and she missed the income and the challenges those brought.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "This lesson's conclusion from Sklarek's four years as a named partner is that:",
            options: ["A door is not a commission", "Woman-owned firms were barred from bidding on public projects", "The firm convention had been abolished by the mid-1980s", "Her fellowship guaranteed access to the largest commissions"],
            correctIndex: 0,
            explanation: "Getting your name on the door does not, by itself, get you the buildings.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Sklarek's twenty years at Gruen included technical coordination of which building?",
            options: ["The Pacific Design Center", "The Widener Library extension at Harvard University", "Terminal One at Los Angeles International Airport", "The UNESCO headquarters Secretariat in Paris"],
            correctIndex: 0,
            explanation: "Along with the California Mart, Fox Plaza, San Bernardino City Hall and the U.S. Embassy in Tokyo.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Sklarek graduated from which school of architecture?",
            options: ["Columbia", "The University of Illinois at Urbana-Champaign", "The Illinois Institute of Technology under Mies van der Rohe", "Howard University, where she later lectured"],
            correctIndex: 0,
            explanation: "In 1950, after which nineteen firms turned her down.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "The role of project manager is described in this lesson as the one that:",
            options: ["Turns a design into a building", "Selects the design the client will finally approve", "Negotiates the fee and manages the firm's cash flow", "Represents the owner against the design team"],
            correctIndex: 0,
            explanation: "And it has no public credit line anywhere, which is why it belongs in this course.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Purnell's remark is significant because it describes:",
            options: ["Routing, from inside the profession", "A single firm's hiring policy in one Los Angeles office", "A rule written into the AIA's code of ethics at the time", "An arrangement Sklarek herself had requested"],
            correctIndex: 0,
            explanation: "Which role she was given had nothing to do with which role she could do.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Beverly Loraine Greene was licensed in Illinois on:",
            options: ["28 December 1942", "1 July 1897, the day the state licensing requirement took effect", "12 June 1949, the year Georgia Louise Harris Brown was licensed", "4 October 1936, on completing her degree at the University of Illinois"],
            correctIndex: 0,
            explanation: "At the age of twenty six, with certificate number 3002.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "What detail makes Greene's licence an unusually strong piece of evidence?",
            options: ["A certificate number", "Contemporaneous coverage in three separate Chicago newspapers", "A sworn affidavit from the state board's registrar", "Her own account of the day, recorded in a later interview"],
            correctIndex: 0,
            explanation: "Number 3002, which is the licensing board's own record rather than a report about it.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "How does the Beverly Willis Architecture Foundation's project phrase Greene's status in its entry on Sklarek?",
            options: ["Believed to be the first", "Definitively the first, on the strength of the Illinois certificate", "One of several women licensed in the same year", "A claim it declines to evaluate at all"],
            correctIndex: 0,
            explanation: "Its Greene entry states it flatly, and this course reports both phrasings so the difference is visible.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Greene took her first two degrees at:",
            options: ["The University of Illinois", "Columbia University in New York City", "Howard University in Washington, D.C.", "The Illinois Institute of Technology in Chicago"],
            correctIndex: 0,
            explanation: "In 1936 and 1937, before a master's from Columbia in 1945.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Greene's early professional work in Chicago was for:",
            options: ["The Chicago Housing Authority", "Frank J. Kornacker Associates, the structural engineers Mies used", "The office of Kenneth Roderick O'Neal on the South Side", "Marcel Breuer's practice, which had a Chicago branch"],
            correctIndex: 0,
            explanation: "Including work on the Ida B. Wells Homes.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "The Metropolitan Life project Greene applied to work on in 1944 planned to:",
            options: ["Bar Black residents", "Rehouse the residents of the Ida B. Wells Homes in Manhattan", "Employ only architects who had been licensed for at least ten years", "Build entirely with prefabricated components manufactured off site"],
            correctIndex: 0,
            explanation: "She expected not to be hired, and was one of the first architects hired.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "How does Greene's own foundation list the UNESCO headquarters work?",
            options: ["Marcel Breuer, architect", "Beverly Lorraine Greene, associate architect, Paris", "Breuer and Greene, associated architects, 1954 to 1957", "UNESCO Building Committee, with no individual architect named"],
            correctIndex: 0,
            explanation: "The credit line names Breuer, which is the Section 1 convention still running.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Greene worked at Marcel Breuer and Associates from 1952 until:",
            options: ["Her death in 1957", "1962, when she returned to Chicago to open her own office", "1949, when she was licensed and moved to a structural engineering firm", "1945, when she completed her master's degree at Columbia"],
            correctIndex: 0,
            explanation: "She died at the age of forty one.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Georgia Louise Harris Brown took her architecture degree at:",
            options: ["The University of Kansas", "The Illinois Institute of Technology, under Mies van der Rohe", "The University of Illinois at Urbana-Champaign", "Columbia University's school of architecture in New York"],
            correctIndex: 0,
            explanation: "In 1944, having also taken evening classes at IIT under Mies in 1942.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Brown was licensed in Illinois in:",
            options: ["1949", "1942, in the same year and by the same board as Greene", "1953, immediately before she left the United States for Brazil", "1936, the year she completed her undergraduate studies"],
            correctIndex: 0,
            explanation: "Her foundation records her as the second African American woman licensed as an architect in the United States.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Frank J. Kornacker Associates, where Brown worked from 1949 to 1953, were:",
            options: ["Structural engineers", "The architects of record for most of Mies van der Rohe's Chicago work", "A general contractor specialising in high-rise apartment construction", "A planning consultancy retained by the Chicago Housing Authority"],
            correctIndex: 0,
            explanation: "The engineers Mies used, and Brown was the only professional woman in the office.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Brown's documented contribution to 860 Lake Shore Drive was:",
            options: ["Structural calculations", "The curtain wall detailing and the specification of its glass", "The interior planning of the apartments and their circulation", "The site plan relating the two towers to the lakefront"],
            correctIndex: 0,
            explanation: "For Mies's Promontory Apartments as well, both while she was at Kornacker.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "In publications about the buildings she worked on, Brown's foundation records that she was:",
            options: ["Rarely credited as the designer", "Named alongside the engineering firm in every published account", "Credited only in the Brazilian press after her emigration", "Listed as associate architect on the Chicago apartment towers"],
            correctIndex: 0,
            explanation: "Generally it was the engineering firms that received the credit.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "How many layers of credit convention sat between Brown and 860 Lake Shore Drive?",
            options: ["Two", "None, since structural engineers are always named in published accounts", "Four, counting the client, the contractor, the engineer and the architect", "One, since the building carries only the name of the design architect"],
            correctIndex: 0,
            explanation: "The building goes to the design architect and the engineering to the engineering firm, leaving her nowhere.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Where did Brown go in 1953?",
            options: ["Brazil", "New York City, to work for Marcel Breuer alongside Greene", "Los Angeles, where she joined Paul Revere Williams's office", "Topeka, Kansas, where she had been born in 1918"],
            correctIndex: 0,
            explanation: "She built a career in industrial architecture there, and died in 1999.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "This lesson's honest statement about the documented record before 1954 is that it amounts to:",
            options: ["Three women", "A list too long to summarise in a single lesson", "No documented licences at all outside Illinois", "A record that cannot be reconstructed from any surviving source"],
            correctIndex: 0,
            explanation: "Greene in 1942, Brown in 1949, and Sklarek's New York registration in 1954.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "What would padding that list out do, according to this lesson?",
            options: ["Make it false", "Make it more useful to teachers looking for role models", "Bring it into line with the figures NCARB publishes today", "Correct an omission the licensing boards themselves created"],
            correctIndex: 0,
            explanation: "It would make the section look fuller and would make it untrue, so the thinness stands as the finding.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Greene's master's degree from Columbia was awarded in:",
            options: ["1945", "1936, alongside her bachelor's degree from Illinois", "1942, the year she was licensed by the Illinois board", "1952, when she joined Marcel Breuer and Associates"],
            correctIndex: 0,
            explanation: "The year she moved to New York City for the Manhattan housing work.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Which other Breuer building appears in Greene's list of works?",
            options: ["Grosse Pointe Public Library", "The Whitney Museum of American Art in New York City", "Saint John's Abbey Church in Collegeville, Minnesota", "The Pirelli Tire Building in New Haven, Connecticut"],
            correctIndex: 0,
            explanation: "Listed as Marcel Breuer, architect, 1951, alongside the NYU buildings at University Heights.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Paul Revere Williams was born in Los Angeles in 1894 and was orphaned by the age of:",
            options: ["Four", "Fourteen, shortly before he began studying architecture", "Nine, when he was taken in by a family in South Los Angeles", "Twenty one, the year he became a certified architect"],
            correctIndex: 0,
            explanation: "The Getty records it in its announcement of the archive acquisition.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "In 1920, Williams was appointed to:",
            options: ["The first LA City Planning Commission", "The board of the American Institute of Architects' California chapter", "The California state board that examined candidates for licensure", "The faculty of the University of Southern California school of architecture"],
            correctIndex: 0,
            explanation: "He became a certified architect the following year, per the Los Angeles Conservancy.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Williams opened his own architectural practice in:",
            options: ["1923", "1920, in the same year as his city planning appointment", "1957, the year he became an AIA Fellow", "1940, when he became chief architect for the Pueblo del Rio housing"],
            correctIndex: 0,
            explanation: "Which put his own name on the credit line for everything the office produced.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Which three firsts does the Getty attribute to Williams in a single sentence?",
            options: ["AIA member, Fellow and Gold Medalist", "Licensed architect, city planning commissioner and federal housing architect", "Architect, author and university trustee in the state of California", "Designer, developer and client on his own residential projects"],
            correctIndex: 0,
            explanation: "First African American member of the institute, its first African American Fellow, and its first African American Gold Medalist.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The AIA's own recipient list shows Williams receiving the Gold Medal in:",
            options: ["2017", "1957, in the same year he was elected to the College of Fellows", "1980, the year of his death in Los Angeles", "2014, alongside the posthumous award to Julia Morgan"],
            correctIndex: 0,
            explanation: "Thirty seven years after his death in 1980.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Why does this course print no year for Williams's AIA membership?",
            options: ["Neither source gives one", "Because the institute's records for that period were destroyed", "Because his membership was granted and then rescinded twice", "Because the Getty and the Conservancy give conflicting years"],
            correctIndex: 0,
            explanation: "The Getty states the first without a date and the Conservancy dates only the fellowship.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "According to the Getty, Williams learned to draw upside down in order to:",
            options: ["Sketch from across the table", "Work quickly on a drawing board that could not be reoriented", "Produce mirror images of elevations for presentation prints", "Teach draughtsmen who sat opposite him in the office"],
            correctIndex: 0,
            explanation: "For the benefit of white clients who might have been uneasy sitting beside him.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The Getty also records that Williams toured construction sites:",
            options: ["With hands clasped behind his back", "Only after the workforce had left for the day", "Accompanied by a white associate on every visit", "Under a false name recorded in the site logs"],
            correctIndex: 0,
            explanation: "Because he was not sure every person would want to shake a Black man's hand.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "What qualification does this course attach to those two accounts?",
            options: ["No first-hand statement was found", "That the Getty attributes them to a single anonymous source", "That his granddaughter has publicly disputed both of them", "That they postdate his death by more than three decades"],
            correctIndex: 0,
            explanation: "The Getty is institutional, and this course did not locate Williams saying either in his own published words.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "What does the Getty correct about the 1992 fire and Williams's archive?",
            options: ["Mostly business records burned", "That the fire happened at all, since no such loss is documented", "That the archive was rebuilt from copies held by his clients", "That the surviving material was donated to the city rather than to Getty"],
            correctIndex: 0,
            explanation: "Most of the extensive archive was in a different location and is in excellent condition.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Roughly how many plans does the surviving Williams archive contain?",
            options: ["Thirty five thousand", "Two hundred, mostly for his best known Los Angeles houses", "Three thousand, one for each of the projects he completed", "Ten thousand, alongside thirty five thousand original drawings"],
            correctIndex: 0,
            explanation: "Along with about ten thousand original drawings, blueprints, renderings, photographs and correspondence.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Who had cared for the Williams archive before the joint acquisition?",
            options: ["His granddaughter", "The University of Southern California's architecture library", "The Los Angeles Conservancy, which catalogued it in the 1990s", "The National Organization of Minority Architects"],
            correctIndex: 0,
            explanation: "Karen Elyse Hudson, who has published extensively on his work.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Which two institutions jointly acquired the Williams archive?",
            options: ["USC and the Getty", "The Getty Research Institute and the Los Angeles Conservancy", "The Huntington Library and the California African American Museum", "The Smithsonian Institution and Howard University"],
            correctIndex: 0,
            explanation: "The USC School of Architecture and the Getty Research Institute, announced in 2020.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Why does this lesson call the Williams archive the counterfactual to Section 3?",
            options: ["His name and his papers both survived", "Because his firm outlived him by several decades", "Because the AIA kept a complete record of his commissions", "Because he was the only architect of his era to keep a diary"],
            correctIndex: 0,
            explanation: "Which is why we can say what he designed, in contrast with the Trumbauer office's employees.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "MIT's own Black History Project describes Robert Robinson Taylor as:",
            options: ["The first known Black graduate", "The first Black student ever admitted to any American technical institute", "MIT's first Black faculty member in the school of architecture", "The first licensed Black architect in the state of Massachusetts"],
            correctIndex: 0,
            explanation: "First known black student to attend and graduate from MIT, a hedge this course keeps.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "MIT states that Taylor is \"considered to be\" the first:",
            options: ["Academically trained Black architect", "Black architect to design a building on an American college campus", "Black student to complete a thesis in architectural design", "Black graduate to be recruited directly onto a college faculty"],
            correctIndex: 0,
            explanation: "The phrase considered to be is MIT's, and printing it as a flat claim would misreport the source.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Who recruited Taylor to Tuskegee Institute?",
            options: ["Booker T. Washington", "George Washington Carver, who ran the agricultural programme", "Robert Rochon Taylor, his son, from the Chicago Housing Authority", "The National Park Service, which now administers the site"],
            correctIndex: 0,
            explanation: "Washington modelled the institute's curriculum on MIT's, and Taylor stayed for a forty year career.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Taylor's first building at Tuskegee, Science Hall, was completed in:",
            options: ["1893", "1888, the year he enrolled at MIT", "1932, by which point he had designed most of the campus", "1983, when the building was renovated and renamed"],
            correctIndex: 0,
            explanation: "A year after he graduated, and it is now Thrasher Hall.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Who constructed Science Hall, and with what?",
            options: ["Students, with bricks they made", "A Montgomery contractor, using materials shipped from Birmingham", "Faculty members, using salvaged materials from earlier campus buildings", "Federal workers, under a programme funded from Washington"],
            correctIndex: 0,
            explanation: "Constructed entirely by students, using bricks made also by students under Taylor's supervision.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The plaque on Thrasher Hall today records that it was built in 1893 by:",
            options: ["Teachers and students", "The Tuskegee Normal and Industrial Institute's building department", "Robert R. Taylor and a crew of local bricklayers", "Students working under a contract with the state of Alabama"],
            correctIndex: 0,
            explanation: "Using brick they made, in the plaque's own wording.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Read as a credit question, a building at Tuskegee is credited to:",
            options: ["Tuskegee", "Robert R. Taylor, whose name appears on the drawings", "Booker T. Washington, who commissioned the whole campus", "The students, individually, on a plaque at each entrance"],
            correctIndex: 0,
            explanation: "The designer was on the faculty and the builders were the students being educated there.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "What did Tuskegee do with Taylor's name in 2010?",
            options: ["Named its architecture school after him", "Commissioned a portrait for the administration building", "Renamed the chapel he considered his masterpiece", "Placed his name on the cornerstone of Thrasher Hall"],
            correctIndex: 0,
            explanation: "The Robert R. Taylor School of Architecture and Construction Science, which is what survived instead of a credit line.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The obvious answer to a credit that belongs to whoever owns the firm is to:",
            options: ["Own the firm", "Refuse to work for anyone else's practice at all", "Negotiate a contractual right to be named on each commission", "Publish independently in the professional press"],
            correctIndex: 0,
            explanation: "Which is what Williams did in 1923, and what Chase did in Houston in 1952.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Taylor enrolled at MIT in:",
            options: ["1888", "1892, graduating with the class of that same year", "1893, immediately after completing Science Hall", "1868, the year the institute admitted its first students"],
            correctIndex: 0,
            explanation: "And graduated with the class of 1892, five years before Illinois licensed anybody.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The National Park Service materials on Taylor quote which writer on Science Hall?",
            options: ["Clarence G. Williams", "Ellen Weiss, whose biography describes the New Laundry", "Catherine W. Bishir, on North Carolina architecture", "Dreck Wilson, from his biographical dictionary"],
            correctIndex: 0,
            explanation: "From an article titled From Tech to Tuskegee, quoted in the park service's lesson materials.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Sklarek's twenty years at Gruen Associates began in:",
            options: ["1960", "1955, when she was offered a position at Skidmore, Owings and Merrill", "1962, the year she was licensed in California", "1980, when she was elected to the College of Fellows"],
            correctIndex: 0,
            explanation: "After five years at Skidmore, Owings and Merrill in New York.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Greene and Brown both worked in Chicago before moving on. What did Brown's Chicago employer before Kornacker specialise in?",
            options: ["Employing Black architects", "Municipal work commissioned by the Chicago Housing Authority", "Structural engineering for high-rise apartment construction", "Industrial buildings for manufacturers in the Midwest"],
            correctIndex: 0,
            explanation: "Kenneth Roderick O'Neal's office was a mentor and first employer to many aspiring Black architects.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "This course's summary of the O'Neal office's role is that where the profession would not hire, one office:",
            options: ["Did", "Trained candidates for the licensing examination without employing them", "Petitioned the Illinois board to relax its experience requirement", "Subcontracted work to architects it could not put on the payroll"],
            correctIndex: 0,
            explanation: "It gave Brown and others the paid experience the licensing path required and the market withheld.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Sklarek taught evening architecture courses in New York while working at:",
            options: ["Skidmore, Owings and Merrill", "Gruen Associates, before relocating to Los Angeles", "Welton Becket Associates, as a vice president of the firm", "The City of New York's Department of Public Works"],
            correctIndex: 0,
            explanation: "She joined that firm in 1955 and stayed five years before moving west.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "What did the Getty call Williams in announcing the archive acquisition?",
            options: ["The most significant African American architect of the 20th century", "The first architect of any background to practise in Los Angeles", "The most published American residential designer of the interwar years", "A designer whose reputation had been overstated by later writers"],
            correctIndex: 0,
            explanation: "The archive documents a career spanning nearly six decades and over three thousand projects.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The second answer to the credit problem that this lesson describes, after owning a firm, is to:",
            options: ["Build the school", "Publish the work under your own name in the professional press", "Take a public appointment where the credit is institutional", "Refuse commissions from clients who will not name the designer"],
            correctIndex: 0,
            explanation: "Taylor's forty years at Tuskegee produced a campus, and eventually a school of architecture bearing his name.",
            sourceLessonSlug: "a-door-of-your-own",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The shape, the corrections, and what this course refused
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-same-shape-elsewhere",
      title: "21 · The same shape elsewhere",
      section: "Section 6 · The shape, the corrections, and what this course refused",
      body: `Architecture is not special. It is just unusually well documented. Here is the shape, stated as three conditions you can check against any field in about a minute.

1. **The credited unit is an entity rather than a person.** A firm, a label, a studio, a practice, a house.
2. **The individual credit, where it exists at all, lives in a document the public never reads.** A sealed drawing set. A membership application. A personnel file. A calculation package.
3. **A licence or an equivalent gate controls who may occupy the named role,** and the gate runs through institutions that decide who gets in.

**Where all three hold, expect a category of expert people the public cannot name.** Where only some hold, the shape is weaker and the remedy is different. Run it and see.

**Law firms: three out of three.** A case is reported as advised by a firm. The individual's name is on a filing, which is a document read by a court and almost nobody else. Admission to the bar is a licence with an education gate, an examination and a character review. Ask a member of the public who wrote a famous brief and you will get a firm name or a partner's name, in that order.

**Structural and civil engineering: three out of three,** and Georgia Louise Harris Brown's career is the proof already in this course. The building goes to the design architect, the engineering to the engineering firm, and the person who ran the calculations goes nowhere. The professional engineer's stamp is the same kind of licensed act as an architect's seal.

**Advertising and design: two out of three.** The agency is the credited unit and the individual credit lives in an internal creative-credits list, but there is no licence. That difference matters more than it looks. With no licensing gate, the invisibility is entirely a matter of contract and norm, which means it can be changed by contract and norm, and does not require a state to act.

**Restaurant kitchens: mostly one out of three.** The restaurant and the chef whose name is on it are the credited unit. There is usually no protected title and no licence to cook. So the remedy here is neither statutory nor contractual. It is simply whether the person at the top chooses to name the people who cook.

**Film crews: the exception that proves the rule.** Film built a credit format with room for hundreds of names, negotiated by unions and guilds, with an arbitration process when a credit is disputed. Condition one fails on purpose, because the format was deliberately enlarged. That is what it looks like when a field decides to change the number of slots.

**Two cautions before you use this.**

First, counting the conditions tells you the shape of the invisibility. It does not tell you **who is inside the category.** That is a separate and entirely empirical question, and answering it needs the sort of counting Section 2 did: a population, a method, and a date on the number.

Second, a field with all three conditions is not thereby wicked. Licensure exists because roofs fall on people. The firm convention exists because somebody has to hold the liability. The right complaint is almost never "this convention should not exist". It is "this convention has a predictable side effect, the side effect lands unevenly, and here is the count".

:::reveal What are the three conditions that together produce a category of expert people the public cannot name? ||| The credited unit is an entity rather than a person; the individual credit lives in a document nobody reads; and a licence or equivalent gate controls who may occupy the named role.

:::reveal Which condition does advertising and design fail, and why does that change the remedy? ||| There is no licence, so the invisibility is a matter of contract and norm rather than statute, and can be changed by contract and norm without a state acting.

:::reveal Why is a film crew's credit roll the exception that proves the rule? ||| Because the field deliberately enlarged the number of slots, negotiating a credit format with room for hundreds of names and an arbitration process when a credit is disputed.

## Vocabulary
- **Credited unit**: whatever a field's public attribution names, which may be a firm, a label, a studio or a person.
- **Unread document**: the place an individual credit survives when the public format has no room for it, such as a sealed drawing set or a membership application.
- **Licensed act**: something only a registered professional may lawfully do, such as sealing drawings or filing certain court papers.
- **Slot change**: enlarging a credit format so it can hold more names, which is what a credited-crew system does and what an award rule change does.

## Sources
Beverly Willis Architecture Foundation. (n.d.-c). *Georgia Louise Harris Brown*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/georgia-louise-harris-brown/

Cal. Bus. & Prof. Code § 5536.1. (n.d.). California Legislative Information. https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=5536.1`,
    },
    {
      slug: "corrections-that-happened",
      title: "22 · Corrections that actually happened",
      section: "Section 6 · The shape, the corrections, and what this course refused",
      body: `Three corrections, all documented by the institutions that made them, and all of them changing something physical or procedural rather than issuing a statement.

**One: a student wrote a letter, and a campus changed its stone.** In 1986, students protesting Duke's investment in companies doing business with apartheid South Africa built shanties in front of the Chapel. A student wrote to the campus paper complaining that the ugliness of the shanties "violates our rights as students to a beautiful campus". Susan Cook, a Duke student and Abele's great grand-niece, replied that her great grand-uncle, as an African American and the designer of the campus, would not have objected to the shanties, since he was himself "a victim of apartheid" in his own country. Duke University Libraries writes that "This letter finally brought the architect's name to the attention of the student body and others" (Duke University Libraries, n.d.).

**What followed, and a date this course cannot settle.** A commissioned portrait of Abele was unveiled and hung in the foyer of the Allen Building, the first portrait of a Black person at Duke. Duke University Libraries dates it to 1987, Duke Today's own coverage says 1988, and the NCSU Libraries entry gives 21 April 1989. Three institutional accounts, three years. This course reports the disagreement and does not choose.

In 2016 the main quadrangle of West Campus was renamed Abele Quad. Then, in what Duke reported in January 2019, a cornerstone on Duke Chapel was engraved to honour the contributions of Abele **and** Horace Trumbauer, a permanent stone marker went up on the quad, and a bronze plaque went inside the chapel. The dean of Duke Chapel, Luke A. Powery, described it this way: "The architectural creativity of Julian Abele is one of the foundational stones of this university, so having his name, along with Horace Trumbauer's, on a foundational stone of Duke Chapel is fitting" (Duke Today, 2019).

**Note what that correction did not do.** It did not take Trumbauer's name off. It added a name. The format grew by one.

**Two: an archive got read.** In 2020, Harvard mounted a display of ephemera in Widener honouring Abele's role in the library, "a contribution that until recently had largely gone unacknowledged" (Harvard Gazette, 2020). The evidence was not new. The July 1912 letters had been in the Harvard University Archives the whole time. Somebody went and looked.

**Three: a credit rule was rewritten.** The American Institute of Architects states the eligibility for its highest annual honour like this: "The Gold Medal is open to a single individual or two individuals, (living or deceased), who through their collaborative efforts over time have created a singular body of distinguished architectural work" (American Institute of Architects, n.d.-b). Its own recipient list shows the 2016 medal going to Robert Venturi and Denise Scott Brown together, and the 2017 medal going to Paul Revere Williams, who died in 1980.

A format that once held one living name now holds two names of any status. That is a slot change, and it is the same move CREDIT-02 documents in two other award systems. This course prints the rule and not a date for its adoption, because the AIA's page states the rule and not its history.

**And two institutional responses worth knowing.** After Whitney M. Young Jr. addressed the AIA's 1968 national convention, the delegates passed Resolution 10, creating a national scholarship programme for members of "disadvantaged minority groups for the purpose of the study of architecture", and Resolution 13, calling on architects to "take a positive stand and become personally involved in the issues of our day" (American Institute of Architects, n.d.-c). The institute's Code of Ethics was later revised to ban discrimination on the basis of race, sex, creed or national origin in 1970, disability in 1977, and against members of the LGBT community in 1992.

Three years after the speech, Black architects meeting during the AIA National Convention in Detroit resolved to organise, and met again on 12 November 1971 in Nassau. That is the founding of the National Organization of Minority Architects. NOMA's own history page names fourteen people present at those founding meetings, which is worth knowing, because the number usually repeated is twelve (NOMA, n.d.).

:::reveal What did Susan Cook's 1986 letter to the Duke student paper accomplish? ||| It brought Julian Abele's name to the attention of the student body and others, in reply to a complaint that anti-apartheid shanties spoiled the campus.

:::reveal What is notable about the way Duke Chapel's cornerstone was engraved? ||| It carries both Abele's name and Horace Trumbauer's. The correction added a name rather than replacing one.

:::reveal How does the AIA's own rule describe who is eligible for the Gold Medal? ||| A single individual or two individuals, living or deceased, who through their collaborative efforts over time have created a singular body of distinguished architectural work.

## Vocabulary
- **Abele Quad**: the main quadrangle of Duke's West Campus, renamed in 2016 and given a permanent stone marker reported in January 2019.
- **Resolution 10 and Resolution 13**: the two measures AIA delegates passed at the 1968 convention, creating a scholarship programme and calling for personal involvement in the issues of the day.
- **NOMA**: the National Organization of Minority Architects, founded by architects who met during the 1971 AIA convention in Detroit and again in Nassau that November.
- **Additive correction**: a fix that enlarges a credit format rather than swapping one name for another, as Duke's cornerstone and the AIA's Gold Medal rule both do.

## Sources
American Institute of Architects. (n.d.-b). *Gold Medal*. https://www.aia.org/design-excellence/awards/gold-medal

American Institute of Architects. (n.d.-c). *50 years of Whitney M. Young Jr.'s historic 1968 AIA speech*. https://www.aia.org/resource-center/commemorating-50-years

Duke Today. (2019, January 10). *Julian Abele's legacy set in stone in quad plaque and chapel cornerstone*. Duke University. https://today.duke.edu/2019/01/julian-abeles-legacy-set-stone-quad-plaque-and-chapel-cornerstone

Duke University Libraries. (n.d.). *Julian Abele (1881-1950)*. Duke University. https://library.duke.edu/rubenstein/uarchives/history/articles/abele

Harvard Gazette. (2020, February 26). *Recognizing architect Julian Abele's contributions to Harvard*. Harvard University. https://news.harvard.edu/gazette/story/2020/02/recognizing-architect-julian-abeles-contributions-to-harvard/

NOMA. (n.d.). *History*. National Organization of Minority Architects. https://www.noma.net/history/`,
    },
    {
      slug: "what-this-course-refused",
      title: "23 · What this course refused to print",
      section: "Section 6 · The shape, the corrections, and what this course refused",
      body: `A course that only tells you what it knows is hiding half its work. Here is the ledger.

**Verified against an institution, then printed.** That Abele became chief designer at Trumbauer and took over the office after 1938, from Penn's University Archives and Duke University Libraries. That employees at the firm did not sign, and that his 1942 AIA application listed only his sister's house and the Duke work, from Cohen, with the 1942 year corroborated separately by Penn and Duke. That the Cameron Indoor Stadium drawings are the earliest recorded to carry his name beside the firm's, from the NCSU Libraries. That Beverly Loraine Greene was licensed in Illinois on 28 December 1942 under certificate number 3002, and that Norma Merrick Sklarek was licensed in New York in 1954, joined the AIA in 1959, was licensed in California in 1962 and was elected to the College of Fellows in 1980, from the Beverly Willis Architecture Foundation. That Black or African American architects were two percent of the architect population in NCARB's 2024 data, quoted with NCARB's own note about how that population is approximated.

**Reported as contested, with both positions named.** Whether Abele became chief designer in 1909 or 1908. Whether the first Duke portrait was unveiled in 1987, 1988 or 1989. Whether Abele ever visited the Duke site. Whether Irvine Auditorium is his, where Penn's website says yes and Dreck Wilson and a 1983 archivist's letter say no.

**Tested and refused.**

- **That Abele studied at the Ecole des Beaux-Arts.** Cohen and Penn's archives independently report no record. The story appears in a 1975 book and is repeated constantly. It is not printed here.
- **That Abele was the architect of the Philadelphia Museum of Art.** Cohen, drawing on Brownlee and Wilson, calls it an oversimplification and says no one individual holds the title.
- **The internship-waiver account of John S. Chase's Texas licence,** and the month it was issued. The Texas State Historical Association's entry does not carry either, and a claim about what a licensing board did needs the board.
- **A year for Paul Revere Williams's AIA membership.** The Getty states the first without a date, and the Los Angeles Conservancy dates only the fellowship.
- **Williams drawing upside down as his own account.** It is printed as the Getty states it, and this course did not find him saying it in his own published words.
- **A current count from the Directory of African American Architects.** Its introduction carries no date, so the figure in it is reported as a sentence rather than as today's number.
- **The title of the 1974 book** that called Abele a servant. Cohen does not name it, and naming it by inference would be the same error the myth is.

**Now the caution, and it is the most important paragraph in the course.** Five or six people, and a feeling that the subject has been covered, is the opposite of what the argument predicts. If the firm convention erased the name of a man who designed a landmark auditorium so thoroughly that his own colleague could not recall it, then it erased thousands of people whose names no institution ever wrote down. The people in this course are here because a university archive, a state board, a scholarly project or a historian happened to record them. That is a survivorship list, not a population.

**One sentence to take away.** The next time you read "designed by", ask what kind of thing the name is: a person, a firm, or the person the firm was named after.

:::reveal Name two claims this course tested and refused to print, and say why. ||| That Abele attended the Ecole des Beaux-Arts, because Cohen and Penn's archives independently report no record; and that he was the architect of the Philadelphia Museum of Art, because Cohen, drawing on Brownlee and Wilson, says no one individual holds that title.

:::reveal Why is a list of five or six named people the opposite of this course's argument? ||| Because the mechanism predicts that most employee designers left no retrievable trace, so the people who can be named are a survivorship list rather than a population.

:::reveal What is the one question to ask the next time you read that a building was designed by somebody? ||| What kind of thing the name is: a person, a firm, or the person the firm was named after.

## Vocabulary
- **Ledger**: the explicit account a course gives of what it verified, what it reported as contested, and what it refused to print.
- **Survivorship list**: a set of names that exists because somebody recorded them, which must not be mistaken for the population it came from.
- **Refusal**: a claim left unprinted because the evidence will not carry it, stated openly so a reader knows the omission was a decision.
- **Corroboration**: confirming a fact against a second independent institution, which this course did for the 1942 AIA year and the 1909 promotion.

## Sources
Beverly Willis Architecture Foundation. (n.d.-b). *Beverly Lorraine Greene*. Pioneering Women of American Architecture. https://pioneeringwomen.bwaf.org/beverly-lorraine-greene/

Cohen, A. (2019, May 23). *Unraveling myths about Philly's pioneering African American architect*. Hidden City Philadelphia. https://hiddencityphila.org/2019/05/unraveling-myths-about-phillys-pioneering-african-american-architect/

Getty Research Institute. (2020, June 30). *Archive of architect Paul Revere Williams jointly acquired by USC and Getty*. J. Paul Getty Trust. https://www.getty.edu/news/architect-paul-revere-williams-archive-acquired-usc-getty/

NCARB. (n.d.-b). *NCARB by the numbers 2025: Demographics*. National Council of Architectural Registration Boards. https://www.ncarb.org/nbtn2025/demographics

Texas State Historical Association. (n.d.). *Chase, John Saunders*. Handbook of Texas. https://www.tshaonline.org/handbook/entries/chase-john-saunders`,
    },
    {
      slug: "quiz-shape-and-corrections",
      title: "24 · Knowledge check: the shape and the corrections",
      section: "Section 6 · The shape, the corrections, and what this course refused",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "The first of the three conditions in this lesson is that the credited unit is:",
            options: ["An entity rather than a person", "A person whose licence has been verified by the state board", "Whichever party holds the professional liability insurance", "The client, who commissioned and paid for the work"],
            correctIndex: 0,
            explanation: "A firm, a label, a studio, a practice or a house.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The second condition is that the individual credit, where it exists, lives in:",
            options: ["A document nobody reads", "A public register maintained by a professional society", "The building itself, in the form of a plaque or inscription", "The contract between the client and the firm"],
            correctIndex: 0,
            explanation: "A sealed drawing set, a membership application, a personnel file, a calculation package.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The third condition is that a licence or equivalent gate controls:",
            options: ["Who may occupy the named role", "How many people a firm is permitted to employ at one time", "Which projects require a design architect at all", "Where the individual credit may be published"],
            correctIndex: 0,
            explanation: "And that gate runs through institutions that decide who gets in.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Where all three conditions hold, you should expect:",
            options: ["Experts the public cannot name", "A shortage of qualified practitioners in the field", "Higher pay for the uncredited role than for the credited one", "Litigation between employees and the firms that employ them"],
            correctIndex: 0,
            explanation: "A whole category of expertise that the public credit format has no way of displaying.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "How many of the three conditions do law firms satisfy?",
            options: ["Three", "One, since a filing carries the individual lawyer's name", "Two, since admission to the bar is not a licence in the relevant sense", "None, because clients always know which lawyer did the work"],
            correctIndex: 0,
            explanation: "The firm is the credited unit, the individual name sits on a court filing, and the bar is the licence.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Which case already in this course proves the engineering example?",
            options: ["Georgia Louise Harris Brown", "Norma Merrick Sklarek at Welton Becket Associates", "Beverly Loraine Greene at Marcel Breuer and Associates", "Julian Abele at the Office of Horace Trumbauer"],
            correctIndex: 0,
            explanation: "The building went to the design architect, the engineering to the firm, and the calculations to nobody.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The professional engineer's stamp is described in this lesson as:",
            options: ["The same kind of licensed act", "A courtesy title with no legal consequence attached", "A registration issued nationally rather than by a state", "An internal quality control mark used within firms"],
            correctIndex: 0,
            explanation: "Structurally identical to the architect's seal in Section 1.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Which condition does advertising and design fail?",
            options: ["The licence", "The credited unit, since agencies are not named publicly", "The unread document, since creative credits are widely published", "None, since all three apply exactly as they do in architecture"],
            correctIndex: 0,
            explanation: "There is no licence, so the invisibility is a matter of contract and norm rather than statute.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Why does the missing licence change the remedy in design?",
            options: ["No state action is needed", "Because unlicensed fields cannot enforce any credit rule at all", "Because agencies are legally required to publish creative credits", "Because clients own the work outright and can name whom they like"],
            correctIndex: 0,
            explanation: "What contract and norm created, contract and norm can change.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Restaurant kitchens satisfy roughly how many of the three conditions?",
            options: ["One", "All three, since food-safety certification licenses every cook", "Two, since recipes are documented but never published", "None, because chefs are always named on menus and reviews"],
            correctIndex: 0,
            explanation: "The restaurant and its named chef are the credited unit, and there is usually no protected title.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The remedy in a kitchen is therefore:",
            options: ["Whether the chef names people", "A licensing regime for professional cooks", "A collective bargaining agreement covering kitchen staff", "A statutory right of attribution for recipe authors"],
            correctIndex: 0,
            explanation: "Neither statutory nor contractual, but a choice made by the person at the top.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Film crews are called the exception that proves the rule because the field:",
            options: ["Enlarged the format", "Abolished the requirement for any individual credit", "Made the studio rather than the crew the credited unit", "Introduced licensing for every technical role on a production"],
            correctIndex: 0,
            explanation: "A credit format with room for hundreds of names, negotiated by unions and guilds, with arbitration for disputes.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Counting the three conditions tells you the shape of the invisibility but not:",
            options: ["Who is inside the category", "Whether the field is regulated by a state or a private body", "How long the convention has been in place", "Whether the credited unit is a firm or an individual"],
            correctIndex: 0,
            explanation: "That is a separate empirical question, needing a population, a method and a date on the number.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The second caution in this lesson is that a field with all three conditions is not thereby:",
            options: ["Wicked", "Impossible to reform without changing state law", "Free of any individual record of who did the work", "More profitable for its owners than a field without them"],
            correctIndex: 0,
            explanation: "Licensure exists because roofs fall on people, and somebody has to hold the liability.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The right form of the complaint, according to this lesson, is not that a convention should not exist but that:",
            options: ["Its side effect lands unevenly", "It has never been tested in a court of law", "It was adopted without consulting the people it affects", "It differs from the conventions used in other countries"],
            correctIndex: 0,
            explanation: "The convention has a predictable side effect, the side effect lands unevenly, and here is the count.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "In a law firm, the document carrying the individual's name is typically:",
            options: ["A court filing", "The retainer agreement signed with the client", "The firm's annual report to its partners", "The bar association's public register of members"],
            correctIndex: 0,
            explanation: "Read by a court and almost nobody else, which is condition two exactly.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "This lesson opens by saying architecture is not special, only:",
            options: ["Unusually well documented", "Older than the other fields it is compared with", "More heavily regulated than any comparable profession", "More willing to correct its own historical record"],
            correctIndex: 0,
            explanation: "Which is why it makes a good laboratory for a shape that runs everywhere.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "A field that satisfies only the first condition should be addressed by:",
            options: ["Contract or norm", "A campaign for state licensure of the uncredited role", "Litigation against the firms that hold the credit", "Waiting for the credited unit to be dissolved"],
            correctIndex: 0,
            explanation: "Where no licensing gate exists, the invisibility is entirely a matter of practice.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Which of these is offered as an example of an unread document?",
            options: ["A calculation package", "A published monograph on a completed building", "A press release issued when a building opens", "A photograph of the design team at the opening"],
            correctIndex: 0,
            explanation: "Alongside a sealed drawing set, a membership application and a personnel file.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "This lesson says the three conditions can be checked against any field in about:",
            options: ["A minute", "A week of archival research in the relevant trade press", "A year, once the population has been properly counted", "As long as it takes to interview practitioners in the field"],
            correctIndex: 0,
            explanation: "The counting of who is inside the category is the slow part, not the diagnosis of the shape.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Ask the public who wrote a famous legal brief and you will most likely get:",
            options: ["A firm name", "The name of the associate who drafted the first version", "The name of the judge who ruled on the case", "No answer, because briefs are not published"],
            correctIndex: 0,
            explanation: "A firm name or a partner's name, in that order, which is condition one working exactly as described.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Licensure is defended in this lesson with the observation that:",
            options: ["Roofs fall on people", "Most professionals would not train without it", "Clients cannot judge competence for themselves", "Firms would otherwise refuse to carry liability"],
            correctIndex: 0,
            explanation: "The same point Section 2 made with the Iroquois and Knickerbocker theatres.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "A credited-crew system differs from a firm credit line mainly in:",
            options: ["The number of slots", "Whether the credit is legally enforceable", "Whether a licence is required to appear on it", "Whether the client or the producer controls it"],
            correctIndex: 0,
            explanation: "Film built a format with room for hundreds of names rather than one.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The final requirement this lesson attaches to any claim about who is inside a category is:",
            options: ["A date on the number", "The approval of the professional body concerned", "A comparison with at least two other countries", "An estimate of how the figure will change in future"],
            correctIndex: 0,
            explanation: "A population, a method and a date, which is the discipline Section 2 applied to NCARB's figures.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The 1986 protests at Duke concerned the university's investment in companies doing business with:",
            options: ["Apartheid South Africa", "The tobacco industry that had endowed the university", "Defence contractors supplying the United States military", "Segregated hotels and restaurants in the American South"],
            correctIndex: 0,
            explanation: "Students built shanties in front of the Chapel, which is what set the correction in motion.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The complaint in the campus paper that prompted Susan Cook's reply was that the shanties:",
            options: ["Spoiled a beautiful campus", "Violated the university's rules on temporary structures", "Blocked access to the chapel during services", "Misrepresented the university's investment policy"],
            correctIndex: 0,
            explanation: "The student wrote that their ugliness violated students' rights to a beautiful campus.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Susan Cook's relationship to Julian Abele was that she was his:",
            options: ["Great grand-niece", "Granddaughter, who had preserved his surviving drawings", "Biographer, then working on a doctoral thesis at Duke", "Former student from his years teaching in Philadelphia"],
            correctIndex: 0,
            explanation: "She was a Duke student at the time, and her letter brought his name to the student body.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Cook argued that Abele would not have objected to the shanties because he was:",
            options: ["A victim of apartheid at home", "An architect who valued temporary structures on a campus", "A supporter of the anti-apartheid movement in his own lifetime", "Never consulted about the appearance of the finished quadrangle"],
            correctIndex: 0,
            explanation: "Her phrase was that he was himself a victim of apartheid in his own country.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Duke's first portrait of Abele hung in the foyer of:",
            options: ["The Allen Building", "Duke Chapel, beside the newly engraved cornerstone", "Baldwin Auditorium on the Georgian East Campus", "Cameron Indoor Stadium, whose drawings carry his name"],
            correctIndex: 0,
            explanation: "It was the first portrait of a Black person at Duke, and it now hangs in the Rubenstein Library.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "How many different years do institutional accounts give for that portrait's unveiling?",
            options: ["Three", "One, agreed by every source that mentions it", "Two, differing only over whether it was 1988 or 1989", "None, because no source records the date at all"],
            correctIndex: 0,
            explanation: "Duke's libraries say 1987, Duke Today says 1988 and the NCSU entry gives 21 April 1989.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "How does this course handle the three-way disagreement about the portrait year?",
            options: ["Reports it and chooses none", "Follows Duke, on the ground that it is the institution concerned", "Uses the earliest date, as the most likely to be a first unveiling", "Omits the portrait entirely from the account of the correction"],
            correctIndex: 0,
            explanation: "The same rule it applied to the 1909 and 1908 disagreement about the promotion.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The main quadrangle of Duke's West Campus was renamed Abele Quad in:",
            options: ["2016", "1986, immediately after the shanty protests", "2019, when the permanent stone marker was installed", "2020, in the same year as the Harvard display"],
            correctIndex: 0,
            explanation: "Duke reported the permanent stone marker for the quad in January 2019.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Whose names appear on the Duke Chapel cornerstone engraved in the correction?",
            options: ["Abele's and Trumbauer's", "Abele's alone, replacing the firm's earlier attribution", "The whole design team's, listed in order of seniority", "Neither, since the cornerstone carries only a date"],
            correctIndex: 0,
            explanation: "The format grew by one name rather than swapping one for another.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The dean of Duke Chapel who described the cornerstone was:",
            options: ["Luke A. Powery", "Tallman Trask III, the university's executive vice president", "Richard Brodhead, the president who announced the quad naming", "Kate Donovan, who curated the Harvard display"],
            correctIndex: 0,
            explanation: "He called the architectural creativity of Julian Abele one of the foundational stones of the university.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "What was new about Harvard's 2020 recognition of Abele?",
            options: ["Nothing in the evidence", "A newly discovered signed drawing for the Widener library", "A previously unpublished letter from Abele himself", "A revised attribution issued by the Trumbauer firm's successors"],
            correctIndex: 0,
            explanation: "The July 1912 letters had been in the Harvard University Archives all along. Somebody went and looked.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The Harvard Gazette described Abele's contribution to Widener as one that until recently had:",
            options: ["Largely gone unacknowledged", "Been the subject of an active scholarly dispute", "Been credited to another employee of the firm", "Been recorded only in the university's internal files"],
            correctIndex: 0,
            explanation: "The display of ephemera was mounted in the library he helped design.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The AIA's stated Gold Medal rule allows the award to go to:",
            options: ["One or two individuals", "Any number of collaborators on a single body of work", "Only living architects practising in the United States", "A firm, provided its principals are named in the citation"],
            correctIndex: 0,
            explanation: "A single individual or two individuals, living or deceased, for a singular body of distinguished work.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The AIA's recipient list shows the 2016 Gold Medal going to:",
            options: ["Venturi and Scott Brown", "Paul Revere Williams, thirty six years after his death", "Julia Morgan, the first woman to receive the award", "Norma Merrick Sklarek, in recognition of her production work"],
            correctIndex: 0,
            explanation: "Two people for one body of work, which is the slot change in action.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Why does this course print the Gold Medal rule but not a date for its adoption?",
            options: ["The AIA's page states the rule, not its history", "Because the rule has been amended several times since 2016", "Because the institute treats its bylaws as confidential", "Because the two recipients disagreed about when it changed"],
            correctIndex: 0,
            explanation: "The same discipline the course applies to every date it cannot source to the issuing body.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Resolution 10, passed at the AIA's 1968 convention, created:",
            options: ["A national scholarship programme", "A committee to review the institute's code of ethics", "An award named for Whitney M. Young Jr.", "A register of minority-owned architectural practices"],
            correctIndex: 0,
            explanation: "For members of disadvantaged minority groups for the purpose of the study of architecture.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Resolution 13 called on architects to:",
            options: ["Take a positive stand", "Report annually on the diversity of their own practices", "Decline commissions from segregated institutions", "Fund the scholarship programme from member dues"],
            correctIndex: 0,
            explanation: "And to become personally involved in the issues of the day.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The AIA's Code of Ethics was revised in 1970 to ban discrimination based on:",
            options: ["Race, sex, creed or national origin", "Disability, following the work of its Barrier Free Task Force", "Membership of the LGBT community", "Age or years of professional experience"],
            correctIndex: 0,
            explanation: "Disability followed in 1977 and members of the LGBT community in 1992.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "NOMA's founding began at the AIA National Convention in:",
            options: ["Detroit", "Portland, Oregon, where Whitney Young had spoken in 1968", "Nashville, Tennessee, where NCARB was founded in 1919", "Nassau, in the Bahamas, at the group's second meeting"],
            correctIndex: 0,
            explanation: "The group then met again on 12 November 1971 in Nassau.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "How many people does NOMA's own history page name as present at the founding meetings?",
            options: ["Fourteen", "Twelve, the number usually repeated in secondary accounts", "Twenty, drawn from chapters across the whole country", "Six, who then recruited others over the following year"],
            correctIndex: 0,
            explanation: "Which is itself a small correction, since the number usually repeated is twelve.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "What do all three corrections in this lesson have in common?",
            options: ["Each changed something physical or procedural", "Each was initiated by the institution rather than by an individual", "Each was completed within a year of the problem being identified", "Each replaced one credited name with a different one"],
            correctIndex: 0,
            explanation: "A stone, an exhibition drawn from an archive, and a rule about how many names an award may carry.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The Duke correction is described in this course as additive because it:",
            options: ["Added a name", "Added a new building to the list of Abele's works", "Added a further year of research before any change was made", "Added the family to the committee that made the decision"],
            correctIndex: 0,
            explanation: "Trumbauer's name stayed on the cornerstone and Abele's joined it.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The 2017 AIA Gold Medal recipient had died in:",
            options: ["1980", "1950, the same year as Julian Abele", "2012, in the same year as Norma Merrick Sklarek", "1957, the year Beverly Loraine Greene died"],
            correctIndex: 0,
            explanation: "Paul Revere Williams, which is why the living-or-deceased half of the rule matters.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "Which claim does the ledger list as verified against an institution and then printed?",
            options: ["Greene's certificate number 3002", "That Abele designed the Philadelphia Museum of Art", "That Abele studied at the Ecole des Beaux-Arts in Paris", "The month in which John S. Chase was licensed in Texas"],
            correctIndex: 0,
            explanation: "Licensed in Illinois on 28 December 1942, per the Beverly Willis Architecture Foundation.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The 1942 AIA year for Abele was corroborated by:",
            options: ["Penn and Duke", "The American Institute of Architects' own membership records", "The NCSU Libraries and the Harvard University Archives", "A single source, which is why the course flags it as contested"],
            correctIndex: 0,
            explanation: "Two institutions independently of Cohen's account of the application itself.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which of these does the ledger list as reported contested rather than settled?",
            options: ["Whether Abele visited the Duke site", "Whether employees at the Trumbauer firm signed their work", "Whether Greene held an Illinois architect's licence", "Whether Sklarek was licensed in New York in 1954"],
            correctIndex: 0,
            explanation: "Alongside the promotion year, the portrait year and the attribution of Irvine Auditorium.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The Ecole des Beaux-Arts claim is refused on the basis that:",
            options: ["Two institutions report no record", "The 1975 book that tells it has since been withdrawn", "The school's own registers were destroyed in wartime", "Abele's family denied it in a published statement"],
            correctIndex: 0,
            explanation: "Cohen and Penn's archives report the absence independently of each other.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The internship-waiver account of Chase's Texas licence is refused because:",
            options: ["The Handbook of Texas does not carry it", "It contradicts the year the Handbook of Texas gives", "It comes from an interview conducted after his death", "Texas licensing records from the 1950s are sealed"],
            correctIndex: 0,
            explanation: "A claim about what a licensing board did needs the board or an equivalent record.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why does the course print no year for Paul Revere Williams's AIA membership?",
            options: ["Neither source it used gives one", "Because the institute has disputed the widely reported year", "Because his membership was in a chapter rather than nationally", "Because the Getty and the Conservancy give different years"],
            correctIndex: 0,
            explanation: "The Getty states the first without a date, and the Conservancy dates only the fellowship.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The upside-down drawing account is printed:",
            options: ["As the Getty states it", "As a verbatim quotation from Williams's own 1937 essay", "As a family tradition with no institutional support", "Not at all, since no first-hand statement was located"],
            correctIndex: 0,
            explanation: "The course did not find Williams saying it in his own published words, and says so.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why is no current figure taken from the Directory of African American Architects?",
            options: ["Its introduction is undated", "Because the directory now counts designers as well as architects", "Because NOMA took the directory over and stopped publishing counts", "Because its figures conflict with the ones NCARB reports"],
            correctIndex: 0,
            explanation: "So the sentence is reported and the number is not treated as today's count.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The 1974 book that called Abele a servant is not named because:",
            options: ["Cohen does not name it", "Its author's estate objected to the quotation being reprinted", "It was published anonymously and no author has been identified", "Several books published that year contain the same sentence"],
            correctIndex: 0,
            explanation: "Naming it by inference would be the same class of error as the myth itself.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "NCARB's two percent figure is printed together with:",
            options: ["How the population was approximated", "A projection of where the figure will be in five years", "A comparison with the equivalent figure in other professions", "A note that the figure has never been independently checked"],
            correctIndex: 0,
            explanation: "The Certificate-holder method is part of the number rather than a footnote to it.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The caution this course calls its most important paragraph concerns:",
            options: ["A survivorship list", "The difficulty of dating events in the early twentieth century", "The risk of relying on any single institutional source", "The impossibility of proving a negative from an archive"],
            correctIndex: 0,
            explanation: "Five or six named people is a list of who was recorded, not a population.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The mechanism predicts that most employee designers of the era:",
            options: ["Left no retrievable trace", "Eventually opened practices under their own names", "Were credited internally even when not credited publicly", "Are recoverable from the surviving firm correspondence"],
            correctIndex: 0,
            explanation: "The Irvine Auditorium designer, whose colleague could not recall his name, is the proof.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The people who appear in this course are here because:",
            options: ["An institution recorded them", "They were the most accomplished designers of their generation", "They each eventually owned a firm bearing their own name", "Their work appeared in the professional press of the period"],
            correctIndex: 0,
            explanation: "A university archive, a state board, a scholarly project or a historian happened to write them down.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The single sentence this course asks you to take away is to ask, of any credit line:",
            options: ["What kind of thing the name is", "Whether the building still stands in its original form", "Which state issued the licence for the project", "How many people were employed on the drawings"],
            correctIndex: 0,
            explanation: "A person, a firm, or the person the firm was named after.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The Philadelphia Museum of Art claim appears in the ledger under:",
            options: ["Tested and refused", "Verified against an institution and printed", "Reported as contested with both positions named", "Held back pending further archival research"],
            correctIndex: 0,
            explanation: "Cohen, drawing on Brownlee and Wilson, calls it an oversimplification.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The Irvine Auditorium attribution appears in the ledger under:",
            options: ["Reported as contested", "Verified against Penn's own website and printed", "Refused entirely and omitted from the course", "Settled by the 1983 letter from the university archivist"],
            correctIndex: 0,
            explanation: "Penn's site says yes, and Dreck Wilson and the 1983 archivist's letter say no.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Sklarek's four dated firsts in the ledger come from:",
            options: ["The Beverly Willis Architecture Foundation", "The American Institute of Architects' College of Fellows records", "The California Architects Board's register of licensees", "Her Los Angeles Times obituary of February 2012"],
            correctIndex: 0,
            explanation: "New York in 1954, the AIA in 1959, California in 1962 and fellowship in 1980.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "A course that only tells you what it knows is described in this lesson as:",
            options: ["Hiding half its work", "Following the ordinary conventions of historical writing", "Easier for a general reader to follow", "Adequate, provided every claim carries a citation"],
            correctIndex: 0,
            explanation: "Which is why the ledger exists, and why the refusals are listed with their reasons.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The Cameron Indoor Stadium drawings appear in the ledger as verified by:",
            options: ["The NCSU Libraries", "Duke University Libraries' biography of the architect", "Amy Cohen's article for Hidden City Philadelphia", "The Harvard University Archives correspondence"],
            correctIndex: 0,
            explanation: "The earliest recorded to carry his name beside the firm's.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Listing a refusal openly matters because it tells a reader that the omission was:",
            options: ["A decision", "A limitation of the sources rather than of the argument", "Temporary, pending the release of sealed records", "Required by the institutions that supplied the material"],
            correctIndex: 0,
            explanation: "Rather than an oversight, which is the difference between a ledger and a gap.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which pair of years does the ledger record as contested for Abele's promotion?",
            options: ["1909 and 1908", "1906 and 1909, the years he joined and was promoted", "1938 and 1942, the succession and the AIA application", "1902 and 1906, his graduation and his return from Europe"],
            correctIndex: 0,
            explanation: "Penn and Duke give 1909; the NCSU Libraries entry gives 1908.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Duke's 2019 announcement also described the installation of:",
            options: ["A permanent stone marker", "A new portrait commissioned for the president's office", "A scholarship fund named for the architect's family", "A digitised catalogue of the firm's surviving drawings"],
            correctIndex: 0,
            explanation: "It replaced a temporary brass plaque near the West Campus bus stop, alongside a bronze plaque in the chapel.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The Harvard case shows that a correction sometimes requires no new evidence, only:",
            options: ["Somebody going to look", "A change in the law governing archival access", "Permission from the family of the person concerned", "A dispute between two institutions to force the issue"],
            correctIndex: 0,
            explanation: "The July 1912 letters had been in the university archives the whole time.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The ledger's category for a claim the evidence will not carry is:",
            options: ["Tested and refused", "Deferred, pending publication of the relevant archive", "Reported as contested, with both positions named", "Verified against an institution and then printed"],
            correctIndex: 0,
            explanation: "Distinct from contested, where two positions both have institutional backing.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The clearest one-line summary of this whole section's method is that a convention changes when:",
            options: ["Somebody rewrites the slots", "The people it disadvantages leave the profession", "A court finds it to be an unlawful restraint", "The historical record is finally complete"],
            correctIndex: 0,
            explanation: "A cornerstone with two names and an award rule admitting two people are both slot changes.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — 42 pooled questions serving 10, across all 18 teaching lessons
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-the-name-on-the-door",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The organising claim of this whole course is that a building is credited to:",
            options: ["A firm", "The licensed architect who sealed the construction documents", "Whichever designer the client dealt with most closely", "The person who conceived the massing and the principal elevations"],
            correctIndex: 0,
            explanation: "And a firm is named after whoever owns it, which makes the credit line an ownership statement.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "In the July 1912 Harvard correspondence, Coolidge refers to the people who worked out the plan as:",
            options: ["Your men", "The Philadelphia office, without naming any individual in it", "Mr Trumbauer's partners in the Land Title Building", "The draughtsmen assigned by the firm to the commission"],
            correctIndex: 0,
            explanation: "The client knew others did the work, and the format still carried one name.",
            sourceLessonSlug: "the-credited-unit-is-a-firm",
          },
          {
            prompt: "Under California Business and Professions Code section 5536.1, the stamp is affixed by:",
            options: ["A licensed architect", "Anyone in responsible control of the drawing set", "The building official who accepts the plans for review", "The owner, as evidence of acceptance of the documents"],
            correctIndex: 0,
            explanation: "Everyone in responsible control signs; only a licensee may stamp, as evidence of responsibility.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "In the AIA's own contract documents, the party that establishes design intent is the:",
            options: ["Design architect", "Architect of record, who also seals the construction documents", "Owner's representative appointed under the services agreement", "Construction manager engaged for the preconstruction phase"],
            correctIndex: 0,
            explanation: "And establishing design intent is not, in itself, a licensed act.",
            sourceLessonSlug: "what-actually-gets-signed",
          },
          {
            prompt: "The firm convention that withheld a signature from employees applied to:",
            options: ["Everyone in the office", "Only designers who had not yet been licensed by the state", "Only projects commissioned by private rather than public clients", "Only the junior draughtsmen below the rank of chief designer"],
            correctIndex: 0,
            explanation: "Which is why the grievance framing of this history is factually wrong and correctable in public.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "What happened to the name of the designer who finished Irvine Auditorium?",
            options: ["It was lost", "It was recorded on the drawings and later erased", "It was published in the university's own building history", "It was recovered from the firm's surviving personnel records"],
            correctIndex: 0,
            explanation: "A 1983 archivist's letter records that the one colleague interviewed could describe him but not name him.",
            sourceLessonSlug: "the-convention-did-not-check-race",
          },
          {
            prompt: "The first American state to require a licence to practise architecture was:",
            options: ["Illinois", "New York, which acted in 1915 after three earlier attempts", "California, which established its regulation board in 1901", "New Jersey, whose board followed California's in 1902"],
            correctIndex: 0,
            explanation: "On 1 July 1897, after bills from Adler's model had failed in 1887, 1889 and 1895.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "NCARB cites which two disasters in its account of why licensure was demanded?",
            options: ["The Iroquois and Knickerbocker theatres", "The Chicago fire of 1871 and the San Francisco earthquake of 1906", "The Triangle Shirtwaist fire and the Hartford circus fire", "Two apartment collapses in New York during the 1890s"],
            correctIndex: 0,
            explanation: "A Chicago theatre fire in December 1903 and a Washington roof collapse in January 1922.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Robert R. Taylor graduated from MIT in 1892, which was:",
            options: ["Before any state licensed architects", "The year Illinois first required a licence to practise", "The year the American Institute of Architects was founded", "Two decades after the first state registration board was created"],
            correctIndex: 0,
            explanation: "The gate arrived five years later, on top of an already sorted education system.",
            sourceLessonSlug: "where-licensure-came-from",
          },
          {
            prompt: "Which of the three stages of licensure runs through a private hiring decision?",
            options: ["Experience", "Education, since schools select their own students", "Examination, since boards decide who may sit it", "None, because all three are administered by the state"],
            correctIndex: 0,
            explanation: "Documented paid experience needs a firm willing to hire you, and the statute leaves that to the market.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "After graduating from Columbia, Norma Merrick Sklarek was rejected by how many firms?",
            options: ["Nineteen", "Five, before she took a civil service post with the city", "Two, both of which later offered her positions", "None, though she was offered only unpaid work"],
            correctIndex: 0,
            explanation: "She said they were not hiring women or African Americans and she did not know which was against her.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "The Handbook of Texas records that John S. Chase, after graduating in 1952:",
            options: ["Could not find a job at White firms", "Was hired immediately by a large Houston practice", "Returned to Maryland to work for his father's employer", "Was refused a licence by the state board on his first application"],
            correctIndex: 0,
            explanation: "So he relocated to Houston, took a teaching post and established his own practice.",
            sourceLessonSlug: "what-a-licence-gates",
          },
          {
            prompt: "NCARB's 2025 edition reports Black or African American architects as:",
            options: ["Two percent", "Seven percent, matching Asian and Latino architects", "Twenty percent, the share for architects of colour overall", "Six percent, which is their share of licensure candidates"],
            correctIndex: 0,
            explanation: "Unchanged over five years, while most other underrepresented groups saw slight increases.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "NCARB approximates the architect population using:",
            options: ["Its Certificate holders", "Federal labor statistics on employment in architecture", "The membership rolls of the American Institute of Architects", "The combined registers of the state licensing boards"],
            correctIndex: 0,
            explanation: "A very good proxy and still a proxy, which is why the method travels with the number.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Grant and Mann built their directory because federal labor statistics:",
            options: ["Do not record who is licensed", "Were published only once every ten years", "Excluded architects employed by public agencies", "Counted firms rather than individual practitioners"],
            correctIndex: 0,
            explanation: "They lump licensed architects together with interns, technicians and designer-builders.",
            sourceLessonSlug: "counting-who-is-in-the-room",
          },
          {
            prompt: "Penn's archives and Duke's libraries say Abele became chief designer in:",
            options: ["1909", "1906, the year he returned to the firm from Europe", "1908, the year the NCSU Libraries entry gives", "1938, when he took over the office after Trumbauer's death"],
            correctIndex: 0,
            explanation: "The NCSU Libraries entry gives 1908, and this course reports the disagreement.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "After Trumbauer's death in 1938, the practice was called:",
            options: ["Office of Horace Trumbauer", "Trumbauer and Abele, Architects, from the following year", "Abele and Frank, after the two men who led it", "The Philadelphia Design Office, dropping personal names"],
            correctIndex: 0,
            explanation: "Abele led it with William O. Frank under the dead principal's name for twelve years.",
            sourceLessonSlug: "abele-and-the-office",
          },
          {
            prompt: "When Abele applied to the AIA in 1942, he could list as his own:",
            options: ["His sister's house and the Duke work", "The Free Library and the Philadelphia Museum of Art", "Widener Library and the Whitemarsh Hall mansion", "Every building the office had produced since 1909"],
            correctIndex: 0,
            explanation: "Forty years into a career, because the convention had not left him a document to point at.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "The earliest drawings recorded to carry Abele's name beside the firm's are for:",
            options: ["Cameron Indoor Stadium", "Duke Chapel, the signature building of the Gothic campus", "The Free Library of Philadelphia's central branch", "The Allen Building, completed after his death"],
            correctIndex: 0,
            explanation: "They date from after Trumbauer's death, so the convention ran out of a principal rather than bending.",
            sourceLessonSlug: "the-1942-application",
          },
          {
            prompt: "Which Trumbauer building do Penn's archives say can be confidently assigned to Abele?",
            options: ["The Free Library of Philadelphia", "Irvine Auditorium at the University of Pennsylvania", "The Philadelphia Museum of Art on the Parkway", "Widener Library at Harvard University"],
            correctIndex: 0,
            explanation: "He personally presented its design to the client and to the city's design review panel.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "Is it accurate to say Abele's name never appeared on any drawings?",
            options: ["No", "Yes, for every project the firm completed before 1938", "Yes, because employees were contractually barred from signing", "Yes, according to both Cohen and the Penn archives"],
            correctIndex: 0,
            explanation: "Prints of the Philadelphia Museum of Art carry both signatures; the claim is about the vast majority.",
            sourceLessonSlug: "what-the-record-can-show",
          },
          {
            prompt: "The 1974 book's description of Abele as a servant is best described as:",
            options: ["A myth", "An exaggeration of a documented employment relationship", "A contested claim with institutional support on both sides", "An accurate account of his first years with the firm"],
            correctIndex: 0,
            explanation: "Abele held three architectural qualifications and was the firm's chief designer for decades.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen writes that some of the Abele myths give him:",
            options: ["Too much credit", "Credit for the work of the firm's other employees", "A licence he is not recorded as having held", "An education he did not have the means to obtain"],
            correctIndex: 0,
            explanation: "Which is why the largest part of her article takes two buildings away from him.",
            sourceLessonSlug: "the-servant-myth",
          },
          {
            prompt: "Cohen's conclusion about the Philadelphia Museum of Art is that the singular title belongs to:",
            options: ["No one individual", "Horace Trumbauer, whose firm held the commission", "Howell Lewis Shay, who led it inside the office for years", "Zantzinger and Borie, who completed the final phase"],
            correctIndex: 0,
            explanation: "It was a decades-long and not always harmonious collaboration between two firms.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "An over-claim is described in this course as:",
            options: ["A hostage", "A reasonable starting point for further research", "A necessary simplification for a general audience", "The strongest form a historical argument can take"],
            correctIndex: 0,
            explanation: "When it falls, it drags the verified claims standing next to it down too.",
            sourceLessonSlug: "too-much-credit",
          },
          {
            prompt: "On the claim that Abele studied at the Ecole des Beaux-Arts, Cohen and Penn's archives:",
            options: ["Independently report no record", "Disagree, with Penn accepting the account and Cohen rejecting it", "Both accept it, citing the 1975 book that first told it", "Both decline to address the question in print"],
            correctIndex: 0,
            explanation: "Which is about as strong as an absence gets, and is why nobody may print that he attended.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "Cohen's own view on whether Abele visited Durham is offered as:",
            options: ["A hunch", "A finding supported by the Smithsonian's research", "A refutation of the family's account", "A question she says the archives have settled"],
            correctIndex: 0,
            explanation: "She adds in the same sentence that the mystery remains unresolved.",
            sourceLessonSlug: "the-school-that-is-not-there",
          },
          {
            prompt: "For most of her career, Norma Merrick Sklarek served as:",
            options: ["A project manager", "The design architect on her firms' largest commissions", "An independent consultant retained by several firms at once", "A structural engineer supporting the design teams"],
            correctIndex: 0,
            explanation: "Rather than design architect, which her own foundation notes was common for women in corporate firms.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Terminal One at LAX appears in Sklarek's own foundation's list of works credited to:",
            options: ["Welton Becket Associates", "Norma Merrick Sklarek, as vice president and project director", "Gruen Associates, where she was director of architecture", "The Los Angeles Department of Airports"],
            correctIndex: 0,
            explanation: "The firm is the credit line, and she is the person who was responsible for delivering it.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "Sklarek left the firm carrying her own name after four years because:",
            options: ["Large commissions did not come", "Her partners dissolved the practice without warning", "She was elected to the AIA College of Fellows", "Her California licence had lapsed while she was abroad"],
            correctIndex: 0,
            explanation: "Getting your name on the door does not, by itself, get you the buildings.",
            sourceLessonSlug: "sklarek-in-production",
          },
          {
            prompt: "The strongest evidence for Beverly Loraine Greene's licence is:",
            options: ["A certificate number", "Contemporaneous reporting in the Chicago press", "Her own account, given in a later interview", "A letter from the Illinois board to her employer"],
            correctIndex: 0,
            explanation: "Licensed in Illinois on 28 December 1942 under number 3002, which is the board's own record.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "Georgia Louise Harris Brown's documented contribution to 860 Lake Shore Drive was:",
            options: ["Structural calculations", "The design of the ground floor lobby and its finishes", "The curtain wall detailing that gave the building its character", "The site plan relating the two towers to the lakefront"],
            correctIndex: 0,
            explanation: "The building is credited to Mies van der Rohe and the engineering to the engineering firm.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "This course's statement about Black women licensed as architects before 1954 is that:",
            options: ["The record is genuinely thin", "The record is complete and runs to several dozen names", "No licences at all can be documented from that period", "The figure cannot be estimated from surviving sources"],
            correctIndex: 0,
            explanation: "Greene in 1942, Brown in 1949 and Sklarek in 1954, and padding it would make it false.",
            sourceLessonSlug: "greene-and-brown",
          },
          {
            prompt: "The Getty states that Paul Revere Williams was the AIA's first African American member, first Fellow and:",
            options: ["First Gold Medalist", "First national president from west of the Mississippi", "First member elected to its national ethics council", "First honorary member from outside the profession"],
            correctIndex: 0,
            explanation: "The AIA's own recipient list shows the Gold Medal going to him in 2017.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "What does the Getty correct about the fate of Williams's archive?",
            options: ["Most of it survived the 1992 fire", "That it was ever kept by his family after his death", "That it contained drawings for unbuilt projects", "That any of it was destroyed in the 1992 unrest"],
            correctIndex: 0,
            explanation: "Primarily business records were lost, and the bulk of the archive was elsewhere in excellent condition.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "Robert R. Taylor's Science Hall at Tuskegee was constructed by:",
            options: ["Students", "A Montgomery contractor working to Taylor's drawings", "Faculty members during the institute's summer recess", "Federal labourers under a Reconstruction era programme"],
            correctIndex: 0,
            explanation: "Entirely by students, using bricks the students had made under his supervision.",
            sourceLessonSlug: "a-door-of-your-own",
          },
          {
            prompt: "The three conditions that produce an unnameable category of expertise are an entity credit, an unread document and:",
            options: ["A licence gate", "A shortage of trained practitioners in the field", "A contract assigning ownership of the work", "A tradition of anonymity among senior practitioners"],
            correctIndex: 0,
            explanation: "Where all three hold, expect experts the public cannot name.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "Advertising and design satisfy two of the three conditions but lack:",
            options: ["A licence", "A credited unit that is an entity rather than a person", "Any internal record of who did the work", "A public credit format of any kind"],
            correctIndex: 0,
            explanation: "Which means the remedy is contract and norm rather than statute.",
            sourceLessonSlug: "the-same-shape-elsewhere",
          },
          {
            prompt: "The Duke Chapel cornerstone engraved in the correction carries:",
            options: ["Both names", "Abele's name alone, replacing the earlier attribution", "The names of every designer in the Trumbauer office", "No name at all, only the date of the chapel's completion"],
            correctIndex: 0,
            explanation: "The correction added a name rather than swapping one for another.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "The AIA's stated Gold Medal rule now admits:",
            options: ["One or two individuals", "Any number of collaborators on one body of work", "Only architects living at the time of the award", "Firms as well as individuals, if the citation names the principals"],
            correctIndex: 0,
            explanation: "Living or deceased, which is a slot change in the same family as the corrections CREDIT-02 documents.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "NOMA's own history page names how many people present at its founding meetings?",
            options: ["Fourteen", "Twelve, the number usually repeated in secondary accounts", "Twenty, drawn from chapters across the country", "Two, who then recruited the rest over the following year"],
            correctIndex: 0,
            explanation: "Which is a small correction to the number that is usually repeated.",
            sourceLessonSlug: "corrections-that-happened",
          },
          {
            prompt: "This course's caution about naming five or six people is that the list is:",
            options: ["A survivorship list", "Long enough to represent the profession of the period", "Limited by the space available rather than by the evidence", "Drawn from the licensing boards' complete registers"],
            correctIndex: 0,
            explanation: "The people here are the ones an institution happened to record, not a population.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "The question this course asks you to carry away is what kind of thing the name in a credit line is: a person, a firm, or:",
            options: ["The person the firm was named after", "The client who commissioned and paid for the building", "The authority that issued the permit for construction", "The contractor who assembled the finished structure"],
            correctIndex: 0,
            explanation: "Which is the whole argument compressed into one habit of reading.",
            sourceLessonSlug: "what-this-course-refused",
          },
        ],
      },
    },
  ],
};
