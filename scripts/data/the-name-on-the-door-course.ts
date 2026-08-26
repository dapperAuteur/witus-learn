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
    // APPEND-HERE
  ],
};
