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
    // APPEND-HERE
  ],
};
